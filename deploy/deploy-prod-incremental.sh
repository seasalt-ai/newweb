#!/usr/bin/env bash
set -euo pipefail

# Incremental Production deployment script - deploys only changed files to seasalt.ai
# MUST be run from main branch for safety
#
# HOW THIS WORKS:
# ================
# This script deploys ONLY CHANGED FILES to a SEPARATE GitHub repository
# (seasalt-ai/seasalt-ai.github.io) which serves the production website.
#
# The incremental deployment process:
# 1. Builds the website in the current repository (creates dist/ folder)
# 2. Clones/updates the production repo to ~/deployment-cache/seasalt-ai.github.io/
# 3. Creates a backup tag of the current production state
# 4. Compares files between new build and current production
# 5. Only copies/updates CHANGED files (additions, modifications, deletions)
# 6. Commits and pushes only the changed files to the master branch
# 7. GitHub Pages automatically serves the updated content
#
# BENEFITS:
# - Much faster deployments (seconds vs minutes for large sites)
# - Reduced bandwidth usage
# - Better git history showing only actual changes
# - Safer deployments with less chance of corruption
#
# IMPORTANT: The production repo is completely separate from this source code repo.
# It only contains the compiled/built website files, never the source code.
#
# PREREQUISITES:
# - SSH key with push access to seasalt-ai/seasalt-ai.github.io repo
# - Node.js and npm installed for building the project
# - Must be on 'main' branch with clean working tree
# - rsync installed (usually available on Unix systems)

# Get the directory where this script is located
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

# Source utilities
source "$SCRIPT_DIR/deploy-utils.sh"

# Configuration
BUILD_DIR="dist"                                          # Build output directory from npm run build
PROD_REPO_URL="git@gh.seasalt:seasalt-ai/seasalt-ai.github.io.git"  # Production repo (separate from source)
PROD_REPO_NAME="seasalt-ai.github.io"                   # Repository name
PROD_REPO_DIR="/Volumes/WD_BLACK/Projects/deployment-cache/$PROD_REPO_NAME"  # Local cache location for faster deployments
PROD_BRANCH="master"                                     # Production branch (GitHub Pages default)
BACKUP_TAG_PREFIX="prod-backup"                          # Prefix for backup tags
REQUIRED_BRANCH="main"                                   # Must deploy from this branch

# GitHub safety limits
MAX_FILES_PER_PUSH=800                                   # Max files to push at once (stay under GitHub limits)
GITHUB_RATE_LIMIT_DELAY=10                              # Seconds to wait between batched pushes

# New variables for incremental deployment
CHANGES_LOG="/Volumes/WD_BLACK/Projects/deployment-cache/last-deployment-changes.log"
TEMP_DIFF_DIR="/Volumes/WD_BLACK/Projects/deployment-cache/temp-diff"

# Ensure temp directory is cleaned up on exit
trap 'rm -rf "$TEMP_DIFF_DIR"' EXIT

# Function to get recently changed source files using git
get_recently_changed_files() {
    local days_back="${1:-7}"  # Default to 7 days
    
    print_info "Getting recently changed source files (last $days_back days)..."
    
    # Get files changed in the last N days, excluding build artifacts
    local changed_files=$(git log --since="$days_back days ago" --name-only --pretty=format: | \
        grep -E '\.(astro|tsx?|jsx?|md|json|css|scss|svg|png|jpg|jpeg|webp)$' | \
        sort -u | \
        grep -v '^dist/' | \
        grep -v '^node_modules/' | \
        head -50)  # Limit to 50 files to avoid too many
    
    if [[ -n "$changed_files" ]]; then
        print_info "Recently changed source files:"
        echo "$changed_files" | sed 's/^/  - /'
        echo "$changed_files"
    else
        echo ""
    fi
}

# Function to compare and sync files incrementally
sync_files_incrementally() {
    local source_dir="$1"
    local target_dir="$2"
    
    print_info "Analyzing file changes..."
    
    # First, get context of what source files changed recently
    local recent_source_changes=$(get_recently_changed_files 7)
    if [[ -n "$recent_source_changes" ]]; then
        echo ""
        print_info "This can help explain why certain built files changed."
        echo ""
    fi
    
    # Create temp directory for analysis
    mkdir -p "$TEMP_DIFF_DIR"
    
    # Use rsync with --itemize-changes for robust change detection
    local rsync_output="$TEMP_DIFF_DIR/rsync-changes.log"
    
    # Build rsync options based on comparison method
    local rsync_opts="-avh --delete --dry-run --itemize-changes"
    case "$RSYNC_COMPARISON_METHOD" in
        "checksum")
            rsync_opts="$rsync_opts --checksum"
            ;;
        "size-only") 
            rsync_opts="$rsync_opts --size-only"
            ;;
        "timestamp")
            # Default rsync behavior (timestamp + size)
            ;;
    esac
    
    # Run rsync in dry-run mode with itemized changes to get structured output
    rsync $rsync_opts \
        --exclude='.git' \
        --exclude='deployment-info.txt' \
        --exclude='CNAME' \
        --exclude='.nojekyll' \
        "$source_dir/" "$target_dir/" > "$rsync_output" 2>&1 || true
    
    # Parse rsync itemized output to categorize changes
    local added_files=()
    local modified_files=()
    local deleted_files=()
    
    # Count different types of changes
    local total_changes=0
    
    # Parse rsync itemized output - much more reliable than string matching
    # Format: XYZcdefghijkl filename
    # Where X = file type, Y = checksum, Z = size, etc.
    # Key patterns:
    #   *deleting   = file deletion
    #   >f+++++++++ = new file (all + means new)
    #   >f.st...... = modified file (. means unchanged, letters mean changed)
    #   cd+++++++++ = new directory
    while IFS= read -r line; do
        # Skip empty lines and summary lines
        [[ -z "$line" ]] && continue
        [[ "$line" =~ ^(sent|total|receiving|created|delta-transmission) ]] && continue
        
        # Extract the itemize code (first 11 characters) and filename
        if [[ ${#line} -gt 11 ]]; then
            local itemize_code="${line:0:11}"
            local filename="${line:12}"
            
            # Skip directories (they don't count as content changes)
            [[ "$filename" =~ /$ ]] && continue
            
            # Parse the itemize code for reliable change detection
            case "$itemize_code" in
                "*deleting "*)
                    # File deletion - starts with *deleting
                    deleted_files+=("$filename")
                    ((total_changes++))
                    ;;
                ">f+++++++++")
                    # New file - >f followed by all + symbols (means completely new)
                    added_files+=("$filename")
                    ((total_changes++))
                    ;;
                ">f"*)
                    # Modified file - >f followed by change indicators
                    # Position meanings: >fYcstpoguax where:
                    #   Y = type (f=file), c = checksum, s = size, t = timestamp, 
                    #   p = permissions, o = owner, g = group, u = unknown, a = ACL, x = extended
                    # 
                    # BE MORE CONSERVATIVE: Only count as "modified" if content actually changed
                    # We only care about checksum (position 2) and size (position 3) changes
                    # Ignore timestamp-only changes which are common but not meaningful for web content
                    local change_chars="${itemize_code:2:2}"  # Extract positions 2-3 (checksum, size)
                    if [[ "$change_chars" =~ [^.] ]]; then
                        # Content actually changed (checksum or size difference)
                        modified_files+=("$filename")
                        ((total_changes++))
                    fi
                    # Note: Files with only timestamp changes (>f..t......) are ignored
                    ;;
                "cd+++++++++")
                    # New directory - ignore for counting purposes (directories don't count as content changes)
                    ;;
                ".d"*)
                    # Directory with only timestamp/permission changes - ignore for counting
                    ;;
                *) 
                    # Unknown pattern - for debugging purposes, could log this
                    # Uncomment the next line if you want to debug unknown patterns:
                    # echo "DEBUG: Unknown rsync itemize pattern: '$itemize_code' for file: '$filename'" >&2
                    ;;
            esac
        fi
    done < "$rsync_output"
    
    # Display change summary
    echo ""
    print_info "📊 Change Summary:"
    echo "  📁 Files to add: ${#added_files[@]}"
    echo "  ✏️  Files to modify: ${#modified_files[@]}"
    echo "  🗑️  Files to delete: ${#deleted_files[@]}"
    echo "  📈 Total changes: $total_changes"
    
    # If no changes, exit early
    if [[ $total_changes -eq 0 ]]; then
        print_success "No file changes detected - deployment not needed!"
        rm -rf "$TEMP_DIFF_DIR"
        return 1
    fi
    
    # Show some example changes (first 10 of each type)
    if [[ ${#added_files[@]} -gt 0 ]]; then
        echo ""
        print_info "📁 New files (showing first 10):"
        printf '  + %s\n' "${added_files[@]:0:10}"
        [[ ${#added_files[@]} -gt 10 ]] && echo "  ... and $((${#added_files[@]} - 10)) more"
    fi
    
    if [[ ${#modified_files[@]} -gt 0 ]]; then
        echo ""
        print_info "✏️  Modified files (showing first 10):"
        printf '  ~ %s\n' "${modified_files[@]:0:10}"
        [[ ${#modified_files[@]} -gt 10 ]] && echo "  ... and $((${#modified_files[@]} - 10)) more"
    fi
    
    if [[ ${#deleted_files[@]} -gt 0 ]]; then
        echo ""
        print_info "🗑️  Deleted files (showing first 10):"
        printf '  - %s\n' "${deleted_files[@]:0:10}"
        [[ ${#deleted_files[@]} -gt 10 ]] && echo "  ... and $((${#deleted_files[@]} - 10)) more"
    fi
    
    echo ""
    
    # Smart threshold check based on recent git activity
    local recent_source_count=$(echo "$recent_source_changes" | grep -c .)
    local expected_build_multiplier=10  # Rough estimate: 1 source file = ~10 built files
    local expected_changes=$((recent_source_count * expected_build_multiplier))
    
    # Set reasonable thresholds
    local warning_threshold=50
    local suspicious_threshold=200
    
    # Adjust thresholds based on recent activity
    if [[ $recent_source_count -gt 0 ]]; then
        warning_threshold=$((expected_changes + 20))
        suspicious_threshold=$((expected_changes * 3))
    fi
    
    # Confirm incremental deployment with intelligent thresholds
    if [[ "$FORCE_SYNC" == "true" ]]; then
        print_success "Force sync mode: Auto-proceeding with $total_changes files (warnings bypassed)"
    elif [[ $total_changes -gt $suspicious_threshold ]]; then
        print_warning "🚨 VERY LARGE number of changes detected ($total_changes files)"
        echo "Expected ~$expected_changes files based on $recent_source_count recent source changes."
        echo "This suggests either:"
        echo "  1. A major rebuild occurred (all files regenerated)"
        echo "  2. Configuration/build system changes affected many files"
        echo "  3. You should use full deployment instead"
        echo ""
        echo "💡 Tip: Use --force-sync to bypass this warning if you're confident"
        confirm_action "Continue with incremental deployment of $total_changes files anyway?"
    elif [[ $total_changes -gt $warning_threshold ]]; then
        print_warning "⚠️  Large number of changes detected ($total_changes files)"
        echo "Expected ~$expected_changes files based on $recent_source_count recent source changes."
        echo "💡 Tip: Use --force-sync to bypass this warning"
        confirm_action "Continue with incremental deployment of $total_changes files?"
    elif [[ "$QUICK_MODE" == "true" && $total_changes -le 10 ]]; then
        print_success "Quick mode: Auto-proceeding with $total_changes files (≤ 10)"
    elif [[ $total_changes -le 5 ]]; then
        print_success "Small change set detected ($total_changes files) - proceeding automatically"
    fi
    
    # Actually perform the sync
    print_info "Syncing $total_changes changed files..."
    
    # Build rsync options for actual sync (same as dry-run but without --dry-run --itemize-changes)
    local sync_opts="-avh --delete"
    case "$RSYNC_COMPARISON_METHOD" in
        "checksum")
            sync_opts="$sync_opts --checksum"
            ;;
        "size-only") 
            sync_opts="$sync_opts --size-only"
            ;;
        "timestamp")
            # Default rsync behavior (timestamp + size)
            ;;
    esac
    
    # Use the same rsync options as the dry-run for consistency
    if rsync $sync_opts \
        --exclude='.git' \
        --exclude='deployment-info.txt' \
        --exclude='CNAME' \
        --exclude='.nojekyll' \
        "$source_dir/" "$target_dir/"; then
        print_success "File sync completed successfully"
        
        # Log the changes for future reference
        {
            echo "=== Incremental Deployment - $(date -u '+%Y-%m-%d %H:%M:%S UTC') ==="
            echo "Total changes: $total_changes"
            echo "Added: ${#added_files[@]}, Modified: ${#modified_files[@]}, Deleted: ${#deleted_files[@]}"
            echo ""
        } > "$CHANGES_LOG"
        
        # Clean up temp directory
        rm -rf "$TEMP_DIFF_DIR"
        return 0
    else
        print_error "File sync failed!"
        rm -rf "$TEMP_DIFF_DIR"
        return 1
    fi
}

# Function to handle essential files that always need to be updated
update_essential_files() {
    local target_dir="$1"
    
    print_info "Updating essential files..."
    
    # Add CNAME file for custom domain
    echo "seasalt.ai" > "$target_dir/CNAME"
    echo "www.seasalt.ai" >> "$target_dir/CNAME"
    
    # Add .nojekyll to prevent Jekyll processing
    touch "$target_dir/.nojekyll"
    
    # Update deployment info
    cat > "$target_dir/deployment-info.txt" <<EOF
Deployment Information
======================
Date: $(date -u '+%Y-%m-%d %H:%M:%S UTC')
Type: Incremental Deployment
Deployed from: new-seasalt-ai-website repository
Source branch: $REQUIRED_BRANCH
Source commit: $(git -C "$SCRIPT_DIR/.." rev-parse HEAD)
Backup tag: $BACKUP_TAG
Changes log: $CHANGES_LOG
EOF
}

# Function to deploy changes in batches to avoid GitHub rate limits
deploy_in_batches() {
    local total_changes="$1"
    
    if [[ $total_changes -le $MAX_FILES_PER_PUSH ]]; then
        # Small enough for single push
        print_info "Deploying $total_changes files in single push (≤ $MAX_FILES_PER_PUSH files)"
        
        # Stage all changes
        git add --all
        
        # Commit changes
        COMMIT_MSG="deploy(prod): incremental update with $total_changes files $(date -u '+%Y-%m-%d %H:%M:%S UTC')"
        if [[ -n "$BACKUP_TAG" ]]; then
            COMMIT_MSG="$COMMIT_MSG (backup: $BACKUP_TAG)"
        fi
        
        git commit -m "$COMMIT_MSG"
        
        # Push to production
        print_info "Pushing changes to production..."
        if git push origin "$PROD_BRANCH"; then
            print_success "Successfully deployed $total_changes files!"
            return 0
        else
            print_error "Failed to push to production!"
            return 1
        fi
    else
        # Too many files - need batched deployment
        print_warning "⚠️  Large deployment detected ($total_changes files)"
        print_info "Will deploy in batches of $MAX_FILES_PER_PUSH files to avoid GitHub rate limits"
        
        # Get list of all changed files
        local all_files=($(git diff --cached --name-only))
        local total_files=${#all_files[@]}
        local batch_num=1
        local files_processed=0
        
        print_info "Planning deployment of $total_files files in batches..."
        
        while [[ $files_processed -lt $total_files ]]; do
            local batch_size=$MAX_FILES_PER_PUSH
            local remaining_files=$((total_files - files_processed))
            
            if [[ $remaining_files -lt $batch_size ]]; then
                batch_size=$remaining_files
            fi
            
            print_info "📦 Batch $batch_num: Processing $batch_size files (files $((files_processed + 1))-$((files_processed + batch_size)) of $total_files)"
            
            # Reset staging area
            git reset HEAD . > /dev/null 2>&1 || true
            
            # Stage only this batch of files
            local batch_files=("${all_files[@]:$files_processed:$batch_size}")
            for file in "${batch_files[@]}"; do
                git add "$file" 2>/dev/null || true  # Ignore files that might have been deleted
            done
            
            # Check if there are actually files to commit in this batch
            if git diff --cached --quiet; then
                print_warning "No changes in batch $batch_num (files may have been deleted)"
                files_processed=$((files_processed + batch_size))
                ((batch_num++))
                continue
            fi
            
            # Commit this batch
            local batch_commit_msg="deploy(prod): batch $batch_num/$((($total_files + $MAX_FILES_PER_PUSH - 1) / $MAX_FILES_PER_PUSH)) - $batch_size files $(date -u '+%Y-%m-%d %H:%M:%S UTC')"
            if [[ -n "$BACKUP_TAG" && $batch_num -eq 1 ]]; then
                batch_commit_msg="$batch_commit_msg (backup: $BACKUP_TAG)"
            fi
            
            git commit -m "$batch_commit_msg"
            
            # Push this batch
            print_info "Pushing batch $batch_num to production..."
            if ! git push origin "$PROD_BRANCH"; then
                print_error "Failed to push batch $batch_num!"
                return 1
            fi
            
            print_success "✅ Batch $batch_num deployed successfully ($batch_size files)"
            
            files_processed=$((files_processed + batch_size))
            ((batch_num++))
            
            # Rate limiting delay between pushes (except for the last batch)
            if [[ $files_processed -lt $total_files ]]; then
                print_info "⏱️  Waiting $GITHUB_RATE_LIMIT_DELAY seconds before next batch (GitHub rate limit protection)..."
                sleep $GITHUB_RATE_LIMIT_DELAY
            fi
        done
        
        print_success "🎉 All batches deployed successfully! Total: $total_files files in $((batch_num - 1)) batches"
        return 0
    fi
}

# Main deployment process
main() {
    print_info "Starting INCREMENTAL production deployment to seasalt.ai"
    print_warning "This will deploy ONLY CHANGED FILES to the LIVE production website!"
    echo "============================================================"
    
    # Pre-deployment checks
    print_info "Running pre-deployment checks..."
    # check_branch "$REQUIRED_BRANCH"
    check_clean_working_tree
    
    # Build the project (unless skipping)
    if [[ "$SKIP_BUILD" == "true" ]]; then
        print_info "Skipping build - using existing dist/ folder"
        if [[ ! -d "$BUILD_DIR" ]]; then
            print_error "Build directory '$BUILD_DIR' not found! Cannot skip build."
            print_info "Either run a build first, or remove --skip-build flag."
            exit 1
        fi
        print_success "Using existing build in $BUILD_DIR"
    else
        build_project
        
        # Run SEO updates (generate sitemap and robots.txt)
        print_info "Updating SEO files (sitemap and robots.txt)..."
        npm run seo-update || print_warning "SEO update failed, continuing anyway"
    fi
    
    verify_build_dir "$BUILD_DIR"
    
    # Show build info
    get_build_info "$BUILD_DIR"
    
    # Clone or update production repo
    print_info "Setting up production repository..."
    
    # Create cache directory if it doesn't exist
    mkdir -p "$(dirname "$PROD_REPO_DIR")"
    
    # Check if we already have the production repo cached locally
    if [[ -d "$PROD_REPO_DIR" ]]; then
        # Production repo exists locally - update it to latest state
        print_info "Updating existing production repository..."
        pushd "$PROD_REPO_DIR" > /dev/null
        
        # Ensure we're on the right branch and clean
        git checkout "$PROD_BRANCH"
        git fetch origin                      # Get latest from remote
        git reset --hard "origin/$PROD_BRANCH" # Reset to match remote exactly
        git clean -fdx                        # Remove any untracked files
        
        popd > /dev/null
    else
        # First time deployment - clone the production repo
        print_info "Cloning production repository for the first time..."
        print_info "This may take a moment..."
        git clone "$PROD_REPO_URL" "$PROD_REPO_DIR"
        
        pushd "$PROD_REPO_DIR" > /dev/null
        git checkout "$PROD_BRANCH"
        popd > /dev/null
    fi

    git config user.email "anson.kao.yyc+git@gmail.com"
    git config user.user "anson-seasalt"
    
    # Create backup tag before deployment
    print_info "Creating backup of current production state..."
    BACKUP_TAG=$(create_backup_tag "$PROD_REPO_DIR" "$BACKUP_TAG_PREFIX")
    
    if [[ -n "$BACKUP_TAG" ]]; then
        echo "  - Backup tag: $BACKUP_TAG"
        echo "  - To rollback: cd $PROD_REPO_DIR && git checkout $BACKUP_TAG"
    fi
    
    # List recent backups
    echo ""
    list_backup_tags "$PROD_REPO_DIR" "$BACKUP_TAG_PREFIX" 5
    
    # Perform incremental file sync
    print_info "Analyzing changes for incremental deployment..."
    
    # Save the source repository path before changing directories
    SOURCE_REPO_DIR="$(pwd)"
    
    # Sync files incrementally
    if ! sync_files_incrementally "$SOURCE_REPO_DIR/$BUILD_DIR" "$PROD_REPO_DIR"; then
        print_info "No changes to deploy - exiting"
        exit 0
    fi
    
    # Now we're working in the production repo directory
    pushd "$PROD_REPO_DIR" > /dev/null
    
    # Update essential files (CNAME, .nojekyll, deployment-info.txt)
    update_essential_files "."
    
    # Stage all changes for analysis
    git add --all
    
    # Check if there are changes (should be true since we detected changes earlier)
    if git diff --cached --quiet; then
        print_warning "No changes to commit (this shouldn't happen with incremental deployment)"
        popd > /dev/null
        exit 0
    fi
    
    # Show what's being deployed
    print_info "Git changes to be committed:"
    # git diff --cached --stat
    
    # Count the actual git changes
    local git_changes=$(git diff --cached --numstat | wc -l)
    print_info "Total files changed in git: $git_changes"
    
    # GitHub rate limit protection
    if [[ $git_changes -gt $MAX_FILES_PER_PUSH ]]; then
        print_warning "⚠️  Large deployment detected ($git_changes files > $MAX_FILES_PER_PUSH limit)"
        print_info "Will automatically deploy in batches to avoid GitHub rate limits"
        echo ""
    fi
    
    # Final confirmation before push (unless force-sync is enabled)
    if [[ "$FORCE_SYNC" != "true" ]]; then
        echo ""
        print_warning "Final confirmation before pushing to PRODUCTION"
        if [[ $git_changes -gt $MAX_FILES_PER_PUSH ]]; then
            echo "This will update the LIVE website at seasalt.ai with $git_changes files in batches"
        else
            echo "This will update the LIVE website at seasalt.ai with $git_changes changed files"
        fi
        confirm_action "Deploy these incremental changes to PRODUCTION?"
    fi
    
    # Deploy using batched approach
    print_info "Starting deployment process..."
    
    if deploy_in_batches "$git_changes"; then
        popd > /dev/null
        
        echo ""
        echo "=========================================="
        print_success "🎉 INCREMENTAL DEPLOYMENT COMPLETE! 🎉"
        echo "=========================================="
        echo ""
        echo "  📌 Live at: https://seasalt.ai"
        echo "  📌 Backup tag: $BACKUP_TAG"
        echo "  📌 Files changed: $git_changes"
        if [[ $git_changes -gt $MAX_FILES_PER_PUSH ]]; then
            local num_batches=$(( (git_changes + MAX_FILES_PER_PUSH - 1) / MAX_FILES_PER_PUSH ))
            echo "  📦 Deployed in: $num_batches batches (GitHub rate limit protection)"
        fi
        echo "  📌 Changes log: $CHANGES_LOG"
        echo "  📌 Repository: $PROD_REPO_DIR"
        echo ""
        echo "  ⏰ Note: GitHub Pages may take 1-3 minutes to update"
        echo "  ⚡ Incremental deployments are much faster!"
        echo ""
        echo "  🔄 To rollback if needed:"
        echo "     ./deploy/rollback-prod.sh $BACKUP_TAG"
        echo ""
    else
        print_error "Deployment failed!"
        print_info "You can manually check and push from: $PROD_REPO_DIR"
        popd > /dev/null
        exit 1
    fi
}

# Configuration for comparison method
RSYNC_COMPARISON_METHOD="checksum"  # Options: checksum, size-only, timestamp

# Check for command line arguments
QUICK_MODE=false
SKIP_BUILD=false
FORCE_SYNC=false

# Parse all command line arguments
while [[ $# -gt 0 ]]; do
    case "$1" in
        --force-full)
            print_warning "Force full deployment requested - use deploy-prod.sh instead"
            exec "$SCRIPT_DIR/deploy-prod.sh"
            ;;
        --quick)
            QUICK_MODE=true
            print_info "Quick mode enabled - will auto-proceed if changes < 10 files"
            ;;
        --skip-build)
            SKIP_BUILD=true
            print_info "Skip build mode - using existing dist/ folder"
            ;;
        --force-sync)
            FORCE_SYNC=true
            print_info "Force sync mode - will bypass large change warnings"
            ;;
        --checksum)
            RSYNC_COMPARISON_METHOD="checksum"
            print_info "Using checksum-based comparison (most accurate, slower)"
            ;;
        --size-only)
            RSYNC_COMPARISON_METHOD="size-only"
            print_info "Using size-only comparison (faster, less accurate)"
            ;;
        --timestamp)
            RSYNC_COMPARISON_METHOD="timestamp"
            print_info "Using timestamp-based comparison (fastest, least accurate)"
            ;;
        --help|-h)
            echo "Usage: $0 [--quick] [--skip-build] [--force-sync] [--checksum|--size-only|--timestamp] [--force-full]"
            echo ""
            echo "Incremental production deployment - only deploys changed files"
            echo ""
            echo "Options:"
            echo "  --quick         Auto-proceed if ≤10 files changed (good for small updates)"
            echo "  --skip-build    Use existing dist/ folder (skip npm run build)"
            echo "  --force-sync    Bypass large change warnings (use when confident)"
            echo "  --force-full    Use full deployment instead (runs deploy-prod.sh)"
            echo "  --checksum      Compare files by content checksum (default, most accurate)"
            echo "  --size-only     Compare files by size only (faster, less accurate)"
            echo "  --timestamp     Compare files by timestamp (fastest, least accurate)"
            echo "  --help, -h      Show this help message"
            echo ""
            echo "Examples:"
            echo "  $0 --quick --skip-build --force-sync    # Fast deployment, bypass warnings"
            echo "  $0 --skip-build --force-sync            # Use existing build, bypass warnings"
            echo "  $0 --skip-build                         # Use existing build"
            echo "  $0 --checksum                           # Most accurate change detection"
            echo ""
            echo "This script is optimized for large sites with many files."
            echo "It only copies files that have actually changed, making deployments much faster."
            echo ""
            echo "Recommendation: Use --checksum for accuracy, --size-only if checksum is too slow."
            exit 0
            ;;
        *)
            print_error "Unknown option: $1"
            echo "Use --help for usage information"
            exit 1
            ;;
    esac
    shift  # Move to next argument
done

# Run main function
main "$@"

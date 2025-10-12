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
# 2. Clones/updates the production repo to ~/.deployment-cache/seasalt-ai.github.io/
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
PROD_REPO_URL="git@github.com:seasalt-ai/seasalt-ai.github.io.git"  # Production repo (separate from source)
PROD_REPO_NAME="seasalt-ai.github.io"                   # Repository name
PROD_REPO_DIR="$HOME/.deployment-cache/$PROD_REPO_NAME"  # Local cache location for faster deployments
PROD_BRANCH="master"                                     # Production branch (GitHub Pages default)
BACKUP_TAG_PREFIX="prod-backup"                          # Prefix for backup tags
REQUIRED_BRANCH="main"                                   # Must deploy from this branch

# New variables for incremental deployment
CHANGES_LOG="$HOME/.deployment-cache/last-deployment-changes.log"
TEMP_DIFF_DIR="$HOME/.deployment-cache/temp-diff"

# Ensure temp directory is cleaned up on exit
trap 'rm -rf "$TEMP_DIFF_DIR"' EXIT

# Function to compare and sync files incrementally
sync_files_incrementally() {
    local source_dir="$1"
    local target_dir="$2"
    
    print_info "Analyzing file changes..."
    
    # Create temp directory for analysis
    mkdir -p "$TEMP_DIFF_DIR"
    
    # Use rsync to analyze changes without actually copying
    local rsync_output="$TEMP_DIFF_DIR/rsync-changes.log"
    
    # Run rsync in dry-run mode to see what would change
    rsync -avh --delete --dry-run \
        --exclude='.git' \
        --exclude='deployment-info.txt' \
        --exclude='CNAME' \
        --exclude='.nojekyll' \
        "$source_dir/" "$target_dir/" > "$rsync_output" 2>&1 || true
    
    # Parse rsync output to categorize changes
    local added_files=()
    local modified_files=()
    local deleted_files=()
    
    # Count different types of changes
    local total_changes=0
    
    # Parse rsync dry-run output
    while IFS= read -r line; do
        if [[ "$line" =~ ^deleting ]]; then
            deleted_files+=("${line#deleting }")
            ((total_changes++))
        elif [[ "$line" =~ ^[^d].*[^/]$ ]] && [[ ! "$line" =~ ^(sent|total|receiving|created) ]]; then
            # This is a file (not directory, not summary line)
            if [[ -f "$target_dir/$line" ]]; then
                modified_files+=("$line")
            else
                added_files+=("$line")
            fi
            ((total_changes++))
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
    
    # Confirm incremental deployment
    if [[ $total_changes -gt 100 ]]; then
        print_warning "⚠️  Large number of changes detected ($total_changes files)"
        echo "Consider using full deployment if this seems unexpected."
        confirm_action "Continue with incremental deployment of $total_changes files?"
    fi
    
    # Actually perform the sync
    print_info "Syncing $total_changes changed files..."
    
    if rsync -avh --delete \
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

# Main deployment process
main() {
    print_info "Starting INCREMENTAL production deployment to seasalt.ai"
    print_warning "This will deploy ONLY CHANGED FILES to the LIVE production website!"
    echo "============================================================"
    
    # Pre-deployment checks
    print_info "Running pre-deployment checks..."
    check_branch "$REQUIRED_BRANCH"
    check_clean_working_tree
    
    # Build the project
    build_project
    
    # Run SEO updates (generate sitemap and robots.txt)
    print_info "Updating SEO files (sitemap and robots.txt)..."
    npm run seo-update || print_warning "SEO update failed, continuing anyway"
    
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
    
    # Stage all changes
    git add --all
    
    # Check if there are changes (should be true since we detected changes earlier)
    if git diff --cached --quiet; then
        print_warning "No changes to commit (this shouldn't happen with incremental deployment)"
        popd > /dev/null
        exit 0
    fi
    
    # Show what's being deployed
    print_info "Git changes to be committed:"
    git diff --cached --stat
    
    # Count the actual git changes
    local git_changes=$(git diff --cached --numstat | wc -l)
    print_info "Total files changed in git: $git_changes"
    
    # Final confirmation before push
    echo ""
    print_warning "Final confirmation before pushing to PRODUCTION"
    echo "This will update the LIVE website at seasalt.ai with $git_changes changed files"
    confirm_action "Deploy these incremental changes to PRODUCTION?"
    
    # Commit changes
    COMMIT_MSG="deploy(prod): incremental update with $git_changes files $(date -u '+%Y-%m-%d %H:%M:%S UTC')"
    if [[ -n "$BACKUP_TAG" ]]; then
        COMMIT_MSG="$COMMIT_MSG (backup: $BACKUP_TAG)"
    fi
    
    git commit -m "$COMMIT_MSG"
    
    # Push to production
    print_info "Pushing incremental changes to production..."
    
    if git push origin "$PROD_BRANCH"; then
        print_success "Successfully pushed incremental changes to production!"
        
        popd > /dev/null
        
        echo ""
        echo "=========================================="
        print_success "🎉 INCREMENTAL DEPLOYMENT COMPLETE! 🎉"
        echo "=========================================="
        echo ""
        echo "  📌 Live at: https://seasalt.ai"
        echo "  📌 Backup tag: $BACKUP_TAG"
        echo "  📌 Files changed: $git_changes"
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
        print_error "Failed to push to production!"
        print_info "You can manually check and push from: $PROD_REPO_DIR"
        popd > /dev/null
        exit 1
    fi
}

# Check for command line arguments
if [[ $# -gt 0 ]]; then
    case "$1" in
        --force-full)
            print_warning "Force full deployment requested - use deploy-prod.sh instead"
            exec "$SCRIPT_DIR/deploy-prod.sh"
            ;;
        --help|-h)
            echo "Usage: $0 [--force-full]"
            echo ""
            echo "Incremental production deployment - only deploys changed files"
            echo ""
            echo "Options:"
            echo "  --force-full    Use full deployment instead (runs deploy-prod.sh)"
            echo "  --help, -h      Show this help message"
            echo ""
            echo "This script is optimized for large sites with many files."
            echo "It only copies files that have actually changed, making deployments much faster."
            exit 0
            ;;
        *)
            print_error "Unknown option: $1"
            echo "Use --help for usage information"
            exit 1
            ;;
    esac
fi

# Run main function
main "$@"
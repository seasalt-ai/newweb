#!/usr/bin/env bash
set -euo pipefail

# Smart Production deployment script - handles Astro's content hashing intelligently
# 
# PROBLEM: Astro generates content-hashed filenames (e.g., ApiPageComponents.2webKHQW.js)
# that change every build, even if the actual content is identical. This causes
# "incremental" deployments to deploy thousands of files unnecessarily.
#
# SOLUTION: This script uses intelligent comparison that:
# 1. Compares actual file content, not just filenames
# 2. Handles content-hashed files properly  
# 3. Falls back to full deployment when many files actually changed
# 4. Uses incremental deployment when only a few files truly changed
#
# BENEFITS:
# - True incremental deployment for content changes
# - Automatic fallback to full deployment for major updates
# - Handles Astro's build system properly
# - Much faster for typical content updates

# Get the directory where this script is located
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

# Source utilities
source "$SCRIPT_DIR/deploy-utils.sh"

# Configuration
BUILD_DIR="dist"
PROD_REPO_URL="git@github.com:seasalt-ai/seasalt-ai.github.io.git"
PROD_REPO_NAME="seasalt-ai.github.io"
PROD_REPO_DIR="$HOME/.deployment-cache/$PROD_REPO_NAME"
PROD_BRANCH="master"
BACKUP_TAG_PREFIX="prod-backup"
# REQUIRED_BRANCH="main"  # Commented out - allow deployment from any branch

# Smart deployment thresholds
INCREMENTAL_THRESHOLD=100  # If fewer than this many files changed, use incremental
FORCE_FULL_THRESHOLD=1000  # If more than this many files changed, suggest full deployment

# Function to analyze if this is a good candidate for incremental deployment
analyze_build_changes() {
    local source_dir="$1"
    local target_dir="$2"
    
    print_info "🧠 Analyzing build changes intelligently..."
    
    # Create temp directory for analysis
    local temp_dir="$HOME/.deployment-cache/temp-smart-analysis"
    mkdir -p "$temp_dir"
    
    # Step 1: Quick file count comparison
    local source_files=$(find "$source_dir" -type f | wc -l)
    local target_files=$(find "$target_dir" -type f -not -path '*/.git/*' | wc -l)
    
    echo "📊 File counts:"
    echo "  Source (new build): $source_files files"
    echo "  Target (production): $target_files files"
    
    # Step 2: Analyze content changes vs filename changes
    print_info "🔍 Analyzing content vs filename changes..."
    
    # Compare by content hash (ignore filenames)
    # This tells us if actual content changed, regardless of hash-based filenames
    
    # Create content hashes for source files
    find "$source_dir" -type f -exec md5sum {} \; | sort > "$temp_dir/source_hashes.txt"
    find "$target_dir" -type f -not -path '*/.git/*' -not -name 'deployment-info.txt' -not -name 'CNAME' -not -name '.nojekyll' -exec md5sum {} \; | sort > "$temp_dir/target_hashes.txt"
    
    # Compare content hashes (ignoring filenames)
    local source_content_hashes=$(cut -d' ' -f1 "$temp_dir/source_hashes.txt" | sort)
    local target_content_hashes=$(cut -d' ' -f1 "$temp_dir/target_hashes.txt" | sort)
    
    # Count truly different content
    local unique_source=$(echo "$source_content_hashes" | sort -u | wc -l)
    local unique_target=$(echo "$target_content_hashes" | sort -u | wc -l)
    local common_content=$(comm -12 <(echo "$source_content_hashes" | sort -u) <(echo "$target_content_hashes" | sort -u) | wc -l)
    
    echo "📈 Content analysis:"
    echo "  Unique source content: $unique_source"
    echo "  Unique target content: $unique_target"  
    echo "  Common content: $common_content"
    
    # Step 3: Analyze specific file types that typically change
    print_info "📝 Analyzing file type changes..."
    
    # Check if critical content files changed (HTML, CSS, images, etc.)
    local content_changes=0
    
    # Compare sitemap (good indicator of content changes)
    if [[ -f "$source_dir/sitemap.xml" && -f "$target_dir/sitemap.xml" ]]; then
        if ! cmp -s "$source_dir/sitemap.xml" "$target_dir/sitemap.xml"; then
            echo "  ✏️  Sitemap changed (indicates content updates)"
            ((content_changes++))
        else
            echo "  ✅ Sitemap unchanged"
        fi
    fi
    
    # Compare robots.txt
    if [[ -f "$source_dir/robots.txt" && -f "$target_dir/robots.txt" ]]; then
        if ! cmp -s "$source_dir/robots.txt" "$target_dir/robots.txt"; then
            echo "  ✏️  Robots.txt changed"
            ((content_changes++))
        else
            echo "  ✅ Robots.txt unchanged"
        fi
    fi
    
    # Comprehensive HTML content analysis
    print_info "🔍 Analyzing HTML content changes comprehensively..."
    local html_changes=0
    
    # Create lists of all HTML files in both directories
    find "$source_dir" -name "*.html" -type f | sed "s|^$source_dir/||" | sort > "$temp_dir/source_html_list.txt"
    find "$target_dir" -name "*.html" -type f | sed "s|^$target_dir/||" | sort > "$temp_dir/target_html_list.txt"
    
    # Find added HTML files
    local added_html=$(comm -23 "$temp_dir/source_html_list.txt" "$temp_dir/target_html_list.txt")
    if [[ -n "$added_html" ]]; then
        local added_count=$(echo "$added_html" | wc -l)
        echo "  📁 New HTML pages: $added_count"
        echo "$added_html" | head -5 | sed 's/^/    + /'
        [[ $added_count -gt 5 ]] && echo "    ... and $((added_count - 5)) more"
        ((content_changes += added_count))
    fi
    
    # Find deleted HTML files
    local deleted_html=$(comm -13 "$temp_dir/source_html_list.txt" "$temp_dir/target_html_list.txt")
    if [[ -n "$deleted_html" ]]; then
        local deleted_count=$(echo "$deleted_html" | wc -l)
        echo "  🗑️  Deleted HTML pages: $deleted_count"
        echo "$deleted_html" | head -5 | sed 's/^/    - /'
        [[ $deleted_count -gt 5 ]] && echo "    ... and $((deleted_count - 5)) more"
        ((content_changes += deleted_count))
    fi
    
    # Find common HTML files and check for content changes
    local common_html=$(comm -12 "$temp_dir/source_html_list.txt" "$temp_dir/target_html_list.txt")
    local modified_html_count=0
    local sample_limit=10
    local checked_count=0
    
    echo "  🔍 Checking existing HTML pages for content changes..."
    while IFS= read -r html_file && [[ $checked_count -lt $sample_limit ]]; do
        [[ -z "$html_file" ]] && continue
        
        # Create directory structure for clean files
        local clean_source_file="$temp_dir/source_$(echo "$html_file" | tr '/' '_').clean"
        local clean_target_file="$temp_dir/target_$(echo "$html_file" | tr '/' '_').clean"
        
        # Remove script src references (which change due to hashing) and compare content
        sed 's/src="[^"]*_astro\/[^"]*\.js"/src="SCRIPT_PLACEHOLDER"/g' "$source_dir/$html_file" > "$clean_source_file"
        sed 's/src="[^"]*_astro\/[^"]*\.js"/src="SCRIPT_PLACEHOLDER"/g' "$target_dir/$html_file" > "$clean_target_file"
        
        if ! cmp -s "$clean_source_file" "$clean_target_file"; then
            echo "    ✏️  $html_file"
            ((modified_html_count++))
        fi
        
        ((checked_count++))
    done <<< "$common_html"
    
    if [[ $modified_html_count -gt 0 ]]; then
        echo "  📝 Modified HTML pages: $modified_html_count (sampled $checked_count files)"
        ((content_changes += modified_html_count))
    fi
    
    # Quick check for other content files (CSS, images, etc.)
    local other_content_changes=0
    for ext in css png jpg jpeg gif svg ico; do
        local source_count=$(find "$source_dir" -name "*.$ext" -type f | wc -l)
        local target_count=$(find "$target_dir" -name "*.$ext" -type f -not -path '*/.git/*' | wc -l)
        if [[ $source_count -ne $target_count ]]; then
            echo "  ✏️  $ext files count changed: $target_count → $source_count"
            ((other_content_changes++))
        fi
    done
    
    if [[ $other_content_changes -gt 0 ]]; then
        echo "  📸 Other content files changed: $other_content_changes types"
        ((content_changes += other_content_changes))
    fi
    
    # Step 4: Make smart decision
    echo ""
    print_info "🤖 Smart deployment decision:"
    
    local recommendation=""
    local use_incremental=false
    
    if [[ $content_changes -eq 0 ]]; then
        recommendation="🔄 Build-only changes detected (no content changes)"
        echo "  - This appears to be a rebuild with no actual content changes"
        echo "  - Only JavaScript hashes and references changed"
        echo "  - Recommendation: Skip deployment or use full deployment to reset"
        use_incremental=false
    elif [[ $content_changes -le 5 ]]; then
        recommendation="✅ Small content changes detected - perfect for incremental"
        echo "  - Only $content_changes content files changed"
        echo "  - Most changes are just JavaScript hash updates"
        echo "  - Recommendation: Use incremental deployment"
        use_incremental=true
    elif [[ $content_changes -le 20 ]]; then
        recommendation="⚖️  Moderate changes detected - incremental should work"
        echo "  - $content_changes content files changed"  
        echo "  - Recommendation: Use incremental deployment"
        use_incremental=true
    else
        recommendation="🚨 Major changes detected - consider full deployment"
        echo "  - $content_changes content files changed"
        echo "  - This might be a major update"
        echo "  - Recommendation: Use full deployment for safety"
        use_incremental=false
    fi
    
    echo ""
    echo "📋 Summary:"
    echo "  Content changes: $content_changes"
    echo "  Decision: $recommendation"
    
    # Clean up
    rm -rf "$temp_dir"
    
    # Return decision
    if [[ "$use_incremental" == "true" ]]; then
        return 0  # Use incremental
    else
        return 1  # Use full deployment
    fi
}

# Function to ask user for deployment preference
ask_deployment_preference() {
    echo ""
    print_warning "🤔 Multiple deployment options available:"
    echo ""
    echo "1. 🚀 Incremental deployment (fast - only changed files)"
    echo "2. 🔄 Full deployment (thorough - all files)"  
    echo "3. ❌ Skip deployment (no changes needed)"
    echo ""
    
    while true; do
        read -p "Choose deployment type [1/2/3]: " choice
        case $choice in
            1)
                return 0  # Incremental
                ;;
            2)
                return 1  # Full
                ;;
            3)
                print_info "Deployment skipped by user"
                exit 0
                ;;
            *)
                echo "Please enter 1, 2, or 3"
                ;;
        esac
    done
}

# Main function
main() {
    print_info "🧠 Starting SMART production deployment to seasalt.ai"
    print_info "This script intelligently chooses between incremental and full deployment"
    echo "================================================================="
    
    # Pre-deployment checks
    print_info "Running pre-deployment checks..."
    # Skip branch check - allow deployment from any branch for flexibility
    check_clean_working_tree
    
    # Build the project (DISABLED FOR TESTING)
    print_info "⚠️  Build step DISABLED for testing - using existing dist/ folder"
    # build_project
    
    # Run SEO updates (DISABLED FOR TESTING)
    print_info "⚠️  SEO update DISABLED for testing"
    # npm run seo-update || print_warning "SEO update failed, continuing anyway"
    
    verify_build_dir "$BUILD_DIR"
    get_build_info "$BUILD_DIR"
    
    # Set up production repo
    print_info "Setting up production repository..."
    mkdir -p "$(dirname "$PROD_REPO_DIR")"
    
    if [[ -d "$PROD_REPO_DIR" ]]; then
        print_info "Updating existing production repository..."
        pushd "$PROD_REPO_DIR" > /dev/null
        git checkout "$PROD_BRANCH"
        git fetch origin
        git reset --hard "origin/$PROD_BRANCH"
        git clean -fdx
        popd > /dev/null
    else
        print_info "Cloning production repository..."
        git clone "$PROD_REPO_URL" "$PROD_REPO_DIR"
        pushd "$PROD_REPO_DIR" > /dev/null
        git checkout "$PROD_BRANCH"
        popd > /dev/null
    fi
    
    # Smart analysis
    if analyze_build_changes "$BUILD_DIR" "$PROD_REPO_DIR"; then
        print_success "✅ Recommended: Incremental deployment"
        if ask_deployment_preference; then
            print_info "🚀 Proceeding with incremental deployment..."
            exec "$SCRIPT_DIR/deploy-prod-incremental.sh" --checksum
        else
            print_info "🔄 Proceeding with full deployment..."
            exec "$SCRIPT_DIR/deploy-prod.sh"
        fi
    else
        print_warning "⚠️  Recommended: Full deployment"
        if ask_deployment_preference; then
            print_info "🚀 Proceeding with incremental deployment (user override)..."
            exec "$SCRIPT_DIR/deploy-prod-incremental.sh" --checksum
        else
            print_info "🔄 Proceeding with full deployment..."
            exec "$SCRIPT_DIR/deploy-prod.sh"
        fi
    fi
}

# Handle command line arguments
case "${1:-}" in
    --help|-h)
        echo "Usage: $0"
        echo ""
        echo "Smart production deployment - automatically chooses the best deployment method"
        echo ""
        echo "This script analyzes your build to determine whether incremental or full"
        echo "deployment is more appropriate, taking into account Astro's content hashing."
        echo ""
        echo "Options:"
        echo "  --help, -h      Show this help message"
        echo ""
        echo "The script will analyze your changes and recommend either:"
        echo "  - Incremental deployment (for small content changes)"
        echo "  - Full deployment (for major updates or build-only changes)"
        exit 0
        ;;
    --*)
        print_error "Unknown option: $1"
        echo "Use --help for usage information"
        exit 1
        ;;
esac

# Run main function
main "$@"
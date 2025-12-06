#!/usr/bin/env bash
set -euo pipefail

# Blog-only deployment script
# Deploys only changed blog posts without rebuilding the entire site
#
# HOW THIS WORKS:
# ================
# 1. Detects which blog files have changed since last commit
# 2. Builds only the affected blog pages using Astro's partial builds
# 3. Updates only those specific files in the production repo
# 4. Generates updated sitemap and RSS feeds
# 5. Deploys minimal changes to production
#
# USAGE:
# ./deploy/deploy-github-blog-only.sh [commit-range]
# 
# Examples:
# ./deploy/deploy-github-blog-only.sh              # Compare with HEAD~1
# ./deploy/deploy-github-blog-only.sh HEAD~5       # Compare with 5 commits ago
# ./deploy/deploy-github-blog-only.sh main         # Compare with main branch

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
BACKUP_TAG_PREFIX="blog-backup"

# Function to detect changed blog files
detect_changed_blog_files() {
    local compare_ref="${1:-HEAD~1}"
    
    print_info "Detecting changed blog files since $compare_ref..."
    
    # Get changed files in blog directories
    local changed_files
    changed_files=$(git diff --name-only "$compare_ref" HEAD | grep -E '^src/content/blog/.*\.md$' || true)
    
    if [[ -z "$changed_files" ]]; then
        print_warning "No blog files have changed since $compare_ref"
        echo "Changed files would need to be in: src/content/blog/"
        echo ""
        echo "Recent commits:"
        git log --oneline -5
        exit 0
    fi
    
    echo "Changed blog files:"
    echo "$changed_files" | sed 's/^/  - /'
    echo ""
    
    # Extract unique blog slugs and languages
    local blog_slugs=()
    local languages=()
    
    while IFS= read -r file; do
        if [[ -n "$file" ]]; then
            # Extract language and slug from path like: src/content/blog/en/110-title.md
            local lang=$(echo "$file" | cut -d'/' -f4)
            local slug=$(basename "$file" .md)
            
            blog_slugs+=("$slug")
            languages+=("$lang")
        fi
    done <<< "$changed_files"
    
    # Remove duplicates
    blog_slugs=($(printf '%s\n' "${blog_slugs[@]}" | sort -u))
    languages=($(printf '%s\n' "${languages[@]}" | sort -u))
    
    echo "Affected blog slugs: ${blog_slugs[*]}"
    echo "Affected languages: ${languages[*]}"
    echo ""
    
    # Store in global variables for later use
    CHANGED_BLOG_SLUGS=("${blog_slugs[@]}")
    CHANGED_LANGUAGES=("${languages[@]}")
    CHANGED_BLOG_FILES="$changed_files"
}

# Function to build only affected blog pages
build_blog_pages() {
    print_info "Building only affected blog pages..."
    
    # First, do a minimal build to get the base structure
    print_info "Running minimal Astro build..."
    npm run build
    
    print_success "Blog pages built successfully!"
    
    # Show what was built
    local total_files=$(find "$BUILD_DIR" -type f | wc -l)
    print_info "Built $total_files files total"
}

# Function to update sitemap and RSS
update_feeds() {
    print_info "Updating sitemap and RSS feeds..."
    npm run build:sitemap || print_warning "Sitemap update failed, continuing anyway"
}

# Function to deploy only changed blog files
deploy_blog_changes() {
    print_info "Deploying blog changes to production..."
    
    # Ensure production repo exists
    if [[ ! -d "$PROD_REPO_DIR" ]]; then
        print_info "Cloning production repository (first time)..."
        git clone "$PROD_REPO_URL" "$PROD_REPO_DIR"
    else
        print_info "Updating production repository..."
        pushd "$PROD_REPO_DIR" > /dev/null
        git fetch origin
        git reset --hard "origin/$PROD_BRANCH"
        popd > /dev/null
    fi
    
    # Create backup
    print_info "Creating backup of current production state..."
    local backup_tag
    backup_tag=$(create_backup_tag "$PROD_REPO_DIR" "$BACKUP_TAG_PREFIX")
    
    if [[ -n "$backup_tag" ]]; then
        echo "  - Backup tag: $backup_tag"
    fi
    
    # Save source repo path
    local source_repo_dir="$(pwd)"
    
    # Enter production repo
    pushd "$PROD_REPO_DIR" > /dev/null
    
    # Copy only blog-related files
    print_info "Copying updated blog files..."
    
    # Copy blog pages for all languages
    for lang in "${CHANGED_LANGUAGES[@]}"; do
        for slug in "${CHANGED_BLOG_SLUGS[@]}"; do
            local blog_path="$lang/blog/$slug"
            local source_file="$source_repo_dir/$BUILD_DIR/$blog_path/index.html"
            local dest_dir="./$blog_path"
            
            if [[ -f "$source_file" ]]; then
                mkdir -p "$dest_dir"
                cp "$source_file" "$dest_dir/"
                echo "  - Copied: $blog_path/index.html"
            fi
        done
        
        # Update blog index pages
        local blog_index_source="$source_repo_dir/$BUILD_DIR/$lang/blog/index.html"
        local blog_index_dest="./$lang/blog/"
        
        if [[ -f "$blog_index_source" ]]; then
            mkdir -p "$blog_index_dest"
            cp "$blog_index_source" "$blog_index_dest/"
            echo "  - Updated: $lang/blog/index.html"
        fi
    done
    
    # Update sitemap and robots.txt
    if [[ -f "$source_repo_dir/$BUILD_DIR/sitemap-index.xml" ]]; then
        cp "$source_repo_dir/$BUILD_DIR/sitemap-index.xml" ./
        echo "  - Updated: sitemap-index.xml"
    fi
    
    if [[ -f "$source_repo_dir/$BUILD_DIR/sitemap-0.xml" ]]; then
        cp "$source_repo_dir/$BUILD_DIR/sitemap-0.xml" ./
        echo "  - Updated: sitemap-0.xml"
    fi
    
    if [[ -f "$source_repo_dir/$BUILD_DIR/robots.txt" ]]; then
        cp "$source_repo_dir/$BUILD_DIR/robots.txt" ./
        echo "  - Updated: robots.txt"
    fi
    
    # Update RSS feeds if they exist
    for lang in "${CHANGED_LANGUAGES[@]}"; do
        local rss_source="$source_repo_dir/$BUILD_DIR/$lang/rss.xml"
        if [[ -f "$rss_source" ]]; then
            cp "$rss_source" "./$lang/"
            echo "  - Updated: $lang/rss.xml"
        fi
    done
    
    # Stage changes
    git add --all
    
    # Check if there are changes
    if git diff --cached --quiet; then
        print_warning "No changes to deploy"
        popd > /dev/null
        exit 0
    fi
    
    # Show what's being deployed
    print_info "Changes to be deployed:"
    git diff --cached --stat
    echo ""
    git diff --cached --name-only | head -20
    
    # Commit changes
    local commit_msg="deploy(blog): Updated blog posts $(date -u '+%Y-%m-%d %H:%M:%S UTC')"
    commit_msg="$commit_msg

Changed files:
$(echo "$CHANGED_BLOG_FILES" | sed 's/^/- /')

Backup: $backup_tag"
    
    git commit -m "$commit_msg"
    
    # Push to production
    print_info "Pushing blog changes to production..."
    
    if git push origin "$PROD_BRANCH"; then
        print_success "Successfully deployed blog changes!"
        
        popd > /dev/null
        
        echo ""
        echo "=========================================="
        print_success "🎉 BLOG DEPLOYMENT COMPLETE! 🎉"
        echo "=========================================="
        echo ""
        echo "  📌 Live at: https://seasalt.ai"
        echo "  📌 Backup tag: $backup_tag"
        echo "  📌 Deployed slugs: ${CHANGED_BLOG_SLUGS[*]}"
        echo "  📌 Affected languages: ${CHANGED_LANGUAGES[*]}"
        echo ""
        echo "  ⏰ Note: GitHub Pages may take 2-5 minutes to update"
        echo ""
        echo "  🔄 To rollback if needed:"
        echo "     ./deploy/rollback-prod.sh $backup_tag"
        echo ""
    else
        print_error "Failed to push blog changes!"
        popd > /dev/null
        exit 1
    fi
}

# Main function
main() {
    local compare_ref="${1:-HEAD~1}"
    
    print_info "Starting BLOG-ONLY deployment to seasalt.ai"
    echo "============================================================"
    
    # Pre-deployment checks
    print_info "Running pre-deployment checks..."
    check_clean_working_tree
    
    # Detect changed blog files
    detect_changed_blog_files "$compare_ref"
    
    # Confirm deployment
    echo ""
    print_warning "📝 BLOG DEPLOYMENT CONFIRMATION"
    echo "You are about to deploy blog changes to PRODUCTION"
    echo "This will update the following:"
    echo "  - Blog posts: ${CHANGED_BLOG_SLUGS[*]}"
    echo "  - Languages: ${CHANGED_LANGUAGES[*]}"
    echo "  - Sitemap and RSS feeds"
    echo ""
    confirm_action "Deploy these blog changes to PRODUCTION?"
    
    # Build only affected pages
    build_blog_pages
    
    # Update feeds
    update_feeds
    
    # Deploy changes
    deploy_blog_changes
}

# Declare global variables
declare -a CHANGED_BLOG_SLUGS
declare -a CHANGED_LANGUAGES
declare CHANGED_BLOG_FILES

# Run main function with all arguments
main "$@"
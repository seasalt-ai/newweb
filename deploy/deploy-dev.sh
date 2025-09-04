#!/usr/bin/env bash
set -euo pipefail

# Development deployment script - deploys to GitHub Pages (newweb.seasalt.ai)
# Can be run from any branch

# Get the directory where this script is located
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

# Source utilities
source "$SCRIPT_DIR/deploy-utils.sh"

# Configuration
BUILD_DIR="dist"
TARGET_BRANCH="gh-pages"
TMP_DIR="$(mktemp -d)"

# Ensure cleanup on exit (including errors)
cleanup() {
    if [[ -n "${TMP_DIR:-}" ]] && [[ -d "$TMP_DIR" ]]; then
        git worktree remove --force "$TMP_DIR" 2>/dev/null || true
    fi
    git worktree prune 2>/dev/null || true
}
trap cleanup EXIT
# Main deployment process
main() {
    # Get current branch for commit message
    CURRENT_BRANCH="$(get_current_branch)"
    COMMIT_MSG="deploy(dev): from branch '$CURRENT_BRANCH' at $(date -u '+%Y-%m-%d %H:%M:%S UTC')"
    
    print_info "Starting DEV deployment to GitHub Pages (newweb.seasalt.ai)"
    print_info "Deploying from branch: $CURRENT_BRANCH"
    echo "============================================================"
    
    # Pre-deployment checks (no branch requirement)
    print_info "Running pre-deployment checks..."
    check_clean_working_tree
    
    # Show warning if not on main branch
    if [[ "$CURRENT_BRANCH" != "main" ]]; then
        print_warning "You're deploying from '$CURRENT_BRANCH' branch (not main)"
        echo "This is allowed for dev deployments, but be aware that:"
        echo "  - This will deploy your branch's current state to newweb.seasalt.ai"
        echo "  - Make sure this is intentional"
        echo ""
        confirm_action "Do you want to continue deploying from '$CURRENT_BRANCH'?"
    fi
    
    # Build the project
    build_project
    
    # Run SEO updates (generate sitemap and robots.txt)
    print_info "Updating SEO files (sitemap and robots.txt)..."
    npm run seo-update || print_warning "SEO update failed, continuing anyway"
    
    verify_build_dir "$BUILD_DIR"
    
    # Show build info
    get_build_info "$BUILD_DIR"
    
    # Prepare the gh-pages worktree
    print_info "Preparing gh-pages worktree..."
    
    # Clean up any stale worktrees first
    print_info "Cleaning up any stale worktrees..."
    git worktree prune
    
    # Remove any existing worktree for gh-pages branch
    # Use git worktree list to find and remove it properly
    EXISTING_WORKTREE=$(git worktree list --porcelain | grep -B2 "branch refs/heads/$TARGET_BRANCH" | grep "^worktree" | cut -d' ' -f2 || true)
    if [[ -n "$EXISTING_WORKTREE" ]]; then
        print_info "Found existing worktree for $TARGET_BRANCH at: $EXISTING_WORKTREE"
        print_info "Removing it..."
        git worktree remove --force "$EXISTING_WORKTREE" 2>/dev/null || true
    fi
    
    # Also check if the temp directory is already a worktree and remove it
    if git worktree list | grep -q "$TMP_DIR"; then
        print_info "Removing worktree at temporary directory: $TMP_DIR"
        git worktree remove --force "$TMP_DIR" 2>/dev/null || true
    fi
    
    # Add worktree - try to fetch from origin first, create if doesn't exist
    if git ls-remote --heads origin "$TARGET_BRANCH" | grep -q "$TARGET_BRANCH"; then
        print_info "Using existing $TARGET_BRANCH from origin"
        git fetch origin "$TARGET_BRANCH:$TARGET_BRANCH" 2>/dev/null || true
        git worktree add "$TMP_DIR" "$TARGET_BRANCH"
    else
        print_info "Creating new $TARGET_BRANCH branch"
        git worktree add -b "$TARGET_BRANCH" "$TMP_DIR" HEAD
    fi
    
    # Clear previous contents (except .git) and copy new files
    print_info "Copying build files..."
    # Save current directory
    ORIGINAL_DIR="$(pwd)"
    
    # Remove old content in worktree (preserving .git)
    pushd "$TMP_DIR" >/dev/null
    git rm -rf . 2>/dev/null || true
    git clean -fdx
    popd >/dev/null
    
    # Copy new build files from the original directory
    cp -R "$ORIGINAL_DIR/$BUILD_DIR"/. "$TMP_DIR"/
    
    # Add CNAME file for custom domain (if needed)
    echo "newweb.seasalt.ai" > "$TMP_DIR/CNAME"
    
    # Add .nojekyll to prevent Jekyll processing
    touch "$TMP_DIR/.nojekyll"
    
    # Commit and push
    pushd "$TMP_DIR" >/dev/null
    
    git add --all
    
    if git diff --cached --quiet; then
        print_warning "No changes to deploy"
    else
        # Show what's being deployed
        print_info "Files to be deployed:"
        git diff --cached --stat
        
        git commit -m "$COMMIT_MSG"
        
        print_info "Pushing to $TARGET_BRANCH..."
        if git push origin "$TARGET_BRANCH"; then
            print_success "Successfully deployed to $TARGET_BRANCH"
            echo ""
            print_success "DEV deployment complete! 🚀"
            echo "  - Deployed from branch: $CURRENT_BRANCH"
            echo "  - View at: https://newweb.seasalt.ai"
            echo "  - GitHub Pages may take a few minutes to update"
        else
            print_error "Failed to push to $TARGET_BRANCH"
            exit 1
        fi
    fi
    
    popd >/dev/null
    
    # Clean up
    print_info "Cleaning up..."
    git worktree remove --force "$TMP_DIR" 2>/dev/null || true
    git worktree prune
    
    print_success "Deployment process completed!"
}

# Run main function
main "$@"

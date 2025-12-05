#!/usr/bin/env bash
set -euo pipefail

# Production deployment script - deploys to seasalt.ai
# MUST be run from main branch for safety
#
# HOW THIS WORKS:
# ================
# This script deploys the built website to a SEPARATE GitHub repository
# (seasalt-ai/seasalt-ai.github.io) which serves the production website.
#
# The deployment process:
# 1. Builds the website in the current repository (creates dist/ folder)
# 2. Clones/updates the production repo to ~/.deployment-cache/seasalt-ai.github.io/
# 3. Creates a backup tag of the current production state
# 4. Replaces ALL content in production repo with the new build
# 5. Commits and pushes to the master branch
# 6. GitHub Pages automatically serves the updated content
#
# IMPORTANT: The production repo is completely separate from this source code repo.
# It only contains the compiled/built website files, never the source code.
#
# PREREQUISITES:
# - SSH key with push access to seasalt-ai/seasalt-ai.github.io repo
# - Node.js and npm installed for building the project
# - Must be on 'main' branch with clean working tree
# - If using --skip-build, ensure dist/ directory exists and is populated

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

# Parse command line arguments
SKIP_BUILD=false
for arg in "$@"; do
  case $arg in
    --skip-build)
      SKIP_BUILD=true
      shift
      ;;
    *)
      # Unknown option
      echo "Unknown option: $arg" >&2
      echo "Usage: $0 [--skip-build]" >&2
      exit 1
      ;;
  esac
done

# Main deployment process
main() {
    print_info "Starting PRODUCTION deployment to seasalt.ai"
    print_warning "This will deploy to the LIVE production website!"
    echo "============================================================"
    
    # Pre-deployment checks
    print_info "Running pre-deployment checks..."
    check_branch "$REQUIRED_BRANCH"
    check_clean_working_tree
    
    # Get confirmation for production deployment
    echo ""
    print_warning "⚠️  PRODUCTION DEPLOYMENT WARNING ⚠️"
    echo "You are about to deploy to the PRODUCTION website (seasalt.ai)"
    echo "This will affect the live website that customers are using!"
    echo ""
    confirm_action "Are you SURE you want to deploy to PRODUCTION?"
    
    # Build the project unless --skip-build was specified
    if [[ "$SKIP_BUILD" == "true" ]]; then
        print_info "Skipping build step (--skip-build flag specified)"
        print_info "Verifying that build directory exists: $BUILD_DIR"
        if [[ ! -d "$BUILD_DIR" ]]; then
            print_error "Build directory does not exist: $BUILD_DIR"
            print_error "Please ensure the dist/ directory exists and is populated before using --skip-build"
            exit 1
        fi
        verify_build_dir "$BUILD_DIR"
    else
        build_project

        verify_build_dir "$BUILD_DIR"
    fi

    # Run SEO updates (generate sitemap and robots.txt) unless --skip-build was specified
    if [[ "$SKIP_BUILD" != "true" ]]; then
        print_info "Updating SEO files (sitemap and robots.txt)..."
        npm run seo-update || print_warning "SEO update failed, continuing anyway"
    else
        print_info "Skipping SEO update (use pre-built files in dist/)"
    fi
    
    # Show build info
    get_build_info "$BUILD_DIR"
    
    # Clone or update production repo
    # NOTE: This is a SEPARATE repository from your source code!
    # The production repo (seasalt-ai.github.io) only contains built files.
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
    
    # Clear current production content and copy new build
    print_info "Deploying new build to production repository..."
    
    # Save the source repository path before changing directories
    SOURCE_REPO_DIR="$(pwd)"
    
    # Now we're working in the production repo directory
    pushd "$PROD_REPO_DIR" > /dev/null
    
    # IMPORTANT: Remove all existing files except .git directory
    # This ensures a clean deployment without old/stale files
    find . -mindepth 1 -maxdepth 1 ! -name '.git' -exec rm -rf {} +
    
    # Copy the newly built website files from the source repo's dist/ folder
    # Note: We're copying FROM the source repo's build output TO the production repo
    # Using absolute path to the build directory
    cp -R "$SOURCE_REPO_DIR/$BUILD_DIR"/. ./
    
    # Add CNAME file for custom domain
    echo "seasalt.ai" > CNAME
    echo "www.seasalt.ai" >> CNAME
    
    # Add .nojekyll to prevent Jekyll processing
    touch .nojekyll
    
    # Create a deployment info file
    cat > deployment-info.txt <<EOF
Deployment Information
======================
Date: $(date -u '+%Y-%m-%d %H:%M:%S UTC')
Deployed from: new-seasalt-ai-website repository
Source branch: $REQUIRED_BRANCH
Source commit: $(git -C "$SCRIPT_DIR/.." rev-parse HEAD)
Backup tag: $BACKUP_TAG
EOF
    
    # Stage all changes
    git add --all
    
    # Check if there are changes
    if git diff --cached --quiet; then
        print_warning "No changes to deploy to production"
        popd > /dev/null
        exit 0
    fi
    
    # Show what's being deployed
    print_info "Changes to be deployed:"
    git diff --cached --stat
    
    # Final confirmation before push
    echo ""
    print_warning "Final confirmation before pushing to PRODUCTION"
    echo "This will update the LIVE website at seasalt.ai"
    confirm_action "Deploy these changes to PRODUCTION?"
    
    # Commit changes
    COMMIT_MSG="deploy(prod): from new-website $(date -u '+%Y-%m-%d %H:%M:%S UTC')"
    if [[ -n "$BACKUP_TAG" ]]; then
        COMMIT_MSG="$COMMIT_MSG (backup: $BACKUP_TAG)"
    fi
    
    git commit -m "$COMMIT_MSG"
    
    # Push to production
    print_info "Pushing to production..."
    
    if git push origin "$PROD_BRANCH"; then
        print_success "Successfully pushed to production!"
        
        popd > /dev/null
        
        echo ""
        echo "=========================================="
        print_success "🎉 PRODUCTION DEPLOYMENT COMPLETE! 🎉"
        echo "=========================================="
        echo ""
        echo "  📌 Live at: https://seasalt.ai"
        echo "  📌 Backup tag: $BACKUP_TAG"
        echo "  📌 Repository: $PROD_REPO_DIR"
        echo ""
        echo "  ⏰ Note: GitHub Pages may take 5-10 minutes to update"
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

# Run main function
main "$@"

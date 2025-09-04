#!/usr/bin/env bash
set -euo pipefail

# Production deployment script - deploys to seasalt.ai
# MUST be run from main branch for safety

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
REQUIRED_BRANCH="main"

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
    
    # Build the project
    build_project
    verify_build_dir "$BUILD_DIR"
    
    # Show build info
    get_build_info "$BUILD_DIR"
    
    # Clone or update production repo
    print_info "Setting up production repository..."
    
    # Create cache directory if it doesn't exist
    mkdir -p "$(dirname "$PROD_REPO_DIR")"
    
    if [[ -d "$PROD_REPO_DIR" ]]; then
        print_info "Updating existing production repository..."
        pushd "$PROD_REPO_DIR" > /dev/null
        
        # Ensure we're on the right branch and clean
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
    
    pushd "$PROD_REPO_DIR" > /dev/null
    
    # Remove all existing files except .git directory
    find . -mindepth 1 -maxdepth 1 ! -name '.git' -exec rm -rf {} +
    
    # Copy new build files
    cp -R "$BUILD_DIR"/. ./
    
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

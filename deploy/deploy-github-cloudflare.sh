#!/usr/bin/env bash
set -euo pipefail

# Master deployment script - Build once, deploy to GitHub Pages and Cloudflare
#
# This script:
# 1. Builds the website once (npm run build)
# 2. Deploys to GitHub Pages (seasalt.ai via seasalt-ai.github.io)
# 3. Deploys to Cloudflare Pages (production)
#
# Benefits:
# - Build once, deploy twice (saves time)
# - Ensures both platforms have identical content
# - Automated deployment without manual confirmations
#
# PREREQUISITES:
# - Must be on 'main' branch with clean working tree
# - SSH key with push access to seasalt-ai/seasalt-ai.github.io repo
# - Cloudflare credentials configured (see deploy-cloudflare.sh)

# Get the directory where this script is located
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

# Source utilities
source "$SCRIPT_DIR/deploy-utils.sh"

# Main deployment process
main() {
    print_info "Starting DUAL deployment to GitHub Pages and Cloudflare"
    echo "============================================================"
    echo ""
    
    # Step 1: Build the project
    print_info "Step 1/3: Building the website..."
    echo "------------------------------------------------------------"
    
    if ! npm run build; then
        print_error "Build failed! Aborting deployment."
        exit 1
    fi
    
    print_success "Build completed successfully"
    echo ""
    
    # Step 2: Deploy to GitHub Pages
    print_info "Step 2/3: Deploying to GitHub Pages (seasalt.ai)..."
    echo "------------------------------------------------------------"
    
    if "$SCRIPT_DIR/deploy-github-prod.sh" --skip-build --accept-yes; then
        print_success "GitHub Pages deployment completed"
    else
        print_error "GitHub Pages deployment failed! Aborting dual deployment."
        exit 1
    fi
    
    echo ""
    
    # Step 3: Deploy to Cloudflare
    print_info "Step 3/3: Deploying to Cloudflare Pages..."
    echo "------------------------------------------------------------"
    
    if "$SCRIPT_DIR/deploy-cloudflare.sh" --skip-build --prod; then
        print_success "Cloudflare deployment completed"
    else
        print_error "Cloudflare deployment failed!"
        exit 1
    fi
    
    echo ""
    echo "=========================================="
    print_success "🎉 DUAL DEPLOYMENT COMPLETE! 🎉"
    echo "=========================================="
    echo ""
    echo "  📌 GitHub Pages: https://seasalt.ai"
    echo "  📌 Cloudflare Pages: (check deploy-cloudflare.sh output)"
    echo ""
    echo "  ⏰ Note: Both platforms may take a few minutes to update"
    echo ""
}

# Run main function
main "$@"

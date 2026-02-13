#!/usr/bin/env bash
set -euo pipefail

# Netlify Deployment Script for Seasalt.ai Website
# This script deploys the website to Netlify
#
# Prerequisites:
# 1. Install Netlify CLI: npm install -g netlify-cli
# 2. Login to Netlify: netlify login
# 3. Link project: netlify link (run once in project root)
#
# Usage:
#   ./deploy/deploy-netlify.sh [--prod|--preview]
#
# Options:
#   --prod      Deploy to production
#   --preview   Deploy to preview (default)

source "$(dirname "$0")/deploy-utils.sh"

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"

# Color output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
DEPLOYMENT_TYPE="preview"
SKIP_BUILD=false

# Parse arguments
while [[ $# -gt 0 ]]; do
  case $1 in
    --prod|--production)
      DEPLOYMENT_TYPE="production"
      shift
      ;;
    --preview)
      DEPLOYMENT_TYPE="preview"
      shift
      ;;
    --skip-build)
      SKIP_BUILD=true
      shift
      ;;
    -h|--help)
      echo "Usage: $0 [--prod|--preview] [--skip-build]"
      echo ""
      echo "Options:"
      echo "  --prod, --production    Deploy to production"
      echo "  --preview               Deploy to preview (default)"
      echo "  --skip-build            Skip build step and use existing dist/ folder"
      echo "  -h, --help              Show this help message"
      exit 0
      ;;
    *)
      echo -e "${RED}Unknown option: $1${NC}"
      exit 1
      ;;
  esac
done

print_header() {
  echo -e "${BLUE}================================${NC}"
  echo -e "${BLUE}$1${NC}"
  echo -e "${BLUE}================================${NC}"
}

print_success() {
  echo -e "${GREEN}✓ $1${NC}"
}

print_error() {
  echo -e "${RED}✗ $1${NC}"
}

print_info() {
  echo -e "${YELLOW}ℹ $1${NC}"
}

# Check if Netlify CLI is installed
check_netlify_cli() {
  if ! command -v netlify &> /dev/null; then
    print_error "Netlify CLI is not installed"
    echo ""
    echo "Please install it with:"
    echo "  npm install -g netlify-cli"
    echo ""
    echo "Then login with:"
    echo "  netlify login"
    exit 1
  fi
  print_success "Netlify CLI is installed"
}

# Check if project is linked
check_netlify_link() {
  if [ ! -f ".netlify/state.json" ]; then
    print_error "Project is not linked to Netlify"
    echo ""
    echo "Please link your project with:"
    echo "  netlify link"
    exit 1
  fi
  print_success "Project is linked to Netlify"
}

# Main deployment function
main() {
  cd "$PROJECT_ROOT"
  
  print_header "Netlify Deployment - ${DEPLOYMENT_TYPE}"
  
  # Pre-flight checks
  print_info "Running pre-flight checks..."
  check_netlify_cli
  check_netlify_link
  
  # Build the site or check for existing build
  if [ "$SKIP_BUILD" = true ]; then
    print_info "Skipping build, using existing dist/ folder..."
    if [ ! -d "dist" ]; then
      print_error "dist/ folder not found. Please run 'npm run build' first or remove --skip-build flag."
      exit 1
    fi
    print_success "Found existing dist/ folder"
  else
    print_info "Building the website..."
    if ! npm run build; then
      print_error "Build failed"
      exit 1
    fi
    print_success "Build completed"
  fi
  
  # Deploy to Netlify
  print_info "Deploying to Netlify (${DEPLOYMENT_TYPE})..."
  
  if [ "$DEPLOYMENT_TYPE" = "production" ]; then
    print_info "⚠️  Deploying to PRODUCTION..."
    if [ "$SKIP_BUILD" = true ]; then
      # Skip build and deploy pre-built dist/ folder
      if netlify deploy --prod --dir=dist --no-build; then
        print_success "Deployment to production successful!"
        echo ""
        SITE_URL=$(netlify status --json | grep -o '"url":"[^"]*' | cut -d'"' -f4)
        print_info "Your site is live at: $SITE_URL"
      else
        print_error "Deployment failed"
        exit 1
      fi
    else
      # Let Netlify build from source
      if netlify deploy --prod; then
        print_success "Deployment to production successful!"
        echo ""
        SITE_URL=$(netlify status --json | grep -o '"url":"[^"]*' | cut -d'"' -f4)
        print_info "Your site is live at: $SITE_URL"
      else
        print_error "Deployment failed"
        exit 1
      fi
    fi
  else
    print_info "Deploying to preview environment..."
    if [ "$SKIP_BUILD" = true ]; then
      # Skip build and deploy pre-built dist/ folder
      if DEPLOY_OUTPUT=$(netlify deploy --dir=dist --no-build); then
        print_success "Preview deployment successful!"
        echo ""
        PREVIEW_URL=$(echo "$DEPLOY_OUTPUT" | grep "Website Draft URL:" | awk '{print $NF}')
        print_info "Preview URL: $PREVIEW_URL"
      else
        print_error "Deployment failed"
        exit 1
      fi
    else
      # Let Netlify build from source
      if DEPLOY_OUTPUT=$(netlify deploy); then
        print_success "Preview deployment successful!"
        echo ""
        PREVIEW_URL=$(echo "$DEPLOY_OUTPUT" | grep "Website Draft URL:" | awk '{print $NF}')
        print_info "Preview URL: $PREVIEW_URL"
      else
        print_error "Deployment failed"
        exit 1
      fi
    fi
  fi
  
  echo ""
  print_header "Deployment Complete"
  echo ""
  echo "Next steps:"
  if [ "$DEPLOYMENT_TYPE" = "production" ]; then
    echo "  • Visit your site to see your changes"
    echo "  • Check Netlify dashboard: https://app.netlify.com"
  else
    echo "  • Visit the preview URL above to test your changes"
    echo "  • Deploy to production with: ./deploy/deploy-netlify.sh --prod"
  fi
  echo ""
}

# Run main function
main "$@"

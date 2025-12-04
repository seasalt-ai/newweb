#!/usr/bin/env bash
set -euo pipefail

# Cloudflare Pages Deployment Script for Seasalt AI Website
# This script deploys the website to Cloudflare Pages
#
# Prerequisites:
# 1. Install Wrangler CLI: npm install -g wrangler
# 2. Login to Cloudflare: wrangler login
# 3. Create a Pages project in Cloudflare dashboard first
#
# Usage:
#   ./deploy/deploy-cloudflare.sh [--prod|--preview] [--project-name PROJECT_NAME]
#
# Options:
#   --prod              Deploy to production
#   --preview           Deploy to preview (default)
#   --project-name      Cloudflare Pages project name (default: seasalt-ai-website)

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
PROJECT_NAME="seasalt-ai-website"
BRANCH_NAME="preview"
SKIP_BUILD=false

# Parse arguments
while [[ $# -gt 0 ]]; do
  case $1 in
    --prod|--production)
      DEPLOYMENT_TYPE="production"
      BRANCH_NAME="main"
      shift
      ;;
    --preview)
      DEPLOYMENT_TYPE="preview"
      BRANCH_NAME="preview"
      shift
      ;;
    --project-name)
      PROJECT_NAME="$2"
      shift 2
      ;;
    --skip-build)
      SKIP_BUILD=true
      shift
      ;;
    -h|--help)
      echo "Usage: $0 [--prod|--preview] [--project-name PROJECT_NAME] [--skip-build]"
      echo ""
      echo "Options:"
      echo "  --prod, --production    Deploy to production"
      echo "  --preview               Deploy to preview (default)"
      echo "  --project-name          Cloudflare Pages project name (default: seasalt-ai-website)"
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

# Check if Wrangler CLI is installed
check_wrangler_cli() {
  if ! command -v wrangler &> /dev/null; then
    print_error "Wrangler CLI is not installed"
    echo ""
    echo "Please install it with:"
    echo "  npm install -g wrangler"
    echo ""
    echo "Then login with:"
    echo "  wrangler login"
    exit 1
  fi
  print_success "Wrangler CLI is installed"
}

# Check authentication
check_wrangler_auth() {
  if ! wrangler whoami &> /dev/null; then
    print_error "Not logged in to Cloudflare"
    echo ""
    echo "Please login with:"
    echo "  wrangler login"
    exit 1
  fi
  print_success "Logged in to Cloudflare"
}

# Main deployment function
main() {
  cd "$PROJECT_ROOT"
  
  print_header "Cloudflare Pages Deployment - ${DEPLOYMENT_TYPE}"
  
  # Pre-flight checks
  print_info "Running pre-flight checks..."
  check_wrangler_cli
  check_wrangler_auth
  
  # Check for clean working tree to ensure reproducibility
  print_info "Checking Git working tree..."
  check_clean_working_tree
  
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
  
  # Deploy to Cloudflare Pages
  print_info "Deploying to Cloudflare Pages (${DEPLOYMENT_TYPE})..."
  print_info "Project: $PROJECT_NAME"
  print_info "Branch: $BRANCH_NAME"
  
  if [ "$DEPLOYMENT_TYPE" = "production" ]; then
    print_info "⚠️  Deploying to PRODUCTION..."
    if wrangler pages deploy dist --project-name="$PROJECT_NAME" --branch="$BRANCH_NAME"; then
      print_success "Deployment to production successful!"
      echo ""
      print_info "Your site will be live at: https://${PROJECT_NAME}.pages.dev"
      if [ -f "wrangler.toml" ]; then
        print_info "Custom domain (if configured): https://seasalt.ai"
      fi
    else
      print_error "Deployment failed"
      exit 1
    fi
  else
    print_info "Deploying to preview environment..."
    PREVIEW_BRANCH="preview-$(date +%s)"
    if wrangler pages deploy dist --project-name="$PROJECT_NAME" --branch="$PREVIEW_BRANCH"; then
      print_success "Preview deployment successful!"
      echo ""
      print_info "Preview URL: https://${PREVIEW_BRANCH}.${PROJECT_NAME}.pages.dev"
    else
      print_error "Deployment failed"
      exit 1
    fi
  fi
  
  echo ""
  print_header "Deployment Complete"
  echo ""
  echo "Next steps:"
  if [ "$DEPLOYMENT_TYPE" = "production" ]; then
    echo "  • Visit https://${PROJECT_NAME}.pages.dev to see your changes"
    echo "  • Check Cloudflare dashboard: https://dash.cloudflare.com"
    echo "  • Configure custom domain in Cloudflare Pages settings"
  else
    echo "  • Visit the preview URL above to test your changes"
    echo "  • Deploy to production with: ./deploy/deploy-cloudflare.sh --prod"
  fi
  echo ""
  
  print_info "📖 View deployment logs:"
  echo "  wrangler pages deployment list --project-name=$PROJECT_NAME"
}

# Run main function
main "$@"

#!/usr/bin/env bash
set -euo pipefail

# Vercel Deployment Script for Seasalt AI Website
# This script deploys the website to Vercel
#
# Prerequisites:
# 1. Install Vercel CLI: npm install -g vercel
# 2. Login to Vercel: vercel login
# 3. Link project: vercel link (run once in project root)
#
# Usage:
#   ./deploy/deploy-vercel.sh [--prod|--preview]
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

# Check if Vercel CLI is installed
check_vercel_cli() {
  if ! command -v vercel &> /dev/null; then
    print_error "Vercel CLI is not installed"
    echo ""
    echo "Please install it with:"
    echo "  npm install -g vercel"
    echo ""
    echo "Then login with:"
    echo "  vercel login"
    exit 1
  fi
  print_success "Vercel CLI is installed"
}

# Check if project is linked
check_vercel_link() {
  if [ ! -d ".vercel" ]; then
    print_error "Project is not linked to Vercel"
    echo ""
    echo "Please link your project with:"
    echo "  vercel link"
    exit 1
  fi
  print_success "Project is linked to Vercel"
}

# Main deployment function
main() {
  cd "$PROJECT_ROOT"
  
  print_header "Vercel Deployment - ${DEPLOYMENT_TYPE}"
  
  # Pre-flight checks
  print_info "Running pre-flight checks..."
  check_vercel_cli
  check_vercel_link
  
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
  
  # Deploy to Vercel
  print_info "Deploying to Vercel (${DEPLOYMENT_TYPE})..."
  
  if [ "$DEPLOYMENT_TYPE" = "production" ]; then
    print_info "⚠️  Deploying to PRODUCTION..."
    if [ "$SKIP_BUILD" = true ]; then
      # Deploy pre-built dist/ folder using --prebuilt
      # First, create .vercel/output structure if needed
      print_info "Preparing pre-built deployment..."
      if vercel --prod --yes; then
        print_success "Deployment to production successful!"
        echo ""
        print_info "Your site is live at: https://seasalt.ai"
      else
        print_error "Deployment failed"
        exit 1
      fi
    else
      # Let Vercel build from source
      if vercel --prod --yes; then
        print_success "Deployment to production successful!"
        echo ""
        print_info "Your site is live at: https://seasalt.ai"
      else
        print_error "Deployment failed"
        exit 1
      fi
    fi
  else
    print_info "Deploying to preview environment..."
    if [ "$SKIP_BUILD" = true ]; then
      # Deploy pre-built dist/ folder
      if PREVIEW_URL=$(vercel --yes); then
        print_success "Preview deployment successful!"
        echo ""
        print_info "Preview URL: $PREVIEW_URL"
      else
        print_error "Deployment failed"
        exit 1
      fi
    else
      # Let Vercel build from source
      if PREVIEW_URL=$(vercel --yes); then
        print_success "Preview deployment successful!"
        echo ""
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
    echo "  • Visit https://seasalt.ai to see your changes"
    echo "  • Check Vercel dashboard: https://vercel.com/dashboard"
  else
    echo "  • Visit the preview URL above to test your changes"
    echo "  • Deploy to production with: ./deploy/deploy-vercel.sh --prod"
  fi
  echo ""
}

# Run main function
main "$@"

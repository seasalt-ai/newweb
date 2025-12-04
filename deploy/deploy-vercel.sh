#!/usr/bin/env bash
set -euo pipefail

# Vercel Deployment Script for Seasalt AI Website
# This script deploys the website to Vercel
#
# ⚠️  IMPORTANT WARNING ABOUT --skip-build FLAG:
# ================================================
# The --skip-build flag in this script is MISLEADING and does NOT work as expected!
# 
# Current behavior with --skip-build:
#   ✓ Skips local "npm run build" 
#   ✗ Vercel STILL BUILDS on their servers (reads vercel.json buildCommand)
#   ✗ Your local dist/ folder is IGNORED
#
# Why this happens:
#   - Vercel deploys from project root (not just dist/)
#   - Vercel reads vercel.json which specifies buildCommand: "npm run build"
#   - Vercel always builds unless you use --prebuilt flag with .vercel/output structure
#
# To truly deploy pre-built files without any build:
#   - Use Netlify: ./deploy/deploy-netlify.sh --skip-build --prod
#   - Use Cloudflare: ./deploy/deploy-cloudflare.sh --skip-build --prod
#
# Implementing --prebuilt for Vercel requires:
#   1. Creating .vercel/output/ directory structure
#   2. Moving dist/ contents to .vercel/output/static/
#   3. Creating .vercel/output/config.json with routing rules
#   This is complex and not currently implemented.
#
# RECOMMENDATION: Don't use --skip-build with Vercel. Let Vercel build from source.
# ================================================
#
# Prerequisites:
# 1. Install Vercel CLI: npm install -g vercel
# 2. Login to Vercel: vercel login
# 3. Link project: vercel link (run once in project root)
#
# Usage:
#   ./deploy/deploy-vercel.sh [--prod|--preview] [--skip-build]
#
# Options:
#   --prod      Deploy to production
#   --preview   Deploy to preview (default)
#   --skip-build    Skip local build (WARNING: Vercel will still build on their servers!)

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
    print_info "⚠️  WARNING: --skip-build flag is enabled"
    echo ""
    echo "⚠️  IMPORTANT: Vercel will still BUILD on their servers!"
    echo "   - Your local dist/ folder will be IGNORED"
    echo "   - Vercel reads vercel.json and runs: npm run build"
    echo "   - This only skips the LOCAL build, not the remote build"
    echo ""
    echo "   To truly skip builds, use Netlify or Cloudflare Pages instead."
    echo "   Press Ctrl+C to cancel, or wait 5 seconds to continue..."
    echo ""
    sleep 5
    
    print_info "Skipping local build (but Vercel will still build remotely)..."
    if [ ! -d "dist" ]; then
      print_info "Note: dist/ folder not found locally, but Vercel will create it during remote build."
    else
      print_info "Note: Local dist/ folder found but will be ignored by Vercel."
    fi
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
  
  if [ "$SKIP_BUILD" = true ]; then
    print_info "⚠️  Note: Vercel will run 'npm run build' on their servers despite --skip-build flag"
  fi
  
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

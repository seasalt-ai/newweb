#!/usr/bin/env bash
set -euo pipefail

# Production rollback script - restores previous deployment from backup tag
# Usage: ./rollback-prod.sh [tag-name]
#   If no tag is specified, shows recent backup tags to choose from

# Get the directory where this script is located
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

# Source utilities
source "$SCRIPT_DIR/deploy-utils.sh"

# Configuration
PROD_REPO_URL="git@github.com:seasalt-ai/seasalt-ai.github.io.git"
PROD_REPO_NAME="seasalt-ai.github.io"
PROD_REPO_DIR="$HOME/.deployment-cache/$PROD_REPO_NAME"
PROD_BRANCH="master"
BACKUP_TAG_PREFIX="prod-backup"

# Function to show available backup tags and let user select
select_backup_tag() {
    local tags
    tags=$(git tag --list "${BACKUP_TAG_PREFIX}-*" --sort=-creatordate | head -20)
    
    if [[ -z "$tags" ]]; then
        print_error "No backup tags found!"
        exit 1
    fi
    
    echo "Available backup tags (most recent first):"
    echo "==========================================="
    
    local tag_array=()
    while IFS= read -r tag; do
        tag_array+=("$tag")
        local tag_date=$(git log -1 --format=%ai "$tag" 2>/dev/null || echo "unknown date")
        printf "  %2d. %-40s (created: %s)\n" "${#tag_array[@]}" "$tag" "$tag_date"
    done <<< "$tags"
    
    echo ""
    read -p "Enter the number of the tag to rollback to (or 'q' to quit): " selection
    
    if [[ "$selection" == "q" ]]; then
        print_info "Rollback cancelled."
        exit 0
    fi
    
    if ! [[ "$selection" =~ ^[0-9]+$ ]] || (( selection < 1 )) || (( selection > ${#tag_array[@]} )); then
        print_error "Invalid selection: $selection"
        exit 1
    fi
    
    echo "${tag_array[$((selection - 1))]}"
}

# Function to show tag details
show_tag_details() {
    local tag="$1"
    
    echo ""
    print_info "Tag details for: $tag"
    echo "--------------------------------------------"
    
    # Show commit info for the tag
    git log -1 --format="  Commit: %H%n  Author: %an <%ae>%n  Date: %ai%n  Message: %s" "$tag"
    
    # Show files changed between current HEAD and tag
    echo ""
    print_info "Changes that will be rolled back:"
    git diff --stat "$tag" HEAD | head -20
    
    echo ""
}

# Main rollback process
main() {
    local target_tag="${1:-}"
    
    print_warning "⚠️  PRODUCTION ROLLBACK TOOL ⚠️"
    echo "This will restore a previous version of the production website"
    echo "============================================================"
    
    # Ensure production repo exists
    if [[ ! -d "$PROD_REPO_DIR" ]]; then
        print_info "Production repository not found locally. Cloning..."
        mkdir -p "$(dirname "$PROD_REPO_DIR")"
        git clone "$PROD_REPO_URL" "$PROD_REPO_DIR"
    fi
    
    # Update production repo
    pushd "$PROD_REPO_DIR" > /dev/null
    
    print_info "Updating production repository..."
    git fetch origin
    git fetch --tags
    
    # Select tag if not provided
    if [[ -z "$target_tag" ]]; then
        echo ""
        target_tag=$(select_backup_tag)
    fi
    
    # Verify tag exists
    if ! git rev-parse "$target_tag" >/dev/null 2>&1; then
        print_error "Tag not found: $target_tag"
        echo "Available backup tags:"
        git tag --list "${BACKUP_TAG_PREFIX}-*" --sort=-creatordate | head -10
        popd > /dev/null
        exit 1
    fi
    
    # Show what will be rolled back
    show_tag_details "$target_tag"
    
    # Get confirmation
    print_warning "You are about to rollback PRODUCTION to: $target_tag"
    echo "This will affect the LIVE website at seasalt.ai"
    confirm_action "Are you SURE you want to rollback to this version?"
    
    # Create a new backup of current state before rollback
    print_info "Creating backup of current state before rollback..."
    ROLLBACK_BACKUP_TAG="rollback-backup-$(date -u '+%Y%m%d-%H%M%S')"
    git tag -a "$ROLLBACK_BACKUP_TAG" -m "Backup before rollback to $target_tag"
    git push origin "$ROLLBACK_BACKUP_TAG"
    echo "  - Current state backed up as: $ROLLBACK_BACKUP_TAG"
    
    # Perform the rollback
    print_info "Rolling back to $target_tag..."
    
    # Reset to the backup tag
    git checkout "$PROD_BRANCH"
    git reset --hard "$target_tag"
    
    # Force push to production
    print_info "Pushing rollback to production..."
    
    if git push --force-with-lease origin "$PROD_BRANCH"; then
        print_success "Successfully rolled back production!"
        
        popd > /dev/null
        
        echo ""
        echo "=========================================="
        print_success "🔄 PRODUCTION ROLLBACK COMPLETE! 🔄"
        echo "=========================================="
        echo ""
        echo "  📌 Rolled back to: $target_tag"
        echo "  📌 Pre-rollback backup: $ROLLBACK_BACKUP_TAG"
        echo "  📌 Live at: https://seasalt.ai"
        echo ""
        echo "  ⏰ Note: GitHub Pages may take 5-10 minutes to update"
        echo ""
        echo "  💡 If you need to undo this rollback:"
        echo "     ./deploy/rollback-prod.sh $ROLLBACK_BACKUP_TAG"
        echo ""
    else
        print_error "Failed to push rollback to production!"
        echo ""
        echo "You can manually complete the rollback:"
        echo "  cd $PROD_REPO_DIR"
        echo "  git push --force origin $PROD_BRANCH"
        popd > /dev/null
        exit 1
    fi
}

# Show usage if --help is provided
if [[ "${1:-}" == "--help" ]] || [[ "${1:-}" == "-h" ]]; then
    echo "Usage: $0 [backup-tag]"
    echo ""
    echo "Rolls back the production website to a previous backup."
    echo ""
    echo "Arguments:"
    echo "  backup-tag    Optional. The backup tag to rollback to."
    echo "                If not provided, shows a list of available backups."
    echo ""
    echo "Examples:"
    echo "  $0                                  # Interactive mode - select from list"
    echo "  $0 prod-backup-20240115-143022      # Rollback to specific tag"
    echo ""
    exit 0
fi

# Run main function
main "$@"

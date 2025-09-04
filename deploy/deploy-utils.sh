#!/usr/bin/env bash
# Shared deployment utilities

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Print colored messages
print_error() {
    echo -e "${RED}✘ $1${NC}" >&2
}

print_success() {
    echo -e "${GREEN}✔ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠ $1${NC}"
}

print_info() {
    echo -e "${BLUE}➤ $1${NC}"
}

# Check if on correct branch (optional)
check_branch() {
    local required_branch="$1"
    local current_branch="$(git rev-parse --abbrev-ref HEAD)"
    
    if [[ "$current_branch" != "$required_branch" ]]; then
        print_error "You must run this from the '$required_branch' branch (currently on '$current_branch')."
        exit 1
    fi
}

# Get current branch name
get_current_branch() {
    git rev-parse --abbrev-ref HEAD
}

# Check for uncommitted changes
check_clean_working_tree() {
    if ! git diff-index --quiet HEAD --; then
        print_error "Uncommitted changes detected; please commit or stash first."
        exit 1
    fi
}

# Build the project
build_project() {
    print_info "Building project..."
    
    if ! npm run build; then
        print_error "Build failed!"
        exit 1
    fi
    
    if ! npm run seo-update; then
        print_warning "SEO update failed, continuing anyway..."
    fi
    
    print_success "Build completed successfully"
}

# Verify build directory exists
verify_build_dir() {
    local build_dir="$1"
    
    if [[ ! -d "$build_dir" ]]; then
        print_error "Build directory '$build_dir' not found. Did the build complete?"
        exit 1
    fi
    
    # Check if build directory has content
    if [ -z "$(ls -A "$build_dir")" ]; then
        print_error "Build directory '$build_dir' is empty!"
        exit 1
    fi
    
    # Check for index.html
    if [[ ! -f "$build_dir/index.html" ]]; then
        print_warning "No index.html found in build directory"
    fi
    
    print_success "Build directory verified"
}

# Confirmation prompt
confirm_action() {
    local message="$1"
    local response
    
    echo -e "${YELLOW}$message${NC}"
    read -p "Type 'yes' to confirm: " response
    
    if [[ "$response" != "yes" ]]; then
        print_info "Operation cancelled"
        exit 0
    fi
}

# Create backup tag
create_backup_tag() {
    local repo_dir="$1"
    local tag_prefix="$2"
    local tag_name="${tag_prefix}-$(date -u '+%Y-%m-%d-%H%M%S')"
    
    pushd "$repo_dir" > /dev/null
    
    print_info "Creating backup tag: $tag_name"
    
    if git tag -a "$tag_name" -m "Backup before deployment at $(date -u '+%Y-%m-%d %H:%M:%S UTC')"; then
        if git push origin "$tag_name"; then
            print_success "Backup tag created: $tag_name"
            echo "$tag_name"  # Return the tag name
        else
            print_warning "Failed to push backup tag to remote"
        fi
    else
        print_warning "Failed to create backup tag"
    fi
    
    popd > /dev/null
}

# List recent backup tags
list_backup_tags() {
    local repo_dir="$1"
    local tag_prefix="$2"
    local limit="${3:-10}"
    
    pushd "$repo_dir" > /dev/null
    
    print_info "Recent backup tags (last $limit):"
    git tag -l "${tag_prefix}-*" | sort -r | head -n "$limit"
    
    popd > /dev/null
}

# Get build info
get_build_info() {
    local build_dir="$1"
    
    echo "Build Information:"
    echo "  - Directory: $build_dir"
    echo "  - Size: $(du -sh "$build_dir" | cut -f1)"
    echo "  - Files: $(find "$build_dir" -type f | wc -l)"
    echo "  - HTML files: $(find "$build_dir" -name "*.html" | wc -l)"
    echo "  - JS files: $(find "$build_dir" -name "*.js" | wc -l)"
    echo "  - CSS files: $(find "$build_dir" -name "*.css" | wc -l)"
}

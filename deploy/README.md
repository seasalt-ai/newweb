# Deployment System Documentation

This directory contains the deployment scripts for the Seasalt.ai website.

## Overview

The deployment system supports two environments:
1. **DEV Environment** - For testing and preview (`newweb.seasalt.ai`)
2. **Production Environment** - Live customer-facing site (`seasalt.ai`)

## Repository Architecture

This deployment system works with **two separate GitHub repositories**:

### 1. Source Code Repository (`seasalt-ai/newweb`)
- **Purpose**: Contains all source code, components, and development files
- **Branch Structure**: 
  - `main` - Production-ready code
  - `gh-pages` - DEV environment deployment
  - Feature branches for development
- **What's here**: TypeScript, React components, styles, configs, this deployment system

### 2. Production Repository (`seasalt-ai/seasalt-ai.github.io`)
- **Purpose**: Serves the live production website via GitHub Pages
- **Branch Structure**: 
  - `master` - Live website content (built files only)
- **What's here**: Only compiled HTML, CSS, JS, and static assets
- **Important**: This repo NEVER contains source code

### Why Separate Repositories?

1. **Security**: Source code is never exposed in the production repository
2. **Clean Deployments**: Production only contains exactly what's needed to serve the site
3. **GitHub Pages Optimization**: The `seasalt-ai.github.io` repo name enables GitHub Pages at the organization level
4. **Rollback Safety**: Production deployments are isolated from development
5. **Performance**: Smaller production repo means faster cloning and deployment

## Directory Structure

```
deploy/
├── deploy-dev.sh       # Deploy to DEV environment (gh-pages)
├── deploy-prod.sh      # Deploy to Production (seasalt-ai.github.io)
├── rollback-prod.sh    # Rollback Production to a previous version
├── deploy-utils.sh     # Shared utility functions
└── README.md          # This file
```

## Prerequisites

Before using the deployment scripts:
1. Ensure you have Git configured with SSH access to GitHub
2. Have Node.js and npm installed for building the project
3. Have proper permissions to push to the repositories
   - For production: Must have push access to `seasalt-ai/seasalt-ai.github.io` repo
   - Test with: `ssh -T git@github.com`

## Deployment Workflows

### 1. DEV Deployment (Testing/Preview)

Deploy your current branch to the DEV environment for testing:

```bash
# Deploy current branch to DEV
./deploy/deploy-dev.sh
```

**Details:**
- URL: https://newweb.seasalt.ai
- Repository: Uses `gh-pages` branch of current repo
- Can deploy from any branch
- No backup required (non-production)
- Automatic build and deployment

### 2. Production Deployment

Deploy the main branch to the live production website:

```bash
# MUST be on main branch
git checkout main
git pull origin main

# Deploy to production
./deploy/deploy-prod.sh
```

**Details:**
- URL: https://seasalt.ai
- Repository: `seasalt-ai/seasalt-ai.github.io` (master branch)
- MUST deploy from `main` branch only
- Creates automatic backup before deployment
- Multiple confirmation prompts for safety
- Stores production repo locally in `~/.deployment-cache/`

#### How Production Deployment Works

The production deployment uses a **separate repository strategy**. Here's the step-by-step process:

1. **Build Phase**: Runs `npm run build` in your current project to generate the `dist/` folder

2. **Repository Setup**: 
   - Checks if `~/.deployment-cache/seasalt-ai.github.io/` exists
   - If not, clones: `git clone git@github.com:seasalt-ai/seasalt-ai.github.io.git`
   - If exists, updates: `git fetch origin && git reset --hard origin/master`

3. **Backup Creation**: 
   - Creates a backup tag of current production state
   - Format: `prod-backup-YYYYMMDD-HHMMSS`
   - Pushes tag to remote for recovery purposes

4. **Content Replacement**:
   ```bash
   # In the production repo directory
   # Remove all files except .git directory
   find . -mindepth 1 -maxdepth 1 ! -name '.git' -exec rm -rf {} +
   
   # Copy built files from your project
   cp -R /your/project/dist/. ./
   ```

5. **GitHub Pages Configuration**:
   - Adds `CNAME` file with `seasalt.ai` and `www.seasalt.ai`
   - Adds `.nojekyll` to disable Jekyll processing
   - Creates `deployment-info.txt` with metadata

6. **Commit & Push**:
   - Commits all changes with deployment timestamp
   - Pushes to `master` branch of production repo
   - GitHub Pages automatically serves the updated content

**Important**: The production repository (`seasalt-ai.github.io`) is completely separate from your source code repository. It only contains the built/compiled website files, not the source code. This separation ensures:
- Clean production deployments
- No source code in production repo
- Independent version control for deployments
- Easy rollback capabilities

### 3. Production Rollback

If something goes wrong in production, quickly rollback:

```bash
# Interactive mode - select from list of backups
./deploy/rollback-prod.sh

# Direct rollback to specific backup
./deploy/rollback-prod.sh prod-backup-20240115-143022
```

**Details:**
- Shows list of available backup tags
- Creates new backup before rollback
- Can rollback the rollback if needed

## Safety Features

### Production Deployment Safety
1. **Branch Protection**: Can only deploy from `main` branch
2. **Clean Working Tree**: Ensures no uncommitted changes
3. **Automatic Backups**: Creates timestamped backup tags
4. **Multiple Confirmations**: Requires explicit confirmation
5. **Deployment Info**: Tracks deployment metadata

### Backup System
- Automatic backup tags: `prod-backup-YYYYMMDD-HHMMSS`
- Rollback backup tags: `rollback-backup-YYYYMMDD-HHMMSS`
- All backups are pushed to remote repository
- Recent backups displayed before deployment

## Typical Workflows

### Feature Development → Production

1. **Develop on feature branch**
   ```bash
   git checkout -b feature/my-feature
   # Make changes...
   ```

2. **Test in DEV environment**
   ```bash
   ./deploy/deploy-dev.sh
   # Check https://newweb.seasalt.ai
   ```

3. **Merge to main**
   ```bash
   git checkout main
   git pull origin main
   git merge feature/my-feature
   git push origin main
   ```

4. **Deploy to Production**
   ```bash
   ./deploy/deploy-prod.sh
   # Check https://seasalt.ai
   ```

### Emergency Rollback

If production has issues after deployment:

```bash
# Quick rollback to previous version
./deploy/rollback-prod.sh
# Select the most recent prod-backup-* tag
```

### Viewing Deployment History

```bash
# View production repo location
echo ~/.deployment-cache/seasalt-ai.github.io

# Check production deployment history
cd ~/.deployment-cache/seasalt-ai.github.io
git log --oneline -10

# View backup tags
git tag -l "prod-backup-*" --sort=-creatordate | head -10
```

## Configuration

Key configurations in the scripts:

### deploy-dev.sh
- Target branch: `gh-pages`
- Domain: `newweb.seasalt.ai`
- Build directory: `dist`

### deploy-prod.sh
- Repository: `seasalt-ai/seasalt-ai.github.io`
- Target branch: `master`
- Domain: `seasalt.ai`
- Required source branch: `main`
- Cache directory: `~/.deployment-cache/`

## Build Process

All deployment scripts automatically:
1. Run `npm run build` to create production build
2. Verify the build output in `dist/` directory
3. Display build statistics (file count, size)
4. Add necessary GitHub Pages files (CNAME, .nojekyll)

## Troubleshooting

### Build Failures
- Ensure Node.js and npm are installed
- Run `npm install` to install dependencies
- Check for TypeScript or build errors

### Permission Denied
- Verify SSH key is added to GitHub account
- Check repository access permissions
- For production deployment specifically:
  ```bash
  # Test SSH access
  ssh -T git@github.com
  
  # Test production repo access
  git ls-remote git@github.com:seasalt-ai/seasalt-ai.github.io.git
  ```

### Deployment Not Reflecting
- GitHub Pages can take 5-10 minutes to update
- Check GitHub Pages settings in repository
- Verify CNAME file is correct

### Rollback Issues
- Ensure you have the latest tags: `git fetch --tags`
- Check if backup tag exists before attempting rollback
- Use the full tag name when rolling back

### Production Deployment Specific Issues

#### "Repository not found" error
- Ensure you have push access to `seasalt-ai/seasalt-ai.github.io`
- Contact repository admin to grant access

#### First-time deployment is slow
- Initial clone of production repo takes time
- Subsequent deployments use cached repo and are much faster

#### Local cache issues
```bash
# Clear the cache and try again
rm -rf ~/.deployment-cache/seasalt-ai.github.io
./deploy/deploy-prod.sh
```

#### Verify production repo state manually
```bash
# Check the production repo directly
cd ~/.deployment-cache/seasalt-ai.github.io
git status
git log --oneline -5
git remote -v
```

## Support Files

### deploy-utils.sh
Shared utilities providing:
- Color-coded output functions
- Git operations (branch checks, clean tree)
- Build management
- Backup tag creation
- User confirmation prompts

## Important Notes

⚠️ **Production Deployment**:
- Always test in DEV first
- Ensure main branch is up-to-date
- Review changes before confirming deployment
- Keep track of backup tags for emergency rollbacks

💡 **Best Practices**:
- Deploy during low-traffic periods
- Monitor the site after deployment
- Keep team informed of deployments
- Document any special deployment steps

## Questions or Issues?

If you encounter problems:
1. Check this README first
2. Review error messages in terminal
3. Verify prerequisites are met
4. Contact the development team if issues persist

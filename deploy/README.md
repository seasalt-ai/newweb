# Deployment System Documentation

This directory contains the deployment scripts for the Seasalt.ai website.

## Overview

The deployment system supports two environments:
1. **DEV Environment** - For testing and preview (`newweb.seasalt.ai`)
2. **Production Environment** - Live customer-facing site (`seasalt.ai`)

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

### Deployment Not Reflecting
- GitHub Pages can take 5-10 minutes to update
- Check GitHub Pages settings in repository
- Verify CNAME file is correct

### Rollback Issues
- Ensure you have the latest tags: `git fetch --tags`
- Check if backup tag exists before attempting rollback
- Use the full tag name when rolling back

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

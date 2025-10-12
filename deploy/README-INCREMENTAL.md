# Incremental Production Deployment

## Overview

This repository now supports **incremental deployments** that only deploy changed files instead of all 5000+ files. This dramatically reduces deployment time from minutes to seconds for typical changes.

## Scripts

### `deploy-prod-incremental.sh` (NEW - Recommended)
- **Purpose**: Deploy only changed files to production
- **Speed**: Very fast (seconds vs minutes)
- **Use case**: Regular deployments when you've changed a few pages/files
- **Safety**: Same backup and rollback features as full deployment

### `deploy-prod.sh` (Original)
- **Purpose**: Deploy ALL files to production  
- **Speed**: Slower (deploys all ~5000 files)
- **Use case**: Major updates, first deployment, or when you want a clean slate

## How Incremental Deployment Works

1. **Builds** the website normally (`npm run build`)
2. **Analyzes** differences between new build and current production
3. **Shows** you exactly what files will change (added/modified/deleted)
4. **Syncs** only the changed files using `rsync`
5. **Commits** only the actual changes to git
6. **Pushes** the minimal changeset to production

## Usage

### Quick Start (Recommended)
```bash
# For regular deployments - much faster!
./deploy/deploy-prod-incremental.sh
```

### Full Deployment (when needed)
```bash
# For major updates or clean deployments
./deploy/deploy-prod.sh

# Or force full deployment
./deploy/deploy-prod-incremental.sh --force-full
```

## Example Output

```
➤ Analyzing file changes...

📊 Change Summary:
  📁 Files to add: 2
  ✏️  Files to modify: 3
  🗑️  Files to delete: 1
  📈 Total changes: 6

📁 New files:
  + en/blog/new-post/index.html
  + assets/images/new-feature.png

✏️  Modified files:
  ~ en/index.html
  ~ zh-TW/pricing/index.html
  ~ sitemap.xml

🗑️  Deleted files:
  - old-page.html

➤ Syncing 6 changed files...
✔ File sync completed successfully
```

## Performance Comparison

| Deployment Type | Files Changed | Time | Bandwidth |
|----------------|---------------|------|-----------|
| **Full** | ~5000 files | 3-5 minutes | ~50MB |
| **Incremental** | 5-10 files | 10-30 seconds | ~1-5MB |

## When to Use Each Method

### Use Incremental (`deploy-prod-incremental.sh`)
- ✅ Content updates (blog posts, product pages)
- ✅ Translation updates
- ✅ Bug fixes
- ✅ Style/layout changes
- ✅ Regular development workflow
- ✅ Any time you changed < 100 files

### Use Full (`deploy-prod.sh`)
- 🔄 Major site restructure
- 🔄 First-time deployment
- 🔄 Build system changes
- 🔄 When you want a completely clean deployment
- 🔄 If incremental deployment seems to have issues

## Safety Features

Both deployment methods include:
- ✅ **Backup tags** before deployment
- ✅ **Rollback capability** if something goes wrong
- ✅ **Change preview** before confirming
- ✅ **Git history** of exactly what changed
- ✅ **Branch protection** (must be on `main`)

## Troubleshooting

### If incremental deployment seems wrong:
```bash
# Use full deployment to reset everything
./deploy/deploy-prod.sh
```

### If you want to see what would change without deploying:
```bash
# Dry run to see changes (add this feature if needed)
rsync -avh --delete --dry-run dist/ ~/.deployment-cache/seasalt-ai.github.io/
```

### Check deployment logs:
```bash
# Recent changes log
cat ~/.deployment-cache/last-deployment-changes.log

# Git history in production repo
cd ~/.deployment-cache/seasalt-ai.github.io
git log --oneline -10
```

## Migration Guide

### For existing deployments:
1. **No changes needed** - your existing setup will work
2. **Start using incremental** - just run `./deploy/deploy-prod-incremental.sh`
3. **Fallback available** - original script still works exactly the same

### For CI/CD systems:
```yaml
# GitHub Actions example
- name: Deploy to Production (Incremental)
  run: ./deploy/deploy-prod-incremental.sh
  
# Fallback to full deployment
- name: Deploy to Production (Full)
  run: ./deploy/deploy-prod.sh
  if: failure()
```

## Technical Details

- **File comparison**: Uses `rsync` for efficient diff analysis
- **Git optimization**: Only commits actual changes
- **Cache location**: `~/.deployment-cache/`
- **Backup system**: Same robust backup/restore as original
- **Dependencies**: Requires `rsync` (standard on Unix systems)

## Benefits

1. **⚡ Speed**: 10-20x faster for typical changes
2. **💾 Bandwidth**: Uses much less bandwidth
3. **📊 Clarity**: See exactly what files changed
4. **🔧 Git History**: Cleaner commit history showing real changes
5. **🛡️ Safety**: Same safety features as full deployment
6. **🔄 Compatibility**: Fully backward compatible

---

**Recommendation**: Use incremental deployment for your regular workflow, and fall back to full deployment only when needed for major changes.
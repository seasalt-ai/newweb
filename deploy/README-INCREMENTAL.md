# Smart Production Deployment

## Overview

This repository now supports **smart deployment** that automatically chooses the best deployment method based on what actually changed. This solves the problem where Astro's content hashing makes "incremental" deployment detect thousands of unchanged files.

## The Problem with Astro Builds

Astro uses **content-based hashing** for JavaScript files (`ApiPageComponents.2webKHQW.js`), which means:
- File names change every build, even if content is identical
- All HTML files referencing these scripts also "change"
- Traditional incremental deployment detects 3000+ "changed" files
- You lose the benefits of incremental deployment

## Scripts

### `deploy-prod-smart.sh` (NEW - **RECOMMENDED**)
- **Purpose**: Intelligently chooses incremental vs full deployment
- **Speed**: Optimal for each situation
- **Use case**: **Use this for all deployments**
- **Intelligence**: Analyzes actual content changes vs build artifact changes

### `deploy-prod-incremental.sh` (Manual Incremental)
- **Purpose**: Force incremental deployment
- **Speed**: Fast when it works, but often detects too many changes with Astro
- **Use case**: When you know only a few files truly changed

### `deploy-prod.sh` (Full Deployment)
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

### Smart Deployment (Recommended for All Cases)
```bash
# Let the script decide the best deployment method
./deploy/deploy-prod-smart.sh
```

**What it does:**
1. **Analyzes** your build to detect real content changes vs Astro hash changes
2. **Recommends** incremental or full deployment based on actual changes
3. **Asks** for your preference with clear explanations
4. **Executes** the chosen deployment method

### Manual Deployment Methods
```bash
# Force incremental (may detect many false changes with Astro)
./deploy/deploy-prod-incremental.sh --checksum

# Force full deployment 
./deploy/deploy-prod.sh
```

## Example: Smart Deployment Output

### Scenario 1: Content Changes (Recommends Incremental)
```
🧠 Analyzing build changes intelligently...

📊 File counts:
  Source (new build): 5247 files
  Target (production): 5245 files

🔍 Analyzing content vs filename changes...
📈 Content analysis:
  Unique source content: 4891
  Unique target content: 4889
  Common content: 4887

📝 Analyzing file type changes...
  ✏️  Sitemap changed (indicates content updates)
  ✏️  Content changed in en/index.html
  ✅ Robots.txt unchanged

🤖 Smart deployment decision:
✅ Small content changes detected - perfect for incremental
  - Only 2 content files changed
  - Most changes are just JavaScript hash updates
  - Recommendation: Use incremental deployment

🤔 Multiple deployment options available:
1. 🚀 Incremental deployment (fast - only changed files)
2. 🔄 Full deployment (thorough - all files)
3. ❌ Skip deployment (no changes needed)

Choose deployment type [1/2/3]: 1
🚀 Proceeding with incremental deployment...
```

### Scenario 2: Build-Only Changes (Recommends Skip/Full)
```
🧠 Analyzing build changes intelligently...

📝 Analyzing file type changes...
  ✅ Sitemap unchanged
  ✅ Robots.txt unchanged
  ✅ All sample HTML content unchanged

🤖 Smart deployment decision:
🔄 Build-only changes detected (no content changes)
  - This appears to be a rebuild with no actual content changes
  - Only JavaScript hashes and references changed
  - Recommendation: Skip deployment or use full deployment to reset
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
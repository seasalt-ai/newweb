# Deployment System Documentation

This directory contains the deployment scripts for the Seasalt.ai website.

Final verdict: after slimming down the files, I was able to deploy to both Cloudflare pages (about 11K files) and github pages.

I'll set it up for Github pages for now.

For namecheap DNS setup:

For CloudFlare Pages: 

   CNAME @ seasalt-ai-website.pages.dev
   CNAME www seasalt-ai-website.pages.dev

For Github Pages:
   CNAME www seasalt-ai.github.io
   A Record @ 185.199.108.153
   A Record @ 185.199.109.153
   A Record @ 185.199.110.153
   A Record @ 185.199.111.153

Quick commands:

   npm run build
   ./deploy/deploy-netlify.sh --skip-build --prod # Works
   ./deploy/deploy-cloudflare.sh --skip-build --prod # Works

   # not working: ./deploy/deploy-cloudflare.sh --skip-build --prod
   # but ./deploy/deploy-cloudflare.sh --prod should work

CANNOT build with automatic runners for github:  Uploaded artifact size of 1542881534 bytes exceeds the allowed size of 1 GB. Deployment might fail. 

CANNOT build with Vercel's default runner: ENOSPC: no space left on device, write


       at async generatePath (file:///vercel/path0/node_modules/astro/dist/core/build/generate.js:399:3)
    at async generatePage (file:///vercel/path0/node_modules/astro/dist/core/build/generate.js:194:9)
    at async staticBuild (file:///vercel/path0/node_modules/astro/dist/core/build/static-build.js:84:5)
    at async AstroBuilder.run (file:///vercel/path0/node_modules/astro/dist/core/build/index.js:185:7)
      error Command failed with exit code 1.
      info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
      Error: Command "yarn run build" exited with 1
      Error: Failed to write diagnostics trace file
      Error: ENOENT: no such file or directory, mkdir '/vercel/output/diagnostics'
      Error: ENOSPC: no space left on device, open '/vercel/output/config.json'
      ▲ Build system report
      ▲ To always completely log this report, add VERCEL_BUILD_SYSTEM_REPORT=1 as an Environment Variable to your project.
      • It's very likely that the build container ran out of disk space ("ENOSPC")
      • Folder sizes on disk:
      ‣ Input source code:   573 MB
      ‣ Build cache:          <1 MB
      ‣ Output files:          1 MB
      ‣ Node modules:        449 MB
      • 1 files larger than 100 MB detected on disk:
      ‣ 202 MB : .git/objects/pack/pack-2ff0581b2d67403cd62be27f4e06a78e82d03dfc.pack


CANNOT build with Netlify's default runner: 

   3:29:04 PM: 23:29:03   ├─ /fil/seavoice/platform/text-to-speech/index.html
   3:29:04 PM: Execution timed out after 18m0.086512608s
   3:29:04 PM: Failing build: Failed to build site
   3:29:08 PM: Finished processing build request in 18m32.983s

   Need to manually request build time limit increase on the forum

For  ./deploy/deploy-cloudflare.sh --skip-build --prod:

The logic for handling the --skip-build flag is not implemented correctly for either production or preview deployments. The script calls vercel --yes or vercel --prod --yes regardless of the flag, which always triggers a remote build on Vercel's servers and ignores the local dist/ folder.

To deploy a pre-built site to Vercel, you must use the --prebuilt flag. This is more complex as it requires the content to be in a specific .vercel/output directory structure.

As it stands, the --skip-build flag is misleading and non-functional. I recommend either fully implementing the --prebuilt logic or removing the --skip-build option from this script to avoid confusion.



## Overview

The website can be deployed to multiple platforms:

- **GitHub Pages** (via separate repository) - Legacy/Current setup
- **Vercel** - Modern platform with excellent developer experience
- **Netlify** - Great for forms and redirects
- **Cloudflare Pages** - Best performance and unlimited bandwidth

### GitHub Pages Environments

The GitHub Pages deployment system supports two environments:
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
├── deploy-github-dev.sh       # Deploy to DEV environment (gh-pages)
├── deploy-github-prod.sh      # Deploy to Production (seasalt-ai.github.io)
├── rollback-prod.sh           # Rollback Production to a previous version
├── deploy-utils.sh            # Shared utility functions
└── README.md                  # This file
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
./deploy/deploy-github-dev.sh
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
./deploy/deploy-github-prod.sh
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
   ./deploy/deploy-github-dev.sh
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
   ./deploy/deploy-github-prod.sh
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

### deploy-github-dev.sh
- Target branch: `gh-pages`
- Domain: `newweb.seasalt.ai`
- Build directory: `dist`

### deploy-github-prod.sh
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
./deploy/deploy-github-prod.sh
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

---

# Modern Platform Deployments

In addition to GitHub Pages, the website can be deployed to modern hosting platforms that offer significant advantages:

## Why Use Modern Platforms?

- ✅ **Faster deployments** - No separate repository needed
- ✅ **Better developer experience** - Automatic builds from Git
- ✅ **Preview deployments** - Every PR gets a unique URL
- ✅ **Edge networks** - Global CDN for better performance
- ✅ **Zero configuration** - Auto-detect Astro framework
- ✅ **Free SSL** - Automatic HTTPS certificates
- ✅ **Unlimited bandwidth** - Cloudflare Pages offers unlimited free bandwidth

## Platform Comparison

| Feature | GitHub Pages | Vercel | Netlify | Cloudflare Pages |
|---------|--------------|--------|---------|------------------|
| **Free Bandwidth** | 100GB/month | 100GB/month | 100GB/month | **Unlimited** ✨ |
| **Build Minutes** | Via Actions | 6,000/month | 300/month | 500/month |
| **Setup Complexity** | High (2 repos) | Low | Low | Low |
| **Preview Deploys** | Manual | Automatic | Automatic | Automatic |
| **Custom Domain** | ✅ | ✅ | ✅ | ✅ |
| **SSL/TLS** | ✅ | ✅ | ✅ | ✅ |
| **Edge Network** | Limited | Global | Global | Global (275+ cities) |
| **DDoS Protection** | Basic | ✅ | ✅ | ✅✅ Best-in-class |
| **Build from Source** | Via Actions | ✅ | ✅ | ✅ |

### Recommendation

- **For simplicity & speed**: Vercel or Netlify
- **For performance & bandwidth**: Cloudflare Pages (unlimited bandwidth!)
- **For current setup**: GitHub Pages (already configured)

---

## Quick Start: Modern Platforms

### Build Once, Deploy Everywhere (Recommended)

Save ~60% deployment time by building once and deploying to multiple platforms:

```bash
# Build once
npm run build

# Deploy to all platforms using the same build
./deploy/deploy-vercel.sh --skip-build --preview
./deploy/deploy-netlify.sh --skip-build --preview
./deploy/deploy-cloudflare.sh --skip-build --preview
```

---

## Vercel Deployment

**Important Note:** Unlike Netlify and Cloudflare, Vercel's `--skip-build` flag in our script still allows Vercel to run the build on their servers. This is because Vercel deploys from the project root and will use the build configuration in `vercel.json`. To truly skip the build, you would need to use Vercel's `--prebuilt` flag with a pre-configured `.vercel/output` directory structure, which is more complex.

**For fastest deployments with pre-built files, use Netlify or Cloudflare Pages instead.**

### Setup via Dashboard (Recommended for First Time)

**Step 1: Import Repository**
1. Visit https://vercel.com/new
2. Click "Import Git Repository"
3. Select your repository: `seasalt-ai/newweb`
4. Click "Import"

**Step 2: Verify Configuration**

Vercel auto-detects Astro and configures:
- **Framework Preset**: Astro ✅
- **Root Directory**: `./` (default) ✅
- **Build Command**: `npm run build` ✅
- **Output Directory**: `dist` ✅
- **Install Command**: `npm install` ✅

**Important:** Verify these are correct, then click **"Deploy"**

**Step 3: Link Local Project**
```bash
# After first deployment succeeds
vercel login
vercel link

# Select:
? Link to existing project? yes ← IMPORTANT
? Select project: [Choose the one you created]
```

**Step 4: Deploy Using Script**
```bash
# Deploy to preview
./deploy/deploy-vercel.sh --skip-build --preview

# Deploy to production
./deploy/deploy-vercel.sh --skip-build --prod
```

### Setup via CLI (Alternative)

```bash
# Install and login
npm install -g vercel
vercel login

# Link project
vercel link

# IMPORTANT: Answer carefully
? In which directory is your code located?
→ ./   ⚠️ Use "./" NOT "./dist"

? Want to modify these settings?
→ yes

# Configure:
Framework Preset: Astro
Build Command: npm run build
Output Directory: dist   ⚠️ Must be "dist"
Install Command: npm install
Development Command: npm run dev
```

### Common Vercel Issues

**❌ Issue: Selected `./dist` as code location**

**Problem:** You selected `./dist` instead of `./` during setup. Vercel needs source code, not build output.

**Solution:**
```bash
# Remove incorrect configuration
rm -rf .vercel .env.local

# Link again and select "./" as code location
vercel link
```

**❌ Issue: Failed to connect repository**

**Problem:** GitHub repository connection failed during CLI setup

**Solution:** This is optional. You can:
- Skip it during CLI setup
- Connect later via Vercel dashboard: Project Settings → Git → Connect

**❌ Issue: Build failed**

**Solution:** Check in Vercel dashboard:
- Project Settings → General → Build & Development Settings
- Ensure: Build Command = `npm run build`, Output Directory = `dist`

---

## Netlify Deployment

### Setup via Dashboard (Recommended)

**Step 1: Import Repository**
1. Visit https://app.netlify.com/start
2. Click "Import from Git" → GitHub
3. Authorize Netlify to access your repositories
4. Select repository: `seasalt-ai/newweb`

**Step 2: Configure Build Settings**
- **Base directory**: (leave empty)
- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **Production branch**: `main` (or `master`)

Click **"Deploy site"**

**Step 3: Link Local Project**
```bash
# After first deployment succeeds
npm install -g netlify-cli
netlify login
netlify link

# Select:
? How do you want to link this folder to a site?
→ Use current git remote origin
# Or manually search for your site
```

**Step 4: Deploy Using Script**
```bash
# Deploy to preview
./deploy/deploy-netlify.sh --skip-build --preview

# Deploy to production
./deploy/deploy-netlify.sh --skip-build --prod
```

### Setup via CLI (Alternative)

```bash
# Install and login
npm install -g netlify-cli
netlify login

# Initialize new site
netlify init

# Answer prompts:
? What would you like to do?
→ Create & configure a new site

? Team:
→ [Select your team]

? Site name (optional):
→ seasalt-ai-website

? Your build command:
→ npm run build

? Directory to deploy:
→ dist
```

### Common Netlify Issues

**❌ Issue: Site not found**

**Solution:**
```bash
# Check if .netlify folder exists
ls -la .netlify

# If not, link the site
netlify link
```

**❌ Issue: Build failed**

**Solution:** Check `netlify.toml` in project root has:
```toml
[build]
  command = "npm run build"
  publish = "dist"
```

Or update in dashboard: Site Settings → Build & Deploy → Build settings

---

## Cloudflare Pages Deployment

### Setup via Dashboard (Recommended)

**Step 1: Create Pages Project**
1. Visit https://dash.cloudflare.com
2. Navigate to **Workers & Pages** → **Pages**
3. Click **"Create a project"** → **"Connect to Git"**

**Step 2: Connect Repository**
1. Select **GitHub** (or your Git provider)
2. Authorize Cloudflare Pages
3. Select repository: `seasalt-ai/newweb`
4. Click **"Begin setup"**

**Step 3: Configure Build Settings**
- **Project name**: `seasalt-ai-website`
- **Production branch**: `main` (or `master`)
- **Framework preset**: Astro
- **Build command**: `npm run build`
- **Build output directory**: `dist`
- **Root directory**: (leave empty)

Click **"Save and Deploy"**

**Step 4: Deploy via CLI**
```bash
# After first deployment succeeds
npm install -g wrangler
wrangler login
./deploy/deploy-cloudflare.sh --skip-build --prod --project-name seasalt-ai-website
```

**Note:** First CLI deployment will prompt:
```
? Enter the production branch name:
→ main   (or "master" if that's your default branch)
```

### Setup via CLI Only (Alternative)

```bash
# Install and login
npm install -g wrangler
wrangler login

# Deploy (creates project automatically on first run)
./deploy/deploy-cloudflare.sh --skip-build --prod --project-name seasalt-ai-website

# You'll be prompted:
? Enter the production branch name:
→ main   (or "master")
```

### Common Cloudflare Issues

**❌ Issue: wrangler.toml validation errors**

**Problem:** Old or invalid `wrangler.toml` configuration

**Solution:** Ensure `wrangler.toml` in project root contains only:
```toml
name = "seasalt-ai-website"
compatibility_date = "2024-01-01"
pages_build_output_dir = "dist"
```

**❌ Issue: Project not found**

**Problem:** Project hasn't been created yet

**Solution:** First deployment creates the project automatically. Or create via dashboard first (recommended).

**❌ Issue: Authentication failed**

**Solution:**
```bash
# Check authentication
wrangler whoami

# If not logged in:
wrangler login
```

---

## Deployment Workflows

### Workflow 1: Quick Preview Deploy (Fastest)

```bash
# Build once
npm run build

# Deploy to your preferred platform
./deploy/deploy-vercel.sh --skip-build --preview
# Get instant preview URL
```

### Workflow 2: Multi-Platform Testing

```bash
# Build once
npm run build

# Test on all platforms simultaneously
./deploy/deploy-vercel.sh --skip-build --preview &
./deploy/deploy-netlify.sh --skip-build --preview &
./deploy/deploy-cloudflare.sh --skip-build --preview &
wait

# Compare performance, features, etc.
```

### Workflow 3: Production Deployment

```bash
# Build and verify locally first
npm run build
npm run preview  # Test locally

# Deploy to production on your chosen platform
./deploy/deploy-vercel.sh --skip-build --prod
# OR
./deploy/deploy-netlify.sh --skip-build --prod
# OR
./deploy/deploy-cloudflare.sh --skip-build --prod
```

### Workflow 4: Traditional (Build Each Time)

```bash
# Each platform builds independently
./deploy/deploy-vercel.sh --prod
./deploy/deploy-netlify.sh --prod
./deploy/deploy-cloudflare.sh --prod
```

---

## Script Options

All modern deployment scripts support these flags:

```bash
# Preview deployment (default)
./deploy/deploy-[platform].sh --preview

# Production deployment
./deploy/deploy-[platform].sh --prod

# Skip build step (use existing dist/ folder)
./deploy/deploy-[platform].sh --skip-build --prod

# Cloudflare: Specify project name
./deploy/deploy-cloudflare.sh --project-name my-project

# Help
./deploy/deploy-[platform].sh --help
```

**Examples:**
```bash
# Vercel preview with pre-built dist/
./deploy/deploy-vercel.sh --skip-build --preview

# Netlify production, build from scratch
./deploy/deploy-netlify.sh --prod

# Cloudflare preview with custom project name
./deploy/deploy-cloudflare.sh --skip-build --preview --project-name my-site
```

---

## Configuration Files

Each platform uses specific configuration files in the project root:

- **`vercel.json`** - Vercel configuration (headers, build settings, routing)
- **`netlify.toml`** - Netlify configuration (build, redirects, headers, plugins)
- **`wrangler.toml`** - Cloudflare Pages configuration (minimal - most config in dashboard)
- **`public/_headers`** - HTTP headers (used by Netlify & Cloudflare Pages)
- **`public/_redirects`** - Redirect rules (used by Netlify & Cloudflare Pages, Vercel uses the redirects key within vercel.json for handling redirects and does not use the _redirects file by default.)

These files are pre-configured with:
- ✅ Security headers (X-Frame-Options, X-XSS-Protection, CSP, etc.)
- ✅ Optimized caching for static assets (1 year cache for immutable files)
- ✅ Proper build settings for Astro

---

## Custom Domain Setup

### Vercel

1. Go to: Project Settings → Domains
2. Click **"Add"**
3. Enter: `seasalt.ai`
4. Configure DNS records as shown (A/CNAME)
5. SSL automatically provisioned ✅

### Netlify

1. Go to: Site Settings → Domain management
2. Click **"Add custom domain"**
3. Enter: `seasalt.ai`
4. Configure DNS records as shown
5. SSL automatically provisioned ✅

### Cloudflare Pages

1. Go to: Pages project → Custom domains
2. Click **"Set up a custom domain"**
3. Enter: `seasalt.ai`
4. If domain already on Cloudflare DNS: **Instant setup** ⚡
5. If not: Configure DNS records as shown
6. SSL automatically provisioned ✅

**Pro Tip:** If your domain is already managed by Cloudflare DNS, custom domain setup for Cloudflare Pages is instant!

---

## Troubleshooting Modern Platforms

### General Issues

**❌ Command not found: vercel/netlify/wrangler**

**Solution:**
```bash
npm install -g vercel        # For Vercel
npm install -g netlify-cli   # For Netlify
npm install -g wrangler      # For Cloudflare
```

**❌ dist/ folder not found**

**Solution:**
```bash
# Build the site first
npm run build

# Verify dist/ exists
ls -la dist/

# Then deploy
./deploy/deploy-[platform].sh --skip-build --prod
```

**❌ Build failed - npm command not found**

**Solution:**
```bash
# Install dependencies first
npm install

# Then build
npm run build
```

### Check Deployment Logs

**Vercel:**
```bash
vercel logs [deployment-url]
# Or view in dashboard: https://vercel.com/dashboard
```

**Netlify:**
```bash
netlify logs
# Or view in dashboard: https://app.netlify.com
```

**Cloudflare:**
```bash
wrangler pages deployment list --project-name=seasalt-ai-website
# Or view in dashboard: https://dash.cloudflare.com
```

### Platform Status Pages

Check if the platform is experiencing issues:

- **Vercel**: https://www.vercel-status.com/
- **Netlify**: https://www.netlifystatus.com/
- **Cloudflare**: https://www.cloudflarestatus.com/

---

## Best Practices

1. ✅ **Always test on preview first** before deploying to production
2. ✅ **Use `--skip-build` flag** when deploying to multiple platforms to save time
3. ✅ **Commit and push changes** to Git before deploying
4. ✅ **Check build logs** if deployment fails
5. ✅ **Set up custom domains** early in the process
6. ✅ **Use Git-based deployments** for automatic deployments on every push
7. ✅ **Monitor analytics** to understand traffic patterns
8. ✅ **Keep CLI tools updated**: `npm update -g vercel netlify-cli wrangler`

---

## Command Quick Reference

```bash
# === Vercel ===
vercel login
vercel link
./deploy/deploy-vercel.sh --skip-build --preview
./deploy/deploy-vercel.sh --skip-build --prod

# === Netlify ===
netlify login
netlify link
./deploy/deploy-netlify.sh --skip-build --preview
./deploy/deploy-netlify.sh --skip-build --prod

# === Cloudflare Pages ===
wrangler login
./deploy/deploy-cloudflare.sh --skip-build --preview
./deploy/deploy-cloudflare.sh --skip-build --prod --project-name seasalt-ai-website

# === GitHub Pages (legacy) ===
./deploy/deploy-github-prod.sh
./deploy/rollback-prod.sh
```

---

## Additional Resources

### GitHub Pages (Current Setup)
- [Incremental Deployment Guide](./README-INCREMENTAL.md)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)

### Modern Platforms
- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com)
- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages)
- [Astro Deployment Guide](https://docs.astro.build/en/guides/deploy/)

### Project Resources
- [Main Project README](../README.md)
- [Modern Platforms Deep Dive](./README-MODERN-PLATFORMS.md)

---

**Need Help?**

- Check platform-specific documentation above
- Review error messages carefully
- Test locally first: `npm run build && npm run preview`
- Contact platform support if issues persist

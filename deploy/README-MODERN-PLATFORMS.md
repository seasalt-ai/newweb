# Modern Platform Deployment Guide

This guide covers deploying the Seasalt AI website to modern hosting platforms: Vercel, Netlify, and Cloudflare Pages.

## Overview

The website can be deployed to three modern platforms:
- **Vercel**: Best for Next.js/React apps, excellent for Astro
- **Netlify**: Great developer experience, built-in form handling
- **Cloudflare Pages**: Global edge network, great performance

## Quick Start

### Vercel

```bash
# Install CLI
npm install -g vercel

# Login
vercel login

# Link project (first time only)
vercel link

# Deploy to preview
./deploy/deploy-vercel.sh --preview

# Deploy to production
./deploy/deploy-vercel.sh --prod
```

### Netlify

```bash
# Install CLI
npm install -g netlify-cli

# Login
netlify login

# Link project (first time only)
netlify link

# Deploy to preview
./deploy/deploy-netlify.sh --preview

# Deploy to production
./deploy/deploy-netlify.sh --prod
```

### Cloudflare Pages

```bash
# Install CLI
npm install -g wrangler

# Login
wrangler login

# Deploy to preview
./deploy/deploy-cloudflare.sh --preview

# Deploy to production
./deploy/deploy-cloudflare.sh --prod
```

## Configuration Files

### vercel.json
- Configures build settings, output directory, and headers
- Optimized for Astro static site generation
- Includes security headers and caching rules

### netlify.toml
- Build configuration and environment settings
- Redirect rules and security headers
- Plugin configuration for Astro

### wrangler.toml
- Cloudflare Pages configuration
- Build and upload settings
- Environment-specific configurations

### public/_headers
- HTTP headers for Netlify and Cloudflare Pages
- Security headers (X-Frame-Options, CSP, etc.)
- Cache-Control headers for static assets

## Platform Comparison

| Feature | Vercel | Netlify | Cloudflare Pages |
|---------|--------|---------|------------------|
| **Free Tier** | 100GB bandwidth | 100GB bandwidth | Unlimited bandwidth |
| **Build Minutes** | 6,000/month | 300/month | 500/month |
| **Edge Network** | Global | Global | Global (Cloudflare CDN) |
| **Custom Domains** | ✅ | ✅ | ✅ |
| **SSL/TLS** | Automatic | Automatic | Automatic |
| **Preview Deploys** | ✅ | ✅ | ✅ |
| **Rollbacks** | ✅ | ✅ | ✅ |
| **Analytics** | Paid | Free (limited) | Free (Web Analytics) |
| **Functions** | Serverless | Serverless | Workers |
| **DDoS Protection** | ✅ | ✅ | ✅ (Best-in-class) |

## Detailed Setup Instructions

### 1. Vercel Setup

#### Via Dashboard (Recommended for first time)
1. Go to https://vercel.com/new
2. Import your Git repository
3. Vercel will auto-detect Astro
4. Click "Deploy"

#### Via CLI
```bash
# Install Vercel CLI
npm install -g vercel

# Login to your account
vercel login

# Link your project
cd /path/to/project
vercel link

# Deploy
./deploy/deploy-vercel.sh --prod
```

#### Custom Domain Setup
1. Go to Project Settings → Domains
2. Add your domain (seasalt.ai)
3. Configure DNS records as instructed
4. SSL certificate is automatically provisioned

### 2. Netlify Setup

#### Via Dashboard (Recommended for first time)
1. Go to https://app.netlify.com/start
2. Connect your Git repository
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Click "Deploy site"

#### Via CLI
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to your account
netlify login

# Link your project
cd /path/to/project
netlify link

# Deploy
./deploy/deploy-netlify.sh --prod
```

#### Custom Domain Setup
1. Go to Site Settings → Domain management
2. Click "Add custom domain"
3. Add seasalt.ai
4. Configure DNS records as instructed
5. SSL certificate is automatically provisioned

### 3. Cloudflare Pages Setup

#### Via Dashboard (Recommended for first time)
1. Go to https://dash.cloudflare.com
2. Navigate to Pages
3. Click "Create a project"
4. Connect your Git repository
5. Configure build settings:
   - Build command: `npm run build`
   - Build output directory: `dist`
6. Click "Save and Deploy"

#### Via CLI
```bash
# Install Wrangler CLI
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Deploy (will create project if it doesn't exist)
./deploy/deploy-cloudflare.sh --prod --project-name seasalt-ai-website
```

#### Custom Domain Setup
1. Go to your Pages project
2. Click "Custom domains" tab
3. Click "Set up a custom domain"
4. Add seasalt.ai
5. If domain is already on Cloudflare, it's instant
6. If not, configure DNS records as instructed

## Environment Variables

All platforms support environment variables. Add them via:

### Vercel
```bash
vercel env add VARIABLE_NAME
```
Or via dashboard: Project Settings → Environment Variables

### Netlify
```bash
netlify env:set VARIABLE_NAME value
```
Or via dashboard: Site Settings → Environment Variables

### Cloudflare Pages
Via dashboard only: Pages Project → Settings → Environment Variables

## Continuous Deployment

All three platforms support automatic deployments from Git:

1. **Connect your repository** via the dashboard
2. **Configure build settings** (already done if using config files)
3. **Enable automatic deployments** for your main branch
4. Every push to main will trigger a new deployment

### Branch Previews
- All platforms automatically create preview deployments for pull requests
- Each PR gets a unique URL for testing
- Preview deployments use the same build configuration

## Performance Optimization

### Vercel
- Uses their global Edge Network
- Automatic image optimization available
- Supports Edge Functions for dynamic content

### Netlify
- Uses Netlify's global CDN
- Built-in asset optimization
- Supports Edge Functions

### Cloudflare Pages
- Deployed on Cloudflare's massive global network (275+ cities)
- Excellent DDoS protection
- Fastest cold starts for serverless functions (Workers)

## Monitoring and Analytics

### Vercel
- Real-time logs in dashboard
- Vercel Analytics (paid): Core Web Vitals, performance insights
- Free deployment logs

### Netlify
- Netlify Analytics (paid): Server-side analytics, no client-side tracking
- Deploy logs and build logs
- Free bandwidth analytics

### Cloudflare Pages
- Cloudflare Web Analytics (free): Privacy-first analytics
- Detailed deployment logs
- Real-time traffic analytics

## Rollback Instructions

### Vercel
```bash
# Via dashboard
1. Go to Deployments
2. Find previous deployment
3. Click "..." → "Promote to Production"

# Via CLI
vercel rollback
```

### Netlify
```bash
# Via dashboard
1. Go to Deploys
2. Find previous deployment
3. Click "Publish deploy"

# Via CLI
netlify rollback
```

### Cloudflare Pages
```bash
# Via dashboard only
1. Go to Deployments
2. Find previous deployment
3. Click "Rollback to this deployment"
```

## Troubleshooting

### Build Fails
1. Check build logs in the platform dashboard
2. Verify Node.js version matches local (18+)
3. Clear build cache and retry
4. Check for environment variable issues

### Custom Domain Not Working
1. Verify DNS records are correct
2. Wait for DNS propagation (up to 48 hours)
3. Check SSL certificate status
4. Ensure no conflicting DNS records

### Assets Not Loading
1. Check that assets are in the `public/` directory
2. Verify build output includes all assets
3. Check browser console for 404 errors
4. Verify redirects and headers configuration

## Cost Estimates

All platforms offer generous free tiers suitable for most websites:

### Vercel
- **Free**: 100GB bandwidth, 6,000 build minutes
- **Pro**: $20/month - 1TB bandwidth, unlimited builds

### Netlify
- **Free**: 100GB bandwidth, 300 build minutes
- **Pro**: $19/month - 1TB bandwidth, unlimited builds

### Cloudflare Pages
- **Free**: Unlimited bandwidth, 500 build minutes
- **Paid**: $20/month - Unlimited bandwidth, 5,000 build minutes

## Best Practices

1. **Use Git-based deployments** for production
2. **Test on preview URLs** before promoting to production
3. **Monitor build times** and optimize if needed
4. **Set up custom domains** early in the process
5. **Configure environment variables** securely
6. **Enable security headers** (already configured in our files)
7. **Use preview deployments** for PR reviews
8. **Monitor analytics** to understand traffic patterns

## Support

- **Vercel**: https://vercel.com/support
- **Netlify**: https://www.netlify.com/support
- **Cloudflare**: https://community.cloudflare.com

## Next Steps

1. Choose your preferred platform
2. Follow the setup instructions above
3. Deploy to preview first to test
4. Configure custom domain
5. Set up automatic deployments
6. Monitor your first deployment

For more information, see the official documentation:
- Vercel: https://vercel.com/docs
- Netlify: https://docs.netlify.com
- Cloudflare Pages: https://developers.cloudflare.com/pages

# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Quick Start Commands

### Development
```bash
# Install dependencies
npm install

# Start development server (http://localhost:5173)
npm run dev

# Preview production build
npm run preview
```

### Building & Production
```bash
# Build for production (includes TypeScript check, Vite build, and prerendering)
npm run build

# Build without prerendering
npm run build-only

# Generate static routes
npm run generate-routes

# Prerendering with Puppeteer
npm run prerender
```

### Linting & Code Quality
```bash
# Run ESLint
npm run lint

# For Python scripts, use flake8 with project-specific rules
flake8 --count --max-complexity=15 --max-line-length=127 --statistics --ignore D,E203,E501,W503,W504 --exclude=__init__.py* scripts/*.py
```

### SEO & Site Generation
```bash
# Generate sitemap
npm run generate-sitemap

# Generate robots.txt
npm run generate-robots

# Update both sitemap and robots.txt
npm run seo-update

# Analyze SEO (development)
npm run seo-analyze-dev

# Analyze SEO (production)
npm run seo-analyze-prod

# Generate SEO report with timestamp
npm run seo-report
```

## Architecture Overview

This is a React + TypeScript single-page application built with Vite, featuring:

### Core Stack
- **React 18** with React Router v6 for client-side routing
- **TypeScript** for type safety
- **Vite** for build tooling and development server
- **Tailwind CSS** for styling
- **i18next** for internationalization

### Project Structure
```
src/
├── App.tsx                 # Main router and route definitions
├── main.tsx               # Application entry point
├── i18n.ts                # i18next configuration
├── components/            # Shared UI components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── SEOHelmet.tsx     # SEO meta tags management
│   ├── LanguageRouter.tsx # Language-aware routing
│   └── [product]Router.tsx # Product-specific routers
├── pages/                 # Page components
│   ├── channels/         # Channel-specific pages
│   ├── compare/          # Comparison pages
│   ├── industries/       # Industry pages
│   └── solutions/        # Solution pages
├── seachat/              # SeaChat product module
├── seavoice/             # SeaVoice product module
├── seax/                 # SeaX product module
├── hooks/                # Custom React hooks
├── utils/                # Utility functions
│   └── seo.ts           # SEO utilities
└── constants/            # Constants and configs
    └── languages.ts      # Supported languages
```

### Routing Architecture
- Uses React Router v6 with path-based language routing (`/:lang/...`)
- Three main product routers: `SeaChatRouter`, `SeaXRouter`, `SeaVoiceRouter`
- Language detection from URL path with fallback to browser language
- Automatic redirects for non-language-prefixed URLs

### Key Components & Patterns
- **SEOHelmet**: Centralized SEO management using react-helmet-async
- **LanguageRouter**: Handles language-aware routing and redirects
- **Product Routers**: Modular routing for each product (SeaChat, SeaX, SeaVoice)
- **HtmlLangUpdater**: Updates HTML lang attribute on language change

## Internationalization (i18n) System

### Setup
- **Library**: i18next with react-i18next
- **Languages**: 20+ languages supported (en, es, zh-TW, ja, ko, fr, de, etc.)
- **Translation files**: Located in `public/locales/{lang}.json`
- **Language detection**: URL-based with browser language fallback

### Key i18n Features
```typescript
// Language extraction from URL
const pathSegments = window.location.pathname.split('/').filter(Boolean);
const lang = pathSegments[0]; // e.g., /zh-TW/seachat -> zh-TW

// i18next configuration highlights
{
  fallbackLng: 'en',
  supportedLngs: [...SUPPORTED_LANGUAGES],
  backend: {
    loadPath: '/locales/{{lng}}.json?v=' + Date.now(),
  }
}
```

### Translation Management

#### Bulk Translation Method (Recommended)
For adding multiple translations efficiently:

```bash
# 1. Create key-value file
cat > translations.txt << EOF
nav.home=Home
nav.products=Products
nav.solutions=Solutions
EOF

# 2. Generate nested JSON
node scripts/generate-updates.js translations.txt updates.json

# 3. Apply bulk updates
node scripts/bulk-update-translation.js public/locales/en.json updates.json

# 4. Clean up
rm translations.txt updates.json

# 5. Check for hardcoded strings
node scripts/analyze-i18n-coverage.js src/components/YourComponent.tsx
```

#### Single Translation Update
```bash
node scripts/update-translation.js public/locales/en.json "nav.home" "Homepage"
```

### Adding New Languages
1. Create translation file: `public/locales/{lang-code}.json`
2. Add to `SUPPORTED_LANGUAGES` in `src/constants/languages.ts`
3. Copy structure from `en.json` and translate values
4. Update language selector in Header component

## Blog System

### Blog Content Structure
- **Location**: `content/blog/{lang}/*.md`
- **Languages**: Separate folders for each language (en, es, zh-TW, etc.)
- **Parser**: Uses gray-matter for frontmatter parsing
- **Renderer**: React Markdown with syntax highlighting

### Blog Post Frontmatter
```yaml
---
title: "Post Title"
metatitle: "SEO Title"
date: 2025-01-27T10:30:00Z
modified_date: 2025-01-27T10:30:00Z
draft: false
author: "Author Name"
description: "Meta description for SEO"
weight: 1
tags:
  - Tag1
  - Tag2
image: images/blog/post-slug/thumbnail.png
canonicalURL: /blog/post-slug/
url: /blog/post-slug/
---
```

### Blog Features
- Multilingual support with language-specific folders
- Automatic pagination
- Tag-based filtering
- SEO optimization with structured data
- Responsive images with CDN support

### Automated Blog Translation
```bash
# Translate blog post to all languages
npm run blog:translate-all your-post-slug

# Deploy multilingual blog
npm run blog:deploy-multilingual your-post-slug
```

## SEO & Metadata

### SEO Implementation
- **Meta Management**: react-helmet-async for dynamic meta tags
- **Sitemap Generation**: Automated with language alternates
- **Robots.txt**: Generated with proper directives
- **Structured Data**: JSON-LD for blog posts and organization

### SEO Utilities
```typescript
// Standard SEO data generation
import { getSEOData, getCanonicalUrl } from './utils/seo';

const seoData = getSEOData(t, 'seo.homepage', {
  canonicalUrl: getCanonicalUrl(language, path),
  image: '/seasalt-ai-logo.png'
});
```

### Sitemap & Robots Generation
```bash
# Generate sitemap with all pages and languages
npm run generate-sitemap

# Generate robots.txt
npm run generate-robots

# Both together
npm run seo-update
```

## Deployment

### Netlify Configuration
- Build command: `npm run build`
- Publish directory: `dist`
- Automatic redirects for client-side routing
- Cache control headers configured in `netlify.toml`

### Prerendering
The build process includes automatic prerendering:
1. TypeScript compilation
2. Vite build
3. Puppeteer-based prerendering for SEO

### Environment Considerations
- No environment variables required for basic operation
- Translation files loaded dynamically from `/locales/`
- Sitemap and robots.txt copied to dist during build

## Important Project-Specific Notes

### Multi-Product Architecture
This website serves three distinct products:
- **SeaChat**: AI chatbot platform (`/seachat/*`)
- **SeaX**: Omnichannel communication (`/seax/*`)
- **SeaVoice**: AI voice agents (`/seavoice/*`)

Each product has its own router and page structure but shares common components and i18n system.

### Translation Workflow
The project uses a sophisticated translation management system:
1. **Bulk Translation Method**: Efficient for multiple updates
2. **Automated backups**: Created before each update
3. **Validation**: JSON integrity checks after updates
4. **Coverage Analysis**: Detect remaining hardcoded strings

See `scripts/how-to-update-json.md` for detailed translation workflow documentation.

### Git Integration with Translations
When using git with --no-pager flag (as per rules), always use:
```bash
git --no-pager log
git --no-pager diff
git --no-pager show
```

### Code Style Guidelines
- Use TypeScript for all new components
- Follow existing component patterns in respective product folders
- Maintain i18n keys in hierarchical structure
- Use Tailwind CSS classes for styling
- Keep SEO metadata consistent across pages

### Testing Considerations
Currently no test suite configured. When adding tests:
- Consider Vitest for unit testing (Vite-native)
- React Testing Library for component tests
- Playwright for E2E testing (prerendering already uses Puppeteer)

## Common Development Tasks

### Adding a New Page
1. Create component in appropriate `pages/` subfolder
2. Add route in `App.tsx` or product router
3. Add i18n keys for page content
4. Generate SEO metadata using `getSEOData`
5. Update sitemap generation if needed

### Adding a New Channel/Industry/Solution Page
1. Follow existing patterns in respective folders
2. Use consistent component structure
3. Include proper SEO metadata
4. Add translations for all supported languages

### Updating Navigation
1. Update i18n keys in translation files
2. Modify `Header.tsx` component
3. Ensure mobile responsiveness
4. Test language switching

### Working with Blog Posts
1. Create markdown file in `content/blog/{lang}/`
2. Include complete frontmatter
3. Use relative image paths
4. Run blog translation scripts for multilingual support
5. Regenerate sitemap after adding

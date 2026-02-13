# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Repository Overview

This is the Seasalt.ai official website built with **Astro 5.x** framework, featuring:
- **Multi-language support**: 20 languages with i18n routing
- **Static Site Generation (SSG)**: All pages pre-rendered for optimal performance
- **React Islands**: Interactive components using React with selective hydration
- **Modern stack**: TypeScript, Tailwind CSS, Framer Motion

## Development Commands

### Essential Commands
```bash
# Install dependencies
npm install

# Start development server (http://localhost:4321)
npm run dev

# Build production site to ./dist/
npm run build

# Preview production build locally
npm run preview

# TypeScript and Astro checks
npm run astro check

# Run any Astro CLI command
npm run astro -- [command]
```

### Development Workflow
```bash
# Quick development cycle
npm run dev          # Start dev server
# Make changes, then:
npm run build        # Test production build
npm run preview      # Test built site locally
```

## Architecture & Code Structure

### Framework Architecture
- **Framework**: Astro 5.x (SSG-focused)
- **React Integration**: Islands architecture for interactive components
- **Routing**: File-based routing with dynamic `[lang]` parameter
- **Styling**: Tailwind CSS with custom configurations
- **Build Output**: Static HTML files with minimal JavaScript

### Directory Structure
```
src/
├── components/           # Reusable UI components
│   ├── *.astro          # Static Astro components
│   ├── *.tsx            # Interactive React components  
│   └── versions/        # Product-specific header/footer variants
├── pages/               # File-based routing
│   ├── index.astro      # Root with language detection/redirect
│   └── [lang]/          # All localized pages
├── layouts/             # Page layout templates
├── i18n/               # Internationalization system
│   ├── helpers.ts       # Core i18n utilities and React hooks
│   └── locales/         # Translation files (20 languages)
├── content/            # Content collections (blog, etc.)
├── config/             # Site configuration
├── styles/             # Global CSS and utilities
├── types/              # TypeScript type definitions
└── utils/              # Utility functions
```

### Component Architecture
- **Astro Components**: Server-rendered, static content (`.astro`)
- **React Components**: Client-side interactivity with `client:*` directives (`.tsx`)
- **Layout System**: Consistent page structure across all routes
- **Product Variants**: Specialized headers/footers for SeaChat, SeaX, SeaVoice

## Multi-language (i18n) System

### Language Configuration
- **Supported Languages**: 20 languages (en, zh-TW, zh-CN, ja, ko, es, fr, de, ar, fa, fil, hi, id, ms, pl, pt, ru, ta, th, vi)
- **Default Language**: English (`en`)
- **Routing**: All languages use prefix (`/en/`, `/zh-tw/`, etc.)
- **Translation Files**: `src/i18n/locales/{lang}.json`

### Using Translations in Astro Components
```astro
---
import { getTranslationHelpers, type SupportedLanguage } from '../i18n/helpers';

const lang = Astro.params.lang as SupportedLanguage || 'en';
const { t } = await getTranslationHelpers(lang);
---

<h1>{t('page.title')}</h1>
<p>{t('page.description')}</p>
```

### Using Translations in React Components
```tsx
import { useTranslation, type SupportedLanguage } from '../i18n/helpers';

interface Props {
  lang: SupportedLanguage;
  translations?: any; // For SSR compatibility
}

const MyComponent = ({ lang, translations }: Props) => {
  const { t, isLoading } = translations ? 
    { t: null, isLoading: false } : 
    useTranslation(lang);
    
  // Create unified translation getter
  const getText = (key: string, fallback: string): string => {
    if (translations) {
      // SSR mode: get from props
      // ... navigation logic for nested keys
      return result || fallback;
    }
    // CSR mode: use hook
    return t?.(key) || fallback;
  };
  
  if (isLoading) return <div>Loading...</div>;
  
  return (
    <div>
      <h1>{getText('component.title', 'Default Title')}</h1>
    </div>
  );
};
```

### Page Route Generation
All pages under `src/pages/[lang]/` automatically generate 20 language versions:
```astro
---
// Generates routes: /en/pricing, /zh-tw/pricing, etc.
export async function getStaticPaths() {
  const languages = ['en', 'zh-tw', 'zh-cn', /* ... */];
  return languages.map((lang) => ({ params: { lang } }));
}
---
```

## SEO System

### Meta Tags & JSON-LD
The site uses comprehensive SEO with automatic generation of:
- **Meta tags**: title, description, Open Graph, Twitter Cards
- **JSON-LD schemas**: Organization, WebSite, Product, FAQPage, BreadcrumbList
- **Hreflang tags**: Multi-language SEO connections
- **Canonical URLs**: Proper URL canonicalization

### SEO Best Practices
- Use descriptive page titles and meta descriptions for each language
- Implement proper heading hierarchy (h1 → h2 → h3)
- Include structured data for products and services
- Ensure all images have alt text

## Performance Guidelines

### Astro Best Practices
- **Static First**: Use Astro components for static content
- **Selective Hydration**: Only use React for interactive elements
- **Client Directives**: Choose appropriate `client:*` directive
  - `client:load` - Hydrate immediately on page load
  - `client:idle` - Hydrate when browser is idle
  - `client:visible` - Hydrate when component enters viewport
  - `client:only="react"` - Skip server-side rendering

### Build Optimization
- **Static Generation**: All pages pre-built as HTML
- **Image Optimization**: Use Astro's built-in image optimization
- **Code Splitting**: Automatic for React components
- **Translation Caching**: i18n system caches loaded translations

## React Component Guidelines

### Component Structure
```tsx
interface ComponentProps {
  lang: SupportedLanguage;
  translations?: any; // For SSR support
  className?: string;
}

const Component = ({ lang, translations, className }: ComponentProps) => {
  // Always implement SSR/CSR translation pattern
  const { t: hookT, isLoading } = translations ? 
    { t: null, isLoading: false } : 
    useTranslation(lang);
    
  const getText = (key: string, fallback: string) => {
    // Implement unified translation getter
  };
  
  if (isLoading) return <LoadingSkeleton />;
  
  return (
    <div className={className}>
      {/* Use getText with meaningful fallbacks */}
      <h1>{getText('title', 'Default Title')}</h1>
    </div>
  );
};
```

### Animation Components
- Use **Framer Motion** for animations
- Implement **IntersectionObserver** for scroll-triggered animations
- Keep animations performant and accessible
- Provide reduced motion alternatives

## TypeScript Configuration

### Type Safety
- **Strict Mode**: Full TypeScript strict mode enabled
- **JSX**: React JSX transformation configured
- **Import Source**: React import source for JSX
- **Type Checking**: Run `npm run astro check` before commits

### Key Types
```typescript
import type { SupportedLanguage } from '../i18n/helpers';

// Component props should always include lang
interface PageProps {
  lang: SupportedLanguage;
}

// Use Astro's built-in types
import type { APIRoute } from 'astro';
```

## Content Management

### Adding New Pages
1. Create `.astro` file in `src/pages/[lang]/`
2. Implement `getStaticPaths()` for all languages
3. Add translation keys to all language JSON files
4. Use Layout component with proper SEO configuration
5. Test build with `npm run build`

### Translation Management
1. **Add translations to all language files** in `src/i18n/locales/`
2. **Use hierarchical keys**: `page.section.element`
3. **Include fallback values** in all React components
4. **Test missing translations** by checking browser console in dev mode

### Blog System
- **Status**: Currently disabled but can be re-enabled
- **Content**: Markdown files with frontmatter
- **Location**: `src/content/blog/[lang]/`
- **Re-activation**: Follow instructions in `docs/` if needed

## Troubleshooting

### Common Build Issues
- **Translation errors**: Check all language files have consistent keys
- **Type errors**: Run `npm run astro check` for detailed diagnostics
- **Missing translations**: Check browser console for missing key warnings

### Development Issues
- **SSR translation errors**: Ensure React components handle both SSR and CSR modes
- **Language routing**: Verify `astro.config.mjs` matches helper functions
- **Performance**: Check client directives on React components

### i18n Debugging
- Missing translations log to console in development
- Use browser dev tools to inspect generated routes
- Verify translation files are valid JSON format

## Production Deployment

### Build Process
```bash
npm run build    # Generates ~1440 static pages (72 pages × 20 languages)
npm run preview  # Test built site locally before deploy
```

### Build Output
- **Static HTML**: All pages pre-rendered
- **Assets**: Optimized CSS, JS, images in `dist/`
- **Performance**: Lighthouse scores 90+ expected
- **SEO Ready**: All meta tags and structured data included

---

## Key Architectural Principles

1. **Static-First Architecture**: Prioritize static generation for performance and SEO
2. **Progressive Enhancement**: Add interactivity only where needed with React islands
3. **i18n-First Design**: Every component and page designed for 20 languages from the start
4. **Type Safety**: Comprehensive TypeScript usage for maintainable code
5. **SEO Optimization**: Built-in SEO best practices with structured data
6. **Performance Focus**: Optimized build process and runtime performance

This architecture supports Seasalt.ai's global presence with excellent performance, SEO, and maintainability.
# Seasalt.ai SEO Implementation Guide

## Overview

This document outlines the comprehensive SEO implementation for the new Seasalt.ai website, based on industry best practices and inspired by advanced SEO patterns from successful multilingual websites.

The implementation focuses on:
- **Multilingual SEO** with 20 supported languages
- **Comprehensive metadata management** 
- **Advanced structured data** (JSON-LD)
- **Social media optimization**
- **Performance-oriented SEO**
- **Automated monitoring and validation**

## 🏗️ Architecture

### Core Components

```
src/
├── config/
│   └── seo.ts                    # Centralized SEO configuration
├── constants/
│   ├── languages.ts              # Language definitions
│   └── languages-advanced.ts     # Advanced language mapping
├── utils/
│   └── seo-enhanced.ts           # SEO utility functions
├── components/
│   └── SEO/
│       └── SEOHead.tsx           # Main SEO component
└── scripts/
    ├── seo-analyzer.js           # SEO analysis tool
    └── generate-sitemap.js       # Sitemap generator
```

## 🌐 Multilingual SEO

### Supported Languages (Phase 1: EN + zh-TW)

The system is built to support 20 languages but initially launches with:
- **English (en)** - Primary language, clean URLs
- **Traditional Chinese (zh-TW)** - With language prefix

### URL Structure

```
English:    https://seasalt.ai/
            https://seasalt.ai/about
            https://seasalt.ai/products

Chinese:    https://seasalt.ai/zh-TW/
            https://seasalt.ai/zh-TW/about
            https://seasalt.ai/zh-TW/products
```

### Hreflang Implementation

Each page includes comprehensive hreflang tags:

```html
<link rel="alternate" hreflang="x-default" href="https://seasalt.ai/" />
<link rel="alternate" hreflang="en" href="https://seasalt.ai/" />
<link rel="alternate" hreflang="zh-Hant" href="https://seasalt.ai/zh-TW/" />
```

**Key Features:**
- `x-default` points to English (language-neutral)
- Proper hreflang codes (`zh-Hant` for Traditional Chinese)
- Regional variants support (e.g., `en-US`, `en-GB`)

## 📄 Meta Tags & SEO Metadata

### Core Meta Tags

Every page includes optimized meta tags:

```tsx
// Example usage in a page component
import SEOHead from '../components/SEO/SEOHead';

<SEOHead
  pageType="home"
  language={router.locale}
  customSeo={{
    title: "Custom Page Title",
    description: "Custom description for this specific page"
  }}
/>
```

### Meta Tag Standards

- **Title**: 30-60 characters, unique per page/language
- **Description**: 120-160 characters, compelling and informative
- **Keywords**: 5-10 focused keywords per page
- **Robots**: Optimized per page type

### Open Graph & Twitter Cards

Complete social media optimization:

```html
<!-- Open Graph -->
<meta property="og:type" content="website" />
<meta property="og:title" content="Seasalt.ai - AI Conversation Intelligence" />
<meta property="og:description" content="..." />
<meta property="og:image" content="https://seasalt.ai/social-image.jpg" />

<!-- Twitter Cards -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="..." />
<meta name="twitter:image" content="..." />
```

**Social Image Specifications:**
- Size: 1200x630 pixels
- Format: JPEG (optimized for social sharing)
- Localized alt text per language

## 🏷️ Structured Data (JSON-LD)

### Organization Schema

Homepage includes comprehensive organization data:

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Seasalt.ai",
  "description": "Leading AI conversation intelligence platform...",
  "url": "https://seasalt.ai",
  "logo": "https://seasalt.ai/logo.png",
  "sameAs": [
    "https://linkedin.com/company/seasalt-ai",
    "https://twitter.com/seasalt_ai"
  ]
}
```

### Available Schema Types

- **Organization**: Company information
- **SoftwareApplication**: Product details
- **BreadcrumbList**: Navigation structure
- **FAQPage**: Frequently asked questions
- **Article**: Blog posts and content

### Usage Examples

```tsx
// Add breadcrumbs to a page
<SEOHead
  breadcrumbs={[
    { name: 'Home', url: 'https://seasalt.ai' },
    { name: 'Products', url: 'https://seasalt.ai/products' },
    { name: 'SeaVoice', url: 'https://seasalt.ai/products/seavoice' }
  ]}
/>

// Add FAQ schema
<SEOHead
  faqs={[
    {
      question: "What is Seasalt.ai?",
      answer: "Seasalt.ai is a leading AI conversation intelligence platform..."
    }
  ]}
/>
```

## 🗺️ Sitemap Generation

### Automated Sitemap Creation

The sitemap generator creates:

1. **Main sitemap**: All pages with hreflang references
2. **Language-specific sitemaps**: Per-language page collections
3. **Sitemap index**: When multiple sitemaps exist
4. **robots.txt**: With sitemap references and crawl guidelines

### Sitemap Features

- **Dynamic content discovery** from filesystem
- **Change frequency optimization** per page type
- **Priority assignment** based on page importance
- **Last modification dates** from file stats
- **Comprehensive hreflang** cross-referencing

### Usage

```bash
# Generate sitemaps
node scripts/generate-sitemap.js

# Custom configuration
node scripts/generate-sitemap.js --baseUrl=https://staging.seasalt.ai --languages=en,zh-TW
```

## 🔍 SEO Analysis & Monitoring

### SEO Analyzer Tool

Comprehensive analysis tool for ongoing SEO quality:

```bash
# Analyze local development
node scripts/seo-analyzer.js

# Analyze production with HTML report
node scripts/seo-analyzer.js --url=https://seasalt.ai --format=html --output=seo-report.html

# Focus on specific pages
node scripts/seo-analyzer.js --pages=/,/about,/products
```

### Analysis Features

- **Meta tag validation**: Title/description length, keyword density
- **Structured data verification**: JSON-LD validation
- **Image optimization**: Alt text coverage, lazy loading
- **Hreflang analysis**: Cross-referencing validation  
- **Content quality**: Heading structure, internal linking
- **Performance hints**: Core Web Vitals recommendations

### Quality Scoring

Pages are scored 0-100 based on:
- **Errors** (major issues): -15 points each
- **Warnings** (minor issues): -5 points each  
- **Best practices** (bonuses): +2-5 points each

## 🎯 Page-Specific SEO Configuration

### Configuration Structure

```typescript
// src/config/seo.ts
export const SEO_CONFIG = {
  pages: {
    home: {
      en: {
        title: "Seasalt.ai - AI Conversation Intelligence Platform",
        description: "Transform customer conversations with Seasalt.ai...",
        keywords: ["AI", "conversation intelligence", "natural language processing"]
      },
      'zh-TW': {
        title: "Seasalt.ai - AI 對話智慧平台",
        description: "透過 Seasalt.ai 的 AI 技術轉化客戶對話...",
        keywords: ["AI", "對話智慧", "自然語言處理"]
      }
    }
    // ... other pages
  }
}
```

### Page Types

- `home`: Homepage (priority: 1.0)
- `about`: About/company pages (priority: 0.9)  
- `products`: Product pages (priority: 0.9)
- `solutions`: Solution pages (priority: 0.8)
- `blog`: Blog listing (priority: 0.7)
- `contact`: Contact page (priority: 0.6)
- `careers`: Careers page (priority: 0.6)
- `privacy`: Legal pages (priority: 0.3)
- `terms`: Legal pages (priority: 0.3)

## 🚀 Performance SEO

### Core Web Vitals Optimization

- **Largest Contentful Paint (LCP)**: Optimized images, font loading
- **First Input Delay (FID)**: Minimal blocking JavaScript
- **Cumulative Layout Shift (CLS)**: Proper image dimensions, font loading

### Implementation Details

```tsx
// DNS prefetch for external resources
<link rel="dns-prefetch" href="//fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.googleapis.com" />

// Font preloading
<link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="" />

// Image optimization
<img 
  src="/image.jpg" 
  alt="Descriptive alt text"
  loading="lazy"
  width="800" 
  height="600"
/>
```

## 🔧 Development Workflow

### 1. Adding New Pages

```tsx
// 1. Add SEO configuration to src/config/seo.ts
pages: {
  newPage: {
    en: {
      title: "New Page Title",
      description: "Page description...",
      keywords: ["keyword1", "keyword2"]
    },
    'zh-TW': {
      title: "新頁面標題",
      description: "頁面描述...",
      keywords: ["關鍵詞1", "關鍵詞2"]
    }
  }
}

// 2. Use SEOHead in your page component
import SEOHead from '../components/SEO/SEOHead';

export default function NewPage() {
  return (
    <>
      <SEOHead pageType="newPage" language={router.locale} />
      {/* Page content */}
    </>
  );
}
```

### 2. Custom SEO per Page

```tsx
// Override default SEO for specific instances
<SEOHead
  pageType="products"
  customSeo={{
    title: "SeaVoice - AI Voice Analytics | Seasalt.ai",
    description: "Advanced voice analytics and conversation intelligence...",
    keywords: ["voice analytics", "conversation AI", "speech recognition"]
  }}
  socialImage="/images/products/seavoice-social.jpg"
/>
```

### 3. Adding Structured Data

```tsx
// Product page with structured data
const productSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "SeaVoice",
  "description": "AI-powered voice analytics platform",
  "applicationCategory": "BusinessApplication",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "USD",
    "price": "Contact for pricing"
  }
};

<SEOHead
  pageType="products"
  structuredData={[productSchema]}
/>
```

## 🧪 Testing & Validation

### Local Development Testing

```bash
# Start development server
npm run dev

# Run SEO analysis
node scripts/seo-analyzer.js --url=http://localhost:3000

# Generate and verify sitemap
node scripts/generate-sitemap.js --development
```

### Production Validation

```bash
# Full site analysis
node scripts/seo-analyzer.js --url=https://seasalt.ai --format=html --output=reports/seo-audit.html

# Check specific language
node scripts/seo-analyzer.js --url=https://seasalt.ai --lang=zh-TW

# Validate sitemap
curl https://seasalt.ai/sitemap.xml
curl https://seasalt.ai/robots.txt
```

### External Validation Tools

- **Google Search Console**: Monitor search performance
- **Google Rich Results Test**: Validate structured data
- **Facebook Sharing Debugger**: Test Open Graph tags
- **Twitter Card Validator**: Verify Twitter Cards
- **Lighthouse**: Performance and SEO audit

## 📊 Monitoring & Analytics

### Key Metrics to Track

1. **Organic Search Traffic**: By language and page
2. **Search Rankings**: For target keywords per language  
3. **Rich Results**: Structured data appearance
4. **Core Web Vitals**: Performance metrics
5. **Social Sharing**: Open Graph engagement

### Recommended Tools

- **Google Search Console**: Search performance, indexing
- **Google Analytics 4**: Traffic analysis, conversions
- **SEMrush/Ahrefs**: Keyword ranking, competitor analysis
- **PageSpeed Insights**: Performance monitoring

## 🚨 Troubleshooting

### Common Issues

**1. Hreflang Errors**
```bash
# Check hreflang implementation
node scripts/seo-analyzer.js --pages=/ --lang=all | grep hreflang
```

**2. Missing Structured Data**
```bash
# Validate structured data
curl -s https://seasalt.ai | grep -o '"@type":"[^"]*"'
```

**3. Poor Page Scores**
```bash
# Detailed page analysis
node scripts/seo-analyzer.js --url=https://seasalt.ai/specific-page --format=html
```

**4. Sitemap Issues**
```bash
# Regenerate sitemap
node scripts/generate-sitemap.js --baseUrl=https://seasalt.ai

# Validate XML
xmllint --noout public/sitemap.xml
```

### Performance Debugging

```tsx
// Add SEO validation hook for development
import { useSEOValidation } from '../components/SEO/SEOHead';

function MyPage() {
  const seoData = { title: "...", description: "..." };
  const validation = useSEOValidation(seoData);
  
  // Log validation results in development
  if (process.env.NODE_ENV === 'development') {
    console.log('SEO Validation:', validation);
  }
  
  return (/* page content */);
}
```

## 🔄 Continuous Improvement

### Monthly SEO Review

1. **Run comprehensive analysis**: `node scripts/seo-analyzer.js --url=https://seasalt.ai --format=html`
2. **Review Google Search Console** for new issues
3. **Update content** based on performance data
4. **Expand language support** as needed
5. **Monitor Core Web Vitals** and optimize

### Future Enhancements

- **Image sitemap** for rich media content
- **Video structured data** for product demos
- **Local business schema** for office locations
- **FAQ expansion** based on user queries
- **Additional language markets** beyond Phase 1

## 📚 Resources & References

### Documentation
- [Google Search Central SEO Guide](https://developers.google.com/search)
- [Schema.org Documentation](https://schema.org/docs/documents.html)
- [Open Graph Protocol](https://ogp.me/)
- [Twitter Cards Documentation](https://developer.twitter.com/en/docs/twitter-for-websites/cards)

### Testing Tools
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)
- [Google PageSpeed Insights](https://pagespeed.web.dev/)

---

This SEO implementation provides a robust foundation for Seasalt.ai's global web presence with comprehensive multilingual support, advanced structured data, and automated monitoring capabilities. The system is designed to scale as the business grows and enters new markets.

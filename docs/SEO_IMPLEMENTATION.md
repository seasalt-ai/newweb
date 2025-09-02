# Seasalt.ai SEO Implementation Guide

## Overview

This document outlines the comprehensive SEO implementation for the new Seasalt.ai website, combining a translation-first approach with advanced multilingual SEO patterns for global reach.

The implementation focuses on:
- **Translation-First SEO** using existing i18n keys as the primary source
- **Multilingual SEO** with 20 supported languages (starting with EN + zh-TW)
- **Comprehensive metadata management** with fallback systems
- **Advanced structured data** (JSON-LD) for rich results
- **Social media optimization** and performance SEO
- **Automated monitoring and validation** tools

## 🏗️ Architecture

### Core Components Structure

```
src/
├── config/
│   └── seo.ts                    # Centralized SEO configuration
├── constants/
│   ├── languages.ts              # Language definitions
│   └── languages-advanced.ts     # Advanced language mapping
├── utils/
│   ├── seo.ts                   # Core SEO utility functions
│   └── seo-enhanced.ts          # Enhanced SEO utilities
├── components/
│   ├── SEOHelmet.tsx            # Basic SEO component (legacy)
│   └── SEO/
│       └── SEOHead.tsx          # Enhanced SEO component
└── scripts/
    ├── seo-analyzer.js          # SEO analysis tool
    └── generate-sitemap.js      # Sitemap generator
```

### Core Utility: `src/utils/seo.ts`

The SEO utility provides helper functions to generate standardized SEO data from translation keys:

- `getSEOData()` - Main function for generating SEO data from translation keys
- `getCanonicalUrl()` - Generates canonical URLs
- `getIndustrySEOData()` - Specialized function for industry pages
- `getChannelSEOData()` - Specialized function for channel pages  
- `getComparisonSEOData()` - Specialized function for competitor comparison pages

### Enhanced Components: `components/SEO/SEOHead.tsx`

The enhanced SEO component provides:
- Comprehensive metadata management
- Structured data injection
- Social media optimization
- Performance-oriented preloads
- Multi-language hreflang support

## 🌐 Multilingual SEO Architecture

### Supported Languages

The system supports 20 languages but initially launches with:
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

## 🔤 Translation-First SEO Workflow

### Key Features

1. **Translation-First**: Uses existing translation keys as the primary source
2. **Fallback System**: Falls back from dedicated SEO keys to page title/description keys
3. **Automatic Suffixes**: Adds standardized suffixes (e.g., "- Seasalt.ai")
4. **Canonical URL Generation**: Automatically generates proper canonical URLs
5. **Keywords Support**: Optional keywords with automatic splitting for tags

### Translation Key Structure

#### Priority Order (Highest to Lowest)

1. **Dedicated SEO Keys**: `{pageKey}.seo.title`, `{pageKey}.seo.description`, `{pageKey}.seo.keywords`
2. **Page Title/Description**: `{pageKey}.title`, `{pageKey}.description` or `{pageKey}.subtitle`
3. **Fallback**: Generic defaults from centralized configuration

#### Example Translation Structure

```json
{
  "pricing": {
    "title": "Pricing Plans",
    "description": "Choose the perfect plan for your business",
    "seo": {
      "title": "Pricing Plans - Seasalt.ai",
      "description": "Transparent pricing for AI-powered customer communication. Start free, scale as you grow.",
      "keywords": "pricing, plans, cost, AI customer service, omnichannel"
    }
  }
}
```

### Centralized SEO Configuration

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

## 💻 Implementation Examples

### Basic Page Implementation

```tsx
import { getSEOData, getCanonicalUrl } from '../utils/seo';
import SEOHelmet from '../components/SEOHelmet';

const MyPage = () => {
  const { t, i18n } = useTranslation();
  
  // Generate SEO data from translation keys
  const seoData = getSEOData(t, 'myPage', {
    canonicalUrl: getCanonicalUrl(i18n.language, '/my-page')
  });
  
  return (
    <div>
      <SEOHelmet
        title={seoData.title}
        description={seoData.description}
        favicon="/seasalt-ai-favicon.ico"
        canonicalUrl={seoData.canonicalUrl}
        availableLanguages={SUPPORTED_LANGUAGES}
        {...(seoData.keywords && { tags: seoData.keywords.split(', ') })}
      />
      {/* Page content */}
    </div>
  );
};
```

### Enhanced Page Implementation

```tsx
import SEOHead from '../components/SEO/SEOHead';

const EnhancedPage = () => {
  const router = useRouter();
  
  return (
    <div>
      <SEOHead
        pageType="products"
        language={router.locale}
        customSeo={{
          title: "SeaVoice - AI Voice Analytics | Seasalt.ai",
          description: "Advanced voice analytics and conversation intelligence...",
          keywords: ["voice analytics", "conversation AI", "speech recognition"]
        }}
        socialImage="/images/products/seavoice-social.jpg"
        breadcrumbs={[
          { name: 'Home', url: 'https://seasalt.ai' },
          { name: 'Products', url: 'https://seasalt.ai/products' },
          { name: 'SeaVoice', url: 'https://seasalt.ai/products/seavoice' }
        ]}
      />
      {/* Page content */}
    </div>
  );
};
```

### Industry Page Implementation

```tsx
import { getIndustrySEOData } from '../utils/seo';

const IndustryPage = ({ industrySlug }) => {
  const { t, i18n } = useTranslation();
  
  // Use specialized industry SEO function
  const seoData = getIndustrySEOData(t, industrySlug, i18n.language);
  
  return (
    <div>
      <SEOHelmet
        title={seoData.title}
        description={seoData.description}
        canonicalUrl={seoData.canonicalUrl}
        {...(seoData.keywords && { tags: seoData.keywords.split(', ') })}
      />
      {/* Industry page content */}
    </div>
  );
};
```

### Custom SEO Options

```tsx
const seoData = getSEOData(t, 'channels.whatsapp', {
  titleSuffix: ' Integration - Seasalt.ai',
  descriptionPrefix: 'Connect your WhatsApp Business with ',
  descriptionSuffix: ' for automated customer engagement.',
  canonicalUrl: getCanonicalUrl(i18n.language, '/channels/whatsapp')
});
```

## 📄 Meta Tags & SEO Metadata

### Core Meta Tags Standards

Every page includes optimized meta tags:

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
// Add FAQ schema
<SEOHead
  faqs={[
    {
      question: "What is Seasalt.ai?",
      answer: "Seasalt.ai is a leading AI conversation intelligence platform..."
    }
  ]}
/>

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

## 📑 Page Type Guidelines

### Page Type Configuration

- `home`: Homepage (priority: 1.0)
- `about`: About/company pages (priority: 0.9)  
- `products`: Product pages (priority: 0.9)
- `solutions`: Solution pages (priority: 0.8)
- `blog`: Blog listing (priority: 0.7)
- `contact`: Contact page (priority: 0.6)
- `careers`: Careers page (priority: 0.6)
- `privacy`: Legal pages (priority: 0.3)
- `terms`: Legal pages (priority: 0.3)

### Specific Guidelines

#### 1. Homepage
- Use global `seo.homepage` keys
- Include brand name and primary value proposition
- Keywords should cover main product categories

#### 2. Product Pages (SeaChat, SeaVoice, SeaX)
- Use `seo.{product}.homepage` structure
- Focus on product-specific benefits
- Include relevant feature keywords

#### 3. Feature/Solution Pages
- Use `seo.{product}.{feature}` if available
- Fall back to page title/description
- Emphasize specific use case benefits

#### 4. Industry Pages
- Use `getIndustrySEOData()` helper
- Format: "{Industry} Solutions - Seasalt.ai"
- Include industry-specific keywords

#### 5. Channel Pages
- Use `getChannelSEOData()` helper  
- Format: "{Channel} Integration - Seasalt.ai"
- Focus on integration benefits

#### 6. Comparison Pages
- Use `getComparisonSEOData()` helper
- Format: "{Competitor} Alternative - Seasalt.ai"
- Highlight competitive advantages

## ✨ Best Practices

### SEO Titles
- Keep under 60 characters
- Include primary keyword early
- End with "- Seasalt.ai" for brand consistency
- Be descriptive and compelling

### SEO Descriptions  
- Keep 150-160 characters
- Include primary and secondary keywords naturally
- Write compelling copy that encourages clicks
- Include clear value proposition

### Keywords
- Use 3-7 relevant keywords maximum
- Separate with commas and spaces
- Include primary keyword variants
- Consider search intent and competition

### Translation Considerations
- Adapt keywords for each language/market
- Consider cultural differences in search behavior
- Maintain consistent brand messaging
- Test search volume in target markets

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

### Adding SEO to New Pages

#### Step 1: Add Translation Keys

Add to `public/locales/en.json` and `public/locales/zh-TW.json`:

```json
{
  "newPage": {
    "title": "Page Title",
    "description": "Page description for UI",
    "seo": {
      "title": "SEO Title - Seasalt.ai", 
      "description": "SEO-optimized description with keywords",
      "keywords": "keyword1, keyword2, keyword3"
    }
  }
}
```

#### Step 2: Add SEO Configuration

```tsx
// Add to src/config/seo.ts
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
```

#### Step 3: Import and Use SEO Components

```tsx
import { getSEOData, getCanonicalUrl } from '../utils/seo';
import SEOHead from '../components/SEO/SEOHead';

const NewPage = () => {
  const { t, i18n } = useTranslation();
  const router = useRouter();
  
  // Option 1: Use translation-first approach
  const seoData = getSEOData(t, 'newPage', {
    canonicalUrl: getCanonicalUrl(i18n.language, '/new-page')
  });
  
  return (
    <div>
      <SEOHelmet
        title={seoData.title}
        description={seoData.description}
        favicon="/seasalt-ai-favicon.ico"
        canonicalUrl={seoData.canonicalUrl}
        availableLanguages={SUPPORTED_LANGUAGES}
        {...(seoData.keywords && { tags: seoData.keywords.split(', ') })}
      />
      
      {/* OR Option 2: Use enhanced component */}
      <SEOHead pageType="newPage" language={router.locale} />
      
      {/* Page content */}
    </div>
  );
};
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

## 🧪 Testing & Validation

### Required Validation Checks
- [ ] Title under 60 characters
- [ ] Description 150-160 characters  
- [ ] Keywords relevant and not keyword-stuffed
- [ ] Canonical URL properly formed
- [ ] All translation keys exist in both languages
- [ ] SEO component properly implemented
- [ ] Page renders without SEO errors
- [ ] Hreflang tags correctly cross-reference
- [ ] Structured data validates

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

## 🔄 Migration Guide

### From Hardcoded SEO
1. Identify existing hardcoded title/description
2. Move to translation files under appropriate key structure
3. Replace hardcoded implementation with `getSEOData()` call
4. Test both languages

### From Scattered SEO Keys
1. Consolidate under standard key structure
2. Update page implementations to use utility functions
3. Remove old scattered keys
4. Verify all pages still have proper SEO

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

## 🔄 Maintenance

### Regular Tasks
- Review and update keywords quarterly
- Monitor search performance in Google Search Console  
- Update translations when page content changes
- Ensure new pages follow standardized approach
- Test SEO implementation after major i18n changes

### Monthly SEO Review

1. **Run comprehensive analysis**: `node scripts/seo-analyzer.js --url=https://seasalt.ai --format=html`
2. **Review Google Search Console** for new issues
3. **Update content** based on performance data
4. **Expand language support** as needed
5. **Monitor Core Web Vitals** and optimize

### Performance Monitoring
- Track organic search traffic by page
- Monitor keyword rankings
- Analyze click-through rates from search results
- Review Core Web Vitals impact on SEO

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

This unified SEO implementation provides a robust foundation for Seasalt.ai's global web presence, combining translation-first methodology with advanced multilingual support, comprehensive structured data, and automated monitoring capabilities. The system is designed to scale as the business grows and enters new markets.

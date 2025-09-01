# SEO Implementation Guide

This document describes the standardized SEO approach for the Seasalt.ai website.

## Overview

We use a unified SEO system that leverages existing translation keys to generate SEO metadata for all pages. This approach ensures consistency, maintainability, and proper internationalization.

## Architecture

### Core Utility: `src/utils/seo.ts`

The SEO utility provides helper functions to generate standardized SEO data:

- `getSEOData()` - Main function for generating SEO data from translation keys
- `getCanonicalUrl()` - Generates canonical URLs
- `getIndustrySEOData()` - Specialized function for industry pages
- `getChannelSEOData()` - Specialized function for channel pages  
- `getComparisonSEOData()` - Specialized function for competitor comparison pages

### Key Features

1. **Translation-First**: Uses existing translation keys as the primary source
2. **Fallback System**: Falls back from dedicated SEO keys to page title/description keys
3. **Automatic Suffixes**: Adds standardized suffixes (e.g., "- Seasalt.ai")
4. **Canonical URL Generation**: Automatically generates proper canonical URLs
5. **Keywords Support**: Optional keywords with automatic splitting for tags

## Translation Key Structure

### Priority Order (Highest to Lowest)

1. **Dedicated SEO Keys**: `{pageKey}.seo.title`, `{pageKey}.seo.description`, `{pageKey}.seo.keywords`
2. **Page Title/Description**: `{pageKey}.title`, `{pageKey}.description` or `{pageKey}.subtitle`
3. **Fallback**: Generic defaults

### Example Translation Structure

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

## Implementation Examples

### Basic Page Implementation

```tsx
import { getSEOData, getCanonicalUrl } from '../utils/seo';
import SEOHelmet from '../components/SEOHelmet';

const MyPage = () => {
  const { t, i18n } = useTranslation();
  
  // Generate SEO data
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
        {...(seoData.keywords && { tags: seoData.keywords.split(', ') })}
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

## Page Type Guidelines

### 1. Homepage
- Use global `seo.homepage` keys
- Include brand name and primary value proposition
- Keywords should cover main product categories

### 2. Product Pages (SeaChat, SeaVoice, SeaX)
- Use `seo.{product}.homepage` structure
- Focus on product-specific benefits
- Include relevant feature keywords

### 3. Feature/Solution Pages
- Use `seo.{product}.{feature}` if available
- Fall back to page title/description
- Emphasize specific use case benefits

### 4. Industry Pages
- Use `getIndustrySEOData()` helper
- Format: "{Industry} Solutions - Seasalt.ai"
- Include industry-specific keywords

### 5. Channel Pages
- Use `getChannelSEOData()` helper  
- Format: "{Channel} Integration - Seasalt.ai"
- Focus on integration benefits

### 6. Comparison Pages
- Use `getComparisonSEOData()` helper
- Format: "{Competitor} Alternative - Seasalt.ai"
- Highlight competitive advantages

## Adding SEO to New Pages

### Step 1: Add Translation Keys

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

### Step 2: Import and Use SEO Utility

```tsx
import { getSEOData, getCanonicalUrl } from '../utils/seo';
import SEOHelmet from '../components/SEOHelmet';

const NewPage = () => {
  const { t, i18n } = useTranslation();
  
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
      {/* Page content */}
    </div>
  );
};
```

## Best Practices

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

## Validation

### Required Checks
- [ ] Title under 60 characters
- [ ] Description 150-160 characters  
- [ ] Keywords relevant and not keyword-stuffed
- [ ] Canonical URL properly formed
- [ ] All translation keys exist in both languages
- [ ] SEOHelmet properly implemented
- [ ] Page renders without SEO errors

### Tools for Testing
- Google Search Console
- SEO browser extensions
- React Developer Tools
- Translation file validators

## Migration Guide

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

## Maintenance

### Regular Tasks
- Review and update keywords quarterly
- Monitor search performance in Google Search Console  
- Update translations when page content changes
- Ensure new pages follow standardized approach
- Test SEO implementation after major i18n changes

### Performance Monitoring
- Track organic search traffic by page
- Monitor keyword rankings
- Analyze click-through rates from search results
- Review Core Web Vitals impact on SEO

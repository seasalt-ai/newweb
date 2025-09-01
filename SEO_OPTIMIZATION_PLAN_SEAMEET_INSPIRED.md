# SeaMeet-Inspired SEO Optimization Plan for new-seasalt-ai-website

## Executive Summary

Based on the comprehensive analysis of SeaMeet's highly optimized SEO implementation, this plan adapts their proven strategies for the new Seasalt.ai website. SeaMeet demonstrates best-in-class SEO with 90+ scores, comprehensive internationalization (20 languages), and sophisticated structured data implementation.

## 🔍 SeaMeet SEO Analysis - Key Learnings

### ✅ Proven SeaMeet SEO Strengths
- **Comprehensive Layout Component**: Single component handles all SEO concerns with 20+ language support
- **Advanced Structured Data**: Organization, SoftwareApplication, Article, WebPage, and Breadcrumb schemas
- **Sophisticated Internationalization**: Full locale mapping with regional variants (e.g., en_US, en_GB, en_CA)
- **Automated Sitemap Generation**: 1,060+ URLs across 20 languages with proper hreflang
- **SEO Analyzer Tool**: Automated testing and scoring system
- **Centralized Configuration**: Single source of truth for all SEO metadata

### 🎯 Critical Success Factors from SeaMeet

1. **Centralized SEO Management**: All SEO logic in one place
2. **Comprehensive Language Support**: Not just translation, but proper locale handling
3. **Automated Quality Assurance**: Built-in SEO testing and validation
4. **Performance-Optimized**: Memoized components, external constants
5. **Future-Proof Architecture**: Scalable to new languages and pages

---

## 📋 Implementation Plan - SeaMeet Model Adaptation

### Phase 1: Core Infrastructure Setup (Week 1)

#### 🏗️ 1.1 Create Advanced SEO Configuration System

```typescript
// src/config/seo.ts - Based on SeaMeet's approach
export interface SEOConfig {
  title: string;
  description: string;
  keywords: string;
  image?: string;
  canonical?: string;
  noindex?: boolean;
  nofollow?: boolean;
  articleData?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    section?: string;
    tags?: string[];
  };
  structuredData?: object;
}

export const BASE_SEO: SEOConfig = {
  title: 'Seasalt.ai | Omni-Channel Contact Center for Small Businesses',
  description: 'Stop juggling apps. Unify every customer call, WhatsApp, and chat in one simple inbox. The all-in-one contact center built for small businesses.',
  keywords: 'contact center, omnichannel, AI customer service, small business, customer support',
  image: '/seasalt-ai-og-default.png'
};

export const PAGE_SEO: Record<string, SEOConfig> = {
  home: {
    title: 'Seasalt.ai | Omni-Channel Contact Center for Small Businesses',
    description: 'Stop juggling apps. Unify every customer call, WhatsApp, and chat in one simple inbox. The all-in-one contact center built for small businesses.',
    keywords: 'contact center, omnichannel, AI customer service, small business, customer support, SeaChat, SeaX, SeaVoice',
  },
  pricing: {
    title: 'Pricing | Transparent, Scalable Plans - Seasalt.ai',
    description: 'Simple, transparent pricing for businesses of all sizes. Start free with SeaChat, scale with SeaX omnichannel, or go enterprise. No hidden fees.',
    keywords: 'pricing, contact center pricing, omnichannel pricing, SeaChat pricing, SeaX pricing, business plans',
  },
  seachat: {
    title: 'SeaChat | Free AI Chatbot Platform - Seasalt.ai',
    description: 'Build powerful AI chatbots for free. SeaChat offers unlimited conversations, 4 human agents, and enterprise AI models. Start building today.',
    keywords: 'AI chatbot, free chatbot platform, customer service chatbot, SeaChat, conversational AI',
  },
  seax: {
    title: 'SeaX | Omni-Channel Communication Platform - Seasalt.ai',
    description: 'Unify WhatsApp, SMS, voice calls and more in one platform. SeaX provides omnichannel communication for scaling businesses.',
    keywords: 'omnichannel platform, WhatsApp business, SMS marketing, voice communication, SeaX',
  },
  seavoice: {
    title: 'SeaVoice | AI-Powered Voice Communication - Seasalt.ai',
    description: 'Transform your voice communications with AI. SeaVoice offers intelligent call routing, voice analytics, and automated responses.',
    keywords: 'AI voice, call center software, voice analytics, SeaVoice, intelligent call routing',
  }
  // ... additional pages
};
```

#### 🌍 1.2 Create Comprehensive Language Mapping (SeaMeet Style)

```typescript
// src/constants/languages-advanced.ts - Adapted from SeaMeet's approach
export const LANGUAGE_REGION_MAP: Record<string, {
  language: string;
  primaryLocale: string;
  alternateLocales: string[];
  primaryRegion: string;
  primaryPlacename: string;
  supportedRegions: Array<{ region: string; placename: string; locale: string }>;
}> = {
  'en': {
    language: 'English',
    primaryLocale: 'en_US',
    alternateLocales: ['en_GB', 'en_CA', 'en_AU', 'en_SG'],
    primaryRegion: 'US',
    primaryPlacename: 'United States',
    supportedRegions: [
      { region: 'US', placename: 'United States', locale: 'en_US' },
      { region: 'GB', placename: 'United Kingdom', locale: 'en_GB' },
      { region: 'CA', placename: 'Canada', locale: 'en_CA' },
      { region: 'AU', placename: 'Australia', locale: 'en_AU' },
      { region: 'SG', placename: 'Singapore', locale: 'en_SG' }
    ]
  },
  'es': {
    language: 'Spanish',
    primaryLocale: 'es_ES',
    alternateLocales: ['es_MX', 'es_AR', 'es_CO', 'es_CL'],
    primaryRegion: 'ES',
    primaryPlacename: 'Spain',
    supportedRegions: [
      { region: 'ES', placename: 'Spain', locale: 'es_ES' },
      { region: 'MX', placename: 'Mexico', locale: 'es_MX' },
      { region: 'AR', placename: 'Argentina', locale: 'es_AR' },
      { region: 'CO', placename: 'Colombia', locale: 'es_CO' }
    ]
  },
  // ... all 20 languages with regional variants
};
```

#### 🎯 1.3 Advanced Layout Component (Based on SeaMeet's Layout.tsx)

```typescript
// src/components/AdvancedLayout.tsx - Adapted from SeaMeet
import React, { useMemo } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface AdvancedLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  canonical?: string;
  robots?: string;
  articleData?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    section?: string;
    tags?: string[];
  };
  structuredData?: object;
}

export default function AdvancedLayout({
  children,
  title,
  description,
  keywords,
  image = '/seasalt-ai-og-default.png',
  canonical,
  robots,
  articleData,
  structuredData
}: AdvancedLayoutProps) {
  const location = useLocation();
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const currentUrl = `https://seasalt.ai${location.pathname}`;
  const canonicalUrl = canonical || currentUrl;

  // Memoized SEO configuration
  const seoConfig = useMemo(() => {
    const pagePath = location.pathname.replace(/^\/[a-z]{2}(-[A-Z]{2})?\//, '').replace(/^\//, '');
    return getSEOConfig(pagePath);
  }, [location.pathname]);

  // Memoized hreflang generation
  const hreflangUrls = useMemo(() => {
    const pathWithoutLang = location.pathname.replace(/^\/[a-z]{2}(-[A-Z]{2})?/, '') || '/';
    const hreflangUrls: Array<{ lang: string; url: string }> = [];
    
    SUPPORTED_LANGUAGES.forEach(langCode => {
      const langPath = pathWithoutLang === '/' ? `/${langCode}` : `/${langCode}${pathWithoutLang}`;
      hreflangUrls.push({
        lang: langCode,
        url: `https://seasalt.ai${langPath}`
      });
    });
    
    return hreflangUrls;
  }, [location.pathname]);

  // Memoized structured data generation
  const getStructuredData = useMemo(() => {
    const localizedTitle = getLocalizedTitle(currentLanguage, title || seoConfig.title);
    const localizedDescription = getLocalizedDescription(currentLanguage, description || seoConfig.description);

    // Organization schema
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://seasalt.ai/#organization",
      "name": "Seasalt.ai",
      "alternateName": "Seasalt AI",
      "description": localizedDescription,
      "url": "https://seasalt.ai",
      "logo": {
        "@type": "ImageObject",
        "url": "https://seasalt.ai/seasalt-ai-logo.png",
        "width": 1200,
        "height": 630
      },
      "foundingDate": "2018",
      "founder": {
        "@type": "Person",
        "name": "Seasalt.ai Founding Team"
      },
      "sameAs": [
        "https://www.linkedin.com/company/seasalt-ai",
        "https://twitter.com/seasalt_ai",
        "https://github.com/seasalt-ai",
        "https://www.crunchbase.com/organization/seasalt-ai"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "info@seasalt.ai",
        "contactType": "customer service",
        "availableLanguage": SUPPORTED_LANGUAGES.map(lang => 
          LANGUAGE_REGION_MAP[lang]?.language || lang
        )
      }
    };

    // WebPage schema
    const webPageSchema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": currentUrl,
      "name": localizedTitle,
      "description": localizedDescription,
      "url": currentUrl,
      "inLanguage": LANGUAGE_REGION_MAP[currentLanguage]?.primaryLocale.replace('_', '-') || currentLanguage,
      "isPartOf": {
        "@type": "WebSite",
        "@id": "https://seasalt.ai/#website",
        "name": "Seasalt.ai",
        "url": "https://seasalt.ai"
      },
      "publisher": {
        "@id": "https://seasalt.ai/#organization"
      }
    };

    // Product schema for main pages
    if (location.pathname.includes('/seachat') || location.pathname.includes('/seax') || location.pathname.includes('/seavoice')) {
      const productName = location.pathname.includes('/seachat') ? 'SeaChat' :
                         location.pathname.includes('/seax') ? 'SeaX' : 'SeaVoice';
      
      const productSchema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": productName,
        "description": localizedDescription,
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web, iOS, Android",
        "url": currentUrl,
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
        },
        "publisher": {
          "@id": "https://seasalt.ai/#organization"
        }
      };
      
      return [webPageSchema, productSchema, organizationSchema];
    }

    // Default: WebPage + Organization
    return [webPageSchema, organizationSchema];
  }, [currentLanguage, location.pathname, title, description, seoConfig]);

  const languageInfo = LANGUAGE_REGION_MAP[currentLanguage] || LANGUAGE_REGION_MAP['en'];

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white">
        <Helmet>
          {/* Basic Meta Tags */}
          <title>{getLocalizedTitle(currentLanguage, title || seoConfig.title)}</title>
          <meta name="description" content={getLocalizedDescription(currentLanguage, description || seoConfig.description)} />
          <meta name="keywords" content={keywords || seoConfig.keywords} />
          <meta name="author" content="Seasalt.ai Team" />
          <meta name="robots" content={robots || "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"} />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="canonical" href={canonicalUrl} />
          
          {/* Language and Location */}
          <meta name="language" content={languageInfo.language} />
          <meta name="geo.region" content={languageInfo.supportedRegions.map(r => r.region).join(',')} />
          <meta name="geo.placename" content={languageInfo.supportedRegions.map(r => r.placename).join(',')} />
          
          {/* Hreflang tags */}
          {hreflangUrls.map(({ lang, url }) => (
            <link key={lang} rel="alternate" hrefLang={lang} href={url} />
          ))}
          
          {/* Additional hreflang for current language locales */}
          {[languageInfo.primaryLocale, ...languageInfo.alternateLocales].map((locale) => (
            <link key={locale} rel="alternate" hrefLang={locale.replace('_', '-')} href={currentUrl} />
          ))}
          
          {/* Open Graph */}
          <meta property="og:type" content={articleData ? "article" : "website"} />
          <meta property="og:title" content={getLocalizedTitle(currentLanguage, title || seoConfig.title)} />
          <meta property="og:description" content={getLocalizedDescription(currentLanguage, description || seoConfig.description)} />
          <meta property="og:image" content={`https://seasalt.ai${image}`} />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:url" content={currentUrl} />
          <meta property="og:site_name" content="Seasalt.ai" />
          <meta property="og:locale" content={languageInfo.primaryLocale} />
          
          {/* Additional OG locales */}
          {languageInfo.alternateLocales.map((locale) => (
            <meta key={locale} property="og:locale:alternate" content={locale} />
          ))}
          
          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@seasalt_ai" />
          <meta name="twitter:creator" content="@seasalt_ai" />
          <meta name="twitter:title" content={getLocalizedTitle(currentLanguage, title || seoConfig.title)} />
          <meta name="twitter:description" content={getLocalizedDescription(currentLanguage, description || seoConfig.description)} />
          <meta name="twitter:image" content={`https://seasalt.ai${image}`} />
          
          {/* Additional SEO Meta Tags */}
          <meta name="theme-color" content="#2563eb" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-title" content="Seasalt.ai" />
          
          {/* Performance DNS Prefetch */}
          <link rel="dns-prefetch" href="//fonts.googleapis.com" />
          <link rel="dns-prefetch" href="//www.googletagmanager.com" />
          
          {/* Favicons */}
          <link rel="icon" type="image/x-icon" href="/seasalt-ai-favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="manifest" href="/site.webmanifest" />
          
          {/* Structured Data */}
          {getStructuredData.map((schema, index) => (
            <script key={index} type="application/ld+json">
              {JSON.stringify(schema)}
            </script>
          ))}
          
          {/* Breadcrumb Schema for sub-pages */}
          {location.pathname !== '/' && location.pathname !== `/${currentLanguage}` && (
            <script type="application/ld+json">
              {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://seasalt.ai"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": (title || seoConfig.title).split('|')[0].trim(),
                    "item": currentUrl
                  }
                ]
              })}
            </script>
          )}
        </Helmet>
        
        <Header />
        <main className="flex-1" role="main">
          {children}
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
}
```

### Phase 2: Advanced Sitemap Generation (Week 2)

#### 🗺️ 2.1 SeaMeet-Style Sitemap Generator

```javascript
// scripts/generate-advanced-sitemap.js - Based on SeaMeet's generator
#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE_URL = 'https://seasalt.ai';
const OUTPUT_DIR = './public';

// All 20 supported languages
const SUPPORTED_LANGUAGES = [
  'ar', 'de', 'en', 'es', 'fa', 'fil', 'fr', 'hi', 'id', 
  'ja', 'ko', 'ms', 'pl', 'pt', 'ru', 'ta', 'th', 'vi', 'zh-CN', 'zh-TW'
];

const DEFAULT_LANGUAGE = 'en';

// Base pages with SEO priority
const basePages = [
  {
    url: '/',
    changefreq: 'daily',
    priority: '1.0',
    lastmod: getCurrentDate()
  },
  {
    url: '/pricing',
    changefreq: 'weekly',
    priority: '0.9',
    lastmod: getCurrentDate()
  },
  {
    url: '/seachat',
    changefreq: 'weekly',
    priority: '0.9',
    lastmod: getCurrentDate()
  },
  {
    url: '/seax',
    changefreq: 'weekly',
    priority: '0.9',
    lastmod: getCurrentDate()
  },
  {
    url: '/seavoice',
    changefreq: 'weekly',
    priority: '0.9',
    lastmod: getCurrentDate()
  },
  // Channels
  {
    url: '/channels/whatsapp',
    changefreq: 'monthly',
    priority: '0.8',
    lastmod: getCurrentDate()
  },
  {
    url: '/channels/phone-calls',
    changefreq: 'monthly',
    priority: '0.8',
    lastmod: getCurrentDate()
  },
  {
    url: '/channels/sms',
    changefreq: 'monthly',
    priority: '0.8',
    lastmod: getCurrentDate()
  },
  {
    url: '/channels/website-chat',
    changefreq: 'monthly',
    priority: '0.8',
    lastmod: getCurrentDate()
  },
  {
    url: '/channels/instagram',
    changefreq: 'monthly',
    priority: '0.8',
    lastmod: getCurrentDate()
  },
  {
    url: '/channels/facebook-messenger',
    changefreq: 'monthly',
    priority: '0.8',
    lastmod: getCurrentDate()
  },
  {
    url: '/channels/contact-forms',
    changefreq: 'monthly',
    priority: '0.8',
    lastmod: getCurrentDate()
  },
  {
    url: '/channels/line',
    changefreq: 'monthly',
    priority: '0.8',
    lastmod: getCurrentDate()
  },
  {
    url: '/channels/website-widget',
    changefreq: 'monthly',
    priority: '0.8',
    lastmod: getCurrentDate()
  },
  // Compare pages
  {
    url: '/compare/aircall-alternative',
    changefreq: 'monthly',
    priority: '0.7',
    lastmod: getCurrentDate()
  },
  {
    url: '/compare/ringcentral-alternative',
    changefreq: 'monthly',
    priority: '0.7',
    lastmod: getCurrentDate()
  },
  {
    url: '/compare/genesys-alternative',
    changefreq: 'monthly',
    priority: '0.7',
    lastmod: getCurrentDate()
  },
  {
    url: '/compare/five9-alternative',
    changefreq: 'monthly',
    priority: '0.7',
    lastmod: getCurrentDate()
  },
  {
    url: '/compare/avaya-alternative',
    changefreq: 'monthly',
    priority: '0.7',
    lastmod: getCurrentDate()
  },
  {
    url: '/compare/google-voice-alternative',
    changefreq: 'monthly',
    priority: '0.7',
    lastmod: getCurrentDate()
  },
  {
    url: '/compare/respond-io-alternative',
    changefreq: 'monthly',
    priority: '0.7',
    lastmod: getCurrentDate()
  },
  {
    url: '/compare/intercom-alternative',
    changefreq: 'monthly',
    priority: '0.7',
    lastmod: getCurrentDate()
  },
  {
    url: '/compare/kustomer-alternative',
    changefreq: 'monthly',
    priority: '0.7',
    lastmod: getCurrentDate()
  },
  {
    url: '/compare/3cx-alternative',
    changefreq: 'monthly',
    priority: '0.7',
    lastmod: getCurrentDate()
  },
  {
    url: '/compare/dialpad-alternative',
    changefreq: 'monthly',
    priority: '0.7',
    lastmod: getCurrentDate()
  },
  {
    url: '/compare/8x8-alternative',
    changefreq: 'monthly',
    priority: '0.7',
    lastmod: getCurrentDate()
  },
  {
    url: '/compare/openphone-alternative',
    changefreq: 'monthly',
    priority: '0.7',
    lastmod: getCurrentDate()
  },
  // Industries
  {
    url: '/industries/e-commerce',
    changefreq: 'monthly',
    priority: '0.7',
    lastmod: getCurrentDate()
  },
  {
    url: '/industries/healthcare',
    changefreq: 'monthly',
    priority: '0.7',
    lastmod: getCurrentDate()
  },
  {
    url: '/industries/real-estate',
    changefreq: 'monthly',
    priority: '0.7',
    lastmod: getCurrentDate()
  },
  {
    url: '/industries/restaurants-hospitality',
    changefreq: 'monthly',
    priority: '0.7',
    lastmod: getCurrentDate()
  },
  {
    url: '/industries/education-training',
    changefreq: 'monthly',
    priority: '0.7',
    lastmod: getCurrentDate()
  },
  {
    url: '/industries/automotive-services',
    changefreq: 'monthly',
    priority: '0.7',
    lastmod: getCurrentDate()
  },
  {
    url: '/industries/professional-services',
    changefreq: 'monthly',
    priority: '0.7',
    lastmod: getCurrentDate()
  },
  {
    url: '/industries/financial-services',
    changefreq: 'monthly',
    priority: '0.7',
    lastmod: getCurrentDate()
  },
  // Solutions
  {
    url: '/solutions/sme-owners',
    changefreq: 'monthly',
    priority: '0.7',
    lastmod: getCurrentDate()
  },
  {
    url: '/solutions/sales-marketing',
    changefreq: 'monthly',
    priority: '0.7',
    lastmod: getCurrentDate()
  },
  {
    url: '/solutions/customer-support',
    changefreq: 'monthly',
    priority: '0.7',
    lastmod: getCurrentDate()
  },
  {
    url: '/solutions/ai-automation',
    changefreq: 'monthly',
    priority: '0.7',
    lastmod: getCurrentDate()
  },
  // Other pages
  {
    url: '/blog',
    changefreq: 'daily',
    priority: '0.8',
    lastmod: getCurrentDate()
  },
  {
    url: '/company',
    changefreq: 'monthly',
    priority: '0.6',
    lastmod: getCurrentDate()
  },
  {
    url: '/careers',
    changefreq: 'weekly',
    priority: '0.6',
    lastmod: getCurrentDate()
  },
  {
    url: '/seahealth',
    changefreq: 'monthly',
    priority: '0.6',
    lastmod: getCurrentDate()
  }
];

function getCurrentDate() {
  return new Date().toISOString().split('T')[0];
}

// Generate language-prefixed URLs with hreflang
const generateLanguagePages = () => {
  const languagePages = [];
  
  SUPPORTED_LANGUAGES.forEach(lang => {
    basePages.forEach(page => {
      const langUrl = `/${lang}${page.url === '/' ? '' : page.url}`;
      languagePages.push({
        ...page,
        url: langUrl,
        priority: lang === DEFAULT_LANGUAGE ? page.priority : (parseFloat(page.priority) * 0.9).toFixed(1)
      });
    });
  });
  
  return languagePages;
};

// Generate blog post URLs dynamically
const generateBlogPages = () => {
  const blogPages = [];
  const blogContentPath = path.resolve(__dirname, '../content/blog');
  
  if (!fs.existsSync(blogContentPath)) {
    console.log('⚠️  Blog content directory not found, skipping blog pages');
    return blogPages;
  }

  const languages = fs.readdirSync(blogContentPath, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  const blogSlugs = new Set();
  
  languages.forEach(lang => {
    const langDir = path.join(blogContentPath, lang);
    if (fs.existsSync(langDir)) {
      const files = fs.readdirSync(langDir);
      files.forEach(file => {
        if (file.endsWith('.md')) {
          blogSlugs.add(file.replace(/\.md$/, ''));
        }
      });
    }
  });

  // Generate blog URLs for all languages
  SUPPORTED_LANGUAGES.forEach(lang => {
    Array.from(blogSlugs).forEach(slug => {
      blogPages.push({
        url: `/${lang}/blog/${slug}`,
        changefreq: 'monthly',
        priority: lang === DEFAULT_LANGUAGE ? '0.6' : '0.5',
        lastmod: getCurrentDate()
      });
    });
  });
  
  return blogPages;
};

// Generate sitemap with hreflang (SeaMeet style)
const generateSitemap = () => {
  const allPages = [...generateLanguagePages(), ...generateBlogPages()];
  
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">`;

  // Group pages by base URL for hreflang
  const pageGroups = {};
  allPages.forEach(page => {
    const baseUrl = page.url.replace(/^\/(\w{2,5}(-\w{2})?)/, '');
    if (!pageGroups[baseUrl]) {
      pageGroups[baseUrl] = [];
    }
    pageGroups[baseUrl].push(page);
  });

  // Generate URLs with complete hreflang alternates
  Object.keys(pageGroups).forEach(baseUrl => {
    const pageGroup = pageGroups[baseUrl];
    
    pageGroup.forEach(page => {
      const langMatch = page.url.match(/^\/(\w{2,5}(-\w{2})?)/);
      const currentLang = langMatch ? langMatch[1] : DEFAULT_LANGUAGE;
      
      sitemap += `
  <url>
    <loc>${SITE_URL}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>`;
      
      // Add x-default hreflang pointing to English version
      const xDefaultUrl = baseUrl === '' ? '/en' : `/en${baseUrl}`;
      sitemap += `
    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}${xDefaultUrl}" />`;
      
      // Add all language alternates
      pageGroup.forEach(altPage => {
        const altLangMatch = altPage.url.match(/^\/(\w{2,5}(-\w{2})?)/);
        const altLang = altLangMatch ? altLangMatch[1] : DEFAULT_LANGUAGE;
        sitemap += `
    <xhtml:link rel="alternate" hreflang="${altLang}" href="${SITE_URL}${altPage.url}" />`;
      });
      
      sitemap += `
  </url>`;
    });
  });

  sitemap += `
</urlset>`;

  return sitemap;
};

// Generate robots.txt
const generateRobotsTxt = () => {
  return `# Robots.txt for Seasalt.ai
# Generated on ${new Date().toISOString()}

User-agent: *
Allow: /

# Sitemap location
Sitemap: ${SITE_URL}/sitemap.xml

# Crawl-delay for respectful crawling
Crawl-delay: 1

# Performance optimization
# Allow fast indexing of critical pages
Allow: /pricing
Allow: /seachat
Allow: /seax
Allow: /seavoice`;
};

// Main execution
const main = () => {
  try {
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    // Generate sitemap
    const sitemapContent = generateSitemap();
    const sitemapPath = path.join(OUTPUT_DIR, 'sitemap.xml');
    fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
    
    // Generate robots.txt
    const robotsContent = generateRobotsTxt();
    const robotsPath = path.join(OUTPUT_DIR, 'robots.txt');
    fs.writeFileSync(robotsPath, robotsContent, 'utf8');

    // Statistics
    const allPages = [...generateLanguagePages(), ...generateBlogPages()];
    const sitemapSize = (fs.statSync(sitemapPath).size / 1024).toFixed(1);
    
    console.log(`🎯 Sitemap Generated Successfully:`);
    console.log(`   • Total URLs: ${allPages.length}`);
    console.log(`   • Languages: ${SUPPORTED_LANGUAGES.length}`);
    console.log(`   • Base pages: ${basePages.length}`);
    console.log(`   • File size: ${sitemapSize} KB`);
    console.log(`   • Sitemap: ${sitemapPath}`);
    console.log(`   • Robots.txt: ${robotsPath}`);
    console.log(`   • Hreflang: ✅ Complete coverage`);
    console.log(`   • X-default: ✅ Points to English`);
    
    console.log(`\n🚀 Ready for deployment!`);
    
  } catch (error) {
    console.error('❌ Error generating sitemap:', error);
    process.exit(1);
  }
};

// Run script
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { generateSitemap, generateRobotsTxt, main };
```

### Phase 3: SEO Quality Assurance (Week 3)

#### 🔍 3.1 SEO Analyzer Tool (Adapted from SeaMeet)

```javascript
// scripts/seo-analyzer-advanced.js - Based on SeaMeet's analyzer
#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Enhanced SEO Rules based on SeaMeet's standards
const SEO_RULES = {
  titleLength: { min: 30, max: 60, ideal: 50 },
  descriptionLength: { min: 120, max: 160, ideal: 155 },
  keywordDensity: { min: 1, max: 3, ideal: 2 },
  imageAltTags: { required: true },
  headingStructure: { required: true },
  internalLinks: { min: 2, ideal: 5 },
  pageSpeed: { maxSize: 2000000 }, // 2MB
  structuredData: { required: true },
  hreflang: { required: true },
  canonicalUrl: { required: true },
  openGraph: { required: true },
  twitterCard: { required: true }
};

// Analyze React component for SEO
function analyzeReactComponent(filePath, content) {
  const analysis = {
    file: filePath,
    issues: [],
    recommendations: [],
    score: 100
  };

  // Check for SEO component usage
  if (!content.includes('AdvancedLayout') && !content.includes('SEOHelmet')) {
    analysis.issues.push('Missing SEO component (AdvancedLayout or SEOHelmet)');
    analysis.score -= 25;
  }

  // Check for title prop
  if (content.includes('AdvancedLayout') && !content.includes('title=')) {
    analysis.issues.push('AdvancedLayout missing title prop');
    analysis.score -= 15;
  }

  // Check for description prop
  if (content.includes('AdvancedLayout') && !content.includes('description=')) {
    analysis.issues.push('AdvancedLayout missing description prop');
    analysis.score -= 15;
  }

  // Check for keywords prop
  if (content.includes('AdvancedLayout') && !content.includes('keywords=')) {
    analysis.issues.push('AdvancedLayout missing keywords prop');
    analysis.score -= 10;
  }

  // Check for image alt tags in JSX
  const imgTags = content.match(/<img[^>]*>/g) || [];
  imgTags.forEach(img => {
    if (!img.includes('alt=')) {
      analysis.issues.push('Image missing alt attribute');
      analysis.score -= 5;
    }
  });

  // Check for heading structure
  const headings = content.match(/<h[1-6][^>]*>/g) || [];
  if (headings.length === 0) {
    analysis.issues.push('No heading tags found - add H1, H2, H3 for structure');
    analysis.score -= 10;
  }

  // Check for structured data
  if (content.includes('structuredData') || content.includes('application/ld+json')) {
    analysis.recommendations.push('Good: Structured data implementation found');
  } else {
    analysis.issues.push('No structured data found');
    analysis.score -= 10;
  }

  return analysis;
}

// Analyze markdown files
function analyzeMarkdownFile(filePath, content) {
  const analysis = {
    file: filePath,
    issues: [],
    recommendations: [],
    score: 100
  };

  // Check for frontmatter
  if (!content.startsWith('---')) {
    analysis.issues.push('Missing frontmatter metadata');
    analysis.score -= 20;
  } else {
    const frontmatterEnd = content.indexOf('---', 3);
    if (frontmatterEnd === -1) {
      analysis.issues.push('Invalid frontmatter format');
      analysis.score -= 15;
    } else {
      const frontmatter = content.substring(0, frontmatterEnd + 3);
      
      if (!frontmatter.includes('title:')) {
        analysis.issues.push('Missing title in frontmatter');
        analysis.score -= 15;
      }
      
      if (!frontmatter.includes('description:') && !frontmatter.includes('meta_description:')) {
        analysis.issues.push('Missing description in frontmatter');
        analysis.score -= 15;
      }
      
      if (!frontmatter.includes('keywords:') && !frontmatter.includes('tags:')) {
        analysis.issues.push('Missing keywords/tags in frontmatter');
        analysis.score -= 10;
      }
      
      if (!frontmatter.includes('date:')) {
        analysis.issues.push('Missing date in frontmatter');
        analysis.score -= 10;
      }
    }
  }

  // Check heading structure
  const headings = content.match(/^#+\s.+$/gm) || [];
  if (headings.length === 0) {
    analysis.issues.push('No headings found - add H2, H3 for better structure');
    analysis.score -= 10;
  }

  // Check for images with alt text
  const images = content.match(/!\[.*?\]\(.*?\)/g) || [];
  images.forEach(img => {
    if (img.match(/!\[\s*\]/)) {
      analysis.issues.push('Image missing alt text');
      analysis.score -= 5;
    }
  });

  // Check for internal links
  const links = content.match(/\[.*?\]\([^)]+\)/g) || [];
  const internalLinks = links.filter(link => 
    link.includes('](/')  // Internal links start with /
  );
  
  if (internalLinks.length < SEO_RULES.internalLinks.min) {
    analysis.recommendations.push(`Add more internal links (current: ${internalLinks.length}, recommended: ${SEO_RULES.internalLinks.ideal})`);
  }

  return analysis;
}

// Analyze all files
function analyzeAllFiles() {
  const analyses = [];
  
  // Analyze React pages
  const pagesDir = path.resolve(__dirname, '../src/pages');
  if (fs.existsSync(pagesDir)) {
    const pageFiles = fs.readdirSync(pagesDir, { recursive: true })
      .filter(file => file.endsWith('.tsx') || file.endsWith('.ts'));
      
    pageFiles.forEach(file => {
      try {
        const filePath = path.join(pagesDir, file);
        const content = fs.readFileSync(filePath, 'utf8');
        analyses.push(analyzeReactComponent(`src/pages/${file}`, content));
      } catch (error) {
        console.error(`Error analyzing ${file}:`, error.message);
      }
    });
  }

  // Analyze blog posts
  const blogDir = path.resolve(__dirname, '../content/blog');
  if (fs.existsSync(blogDir)) {
    const languages = fs.readdirSync(blogDir, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);

    languages.forEach(lang => {
      const langDir = path.join(blogDir, lang);
      const files = fs.readdirSync(langDir);
      
      files.forEach(file => {
        if (file.endsWith('.md')) {
          try {
            const filePath = path.join(langDir, file);
            const content = fs.readFileSync(filePath, 'utf8');
            analyses.push(analyzeMarkdownFile(`content/blog/${lang}/${file}`, content));
          } catch (error) {
            console.error(`Error analyzing ${lang}/${file}:`, error.message);
          }
        }
      });
    });
  }

  return analyses;
}

// Generate comprehensive report
function generateReport(analyses) {
  const report = {
    timestamp: new Date().toISOString(),
    summary: {
      totalFiles: analyses.length,
      averageScore: 0,
      totalIssues: 0,
      criticalIssues: 0,
      excellentFiles: 0,
      goodFiles: 0,
      needsImprovementFiles: 0,
      poorFiles: 0
    },
    analyses: analyses,
    recommendations: [],
    priorityActions: []
  };

  // Calculate metrics
  if (analyses.length > 0) {
    report.summary.averageScore = Math.round(
      analyses.reduce((sum, analysis) => sum + analysis.score, 0) / analyses.length
    );
    report.summary.totalIssues = analyses.reduce((sum, analysis) => sum + analysis.issues.length, 0);
    report.summary.criticalIssues = analyses.filter(analysis => analysis.score < 70).length;
    
    // Categorize files by score
    analyses.forEach(analysis => {
      if (analysis.score >= 90) report.summary.excellentFiles++;
      else if (analysis.score >= 80) report.summary.goodFiles++;
      else if (analysis.score >= 70) report.summary.needsImprovementFiles++;
      else report.summary.poorFiles++;
    });
  }

  // Generate recommendations
  if (report.summary.averageScore >= 90) {
    report.recommendations.push('🎉 Excellent SEO! Your site is well-optimized');
    report.recommendations.push('💡 Consider A/B testing titles and descriptions for better CTR');
    report.recommendations.push('📊 Monitor Core Web Vitals and page speed');
  } else if (report.summary.averageScore >= 80) {
    report.recommendations.push('✅ Good SEO foundation in place');
    report.recommendations.push('🔧 Focus on fixing remaining issues to reach excellence');
    report.recommendations.push('📈 Implement advanced schema markup for rich snippets');
  } else if (report.summary.averageScore >= 70) {
    report.recommendations.push('⚠️  SEO needs improvement across multiple areas');
    report.recommendations.push('🎯 Priority: Fix missing meta tags and structured data');
    report.recommendations.push('📝 Ensure all pages have unique titles and descriptions');
  } else {
    report.recommendations.push('🚨 URGENT: Critical SEO issues need immediate attention');
    report.recommendations.push('🔧 Implement basic SEO components on all pages');
    report.recommendations.push('📋 Follow SEO checklist for each page systematically');
  }

  // Priority actions
  if (report.summary.criticalIssues > 0) {
    report.priorityActions.push(`Fix ${report.summary.criticalIssues} files with scores below 70`);
  }
  
  const missingTitleFiles = analyses.filter(a => 
    a.issues.some(issue => issue.includes('title'))
  ).length;
  if (missingTitleFiles > 0) {
    report.priorityActions.push(`Add titles to ${missingTitleFiles} files`);
  }
  
  const missingDescriptionFiles = analyses.filter(a => 
    a.issues.some(issue => issue.includes('description'))
  ).length;
  if (missingDescriptionFiles > 0) {
    report.priorityActions.push(`Add descriptions to ${missingDescriptionFiles} files`);
  }

  return report;
}

// Main execution
function main() {
  console.log('🔍 Starting Advanced SEO Analysis...\n');
  console.log('🌟 Based on SeaMeet\'s proven SEO optimization standards\n');
  
  const analyses = analyzeAllFiles();
  const report = generateReport(analyses);
  
  console.log('📊 SEO Analysis Results');
  console.log('='.repeat(50));
  console.log(`📄 Total Files Analyzed: ${report.summary.totalFiles}`);
  console.log(`⭐ Average SEO Score: ${report.summary.averageScore}/100`);
  console.log(`⚠️  Total Issues: ${report.summary.totalIssues}`);
  console.log(`🚨 Critical Issues: ${report.summary.criticalIssues}`);
  console.log(`\n📈 Score Distribution:`);
  console.log(`   🌟 Excellent (90-100): ${report.summary.excellentFiles} files`);
  console.log(`   ✅ Good (80-89): ${report.summary.goodFiles} files`);
  console.log(`   ⚠️  Needs Work (70-79): ${report.summary.needsImprovementFiles} files`);
  console.log(`   🚨 Poor (<70): ${report.summary.poorFiles} files`);

  // Show critical issues
  if (report.summary.criticalIssues > 0) {
    console.log(`\n🚨 Critical Issues (Score < 70):`);
    analyses.filter(analysis => analysis.score < 70).forEach(analysis => {
      console.log(`   📄 ${analysis.file} (Score: ${analysis.score}/100)`);
      analysis.issues.slice(0, 3).forEach(issue => {
        console.log(`      ❌ ${issue}`);
      });
    });
  }

  // Show recommendations
  console.log(`\n💡 Recommendations:`);
  report.recommendations.forEach(rec => console.log(`   ${rec}`));
  
  if (report.priorityActions.length > 0) {
    console.log(`\n🎯 Priority Actions:`);
    report.priorityActions.forEach(action => console.log(`   • ${action}`));
  }

  // Save detailed report
  const reportPath = path.join(__dirname, '../seo-analysis-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  console.log(`\n📋 Detailed report saved: ${reportPath}`);
  
  console.log(`\n✨ Analysis complete! Target: 90+ average score`);
  
  // Exit with appropriate code
  process.exit(report.summary.criticalIssues > 0 ? 1 : 0);
}

// Run the script
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { analyzeReactComponent, analyzeMarkdownFile, generateReport, main };
```

### Phase 4: Integration & Testing (Week 4)

#### 📦 4.1 Package.json Scripts (SeaMeet Style)

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "build:seo": "npm run generate-sitemap && npm run build",
    "preview": "vite preview",
    "generate-sitemap": "node scripts/generate-advanced-sitemap.js",
    "seo:analyze": "node scripts/seo-analyzer-advanced.js",
    "seo:full": "npm run generate-sitemap && npm run seo:analyze",
    "seo:validate": "npm run seo:analyze && npm run build:seo",
    "deploy:seo": "npm run seo:full && npm run preview"
  }
}
```

#### 🧪 4.2 Implementation Checklist

```markdown
## Phase 4 Implementation Checklist

### ✅ Core Components
- [ ] Create `src/config/seo.ts` with comprehensive page configurations
- [ ] Build `src/constants/languages-advanced.ts` with 20 language mappings
- [ ] Implement `src/components/AdvancedLayout.tsx` based on SeaMeet's Layout
- [ ] Add localization helper functions for title/description

### ✅ Automation Scripts
- [ ] Create `scripts/generate-advanced-sitemap.js` for multilingual sitemaps
- [ ] Build `scripts/seo-analyzer-advanced.js` for quality assurance
- [ ] Add `scripts/validate-translations.js` for content verification
- [ ] Create `scripts/seo-deployment-check.js` for pre-deployment validation

### ✅ Content Integration
- [ ] Update all page components to use `AdvancedLayout`
- [ ] Configure SEO metadata for each page type
- [ ] Set up blog post frontmatter templates
- [ ] Implement dynamic breadcrumb generation

### ✅ Testing & Validation
- [ ] Run SEO analyzer on all pages (target: 90+ average score)
- [ ] Validate sitemap generation (20 languages × ~50 pages = 1,000+ URLs)
- [ ] Test hreflang implementation across all language versions
- [ ] Verify structured data with Google Rich Results Test

### ✅ Performance Optimization
- [ ] Memoize SEO data generation
- [ ] Optimize language mapping for performance
- [ ] Implement DNS prefetching
- [ ] Add critical resource preloading

### ✅ Monitoring Setup
- [ ] Configure Google Search Console for all language versions
- [ ] Set up Google Analytics 4 with language tracking
- [ ] Implement automated SEO health checks
- [ ] Create SEO performance dashboards
```

---

## 🚀 Deployment Strategy (SeaMeet Model)

### Pre-Deployment Validation

```bash
# 1. Generate and validate sitemap
npm run generate-sitemap

# 2. Run comprehensive SEO analysis
npm run seo:analyze

# 3. Build with SEO optimization
npm run build:seo

# 4. Preview and test
npm run preview
```

### Post-Deployment Tasks (SeaMeet Approach)

1. **Immediate (24 hours)**
   - Submit sitemap to Google Search Console
   - Verify all hreflang tags are working
   - Test social media previews (Facebook, Twitter, LinkedIn)
   - Check Core Web Vitals scores

2. **Week 1**
   - Monitor crawl errors in GSC
   - Verify structured data recognition
   - Check international targeting settings
   - Test mobile usability across languages

3. **Month 1**
   - Analyze search performance by language
   - A/B test meta descriptions for higher CTR
   - Optimize based on user behavior data
   - Scale successful patterns to other pages

---

## 📊 Success Metrics (SeaMeet Standards)

### Technical Metrics
- **SEO Analyzer Score**: 90+ average (SeaMeet achieves 93+)
- **Lighthouse SEO Score**: 95+ for all pages
- **Core Web Vitals**: Pass all metrics
- **Sitemap Coverage**: 100% of pages included with proper hreflang
- **Structured Data**: Valid schemas for all page types

### Business Metrics
- **Organic Traffic Growth**: 25%+ increase per quarter
- **International Traffic**: 40%+ from non-English languages
- **Search Rankings**: Top 10 for primary keywords in each language
- **Click-Through Rate**: 3%+ average from search results

---

## 🎯 Key Differentiators from SeaMeet Model

### Adaptations for Seasalt.ai
1. **Product Focus**: Multi-product (SeaChat, SeaX, SeaVoice) vs. single product
2. **Business Model**: Freemium + Enterprise vs. primarily B2B
3. **Content Strategy**: More comparison pages and industry-specific content
4. **Technical Architecture**: React Router vs. file-based routing

### Enhanced Features
1. **Advanced Product Schemas**: Separate schemas for each product line
2. **Pricing Comparison Data**: Rich structured data for pricing tables
3. **Industry-Specific SEO**: Tailored content for different verticals
4. **Enterprise SEO Features**: B2B-focused schema and content optimization

---

## 💡 Implementation Timeline

| Week | Focus | Deliverables |
|------|-------|--------------|
| **Week 1** | Core Infrastructure | SEO config, Layout component, language mapping |
| **Week 2** | Automation & Tools | Sitemap generator, SEO analyzer, validation scripts |
| **Week 3** | Content Integration | All pages using AdvancedLayout, blog optimization |
| **Week 4** | Testing & Deployment | Quality assurance, performance optimization, go-live |

**Total Time Investment**: 4 weeks for complete implementation
**Expected ROI**: 25%+ organic traffic increase within 3 months
**Maintenance**: 2-4 hours/week for ongoing optimization

This plan leverages SeaMeet's proven SEO success while adapting to Seasalt.ai's unique needs, ensuring world-class search visibility across all 20 supported languages.

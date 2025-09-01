/**
 * Enhanced SEO Utilities for Seasalt.ai
 * Based on SeaMeet's comprehensive SEO approach
 * 
 * This module provides advanced SEO utilities including:
 * - Hreflang generation with regional variants
 * - Canonical URL handling
 * - Social media metadata optimization
 * - Structured data generation
 * - SEO validation and quality checks
 */

import { SEO_CONFIG } from '../config/seo';
import type { SupportedLanguage, PageType, SeoMetadata } from '../config/seo';
import { 
  getLanguageInfo, 
  getHreflangCode, 
  getAllLocales,
  PHASE_1_LANGUAGES,
  hasRegionalVariants,
  getLocalizedLanguageName,
  isLanguageSupported
} from '../constants/languages-advanced';

// =============================================================================
// Enhanced URL Generation with Regional Support
// =============================================================================

/**
 * Generate canonical URL for a page with proper language handling
 */
export const generateCanonicalUrl = (
  pathname: string, 
  language: SupportedLanguage = 'en'
): string => {
  const baseUrl = SEO_CONFIG.siteUrl;
  
  // For default language (English), we may want language-neutral URLs
  if (language === 'en') {
    return `${baseUrl}${pathname}`;
  }
  
  return `${baseUrl}/${language}${pathname}`;
};

/**
 * Generate language-neutral (x-default) URL
 */
export const generateXDefaultUrl = (pathname: string): string => {
  return `${SEO_CONFIG.siteUrl}${pathname}`;
};

/**
 * Generate all hreflang URLs for a page with comprehensive regional support
 */
export const generateHreflangUrls = (pathname: string): Array<{
  lang: string;
  url: string;
}> => {
  const hreflangs: Array<{ lang: string; url: string }> = [];
  
  // Add x-default (language-neutral) first
  hreflangs.push({
    lang: 'x-default',
    url: generateXDefaultUrl(pathname)
  });
  
  // Add all supported languages
  PHASE_1_LANGUAGES.forEach(language => {
    const hreflangCode = getHreflangCode(language);
    
    if (language === 'en') {
      // English as primary language gets the clean URL
      hreflangs.push({
        lang: hreflangCode,
        url: generateCanonicalUrl(pathname, language)
      });
    } else {
      // Other languages get language prefix
      hreflangs.push({
        lang: hreflangCode,
        url: generateCanonicalUrl(pathname, language)
      });
    }
    
    // Add regional variants if available
    const languageInfo = getLanguageInfo(language);
    if (hasRegionalVariants(language)) {
      languageInfo.supportedRegions.forEach(region => {
        if (region.region !== languageInfo.primaryRegion) {
          // Add region-specific hreflang
          hreflangs.push({
            lang: `${hreflangCode}-${region.region}`,
            url: generateCanonicalUrl(pathname, language)
          });
        }
      });
    }
  });
  
  return hreflangs;
};

// =============================================================================
// Enhanced Metadata Generation
// =============================================================================

/**
 * Generate comprehensive metadata for a page with social optimization
 */
export const generatePageMetadata = (
  pageType: PageType,
  language: SupportedLanguage = 'en',
  customSeo?: Partial<SeoMetadata>
): SeoMetadata => {
  const baseSeo = SEO_CONFIG.pages[pageType]?.[language] || SEO_CONFIG.pages[pageType]?.['en'];
  const fallbackSeo = SEO_CONFIG.pages.home[language] || SEO_CONFIG.pages.home['en'];
  
  // Merge base SEO with custom overrides
  const finalSeo: SeoMetadata = {
    title: customSeo?.title || baseSeo?.title || fallbackSeo.title,
    description: customSeo?.description || baseSeo?.description || fallbackSeo.description,
    keywords: customSeo?.keywords || baseSeo?.keywords || fallbackSeo.keywords || [],
    ogTitle: customSeo?.ogTitle || customSeo?.title || baseSeo?.ogTitle || baseSeo?.title || fallbackSeo.ogTitle,
    ogDescription: customSeo?.ogDescription || customSeo?.description || baseSeo?.ogDescription || baseSeo?.description || fallbackSeo.ogDescription,
    twitterTitle: customSeo?.twitterTitle || customSeo?.ogTitle || customSeo?.title || baseSeo?.twitterTitle || baseSeo?.ogTitle || baseSeo?.title || fallbackSeo.twitterTitle,
    twitterDescription: customSeo?.twitterDescription || customSeo?.ogDescription || customSeo?.description || baseSeo?.twitterDescription || baseSeo?.ogDescription || baseSeo?.description || fallbackSeo.twitterDescription
  };
  
  return finalSeo;
};

/**
 * Generate social media image URL with proper fallbacks
 */
export const generateSocialImageUrl = (
  pageType: PageType,
  language: SupportedLanguage = 'en',
  customImage?: string
): string => {
  if (customImage) {
    return customImage.startsWith('http') ? customImage : `${SEO_CONFIG.siteUrl}${customImage}`;
  }
  
  // Use page-specific social image or fallback to default
  const defaultImage = '/images/social/seasalt-ai-social-default.jpg';
  return `${SEO_CONFIG.siteUrl}${defaultImage}`;
};

/**
 * Generate alt text for social images based on page and language
 */
export const generateSocialImageAlt = (
  pageType: PageType,
  language: SupportedLanguage = 'en'
): string => {
  const altTexts: Record<PageType, Record<SupportedLanguage, string>> = {
    home: {
      'en': 'Seasalt.ai - AI Conversation Intelligence Platform',
      'zh-TW': 'Seasalt.ai - AI 對話智慧平台'
    },
    about: {
      'en': 'About Seasalt.ai - Leading AI Innovation',
      'zh-TW': '關於 Seasalt.ai - 領先的 AI 創新'
    },
    products: {
      'en': 'Seasalt.ai Products - AI Solutions for Business',
      'zh-TW': 'Seasalt.ai 產品 - 企業 AI 解決方案'
    },
    solutions: {
      'en': 'Seasalt.ai Solutions - Industry-specific AI',
      'zh-TW': 'Seasalt.ai 解決方案 - 行業專用 AI'
    },
    blog: {
      'en': 'Seasalt.ai Blog - AI Insights and Updates',
      'zh-TW': 'Seasalt.ai 部落格 - AI 洞察與更新'
    },
    contact: {
      'en': 'Contact Seasalt.ai - Get AI Solutions',
      'zh-TW': '聯絡 Seasalt.ai - 獲取 AI 解決方案'
    },
    careers: {
      'en': 'Careers at Seasalt.ai - Join Our AI Team',
      'zh-TW': 'Seasalt.ai 職涯 - 加入我們的 AI 團隊'
    },
    privacy: {
      'en': 'Seasalt.ai Privacy Policy',
      'zh-TW': 'Seasalt.ai 隱私政策'
    },
    terms: {
      'en': 'Seasalt.ai Terms of Service',
      'zh-TW': 'Seasalt.ai 服務條款'
    }
  };
  
  return altTexts[pageType]?.[language] || altTexts[pageType]?.['en'] || altTexts.home[language];
};

// =============================================================================
// Structured Data Generation
// =============================================================================

/**
 * Generate Organization structured data with regional contact information
 */
export const generateOrganizationStructuredData = (language: SupportedLanguage = 'en') => {
  const languageInfo = getLanguageInfo(language);
  
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": SEO_CONFIG.brand.name,
    "description": language === 'zh-TW' 
      ? "Seasalt.ai 是領先的 AI 對話智慧平台，為企業提供創新的人工智慧解決方案。"
      : "Seasalt.ai is a leading AI conversation intelligence platform providing innovative artificial intelligence solutions for enterprises.",
    "url": SEO_CONFIG.siteUrl,
    "logo": `${SEO_CONFIG.siteUrl}/images/logo/seasalt-ai-logo.png`,
    "sameAs": [
      "https://www.linkedin.com/company/seasalt-ai",
      "https://twitter.com/seasalt_ai",
      "https://www.facebook.com/seasalt.ai",
      "https://github.com/seasalt-ai"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": language === 'zh-TW' ? "台北" : "Taipei",
      "addressRegion": language === 'zh-TW' ? "台灣" : "Taiwan",
      "addressCountry": languageInfo.primaryRegion === 'TW' ? "TW" : "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": PHASE_1_LANGUAGES.map(lang => getLocalizedLanguageName(lang))
    }
  };
};

/**
 * Generate Software Application structured data
 */
export const generateSoftwareApplicationStructuredData = (language: SupportedLanguage = 'en') => {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Seasalt.ai Platform",
    "description": language === 'zh-TW'
      ? "企業級 AI 對話智慧平台，提供語音識別、自然語言處理和對話分析功能。"
      : "Enterprise-grade AI conversation intelligence platform with speech recognition, natural language processing, and conversation analytics.",
    "url": SEO_CONFIG.siteUrl,
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web-based",
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "price": "Contact for pricing",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    }
  };
};

/**
 * Generate Breadcrumb structured data
 */
export const generateBreadcrumbStructuredData = (
  breadcrumbs: Array<{ name: string; url: string }>,
  language: SupportedLanguage = 'en'
) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.url
    }))
  };
};

/**
 * Generate FAQ structured data
 */
export const generateFAQStructuredData = (
  faqs: Array<{ question: string; answer: string }>,
  language: SupportedLanguage = 'en'
) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};

// =============================================================================
// SEO Validation and Quality Checks
// =============================================================================

/**
 * Validate SEO metadata quality
 */
export const validateSeoMetadata = (metadata: SeoMetadata): {
  isValid: boolean;
  warnings: string[];
  errors: string[];
} => {
  const warnings: string[] = [];
  const errors: string[] = [];
  
  // Title validation
  if (!metadata.title) {
    errors.push('Title is required');
  } else if (metadata.title.length < 30) {
    warnings.push('Title is shorter than 30 characters (recommended: 30-60)');
  } else if (metadata.title.length > 60) {
    warnings.push('Title is longer than 60 characters (recommended: 30-60)');
  }
  
  // Description validation
  if (!metadata.description) {
    errors.push('Description is required');
  } else if (metadata.description.length < 120) {
    warnings.push('Description is shorter than 120 characters (recommended: 120-160)');
  } else if (metadata.description.length > 160) {
    warnings.push('Description is longer than 160 characters (recommended: 120-160)');
  }
  
  // Keywords validation
  if (!metadata.keywords || metadata.keywords.length === 0) {
    warnings.push('No keywords specified');
  } else if (metadata.keywords.length > 10) {
    warnings.push('Too many keywords (recommended: 5-10 focused keywords)');
  }
  
  // Open Graph validation
  if (metadata.ogTitle && metadata.ogTitle.length > 95) {
    warnings.push('OG title is longer than 95 characters');
  }
  
  if (metadata.ogDescription && metadata.ogDescription.length > 200) {
    warnings.push('OG description is longer than 200 characters');
  }
  
  return {
    isValid: errors.length === 0,
    warnings,
    errors
  };
};

/**
 * Generate robots meta content based on page type and language
 */
export const generateRobotsContent = (
  pageType: PageType,
  language: SupportedLanguage = 'en',
  isPreview: boolean = false
): string => {
  if (isPreview) {
    return 'noindex, nofollow';
  }
  
  // Special handling for certain page types
  const restrictedPages: PageType[] = ['privacy', 'terms'];
  
  if (restrictedPages.includes(pageType)) {
    return 'index, nofollow';
  }
  
  // Default: allow indexing and following
  return 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1';
};

/**
 * Generate theme color based on language/region
 */
export const generateThemeColor = (language: SupportedLanguage = 'en'): string => {
  // You can customize theme colors per language/region if needed
  return SEO_CONFIG.brand.primaryColor;
};

// =============================================================================
// Advanced SEO Utilities Export
// =============================================================================

export const SEOUtils = {
  // URL Generation
  generateCanonicalUrl,
  generateXDefaultUrl,
  generateHreflangUrls,
  
  // Metadata Generation
  generatePageMetadata,
  generateSocialImageUrl,
  generateSocialImageAlt,
  
  // Structured Data
  generateOrganizationStructuredData,
  generateSoftwareApplicationStructuredData,
  generateBreadcrumbStructuredData,
  generateFAQStructuredData,
  
  // Validation & Quality
  validateSeoMetadata,
  generateRobotsContent,
  generateThemeColor,
  
  // Language Support
  isLanguageSupported,
  hasRegionalVariants
};

export default SEOUtils;

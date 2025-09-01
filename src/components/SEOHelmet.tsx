/**
 * Enhanced SEO Helmet Component for Seasalt.ai
 * Based on SeaMeet's comprehensive SEO approach
 * 
 * This component provides complete SEO metadata management including:
 * - Meta tags (title, description, keywords, robots)
 * - Open Graph metadata for social sharing
 * - Twitter Cards support
 * - Multilingual hreflang links
 * - Canonical URLs
 * - Structured data (JSON-LD)
 * - Favicon and theme metadata
 */

import React, { useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { BRAND_CONSTANTS, getSEOConfig, getCanonicalUrl, generateHreflangUrls, type SEOConfig } from '../config/seo';
import type { SupportedLanguage } from '../constants/languages';

// Type definitions for SEO
export type PageType = 'home' | 'pricing' | 'seachat' | 'seax' | 'seavoice' | 'blog' | 'company' | 'channels' | 'industries';
export interface SeoMetadata {
  title: string;
  description: string;
  keywords?: string[];
  ogTitle?: string;
  ogDescription?: string;
  twitterTitle?: string;
  twitterDescription?: string;
}

// =============================================================================
// SEO Helmet Component Props Interface
// =============================================================================

export interface SEOHelmetProps {
  /** Page type for SEO configuration */
  pageType?: PageType;
  
  /** Current language */
  language?: SupportedLanguage;
  
  /** Custom SEO metadata overrides */
  customSeo?: Partial<SeoMetadata>;
  
  /** Structured data to include */
  structuredData?: Array<Record<string, any>>;
  
  /** Breadcrumbs for structured data */
  breadcrumbs?: Array<{ name: string; url: string }>;
  
  /** FAQ data for structured data */
  faqs?: Array<{ question: string; answer: string }>;
  
  /** Custom social image */
  socialImage?: string;
  
  /** Whether this is a preview/draft page */
  isPreview?: boolean;
  
  /** Custom canonical URL override */
  canonicalUrl?: string;
  
  /** Additional meta tags */
  additionalMeta?: Array<{
    name?: string;
    property?: string;
    content: string;
  }>;
  
  // Legacy props for backward compatibility
  title?: string;
  description?: string;
  favicon?: string;
  availableLanguages?: readonly string[];
  image?: string;
  type?: 'website' | 'article';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  tags?: string[];
  slug?: string;
}

// =============================================================================
// Enhanced SEO Helmet Component
// =============================================================================

const SEOHelmetInternal: React.FC<SEOHelmetProps> = ({
  pageType = 'home',
  language = 'en',
  customSeo,
  structuredData = [],
  breadcrumbs,
  faqs,
  socialImage,
  isPreview = false,
  canonicalUrl: customCanonicalUrl,
  additionalMeta = [],
  // Legacy props
  title: legacyTitle,
  description: legacyDescription,
  favicon: legacyFavicon,
  availableLanguages,
  image: legacyImage,
  type = 'website',
  author,
  publishedTime,
  modifiedTime,
  tags = [],
  slug
}) => {
  const location = useLocation();
  
  // ==========================================================================
  // Computed SEO Values
  // ==========================================================================
  
  const computedValues = useMemo(() => {
    // Detect legacy usage
    const isLegacyUsage = !!(legacyTitle || legacyDescription || availableLanguages);
    
    // Get current pathname and clean it
    const pathname = location.pathname.replace(/^\//, ''); // Remove leading slash
    
    // For legacy usage, use direct props; for modern usage, use SEO config + overrides
    let metadata: SeoMetadata;
    let canonicalUrl: string;
    let hreflangUrls: Array<{ lang: string; url: string }>;
    let socialImageUrl: string;
    
    if (isLegacyUsage) {
      // Legacy behavior - use props directly
      metadata = {
        title: legacyTitle || 'Seasalt.ai',
        description: legacyDescription || '',
        keywords: [],
        ogTitle: legacyTitle,
        ogDescription: legacyDescription,
        twitterTitle: legacyTitle,
        twitterDescription: legacyDescription
      };
      
      canonicalUrl = customCanonicalUrl || `${BRAND_CONSTANTS.SITE_URL}/${pathname}`;
      
      // For legacy usage, generate limited hreflang if availableLanguages is provided
      if (availableLanguages && availableLanguages.length > 0) {
        const origin = BRAND_CONSTANTS.SITE_URL;
        const cleanPath = pathname.split('/').slice(1).join('/'); // Remove potential language prefix
        
        hreflangUrls = availableLanguages.map(lang => {
          // Convert language codes to proper hreflang codes
          let hrefLangCode = lang;
          if (lang === 'zh-TW') hrefLangCode = 'zh-Hant';
          if (lang === 'zh-CN') hrefLangCode = 'zh-Hans';
          
          // Generate URL for this language
          let url: string;
          if (slug) {
            // For blog posts
            url = `${origin}/${lang === 'en' ? '' : lang + '/'}blog/${slug}`;
          } else if (cleanPath === 'blog') {
            // For blog listing page
            url = `${origin}/${lang === 'en' ? '' : lang + '/'}blog`;
          } else {
            // For other pages
            const langPrefix = lang === 'en' ? '' : `/${lang}`;
            const pathSuffix = cleanPath ? `/${cleanPath}` : '';
            url = `${origin}${langPrefix}${pathSuffix}`;
          }
          
          return { lang: hrefLangCode, url };
        });
      } else {
        hreflangUrls = [];
      }
      
      socialImageUrl = legacyImage || BRAND_CONSTANTS.DEFAULT_IMAGE;
    } else {
      // Modern behavior - use SEO config system
      const seoConfig = getSEOConfig(pathname, language);
      
      metadata = {
        title: customSeo?.title || seoConfig.title,
        description: customSeo?.description || seoConfig.description,
        keywords: customSeo?.keywords || (seoConfig.keywords ? seoConfig.keywords.split(', ') : []),
        ogTitle: customSeo?.ogTitle,
        ogDescription: customSeo?.ogDescription,
        twitterTitle: customSeo?.twitterTitle,
        twitterDescription: customSeo?.twitterDescription
      };
      
      canonicalUrl = customCanonicalUrl || getCanonicalUrl(pathname, language);
      hreflangUrls = generateHreflangUrls(pathname);
      socialImageUrl = socialImage || seoConfig.image || BRAND_CONSTANTS.DEFAULT_IMAGE;
    }
    
    // Generate full social image URL
    const fullSocialImageUrl = socialImageUrl.startsWith('http') ? 
      socialImageUrl : `${BRAND_CONSTANTS.SITE_URL}${socialImageUrl}`;
    
    // Generate alt text for social image
    const socialImageAlt = `${metadata.title} - ${BRAND_CONSTANTS.COMPANY_NAME}`;
    
    // Generate robots content
    const robotsContent = isPreview ? 
      'noindex, nofollow' : 
      'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1';
    
    // Theme color
    const themeColor = BRAND_CONSTANTS.THEME_COLOR;
    
    // Basic structured data for organization
    const organizationSchema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: BRAND_CONSTANTS.COMPANY_NAME,
      url: BRAND_CONSTANTS.SITE_URL,
      logo: `${BRAND_CONSTANTS.SITE_URL}${BRAND_CONSTANTS.LOGO_URL}`,
      sameAs: [
        'https://twitter.com/seasalt_ai',
        'https://linkedin.com/company/seasalt-ai'
      ]
    };
    
    // Website schema
    const websiteSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: BRAND_CONSTANTS.COMPANY_NAME,
      url: BRAND_CONSTANTS.SITE_URL
    };
    
    // Combine all structured data
    const allStructuredData = [organizationSchema, websiteSchema, ...structuredData];
    
    // Add breadcrumb data if provided
    if (breadcrumbs && breadcrumbs.length > 0) {
      const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((crumb, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: crumb.name,
          item: crumb.url
        }))
      };
      allStructuredData.push(breadcrumbSchema);
    }
    
    // Add FAQ data if provided
    if (faqs && faqs.length > 0) {
      const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map(faq => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer
          }
        }))
      };
      allStructuredData.push(faqSchema);
    }
    
    return {
      metadata,
      canonicalUrl,
      hreflangUrls,
      socialImageUrl: fullSocialImageUrl,
      socialImageAlt,
      robotsContent,
      themeColor,
      allStructuredData
    };
  }, [pageType, language, customSeo, location.pathname, customCanonicalUrl, socialImage, isPreview, structuredData, breadcrumbs, faqs, legacyTitle, legacyDescription, availableLanguages, legacyImage, type, author, publishedTime, modifiedTime, tags, slug]);
  
  const {
    metadata,
    canonicalUrl,
    hreflangUrls,
    socialImageUrl,
    socialImageAlt,
    robotsContent,
    themeColor,
    allStructuredData
  } = computedValues;
  
  // ==========================================================================
  // Render SEO Head Tags
  // ==========================================================================
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      {metadata.keywords && metadata.keywords.length > 0 && (
        <meta name="keywords" content={metadata.keywords.join(', ')} />
      )}
      <meta name="robots" content={robotsContent} />
      
      {/* Language and Locale */}
      <meta httpEquiv="content-language" content={language} />
      <html lang={language} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Hreflang Links */}
      {hreflangUrls.map((hreflang, index) => (
        <link
          key={`hreflang-${index}`}
          rel="alternate"
          hrefLang={hreflang.lang}
          href={hreflang.url}
        />
      ))}
      
      {/* Open Graph Meta Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={metadata.ogTitle || metadata.title} />
      <meta property="og:description" content={metadata.ogDescription || metadata.description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={BRAND_CONSTANTS.COMPANY_NAME} />
      <meta property="og:locale" content={language === 'zh-TW' ? 'zh_TW' : `${language}_${language.toUpperCase()}`} />
      <meta property="og:image" content={socialImageUrl} />
      <meta property="og:image:alt" content={socialImageAlt} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/jpeg" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@seasalt_ai" />
      <meta name="twitter:creator" content="@seasalt_ai" />
      <meta name="twitter:title" content={metadata.twitterTitle || metadata.ogTitle || metadata.title} />
      <meta name="twitter:description" content={metadata.twitterDescription || metadata.ogDescription || metadata.description} />
      <meta name="twitter:image" content={socialImageUrl} />
      <meta name="twitter:image:alt" content={socialImageAlt} />
      
      {/* Mobile and PWA Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      <meta name="theme-color" content={themeColor} />
      <meta name="msapplication-TileColor" content={themeColor} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={BRAND_CONSTANTS.COMPANY_NAME} />
      
      {/* Favicons and Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color={themeColor} />
      <link rel="manifest" href="/manifest.json" />
      
      {/* DNS Prefetch and Preconnect for Performance */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      
      {/* Additional Meta Tags */}
      {additionalMeta.map((meta, index) => {
        if (meta.name) {
          return <meta key={`additional-meta-${index}`} name={meta.name} content={meta.content} />;
        }
        if (meta.property) {
          return <meta key={`additional-meta-${index}`} property={meta.property} content={meta.content} />;
        }
        return null;
      })}
      
      {/* Structured Data (JSON-LD) */}
      {allStructuredData.map((data, index) => (
        <script
          key={`structured-data-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(data, null, 0)
          }}
        />
      ))}
      
      {/* Additional SEO Enhancements */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="google" content="notranslate" />
      
      {/* Verification Meta Tags (to be filled when available) */}
      {/* <meta name="google-site-verification" content="YOUR_GOOGLE_VERIFICATION_CODE" /> */}
      {/* <meta name="msvalidate.01" content="YOUR_BING_VERIFICATION_CODE" /> */}
      
      {/* Performance Hints */}
      <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="" />
      
      {/* Security Headers */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="referrer" content="strict-origin-when-cross-origin" />
    </Helmet>
  );
};

// =============================================================================
// Simple SEO Metadata Validation Hook
// =============================================================================

export const useSEOValidation = (metadata: SeoMetadata) => {
  return useMemo(() => {
    const validation = {
      isValid: true,
      warnings: [] as string[],
      errors: [] as string[]
    };
    
    // Basic validation
    if (!metadata.title || metadata.title.length < 10) {
      validation.warnings.push('Title should be at least 10 characters long');
    }
    if (metadata.title && metadata.title.length > 60) {
      validation.warnings.push('Title should be no more than 60 characters for optimal SEO');
    }
    if (!metadata.description || metadata.description.length < 50) {
      validation.warnings.push('Description should be at least 50 characters long');
    }
    if (metadata.description && metadata.description.length > 160) {
      validation.warnings.push('Description should be no more than 160 characters for optimal SEO');
    }
    
    validation.isValid = validation.errors.length === 0;
    
    return validation;
  }, [metadata]);
};

// =============================================================================
// Memoized Export to Prevent Unnecessary Re-renders
// =============================================================================

// Use React.memo to prevent duplicate renders when props haven't changed
export const SEOHelmet = React.memo(SEOHelmetInternal, (prevProps, nextProps) => {
  // Custom comparison function to avoid unnecessary re-renders
  return (
    // Modern props
    prevProps.pageType === nextProps.pageType &&
    prevProps.language === nextProps.language &&
    prevProps.canonicalUrl === nextProps.canonicalUrl &&
    JSON.stringify(prevProps.customSeo) === JSON.stringify(nextProps.customSeo) &&
    JSON.stringify(prevProps.structuredData) === JSON.stringify(nextProps.structuredData) &&
    JSON.stringify(prevProps.breadcrumbs) === JSON.stringify(nextProps.breadcrumbs) &&
    JSON.stringify(prevProps.faqs) === JSON.stringify(nextProps.faqs) &&
    prevProps.socialImage === nextProps.socialImage &&
    prevProps.isPreview === nextProps.isPreview &&
    JSON.stringify(prevProps.additionalMeta) === JSON.stringify(nextProps.additionalMeta) &&
    // Legacy props
    prevProps.title === nextProps.title &&
    prevProps.description === nextProps.description &&
    prevProps.favicon === nextProps.favicon &&
    JSON.stringify(prevProps.availableLanguages) === JSON.stringify(nextProps.availableLanguages) &&
    prevProps.image === nextProps.image &&
    prevProps.type === nextProps.type &&
    prevProps.author === nextProps.author &&
    prevProps.publishedTime === nextProps.publishedTime &&
    prevProps.modifiedTime === nextProps.modifiedTime &&
    JSON.stringify(prevProps.tags) === JSON.stringify(nextProps.tags) &&
    prevProps.slug === nextProps.slug
  );
});

// =============================================================================
// Default Export
// =============================================================================

export default SEOHelmet;

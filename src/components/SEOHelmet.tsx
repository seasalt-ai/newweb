/**
 * SEO Helmet Component for Seasalt.ai
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
import { 
  LANGUAGE_REGION_MAP, 
  getHreflangCode, 
  getAllLocales, 
  getGeoTargeting,
  hasRegionalVariants,
  SUPPORTED_LANGUAGES,
  type SupportedLanguage 
} from '../constants/languages';
import { useProductAssets, getProductAssets } from '../utils/productAssets';

// Brand constants for consistent SEO metadata
const BRAND_CONSTANTS = {
  COMPANY_NAME: 'Seasalt.ai',
  SITE_URL: 'https://seasalt.ai',
  DEFAULT_IMAGE: '/seasalt-ai-og-default.png', // Fallback only - prefer product-specific assets
  LOGO_URL: '/seasalt-ai-logo.png', // Fallback only - prefer product-specific assets
  TWITTER_HANDLE: '@seasalt_ai',
  THEME_COLOR: '#2563eb'
} as const;

// =============================================================================
// SEO Helmet Component Props Interface
// =============================================================================

export interface SEOHelmetProps {
  /** Page title */
  title?: string;
  
  /** Meta description */
  description?: string;
  
  /** Favicon URL */
  favicon?: string;
  
  /** Available languages for hreflang generation */
  availableLanguages?: readonly string[];
  
  /** Social sharing image */
  image?: string;
  
  /** Page type for Open Graph */
  type?: 'website' | 'article';
  
  /** Article author (for blog posts) */
  author?: string;
  
  /** Article published time (for blog posts) */
  publishedTime?: string;
  
  /** Article modified time (for blog posts) */
  modifiedTime?: string;
  
  /** Article tags/keywords */
  tags?: string[];
  
  /** Blog post slug (for generating URLs) */
  slug?: string;
  
  /** Custom canonical URL override */
  canonicalUrl?: string;
  
  /** Additional meta tags */
  additionalMeta?: Array<{
    name?: string;
    property?: string;
    content: string;
  }>;
  
  /** Structured data to include */
  structuredData?: Array<Record<string, any>>;
  
  /** Breadcrumbs for structured data */
  breadcrumbs?: Array<{ name: string; url: string }>;
  
  /** FAQ data for structured data */
  faqs?: Array<{ question: string; answer: string }>;
  
  /** Whether this is a preview/draft page */
  isPreview?: boolean;
}

// =============================================================================
// SEO Helmet Component
// =============================================================================

const SEOHelmetInternal: React.FC<SEOHelmetProps> = ({
  title = 'Seasalt.ai',
  description = '',
  favicon, // Will use product-specific default if not provided
  availableLanguages,
  image, // Will use product-specific default if not provided
  type = 'website',
  author,
  publishedTime,
  modifiedTime,
  tags = [],
  slug,
  canonicalUrl: customCanonicalUrl,
  additionalMeta = [],
  structuredData = [],
  breadcrumbs,
  faqs,
  isPreview = false
}) => {
  const location = useLocation();
  
  // ==========================================================================
  // Product-Specific Assets
  // ==========================================================================
  
  // Get product-specific assets based on current path
  const productAssets = getProductAssets(location.pathname);
  
  // Use product-specific defaults if not explicitly provided
  const effectiveFavicon = favicon || productAssets.favicon;
  const effectiveImage = image || productAssets.ogDefault;
  
  // ==========================================================================
  // Computed SEO Values
  // ==========================================================================
  
  const computedValues = useMemo(() => {
    // Get current pathname and clean it
    const pathname = location.pathname.replace(/^\//, ''); // Remove leading slash
    
    // Generate canonical URL
    const canonicalUrl = customCanonicalUrl || `${BRAND_CONSTANTS.SITE_URL}/${pathname}`;
    
    // Use SUPPORTED_LANGUAGES as default if availableLanguages is not provided or empty
    const effectiveAvailableLanguages = (availableLanguages && availableLanguages.length > 0) 
      ? availableLanguages 
      : SUPPORTED_LANGUAGES;
    
    // Generate enhanced hreflang URLs with regional targeting
    let hreflangUrls: Array<{ lang: string; url: string }> = [];
    if (effectiveAvailableLanguages && effectiveAvailableLanguages.length > 0) {
      const origin = BRAND_CONSTANTS.SITE_URL;
      const cleanPath = pathname.split('/').slice(1).join('/'); // Remove potential language prefix
      
      // Generate hreflang URLs for each language and its regional variants
      effectiveAvailableLanguages.forEach(langCode => {
        const lang = langCode as SupportedLanguage;
        const languageInfo = LANGUAGE_REGION_MAP[lang];
        
        if (!languageInfo) {
          // Fallback for unsupported languages
          const hrefLangCode = getHreflangCode(lang);
          const url = generateUrlForLanguage(origin, lang, cleanPath, slug);
          hreflangUrls.push({ lang: hrefLangCode, url });
          return;
        }
        
        // Add primary locale hreflang
        const primaryHrefLang = convertLocaleToHreflang(languageInfo.primaryLocale);
        const primaryUrl = generateUrlForLanguage(origin, lang, cleanPath, slug);
        hreflangUrls.push({ lang: primaryHrefLang, url: primaryUrl });
        
        // Add alternate regional locales if they exist
        if (hasRegionalVariants(lang)) {
          languageInfo.alternateLocales.forEach(locale => {
            const regionalHrefLang = convertLocaleToHreflang(locale);
            // Use same URL for all regional variants since we serve one version per language
            hreflangUrls.push({ lang: regionalHrefLang, url: primaryUrl });
          });
          
          // Add generic language code (e.g., 'en', 'zh-Hant') as fallback
          const genericHrefLang = getHreflangCode(lang);
          if (!hreflangUrls.some(item => item.lang === genericHrefLang)) {
            hreflangUrls.push({ lang: genericHrefLang, url: primaryUrl });
          }
        }
      });
    }
    
    // Helper function to generate URL for a language
    function generateUrlForLanguage(origin: string, lang: string, cleanPath: string, slug?: string): string {
      if (slug) {
        // For blog posts
        return `${origin}/${lang}/blog/${slug}`;
      } else if (cleanPath === 'blog') {
        // For blog listing page
        return `${origin}/${lang}/blog`;
      } else {
        // For other pages
        const langPrefix = `/${lang}`;
        const pathSuffix = cleanPath ? `/${cleanPath}` : '';
        return `${origin}${langPrefix}${pathSuffix}`;
      }
    }
    
    // Helper function to convert locale to hreflang format
    function convertLocaleToHreflang(locale: string): string {
      // Convert underscore locales to hreflang format
      // e.g., 'en_US' -> 'en-US', 'zh_Hant_TW' -> 'zh-Hant-TW'
      return locale.replace(/_/g, '-');
    }
    
    // Generate social image URL using effective image (product-specific default or explicit)
    const socialImageUrl = effectiveImage || BRAND_CONSTANTS.DEFAULT_IMAGE;
    const fullSocialImageUrl = socialImageUrl.startsWith('http') ? 
      socialImageUrl : `${BRAND_CONSTANTS.SITE_URL}${socialImageUrl}`;
    
    // Generate alt text for social image
    const socialImageAlt = `${title} - ${BRAND_CONSTANTS.COMPANY_NAME}`;
    
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
    
    // Generate geographic targeting information
    let geoTargetingMeta: Array<{ name: string; content: string }> = [];
    if (effectiveAvailableLanguages && effectiveAvailableLanguages.length > 0) {
      const currentLang = pathname.split('/')[0] as SupportedLanguage || 'en';
      const currentLanguageInfo = LANGUAGE_REGION_MAP[currentLang];
      
      if (currentLanguageInfo) {
        const geoTargeting = getGeoTargeting(currentLang);
        
        // Add geographic targeting meta tags
        geoTargetingMeta = [
          { name: 'geo.region', content: geoTargeting.regions.join(', ') },
          { name: 'geo.placename', content: geoTargeting.placenames.join(', ') },
          { name: 'ICBM', content: '' }, // Will be populated if we add coordinates later
        ].filter(meta => meta.content); // Remove empty content
        
        // Add enhanced organization schema with geographic data
        const enhancedOrganizationSchema = {
          ...organizationSchema,
          areaServed: geoTargeting.regions.map(region => ({
            '@type': 'Country',
            identifier: region
          })),
          availableLanguage: effectiveAvailableLanguages.map(langCode => {
            const lang = langCode as SupportedLanguage;
            const langInfo = LANGUAGE_REGION_MAP[lang];
            return {
              '@type': 'Language',
              name: langInfo?.language || lang,
              alternateName: getAllLocales(lang)
            };
          })
        };
        
        // Replace the basic organization schema with the enhanced one
        const organizationIndex = allStructuredData.findIndex(
          schema => schema['@type'] === 'Organization'
        );
        if (organizationIndex !== -1) {
          allStructuredData[organizationIndex] = enhancedOrganizationSchema;
        }
      }
    }
    
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
    
    // Add article data if it's an article type
    if (type === 'article' && author) {
      const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: title,
        description: description,
        image: fullSocialImageUrl,
        author: {
          '@type': 'Person',
          name: author
        },
        publisher: {
          '@type': 'Organization',
          name: BRAND_CONSTANTS.COMPANY_NAME,
          logo: {
            '@type': 'ImageObject',
            url: `${BRAND_CONSTANTS.SITE_URL}${BRAND_CONSTANTS.LOGO_URL}`
          }
        },
        datePublished: publishedTime,
        dateModified: modifiedTime || publishedTime,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': canonicalUrl
        }
      };
      allStructuredData.push(articleSchema);
    }
    
    return {
      canonicalUrl,
      hreflangUrls,
      socialImageUrl: fullSocialImageUrl,
      socialImageAlt,
      robotsContent,
      themeColor,
      allStructuredData,
      geoTargetingMeta
    };
  }, [location.pathname, title, description, effectiveImage, availableLanguages, slug, customCanonicalUrl, structuredData, breadcrumbs, faqs, type, author, publishedTime, modifiedTime, isPreview, productAssets]);
  
  const {
    canonicalUrl,
    hreflangUrls,
    socialImageUrl,
    socialImageAlt,
    robotsContent,
    themeColor,
    allStructuredData,
    geoTargetingMeta
  } = computedValues;
  
  // ==========================================================================
  // Render SEO Head Tags
  // ==========================================================================
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {tags.length > 0 && (
        <meta name="keywords" content={tags.join(', ')} />
      )}
      <meta name="robots" content={robotsContent} />
      
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
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={BRAND_CONSTANTS.COMPANY_NAME} />
      <meta property="og:image" content={socialImageUrl} />
      <meta property="og:image:alt" content={socialImageAlt} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/jpeg" />
      
      {/* Article-specific Open Graph tags */}
      {type === 'article' && author && (
        <>
          <meta property="article:author" content={author} />
          {publishedTime && <meta property="article:published_time" content={publishedTime} />}
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
          {tags.map(tag => (
            <meta key={tag} property="article:tag" content={tag} />
          ))}
        </>
      )}
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={BRAND_CONSTANTS.TWITTER_HANDLE} />
      <meta name="twitter:creator" content={BRAND_CONSTANTS.TWITTER_HANDLE} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={socialImageUrl} />
      <meta name="twitter:image:alt" content={socialImageAlt} />
      
      {/* Mobile and PWA Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      <meta name="theme-color" content={themeColor} />
      <meta name="msapplication-TileColor" content={themeColor} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={BRAND_CONSTANTS.COMPANY_NAME} />
      
      {/* Favicons and Icons - Note: Primary favicon is handled by FaviconManager */}
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color={themeColor} />
      <link rel="manifest" href="/manifest.json" />
      
      {/* DNS Prefetch and Preconnect for Performance */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      
      {/* Geographic Targeting Meta Tags */}
      {geoTargetingMeta.map((meta, index) => (
        <meta key={`geo-${index}`} name={meta.name} content={meta.content} />
      ))}
      
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
      
      {/* Performance Hints */}
      <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="" />
      
      {/* Security Headers */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="referrer" content="strict-origin-when-cross-origin" />
    </Helmet>
  );
};

// =============================================================================
// Memoized Export to Prevent Unnecessary Re-renders
// =============================================================================

// Use React.memo to prevent duplicate renders when props haven't changed
export const SEOHelmet = React.memo(SEOHelmetInternal, (prevProps, nextProps) => {
  // Custom comparison function to avoid unnecessary re-renders
  return (
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
    prevProps.slug === nextProps.slug &&
    prevProps.canonicalUrl === nextProps.canonicalUrl &&
    JSON.stringify(prevProps.additionalMeta) === JSON.stringify(nextProps.additionalMeta) &&
    JSON.stringify(prevProps.structuredData) === JSON.stringify(nextProps.structuredData) &&
    JSON.stringify(prevProps.breadcrumbs) === JSON.stringify(nextProps.breadcrumbs) &&
    JSON.stringify(prevProps.faqs) === JSON.stringify(nextProps.faqs) &&
    prevProps.isPreview === nextProps.isPreview
  );
});

// =============================================================================
// Default Export
// =============================================================================

export default SEOHelmet;

/**
 * Enhanced SEO Head Component for Seasalt.ai
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

import Head from 'next/head';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { SEO_CONFIG, type PageType, type SeoMetadata } from '../../config/seo';
import type { SupportedLanguage } from '../../constants/languages';
import { 
  generateCanonicalUrl,
  generateHreflangUrls,
  generatePageMetadata,
  generateSocialImageUrl,
  generateSocialImageAlt,
  generateOrganizationStructuredData,
  generateRobotsContent,
  generateThemeColor,
  SEOUtils
} from '../../utils/seo-enhanced';

// =============================================================================
// SEO Head Component Props Interface
// =============================================================================

export interface SEOHeadProps {
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
}

// =============================================================================
// Enhanced SEO Head Component
// =============================================================================

export const SEOHead: React.FC<SEOHeadProps> = ({
  pageType = 'home',
  language = 'en',
  customSeo,
  structuredData = [],
  breadcrumbs,
  faqs,
  socialImage,
  isPreview = false,
  canonicalUrl: customCanonicalUrl,
  additionalMeta = []
}) => {
  const router = useRouter();
  
  // ==========================================================================
  // Computed SEO Values
  // ==========================================================================
  
  const computedValues = useMemo(() => {
    // Get current pathname
    const pathname = router.asPath.split('?')[0];
    
    // Generate page metadata
    const metadata = generatePageMetadata(pageType, language, customSeo);
    
    // Generate URLs
    const canonicalUrl = customCanonicalUrl || generateCanonicalUrl(pathname, language);
    const hreflangUrls = generateHreflangUrls(pathname);
    const socialImageUrl = generateSocialImageUrl(pageType, language, socialImage);
    const socialImageAlt = generateSocialImageAlt(pageType, language);
    
    // Generate robots content
    const robotsContent = generateRobotsContent(pageType, language, isPreview);
    
    // Generate theme color
    const themeColor = generateThemeColor(language);
    
    // Combine all structured data
    const allStructuredData = [...structuredData];
    
    // Add organization data for homepage
    if (pageType === 'home') {
      allStructuredData.push(generateOrganizationStructuredData(language));
    }
    
    // Add breadcrumb data if provided
    if (breadcrumbs && breadcrumbs.length > 0) {
      const { generateBreadcrumbStructuredData } = SEOUtils;
      allStructuredData.push(generateBreadcrumbStructuredData(breadcrumbs, language));
    }
    
    // Add FAQ data if provided
    if (faqs && faqs.length > 0) {
      const { generateFAQStructuredData } = SEOUtils;
      allStructuredData.push(generateFAQStructuredData(faqs, language));
    }
    
    return {
      metadata,
      canonicalUrl,
      hreflangUrls,
      socialImageUrl,
      socialImageAlt,
      robotsContent,
      themeColor,
      allStructuredData
    };
  }, [pageType, language, customSeo, router.asPath, customCanonicalUrl, socialImage, isPreview, structuredData, breadcrumbs, faqs]);
  
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
    <Head>
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
      <meta property="og:site_name" content={SEO_CONFIG.brand.name} />
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
      <meta name="apple-mobile-web-app-title" content={SEO_CONFIG.brand.name} />
      
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
    </Head>
  );
};

// =============================================================================
// Hook for SEO Metadata Validation
// =============================================================================

export const useSEOValidation = (metadata: SeoMetadata) => {
  return useMemo(() => {
    const { validateSeoMetadata } = SEOUtils;
    return validateSeoMetadata(metadata);
  }, [metadata]);
};

// =============================================================================
// Default Export
// =============================================================================

export default SEOHead;

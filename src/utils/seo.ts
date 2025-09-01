import type { TFunction } from 'i18next';
import { getProductAssets, getDefaultOgImage } from './productAssets';

interface SEOData {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  canonicalUrl?: string;
}

interface SEOOptions {
  titleKey?: string;
  descriptionKey?: string;
  keywordsKey?: string;
  titleSuffix?: string;
  descriptionPrefix?: string;
  descriptionSuffix?: string;
  defaultImage?: string;
  canonicalUrl?: string;
}

/**
 * Generate standardized SEO data for pages using translation keys
 * 
 * @param t - Translation function from react-i18next
 * @param baseKey - Base translation key (e.g., 'pricing', 'channels.whatsapp')
 * @param options - Additional options for customizing SEO data
 * @returns SEO data object for use with SEOHelmet
 */
export const getSEOData = (
  t: TFunction,
  baseKey: string,
  options: SEOOptions = {}
): SEOData => {
  const {
    titleKey = 'title',
    descriptionKey = 'description',
    keywordsKey = 'keywords',
    titleSuffix = ' - Seasalt.ai',
    descriptionPrefix = '',
    descriptionSuffix = '',
    defaultImage, // If not provided, will use product-specific default
    canonicalUrl
  } = options;

  // Try to get title from translation
  let title = '';
  try {
    // First try dedicated SEO title
    title = t(`${baseKey}.seo.title`, { defaultValue: '' });
    
    // If no SEO title, use page title with suffix
    if (!title) {
      const pageTitle = t(`${baseKey}.${titleKey}`, { defaultValue: '' });
      title = pageTitle ? `${pageTitle}${titleSuffix}` : '';
    }
  } catch (error) {
    console.warn(`Failed to get title for SEO key: ${baseKey}`);
  }

  // Try to get description from translation
  let description = '';
  try {
    // First try dedicated SEO description
    description = t(`${baseKey}.seo.description`, { defaultValue: '' });
    
    // If no SEO description, try subtitle or description
    if (!description) {
      description = t(`${baseKey}.${descriptionKey}`, { defaultValue: '' }) ||
                   t(`${baseKey}.subtitle`, { defaultValue: '' });
    }
    
    // Add prefix/suffix if provided
    if (description) {
      description = `${descriptionPrefix}${description}${descriptionSuffix}`;
    }
  } catch (error) {
    console.warn(`Failed to get description for SEO key: ${baseKey}`);
  }

  // Try to get keywords from translation
  let keywords = '';
  try {
    keywords = t(`${baseKey}.seo.${keywordsKey}`, { defaultValue: '' });
  } catch (error) {
    // Keywords are optional, so don't warn
  }

  // If no defaultImage provided, use product-specific default based on canonical URL path
  let effectiveImage = defaultImage;
  if (!effectiveImage && canonicalUrl) {
    try {
      const url = new URL(canonicalUrl);
      effectiveImage = getProductAssets(url.pathname).ogDefault;
    } catch {
      // If URL parsing fails, use homepage default
      effectiveImage = getProductAssets('/').ogDefault;
    }
  } else if (!effectiveImage) {
    // No canonicalUrl either, use homepage default
    effectiveImage = getProductAssets('/').ogDefault;
  }

  return {
    title: title || 'Seasalt.ai',
    description: description || 'AI-powered omnichannel customer communication platform',
    ...(keywords && { keywords }),
    image: effectiveImage,
    ...(canonicalUrl && { canonicalUrl })
  };
};

/**
 * Generate canonical URL for a page
 * 
 * @param language - Current language
 * @param path - Page path without language prefix
 * @param baseUrl - Base URL (defaults to current origin)
 * @returns Canonical URL string
 */
export const getCanonicalUrl = (
  language: string,
  path: string,
  baseUrl?: string
): string => {
  const base = baseUrl || (typeof window !== 'undefined' ? window.location.origin : 'https://seasalt.ai');
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${base}/${language}${cleanPath}`;
};

/**
 * Generate SEO data for industry pages with standardized format
 */
export const getIndustrySEOData = (
  t: TFunction,
  industryKey: string,
  language: string
): SEOData => {
  const industryName = t(`industries.${industryKey}.title`, { defaultValue: industryKey });
  
  return getSEOData(t, `industries.${industryKey}`, {
    titleSuffix: ` Solutions - Seasalt.ai`,
    descriptionPrefix: `Discover how Seasalt.ai helps ${industryName.toLowerCase()} `,
    descriptionSuffix: ' with AI-powered customer communication solutions.',
    canonicalUrl: getCanonicalUrl(language, `/industries/${industryKey}`)
  });
};

/**
 * Generate SEO data for channel pages with standardized format
 */
export const getChannelSEOData = (
  t: TFunction,
  channelKey: string,
  language: string
): SEOData => {
  return getSEOData(t, `channels.${channelKey}`, {
    titleSuffix: ' Integration - Seasalt.ai',
    canonicalUrl: getCanonicalUrl(language, `/channels/${channelKey}`)
  });
};

/**
 * Generate SEO data for comparison pages with standardized format
 */
export const getComparisonSEOData = (
  t: TFunction,
  competitorKey: string,
  language: string
): SEOData => {
  const competitorName = t(`compare.${competitorKey}.name`, { defaultValue: competitorKey });
  
  return getSEOData(t, `compare.${competitorKey}`, {
    titleSuffix: ` Alternative - Seasalt.ai`,
    descriptionPrefix: `Compare Seasalt.ai vs ${competitorName}. `,
    descriptionSuffix: ' See why businesses choose our unified communication platform.',
    canonicalUrl: getCanonicalUrl(language, `/compare/${competitorKey}-alternative`)
  });
};

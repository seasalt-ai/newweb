/**
 * Advanced SEO Configuration System for Seasalt.ai
 * Based on SeaMeet's proven SEO optimization approach
 * 
 * This centralized system manages all SEO metadata, structured data,
 * and internationalization settings across the entire website.
 */

import { SupportedLanguage } from '../constants/languages';

// =============================================================================
// Core SEO Configuration Interfaces
// =============================================================================

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

export interface LocalizedSEOConfig {
  [language: string]: SEOConfig;
}

export interface PageSEOConfig {
  [pagePath: string]: LocalizedSEOConfig;
}

// =============================================================================
// Brand Constants (Non-translatable)
// =============================================================================

export const BRAND_CONSTANTS = {
  COMPANY_NAME: 'Seasalt.ai',
  SITE_URL: 'https://seasalt.ai',
  DEFAULT_IMAGE: '/seasalt-ai-og-default.png',
  LOGO_URL: '/seasalt-ai-logo.png',
  TWITTER_HANDLE: '@seasalt_ai',
  THEME_COLOR: '#2563eb',
  FAVICON: '/seasalt-ai-favicon.ico',
  APPLE_TOUCH_ICON: '/apple-touch-icon.png',
  MANIFEST: '/site.webmanifest'
} as const;

// =============================================================================
// Localized SEO Content (English & zh-TW)
// =============================================================================

export const BASE_SEO: LocalizedSEOConfig = {
  en: {
    title: 'Seasalt.ai | Omni-Channel Contact Center for Small Businesses',
    description: 'Stop juggling apps. Unify every customer call, WhatsApp, and chat in one simple inbox. The all-in-one contact center built for small businesses.',
    keywords: 'contact center, omnichannel, AI customer service, small business, customer support, SeaChat, SeaX, SeaVoice',
    image: BRAND_CONSTANTS.DEFAULT_IMAGE
  },
  'zh-TW': {
    title: 'Seasalt.ai | 小型企業的全通路聯絡中心',
    description: '停止在多個應用程式之間切換。將每通客戶電話、WhatsApp 和聊天統一到一個簡單的收件匣中。專為小型企業打造的一站式聯絡中心。',
    keywords: '聯絡中心, 全通路, AI客戶服務, 小型企業, 客戶支援, SeaChat, SeaX, SeaVoice',
    image: BRAND_CONSTANTS.DEFAULT_IMAGE
  }
};

// =============================================================================
// Page-Specific SEO Configurations
// =============================================================================

export const PAGE_SEO: PageSEOConfig = {
  // Homepage
  '': {
    en: {
      title: 'Seasalt.ai | Omni-Channel Contact Center for Small Businesses',
      description: 'Stop juggling apps. Unify every customer call, WhatsApp, and chat in one simple inbox. The all-in-one contact center built for small businesses.',
      keywords: 'contact center, omnichannel, AI customer service, small business, customer support, SeaChat, SeaX, SeaVoice, unified communications',
      image: '/seasalt-ai-homepage-og.png'
    },
    'zh-TW': {
      title: 'Seasalt.ai | 小型企業的全通路聯絡中心',
      description: '停止在多個應用程式之間切換。將每通客戶電話、WhatsApp 和聊天統一到一個簡單的收件匣中。專為小型企業打造的一站式聯絡中心。',
      keywords: '聯絡中心, 全通路, AI客戶服務, 小型企業, 客戶支援, SeaChat, SeaX, SeaVoice, 統一通訊',
      image: '/seasalt-ai-homepage-og.png'
    }
  },

  // Pricing Page
  'pricing': {
    en: {
      title: 'Pricing | Transparent, Scalable Plans - Seasalt.ai',
      description: 'Simple, transparent pricing for businesses of all sizes. Start free with SeaChat, scale with SeaX omnichannel, or go enterprise. No hidden fees.',
      keywords: 'pricing, contact center pricing, omnichannel pricing, SeaChat pricing, SeaX pricing, business plans, free chatbot',
      image: '/seasalt-ai-pricing-og.png'
    },
    'zh-TW': {
      title: '價格 | 透明、可擴展的方案 - Seasalt.ai',
      description: '適合各種規模企業的簡單、透明定價。從免費的 SeaChat 開始，擴展到 SeaX 全通路，或選擇企業版。無隱藏費用。',
      keywords: '價格, 聯絡中心價格, 全通路價格, SeaChat價格, SeaX價格, 商業方案, 免費聊天機器人',
      image: '/seasalt-ai-pricing-og.png'
    }
  },

  // SeaChat Product Page
  'seachat': {
    en: {
      title: 'SeaChat | Free AI Chatbot Platform - Seasalt.ai',
      description: 'Build powerful AI chatbots for free. SeaChat offers unlimited conversations, 4 human agents, and enterprise AI models. Start building today.',
      keywords: 'AI chatbot, free chatbot platform, customer service chatbot, SeaChat, conversational AI, automated customer support',
      image: '/seachat-product-og.png'
    },
    'zh-TW': {
      title: 'SeaChat | 免費AI聊天機器人平台 - Seasalt.ai',
      description: '免費建立強大的AI聊天機器人。SeaChat提供無限對話、4個人工客服和企業級AI模型。立即開始建立。',
      keywords: 'AI聊天機器人, 免費聊天機器人平台, 客戶服務聊天機器人, SeaChat, 對話式AI, 自動化客戶支援',
      image: '/seachat-product-og.png'
    }
  },

  // SeaX Product Page
  'seax': {
    en: {
      title: 'SeaX | Omni-Channel Communication Platform - Seasalt.ai',
      description: 'Unify WhatsApp, SMS, voice calls and more in one platform. SeaX provides omnichannel communication for scaling businesses.',
      keywords: 'omnichannel platform, WhatsApp business, SMS marketing, voice communication, SeaX, unified messaging',
      image: '/seax-product-og.png'
    },
    'zh-TW': {
      title: 'SeaX | 全通路溝通平台 - Seasalt.ai',
      description: '在一個平台中統一WhatsApp、SMS、語音通話等。SeaX為成長中的企業提供全通路溝通解決方案。',
      keywords: '全通路平台, WhatsApp商業版, SMS行銷, 語音通訊, SeaX, 統一訊息',
      image: '/seax-product-og.png'
    }
  },

  // SeaVoice Product Page
  'seavoice': {
    en: {
      title: 'SeaVoice | AI-Powered Voice Communication - Seasalt.ai',
      description: 'Transform your voice communications with AI. SeaVoice offers intelligent call routing, voice analytics, and automated responses.',
      keywords: 'AI voice, call center software, voice analytics, SeaVoice, intelligent call routing, automated phone system',
      image: '/seavoice-product-og.png'
    },
    'zh-TW': {
      title: 'SeaVoice | AI驅動的語音通訊 - Seasalt.ai',
      description: '用AI改變您的語音通訊。SeaVoice提供智能通話路由、語音分析和自動化回應。',
      keywords: 'AI語音, 客服中心軟體, 語音分析, SeaVoice, 智能通話路由, 自動化電話系統',
      image: '/seavoice-product-og.png'
    }
  },

  // Blog
  'blog': {
    en: {
      title: 'Blog | Seasalt.ai Insights',
      description: 'Stay up-to-date with the latest insights on AI, customer service, and business automation from the Seasalt.ai team.',
      keywords: 'AI insights, customer service blog, business automation, contact center trends, Seasalt.ai blog',
      image: '/seasalt-ai-blog-og.png'
    },
    'zh-TW': {
      title: '部落格 | Seasalt.ai 見解',
      description: '透過Seasalt.ai團隊獲得AI、客戶服務和商業自動化的最新見解。',
      keywords: 'AI見解, 客戶服務部落格, 商業自動化, 聯絡中心趋势, Seasalt.ai部落格',
      image: '/seasalt-ai-blog-og.png'
    }
  },

  // Company Page
  'company': {
    en: {
      title: 'About Us | Seasalt.ai',
      description: 'Learn about the team behind Seasalt.ai and our mission to make customer communication simpler for businesses worldwide.',
      keywords: 'about Seasalt.ai, company information, AI customer service company, team, mission, contact center innovation',
      image: '/seasalt-ai-company-og.png'
    },
    'zh-TW': {
      title: '關於我們 | Seasalt.ai',
      description: '了解Seasalt.ai背後的團隊以及我們讓全球企業客戶溝通更簡單的使命。',
      keywords: '關於Seasalt.ai, 公司資訊, AI客戶服務公司, 團隊, 使命, 聯絡中心創新',
      image: '/seasalt-ai-company-og.png'
    }
  },

  // Channels - WhatsApp
  'channels/whatsapp': {
    en: {
      title: 'WhatsApp Business Integration | Seasalt.ai',
      description: 'Integrate WhatsApp Business with your contact center. Manage WhatsApp conversations alongside calls, emails, and chat in one unified inbox.',
      keywords: 'WhatsApp Business, WhatsApp integration, customer service WhatsApp, unified inbox, omnichannel WhatsApp',
      image: '/channels-whatsapp-og.png'
    },
    'zh-TW': {
      title: 'WhatsApp商業版整合 | Seasalt.ai',
      description: '將WhatsApp商業版與您的聯絡中心整合。在統一收件匣中與通話、電子郵件和聊天一起管理WhatsApp對話。',
      keywords: 'WhatsApp商業版, WhatsApp整合, 客戶服務WhatsApp, 統一收件匣, 全通路WhatsApp',
      image: '/channels-whatsapp-og.png'
    }
  },

  // Industries - Healthcare
  'industries/healthcare': {
    en: {
      title: 'Healthcare Contact Center Solutions | Seasalt.ai',
      description: 'HIPAA-compliant contact center solutions for healthcare providers. Secure patient communications with AI-powered automation.',
      keywords: 'healthcare contact center, HIPAA compliant, patient communication, medical customer service, healthcare automation',
      image: '/industries-healthcare-og.png'
    },
    'zh-TW': {
      title: '醫療保健聯絡中心解決方案 | Seasalt.ai',
      description: '符合HIPAA規範的醫療保健提供者聯絡中心解決方案。使用AI驅動的自動化進行安全的患者溝通。',
      keywords: '醫療保健聯絡中心, HIPAA合規, 患者溝通, 醫療客戶服務, 醫療保健自動化',
      image: '/industries-healthcare-og.png'
    }
  }
};

// =============================================================================
// SEO Utility Functions
// =============================================================================

/**
 * Get SEO configuration for a specific page and language
 * @param pagePath - The page path (e.g., 'pricing', 'seachat', 'channels/whatsapp')
 * @param language - The language code (e.g., 'en', 'zh-TW')
 * @returns SEOConfig object with localized content
 */
export const getSEOConfig = (pagePath: string, language: SupportedLanguage = 'en'): SEOConfig => {
  // Clean up the page path
  const cleanPath = pagePath.replace(/^\/+|\/+$/g, '');
  
  // Check if we have specific configuration for this page and language
  const pageConfig = PAGE_SEO[cleanPath];
  if (pageConfig && pageConfig[language]) {
    return pageConfig[language];
  }
  
  // Check if we have the page in English as fallback
  if (pageConfig && pageConfig['en'] && language !== 'en') {
    console.warn(`SEO: No ${language} translation found for page '${cleanPath}', falling back to English`);
    return pageConfig['en'];
  }
  
  // Fall back to base SEO configuration
  return BASE_SEO[language] || BASE_SEO['en'];
};

/**
 * Get blog post SEO configuration
 * @param title - Blog post title
 * @param description - Blog post description
 * @param slug - Blog post slug
 * @param language - Language code
 * @param publishedTime - Publication date
 * @param author - Author name
 * @param tags - Blog post tags
 * @returns SEOConfig for blog post
 */
export const getBlogPostSEO = (
  title: string,
  description: string,
  slug: string,
  language: SupportedLanguage = 'en',
  publishedTime?: string,
  author?: string,
  tags?: string[]
): SEOConfig => {
  const brandName = BRAND_CONSTANTS.COMPANY_NAME;
  const blogSuffix = language === 'zh-TW' ? '部落格' : 'Blog';
  
  return {
    title: `${title} | ${brandName} ${blogSuffix}`,
    description,
    keywords: tags ? tags.join(', ') : 
      (language === 'zh-TW' ? 
        'AI, 客戶服務, 商業自動化, 聯絡中心' : 
        'AI, customer service, business automation, contact center'),
    image: '/seasalt-ai-blog-post-default.png',
    articleData: {
      publishedTime,
      modifiedTime: publishedTime,
      author: author || 'Seasalt.ai Team',
      section: language === 'zh-TW' ? 'AI 技術' : 'AI Technology',
      tags
    }
  };
};

/**
 * Generate canonical URL for a page
 * @param pagePath - The page path
 * @param language - The language code
 * @returns Canonical URL
 */
export const getCanonicalUrl = (pagePath: string, language: SupportedLanguage = 'en'): string => {
  const cleanPath = pagePath.replace(/^\/+|\/+$/g, '');
  const langPrefix = language === 'en' ? '' : `/${language}`;
  const pathSuffix = cleanPath ? `/${cleanPath}` : '';
  
  return `${BRAND_CONSTANTS.SITE_URL}${langPrefix}${pathSuffix}`;
};

/**
 * Generate all hreflang URLs for a page
 * @param pagePath - The page path
 * @param supportedLanguages - Array of supported language codes
 * @returns Array of hreflang URL objects
 */
export const generateHreflangUrls = (
  pagePath: string, 
  supportedLanguages: readonly SupportedLanguage[] = ['en', 'zh-TW']
): Array<{ lang: string; url: string }> => {
  const cleanPath = pagePath.replace(/^\/+|\/+$/g, '');
  
  return supportedLanguages.map(lang => {
    const langCode = lang === 'zh-TW' ? 'zh-Hant' : 
                    lang === 'zh-CN' ? 'zh-Hans' : lang;
    
    return {
      lang: langCode,
      url: getCanonicalUrl(cleanPath, lang)
    };
  });
};

/**
 * Check if SEO configuration exists for a specific page and language
 * @param pagePath - The page path
 * @param language - The language code
 * @returns Boolean indicating if configuration exists
 */
export const hasSEOConfig = (pagePath: string, language: SupportedLanguage): boolean => {
  const cleanPath = pagePath.replace(/^\/+|\/+$/g, '');
  return !!(PAGE_SEO[cleanPath] && PAGE_SEO[cleanPath][language]);
};

/**
 * Get all available languages for a specific page
 * @param pagePath - The page path
 * @returns Array of available language codes
 */
export const getAvailableLanguagesForPage = (pagePath: string): SupportedLanguage[] => {
  const cleanPath = pagePath.replace(/^\/+|\/+$/g, '');
  const pageConfig = PAGE_SEO[cleanPath];
  
  if (!pageConfig) {
    return ['en', 'zh-TW']; // Default languages
  }
  
  return Object.keys(pageConfig) as SupportedLanguage[];
};

// =============================================================================
// Export all configurations for easy access
// =============================================================================

export default {
  BRAND_CONSTANTS,
  BASE_SEO,
  PAGE_SEO,
  getSEOConfig,
  getBlogPostSEO,
  getCanonicalUrl,
  generateHreflangUrls,
  hasSEOConfig,
  getAvailableLanguagesForPage
};

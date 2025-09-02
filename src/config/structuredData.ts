/**
 * Central configuration for Structured Data (JSON-LD)
 * 
 * This file provides the foundational data structures and constants
 * used to generate schema.org structured data across the website.
 */

import { SUPPORTED_LANGUAGES, LANGUAGE_REGION_MAP } from '../constants/languages';

// =============================================================================
// Schema.org Entity IDs (for cross-referencing schemas)
// =============================================================================

export const SCHEMA_IDS = {
  ORGANIZATION: 'https://seasalt.ai/#organization',
  WEBSITE: 'https://seasalt.ai/#website',
  SEACHAT_PRODUCT: 'https://seasalt.ai/#seachat',
  SEAX_PRODUCT: 'https://seasalt.ai/#seax',
  SEAVOICE_PRODUCT: 'https://seasalt.ai/#seavoice',
} as const;

// =============================================================================
// Organization Information
// =============================================================================

export interface OrganizationInfo {
  name: string;
  alternateName: string;
  url: string;
  logo: {
    url: string;
    width: number;
    height: number;
  };
  foundingDate: string;
  contactPoint: {
    email: string;
    contactType: string;
    availableLanguage: string[];
  };
  sameAs: string[];
  areaServed: string[]; // ISO country codes
  availableLanguage: string[];
}

export const ORGANIZATION_INFO: OrganizationInfo = {
  name: 'Seasalt.ai',
  alternateName: 'Seasalt AI',
  url: 'https://seasalt.ai',
  logo: {
    url: 'https://seasalt.ai/seasalt-ai-logo.png',
    width: 1200,
    height: 630
  },
  foundingDate: '2018',
  contactPoint: {
    email: 'info@seasalt.ai',
    contactType: 'customer service',
    availableLanguage: SUPPORTED_LANGUAGES.map(lang => 
      LANGUAGE_REGION_MAP[lang]?.language || lang
    )
  },
  sameAs: [
    'https://www.linkedin.com/company/seasalt-ai',
    'https://twitter.com/seasalt_ai',
    'https://github.com/seasalt-ai',
    'https://www.crunchbase.com/organization/seasalt-ai',
    'https://www.facebook.com/seasalt.ai',
    'https://www.youtube.com/c/seasalt-ai'
  ],
  // ISO country codes for primary markets
  areaServed: [
    'US', 'CA', 'GB', 'AU', 'SG', // English markets
    'TW', 'HK', 'MO', // Traditional Chinese markets
    'JP', 'KR', // Asian markets
    'DE', 'FR', 'ES', 'IT', 'NL', // European markets
    'IN', 'ID', 'MY', 'TH', 'VN', 'PH', // SEA markets
    'BR', 'MX', 'AR', // Latin American markets
    'AE', 'SA' // Middle East markets
  ],
  availableLanguage: [...SUPPORTED_LANGUAGES]
};

// =============================================================================
// Product Information
// =============================================================================

export type ProductKey = 'seachat' | 'seax' | 'seavoice';

export interface ProductInfo {
  name: string;
  description: string;
  applicationCategory: string;
  operatingSystem: string;
  features: string[];
  defaultOffer: {
    price: string;
    priceCurrency: string;
    availability: string;
    description: string;
  };
  image: string;
  screenshots: string[];
  aggregateRating?: {
    ratingValue: number;
    bestRating: number;
    ratingCount: number;
  };
}

export const PRODUCTS_INFO: Record<ProductKey, ProductInfo> = {
  seachat: {
    name: 'SeaChat',
    description: 'Free AI chatbot platform with unlimited conversations, 4 human agents, and enterprise AI models. Build powerful conversational AI experiences.',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, iOS, Android',
    features: [
      'Unlimited AI conversations',
      '4 human agents included',
      'Enterprise AI models (GPT-4, Claude)',
      'Omnichannel integration',
      'Knowledge base management',
      'Advanced analytics',
      'Custom branding',
      'API access'
    ],
    defaultOffer: {
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      description: 'Free forever plan with unlimited conversations and 4 human agents'
    },
    image: '/products/seachat-og-image.jpg',
    screenshots: [
      '/products/seachat-dashboard.jpg',
      '/products/seachat-chat-interface.jpg',
      '/products/seachat-analytics.jpg'
    ],
    aggregateRating: {
      ratingValue: 4.8,
      bestRating: 5.0,
      ratingCount: 1247
    }
  },
  seax: {
    name: 'SeaX',
    description: 'Omnichannel communication platform that unifies WhatsApp, SMS, voice calls, and more in one dashboard. Scale your customer communications.',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, iOS, Android',
    features: [
      'WhatsApp Business integration',
      'SMS marketing campaigns',
      'Voice call management',
      'Unified inbox',
      'Team collaboration',
      'Automation workflows',
      'Contact management',
      'Performance analytics'
    ],
    defaultOffer: {
      price: '99',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      description: 'Professional plan starting at $99/month with unlimited channels'
    },
    image: '/products/seax-og-image.jpg',
    screenshots: [
      '/products/seax-omnichannel.jpg',
      '/products/seax-whatsapp.jpg',
      '/products/seax-analytics.jpg'
    ],
    aggregateRating: {
      ratingValue: 4.7,
      bestRating: 5.0,
      ratingCount: 892
    }
  },
  seavoice: {
    name: 'SeaVoice',
    description: 'AI-powered voice communication platform with intelligent call routing, voice analytics, and automated responses. Transform your voice operations.',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, SIP, PSTN',
    features: [
      'AI voice agents',
      'Intelligent call routing',
      'Voice analytics',
      'Call recording & transcription',
      'Sentiment analysis',
      'Multi-language support',
      'CRM integration',
      'Real-time monitoring'
    ],
    defaultOffer: {
      price: '199',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      description: 'Enterprise plan starting at $199/month with unlimited voice channels'
    },
    image: '/products/seavoice-og-image.jpg',
    screenshots: [
      '/products/seavoice-dashboard.jpg',
      '/products/seavoice-analytics.jpg',
      '/products/seavoice-call-center.jpg'
    ],
    aggregateRating: {
      ratingValue: 4.9,
      bestRating: 5.0,
      ratingCount: 634
    }
  }
};

// =============================================================================
// Website Information
// =============================================================================

export interface WebsiteInfo {
  name: string;
  url: string;
  description: string;
  inLanguage: string[];
  potentialAction: {
    '@type': string;
    target: {
      '@type': string;
      urlTemplate: string;
      'query-input': string;
    };
  };
}

export const WEBSITE_INFO: WebsiteInfo = {
  name: 'Seasalt.ai',
  url: 'https://seasalt.ai',
  description: 'Leading AI conversation intelligence platform offering omnichannel customer communication solutions for businesses of all sizes.',
  inLanguage: SUPPORTED_LANGUAGES.map(lang => 
    LANGUAGE_REGION_MAP[lang]?.primaryLocale.replace('_', '-') || lang
  ),
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://seasalt.ai/search?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  }
};

// =============================================================================
// Schema.org Availability Constants
// =============================================================================

export const SCHEMA_AVAILABILITY = {
  IN_STOCK: 'https://schema.org/InStock',
  OUT_OF_STOCK: 'https://schema.org/OutOfStock',
  PRE_ORDER: 'https://schema.org/PreOrder',
  IN_STORE_ONLY: 'https://schema.org/InStoreOnly',
  ONLINE_ONLY: 'https://schema.org/OnlineOnly',
  LIMITED_AVAILABILITY: 'https://schema.org/LimitedAvailability'
} as const;

export type SchemaAvailability = typeof SCHEMA_AVAILABILITY[keyof typeof SCHEMA_AVAILABILITY];

// =============================================================================
// Common Schema.org Types
// =============================================================================

export const SCHEMA_CONTEXT = 'https://schema.org';

export const COMMON_SCHEMA_TYPES = {
  ORGANIZATION: 'Organization',
  WEBSITE: 'WebSite',
  WEBPAGE: 'WebPage',
  SOFTWARE_APPLICATION: 'SoftwareApplication',
  OFFER: 'Offer',
  AGGREGATE_RATING: 'AggregateRating',
  IMAGE_OBJECT: 'ImageObject',
  CONTACT_POINT: 'ContactPoint',
  BREADCRUMB_LIST: 'BreadcrumbList',
  LIST_ITEM: 'ListItem',
  FAQ_PAGE: 'FAQPage',
  QUESTION: 'Question',
  ANSWER: 'Answer',
  ARTICLE: 'Article',
  PERSON: 'Person',
  SEARCH_ACTION: 'SearchAction',
  ENTRY_POINT: 'EntryPoint'
} as const;

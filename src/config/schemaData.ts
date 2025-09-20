/**
 * Schema.org Structured Data Configuration for Seasalt.ai
 * 
 * This file provides the foundational data structures and business information
 * used to generate schema.org structured data across the website.
 */

import { languages, type SupportedLanguage } from '../i18n/helpers';

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
// Common Schema Types and Context
// =============================================================================

export const SCHEMA_CONTEXT = 'https://schema.org';

export const COMMON_SCHEMA_TYPES = {
  ORGANIZATION: 'Organization',
  WEBSITE: 'WebSite',
  WEBPAGE: 'WebPage',
  PRODUCT: 'Product',
  SOFTWARE_APPLICATION: 'SoftwareApplication',
  OFFER: 'Offer',
  BREADCRUMB_LIST: 'BreadcrumbList',
  LIST_ITEM: 'ListItem',
  FAQ_PAGE: 'FAQPage',
  QUESTION: 'Question',
  ANSWER: 'Answer',
  ARTICLE: 'Article',
  IMAGE_OBJECT: 'ImageObject',
  CONTACT_POINT: 'ContactPoint',
  SEARCH_ACTION: 'SearchAction',
  ENTRY_POINT: 'EntryPoint'
} as const;

// =============================================================================
// Organization Information
// =============================================================================

export interface OrganizationInfo {
  name: string;
  alternateName: string;
  url: string;
  description: string;
  industry: string;
  logo: {
    url: string;
    width: number;
    height: number;
  };
  foundingDate: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    addressCountry: string;
    postalCode: string;
  };
  telephone?: string;
  contactPoint: {
    email: string;
    contactType: string;
    availableLanguage: string[];
  };
  aggregateRating?: {
    ratingValue: number;
    bestRating: number;
    ratingCount: number;
  };
  numberOfEmployees?: {
    minValue: number;
    maxValue: number;
  };
  sameAs: string[];
  areaServed: string[]; // ISO country codes
  availableLanguage: string[];
}

export const ORGANIZATION_INFO: OrganizationInfo = {
  name: 'Seasalt.ai',
  alternateName: 'Seasalt AI',
  url: 'https://seasalt.ai',
  description: 'Leading AI conversation intelligence platform offering omnichannel customer communication solutions for businesses of all sizes.',
  industry: 'Software Development',
  logo: {
    url: 'https://seasalt.ai/seasalt-ai-logo.png',
    width: 1200,
    height: 630
  },
  foundingDate: '2020',
  address: {
    streetAddress: 'Downtown',
    addressLocality: 'Bellevue',
    addressRegion: 'WA',
    addressCountry: 'US',
    postalCode: '98004'
  },
  telephone: '+1-SMB-AI-AGENT',
  contactPoint: {
    email: 'info@seasalt.ai',
    contactType: 'customer service',
    availableLanguage: Object.keys(languages)
  },
  aggregateRating: {
    ratingValue: 4.8,
    bestRating: 5.0,
    ratingCount: 2847
  },
  numberOfEmployees: {
    minValue: 5,
    maxValue: 50
  },
  sameAs: [
    'https://www.linkedin.com/company/seasalt-ai/',
    'https://twitter.com/SeasaltAI',
    'https://www.youtube.com/@seasaltai',
    'https://discord.gg/VgAWg3c7rU'
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
  availableLanguage: Object.keys(languages)
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
  description: 'AI-powered omnichannel customer communication platform for businesses of all sizes',
  inLanguage: Object.keys(languages),
  potentialAction: {
    '@type': COMMON_SCHEMA_TYPES.SEARCH_ACTION,
    target: {
      '@type': COMMON_SCHEMA_TYPES.ENTRY_POINT,
      urlTemplate: 'https://seasalt.ai/search?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  }
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
  image: string;
  screenshots: string[];
  aggregateRating?: {
    ratingValue: number;
    bestRating: number;
    ratingCount: number;
  };
  offers: {
    price: string;
    priceCurrency: string;
    availability: string;
    description: string;
  };
}

// Static product information (non-localized)
export const PRODUCTS_INFO: Record<ProductKey, Omit<ProductInfo, 'description' | 'features'>> = {
  seachat: {
    name: 'SeaChat',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, iOS, Android',
    image: '/seachat-logo.png',
    screenshots: [
      '/products/seachat-kb.png',
      '/products/seachat-webchat.png',
      '/products/seachat-conv.png'
    ],
    aggregateRating: {
      ratingValue: 4.8,
      bestRating: 5.0,
      ratingCount: 1247
    },
    offers: {
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      description: 'Free forever plan with premium options available'
    }
  },
  seax: {
    name: 'SeaX',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, iOS, Android',
    image: '/seax-logo.png',
    screenshots: [
      '/products/seax-compose.png',
      '/products/seax-dialpad.png',
      '/products/seax-whatsapp.png',
      '/products/seax-number.png'
    ],
    aggregateRating: {
      ratingValue: 4.7,
      bestRating: 5.0,
      ratingCount: 892
    },
    offers: {
      price: '19.99',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      description: 'Professional omnichannel communication platform'
    }
  },
  seavoice: {
    name: 'SeaVoice',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, SIP, PSTN',
    image: '/seavoice-logo.png',
    screenshots: [
      '/products/seavoice-stt.png',
      '/products/seavoice-tts.png',
      '/products/seavoice-discord.png'
    ],
    aggregateRating: {
      ratingValue: 4.9,
      bestRating: 5.0,
      ratingCount: 634
    },
    offers: {
      price: '29.99',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      description: 'AI-powered voice communication platform'
    }
  }
};

// =============================================================================
// Schema Availability Types
// =============================================================================

export type SchemaAvailability = 
  | 'https://schema.org/InStock'
  | 'https://schema.org/OutOfStock'
  | 'https://schema.org/PreOrder'
  | 'https://schema.org/BackOrder'
  | 'https://schema.org/Discontinued';

export const SCHEMA_AVAILABILITY = {
  IN_STOCK: 'https://schema.org/InStock' as const,
  OUT_OF_STOCK: 'https://schema.org/OutOfStock' as const,
  PRE_ORDER: 'https://schema.org/PreOrder' as const,
  BACK_ORDER: 'https://schema.org/BackOrder' as const,
  DISCONTINUED: 'https://schema.org/Discontinued' as const
} as const;

// =============================================================================
// Localized Product Descriptions
// =============================================================================

export const LOCALIZED_PRODUCT_DESCRIPTIONS: Record<ProductKey, Record<string, string>> = {
  seachat: {
    'en': 'Free AI chatbot platform with unlimited conversations, 4 human agents, and enterprise AI models. Build powerful conversational AI experiences.',
    'zh-tw': '免費的 AI 聊天機器人平台，提供無限對話、4 名人工客服和企業級 AI 模型。打造強大的對話式 AI 體驗。',
    'zh-cn': '免费的 AI 聊天机器人平台，提供无限对话、4 名人工客服和企业级 AI 模型。打造强大的对话式 AI 体验。',
    'es': 'Plataforma de chatbot de IA gratuita con conversaciones ilimitadas, 4 agentes humanos y modelos de IA empresariales.',
    'fr': 'Plateforme de chatbot IA gratuite avec conversations illimitées, 4 agents humains et modèles d\'IA d\'entreprise.',
    'de': 'Kostenlose KI-Chatbot-Plattform mit unbegrenzten Gesprächen, 4 menschlichen Agenten und Enterprise-KI-Modellen.',
    'ja': '無制限の会話、4人のヒューマンエージェント、エンタープライズAIモデルを備えた無料のAIチャットボットプラットフォーム。',
    'ko': '무제한 대화, 4명의 휴먼 에이전트, 엔터프라이즈 AI 모델을 제공하는 무료 AI 챗봇 플랫폼.'
  },
  seax: {
    'en': 'Omnichannel communication platform that unifies WhatsApp, SMS, voice calls, and more in one dashboard. Scale your customer communications.',
    'zh-tw': '全通路溝通平台，將 WhatsApp、簡訊、語音通話等整合在一個儀表板中。擴展您的客戶溝通。',
    'zh-cn': '全渠道沟通平台，将 WhatsApp、短信、语音通话等整合在一个仪表板中。扩展您的客户沟通。',
    'es': 'Plataforma de comunicación omnicanal que unifica WhatsApp, SMS, llamadas de voz y más en un solo panel.',
    'fr': 'Plateforme de communication omnicanale qui unifie WhatsApp, SMS, appels vocaux et plus encore dans un seul tableau de bord.',
    'de': 'Omnichannel-Kommunikationsplattform, die WhatsApp, SMS, Sprachanrufe und mehr in einem Dashboard vereint.',
    'ja': 'WhatsApp、SMS、音声通話などを1つのダッシュボードに統合するオムニチャネルコミュニケーションプラットフォーム。',
    'ko': 'WhatsApp, SMS, 음성 통화 등을 하나의 대시보드에 통합하는 옴니채널 커뮤니케이션 플랫폼.'
  },
  seavoice: {
    'en': 'AI-powered voice communication platform with intelligent call routing, voice analytics, and automated responses. Transform your voice operations.',
    'zh-tw': '採用 AI 技術的語音溝通平台，具備智能通話路由、語音分析和自動化回應。轉型您的語音營運。',
    'zh-cn': '采用 AI 技术的语音沟通平台，具备智能通话路由、语音分析和自动化响应。转型您的语音运营。',
    'es': 'Plataforma de comunicación de voz impulsada por IA con enrutamiento inteligente de llamadas, analítica de voz y respuestas automatizadas.',
    'fr': 'Plateforme de communication vocale alimentée par l\'IA avec routage intelligent des appels, analytique vocale et réponses automatisées.',
    'de': 'KI-gestützte Sprachkommunikationsplattform mit intelligentem Anrufrouting, Sprachanalysen und automatisierten Antworten.',
    'ja': 'インテリジェントなコールルーティング、音声分析、自動応答を備えたAI音声コミュニケーションプラットフォーム。',
    'ko': '지능형 통화 라우팅, 음성 분석, 자동 응답을 갖춘 AI 기반 음성 커뮤니케이션 플랫폼.'
  }
};

// =============================================================================
// Helper Functions
// =============================================================================

/**
 * Get localized product description
 */
export function getLocalizedProductDescription(productKey: ProductKey, language: string): string {
  return LOCALIZED_PRODUCT_DESCRIPTIONS[productKey][language] || 
         LOCALIZED_PRODUCT_DESCRIPTIONS[productKey]['en'];
}

/**
 * Get complete product information with localization
 */
export function getLocalizedProductInfo(productKey: ProductKey, language: string = 'en'): ProductInfo {
  const staticInfo = PRODUCTS_INFO[productKey];
  const localizedDescription = getLocalizedProductDescription(productKey, language);
  
  return {
    ...staticInfo,
    description: localizedDescription,
    features: getLocalizedProductFeatures(productKey, language)
  };
}

/**
 * Get localized product features
 */
export function getLocalizedProductFeatures(productKey: ProductKey, language: string): string[] {
  const features: Record<ProductKey, Record<string, string[]>> = {
    seachat: {
      'en': [
        'Unlimited AI conversations',
        '1 human agent included (free plan)',
        'Enterprise AI models (GPT-4, Claude)',
        'Omnichannel integration',
        'Knowledge base management',
        'Advanced analytics',
        'Custom branding',
        'API access'
      ],
      'zh-tw': [
        '無限AI對話',
        '包含1位人工客服（免費方案）',
        '企業級AI模型（GPT-4、Claude）',
        '全通路整合',
        '知識庫管理',
        '進階分析',
        '客製化品牌',
        'API存取'
      ]
    },
    seax: {
      'en': [
        'WhatsApp Business integration',
        'SMS marketing campaigns',
        'Voice call management',
        'Unified inbox',
        'Team collaboration',
        'Automation workflows',
        'Contact management',
        'Performance analytics'
      ],
      'zh-tw': [
        'WhatsApp商業整合',
        'SMS行銷活動',
        '語音通話管理',
        '統一收件匣',
        '團隊協作',
        '自動化工作流程',
        '聯絡人管理',
        '效能分析'
      ]
    },
    seavoice: {
      'en': [
        'AI voice agents',
        'Intelligent call routing',
        'Voice analytics',
        'Speech-to-text',
        'Text-to-speech',
        'Call recording',
        'Real-time monitoring',
        'CRM integration'
      ],
      'zh-tw': [
        'AI語音代理',
        '智能通話路由',
        '語音分析',
        '語音轉文字',
        '文字轉語音',
        '通話錄音',
        '即時監控',
        'CRM整合'
      ]
    }
  };
  
  return features[productKey][language] || features[productKey]['en'];
}
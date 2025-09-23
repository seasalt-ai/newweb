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
    url: '/seasalt-ai-logo.png',
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
}

export const WEBSITE_INFO: WebsiteInfo = {
  name: 'Seasalt.ai',
  url: 'https://seasalt.ai',
  description: 'AI-powered omnichannel customer communication platform for businesses of all sizes',
  inLanguage: Object.keys(languages)
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
// Localized Organization Descriptions
// =============================================================================

export const LOCALIZED_ORGANIZATION_DESCRIPTIONS: Record<string, string> = {
  'en': 'Leading AI conversation intelligence platform offering omnichannel customer communication solutions for businesses of all sizes.',
  'zh-tw': '領先的 AI 對話智能平台，為各種規模的企業提供全通路客戶溝通解決方案。',
  'zh-cn': '领先的 AI 对话智能平台，为各种规模的企业提供全渠道客户沟通解决方案。',
  'es': 'Plataforma líder de inteligencia conversacional de IA que ofrece soluciones de comunicación omnicanal para empresas de todos los tamaños.',
  'fr': 'Plateforme leader d\'intelligence conversationnelle IA offrant des solutions de communication omnicanale pour les entreprises de toutes tailles.',
  'de': 'Führende KI-Gesprächsintelligenz-Plattform, die Omnichannel-Kundenkommunikationslösungen für Unternehmen jeder Größe bietet.',
  'ja': 'あらゆる規模の企業向けにオムニチャネル顧客コミュニケーションソリューションを提供する、業界をリードするAI会話インテリジェンスプラットフォーム。',
  'ko': '모든 규모의 기업을 위한 옴니채널 고객 커뮤니케이션 솔루션을 제공하는 선도적인 AI 대화 인텔리전스 플랫폼.',
  'ar': 'منصة رائدة لذكاء المحادثة بالذكاء الاصطناعي تقدم حلول التواصل متعدد القنوات للشركات من جميع الأحجام.',
  'fa': 'پلتفرم پیشرو هوش مکالمه AI که راه‌حل‌های ارتباط چندکاناله مشتری را برای کسب‌وکارهای همه اندازه‌ها ارائه می‌دهد.',
  'fil': 'Nangungunang AI conversation intelligence platform na nag-aalok ng omnichannel customer communication solutions para sa mga negosyo ng lahat ng laki.',
  'hi': 'सभी आकार के व्यवसायों के लिए ओमनीचैनल ग्राहक संचार समाधान प्रदान करने वाला अग्रणी AI वार्तालाप बुद्धिमत्ता प्लेटफॉर्म।',
  'id': 'Platform kecerdasan percakapan AI terdepan yang menawarkan solusi komunikasi pelanggan omnichannel untuk bisnis dari semua ukuran.',
  'ms': 'Platform kecerdasan perbualan AI terkemuka yang menawarkan penyelesaian komunikasi pelanggan omnichannel untuk perniagaan dari semua saiz.',
  'pl': 'Wiodąca platforma inteligencji konwersacyjnej AI oferująca rozwiązania komunikacji omnichannel dla firm wszystkich rozmiarów.',
  'pt': 'Plataforma líder de inteligência conversacional de IA oferecendo soluções de comunicação omnichannel para empresas de todos os tamanhos.',
  'ru': 'Ведущая платформа разговорного ИИ, предлагающая омниканальные решения для клиентского общения для бизнеса любого размера.',
  'ta': 'அனைத்து அளவிலான வணிகங்களுக்கும் ஆம்னிசேனல் வாடிக்கையாளர் தொடர்பு தீர்வுகளை வழங்கும் முன்னணி AI உரையாடல் நுண்ணறிவு தளம்।',
  'th': 'แพลตฟอร์มปัญญาประดิษฐ์สำหรับการสนทนาชั้นนำที่เสนอโซลูชันการสื่อสารลูกค้าแบบออมนิแชนเนลสำหรับธุรกิจทุกขนาด',
  'vi': 'Nền tảng trí tuệ hội thoại AI hàng đầu cung cấp các giải pháp giao tiếp khách hàng đa kênh cho các doanh nghiệp mọi quy mô.'
};

/**
 * Get localized organization description
 */
export function getLocalizedOrganizationDescription(language: string): string {
  return LOCALIZED_ORGANIZATION_DESCRIPTIONS[language] || LOCALIZED_ORGANIZATION_DESCRIPTIONS['en'];
}

// =============================================================================
// Localized Service Schemas
// =============================================================================

export const LOCALIZED_SERVICE_SCHEMAS = {
  seachat: {
    'en': {
      name: 'SeaChat',
      description: 'SeaChat: AI-powered chat automation and agent-assist platform by Seasalt AI, enabling multilingual, live-agent-transfer, webchat, SMS, WhatsApp, and CRM integrations for 24/7 conversational support.',
      keywords: 'AI chatbot, live agent transfer, multilingual, webchat, SMS, WhatsApp, CRM integration',
      featureList: [
        'No-code setup in 10 minutes',
        'Live agent transfer',
        'Multilingual support',
        'Integrates with webchat, SMS, Line, WhatsApp, CRM, Shopify, calendars, Twilio'
      ],
      audienceType: 'Businesses, Educational Institutions, Customer Support Teams'
    },
    'zh-tw': {
      name: 'SeaChat',
      description: 'SeaChat：Seasalt AI 推出的 AI 聊天自動化和客服輔助平台，支援多語言、真人客服轉接、網頁聊天、簡訊、WhatsApp 和 CRM 整合，提供 24/7 對話支援。',
      keywords: 'AI 聊天機器人, 真人客服轉接, 多語言, 網頁聊天, 簡訊, WhatsApp, CRM 整合',
      featureList: [
        '10 分鐘免程式設定',
        '真人客服轉接',
        '多語言支援',
        '整合網頁聊天、簡訊、Line、WhatsApp、CRM、Shopify、行事曆、Twilio'
      ],
      audienceType: '企業、教育機構、客戶服務團隊'
    },
    'zh-cn': {
      name: 'SeaChat',
      description: 'SeaChat：Seasalt AI 推出的 AI 聊天自动化和客服辅助平台，支持多语言、真人客服转接、网页聊天、短信、WhatsApp 和 CRM 整合，提供 24/7 对话支持。',
      keywords: 'AI 聊天机器人, 真人客服转接, 多语言, 网页聊天, 短信, WhatsApp, CRM 整合',
      featureList: [
        '10 分钟免程序设定',
        '真人客服转接',
        '多语言支持',
        '整合网页聊天、短信、Line、WhatsApp、CRM、Shopify、日历、Twilio'
      ],
      audienceType: '企业、教育机构、客户服务团队'
    },
    'es': {
      name: 'SeaChat',
      description: 'SeaChat: Plataforma de automatización de chat con IA y asistencia de agentes de Seasalt AI, que permite soporte conversacional 24/7 con capacidades multilingües, transferencia a agentes en vivo, webchat, SMS, WhatsApp e integraciones CRM.',
      keywords: 'chatbot IA, transferencia agente en vivo, multilingüe, webchat, SMS, WhatsApp, integración CRM',
      featureList: [
        'Configuración sin código en 10 minutos',
        'Transferencia a agente en vivo',
        'Soporte multilingüe',
        'Integra con webchat, SMS, Line, WhatsApp, CRM, Shopify, calendarios, Twilio'
      ],
      audienceType: 'Empresas, Instituciones Educativas, Equipos de Atención al Cliente'
    },
    'fr': {
      name: 'SeaChat',
      description: 'SeaChat : Plateforme d\'automatisation de chat IA et d\'assistance d\'agents par Seasalt AI, permettant un support conversationnel 24/7 avec capacités multilingues, transfert d\'agent en direct, webchat, SMS, WhatsApp et intégrations CRM.',
      keywords: 'chatbot IA, transfert agent direct, multilingue, webchat, SMS, WhatsApp, intégration CRM',
      featureList: [
        'Configuration sans code en 10 minutes',
        'Transfert vers agent en direct',
        'Support multilingue',
        'Intègre webchat, SMS, Line, WhatsApp, CRM, Shopify, calendriers, Twilio'
      ],
      audienceType: 'Entreprises, Institutions Éducatives, Équipes de Support Client'
    },
    'de': {
      name: 'SeaChat',
      description: 'SeaChat: KI-gestützte Chat-Automatisierung und Agent-Assistenz-Plattform von Seasalt AI, die mehrsprachigen 24/7-Konversationssupport mit Live-Agent-Transfer, Webchat, SMS, WhatsApp und CRM-Integrationen ermöglicht.',
      keywords: 'KI-Chatbot, Live-Agent-Transfer, mehrsprachig, Webchat, SMS, WhatsApp, CRM-Integration',
      featureList: [
        'No-Code-Setup in 10 Minuten',
        'Live-Agent-Transfer',
        'Mehrsprachiger Support',
        'Integriert Webchat, SMS, Line, WhatsApp, CRM, Shopify, Kalender, Twilio'
      ],
      audienceType: 'Unternehmen, Bildungseinrichtungen, Kundensupport-Teams'
    },
    'ja': {
      name: 'SeaChat',
      description: 'SeaChat：Seasalt AIによるAI搭載チャット自動化とエージェント支援プラットフォーム。多言語、ライブエージェント転送、ウェブチャット、SMS、WhatsApp、CRM統合により24/7会話サポートを提供。',
      keywords: 'AIチャットボット, ライブエージェント転送, 多言語, ウェブチャット, SMS, WhatsApp, CRM統合',
      featureList: [
        '10分でノーコードセットアップ',
        'ライブエージェント転送',
        '多言語サポート',
        'ウェブチャット、SMS、Line、WhatsApp、CRM、Shopify、カレンダー、Twilio統合'
      ],
      audienceType: '企業、教育機関、カスタマーサポートチーム'
    },
    'ko': {
      name: 'SeaChat',
      description: 'SeaChat: Seasalt AI의 AI 기반 채팅 자동화 및 상담원 지원 플랫폼으로, 다국어, 실시간 상담원 연결, 웹채팅, SMS, WhatsApp, CRM 통합을 통해 24/7 대화 지원을 제공합니다.',
      keywords: 'AI 챗봇, 실시간 상담원 연결, 다국어, 웹채팅, SMS, WhatsApp, CRM 통합',
      featureList: [
        '10분 내 노코드 설정',
        '실시간 상담원 연결',
        '다국어 지원',
        '웹채팅, SMS, Line, WhatsApp, CRM, Shopify, 캘린더, Twilio 통합'
      ],
      audienceType: '기업, 교육기관, 고객지원팀'
    },
    'ar': {
      name: 'SeaChat',
      description: 'SeaChat: منصة أتمتة الدردشة ومساعدة الوكلاء المدعومة بالذكاء الاصطناعي من Seasalt AI، تمكن الدعم التحادثي متعدد اللغات على مدار الساعة مع نقل الوكيل المباشر وتكامل الويب والرسائل النصية وWhatsApp وCRM.',
      keywords: 'روبوت دردشة بالذكاء الاصطناعي, نقل وكيل مباشر, متعدد اللغات, دردشة ويب, رسائل نصية, واتساب, تكامل CRM',
      featureList: [
        'إعداد بلا كود في 10 دقائق',
        'نقل الوكيل المباشر',
        'دعم متعدد اللغات',
        'يتكامل مع دردشة الويب والرسائل النصية وLine وWhatsApp وCRM وShopify والتقاويم وTwilio'
      ],
      audienceType: 'الشركات والمؤسسات التعليمية وفرق دعم العملاء'
    },
    'fa': {
      name: 'SeaChat',
      description: 'SeaChat: پلتفرم اتوماسیون چت و کمک عامل مبتنی بر هوش مصنوعی توسط Seasalt AI، پشتیبانی مکالمه‌ای 24/7 چندزبانه با انتقال عامل زنده، وب‌چت، پیامک، واتساپ و ادغام CRM را فراهم می‌کند.',
      keywords: 'چت‌بات هوش مصنوعی, انتقال عامل زنده, چندزبانه, وب‌چت, پیامک, واتساپ, ادغام CRM',
      featureList: [
        'راه‌اندازی بدون کد در 10 دقیقه',
        'انتقال عامل زنده',
        'پشتیبانی چندزبانه',
        'ادغام با وب‌چت، پیامک، Line، واتساپ، CRM، Shopify، تقویم، Twilio'
      ],
      audienceType: 'کسب‌وکارها، موسسات آموزشی، تیم‌های پشتیبانی مشتری'
    },
    'fil': {
      name: 'SeaChat',
      description: 'SeaChat: AI-powered na chat automation at agent-assist platform ng Seasalt AI, nagbibigay ng 24/7 conversational support na multilingual, may live-agent-transfer, webchat, SMS, WhatsApp, at CRM integrations.',
      keywords: 'AI chatbot, live agent transfer, multilingual, webchat, SMS, WhatsApp, CRM integration',
      featureList: [
        'No-code setup sa loob ng 10 minuto',
        'Live agent transfer',
        'Multilingual support',
        'Sumusuporta sa webchat, SMS, Line, WhatsApp, CRM, Shopify, calendars, Twilio'
      ],
      audienceType: 'Mga Negosyo, Mga Institusyong Pang-edukasyon, Mga Customer Support Team'
    },
    'hi': {
      name: 'SeaChat',
      description: 'SeaChat: Seasalt AI का AI-संचालित चैट स्वचालन और एजेंट-सहायक प्लेटफॉर्म, जो बहुभाषी, लाइव-एजेंट-ट्रांसफर, वेबचैट, SMS, WhatsApp, और CRM एकीकरण के साथ 24/7 वार्तालाप समर्थन प्रदान करता है।',
      keywords: 'AI चैटबॉट, लाइव एजेंट ट्रांसफर, बहुभाषी, वेबचैट, SMS, WhatsApp, CRM एकीकरण',
      featureList: [
        '10 मिनट में नो-कोड सेटअप',
        'लाइव एजेंट ट्रांसफर',
        'बहुभाषी समर्थन',
        'वेबचैट, SMS, Line, WhatsApp, CRM, Shopify, कैलेंडर, Twilio के साथ एकीकृत'
      ],
      audienceType: 'व्यवसाय, शैक्षणिक संस्थान, ग्राहक सहायता टीमें'
    },
    'id': {
      name: 'SeaChat',
      description: 'SeaChat: Platform otomatisasi chat dan bantuan agen bertenaga AI oleh Seasalt AI, memberikan dukungan percakapan 24/7 multibahasa dengan transfer agen langsung, webchat, SMS, WhatsApp, dan integrasi CRM.',
      keywords: 'chatbot AI, transfer agen langsung, multibahasa, webchat, SMS, WhatsApp, integrasi CRM',
      featureList: [
        'Setup tanpa kode dalam 10 menit',
        'Transfer agen langsung',
        'Dukungan multibahasa',
        'Terintegrasi dengan webchat, SMS, Line, WhatsApp, CRM, Shopify, kalender, Twilio'
      ],
      audienceType: 'Bisnis, Institusi Pendidikan, Tim Dukungan Pelanggan'
    },
    'ms': {
      name: 'SeaChat',
      description: 'SeaChat: Platform automasi sembang dan bantuan ejen berkuasa AI oleh Seasalt AI, membolehkan sokongan perbualan 24/7 berbilang bahasa dengan pemindahan ejen langsung, webchat, SMS, WhatsApp, dan integrasi CRM.',
      keywords: 'chatbot AI, pemindahan ejen langsung, berbilang bahasa, webchat, SMS, WhatsApp, integrasi CRM',
      featureList: [
        'Persediaan tanpa kod dalam 10 minit',
        'Pemindahan ejen langsung',
        'Sokongan berbilang bahasa',
        'Berintegrasi dengan webchat, SMS, Line, WhatsApp, CRM, Shopify, kalendar, Twilio'
      ],
      audienceType: 'Perniagaan, Institusi Pendidikan, Pasukan Sokongan Pelanggan'
    },
    'pl': {
      name: 'SeaChat',
      description: 'SeaChat: Platforma automatyzacji czatu i wsparcia agentów oparta na AI od Seasalt AI, umożliwiająca wielojęzyczne wsparcie konwersacyjne 24/7 z transferem do żywego agenta, webchat, SMS, WhatsApp i integracjami CRM.',
      keywords: 'chatbot AI, transfer do żywego agenta, wielojęzyczny, webchat, SMS, WhatsApp, integracja CRM',
      featureList: [
        'Konfiguracja bez kodu w 10 minut',
        'Transfer do żywego agenta',
        'Wsparcie wielojęzyczne',
        'Integruje się z webchat, SMS, Line, WhatsApp, CRM, Shopify, kalendarzami, Twilio'
      ],
      audienceType: 'Firmy, Instytucje Edukacyjne, Zespoły Wsparcia Klienta'
    },
    'pt': {
      name: 'SeaChat',
      description: 'SeaChat: Plataforma de automação de chat e assistência de agentes com IA da Seasalt AI, permitindo suporte conversacional multilíngue 24/7 com transferência de agente ao vivo, webchat, SMS, WhatsApp e integrações CRM.',
      keywords: 'chatbot IA, transferência agente ao vivo, multilíngue, webchat, SMS, WhatsApp, integração CRM',
      featureList: [
        'Configuração sem código em 10 minutos',
        'Transferência para agente ao vivo',
        'Suporte multilíngue',
        'Integra com webchat, SMS, Line, WhatsApp, CRM, Shopify, calendários, Twilio'
      ],
      audienceType: 'Empresas, Instituições Educacionais, Equipes de Suporte ao Cliente'
    },
    'ru': {
      name: 'SeaChat',
      description: 'SeaChat: Платформа автоматизации чата и помощи агентов на основе ИИ от Seasalt AI, обеспечивающая многоязычную разговорную поддержку 24/7 с переводом на живого агента, веб-чат, SMS, WhatsApp и интеграциями CRM.',
      keywords: 'ИИ чатбот, перевод живого агента, многоязычный, веб-чат, SMS, WhatsApp, интеграция CRM',
      featureList: [
        'Настройка без кода за 10 минут',
        'Перевод на живого агента',
        'Многоязычная поддержка',
        'Интегрируется с веб-чат, SMS, Line, WhatsApp, CRM, Shopify, календарями, Twilio'
      ],
      audienceType: 'Бизнес, Образовательные учреждения, Команды поддержки клиентов'
    },
    'ta': {
      name: 'SeaChat',
      description: 'SeaChat: Seasalt AI இன் AI-இயங்கும் அரட்டை தானியங்கு மற்றும் முகவர்-உதவி தளம், பலமொழி, நேரடி-முகவர்-மாற்றம், வலைஅரட்டை, SMS, WhatsApp, மற்றும் CRM ஒருங்கிணைப்புகளுடன் 24/7 உரையாடல் ஆதரவை வழங்குகிறது.',
      keywords: 'AI அரட்டைபோட், நேரடி முகவர் மாற்றம், பலமொழி, வலைஅரட்டை, SMS, WhatsApp, CRM ஒருங்கிணைப்பு',
      featureList: [
        '10 நிமிடங்களில் கோட் இல்லாத அமைப்பு',
        'நேரடி முகவர் மாற்றம்',
        'பலமொழி ஆதரவு',
        'வலைஅரட்டை, SMS, Line, WhatsApp, CRM, Shopify, நாட்காட்டிகள், Twilio உடன் ஒருங்கிணைக்கிறது'
      ],
      audienceType: 'வணிகங்கள், கல்வி நிறுவனங்கள், வாடிக்கையாளர் ஆதரவு அணிகள்'
    },
    'th': {
      name: 'SeaChat',
      description: 'SeaChat: แพลตฟอร์มการทำงานอัตโนมัติของแชทและช่วยเหลือเอเจนต์ที่ขับเคลื่อนด้วย AI จาก Seasalt AI ให้การสนับสนุนการสนทนาแบบหลายภาษา 24/7 พร้อมการโอนเอเจนต์สด เว็บแชท SMS WhatsApp และการรวม CRM',
      keywords: 'แชทบอท AI, การโอนเอเจนต์สด, หลายภาษา, เว็บแชท, SMS, WhatsApp, การรวม CRM',
      featureList: [
        'ตั้งค่าแบบไม่ต้องเขียนโค้ดใน 10 นาที',
        'การโอนเอเจนต์สด',
        'การสนับสนุนหลายภาษา',
        'รวมกับเว็บแชท SMS Line WhatsApp CRM Shopify ปฏิทิน Twilio'
      ],
      audienceType: 'ธุรกิจ สถาบันการศึกษา ทีมสนับสนุนลูกค้า'
    },
    'vi': {
      name: 'SeaChat',
      description: 'SeaChat: Nền tảng tự động hóa chat và hỗ trợ đại lý được hỗ trợ bởi AI của Seasalt AI, cho phép hỗ trợ đối thoại đa ngôn ngữ 24/7 với chuyển đại lý trực tiếp, webchat, SMS, WhatsApp và tích hợp CRM.',
      keywords: 'chatbot AI, chuyển đại lý trực tiếp, đa ngôn ngữ, webchat, SMS, WhatsApp, tích hợp CRM',
      featureList: [
        'Thiết lập không cần mã trong 10 phút',
        'Chuyển đại lý trực tiếp',
        'Hỗ trợ đa ngôn ngữ',
        'Tích hợp với webchat, SMS, Line, WhatsApp, CRM, Shopify, lịch, Twilio'
      ],
      audienceType: 'Doanh nghiệp, Cơ sở Giáo dục, Đội Hỗ trợ Khách hàng'
    }
  },
  seax: {
    'en': {
      name: 'SeaX',
      description: 'SeaX: Cloud communication platform for mass outreach by Seasalt AI, enabling businesses to send millions of SMS messages, make thousands of voice calls, and run WhatsApp campaigns at scale with AI automation and real-time analytics.',
      keywords: 'bulk SMS, mass communication, WhatsApp campaigns, voice calls, lead generation, marketing automation, omnichannel outreach',
      featureList: [
        'Send millions of SMS messages daily',
        'Make thousands of voice calls per hour',
        'WhatsApp Business API integration',
        'AI-powered follow-up automation',
        'Real-time campaign analytics',
        'Lead generation and qualification',
        'GDPR and compliance tools',
        'Enterprise-grade scalability'
      ],
      audienceType: 'Enterprises, Marketing Teams, Sales Organizations, Political Campaigns'
    },
    'zh-tw': {
      name: 'SeaX',
      description: 'SeaX：Seasalt AI 大規模推廣雲端通訊平台，讓企業能夠發送數百萬條簡訊、撥打數千通語音電話，並透過 AI 自動化和即時分析大規模執行 WhatsApp 行銷活動。',
      keywords: '大量簡訊, 大規模通訊, WhatsApp 行銷活動, 語音通話, 潛在客戶開發, 行銷自動化, 全通路推廣',
      featureList: [
        '每日發送數百萬條簡訊',
        '每小時撥打數千通語音電話',
        'WhatsApp Business API 整合',
        'AI 驅動的後續追蹤自動化',
        '即時行銷活動分析',
        '潛在客戶開發和篩選',
        'GDPR 和合規工具',
        '企業級擴展性'
      ],
      audienceType: '企業、行銷團隊、銷售組織、政治競選'
    },
    'zh-cn': {
      name: 'SeaX',
      description: 'SeaX：Seasalt AI 大规模推广云端通讯平台，让企业能够发送数百万条短信、拨打数千通语音电话，并通过 AI 自动化和实时分析大规模执行 WhatsApp 营销活动。',
      keywords: '大量短信, 大规模通讯, WhatsApp 营销活动, 语音通话, 潜在客户开发, 营销自动化, 全渠道推广',
      featureList: [
        '每日发送数百万条短信',
        '每小时拨打数千通语音电话',
        'WhatsApp Business API 整合',
        'AI 驱动的后续跟进自动化',
        '实时营销活动分析',
        '潜在客户开发和筛选',
        'GDPR 和合规工具',
        '企业级扩展性'
      ],
      audienceType: '企业、营销团队、销售组织、政治竞选'
    },
    'es': {
      name: 'SeaX',
      description: 'SeaX: Plataforma de comunicación en la nube para alcance masivo de Seasalt AI, que permite a las empresas enviar millones de mensajes SMS, realizar miles de llamadas de voz y ejecutar campañas de WhatsApp a escala con automatización IA y análisis en tiempo real.',
      keywords: 'SMS masivo, comunicación masiva, campañas WhatsApp, llamadas de voz, generación de leads, automatización marketing, alcance omnicanal',
      featureList: [
        'Enviar millones de mensajes SMS diarios',
        'Realizar miles de llamadas de voz por hora',
        'Integración WhatsApp Business API',
        'Automatización de seguimiento con IA',
        'Análisis de campañas en tiempo real',
        'Generación y calificación de leads',
        'Herramientas GDPR y cumplimiento',
        'Escalabilidad de nivel empresarial'
      ],
      audienceType: 'Empresas, Equipos de Marketing, Organizaciones de Ventas, Campañas Políticas'
    },
    'fr': {
      name: 'SeaX',
      description: 'SeaX : Plateforme de communication cloud pour diffusion massive par Seasalt AI, permettant aux entreprises d\'envoyer des millions de SMS, passer des milliers d\'appels vocaux et exécuter des campagnes WhatsApp à grande échelle avec automatisation IA et analyses en temps réel.',
      keywords: 'SMS en masse, communication massive, campagnes WhatsApp, appels vocaux, génération leads, automatisation marketing, diffusion omnicanale',
      featureList: [
        'Envoyer des millions de SMS quotidiens',
        'Passer des milliers d\'appels vocaux par heure',
        'Intégration WhatsApp Business API',
        'Automatisation de suivi alimentée par IA',
        'Analyses de campagnes en temps réel',
        'Génération et qualification de leads',
        'Outils GDPR et conformité',
        'Évolutivité de niveau entreprise'
      ],
      audienceType: 'Entreprises, Équipes Marketing, Organisations de Vente, Campagnes Politiques'
    },
    'de': {
      name: 'SeaX',
      description: 'SeaX: Cloud-Kommunikationsplattform für Massenkommunikation von Seasalt AI, die es Unternehmen ermöglicht, Millionen von SMS zu senden, Tausende von Sprachanrufen zu tätigen und WhatsApp-Kampagnen mit KI-Automatisierung und Echtzeit-Analysen zu skalieren.',
      keywords: 'Massen-SMS, Massenkommunikation, WhatsApp-Kampagnen, Sprachanrufe, Lead-Generierung, Marketing-Automatisierung, Omnichannel-Reichweite',
      featureList: [
        'Millionen von SMS täglich senden',
        'Tausende von Sprachanrufen pro Stunde',
        'WhatsApp Business API Integration',
        'KI-gestützte Follow-up-Automatisierung',
        'Echtzeit-Kampagnen-Analysen',
        'Lead-Generierung und -Qualifizierung',
        'DSGVO- und Compliance-Tools',
        'Unternehmens-Skalierbarkeit'
      ],
      audienceType: 'Unternehmen, Marketing-Teams, Verkaufsorganisationen, Politische Kampagnen'
    },
    'ja': {
      name: 'SeaX',
      description: 'SeaX：Seasalt AIによる大規模アウトリーチ向けクラウドコミュニケーションプラットフォーム。企業が数百万のSMSメッセージ送信、数千の音声通話実行、WhatsAppキャンペーンをAI自動化とリアルタイム分析で大規模展開することを可能にします。',
      keywords: '一括SMS, 大規模コミュニケーション, WhatsAppキャンペーン, 音声通話, リード生成, マーケティング自動化, オムニチャネルアウトリーチ',
      featureList: [
        '毎日数百万のSMSメッセージを送信',
        '1時間に数千の音声通話を実行',
        'WhatsApp Business API統合',
        'AI搭載フォローアップ自動化',
        'リアルタイムキャンペーン分析',
        'リード生成と評価',
        'GDPRとコンプライアンスツール',
        'エンタープライズ級スケーラビリティ'
      ],
      audienceType: '企業、マーケティングチーム、営業組織、政治キャンペーン'
    },
    'ko': {
      name: 'SeaX',
      description: 'SeaX: Seasalt AI의 대규모 아웃리치를 위한 클라우드 커뮤니케이션 플랫폼으로, 기업이 수백만 개의 SMS 메시지 발송, 수천 번의 음성 통화 실행, AI 자동화와 실시간 분석을 통한 대규모 WhatsApp 캠페인을 가능하게 합니다.',
      keywords: '대량 SMS, 대규모 커뮤니케이션, WhatsApp 캠페인, 음성 통화, 리드 생성, 마케팅 자동화, 옴니채널 아웃리치',
      featureList: [
        '매일 수백만 개의 SMS 메시지 발송',
        '시간당 수천 번의 음성 통화 실행',
        'WhatsApp Business API 통합',
        'AI 기반 후속 조치 자동화',
        '실시간 캠페인 분석',
        '리드 생성 및 검증',
        'GDPR 및 규정 준수 도구',
        '엔터프라이즈급 확장성'
      ],
      audienceType: '기업, 마케팅팀, 영업조직, 정치 캠페인'
    },
    'ar': {
      name: 'SeaX',
      description: 'SeaX: منصة اتصالات سحابية للوصول الجماعي من Seasalt AI، تمكن الشركات من إرسال ملايين رسائل SMS وإجراء آلاف المكالمات الصوتية وتشغيل حملات WhatsApp على نطاق واسع مع الأتمتة بالذكاء الاصطناعي والتحليلات في الوقت الفعلي.',
      keywords: 'رسائل SMS مجمعة, اتصالات جماعية, حملات واتساب, مكالمات صوتية, توليد العملاء المحتملين, أتمتة التسويق, الوصول متعدد القنوات',
      featureList: [
        'إرسال ملايين رسائل SMS يومياً',
        'إجراء آلاف المكالمات الصوتية في الساعة',
        'تكامل WhatsApp Business API',
        'أتمتة المتابعة المدعومة بالذكاء الاصطناعي',
        'تحليلات الحملات في الوقت الفعلي',
        'توليد وتأهيل العملاء المحتملين',
        'أدوات GDPR والامتثال',
        'قابلية التوسع على مستوى المؤسسة'
      ],
      audienceType: 'الشركات، فرق التسويق، منظمات المبيعات، الحملات السياسية'
    },
    'fa': {
      name: 'SeaX',
      description: 'SeaX: پلتفرم ارتباطات ابری برای دسترسی انبوه توسط Seasalt AI، که شرکت‌ها را قادر می‌سازد میلیون‌ها پیام SMS ارسال کنند، هزاران تماس صوتی برقرار کنند و کمپین‌های واتساپ را در مقیاس وسیع با اتوماسیون هوش مصنوعی و تحلیل‌های بلادرنگ اجرا کنند.',
      keywords: 'پیامک انبوه, ارتباطات انبوه, کمپین‌های واتساپ, تماس‌های صوتی, تولید مشتری بالقوه, اتوماسیون بازاریابی, دسترسی چندکاناله',
      featureList: [
        'ارسال میلیون‌ها پیام SMS روزانه',
        'برقراری هزاران تماس صوتی در ساعت',
        'ادغام WhatsApp Business API',
        'اتوماسیون پیگیری مبتنی بر هوش مصنوعی',
        'تحلیل‌های کمپین بلادرنگ',
        'تولید و ارزیابی مشتری بالقوه',
        'ابزارهای GDPR و انطباق',
        'مقیاس‌پذیری سطح سازمانی'
      ],
      audienceType: 'شرکت‌ها، تیم‌های بازاریابی، سازمان‌های فروش، کمپین‌های سیاسی'
    },
    'fil': {
      name: 'SeaX',
      description: 'SeaX: Cloud communication platform para sa mass outreach ng Seasalt AI, nagbibigay-daan sa mga negosyo na magpadala ng milyun-milyong SMS messages, gumawa ng libu-libong voice calls, at magpatakbo ng WhatsApp campaigns sa malaking sukat gamit ang AI automation at real-time analytics.',
      keywords: 'bulk SMS, mass communication, WhatsApp campaigns, voice calls, lead generation, marketing automation, omnichannel outreach',
      featureList: [
        'Magpadala ng milyun-milyong SMS messages araw-araw',
        'Gumawa ng libu-libong voice calls bawat oras',
        'WhatsApp Business API integration',
        'AI-powered follow-up automation',
        'Real-time campaign analytics',
        'Lead generation at qualification',
        'GDPR at compliance tools',
        'Enterprise-grade scalability'
      ],
      audienceType: 'Mga Kumpanya, Marketing Teams, Sales Organizations, Political Campaigns'
    },
    'hi': {
      name: 'SeaX',
      description: 'SeaX: Seasalt AI का व्यापक पहुंच के लिए क्लाउड संचार प्लेटफॉर्म, जो व्यवसायों को लाखों SMS संदेश भेजने, हजारों आवाज कॉल करने और AI स्वचालन और वास्तविक समय विश्लेषण के साथ बड़े पैमाने पर WhatsApp अभियान चलाने में सक्षम बनाता है।',
      keywords: 'बल्क SMS, व्यापक संचार, WhatsApp अभियान, आवाज कॉल, लीड जनरेशन, मार्केटिंग स्वचालन, ओमनीचैनल पहुंच',
      featureList: [
        'प्रतिदिन लाखों SMS संदेश भेजें',
        'प्रति घंटे हजारों आवाज कॉल करें',
        'WhatsApp Business API एकीकरण',
        'AI-संचालित फॉलो-अप स्वचालन',
        'वास्तविक समय अभियान विश्लेषण',
        'लीड जनरेशन और योग्यता',
        'GDPR और अनुपालन उपकरण',
        'एंटरप्राइज़-ग्रेड स्केलेबिलिटी'
      ],
      audienceType: 'उद्यम, मार्केटिंग टीमें, बिक्री संगठन, राजनीतिक अभियान'
    },
    'id': {
      name: 'SeaX',
      description: 'SeaX: Platform komunikasi cloud untuk jangkauan massal oleh Seasalt AI, memungkinkan bisnis mengirim jutaan pesan SMS, melakukan ribuan panggilan suara, dan menjalankan kampanye WhatsApp dalam skala besar dengan otomatisasi AI dan analitik real-time.',
      keywords: 'SMS massal, komunikasi massal, kampanye WhatsApp, panggilan suara, generasi prospek, otomatisasi pemasaran, jangkauan omnichannel',
      featureList: [
        'Kirim jutaan pesan SMS harian',
        'Lakukan ribuan panggilan suara per jam',
        'Integrasi WhatsApp Business API',
        'Otomatisasi tindak lanjut bertenaga AI',
        'Analitik kampanye real-time',
        'Generasi dan kualifikasi prospek',
        'Alat GDPR dan kepatuhan',
        'Skalabilitas tingkat enterprise'
      ],
      audienceType: 'Perusahaan, Tim Pemasaran, Organisasi Penjualan, Kampanye Politik'
    },
    'ms': {
      name: 'SeaX',
      description: 'SeaX: Platform komunikasi awan untuk jangkauan besar-besaran oleh Seasalt AI, membolehkan perniagaan menghantar berjuta-juta mesej SMS, membuat beribu-ribu panggilan suara, dan menjalankan kempen WhatsApp pada skala besar dengan automasi AI dan analitik masa nyata.',
      keywords: 'SMS pukal, komunikasi besar-besaran, kempen WhatsApp, panggilan suara, penjanaan prospek, automasi pemasaran, jangkauan omnichannel',
      featureList: [
        'Hantar berjuta-juta mesej SMS harian',
        'Buat beribu-ribu panggilan suara sejam',
        'Integrasi WhatsApp Business API',
        'Automasi susulan berkuasa AI',
        'Analitik kempen masa nyata',
        'Penjanaan dan kelayakan prospek',
        'Alat GDPR dan pematuhan',
        'Skalabiliti gred perusahaan'
      ],
      audienceType: 'Perusahaan, Pasukan Pemasaran, Organisasi Jualan, Kempen Politik'
    },
    'pl': {
      name: 'SeaX',
      description: 'SeaX: Platforma komunikacji chmurowej do masowego zasięgu od Seasalt AI, umożliwiająca firmom wysyłanie milionów wiadomości SMS, wykonywanie tysięcy połączeń głosowych i prowadzenie kampanii WhatsApp na dużą skalę z automatyzacją AI i analizami w czasie rzeczywistym.',
      keywords: 'masowe SMS, komunikacja masowa, kampanie WhatsApp, połączenia głosowe, generowanie leadów, automatyzacja marketingu, zasięg omnichannel',
      featureList: [
        'Wysyłaj miliony wiadomości SMS dziennie',
        'Wykonuj tysiące połączeń głosowych na godzinę',
        'Integracja WhatsApp Business API',
        'Automatyzacja follow-up napędzana AI',
        'Analiza kampanii w czasie rzeczywistym',
        'Generowanie i kwalifikacja leadów',
        'Narzędzia GDPR i zgodności',
        'Skalowalność klasy enterprise'
      ],
      audienceType: 'Przedsiębiorstwa, Zespoły Marketingu, Organizacje Sprzedaży, Kampanie Polityczne'
    },
    'pt': {
      name: 'SeaX',
      description: 'SeaX: Plataforma de comunicação em nuvem para alcance em massa da Seasalt AI, permitindo que empresas enviem milhões de mensagens SMS, façam milhares de chamadas de voz e executem campanhas do WhatsApp em grande escala com automação de IA e análises em tempo real.',
      keywords: 'SMS em massa, comunicação em massa, campanhas WhatsApp, chamadas de voz, geração de leads, automação de marketing, alcance omnichannel',
      featureList: [
        'Enviar milhões de mensagens SMS diariamente',
        'Fazer milhares de chamadas de voz por hora',
        'Integração WhatsApp Business API',
        'Automação de acompanhamento com IA',
        'Análises de campanha em tempo real',
        'Geração e qualificação de leads',
        'Ferramentas GDPR e conformidade',
        'Escalabilidade de nível empresarial'
      ],
      audienceType: 'Empresas, Equipes de Marketing, Organizações de Vendas, Campanhas Políticas'
    },
    'ru': {
      name: 'SeaX',
      description: 'SeaX: Облачная коммуникационная платформа для массового охвата от Seasalt AI, позволяющая предприятиям отправлять миллионы SMS-сообщений, совершать тысячи голосовых звонков и проводить кампании WhatsApp в большом масштабе с автоматизацией ИИ и аналитикой в реальном времени.',
      keywords: 'массовые SMS, массовые коммуникации, кампании WhatsApp, голосовые звонки, генерация лидов, автоматизация маркетинга, омниканальный охват',
      featureList: [
        'Отправлять миллионы SMS-сообщений ежедневно',
        'Совершать тысячи голосовых звонков в час',
        'Интеграция WhatsApp Business API',
        'Автоматизация последующих действий на основе ИИ',
        'Аналитика кампаний в реальном времени',
        'Генерация и квалификация лидов',
        'Инструменты GDPR и соответствия',
        'Масштабируемость корпоративного уровня'
      ],
      audienceType: 'Предприятия, Маркетинговые команды, Организации продаж, Политические кампании'
    },
    'ta': {
      name: 'SeaX',
      description: 'SeaX: Seasalt AI இன் பெரிய அளவிலான வெளியீட்டுக்கான மேக தொடர்பு தளம், வணிகங்கள் கோடிக்கணக்கான SMS செய்திகளை அனுப்பவும், ஆயிரக்கணக்கான குரல் அழைப்புகளை மேற்கொள்ளவும், AI தானியங்கு மற்றும் நேரடி ஆய்வுகளுடன் பெரிய அளவில் WhatsApp பிரச்சாரங்களை இயக்கவும் உதவுகிறது.',
      keywords: 'மொத்த SMS, பெரிய அளவு தொடர்பு, WhatsApp பிரச்சாரங்கள், குரல் அழைப்புகள், வாய்ப்பு உருவாக்கம், சந்தைப்படுத்தல் தானியங்கு, பல்வேறு சேனல் வெளியீடு',
      featureList: [
        'தினமும் கோடிக்கணக்கான SMS செய்திகளை அனுப்பவும்',
        'மணிக்கு ஆயிரக்கணக்கான குரல் அழைப்புகளை மேற்கொள்ளவும்',
        'WhatsApp Business API ஒருங்கிணைப்பு',
        'AI இயங்கும் பின்தொடர்தல் தானியங்கு',
        'நேரடி பிரச்சார ஆய்வுகள்',
        'வாய்ப்பு உருவாக்கம் மற்றும் தகுதி',
        'GDPR மற்றும் இணக்க கருவிகள்',
        'நிறுவன-தர அளவிடுதல்'
      ],
      audienceType: 'நிறுவனங்கள், சந்தைப்படுத்தல் குழுக்கள், விற்பனை அமைப்புகள், அரசியல் பிரச்சாரங்கள்'
    },
    'th': {
      name: 'SeaX',
      description: 'SeaX: แพลตฟอร์มการสื่อสารบนคลาวด์สำหรับการเข้าถึงมวลชนจาก Seasalt AI ช่วยให้ธุรกิจส่งข้อความ SMS หลายล้านข้อความ โทรเสียงหลายพันสาย และดำเนินแคมเปญ WhatsApp ในระดับใหญ่ด้วยระบบอัตโนมัติ AI และการวิเคราะห์แบบเรียลไทม์',
      keywords: 'SMS จำนวนมาก, การสื่อสารมวลชน, แคมเปญ WhatsApp, การโทรเสียง, การสร้างลูกค้าเป้าหมาย, ระบบอัตโนมัติการตลาด, การเข้าถึงแบบหลายช่องทาง',
      featureList: [
        'ส่งข้อความ SMS หลายล้านข้อความต่อวัน',
        'โทรเสียงหลายพันสายต่อชั่วโมง',
        'การรวม WhatsApp Business API',
        'ระบบอัตโนมัติการติดตามด้วย AI',
        'การวิเคราะห์แคมเปญแบบเรียลไทม์',
        'การสร้างและคัดกรองลูกค้าเป้าหมาย',
        'เครื่องมือ GDPR และการปฏิบัติตามกฎหมาย',
        'ความสามารถในการขยายระดับองค์กร'
      ],
      audienceType: 'องค์กร ทีมการตลาด องค์กรขาย แคมเปญการเมือง'
    },
    'vi': {
      name: 'SeaX',
      description: 'SeaX: Nền tảng truyền thông đám mây cho tiếp cận hàng loạt của Seasalt AI, cho phép doanh nghiệp gửi hàng triệu tin nhắn SMS, thực hiện hàng nghìn cuộc gọi thoại và chạy các chiến dịch WhatsApp quy mô lớn với tự động hóa AI và phân tích thời gian thực.',
      keywords: 'SMS hàng loạt, truyền thông đại chúng, chiến dịch WhatsApp, cuộc gọi thoại, tạo khách hàng tiềm năng, tự động hóa marketing, tiếp cận đa kênh',
      featureList: [
        'Gửi hàng triệu tin nhắn SMS hàng ngày',
        'Thực hiện hàng nghìn cuộc gọi thoại mỗi giờ',
        'Tích hợp WhatsApp Business API',
        'Tự động hóa theo dõi được hỗ trợ bởi AI',
        'Phân tích chiến dịch thời gian thực',
        'Tạo và đánh giá khách hàng tiềm năng',
        'Công cụ GDPR và tuân thủ',
        'Khả năng mở rộng cấp doanh nghiệp'
      ],
      audienceType: 'Doanh nghiệp, Đội Marketing, Tổ chức Bán hàng, Chiến dịch Chính trị'
    }
  }
};

export const LOCALIZED_FAQ_SCHEMAS = {
  'en': [
    {
      question: "What is Seasalt.ai?",
      answer: "Seasalt.ai is an AI-powered omnichannel customer communication platform that helps businesses automate customer service across multiple channels including WhatsApp, SMS, voice calls, and web chat."
    },
    {
      question: "What products does Seasalt.ai offer?",
      answer: "Seasalt.ai offers three main products: SeaChat for AI chatbots and customer service automation, SeaX for omnichannel communication campaigns, and SeaVoice for AI voice agents and call automation."
    },
    {
      question: "How does Seasalt.ai help businesses?",
      answer: "Seasalt.ai helps businesses reduce customer service costs, improve response times, automate repetitive tasks, and provide 24/7 customer support across multiple communication channels using advanced AI technology."
    }
  ],
  'zh-tw': [
    {
      question: "什麼是 Seasalt.ai？",
      answer: "Seasalt.ai 是一個 AI 驅動的全通路客戶溝通平台，幫助企業在多個通道（包括 WhatsApp、簡訊、語音通話和網頁聊天）上自動化客戶服務。"
    },
    {
      question: "Seasalt.ai 提供哪些產品？",
      answer: "Seasalt.ai 提供三個主要產品：SeaChat 用於 AI 聊天機器人和客戶服務自動化，SeaX 用於全通路溝通活動，SeaVoice 用於 AI 語音代理和通話自動化。"
    },
    {
      question: "Seasalt.ai 如何幫助企業？",
      answer: "Seasalt.ai 幫助企業降低客戶服務成本、改善回應時間、自動化重複性任務，並使用先進的 AI 技術在多個溝通通道上提供 24/7 客戶支援。"
    }
  ],
  'zh-cn': [
    {
      question: "什么是 Seasalt.ai？",
      answer: "Seasalt.ai 是一个 AI 驱动的全渠道客户沟通平台，帮助企业在多个渠道（包括 WhatsApp、短信、语音通话和网页聊天）上自动化客户服务。"
    },
    {
      question: "Seasalt.ai 提供哪些产品？",
      answer: "Seasalt.ai 提供三个主要产品：SeaChat 用于 AI 聊天机器人和客户服务自动化，SeaX 用于全渠道沟通活动，SeaVoice 用于 AI 语音代理和通话自动化。"
    },
    {
      question: "Seasalt.ai 如何帮助企业？",
      answer: "Seasalt.ai 帮助企业降低客户服务成本、改善响应时间、自动化重复性任务，并使用先进的 AI 技术在多个沟通渠道上提供 24/7 客户支持。"
    }
  ],
  'es': [
    {
      question: "¿Qué es Seasalt.ai?",
      answer: "Seasalt.ai es una plataforma de comunicación omnicanal impulsada por IA que ayuda a las empresas a automatizar el servicio al cliente a través de múltiples canales incluyendo WhatsApp, SMS, llamadas de voz y chat web."
    },
    {
      question: "¿Qué productos ofrece Seasalt.ai?",
      answer: "Seasalt.ai ofrece tres productos principales: SeaChat para chatbots de IA y automatización de servicio al cliente, SeaX para campañas de comunicación omnicanal, y SeaVoice para agentes de voz IA y automatización de llamadas."
    },
    {
      question: "¿Cómo ayuda Seasalt.ai a las empresas?",
      answer: "Seasalt.ai ayuda a las empresas a reducir costos de servicio al cliente, mejorar tiempos de respuesta, automatizar tareas repetitivas y proporcionar soporte al cliente 24/7 a través de múltiples canales de comunicación usando tecnología IA avanzada."
    }
  ],
  'fr': [
    {
      question: "Qu'est-ce que Seasalt.ai ?",
      answer: "Seasalt.ai est une plateforme de communication client omnicanale alimentée par l'IA qui aide les entreprises à automatiser le service client sur plusieurs canaux incluant WhatsApp, SMS, appels vocaux et chat web."
    },
    {
      question: "Quels produits propose Seasalt.ai ?",
      answer: "Seasalt.ai propose trois produits principaux : SeaChat pour les chatbots IA et l'automatisation du service client, SeaX pour les campagnes de communication omnicanale, et SeaVoice pour les agents vocaux IA et l'automatisation d'appels."
    },
    {
      question: "Comment Seasalt.ai aide-t-il les entreprises ?",
      answer: "Seasalt.ai aide les entreprises à réduire les coûts de service client, améliorer les temps de réponse, automatiser les tâches répétitives et fournir un support client 24/7 sur plusieurs canaux de communication utilisant une technologie IA avancée."
    }
  ],
  'de': [
    {
      question: "Was ist Seasalt.ai?",
      answer: "Seasalt.ai ist eine KI-gestützte Omnichannel-Kundenkommunikationsplattform, die Unternehmen dabei hilft, den Kundenservice über mehrere Kanäle hinweg zu automatisieren, einschließlich WhatsApp, SMS, Sprachanrufen und Web-Chat."
    },
    {
      question: "Welche Produkte bietet Seasalt.ai?",
      answer: "Seasalt.ai bietet drei Hauptprodukte: SeaChat für KI-Chatbots und Kundenservice-Automatisierung, SeaX für Omnichannel-Kommunikationskampagnen und SeaVoice für KI-Sprachagenten und Anruf-Automatisierung."
    },
    {
      question: "Wie hilft Seasalt.ai Unternehmen?",
      answer: "Seasalt.ai hilft Unternehmen dabei, Kundenservice-Kosten zu reduzieren, Antwortzeiten zu verbessern, wiederkehrende Aufgaben zu automatisieren und 24/7-Kundensupport über mehrere Kommunikationskanäle mit fortschrittlicher KI-Technologie bereitzustellen."
    }
  ],
  'ja': [
    {
      question: "Seasalt.aiとは何ですか？",
      answer: "Seasalt.aiは、WhatsApp、SMS、音声通話、ウェブチャットなど複数のチャネルでカスタマーサービスの自動化を支援するAI搭載のオムニチャネル顧客コミュニケーションプラットフォームです。"
    },
    {
      question: "Seasalt.aiはどのような製品を提供していますか？",
      answer: "Seasalt.aiは3つの主要製品を提供しています：AIチャットボットとカスタマーサービス自動化のためのSeaChat、オムニチャネルコミュニケーションキャンペーンのためのSeaX、AI音声エージェントと通話自動化のためのSeaVoice。"
    },
    {
      question: "Seasalt.aiはどのように企業を支援しますか？",
      answer: "Seasalt.aiは、高度なAI技術を使用して、カスタマーサービスコストの削減、応答時間の改善、反復タスクの自動化、複数のコミュニケーションチャネルでの24/7カスタマーサポートの提供を企業に支援します。"
    }
  ],
  'ko': [
    {
      question: "Seasalt.ai란 무엇인가요?",
      answer: "Seasalt.ai는 WhatsApp, SMS, 음성 통화, 웹 채팅을 포함한 여러 채널에서 고객 서비스 자동화를 지원하는 AI 기반 옴니채널 고객 커뮤니케이션 플랫폼입니다."
    },
    {
      question: "Seasalt.ai는 어떤 제품을 제공하나요?",
      answer: "Seasalt.ai는 세 가지 주요 제품을 제공합니다: AI 챗봇과 고객 서비스 자동화를 위한 SeaChat, 옴니채널 커뮤니케이션 캠페인을 위한 SeaX, AI 음성 에이전트와 통화 자동화를 위한 SeaVoice."
    },
    {
      question: "Seasalt.ai는 기업에 어떤 도움을 주나요?",
      answer: "Seasalt.ai는 고급 AI 기술을 사용하여 고객 서비스 비용 절감, 응답 시간 개선, 반복적인 작업 자동화, 여러 커뮤니케이션 채널에서 24/7 고객 지원 제공을 통해 기업을 지원합니다."
    }
  ],
  'ar': [
    {
      question: "ما هو Seasalt.ai؟",
      answer: "Seasalt.ai هي منصة اتصال عملاء متعددة القنوات مدعومة بالذكاء الاصطناعي تساعد الشركات على أتمتة خدمة العملاء عبر قنوات متعددة بما في ذلك WhatsApp وSMS والمكالمات الصوتية والدردشة عبر الويب."
    },
    {
      question: "ما هي المنتجات التي يقدمها Seasalt.ai؟",
      answer: "يقدم Seasalt.ai ثلاثة منتجات رئيسية: SeaChat لروبوتات الدردشة بالذكاء الاصطناعي وأتمتة خدمة العملاء، وSeaX لحملات الاتصال متعددة القنوات، وSeaVoice لوكلاء الصوت بالذكاء الاصطناعي وأتمتة المكالمات."
    },
    {
      question: "كيف يساعد Seasalt.ai الشركات؟",
      answer: "يساعد Seasalt.ai الشركات على تقليل تكاليف خدمة العملاء وتحسين أوقات الاستجابة وأتمتة المهام المتكررة وتوفير دعم العملاء على مدار الساعة طوال أيام الأسبوع عبر قنوات اتصال متعددة باستخدام تقنية الذكاء الاصطناعي المتقدمة."
    }
  ],
  'fa': [
    {
      question: "Seasalt.ai چیست؟",
      answer: "Seasalt.ai یک پلتفرم ارتباطات مشتری چندکاناله مبتنی بر هوش مصنوعی است که به کسب‌وکارها کمک می‌کند خدمات مشتری را در کانال‌های متعدد از جمله WhatsApp، پیامک، تماس‌های صوتی و چت وب خودکار کنند."
    },
    {
      question: "Seasalt.ai چه محصولاتی ارائه می‌دهد؟",
      answer: "Seasalt.ai سه محصول اصلی ارائه می‌دهد: SeaChat برای چت‌بات‌های هوش مصنوعی و خودکارسازی خدمات مشتری، SeaX برای کمپین‌های ارتباطی چندکاناله، و SeaVoice برای عوامل صوتی هوش مصنوعی و خودکارسازی تماس."
    },
    {
      question: "Seasalt.ai چگونه به کسب‌وکارها کمک می‌کند؟",
      answer: "Seasalt.ai با استفاده از فناوری پیشرفته هوش مصنوعی به کسب‌وکارها کمک می‌کند تا هزینه‌های خدمات مشتری را کاهش دهند، زمان پاسخ‌گویی را بهبود بخشند، کارهای تکراری را خودکار کنند و پشتیبانی 24/7 مشتری را در کانال‌های ارتباطی متعدد ارائه دهند."
    }
  ],
  'fil': [
    {
      question: "Ano ang Seasalt.ai?",
      answer: "Ang Seasalt.ai ay isang AI-powered omnichannel customer communication platform na tumutulong sa mga negosyo na mag-automate ng customer service sa maraming channels kasama ang WhatsApp, SMS, voice calls, at web chat."
    },
    {
      question: "Anong mga produkto ang inaalok ng Seasalt.ai?",
      answer: "Nag-aalok ang Seasalt.ai ng tatlong pangunahing produkto: SeaChat para sa AI chatbots at customer service automation, SeaX para sa omnichannel communication campaigns, at SeaVoice para sa AI voice agents at call automation."
    },
    {
      question: "Paano nakakatulong ang Seasalt.ai sa mga negosyo?",
      answer: "Tumutulong ang Seasalt.ai sa mga negosyo na mabawasan ang customer service costs, mapabuti ang response times, ma-automate ang repetitive tasks, at magbigay ng 24/7 customer support sa maraming communication channels gamit ang advanced AI technology."
    }
  ],
  'hi': [
    {
      question: "Seasalt.ai क्या है?",
      answer: "Seasalt.ai एक AI-संचालित ओमनीचैनल ग्राहक संचार प्लेटफॉर्म है जो व्यवसायों को WhatsApp, SMS, आवाज कॉल और वेब चैट सहित कई चैनलों में ग्राहक सेवा को स्वचालित करने में मदद करता है।"
    },
    {
      question: "Seasalt.ai कौन से उत्पाद प्रदान करता है?",
      answer: "Seasalt.ai तीन मुख्य उत्पाद प्रदान करता है: AI चैटबॉट और ग्राहक सेवा स्वचालन के लिए SeaChat, ओमनीचैनल संचार अभियानों के लिए SeaX, और AI आवाज एजेंट और कॉल स्वचालन के लिए SeaVoice।"
    },
    {
      question: "Seasalt.ai व्यवसायों की कैसे मदद करता है?",
      answer: "Seasalt.ai उन्नत AI तकनीक का उपयोग करके व्यवसायों को ग्राहक सेवा लागत कम करने, प्रतिक्रिया समय में सुधार करने, दोहराए जाने वाले कार्यों को स्वचालित करने और कई संचार चैनलों में 24/7 ग्राहक सहायता प्रदान करने में मदद करता है।"
    }
  ],
  'id': [
    {
      question: "Apa itu Seasalt.ai?",
      answer: "Seasalt.ai adalah platform komunikasi pelanggan omnichannel bertenaga AI yang membantu bisnis mengotomatisasi layanan pelanggan di berbagai saluran termasuk WhatsApp, SMS, panggilan suara, dan chat web."
    },
    {
      question: "Produk apa yang ditawarkan Seasalt.ai?",
      answer: "Seasalt.ai menawarkan tiga produk utama: SeaChat untuk chatbot AI dan otomatisasi layanan pelanggan, SeaX untuk kampanye komunikasi omnichannel, dan SeaVoice untuk agen suara AI dan otomatisasi panggilan."
    },
    {
      question: "Bagaimana Seasalt.ai membantu bisnis?",
      answer: "Seasalt.ai membantu bisnis mengurangi biaya layanan pelanggan, meningkatkan waktu respons, mengotomatisasi tugas berulang, dan menyediakan dukungan pelanggan 24/7 di berbagai saluran komunikasi menggunakan teknologi AI canggih."
    }
  ],
  'ms': [
    {
      question: "Apakah Seasalt.ai?",
      answer: "Seasalt.ai ialah platform komunikasi pelanggan omnichannel berkuasa AI yang membantu perniagaan mengautomatikkan perkhidmatan pelanggan merentasi pelbagai saluran termasuk WhatsApp, SMS, panggilan suara, dan sembang web."
    },
    {
      question: "Apakah produk yang ditawarkan oleh Seasalt.ai?",
      answer: "Seasalt.ai menawarkan tiga produk utama: SeaChat untuk chatbot AI dan automasi perkhidmatan pelanggan, SeaX untuk kempen komunikasi omnichannel, dan SeaVoice untuk ejen suara AI dan automasi panggilan."
    },
    {
      question: "Bagaimanakah Seasalt.ai membantu perniagaan?",
      answer: "Seasalt.ai membantu perniagaan mengurangkan kos perkhidmatan pelanggan, meningkatkan masa respons, mengautomatikkan tugas berulang, dan menyediakan sokongan pelanggan 24/7 merentasi pelbagai saluran komunikasi menggunakan teknologi AI canggih."
    }
  ],
  'pl': [
    {
      question: "Co to jest Seasalt.ai?",
      answer: "Seasalt.ai to platforma komunikacji z klientami omnichannel napędzana przez AI, która pomaga firmom automatyzować obsługę klienta w wielu kanałach, w tym WhatsApp, SMS, rozmowy głosowe i czat internetowy."
    },
    {
      question: "Jakie produkty oferuje Seasalt.ai?",
      answer: "Seasalt.ai oferuje trzy główne produkty: SeaChat dla chatbotów AI i automatyzacji obsługi klienta, SeaX dla kampanii komunikacji omnichannel oraz SeaVoice dla agentów głosowych AI i automatyzacji połączeń."
    },
    {
      question: "Jak Seasalt.ai pomaga firmom?",
      answer: "Seasalt.ai pomaga firmom obniżyć koszty obsługi klienta, poprawić czasy odpowiedzi, zautomatyzować powtarzające się zadania i zapewnić całodobowe wsparcie klienta w wielu kanałach komunikacji przy użyciu zaawansowanej technologii AI."
    }
  ],
  'pt': [
    {
      question: "O que é o Seasalt.ai?",
      answer: "Seasalt.ai é uma plataforma de comunicação omnichannel com clientes alimentada por IA que ajuda empresas a automatizar o atendimento ao cliente em vários canais, incluindo WhatsApp, SMS, chamadas de voz e chat web."
    },
    {
      question: "Quais produtos o Seasalt.ai oferece?",
      answer: "Seasalt.ai oferece três produtos principais: SeaChat para chatbots de IA e automação de atendimento ao cliente, SeaX para campanhas de comunicação omnichannel e SeaVoice para agentes de voz de IA e automação de chamadas."
    },
    {
      question: "Como o Seasalt.ai ajuda as empresas?",
      answer: "Seasalt.ai ajuda as empresas a reduzir custos de atendimento ao cliente, melhorar tempos de resposta, automatizar tarefas repetitivas e fornecer suporte ao cliente 24/7 em vários canais de comunicação usando tecnologia de IA avançada."
    }
  ],
  'ru': [
    {
      question: "Что такое Seasalt.ai?",
      answer: "Seasalt.ai - это платформа омниканальной клиентской коммуникации на основе ИИ, которая помогает предприятиям автоматизировать обслуживание клиентов по нескольким каналам, включая WhatsApp, SMS, голосовые звонки и веб-чат."
    },
    {
      question: "Какие продукты предлагает Seasalt.ai?",
      answer: "Seasalt.ai предлагает три основных продукта: SeaChat для ИИ-чатботов и автоматизации обслуживания клиентов, SeaX для омниканальных коммуникационных кампаний и SeaVoice для голосовых ИИ-агентов и автоматизации звонков."
    },
    {
      question: "Как Seasalt.ai помогает бизнесу?",
      answer: "Seasalt.ai помогает предприятиям снизить расходы на обслуживание клиентов, улучшить время отклика, автоматизировать повторяющиеся задачи и обеспечить круглосуточную поддержку клиентов по нескольким каналам связи, используя передовые ИИ-технологии."
    }
  ],
  'ta': [
    {
      question: "Seasalt.ai என்றால் என்ன?",
      answer: "Seasalt.ai என்பது AI-ஆல் இயக்கப்படும் ஒரு பல்வேறு சேனல் வாடிக்கையாளர் தொடர்பு தளமாகும், இது WhatsApp, SMS, குரல் அழைப்புகள் மற்றும் வலை அரட்டை உள்ளிட்ட பல சேனல்களில் வாடிக்கையாளர் சேவையை தானியங்குபடுத்த வணிகங்களுக்கு உதவுகிறது."
    },
    {
      question: "Seasalt.ai என்ன தயாரிப்புகளை வழங்குகிறது?",
      answer: "Seasalt.ai மூன்று முக்கிய தயாரிப்புகளை வழங்குகிறது: AI அரட்டைபோட்கள் மற்றும் வாடிக்கையாளர் சேவை தானியங்குபடுத்தலுக்கான SeaChat, பல்வேறு சேனல் தொடர்பு பிரச்சாரங்களுக்கான SeaX, மற்றும் AI குரல் முகவர்கள் மற்றும் அழைப்பு தானியங்குபடுத்தலுக்கான SeaVoice."
    },
    {
      question: "Seasalt.ai வணிகங்களுக்கு எவ்வாறு உதவுகிறது?",
      answer: "Seasalt.ai மேம்பட்ட AI தொழில்நுட்பத்தைப் பயன்படுத்தி வணிகங்களுக்கு வாடிக்கையாளர் சேவை செலவுகளைக் குறைக்கவும், பதில் நேரங்களை மேம்படுத்தவும், மீண்டும் மீண்டும் செய்யும் பணிகளை தானியங்குபடுத்தவும், மற்றும் பல தொடர்பு சேனல்களில் 24/7 வாடிக்கையாளர் ஆதரவை வழங்கவும் உதவுகிறது."
    }
  ],
  'th': [
    {
      question: "Seasalt.ai คืออะไร?",
      answer: "Seasalt.ai เป็นแพลตฟอร์มการสื่อสารลูกค้าแบบหลายช่องทางที่ขับเคลื่อนด้วย AI ที่ช่วยธุรกิจทำให้การบริการลูกค้าเป็นแบบอัตโนมัติในหลายช่องทาง รวมถึง WhatsApp, SMS, การโทรเสียง และเว็บแชท"
    },
    {
      question: "Seasalt.ai เสนอผลิตภัณฑ์อะไรบ้าง?",
      answer: "Seasalt.ai เสนอผลิตภัณฑ์หลักสามตัว: SeaChat สำหรับแชทบอท AI และระบบอัตโนมัติการบริการลูกค้า, SeaX สำหรับแคมเปญการสื่อสารแบบหลายช่องทาง และ SeaVoice สำหรับเอเจนต์เสียง AI และระบบอัตโนมัติการโทร"
    },
    {
      question: "Seasalt.ai ช่วยธุรกิจอย่างไร?",
      answer: "Seasalt.ai ช่วยธุรกิจลดต้นทุนการบริการลูกค้า ปรับปรุงเวลาการตอบสนอง ทำให้งานที่ทำซ้ำเป็นแบบอัตโนมัติ และให้การสนับสนุนลูกค้า 24/7 ในหลายช่องทางการสื่อสารโดยใช้เทคโนโลยี AI ขั้นสูง"
    }
  ],
  'vi': [
    {
      question: "Seasalt.ai là gì?",
      answer: "Seasalt.ai là nền tảng giao tiếp khách hàng đa kênh được hỗ trợ bởi AI giúp các doanh nghiệp tự động hóa dịch vụ khách hàng trên nhiều kênh bao gồm WhatsApp, SMS, cuộc gọi thoại và chat web."
    },
    {
      question: "Seasalt.ai cung cấp những sản phẩm gì?",
      answer: "Seasalt.ai cung cấp ba sản phẩm chính: SeaChat cho chatbot AI và tự động hóa dịch vụ khách hàng, SeaX cho các chiến dịch giao tiếp đa kênh, và SeaVoice cho đại lý giọng nói AI và tự động hóa cuộc gọi."
    },
    {
      question: "Seasalt.ai giúp doanh nghiệp như thế nào?",
      answer: "Seasalt.ai giúp doanh nghiệp giảm chi phí dịch vụ khách hàng, cải thiện thời gian phản hồi, tự động hóa các tác vụ lặp lại và cung cấp hỗ trợ khách hàng 24/7 trên nhiều kênh giao tiếp bằng công nghệ AI tiên tiến."
    }
  ]
};

/**
 * Get localized service schema
 */
export function getLocalizedServiceSchema(serviceKey: 'seachat' | 'seax', language: string) {
  return LOCALIZED_SERVICE_SCHEMAS[serviceKey][language] || LOCALIZED_SERVICE_SCHEMAS[serviceKey]['en'];
}

/**
 * Get localized FAQ schema
 */
export function getLocalizedFaqSchema(language: string) {
  return LOCALIZED_FAQ_SCHEMAS[language] || LOCALIZED_FAQ_SCHEMAS['en'];
}

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
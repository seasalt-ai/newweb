/**
 * Structured Data Configuration
 * 
 * This file provides the foundational data structures, constants,
 * and business information used to generate schema.org structured data.
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

// Enhanced organization information interface
export interface EnhancedOrganizationInfo extends OrganizationInfo {
  address?: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    addressCountry: string;
    postalCode: string;
  };
  telephone?: string;
  aggregateRating?: {
    ratingValue: number;
    bestRating: number;
    ratingCount: number;
  };
  numberOfEmployees?: {
    minValue: number;
    maxValue: number;
  };
  industry: string;
  description: string;
}

export const ORGANIZATION_INFO: EnhancedOrganizationInfo = {
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
    availableLanguage: SUPPORTED_LANGUAGES.map(lang => 
      LANGUAGE_REGION_MAP[lang]?.language || lang
    )
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

// Enhanced Product Info with Multilingual Support
export interface LocalizedProductInfo extends ProductInfo {
  localizedDescriptions?: Record<string, string>;
  localizedFeatures?: Record<string, string[]>;
  localizedOfferDescriptions?: Record<string, string>;
}

// =============================================================================
// Multilingual Product Data
// =============================================================================

/**
 * Comprehensive multilingual product descriptions for all supported languages
 */
export const LOCALIZED_PRODUCT_DESCRIPTIONS: Record<ProductKey, Record<string, string>> = {
  seachat: {
    'en': 'Free AI chatbot platform with unlimited conversations, 4 human agents, and enterprise AI models. Build powerful conversational AI experiences.',
    'zh-TW': '免費的 AI 聊天機器人平台，提供無限對話、4 名人工客服和企業級 AI 模型。打造強大的對話式 AI 體驗。',
    'zh-CN': '免费的 AI 聊天机器人平台，提供无限对话、4 名人工客服和企业级 AI 模型。打造强大的对话式 AI 体验。',
    'es': 'Plataforma de chatbot de IA gratuita con conversaciones ilimitadas, 4 agentes humanos y modelos de IA empresariales. Cree potentes experiencias de IA conversacional.',
    'fr': "Plateforme de chatbot IA gratuite avec conversations illimitées, 4 agents humains et modèles d'IA d'entreprise. Créez des expériences d'IA conversationnelle puissantes.",
    'de': 'Kostenlose KI-Chatbot-Plattform mit unbegrenzten Gesprächen, 4 menschlichen Agenten und Enterprise-KI-Modellen. Erstellen Sie leistungsstarke konversationelle KI-Erlebnisse.',
    'pt': 'Plataforma de chatbot de IA gratuita com conversas ilimitadas, 4 agentes humanos e modelos de IA empresariais. Construa experiências poderosas de IA conversacional.',
    'ja': '無制限の会話、4人のヒューマンエージェント、エンタープライズAIモデルを備えた無料のAIチャットボットプラットフォーム。強力な会話型AI体験を構築。',
    'ko': '무제한 대화, 4명의 휴먼 에이전트, 엔터프라이즈 AI 모델을 제공하는 무료 AI 챗봇 플랫폼. 강력한 대화형 AI 경험 구축.',
    'ar': 'منصة روبوت محادثة بالذكاء الاصطناعي مجانية مع محادثات غير محدودة و4 عملاء بشريين ونماذج ذكاء اصطناعي للمؤسسات. أنشئ تجارب ذكاء اصطناعي محادثي قوية.',
    'ru': 'Бесплатная платформа чат-бота на базе ИИ с неограниченными диалогами, 4 живыми агентами и корпоративными ИИ-моделями. Создавайте мощные разговорные ИИ-решения.',
    'hi': 'असीमित बातचीत, 4 मानव एजेंट और एंटरप्राइज़ AI मॉडलों के साथ मुफ्त AI चैटबॉट प्लेटफ़ॉर्म। शक्तिशाली संवादात्मक AI अनुभव बनाएं।',
    'id': 'Platform chatbot AI gratis dengan percakapan tanpa batas, 4 agen manusia, dan model AI perusahaan. Bangun pengalaman AI percakapan yang kuat.',
    'th': 'แพลตฟอร์มแชตบอท AI ฟรีพร้อมการสนทนาไม่จำกัด ตัวแทนมนุษย์ 4 คน และโมเดล AI สำหรับองค์กร สร้างประสบการณ์ AI เชิงสนทนาที่ทรงพลัง',
    'vi': 'Nền tảng chatbot AI miễn phí với số lượng cuộc trò chuyện không giới hạn, 4 nhân viên hỗ trợ con người và các mô hình AI doanh nghiệp. Xây dựng trải nghiệm AI hội thoại mạnh mẽ.',
    'ms': 'Platform chatbot AI percuma dengan perbualan tanpa had, 4 ejen manusia dan model AI perusahaan. Bina pengalaman AI perbualan yang berkuasa.',
    'fil': 'Libreng AI chatbot platform na may walang limitasyong usapan, 4 na human agents, at enterprise AI models. Bumuo ng makapangyarihang conversational AI experiences.',
    'pl': 'Darmowa platforma chatbota AI z nielimitowanymi rozmowami, 4 ludzkimi agentami i modelami AI klasy enterprise. Twórz potężne doświadczenia konwersacyjne AI.',
    'fa': 'پلتفرم رایگان چت‌بات هوش مصنوعی با گفتگوهای نامحدود، ۴ اپراتور انسانی و مدل‌های هوش مصنوعی سازمانی. تجربه‌های قدرتمند هوش مصنوعی مکالمه‌ای بسازید.',
    'ta': 'வரம்பற்ற உரையாடல்கள், 4 மனித முகவர்கள் மற்றும் நிறுவனம் தரமான AI மாதிரிகள் கொண்ட இலவச AI அரட்டைப் பேச்சு தளம். சக்திவாய்ந்த உரையாடல் AI அனுபவங்களை உருவாக்குங்கள்.'
  },
  seax: {
    'en': 'Omnichannel communication platform that unifies WhatsApp, SMS, voice calls, and more in one dashboard. Scale your customer communications.',
    'zh-TW': '全通路溝通平台，將 WhatsApp、簡訊、語音通話等整合在一個儀表板中。擴展您的客戶溝通。',
    'zh-CN': '全渠道沟通平台，将 WhatsApp、短信、语音通话等整合在一个仪表板中。扩展您的客户沟通。',
    'es': 'Plataforma de comunicación omnicanal que unifica WhatsApp, SMS, llamadas de voz y más en un solo panel. Escale sus comunicaciones con los clientes.',
    'fr': "Plateforme de communication omnicanale qui unifie WhatsApp, SMS, appels vocaux et plus encore dans un seul tableau de bord. Faites évoluer vos communications client.",
    'de': 'Omnichannel-Kommunikationsplattform, die WhatsApp, SMS, Sprachanrufe und mehr in einem Dashboard vereint. Skalieren Sie Ihre Kundenkommunikation.',
    'pt': 'Plataforma de comunicação omnichannel que unifica WhatsApp, SMS, chamadas de voz e muito mais em um único painel. Escale suas comunicações com clientes.',
    'ja': 'WhatsApp、SMS、音声通話などを1つのダッシュボードに統合するオムニチャネルコミュニケーションプラットフォーム。顧客コミュニケーションを拡張。',
    'ko': 'WhatsApp, SMS, 음성 통화 등을 하나의 대시보드에 통합하는 옴니채널 커뮤니케이션 플랫폼. 고객 커뮤니케이션 확장.',
    'ar': 'منصة اتصالات متعددة القنوات توحد WhatsApp والرسائل النصية والمكالمات الصوتية والمزيد في لوحة تحكم واحدة. قم بتوسيع اتصالاتك مع العملاء.',
    'ru': 'Омниканальная платформа коммуникаций, объединяющая WhatsApp, SMS, голосовые вызовы и многое другое в единой панели. Масштабируйте коммуникации с клиентами.',
    'hi': 'व्हाट्सएप, एसएमएस, वॉयस कॉल और अधिक को एक डैशबोर्ड में एकीकृत करने वाला ऑम्निचैनल संचार प्लेटफ़ॉर्म। अपनी ग्राहक संचार को स्केल करें।',
    'id': 'Platform komunikasi omnichannel yang menyatukan WhatsApp, SMS, panggilan suara, dan lainnya dalam satu dasbor. Skala komunikasi pelanggan Anda.',
    'th': 'แพลตฟอร์มการสื่อสารแบบ Omnichannel ที่รวม WhatsApp, SMS, การโทรด้วยเสียง และอื่น ๆ ไว้ในแดชบอร์ดเดียว ขยายการสื่อสารกับลูกค้าของคุณ',
    'vi': 'Nền tảng giao tiếp đa kênh hợp nhất WhatsApp, SMS, cuộc gọi thoại và nhiều hơn nữa trong một bảng điều khiển. Mở rộng giao tiếp với khách hàng của bạn.',
    'ms': 'Platform komunikasi omnichannel yang menyatukan WhatsApp, SMS, panggilan suara dan banyak lagi dalam satu papan pemuka. Skala komunikasi pelanggan anda.',
    'fil': 'Omnichannel communication platform na pinagsasama ang WhatsApp, SMS, voice calls, at iba pa sa iisang dashboard. I-scale ang iyong customer communications.',
    'pl': 'Omnikanałowa platforma komunikacyjna, która łączy WhatsApp, SMS, połączenia głosowe i więcej w jednym panelu. Skaluj komunikację z klientami.',
    'fa': 'پلتفرم ارتباطی همه‌کاناله که واتس‌اپ، پیامک، تماس صوتی و موارد دیگر را در یک داشبورد یکپارچه می‌کند. ارتباطات مشتریان خود را مقیاس دهید.',
    'ta': 'WhatsApp, SMS, குரல் அழைப்புகள் மற்றும் பலவற்றை ஒரு டாஷ்போர்டில் ஒருங்கிணைக்கும் Omnichannel தொடர்பு தளம். உங்கள் வாடிக்கையாளர் தொடர்புகளை அளவிடுங்கள்.'
  },
  seavoice: {
    'en': 'AI-powered voice communication platform with intelligent call routing, voice analytics, and automated responses. Transform your voice operations.',
    'zh-TW': '採用 AI 技術的語音溝通平台，具備智能通話路由、語音分析和自動化回應。轉型您的語音營運。',
    'zh-CN': '采用 AI 技术的语音沟通平台，具备智能通话路由、语音分析和自动化响应。转型您的语音运营。',
    'es': 'Plataforma de comunicación de voz impulsada por IA con enrutamiento inteligente de llamadas, analítica de voz y respuestas automatizadas. Transforme sus operaciones de voz.',
    'fr': "Plateforme de communication vocale alimentée par l'IA avec routage intelligent des appels, analytique vocale et réponses automatisées. Transformez vos opérations vocales.",
    'de': 'KI-gestützte Sprachkommunikationsplattform mit intelligentem Anrufrouting, Sprachanalysen und automatisierten Antworten. Transformieren Sie Ihre Sprachabläufe.',
    'pt': 'Plataforma de comunicação por voz com IA com roteamento inteligente de chamadas, análises de voz e respostas automatizadas. Transforme suas operações de voz.',
    'ja': 'インテリジェントなコールルーティング、音声分析、自動応答を備えたAI音声コミュニケーションプラットフォーム。音声オペレーションを変革。',
    'ko': '지능형 통화 라우팅, 음성 분석, 자동 응답을 갖춘 AI 기반 음성 커뮤니케이션 플랫폼. 음성 운영을 혁신.',
    'ar': 'منصة اتصالات صوتية مدعومة بالذكاء الاصطناعي مع توجيه ذكي للمكالمات وتحليلات صوتية واستجابات آلية. حوّل عمليات الصوت لديك.',
    'ru': 'Платформа голосовой связи на базе ИИ с интеллектуальной маршрутизацией звонков, голосовой аналитикой и автоматическими ответами. Трансформируйте голосовые операции.',
    'hi': 'इंटेलिजेंट कॉल रूटिंग, वॉयस एनालिटिक्स और स्वचालित प्रतिक्रियाओं के साथ AI-संचालित वॉयस कम्युनिकेशन प्लेटफ़ॉर्म। अपनी वॉयस ऑपरेशंस को बदलें।',
    'id': 'Platform komunikasi suara bertenaga AI dengan perutean panggilan cerdas, analitik suara, dan respons otomatis. Transformasikan operasi suara Anda.',
    'th': 'แพลตฟอร์มการสื่อสารด้วยเสียงที่ขับเคลื่อนด้วย AI พร้อมการกำหนดเส้นทางการโทรอัจฉริยะ การวิเคราะห์เสียง และการตอบสนองอัตโนมัติ เปลี่ยนแปลงการดำเนินงานด้านเสียงของคุณ',
    'vi': 'Nền tảng giao tiếp giọng nói được hỗ trợ bởi AI với định tuyến cuộc gọi thông minh, phân tích giọng nói và phản hồi tự động. Chuyển đổi hoạt động thoại của bạn.',
    'ms': 'Platform komunikasi suara berkuasa AI dengan perutean panggilan pintar, analitik suara dan respons automatik. Ubah operasi suara anda.',
    'fil': 'AI-powered voice communication platform na may intelligent call routing, voice analytics, at automated responses. I-transform ang iyong voice operations.',
    'pl': 'Platforma komunikacji głosowej zasilana przez AI z inteligentnym kierowaniem połączeń, analizą głosu i zautomatyzowanymi odpowiedziami. Odmień swoje operacje głosowe.',
    'fa': 'سکوی ارتباط صوتی مبتنی بر هوش مصنوعی با مسیریابی هوشمند تماس، تحلیل گفتار و پاسخ‌های خودکار. عملیات صوتی خود را متحول کنید.',
    'ta': 'புத்திசாலி கால் ரௌட்டிங், குரல் பகுப்பாய்வு மற்றும் தானியங்கு பதில்களுடன் AI சக்தியூட்டப்பட்ட குரல் தொடர்பு தளம். உங்கள் குரல் செயல்பாடுகளை மாற்றியமைக்கவும்.'
  }
};

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
      '/products/seachat-kb.png',
      '/products/seachat-webchat.png',
      '/products/seachat-conv.png'
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
      '/products/seax-compose.png',
      '/products/seax-dialpad.png',
      '/products/seax-whatsapp.png',
      '/products/seax-number.png'
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
      '/products/seavoice-stt.png',
      '/products/seavoice-tts.png',
      '/products/seavoice-discord.png'
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

// =============================================================================
// Localized Data Access Utilities
// =============================================================================

/**
 * Gets localized product description from the centralized data
 * @param productKey - The product key (seachat, seax, seavoice)
 * @param language - The language code
 * @returns Localized description or English fallback
 */
export function getLocalizedProductDescription(productKey: ProductKey, language: string): string {
  const localizedDesc = LOCALIZED_PRODUCT_DESCRIPTIONS[productKey]?.[language];
  if (localizedDesc) {
    return localizedDesc;
  }
  
  // Fallback to English description
  const englishDesc = LOCALIZED_PRODUCT_DESCRIPTIONS[productKey]?.['en'];
  if (englishDesc) {
    return englishDesc;
  }
  
  // Final fallback to the basic product info description
  return PRODUCTS_INFO[productKey]?.description || '';
}

/**
 * Gets the base product information with optional localized description
 * @param productKey - The product key
 * @param language - Optional language for localized description
 * @returns ProductInfo with potentially localized description
 */
export function getProductInfo(productKey: ProductKey, language?: string): ProductInfo {
  const baseInfo = PRODUCTS_INFO[productKey];
  
  if (!baseInfo) {
    throw new Error(`Product information not found for key: ${productKey}`);
  }
  
  if (!language) {
    return baseInfo;
  }
  
  // Return base info with localized description if available
  const localizedDescription = getLocalizedProductDescription(productKey, language);
  
  return {
    ...baseInfo,
    description: localizedDescription
  };
}

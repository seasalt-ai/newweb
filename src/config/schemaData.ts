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

// Static product information (non-localized)
const PRODUCT_STATIC_INFO = {
  seachat: {
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
    }
  },
  seax: {
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
    }
  },
  seavoice: {
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
    }
  }
};

// Pricing tier interface
export interface PricingTier {
  name: string;
  price: string;
  priceCurrency: string;
  period?: string;
  description: string;
  features?: string[];
  isPopular?: boolean;
  isFree?: boolean;
}

// Base pricing structure (without localized content)
const PRODUCT_PRICING_BASE: Record<ProductKey, Omit<PricingTier, 'name' | 'description' | 'features'>[]> = {
  seachat: [
    {
      price: '0',
      priceCurrency: 'USD',
      period: 'forever',
      isFree: true
    },
    {
      price: '29.99',
      priceCurrency: 'USD',
      period: 'month',
      isPopular: true
    },
    {
      price: 'custom',
      priceCurrency: 'USD'
    }
  ],
  seax: [
    {
      price: '19.99',
      priceCurrency: 'USD',
      period: 'month/user'
    },
    {
      price: '99',
      priceCurrency: 'USD',
      period: 'month',
      isPopular: true
    },
    {
      price: 'custom',
      priceCurrency: 'USD'
    }
  ],
  seavoice: [
    {
      price: '29.99',
      priceCurrency: 'USD',
      period: 'month'
    },
    {
      price: '99',
      priceCurrency: 'USD',
      period: 'month',
      isPopular: true
    },
    {
      price: 'custom',
      priceCurrency: 'USD'
    }
  ]
};

/**
 * Get localized pricing tiers for a product
 * @param productKey - The product key
 * @param language - The language code
 * @returns Array of pricing tiers with localized content
 */
export function getLocalizedPricingTiers(productKey: ProductKey, language: string = 'en'): PricingTier[] {
  const baseTiers = PRODUCT_PRICING_BASE[productKey];
  const tierNames = getPricingTierNames(productKey, language);
  const tierDescriptions = getPricingTierDescriptions(productKey, language);
  const tierFeatures = getPricingTierFeatures(productKey, language);
  
  return baseTiers.map((baseTier, index) => ({
    ...baseTier,
    name: tierNames[index],
    description: tierDescriptions[index],
    features: tierFeatures[index]
  }));
}

/**
 * Get localized tier names
 */
function getPricingTierNames(productKey: ProductKey, language: string): string[] {
  const names: Record<ProductKey, Record<string, string[]>> = {
    seachat: {
      'en': ['Live Agent', 'SeaChat Premium', 'Custom Enterprise'],
      'zh-TW': ['即時客服', 'SeaChat 進階版', '客製化企業版'],
      'zh-CN': ['实时客服', 'SeaChat 高级版', '定制企业版'],
      'es': ['Agente en Vivo', 'SeaChat Premium', 'Empresa Personalizada'],
      'fr': ['Agent en Direct', 'SeaChat Premium', 'Entreprise Personnalisée'],
      'de': ['Live-Agent', 'SeaChat Premium', 'Individuelles Enterprise'],
      'pt': ['Agente ao Vivo', 'SeaChat Premium', 'Empresa Personalizada'],
      'ja': ['ライブエージェント', 'SeaChatプレミアム', 'カスタムエンタープライズ'],
      'ko': ['라이브 에이전트', 'SeaChat 프리미엄', '맞춤형 엔터프라이즈'],
      'ar': ['وكيل مباشر', 'SeaChat بريميوم', 'مؤسسة مخصصة'],
      'ru': ['Живой агент', 'SeaChat Премиум', 'Индивидуальный корпоративный'],
      'hi': ['लाइव एजेंट', 'SeaChat प्रीमियम', 'कस्टम एंटरप्राइज़'],
      'id': ['Agen Langsung', 'SeaChat Premium', 'Perusahaan Kustom'],
      'th': ['ตัวแทนสด', 'SeaChat พรีเมียม', 'องค์กรแบบกำหนดเอง'],
      'vi': ['Nhân viên Trực tiếp', 'SeaChat Premium', 'Doanh nghiệp Tùy chỉnh'],
      'ms': ['Ejen Langsung', 'SeaChat Premium', 'Perusahaan Tersuai'],
      'fil': ['Live Agent', 'SeaChat Premium', 'Custom Enterprise'],
      'pl': ['Agent na żywo', 'SeaChat Premium', 'Niestandardowe przedsiębiorstwo'],
      'fa': ['نماینده زنده', 'SeaChat پرمیوم', 'سازمانی سفارشی'],
      'ta': ['நேரடி முகவர்', 'SeaChat பிரீமியம்', 'தனிப்பயன் நிறுவனம்']
    },
    seax: {
      'en': ['WhatsApp Only', 'Omnichannel', 'Custom Enterprise'],
      'zh-TW': ['僅限 WhatsApp', '全通路', '客製化企業版'],
      'zh-CN': ['仅限 WhatsApp', '全渠道', '定制企业版'],
      'es': ['Solo WhatsApp', 'Omnicanal', 'Empresa Personalizada'],
      'fr': ['WhatsApp Uniquement', 'Omnicanal', 'Entreprise Personnalisée'],
      'de': ['Nur WhatsApp', 'Omnichannel', 'Individuelles Enterprise'],
      'pt': ['Apenas WhatsApp', 'Omnichannel', 'Empresa Personalizada'],
      'ja': ['WhatsAppのみ', 'オムニチャネル', 'カスタムエンタープライズ'],
      'ko': ['WhatsApp 전용', '옴니채널', '맞춤형 엔터프라이즈'],
      'ar': ['واتساب فقط', 'متعدد القنوات', 'مؤسسة مخصصة'],
      'ru': ['Только WhatsApp', 'Омниканальный', 'Индивидуальный корпоративный'],
      'hi': ['केवल WhatsApp', 'ओमनीचैनल', 'कस्टम एंटरप्राइज़'],
      'id': ['Hanya WhatsApp', 'Omnichannel', 'Perusahaan Kustom'],
      'th': ['WhatsApp เท่านั้น', 'Omnichannel', 'องค์กรแบบกำหนดเอง'],
      'vi': ['Chỉ WhatsApp', 'Đa kênh', 'Doanh nghiệp Tùy chỉnh'],
      'ms': ['WhatsApp Sahaja', 'Omnichannel', 'Perusahaan Tersuai'],
      'fil': ['WhatsApp Lang', 'Omnichannel', 'Custom Enterprise'],
      'pl': ['Tylko WhatsApp', 'Omnikanał', 'Niestandardowe przedsiębiorstwo'],
      'fa': ['فقط واتساپ', 'چندکاناله', 'سازمانی سفارشی'],
      'ta': ['WhatsApp மட்டும்', 'பல்வழி', 'தனிப்பயன் நிறுவனம்']
    },
    seavoice: {
      'en': ['Inbound Only', 'Inbound + Outbound', 'Custom Enterprise'],
      'zh-TW': ['僅進線', '進線+外撥', '客製化企業版'],
      'zh-CN': ['仅进线', '进线+外拨', '定制企业版'],
      'es': ['Solo Entrante', 'Entrante + Saliente', 'Empresa Personalizada'],
      'fr': ['Entrant Uniquement', 'Entrant + Sortant', 'Entreprise Personnalisée'],
      'de': ['Nur Eingehend', 'Eingehend + Ausgehend', 'Individuelles Enterprise'],
      'pt': ['Apenas Entrada', 'Entrada + Saída', 'Empresa Personalizada'],
      'ja': ['インバウンドのみ', 'インバウンド+アウトバウンド', 'カスタムエンタープライズ'],
      'ko': ['인바운드 전용', '인바운드+아웃바운드', '맞춤형 엔터프라이즈'],
      'ar': ['الوارد فقط', 'الوارد + الصادر', 'مؤسسة مخصصة'],
      'ru': ['Только входящие', 'Входящие + Исходящие', 'Индивидуальный корпоративный'],
      'hi': ['केवल इनबाउंड', 'इनबाउंड + आउटबाउंड', 'कस्टम एंटरप्राइज़'],
      'id': ['Hanya Masuk', 'Masuk + Keluar', 'Perusahaan Kustom'],
      'th': ['สายเข้าเท่านั้น', 'สายเข้า + สายออก', 'องค์กรแบบกำหนดเอง'],
      'vi': ['Chỉ Gọi đến', 'Gọi đến + Gọi đi', 'Doanh nghiệp Tùy chỉnh'],
      'ms': ['Masuk Sahaja', 'Masuk + Keluar', 'Perusahaan Tersuai'],
      'fil': ['Inbound Lang', 'Inbound + Outbound', 'Custom Enterprise'],
      'pl': ['Tylko przychodzące', 'Przychodzące + Wychodzące', 'Niestandardowe przedsiębiorstwo'],
      'fa': ['فقط ورودی', 'ورودی + خروجی', 'سازمانی سفارشی'],
      'ta': ['உள்வரும் மட்டும்', 'உள்வரும் + வெளிச்செல்லும்', 'தனிப்பயன் நிறுவனம்']
    }
  };
  
  return names[productKey][language] || names[productKey]['en'];
}

/**
 * Get localized tier descriptions
 */
function getPricingTierDescriptions(productKey: ProductKey, language: string): string[] {
  const descriptions: Record<ProductKey, Record<string, string[]>> = {
    seachat: {
      'en': [
        'Free forever with 1 human agent and unlimited conversations',
        'AI-powered chatbot with advanced features',
        'Tailored solutions for large organizations'
      ],
      'zh-TW': [
        '永久免費，含1位人工客服和無限對話',
        'AI驅動的聊天機器人，具備進階功能',
        '為大型組織量身打造的解決方案'
      ],
      'zh-CN': [
        '永久免费，含1位人工客服和无限对话',
        'AI驱动的聊天机器人，具备高级功能',
        '为大型组织定制的解决方案'
      ],
      'es': [
        'Gratis para siempre con 1 agente humano y conversaciones ilimitadas',
        'Chatbot impulsado por IA con funciones avanzadas',
        'Soluciones personalizadas para grandes organizaciones'
      ],
      'fr': [
        'Gratuit pour toujours avec 1 agent humain et conversations illimitées',
        'Chatbot alimenté par l\'IA avec fonctionnalités avancées',
        'Solutions sur mesure pour grandes organisations'
      ],
      'de': [
        'Für immer kostenlos mit 1 menschlichen Agenten und unbegrenzten Gesprächen',
        'KI-gesteuerter Chatbot mit erweiterten Funktionen',
        'Maßgeschneiderte Lösungen für große Organisationen'
      ],
      'pt': [
        'Grátis para sempre com 1 agente humano e conversas ilimitadas',
        'Chatbot alimentado por IA com recursos avançados',
        'Soluções personalizadas para grandes organizações'
      ],
      'ja': [
        '1人の人間エージェントと無制限の会話で永久無料',
        '高度な機能を備えたAI搭載チャットボット',
        '大規模組織向けのカスタマイズソリューション'
      ],
      'ko': [
        '1명의 상담원과 무제한 대화로 영원히 무료',
        '고급 기능을 갖춘 AI 기반 챗봇',
        '대규모 조직을 위한 맞춤형 솔루션'
      ],
      'ar': [
        'مجاني للأبد مع وكيل بشري واحد ومحادثات غير محدودة',
        'روبوت محادثة مدعوم بالذكاء الاصطناعي مع ميزات متقدمة',
        'حلول مخصصة للمؤسسات الكبيرة'
      ],
      'ru': [
        'Бесплатно навсегда с 1 человеческим агентом и неограниченными разговорами',
        'Чат-бот на основе ИИ с расширенными функциями',
        'Индивидуальные решения для крупных организаций'
      ],
      'hi': [
        '1 मानव एजेंट और असीमित वार्तालाप के साथ हमेशा मुफ्त',
        'उन्नत सुविधाओं के साथ AI-संचालित चैटबॉट',
        'बड़े संगठनों के लिए अनुकूलित समाधान'
      ],
      'id': [
        'Gratis selamanya dengan 1 agen manusia dan percakapan tak terbatas',
        'Chatbot bertenaga AI dengan fitur canggih',
        'Solusi yang disesuaikan untuk organisasi besar'
      ],
      'th': [
        'ฟรีตลอดกาลพร้อมตัวแทนมนุษย์ 1 คนและการสนทนาไม่จำกัด',
        'แชทบอทที่ขับเคลื่อนด้วย AI พร้อมฟีเจอร์ขั้นสูง',
        'โซลูชันที่ปรับแต่งสำหรับองค์กรขนาดใหญ่'
      ],
      'vi': [
        'Miễn phí vĩnh viễn với 1 nhân viên và cuộc trò chuyện không giới hạn',
        'Chatbot được hỗ trợ bởi AI với các tính năng nâng cao',
        'Giải pháp tùy chỉnh cho các tổ chức lớn'
      ],
      'ms': [
        'Percuma selama-lamanya dengan 1 ejen manusia dan perbualan tanpa had',
        'Chatbot berkuasa AI dengan ciri-ciri canggih',
        'Penyelesaian yang disesuaikan untuk organisasi besar'
      ],
      'fil': [
        'Libre magpakailanman na may 1 ahente at walang hanggang pag-uusap',
        'AI-powered chatbot na may advanced features',
        'Mga solusyong inangkop para sa malalaking organisasyon'
      ],
      'pl': [
        'Darmowe na zawsze z 1 agentem i nieograniczonymi rozmowami',
        'Chatbot napędzany AI z zaawansowanymi funkcjami',
        'Rozwiązania dostosowane do dużych organizacji'
      ],
      'fa': [
        'رایگان برای همیشه با 1 نماینده انسانی و مکالمات نامحدود',
        'چت‌بات مجهز به هوش مصنوعی با ویژگی‌های پیشرفته',
        'راه‌حل‌های سفارشی برای سازمان‌های بزرگ'
      ],
      'ta': [
        '1 மனித முகவர் மற்றும் வரம்பற்ற உரையாடல்களுடன் எப்போதும் இலவசம்',
        'மேம்பட்ட அம்சங்களுடன் AI-இயக்கப்படும் சாட்போட்',
        'பெரிய நிறுவனங்களுக்கான தனிப்பயன் தீர்வுகள்'
      ]
    },
    seax: {
      'en': [
        'WhatsApp Business platform for messaging',
        'Complete contact center platform (first user)',
        'Multi-workspace solution for agencies'
      ],
      'zh-TW': [
        'WhatsApp商業訊息平台',
        '完整的聯絡中心平台（第一位用戶）',
        '適合代理商的多工作區解決方案'
      ],
      'zh-CN': [
        'WhatsApp商业消息平台',
        '完整的联系中心平台（第一位用户）',
        '适合代理商的多工作区解决方案'
      ],
      'es': [
        'Plataforma WhatsApp Business para mensajería',
        'Plataforma completa de centro de contacto (primer usuario)',
        'Solución multi-espacio de trabajo para agencias'
      ],
      'fr': [
        'Plateforme WhatsApp Business pour la messagerie',
        'Plateforme complète de centre de contact (premier utilisateur)',
        'Solution multi-espaces de travail pour agences'
      ],
      'de': [
        'WhatsApp Business-Plattform für Messaging',
        'Komplette Contact-Center-Plattform (erster Benutzer)',
        'Multi-Workspace-Lösung für Agenturen'
      ],
      'pt': [
        'Plataforma WhatsApp Business para mensagens',
        'Plataforma completa de centro de contato (primeiro usuário)',
        'Solução multi-workspace para agências'
      ],
      'ja': [
        'メッセージング用WhatsAppビジネスプラットフォーム',
        '完全なコンタクトセンタープラットフォーム（初回ユーザー）',
        '代理店向けマルチワークスペースソリューション'
      ],
      'ko': [
        '메시징을 위한 WhatsApp 비즈니스 플랫폼',
        '완벽한 컨택 센터 플랫폼 (첫 번째 사용자)',
        '에이전시를 위한 멀티 워크스페이스 솔루션'
      ],
      'ar': [
        'منصة WhatsApp Business للمراسلة',
        'منصة مركز اتصال كاملة (المستخدم الأول)',
        'حل متعدد مساحات العمل للوكالات'
      ],
      'ru': [
        'Платформа WhatsApp Business для обмена сообщениями',
        'Полная платформа контакт-центра (первый пользователь)',
        'Многопространственное решение для агентств'
      ],
      'hi': [
        'संदेश भेजने के लिए WhatsApp Business प्लेटफॉर्म',
        'पूर्ण संपर्क केंद्र प्लेटफॉर्म (पहला उपयोगकर्ता)',
        'एजेंसियों के लिए मल्टी-वर्कस्पेस समाधान'
      ],
      'id': [
        'Platform WhatsApp Business untuk perpesanan',
        'Platform pusat kontak lengkap (pengguna pertama)',
        'Solusi multi-ruang kerja untuk agensi'
      ],
      'th': [
        'แพลตฟอร์ม WhatsApp Business สำหรับการส่งข้อความ',
        'แพลตฟอร์มศูนย์ติดต่อที่สมบูรณ์ (ผู้ใช้คนแรก)',
        'โซลูชันหลายพื้นที่ทำงานสำหรับเอเจนซี'
      ],
      'vi': [
        'Nền tảng WhatsApp Business cho nhắn tin',
        'Nền tảng trung tâm liên hệ hoàn chỉnh (người dùng đầu tiên)',
        'Giải pháp đa không gian làm việc cho các đại lý'
      ],
      'ms': [
        'Platform WhatsApp Business untuk pemesejan',
        'Platform pusat kenalan lengkap (pengguna pertama)',
        'Penyelesaian berbilang ruang kerja untuk agensi'
      ],
      'fil': [
        'WhatsApp Business platform para sa pagmemensahe',
        'Kumpletong contact center platform (unang user)',
        'Multi-workspace solution para sa mga ahensya'
      ],
      'pl': [
        'Platforma WhatsApp Business do wiadomości',
        'Kompletna platforma centrum kontaktowego (pierwszy użytkownik)',
        'Rozwiązanie wieloprzestrzenne dla agencji'
      ],
      'fa': [
        'پلتفرم WhatsApp Business برای پیام‌رسانی',
        'پلتفرم کامل مرکز تماس (اولین کاربر)',
        'راه‌حل چند فضای کاری برای آژانس‌ها'
      ],
      'ta': [
        'செய்தி அனுப்புவதற்கான WhatsApp Business தளம்',
        'முழுமையான தொடர்பு மைய தளம் (முதல் பயனர்)',
        'ஏஜென்சிகளுக்கான பல பணியிட தீர்வு'
      ]
    },
    seavoice: {
      'en': [
        'AI voice agents for incoming calls',
        'Full voice AI platform with campaigns',
        'Enterprise-grade voice solutions'
      ],
      'zh-TW': [
        '處理進線電話的AI語音代理',
        '具備行銷功能的完整語音AI平台',
        '企業級語音解決方案'
      ],
      'zh-CN': [
        '处理进线电话的AI语音代理',
        '具备营销功能的完整语音AI平台',
        '企业级语音解决方案'
      ],
      'es': [
        'Agentes de voz AI para llamadas entrantes',
        'Plataforma completa de voz AI con campañas',
        'Soluciones de voz de grado empresarial'
      ],
      'fr': [
        'Agents vocaux IA pour appels entrants',
        'Plateforme vocale IA complète avec campagnes',
        'Solutions vocales de niveau entreprise'
      ],
      'de': [
        'KI-Sprachagenten für eingehende Anrufe',
        'Vollständige Sprach-KI-Plattform mit Kampagnen',
        'Sprachlösungen auf Unternehmensebene'
      ],
      'pt': [
        'Agentes de voz AI para chamadas recebidas',
        'Plataforma completa de voz AI com campanhas',
        'Soluções de voz de nível empresarial'
      ],
      'ja': [
        '着信通話用のAI音声エージェント',
        'キャンペーン機能付き完全音声AIプラットフォーム',
        'エンタープライズグレードの音声ソリューション'
      ],
      'ko': [
        '수신 통화를 위한 AI 음성 에이전트',
        '캠페인 기능이 있는 전체 음성 AI 플랫폼',
        '엔터프라이즈급 음성 솔루션'
      ],
      'ar': [
        'وكلاء صوت الذكاء الاصطناعي للمكالمات الواردة',
        'منصة صوتية كاملة بالذكاء الاصطناعي مع حملات',
        'حلول صوتية على مستوى المؤسسات'
      ],
      'ru': [
        'ИИ-голосовые агенты для входящих звонков',
        'Полная голосовая ИИ-платформа с кампаниями',
        'Голосовые решения корпоративного уровня'
      ],
      'hi': [
        'आने वाली कॉल के लिए AI वॉयस एजेंट',
        'अभियानों के साथ पूर्ण वॉयस AI प्लेटफॉर्म',
        'एंटरप्राइज़-ग्रेड वॉयस समाधान'
      ],
      'id': [
        'Agen suara AI untuk panggilan masuk',
        'Platform suara AI lengkap dengan kampanye',
        'Solusi suara tingkat perusahaan'
      ],
      'th': [
        'ตัวแทนเสียง AI สำหรับสายเรียกเข้า',
        'แพลตฟอร์มเสียง AI เต็มรูปแบบพร้อมแคมเปญ',
        'โซลูชันเสียงระดับองค์กร'
      ],
      'vi': [
        'Nhân viên AI giọng nói cho cuộc gọi đến',
        'Nền tảng AI giọng nói đầy đủ với chiến dịch',
        'Giải pháp giọng nói cấp doanh nghiệp'
      ],
      'ms': [
        'Ejen suara AI untuk panggilan masuk',
        'Platform suara AI penuh dengan kempen',
        'Penyelesaian suara gred perusahaan'
      ],
      'fil': [
        'AI voice agents para sa papasok na tawag',
        'Kumpletong voice AI platform na may mga kampanya',
        'Enterprise-grade na voice solutions'
      ],
      'pl': [
        'Agenci głosowi AI do połączeń przychodzących',
        'Pełna platforma głosowa AI z kampaniami',
        'Rozwiązania głosowe klasy korporacyjnej'
      ],
      'fa': [
        'عوامل صوتی هوش مصنوعی برای تماس‌های ورودی',
        'پلتفرم صوتی کامل هوش مصنوعی با کمپین‌ها',
        'راه‌حل‌های صوتی در سطح سازمانی'
      ],
      'ta': [
        'உள்வரும் அழைப்புகளுக்கான AI குரல் முகவர்கள்',
        'பிரச்சாரங்களுடன் முழு குரல் AI தளம்',
        'நிறுவன தர குரல் தீர்வுகள்'
      ]
    }
  };
  
  // Return the descriptions for the language, or fallback to English
  return descriptions[productKey][language] || descriptions[productKey]['en'];
}

/**
 * Get localized tier features
 */
function getPricingTierFeatures(productKey: ProductKey, language: string): string[][] {
  const features: Record<ProductKey, Record<string, string[][]>> = {
    seachat: {
      'en': [
        ['1 human agent included', 'Unlimited human conversations', '100 AI responses to test', 'Basic Shopify integrations'],
        ['Everything in Free plan', 'Unlimited AI conversations', 'GPT-4 and Claude models', 'Advanced analytics', 'Custom branding'],
        ['Multiple workspaces', 'HIPAA compliance', 'White-label options', 'Dedicated support', 'Custom integrations']
      ],
      'zh-TW': [
        ['包含1位人工客服', '無限人工對話', '100次AI回應測試', '基本Shopify整合'],
        ['包含免費方案所有功能', '無限AI對話', 'GPT-4和Claude模型', '進階分析', '客製化品牌'],
        ['多個工作區', 'HIPAA合規', '白標選項', '專屬支援', '客製化整合']
      ],
      'zh-CN': [
        ['包含1位人工客服', '无限人工对话', '100次AI响应测试', '基本Shopify集成'],
        ['包含免费方案所有功能', '无限AI对话', 'GPT-4和Claude模型', '高级分析', '定制品牌'],
        ['多个工作区', 'HIPAA合规', '白标选项', '专属支持', '定制集成']
      ],
      'es': [
        ['1 agente humano incluido', 'Conversaciones humanas ilimitadas', '100 respuestas AI de prueba', 'Integraciones básicas de Shopify'],
        ['Todo en el plan gratuito', 'Conversaciones AI ilimitadas', 'Modelos GPT-4 y Claude', 'Análisis avanzado', 'Marca personalizada'],
        ['Múltiples espacios de trabajo', 'Cumplimiento HIPAA', 'Opciones de marca blanca', 'Soporte dedicado', 'Integraciones personalizadas']
      ],
      'fr': [
        ['1 agent humain inclus', 'Conversations humaines illimitées', '100 réponses IA de test', 'Intégrations Shopify de base'],
        ['Tout dans le plan gratuit', 'Conversations IA illimitées', 'Modèles GPT-4 et Claude', 'Analyses avancées', 'Marque personnalisée'],
        ['Espaces de travail multiples', 'Conformité HIPAA', 'Options en marque blanche', 'Support dédié', 'Intégrations personnalisées']
      ],
      'de': [
        ['1 menschlicher Agent enthalten', 'Unbegrenzte menschliche Gespräche', '100 AI-Antworten zum Testen', 'Grundlegende Shopify-Integrationen'],
        ['Alles im kostenlosen Plan', 'Unbegrenzte KI-Gespräche', 'GPT-4 und Claude Modelle', 'Erweiterte Analysen', 'Individuelles Branding'],
        ['Mehrere Arbeitsbereiche', 'HIPAA-Konformität', 'White-Label-Optionen', 'Dedizierter Support', 'Benutzerdefinierte Integrationen']
      ],
      'pt': [
        ['1 agente humano incluído', 'Conversas humanas ilimitadas', '100 respostas de IA para teste', 'Integrações básicas do Shopify'],
        ['Tudo no plano gratuito', 'Conversas de IA ilimitadas', 'Modelos GPT-4 e Claude', 'Análises avançadas', 'Marca personalizada'],
        ['Múltiplos espaços de trabalho', 'Conformidade HIPAA', 'Opções de marca branca', 'Suporte dedicado', 'Integrações personalizadas']
      ],
      'ja': [
        ['人間エージェント1名含む', '無制限の人間の会話', '100回のAI応答テスト', '基本的なShopify統合'],
        ['無料プランの全機能', '無制限のAI会話', 'GPT-4とClaudeモデル', '高度な分析', 'カスタムブランディング'],
        ['複数のワークスペース', 'HIPAA準拠', 'ホワイトラベルオプション', '専任サポート', 'カスタム統合']
      ],
      'ko': [
        ['인간 상담원 1명 포함', '무제한 인간 대화', '100회 AI 응답 테스트', '기본 Shopify 통합'],
        ['무료 플랜의 모든 기능', '무제한 AI 대화', 'GPT-4 및 Claude 모델', '고급 분석', '맞춤형 브랜딩'],
        ['다중 작업 공간', 'HIPAA 준수', '화이트 라벨 옵션', '전담 지원', '맞춤형 통합']
      ],
      'ar': [
        ['وكيل بشري واحد مضمن', 'محادثات بشرية غير محدودة', '100 رد AI للاختبار', 'تكاملات Shopify الأساسية'],
        ['كل شيء في الخطة المجانية', 'محادثات AI غير محدودة', 'نماذج GPT-4 وClaude', 'تحليلات متقدمة', 'علامة تجارية مخصصة'],
        ['مساحات عمل متعددة', 'امتثال HIPAA', 'خيارات العلامة البيضاء', 'دعم مخصص', 'تكاملات مخصصة']
      ],
      'ru': [
        ['1 человеческий агент включен', 'Неограниченные человеческие разговоры', '100 ответов ИИ для тестирования', 'Базовые интеграции Shopify'],
        ['Все из бесплатного плана', 'Неограниченные разговоры с ИИ', 'Модели GPT-4 и Claude', 'Расширенная аналитика', 'Индивидуальный брендинг'],
        ['Несколько рабочих пространств', 'Соответствие HIPAA', 'Варианты белой метки', 'Выделенная поддержка', 'Пользовательские интеграции']
      ],
      'hi': [
        ['1 मानव एजेंट शामिल', 'असीमित मानव वार्तालाप', '100 AI प्रतिक्रियाएं परीक्षण के लिए', 'बुनियादी Shopify एकीकरण'],
        ['मुफ्त योजना में सब कुछ', 'असीमित AI वार्तालाप', 'GPT-4 और Claude मॉडल', 'उन्नत विश्लेषण', 'कस्टम ब्रांडिंग'],
        ['कई कार्यस्थान', 'HIPAA अनुपालन', 'व्हाइट-लेबल विकल्प', 'समर्पित समर्थन', 'कस्टम एकीकरण']
      ],
      'id': [
        ['1 agen manusia termasuk', 'Percakapan manusia tak terbatas', '100 respons AI untuk uji coba', 'Integrasi Shopify dasar'],
        ['Semua dalam paket gratis', 'Percakapan AI tak terbatas', 'Model GPT-4 dan Claude', 'Analisis lanjutan', 'Branding khusus'],
        ['Beberapa ruang kerja', 'Kepatuhan HIPAA', 'Opsi label putih', 'Dukungan khusus', 'Integrasi khusus']
      ],
      'th': [
        ['ตัวแทนมนุษย์ 1 คนรวมอยู่', 'การสนทนากับมนุษย์ไม่จำกัด', '100 การตอบกลับ AI สำหรับทดสอบ', 'การผสานรวม Shopify พื้นฐาน'],
        ['ทุกอย่างในแผนฟรี', 'การสนทนา AI ไม่จำกัด', 'โมเดล GPT-4 และ Claude', 'การวิเคราะห์ขั้นสูง', 'แบรนด์ที่กำหนดเอง'],
        ['พื้นที่ทำงานหลายแห่ง', 'ความสอดคล้อง HIPAA', 'ตัวเลือกไวท์เลเบล', 'การสนับสนุนเฉพาะ', 'การผสานรวมที่กำหนดเอง']
      ],
      'vi': [
        ['Bao gồm 1 nhân viên', 'Trò chuyện không giới hạn với con người', '100 phản hồi AI để thử nghiệm', 'Tích hợp Shopify cơ bản'],
        ['Mọi thứ trong gói miễn phí', 'Trò chuyện AI không giới hạn', 'Mô hình GPT-4 và Claude', 'Phân tích nâng cao', 'Thương hiệu tùy chỉnh'],
        ['Nhiều không gian làm việc', 'Tuân thủ HIPAA', 'Tùy chọn nhãn trắng', 'Hỗ trợ riêng', 'Tích hợp tùy chỉnh']
      ],
      'ms': [
        ['1 ejen manusia disertakan', 'Perbualan manusia tanpa had', '100 respons AI untuk ujian', 'Integrasi Shopify asas'],
        ['Semua dalam pelan percuma', 'Perbualan AI tanpa had', 'Model GPT-4 dan Claude', 'Analisis lanjutan', 'Penjenamaan tersuai'],
        ['Berbilang ruang kerja', 'Pematuhan HIPAA', 'Pilihan label putih', 'Sokongan khusus', 'Integrasi tersuai']
      ],
      'fil': [
        ['1 ahenteng tao kasama', 'Walang hanggang pag-uusap ng tao', '100 AI responses para subukan', 'Basic na Shopify integrations'],
        ['Lahat sa Free plan', 'Walang hanggang AI conversations', 'GPT-4 at Claude models', 'Advanced analytics', 'Custom branding'],
        ['Multiple workspaces', 'HIPAA compliance', 'White-label options', 'Dedicated support', 'Custom integrations']
      ],
      'pl': [
        ['1 ludzki agent wliczony', 'Nieograniczone rozmowy z ludźmi', '100 odpowiedzi AI do testów', 'Podstawowe integracje Shopify'],
        ['Wszystko w darmowym planie', 'Nieograniczone rozmowy AI', 'Modele GPT-4 i Claude', 'Zaawansowane analizy', 'Niestandardowy branding'],
        ['Wiele przestrzeni roboczych', 'Zgodność z HIPAA', 'Opcje white-label', 'Dedykowane wsparcie', 'Niestandardowe integracje']
      ],
      'fa': [
        ['1 نماینده انسانی شامل', 'گفتگوهای انسانی نامحدود', '100 پاسخ AI برای آزمایش', 'ادغام‌های پایه Shopify'],
        ['همه چیز در طرح رایگان', 'گفتگوهای نامحدود AI', 'مدل‌های GPT-4 و Claude', 'تحلیل‌های پیشرفته', 'برندسازی سفارشی'],
        ['فضاهای کاری متعدد', 'انطباق با HIPAA', 'گزینه‌های برچسب سفید', 'پشتیبانی اختصاصی', 'ادغام‌های سفارشی']
      ],
      'ta': [
        ['1 மனித முகவர் சேர்க்கப்பட்டுள்ளது', 'வரம்பற்ற மனித உரையாடல்கள்', '100 AI பதில்கள் சோதனைக்கு', 'அடிப்படை Shopify ஒருங்கிணைப்புகள்'],
        ['இலவச திட்டத்தில் அனைத்தும்', 'வரம்பற்ற AI உரையாடல்கள்', 'GPT-4 மற்றும் Claude மாதிரிகள்', 'மேம்பட்ட பகுப்பாய்வு', 'தனிப்பயன் பிராண்டிங்'],
        ['பல பணியிடங்கள்', 'HIPAA இணக்கம்', 'வெள்ளை லேபிள் விருப்பங்கள்', 'அர்ப்பணிக்கப்பட்ட ஆதரவு', 'தனிப்பயன் ஒருங்கிணைப்புகள்']
      ]
    },
    seax: {
      'en': [
        ['WhatsApp Business platform', 'Campaign management tools', 'WhatsApp API access', 'Unlimited contacts & templates'],
        ['All messaging channels', 'Voice calls & SMS', 'Campaign automation', 'RESTful API', 'Additional users $49/month'],
        ['Multiple workspaces', 'Custom API integrations', 'HIPAA compliance', 'White-label options', 'Volume discounts']
      ],
      'zh-TW': [
        ['WhatsApp商業平台', '行銷活動管理工具', 'WhatsApp API存取', '無限聯絡人和範本'],
        ['所有訊息通道', '語音通話和簡訊', '行銷活動自動化', 'RESTful API', '額外用戶每月$49'],
        ['多個工作區', '客製API整合', 'HIPAA合規', '白標選項', '大量折扣']
      ],
      'zh-CN': [
        ['WhatsApp商业平台', '营销活动管理工具', 'WhatsApp API访问', '无限联系人和模板'],
        ['所有消息渠道', '语音通话和短信', '营销活动自动化', 'RESTful API', '额外用户每月$49'],
        ['多个工作区', '定制API集成', 'HIPAA合规', '白标选项', '批量折扣']
      ],
      'es': [
        ['Plataforma WhatsApp Business', 'Herramientas de gestión de campañas', 'Acceso API de WhatsApp', 'Contactos y plantillas ilimitados'],
        ['Todos los canales de mensajería', 'Llamadas de voz y SMS', 'Automatización de campañas', 'API RESTful', 'Usuarios adicionales $49/mes'],
        ['Múltiples espacios de trabajo', 'Integraciones API personalizadas', 'Cumplimiento HIPAA', 'Opciones de marca blanca', 'Descuentos por volumen']
      ],
      'fr': [
        ['Plateforme WhatsApp Business', 'Outils de gestion de campagnes', 'Accès API WhatsApp', 'Contacts et modèles illimités'],
        ['Tous les canaux de messagerie', 'Appels vocaux et SMS', 'Automatisation de campagnes', 'API RESTful', 'Utilisateurs supplémentaires 49$/mois'],
        ['Espaces de travail multiples', 'Intégrations API personnalisées', 'Conformité HIPAA', 'Options en marque blanche', 'Remises sur volume']
      ],
      'de': [
        ['WhatsApp Business-Plattform', 'Kampagnenverwaltungstools', 'WhatsApp API-Zugriff', 'Unbegrenzte Kontakte & Vorlagen'],
        ['Alle Messaging-Kanäle', 'Sprachanrufe & SMS', 'Kampagnenautomatisierung', 'RESTful API', 'Zusätzliche Benutzer $49/Monat'],
        ['Mehrere Arbeitsbereiche', 'Benutzerdefinierte API-Integrationen', 'HIPAA-Konformität', 'White-Label-Optionen', 'Mengenrabatte']
      ],
      'pt': [
        ['Plataforma WhatsApp Business', 'Ferramentas de gestão de campanhas', 'Acesso à API do WhatsApp', 'Contatos e modelos ilimitados'],
        ['Todos os canais de mensagens', 'Chamadas de voz e SMS', 'Automação de campanhas', 'API RESTful', 'Usuários adicionais $49/mês'],
        ['Múltiplos espaços de trabalho', 'Integrações de API personalizadas', 'Conformidade HIPAA', 'Opções de marca branca', 'Descontos por volume']
      ],
      'ja': [
        ['WhatsAppビジネスプラットフォーム', 'キャンペーン管理ツール', 'WhatsApp APIアクセス', '無制限の連絡先とテンプレート'],
        ['すべてのメッセージングチャネル', '音声通話とSMS', 'キャンペーン自動化', 'RESTful API', '追加ユーザー月額$49'],
        ['複数のワークスペース', 'カスタムAPI統合', 'HIPAA準拠', 'ホワイトラベルオプション', 'ボリューム割引']
      ],
      'ko': [
        ['WhatsApp 비즈니스 플랫폼', '캠페인 관리 도구', 'WhatsApp API 액세스', '무제한 연락처 및 템플릿'],
        ['모든 메시징 채널', '음성 통화 및 SMS', '캠페인 자동화', 'RESTful API', '추가 사용자 월 $49'],
        ['다중 작업 공간', '맞춤형 API 통합', 'HIPAA 준수', '화이트 라벨 옵션', '대량 할인']
      ],
      'ar': [
        ['منصة WhatsApp Business', 'أدوات إدارة الحملات', 'الوصول إلى WhatsApp API', 'جهات اتصال وقوالب غير محدودة'],
        ['جميع قنوات المراسلة', 'المكالمات الصوتية والرسائل القصيرة', 'أتمتة الحملات', 'RESTful API', 'مستخدمون إضافيون 49 دولار/شهر'],
        ['مساحات عمل متعددة', 'تكاملات API مخصصة', 'امتثال HIPAA', 'خيارات العلامة البيضاء', 'خصومات الكمية']
      ],
      'ru': [
        ['Платформа WhatsApp Business', 'Инструменты управления кампаниями', 'Доступ к WhatsApp API', 'Неограниченные контакты и шаблоны'],
        ['Все каналы обмена сообщениями', 'Голосовые звонки и SMS', 'Автоматизация кампаний', 'RESTful API', 'Дополнительные пользователи $49/месяц'],
        ['Несколько рабочих пространств', 'Пользовательские API-интеграции', 'Соответствие HIPAA', 'Варианты белой метки', 'Оптовые скидки']
      ],
      'hi': [
        ['WhatsApp Business प्लेटफॉर्म', 'अभियान प्रबंधन उपकरण', 'WhatsApp API पहुंच', 'असीमित संपर्क और टेम्प्लेट'],
        ['सभी मैसेजिंग चैनल', 'वॉयस कॉल और SMS', 'अभियान स्वचालन', 'RESTful API', 'अतिरिक्त उपयोगकर्ता $49/महीना'],
        ['कई कार्यस्थान', 'कस्टम API एकीकरण', 'HIPAA अनुपालन', 'व्हाइट-लेबल विकल्प', 'वॉल्यूम छूट']
      ],
      'id': [
        ['Platform WhatsApp Business', 'Alat manajemen kampanye', 'Akses WhatsApp API', 'Kontak & template tak terbatas'],
        ['Semua saluran perpesanan', 'Panggilan suara & SMS', 'Otomasi kampanye', 'RESTful API', 'Pengguna tambahan $49/bulan'],
        ['Beberapa ruang kerja', 'Integrasi API khusus', 'Kepatuhan HIPAA', 'Opsi label putih', 'Diskon volume']
      ],
      'th': [
        ['แพลตฟอร์ม WhatsApp Business', 'เครื่องมือจัดการแคมเปญ', 'การเข้าถึง WhatsApp API', 'ผู้ติดต่อและเทมเพลตไม่จำกัด'],
        ['ช่องทางการส่งข้อความทั้งหมด', 'การโทรด้วยเสียงและ SMS', 'การทำแคมเปญอัตโนมัติ', 'RESTful API', 'ผู้ใช้เพิ่มเติม $49/เดือน'],
        ['พื้นที่ทำงานหลายแห่ง', 'การผสานรวม API ที่กำหนดเอง', 'ความสอดคล้อง HIPAA', 'ตัวเลือกไวท์เลเบล', 'ส่วนลดปริมาณ']
      ],
      'vi': [
        ['Nền tảng WhatsApp Business', 'Công cụ quản lý chiến dịch', 'Truy cập WhatsApp API', 'Liên hệ & mẫu không giới hạn'],
        ['Tất cả kênh nhắn tin', 'Cuộc gọi thoại & SMS', 'Tự động hóa chiến dịch', 'RESTful API', 'Người dùng thêm $49/tháng'],
        ['Nhiều không gian làm việc', 'Tích hợp API tùy chỉnh', 'Tuân thủ HIPAA', 'Tùy chọn nhãn trắng', 'Giảm giá số lượng']
      ],
      'ms': [
        ['Platform WhatsApp Business', 'Alat pengurusan kempen', 'Akses WhatsApp API', 'Kenalan & templat tanpa had'],
        ['Semua saluran pemesejan', 'Panggilan suara & SMS', 'Automasi kempen', 'RESTful API', 'Pengguna tambahan $49/bulan'],
        ['Berbilang ruang kerja', 'Integrasi API tersuai', 'Pematuhan HIPAA', 'Pilihan label putih', 'Diskaun volum']
      ],
      'fil': [
        ['WhatsApp Business platform', 'Campaign management tools', 'WhatsApp API access', 'Unlimited contacts & templates'],
        ['Lahat ng messaging channels', 'Voice calls & SMS', 'Campaign automation', 'RESTful API', 'Additional users $49/buwan'],
        ['Multiple workspaces', 'Custom API integrations', 'HIPAA compliance', 'White-label options', 'Volume discounts']
      ],
      'pl': [
        ['Platforma WhatsApp Business', 'Narzędzia zarządzania kampaniami', 'Dostęp do WhatsApp API', 'Nieograniczone kontakty i szablony'],
        ['Wszystkie kanały komunikacji', 'Połączenia głosowe i SMS', 'Automatyzacja kampanii', 'RESTful API', 'Dodatkowi użytkownicy $49/miesiąc'],
        ['Wiele przestrzeni roboczych', 'Niestandardowe integracje API', 'Zgodność z HIPAA', 'Opcje white-label', 'Rabaty ilościowe']
      ],
      'fa': [
        ['پلتفرم WhatsApp Business', 'ابزارهای مدیریت کمپین', 'دسترسی به WhatsApp API', 'مخاطبین و قالب‌های نامحدود'],
        ['همه کانال‌های پیام‌رسانی', 'تماس‌های صوتی و پیامک', 'خودکارسازی کمپین', 'RESTful API', 'کاربران اضافی 49 دلار/ماه'],
        ['فضاهای کاری متعدد', 'ادغام‌های API سفارشی', 'انطباق با HIPAA', 'گزینه‌های برچسب سفید', 'تخفیف‌های حجمی']
      ],
      'ta': [
        ['WhatsApp Business தளம்', 'பிரச்சார மேலாண்மை கருவிகள்', 'WhatsApp API அணுகல்', 'வரம்பற்ற தொடர்புகள் & டெம்ப்ளேட்கள்'],
        ['அனைத்து மெசேஜிங் சேனல்கள்', 'குரல் அழைப்புகள் & SMS', 'பிரச்சார தானியங்கமயமாக்கல்', 'RESTful API', 'கூடுதல் பயனர்கள் $49/மாதம்'],
        ['பல பணியிடங்கள்', 'தனிப்பயன் API ஒருங்கிணைப்புகள்', 'HIPAA இணக்கம்', 'வெள்ளை லேபிள் விருப்பங்கள்', 'தொகுதி தள்ளுபடிகள்']
      ]
    },
    seavoice: {
      'en': [
        ['AI call handling (inbound)', 'Voice AI from $0.12/min', 'Phone number included', 'Call recording & summaries', 'CRM integrations'],
        ['Everything in Inbound Only', 'Outbound calling campaigns', 'Bulk voice campaigns', 'Advanced routing', 'Additional users $49/month'],
        ['Multiple workspaces', 'Custom voice cloning', 'HIPAA/PCI compliance', 'Dedicated account manager', 'On-premise options']
      ],
      'zh-TW': [
        ['AI通話處理（進線）', '語音AI每分鐘$0.12起', '包含電話號碼', '通話錄音和摘要', 'CRM整合'],
        ['包含僅進線方案所有功能', '外撥通話行銷', '大量語音行銷', '進階路由', '額外用戶每月$49'],
        ['多個工作區', '客製語音複製', 'HIPAA/PCI合規', '專屬客戶經理', '本地部署選項']
      ],
      'zh-CN': [
        ['AI通话处理（进线）', '语音AI每分钟$0.12起', '包含电话号码', '通话录音和摘要', 'CRM集成'],
        ['包含仅进线方案所有功能', '外拨通话营销', '批量语音营销', '高级路由', '额外用户每月$49'],
        ['多个工作区', '定制语音克隆', 'HIPAA/PCI合规', '专属客户经理', '本地部署选项']
      ],
      'es': [
        ['Manejo de llamadas AI (entrantes)', 'Voz AI desde $0.12/min', 'Número de teléfono incluido', 'Grabación de llamadas y resúmenes', 'Integraciones CRM'],
        ['Todo en Solo Entrante', 'Campañas de llamadas salientes', 'Campañas de voz masivas', 'Enrutamiento avanzado', 'Usuarios adicionales $49/mes'],
        ['Múltiples espacios de trabajo', 'Clonación de voz personalizada', 'Cumplimiento HIPAA/PCI', 'Gerente de cuenta dedicado', 'Opciones locales']
      ],
      'fr': [
        ['Gestion d\'appels IA (entrants)', 'IA vocale à partir de 0,12$/min', 'Numéro de téléphone inclus', 'Enregistrement d\'appels et résumés', 'Intégrations CRM'],
        ['Tout dans Entrant Uniquement', 'Campagnes d\'appels sortants', 'Campagnes vocales en masse', 'Routage avancé', 'Utilisateurs supplémentaires 49$/mois'],
        ['Espaces de travail multiples', 'Clonage vocal personnalisé', 'Conformité HIPAA/PCI', 'Gestionnaire de compte dédié', 'Options sur site']
      ],
      'de': [
        ['KI-Anrufbehandlung (eingehend)', 'Sprach-KI ab $0,12/Min', 'Telefonnummer enthalten', 'Anrufaufzeichnung & Zusammenfassungen', 'CRM-Integrationen'],
        ['Alles in Nur Eingehend', 'Ausgehende Anrufkampagnen', 'Massen-Sprachkampagnen', 'Erweiterte Weiterleitung', 'Zusätzliche Benutzer $49/Monat'],
        ['Mehrere Arbeitsbereiche', 'Benutzerdefiniertes Stimmklonen', 'HIPAA/PCI-Konformität', 'Dedizierter Account Manager', 'On-Premise-Optionen']
      ],
      'pt': [
        ['Tratamento de chamadas AI (entrada)', 'Voz AI a partir de $0,12/min', 'Número de telefone incluído', 'Gravação de chamadas e resumos', 'Integrações CRM'],
        ['Tudo em Apenas Entrada', 'Campanhas de chamadas de saída', 'Campanhas de voz em massa', 'Roteamento avançado', 'Usuários adicionais $49/mês'],
        ['Múltiplos espaços de trabalho', 'Clonagem de voz personalizada', 'Conformidade HIPAA/PCI', 'Gerente de conta dedicado', 'Opções no local']
      ],
      'ja': [
        ['AIコール処理（着信）', '音声AI $0.12/分から', '電話番号込み', '通話録音と要約', 'CRM統合'],
        ['インバウンドのみの全機能', 'アウトバウンドコールキャンペーン', '一括音声キャンペーン', '高度なルーティング', '追加ユーザー月額$49'],
        ['複数のワークスペース', 'カスタム音声クローニング', 'HIPAA/PCI準拠', '専任アカウントマネージャー', 'オンプレミスオプション']
      ],
      'ko': [
        ['AI 통화 처리(수신)', '음성 AI 분당 $0.12부터', '전화번호 포함', '통화 녹음 및 요약', 'CRM 통합'],
        ['인바운드 전용의 모든 기능', '아웃바운드 통화 캠페인', '대량 음성 캠페인', '고급 라우팅', '추가 사용자 월 $49'],
        ['다중 작업 공간', '맞춤형 음성 복제', 'HIPAA/PCI 준수', '전담 계정 관리자', '온프레미스 옵션']
      ],
      'ar': [
        ['معالجة المكالمات بالذكاء الاصطناعي (الواردة)', 'الذكاء الاصطناعي الصوتي من 0.12 دولار/دقيقة', 'رقم هاتف مضمن', 'تسجيل المكالمات والملخصات', 'تكاملات CRM'],
        ['كل شيء في الوارد فقط', 'حملات المكالمات الصادرة', 'حملات صوتية بالجملة', 'التوجيه المتقدم', 'مستخدمون إضافيون 49 دولار/شهر'],
        ['مساحات عمل متعددة', 'استنساخ صوتي مخصص', 'امتثال HIPAA/PCI', 'مدير حساب مخصص', 'خيارات في الموقع']
      ],
      'ru': [
        ['Обработка звонков ИИ (входящие)', 'Голосовой ИИ от $0,12/мин', 'Телефонный номер включен', 'Запись звонков и резюме', 'Интеграции CRM'],
        ['Все в Только Входящие', 'Кампании исходящих звонков', 'Массовые голосовые кампании', 'Расширенная маршрутизация', 'Дополнительные пользователи $49/месяц'],
        ['Несколько рабочих пространств', 'Пользовательское клонирование голоса', 'Соответствие HIPAA/PCI', 'Выделенный менеджер аккаунта', 'Локальные варианты']
      ],
      'hi': [
        ['AI कॉल हैंडलिंग (इनबाउंड)', 'वॉयस AI $0.12/मिनट से', 'फोन नंबर शामिल', 'कॉल रिकॉर्डिंग और सारांश', 'CRM एकीकरण'],
        ['इनबाउंड में सब कुछ', 'आउटबाउंड कॉलिंग अभियान', 'बल्क वॉयस अभियान', 'उन्नत रूटिंग', 'अतिरिक्त उपयोगकर्ता $49/महीना'],
        ['कई कार्यस्थान', 'कस्टम वॉयस क्लोनिंग', 'HIPAA/PCI अनुपालन', 'समर्पित खाता प्रबंधक', 'ऑन-प्रिमाइज़ विकल्प']
      ],
      'id': [
        ['Penanganan panggilan AI (masuk)', 'Suara AI dari $0,12/menit', 'Nomor telepon disertakan', 'Perekaman panggilan & ringkasan', 'Integrasi CRM'],
        ['Semua dalam Hanya Masuk', 'Kampanye panggilan keluar', 'Kampanye suara massal', 'Perutean lanjutan', 'Pengguna tambahan $49/bulan'],
        ['Beberapa ruang kerja', 'Kloning suara khusus', 'Kepatuhan HIPAA/PCI', 'Manajer akun khusus', 'Opsi on-premise']
      ],
      'th': [
        ['การจัดการสาย AI (สายเข้า)', 'เสียง AI เริ่มต้นที่ $0.12/นาที', 'รวมหมายเลขโทรศัพท์', 'บันทึกการโทรและสรุป', 'การผสานรวม CRM'],
        ['ทุกอย่างในสายเข้าเท่านั้น', 'แคมเปญการโทรออก', 'แคมเปญเสียงจำนวนมาก', 'การกำหนดเส้นทางขั้นสูง', 'ผู้ใช้เพิ่มเติม $49/เดือน'],
        ['พื้นที่ทำงานหลายแห่ง', 'การโคลนเสียงที่กำหนดเอง', 'ความสอดคล้อง HIPAA/PCI', 'ผู้จัดการบัญชีเฉพาะ', 'ตัวเลือกภายในองค์กร']
      ],
      'vi': [
        ['Xử lý cuộc gọi AI (gọi đến)', 'Giọng nói AI từ $0,12/phút', 'Bao gồm số điện thoại', 'Ghi âm cuộc gọi & tóm tắt', 'Tích hợp CRM'],
        ['Mọi thứ trong Chỉ Gọi Đến', 'Chiến dịch gọi đi', 'Chiến dịch giọng nói hàng loạt', 'Định tuyến nâng cao', 'Người dùng thêm $49/tháng'],
        ['Nhiều không gian làm việc', 'Nhân bản giọng nói tùy chỉnh', 'Tuân thủ HIPAA/PCI', 'Quản lý tài khoản chuyên dụng', 'Tùy chọn tại chỗ']
      ],
      'ms': [
        ['Pengendalian panggilan AI (masuk)', 'Suara AI dari $0.12/minit', 'Nombor telefon disertakan', 'Rakaman panggilan & ringkasan', 'Integrasi CRM'],
        ['Semua dalam Masuk Sahaja', 'Kempen panggilan keluar', 'Kempen suara pukal', 'Penghalaan lanjutan', 'Pengguna tambahan $49/bulan'],
        ['Berbilang ruang kerja', 'Pengklonan suara tersuai', 'Pematuhan HIPAA/PCI', 'Pengurus akaun khusus', 'Pilihan on-premise']
      ],
      'fil': [
        ['AI call handling (papasok)', 'Voice AI mula $0.12/minuto', 'May kasamang phone number', 'Call recording & summaries', 'CRM integrations'],
        ['Lahat sa Inbound Lang', 'Outbound calling campaigns', 'Bulk voice campaigns', 'Advanced routing', 'Additional users $49/buwan'],
        ['Multiple workspaces', 'Custom voice cloning', 'HIPAA/PCI compliance', 'Dedicated account manager', 'On-premise options']
      ],
      'pl': [
        ['Obsługa połączeń AI (przychodzące)', 'Głos AI od $0,12/min', 'Numer telefonu w zestawie', 'Nagrywanie połączeń i podsumowania', 'Integracje CRM'],
        ['Wszystko w Tylko Przychodzące', 'Kampanie połączeń wychodzących', 'Masowe kampanie głosowe', 'Zaawansowane trasowanie', 'Dodatkowi użytkownicy $49/miesiąc'],
        ['Wiele przestrzeni roboczych', 'Niestandardowe klonowanie głosu', 'Zgodność z HIPAA/PCI', 'Dedykowany menedżer konta', 'Opcje lokalne']
      ],
      'fa': [
        ['مدیریت تماس AI (ورودی)', 'صدای AI از 0.12 دلار/دقیقه', 'شماره تلفن شامل', 'ضبط تماس و خلاصه‌ها', 'ادغام‌های CRM'],
        ['همه چیز در فقط ورودی', 'کمپین‌های تماس خروجی', 'کمپین‌های صوتی انبوه', 'مسیریابی پیشرفته', 'کاربران اضافی 49 دلار/ماه'],
        ['فضاهای کاری متعدد', 'شبیه‌سازی صدای سفارشی', 'انطباق با HIPAA/PCI', 'مدیر حساب اختصاصی', 'گزینه‌های محلی']
      ],
      'ta': [
        ['AI அழைப்பு கையாளுதல் (உள்வரும்)', 'குரல் AI $0.12/நிமிடம் முதல்', 'தொலைபேசி எண் சேர்க்கப்பட்டுள்ளது', 'அழைப்பு பதிவு & சுருக்கங்கள்', 'CRM ஒருங்கிணைப்புகள்'],
        ['உள்வரும் மட்டும் உள்ள அனைத்தும்', 'வெளிச்செல்லும் அழைப்பு பிரச்சாரங்கள்', 'மொத்த குரல் பிரச்சாரங்கள்', 'மேம்பட்ட வழிப்படுத்தல்', 'கூடுதல் பயனர்கள் $49/மாதம்'],
        ['பல பணியிடங்கள்', 'தனிப்பயன் குரல் குளோனிங்', 'HIPAA/PCI இணக்கம்', 'அர்ப்பணிக்கப்பட்ட கணக்கு மேலாளர்', 'உள்ளூர் விருப்பங்கள்']
      ]
    }
  };
  
  return features[productKey][language] || features[productKey]['en'];
}

// For backward compatibility, export a default PRODUCT_PRICING
const PRODUCT_PRICING: Record<ProductKey, PricingTier[]> = {
  seachat: getLocalizedPricingTiers('seachat', 'en'),
  seax: getLocalizedPricingTiers('seax', 'en'),
  seavoice: getLocalizedPricingTiers('seavoice', 'en')
};

/**
 * Get localized product information
 * @param productKey - The product key
 * @param language - The language code (defaults to 'en')
 * @param tierIndex - Which pricing tier to use (defaults to 0 - the base/cheapest tier)
 * @returns Complete product information with localized content
 */
export function getLocalizedProductInfo(
  productKey: ProductKey, 
  language: string = 'en',
  tierIndex: number = 0
): ProductInfo {
  const staticInfo = PRODUCT_STATIC_INFO[productKey];
  const pricingTiers = PRODUCT_PRICING[productKey];
  const selectedTier = pricingTiers[tierIndex] || pricingTiers[0];
  const localizedDescription = LOCALIZED_PRODUCT_DESCRIPTIONS[productKey][language] || LOCALIZED_PRODUCT_DESCRIPTIONS[productKey]['en'];
  
  // Get localized features based on product
  const localizedFeatures = getLocalizedFeatures(productKey, language);
  
  // Get localized offer description
  const offerDescription = getLocalizedOfferDescription(productKey, language, selectedTier);
  
  return {
    name: productKey.charAt(0).toUpperCase() + productKey.slice(1).replace('chat', 'Chat').replace('voice', 'Voice').replace('seax', 'SeaX'),
    description: localizedDescription,
    ...staticInfo,
    features: localizedFeatures,
    defaultOffer: {
      price: selectedTier.price,
      priceCurrency: selectedTier.priceCurrency,
      availability: 'https://schema.org/InStock',
      description: offerDescription
    }
  };
}

/**
 * Get all pricing tiers for a product
 * @param productKey - The product key
 * @returns Array of all pricing tiers for the product
 */
export function getProductPricingTiers(productKey: ProductKey): PricingTier[] {
  return PRODUCT_PRICING[productKey] || [];
}

/**
 * Get the most popular pricing tier for a product
 * @param productKey - The product key
 * @returns The popular tier or the first tier if none marked as popular
 */
export function getPopularPricingTier(productKey: ProductKey): PricingTier | undefined {
  const tiers = PRODUCT_PRICING[productKey];
  return tiers?.find(tier => tier.isPopular) || tiers?.[0];
}

/**
 * Get localized features for a product
 */
function getLocalizedFeatures(productKey: ProductKey, language: string): string[] {
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
      'zh-TW': [
        '無限AI對話',
        '包含1位人工客服（免費方案）',
        '企業級AI模型（GPT-4、Claude）',
        '全通路整合',
        '知識庫管理',
        '進階分析',
        '客製化品牌',
        'API存取'
      ],
      'zh-CN': [
        '无限AI对话',
        '包含1位人工客服（免费方案）',
        '企业级AI模型（GPT-4、Claude）',
        '全渠道集成',
        '知识库管理',
        '高级分析',
        '定制品牌',
        'API访问'
      ],
      'es': [
        'Conversaciones AI ilimitadas',
        '1 agente humano incluido (plan gratuito)',
        'Modelos de IA empresarial (GPT-4, Claude)',
        'Integración omnicanal',
        'Gestión de base de conocimiento',
        'Análisis avanzado',
        'Marca personalizada',
        'Acceso API'
      ],
      'fr': [
        'Conversations IA illimitées',
        '1 agent humain inclus (plan gratuit)',
        'Modèles IA d\'entreprise (GPT-4, Claude)',
        'Intégration omnicanale',
        'Gestion de base de connaissances',
        'Analyses avancées',
        'Marque personnalisée',
        'Accès API'
      ],
      'de': [
        'Unbegrenzte KI-Gespräche',
        '1 menschlicher Agent enthalten (kostenloser Plan)',
        'Enterprise-KI-Modelle (GPT-4, Claude)',
        'Omnichannel-Integration',
        'Wissensdatenbank-Verwaltung',
        'Erweiterte Analysen',
        'Individuelles Branding',
        'API-Zugriff'
      ],
      'pt': [
        'Conversas de IA ilimitadas',
        '1 agente humano incluído (plano gratuito)',
        'Modelos de IA empresarial (GPT-4, Claude)',
        'Integração omnicanal',
        'Gestão de base de conhecimento',
        'Análises avançadas',
        'Marca personalizada',
        'Acesso à API'
      ],
      'ja': [
        '無制限のAI会話',
        '人間エージェント1名含む（無料プラン）',
        'エンタープライズAIモデル（GPT-4、Claude）',
        'オムニチャネル統合',
        'ナレッジベース管理',
        '高度な分析',
        'カスタムブランディング',
        'APIアクセス'
      ],
      'ko': [
        '무제한 AI 대화',
        '인간 상담원 1명 포함(무료 플랜)',
        '엔터프라이즈 AI 모델(GPT-4, Claude)',
        '옴니채널 통합',
        '지식 베이스 관리',
        '고급 분석',
        '맞춤형 브랜딩',
        'API 액세스'
      ],
      'ar': [
        'محادثات AI غير محدودة',
        'وكيل بشري واحد مضمن (الخطة المجانية)',
        'نماذج AI للمؤسسات (GPT-4، Claude)',
        'تكامل متعدد القنوات',
        'إدارة قاعدة المعرفة',
        'تحليلات متقدمة',
        'علامة تجارية مخصصة',
        'الوصول إلى API'
      ],
      'ru': [
        'Неограниченные разговоры с ИИ',
        '1 человеческий агент включен (бесплатный план)',
        'Корпоративные модели ИИ (GPT-4, Claude)',
        'Омниканальная интеграция',
        'Управление базой знаний',
        'Расширенная аналитика',
        'Индивидуальный брендинг',
        'Доступ к API'
      ],
      'hi': [
        'असीमित AI वार्तालाप',
        '1 मानव एजेंट शामिल (मुफ्त योजना)',
        'एंटरप्राइज़ AI मॉडल (GPT-4, Claude)',
        'ओमनीचैनल एकीकरण',
        'ज्ञान आधार प्रबंधन',
        'उन्नत विश्लेषण',
        'कस्टम ब्रांडिंग',
        'API पहुंच'
      ],
      'id': [
        'Percakapan AI tak terbatas',
        '1 agen manusia termasuk (paket gratis)',
        'Model AI perusahaan (GPT-4, Claude)',
        'Integrasi omnichannel',
        'Manajemen basis pengetahuan',
        'Analisis lanjutan',
        'Branding khusus',
        'Akses API'
      ],
      'th': [
        'การสนทนา AI ไม่จำกัด',
        'ตัวแทนมนุษย์ 1 คนรวม (แผนฟรี)',
        'โมเดล AI ระดับองค์กร (GPT-4, Claude)',
        'การผสานรวมออมนิแชนเนล',
        'การจัดการฐานความรู้',
        'การวิเคราะห์ขั้นสูง',
        'แบรนด์ที่กำหนดเอง',
        'การเข้าถึง API'
      ],
      'vi': [
        'Trò chuyện AI không giới hạn',
        '1 nhân viên con người bao gồm (gói miễn phí)',
        'Mô hình AI doanh nghiệp (GPT-4, Claude)',
        'Tích hợp đa kênh',
        'Quản lý cơ sở kiến thức',
        'Phân tích nâng cao',
        'Thương hiệu tùy chỉnh',
        'Truy cập API'
      ],
      'ms': [
        'Perbualan AI tanpa had',
        '1 ejen manusia disertakan (pelan percuma)',
        'Model AI perusahaan (GPT-4, Claude)',
        'Integrasi omnichannel',
        'Pengurusan pangkalan pengetahuan',
        'Analisis lanjutan',
        'Penjenamaan tersuai',
        'Akses API'
      ],
      'fil': [
        'Walang hanggang AI conversations',
        '1 ahenteng tao kasama (free plan)',
        'Enterprise AI models (GPT-4, Claude)',
        'Omnichannel integration',
        'Knowledge base management',
        'Advanced analytics',
        'Custom branding',
        'API access'
      ],
      'pl': [
        'Nieograniczone rozmowy AI',
        '1 ludzki agent wliczony (darmowy plan)',
        'Korporacyjne modele AI (GPT-4, Claude)',
        'Integracja omnikanałowa',
        'Zarządzanie bazą wiedzy',
        'Zaawansowane analizy',
        'Niestandardowy branding',
        'Dostęp do API'
      ],
      'fa': [
        'گفتگوهای نامحدود AI',
        '1 نماینده انسانی شامل (طرح رایگان)',
        'مدل‌های AI سازمانی (GPT-4، Claude)',
        'ادغام چندکاناله',
        'مدیریت پایگاه دانش',
        'تحلیل‌های پیشرفته',
        'برندسازی سفارشی',
        'دسترسی API'
      ],
      'ta': [
        'வரம்பற்ற AI உரையாடல்கள்',
        '1 மனித முகவர் சேர்க்கப்பட்டுள்ளது (இலவச திட்டம்)',
        'நிறுவன AI மாதிரிகள் (GPT-4, Claude)',
        'பல்வழி ஒருங்கிணைப்பு',
        'அறிவுத் தளம் மேலாண்மை',
        'மேம்பட்ட பகுப்பாய்வு',
        'தனிப்பயன் பிராண்டிங்',
        'API அணுகல்'
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
      'zh-TW': [
        'WhatsApp商業整合',
        'SMS行銷活動',
        '語音通話管理',
        '統一收件匣',
        '團隊協作',
        '自動化工作流程',
        '聯絡人管理',
        '效能分析'
      ],
      'zh-CN': [
        'WhatsApp商业集成',
        '短信营销活动',
        '语音通话管理',
        '统一收件箱',
        '团队协作',
        '自动化工作流程',
        '联系人管理',
        '性能分析'
      ],
      'es': [
        'Integración WhatsApp Business',
        'Campañas de marketing por SMS',
        'Gestión de llamadas de voz',
        'Bandeja de entrada unificada',
        'Colaboración en equipo',
        'Flujos de trabajo automatizados',
        'Gestión de contactos',
        'Análisis de rendimiento'
      ],
      'fr': [
        'Intégration WhatsApp Business',
        'Campagnes de marketing SMS',
        'Gestion des appels vocaux',
        'Boîte de réception unifiée',
        'Collaboration d\'équipe',
        'Flux de travail automatisés',
        'Gestion des contacts',
        'Analyses de performance'
      ],
      'de': [
        'WhatsApp Business-Integration',
        'SMS-Marketing-Kampagnen',
        'Sprachanrufverwaltung',
        'Einheitlicher Posteingang',
        'Team-Zusammenarbeit',
        'Automatisierte Workflows',
        'Kontaktverwaltung',
        'Leistungsanalysen'
      ],
      'pt': [
        'Integração WhatsApp Business',
        'Campanhas de marketing por SMS',
        'Gestão de chamadas de voz',
        'Caixa de entrada unificada',
        'Colaboração em equipe',
        'Fluxos de trabalho automatizados',
        'Gestão de contatos',
        'Análises de desempenho'
      ],
      'ja': [
        'WhatsAppビジネス統合',
        'SMSマーケティングキャンペーン',
        '音声通話管理',
        '統一受信箱',
        'チームコラボレーション',
        '自動化ワークフロー',
        '連絡先管理',
        'パフォーマンス分析'
      ],
      'ko': [
        'WhatsApp 비즈니스 통합',
        'SMS 마케팅 캠페인',
        '음성 통화 관리',
        '통합 받은 편지함',
        '팀 협업',
        '자동화 워크플로우',
        '연락처 관리',
        '성능 분석'
      ],
      'ar': [
        'تكامل WhatsApp Business',
        'حملات التسويق عبر الرسائل القصيرة',
        'إدارة المكالمات الصوتية',
        'صندوق بريد موحد',
        'التعاون الجماعي',
        'سير العمل التلقائي',
        'إدارة جهات الاتصال',
        'تحليلات الأداء'
      ],
      'ru': [
        'Интеграция WhatsApp Business',
        'SMS-маркетинговые кампании',
        'Управление голосовыми вызовами',
        'Единый почтовый ящик',
        'Командное сотрудничество',
        'Автоматизированные рабочие процессы',
        'Управление контактами',
        'Аналитика производительности'
      ],
      'hi': [
        'WhatsApp Business एकीकरण',
        'SMS मार्केटिंग अभियान',
        'वॉयस कॉल प्रबंधन',
        'एकीकृत इनबॉक्स',
        'टीम सहयोग',
        'स्वचालन कार्यप्रवाह',
        'संपर्क प्रबंधन',
        'प्रदर्शन विश्लेषण'
      ],
      'id': [
        'Integrasi WhatsApp Business',
        'Kampanye pemasaran SMS',
        'Manajemen panggilan suara',
        'Kotak masuk terpadu',
        'Kolaborasi tim',
        'Alur kerja otomasi',
        'Manajemen kontak',
        'Analisis kinerja'
      ],
      'th': [
        'การผสานรวม WhatsApp Business',
        'แคมเปญการตลาด SMS',
        'การจัดการการโทรด้วยเสียง',
        'กล่องขาเข้าแบบรวม',
        'การทำงานร่วมกันเป็นทีม',
        'เวิร์กโฟลว์อัตโนมัติ',
        'การจัดการผู้ติดต่อ',
        'การวิเคราะห์ประสิทธิภาพ'
      ],
      'vi': [
        'Tích hợp WhatsApp Business',
        'Chiến dịch tiếp thị SMS',
        'Quản lý cuộc gọi thoại',
        'Hộp thư đến thống nhất',
        'Cộng tác nhóm',
        'Quy trình làm việc tự động',
        'Quản lý liên hệ',
        'Phân tích hiệu suất'
      ],
      'ms': [
        'Integrasi WhatsApp Business',
        'Kempen pemasaran SMS',
        'Pengurusan panggilan suara',
        'Peti masuk bersatu',
        'Kerjasama pasukan',
        'Aliran kerja automasi',
        'Pengurusan kenalan',
        'Analisis prestasi'
      ],
      'fil': [
        'WhatsApp Business integration',
        'SMS marketing campaigns',
        'Voice call management',
        'Unified inbox',
        'Team collaboration',
        'Automation workflows',
        'Contact management',
        'Performance analytics'
      ],
      'pl': [
        'Integracja WhatsApp Business',
        'Kampanie marketingowe SMS',
        'Zarządzanie połączeniami głosowymi',
        'Zunifikowana skrzynka odbiorcza',
        'Współpraca zespołowa',
        'Automatyczne przepływy pracy',
        'Zarządzanie kontaktami',
        'Analizy wydajności'
      ],
      'fa': [
        'ادغام WhatsApp Business',
        'کمپین‌های بازاریابی پیامکی',
        'مدیریت تماس‌های صوتی',
        'صندوق ورودی یکپارچه',
        'همکاری تیمی',
        'گردش کار خودکار',
        'مدیریت مخاطبین',
        'تحلیل عملکرد'
      ],
      'ta': [
        'WhatsApp Business ஒருங்கிணைப்பு',
        'SMS சந்தைப்படுத்தல் பிரச்சாரங்கள்',
        'குரல் அழைப்பு மேலாண்மை',
        'ஒருங்கிணைந்த இன்பாக்ஸ்',
        'குழு ஒத்துழைப்பு',
        'தானியங்கு பணிப்பாய்வுகள்',
        'தொடர்பு மேலாண்மை',
        'செயல்திறன் பகுப்பாய்வு'
      ]
    },
    seavoice: {
      'en': [
        'AI voice agents',
        'Intelligent call routing',
        'Voice analytics',
        'Call recording & transcription',
        'Sentiment analysis',
        'Multi-language support',
        'CRM integration',
        'Real-time monitoring'
      ],
      'zh-TW': [
        'AI語音代理',
        '智能通話路由',
        '語音分析',
        '通話錄音和轉錄',
        '情感分析',
        '多語言支援',
        'CRM整合',
        '即時監控'
      ],
      'zh-CN': [
        'AI语音代理',
        '智能通话路由',
        '语音分析',
        '通话录音和转录',
        '情感分析',
        '多语言支持',
        'CRM集成',
        '实时监控'
      ],
      'es': [
        'Agentes de voz AI',
        'Enrutamiento inteligente de llamadas',
        'Análisis de voz',
        'Grabación y transcripción de llamadas',
        'Análisis de sentimiento',
        'Soporte multiidioma',
        'Integración CRM',
        'Monitoreo en tiempo real'
      ],
      'fr': [
        'Agents vocaux IA',
        'Routage d\'appels intelligent',
        'Analyse vocale',
        'Enregistrement et transcription d\'appels',
        'Analyse des sentiments',
        'Support multilingue',
        'Intégration CRM',
        'Surveillance en temps réel'
      ],
      'de': [
        'KI-Sprachagenten',
        'Intelligente Anrufweiterleitung',
        'Sprachanalyse',
        'Anrufaufzeichnung & Transkription',
        'Sentimentanalyse',
        'Mehrsprachige Unterstützung',
        'CRM-Integration',
        'Echtzeitüberwachung'
      ],
      'pt': [
        'Agentes de voz AI',
        'Roteamento inteligente de chamadas',
        'Análise de voz',
        'Gravação e transcrição de chamadas',
        'Análise de sentimento',
        'Suporte multilíngue',
        'Integração CRM',
        'Monitoramento em tempo real'
      ],
      'ja': [
        'AI音声エージェント',
        'インテリジェントコールルーティング',
        '音声分析',
        '通話録音と文字起こし',
        '感情分析',
        '多言語サポート',
        'CRM統合',
        'リアルタイム監視'
      ],
      'ko': [
        'AI 음성 에이전트',
        '지능형 통화 라우팅',
        '음성 분석',
        '통화 녹음 및 전사',
        '감정 분석',
        '다국어 지원',
        'CRM 통합',
        '실시간 모니터링'
      ],
      'ar': [
        'وكلاء صوت AI',
        'توجيه المكالمات الذكي',
        'تحليل الصوت',
        'تسجيل المكالمات والنسخ',
        'تحليل المشاعر',
        'دعم متعدد اللغات',
        'تكامل CRM',
        'المراقبة في الوقت الفعلي'
      ],
      'ru': [
        'Голосовые агенты ИИ',
        'Интеллектуальная маршрутизация вызовов',
        'Голосовая аналитика',
        'Запись и транскрипция звонков',
        'Анализ настроений',
        'Многоязычная поддержка',
        'Интеграция CRM',
        'Мониторинг в реальном времени'
      ],
      'hi': [
        'AI वॉयस एजेंट',
        'बुद्धिमान कॉल रूटिंग',
        'वॉयस एनालिटिक्स',
        'कॉल रिकॉर्डिंग और ट्रांसक्रिप्शन',
        'भावना विश्लेषण',
        'बहु-भाषा समर्थन',
        'CRM एकीकरण',
        'रियल-टाइम मॉनिटरिंग'
      ],
      'id': [
        'Agen suara AI',
        'Perutean panggilan cerdas',
        'Analisis suara',
        'Perekaman & transkripsi panggilan',
        'Analisis sentimen',
        'Dukungan multi-bahasa',
        'Integrasi CRM',
        'Pemantauan real-time'
      ],
      'th': [
        'ตัวแทนเสียง AI',
        'การกำหนดเส้นทางสายอัจฉริยะ',
        'การวิเคราะห์เสียง',
        'การบันทึกและถอดความการโทร',
        'การวิเคราะห์ความรู้สึก',
        'รองรับหลายภาษา',
        'การผสานรวม CRM',
        'การตรวจสอบแบบเรียลไทม์'
      ],
      'vi': [
        'Nhân viên AI giọng nói',
        'Định tuyến cuộc gọi thông minh',
        'Phân tích giọng nói',
        'Ghi âm & phiên âm cuộc gọi',
        'Phân tích cảm xúc',
        'Hỗ trợ đa ngôn ngữ',
        'Tích hợp CRM',
        'Giám sát thời gian thực'
      ],
      'ms': [
        'Ejen suara AI',
        'Penghalaan panggilan pintar',
        'Analisis suara',
        'Rakaman & transkripsi panggilan',
        'Analisis sentimen',
        'Sokongan berbilang bahasa',
        'Integrasi CRM',
        'Pemantauan masa nyata'
      ],
      'fil': [
        'AI voice agents',
        'Intelligent call routing',
        'Voice analytics',
        'Call recording & transcription',
        'Sentiment analysis',
        'Multi-language support',
        'CRM integration',
        'Real-time monitoring'
      ],
      'pl': [
        'Agenci głosowi AI',
        'Inteligentne trasowanie połączeń',
        'Analizy głosowe',
        'Nagrywanie i transkrypcja połączeń',
        'Analiza sentymentu',
        'Wsparcie wielojęzyczne',
        'Integracja CRM',
        'Monitorowanie w czasie rzeczywistym'
      ],
      'fa': [
        'عوامل صوتی AI',
        'مسیریابی هوشمند تماس',
        'تحلیل صوت',
        'ضبط و رونویسی تماس',
        'تحلیل احساسات',
        'پشتیبانی چندزبانه',
        'ادغام CRM',
        'نظارت در زمان واقعی'
      ],
      'ta': [
        'AI குரல் முகவர்கள்',
        'அறிவார்ந்த அழைப்பு வழிகாட்டுதல்',
        'குரல் பகுப்பாய்வு',
        'அழைப்பு பதிவு & எழுத்துப்பெயர்ப்பு',
        'உணர்வு பகுப்பாய்வு',
        'பல மொழி ஆதரவு',
        'CRM ஒருங்கிணைப்பு',
        'நிகழ்நேர கண்காணிப்பு'
      ]
    }
  };
  
  return features[productKey][language] || features[productKey]['en'];
}

/**
 * Get localized offer description
 */
function getLocalizedOfferDescription(productKey: ProductKey, language: string, tier: PricingTier): string {
  const descriptions: Record<ProductKey, Record<string, string>> = {
    seachat: {
      'en': `Free forever plan with 1 human agent and unlimited conversations. AI capabilities available for $29.99/month.`,
      'zh-TW': `永久免費方案，包含 1 位人工客服和無限對話。AI 功能每月 $29.99 美元。`,
      'zh-CN': `永久免费方案，包含 1 位人工客服和无限对话。AI 功能每月 $29.99 美元。`,
      'es': `Plan gratuito para siempre con 1 agente humano y conversaciones ilimitadas. Capacidades de IA disponibles por $29.99/mes.`,
      'fr': `Plan gratuit à vie avec 1 agent humain et conversations illimitées. Capacités IA disponibles pour 29,99$/mois.`,
      'de': `Kostenloser Plan für immer mit 1 menschlichen Agenten und unbegrenzten Gesprächen. KI-Funktionen für $29,99/Monat verfügbar.`,
      'pt': `Plano gratuito para sempre com 1 agente humano e conversas ilimitadas. Recursos de IA disponíveis por $29,99/mês.`,
      'ja': `1人のヒューマンエージェントと無制限の会話を含む永久無料プラン。AI機能は月額$29.99で利用可能。`,
      'ko': `1명의 인간 에이전트와 무제한 대화가 포함된 영구 무료 플랜. AI 기능은 월 $29.99에 이용 가능.`,
      'ar': `خطة مجانية إلى الأبد مع وكيل بشري واحد ومحادثات غير محدودة. إمكانيات الذكاء الاصطناعي متاحة مقابل 29.99 دولار شهريًا.`,
      'ru': `Бесплатный навсегда план с 1 живым агентом и неограниченными диалогами. ИИ-возможности доступны за $29.99/месяц.`,
      'hi': `1 मानव एजेंट और असीमित बातचीत के साथ हमेशा के लिए मुफ्त योजना। AI क्षमताएं $29.99/महीने पर उपलब्ध।`,
      'id': `Paket gratis selamanya dengan 1 agen manusia dan percakapan tak terbatas. Kemampuan AI tersedia seharga $29,99/bulan.`,
      'th': `แผนฟรีตลอดชีพพร้อมตัวแทนมนุษย์ 1 คนและการสนทนาไม่จำกัด ความสามารถ AI ราคา $29.99/เดือน`,
      'vi': `Gói miễn phí vĩnh viễn với 1 nhân viên hỗ trợ và trò chuyện không giới hạn. Tính năng AI có sẵn với giá $29.99/tháng.`,
      'ms': `Pelan percuma selamanya dengan 1 ejen manusia dan perbualan tanpa had. Keupayaan AI tersedia pada $29.99/bulan.`,
      'fil': `Libreng plano magpakailanman na may 1 tao na ahente at walang limitasyong pag-uusap. AI capabilities na available sa $29.99/buwan.`,
      'pl': `Darmowy plan na zawsze z 1 ludzkim agentem i nielimitowanymi rozmowami. Możliwości AI dostępne za $29,99/miesiąc.`,
      'fa': `طرح رایگان همیشگی با 1 نماینده انسانی و گفتگوهای نامحدود. قابلیت‌های هوش مصنوعی با 29.99 دلار در ماه در دسترس است.`,
      'ta': `1 மனித முகவர் மற்றும் வரம்பற்ற உரையாடல்களுடன் எப்போதும் இலவச திட்டம். AI திறன்கள் $29.99/மாதத்திற்கு கிடைக்கும்.`
    },
    seax: {
      'en': `WhatsApp Only plan at $19.99/month, or full Omnichannel platform starting at $99/month for first user, $49/month for additional users.`,
      'zh-TW': `WhatsApp 專用方案每月 $19.99 美元，或完整全通路平台第一位用戶每月 $99 美元起，額外用戶每月 $49 美元。`,
      'zh-CN': `WhatsApp 专用方案每月 $19.99 美元，或完整全渠道平台第一位用户每月 $99 美元起，额外用户每月 $49 美元。`,
      'es': `Plan Solo WhatsApp a $19.99/mes, o plataforma Omnicanal completa desde $99/mes para el primer usuario, $49/mes por usuario adicional.`,
      'fr': `Plan WhatsApp uniquement à 19,99$/mois, ou plateforme Omnicanale complète à partir de 99$/mois pour le premier utilisateur, 49$/mois par utilisateur supplémentaire.`,
      'de': `WhatsApp-Only-Plan für $19,99/Monat oder vollständige Omnichannel-Plattform ab $99/Monat für den ersten Benutzer, $49/Monat für zusätzliche Benutzer.`,
      'pt': `Plano Apenas WhatsApp por $19,99/mês, ou plataforma Omnichannel completa a partir de $99/mês para o primeiro usuário, $49/mês por usuário adicional.`,
      'ja': `WhatsApp専用プラン月額$19.99、またはフルオムニチャネルプラットフォーム初回ユーザー月額$99から、追加ユーザー月額$49。`,
      'ko': `WhatsApp 전용 플랜 월 $19.99, 또는 전체 옴니채널 플랫폼 첫 사용자 월 $99부터, 추가 사용자 월 $49.`,
      'ar': `خطة WhatsApp فقط بـ 19.99 دولار/شهر، أو منصة Omnichannel الكاملة بدءًا من 99 دولار/شهر للمستخدم الأول، 49 دولار/شهر للمستخدمين الإضافيين.`,
      'ru': `План только WhatsApp за $19.99/месяц, или полная омниканальная платформа от $99/месяц для первого пользователя, $49/месяц для дополнительных пользователей.`,
      'hi': `केवल WhatsApp योजना $19.99/महीने पर, या पूर्ण ओमनीचैनल प्लेटफ़ॉर्म पहले उपयोगकर्ता के लिए $99/महीने से, अतिरिक्त उपयोगकर्ताओं के लिए $49/महीने।`,
      'id': `Paket Hanya WhatsApp seharga $19,99/bulan, atau platform Omnichannel lengkap mulai dari $99/bulan untuk pengguna pertama, $49/bulan untuk pengguna tambahan.`,
      'th': `แผน WhatsApp เท่านั้นราคา $19.99/เดือน หรือแพลตฟอร์ม Omnichannel เต็มรูปแบบเริ่มต้นที่ $99/เดือนสำหรับผู้ใช้คนแรก $49/เดือนสำหรับผู้ใช้เพิ่มเติม`,
      'vi': `Gói Chỉ WhatsApp với giá $19.99/tháng, hoặc nền tảng Omnichannel đầy đủ bắt đầu từ $99/tháng cho người dùng đầu tiên, $49/tháng cho người dùng thêm.`,
      'ms': `Pelan WhatsApp Sahaja pada $19.99/bulan, atau platform Omnichannel penuh bermula dari $99/bulan untuk pengguna pertama, $49/bulan untuk pengguna tambahan.`,
      'fil': `WhatsApp Only plan sa $19.99/buwan, o kumpletong Omnichannel platform simula sa $99/buwan para sa unang user, $49/buwan para sa karagdagang users.`,
      'pl': `Plan Tylko WhatsApp za $19,99/miesiąc lub pełna platforma Omnichannel od $99/miesiąc dla pierwszego użytkownika, $49/miesiąc dla dodatkowych użytkowników.`,
      'fa': `طرح فقط واتساپ با 19.99 دلار در ماه، یا پلتفرم کامل Omnichannel از 99 دلار در ماه برای کاربر اول، 49 دلار در ماه برای کاربران اضافی.`,
      'ta': `WhatsApp மட்டும் திட்டம் $19.99/மாதம், அல்லது முழு Omnichannel தளம் முதல் பயனருக்கு $99/மாதம் தொடங்கி, கூடுதல் பயனர்களுக்கு $49/மாதம்.`
    },
    seavoice: {
      'en': `AI voice platform with inbound-only plan at $29.99/month or full inbound+outbound at $99/month.`,
      'zh-TW': `AI 語音平台，僅進線方案每月 $29.99 美元，完整進線+外撥每月 $99 美元。`,
      'zh-CN': `AI 语音平台，仅进线方案每月 $29.99 美元，完整进线+外拨每月 $99 美元。`,
      'es': `Plataforma de voz AI con plan solo entrante a $29.99/mes o completo entrante+saliente a $99/mes.`,
      'fr': `Plateforme vocale IA avec plan entrant uniquement à 29,99$/mois ou complet entrant+sortant à 99$/mois.`,
      'de': `KI-Sprachplattform mit Nur-Eingangs-Plan für $29,99/Monat oder vollständig eingehend+ausgehend für $99/Monat.`,
      'pt': `Plataforma de voz AI com plano apenas entrada por $29,99/mês ou completo entrada+saída por $99/mês.`,
      'ja': `インバウンドのみプラン月額$29.99、またはフルインバウンド+アウトバウンド月額$99のAI音声プラットフォーム。`,
      'ko': `인바운드 전용 플랜 월 $29.99 또는 전체 인바운드+아웃바운드 월 $99의 AI 음성 플랫폼.`,
      'ar': `منصة صوتية بالذكاء الاصطناعي مع خطة الوارد فقط بـ 29.99 دولار/شهر أو كاملة وارد+صادر بـ 99 دولار/شهر.`,
      'ru': `Платформа голосового ИИ с планом только входящих за $29.99/месяц или полным входящие+исходящие за $99/месяц.`,
      'hi': `इनबाउंड-केवल योजना $29.99/महीने पर या पूर्ण इनबाउंड+आउटबाउंड $99/महीने पर AI वॉयस प्लेटफ़ॉर्म।`,
      'id': `Platform suara AI dengan paket hanya masuk seharga $29,99/bulan atau lengkap masuk+keluar seharga $99/bulan.`,
      'th': `แพลตฟอร์มเสียง AI พร้อมแผนเฉพาะสายเข้าราคา $29.99/เดือน หรือแบบเต็มสายเข้า+สายออกราคา $99/เดือน`,
      'vi': `Nền tảng giọng nói AI với gói chỉ cuộc gọi đến giá $29.99/tháng hoặc đầy đủ cuộc gọi đến+đi giá $99/tháng.`,
      'ms': `Platform suara AI dengan pelan masuk sahaja pada $29.99/bulan atau penuh masuk+keluar pada $99/bulan.`,
      'fil': `AI voice platform na may inbound-only plan sa $29.99/buwan o kumpletong inbound+outbound sa $99/buwan.`,
      'pl': `Platforma głosowa AI z planem tylko przychodzącym za $29,99/miesiąc lub pełnym przychodzącym+wychodzącym za $99/miesiąc.`,
      'fa': `پلتفرم صوتی هوش مصنوعی با طرح فقط ورودی 29.99 دلار در ماه یا کامل ورودی+خروجی 99 دلار در ماه.`,
      'ta': `உள்வரும் மட்டும் திட்டம் $29.99/மாதம் அல்லது முழு உள்வரும்+வெளிச்செல்லும் $99/மாதம் கொண்ட AI குரல் தளம்.`
    }
  };
  
  return descriptions[productKey][language] || descriptions[productKey]['en'];
}

// Export a default PRODUCTS_INFO for backward compatibility
// This uses English as the default language
export const PRODUCTS_INFO: Record<ProductKey, ProductInfo> = {
  seachat: getLocalizedProductInfo('seachat', 'en'),
  seax: getLocalizedProductInfo('seax', 'en'),
  seavoice: getLocalizedProductInfo('seavoice', 'en')
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

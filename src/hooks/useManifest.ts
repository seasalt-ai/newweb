import { useMemo } from 'react';
import { SUPPORTED_LANGUAGES } from '../constants/languages';

// Manifest translations for all supported languages
const MANIFEST_TRANSLATIONS = {
  'en': {
    name: 'Seasalt.ai - AI Conversation Intelligence Platform',
    short_name: 'Seasalt.ai',
    description: 'Transform customer conversations with AI-powered omnichannel communication platform. SeaChat, SeaX, and SeaVoice solutions for businesses.',
    shortcuts: {
      seachat: { name: 'SeaChat', description: 'Free AI Chatbot Platform' },
      seax: { name: 'SeaX', description: 'Omni-Channel Platform' },
      pricing: { name: 'Pricing', description: 'View Pricing Plans' }
    }
  },
  'zh-TW': {
    name: 'Seasalt.ai - AI 對話智慧平台',
    short_name: 'Seasalt.ai',
    description: '透過 AI 驅動的全通路溝通平台轉化客戶對話。為企業提供 SeaChat、SeaX 和 SeaVoice 解決方案。',
    shortcuts: {
      seachat: { name: 'SeaChat', description: '免費 AI 聊天機器人平台' },
      seax: { name: 'SeaX', description: '全通路溝通平台' },
      pricing: { name: '定價方案', description: '查看定價方案' }
    }
  },
  'zh-CN': {
    name: 'Seasalt.ai - AI 对话智能平台',
    short_name: 'Seasalt.ai',
    description: '通过 AI 驱动的全渠道沟通平台转化客户对话。为企业提供 SeaChat、SeaX 和 SeaVoice 解决方案。',
    shortcuts: {
      seachat: { name: 'SeaChat', description: '免费 AI 聊天机器人平台' },
      seax: { name: 'SeaX', description: '全渠道通信平台' },
      pricing: { name: '定价方案', description: '查看定价方案' }
    }
  },
  'ja': {
    name: 'Seasalt.ai - AI 会話インテリジェンス プラットフォーム',
    short_name: 'Seasalt.ai',
    description: 'AI駆動のオムニチャネルコミュニケーションプラットフォームで顧客との会話を変革。企業向けSeaChat、SeaX、SeaVoiceソリューション。',
    shortcuts: {
      seachat: { name: 'SeaChat', description: '無料AIチャットボットプラットフォーム' },
      seax: { name: 'SeaX', description: 'オムニチャネルプラットフォーム' },
      pricing: { name: '料金プラン', description: '料金プランを見る' }
    }
  },
  'ko': {
    name: 'Seasalt.ai - AI 대화 인텔리전스 플랫폼',
    short_name: 'Seasalt.ai',
    description: 'AI 기반 옴니채널 커뮤니케이션 플랫폼으로 고객 대화를 변화시키세요. 비즈니스를 위한 SeaChat, SeaX, SeaVoice 솔루션.',
    shortcuts: {
      seachat: { name: 'SeaChat', description: '무료 AI 챗봇 플랫폼' },
      seax: { name: 'SeaX', description: '옴니채널 플랫폼' },
      pricing: { name: '요금제', description: '요금제 보기' }
    }
  },
  'es': {
    name: 'Seasalt.ai - Plataforma de Inteligencia Conversacional AI',
    short_name: 'Seasalt.ai',
    description: 'Transforma las conversaciones con clientes usando nuestra plataforma omnicanal impulsada por IA. Soluciones SeaChat, SeaX y SeaVoice para empresas.',
    shortcuts: {
      seachat: { name: 'SeaChat', description: 'Plataforma Gratuita de Chatbot AI' },
      seax: { name: 'SeaX', description: 'Plataforma Omnicanal' },
      pricing: { name: 'Precios', description: 'Ver Planes de Precios' }
    }
  },
  'fr': {
    name: 'Seasalt.ai - Plateforme d\'Intelligence Conversationnelle IA',
    short_name: 'Seasalt.ai',
    description: 'Transformez les conversations clients avec notre plateforme de communication omnicanale alimentée par l\'IA. Solutions SeaChat, SeaX et SeaVoice pour entreprises.',
    shortcuts: {
      seachat: { name: 'SeaChat', description: 'Plateforme Gratuite de Chatbot IA' },
      seax: { name: 'SeaX', description: 'Plateforme Omnicanale' },
      pricing: { name: 'Tarification', description: 'Voir les Plans Tarifaires' }
    }
  },
  'de': {
    name: 'Seasalt.ai - KI-Gesprächsintelligenz-Plattform',
    short_name: 'Seasalt.ai',
    description: 'Transformieren Sie Kundengespräche mit unserer KI-gestützten Omnichannel-Kommunikationsplattform. SeaChat-, SeaX- und SeaVoice-Lösungen für Unternehmen.',
    shortcuts: {
      seachat: { name: 'SeaChat', description: 'Kostenlose KI-Chatbot-Plattform' },
      seax: { name: 'SeaX', description: 'Omnichannel-Plattform' },
      pricing: { name: 'Preise', description: 'Preispläne Anzeigen' }
    }
  },
  'pt': {
    name: 'Seasalt.ai - Plataforma de Inteligência Conversacional IA',
    short_name: 'Seasalt.ai',
    description: 'Transforme conversas de clientes com nossa plataforma de comunicação omnicanal alimentada por IA. Soluções SeaChat, SeaX e SeaVoice para empresas.',
    shortcuts: {
      seachat: { name: 'SeaChat', description: 'Plataforma Gratuita de Chatbot IA' },
      seax: { name: 'SeaX', description: 'Plataforma Omnicanal' },
      pricing: { name: 'Preços', description: 'Ver Planos de Preços' }
    }
  },
  'ru': {
    name: 'Seasalt.ai - Платформа ИИ Разговорной Аналитики',
    short_name: 'Seasalt.ai',
    description: 'Трансформируйте разговоры с клиентами с помощью нашей омниканальной коммуникационной платформы на основе ИИ. Решения SeaChat, SeaX и SeaVoice для бизнеса.',
    shortcuts: {
      seachat: { name: 'SeaChat', description: 'Бесплатная Платформа ИИ Чатботов' },
      seax: { name: 'SeaX', description: 'Омниканальная Платформа' },
      pricing: { name: 'Цены', description: 'Посмотреть Тарифные Планы' }
    }
  },
  'ar': {
    name: 'Seasalt.ai - منصة ذكاء المحادثة بالذكاء الاصطناعي',
    short_name: 'Seasalt.ai',
    description: 'حول محادثات العملاء باستخدام منصة الاتصالات متعددة القنوات المدعومة بالذكاء الاصطناعي. حلول SeaChat و SeaX و SeaVoice للشركات.',
    shortcuts: {
      seachat: { name: 'SeaChat', description: 'منصة شات بوت مجانية بالذكاء الاصطناعي' },
      seax: { name: 'SeaX', description: 'منصة متعددة القنوات' },
      pricing: { name: 'الأسعار', description: 'عرض خطط الأسعار' }
    }
  },
  'hi': {
    name: 'Seasalt.ai - AI वार्तालाप बुद्धिमत्ता प्लेटफॉर्म',
    short_name: 'Seasalt.ai',
    description: 'AI-संचालित ओमनीचैनल संचार प्लेटफॉर्म के साथ ग्राहक बातचीत को रूपांतरित करें। व्यवसायों के लिए SeaChat, SeaX और SeaVoice समाधान।',
    shortcuts: {
      seachat: { name: 'SeaChat', description: 'निःशुल्क AI चैटबॉट प्लेटफॉर्म' },
      seax: { name: 'SeaX', description: 'ओमनीचैनल प्लेटफॉर्म' },
      pricing: { name: 'मूल्य निर्धारण', description: 'मूल्य योजनाएं देखें' }
    }
  },
  'th': {
    name: 'Seasalt.ai - แพลตฟอร์ม AI การสนทนาอัจฉริยะ',
    short_name: 'Seasalt.ai',
    description: 'เปลี่ยนการสนทนาของลูกค้าด้วยแพลตฟอร์มการสื่อสารแบบ Omnichannel ที่ขับเคลื่อนด้วย AI โซลูชัน SeaChat, SeaX และ SeaVoice สำหรับธุรกิจ',
    shortcuts: {
      seachat: { name: 'SeaChat', description: 'แพลตฟอร์มแชทบอท AI ฟรี' },
      seax: { name: 'SeaX', description: 'แพลตฟอร์ม Omnichannel' },
      pricing: { name: 'ราคา', description: 'ดูแผนราคา' }
    }
  },
  'vi': {
    name: 'Seasalt.ai - Nền tảng Trí tuệ Hội thoại AI',
    short_name: 'Seasalt.ai',
    description: 'Chuyển đổi cuộc trò chuyện khách hàng với nền tảng giao tiếp đa kênh được hỗ trợ bởi AI. Giải pháp SeaChat, SeaX và SeaVoice cho doanh nghiệp.',
    shortcuts: {
      seachat: { name: 'SeaChat', description: 'Nền tảng Chatbot AI Miễn phí' },
      seax: { name: 'SeaX', description: 'Nền tảng Đa kênh' },
      pricing: { name: 'Bảng giá', description: 'Xem Gói Giá' }
    }
  },
  'id': {
    name: 'Seasalt.ai - Platform Kecerdasan Percakapan AI',
    short_name: 'Seasalt.ai',
    description: 'Transformasikan percakapan pelanggan dengan platform komunikasi omnichannel bertenaga AI. Solusi SeaChat, SeaX dan SeaVoice untuk bisnis.',
    shortcuts: {
      seachat: { name: 'SeaChat', description: 'Platform Chatbot AI Gratis' },
      seax: { name: 'SeaX', description: 'Platform Omnichannel' },
      pricing: { name: 'Harga', description: 'Lihat Paket Harga' }
    }
  },
  'ms': {
    name: 'Seasalt.ai - Platform Kecerdasan Perbualan AI',
    short_name: 'Seasalt.ai',
    description: 'Transformasikan perbualan pelanggan dengan platform komunikasi omnichannel berkuasa AI. Penyelesaian SeaChat, SeaX dan SeaVoice untuk perniagaan.',
    shortcuts: {
      seachat: { name: 'SeaChat', description: 'Platform Chatbot AI Percuma' },
      seax: { name: 'SeaX', description: 'Platform Omnichannel' },
      pricing: { name: 'Harga', description: 'Lihat Pelan Harga' }
    }
  },
  'fil': {
    name: 'Seasalt.ai - AI Conversation Intelligence Platform',
    short_name: 'Seasalt.ai',
    description: 'I-transform ang mga pag-uusap ng customer gamit ang AI-powered omnichannel communication platform. Mga solusyon na SeaChat, SeaX at SeaVoice para sa mga negosyo.',
    shortcuts: {
      seachat: { name: 'SeaChat', description: 'Libreng AI Chatbot Platform' },
      seax: { name: 'SeaX', description: 'Omnichannel Platform' },
      pricing: { name: 'Presyo', description: 'Tingnan ang Mga Plano sa Presyo' }
    }
  },
  'pl': {
    name: 'Seasalt.ai - Platforma Inteligencji Konwersacyjnej AI',
    short_name: 'Seasalt.ai',
    description: 'Przekształć rozmowy z klientami dzięki naszej wielokanałowej platformie komunikacyjnej zasilanej przez AI. Rozwiązania SeaChat, SeaX i SeaVoice dla firm.',
    shortcuts: {
      seachat: { name: 'SeaChat', description: 'Darmowa Platforma Chatbotów AI' },
      seax: { name: 'SeaX', description: 'Platforma Wielokanałowa' },
      pricing: { name: 'Cennik', description: 'Zobacz Plany Cenowe' }
    }
  },
  'ta': {
    name: 'Seasalt.ai - AI உரையாடல் நுண்ணறிவு தளம்',
    short_name: 'Seasalt.ai',  
    description: 'AI-இயக்கப்படும் ஓம்னிசேனல் தகவல் தொடர்பு தளத்துடன் வாடிக்கையாளர் உரையாடல்களை மாற்றுங்கள். வணிகங்களுக்கான SeaChat, SeaX மற்றும் SeaVoice தீர்வுகள்.',
    shortcuts: {
      seachat: { name: 'SeaChat', description: 'இலவச AI சாட்போட் தளம்' },
      seax: { name: 'SeaX', description: 'ஓம்னிசேனல் தளம்' },
      pricing: { name: 'விலை நிர்ணயம்', description: 'விலை திட்டங்களைக் காண்க' }
    }
  },
  'fa': {
    name: 'Seasalt.ai - پلتفرم هوش مکالماتی هوش مصنوعی',
    short_name: 'Seasalt.ai',
    description: 'مکالمات مشتری را با پلتفرم ارتباطی چند کاناله مبتنی بر هوش مصنوعی تبدیل کنید. راه‌حل‌های SeaChat، SeaX و SeaVoice برای کسب‌وکارها.',
    shortcuts: {
      seachat: { name: 'SeaChat', description: 'پلتفرم رایگان چت‌بات هوش مصنوعی' },
      seax: { name: 'SeaX', description: 'پلتفرم چند کاناله' },
      pricing: { name: 'قیمت‌گذاری', description: 'مشاهده طرح‌های قیمتی' }
    }
  }
} as const;

type SupportedLanguage = typeof SUPPORTED_LANGUAGES[number];

// Default to English for unsupported languages
function getManifestTranslation(lang: string) {
  return MANIFEST_TRANSLATIONS[lang as keyof typeof MANIFEST_TRANSLATIONS] || MANIFEST_TRANSLATIONS['en'];
}

// Hook to generate dynamic manifest data
export function useManifest(lang: string = 'en') {
  return useMemo(() => {
    // Validate language
    if (!SUPPORTED_LANGUAGES.includes(lang as any)) {
      lang = 'en';
    }
    
    const translation = getManifestTranslation(lang);
    const langPrefix = lang === 'en' ? '' : `/${lang}`;
    
    const manifest = {
      name: translation.name,
      short_name: translation.short_name,
      description: translation.description,
      start_url: `${langPrefix}/`,
      display: 'standalone',
      background_color: '#ffffff',
      theme_color: '#2563eb',
      orientation: 'portrait-primary',
      scope: `${langPrefix}/`,
      lang: lang,
      dir: ['ar', 'fa'].includes(lang) ? 'rtl' : 'ltr',
      categories: ['business', 'productivity', 'communication'],
      icons: [
        {
          src: '/seasalt-ai-favicon.ico',
          sizes: '16x16 32x32',
          type: 'image/x-icon',
          purpose: 'any'
        },
        {
          src: '/seasalt-ai-icon.png',
          sizes: '192x192',
          type: 'image/png',
          purpose: 'any maskable'
        },
        {
          src: '/seasalt-ai-logo.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable'
        }
      ],
      shortcuts: [
        {
          name: translation.shortcuts.seachat.name,
          short_name: translation.shortcuts.seachat.name,
          description: translation.shortcuts.seachat.description,
          url: `${langPrefix}/seachat`,
          icons: [
            {
              src: '/seachat-icon.png',
              sizes: '96x96',
              type: 'image/png'
            }
          ]
        },
        {
          name: translation.shortcuts.seax.name,
          short_name: translation.shortcuts.seax.name,
          description: translation.shortcuts.seax.description,
          url: `${langPrefix}/seax`,
          icons: [
            {
              src: '/seax-icon.png',
              sizes: '96x96',
              type: 'image/png'
            }
          ]
        },
        {
          name: translation.shortcuts.pricing.name,
          short_name: translation.shortcuts.pricing.name,
          description: translation.shortcuts.pricing.description,
          url: `${langPrefix}/pricing`,
          icons: [
            {
              src: '/seasalt-ai-icon.png',
              sizes: '96x96',
              type: 'image/png'
            }
          ]
        }
      ],
      related_applications: [
        {
          platform: 'webapp',
          url: `https://seasalt.ai${langPrefix}/`
        }
      ],
      prefer_related_applications: false
    };

    // Create data URL for the manifest
    const manifestJson = JSON.stringify(manifest);
    const manifestDataUrl = `data:application/manifest+json,${encodeURIComponent(manifestJson)}`;
    
    return {
      manifest,
      manifestDataUrl
    };
  }, [lang]);
}

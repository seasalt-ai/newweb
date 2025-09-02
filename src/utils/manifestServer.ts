import { SUPPORTED_LANGUAGES } from '../constants/languages';
import { useManifest } from '../hooks/useManifest';

// Helper function to generate manifest for a specific language
export function generateManifestForLanguage(lang: string = 'en') {
  // Validate language
  if (!SUPPORTED_LANGUAGES.includes(lang as any)) {
    lang = 'en';
  }
  
  // We need to create a minimal version without React hooks
  // since this might be used in server context
  return generateManifestData(lang);
}

// Standalone manifest generator (without React hooks)
function generateManifestData(lang: string) {
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
    'ar': {
      name: 'Seasalt.ai - منصة ذكاء المحادثة بالذكاء الاصطناعي',
      short_name: 'Seasalt.ai',
      description: 'حول محادثات العملاء باستخدام منصة الاتصالات متعددة القنوات المدعومة بالذكاء الاصطناعي. حلول SeaChat و SeaX و SeaVoice للشركات.',
      shortcuts: {
        seachat: { name: 'SeaChat', description: 'منصة شات بوت مجانية بالذكاء الاصطناعي' },
        seax: { name: 'SeaX', description: 'منصة متعددة القنوات' },
        pricing: { name: 'الأسعار', description: 'عرض خطط الأسعار' }
      }
    }
    // Add more languages as needed
  } as const;

  function getManifestTranslation(lang: string) {
    return MANIFEST_TRANSLATIONS[lang as keyof typeof MANIFEST_TRANSLATIONS] || MANIFEST_TRANSLATIONS['en'];
  }

  const translation = getManifestTranslation(lang);
  const langPrefix = lang === 'en' ? '' : `/${lang}`;
  
  return {
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
}

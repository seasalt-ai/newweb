#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Supported languages (keep in sync with src/constants/languages.ts)
const SUPPORTED_LANGUAGES = ['ar', 'de', 'en', 'es', 'fa', 'fil', 'fr', 'hi', 'id', 'ja', 'ko', 'ms', 'pl', 'pt', 'ru', 'ta', 'th', 'vi', 'zh-CN', 'zh-TW'];

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
  }
};

function getManifestTranslation(lang) {
  return MANIFEST_TRANSLATIONS[lang] || MANIFEST_TRANSLATIONS['en'];
}

function generateManifestForLanguage(lang) {
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

function main() {
  const outputDir = path.join(__dirname, '../public');
  
  console.log('🚀 Generating static manifest files for development...\n');

  // Generate default manifest.json (English)
  const defaultManifest = generateManifestForLanguage('en');
  const defaultPath = path.join(outputDir, 'manifest.json');
  fs.writeFileSync(defaultPath, JSON.stringify(defaultManifest, null, 2));
  console.log(`✅ Generated: manifest.json`);
  
  // Generate language-specific manifests
  let generatedCount = 1;
  SUPPORTED_LANGUAGES.forEach(lang => {
    if (lang === 'en') return; // Skip English as we already generated it as default
    
    const manifest = generateManifestForLanguage(lang);
    const filename = `manifest-${lang}.json`;
    const filePath = path.join(outputDir, filename);
    
    fs.writeFileSync(filePath, JSON.stringify(manifest, null, 2));
    console.log(`✅ Generated: ${filename}`);
    generatedCount++;
  });

  console.log(`\n🎉 Successfully generated ${generatedCount} manifest files!`);
  console.log('\n📂 Files created:');
  console.log('   • manifest.json (default - English)');
  SUPPORTED_LANGUAGES.filter(lang => lang !== 'en').forEach(lang => {
    console.log(`   • manifest-${lang}.json`);
  });
  
  console.log('\n🌐 Access URLs:');
  console.log('   • http://localhost:5173/manifest.json (English)');
  SUPPORTED_LANGUAGES.filter(lang => lang !== 'en').slice(0, 5).forEach(lang => {
    console.log(`   • http://localhost:5173/manifest-${lang}.json`);
  });
  if (SUPPORTED_LANGUAGES.length > 6) {
    console.log(`   • ... and ${SUPPORTED_LANGUAGES.length - 6} more language variants`);
  }
  
  console.log('\n🔧 Note: These are development files. The production app still uses dynamic manifests.');
}

main();

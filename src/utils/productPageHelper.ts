import type { ProductType, ProductTranslations } from '../types/products';

/**
 * 將舊版的 SeaX 頁面 translations 轉換為新的 ProductTranslations 格式
 * @param legacyTranslations 舊版的翻譯對象
 * @param product 產品類型
 * @returns 新版的 ProductTranslations
 */
export function convertLegacyTranslations(legacyTranslations: any, product: ProductType): ProductTranslations {
  // 基本的翻譯結構
  const baseTranslations: ProductTranslations = {
    navigation: legacyTranslations.navigation || {},
    buttons: legacyTranslations.buttons || {
      signIn: 'Sign In',
      signUp: 'Sign Up'
    },
    footer: legacyTranslations.footer || {}
  };

  // 根據產品類型添加特定的翻譯
  if (product === 'seax') {
    baseTranslations.channels = legacyTranslations.channels;
    baseTranslations.solutions = legacyTranslations.solutions;
    baseTranslations.industries = legacyTranslations.industries;
    baseTranslations.technical = legacyTranslations.technical;
    baseTranslations.company = legacyTranslations.company;
  }

  // 添加其他通用欄位
  baseTranslations.backToMain = legacyTranslations.backToMain;
  baseTranslations.mobile = legacyTranslations.mobile;
  baseTranslations.tagline = legacyTranslations.tagline;
  baseTranslations.phone = legacyTranslations.phone;
  baseTranslations.email = legacyTranslations.email;
  baseTranslations.location = legacyTranslations.location;

  return baseTranslations;
}

/**
 * 從 SeaX 翻譯生成 SeaChat 翻譯的預設值
 * @param seaxTranslations SeaX 的翻譯對象
 * @returns SeaChat 的翻譯對象
 */
export function generateSeaChatTranslations(seaxTranslations: any): ProductTranslations {
  return {
    navigation: {
      features: seaxTranslations.navigation?.features || 'Features',
      solutions: seaxTranslations.navigation?.solutions || 'Solutions',
      integrations: 'Integrations',
      pricing: seaxTranslations.navigation?.pricing || 'Pricing'
    },
    buttons: {
      wiki: 'Wiki',
      signIn: seaxTranslations.buttons?.signIn || 'Sign In',
      signUp: seaxTranslations.buttons?.signUp || 'Sign Up'
    },
    company: {
      title: 'Company',
      features: 'Features',
      pricing: 'Pricing',
      blog: 'Blog',
      compareUs: 'Compare Us',
      productWiki: 'Product Wiki',
      apiReferences: 'API References',
      careers: 'Careers',
      about: 'About'
    },
    footer: {
      logoAlt: 'SeaChat',
      copyright: '© 2024 Seasalt.ai. All rights reserved.',
      privacyPolicy: 'Privacy Policy',
      termsOfService: 'Terms of Service',
      madeWithText: 'Made with',
      madeWithInCity: 'in Taiwan',
      cta: {
        title: 'Ready to Get Started with AI-Powered Chatbots?',
        subtitle: 'Join thousands of businesses using SeaChat to automate customer service and boost engagement.',
        signUpNow: 'Sign Up Now',
        scheduleDemo: 'Schedule Demo'
      }
    },
    tagline: seaxTranslations.tagline,
    phone: seaxTranslations.phone,
    email: seaxTranslations.email,
    location: seaxTranslations.location
  };
}

/**
 * 從 SeaX 翻譯生成 SeaVoice 翻譯的預設值
 * @param seaxTranslations SeaX 的翻譯對象
 * @returns SeaVoice 的翻譯對象
 */
export function generateSeaVoiceTranslations(seaxTranslations: any): ProductTranslations {
  return {
    navigation: {
      features: seaxTranslations.navigation?.features || 'Features',
      solutions: seaxTranslations.navigation?.solutions || 'Solutions',
      pricing: seaxTranslations.navigation?.pricing || 'Pricing'
    },
    buttons: {
      wiki: 'Wiki',
      signIn: seaxTranslations.buttons?.signIn || 'Sign In',
      signUp: seaxTranslations.buttons?.signUp || 'Sign Up'
    },
    company: {
      title: 'Company',
      features: 'Features',
      pricing: 'Pricing',
      blog: 'Blog',
      compareUs: 'Compare Us',
      productWiki: 'Product Wiki',
      apiReferences: 'API References',
      careers: 'Careers',
      about: 'About'
    },
    footer: {
      logoAlt: 'SeaVoice',
      copyright: '© 2024 Seasalt.ai. All rights reserved.',
      privacyPolicy: 'Privacy Policy',
      termsOfService: 'Terms of Service',
      madeWithText: 'Made with',
      madeWithInCity: 'in Taiwan',
      cta: {
        title: 'Ready to Get Started with AI-Powered Voice Assistants?',
        subtitle: 'Join thousands of businesses using SeaVoice to automate phone calls and improve customer experience.',
        signUpNow: 'Sign Up Now',
        scheduleDemo: 'Schedule Demo'
      }
    },
    tagline: seaxTranslations.tagline,
    phone: seaxTranslations.phone,
    email: seaxTranslations.email,
    location: seaxTranslations.location
  };
}

/**
 * 生成 SEO 數據結構
 * @param product 產品類型
 * @param pageTitle 頁面標題
 * @param pageDescription 頁面描述
 * @param lang 語言
 * @returns SEO 數據對象
 */
export function generateSEOData(
  product: ProductType,
  pageTitle: string,
  pageDescription: string,
  lang: string = 'en'
) {
  const productNames = {
    seax: 'SeaX',
    seachat: 'SeaChat',
    seavoice: 'SeaVoice'
  };

  const productName = productNames[product];
  const baseUrl = `https://seasalt.ai/${lang}/${product}`;

  return {
    title: `${pageTitle} | ${productName} - Seasalt.ai`,
    description: pageDescription,
    keywords: `${productName}, AI, Seasalt.ai, automation, ${product}`,
    canonical: baseUrl,
    ogImage: `/og-${product}.jpg`
  };
}

/**
 * 從現有頁面路徑中提取產品類型和語言
 * @param pathname 頁面路徑
 * @returns 包含產品類型和語言的對象
 */
export function parseProductPath(pathname: string) {
  const pathSegments = pathname.split('/').filter(Boolean);

  // 預期格式: /en/seax/... 或 /zh-TW/seachat/...
  if (pathSegments.length >= 2) {
    const lang = pathSegments[0];
    const product = pathSegments[1];

    if (['seax', 'seachat', 'seavoice'].includes(product)) {
      return {
        product: product as ProductType,
        lang,
        remainingPath: '/' + pathSegments.slice(2).join('/')
      };
    }
  }

  return null;
}
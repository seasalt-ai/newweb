import type { ProductConfig, ProductType } from '../types/products';

// SeaX 配置
export const seaxConfig: ProductConfig = {
  type: 'seax',
  name: 'SeaX',
  theme: {
    primary: '#2563eb', // blue-600
    secondary: '#1e40af', // blue-700
    accent: '#0ea5e9', // sky-500
    logo: '/seax-logo.png',
    logoAlt: 'SeaX',
    gradientFrom: '#3b82f6', // blue-500
    gradientTo: '#06b6d4', // cyan-500
  },
  baseUrl: '/seax',
  signInUrl: 'https://seax.seasalt.ai/signin',
  signUpUrl: 'https://seax.seasalt.ai/signup',
  wikiUrl: (language: string) => {
    const wikiLanguage = (language === 'zh-TW' || language === 'zh-CN') ? 'zh' : 'en';
    return `https://wiki.seasalt.ai/${wikiLanguage}/seax/seax-omni/seax-intro/`;
  },
  meetingUrl: (language: string) => {
    return `https://calendar.app.google/FLjCxzbYLqG6CkNs9?lang=${language}`;
  },
  enableFeatures: {
    topBar: false,
    backToMainSite: true,
    wiki: true,
    authButtons: true,
    cta: true,
    statistics: true,
    socialLinks: true,
  }
};

// SeaChat 配置
export const seachatConfig: ProductConfig = {
  type: 'seachat',
  name: 'SeaChat',
  theme: {
    primary: '#16a34a', // green-600
    secondary: '#15803d', // green-700
    accent: '#22c55e', // green-500
    logo: '/seachat-logo.png',
    logoAlt: 'SeaChat',
    gradientFrom: '#22c55e', // green-500
    gradientTo: '#06b6d4', // cyan-500
  },
  baseUrl: '/seachat',
  signInUrl: 'https://chat.seasalt.ai/signin',
  signUpUrl: 'https://chat.seasalt.ai/signup',
  wikiUrl: (language: string) => {
    const wikiLanguage = (language === 'zh-TW' || language === 'zh-CN') ? 'zh' : 'en';
    return `https://wiki.seasalt.ai/${wikiLanguage}/seachat/seachat-intro`;
  },
  meetingUrl: (language: string) => {
    return `https://calendly.com/seasalt-ai/seachat-demo?lang=${language}`;
  },
  enableFeatures: {
    topBar: false,
    backToMainSite: true,
    wiki: true,
    authButtons: true,
    cta: true,
    statistics: false, // SeaChat 可能不需要統計數據
    socialLinks: true,
  }
};

// SeaVoice 配置
export const seavoiceConfig: ProductConfig = {
  type: 'seavoice',
  name: 'SeaVoice',
  theme: {
    primary: '#7c3aed', // violet-600
    secondary: '#6d28d9', // violet-700
    accent: '#8b5cf6', // violet-500
    logo: '/seavoice-logo.png',
    logoAlt: 'SeaVoice',
    gradientFrom: '#8b5cf6', // violet-500
    gradientTo: '#06b6d4', // cyan-500
  },
  baseUrl: '/seavoice',
  signInUrl: 'https://voice.seasalt.ai/signin',
  signUpUrl: 'https://voice.seasalt.ai/signup',
  wikiUrl: (language: string) => {
    const wikiLanguage = (language === 'zh-TW' || language === 'zh-CN') ? 'zh' : 'en';
    return `https://wiki.seasalt.ai/${wikiLanguage}/seavoice/seavoice-intro`;
  },
  meetingUrl: (language: string) => {
    return `https://calendly.com/seasalt-ai/seavoice-demo?lang=${language}`;
  },
  enableFeatures: {
    topBar: false,
    backToMainSite: true,
    wiki: true,
    authButtons: true,
    cta: true,
    statistics: false, // SeaVoice 可能不需要統計數據
    socialLinks: true,
  }
};

// 產品配置映射
export const productConfigs: Record<ProductType, ProductConfig> = {
  seax: seaxConfig,
  seachat: seachatConfig,
  seavoice: seavoiceConfig,
};

// 工具函數：根據產品類型獲取配置
export function getProductConfig(product: ProductType): ProductConfig {
  return productConfigs[product];
}

// 工具函數：根據產品類型和語言生成路徑
export function getProductPath(product: ProductType, path: string = '', language: string = 'en'): string {
  const config = getProductConfig(product);
  return `/${language}${config.baseUrl}${path}`;
}

// 工具函數：從 URL 路徑中提取產品類型
export function getProductFromPath(pathname: string): ProductType | null {
  if (pathname.includes('/seax')) return 'seax';
  if (pathname.includes('/seachat')) return 'seachat';
  if (pathname.includes('/seavoice')) return 'seavoice';
  return null;
}

// 工具函數：檢查當前路徑是否為產品頁面
export function isProductPage(pathname: string): boolean {
  return getProductFromPath(pathname) !== null;
}

// 工具函數：獲取產品主題 CSS 變量
export function getProductThemeVars(product: ProductType): Record<string, string> {
  const config = getProductConfig(product);
  return {
    '--product-primary': config.theme.primary,
    '--product-secondary': config.theme.secondary,
    '--product-accent': config.theme.accent,
    '--product-gradient-from': config.theme.gradientFrom,
    '--product-gradient-to': config.theme.gradientTo,
  };
}
import enCommon from './locales/en/common.json';
import zhTwCommon from './locales/zh-tw/common.json';

export const languages = {
  en: 'English',
  es: 'Español', 
  'zh-tw': '繁體中文',
  ja: '日本語',
  ko: '한국어',
  fr: 'Français',
  de: 'Deutsch',
  ar: 'العربية',
  fa: 'فارسی',
  fil: 'Filipino',
  hi: 'हिन्दी',
  id: 'Bahasa Indonesia',
  ms: 'Bahasa Melayu'
} as const;

export const defaultLang = 'en';
export const supportedLangs = Object.keys(languages) as Array<keyof typeof languages>;

// Translation data
const translations = {
  'en': enCommon,
  'zh-tw': zhTwCommon,
  // Other languages will be added later
} as const;

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as keyof typeof languages;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof languages) {
  return function t(key: string) {
    const keys = key.split('.');
    const translation = translations[lang as keyof typeof translations] || translations[defaultLang];
    
    let result: any = translation;
    for (const k of keys) {
      if (result && typeof result === 'object' && k in result) {
        result = result[k];
      } else {
        return key; // Fallback to key if translation not found
      }
    }
    
    return typeof result === 'string' ? result : key;
  };
}

export function getLocalizedPath(path: string, lang: keyof typeof languages) {
  if (lang === defaultLang) {
    return path;
  }
  return `/${lang}${path}`;
}

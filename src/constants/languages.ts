export const SUPPORTED_LANGUAGES = ['ar', 'de', 'en', 'es', 'fa', 'fil', 'fr', 'hi', 'id', 'ja', 'ko', 'ms', 'pl', 'pt', 'ru', 'ta', 'th', 'vi', 'zh-CN', 'zh-TW'] as const;

export type SupportedLanguage = typeof SUPPORTED_LANGUAGES[number];

export interface LanguageDetail {
  code: SupportedLanguage;
  nameKey: string; // Translation key for the native language name
  englishNameKey: string; // Translation key for the English name  
  shortCode: string;
}

export const LANGUAGE_DETAILS: LanguageDetail[] = [
  { code: 'ar', nameKey: 'languages.native.ar', englishNameKey: 'languages.english.ar', shortCode: 'AR' },
  { code: 'de', nameKey: 'languages.native.de', englishNameKey: 'languages.english.de', shortCode: 'DE' },
  { code: 'en', nameKey: 'languages.native.en', englishNameKey: 'languages.english.en', shortCode: 'EN' },
  { code: 'es', nameKey: 'languages.native.es', englishNameKey: 'languages.english.es', shortCode: 'ES' },
  { code: 'fa', nameKey: 'languages.native.fa', englishNameKey: 'languages.english.fa', shortCode: 'IR' },
  { code: 'fil', nameKey: 'languages.native.fil', englishNameKey: 'languages.english.fil', shortCode: 'PH' },
  { code: 'fr', nameKey: 'languages.native.fr', englishNameKey: 'languages.english.fr', shortCode: 'FR' },
  { code: 'hi', nameKey: 'languages.native.hi', englishNameKey: 'languages.english.hi', shortCode: 'HI' },
  { code: 'id', nameKey: 'languages.native.id', englishNameKey: 'languages.english.id', shortCode: 'ID' },
  { code: 'ja', nameKey: 'languages.native.ja', englishNameKey: 'languages.english.ja', shortCode: 'JA' },
  { code: 'ko', nameKey: 'languages.native.ko', englishNameKey: 'languages.english.ko', shortCode: 'KO' },
  { code: 'ms', nameKey: 'languages.native.ms', englishNameKey: 'languages.english.ms', shortCode: 'MY' },
  { code: 'pl', nameKey: 'languages.native.pl', englishNameKey: 'languages.english.pl', shortCode: 'PL' },
  { code: 'pt', nameKey: 'languages.native.pt', englishNameKey: 'languages.english.pt', shortCode: 'PT' },
  { code: 'ru', nameKey: 'languages.native.ru', englishNameKey: 'languages.english.ru', shortCode: 'RU' },
  { code: 'ta', nameKey: 'languages.native.ta', englishNameKey: 'languages.english.ta', shortCode: 'IN' },
  { code: 'th', nameKey: 'languages.native.th', englishNameKey: 'languages.english.th', shortCode: 'TH' },
  { code: 'vi', nameKey: 'languages.native.vi', englishNameKey: 'languages.english.vi', shortCode: 'VI' },
  { code: 'zh-CN', nameKey: 'languages.native.zhCN', englishNameKey: 'languages.english.zhCN', shortCode: 'CN' },
  { code: 'zh-TW', nameKey: 'languages.native.zhTW', englishNameKey: 'languages.english.zhTW', shortCode: 'TW' }
] as const;

export const DEFAULT_LANGUAGE: SupportedLanguage = 'en';

// Normalize language codes to supported languages
export const normalizeLanguage = (language: string): SupportedLanguage => {
  // If it's already a supported language, return it
  if (SUPPORTED_LANGUAGES.includes(language as SupportedLanguage)) {
    return language as SupportedLanguage;
  }
  
  // Handle common language code variations
  const langBase = language.toLowerCase().split('-')[0];
  
  // Map common variations to supported languages
  const languageMap: Record<string, SupportedLanguage> = {
    'en': 'en',
    'zh': 'zh-TW', // Default Chinese to Traditional
    'es': 'es',
    'fr': 'fr',
    'de': 'de',
    'ja': 'ja',
    'ko': 'ko',
    'ar': 'ar',
    'fa': 'fa',
    'hi': 'hi',
    'th': 'th',
    'vi': 'vi',
    'id': 'id',
    'ms': 'ms',
    'pl': 'pl',
    'pt': 'pt',
    'ru': 'ru',
    'ta': 'ta',
    'fil': 'fil'
  };
  
  return languageMap[langBase] || DEFAULT_LANGUAGE;
};

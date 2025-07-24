export const SUPPORTED_LANGUAGES = ['ar', 'de', 'en', 'es', 'fil', 'fr', 'hi', 'id', 'ja', 'ko', 'ms', 'pl', 'pt', 'ru', 'ta', 'th', 'vi', 'zh-TW'] as const;

export type SupportedLanguage = typeof SUPPORTED_LANGUAGES[number];

export const LANGUAGE_DETAILS = [
  { code: 'ar', name: 'العربية', shortCode: 'AR' },
  { code: 'de', name: 'Deutsch', shortCode: 'DE' },
  { code: 'en', name: 'English', shortCode: 'EN' },
  { code: 'es', name: 'Español', shortCode: 'ES' },
  { code: 'fil', name: 'Filipino', shortCode: 'PH' },
  { code: 'fr', name: 'Français', shortCode: 'FR' },
  { code: 'hi', name: 'हिन्दी', shortCode: 'HI' },
  { code: 'id', name: 'Bahasa Indonesia', shortCode: 'ID' },
  { code: 'ja', name: '日本語', shortCode: 'JA' },
  { code: 'ko', name: '한국어', shortCode: 'KO' },
  { code: 'ms', name: 'Bahasa Melayu', shortCode: 'MY' },
  { code: 'pl', name: 'Polski', shortCode: 'PL' },
  { code: 'pt', name: 'Português', shortCode: 'PT' },
  { code: 'ru', name: 'Русский', shortCode: 'RU' },
  { code: 'ta', name: 'தமிழ்', shortCode: 'IN' },
  { code: 'th', name: 'ไทย', shortCode: 'TH' },
  { code: 'vi', name: 'Tiếng Việt', shortCode: 'VI' },
  { code: 'zh-TW', name: '繁體中文', shortCode: 'TW' }
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
    'zh': 'zh-TW',
    'es': 'es',
    'fr': 'fr',
    'de': 'de',
    'ja': 'ja',
    'ko': 'ko',
    'ar': 'ar',
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

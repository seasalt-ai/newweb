export const SUPPORTED_LANGUAGES = ['ar', 'de', 'en', 'es', 'fa', 'fil', 'fr', 'hi', 'id', 'ja', 'ko', 'ms', 'pl', 'pt', 'ru', 'ta', 'th', 'vi', 'zh-CN', 'zh-TW'] as const;

export type SupportedLanguage = typeof SUPPORTED_LANGUAGES[number];

export interface LanguageDetail {
  code: SupportedLanguage;
  name: string;
  englishName: string;
  shortCode: string;
}

export const LANGUAGE_DETAILS: LanguageDetail[] = [
  { code: 'ar', name: 'العربية', englishName: 'Arabic', shortCode: 'AR' },
  { code: 'de', name: 'Deutsch', englishName: 'German', shortCode: 'DE' },
  { code: 'en', name: 'English', englishName: 'English', shortCode: 'EN' },
  { code: 'es', name: 'Español', englishName: 'Spanish', shortCode: 'ES' },
  { code: 'fa', name: 'فارسی', englishName: 'Persian', shortCode: 'IR' },
  { code: 'fil', name: 'Filipino', englishName: 'Filipino', shortCode: 'PH' },
  { code: 'fr', name: 'Français', englishName: 'French', shortCode: 'FR' },
  { code: 'hi', name: 'हिन्दी', englishName: 'Hindi', shortCode: 'HI' },
  { code: 'id', name: 'Bahasa Indonesia', englishName: 'Indonesian', shortCode: 'ID' },
  { code: 'ja', name: '日本語', englishName: 'Japanese', shortCode: 'JA' },
  { code: 'ko', name: '한국어', englishName: 'Korean', shortCode: 'KO' },
  { code: 'ms', name: 'Bahasa Melayu', englishName: 'Malay', shortCode: 'MY' },
  { code: 'pl', name: 'Polski', englishName: 'Polish', shortCode: 'PL' },
  { code: 'pt', name: 'Português', englishName: 'Portuguese', shortCode: 'PT' },
  { code: 'ru', name: 'Русский', englishName: 'Russian', shortCode: 'RU' },
  { code: 'ta', name: 'தமிழ்', englishName: 'Tamil', shortCode: 'IN' },
  { code: 'th', name: 'ไทย', englishName: 'Thai', shortCode: 'TH' },
  { code: 'vi', name: 'Tiếng Việt', englishName: 'Vietnamese', shortCode: 'VI' },
  { code: 'zh-CN', name: '简体中文', englishName: 'Chinese (Simplified)', shortCode: 'CN' },
  { code: 'zh-TW', name: '繁體中文', englishName: 'Chinese (Traditional)', shortCode: 'TW' }
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

export const SUPPORTED_LANGUAGES = ['en', 'es', 'fr', 'de', 'pl', 'pt', 'ru', 'ar', 'zh-TW', 'ja', 'ko', 'vi', 'th', 'hi'] as const;

export type SupportedLanguage = typeof SUPPORTED_LANGUAGES[number];

export const LANGUAGE_DETAILS = [
  { code: 'en', name: 'English', shortCode: 'EN' },
  { code: 'es', name: 'Español', shortCode: 'ES' },
  { code: 'fr', name: 'Français', shortCode: 'FR' },
  { code: 'de', name: 'Deutsch', shortCode: 'DE' },
  { code: 'pl', name: 'Polski', shortCode: 'PL' },
  { code: 'pt', name: 'Português', shortCode: 'PT' },
  { code: 'ru', name: 'Русский', shortCode: 'RU' },
  { code: 'ar', name: 'العربية', shortCode: 'AR' },
  { code: 'zh-TW', name: '繁體中文', shortCode: 'TW' },
  { code: 'ja', name: '日本語', shortCode: 'JA' },
  { code: 'ko', name: '한국어', shortCode: 'KO' },
  { code: 'vi', name: 'Tiếng Việt', shortCode: 'VI' },
  { code: 'th', name: 'ไทย', shortCode: 'TH' },
  { code: 'hi', name: 'हिन्दी', shortCode: 'HI' }
] as const;

export const DEFAULT_LANGUAGE: SupportedLanguage = 'en';

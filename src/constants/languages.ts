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

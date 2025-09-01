// see docs/SEO-ENHANCEMENTS.md for context on SEO strategy
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

// =============================================================================
// Advanced Language Configuration (merged from languages-advanced.ts)
// =============================================================================

/**
 * Advanced Language Mapping System for Seasalt.ai
 * Based on SeaMeet's comprehensive internationalization approach
 * 
 * This system provides detailed locale information including regional variants,
 * proper hreflang codes, and geographic targeting for SEO optimization.
 */

// Regional Language Configuration Interface
export interface LanguageRegionConfig {
  language: string;                    // Human-readable language name
  primaryLocale: string;              // Primary locale code (e.g., 'en_US')
  alternateLocales: string[];         // Alternative locale codes (e.g., ['en_GB', 'en_CA'])
  primaryRegion: string;              // Primary country/region code
  primaryPlacename: string;           // Primary location name for geo targeting
  supportedRegions: Array<{           // All supported regions for this language
    region: string;                   // Country code
    placename: string;               // Location name
    locale: string;                  // Full locale code
  }>;
}

// Comprehensive Language-Region Mapping
export const LANGUAGE_REGION_MAP: Record<SupportedLanguage, LanguageRegionConfig> = {
  // English - Multiple regional variants
  'en': {
    language: 'English',
    primaryLocale: 'en_US',
    alternateLocales: ['en_GB', 'en_CA', 'en_AU', 'en_SG', 'en_ZA', 'en_IE', 'en_NZ'],
    primaryRegion: 'US',
    primaryPlacename: 'United States',
    supportedRegions: [
      { region: 'US', placename: 'United States', locale: 'en_US' },
      { region: 'GB', placename: 'United Kingdom', locale: 'en_GB' },
      { region: 'CA', placename: 'Canada', locale: 'en_CA' },
      { region: 'AU', placename: 'Australia', locale: 'en_AU' },
      { region: 'SG', placename: 'Singapore', locale: 'en_SG' },
      { region: 'ZA', placename: 'South Africa', locale: 'en_ZA' },
      { region: 'IE', placename: 'Ireland', locale: 'en_IE' },
      { region: 'NZ', placename: 'New Zealand', locale: 'en_NZ' }
    ]
  },

  // Traditional Chinese - Taiwan, Hong Kong, Macau
  'zh-TW': {
    language: 'Chinese (Traditional)',
    primaryLocale: 'zh_Hant_TW',
    alternateLocales: ['zh_TW', 'zh_Hant_HK', 'zh_Hant_MO'],
    primaryRegion: 'TW',
    primaryPlacename: 'Taiwan',
    supportedRegions: [
      { region: 'TW', placename: 'Taiwan', locale: 'zh_Hant_TW' },
      { region: 'HK', placename: 'Hong Kong', locale: 'zh_Hant_HK' },
      { region: 'MO', placename: 'Macau', locale: 'zh_Hant_MO' }
    ]
  },

  // Simplified Chinese - Mainland China and overseas communities
  'zh-CN': {
    language: 'Chinese (Simplified)',
    primaryLocale: 'zh_Hans_CN',
    alternateLocales: ['zh_CN', 'zh_Hans_SG', 'zh_Hans_MY'],
    primaryRegion: 'CN',
    primaryPlacename: 'China',
    supportedRegions: [
      { region: 'CN', placename: 'China', locale: 'zh_Hans_CN' },
      { region: 'SG', placename: 'Singapore', locale: 'zh_Hans_SG' },
      { region: 'MY', placename: 'Malaysia', locale: 'zh_Hans_MY' }
    ]
  },

  // Spanish - Multiple Spanish-speaking regions
  'es': {
    language: 'Spanish',
    primaryLocale: 'es_ES',
    alternateLocales: ['es_MX', 'es_AR', 'es_CO', 'es_CL', 'es_PE', 'es_VE'],
    primaryRegion: 'ES',
    primaryPlacename: 'Spain',
    supportedRegions: [
      { region: 'ES', placename: 'Spain', locale: 'es_ES' },
      { region: 'MX', placename: 'Mexico', locale: 'es_MX' },
      { region: 'AR', placename: 'Argentina', locale: 'es_AR' },
      { region: 'CO', placename: 'Colombia', locale: 'es_CO' },
      { region: 'CL', placename: 'Chile', locale: 'es_CL' },
      { region: 'PE', placename: 'Peru', locale: 'es_PE' },
      { region: 'VE', placename: 'Venezuela', locale: 'es_VE' }
    ]
  },

  // French - France, Canada, Belgium, Switzerland
  'fr': {
    language: 'French',
    primaryLocale: 'fr_FR',
    alternateLocales: ['fr_CA', 'fr_BE', 'fr_CH'],
    primaryRegion: 'FR',
    primaryPlacename: 'France',
    supportedRegions: [
      { region: 'FR', placename: 'France', locale: 'fr_FR' },
      { region: 'CA', placename: 'Canada', locale: 'fr_CA' },
      { region: 'BE', placename: 'Belgium', locale: 'fr_BE' },
      { region: 'CH', placename: 'Switzerland', locale: 'fr_CH' }
    ]
  },

  // German - Germany, Austria, Switzerland
  'de': {
    language: 'German',
    primaryLocale: 'de_DE',
    alternateLocales: ['de_AT', 'de_CH'],
    primaryRegion: 'DE',
    primaryPlacename: 'Germany',
    supportedRegions: [
      { region: 'DE', placename: 'Germany', locale: 'de_DE' },
      { region: 'AT', placename: 'Austria', locale: 'de_AT' },
      { region: 'CH', placename: 'Switzerland', locale: 'de_CH' }
    ]
  },

  // Japanese - Japan only
  'ja': {
    language: 'Japanese',
    primaryLocale: 'ja_JP',
    alternateLocales: [],
    primaryRegion: 'JP',
    primaryPlacename: 'Japan',
    supportedRegions: [
      { region: 'JP', placename: 'Japan', locale: 'ja_JP' }
    ]
  },

  // Korean - South Korea primarily
  'ko': {
    language: 'Korean',
    primaryLocale: 'ko_KR',
    alternateLocales: [],
    primaryRegion: 'KR',
    primaryPlacename: 'South Korea',
    supportedRegions: [
      { region: 'KR', placename: 'South Korea', locale: 'ko_KR' }
    ]
  },

  // Arabic - Multiple Arabic-speaking regions
  'ar': {
    language: 'Arabic',
    primaryLocale: 'ar_SA',
    alternateLocales: ['ar_AE', 'ar_EG', 'ar_JO', 'ar_MA'],
    primaryRegion: 'SA',
    primaryPlacename: 'Saudi Arabia',
    supportedRegions: [
      { region: 'SA', placename: 'Saudi Arabia', locale: 'ar_SA' },
      { region: 'AE', placename: 'United Arab Emirates', locale: 'ar_AE' },
      { region: 'EG', placename: 'Egypt', locale: 'ar_EG' },
      { region: 'JO', placename: 'Jordan', locale: 'ar_JO' },
      { region: 'MA', placename: 'Morocco', locale: 'ar_MA' }
    ]
  },

  // Portuguese - Brazil and Portugal
  'pt': {
    language: 'Portuguese',
    primaryLocale: 'pt_BR',
    alternateLocales: ['pt_PT'],
    primaryRegion: 'BR',
    primaryPlacename: 'Brazil',
    supportedRegions: [
      { region: 'BR', placename: 'Brazil', locale: 'pt_BR' },
      { region: 'PT', placename: 'Portugal', locale: 'pt_PT' }
    ]
  },

  // Russian - Russia and neighboring countries
  'ru': {
    language: 'Russian',
    primaryLocale: 'ru_RU',
    alternateLocales: ['ru_KZ', 'ru_BY'],
    primaryRegion: 'RU',
    primaryPlacename: 'Russia',
    supportedRegions: [
      { region: 'RU', placename: 'Russia', locale: 'ru_RU' },
      { region: 'KZ', placename: 'Kazakhstan', locale: 'ru_KZ' },
      { region: 'BY', placename: 'Belarus', locale: 'ru_BY' }
    ]
  },

  // Single-region languages (will expand these as needed)
  'hi': {
    language: 'Hindi',
    primaryLocale: 'hi_IN',
    alternateLocales: [],
    primaryRegion: 'IN',
    primaryPlacename: 'India',
    supportedRegions: [
      { region: 'IN', placename: 'India', locale: 'hi_IN' }
    ]
  },

  'th': {
    language: 'Thai',
    primaryLocale: 'th_TH',
    alternateLocales: [],
    primaryRegion: 'TH',
    primaryPlacename: 'Thailand',
    supportedRegions: [
      { region: 'TH', placename: 'Thailand', locale: 'th_TH' }
    ]
  },

  'vi': {
    language: 'Vietnamese',
    primaryLocale: 'vi_VN',
    alternateLocales: [],
    primaryRegion: 'VN',
    primaryPlacename: 'Vietnam',
    supportedRegions: [
      { region: 'VN', placename: 'Vietnam', locale: 'vi_VN' }
    ]
  },

  'id': {
    language: 'Indonesian',
    primaryLocale: 'id_ID',
    alternateLocales: [],
    primaryRegion: 'ID',
    primaryPlacename: 'Indonesia',
    supportedRegions: [
      { region: 'ID', placename: 'Indonesia', locale: 'id_ID' }
    ]
  },

  'ms': {
    language: 'Malay',
    primaryLocale: 'ms_MY',
    alternateLocales: ['ms_BN', 'ms_SG'],
    primaryRegion: 'MY',
    primaryPlacename: 'Malaysia',
    supportedRegions: [
      { region: 'MY', placename: 'Malaysia', locale: 'ms_MY' },
      { region: 'BN', placename: 'Brunei', locale: 'ms_BN' },
      { region: 'SG', placename: 'Singapore', locale: 'ms_SG' }
    ]
  },

  'fil': {
    language: 'Filipino',
    primaryLocale: 'fil_PH',
    alternateLocales: [],
    primaryRegion: 'PH',
    primaryPlacename: 'Philippines',
    supportedRegions: [
      { region: 'PH', placename: 'Philippines', locale: 'fil_PH' }
    ]
  },

  'ta': {
    language: 'Tamil',
    primaryLocale: 'ta_IN',
    alternateLocales: ['ta_LK', 'ta_SG'],
    primaryRegion: 'IN',
    primaryPlacename: 'India',
    supportedRegions: [
      { region: 'IN', placename: 'India', locale: 'ta_IN' },
      { region: 'LK', placename: 'Sri Lanka', locale: 'ta_LK' },
      { region: 'SG', placename: 'Singapore', locale: 'ta_SG' }
    ]
  },

  'fa': {
    language: 'Persian',
    primaryLocale: 'fa_IR',
    alternateLocales: ['fa_AF'],
    primaryRegion: 'IR',
    primaryPlacename: 'Iran',
    supportedRegions: [
      { region: 'IR', placename: 'Iran', locale: 'fa_IR' },
      { region: 'AF', placename: 'Afghanistan', locale: 'fa_AF' }
    ]
  },

  'pl': {
    language: 'Polish',
    primaryLocale: 'pl_PL',
    alternateLocales: [],
    primaryRegion: 'PL',
    primaryPlacename: 'Poland',
    supportedRegions: [
      { region: 'PL', placename: 'Poland', locale: 'pl_PL' }
    ]
  }
};

// Currently supported languages for Phase 1 (EN & zh-TW)
export const PHASE_1_LANGUAGES: readonly SupportedLanguage[] = ['en', 'zh-TW'] as const;

// Normalize language codes to supported languages
export const normalizeLanguage = (language: string): SupportedLanguage => {
  // If it's already a supported language, return it
  if (SUPPORTED_LANGUAGES.includes(language as SupportedLanguage)) {
    return language as SupportedLanguage;
  }
  
  // Handle specific Chinese variants first
  const lowerLang = language.toLowerCase();
  if (lowerLang === 'zh-tw' || lowerLang === 'zh_tw' || lowerLang === 'zh-hant') {
    return 'zh-TW';
  }
  if (lowerLang === 'zh-cn' || lowerLang === 'zh_cn' || lowerLang === 'zh-hans') {
    return 'zh-CN';
  }
  
  // Handle common language code variations
  const langBase = lowerLang.split('-')[0].split('_')[0];
  
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

// =============================================================================
// Advanced Language Utility Functions (merged from languages-advanced.ts)
// =============================================================================

/**
 * Get language information for a specific language code
 * @param language - The language code (e.g., 'en', 'zh-TW')
 * @returns LanguageRegionConfig object or English fallback
 */
export const getLanguageInfo = (language: SupportedLanguage): LanguageRegionConfig => {
  return LANGUAGE_REGION_MAP[language] || LANGUAGE_REGION_MAP[DEFAULT_LANGUAGE];
};

/**
 * Get primary locale for a language (e.g., 'en_US' for 'en')
 * @param language - The language code
 * @returns Primary locale string
 */
export const getPrimaryLocale = (language: SupportedLanguage): string => {
  return getLanguageInfo(language).primaryLocale;
};

/**
 * Get all locales for a language (primary + alternates)
 * @param language - The language code
 * @returns Array of all locale codes
 */
export const getAllLocales = (language: SupportedLanguage): string[] => {
  const info = getLanguageInfo(language);
  return [info.primaryLocale, ...info.alternateLocales];
};

/**
 * Get proper hreflang code for a language (handles special cases like zh-Hant)
 * @param language - The language code
 * @returns Proper hreflang code
 */
export const getHreflangCode = (language: SupportedLanguage): string => {
  switch (language) {
    case 'zh-TW':
      return 'zh-Hant';
    case 'zh-CN':
      return 'zh-Hans';
    default:
      return language;
  }
};

/**
 * Get geographic targeting information for a language
 * @param language - The language code
 * @returns Object with region codes and place names for geo targeting
 */
export const getGeoTargeting = (language: SupportedLanguage): {
  regions: string[];
  placenames: string[];
} => {
  const info = getLanguageInfo(language);
  return {
    regions: info.supportedRegions.map(r => r.region),
    placenames: info.supportedRegions.map(r => r.placename)
  };
};

/**
 * Check if a language has regional variants
 * @param language - The language code
 * @returns Boolean indicating if language has multiple regions
 */
export const hasRegionalVariants = (language: SupportedLanguage): boolean => {
  const info = getLanguageInfo(language);
  return info.supportedRegions.length > 1 || info.alternateLocales.length > 0;
};

/**
 * Get language direction (for future RTL language support)
 * @param language - The language code
 * @returns 'ltr' or 'rtl'
 */
export const getLanguageDirection = (language: SupportedLanguage): 'ltr' | 'rtl' => {
  const rtlLanguages: SupportedLanguage[] = ['ar', 'fa'];
  return rtlLanguages.includes(language) ? 'rtl' : 'ltr';
};

/**
 * Get localized language name in its own script
 * @param language - The language code
 * @returns Localized language name
 */
export const getLocalizedLanguageName = (language: SupportedLanguage): string => {
  const languageNames: Record<SupportedLanguage, string> = {
    'en': 'English',
    'zh-TW': '繁體中文',
    'zh-CN': '简体中文',
    'es': 'Español',
    'fr': 'Français',
    'de': 'Deutsch',
    'ja': '日本語',
    'ko': '한국어',
    'ar': 'العربية',
    'pt': 'Português',
    'ru': 'Русский',
    'hi': 'हिन्दी',
    'th': 'ไทย',
    'vi': 'Tiếng Việt',
    'id': 'Bahasa Indonesia',
    'ms': 'Bahasa Melayu',
    'fil': 'Filipino',
    'ta': 'தமிழ்',
    'fa': 'فارسی',
    'pl': 'Polski'
  };
  
  return languageNames[language] || 'English';
};

/**
 * Check if a language is supported in the current phase
 * @param language - The language code
 * @returns Boolean indicating if language is currently supported
 */
export const isLanguageSupported = (language: SupportedLanguage): boolean => {
  return PHASE_1_LANGUAGES.includes(language);
};

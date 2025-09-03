import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { SUPPORTED_LANGUAGES, normalizeLanguage } from './constants/languages';

// Extract initial language from URL path
const getInitialLanguageFromUrl = (): string => {
  if (typeof window === 'undefined') return 'en';
  
  const pathSegments = window.location.pathname.split('/').filter(Boolean);
  const potentialLang = pathSegments[0];
  
  // Check if first path segment is a supported language
  if (potentialLang && SUPPORTED_LANGUAGES.includes(potentialLang as any)) {
    console.log('[i18n] Language detected from URL:', potentialLang);
    return potentialLang;
  }
  
  console.log('[i18n] No language in URL, defaulting to English');
  return 'en';
};

// Get the initial language before i18next initialization
const initialLanguage = getInitialLanguageFromUrl();

// Clear cached language if it conflicts with URL-detected language
if (typeof window !== 'undefined' && window.localStorage) {
  const cachedLng = window.localStorage.getItem('i18nextLng');
  console.log('[i18n] Cached language found:', cachedLng);
  
  if (cachedLng && cachedLng !== initialLanguage) {
    console.log(`[i18n] Clearing cached language: URL language (${initialLanguage}) conflicts with cached language (${cachedLng})`);
    window.localStorage.removeItem('i18nextLng');
  }
}

i18n
  // Load translations from backend
  .use(Backend)
  // Pass the i18n instance to react-i18next
  .use(initReactI18next)
  // Initialize i18next
  .init({
    fallbackLng: 'en',
    supportedLngs: [...SUPPORTED_LANGUAGES],
    debug: process.env.NODE_ENV === 'development',
    load: 'currentOnly', // Only load the current language, no fallbacks
    lng: initialLanguage, // Start with URL-detected language
    nonExplicitSupportedLngs: false, // Don't allow non-explicit languages
    cleanCode: false, // Don't clean language codes (prevent zh-TW -> zh conversion)
    // Backend configuration
    backend: {
      // Path to load language files from
      loadPath: '/locales/{{lng}}.json?v=' + Date.now(),
      // Allow cross-origin requests
      crossDomain: false,
      // Clear cache completely
      cache: false,
      allowMultiLoading: false,
      reloadInterval: false,
    },
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    // Allow returning objects/arrays from translations
    returnObjects: true,
    // Wait for translations to be loaded before rendering
    react: {
      useSuspense: true,
    },
  });

// Add debugging for language changes
i18n.on('initialized', (options) => {
  console.log('[i18n] Initialized with language:', options.lng);
});

i18n.on('languageChanged', (lng) => {
  console.log('[i18n] Language changed to:', lng);
  console.log('[i18n] Current URL:', window.location.pathname);
});

i18n.on('failedLoading', (lng, ns, msg) => {
  console.error('[i18n] Failed loading:', { lng, ns, msg });
});

i18n.on('loaded', (loaded) => {
  console.log('[i18n] Loaded namespaces:', loaded);
});

export default i18n;

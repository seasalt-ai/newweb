import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { SUPPORTED_LANGUAGES, normalizeLanguage } from './constants/languages';

// Clear any cached language that might be causing issues
if (typeof window !== 'undefined' && window.localStorage) {
  const cachedLng = window.localStorage.getItem('i18nextLng');
  console.log('[i18n] Cached language found:', cachedLng);
  console.log('[i18n] Current URL pathname:', window.location.pathname);
  
  // Clear any problematic cached languages
  if (cachedLng === 'zh' || cachedLng === 'zh-cn' || cachedLng === 'zh-hans') {
    console.log('[i18n] Removing problematic cached language:', cachedLng);
    window.localStorage.removeItem('i18nextLng');
  }
  
  // If we're on a zh-TW URL, make sure localStorage doesn't interfere
  if (window.location.pathname.startsWith('/zh-TW/')) {
    console.log('[i18n] On zh-TW route, clearing any conflicting cache');
    if (cachedLng && cachedLng !== 'zh-TW') {
      window.localStorage.removeItem('i18nextLng');
    }
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
    lng: 'en', // Start with English, will be changed by LanguageRouter
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

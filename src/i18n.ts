import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { SUPPORTED_LANGUAGES } from './constants/languages';

i18n
  // Load translations from backend
  .use(Backend)
  // Detect user language
  .use(LanguageDetector)
  // Pass the i18n instance to react-i18next
  .use(initReactI18next)
  // Initialize i18next
  .init({
    fallbackLng: 'en',
    supportedLngs: [...SUPPORTED_LANGUAGES],
    debug: process.env.NODE_ENV === 'development',
    load: 'all', // Load both 'en' and 'en-US' if available
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
    // Detect language from browser
    detection: {
      order: ['path', 'localStorage', 'cookie', 'navigator', 'htmlTag'],
      caches: ['localStorage', 'cookie'],
      lookupFromPathIndex: 0,
      lookupLocalStorage: 'i18nextLng',
      checkWhitelist: true,
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

// Add logging for debugging (only in development)
if (process.env.NODE_ENV === 'development') {
  i18n.on('initialized', () => {
    console.log('i18n: Initialized with language:', i18n.language);
    console.log('i18n: Supported languages:', i18n.options.supportedLngs);
  });
  
  i18n.on('languageChanged', (lng) => {
    console.log('i18n: Language changed to:', lng);
  });
  
  i18n.on('loaded', (loaded) => {
    console.log('i18n: Resources loaded:', Object.keys(loaded));
  });
  
  i18n.on('failedLoading', (lng, ns, msg) => {
    console.error('i18n: Failed loading:', lng, ns, msg);
  });
}

export default i18n;

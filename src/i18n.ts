import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

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
      order: ['navigator', 'htmlTag', 'path', 'cookie'],
      caches: ['localStorage', 'cookie'],
      lookupLocalStorage: 'i18nextLng',
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


export default i18n;

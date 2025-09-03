import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

/**
 * HtmlLangUpdater Component
 * 
 * This component centralizes the logic for updating the HTML document's
 * lang and dir attributes based on the current i18n language.
 * 
 * It listens to i18n language changes and automatically updates:
 * - document.documentElement.lang to the current language code
 * - document.documentElement.dir to 'rtl' for Arabic, 'ltr' for all other languages
 * 
 * Usage: Simply include <HtmlLangUpdater /> anywhere in your component tree
 * where you need these attributes to be synchronized with i18n.
 */
const HtmlLangUpdater: React.FC = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Update document direction based on language
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    // Update document language
    document.documentElement.lang = i18n.language;
    
    // Optional: Log the update for debugging
    if (process.env.NODE_ENV === 'development') {
      console.log('[HtmlLangUpdater] Updated HTML attributes:', {
        lang: i18n.language,
        dir: i18n.language === 'ar' ? 'rtl' : 'ltr'
      });
    }
  }, [i18n.language]);

  // This component doesn't render any visible UI
  return null;
};

export default HtmlLangUpdater;

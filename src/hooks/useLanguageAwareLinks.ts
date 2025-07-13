import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

export const useLanguageAwareLinks = () => {
  const { i18n } = useTranslation();
  const { lang } = useParams<{ lang: string }>();
  
  // Get current language from URL params or fallback to i18n language
  const currentLanguage = lang || i18n.language || 'en';
  
  // Function to create language-aware links
  const createLink = (path: string) => {
    // Remove leading slash if present
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    
    // For SeaChat routes, ensure they include the language prefix
    if (cleanPath.startsWith('seachat/')) {
      return `/${currentLanguage}/${cleanPath}`;
    } else if (cleanPath === 'seachat') {
      return `/${currentLanguage}/seachat`;
    } else {
      // For other routes, add language prefix
      return `/${currentLanguage}/${cleanPath}`;
    }
  };
  
  return { createLink, currentLanguage };
};

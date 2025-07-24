import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { normalizeLanguage } from '../constants/languages';

export const useNormalizedLanguage = () => {
  const { i18n } = useTranslation();
  const { lang } = useParams<{ lang: string }>();
  
  // Get current language from URL params or fallback to i18n language
  const rawLanguage = lang || i18n.language || 'en';
  const normalizedLanguage = normalizeLanguage(rawLanguage);
  
  return normalizedLanguage;
};

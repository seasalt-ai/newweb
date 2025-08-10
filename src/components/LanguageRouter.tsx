import React, { useEffect } from 'react';
import { useParams, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE, normalizeLanguage } from '../constants/languages';

const LanguageRouter: React.FC = () => {
  const { lang } = useParams<{ lang: string }>();
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  
  
  useEffect(() => {

    // Only redirect if the language is missing or unsupported
    if (!lang) {
      const redirectTo = `/${DEFAULT_LANGUAGE}` + location.pathname;
      navigate(redirectTo, { replace: true });
      return;
    }

    if (!SUPPORTED_LANGUAGES.includes(lang as any)) {
      // Try to normalize the language first (e.g., 'en-US' -> 'en')
      const normalizedLang = normalizeLanguage(lang);
      const pathWithoutLang = location.pathname.replace(/^\/[^\/]+/, '');
      const redirectTo = `/${normalizedLang}` + pathWithoutLang;
      navigate(redirectTo, { replace: true });
      return;
    }

    // Only change language if different
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang, location.pathname, navigate, i18n]);
  
  return <Outlet />;
};

export default LanguageRouter;
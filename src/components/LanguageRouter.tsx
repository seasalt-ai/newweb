import React, { useEffect } from 'react';
import { useParams, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE } from '../constants/languages';

const LanguageRouter: React.FC = () => {
  const { lang } = useParams<{ lang: string }>();
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  
  
  useEffect(() => {
    console.log('[LanguageRouter] useEffect triggered:', { 
      lang, 
      pathname: location.pathname, 
      currentI18nLanguage: i18n.language,
      supportedLanguages: SUPPORTED_LANGUAGES,
      defaultLanguage: DEFAULT_LANGUAGE
    });

    // Only redirect if the language is missing or unsupported
    if (!lang) {
      const redirectTo = `/${DEFAULT_LANGUAGE}` + location.pathname;
      console.log('[LanguageRouter] No lang param, redirecting to:', redirectTo);
      navigate(redirectTo, { replace: true });
      return;
    }

    if (!SUPPORTED_LANGUAGES.includes(lang as any)) {
      const pathWithoutLang = location.pathname.replace(/^\/[^\/]+/, '');
      const redirectTo = `/${DEFAULT_LANGUAGE}` + pathWithoutLang;
      console.log('[LanguageRouter] Unsupported language, redirecting:', { lang, redirectTo });
      navigate(redirectTo, { replace: true });
      return;
    }

    // Only change language if different
    if (i18n.language !== lang) {
      console.log('[LanguageRouter] Changing language:', { from: i18n.language, to: lang });
      i18n.changeLanguage(lang);
    } else {
      console.log('[LanguageRouter] Language already set, no change needed:', lang);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang, location.pathname, navigate, i18n]);
  
  return <Outlet />;
};

export default LanguageRouter;
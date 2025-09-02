import React, { useEffect, memo } from 'react';
import { useParams, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE, normalizeLanguage } from '../constants/languages';

const LanguageRouter: React.FC = memo(() => {
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
      defaultLanguage: DEFAULT_LANGUAGE,
      localStorage_i18nextLng: typeof window !== 'undefined' ? window.localStorage?.getItem('i18nextLng') : null
    });

    // Only redirect if the language is missing or unsupported
    if (!lang) {
      const redirectTo = `/${DEFAULT_LANGUAGE}` + location.pathname;
      console.log('[LanguageRouter] No lang param, redirecting to:', redirectTo);
      navigate(redirectTo, { replace: true });
      return;
    }

    if (!SUPPORTED_LANGUAGES.includes(lang as any)) {
      // Try to normalize the language first (e.g., 'en-US' -> 'en')
      const normalizedLang = normalizeLanguage(lang);
      const pathWithoutLang = location.pathname.replace(/^\/[^\/]+/, '');
      const redirectTo = `/${normalizedLang}` + pathWithoutLang;
      console.log('[LanguageRouter] Unsupported language, redirecting with normalization:', { 
        lang, 
        normalizedLang, 
        pathWithoutLang, 
        redirectTo 
      });
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

  // Update HTML lang attribute whenever the language changes
  useEffect(() => {
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
    console.log('[LanguageRouter] Updated HTML lang attribute to:', i18n.language);
  }, [i18n.language]);
  
  return <Outlet />;
});

export default LanguageRouter;

import React, { useEffect } from 'react';
import { useParams, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const LanguageRouter: React.FC = () => {
  const { lang } = useParams<{ lang: string }>();
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  
  // Supported languages
  const supportedLanguages = ['en', 'es', 'fr', 'de', 'pl', 'pt', 'ru', 'ar', 'zh-TW', 'ja', 'ko', 'vi', 'th', 'hi'];
  
  useEffect(() => {
    if (!lang) {
      // If no language parameter, redirect to default language
      navigate('/en' + location.pathname, { replace: true });
      return;
    }

    if (supportedLanguages.includes(lang)) {
      // Set the language to match the URL parameter
      i18n.changeLanguage(lang);
    } else {
      // If language is not supported, redirect to English
      const pathWithoutLang = location.pathname.replace(/^\/[^/]+/, '');
      navigate('/en' + pathWithoutLang, { replace: true });
    }
  }, [lang, navigate, location.pathname, supportedLanguages]);
  
  return <Outlet />;
};

export default LanguageRouter;
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
    // Only redirect if the language is missing or unsupported
    if (!lang) {
      navigate('/en' + location.pathname, { replace: true });
      return;
    }

    if (!supportedLanguages.includes(lang)) {
      const pathWithoutLang = location.pathname.replace(/^\/[^\/]+/, '');
      navigate('/en' + pathWithoutLang, { replace: true });
      return;
    }

    // Only change language if different
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang, location.pathname, navigate]);
  
  return <Outlet />;
};

export default LanguageRouter;
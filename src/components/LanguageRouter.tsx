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
    // Only redirect if the language is missing or unsupported
    if (!lang) {
      navigate(`/${DEFAULT_LANGUAGE}` + location.pathname, { replace: true });
      return;
    }

    if (!SUPPORTED_LANGUAGES.includes(lang as any)) {
      const pathWithoutLang = location.pathname.replace(/^\/[^\/]+/, '');
      navigate(`/${DEFAULT_LANGUAGE}` + pathWithoutLang, { replace: true });
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
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE, normalizeLanguage } from '../constants/languages';

/**
 * Component that redirects paths without language prefixes to language-prefixed versions
 * while preserving the original path and detecting browser language
 */
const PathRedirect: React.FC = () => {
  const location = useLocation();
  
  // Detect browser language for redirect - same logic as in App.tsx
  const getBrowserLanguage = () => {
    if (typeof window === 'undefined') return DEFAULT_LANGUAGE;
    
    // Check browser languages in order of preference
    const browserLangs = navigator.languages || [navigator.language || DEFAULT_LANGUAGE];
    console.log('[PathRedirect] Browser languages detected:', browserLangs);
    
    for (const browserLang of browserLangs) {
      const normalized = normalizeLanguage(browserLang);
      console.log('[PathRedirect] Normalized browser language:', browserLang, '->', normalized);
      if (SUPPORTED_LANGUAGES.includes(normalized as any)) {
        return normalized;
      }
    }
    
    return DEFAULT_LANGUAGE; // fallback
  };
  
  const detectedLanguage = getBrowserLanguage();
  const redirectTo = `/${detectedLanguage}${location.pathname}`;
  
  console.log('[PathRedirect] Redirecting from', location.pathname, 'to', redirectTo);
  
  return <Navigate to={redirectTo} replace />;
};

export default PathRedirect;

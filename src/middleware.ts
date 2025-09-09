import { defineMiddleware } from 'astro:middleware';
import { extractLangFromPath, languages, defaultLang, getLocalizedPath, type SupportedLanguage } from './i18n/helpers';

export const onRequest = defineMiddleware((context, next) => {
  const url = context.url;
  const pathname = url.pathname;

  // Skip static files, API routes, and admin routes
  if (
    pathname.startsWith('/api/') ||
    pathname.startsWith('/_') ||
    pathname.includes('.') ||
    pathname.startsWith('/admin/')
  ) {
    return next();
  }

  // Get the language from URL
  const currentLang = extractLangFromPath(pathname);
  
  // Check if this is the root path
  if (pathname === '/') {
    // Detect browser language or use default
    const acceptLanguage = context.request.headers.get('accept-language');
    let preferredLang = defaultLang;
    
    if (acceptLanguage) {
      // Parse accept-language header to find the best match
      const browserLanguages = acceptLanguage
        .split(',')
        .map(lang => {
          const parts = lang.trim().split(';');
          const code = parts[0];
          const quality = parts[1] ? parseFloat(parts[1].split('=')[1]) : 1;
          return { code: normalizeLanguageCode(code), quality };
        })
        .sort((a, b) => b.quality - a.quality);
      
      // Find the first supported language
      const supportedLangCodes = Object.keys(languages);
      for (const lang of browserLanguages) {
        if (supportedLangCodes.includes(lang.code)) {
          preferredLang = lang.code as SupportedLanguage;
          break;
        }
      }
    }
    
    // Redirect to preferred language (unless it's the default and we don't prefix default)
    if (preferredLang !== defaultLang || prefixDefaultLocale()) {
      return Response.redirect(new URL(`/${preferredLang}`, url), 302);
    }
  }

  // Handle language-prefixed routes
  const pathParts = pathname.split('/').filter(Boolean);
  const potentialLang = pathParts[0];

  // If the first segment is a supported language
  if (potentialLang && potentialLang in languages) {
    // Store the detected language in locals for components to use
    context.locals.lang = potentialLang as SupportedLanguage;
    return next();
  }

  // If no language prefix and not root, redirect to add language prefix
  if (pathParts.length > 0) {
    const localizedPath = getLocalizedPath(pathname, currentLang);
    if (localizedPath !== pathname) {
      return Response.redirect(new URL(localizedPath, url), 302);
    }
  }

  // Store default language in locals
  context.locals.lang = defaultLang;
  return next();
});

// Helper function to normalize language codes
function normalizeLanguageCode(code: string): string {
  const normalized = code.toLowerCase().trim();
  
  // Handle specific cases
  if (normalized === 'zh-tw' || normalized === 'zh-hant') return 'zh-tw';
  if (normalized === 'zh-cn' || normalized === 'zh-hans') return 'zh-cn';
  if (normalized.startsWith('zh')) return 'zh-tw'; // Default Chinese to Traditional
  
  // Extract base language code (e.g., 'en-US' -> 'en')
  const baseLang = normalized.split('-')[0];
  
  // Map common language codes
  const languageMap: Record<string, string> = {
    'en': 'en',
    'es': 'es', 
    'fr': 'fr',
    'de': 'de',
    'ja': 'ja',
    'ko': 'ko',
    'ar': 'ar',
    'fa': 'fa',
    'hi': 'hi',
    'id': 'id',
    'ms': 'ms',
    'fil': 'fil'
  };
  
  return languageMap[baseLang] || defaultLang;
}

// Check if we should prefix the default locale
function prefixDefaultLocale(): boolean {
  // This should match your astro.config.mjs setting
  // Currently set to false in the config
  return false;
}

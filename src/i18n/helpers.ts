// 支援的語言 - 與 astro.config.mjs 保持一致
export const languages = {
  'en': { name: 'English', englishName: 'English', shortCode: 'EN' },
  'es': { name: 'Español', englishName: 'Spanish', shortCode: 'ES' },
  'zh-tw': { name: '繁體中文', englishName: 'Chinese (Traditional)', shortCode: 'TW' },
  'zh-cn': { name: '简体中文', englishName: 'Chinese (Simplified)', shortCode: 'CN' },
  'ja': { name: '日本語', englishName: 'Japanese', shortCode: 'JA' },
  'ko': { name: '한국어', englishName: 'Korean', shortCode: 'KO' },
  'fr': { name: 'Français', englishName: 'French', shortCode: 'FR' },
  'de': { name: 'Deutsch', englishName: 'German', shortCode: 'DE' },
  'ar': { name: 'العربية', englishName: 'Arabic', shortCode: 'AR' },
  'fa': { name: 'فارسی', englishName: 'Persian', shortCode: 'IR' },
  'fil': { name: 'Filipino', englishName: 'Filipino', shortCode: 'PH' },
  'hi': { name: 'हिन्दी', englishName: 'Hindi', shortCode: 'HI' },
  'id': { name: 'Bahasa Indonesia', englishName: 'Indonesian', shortCode: 'ID' },
  'ms': { name: 'Bahasa Melayu', englishName: 'Malay', shortCode: 'MY' },
  'pl': { name: 'Polski', englishName: 'Polish', shortCode: 'PL' },
  'pt': { name: 'Português', englishName: 'Portuguese', shortCode: 'PT' },
  'ru': { name: 'Русский', englishName: 'Russian', shortCode: 'RU' },
  'ta': { name: 'தமிழ்', englishName: 'Tamil', shortCode: 'IN' },
  'th': { name: 'ไทย', englishName: 'Thai', shortCode: 'TH' },
  'vi': { name: 'Tiếng Việt', englishName: 'Vietnamese', shortCode: 'VI' }
} as const;

export type SupportedLanguage = keyof typeof languages;
export const defaultLang: SupportedLanguage = 'en';

// 翻譯緩存
const translationCache = new Map<string, any>();

// 用於追蹤已記錄的缺失鍵，避免重複記錄
const loggedMissingKeys = new Set<string>();

// 檢查是否為開發環境
const isDev = import.meta.env?.DEV || process.env.NODE_ENV === 'development';


// 動態載入翻譯文件
async function loadTranslations(lang: SupportedLanguage) {
  const langKey = lang === 'zh-tw' ? 'zh-TW' : lang === 'zh-cn' ? 'zh-CN' : lang;
  
  if (translationCache.has(langKey)) {
    return translationCache.get(langKey);
  }

  try {
    const translations = await import(`./locales/${langKey}.json`);
    const data = translations.default || translations;
    translationCache.set(langKey, data);
    return data;
  } catch (error) {
    console.error(`Failed to load translations for ${lang}:`, error);
    // 回退到英文
    if (lang !== 'en') {
      return loadTranslations('en');
    }
    return {};
  }
}

// 翻譯函數
function createTranslationFunction(translations: any, lang?: SupportedLanguage) {
  return function t(key: string, params?: Record<string, any>): any {
    if (!translations) {
      return key;
    }

    const keys = key.split('.');
    let result: any = translations;
    
    for (const k of keys) {
      if (result && typeof result === 'object' && k in result) {
        result = result[k];
      } else {
        // 在開發環境中記錄缺失的翻譯鍵
        if (isDev) {
          const logKey = `${lang || 'unknown'}:${key}`;
          if (!loggedMissingKeys.has(logKey)) {
            console.warn(`🌐 Missing translation key: "${key}" in locale "${lang || 'unknown'}"`);
            loggedMissingKeys.add(logKey);
          }
        }
        return key; // 找不到翻譯時返回 key
      }
    }
    
    // 如果參數中包含 returnObjects: true，直接返回結果
    if (params?.returnObjects === true) {
      return result;
    }
    
    if (typeof result === 'string') {
      // 簡單的參數替換
      if (params) {
        return result.replace(/\{\{(\w+)\}\}/g, (match, paramName) => {
          return params[paramName]?.toString() || match;
        });
      }
      return result;
    }
    
    // 對於其他類型（數組、對象）也返回結果
    if (Array.isArray(result) || (typeof result === 'object' && result !== null)) {
      return result;
    }
    
    return key;
  };
}

// 在 Astro 組件中使用的 helper 函數
export async function getTranslationHelpers(lang: SupportedLanguage) {
  const translations = await loadTranslations(lang);
  const t = createTranslationFunction(translations, lang);
  
  return {
    t,
    lang,
    translations,
    isDefaultLang: lang === defaultLang
  };
}

// 從 URL 中提取語言代碼
export function extractLangFromPath(pathname: string): SupportedLanguage {
  const segments = pathname.split('/').filter(Boolean);
  const firstSegment = segments[0]?.toLowerCase();
  
  // 檢查是否是支援的語言
  if (firstSegment && firstSegment in languages) {
    return firstSegment as SupportedLanguage;
  }
  
  return defaultLang;
}

// 產生本地化路徑
export function getLocalizedPath(path: string, targetLang: SupportedLanguage): string {
  // 檢查路徑是否已經包含支援的語言前綴
  const segments = path.split('/').filter(Boolean);
  const firstSegment = segments[0]?.toLowerCase();
  
  let cleanPath = path;
  
  // 只有當第一個段落是支援的語言時才移除它
  if (firstSegment && firstSegment in languages) {
    cleanPath = '/' + segments.slice(1).join('/');
  }
  
  // 確保路徑以 / 開頭
  if (!cleanPath.startsWith('/')) {
    cleanPath = '/' + cleanPath;
  }
  
  // 根據 Astro 配置，所有語言都需要前綴（prefixDefaultLocale: true）
  return `/${targetLang}${cleanPath}`;
}

// 取得語言的顯示名稱
export function getLanguageDisplayName(lang: SupportedLanguage): string {
  return languages[lang].name;
}

// 取得語言的英文名稱
export function getLanguageEnglishName(lang: SupportedLanguage): string {
  return languages[lang].englishName;
}

// 取得語言的簡碼
export function getLanguageShortCode(lang: SupportedLanguage): string {
  return languages[lang].shortCode;
}

// 取得所有支援的語言
export function getSupportedLanguages() {
  return Object.entries(languages).map(([code, info]) => ({ 
    code: code as SupportedLanguage, 
    name: info.name,
    englishName: info.englishName,
    shortCode: info.shortCode
  }));
}

// React Hook for i18n (統一的翻譯 Hook)
// 這個 Hook 只能在 React 組件中使用
let React: any;
try {
  React = require('react');
} catch (e) {
  // React 不可用時的處理
}

export function useTranslation(lang: SupportedLanguage) {
  // Check if we're in a browser environment
  if (typeof window === 'undefined') {
    // SSR environment: load translations synchronously if cached
    const langKey = lang === 'zh-tw' ? 'zh-TW' : lang === 'zh-cn' ? 'zh-CN' : lang;
    const cachedTranslations = translationCache.get(langKey);
    
    if (cachedTranslations) {
      return {
        t: createTranslationFunction(cachedTranslations, lang),
        isLoading: false,
        error: null
      };
    }
    
    // If not cached, return a fallback that shows the key
    return {
      t: (key: string) => key,
      isLoading: false,
      error: null
    };
  }
  
  if (!React || !React.useState || !React.useEffect) {
    console.warn('useTranslation can only be used in React components');
    return {
      t: null,
      isLoading: false,
      error: new Error('useTranslation can only be used in React components')
    };
  }
  
  const [t, setT] = React.useState<((key: string, params?: Record<string, any>) => string) | null>(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState<Error | null>(null);
  
  React.useEffect(() => {
    const loadTranslations = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const { t: tFunc } = await getTranslationHelpers(lang);
        setT(() => tFunc);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to load translations'));
        console.error(`Failed to load translations for ${lang}:`, err);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadTranslations();
  }, [lang]);
  
  return { t, isLoading, error };
}

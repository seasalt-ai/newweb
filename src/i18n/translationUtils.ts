import type { SupportedLanguage } from './helpers';

/**
 * 創建統一的翻譯函數，智能判斷回傳型別
 * @param translations - 來自 SSR 的翻譯物件，或 null（使用 CSR hook）
 * @param hookT - 來自 useTranslation hook 的翻譯函數，或 null（SSR 模式）
 * @param lang - 當前語言
 * @returns 翻譯工具函數物件
 */
export function createTranslationUtils(
  translations: any,
  hookT: ((key: string, params?: Record<string, any>) => any) | null,
  lang: SupportedLanguage
) {
  const interpolate = (str: string, params?: Record<string, string | number>) => {
    if (!params) return str;
    return str.replace(/\{\{(\w+)\}\}/g, (match, name) => {
      const val = params[name];
      return val === undefined ? match : String(val);
    });
  };

  /**
   * 統一的智能翻譯函數，根據 fallback 型別自動判斷回傳型別
   * @param key - 翻譯鍵值
   * @param fallback - 找不到翻譯時的回退值（字串、陣列或物件）
   * @param params - 用於插值的參數物件（僅對字串生效）
   * @returns 翻譯結果或回退值
   */
  function getText<T>(key: string, fallback: T, params?: Record<string, string | number>): T {
    if (translations) {
      // SSR 模式：從傳入的 translations 物件中取得翻譯
      const keys = key.split('.');
      let result: any = translations;
      
      for (const k of keys) {
        if (result !== null && typeof result === 'object') {
          // 支援陣列索引存取，例如 "steps.1" -> steps[1]
          if (Array.isArray(result) && /^\d+$/.test(k)) {
            const index = parseInt(k, 10);
            if (index < result.length) {
              result = result[index];
            } else {
              // 開發環境警告
              if (import.meta.env?.DEV) {
                console.warn(`Array index out of bounds: "${key}" (index ${index}) in locale "${lang}"`);
              }
              return fallback;
            }
          } else if (k in result) {
            result = (result as any)[k];
          } else {
            // 開發環境警告
            if (import.meta.env?.DEV) {
              console.warn(`Missing translation key: "${key}" in locale "${lang}"`);
            }
            return fallback;
          }
        } else {
          // 開發環境警告
          if (import.meta.env?.DEV) {
            console.warn(`Missing translation key: "${key}" in locale "${lang}"`);
          }
          return fallback;
        }
      }
      
      // 根據 fallback 型別驗證結果
      if (typeof fallback === 'string') {
        if (typeof result === 'string') {
          return interpolate(result, params) as T;
        }
        return fallback as T;
      } else if (Array.isArray(fallback)) {
        return (Array.isArray(result) ? result : fallback) as T;
      } else if (typeof fallback === 'object' && fallback !== null) {
        return ((typeof result === 'object' && !Array.isArray(result)) ? result : fallback) as T;
      }
      
      return (result !== undefined ? result : fallback) as T;
    }
    
    // CSR 模式：使用 hook 的翻譯函數
    if (hookT) {
      try {
        if (typeof fallback === 'object' && fallback !== null) {
          // 如果 fallback 是陣列或物件，使用 returnObjects
          const result = hookT(key, { returnObjects: true });
          return (result !== undefined ? result : fallback) as T;
        } else {
          // 字串翻譯（傳入插值參數）
          const result = hookT(key, params as any);
          return (result !== undefined ? result : fallback) as T;
        }
      } catch (error) {
        return fallback as T;
      }
    }
    
    return fallback as T;
  }

  return {
    getText
  };
}

/**
 * React Hook 的快捷函數，簡化組件中的使用
 * @param lang - 當前語言
 * @param translations - 可選的 SSR 翻譯物件
 * @param hookT - useTranslation hook 回傳的翻譯函數
 * @param isLoading - hook 的載入狀態
 * @returns 翻譯工具函數和狀態
 */
export function useTranslationUtils(
  lang: SupportedLanguage,
  translations?: any,
  hookT?: ((key: string, params?: Record<string, any>) => any) | null,
  isLoading?: boolean
) {
  const { getText } = createTranslationUtils(translations, hookT || null, lang);
  
  return {
    getText,
    isLoading: isLoading || false
  };
}

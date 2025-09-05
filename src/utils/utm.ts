// UTM 參數管理工具函數
// 用於在 sessionStorage 中保存和恢復 UTM 參數，並在外部鏈接上附加這些參數

// UTM 參數介面
interface UTMParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  utm_id?: string;
  [key: string]: string | undefined;
}

// 配置常數
const UTM_STORAGE_KEY = 'seasalt_utm_params';
const UTM_VERSION_KEY = 'seasalt_utm_version';
const CURRENT_UTM_VERSION = '1.0'; // 用於處理版本更新時的數據清理
const UTM_PARAM_NAMES = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
  'utm_id'
];

/**
 * 從 URL 查詢參數中提取 UTM 參數
 * @param searchParams - URL 的 URLSearchParams 對象或查詢字符串
 * @returns UTM 參數對象
 */
export const extractUTMParams = (searchParams: URLSearchParams | string): UTMParams => {
  const params: UTMParams = {};
  const urlParams = typeof searchParams === 'string' 
    ? new URLSearchParams(searchParams) 
    : searchParams;

  UTM_PARAM_NAMES.forEach(paramName => {
    const value = urlParams.get(paramName);
    if (value) {
      params[paramName] = value;
    }
  });

  return params;
};

/**
 * 獲取當前頁面 URL 的 UTM 參數
 * @returns UTM 參數對象
 */
export const getCurrentUTMParams = (): UTMParams => {
  if (typeof window === 'undefined') return {};
  
  const urlParams = new URLSearchParams(window.location.search);
  return extractUTMParams(urlParams);
};

/**
 * 檢查是否需要清理舊版本的 UTM 數據
 */
const checkAndClearOldVersion = (): void => {
  if (typeof window === 'undefined') return;
  
  try {
    const storedVersion = sessionStorage.getItem(UTM_VERSION_KEY);
    if (storedVersion !== CURRENT_UTM_VERSION) {
      sessionStorage.removeItem(UTM_STORAGE_KEY);
      sessionStorage.setItem(UTM_VERSION_KEY, CURRENT_UTM_VERSION);
    }
  } catch (error) {
    console.warn('UTM version check failed:', error);
  }
};

/**
 * 將 UTM 參數保存到 sessionStorage
 * @param utmParams - 要保存的 UTM 參數
 */
export const saveUTMParams = (utmParams: UTMParams): void => {
  if (typeof window === 'undefined') return;
  
  try {
    // 檢查版本並清理舊數據
    checkAndClearOldVersion();
    
    // 只保存有值的 UTM 參數
    const validParams: UTMParams = {};
    Object.keys(utmParams).forEach(key => {
      if (utmParams[key] && utmParams[key].trim() !== '') {
        validParams[key] = utmParams[key];
      }
    });

    if (Object.keys(validParams).length > 0) {
      sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(validParams));
      console.log('[UTM] Saved UTM params:', validParams);
    }
  } catch (error) {
    console.warn('Failed to save UTM params:', error);
  }
};

/**
 * 從 sessionStorage 獲取已保存的 UTM 參數
 * @returns 已保存的 UTM 參數對象
 */
export const getSavedUTMParams = (): UTMParams => {
  if (typeof window === 'undefined') return {};
  
  try {
    // 檢查版本並清理舊數據
    checkAndClearOldVersion();
    
    const saved = sessionStorage.getItem(UTM_STORAGE_KEY);
    if (saved) {
      const params = JSON.parse(saved) as UTMParams;
      console.log('[UTM] Retrieved saved UTM params:', params);
      return params;
    }
  } catch (error) {
    console.warn('Failed to get saved UTM params:', error);
  }
  
  return {};
};

/**
 * 清除保存的 UTM 參數
 */
export const clearSavedUTMParams = (): void => {
  if (typeof window === 'undefined') return;
  
  try {
    sessionStorage.removeItem(UTM_STORAGE_KEY);
    console.log('[UTM] Cleared saved UTM params');
  } catch (error) {
    console.warn('Failed to clear UTM params:', error);
  }
};

/**
 * 將 UTM 參數轉換為查詢字符串
 * @param utmParams - UTM 參數對象
 * @returns 查詢字符串（不包含開頭的 ?）
 */
export const utmParamsToQueryString = (utmParams: UTMParams): string => {
  const params = new URLSearchParams();
  
  Object.keys(utmParams).forEach(key => {
    const value = utmParams[key];
    if (value && value.trim() !== '') {
      params.append(key, value);
    }
  });
  
  return params.toString();
};

/**
 * 檢查 URL 是否為外部鏈接
 * @param url - 要檢查的 URL
 * @returns 是否為外部鏈接
 */
export const isExternalLink = (url: string): boolean => {
  if (typeof window === 'undefined') return false;
  
  try {
    const link = new URL(url, window.location.origin);
    return link.hostname !== window.location.hostname;
  } catch {
    // 如果 URL 無效，假設它是相對鏈接
    return false;
  }
};

/**
 * 為外部鏈接添加 UTM 參數
 * @param url - 原始 URL
 * @param utmParams - 要添加的 UTM 參數（可選，默認使用已保存的參數）
 * @returns 帶有 UTM 參數的 URL
 */
export const addUTMParamsToUrl = (url: string, utmParams?: UTMParams): string => {
  try {
    const params = utmParams || getSavedUTMParams();
    
    // 如果沒有 UTM 參數或不是外部鏈接，直接返回原 URL
    if (Object.keys(params).length === 0 || !isExternalLink(url)) {
      return url;
    }

    const urlObj = new URL(url);
    const utmQueryString = utmParamsToQueryString(params);
    
    if (utmQueryString) {
      // 如果原 URL 已有查詢參數，則添加 &，否則添加 ?
      const separator = urlObj.search ? '&' : '?';
      urlObj.search += separator + utmQueryString;
    }
    
    return urlObj.toString();
  } catch (error) {
    console.warn('Failed to add UTM params to URL:', url, error);
    return url;
  }
};

/**
 * 自動處理當前頁面的 UTM 參數
 * 如果 URL 中有 UTM 參數，則保存到 sessionStorage
 */
export const handlePageUTMParams = (): void => {
  const currentUTMParams = getCurrentUTMParams();
  
  if (Object.keys(currentUTMParams).length > 0) {
    saveUTMParams(currentUTMParams);
  }
};

/**
 * 為頁面中的所有外部鏈接添加 UTM 參數
 * 這個函數可以在頁面加載完成後調用
 */
export const enhanceExternalLinks = (): void => {
  if (typeof window === 'undefined') return;
  
  const savedParams = getSavedUTMParams();
  if (Object.keys(savedParams).length === 0) return;

  // 獲取所有 <a> 標籤
  const links = document.querySelectorAll('a[href]');
  
  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href && isExternalLink(href)) {
      const enhancedUrl = addUTMParamsToUrl(href, savedParams);
      if (enhancedUrl !== href) {
        link.setAttribute('href', enhancedUrl);
        console.log('[UTM] Enhanced external link:', href, '->', enhancedUrl);
      }
    }
  });
};

/**
 * 創建一個增強的外部鏈接 href
 * 可用於 React 組件中動態生成帶 UTM 參數的外部鏈接
 * @param originalUrl - 原始 URL
 * @returns 帶有 UTM 參數的 URL
 */
export const createEnhancedExternalUrl = (originalUrl: string): string => {
  return addUTMParamsToUrl(originalUrl);
};

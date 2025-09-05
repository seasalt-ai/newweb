import { useEffect, useState, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  getSavedUTMParams,
  getCurrentUTMParams,
  saveUTMParams,
  clearSavedUTMParams,
  createEnhancedExternalUrl,
  isExternalLink
} from '../utils/utm';

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

/**
 * useUTM Hook 提供 UTM 參數管理功能
 * 
 * 功能：
 * - 獲取已保存的 UTM 參數
 * - 檢查當前頁面是否有 UTM 參數
 * - 為外部鏈接創建增強的 URL（帶 UTM 參數）
 * - 清除已保存的 UTM 參數
 * - 手動保存 UTM 參數
 */
export const useUTM = () => {
  const location = useLocation();
  const [savedUTMParams, setSavedUTMParams] = useState<UTMParams>({});
  const [currentUTMParams, setCurrentUTMParams] = useState<UTMParams>({});

  // 更新狀態的回調函數
  const updateUTMState = useCallback(() => {
    const saved = getSavedUTMParams();
    const current = getCurrentUTMParams();
    
    setSavedUTMParams(saved);
    setCurrentUTMParams(current);
  }, []);

  // 當路由變化時更新 UTM 狀態
  useEffect(() => {
    updateUTMState();
  }, [location, updateUTMState]);

  /**
   * 手動保存 UTM 參數
   * @param params - 要保存的 UTM 參數
   */
  const saveUTMParamsManually = useCallback((params: UTMParams) => {
    saveUTMParams(params);
    updateUTMState();
  }, [updateUTMState]);

  /**
   * 清除已保存的 UTM 參數
   */
  const clearUTMParams = useCallback(() => {
    clearSavedUTMParams();
    updateUTMState();
  }, [updateUTMState]);

  /**
   * 為外部鏈接創建增強的 URL（帶 UTM 參數）
   * @param url - 原始 URL
   * @returns 增強的 URL
   */
  const enhanceExternalUrl = useCallback((url: string): string => {
    return createEnhancedExternalUrl(url);
  }, []);

  /**
   * 檢查是否有有效的 UTM 參數
   * @returns 是否有有效的 UTM 參數
   */
  const hasUTMParams = useCallback((): boolean => {
    return Object.keys(savedUTMParams).length > 0;
  }, [savedUTMParams]);

  /**
   * 檢查 URL 是否為外部鏈接
   * @param url - 要檢查的 URL
   * @returns 是否為外部鏈接
   */
  const checkIsExternalLink = useCallback((url: string): boolean => {
    return isExternalLink(url);
  }, []);

  /**
   * 獲取特定的 UTM 參數值
   * @param paramName - UTM 參數名稱
   * @returns UTM 參數值
   */
  const getUTMParam = useCallback((paramName: keyof UTMParams): string | undefined => {
    return savedUTMParams[paramName];
  }, [savedUTMParams]);

  /**
   * 獲取 UTM 參數的摘要信息（用於調試或顯示）
   * @returns UTM 參數摘要
   */
  const getUTMSummary = useCallback(() => {
    const params = savedUTMParams;
    if (Object.keys(params).length === 0) {
      return 'No UTM parameters';
    }

    const summary = Object.entries(params)
      .filter(([, value]) => value && value.trim() !== '')
      .map(([key, value]) => `${key}: ${value}`)
      .join(', ');

    return summary || 'No valid UTM parameters';
  }, [savedUTMParams]);

  return {
    // 狀態
    savedUTMParams,
    currentUTMParams,
    hasUTMParams: hasUTMParams(),
    
    // 方法
    saveUTMParams: saveUTMParamsManually,
    clearUTMParams,
    enhanceExternalUrl,
    isExternalLink: checkIsExternalLink,
    getUTMParam,
    getUTMSummary,
    
    // 工具函數
    refresh: updateUTMState
  };
};

export default useUTM;

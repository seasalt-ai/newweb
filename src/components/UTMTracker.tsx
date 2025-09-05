import React, { useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  handlePageUTMParams, 
  enhanceExternalLinks,
  isExternalLink,
  addUTMParamsToUrl
} from '../utils/utm';

/**
 * UTMTracker 組件負責自動處理 UTM 參數的追蹤和管理
 * 
 * 功能：
 * 1. 在每次路由變更時檢查並保存 UTM 參數
 * 2. 為頁面上的外部鏈接自動添加 UTM 參數
 * 3. 攔截外部鏈接點擊事件，動態添加 UTM 參數
 */
const UTMTracker: React.FC = () => {
  const location = useLocation();

  // 處理外部鏈接點擊事件的回調函數
  const handleLinkClick = useCallback((event: MouseEvent) => {
    const target = (event.target as Element).closest('a');
    
    // 確保點擊的是 <a> 標籤
    if (!target) return;
    
    const href = target.getAttribute('href');
    if (!href || !isExternalLink(href)) return;

    // 檢查鏈接是否已經有 UTM 參數
    const urlObj = new URL(href, window.location.origin);
    const hasUTMParams = Array.from(urlObj.searchParams.keys()).some(key => 
      key.startsWith('utm_')
    );

    // 如果已經有 UTM 參數，就不再添加
    if (hasUTMParams) return;

    // 動態添加 UTM 參數
    const enhancedUrl = addUTMParamsToUrl(href);
    if (enhancedUrl !== href) {
      // 阻止默認行為，使用增強的 URL 進行導航
      event.preventDefault();
      
      // 檢查是否要在新窗口打開
      const openInNewWindow = target.target === '_blank' || 
                             event.ctrlKey || 
                             event.metaKey || 
                             event.button === 1;
      
      if (openInNewWindow) {
        window.open(enhancedUrl, '_blank', 'noopener,noreferrer');
      } else {
        window.location.href = enhancedUrl;
      }
      
    }
  }, []);

  // 頁面加載時處理 UTM 參數和外部鏈接
  useEffect(() => {
    // 處理當前頁面的 UTM 參數
    handlePageUTMParams();

    // 為現有的外部鏈接添加 UTM 參數
    const timeoutId = setTimeout(() => {
      enhanceExternalLinks();
    }, 100); // 稍微延遲以確保 DOM 已完全渲染

    return () => clearTimeout(timeoutId);
  }, [location.pathname, location.search]);

  // 添加全局點擊事件監聽器來處理動態外部鏈接
  useEffect(() => {
    document.addEventListener('click', handleLinkClick, true); // 使用捕獲階段

    return () => {
      document.removeEventListener('click', handleLinkClick, true);
    };
  }, [handleLinkClick]);

  // 為使用 MutationObserver 來處理動態添加的鏈接
  useEffect(() => {
    if (typeof window === 'undefined' || !window.MutationObserver) return;

    const observer = new MutationObserver((mutations) => {
      let shouldEnhanceLinks = false;

      mutations.forEach((mutation) => {
        // 檢查是否有新的節點被添加
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
          for (const node of Array.from(mutation.addedNodes)) {
            if (node.nodeType === Node.ELEMENT_NODE) {
              const element = node as Element;
              
              // 檢查是否是 <a> 標籤或包含 <a> 標籤
              if (element.tagName === 'A' || element.querySelector('a')) {
                shouldEnhanceLinks = true;
                break;
              }
            }
          }
        }
      });

      // 如果發現新的鏈接，延遲增強它們
      if (shouldEnhanceLinks) {
        setTimeout(() => {
          enhanceExternalLinks();
        }, 50);
      }
    });

    // 開始觀察 document.body 的變化
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => {
      observer.disconnect();
    };
  }, []);


  // 這個組件不渲染任何內容
  return null;
};

export default UTMTracker;

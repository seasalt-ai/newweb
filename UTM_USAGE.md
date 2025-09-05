# UTM 參數管理功能說明文檔

## 概述

此功能在網站中自動處理 UTM 參數的追蹤和管理，確保當用戶從含有 UTM 參數的連結進入網站時，這些參數會被保存並在用戶點擊外部連結時自動附加上去。

## 核心功能

### 1. 自動保存 UTM 參數
- 當用戶通過含有 UTM 參數的 URL 進入網站時，系統會自動將這些參數保存到 `sessionStorage`
- 支援的 UTM 參數：`utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content`, `utm_id`
- 使用版本管理，確保網站更新時不會受到舊版本數據影響

### 2. 外部連結自動增強
- 自動識別網站中的外部連結
- 為外部連結自動附加已保存的 UTM 參數
- 支援靜態和動態生成的連結

### 3. 智能連結處理
- 攔截外部連結的點擊事件
- 動態為外部連結添加 UTM 參數
- 保持原有的連結行為（新窗口/當前窗口）

## 已實作的文件

### 1. `src/utils/utm.ts` - 核心工具函數
包含所有 UTM 參數管理的核心邏輯：
- `getCurrentUTMParams()` - 獲取當前頁面的 UTM 參數
- `saveUTMParams()` - 保存 UTM 參數到 sessionStorage
- `getSavedUTMParams()` - 從 sessionStorage 獲取已保存的參數
- `addUTMParamsToUrl()` - 為 URL 添加 UTM 參數
- `isExternalLink()` - 判斷是否為外部連結
- `enhanceExternalLinks()` - 增強頁面中的外部連結

### 2. `src/components/UTMTracker.tsx` - 自動追蹤組件
React 組件，負責：
- 監聽路由變化並自動處理 UTM 參數
- 為頁面中的外部連結添加 UTM 參數
- 使用 MutationObserver 處理動態添加的連結
- 攔截外部連結點擊事件並動態添加 UTM 參數

### 3. `src/hooks/useUTM.ts` - React Hook
提供給 React 組件使用的 Hook，包含：
- 狀態管理：`savedUTMParams`, `currentUTMParams`, `hasUTMParams`
- 方法：`saveUTMParams`, `clearUTMParams`, `enhanceExternalUrl`
- 工具函數：`getUTMParam`, `getUTMSummary`, `isExternalLink`

## 整合方式

UTMTracker 組件已經整合到主要的 App.tsx 中：

```tsx
import UTMTracker from './components/UTMTracker';

function App() {
  return (
    <Router basename={basename}>
      <GTMTracker />
      <UTMTracker />  {/* 新增的 UTM 追蹤功能 */}
      <ScrollToTop />
      {/* ... 其他組件 */}
    </Router>
  );
}
```

## 使用範例

### 1. 基本使用（自動運作）
當 UTMTracker 組件整合到 App 中後，功能會自動運作：
- 用戶訪問 `https://seasalt.ai?utm_source=google&utm_medium=cpc&utm_campaign=test`
- 系統自動保存 UTM 參數
- 當用戶點擊任何外部連結時，會自動附加這些參數

### 2. 在 React 組件中使用 Hook

```tsx
import { useUTM } from '../hooks/useUTM';

const MyComponent = () => {
  const { savedUTMParams, hasUTMParams, enhanceExternalUrl, getUTMSummary } = useUTM();

  const externalUrl = "https://example.com";
  const enhancedUrl = enhanceExternalUrl(externalUrl);
  // enhancedUrl 將包含保存的 UTM 參數

  return (
    <div>
      {hasUTMParams && <p>當前 UTM 參數: {getUTMSummary()}</p>}
      <a href={enhancedUrl} target="_blank" rel="noopener noreferrer">
        外部連結（會自動附加 UTM 參數）
      </a>
    </div>
  );
};
```

### 3. 直接使用工具函數

```tsx
import { getSavedUTMParams, createEnhancedExternalUrl } from '../utils/utm';

// 獲取保存的 UTM 參數
const utmParams = getSavedUTMParams();
console.log('已保存的 UTM 參數:', utmParams);

// 為外部 URL 創建增強版本
const originalUrl = "https://partner.com/signup";
const enhancedUrl = createEnhancedExternalUrl(originalUrl);
// enhancedUrl: "https://partner.com/signup?utm_source=google&utm_medium=cpc..."
```

## 測試方式

### 1. 測試 UTM 參數保存
1. 訪問網站並添加 UTM 參數：`http://localhost:5173?utm_source=test&utm_medium=email`
2. 打開瀏覽器開發者工具的 Console
3. 查看是否有 `[UTM] Saved UTM params:` 的日誌

### 2. 測試外部連結增強
1. 在有保存 UTM 參數的情況下瀏覽網站
2. 查看 Console 是否有 `[UTM] Enhanced external link:` 的日誌
3. 檢查外部連結的 href 屬性是否已包含 UTM 參數

### 3. 測試點擊攔截
1. 點擊任何外部連結
2. 查看 Console 是否有 `[UTM] Redirected external link with UTM params:` 日誌
3. 確認最終跳轉的 URL 包含正確的 UTM 參數

## 版本管理

系統使用版本控制機制確保網站更新時不會被舊數據影響：
- 當前版本：`1.0`
- 存儲鍵：`seasalt_utm_params` 和 `seasalt_utm_version`
- 如果檢測到版本不一致，會自動清除舊數據

## 注意事項

1. **sessionStorage 使用**：UTM 參數保存在 sessionStorage 中，瀏覽器標籤頁關閉後會自動清除
2. **外部連結識別**：系統會自動識別外部連結（與當前域名不同的連結）
3. **性能考慮**：使用了 MutationObserver 來監聽動態添加的連結，有適當的防抖機制
4. **錯誤處理**：所有操作都有適當的錯誤處理，確保不會影響網站正常運作
5. **開發模式調試**：在開發環境中會輸出詳細的調試信息

## 調試

在開發環境中，可以通過瀏覽器開發者工具查看：
- Console 日誌：查看 UTM 參數的處理過程
- Application > Session Storage：查看保存的 UTM 參數
- Network：確認外部連結請求包含正確的 UTM 參數

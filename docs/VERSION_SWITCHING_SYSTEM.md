# Header/Footer Version Switching System

## 概述

這個版本切換系統允許專案中不同的頁面使用不同版本的 Header 和 Footer 組件，支持多品牌產品（如 SeaChat、SeaX、SeaVoice、通用版本）的差異化展示。

## 專案結構

```
src/
├── components/
│   └── versions/
│       ├── config.ts                  # 版本配置文件
│       ├── VersionManager.astro       # 版本管理器組件
│       ├── headers/
│       │   ├── DefaultHeader.astro    # 默認版本 Header
│       │   ├── SeaChatHeader.astro    # SeaChat 版本 Header
│       │   ├── SeaXHeader.astro       # SeaX 版本 Header
│       │   └── SeaVoiceHeader.astro   # SeaVoice 版本 Header
│       └── footers/
│           ├── DefaultFooter.astro    # 默認版本 Footer
│           ├── SeaChatFooter.astro    # SeaChat 版本 Footer
│           ├── SeaXFooter.astro       # SeaX 版本 Footer
│           └── SeaVoiceFooter.astro   # SeaVoice 版本 Footer
└── layouts/
    ├── Layout.astro                   # 主要布局文件
    └── SeaxLayout.astro               # SeaX 專用布局文件
```

## 核心組件說明

### 1. 版本配置 (config.ts)

定義了所有可用的版本及其元資料，包括：
- 版本名稱和顯示名
- Logo 路徑
- 主色調
- 版本檢測函數

### 2. 版本管理器 (VersionManager.astro)

核心組件，負責：
- 根據版本參數動態載入對應組件
- 支持自動版本檢測（根據 URL 路徑）
- 傳遞語言和配置參數給組件

### 3. Header/Footer 組件

每個版本都有專門的 Header 和 Footer 組件：
- **DefaultHeader/Footer**: 通用版本，用於主站
- **SeaChatHeader/Footer**: SeaChat 產品專用，紫色主題
- **SeaXHeader/Footer**: SeaX 產品專用，藍色主題，包含完整功能
- **SeaVoiceHeader/Footer**: SeaVoice 產品專用（待完善）

## 使用方法

### 1. 在 Layout 中使用

#### 主要 Layout (Layout.astro)
```astro
<VersionManager type="header" version="default" lang={lang} />
<main>
  <slot />
</main>
<VersionManager type="footer" version="default" lang={lang} />
```

#### 專用 Layout (如 SeaxLayout.astro)
```astro
<VersionManager type="header" version="seax" lang={lang} />
<main>
  <slot />
</main>
<VersionManager type="footer" version="seax" lang={lang} />
```

### 2. 在頁面中指定版本

可以在使用 Layout 時傳遞版本參數：

```astro
---
// 在頁面頂部
const headerVersion = "seachat";
const footerVersion = "seachat";
---

<Layout {headerVersion} {footerVersion} lang={lang}>
  <!-- 頁面內容 -->
</Layout>
```

### 3. 自動版本檢測

版本管理器會根據當前 URL 路徑自動檢測版本：
- `/seax/*` 路徑 → 使用 SeaX 版本
- `/seachat/*` 路徑 → 使用 SeaChat 版本  
- `/seavoice/*` 路徑 → 使用 SeaVoice 版本
- 其他路徑 → 使用 Default 版本

## 已完成的功能

### ✅ 已完成
1. **核心架構**：版本管理器和配置系統
2. **Default 版本**：基本的 Header 和 Footer
3. **SeaChat 版本**：簡化的紫色主題組件
4. **SeaX 版本**：完整功能的藍色主題組件，包括：
   - 電話橫幅
   - 豐富的導航菜單
   - 多語言支持
   - 社交媒體鏈接
   - 詳細的 Footer 區塊（Channels、Solutions、Industries、Company）
   - CTA 橫幅

### 🚧 進行中
1. **SeaVoice 版本**：基礎結構已建立，待完善功能
2. **多語言整合**：基本支持已完成，需要完善翻譯

### 📋 待完成
1. **響應式優化**：確保所有版本在不同螢幕尺寸下正常顯示
2. **互動功能增強**：下拉菜單、手機版菜單等
3. **性能優化**：組件載入優化
4. **測試覆蓋**：確保所有版本組合正常運行

## SeaX 版本特色

SeaX 版本的 Header 和 Footer 提供了最完整的功能：

### Header 特色
- **電話橫幅**：顯示客服電話
- **品牌 Logo**：SeaX 專用 Logo
- **返回主站連結**：便於用戶導航
- **完整導航**：Features、Channels、Solutions、Industries、Pricing
- **Wiki 按鈕**：特殊樣式的梯度按鈕
- **多語言選擇器**：支持 EN、繁中、簡中
- **登入/註冊按鈕**：直接連結到 SeaX 平台

### Footer 特色
- **詳細聯絡資訊**：電話、郵箱、地址
- **社交媒體鏈接**：LinkedIn、YouTube、Twitter、Discord
- **分類導航**：
  - **Channels**: SMS、WhatsApp、Voice 等技術細節
  - **Solutions**: 各種解決方案
  - **Industries**: 行業解決方案
  - **Company**: 公司相關頁面
- **統計數據展示**：每日訊息量、用戶數、正常運行時間
- **CTA 橫幅**：鼓勵用戶註冊或預約 Demo

## 技術細節

### 組件參數
- `lang`: 語言代碼（如 'en', 'zh-TW', 'zh-CN'）
- `version`: 版本名稱（如 'default', 'seax', 'seachat', 'seavoice'）
- `versionConfig`: 版本配置對象（自動傳遞）
- `currentPath`: 當前頁面路徑（用於導航高亮）

### 國際化支持
所有組件都使用 `getTranslationHelpers` 來獲取翻譯：
```astro
const { t } = await getTranslationHelpers(lang);
```

### URL 生成
使用 `getLocalizedPath` 生成本地化 URL：
```astro
const localizedUrl = getLocalizedPath('/seax/features', lang);
```

## 維護指南

### 新增版本
1. 在 `config.ts` 中添加新版本配置
2. 創建對應的 Header 和 Footer 組件
3. 更新版本檢測函數（如需要）
4. 測試新版本在各種場景下的表現

### 修改現有版本
1. 直接編輯對應的組件文件
2. 確保修改不會影響其他版本
3. 測試多語言支持
4. 更新相關文檔

### 調試技巧
1. 檢查控制台是否有組件載入錯誤
2. 確認版本參數正確傳遞
3. 驗證翻譯鍵值是否存在
4. 測試不同語言和版本的組合

## 翻譯鍵值對應

為了確保與現有系統相容，新的 Header 和 Footer 組件使用與 `_old` 目錄中組件相同的翻譯鍵值：

### Header 翻譯鍵值
- `seax.header.navigation.features`
- `seax.header.navigation.channels`
- `seax.header.navigation.solutions`
- `seax.header.navigation.industries`
- `seax.header.navigation.pricing`
- `seax.header.buttons.wiki`
- `seax.header.buttons.signIn`
- `seax.header.buttons.signUp`
- `seax.header.mobile.backToMainSite`

### Footer 翻譯鍵值
- `footer.section.channels`
- `footer.section.solutions`
- `footer.section.industries`
- `footer.company.title`
- `footer.links.channels.*`
- `footer.links.solutions.*`
- `footer.links.industries.*`
- `footer.links.company.*`
- `footer.technical.*`
- `footer.contact.*`
- `footer.stats.*`
- `footer.copyright`
- `footer.legal.*`
- `footer.madeWith.*`
- `footer.cta.*`
- `header.blog`
- `header.pricing`
- `header.compareUs`

## 最佳實踐

1. **保持組件獨立性**：每個版本的組件應該獨立，不依賴其他版本
2. **統一介面**：所有同類組件應該接受相同的參數
3. **語言優先**：優先考慮多語言支持
4. **翻譯鍵值一致性**：確保新組件使用與舊組件相同的翻譯鍵值
5. **響應式設計**：確保所有組件在各種裝置上正常顯示
6. **效能考慮**：避免不必要的重複載入和計算

## 已修復的問題

### ✅ 翻譯鍵值修復 (2024-09-14)
- 修正 SeaX Header 和 Footer 組件的翻譯鍵值，使其與 `_old` 版本一致
- 移除了不存在的翻譯鍵值（如 `seax.header.phoneBanner`）
- 統一使用現有的翻譯系統架構
- 確保多語言支持正常運作

---

*本文檔會隨著系統發展持續更新*

# Seasalt.ai 新網站多語言(i18n)處理指南

## 概述

本專案使用 Astro 框架實現多語言支持，支援 20 種語言，採用靜態生成 + 客戶端語言檢測的方式實現語言路由。

## 支援的語言

```typescript
const supportedLanguages = [
  'en',    // 英語 (默認)
  'es',    // 西班牙語
  'zh-tw', // 繁體中文
  'zh-cn', // 簡體中文
  'ja',    // 日語
  'ko',    // 韓語
  'fr',    // 法語
  'de',    // 德語
  'ar',    // 阿拉伯語
  'fa',    // 波斯語
  'fil',   // 菲律賓語
  'hi',    // 印地語
  'id',    // 印尼語
  'ms',    // 馬來語
  'pl',    // 波蘭語
  'pt',    // 葡萄牙語
  'ru',    // 俄語
  'ta',    // 泰米爾語
  'th',    // 泰語
  'vi'     // 越南語
];
```

## 專案結構

```
src/
├── i18n/
│   ├── helpers.ts              # i18n 核心幫助函數
│   └── locales/               # 翻譯檔案
│       ├── en.json            # 英文翻譯
│       ├── zh-CN.json         # 簡體中文翻譯
│       ├── zh-TW.json         # 繁體中文翻譯
│       └── ...                # 其他語言翻譯
├── pages/
│   ├── index.astro            # 根頁面 (語言檢測與重定向)
│   └── [lang]/
│       └── index.astro        # 動態語言首頁
├── components/
│   ├── Header.astro           # 網站頭部 (含語言切換)
│   ├── Footer.astro           # 網站底部
│   └── LanguageSwitcher.astro # 語言切換組件
└── layouts/
    └── Layout.astro           # 基礎佈局
```

## 核心配置

### 1. Astro 配置 (`astro.config.mjs`)

```javascript
export default defineConfig({
  i18n: {
    defaultLocale: 'en',
    locales: [
      'en', 'es', 'zh-tw', 'zh-cn', 'ja', 'ko', 'fr', 'de', 'ar', 'fa', 
      'fil', 'hi', 'id', 'ms', 'pl', 'pt', 'ru', 'ta', 'th', 'vi'
    ],
    routing: {
      prefixDefaultLocale: true  // 所有語言都有前綴
    }
  }
});
```

### 2. i18n 幫助函數 (`src/i18n/helpers.ts`)

主要功能：
- 動態載入翻譯檔案
- 提供翻譯函數 `t()`
- 語言路徑處理
- 語言檢測

```typescript
// 主要 API
export async function getTranslationHelpers(lang: SupportedLanguage) {
  const translations = await loadTranslations(lang);
  const t = createTranslationFunction(translations);
  
  return {
    t,           // 翻譯函數
    lang,        // 當前語言
    translations,// 原始翻譯數據
    isDefaultLang: lang === defaultLang
  };
}
```

## 如何使用翻譯功能

### 1. 在 Astro 組件中使用

```astro
---
// ComponentExample.astro
import { getTranslationHelpers, type SupportedLanguage } from '../i18n/helpers';

// 從 props 或 params 獲取語言
const lang = Astro.props.lang as SupportedLanguage || 'en';

// 獲取翻譯幫助函數
const { t } = await getTranslationHelpers(lang);

// 使用翻譯
const title = t('hero.title');
const description = t('hero.description');
---

<div>
  <h1>{title}</h1>
  <p>{description}</p>
  
  <!-- 帶參數的翻譯 -->
  <p>{t('footer.copyright', { year: new Date().getFullYear() })}</p>
</div>
```

### 2. 在動態頁面中使用

```astro
---
// src/pages/[lang]/index.astro
import { getTranslationHelpers, type SupportedLanguage } from '../../i18n/helpers';

// 生成所有語言的靜態路徑
export async function getStaticPaths() {
  const supportedLocales = ['en', 'zh-cn', 'ja', /* ... */];
  
  return supportedLocales.map((lang) => ({
    params: { lang }
  }));
}

// 獲取動態語言參數
const { lang } = Astro.params;
const currentLang = (lang as SupportedLanguage) || 'en';

// 獲取翻譯
const { t } = await getTranslationHelpers(currentLang);
---

<Layout title={t('seo.homepage.title')} lang={currentLang}>
  <!-- 頁面內容 -->
</Layout>
```

### 3. 翻譯檔案結構

```json
// src/i18n/locales/en.json
{
  "header": {
    "products": "Products",
    "solutions": "Solutions",
    "login": "Login"
  },
  "hero": {
    "title": "Stop Juggling Apps",
    "description": "Seasalt.ai is the all-in-one contact center...",
    "signUp": "Sign Up"
  },
  "footer": {
    "copyright": "© 2020 - {{year}} Seasalt.ai. All rights reserved.",
    "company": {
      "title": "Company",
      "about": "About Us",
      "contact": "Contact Us"
    }
  }
}
```

## 語言路由系統

### 1. URL 結構

- 根路徑: `/` (重定向到用戶偏好語言)
- 英語: `/en/`
- 簡體中文: `/zh-cn/`
- 繁體中文: `/zh-tw/`
- 其他語言: `/{language-code}/`

### 2. 語言檢測流程

```javascript
// 1. 檢查用戶瀏覽器偏好語言
// 2. 匹配支援的語言列表
// 3. 重定向到對應語言版本
// 4. 預設使用英語

function detectBrowserLanguage() {
  const browserLangs = navigator.languages || [navigator.language || 'en'];
  
  for (const browserLang of browserLangs) {
    const locale = browserLang.toLowerCase();
    
    // 完全匹配
    if (supportedLocales.includes(locale)) {
      return locale;
    }
    
    // 語言代碼匹配
    const langCode = locale.split('-')[0];
    const matchedLocale = supportedLocales.find(supported => 
      supported.startsWith(langCode + '-') || supported === langCode
    );
    
    if (matchedLocale) {
      return matchedLocale;
    }
  }
  
  return 'en'; // 預設
}
```

## 語言切換組件

### LanguageSwitcher.astro

主要功能：
- 顯示當前語言
- 提供語言選擇下拉選單
- 客戶端語言切換

```astro
---
// src/components/LanguageSwitcher.astro
import { getLanguageShortCode, getSupportedLanguages } from '../i18n/helpers';

const currentLang = Astro.props.lang || 'en';
const currentShortCode = getLanguageShortCode(currentLang);
const languages = getSupportedLanguages();
---

<div class="language-switcher">
  <button class="lang-button">
    {currentShortCode}
    <svg><!-- 下拉箭頭 --></svg>
  </button>
  
  <div class="lang-dropdown">
    {languages.map(({ code, name, shortCode }) => (
      <a href={`/${code}/`} class="lang-option">
        <span class="lang-code">{shortCode}</span>
        <span class="lang-name">{name}</span>
      </a>
    ))}
  </div>
</div>
```

## 最佳實踐

### 1. 翻譯鍵命名規範

```typescript
// ✅ 推薦：使用階層式命名
'header.navigation.products'
'hero.title.line1'
'footer.company.about'

// ❌ 避免：過於扁平
'headerProducts'
'heroTitle1'
'footerAbout'
```

### 2. 翻譯檔案組織

```json
{
  "seo": {
    "homepage": {
      "title": "...",
      "description": "..."
    }
  },
  "navigation": {
    "header": { "..." },
    "footer": { "..." }
  },
  "pages": {
    "hero": { "..." },
    "features": { "..." }
  }
}
```

### 3. 參數化翻譯

```typescript
// 翻譯檔案
{
  "welcome": "Welcome, {{username}}!",
  "itemCount": "You have {{count}} items"
}

// 使用方式
t('welcome', { username: 'John' })
t('itemCount', { count: 5 })
```

### 4. 錯誤處理

```typescript
// 翻譯找不到時返回鍵名
function t(key: string): string {
  const result = getNestedValue(translations, key);
  return typeof result === 'string' ? result : key;
}

// 語言檔案載入失敗時回退到英語
async function loadTranslations(lang: SupportedLanguage) {
  try {
    return await import(`./locales/${lang}.json`);
  } catch (error) {
    console.error(`Failed to load translations for ${lang}`);
    if (lang !== 'en') {
      return loadTranslations('en');
    }
    return {};
  }
}
```

## 開發工作流程

### 1. 新增語言

1. 在 `astro.config.mjs` 中添加新語言代碼
2. 在 `src/i18n/helpers.ts` 中更新 `languages` 物件
3. 創建對應的翻譯檔案 `src/i18n/locales/{lang}.json`
4. 更新靜態路徑生成函數

### 2. 新增翻譯鍵

1. 在所有語言的 JSON 檔案中添加相同的鍵
2. 確保翻譯內容準確且符合上下文
3. 測試翻譯在所有支援語言中的顯示效果

### 3. 測試多語言功能

```bash
# 建置專案
npm run build

# 啟動開發服務器
npm run dev

# 測試所有語言路徑
# http://localhost:4321/en/
# http://localhost:4321/zh-cn/
# http://localhost:4321/ja/
```

## 常見問題解決

### 1. 翻譯鍵找不到

**問題**：頁面顯示翻譯鍵而不是翻譯內容

**解決方案**：
- 檢查翻譯檔案中是否存在該鍵
- 確認鍵名拼寫正確
- 驗證 JSON 檔案格式正確

### 2. 語言切換不生效

**問題**：點擊語言切換按鈕沒有反應

**解決方案**：
- 檢查 JavaScript 事件綁定
- 確認目標語言路徑存在
- 驗證路由配置正確

### 3. 建置錯誤

**問題**：`npm run build` 失敗

**解決方案**：
- 檢查所有翻譯檔案是否為有效的 JSON
- 確認 `getStaticPaths` 函數返回正確的路徑
- 檢查 import 路徑是否正確

## 效能考量

### 1. 翻譯檔案載入

- 使用動態 import 按需載入
- 實現翻譯緩存避免重複載入
- 考慮檔案分割減少初始載入大小

### 2. 靜態生成優化

- 所有語言頁面在建置時預先生成
- 客戶端不需要額外的 API 請求
- SEO 友好的 URL 結構

### 3. 客戶端語言檢測

- 輕量級 JavaScript 實現語言檢測
- 快速重定向不影響用戶體驗
- 支援瀏覽器偏好語言自動選擇

---

## 總結

本 i18n 系統提供了完整的多語言支援，包括：

- ✅ **20 種語言支援**：涵蓋主要市場
- ✅ **靜態生成**：優秀的 SEO 和效能
- ✅ **客戶端語言檢測**：自動選擇用戶偏好語言
- ✅ **類型安全**：TypeScript 支援
- ✅ **開發友好**：清晰的 API 和錯誤處理
- ✅ **可擴展性**：易於添加新語言和翻譯

遵循本指南，開發者可以高效地維護和擴展多語言功能。

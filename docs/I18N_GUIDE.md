# Seasalt.ai 新網站多語言(i18n)處理指南

## 概述

本專案使用 Astro 框架實現多語言支持，支援 20 種語言，採用靜態生成 + 客戶端語言檢測的方式實現語言路由。

**重要更新**：現已統一所有 React 組件的 i18n 系統，移除 react-i18next 依賴，改用自訂的 `useTranslation` Hook。

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
│   ├── helpers.ts              # i18n 核心幫助函數 (包含統一的 React Hook)
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
│   ├── LanguageSwitcher.astro # 語言切換組件 (Astro 版本)
│   └── react/                 # React 組件
│       ├── LanguageSwitcher.tsx  # 語言切換組件 (React 版本)
│       └── ...                   # 其他 React 組件
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
- **新增**：統一的 React `useTranslation` Hook

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

// React Hook
export function useTranslation(lang: SupportedLanguage) {
  const [t, setT] = useState<TranslationFunction | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  
  // ... Hook 實作
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

### 3. 在 React 組件中使用 (統一 Hook)

**重要**：所有 React 組件已改用統一的 `useTranslation` Hook，不再使用 react-i18next。

```typescript
import { useTranslation, type SupportedLanguage } from '../i18n/helpers';

interface ComponentProps {
  lang: SupportedLanguage;
}

const MyComponent = ({ lang }: ComponentProps) => {
  const { t, isLoading, error } = useTranslation(lang);

  // 處理載入狀態
  if (isLoading) {
    return (
      <div className="flex justify-center items-center p-4">
        <div className="text-gray-500">Loading translations...</div>
      </div>
    );
  }

  // 處理錯誤
  if (error) {
    console.error('Translation loading error:', error);
    return (
      <div className="text-red-500 p-4">
        Error loading translations
      </div>
    );
  }

  return (
    <div>
      {/* 使用可選鏈和預設值 */}
      <h1>{t?.('component.title') || 'Default Title'}</h1>
      <p>{t?.('component.description') || 'Default description'}</p>
      
      {/* 帶參數的翻譯 */}
      <p>{t?.('welcome.message', { name: 'User' }) || 'Welcome!'}</p>
    </div>
  );
};
```

### Hook 返回值

- `t`: 翻譯函數，支援 `t('key', { params })` 語法
- `isLoading`: 布林值，表示翻譯是否正在載入
- `error`: 錯誤物件，翻譯載入失敗時設定

### **最佳實踐：預設值和錯誤處理**

**始終使用可選鏈和預設值**，以防翻譯鍵缺失：

```typescript
// ✅ 正確 - 使用可選鏈和預設值
{t?.('missing.key') || 'Default Text'}
{t?.('button.submit') || 'Submit'}

// ❌ 錯誤 - 沒有預設值，可能導致 undefined
{t('missing.key')}
{t?.('missing.key')}

// ✅ 更完整的錯誤處理
const getTranslation = (key: string, fallback: string) => {
  return t?.(key) || fallback;
};
```

### 4. 翻譯檔案結構

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

### LanguageSwitcher.astro (Astro 版本)

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

### LanguageSwitcher.tsx (React 版本)

**已升級使用統一 Hook**：

```typescript
import React, { useState, useRef, useEffect } from 'react';
import { useTranslation, getSupportedLanguages, getLocalizedPath, type SupportedLanguage } from '../i18n/helpers';

interface LanguageSwitcherProps {
  lang: SupportedLanguage;
  currentPath: string;
  className?: string;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ 
  lang, 
  currentPath, 
  className = '' 
}) => {
  const { t, isLoading } = useTranslation(lang);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const languages = getSupportedLanguages();
  const currentLang = languages.find(l => l.code === lang);

  // 載入狀態處理
  if (isLoading) {
    return (
      <div className="animate-pulse bg-gray-200 h-10 w-16 rounded"></div>
    );
  }

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span className="font-bold text-xs uppercase">
          {currentLang?.shortCode || 'EN'}
        </span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200">
          <div className="py-1" role="menu">
            {languages.map((language) => {
              const newPath = getLocalizedPath(currentPath, language.code);
              const isActive = language.code === lang;
              
              return (
                <a
                  key={language.code}
                  href={newPath}
                  className={`block px-4 py-2 text-sm hover:bg-gray-100 ${
                    isActive ? 'bg-blue-50 text-blue-700 font-medium' : 'text-gray-700'
                  }`}
                  role="menuitem"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="flex items-center justify-between">
                    <span>{language.name}</span>
                    <span className="text-xs font-mono text-gray-500">
                      {language.shortCode}
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
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

### 4. React 組件錯誤處理最佳實踐

```typescript
// ✅ 完整的錯誤處理和載入狀態
const MyComponent = ({ lang }: { lang: SupportedLanguage }) => {
  const { t, isLoading, error } = useTranslation(lang);

  if (isLoading) {
    return <ComponentSkeleton />; // 使用骨架屏幕
  }

  if (error) {
    console.error('Translation error:', error);
    // 優雅降級，顯示英文內容
    return <FallbackComponent />;
  }

  return (
    <div>
      {/* 始終使用可選鏈和預設值 */}
      <h1>{t?.('title') || 'Default Title'}</h1>
      <p>{t?.('description') || 'Default description'}</p>
    </div>
  );
};
```

### 5. 翻譯檔案命名和載入

**重要**：翻譯檔案命名規則需要特別注意大小寫：

```typescript
// 檔案映射
const getTranslationFileName = (lang: string): string => {
  switch (lang) {
    case 'zh-tw': return 'zh-TW.json';  // 注意大寫
    case 'zh-cn': return 'zh-CN.json';  // 注意大寫
    default: return `${lang}.json`;     // 其他使用小寫
  }
};
```

### 6. 錯誤處理進階技巧

```typescript
// 翻譯找不到時返回鍵名
function t(key: string): string {
  const result = getNestedValue(translations, key);
  return typeof result === 'string' ? result : key;
}

// 語言檔案載入失敗時回退到英語
async function loadTranslations(lang: SupportedLanguage) {
  try {
    return await import(`./locales/${getTranslationFileName(lang)}`);
  } catch (error) {
    console.error(`Failed to load translations for ${lang}`);
    if (lang !== 'en') {
      return loadTranslations('en');
    }
    return {};
  }
}
```

## React 組件遷移清單

**已完成的組件**（使用統一 Hook）：
- ✅ `LanguageSwitcher.tsx` - 語言切換器
- ✅ `PhoneBanner.tsx` - 電話橫幅
- ✅ `ContactSalesForm.tsx` - 聯絡銷售表單  
- ✅ `CompanyNewsletter.tsx` - 公司通訊
- ✅ `PricingFAQ.tsx` - 定價 FAQ
- ✅ `ScaleComparison.tsx` - 規模比較
- ✅ `MassCommunicationFlow.tsx` - 大量通訊流程
- ✅ `RealTimeDashboard.tsx` - 即時儀錶板

**遷移完成的統計**：
- 移除所有 `react-i18next` 相關 imports
- 統一使用 `useTranslation` Hook
- 添加載入狀態和錯誤處理
- 使用可選鏈和預設值防護
- 保持原有功能和樣式不變

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

### 3. 新增 React 組件的 i18n 支援

```typescript
// 1. 導入統一 Hook
import { useTranslation, type SupportedLanguage } from '../i18n/helpers';

// 2. 定義組件 Props
interface ComponentProps {
  lang: SupportedLanguage;
  // ... 其他 props
}

// 3. 使用 Hook 和錯誤處理
const Component = ({ lang, ...props }: ComponentProps) => {
  const { t, isLoading, error } = useTranslation(lang);
  
  if (isLoading) return <LoadingState />;
  if (error) return <ErrorState />;
  
  return (
    <div>
      {/* 4. 使用翻譯，始終添加預設值 */}
      <h1>{t?.('component.title') || 'Default Title'}</h1>
    </div>
  );
};
```

### 4. 測試多語言功能

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
- 檢查檔案命名（特別是 `zh-TW.json` 和 `zh-CN.json` 的大小寫）

### 2. React 組件語言切換不生效

**問題**：組件內容不會隨語言切換更新

**解決方案**：
- 確保組件接收正確的 `lang` prop
- 檢查 `useTranslation` Hook 的使用
- 驗證翻譯鍵是否在目標語言檔案中存在

### 3. 建置錯誤

**問題**：`npm run build` 失敗

**解決方案**：
- 檢查所有翻譯檔案是否為有效的 JSON
- 確認 `getStaticPaths` 函數返回正確的路徑
- 檢查 import 路徑是否正確
- 確保沒有遺漏的 react-i18next 引用

### 4. Hook 載入問題

**問題**：`useTranslation` Hook 一直處於載入狀態

**解決方案**：
- 檢查網路請求是否成功
- 確認翻譯檔案路徑正確
- 查看瀏覽器控制台的錯誤訊息
- 驗證 `lang` 參數是否為有效的 `SupportedLanguage`

## 效能考量

### 1. 翻譯檔案載入

- ✅ 使用動態 import 按需載入
- ✅ 實現翻譯緩存避免重複載入
- ✅ 考慮檔案分割減少初始載入大小
- ✅ React Hook 實現了載入狀態管理

### 2. 靜態生成優化

- ✅ 所有語言頁面在建置時預先生成
- ✅ 客戶端不需要額外的 API 請求
- ✅ SEO 友好的 URL 結構

### 3. 客戶端語言檢測

- ✅ 輕量級 JavaScript 實現語言檢測
- ✅ 快速重定向不影響用戶體驗
- ✅ 支援瀏覽器偏好語言自動選擇

### 4. React 組件效能

- ✅ 使用 `useState` 和 `useEffect` 實現高效的狀態管理
- ✅ 避免不必要的重新渲染
- ✅ 載入狀態提供良好的用戶體驗

## 技術債務和改進

### 已解決的問題

- ✅ **統一 i18n 系統**：所有 React 組件現在使用統一的 `useTranslation` Hook
- ✅ **移除 react-i18next**：完全移除 react-i18next 依賴，避免衝突
- ✅ **錯誤處理**：添加完整的載入狀態和錯誤處理
- ✅ **類型安全**：完整的 TypeScript 類型支援
- ✅ **預設值保護**：所有翻譯調用都使用預設值

### 潛在改進

- 🔄 **翻譯檔案分割**：考慮按頁面或功能分割大型翻譯檔案
- 🔄 **翻譯工具**：整合翻譯管理工具（如 i18next-scanner）
- 🔄 **A/B 測試**：為不同語言版本添加 A/B 測試支援
- 🔄 **自動化測試**：添加 i18n 相關的自動化測試

---

## 總結

本 i18n 系統提供了完整的多語言支援，包括：

- ✅ **20 種語言支援**：涵蓋主要市場
- ✅ **統一的開發體驗**：Astro 和 React 組件使用一致的 API
- ✅ **靜態生成**：優秀的 SEO 和效能
- ✅ **客戶端語言檢測**：自動選擇用戶偏好語言
- ✅ **類型安全**：完整的 TypeScript 支援
- ✅ **開發友好**：清晰的 API 和完整的錯誤處理
- ✅ **可擴展性**：易於添加新語言和翻譯
- ✅ **React 組件統一**：所有 React 組件使用統一的 Hook
- ✅ **錯誤復原**：載入失敗時優雅降級
- ✅ **效能優化**：按需載入和緩存機制

遵循本指南，開發者可以高效地維護和擴展多語言功能，同時確保系統的穩定性和一致性。

### 開發環境警告

```typescript
// 開發環境下，缺失的翻譯鍵會在 console 顯示警告：
🌐 Missing translation key: "missing.key" in locale "zh-tw"
```

### 翻譯載入失敗

```typescript
// 載入失敗時自動回退到英文
try {
  const translations = await import(`./locales/${langKey}.json`);
} catch (error) {
  console.error(`Failed to load translations for ${lang}:`, error);
  // 回退到英文
  if (lang !== 'en') {
    return loadTranslations('en');
  }
}
```

## ✅ 最佳實踐

### 1. 組件設計

```typescript
// ✅ 正確 - 接受 lang 參數
interface ComponentProps {
  lang: SupportedLanguage;
  // 其他 props
}

// ❌ 錯誤 - 不接受 lang 參數
interface ComponentProps {
  title: string;
}
```

### 2. 翻譯鍵命名

```json
{
  "page.section.element": "Translation",
  "component.action.button": "Click me",
  "form.field.email.label": "Email Address"
}
```

### 3. 載入狀態處理

```typescript
const MyComponent = ({ lang }: Props) => {
  const { t, isLoading } = useTranslation(lang);

  if (isLoading) {
    return (
      <div className="animate-pulse">
        <div className="h-6 bg-gray-200 rounded mb-2"></div>
        <div className="h-4 bg-gray-200 rounded"></div>
      </div>
    );
  }

  // 正常渲染
};
```

### 4. 型別安全

```typescript
// 使用 SupportedLanguage 型別
import { type SupportedLanguage } from '../i18n/helpers';

const isValidLanguage = (lang: string): lang is SupportedLanguage => {
  return ['en', 'zh-tw', /* ... */].includes(lang);
};
```

## 🔄 遷移指南

如果你有使用舊的 react-i18next 系統的組件：

### 舊的方式 (react-i18next)
```typescript
import { useTranslation } from 'react-i18next';

const Component = () => {
  const { t, i18n } = useTranslation();
  return <div>{t('key')}</div>;
};
```

### 新的方式 (統一系統)
```typescript
import { useTranslation, type SupportedLanguage } from '../i18n/helpers';

interface Props {
  lang: SupportedLanguage;
}

const Component = ({ lang }: Props) => {
  const { t, isLoading } = useTranslation(lang);
  
  if (isLoading) return <div>Loading...</div>;
  
  return <div>{t?.('key') || 'Default'}</div>;
};
```

## 🚀 SSR 翻譯解決方案

### 問題背景

在 Server-Side Rendering (SSR) 環境下，React 組件中的 `useTranslation` hook 可能會返回 `null`，導致以下錯誤：

```
Error: useTranslation can only be used in React components
```

這個問題主要發生在 Astro 的 SSR 過程中，因為 React hooks 在服務端渲染時無法正確初始化。

### 解決方案：翻譯 Props 模式

為了解決 SSR 翻譯問題，我們採用「翻譯 Props + Hook 回退」的混合模式：

#### 1. 組件接口設計

```typescript
interface ComponentProps {
  lang: SupportedLanguage;
  translations?: any;  // 可選的翻譯物件
  // ... 其他 props
}
```

#### 2. 條件式 Hook 使用

```typescript
const MyComponent = ({ lang, translations }: ComponentProps) => {
  // 🔑 關鍵：只在沒有 translations prop 時才使用 hook
  const { t: hookT, isLoading } = translations ? 
    { t: null, isLoading: false } : 
    useTranslation(lang);
    
  // 統一的翻譯獲取函數
  const getText = (key: string, fallback: string = key): string => {
    if (translations) {
      // 從 props 獲取翻譯
      const keys = key.split('.');
      let result: any = translations;
      
      for (const k of keys) {
        if (result && typeof result === 'object' && k in result) {
          result = result[k];
        } else {
          console.warn(`Missing translation key: "${key}" in locale "${lang}"`);
          return fallback;
        }
      }
      
      return typeof result === 'string' ? result : fallback;
    }
    
    // 回退到 hook 翻譯
    return hookT ? hookT(key) : fallback;
  };
  
  // 處理載入狀態（只有使用 hook 時才會有）
  if (isLoading) {
    return <LoadingSkeleton />;
  }
  
  return (
    <div>
      {/* ✅ 使用 getText 函數，始終包含 fallback */}
      <h1>{getText('component.title', 'Default Title')}</h1>
      <p>{getText('component.description', 'Default description')}</p>
    </div>
  );
};
```

#### 3. Astro 頁面中的使用

```astro
---
// src/pages/[lang]/example.astro
import { getTranslationHelpers } from '../../i18n/helpers';
import MyComponent from '../../components/react/MyComponent';

const { lang } = Astro.params;
const { t, translations } = await getTranslationHelpers(lang);
---

<!-- ✅ 傳遞完整的翻譯物件給 React 組件 -->
<MyComponent 
  client:only="react" 
  lang={lang} 
  translations={translations}
/>
```

### 最佳實踐模式

#### 1. 翻譯獲取函數的標準實作

```typescript
const getText = (key: string, fallback: string = key): string => {
  if (translations) {
    // SSR 模式：從 props 獲取
    const keys = key.split('.');
    let result: any = translations;
    
    for (const k of keys) {
      if (result && typeof result === 'object' && k in result) {
        result = result[k];
      } else {
        console.warn(`Missing translation key: "${key}" in locale "${lang}"`);
        return fallback;
      }
    }
    
    return typeof result === 'string' ? result : fallback;
  }
  
  // CSR 模式：使用 hook
  return hookT ? hookT(key) : fallback;
};
```

#### 2. 載入狀態處理

```typescript
// 只有在使用 hook 時才會有載入狀態
if (isLoading) {
  return (
    <div className="animate-pulse">
      <div className="h-6 bg-gray-200 rounded mb-2"></div>
      <div className="h-4 bg-gray-200 rounded"></div>
    </div>
  );
}
```

#### 3. 錯誤處理和 Fallback

```typescript
// ✅ 始終提供有意義的 fallback 值
{getText('hero.title', 'Welcome to Our Platform')}
{getText('button.submit', 'Submit')}
{getText('error.message', 'Something went wrong')}

// ❌ 避免空白 fallback
{getText('some.key', '')}  // 不推薦
{getText('some.key')}     // 會顯示 key 名稱
```

### 已修復的組件清單

以下組件已經實作了 SSR 翻譯解決方案：

- ✅ **MassCommunicationFlow** - 大量通訊流程動畫
- ✅ **ScaleComparison** - 規模比較動畫
- ✅ **RealTimeDashboard** - 即時儀錶板
- ✅ **Hero** - 首頁主視覺（透過 translations_obj prop）
- ✅ **CompanyNewsletter** - 公司通訊組件
- ✅ **LanguageSwitcher** - 語言切換器
- ✅ **PricingFAQ** - 定價常見問題
- ✅ **PhoneBanner** - 電話橫幅

### 遷移指南：修復 SSR 翻譯問題

如果你遇到 "useTranslation can only be used in React components" 錯誤，請按以下步驟修復：

#### 步驟 1：更新組件接口

```typescript
// 添加可選的 translations prop
interface ComponentProps {
  lang: SupportedLanguage;
  translations?: any;  // 新增這行
  // ... 其他 props
}
```

#### 步驟 2：條件式使用 Hook

```typescript
// 修改前
const { t, isLoading } = useTranslation(lang);

// 修改後
const { t: hookT, isLoading } = translations ? 
  { t: null, isLoading: false } : 
  useTranslation(lang);
```

#### 步驟 3：實作 getText 函數

```typescript
const getText = (key: string, fallback: string = key): string => {
  if (translations) {
    const keys = key.split('.');
    let result: any = translations;
    
    for (const k of keys) {
      if (result && typeof result === 'object' && k in result) {
        result = result[k];
      } else {
        console.warn(`Missing translation key: "${key}" in locale "${lang}"`);
        return fallback;
      }
    }
    
    return typeof result === 'string' ? result : fallback;
  }
  
  return hookT ? hookT(key) : fallback;
};
```

#### 步驟 4：更新所有翻譯調用

```typescript
// 修改前
{t?.('component.title')}
{t?.('component.description')}

// 修改後
{getText('component.title', 'Default Title')}
{getText('component.description', 'Default Description')}
```

#### 步驟 5：在 Astro 頁面中傳遞翻譯

```astro
<!-- 確保組件接收到 translations prop -->
<MyComponent 
  client:only="react" 
  lang={lang} 
  translations={translations}
/>
```

### 技術原理

#### SSR vs CSR 翻譯處理

| 模式 | 翻譯來源 | Hook 使用 | 載入狀態 |
|------|----------|-----------|----------|
| **SSR** | Props (translations) | ❌ 不使用 | ❌ 無載入狀態 |
| **CSR** | Hook (useTranslation) | ✅ 使用 | ✅ 有載入狀態 |

#### 相容性保證

- ✅ **向後相容**：未傳入 translations 的組件仍使用 hook
- ✅ **SSR 相容**：傳入 translations 的組件避免 hook 調用
- ✅ **類型安全**：完整的 TypeScript 類型支援
- ✅ **錯誤處理**：優雅的 fallback 機制

### 除錯建議

#### 1. 檢查 Console 警告

```typescript
// 開發環境會顯示缺失的翻譯鍵
console.warn('Missing translation key: "some.key" in locale "zh-tw"');
```

#### 2. 驗證 Props 傳遞

```javascript
// 在組件中添加除錯日誌
console.log('Translations prop:', translations);
console.log('Using hook:', !translations);
```

#### 3. 檢查翻譯檔案

```bash
# 確保翻譯檔案存在且格式正確
ls src/i18n/locales/
cat src/i18n/locales/en.json | jq  # 檢查 JSON 格式
```

### 效能優化

#### 1. 避免重複翻譯載入

```astro
---
// 在頁面層級載入一次翻譯
const { translations } = await getTranslationHelpers(lang);
---

<!-- 所有組件共享同一個翻譯物件 -->
<ComponentA translations={translations} />
<ComponentB translations={translations} />
<ComponentC translations={translations} />
```

#### 2. 翻譯物件快取

```typescript
// helpers.ts 中已實作翻譯快取
const translationCache = new Map();

export async function loadTranslations(lang: SupportedLanguage) {
  if (translationCache.has(lang)) {
    return translationCache.get(lang);
  }
  // ... 載入邏輯
}
```

## 🧪 測試

### 測試翻譯功能

```typescript
import { getTranslationHelpers } from '../i18n/helpers';

describe('Translations', () => {
  test('should load English translations', async () => {
    const { t } = await getTranslationHelpers('en');
    expect(t('header.products')).toBe('Products');
  });

  test('should handle missing keys', async () => {
    const { t } = await getTranslationHelpers('en');
    expect(t('missing.key')).toBe('missing.key');
  });
});
```

## 📞 需要幫助？

- 檢查 `src/i18n/helpers.ts` 中的核心功能
- 查看現有組件的實作範例
- 確保翻譯檔案格式正確
- 使用開發者工具檢查 console 警告

---

**記住**：統一使用我們的自訂 i18n 系統，這樣可以確保 Astro 和 React 組件的一致性！
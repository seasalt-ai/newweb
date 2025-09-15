# Header/Footer 版本切換機制

這是一個強大的組件版本管理系統，允許根據不同的產品頁面自動或手動切換不同版本的 Header 和 Footer 組件。

## 🚀 功能特色

- **自動版本檢測**: 根據 URL 路徑自動選擇合適的 Header/Footer 版本
- **手動版本控制**: 在頁面層級手動指定使用的版本
- **類型安全**: 完整的 TypeScript 支援
- **統一管理**: 集中管理所有版本的配置和樣式

## 📁 專案結構

```
src/components/versions/
├── config.ts              # 版本配置文件
├── VersionManager.astro    # 版本管理器（核心組件）
├── headers/               # Header 組件版本
│   ├── DefaultHeader.astro
│   ├── SeaChatHeader.astro
│   ├── SeaXHeader.astro
│   └── SeaVoiceHeader.astro
└── footers/               # Footer 組件版本
    ├── DefaultFooter.astro
    ├── SeaChatFooter.astro
    ├── SeaXFooter.astro
    └── SeaVoiceFooter.astro
```

## 🎯 支援的版本

| 版本 | 顯示名稱 | 描述 | 主色調 | Logo |
|------|----------|------|--------|------|
| `default` | Seasalt.ai Main | 預設主站版本 | 藍色 (#3B82F6) | seasalt-ai-logo.png |
| `seachat` | SeaChat | SeaChat 產品專屬版本 | 青色 (#10B981) | seachat-logo.png |
| `seax` | SeaX | SeaX 產品專屬版本 | 紫色 (#8B5CF6) | seax-logo.png |
| `seavoice` | SeaVoice | SeaVoice 產品專屬版本 | 琥珀色 (#F59E0B) | seavoice-logo.png |

## 🔧 基本使用

### 1. 自動版本檢測（推薦）

在 Layout 中使用 VersionManager，系統會根據 URL 路徑自動選擇版本：

```astro
---
import VersionManager from '../components/versions/VersionManager.astro';
---

<html>
  <body>
    <VersionManager type="header" lang={lang} currentPath={Astro.url.pathname} />
    <main>
      <slot />
    </main>
    <VersionManager type="footer" lang={lang} currentPath={Astro.url.pathname} />
  </body>
</html>
```

**自動檢測規則:**
- `/zh-cn/seachat/...` → `seachat` 版本
- `/en/seax/...` → `seax` 版本  
- `/ja/seavoice/...` → `seavoice` 版本
- 其他路徑 → `default` 版本

### 2. 手動指定版本

如果需要在特定頁面使用特定版本，可以明確指定：

```astro
---
import VersionManager from '../components/versions/VersionManager.astro';
---

<!-- 強制使用 SeaChat 版本的 Header 和 SeaX 版本的 Footer -->
<VersionManager type="header" version="seachat" lang={lang} />
<VersionManager type="footer" version="seax" lang={lang} />
```

### 3. 在 Layout 中使用

更新現有的 Layout.astro：

```astro
---
import VersionManager from '../components/versions/VersionManager.astro';

export interface Props {
  title: string;
  lang?: string;
  // 新增版本控制參數
  headerVersion?: 'default' | 'seachat' | 'seax' | 'seavoice';
  footerVersion?: 'default' | 'seachat' | 'seax' | 'seavoice';
}

const { 
  title,
  lang = 'en',
  headerVersion,  // 可選，不指定則自動檢測
  footerVersion   // 可選，不指定則自動檢測
} = Astro.props;
---

<html lang={lang}>
  <body>
    <VersionManager 
      type="header" 
      version={headerVersion} 
      lang={lang} 
      currentPath={Astro.url.pathname} 
    />
    
    <main>
      <slot />
    </main>
    
    <VersionManager 
      type="footer" 
      version={footerVersion} 
      lang={lang} 
      currentPath={Astro.url.pathname} 
    />
  </body>
</html>
```

### 4. 頁面中指定版本

在具體頁面中可以這樣使用：

```astro
---
import Layout from '../layouts/Layout.astro';
---

<!-- 使用預設的自動檢測 -->
<Layout title="首頁" lang="zh-cn">
  <h1>歡迎來到 Seasalt.ai</h1>
</Layout>

<!-- 或者強制指定版本 -->
<Layout 
  title="SeaChat 產品頁" 
  lang="en"
  headerVersion="seachat"
  footerVersion="seachat"
>
  <h1>Welcome to SeaChat</h1>
</Layout>
```


## 🎨 自訂版本

### 1. 新增新版本

在 `config.ts` 中添加新版本：

```typescript
export const VERSION_CONFIGS: Record<ComponentVersion, VersionConfig> = {
  // ... 現有版本
  newproduct: {
    name: 'newproduct',
    displayName: 'New Product',
    description: 'New product specific header and footer',
    logo: '/newproduct-logo.png',
    primaryColor: '#FF6B6B'
  }
};
```

### 2. 建立對應的組件文件

```bash
# 建立新的 Header 和 Footer 組件
touch src/components/versions/headers/NewProductHeader.astro
touch src/components/versions/footers/NewProductFooter.astro
```

### 3. 更新 VersionManager

在 `VersionManager.astro` 中添加新版本的導入：

```astro
case 'newproduct':
  Component = (await import('./headers/NewProductHeader.astro')).default;
  break;
```

## 🎯 最佳實務

### 1. 版本命名規範
- 使用小寫字母和連字符
- 保持簡短且具描述性
- 例如：`seachat`, `seax`, `seavoice`

### 2. 組件開發規範

每個版本的 Header/Footer 應該：

```astro
---
import { getTranslationHelpers } from '../../../i18n/helpers';
import type { VersionConfig } from '../config';

export interface Props {
  currentPath?: string;
  lang?: string;
  versionConfig?: VersionConfig;
}

const { currentPath = '/', lang = 'en', versionConfig } = Astro.props;
const { t } = await getTranslationHelpers(lang);
---

<header class="bg-white" style={`--primary-color: ${versionConfig?.primaryColor}`}>
  <!-- 使用 versionConfig.logo 作為 logo 來源 -->
  <img src={versionConfig?.logo || '/default-logo.png'} alt="Logo" />
  
  <!-- 根據版本調整導航結構 -->
</header>
```

### 3. 多語言支援

確保每個版本都支援完整的多語言：

```astro
const navigation = [
  { 
    name: t('seachat.header.features', 'Features'), 
    href: `/${lang}/seachat/features` 
  },
  // ...
];
```

### 4. 樣式一致性

使用 CSS 變量來保持樣式一致性：

```astro
<header style={`--primary-color: ${versionConfig?.primaryColor || '#3B82F6'}`}>
  <nav class="text-gray-700 hover:text-[var(--primary-color)]">
```

## 🐛 疑難排解

### 1. 版本沒有正確切換

**問題**: URL 路徑正確但顯示錯誤的版本

**解決方案**:
1. 檢查 `detectVersionFromPath` 函數的路徑匹配規則
2. 確認 URL 格式是否符合預期（如 `/zh-cn/seachat/` 而不是 `/seachat/zh-cn/`）

### 2. 組件無法載入

**問題**: `Component is undefined` 錯誤

**解決方案**:
1. 確認組件文件路徑正確
2. 檢查組件文件是否存在且語法正確
3. 驗證 VersionManager 中的 import 路徑

### 3. 翻譯缺失

**問題**: 某些版本的翻譯顯示為翻譯鍵而不是翻譯內容

**解決方案**:
1. 檢查對應語言的翻譯文件是否包含所需的翻譯鍵
2. 確認翻譯鍵的命名空間是否正確（如 `seachat.header.features`）


## 📝 更新日誌

### v1.0.0 (2025-09-14)
- ✨ 新增基礎版本切換機制
- ✨ 支援 default, seachat, seax, seavoice 四個版本
- ✨ 自動版本檢測功能
- ✨ 開發環境版本切換工具
- ✨ 完整的 TypeScript 類型支援
- ✨ 多語言集成

## 🤝 貢獻指南

1. 新增版本時請更新 `config.ts` 和對應的組件文件
2. 確保所有新版本都支援現有的所有語言
3. 更新此文檔說明新版本的使用方法
4. 測試自動檢測和手動指定都能正常工作

---

## 📞 技術支援

如有問題請聯繫開發團隊或在專案中建立 Issue。

**快速參考**:
- 配置文件: `src/components/versions/config.ts`
- 核心組件: `src/components/versions/VersionManager.astro`
- 版本組件: `src/components/versions/{headers|footers}/`

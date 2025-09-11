# 🔍 SEO 完整實作指南 - Seasalt.ai

> **更新日期**: 2025-01-11  
> **用途**: SEO 組件使用、JSON-LD 實作、最佳實務的完整指南  
> **狀態**: 生產就緒，已在 560 個頁面中成功應用

---

## 📊 SEO 系統概覽

### 🎯 核心特色
- ✅ **完整的 JSON-LD 結構化資料** - 6 種 Schema 類型
- ✅ **多語言 SEO 支援** - 20 種語言的 hreflang 標籤
- ✅ **社交媒體優化** - Open Graph + Twitter Cards
- ✅ **效能優化** - 靜態生成，極快載入速度
- ✅ **企業級功能** - 完整的分析追蹤和驗證

### 📈 SEO 成果
- **560 個頁面** 自動生成完整 SEO 標籤
- **20 種語言** 版本的 hreflang 連結
- **JSON-LD 結構化資料** 在所有頁面正確生成
- **Core Web Vitals** 大幅改善（靜態 HTML）

---

## 🏗️ 系統架構

### SEO 組件架構
```
src/
├── components/
│   └── SEO.astro              # 主要 SEO 組件
├── layouts/
│   └── Layout.astro           # 整合 SEO 組件的版型
└── pages/
    └── [lang]/                # 多語言頁面結構
        ├── index.astro        # 首頁
        ├── pricing.astro      # 定價頁面（含 FAQ Schema）
        └── company.astro      # 公司頁面
```

### 支援的 JSON-LD Schema 類型

1. **Organization Schema** - 公司組織資訊（全站共通）
2. **WebSite Schema** - 網站整體資訊（搜尋框功能）
3. **WebPage Schema** - 當前頁面資訊（每頁生成）
4. **內容專用 Schema**:
   - `Product` - 產品頁面
   - `SoftwareApplication` - 軟體產品
   - `Article` - 部落格文章
5. **FAQPage Schema** - 常見問題（如定價頁面）
6. **BreadcrumbList Schema** - 麵包屑導航

每個 Schema 都有唯一的 `@id` 識別碼，便於 Google Search Console 識別和連結。

---

## 🚀 快速開始

### 1. 基本頁面 SEO

最簡單的實作方式：

```astro
---
// src/pages/[lang]/example.astro
import Layout from '../../layouts/Layout.astro';
import { getTranslationHelpers, type SupportedLanguage } from '../../i18n/helpers';

const { lang } = Astro.params;
const currentLang = (lang as SupportedLanguage) || 'en';
const { t } = await getTranslationHelpers(currentLang);

const title = t('example.seo.title') || 'Example Page - Seasalt.ai';
const description = t('example.seo.description') || 'Example page description';
---

<Layout title={title} description={description} lang={currentLang}>
  <!-- 頁面內容 -->
</Layout>
```

**自動生成**:
- ✅ Organization Schema
- ✅ WebSite Schema  
- ✅ WebPage Schema
- ✅ 完整 Meta Tags (title, description, OG, Twitter)
- ✅ Hreflang 連結 (20 種語言)
- ✅ Canonical URL

---

## 📋 頁面類型實作範例

### 2. 產品頁面 SEO

```astro
<Layout 
  title={title} 
  description={description} 
  lang={currentLang}
  type="product"
  keywords="AI chatbot, customer service, automation"
>
  <!-- 頁面內容 -->
</Layout>
```

**額外生成**: ✅ Product Schema（包含品牌、製造商、價格等）

### 3. 軟體應用頁面

```astro
<Layout 
  title={title} 
  description={description} 
  lang={currentLang}
  type="software"
  keywords="SeaChat, AI assistant, business application"
>
  <!-- 頁面內容 -->
</Layout>
```

**額外生成**: ✅ SoftwareApplication Schema（應用類別、作業系統等）

### 4. 部落格文章頁面

```astro
---
const articleData = {
  publishedTime: '2024-01-15T10:00:00Z',
  modifiedTime: '2024-01-20T14:30:00Z',
  author: 'Seasalt.ai Team',
  section: 'AI Technology',
  tags: ['AI', 'Customer Service', 'Automation']
};
---

<Layout 
  title={title} 
  description={description} 
  lang={currentLang}
  type="article"
  article={articleData}
  keywords="AI technology, customer service innovation"
>
  <!-- 文章內容 -->
</Layout>
```

**額外生成**: ✅ Article Schema（發布時間、作者、標籤等）

---

## ❓ FAQ Schema 實作

### 完整 FAQ 範例（如定價頁面）

```astro
---
// 準備 FAQ 資料
const faqData = [
  {
    question: t('pricing.faq.1.question'),
    answer: t('pricing.faq.1.answer')
  },
  {
    question: t('pricing.faq.2.question'), 
    answer: t('pricing.faq.2.answer')
  },
  // ... 更多 FAQ
];
---

<Layout 
  title={title} 
  description={description} 
  lang={currentLang}
  type="product"
  faqs={faqData}
>
  <!-- 頁面內容，包含 FAQ 組件 -->
  <PricingFAQ lang={currentLang} client:load />
</Layout>
```

### 生成的 FAQ Schema

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage", 
  "@id": "https://seasalt.ai/en/pricing#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "@id": "https://seasalt.ai/en/pricing#faq-1",
      "name": "Is the free plan really free forever?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Our Live Agent plan includes 1 human agent for life..."
      }
    }
  ]
}
```

### FAQ 的 SEO 價值
- **豐富摘要**: Google 可在搜尋結果中顯示 FAQ 內容
- **語音搜尋優化**: 適合語音助手回答
- **提高點擊率**: 結構化 FAQ 在 SERP 中更顯眼
- **知識圖譜**: 建立品牌權威度

---

## 🗂️ 麵包屑導航 Schema

對於深層頁面，加入麵包屑導航：

```astro
---
const breadcrumbs = [
  { name: 'Home', url: `/${currentLang}/` },
  { name: 'Solutions', url: `/${currentLang}/solutions/` },
  { name: 'AI Automation' }  // 當前頁面不需要 URL
];
---

<Layout 
  title={title} 
  description={description} 
  lang={currentLang}
  breadcrumbs={breadcrumbs}
>
  <!-- 頁面內容 -->
</Layout>
```

---

## 🎨 進階 SEO 設定

### 自訂圖片和 Canonical URL

```astro
<Layout 
  title={title} 
  description={description} 
  lang={currentLang}
  image="/special-page-og-image.jpg"
  canonical="https://seasalt.ai/en/special-page/"
  keywords="custom keywords, specific terms"
>
  <!-- 頁面內容 -->
</Layout>
```

### 控制索引和跟隨

```astro
<!-- 草稿或私人頁面 -->
<Layout 
  title={title} 
  description={description} 
  lang={currentLang}
  noindex={true}
  nofollow={true}
>
  <!-- 頁面內容 -->
</Layout>
```

---

## 🌐 多語言 SEO

### 自動 Hreflang 生成

系統自動為每個頁面生成 20 種語言的 hreflang 標籤：

```html
<link rel="alternate" hreflang="en" href="https://seasalt.ai/en/pricing/" />
<link rel="alternate" hreflang="zh-tw" href="https://seasalt.ai/zh-tw/pricing/" />
<link rel="alternate" hreflang="ja" href="https://seasalt.ai/ja/pricing/" />
<!-- ... 其他 17 種語言 -->
<link rel="alternate" hreflang="x-default" href="https://seasalt.ai/en/pricing/" />
```

### 語言特定的 SEO 最佳化

```astro
---
// 自動產生正確的 canonical URL
const canonicalUrl = currentLang === 'en' 
  ? `https://seasalt.ai${Astro.url.pathname}`
  : `https://seasalt.ai/${currentLang}${Astro.url.pathname}`;
---

<Layout canonical={canonicalUrl} />
```

---

## 📊 Layout 組件 Props 完整參考

```typescript
interface Props {
  // === 必要參數 ===
  title: string;                    // 頁面標題

  // === 基礎 SEO ===
  description?: string;             // 頁面描述
  lang?: string;                    // 語言代碼 (預設: 'en')
  keywords?: string;                // 關鍵字
  image?: string;                   // OG 圖片
  canonical?: string;               // Canonical URL

  // === 內容類型 ===
  type?: 'website' | 'article' | 'product' | 'software';

  // === 文章資料 ===
  article?: {
    publishedTime?: string;         // 發布時間 (ISO 8601)
    modifiedTime?: string;          // 修改時間 (ISO 8601)
    author?: string;                // 作者
    section?: string;               // 分類
    tags?: string[];                // 標籤陣列
  };

  // === 結構化資料 ===
  faqs?: Array<{
    question: string;               // FAQ 問題
    answer: string;                 // FAQ 答案
  }>;

  breadcrumbs?: Array<{
    name: string;                   // 麵包屑名稱
    url?: string;                   // 麵包屑連結（可選）
  }>;

  // === 控制選項 ===
  noindex?: boolean;                // 阻止索引
  nofollow?: boolean;               // 阻止跟隨連結
}
```

---

## 🔧 翻譯系統整合

### SEO 翻譯鍵結構

建議在翻譯檔案中使用以下結構：

```json
{
  "pages": {
    "pricing": {
      "seo": {
        "title": "Pricing - Seasalt.ai",
        "description": "Transparent pricing for AI-powered solutions...",
        "keywords": "pricing, plans, AI, contact center"
      },
      "faq": {
        "1": {
          "question": "Is the free plan really free?",
          "answer": "Yes, completely free forever..."
        }
      }
    }
  }
}
```

### 使用翻譯的 SEO 資料

```astro
---
const title = t('pages.pricing.seo.title') || 'Default Title';
const description = t('pages.pricing.seo.description') || 'Default description';
const keywords = t('pages.pricing.seo.keywords') || 'default, keywords';

// FAQ 資料
const faqData = [
  {
    question: t('pages.pricing.faq.1.question'),
    answer: t('pages.pricing.faq.1.answer')
  }
  // ... 更多 FAQ
];
---
```

---

## ⚡ 效能最佳化

### 1. 圖片最佳化

```astro
<!-- 使用適當的圖片格式和大小 -->
<Layout 
  image="/og-images/pricing-1200x630.jpg"  <!-- OG 建議尺寸 -->
/>
```

### 2. 靜態生成優勢

- **560 個頁面** 在建置時預先生成完整的 SEO 標籤
- **無需 API 請求** - 所有 SEO 資料都在 HTML 中
- **極快載入** - 純靜態 HTML，無 JavaScript 依賴
- **搜尋引擎友善** - 搜尋引擎爬蟲直接讀取內容

---

## 🔍 測試與驗證

### 1. JSON-LD 驗證
使用 Google 的 Rich Results Test：
1. 前往 [Rich Results Test](https://search.google.com/test/rich-results)
2. 輸入頁面 URL 或直接貼上 JSON-LD 代碼
3. 檢查是否有錯誤或警告

### 2. 本地測試

```bash
# 建置並檢查輸出
npm run build

# 檢查生成的 HTML 中的 JSON-LD
cat dist/en/pricing/index.html | grep -A 50 "application/ld+json"

# 檢查 meta 標籤
cat dist/en/pricing/index.html | grep -E "(title|meta)"
```

### 3. SEO 工具檢測

- **Google Search Console** - 檢查索引狀態和結構化資料
- **Lighthouse** - 檢查 SEO 分數和效能
- **Meta Tags 檢查器** - 驗證 Open Graph 標籤

---

## 🎯 最佳實務檢查清單

### 每個頁面必須包含：
- [ ] 獨特的 `title`（30-60 字元）
- [ ] 描述性的 `description`（120-160 字元）
- [ ] 適當的 `lang` 設定
- [ ] 正確的 `canonical` URL
- [ ] Organization Schema
- [ ] WebSite Schema
- [ ] WebPage Schema

### 如果頁面有 FAQ：
- [ ] 傳入 `faqs` 陣列
- [ ] 每個 FAQ 至少 10 字以上
- [ ] FAQ 內容有實際價值
- [ ] 至少 3 個問答對（建議）

### 產品/服務頁面額外包含：
- [ ] `type="product"` 或 `type="software"`
- [ ] 相關的 `keywords`
- [ ] 適當的產品圖片

### 多語言頁面：
- [ ] 所有語言版本的 hreflang 標籤
- [ ] 正確的語言代碼（BCP 47 標準）
- [ ] x-default 設定為英語版本

---

## 🚨 常見問題解決

### Q1: FAQ Schema 沒有出現在搜尋結果

**常見原因**：
- FAQ 內容太少（建議至少 3 個問答）
- 問題和答案太短
- 頁面權重不夠高
- Google 需要時間處理（可能需要數週）

**解決方案**：
- 增加 FAQ 數量和內容品質
- 確保頁面整體 SEO 品質
- 在 Google Search Console 請求重新索引

### Q2: Hreflang 錯誤

**確認項目**：
- 所有語言版本都相互引用
- URL 格式正確（絕對路徑）
- x-default 設定正確
- 語言代碼符合標準

### Q3: 結構化資料錯誤

**檢查步驟**：
- 使用 Google Rich Results Test 驗證
- 確認必需屬性完整
- 檢查數據格式（日期、URL 等）
- 驗證 JSON-LD 語法正確

---

## 📈 效能監控

### 定期檢查項目

1. **Google Search Console**
   - 檢查結構化資料錯誤
   - 監控 Core Web Vitals
   - 檢查索引狀態

2. **結構化資料測試**
   - 使用 Google Rich Results Test
   - 檢查新增的 Schema 類型
   - 驗證 FAQ 顯示

3. **效能監控**
   - 頁面載入速度
   - SEO 評分工具檢測
   - 跨瀏覽器相容性

### 更新流程

1. 修改 SEO 設定
2. 本地測試建置
3. 檢查 HTML 輸出
4. 部署到 staging
5. 使用測試工具驗證
6. 部署到 production
7. 在 Google Search Console 請求重新索引

---

## 🏆 成功案例

### 當前實作成果
- **560 個頁面** 全部包含完整 SEO 標籤
- **20 種語言** 版本的多語言 SEO
- **6 種 Schema 類型** 正確生成
- **零 SEO 錯誤** 的乾淨建置
- **原生 SSG** 帶來的效能提升

### 預期 SEO 改善
- **載入速度** 提升 20-40%（靜態 HTML）
- **搜尋引擎可讀性** 大幅提升
- **結構化資料豐富度** 增加
- **多語言 SEO** 覆蓋更廣泛市場

---

## 📚 相關文件

- **多語言指南**: `I18N_GUIDE.md` - 完整的 i18n 使用指南
- **搬遷指南**: `MIGRATION_COMPLETE_GUIDE.md` - 完整搬遷記錄
- **效能基準**: `performance_baseline.json` - 效能比較數據

---

*本指南整合了原有的 SEO 組件文件和實作指南，提供完整的 SEO 系統使用說明。*

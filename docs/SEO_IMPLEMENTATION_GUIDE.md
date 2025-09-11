# SEO 實作指南 - Seasalt.ai 新網站

## 概述

本文件提供完整的 SEO 實作指南，包含如何在 Seasalt.ai 新網站中使用 SEO 組件、JSON-LD 結構化資料、FAQ Schema 等最佳實務。

## 架構概覽

### SEO 組件架構

```
src/
├── components/
│   └── SEO.astro              # 主要 SEO 組件
├── layouts/
│   └── Layout.astro           # 整合 SEO 組件的版型
└── pages/
    ├── [lang]/
    │   ├── index.astro        # 首頁範例
    │   ├── pricing.astro      # 定價頁面（含 FAQ）
    │   └── company.astro      # 公司頁面
    └── index.astro            # 語言重定向頁
```

### JSON-LD Schema 類型

我們的 SEO 組件支援以下 5 種 JSON-LD Schema：

1. **Organization** - 公司組織資訊（全站共通）
2. **WebSite** - 網站整體資訊（全站共通）
3. **WebPage** - 當前頁面資訊（每頁生成）
4. **Content Schema** - 依頁面類型生成：
   - `Article` - 部落格文章
   - `Product` - 產品頁面
   - `SoftwareApplication` - 軟體產品頁面
5. **FAQPage** - 常見問題（如有提供）
6. **BreadcrumbList** - 麵包屑導航（如有提供）

每個 Schema 都有唯一的 `@id` 識別碼，便於 Google Search Console 識別和連結。

## 基本使用方式

### 1. 基礎頁面 SEO

最簡單的頁面實作：

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

這會自動生成：
- ✅ Organization Schema
- ✅ WebSite Schema
- ✅ WebPage Schema
- ✅ 完整 Meta Tags (title, description, OG, Twitter)
- ✅ Hreflang 連結
- ✅ Canonical URL

### 2. 產品頁面 SEO

產品或服務頁面：

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

額外生成：
- ✅ Product Schema（包含品牌、製造商等）

### 3. 軟體應用頁面 SEO

軟體產品頁面：

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

額外生成：
- ✅ SoftwareApplication Schema（包含應用類別、作業系統、定價等）

### 4. 部落格文章 SEO

部落格或文章頁面：

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

額外生成：
- ✅ Article Schema（包含發布時間、作者、標籤等）

## FAQ Schema 實作

### 完整 FAQ 實作範例

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

生成的 FAQ Schema：

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

## 麵包屑導航 Schema

對於深層頁面，建議加入麵包屑：

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

## 進階 SEO 設定

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

## SEO 組件 Props 完整參考

### Layout.astro Props

```typescript
interface Props {
  // 必要
  title: string;                    // 頁面標題
  
  // 基礎 SEO
  description?: string;             // 頁面描述
  lang?: string;                    // 語言代碼 (預設: 'en')
  keywords?: string;                // 關鍵字
  image?: string;                   // OG 圖片
  canonical?: string;               // Canonical URL
  
  // 內容類型
  type?: 'website' | 'article' | 'product' | 'software';
  
  // 文章資料
  article?: {
    publishedTime?: string;         // 發布時間 (ISO 8601)
    modifiedTime?: string;          // 修改時間 (ISO 8601)
    author?: string;                // 作者
    section?: string;               // 分類
    tags?: string[];                // 標籤陣列
  };
  
  // 結構化資料
  faqs?: Array<{
    question: string;               // FAQ 問題
    answer: string;                 // FAQ 答案
  }>;
  
  breadcrumbs?: Array<{
    name: string;                   // 麵包屑名稱
    url?: string;                   // 麵包屑連結（可選）
  }>;
  
  // 控制選項
  noindex?: boolean;                // 阻止索引
  nofollow?: boolean;               // 阻止跟隨連結
}
```

## 翻譯系統整合

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
---
```

## 效能最佳化

### 1. 圖片最佳化

```astro
<!-- 使用適當的圖片格式和大小 -->
<Layout 
  image="/og-images/pricing-1200x630.jpg"  <!-- OG 建議尺寸 -->
/>
```

### 2. Canonical URL 管理

```astro
---
// 自動產生正確的 canonical URL
const canonicalUrl = currentLang === 'en' 
  ? `https://seasalt.ai${Astro.url.pathname}`
  : `https://seasalt.ai/${currentLang}${Astro.url.pathname}`;
---

<Layout canonical={canonicalUrl} />
```

## 常見問題與解決方案

### Q1: 如何檢查 JSON-LD 是否正確？

使用 Google 的 Rich Results Test：
1. 前往 [Rich Results Test](https://search.google.com/test/rich-results)
2. 輸入頁面 URL 或直接貼上 JSON-LD 代碼
3. 檢查是否有錯誤或警告

### Q2: FAQ Schema 沒有出現在搜尋結果

常見原因：
- FAQ 內容太少（建議至少 3 個問答）
- 問題和答案太短
- 頁面權重不夠高
- Google 需要時間處理（可能需要數週）

### Q3: Hreflang 錯誤

確認：
- 所有語言版本都相互引用
- URL 格式正確
- x-default 設定正確

### Q4: 如何測試 SEO 實作？

```bash
# 建置並檢查輸出
npm run build

# 檢查生成的 HTML
cat dist/en/pricing/index.html | grep -A 50 "application/ld+json"
```

## 最佳實務檢查清單

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

### 產品/服務頁面額外包含：

- [ ] `type="product"` 或 `type="software"`
- [ ] 相關的 `keywords`
- [ ] 適當的產品圖片

### 文章頁面額外包含：

- [ ] `type="article"`
- [ ] `article.publishedTime`
- [ ] `article.author`
- [ ] `article.tags`

## 維護和更新

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

## 範例頁面參考

- **首頁**: `src/pages/[lang]/index.astro` - WebSite type
- **定價頁**: `src/pages/[lang]/pricing.astro` - Product type + FAQ
- **公司頁**: `src/pages/[lang]/company.astro` - WebSite type
- **解決方案頁**: `src/pages/[lang]/solutions/*.astro` - Software type

每個範例都展示了不同的 SEO 實作方式，可以作為新頁面的參考模板。

---

**最後更新**: 2024-09-10  
**維護者**: Seasalt.ai 開發團隊  
**版本**: 1.0

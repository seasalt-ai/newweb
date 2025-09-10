# 遷移追蹤文檔

本文檔追蹤從舊的 React 代碼庫（`_old/`）到新的 Astro 設置的所有頁面和組件的遷移狀態。

## 遷移狀態圖例

對於以下每個項目：

- **🤖 Bot 完成**: 當機器人認為遷移完成時打勾
- **✅ 人工驗證**: 當人工驗證遷移完成且正常工作時打勾

---

## 核心佈局組件

### Header 組件

**路徑**: `_old/src/components/Header.tsx`  
**目標**: `src/components/Header.astro`  
**狀態**:

- [x] 🤖 Bot 完成
- [x] ✅ 人工驗證

### Footer 組件

**路徑**: `_old/src/components/Footer.tsx`  
**目標**: `src/components/Footer.astro`  
**狀態**:

- [x] 🤖 Bot 完成
- [x] ✅ 人工驗證

---

## 首頁組件

### Hero 組件

**路徑**: `_old/src/components/Hero.tsx`  
**目標**: `src/components/Hero.astro`  
**狀態**:

- [x] 🤖 Bot 完成 (階段 4)
- [x] ✅ 人工驗證

### 問題解決方案組件

**路徑**: `_old/src/components/ProblemSolution.tsx`  
**目標**: `src/components/ProblemSolution.astro`  
**狀態**:

- [x] 🤖 Bot 完成 (階段 4)
- [x] ✅ 人工驗證

### 功能組件

**路徑**: `_old/src/components/Features.tsx`  
**目標**: `src/components/Features.astro`  
**狀態**:

- [x] 🤖 Bot 完成 (階段 4)
- [x] ✅ 人工驗證

### 運作方式組件

**路徑**: `_old/src/components/HowItWorks.tsx`  
**目標**: `src/components/HowItWorks.astro`  
**狀態**:

- [x] 🤖 Bot 完成 (階段 4) - i18n 系統搬移完成
- [x] ✅ 人工驗證

### 使用案例組件

**路徑**: `_old/src/components/UseCases.tsx`  
**目標**: `src/components/UseCases.astro`  
**狀態**:

- [x] 🤖 Bot 完成 (階段 4) - i18n 系統搬移完成
- [x] ✅ 人工驗證

### 行業組件

**路徑**: `_old/src/components/Industries.tsx`  
**目標**: `src/components/Industries.astro`  
**狀態**:

- [x] 🤖 Bot 完成 (階段 4) - i18n 系統搬移完成
- [x] ✅ 人工驗證

### 渠道組件

**路徑**: `_old/src/components/Channels.tsx`  
**目標**: `src/components/Channels.astro`  
**狀態**:

- [x] 🤖 Bot 完成 (階段 4) - i18n 系統搬移完成
- [x] ✅ 人工驗證

### 比較組件

**路徑**: `_old/src/components/Comparison.tsx`  
**目標**: `src/components/Comparison.astro`  
**狀態**:

- [x] 🤖 Bot 完成 (階段 4) - i18n 系統搬移完成
- [x] ✅ 人工驗證

---

## 工具組件

### 博客組件

**路徑**: `_old/src/components/Blog.tsx`  
**目標**: `src/components/Blog.astro`  
**狀態**:

- [ ] 🤖 Bot 完成
- [ ] ✅ 人工驗證

### 語言路由組件

**路徑**: `_old/src/components/LanguageRouter.tsx`  
**目標**: `src/components/LanguageRouter.astro` (或中間件)  
**狀態**:

- [ ] 🤖 Bot 完成
- [ ] ✅ 人工驗證

### Markdown 頁面組件

**路徑**: `_old/src/components/MarkdownPage.tsx`  
**目標**: `src/components/MarkdownPage.astro`  
**狀態**:

- [ ] 🤖 Bot 完成
- [ ] ✅ 人工驗證

### SeaChat 路由組件

**路徑**: `_old/src/components/SeaChatRouter.tsx`  
**目標**: Astro 路由結構  
**狀態**:

- [ ] 🤖 Bot 完成
- [ ] ✅ 人工驗證

### HTML 語言更新組件

**路徑**: `_old/src/components/HtmlLangUpdater.tsx`  
**目標**: Astro 佈局整合  
**狀態**:

- [ ] 🤖 Bot 完成
- [ ] ✅ 人工驗證

### SEO 頭部組件

**路徑**: `_old/src/components/SEOHelmet.tsx`  
**目標**: Astro SEO 整合  
**狀態**:

- [ ] 🤖 Bot 完成
- [ ] ✅ 人工驗證

### 網站圖標管理組件

**路徑**: `_old/src/components/FaviconManager.tsx`  
**目標**: Astro 佈局頭部區段  
**狀態**:

- [ ] 🤖 Bot 完成
- [ ] ✅ 人工驗證

### 捲動到頂部組件

**路徑**: `_old/src/components/ScrollToTop.tsx`  
**目標**: `src/components/ScrollToTop.astro`  
**狀態**:

- [ ] 🤖 Bot 完成
- [ ] ✅ 人工驗證

### GTM 追蹤組件

**路徑**: `_old/src/components/GTMTracker.tsx`  
**目標**: Astro 佈局整合  
**狀態**:

- [ ] 🤖 Bot 完成
- [ ] ✅ 人工驗證

### UTM 追蹤組件

**路徑**: `_old/src/components/UTMTracker.tsx`  
**目標**: Astro 佈局整合  
**狀態**:

- [ ] 🤖 Bot 完成
- [ ] ✅ 人工驗證

---

## 主要頁面

### 定價頁面

**路徑**: `_old/src/pages/Pricing.tsx`  
**目標**: `src/pages/[lang]/pricing.astro`  
**狀態**:

- [ ] 🤖 Bot 完成
- [ ] ✅ 人工驗證

### 渠道概覽頁面

**路徑**: `_old/src/pages/ChannelsOverview.tsx`  
**目標**: `src/pages/[lang]/channels/index.astro`  
**狀態**:

- [ ] 🤖 Bot 完成
- [ ] ✅ 人工驗證

### 比較我們概覽頁面

**路徑**: `_old/src/pages/CompareUsOverview.tsx`  
**目標**: `src/pages/[lang]/compare/index.astro`  
**狀態**:

- [ ] 🤖 Bot 完成
- [ ] ✅ 人工驗證

### 博客頁面

**路徑**: `_old/src/pages/Blog.tsx`  
**目標**: `src/pages/[lang]/blog/index.astro`  
**狀態**:

- [ ] 🤖 Bot 完成
- [ ] ✅ 人工驗證

### 博客文章頁面

**路徑**: `_old/src/pages/BlogPost.tsx`  
**目標**: `src/pages/[lang]/blog/[slug].astro`  
**狀態**:

- [ ] 🤖 Bot 完成
- [ ] ✅ 人工驗證

### SeaHealth 頁面

**路徑**: `_old/src/pages/SeaHealth.tsx`  
**目標**: `src/pages/[lang]/seahealth.astro`  
**狀態**:

- [ ] 🤖 Bot 完成
- [ ] ✅ 人工驗證

### 公司頁面

**路徑**: `_old/src/pages/CompanyPage.tsx`  
**目標**: `src/pages/[lang]/company.astro`  
**狀態**:

- [ ] 🤖 Bot 完成
- [ ] ✅ 人工驗證

### 職業頁面

**路徑**: `_old/src/pages/careers.tsx`  
**目標**: `src/pages/[lang]/careers.astro`  
**狀態**:

- [ ] 🤖 Bot 完成
- [ ] ✅ 人工驗證

---

## 渠道頁面

### WhatsApp 頁面

**路徑**: `_old/src/pages/channels/WhatsApp.tsx`  
**目標**: `src/pages/[lang]/channels/whatsapp.astro`  
**狀態**:

- [ ] 🤖 Bot 完成
- [ ] ✅ 人工驗證

### 電話通話頁面

**路徑**: `_old/src/pages/channels/PhoneCalls.tsx`  
**目標**: `src/pages/[lang]/channels/phone-calls.astro`  
**狀態**:

- [ ] 🤖 Bot 完成
- [ ] ✅ 人工驗證

### SMS 頁面

**路徑**: `_old/src/pages/channels/SMS.tsx`  
**目標**: `src/pages/[lang]/channels/sms.astro`  
**狀態**:

- [ ] 🤖 Bot 完成
- [ ] ✅ 人工驗證

### 網站聊天頁面

**路徑**: `_old/src/pages/channels/WebsiteChat.tsx`  
**目標**: `src/pages/[lang]/channels/website-chat.astro`  
**狀態**:

- [ ] 🤖 Bot 完成
- [ ] ✅ 人工驗證

### Instagram 頁面

**路徑**: `_old/src/pages/channels/Instagram.tsx`  
**目標**: `src/pages/[lang]/channels/instagram.astro`  
**狀態**:

- [ ] 🤖 Bot 完成
- [ ] ✅ 人工驗證

### Facebook Messenger 頁面

**路徑**: `_old/src/pages/channels/FacebookMessenger.tsx`  
**目標**: `src/pages/[lang]/channels/facebook-messenger.astro`  
**狀態**:

- [ ] 🤖 Bot 完成
- [ ] ✅ 人工驗證

### 聯絡表單頁面

**路徑**: `_old/src/pages/channels/ContactForms.tsx`  
**目標**: `src/pages/[lang]/channels/contact-forms.astro`  
**狀態**:

- [ ] 🤖 Bot 完成
- [ ] ✅ 人工驗證

### Line 頁面

**路徑**: `_old/src/pages/channels/Line.tsx`  
**目標**: `src/pages/[lang]/channels/line.astro`  
**狀態**:

- [ ] 🤖 Bot 完成
- [ ] ✅ 人工驗證

### 網站小工具頁面

**路徑**: `_old/src/pages/channels/WebsiteWidget.tsx`  
**目標**: `src/pages/[lang]/channels/website-widget.astro`  
**狀態**:

- [ ] 🤖 Bot 完成
- [ ] ✅ 人工驗證

---

## 比較頁面

### Aircall 替代方案頁面

**路徑**: `_old/src/pages/compare/AircallAlternative.tsx`  
**目標**: `src/pages/[lang]/compare/aircall-alternative.astro`  
**狀態**:

- [ ] 🤖 Bot 完成
- [ ] ✅ 人工驗證

### RingCentral 替代方案頁面

**路徑**: `_old/src/pages/compare/RingCentralAlternative.tsx`  
**目標**: `src/pages/[lang]/compare/ringcentral-alternative.astro`  
**狀態**:

- [ ] 🤖 Bot 完成
- [ ] ✅ 人工驗證

### Genesys 替代方案頁面

**路徑**: `_old/src/pages/compare/GenesysAlternative.tsx`  
**目標**: `src/pages/[lang]/compare/genesys-alternative.astro`  
**狀態**:

- [ ] 🤖 Bot 完成
- [ ] ✅ 人工驗證

### Five9 替代方案頁面

**路徑**: `_old/src/pages/compare/Five9Alternative.tsx`  
**目標**: `src/pages/[lang]/compare/five9-alternative.astro`  
**狀態**:

- [ ] 🤖 Bot 完成
- [ ] ✅ 人工驗證

### Avaya 替代方案頁面

**路徑**: `_old/src/pages/compare/AvayaAlternative.tsx`  
**目標**: `src/pages/[lang]/compare/avaya-alternative.astro`  
**狀態**:

- [ ] 🤖 Bot 完成
- [ ] ✅ 人工驗證

### Google Voice 替代方案頁面

**路徑**: `_old/src/pages/compare/GoogleVoiceAlternative.tsx`  
**目標**: `src/pages/[lang]/compare/google-voice-alternative.astro`  
**狀態**:

- [ ] 🤖 Bot 完成
- [ ] ✅ 人工驗證

### Respond.io 替代方案頁面

**路徑**: `_old/src/pages/compare/RespondIoAlternative.tsx`  
**目標**: `src/pages/[lang]/compare/respond-io-alternative.astro`  
**狀態**:

- [ ] 🤖 Bot 完成
- [ ] ✅ 人工驗證

### Intercom 替代方案頁面

**路徑**: `_old/src/pages/compare/IntercomAlternative.tsx`  
**目標**: `src/pages/[lang]/compare/intercom-alternative.astro`  
**狀態**:

- [ ] 🤖 Bot 完成
- [ ] ✅ 人工驗證

### Kustomer 替代方案頁面

**路徑**: `_old/src/pages/compare/KustomerAlternative.tsx`  
**目標**: `src/pages/[lang]/compare/kustomer-alternative.astro`  
**狀態**:

- [ ] 🤖 Bot 完成
- [ ] ✅ 人工驗證

### 3CX 替代方案頁面

**路徑**: `_old/src/pages/compare/ThreeCXAlternative.tsx`  
**目標**: `src/pages/[lang]/compare/3cx-alternative.astro`  
**狀態**:

- [ ] 🤖 Bot 完成
- [ ] ✅ 人工驗證

### Dialpad 替代方案頁面

**路徑**: `_old/src/pages/compare/DialpadAlternative.tsx`  
**目標**: `src/pages/[lang]/compare/dialpad-alternative.astro`  
**狀態**:

- [ ] 🤖 Bot 完成
- [ ] ✅ 人工驗證

### 8x8 替代方案頁面

**路徑**: `_old/src/pages/compare/EightXEightAlternative.tsx`  
**目標**: `src/pages/[lang]/compare/8x8-alternative.astro`  
**狀態**:

- [ ] 🤖 Bot 完成
- [ ] ✅ 人工驗證

### OpenPhone 替代方案頁面

**路徑**: `_old/src/pages/compare/OpenPhoneAlternative.tsx`  
**目標**: `src/pages/[lang]/compare/openphone-alternative.astro`  
**狀態**:

- [ ] 🤖 Bot 完成
- [ ] ✅ 人工驗證

---

## 行業頁面

### 電商頁面

**路徑**: `_old/src/pages/industries/Ecommerce.tsx`  
**目標**: `src/pages/[lang]/industries/ecommerce.astro`  
**狀態**:

- [ ] 🤖 Bot 完成
- [ ] ✅ 人工驗證

### 醫療保健頁面

**路徑**: `_old/src/pages/industries/Healthcare.tsx`  
**目標**: `src/pages/[lang]/industries/healthcare.astro`  
**狀態**:

- [ ] 🤖 Bot 完成
- [ ] ✅ 人工驗證

### 房地產頁面

**路徑**: `_old/src/pages/industries/RealEstate.tsx`  
**目標**: `src/pages/[lang]/industries/real-estate.astro`  
**狀態**:

- [ ] 🤖 Bot 完成
- [ ] ✅ 人工驗證

### 餐廳酒店業頁面

**路徑**: `_old/src/pages/industries/RestaurantsHospitality.tsx`  
**目標**: `src/pages/[lang]/industries/restaurants-hospitality.astro`  
**狀態**:

- [ ] 🤖 Bot 完成
- [ ] ✅ 人工驗證

### 教育培訓頁面

**路徑**: `_old/src/pages/industries/EducationTraining.tsx`  
**目標**: `src/pages/[lang]/industries/education-training.astro`  
**狀態**:

- [ ] 🤖 Bot 完成
- [ ] ✅ 人工驗證

### 汽車服務頁面

**路徑**: `_old/src/pages/industries/AutomotiveServices.tsx`  
**目標**: `src/pages/[lang]/industries/automotive-services.astro`  
**狀態**:

- [ ] 🤖 Bot 完成
- [ ] ✅ 人工驗證

### 專業服務頁面

**路徑**: `_old/src/pages/industries/ProfessionalServices.tsx`  
**目標**: `src/pages/[lang]/industries/professional-services.astro`  
**狀態**:

- [ ] 🤖 Bot 完成
- [ ] ✅ 人工驗證

### 金融服務頁面

**路徑**: `_old/src/pages/industries/FinancialServices.tsx`  
**目標**: `src/pages/[lang]/industries/financial-services.astro`  
**狀態**:

- [ ] 🤖 Bot 完成
- [ ] ✅ 人工驗證

---

## 解決方案頁面

### 中小企業主頁面

**路徑**: `_old/src/pages/solutions/SmeOwners.tsx`  
**目標**: `src/pages/[lang]/solutions/sme-owners.astro`  
**狀態**:

- [ ] 🤖 Bot 完成
- [ ] ✅ 人工驗證

### 銷售與行銷頁面

**路徑**: `_old/src/pages/solutions/SalesMarketing.tsx`  
**目標**: `src/pages/[lang]/solutions/sales-marketing.astro`  
**狀態**:

- [ ] 🤖 Bot 完成
- [ ] ✅ 人工驗證

### 客戶支援頁面

**路徑**: `_old/src/pages/solutions/CustomerSupport.tsx`  
**目標**: `src/pages/[lang]/solutions/customer-support.astro`  
**狀態**:

- [ ] 🤖 Bot 完成
- [ ] ✅ 人工驗證

### AI 自動化頁面

**路徑**: `_old/src/pages/solutions/AIAutomation.tsx`  
**目標**: `src/pages/[lang]/solutions/ai-automation.astro`  
**狀態**:

- [ ] 🤖 Bot 完成
- [ ] ✅ 人工驗證

---

## SeaChat 產品頁面

### SeaChat Components

**Path**: `_old/src/seachat/components/`  
**Target**: `src/pages/[lang]/seachat/` (component-specific pages)  
**Note**: SeaChat has its own component and page structure that needs detailed mapping

#### SeaChat Pages (from `_old/src/seachat/pages/`)

- [ ] 🤖 PricingPage.tsx → `src/pages/[lang]/seachat/pricing.astro`
- [ ] 🤖 FeaturesPage.tsx → `src/pages/[lang]/seachat/features.astro`
- [ ] 🤖 DevelopersPage.tsx → `src/pages/[lang]/seachat/developers.astro`
- [ ] 🤖 UseCasesPage.tsx → `src/pages/[lang]/seachat/use-cases.astro`
- [ ] 🤖 About.tsx → `src/pages/[lang]/seachat/about.astro`

**Status**:

- [ ] 🤖 Bot Completed
- [ ] ✅ Manual Verified

---

## SeaX 產品頁面

### SeaX Components

**Path**: `_old/src/seax/components/`  
**Target**: `src/pages/[lang]/seax/` (component-specific pages)

#### SeaX Pages (from `_old/src/seax/pages/`)

- [ ] 🤖 PricingPage.tsx → `src/pages/[lang]/seax/pricing.astro`
- [ ] 🤖 FeaturesPage.tsx → `src/pages/[lang]/seax/features.astro`
- [ ] 🤖 DevelopersPage.tsx → `src/pages/[lang]/seax/developers.astro`
- [ ] 🤖 UseCasesPage.tsx → `src/pages/[lang]/seax/use-cases.astro`
- [ ] 🤖 About.tsx → `src/pages/[lang]/seax/about.astro`

**Status**:

- [ ] 🤖 Bot Completed
- [ ] ✅ Manual Verified

---

## SeaVoice 產品頁面

### SeaVoice Components

**Path**: `_old/src/seavoice/components/`  
**Target**: `src/pages/[lang]/seavoice/` (component-specific pages)

#### SeaVoice Pages (from `_old/src/seavoice/pages/`)

- [ ] 🤖 PricingPage.tsx → `src/pages/[lang]/seavoice/pricing.astro`
- [ ] 🤖 FeaturesPage.tsx → `src/pages/[lang]/seavoice/features.astro`
- [ ] 🤖 DevelopersPage.tsx → `src/pages/[lang]/seavoice/developers.astro`
- [ ] 🤖 UseCasesPage.tsx → `src/pages/[lang]/seavoice/use-cases.astro`
- [ ] 🤖 About.tsx → `src/pages/[lang]/seavoice/about.astro`

**Status**:

- [ ] 🤖 Bot Completed
- [ ] ✅ Manual Verified

---

## 遷移進度摘要 (更新: 2025-09-09)

### 已完成項目 ✅
- **階段 1-3**: Astro 架構建立與基本資源搬遷
- **階段 4**: 首頁核心組件 (Hero、功能、問題解決方案、運作方式、使用案例、行業、渠道、比較)
- **階段 5**: i18n 系統完全搬移完成
- **Header/Footer 基礎功能**: 組件轉換和 i18n 修復
- **定價頁面**: `/[lang]/pricing` 完整搬移 (方案 B: 純 Astro + React 互動元件)

### 進行中項目 🟡
- **關於頁面**: `/[lang]/company` (對應 CompanyPage.tsx)
- **聯絡頁面**: `/[lang]/contact` (使用 company.contact 區塊內容)

### 暫停項目 ⏸️
- **Blog 系統**: 暫時停用（有完整恢復指南）
- **SeaChat/SeaX/SeaVoice 產品頁面**: 與主頁互不關聯，暫不搬移

### 下一步優先項目 (已更新)

1. **✅ 已完成**: 定價頁面 `/[lang]/pricing`
2. **進行中**: 關於頁面 `/[lang]/company` (對應 CompanyPage.tsx)
3. **進行中**: 聯絡頁面 `/[lang]/contact` (使用 company.contact 區塊)
4. **在線測試與優化** - 詳細測試現有功能，進行人工驗證
5. **Blog 系統恢復** - 依照恢復指南恢復 Blog 功能 (如有需要)
6. **細節頁面評估** - 渠道、比較、行業、解決方案頁面 (待主頁功能完成後再評估)

---

## 註釋

- 所有目標路徑都遵循 Astro 的檔案路由，使用 `[lang]` 動態路由進行國際化
- 組件應保持相同功能，但需適應 Astro 組件格式
- 翻譯鍵和 i18n 整合應被保留
- SEO 元數據和結構化數據應以 Astro 格式維持
- 動畫和互動元素可能需要在 Astro 組件中使用客戶端 JavaScript

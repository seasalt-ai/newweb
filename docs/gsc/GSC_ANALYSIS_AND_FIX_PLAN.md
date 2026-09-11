# GSC 分析與完整修復方案

> 日期：2026-09-11
> 資料來源：`../GSC`（Google Search Console 匯出，2026-09-11）
> 範圍：seasalt.ai 主站 + 子網域 + newweb（本 repo，已上線於 GitHub Pages）
>
> **實作狀態（2026-09-11）：Phase 1 已完成並通過本機驗證（含瀏覽器端到端測試），待完整 build + 部署。**
> 詳見「六、實作紀錄」。

---

## 一、現況摘要

### 部署架構（2026-09-11 實測）

| 項目 | 狀態 |
|---|---|
| 主站 `seasalt.ai` | **新 Astro 站已上線**，GitHub Pages（185.199.108–111.153），即本 repo `main` → `gh-pages` |
| DNS | Namecheap BasicDNS（`dns1/dns2.registrar-servers.com`），A 記錄直指 GH Pages，**無 CDN** |
| 子網域 `voice` / `chat` / `m` / `seax` | AWS ELB（自管後端），與 GH Pages 無關 |
| `meet` / `wiki` | 獨立服務，正常（200） |

### GSC 成效重點（近 3 個月）

- 每日點擊 ~200（6 月）→ ~120（9 月）；每日曝光 ~9,200 → ~5,300（-40%）；平均排名 8.2 → ~10
- 8/29–8/31 異常低點（曝光 ~4,100、排名 13.6–15.9）
- 品牌詞為主力：seameet / seavoice / seachat / seasalt ai
- **最大非品牌機會 = Discord TTS**：`tts bot` 39,873 曝光 CTR 0.69%（排名 7）、`tts bot discord` 33,751 曝光 CTR 0.46%
- **台灣**點擊最多（4,786，CTR 14.7%）；**美國** 174K 曝光但 CTR 僅 0.76%
- 最大流量頁：`voice.seasalt.ai/discord/`（3,295 點擊 / 260,936 曝光）
- ⚠️ `chat.seasalt.ai/chat/4ec0dfb0...`（私人對話頁）被索引：275 點擊 / 18,525 曝光
- Generative AI 功能曝光 ~750/日 → ~450/日

### 涵蓋範圍（Coverage）

- 已索引 7,160 頁（改善中：6/30 為 5,255）；未索引 20,493（6/30 為 28,217）
- 404：**2,193 頁**；頁面會重新導向：1,689；Discovered–未索引：9,724；Crawled–未索引：6,135
- 404 樣本（999 筆）模式分析：
  - `/{lang}/blog/{slug}` 該語言缺文：273（其中 111 筆 EN 版存在）
  - `/{lang}/integrations/**`：137（新站整合頁僅英文）
  - 舊英文 root URL `/blog/*`：107（**102 筆同 slug 存在於 `/en/blog/`**）
  - 變造語系前綴垃圾 URL（`/arl/`、`/kol/`、`/ardustries`、`/delutions`…）：~300 → 維持 404
  - `/app_images/` 路徑：~30
  - 其他 root 頁面（channels / compare / industries / solutions / seachat / seavoice / careers…）：~60

### 檢索統計（90 天）

- `chat.seasalt.ai` 吃掉 2,366,020 次檢索（JS 60.4% + JSON 19.1%，HTML 僅 18.1%）— SPA 檢索成本高
- 每日檢索 45–86K（6 月）→ 19–33K（9 月）
- `suite.seasalt.ai` 上週異常；`m` / `api` / `usecase` / `portal` 曾有異常

### 其他報告

- HTTPS：無問題；Breadcrumbs：0 無效（430 有效，7 月高峰 ~700）；Review snippets：無問題（178 點擊）
- 影片索引：**186 支「影片不在觀賞頁面上」**，僅 1–2 支被索引（多為 YouTube iframe embed，無 VideoObject）
- 反向連結：`seasalt.ai/en/` 665K 連結；`voice/discord/` 2,630 連結來自 1,443 網域（top.gg，健康）

---

## 二、問題總表（實測驗證）

| # | 問題 | 證據 | 嚴重度 |
|---|------|------|--------|
| P1 | 舊 URL 無轉址 | `/blog/48-...`、`/careers/`、`/seachat/` 實測 404；GSC 2,193 個 404 | 🔴 高 |
| P2 | `_redirects` 在 GH Pages 無效 | `/es/integrations/markate` → 404（21 條規則全死；GH Pages 不支援） | 🔴 高 |
| P3 | 子網域轉址指向 404 | `voice.seasalt.ai` → 301 → `/seavoice` → 404；`chat.seasalt.ai` → 301 → `/seachat` → 404 | 🔴 高 |
| P4 | Sitemap 含 404 頁 | `/{lang}/404` 共 21+1 個 URL（sitemap.xml + sitemap-hreflang.xml）；成因：`extractAstroRoutes()` 掃到根目錄 `404.astro` 後加語系前綴 | 🟡 中 |
| P5 | Sitemap 全部無尾斜線 | 5,127 URL 皆先吃一次 301（GH Pages 自動補斜線導向 canonical 帶斜線版本） | 🟡 中 |
| P6 | RSS 連結全斷 | `rss.xml.js` link 為 `/blog/${slug}/`（缺 `/en`）；且 20 語言混在同一 feed | 🟡 中 |
| P7 | 404.html 彈回首頁 | HTTP 404 + JS 跳 `/en/`，路徑資訊丟失 | 🟡 中 |
| P8 | 186 支影片未索引 | blog 僅 YouTube iframe，無 VideoObject JSON-LD | 🟡 中 |
| P9 | 私人對話頁被索引 | `chat.seasalt.ai/chat/{id}`（AWS 後端管轄） | 🔴 高（隱私） |
| P10 | 多語 blog 缺口 | `/pt/blog/66-...` 404（EN 版存在）；404 樣本 273 筆中 162 筆全站無對應 | 🟡 中 |
| P11 | 美國 CTR 僅 0.76% | 174K 曝光；TTS 詞組 40K+ 曝光 CTR < 1% | 🟢 機會 |
| P12 | 根路徑 `/` 為軟轉址 | 200 + noindex + meta refresh 2s → `/en/`（GH Pages 限制，無法 301，可接受） | 🟢 低 |

---

## 三、修復方案

### 核心設計：語言偵測轉址樁（Language-Detecting Redirect Stub）

GH Pages 無法做 server-side 301，改用 **HTTP 200 實體樁頁**：

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Redirecting…</title>
  <!-- 1) canonical：SEO 訊號整併目標 -->
  <link rel="canonical" href="https://seasalt.ai/en/blog/48-xxx/">
  <!-- 2) JS 語言偵測（放在 meta 之前，同步執行先贏）：保留路徑、自動帶語系 -->
  <script>
    (function () {
      var lang = detectLang();  /* 與 src/pages/index.astro 相同邏輯：navigator.language + 時區映射 */
      location.replace("/" + lang + "/blog/48-xxx/");
    })();
  </script>
  <!-- 3) no-JS / 爬蟲 fallback：0 秒 meta refresh -->
  <meta http-equiv="refresh" content="0; url=/en/blog/48-xxx/">
</head>
<body><a href="/en/blog/48-xxx/">Redirecting…</a></body>
</html>
```

**三層效果**：
1. **真人瀏覽器**：JS 偵測語系 → 直接去 `/{lang}/...`（台灣 → `/zh-TW/`、日本 → `/ja/`），**不強制英文**
2. **no-JS / Googlebot**：0 秒 meta refresh → Google 當轉址追蹤（Bing 亦支援）
3. **canonical → `/en/`**：權重整併到單一 URL

> 注意：JS 必須放在 `<meta refresh>` **之前**，同步 `location.replace()` 先執行，meta refresh 僅作 fallback。
> 固定目標例外：`/channels/line-call-plus` → 固定 `/zh-TW/channels/line-call-plus/`（EN 版不存在）。

---

### Phase 1 — 本 repo（P0）

#### 1.1 新增 `scripts/generate-redirect-stubs.mjs`

Build 後執行，在 `dist/` 產出樁頁。規則（依 GSC 999 筆 404 樣本模式）：

| 舊 URL 模式 | 樣本數 | 目標（`{L}` = 偵測語系，fallback `en`） |
|---|---|---|
| `/blog/{slug}` | 107 | `/{L}/blog/{slug}/`；slug 不存在於 EN → `/{L}/blog/` |
| `/{lang}/blog/{slug}` 該語言缺文 | 273 | EN 有同 slug → `/en/blog/{slug}/`；否則 → `/{lang}/blog/` |
| `/{lang}/integrations/**` | 137 | `/en/integrations/**`（整合頁僅英文） |
| `/channels/**`、`/compare/**`、`/industries/**`、`/solutions/**`、`/seachat/**`、`/seavoice/**`、`/seax/**`、`/careers`、`/pricing`、`/company`、`/seahealth` | ~60 | `/{L}/{path}` |
| `/{any}/app_images/` | ~30 | 上層頁面 |
| `/channels/line-call-plus` | — | 固定 `/zh-TW/channels/line-call-plus/` |
| `/seavoice`、`/seachat`（子網域 301 目標） | — | `/{L}/seavoice/`、`/{L}/seachat/`（見 Phase 2） |
| 變造 URL（`/arl/`、`/kol/`、`/ardustries`…） | ~300 | **不建樁，維持 404** 讓 Google 自然淘汰 |

**產生量估算**：EN root 變體 ~250 + 缺文語言 blog ~2,000 + integrations ~3,400（20 語 × ~170 app）+ 其他 ≈ **~6,000 檔 / ~6MB**（GH Pages 限制 1GB repo，無壓力）。

**資料源**：
- 新站路由：復用 `scripts/generate-sitemap.js` 的 `extractAstroRoutes()` / `extractBlogRoutes()`（export 化）
- GSC 404 全量清單（Coverage 匯出）→ 餵入 script 建立精確 mapping；日後可直接更新
- `detectLang()`：抽 `src/pages/index.astro` 的偵測邏輯共用

**安全防護**：
- 產生前檢查 `dist/{path}/index.html` 已存在則跳過（絕不覆蓋真頁面）
- Idempotent：內容不變不寫檔（不 dirty working tree，沿用 `fix/redirects-idempotent-write` 慣例）
- 排除清單：變造前綴（可選實作 regex 過濾 `{lang}l` 模式）

#### 1.2 修正 `scripts/generate-sitemap.js`（P4、P5）

- `extractAstroRoutes()` 跳過 `/404` route → 移除 21×2 個垃圾 URL
- 所有 `<loc>` 加尾斜線，與 canonical / GH Pages 行為一致，消除 5,127 次 301 hop
- 檢查 `getRouteMeta()` 對尾斜線的優先級判斷

#### 1.3 修正 `src/pages/rss.xml.js`（P6）

- link 改 `/en/blog/${post.slug}/`
- 只輸出 EN（或分語言 `/{lang}/rss.xml`，20 個 feed）

#### 1.4 改良 `public/404.html`（P7）

```
if (path 無語系前綴) → detectLang() → location.replace("/{lang}" + fullPath)   // 保留完整路徑
else → 顯示真 404 頁（建議連結：首頁 / Blog / SeaVoice / SeaChat + 站內搜尋）
```

- 變造垃圾 URL 落入後者，自然淘汰
- 注意：404 狀態碼不利 SEO，重要入口（`/seavoice`、`/seachat` 等）已由 1.1 的 200 樁頁接手，404.html 僅為長尾 fallback

#### 1.5 建置序列

```json
"build": "npm run build:redirects && astro build && npm run build:sitemap && node scripts/generate-redirect-stubs.mjs"
```

（`_redirects` / `_headers` 保留 — 未來若前置 Cloudflare 立即生效，零成本）

---

### Phase 2 — AWS 後端團隊（P0，與 Phase 1 並行）

| 項目 | 現況 | 修改 |
|---|---|---|
| `voice.seasalt.ai` 301 目標 | → `https://seasalt.ai/seavoice`（404） | → **`https://seasalt.ai/seavoice/`**（Phase 1 建的 200 偵測樁） |
| `chat.seasalt.ai` 301 目標 | → `https://seasalt.ai/seachat`（404） | → **`https://seasalt.ai/seachat/`**（同上） |
| `voice.seasalt.ai/discord/` | 200，最大流量頁 | **保留不動**；title/meta 針對 `tts bot discord` 優化（見 3.3） |
| `chat.seasalt.ai/chat/**` | 被索引（隱私） | 加 `X-Robots-Tag: noindex` header；GSC 申請移除已索引頁 |
| `suite.seasalt.ai` | 上週檢索異常 | 確認狀態 |

> 語系說明：301 只到 `/seavoice/` 這一層，語言由樁頁 JS 偵測後再分流到 `/{lang}/seavoice/`，**保留自動辨識**，no-JS fallback 為 `/en/seavoice/`。

---

### Phase 3 — 內容與結構化資料（P1）

#### 3.1 VideoObject JSON-LD（P8）

在 `src/pages/[lang]/blog/[...slug].astro` 偵測 content 中 YouTube iframe（`youtube.com/embed/{id}`、`youtu.be/{id}`、`youtube-nocookie.com/embed/{id}`），注入：

```json
{
  "@type": "VideoObject",
  "name": "{文章標題} — Video",
  "thumbnailUrl": "https://i.ytimg.com/vi/{id}/hqdefault.jpg",
  "uploadDate": "{publishDate}",
  "embedUrl": "https://www.youtube.com/embed/{id}",
  "contentUrl": "https://www.youtube.com/watch?v={id}"
}
```

覆蓋 186 支未索引影片的多數（wiki / voice 站另計）。

#### 3.2 多語 blog 補齊（P10）

- 缺文止血：Phase 1 樁頁已導向 EN 版（111/273 樣本）
- 補翻譯優先序（依 GSC 各國曝光）：vi / ja / pt / ru 的 blog 26 / 52 / 65 系列（既有贏家）
- 162 筆全站無對應的舊文 → 樁導至各語 blog index，不補內容

#### 3.3 CTR 優化（P11）

- `voice.seasalt.ai/discord/`：title / meta description 針對 `tts bot discord`、`discord tts bot`（合計 40K 曝光、CTR < 1%）重寫
- `/en/seavoice/`：增加 Discord TPS 專區 / 對照頁
- 複製德文贏家模式（`wie man einen discord server erstellt`，380 點擊）→ 補 EN 同主題教學文
- 美國市場：英文內容對齊搜尋意圖（174K 曝光 CTR 0.76%）

---

### Phase 4 — 驗證與監控

1. **本地自檢**：`npm run check` + 新增 stub 自檢（sitemap 無 `/404` 條目、樁不覆蓋真頁面、樁總數報告）
2. **部署後抽查**：
   - `/blog/48-how-to-utilize-custom-chatpot-in-marketing/` → 200 + 偵測 JS
   - `/es/integrations/markate` → 200 樁 → `/en/integrations/markate`
   - `/seavoice/`、`/seachat/` → 200 偵測樁
   - `voice.seasalt.ai` / `chat.seasalt.ai` → 301 → 200 樁（後端修改後）
   - `rss.xml` 連結 → 200
   - sitemap 無 `/404`、全部帶尾斜線
3. **GSC**：重新提交 `sitemap-index.xml`；Coverage 追蹤 404 由 2,193 下降、「已找到–目前尚未建立索引」下降
4. **兩週後複查**：美國 CTR、`tts bot` 排名、影片索引數、AI 功能曝光
5. `suite.seasalt.ai` 檢索狀態確認

---

## 四、預期效果

| 指標 | 現況 | 目標 |
|---|---|---|
| GSC 404 | 2,193 | → 0（數週內自然消化） |
| 舊 URL 權重 | 全部丟失 | 轉移至新 `/{lang}/` 路徑 |
| 子網域品牌入口 | 404 斷裂 | 200 + 語系偵測 |
| RSS | 100% 斷鏈 | 全通 |
| 影片索引 | 1–2 支 | 大幅提升（VideoObject） |
| 檢索預算 | 5,127 次 301 hop | 歸零（sitemap 尾斜線） |

---

## 五、附註

- GH Pages 限制：無 server 301、`_redirects`/`_headers` 無效、根路徑無法 301 → 全部以 200 樁 + meta refresh + canonical 繞過
- 未來若流量成長需真 301 / HSTS / WAF：DNS 切 Cloudflare（免費方案 Redirect Rules 即可），`_redirects` 檔立即生效，部署端零改動
- 變造 URL（`/arl/` 等）為舊站 i18n plugin 的字串替換 bug 產物，新站已不再生成，維持 404 即可

---

## 六、實作紀錄（2026-09-11，Phase 1 完成）

### 變更檔案

| 檔案 | 變更 |
|---|---|
| `scripts/generate-redirect-stubs.mjs`（新增） | 語言偵測轉址樁產生器；支援 `DIST_DIR` 環境變數；掃描 dist 既有頁面自動推導 root 入口樁與缺文語言 blog 樁；讀取 `scripts/gsc-404-urls.txt`（GSC 404 清單，含 985 筆主站 URL）套用規則引擎；變造 URL 自動過濾維持 404 |
| `scripts/generate-sitemap.js` | 排除 `/404` route（移除 21×2 個垃圾 URL）；所有 `<loc>` 加尾斜線（消除 5,127 次 301 hop）；`getRouteMeta()` 首頁優先級判斷改為 per-language homepage regex |
| `src/pages/rss.xml.js` | link 加 `/en` 前綴與尾斜線；feed 僅輸出英文文章 |
| `public/404.html` | 重寫：內建 rewrite 引擎（integrations 強制英文含 `/{lang}/seachat|seax/integrations/**`、`app_images` 剝除、帶語系前綴的失效 blog 導向該語 blog index）；腳本移至 body 尾端修復 `document.body` null bug（原版會因例外落入 catch 造成導向迴圈）；真正的 404 UI（隱藏至確認為真 404 才顯示，附多語連結） |
| `public/redirect.html` | 加入相同 rewrite 引擎；回傳路徑保留尾斜線 |
| `public/robots.txt` | 解除 `Disallow: /_astro/`（Googlebot 需 JS/CSS 才能正確渲染 React islands） |
| `package.json` | build 序列加入 `build:stubs`：`build:redirects && astro build && build:sitemap && build:stubs` |
| `scripts/gsc-404-urls.txt`（新增） | GSC Coverage 404 匯出清單（主站 985 筆）；日後可從 GSC 匯出全量清單直接覆蓋 |

### 本機驗證結果（fixture dist + 模擬 GH Pages server + Playwright 瀏覽器實測）

- `/seavoice` → 偵測 zh-TW → `/zh-TW/seavoice/` ✅（語言偵測樁）
- `/careers` → `/zh-TW/careers/` ✅
- `/es/integrations/markate` → 404.html rewrite → `/en/integrations/markate/` ✅
- `/zh-TW/arl/blog/43-x/`（垃圾 URL）→ 顯示 404 UI，無迴圈 ✅
- `/arl/blog/43-x/`（無前綴垃圾）→ 偵測 → `/zh-TW/arl/...` → 404 UI ✅
- 缺文 blog 樁：`/de/blog/26-...` → `/en/blog/26-.../`（canonical + meta refresh + JS）✅
- `line-call-plus` 樁 canonical → `/zh-TW/channels/line-call-plus/`（偵測語系不在可用清單時 fallback）✅
- sitemap：0 個 `/404` 條目、全部尾斜線 ✅
- `node --check` 兩支 script 通過；`check-slugs` 通過；astro check 823 個錯誤全為既有元件歷史問題（`rss.xml.js` 0 個）

### 檔案量估算（真實 build）

root 入口樁 ~250 + 缺文語言 blog 樁 ~2,000 + GSC 清單樁（目前 154 / 985 樣本）≈ **~2,400 檔 / ~2.5MB**。
整合頁長尾（31,400+ 組合）不建樁，由 404.html rewrite 引擎 client-side 處理。

### 待辦（部署側）

1. 其他機器跑 `npm run build`（含 stubs）→ 部署 gh-pages
2. 部署後抽查：`/blog/48-how-to-utilize-custom-chatpot-in-marketing/`、`/es/integrations/markate`、`/seavoice/` 應為 200 + 偵測 JS
3. AWS 後端：`voice.seasalt.ai` 301 目標改 `https://seasalt.ai/seavoice/`；`chat.seasalt.ai` 改 `https://seasalt.ai/seachat/`；`chat.seasalt.ai/chat/**` 加 `X-Robots-Tag: noindex`
4. GSC 重新提交 `sitemap-index.xml`
5. 之後從 GSC 匯出全量 404 清單覆蓋 `scripts/gsc-404-urls.txt` 再 build，涵蓋所有長尾

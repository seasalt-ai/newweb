# GSC 分析報告 — seasalt.ai（2026-09-21 匯出）

> 資料來源：`/Volumes/WD_BLACK/Projects/yyc/GSC/seasalt.ai-*-2026-09-21/`（17 個報告匯出）
> 成效期間：2026-06-19 ～ 2026-09-18（前 3 個月）
> 前次分析基準：[GSC_ANALYSIS_AND_FIX_PLAN.md](./GSC_ANALYSIS_AND_FIX_PLAN.md)（2026-09-11，Phase 1 修復已於 09-11 部署上線）

---

## 一、執行摘要（vs 09-11 基準）

| 指標 | 09-11 基準 | 09-21 現況 | 變化 |
|---|---|---|---|
| 每日點擊 | ~120（9 月初） | 112.7（9 月均值）；9/12–18 區間 71–152 | ▼ 持續下滑但週內回升 |
| 每日曝光 | ~5,300 | 4,940（9 月均值）；**9/17–18 摔至 3,198 / 2,874（新低）** | 🔴 惡化 |
| 平均排名 | ~10 | 10.0（9 月） | ➡ 持平 |
| 已索引頁面 | 7,160 | **6,985**（9/5 後穩定） | ▼ -175 |
| 未索引頁面 | 20,493 | **14,358**（9/5 單日 -6,267 階梯式下降） | 🟢 大幅改善 |
| 404 | 2,193 | 2,074 | ▼ 緩降（stub 剛部署，待消化） |
| 頁面會重新導向 | 1,689 | 1,635 | ▼ |
| 已找到–未索引（Discovered） | 9,724 | 4,246 | 🟢 大幅改善 |
| 已檢索–未索引（Crawled） | 6,135 | 5,645 | ▼ |
| 影片增強（Videos）有效項目 | 0 | **15**（9/12 起） | 🟢 VideoObject 修復生效 |
| 影片索引「不在觀賞頁面」 | 186 | **218** | 🔴 惡化 |
| chat 私人對話頁索引 | 275 點擊 | **仍被索引**：218 點擊 / 13,112 曝光 | 🔴 未修（Phase 2 待辦） |
| Generative AI 曝光 | ~450/日 | 263–541/日（9/18 = 263，新低） | ▼ |

**結論**：09-11 部署的轉址樁 / sitemap 修復已反映在 Coverage（未索引 -30%、Discovered -56%）；但**搜尋曝光持續下滑且 9/17–18 創新低**、私人對話頁仍在索引、影片索引問題不降反升。開發/預備主機（`newweb` / `main-dev`）被索引是本次新發現。

---

## 二、成效（Performance on Search，6/19–9/18）

### 2.1 總量與月趨勢

期間總計：**13,043 點擊 / 627,051 曝光 / CTR 2.08% / 平均排名 ~9.9**

| 月份 | 天數 | 點擊/日 | 曝光/日 | 平均排名 |
|---|---|---|---|---|
| 2026-06（12 天） | 12 | 161.9 | 8,100 | 9.24 |
| 2026-07 | 31 | 161.8 | 7,901 | 9.68 |
| 2026-08 | 31 | 130.8 | 6,323 | 11.47 |
| 2026-09（18 天） | 18 | 112.7 | 4,940 | 10.02 |

- 曝光三個月 -39%；9/16–9/18 連三天低於 4,000（3,957 → 3,198 → 2,874），為全期最低，需持續觀察是否為演算法波動或特定頁面衰退
- CTR 由 6 月 ~1.8% 升至 9 月 2.3–3.2%（品牌詞佔比升高所致）

### 2.2 國家/地區（Top 10）

| 國家 | 點擊 | 曝光 | CTR | 排名 |
|---|---|---|---|---|
| 台灣 | 4,733 | 30,985 | 15.28% | 6.19 |
| 美國 | 1,242 | **157,707** | **0.79%** | 10.11 |
| 德國 | 1,000 | 30,853 | 3.24% | 12.63 |
| 越南 | 400 | 20,527 | 1.95% | 11.46 |
| 印度 | 368 | 29,051 | 1.27% | 10.88 |
| 伊朗 | 368 | 7,655 | 4.81% | 10.41 |
| 巴西 | 352 | 22,402 | 1.57% | 9.57 |
| 日本 | 308 | 11,362 | 2.71% | 10.06 |
| 印尼 | 294 | 40,094 | 0.73% | 8.56 |
| 俄羅斯 | 289 | 13,954 | 2.07% | 15.26 |

美國 CTR 0.79% 與前次（0.76%）幾乎不變 — 174K→158K 曝光的大餅仍吃不到（P11 未解）。

### 2.3 裝置

| 裝置 | 點擊 | 曝光 | CTR | 排名 |
|---|---|---|---|---|
| 桌面 | 7,940 | 385,964 | 2.06% | 11.31 |
| 行動 | 4,975 | 234,383 | 2.12% | 8.26 |
| 平板 | 128 | 6,704 | 1.91% | 7.74 |

### 2.4 查詢（Top 1000 樣本）

**品牌詅**仍為點擊主力：`seameet` 2,661（CTR 71.6%）、`seavoice` 364、`seachat` 288、`seasalt ai` 252、`seavoice discord bot` 250、`seemeet` 184。

**TTS/Discord 詞組家族**（含 tts、discord 之 327 個查詢）：合計 **1,959 點擊 / 134,615 曝光 / CTR 1.46%**

| 查詢 | 點擊 | 曝光 | CTR | 排名 |
|---|---|---|---|---|
| tts bot | 265 | 38,844 | 0.68% | 6.99 |
| tts bot discord | 146 | 32,452 | 0.45% | 7.16 |
| discord tts bot | 41 | 6,108 | 0.67% | 7.86 |
| tts discord bot | 28 | 3,385 | 0.83% | 6.0 |
| text to speech bot discord | 26 | 3,509 | 0.74% | 5.7 |
| text to speech discord bot | 20 | 2,199 | 0.91% | 5.96 |
| discord 文字起こし リアルタイム | 13 | 222 | 5.86% | 4.87 |

非品牌最大贏家仍為德文 `wie man einen discord server erstellt`：328 點擊 / CTR 9.21%（→ EN 同主題教學文待補，P11/3.3）。波斯語 `منشی تلفنی هوش مصنوعی`（AI 電話秘書）18 點擊 CTR 13.5%、`ساخت صدای تلفن گویا` 18 點擊 — fa 語內容有潛力。

### 2.5 網頁（Top 1000 樣本，依主機彙總）

| 主機 | 點擊 | 曝光 |
|---|---|---|
| seasalt.ai | 4,853 | 341,170 |
| meet.seasalt.ai | 3,610 | 18,966 |
| voice.seasalt.ai | 3,269 | 247,033 |
| wiki.seasalt.ai | 868 | 79,578 |
| chat.seasalt.ai | 698 | 31,272 |
| suite.seasalt.ai | 87 | 4,053 |
| main-dev.seasalt.ai | 4 | 1,816 |
| newweb.seasalt.ai | 1 | 1 |

Top 單頁：

| 頁面 | 點擊 | 曝光 | CTR | 排名 |
|---|---|---|---|---|
| `voice.seasalt.ai/discord/` | 3,080 | 243,654 | 1.26% | 7.7 |
| `meet.seasalt.ai/zh-tw` | 3,027 | 6,717 | 45.06% | 2.56 |
| `seasalt.ai/de/blog/16-how-to-create-a-discord-community-and-bot/` | 866 | 13,413 | 6.46% | 9.96 |
| `meet.seasalt.ai/signin` | 463 | 5,251 | 8.82% | 4.9 |
| `seasalt.ai/en/` | 324 | 3,984 | 8.13% | 6.92 |
| 🔴 `chat.seasalt.ai/chat/4ec0dfb011c044209114b4e06d18c26d` | **218** | **13,112** | 1.66% | 8.67 |
| `seasalt.ai/en/seachat/` | 186 | 4,591 | 4.05% | 5.74 |
| `wiki.seasalt.ai/zh/seameet/seameet-manual/01-seameet-intro/` | 184 | 5,329 | 3.45% | 4.95 |

多語 blog 26 系列（seavoice-discord-recording-download）在 vi/ja/pt/fr/es/id/zh-TW 全線有流量，為最穩定的多語贏家頁群。

### 2.6 搜尋外觀

| 呈現方式 | 點擊 | 曝光 | CTR |
|---|---|---|---|
| 評論摘錄 | 175 | 5,718 | 3.06% |
| 產品摘要 | 1 | 41 | 2.44% |
| 影片 | 1 | 71 | 1.41% |

---

## 三、Generative AI 功能成效（AI Overviews 等）

- 期間總曝光 52,952；趨勢：620–723/日（6 月底）→ **263–541/日（9 月）**，9/18 = 263 為全期新低，與整體曝光下滑同步
- 裝置：桌面 33,693（64%）、行動 18,668
- 國家：美國 8,877 > 台灣 7,871 > 巴西 2,894 > 印尼 2,366 > 德國 2,303
- Top 頁面：`voice.seasalt.ai/discord/` 16,661（31%）、`meet.seasalt.ai/zh-tw` 2,555、`wiki/en/seax/seax-omni/whatsapp-coexistence/` 1,347、blog 26 系列（ja/pt/vi 合計 ~3,000）

---

## 四、涵蓋範圍（Coverage）

### 4.1 曲線（圖表資料）

| 日期 | 已索引 | 未索引 |
|---|---|---|
| 06-30 | 5,255 | 28,217 |
| 07-11 | 8,048 | 24,148 |
| 07-25 | **8,162**（高峰） | 23,572 |
| 08-22 | 7,160 | 20,332 |
| 08-29 | 6,715 | 20,493 |
| **09-05** | 6,985 | **14,226**（單次 -6,267） |
| 09-18（最新） | 6,985 | 14,358 |

9/5 未索引階梯式下降與 09-11 修復部署（轉址樁 + sitemap 清理）方向一致，404 與重新導向類別預期數週內逐步消化。

### 4.2 問題分類（最新快照）

| 原因 | 網頁數 | 驗證狀態 |
|---|---|---|
| 找不到網頁 (404) | 2,074 | 尚未開始 |
| 頁面會重新導向 | 1,635 | 尚未開始 |
| 替代頁面（有適當的標準標記） | 662 | 尚未開始 |
| 遭到「noindex」標記排除 | 13 | 尚未開始 |
| 401 未授權 | 4 | 尚未開始 |
| 其他 4xx | 2 | 尚未開始 |
| 伺服器 5xx | 2 | 尚未開始 |
| robots.txt 封鎖 | 2 | 尚未開始 |
| 已檢索–目前尚未建立索引 | 5,645 | 尚未開始 |
| 已找到–目前尚未建立索引 | 4,246 | **通過** |
| 重複（使用者未選取標準） | 38 | 尚未開始 |
| 重複（Google 選擇與使用者不同） | 35 | 尚未開始 |

### 4.3 已索引頁面樣本分析（表格.csv，GSC 匯出上限 1,000 筆）

語言分佈（seasalt.ai 主站）：`en` 261、`fil` 110、`de` 60、`ar` 50、`es` 44、`zh-CN` 42、`zh-TW` 35、`ms` 31、`fa` 29、`fr` 28…

主機分佈：

| 主機 | 索引數 | 註記 |
|---|---|---|
| seasalt.ai | 879 | 正常 |
| wiki.seasalt.ai | 33 | 正常 |
| 🔴 **newweb.seasalt.ai** | **24** | 開發站被索引（Filipino/pl/hi/vi/es 頁面，9 月仍持續被檢索） |
| 🔴 **main-dev.seasalt.ai** | **20** | 開發站被索引（/blog/*、/tags/*、/privacy，9/9–9/18 仍被檢索） |
| chat.seasalt.ai | 19 | 含私人對話頁 |
| meet.seasalt.ai | 10 | 正常 |
| api.seasalt.ai | 5 | API 文件/分類頁 |
| suite.seasalt.ai | 4 | `/tts`、`/stt` 產品頁 |
| seax / voice / code | 3 / 2 / 1 | — |

另：主站根路徑舊 URL（`/blog/*` 18、`/chat` 14、`/tags/*` 4 筆）仍在索引 — 預期由 stub 自然淘汰。

---

## 五、檢索統計（Crawl Stats，90 天）

### 5.1 主機檢索量

| 主機 | 檢索要求 | 狀態 |
|---|---|---|
| chat.seasalt.ai | **2,036,275（81%）** | 沒有問題 |
| meet.seasalt.ai | 332,161 | 沒有問題 |
| seasalt.ai | 67,925 | 沒有問題 |
| m.seasalt.ai | 42,965 | 過去曾發生問題 |
| seax.seasalt.ai | 32,570 | 沒有問題 |
| wiki.seasalt.ai | 3,168 | 沒有問題 |
| newweb.seasalt.ai | 2,657 | 沒有問題 |
| main-dev.seasalt.ai | 2,210 | 沒有問題 |
| suite.seasalt.ai | 957 | **上週曾發生問題** |
| usecase.seasalt.ai | 60 | **上週曾發生問題** |
| api.seasalt.ai | 408 | 過去曾發生問題 |

與 09-11 相比：chat 的檢索量 2,366,020 → 2,036,275（略降），但 SPA 檢索成本結構不變。

### 5.2 其他

- 回應：OK 98.51%、404 0.30%、301 0.30%
- 檔案類型：**JavaScript 58.1% + JSON 20.0% + HTML 19.3%**（chat SPA 主導）
- 目的：重新整理 98.84%（幾乎無「發現方式」檢索 — 內部連結發現力低）
- 檢索高峰：7/24（81,510 次 / 回應 1,553ms）、8/29（82,570 / 1,274ms）、8/27（50,118 / 1,304ms）
- 每日檢索 9 月約 15K–33K

---

## 六、增強項目（Enhancements）

| 報告 | 無效 | 有效 | 備註 |
|---|---|---|---|
| Breadcrumbs | 0 | 456 | 7/9 高峰 700 → 穩定 ~450 |
| HTTPS | 0 | ~550 | 無問題 |
| Review snippets | 0 | 80 | 帶來 175 點擊 / 5,718 曝光 |
| **Videos（影片增強）** | 0 | **15**（9/12 起 0→12→15） | 🟢 09-11 VideoObject JSON-LD 修復開始生效；1 個非重大問題：「description 欄位未填」（1 項） |
| Video indexing（影片索引） | — | 1 | 🔴「影片不在觀賞頁面上」**186 → 218 惡化**；唯一被索引影片為 `wiki/seachat/inbound-voice-agent/tutorial/` 的 YouTube embed |
| Core Web Vitals（行動） | 不良 10 | 良好 385 | 需改善 22：CLS>0.1（22 URL）、LCP>4s（10 URL）、INP>200ms（7 URL）；最大群組 `vi/blog/26-...`（339 人次）、`en/integrations/google-ai-studio/whatsapp/`（46） |

> Videos「有效 15」≠ Video indexing「已索引 1」：前者是 VideoObject 結構化資料被解析成功，後者是影片真正進入影片索引。218 支「不在觀賞頁面上」需讓影片在頁面上更顯著（專屬觀賞頁 / 放大 embed），非僅加 JSON-LD。

---

## 七、反向連結（Latest Links）

- 12,019 個連結頁面 / **1,925 個網域**
- Top 來源：`seameet.ai` 2,651、`dev.seameet.ai` 2,235（自家人）、`toolify.ai` 228、`taiwantrade.com.tw` 215、`tiba.org.tw` / `ticc.com.tw` 208、`top.gg` 206、Reddit 144
- 結構健康：外部連結以目錄/展覽/工具站為主，top.gg 持續輸送 Discord 頁權重

---

## 八、修復部署驗證（2026-09-21 線上實測）

| 檢查項 | 結果 |
|---|---|
| `seasalt.ai/seavoice/` | ✅ 200（語言偵測樁已上線） |
| `seasalt.ai/blog/48-how-to-utilize-custom-chatpot-in-marketing/` | ✅ 200（舊 blog 樁已上線） |
| `seasalt.ai/es/integrations/markate` | ⚠️ HTTP 404 + 404.html rewrite 引擎（設計如此：client-side 轉到 `/en/integrations/markate/`） |
| sitemap-index.xml / sitemap.xml lastmod | ✅ 2026-09-11（修復版已部署） |
| sitemap 含 `/404` 條目 | ✅ 0 筆 |
| sitemap 尾斜線 | ⚠️ 3 筆例外（外部 URL：`voice.seasalt.ai/discord/zh-tw`、`suite.seasalt.ai/stt`、`suite.seasalt.ai/tts`） |
| sitemap 規模 | sitemap.xml 5,106 + hreflang 248 + zapier 6,281 |
| `voice.seasalt.ai` 301 目標、`chat.seasalt.ai/chat/**` noindex | 🔴 未驗證通過 — 私人頁仍索引（見下） |

### 8.1 ⚠️ 匯出遺漏：Coverage「重新導向錯誤」（Redirect error）

**GSC 有新的「重新導向錯誤」警示，但本次匯出漏掉了**：

- 匯出工具的 debug 截圖 `seasalt.ai-Coverage-Redirect-error-required-miss-1789950835960.png`（2026-09-21 08:33:55）顯示偵測到該報告但**匯出失敗**（required-miss）
- 對照組：seameet.ai 同日有 `Coverage-Redirect-error-2026-09-21/` 資料夾，seasalt.ai 沒有
- `Coverage-2026-09-21/重大問題.csv` 中也沒有該列 → 本報告第四章的問題分類**不包含此新 issue**，受影響 URL 清單待下輪匯出補齊

**線上實測找到的嫌疑來源（2026-09-21）**：

| URL | 實測結果 | 判定 |
|---|---|---|
| `https://usecase.seasalt.ai/` | DNS → `pages.mailerlite.com`（35.204.112.174），**HTTPS 握手失敗（TLS internal error）**；HTTP 回 308 | 🔴 自訂網域的 MailerLite Pages 已失效 — 任何轉址到此主機的 URL 都會被 Googlebot 記為「重新導向錯誤」；與 Crawl stats「usecase 上週曾發生問題」互相印證 |
| `voice.seasalt.ai/` | 301 → `seasalt.ai/seavoice`（**無尾斜線**）→ 301 → `/seavoice/` → 200 | ⚠️ 兩跳鏈（AWS 301 目標未改為 `/seavoice/`，09-11 Phase 2 待辦未完成）；可正常完成，非錯誤 |
| `chat.seasalt.ai/` | 301 → `seasalt.ai/seachat` → 301 → `/seachat/` → 200 | ⚠️ 同上 |
| `seasalt.ai/{page}`（無尾斜線） | 301 → 加斜線 → 200 | ✅ GH Pages 正常行為 |

**結論**：「重新導向錯誤」最可能來自 `usecase.seasalt.ai` TLS 失效（及潛在其他死目標）。處理：修復 MailerLite Pages 網域設定，或將該子網域改 301 回主站對應頁。

### 8.2 🔴 Canonical 交叉指向 + hreflang 損毀（「Google 選擇的標準網頁和使用者的選擇不同」35 筆的根因）

GSC Coverage 有兩個「重複網頁」問題：**「Google 選擇的標準網頁和使用者的選擇不同」35 筆**、「使用者未選取標準網頁」38 筆。匯出檔只給數字不給 URL，改以程式碼 + 線上實測追查，**找到三個實際 bug（均已於本 repo 修復，待部署）**：

**Bug A — hreflang 產生器 regex 吃掉路徑前兩個字母（線上現跡）**

`SEO.astro` 自動 hreflang 用寬鬆 regex `^\/[a-z]{2}(-[a-z]{2})?` 剝語系前綴，但它會比對**任何**路徑的前兩個字母：`/channels/sms` → `annels/sms`，輸出 `https://seasalt.aiannels/sms`、`https://seasalt.ai/esannels/sms` 等垃圾 URL（每頁 23 個 alternate 全壞）。
實證：`https://seasalt.ai/en/channels/sms/` 原始碼可見 `hreflang="es" href="https://seasalt.ai/esannels/sms"`。

**Bug B — 10 類頁面的 EN canonical 指向 root stub（canonical 交叉迴圈）**

`sms` / `whatsapp` / `phone-calls` / `solutions/{customer-support, sales-marketing, ai-automation, sme-owners}` / `seachat/features/{api, ai-automation}` / `IndustryPageTemplate（industries/*）` 的 EN 版 canonical 寫成 root 無前綴 URL：

```
/en/channels/sms/（真頁）  canonical → /channels/sms（stub）
/channels/sms/（stub）     canonical → /en/channels/sms/（真頁）
```

兩頁互相指對方 → Google 兩邊訊號矛盾 → 自行選擇 → 「Google 選擇的標準網頁和使用者的選擇不同」。同時 EN hreflang 也指向 stub。

**Bug C — 全站 canonical/hreflang 無尾斜線**

GH Pages 對無斜線 URL 一律 301 → 斜線版。canonical 指向一個會 301 的 URL = 弱訊號，Google 常改選斜線版（又一個「和使用者選擇不同」來源）；對 5,106 個 sitemap URL 而言也是次佳化。

**修復內容（2026-09-21，本機 build 驗證通過）**

| 檔案 | 修改 |
|---|---|
| `src/components/SEO.astro` | (1) canonical 統一補尾斜線（同站、非檔案路徑）；(2) hreflang 剝前綴改用**已知語系清單** regex（杜絕 `aiannels` 垃圾）；(3) EN hreflang 由 root 改為 `/en/...`（root 是 stub）；(4) x-default 跟著指向 `/en/...` |
| `channels/{sms,whatsapp,phone-calls}.astro` | EN canonical 移除 root 特例 → `/${lang}/...`（自我參照） |
| `solutions/{customer-support,sales-marketing,ai-automation,sme-owners}.astro` | 同上 |
| `seachat/features/{api,ai-automation}.astro` | 同上 |
| `components/IndustryPageTemplate.astro` | 同上（`/industries/*`） |

**Build 驗證**（`npm run build` + dist 抽查）：

- `en/channels/sms`：canonical `https://seasalt.ai/en/channels/sms/` ✅、hreflang en/es/zh-TW 全為 `/en/ /es/ /zh-TW/` ✅、垃圾 URL 0 個 ✅
- `zh-TW/channels/whatsapp`、`en/solutions/customer-support`、`en/industries/automotive-services`、integrations、blog、首頁：全部自我參照 + 尾斜線 ✅
- `check-slugs` 通過；astro check 錯誤均為既有歷史問題（SEO.astro 錯誤位於未修改的 JSON-LD/script 區段）

**部署後預期**：「Google 選擇不同 canonical」35 筆與「替代頁面」662 筆逐步收斂；交叉訊號解除後 stub 的 canonical（→ /en/…）開始被尊重。部署清單：build → gh-pages → GSC 重新驗證。

### 8.3 第二輪全站掃描與修復（2026-09-21，build 驗證通過）

對 build 產出（11,340 個真實頁面 + 6,581 個 stub）做系統化複掃，再修 4 項：

| # | 問題 | 證據 | 修復 |
|---|---|---|---|
| R1 | **Blog 文章 hreflang 盲列全 21 語**：blog 模板未傳 `alternateUrls`，SEO.astro 無條件補滿 21 語 → 缺文語言指向 stub 或 404（如 `es/blog/81-SeaChat-vs-SAP-chatbot` 宣稱 en/zh-TW 等 8 個不存在的版本；es/fa 版 81 與他語的 81 是不同文章） | dist 掃描 61 筆 hreflang → 不存在目標 | `[...slug].astro` 改由實際內容集合計算 `blogAlternateUrls`（僅列存在翻譯 + 自身） |
| R2 | `zh-TW/channels/line-call-plus` 僅 zh-TW 存在，卻輸出 21 語 hreflang（20 個壞連結） | 同上 | 頁面明確傳 `alternateUrls={{ 'zh-TW': ... }}` |
| R3 | VideoObject `description` 可為空（GSC Videos 報告 1 筆「description 欄位未填」，N5） | `entry.data.description` 無 fallback | 改 `entry.data.description \|\| entry.data.title` |
| R4 | sitemap 3 個外部 URL 無尾斜線（N14）| `voice/discord/zh-tw`、`suite/stt`、`suite/tts` | generate-sitemap.js 統一補斜線（實測兩種形式皆 200，無 301 問題，僅一致性） |

**修復後全站複掃結果（11,340 頁）**：缺 canonical 0、canonical 非自我參照 0、hreflang 指向不存在頁面 0、`check-slugs` 通過。

**Code review 後補強（同日）**：(1) `SEO.astro` 一律 clone URL 物件，不再就地變異共用的 `Astro.url`（避免尾斜線副作用洩漏給同請求的其他元件）；(2) `normalizeAltPath` 對同站絕對 URL 也做尾斜線正規化（與 generate-sitemap.js 行為同步），外站 URL 保持不動；重新 build 後複掃仍全數歸零。

**外部主機附帶發現**：`voice.seasalt.ai/discord/zh-tw(/)`、`suite.seasalt.ai/stt(/)`、`tts(/)` 兩種形式皆 200 且**皆無 canonical** → AWS 端重複內容（本 repo 無法修，轉 backend 團隊）。

---

## 九、問題清單與建議行動

### 🔴 高優先

| # | 問題 | 證據 | 行動 |
|---|---|---|---|
| N1 | **私人對話頁仍被索引**（P9 未修，Phase 2 待辦） | `chat.seasalt.ai/chat/4ec0dfb0...` 218 點擊 / 13,112 曝光；Coverage 仍有該頁 | AWS 後端加 `X-Robots-Tag: noindex` + GSC 申請移除（09-11 計畫 Phase 2 原封不動） |
| N2 | **曝光持續下滑、9/17–18 創新低** | 8,100 → 4,940/日；9/18 = 2,874 | 兩週後複查；對照 8/29–31 低點（當時 4,100）已跌破；排查是否特定頁面（voice/discord）排名滑落 |
| N3 | **開發/預備主機被索引**（新發現） | `newweb.seasalt.ai` 24 頁、`main-dev.seasalt.ai` 20 頁（main-dev 還拿 4 點擊）；`api`、`suite`、`code` 亦有 | dev 站加 noindex meta / X-Robots-Tag，或以 basic auth 阻擋；GSC 移除 |

### 🟡 中優先

| # | 問題 | 證據 | 行動 |
|---|---|---|---|
| N4 | 影片索引惡化 | 「不在觀賞頁面上」186 → 218 | 影片 embed 提升至頁面主體（專屬觀賞段落/頁），而非僅 JSON-LD（已生效 15 筆但不足） |
| N5 | ~~Videos 非重大問題~~（**已修復**，R3） | 1 筆 description 未填 | ✅ VideoObject description 加 title fallback |
| N6 | CWV 行動版 | CLS>0.1：22 URL（最大群組 vi/blog/26，339 人次）；LCP>4s：10；INP>200ms：7 | 針對 blog 26 各語版本做 CLS 檢查（影片 embed 尺寸、字體載入） |
| N7 | 404 / 重新導向待消化 | 2,074 / 1,635（stub 已上線） | GSC 針對「找不到網頁」按「驗證修正」；預期 2–6 週下降 |
| N8 | Discovered/Crawled–未索引仍 9,891 | 4,246 + 5,645 | 屬品質訊號；stub 整併 canonical 後觀察；低品質長尾可接受 |
| N9 | suite / usecase / m / api 主機檢索異常 | Crawl stats 狀態標記 | 確認服務可用性（09-11 即通報 suite，仍未解） |
| N15 | **Coverage「重新導向錯誤」新警示（匯出遺漏）** | 匯出工具 required-miss（08:33:55）；`usecase.seasalt.ai` HTTPS TLS 握手失敗（MailerLite Pages 失效）；voice/chat 301 目標仍為無斜線版（兩跳鏈） | 修復或下線 usecase 子網域；AWS 301 目標改 `/seavoice/`、`/seachat/`（含尾斜線）；下輪 GSC 匯出補抓 Redirect error 明細 |
| N16 | ~~Canonical 交叉指向 + hreflang 損毀~~（**已修復 2026-09-21，待部署**） | GSC「Google 選擇不同 canonical」35 筆 + 「替代頁面」662 筆；根因=EN canonical 指 root stub（10 類頁面）、hreflang regex 剪壞路徑（`seasalt.aiannels/...`）、全站 canonical 無尾斜線 — 詳見 §8.2 | 部署 build（gh-pages）→ GSC 兩個重複問題按「驗證修正」 |

### 🟢 機會 / 低優先

| # | 項目 | 證據 | 行動 |
|---|---|---|---|
| N10 | 美國 CTR 0.79%（P11 未變） | 157,707 曝光只拿 1,242 點擊 | `voice.seasalt.ai/discord/` title/meta 重寫（tts bot discord 詞組 7 萬+曝光、CTR <1%）；補 EN 版 Discord 教學文（德文版 866 點擊已證明） |
| N11 | Generative AI 曝光下滑 | 626 → 263/日 | 與 N2 同步觀察；強化 wiki 教學內容結構（已在 AI 引用 Top 3） |
| N12 | fa 語機會 | 波斯語 AI 電話秘書詞組 CTR 13–20%、排名 2–6 | 增加 fa 語 voice agent 內容 |
| N13 | 檢索預算 | chat.seasalt.ai 佔 81%、JS+JSON 78%；「發現方式」檢索僅 1.2% | chat SPA 加內部連結/sitemap；長期：SSR 或預渲染 |
| N14 | ~~sitemap 3 筆外部 URL 缺尾斜線~~（**已修復**，R4） | voice/discord/zh-tw、suite/stt、suite/tts | ✅ 已補斜線；另發現這些外部頁兩種形式皆 200 且無 canonical（AWS 端重複內容，轉 backend） |
| N17 | ~~Blog hreflang 盲列 21 語 + line-call-plus 壞連結~~（**已修復**，R1/R2） | 61 筆 hreflang 指向不存在頁面 | ✅ 詳見 §8.3；部署後 GSC「重複網頁」類別應進一步收斂 |

---

## 十、追蹤計畫

1. **兩週後（~10/05）**：曝光是否止跌（N2）、404/redirect 消化進度（N7）、影片索引數（N4）
2. **立即**：N1（私人頁 noindex）、N3（dev 站 noindex）— 皆為一次性後端/基建修改
3. 下一輪 GSC 匯出直接覆蓋比對本檔數字（本檔所有基準值已表格化）

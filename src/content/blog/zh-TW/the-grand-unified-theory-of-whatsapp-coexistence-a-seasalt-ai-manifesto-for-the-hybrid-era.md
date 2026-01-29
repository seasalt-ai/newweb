---
author: SeaMeet Copilot
category: 商務訊息
date: '2026-01-29'
meta_description: 了解 Seasalt.ai 的 WhatsApp Coexistence 如何彌合商務應用程式與 API 之間的差距，在混合時代實現人機協作以提供無縫的客戶體驗。
modified_date: '2026-01-29'
tags:
- WhatsApp Coexistence
- Seasalt.ai
- API
- 商務應用程式
- 混合時代
- 客戶體驗
- AI 協作
title: WhatsApp Coexistence 大統一理論：Seasalt.ai 混合時代宣言
url: /blog/the-grand-unified-theory-of-whatsapp-coexistence-a-seasalt-ai-manifesto-for-the-hybrid-era
---
# **WhatsApp 共存的大統一理論：Seasalt.ai 混合時代宣言**

## **1. 引言：「非此即彼」時代的終結** 

近十年來，商務訊息領域被一個鮮明且令人沮喪的二元對立所分割。一邊是 **WhatsApp Business App**——深受小企業主喜愛的工具，可直接從智慧型手機存取，親密、手動且免費。另一邊則是 **WhatsApp Business Platform (API)**——企業的強大動力，能夠實現大規模運作、自動化和深度 CRM 整合，但在功能上無法感知行動裝置上人工代理的手動操作。

企業被迫做出選擇。他們想要人際連結的同理心，還是機器的效率？他們想要在手機上保留聊天記錄，還是為了獲得聊天機器人的存取權而抹去一切？這種二分法阻礙了成長。它迫使擴張中的企業放棄客戶信任的電話號碼，或者更糟的是，陷入無法擴展的手動工作流程中。

但形勢已變。我們已進入 **WhatsApp 共存** 時代。

這不僅僅是一項功能更新；它是我們對客戶體驗 (CX) 構想的範式轉變。在 **Seasalt.ai**，我們長期以來一直倡導這樣的理念：未來不是「人類 *對抗* AI」，而是「人類 *加* AI」。共存是這一信念的技術體現。它允許單一電話號碼同時在 WhatsApp Business App 和 Cloud API 上運作。1 它彌合了分歧，創造了一個統一的生態系統，小企業主可以在口袋裡回覆 VIP 客戶，同時 SeaChat AI 代理在後台處理數千張支持票。3

在這份詳盡的報告中，我們將深入探討共存的最深層技術細節和最高戰略層面。我們將剖析「鏡像」的架構、webhook 路由的複雜性、新定價模式的經濟學，以及定義 **Seasalt.ai** 協作聯絡中心的「人在迴路中」工作流程。我們是這些資訊的掌控者，並將王國的鑰匙交給你。

### **1.1 Seasalt.ai 的願景：協作智能**

共存為何重要？因為客戶並不關心你的技術堆疊；他們關心的是解決問題。當客戶向企業發送訊息時，他們期望機器人的速度和人類的理解。

**Seasalt.ai** 平台建立在「協作智能」的前提下。我們認為，AI 代理應被視為數位員工——一個永不休息、即時召回知識庫 (KB) 中的每一次互動，並將複雜的情感任務無縫移交給人類同事的員工。4 共存通過讓人工代理實際「處於迴路中」來實現這一點。不同於傳統的 API 設置，在傳統設置中，企業主除非登入網頁儀表板，否則無法看到機器人的對話，共存會將每一次機器人互動鏡像回手機上的 WhatsApp Business App。1 人類可以即時觀看 AI 的工作，僅在必要時進行干預。這種透明度建立了對自動化的信任，並確保沒有客戶會陷入迴圈而無人問津。

## **2. 共存的架構：鏡像如何運作 🪞**

要掌握共存，必須了解 Meta 基礎設施內發生的複雜協調。這是一場微妙的同步、吞吐量管理和雙交付協議之舞，旨在使兩個根本不同的平台保持完美和諧。

### **2.1 訊息鏡像的機制**

共存的核心是 **訊息鏡像** 的概念。當電話號碼通過啟用共存的嵌入式註冊流程加入 Cloud API 時，架構從單管交付轉變為雙播系統。

1. **入站鏡像（User ![][image1] Business）：** 當客戶傳送訊息時，Meta 的伺服器會同時將其傳遞到兩個目的地。首先，它會被推送至安裝在實體裝置（或連結的伴隨裝置）上的 **WhatsApp Business App**。其次，包含訊息詳情的 JSON 承載會被 POST 到為 Cloud API 配置的 **Webhook URL**。1 這可確保手持手機的人工代理和監聽伺服器的 AI 代理即時察覺新的查詢。  
2. **出站鏡像（Business ![][image1] User）：**  
   * **透過 App：** 如果人工透過 Business App 手動回覆，訊息會被傳送給用戶。至關重要的是，一個特定的 webhook 事件（smb_message_echoes）會被傳送至 API，以通知後端系統已發生手動回覆。5 這個「回聲」是同步的心跳機制，讓 AI 知道它應該暫停運作。  
   * **透過 API：** 如果 AI 透過 Cloud API 回覆，訊息會被傳送給用戶，並且也會「回聲」至 Business App 的聊天記錄中。1 這可確保人工代理擁有機器人所承諾或解釋內容的完整紀錄。

### **2.2 吞吐量限制：20 MPS 上限**

雖然 Cloud API 理論上能夠處理大量的訊息流量（企業級別通常超過每秒 80 則訊息），但共存模式施加了嚴格的物理限制。為了維持行動裝置上的資料庫完整性，並確保 Business App 不會因輸入資料過多而當機，Meta 對所有處於共存模式的號碼強制實施 **每秒 20 則訊息（MPS）的固定吞吐量限制**。1  

此限制是一項關鍵的架構性制約。這意味著共存模式是為 *對話式* 工作負載而設計的，例如客戶支援、銷售查詢和中等數量的通知，而非高頻率廣播或大規模公用訊息（如全國性緊急警報）。如果企業試圖透過共存模式號碼推送 100 MPS 的流量，API 將會限制流量以保護行動應用程式的同步。  

**對架構師的影響：** 在設計共存模式的解決方案時，開發人員必須在其訊息佇列（例如，利用 Redis 或 RabbitMQ）中實作 **令牌桶** 或 **漏桶** 演算法，以管理出站流量。系統必須以嚴格低於 20 MPS 的速率發送訊息，以避免速率限制錯誤（HTTP 429）或不同步問題。1  

### **2.3 裝置拓撲與限制**  

轉向共存模式從根本上改變了 WhatsApp 帳戶的裝置圖。標準的 WhatsApp Business 帳戶支援「伴隨模式」，最多允許 4 個（Meta 驗證帳戶為 10 個）連結裝置。7 然而，共存模式的上架流程會觸發此拓撲的重置。  

* **解除連結事件：** 成功上架至 Cloud API 後，所有先前連結的伴隨裝置（WhatsApp Web、桌面版）都會被有效解除連結並登出。企業管理員必須在轉換後手動重新連結這些裝置。1  
* **作業系統差異：** 在共存模式中，並非所有伴隨裝置都受到同等對待。雖然標準的網頁和桌面用戶端支援訊息鏡像，但 **WhatsApp for Windows** 和 **WhatsApp for WearOS** 歷來在 smb_message_echoes webhook 方面面臨限制。1 這表明同步協議針對主要行動作業系統（Android 和 iOS）和基於網頁的協議進行了大量最佳化，而原生桌面應用程式有時在 webhook 一致性方面落後。  

**不支援的功能：**  

為了追求穩定性，某些豐富功能在通過共存橋接時會被停用或移除：  

* **群組聊天：** Cloud API 並不支援與 App 相同的群組邏輯。因此，群組聊天 **不會同步**。1 API 仍然是嚴格的一對一通道。  
* **短暫內容：** 在共存模式下，一對一聊天中的「一次性查看」媒體和「即時位置」共用等功能被停用。1 這是一項隱私和技術保護措施，因為 API 無法以符合 App 功能短暫性質的方式持久儲存或處理短暫資料。  

## **3. 上架歷程：嵌入式註冊與遷移 🚀**  

進入共存模式的途徑是 **嵌入式註冊**。這是企業授予合作夥伴（如 **Seasalt.ai** 或 **360dialog**）透過 API 管理其訊息的權限的機制，同時在 App 上保留其號碼。這是一個精確的工作流程，需要特定的技術標誌才能成功。  

### **3.1 "FeatureType" 標誌：祕密握手**  

對於標準的 API 上架，開發人員只需啟動 Facebook 登入流程。然而，要觸發共存流程（該流程會明確詢問用戶是否要保留其現有的 App 歷史記錄），開發人員必須向 SDK 注入特定的配置。

Facebook 登入設定中的 extras 物件必須包含設定為 whatsapp_business_app_onboarding 的 featureType 參數。1  

當此旗標存在時，導入精靈會改變其行為。它不會強制使用者刪除帳戶或選擇新號碼，而是顯示一個畫面，提供**「連接您現有的 WhatsApp Business 帳戶」**選項。1  


### **3.2 資料同步視窗：24 小時有效期**  

共存模式相較於舊版 API 遷移的其中一個深遠優勢是**歷史保留**。過去，遷移至 API 意味著失去所有聊天記錄。共存模式允許匯入最近**6 個月**的對話歷史。8  

然而，這並非永久存取狀態。它是一個**暫時性的操作視窗**。  

* **計時器：** 一旦使用者完成嵌入式註冊流程，合作夥伴（開發者）有整整**24 小時**的時間來請求初始歷史同步。1  
* **機會：** 這個 24 小時視窗對 AI 訓練至關重要。在**Seasalt.ai**，我們利用這個視窗將歷史互動資料匯入我們的**SeaChat** RAG（檢索增強生成）系統。3 透過分析 6 個月的人工引導對話，AI 代理可以在發送第一條自動訊息之前，「學習」企業的特定語氣、常見問題和產品細節。  

**技術備註：** 歷史同步包含文字和媒體，但排除隱私敏感的臨時訊息。開發者必須準備好高吞吐量的匯入管道（例如，使用**Supabase**或**MongoDB**），以在導入時立即吸收此資料峰值。9  


### **3.3 驗證困境：失去藍標**  

對於擁有高品牌資產的企業而言，一項關鍵的「二階洞察」是**官方企業帳戶（OBA）**的狀態——即令人垂涎的綠標或藍標。  

* **下降：** 文件確認 OBA 狀態**不會自動從應用程式轉移**至 API。10 當已驗證號碼導入雲端 API 時，可能會暫時失去其標誌。  
* **恢復：** 企業必須透過 API 驗證流程重新申請 OBA 狀態。這涉及再次提交新聞報導和網域驗證。  
* **策略：** 應建議企業在觸發遷移*之前*準備好驗證文件，以縮小「信任缺口」——即未經驗證的期間。  


## ---  


**4. 網鉤神經系統：解析脈搏 💓**  

如果說共存模式是軀體，那麼**網鉤**就是神經系統。在標準 API 設定中，您會監聽訊息。在共存模式中，您必須監聽*狀態變更*和*回聲*。  


### **4.1 「SMB」網鉤家族**  

Meta 推出了一組特定的網鉤欄位，以 smb_ 為前綴，用於處理混合帳戶的獨特需求。5  

| 網鉤欄位          | 承載描述                  | 策略功能                                                                 |
| :----             | :----                     | :----                                                                    |
| messages          | 標準入站訊息物件。        | **耳朵：** 監聽客戶查詢以觸發 SeaChat AI。                               |
| smb_message_echoes | 透過應用程式發送的出站訊息。 | **靜音器：** 告知 AI 已有人工手動回覆。對交接邏輯至關重要。               |
| smb_app_state_sync | 聯絡人清單更新（新增/編輯）。 | **名片夾：** 將手機上儲存的新聯絡人同步至中央 CRM/Seasalt.ai 儀表板。     |
| history           | 歷史訊息傾印。            | **記憶體：** 提供 6 個月的歷史資料以供 AI 訓練/RAG 匯入。                 |  


### **4.2 處理用於狀態管理的「回聲」**  

smb_message_echoes 網鉤是共存模式最獨特的功能。它包含企業用戶在手機上輸入的訊息內容和中繼資料。  

* **洞察：** 這允許進行「影子監控」。即使 AI 未啟用，系統仍可分析人工手動回覆以進行品質保證（QA）或情緒分析。  
* **風險：** 如果開發者未訂閱此欄位，AI 將對人工操作一無所知。機器人可能會在人工已解決問題後仍回覆使用者，使企業看起來雜亂無章。  


### **4.3 網鉤安全性與備援**  

由於共存架構依賴這些即時訊號來防止「機器人-人工衝突」，因此網鉤端點的可靠性至關重要。  

* **架構：** 我們建議使用無伺服器架構（例如，AWS Lambda 或 Google Cloud Functions）來處理網鉤匯入。這些函式應僅執行驗證 X-Hub-Signature（安全性）、將承載推送至佇列（SQS/PubSub），並立即返回 200 OK 狀態的操作。11  
* **原因：** 如果端點處理邏輯耗時過久（例如，在網鉤處理程式中直接呼叫 OpenAI API），Meta 將使請求逾時並重試，可能導致重複處理。將工作卸載至佇列可確保立即發送 200 OK，保持管道暢通。11  


## **5. 路由與覆寫協定：多合作夥伴網絡 🕸️**

隨著企業成熟，它們通常會超越單一軟體供應商。它們可能希望使用 **Seasalt.ai** 作為其 AI 聊天機器人、**Twilio** 作為其 OTP 身份驗證，以及專用載波進行語音通訊。WhatsApp 的「覆寫」架構使這一切能夠在單一電話號碼上實現。


### **5.1 Webhook 覆寫層級**  

Meta 的基礎設施允許根據特定性層級對 webhook 進行細粒度路由。這是共存的「流量控制」系統。¹³  

1. **第 1 級：電話號碼覆寫（最高優先級）**  
   * **邏輯：**「如果此特定電話號碼收到事件，則將其傳送至 URL X，無論 WABA 如何設定。」  
   * **使用案例：** 一個加盟 WABA 有 50 個地點。地點 A 想要使用 SeaChat；地點 B 使用舊系統。覆寫功能允許地點 A 的號碼路由到 SeaChat 的 webhook，而不會影響地點 B。  
   * **API：** POST /\<PHONE_NUMBER_ID\>/subscribed_apps 並帶有 override_callback_uri。¹³  
2. **第 2 級：WABA 覆寫（中等優先級）**  
   * **邏輯：**「如果沒有電話號碼覆寫，則將此 WABA 的所有事件傳送至 URL Y。」  
   * **使用案例：** 品牌希望將其整個帳戶遷移到新供應商。  
3. **第 3 級：應用程式預設（最低優先級）**  
   * **邏輯：**「如果沒有覆寫，則傳送至應用程式儀表板中定義的 URL。」  


### **5.2 聊天與語音拆分**  

Cloud API 的一項複雜功能是能夠在同一號碼上分隔 **訊息** 和 **通話** 提供商。  

* **設定：** 企業可以將其號碼連接到合作夥伴 A（例如 Seasalt.ai）以獲取訊息 webhook，並連接到合作夥伴 B（例如 VoIP 提供商）以獲取語音 webhook。¹⁴  
* **好處：** 這允許使用「最佳組合」堆疊。企業可以獲得 SeaChat 用於文字的世界級 NLP，以及專用電信載波用於通話的高保真語音終端。  
* **配置：** 這是通過僅讓各個應用程式訂閱它們所需的特定欄位來管理的。應用程式 A 訂閱訊息；應用程式 B 訂閱 voice_status 和 call_log。¹⁴  


## **6. 共存的經濟學：混合模式的套利 💰**  

共存模式帶來了獨特的經濟機會：能夠在「免費」商務應用程式和「付費」API 之間進行套利。了解 **對話類別** 是實現 ROI 的關鍵。  


### **6.1 四大成本類別**  

截至 2025 年年中，WhatsApp 根據特定模板類別啟動的 24 小時對話視窗收費。¹⁵  

| 類別         | 描述                 | 成本概況       | Seasalt.ai 最佳化策略                          |
| :----------- | :------------------- | :------------- | :---------------------------------------------- |
| **行銷**     | 促銷、優惠、更新。   | $$$（最高）    | 謹慎使用。透過 Seasalt.ai 進行受眾細分以確保高轉換率。 |
| **公用**     | 訂單更新、收據。     | $$（中等）     | 透過 API 自動化。經營業務的必要成本。            |
| **身份驗證** | OTP、登入碼。        | $（最低）      | 高容量、低成本。對安全性至關重要。              |
| **服務**     | 用戶發起的查詢。     | 免費（大部分） | 最佳點。所有 AI 支援流量都位於此處。            |  


### **6.2 共存套利策略**  

共存的真正力量在於這些成本與手動應用程式的交互方式。  

1. **入站免費：** 當用戶向企業發送訊息（服務對話）時，24 小時視窗開啟。在此視窗中，企業可以用 *自由格式* 訊息回覆。  
   * *應用程式：* 手動回覆免費。  
   * *API：* 機器人回覆免費（無模板成本）。  
   * *結果：* 只要用戶發起聊天，**SeaChat** 每月可以解決 10,000 張支援票，而 WhatsApp 費用為 **$0**。¹⁵  
2. **透過應用程式進行出站培育：** 行銷模板成本高昂。然而，在共存模式下，銷售人員可以透過商務應用程式向潛在客戶發送 *手動* 後續訊息。由於這是來自應用程式的手動 1:1 訊息，因此 **不會產生 API 成本**。¹⁶  
   * *注意事項：* 這無法擴展。它非常適合完成高價值交易（VIP），但無法用於大眾行銷。  
3. **72 小時廣告視窗：** 當用戶點擊 **點擊進入 WhatsApp (CTWA)** 廣告時，免費進入點視窗延長至 **72 小時**。¹⁷  
   * *策略：* 使用廣告驅動流量。一旦用戶點擊，SeaChat 有 3 天的時間免費培養、資格認證和轉換潛在客戶。  


### **6.3 ROI 計算表**  

*場景：每月有 5,000 名活躍客戶的電子商務商店。*  

| 操作              | 傳統方法（SMS/電子郵件） | 純 API（無共存）       | 共存 + SeaChat          |
| :---------------- | :----------------------- | :--------------------- | :---------------------- |
| **支援（入站）**  | 緩慢，電子郵件延遲       | 快速，付費工具         | **快速，免費（服務視窗）** |
| **收據（公用）**  | SMS 成本（約 $0.02/則）  | 公用事業費率（約 $0.03/對話） | **公用事業費率（自動化）** |
| **VIP 銷售（出站）** | 電話（高勞動力）         | 行銷費率（約 $0.06/對話） | **免費（透過應用程式手動）** |
| **上下文**        | 碎片化                   | 僅儀表板               | **統一（電話 + 網路）**  |

## **7. 人在迴路中：交接的藝術 🤝**  

Seasalt.ai 的理念建立在 AI 到人的無縫轉換之上。在共存設置中，這種交接必須在技術上穩健，以防止「競爭條件」（Race Conditions），即機器人與人類爭奪控制權的情況。  


### **7.1 「暫停」邏輯：技術深入探討**  

為了實現無衝突的交接，後端系統必須為每個對話維護一個狀態機。  

**「回聲」觸發器：**  

最可靠的交接信號是 smb_message_echoes 網鉤（webhook）。  

* *事件：* 人工代理透過行動應用程式發送「嗨，我可以幫忙處理這個」。  
* *網鉤：* API 接收 smb_message_echoes。  
* *操作：* 後端在該電話號碼的 Redis 快取中設置標誌 bot_paused: true 以及 pause_expiry: 時間戳 + 2 小時。18  


**「恢復」計時器：**  

我們不能讓機器人永遠處於暫停狀態。人類可能去吃午餐或忘記關閉票務。  

* *邏輯：* 後台工作者（Cron 工作）檢查過期的暫停計時器。如果 current_time > pause_expiry 且對話處於非活動狀態，則機器人狀態重置為活動。  
* *最佳化：* 先進的系統允許人類在應用程式中輸入諸如 \#resume 或 \#bot 之類的指令，以立即手動重新啟用 AI。19  


### **7.2 衝突解決：「雙重回覆」問題**  

如果用戶在 1 秒內發送 5 張圖片會怎樣？  

* *問題：* API 可能會生成 5 個單獨的網鉤事件。如果 AI 並行處理它們，可能會發送 5 條單獨的「您好，有什麼我可以幫忙的嗎？」訊息。這就是「競爭條件」。20  
* *解決方案：* **防彈跳（Debouncing）**。中間件應實現防彈跳緩衝區。當第一條訊息到達時，等待 500 毫秒至 1000 毫秒以接收後續訊息。在將其發送給 LLM（大型語言模型）之前，將它們彙總成一個單一的上下文區塊。11  


### **7.3 Seasalt.ai 功能：RAG 和上下文提取**  

交接發生後，人類需要上下文。如果機器人已經收集了訂單編號，他們不想再問「你的訂單編號是多少？」。  

* **上下文提取：** SeaChat 使用 NLP 從機器人的對話中提取實體（訂單 ID、電子郵件、意圖）。這些實體會同步到 Seasalt.ai 儀表板，甚至可以注入到 CRM 筆記中。21  
* **摘要：** 當人類打開聊天時，Seasalt.ai 可以生成機器人互動的 3 點摘要，作為內部筆記或系統訊息顯示，確保代理能夠立即投入工作。4  


## **8. 合作夥伴生態系統：迷宮導航 🧭**  

並非所有 API 存取權都相同。要實現共存，企業必須與 **Meta 業務合作夥伴** 合作。主要有兩種模式：**解決方案合作夥伴**（Solution Partners）和 **技術供應商**（Tech Providers）。  


### **8.1 解決方案合作夥伴 vs. 技術供應商**  

| 功能          | 解決方案合作夥伴（例如 360dialog、Twilio） | 技術供應商（「ISV」路徑）                |  
| :------------ | :---------------------------------------- | :--------------------------------------- |  
| **角色**      | 全方位服務提供商。擁有信用額度。          | 軟體供應商。促進連接。                    |  
| **帳單**      | 您向合作夥伴付款；合作夥伴向 Meta 付款。  | 您直接向 Meta 付款（通常）。              |  
| **上架**      | 使用合作夥伴配置的嵌入式註冊。            | 使用技術供應商配置的嵌入式註冊。          |  
| **限制**      | 高擴展限制。                              | 最初上限為每週約 200 個新客戶。22         |  
| **使用案例**  | 大多數需要全面支援的企業。                | 構建自己的「白標」WhatsApp 的 SaaS 平台。 |  


### **8.2 帳戶結構：共用 WABA 與 OBO**  

* **共用 WABA：** 企業擁有 WABA，但與合作夥伴「共用」存取權。這是現代、推薦的標準。它賦予企業可攜性；如果他們解僱合作夥伴，仍可保留 WABA。23  
* **代表（OBO）：** 合作夥伴「代表」客戶擁有 WABA。這是傳統模式。它會帶來「供應商鎖定」風險。**建議：** 始終堅持透過嵌入式註冊使用共用 WABA 模式，以確保您擁有自己的數據和電話號碼聲譽。23  


## **9. 故障排除和邊緣案例：「霸主」指南 🛠️**  

即使是最好的架構也會面臨現實世界中的雜亂數據。以下是困擾開發人員的邊緣案例。  


### **9.1 「幽靈」對話**  

* *場景：* 用戶發送訊息。機器人處於暫停狀態。人工代理的手機關機。用戶收到沉默。  
* *解決方案：* 在中間件中實現「離開辦公室」邏輯層。如果在交接後 15 分鐘內未檢測到 smb_message_echoes（人工回覆），系統會發送一個備用模板：「我們的人工代理目前繁忙。我們已收到您的查詢，並將盡快回覆。」。18  


### **9.2 封鎖率傳染**

* *場景：* 人工代理在 App 上積極推銷，向 50 位未選擇加入的用戶發送訊息。用戶舉報/封鎖該號碼。  
* *後果：* 電話號碼的品質評分降至「低」。  
* *影響：* **API** 會受到處罰。行銷模板的吞吐量會被限制，或該號碼被完全禁止。  
* *教訓：* 共存將 App 和 API 的命運聯繫在一起。人工端的不良行為會破壞自動化端的可擴展性。對人工代理進行嚴格培訓是必不可少的。24

### **9.3 「未經驗證」的名稱顯示**

* *問題：* 在 API 上，只有當號碼是官方企業帳戶（綠色對勾）時，才會顯示「顯示名稱」。否則，用戶在聊天標題中只會看到電話號碼。  
* *對比：* 在 App 上，名稱通常可從聯絡人卡片中看到。  
* *摩擦：* 用戶可能信任 App 個人資料（看起來熟悉），但對 API 模板（可能看起來很普通）產生懷疑。  
* *解決方案：* 確保 App 和 WABA 設定中的頭像和描述完全相同，以保持視覺連續性。25

## **10. 未來展望：Seasalt.ai 路線圖 🔮**

共存只是開始。大型語言模型（LLMs）、語音 AI 和全渠道路由的融合正在創造一個未來，其中「App」和「API」的區別將完全消失。

### **10.1 多代理協調**

我們正在向這樣的系統邁進：一個「路由器代理」（由 GPT-4o-mini 等快速模型提供動力）位於入口點。它分析用戶的意圖，並將對話路由到「專家代理」（例如，預訂機器人、支援機器人）或「人工代理」。

* **Seasalt.ai 創新：** 我們正在構建協調層，使這些代理可以在後端「交談」，在用戶看到回覆之前傳遞上下文 JSON。26

### **10.2 語音-文字連續體**

透過 **SeaVoice**，我們正在將語音功能直接整合到共存流程中。

* *願景：* 用戶在 WhatsApp 上聊天。他們遇到了障礙。AI 發送一條訊息：「您希望我打電話給您解釋嗎？」用戶點擊「是」。SeaVoice 代理立即致電，參考聊天上下文。然後，通話錄音被轉錄並作為摘要推回 WhatsApp 聊天中。4

### **10.3 結論：敞開的大門**

在「人工」App 和「機器人」API 之間做選擇的時代已經結束。共存已推倒了那堵牆。它使每個擁有智慧型手機的企業都能平等獲得企業級 AI。

這項技術很複雜——webhooks、覆蓋、JSON 有效負載和回聲事件——但結果很簡單：**更好的對話**。

在 **Seasalt.ai**，我們構建了 **Seasalt.ai** 平台來為您處理這種複雜性。我們管理路由、RAG、速率限制和合規性，因此您可以專注於重要的事情：與客戶建立聯繫。

免費開始。保留您的手機。開啟 AI。未來在等著您。 ❤️ 🌊 🤖

## **附錄：參考表格**

### **表格 A：功能比較矩陣**

| 功能                | 傳統企業 App         | 純雲端 API          | 共存（混合）             |
| :------------------ | :------------------- | :------------------ | :----------------------- |
| **訊息限制**        | 無限制（手動）       | 分層（1k - 無限制） | **分層（API）/ 無限制（App）** |
| **吞吐量**          | 人工速度             | 高（80+ 條/秒）     | **上限（20 條/秒）**     |
| **多使用者**        | 有限（連結裝置）     | 無限制（透過軟體）  | **無限制（API）+ 行動裝置** |
| **聊天記錄**        | 本機備份             | 無（全新開始）      | **6 個月匯入**           |
| **群組聊天**        | 是                   | 否                  | **否（僅 App，無同步）** |
| **自動化**          | 基本（離線訊息）     | 進階（機器人）      | **進階 + 手動覆蓋**      |
| **成本**            | 免費                 | 按訊息計費          | **混合（App 免費 / API 付費）** |

### **表格 B：Webhook 事件字典**

| 事件名稱       | 來源       | 有效負載鍵                | 所需操作          |
| :------------- | :--------- | :------------------------ | :---------------- |
| messages       | 用戶       | entry.changes.value.messages | **觸發機器人回覆** |
| smb_message_echoes | 企業（App） | ...value.statuses (echo)  | **暫停機器人（交接）** |
| smb_app_state_sync | 企業（App） | ...value.contacts         | **更新 CRM 聯絡人** |
| template_category_update | Meta | ...value.message_template_status_update | **更新預算邏輯** |

### **表格 C：故障排除指南**

| 症狀                  | 可能原因                  | 解決方案                      |
| :-------------------- | :------------------------ | :---------------------------- |
| **人工輸入時機器人回覆** | 缺少 smb_message_echoes 訂閱 | 訂閱回聲；實施暫停邏輯。      |
| **上架後聊天記錄丟失**  | 24 小時視窗過期            | **嚴重故障。** 記錄丟失。若可能，重試上架。 |
| **「超過速率限制」錯誤** | 超過 20 條/秒             | 在出站佇列中實施 Redis 令牌桶。 |
| **綠色對勾丟失**        | 遷移重置 OBA 狀態         | 使用新聞文件重新提交 OBA 申請。 |
| **桌面 App 不同步**     | 不支援的作業系統（Windows/WearOS） | 使用網頁瀏覽器或 MacOS 用戶端以實現可靠同步。 |

#### **引用文獻**

1. 導入 WhatsApp Business 應用程式使用者（又稱「共存」）- Meta for Developers，於 2026 年 1 月 28 日存取，[https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/onboarding-business-app-users/](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/onboarding-business-app-users/)  
2. WhatsApp 共存 - 在同一號碼上使用 WhatsApp Business 應用程式和 API，於 2026 年 1 月 28 日存取，[https://wetarseel.ai/whatsapp-coexistence-whatsapp-business-app-api-together/](https://wetarseel.ai/whatsapp-coexistence-whatsapp-business-app-api-together/)  
3. SeaChat 簡介 - Seasalt.ai，於 2026 年 1 月 28 日存取，[https://wiki.seasalt.ai/seachat/getting-started/01-seachat-intro/](https://wiki.seasalt.ai/seachat/getting-started/01-seachat-intro/)  
4. 歡迎使用 Seasalt.ai，一個協作式雲端聯絡中心 - Seasalt.ai，於 2026 年 1 月 28 日存取，[https://seasalt.ai/en/blog/18-Seasalt.ai-collab-cloud-contact-center/](https://seasalt.ai/en/blog/18-seax-collab-cloud-contact-center/)  
5. Webhooks | 開發人員文件，於 2026 年 1 月 28 日存取，[https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/overview/](https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/overview/)  
6. 如何在多租戶應用程式中使用唯一電話號碼為多個租戶管理自動化 WhatsApp 機器人？ - Stack Overflow，於 2026 年 1 月 28 日存取，[https://stackoverflow.com/questions/79271628/how-to-manage-automated-whatsapp-bots-for-multiple-tenants-with-unique-phone-num](https://stackoverflow.com/questions/79271628/how-to-manage-automated-whatsapp-bots-for-multiple-tenants-with-unique-phone-num)  
7. 關於多代理 | WhatsApp 說明中心，於 2026 年 1 月 28 日存取，[https://faq.whatsapp.com/395911122612120](https://faq.whatsapp.com/395911122612120)  
8. WhatsApp 共存：用於 WhatsApp 通訊的終極指南 - Zixflow，於 2026 年 1 月 28 日存取，[https://zixflow.com/blog/whatsapp-coexistence/](https://zixflow.com/blog/whatsapp-coexistence/)  
9. 使用 Gemini、Twilio 和 Supabase RAG 進行人工交接的 AI WhatsApp 支援 - N8N，於 2026 年 1 月 28 日存取，[https://n8n.io/workflows/11648-ai-whatsapp-support-with-human-handoff-using-gemini-twilio-and-supabase-rag/](https://n8n.io/workflows/11648-ai-whatsapp-support-with-human-handoff-using-gemini-twilio-and-supabase-rag/)  
10. WhatsApp 共存 - 360Dialog，於 2026 年 1 月 28 日存取，[https://docs.360dialog.com/partner/waba-management/whatsapp-coexistence](https://docs.360dialog.com/partner/waba-management/whatsapp-coexistence)  
11. 為自訂 WhatsApp 解決方案建置可擴展的 Webhook 架構 - ChatArchitect，於 2026 年 1 月 28 日存取，[https://www.chatarchitect.com/news/building-a-scalable-webhook-architecture-for-custom-whatsapp-solutions](https://www.chatarchitect.com/news/building-a-scalable-webhook-architecture-for-custom-whatsapp-solutions)  
12. WhatsApp 雲端 API 在我的 Webhook 上多次傳送舊訊息入站通知 - Stack Overflow，於 2026 年 1 月 28 日存取，[https://stackoverflow.com/questions/72894209/whatsapp-cloud-api-sending-old-message-inbound-notification-multiple-time-on-my](https://stackoverflow.com/questions/72894209/whatsapp-cloud-api-sending-old-message-inbound-notification-multiple-time-on-my)  
13. Webhook 覆寫 | 開發人員文件，於 2026 年 1 月 28 日存取，[https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/override/](https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/override/)  
14. 常見問題 | 開發人員文件，於 2026 年 1 月 28 日存取，[https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/faq/](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/faq/)  
15. WhatsApp 共存模式（2026 指南）：一起使用應用程式和 API + 新定價，於 2026 年 1 月 28 日存取，[https://chakrahq.com/article/whatsapp-coexistence-all-about-coexistence-mode-pricing-and-how-to-optimize-cost/](https://chakrahq.com/article/whatsapp-coexistence-all-about-coexistence-mode-pricing-and-how-to-optimize-cost/)  
16. WhatsApp 共存：將 WhatsApp Business 應用程式號碼與 WhatsApp API 搭配使用 - WANotifier，於 2026 年 1 月 28 日存取，[https://wanotifier.com/whatsapp-coexistence-guide/](https://wanotifier.com/whatsapp-coexistence-guide/)  
17. WhatsApp Business 平台的定價 - Meta for Developers - Facebook，於 2026 年 1 月 28 日存取，[https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing](https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing)  
18. 11 月 14 日：改進的人工-機器人交接 - Turn.io Learn，於 2026 年 1 月 28 日存取，[https://learn.turn.io/l/en/article/jynv5tspbm-14-nov-inbox-routing-improvements](https://learn.turn.io/l/en/article/jynv5tspbm-14-nov-inbox-routing-improvements)  
19. 人工交接與 AI 代理的最佳替代方案？: r/n8n - Reddit，於 2026 年 1 月 28 日存取，[https://www.reddit.com/r/n8n/comments/1ko70xz/best_alternative_for_human_handover_with_ai_agents/](https://www.reddit.com/r/n8n/comments/1ko70xz/best_alternative_for_human_handover_with_ai_agents/)  
20. [錯誤]：WhatsApp 頻道 - 競爭條件在使用多張圖片（相簿）啟動聊天時建立多個對話 · 問題 #13261 - GitHub，於 2026 年 1 月 28 日存取，[https://github.com/chatwoot/chatwoot/issues/13261](https://github.com/chatwoot/chatwoot/issues/13261)  
21. Seasalt.ai 與 WhatsApp 的整合 - Seasalt.ai，於 2026 年 1 月 28 日存取，[https://wiki.seasalt.ai/en/seachat/integrations/seax-seachat-whatsapp/](https://wiki.seasalt.ai/en/seachat/integrations/seax-seachat-whatsapp/)  
22. 多合作夥伴解決方案 | 開發人員文件，於 2026 年 1 月 28 日存取，[https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/multi-partner-solutions/](https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/multi-partner-solutions/)  
23. 共用和非共用 WhatsApp 商業帳戶 (WABA) 的差異，於 2026 年 1 月 28 日存取，[https://api.support.vonage.com/hc/en-us/articles/21336595205532-Difference-Between-Shared-and-Non-Shared-WhatsApp-Business-Accounts-WABAs](https://api.support.vonage.com/hc/en-us/articles/21336595205532-Difference-Between-Shared-and-Non-Shared-WhatsApp-Business-Accounts-WABAs)  
24. 使用 Twilio 的 WhatsApp Business 平台概覽，於 2026 年 1 月 28 日存取，[https://www.twilio.com/docs/whatsapp/api](https://www.twilio.com/docs/whatsapp/api)  
25. 關於 WhatsApp Business 平台 - Meta for Developers - Facebook，於 2026 年 1 月 28 日存取，[https://developers.facebook.com/documentation/business-messaging/whatsapp/about-the-platform](https://developers.facebook.com/documentation/business-messaging/whatsapp/about-the-platform)  
26. 如何使用 OWL 在 WhatsApp 上啟用即時代理回覆 - Camel AI，於 2026 年 1 月 28 日存取，[https://www.camel-ai.org/blogs/mcp-servers-whatsapp-owl](https://www.camel-ai.org/blogs/mcp-servers-whatsapp-owl)
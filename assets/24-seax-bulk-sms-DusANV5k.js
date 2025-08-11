const n=`---
title: "SeaX 大量簡訊：更快、更有效的客戶拓展"
metatitle: "SeaX 大量簡訊：更快、更有效的客戶拓展"
date: 2022-09-09 11:05:22-07:00
draft: false
author: Amy Chen, Kim Dodds, Sarah Reid
description: "在這篇部落格中，我們將展示 SeaX 的大量簡訊功能如何讓代理商主動透過文字發送外發訊息。"
weight: 1
tags:
  - SeaX
image: images/blog/24-seax-bulk-sms/thumbnail.png
canonicalURL: /blog/seax-bulk-sms/
url: /blog/seax-bulk-sms/
---


*在我們之前的部落格文章中，我們介紹了 SeaX 的一些主要功能（包括 [語音智慧](https://seasalt.ai/blog/21-seax-voice-intelligence/)、[知識庫](https://seasalt.ai/blog/22-seax-knowledge-base/) 和 [案例管理](https://seasalt.ai/blog/23-seax-case-management/)），這些功能有助於代理商更好地處理來電和訊息。在這篇部落格中，我們將展示 SeaX 的大量簡訊功能如何讓代理商主動透過文字發送外發訊息，而這些訊息的收件人被證明比傳統電子郵件通訊更快、更一致地打開。*

# 目錄
- [簡訊與電子郵件](#sms-vs-email)
- [10DLC 標準](#10dlc-standards)
- [SeaX 大量簡訊](#seax-bulk-sms)
    - [聯絡人上傳](#contact-upload)
    - [訊息撰寫](#message-composition)
    - [成本估算](#cost-estimate)
    - [大量訊息預覽](#bulk-message-preview)
    - [活動進度監控](#campaign-progress-monitoring)
    - [來訊聊天](#incoming-message-chat)
- [結語](#closing)

# 簡訊與電子郵件

電子郵件往往是大多數商業運營的預設通訊模式。直到最近，簡訊 (SMS) 儘管在日常人際交流中很受歡迎，但並未廣泛用於大量商業訊息傳遞。然而，近年來，Twilio 等雲端通訊供應商透過處理後端電信基礎設施和服務供應商的繁瑣事務，並提供簡單的 SMS API 作為客戶服務，使 SMS 通道更容易被企業使用。雖然電子郵件可能仍然是企業最受歡迎的通道，但 SMS 可以為傳統電子郵件通訊提供獨特的補充。

<center>
<img src="/images/blog/24-seax-bulk-sms/1-pros-cons.png" alt="SMS 在商業通訊中的一些優缺點。"/>

*SMS 在商業通訊中的一些優缺點。*
</center>

但是，如果電子郵件已被證明是成功的，為什麼還要使用簡訊呢？如果我們以行銷活動為例，簡短的答案是：雖然電子郵件活動的開啟率只有 20%，但簡訊的平均開啟率可以高達 *98%*——更不用說簡訊往往會獲得更多回覆。此外，簡訊通常在收到後 90 秒內打開，而電子郵件通常在收到後約 90 分鐘才打開。最後但同樣重要的是，簡訊的平均點擊率約為 19%，遠高於電子郵件的 3.2% ([來源](https://manychat.com/blog/sms-vs-email-marketing-2021/))。

一般來說，簡訊比電子郵件更快、更頻繁地被打開——這可能是因為簡訊總是直接傳遞給收件人，無論他們身在何處，是否有 Wi-Fi。此外，由於簡訊通常用於個人訊息，較少用於商業通訊，收件人可能會認為簡訊比電子郵件更重要或更有實質內容。

那麼為什麼不是每個人都使用簡訊呢？當然，有優點也有缺點。自然地，簡訊比電子郵件昂貴得多，因為它依賴於電信基礎設施和服務提供商（如 Verizon、AT&T 等）來傳遞訊息。此外，簡訊有大約 900 個字元的硬性限制和一個單一附件（當然，這會額外收費）。因此，總體而言，雖然簡訊可能是一種更有效的通訊方式，但權衡之下，企業必須更具選擇性地發送內容，以確保其成本效益。

話雖如此，簡訊和電子郵件沒有理由不能一起使用！每個管道都有其自身的優缺點，因此企業可以透過利用每個管道的優勢來確保他們發送最有效的通訊。

# 10DLC 標準

對於大容量的 A2P (應用程式對個人) 簡訊傳送，美國電信業者使用標準化的 10 位數長碼，或稱 10DLC。在開始大量簡訊活動之前，我們建議您 [在此](https://support.twilio.com/hc/en-us/articles/1260800720410-What-is-A2P-10DLC-) 閱讀更多關於 10DLC 及其應用程式的資訊。

# SeaX 大量簡訊

SeaX 的大量簡訊服務讓您輕鬆上傳聯絡人/潛在客戶，大量發送簡訊 (我們也支援 MMS - 多媒體訊息)，並管理收到的回覆。請繼續閱讀，了解開始您的第一個大量簡訊活動的幾個簡單步驟。

## 聯絡人上傳

<center>
<img src="/images/blog/24-seax-bulk-sms/2-contact-upload.png" alt="將聯絡人清單上傳到 SeaX 大量簡訊。"/>

*將聯絡人清單上傳到 SeaX 大量簡訊。*
</center>

第一步是上傳聯絡人和潛在客戶。首先，將您的簡訊活動聯絡人整理到 CSV 檔案中。除了必填欄位 \`phone_number\` 和 \`name\` 之外，您還可以新增其他欄位並在訊息內文中使用。例如，您可以根據每個聯絡人的 \`name\` 欄位動態更改訊息內文以包含收件人的姓名。

接下來，只需在 SeaX 下打開大量簡訊服務，然後按「匯入」即可上傳您的聯絡人。我們會將您之前的所有聯絡人保存在收件人清單中，以便您輕鬆啟動後續活動。

## 訊息撰寫

<center>
<img src="/images/blog/24-seax-bulk-sms/3-message-draft.png" alt="使用 SeaX 大量簡訊撰寫新簡訊。"/>

*撰寫新簡訊。*
</center>

下一步是為您的活動命名並撰寫訊息。大量簡訊允許您存取儲存在 CSV/Excel 檔案中的所有聯絡人資訊。例如，如果您的聯絡人清單中有一個名為 \`name\` 的欄位，您可以在訊息中輸入 \`{name}\`，訊息將自動在訊息內文中呈現每個聯絡人的姓名。

## 成本估算

<center>
<img src="/images/blog/24-seax-bulk-sms/4-cost-estimate.png" alt="選擇發送電話號碼並使用 SeaX 大量簡訊獲取活動成本估算。"/>

*選擇發送電話號碼並獲取活動成本估算。*
</center>

接下來，選擇您要用於發送外發訊息的電話號碼。如果您還沒有電話號碼，可以點擊右上角的「新號碼報價」提交購買請求。我們的團隊可以幫助您購買新的 10DLC 號碼。

您還可以預覽活動的預估單價。請注意，發送和接收簡訊/多媒體簡訊都需要付費，因此請務必相應地編列預算。

## 大量訊息預覽

<center>
<img src="/images/blog/24-seax-bulk-sms/5-preview.png" alt="使用 SeaX 在發送前預覽大量簡訊活動。"/>

*使用 SeaX 在發送前預覽大量簡訊活動。*
</center>

您可以在發送前預覽大量訊息。確認訊息內容、收件人電話號碼和發件人電話號碼至關重要。一旦您啟動活動，將無法撤回訊息。在此頁面上，您可以預覽活動中的前 3 條訊息，這對應於您清單中的前 3 個聯絡人。

## 活動進度監控

<center>
<img src="/images/blog/24-seax-bulk-sms/6-monitor.png" alt="使用 SeaX 監控大量簡訊活動的進度。"/>

*使用 SeaX 監控大量簡訊活動的進度。*
</center>

最後，您可以坐下來監控大量簡訊儀表板上的活動進度。頁面會自動刷新並更新活動狀態。您可以在此頁面上查看訊息傳遞狀態、成功/傳遞率、預估成本以及回覆率。

## 來訊聊天

<center>
<img src="/images/blog/24-seax-bulk-sms/7-chat.png" alt="使用 SeaX 處理大量簡訊活動的來訊回覆。"/>

*使用 SeaX 處理大量簡訊活動的來訊回覆。*
</center>

就像所有 SeaX 功能一樣，我們努力賦予代理商或活動經理處理來電請求/問題的能力——大量簡訊也允許 SeaX 處理外發行銷工作。啟動活動後，您可以在下方所示的聊天視窗中管理所有來電回覆。

# 結語

感謝您花時間閱讀 SeaX 大量簡訊系統如何賦予代理商發送外發通訊以及處理來電訊息請求的能力。請繼續關注我們部落格系列的下一部分，其中將涵蓋 SeaX 平台內建的一些管理和分析工具。如果您有興趣立即了解更多資訊，請填寫我們的 [預約示範表單](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting)，以親身體驗 SeaX 平台。`;export{n as default};

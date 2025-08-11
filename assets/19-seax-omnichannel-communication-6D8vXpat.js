const n=`---
title: "透過 SeaX 全通路通訊將客戶從任何管道帶到一個地方"
metatitle: "透過 SeaX 全通路通訊統一客戶聯繫方式"
date: 2022-07-15 13:56:54-07:00
draft: false
author: Kim Dodds
description: "在本部落格中，我們重點介紹 SeaX 的全通路通訊之一，它允許來自任何管道的使用者訊息在 SeaX 平台上顯示。"
weight: 1
tags:
  - SeaX
image: images/blog/19-seax-omnichannel-communication/0-thumbnail.png
canonicalURL: /blog/seax-omnichannel-communication/
url: /blog/seax-omnichannel-communication/
---

*在我們之前的部落格文章中，[歡迎來到 SeaX，一個協作式雲端聯絡中心](https://seasalt.ai/blog/18-seax-collaborative-cloud-contact-center-introduction/)，我們介紹了我們的協作式雲端通訊聯絡中心解決方案 SeaX。雖然我們的第一篇部落格文章全面概述了 SeaX 的基本功能和更高級的功能，但我們後續的文章將更深入地探討使 SeaX 脫穎而出的一些個別功能。在這篇文章中，我們將仔細研究 SeaX 的全通路支援，並了解來自不同管道的呼叫和訊息如何顯示在 SeaX 平台上。*

# 目錄
- [什麼是全通路通訊？](#what-is-omnichannel-communication)
- [訊息生命週期](#message-lifecycle)
    - [管道](#channel)
    - [訊息路由](#message-routing)
    - [TaskRouter](#taskrouter)
    - [SeaX 平台](#seax-platform)
- [支援的管道](#supported-channels)

# 什麼是全通路通訊？

首先，“全通路”到底是什麼意思？分解來看，“omni”是一個前綴，意思是“所有”，而“管道”是您可以與客戶互動的各種平台。因此，簡單地說，“全通路通訊”意味著能夠透過任何和所有可用管道進行通訊。不僅如此，全通路通訊還意味著管道之間的體驗是無縫的。在代理商方面，來自所有管道的通訊都呈現在一個統一的介面中。對於客戶來說，他們的互動數據在各個管道之間是持久的。

傳統的呼叫中心通常只支援電話呼叫。透過多個管道（例如電子郵件、網路聊天和電話）與客戶聯繫的更高級的聯絡中心擁有多管道聯絡中心。然而，僅僅因為聯絡中心利用多個管道並不意味著他們的體驗是無縫的。在多管道聯絡中心，不同的管道可能透過單獨的平台存取，和/或客戶數據可能無法跨管道連結。相比之下，全通路聯絡中心讓代理商可以隨時隨地追蹤客戶對話，而不會被鎖定在一個管道或分散在數十個平台上。

<center>
<img src="/images/blog/19-seax-omnichannel-communication/1-contact-center-comparison.png" alt="功能比較：傳統呼叫中心與聯絡中心；多管道與全通路。"/>

*功能比較：傳統呼叫中心與聯絡中心；多管道與全通路。*
</center>

SeaX 能夠與幾乎任何管道整合，預設包括：文字、電話、網路聊天、Facebook 等。所有訊息和呼叫都顯示在一個統一的平台上，並且所有管道的使用者數據都隨時可用。

如果您想直接觀看演示，請觀看我們演示 SeaX 全通路通訊的短影片。在本部落格的其餘部分，我們將逐步介紹訊息和呼叫如何從各種管道路由到 SeaX 中的代理商。我們還將分享開箱即用的支援管道，並討論如何擴展 SeaX 以覆蓋新管道。

<iframe width="85%" height="450px" src="https://www.youtube.com/embed/usb-RK7sHlA" title="YouTube 影片播放器" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

# 訊息生命週期

SeaX 建立在 [Twilio Flex](https://www.twilio.com/flex) 之上，這是一個基於雲端的聯絡中心，利用 Twilio 的雲端通訊平台。Twilio 為 SeaX 提供了基本的構建塊，例如電信基礎設施、訊息和任務路由以及基本的聯絡中心 UI。現在讓我們追蹤傳入使用者訊息的生命週期，看看 SeaX 如何使用基本的 Twilio 架構結合自訂組件將訊息路由到 SeaX 平台上的即時代理商。

## 管道

<center>
<img src="/images/blog/19-seax-omnichannel-communication/2-example-message.jpg" alt="使用者透過 Google Business Messages 向企業發送訊息。", style="width:50%"/>

*透過 Google Business Messages 向企業發送訊息。*
</center>

訊息的旅程始於使用者在支援的平台上編寫和發送訊息。上面的範例顯示有人在 Google Business Messages 上向 Seasalt.ai 聊天機器人發送訊息。預設情況下，Twilio 不支援 Google Business Messages，因此我們利用 Seasalt.ai 開發的自訂管道連接器將 Google 平台連接到 Twilio 和 SeaX。

訊息發送後，它會由自訂連接器傳送到 Twilio 訊息傳遞 API。此時，Twilio 會為使用者建立一個新的對話上下文，並準備路由訊息。

## 訊息路由

<center>
<img src="/images/blog/19-seax-omnichannel-communication/3-studio-flow.png" alt="一個簡單的 Studio Flow，可將訊息路由到聊天機器人或即時代理商。"/>

*一個簡單的 Studio Flow，可將訊息路由到聊天機器人或即時代理商。*
</center>

訊息被 Twilio 接收後，需要將其路由到正確的位置。為此，我們使用 [Twilio Studio Flows](https://www.twilio.com/studio) 來確定是提供自動回覆、將訊息轉發到聊天機器人、將使用者與即時代理商聯繫還是執行其他操作。

在上面提供的簡單範例中，所有傳入的訊息都將轉發到聊天機器人，除非它們包含「即時代理商」一詞，在這種情況下，使用者將被轉移到 SeaX 平台上的即時代理商。

## TaskRouter

<center>
<img src="/images/blog/19-seax-omnichannel-communication/4-taskrouter.png" alt="TaskRouter 架構圖。"/>

*TaskRouter 架構圖。[來源](https://twilio-cms-prod.s3.amazonaws.com/images/taskrouter-diagram.width-800.png)。*
</center>

訊息傳輸到 SeaX 後，下一步是決定哪個代理商將接收它。[Twilio 的 TaskRouter](https://www.twilio.com/taskrouter) 將訊息和電話呼叫等任務分配給 SeaX 中最能處理它們的代理商。可以為 SeaX 中的每個代理商分配技能，例如他們會說哪種語言、他們在哪個部門工作、他們是否應該處理 VIP 客戶等。TaskRouter 將檢查有關使用者和訊息的已知信息，然後選擇最合適的員工來處理問題。上一步中的 Studio Flow 可以自訂以獲取其他信息（例如首選語言），並且客戶信息可以在對話和管道之間保留，以確保他們的體驗是無縫的。

## SeaX 平台

<center>
<img src="/images/blog/19-seax-omnichannel-communication/5-seax-incoming-messages.png" alt="傳入的呼叫和訊息顯示在 SeaX 平台上。", style="width:50%"/>

*傳入的呼叫和訊息顯示在 SeaX 平台上。*
</center>

最後，傳入的訊息將顯示給 SeaX 平台上相應的代理商。代理商可以同時處理來自多個管道的多個任務。在上圖中，一個代理商有來電、Facebook 訊息和網路聊天訊息。代理商可以接受任務或拒絕任務，以將其傳遞給下一個可用的代理商。

# 支援的管道

希望現在更清楚什麼是全通路通訊，以及它如何增強使用者和代理商的體驗。最後一個問題是：開箱即用支援哪些管道？

<center>
<img src="/images/blog/19-seax-omnichannel-communication/6-channel-comparison.png" alt="傳統呼叫中心、基本 Twilio Flex 和 SeaX 之間支援的管道比較。"/>

*傳統呼叫中心、基本 Twilio Flex 和 SeaX 之間支援的管道比較。*
</center>

如前所述，傳統的呼叫中心通常只支援電話呼叫。公司可能仍會透過社交媒體或電子郵件與客戶互動，但這些訊息並未整合到統一的平台中。

Twilio Flex，另一方面，為出色的全通路聯絡中心奠定了基礎。但是，它開箱即用的管道很少。除了電話呼叫和簡訊，他們還對 Facebook、WhatsApp 和電子郵件提供測試版支援。

SeaX 建立在 Flex 之上，為一些最常請求的管道添加了內建支援：例如 Google Business Messages、Discord、Line 和 Instagram。此外，Seasalt.ai 始終與客戶合作，將新管道引入 SeaX 產品線。SeaX 高度可自訂且易於擴展——這意味著我們可以與您的公司合作，整合您最想要的任何管道。

感謝您花時間閱讀 SeaX 雲端聯絡中心如何利用全通路通訊提供無縫的客戶和代理商體驗。請繼續關注我們的下一篇部落格文章，該文章將探討成為「分散式聯絡中心」意味著什麼。如果您有興趣立即了解更多信息，請填寫我們的 [預約演示表單](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting) 以親身體驗 SeaX 平台。
`;export{n as default};

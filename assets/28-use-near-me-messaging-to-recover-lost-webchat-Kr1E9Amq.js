const e=`---
title: "使用者已離開網路聊天：使用「附近訊息」向他們推送訊息！"
metatitle: "使用者已離開網路聊天：使用「附近訊息」重新聯繫！"
date: 2022-12-25 12:48:52-08:00
modified_date: 2025-07-28 16:03:25.123456
draft: false
author: Xuchen Yao
description: "「附近訊息」解決了網路聊天的一個問題：即使使用者*在*離開對話後，也能重新與他們取得聯繫。"
weight: 1
tags:
  - NearMe
image: images/blog/28-use-near-me-messaging-to-recover-lost-webchat/near-me-messaging-google-business-messages-recover-webchat.png
canonicalURL: /blog/use-near-me-messaging-to-recover/
url: /blog/use-near-me-messaging-to-recover/
---

2022 年聖誕節的早上，我醒來時收到了名叫亨利的使用者留下的幾條訊息。等我看到這些訊息時，亨利已經離開了。我只收到了他透過網路聊天發送的訊息和他的名字。

（後來發現亨利在奈及利亞，時區完全不同。當我和他視訊聊天時，我能清楚地看到他臉上的汗水，與西雅圖的嚴寒天氣形成鮮明對比。）

幸運的是，Seasalt.ai 網站上的網路聊天是透過「附近訊息」實現的（更新：我們後來將該產品轉型為全通路聊天機器人建構器。現在稱為 [SeaChat](https://chat.seasalt.ai/?utm_source=blog)！）。後端由 Google Business Messages 提供支援，它為您提供了一項很棒的功能，即在使用者首次與您聯繫後的 30 天內向其手機推送訊息。相比之下，Facebook 只為您提供了 [24 小時窗口](https://developers.facebook.com/docs/messenger-platform/policy/policy-overview/)，以便在使用者與您的 Messenger 機器人發起對話後與他們聯繫。

對於技術上好奇的使用者來說，這是透過安裝在使用者手機上的 Google Play 服務框架實現的。因此，只要他們的手機上有 Google，您就總能聯繫到他們。

所以結論是：「附近訊息」提供了一個很棒的功能來捕獲丟失的潛在客戶。

對於一家企業來說，還有什麼比一個挽回的潛在客戶和與他們在另一個大陸進行有趣的聊天更好的聖誕禮物呢？`;export{e as default};

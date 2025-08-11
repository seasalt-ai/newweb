const e=`---
title: "用户已离开网络聊天：使用“附近消息”向他们推送消息！"
metatitle: "用户已离开网络聊天：使用“附近消息”取得联系！"
date: 2022-12-25 12:48:52-08:00
modified_date: 2025-07-28 16:03:25.123456
draft: false
author: Xuchen Yao
description: "“附近消息”解决了网络聊天的一个问题：即使用户*在*离开对话后也能重新与他们取得联系。"
weight: 1
tags:
  - NearMe
image: images/blog/28-use-near-me-messaging-to-recover-lost-webchat/near-me-messaging-google-business-messages-recover-webchat.png
canonicalURL: /blog/use-near-me-messaging-to-recover/
url: /blog/use-near-me-messaging-to-recover/
---

2022 年圣诞节的早上，我醒来时收到了一个名叫亨利的用户留下的几条消息。等我看到这些消息时，亨利已经离开了。我只收到了他通过网络聊天发送的消息和他的名字。

（后来发现亨利在尼日利亚，时区完全不同。当我和他视频聊天时，我能清楚地看到他脸上的汗水，与西雅图的严寒天气形成鲜明对比。）

幸运的是，Seasalt.ai 网站上的网络聊天是通过“附近消息”实现的（更新：我们后来将该产品转型为全渠道聊天机器人构建器。现在称为 [SeaChat](https://chat.seasalt.ai/?utm_source=blog)！）。后端由 Google Business Messages 提供支持，它为您提供了一项很棒的功能，即在用户首次与您联系后的 30 天内向其手机推送消息。相比之下，Facebook 只为您提供了 [24 小时窗口](https://developers.facebook.com/docs/messenger-platform/policy/policy-overview/)，以便在用户与您的 Messenger 机器人发起对话后与他们联系。

对于技术上好奇的用户来说，这是通过安装在用户手机上的 Google Play 服务框架实现的。因此，只要他们的手机上有 Google，您就总能联系到他们。

所以结论是：“附近消息”提供了一个很棒的功能来捕获丢失的潜在客户。

对于一家企业来说，还有什么比一个挽回的潜在客户和与他们在另一个大陆进行有趣的聊天更好的圣诞礼物呢？`;export{e as default};

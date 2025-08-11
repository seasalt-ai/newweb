const a=`---
title: "Umalis na ang user sa webchat: gamitin ang Near Me Messaging para magpadala ng mensahe sa kanila!"
metatitle: "Umalis na ang user sa webchat: makipag-ugnayan gamit ang Near Me Messaging!"
date: 2022-12-25 12:48:52-08:00
modified_date: 2025-07-28T16:03:25.123456
draft: false
author: Xuchen Yao
description: "Niresolba ng Near Me Messaging ang isang problema ng webchat: makipag-ugnayan muli sa iyong user kahit *pagkatapos* nilang umalis sa pag-uusap."
weight: 1
tags:
  - NearMe
image: images/blog/28-use-near-me-messaging-to-recover-lost-webchat/near-me-messaging-google-business-messages-recover-webchat.png
canonicalURL: /blog/use-near-me-messaging-to-recover/
url: /blog/use-near-me-messaging-to-recover/
---

Noong umaga ng Pasko ng 2022, nagising ako sa ilang mensaheng iniwan ng isang user na nagngangalang Henry. Pagdating ko sa mga mensahe, nakaalis na si Henry. Ang nakuha ko lang ay ang mga mensaheng ipinadala niya sa pamamagitan ng webchat, at ang kanyang pangalan.

(Nang maglaon, nalaman kong si Henry ay nakabase sa Nigeria at nasa ibang timezone. Nang mag-video chat kami, kitang-kita ko ang pawis sa kanyang mukha, kabaligtaran ng nagyeyelong lamig ng panahon sa Seattle.)

Sa kabutihang palad, ang webchat sa website ng Seasalt.ai ay sa pamamagitan ng Near Me Messaging (Update: Mula noon ay ginawa na naming omni-channel chatbot builder ang produkto. Tinatawag na ngayon itong [SeaChat](https://chat.seasalt.ai/?utm_source=blog)!). Ang backend ay pinapagana ng Google Business Messages, na nagbibigay sa iyo ng magandang feature na mag-push ng mensahe sa telepono ng user sa loob ng 30 araw pagkatapos nilang unang makipag-ugnayan sa iyo. Sa kabaligtaran, binibigyan ka lang ng Facebook ng [24 na oras na window](https://developers.facebook.com/docs/messenger-platform/policy/policy-overview/) para makipag-ugnayan sa isang user sa sandaling magsimula sila ng pag-uusap sa iyong Messenger bot.

Para sa mga user na mausisa sa teknikal, ito ay pinagana ng framework ng Google Play Services na naka-install sa mga telepono ng mga user. Kaya hangga't mayroon silang Google sa kanilang telepono, maaari mo silang laging maabot.

Kaya ang hatol: Nagbibigay ang Near Me Messaging ng isang mahusay na feature para makuha ang mga nawawalang prospect.

Ano pa ang mas magandang regalo sa Pasko para sa isang negosyo kaysa sa isang nabawing prospect at isang masayang pakikipag-chat sa kanila sa ibang kontinente?
`;export{a as default};

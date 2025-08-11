const e=`---
title: "사용자가 웹챗을 떠났습니다: Near Me Messaging을 사용하여 메시지를 푸시하세요!"
metatitle: "사용자가 웹챗을 떠났습니다: Near Me Messaging으로 연락하세요!"
date: 2022-12-25 12:48:52-08:00
modified_date: 2025-07-28T16:03:25.123456
draft: false
author: Xuchen Yao
description: "Near Me Messaging은 웹챗의 한 가지 문제를 해결합니다: 사용자가 대화를 떠난 *후에도* 다시 연락할 수 있습니다."
weight: 1
tags:
  - NearMe
image: images/blog/28-use-near-me-messaging-to-recover-lost-webchat/near-me-messaging-google-business-messages-recover-webchat.png
canonicalURL: /blog/use-near-me-messaging-to-recover/
url: /blog/use-near-me-messaging-to-recover/
---

2022년 크리스마스 아침, 저는 헨리라는 사용자로부터 남겨진 몇 개의 메시지를 받고 잠에서 깼습니다. 제가 메시지를 확인했을 때, 헨리는 이미 떠나고 없었습니다. 제가 받은 것은 그가 웹챗을 통해 보낸 메시지와 그의 이름뿐이었습니다.

(나중에 헨리가 나이지리아에 거주하며 완전히 다른 시간대에 있다는 것이 밝혀졌습니다. 제가 그와 영상 통화를 했을 때, 시애틀의 꽁꽁 얼어붙는 날씨와는 대조적으로 그의 얼굴에 땀이 흐르는 것을 문자 그대로 볼 수 있었습니다.)

다행히 Seasalt.ai 웹사이트의 웹챗은 Near Me Messaging을 통해 이루어집니다 (업데이트: 저희는 이후 제품을 옴니채널 챗봇 빌더로 전환했습니다. 이제 [SeaChat](https://chat.seasalt.ai/?utm_source=blog)이라고 불립니다!). 백엔드는 Google Business Messages에 의해 구동되며, 이는 사용자가 처음 연락한 후 30일 이내에 사용자 휴대폰으로 메시지를 푸시하는 좋은 기능을 제공합니다. 이와 대조적으로, Facebook은 사용자가 Messenger 봇과 대화를 시작한 후 [24시간](https://developers.facebook.com/docs/messenger-platform/policy/policy-overview/) 이내에만 사용자에게 연락할 수 있는 창을 제공합니다.

기술적으로 궁금한 사용자들을 위해 설명하자면, 이 기능은 사용자 휴대폰에 설치된 Google Play Services 프레임워크를 통해 활성화됩니다. 따라서 사용자가 휴대폰에 Google을 가지고 있는 한, 언제든지 그들에게 연락할 수 있습니다.

결론적으로: Near Me Messaging은 놓친 잠재 고객을 확보하는 데 훌륭한 기능을 제공합니다.

회복된 잠재 고객과 다른 대륙에서 즐거운 대화를 나누는 것보다 더 좋은 크리스마스 선물은 무엇일까요?
`;export{e as default};

const s=`---
title: "사업주: 영업시간 외에 Google Business Messages를 사용하여 고객과 소통하세요!"
metatitle: "영업시간 외에 Google Business Messages를 사용하여 고객과 소통하세요!"
date: 2022-03-29 17:58:58-07:00
modified_date: 2025-01-27T10:30:00Z
draft: false
author: Ruli Setiawati
description: "Google Business Profile은 사업주가 고객과 직접 채팅할 수 있게 하지만, Google Business Messages는 가상 고객 서비스와의 통합을 가능하게 합니다."
weight: 1
tags:
  - NearMe
image: images/blog/10-use-Google-Business-Messages-to-engage-with-customers-off-hours/thumbnail.png
canonicalURL: /blog/use-google-business-messages-off-hours/
url: /blog/use-google-business-messages-off-hours/
---

*Google Business Messages의 장점과 한계, 그리고 기업이 Google Business Messages를 구현하는 방법에 대해 자세히 알아보세요.*

Google Business Profile에서 채팅을 활성화하면 고객과 연결하는 데 도움이 됩니다. 하지만 고객이 채팅을 통해 점점 더 많이 연락하면서, 특히 영업시간 외에는 모든 채팅에 응답할 시간과 리소스가 없을 수 있습니다. 또한 대부분의 문의는 반복적일 수 있습니다. 한편, 고객은 기업으로부터 즉시 응답을 기대합니다. 기업이 고객의 요구를 충족하지 못하면 기존 고객과 잠재 고객을 잃을 위험이 있습니다.

<center>
<img src="/images/blog/10-use-Google-Business-Messages-to-engage-with-customers-off-hours/1-stats.png" alt="소비자들은 질문에 답을 받지 못하고 대기 시간이 너무 길어서 좌절감을 느낀다"/>

*미국 메시징의 미래를 주도하는 것은 무엇인가? ([출처](https://developers.google.com/business-communications/business-messages/files/us-business-messages-infographic.pdf))*
</center>

<center>
<img src="/images/blog/10-use-Google-Business-Messages-to-engage-with-customers-off-hours/2-one_star.png" alt="사업주의 소통 부족으로 인해 좌절한 고객이 Google 지도에서 1성급 평가를 주고 있다."/>

*사업주의 소통 부족으로 인해 좌절한 고객이 1성급 평가를 주고 있다.*
</center>

[이전 글](https://seasalt.ai/blog/9-enable-chat-on-google-maps/)에서 고객 메시지를 놓치지 않도록 Google의 SMS 알림 기능을 사용하는 방법을 소개했습니다. 하지만 사업주로서 고객 메시지에 응답하는 데 많은 시간이 걸리고, 고객 서비스 외에도 처리해야 할 다른 많은 일들이 있다는 것을 우리는 알고 있습니다. 그래서 [Google Business Messages](https://businessmessages.google/)를 소개하고 싶습니다.

### Google Business Messages에 대해

Google Business Messages는 인간 서비스가 없을 때 고객에게 즉시 응답을 제공하는 문제를 해결하는 차세대 대화 경험입니다. Google Business Profile은 사업주가 Google 지도의 채팅 버튼을 통해 고객과 직접 채팅할 수 있게 하지만, Google Business Messages는 가상 고객 서비스와의 통합으로 한 단계 더 나아갑니다. [chatbots.org](https://www.google.com/url?q=https://www.chatbots.org/virtual_agent/&sa=D&source=docs&ust=1648605707733291&usg=AOvVaw1v4dJFgDD-5SmpSNZBu3J6)에 따르면, 가상 에이전트는 "온라인 고객 서비스 대표로 기능하는 컴퓨터 생성, 애니메이션, 인공지능 가상 캐릭터(보통 의인화된 외관을 가짐)"입니다.

<center>
<img src="/images/blog/10-use-Google-Business-Messages-to-engage-with-customers-off-hours/3-stats.png" alt="비즈니스 의사결정자들은 Google의 Business Messages가 고객 상호작용을 개선할 것이라고 믿는다"/>

*개인화하라: 스마트 커뮤니케이션 도구가 비즈니스 결과를 주도하는 방법 ([출처](https://services.google.com/fh/files/misc/how_smart_communication_tools_drive_business_results.pdf)).*
</center>

가상 에이전트는 일반적으로 디지털 어시스턴트라고 불립니다. 가상 에이전트는 자동화된 응답을 제공하기 위해 자연어 처리(NLP)라는 기술을 사용합니다. 가상 에이전트는 응답 시간을 단축하고, 24/7 가용성을 제공하며, 고객 경험을 개선하여 비즈니스에 도움이 될 수 있습니다. 이것이 Google Business Messages가 고객에게 고품질 자동화된 응답을 제공하는 데 도움이 되는 방법입니다.

Google Business Messages의 다른 장점들은 다음과 같습니다:
- 고객 문의에 즉시 응답 제공
- 우수한 고객 서비스 제공으로 시간과 돈 절약
- 고객과의 신뢰 구축

<center>
<img src="/images/blog/10-use-Google-Business-Messages-to-engage-with-customers-off-hours/4-GBM_bridgepoint_runners.png" alt="Google Business Messages는 가상 에이전트를 Google 지도의 채팅 버튼에 직접 통합한다"/>

*Google Business Messages는 가상 에이전트를 채팅 버튼에 직접 통합합니다.*
</center>

### 기업이 Google Business Messages를 구현하는 방법

Google Business Messages가 비즈니스에 어떻게 도움이 될 수 있는지 더 잘 이해하기 위해, 월마트, 리바이스, 알버트슨 컴퍼니즈의 예를 살펴보겠습니다.

#### 1. 월마트

월마트는 Business Messages를 구현한 최초의 기업 중 하나였습니다 ([Google 블로그](https://blog.google/products/maps/now-sending-business-messages-google-maps-and-search/)). Google Business Messages를 통해 월마트는 매장 영업시간, 제품, COVID-19 백신 및 테스트, 픽업 및 배송 옵션, 반품 정책 등에 대한 최신 정보를 제공합니다. 고객은 하루 중 언제든지 즉시 응답을 받을 수 있습니다.

<center>
<img src="/images/blog/10-use-Google-Business-Messages-to-engage-with-customers-off-hours/5-walmart_chat.png" alt="고객은 Google 지도의 채팅 버튼을 통해 월마트에 연락할 수 있다 (모바일만)"/>

*고객은 Google 지도의 채팅 버튼을 통해 월마트에 연락할 수 있다 (모바일만).*
</center>

<center>
<img src="/images/blog/10-use-Google-Business-Messages-to-engage-with-customers-off-hours/6-walmart_va.png" alt="고객은 월마트의 가상 에이전트에게 매장 영업시간, 제품, 마스크 정책, COVID-19 백신 등에 대해 질문할 수 있다"/>

*고객은 매장 영업시간, 제품, 마스크 정책, COVID-19 백신 등에 대해 질문할 수 있다.*
</center>

#### 2. 리바이스

리바이스는 리바이스 진으로 유명한 의류 회사로, 110개국에 3,100개의 소매점을 보유하고 있습니다. 팬데믹 기간 동안, 리바이스는 쇼핑객들이 구매 전에 많은 시간을 조사에 보내고, 매장 영업시간이 더 자주 바뀔 수 있다는 것을 관찰했습니다. 리바이스는 쇼핑객을 실제 고객으로 전환하고 쇼핑객의 문의에 빠른 응답을 제공하고 싶어했습니다.

2020년 6월, 리바이스는 매장과 제품에 대한 최신 정보를 제공하여 고객 경험을 개선하는 것을 목표로 Google Business Messages를 구현했습니다. Google Business Messages가 하루 중 언제든지 고객을 도울 수 있는 능력을 활용함으로써, 리바이스는 85%의 고객 만족도(CSAT) 점수를 달성할 수 있었습니다. 리바이스는 또한 매장 관련 문제가 30배 더 많이 해결되었다는 것을 발견했습니다. 리바이스가 Google Business Messages를 어떻게 구현했는지에 대해 더 자세히 알아보세요 [여기](https://developers.google.com/business-communications/business-messages/files/levis-case-study.pdf).

<center>
<img src="/images/blog/10-use-Google-Business-Messages-to-engage-with-customers-off-hours/7-levi_chat.png" alt="고객은 Google 지도의 채팅 버튼을 통해 리바이스에 연락할 수 있다 (모바일만)"/>

*고객은 채팅 버튼을 통해 리바이스에 연락할 수 있다 (모바일만).*
</center>

<center>
<img src="/images/blog/10-use-Google-Business-Messages-to-engage-with-customers-off-hours/8-levi_va.png" alt="고객은 Google 지도에서 리바이스의 가상 에이전트와 상호작용할 때 리바이스 제품을 볼 수 있다"/>

*고객은 리바이스의 가상 에이전트와 상호작용할 때 리바이스 제품을 볼 수 있다.*
</center>

#### 3. 알버트슨 컴퍼니즈

알버트슨 컴퍼니즈는 Safeway, Jewel-Osco, Vons, Albertsons, Shaw's 등을 포함하여 전 미국에 여러 약국을 보유하고 있습니다. 2020년 말, COVID-19 백신의 초기 출시 기간 동안 백신에 대한 온라인 검색이 증가했습니다. 백신 자격, 예약, 사람들이 백신을 맞을 수 있는 곳에 대한 질문이 더 많아졌습니다. 알버트슨 컴퍼니즈는 자격 기준, 예약, 가용성 등에 대한 최신 정보를 제공하기 위해 Google Business Messages를 시작하기로 결정했습니다. 결과적으로, 그들은 통화량을 줄이고, 잠재적인 오정보를 방지하며, 고객에게 24/7 도움을 제공할 수 있었습니다.

<center>
<img src="/images/blog/10-use-Google-Business-Messages-to-engage-with-customers-off-hours/9-albertsons_chat.png" alt="고객은 알버트슨 컴퍼니즈의 가상 에이전트로부터 백신 자격에 대한 정보를 얻고 예약할 수 있다"/>

*고객은 백신 자격에 대한 정보를 얻고 예약할 수 있다.*
</center>

Google Business Messages는 반복적인 문의에 응답하고, 고객과의 관계를 구축하며, 전반적인 고객 경험을 개선하여 시간과 돈을 절약하는 훌륭한 방법입니다.

### 구현 장벽

위에서 언급한 바와 같이, 일반적인 Google Business Messages 구현에는 두 가지 주요 한계가 있습니다.

첫째, 우수한 가상 에이전트를 구축하고 유지하는 것은 쉽지 않습니다. 고급 대화형 AI 지식과 상당한 개발 시간이 필요합니다. Google Business Messages를 사용하는 기업들은 전문 컨설팅 기관에 비용을 지불하여 처음부터 완전히 맞춤형 경험을 구축해야 합니다. 이들은 보통 비싸고 몇 달이 걸릴 수 있습니다. 리바이스, 월마트, 알버트슨 컴퍼니즈와 같은 대기업만이 그러한 전문 서비스를 감당할 수 있습니다. 컨설팅 기관들은 또한 보통 제품 개발과 유지보수를 완전히 통제합니다. 변경사항을 만들어야 한다면, 그 기관을 통해야 하며, 이는 추가 시간이 필요합니다.

둘째, Google Business Messages는 Google Business Profile의 내장 메시징 기능의 대체품입니다. 사업주로서, Google Business Profile에서 채팅 버튼을 활성화하고 사용 가능할 때 응답할 수 있습니다. 하지만 Google Business Messages를 구현하면, 들어오는 메시지가 온라인 에이전트로 라우팅되고, Google Business Profile에서 또는 Google My Business 앱을 사용하여 고객과 직접 채팅하는 능력을 잃게 됩니다.

<center>
<img src="/images/blog/10-use-Google-Business-Messages-to-engage-with-customers-off-hours/10-live_agent.png" alt="라이브 채팅 솔루션은 사업주가 고객과 직접 대화할 수 있게 한다"/>

*라이브 채팅 솔루션이 활성화되면, 고객은 "라이브 에이전트에게 메시지 보내기"를 클릭하여 사업주와 직접 대화할 수 있다.*
</center>

Google Business Messages를 사용하면서 고객과 직접 대화하고 싶다면, 컨설팅 기관에 라이브 채팅 솔루션을 제공하도록 요청해야 합니다. 이 기능이 활성화되면, 고객은 "라이브 에이전트에게 메시지 보내기" 버튼을 클릭할 수 있고, 그 후 대화에 참여하여 고객과 채팅할 수 있습니다. 라이브 에이전트 측에서는, 대화는 컨설팅 기관이 통합을 선택한 어떤 플랫폼에서든 이루어집니다. 이는 SMS, WhatsApp, Messenger, Zendesk와 같은 기존 고객 서비스 소프트웨어, 또는 맞춤형 웹사이트나 모바일 앱을 통해 할 수 있습니다.

그래서 우리는 당신에게 Near Me Messaging 솔루션을 소개하고 싶습니다 (업데이트: 우리는 그 후 제품을 풀채널 챗봇 빌더로 변환했습니다. 이제 [SeaChat](https://chat.seasalt.ai/?utm_source=blog)이라고 불립니다!), 이는 중소기업에게 완전히 맞춤형, 셀프서비스, 라이브 채팅 기능을 갖춘 저렴하고 빠르며 구현하기 쉬운 Google Business Messages를 제공합니다. Near Me Messaging과 그 훌륭한 기능들에 대한 다음 글을 기대해 주세요. [우리와 데모를 예약](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting)하고 Near Me Messaging을 사용하는 첫 번째 사람이 되세요!
`;export{s as default};

const e=`---
title: "Google 지도에서 고객과 연결하기 위한 채팅 활성화의 궁극적인 가이드"
metatitle: "Google 지도에서 채팅 활성화의 궁극적인 가이드"
date: 2022-04-29 20:39:13-07:00
modified_date: 2025-07-28 00:00:00+00:00
draft: false
author: Ruli Setiawati
description: "이 블로그에서는 고객과 더 잘 연결하기 위해 Google Maps 채팅을 활성화하는 세 가지 다른 방법을 살펴보겠습니다."
weight: 1
tags:
  - NearMe
image: images/blog/14-ultimate-guide-to-enabling-chat-on-google-maps-to-connect-with-customers/ultimate_guide_thumbnail.png
canonicalURL: /blog/enable-chat-on-google-maps-to-connect-with-customers/
url: /blog/enable-chat-on-google-maps-to-connect-with-customers/
---

*Google Maps 채팅은 기업이 고객과 연결하기 위한 좋은 방법입니다. Google Maps 채팅을 활성화하는 방법에는 Google Business Profile을 사용하는 수동적인 방법, Google Business Messages를 사용하는 자동적인 방법, 그리고 Near Me Messaging을 통해 두 가지 장점을 모두 취하는 방법이 있습니다. 이 블로그에서는 이 세 가지 다른 방법으로 Google Maps 채팅을 활성화하는 방법을 안내합니다.*

<center>
<img src="/images/blog/14-ultimate-guide-to-enabling-chat-on-google-maps-to-connect-with-customers/comparison_table.jpg" alt="Google Business Profile, Google Business Messages, Near Me Messaging을 사용한 Google Maps 채팅 구현의 3가지 다른 방법 비교"/>

*Google Business Profile, Google Business Messages, Near Me Messaging을 사용한 Google Maps 채팅 구현의 3가지 다른 방법 비교.*
</center>

# 목차
- [Google Maps 채팅이란 무엇이며 왜 활성화해야 하는가](#what-is-google-maps-chat-and-why-you-should-enable-it)
- [1. Google Business Profile을 사용한 Google Maps 채팅](#1-google-maps-chat-with-google-business-profile)
    - [Google Business Profile을 사용하여 Google Maps 채팅을 활성화하는 단계별 가이드](#step-1-sign-in-to-your-google-business-profile-account)
- [2. Google Business Messages를 사용한 Google Maps 채팅](#2-google-maps-chat-with-google-business-messages)
    - [기업이 Google Business Messages를 구현하는 방법](#how-businesses-implement-google-business-messages)
    - [구현을 위한 장벽](#barriers-for-implementation)
- [3. Near Me Messaging을 사용한 Google Maps 채팅](#3-google-maps-chat-with-near-me-messaging)
    - [Near Me Messaging의 이점](#benefits-of-near-me-messaging)
    - [Near Me Messaging을 사용하여 Google Maps 채팅을 활성화하는 단계별 가이드](#step-by-step-guide-to-launching-your-virtual-agent-with-near-me-messaging)

# Google Maps 채팅이란 무엇이며 왜 활성화해야 하는가

Google Maps 앱을 사용하여 상점, 체육관, 자동차 대리점 또는 기타 사업장으로 향할 때, 일부 사업장에 채팅 버튼이 내장되어 있는 것을 보셨을 것입니다. 이 채팅 버튼을 통해 사업주로서 고객과 소통할 수 있습니다. 고객은 Google Maps 또는 Google 검색의 채팅 버튼을 통해 직접 연락할 수 있으며, 당신은 언제든지 답장할 수 있습니다. 

<center>
<img src="/images/blog/14-ultimate-guide-to-enabling-chat-on-google-maps-to-connect-with-customers/chat_button.png" alt="Google Maps 프로필에서 채팅 기능이 활성화된 사업장 목록"/>

*Google Maps 앱에서 사업장 목록에 채팅 기능이 어떻게 표시되는지.*
</center>

왜 이것이 사업주에게 중요한 기능일까요? 첫째, 고객이 당신과 쉽게 연결할 수 있도록 함으로써 당신의 사업은 다른 사업들 사이에서 두드러질 것입니다. 실제로 [고객의 72%](https://blog.avochato.com/index.php/2019/12/12/business-to-customer-communication-text-message-software)는 채팅 메시지를 통해 제품에 대해 문의할 수 있는 상점에서 제품을 구매할 가능성이 더 높습니다. 둘째, Google Maps는 모든 종류의 집계된 사업 정보(메뉴, 예약, 편의 시설, 하이라이트, 미리보기, 사진 등) 덕분에 소비자가 사업 정보를 검색할 때 지역 정보 411이 되었습니다. Google Maps는 [사업을 위한 새로운 운영 체제](/blog/11-google-maps-replaces-google-my-business/)가 되었습니다.


이제 Google Maps 채팅을 활성화하는 방법에는 Google Business Profile을 사용하는 수동적인 방법, Google Business Messages를 사용하는 자동적인 방법, 그리고 Near Me Messaging을 통해 두 가지 장점을 모두 취하는 방법이 있습니다. Google Business Profile과 Google Business Messages를 사용하여 Google Maps 채팅을 사용하는 방법과 그 장단점을 안내합니다. 마지막으로 Near Me Messaging을 사용하여 Google Maps 채팅을 사용하는 방법을 안내합니다. 

# 1. Google Business Profile을 사용한 Google Maps 채팅

Google Business Profile은 기업이 Google 검색 및 Google Maps와 같은 Google 서비스 전반에 표시될 무료 비즈니스 프로필 또는 목록을 만들 수 있도록 하는 도구입니다. [Google에서 비즈니스 프로필을 추가하거나 신청하는 방법](https://support.google.com/business/answer/2911778?hl=en&co=GENIE.Platform%3DDesktop)에 대한 Google의 자료를 참조할 수 있습니다. Google Business Profile 목록을 갖는 이점은 다음과 같습니다.

- Google 검색 및 Google Maps를 통해 고객을 유치하고 가시성을 높입니다.
- 영업 시간 및 속성과 같은 비즈니스에 대한 최신 정보를 제공합니다.
- 별점 및 리뷰를 통해 명성을 쌓습니다.
- Google 서비스 전반에서 검색 실적에 대한 통찰력을 얻습니다.

Google Business Profile을 사용하면 다음 세 가지 쉬운 단계로 채팅 기능을 활성화할 수 있습니다.

## 1단계. Google Business Profile 계정에 로그인합니다. 

[Google Business Profile 홈페이지](https://www.google.com/business/)를 방문하여 비즈니스 목록에 로그인합니다.

<center>
<img src="/images/blog/9-enable-chat-on-Google-Maps/GBP_manager_interface.png" alt="사업주가 로그인한 후의 Google Business Profile 페이지"/>

*사업주가 로그인한 후의 Google Business Profile 페이지.*
</center>

## 2단계. 메시지 탭으로 이동합니다.

다음 단계는 페이지 왼쪽의 *"Messages"* 탭을 클릭하는 것입니다. 

<center>
<img src="/images/blog/9-enable-chat-on-Google-Maps/messages_tab.png" alt="Google Business Profile의 메시지 탭 인터페이스"/>

*메시지 탭의 인터페이스.*
</center>

## 3단계. 목록에서 '채팅' 기능을 활성화합니다.

아래와 같이 *"turn on chat"* 버튼을 클릭합니다.

<center>
<img src="/images/blog/9-enable-chat-on-Google-Maps/turn_on_chat.png" alt= "채팅 켜기 버튼을 클릭하면 채팅 기능이 활성화됩니다"/>

*채팅 기능을 활성화하려면 채팅 켜기 버튼을 클릭합니다.*
</center>

*"Turn on chat"* 버튼을 클릭하는 즉시, 채팅이 활성화되었음을 알리는 팝업이 나타납니다. Google은 또한 새로 활성화된 채팅 기능에 대한 이메일 알림을 보낼 것입니다.

<center>
<img src="/images/blog/9-enable-chat-on-Google-Maps/chat_activated.png"/>

*채팅 기능이 활성화되었음을 사업주에게 알리는 팝업 페이지.*
</center>


<center>
<img src="/images/blog/9-enable-chat-on-Google-Maps/email_notifications.png" alt="Google Maps에서 새로 활성화된 채팅 기능에 대한 Google의 이메일 알림"/>

*새로 활성화된 “채팅” 기능에 대한 Google의 이메일 알림.*
</center>

## 고객 메시지에 응답하기

Google Business Profile 메시징 서비스를 활성화하면 목록에 채팅 버튼이 표시되고 고객은 궁금한 점이 있으면 비즈니스에 연락할 수 있습니다. 이 기능을 사용할 때는 문의에 응답할 수 있도록 해야 합니다. 고객은 평균 응답 시간을 볼 수 있으며, 응답 시간이 길면 연락을 주저할 수 있습니다. 24시간 이내에 고객 메시지에 답장하는 것이 중요합니다. Google [Business Profile FAQ 페이지](https://support.google.com/business/answer/9114771?hl=en&co=GENIE.Platform%3DAndroid#zippy=%2Chow-do-i-keep-the-chat-button-active-on-google)에 따르면, 하루 이내에 답장하지 않으면 Google이 목록에서 "채팅" 버튼을 제거할 수 있습니다.

<center>
<img src="/images/blog/9-enable-chat-on-Google-Maps/response_time.png" alt="고객이 질문을 입력하려고 할 때 Google Maps의 채팅 기능에 응답 시간이 표시됩니다"/>

*고객이 질문을 입력하려고 할 때 Google Maps의 채팅 기능에 응답 시간이 표시됩니다.*
</center>

이제 Google Maps 채팅이 Google Business Profile과 어떻게 작동하는지 알았으니, 늘어나는 고객 문의에 비즈니스가 어떻게 대처할 수 있도록 할까요? 고객이 채팅으로 더 많이 연락할수록, 특히 영업 시간 외에는 각 채팅에 답장할 시간과 리소스가 없을 수 있습니다. 또한, 대부분의 문의는 반복적일 수 있습니다. 동시에 고객은 비즈니스에서 즉각적인 답변을 기대합니다. 비즈니스가 고객의 요구를 충족시키지 못하면 기존 및 잠재 고객을 잃을 위험이 있습니다. 반복적인 채팅에 답장하는 데 많은 시간과 돈이 듭니다. 

<center>
<img src="/images/blog/10-use-Google-Business-Messages-to-engage-with-customers-off-hours/1-stats.png" alt="소비자들은 질문에 답을 얻지 못하고 너무 오래 대기하는 것에 좌절합니다"/>

*미국에서 메시징의 미래를 이끄는 것은 무엇인가? ([출처](https://developers.google.com/business-communications/business-messages/files/us-business-messages-infographic.pdf))*
</center>


<center>
<img src="/images/blog/10-use-Google-Business-Messages-to-engage-with-customers-off-hours/2-one_star.png" alt="사업주와의 소통 부족으로 Google Maps에서 불만을 품은 고객의 별점 1개 평가."/>

*사업주와의 소통 부족으로 불만을 품은 고객의 별점 1개 평가.*
</center>


그래서 우리는 Google Business Messages를 사용하여 Google Maps 채팅을 사용하는 자동화된 방법인 두 번째 방법을 소개하고자 합니다.


# 2. Google Business Messages를 사용한 Google Maps 채팅

[Google Business Messages](https://businessmessages.google/)는 사람이 없을 때 고객에게 실시간 응답을 제공하는 문제를 해결하는 차세대 대화형 경험입니다. Google Business Profile은 사업주가 Google Maps의 채팅 버튼을 통해 고객과 직접 채팅할 수 있도록 하지만, Google Business Messages는 가상 에이전트와의 통합을 가능하게 함으로써 한 단계 더 나아갑니다. [chatbots.org](https://www.google.com/url?q=https://www.chatbots.org/virtual_agent/&sa=D&source=docs&ust=1648605707733291&usg=AOvVaw1v4dJFgDD-5SmpSNZBu3J6)에 따르면, 가상 에이전트는 "온라인 고객 서비스 담당자 역할을 하는 컴퓨터 생성, 애니메이션, 인공 지능 가상 캐릭터(일반적으로 인간형 외모를 가짐)"입니다.


<center>
<img src="/images/blog/10-use-Google-Business-Messages-to-engage-with-customers-off-hours/3-stats.png" alt="비즈니스 의사 결정자들은 Google의 Business Messages가 고객과의 상호 작용을 개선할 것이라고 믿습니다"/>

*개인화: 스마트 커뮤니케이션 도구가 비즈니스 성과를 이끄는 방법 ([출처](https://services.google.com/fh/files/misc/how_smart_communication_tools_drive_business_results.pdf)).*
</center>


가상 에이전트는 종종 디지털 비서라고 불립니다. 가상 에이전트는 자연어 처리(NLP)라는 기술을 사용하여 자동화된 응답을 제공합니다. 가상 에이전트는 응답 시간을 줄이고, 24시간 연중무휴 가용성을 제공하며, 고객 경험을 개선하여 비즈니스에 도움이 될 수 있습니다. 이것이 Google Business Messages가 고객에게 고품질의 자동화된 응답을 제공하는 데 도움이 되는 방법입니다. 

Google Business Messages의 추가 이점은 다음과 같습니다.
- 고객 문의에 즉시 답변 제공
- 우수한 고객 서비스를 제공하는 시간과 비용 절약
- 고객과의 신뢰 구축

<center>
<img src="/images/blog/10-use-Google-Business-Messages-to-engage-with-customers-off-hours/4-GBM_bridgepoint_runners.png" alt="Google Business Messages는 Google Maps의 채팅 버튼에 가상 에이전트를 직접 통합합니다"/>

*Google Business Messages는 가상 에이전트를 채팅 버튼에 직접 통합합니다.*
</center>


## 기업이 Google Business Messages를 구현하는 방법

Google Business Messages가 귀사의 비즈니스에 어떻게 도움이 될 수 있는지 더 잘 이해하기 위해 Walmart, Levi’s 및 Albertsons Companies의 몇 가지 사례를 살펴보겠습니다.

### 1. Walmart

Walmart는 Business Messages를 구현한 최초의 회사 중 하나입니다([Google Blog](https://blog.google/products/maps/now-sending-business-messages-google-maps-and-search/)). Google Business Messages를 통해 Walmart는 매장 영업 시간, 제품, COVID-19 백신 및 검사, 픽업 및 배송 옵션, 반품 정책 등에 대한 최신 정보를 제공합니다. 고객은 하루 중 언제든지 즉시 답변을 받을 수 있습니다.

<center>
<img src="/images/blog/10-use-Google-Business-Messages-to-engage-with-customers-off-hours/5-walmart_chat.png" alt="고객은 Google Maps의 채팅 버튼을 통해 Walmart에 연락할 수 있습니다(모바일 전용)"/>

*고객은 Google Maps의 채팅 버튼을 통해 Walmart에 연락할 수 있습니다(모바일 전용).*
</center>


<center>
<img src="/images/blog/10-use-Google-Business-Messages-to-engage-with-customers-off-hours/6-walmart_va.png" alt="고객은 Walmart의 가상 에이전트에게 매장 영업 시간, 제품, 마스크 정책, COVID-19 백신 등에 대해 질문할 수 있습니다"/>

*고객은 매장 영업 시간, 제품, 마스크 정책, COVID-19 백신 등에 대해 질문할 수 있습니다.*
</center>

### 2. Levi’s


Levi’s는 110개국에 3,100개의 소매점을 보유한 Levi’s 데님 청바지로 유명한 의류 회사입니다. 팬데믹 기간 동안 Levi’s는 쇼핑객들이 구매 전 조사에 상당한 시간을 소비하고 매장 영업 시간이 더 자주 변경될 수 있음을 관찰했습니다. Levi’s는 쇼핑객을 실제 고객으로 전환하고 쇼핑객의 문의에 신속하게 응답하기를 원했습니다.

2020년 6월, Levi’s는 매장 및 제품에 대한 최신 정보를 제공하여 고객 경험을 개선하는 것을 목표로 Google Business Messages를 구현했습니다. Levi’s는 Google Business Messages의 고객을 하루 중 언제든지 도울 수 있는 능력을 활용했으며, 그 결과 85%의 고객 만족도(CSAT) 점수를 달성할 수 있었습니다. Levi’s는 또한 매장 관련 질문이 30배 더 많이 해결되었음을 확인했습니다. Levi’s가 Google Business Messages를 어떻게 구현했는지에 대한 자세한 내용은 [여기](https://developers.google.com/business-communications/business-messages/files/levis-case-study.pdf)에서 확인할 수 있습니다.

<center>
<img src="/images/blog/10-use-Google-Business-Messages-to-engage-with-customers-off-hours/7-levi_chat.png" alt="고객은 Google Maps의 채팅 버튼을 통해 Levi’s에 연락할 수 있습니다(모바일 전용)"/>

*고객은 채팅 버튼을 통해 Levi’s에 연락할 수 있습니다(모바일 전용).*
</center>


<center>
<img src="/images/blog/10-use-Google-Business-Messages-to-engage-with-customers-off-hours/8-levi_va.png" alt="고객은 Google Maps에서 Levi’s 가상 에이전트와 상호 작용할 때 Levi’s 제품을 볼 수 있습니다"/>

*고객은 Levi’s 가상 에이전트와 상호 작용할 때 Levi’s 제품을 볼 수 있습니다.*
</center>


### 3. Albertsons Companies

Albertsons Co.는 Safeway, Jewel-Osco, Vons, Albertsons, Shaw’s 등을 포함하여 미국 전역에 여러 약국을 소유하고 있습니다. 2020년 후반, COVID-19 백신 초기 출시 기간 동안 백신에 대한 온라인 검색이 증가했습니다. 백신 자격, 예약, 그리고 사람들이 백신을 어디서 맞을 수 있는지에 대한 질문이 더 많았습니다. Albertsons Co.는 자격 기준, 예약, 가용성 등에 대한 최신 정보를 제공하기 위해 Google Business Messages를 활성화하기로 결정했습니다. 그 결과, 그들은 수신 전화 수를 줄이고, 가능한 오정보를 방지하며, 고객에게 24시간 연중무휴로 도움을 줄 수 있었습니다. 

<center>
<img src="/images/blog/10-use-Google-Business-Messages-to-engage-with-customers-off-hours/9-albertsons_chat.png" alt="고객은 Albertsons Co.의 가상 에이전트로부터 직접 백신 자격에 대한 정보를 얻고 예약을 할 수 있습니다"/>

*고객은 백신 자격에 대한 정보를 얻고 예약을 할 수 있습니다.*
</center>

Google Business Messages는 반복적인 문의에 답변하고, 고객과의 관계를 구축하며, 전반적인 고객 경험을 개선하는 데 시간과 비용을 절약하는 좋은 방법입니다.


## 구현을 위한 장벽

위에서 본 바와 같이 Google Business Messages의 일반적인 구현에는 두 가지 주요 제한 사항이 있습니다. 

우선, [훌륭한 가상 에이전트를 만들고 유지하는 것은 간단한 작업이 아닙니다](https://developers.google.com/business-communications/business-messages/guides/how-it-works). 대화형 AI에 대한 고급 지식과 상당한 개발 시간이 필요합니다. Google Business Messages를 활용하는 기업은 처음부터 완전히 맞춤화된 경험을 만들기 위해 전문 컨설팅 기관에 비용을 지불해야 합니다. 이러한 서비스는 일반적으로 비싸고 몇 달이 걸릴 수 있습니다. Levi’s, Walmart, Albertsons Companies와 같은 대기업은 이러한 특별 서비스를 감당할 수 있는 기업입니다. 컨설팅 기관은 일반적으로 제품의 개발 및 유지 보수를 전적으로 통제합니다. 변경해야 할 경우 기관을 통해야 하며, 이는 추가 시간이 소요됩니다. 

둘째, Google Business Messages는 Google Business Profile에 내장된 메시징 기능의 대체입니다. 사업주로서 Google Business Profile에서 채팅 버튼을 활성화하고 언제든지 답장할 수 있습니다. 그러나 Google Business Messages를 구현하면 수신 메시지가 라이브 에이전트로 라우팅되며, Google Business Profile 내에서 또는 Google My Business 앱을 사용하여 고객과 직접 채팅할 수 있는 기능이 상실됩니다. 

<center>
<img src="/images/blog/10-use-Google-Business-Messages-to-engage-with-customers-off-hours/10-live_agent.png" alt="라이브 채팅 솔루션을 통해 사업주는 고객과 직접 대화할 수 있습니다"/>

*라이브 채팅 솔루션이 활성화되면 고객은 “라이브 에이전트에게 메시지 보내기”를 클릭하여 사업주와 직접 대화할 수 있습니다.*
</center>


Google Business Messages를 사용하면서도 고객과 직접 대화하고 싶다면, [컨설팅 기관에 라이브 채팅 솔루션을 제공해달라고 요청](https://developers.google.com/business-communications/business-messages/partners)해야 합니다. 이 기능이 활성화되면 고객은 “라이브 에이전트에게 메시지 보내기” 버튼을 클릭할 수 있으며, 그러면 당신은 대화에 참여하여 고객과 채팅할 수 있습니다. 라이브 에이전트 측에서는 컨설팅 기관이 통합하기로 선택한 플랫폼에서 대화가 진행됩니다. 이는 문자, WhatsApp, Messenger, Zendesk와 같은 기존 고객 서비스 소프트웨어 또는 맞춤형 웹사이트나 전화 앱을 통해 이루어질 수 있습니다.

이제 이러한 장벽을 극복하면서도 Google Business Messages의 이점을 얻을 수 있는 해결책이 있는지 궁금할 것입니다. 그래서 우리는 최신 솔루션인 Near Me Messaging과 함께 Google Maps 채팅을 최대한 활용하는 방법을 보여드리고자 합니다!

# 3. Near Me Messaging을 사용한 Google Maps 채팅

Near Me Messaging은 최첨단 대화형 AI를 Google Business Messages와 통합하여 고객이 Google Maps 프로필의 채팅 버튼을 통해 하루 중 언제든지 귀사의 비즈니스에 연락할 수 있도록 합니다. 이렇게 하면 Near Me Messaging이 고객 문의를 처리하는 동안 귀사는 비즈니스 관리에 집중할 수 있습니다. Near Me Messaging이 유사한 서비스와 차별화되는 점은 5분 설정 시간, 셀프 서비스 사용자 정의 및 내장된 라이브 채팅 지원입니다.

<center>
<img height="550" src="/images/blog/12-near-me-messaging-complements-google-business-messages/1-GBM-chat-button.png" alt="Near Me Messaging은 Google Business Messages를 Google Maps 프로필의 채팅 버튼과 통합합니다."/>

*Near Me Messaging은 Google Business Messages를 Google Maps 프로필의 채팅 버튼과 통합합니다.*
</center>

우선, 기업이 Google Business Messages를 통합할 때, 처음부터 완전히 맞춤화된 경험을 만들기 위해 전문 컨설팅 기관에 비용을 지불해야 합니다. 이러한 서비스는 일반적으로 비싸고 시간이 오래 걸립니다. 우리는 Google Business Messages를 활용하기 위한 일반적인 시간과 자원 투자가 많은 소규모 기업에게 진입 장벽이 된다는 것을 이해합니다. Near Me Messaging은 중소기업을 위한 저렴한 솔루션을 제공하여 이러한 제한을 해결합니다. 5분 이내에 작동하는 가상 에이전트를 얻을 수 있습니다. 또한, Near Me Messaging 웹사이트에서 언제든지 가상 에이전트를 지속적으로 업데이트하고 사용자 정의할 수 있습니다. Near Me Messaging 사이트에서 변경한 내용은 에이전트와 상호 작용하는 고객에게 즉시 적용됩니다. 

또한, Google Business Profile에서 채팅 버튼을 활성화하면 언제든지 고객에게 답장할 수 있습니다. 그러나 Google Business Messages를 통합하면 수신 메시지가 라이브 에이전트로 라우팅되며, Google Business Profile 내에서 고객과 직접 채팅할 수 있는 기능이 상실됩니다. Near Me Messaging은 추가 비용이나 설정 시간 없이 라이브 에이전트 기능을 제공하여 이러한 제한을 해결합니다. 라이브 에이전트 기능을 사용하면 고객은 언제든지 실제 사람에게 연결을 요청할 수 있습니다. 라이브 에이전트 요청을 보거나 가상 에이전트를 대신하고 싶을 때, 대화에 참여하여 고객과 직접 대화할 수 있습니다. 

## Near Me Messaging의 이점

### 1. 우수한 고객 서비스를 제공하는 데 시간과 인력을 절약합니다.

Near Me Messaging을 사용하면 Google Business Profile의 정보를 기반으로 가장 기본적인 질문에 대한 답변이 자동으로 처리됩니다. Google Business Profile에 정보가 많을수록 에이전트가 기본적인 질문에 더 잘 응답할 수 있습니다. 그리고 Google Business Profile을 업데이트하고 싶다면, Near Me와 변경 사항을 동기화하여 봇 응답을 자동으로 업데이트할 수 있습니다. 가상 에이전트는 Google Maps 프로필의 관련 사용자 리뷰 중 별점이 높은 리뷰에서 응답을 생성합니다. 자동 생성된 응답 외에도 FAQ 및 지식 기반을 통해 더 많은 맞춤형 콘텐츠를 추가할 수 있으며, 이에 대해서는 다음 섹션에서 더 자세히 설명합니다. 

Near Me 웹사이트에 로그인한 지 5분 이내에 자신만의 작동하는 가상 에이전트를 테스트할 수 있습니다. 가상 에이전트는 고객의 반복적인 문의에 24시간 연중무휴로 즉시 답변을 제공할 수 있습니다. 이렇게 하면 고객과의 관계를 구축하고 유지할 수 있습니다.

<center>
<img src="/images/blog/12-near-me-messaging-complements-google-business-messages/2-custom-FAQ.png" alt="Near Me Messaging은 가상 에이전트를 개인화하기 위한 맞춤형 FAQ 기능을 제공합니다"/>

*맞춤형 FAQ 기능의 예시.*
</center>

### 2. 셀프 서비스 및 사용자 정의 가능한 기능.

Near Me Messaging은 비즈니스 프로필 및 고객 리뷰에서 응답을 생성하는 것 외에도 셀프 서비스 사용자 정의 기능을 갖추고 있습니다. 가상 에이전트를 개인화하기 위해 가상 에이전트 이름, 환영 메시지 및 로고와 같은 몇 가지 기본 기능을 사용자 정의할 수 있습니다. 더 중요한 것은 비즈니스에 특정한 사용자 쿼리에 대한 맞춤형 응답을 만들 수 있다는 것입니다. 이는 자주 묻는 질문(FAQ)을 만들고 비즈니스에 대한 더 많은 정보(예: 웹사이트의 텍스트)를 지식 기반에 추가함으로써 이루어집니다. 

에이전트를 사용자 정의한 후에는 성능에 만족할 때까지 비공개로 테스트할 수 있습니다. 준비가 되면 Near Me Messaging 웹사이트에서 직접 공개적으로 출시할 수 있습니다. 가상 에이전트를 공개적으로 출시한 후에도 더 많은 FAQ를 추가하고 환영 메시지를 변경하는 등 가상 에이전트를 지속적으로 개선할 수 있습니다. 가상 에이전트를 개선할 때마다 변경 사항을 테스트한 다음 에이전트를 다시 출시할 기회가 있습니다. 에이전트를 다시 출시하면 변경 사항이 사용자에게 즉시 표시됩니다. 사업주로서 추가 비용이나 팀과의 소통 시간 없이 가상 에이전트를 구축하고 개선할 자유와 권한을 진정으로 가지고 있습니다. 

<center>
<img src="/images/blog/12-near-me-messaging-complements-google-business-messages/3-overview-page.png" alt="사업주가 환영 메시지를 수정하고 가상 에이전트를 개선할 수 있는 Near Me Messaging 개요 페이지의 인터페이스"/>

*사업주가 환영 메시지를 수정하고 가상 에이전트를 개선할 수 있는 Near Me Messaging 개요 페이지의 인터페이스.*
</center>

### 3. Near Me Analytics를 통해 통찰력을 얻습니다.

Near Me Messaging은 가상 에이전트 성능, 가장 바쁜 시간, 고객 메시지에 대한 통찰력을 얻는 데 도움이 되는 분석 기능도 제공합니다. 또한 가상 에이전트가 응답을 찾지 못한 질문에 대한 통찰력을 얻을 수 있으므로 맞춤형 FAQ에 추가할 수 있습니다. 마지막으로 Google 리뷰에서 가장 많이 언급된 주제에 대해 더 자세히 알아볼 수도 있습니다.

<center>
<img src="/images/blog/12-near-me-messaging-complements-google-business-messages/4-analytics-1.png" alt="Near Me Analytics는 고객 메시지에 대한 통찰력을 제공합니다."/>

*Near Me Analytics는 고객 메시지에 대한 통찰력을 제공합니다.*
</center>


<center>
<img src="/images/blog/12-near-me-messaging-complements-google-business-messages/5-analytics-2.png" alt="Near Me Analytics를 사용하면 가상 에이전트의 가장 바쁜 시간과 미답변 질문을 볼 수 있습니다"/>

*Near Me Analytics를 사용하면 가상 에이전트의 가장 바쁜 시간과 미답변 질문을 볼 수 있습니다.*
</center>

<center>
<img src="/images/blog/12-near-me-messaging-complements-google-business-messages/6-analytics-3.png" alt="Near Me Analytics를 사용하면 Google 리뷰에서 가장 많이 언급된 주제를 찾을 수 있습니다."/>

*Near Me Analytics를 사용하면 Google 리뷰에서 가장 많이 언급된 주제를 찾을 수 있습니다.*
</center>

### 4. 대화 기록을 통해 고객의 요구 사항을 이해합니다.

Near Me Messaging을 사용하면 가상 에이전트와 고객 간의 대화를 볼 수 있습니다. 이를 통해 귀하의 비즈니스에 누가 관심이 있는지, 가상 에이전트가 어떻게 작동하는지 알 수 있습니다. 또한 레이블을 만들고 대화에 적용한 다음 레이블을 기준으로 필터링할 수도 있습니다.

<center>
<img src="/images/blog/12-near-me-messaging-complements-google-business-messages/7-conversation-history.png"/>

*Near Me Messaging 대화 기록 기능.*
</center>

### 5. 라이브 에이전트 기능을 통해 고객과 직접 채팅할 수 있는 기능

Near Me Messaging은 라이브 에이전트 기능도 갖추고 있습니다. 고객은 GBM을 통해 “라이브 에이전트 요청”을 클릭할 수 있습니다. 고객이 라이브 에이전트를 요청하면 소유자는 Near Me 웹사이트에서 알림을 받습니다. 

<center>
<img height="500" src="/images/blog/12-near-me-messaging-complements-google-business-messages/8-live-agent-request.png" alt="고객은 Google Maps 프로필의 채팅 버튼을 통해 라이브 에이전트를 요청할 수 있습니다."/>

*고객은 Google Maps 프로필의 채팅 버튼을 통해 라이브 에이전트를 요청할 수 있습니다.*
</center>

소유자는 사용자가 지난 30일 이내에 메시지를 보낸 경우 언제든지 대화에 참여할 수 있습니다. 라이브 에이전트가 대화에 참여하거나 대화를 떠날 때 고객에게 알림이 전송됩니다. 라이브 에이전트가 대화를 떠나는 즉시 모든 메시지는 다시 가상 에이전트로 라우팅됩니다. Near Me 사이트에서 모든 대화 이벤트를 볼 수 있으므로 사용자가 에이전트를 요청한 시점과 에이전트가 참여하거나 떠난 시점, 그리고 봇, 사용자, 에이전트의 모든 메시지를 볼 수 있습니다.


<center>
<img src="/images/blog/12-near-me-messaging-complements-google-business-messages/9-live-agent-notif.png" alt="고객이 라이브 에이전트를 요청하면 Near Me 웹사이트에 알림이 팝업됩니다."/>

*고객이 라이브 에이전트를 요청하면 Near Me 웹사이트에 알림이 팝업됩니다.*
</center>


<center>
<img src="/images/blog/12-near-me-messaging-complements-google-business-messages/10-live-agent-convo.png" alt="Near Me 라이브 에이전트 기능의 인터페이스."/>

*Near Me 라이브 에이전트 기능의 인터페이스.*
</center>

Near Me Messaging을 시작하려면 Near Me Messaging으로 가상 에이전트를 시작하는 방법에 대한 단계별 가이드를 따르십시오!

## Near Me Messaging으로 가상 에이전트를 시작하는 단계별 가이드

### 1단계. Near Me Messaging 웹사이트를 방문하여 Google Business Profile에 사용하는 계정으로 로그인합니다.

Near Me Messaging 웹사이트로 이동하여 *“로그인”* 버튼을 클릭합니다. Google Business Profile에 사용하는 계정으로 로그인한 후, 사용 가능한 모든 상자를 확인하고 Seasalt AI에 가상 에이전트를 시작할 권한을 부여했는지 확인하십시오. Seasalt.ai는 [공식 Google 파트너](https://developers.google.com/business-communications/business-messages/partners)이므로, 이 권한을 책임감 있게 사용할 것임을 확신할 수 있습니다. **우리는 이 권한을 두 가지 기능에 사용합니다. 첫째, 가상 에이전트가 정확한 응답을 제공할 수 있도록 Google Business Profile에서 정보에 액세스하기 위함이며, 둘째, 귀사를 대신하여 귀사의 Google Maps 페이지에 에이전트를 시작할 수 있도록 하기 위함입니다.** 

우리는 이 권한을 귀사의 비즈니스 프로필을 편집하거나 삭제하는 데 사용하지 않을 것입니다. Google은 *“보기”*, *“편집”*, *“삭제”*에 대한 별도의 권한을 제공하지 않으므로 여전히 모든 권한을 부여해야 합니다. 우리는 *“보기”* 권한만 사용할 것입니다.

<center>
<img src="/images/blog/13-launch-your-virtual-agent-on-Google-Maps-with-Near-Me-Messaging/2-sign-in.png" alt="Google Business Profile에 사용하는 계정으로 로그인합니다"/>

*“Google로 로그인”을 클릭하고 Google Business Profile 계정으로 로그인합니다.*
</center>

<center>
<img src="/images/blog/13-launch-your-virtual-agent-on-Google-Maps-with-Near-Me-Messaging/3-permissions.png"/>

*Seasalt AI에 권한을 부여하면 귀사를 대신하여 귀사의 브랜드 가상 에이전트를 Google Maps 페이지에 공개적으로 시작할 수 있는 기능이 제공됩니다.*
</center>


### 2단계. 가상 에이전트를 구축합니다.

로그인하고 권한을 부여하면 Google Business Profile 계정으로 관리하는 모든 비즈니스가 표시됩니다. 비즈니스가 보이지 않으면 올바른 Google Business Profile 계정으로 로그인했는지 확인하십시오. *“동기화”* 버튼을 클릭하여 비즈니스를 동기화할 수도 있습니다. 각 비즈니스 위치에 대해 가상 에이전트를 개별적으로 설정해야 합니다. 가상 에이전트를 설정하려면 비즈니스 중 하나에서 *“에이전트 추가”* 버튼을 클릭하십시오.

<center>
<img src="/images/blog/13-launch-your-virtual-agent-on-Google-Maps-with-Near-Me-Messaging/4-business-locations.png"/>

*Google Business Profile과 연결된 비즈니스.*
</center>

Near Me Messaging은 Google Business Profile에서 정보를 동기화하여 가상 에이전트 구축을 시작합니다. 가상 에이전트 구축에는 5분 미만이 소요되며, 각 단계가 완료됨에 따라 진행 상황을 확인할 수 있습니다.


<center>
<img src="/images/blog/13-launch-your-virtual-agent-on-Google-Maps-with-Near-Me-Messaging/5-virtual-agent-building.png"/>

*가상 에이전트의 진행 상황을 볼 수 있습니다.*
</center>

### 3단계. 가상 에이전트를 비공개로 테스트합니다.

에이전트 구축이 완료되면 화면에 QR 코드가 나타납니다. 휴대폰을 사용하여 QR 코드를 스캔하고 가상 에이전트를 테스트하십시오. 이것은 아직 가상 에이전트의 비공개 버전이며 Google Maps 프로필에는 아직 나타나지 않습니다. 이 가상 에이전트는 Google Business Profile의 정보와 Google Maps의 고객 리뷰만을 사용하여 응답을 생성하는 초기 버전입니다. 테스트 후 가상 에이전트에 개선이 필요하다고 생각되면 맞춤형 FAQ를 만들고 웹사이트에서 정보를 추가하며 Google 리뷰를 큐레이션하여 응답을 크게 개선할 수 있습니다. 사용자 정의에 대한 자세한 내용은 가상 에이전트 개선 가이드를 참조하십시오. 

<center>
<img src="/images/blog/13-launch-your-virtual-agent-on-Google-Maps-with-Near-Me-Messaging/6-agent-built.png" alt=""/>

*에이전트 구축이 완료되면 비공개 가상 에이전트의 QR 코드가 나타납니다.*
</center>

### 4단계. 가상 에이전트를 공개적으로 시작합니다.


가상 에이전트를 테스트하고 응답에 만족하면 가상 에이전트를 시작할 수 있습니다. 가상 에이전트를 공개적으로 시작하면 에이전트가 Google Maps에서 고객에게 제공됩니다. 이 블로그에서는 기본 프로세스를 안내하지만, Google Maps 프로필에서 가상 에이전트를 시작하는 방법에 대한 자세한 정보는 문서 및 비디오를 참조할 수 있습니다. 

먼저 “가상 에이전트” 탭으로 이동하여 *에이전트 이름*과 *에이전트 아바타 이미지*가 원하는 대로 정확하게 표시되는지 확인하십시오. *에이전트 이름*과 *아바타 이미지*가 Google에 의해 시작 프로세스의 일부로 확인되면, **Near Me 사이트를 통해 수정할 수 없습니다**.

에이전트 세부 정보를 확인한 후 *“공개 시작”* 탭으로 이동하십시오. *“확인”* 버튼을 클릭하여 Google에서 브랜드와 위치를 확인하십시오.

<center>
<img src="/images/blog/13-launch-your-virtual-agent-on-Google-Maps-with-Near-Me-Messaging/7-verification.png" alt="Google에서 브랜드와 위치를 확인합니다"/>

*“확인” 버튼을 클릭하면 Google에서 브랜드와 위치가 확인됩니다.*
</center>

브랜드와 위치가 확인되면 *“시작”* 버튼을 클릭하여 가상 에이전트를 공개적으로 시작할 수 있습니다.

<center>
<img src="/images/blog/13-launch-your-virtual-agent-on-Google-Maps-with-near-me-messaging/8-launch.png" alt="Google Maps 프로필의 채팅 버튼에서 가상 에이전트를 시작합니다"/>

*“시작” 버튼을 클릭하면 가상 에이전트가 Google Maps 프로필의 채팅 버튼에서 시작됩니다.*
</center>

채팅 버튼이 Google Maps에 나타나는 데 최대 4시간이 걸릴 수 있습니다. 채팅 버튼이 나타나면 가상 에이전트가 고객과 채팅할 수 있습니다. 공개 시작 후에도 가상 에이전트를 지속적으로 변경하고 추가로 사용자 정의할 수 있습니다. 변경할 때 *“비공개 테스트”* 탭으로 이동하여 공개하기 전에 테스트할 수 있습니다. 변경 사항에 만족하면 *“공개 시작”* 페이지에서 *“다시 시작”*을 클릭하여 가상 에이전트의 공개 버전을 즉시 업데이트할 수 있습니다.

<center>
<img src="/images/blog/13-launch-your-virtual-agent-on-Google-Maps-with-Near-Me-Messaging/9-relaunch.png" alt="Near Me Messaging은 Google Business Messages를 Google Maps 프로필의 채팅 버튼과 통합합니다."/>

*가상 에이전트에 대한 변경/개선을 완료하면 “다시 시작” 버튼을 클릭할 수 있습니다.*
</center>


이제 Google Maps 채팅을 구현하는 다양한 방법을 알았으니, 채팅 기능을 최대한 활용하는 방법에 대해 더 자세히 알고 싶으십니까? 

우리는 [사업주들이 Google Maps 채팅을 최적화하는 방법을 공유하고 논의할 수 있는 Facebook 그룹을 만들었습니다](https://www.facebook.com/groups/513092883608553). 사업주들은 서로 질문하고 정보를 공유하며 Google Maps 채팅 최적화에 대한 최신 이벤트나 웨비너에 대한 알림을 받을 수 있습니다. 이 기회를 최대한 활용하려면 지금 참여하십시오!




`;export{e as default};

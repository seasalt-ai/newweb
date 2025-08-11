const n=`---
title: "SeaX 옴니채널 커뮤니케이션으로 모든 채널의 고객을 한 곳으로 모으세요"
metatitle: "SeaX 옴니채널 커뮤니케이션으로 고객 접점 통합"
date: 2022-07-15 13:56:54-07:00
modified_date: 2025-08-02 17:00:00-07:00
draft: false
author: Kim Dodds
description: "이 블로그에서는 SeaX의 옴니채널 커뮤니케이션 중 하나를 중점적으로 다루며, 이를 통해 모든 채널의 사용자 메시지를 SeaX 플랫폼에 표시할 수 있습니다."
weight: 1
tags:
  - SeaX
image: images/blog/19-seax-omnichannel-communication/0-thumbnail.png
canonicalURL: /blog/seax-omnichannel-communication/
url: /blog/seax-omnichannel-communication/
---

*이전 블로그 게시물인 [SeaX에 오신 것을 환영합니다. 협업 클라우드 컨택 센터](https://seasalt.ai/blog/18-seax-collaborative-cloud-contact-center-introduction/)에서 협업 클라우드 커뮤니케이션 컨택 센터 솔루션인 SeaX를 소개했습니다. 첫 번째 블로그 게시물에서는 SeaX의 기본 및 고급 기능에 대한 포괄적인 개요를 제공했지만, 후속 게시물에서는 SeaX를 돋보이게 하는 몇 가지 개별 기능을 더 자세히 살펴보겠습니다. 이 게시물에서는 SeaX의 옴니채널 지원을 자세히 살펴보고 다양한 채널의 통화 및 메시지가 SeaX 플랫폼에 어떻게 표시되는지 확인합니다.*

# 목차
- [옴니채널 커뮤니케이션이란?](#what-is-omnichannel-communication)
- [메시지 수명 주기](#message-lifecycle)
    - [채널](#channel)
    - [메시지 라우팅](#message-routing)
    - [TaskRouter](#taskrouter)
    - [SeaX 플랫폼](#seax-platform)
- [지원되는 채널](#supported-channels)

# 옴니채널 커뮤니케이션이란?

먼저 "옴니채널"은 정확히 무엇을 의미할까요? 분석해 보면 "옴니"는 "모든"을 의미하는 접두사이고 "채널"은 고객과 상호 작용할 수 있는 다양한 플랫폼입니다. 따라서 간단히 말해 "옴니채널 커뮤니케이션"은 사용 가능한 모든 채널을 통해 통신할 수 있음을 의미합니다. 뿐만 아니라 옴니채널 커뮤니케이션은 채널 간의 경험이 원활하다는 것을 의미하기도 합니다. 상담원 측에서는 모든 채널의 커뮤니케이션이 통합된 인터페이스에 표시됩니다. 고객의 경우 상호 작용 데이터가 채널 전체에서 유지됩니다.

기존 콜센터는 종종 전화 통화만 지원합니다. 이메일, 웹 채팅, 전화 등 여러 채널에서 고객과 소통하는 고급 컨택 센터에는 다채널 컨택 센터가 있습니다. 그러나 컨택 센터가 여러 채널을 활용한다고 해서 경험이 원활하다는 의미는 아닙니다. 다채널 컨택 센터에서는 별도의 플랫폼을 통해 다른 채널에 액세스할 수 있으며 고객 데이터가 채널 간에 연결되지 않을 수 있습니다. 반면 옴니채널 컨택 센터를 통해 상담원은 단일 채널에 갇히거나 수십 개의 플랫폼에 분산되지 않고 어디를 가든 고객 대화를 추적할 수 있습니다.

<center>
<img src="/images/blog/19-seax-omnichannel-communication/1-contact-center-comparison.png" alt="기능 비교: 기존 콜센터 대 컨택 센터, 다채널 대 옴니채널."/>

*기능 비교: 기존 콜센터 대 컨택 센터, 다채널 대 옴니채널.*
</center>

SeaX는 기본적으로 문자, 전화, 웹 채팅, Facebook 등을 포함한 거의 모든 채널과 통합할 수 있습니다. 모든 메시지와 통화는 통합된 플랫폼에 표시되며 모든 채널의 사용자 데이터를 쉽게 사용할 수 있습니다.

데모로 바로 이동하려면 SeaX의 옴니채널 커뮤니케이션을 시연하는 짧은 동영상을 시청하세요. 이 블로그의 나머지 부분에서는 다양한 채널의 메시지와 통화가 SeaX의 상담원에게 어떻게 라우팅되는지 단계별로 살펴보겠습니다. 또한 기본적으로 지원되는 채널을 공유하고 새로운 채널을 포괄하도록 SeaX를 확장하는 방법에 대해 논의할 것입니다.

<iframe width="85%" height="450px" src="https://www.youtube.com/embed/usb-RK7sHlA" title="YouTube 동영상 플레이어" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

# 메시지 수명 주기

SeaX는 Twilio의 클라우드 커뮤니케이션 플랫폼을 활용하는 클라우드 기반 컨택 센터인 [Twilio Flex](https://www.twilio.com/flex)를 기반으로 구축되었습니다. Twilio는 통신 인프라, 메시지 및 작업 라우팅, 기본 컨택 센터 UI와 같은 SeaX의 기본 구성 요소를 제공합니다. 이제 들어오는 사용자 메시지의 수명 주기를 추적하고 SeaX가 기본 Twilio 아키텍처와 사용자 지정 구성 요소를 조합하여 SeaX 플랫폼의 라이브 상담원에게 메시지를 라우팅하는 방법을 살펴보겠습니다.

## 채널

<center>
<img src="/images/blog/19-seax-omnichannel-communication/2-example-message.jpg" alt="사용자가 Google 비즈니스 메시지에서 비즈니스에 메시지를 보내고 있습니다." style="width:50%"/>

*Google 비즈니스 메시지에서 비즈니스에 메시지 보내기.*
</center>

메시지의 여정은 사용자가 지원되는 플랫폼에서 메시지를 작성하고 보내는 것으로 시작됩니다. 위 예는 누군가 Google 비즈니스 메시지에서 Seasalt.ai 챗봇에 메시지를 보내는 것을 보여줍니다. 기본적으로 Twilio는 Google 비즈니스 메시지를 지원하지 않으므로 Seasalt.ai에서 개발한 사용자 지정 채널 커넥터를 활용하여 Google 플랫폼을 Twilio 및 SeaX에 연결합니다.

메시지가 전송되면 사용자 지정 커넥터에서 Twilio 메시징 API로 전달됩니다. 이 시점에서 Twilio는 사용자에 대한 새 대화 컨텍스트를 만들고 메시지를 라우팅할 준비를 합니다.

## 메시지 라우팅

<center>
<img src="/images/blog/19-seax-omnichannel-communication/3-studio-flow.png" alt="메시지를 챗봇이나 라이브 상담원에게 라우팅하는 간단한 Studio 흐름."/>

*메시지를 챗봇이나 라이브 상담원에게 라우팅하는 간단한 Studio 흐름.*
</center>

메시지가 Twilio에서 수신되면 올바른 위치로 라우팅해야 합니다. 이를 위해 [Twilio Studio Flows](https://www.twilio.com/studio)를 사용하여 자동 응답을 제공할지, 메시지를 챗봇으로 전달할지, 사용자를 라이브 상담원과 연결할지 또는 다른 조치를 취할지 결정합니다.

위에 제공된 간단한 예에서 모든 들어오는 메시지는 "라이브 상담원"이라는 문구가 포함되어 있지 않으면 챗봇으로 전달되며, 이 경우 사용자는 SeaX 플랫폼의 라이브 상담원에게 전송됩니다.

## TaskRouter

<center>
<img src="/images/blog/19-seax-omnichannel-communication/4-taskrouter.png" alt="TaskRouter 아키텍처 다이어그램."/>

*TaskRouter 아키텍처 다이어그램. [출처](https://twilio-cms-prod.s3.amazonaws.com/images/taskrouter-diagram.width-800.png).*
</center>

메시지가 SeaX로 전송된 후 다음 단계는 어떤 상담원이 메시지를 받을지 결정하는 것입니다. [Twilio의 TaskRouter](https://www.twilio.com/taskrouter)는 메시지 및 전화 통화와 같은 작업을 처리하기에 가장 적합한 SeaX의 상담원에게 할당합니다. SeaX의 각 상담원에게는 구사하는 언어, 근무 부서, VIP 고객을 처리해야 하는지 여부 등과 같은 기술을 할당할 수 있습니다. TaskRouter는 사용자와 메시지에 대한 알려진 정보를 확인한 다음 문제를 처리할 가장 적절한 직원을 선택합니다. 이전 단계의 Studio 흐름은 추가 정보(예: 선호 언어)를 얻기 위해 사용자 지정할 수 있으며, 고객 정보는 대화 및 채널 전체에서 유지되어 원활한 경험을 보장할 수 있습니다.

## SeaX 플랫폼

<center>
<img src="/images/blog/19-seax-omnichannel-communication/5-seax-incoming-messages.png" alt="들어오는 통화 및 메시지가 SeaX 플랫폼에 표시됩니다." style="width:50%"/>

*들어오는 통화 및 메시지가 SeaX 플랫폼에 표시됩니다.*
</center>

마지막으로 들어오는 메시지는 SeaX 플랫폼의 해당 상담원에게 표시됩니다. 상담원은 여러 채널의 여러 작업을 한 번에 처리할 수 있습니다. 위 이미지에서 한 상담원은 수신 전화, Facebook 메시지 및 웹 채팅 메시지를 받았습니다. 상담원은 작업을 수락하거나 거부하여 다음 가능한 상담원에게 전달할 수 있습니다.

# 지원되는 채널

이제 옴니채널 커뮤니케이션이 무엇이며 사용자 및 상담원 경험을 어떻게 향상시키는지 더 명확해졌기를 바랍니다. 마지막 질문은 다음과 같습니다. 기본적으로 지원되는 채널은 무엇입니까?

<center>
<img src="/images/blog/19-seax-omnichannel-communication/6-channel-comparison.png" alt="기존 콜센터, 기본 Twilio Flex 및 SeaX 간의 지원되는 채널 비교."/>

*기존 콜센터, 기본 Twilio Flex 및 SeaX 간의 지원되는 채널 비교.*
</center>

앞서 언급했듯이 기존 콜센터는 종종 전화 통화만 지원합니다. 회사는 여전히 소셜 미디어나 이메일을 통해 고객과 소통할 수 있지만 이러한 메시지는 통합된 플랫폼에 통합되지 않습니다.

반면 Twilio Flex는 우수한 옴니채널 컨택 센터의 기반을 마련합니다. 그러나 기본적으로 제공되는 채널은 거의 없습니다. 전화 통화 및 SMS 외에도 Facebook, WhatsApp 및 이메일에 대한 베타 지원이 있습니다.

SeaX는 Flex를 기반으로 구축되었으며 Google 비즈니스 메시지, Discord, Line, Instagram과 같이 가장 많이 요청되는 일부 채널에 대한 기본 제공 지원을 추가합니다. 또한 Seasalt.ai는 항상 고객과 협력하여 새로운 채널을 SeaX 제품 라인에 도입합니다. SeaX는 고도로 사용자 정의할 수 있고 쉽게 확장할 수 있습니다. 즉, 귀사와 협력하여 가장 원하는 채널을 통합할 수 있습니다.

SeaX 클라우드 컨택 센터가 옴니채널 커뮤니케이션을 활용하여 원활한 고객 및 상담원 경험을 제공하는 방법을 읽어 주셔서 감사합니다. 다음 블로그 게시물에서는 "분산형 컨택 센터"가 무엇을 의미하는지 살펴보겠습니다. 지금 더 자세히 알고 싶으시면 [데모 요청 양식](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting)을 작성하여 SeaX 플랫폼을 직접 경험해 보세요.`;export{n as default};

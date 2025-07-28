---
title: "SeaX 옴니채널 커뮤니케이션으로 모든 채널의 고객을 한곳으로 모으기"
metatitle: "SeaX 옴니채널 커뮤니케이션으로 고객 연락처 통합"
date: 2022-07-15T13:56:54-07:00
author: Kim Dodds 
draft: false
image: images/blog/19-seax-omnichannel-communication/0-thumbnail.png
description: "이 블로그에서는 SeaX의 옴니채널 커뮤니케이션 중 하나에 중점을 둡니다. 이를 통해 모든 채널의 사용자 메시지가 SeaX 플랫폼에 표시될 수 있습니다."
weight: 1
tags: ["SeaX"]
canonicalURL: "/blog/seax-omnichannel-communication/"
url: "/blog/seax-omnichannel-communication/"
---

*이전 블로그 게시물인 [SeaX, 협업 클라우드 컨택 센터에 오신 것을 환영합니다](https://seasalt.ai/blog/18-seax-collaborative-cloud-contact-center-introduction/)에서 우리는 협업 클라우드 커뮤니케이션 컨택 센터 솔루션인 SeaX를 소개했습니다. 첫 번째 블로그 게시물에서 SeaX의 기본 기능과 고급 기능에 대한 포괄적인 개요를 제공했지만, 다음 게시물에서는 SeaX를 돋보이게 하는 개별 기능 중 일부를 더 자세히 살펴보겠습니다. 이 게시물에서는 SeaX의 옴니채널 지원을 자세히 살펴보고 다양한 채널의 통화 및 메시지가 SeaX 플랫폼에 어떻게 표시되는지 확인합니다.*

# 목차
- [옴니채널 커뮤니케이션이란?](#what-is-omnichannel-communication)
- [메시지 수명 주기](#message-lifecycle)
    - [채널](#channel)
    - [메시지 라우팅](#message-routing)
    - [TaskRouter](#taskrouter)
    - [SeaX 플랫폼](#seax-platform)
- [지원되는 채널](#supported-channels)

# 옴니채널 커뮤니케이션이란?

먼저, "옴니채널"은 실제로 무엇을 의미할까요? 간단히 말해, "옴니"는 "모든"을 의미하는 접두사이며, "채널"은 고객과 상호 작용할 수 있는 다양한 플랫폼입니다. 따라서 간단히 말해, "옴니채널 커뮤니케이션"은 사용 가능한 모든 채널을 통해 통신할 수 있는 능력을 의미합니다. 그리고 그 이상으로, 옴니채널 커뮤니케이션은 채널 간의 경험이 원활하다는 것을 의미합니다. 에이전트 측에서는 모든 채널의 커뮤니케이션이 하나의 통합된 인터페이스로 제공됩니다. 고객의 경우, 상호 작용 데이터가 채널 전체에 유지됩니다.

기존 콜센터는 일반적으로 전화 통화만 지원합니다. 여러 채널(예: 이메일, 웹챗, 전화)을 통해 고객과 연결되는 고급 컨택 센터는 다채널 컨택 센터를 가지고 있습니다. 그러나 컨택 센터가 여러 채널을 사용한다고 해서 그들의 경험이 원활하다는 의미는 아닙니다. 다채널 컨택 센터에서는 다른 채널이 개별 플랫폼을 통해 액세스될 수 있으며/또는 고객 데이터가 채널 간에 연결되지 않을 수 있습니다. 이와 대조적으로, 옴니채널 컨택 센터는 에이전트가 고객 대화를 어디로든 따라갈 수 있도록 하여, 하나의 채널에 갇히거나 수십 개의 플랫폼에 분산되지 않도록 합니다.

<center>
<img src="/images/blog/19-seax-omnichannel-communication/1-contact-center-comparison.png" alt="기능 비교: 기존 콜센터 vs 컨택 센터; 다채널 vs 옴니채널."/>

*기능 비교: 기존 콜센터 vs 컨택 센터; 다채널 vs 옴니채널.*
</center>

SeaX는 텍스트, 전화, 웹챗, Facebook 등을 포함하여 사실상 모든 채널과 통합할 수 있습니다. 모든 메시지와 통화는 하나의 통합된 플랫폼에 표시되며, 모든 채널의 사용자 데이터를 쉽게 사용할 수 있습니다.

데모를 바로 보고 싶다면, SeaX의 옴니채널 커뮤니케이션을 시연하는 짧은 비디오를 살펴보세요. 이 블로그의 나머지 부분에서는 다양한 채널에서 SeaX의 에이전트로 메시지와 통화가 어떻게 라우팅되는지 설명합니다. 또한 기본적으로 지원되는 채널을 공유하고, SeaX를 확장하여 새로운 채널을 커버하는 방법에 대해서도 논의할 것입니다.

<iframe width="85%" height="450px" src="https://www.youtube.com/embed/usb-RK7sHlA" title="YouTube 비디오 플레이어" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

# 메시지 수명 주기

SeaX는 [Twilio Flex](https://www.twilio.com/flex) 위에 구축된 클라우드 기반 컨택 센터로, Twilio의 클라우드 커뮤니케이션 플랫폼을 활용합니다. Twilio는 통신 인프라, 메시지 및 작업 라우팅, 기본 컨택 센터 UI와 같은 SeaX의 기본 구성 요소를 제공합니다. 이제 들어오는 사용자 메시지의 수명 주기를 추적하고 SeaX가 기본 Twilio 아키텍처와 사용자 정의 구성 요소를 결합하여 메시지를 SeaX 플랫폼의 라이브 에이전트로 라우팅하는 방법을 살펴보겠습니다.

## 채널

<center>
<img src="/images/blog/19-seax-omnichannel-communication/2-example-message.jpg" alt="사용자가 Google Business Messages를 통해 비즈니스에 메시지를 보냅니다.", style="width:50%"/>

*Google Business Messages를 통해 비즈니스에 메시지 보내기.*
</center>

메시지의 여정은 사용자가 메시지를 작성하고 지원되는 플랫폼에서 보내는 것으로 시작됩니다. 위 예시는 Google Business Messages에서 Seasalt.ai 챗봇에게 메시지를 보내는 사람을 보여줍니다. Google Business Messages는 Twilio에서 기본적으로 지원되지 않으므로, Seasalt.ai가 개발한 맞춤형 채널 커넥터를 사용하여 Google 플랫폼을 Twilio 및 SeaX에 연결합니다.

메시지가 전송되면, 맞춤형 커넥터에 의해 Twilio 메시징 API로 전달됩니다. 이 시점에서 Twilio는 사용자를 위한 새로운 대화 컨텍스트를 생성하고 메시지를 라우팅할 준비를 합니다.

## 메시지 라우팅

<center>
<img src="/images/blog/19-seax-omnichannel-communication/3-studio-flow.png" alt="챗봇 또는 라이브 에이전트로 메시지를 라우팅하는 간단한 Studio Flow."/>

*챗봇 또는 라이브 에이전트로 메시지를 라우팅하는 간단한 Studio Flow.*
</center>

메시지가 Twilio에 수신되면 올바른 위치로 라우팅되어야 합니다. 이를 위해 [Twilio Studio Flows](https://www.twilio.com/studio)를 사용하여 자동 응답을 제공할지, 메시지를 챗봇으로 전달할지, 사용자를 라이브 에이전트와 연결할지 또는 다른 작업을 수행할지 결정합니다.

위에 제공된 간단한 예시에서, 모든 수신 메시지는 챗봇으로 전달됩니다. 단, 메시지에 "라이브 에이전트"라는 단어가 포함된 경우 사용자는 SeaX 플랫폼의 라이브 에이전트로 전환됩니다.

## TaskRouter

<center>
<img src="/images/blog/19-seax-omnichannel-communication/4-taskrouter.png" alt="TaskRouter 아키텍처 다이어그램."/>

*TaskRouter 아키텍처 다이어그램. [출처](https://twilio-cms-prod.s3.amazonaws.com/images/taskrouter-diagram.width-800.png).*
</center>

메시지가 SeaX로 전송되면 다음 단계는 어떤 에이전트가 메시지를 받을지 결정하는 것입니다. [Twilio의 TaskRouter](https://www.twilio.com/taskrouter)는 메시지 및 전화 통화와 같은 작업을 가장 잘 처리할 수 있는 SeaX의 에이전트에게 분배합니다. SeaX의 각 에이전트에게는 언어 구사 능력, 근무 부서, VIP 고객 처리 여부 등과 같은 기술을 할당할 수 있습니다. TaskRouter는 사용자 및 메시지에 대한 알려진 정보를 확인한 다음 문제를 처리할 가장 적합한 작업자를 선택합니다. 이전 단계의 Studio Flow는 추가 정보(예: 선호 언어)를 얻기 위해 사용자 정의할 수 있으며, 고객 정보는 대화 및 채널 전체에 유지되어 원활한 경험을 보장합니다.

## SeaX 플랫폼

<center>
<img src="/images/blog/19-seax-omnichannel-communication/5-seax-incoming-messages.png" alt="SeaX 플랫폼에 표시되는 수신 통화 및 메시지.", style="width:50%"/>

*SeaX 플랫폼에 표시되는 수신 통화 및 메시지.*
</center>

마지막으로, 수신 메시지는 SeaX 플랫폼의 적절한 에이전트에게 표시됩니다. 에이전트는 여러 채널에서 여러 작업을 동시에 처리할 수 있습니다. 위 이미지에서 에이전트는 수신 전화, Facebook 메시지 및 웹챗 메시지를 가지고 있습니다. 에이전트는 작업을 수락하거나 거부하여 다음 사용 가능한 에이전트에게 전달할 수 있습니다.

# 지원되는 채널

이제 옴니채널 커뮤니케이션이 무엇이며 사용자 및 에이전트 경험을 어떻게 향상시키는지 더 명확해졌기를 바랍니다. 마지막 질문은: 어떤 채널이 실제로 기본적으로 지원됩니까?

<center>
<img src="/images/blog/19-seax-omnichannel-communication/6-channel-comparison.png" alt="기존 콜센터, 기본 Twilio Flex 및 SeaX 간의 지원되는 채널 비교."/>

*기존 콜센터, 기본 Twilio Flex 및 SeaX 간의 지원되는 채널 비교.*
</center>

앞서 언급했듯이, 기존 콜센터는 일반적으로 전화 통화만 지원합니다. 기업은 여전히 소셜 미디어 또는 이메일을 통해 고객과 상호 작용할 수 있지만, 이러한 메시지는 통합 플랫폼에 통합되지 않습니다.

반면에 Twilio Flex는 환상적인 옴니채널 컨택 센터의 기반을 마련합니다. 그러나 기본적으로 사용할 수 있는 채널은 거의 없습니다. 전화 통화 및 텍스트 외에도 Facebook, WhatsApp 및 이메일에 대한 베타 지원도 제공합니다.

SeaX는 Flex 위에 구축되어 Google Business Messages, Discord, Line, Instagram과 같이 가장 일반적으로 요청되는 일부 채널에 대한 내장 지원을 추가합니다. 또한 Seasalt.ai는 항상 고객과 협력하여 새로운 채널을 SeaX 라인업에 추가하고 있습니다. SeaX는 고도로 사용자 정의 가능하며 쉽게 확장 가능합니다. 즉, 귀하의 회사와 협력하여 가장 원하는 채널을 통합할 수 있습니다.

SeaX 클라우드 컨택 센터가 옴니채널 커뮤니케이션을 활용하여 원활한 고객 및 에이전트 경험을 제공하는 방법에 대해 시간을 내어 읽어주셔서 감사합니다. 다음 블로그 게시물에서는 "분산 컨택 센터"가 무엇을 의미하는지 살펴볼 예정이니 계속 지켜봐 주십시오. 즉시 더 자세히 알고 싶으시면, [데모 예약 양식](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting)을 작성하여 SeaX 플랫폼을 직접 확인해 보세요.

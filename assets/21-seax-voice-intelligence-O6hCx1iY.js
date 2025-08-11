const e=`---
title: "SeaX 음성 지능으로 컨택 센터에 고유한 음성을 부여하세요"
metatitle: "SeaX 음성 지능으로 컨택 센터가 말하게 하세요"
date: 2022-08-02 17:24:00-07:00
modified_date: 2025-07-29 20:45:17+00:00
draft: false
author: Kim Dodds, Cody Kim, Xuchen Yao, Guoguo Chen
description: "이 블로그에서는 Seasalt.ai의 자체 개발 텍스트 음성 변환 및 음성 텍스트 변환 엔진이 SeaX 플랫폼의 다양한 측면을 어떻게 향상시킬 수 있는지 보여줍니다."
weight: 1
tags:
  - SeaX
image: /images/blog/21-seax-voice-intelligence/thumbnail.png
canonicalURL: /blog/seax-voice-intelligence/
url: /blog/seax-voice-intelligence/
---

*지금까지 [SeaX 블로그 시리즈](https://seasalt.ai/tags/seax/)에서 Seasalt.ai의 주력 제품인 SeaX에 대한 광범위한 개요를 제공했습니다. 또한 SeaX를 기존 콜센터와 차별화하는 두 가지 주요 기능에 대해 논의했습니다. 첫째, SeaX는 옴니채널이므로 어떤 채널에서든 고객과 더 쉽게 상호 작용할 수 있으며, 둘째, 이 플랫폼은 분산형 컨택 센터이므로 전 세계 고객의 메시지와 통화를 다양한 지역의 분산형 에이전트에게 원활하게 라우팅할 수 있습니다.*

*이제 SeaX 플랫폼의 기본 사항을 다루었으므로, SeaX를 다른 분산형 옴니채널 컨택 센터와 차별화하는 고급 AI 및 자동화 기능으로 넘어갈 것입니다. 이 블로그에서는 Seasalt.ai의 자체 개발 텍스트 음성 변환 및 음성 텍스트 변환 엔진이 SeaX 플랫폼의 다양한 측면을 어떻게 향상시킬 수 있는지 보여줄 것입니다.*

# 목차
- [음성 지능 소개](#into-to-voice-intelligence)
- [Seasalt.ai가 차별화되는 점](#what-sets-seasaltai-apart)
    - [음성 텍스트 변환](#speech-to-text)
    - [텍스트 음성 변환](#text-to-speech)
- [SeaX의 TTS 및 STT](#tts-and-stt-in-seax)
    - [음성 IVR](#voice-ivr)
    - [사용 불가 메시지](#unavailable-message)
    - [실시간 전사](#live-transcription)
    - [그리고 더...](#and-more)

# 음성 지능 소개

음성 지능은 인공 지능을 사용하여 음성 기반 데이터에서 통찰력을 분석하고 도출하는 것입니다. 지난 10년 동안 음성 기술은 놀라운 발전을 보였지만, 기업 환경에서의 사용은 여전히 다소 제한적입니다. 기업은 계속해서 테라바이트의 음성 데이터를 축적하고 있지만, 대부분의 경우 잠재력을 최대한 활용하지 못하고 있습니다.

이러한 이유 중 하나는 음성 데이터가 기본 통계나 일반 텍스트 데이터와 같은 다른 형태의 데이터보다 처리하기 어렵기 때문입니다. 음성 데이터는 여러 면에서 독특합니다.
1. 언어에 따라 다르며, 방언과 억양이 있어 정보의 100%를 포착하기 어렵습니다.
2. 채널(전화 vs. VoIP, 모노 vs. 스테레오), 샘플링 속도(8KHz vs. 16KHz), 표현 정확도(8비트, 16비트, 32비트) 및 배경 소음과 같은 환경 소리에 따라 품질이 달라집니다.
3. 해석하기가 더 어렵습니다. 음성의 감정부터 화자 식별, 의미의 의미론까지 다양합니다.

그러나 올바른 도구로 적절하게 다루면 음성 지능은 이를 사용하는 기업에 엄청난 이점을 제공할 수 있습니다. 무엇보다도 음성 데이터를 올바르게 관리할 수 있으면 개인화된 음성-텍스트 변환 기능을 사용할 수 있게 되어 대화를 검색 가능하고, 색인 가능하며, 통찰력 있게 만들 수 있으며, 추가 NLP 처리를 가능하게 합니다. 더 많은 데이터가 수집됨에 따라 이러한 서비스에 대한 개선도 가능합니다. 예를 들어, 전사 정확도 향상, 사용 사례 범위 확대, 새로운 언어 및 방언에 적응하기 위한 맞춤형 음성 및 언어 모델 제공 등이 있습니다.

# Seasalt.ai가 차별화되는 점

Seasalt.ai는 기업 고객에게 클라우드 통신 AI 기술 및 제품을 제공합니다.
우리는 기업 컨택 센터에서 문자 메시지 및 음성 통화를 위한 자체 개발 음성 및 언어 기술을 개발했습니다.
당사의 자연어 엔진은 버마어, 중국어, 영어, 필리핀어, 독일어, 인도네시아어, 크메르어, 라오어, 말레이어, 스페인어, 타밀어, 태국어, 베트남어 등 다양한 고자원 및 저자원 언어를 지원합니다.
Seasalt.ai는 벤처 자금을 지원받으며, 심층 음성 인식, 신경 음성 합성 및 자연어 대화 분야의 세계 최고 전문가 그룹이 운영합니다.

음성-텍스트 변환 데모 비디오를 시청하세요:
<iframe width="85%" height="450px" src="https://www.youtube.com/embed/Log8usX8ViE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

## 음성 텍스트 변환

<center>
<img src="/images/blog/21-seax-voice-intelligence/STT.png" alt="음성-텍스트 변환 그래픽."/>
</center>

당사의 음성-텍스트 변환 엔진은 음성 오디오를 입력받아 실시간으로 전사본을 생성합니다. 오디오에서 시작하여 음성 특징을 추출하고, 이 특징을 음소로 변환한 다음, 이 음소를 대상 언어의 정서법에 매핑합니다. 현재 시스템은 영어와 중국어를 포함한 여러 언어를 전사할 수 있으며, 더 많은 언어가 지속적으로 추가되고 있습니다.

Seasalt의 STT 엔진이 어떤 도메인에도 맞춤 설정될 수 있는 방법을 보여주는 음성-텍스트 변환 맞춤 설정 비디오를 시청하세요:
<iframe width="85%" height="450px" src="https://www.youtube.com/embed/1YEU6mexzWQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

## 텍스트 음성 변환

<center>
<img src="/images/blog/21-seax-voice-intelligence/TTS.png" alt="텍스트-음성 변환 그래픽."/>
</center>

텍스트 음성 변환은 텍스트만으로 자연스러운 억양과 리듬을 갖춘 사실적인 사람의 음성을 합성하는 과정입니다. 당사의 모델은 일반 텍스트를 받아 이 텍스트를 음소로 변환한 다음, 음소를 오디오로 변환하면서 각 시간 단계에서 가장 사실적인 TTS 경험을 위해 적절한 피치, 지속 시간 및 볼륨을 예측합니다. 최종 결과가 완벽하지 않더라도, 단어 발음, 일시 중지 및 강조를 포함하여 합성된 오디오를 조정할 수 있는 기능을 제공합니다.

Seasalt의 TTS 엔진 출력을 맞춤 설정하여 실제와 같은 합성 음성을 제공하는 방법을 보여주는 텍스트 음성 변환 맞춤 설정 데모 비디오를 시청하세요:

<iframe width="85%" height="450px" src="https://www.youtube.com/embed/GJCOhTtImp8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

저희 웹사이트의 [TTS 페이지](https://suite.seasalt.ai/tts)에서 톰 행크스, 데이비드 애튼버러, 리즈 위더스푼을 포함한 일부 합성 음성 샘플을 들어볼 수도 있습니다.

# SeaX의 TTS 및 STT

## 음성 IVR

<center>
<img src="/images/blog/21-seax-voice-intelligence/flow.png" alt="실시간 전사 및 통화 라우팅을 위한 Seasalt.ai의 음성-텍스트 변환 엔진을 사용하는 음성 IVR 흐름."/>

*실시간 전사 및 통화 라우팅을 위한 Seasalt.ai의 음성-텍스트 변환 엔진을 사용하는 음성 IVR 흐름.*
</center>

음성 지능은 통화가 SeaX 플랫폼에 도달하기 전에도 통화가 올바른 곳으로 라우팅되고, 통화를 에이전트에게 넘기기 전에 중요한 정보를 수집하도록 함으로써 도움을 줄 수 있습니다. SeaX는 Twilio Studio를 사용하여 통화 및 메시지 라우팅 흐름을 사용자 정의합니다. 하지만 우리는 또한 음성-텍스트 변환 엔진을 IVR 흐름에 통합하여 고객이 자연어를 사용하여 통화를 라우팅할 수 있도록 할 수 있습니다(기존의 “1번을 누르세요…” 경험 대신). 또한, 귀사가 챗봇을 사용하여 고객과 상호 작용하는 데 관심이 있다면, 텍스트-음성 변환 엔진을 사용하여 챗봇에 음성을 부여하여 전화로 고객과 대화할 수 있도록 한 단계 더 나아갈 수 있습니다.

## 사용 불가 메시지

<center>
<img src="/images/blog/21-seax-voice-intelligence/unavailable-message.png" alt="텍스트-음성 변환을 사용하는 SeaX 사용 불가 메시지 구성."/>

*텍스트-음성 변환을 사용하는 SeaX 사용 불가 메시지 구성.*
</center>

당사의 텍스트 음성 변환 기술은 또한 고도로 사용자 정의 가능한 음성 메시지를 허용합니다. 예를 들어, 고객이 정상 업무 시간 이후에 전화를 걸거나, 고객이 사용 가능한 에이전트를 기다리는 동안 대기해야 하는 경우 이러한 메시지가 트리거될 수 있습니다.

## 실시간 전사

<center>
<img src="/images/blog/21-seax-voice-intelligence/live-transcription.jpg" alt="SeaX에서 에이전트에게 표시되는 분석과 함께 실시간 통화 전사."/>

*SeaX에서 에이전트에게 표시되는 분석과 함께 실시간 통화 전사.*
</center>

고객이 에이전트와 통화 중일 때, 당사의 음성-텍스트 변환 엔진은 에이전트의 참조를 위해 대화의 정확한 실시간 전사본을 제공합니다. 이를 통해 에이전트는 대화의 이전 지점을 참조하거나 고객이 말한 내용을 다시 확인할 수 있습니다. 또한, 이러한 전사본은 주제 추출, 행동 추출, 요약, 회의 분석 등과 같은 다운스트림 애플리케이션에 매우 유용합니다.

## 그리고 더...

위는 SeaX가 대기 시간을 줄이고, 에이전트 성능을 향상시키며, 고객과 에이전트 모두에게 전반적으로 원활한 경험을 제공하기 위해 고급 음성 지능을 통합하는 몇 가지 방법일 뿐입니다. SeaX 플랫폼과 함께 제공되는 더 많은 고급 기능에 대해 알아보려면 AI 지식 기반, 사례 관리 및 대량 SMS를 포함하는 다음 블로그 게시물을 계속 지켜봐 주십시오. 개인 데모를 받고 SeaX 플랫폼이 귀사의 특정 비즈니스 요구 사항을 어떻게 해결할 수 있는지 논의하려면 [데모 예약 양식](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting)을 작성하십시오.
`;export{e as default};

const n=`---
title: "OpenAI vs. 인간 vs. 음성 AI: 비용 비교 (5/5)"
metatitle: "OpenAI 실시간 API vs. 인간 및 음성 AI: 비용 분석"
date: 2024-10-12 00:22:19-07:00
modified_date: 2025-07-26T16:48:39Z
draft: false
author: Xuchen Yao
description: "인간 접수원 및 음성 AI 에이전트와 비교한 OpenAI의 실시간 API에 대한 자세한 비용 분석."
weight: 1
tags:
  - 자동 응답 서비스
  - 소규모 기업을 위한 인바운드 콜
  - SeaChat
  - 음성 AI
image: /images/blog/101-openai-chatgpt-realtime-api-cost-breakdown/101-openai-chatgpt-realtime-api-cost-breakdown.svg
canonicalURL: /blog/openai-chatgpt-realtime-api-cost-breakdown/
url: /blog/openai-chatgpt-realtime-api-cost-breakdown/
---


*이것은 소규모 기업을 위한 고객 커뮤니케이션 전략을 탐구하는 5개 기사 시리즈로, 응답 서비스에 중점을 둡니다:*

<br/>

<center>
<img height="100%" width="80%" style="background-color: #ffffff" src="/images/blog/101-openai-chatgpt-realtime-api-cost-breakdown/series-diagram.svg"  alt="인바운드 시리즈 다이어그램">

</center>

1. [소규모 기업이 응답 서비스를 필요로 하는 이유?](https://seasalt.ai/blog/96-why-small-businesses-need-answering-service/): 응답 서비스의 중요성과 이점을 알아보세요.

2. [아웃소싱 vs. 사내 라이브 접수원](https://seasalt.ai/blog/97-live-receptionist-inhouse-outbound/): 라이브 접수원이란 무엇인가요? 아웃소싱해야 할까요, 아니면 사내에서 고용해야 할까요?

3. [자동 전화 응답 시스템 (대화형 음성 응답 IVR vs. 음성 AI 에이전트)](https://seasalt.ai/blog/98-inbound-answering-automated-system/): 자동 응답 서비스란 무엇인가요? 대화형 음성 응답 또는 음성 AI 에이전트를 사용해야 할까요?

4. [결정: 내 소규모 기업은 라이브 접수원 또는 자동 응답 서비스를 사용해야 할까요?](https://seasalt.ai/blog/99-inbound-answering-live-vs-automated/): 저희 시리즈에서 응답 서비스에 대해 모두 배웠습니다. 이제 귀하의 비즈니스에 가장 적합한 서비스 유형을 결정할 때입니다.

5. (이 기사) [OpenAI vs. 인간 vs. 음성 AI: 비용 비교](https://seasalt.ai/blog/101-openai-chatgpt-realtime-api-cost-breakdown/): 최신 음성 AI 기술로 전환해야 할지 궁금하신가요? 실제 비용을 살펴보겠습니다.

---

## TLDR:

1. OpenAI와 인간 모두 **비쌀** 수 있습니다:
   1. OpenAI의 실시간 API는 **분당 약 1달러**로 음성 에이전트(AI) 경험을 가능하게 합니다.
   2. 온디맨드 가상 접수원(인간)도 **분당 약 1달러**로 가격이 책정됩니다.
2. 하지만 주의할 점이 있는 **균형 잡힌** 선택지도 있습니다:
   1. 장기 고용 시, 영어 실력이 좋은 인간 에이전트는 **시간당** 5달러(분당 0.08달러)만큼 저렴할 수 있습니다.
   2. 스타트업이 제공하는 음성 AI 에이전트는 **시간당** 7.2달러(분당 0.12달러)만큼 저렴할 수 있습니다.

*이 기사의 오디오 버전을 듣고 싶으시면 여기 비디오가 있습니다.*

<iframe width="100%" height="400" src="https://www.youtube.com/embed/?v=DgX6F711ceA&list=PL8K7_LTqly46agqJW2quG5Vsylt5os1Al" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>


## ChatGPT-4o의 실시간 API의 실제 비용

OpenAI는 2024년 10월 1일에 ChatGPT-4o용 [실시간 API](https://openai.com/index/introducing-the-realtime-api/)를 출시했습니다. 이는 최초의 옴니채널 대규모 언어 모델인 [GPT-4o](https://openai.com/index/hello-gpt-4o/) 출시 5개월 후입니다. 성능은 놀랍습니다. Chatgpt-4o-realtime은 사람처럼 들리고, 사람처럼 반응하며, 소음과 중단에 강합니다.

그러나 Chatgpt-4o-realtime은 저렴할까요?

언뜻 보기에 OpenAI의 실시간 API는 GPT-4o-mini *텍스트*보다 약 30배 더 비쌉니다(**5달러 대 0.15달러** / 1M 입력 토큰).

<br/>

<center>
<div style="background-color: #ffffff;">
<img height="100%" width="100%" src="/images/blog/101-openai-chatgpt-realtime-api-cost-breakdown/October 2024 pricing for chatgpt-4o-mini.png"  alt="chatgpt-4o-mini의 2024년 10월 가격">
</div>

*chatgpt-4o-realtime의 2024년 10월 가격*
</center>

<br/>

<center>
<div style="background-color: #ffffff;">
<img height="100%" width="100%" src="/images/blog/101-openai-chatgpt-realtime-api-cost-breakdown/October 2024 pricing for chatgpt-4o-realtime.png"  alt="chatgpt-4o-realtime의 2024년 10월 가격">
</div>

*chatgpt-4o-mini의 2024년 10월 가격*
</center>


OpenAI는 오디오 입력에 분당 약 0.06달러, 오디오 출력에 분당 0.24달러가 든다고 주장합니다. 이를 합산하면 분당 0.30달러를 초과하지 않아야 합니다. 맞죠?

저희는 4o-realtime API의 실제 테스트를 수행했으며, 분당 약 1달러의 비용이 드는 것을 확인했습니다.


<br/>

<center>
<div style="background-color: #ffffff;">
<img height="100%" width="100%" src="/images/blog/101-openai-chatgpt-realtime-api-cost-breakdown/Screenshot of the cost for one test of the ChatGPT-4o Realtime API.png"  alt="ChatGPT-4o 실시간 API 테스트 비용 스크린샷">
</div>

*ChatGPT-4o 실시간 API 테스트 비용 스크린샷*
</center>


저희는 chatgpt-4o-realtime API와 5분간 음성 대화를 진행했으며, 5.38달러가 들었습니다. 5분간의 음성 대화에는 약 142초의 전사된 오디오(오디오 입력으로 생각하십시오)가 포함되어 있으며, 나머지는 대부분 오디오 출력입니다.

저희가 수행한 다른 테스트에서는 10분간의 간단한 대화에 약 10달러가 들었습니다.

이런, 비싸네요. 사실 [Seasalt.ai 자체 음성 에이전트보다 약 10배 더 비쌉니다](https://chat.seasalt.ai/en-us#pricing?utm_source=blog/).

일부 개발자가 API를 테스트하고 실제로 무언가를 하는 음성 AI 에이전트를 훈련하기 위해 의미 있는 노력을 기울이려고 한다면, 하루에 수백 달러를 쉽게 쓸 수 있습니다!

## ChatGPT-4o의 실시간 API vs. 인간 에이전트 – 어느 것이 더 저렴할까요?

따라서 ChatGPT-4o의 실시간 API를 사용하여 음성 AI 에이전트를 구축한다면 분당 약 1달러, 즉 **시간당 60달러**가 들 것입니다.

### 인간 에이전트의 비용은 얼마입니까?

프론트 데스크 접수원과 같이 사내에서 사용하는 경우, 최저 임금(연방 7.25달러에서 캘리포니아 16달러)에서 시간당 20~30달러 사이가 될 수 있습니다.

아웃소싱 에이전시를 사용하는 경우 가격은 다를 수 있습니다. 일부는 200분당 월 349달러부터 시작하며 설정 비용이 추가됩니다. Seasalt.ai는 이에 대해 자세한 설문 조사를 작성했습니다. [라이브 접수원의 비용: 사내 vs. 아웃소싱](https://seasalt.ai/blog/97-live-receptionist-inhouse-outbound/?utm_source=crossblog).


<br/>

<center>
<img height="100%" width="100%" src="/images/blog/97-live-receptionist-inhouse-outsourced/vendor-summary.png"  alt="라이브 접수원 공급업체 요약">

*Seasalt.ai의 라이브 접수원 공급업체 요약*
</center>

## ChatGPT-4o의 실시간 API vs. 다른 음성 AI 에이전트 – 차이점은 무엇입니까?

ChatGPT-4o의 실시간 API는 음성 AI 기술의 중요한 발전을 나타내며, 다른 음성 AI 에이전트와 비교하여 몇 가지 주요 차이점을 제공합니다.

- **응답성**: 평균 응답 시간이 2~3초로 거의 실시간 상호 작용을 제공합니다.
- **견고성**: API는 대화 중 중단 및 리디렉션을 허용하여 보다 자연스러운 대화 흐름을 가능하게 합니다.
- **종단 간**: API는 음성-텍스트(Azure, Deepgram 등) 및 텍스트-음성(Azure, Eleven labs)과 같은 다른 구성 요소를 덕트 테이프로 연결할 필요가 없습니다.

하지만 여기서 주의할 점은 비용입니다. ChatGPT-4o의 실시간 API는 분당 약 1달러가 들지만, 다른 [음성 AI 에이전트는 분당 0.12달러만큼 저렴할 수 있습니다](https://seasalt.ai/blog/98-inbound-answering-automated-system/?utm_source=crossblog).

<br/>

<center>
<img height="100%" width="100%" src="/images/blog/98-inbound-answering-automated-system/ai-product-comparison.png"  alt="음성 AI 에이전트용 Seasalt.ai vs. Bland AI vs. Smith.ai. Synthflow.ai vs. Retell AI vs. Slang AI vs. Gridspace">

*Seasalt.ai의 음성 AI 에이전트 제품 비교*
</center>


가격에 10배 차이가 있지만, 성능에도 10배 차이가 있을까요? 그것은 고객이 판단할 문제입니다.

## 결론

사업주에게는 기본적으로 4가지 옵션이 있습니다.

1. **사내 인간 에이전트**
2. **다른 회사에 아웃소싱**, 온쇼어 또는 오프쇼어
3. **저렴한 음성 AI 에이전트 사용**
4. **가장 진보된/비싼 OpenAI 실시간 API로 구축**

아래에 다양한 옵션의 장단점을 요약했습니다.

* **OpenAI 실시간 API**는 가장 빠르고 자연스러운 경험을 제공하지만 기술 전문 지식이 필요하며 비용이 많이 듭니다.
* **온쇼어 온디맨드 인간 에이전트**는 완벽한 영어로 기본적인 작업에 적합하지만 통합이 제한적입니다.
* **오프쇼어 장기 인간 에이전트**는 가장 저렴하지만 인프라 문제와 높은 이직률로 인해 신뢰할 수 없을 수 있습니다.
* **통합 음성 AI 에이전트**는 비용, 기능 및 사용 편의성 간의 균형을 제공하지만 응답성이 약간 떨어지고 통합 문제가 있을 수 있습니다.

<br/>

<center>
<img height="100%" width="100%" src="/images/blog/101-openai-chatgpt-realtime-api-cost-breakdown/options-for-phone-answer-services.png"  alt="전화 응답 서비스에 대한 다양한 옵션: 인간 vs. OpenAI vs. 음성 AI 스타트업">

*전화 응답 서비스에 대한 다양한 옵션: 인간 vs. OpenAI vs. 음성 AI 스타트업*
</center>

음성 인식 및 자연어 처리 분야의 실무자로서 제 의견은 다음과 같습니다.

1. 시장에 나와 있는 통합 음성 AI 에이전트를 사용하십시오. 예를 들어, [제가 SeaChat으로 자랑스럽게 구축한 것](https://wiki.seasalt.ai/seachat/inbound-voice-agent/tutorial/?utm_source=blog/)과 같은 것입니다. 이들은 성숙하고 저렴합니다.
2. OpenAI 실시간 API에 대해 1년 더 시간을 주어 기니피그들이 테스트하도록 하고, 가격이 더 저렴한 시간당 10달러로 떨어지기를 바랍니다. 그러면 **정말 놀라운 일이 될 것입니다**. 조심하세요, 인간 에이전트!


## 더 알아보기
합리적인 가격으로 고객 서비스를 위한 AI 음성 기술을 먼저 탐색하고 싶다면 [SeaChat](https://chat.seasalt.ai/?utm_source=blog/)을 방문하거나 [데모를 예약](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting)할 수 있습니다.


## 이 시리즈에 대해

*이것은 소규모 기업을 위한 고객 커뮤니케이션 전략을 탐구하는 5개 기사 시리즈로, 응답 서비스에 중점을 둡니다:*

- [소규모 기업이 응답 서비스를 필요로 하는 이유?](https://seasalt.ai/blog/96-why-small-businesses-need-answering-service/): 응답 서비스의 중요성과 이점을 알아보세요.

- [아웃소싱 vs. 사내 라이브 접수원](https://seasalt.ai/blog/97-live-receptionist-inhouse-outbound/): 라이브 접수원이란 무엇인가요? 아웃소싱해야 할까요, 아니면 사내에서 고용해야 할까요?

- [자동 전화 응답 시스템 (대화형 음성 응답 IVR vs. 음성 AI 에이전트)](https://seasalt.ai/blog/98-inbound-answering-automated-system/): 자동 응답 서비스란 무엇인가요? 로봇 IVR 또는 음성 AI 에이전트를 사용해야 할까요?

- [결정: 내 소규모 기업은 라이브 접수원 또는 자동 응답 서비스를 사용해야 할까요?](https://seasalt.ai/blog/99-inbound-answering-live-vs-automated/): 저희 시리즈에서 응답 서비스에 대해 모두 배웠습니다. 이제 귀하의 비즈니스에 가장 적합한 서비스 유형을 결정할 때입니다.

- (이 기사) [OpenAI vs. 인간 vs. 음성 AI: 비용 비교](https://seasalt.ai/blog/101-openai-chatgpt-realtime-api-cost-breakdown/): OpenAI의 최신 음성 AI 기술은 훌륭한 음성 AI 에이전트입니다. 실제 비용은 얼마입니까?
`;export{n as default};

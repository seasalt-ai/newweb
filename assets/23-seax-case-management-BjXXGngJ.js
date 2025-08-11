const e=`---
title: "SeaX 사례 관리: 컨택 센터 사례 추적 제어"
metatitle: "SeaX 사례 관리: 고객 상호 작용 추적"
date: 2022-08-17 22:28:15+00:00
modified_date: 2025-07-29 20:45:17+00:00
draft: false
author: Sarah Reid
description: "이 게시물에서는 AI와 사례 관리의 통합을 살펴봅니다. 이는 에이전트에게 SeaX에서 고객과의 상호 작용을 추적하고 기록하는 도구를 제공합니다."
weight: 1
tags:
  - SeaX
image: images/blog/23-seax-case-management/0-main.png
canonicalURL: /blog/seax-case-management/
url: /blog/seax-case-management/
---

*이전 블로그 게시물인 [SeaX KB: 질문하기 전에 답변하는 지식 기반](https://seasalt.ai/blog/22-seax-knowledge-base/)에서 Seasalt.ai의 자체 지식 기반이 회사 정보를 에이전트의 손끝에 직접 제공하여 컨택 센터의 효율성과 정확성을 높이는 방법을 보여드렸습니다. 이 게시물에서는 AI와 SeaX의 사례 관리 시스템 통합에 대해 계속해서 다룰 것입니다. 이 시스템은 에이전트에게 SeaX 인터페이스에서 고객과의 상호 작용을 추적하고 기록하는 강력한 도구를 제공합니다.*

# 목차
- [티켓팅 vs 사례 관리](#ticketing-vs-case-management)
- [SeaX 사례 관리](#seax-case-management)
    - [라이브 에이전트를 위한 임베디드 사용자 인터페이스](#embedded-user-interface-for-live-agents)
    - [강력한 자동 검색](#powerful-automatic-search)
    - [통합 연락처 관리](#integrated-contact-management)
    - [연결된 고객 상호 작용](#linked-customer-interactions)
    - [사용자 정의 가능한 필드](#customizable-fields)
    - [자동화된 사례 후속 조치](#automated-case-follow-up)
    - [관리자 대시보드](#administrator-dashboard)
    - [웨비나](#webinar)

# 티켓팅 vs 사례 관리

'티켓팅'과 '사례 관리'라는 용어는 문제의 세부 정보가 데이터 객체에 저장되고, 이 데이터 객체가 문제 해결 과정에서 사용되고 참조되는 시스템을 지칭하기 위해 다소 상호 교환적으로 사용되는 경우가 많습니다. 그러나 이 두 용어가 일반적으로 다른 점은 시스템의 복잡성입니다.

'티켓팅' 시스템은 일반적으로 더 간단하며, 티켓은 특정 문제의 세부 정보를 저장하는 데 사용되며, 문제가 해결되면 폐기되거나 보관됩니다. '사례 관리' 시스템은 일반적으로 더 복잡하며, 문제의 수명 주기를 추적하는 것 이상을 수행합니다. 사례는 종종 다른 유사한 사례나 사례를 개설한 고객과 같은 다른 것들과 연결되어, 추세를 사용하여 더 광범위한 문제를 해결할 수 있습니다. 문제 해결 과정에서 고객과의 여러 상호 작용에 대한 정보는 사례 데이터에 저장될 수 있으므로, 사례를 처리하는 각 후속 에이전트는 정확히 무슨 일이 일어나고 있는지 알 수 있습니다. 고객이 반복되는 문제로 돌아오면 사례를 닫았다가 다시 열 수 있습니다. 사례 관리는 컨택 센터 내에서 더 복잡한 작업과 상호 작용을 추적하는 데 더 강력하고 유연한 도구입니다.

# SeaX 사례 관리

우리의 사례 관리는 고객과 상호 작용하면서 사용하기 쉽다는 원칙에 기반을 두고 있습니다. 에이전트가 고객을 돕는 동안 가장 마지막으로 걱정해야 할 것은 통화 후 메모를 작성하기 위해 모든 것을 기억해야 하거나, 고객과 대화하고 기존 정보를 찾고 새로운 정보에 대한 메모를 작성하기 위해 여러 다른 프로그램으로 전환해야 하는 것입니다.

데모를 바로 보고 싶다면, 짧은 SeaX 사례 관리 데모 비디오를 시청할 수 있습니다:

<iframe width="85%" height="450px" src="https://www.youtube.com/embed/yf1REVZtRa8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

## 라이브 에이전트를 위한 임베디드 사용자 인터페이스

<center>
<img src="/images/blog/23-seax-case-management/1-intro.png" alt="SeaX 사례 관리 인터페이스의 첫 모습."/>

*SeaX 사례 관리 인터페이스의 첫 모습.*
</center>

사례 관리를 에이전트가 접근할 수 있도록 하는 데 중점을 두었기 때문에, SeaX 사례 관리 시스템은 SeaX에 기본적으로 통합되어 있습니다. 에이전트는 통화 및 메시지를 처리하는 동일한 인터페이스에서 새로운 사례를 추가하고, 기존 사례를 편집하고, 필요한 모든 메모를 작성할 수 있습니다. 창을 전환하거나, 탭을 넘기거나, 중첩된 웹 페이지를 탐색할 필요가 없습니다.

## 강력한 자동 검색

<center>
<img src="/images/blog/23-seax-case-management/2-search.png" alt="SeaX 사례 관리 검색 인터페이스."/>

*SeaX 사례 관리 검색 인터페이스.*
</center>

당사의 빠르고 정확한 사례 검색을 통해 에이전트 메모의 전체 텍스트 검색 및 사용자 정의 데이터 필드를 통한 필터링을 포함하여 사례 정보의 모든 측면을 검색하고 정렬할 수 있습니다.

## 통합 연락처 관리

<center>
<img src="/images/blog/23-seax-case-management/3-contacts.png" alt="SeaX 사례 관리 고객 연락처 인터페이스."/>

*SeaX 사례 관리 고객 연락처 인터페이스.*
</center>

사례 정보 관리 외에도, 고객 정보를 저장하고 고객의 사례를 연결하기 위한 연락처 관리도 제공합니다. 사례와 마찬가지로, 고객에 대한 메모를 저장하고 레이블별로 그룹화하여 컨택 센터에 누가 전화하는지 정확히 추적할 수 있습니다.

## 연결된 고객 상호 작용

<center>
<img src="/images/blog/23-seax-case-management/4-recording.png" alt="통화 녹음을 관련 사례에 직접 삽입합니다."/>

*통화 녹음을 관련 사례에 직접 삽입합니다.*
</center>

각 사례는 관련 연락처에 연결되어 있지만, 개별 통화도 관련 사례에 연결할 수 있습니다. '작업 녹음 삽입' 기능을 사용하면 통화 녹음을 사례에 직접 첨부할 수 있으므로, 각 관련 고객 상호 작용에서 정확히 무슨 일이 일어났는지 나중에 검토할 수 있습니다.

## 사용자 정의 가능한 필드

<center>
<img src="/images/blog/23-seax-case-management/5-custom-fields.png" alt="고객 및 사례 정보를 저장하기 위한 사용자 정의 데이터 필드를 정의합니다."/>

*고객 및 사례 정보를 저장하기 위한 사용자 정의 데이터 필드를 정의합니다.*
</center>

우리는 모든 회사가 고유하며, 모든 컨택 센터가 사례에서 다양한 유형의 정보를 수집해야 한다는 것을 이해합니다. 따라서 SeaX 사례 관리 시스템은 중요한 데이터 필드의 기본 세트를 제공하면서 사용자 정의 필드 기능을 제공하여 사례 및 고객 연락처 모두에 추가 데이터 필드를 추가하여 컨택 센터에서 필요한 모든 정보를 수집할 수 있도록 합니다.

<center>
<img src="/images/blog/23-seax-case-management/6-custom-fields.png" alt="사례 및 연락처 카드에서 사용자 정의 필드에 직접 액세스합니다."/>

*사례 및 연락처 카드에서 사용자 정의 필드에 직접 액세스합니다.*
</center>

## 자동화된 사례 후속 조치

<center>
<img src="/images/blog/23-seax-case-management/7-sms.png" alt="고객으로부터 사례 상태 및 CSAT 점수를 수집하기 위해 메시지를 자동화합니다."/>

*고객으로부터 사례 상태 및 CSAT 점수를 수집하기 위해 메시지를 자동화합니다.*
</center>

컨택 센터에서는 사례가 올바르게 처리되도록 하기 위해 작고 반복적인 고객 상호 작용이 많이 이루어져야 합니다. SeaX 사례 관리 시스템은 이러한 대화를 자동화하여 에이전트가 더 복잡한 문제에 집중할 수 있도록 합니다. 버튼 클릭 한 번으로 고객에게 메시지를 보내 오랫동안 열려 있던 사례의 상태를 확인하거나 고객 만족도 설문 조사에 대한 응답을 요청할 수 있으며, 시스템은 응답에 따라 사례 정보를 자동으로 업데이트합니다.

## 관리자 대시보드

<center>
<img src="/images/blog/23-seax-case-management/8-admin.png" alt="관리자 대시보드를 사용하여 사례 관리 시스템의 정보를 제어합니다."/>

*관리자 대시보드를 사용하여 사례 관리 시스템의 정보를 제어합니다.*
</center>

컨택 센터의 사례에 대한 정보를 저장하는 것과 컨택 센터의 사례를 관리하는 것은 별개의 문제입니다. SeaX 사례 관리 시스템은 관리자 대시보드를 제공하여 이를 수행할 수 있도록 합니다. 여기에서 시스템의 모든 사례를 모니터링하고 세부 정보를 파고들어 어떤 사례에 주의가 필요한지 결정할 수 있습니다. 시간 범위 또는 에이전트별로 정렬하거나, 자동 상태 확인 메시지를 보내거나, 특정 태그가 있는 사례를 검색하는 등 사례 관리에 필요한 모든 작업을 수행할 수 있습니다.

## 웨비나

사례 관리 시스템과 SeaX 플랫폼과의 통합에 대한 더 자세한 내용을 보고 싶다면, 해당 주제에 대한 웨비나를 시청하십시오:

<iframe width="85%" height="450px" src="https://www.youtube.com/embed/xwZla3ftWLk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

SeaX 사례 관리 시스템이 고객과 상호 작용할 때 에이전트를 어떻게 지원하는지에 대해 시간을 내어 읽어주셔서 감사합니다. SeaX 플랫폼을 사용하여 대량 SMS 메시지를 보내는 프로세스를 자세히 다룰 다음 블로그 게시물을 기대해 주십시오. 즉시 더 자세히 알고 싶다면, [데모 예약 양식](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting)을 작성하여 SeaX 플랫폼을 직접 경험해 보십시오.
`;export{e as default};

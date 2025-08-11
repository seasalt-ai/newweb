const e=`---
title: "SeaX KB: 묻기 전에 답하는 지식 기반"
metatitle: "SeaX KB: 묻기 전에 답하는 지식 기반"
date: 2022-08-15 22:01:32-07:00
modified_date: 2025-07-30 17:01:25.784000+00:00
draft: false
author: Kim Dodds
description: "이 기사에서는 실시간으로 제안된 답변을 제공하는 SeaX의 AI 기반 지식 기반을 소개하여 AI 통합 주제를 계속합니다."
weight: 1
tags:
  - SeaX
canonicalURL: /blog/seax-kb-a-knowledge-base/
url: /blog/seax-kb-a-knowledge-base/
---

*이전 블로그 게시물 [SeaX Voice Intelligence로 컨택 센터에 고유한 음성 제공](https://seasalt.ai/blog/21-seax-voice-intelligence/)에서 Seasalt.ai의 사내 텍스트 음성 변환 및 음성 텍스트 변환 엔진이 SeaX 플랫폼의 다양한 측면을 어떻게 향상시키는지 보여주었습니다. 이 기사에서는 실시간으로 대화를 수신하여 제안된 답변을 제공하는 SeaX의 AI 기반 지식 기반을 소개하여 AI 통합 주제를 계속할 것입니다.*

# 목차
- [전통적인 지식 기반](#the-traditional-knowledge-base)
- [SeaX 지식 기반](#seax-knowledge-base)
    - [라이브 상담원을 위한 임베디드 사용자 인터페이스](#embedded-user-interface-for-live-agents)
    - [빠르고 정확한 검색](#fast-and-accurate-search)
    - [실시간 자동 제안](#real-time-automated-suggestions)
    - [응답 템플릿](#response-templates)
    - [KB 관리](#kb-management)
    - [웨비나](#webinar)

# 전통적인 지식 기반

핵심적으로 지식 기반(KB)은 온라인 셀프 서비스를 위한 (이상적으로) 잘 정리되고 쉽게 액세스할 수 있는 정보 모음입니다. 좋은 KB 시스템에는 사용자가 올바른 정보를 더 쉽게 찾을 수 있도록 계층적 콘텐츠 구성, 검색 및 태그 지정과 같은 기능이 있습니다.

상세한 지식 기반을 유지하는 것은 오늘날 대부분의 회사에서 표준 관행입니다. 목적이 직원이 제품에 대한 내부 정보를 공유하도록 돕는 것이든, 잠재 고객의 질문에 답변하는 것이든, 고객의 문제 해결을 돕는 것이든, 또는 위의 모든 것이든, 직원과 고객 모두에게 주요 정보를 액세스할 수 있도록 하는 것은 더 효율적인 작업과 더 높은 고객 만족도를 의미합니다.

일반적으로 지식 기반은 콘텐츠 관리 시스템 또는 지식 관리 시스템을 통해 구현 및 유지 관리됩니다. 이러한 시스템은 조직의 요구에 따라 간단한 문서 관리자에서 게시 워크플로, 대상 타겟팅, 공동 작업 도구 등을 포함하는 기능이 풍부한 서비스에 이르기까지 규모가 다양할 수 있습니다. 이러한 시스템은 다양한 측면에서 다재다능하지만 거의 항상 웹 페이지 또는 응용 프로그램과의 상호 작용을 통해 액세스하도록 설계되었습니다. 고객 서비스 상담원의 특정 사용 사례(고객 지원을 위한 주요 리소스 중 하나로 지식 기반을 자주 사용)의 경우 상담원이 사용자 쿼리를 가능한 한 원활하게 처리할 수 있도록 컨택 센터 소프트웨어와의 긴밀한 통합이 필요합니다.

# SeaX 지식 기반

당사의 지식 기반은 음성 기반 고객 서비스라는 매우 구체적인 사용 사례를 염두에 두고 처음부터 설계되었습니다. 기존의 거의 모든 지식 기반 시스템이 계층적 웹 페이지를 탐색하거나 검색 쿼리를 입력하는 데 의존하는 반면, 당사의 지식 기반은 고객 서비스 담당자가 고객에게 전적인 주의를 기울이면서도 질문에 신속하게 답변할 수 있도록 더 빠르고 자율적이어야 했습니다.

데모로 바로 이동하려면 짧은 SeaX KB 데모를 시청할 수 있습니다.
<iframe width="85%" height="450px" src="https://www.youtube.com/embed/C_e_gaZHSFA" title="YouTube 동영상 플레이어" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>


## 라이브 상담원을 위한 임베디드 사용자 인터페이스

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-intro.png" alt="SeaX 지식 기반 인터페이스의 첫 모습."/>

*SeaX 지식 기반 인터페이스의 첫 모습.*
</center>

당연히 당사의 지식 기반 엔진은 컨택 센터 응용 프로그램을 위해 특별히 설계되었기 때문에 SeaX 플랫폼에 기본적으로 통합되어 상담원이 통화 및 메시지를 처리하는 동안 지식 기반에 원활하게 액세스할 수 있습니다. 창을 전환하거나 탭을 뒤지거나 중첩된 웹 페이지를 탐색할 필요가 없습니다.

## 빠르고 정확한 검색

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-manual-search.png" alt="SeaX 지식 기반에서 수동 검색 결과."/>

*SeaX 지식 기반에서 수동 검색 결과.*
</center>

가장 기본적인 수준에서 당사의 지식 기반은 매우 빠르고 정확한 검색 엔진으로 구동됩니다. 당사는 최첨단 자연어 처리 및 정보 추출 기술을 사용하여 원시 텍스트, 예제 쿼리 및 지원 URL에서 의미를 수집하고 고객의 발언을 가장 관련성 있는 지식 기반 항목과 일치시킵니다. 지식 기반 엔진은 확장성이 뛰어나며 응답 시간에 인지할 수 있는 변화 없이 수십억 개의 문서를 지원할 수 있습니다.

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-detail.png" alt="검색 결과를 클릭한 후 확장된 보기의 지식 기반 문서."/>

*검색 결과를 클릭한 후 확장된 보기의 지식 기반 문서.*
</center>

가장 관련성 있는 문서를 찾는 것 외에도 당사의 검색 엔진은 사용자의 쿼리에서 두드러진 키워드를 추출하고 제안된 각 지식 기반 항목에서 가장 관련성 있는 키워드와 구절을 강조 표시하여 더 세분화된 결과를 제공합니다.

## 실시간 자동 제안

그러나 지금까지 보여준 것은 여전히 수동 검색입니다. 라이브 상담원은 고객과 상호 작용하느라 바쁘고 정보가 필요할 때마다 지식 기반에 수동으로 검색을 입력하면 귀중한 시간이 낭비됩니다. 따라서 SeaX 지식 기반과 함께 제공되는 가장 큰 부가 가치는 텍스트 및 음성 기반 상호 작용 모두에 대한 실시간 자동 검색입니다.

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-automatic-search.png" alt="들어오는 사용자 메시지에 대한 자동 문서 제안을 보여주는 SeaX 지식 기반."/>

*들어오는 사용자 메시지에 대한 자동 문서 제안을 보여주는 SeaX 지식 기반.*
</center>

새로운 사용자 메시지가 들어올 때마다 지식 기반은 고객의 정확한 메시지로 자동으로 쿼리합니다. 실시간으로 고객이 말하는 동안 상담원에게는 참조용으로 최신 지식 기반 문서 제안이 제공됩니다.

이것은 음성 통화에도 적용됩니다! 이전 블로그 게시물 [SeaX Voice Intelligence로 컨택 센터에 고유한 음성 제공](https://seasalt.ai/blog/21-seax-voice-intelligence/)에서는 Seasalt.ai의 최첨단 음성 텍스트 변환 엔진을 선보였습니다. SeaX 플랫폼은 이 엔진을 활용하여 모든 음성 통화를 실시간으로 기록합니다. 결과적으로 자동 지식 기반 검색을 포함한 다양한 다운스트림 응용 프로그램에 이러한 기록을 사용할 수 있습니다.

## 응답 템플릿

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-response-template.png" alt="SeaX 지식 기반에서 생성된 응답 템플릿으로 한 번의 클릭으로 고객에게 회신하는 상담원."/>

*SeaX 지식 기반에서 생성된 응답 템플릿으로 한 번의 클릭으로 고객에게 회신하는 상담원.*
</center>

지식 기반 검색 결과에는 텍스트 기반 상호 작용에 대한 상담원의 응답성을 높이는 데 도움이 되는 추가 기능이 하나 있습니다. 상담원이 관련 지식 기반 문서를 찾으면 제목 왼쪽에 있는 "+" 아이콘을 클릭하기만 하면 채팅 창에 응답 템플릿을 삽입할 수 있습니다. 백엔드에서는 지식 기반을 검색할 때마다 제안된 지식 기반 문서에서 가장 관련성 있는 정보를 기반으로 사용자의 질문에 대한 서면 응답을 생성하고 지원 링크를 포함합니다. 상담원이 더 이상 처음부터 시작하지 않기 때문에 상담원의 응답 시간을 크게 향상시킬 수 있습니다. 대신 채팅 창에 지식 기반 문서의 중요한 정보가 이미 표시되어 있으므로 편집하고 보내기만 하면 됩니다.


## KB 관리

이제 지식 기반 엔진이 무엇을 할 수 있는지 보았으므로 백엔드에 대한 한 가지 질문이 남아 있습니다. 지식 기반의 정보는 어떻게 관리됩니까? SeaX 플랫폼은 관리자가 설정 페이지에서 액세스할 수 있는 완전히 통합된 지식 기반 관리 UI를 제공합니다.

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-management.png" alt="SeaX 지식 기반 관리 인터페이스."/>

*SeaX 지식 기반 관리 인터페이스.*
</center>

이 페이지에서 개별 새 지식 기반 항목을 추가하거나 스프레드시트 파일을 사용하여 전체 지식 기반을 가져오거나 내보낼 수 있습니다. 인터페이스는 지식 기반 항목 편집 및 삭제도 지원하므로 지식 기반을 지속적으로 최신 상태로 유지할 수 있습니다.

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-edit.png" alt="SeaX 지식 기반 관리 인터페이스를 통해 단일 지식 기반 문서 편집."/>

*SeaX 지식 기반 관리 인터페이스를 통해 단일 지식 기반 문서 편집.*
</center>

## 웨비나

지식 기반 시스템과 SeaX 플랫폼과의 통합 방식에 대해 더 자세히 알고 싶으시면 해당 주제에 대한 웨비나를 시청하십시오.
<iframe width="85%" height="450px" src="https://www.youtube.com/embed/FOqQ01fpKQ4" title="YouTube 동영상 플레이어" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

일대일 데모를 원하시거나 Seasalt.ai가 귀사의 비즈니스 요구에 맞는 솔루션을 맞춤화하는 방법에 대해 알아보려면 [데모 예약 양식](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting)을 작성해 주십시오.`;export{e as default};

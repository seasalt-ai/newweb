---
title: "SeaX KB: 질문하기 전에 답변하는 지식 기반"
metatitle: "SeaX KB: 질문하기 전에 답변하는 지식 기반"
date: 2022-08-15T22:01:32-07:00
draft: false
author: Kim Dodds
image: /images/blog/22-seax-knowledge-base/thumbnail.png
description: "이 게시물에서는 SeaX의 AI 기반 지식 기반과의 AI 통합 주제를 계속해서 다루며, 실시간으로 제안된 답변을 제공합니다."
weight: 1
tags: ["SeaX"]
canonicalURL: "/blog/seax-kb-a-knowledge-base/"
url: "/blog/seax-kb-a-knowledge-base/"
---

*이전 블로그 게시물인 [SeaX Voice Intelligence로 컨택 센터에 자체 음성 부여](https://seasalt.ai/blog/21-seax-voice-intelligence/)에서 Seasalt.ai의 자체 개발 텍스트 음성 변환 및 음성 텍스트 변환 엔진이 SeaX 플랫폼의 다양한 측면을 어떻게 향상시키는지 보여드렸습니다. 이 게시물에서는 대화를 듣고 실시간으로 제안된 답변을 제공하는 SeaX의 AI 기반 지식 기반과의 AI 통합 주제를 계속해서 다룹니다.*

# 목차
- [전통적인 지식 기반](#the-traditional-knowledge-base)
- [SeaX 지식 기반](#seax-knowledge-base)
    - [라이브 에이전트를 위한 임베디드 사용자 인터페이스](#embedded-user-interface-for-live-agents)
    - [빠르고 정확한 검색](#fast-and-accurate-search)
    - [실시간 자동 제안](#real-time-automated-suggestions)
    - [응답 템플릿](#response-templates)
    - [KB 관리](#kb-management)
    - [웹 세미나](#webinar)

# 전통적인 지식 기반

기본적으로 지식 기반(KB)은 (이상적으로) 잘 정리되고 쉽게 접근할 수 있는 정보의 라이브러리로, 온라인에서 셀프 서비스 방식으로 활용됩니다. 좋은 지식 기반 시스템은 사용자가 올바른 정보를 더 쉽게 찾을 수 있도록 계층적 콘텐츠 구성, 검색 및 레이블링과 같은 기능을 갖추고 있습니다.

자세한 지식 기반을 유지하는 것은 오늘날 대부분의 기업에게 표준적인 관행입니다. 제품에 대한 내부 정보를 직원과 공유하거나, 잠재 고객의 질문에 답하거나, 고객이 문제 해결을 돕거나, 이 모든 것을 목표로 하든, 핵심 정보에 직원과 고객이 접근할 수 있도록 하는 것은 더 효율적인 작업과 더 높은 고객 만족도를 의미합니다.

일반적으로 지식 기반은 콘텐츠 관리 시스템 또는 지식 관리 시스템을 통해 구현 및 유지 관리됩니다. 이러한 시스템은 조직의 필요에 따라 규모가 다양할 수 있으며, 간단한 문서 관리자부터 게시 워크플로, 대상 고객 지정, 협업 도구 등을 포함하는 기능이 풍부한 서비스까지 다양합니다. 이러한 시스템은 다양한 방식으로 다재다능하지만, 거의 항상 웹 페이지 또는 애플리케이션과의 상호 작용을 통해 액세스하도록 의도되었습니다. 고객 서비스 에이전트의 특정 사용 사례(일반적으로 고객을 돕는 주요 리소스 중 하나로 지식 기반을 활용하는)의 경우, 에이전트가 사용자 쿼리를 가능한 한 원활하게 처리할 수 있도록 컨택 센터 소프트웨어와의 긴밀한 통합이 필요합니다.

# SeaX 지식 기반

저희 지식 기반은 첫날부터 매우 특정한 사용 사례, 즉 음성 기반 고객 서비스를 염두에 두고 설계되었습니다. 기존 지식 기반 시스템의 대부분(전부는 아니더라도)이 계층적 웹 페이지를 탐색하거나 검색 쿼리를 입력하는 방식에 의존하는 반면, 저희 KB는 고객 서비스 담당자가 고객에게 전적으로 집중하면서도 질문에 빠르게 답변할 수 있도록 더 빠르고 독립적이어야 했습니다.

데모를 바로 보고 싶다면, 짧은 SeaX KB 데모 비디오를 시청하세요:
<iframe width="85%" height="450px" src="https://www.youtube.com/embed/C_e_gaZHSFA" title="YouTube 비디오 플레이어" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>


## 라이브 에이전트를 위한 임베디드 사용자 인터페이스

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-intro.png" alt="SeaX 지식 기반 인터페이스의 첫 모습."/>

*SeaX 지식 기반 인터페이스의 첫 모습.*
</center>

당연히 저희 KB 엔진은 컨택 센터 애플리케이션을 위해 특별히 설계되었기 때문에 SeaX 플랫폼과 기본적으로 통합되어 에이전트가 통화 및 메시지를 처리하는 동안 KB에 원활하게 액세스할 수 있습니다. 창을 전환하거나 탭을 넘기거나 중첩된 웹 페이지를 탐색할 필요가 없습니다.

## 빠르고 정확한 검색

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-manual-search.png" alt="SeaX 지식 기반에서 수동 검색 결과."/>

*SeaX 지식 기반에서 수동 검색 결과.*
</center>

가장 기본적인 수준에서 저희 지식 기반은 믿을 수 없을 정도로 빠르고 정확한 검색 엔진으로 구동됩니다. 저희는 최첨단 자연어 처리 및 정보 추출 기술을 사용하여 일반 텍스트, 샘플 쿼리 및 지원 URL에서 의미를 수집하고 고객의 발언을 가장 관련성 높은 KB 항목과 일치시킵니다. 지식 기반 엔진은 확장성이 뛰어나며 응답 시간에 눈에 띄는 변화 없이 수십억 개의 문서를 지원할 수 있습니다.

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-detail.png" alt="검색 결과를 클릭한 후 확장된 보기의 KB 문서."/>

*검색 결과를 클릭한 후 확장된 보기의 KB 문서.*
</center>

가장 관련성 높은 문서를 찾는 것 외에도, 저희 검색 엔진은 사용자 쿼리에서 중요한 키워드를 추출하고 제안된 각 KB 항목 내에서 가장 관련성 높은 키워드와 구절을 강조 표시하여 더 세분화된 결과를 제공합니다.

## 실시간 자동 제안

하지만 지금까지 보여드린 것은 여전히 수동 검색입니다. 라이브 에이전트는 고객과 상호 작용하느라 바쁘기 때문에 정보를 원할 때마다 KB에 수동 검색을 입력하는 데 귀중한 시간을 낭비할 것입니다. 이러한 이유로 SeaX 지식 기반이 제공하는 가장 큰 부가 가치는 텍스트 및 음성 기반 상호 작용 모두에 대한 실시간 자동 검색입니다.

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-automatic-search.png" alt="SeaX KB는 들어오는 사용자 메시지에 대한 자동 기사 제안을 보여줍니다."/>

*SeaX KB는 들어오는 사용자 메시지에 대한 자동 기사 제안을 보여줍니다.*
</center>

새로운 사용자 메시지가 들어올 때마다 고객의 정확한 메시지를 사용하여 지식 기반이 자동으로 쿼리됩니다. 실시간으로 고객이 말하는 동안 에이전트에게는 최신 KB 문서 제안이 제공됩니다.

그리고 이것은 음성 기반 통화에서도 작동합니다! 저희의 마지막 블로그 게시물인 [SeaX Voice Intelligence로 컨택 센터에 자체 음성 부여](https://seasalt.ai/blog/21-seax-voice-intelligence/)에서는 Seasalt.ai의 최첨단 음성-텍스트 변환 엔진을 선보였습니다. SeaX 플랫폼은 이 엔진을 사용하여 모든 음성 기반 통화를 실시간으로 전사합니다. 결과적으로, 저희는 이러한 전사를 자동 지식 기반 검색을 포함한 다양한 다운스트림 애플리케이션에 사용할 수 있습니다.

## 응답 템플릿

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-response-template.png" alt="에이전트가 SeaX KB가 생성한 응답 템플릿을 사용하여 한 번의 클릭으로 고객에게 응답합니다."/>

*에이전트가 SeaX KB가 생성한 응답 템플릿을 사용하여 한 번의 클릭으로 고객에게 응답합니다.*
</center>

지식 기반의 검색 결과에는 텍스트 기반 상호 작용에 대한 에이전트 응답 속도를 높이는 추가 기능이 있습니다. 에이전트가 관련 KB 문서를 찾으면 제목 왼쪽에 있는 `+` 아이콘을 클릭하기만 하면 응답 템플릿을 채팅 창에 삽입할 수 있습니다. 백엔드에서는 KB가 검색될 때마다 제안된 KB 문서의 가장 관련성 높은 정보를 기반으로 사용자 질문에 대한 서면 응답을 생성하고 모든 지원 링크를 포함합니다. 이는 에이전트가 백지 상태에서 시작할 필요가 없으므로 에이전트 응답 시간을 크게 향상시킬 수 있습니다. 대신, 그들은 이미 채팅 창에 KB 문서의 중요한 정보를 가지고 있으므로 간단히 편집하여 보낼 수 있습니다.


## KB 관리

이제 KB 엔진이 무엇을 할 수 있는지 살펴보았으니, 백엔드에 대한 한 가지 질문이 남아 있습니다. 지식 기반의 정보를 어떻게 관리합니까? SeaX 플랫폼에는 설정 페이지에서 관리자가 사용할 수 있는 완전히 통합된 KB 관리 UI가 있습니다.

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-management.png" alt="SeaX KB 관리 인터페이스."/>

*SeaX KB 관리 인터페이스.*
</center>

이 페이지에서 단일 새 KB 항목을 추가하거나 스프레드시트 파일을 사용하여 전체 지식 기반을 가져오기/내보내기할 수 있습니다. 인터페이스는 또한 KB 항목 편집 및 삭제를 지원하므로 KB를 지속적으로 최신 상태로 유지할 수 있습니다.

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-edit.png" alt="SeaX KB 관리 인터페이스를 통해 단일 KB 문서를 편집합니다."/>

*SeaX KB 관리 인터페이스를 통해 단일 KB 문서를 편집합니다.*
</center>

## 웹 세미나

지식 기반 시스템과 SeaX 플랫폼과의 통합 방법에 대한 더 심층적인 설명을 보고 싶으시면, 이 주제에 대한 웹 세미나를 시청하십시오:
<iframe width="85%" height="450px" src="https://www.youtube.com/embed/FOqQ01fpKQ4" title="YouTube 비디오 플레이어" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

일대일 데모를 원하시거나 Seasalt.ai가 귀하의 비즈니스 요구에 맞게 솔루션을 어떻게 맞춤화할 수 있는지 자세히 알아보려면 [데모 예약 양식](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting)을 작성하십시오.

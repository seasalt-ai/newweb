const n=`---
title: "Google 지도에서 내 주변 메시징으로 가상 에이전트 시작하기"
metatitle: "Google 지도 가상 에이전트를 내 주변 메시징으로 시작하기"
date: 2022-04-19 15:27:21-07:00
modified_date: 2025-07-29 17:35:15+00:00
draft: false
author: Ruli Setiawati
description: "내 주변 메시징으로 Google 비즈니스 메시지에서 가상 에이전트를 시작하세요."
weight: 1
tags:
  - NearMe
image: images/blog/13-launch-your-virtual-agent-on-Google-Maps-with-Near-Me-Messaging/thumbnail.png
canonicalURL: /blog/virtual-agent-on-Google-Maps-with-near-me-messaging/
url: /blog/virtual-agent-on-Google-Maps-with-near-me-messaging/
---

이전에 [내 주변 메시징](https://seasalt.ai/blog/12-near-me-messaging-google-business-messages/)과 그 이점에 대해 소개해 드렸습니다. 내 주변 메시징은 Google 비즈니스 메시지 가상 에이전트를 구현하며, 비즈니스의 Google 지도 프로필에 있는 채팅 버튼에서 직접 사용할 수 있습니다. 내 주변 메시징의 가상 에이전트는 인간과 유사한 응답을 제공하는 최첨단 자연어 이해 기술로 구동됩니다. 내 주변 메시징이 유사한 서비스와 차별화되는 점은 5분 설정 시간, 셀프 서비스 사용자 지정 및 내장된 라이브 채팅 지원입니다.

내 주변 메시징의 이점은 다음과 같습니다.
- 탁월한 고객 서비스를 제공하는 데 시간과 인력 절약
- 셀프 서비스 플랫폼을 통해 에이전트 사용자 지정
- 내 주변 분석을 통해 고객 통찰력 확보
- 대화 기록을 통해 고객의 요구 사항 이해
- 라이브 에이전트 기능을 통해 고객과 직접 채팅

현재 내 주변 메시징의 베타 테스터를 찾고 있습니다. 베타 테스터에게는 제한된 기간 동안 계약 없이 저희 비용으로 서비스를 제공합니다. 가상 에이전트를 사용해보고 귀하의 비즈니스에 적합한지 확인할 수 있는 이 기회를 놓치지 마십시오. 시작하려면 내 주변 메시징으로 가상 에이전트를 시작하는 방법에 대한 이 단계별 가이드를 따르십시오!


## 내 주변 메시징으로 가상 에이전트를 시작하는 단계별 가이드

### 1단계. 내 주변 메시징 웹사이트 방문 (업데이트: 제품을 옴니채널 챗봇 빌더로 전환했습니다. 이제 [SeaChat](https://chat.seasalt.ai/?utm_source=blog)이라고 합니다!).

내 주변 메시징 웹사이트 (업데이트: 제품을 옴니채널 챗봇 빌더로 전환했습니다. 이제 [SeaChat](https://chat.seasalt.ai/?utm_source=blog)이라고 합니다!)로 이동하여 *“로그인”* 버튼을 클릭합니다. Google 비즈니스 프로필에 사용하는 계정으로 로그인한 후, 사용 가능한 모든 상자를 선택하고 Seasalt AI에 가상 에이전트를 시작할 권한을 부여했는지 확인하십시오. Seasalt.ai는 [공식 Google 파트너](https://developers.google.com/business-communications/business-messages/partners)이므로, 이 권한을 책임감 있게 사용할 것임을 확신할 수 있습니다. **저희는 이 권한을 두 가지 기능에 사용합니다. 첫째, 가상 에이전트가 정확한 응답을 제공할 수 있도록 Google 비즈니스 프로필에서 정보에 액세스하고, 둘째, 귀하를 대신하여 에이전트를 귀하의 비즈니스 Google 지도 페이지에 시작할 수 있도록 합니다.**

저희는 이 권한을 사용하여 귀하의 비즈니스 프로필을 편집하거나 삭제하지 않습니다. Google은 *“보기”*, *“편집”*, *“삭제”*에 대한 별도의 권한을 제공하지 않으므로, 모든 권한을 부여해야 합니다. 저희는 *“보기”* 권한만 사용합니다.

<center>
<img src="/images/blog/13-launch-your-virtual-agent-on-Google-Maps-with-Near-Me-Messaging/2-sign-in.png" alt="Google 비즈니스 프로필에 사용하는 계정으로 로그인하세요"/>

*“Google로 로그인”을 클릭하고 Google 비즈니스 프로필 계정으로 로그인하세요.*
</center>

<center>
<img src="/images/blog/13-launch-your-virtual-agent-on-Google-Maps-with-Near-Me-Messaging/3-permissions.png"/>

*Seasalt AI에 권한을 부여하면 귀하를 대신하여 브랜드의 가상 에이전트를 Google 지도 페이지에 공개적으로 시작할 수 있습니다.*
</center>


### 2단계. 가상 에이전트를 구축합니다.

로그인하고 권한을 부여하면 Google 비즈니스 프로필 계정으로 관리하는 모든 비즈니스가 표시됩니다. 비즈니스가 표시되지 않으면 올바른 Google 비즈니스 프로필 계정으로 로그인했는지 확인하십시오. *“동기화”* 버튼을 클릭하여 비즈니스를 동기화할 수도 있습니다. 각 비즈니스 위치마다 가상 에이전트를 개별적으로 설정해야 합니다. 가상 에이전트를 설정하려면 비즈니스 중 하나에서 *“에이전트 추가”* 버튼을 클릭하십시오.

<center>
<img src="/images/blog/13-launch-your-virtual-agent-on-Google-Maps-with-Near-Me-Messaging/4-business-locations.png"/>

*Google 비즈니스 프로필과 연결된 비즈니스.*
</center>

내 주변 메시징은 Google 비즈니스 프로필에서 정보를 동기화하여 가상 에이전트 구축을 시작합니다. 가상 에이전트 구축에는 5분 미만이 소요되며, 각 단계가 완료될 때마다 진행 상황을 확인할 수 있습니다.


<center>
<img src="/images/blog/13-launch-your-virtual-agent-on-Google-Maps-with-Near-Me-Messaging/5-virtual-agent-building.png"/>

*가상 에이전트의 진행 상황을 볼 수 있습니다.*
</center>

### 3단계. 가상 에이전트를 비공개로 테스트합니다.

에이전트 구축이 완료되면 화면에 QR 코드가 나타납니다. 휴대폰으로 QR 코드를 스캔하여 가상 에이전트를 테스트하십시오. 이것은 아직 가상 에이전트의 비공개 버전이며 Google 지도 프로필에는 아직 나타나지 않습니다. 이 가상 에이전트는 Google 비즈니스 프로필의 정보와 Google 지도에서 가져온 고객 리뷰만을 사용하여 응답을 생성하는 초기 버전입니다. 테스트 후 가상 에이전트에 개선이 필요하다고 생각되면 맞춤형 FAQ를 만들고 웹사이트에서 정보를 추가하고 Google 리뷰를 큐레이션하여 응답을 크게 개선할 수 있습니다. 사용자 지정에 대한 자세한 내용은 [가상 에이전트 개선 가이드](https://wiki.seasalt.ai/nearme/maintain_agent/improve_agent/)를 참조하십시오.

<center>
<img src="/images/blog/13-launch-your-virtual-agent-on-Google-Maps-with-Near-Me-Messaging/6-agent-built.png" alt=""/>

*에이전트 구축이 완료되면 비공개 가상 에이전트의 QR 코드가 나타납니다.*
</center>

### 4단계. 가상 에이전트를 공개적으로 시작합니다.


가상 에이전트를 테스트하고 응답에 만족하면 가상 에이전트를 시작할 수 있습니다. 가상 에이전트를 공개적으로 시작하면 Google 지도에서 고객이 에이전트와 채팅할 수 있습니다. 이 블로그에서는 기본 프로세스를 안내하지만, 더 자세한 정보는 [Google 지도 프로필에서 가상 에이전트를 시작하는 방법](https://wiki.seasalt.ai/nearme/setup/03-publish_agent/)에 대한 문서 및 비디오를 참조하십시오.

먼저, “가상 에이전트” 탭으로 이동하여 *에이전트 이름*과 *에이전트 아바타 이미지*가 원하는 대로 정확하게 표시되는지 확인하십시오. *에이전트 이름*과 *아바타 이미지*가 Google에 의해 시작 프로세스의 일부로 확인되면, **내 주변 사이트를 통해 수정할 수 없습니다**.

에이전트 세부 정보를 확인한 후 *“공개 시작”* 탭으로 이동합니다. *“확인”* 버튼을 클릭하여 Google에 브랜드와 위치를 확인합니다.

<center>
<img src="/images/blog/13-launch-your-virtual-agent-on-Google-Maps-with-Near-Me-Messaging/7-verification.png" alt="Google에 브랜드와 위치를 확인하세요"/>

*“확인” 버튼을 클릭하면 Google에 브랜드와 위치가 확인됩니다.*
</center>

브랜드와 위치가 확인되면 *“시작”* 버튼을 클릭하여 가상 에이전트를 공개적으로 시작할 수 있습니다.

<center>
<img src="/images/blog/13-launch-your-virtual-agent-on-Google-Maps-with-Near-Me-Messaging/8-launch.png" alt="Google 지도 프로필의 채팅 버튼에서 가상 에이전트 시작하기"/>

*“시작” 버튼을 클릭하면 Google 지도 프로필의 채팅 버튼에서 가상 에이전트가 시작됩니다.*
</center>

채팅 버튼이 Google 지도에 나타나는 데 최대 4시간이 걸릴 수 있습니다. 채팅 버튼이 나타나면 가상 에이전트를 고객이 채팅할 수 있습니다. 공개 시작 후에도 가상 에이전트를 계속 변경하고 추가로 사용자 지정할 수 있습니다. 변경 사항을 적용할 때 *“비공개 테스트”* 탭으로 이동하여 공개하기 전에 테스트할 수 있습니다. 변경 사항에 만족하면 *“공개 시작”* 페이지에서 *“다시 시작”*을 클릭하여 가상 에이전트의 공개 버전을 즉시 업데이트할 수 있습니다.

<center>
<img src="/images/blog/13-launch-your-virtual-agent-on-Google-Maps-with-Near-Me-Messaging/9-relaunch.png" alt="내 주변 메시징은 Google 비즈니스 메시지를 Google 지도 프로필의 채팅 버튼과 통합합니다."/>

*가상 에이전트에 대한 변경/개선 작업을 마친 후 “다시 시작” 버튼을 클릭할 수 있습니다.*
</center>

[저희와 데모를 예약하세요](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting). 기꺼이 도와드리겠습니다!

업데이트: 제품을 옴니채널 챗봇 빌더로 전환했습니다. 이제 [SeaChat](https://chat.seasalt.ai/?utm_source=blog)이라고 합니다!


`;export{n as default};

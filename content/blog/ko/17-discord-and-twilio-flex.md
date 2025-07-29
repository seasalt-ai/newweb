---
title: "디스코드 (3/3): 디스코드 & 트윌리오 플렉스: 플렉스 컨택 센터를 미지의 영역으로 가져오기"
metatitle: "디스코드 (3/3): 디스코드의 트윌리오 플렉스 컨택 센터"
date: 2022-06-07T12:32:24-07:00
author: Kim Dodds
draft: false
image: /images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/flex-discord-thumbnail.png
description: "이 블로그에서는 Seasalt.ai가 완전한 컨택 센터를 디스코드 서버에 통합한 방법을 시연합니다."
weight: 1
tags: ["SeaX", "Discord"]
canonicalURL: "/blog/discord-and-twilio"
url: "/blog/discord-and-twilio/"
aliases:
  - /blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/
modified_date: "2025-07-28T16:56:53Z"
---

*이것은 디스코드에서의 고객 참여에 대한 3부작 시리즈의 마지막 게시물입니다. 첫 번째 블로그인 [“고객 참여를 위한 새로운 개척지”](https://seasalt.ai/blog/15-discord-a-new-frontier-for-customer-engagement/)에서는 디스코드의 인기 상승과 브랜드가 자체 온라인 커뮤니티를 만들고 참여할 수 있는 새로운 기회에 대해 논의했습니다. 2부 [“브랜드를 위한 디스코드 커뮤니티 및 봇 만드는 방법”](https://seasalt.ai/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/)에서는 브랜드를 위한 디스코드 서버를 만드는 방법과 서버 중재, 공지, 사용자 피드백 등을 관리하기 위해 봇을 통합하는 방법을 안내했습니다. 마지막으로 이 블로그에서는 Seasalt.ai가 완전한 컨택 센터를 디스코드 서버에 통합하여 브랜드가 플랫폼에서 고객 관리의 모든 측면을 처리할 수 있도록 한 방법을 시연합니다.*

## 목차
- [목차](#table-of-contents)
- [디스코드 고객 서비스 데모](#discord-customer-service-demo)
- [트윌리오 플렉스](#twilio-flex)
- [SeaX](#seax)
- [데모 서버](#demo-server)
  - [1대다 도움말: 공식 채널](#1-to-many-help-official-channels)
  - [1대1 도움말: 고객 서비스 상담원](#1-to-1-help-customer-service-agent)
    - [지식 기반](#knowledge-base)
    - [라이브 상담원 전송](#live-agent-transfer)
  - [사례 관리](#case-management)
- [기술 심층 분석](#technical-deep-dive)
  - [플렉스 흐름 정의](#define-the-flex-flow)
  - [사용자 지정 채널 만들기](#create-a-custom-channel)
  - [더 복잡한 라우팅을 지원하기 위한 HTTP 서버 만들기](#create-an-http-server-to-support-more-complex-routing)
    - [아웃바운드 메시지 웹훅](#outbound-messages-webhook)
    - [봇 통합](#bot-integration)
- [요약](#summary)

# 디스코드 고객 서비스 데모
바로 본론으로 들어가 최종 제품을 보고 싶으시다면 먼저 최종 데모 비디오를 보여드리겠습니다.

<iframe width="85%" height="450px" src="https://www.youtube.com/embed/iUK4YkGYI6Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>


우리의 목표는 디스코드를 기존 고객 서비스 소프트웨어(이 경우 [트윌리오 플렉스](https://flex.twilio.com/))에 통합하여 브랜드의 공식 서버에 부가 가치를 더하는 방법을 보여주는 것입니다. 구현에 대한 자세한 내용은 계속 읽어보세요.

# 트윌리오 플렉스
트윌리오는 문자 메시지, 전화 통화, 이메일, 채팅 메시지 등을 관리하기 위한 API를 제공하는 잘 알려진 통신 회사입니다. 플렉스는 트윌리오의 주력 제품 중 하나입니다. 모든 소스에서 가상 및 라이브 상담원에게 메시지와 통화를 라우팅하는 확장 가능한 클라우드 기반 컨택 센터입니다. 페이스북, SMS, 왓츠앱과 같은 다양한 채널을 이미 훌륭하게 지원하기 때문에 컨택 센터 통합의 기반으로 플렉스를 선택했습니다.

# SeaX
SeaX는 생산성과 고객 만족도를 높이는 데 도움이 되는 고급 AI 기능과 깊이 통합된 클라우드 컨택 센터입니다. SeaX는 Seasalt.ai의 주력 제품 중 하나이며 이미 150개국 이상의 고객에게 출시되었습니다. SeaX 컨택 센터 플랫폼은 트윌리오 플렉스 위에 구축되었으며 라이브 상담원이 고객을 더 잘 지원할 수 있도록 다양한 추가 기능을 포함합니다. 가장 유용한 기능 중 일부는 사내 텍스트 음성 변환 및 음성 텍스트 변환, AI 기반 지식 기반 및 통합 사례 관리 시스템입니다. SeaX 플랫폼의 모든 기능에 대한 자세한 내용은 [SeaX 홈페이지](https://seax.seasalt.ai/?utm_source=blog/)를 방문하십시오.

# 데모 서버
이제 디스코드 서버를 설정하는 방법을 안내해 드리겠습니다. 데모를 위해 서버가 포켓몬 고와 같은 게임의 커뮤니티로 사용되는 시나리오를 상상했습니다! 다음 표는 디스코드 서버에서 시연된 일부 기능을 간략하게 설명합니다.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-features-2.png" alt="데모 고객 서비스 디스코드 서버의 기능 개요."/>

*데모 디스코드 서버의 기능 개요.*
</center>

## 1대다 도움말: 공식 채널
서버의 여러 채널은 공식 관리자/개발자와 플레이어 간의 직접적인 스트림을 제공하도록 설정되어 있습니다.
**공지 채널**은 관리자와 중재자만 게시할 수 있으며 트위터 계정, 웹사이트 또는 기타 공식 소스의 (수동 또는 자동) 게시물을 포함할 수 있습니다.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-announcement-channel.jpg" alt="공식 트위터 계정의 게시물이 있는 디스코드 서버의 공지 채널."/>

*데모 디스코드 서버의 #announcements 채널.*
</center>

**버그 보고 채널**을 통해 플레이어는 버그 및 게임 중단 문제에 대해 논의할 수 있습니다. 관리자는 이 채널을 주시하여 대상이 되어야 하는 게임 내 문제를 식별할 수 있습니다. 또한 사용자는 채널 내에서 `/bug` 슬래시 명령을 사용하여 공식 버그 보고서를 제출할 수 있습니다.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-bug-report-channel.jpg" alt="제출된 버그 보고서가 있는 디스코드 서버의 버그 보고 채널."/>

*데모 디스코드 서버의 #bug-report 채널, 제출된 버그 보고서가 있음.*
</center>

**기능 요청 채널**을 통해 플레이어는 게임 플레이 변경, 삶의 질 향상, 콘텐츠 추가 등 게임에 추가되기를 원하는 사항에 대해 논의할 수 있습니다. 버그 요청 채널과 마찬가지로 디스코드 중재자가 입력을 볼 수 있으며 `/new_feature` 슬래시 명령을 사용하여 공식 요청을 제출할 수 있습니다.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-feature-request-channel.jpg" alt="사용자가 슬래시 명령을 수행하는 디스코드 서버의 기능 요청 채널."/>

*데모 디스코드 서버의 #feature-request 채널, 사용자가 슬래시 명령을 수행함.*
</center>

## 1대1 도움말: 고객 서비스 상담원

플레이어는 `/helpme` 슬래시 명령을 사용하여 상담원과 직접 메시지를 시작할 수 있습니다. 고객 서비스 상담원은 자동화(가상 상담원)되거나 라이브 상담원이 응대할 수 있습니다.

데모를 위해 우리는 사용자에게 관련 기사 제안을 제공하기 위해 회사 지식 기반을 쿼리하는 간단한 FAQ 봇을 설정했습니다. 사용자는 라이브 상담원을 요청할 수도 있으며 동일한 채팅에서 SeaX의 라이브 상담원에게 전송됩니다.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-customer-service-channel.jpg" alt="사용자가 DM을 트리거하는 디스코드 서버의 고객 서비스 채널."/>

*데모 디스코드 서버의 #feature-request 채널, 사용자가 DM을 트리거함.*
</center>

### 지식 기반
사용자가 가상 서비스 상담원에게 쿼리를 제출하면 상담원은 사용자를 지식 기반의 관련 기사로 안내할 수 있습니다.

### 라이브 상담원 전송
사용자가 봇과 직접 메시지를 주고받으면 라이브 상담원을 요청할 수 있습니다. 즉시 사례가 생성되었으며 라이브 상담원에게 전송되고 있다는 알림을 받게 됩니다. 라이브 상담원이 채팅에 참여하면 알림도 받게 됩니다.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-customer-service-dm.jpg" alt="KB 기사 제안, 라이브 상담원 전송 및 사례 관리가 포함된 고객 서비스와의 직접 메시지."/>

*KB 기사 제안, 라이브 상담원 전송 및 사례 관리가 포함된 고객 서비스와의 직접 메시지.*
</center>

백엔드에서 라이브 상담원은 단일 플랫폼을 통해 모든 채널(SMS, 페이스북, 디스코드, 음성 통화 등)에서 들어오는 통화 및 채팅 메시지를 처리할 수 있습니다. 이 경우 백엔드 플랫폼은 SeaX입니다.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/flex-discord-channel.jpg" alt="디스코드에서 사용자와의 대화에 대한 라이브 상담원의 보기를 표시하는 SeaX 인터페이스."/>

*디스코드에서 사용자와의 대화에 대한 라이브 상담원의 보기를 표시하는 SeaX 인터페이스.*
</center>

## 사례 관리
이 데모에서 강조하고 싶었던 한 가지 기능은 사례 관리입니다. Seasalt.ai의 디스코드 솔루션은 SeaX 사례 관리 시스템과 통합되어 사용자의 다양한 사례를 올바르게 추적합니다. 사용자가 디스코드 봇과 상호 작용할 때(예: 라이브 상담원 요청 또는 버그 보고) 자동으로 새 사례를 열고 사용자와 그들이 겪고 있는 문제에 대한 모든 중요한 정보를 기록할 수 있습니다. 이를 통해 라이브 상담원은 보고된 모든 문제에 쉽게 액세스하고 사례가 해결될 때까지 사용자와 후속 조치를 취할 수 있습니다.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-new-case.png" alt="SeaX 사례 관리 시스템에서 새 사례 만들기."/>

*SeaX 사례 관리 시스템에서 새 사례 만들기.*

<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-existing-case.png" alt="SeaX 사례 관리 시스템에서 기존 사례 보기."/>

*SeaX 사례 관리 시스템에서 기존 사례 보기.*

</center>

# 기술 심층 분석

이제 최종 제품과 서버 회원 및 그들을 돕는 라이브 상담원에게 제공되는 모든 기능을 살펴보았습니다. 하지만 전체가 실제로 어떻게 구현되었을까요? 마지막 블로그 게시물인 “[브랜드를 위한 디스코드 커뮤니티 및 봇 만드는 방법](https://seasalt.ai/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/)”에서는 브랜드를 위한 디스코드 서버를 만드는 방법과 이를 관리하기 위해 디스코드 봇을 통합하는 방법을 안내했습니다. 이 고급 데모를 지원하기 위해 [Seasalt.ai의 대화형 AI 엔진인 SeaChat](https://chat.seasalt.ai)을 사용하여 디스코드 봇이 사용자를 위한 자연어 쿼리를 처리할 수 있도록 하는 간단한 챗봇을 구축했습니다.

SeaX 측에서는 우리 팀이 트윌리오와 긴밀하게 협력하여 트윌리오 플렉스 위에 구축된 기능이 풍부한 컨택 센터 솔루션을 만들었습니다. 트윌리오 플렉스 및 설정 프로세스 작동 방식에 대한 자세한 내용은 [트윌리오 플렉스 빠른 시작 가이드](https://www.twilio.com/docs/flex/quickstart)를 참조하십시오.

디스코드 서버, 디스코드 봇 및 챗봇을 준비하고 SeaX의 작동 인스턴스가 실행 중인지 확인한 후 가장 큰 과제는 사용자, 봇 및 SeaX의 라이브 상담원 간에 메시지를 올바르게 라우팅하는 것입니다. 트윌리오는 메시지 라우팅을 처리하는 데 환상적이므로 우리의 목표는 디스코드 봇 서버 내에서 모든 슬래시 명령을 처리한 다음 다른 모든 메시지(예: 챗봇 또는 라이브 상담원에게 직접 메시지)를 트윌리오로 전달하는 것입니다.

## 플렉스 흐름 정의
첫 번째 단계는 트윌리오로 보내는 모든 메시지가 올바른 위치로 라우팅되도록 하는 것입니다. 우리는 사용자가 라이브 상담원을 요청했는지 먼저 확인하고 그렇다면 다음 메시지를 SeaX로 전달하는 간단한 트윌리오 흐름을 설정했습니다. 사용자가 라이브 상담원을 요청하지 않은 경우 응답을 얻기 위해 메시지를 챗봇으로 전달합니다. 흐름 설정 방법에 대한 자세한 내용은 [트윌리오 스튜디오 흐름 설명서](https://www.twilio.com/docs/studio)를 참조하십시오.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-flow.png" alt="들어오는 메시지를 챗봇이나 SeaX로 라우팅하는 간단한 플렉스 스튜디오 흐름."/>

*들어오는 메시지를 챗봇이나 SeaX로 라우팅하는 간단한 플렉스 스튜디오 흐름.*
</center>

## 사용자 지정 채널 만들기
이제 들어오는 메시지가 어떻게 라우팅될지에 대한 아이디어가 생겼습니다. 그러나 디스코드는 트윌리오에서 기본적으로 지원하는 채널이 아닙니다. 다행히 트윌리오에는 [트윌리오 플렉스에 사용자 지정 채팅 채널을 추가하는 방법](https://www.twilio.com/blog/add-custom-chat-channel-twilio-flex)에 대한 자세한 자습서가 있습니다. 트윌리오에서 새 사용자 지정 채널을 설정하기 위한 가이드를 따른 후에는 실제로 디스코드에서 트윌리오로 메시지를 전달해야 합니다.

먼저 트윌리오 클라이언트를 설정합니다.

```python
from twilio.rest import Client
twilio_client = Client(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)
```

이제 디스코드에서 들어오는 메시지를 받으면 해당 메시지를 트윌리오 클라이언트를 통해 트윌리오로 전달할 수 있습니다. 먼저 사용자가 이미 트윌리오 시스템에 있는지, 그리고 이미 열려 있는 채팅 채널이 있는지 확인해야 합니다.

```python
# 사용자가 존재하는지 확인하고 존재하지 않으면 새로 만드는 get_user 메서드를 호출합니다.
user = await get_user(user_id, twilio_client, TWILIO_SERVICE_SID)

# 사용자가 속한 채널을 가져옵니다.
user_channels = twilio_client.chat \
        .services(TWILIO_SERVICE_SID) \
        .users(user_id) \
        .user_channels \
        .list()
```

사용자에게 기존에 열려 있는 채팅 채널이 있는 경우 채팅 기록에 액세스할 수 있도록 해당 채널을 사용해야 합니다. 기존 채팅 채널이 없는 경우 사용자를 위해 새 채널을 만듭니다.

```python
if user_channels:
    channel_sid = user_channels[-1].channel_sid
else:
    channel = twilio_client.flex_api \
            .channel \
            .create(
                flex_flow_sid=FLEX_FLOW_ID,
                chat_user_friendly_name=username,
                chat_friendly_name=chat_name,  # -> 채팅 채널의 친숙한 이름
                target=conversation_id,  # -> 채팅 사용자를 고유하게 식별하는 ID
                identity=conversation_id,  # -> 사용자, 예/ 디스코드 DM ID
        )
    channel_sid = channel.sid
```

마지막으로 디스코드 사용자와 트윌리오 간에 열린 채팅 채널이 있으면 들어오는 메시지를 트윌리오 스튜디오 흐름으로 전달할 수 있습니다.

```python
message = twilio_client.chat \
        .services(TWILIO_SERVICE_SID) \
        .channels(channel_sid) \
        .messages \
        .create(
            body=message_text,
            from_=user_id,
            x_twilio_webhook_enabled='true',
            attributes=json.dumps(message_json)  # 나중에 액세스할 수 있도록 헤더를 속성으로 보냅니다.
        )
```
이제 디스코드 사용자로부터 들어오는 모든 메시지를 트윌리오 플렉스 흐름으로 직접 전달할 수 있습니다. 디스코드 봇 측에서는 모든 직접 메시지가 트윌리오로 전달되는지 확인하십시오. 이제 디스코드 봇에게 직접 메시지를 보내보면 트윌리오 스튜디오 흐름 로그에 나타나는 것을 볼 수 있습니다. 하지만 아직 끝나지 않았습니다!

## 더 복잡한 라우팅을 지원하기 위한 HTTP 서버 만들기

### 아웃바운드 메시지 웹훅
이제 들어오는 메시지가 어떻게 라우팅될지에 대한 아이디어가 생겼습니다. 그러나 아직 몇 가지 부분이 빠져 있습니다. 우선, 이제 트윌리오로 메시지를 보낼 수 있다는 것을 알지만 디스코드에서 사용자에게 어떻게 응답할까요? 우리 디스코드 봇은 디스코드 서버와 사용자에게 메시지를 보낼 수 있는 유일한 권한을 가지고 있으며, 트윌리오는 어쨌든 우리 메시지를 디스코드 서버로 다시 보내는 방법을 모릅니다. 해결책은 트윌리오 채팅 채널에 새 메시지가 있을 때마다 트리거되는 아웃바운드 메시지 웹훅을 설정해야 한다는 것입니다. 해당 웹훅 내에서 디스코드 봇을 사용하여 메시지를 서버로 다시 전달할 수 있습니다.

이를 위해 디스코드 봇을 더 강력한 HTTP 서버에 통합합니다. [FastAPI](https://fastapi.tiangolo.com/)를 사용하여 아웃바운드 메시지 웹훅으로 사용할 간단한 POST 엔드포인트를 설정했습니다. 서버를 설정하고 디스코드 봇을 함께 실행하면 POST 엔드포인트를 정의할 수 있습니다.

이 엔드포인트는 채팅 채널에 추가된 모든 단일 메시지를 수신하므로 먼저 SeaX에서 보낸 아웃바운드 메시지를 제외한 모든 것을 필터링하려고 합니다. 다음으로 메시지를 어디로 전달해야 하는지 알 수 있도록 메시지 본문에서 올바른 채널 ID를 가져와야 합니다. 마지막으로 디스코드 클라이언트를 사용하여 메시지를 디스코드 채널로 전달할 수 있습니다.

```python
@app.post("/forward-to-discord", status_code=200)
async def forward_discord_message(request: Request, response: Response) -> None:
    raw_body = await request.body()
    body = urllib.parse.parse_qs(raw_body.decode())

    # SDK(플렉스, 다른 모든 것은 API에서 옴)의 메시지에만 주의를 기울입니다.
    if not body.get('Source') == ['SDK']:
        return

    # 플렉스의 메시지에는 원래 메시지의 대화 ID가 포함되어 있지 않습니다.
    # GBM의 대화로 메시지를 다시 보내려면 convId가 필요합니다.
    # 이전 메시지를 가져와 대화 ID를 추출합니다.
    message = twilio_client.chat \
            .services(TWILIO_SERVICE_SID) \
            .channels(body.get("ChannelSid")[0]) \
            .messages.list(limit=1)[0]

    attributes = json.loads(message.attributes)

    channel = discord_client.get_channel(attributes.get(“channel”, {}).get(“id”))
    if channel:
        await channel.send(body.get("Body", [""])[0].get(“text”))
    else:
        logger.error(f"ID가 있는 디스코드 채널을 찾을 수 없습니다: {get_channel_id(req)}!")
        response.status_code = 400
```

마지막으로 메시지를 엔드포인트로 보내려면 트윌리오에 새 웹훅이 무엇인지 알려야 합니다. 각 채팅 채널에는 자체 웹훅이 구성되어 있어야 합니다. 따라서 처음에 사용자를 위해 새 채팅 채널을 만든 곳으로 돌아가면 웹훅을 구성하기 위한 추가 코드를 추가할 수 있습니다.

```python
webhook = twilio_client.chat \
        .services(TWILIO_SERVICE_SID) \
        .channels(channel_sid) \
        .webhooks \
        .create(
            type='webhook',   
configuration_url=f"{SERVER_HOST}/forward-to-discord",
            configuration_method="POST",
            configuration_filters=["onMessageSent", "onMessageUpdated", "onMediaMessageSent"]
        )
```

### 봇 통합

이제 SeaX에서 보낸 아웃바운드 메시지는 디스코드 서버로 올바르게 라우팅되어야 합니다. 하지만 아직 챗봇으로 가는 메시지는 처리하지 않았습니다. 트윌리오 스튜디오 흐름에서 트리거되고 사용자 메시지를 수신하고 봇을 쿼리하고 응답을 디스코드로 반환하는 마지막 엔드포인트를 설정해야 합니다.

```python
@app.post("/chatbot-to-discord", status_code=200)
async def receive_discord_message(request: Request, response: Response):
    """트윌리오에서 POST 요청을 받고, 봇을 쿼리하고, 응답을 디스코드로 반환합니다."""
    req = await request.body()
    # 원래 메시지 본문을 트윌리오 콘텐츠와 분리합니다.
    twilio_body, original_message_body = separate_original_message_body(req.decode())

    bot_response = await query_bot(original_message_body, bot_info)

    if bot_response:
        channel = discord_client.get_channel(original_message_body.get(“channel_id”))
        if channel:
            for item in bot_response:
                await channel.send(item.get(“text”))
```

트윌리오 스튜디오 흐름에 봇으로 메시지를 라우팅하기 위한 올바른 웹훅이 있는지 확인하십시오. 이제 메시지 라우팅을 마쳤습니다! 이 다이어그램에서 모든 메시지 라우팅의 최상위 보기를 볼 수 있습니다.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-routing-diagram.jpg" alt="메시지 라우팅 다이어그램."/>

*메시지 라우팅 다이어그램.*
</center>

# 요약
요약하자면, 이 블로그 시리즈에서는 디스코드의 인기 상승과 브랜드가 고객과 소통할 수 있는 새로운 플랫폼으로서 제시하는 기회에 대해 논의했습니다. 디스코드의 몇 가지 기본 기능을 살펴보고 브랜드가 자체 온라인 커뮤니티를 설정하는 방법과 디스코드 봇을 사용하여 서버에서 중재 및 고객 지원을 자동화할 수 있는 고급 기능을 살펴보았습니다. 마지막으로 디스코드를 고객 서비스 플랫폼인 SeaX와 통합하여 라이브 상담원 전송, 사례 관리, AI 기반 지식 기반 검색과 같은 고급 기능을 디스코드 커뮤니티에 제공한 시연을 공유했습니다.
개인 데모를 원하거나 Seasalt.ai가 특정 비즈니스 요구 사항을 해결하는 데 어떻게 도움이 되는지 알아보려면 “[데모 예약](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting)” 양식을 작성하십시오. 플렉스/디스코드 통합에 대한 자세한 정보나 문의 사항은 [Seasalt.ai의 트윌리오 파트너 목록](https://showcase.twilio.com/partner-listing/a8E8Z000000PDCQUA4)을 방문하십시오.

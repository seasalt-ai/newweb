const n=`---
title: "Discord (3/3): Discord와 Twilio Flex: Flex 콘택 센터를 미개척 영역으로"
metatitle: "Discord (3/3): Discord의 Twilio Flex 콘택 센터"
date: 2022-06-07 12:32:24-07:00
modified_date: 2025-01-27T10:30:00Z
draft: false
author: Kim Dodds
description: "이 블로그 포스트에서 Seasalt.ai가 Discord 서버에 완전히 기능하는 콘택 센터를 통합하는 방법을 시연합니다."
tags:
  - SeaX
  - Discord
image: /images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/flex-discord-thumbnail.png
canonicalURL: /blog/discord-and-twilio
url: /blog/discord-and-twilio/
---

*이는 Discord에서의 고객 참여에 대한 3부작 시리즈의 마지막 포스트입니다. 첫 번째 블로그 포스트 ["고객 참여의 새로운 프론티어"](https://seasalt.ai/blog/15-discord-a-new-frontier-for-customer-engagement/)에서는 Discord의 인기 상승과 브랜드가 자체 온라인 커뮤니티를 만들고 참여할 수 있는 새로운 기회에 대해 논의했습니다. 두 번째 부분 ["브랜드를 위한 Discord 커뮤니티와 봇 만들기"](https://seasalt.ai/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/)에서는 브랜드를 위한 Discord 서버를 만드는 방법과 서버 관리, 공지사항, 사용자 피드백 등을 관리하는 봇을 통합하는 방법을 소개했습니다. 마지막으로, 이 블로그 포스트에서는 Seasalt.ai가 Discord 서버에 완전히 기능하는 콘택 센터를 통합하여 브랜드가 플랫폼에서 고객 서비스의 모든 측면을 처리할 수 있게 하는 방법을 시연합니다.*

## 목차
- [목차](#목차)
- [Discord 고객 서비스 데모](#discord-고객-서비스-데모)
- [Twilio Flex](#twilio-flex)
- [SeaX](#seax)
- [데모 서버](#데모-서버)
  - [1대다 도움: 공식 채널](#1대다-도움-공식-채널)
  - [1대1 도움: 고객 서비스 에이전트](#1대1-도움-고객-서비스-에이전트)
    - [지식 베이스](#지식-베이스)
    - [라이브 에이전트 전송](#라이브-에이전트-전송)
  - [케이스 관리](#케이스-관리)
- [기술적 심화](#기술적-심화)
  - [Flex 플로우 정의](#flex-플로우-정의)
  - [커스텀 채널 생성](#커스텀-채널-생성)
  - [더 복잡한 라우팅을 지원하는 HTTP 서버 생성](#더-복잡한-라우팅을-지원하는-http-서버-생성)
    - [발신 메시지 Webhook](#발신-메시지-webhook)
    - [봇 통합](#봇-통합)
- [요약](#요약)

# Discord 고객 서비스 데모
최종 제품을 바로 보고 싶다면, 먼저 최종 데모 비디오를 보여드리겠습니다:

<iframe width="85%" height="450px" src="https://www.youtube.com/embed/iUK4YkGYI6Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

우리의 목표는 Discord를 기존 고객 서비스 소프트웨어(이 경우 [Twilio Flex](https://flex.twilio.com/))에 통합하여 브랜드의 공식 서버에 추가 가치를 제공하는 방법을 시연하는 것입니다. 구현에 대한 더 깊은 이해를 위해 계속 읽어보세요.

# Twilio Flex
Twilio는 SMS, 전화, 이메일, 채팅 메시지 등을 관리하기 위한 API를 제공하는 성숙한 통신 회사입니다. Flex는 Twilio의 플래그십 제품 중 하나로, 모든 소스에서의 메시지와 통화를 가상 및 라이브 에이전트로 라우팅하는 확장 가능한 클라우드 기반 콘택 센터입니다. Facebook, SMS, WhatsApp 등 다양한 채널에 대해 이미 훌륭한 지원을 제공하기 때문에 콘택 센터 통합의 기반으로 Flex를 선택했습니다.

# SeaX
SeaX는 생산성과 고객 만족도를 향상시키는 데 도움이 되는 고급 AI 기능과 깊이 통합된 클라우드 콘택 센터입니다. SeaX는 Seasalt.ai의 플래그십 제품 중 하나이며 150개 이상의 국가의 고객에게 배포되었습니다. SeaX 콘택 센터 플랫폼은 Twilio Flex 위에 구축되었으며 라이브 에이전트가 고객을 더 잘 지원할 수 있도록 하는 다양한 추가 기능을 포함합니다. 가장 유용한 기능 중 일부는 내장된 텍스트-음성 변환 및 음성-텍스트 변환, AI 기반 지식 베이스, 통합 케이스 관리 시스템입니다. SeaX 플랫폼의 모든 기능에 대한 자세한 정보는 [SeaX 홈페이지](https://seax.seasalt.ai/?utm_source=blog/)를 방문하세요.

# 데모 서버
이제 Discord 서버를 설정하는 방법을 소개하겠습니다. 데모 목적으로 우리 서버가 Pokémon Go!와 같은 게임의 커뮤니티로 사용되는 시나리오를 상상했습니다. 아래 표는 Discord 서버에서 시연된 기능 중 일부를 요약합니다.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-features-2.png" alt="데모 고객 서비스 Discord 서버의 기능 개요."/>

*데모 Discord 서버의 기능 개요.*
</center>

## 1대다 도움: 공식 채널
서버의 여러 채널은 공식 관리자/개발자와 플레이어 간의 직접 스트림을 제공하도록 설정되어 있습니다.
**공지사항 채널**은 관리자와 중재자만 게시할 수 있으며 Twitter 계정, 웹사이트 또는 기타 공식 소스의 (수동 또는 자동) 게시물을 포함할 수 있습니다.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-announcement-channel.jpg" alt="공식 Twitter 계정의 게시물을 포함하는 Discord 서버의 공지사항 채널."/>

*데모 Discord 서버의 #announcements 채널.*
</center>

**버그 리포트 채널**은 플레이어가 버그와 게임을 중단시키는 문제에 대해 논의할 수 있게 합니다. 관리자는 이 채널을 면밀히 모니터링하여 게임에서 해결해야 할 문제를 식별할 수 있습니다. 또한 사용자는 채널 내에서 \`/bug\` 슬래시 명령을 사용하여 공식 버그 리포트를 제출할 수 있습니다.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-bug-report-channel.jpg" alt="제출된 버그 리포트를 포함하는 Discord 서버의 버그 리포트 채널."/>

*제출된 버그 리포트를 포함하는 데모 Discord 서버의 #bug-report 채널.*
</center>

**기능 요청 채널**은 플레이어가 게임에서 보고 싶은 게임플레이 변경, 삶의 질 개선, 콘텐츠 추가 등을 논의할 수 있게 합니다. 버그 요청 채널과 유사하게, 그들의 입력은 Discord 중재자가 볼 수 있으며 \`/new_feature\` 슬래시 명령을 사용하여 공식 요청을 제출할 수 있습니다.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-feature-request-channel.jpg" alt="슬래시 명령을 실행하는 사용자를 포함하는 Discord 서버의 기능 요청 채널."/>

*슬래시 명령을 실행하는 사용자를 포함하는 데모 Discord 서버의 #feature-request 채널.*
</center>

## 1대1 도움: 고객 서비스 에이전트

플레이어는 \`/helpme\` 슬래시 명령을 사용하여 에이전트와의 직접 메시지를 트리거할 수 있습니다. 고객 서비스 에이전트는 자동화(가상 에이전트) 또는 라이브 에이전트에 의해 운영될 수 있습니다.

데모를 위해 회사 지식 베이스를 쿼리하여 사용자에게 관련 기사 제안을 제공하는 간단한 FAQ 봇을 설정했습니다. 사용자는 라이브 에이전트를 요청할 수도 있으며 같은 채팅에서 SeaX의 라이브 에이전트로 전송됩니다.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-customer-service-channel.jpg" alt="DM을 트리거하는 사용자를 포함하는 Discord 서버의 고객 서비스 채널."/>

*DM을 트리거하는 사용자를 포함하는 데모 Discord 서버의 #feature-request 채널.*
</center>

### 지식 베이스
사용자가 가상 서비스 에이전트에 쿼리를 제출하면 에이전트는 사용자를 지식 베이스의 관련 기사로 안내할 수 있습니다.

### 라이브 에이전트 전송
사용자가 봇과 직접 메시지에 있으면 라이브 에이전트를 요청할 수 있습니다. 그들은 즉시 그들을 위한 케이스가 생성되었고 라이브 에이전트로 전송되고 있다는 알림을 받습니다. 라이브 에이전트가 채팅에 참여하면 그들도 알림을 받습니다.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-customer-service-dm.jpg" alt="지식 베이스 기사 제안, 라이브 에이전트 전송, 케이스 관리를 포함하는 고객 서비스와의 직접 메시지."/>

*지식 베이스 기사 제안, 라이브 에이전트 전송, 케이스 관리를 포함하는 고객 서비스와의 직접 메시지.*
</center>

백엔드에서 라이브 에이전트는 모든 채널(SMS, Facebook, Discord, 음성 통화 등)에서의 수신 통화와 채팅 메시지를 하나의 플랫폼을 통해 처리할 수 있습니다. 이 경우 백엔드 플랫폼은 SeaX입니다.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/flex-discord-channel.jpg" alt="Discord 사용자와 대화하는 라이브 에이전트의 뷰를 보여주는 SeaX 인터페이스."/>

*Discord 사용자와 대화하는 라이브 에이전트의 뷰를 보여주는 SeaX 인터페이스.*
</center>

## 케이스 관리
이 데모에서 강조하고 싶은 기능 중 하나는 케이스 관리입니다. Seasalt.ai의 Discord 솔루션은 SeaX 케이스 관리 시스템과 통합되어 사용자의 다양한 케이스를 적절히 추적합니다. 사용자가 Discord 봇과 상호작용할 때(라이브 에이전트 요청이나 버그 리포트 등), 새로운 케이스를 자동으로 열고 사용자와 그들이 겪고 있는 문제에 대한 모든 중요한 정보를 기록할 수 있습니다. 이는 라이브 에이전트가 모든 보고된 문제에 쉽게 접근할 수 있게 하고 케이스가 해결될 때까지 사용자를 추적하도록 보장합니다.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-new-case.png" alt="SeaX 케이스 관리 시스템에서 새 케이스 생성."/>

*SeaX 케이스 관리 시스템에서 새 케이스 생성.*

<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-existing-case.png" alt="SeaX 케이스 관리 시스템에서 기존 케이스 보기."/>

*SeaX 케이스 관리 시스템에서 기존 케이스 보기.*

</center>

# 기술적 심화

이제 최종 제품과 서버 멤버와 그들을 지원하는 라이브 에이전트가 사용할 수 있는 모든 기능을 보았습니다. 하지만 전체가 실제로 어떻게 구현되었을까요? 이전 블로그 포스트 ["브랜드를 위한 Discord 커뮤니티와 봇 만들기"](https://seasalt.ai/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/)에서는 브랜드를 위한 Discord 서버를 만드는 방법과 Discord 봇을 통합하여 관리하는 방법을 소개했습니다. 이 더 고급 데모를 지원하기 위해 [SeaChat, Seasalt.ai의 대화형 AI 엔진](https://chat.seasalt.ai)도 사용하여 Discord 봇이 사용자의 자연어 쿼리를 처리할 수 있게 하는 간단한 챗봇을 구축했습니다.

SeaX 측에서 우리 팀은 Twilio와 긴밀히 협력하여 Twilio Flex 기반의 기능이 풍부한 콘택 센터 솔루션을 만들었습니다. Twilio Flex와 설정 프로세스가 어떻게 작동하는지에 대한 자세한 정보는 [Twilio Flex 퀵스타트 가이드](https://www.twilio.com/docs/flex/quickstart)를 읽어보세요.

Discord 서버, Discord 봇, 챗봇이 준비되고 제대로 작동하는 SeaX 인스턴스가 있다고 확신한 후, 가장 큰 도전은 사용자, 봇, SeaX의 라이브 에이전트 간에 메시지를 적절히 라우팅하는 방법이었습니다. Twilio는 메시지 라우팅 처리에 뛰어나므로 우리의 목표는 Discord 봇 서버 내의 모든 슬래시 명령을 처리한 다음 다른 모든 메시지(챗봇이나 라이브 에이전트에게 보내는 직접 메시지 등)를 Twilio로 전달하는 것이었습니다.

## Flex 플로우 정의
첫 번째 단계는 Twilio에 보내는 모든 메시지가 올바른 위치로 라우팅될 것임을 확인하는 것입니다. 사용자가 라이브 에이전트를 요청했는지 먼저 확인하고, 그렇다면 후속 메시지를 SeaX로 전달하는 간단한 Twilio 플로우를 설정했습니다. 사용자가 라이브 에이전트를 요청하지 않았다면 메시지를 챗봇으로 전달하여 응답을 받습니다. 플로우 설정 방법에 대한 자세한 정보는 [Twilio Studio Flow 문서](https://www.twilio.com/docs/studio)를 참조하세요.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-flow.png" alt="수신 메시지를 챗봇 또는 SeaX로 라우팅하는 간단한 Flex Studio 플로우."/>

*수신 메시지를 챗봇 또는 SeaX로 라우팅하는 간단한 Flex Studio 플로우.*
</center>

## 커스텀 채널 생성
이제 수신 메시지가 어떻게 라우팅될지 이해했습니다. 하지만 Discord는 Twilio에서 네이티브로 지원하는 채널이 아닙니다. 다행히 Twilio에는 [Twilio Flex에 커스텀 채팅 채널 추가하기](https://www.twilio.com/blog/add-custom-chat-channel-twilio-flex)에 대한 자세한 튜토리얼이 있습니다. Twilio에서 새 커스텀 채널을 설정하는 가이드를 따른 후, 실제로 Discord에서 Twilio로 메시지를 전달해야 합니다.

먼저 Twilio 클라이언트를 설정합니다:

\`\`\`python
from twilio.rest import Client
twilio_client = Client(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)
\`\`\`

이제 Discord에서 수신 메시지를 받으면 Twilio 클라이언트를 통해 해당 메시지를 Twilio로 전달할 수 있습니다. 먼저 사용자가 이미 Twilio 시스템에 존재하는지, 그리고 이미 열린 채팅 채널이 있는지 확인해야 합니다.

\`\`\`python
# get_user 메서드를 호출하여 사용자가 존재하는지 확인하고, 존재하지 않으면 새 사용자 생성
user = await get_user(user_id, twilio_client, TWILIO_SERVICE_SID)

# 사용자가 있는 채널 가져오기
user_channels = twilio_client.chat \\
        .services(TWILIO_SERVICE_SID) \\
        .users(user_id) \\
        .user_channels \\
        .list()
\`\`\`

사용자에게 기존의 열린 채팅 채널이 있다면 채팅 기록에 접근할 수 있도록 그것을 사용해야 합니다. 기존 채팅 채널이 없다면 사용자를 위해 새 것을 만듭니다:

\`\`\`python
if user_channels:
    channel_sid = user_channels[-1].channel_sid
else:
    channel = twilio_client.flex_api \\
            .channel \\
            .create(
                flex_flow_sid=FLEX_FLOW_ID,
                chat_user_friendly_name=username,
                chat_friendly_name=chat_name,  # -> 채팅 채널의 친화적 이름
                target=conversation_id,  # -> 채팅 사용자 ID를 고유하게 식별하는 ID
                identity=conversation_id,  # -> 사용자, 예: / Discord DM ID
        )
    channel_sid = channel.sid
\`\`\`

마지막으로 Discord 사용자와 Twilio 사이에 열린 채팅 채널을 설정하면 수신 메시지를 Twilio Studio 플로우로 전달할 수 있습니다.

\`\`\`python
message = twilio_client.chat \\
        .services(TWILIO_SERVICE_SID) \\
        .channels(channel_sid) \\
        .messages \\
        .create(
            body=message_text,
            from_=user_id,
            x_twilio_webhook_enabled='true',
            attributes=json.dumps(message_json)  # 나중에 접근할 수 있도록 헤더를 속성으로 전송
        )
\`\`\`
이제 Discord 사용자로부터의 수신 메시지를 Twilio Flex 플로우로 직접 전달할 수 있습니다. Discord 봇 측에서는 모든 직접 메시지가 Twilio로 전달되도록 확인하세요. 이제 Discord 봇에게 직접 메시지를 보내보면 Twilio Studio 플로우 로그에 나타나는 것을 볼 수 있을 것입니다 - 하지만 아직 완료되지 않았습니다!

## 더 복잡한 라우팅을 지원하는 HTTP 서버 생성

### 발신 메시지 Webhook
이제 수신 메시지가 어떻게 라우팅될지 이해했습니다. 하지만 아직 몇 가지 부분이 부족합니다. 먼저 이제 Twilio에 메시지를 보낼 수 있다는 것을 알지만, Discord의 사용자에게 어떻게 응답할까요? 우리의 Discord 봇은 Discord 서버와 사용자에게 메시지를 보낼 수 있는 유일한 승인된 것이고, Twilio는 어쨌든 메시지를 Discord 서버로 되돌리는 방법을 모릅니다. 해결책은 Twilio 채팅 채널에 새 메시지가 있을 때마다 트리거되는 발신 메시지 Webhook을 설정해야 한다는 것입니다. 그 Webhook에서 Discord 봇을 사용하여 메시지를 서버로 전달할 수 있습니다.

이를 위해 Discord 봇을 더 강력한 HTTP 서버에 통합합니다. [FastAPI](https://fastapi.tiangolo.com/)를 사용하여 발신 메시지 Webhook으로 작동할 간단한 POST 엔드포인트를 설정합니다. 서버를 설정하고 Discord 봇이 그것과 함께 실행되면 POST 엔드포인트를 정의할 수 있습니다.

이 엔드포인트는 채팅 채널에 추가된 모든 메시지를 받으므로 먼저 SeaX의 발신 메시지를 제외한 모든 것을 필터링해야 합니다. 다음으로 메시지 본문에서 올바른 채널 ID를 가져와서 메시지를 어디로 전달할지 알아야 합니다. 마지막으로 Discord 클라이언트를 사용하여 메시지를 Discord 채널로 전달할 수 있습니다.

\`\`\`python
@app.post("/forward-to-discord", status_code=200)
async def forward_discord_message(request: Request, response: Response) -> None:
    raw_body = await request.body()
    body = urllib.parse.parse_qs(raw_body.decode())

    # SDK의 메시지만 집중 (Flex, 다른 모든 메시지는 API에서 올 것)
    if not body.get('Source') == ['SDK']:
        return

    # Flex의 메시지는 원본 메시지의 conversationId를 포함하지 않음
    # GBM의 대화에 메시지를 되돌리기 위해 convId가 필요
    # 이전 메시지를 가져와서 conversationId 추출
    message = twilio_client.chat \\
            .services(TWILIO_SERVICE_SID) \\
            .channels(body.get("ChannelSid")[0]) \\
            .messages.list(limit=1)[0]

    attributes = json.loads(message.attributes)

    channel = discord_client.get_channel(attributes.get("channel", {}).get("id"))
    if channel:
        await channel.send(body.get("Body", [""])[0].get("text"))
    else:
        logger.error(f"ID {get_channel_id(req)}의 Discord 채널을 찾을 수 없습니다!")
        response.status_code = 400
\`\`\`

마지막으로 메시지를 엔드포인트로 보내기 위해 Twilio에게 새 Webhook이 무엇인지 알려야 합니다. 각 채팅 채널은 자체 Webhook을 구성해야 합니다. 따라서 처음에 사용자를 위해 새 채팅 채널을 만든 곳으로 돌아가면 Webhook을 구성하기 위한 추가 코드를 추가할 수 있습니다:

\`\`\`python
webhook = twilio_client.chat \\
        .services(TWILIO_SERVICE_SID) \\
        .channels(channel_sid) \\
        .webhooks \\
        .create(
            type='webhook',   
configuration_url=f"{SERVER_HOST}/forward-to-discord",
            configuration_method="POST",
            configuration_filters=["onMessageSent", "onMessageUpdated", "onMediaMessageSent"]
        )
\`\`\`

### 봇 통합

이제 SeaX의 발신 메시지가 올바르게 Discord 서버로 다시 라우팅되어야 합니다. 하지만 아직 챗봇으로 가는 메시지를 처리하지 않았습니다. Twilio Studio 플로우에서 트리거되고 사용자 메시지를 받아 봇을 쿼리하고 Discord로 응답을 반환하는 최종 엔드포인트를 설정해야 합니다.

\`\`\`python
@app.post("/chatbot-to-discord", status_code=200)
async def receive_discord_message(request: Request, response: Response):
    """Twilio에서 POST 요청을 받아 봇을 쿼리하고 Discord로 응답을 반환합니다."""
    req = await request.body()
    # 원본 메시지 본문을 twilio 콘텐츠에서 분리
    twilio_body, original_message_body = separate_original_message_body(req.decode())

    bot_response = await query_bot(original_message_body, bot_info)

    if bot_response:
        channel = discord_client.get_channel(original_message_body.get("channel_id"))
        if channel:
            for item in bot_response:
                await channel.send(item.get("text"))
\`\`\`

Twilio Studio 플로우가 메시지를 봇으로 라우팅하는 올바른 Webhook을 가지고 있는지 확인하세요. 이제 메시지 라우팅이 완료되었습니다! 이 다이어그램에서 모든 메시지 라우팅의 최상위 뷰를 볼 수 있습니다:

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-routing-diagram.jpg" alt="메시지 라우팅 다이어그램."/>

*메시지 라우팅 다이어그램.*
</center>

# 요약
요약하면, 이 블로그 시리즈에서 우리는 Discord의 인기 상승과 브랜드가 고객과 상호작용할 수 있는 새로운 플랫폼으로서 가져오는 기회에 대해 논의했습니다. 브랜드가 자체 온라인 커뮤니티를 구축하는 방법을 보여주기 위해 Discord의 기본 기능들을 소개했고, 브랜드가 Discord 봇을 사용하여 서버에서의 모더레이션과 고객 서비스를 자동화할 수 있는 더 고급 기능들도 소개했습니다. 마지막으로 Discord를 고객 서비스 플랫폼 SeaX와 통합하여 라이브 에이전트 전송, 케이스 관리, AI 기반 지식 베이스 검색과 같은 고급 기능을 Discord 커뮤니티에 가져오는 방법을 공유했습니다.
개인 데모나 Seasalt.ai가 특정 비즈니스 요구사항을 충족하는 데 어떻게 도움이 되는지 알아보려면 ["데모 예약"](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting) 양식을 작성해 주세요. Flex/Discord 통합에 대한 자세한 정보나 문의사항은 [Seasalt.ai의 Twilio 파트너 리스팅](https://showcase.twilio.com/partner-listing/a8E8Z000000PDCQUA4)을 방문하세요.
`;export{n as default};

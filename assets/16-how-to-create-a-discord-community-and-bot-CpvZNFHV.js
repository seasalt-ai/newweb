const n=`---
title: "디스코드 (2/3): 브랜드 Discord 커뮤니티 및 봇 생성 방법"
metatitle: "디스코드 (2/3): 브랜드 Discord 커뮤니티 및 봇 생성 방법"
date: 2022-05-31 13:29:51-07:00
draft: false
author: Kim Dodds
description: "이 블로그에서는 브랜드 서버를 만들고 봇을 연결하는 방법을 안내합니다. 봇은 중재, 버그 보고, 공지 등 작업을 자동화할 수 있습니다."
weight: 1
tags:
  - SeaX
  - Discord
image: /images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-community-and-bot-for-your-brand.jpg
canonicalURL: /blog/create-a-discord-community-and-bot/
url: /blog/create-a-discord-community-and-bot/
---

*저희 블로그 게시물인 [“디스코드: 고객 참여를 위한 새로운 개척지”](https://seasalt.ai/blog/15-discord-a-new-frontier-for-customer-engagement/)에서는 디스코드의 인기 상승과 브랜드가 이 새로운 소셜 플랫폼을 활용하여 자체 온라인 커뮤니티를 형성하고 고객과 소통하는 방법을 다루었습니다. 이 블로그에서는 브랜드의 새로운 공식 서버를 만드는 방법과 중재, 버그 보고, 공지 등 작업을 자동화할 수 있는 봇을 연결하는 방법을 안내합니다.*

## 목차
- [서버 설정](#서버-설정)
    - [새 Discord 서버 만들기](#새-discord-서버-만들기)
    - [서버를 "커뮤니티 서버"로 전환](#서버를-커뮤니티-서버로-전환)
    - [채널, 이벤트 및 기타 기능 설정](#채널-이벤트-및-기타-기능-설정)
    - [소문내기!](#소문내기)
- [Discord 봇 설정](#discord-봇-설정)
    - [Discord 개발자 포털에서 새 봇 만들기](#discord-개발자-포털에서-새-봇-만들기)
    - [PyCord로 간단한 Discord 봇 만들기](#pycord로-간단한-discord-봇-만들기)
    - [Discord 봇 초대](#discord-봇-초대)
    - [통합 테스트](#통합-테스트)

# 서버 설정

## 새 Discord 서버 만들기
디스코드 애플리케이션 내에서 왼쪽 하단의 “서버 추가” 버튼을 클릭합니다.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/create-new-discord-server.png" alt="새 Discord 서버 만들기."/>

*새 Discord 서버를 만들 때의 프롬프트.*
</center>

원하는 경우 템플릿에서 선택하여 일부 채널을 미리 만들거나, 빈 상태로 시작할 수 있습니다. 첫 번째 단계는 이렇게 간단하게 서버가 생성됩니다!

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/new-discord-server.png" alt="새로 생성된 Discord 서버."/>

*새로 생성된 Discord 서버.*
</center>

## 서버를 "커뮤니티 서버"로 전환

디스코드 서버의 “커뮤니티” 기능을 활성화하는 것을 강력히 권장합니다. 커뮤니티 서버로 전환하면 서버를 중재, 운영 및 성장시키는 데 도움이 되는 추가 도구를 사용할 수 있습니다. 특히 커뮤니티 서버는 다음 기능에 액세스할 수 있습니다:

- **환영 화면**: 새로운 사용자에게 서버를 소개합니다.
- **공지 채널**: 사용자에게 메시지를 브로드캐스트할 수 있습니다.
- **서버 인사이트**: 커뮤니티 및 사용자에 대한 분석을 볼 수 있습니다.
- **발견**: 디스코드 서버 디렉토리에 커뮤니티를 광고합니다.

왼쪽 상단 모서리에 있는 서버 이름 옆의 드롭다운을 클릭하고 “서버 설정”을 선택합니다. 왼쪽의 “커뮤니티 활성화” 탭을 클릭하고 “시작하기”를 선택합니다.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/convert-to-community-discord-server.png" alt="일반 Discord 서버를 커뮤니티 서버로 전환."/>

*커뮤니티 서버 설정 활성화.*
</center>

필수 설정을 진행합니다. 커뮤니티를 활성화하려면 서버가 사용자 추가 인증을 수행하고, 채팅 필터를 활성화하고, 규칙 채널을 설정해야 합니다.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-community-setup.png" alt="커뮤니티 Discord 서버 설정."/>

*커뮤니티 서버 설정.*
</center>

커뮤니티를 활성화하면 여러 가지 새로운 기능에 액세스할 수 있습니다. 가장 유용한 기능 중 두 가지는 환영 메시지와 멤버십 심사입니다:

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-server-welcome-page.png" alt="서버 환영 메시지 예시."/>

*서버 환영 메시지 예시.*

<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-server-membership-screening.png" alt="멤버십 심사 설정."/>

*멤버십 심사 설정.*
</center>

## 채널, 이벤트 및 기타 기능 설정
커뮤니티 서버를 설정한 후에는 메인 서버 페이지에서도 새로운 기능에 액세스할 수 있습니다.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-server-channel-types.png" alt="Discord 서버에서 새 채널 만들기." style="width:50%"/>

*새 채널 만들기.*

<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-server-channels.png" alt="Discord 커뮤니티 서버 채널 예시." style="width:50%"/>

*커뮤니티 서버 채널.*
</center>

새 채널을 만들 때 공지 및 스테이지라는 두 가지 새로운 채널 유형에 액세스할 수 있습니다. 공지 채널은 관리자만 게시할 수 있으며, 공식 게시물 및 공지에 유용합니다. 많은 서버에서 봇이 공식 트위터 피드 또는 포럼 게시물을 이 채널에 자동으로 게시하도록 설정합니다. “스테이지” 채널은 라이브 청중과 함께 이벤트를 호스팅하는 데 유용한 특별한 종류의 음성 채널입니다. 호스트는 다른 스피커를 중재할 수 있습니다(일반 음성 채널과 달리 자유롭게 발언할 수 없음).

서버가 모두 설정되면 다음과 같이 보일 수 있습니다:

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/customized-discord-server.png" alt="완전히 맞춤 설정된 Discord 서버."/>

*완전히 맞춤 설정된 커뮤니티 서버.*
</center>

## 소문내기!
서버가 모두 설정되면 사람들을 초대할 수 있습니다!
디스코드는 모든 웹사이트에 삽입하여 서버를 광고할 수 있는 무료 사전 제작 위젯을 제공합니다.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-server-widget.png" alt="Discord 서버 위젯 설정."/>

*서버 위젯 설정.*

<iframe src="https://discordapp.com/widget?id=966505646944055326&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>

*Seasalt.ai의 Near Me Messaging Discord 서버를 위한 작동하는 위젯 예시.*

</center>

잠재 사용자들과 신뢰를 구축하기 위해 선택적으로 디스코드 지원팀에 연락하여 서버를 인증받을 수 있습니다. 인증을 받으면 서버 이름 옆에 “인증됨” 아이콘이 표시되어 서버가 비즈니스, 브랜드 및 공익 인물의 공식 제휴 커뮤니티임을 나타냅니다. 인증 요구 사항은 [디스코드 공식 사이트](https://support.discord.com/hc/en-us/articles/360001107231-Verified-Server-Requirements)에서 확인할 수 있습니다.

서버가 시작되고 많은 사용자를 확보하면 디스코드는 서버를 내부적으로 광고할 수 있는 더 많은 기회를 제공합니다. 서버가 최소 8주 이상 되었고 사용자 수가 500명 이상이면 디스코드 파트너십을 신청할 수 있으며, 이는 서버에 특별한 파트너 전용 혜택을 제공합니다. 사용자 수가 1,000명 이상이 되면 서버 디스커버리에 참여할 수 있으며, 이를 통해 디스코드를 사용하는 모든 사람이 서버를 발견하고 참여할 수 있습니다.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-server-discovery.png" alt="Discord 디스커버리 설정 및 요구 사항."/>

*Discord 디스커버리 설정 및 요구 사항.*
</center>

# Discord 봇 설정
이제 서버를 설정했으므로 봇을 추가하여 중재, 사용자 피드백 및 공지 등 일부 프로세스를 자동화하여 서버를 향상시킬 수 있습니다. 다음 섹션을 계속 읽고 간단한 봇을 설정하는 방법을 배우고, 다음 시리즈 블로그에서 디스코드 서버 내에서 완전한 고객 서비스 경험을 통합하는 방법을 확인하십시오.

## Discord 개발자 포털에서 새 봇 만들기
[Discord 개발자 포털](https://discord.com/developers/applications)에서 계정을 만듭니다. “새 애플리케이션”을 만들고 이름을 지정합니다.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/new-discord-application.png" alt="Discord 개발자 포털에서 새 애플리케이션 만들기."/>

*Discord 개발자 대시보드: 애플리케이션.*
</center>

새 애플리케이션을 선택하고 왼쪽의 “봇” 탭을 클릭합니다.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/new-discord-bot.png" alt="애플리케이션의 봇 설정."/>

*Discord 애플리케이션 설정.*
</center>

“봇 추가”를 클릭하여 디스코드 봇을 만듭니다.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-bot-settings.png" alt="새 Discord 봇 만들기."/>

*새 Discord 봇 만들기.*
</center>

생성되면 봇 토큰을 생성하고 복사합니다. 마지막으로 메시징 권한이 켜져 있는지 확인합니다.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-bot-messaging-permissions.png" alt="Discord 봇 메시징 권한."/>

*새 Discord 봇 만들기.*
</center>

## PyCord로 간단한 Discord 봇 만들기

저희는 디스코드 API를 위한 Python 래퍼로 [PyCord 라이브러리](https://docs.pycord.dev/en/master/)를 사용합니다.

1. PyCord를 설치하고 디스코드 봇을 위한 새 Python 파일을 만듭니다.
2. 디스코드 패키지를 가져오고 디스코드 클라이언트 인스턴스를 만듭니다.
3. 클라이언트의 \`event\` 래퍼를 사용하여 \`on_message\` 메서드를 만듭니다. 이 메서드는 봇이 액세스할 수 있는 채널로 전송된 모든 메시지를 수신합니다.
    a. 메서드 내에서 먼저 메시지가 봇 자체에서 온 것인지 확인하고, 그렇다면 무시합니다.
    b. 그렇지 않으면 \`$bot\`으로 시작하는 메시지에만 반응합니다. 메시지가 \`$bot\`으로 시작하면 \`메시지를 받았습니다!\`라고 동일한 채널에 응답합니다.
4. 마지막으로 스크립트 끝에서 디스코드 클라이언트를 실행하여 채널에서 이벤트를 수신하도록 합니다.

\`\`\`python
import discord

discord_client = discord.Bot()
discord_token = “xxxxxxxxxxxx”
 
@discord_client.event
async def on_message(message):
    """메시지를 수신하고 반응합니다."""
    # 메시지가 봇 자체에서 온 것인지 확인
    if message.author == discord_client.user:
        return

    msg = message.content
    if msg.startswith("$bot") or isinstance(message.channel, discord.DMChannel):
        await message.channel.send(“메시지를 받았습니다!”)

discord_client.run(discord_token)
\`\`\`
`;export{n as default};

const e=`---
title: "SeaVoice STT/TTS Discord Bot: 백엔드 및 안정성 개선"
metatitle: "SeaVoice STT/TTS Discord Bot: 백엔드 및 안정성 개선"
date: 2022-12-13 11:58:34-08:00
modified_date: 2025-07-28T16:56:53Z
draft: false
author: Sydney Burgess, Kim Dodds, Drake Farmer, Jack Harvison, Dylan Strong, Cody Vernon
description: "최신 릴리스를 통해 SeaVoice Discord Bot은 봇 안정성 및 향후 개발을 개선하는 대규모 백엔드 개선을 시작합니다."
weight: 1
tags:
  - SeaVoice
  - Discord
image: images/blog/27-discord-backend-improvements/seavoice-discord-stt-tts-bot-backend-improvements.jpg
canonicalURL: /blog/seavoice-discord-backend-improvements/
url: /blog/seavoice-discord-backend-improvements/
---


*SeaVoice Discord Bot은 Discord 음성 채널에서 음성을 전사하는 데 가장 좋은 옵션 중 하나로 인기를 얻고 있습니다. 최신 릴리스를 통해 봇 안정성을 개선하고 향후 개발을 지원하는 대규모 백엔드 개선을 시작합니다.*

# SeaVoice 기억: 데이터베이스 온라인!

안녕하세요 여러분, 최근 SeaVoice Discord Bot의 비하인드에서 몇 가지 작업을 진행했으며 공유하고 싶습니다!

이전 블로그 게시물에서 보셨듯이, 저희는 새로운 통화 녹음 및 전사 기능과 같은 SeaVoice Bot에 많은 기능을 추가했습니다. 이러한 개발과 함께 SeaVoice Discord Bot에 명령부터 오류 로깅까지 수행한 모든 것을 기억하는 기능을 부여했습니다. 이제 봇이 여러분에게 말하거나 통화를 녹음하는 데 사용하면 모든 정보가 체계적으로 저장됩니다.

## 사용자에게 이것이 의미하는 바
이제 이것이 여러분에게 무엇을 의미하는지 궁금하실 것입니다.

음, 우선, 새로운 전사 및 오디오 다운로드 기능은 이러한 백엔드 개선 없이는 불가능했을 것입니다! 또한 이제 발생하는 불행한 충돌을 자동으로 저장할 수 있으므로 개발 팀은 여러분이 알아차리기도 전에 이러한 문제를 해결하기 시작할 수 있습니다. 또한, 누군가 자신의 데이터를 시스템에 더 이상 저장하고 싶지 않다고 결정하면, 이 새로운 조직화를 통해 서버, 채널, 사용자, 날짜 등에 따라 모든 데이터를 빠르게 찾고 검색하고/하거나 제거할 수 있습니다.

더 나아가, 이는 통계 추적, 자동 중재 등과 같은 새로운 기능의 문을 엽니다. 관리자 여러분, 서버 규칙이 잘 지켜지고 있는지 확인하거나 서버에서 봇이 얼마나 자주 사용되는지 확인하고 싶으신가요? 어쩌면 지난주에 있었던 재미있는 대화를 다시 보고 싶으신가요? 이제 데이터베이스 프레임워크가 확고히 자리 잡고 프로덕션 봇에서 사용되면서, 다양한 새로운 기능을 더 쉽게 사용할 수 있게 되었습니다.

## 데이터 프라이버시

당연히 사용자 데이터를 저장하는 것에 대해 논의할 때마다 데이터 프라이버시 및 보안 문제가 발생합니다. 다음은 데이터 처리 방법에 대한 몇 가지 핵심 사항입니다.
- 모든 사용자 데이터는 안전한 원격 서버에 저장되며, 소수의 Seasalt.ai 직원만 접근할 수 있습니다.
- SeaVoice는 Discord에서 제공하는 데이터만 기록하며, 이는 사용자가 SeaVoice 봇과 상호 작용할 때 제공하는 데이터입니다. 여기에는 다음이 포함됩니다.
    - 서버, 채널, 사용자 이름 및 ID
    - \`/speak\` 명령에 입력된 텍스트
    - 봇이 \`/recognize\` 명령을 수행하는 동안 음성 채널에서 말한 오디오
- 이 데이터는 Seasalt.ai에서 서비스 개선을 위해서만 사용됩니다.
- 언제든지 모든 데이터 또는 일부 데이터의 삭제를 요청할 수 있습니다.

자세한 내용은 [Seasalt.ai 개인정보처리방침](https://seasalt.ai/privacy/)을 참조하십시오.

## 향후 방향

이 업데이트의 많은 부분은 눈에 띄지 않을 것이지만, 우리에게는 어려운 부분이 끝났고, 이제 SeaVoice Discord Bot을 상상했던 것보다 훨씬 더 많이 사용자 정의하고 사용할 수 있는 프로젝트를 시작할 수 있습니다.
다가오는 기능 중 하나는 사용자 정의 가능한 서버 및/또는 사용자 구성입니다.
데이터베이스가 구축되면, 음성 채팅이 녹음되고 있다는 알림을 받을지 여부, 통화 전사 다운로드 링크를 누가 받을지, 또는 누가 녹음되지 않기를 원하는지 등과 같은 기본 설정을 저장할 수 있게 될 것입니다.

이제 데이터를 저장할 수 있게 되었으니 추가하고 싶은 아이디어가 있으신가요? [공식 SeaVoice Discord 서버](https://discord.gg/dfAYfwBQ)에 제안을 보내주세요!

<center>
<iframe src="https://discordapp.com/widget?id=919037515514654721&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
</center>

## 직접 사용해보세요!

아직 SeaVoice Bot의 최신 릴리스를 사용해보지 않았다면, 지금 바로 사용해보세요! [SeaVoice Discord Bot](https://discord.com/oauth2/authorize?client_id=1001955060210749492&scope=bot)을 서버에 초대하세요.
또한 [SeaVoice Bot 문서](https://wiki.seasalt.ai/seavoice/discord/discord-bot/)를 읽고 봇을 사용하여 커뮤니티의 요구 사항에 가장 잘 맞도록 사용하는 방법을 확인하세요.

곧 출시될 흥미로운 업데이트를 기대해주세요!

감사합니다,

SeaVoice Bot 팀.
`;export{e as default};

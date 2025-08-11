const n=`---
title: "SeaVoice STT/TTS Discord Bot: AI 텍스트 변환 기능이 있는 다운로드 가능한 음성 녹음을 제공하는 최초의 봇"
metatitle: "SeaVoice STT/TTS Discord Bot: 녹음 다운로드"
date: 2022-12-13 11:51:16-08:00
modified_date: 2025-07-29 20:45:17+00:00
draft: false
author: Sydney Burgess, Kim Dodds, Drake Farmer, Jack Harvison, Dylan Strong, Cody Vernon
description: "최신 릴리스를 통해 SeaVoice Discord Bot은 AI 생성 텍스트 변환 기능이 있는 다운로드 가능한 음성 채널 녹음을 제공하는 플랫폼 최초의 봇입니다."
weight: 1
tags:
  - SeaVoice
  - Discord
image: images/blog/26-discord-download/seavoice-discord-audio-transcript-download.jpg
url: /blog/seavoice-discord-recording-download/
---

*SeaVoice Discord Bot은 디스코드 음성 채널에서 음성을 텍스트로 변환하는 최고의 옵션 중 하나로 인기를 얻고 있습니다. 최신 릴리스를 통해 이 봇은 AI 생성 텍스트 변환 기능이 있는 다운로드 가능한 음성 채널 녹음을 제공하는 디스코드 최초의 봇입니다.*

# 디스코드에서 다운로드 가능한 오디오 및 텍스트 변환 파일: SeaVoice 최신 봇 릴리스의 흥미로운 새 기능

여러분, SeaVoice 디스코드 봇의 새로운 기능을 발표하게 되어 기쁩니다!

<center>
<img src="/images/blog/26-discord-download/1-seavoice-discord-speech-to-text.png" alt="SeaVoice 디스코드 봇이 음성 채널에서 실시간으로 음성을 텍스트로 변환합니다."/>

*SeaVoice 디스코드 봇이 음성 채널에서 실시간으로 음성을 텍스트로 변환합니다.*
</center>

출시 이후 SeaVoice 디스코드 봇은 두 가지 주요 기능을 가지고 있었습니다. 즉, 매우 정확한 음성-텍스트 변환 기술을 사용하여 대화를 텍스트로 변환하고 사용자 입력에 따라 음성을 합성할 수 있습니다.
출시 직후 전 세계 700개 이상의 서버에서 빠르게 인기를 얻고 있습니다.

팀으로서 우리는 봇을 사용자에게 더 유용하고 접근하기 쉽게 만드는 다양한 방법을 논의했습니다.
우리는 세션의 녹음 및 텍스트 변환을 제공하는 것이 회의 기록, 플레이 세션 저장 및 기타 여러 상황에 유용할 것이라고 결정했습니다.

## 텍스트 변환 및 오디오 다운로드 개요

<center>
<img src="/images/blog/26-discord-download/2-seavoice-audio-transcript-download-discord-direct-message.png" alt="SeaVoice 디스코드 봇은 각 세션 후 텍스트 변환 및 오디오 다운로드와 함께 DM을 보냅니다."/>

*SeaVoice 디스코드 봇은 각 세션 후 텍스트 변환 및 오디오 다운로드와 함께 DM을 보냅니다.*
</center>

지난 몇 달 동안 우리 팀은 이 아이디어를 현실로 만들기 위해 열심히 노력했습니다.
이제 \`/recognize\` 명령으로 봇을 호출하여 대화를 텍스트로 변환하면, 봇은 통화를 녹음하고 백그라운드에서 텍스트 변환을 유지합니다.
봇에게 떠나라고 요청하면, 통화에 참여한 모든 사람은 봇으로부터 전체 텍스트 변환과 통화 녹음이 포함된 직접 메시지를 받게 됩니다.

<center>
<img src="/images/blog/26-discord-download/3-seavoice-discord-audio-download.png" alt="SeaVoice 디스코드 봇의 링크를 클릭하면 오디오 녹음을 미리 보고 다운로드할 수 있는 웹 페이지가 열립니다."/>

*SeaVoice 디스코드 봇의 링크를 클릭하면 오디오 녹음을 미리 보고 다운로드할 수 있는 웹 페이지가 열립니다.*
</center>

mp3 형식의 전체 녹음을 다운로드할 수 있는 링크가 제공됩니다.
이것은 단일 트랙 녹음이므로 모든 사용자의 음성이 동일한 파일에 포함됩니다.
이 오디오 처리는 시간이 다소 걸릴 수 있으므로, 봇이 링크를 보내는 데 몇 초 정도, 긴 대화의 경우 몇 분 정도 기다려 주십시오.

<center>
<img src="/images/blog/26-discord-download/4-seavoice-discord-transcription-file.png" alt="SeaVoice 디스코드 봇이 보낸 다운로드 가능한 텍스트 변환 파일."/>

*SeaVoice 디스코드 봇이 보낸 다운로드 가능한 텍스트 변환 파일.*
</center>

텍스트 변환은 텍스트 파일 형식이며, 각 발언의 시작과 끝에 대한 타임스탬프와 발언자의 사용자 이름이 포함됩니다.
이를 통해 서버 구성원이 통화를 쉽게 추적할 수 있으며, 프로젝트 회의 및 플레이 세션을 기록하는 데도 유용할 것입니다.

## 과제

또한, 디스코드는 각 사용자의 오디오를 별도로, 그리고 침묵 없이 전송하기 때문에 오디오를 다루는 데 상당한 어려움이 있었다는 점도 주목해야 합니다.
따라서 아직 해결해야 할 몇 가지 문제가 있을 수 있으며, 최종 녹음을 가능한 한 정확하게 만들기 위해 이 기능을 계속 개선할 것입니다!
녹음 또는 텍스트 변환에 문제가 발생하면 [공식 SeaVoice 디스코드 서버](https://discord.gg/dfAYfwBQ)에서 저희 팀에 알려주십시오.
<center>
<iframe src="https://discordapp.com/widget?id=919037515514654721&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
</center>

## 향후 방향

이 어려운 기능이 마침내 출시될 준비가 되었으므로, 우리 팀은 이미 봇에 대한 다음 추가 기능을 계획하고 있습니다.
미래에 우리가 고려하고 있는 몇 가지 사항은 서버 및/또는 사용자를 위한 사용자 정의 가능한 구성을 허용하는 것입니다. 예를 들어, 녹음 처리 방법, 텍스트 변환 파일 형식, 녹음 면책 조항 재생 여부/시기, 텍스트 변환을 출력할 기본 채널 등입니다.
[공식 SeaVoice 디스코드 서버](https://discord.gg/dfAYfwBQ)에서 새로운 기능(또는 기존 기능을 개선하는 방법)에 대한 제안을 듣고 싶습니다.

## 직접 사용해 보세요!

그동안 [SeaVoice 디스코드 봇](https://discord.com/oauth2/authorize?client_id=1001955060210749492&scope=bot)을 서버에 초대하여 직접 사용해 볼 수 있습니다.
또한 [SeaVoice 봇 문서](https://wiki.seasalt.ai/seavoice/discord/discord-bot/)를 읽고 봇을 커뮤니티의 요구에 가장 잘 맞게 사용하는 방법을 확인하십시오.


이러한 새로운 기능이 봇을 사용하는 모든 일에 도움이 되고 즐겁게 사용하시기를 바랍니다!


감사합니다,


SeaVoice 봇 팀
`;export{n as default};

const n=`---
title: "SeaVoice STT/TTS Discord 机器人：首个提供可下载语音录音和 AI 转录的机器人"
metatitle: "SeaVoice STT/TTS Discord 机器人：录音下载"
date: 2022-12-13 11:51:16-08:00
modified_date: 2025-07-29 20:45:17+00:00
draft: false
author: Sydney Burgess, Kim Dodds, Drake Farmer, Jack Harvison, Dylan Strong, Cody Vernon
description: "随着最新版本的发布，SeaVoice Discord 机器人是该平台上首个提供可下载语音频道录音和 AI 生成转录的机器人。"
weight: 1
tags:
  - SeaVoice
  - Discord
image: images/blog/26-discord-download/seavoice-discord-audio-transcript-download.jpg
url: /blog/seavoice-discord-recording-download/
---

*SeaVoice Discord 机器人作为 Discord 语音频道中语音转录的最佳选择之一，越来越受欢迎。随着最新版本的发布，该机器人是 Discord 上首个提供可下载语音频道录音和 AI 生成转录的机器人。*

# Discord 上的可下载音频和转录文件：SeaVoice 最新机器人版本中的激动人心的新功能

大家好，我们很高兴宣布 SeaVoice Discord 机器人的新功能！

<center>
<img src="/images/blog/26-discord-download/1-seavoice-discord-speech-to-text.png" alt="SeaVoice Discord 机器人实时转录语音频道中的语音。"/>

*SeaVoice Discord 机器人实时转录语音频道中的语音。*
</center>

自发布以来，SeaVoice Discord 机器人具有两个主要功能：它使用高度准确的语音转文本技术转录对话，并可以根据用户输入合成语音。
它在发布后不久就迅速普及，现在已在全球 700 多个服务器中运行。

作为一个团队，我们讨论了使机器人对用户更有用和更易于访问的不同方法。
我们决定提供会话的录音和转录对于记录会议、保存游戏会话以及许多其他情况都很有用。

## 转录和音频下载概述

<center>
<img src="/images/blog/26-discord-download/2-seavoice-audio-transcript-download-discord-direct-message.png" alt="SeaVoice Discord 机器人在每次会话后发送包含转录和音频下载的私信。"/>

*SeaVoice Discord 机器人在每次会话后发送包含转录和音频下载的私信。*
</center>

在过去的几个月里，我们的团队一直在努力将这个想法变为现实。
现在，当您使用 \`/recognize\` 命令将机器人带入您的通话以转录您的对话时，它还会录制通话并在后台保留转录。
当您要求机器人离开时，所有参与通话的人都将收到机器人发送的私信，其中包含完整的转录和通话录音。

<center>
<img src="/images/blog/26-discord-download/3-seavoice-discord-audio-download.png" alt="点击 SeaVoice Discord 机器人中的链接会打开一个网页，用于预览和下载音频录音。"/>

*点击 SeaVoice Discord 机器人中的链接会打开一个网页，用于预览和下载音频录音。*
</center>

将有一个链接可以下载 mp3 格式的完整录音。
这是一个单轨录音，因此所有用户的语音都将在同一个文件中。
此音频处理可能需要一些时间，因此请等待几秒钟，以便机器人发送链接，对于较长的对话，可能需要几分钟。

<center>
<img src="/images/blog/26-discord-download/4-seavoice-discord-transcription-file.png" alt="SeaVoice Discord 机器人发送的可下载转录文件。"/>

*SeaVoice Discord 机器人发送的可下载转录文件。*
</center>

转录是文本文件形式，包含每个说出内容的开始和结束时间戳，以及说出该内容的人的用户名。
这应该使您的服务器成员更容易跟踪通话，并且对于记录项目会议和游戏会话都很有帮助。

## 挑战

还应该指出的是，我们在处理音频方面遇到了相当大的挑战，因为 Discord 会单独发送每个用户的音频，并且不包含任何静音。
因此，请记住，可能仍有一些问题需要解决，我们将继续改进此功能，以使最终录音尽可能准确！
如果您在录音或转录方面遇到任何问题，请在 [官方 SeaVoice Discord 服务器](https://discord.gg/dfAYfwBQ) 上告知我们的团队。
<center>
<iframe src="https://discordapp.com/widget?id=919037515514654721&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
</center>

## 未来方向

随着这项具有挑战性的功能最终准备发布，我们的团队已经在规划机器人的下一个新增功能。
我们未来正在研究的一些事情包括允许服务器和/或用户进行可自定义的配置，例如：他们希望如何处理录音、转录文件的格式、是否/何时播放录音免责声明、输出转录的默认频道等。
我们很乐意在我们的 [官方 SeaVoice Discord 服务器](https://discord.gg/dfAYfwBQ) 上听取您对新功能（或如何改进现有功能）的任何建议。

## 试一试！

同时，您可以邀请 [SeaVoice Discord 机器人](https://discord.com/oauth2/authorize?client_id=1001955060210749492&scope=bot) 到您的服务器并亲自试用。
也请随意阅读 [SeaVoice 机器人文档](https://wiki.seasalt.ai/seavoice/discord/discord-bot/)，了解如何使用机器人以最适合您的社区需求。


我们希望这些新功能能帮助您使用机器人完成任何任务，并祝您使用愉快！


此致，


SeaVoice 机器人团队
`;export{n as default};

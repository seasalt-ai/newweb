const n=`---
title: "SeaVoice STT/TTS Discord 機器人：首個提供可下載語音錄音和 AI 轉錄的機器人"
metatitle: "SeaVoice STT/TTS Discord 機器人：錄音下載"
date: 2022-12-13 11:51:16-08:00
modified_date: 2025-07-29 20:45:17+00:00
draft: false
author: Sydney Burgess, Kim Dodds, Drake Farmer, Jack Harvison, Dylan Strong, Cody Vernon
description: "隨著最新版本的發布，SeaVoice Discord 機器人是該平台上首個提供可下載語音頻道錄音和 AI 生成轉錄的機器人。"
weight: 1
tags:
  - SeaVoice
  - Discord
image: images/blog/26-discord-download/seavoice-discord-audio-transcript-download.jpg
url: /blog/seavoice-discord-recording-download/
---

*SeaVoice Discord 機器人作為 Discord 語音頻道中語音轉錄的最佳選擇之一，越來越受歡迎。隨著最新版本的發布，該機器人是 Discord 上首個提供可下載語音頻道錄音和 AI 生成轉錄的機器人。*

# Discord 上的可下載音訊和轉錄檔案：SeaVoice 最新機器人版本中的激動人心的新功能

大家好，我們很高興宣布 SeaVoice Discord 機器人的新功能！

<center>
<img src="/images/blog/26-discord-download/1-seavoice-discord-speech-to-text.png" alt="SeaVoice Discord 機器人即時轉錄語音頻道中的語音。"/>

*SeaVoice Discord 機器人即時轉錄語音頻道中的語音。*
</center>

自發布以來，SeaVoice Discord 機器人具有兩個主要功能：它使用高度準確的語音轉文字技術轉錄對話，並可以根據用戶輸入合成語音。
它在發布後不久就迅速普及，現在已在全球 700 多個伺服器中運行。

作為一個團隊，我們討論了使機器人對用戶更有用和更易於訪問的不同方法。
我們決定提供會話的錄音和轉錄對於記錄會議、保存遊戲會話以及許多其他情況都很有用。

## 轉錄和音訊下載概述

<center>
<img src="/images/blog/26-discord-download/2-seavoice-audio-transcript-download-discord-direct-message.png" alt="SeaVoice Discord 機器人在每次會話後發送包含轉錄和音訊下載的私信。"/>

*SeaVoice Discord 機器人在每次會話後發送包含轉錄和音訊下載的私信。*
</center>

在過去的幾個月裡，我們的團隊一直在努力將這個想法變為現實。
現在，當您使用 \`/recognize\` 命令將機器人帶入您的通話以轉錄您的對話時，它還會錄製通話並在後台保留轉錄。
當您要求機器人離開時，所有參與通話的人都將收到機器人發送的私信，其中包含完整的轉錄和通話錄音。

<center>
<img src="/images/blog/26-discord-download/3-seavoice-discord-audio-download.png" alt="點擊 SeaVoice Discord 機器人中的連結會打開一個網頁，用於預覽和下載音訊錄音。"/>

*點擊 SeaVoice Discord 機器人中的連結會打開一個網頁，用於預覽和下載音訊錄音。*
</center>

將有一個連結可以下載 mp3 格式的完整錄音。
這是一個單軌錄音，因此所有用戶的語音都將在同一個檔案中。
此音訊處理可能需要一些時間，因此請等待幾秒鐘，以便機器人發送連結，對於較長的對話，可能需要幾分鐘。

<center>
<img src="/images/blog/26-discord-download/4-seavoice-discord-transcription-file.png" alt="SeaVoice Discord 機器人發送的可下載轉錄檔案。"/>

*SeaVoice Discord 機器人發送的可下載轉錄檔案。*
</center>

轉錄是文字檔案形式，包含每個說出內容的開始和結束時間戳，以及說出該內容的人的用戶名。
這應該使您的伺服器成員更容易跟踪通話，並且對於記錄專案會議和遊戲會話都很有幫助。

## 挑戰

還應該指出的是，我們在處理音訊方面遇到了相當大的挑戰，因為 Discord 會單獨發送每個用戶的音訊，並且不包含任何靜音。
因此，請記住，可能仍有一些問題需要解決，我們將繼續改進此功能，以使最終錄音盡可能準確！
如果您在錄音或轉錄方面遇到任何問題，請在 [官方 SeaVoice Discord 伺服器](https://discord.gg/dfAYfwBQ) 上告知我們的團隊。
<center>
<iframe src="https://discordapp.com/widget?id=919037515514654721&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
</center>

## 未來方向

隨著這項具有挑戰性的功能最終準備發布，我們的團隊已經在規劃機器人的下一個新增功能。
我們未來正在研究的一些事情包括允許伺服器和/或用戶進行可自訂的配置，例如：他們希望如何處理錄音、轉錄檔案的格式、是否/何時播放錄音免責聲明、輸出轉錄的預設頻道等。
我們很樂意在我們的 [官方 SeaVoice Discord 伺服器](https://discord.gg/dfAYfwBQ) 上聽取您對新功能（或如何改進現有功能）的任何建議。

## 試一試！

同時，您可以邀請 [SeaVoice Discord 機器人](https://discord.com/oauth2/authorize?client_id=1001955060210749492&scope=bot) 到您的伺服器並親自試用。
也請隨意閱讀 [SeaVoice 機器人文件](https://wiki.seasalt.ai/seavoice/discord/discord-bot/)，了解如何使用機器人以最適合您的社群需求。


我們希望這些新功能能幫助您使用機器人完成任何任務，並祝您使用愉快！


此致，


SeaVoice 機器人團隊
`;export{n as default};

const e=`---
title: "SeaVoice STT/TTS Discord Bot：後端與穩定性改進"
metatitle: "SeaVoice STT/TTS Discord Bot：後端與穩定性改進"
date: 2022-12-13 11:58:34-08:00
modified_date: 2025-07-28 16:56:53+00:00
draft: false
author: Sydney Burgess, Kim Dodds, Drake Farmer, Jack Harvison, Dylan Strong, Cody Vernon
description: "隨著最新版本發布，SeaVoice Discord Bot 推出了大規模後端改進，提高了機器人穩定性並有助於未來的開發。"
weight: 1
tags:
  - SeaVoice
  - Discord
image: images/blog/27-discord-backend-improvements/seavoice-discord-stt-tts-bot-backend-improvements.jpg
canonicalURL: /blog/seavoice-discord-backend-improvements/
url: /blog/seavoice-discord-backend-improvements/
---


*SeaVoice Discord Bot 作為 Discord 語音頻道中語音轉錄的最佳選擇之一，越來越受歡迎。隨著最新版本的發布，我們正在推出大規模的後端改進，這將提高機器人穩定性並有助於未來的開發。*

# SeaVoice 記憶：資料庫上線！

大家好，最近我們一直在為 SeaVoice Discord Bot 的幕後工作，我們想分享一下！

正如您在我們之前的部落格文章中看到的，我們為 SeaVoice Bot 添加了許多功能，例如我們新的通話錄音和轉錄。除了這些開發之外，我們還賦予了 SeaVoice Discord Bot 記住它所做的一切的能力：從命令到錯誤日誌記錄。現在，當機器人與您交談或您使用它錄製通話時，所有這些信息都以有組織的方式保存。

## 這對用戶意味著什麼
您可能會問，這現在對您意味著什麼？

嗯，首先，如果沒有這些後端改進，我們的新轉錄和音訊下載功能將無法實現！我們現在還可以自動儲存您遇到的任何不幸崩潰，以便我們的開發團隊可以在您注意到它們之前開始修復這些問題。此外，如果有人決定不再希望將他們的数据儲存在我們的系統中，這種新的組織方式使我們能夠根據伺服器、頻道、用戶、日期等快速查找、檢索和/或刪除任何數據。

更重要的是，這為統計追蹤、自動審核等新功能打開了大門。管理員們，您想確保您的伺服器規則得到遵守，或者檢查機器人多久在您的伺服器中使用一次嗎？也許您想找出上週那段搞笑的對話？隨著資料庫框架現在牢固地建立並用於生產機器人中，各種新功能更容易實現。

## 資料隱私

當然，每當我們討論保存用戶數據時，都會出現數據隱私和安全問題。以下是我們如何處理您的數據的一些關鍵點：
- 所有用戶數據都儲存在安全的遠程伺服器上，只有少數選定的 Seasalt.ai 員工可以訪問
- SeaVoice 僅記錄用戶在與 SeaVoice 機器人交互時由 Discord 提供的数据；這包括：
    - 伺服器、頻道、用戶名和 ID
    - 輸入到 \`/speak\` 命令中的文本
    - 機器人執行 \`/recognize\` 命令時在語音頻道中說出的音訊
- 此數據將僅由 Seasalt.ai 用於改進服務
- 您可以隨時請求刪除您的任何或所有數據

有關完整詳細信息，請參閱 [Seasalt.ai 隱私政策](https://seasalt.ai/privacy/)。

## 未來方向

這次更新的很大一部分不會被注意到，但對我們來說，最困難的部分已經過去，現在我們可以開始開發項目，讓您比想像中更能自定義和使用 SeaVoice Discord Bot。
即將推出的一個功能是可自定義的伺服器和/或用戶配置。
有了資料庫，這將使我們能夠在未來保存偏好設置，例如您是否希望收到語音聊天正在錄音的提醒，誰會收到通話轉錄的下載連結，或者誰希望選擇不被錄音。

現在我們可以保存數據了，您有什麼想法想添加嗎？請隨時通過 [SeaVoice Discord 官方伺服器](https://discord.gg/dfAYfwBQ) 向我們提出建議！

<center>
<iframe src="https://discordapp.com/widget?id=919037515514654721&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
</center>

## 試一試！

如果您還沒有嘗試過 SeaVoice Bot 的最新版本，那就去試試吧！邀請 [SeaVoice Discord Bot](https://discord.com/oauth2/authorize?client_id=1001955060210749492&scope=bot) 到您的伺服器。
也請隨意閱讀 [SeaVoice Bot 文檔](https://wiki.seasalt.ai/seavoice/discord/discord-bot/)，了解如何最好地使用機器人以滿足您社區的需求。

敬請期待即將推出的一些激動人心的更新！

謝謝，

SeaVoice 機器人團隊。
`;export{e as default};

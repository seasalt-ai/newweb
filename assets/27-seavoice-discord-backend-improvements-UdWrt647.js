const e=`---
title: "SeaVoice STT/TTS Discord Bot：后端与稳定性改进"
metatitle: "SeaVoice STT/TTS Discord Bot：后端与稳定性改进"
date: 2022-12-13 11:58:34-08:00
modified_date: 2025-07-28 16:56:53+00:00
draft: false
author: Sydney Burgess, Kim Dodds, Drake Farmer, Jack Harvison, Dylan Strong, Cody Vernon
description: "随着最新版本发布，SeaVoice Discord Bot 推出了大规模后端改进，提高了机器人稳定性并有助于未来的开发。"
weight: 1
tags:
  - SeaVoice
  - Discord
image: images/blog/27-discord-backend-improvements/seavoice-discord-stt-tts-bot-backend-improvements.jpg
canonicalURL: /blog/seavoice-discord-backend-improvements/
url: /blog/seavoice-discord-backend-improvements/
---


*SeaVoice Discord Bot 作为 Discord 语音频道中语音转录的最佳选择之一，越来越受欢迎。随着最新版本的发布，我们正在推出大规模的后端改进，这将提高机器人稳定性并有助于未来的开发。*

# SeaVoice 记忆：数据库上线！

大家好，最近我们一直在为 SeaVoice Discord Bot 的幕后工作，我们想分享一下！

正如您在我们之前的博客文章中看到的，我们为 SeaVoice Bot 添加了许多功能，例如我们新的通话录音和转录。除了这些开发之外，我们还赋予了 SeaVoice Discord Bot 记住它所做的一切的能力：从命令到错误日志记录。现在，当机器人与您交谈或您使用它录制通话时，所有这些信息都以有组织的方式保存。

## 这对用户意味着什么
您可能会问，这现在对您意味着什么？

嗯，首先，如果没有这些后端改进，我们的新转录和音频下载功能将无法实现！我们现在还可以自动存储您遇到的任何不幸崩溃，以便我们的开发团队可以在您注意到它们之前开始修复这些问题。此外，如果有人决定不再希望将他们的数据存储在我们的系统中，这种新的组织方式使我们能够根据服务器、频道、用户、日期等快速查找、检索和/或删除任何数据。

更重要的是，这为统计跟踪、自动审核等新功能打开了大门。管理员们，您想确保您的服务器规则得到遵守，或者检查机器人多久在您的服务器中使用一次吗？也许您想找出上周那段搞笑的对话？随着数据库框架现在牢固地建立并用于生产机器人中，各种新功能更容易实现。

## 数据隐私

当然，每当我们讨论保存用户数据时，都会出现数据隐私和安全问题。以下是我们如何处理您的数据的一些关键点：
- 所有用户数据都存储在安全的远程服务器上，只有少数选定的 Seasalt.ai 员工可以访问
- SeaVoice 仅记录用户在与 SeaVoice 机器人交互时由 Discord 提供的数据；这包括：
    - 服务器、频道、用户名和 ID
    - 输入到 \`/speak\` 命令中的文本
    - 机器人执行 \`/recognize\` 命令时在语音频道中说出的音频
- 此数据将仅由 Seasalt.ai 用于改进服务
- 您可以随时请求删除您的任何或所有数据

有关完整详细信息，请参阅 [Seasalt.ai 隐私政策](https://seasalt.ai/privacy/)。

## 未来方向

这次更新的很大一部分不会被注意到，但对我们来说，最困难的部分已经过去，现在我们可以开始开发项目，让您比想象中更能自定义和使用 SeaVoice Discord Bot。
即将推出的一个功能是可自定义的服务器和/或用户配置。
有了数据库，这将使我们能够在未来保存偏好设置，例如您是否希望收到语音聊天正在录音的提醒，谁会收到通话转录的下载链接，或者谁希望选择不被录音。

现在我们可以保存数据了，您有什么想法想添加吗？请随时通过 [SeaVoice Discord 官方服务器](https://discord.gg/dfAYfwBQ) 向我们提出建议！

<center>
<iframe src="https://discordapp.com/widget?id=919037515514654721&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
</center>

## 试一试！

如果您还没有尝试过 SeaVoice Bot 的最新版本，那就去试试吧！邀请 [SeaVoice Discord Bot](https://discord.com/oauth2/authorize?client_id=1001955060210749492&scope=bot) 到您的服务器。
也请随意阅读 [SeaVoice Bot 文档](https://wiki.seasalt.ai/seavoice/discord/discord-bot/)，了解如何最好地使用机器人以满足您社区的需求。

敬请期待即将推出的一些激动人心的更新！

谢谢，

SeaVoice 机器人团队。
`;export{e as default};

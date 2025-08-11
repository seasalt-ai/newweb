const n=`---
title: "Discord 上的文本转语音：TTS Discord 机器人案例研究"
metatitle: "Discord 上的文本转语音：TTS Discord 机器人案例研究"
date: 2022-12-27 17:04:20-08:00
modified_date: 2025-07-29 20:45:17+00:00
author: Kim Dodds
description: "在这篇博客中，我们将讨论在审查了几个月的真实文本转语音数据后，我们发现真实 Discord 用户如何利用我们的服务。"
weight: 1
tags:
  - SeaVoice
  - Discord
image: images/blog/29-tts-case-study/discord-tts-accessibility.jpg
url: /blog/discord-tts-case-study/
---


*在 Discord 上推出 SeaVoice（最快、最准确的文本转语音和语音转文本机器人之一）后，我们想了解用户实际如何与服务互动。在这篇博客中，我们将讨论在审查了几个月的真实文本转语音用户数据后，我们的发现。*

# SeaVoice：文本转语音和语音转文本 Discord 机器人

Discord 是一个主要用于音频和文本聊天组合的平台，是语音智能和自然语言处理服务的绝佳测试场。
我们于 2022 年 8 月在 Discord 上部署了 SeaVoice 机器人，配备了文本转语音和语音转文本命令。
要了解有关机器人工作原理的更多信息，或观看简短的视频演示，您可以访问 [SeaVoice Discord 机器人维基](https://wiki.seasalt.ai/seavoice/discord/6-community/)。
同年 11 月，我们发布了一个新版本，其中包含显著的后端改进（如我们之前的博客文章所述：[SeaVoice Discord 机器人：后端和稳定性改进](https://seasalt.ai/blog/27-seavoice-discord-backend-improvements/)），这使我们能够记录用户如何与 SeaVoice 机器人互动的匿名数据。
在这篇博客中，我们将查看文本转语音命令的 1 个月用户数据。

## SeaVoice TTS 使用情况

<center>
<img src="/images/blog/29-tts-case-study/discord-tts-usage.jpg" alt="SeaVoice Discord 机器人每日文本转语音使用情况，为期 7 周。"/>

*SeaVoice Discord 机器人每日文本转语音使用情况，为期 7 周。*
</center>

撰写本文时，SeaVoice 机器人已添加到近 800 个服务器中！
自 11 月开始记录使用数据以来，我们发现每天的总请求数可以从低至 150 个波动到超过 1,300 个（平均约 560 个）。
大约 650 名用户至少尝试过一次 TTS 命令。
然而，大多数用户在尝试后不会继续定期使用它。
在尝试过 TTS 命令的 650 名用户中，大约 200 名用户使用了 20 次或更多次，只有 100 名用户使用了 50 次或更多次。
话虽如此，那些喜欢并依赖 TTS 命令的用户会大量使用它！
我们的前 5 名用户在过去两个月中每人提交了 1,000 多个请求，而排名第一的用户单独提交了近 2,500 个请求！

## 观察

### 人们为什么使用文本转语音

<center>
<img src="/images/blog/29-tts-case-study/why-mute-on-discord.jpg" alt="SeaVoice Discord 机器人用户使用文本转语音的原因。"/>

*SeaVoice Discord 机器人用户使用文本转语音的原因。*
</center>

因此，在查看使用数据后，我们的第一个问题是：**为什么频繁用户首先使用 TTS？**
我们查看了数据库以找到一些解释。
以下是我们一些用户的真实 TTS 命令。

__*你为什么不说话？*__

    - 另外我不能说话，因为我在吃饭
    - 我本来会说话的，但我现在在工作。
    - 如果我说话，我就会吵醒我的家人
    - 抱歉，不会说太多。喉咙很痛。
    - 我本来可以说话的，但我妈妈在这里
    - 我今天太懒了，不想说话
    - 我不能说话，因为我病了，但我还是想加入 :)
    - 不完全是静音，只是说话需要付出努力。有些日子需要付出很多努力
    - 抱歉，我静音了，我奶奶正在打电话，声音很大
    - 因为我的麦克风坏了

找到这些解释后，我们可以将其总结为几个主要原因：
- 存在物理障碍（麦克风坏了，说话困难，生病等），
- 他们忙于做其他事情（吃饭，工作等），
- 他们的环境太吵，或者他们需要保持安静，或者
- 因为它很方便，他们喜欢使用它。

但无论他们使用 TTS 服务的确切原因是什么，许多用户都表示很高兴他们能够参与语音频道对话，否则他们将无法参与。
我们相信 TTS 服务使 Discord 语音频道更易于访问，这是我们普通用户继续使用该服务的主要原因。

### 语言使用

在查看对话时，我注意到的一件事是，许多用户尝试使用不同语言的文本转语音命令。
虽然有些用户只是想看看它是否有效，或者认为发音很有趣，但其他人却继续长时间使用非英语语言的 TTS！

<center>
<img src="/images/blog/29-tts-case-study/discord-spanish-tts-test.png" alt="用户测试英语 SeaVoice TTS 模型的西班牙语发音。"/>

*用户测试英语 SeaVoice TTS 模型的西班牙语发音。*
</center>

西班牙语使用者尤其如此，尽管（如上所述）TTS 性能对西班牙语不好，因为该模型仅在英语上进行训练。
我开始记录每次遇到用户尝试在非英语语言上使用 TTS 命令的情况。

<center>
<img src="/images/blog/29-tts-case-study/discord-non-english-tts.jpg" alt="尝试向 TTS 发送非英语请求的次数。"/>

*尝试向 TTS 发送非英语请求的次数。*
</center>

上表显示了我发现的每个对话的计数，其中至少有一个实例在 TTS 命令中使用了相应的语言。
显然，西班牙语是迄今为止最常见的，再加上许多用户即使性能不佳也继续使用西班牙语 TTS 功能的事实，让我怀疑 Discord 上是否没有可行的西班牙语 TTS 替代方案。
无论哪种情况，人们都在尝试将我们的 TTS 服务用于其他语言，因此我们可以跟踪哪些语言需求量最大，并使用这些数据来指导我们新模型的训练。

### 关于机器人的评论

日志中发现的另一个有趣话题是关于机器人本身的评论。
值得庆幸的是，我们看到了许多关于机器人及其性能的非常积极的评论。

<center>
<img src="/images/blog/29-tts-case-study/discord-tts-inclusive-accessibility-user-comment.png" alt="用户评论说机器人让他们感到更融入。"/>

*用户评论说机器人让他们感到更融入。*
</center>

最感人的评论来自那些觉得自己被语音频道排除在外，但现在由于机器人提供的额外可访问性而能够参与其中的人。

我们还发现了一些建设性的反馈。

<center>
<img src="/images/blog/29-tts-case-study/discord-tts-speed.png" alt="用户评论说 TTS 的速度是一个问题。"/>

*用户评论说 TTS 的速度是一个问题。*
</center>

一位用户提到，由于用户需要先输入整个句子然后发送出去，因此 TTS 比正常说话慢，所以有时他们的 TTS 发言在对话中会稍微延迟。
如上一节所述，我们还看到了对额外语言支持的请求，以及一位用户希望能够使用机器人进行语言翻译。
关注此类反馈将帮助我们规划和改进未来的功能。

### 新颖性

浏览完所有 TTS 命令后，我想说大约三分之二的发言用于与服务器中的朋友和其他人进行一般对话。
大多数人都在玩游戏并与朋友聊天，这些用户往往是定期使用 TTS 服务的用户。
另一方面，其余三分之一的发言属于“只是胡闹”的范畴。
当你被赋予完全的权力让一个声音说出你想要的任何东西时，我相信人类的本性就是为了好玩而选择你能想到的最愚蠢或最淫秽的东西。
我记得坐在小学电脑实验室里，被 Microsoft Sam（当时非常高科技）娱乐了几个小时，看看我们是否能让它说出“便便”或“屁股”之类的词。
嗯，我想像我这样的孩子长大了，获得了更丰富的词汇，最终在 Discord 上的 TTS 服务中找到了同样的乐趣。

<center>
<img src="/images/blog/29-tts-case-study/discord-tts-stress-test.png" alt="用户发送的奇怪 TTS 请求示例。"/>

*用户发送的奇怪 TTS 请求示例。*
</center>

有时用户只是尝试通过输入过长的字符串、特殊字符、表情符号、URL 等来破坏机器人。
这是人们测试软件极限的经典示例，实际上有助于我们确保我们的服务健壮，并且可以处理用户输入的任何内容。

其他时候，用户通过让 TTS 服务说出他们能想到的最淫秽和冒犯性的东西来寻找乐趣。
在 TTS 日志中，我想我看到了我所知道的每一个脏话（也许还有一些我从未听说过的），种族歧视言论和露骨的性内容。

## 道德问题

不幸的是，文本转语音应用程序可以通过多种方式被不愉快地使用：例如，用于宣传仇恨言论或网络欺凌。
此外，虽然音频剪辑是从模型合成的，但训练模型的数据来自真实的人，并且良好模型的输出听起来几乎与原始声音无法区分。

因此，这些观点，再加上我们看到真实用户如何使用（或滥用）我们的 TTS 服务，为 Seasalt.ai 作为一家公司和 SeaVoice Discord 机器人提出了一些非常重要的问题：

- *作为一家公司，我们是否希望我们的产品以潜在的冒犯性或有害方式使用？*
- *配音演员对他们的声音在文本转语音应用程序中的使用方式拥有什么权利？*
- *我们是否有权或有责任审查我们的服务使用方式？*

这些问题无法在一篇博客文章中回答，甚至无法完全探讨。
然而，随着我们 Discord 项目的推进并继续与我们的配音演员合作，公司感到有义务不断考虑这些问题。

感谢您对我们的 Discord 机器人和语音智能项目的兴趣！您可以在我们的 [语音转文本主页](https://suite.seasalt.ai/tts) 上了解有关我们 STT 产品的更多信息。要获得我们任何语音智能产品的一对一演示，请填写 [预订演示表单](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting)。

在 Discord 方面，您可以从 [SeaVoice Discord 机器人维基](https://wiki.seasalt.ai/seavoice/discord/6-community/) 了解有关我们机器人的更多信息并将其添加到您的服务器。也欢迎加入我们的 [官方 SeaVoice Discord 服务器](https://discord.gg/dfAYfwBQ)。

<center>
<iframe src="https://discordapp.com/widget?id=919037515514654721&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
</center>
`;export{n as default};

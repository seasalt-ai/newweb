const n=`---
title: "Discord 上的语音转文本：STT Discord 机器人案例研究"
metatitle: "Discord 上的语音转文本：STT Discord 机器人案例研究"
date: 2023-01-23 11:25:00-08:00
draft: false
author: Kim Dodds
description: "在这篇博客中，我们将讨论我们对真实 Discord 用户如何利用 SeaVoice 服务的发现，此前我们审查了几周的真实语音转文本数据。"
weight: 1
tags:
  - SeaVoice
  - Discord
image: images/blog/30-stt-case-study/discord-stt-bot-case-study.jpg
canonicalURL: /blog/speech-to-text-discord-case-study/
url: /blog/speech-to-text-discord-case-study/
---

*在 Discord 上推出 SeaVoice（最快、最准确的文本转语音和语音转文本机器人之一）后，我们想了解用户实际如何与服务交互。在这篇博客中，我们将讨论我们审查了几周真实语音转文本用户数据后的发现。*

# SeaVoice：一个文本转语音和语音转文本的 Discord 机器人

Discord 是一个主要用于音频和文本聊天组合的平台，是语音智能和自然语言处理服务的绝佳测试场。我们于 2022 年 8 月在 Discord 上部署了 SeaVoice 机器人，该机器人配备了文本转语音和语音转文本命令。要了解有关机器人工作原理的更多信息或观看简短的视频演示，您可以访问 [SeaVoice 机器人维基](https://wiki.seasalt.ai/seavoice/discord/1-intro-discord-bot/)。同年 11 月，我们发布了一个新版本，其中包含显著的后端改进（如我们的博客文章中所述：[SeaVoice Discord 机器人：后端和稳定性改进](https://seasalt.ai/blog/27-seavoice-discord-backend-improvements/)），这使我们能够记录用户如何与 SeaVoice 机器人交互的匿名数据。在我们的上一篇博客（[TTS Discord 机器人案例研究](https://seasalt.ai/blog/29-discord-tts-case-study/)）中，我们分析了文本转语音命令的 1 个月用户数据。作为后续，在这篇文章中，我们将查看大约 3 周的语音转文本用户数据。

## SeaVoice STT 使用情况

截至撰写本文时，SeaVoice 机器人已添加到近 900 个服务器中！大约 260 个服务器，总计超过 600 名参与者，至少尝试过一次 STT 命令。在过去的 3 周中，我们举办了近 1,800 个 STT 会话，并输出了总计 **超过 50 万行转录**。

<center>
<img src="/images/blog/30-stt-case-study/discord-stt-sessions-per-day.png" alt="SeaVoice Discord 机器人每日语音转文本会话，为期 3 周。"/>

*SeaVoice Discord 机器人每日语音转文本会话，为期 3 周。*
</center>

如果我们查看每天的 STT 会话总数，我们发现它可以在 40 到 140 之间波动（平均约为 70）。我们还可以考虑我们正在生成的转录行总数。在最慢的一天，我们生成了少至 1 万行，然而，在繁忙的一天，我们生成了超过 4 万行。从这个角度来看，1 月 18 日，我们举办了 102 个 STT 会话，总计略低于 3 万行转录；这相当于近 40 小时的录音时间。

我们还发现，虽然大多数会话用于较短的对话（每个会话中位数为 57 行），但有大量非常长的会话将平均值提高到每个会话 650 行。我们最长的会话超过 3 万行，超过平均一天的量！最后，我们还查看了每个会话中有多少用户，发现每个会话通常有 4 到 5 个用户——但是我们曾经使用机器人支持一个有 45 名参与者的虚拟研讨会的实时转录！

<center>
<img src="/images/blog/30-stt-case-study/discord-transcription-lines-per-day.png" alt="SeaVoice Discord 机器人每日转录行数，为期 3 周。"/>

*SeaVoice Discord 机器人每日转录行数，为期 3 周。*
</center>

虽然大多数服务器使用 STT 会话的次数不多，但也有不少服务器广泛使用该服务。自 12 月下旬我们开始记录 STT 使用数据以来，每个服务器的平均会话总数约为 7；然而，我们的 #1 服务器已记录了 131 个会话——平均每天超过 6 个会话！同一个服务器在短短 3 周内转录了超过 15 万行语音！也许更令人印象深刻的是，我们的 #1 用户来自同一个服务器，并且他自己的语音已转录了超过 6 万行！

## 观察

### 为什么人们使用语音转文本

<center>
<img src="/images/blog/30-stt-case-study/discord-audio-transcript-download-user-quote.jpg" alt="一位 SeaVoice Discord 机器人用户表达了对持久化音频和转录文件的兴奋。"/>

*一位 SeaVoice Discord 机器人用户表达了对持久化音频和转录文件的兴奋。*
</center>

因此，在查看使用数据后，我们的第一个问题是：**为什么频繁使用的用户首先使用语音转文本？**

我们查看了数据库以寻找一些解释。然而，事实证明，找到用户为什么使用 STT 服务而不是 TTS 服务的具体解释更加困难。显然，人们觉得有必要向聊天中的其他人解释他们为什么使用 TTS，但 STT 则不然。尽管如此，我确实发现了一些有趣的转录，这些转录提供了一些关于用户为什么决定使用 STT 服务的见解。

__*为什么用户使用 STT：*__

- “这就是为什么使用转录的原因，因为我可以查看我错过的东西。”
- “[用户]听力不好，所以他得到了一个可以转录的机器人”
- “[用户]和他们一起突袭，他们用它来转录东西，但后来[用户]说，哦，我们也可以用它来玩 ******* D 和 D”
- “我迫不及待地想稍后回去阅读这些转录本 [...] 我想回去听那个录音并再次查看那个转录本”
- “如果我们在那里开会，那么我们可以将会议的转录本输入到 AI 中”
- “与人开会时，实际看到转录本真是太棒了”
- “[人们]不在聊天中，或者在社区中但不是语音聊天的一部分，但他们决定查看和阅读”

因此，总的来说，似乎大多数用户都喜欢拥有实时转录的便利性，这可以帮助他们跟踪对话并填补他们错过的任何空白。对于听力障碍或音频/连接困难的用户来说尤其如此。对于某些用户来说，最大的好处是保留他们对话的永久音频和文本记录；这可能特别适用于诸如维护《龙与地下城》会话日志或记录重要会议等用例。

由于许多用户没有明确说明他们为什么使用 STT 服务，因此了解他们在利用机器人时正在做什么也很有用。查看用户的转录本让我了解了他们在转录时正在进行的活动：

__*用户在使用 STT 时正在做什么：*__

- 只是聊天
    - 游戏：
    - 休闲游戏
    - 高级游戏（例如/协调组 MMO，大型多人在线，突袭）
- 角色扮演游戏（龙与地下城）
- 流媒体/录制内容
- 讨论学校/专业/志愿工作

绝大多数转录都属于“只是聊天”和“休闲游戏”类别。正如我们上面所看到的，我认为在这种情况下，大多数用户使用机器人来提高 Discord 语音通道的可访问性，和/或享受查看实时转录的便利性，以填补他们在对话中错过的任何空白。在某些情况下（例如用于 MMO 突袭时），游戏讨论非常复杂，用户实时相互协调；实时转录对于团队的成功可能非常有用，因为用户可以在玩游戏时参考转录本。

<center>
<img src="/images/blog/30-stt-case-study/discord-stt-for-mmo-raid.jpg" alt="MMO 突袭期间复杂讨论的示例。"/>

*MMO 突袭期间复杂讨论的示例。*
</center>

似乎也有很多用户使用机器人转录更严肃的对话，例如学校、专业和/或志愿社区会议。我们还使用我们的机器人转录了一次在线技术会议，[UnTechCon](https://gfsc.studio/2022/11/14/announcing-untechcon.html)。在这些情况下，最终的录音和转录文件可能对用户在会议后进行审查非常有帮助。我发现的最后一个有趣的例子是用户为其流媒体录制内容。由于最终转录本带有时间戳，用户可以潜在地将转录文件作为其录制音频或视频内容的字幕上传。

<center>
<img src="/images/blog/30-stt-case-study/discord-stt-accessibility-user-quote.jpg" alt="一位 SeaVoice 用户感谢使 Discord 语音通道更易于访问。"/>

*一位 SeaVoice 用户感谢使 Discord 语音通道更易于访问。*
</center>

但无论他们使用 STT 服务的确切原因是什么，许多用户都表示兴奋，因为他们能够参与语音通道对话，否则他们将无法参与。我们相信 STT 服务使 Discord 语音通道更易于访问，这是我们普通用户继续使用该服务的主要原因。

### 关于 SeaVoice Discord 机器人的评论

日志中发现的另一个有趣的话题是关于机器人本身的评论。值得庆幸的是，我们看到了关于机器人及其性能的几个非常积极的评论。

<center>
<img src="/images/blog/30-stt-case-study/discord-seavoice-transcription-accuracy.png" alt="一位 SeaVoice 用户评论了转录的准确性。"/>

*一位 SeaVoice 用户评论了转录的准确性。*
</center>

我们还发现了一些建设性的反馈。

<center>
<img src="/images/blog/30-stt-case-study/discord-stt-accuracy-british-accent.png" alt="一位 SeaVoice 用户建议改进英式口音。"/>

*一位 SeaVoice 用户建议改进英式口音。*
</center>

<center>
<img src="/images/blog/30-stt-case-study/discord-stt-siri-accent-accuracy-comparison.png" alt="一位用户将 SeaVoice 在带口音的英语上的表现与 Siri 进行了比较。"/>

*一位用户将 SeaVoice 在带口音的英语上的表现与 Siri 进行了比较。*
</center>

大多数建设性评论都与机器人在非美式口音英语上的表现不佳有关；特别是用户提到了英式和苏格兰口音。对于我们未来的 STT 服务，我们可以投入大量精力来改进我们对各种英语口音的语音识别。当然，英语并不是我们用户使用的唯一语言，所以我们还计划为机器人添加更多语言支持。事实上，我们目前正在最终确定我们的台湾普通话 STT 和 TTS 集成，并将很快发布更新版本的机器人。

## 隐私、数据敏感性和潜在冒犯性内容

人工智能的发展被伦理困境的洪流所包围。我们的模型需要大量的真实用户数据才能表现良好，*但我们如何在尊重用户隐私的同时以道德方式收集这些数据？* 模型仅根据提供给它们的数据进行学习，因此存在（潜在的不可预见的）偏见；*那么我们如何确保我们的模型能够同样良好地服务所有用户？* 此外，我们的模型没有社会可接受性的概念，可能会产生一些用户认为具有冒犯性的结果。正如我们的一位用户雄辩地说的那样：*“如果机器人这样做，那是不是种族主义，这就是问题所在”*。

<center>
<img src="/images/blog/30-stt-case-study/stt-accidental-racial-slur.png" alt="一位 SeaVoice 用户指出一个有问题的、不准确的转录。"/>

*一位 SeaVoice 用户指出一个有问题的、不准确的转录。*
</center>

我提出这些观点的原因是日志中存在一些令人担忧的转录。第一个问题是机器人偶尔会转录冒犯性内容。在上面的示例中，机器人意外地将某人的用户名转录为种族歧视语。显然，这是机器人方面的错误，可能会冒犯我们的用户，应该进行调查。但这引出了更多问题：*我们应该在哪里划定冒犯与伤害之间的界限？*

<center>
<img src="/images/blog/30-stt-case-study/discord-transcription-censor.png" alt="一位 SeaVoice 用户评论了尝试从转录中审查某些词语。"/>

*一位 SeaVoice 用户评论了尝试从转录中审查某些词语。*
</center>

嗯，首先我们决定将这种权力赋予用户。我们将要开发的下一个功能之一是 TTS 和 STT 的可配置审查。这将允许服务器选择性地对脏话、性内容、种族歧视语等进行审查。

<center>
<img src="/images/blog/30-stt-case-study/discord-careful-transcript-content.png" alt="一位 SeaVoice 用户警告另一位参与者，他们所说的话最终会出现在转录中。"/>

*一位 SeaVoice 用户警告另一位参与者，他们所说的话最终会出现在转录中。*
</center>

有趣的是，我们看到的另一个相关问题是用户自我审查，以避免某些内容出现在转录中。这出奇地普遍，我看到许多用户解释说他们不希望机器人转录他们即将说的话，所以他们停下来然后重新启动 STT。如果用户不希望机器人转录一些敏感信息，这在用户方面是完全有效的担忧。

<center>
<img src="/images/blog/30-stt-case-study/discord-stt-pause-deafen.png" alt="如何通过使机器人失聪来暂停 STT。"/>

*如何通过使机器人失聪来暂停 STT。*
</center>

我不确定在这种情况下我们是否能改善用户体验，但我会建议用户可以暂时“使机器人失聪”以停止向机器人发送任何音频。在这种情况下，机器人将不会收到任何音频数据，直到它被“解除失聪”，因此用户基本上可以在不停止和重新开始新会话的情况下暂停 STT 会话。

<center>
<img src="/images/blog/30-stt-case-study/discord-stt-opt-out-mute.jpg" alt="一位 SeaVoice 用户评论了另一位参与者对机器人的不适。"/>

*一位 SeaVoice 用户评论了另一位参与者对机器人的不适。*
</center>

最后，我们看到的最后一个问题是，一些用户对机器人转录感到非常不舒服，以至于他们在机器人存在时主动避免在语音通道中说话。这与我们的目标***完全相反***，我们的目标是让 Discord 语音通道对每个人都更易于访问。虽然我们希望用户能够接受我们的[隐私政策](https://seasalt.ai/privacy)并相信我们会负责任地使用他们的数据，但我们绝对尊重每个人的隐私权。因此，**我们将要实现的下一个功能是 STT 选择退出设置**。这将允许任何用户将自己排除在 STT 录音和转录之外，并且他们的音频数据将不会被机器人以任何方式访问或收集。

我们希望这些计划中的功能能够让我们继续使语音通道对每个人都更易于访问，同时赋予用户以他们感到舒适的级别与 SeaVoice 机器人交互的能力。展望未来，我们将继续努力主动解决这些具有挑战性的问题，以使 SeaVoice 达到最佳状态！

感谢您对我们的 Discord 机器人的兴趣，也感谢我们的用户一直以来的支持！您可以在我们的 [SeaVoice 语音转文本主页](https://suite.seasalt.ai/tts)上了解有关我们 STT 产品的更多信息。要获得我们任何语音智能产品的一对一演示，请填写 [预订演示表](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting)。

如果您还没有尝试过 SeaVoice 机器人，您可以从 [SeaVoice Discord 机器人维基](https://wiki.seasalt.ai/seavoice/discord/1-intro-discord-bot/)了解更多关于我们的机器人并将其添加到您的服务器。也欢迎加入我们的 [官方 SeaVoice Discord 服务器](https://discord.gg/dfAYfwBQ)。

<center>
<iframe src="https://discordapp.com/widget?id=919037515514654721&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
</center>
`;export{n as default};

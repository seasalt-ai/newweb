const e=`---
title: "使用 SeaX 语音智能，让您的联络中心拥有自己的声音"
metatitle: "让您的联络中心通过 SeaX 语音智能发声"
date: 2022-08-02 17:24:00-07:00
modified_date: 2025-07-29 20:45:17+00:00
draft: false
author: Kim Dodds, Cody Kim, Xuchen Yao, Guoguo Chen
description: "在这篇博客中，我们将展示 Seasalt.ai 内部的文本转语音和语音转文本引擎如何增强 SeaX 平台的各个方面。"
weight: 1
tags:
  - SeaX
image: /images/blog/21-seax-voice-intelligence/thumbnail.png
canonicalURL: /blog/seax-voice-intelligence/
url: /blog/seax-voice-intelligence/
---

*到目前为止，在我们的 [SeaX 博客系列](https://seasalt.ai/tags/seax/) 中，我们已经为您提供了 Seasalt.ai 旗舰产品 SeaX 的广泛概述。我们还讨论了使 SeaX 与传统呼叫中心区别开来的两个关键功能：首先，SeaX 是全渠道的，这意味着您可以更轻松地在任何渠道与客户互动；其次，该平台是一个分布式联络中心，它允许您将来自世界各地的客户消息和呼叫无缝路由到您在不同地区的分布式代理。*

*现在我们已经介绍了 SeaX 平台的基础知识，我们将继续介绍使 SeaX 与其他分布式全渠道联络中心区别开来的高级 AI 和自动化功能。在这篇博客中，我们将展示 Seasalt.ai 内部的文本转语音和语音转文本引擎如何增强 SeaX 平台的各个方面。*

# 目录
- [语音智能简介](#into-to-voice-intelligence)
- [Seasalt.ai 的独特之处](#what-sets-seasaltai-apart)
    - [语音转文本](#speech-to-text)
    - [文本转语音](#text-to-speech)
- [SeaX 中的 TTS 和 STT](#tts-and-stt-in-seax)
    - [语音 IVR](#voice-ivr)
    - [不可用消息](#unavailable-message)
    - [实时转录](#live-transcription)
    - [更多内容...](#and-more)

# 语音智能简介

语音智能是利用人工智能分析和从基于语音的数据中获取洞察。尽管过去十年语音技术取得了显著发展，但它们在企业环境中的应用仍然有限。公司不断积累数 TB 的语音数据，但在大多数情况下，这些数据并未得到充分利用。

其中一个原因是语音数据比其他形式的数据更难处理，例如基本统计数据甚至纯文本数据。语音数据在许多方面都是独一无二的：
1. 它依赖于语言，有方言和口音，因此很难捕捉 100% 的信息
2. 其质量因渠道（电话与 VoIP，单声道与立体声）、采样率（8KHz 与 16KHz）、表示精度（8位、16位、32位）和环境声音（如背景噪音）而异
3. 更难解释：从语音情感到说话人识别再到语义含义

然而，如果使用正确的工具妥善处理，语音智能可以为使用它的公司带来巨大的好处。除其他外，能够正确管理语音数据可以解锁使用个性化语音转文本转录的能力，这可以使对话可搜索、可索引且富有洞察力，并允许进一步的 NLP 处理。随着收集更多数据，这些服务也可能得到改进，例如：提高转录准确性，增加用例覆盖范围，以及提供可定制的语音和语言模型以适应新语言和方言。

# Seasalt.ai 的独特之处

Seasalt.ai 为企业客户提供云通信 AI 技术和产品。
我们开发了内部语音和语言技术，用于企业联络中心中的文本消息
和语音通话。我们的自然语言引擎支持广泛的
高资源和低资源语言：缅甸语、中文、英语、菲律宾语、
德语、印度尼西亚语、高棉语、老挝语、马来语、西班牙语、泰米尔语、泰语、越南语等。
Seasalt.ai 由一群世界领先的深度语音识别、
神经语音合成和自然语言对话专家资助和运营。

观看我们的语音转文本演示视频：
<iframe width="85%" height="450px" src="https://www.youtube.com/embed/Log8usX8ViE" title="YouTube 视频播放器" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

## 语音转文本

<center>
<img src="/images/blog/21-seax-voice-intelligence/STT.png" alt="语音转文本图示。"/>
</center>

我们的语音转文本引擎接收语音音频并实时生成转录。从音频开始，我们提取语音特征，将这些特征转换为音素，然后将这些音素映射到目标语言的正字法。我们目前的系统能够转录多种语言，包括英语和中文，并且不断有更多语言被添加。

观看我们的语音转文本定制视频，了解 Seasalt 的 STT 引擎如何为任何领域进行定制：
<iframe width="85%" height="450px" src="https://www.youtube.com/embed/1YEU6mexzWQ" title="YouTube 视频播放器" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

## 文本转语音

<center>
<img src="/images/blog/21-seax-voice-intelligence/TTS.png" alt="文本转语音图示。"/>
</center>

文本转语音是将文本合成为具有自然语调和节奏的逼真人声的过程。我们的模型接收普通文本，将此文本转换为音素，然后将音素转换为音频，同时预测每个时间步的正确音高、持续时间和音量，以获得最逼真的 TTS 体验。如果最终结果不完美，我们提供调整合成音频的能力，包括单词发音、停顿和强调。

观看我们的文本转语音定制演示视频，了解 Seasalt 的 TTS 引擎输出如何定制以提供逼真的合成语音：

<iframe width="85%" height="450px" src="https://www.youtube.com/embed/GJCOhTtImp8" title="YouTube 视频播放器" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

您还可以访问我们网站上的 [TTS 页面](https://suite.seasalt.ai/tts)，收听我们一些合成语音的示例，包括汤姆·汉克斯、大卫·阿滕伯勒和瑞茜·威瑟斯彭。

# SeaX 中的 TTS 和 STT

## 语音 IVR

<center>
<img src="/images/blog/21-seax-voice-intelligence/flow.png" alt="使用 Seasalt.ai 的语音转文本引擎进行实时转录和呼叫路由的语音 IVR 流程。"/>

*使用 Seasalt.ai 的语音转文本引擎进行实时转录和呼叫路由的语音 IVR 流程。*
</center>

语音智能可以在呼叫到达 SeaX 平台之前就开始提供帮助，确保呼叫被路由到正确的位置，并在将呼叫转交给座席之前收集重要信息。SeaX 使用 Twilio Studio 定制呼叫和消息路由流程。但我们也可以将我们的语音转文本引擎集成到 IVR 流程中，以允许客户使用自然语言路由他们的呼叫（而不是传统的“按 1 键…”体验）。此外，如果您的公司有兴趣使用聊天机器人与客户互动，我们可以更进一步，通过使用我们的文本转语音引擎为您的聊天机器人提供语音，使其能够通过电话与客户交谈。

## 不可用消息

<center>
<img src="/images/blog/21-seax-voice-intelligence/unavailable-message.png" alt="使用文本转语音的 SeaX 不可用消息配置。"/>

*使用文本转语音的 SeaX 不可用消息配置。*
</center>

我们的文本转语音技术还允许高度可定制的语音消息。例如，当客户在正常工作时间之后打电话进来，或者客户需要等待可用座席时，这些消息可以被触发。

## 实时转录

<center>
<img src="/images/blog/21-seax-voice-intelligence/live-transcription.jpg" alt="SeaX 上向座席显示的实时呼叫转录和分析。"/>

*SeaX 上向座席显示的实时呼叫转录和分析。*
</center>

一旦客户与座席通话，我们的语音转文本引擎会为座席提供准确的实时对话转录，以供参考。这允许座席参考对话中的先前要点和/或仔细检查他们对客户所说内容的理解。此外，这些转录对于下游应用程序（如主题提取、动作提取、摘要、会议分析等）也非常有用。

## 更多内容...

以上只是 SeaX 集成高级语音智能以减少等待时间、提高座席绩效并为客户和座席提供整体无缝体验的几种方式。要了解 SeaX 平台附带的更多高级功能，请继续关注我们的下一篇博客文章，其中包括 AI 知识库、案例管理和批量短信。要获得个人演示并讨论 SeaX 平台如何满足您的特定业务需求，请填写我们的 [预订演示表单](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting)。
`;export{e as default};

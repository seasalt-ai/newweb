const n=`---
title: "从演示到成功：现代会议的陷阱 (2/5)"
metatitle: "从演示到成功 (2/5)：现代会议的陷阱"
date: 2021-07-30
draft: false
author: Cody Kim
description: "在本博客系列的第二部分中，跟随 Seasalt.ai 创造 SeaMeet 的旅程，这是我们协作式现代会议解决方案。"
weight: 1
tags:
  - SeaMeet
image: images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/SeaMeet animation.gif
canonicalURL: /blog/seameet-voice-and-microsoft-modern-meetings/
url: /blog/seameet-voice-and-microsoft-modern-meetings/
---

*在本博客系列中，跟随 Seasalt.ai 创造全面现代会议体验的旅程，从其 humble 的开端，到优化我们在不同硬件和模型上的服务，再到集成最先进的 NLP 系统，最终实现 SeaMeet，我们的协作式现代会议解决方案。*

## 现代会议的陷阱

在我们的开发过程中，我们遇到了许多不可预测的障碍，没有明确的原因或解决方案。

### 快速启动

第一个障碍是让我们的工具正常工作。Azure 提供了一个现代会议示例，我们很高兴它与 Linux 兼容，但我们发现使用 Windows 上的 SDK 运行演示要容易得多——毕竟它是 Microsoft 产品。在多次尝试让提供的示例在 Linux 上运行失败后，我们最终不得不放弃这条路径，转而使用 Windows。最终，我们有了一个功能齐全的语音转录器，这是一个巨大的开端。

### 延迟

我们遇到的一个问题是，在前端 UI 上接收识别结果时，大约有五秒的延迟。虽然 5 秒可能看起来相当快，但这种延迟明显比方便实用的解决方案慢了几秒，特别是对于实时通信而言。

<center>
<img src="/images/blog/4-seameet-voice-intelligence-meeting-transcription-pitfalls-of-microsoft-modern-meetings/default_ui.png" style="width:400px;" alt="Azure Speech SDK 提供的语音转录默认 UI"/>

*Azure Speech SDK 提供的语音转录默认 UI*
</center>

延迟也是后端的一个严重问题。在每次会议开始时，结果都是实时出现的（正如宣传的那样！），但随着会议的进行，延迟会周期性地飙升到多达三十秒，然后文本才会出现在显示器上。到那时，所说的一切早已与对话无关。经过无数次测试，我们开始注意到延迟全天都在变化，我们将其归因于 Azure 服务器当时的负载。我们致力于创建一致、可靠的产品，因此这些波动和不可预测的延迟是不可接受的。这更说明了依赖我们自己的模型和服务器的理由。

### 方言

我们最初使用 Azure 语音服务的一个特殊原因是他们对各种语言和方言的广泛支持。我们特别高兴能利用 Azure 语音服务的新加坡英语模型。但想象一下，当我们发现，对于新加坡方言，美国英语模型始终优于新加坡英语模型时，我们是多么惊讶。此外，即使是最好的模型也未能应对现实世界的挑战。

<center>
<img src="/images/blog/4-seameet-voice-intelligence-meeting-transcription-pitfalls-of-microsoft-modern-meetings/bad_result.png"/>

*“恭喜！是男宝宝还是女宝宝？”的转录结果*
</center>

我们看到的结果是“ola regulations may be boiled baby cool”，而实际的说法是“恭喜！是男宝宝还是女宝宝？”。一个训练有素的语言模型应该能够消除这种转录。虽然这是一个极端的例子，但通常情况下，每次转录都会出现错误。无论错误有多小，例如缺少冠词或误解的单词，任何错误都会分散注意力，并很容易损害转录服务的声誉。

### Windows 更新

几周后，团队夜以继日地工作，确保我们的产品在几天后的客户演示中做好准备。我们的会议转录器在三台独立的 Windows 笔记本电脑上运行流畅。然后有一天，我们突然只剩下一台可用的电脑，尽管没有人动过代码。我们测试了我们的网络，检查了我们的防火墙，任何我们能想到的可能突然导致我们的产品失败的原因。我们最后的猜测是，一次意外的 Windows 更新导致 Azure 语音 SDK 与我们的两台电脑莫名其妙地不兼容，当我们逐位比较这三台系统时。随着我们的展示即将到来，压力和紧张达到了临界点。只剩下一台系统，团队达成了一项协议：不更改代码，绝不更新。经历过这次磨难后，我们受够了。

### 超越现代会议

为了摆脱这些障碍，Seasalt.ai 的团队开始训练我们自己的声学和语言模型，以与 Azure 的对话转录器相媲美。在整个过程中，我们一直在问一个问题：我们接下来该怎么做？我们如何才能扩展这个已经很有用的产品？

现代会议展示了强大的语音转文本潜力，但仅此而已。它可以听我们说话，但如果我们能让它为我们思考呢？仅仅依靠转录，虽然产品令人印象深刻，但其应用有些受限。从语音转录转向语音智能，将为我们能够创造的东西打开广阔的大门。智能的例子包括会议摘要、主题抽象和行动提取。最后，设计一个漂亮的界面，将所有内容整合到一个令人惊叹的软件包中。

这就是迄今为止的故事，Seasalt.ai 致力于将最佳商业解决方案带入快速发展的市场并交付给世界的旅程的开始。如果您想了解更多详细信息，请继续阅读本博客系列的其余部分。
`;export{n as default};

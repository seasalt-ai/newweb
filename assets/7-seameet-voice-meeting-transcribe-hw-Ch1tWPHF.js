const e=`---
title: "从演示到成功：超越硬件 (5/5)"
metatitle: "从演示到成功 (5/5)：超越硬件"
date: 2021-09-15 17:24:32-07:00
modified_date: 2025-07-28 16:56:53+00:00
draft: false
author: Cody Kim
description: "在本博客系列的最后一部分，跟随 Seasalt.ai 创建 SeaMeet 的旅程，这是我们的协作式现代会议解决方案。"
weight: 1
tags:
  - SeaMeet
image: images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/SeaMeet animation.gif
canonicalURL: /blog/seameet-voice-hardware/
url: /blog/seameet-voice-hardware/
---

*在本系列博客中，跟随 Seasalt.ai 打造全面的现代会议体验的旅程，从其卑微的开端，到在不同硬件和模型上优化我们的服务，再到集成最先进的自然语言处理系统，最终完全实现我们的协作式现代会议解决方案 SeaMeet。*

## 超越现代会议

在 Seasalt.ai，我们钦佩这款产品在 Build 2019 演示中展示的现有能力，但我们更感兴趣的是这款产品能发展成什么样，以及如何将对话转录提升到超越模仿的水平。但在击败竞争对手之前，您首先需要深入了解您正在玩的游戏。SeaMeet 就这样诞生了。在初期，我们将 Azure 视为一个模型，以掌握构建可靠转录服务的基础，并使用 Azure 语音服务作为我们的后端来利用这项成熟的技术。

就像任何新产品一样，挑战立即出现。为了尽快推出我们的产品，我们选择使用 Microsoft Kinect DK 麦克风阵列，它被宣传为语音服务的硬件对应物，据说经过调整可以从 Azure 的自动语音识别模型中获得最佳性能。尽管它是一个无可否认的精心建造、精心设计的设备，但它配备了全铝外壳、广角镜头、深度摄像头和 7 麦克风阵列。它的价格也高达近 400 美元。从 2021 年 4 月开始，Kinect DK 出现了严重的库存不足问题。截至 2021 年 9 月撰写本文时，它仍然缺货。这进一步证实了 Kinect 不适合我们。

<center>
<img src="/images/blog/7-seameet-voice-intelligence-meeting-transcription-hardware/kinect_store_page.png"/>

*Azure Kinect DK 自 2021 年 4 月起缺货，截至本文发布时（2021 年 9 月）仍未补货。*
</center>

麦克风阵列是对话转录管道中的第一个组件。作为转录服务的提供商，我们需要能够可持续且可靠地采购我们的硬件。

我们寻找完美麦克风阵列的旅程使我们找到了两个选择：[Respeaker Array v2.0](https://www.seeedstudio.com/ReSpeaker-Mic-Array-v2-0.html) 和 [Respeaker Core v2.0](https://www.seeedstudio.com/ReSpeaker-Core-v2-0.html)。这两个设备都是圆形阵列，分别有四个和六个麦克风，这是能够执行 360 度声源定位的关键功能，并允许我们轻松地将这些新设备集成到我们现有的系统中。这些设备真正的美妙之处在于它们内置了信号处理算法，包括降噪、回声消除和波束成形，这些算法都完美地针对麦克风的尺寸进行了调整。

<center>
<img src="/images/blog/7-seameet-voice-intelligence-meeting-transcription-hardware/respeaker_array.png" alt="Respeaker Array v2.0 演示 VAD 和声源定位"/>

*Respeaker Array v2.0 演示 VAD 和声源定位*
</center>

<center>
<img src="/images/blog/7-seameet-voice-intelligence-meeting-transcription-hardware/array_demo.jpg" alt="使用 Respeaker Array v2.0 进行现场会议演示"/>

*使用 Respeaker Array v2.0 进行现场会议演示*
</center>

对于完全由 USB 端口供电的四麦克风阵列 Array v2.0，这意味着用户计算机只需专注于将音频流式传输到服务器。这会将信号处理卸载到麦克风阵列。


<center>
<img src="/images/blog/7-seameet-voice-intelligence-meeting-transcription-hardware/core_demo.png" alt="Respeaker Core v2.0 演示图"/>

*Respeaker Core v2.0 演示图*
</center>

更引人注目的是配备 ARM 处理器和 1GB RAM 的 Core v2.0。它能够运行完整的 Linux 发行版，并拥有足够的处理能力来运行我们的客户端脚本，我们不仅通过此设备将处理从用户计算机上卸载，而且完全消除了将计算机连接到麦克风的需要。由于麦克风阵列现在正在进行繁重的处理，我们降低了运行产品所需的硬件要求，因此有效地增加了可以从 SeaMeet 中受益的受众。

<center>
<img src="/images/blog/7-seameet-voice-intelligence-meeting-transcription-hardware/respeaker_core.png" alt="Core v2.0 独立麦克风放置示例"/>

*Core v2.0 独立麦克风放置示例*
</center>

这些麦克风阵列的另一个独特之处在于它们没有外壳。两者都以裸露的 PCB 形式发货，麦克风、芯片和端口都暴露在外。虽然许多人会认为这不方便，但我们认为这是一个机会，可以创造一个真正独一无二的设备，它无疑是 Seasalt 的。

    有了这些设备，我们完成了 SeaMeet 的原型，这是我们全新的、最先进的会议转录服务。至此，我们结束了五部分系列文章，从 SeaMeet 只是一个受 Microsoft 演示启发而产生的种子开始，到最终成为一个完全独立的产品。SeaMeet 仍处于早期阶段，随着我们不断完善我们的说话人分离系统、会议理解和语言模型，它将迎来激动人心的旅程。Seasalt.ai 团队渴望继续彻底改变世界的商业运作方式。
`;export{e as default};

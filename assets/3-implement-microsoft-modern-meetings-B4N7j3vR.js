const n=`---
title: "从演示到成功：实现微软现代会议及未来展望 (1/5)"
metatitle: "从演示到成功 (1/5): 超越微软现代会议"
date: 2021-07-19
modified_date: 2025-07-26T16:42:50Z
draft: false
author: Cody Kim
description: "在本博客系列的第一部分，跟随 Seasalt.ai 创建我们的协作式现代会议解决方案 SeaMeet 的历程。"
weight: 1
tags:
  - SeaMeet
image: images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/SeaMeet animation.gif
canonicalURL: /blog/microsoft-modern-meetings/
url: /blog/microsoft-modern-meetings/
---

*在本博客系列中，跟随 Seasalt.ai 创造一个全面的现代会议体验的旅程，从最初的简陋开始，到在不同硬件和模型上优化我们的服务，再到集成最先进的自然语言处理系统，最终完全实现我们协作式的现代会议解决方案 SeaMeet。*

### 现代会议的未来

[![微软语音转文本服务演示，来自 MS Build 2019](/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/ms-build-play.png)](https://www.youtube.com/watch?t=100&v=EYinMnQWgfU&feature=youtu.be)

在 Microsoft Build 2019 大会上，微软展示了其最新的云计算解决方案：Azure 语音服务，特别是其会议转录应用，引起了观众的热烈反响。此后，这款对话转录工具立即引起了广泛关注，并被顶级科技博客和期刊提及。2019 年的演示视频展示了 Azure 语音服务的强大功能。我们当时几乎没有预料到，这很快就预示了在全球疫情和后疫情时代，现代会议将如何从实体会议转向虚拟会议，再到混合会议。

<center>
<img src="/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/azure-demo.png" alt="微软 Azure 语音转文本和说话人识别在 MS Build 2019 上的现场演示"/>
</center>

作为一款对话转录平台，微软为 Azure 会议转录服务所做的展示，恰如其分地以“现代会议的未来”为题，确立了其新服务作为一个强大、高效的语音转文本 (STT) 平台的地位，适用于所有希望快速、整洁地记录其所有重要会议的企业。

是什么让这项服务成为会议转录的巅峰之作？首先是实时性能。随着技术发展越来越快，人们的耐心也越来越少，即使是几秒钟的延迟也足以让普通用户感到烦恼。然而，微软证明了他们的对话转录工具速度足够快，提供准确的转录，甚至比一些隐藏式字幕服务还要快，使得仅通过文本就能跟上同步对话完全可行。

其次，微软还展示了其说话人识别功能。最终得到一堆杂乱无章的对话文本是令人沮丧和无用的，但说话人识别功能可以自动为每句话标注说话人，从而创建一种易于理解的格式。

![微软 Azure 语音转文本和说话人识别的用户界面](/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/azure-ui.png)

计算硬件日益强大，公司希望从最新的 CPU 和 GPU 中榨取每一个核心的性能。通常，旧技术会逐渐过时，客户被迫每隔几年升级一次，才能在社会中保持与时俱进。在“现代会议的未来”中，微软优化了 Azure 语音服务，使其能够在消费级硬件上运行，同时将繁重的计算保留在云端，从而进一步扩大了可以从这项服务中受益的人群。

Azure 的会议转录服务旨在优化我们开展业务的方式。每个组织都应该将这样的产品纳入其工作流程。在普通的一天中，信息不断流动，每一条信息都与上一条同样重要，无论是提醒、任务还是更新。很多时候，事情会在细缝中丢失，这意味着浪费了时间和利润。微软的解决方案提供了一个完整的、自动生成的记录，准确地描述了说了什么以及谁说的，因此，信息丢失和在冗长的录音中盲目寻找特定部分的日子一去不复返了。现在，您需要的所有信息都整齐地呈现在您面前，供您随时参考。这项技术比以往任何时候都更加重要。如果说 2020 年教会了我们什么，那就是灵活性的必要性，尤其是在工作场所。人们会生病，意外事件会发生，因此几乎不可能期望员工参加每一次讨论。借助现代会议，我们离能够适应这些意外发展又近了一步，基本上让每个人都能够在不亲临现场的情况下参与其中。

### 实现现代会议

2020 年中，我们收到了新加坡一个政府客户的提案请求。当时仍然是疫情期间。但新加坡已经控制住了疫情，所以政府会议仍然在实体会议室举行。他们想要一个能够转录多达 12 位不同说话人语音的现代解决方案。此外，说话人识别在这里将扮演重要角色。

在说话人识别方面，Azure 提供的功能与客户需求之间的一个显著区别是声音“注册”：Azure 要求所有说话人预先录制一些声音，以便在系统中注册他们的声纹。然而，要求一些想必非常重要的政府官员坐在麦克风前进行录音是不可能的。我们对流程进行了一些调整，首先进行无监督的说话人聚类（也称为说话人分割）。其想法是，如果一个说话人在我们的系统中说过一次话，我们下次他们说话时就能认出他们。

![微软 Azure 语音转文本和语音识别服务流程图](/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/azure-diagram.png)

*现代会议的架构来自 [Azure 对话转录](https://docs.microsoft.com/en-us/azure/cognitive-services/speech-service/conversation-transcription)。在我们的调整中，我们放宽了会议前“用户注册”的要求，改为会议后进行。*


然后，我们迅速为整个项目组装了我们的“武器库”。第一步是采购一个高质量的麦克风阵列，以便为我们的识别模型提供清晰的音频数据。我们立即被 Azure Kinect 所吸引：一个时尚的、拥有 7 个麦克风阵列的设备，采用全铝外壳，并附带高清摄像头和深度传感器。

<center>
<img src="/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/kinect.png" alt="价值 400 美元的 Azure Kinect DK 用于现代会议"/>

*价值 400 美元的 [Azure Kinect DK](https://azure.microsoft.com/en-us/services/kinect-dk/) 用于现代会议*
</center>

仅从外观来看，这是一款真正精密的设备，可以与任何会议室相得益彰，但更重要的是，强大的麦克风阵列保证了我们所追求的质量。通过圆形排列，七个麦克风为使用最先进的信号处理技术（如声源定位和波束成形）开辟了可能性。这款麦克风也是我们后端的完美搭配，后端利用了 Azure 的语音服务，这是一个成熟的语音转文本平台，为我们的产品提供了成为顶级会议转录工具所需的能力。

<center>
<img src="/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/kinect-spec.png" alt="Azure Kinect DK 配备 7 麦克风阵列以拾取声音"/>

*Azure Kinect DK 配备 7 麦克风阵列以拾取声音*
</center>

虽然 Azure 最终没有成为 SeaMeet 的最终选择，但它为我们实现愿景提供了所需的开端。最后，我们用一个用户界面将所有这些联系在一起。在我们的第一个迭代中，我们使用了一个通用的、基于 Java 的设计，虽然朴素，但功能齐全。由于 Kinect 设备无法运行外部代码，所有这些都必须在一台额外的 Windows 笔记本电脑上运行。尽管一开始有些粗糙，但我们很自豪地说，我们拥有了一个功能齐全的会议转录产品。

<center>
<img src="/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/seameet-old.png" alt="Seasalt.ai 的 SeaMeet 服务的初始设置，使用微软 Kinect 麦克风阵列"/>

*使用 Azure Kinect 和一台 Windows 计算机实现现代会议，该计算机运行一个简单的基于 Java 的用户界面，以显示实时会议转录和说话人识别。*
</center>

### 部署现代会议

2021 年 5 月，我们的工程师抵达新加坡，部署我们的现代商业解决方案作为概念验证。与另外两家竞争公司同场竞技，我们各自的任务是展示我们对未来会议的愿景。

尽管在过去十年中无线已成为常态，但我们发现我们的竞争对手仍然选择有线解决方案。从图片中可以看出，12 位发言者每人都被固定在一个单独的麦克风上。发言者必须在近距离对着麦克风说话，系统才能拾取他们的声音。这不仅严重影响了灵活性，而且这样的设置还因复杂的音视频设备而使复杂性倍增。而我们的解决方案则完全由远场功能驱动，这要归功于 7 麦克风阵列和信号处理算法。

在某种程度上，我们的解决方案非常像“Alexa for Business”：一个设备覆盖整个房间，只需要一根电源线。与竞争对手的解决方案相比，我们的解决方案领先几代，因为我们真正理解现代企业的需求，而他们仍然完全受困于过时的有线时代。

<center>
<img src="/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/poc-setup.png"/>

*PoC 会议室设置。有 12 位发言者模拟一个 2 小时的政府会议。*

<img src="/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/poc-captioned.png"/>

*现场所有设备的特写镜头。*
</center>

看到巨大的差异，团队感到非常兴奋。经过几个小时的调试，最终的 PoC 进行得非常顺利。团队还在 PoC 结束后在新加坡进行了一次旅行，在这个国家，Covid-19 得到了严格控制，因此生活和商业照常进行。

### 超越现代会议

在新加坡期间，我们的想法超越了成功的 PoC：与其他竞争解决方案相比，我们的方案要好 10 倍。但我们如何能比自己做得好 10 倍呢？请跟随我们的脚步，进入本系列的下一篇博客。
`;export{n as default};

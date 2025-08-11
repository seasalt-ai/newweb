const n=`---
title: "通过 SeaX 全渠道通信将客户从任何渠道带到一处"
metatitle: "通过 SeaX 全渠道通信统一客户联系方式"
date: 2022-07-15 13:56:54-07:00
modified_date: 2024-12-19 10:00:00+00:00
draft: false
author: Kim Dodds
description: "在本博客中，我们重点介绍 SeaX 的全渠道通信之一，它允许来自任何渠道的用户消息在 SeaX 平台上显示。"
weight: 1
tags:
  - SeaX
image: images/blog/19-seax-omnichannel-communication/0-thumbnail.png
canonicalURL: /blog/seax-omnichannel-communication/
url: /blog/seax-omnichannel-communication/
---

*在我们之前的博客文章中，[欢迎来到 SeaX，一个协作式云端联络中心](https://seasalt.ai/blog/18-seax-collaborative-cloud-contact-center-introduction/)，我们介绍了我们的协作式云端通信联络中心解决方案 SeaX。虽然我们的第一篇博客文章全面概述了 SeaX 的基本功能和更高级的功能，但我们后续的文章将更深入地探讨使 SeaX 脱颖而出的一些个别功能。在这篇文章中，我们将仔细研究 SeaX 的全渠道支持，并了解来自不同渠道的呼叫和消息如何显示在 SeaX 平台上。*

# 目录
- [什么是全渠道通信？](#what-is-omnichannel-communication)
- [消息生命周期](#message-lifecycle)
    - [渠道](#channel)
    - [消息路由](#message-routing)
    - [TaskRouter](#taskrouter)
    - [SeaX 平台](#seax-platform)
- [支持的渠道](#supported-channels)

# 什么是全渠道通信？

首先，"全渠道"到底是什么意思？分解来看，"omni"是一个前缀，意思是"所有"，而"渠道"是您可以与客户互动的各种平台。因此，简单地说，"全渠道通信"意味着能够通过任何和所有可用渠道进行通信。不仅如此，全渠道通信还意味着渠道之间的体验是无缝的。在代理方面，来自所有渠道的通信都呈现在一个统一的界面中。对于客户来说，他们的互动数据在各个渠道之间是持久的。

传统的呼叫中心通常只支持电话呼叫。通过多个渠道（例如电子邮件、网络聊天和电话）与客户联系的更高级的联络中心拥有多渠道联络中心。然而，仅仅因为联络中心利用多个渠道并不意味着他们的体验是无缝的。在多渠道联络中心，不同的渠道可能通过单独的平台访问，和/或客户数据可能无法跨渠道链接。相比之下，全渠道联络中心让代理可以随时随地追踪客户对话，而不会被锁定在一个渠道或分散在数十个平台上。

<center>
<img src="/images/blog/19-seax-omnichannel-communication/1-contact-center-comparison.png" alt="功能比较：传统呼叫中心与联络中心；多渠道与全渠道。"/>

*功能比较：传统呼叫中心与联络中心；多渠道与全渠道。*
</center>

SeaX 能够与几乎任何渠道集成，默认包括：文本、电话、网络聊天、Facebook 等。所有消息和呼叫都显示在一个统一的平台上，并且所有渠道的用户数据都随时可用。

如果您想直接观看演示，请观看我们演示 SeaX 全渠道通信的短视频。在本博客的其余部分，我们将逐步介绍消息和呼叫如何从各种渠道路由到 SeaX 中的代理。我们还将分享开箱即用的支持渠道，并讨论如何扩展 SeaX 以覆盖新渠道。

<iframe width="85%" height="450px" src="https://www.youtube.com/embed/usb-RK7sHlA" title="YouTube 视频播放器" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

# 消息生命周期

SeaX 建立在 [Twilio Flex](https://www.twilio.com/flex) 之上，这是一个基于云端的联络中心，利用 Twilio 的云端通信平台。Twilio 为 SeaX 提供了基本的构建块，例如电信基础设施、消息和任务路由以及基本的联络中心 UI。现在让我们追踪传入用户消息的生命周期，看看 SeaX 如何使用基本的 Twilio 架构结合自定义组件将消息路由到 SeaX 平台上的实时代理。

## 渠道

<center>
<img src="/images/blog/19-seax-omnichannel-communication/2-example-message.jpg" alt="用户通过 Google Business Messages 向企业发送消息。", style="width:50%"/>

*通过 Google Business Messages 向企业发送消息。*
</center>

消息的旅程始于用户在支持的平台上编写和发送消息。上面的示例显示有人在 Google Business Messages 上向 Seasalt.ai 聊天机器人发送消息。默认情况下，Twilio 不支持 Google Business Messages，因此我们利用 Seasalt.ai 开发的自定义渠道连接器将 Google 平台连接到 Twilio 和 SeaX。

消息发送后，它会由自定义连接器传送到 Twilio 消息传递 API。此时，Twilio 会为用户创建一个新的对话上下文，并准备路由消息。

## 消息路由

<center>
<img src="/images/blog/19-seax-omnichannel-communication/3-studio-flow.png" alt="一个简单的 Studio Flow，可将消息路由到聊天机器人或实时代理。"/>

*一个简单的 Studio Flow，可将消息路由到聊天机器人或实时代理。*
</center>

消息被 Twilio 接收后，需要将其路由到正确的位置。为此，我们使用 [Twilio Studio Flows](https://www.twilio.com/studio) 来确定是提供自动回复、将消息转发到聊天机器人、将用户与实时代理联系还是执行其他操作。

在上面提供的简单示例中，所有传入的消息都将转发到聊天机器人，除非它们包含"实时代理"一词，在这种情况下，用户将被转移到 SeaX 平台上的实时代理。

## TaskRouter

<center>
<img src="/images/blog/19-seax-omnichannel-communication/4-taskrouter.png" alt="TaskRouter 架构图。"/>

*TaskRouter 架构图。[来源](https://twilio-cms-prod.s3.amazonaws.com/images/taskrouter-diagram.width-800.png)。*
</center>

消息传输到 SeaX 后，下一步是决定哪个代理将接收它。[Twilio 的 TaskRouter](https://www.twilio.com/taskrouter) 将消息和电话呼叫等任务分配给 SeaX 中最能处理它们的代理。可以为 SeaX 中的每个代理分配技能，例如他们会说哪种语言、他们在哪个部门工作、他们是否应该处理 VIP 客户等。TaskRouter 将检查有关用户和消息的已知信息，然后选择最合适的员工来处理问题。上一步中的 Studio Flow 可以自定义以获取其他信息（例如首选语言），并且客户信息可以在对话和渠道之间保留，以确保他们的体验是无缝的。

## SeaX 平台

<center>
<img src="/images/blog/19-seax-omnichannel-communication/5-seax-incoming-messages.png" alt="传入的呼叫和消息显示在 SeaX 平台上。", style="width:50%"/>

*传入的呼叫和消息显示在 SeaX 平台上。*
</center>

最后，传入的消息将显示给 SeaX 平台上相应的代理。代理可以同时处理来自多个渠道的多个任务。在上图中，一个代理有来电、Facebook 消息和网络聊天消息。代理可以接受任务或拒绝任务，以将其传递给下一个可用的代理。

# 支持的渠道

希望现在更清楚什么是全渠道通信，以及它如何增强用户和代理的体验。最后一个问题是：开箱即用支持哪些渠道？

<center>
<img src="/images/blog/19-seax-omnichannel-communication/6-channel-comparison.png" alt="传统呼叫中心、基本 Twilio Flex 和 SeaX 之间支持的渠道比较。"/>

*传统呼叫中心、基本 Twilio Flex 和 SeaX 之间支持的渠道比较。*
</center>

如前所述，传统的呼叫中心通常只支持电话呼叫。公司可能仍会通过社交媒体或电子邮件与客户互动，但这些消息并未整合到统一的平台中。

Twilio Flex，另一方面，为出色的全渠道联络中心奠定了基础。但是，它开箱即用的渠道很少。除了电话呼叫和短信，他们还对 Facebook、WhatsApp 和电子邮件提供测试版支持。

SeaX 建立在 Flex 之上，为一些最常请求的渠道添加了内置支持：例如 Google Business Messages、Discord、Line 和 Instagram。此外，Seasalt.ai 始终与客户合作，将新渠道引入 SeaX 产品线。SeaX 高度可自定义且易于扩展——这意味着我们可以与您的公司合作，集成您最想要的任何渠道。

感谢您花时间阅读 SeaX 云端联络中心如何利用全渠道通信提供无缝的客户和代理体验。请继续关注我们的下一篇博客文章，该文章将探讨成为"分布式联络中心"意味着什么。如果您有兴趣立即了解更多信息，请填写我们的 [预约演示表单](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting) 以亲身体验 SeaX 平台。
`;export{n as default};

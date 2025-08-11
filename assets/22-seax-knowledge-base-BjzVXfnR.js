const e=`---
title: "SeaX KB：一个在提问前就能回答的知识库"
metatitle: "SeaX KB：一个在提问前就能回答的知识库"
date: 2022-08-15 22:01:32-07:00
modified_date: 2025-07-30 17:05:21.933000+00:00
draft: false
author: Kim Dodds
description: "在这篇文章中，我们将继续探讨AI整合的话题，介绍SeaX的AI驱动知识库，它能即时提供建议的回复。"
weight: 1
tags:
  - SeaX
canonicalURL: /blog/seax-kb-a-knowledge-base/
url: /blog/seax-kb-a-knowledge-base/
---

*在我们之前的博客文章 [使用 SeaX 语音智能为您的联络中心赋予自己的声音](https://seasalt.ai/blog/21-seax-voice-intelligence/) 中，我们展示了 Seasalt.ai 内部文本转语音和语音转文本引擎如何增强 SeaX 平台的各个方面。在这篇文章中，我们将继续探讨 AI 整合的话题，介绍 SeaX 的 AI 驱动知识库，它能即时监听对话并提供建议的回复。*

# 目录
- [传统知识库](#the-traditional-knowledge-base)
- [SeaX 知识库](#seax-knowledge-base)
    - [即时代理商的嵌入式用户界面](#embedded-user-interface-for-live-agents)
    - [快速准确的搜索](#fast-and-accurate-search)
    - [即时自动建议](#real-time-automated-suggestions)
    - [回复模板](#response-templates)
    - [知识库管理](#kb-management)
    - [网络研讨会](#webinar)

# 传统知识库

从根本上说，知识库 (KB) 只是（理想情况下）组织良好且易于访问的信息库，可在线自助使用。良好的知识库系统将具有分层内容组织、搜索和标记等功能，以帮助用户更轻松地找到正确的信息。

维护详细的知识库是当今大多数公司的标准做法。无论是目的是帮助员工分享有关其产品的内部信息、回答潜在客户的问题、协助客户解决问题，还是以上所有——让关键信息可供员工和客户访问意味着更高效的工作和更高的客户满意度。

通常，知识库通过内容管理系统或知识管理系统实施和维护。这些系统可以根据组织的需求而规模各异，从简单的文档管理器到功能丰富的服务，包括发布工作流、受众定位、协作工具等。虽然这些系统在不同方面具有多功能性，但它们几乎总是旨在通过与网页或应用程序的互动来访问。对于客户服务代理的特定用例（他们通常将知识库作为协助客户的主要资源之一），需要与联络中心软件紧密整合，以使代理能够尽可能无缝地处理用户查询。

# SeaX 知识库

我们的知识库从第一天起就以一个非常特殊的用例为设计理念：语音客户服务。尽管大多数（如果不是全部）现有知识库系统都依赖于通过分层网页导航或输入搜索查询，但我们的知识库需要更快、更独立，以便客户服务代表能够将全部注意力集中在客户身上，同时仍然快速回答问题。

如果您想直接观看演示，可以观看我们的 SeaX KB 演示短片：
<iframe width="85%" height="450px" src="https://www.youtube.com/embed/C_e_gaZHSFA" title="YouTube 视频播放器" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>


## 即时代理商的嵌入式用户界面

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-intro.png" alt="SeaX 知识库界面的初探。"/>

*SeaX 知识库界面的初探。*
</center>

自然地，由于我们的知识库引擎是专门为联络中心应用程序设计的，因此它与 SeaX 平台原生整合，以便代理商可以无缝访问知识库，同时处理呼叫和消息。无需切换窗口，无需翻阅标签，无需导航嵌套网页。

## 快速准确的搜索

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-manual-search.png" alt="在 SeaX 知识库中手动搜索的结果。"/>

*在 SeaX 知识库中手动搜索的结果。*
</center>

在最基本的层面上，我们的知识库由一个极其快速准确的搜索引擎提供支持。我们使用最先进的自然语言处理和信息提取技术，从纯文本、示例查询和支持 URL 中收集意义，并将客户的语句与最相关的知识库条目进行匹配。知识库引擎具有高度可扩展性，可以支持数十亿文件，而响应时间没有可察觉的变化。

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-detail.png" alt="点击搜索结果后展开视图中的知识库文章。"/>

*点击搜索结果后展开视图中的知识库文章。*
</center>

除了找到最相关的文档外，我们的搜索引擎还通过从用户查询中提取显着关键字并突出显示每个建议的知识库条目中最相关的关键字和段落来提供更精细的结果。

## 即时自动建议

但到目前为止我们所展示的仍然是手动搜索。即时代理商忙于与客户互动，每次需要信息时手动输入搜索到知识库中会浪费宝贵的时间。因此，SeaX 知识库带来的最大附加价值是针对文本和语音互动的即时自动搜索。

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-automatic-search.png" alt="SeaX 知识库显示传入用户消息的自动文章建议。"/>

*SeaX 知识库显示传入用户消息的自动文章建议。*
</center>

每次有新的用户消息传入时，知识库都会使用客户的精确消息自动查询。即时地，当客户说话时，代理商将获得最新的知识库文章建议供其参考。

这对于语音通话也有效！我们上一篇博客文章 [使用 SeaX 语音智能为您的联络中心赋予自己的声音](https://seasalt.ai/blog/21-seax-voice-intelligence/) 展示了 Seasalt.ai 最先进的语音转文本引擎。SeaX 平台利用该引擎即时转录所有语音通话。因此，我们可以将这些转录用于各种下游应用程序，包括自动知识库搜索。

## 回复模板

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-response-template.png" alt="代理商使用 SeaX 知识库生成的回复模板一键回复客户。"/>

*代理商使用 SeaX 知识库生成的回复模板一键回复客户。*
</center>

知识库的搜索结果还有一个额外功能，有助于加快代理商对基于文本的互动的响应速度。当代理商找到相关的知识库文章时，他们只需点击标题左侧的“+”图标即可将回复模板插入到其聊天窗口中。在后端，每次搜索知识库时，它都会根据建议的知识库文章中最相关的信息生成对用户问题的书面回复，并包含任何支持链接。这可以大大提高代理商的响应时间，因为代理商不再从空白开始。相反，他们已经将知识库文章中的重要信息显示在其聊天窗口中，因此他们只需编辑并发送即可。


## 知识库管理

现在我们已经了解了知识库引擎的功能，关于后端还有一个悬而未决的问题：如何管理知识库中的信息？SeaX 平台提供了一个完全整合的知识库管理用户界面，管理员可以从设置页面访问。

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-management.png" alt="SeaX 知识库管理界面。"/>

*SeaX 知识库管理界面。*
</center>

在此页面上，您可以添加单个新的知识库条目，也可以使用电子表格文件导入/导出整个知识库。该界面还支持编辑和删除知识库条目，以便您可以持续更新您的知识库。

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-edit.png" alt="通过 SeaX 知识库管理界面编辑单个知识库文章。"/>

*通过 SeaX 知识库管理界面编辑单个知识庫文章。*
</center>

## 网络研讨会

如果您想更深入地了解知识库系统及其与 SeaX 平台的整合方式，请观看我们关于该主题的网络研讨会：
<iframe width="85%" height="450px" src="https://www.youtube.com/embed/FOqQ01fpKQ4" title="YouTube 视频播放器" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

如需一对一演示，或了解 Seasalt.ai 如何根据您的业务需求定制解决方案，请填写我们的 [预约演示表单](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting)。`;export{e as default};

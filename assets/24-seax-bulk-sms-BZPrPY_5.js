const n=`---
title: "SeaX Bulk SMS: 更快、更有效地接触客户"
metatitle: "SeaX Bulk SMS: 更快、更有效地接触客户"
date: 2022-09-09 11:05:22-07:00
modified_date: 2025-07-28 00:00:00+00:00
draft: false
author: Amy Chen, Kim Dodds, Sarah Reid
description: "在这篇博客中，我们将展示 SeaX 的批量短信功能如何让代理主动通过短信发送外发消息。"
weight: 1
tags:
  - SeaX
image: images/blog/24-seax-bulk-sms/thumbnail.png
canonicalURL: /blog/seax-bulk-sms/
url: /blog/seax-bulk-sms/
---


*在我们之前的博客文章中，我们介绍了 SeaX 的一些关键功能（包括 [语音智能](https://seasalt.ai/blog/21-seax-voice-intelligence/)、[知识库](https://seasalt.ai/blog/22-seax-knowledge-base/) 和 [案例管理](https://seasalt.ai/blog/23-seax-case-management/)），这些功能有助于代理更好地处理来电和消息。在这篇博客中，我们将展示 SeaX 的批量短信功能如何让代理主动通过短信发送外发消息，事实证明，收件人打开短信的速度和一致性都比传统的电子邮件通信更高。*

# 目录
- [短信与电子邮件](#sms-vs-email)
- [10DLC 标准](#10dlc-standards)
- [SeaX 批量短信](#seax-bulk-sms)
    - [联系人上传](#contact-upload)
    - [消息撰写](#message-composition)
    - [成本估算](#cost-estimate)
    - [批量消息预览](#bulk-message-preview)
    - [活动进度监控](#campaign-progress-monitoring)
    - [收件箱消息聊天](#incoming-message-chat)
- [结束语](#closing)

# 短信与电子邮件

电子邮件往往是大多数业务操作的默认通信模式。直到最近，短信（SMS）才成为批量业务消息的广泛使用渠道，尽管它在日常人际交流中很受欢迎。然而，近年来，Twilio 等云通信提供商通过处理电信基础设施和服务提供商的繁琐细节，并提供简单的短信 API 作为服务给客户，使短信渠道更容易被企业使用。虽然电子邮件可能仍然是业务最受欢迎的渠道，但短信可以为传统的电子邮件通信提供独特的补充。

<center>
<img src="/images/blog/24-seax-bulk-sms/1-pros-cons.png" alt="短信用于商务通信的一些优点和缺点。"/>

*短信用于商务通信的一些优点和缺点。*
</center>

但是，如果电子邮件已被证明是成功的，为什么还要使用短信呢？如果我们以营销活动为例，简短的回答是：虽然电子邮件活动的打开率只有 20%b，但短信的平均打开率可以高达 *98%* —— 更不用说短信往往会获得更多回复。此外，短信通常在收到后 90 秒内打开，而电子邮件通常在 90 分钟左右打开。最后但同样重要的是，短信的平均点击率约为 19%，远高于电子邮件的 3.2%（[来源](https://manychat.com/blog/sms-vs-email-marketing-2021/)）。

一般来说，短信比电子邮件打开得更快、更频繁——也许是因为短信总是直接发送到收件人所在的位置，无论他们是否有 Wi-Fi。此外，由于短信通常用于个人消息，而较少用于商务通信，因此收件人可能会认为短信比电子邮件更重要或更实质性。

话虽如此，短信和电子邮件没有理由不能一起使用！每个渠道都有其自身的优缺点，因此企业可以利用每个渠道的优势，确保发送最有效的通信。

# 10DLC 标准

对于大容量的 A2P（应用程序到个人）短信，美国运营商使用标准化的 10 位长代码，即 10DLC。在开始批量短信活动之前，我们建议您在此处阅读更多关于 10DLC 及其应用的信息：[此处](https://support.twilio.com/hc/en-us/articles/1260800720410-What-is-A2P-10DLC-)。

# SeaX 批量短信

SeaX 的批量短信服务使您能够轻松上传联系人/潜在客户，批量发送短信（我们也支持彩信 - 多媒体消息），并管理传入的回复。请继续阅读，了解开始您的第一个批量短信活动的几个简单步骤。

## 联系人上传

<center>
<img src="/images/blog/24-seax-bulk-sms/2-contact-upload.png" alt="将联系人列表上传到 SeaX 批量短信。"/>

*将联系人列表上传到 SeaX 批量短信。*
</center>

第一步是上传联系人和潜在客户。首先，在 csv 文件中组织您的短信活动联系人。除了必填字段 \`phone_number\` 和 \`name\`，您还可以添加其他字段并在消息正文中使用它们。例如，您可以根据每个联系人的 \`name\` 字段动态更改消息正文以包含收件人的姓名。 

接下来，只需在 SeaX 下打开批量短信服务，然后按“导入”即可上传您的联系人。我们将您之前的所有联系人保存在收件人列表中，以便您可以轻松启动后续活动。

## 消息撰写

<center>
<img src="/images/blog/24-seax-bulk-sms/3-message-draft.png" alt="使用 SeaX 批量短信撰写新短信。"/>

*撰写新短信。*
</center>

下一步是为您的活动命名并撰写消息。批量短信允许您访问存储在 csv/excel 文件中的所有联系人信息。例如，如果您在联系人列表中有一个名为 \`name\` 的字段，您可以在消息中键入 \`{name}\`，消息将自动在消息正文中呈现每个联系人的姓名。

## 成本估算

<center>
<img src="/images/blog/24-seax-bulk-sms/4-cost-estimate.png" alt="选择发送电话号码并使用 SeaX 批量短信获取活动成本估算。"/>

*选择发送电话号码并获取活动成本估算。*
</center>

接下来，选择您要用于发送外发消息的电话号码。如果您还没有电话号码，可以点击右上角的“获取新号码报价”以提交购买请求。我们的团队可以帮助您购买新的 10DLC 号码。 

您还可以预览活动的估计单价。请注意，发送和接收短信/彩信都需要付费，因此请确保您相应地预算。

## 批量消息预览 

<center>
<img src="/images/blog/24-seax-bulk-sms/5-preview.png" alt="使用 SeaX 发送前预览批量短信活动。"/>

*发送前预览批量短信活动。*
</center>

您可以在发送前预览批量消息。确认消息正文、收件人电话号码和发件人电话号码至关重要。一旦您启动活动，将无法撤回消息。在此页面上，您可以预览活动中的前 3 条消息，这对应于您列表中的前 3 个联系人。

## 活动进度监控

<center>
<img src="/images/blog/24-seax-bulk-sms/6-monitor.png" alt="使用 SeaX 监控批量短信活动的进度。"/>

*监控批量短信活动的进度。*
</center>

最后，您可以坐下来在批量短信仪表板上监控活动进度。页面会自动刷新并更新活动状态。您可以在此页面上查看消息发送状态、成功/发送率、估计成本以及回复率。 

## 收件箱消息聊天

<center>
<img src="/images/blog/24-seax-bulk-sms/7-chat.png" alt="使用 SeaX 处理批量短信活动的传入回复。"/>

*处理批量短信活动的传入回复。*
</center>

就像所有 SeaX 功能一样，我们努力使代理或活动经理能够处理传入的请求/问题——批量短信也允许 SeaX 处理外发营销工作。启动活动后，您可以在下面显示的聊天窗口中管理所有传入的回复。

# 结束语

感谢您花时间阅读 SeaX 批量短信系统如何使代理能够发送外发通信以及处理传入消息请求。请继续关注我们博客系列的下一部分，其中将介绍 SeaX 平台中内置的一些管理和分析工具。如果您有兴趣立即了解更多信息，请填写我们的[预订演示表单](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting)，以亲身体验 SeaX 平台。`;export{n as default};

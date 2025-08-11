const n=`---
title: "OpenAI 与人类与语音 AI：成本比较 (5/5)"
metatitle: "OpenAI Realtime API 与人类和语音 AI：成本细分"
date: 2024-10-12 00:22:19-07:00
modified_date: 2025-07-26 16:48:39+00:00
draft: false
author: Xuchen Yao
description: "OpenAI Realtime API 与人类接待员和语音 AI 代理的详细成本分析。"
weight: 1
tags:
  - 自动应答服务
  - 小型企业入站呼叫
  - SeaChat
  - 语音 AI
image: /images/blog/101-openai-chatgpt-realtime-api-cost-breakdown/101-openai-chatgpt-realtime-api-cost-breakdown.svg
canonicalURL: /blog/openai-chatgpt-realtime-api-cost-breakdown/
url: /blog/openai-chatgpt-realtime-api-cost-breakdown/
---


*这是探讨小型企业客户沟通策略的 5 篇文章系列，重点关注应答服务：*

<br/>

<center>
<img height="100%" width="80%" style="background-color: #ffffff" src="/images/blog/101-openai-chatgpt-realtime-api-cost-breakdown/series-diagram.svg"  alt="入站系列图">

</center>

1. [为什么小型企业需要应答服务？](https://seasalt.ai/blog/96-why-small-businesses-need-answering-service/)：了解应答服务的重要性和优势。

2. [外包与内部实时接待员](https://seasalt.ai/blog/97-live-receptionist-inhouse-outbound/)：什么是实时接待员？您应该外包还是内部招聘？

3. [自动电话应答系统（交互式语音应答 IVR 与语音 AI 代理）](https://seasalt.ai/blog/98-inbound-answering-automated-system/)：什么是自动应答服务？您应该使用交互式语音应答还是语音 AI 代理？

4. [决策：我的小型企业应该使用实时接待员还是自动应答服务？](https://seasalt.ai/blog/99-inbound-answering-live-vs-automated/)：您已经从我们的系列中了解了所有关于应答服务的信息。现在是时候决定哪种类型的服务最适合您的业务了。

5. （本文）[OpenAI 与人类与语音 AI：成本比较](https://seasalt.ai/blog/101-openai-chatgpt-realtime-api-cost-breakdown/)：想知道是否应该切换到最新的语音 AI 技术？让我们看看实际成本。

---

## TLDR:

1. OpenAI 和人类都可能**昂贵**：
   1. OpenAI 的 Realtime API 可以实现语音代理 (AI) 体验，大约**每分钟 1 美元**。
   2. 按需虚拟接待员（人类）的价格也约为**每分钟 1 美元**。
2. 但也有**平衡**的选择，但有注意事项：
   1. 长期雇佣时，英语流利的人工代理**每小时**可低至 5 美元（每分钟 0.08 美元）。
   2. 初创公司提供的语音 AI 代理**每小时**可低至 7.2 美元（每分钟 0.12 美元）。

*如果您更喜欢收听本文的音频版本，请观看此视频：*

<iframe width="100%" height="400" src="https://www.youtube.com/embed/?v=DgX6F711ceA&list=PL8K7_LTqly46agqJW2quG5Vsylt5os1Al" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>


## ChatGPT-4o 实时 API 的实际成本

OpenAI 于 2024 年 10 月 1 日发布了其 [Realtime API](https://openai.com/index/introducing-the-realtime-api/) for ChatGPT-4o。这是在 [GPT-4o](https://openai.com/index/hello-gpt-4o/)（第一个全渠道大型语言模型）发布 5 个月后。性能令人惊叹。Chatgpt-4o-realtime 听起来像人类，反应像人类，并且对噪音和中断具有鲁棒性。

然而，Chatgpt-4o-realtime 价格实惠吗？

乍一看，OpenAI 的 Realtime API *在文本方面*似乎比 GPT-4o-mini 贵约 30 倍（**5 美元 vs. 0.15 美元** / 1M 输入令牌）。

<br/>

<center>
<div style="background-color: #ffffff;">
<img height="100%" width="100%" src="/images/blog/101-openai-chatgpt-realtime-api-cost-breakdown/October 2024 pricing for chatgpt-4o-mini.png"  alt="chatgpt-4o-mini 的 2024 年 10 月定价">
</div>

*chatgpt-4o-realtime 的 2024 年 10 月定价*
</center>

<br/>

<center>
<div style="background-color: #ffffff;">
<img height="100%" width="100%" src="/images/blog/101-openai-chatgpt-realtime-api-cost-breakdown/October 2024 pricing for chatgpt-4o-realtime.png"  alt="chatgpt-4o-realtime 的 2024 年 10 月定价">
</div>

*chatgpt-4o-mini 的 2024 年 10 月定价*
</center>


OpenAI 声称音频输入每分钟约 0.06 美元，音频输出每分钟 0.24 美元。将这些加起来，它不应该超过每分钟 0.30 美元，对吗？

我们对 4o-realtime API 进行了实际测试，发现它每分钟花费约 1 美元。


<br/>

<center>
<div style="background-color: #ffffff;">
<img height="100%" width="100%" src="/images/blog/101-openai-chatgpt-realtime-api-cost-breakdown/Screenshot of the cost for one test of the ChatGPT-4o Realtime API.png"  alt="ChatGPT-4o 实时 API 单次测试成本截图">
</div>

*ChatGPT-4o 实时 API 单次测试成本截图*
</center>


我们与 chatgpt-4o-realtime API 进行了 5 分钟的语音对话，发现花费了 5.38 美元。5 分钟的语音对话中包含大约 142 秒的转录音频（可以将其视为音频输入），其余大部分是音频输出。

在我们进行的另一次测试中，一次简单的 10 分钟对话花费了大约 10 美元。

哎呀，这太贵了。它实际上比 [Seasalt.ai 自己的语音代理贵约 10 倍](https://chat.seasalt.ai/en-us#pricing?utm_source=blog/)。

如果一些开发人员只是在测试 API，并试图投入一些有意义的精力来训练一个真正能做事的语音 AI 代理，他们一天之内就可以轻松花费数百美元！

## ChatGPT-4o 实时 API 与人工代理 – 哪个更实惠？

因此，如果有人使用 ChatGPT-4o 的实时 API 构建语音 AI 代理，则每分钟大约需要 1 美元，即**每小时 60 美元**。

### 人工代理的成本是多少？

如果您使用内部人员，例如前台接待员，他们的工资可能在最低工资（联邦 7.25 美元到加利福尼亚 16 美元）到每小时 20 到 30 美元之间。

如果您使用外包机构，价格可能会有所不同：有些机构每月 200 分钟起价 349 美元，外加设置费。Seasalt.ai 已就此撰写了一份详细调查：[实时接待员的成本：内部与外包](https://seasalt.ai/blog/97-live-receptionist-inhouse-outbound/?utm_source=crossblog)。


<br/>

<center>
<img height="100%" width="100%" src="/images/blog/97-live-receptionist-inhouse-outsourced/vendor-summary.png"  alt="实时接待员供应商摘要">

*Seasalt.ai 的实时接待员供应商摘要*
</center>

## ChatGPT-4o 实时 API 与其他语音 AI 代理 – 有何区别？

ChatGPT-4o 的实时 API 代表了语音 AI 技术的重大进步，与其他语音 AI 代理相比，它具有几个关键区别：

- **响应速度**：它提供近乎实时的交互，平均响应时间为 2 到 3 秒
- **鲁棒性**：API 允许在对话期间中断和重定向，从而实现更自然的对话流程
- **端到端**：API 不需要将不同的组件（例如语音转文本（Azure、Deepgram 等）和文本转语音（Azure、Eleven labs））拼凑在一起。

但这里的注意事项是成本：ChatGPT-4o 的实时 API 每分钟大约需要 1 美元，而其他[语音 AI 代理每分钟只需 0.12 美元](https://seasalt.ai/blog/98-inbound-answering-automated-system/?utm_source=crossblog)。

<br/>

<center>
<img height="100%" width="100%" src="/images/blog/98-inbound-answering-automated-system/ai-product-comparison.png"  alt="语音 AI 代理的 Seasalt.ai 与 Bland AI 与 Smith.ai。Synthflow.ai 与 Retell AI 与 Slang AI 与 Gridspace">

*Seasalt.ai 的语音 AI 代理产品比较*
</center>


价格相差 10 倍，但性能是否也相差 10 倍呢？这由客户来判断。

## 结论

对于企业主来说，基本上有 4 种选择：

1. **内部人工代理**
2. **外包给其他公司**，无论是境内还是境外
3. **使用经济实惠的语音 AI 代理**
4. **使用最先进/昂贵的 OpenAI 实时 API 进行构建**

我总结了以下不同选项的各种优缺点：

* **OpenAI 实时 API** 提供最快、最自然的体验，但需要技术专业知识且价格昂贵。
* **境内按需人工代理** 擅长用流利的英语处理基本任务，但集成有限。
* **境外长期人工代理** 最经济实惠，但由于基础设施问题和高人员流动率可能不可靠。
* **集成语音 AI 代理** 在成本、功能和易用性之间取得了平衡，但响应速度可能稍慢，并且存在一些集成问题。

<br/>

<center>
<img height="100%" width="100%" src="/images/blog/101-openai-chatgpt-realtime-api-cost-breakdown/options-for-phone-answer-services.png"  alt="电话应答服务的不同选项：人类与 OpenAI 与语音 AI 初创公司">

*电话应答服务的不同选项：人类与 OpenAI 与语音 AI 初创公司*
</center>

作为语音识别和自然语言处理领域的从业者，我的两点看法是：

1. 使用市场上集成的语音 AI 代理，例如[我与 SeaChat 自豪地构建的代理](https://wiki.seasalt.ai/seachat/inbound-voice-agent/tutorial/?utm_source=blog/)。它们成熟且价格实惠。
2. 再给 OpenAI 实时 API 一年时间，让小白鼠们测试一下，希望价格能降到更实惠的 10 美元/小时，那么**它将变得真正令人惊叹**。小心了，人工代理！


## 了解更多
如果您想以合理的价格首先探索用于客户服务的 AI 语音技术，您可以访问 [SeaChat](https://chat.seasalt.ai/?utm_source=blog/) 或 [与我们预约演示](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting)。


## 关于本系列

*这是探讨小型企业客户沟通策略的 5 篇文章系列，重点关注应答服务：*

- [为什么小型企业需要应答服务？](https://seasalt.ai/blog/96-why-small-businesses-need-answering-service/)：了解应答服务的重要性和优势。

- [外包与内部实时接待员](https://seasalt.ai/blog/97-live-receptionist-inhouse-outbound/)：什么是实时接待员？您应该外包还是内部招聘？

- [自动电话应答系统（交互式语音应答 IVR 与语音 AI 代理）](https://seasalt.ai/blog/98-inbound-answering-automated-system/)：什么是自动应答服务？您应该使用机器人 IVR 还是语音 AI 代理？

- [决策：我的小型企业应该使用实时接待员还是自动应答服务？](https://seasalt.ai/blog/99-inbound-answering-live-vs-automated/)：您已经从我们的系列中了解了所有关于应答服务的信息。现在是时候决定哪种类型的服务最适合您的业务了。

- （本文）[OpenAI 与人类与语音 AI：成本比较](https://seasalt.ai/blog/101-openai-chatgpt-realtime-api-cost-breakdown/)：OpenAI 最新的语音 AI 技术是一个很棒的语音 AI 代理。实际成本是多少？
`;export{n as default};

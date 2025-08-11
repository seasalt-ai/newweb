const n=`---
title: "OpenAI 與人類與語音 AI：成本比較 (5/5)"
metatitle: "OpenAI Realtime API 與人類和語音 AI：成本細分"
date: 2024-10-12 00:22:19-07:00
modified_date: 2025-07-26 16:48:39+00:00
draft: false
author: Xuchen Yao
description: "OpenAI Realtime API 與人類接待員和語音 AI 代理的詳細成本分析。"
weight: 1
tags:
  - 自動應答服務
  - 小型企業入站呼叫
  - SeaChat
  - 語音 AI
image: /images/blog/101-openai-chatgpt-realtime-api-cost-breakdown/101-openai-chatgpt-realtime-api-cost-breakdown.svg
canonicalURL: /blog/openai-chatgpt-realtime-api-cost-breakdown/
url: /blog/openai-chatgpt-realtime-api-cost-breakdown/
---


*這是探討小型企業客戶溝通策略的 5 篇文章系列，重點關注應答服務：*

<br/>

<center>
<img height="100%" width="80%" style="background-color: #ffffff" src="/images/blog/101-openai-chatgpt-realtime-api-cost-breakdown/series-diagram.svg"  alt="入站系列圖">

</center>

1. [為什麼小型企業需要應答服務？](https://seasalt.ai/blog/96-why-small-businesses-need-answering-service/)：了解應答服務的重要性和優勢。

2. [外包與內部即時接待員](https://seasalt.ai/blog/97-live-receptionist-inhouse-outbound/)：什麼是即時接待員？您應該外包還是內部招聘？

3. [自動電話應答系統（互動式語音應答 IVR 與語音 AI 代理）](https://seasalt.ai/blog/98-inbound-answering-automated-system/)：什麼是自動應答服務？您應該使用互動式語音應答還是語音 AI 代理？

4. [決策：我的小型企業應該使用即時接待員還是自動應答服務？](https://seasalt.ai/blog/99-inbound-answering-live-vs-automated/)：您已經從我們的系列中了解了所有關於應答服務的資訊。現在是時候決定哪種類型的服務最適合您的業務了。

5. （本文）[OpenAI 與人類與語音 AI：成本比較](https://seasalt.ai/blog/101-openai-chatgpt-realtime-api-cost-breakdown/)：想知道是否應該切換到最新的語音 AI 技術？讓我們看看實際成本。

---

## TLDR:

1. OpenAI 和人類都可能**昂貴**：
   1. OpenAI 的 Realtime API 可以實現語音代理 (AI) 體驗，大約**每分鐘 1 美元**。
   2. 按需虛擬接待員（人類）的價格也約為**每分鐘 1 美元**。
2. 但也有**平衡**的選擇，但有注意事項：
   1. 長期僱用時，英語流利的人工代理**每小時**可低至 5 美元（每分鐘 0.08 美元）。
   2. 初創公司提供的語音 AI 代理**每小時**可低至 7.2 美元（每分鐘 0.12 美元）。

*如果您更喜歡收聽本文的音訊版本，請觀看此影片：*

<iframe width="100%" height="400" src="https://www.youtube.com/embed/?v=DgX6F711ceA&list=PL8K7_LTqly46agqJW2quG5Vsylt5os1Al" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>


## ChatGPT-4o 即時 API 的實際成本

OpenAI 於 2024 年 10 月 1 日發布了其 [即時 API](https://openai.com/index/introducing-the-realtime-api/) for ChatGPT-4o。這是 [GPT-4o](https://openai.com/index/hello-gpt-4o/)（第一個全通路大型語言模型）發布 5 個月後的事件。性能令人驚嘆。Chatgpt-4o-realtime 聽起來像人類，反應像人類，並且對噪音和中斷具有魯棒性。

然而，Chatgpt-4o-realtime 價格實惠嗎？

乍一看，OpenAI 的即時 API *在文字方面*似乎比 GPT-4o-mini 貴約 30 倍（**5 美元 vs. 0.15 美元** / 1M 輸入令牌）。

<br/>

<center>
<div style="background-color: #ffffff;">
<img height="100%" width="100%" src="/images/blog/101-openai-chatgpt-realtime-api-cost-breakdown/October 2024 pricing for chatgpt-4o-mini.png"  alt="chatgpt-4o-mini 的 2024 年 10 月定價">
</div>

*chatgpt-4o-realtime 的 2024 年 10 月定價*
</center>

<br/>

<center>
<div style="background-color: #ffffff;">
<img height="100%" width="100%" src="/images/blog/101-openai-chatgpt-realtime-api-cost-breakdown/October 2024 pricing for chatgpt-4o-realtime.png"  alt="chatgpt-4o-realtime 的 2024 年 10 月定價">
</div>

*chatgpt-4o-mini 的 2024 年 10 月定價*
</center>


OpenAI 聲稱音訊輸入每分鐘約 0.06 美元，音訊輸出每分鐘 0.24 美元。將這些加起來，它不應該超過每分鐘 0.30 美元，對嗎？

我們對 4o-realtime API 進行了實際測試，發現它每分鐘花費約 1 美元。


<br/>

<center>
<div style="background-color: #ffffff;">
<img height="100%" width="100%" src="/images/blog/101-openai-chatgpt-realtime-api-cost-breakdown/Screenshot of the cost for one test of the ChatGPT-4o Realtime API.png"  alt="ChatGPT-4o 即時 API 單次測試成本截圖">
</div>

*ChatGPT-4o 即時 API 單次測試成本截圖*
</center>


我們與 chatgpt-4o-realtime API 進行了 5 分鐘的語音對話，發現花費了 5.38 美元。5 分鐘的語音對話中包含大約 142 秒的轉錄音訊（可以將其視為音訊輸入），其餘大部分是音訊輸出。

在我們進行的另一次測試中，一次簡單的 10 分鐘對話花費了約 10 美元。

哎呀，這太貴了。它實際上比 [Seasalt.ai 自己的語音代理貴約 10 倍](https://chat.seasalt.ai/en-us#pricing?utm_source=blog/)。

如果一些開發人員只是在測試 API，並試圖投入一些有意義的精力來訓練一個真正能做事的語音 AI 代理，他們一天之內就可以輕鬆花費數百美元！

## ChatGPT-4o 即時 API 與人工代理 – 哪個更實惠？

因此，如果有人使用 ChatGPT-4o 的即時 API 建立語音 AI 代理，則每分鐘大約需要 1 美元，即**每小時 60 美元**。

### 人工代理的成本是多少？

如果您使用內部人員，例如前台接待員，他們的工資可能在最低工資（聯邦 7.25 美元到加利福尼亞 16 美元）到每小時 20 到 30 美元之間。

如果您使用外包機構，價格可能會有所不同：有些機構每月 200 分鐘起價 349 美元，外加設定費。Seasalt.ai 已就此撰寫了一份詳細調查：[即時接待員的成本：內部與外包](https://seasalt.ai/blog/97-live-receptionist-inhouse-outbound/?utm_source=crossblog)。


<br/>

<center>
<img height="100%" width="100%" src="/images/blog/97-live-receptionist-inhouse-outsourced/vendor-summary.png"  alt="即時接待員供應商摘要">

*Seasalt.ai 的即時接待員供應商摘要*
</center>

## ChatGPT-4o 即時 API 與其他語音 AI 代理 – 有何區別？

ChatGPT-4o 的即時 API 代表了語音 AI 技術的重大進步，與其他語音 AI 代理相比，它具有幾個關鍵區別：

- **回應速度**：它提供近乎即時的互動，平均回應時間為 2 到 3 秒
- **魯棒性**：API 允許在對話期間中斷和重定向，從而實現更自然的對話流程
- **端到端**：API 不需要將不同的組件（例如語音轉文字（Azure、Deepgram 等）和文字轉語音（Azure、Eleven labs））拼湊在一起。

但這裡的注意事項是成本：ChatGPT-4o 的即時 API 每分鐘大約需要 1 美元，而其他[語音 AI 代理每分鐘只需 0.12 美元](https://seasalt.ai/blog/98-inbound-answering-automated-system/?utm_source=crossblog)。

<br/>

<center>
<img height="100%" width="100%" src="/images/blog/98-inbound-answering-automated-system/ai-product-comparison.png"  alt="語音 AI 代理的 Seasalt.ai 與 Bland AI 與 Smith.ai。Synthflow.ai 與 Retell AI 與 Slang AI 與 Gridspace">

*Seasalt.ai 的語音 AI 代理產品比較*
</center>


價格相差 10 倍，但性能是否也相差 10 倍呢？這由客戶來判斷。

## 結論

對於企業主來說，基本上有 4 種選擇：

1. **內部人工代理**
2. **外包給其他公司**，無論是境內還是境外
3. **使用經濟實惠的語音 AI 代理**
4. **使用最先進/昂貴的 OpenAI 即時 API 進行建構**

我總結了以下不同選項的各種優缺點：

* **OpenAI 即時 API** 提供最快、最自然的體驗，但需要技術專業知識且價格昂貴。
* **境內按需人工代理** 擅長用流利的英語處理基本任務，但整合有限。
* **境外長期人工代理** 最經濟實惠，但由於基礎設施問題和高人員流動率可能不可靠。
* **整合語音 AI 代理** 在成本、功能和易用性之間取得了平衡，但回應速度可能稍慢，並且存在一些整合問題。

<br/>

<center>
<img height="100%" width="100%" src="/images/blog/101-openai-chatgpt-realtime-api-cost-breakdown/options-for-phone-answer-services.png"  alt="電話應答服務的不同選項：人類與 OpenAI 與語音 AI 新創公司">

*電話應答服務的不同選項：人類與 OpenAI 與語音 AI 新創公司*
</center>

作為語音識別和自然語言處理領域的從業者，我的兩點看法是：

1. 使用市場上整合的語音 AI 代理，例如[我與 SeaChat 自豪地建立的代理](https://wiki.seasalt.ai/seachat/inbound-voice-agent/tutorial/?utm_source=blog/)。它們成熟且價格實惠。
2. 再給 OpenAI 即時 API 一年時間，讓小白鼠們測試一下，希望價格能降到更實惠的 10 美元/小時，那麼**它將變得真正令人驚嘆**。小心了，人工代理！


## 了解更多
如果您想以合理的價格首先探索用於客戶服務的 AI 語音技術，您可以訪問 [SeaChat](https://chat.seasalt.ai/?utm_source=blog/) 或 [與我們預約演示](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting)。


## 關於本系列

*這是探討小型企業客戶溝通策略的 5 篇文章系列，重點關注應答服務：*

- [為什麼小型企業需要應答服務？](https://seasalt.ai/blog/96-why-small-businesses-need-answering-service/)：了解應答服務的重要性和優勢。

- [外包與內部即時接待員](https://seasalt.ai/blog/97-live-receptionist-inhouse-outbound/)：什麼是即時接待員？您應該外包還是內部招聘？

- [自動電話應答系統（互動式語音應答 IVR 與語音 AI 代理）](https://seasalt.ai/blog/98-inbound-answering-automated-system/)：什麼是自動應答服務？您應該使用機器人 IVR 還是語音 AI 代理？

- [決策：我的小型企業應該使用即時接待員還是自動應答服務？](https://seasalt.ai/blog/99-inbound-answering-live-vs-automated/)：您已經從我們的系列中了解了所有關於應答服務的資訊。現在是時候決定哪種類型的服務最適合您的業務了。

- （本文）[OpenAI 與人類與語音 AI：成本比較](https://seasalt.ai/blog/101-openai-chatgpt-realtime-api-cost-breakdown/)：OpenAI 最新的語音 AI 技術是一個很棒的語音 AI 代理。實際成本是多少？
`;export{n as default};

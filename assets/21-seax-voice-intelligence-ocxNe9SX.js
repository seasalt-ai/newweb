const e=`---
title: "使用 SeaX 語音智慧，讓您的聯絡中心擁有自己的聲音"
metatitle: "讓您的聯絡中心透過 SeaX 語音智慧發聲"
date: 2022-08-02 17:24:00-07:00
modified_date: 2025-07-29 20:45:17+00:00
draft: false
author: Kim Dodds, Cody Kim, Xuchen Yao, Guoguo Chen
description: "在這篇部落格中，我們將展示 Seasalt.ai 內部的文字轉語音和語音轉文字引擎如何增強 SeaX 平台的各個方面。"
weight: 1
tags:
  - SeaX
image: /images/blog/21-seax-voice-intelligence/thumbnail.png
canonicalURL: /blog/seax-voice-intelligence/
url: /blog/seax-voice-intelligence/
---

*到目前為止，在我們的 [SeaX 部落格系列](https://seasalt.ai/tags/seax/) 中，我們已經為您提供了 Seasalt.ai 旗艦產品 SeaX 的廣泛概述。我們還討論了使 SeaX 與傳統呼叫中心區別開來的兩個關鍵功能：首先，SeaX 是全通路，這意味著您可以更輕鬆地在任何通路與客戶互動；其次，該平台是一個分散式聯絡中心，它允許您將來自世界各地的客戶訊息和呼叫無縫路由到您在不同地區的分散式代理。*

*現在我們已經介紹了 SeaX 平台的基礎知識，我們將繼續介紹使 SeaX 與其他分散式全通路聯絡中心區別開來的高級 AI 和自動化功能。在這篇部落格中，我們將展示 Seasalt.ai 內部的文字轉語音和語音轉文字引擎如何增強 SeaX 平台的各個方面。*

# 目錄
- [語音智慧簡介](#into-to-voice-intelligence)
- [Seasalt.ai 的獨特之處](#what-sets-seasaltai-apart)
    - [語音轉文字](#speech-to-text)
    - [文字轉語音](#text-to-speech)
- [SeaX 中的 TTS 和 STT](#tts-and-stt-in-seax)
    - [語音 IVR](#voice-ivr)
    - [不可用訊息](#unavailable-message)
    - [即時轉錄](#live-transcription)
    - [更多內容...](#and-more)

# 語音智慧簡介

語音智慧是利用人工智慧分析和從基於語音的資料中獲取洞察。儘管過去十年語音技術取得了顯著發展，但它們在企業環境中的應用仍然有限。公司不斷累積數 TB 的語音資料，但在大多數情況下，這些資料並未得到充分利用。

其中一個原因是語音資料比其他形式的資料更難處理，例如基本統計資料甚至純文字資料。語音資料在許多方面都是獨一無二的：
1. 它依賴於語言，有方言和口音，因此很難捕捉 100% 的資訊
2. 其品質因通路（電話與 VoIP，單聲道與立體聲）、取樣率（8KHz 與 16KHz）、表示精度（8位元、16位元、32位元）和環境聲音（如背景噪音）而異
3. 更難解釋：從語音情感到說話人識別再到語義含義

然而，如果使用正確的工具妥善處理，語音智慧可以為使用它的公司帶來巨大的好處。除其他外，能夠正確管理語音資料可以解鎖使用個人化語音轉文字轉錄的能力，這可以使對話可搜尋、可索引且富有洞察力，並允許進一步的 NLP 處理。隨著收集更多資料，這些服務也可能得到改進，例如：提高轉錄準確性，增加用例覆蓋範圍，以及提供可自訂的語音和語言模型以適應新語言和方言。

# Seasalt.ai 的獨特之處

Seasalt.ai 為企業客戶提供雲端通訊 AI 技術和產品。
我們開發了內部語音和語言技術，用於企業聯絡中心中的文字訊息
和語音通話。我們的自然語言引擎支援廣泛的
高資源和低資源語言：緬甸語、中文、英語、菲律賓語、
德語、印尼語、高棉語、寮語、馬來語、西班牙語、泰米爾語、泰語、越南語等。
Seasalt.ai 由一群世界領先的深度語音識別、
神經語音合成和自然語言對話專家資助和營運。

觀看我們的語音轉文字演示影片：
<iframe width="85%" height="450px" src="https://www.youtube.com/embed/Log8usX8ViE" title="YouTube 影片播放器" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

## 語音轉文字

<center>
<img src="/images/blog/21-seax-voice-intelligence/STT.png" alt="語音轉文字圖示。"/>
</center>

我們的語音轉文字引擎接收語音音訊並即時生成轉錄。從音訊開始，我們提取語音特徵，將這些特徵轉換為音素，然後將這些音素映射到目標語言的正字法。我們目前的系統能夠轉錄多種語言，包括英語和中文，並且不斷有更多語言被添加。

觀看我們的語音轉文字自訂影片，了解 Seasalt 的 STT 引擎如何為任何領域進行自訂：
<iframe width="85%" height="450px" src="https://www.youtube.com/embed/1YEU6mexzWQ" title="YouTube 影片播放器" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

## 文字轉語音

<center>
<img src="/images/blog/21-seax-voice-intelligence/TTS.png" alt="文字轉語音圖示。"/>
</center>

文字轉語音是將文字合成為具有自然語調和節奏的逼真人聲的過程。我們的模型接收普通文字，將此文字轉換為音素，然後將音素轉換為音訊，同時預測每個時間步的正確音高、持續時間和音量，以獲得最逼真的 TTS 體驗。如果最終結果不完美，我們提供調整合成音訊的能力，包括單詞發音、停頓和強調。

觀看我們的文字轉語音自訂演示影片，了解 Seasalt 的 TTS 引擎輸出如何自訂以提供逼真的合成語音：

<iframe width="85%" height="450px" src="https://www.youtube.com/embed/GJCOhTtImp8" title="YouTube 影片播放器" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

您還可以造訪我們網站上的 [TTS 頁面](https://suite.seasalt.ai/tts)，收聽我們一些合成語音的範例，包括湯姆·漢克斯、大衛·阿滕伯勒和瑞絲·薇絲朋。

# SeaX 中的 TTS 和 STT

## 語音 IVR

<center>
<img src="/images/blog/21-seax-voice-intelligence/flow.png" alt="使用 Seasalt.ai 的語音轉文字引擎進行即時轉錄和呼叫路由的語音 IVR 流程。"/>

*使用 Seasalt.ai 的語音轉文字引擎進行即時轉錄和呼叫路由的語音 IVR 流程。*
</center>

語音智慧可以在呼叫到達 SeaX 平台之前就開始提供幫助，確保呼叫被路由到正確的位置，並在將呼叫轉交給座席之前收集重要資訊。SeaX 使用 Twilio Studio 定制呼叫和訊息路由流程。但我們也可以將我們的語音轉文字引擎整合到 IVR 流程中，以允許客戶使用自然語言路由他們的呼叫（而不是傳統的「按 1 鍵…」體驗）。此外，如果您的公司有興趣使用聊天機器人與客戶互動，我們可以更進一步，通過使用我們的文字轉語音引擎為您的聊天機器人提供語音，使其能夠通過電話與客戶交談。

## 不可用訊息

<center>
<img src="/images/blog/21-seax-voice-intelligence/unavailable-message.png" alt="使用文字轉語音的 SeaX 不可用訊息配置。"/>

*使用文字轉語音的 SeaX 不可用訊息配置。*
</center>

我們的文字轉語音技術還允許高度可自訂的語音訊息。例如，當客戶在正常工作時間之後打電話進來，或者客戶需要等待可用座席時，這些訊息可以被觸發。

## 即時轉錄

<center>
<img src="/images/blog/21-seax-voice-intelligence/live-transcription.jpg" alt="SeaX 上向座席顯示的即時呼叫轉錄和分析。"/>

*SeaX 上向座席顯示的即時呼叫轉錄和分析。*
</center>

一旦客戶與座席通話，我們的語音轉文字引擎會為座席提供準確的即時對話轉錄，以供參考。這允許座席參考對話中的先前要點和/或仔細檢查他們對客戶所說內容的理解。此外，這些轉錄對於下游應用程式（如主題提取、動作提取、摘要、會議分析等）也非常有用。

## 更多內容...

以上只是 SeaX 整合高級語音智慧以減少等待時間、提高座席績效並為客戶和座席提供整體無縫體驗的幾種方式。要了解 SeaX 平台附帶的更多高級功能，請繼續關注我們的下一篇部落格文章，其中包括 AI 知識庫、案例管理和批量簡訊。要獲得個人演示並討論 SeaX 平台如何滿足您的特定業務需求，請填寫我們的 [預訂演示表單](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting)。
`;export{e as default};

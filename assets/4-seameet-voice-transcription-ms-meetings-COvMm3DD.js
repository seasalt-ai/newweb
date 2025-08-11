const n=`---
title: "從演示到成功：現代會議的陷阱 (2/5)"
metatitle: "從演示到成功 (2/5)：現代會議的陷阱"
date: 2021-07-30
draft: false
author: Cody Kim
description: "在本部落格系列的第二部分中，跟隨 Seasalt.ai 創造 SeaMeet 的旅程，這是我們協作式現代會議解決方案。"
weight: 1
tags:
  - SeaMeet
image: images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/SeaMeet animation.gif
canonicalURL: /blog/seameet-voice-and-microsoft-modern-meetings/
url: /blog/seameet-voice-and-microsoft-modern-meetings/
---

*在本部落格系列中，跟隨 Seasalt.ai 創造全面現代會議體驗的旅程，從其 humble 的開端，到優化我們在不同硬體和模型上的服務，再到整合最先進的 NLP 系統，最終實現 SeaMeet，我們的協作式現代會議解決方案。*

## 現代會議的陷阱

在我們的開發過程中，我們遇到了許多不可預測的障礙，沒有明確的原因或解決方案。

### 快速啟動

第一個障礙是讓我們的工具正常工作。Azure 提供了一個現代會議範例，我們很高興它與 Linux 相容，但我們發現使用 Windows 上的 SDK 運行演示要容易得多——畢竟它是 Microsoft 產品。在多次嘗試讓提供的範例在 Linux 上運行失敗後，我們最終不得不放棄這條路徑，轉而使用 Windows。最終，我們有了一個功能齊全的語音轉錄器，這是一個巨大的開端。

### 延遲

我們遇到的問題之一是，在前端 UI 上接收識別結果時，大約有五秒的延遲。儘管 5 秒可能看起來相當快，但這種延遲明顯比方便實用的解決方案慢了幾秒，特別是對於即時通訊而言。

<center>
<img src="/images/blog/4-seameet-voice-intelligence-meeting-transcription-pitfalls-of-microsoft-modern-meetings/default_ui.png" style="width:400px;" alt="Azure Speech SDK 提供的語音轉錄預設 UI"/>

*Azure Speech SDK 提供的語音轉錄預設 UI*
</center>

延遲也是後端的一個嚴重問題。在每次會議開始時，結果都是即時出現的（正如宣傳的那樣！），但隨著會議的進行，延遲會週期性地飆升到多達三十秒，然後文字才會出現在顯示器上。到那時，所說的一切早已與對話無關。經過無數次測試，我們開始注意到延遲全天都在變化，我們將其歸因於 Azure 伺服器當時的負載。我們致力於創建一致、可靠的產品，因此這些波動和不可預測的延遲是不可接受的。這更說明了依賴我們自己的模型和伺服器的理由。

### 方言

我們最初使用 Azure 語音服務的一個特殊原因是他們對各種語言和方言的廣泛支持。我們特別高興能利用 Azure 語音服務的新加坡英語模型。但想像一下，當我們發現，對於新加坡方言，美國英語模型始終優於新加坡英語模型時，我們是多麼驚訝。此外，即使是最好的模型也未能應對現實世界的挑戰。

<center>
<img src="/images/blog/4-seameet-voice-intelligence-meeting-transcription-pitfalls-of-microsoft-modern-meetings/bad_result.png"/>

*“恭喜！是男寶寶還是女寶寶？”的轉錄結果*
</center>

我們看到的结果是“ola regulations may be boiled baby cool”，而實際的說法是“恭喜！是男寶寶還是女寶寶？”。一個訓練有素的語言模型應該能夠消除這種轉錄。儘管這是一個極端的例子，但通常情況下，每次轉錄都會出現錯誤。無論錯誤有多小，例如缺少冠詞或誤解的單詞，任何錯誤都會分散注意力，並很容易損害轉錄服務的聲譽。

### Windows 更新

幾週後，團隊夜以繼日地工作，確保我們的產品在幾天後的客戶演示中做好準備。我們的會議轉錄器在三台獨立的 Windows 筆記型電腦上運行流暢。然後有一天，我們突然只剩下一台可用的電腦，儘管沒有人動過程式碼。我們測試了我們的網路，檢查了我們的防火牆，任何我們能想到的可能突然導致我們的產品失敗的原因。我們最後的猜測是，一次意外的 Windows 更新導致 Azure 語音 SDK 與我們的兩台電腦莫名其妙地不相容，當我們逐位比較這三台系統時。隨著我們的展示即將到來，壓力和緊張達到了臨界點。只剩下一台系統，團隊達成了一項協議：不更改程式碼，絕不更新。經歷過這次磨難後，我們受夠了。

### 超越現代會議

為了擺脫這些障礙，Seasalt.ai 的團隊開始訓練我們自己的聲學和語言模型，以與 Azure 的對話轉錄器相媲美。在整個過程中，我們一直在問一個問題：我們接下來該怎麼做？我們如何才能擴展這個已經很有用的產品？

現代會議展示了強大的語音轉文字潛力，但僅此而已。它可以聽我們說話，但如果我們能讓它為我們思考呢？僅僅依靠轉錄，雖然產品令人印象深刻，但其應用有些受限。從語音轉錄轉向語音智能，將為我們能夠創造的東西打開廣闊的大門。智能的例子包括會議摘要、主題抽象和行動提取。最後，設計一個漂亮的界面，將所有內容整合到一個令人驚嘆的套件中。

這就是迄今為止的故事，Seasalt.ai 致力於將最佳商業解決方案帶入快速發展的市場並交付給世界的旅程的開始。如果您想了解更多詳細信息，請繼續閱讀本部落格系列的其餘部分。
`;export{n as default};

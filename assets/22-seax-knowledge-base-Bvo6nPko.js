const e=`---
title: "SeaX KB：一個在提問前就能回答的知識庫"
metatitle: "SeaX KB：一個在提問前就能回答的知識庫"
date: 2022-08-15 22:01:32-07:00
modified_date: 2025-07-27 00:00:00+00:00
draft: false
author: Kim Dodds
description: "在這篇文章中，我們將繼續探討AI整合的話題，介紹SeaX的AI驅動知識庫，它能即時提供建議的回复。"
weight: 1
tags:
  - SeaX
canonicalURL: /blog/seax-kb-a-knowledge-base/
url: /blog/seax-kb-a-knowledge-base/
---

*在我們之前的部落格文章 [使用 SeaX 語音智能為您的聯絡中心賦予自己的聲音](https://seasalt.ai/blog/21-seax-voice-intelligence/) 中，我們展示了 Seasalt.ai 內部文字轉語音和語音轉文字引擎如何增強 SeaX 平台的各個方面。在這篇文章中，我們將繼續探討 AI 整合的話題，介紹 SeaX 的 AI 驅動知識庫，它能即時監聽對話並提供建議的回复。*

# 目錄
- [傳統知識庫](#the-traditional-knowledge-base)
- [SeaX 知識庫](#seax-knowledge-base)
    - [即時代理商的嵌入式使用者介面](#embedded-user-interface-for-live-agents)
    - [快速準確的搜尋](#fast-and-accurate-search)
    - [即時自動建議](#real-time-automated-suggestions)
    - [回覆範本](#response-templates)
    - [知識庫管理](#kb-management)
    - [網路研討會](#webinar)

# 傳統知識庫

從根本上說，知識庫 (KB) 只是（理想情況下）組織良好且易於存取的資訊庫，可線上自助使用。良好的知識庫系統將具有分層內容組織、搜尋和標記等功能，以幫助使用者更輕鬆地找到正確的資訊。

維護詳細的知識庫是當今大多數公司的標準做法。無論目的是幫助員工分享有關其產品的內部資訊、回答潛在客戶的問題、協助客戶解決問題，還是以上所有——讓關鍵資訊可供員工和客戶存取意味著更高效的工作和更高的客戶滿意度。

通常，知識庫透過內容管理系統或知識管理系統實施和維護。這些系統可以根據組織的需求而規模各異，從簡單的文檔管理器到功能豐富的服務，包括發布工作流、受眾定位、協作工具等。雖然這些系統在不同方面具有多功能性，但它們幾乎總是旨在透過與網頁或應用程式的互動來存取。對於客戶服務代理的特定用例（他們通常將知識庫作為協助客戶的主要資源之一），需要與聯絡中心軟體緊密整合，以使代理能夠盡可能無縫地處理使用者查詢。

# SeaX 知識庫

我們的知識庫從第一天起就以一個非常特殊的用例為設計理念：語音客戶服務。儘管大多數（如果不是全部）現有知識庫系統都依賴於透過分層網頁導航或輸入搜尋查詢，但我們的知識庫需要更快、更獨立，以便客戶服務代表能夠將全部注意力集中在客戶身上，同時仍然快速回答問題。

如果您想直接觀看演示，可以觀看我們的 SeaX KB 演示短片：
<iframe width="85%" height="450px" src="https://www.youtube.com/embed/C_e_gaZHSFA" title="YouTube 影片播放器" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>


## 即時代理商的嵌入式使用者介面

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-intro.png" alt="SeaX 知識庫介面的初探。"/>

*SeaX 知識庫介面的初探。*
</center>

自然地，由於我們的知識庫引擎是專門為聯絡中心應用程式設計的，因此它與 SeaX 平台原生整合，以便代理商可以無縫存取知識庫，同時處理呼叫和訊息。無需切換視窗，無需翻閱標籤，無需導航嵌套網頁。

## 快速準確的搜尋

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-manual-search.png" alt="在 SeaX 知識庫中手動搜尋的結果。"/>

*在 SeaX 知識庫中手動搜尋的結果。*
</center>

在最基本的層面上，我們的知識庫由一個極其快速準確的搜尋引擎提供支援。我們使用最先進的自然語言處理和資訊提取技術，從純文字、範例查詢和支援 URL 中收集意義，並將客戶的語句與最相關的知識庫條目進行匹配。知識庫引擎具有高度可擴展性，可以支援數十億文件，而回應時間沒有可察覺的變化。

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-detail.png" alt="點擊搜尋結果後展開視圖中的知識庫文章。"/>

*點擊搜尋結果後展開視圖中的知識庫文章。*
</center>

除了找到最相關的文檔外，我們的搜尋引擎還透過從使用者查詢中提取顯著關鍵字並突出顯示每個建議的知識庫條目中最相關的關鍵字和段落來提供更精細的結果。

## 即時自動建議

但到目前為止我們所展示的仍然是手動搜尋。即時代理商忙於與客戶互動，每次需要資訊時手動輸入搜尋到知識庫中會浪費寶貴的時間。因此，SeaX 知識庫帶來的最大附加價值是針對文字和語音互動的即時自動搜尋。

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-automatic-search.png" alt="SeaX 知識庫顯示傳入使用者訊息的自動文章建議。"/>

*SeaX 知識庫顯示傳入使用者訊息的自動文章建議。*
</center>

每次有新的使用者訊息傳入時，知識庫都會使用客戶的精確訊息自動查詢。即時地，當客戶說話時，代理商將獲得最新的知識庫文章建議供其參考。

這對於語音通話也有效！我們上一篇部落格文章 [使用 SeaX 語音智能為您的聯絡中心賦予自己的聲音](https://seasalt.ai/blog/21-seax-voice-intelligence/) 展示了 Seasalt.ai 最先進的語音轉文字引擎。SeaX 平台利用該引擎即時轉錄所有語音通話。因此，我們可以將這些轉錄用於各種下游應用程式，包括自動知識庫搜尋。

## 回覆範本

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-response-template.png" alt="代理商使用 SeaX 知識庫生成的回复範本一鍵回复客戶。"/>

*代理商使用 SeaX 知識庫生成的回复範本一鍵回复客戶。*
</center>

知識庫的搜尋結果還有一個額外功能，有助於加快代理商對基於文字的互動的響應速度。當代理商找到相關的知識庫文章時，他們只需點擊標題左側的「+」圖示即可將回覆範本插入到其聊天視窗中。在後端，每次搜尋知識庫時，它都會根據建議的知識庫文章中最相關的資訊生成對使用者問題的書面回覆，並包含任何支援連結。這可以大大提高代理商的響應時間，因為代理商不再從空白開始。相反，他們已經將知識庫文章中的重要資訊顯示在其聊天視窗中，因此他們只需編輯並發送即可。


## 知識庫管理

現在我們已經了解了知識庫引擎的功能，關於後端還有一個懸而未決的問題：如何管理知識庫中的資訊？SeaX 平台提供了一個完全整合的知識庫管理使用者介面，管理員可以從設定頁面存取。

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-management.png" alt="SeaX 知識庫管理介面。"/>

*SeaX 知識庫管理介面。*
</center>

在此頁面上，您可以添加單個新的知識庫條目，也可以使用電子表格文件導入/導出整個知識庫。該介面還支援編輯和刪除知識庫條目，以便您可以持續更新您的知識庫。

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-edit.png" alt="透過 SeaX 知識庫管理介面編輯單個知識庫文章。"/>

*透過 SeaX 知識庫管理介面編輯單個知識庫文章。*
</center>

## 網路研討會

如果您想更深入地了解知識庫系統及其與 SeaX 平台的整合方式，請觀看我們關於該主題的網路研討會：
<iframe width="85%" height="450px" src="https://www.youtube.com/embed/FOqQ01fpKQ4" title="YouTube 影片播放器" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

如需一對一演示，或了解 Seasalt.ai 如何根據您的業務需求定制解決方案，請填寫我們的 [預約演示表單](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting)。
`;export{e as default};

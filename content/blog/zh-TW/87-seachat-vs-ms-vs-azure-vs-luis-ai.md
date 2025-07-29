---
title: "SeaChat對比Microsoft Bot 框架與Azure Bot 服務（LUIS.ai）"
metatitle: "SeaChat對比Microsoft Bot 框架與Azure Bot 服務（LUIS.ai）"
date: 2024-04-02T00:22:19-07:00
lastmod: 2024-04-03T00:22:19-07:00
draft: false
author:  Xuchen Yao
description: 在對話式AI領域，Microsoft Azure Bot 服務（LUIS.ai）曾熱門，基於大型語言模型(LLMs)的SeaChat，能突破限制，打造更自然流暢的對話體驗。
weight: 1
tags: ["SeaChat", "AI Tools", "LLM", "Conversational AI", "NLU"]
image: /images/blog/74-SeaChat-vs-Microsoft-Bot-Framework-vs-Azure-Bot-Service-vs-luis-ai/blog-banner.png
canonicalURL: "/zh/blog/seachat-vs-microsoft-bot-framework-vs-azure-bot-service-vs-luis-ai/"
url: "/zh/blog/seachat-vs-microsoft-bot-framework-vs-azure-bot-service-vs-luis-ai/"
aliases:
  - "/zh/blog/87-seachat-vs-microsoft-bot-framework-vs-azure-bot-service-vs-luis-ai/"
summary: '對話式AI的世界對於Microsoft與OpenAI日益深入的合作關係的最新消息感到激動。雖然有些人慶祝這一合作的潛力，但在Microsoft內部也有不滿的聲音。據報導，內部人士擔心，會偏離內部AI開發，以推廣OpenAI的產品。

一個特別提到的領域是Microsoft的Azure Bot Service的命運。'
---

對話式AI的世界對於Microsoft與OpenAI日益深入的合作關係的最新消息感到激動。雖然有些人慶祝這一合作的潛力，但在Microsoft內部也有不滿的聲音。據報導，內部人士擔心，會偏離內部AI開發，以推廣OpenAI的產品。

一個特別提到的領域是Microsoft的Azure Bot Service的命運。內部消息來源暗示，它可能“[或多或少地消失了](https://www.digitalinformationworld.com/2024/03/microsoft-insiders-fear-firm-has.html)”，被OpenAI的解決方案所取代。

[Microsoft Bot Framework](https://dev.botframework.com/)和[Azure AI Bot Service](https://azure.microsoft.com/en-us/products/ai-services/ai-bot-service)（以及[LUIS.ai](http://LUIS.ai)）是一系列庫、工具和服務的集合，讓您可以構建、測試、部署和管理智能機器人。然而，[Bot Framework SDK的GitHub倉庫](https://github.com/microsoft/botframework-sdk)在2年多的時間裡（截至2024年）除了README之外沒有更新：

<img height="60%" width="100%" src="/images/blog/74-SeaChat-vs-Microsoft-Bot-Framework-vs-Azure-Bot-Service-vs-luis-ai/1-Microsoft-bot-framework.png" alt="">


## 對開發者而言，Microsoft Bot 框架的替代方案是什麼？

SeaChat登場：**LLM的挑戰者**

當Microsoft思考其AI策略時，Seasalt.ai正憑藉其LLM（大型語言模型）驅動的對話平台[SeaChat](https://chat.seasalt.ai/?utm_source=blog)引起關注。SeaChat利用自然語言理解的最新進展，提供比傳統基於規則的聊天機器人更自然和直觀的用戶體驗。

**這裡是為什麼SeaChat可能很好地定位來領導對話式AI革命**：
- **LLM的力量**：
  利用LLM的力量，促進更細膩的對話。
  更準確地理解上下文和意圖。
  使用戶互動更自然、更流暢。
- **靈活性**：
  與用戶互動時適應並學習。
  持續提高提供相關和有用回應的能力。
  隨著時間處理復雜查詢和請求。
- **無縫整合**：
  與各種平台和應用無縫整合。
  易於在不同渠道部署聊天機器人。
  為統一的客戶體驗提供全渠道支持。
- **減少開發時間**：以最少的程式碼要求構建複雜聊天機器人。
- **成本效益**：消除了大量訓練數據和資源的需要。
- **可擴展性**：輕鬆處理高量查詢，不影響性能。

## Azure Bot 服務和Microsoft Bot 框架的缺點
雖然Azure Bot Services和Microsoft Bot Framework已經有其用途，但它們帶來一些缺點：
- **基於規則的限制**：依賴於預定義的規則可能導致對話僵硬，難以處理意外的用戶輸入。
- **開發複雜性**：構建和維護複雜的聊天機器人可能需要相當的程式碼專業知識。
- **有限的可擴展性**：管理高量查詢可能成為挑戰，影響性能。
- **整合挑戰**：與各種平台整合可能需要額外的開發工作。
- **供應商鎖定**：依賴Microsoft的生態系統可能限制了靈活性和未來選擇。
- **與OpenAI的不確定未來**：Microsoft轉向OpenAI解決方案創建了對Bot Framework長期支持的不確定性。

## 傳統意圖/實體基NLU與基於LLM的NLU的比較

研究顯示基於意圖/實體的NLU與基於LLM的NLU之間的差異是[以百萬計的](https://seasalt.ai/blog/73-intent-entity-based-nlu-vs-genai-llm-based-nlu/?utm_source=blog)。就訓練實例而言，是630,000個實例對比僅32個。這種在訓練數據需求上的劇減轉化為採用GenAI/LLM基礎NLU的業務顯著的成本節省。

#### SeaChat對比Microsoft Bot 框架 ####
<center>
<img height="60%" width="100%" src="/images/blog/87-zh-SeaChat-vs-Microsoft-Bot-Framework-vs-Azure-Bot-Service-vs-luis-ai/87-zh-SeaChat-vs-Microsoft-Bot-Framework-vs-Azure-Bot-Service-vs-luis-ai.png" alt="">

*SeaChat-vs-Microsoft Bot 框架*
</center>

## SeaChat能提供更好的對話體驗
SeaChat在對話式AI領域代表了一個顯著的進步，為企業提供了一個強大且多功能的平台，用於創建吸引人且個性化的對話體驗。憑藉其先進的技術、無縫整合和全面的功能集，[SeaChat](https://chat.seasalt.ai/?utm_source=blog)作為一個強大的替代傳統框架如Azure Bot Services和Microsoft Bot Framework的選擇，為AI驅動的互動鋪平了未來的道路。

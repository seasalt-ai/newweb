const n=`---
title: "Discord (3/3): Discord 和 Twilio Flex: 將 Flex 聯絡中心帶入未知領域"
metatitle: "Discord (3/3): Discord 中的 Twilio Flex 聯絡中心"
date: 2022-06-07 12:32:24-07:00
modified_date: 2025-07-28T16:56:53Z
draft: false
author: Kim Dodds
description: "在這篇博客中，我們將演示 Seasalt.ai 如何將一個功能齊全的聯絡中心集成到 Discord 服務器中。"
tags:
  - SeaX
  - Discord
image: /images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/flex-discord-thumbnail.png
canonicalURL: /blog/discord-and-twilio
url: /blog/discord-and-twilio/
---

*這是我們關於 Discord 上客戶參與的三部分系列文章的最後一篇。我們的第一篇博客文章[“客戶參與的新前沿”](https://seasalt.ai/blog/15-discord-a-new-frontier-for-customer-engagement/)討論了 Discord 的日益普及，以及它為品牌創建和參與自己的在線社區提供了新機會。在第二部分[“如何為您的品牌創建 Discord 社區和機器人”](https://seasalt.ai/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/)中，我們介紹了如何為您的品牌創建 Discord 服務器，以及如何集成機器人來管理服務器審核、公告、用戶反饋等。最後，在這篇博客中，我們將演示 Seasalt.ai 如何將一個功能齊全的聯絡中心集成到 Discord 服務器中，從而使品牌能夠處理平台上客戶服務的所有方面。*

## 目錄
- [目錄](#table-of-contents)
- [Discord 客戶服務演示](#discord-customer-service-demo)
- [Twilio Flex](#twilio-flex)
- [SeaX](#seax)
- [演示服務器](#demo-server)
  - [一對多幫助：官方頻道](#1-to-many-help-official-channels)
  - [一對一幫助：客戶服務代理](#1-to-1-help-customer-service-agent)
    - [知識庫](#knowledge-base)
    - [實時代理轉接](#live-agent-transfer)
  - [案例管理](#case-management)
- [技術深入探討](#technical-deep-dive)
  - [定義 Flex 流程](#define-the-flex-flow)
  - [創建自定義頻道](#create-a-custom-channel)
  - [創建 HTTP 服務器以支持更複雜的路由](#create-an-http-server-to-support-more-complex-routing)
    - [出站消息 Webhook](#outbound-messages-webhook)
    - [機器人集成](#bot-integration)
- [總結](#summary)

# Discord 客戶服務演示
如果您渴望直奔主題並查看最終產品，我們將首先展示最終的演示視頻：

<iframe width="85%" height="450px" src="https://www.youtube.com/embed/iUK4YkGYI6Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>


我們的目標是演示如何將 Discord 集成到現有客戶服務軟件（在本例中為 [Twilio Flex](https://flex.twilio.com/)）中，以增加品牌官方服務器的附加價值。請繼續閱讀，以更深入地了解我們的實施。

# Twilio Flex
Twilio 是一家成熟的通信公司，提供用於管理短信、電話、電子郵件、聊天消息等的 API。Flex 是 Twilio 的旗艦產品之一：一個可擴展的基於雲的聯絡中心，可將來自任何來源的消息和呼叫路由到虛擬和實時代理。我們選擇 Flex 作為聯絡中心集成的基礎，因為它已經對各種渠道（如 Facebook、短信和 WhatsApp）提供了出色的支持。

# SeaX
SeaX 是一個雲聯絡中心，與先進的 AI 功能深度集成，有助於提高生產力和客戶滿意度。SeaX 是 Seasalt.ai 的旗艦產品之一，已在 150 多個國家/地區的客戶中推出。SeaX 聯絡中心平台建立在 Twilio Flex 之上，並包含各種附加功能，使實時代理能夠更好地協助客戶。一些最有用的功能包括內部文本轉語音和語音轉文本、AI 驅動的知識庫和集成案例管理系統。有關 SeaX 平台所有功能的更多信息，請訪問 [SeaX 主頁](https://seax.seasalt.ai/?utm_source=blog/)。

# 演示服務器
現在我們將介紹如何設置我們的 Discord 服務器。為了演示目的，我們設想了一個場景，其中我們的服務器被用作 Pokémon Go! 等遊戲的社區。下表概述了我們 Discord 服務器中演示的一些功能。

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-features-2.png" alt="演示客戶服務 Discord 服務器的功能概述。"/>

*演示 Discord 服務器的功能概述。*
</center>

## 一對多幫助：官方頻道
服務器中的幾個頻道被設置為在官方管理員/開發人員和玩家之間提供直接流。
**公告頻道**只能由管理員和版主發布，可以包含來自 Twitter 帳戶、網站或其他官方來源的（手動或自動）帖子。

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-announcement-channel.jpg" alt="Discord 服務器上的公告頻道，其中包含來自官方 Twitter 帳戶的帖子。"/>

*演示 Discord 服務器上的 #announcements 頻道。*
</center>

**錯誤報告頻道**允許玩家討論錯誤和破壞遊戲的問題。管理員可以密切關注此頻道，以識別遊戲中應解決的任何問題。此外，用戶可以使用頻道內的 \`/bug\` 斜杠命令提交官方錯誤報告。

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-bug-report-channel.jpg" alt="Discord 服務器上的錯誤報告頻道，其中包含已提交的錯誤報告。"/>

*演示 Discord 服務器上的 #bug-report 頻道，其中包含已提交的錯誤報告。*
</center>

**功能請求頻道**允許玩家討論遊戲玩法更改、生活質量改進、內容添加等，他們希望在遊戲中看到這些更改。與錯誤請求頻道類似，他們的輸入可以被 Discord 版主看到，他們可以使用 \`/new_feature\` 斜杠命令提交官方請求。

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-feature-request-channel.jpg" alt="Discord 服務器上的功能請求頻道，其中包含用戶執行斜杠命令。"/>

*演示 Discord 服務器上的 #feature-request 頻道，其中包含用戶執行斜杠命令。*
</center>

## 一對一幫助：客戶服務代理

玩家可以使用 \`/helpme\` 斜杠命令觸發與代理的直接消息。客戶服務代理可以是自動化的（虛擬代理）或由實時代理操作。

對於我們的演示，我們設置了一個簡單的 FAQ 機器人，它查詢公司知識庫以向用戶提供相關的文章建議。用戶還可以請求實時代理，並將在同一聊天中轉接到 SeaX 上的實時代理。

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-customer-service-channel.jpg" alt="Discord 服務器上的客戶服務頻道，其中包含用戶觸發 DM。"/>

*演示 Discord 服務器上的 #feature-request 頻道，其中包含用戶觸發 DM。*
</center>

### 知識庫
當用戶向虛擬服務代理提交查詢時，代理可以將用戶轉介到知識庫中的相關文章。

### 實時代理轉接
一旦用戶與機器人進行直接消息，他們就可以請求實時代理。他們將立即收到通知，告知已為他們創建了一個案例，並且他們正在被轉接到實時代理。當實時代理加入聊天時，他們也會收到通知。

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-customer-service-dm.jpg" alt="與客戶服務的直接消息，其中包含知識庫文章建議、實時代理轉接和案例管理。"/>

*與客戶服務的直接消息，其中包含知識庫文章建議、實時代理轉接和案例管理。*
</center>

在後端，實時代理可以通過一個平台處理來自所有渠道（短信、Facebook、Discord、語音通話等）的來電和聊天消息。在這種情況下，後端平台是 SeaX。

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/flex-discord-channel.jpg" alt="SeaX 界面顯示實時代理與 Discord 用戶對話的視圖。"/>

*SeaX 界面顯示實時代理與 Discord 用戶對話的視圖。*
</center>

## 案例管理
我們想在此演示中強調的一個功能是案例管理。Seasalt.ai 的 Discord 解決方案與 SeaX 案例管理系統集成，以正確跟踪用戶的各種案例。當用戶與 Discord 機器人交互時（例如請求實時代理或報告錯誤），我們可以自動打開一個新案例並記錄有關用戶和他們遇到的問題的所有重要信息。這使得實時代理可以輕鬆訪問所有報告的問題，並確保他們跟踪用戶直到案例解決。

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-new-case.png" alt="在 SeaX 案例管理系統中創建新案例。"/>

*在 SeaX 案例管理系統中創建新案例。*

<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-existing-case.png" alt="在 SeaX 案例管理系統中查看現有案例。"/>

*在 SeaX 案例管理系統中查看現有案例。*

</center>

# 技術深入探討

現在我們已經看到了最終產品以及服務器成員和協助他們的實時代理可用的所有功能。但是整個事情是如何實際實現的呢？在我們上一篇博客文章“[如何為您的品牌創建 Discord 社區和機器人](https://seasalt.ai/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/)”中，我們介紹了如何為您的品牌創建 Discord 服務器以及如何集成 Discord 機器人來管理它。為了支持這個更高級的演示，我們還使用了 [SeaChat，Seasalt.ai 的對話式 AI 引擎](https://chat.seasalt.ai)，來構建一個簡單的聊天機器人，允許我們的 Discord 機器人處理用戶的自然語言查詢。

在 SeaX 方面，我們的團隊與 Twilio 密切合作，創建了一個基於 Twilio Flex 的功能豐富的聯絡中心解決方案。有關 Twilio Flex 以及設置過程如何工作的更多信息，您可以閱讀 [Twilio Flex 快速入門指南](https://www.twilio.com/docs/flex/quickstart)。

準備好 Discord 服務器、Discord 機器人、聊天機器人並確保我們有一個正常運行的 SeaX 實例後，最大的挑戰是如何正確地將消息路由到用戶、機器人以及 SeaX 上的實時代理之間。Twilio 在處理消息路由方面非常出色，因此我們的目標是處理 Discord 機器人服務器中的所有斜杠命令，然後將所有其他消息（例如發送給聊天機器人或實時代理的直接消息）轉發到 Twilio。

## 定義 Flex 流程
第一步是確保我們發送到 Twilio 的任何消息都將路由到正確的位置。我們設置了一個簡單的 Twilio 流程，它首先檢查用戶是否請求了實時代理，如果是，則將以下消息轉發到 SeaX。如果用戶沒有請求實時代理，則我們將消息轉發到聊天機器人以獲取響應。有關如何設置流程的更多信息，請參閱 [Twilio Studio Flow 文檔](https://www.twilio.com/docs/studio)。

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-flow.png" alt="一個簡單的 Flex Studio 流程，將傳入消息路由到聊天機器人或 SeaX。"/>

*一個簡單的 Flex Studio 流程，將傳入消息路由到聊天機器人或 SeaX。*
</center>

## 創建自定義頻道
所以現在我們已經了解了傳入消息將如何路由。然而，Discord 並不是 Twilio 原生支持的頻道。幸運的是，Twilio 有一個詳細的教程，介紹如何 [將自定義聊天頻道添加到 Twilio Flex](https://www.twilio.com/blog/add-custom-chat-channel-twilio-flex)。在按照指南在 Twilio 上設置新的自定義頻道後，我們實際上需要將消息從 Discord 轉發到 Twilio。

首先我們設置 Twilio 客戶端：

\`\`\`python
from twilio.rest import Client
twilio_client = Client(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)
\`\`\`

現在，一旦我們收到來自 Discord 的傳入消息，我們就可以通過 Twilio 客戶端將該消息轉發到 Twilio。首先，我們應該檢查用戶是否已存在於 Twilio 系統中，以及他們是否已有一個開放的聊天頻道。

\`\`\`python
# 調用 get_user 方法檢查用戶是否存在，如果不存在則創建一個新用戶
user = await get_user(user_id, twilio_client, TWILIO_SERVICE_SID)

# 獲取用戶所在的頻道
user_channels = twilio_client.chat \\
        .services(TWILIO_SERVICE_SID) \\
        .users(user_id) \\
        .user_channels \\
        .list()
\`\`\`

如果用戶有一個現有的開放聊天頻道，我們需要使用它，以便我們可以訪問聊天歷史記錄。如果沒有現有的聊天頻道，我們為用戶創建一個新的：

\`\`\`python
if user_channels:
    channel_sid = user_channels[-1].channel_sid
else:
    channel = twilio_client.flex_api \\
            .channel \\
            .create(
                flex_flow_sid=FLEX_FLOW_ID,
                chat_user_friendly_name=username,
                chat_friendly_name=chat_name,  # -> 聊天頻道的友好名稱
                target=conversation_id,  # -> 唯一標識聊天用戶的身份
                identity=conversation_id,  # -> 用戶，例如/ Discord DM ID
        )
    channel_sid = channel.sid
\`\`\`

最後，一旦我們在 Discord 用戶和 Twilio 之間建立了一個開放的聊天頻道，我們就可以將傳入消息轉發到 Twilio Studio 流程。

\`\`\`python
message = twilio_client.chat \\
        .services(TWILIO_SERVICE_SID) \\
        .channels(channel_sid) \\
        .messages \\
        .create(
            body=message_text,
            from_=user_id,
            x_twilio_webhook_enabled='true',
            attributes=json.dumps(message_json)  # 將頭部作為屬性發送，以便以後可以訪問
        )
\`\`\`
現在我們能夠將來自 Discord 用戶的傳入消息直接轉發到我們的 Twilio Flex 流程。在 Discord 機器人端，請確保所有直接消息都轉發到 Twilio。現在您可以嘗試向 Discord 機器人發送直接消息，您應該會在 Twilio Studio 流程日誌中看到它出現 - 不過我們還沒有完成！

## 創建 HTTP 服務器以支持更複雜的路由

### 出站消息 Webhook
所以現在我們已經了解了傳入消息將如何路由。然而，我們仍然缺少一些部分。首先，我們知道現在可以將消息發送到 Twilio，但是我們如何回复 Discord 上的用戶呢？我們的 Discord 機器人是唯一被授權向我們的 Discord 服務器和用戶發送消息的，而且 Twilio 也不知道如何將我們的消息返回到 Discord 服務器。解決方案是，我們需要設置一個出站消息 Webhook，每當 Twilio 聊天頻道中有新消息時，它就會被觸發。在該 Webhook 中，我們就可以使用我們的 Discord 機器人將消息轉發回我們的服務器。

為此，我們將 Discord 機器人集成到一個更強大的 HTTP 服務器中。我們使用 [FastAPI](https://fastapi.tiangolo.com/) 設置了一個簡單的 POST 端點，它將作為我們的出站消息 Webhook。一旦我們設置好服務器並讓我們的 Discord 機器人與其一起運行，我們就可以定義 POST 端點。

此端點將接收添加到聊天頻道中的每條消息，因此我們首先要過濾掉除 SeaX 的出站消息之外的所有內容。接下來，我們需要從消息正文中獲取正確的頻道 ID，以便我們知道將消息轉發到哪裡。最後，我們可以使用 Discord 客戶端將消息轉發到 Discord 頻道。

\`\`\`python
@app.post("/forward-to-discord", status_code=200)
async def forward_discord_message(request: Request, response: Response) -> None:
    raw_body = await request.body()
    body = urllib.parse.parse_qs(raw_body.decode())

    # 只關注來自 SDK 的消息（Flex，所有其他消息將來自 API）
    if not body.get('Source') == ['SDK']:
        return

    # 來自 Flex 的消息不包含原始消息的 conversationId
    # 我們需要 convId 將消息發送回 GBM 上的對話
    # 獲取上一條消息並提取 conversationId
    message = twilio_client.chat \\
            .services(TWILIO_SERVICE_SID) \\
            .channels(body.get("ChannelSid")[0]) \\
            .messages.list(limit=1)[0]

    attributes = json.loads(message.attributes)

    channel = discord_client.get_channel(attributes.get(“channel”, {}).get(“id”))
    if channel:
        await channel.send(body.get("Body", [""])[0].get(“text”))
    else:
        logger.error(f"未找到 ID 為 {get_channel_id(req)} 的 Discord 頻道！")
        response.status_code = 400
\`\`\`

最後，為了將消息發送到我們的端點，我們需要讓 Twilio 知道我們的新 Webhook 是什麼。每個聊天頻道都需要配置自己的 Webhook。因此，如果我們回到最初為用戶創建新聊天頻道的地方，我們可以添加一些額外的代碼來配置 Webhook：

\`\`\`python
webhook = twilio_client.chat \\
        .services(TWILIO_SERVICE_SID) \\
        .channels(channel_sid) \\
        .webhooks \\
        .create(
            type='webhook',   
configuration_url=f"{SERVER_HOST}/forward-to-discord",
            configuration_method="POST",
            configuration_filters=["onMessageSent", "onMessageUpdated", "onMediaMessageSent"]
        )
\`\`\`

### 機器人集成

所以現在來自 SeaX 的出站消息應該正確地路由回我們的 Discord 服務器。但是我們仍然沒有處理發送給聊天機器人的消息。我們需要設置最後一個端點，它將從 Twilio Studio 流程觸發，並接收用戶消息，查詢機器人，並將響應返回給 Discord。

\`\`\`python
@app.post("/chatbot-to-discord", status_code=200)
async def receive_discord_message(request: Request, response: Response):
    """接收來自 Twilio 的 POST 請求，查詢機器人，並將響應返回給 Discord。"""
    req = await request.body()
    # 將原始消息正文與 twilio 內容分離
    twilio_body, original_message_body = separate_original_message_body(req.decode())

    bot_response = await query_bot(original_message_body, bot_info)

    if bot_response:
        channel = discord_client.get_channel(original_message_body.get(“channel_id”))
        if channel:
            for item in bot_response:
                await channel.send(item.get(“text”))
\`\`\`

確保 Twilio Studio 流程具有正確的 Webhook 以將消息路由到機器人。現在我們已經完成了消息路由！我們可以在此圖中看到所有消息路由的頂層視圖：

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-routing-diagram.jpg" alt="消息路由圖。"/>

*消息路由圖。*
</center>

# 總結
總而言之，在本博客系列中，我們討論了 Discord 的日益普及以及它作為品牌與客戶互動的新平台所帶來的機會。我們介紹了 Discord 的一些基本功能，以展示品牌如何建立自己的在線社區，以及更高級的功能，這些功能允許品牌使用 Discord 機器人自動化其服務器上的審核和客戶支持。最後，我們分享了我們如何將 Discord 與我們的客戶服務平台 SeaX 集成，從而為 Discord 社區帶來高級功能，例如實時代理轉接、案例管理和 AI 驅動的知識庫搜索。
如需個人演示，或了解 Seasalt.ai 如何幫助滿足您的特定業務需求，請填寫我們的“[預訂演示](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting)”表格。有關 Flex/Discord 集成的更多信息或聯繫我們，請訪問 [Seasalt.ai 的 Twilio 合作夥伴列表](https://showcase.twilio.com/partner-listing/a8E8Z000000PDCQUA4)。`;export{n as default};

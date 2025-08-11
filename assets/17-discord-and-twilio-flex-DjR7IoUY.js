const n=`---
title: "Discord (3/3): Discord 和 Twilio Flex: 将 Flex 联络中心带入未知领域"
metatitle: "Discord (3/3): Discord 中的 Twilio Flex 联络中心"
date: 2022-06-07 12:32:24-07:00
modified_date: 2025-07-28T16:56:53Z
draft: false
author: Kim Dodds
description: "在这篇博客中，我们将演示 Seasalt.ai 如何将一个功能齐全的联络中心集成到 Discord 服务器中。"
tags:
  - SeaX
  - Discord
image: /images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/flex-discord-thumbnail.png
canonicalURL: /blog/discord-and-twilio
url: /blog/discord-and-twilio/
---

*这是我们关于 Discord 上客户参与的三部分系列文章的最后一篇。我们的第一篇博客文章[“客户参与的新前沿”](https://seasalt.ai/blog/15-discord-a-new-frontier-for-customer-engagement/)讨论了 Discord 的日益普及，以及它为品牌创建和参与自己的在线社区提供了新机会。在第二部分[“如何为您的品牌创建 Discord 社区和机器人”](https://seasalt.ai/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/)中，我们介绍了如何为您的品牌创建 Discord 服务器，以及如何集成机器人来管理服务器审核、公告、用户反馈等。最后，在这篇博客中，我们将演示 Seasalt.ai 如何将一个功能齐全的联络中心集成到 Discord 服务器中，从而使品牌能够处理平台上客户服务的所有方面。*

## 目录
- [目录](#table-of-contents)
- [Discord 客户服务演示](#discord-customer-service-demo)
- [Twilio Flex](#twilio-flex)
- [SeaX](#seax)
- [演示服务器](#demo-server)
  - [一对多帮助：官方频道](#1-to-many-help-official-channels)
  - [一对一帮助：客户服务代理](#1-to-1-help-customer-service-agent)
    - [知识库](#knowledge-base)
    - [实时代理转接](#live-agent-transfer)
  - [案例管理](#case-management)
- [技术深入探讨](#technical-deep-dive)
  - [定义 Flex 流程](#define-the-flex-flow)
  - [创建自定义频道](#create-a-custom-channel)
  - [创建 HTTP 服务器以支持更复杂的路由](#create-an-http-server-to-support-more-complex-routing)
    - [出站消息 Webhook](#outbound-messages-webhook)
    - [机器人集成](#bot-integration)
- [总结](#summary)

# Discord 客户服务演示
如果您渴望直奔主题并查看最终产品，我们将首先展示最终的演示视频：

<iframe width="85%" height="450px" src="https://www.youtube.com/embed/iUK4YkGYI6Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>


我们的目标是演示如何将 Discord 集成到现有客户服务软件（在本例中为 [Twilio Flex](https://flex.twilio.com/)）中，以增加品牌官方服务器的附加价值。请继续阅读，以更深入地了解我们的实施。

# Twilio Flex
Twilio 是一家成熟的通信公司，提供用于管理短信、电话、电子邮件、聊天消息等的 API。Flex 是 Twilio 的旗舰产品之一：一个可扩展的基于云的联络中心，可将来自任何来源的消息和呼叫路由到虚拟和实时代理。我们选择 Flex 作为联络中心集成的基础，因为它已经对各种渠道（如 Facebook、短信和 WhatsApp）提供了出色的支持。

# SeaX
SeaX 是一个云联络中心，与先进的 AI 功能深度集成，有助于提高生产力和客户满意度。SeaX 是 Seasalt.ai 的旗舰产品之一，已在 150 多个国家/地区的客户中推出。SeaX 联络中心平台建立在 Twilio Flex 之上，并包含各种附加功能，使实时代理能够更好地协助客户。一些最有用的功能包括内部文本转语音和语音转文本、AI 驱动的知识库和集成案例管理系统。有关 SeaX 平台所有功能的更多信息，请访问 [SeaX 主页](https://seax.seasalt.ai/?utm_source=blog/)。

# 演示服务器
现在我们将介绍如何设置我们的 Discord 服务器。为了演示目的，我们设想了一个场景，其中我们的服务器被用作 Pokémon Go! 等游戏的社区。下表概述了我们 Discord 服务器中演示的一些功能。

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-features-2.png" alt="演示客户服务 Discord 服务器的功能概述。"/>

*演示 Discord 服务器的功能概述。*
</center>

## 一对多帮助：官方频道
服务器中的几个频道被设置为在官方管理员/开发人员和玩家之间提供直接流。
**公告频道**只能由管理员和版主发布，可以包含来自 Twitter 帐户、网站或其他官方来源的（手动或自动）帖子。

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-announcement-channel.jpg" alt="Discord 服务器上的公告频道，其中包含来自官方 Twitter 帐户的帖子。"/>

*演示 Discord 服务器上的 #announcements 频道。*
</center>

**错误报告频道**允许玩家讨论错误和破坏游戏的问题。管理员可以密切关注此频道，以识别游戏中应解决的任何问题。此外，用户可以使用频道内的 \`/bug\` 斜杠命令提交官方错误报告。

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-bug-report-channel.jpg" alt="Discord 服务器上的错误报告频道，其中包含已提交的错误报告。"/>

*演示 Discord 服务器上的 #bug-report 频道，其中包含已提交的错误报告。*
</center>

**功能请求频道**允许玩家讨论游戏玩法更改、生活质量改进、内容添加等，他们希望在游戏中看到这些更改。与错误请求频道类似，他们的输入可以被 Discord 版主看到，他们可以使用 \`/new_feature\` 斜杠命令提交官方请求。

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-feature-request-channel.jpg" alt="Discord 服务器上的功能请求频道，其中包含用户执行斜杠命令。"/>

*演示 Discord 服务器上的 #feature-request 频道，其中包含用户执行斜杠命令。*
</center>

## 一对一帮助：客户服务代理

玩家可以使用 \`/helpme\` 斜杠命令触发与代理的直接消息。客户服务代理可以是自动化的（虚拟代理）或由实时代理操作。

对于我们的演示，我们设置了一个简单的 FAQ 机器人，它查询公司知识库以向用户提供相关的文章建议。用户还可以请求实时代理，并将在同一聊天中转接到 SeaX 上的实时代理。

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-customer-service-channel.jpg" alt="Discord 服务器上的客户服务频道，其中包含用户触发 DM。"/>

*演示 Discord 服务器上的 #feature-request 频道，其中包含用户触发 DM。*
</center>

### 知识库
当用户向虚拟服务代理提交查询时，代理可以将用户转介到知识库中的相关文章。

### 实时代理转接
一旦用户与机器人进行直接消息，他们就可以请求实时代理。他们将立即收到通知，告知已为他们创建了一个案例，并且他们正在被转接到实时代理。当实时代理加入聊天时，他们也会收到通知。

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-customer-service-dm.jpg" alt="与客户服务的直接消息，其中包含知识库文章建议、实时代理转接和案例管理。"/>

*与客户服务的直接消息，其中包含知识库文章建议、实时代理转接和案例管理。*
</center>

在后端，实时代理可以通过一个平台处理来自所有渠道（短信、Facebook、Discord、语音通话等）的来电和聊天消息。在这种情况下，后端平台是 SeaX。

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/flex-discord-channel.jpg" alt="SeaX 界面显示实时代理与 Discord 用户对话的视图。"/>

*SeaX 界面显示实时代理与 Discord 用户对话的视图。*
</center>

## 案例管理
我们想在此演示中强调的一个功能是案例管理。Seasalt.ai 的 Discord 解决方案与 SeaX 案例管理系统集成，以正确跟踪用户的各种案例。当用户与 Discord 机器人交互时（例如请求实时代理或报告错误），我们可以自动打开一个新案例并记录有关用户和他们遇到的问题的所有重要信息。这使得实时代理可以轻松访问所有报告的问题，并确保他们跟踪用户直到案例解决。

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-new-case.png" alt="在 SeaX 案例管理系统中创建新案例。"/>

*在 SeaX 案例管理系统中创建新案例。*

<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-existing-case.png" alt="在 SeaX 案例管理系统中查看现有案例。"/>

*在 SeaX 案例管理系统中查看现有案例。*

</center>

# 技术深入探讨

现在我们已经看到了最终产品以及服务器成员和协助他们的实时代理可用的所有功能。但是整个事情是如何实际实现的呢？在我们上一篇博客文章“[如何为您的品牌创建 Discord 社区和机器人](https://seasalt.ai/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/)”中，我们介绍了如何为您的品牌创建 Discord 服务器以及如何集成 Discord 机器人来管理它。为了支持这个更高级的演示，我们还使用了 [SeaChat，Seasalt.ai 的对话式 AI 引擎](https://chat.seasalt.ai)，来构建一个简单的聊天机器人，允许我们的 Discord 机器人处理用户的自然语言查询。

在 SeaX 方面，我们的团队与 Twilio 密切合作，创建了一个基于 Twilio Flex 的功能丰富的联络中心解决方案。有关 Twilio Flex 以及设置过程如何工作的更多信息，您可以阅读 [Twilio Flex 快速入门指南](https://www.twilio.com/docs/flex/quickstart)。

准备好 Discord 服务器、Discord 机器人和聊天机器人并确保我们有一个正常运行的 SeaX 实例后，最大的挑战是如何正确地将消息路由到用户、机器人和 SeaX 上的实时代理之间。Twilio 在处理消息路由方面非常出色，因此我们的目标是处理 Discord 机器人服务器中的所有斜杠命令，然后将所有其他消息（例如发送给聊天机器人或实时代理的直接消息）转发到 Twilio。

## 定义 Flex 流程
第一步是确保我们发送到 Twilio 的任何消息都将路由到正确的位置。我们设置了一个简单的 Twilio 流程，它首先检查用户是否请求了实时代理，如果是，则将以下消息转发到 SeaX。如果用户没有请求实时代理，则我们将消息转发到聊天机器人以获取响应。有关如何设置流程的更多信息，请参阅 [Twilio Studio Flow 文档](https://www.twilio.com/docs/studio)。

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-flow.png" alt="一个简单的 Flex Studio 流程，将传入消息路由到聊天机器人或 SeaX。"/>

*一个简单的 Flex Studio 流程，将传入消息路由到聊天机器人或 SeaX。*
</center>

## 创建自定义频道
所以现在我们已经了解了传入消息将如何路由。然而，Discord 并不是 Twilio 原生支持的频道。幸运的是，Twilio 有一个详细的教程，介绍如何 [将自定义聊天频道添加到 Twilio Flex](https://www.twilio.com/blog/add-custom-chat-channel-twilio-flex)。在按照指南在 Twilio 上设置新的自定义频道后，我们实际上需要将消息从 Discord 转发到 Twilio。

首先我们设置 Twilio 客户端：

\`\`\`python
from twilio.rest import Client
twilio_client = Client(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)
\`\`\`

现在，一旦我们收到来自 Discord 的传入消息，我们就可以通过 Twilio 客户端将该消息转发到 Twilio。首先，我们应该检查用户是否已存在于 Twilio 系统中，以及他们是否已有一个开放的聊天频道。

\`\`\`python
# 调用 get_user 方法检查用户是否存在，如果不存在则创建一个新用户
user = await get_user(user_id, twilio_client, TWILIO_SERVICE_SID)

# 获取用户所在的频道
user_channels = twilio_client.chat \\
        .services(TWILIO_SERVICE_SID) \\
        .users(user_id) \\
        .user_channels \\
        .list()
\`\`\`

如果用户有一个现有的开放聊天频道，我们需要使用它，以便我们可以访问聊天历史记录。如果没有现有的聊天频道，我们为用户创建一个新的：

\`\`\`python
if user_channels:
    channel_sid = user_channels[-1].channel_sid
else:
    channel = twilio_client.flex_api \\
            .channel \\
            .create(
                flex_flow_sid=FLEX_FLOW_ID,
                chat_user_friendly_name=username,
                chat_friendly_name=chat_name,  # -> 聊天频道的友好名称
                target=conversation_id,  # -> 唯一标识聊天用户的身份
                identity=conversation_id,  # -> 用户，例如/ Discord DM ID
        )
    channel_sid = channel.sid
\`\`\`

最后，一旦我们在 Discord 用户和 Twilio 之间建立了一个开放的聊天频道，我们就可以将传入消息转发到 Twilio Studio 流程。

\`\`\`python
message = twilio_client.chat \\
        .services(TWILIO_SERVICE_SID) \\
        .channels(channel_sid) \\
        .messages \\
        .create(
            body=message_text,
            from_=user_id,
            x_twilio_webhook_enabled='true',
            attributes=json.dumps(message_json)  # 将头部作为属性发送，以便以后可以访问
        )
\`\`\`
现在我们能够将来自 Discord 用户的传入消息直接转发到我们的 Twilio Flex 流程。在 Discord 机器人端，请确保所有直接消息都转发到 Twilio。现在您可以尝试向 Discord 机器人发送直接消息，您应该会在 Twilio Studio 流程日志中看到它出现 - 不过我们还没有完成！

## 创建 HTTP 服务器以支持更复杂的路由

### 出站消息 Webhook
所以现在我们已经了解了传入消息将如何路由。然而，我们仍然缺少一些部分。首先，我们知道现在可以将消息发送到 Twilio，但是我们如何回复 Discord 上的用户呢？我们的 Discord 机器人是唯一被授权向我们的 Discord 服务器和用户发送消息的，而且 Twilio 也不知道如何将我们的消息返回到 Discord 服务器。解决方案是，我们需要设置一个出站消息 Webhook，每当 Twilio 聊天频道中有新消息时，它就会被触发。在该 Webhook 中，我们就可以使用我们的 Discord 机器人将消息转发回我们的服务器。

为此，我们将 Discord 机器人集成到一个更强大的 HTTP 服务器中。我们使用 [FastAPI](https://fastapi.tiangolo.com/) 设置了一个简单的 POST 端点，它将作为我们的出站消息 Webhook。一旦我们设置好服务器并让我们的 Discord 机器人与其一起运行，我们就可以定义 POST 端点。

此端点将接收添加到聊天频道中的每条消息，因此我们首先要过滤掉除 SeaX 的出站消息之外的所有内容。接下来，我们需要从消息正文中获取正确的频道 ID，以便我们知道将消息转发到哪里。最后，我们可以使用 Discord 客户端将消息转发到 Discord 频道。

\`\`\`python
@app.post("/forward-to-discord", status_code=200)
async def forward_discord_message(request: Request, response: Response) -> None:
    raw_body = await request.body()
    body = urllib.parse.parse_qs(raw_body.decode())

    # 只关注来自 SDK 的消息（Flex，所有其他消息将来自 API）
    if not body.get('Source') == ['SDK']:
        return

    # 来自 Flex 的消息不包含原始消息的 conversationId
    # 我们需要 convId 将消息发送回 GBM 上的对话
    # 获取上一条消息并提取 conversationId
    message = twilio_client.chat \\
            .services(TWILIO_SERVICE_SID) \\
            .channels(body.get("ChannelSid")[0]) \\
            .messages.list(limit=1)[0]

    attributes = json.loads(message.attributes)

    channel = discord_client.get_channel(attributes.get(“channel”, {}).get(“id”))
    if channel:
        await channel.send(body.get("Body", [""])[0].get(“text”))
    else:
        logger.error(f"未找到 ID 为 {get_channel_id(req)} 的 Discord 频道！")
        response.status_code = 400
\`\`\`

最后，为了将消息发送到我们的端点，我们需要让 Twilio 知道我们的新 Webhook 是什么。每个聊天频道都需要配置自己的 Webhook。因此，如果我们回到最初为用户创建新聊天频道的地方，我们可以添加一些额外的代码来配置 Webhook：

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

### 机器人集成

所以现在来自 SeaX 的出站消息应该正确地路由回我们的 Discord 服务器。但是我们仍然没有处理发送给聊天机器人的消息。我们需要设置最后一个端点，它将从 Twilio Studio 流程触发，并接收用户消息，查询机器人，并将响应返回给 Discord。

\`\`\`python
@app.post("/chatbot-to-discord", status_code=200)
async def receive_discord_message(request: Request, response: Response):
    """接收来自 Twilio 的 POST 请求，查询机器人，并将响应返回给 Discord。"""
    req = await request.body()
    # 将原始消息正文与 twilio 内容分离
    twilio_body, original_message_body = separate_original_message_body(req.decode())

    bot_response = await query_bot(original_message_body, bot_info)

    if bot_response:
        channel = discord_client.get_channel(original_message_body.get(“channel_id”))
        if channel:
            for item in bot_response:
                await channel.send(item.get(“text”))
\`\`\`

确保 Twilio Studio 流程具有正确的 Webhook 以将消息路由到机器人。现在我们已经完成了消息路由！我们可以在此图中看到所有消息路由的顶层视图：

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-routing-diagram.jpg" alt="消息路由图。"/>

*消息路由图。*
</center>

# 总结
总而言之，在本博客系列中，我们讨论了 Discord 的日益普及以及它作为品牌与客户互动的新平台所带来的机会。我们介绍了 Discord 的一些基本功能，以展示品牌如何建立自己的在线社区，以及更高级的功能，这些功能允许品牌使用 Discord 机器人自动化其服务器上的审核和客户支持。最后，我们分享了我们如何将 Discord 与我们的客户服务平台 SeaX 集成，从而为 Discord 社区带来高级功能，例如实时代理转接、案例管理和 AI 驱动的知识库搜索。
如需个人演示，或了解 Seasalt.ai 如何帮助满足您的特定业务需求，请填写我们的“[预订演示](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting)”表格。有关 Flex/Discord 集成的更多信息或联系我们，请访问 [Seasalt.ai 的 Twilio 合作伙伴列表](https://showcase.twilio.com/partner-listing/a8E8Z000000PDCQUA4)。`;export{n as default};

const e=`---
title: "Discord (3/3): Discord and Twilio Flex: Bringing Flex Contact Center into Uncharted Territory"
metatitle: "Discord (3/3): Twilio Flex Contact Center in Discord"
date: 2022-06-07 12:32:24-07:00
modified_date: 2025-01-27T10:30:00Z
draft: false
author: Kim Dodds
description: "In this blog, we demonstrate how Seasalt.ai integrates a full-featured contact center into a Discord server."
tags:
  - SeaX
  - Discord
image: /images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/flex-discord-thumbnail.png
canonicalURL: /blog/discord-and-twilio
url: /blog/discord-and-twilio/
---

*This is the final article in our three-part series on customer engagement on Discord. Our first blog post ["A New Frontier for Customer Engagement"](https://seasalt.ai/blog/15-discord-a-new-frontier-for-customer-engagement/) discussed Discord's growing popularity and the new opportunities it provides for brands to create and engage with their own online communities. In the second part ["How to Create a Discord Community and Bot for Your Brand"](https://seasalt.ai/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/), we introduced how to create a Discord server for your brand and how to integrate bots to manage server moderation, announcements, user feedback, and more. Finally, in this blog, we demonstrate how Seasalt.ai integrates a full-featured contact center into a Discord server, enabling brands to handle all aspects of customer service on the platform.*

## Table of Contents
- [Table of Contents](#table-of-contents)
- [Discord Customer Service Demo](#discord-customer-service-demo)
- [Twilio Flex](#twilio-flex)
- [SeaX](#seax)
- [Demo Server](#demo-server)
  - [1-to-many Help: Official Channels](#1-to-many-help-official-channels)
  - [1-to-1 Help: Customer Service Agent](#1-to-1-help-customer-service-agent)
    - [Knowledge Base](#knowledge-base)
    - [Live Agent Transfer](#live-agent-transfer)
  - [Case Management](#case-management)
- [Technical Deep Dive](#technical-deep-dive)
  - [Define the Flex Flow](#define-the-flex-flow)
  - [Create a Custom Channel](#create-a-custom-channel)
  - [Create an HTTP Server to Support More Complex Routing](#create-an-http-server-to-support-more-complex-routing)
    - [Outbound Messages Webhook](#outbound-messages-webhook)
    - [Bot Integration](#bot-integration)
- [Summary](#summary)

# Discord Customer Service Demo
If you're eager to get straight to the point and see the final product, we'll first show the final demo video:

<iframe width="85%" height="450px" src="https://www.youtube.com/embed/iUK4YkGYI6Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

Our goal is to demonstrate how Discord can be integrated into existing customer service software (in this case [Twilio Flex](https://flex.twilio.com/)) to add additional value to official brand servers. Read on for a deeper understanding of our implementation.

# Twilio Flex
Twilio is a mature communications company that provides APIs for managing SMS, phone calls, emails, chat messages, and more. Flex is one of Twilio's flagship products: a scalable cloud-based contact center that can route messages and calls from any source to virtual and live agents. We chose Flex as the foundation for our contact center integration because it already provides excellent support for various channels such as Facebook, SMS, and WhatsApp.

# SeaX
SeaX is a cloud contact center deeply integrated with advanced AI capabilities to help improve productivity and customer satisfaction. SeaX is one of Seasalt.ai's flagship products and has been launched with customers in over 150 countries. The SeaX contact center platform is built on Twilio Flex and includes various additional features that help live agents better assist customers. Some of the most useful features include internal text-to-speech and speech-to-text, AI-powered knowledge base, and integrated case management system. For more information on all SeaX platform features, please visit the [SeaX homepage](https://seax.seasalt.ai/?utm_source=blog/).

# Demo Server
Now we'll introduce how we set up our Discord server. For demo purposes, we imagined a scenario where our server is used as a community for a game like Pokémon Go! The table below shows an overview of some features we demonstrate in our demo Discord server.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-features-2.png" alt="Overview of demo customer service Discord server features."/>

*Overview of demo Discord server features.*
</center>

## 1-to-many Help: Official Channels
Several channels in the server are set up to provide direct streams between official administrators/developers and players.
**Announcement channel** can only be posted by administrators and moderators, and can contain (manual or automatic) posts from Twitter accounts, websites, or other official sources.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-announcement-channel.jpg" alt="Announcement channel on Discord server containing posts from official Twitter account."/>

*Demo #announcements channel on Discord server.*
</center>

**Bug report channel** allows players to discuss bugs and game-breaking issues. Administrators can closely monitor this channel to identify any issues in the game that should be addressed. Additionally, users can use the \`/bug\` slash command within the channel to submit official bug reports.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-bug-report-channel.jpg" alt="Bug report channel on Discord server containing submitted bug reports."/>

*Demo #bug-report channel on Discord server containing submitted bug reports.*
</center>

**Feature request channel** allows players to discuss gameplay changes, quality-of-life improvements, content additions, and more that they'd like to see in the game. Similar to the bug request channel, their input can be seen by Discord moderators who can use the \`/new_feature\` slash command to submit official requests.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-feature-request-channel.jpg" alt="Feature request channel on Discord server containing user executing slash command."/>

*Demo #feature-request channel on Discord server containing user executing slash command.*
</center>

## 1-to-1 Help: Customer Service Agent

Players can use the \`/helpme\` slash command to trigger a direct message with an agent. The customer service agent can be automated (virtual agent) or operated by a live agent.

For our demo, we set up a simple FAQ bot that queries the company knowledge base to provide users with relevant article suggestions. Users can also request a live agent and will be transferred to a live agent on SeaX in the same chat session.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-customer-service-channel.jpg" alt="Customer service channel on Discord server containing user triggering DM."/>

*Demo #feature-request channel on Discord server containing user triggering DM.*
</center>

### Knowledge Base
When a user submits a query to the virtual service agent, the agent can refer the user to relevant articles in the knowledge base.

### Live Agent Transfer
Once a user starts a direct message with the bot, they can request a live agent. They'll immediately receive a notification that a case has been created for them and that they're being transferred to a live agent. When the live agent joins the chat, they'll also receive a notification.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-customer-service-dm.jpg" alt="Direct messages with customer service containing knowledge base article suggestions, live agent transfer, and case management."/>

*Direct messages with customer service containing knowledge base article suggestions, live agent transfer, and case management.*
</center>

In the backend, live agents can handle calls and chat messages from all channels (SMS, Facebook, Discord, voice calls, etc.) through a single platform. In this case, the backend platform is SeaX.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/flex-discord-channel.jpg" alt="SeaX interface showing live agent view of conversation with Discord user."/>

*SeaX interface showing live agent view of conversation with Discord user.*
</center>

## Case Management
One feature we want to highlight in this demo is case management. Seasalt.ai's Discord solution is integrated with the SeaX case management system to properly track users' various cases. When a user interacts with the Discord bot (such as requesting a live agent or reporting a bug), we can automatically open a new case and record all important information about the user and the issue they're experiencing. This makes it easy for live agents to access all reported issues and ensures they track the user until the case is resolved.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-new-case.png" alt="Creating new case in SeaX case management system."/>

*Creating new case in SeaX case management system.*

<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-existing-case.png" alt="Viewing existing case in SeaX case management system."/>

*Viewing existing case in SeaX case management system.*

</center>

# Technical Deep Dive

Now we've seen the final product and all the features available to server members and the live agents helping them. But how is everything actually implemented? In our previous blog post ["How to Create a Discord Community and Bot for Your Brand"](https://seasalt.ai/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/), we introduced how to create a Discord server for your brand and how to integrate Discord bots to manage it. To support this more advanced demo, we also used [SeaChat, Seasalt.ai's conversational AI engine](https://chat.seasalt.ai), to build a simple chatbot that allows our Discord bot to handle users' natural language queries.

On the SeaX side, our team worked closely with Twilio to create a feature-rich contact center solution built on Twilio Flex. For more information on Twilio Flex and how the setup process works, you can read the [Twilio Flex Quickstart Guide](https://www.twilio.com/docs/flex/quickstart).

After setting up the Discord server, Discord bot, chatbot, and ensuring we have a working SeaX instance, the biggest challenge was how to properly route messages between users, bots, and live agents on SeaX. Twilio is excellent at handling message routing, so our goal was to handle all slash commands in the Discord bot server, then forward all other messages (such as direct messages sent to the chatbot or live agent) to Twilio.

## Define the Flex Flow
The first step is to ensure that any messages we send to Twilio will be routed to the correct place. We set up a simple Twilio flow that first checks if a user has requested a live agent, and if so, forwards the following messages to SeaX. If the user hasn't requested a live agent, we forward the message to the chatbot for a response. For more information on setting up the flow, see the [Twilio Studio Flow documentation](https://www.twilio.com/docs/studio).

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-flow.png" alt="Simple Flex Studio flow that routes incoming messages to chatbot or SeaX."/>

*Simple Flex Studio flow that routes incoming messages to chatbot or SeaX.*
</center>

## Create a Custom Channel
So now we understand how incoming messages will be routed. However, Discord is not a natively supported channel by Twilio. Fortunately, Twilio has a detailed tutorial on how to [add a custom chat channel to Twilio Flex](https://www.twilio.com/blog/add-custom-chat-channel-twilio-flex). After following the guide to set up the new custom channel on Twilio, we actually need to forward messages from Discord to Twilio.

First we set up the Twilio client:

\`\`\`python
from twilio.rest import Client
twilio_client = Client(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)
\`\`\`

Now, once we receive an incoming message from Discord, we can forward that message to Twilio through the Twilio client. First, we should check if the user already exists in the Twilio system and if they already have an open chat channel.

\`\`\`python
# Call get_user method to check if user exists, create new user if not
user = await get_user(user_id, twilio_client, TWILIO_SERVICE_SID)

# Get user's channels
user_channels = twilio_client.chat \\
        .services(TWILIO_SERVICE_SID) \\
        .users(user_id) \\
        .user_channels \\
        .list()
\`\`\`

If the user has an existing open chat channel, we need to use it so we can access the chat history. If there's no existing chat channel, we create a new one for the user:

\`\`\`python
if user_channels:
    channel_sid = user_channels[-1].channel_sid
else:
    channel = twilio_client.flex_api \\
            .channel \\
            .create(
                flex_flow_sid=FLEX_FLOW_ID,
                chat_user_friendly_name=username,
                chat_friendly_name=chat_name,  # -> Friendly name for the chat channel
                target=conversation_id,  # -> Unique identifier for the chat user identity
                identity=conversation_id,  # -> User, e.g. / Discord DM ID
        )
    channel_sid = channel.sid
\`\`\`

Finally, once we have an open chat channel between the Discord user and Twilio, we can forward the incoming message to the Twilio Studio flow.

\`\`\`python
message = twilio_client.chat \\
        .services(TWILIO_SERVICE_SID) \\
        .channels(channel_sid) \\
        .messages \\
        .create(
            body=message_text,
            from_=user_id,
            x_twilio_webhook_enabled='true',
            attributes=json.dumps(message_json)  # Send headers as attributes so they can be accessed later
        )
\`\`\`
Now we can forward incoming messages from Discord users directly to our Twilio Flex flow. On the Discord bot side, make sure all direct messages are forwarded to Twilio. Now you can try sending a direct message to the Discord bot, and you should see it appear in the Twilio Studio flow logs - but we're not done yet!

## Create an HTTP Server to Support More Complex Routing

### Outbound Messages Webhook
So now we understand how incoming messages will be routed. However, we're still missing some parts. First, we know we can now send messages to Twilio, but how do we reply to users on Discord? Our Discord bot is the only thing authorized to send messages to our Discord server and users, and Twilio also doesn't know how to send our messages back to the Discord server. The solution is that we need to set up an outbound messages webhook that gets triggered whenever there's a new message in the Twilio chat channel. In that webhook, we can then use our Discord bot to forward the message back to our server.

For this, we'll integrate the Discord bot into a more powerful HTTP server. We used [FastAPI](https://fastapi.tiangolo.com/) to set up a simple POST endpoint that will serve as our outbound messages webhook. Once we set up the server and have our Discord bot running with it, we can define the POST endpoint.

This endpoint will receive every message added to the chat channel, so we first need to filter out everything except outbound messages from SeaX. Next, we need to get the correct channel ID from the message body so we know where to forward the message. Finally, we can use the Discord client to forward the message to the Discord channel.

\`\`\`python
@app.post("/forward-to-discord", status_code=200)
async def forward_discord_message(request: Request, response: Response) -> None:
    raw_body = await request.body()
    body = urllib.parse.parse_qs(raw_body.decode())

    # Only focus on messages from SDK (Flex, all other messages will come from API)
    if not body.get('Source') == ['SDK']:
        return

    # Messages from Flex don't contain the conversationId of the original message
    # We need convId to send the message back to the conversation on GBM
    # Get the previous message and extract conversationId
    message = twilio_client.chat \\
            .services(TWILIO_SERVICE_SID) \\
            .channels(body.get("ChannelSid")[0]) \\
            .messages.list(limit=1)[0]

    attributes = json.loads(message.attributes)

    channel = discord_client.get_channel(attributes.get("channel", {}).get("id"))
    if channel:
        await channel.send(body.get("Body", [""])[0].get("text"))
    else:
        logger.error(f"Discord channel with ID {get_channel_id(req)} not found!")
        response.status_code = 400
\`\`\`

Finally, to send messages to our endpoint, we need to let Twilio know what our new webhook is. Each chat channel needs to configure its own webhook. So if we go back to where we originally created the new chat channel for the user, we can add some additional code to configure the webhook:

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

### Bot Integration

So now outbound messages from SeaX should be properly routed back to our Discord server. But we still haven't handled messages that go to the chatbot. We need to set up the final endpoint that will be triggered from the Twilio Studio flow and receive user messages, query the bot, and send the response back to Discord.

\`\`\`python
@app.post("/chatbot-to-discord", status_code=200)
async def receive_discord_message(request: Request, response: Response):
    """Receive POST request from Twilio, query bot, and send response back to Discord."""
    req = await request.body()
    # Separate original message body from twilio content
    twilio_body, original_message_body = separate_original_message_body(req.decode())

    bot_response = await query_bot(original_message_body, bot_info)

    if bot_response:
        channel = discord_client.get_channel(original_message_body.get("channel_id"))
        if channel:
            for item in bot_response:
                await channel.send(item.get("text"))
\`\`\`

Make sure the Twilio Studio flow has the correct webhook to route messages to the bot. Now we've completed the message routing! We can see the top-level view of all message routing in this diagram:

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-routing-diagram.jpg" alt="Message routing diagram."/>

*Message routing diagram.*
</center>

# Summary
In summary, in this blog series, we discussed Discord's growing popularity and the opportunities it brings as a new platform for brands to interact with customers. We introduced some basic Discord features to show how brands can build their own online communities, as well as more advanced features that allow brands to use Discord bots to automate moderation and customer support on their servers. Finally, we shared how we integrated Discord with our customer service platform SeaX, bringing advanced features to Discord communities such as live agent transfer, case management, and AI-powered knowledge base search.
For a personal demo, or to learn how Seasalt.ai can help you meet your specific business needs, please fill out our ["Book Demo"](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting) form. For more information on Flex/Discord integration or to contact us, visit [Seasalt.ai's Twilio Partner Listing](https://showcase.twilio.com/partner-listing/a8E8Z000000PDCQUA4).`;export{e as default};

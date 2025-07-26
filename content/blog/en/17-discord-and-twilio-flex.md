---
title: "Discord (3/3): Discord & Twilio Flex: Bringing Flex Contact Center into Uncharted Territory"
metatitle: "Discord (3/3): Twilio Flex Contact Center in Discord"
date: 2022-06-07T12:32:24-07:00
author: Kim Dodds
draft: false
image: /images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/flex-discord-thumbnail.png
description: "In this blog, we will demonstrate of how Seasalt.ai integrated a fully-fledged contact center into a Discord server."
weight: 1
tags: ["SeaX", "Discord"]
canonicalURL: "/blog/discord-and-twilio"
url: "/blog/discord-and-twilio/"
aliases:
  - /blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/
---

*This is our last post in a three-part series about customer engagement on Discord. Our first blog, [“A New Frontier for Customer Engagement”](https://seasalt.ai/blog/15-discord-a-new-frontier-for-customer-engagement/), discussed Discord’s rise in popularity, and the new opportunity it presents for brands to create and participate in their own online communities. In part two, [“How to Create a Discord Community and Bot for your Brand”](https://seasalt.ai/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/), we walked through how to create a discord server for your brand, and how to integrate a bot to manage server moderation, announcements, user feedback, etc. Finally, in this blog we will present a demonstration of how we at Seasalt.ai integrated a fully-fledged contact center into a Discord server, allowing brands to handle all aspects of customer care on the platform.*

## Table of Contents
- [Table of Contents](#table-of-contents)
- [Discord Customer Service Demo](#discord-customer-service-demo)
- [Twilio Flex](#twilio-flex)
- [SeaX](#seax)
- [Demo Server](#demo-server)
  - [1-to-Many Help: Official Channels](#1-to-many-help-official-channels)
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
If you’re eager to cut to the chase and see the final product, we’ll present the final demo video first:

<iframe width="85%" height="450px" src="https://www.youtube.com/embed/iUK4YkGYI6Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>


Our goal is to demonstrate how Discord can be integrated into existing customer service software (in this case, [Twilio Flex](https://flex.twilio.com/)) to add additional value to a brand’s official server. Keep reading for a closer look at our implementation.

# Twilio Flex
Twilio is a well-established communications company that offers APIs for managing text messages, phone calls, emails, chat messages, and more. Flex is one of Twilio’s flagship products: a scalable cloud-based contact center that routes messages and calls from any source to virtual and live agents. We chose Flex as the basis for our contact center integration because it already has excellent support for a wide variety of channels, such as Facebook, SMS, and WhatsApp. 

# SeaX
SeaX is a cloud contact center that is deeply integrated with advanced AI features that help boost productivity and customer satisfaction. SeaX is one of Seasalt.ai’s flagship products, and has already been rolled out to clients in over 150 countries. The SeaX contact center platform is built on top of Twilio Flex and includes a variety of additional features that empower live agents to better assist customers. Some of the most useful features are the in-house text-to-speech & speech-to-text, AI-powered knowledge base, and integrated case management system. For more information about all the capabilities of the SeaX platform, please visit the [SeaX homepage](https://seax.seasalt.ai/?utm_source=blog/).

# Demo Server
Now we will walk through how we set up our Discord server. For the purposes of the demo, we imagined a scenario where our server was used as a community for a game like Pokémon Go! The following table overviews some of the features demonstrated in our Discord server.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-features-2.png" alt="Feature overview of the demo customer service Discord server."/>

*Feature overview of the demo Discord server.*
</center>

## 1-to-Many Help: Official Channels
Several channels in the server are set up to provide a direct stream between official admins/developers and players.
The **announcement channel** can only be posted in by admins and mods, and can include (manual or automated) posts from the Twitter account, website, or other official sources.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-announcement-channel.jpg" alt="The accouncements channel on the Discord server, featuring a post from an official Twitter account."/>

*The #announcements channel on the demo Discord server.*
</center>

The **bug-report channel** allows players to discuss bugs and game-breaking issues. Admins can keep an eye on this channel to identify any issues in the game that should be targeted. Additionally, users can submit an official bug report using the `/bug` slash command from within the channel.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-bug-report-channel.jpg" alt="The bug report channel on the Discord server, featuring a submitted bug report."/>

*The #bug-report channel on the demo Discord server, featuring a submitted bug report.*
</center>

The **feature-request channel** allows players to discuss gameplay changes, quality of life improvements, content additions, etc. that they would like to see added to the game. Similar to the bug request channel, their input can be seen by the discord mods and they can use the `/new_feature` slash command to submit an official request.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-feature-request-channel.jpg" alt="The feature request channel on the Discord server, featuring a user performing a slash command."/>

*The #feature-request channel on the demo Discord server, featuring a user performing a slash command.*
</center>

## 1-to-1 Help: Customer Service Agent

Players can use the `/helpme` slash command to trigger a direct message with an agent. The Customer Service Agent can be either automated (virtual agent) or manned by a live agent.

For our demo, we set up a simple FAQ bot which queries the company knowledge base to provide relevant article suggestions to the user. The user can also request a live agent, and will be transferred in the same chat to a live agent on SeaX.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-customer-service-channel.jpg" alt="The customer service channel on the Discord server, featuring a user triggering a DM."/>

*The #feature-request channel on the demo Discord server, featuring a user triggering a DM.*
</center>

### Knowledge Base
When the user submits a query to the virtual service agent, the agent can refer the user to relevant articles in the knowledge base.

### Live Agent Transfer 
Once a user is in a direct message with the bot, they can request a live agent. They will immediately be notified that a case has been created for them, and that they are being transferred to a live agent. When the live agent joins the chat, they’ll also get a notification.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-customer-service-dm.jpg" alt="A direct message with customer service, featuring KB article suggestions, live agent transfer, and case management."/>

*A direct message with customer service, featuring KB article suggestions, live agent transfer, and case management.*
</center>

On the backend, the live agents can handle incoming calls and chat messages from all channels (SMS, Facebook, Discord, voice call, etc.) through a single platform. In this case, the backend platform is SeaX.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/flex-discord-channel.jpg" alt="The SeaX interface displaying the live agent's view of a conversation with a user on Discord."/>

*The SeaX interface displaying the live agent's view of a conversation with a user on Discord.*
</center>

## Case Management
One feature we wanted to emphasize in this demo is the case management. Seasalt.ai’s Discord solution integrates with the SeaX case management system to properly track various cases from users. When a user interacts with the Discord bot (such as requesting a live agent or reporting a bug), we can automatically open a new case and log all the important information about the user and the issue they’re experiencing. This allows the live agent to have easy access to all the reported issues, and make sure that they follow up with users until the case is resolved.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-new-case.png" alt="Creating a new case in the SeaX case management system."/>

*Creating a new case in the SeaX case management system.*

<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-existing-case.png" alt="Viewing an existing case in the SeaX case management system."/>

*Viewing an existing case in the SeaX case management system.*

</center>

# Technical Deep Dive

Now we’ve seen the final product and all the features available to the members of the server and the live agents that assist them. But how was the whole thing actually implemented? In our last blog post, “[How to Create a Discord Community and Bot for your Brand](https://seasalt.ai/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/)”, we walked through how to create the discord server for your brand and how to integrate a Discord bot to manage it. To support this more advanced demo, we also used [SeaChat, Seasalt.ai’s Conversational AI engine](https://chat.seasalt.ai), to build a simple chatbot that allows our Discord bot to handle natural language queries for users.

On the SeaX side, our team worked closely with Twilio to create a feature-packed contact center solution built on top of Twilio Flex. For more information about Twilio Flex and how the setup process works, you can read the [Twilio Flex Quickstart Guide](https://www.twilio.com/docs/flex/quickstart). 

After preparing the Discord server, Discord bot, and chatbot and making sure that we have a working instance of SeaX up and running, the biggest challenge is to properly route the messages to and from the user, the bot, and the live agents on SeaX. Twilio is fantastic at handling message routing, so our goal is to handle all of the slash commands from within our Discord bot server, and then forward all other messages (such as direct messages to the chatbot or live agent) to Twilio.

## Define the Flex Flow
The first step is to make sure that any messages we send to Twilio will be routed to the correct place. We set up a simple Twilio flow that first checks if the user requested a live agent, and if so forwards the following messages to SeaX. If the user did not request a live agent, then we forward the message to the chatbot to get a response. For more information about how to set up the flow, refer to the [Twilio Studio Flow documentation](https://www.twilio.com/docs/studio).

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-flow.png" alt="A simple Flex Studio Flow that routes incoming messages to a chatbot or to SeaX."/>

*A simple Flex Studio Flow that routes incoming messages to a chatbot or to SeaX.*
</center>

## Create a Custom Channel
So now we have an idea of how incoming messages will be routed. However, Discord is not a natively supported channel by Twilio. Thankfully, Twilio has a detailed tutorial on how to [Add a Custom Chat Channel to Twilio Flex](https://www.twilio.com/blog/add-custom-chat-channel-twilio-flex). After following the guide to set up the new custom channel on Twilio, we need to actually forward the messages from Discord to Twilio.

First we set up the Twilio client:

```python
from twilio.rest import Client
twilio_client = Client(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)
```

Now, once we receive an incoming message from Discord we can forward that message to Twilio via the Twilio client. First, we should check if the user already exists in the Twilio system, and whether they have an open chat channel already.

```python
# call the get_user method to check if user exists, and create a new one if not
user = await get_user(user_id, twilio_client, TWILIO_SERVICE_SID)

# fetch the channels that the user is in
user_channels = twilio_client.chat \
        .services(TWILIO_SERVICE_SID) \
        .users(user_id) \
        .user_channels \
        .list()
```

If the user does have an existing chat channel open, we need to use that so that we have access to the chat history. If there is not an existing chat channel, we create a new one for the user:

```python
if user_channels:
    channel_sid = user_channels[-1].channel_sid
else:
    channel = twilio_client.flex_api \
            .channel \
            .create(
                flex_flow_sid=FLEX_FLOW_ID,
                chat_user_friendly_name=username,
                chat_friendly_name=chat_name,  # -> The chat channel's friendly name
                target=conversation_id,  # -> The identity that uniquely identifies chat User
                identity=conversation_id,  # -> The user, ex/ the Discord DM ID
        )
    channel_sid = channel.sid
```

Finally once we have an open chat channel between the Discord user and Twilio, we can forward the incoming message to the Twilio Studio flow.

```python
message = twilio_client.chat \
        .services(TWILIO_SERVICE_SID) \
        .channels(channel_sid) \
        .messages \
        .create(
            body=message_text,
            from_=user_id,
            x_twilio_webhook_enabled='true',
            attributes=json.dumps(message_json)  # send in the headers as attribute so it's accessible later
        )
```
Now we have the ability to forward all our incoming messages from Discord users directly to our Twilio Flex Flow. On the Discord bot side, make sure that all direct messages are being forwarded to Twilio. Now you can try sending a direct message to the Discord bot, and you should see it appear in the Twilio Studio Flow logs - We’re not done yet though!

## Create an HTTP Server to Support More Complex Routing

### Outbound Messages Webhook
So now we have an idea of how our incoming messages will be routed. However, we’re still missing a couple pieces. First of all, we know that we can get messages to Twilio now, but how do we respond to our users on Discord? Our Discord bot is the only thing that is authorized to send messages to our Discord server and users, and Twilio doesn’t know how to get our messages back to the Discord server anyway. The solution is, we need to set up an outbound messages webhook that will be triggered each time there is a new message in the Twilio chat channel. Within that webhook, we can then use our Discord bot to forward the message back to our server.

In order to do this, we integrate our Discord bot into a more robust HTTP server. We used [FastAPI](https://fastapi.tiangolo.com/) to set up a simple POST endpoint that will serve as our outbound messages webhook. Once we have the server set up and our Discord bot running alongside it, we can define the POST endpoint.

This endpoint will receive every single message added to the chat channel, so first we want to filter out everything except for the outbound messages from SeaX. Next, we’ll need to grab the correct channel ID from the message body so that we know where to forward the message to. Finally, we can use the Discord client to forward the message to the Discord channel.

```python
@app.post("/forward-to-discord", status_code=200)
async def forward_discord_message(request: Request, response: Response) -> None:
    raw_body = await request.body()
    body = urllib.parse.parse_qs(raw_body.decode())

    # only pay attention to messages from the SDK (Flex, all others will be from API)
    if not body.get('Source') == ['SDK']:
        return

    # Messages from Flex do not contain the original message's conversationId
    # We need the convId to send the message back to the conversation on GBM
    # Fetch the previous message and extract the conversationId
    message = twilio_client.chat \
            .services(TWILIO_SERVICE_SID) \
            .channels(body.get("ChannelSid")[0]) \
            .messages.list(limit=1)[0]

    attributes = json.loads(message.attributes)

    channel = discord_client.get_channel(attributes.get(“channel”, {}).get(“id”))
    if channel:
        await channel.send(body.get("Body", [""])[0].get(“text”))
    else:
        logger.error(f"Discord channel could not be found with ID: {get_channel_id(req)}!")
        response.status_code = 400
```

Finally, in order to have the messages sent to our endpoint, we need to let Twilio know what our new webhook is. Each chat channel needs to have its own webhook configured. So, if we go back to where we originally created the new chat channel for the user, we can add some additional code to configure the webhook:

```python
webhook = twilio_client.chat \
        .services(TWILIO_SERVICE_SID) \
        .channels(channel_sid) \
        .webhooks \
        .create(
            type='webhook',   
configuration_url=f"{SERVER_HOST}/forward-to-discord",
            configuration_method="POST",
            configuration_filters=["onMessageSent", "onMessageUpdated", "onMediaMessageSent"]
        )
```

### Bot Integration

So now outbound messages from SeaX should be routed correctly back to our Discord server. But we still never addressed the messages that go to the chatbot. We need to set up one final endpoint that will be triggered from the Twilio Studio Flow and will receive the user message, query the bot, and return the response to Discord.

```python
@app.post("/chatbot-to-discord", status_code=200)
async def receive_discord_message(request: Request, response: Response):
    """Receive POST request from Twilio, query the bot, and return response to Discord."""
    req = await request.body()
    # separate the original message body from the twilio content
    twilio_body, original_message_body = separate_original_message_body(req.decode())

    bot_response = await query_bot(original_message_body, bot_info)

    if bot_response:
        channel = discord_client.get_channel(original_message_body.get(“channel_id”))
        if channel:
            for item in bot_response:
                await channel.send(item.get(“text”))
```

Make sure that the Twilio Studio Flow has the correct webhook to route messages to the bot. Now we’ve finished our message routing! We can see a top-level view of all the message routing in this diagram:

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-routing-diagram.jpg" alt="Message routing diagram."/>

*Message routing diagram.*
</center>

# Summary
To wrap up, in this blog series we’ve discussed Discord’s rise in popularity and the opportunity that it presents to brands as a new platform to engage with customers on. We’ve walked through some of the basic features of Discord, to show how a brand can set up their own online community, as well as more advanced features which allow brands to automate the moderation and customer support on their server with Discord bots. Finally, we shared our demonstration of how we integrated Discord with our customer service platform, SeaX, to bring advanced features to the Discord community, such as live agent transfer, case management, AI-powered knowledge base search.
For a personal demo, or to see how Seasalt.ai can help address your specific business needs, please fill out our “[Book a Demo](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting)" form. For more information about Flex/Discord integration or to contact us, please visit [Seasalt.ai’s Twilio Partner Listing](https://showcase.twilio.com/partner-listing/a8E8Z000000PDCQUA4).
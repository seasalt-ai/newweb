const e=`---
title: "Bring Customers from Any Channel to One Place with SeaX Omnichannel Communication"
metatitle: "Unify Customer Contact Methods with SeaX Omnichannel Communication"
date: 2022-07-15 13:56:54-07:00
modified_date: 2024-12-19 10:00:00+00:00
draft: false
author: Kim Dodds
description: "In this blog, we highlight one of SeaX's omnichannel communications that allows user messages from any channel to be displayed on the SeaX platform."
weight: 1
tags:
  - SeaX
image: images/blog/19-seax-omnichannel-communication/0-thumbnail.png
canonicalURL: /blog/seax-omnichannel-communication/
url: /blog/seax-omnichannel-communication/
---

*In our previous blog post, [Welcome to SeaX, a Collaborative Cloud Contact Center](https://seasalt.ai/blog/18-seax-collaborative-cloud-contact-center-introduction/), we introduced our collaborative cloud communications contact center solution SeaX. While our first blog post provided a comprehensive overview of SeaX's basic features and more advanced capabilities, our subsequent posts will dive deeper into some of the individual features that make SeaX stand out. In this post, we'll take a closer look at SeaX's omnichannel support and understand how calls and messages from different channels are displayed on the SeaX platform.*

# Table of Contents
- [What is Omnichannel Communication?](#what-is-omnichannel-communication)
- [Message Lifecycle](#message-lifecycle)
    - [Channel](#channel)
    - [Message Routing](#message-routing)
    - [TaskRouter](#taskrouter)
    - [SeaX Platform](#seax-platform)
- [Supported Channels](#supported-channels)

# What is Omnichannel Communication?

First, what exactly does "omnichannel" mean? Breaking it down, "omni" is a prefix meaning "all," and "channel" refers to the various platforms through which you can interact with customers. So, simply put, "omnichannel communication" means the ability to communicate through any and all available channels. Not only that, but omnichannel communication also means that the experience across channels is seamless. On the agent side, communications from all channels are presented in a unified interface. For customers, their interaction data persists across channels.

Traditional call centers typically only support phone calls. More advanced contact centers that reach customers through multiple channels (such as email, web chat, and phone) have multichannel contact centers. However, just because a contact center utilizes multiple channels doesn't mean their experience is seamless. In multichannel contact centers, different channels may be accessed through separate platforms, and/or customer data may not be linked across channels. In contrast, omnichannel contact centers allow agents to track customer conversations anytime, anywhere, without being locked into one channel or scattered across dozens of platforms.

<center>
<img src="/images/blog/19-seax-omnichannel-communication/1-contact-center-comparison.png" alt="Feature comparison: traditional call center vs contact center; multichannel vs omnichannel."/>

*Feature comparison: traditional call center vs contact center; multichannel vs omnichannel.*
</center>

SeaX can integrate with almost any channel, with defaults including: text, phone, web chat, Facebook, and more. All messages and calls are displayed on a unified platform, and user data from all channels is always available.

If you'd like to see a demonstration directly, watch our short video demonstrating SeaX's omnichannel communication. For the remainder of this blog, we'll walk through how messages and calls are routed from various channels to agents in SeaX. We'll also share the out-of-the-box supported channels and discuss how to extend SeaX to cover new channels.

<iframe width="85%" height="450px" src="https://www.youtube.com/embed/usb-RK7sHlA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

# Message Lifecycle

SeaX is built on top of [Twilio Flex](https://www.twilio.com/flex), a cloud-based contact center that leverages Twilio's cloud communications platform. Twilio provides SeaX with the basic building blocks, such as telecommunications infrastructure, message and task routing, and basic contact center UI. Now let's trace the lifecycle of an incoming user message to see how SeaX uses basic Twilio architecture combined with custom components to route messages to live agents on the SeaX platform.

## Channel

<center>
<img src="/images/blog/19-seax-omnichannel-communication/2-example-message.jpg" alt="User sending a message to a business through Google Business Messages.", style="width:50%"/>

*Sending a message to a business through Google Business Messages.*
</center>

The message's journey begins when a user composes and sends a message on a supported platform. The example above shows someone sending a message to the Seasalt.ai chatbot on Google Business Messages. By default, Twilio doesn't support Google Business Messages, so we utilize custom channel connectors developed by Seasalt.ai to connect the Google platform to Twilio and SeaX.

After the message is sent, it's transmitted to the Twilio Messaging API by the custom connector. At this point, Twilio creates a new conversation context for the user and prepares to route the message.

## Message Routing

<center>
<img src="/images/blog/19-seax-omnichannel-communication/3-studio-flow.png" alt="A simple Studio Flow that routes messages to chatbots or live agents."/>

*A simple Studio Flow that routes messages to chatbots or live agents.*
</center>

Once the message is received by Twilio, it needs to be routed to the correct location. For this, we use [Twilio Studio Flows](https://www.twilio.com/studio) to determine whether to provide an automated response, forward the message to a chatbot, connect the user with a live agent, or perform other actions.

In the simple example provided above, all incoming messages will be forwarded to the chatbot unless they contain the phrase "live agent," in which case the user will be transferred to a live agent on the SeaX platform.

## TaskRouter

<center>
<img src="/images/blog/19-seax-omnichannel-communication/4-taskrouter.png" alt="TaskRouter architecture diagram."/>

*TaskRouter architecture diagram. [Source](https://twilio-cms-prod.s3.amazonaws.com/images/taskrouter-diagram.width-800.png).*
</center>

After the message is transmitted to SeaX, the next step is to decide which agent will receive it. [Twilio's TaskRouter](https://www.twilio.com/taskrouter) assigns tasks such as messages and phone calls to the agents in SeaX who are best equipped to handle them. Each agent in SeaX can be assigned skills, such as which language they speak, which department they work in, whether they should handle VIP customers, and more. TaskRouter will check known information about the user and message, then select the most suitable employee to handle the issue. The Studio Flow from the previous step can be customized to gather additional information (such as preferred language), and customer information can be preserved across conversations and channels to ensure their experience is seamless.

## SeaX Platform

<center>
<img src="/images/blog/19-seax-omnichannel-communication/5-seax-incoming-messages.png" alt="Incoming calls and messages displayed on the SeaX platform.", style="width:50%"/>

*Incoming calls and messages displayed on the SeaX platform.*
</center>

Finally, the incoming message will be displayed to the appropriate agent on the SeaX platform. Agents can handle multiple tasks from multiple channels simultaneously. In the image above, one agent has an incoming call, Facebook message, and web chat message. Agents can accept tasks or reject tasks to pass them to the next available agent.

# Supported Channels

Hopefully it's now clearer what omnichannel communication is and how it enhances the experience for both users and agents. The final question is: which channels are supported out of the box?

<center>
<img src="/images/blog/19-seax-omnichannel-communication/6-channel-comparison.png" alt="Comparison of supported channels between traditional call centers, basic Twilio Flex, and SeaX."/>

*Comparison of supported channels between traditional call centers, basic Twilio Flex, and SeaX.*
</center>

As mentioned earlier, traditional call centers typically only support phone calls. Companies may still interact with customers through social media or email, but these messages are not integrated into a unified platform.

Twilio Flex, on the other hand, provides an excellent foundation for omnichannel contact centers. However, it has very few channels out of the box. Beyond phone calls and SMS, they also offer beta support for Facebook, WhatsApp, and email.

SeaX is built on top of Flex and adds built-in support for some of the most requested channels: such as Google Business Messages, Discord, Line, and Instagram. Additionally, Seasalt.ai always works with customers to bring new channels into the SeaX product line. SeaX is highly customizable and easy to extend—which means we can work with your company to integrate any channel you want most.

Thank you for taking the time to read about how SeaX's cloud contact center leverages omnichannel communication to provide seamless customer and agent experiences. Stay tuned for our next blog post, which will explore what it means to be a "distributed contact center." If you're interested in learning more immediately, please fill out our [demo booking form](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting) to experience the SeaX platform firsthand.
`;export{e as default};

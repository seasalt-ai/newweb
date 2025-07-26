---
title: "Bring Customers from Any Channel to One Place with SeaX Omnichannel Communication"
metatitle: "Unify Customer Contact with SeaX Omnichannel Communication"
date: 2022-07-15T13:56:54-07:00
author: Kim Dodds 
draft: false
image: images/blog/19-seax-omnichannel-communication/0-thumbnail.png
description: "In this blog we focus one one of SeaX’s omnichannel communication, which allows user messages from any channel to be surfaced on the SeaX platform."
weight: 1
tags: ["SeaX"]
canonicalURL: "/blog/seax-omnichannel-communication/"
url: "/blog/seax-omnichannel-communication/"
---

*In our previous blog post, [Welcome to SeaX, a Collaborative Cloud Contact Center](https://seasalt.ai/blog/18-seax-collaborative-cloud-contact-center-introduction/), we introduced our collaborative cloud communication contact center solution, SeaX. While our first blog post gave a comprehensive overview of the basic functionality and more advanced features of SeaX, our subsequent posts will dive deeper into some of the individual features that make SeaX stand out. In this post, we’ll take a closer look at SeaX’s omnichannel support and see how calls and messages make it from various channels to be surfaced on the SeaX platform.*

# Table of Contents
- [What is Omnichannel communication?](#what-is-omnichannel-communication)
- [Message Lifecycle](#message-lifecycle)
    - [Channel](#channel)
    - [Message Routing](#message-routing)
    - [TaskRouter](#taskrouter)
    - [SeaX Platform](#seax-platform)
- [Supported Channels](#supported-channels)

# What is Omnichannel communication?

To start, what does “omnichannel” actually mean? To break it down, “omni” is a prefix meaning “all”, and “channels” are the various platforms through which you can interact with your customers. So simply put, “omnichannel communication” means the ability to communicate through any and all channels available. And more than that, omnichannel communication means that the experience between channels is seamless. On the agent side, communication from all channels is presented in one unified interface. For the customer, their interaction data is persisted across channels .

A traditional call center typically supports only phone calls. More advanced contact centers that connect with customers via multiple channels (such as email, webchat, and phone) have a multichannel contact center. However, just because a contact center utilizes multiple channels doesn’t mean that their experience is seamless. In multichannel contact centers, the different channels may be accessed through individual platforms and/or the customer data may not be linked across channels. In contrast, the omnichannel contact center lets agents follow a customer conversation wherever it goes, without being locked into one channel or spread across dozens of platforms.

<center>
<img src="/images/blog/19-seax-omnichannel-communication/1-contact-center-comparison.png" alt="Feature comparison: traditional call center vs contact center; multichannel vs omnichannel."/>

*Feature comparison: traditional call center vs contact center; multichannel vs omnichannel.*
</center>

SeaX has the ability to integrate with virtually any channel, including by default: text, phone, webchat, Facebook, and more. All messages and calls are surfaced on one unified platform, and user data from all channels is readily available.

If you want to get straight to a demo, take a look at our short video demonstrating SeaX’s omnichannel communication. In the rest of this blog, we’ll walk through how messages and calls are routed from various channels to agents in SeaX. We’ll also share the channels that are supported out of the box, and discuss how SeaX can be extended to cover new channels.

<iframe width="85%" height="450px" src="https://www.youtube.com/embed/usb-RK7sHlA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

# Message Lifecycle

SeaX is built on top of [Twilio Flex](https://www.twilio.com/flex), a cloud-based contact center that utilizes Twilio's cloud communications platform. Twilio provides the basic building blocks for SeaX, such as telecom infrastructure, message & task routing, and a basic contact center UI. Now let’s track the lifecycle of an incoming user message and see how SeaX uses basic Twilio architecture combined with custom components to route the message to the live agent on the SeaX platform.

## Channel

<center>
<img src="/images/blog/19-seax-omnichannel-communication/2-example-message.jpg" alt="User sends a message to a business via Google Business Messages.", style="width:50%"/>

*Sending a message to a business via Google Business Messages.*
</center>

A message’s journey starts with the user writing the message and sending it on a supported platform. The example above shows someone sending a message to the Seasalt.ai chatbot on Google Business Messages. Google Business Messages is not supported by Twilio by default, so we utilize a custom channel connector developed by Seasalt.ai to connect the Google platform to Twilio and SeaX.

Once the message is sent, it is delivered by the custom connector to the Twilio messaging API. At this point, Twilio creates a new conversation context for the user, and prepares to route the message.

## Message Routing

<center>
<img src="/images/blog/19-seax-omnichannel-communication/3-studio-flow.png" alt="A simple Studio Flow which routes messages to a chatbot or a live agent."/>

*A simple Studio Flow which routes messages to a chatbot or a live agent.*
</center>

Once the message has been received by Twilio, it needs to be routed to the correct place. For this purpose, we use [Twilio Studio Flows](https://www.twilio.com/studio) to determine whether to provide an automated response, forward the message to a chatbot, connect the user with a live agent, or perform some other action.

In the simple example provided above, all incoming messages will be forwarded to a chatbot unless they contain the words “live agent”, in which case the user will be transferred to a live agent on the SeaX platform.

## TaskRouter

<center>
<img src="/images/blog/19-seax-omnichannel-communication/4-taskrouter.png" alt="Diagram of TaskRouter architecture."/>

*Diagram of TaskRouter architecture. [Source](https://twilio-cms-prod.s3.amazonaws.com/images/taskrouter-diagram.width-800.png).*
</center>

Once a message is transferred to SeaX, the next step is to decide which agent will receive it. [Twilio’s TaskRouter](https://www.twilio.com/taskrouter) distributes tasks such as messages and phone calls to the agents in SeaX that can best handle them. Each agent in SeaX can be assigned skills such as which languages they speak, what department they work in, whether they should handle VIP customers, etc. The TaskRouter will check the known information about the user and message and then select the most appropriate worker to handle the issue. The Studio Flow from the previous step can be customized to get additional information (such as preferred language) and customer information can be persisted across conversations and channels to ensure that their experience is seamless.

## SeaX Platform

<center>
<img src="/images/blog/19-seax-omnichannel-communication/5-seax-incoming-messages.png" alt="Incoming calls and messages surfaced on the SeaX platform.", style="width:50%"/>

*Incoming calls and messages surfaced on the SeaX platform.*
</center>

Finally, the incoming message will be surfaced to the appropriate agent on the SeaX platform. Agents can handle multiple tasks from multiple channels simultaneously. In the image above, an agent has an incoming call, Facebook message, and webchat message. The agent can accept the task or decline it to have it passed to the next available agent.

# Supported Channels

Hopefully now it is more clear what omnichannel communication is, and how it enhances user and agent experience. The final question is: what channels are actually supported out of the box?

<center>
<img src="/images/blog/19-seax-omnichannel-communication/6-channel-comparison.png" alt="Supported channel comparison between traditional call center, basic Twilio Flex, and SeaX."/>

*Supported channel comparison between traditional call center, basic Twilio Flex, and SeaX.*
</center>

As mentioned previously, a traditional call center typically only supports phone calls. Companies may still interact with customers on social media or through email, but these messages are not integrated into a unified platform. 

Twilio Flex, on the other hand, lays the groundwork for a fantastic omnichannel contact center. However, it has few channels available out of the box. In addition to phone calls and text, they also have beta support for Facebook, WhatsApp, and email.

SeaX builds on top of Flex to add built-in support for some of the most commonly requested channels: such as Google Business Messages, Discord, Line, and Instagram. Additionally, Seasalt.ai is always working with customers to bring new channels into the SeaX lineup. SeaX is highly customizable, and easily extensible - meaning we can work with your company to integrate whatever channels you want most.

Thanks for taking the time to read about how SeaX cloud contact center utilizes omnichannel communication to provide seamless customer and agent experience. Please stay tuned for our next blog post, which will explore what it means to be a “distributed contact center”. If you’re interested in learning more right away, fill out our [Book a Demo form](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting) to get a first hand look at the SeaX platform.

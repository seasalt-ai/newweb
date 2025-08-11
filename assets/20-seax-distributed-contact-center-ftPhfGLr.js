const e=`---
title: "Expand Your Contact Center Footprint with a Distributed Contact Center"
metatitle: "Expand Your Footprint with a Distributed Contact Center"
date: 2022-07-27 21:46:45+00:00
draft: false
author: Sarah Reid
description: "In this blog, we will look at 'distributed' contact centers: what they are, how they can benefit you, and how SeaX uses this to better serve our clients."
weight: 1
tags:
  - SeaX
image: images/blog/20-seax-distributed-contact-center/0-main.png
canonicalURL: /blog/seax-distributed-contact-center/
url: /blog/seax-distributed-contact-center/
---

*In our previous blog post, [Bring Customers from Any Channel to One Place with SeaX Omnichannel Communication](https://seasalt.ai/blog/19-seax-omnichannel-communication/), we showed the power of omnichannel communication on SeaX, which allows user messages from virtually any channel to be surfaced on the SeaX platform. In this post, we will take a look at "distributed" contact centers: what they are, how they can benefit you, and how SeaX leverages a distributed platform to better serve our clients.*

# Table of Contents
- [What is a “distributed” contact center?](#what-is-a-distributed-contact-center)
- [What benefits does a “distributed” contact center have?](#what-benefits-does-a-distributed-contact-center-have)
- [What challenges does a “distributed” contact center have?](#what-challenges-does-a-distributed-contact-center-have)
- [How does SeaX solve these issues?](#how-does-seax-solve-these-issues)
    - [Routing Calls To Distributed Locations and Agents](#routing-calls-to-distributed-locations-and-agents)
    - [Configuring Distributed Location Availability](#configuring-distributed-location-availability)
    - [Customize Distributed Location Messaging](#customize-distributed-location-messaging)

# What is a “distributed” contact center?
On the simplest level, a distributed contact center is a contact center that exists in more than one location, unlike the traditional one-location contact center. This could be a contact center with multiple offices, or multiple locations in different countries, or even a contact center with no physical location where all the agents work remotely. However, distributed contact centers still need to operate like traditional one-location contact centers, providing a seamless experience for everyone involved. For the agents, this means being supported on one platform no matter where they are located. For the customer, this means being correctly connected to the appropriate location and agent based on their needs.

# What benefits does a “distributed” contact center have?
Distributed contact centers have a number of benefits over traditional contact centers, especially in terms of their reach and coverage. Having agents in multiple time zones ensures that customers can reach you whenever they need help. With traditional contact centers, customers are limited to calling during one set of open hours, making it more difficult for them to get in contact with your business. Having distributed agents also gives your business more opportunity to hire people with diverse skills and specialities, such as having agents that cover a wider range of languages. Traditional contact centers in one location are limited to hiring agents in that location, running the risk of not being able to find an agent with the skills that you need. Finally, having widespread agents closer to more of your customers allows agents to have a deeper understanding of any specialized rules and regulations in that area. In a traditional one-location contact center, agents may not know specific details about something like shipping in a country on the other side of the world, making it more difficult to assist customers.


# What challenges does a “distributed” contact center have?
While the distributed nature of these contact centers have a lot of benefits for your business, there are some challenges to distributed contact centers as well. Having agents in multiple time zones allows easy communication with customers at all times, but also means that it is essential for calls to be correctly routed so that a customer is not directed to a location that is currently closed or an agent who is off duty. It is also important to send customers to the agents who speak the customer’s requested language and have the correct training to handle their issue. With the wide pool of agents in different locations with different skills, this routing task can quickly get complicated.

<center>
<img src="/images/blog/20-seax-distributed-contact-center/1-feature-comparison.png" alt="Feature comparison: traditional call center vs distributed contact center vs SeaX."/>

*Feature comparison: traditional call center vs distributed contact center vs SeaX.*
</center>

# How does SeaX solve these issues?

## Routing Calls To Distributed Locations and Agents
SeaX is a collaborative contact center solution that is born cloud-native and distributed. It is built on top of [Twilio Flex](https://www.twilio.com/flex) that utilizes Twilio’s cloud communications platform. Twilio provides the basic building blocks for SeaX, such as telecom infrastructure, message & task routing, and a basic contact center UI. Within SeaX, you can configure multiple phone numbers for your different locations, allowing you to have appropriate country and area codes for each area that your contact center operates in. You can therefore configure your settings by location, ensuring that each location operates correctly and receives the right calls, while still serving all of your agents on the same platform.

The [Twilio TaskRouter](https://www.twilio.com/taskrouter) assigns calls and messages to agents based on the call and agent attributes.

<center>
<img src="/images/blog/20-seax-distributed-contact-center/2-taskrouter.png" alt="Diagram of TaskRouter architecture."/>

*Diagram of TaskRouter architecture. [Source](https://twilio-cms-prod.s3.amazonaws.com/images/taskrouter-diagram.width-800.png).*
</center>

It also enables you to use skills-based routing, giving you fine-grained control over which agents and locations receive which calls. Not only can you label which skills your agents have, such as the level of their sales training, you can also list things like the languages that they speak, ensuring that they only get calls that they can handle. In addition, you can use this routing to assign specific phone numbers to agents, tying each agent to a particular location of your contact center, even if they aren’t physically there. Agents will only receive calls routed to their assigned location, ensuring that your customers calls are always directed to the correct person.

<center>
<img src="/images/blog/20-seax-distributed-contact-center/3-skills.png" alt="Skills defined in the TaskRouter for routing incoming calls and messages."/>

*Skills defined in the TaskRouter for routing incoming calls and messages.*
</center>

## Configuring Distributed Location Availability
In SeaX, you can also configure your open hours and holidays by phone number. With this tool, you can independently control when each of your locations is open, giving you full flexibility as to when each of your locations can be contacted. In essence, each of your locations can operate like a traditional call center, with set open hours and closed on local holidays, while still being configured and connected from one common platform for your agents to operate on.

<center>
<img src="/images/blog/20-seax-distributed-contact-center/4-open-hours.png" alt="Operating hours for two different phone numbers in two different time zones on the same SeaX instance."/>
</center>

<center>
<img src="/images/blog/20-seax-distributed-contact-center/5-open-hours.png" alt="Operating hours for two different phone numbers in two different time zones on the same SeaX instance."/>

*Operating hours for two different phone numbers in two different time zones on the same SeaX instance.*
</center>

## Customize Distributed Location Messaging
SeaX enables customer unavailable messages by phone number as well. The unavailable messages are automatically played to customers when there is no-one available to take their call. With the ability to customize this message by phone number, you can have messages in different languages or containing different information depending on what is most important to convey to customers calling that location.

<center>
<img src="/images/blog/20-seax-distributed-contact-center/6-unavailable-message.png" alt="Unavailable message for a specific phone number on the SeaX platform."/>

*Unavailable message for a specific phone number on the SeaX platform.*
</center>

A traditional one-location contact center can only effectively serve the area directly around it, though it is by nature on one platform. A distributed contact center greatly expands the customer base that it can serve with agents in multiple locations, but has some challenges with integrating all the services its agents need no matter where they are. With SeaX, you can get the reach to every part of your customer base, while still serving all of your agents on one easy platform.

Thanks for taking the time to read about how SeaX cloud contact center supports your distributed contact center on one platform. Please stay tuned for our next blog post, which will dive into our in-house text-to-speech and speech-to-text, and how they can enhance your contact center. If you’re interested in learning more right away, fill out our “[Book a Demo](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting)" form to get a first hand look at the SeaX platform.

`;export{e as default};

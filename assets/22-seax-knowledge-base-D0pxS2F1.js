const e=`---
title: "SeaX KB: A Knowledge Base That Answers Before You Ask"
metatitle: "SeaX KB: A Knowledge Base That Answers Before You Ask"
date: 2022-08-15 22:01:32-07:00
modified_date: 2025-07-30 17:01:06.842000+00:00
draft: false
author: Kim Dodds
description: "In this article, we continue the topic of AI integration by introducing SeaX's AI-powered knowledge base, which provides suggested replies in real-time."
weight: 1
tags:
  - SeaX
canonicalURL: /blog/seax-kb-a-knowledge-base/
url: /blog/seax-kb-a-knowledge-base/
---

*In our previous blog post [Give Your Contact Center Its Own Voice with SeaX Voice Intelligence](https://seasalt.ai/blog/21-seax-voice-intelligence/), we showed how Seasalt.ai's in-house text-to-speech and speech-to-text engines enhance various aspects of the SeaX platform. In this article, we'll continue the topic of AI integration by introducing SeaX's AI-powered knowledge base, which listens to conversations in real-time to provide suggested replies.*

# Table of Contents
- [The Traditional Knowledge Base](#the-traditional-knowledge-base)
- [The SeaX Knowledge Base](#seax-knowledge-base)
    - [Embedded User Interface for Live Agents](#embedded-user-interface-for-live-agents)
    - [Fast and Accurate Search](#fast-and-accurate-search)
    - [Real-time Automated Suggestions](#real-time-automated-suggestions)
    - [Response Templates](#response-templates)
    - [KB Management](#kb-management)
    - [Webinar](#webinar)

# The Traditional Knowledge Base

At its core, a knowledge base (KB) is just a (ideally) well-organized and easily accessible collection of information for online self-service. A good KB system will have features like hierarchical content organization, search, and tagging to help users find the right information more easily.

Maintaining a detailed knowledge base is standard practice for most companies nowadays. Whether the purpose is to help employees share internal information about their products, answer prospective customers' questions, assist customers with troubleshooting, or all of the above—making key information accessible to employees and customers alike means more efficient work and higher customer satisfaction.

Typically, knowledge bases are implemented and maintained through a content management system or a knowledge management system. These systems can vary in scale depending on an organization's needs, from simple document managers to feature-rich services that include publishing workflows, audience targeting, collaboration tools, and more. While these systems are versatile in various aspects, they are almost always designed to be accessed through interaction with a webpage or an application. For the specific use case of customer service agents (who often use knowledge bases as one of their primary resources for assisting customers), tight integration with the contact center software is needed to enable agents to handle user queries as seamlessly as possible.

# The SeaX Knowledge Base

Our knowledge base was designed from day one with a very specific use case in mind: voice-based customer service. Whereas most, if not all, existing knowledge base systems rely on navigating through hierarchical webpages or typing in search queries, our knowledge base needed to be faster and more autonomous so that customer service representatives could devote their full attention to the customer while still answering questions quickly.

If you'd like to jump straight to the demo, you can watch our short SeaX KB demo:
<iframe width="85%" height="450px" src="https://www.youtube.com/embed/C_e_gaZHSFA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>


## Embedded User Interface for Live Agents

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-intro.png" alt="A first look at the SeaX Knowledge Base interface."/>

*A first look at the SeaX Knowledge Base interface.*
</center>

Naturally, since our knowledge base engine was designed specifically for contact center applications, it is natively integrated into the SeaX platform so that agents can seamlessly access the knowledge base while handling calls and messages. No switching windows, no fumbling through tabs, no navigating nested webpages.

## Fast and Accurate Search

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-manual-search.png" alt="Results of a manual search in the SeaX Knowledge Base."/>

*Results of a manual search in the SeaX Knowledge Base.*
</center>

At the most basic level, our knowledge base is powered by an extremely fast and accurate search engine. We use state-of-the-art natural language processing and information extraction techniques to glean meaning from raw text, example queries, and supporting URLs and match customers' utterances to the most relevant knowledge base entries. The knowledge base engine is highly scalable and can support billions of documents with no perceivable change in response time.

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-detail.png" alt="A knowledge base article in an expanded view after clicking on a search result."/>

*A knowledge base article in an expanded view after clicking on a search result.*
</center>

In addition to finding the most relevant documents, our search engine also provides more fine-grained results by extracting salient keywords from the user's query and highlighting the most relevant keywords and passages in each suggested knowledge base entry.

## Real-time Automated Suggestions

But what we've shown so far is still a manual search. Live agents are busy interacting with customers, and manually typing searches into the knowledge base every time they need information wastes precious time. So, the biggest value-add that comes with the SeaX Knowledge Base is real-time automated search for both text and voice-based interactions.

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-automatic-search.png" alt="The SeaX Knowledge Base showing automatic article suggestions for an incoming user message."/>

*The SeaX Knowledge Base showing automatic article suggestions for an incoming user message.*
</center>

Every time a new user message comes in, the knowledge base automatically queries with the customer's exact message. In real-time, as the customer is speaking, agents will be provided with up-to-date knowledge base article suggestions for their reference.

This works for voice calls too! Our previous blog post [Give Your Contact Center Its Own Voice with SeaX Voice Intelligence](https://seasalt.ai/blog/21-seax-voice-intelligence/) showcased Seasalt.ai's state-of-the-art speech-to-text engine. The SeaX platform leverages this engine to transcribe all voice calls in real-time. Consequently, we can use these transcriptions for a variety of downstream applications, including automatic knowledge base search.

## Response Templates

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-response-template.png" alt="An agent replying to a customer in one click with a response template generated by the SeaX Knowledge Base."/>

*An agent replying to a customer in one click with a response template generated by the SeaX Knowledge Base.*
</center>

Knowledge base search results come with one additional feature to help speed up agents' responsiveness for text-based interactions. When an agent finds a relevant knowledge base article, they can simply click the "+" icon to the left of the title to insert a response template into their chat window. On the backend, every time the knowledge base is searched, it generates a written response to the user's question based on the most relevant information from the suggested knowledge base articles and includes any supporting links. This can dramatically improve agents' response times as agents are no longer starting from scratch. Instead, they already have the important information from the knowledge base article displayed in their chat window, so all they have to do is edit and send.


## KB Management

Now that we've seen what the knowledge base engine can do, there's one lingering question about the backend: how is the information in the knowledge base managed? The SeaX platform provides a fully integrated knowledge base management UI that administrators can access from the settings page.

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-management.png" alt="The SeaX Knowledge Base Management interface."/>

*The SeaX Knowledge Base Management interface.*
</center>

On this page, you can add individual new knowledge base entries, or you can import/export the entire knowledge base using a spreadsheet file. The interface also supports editing and deleting knowledge base entries so that you can continuously keep your knowledge base up-to-date.

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-edit.png" alt="Editing a single knowledge base article through the SeaX Knowledge Base Management interface."/>

*Editing a single knowledge base article through the SeaX Knowledge Base Management interface.*
</center>

## Webinar

If you'd like a more in-depth look at the knowledge base system and how it integrates with the SeaX platform, watch our webinar on the topic:
<iframe width="85%" height="450px" src="https://www.youtube.com/embed/FOqQ01fpKQ4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

For a one-on-one demo, or to find out how Seasalt.ai can customize a solution for your business needs, please fill out our [schedule-a-demo form](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting).`;export{e as default};

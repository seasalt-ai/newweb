---
title: "SeaX KB: A Knowledge Base that Answers Before It’s Asked"
date: 2022-08-15T22:01:32-07:00
draft: false
author: Kim Dodds
image: /images/blog/22-seax-knowledge-base/thumbnail.png
description: "In this post, we continue on the topic of AI integrations with SeaX’s AI-powered Knowledge Base, which offers suggested responses in real time."
weight: 1
tags: ["SeaX"]
canonicalURL: "/blog/seax-kb-a-knowledge-base/"
url: "/blog/seax-kb-a-knowledge-base/"
---

*In our previous blog post, [Give Your Contact Center Its Own Voice with SeaX Voice Intelligence](https://seasalt.ai/blog/21-seax-voice-intelligence/), we showed how Seasalt.ai’s in-house text-to-speech and speech-to-text engines enhance various aspects of the SeaX platform. In this post, we continue on the topic of AI integrations with SeaX’s AI-powered Knowledge Base, which listens in on conversations and offers suggested responses in real time.*

# Table of Contents
- [The Traditional Knowledge Base](#the-traditional-knowledge-base)
- [SeaX Knowledge Base](#seax-knowledge-base)
    - [Embedded User Interface for Live Agents](#embedded-user-interface-for-live-agents)
    - [Fast and Accurate Search](#fast-and-accurate-search)
    - [Real-Time Automated Suggestions](#real-time-automated-suggestions)
    - [Response Templates](#response-templates)
    - [KB Management](#kb-management)
    - [Webinar](#webinar)

# The Traditional Knowledge Base

Fundamentally, a knowledge base (KB) is simply a library of (ideally) well-organized and easily-accessible information that is utilized on a self-serve basis online. Good knowledge base systems will have features such as hierarchical content organization, searching, and labeling to help users find the correct information easier.

Maintaining a detailed knowledge base is standard practice for most companies nowadays. Whether the purpose is helping employees share internal information about their product, answering questions for a potential client, assisting customers in troubleshooting problems, or all of the above - making key information accessible to employees and customers means more efficient work and higher customer satisfaction.

Typically a knowledge base is implemented and maintained via a Content Management System or Knowledge Management System. These systems can vary in scale depending on the needs of the organization, starting from a simple document manager to a feature-packed service that includes publishing workflows, audience targeting, collaboration tools, and more. While these systems are versatile in different ways, they’re almost always intended to be accessed via interaction with a web page or application. For the particular use case of a customer service agent (who typically utilizes a knowledge base as one of their main resources in assisting customers) a tight integration with the contact center software is necessary to allow the agents to handle user queries as seamlessly as possible.

# SeaX Knowledge Base

Our knowledge base was designed from day 1 with a very particular use case in mind: voice-based customer service. While most, if not all, existing knowledge base systems rely on navigating through hierarchical webpages or typing in a search query, our KB needed to be faster and more independent in order to allow the customer service representatives to give their full attention to the customer while still answering questions quickly.

If you want to get straight to a demonstration, you can watch our short SeaX KB demo video:
<iframe width="85%" height="450px" src="https://www.youtube.com/embed/C_e_gaZHSFA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>


## Embedded User Interface for Live Agents

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-intro.png" alt="First look at the SeaX Knowledge Base interface."/>

*First look at the SeaX Knowledge Base interface.*
</center>

Naturally since our KB engine was designed specifically for contact center applications, it has native integration with the SeaX platform so that agents can seamlessly access the KB while handling calls and messages. No switching windows, no flipping through tabs, no navigating through nested web pages.

## Fast and Accurate Search

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-manual-search.png" alt="Results from a manual search in the SeaX Knowledge Base."/>

*Results from a manual search in the SeaX Knowledge Base.*
</center>

At the most basic level, our knowledge base is powered by an incredibly fast and accurate search engine. We use state of the art natural language processing and information extraction techniques to gather meaning from plain text, sample queries, & supporting URLs and match customer utterances to the most relevant KB entries. The knowledge base engine is highly extensible and can support billions of documents with no perceivable change in response time.

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-detail.png" alt="KB article in expanded view after clicking on a search result."/>

*KB article in expanded view after clicking on a search result.*
</center>

In addition to finding the most relevant document, our search engine provides more fine-grained results by extracting salient keywords from the user query and highlighting the most relevant keywords and passages within each suggested KB entry. 

## Real-Time Automated Suggestions

But what we’ve shown so far is still manual search. Live agents have their hands full interacting with customers, and would lose valuable time inputting a manual search into the KB each time they wanted some information. For that reason, the biggest value-add that the SeaX Knowledge Base brings to the table is real-time automated search for both text and voice-based interactions. 

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-automatic-search.png" alt="SeaX KB showing automatic article suggestions for an incoming user message."/>

*SeaX KB showing automatic article suggestions for an incoming user message.*
</center>

Each time a new user message comes in, the knowledge base will automatically be queried using the customer’s exact message. In real time, as the customer is talking, the agent will be provided with up-to-date KB article suggestions for their reference. 

And this works with voice-based calls too! Our last blog post, [Give Your Contact Center Its Own Voice with SeaX Voice Intelligence](https://seasalt.ai/blog/21-seax-voice-intelligence/), showed off Seasalt.ai’s state-of-the-art Speech-to-Text engine. The SeaX platform utilizes that engine to transcribe all voice-based calls in real time. As a result, we can use those transcriptions for various downstream applications, including automated knowledge base search.

## Response Templates

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-response-template.png" alt="An agent responds to a customer in one click using SeaX KB's generated response template."/>

*An agent responds to a customer in one click using SeaX KB's generated response template.*
</center>

The search results from the knowledge base have one additional feature that helps speed up agent responses for text-based interactions. When the agent finds a relevant KB article, they can simply click the `+` icon to the left of the title to insert a response template into their chat window. On the backend, each time the KB is searched, it generates a written response to the user’s question based on the most relevant information in the suggested KB article and includes any supporting links. This can vastly improve agent response time, as the agent is no longer starting with a blank slate. Instead, they have the important information from the KB article already in their chat window, so they can simply edit it and send.


## KB Management

Now that we’ve seen what the KB engine can do, there’s one lingering question about the backend: how do you manage the information in the knowledge base? The SeaX platform has a fully integrated KB management UI available to administrators from the settings page. 

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-management.png" alt="SeaX KB management interface."/>

*SeaX KB management interface.*
</center>

From this page you can add a single new KB entry or you can import/export the whole knowledge base using a spreadsheet file. The interface also supports editing and deleting KB entries so that you can continuously keep your KB up to date.

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-edit.png" alt="Editing a single KB article via the SeaX KB management interface."/>

*Editing a single KB article via the SeaX KB management interface.*
</center>

## Webinar

If you’d like to see a more in-depth walkthrough of the knowledge base system and how it integrates with the SeaX platform, please watch our webinar on the subject:
<iframe width="85%" height="450px" src="https://www.youtube.com/embed/FOqQ01fpKQ4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

For a one-on-one demo, or to learn more about how Seasalt.ai can tailor its solutions to your business needs, please fill out our [Book a Demo form](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting).

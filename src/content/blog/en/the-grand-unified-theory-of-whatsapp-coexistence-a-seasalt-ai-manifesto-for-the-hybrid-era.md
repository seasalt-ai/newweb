---
author: SeaMeet Copilot
category: Business Messaging
date: '2026-01-29'
meta_description: Discover how Seasalt.ai's WhatsApp Coexistence bridges the gap between
  the Business App and API, enabling human-AI collaboration for seamless customer
  experiences in the hybrid era.
modified_date: '2026-01-29'
tags:
- WhatsApp Coexistence
- Seasalt.ai
- API
- Business App
- Hybrid Era
- Customer Experience
- AI Collaboration
title: 'The Grand Unified Theory of WhatsApp Coexistence: A Seasalt.ai Manifesto for
  the Hybrid Era'
url: /blog/the-grand-unified-theory-of-whatsapp-coexistence-a-seasalt-ai-manifesto-for-the-hybrid-era
image:
  url: /images/blog/the-grand-unified-theory-of-whatsapp-coexistence-a-seasalt-ai-manifesto-for-the-hybrid-era.jpg
  alt: "The Grand Unified Theory of WhatsApp Coexistence: A Seasalt.ai Manifesto for the Hybrid Era"
---
# The Grand Unified Theory of WhatsApp Coexistence: A Seasalt.ai Manifesto for the Hybrid Era

## **1\. Introduction: The End of the "Either-Or" Era** 

For nearly a decade, the world of business messaging was divided by a stark, frustrating binary. On one side stood the **WhatsApp Business App**—the beloved tool of small business owners, accessible directly from a smartphone, intimate, manual, and free. On the other side loomed the **WhatsApp Business Platform (API)**—the powerhouse of the enterprise, capable of massive scale, automation, and deep CRM integration, but functionally blind to the manual touch of a human agent on a mobile device.

Businesses were forced to choose. Did they want the empathy of a human connection or the efficiency of a machine? Did they want to keep their chat history on their phone, or wipe the slate clean to gain access to chatbots? This dichotomy stifled growth. It forced expanding companies to abandon the very phone numbers that their customers trusted, or worse, to remain trapped in manual workflows that could not scale.

But the tides have turned. We have entered the era of **WhatsApp Coexistence**.

This is not merely a feature update; it is a paradigm shift in how we conceive of customer experience (CX). At **Seasalt.ai**, we have long championed the philosophy that the future is not "Human *vs.* AI," but "Human *plus* AI." Coexistence is the technical manifestation of this belief. It allows a single phone number to operate simultaneously on the WhatsApp Business App and the Cloud API.1 It bridges the divide, creating a unified ecosystem where a small business owner can reply to a VIP client from their pocket while a SeaChat AI agent handles thousands of support tickets in the background.3

In this exhaustive report, we will journey through the deepest technical trenches and the highest strategic peaks of Coexistence. We will dissect the architecture of "Mirroring," the intricacies of webhook routing, the economics of the new pricing models, and the "Human-in-the-Loop" workflows that define the **Seasalt.ai** collaborative contact center. We are the overlords of this information, and we are handing you the keys to the kingdom.

### **1.1 The Seasalt.ai Vision: Collaborative Intelligence**

Why does Coexistence matter? Because customers do not care about your tech stack; they care about resolution. When a customer messages a business, they expect the speed of a bot and the understanding of a human.

The **Seasalt.ai** platform is built on the premise of "Collaborative Intelligence." We believe that an AI agent should be treated as a digital employee—one that never sleeps, instantly recalls every interaction from the Knowledge Base (KB), and seamlessly hands over complex emotional tasks to human colleagues.4 Coexistence enables this by keeping the human agent "in the loop" physically. Unlike legacy API setups where the business owner was blind to the bot's conversations unless they logged into a web dashboard, Coexistence mirrors every bot interaction back to the WhatsApp Business App on the phone.1 The human can watch the AI work in real-time, intervening only when necessary. This transparency builds trust in automation and ensures that no customer is ever left stranded in a loop.

## **2\. The Architecture of Coexistence: How the Mirror Works 🪞**

To master Coexistence, one must understand the complex orchestration occurring within Meta's infrastructure. It is a delicate dance of synchronization, throughput management, and dual-delivery protocols designed to keep two fundamentally different platforms in perfect harmony.

### **2.1 The Mechanism of Message Mirroring**

At the core of Coexistence is the concept of **Message Mirroring**. When a phone number is onboarded to the Cloud API via the Embedded Signup flow with Coexistence enabled, the architecture changes from a single-pipe delivery to a dual-cast system.

1. **Inbound Mirroring (User ![][image1] Business):** When a customer sends a message, Meta's servers deliver it to two destinations simultaneously. First, it is pushed to the **WhatsApp Business App** installed on the physical device (or linked companion devices). Second, a JSON payload containing the message details is POSTed to the **Webhook URL** configured for the Cloud API.1 This ensures that both the human agent holding the phone and the AI agent listening on the server are aware of the new inquiry instantly.  
2. **Outbound Mirroring (Business ![][image1] User):**  
   * **Via App:** If the human replies manually using the Business App, the message is delivered to the user. Crucially, a specific webhook event—smb\_message\_echoes—is sent to the API to inform the backend system that a manual reply has occurred.5 This "Echo" is the heartbeat of synchronization, allowing the AI to know it should stand down.  
   * **Via API:** If the AI replies via the Cloud API, the message is sent to the user and is also "echoed" back to the Business App's chat history.1 This ensures the human agent has a complete transcript of what the bot has promised or explained.

### **2.2 Throughput Constraints: The 20 MPS Limit**

While the Cloud API is theoretically capable of handling massive volumes of messaging traffic (often exceeding 80 messages per second for enterprise tiers), Coexistence imposes a strict physical limitation. To maintain database integrity on the mobile device and ensure that the Business App does not crash under the weight of incoming data, Meta enforces a **Fixed Throughput Limit of 20 Messages Per Second (MPS)** for all numbers in Coexistence mode.1

This limitation is a critical architectural constraint. It implies that Coexistence is designed for *conversational* workloads—customer support, sales inquiries, and moderate-volume notifications—rather than high-frequency broadcasting or massive utility blasts (like nationwide emergency alerts). If a business attempts to push 100 MPS through a Coexistence number, the API will throttle the traffic to protect the mobile app sync.

**Implication for Architects:** When designing a solution for Coexistence, developers must implement a **Token Bucket** or **Leaky Bucket** algorithm in their message queue (e.g., utilizing Redis or RabbitMQ) to govern outbound traffic. The system must release messages at a rate strictly below 20 MPS to avoid rate-limiting errors (HTTP 429\) or desynchronization issues.1

### **2.3 Device Topology and Limitations**

The transition to Coexistence fundamentally alters the device graph of a WhatsApp account. Standard WhatsApp Business accounts support "Companion Mode," allowing up to 4 (or 10 for Meta Verified) linked devices.7 However, the onboarding process for Coexistence triggers a reset of this topology.

* **Unlinking Event:** Upon successful onboarding to the Cloud API, all previously linked companion devices (WhatsApp Web, Desktop) are effectively unlinked and logged out. The business administrator must manually re-link these devices after the transition.1  
* **Operating System Divergence:** Not all companion devices are created equal in the eyes of Coexistence. While standard web and desktop clients support the mirroring of messages, **WhatsApp for Windows** and **WhatsApp for WearOS** have historically faced limitations regarding the smb\_message\_echoes webhook.1 This suggests that the synchronization protocol is heavily optimized for the primary mobile operating systems (Android and iOS) and the web-based protocol, with native desktop apps sometimes lagging in webhook parity.

**Unsupported Features:**

In the pursuit of stability, certain rich features are disabled or stripped when passing through the Coexistence bridge:

* **Group Chats:** The Cloud API does not support Group logic in the same way the App does. Consequently, Group Chats are **not synchronized**.1 The API remains a strictly 1:1 channel.  
* **Ephemeral Content:** Features like "View Once" media and "Live Location" sharing are disabled for 1:1 chats in Coexistence mode.1 This is a privacy and technical safeguard, as the API cannot persistently store or process ephemeral data in a way that complies with the ephemeral nature of the App feature.

## **3\. The Onboarding Odyssey: Embedded Signup & Migration 🚀**

The gateway to Coexistence is **Embedded Signup**. This is the mechanism by which a business grants a Partner (like **Seasalt.ai** or **360dialog**) permission to manage their messaging via the API while retaining their number on the App. It is a precise workflow that requires specific technical flags to succeed.

### **3.1 The "FeatureType" Flag: The Secret Handshake**

For a standard API onboarding, a developer simply launches the Facebook Login flow. However, to trigger the Coexistence flow—which specifically asks the user if they want to keep their existing App history—the developer must inject a specific configuration into the SDK.

The extras object in the Facebook Login configuration must include the featureType parameter set to whatsapp\_business\_app\_onboarding.1

When this flag is present, the onboarding wizard changes its behavior. Instead of forcing the user to delete their account or pick a new number, it presents a screen offering to **"Connect your existing WhatsApp Business account"**.1

### **3.2 The Data Synchronization Window: 24 Hours to Live**

One of the most profound advantages of Coexistence over legacy API migration is **History Preservation**. In the past, moving to the API meant losing all chat history. Coexistence allows the import of the last **6 months** of conversation history.8

However, this is not a permanent state of access. It is a **transient operational window**.

* **The Timer:** Once the user completes the Embedded Signup flow, the Partner (Developer) has exactly **24 hours** to request the initial history sync.1  
* **The Opportunity:** This 24-hour window is critical for AI training. At **Seasalt.ai**, we utilize this window to ingest the historical interactions into our **SeaChat** RAG (Retrieval Augmented Generation) system.3 By analyzing 6 months of human-led conversations, the AI agent can "learn" the business's specific tone, frequently asked questions, and product details before it even sends its first automated message.

**Technical Note:** The history sync includes text and media but excludes privacy-sensitive ephemeral messages. Developers must be prepared with a high-throughput ingestion pipeline (e.g., using **Supabase** or **MongoDB**) to absorb this data spike immediately upon onboarding.9

### **3.3 The Verification Dilemma: Losing the Blue Badge**

A critical "Second-Order Insight" for businesses with high brand equity is the status of the **Official Business Account (OBA)**—the coveted Green Tick or Blue Badge.

* **The Drop:** Documentation confirms that OBA status does **not automatically transfer** from the App to the API.10 When a verified number is onboarded to the Cloud API, it may temporarily lose its badge.  
* **The Recovery:** The business must re-apply for OBA status through the API verification process. This involves submitting press coverage and domain verification again.  
* **Strategy:** Businesses should be advised to have their verification documents ready *before* triggering the migration to minimize the "Trust Gap"—the period where they are unverified.

## ---

**4\. The Webhook Nervous System: Parsing the Pulse 💓**

If Coexistence is the body, **Webhooks** are the nervous system. In a standard API setup, you listen for messages. In Coexistence, you must listen for *state changes* and *echoes*.

### **4.1 The "SMB" Webhook Family**

Meta introduced a specific set of webhook fields prefixed with smb\_ to handle the unique requirements of hybrid accounts.5

| Webhook Field | Payload Description | Strategic Function |
| :---- | :---- | :---- |
| messages | Standard inbound message object. | **The Ear:** Listens for customer queries to trigger the SeaChat AI. |
| smb\_message\_echoes | Outbound message sent via the App. | **The Silencer:** Tells the AI that a human has replied manually. Critical for handover logic. |
| smb\_app\_state\_sync | Contact list updates (adds/edits). | **The Rolodex:** Syncs new contacts saved on the phone to the central CRM/Seasalt.ai dashboard. |
| history | Historical message dump. | **The Memory:** Delivers the 6-month backlog for AI training/RAG ingestion. |

### **4.2 Handling the "Echo" for State Management**

The smb\_message\_echoes webhook is the most distinct feature of Coexistence. It contains the message body and metadata of what the business user typed on their phone.

* **Insight:** This allows for "Shadow Monitoring." Even if the AI is not active, the system can analyze the human's manual replies for quality assurance (QA) or sentiment analysis.  
* **Risk:** If the developer does not subscribe to this field, the AI is blind to the human's actions. The bot might reply to a user *after* the human has already resolved the issue, making the business look disjointed.

### **4.3 Webhook Security and Redundancy**

Because the Coexistence architecture relies on these real-time signals to prevent "Bot-Human Collisions," the reliability of the webhook endpoint is paramount.

* **Architecture:** We recommend a serverless architecture (e.g., AWS Lambda or Google Cloud Functions) to handle webhook ingestion. These functions should do nothing but validate the X-Hub-Signature (security), push the payload to a queue (SQS/PubSub), and return a 200 OK status immediately.11  
* **Reasoning:** If the endpoint takes too long to process the logic (e.g., calling OpenAI API directly within the webhook handler), Meta will timeout the request and retry, potentially causing duplicate processing. Offloading to a queue ensures the 200 OK is sent instantly, keeping the pipe clear.11

## **5\. Routing and The Override Protocol: The Multi-Partner Mesh 🕸️**

As businesses mature, they often outgrow a single software provider. They might want **Seasalt.ai** for their AI Chatbot, **Twilio** for their OTP authentication, and a specialized carrier for Voice. WhatsApp's "Override" architecture makes this possible on a single phone number.

### **5.1 The Webhook Override Hierarchy**

Meta's infrastructure allows for granular routing of webhooks based on a hierarchy of specificity. This is the "Traffic Control" system of Coexistence.13

1. **Level 1: Phone Number Override (Highest Priority)**  
   * **Logic:** "If this specific phone number receives an event, send it to URL X, regardless of what the WABA says."  
   * **Use Case:** A franchise WABA has 50 locations. Location A wants to use SeaChat; Location B uses a legacy system. The override allows Location A's number to route to SeaChat's webhooks without affecting Location B.  
   * **API:** POST /\<PHONE\_NUMBER\_ID\>/subscribed\_apps with override\_callback\_uri.13  
2. **Level 2: WABA Override (Medium Priority)**  
   * **Logic:** "If no phone number override exists, send all events for this WABA to URL Y."  
   * **Use Case:** A brand wants to migrate their entire account to a new provider.  
3. **Level 3: App Default (Lowest Priority)**  
   * **Logic:** "If no overrides exist, send to the URL defined in the App Dashboard."

### **5.2 The Chat vs. Voice Split**

A sophisticated capability of the Cloud API is the ability to separate **Messaging** and **Calling** providers on the same number.

* **The Setup:** A business can connect their number to Partner A (e.g., Seasalt.ai) for messages webhooks and Partner B (e.g., a VoIP provider) for voice webhooks.14  
* **The Benefit:** This allows for a "Best of Breed" stack. The business gets the world-class NLP of SeaChat for text, but the high-fidelity voice termination of a dedicated telecom carrier for calls.  
* **The Configuration:** This is managed by subscribing the respective Apps only to the specific fields they need. App A subscribes to messages; App B subscribes to voice\_status and call\_log.14

## **6\. The Economics of Coexistence: Arbitraging the Hybrid Model 💰**

The Coexistence model introduces a unique economic opportunity: the ability to arbitrage between the "Free" Business App and the "Paid" API. Understanding the **Conversation Categories** is essential for ROI.

### **6.1 The Four Categories of Cost**

As of mid-2025, WhatsApp charges based on 24-hour conversation windows initiated by specific template categories.15

| Category | Description | Cost Profile | Seasalt.ai Optimization Strategy |
| :---- | :---- | :---- | :---- |
| **Marketing** | Promotions, offers, updates. | **$$$ (Highest)** | Use sparingly. Segment audiences via Seasalt.ai to ensure high conversion. |
| **Utility** | Order updates, receipts. | **$$ (Medium)** | Automate via API. Necessary cost of doing business. |
| **Authentication** | OTPs, login codes. | **$ (Lowest)** | High volume, low cost. Critical for security. |
| **Service** | User-initiated inquiries. | **FREE** (mostly) | **The Sweet Spot.** All AI support traffic lives here. |

### **6.2 The Coexistence Arbitrage Strategy**

The true power of Coexistence lies in how these costs interact with the manual App.

1. **Inbound is Free:** When a user messages the business (Service Conversation), the 24-hour window opens. In this window, the business can reply with *free-form* messages.  
   * *App:* Manual replies are free.  
   * *API:* Bot replies are free (no template cost).  
   * *Result:* **SeaChat** can resolve 10,000 support tickets a month for **$0** in WhatsApp fees, provided the user initiates the chat.15  
2. **Outbound Nurture via App:** Marketing templates are expensive. However, in Coexistence mode, a salesperson can send a *manual* follow-up message via the Business App to a warm lead. Since this is a manual 1:1 message from the App, it incurs **no API cost**.16  
   * *Caveat:* This does not scale. It is perfect for closing high-value deals (VIPs), but impossible for mass marketing.  
3. **The 72-Hour Ad Window:** When a user clicks a **Click-to-WhatsApp (CTWA)** ad, the free entry point window is extended to **72 hours**.17  
   * *Strategy:* Use ads to drive traffic. Once they click, SeaChat has 3 days to nurture, qualify, and convert the lead for free.

### **6.3 ROI Calculation Table**

*Scenario: E-commerce store with 5,000 monthly active customers.*

| Operation | Legacy Method (SMS/Email) | Pure API (No Coexistence) | Coexistence \+ SeaChat |
| :---- | :---- | :---- | :---- |
| **Support (Inbound)** | Slow, Email Lag | Fast, Paid Tooling | **Fast, FREE (Service Window)** |
| **Receipts (Utility)** | SMS Costs (\~$0.02/msg) | Utility Rate (\~$0.03/conv) | **Utility Rate (Automated)** |
| **VIP Sales (Outbound)** | Phone Calls (High Labor) | Marketing Rate (\~$0.06/conv) | **FREE (Manual via App)** |
| **Context** | Fragmented | Dashboard Only | **Unified (Phone \+ Web)** |

## **7\. Human-in-the-Loop: The Art of the Handover 🤝**

The "Seasalt.ai" philosophy is built on the seamless transition from AI to Human. In a Coexistence setup, this handover must be technically robust to prevent "Race Conditions" where the bot and human fight for control.

### **7.1 The "Pause" Logic: A Technical Deep Dive**

To implement a conflict-free handover, the backend system must maintain a state machine for every conversation.

**The "Echo" Trigger:**

The most reliable signal for handover is the smb\_message\_echoes webhook.

* *Event:* Human agent sends "Hi there, I can help with this" via the mobile App.  
* *Webhook:* API receives smb\_message\_echoes.  
* *Action:* The backend sets a flag bot\_paused: true and pause\_expiry: timestamp \+ 2 hours in the Redis cache for that phone number.18

**The "Resume" Timer:**

We cannot leave the bot paused forever. The human might go to lunch or forget to close the ticket.

* *Logic:* A background worker (Cron job) checks for expired pause timers. If current\_time \> pause\_expiry and the conversation is inactive, the bot state is reset to active.  
* *Optimization:* Advanced systems allow the human to type a command like \#resume or \#bot in the App to manually reactivate the AI immediately.19

### **7.2 Conflict Resolution: The "Double Reply" Problem**

What happens if the user sends 5 images in 1 second?

* *The Problem:* The API might spawn 5 separate webhook events. If the AI processes them in parallel, it might send 5 separate "Hello, how can I help?" messages. This is a "Race Condition".20  
* *The Fix:* **Debouncing.** The middleware should implement a debounce buffer. When the first message arrives, wait 500ms-1000ms for subsequent messages. Aggregate them into a single context block before sending to the LLM (Large Language Model).11

### **7.3 Seasalt.ai Features: RAG and Context Extraction**

Once the handover happens, the human needs context. They don't want to ask "What is your order number?" if the bot already collected it.

* **Context Extraction:** SeaChat uses NLP to extract entities (Order ID, Email, Intent) from the bot's conversation. These are synced to the Seasalt.ai dashboard and can even be injected into the CRM notes.21  
* **Summarization:** When the human opens the chat, Seasalt.ai can generate a 3-bullet summary of the bot's interaction, displayed as an internal note or system message, ensuring the agent hits the ground running.4

## **8\. The Partner Ecosystem: Navigating the Maze 🧭**

Not all API access is created equal. To enable Coexistence, a business must work with a **Meta Business Partner**. There are two primary models: **Solution Partners** and **Tech Providers**.

### **8.1 Solution Partners vs. Tech Providers**

| Feature | Solution Partner (e.g., 360dialog, Twilio) | Tech Provider (The "ISV" Route) |
| :---- | :---- | :---- |
| **Role** | Full-service provider. Owns the credit line. | Software vendor. Facilitates connection. |
| **Billing** | You pay the Partner; Partner pays Meta. | You pay Meta directly (usually). |
| **Onboarding** | Embedded Signup with Partner's Config. | Embedded Signup with Tech Provider Config. |
| **Limits** | High scaling limits. | Capped at \~200 new customers/week initially.22 |
| **Use Case** | Most businesses needing full support. | SaaS platforms building their own "White Label" WhatsApp. |

### **8.2 Account Structure: Shared WABA vs. OBO**

* **Shared WABA:** The business owns the WABA but "shares" access with the Partner. This is the modern, recommended standard. It gives the business portability; if they fire the Partner, they keep the WABA.23  
* **On-Behalf-Of (OBO):** The Partner owns the WABA "on behalf of" the client. This is a legacy model. It creates "Vendor Lock-in" risks. **Recommendation:** Always insist on a Shared WABA model via Embedded Signup to ensure you own your data and phone number reputation.23

## **9\. Troubleshooting and Edge Cases: The "Overlord's" Guide 🛠️**

Even the best architectures face real-world messy data. Here are the edge cases that haunt developers.

### **9.1 The "Ghost" Conversation**

* *Scenario:* A user messages. The bot is paused. The human agent's phone is off. The user gets silence.  
* *Fix:* Implement an "Out of Office" logic layer in the middleware. If the smb\_message\_echoes (human reply) is not detected within 15 minutes of a handover, the system sends a fallback template: "Our human agents are currently busy. We have received your query and will reply shortly.".18

### **9.2 Block Rate Contagion**

* *Scenario:* A human agent gets aggressive with sales on the App, messaging 50 people who didn't opt-in. Users report/block the number.  
* *Consequence:* The quality rating of the phone number drops to "Low."  
* *Impact:* The **API** is penalized. The throughput for Marketing templates is throttled, or the number is banned entirely.  
* *Lesson:* Coexistence links the fate of the App and API. Bad behavior on the manual side destroys the scalability of the automated side. Strict training for human agents is non-negotiable.24

### **9.3 The "Unverified" Name Display**

* *Issue:* On the API, the "Display Name" is only shown if the number is an Official Business Account (Green Tick). Otherwise, the user just sees the phone number in the chat header.  
* *Contrast:* On the App, the name is often visible from the contact card.  
* *Friction:* Users might trust the App profile (which looks familiar) but be suspicious of the API template (which might look generic).  
* *Fix:* Ensure the profile photo and description are identical on both the App and the WABA settings to maintain visual continuity.25

## **10\. Future Horizons: The Seasalt.ai Roadmap 🔮**

Coexistence is just the beginning. The convergence of Large Language Models (LLMs), Voice AI, and Omni-channel routing is creating a future where the distinction between "App" and "API" will dissolve entirely.

### **10.1 Multi-Agent Orchestration**

We are moving toward systems where a "Router Agent" (powered by a fast model like GPT-4o-mini) sits at the entry point. It analyzes the user's intent and routes the conversation to a "Specialist Agent" (e.g., a Booking Bot, a Support Bot) or a "Human Agent."

* **Seasalt.ai Innovation:** We are building orchestration layers where these agents can "talk" to each other in the backend, passing context JSONs before the user ever sees a reply.26

### **10.2 The Voice-Text Continuum**

With **SeaVoice**, we are integrating voice capabilities directly into the Coexistence flow.

* *Vision:* A user chats on WhatsApp. They hit a stumbling block. The AI sends a message: "Would you like me to call you to explain?" The user clicks "Yes." The SeaVoice agent calls them instantly, referencing the chat context. The call recording is then transcribed and pushed back into the WhatsApp chat as a summary.4

### **10.3 Conclusion: The Open Door**

The era of choosing between the "Human" App and the "Robot" API is over. Coexistence has torn down that wall. It has democratized access to enterprise-grade AI for every business that owns a smartphone.

The technology is complex—webhooks, overrides, JSON payloads, and echo events—but the outcome is simple: **Better conversations.**

At **Seasalt.ai**, we have built the **Seasalt.ai** platform to handle this complexity for you. We manage the routing, the RAG, the rate limits, and the compliance, so you can focus on what matters: connecting with your customers.

Start for free. Keep your phone. Turn on the AI. The future is waiting. ❤️ 🌊 🤖

## **Appendix: Reference Tables**

### **Table A: Feature Comparison Matrix**

| Feature | Legacy Business App | Pure Cloud API | Coexistence (Hybrid) |
| :---- | :---- | :---- | :---- |
| **Messaging Limit** | Unlimited (Manual) | Tiered (1k \- Unlimited) | **Tiered (API) / Unl (App)** |
| **Throughput** | Human Speed | High (80+ mps) | **Capped (20 mps)** |
| **Multi-User** | Limited (Linked Devices) | Unlimited (via Software) | **Unlimited (API) \+ Mobile** |
| **Chat History** | Local Backup | None (Fresh Start) | **6-Month Import** |
| **Group Chats** | Yes | No | **No (App only, no sync)** |
| **Automation** | Basic (Away msg) | Advanced (Bots) | **Advanced \+ Manual Override** |
| **Cost** | Free | Per Message | **Hybrid (App Free / API Paid)** |

### **Table B: Webhook Event Dictionary**

| Event Name | Source | Payload Key | Action Required |
| :---- | :---- | :---- | :---- |
| messages | User | entry.changes.value.messages | **Trigger Bot Reply** |
| smb\_message\_echoes | Business (App) | ...value.statuses (echo) | **Pause Bot (Handover)** |
| smb\_app\_state\_sync | Business (App) | ...value.contacts | **Update CRM Contact** |
| template\_category\_update | Meta | ...value.message\_template\_status\_update | **Update Budget Logic** |

### **Table C: Troubleshooting Guide**

| Symptom | Probable Cause | Solution |
| :---- | :---- | :---- |
| **Bot replies while human is typing** | Missing smb\_message\_echoes subscription | Subscribe to Echoes; Implement Pause logic. |
| **Message history missing after onboard** | 24-hour window expired | **Critical Failure.** History is lost. Retry onboarding if possible. |
| **"Rate Limit Exceeded" errors** | Exceeding 20 mps | Implement Redis Token Bucket in outbound queue. |
| **Green Tick lost** | Migration reset OBA status | Re-submit OBA application with press docs. |
| **Desktop App not syncing** | Unsupported OS (Windows/WearOS) | Use Web Browser or MacOS client for reliable sync. |

#### **Works cited**

1. Onboarding WhatsApp Business app users (aka "Coexistence") \- Meta for Developers, accessed January 28, 2026, [https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/onboarding-business-app-users/](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/onboarding-business-app-users/)  
2. WhatsApp Coexistence \- Use WhatsApp Business App & API on the Same Number, accessed January 28, 2026, [https://wetarseel.ai/whatsapp-coexistence-whatsapp-business-app-api-together/](https://wetarseel.ai/whatsapp-coexistence-whatsapp-business-app-api-together/)  
3. Introduction to SeaChat \- Seasalt.ai, accessed January 28, 2026, [https://wiki.seasalt.ai/seachat/getting-started/01-seachat-intro/](https://wiki.seasalt.ai/seachat/getting-started/01-seachat-intro/)  
4. Welcome to Seasalt.ai, a Collaborative Cloud Contact Center \- Seasalt.ai, accessed January 28, 2026, [https://seasalt.ai/en/blog/18-Seasalt.ai-collab-cloud-contact-center/](https://seasalt.ai/en/blog/18-seax-collab-cloud-contact-center/)  
5. Webhooks | Developer Documentation, accessed January 28, 2026, [https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/overview/](https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/overview/)  
6. How to Manage Automated WhatsApp Bots for Multiple Tenants with Unique Phone Numbers in a Multi-Tenant Application? \- Stack Overflow, accessed January 28, 2026, [https://stackoverflow.com/questions/79271628/how-to-manage-automated-whatsapp-bots-for-multiple-tenants-with-unique-phone-num](https://stackoverflow.com/questions/79271628/how-to-manage-automated-whatsapp-bots-for-multiple-tenants-with-unique-phone-num)  
7. About multi-agent | WhatsApp Help Center, accessed January 28, 2026, [https://faq.whatsapp.com/395911122612120](https://faq.whatsapp.com/395911122612120)  
8. WhatsApp Coexistence: An Ultimate Guide to Use It For WhatsApp Communication \- Zixflow, accessed January 28, 2026, [https://zixflow.com/blog/whatsapp-coexistence/](https://zixflow.com/blog/whatsapp-coexistence/)  
9. AI WhatsApp support with human handoff using Gemini, Twilio, and Supabase RAG \- N8N, accessed January 28, 2026, [https://n8n.io/workflows/11648-ai-whatsapp-support-with-human-handoff-using-gemini-twilio-and-supabase-rag/](https://n8n.io/workflows/11648-ai-whatsapp-support-with-human-handoff-using-gemini-twilio-and-supabase-rag/)  
10. WhatsApp Coexistence \- 360Dialog, accessed January 28, 2026, [https://docs.360dialog.com/partner/waba-management/whatsapp-coexistence](https://docs.360dialog.com/partner/waba-management/whatsapp-coexistence)  
11. Building a Scalable Webhook Architecture for Custom WhatsApp Solutions \- ChatArchitect, accessed January 28, 2026, [https://www.chatarchitect.com/news/building-a-scalable-webhook-architecture-for-custom-whatsapp-solutions](https://www.chatarchitect.com/news/building-a-scalable-webhook-architecture-for-custom-whatsapp-solutions)  
12. WhatsApp cloud API sending old message inbound notification multiple time on my webhook \- Stack Overflow, accessed January 28, 2026, [https://stackoverflow.com/questions/72894209/whatsapp-cloud-api-sending-old-message-inbound-notification-multiple-time-on-my](https://stackoverflow.com/questions/72894209/whatsapp-cloud-api-sending-old-message-inbound-notification-multiple-time-on-my)  
13. Webhook overrides | Developer Documentation, accessed January 28, 2026, [https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/override/](https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/override/)  
14. FAQs | Developer Documentation, accessed January 28, 2026, [https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/faq/](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/faq/)  
15. WhatsApp Coexistence Mode (2026 Guide): Use App & API Together \+ New Pricing, accessed January 28, 2026, [https://chakrahq.com/article/whatsapp-coexistence-all-about-coexistence-mode-pricing-and-how-to-optimize-cost/](https://chakrahq.com/article/whatsapp-coexistence-all-about-coexistence-mode-pricing-and-how-to-optimize-cost/)  
16. WhatsApp Coexistence: Using WhatsApp Business App Number with WhatsApp API \- WANotifier, accessed January 28, 2026, [https://wanotifier.com/whatsapp-coexistence-guide/](https://wanotifier.com/whatsapp-coexistence-guide/)  
17. Pricing on the WhatsApp Business Platform \- Meta for Developers \- Facebook, accessed January 28, 2026, [https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing](https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing)  
18. 14 Nov: Improved human-bot handovers \- Turn.io Learn, accessed January 28, 2026, [https://learn.turn.io/l/en/article/jynv5tspbm-14-nov-inbox-routing-improvements](https://learn.turn.io/l/en/article/jynv5tspbm-14-nov-inbox-routing-improvements)  
19. Best alternative for human handover with AI Agents? : r/n8n \- Reddit, accessed January 28, 2026, [https://www.reddit.com/r/n8n/comments/1ko70xz/best\_alternative\_for\_human\_handover\_with\_ai\_agents/](https://www.reddit.com/r/n8n/comments/1ko70xz/best_alternative_for_human_handover_with_ai_agents/)  
20. \[Bug\]: WhatsApp Channel \- Race Condition creates multiple conversations when starting chat with multiple images (Album) · Issue \#13261 \- GitHub, accessed January 28, 2026, [https://github.com/chatwoot/chatwoot/issues/13261](https://github.com/chatwoot/chatwoot/issues/13261)  
21. Seasalt.ai Integration with WhatsApp \- Seasalt.ai, accessed January 28, 2026, [https://wiki.seasalt.ai/en/seachat/integrations/seax-seachat-whatsapp/](https://wiki.seasalt.ai/en/seachat/integrations/seax-seachat-whatsapp/)  
22. Multi-Partner Solutions | Developer Documentation, accessed January 28, 2026, [https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/multi-partner-solutions/](https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/multi-partner-solutions/)  
23. Difference Between Shared and Non-Shared WhatsApp Business Accounts (WABAs), accessed January 28, 2026, [https://api.support.vonage.com/hc/en-us/articles/21336595205532-Difference-Between-Shared-and-Non-Shared-WhatsApp-Business-Accounts-WABAs](https://api.support.vonage.com/hc/en-us/articles/21336595205532-Difference-Between-Shared-and-Non-Shared-WhatsApp-Business-Accounts-WABAs)  
24. Overview of the WhatsApp Business Platform with Twilio, accessed January 28, 2026, [https://www.twilio.com/docs/whatsapp/api](https://www.twilio.com/docs/whatsapp/api)  
25. About the WhatsApp Business Platform \- Meta for Developers \- Facebook, accessed January 28, 2026, [https://developers.facebook.com/documentation/business-messaging/whatsapp/about-the-platform](https://developers.facebook.com/documentation/business-messaging/whatsapp/about-the-platform)  
26. How to Enable Real-Time Agentic Replies on WhatsApp Using OWL \- Camel AI, accessed January 28, 2026, [https://www.camel-ai.org/blogs/mcp-servers-whatsapp-owl](https://www.camel-ai.org/blogs/mcp-servers-whatsapp-owl)

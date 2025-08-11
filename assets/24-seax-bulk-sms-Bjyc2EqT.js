const e=`---
title: "SeaX Bulk SMS: For Faster, More Effective Customer Outreach"
metatitle: "SeaX Bulk SMS: For Faster, More Effective Customer Outreach"
date: 2022-09-09 11:05:22-07:00
draft: false
author: Amy Chen, Kim Dodds, Sarah Reid
description: "In this blog, we’ll show how SeaX’s Bulk SMS feature allows agents to proactively send outbound messages via text."
weight: 1
tags:
  - SeaX
image: images/blog/24-seax-bulk-sms/thumbnail.png
canonicalURL: /blog/seax-bulk-sms/
url: /blog/seax-bulk-sms/
---


*In our previous blog posts, we walked through some of SeaX’s key features (including [Voice Intelligence](https://seasalt.ai/blog/21-seax-voice-intelligence/), [Knowledge Base](https://seasalt.ai/blog/22-seax-knowledge-base/), and [Case Management](https://seasalt.ai/blog/23-seax-case-management/)) that help agents to better handle incoming calls and messages. In this blog, we’ll show how SeaX’s Bulk SMS feature allows agents to proactively send outbound messages via text, which recipients are shown to open sooner and more consistently than traditional email communications.*

# Table of Contents
- [SMS vs Email](#sms-vs-email)
- [10DLC Standards](#10dlc-standards)
- [SeaX Bulk SMS](#seax-bulk-sms)
    - [Contact Upload](#contact-upload)
    - [Message Composition](#message-composition)
    - [Cost Estimate](#cost-estimate)
    - [Bulk Message Preview](#bulk-message-preview)
    - [Campaign Progress Monitoring](#campaign-progress-monitoring)
    - [Incoming Message Chat](#incoming-message-chat)
- [Closing](#closing)

# SMS vs Email

Email tends to be the de facto mode of communication for most business operations. Until somewhat recently, text messaging (SMS) was not a widely used channel of communication for bulk business messaging, despite its popularity for day-to-day interpersonal communication. However, in recent years, cloud communication providers such as Twilio have made the SMS channel much more accessible to businesses by handling the nitty-gritty of telecommunications infrastructure and service providers in the backend, and providing a simple SMS API as a service to clients. While email may remain the most popular channel for business, SMS can provide a unique complement to traditional email communications.

<center>
<img src="/images/blog/24-seax-bulk-sms/1-pros-cons.png" alt="Some of the Pros and Cons of SMS for business communications."/>

*Some of the Pros and Cons of SMS for business communications.*
</center>

But why use SMS at all if email is proven to be successful? If we take marketing campaigns as an example, the short answer is: while the open rate for an email campaign is only 20%, the average open rate for SMS can be as high as *98%* - not to mention text messages tend to get more responses. In addition, text messages are typically opened within 90 seconds of being received, while emails tend to be opened at around the 90 minute mark. Last but not least, SMS has an average click through rate of around 19%, significantly higher than 3.2% for emails ([source](https://manychat.com/blog/sms-vs-email-marketing-2021/)).

In general, text messages are opened quicker and more frequently than emails - perhaps because texts are always delivered directly to the recipient wherever they are, whether or not they have wifi. Also because SMS is typically used for personal messages, and less frequently for business communications, recipients might view texts as being more important or substantial than emails.

So why isn’t everyone using SMS then?? Well, of course there are pros and cons. Naturally SMS is significantly more expensive than email because it relies on telecommunications infrastructure and service providers (such as Verizon, AT&T, etc) to deliver the messages. Additionally, text messages have a hard limit of about 900 characters and a single attachment (which costs extra, of course). So on the whole, while SMS may be a significantly more effective method of communication, the trade off is that businesses must be more selective of the content they send to make sure they are being cost effective.

That being said, there is no reason SMS and email shouldn’t be used together! Each channel has its own pros and cons, so a business can make sure they’re sending the most effective communications by taking advantage of each channel’s strong suits.

# 10DLC Standards

For high-volume A2P (application-to-person) SMS messaging, US carriers utilize standardized 10-digit long codes, or 10DLC. Before starting a bulk SMS campaign, we recommend you to read more about 10DLC and its applications [here](https://support.twilio.com/hc/en-us/articles/1260800720410-What-is-A2P-10DLC-).

# SeaX Bulk SMS

SeaX’s Bulk SMS service enables you to easily upload your contacts/leads, send out SMS (we support MMS - Multimedia Messages as well) in bulk, and manage incoming responses. Read on to see the few simple steps to start your first bulk SMS campaign.

## Contact Upload

<center>
<img src="/images/blog/24-seax-bulk-sms/2-contact-upload.png" alt="Uploading a list of contacts to SeaX Bulk SMS."/>

*Uploading a list of contacts to SeaX Bulk SMS.*
</center>

The first step is to upload contacts and leads. First, organize the contacts for your SMS campaign in a csv file. In addition to the required fields, \`phone_number\` and \`name\`, you may add other fields and use them in the message body. For instance, you can dynamically change the message body to include the recipient’s name based on the \`name\` field for each contact. 

Next, simply open up Bulk SMS service under SeaX and press “Import” to upload your contacts. We save all your previous contacts in the recipients list so you can easily launch followup campaigns.

## Message Composition

<center>
<img src="/images/blog/24-seax-bulk-sms/3-message-draft.png" alt="Composing a new SMS message with SeaX Bulk SMS."/>

*Composing a new SMS message.*
</center>

The next step is to give your campaign a name and compose the message. Bulk SMS allows you to access all contact information stored in your csv/excel file. For example, if you have a field called \`name\` in the contact list, you can type \`{name}\` in the message and the message will automatically render the name for each contact in the message body.

## Cost Estimate

<center>
<img src="/images/blog/24-seax-bulk-sms/4-cost-estimate.png" alt="Selecting the sending phone numbers and getting and campaign cost estimate with SeaX Bulk SMS."/>

*Selecting the sending phone numbers and getting and campaign cost estimate.*
</center>

Next, choose the phone number that you would like to use to send the outbound messages. If you don’t have a phone number yet, you can click on “Quote for a New Number” at the upper right hand corner to submit a purchase request. Our team can help you buy new 10DLC numbers. 

You can also preview the estimated unit price for the campaign. Be aware that both sending and receiving SMS/MMS cost money so make sure you budget accordingly. 

## Bulk Message Preview 

<center>
<img src="/images/blog/24-seax-bulk-sms/5-preview.png" alt="Previewing a Bulk SMS campaign before sending with SeaX."/>

*Previewing a Bulk SMS campaign before sending.*
</center>

You may preview the bulk messages before sending. It is vital to confirm the message body, recipients’ phone number, and sender’s phone number. Once you launch the campaign, it will not be possible to retract the messages. On this page, you can preview the first 3 messages in your campaign, which corresponds to the first 3 contacts from your list. 

## Campaign Progress Monitoring

<center>
<img src="/images/blog/24-seax-bulk-sms/6-monitor.png" alt="Monitoring the progress of a Bulk SMS campaign with SeaX."/>

*Monitoring the progress of a Bulk SMS campaign.*
</center>

Finally, you can sit back and monitor the campaign progress on the Bulk SMS dashboard. The page automatically refreshes and updates the campaign status. You can view the message delivery statuses, success/delivery rate, estimated costs, as well as response rate on this page.  

## Incoming Message Chat

<center>
<img src="/images/blog/24-seax-bulk-sms/7-chat.png" alt="Addressing incoming responses from a bulk SMS campaign with SeaX."/>

*Addressing incoming responses from a bulk SMS campaign.*
</center>

Just like all SeaX features, we strive to empower agents or campaign managers to handle incoming requests/issues - Bulk SMS allows SeaX to handle outgoing marketing efforts as well. After you launch the campaign, you can manage all incoming responses in the chat window shown below. 

# Closing

Thank you for taking the time to read about how the SeaX Bulk SMS System empowers agents to send outbound communications in addition to handling incoming message requests. Stay tuned for the next segment in our blog series, which will cover some of the management and analytics tools built into the SeaX platform. If you’re interested in learning more right away, fill out our [Book a Demo form](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting) to get a first hand look at the SeaX platform.`;export{e as default};

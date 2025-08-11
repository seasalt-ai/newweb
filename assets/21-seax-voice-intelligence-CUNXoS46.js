const e=`---
title: "Give Your Contact Center Its Own Voice with SeaX Voice Intelligence"
metatitle: "Let Your Contact Center Speak with SeaX Voice Intelligence"
date: 2022-08-02 17:24:00-07:00
draft: false
author: Kim Dodds, Cody Kim, Xuchen Yao, Guoguo Chen
description: "In this blog, we’ll show how Seasalt.ai’s in-house text-to-speech and speech-to-text engines can enhance various aspects of the SeaX platform."
weight: 1
tags:
  - SeaX
image: /images/blog/21-seax-voice-intelligence/thumbnail.png
canonicalURL: /blog/seax-voice-intelligence/
url: /blog/seax-voice-intelligence/
---

*So far in our [SeaX blog series](https://seasalt.ai/tags/seax/), we’ve given you a broad overview of Seasalt.ai’s flagship product: SeaX. We also discussed two key features that set SeaX apart from a traditional call center: first, that SeaX is omnichannel, which means you to more easily interact with customers on any channel, and second, that the platform is a distributed contact center, which allows you to seamlessly route messages and calls from customers around the world to your distributed agents in various locales.*

*Now that we’ve covered the basics of the SeaX platform, we’ll move on to the advanced AI and automation features that set SeaX apart from other distributed omnichannel contact centers. In this blog, we’ll show how Seasalt.ai’s in-house text-to-speech and speech-to-text engines can enhance various aspects of the SeaX platform.*

# Table of Contents
- [Intro to Voice Intelligence](#into-to-voice-intelligence)
- [What Sets Seasalt.ai Apart](#what-sets-seasaltai-apart)
    - [Speech-to-Text](#speech-to-text)
    - [Text-to-Speech](#text-to-speech)
- [TTS and STT in SeaX](#tts-and-stt-in-seax)
    - [Voice IVR](#voice-ivr)
    - [Unavailable Message](#unavailable-message)
    - [Live Transcription](#live-transcription)
    - [And More...](#and-more)

# Intro to Voice Intelligence

Voice Intelligence is the use of Artificial Intelligence to analyze and draw insights from voice-based data. While the previous decade has seen a remarkable development in voice technologies, their use in enterprise settings is still somewhat limited. Companies continue to accrue terabytes of voice data, but in most cases, it is not being used to its full potential.

One reason for this is that voice data is harder to process than other forms of data, such as basic statistics or even plain text data. Speech data is unique in many different ways:
1. It is language dependent, with dialects and accents, so it’s difficult to capture 100% of the information
2. Its quality varies by channels (telephony vs. VoIP, mono vs. stereo), sampling rate (8KHz vs. 16KHz), representational accuracy (8bit, 16 bit, 32bit) and environmental sounds such as background noises
3. It is harder to interpret: from emotions of speech to speaker identification to semantics of meaning

However, when tackled properly with the right tools, voice intelligence can provide massive benefits to the companies that use it. Among other things, being able to properly manage voice data unlocks the ability to use personalized speech-to-text transcription, which can make conversations searchable, indexable & insightful, and allows for further NLP processing downstream. As more data is collected, improvements to these services are also possible, such as: increasing transcription accuracy, increasing coverage of use cases, and providing customizable speech and language models to adapt to new languages and dialects.

# What Sets Seasalt.ai Apart

Seasalt.ai provides Cloud Communication AI technologies and products to enterprise
customers. We have developed in-house speech and language technologies for text messages
and voice calls in enterprise contact centers. Our natural language engine supports a wide
range of both high-resource and low-resource languages: Burmese, Chinese, English, Filipino,
German, Indonesian, Khmer, Lao, Malay, Spanish, Tamil, Thai, Vietnamese, etc.
Seasalt.ai is venture funded and run by a group of world’s leading experts in deep speech
recognition, neural speech synthesis, and natural language dialogues. 

Watch our speech-to-text demo video:
<iframe width="85%" height="450px" src="https://www.youtube.com/embed/Log8usX8ViE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

## Speech-to-Text

<center>
<img src="/images/blog/21-seax-voice-intelligence/STT.png" alt="Speech-to-text graphic."/>
</center>

Our speech-to-text engine takes in speech audio and produces transcriptions in real time. Starting with the audio, we extract phonetic features, convert these features into phonemes, and then map these phonemes to the orthography of the target language. Our current system is capable of transcribing several languages, including English and Chinese, with more languages constantly being added.

Watch our Speech-to-Text customization video to see how Seasalt’s STT engine can be customized for any domain:
<iframe width="85%" height="450px" src="https://www.youtube.com/embed/1YEU6mexzWQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

## Text-to-Speech

<center>
<img src="/images/blog/21-seax-voice-intelligence/TTS.png" alt="Text-to-speech graphic."/>
</center>

Text-to-Speech is the process of synthesizing realistic human speech complete with natural intonation and cadence from only text. Our model takes regular text, translates this text into phonemes and then converts the phonemes into audio while predicting the proper pitch, duration, and volume at each timestep for the most lifelike TTS experience possible. If the final result isn’t perfect, we provide the ability to tune the synthesized audio including word pronunciation, pauses, and emphasis.

Watch our Text-to-Speech customization demo video to see how Seasalt’s TTS engine output can be customized to provide lifelike synthesized speech:

<iframe width="85%" height="450px" src="https://www.youtube.com/embed/GJCOhTtImp8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

You can also check out the [TTS page](https://suite.seasalt.ai/tts) on our website to listen to examples of some of our synthesized voices, including Tom Hanks, David Attenborough, and Reese Witherspoon.

# TTS and STT in SeaX

## Voice IVR

<center>
<img src="/images/blog/21-seax-voice-intelligence/flow.png" alt="Voice IVR flow using Seasalt.ai's speech-to-text engine for real-time transcription and call routing."/>

*Voice IVR flow using Seasalt.ai's speech-to-text engine for real-time transcription and call routing.*
</center>

Voice intelligence can start helping out before calls are even surface to the SeaX platform by making sure that calls are routed to the correct place and collecting important information before handing the call over to an agent. SeaX uses Twilio Studio to customize call and message routing flows. But we can also integrate our speech-to-text engine in the IVR flow to allow the customer to use natural language to route their call (instead of the traditional “press 1 for…” experience). Additionally, if your company is interested in using a chatbot to interact with customers, we can take it one step further by giving your chatbot a voice to talk to customers over the phone using our text-to-speech engine.

## Unavailable Message

<center>
<img src="/images/blog/21-seax-voice-intelligence/unavailable-message.png" alt="SeaX unavailable message configuration using text-to-speech."/>

*SeaX unavailable message configuration using text-to-speech.*
</center>

Our text-to-speech technology also allows for highly customizable voice messages. For example, these can be triggered when a customer calls in after normal business hours, or if the customer needs to be put on hold while they wait for an available agent.

## Live Transcription

<center>
<img src="/images/blog/21-seax-voice-intelligence/live-transcription.jpg" alt="Live call transcription with analytics being displayed to the agent on SeaX."/>

*Live call transcription with analytics being displayed to the agent on SeaX.*
</center>

Once a customer is in a call with an agent, our speech-to-text engine provides accurate real-time transcriptions of the conversation for the agent’s reference. This allows the agent to refer to previous points in the conversation and/or double check their understanding of what the customer said. Additionally, these transcriptions are incredibly useful for downstream applications such as topic extraction, action extraction, summarization, meeting analytics, etc.

## And More...

The above are just a few ways that SeaX integrates advanced voice intelligence to reduce wait times, improve agent performance, and give customers and agents alike an overall seamless experience. To learn about more advanced features that come with the SeaX platform, stay tuned for our next blog posts, which include AI knowledge base, case management, and bulk SMS. To get a personal demo and discuss how the SeaX platform can address your specific business needs, fill out our [Book a Demo form](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting).
`;export{e as default};

const e=`---
title: "From Demo to Success: Pitfalls of Modern Meetings (2/5)"
metatitle: "Demo to Success (2/5): Pitfalls of Modern Meetings"
date: 2021-07-30
draft: false
author: Cody Kim
description: "In the second part of this blog series, follow Seasalt.ai’s journey to creating SeaMeet, our collaborative modern meeting solutions."
weight: 1
tags:
  - SeaMeet
image: images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/SeaMeet animation.gif
canonicalURL: /blog/seameet-voice-and-microsoft-modern-meetings/
url: /blog/seameet-voice-and-microsoft-modern-meetings/
---

*Throughout this blog series, follow Seasalt.ai’s journey to creating a well rounded Modern Meetings Experience, starting with its humble beginnings, to optimizing our service on different hardware and models, to integrating state-of-the-art NLP systems and finally ending on the full realization of SeaMeet, our collaborative modern meeting solutions.*

## Pitfalls of Modern Meetings

Throughout our development, we encountered many unpredictable roadblocks without clear causes or solutions.

### A Quick Start

The first obstacle was getting our tools to work. Azure provided a Modern Meetings sample which we were glad was compatible with Linux, but we found out that using the SDK on Windows to run the demo was much easier -- well, it was a Microsoft product after all. After many failed attempts to get the provided sample to run on Linux, we eventually had to abandon that path and resort to Windows. Finally we had a functional speech transcriber, which was a tremendous start.

### Latency

One issue we experienced was an approximately five second delay in receiving our recognition results on the front end UI. While 5 seconds may seem rather quick, this delay is noticeably a few seconds too slow from being a convenient and practical solution, especially for real-time communication.

<center>
<img src="/images/blog/4-seameet-voice-intelligence-meeting-transcription-pitfalls-of-microsoft-modern-meetings/default_ui.png" style="width:400px;" alt="The default UI for speech transcriptionby the Azure Speech SDK"/>

*The default UI for speech transcription provided by the Azure Speech SDK*
</center>

Latency was also a serious issue in the back end. At the start of each meeting, the results came in real-time (as advertised!) but as the meeting went on, latency would periodically skyrocket to as much as thirty seconds before text appeared on the monitors. By that time, whatever was said has long since become irrelevant in the conversation. After countless tests, we began to notice that the latency changed throughout the day, which we attributed to Azure’s server load at the moment. We are in the business of creating a consistent, reliable product, so these fluctuating and unpredictable delays were unacceptable. All the more reason to rely on our own models and servers.

### Dialect

One particular reason that we used Azure Speech Service in the first place was their broad support of a large variety of languages and dialects. We were particularly excited to make use of Azure Speech Service’s Singaporean English model. But imagine our surprise in discovering that, for the Singaporean dialect, the US English model consistently outperformed the Singaporean English model. Furthermore, even the best model did not live up to real-world challenges.

<center>
<img src="/images/blog/4-seameet-voice-intelligence-meeting-transcription-pitfalls-of-microsoft-modern-meetings/bad_result.png"/>

*Resulting transcription of "Congratulations! Baby boy or baby girl?"*
</center>

We were seeing results like “ola regulations may be boiled baby cool” when the utterance was really “Congratulations! Baby boy or baby girl?”. A well-trained language model should have eliminated such a transcription. While this is an extreme example, more often than not, there would be an error in each transcription. No matter how small the error, such as a missing article or misunderstood word, any mistake is distracting and can easily ruin the reputation of a transcription service.

### Windows Update

Cut to a few weeks later, the team has spent late night after late night ensuring our product was ready for our client demonstration only a few days away. Our meeting transcriber ran smoothly on three separate Windows laptops. Then one day out of nowhere we were knocked down to just one working computer even though no one had touched the code. We tested our networks, checked our firewalls, anything we could think of that would suddenly cause our product to fail. Our last guess was that a surprise Windows update made the Azure Speech SDK become inexplicably incompatible with two of our computers when we compared the three systems bit by bit. With our showcase coming up fast, the stress and the tension were at a breaking point. With only one system left, the team made a pact: no changing the code and absolutely no updates. After this ordeal, we had enough.

### Beyond Modern Meetings

To escape these obstructions, the crew at Seasalt.ai set out training our own acoustic and language models to rival the capabilities of Azure’s conversational transcriber. Throughout the whole process, we kept asking the question, where do we go from here? How can we expand on this already instrumental product?

Modern Meetings demonstrated robust speech to text potential, but that is where it stops. It can listen to us, but what if we can make it think for us. With just transcriptions, while the product is impressive, the applications are somewhat limited. Going from speech transcription towards speech intelligence blows the doors wide open in what we can create. Examples of intelligence include meeting summaries, topic abstraction and action extractions. Finally, designing a beautiful interface to tie everything together in a stunning package.

And this is the story so far, the start of Seasalt.ai’s journey to bringing the best business solutions to a rapidly evolving market and delivering to the world. If you like to know more about the details, please continue to read the rest of blog series.
`;export{e as default};

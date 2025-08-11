const e=`---
title: "From Demo to Success: Implementing Microsoft's Modern Meetings and Beyond (1/5)"
metatitle: "Demo to Success (1/5): Beyond Microsoft's Modern Meetings"
date: 2021-07-19
draft: false
author: Cody Kim
description: "In the first part of this blog series, follow Seasalt.ai’s journey to creating SeaMeet, our collaborative modern meeting solutions."
weight: 1
tags:
  - SeaMeet
image: images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/SeaMeet animation.gif
canonicalURL: /blog/microsoft-modern-meetings/
url: /blog/microsoft-modern-meetings/
---

*Throughout this blog series, follow Seasalt.ai’s journey to creating a well rounded Modern Meetings Experience, starting with its humble beginnings, to optimizing our service on different hardware and models, to integrating state-of-the-art NLP systems and finally ending on the full realization of SeaMeet, our collaborative modern meeting solutions.*

### Future of Modern Meetings

[![Demo of Microsofts speech-to-text service from MS Build 2019](/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/ms-build-play.png)](https://www.youtube.com/watch?t=100&v=EYinMnQWgfU&feature=youtu.be)

At Microsoft Build 2019, Microsoft roused the audience when they unveiled the latest in their cloud computing solutions: the Azure Speech Services, more specifically their Meeting Transcription application. After its introduction, this conversation transcriber immediately landed on everyone’s radar and earned mentions among top tech blogs and periodicals.  The demonstration, illustrated in the video below back in 2019, showed off a lot of muscle from the Azure Speech Services. Little did we know that it quickly became a prelude of how modern meetings would be held in a global pandemic and post-pandemic setting: going from physical to virtual to hybrid.

<center>
<img src="/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/azure-demo.png" alt="Live demo of Microsoft Azure's speech-to-text and speaker identification at MS Build 2019"/>
</center>

Advertised as a conversation transcription platform, Microsoft’s showcase for Azure’s meeting transcription service, aptly introduced as “The Future of Modern Meetings”, established their new service as a robust, efficient speech-to-text (STT) platform suitable for all businesses looking for a way to quickly and neatly capture all of their important conferences. 

What makes this service the pinnacle of meeting transcription? First, Real-time performance. As technology becomes faster and faster, patience grows ever thinner where even a few seconds delay is more than enough to irk the average user. Yet Microsoft proved that their conversation transcriber is more than fast enough, providing accurate transcriptions faster than some closed captioning services, making it completely feasible to follow along with a concurrent conversation with the text alone. 

Next, Microsoft also displayed their speaker identification capabilities. Ending up with a mess of unorganized conversational text is frustrating and useless, but speaker identification automatically labels each utterance with the speaker creating an easily consumable format.

![User interface of Microsoft Azure's speech-to-text and speaker identification](/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/azure-ui.png)

Everyday, computing hardware grows more powerful by the day and companies look to squeeze every last core from the latest CPUs and GPUs. Oftentimes older tech drifts into obsolescence and customers are forced to upgrade every couple of years just to stay relevant in society. In “Future of Modern Meetings”, Microsoft optimized Azure Speech Service to run on consumer-grade hardware while keeping the heavy computation on their end, further expanding the already vast population who can benefit from this service.

Azure’s meeting transcription service stands to optimize the way we conduct business. Every single organization would do well to incorporate a product like this in their workflow. On an average day, information is constantly flowing and every bit is just as significant as the last, whether it’s reminders, tasks, or updates. Too often things get lost in the cracks and that means wasted time and wasted profits. What Microsoft’s solution offers is a complete, automatically generated record delineating exactly what was said and who said it, so gone are the days of missing information and blindly hunting through lengthy audio recordings for a specific section. Now, all the information you need is neatly laid-out for you to reference as often as you need. This technology is more important than ever. If the year 2020 taught us anything it is the need for flexibility, especially in the workplace. People get sick and unforeseen events arise so it is virtually impossible to expect employees to attend every discussion. With Modern Meetings, we are one step closer to being able to accommodate these unexpected developments by essentially giving everyone the ability to be there without actually being there.

### Implementing Modern Meetings

In mid 2020, we received a request for proposal from a government client in Singapore. Yes it was still pandemic. But Singapore had it under control so government meetings still happened in physical conference rooms. They wanted a modern solution that can transcribe speech from up to 12 different speakers. Furthermore, speaker identification would play an important role here.

On speaker identification, one significant difference between what Azure offers and what the client needs is the voice “enrollment”: Azure requires some pre-recorded voice from all the speakers to enroll their voiceprint in the system. However, it is impossible to ask some presumably very important government officials to sit in front of a microphone to be recorded. We did some adaptation to the process by doing unsupervised speaker clustering first (also called speaker diarization). The idea is that if a speaker had spoken once in our system, we would recognize them the next time they speak.

![Flow diagram of Microsoft Azure's speech-to-text and speech identification services](/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/azure-diagram.png)

*The architecture of modern meetings from [Azure Conversation Transcription](https://docs.microsoft.com/en-us/azure/cognitive-services/speech-service/conversation-transcription). In our adaptation, we relaxed the requirement of “User Enrollment” before the meeting to after the meeting.*


Then we quickly assembled our arsenal for the whole project. The first step was to source a high quality microphone array that would deliver crystal clear audio data to our recognition models. We were immediately allured by the Azure Kinect: a stylish, 7 microphone array housed in a full aluminum casing with the added bonus of a high definition camera and depth sensors. 

<center>
<img src="/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/kinect.png" alt="The $400 Azure Kinect DK is used for Modern Meetings"/>

*The $400 [Azure Kinect DK](https://azure.microsoft.com/en-us/services/kinect-dk/) is used for Modern Meetings*
</center>

By the looks alone, this is a truly sophisticated device that would complement any conference room, but more importantly the powerful microphone array promised the quality we were after. With the circular arrangement, the seven microphones opened the possibility of using state-of-the-art signal processing techniques such as source localization and beamforming. This microphone was also the perfect pairing with our backend which utilized Azure’s Speech Services, an established speech-to-text platform giving our product the power it needed to be a top of the line meeting transcriber.

<center>
<img src="/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/kinect-spec.png" alt="The Azure Kinect DK comes with a 7 microphone array to pick up voices"/>

*The Azure Kinect DK comes with a 7 microphone array to pick up voices*
</center>

While Azure did not make the final cut of SeaMeet, it gave us the start we needed to be able to realize our vision. Finally we tied this all together with a user interface. In our first iteration, we made do with a generic, Java-based design that, while plain, was perfectly functional. Because the Kinect device cannot run external code, all this had to run on an extra single Windows laptop. Even though it was a little rough around the edges at first, we were proud to say that we had a fully functional meeting transcription product.

<center>
<img src="/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/seameet-old.png" alt="Initial setup of Seasalt.ai's SeaMeet service using a Microsoft Kinect microphone array"/>

*Implementing Modern Meetings with Azure Kinect and a Windows computer, which runs a simple Java-based UI to show real-time meeting transcription and speaker identification.*
</center>

### Deploying Modern Meetings

In May 2021, our engineers arrived in Singapore to deploy our modern business solution as a proof of concept. Pitted against two other competitor companies, we were each tasked to demonstrate our vision of the future of meetings.

Despite the fact that wireless had become the norm over the last decade, we found that our competitors still opted for a wired solution. As you can see from the picture, each of the 12 speakers were anchored to an individual microphone.. A speaker had to speak directly into the microphone in a close-talk setting for the system to pick up their voice. Not only does this severely hinder flexibility, but such a set up also multiplies the complexity with convoluted AV equipment. Our solution, on the other hand, is fully powered by far-field capabilities, thanks to the 7 microphone array and signal processing algorithms.

To some extent, our solution was very much like “Alexa For Business”: one device covers the whole room, with only a power cable required. Compared to our competitors’ solution, our solution is  generations ahead in the sense that we truly understand the needs of modern businesses while they are still fully strapped into the dated wired generation.

<center>
<img src="/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/poc-setup.png"/>

*PoC conference room setup. There were 12 speakers simulating a 2 hour government meeting.*

<img src="/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/poc-captioned.png"/>

*A closer shot of all the equipment on site.*
</center>

The team was pumped seeing the huge difference. With a few hours of tuning, the final PoC went very smoothly. The team also enjoyed a tour in Singapore after the PoC, in a country where Covid-19 was strictly contained so that life and business ran as usual.

### Beyond Modern Meetings

During our time in Singapore, our thoughts went beyond a successful PoC: compared to other competing solutions, ours was 10x better. But how could we do 10x even better than ourselves? Please follow our steps to the next blog in this series.

`;export{e as default};

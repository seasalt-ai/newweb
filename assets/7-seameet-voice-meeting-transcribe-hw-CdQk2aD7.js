const e=`---
title: "From Demo to Success: Beyond Hardware (5/5)"
metatitle: "Demo to Success (5/5): Beyond Hardware"
date: 2021-09-15 17:24:32-07:00
draft: false
author: Cody Kim
description: "In the last part of this blog series, follow Seasalt.ai’s journey to creating SeaMeet, our collaborative modern meeting solutions."
weight: 1
tags:
  - SeaMeet
image: images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/SeaMeet animation.gif
canonicalURL: /blog/seameet-voice-hardware/
url: /blog/seameet-voice-hardware/
---

*Throughout this blog series, follow Seasalt.ai’s journey to creating a well rounded Modern Meetings Experience, starting with its humble beginnings, to optimizing our service on different hardware and models, to integrating state-of-the-art NLP systems and finally ending on the full realization of SeaMeet, our collaborative modern meeting solutions.*

## Beyond Modern Meetings

Here at Seasalt.ai, we admired the current abilities shown from the Build 2019 demo this product, but we are more interested in seeing what this product could become, how to take conversation transcribing beyond mimicry. But before you can beat the competition you first need to intimately understand the game you are playing. And just like that SeaMeet was born. In its infancy we looked towards Azure as a model to grasp the foundations of what makes a solid transcription service and used Azure speech services as our backend to utilize this established technology. 

Just as with any young product, challenges emerged immediately. Eager to kick off our product, we opted to use Microsoft’s Kinect DK microphone array, promoted as the hardware-counterpart to the speech services and supposedly tuned to get the most optimal performance from Azure’s automatic speech recognition models. While an undeniably well-constructed, well-designed device, it comes with a  full aluminum housing, a wide angle lens, a depth camera, and 7-microphone array. It also carries a hefty price tag at just shy of $400. Starting in April 2021, the Kinect DK had a serious understock issue. It is still out of stock as of writing today in September 2021.  This further reinforced that the Kinect is not the device for us.  

<center>
<img src="/images/blog/7-seameet-voice-intelligence-meeting-transcription-hardware/kinect_store_page.png"/>

*The Azure Kinect DK had been out of stock since 2021/4 by the time this article was published (2021/9)*
</center>

The microphone array is the first component in the conversation transcription pipeline. As purveyors of a transcription service, we need to be able to sustainably and reliably source our hardware. 

Our journey to find the perfect microphone array led us to two options: the [Respeaker Array v2.0](https://www.seeedstudio.com/ReSpeaker-Mic-Array-v2-0.html) and the [Respeaker Core v2.0](https://www.seeedstudio.com/ReSpeaker-Core-v2-0.html). Both of these devices are circular arrays, four and six microphones respectively, which is a crucial feature to be able to perform 360 degree source localization and allow us to easily integrate these new devices into our existing system. The real beauty of these devices is that they come with on-board signal processing algorithms including denoising, echo cancellation, and beamforming that are perfectly tuned to the dimensions of the mic.

<center>
<img src="/images/blog/7-seameet-voice-intelligence-meeting-transcription-hardware/respeaker_array.png" alt="Respeaker Array v2.0 demonstrating VAD and source localization"/>

*Respeaker Array v2.0 demonstrating VAD and source localization*
</center>

<center>
<img src="/images/blog/7-seameet-voice-intelligence-meeting-transcription-hardware/array_demo.jpg" alt="Live meeting demo with the Respeaker Array v2.0"/>

*Live meeting demo with the Respeaker Array v2.0*
</center>

For the four microphone Array v2.0, which was completely powered by a USB port, this meant the user’s computer only had to focus on streaming the audio to the server. This offloads the signal processing to the microphone array.


<center>
<img src="/images/blog/7-seameet-voice-intelligence-meeting-transcription-hardware/core_demo.png" alt="Respeaker Core v2.0 pictured with demo"/>

*Respeaker Core v2.0 pictured with demo*
</center>

Even more compelling is the Core v2.0 equipped with an ARM processor and 1GB RAM. Capable of running a full Linux distribution and with more than enough processing power to run our client script, not only have we offloaded the processing from the user’s computer with this device, we have completely removed the need to have a computer connected to the microphone. Because the microphone arrays are now doing the heavy processing, we diminished the hardware requirements needed to run our product and therefore effectively increased our audience that can benefit from SeaMeet.

<center>
<img src="/images/blog/7-seameet-voice-intelligence-meeting-transcription-hardware/respeaker_core.png" alt="Core v2.0 example of standalone microphone placement"/>

*Core v2.0 example of standalone microphone placement*
</center>

Another unique characteristic of these microphone arrays is their lack of housing. Both are shipped as bare PCB’s with the mics, chips and ports all exposed. While many will see this as an inconvenience, we see an opportunity to create a truly one of a kind device that is unmistakably Seasalt’s.

    With these devices, we tie the knot on our prototype of SeaMeet, our brand new, state-of-the-art meeting transcription service.  And with this we conclude our five part series, starting when SeaMeet was nothing but a seed inspired by a Microsoft demo, and ending with a fully independent product. Still in its early stages, SeaMeet has an exciting journey ahead as we continue polishing our diarization system, meeting sense, and language models. The team at Seasalt.ai is eager to continue to revolutionize the way the world conducts business.
`;export{e as default};

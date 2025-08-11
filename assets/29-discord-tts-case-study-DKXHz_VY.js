const e=`---
title: "Text-to-Speech on Discord: A TTS Discord Bot Case Study"
metatitle: "Text-to-Speech on Discord: A TTS Discord Bot Case Study"
date: 2022-12-27 17:04:20-08:00
author: Kim Dodds
description: "In this blog we’ll discuss our findings on how real Discord users utilize our services after reviewing several months of authentic text-to-speech data."
weight: 1
tags:
  - SeaVoice
  - Discord
image: images/blog/29-tts-case-study/discord-tts-accessibility.jpg
url: /blog/discord-tts-case-study/
---


*After launching SeaVoice, one of the fastest and most accurate text-to-speech and speech-to-text bots on Discord, we wanted to understand how users were actually interacting with the services. In this blog we’ll discuss our findings after reviewing several months of real text-to-speech user data.*

# SeaVoice: A Text-to-Speech & Speech-to-Text Discord Bot

Discord, being a platform primarily used for a combination of audio and text-based chatting, is a fantastic testing ground for voice intelligence and natural language processing services.
We deployed the SeaVoice Bot, equipped with text-to-speech and speech-to-text commands, to Discord in August of 2022.
To learn more about how the bot works, or see a short video demo, you can visit the [SeaVoice Discord Bot Wiki](https://wiki.seasalt.ai/seavoice/discord/6-community/).
In November of the same year, we released a new version with significant backend improvements (as described in our previous blog post: [SeaVoice Discord Bot: Backend & Stability Improvements](https://seasalt.ai/blog/27-seavoice-discord-backend-improvements/)) that allow us to record anonymous data on how users are interacting with the SeaVoice bot.
In this blog we’ll take a look at 1 month of user data from the text-to-speech command.

## SeaVoice TTS Usage

<center>
<img src="/images/blog/29-tts-case-study/discord-tts-usage.jpg" alt="SeaVoice Discord Bot daily text-to-speech usage over 7 weeks."/>

*SeaVoice Discord Bot daily text-to-speech usage over 7 weeks.*
</center>

At the time of writing, the SeaVoice Bot has been added to nearly 800 servers!
Since we started recording the usage data in November, we’ve found that the total number of requests per day can fluctuate from as little as 150 to over 1,300 (with an average of about 560).
About 650 users have actually tried out the TTS command at least once.
However, most users do not continue using it regularly after trying it out.
Of those 650 users who tried the TTS command, about 200 used it 20 or more times, and only 100 used it 50 or more times.
That being said, those who do enjoy and rely on the TTS command use it extensively!
Our top 5 users have submitted over 1,000 requests each in the last two months, and the top user has submitted nearly 2,500 requests alone!

## Observations

### Why People Use Text-to-Speech

<center>
<img src="/images/blog/29-tts-case-study/why-mute-on-discord.jpg" alt="Reasons SeaVoice Discord Bot users utilize text-to-speech."/>

*Reasons SeaVoice Discord Bot users utilize text-to-speech.*
</center>

So our first question after seeing the usage data is: **why are the frequent users utilizing the TTS in the first place?**
We looked through the database to find some explanations.
The following are real TTS commands from some of our users.

__*Why aren't you talking?*__

    - also I can’t talk cuz I’m eating
    - I would actually talk, but I am at work at the moment.
    - if I talk then I wake my family up
    - sorry, not gonna be talking too much. throat hurts really bad.
    - i’d be able to talk but my mom is here
    - i am too lazy to talk today
    - i can't talk because i'm sick but i wanted to hop in anyway :)
    - not fully mute, just takes effort to talk. A lot of effort somedays
    - sorry I’m muted my grandma is talking over the phone and it’s loud
    - Because my mic was broken

After finding these explanations we can summarize it into a few main reasons:
- there is a physical barrier (broken mic, difficulty speaking, illness etc.),
- they’re busy doing something else (eating, at work, etc.),
- their environment is too loud or they need to be quiet, or
- because it’s convenient and they like using it.

But regardless of the exact reason they use the TTS service, many users expressed excitement that they were able to participate in the voice channel conversations when they otherwise would not be able to.
We believe that the TTS service makes Discord voice channels more accessible, and that is the main reason our regular users keep utilizing the service.

### Language Usage

One thing that stood out to me while reviewing the conversations, was that many users tried using the text-to-speech command with different languages.
While some users just wanted to see if it would work or thought the pronunciation was funny, others however, continued to use the TTS in non-english languages for extended periods of time! 

<center>
<img src="/images/blog/29-tts-case-study/discord-spanish-tts-test.png" alt="A user tests out the Spanish pronunciation of the English SeaVoice TTS model."/>

*A user tests out the Spanish pronunciation of the English SeaVoice TTS model.*
</center>

This was particularly the case with Spanish speakers even though (as the user above notes) the TTS performance is not good for Spanish, as the model is only trained on English.
I started noting down any time I encountered a user trying to use the TTS command on a language other than English.

<center>
<img src="/images/blog/29-tts-case-study/discord-non-english-tts.jpg" alt="Count of attempts to send non-English requests to TTS."/>

*Count of attempts to send non-English requests to TTS.*
</center>

The table above shows a count of every conversation I found that had at least one instance of someone using the corresponding language in the TTS command.
Obviously, Spanish by far the most common, and paired with the fact that many users continued to use the TTS function in Spanish even though the performance was poor, makes me wonder if there is no viable alternative already existing on Discord for Spanish TTS.
In either case, people are trying to use our TTS service for other languages, so we can keep track of which languages are in the most demand and use this data to inform our training of new models.

### Commentary about the Bot

Another interesting topic found in the logs was commentary about the bot itself.
Thankfully, we saw several very positive comments about the bot and its performance. 

<center>
<img src="/images/blog/29-tts-case-study/discord-tts-inclusive-accessibility-user-comment.png" alt="A user comments that the bot makes them feel more included."/>

*A user comments that the bot makes them feel more included.*
</center>

The most touching comments were from those who felt excluded from voice channels, but are now able to participate thanks to the added accessibility the bot provides. 

We also found several bits of constructive feedback. 

<center>
<img src="/images/blog/29-tts-case-study/discord-tts-speed.png" alt="A user comments that the speed of the TTS is an issue."/>

*A user comments that the speed of the TTS is an issue.*
</center>

One user mentioned that, because users will first need to type the whole sentence and then send it out, the TTS is slower than just normal speaking, so sometimes their TTS utterance is spoken a little late in the conversation.
As mentioned in the previous section, we also saw requests for additional language support as well as one user who hoped to be able to translate between languages using the bot.
Keeping an eye on this kind of feedback will help us plan and improve features moving forward.

### Novelty

After skimming through the entire collection of TTS commands, I would say that about two-thirds of the utterances are used in general conversations with friends and other folks in the server.
Most people are playing games and just chatting with their friends, and these users tend to be the ones that use the TTS service regularly.
On the other hand, the remaining one-third of the utterances fall into the category of “just messing around”.
When you are given complete power to make a voice say whatever you want, I believe it’s human nature to pick the silliest or most obscene thing you can think of just for the laughs.
I remember sitting in the elementary school computer lab and being entertained for hours on end by Microsoft Sam (very high tech at the time), seeing if we could make it say things like “poop” or “butt”.
Well, I suppose kids like me grew up, gained a more rich vocabulary, and ended up finding the same entertainment with our TTS service on Discord. 

<center>
<img src="/images/blog/29-tts-case-study/discord-tts-stress-test.png" alt="Examples of strange TTS requests sent by users."/>

*Examples of strange TTS requests sent by users.*
</center>

Sometimes users just try and break the bot by typing things like: excessively long strings, special characters, emojis, URLs, etc.
This is a classic example of people testing the limits of the software, and actually helps us make sure that our services are robust and can handle any input users throw at it.

Other times, users find entertainment by making the TTS service say the most obscene and offensive things they can come up with.
In the TTS logs I think I saw every swear word I know (and maybe some I’ve never heard before), racial slurs, and explicit sexual content.

## The Matter of Ethics

Unfortunately there are many ways that a text-to-speech application can be used disagreeably: such as to promote hate speech or cyberbully.
Additionally, while the audio clips are synthesized from a model, the data to train the model comes from a real person and the output from a good model can sound almost indistinguishable from the original.

So these points, paired with how we’ve seen real users use (or abuse) our TTS service, brings up some very important questions for Seasalt.ai as a company and the SeaVoice Discord Bot:

- *Do we as a company want our product to be used in potentially offensive or harmful ways?*
- *What rights to voice actors have over how their voice is utilized in text-to-speech applications?*
- *Do we have the right or responsibility to censor how our service is used?*

These are questions that cannot be answered, or even fully explored, in a single blog post.
However the company feels an obligation to continually consider these issues as we move forward with our Discord project and continue working with our voice actors.

Thank you for your interest in our Discord Bot and Voice Intelligence projects! You can learn more about our STT product on our [Speech-to-Text Homepage](https://suite.seasalt.ai/tts). For a one-on-one demo of any of our Voice Intelligence products, fill out the [Book a Demo Form](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting).

On the Discord side, you can learn more about our bot and add it to your server from the [SeaVoice Discord Bot Wiki](https://wiki.seasalt.ai/seavoice/discord/6-community/). Also feel free to join our [Official SeaVoice Discord Server](https://discord.gg/dfAYfwBQ).

<center>
<iframe src="https://discordapp.com/widget?id=919037515514654721&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
</center>
`;export{e as default};

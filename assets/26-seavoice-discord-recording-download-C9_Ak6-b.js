const e=`---
title: "SeaVoice STT/TTS Discord Bot: The First to Provide Downloadable Voice Recording with AI Transcriptions"
metatitle: "SeaVoice STT/TTS Discord Bot: Recording Downloads"
date: 2022-12-13 11:51:16-08:00
draft: false
author: Sydney Burgess, Kim Dodds, Drake Farmer, Jack Harvison, Dylan Strong, Cody Vernon
description: "With the latest release, SeaVoice Discord Bot is the first on the platform to offer downloadable voice channel recordings with AI-generated transcriptions."
weight: 1
tags:
  - SeaVoice
  - Discord
image: images/blog/26-discord-download/seavoice-discord-audio-transcript-download.jpg
url: /blog/seavoice-discord-recording-download/
---

*The SeaVoice Discord Bot has been gaining popularity as one of the best options for transcribing speech in Discord voice channels. With the newest release, the bot is the first on Discord to offer downloadable voice voice channel recordings with AI-generated transcriptions.*

# Downloadable Audio and Transcript Files on Discord: Exciting New Features in SeaVoice's Latest Bot Release

Hey everyone, we are excited to announce a new feature for the SeaVoice Discord bot! 

<center>
<img src="/images/blog/26-discord-download/1-seavoice-discord-speech-to-text.png" alt="SeaVoice Discord Bot transcribing speech from a voice channel in real-time."/>

*SeaVoice Discord Bot transcribing speech from a voice channel in real-time.*
</center>

Since release, the SeaVoice Discord Bot has had two main capabilities: it transcribes conversations using highly accurate speech-to-text technologies and can synthesize speech based on user inputs.
It has quickly been growing in popularity and is now in over 700 servers world wide just shortly after being launched.

As a team we discussed different ways to make the bot more useful and accessible for users.
We decided that providing a recording and transcript of sessions would be useful for logging meetings, saving play sessions, and a number of other situations.

## Transcription & Audio Download Overview

<center>
<img src="/images/blog/26-discord-download/2-seavoice-audio-transcript-download-discord-direct-message.png" alt="SeaVoice Discord Bot sends a DM with transcription and audio downloads after each session."/>

*SeaVoice Discord Bot sends a DM with transcription and audio downloads after each session.*
</center>

Over the last few months our team has been working hard to bring this idea to reality.
Now when you bring the bot into your call to transcribe your conversation with the \`/recognize\` command, it will also record the call and persist the transcriptions behind the scenes.
When you ask the bot to leave, everyone that participated in the call will receive a direct message from the bot that contains a full transcription and a recording of the call.

<center>
<img src="/images/blog/26-discord-download/3-seavoice-discord-audio-download.png" alt="Clicking the link from SeaVoice Discord Bot opens a webpage to preview and download the audio recording."/>

*Clicking the link from SeaVoice Discord Bot opens a webpage to preview and download the audio recording.*
</center>

There will be a link to download the full recording in mp3 format.
This is a single track recording, so speech from all users will be in the same file.
The audio processing for this can take a bit of time, so please allow a few seconds for the bot to send the link, perhaps up to a couple minutes for more lengthy conversations. 

<center>
<img src="/images/blog/26-discord-download/4-seavoice-discord-transcription-file.png" alt="Downloadable transcription file sent by SeaVoice Discord Bot."/>

*Downloadable transcription file sent by SeaVoice Discord Bot.*
</center>

The transcription is in the form of a text file and includes timestamps for the start and end of each thing that was said, as well as the username of the person that said it.
This should make it easy for members of your server to keep track of calls, and will be helpful for logging project meetings as well as play sessions.

## Challenges

It should also be noted that we had quite a challenge wrangling the audio, as Discord sends each user's audio separately and without any silence included.
So please keep in mind that there may still be a few issues to iron out, and we will continue improving this feature to make the final recordings as accurate as possible!
If you run into any problems with your recordings or transcriptions please let our team know on the [Official SeaVoice Discord Server](https://discord.gg/dfAYfwBQ).
<center>
<iframe src="https://discordapp.com/widget?id=919037515514654721&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
</center>

## Future Directions

With this challenging feature finally ready for release, our team is already planning our next additions to the bot.
Some things we are looking into for the future are allowing customizable configurations for servers and/or users for things such as: how they want recordings to be handled, the format of the transcript file, if/when to play a recording disclaimer, default channel to output transcriptions, etc.
We would love to hear any suggestions you have for new features (or how to improve existing ones) on our [Official SeaVoice Discord Server](https://discord.gg/dfAYfwBQ).

## Try it out!

In the meantime you can invite the [SeaVoice Discord Bot](https://discord.com/oauth2/authorize?client_id=1001955060210749492&scope=bot) to your server and try it out for yourself.
Feel free to read up on the [SeaVoice Bot documentation](https://wiki.seasalt.ai/seavoice/discord/discord-bot/) as well to see how you can use the bot to best fit your community's needs.


We hope that these new features help you with anything that you use the bot for and that you have fun using them!


Cheers,


The SeaVoice Bot Team
`;export{e as default};

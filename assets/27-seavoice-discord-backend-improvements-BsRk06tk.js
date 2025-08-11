const e=`---
title: "SeaVoice STT/TTS Discord Bot: Backend & Stability Improvements"
metatitle: "SeaVoice STT/TTS Discord Bot: Backend & Stability Improvemen..."
date: 2022-12-13 11:58:34-08:00
draft: false
author: Sydney Burgess, Kim Dodds, Drake Farmer, Jack Harvison, Dylan Strong, Cody Vernon
description: "With the latest release, SeaVoice Discord Bot launches massive backend improvements which improve bot stability and future development."
weight: 1
tags:
  - SeaVoice
  - Discord
image: images/blog/27-discord-backend-improvements/seavoice-discord-stt-tts-bot-backend-improvements.jpg
canonicalURL: /blog/seavoice-discord-backend-improvements/
url: /blog/seavoice-discord-backend-improvements/
---


*The SeaVoice Discord Bot has been gaining popularity as one of the best options for transcribing speech in Discord voice channels. With the newest release, we're launching massive backend improvements which improve bot stability and aid with future development.*

# SeaVoice Remembers: Database Online!

Hello everyone, lately we’ve been working on some stuff behind the scenes for the SeaVoice Discord Bot that we’d like to share!

As you saw in our previous blog post, we added a lot of features for the SeaVoice Bot, such as our new call recordings and transcriptions.
Alongside these developments we have given the SeaVoice Discord Bot the ability to remember what it has done: everything from commands to error logging.
Now when you have the bot speak to you, or use it to record a call, all that information is saved in an organized manner.

## What This Means for Users
Now what does this mean for you, you might ask?


Well to start, our new transcription and audio download feature would not be possible without these backend improvements! We can also now store any unfortunate crashes you experience automatically so our development team can start fixing these issues before you even notice them. Additionally, if anyone decides they no longer want their data stored in our system, this new organization allows us to quickly find, retreive, and/or remove any data by server, channel, user, date, etc.


What's more, this opens the door for new features such as statistics tracking, auto-moderation, and more.
Moderators, would you like to make sure that your server rules are being followed or check how often the bot is used in your server?
Maybe you want to pull up that hilarious conversation you had last week?
With the database framework now firmly in place and used in the production bot, a wide variety of new features are more easily within reach.

## Data Privacy

Naturally whenever we're discussing saving user data, there is the question of data privacy and security. Here are a few key points about how we handle your data:
- All user data is stored on a secure remote server, which only a select few Seasalt.ai employees can access
- SeaVoice only records data provided by Discord data provided by users when interacting with the SeaVoice bot; that includes:
    - Server, Channel, User name & id
    - Text entered into the \`/speak\` command
    - Audio spoken in a voice channel while the bot is performing the \`/recognize\` command
- This data will only be used by Seasalt.ai to improve services
- You can request that any or all of your data is removed at any time

For full details, please refer to the [Seasalt.ai Privacy Policy](https://seasalt.ai/privacy/).

## Future Directions

A lot of this portion of the update won’t be noticeable, but for us the hard part is over, and now we can begin working on projects that allow you to customize and use SeaVoice Discord Bot even more than you thought possible.
One feature on the horizon is customizable server and/or user configurations.
With the database in place, this will allow us to save preferences in the future, such as whether you want to be reminded a voice chat is being recorded, who receives the download link to a call transcription, or who wants to opt-out of being recorded.


Have any ideas you would like to see added now that we can save data? Feel free to shoot us some suggestions over on [Official SeaVoice Discord Server](https://discord.gg/dfAYfwBQ)!

<center>
<iframe src="https://discordapp.com/widget?id=919037515514654721&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
</center>

## Try it out!

Any if you haven't tried out the latest release of the SeaVoice Bot yet, go give it a try! Invite the [SeaVoice Discord Bot](https://discord.com/oauth2/authorize?client_id=1001955060210749492&scope=bot) to your server.
Feel free to read up on the [SeaVoice Bot documentation](https://wiki.seasalt.ai/seavoice/discord/discord-bot/) as well to see how you can use the bot to best fit your community's needs.


Stay tuned for some exciting updates coming down the pipeline!


Thanks,


The SeaVoice Bot Team.
`;export{e as default};

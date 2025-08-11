const e=`---
title: "User has left webchat: use Near Me Messaging to push a message to them!"
metatitle: "User has left webchat: get in touch with Near Me Messaging!"
date: 2022-12-25 12:48:52-08:00
draft: false
author: Xuchen Yao
description: "Near Me Messaging solves one problem of webchat: get back in touch with your user even *after* they’ve left the conversation."
weight: 1
tags:
  - NearMe
image: images/blog/28-use-near-me-messaging-to-recover-lost-webchat/near-me-messaging-google-business-messages-recover-webchat.png
canonicalURL: /blog/use-near-me-messaging-to-recover/
url: /blog/use-near-me-messaging-to-recover/
---

On the Christmas morning of 2022, I woke up to a few messages left from a user named Henry. By the time I got to the messages, Henry had already left. All I got was the messages he sent through webchat, and his name.

(Later It turned out that Henry is based in Nigeria and in a totally different timezone. When I video chatted with him, I can literally see the sweat on his face, in contrast to the freezing cold Seattle weather.)

Luckily the webchat on Seasalt.ai website is through Near Me Messaging (Update: We've since pivoted the product to be an omni-channel chatbot builder. Now called [SeaChat](https://chat.seasalt.ai/?utm_source=blog)!). The backend is powered by Google Business Messages, which gives you the nice feature of pushing a message to the user’s phone within 30 days after they first contacted you. In contrast, Facebook only gives you a [24 hour window](https://developers.facebook.com/docs/messenger-platform/policy/policy-overview/) to contact a user once they initiate a conversation with your Messenger bot.

For the technically curious users, this is enabled by the Google Play Services framework installed on users’ phones. Thus as long as they have Google on their phone, you can always reach them.

So the verdict: Near Me Messaging provides a great feature to capture lost prospects.

What’s a better Christmas gift for a business than a recovered prospect and a fun chat with them on another continent?
`;export{e as default};

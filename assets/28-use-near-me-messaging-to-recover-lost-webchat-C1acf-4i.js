const e=`---
title: "Benutzer hat den Webchat verlassen: Verwenden Sie Near Me Messaging, um ihm eine Nachricht zu senden!"
metatitle: "Benutzer hat den Webchat verlassen: Nehmen Sie mit Near Me Messaging Kontakt auf!"
date: 2022-12-25 12:48:52-08:00
modified_date: 2025-07-28T16:03:25.123456
draft: false
author: Xuchen Yao
description: "Near Me Messaging löst ein Problem des Webchats: Nehmen Sie auch *nachdem* der Benutzer das Gespräch verlassen hat, wieder Kontakt mit ihm auf."
weight: 1
tags:
  - NearMe
image: images/blog/28-use-near-me-messaging-to-recover-lost-webchat/near-me-messaging-google-business-messages-recover-webchat.png
canonicalURL: /blog/use-near-me-messaging-to-recover/
url: /blog/use-near-me-messaging-to-recover/
---

Am Weihnachtsmorgen 2022 wachte ich mit ein paar Nachrichten von einem Benutzer namens Henry auf. Als ich zu den Nachrichten kam, war Henry bereits gegangen. Alles, was ich bekam, waren die Nachrichten, die er per Webchat geschickt hatte, und sein Name.

(Später stellte sich heraus, dass Henry in Nigeria lebt und in einer völlig anderen Zeitzone ist. Als ich mit ihm per Video-Chat sprach, konnte ich buchstäblich den Schweiß auf seinem Gesicht sehen, im Gegensatz zum eiskalten Wetter in Seattle.)

Glücklicherweise erfolgt der Webchat auf der Seasalt.ai-Website über Near Me Messaging (Update: Wir haben das Produkt inzwischen zu einem Omni-Channel-Chatbot-Builder weiterentwickelt. Jetzt heißt es [SeaChat](https://chat.seasalt.ai/?utm_source=blog)!). Das Backend wird von Google Business Messages unterstützt, was Ihnen die nette Funktion bietet, eine Nachricht an das Telefon des Benutzers zu senden, innerhalb von 30 Tagen, nachdem er Sie zum ersten Mal kontaktiert hat. Im Gegensatz dazu gibt Ihnen Facebook nur ein [24-Stunden-Fenster](https://developers.facebook.com/docs/messenger-platform/policy/policy-overview/), um einen Benutzer zu kontaktieren, sobald er eine Konversation mit Ihrem Messenger-Bot initiiert.

Für die technisch neugierigen Benutzer wird dies durch das auf den Telefonen der Benutzer installierte Google Play Services-Framework ermöglicht. Solange sie also Google auf ihrem Telefon haben, können Sie sie immer erreichen.

Das Urteil lautet also: Near Me Messaging bietet eine großartige Funktion, um verlorene Interessenten zu erfassen.

Was ist ein besseres Weihnachtsgeschenk für ein Unternehmen als ein wiederhergestellter Interessent und ein lustiger Chat mit ihm auf einem anderen Kontinent?`;export{e as default};

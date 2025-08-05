---
title: "Utilizatorul a părăsit chat-ul web: Folosiți 'Mesajele din apropiere' pentru a le trimite mesaje!"
metatitle: "Utilizatorul a părăsit chat-ul web: Folosiți 'Mesajele din apropiere' pentru a vă reconecta!"
date: 2022-12-25T12:48:52-08:00
author: Xuchen Yao
description: "'Mesajele din apropiere' rezolvă o problemă cu chat-ul web: vă puteți reconecta cu utilizatorii chiar și *după* ce au părăsit conversația."
tags: ["NearMe"]
image: "images/blog/28-use-near-me-messaging-to-recover-lost-webchat/near-me-messaging-google-business-messages-recover-webchat.png"
weight: 1
draft: false
canonicalURL: "/blog/use-near-me-messaging-to-recover/"
url: "/blog/use-near-me-messaging-to-recover/"
modified_date: 2024-12-19T10:30:00Z
---

În dimineața de Crăciun din 2022, m-am trezit cu câteva mesaje lăsate de un utilizator numit Henry. Când am văzut aceste mesaje, Henry plecase deja. Am primit doar mesajele pe care le-a trimis prin chat-ul web și numele său.

(Mai târziu am aflat că Henry era în Nigeria, cu o zonă de timp complet diferită. Când am făcut chat video cu el, puteam vedea clar sudoarea pe fața sa, în contrast cu frigul din Seattle.)

Din fericire, chat-ul web de pe site-ul Seasalt.ai este implementat prin "Mesajele din apropiere" (actualizare: mai târziu am transformat acest produs într-un constructor de chatbot-uri omnichannel. Acum se numește [SeaChat](https://chat.seasalt.ai/?utm_source=blog)!). Backend-ul este alimentat de Google Business Messages, care vă oferă o funcție grozavă de a trimite mesaje push pe telefonul utilizatorilor în 30 de zile după ce v-au contactat pentru prima dată. În comparație, Facebook vă oferă doar o [fereastră de 24 de ore](https://developers.facebook.com/docs/messenger-platform/policy/policy-overview/) pentru a vă conecta cu utilizatorii după ce aceștia inițiază o conversație cu botul vostru Messenger.

Pentru utilizatorii curioși din punct de vedere tehnic, aceasta se realizează prin framework-ul Google Play Services instalat pe telefonul utilizatorilor. Deci, atâta timp cât au Google pe telefon, îi puteți contacta întotdeauna.

Deci concluzia este: "Mesajele din apropiere" oferă o funcție grozavă pentru a captura lead-urile pierdute.

Pentru o companie, ce cadou de Crăciun mai bun decât un lead recuperat și o conversație interesantă cu ei pe alt continent? 
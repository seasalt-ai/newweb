const e=`---
title: "El usuario ha abandonado el chat web: ¡use Near Me Messaging para enviarle un mensaje!"
metatitle: "El usuario ha abandonado el chat web: ¡póngase en contacto con Near Me Messaging!"
date: 2022-12-25 12:48:52-08:00
modified_date: 2025-07-28T16:03:25.123456
draft: false
author: Xuchen Yao
description: "Near Me Messaging resuelve un problema del chat web: vuelva a ponerse en contacto con su usuario incluso *después* de que haya abandonado la conversación."
weight: 1
tags:
  - NearMe
image: images/blog/28-use-near-me-messaging-to-recover-lost-webchat/near-me-messaging-google-business-messages-recover-webchat.png
canonicalURL: /blog/use-near-me-messaging-to-recover/
url: /blog/use-near-me-messaging-to-recover/
---

La mañana de Navidad de 2022, me desperté con algunos mensajes de un usuario llamado Henry. Cuando llegué a los mensajes, Henry ya se había ido. Todo lo que obtuve fueron los mensajes que envió a través del chat web y su nombre.

(Más tarde, resultó que Henry vive en Nigeria y está en una zona horaria totalmente diferente. Cuando hablé con él por videollamada, pude ver literalmente el sudor en su cara, en contraste con el clima gélido de Seattle.)

Por suerte, el chat web en el sitio web de Seasalt.ai es a través de Near Me Messaging (Actualización: Desde entonces, hemos transformado el producto en un creador de chatbots omnicanal. ¡Ahora se llama [SeaChat](https://chat.seasalt.ai/?utm_source=blog)!). El backend está impulsado por Google Business Messages, que le brinda la excelente función de enviar un mensaje al teléfono del usuario dentro de los 30 días posteriores a su primer contacto. Por el contrario, Facebook solo le da una [ventana de 24 horas](https://developers.facebook.com/docs/messenger-platform/policy/policy-overview/) para contactar a un usuario una vez que inicia una conversación con su bot de Messenger.

Para los usuarios técnicamente curiosos, esto es posible gracias al marco de Google Play Services instalado en los teléfonos de los usuarios. Por lo tanto, siempre que tengan Google en su teléfono, siempre podrá comunicarse con ellos.

Así que el veredicto: Near Me Messaging proporciona una gran característica para capturar prospectos perdidos.

¿Qué mejor regalo de Navidad para una empresa que un prospecto recuperado y una divertida conversación con ellos en otro continente?
`;export{e as default};

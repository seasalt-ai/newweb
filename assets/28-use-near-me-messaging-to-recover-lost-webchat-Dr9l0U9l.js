const e=`---
title: "Usuário saiu do webchat: use o Near Me Messaging para enviar uma mensagem a ele!"
metatitle: "Usuário saiu do webchat: entre em contato com o Near Me Messaging!"
date: 2022-12-25 12:48:52-08:00
modified_date: 2025-07-28T16:03:25.123456
draft: false
author: Xuchen Yao
description: "O Near Me Messaging resolve um problema do webchat: entre em contato com seu usuário mesmo *depois* que ele saiu da conversa."
weight: 1
tags:
  - NearMe
image: images/blog/28-use-near-me-messaging-to-recover-lost-webchat/near-me-messaging-google-business-messages-recover-webchat.png
canonicalURL: /blog/use-near-me-messaging-to-recover/
url: /blog/use-near-me-messaging-to-recover/
---

Na manhã de Natal de 2022, acordei com algumas mensagens deixadas por um usuário chamado Henry. Quando cheguei às mensagens, Henry já havia saído. Tudo o que recebi foram as mensagens que ele enviou via webchat e seu nome.

(Mais tarde, descobriu-se que Henry mora na Nigéria e está em um fuso horário totalmente diferente. Quando conversei com ele por vídeo, pude literalmente ver o suor em seu rosto, em contraste com o clima gelado de Seattle.)

Felizmente, o webchat no site da Seasalt.ai é feito por meio do Near Me Messaging (Atualização: Desde então, transformamos o produto em um construtor de chatbot omnicanal. Agora chamado [SeaChat](https://chat.seasalt.ai/?utm_source=blog)!). O backend é alimentado pelo Google Business Messages, que oferece o bom recurso de enviar uma mensagem para o telefone do usuário em até 30 dias após o primeiro contato. Em contraste, o Facebook oferece apenas uma [janela de 24 horas](https://developers.facebook.com/docs/messenger-platform/policy/policy-overview/) para entrar em contato com um usuário depois que ele inicia uma conversa com seu bot do Messenger.

Para os usuários tecnicamente curiosos, isso é habilitado pela estrutura do Google Play Services instalada nos telefones dos usuários. Assim, enquanto eles tiverem o Google em seus telefones, você sempre poderá alcançá-los.

Então, o veredito: o Near Me Messaging oferece um ótimo recurso para capturar clientes em potencial perdidos.

Qual é um presente de Natal melhor para uma empresa do que um cliente em potencial recuperado e um bate-papo divertido com ele em outro continente?
`;export{e as default};

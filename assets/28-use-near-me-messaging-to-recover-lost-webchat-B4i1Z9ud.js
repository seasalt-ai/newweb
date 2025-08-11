const e=`---
title: "L'utilisateur a quitté le webchat : utilisez Near Me Messaging pour lui envoyer un message !"
metatitle: "L'utilisateur a quitté le webchat : reprenez contact avec Near Me Messaging !"
date: 2022-12-25 12:48:52-08:00
modified_date: 2025-07-28T16:03:25.123456
draft: false
author: Xuchen Yao
description: "Near Me Messaging résout un problème du webchat : reprendre contact avec votre utilisateur même *après* qu'il ait quitté la conversation."
weight: 1
tags:
  - NearMe
image: images/blog/28-use-near-me-messaging-to-recover-lost-webchat/near-me-messaging-google-business-messages-recover-webchat.png
canonicalURL: /blog/use-near-me-messaging-to-recover/
url: /blog/use-near-me-messaging-to-recover/
---

Le matin de Noël 2022, je me suis réveillé avec quelques messages laissés par un utilisateur nommé Henry. Au moment où j'ai lu les messages, Henry était déjà parti. Tout ce que j'ai eu, ce sont les messages qu'il a envoyés via le webchat, et son nom.

(Plus tard, il s'est avéré que Henry est basé au Nigeria et dans un fuseau horaire totalement différent. Quand je l'ai appelé en vidéo, j'ai littéralement pu voir la sueur sur son visage, contrastant avec le temps glacial de Seattle.)

Heureusement, le webchat sur le site Web de Seasalt.ai se fait via Near Me Messaging (Mise à jour : Nous avons depuis transformé le produit en un constructeur de chatbot omnicanal. Il s'appelle maintenant [SeaChat](https://chat.seasalt.ai/?utm_source=blog) !). Le backend est alimenté par Google Business Messages, ce qui vous offre la fonctionnalité intéressante de pousser un message sur le téléphone de l'utilisateur dans les 30 jours suivant son premier contact. En revanche, Facebook ne vous donne qu'une [fenêtre de 24 heures](https://developers.facebook.com/docs/messenger-platform/policy/policy-overview/) pour contacter un utilisateur une fois qu'il a initié une conversation avec votre bot Messenger.

Pour les utilisateurs curieux techniquement, cela est rendu possible par le framework Google Play Services installé sur les téléphones des utilisateurs. Ainsi, tant qu'ils ont Google sur leur téléphone, vous pouvez toujours les joindre.

Donc le verdict : Near Me Messaging offre une excellente fonctionnalité pour récupérer les prospects perdus.

Quel meilleur cadeau de Noël pour une entreprise qu'un prospect récupéré et une conversation amusante avec lui sur un autre continent ?
`;export{e as default};

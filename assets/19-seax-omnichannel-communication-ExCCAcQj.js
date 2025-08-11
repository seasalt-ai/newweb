const e=`---
title: "Amenez les clients de n'importe quel canal à un seul endroit avec la communication omnicanale SeaX"
metatitle: "Unifiez les points de contact client avec la communication omnicanale SeaX"
date: 2022-07-15 13:56:54-07:00
modified_date: 2025-08-02 17:00:00-07:00
draft: false
author: Kim Dodds
description: "Dans ce blog, nous mettons en évidence l'une des communications omnicanales de SeaX, qui permet aux messages des utilisateurs de n'importe quel canal d'apparaître sur la plate-forme SeaX."
weight: 1
tags:
  - SeaX
image: images/blog/19-seax-omnichannel-communication/0-thumbnail.png
canonicalURL: /blog/seax-omnichannel-communication/
url: /blog/seax-omnichannel-communication/
---

*Dans notre précédent article de blog, [Bienvenue sur SeaX, un centre de contact cloud collaboratif](https://seasalt.ai/blog/18-seax-collaborative-cloud-contact-center-introduction/), nous avons présenté SeaX, notre solution de centre de contact de communication cloud collaborative. Alors que notre premier article de blog donnait un aperçu complet des fonctionnalités de base et plus avancées de SeaX, nos articles suivants approfondiront certaines des fonctionnalités individuelles qui distinguent SeaX. Dans cet article, nous examinerons de plus près le support omnicanal de SeaX et verrons comment les appels et les messages de différents canaux apparaissent sur la plate-forme SeaX.*

# Table des matières
- [Qu'est-ce que la communication omnicanale ?](#what-is-omnichannel-communication)
- [Cycle de vie des messages](#message-lifecycle)
    - [Canal](#channel)
    - [Routage des messages](#message-routing)
    - [TaskRouter](#taskrouter)
    - [Plate-forme SeaX](#seax-platform)
- [Canaux pris en charge](#supported-channels)

# Qu'est-ce que la communication omnicanale ?

Tout d'abord, que signifie exactement « omnicanal » ? Décortiqué, « omni » est un préfixe qui signifie « tous », et « canal » sont les différentes plates-formes sur lesquelles vous pouvez interagir avec vos clients. Ainsi, en termes simples, la « communication omnicanale » signifie être capable de communiquer via tous les canaux disponibles. Non seulement cela, mais la communication omnicanale signifie également que l'expérience entre les canaux est transparente. Du côté de l'agent, les communications de tous les canaux sont présentées dans une interface unifiée. Pour le client, ses données d'interaction sont persistantes sur tous les canaux.

Les centres d'appels traditionnels ne prennent souvent en charge que les appels téléphoniques. Les centres de contact plus avancés qui s'engagent avec les clients sur plusieurs canaux, tels que l'e-mail, le chat Web et le téléphone, disposent d'un centre de contact multicanal. Cependant, ce n'est pas parce qu'un centre de contact utilise plusieurs canaux que son expérience est transparente. Dans un centre de contact multicanal, différents canaux peuvent être accessibles via des plates-formes distinctes et/ou les données client peuvent ne pas être liées entre les canaux. En revanche, un centre de contact omnicanal permet aux agents de suivre les conversations des clients où qu'ils aillent, sans être enfermés dans un seul canal ou répartis sur une douzaine de plates-formes.

<center>
<img src="/images/blog/19-seax-omnichannel-communication/1-contact-center-comparison.png" alt="Comparaison des fonctionnalités : centre d'appels traditionnel ou centre de contact ; multicanal ou omnicanal."/>

*Comparaison des fonctionnalités : centre d'appels traditionnel ou centre de contact ; multicanal ou omnicanal.*
</center>

SeaX est capable de s'intégrer à pratiquement n'importe quel canal, y compris par défaut : SMS, téléphone, chat Web, Facebook, etc. Tous les messages et appels sont affichés sur une plate-forme unifiée, et les données utilisateur de tous les canaux sont facilement disponibles.

Si vous souhaitez passer directement à la démo, regardez notre courte vidéo où nous présentons la communication omnicanale de SeaX. Dans le reste de ce blog, nous expliquerons étape par étape comment les messages and les appels de différents canaux sont acheminés vers un agent dans SeaX. Nous partagerons également les canaux pris en charge prêts à l'emploi et discuterons de la manière dont SeaX peut être étendu pour couvrir de nouveaux canaux.

<iframe width="85%" height="450px" src="https://www.youtube.com/embed/usb-RK7sHlA" title="Lecteur vidéo YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

# Cycle de vie des messages

SeaX est construit sur [Twilio Flex](https://www.twilio.com/flex), un centre de contact basé sur le cloud qui utilise la plate-forme de communication cloud de Twilio. Twilio fournit les éléments de base pour SeaX, tels que l'infrastructure de télécommunications, le routage des messages et des tâches, et une interface utilisateur de centre de contact de base. Suivons maintenant le cycle de vie d'un message utilisateur entrant et voyons comment SeaX utilise l'architecture Twilio de base en combinaison avec des composants personnalisés pour acheminer le message vers un agent en direct sur la plate-forme SeaX.

## Canal

<center>
<img src="/images/blog/19-seax-omnichannel-communication/2-example-message.jpg" alt="Un utilisateur envoie un message à une entreprise via Google Business Messages." style="width:50%"/>

*Envoi d'un message à une entreprise via Google Business Messages.*
</center>

Le parcours d'un message commence par un utilisateur qui compose et envoie un message sur une plate-forme prise en charge. L'exemple ci-dessus montre une personne envoyant un message à un chatbot Seasalt.ai sur Google Business Messages. Par défaut, Twilio ne prend pas en charge Google Business Messages, nous utilisons donc un connecteur de canal personnalisé développé par Seasalt.ai pour relier la plate-forme Google à Twilio et SeaX.

Une fois le message envoyé, il est transmis par le connecteur personnalisé à l'API de messagerie Twilio. À ce stade, Twilio crée un nouveau contexte de conversation pour l'utilisateur et se prépare à acheminer le message.

## Routage des messages

<center>
<img src="/images/blog/19-seax-omnichannel-communication/3-studio-flow.png" alt="Un simple flux de studio qui achemine les messages vers un chatbot ou un agent en direct."/>

*Un simple flux de studio qui achemine les messages vers un chatbot ou un agent en direct.*
</center>

Une fois le message reçu par Twilio, il doit être acheminé au bon endroit. Pour ce faire, nous utilisons [Twilio Studio Flows](https://www.twilio.com/studio) pour déterminer s'il faut donner une réponse automatisée, transférer le message à un chatbot, connecter l'utilisateur à un agent en direct ou effectuer une autre action.

Dans l'exemple simple fourni ci-dessus, tous les messages entrants seront transférés à un chatbot, sauf s'ils contiennent l'expression « agent en direct », auquel cas l'utilisateur sera transféré à un agent en direct sur la plate-forme SeaX.

## TaskRouter

<center>
<img src="/images/blog/19-seax-omnichannel-communication/4-taskrouter.png" alt="Diagramme d'architecture de TaskRouter."/>

*Diagramme d'architecture de TaskRouter. [Source](https://twilio-cms-prod.s3.amazonaws.com/images/taskrouter-diagram.width-800.png).*
</center>

Une fois le message transféré à SeaX, l'étape suivante consiste à décider quel agent le recevra. Le [TaskRouter de Twilio](https://www.twilio.com/taskrouter) attribue des tâches telles que des messages et des appels téléphoniques à l'agent de SeaX le mieux équipé pour les traiter. Chaque agent de SeaX peut se voir attribuer des compétences, telles que les langues qu'il parle, le service dans lequel il travaille, s'il doit traiter avec des clients VIP, etc. TaskRouter vérifiera les informations connues sur l'utilisateur et le message, puis sélectionnera l'employé le plus approprié pour traiter le problème. Le flux de studio de l'étape précédente peut être personnalisé pour obtenir des informations supplémentaires (telles que la langue préférée), et les informations client peuvent être conservées dans les conversations et les canaux pour garantir que leur expérience est transparente.

## Plate-forme SeaX

<center>
<img src="/images/blog/19-seax-omnichannel-communication/5-seax-incoming-messages.png" alt="Les appels et les messages entrants apparaissent sur la plate-forme SeaX." style="width:50%"/>

*Les appels et les messages entrants apparaissent sur la plate-forme SeaX.*
</center>

Enfin, le message entrant sera présenté à l'agent approprié sur la plate-forme SeaX. Les agents peuvent gérer plusieurs tâches de plusieurs canaux à la fois. Dans l'image ci-dessus, un agent a un appel entrant, un message Facebook et un message de chat Web. L'agent peut accepter la tâche ou la refuser pour la transmettre au prochain agent disponible.

# Canaux pris en charge

Espérons qu'il est maintenant plus clair ce qu'est la communication omnicanale et comment elle améliore l'expérience de l'utilisateur et de l'agent. La dernière question est : quels canaux sont pris en charge prêts à l'emploi ?

<center>
<img src="/images/blog/19-seax-omnichannel-communication/6-channel-comparison.png" alt="Comparaison des canaux pris en charge entre un centre d'appels traditionnel, Twilio Flex de base et SeaX."/>

*Comparaison des canaux pris en charge entre un centre d'appels traditionnel, Twilio Flex de base et SeaX.*
</center>

Comme mentionné précédemment, les centres d'appels traditionnels ne prennent souvent en charge que les appels téléphoniques. Les entreprises peuvent toujours interagir avec les clients via les réseaux sociaux ou par e-mail, mais ces messages ne sont pas intégrés dans une plate-forme unifiée.

Twilio Flex, d'autre part, jette les bases d'un excellent centre de contact omnicanal. Cependant, il a très peu de canaux prêts à l'emploi. En plus des appels téléphoniques et des SMS, ils ont une prise en charge bêta pour Facebook, WhatsApp et l'e-mail.

SeaX s'appuie sur Flex et ajoute une prise en charge intégrée pour certains des canaux les plus demandés : tels que Google Business Messages, Discord, Line et Instagram. De plus, Seasalt.ai travaille constamment avec ses clients pour intégrer de nouveaux canaux dans la gamme de produits SeaX. SeaX est hautement personnalisable et facilement extensible, ce qui signifie que nous pouvons travailler avec votre entreprise pour intégrer le canal que vous désirez le plus.

Merci d'avoir pris le temps de lire comment le centre de contact cloud SeaX tire parti de la communication omnicanale pour offrir une expérience client et agent transparente. Restez à l'écoute de notre prochain article de blog, qui explorera ce que signifie être un « centre de contact distribué ». Si vous souhaitez en savoir plus maintenant, remplissez notre [formulaire de demande de démo](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting) pour découvrir la plate-forme SeaX par vous-même.`;export{e as default};

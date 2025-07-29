---
title: "Amenez les clients de n'importe quel canal à un seul endroit avec la communication omnicanal SeaX"
metatitle: "Unifiez le contact client avec la communication omnicanal SeaX"
date: 2022-07-15T13:56:54-07:00
author: Kim Dodds 
draft: false
image: images/blog/19-seax-omnichannel-communication/0-thumbnail.png
description: "Dans ce blog, nous nous concentrons sur l'une des communications omnicanal de SeaX, qui permet aux messages des utilisateurs de n'importe quel canal d'être affichés sur la plateforme SeaX."
weight: 1
tags: ["SeaX"]
canonicalURL: "/blog/seax-omnichannel-communication/"
url: "/blog/seax-omnichannel-communication/"
---

*Dans notre précédent article de blog, [Bienvenue sur SeaX, un centre de contact collaboratif dans le cloud](https://seasalt.ai/blog/18-seax-collaborative-cloud-contact-center-introduction/), nous avons présenté notre solution de centre de contact de communication collaborative dans le cloud, SeaX. Alors que notre premier article de blog a donné un aperçu complet des fonctionnalités de base et des fonctionnalités plus avancées de SeaX, nos articles suivants approfondiront certaines des fonctionnalités individuelles qui font la particularité de SeaX. Dans cet article, nous examinerons de plus près le support omnicanal de SeaX et verrons comment les appels et les messages provenant de divers canaux sont affichés sur la plateforme SeaX.*

# Table des matières
- [Qu'est-ce que la communication omnicanal ?](#what-is-omnichannel-communication)
- [Cycle de vie des messages](#message-lifecycle)
    - [Canal](#channel)
    - [Routage des messages](#message-routing)
    - [TaskRouter](#taskrouter)
    - [Plateforme SeaX](#seax-platform)
- [Canaux pris en charge](#supported-channels)

# Qu'est-ce que la communication omnicanal ?

Pour commencer, que signifie réellement « omnicanal » ? Pour le décomposer, « omni » est un préfixe signifiant « tous », et « canaux » sont les différentes plateformes par lesquelles vous pouvez interagir avec vos clients. Donc, simplement, « communication omnicanal » signifie la capacité de communiquer par tous les canaux disponibles. Et plus que cela, la communication omnicanal signifie que l'expérience entre les canaux est transparente. Du côté de l'agent, la communication de tous les canaux est présentée dans une interface unifiée. Pour le client, ses données d'interaction sont conservées sur tous les canaux.

Un centre d'appels traditionnel ne prend généralement en charge que les appels téléphoniques. Les centres de contact plus avancés qui se connectent avec les clients via plusieurs canaux (tels que le courrier électronique, le chat Web et le téléphone) disposent d'un centre de contact multicanal. Cependant, le fait qu'un centre de contact utilise plusieurs canaux ne signifie pas que son expérience est transparente. Dans les centres de contact multicanaux, les différents canaux peuvent être accessibles via des plateformes individuelles et/ou les données client peuvent ne pas être liées entre les canaux. En revanche, le centre de contact omnicanal permet aux agents de suivre une conversation client où qu'elle aille, sans être bloqués dans un canal ou dispersés sur des dizaines de plateformes.

<center>
<img src="/images/blog/19-seax-omnichannel-communication/1-contact-center-comparison.png" alt="Comparaison des fonctionnalités : centre d'appels traditionnel vs centre de contact ; multicanal vs omnicanal."/>

*Comparaison des fonctionnalités : centre d'appels traditionnel vs centre de contact ; multicanal vs omnicanal.*
</center>

SeaX a la capacité de s'intégrer à pratiquement tous les canaux, y compris par défaut : texte, téléphone, chat Web, Facebook, et plus encore. Tous les messages et appels sont affichés sur une plateforme unifiée, et les données utilisateur de tous les canaux sont facilement disponibles.

Si vous souhaitez obtenir une démonstration directement, jetez un œil à notre courte vidéo présentant la communication omnicanal de SeaX. Dans le reste de ce blog, nous vous expliquerons comment les messages et les appels sont acheminés depuis divers canaux vers les agents de SeaX. Nous partagerons également les canaux pris en charge prêts à l'emploi et discuterons de la manière dont SeaX peut être étendu pour couvrir de nouveaux canaux.

<iframe width="85%" height="450px" src="https://www.youtube.com/embed/usb-RK7sHlA" title="Lecteur vidéo YouTube" frameborder="0" allow="accéléromètre; lecture automatique; écriture dans le presse-papiers; médias chiffrés; gyroscope; image dans l'image" allowfullscreen style="border-radius: 30px;"></iframe>

# Cycle de vie des messages

SeaX est construit sur [Twilio Flex](https://www.twilio.com/flex), un centre de contact basé sur le cloud qui utilise la plateforme de communication cloud de Twilio. Twilio fournit les blocs de construction de base pour SeaX, tels que l'infrastructure de télécommunications, le routage des messages et des tâches, et une interface utilisateur de centre de contact de base. Maintenant, suivons le cycle de vie d'un message utilisateur entrant et voyons comment SeaX utilise l'architecture de base de Twilio combinée à des composants personnalisés pour acheminer le message vers l'agent en direct sur la plateforme SeaX.

## Canal

<center>
<img src="/images/blog/19-seax-omnichannel-communication/2-example-message.jpg" alt="L'utilisateur envoie un message à une entreprise via Google Business Messages.", style="width:50%"/>

*Envoi d'un message à une entreprise via Google Business Messages.*
</center>

Le parcours d'un message commence par l'utilisateur qui rédige le message et l'envoie sur une plateforme prise en charge. L'exemple ci-dessus montre quelqu'un envoyant un message au chatbot Seasalt.ai sur Google Business Messages. Google Business Messages n'est pas pris en charge par Twilio par défaut, nous utilisons donc un connecteur de canal personnalisé développé par Seasalt.ai pour connecter la plateforme Google à Twilio et SeaX.

Une fois le message envoyé, il est transmis par le connecteur personnalisé à l'API de messagerie de Twilio. À ce stade, Twilio crée un nouveau contexte de conversation pour l'utilisateur et se prépare à acheminer le message.

## Routage des messages

<center>
<img src="/images/blog/19-seax-omnichannel-communication/3-studio-flow.png" alt="Un Studio Flow simple qui achemine les messages vers un chatbot ou un agent en direct."/>

*Un Studio Flow simple qui achemine les messages vers un chatbot ou un agent en direct.*
</center>

Une fois le message reçu par Twilio, il doit être acheminé au bon endroit. À cette fin, nous utilisons [Twilio Studio Flows](https://www.twilio.com/studio) pour déterminer s'il faut fournir une réponse automatisée, transférer le message à un chatbot, connecter l'utilisateur à un agent en direct ou effectuer une autre action.

Dans l'exemple simple fourni ci-dessus, tous les messages entrants seront transférés à un chatbot, sauf s'ils contiennent les mots « agent en direct », auquel cas l'utilisateur sera transféré à un agent en direct sur la plateforme SeaX.

## TaskRouter

<center>
<img src="/images/blog/19-seax-omnichannel-communication/4-taskrouter.png" alt="Diagramme de l'architecture de TaskRouter."/>

*Diagramme de l'architecture de TaskRouter. [Source](https://twilio-cms-prod.s3.amazonaws.com/images/taskrouter-diagram.width-800.png).*
</center>

Une fois qu'un message est transféré à SeaX, l'étape suivante consiste à décider quel agent le recevra. Le [TaskRouter de Twilio](https://www.twilio.com/taskrouter) distribue les tâches telles que les messages et les appels téléphoniques aux agents de SeaX qui peuvent le mieux les gérer. Chaque agent de SeaX peut se voir attribuer des compétences telles que les langues qu'il parle, le service dans lequel il travaille, s'il doit gérer les clients VIP, etc. Le TaskRouter vérifiera les informations connues sur l'utilisateur et le message, puis sélectionnera le travailleur le plus approprié pour traiter le problème. Le Studio Flow de l'étape précédente peut être personnalisé pour obtenir des informations supplémentaires (telles que la langue préférée) et les informations client peuvent être conservées entre les conversations et les canaux pour garantir une expérience transparente.

## Plateforme SeaX

<center>
<img src="/images/blog/19-seax-omnichannel-communication/5-seax-incoming-messages.png" alt="Appels et messages entrants affichés sur la plateforme SeaX.", style="width:50%"/>

*Appels et messages entrants affichés sur la plateforme SeaX.*
</center>

Enfin, le message entrant sera affiché à l'agent approprié sur la plateforme SeaX. Les agents peuvent gérer plusieurs tâches provenant de plusieurs canaux simultanément. Dans l'image ci-dessus, un agent a un appel entrant, un message Facebook et un message de chat Web. L'agent peut accepter la tâche ou la refuser pour qu'elle soit transmise à l'agent disponible suivant.

# Canaux pris en charge

J'espère que vous comprenez maintenant mieux ce qu'est la communication omnicanal et comment elle améliore l'expérience utilisateur et agent. La dernière question est : quels canaux sont réellement pris en charge prêts à l'emploi ?

<center>
<img src="/images/blog/19-seax-omnichannel-communication/6-channel-comparison.png" alt="Comparaison des canaux pris en charge entre le centre d'appels traditionnel, Twilio Flex de base et SeaX."/>

*Comparaison des canaux pris en charge entre le centre d'appels traditionnel, Twilio Flex de base et SeaX.*
</center>

Comme mentionné précédemment, un centre d'appels traditionnel ne prend généralement en charge que les appels téléphoniques. Les entreprises peuvent toujours interagir avec les clients sur les médias sociaux ou par courrier électronique, mais ces messages ne sont pas intégrés dans une plateforme unifiée.

Twilio Flex, d'autre part, jette les bases d'un fantastique centre de contact omnicanal. Cependant, il a peu de canaux disponibles prêts à l'emploi. En plus des appels téléphoniques et des SMS, ils ont également un support bêta pour Facebook, WhatsApp et le courrier électronique.

SeaX s'appuie sur Flex pour ajouter la prise en charge intégrée de certains des canaux les plus fréquemment demandés : tels que Google Business Messages, Discord, Line et Instagram. De plus, Seasalt.ai travaille toujours avec les clients pour intégrer de nouveaux canaux dans la gamme SeaX. SeaX est hautement personnalisable et facilement extensible, ce qui signifie que nous pouvons travailler avec votre entreprise pour intégrer tous les canaux que vous souhaitez le plus.

Merci d'avoir pris le temps de lire comment le centre de contact cloud SeaX utilise la communication omnicanal pour offrir une expérience client et agent transparente. Restez à l'écoute pour notre prochain article de blog, qui explorera ce que signifie être un « centre de contact distribué ». Si vous souhaitez en savoir plus immédiatement, remplissez notre [formulaire de réservation de démo](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting) pour avoir un aperçu de la plateforme SeaX.

const e=`---
title: "Donnez à votre centre de contact sa propre voix avec SeaX Voice Intelligence"
metatitle: "Laissez votre centre de contact parler avec SeaX Voice Intelligence"
date: 2022-08-02 17:24:00-07:00
modified_date: 2025-07-29 20:45:17+00:00
draft: false
author: Kim Dodds, Cody Kim, Xuchen Yao, Guoguo Chen
description: "Dans ce blog, nous montrerons comment les moteurs internes de synthèse vocale et de reconnaissance vocale de Seasalt.ai peuvent améliorer divers aspects de la plateforme SeaX."
weight: 1
tags:
  - SeaX
image: /images/blog/21-seax-voice-intelligence/thumbnail.png
canonicalURL: /blog/seax-voice-intelligence/
url: /blog/seax-voice-intelligence/
---

*Jusqu'à présent, dans notre [série de blogs SeaX](https://seasalt.ai/tags/seax/), nous vous avons donné un aperçu général du produit phare de Seasalt.ai : SeaX. Nous avons également discuté de deux fonctionnalités clés qui distinguent SeaX d'un centre d'appels traditionnel : premièrement, SeaX est omnicanal, ce qui signifie que vous pouvez interagir plus facilement avec les clients sur n'importe quel canal, et deuxièmement, la plateforme est un centre de contact distribué, ce qui vous permet d'acheminer de manière transparente les messages et les appels des clients du monde entier vers vos agents distribués dans divers lieux.*

*Maintenant que nous avons couvert les bases de la plateforme SeaX, nous allons passer aux fonctionnalités avancées d'IA et d'automatisation qui distinguent SeaX des autres centres de contact omnicanaux distribués. Dans ce blog, nous montrerons comment les moteurs internes de synthèse vocale et de reconnaissance vocale de Seasalt.ai peuvent améliorer divers aspects de la plateforme SeaX.*

# Table des matières
- [Introduction à l'intelligence vocale](#into-to-voice-intelligence)
- [Ce qui distingue Seasalt.ai](#what-sets-seasaltai-apart)
    - [Reconnaissance vocale](#speech-to-text)
    - [Synthèse vocale](#text-to-speech)
- [TTS et STT dans SeaX](#tts-and-stt-in-seax)
    - [IVR vocal](#voice-ivr)
    - [Message d'indisponibilité](#unavailable-message)
    - [Transcription en direct](#live-transcription)
    - [Et plus encore...](#and-more)

# Introduction à l'intelligence vocale

L'intelligence vocale est l'utilisation de l'intelligence artificielle pour analyser et tirer des enseignements des données vocales. Bien que la dernière décennie ait vu un développement remarquable des technologies vocales, leur utilisation dans les environnements d'entreprise est encore quelque peu limitée. Les entreprises continuent d'accumuler des téraoctets de données vocales, mais dans la plupart des cas, elles ne sont pas utilisées à leur plein potentiel.

L'une des raisons à cela est que les données vocales sont plus difficiles à traiter que d'autres formes de données, telles que les statistiques de base ou même les données textuelles simples. Les données vocales sont uniques à bien des égards :
1. Elles dépendent de la langue, avec des dialectes et des accents, il est donc difficile de capturer 100 % des informations
2. Leur qualité varie selon les canaux (téléphonie vs. VoIP, mono vs. stéréo), le taux d'échantillonnage (8KHz vs. 16KHz), la précision de représentation (8 bits, 16 bits, 32 bits) et les sons environnementaux tels que les bruits de fond
3. Elles sont plus difficiles à interpréter : des émotions de la parole à l'identification de l'orateur en passant par la sémantique du sens

Cependant, lorsqu'elle est abordée correctement avec les bons outils, l'intelligence vocale peut apporter des avantages considérables aux entreprises qui l'utilisent. Entre autres choses, la capacité de gérer correctement les données vocales débloque la possibilité d'utiliser une transcription parole-texte personnalisée, ce qui peut rendre les conversations consultables, indexables et perspicaces, et permet un traitement NLP ultérieur. À mesure que davantage de données sont collectées, des améliorations de ces services sont également possibles, telles que : l'augmentation de la précision de la transcription, l'augmentation de la couverture des cas d'utilisation et la fourniture de modèles de parole et de langue personnalisables pour s'adapter aux nouvelles langues et dialectes.

# Ce qui distingue Seasalt.ai

Seasalt.ai fournit des technologies et des produits d'IA de communication cloud aux entreprises clientes.
Nous avons développé en interne des technologies de parole et de langage pour les messages texte
et les appels vocaux dans les centres de contact d'entreprise. Notre moteur de langage naturel prend en charge un large
éventail de langues à ressources élevées et faibles : birman, chinois, anglais, philippin,
allemand, indonésien, khmer, laotien, malais, espagnol, tamoul, thaï, vietnamien, etc.
Seasalt.ai est financé par du capital-risque et dirigé par un groupe d'experts mondiaux de premier plan en reconnaissance vocale profonde,
synthèse vocale neuronale et dialogues en langage naturel.

Regardez notre vidéo de démonstration de la reconnaissance vocale :
<iframe width="85%" height="450px" src="https://www.youtube.com/embed/Log8usX8ViE" title="Lecteur vidéo YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

## Reconnaissance vocale

<center>
<img src="/images/blog/21-seax-voice-intelligence/STT.png" alt="Graphique de reconnaissance vocale."/>
</center>

Notre moteur de reconnaissance vocale reçoit l'audio de la parole et produit des transcriptions en temps réel. En partant de l'audio, nous extrayons les caractéristiques phonétiques, convertissons ces caractéristiques en phonèmes, puis mappons ces phonèmes à l'orthographe de la langue cible. Notre système actuel est capable de transcrire plusieurs langues, y compris l'anglais et le chinois, et d'autres langues sont constamment ajoutées.

Regardez notre vidéo de personnalisation de la reconnaissance vocale pour voir comment le moteur STT de Seasalt peut être personnalisé pour n'importe quel domaine :
<iframe width="85%" height="450px" src="https://www.youtube.com/embed/1YEU6mexzWQ" title="Lecteur vidéo YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

## Synthèse vocale

<center>
<img src="/images/blog/21-seax-voice-intelligence/TTS.png" alt="Graphique de synthèse vocale."/>
</center>

La synthèse vocale est le processus de synthèse d'une parole humaine réaliste avec une intonation et une cadence naturelles à partir de texte uniquement. Notre modèle prend du texte ordinaire, le traduit en phonèmes, puis convertit les phonèmes en audio tout en prédisant la hauteur, la durée et le volume appropriés à chaque pas de temps pour l'expérience TTS la plus réaliste possible. Si le résultat final n'est pas parfait, nous offrons la possibilité d'ajuster l'audio synthétisé, y compris la prononciation des mots, les pauses et l'emphase.

Regardez notre vidéo de démonstration de personnalisation de la synthèse vocale pour voir comment la sortie du moteur TTS de Seasalt peut être personnalisée pour fournir une parole synthétisée réaliste :

<iframe width="85%" height="450px" src="https://www.youtube.com/embed/GJCOhTtImp8" title="Lecteur vidéo YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

Vous pouvez également consulter la [page TTS](https://suite.seasalt.ai/tts) sur notre site Web pour écouter des exemples de certaines de nos voix synthétisées, notamment Tom Hanks, David Attenborough et Reese Witherspoon.

# TTS et STT dans SeaX

## IVR vocal

<center>
<img src="/images/blog/21-seax-voice-intelligence/flow.png" alt="Flux IVR vocal utilisant le moteur de reconnaissance vocale de Seasalt.ai pour la transcription en temps réel et le routage des appels."/>

*Flux IVR vocal utilisant le moteur de reconnaissance vocale de Seasalt.ai pour la transcription en temps réel et le routage des appels.*
</center>

L'intelligence vocale peut commencer à aider avant même que les appels n'arrivent sur la plateforme SeaX en s'assurant que les appels sont acheminés au bon endroit et en collectant des informations importantes avant de transférer l'appel à un agent. SeaX utilise Twilio Studio pour personnaliser les flux de routage des appels et des messages. Mais nous pouvons également intégrer notre moteur de reconnaissance vocale dans le flux IVR pour permettre au client d'utiliser le langage naturel pour acheminer son appel (au lieu de l'expérience traditionnelle « appuyez sur 1 pour… »). De plus, si votre entreprise est intéressée par l'utilisation d'un chatbot pour interagir avec les clients, nous pouvons aller plus loin en donnant à votre chatbot une voix pour parler aux clients par téléphone en utilisant notre moteur de synthèse vocale.

## Message d'indisponibilité

<center>
<img src="/images/blog/21-seax-voice-intelligence/unavailable-message.png" alt="Configuration du message d'indisponibilité de SeaX à l'aide de la synthèse vocale."/>

*Configuration du message d'indisponibilité de SeaX à l'aide de la synthèse vocale.*
</center>

Notre technologie de synthèse vocale permet également des messages vocaux hautement personnalisables. Par exemple, ceux-ci peuvent être déclenchés lorsqu'un client appelle après les heures de bureau normales, ou si le client doit être mis en attente pendant qu'il attend un agent disponible.

## Transcription en direct

<center>
<img src="/images/blog/21-seax-voice-intelligence/live-transcription.jpg" alt="Transcription d'appel en direct avec analyse affichée à l'agent sur SeaX."/>

*Transcription d'appel en direct avec analyse affichée à l'agent sur SeaX.*
</center>

Une fois qu'un client est en communication avec un agent, notre moteur de reconnaissance vocale fournit des transcriptions précises en temps réel de la conversation pour la référence de l'agent. Cela permet à l'agent de se référer aux points précédents de la conversation et/ou de vérifier sa compréhension de ce que le client a dit. De plus, ces transcriptions sont incroyablement utiles pour les applications en aval telles que l'extraction de sujets, l'extraction d'actions, la synthèse, l'analyse de réunions, etc.

## Et plus encore...

Ce qui précède n'est que quelques-unes des façons dont SeaX intègre l'intelligence vocale avancée pour réduire les temps d'attente, améliorer les performances des agents et offrir une expérience globale transparente aux clients et aux agents. Pour en savoir plus sur les fonctionnalités avancées de la plateforme SeaX, restez à l'écoute de nos prochains articles de blog, qui incluent la base de connaissances IA, la gestion des cas et les SMS en masse. Pour obtenir une démonstration personnelle et discuter de la façon dont la plateforme SeaX peut répondre à vos besoins commerciaux spécifiques, remplissez notre [formulaire de réservation de démonstration](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting).
`;export{e as default};

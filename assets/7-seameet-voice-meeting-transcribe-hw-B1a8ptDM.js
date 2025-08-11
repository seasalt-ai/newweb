const e=`---
title: "Du démo au succès : Au-delà du matériel (5/5)"
metatitle: "Du démo au succès (5/5) : Au-delà du matériel"
date: 2021-09-15 17:24:32-07:00
modified_date: 2025-07-28T16:56:53Z
draft: false
author: Cody Kim
description: "Dans la dernière partie de cette série de blogs, suivez le parcours de Seasalt.ai pour créer SeaMeet, nos solutions collaboratives de réunions modernes."
weight: 1
tags:
  - SeaMeet
image: images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/SeaMeet animation.gif
canonicalURL: /blog/seameet-voice-hardware/
url: /blog/seameet-voice-hardware/
---

*Tout au long de cette série de blogs, suivez le parcours de Seasalt.ai pour créer une expérience de réunions modernes complète, de ses humbles débuts à l'optimisation de notre service sur différents matériels et modèles, en passant par l'intégration de systèmes de PNL de pointe et enfin la réalisation complète de SeaMeet, nos solutions collaboratives de réunions modernes.*

## Au-delà des réunions modernes

Chez Seasalt.ai, nous avons admiré les capacités actuelles présentées lors de la démo Build 2019 de ce produit, mais nous sommes plus intéressés par ce que ce produit pourrait devenir, comment aller au-delà de la simple imitation dans la transcription des conversations. Mais avant de pouvoir battre la concurrence, il faut d'abord comprendre intimement le jeu auquel on joue. Et c'est ainsi que SeaMeet est né. À ses débuts, nous nous sommes tournés vers Azure comme modèle pour saisir les fondements de ce qui fait un service de transcription solide et avons utilisé les services vocaux d'Azure comme notre backend pour utiliser cette technologie établie.

Comme pour tout jeune produit, des défis sont apparus immédiatement. Désireux de lancer notre produit, nous avons opté pour l'utilisation du réseau de microphones Microsoft Kinect DK, promu comme le pendant matériel des services vocaux et supposément réglé pour obtenir les performances les plus optimales des modèles de reconnaissance vocale automatique d'Azure. Bien qu'il s'agisse d'un appareil indéniablement bien construit et bien conçu, il est livré avec un boîtier entièrement en aluminium, un objectif grand angle, une caméra de profondeur et un réseau de 7 microphones. Il a également un prix élevé, juste en dessous de 400 $. À partir d'avril 2021, le Kinect DK a connu un grave problème de sous-stock. Il est toujours en rupture de stock à la date de rédaction de cet article en septembre 2021. Cela a renforcé davantage l'idée que le Kinect n'est pas l'appareil qu'il nous faut.

<center>
<img src="/images/blog/7-seameet-voice-intelligence-meeting-transcription-hardware/kinect_store_page.png"/>

*L'Azure Kinect DK était en rupture de stock depuis le 2021/4 au moment de la publication de cet article (2021/9)*
</center>

Le réseau de microphones est le premier composant de la chaîne de transcription des conversations. En tant que fournisseurs d'un service de transcription, nous devons être en mesure de nous procurer notre matériel de manière durable et fiable.

Notre quête du réseau de microphones parfait nous a menés à deux options : le [Respeaker Array v2.0](https://www.seeedstudio.com/ReSpeaker-Mic-Array-v2-0.html) et le [Respeaker Core v2.0](https://www.seeedstudio.com/ReSpeaker-Core-v2-0.html). Ces deux appareils sont des réseaux circulaires, respectivement de quatre et six microphones, ce qui est une caractéristique cruciale pour pouvoir effectuer une localisation de source à 360 degrés et nous permettre d'intégrer facilement ces nouveaux appareils dans notre système existant. La véritable beauté de ces appareils est qu'ils sont livrés avec des algorithmes de traitement du signal intégrés, notamment la réduction du bruit, l'annulation d'écho et la formation de faisceaux, parfaitement adaptés aux dimensions du microphone.

<center>
<img src="/images/blog/7-seameet-voice-intelligence-meeting-transcription-hardware/respeaker_array.png" alt="Respeaker Array v2.0 démontrant le VAD et la localisation de source"/>

*Respeaker Array v2.0 démontrant le VAD et la localisation de source*
</center>

<center>
<img src="/images/blog/7-seameet-voice-intelligence-meeting-transcription-hardware/array_demo.jpg" alt="Démo de réunion en direct avec le Respeaker Array v2.0"/>

*Démo de réunion en direct avec le Respeaker Array v2.0*
</center>

Pour le réseau de quatre microphones Array v2.0, qui était entièrement alimenté par un port USB, cela signifiait que l'ordinateur de l'utilisateur n'avait qu'à se concentrer sur la diffusion de l'audio vers le serveur. Cela décharge le traitement du signal vers le réseau de microphones.


<center>
<img src="/images/blog/7-seameet-voice-intelligence-meeting-transcription-hardware/core_demo.png" alt="Respeaker Core v2.0 illustré avec démo"/>

*Respeaker Core v2.0 illustré avec démo*
</center>

Encore plus convaincant est le Core v2.0 équipé d'un processeur ARM et de 1 Go de RAM. Capable d'exécuter une distribution Linux complète et avec une puissance de traitement plus que suffisante pour exécuter notre script client, non seulement nous avons déchargé le traitement de l'ordinateur de l'utilisateur avec cet appareil, mais nous avons complètement éliminé le besoin d'avoir un ordinateur connecté au microphone. Étant donné que les réseaux de microphones effectuent désormais le traitement lourd, nous avons réduit les exigences matérielles nécessaires pour exécuter notre produit et avons donc effectivement augmenté notre public qui peut bénéficier de SeaMeet.

<center>
<img src="/images/blog/7-seameet-voice-intelligence-meeting-transcription-hardware/respeaker_core.png" alt="Exemple de Core v2.0 de placement de microphone autonome"/>

*Exemple de Core v2.0 de placement de microphone autonome*
</center>

Une autre caractéristique unique de ces réseaux de microphones est leur absence de boîtier. Les deux sont livrés sous forme de PCB nus avec les microphones, les puces et les ports tous exposés. Bien que beaucoup y voient un inconvénient, nous y voyons une opportunité de créer un appareil vraiment unique qui est indubitablement de Seasalt.

    Avec ces appareils, nous bouclons la boucle de notre prototype de SeaMeet, notre tout nouveau service de transcription de réunions à la pointe de la technologie. Et avec cela, nous concluons notre série en cinq parties, commençant lorsque SeaMeet n'était qu'une graine inspirée d'une démonstration de Microsoft, et se terminant par un produit entièrement indépendant. Encore à ses débuts, SeaMeet a un voyage passionnant devant lui alors que nous continuons à peaufiner notre système de diarisation, notre sens de la réunion et nos modèles linguistiques. L'équipe de Seasalt.ai est impatiente de continuer à révolutionner la façon dont le monde fait des affaires.
`;export{e as default};

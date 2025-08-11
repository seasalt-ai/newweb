const e=`---
title: "SeaVoice STT/TTS Discord Bot : Améliorations Backend et Stabilité"
metatitle: "SeaVoice STT/TTS Discord Bot : Améliorations Backend et Stab..."
date: 2022-12-13 11:58:34-08:00
modified_date: 2025-07-28T16:56:53Z
draft: false
author: Sydney Burgess, Kim Dodds, Drake Farmer, Jack Harvison, Dylan Strong, Cody Vernon
description: "Avec la dernière version, le SeaVoice Discord Bot lance des améliorations backend massives qui améliorent la stabilité du bot et facilitent le développement futur."
weight: 1
tags:
  - SeaVoice
  - Discord
image: images/blog/27-discord-backend-improvements/seavoice-discord-stt-tts-bot-backend-improvements.jpg
canonicalURL: /blog/seavoice-discord-backend-improvements/
url: /blog/seavoice-discord-backend-improvements/
---


*Le SeaVoice Discord Bot, comme l'un des meilleurs choix pour la transcription vocale dans les canaux vocaux Discord, devient de plus en plus populaire. Avec la dernière version, nous lançons des améliorations backend massives qui amélioreront la stabilité du bot et faciliteront le développement futur.*

# SeaVoice Mémoire : Base de Données en Ligne !

Salut tout le monde, nous avons travaillé en coulisses sur le SeaVoice Discord Bot récemment et nous voulions partager !

Comme vous l'avez vu dans nos articles de blog précédents, nous avons ajouté de nombreuses fonctionnalités au SeaVoice Bot, comme notre nouvelle fonctionnalité d'enregistrement et de transcription d'appels. En plus de ces développements, nous avons également donné au SeaVoice Discord Bot la capacité de se souvenir de tout ce qu'il fait : des commandes à l'enregistrement des journaux d'erreurs. Maintenant, quand le bot vous parle ou que vous l'utilisez pour enregistrer des appels, toutes ces informations sont sauvegardées de manière organisée.

## Ce que cela signifie pour les utilisateurs
Vous vous demandez peut-être ce que cela signifie pour vous maintenant ?

Eh bien, d'abord, sans ces améliorations backend, nos nouvelles fonctionnalités de transcription et de téléchargement audio ne pourraient pas être réalisées ! Nous pouvons maintenant également sauvegarder automatiquement tout crash malheureux que vous rencontrez afin que notre équipe de développement puisse commencer à les corriger avant même que vous ne les remarquiez. De plus, si quelqu'un décide qu'il ne veut plus que ses données soient stockées dans notre système, cette nouvelle organisation nous permet de rechercher, récupérer et/ou supprimer rapidement n'importe quelles données selon le serveur, le canal, l'utilisateur, la date, etc.

Plus important encore, cela ouvre la porte à de nouvelles fonctionnalités comme le suivi des statistiques, l'audit automatique, etc. Administrateurs, vous voulez vous assurer que les règles de votre serveur sont respectées, ou vérifier à quelle fréquence le bot est utilisé sur votre serveur ? Peut-être voulez-vous retrouver cette conversation amusante de la semaine dernière ? Avec le framework de base de données maintenant solidement établi et utilisé dans les bots de production, toutes sortes de nouvelles fonctionnalités sont plus faciles à réaliser.

## Confidentialité des Données

Bien sûr, chaque fois que nous discutons de la sauvegarde des données utilisateur, des questions de confidentialité et de sécurité des données surgissent. Voici quelques points clés sur la façon dont nous gérons vos données :
- Toutes les données utilisateur sont stockées sur des serveurs distants sécurisés, accessibles uniquement à quelques employés sélectionnés de Seasalt.ai
- SeaVoice n'enregistre que les données fournies par Discord lorsque les utilisateurs interagissent avec le bot SeaVoice ; cela inclut :
    - Serveur, canal, nom d'utilisateur et ID
    - Texte saisi dans la commande \`/speak\`
    - Audio parlé dans les canaux vocaux lorsque le bot exécute la commande \`/recognize\`
- Ces données ne seront utilisées que par Seasalt.ai pour améliorer le service
- Vous pouvez demander la suppression de toutes ou partie de vos données à tout moment

Pour des informations détaillées complètes, veuillez consulter la [Politique de Confidentialité Seasalt.ai](https://seasalt.ai/privacy/).

## Direction Future

Une grande partie de cette mise à jour ne sera pas remarquée, mais pour nous, la partie la plus difficile est passée, et maintenant nous pouvons commencer à développer des projets qui vous permettront de personnaliser et d'utiliser le SeaVoice Discord Bot plus que vous ne l'imaginez.
Une fonctionnalité à venir est la configuration personnalisable par serveur et/ou utilisateur.
Avec la base de données, cela nous permettra de sauvegarder les préférences à l'avenir, comme si vous souhaitez recevoir des alertes quand un chat vocal est en cours d'enregistrement, qui recevra les liens de téléchargement pour les transcriptions d'appels, ou qui souhaite choisir de ne pas être enregistré.

Maintenant que nous pouvons sauvegarder les données, avez-vous des idées que vous aimeriez ajouter ? N'hésitez pas à nous faire des suggestions via le [Serveur Discord Officiel SeaVoice](https://discord.gg/dfAYfwBQ) !

<center>
<iframe src="https://discordapp.com/widget?id=919037515514654721&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
</center>

## Essayez-le !

Si vous n'avez pas encore essayé la dernière version du SeaVoice Bot, allez-y ! Invitez le [SeaVoice Discord Bot](https://discord.com/oauth2/authorize?client_id=1001955060210749492&scope=bot) sur votre serveur.
N'hésitez pas à lire la [Documentation du Bot SeaVoice](https://wiki.seasalt.ai/seavoice/discord/discord-bot/) pour apprendre comment utiliser au mieux le bot pour répondre aux besoins de votre communauté.

Restez à l'écoute pour quelques mises à jour passionnantes à venir !

Merci,

L'équipe du Bot SeaVoice. `;export{e as default};

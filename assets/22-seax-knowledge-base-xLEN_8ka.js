const e=`---
title: "SeaX KB : une base de connaissances qui répond avant même que vous ne posiez la question"
metatitle: "SeaX KB : une base de connaissances qui répond avant même que vous ne posiez la question"
date: 2022-08-15 22:01:32-07:00
modified_date: 2025-07-30 17:01:16.351000+00:00
draft: false
author: Kim Dodds
description: "Dans cet article, nous poursuivons sur le thème de l'intégration de l'IA en présentant la base de connaissances alimentée par l'IA de SeaX, qui fournit des réponses suggérées en temps réel."
weight: 1
tags:
  - SeaX
canonicalURL: /blog/seax-kb-a-knowledge-base/
url: /blog/seax-kb-a-knowledge-base/
---

*Dans notre précédent article de blog [Donnez à votre centre de contact sa propre voix avec SeaX Voice Intelligence](https://seasalt.ai/blog/21-seax-voice-intelligence/), nous avons montré comment les moteurs de synthèse vocale et de reconnaissance vocale internes de Seasalt.ai améliorent divers aspects de la plateforme SeaX. Dans cet article, nous poursuivrons sur le thème de l'intégration de l'IA en présentant la base de connaissances alimentée par l'IA de SeaX, qui écoute les conversations en temps réel pour fournir des réponses suggérées.*

# Table des matières
- [La base de connaissances traditionnelle](#the-traditional-knowledge-base)
- [La base de connaissances SeaX](#seax-knowledge-base)
    - [Interface utilisateur intégrée pour les agents en direct](#embedded-user-interface-for-live-agents)
    - [Recherche rapide et précise](#fast-and-accurate-search)
    - [Suggestions automatisées en temps réel](#real-time-automated-suggestions)
    - [Modèles de réponse](#response-templates)
    - [Gestion de la base de connaissances](#kb-management)
    - [Webinaire](#webinar)

# La base de connaissances traditionnelle

À la base, une base de connaissances (KB) n'est qu'une collection d'informations (idéalement) bien organisée et facilement accessible pour le libre-service en ligne. Un bon système de base de connaissances disposera de fonctionnalités telles que l'organisation hiérarchique du contenu, la recherche et le balisage pour aider les utilisateurs à trouver plus facilement les bonnes informations.

La maintenance d'une base de connaissances détaillée est une pratique courante pour la plupart des entreprises de nos jours. Que l'objectif soit d'aider les employés à partager des informations internes sur leurs produits, de répondre aux questions des clients potentiels, d'aider les clients à résoudre des problèmes ou tout ce qui précède, rendre les informations clés accessibles aux employés et aux clients signifie un travail plus efficace et une plus grande satisfaction client.

En règle générale, les bases de connaissances sont mises en œuvre et maintenues via un système de gestion de contenu ou un système de gestion des connaissances. Ces systèmes peuvent varier en taille en fonction des besoins d'une organisation, des simples gestionnaires de documents aux services riches en fonctionnalités qui incluent des flux de publication, un ciblage d'audience, des outils de collaboration, etc. Bien que ces systèmes soient polyvalents à divers égards, ils sont presque toujours conçus pour être accessibles via une interaction avec une page Web ou une application. Pour le cas d'utilisation spécifique des agents du service client (qui utilisent souvent les bases de connaissances comme l'une de leurs principales ressources pour aider les clients), une intégration étroite avec le logiciel du centre de contact est nécessaire pour permettre aux agents de traiter les requêtes des utilisateurs de la manière la plus transparente possible.

# La base de connaissances SeaX

Notre base de connaissances a été conçue dès le premier jour avec un cas d'utilisation très spécifique à l'esprit : le service client vocal. Alors que la plupart, sinon la totalité, des systèmes de base de connaissances existants reposent sur la navigation dans des pages Web hiérarchiques ou la saisie de requêtes de recherche, notre base de connaissances devait être plus rapide et plus autonome afin que les représentants du service client puissent consacrer toute leur attention au client tout en répondant rapidement aux questions.

Si vous souhaitez passer directement à la démo, vous pouvez regarder notre courte démo de SeaX KB :
<iframe width="85%" height="450px" src="https://www.youtube.com/embed/C_e_gaZHSFA" title="Lecteur vidéo YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>


## Interface utilisateur intégrée pour les agents en direct

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-intro.png" alt="Un premier aperçu de l'interface de la base de connaissances SeaX."/>

*Un premier aperçu de l'interface de la base de connaissances SeaX.*
</center>

Naturellement, puisque notre moteur de base de connaissances a été conçu spécifiquement pour les applications de centre de contact, il est intégré de manière native à la plateforme SeaX afin que les agents puissent accéder de manière transparente à la base de connaissances tout en traitant les appels et les messages. Pas de changement de fenêtre, pas de tâtonnement dans les onglets, pas de navigation dans des pages Web imbriquées.

## Recherche rapide et précise

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-manual-search.png" alt="Résultats d'une recherche manuelle dans la base de connaissances SeaX."/>

*Résultats d'une recherche manuelle dans la base de connaissances SeaX.*
</center>

Au niveau le plus élémentaire, notre base de connaissances est alimentée par un moteur de recherche extrêmement rapide et précis. Nous utilisons des techniques de traitement du langage naturel et d'extraction d'informations de pointe pour extraire le sens du texte brut, des exemples de requêtes et des URL de support et pour faire correspondre les énoncés des clients aux entrées les plus pertinentes de la base de connaissances. Le moteur de la base de connaissances est hautement évolutif et peut prendre en charge des milliards de documents sans changement perceptible du temps de réponse.

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-detail.png" alt="Un article de la base de connaissances dans une vue développée après avoir cliqué sur un résultat de recherche."/>

*Un article de la base de connaissances dans une vue développée après avoir cliqué sur un résultat de recherche.*
</center>

En plus de trouver les documents les plus pertinents, notre moteur de recherche fournit également des résultats plus détaillés en extrayant les mots-clés saillants de la requête de l'utilisateur et en mettant en évidence les mots-clés et les passages les plus pertinents dans chaque entrée suggérée de la base de connaissances.

## Suggestions automatisées en temps réel

Mais ce que nous avons montré jusqu'à présent est encore une recherche manuelle. Les agents en direct sont occupés à interagir avec les clients, et la saisie manuelle de recherches dans la base de connaissances chaque fois qu'ils ont besoin d'informations fait perdre un temps précieux. Ainsi, la plus grande valeur ajoutée de la base de connaissances SeaX est la recherche automatisée en temps réel pour les interactions textuelles et vocales.

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-automatic-search.png" alt="La base de connaissances SeaX affichant des suggestions d'articles automatiques pour un message utilisateur entrant."/>

*La base de connaissances SeaX affichant des suggestions d'articles automatiques pour un message utilisateur entrant.*
</center>

Chaque fois qu'un nouveau message d'utilisateur arrive, la base de connaissances interroge automatiquement avec le message exact du client. En temps réel, pendant que le client parle, les agents recevront des suggestions d'articles de la base de connaissances à jour pour leur référence.

Cela fonctionne aussi pour les appels vocaux ! Notre précédent article de blog [Donnez à votre centre de contact sa propre voix avec SeaX Voice Intelligence](https://seasalt.ai/blog/21-seax-voice-intelligence/) a présenté le moteur de reconnaissance vocale de pointe de Seasalt.ai. La plateforme SeaX exploite ce moteur pour transcrire tous les appels vocaux en temps réel. Par conséquent, nous pouvons utiliser ces transcriptions pour une variété d'applications en aval, y compris la recherche automatique dans la base de connaissances.

## Modèles de réponse

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-response-template.png" alt="Un agent répondant à un client en un clic avec un modèle de réponse généré par la base de connaissances SeaX."/>

*Un agent répondant à un client en un clic avec un modèle de réponse généré par la base de connaissances SeaX.*
</center>

Les résultats de la recherche dans la base de connaissances sont accompagnés d'une fonctionnalité supplémentaire pour aider à accélérer la réactivité des agents pour les interactions textuelles. Lorsqu'un agent trouve un article pertinent de la base de connaissances, il peut simplement cliquer sur l'icône « + » à gauche du titre pour insérer un modèle de réponse dans sa fenêtre de discussion. En arrière-plan, chaque fois que la base de connaissances est interrogée, elle génère une réponse écrite à la question de l'utilisateur en fonction des informations les plus pertinentes des articles suggérés de la base de connaissances et inclut tous les liens de support. Cela peut considérablement améliorer les temps de réponse des agents car les agents ne partent plus de zéro. Au lieu de cela, ils ont déjà les informations importantes de l'article de la base de connaissances affichées dans leur fenêtre de discussion, il ne leur reste donc plus qu'à modifier et à envoyer.


## Gestion de la base de connaissances

Maintenant que nous avons vu ce que le moteur de la base de connaissances peut faire, il reste une question en suspens concernant le backend : comment les informations de la base de connaissances sont-elles gérées ? La plateforme SeaX fournit une interface utilisateur de gestion de la base de connaissances entièrement intégrée à laquelle les administrateurs peuvent accéder depuis la page des paramètres.

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-management.png" alt="L'interface de gestion de la base de connaissances SeaX."/>

*L'interface de gestion de la base de connaissances SeaX.*
</center>

Sur cette page, vous pouvez ajouter de nouvelles entrées individuelles à la base de connaissances, ou vous pouvez importer/exporter l'intégralité de la base de connaissances à l'aide d'un fichier de feuille de calcul. L'interface prend également en charge la modification et la suppression d'entrées de la base de connaissances afin que vous puissiez maintenir votre base de connaissances à jour en permanence.

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-edit.png" alt="Modification d'un seul article de la base de connaissances via l'interface de gestion de la base de connaissances SeaX."/>

*Modification d'un seul article de la base de connaissances via l'interface de gestion de la base de connaissances SeaX.*
</center>

## Webinaire

Si vous souhaitez un aperçu plus approfondi du système de base de connaissances et de la manière dont il s'intègre à la plateforme SeaX, regardez notre webinaire sur le sujet :
<iframe width="85%" height="450px" src="https://www.youtube.com/embed/FOqQ01fpKQ4" title="Lecteur vidéo YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

Pour une démonstration personnalisée ou pour savoir comment Seasalt.ai peut personnaliser une solution pour les besoins de votre entreprise, veuillez remplir notre [formulaire de demande de démo](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting).`;export{e as default};

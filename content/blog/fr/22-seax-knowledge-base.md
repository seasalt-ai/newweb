---
title: "SeaX KB : Une base de connaissances qui répond avant d'être interrogée"
metatitle: "SeaX KB : Une base de connaissances qui répond avant d'être interrogée"
date: 2022-08-15T22:01:32-07:00
draft: false
author: Kim Dodds
image: /images/blog/22-seax-knowledge-base/thumbnail.png
description: "Dans cet article, nous poursuivons le sujet des intégrations d'IA avec la base de connaissances alimentée par l'IA de SeaX, qui offre des réponses suggérées en temps réel."
weight: 1
tags: ["SeaX"]
canonicalURL: "/blog/seax-kb-a-knowledge-base/"
url: "/blog/seax-kb-a-knowledge-base/"
---

*Dans notre précédent article de blog, [Donnez à votre centre de contact sa propre voix avec SeaX Voice Intelligence](https://seasalt.ai/blog/21-seax-voice-intelligence/), nous avons montré comment les moteurs de synthèse vocale et de reconnaissance vocale internes de Seasalt.ai améliorent divers aspects de la plateforme SeaX. Dans cet article, nous poursuivons le sujet des intégrations d'IA avec la base de connaissances alimentée par l'IA de SeaX, qui écoute les conversations et offre des réponses suggérées en temps réel.*

# Table des matières
- [La base de connaissances traditionnelle](#the-traditional-knowledge-base)
- [Base de connaissances SeaX](#seax-knowledge-base)
    - [Interface utilisateur intégrée pour les agents en direct](#embedded-user-interface-for-live-agents)
    - [Recherche rapide et précise](#fast-and-accurate-search)
    - [Suggestions automatisées en temps réel](#real-time-automated-suggestions)
    - [Modèles de réponse](#response-templates)
    - [Gestion de la base de connaissances](#kb-management)
    - [Webinaire](#webinar)

# La base de connaissances traditionnelle

Fondamentalement, une base de connaissances (KB) est simplement une bibliothèque d'informations (idéalement) bien organisées et facilement accessibles qui sont utilisées en libre-service en ligne. Les bons systèmes de base de connaissances auront des fonctionnalités telles que l'organisation hiérarchique du contenu, la recherche et l'étiquetage pour aider les utilisateurs à trouver les informations correctes plus facilement.

Maintenir une base de connaissances détaillée est une pratique standard pour la plupart des entreprises aujourd'hui. Que l'objectif soit d'aider les employés à partager des informations internes sur leur produit, de répondre aux questions d'un client potentiel, d'aider les clients à résoudre des problèmes, ou tout ce qui précède - rendre les informations clés accessibles aux employés et aux clients signifie un travail plus efficace et une satisfaction client plus élevée.

Typiquement, une base de connaissances est implémentée et maintenue via un système de gestion de contenu ou un système de gestion des connaissances. Ces systèmes peuvent varier en taille en fonction des besoins de l'organisation, allant d'un simple gestionnaire de documents à un service riche en fonctionnalités qui inclut des flux de travail de publication, le ciblage d'audience, des outils de collaboration, et plus encore. Bien que ces systèmes soient polyvalents de différentes manières, ils sont presque toujours destinés à être accédés via une interaction avec une page Web ou une application. Pour le cas d'utilisation particulier d'un agent de service client (qui utilise généralement une base de connaissances comme l'une de ses principales ressources pour aider les clients), une intégration étroite avec le logiciel du centre de contact est nécessaire pour permettre aux agents de gérer les requêtes des utilisateurs aussi facilement que possible.

# Base de connaissances SeaX

Notre base de connaissances a été conçue dès le premier jour avec un cas d'utilisation très particulier à l'esprit : le service client basé sur la voix. Bien que la plupart, sinon la totalité, des systèmes de base de connaissances existants reposent sur la navigation à travers des pages Web hiérarchiques ou la saisie d'une requête de recherche, notre KB devait être plus rapide et plus indépendante afin de permettre aux représentants du service client de consacrer toute leur attention au client tout en répondant rapidement aux questions.

Si vous souhaitez obtenir une démonstration directement, vous pouvez regarder notre courte vidéo de démonstration de SeaX KB :
<iframe width="85%" height="450px" src="https://www.youtube.com/embed/C_e_gaZHSFA" title="Lecteur vidéo YouTube" frameborder="0" allow="accéléromètre; lecture automatique; écriture dans le presse-papiers; médias chiffrés; gyroscope; image dans l'image" allowfullscreen style="border-radius: 30px;"></iframe>


## Interface utilisateur intégrée pour les agents en direct

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-intro.png" alt="Premier aperçu de l'interface de la base de connaissances SeaX."/>

*Premier aperçu de l'interface de la base de connaissances SeaX.*
</center>

Naturellement, puisque notre moteur de base de connaissances a été conçu spécifiquement pour les applications de centre de contact, il dispose d'une intégration native avec la plateforme SeaX afin que les agents puissent accéder à la base de connaissances de manière transparente tout en gérant les appels et les messages. Pas de changement de fenêtre, pas de feuilletage d'onglets, pas de navigation dans des pages Web imbriquées.

## Recherche rapide et précise

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-manual-search.png" alt="Résultats d'une recherche manuelle dans la base de connaissances SeaX."/>

*Résultats d'une recherche manuelle dans la base de connaissances SeaX.*
</center>

Au niveau le plus fondamental, notre base de connaissances est alimentée par un moteur de recherche incroyablement rapide et précis. Nous utilisons des techniques de traitement du langage naturel et d'extraction d'informations de pointe pour extraire le sens du texte brut, des exemples de requêtes et des URL de support, et pour faire correspondre les énoncés des clients aux entrées de base de connaissances les plus pertinentes. Le moteur de base de connaissances est hautement extensible et peut prendre en charge des milliards de documents sans changement perceptible dans le temps de réponse.

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-detail.png" alt="Article de la base de connaissances en vue étendue après avoir cliqué sur un résultat de recherche."/>

*Article de la base de connaissances en vue étendue après avoir cliqué sur un résultat de recherche.*
</center>

En plus de trouver le document le plus pertinent, notre moteur de recherche fournit des résultats plus précis en extrayant les mots-clés saillants de la requête de l'utilisateur et en mettant en évidence les mots-clés et les passages les plus pertinents dans chaque entrée de base de connaissances suggérée.

## Suggestions automatisées en temps réel

Mais ce que nous avons montré jusqu'à présent est toujours une recherche manuelle. Les agents en direct sont occupés à interagir avec les clients et perdraient un temps précieux à saisir une recherche manuelle dans la base de connaissances chaque fois qu'ils voudraient des informations. Pour cette raison, la plus grande valeur ajoutée que la base de connaissances SeaX apporte est la recherche automatisée en temps réel pour les interactions textuelles et vocales.

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-automatic-search.png" alt="SeaX KB affichant des suggestions d'articles automatiques pour un message utilisateur entrant."/>

*SeaX KB affichant des suggestions d'articles automatiques pour un message utilisateur entrant.*
</center>

Chaque fois qu'un nouveau message utilisateur arrive, la base de connaissances sera automatiquement interrogée en utilisant le message exact du client. En temps réel, pendant que le client parle, l'agent recevra des suggestions d'articles de la base de connaissances à jour pour sa référence.

Et cela fonctionne aussi avec les appels vocaux ! Notre dernier article de blog, [Donnez à votre centre de contact sa propre voix avec SeaX Voice Intelligence](https://seasalt.ai/blog/21-seax-voice-intelligence/), a présenté le moteur de synthèse vocale de pointe de Seasalt.ai. La plateforme SeaX utilise ce moteur pour transcrire tous les appels vocaux en temps réel. En conséquence, nous pouvons utiliser ces transcriptions pour diverses applications en aval, y compris la recherche automatisée de bases de connaissances.

## Modèles de réponse

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-response-template.png" alt="Un agent répond à un client en un clic à l'aide du modèle de réponse généré par SeaX KB."/>

*Un agent répond à un client en un clic à l'aide du modèle de réponse généré par SeaX KB.*
</center>

Les résultats de recherche de la base de connaissances ont une fonctionnalité supplémentaire qui aide à accélérer les réponses des agents pour les interactions textuelles. Lorsque l'agent trouve un article de base de connaissances pertinent, il peut simplement cliquer sur l'icône `+` à gauche du titre pour insérer un modèle de réponse dans sa fenêtre de chat. En arrière-plan, chaque fois que la base de connaissances est recherchée, elle génère une réponse écrite à la question de l'utilisateur basée sur les informations les plus pertinentes de l'article de base de connaissances suggéré et inclut tous les liens de support. Cela peut considérablement améliorer le temps de réponse de l'agent, car l'agent ne part plus d'une page blanche. Au lieu de cela, il a déjà les informations importantes de l'article de la base de connaissances dans sa fenêtre de chat, il peut donc simplement les modifier et les envoyer.


## Gestion de la base de connaissances

Maintenant que nous avons vu ce que le moteur de base de connaissances peut faire, il reste une question persistante concernant le backend : comment gérez-vous les informations dans la base de connaissances ? La plateforme SeaX dispose d'une interface utilisateur de gestion de base de connaissances entièrement intégrée, accessible aux administrateurs depuis la page des paramètres.

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-management.png" alt="Interface de gestion de la base de connaissances SeaX."/>

*Interface de gestion de la base de connaissances SeaX.*
</center>

À partir de cette page, vous pouvez ajouter une nouvelle entrée de base de connaissances ou importer/exporter l'ensemble de la base de connaissances à l'aide d'un fichier de feuille de calcul. L'interface prend également en charge l'édition et la suppression d'entrées de base de connaissances afin que vous puissiez maintenir votre base de connaissances à jour en permanence.

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-edit.png" alt="Modification d'un seul article de la base de connaissances via l'interface de gestion de la base de connaissances SeaX."/>

*Modification d'un seul article de la base de connaissances via l'interface de gestion de la base de connaissances SeaX.*
</center>

## Webinaire

Si vous souhaitez voir une présentation plus approfondie du système de base de connaissances et de la façon dont il s'intègre à la plateforme SeaX, veuillez regarder notre webinaire sur le sujet :
<iframe width="85%" height="450px" src="https://www.youtube.com/embed/FOqQ01fpKQ4" title="Lecteur vidéo YouTube" frameborder="0" allow="accéléromètre; lecture automatique; écriture dans le presse-papiers; médias chiffrés; gyroscope; image dans l'image" allowfullscreen style="border-radius: 30px;"></iframe>

Pour une démonstration individuelle, ou pour en savoir plus sur la façon dont Seasalt.ai peut adapter ses solutions à vos besoins commerciaux, veuillez remplir notre [formulaire de réservation de démonstration](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting).

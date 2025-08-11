const e=`---
title: "Étendez la Portée de Votre Centre de Contact avec un Centre de Contact Distribué"
metatitle: "Étendez Votre Portée avec un Centre de Contact Distribué"
date: 2022-07-27 21:46:45+00:00
draft: false
author: Sarah Reid
description: "Dans cet article de blog, nous examinerons les centres de contact « distribués » : ce qu'ils sont, comment ils peuvent vous être bénéfiques, et comment SeaX les utilise pour mieux servir ses clients."
weight: 1
tags:
  - SeaX
image: images/blog/20-seax-distributed-contact-center/0-main.png
canonicalURL: /blog/seax-distributed-contact-center/
url: /blog/seax-distributed-contact-center/
---

*Dans notre précédent article de blog, [Rassemblez les Clients de Tous les Canaux sur une Seule Plateforme avec SeaX Communication Omnicanal](https://seasalt.ai/blog/19-seax-omnichannel-communication/), nous avons montré la puissance de la communication omnicanal sur SeaX, qui permet de faire remonter les messages des utilisateurs provenant de pratiquement n'importe quel canal sur la plateforme SeaX. Dans cet article, nous allons examiner les centres de contact « distribués » : ce qu'ils sont, comment il...

# Table des Matières
- [Qu'est-ce qu'un centre de contact « distribué » ?](#quest-ce-quun-centre-de-contact-distribué-)
- [Quels sont les avantages d’un centre de contact « distribué » ?](#quels-sont-les-avantages-dun-centre-de-contact-distribué-)
- [Quels sont les défis d’un centre de contact « distribué » ?](#quels-sont-les-défis-dun-centre-de-contact-distribué-)
- [Comment SeaX résout-il ces problèmes ?](#comment-seax-résout-il-ces-problèmes-)
    - [Routage des Appels vers des Emplacements et Agents Distribués](#routage-des-appels-vers-des-emplacements-et-agents-distribués)
    - [Configuration de la Disponibilité par Emplacement](#configuration-de-la-disponibilité-par-emplacement)
    - [Personnalisation des Messages d’Emplacement Distribué](#personnalisation-des-messages-demplacement-distribué)

# Qu'est-ce qu'un centre de contact « distribué » ?
Un centre de contact distribué est, au sens simple, un centre de contact situé à plusieurs endroits, contrairement au centre de contact traditionnel situé à un seul endroit. Cela peut être un centre avec plusieurs bureaux, des sites dans différents pays, voire aucun site physique avec des agents travaillant à distance. Cependant, ces centres doivent offrir une expérience homogène, comme un centre traditionnel. Les agents doivent être soutenus par une plateforme unique, peu importe leur emplacement, et le...

# Quels sont les avantages d’un centre de contact « distribué » ?
Les centres distribués présentent de nombreux avantages, notamment en matière de portée et de couverture. Des agents répartis sur plusieurs fuseaux horaires permettent une assistance 24/7. De plus, vous pouvez recruter des profils diversifiés, parlant différentes langues, ayant des expertises variées. En centralisant le système, tout en répartissant les agents, vous améliorez l'efficacité et la proximité culturelle avec vos clients, notamment pour des questions locales comme la logistique.

# Quels sont les défis d’un centre de contact « distribué » ?
Malgré leurs avantages, ces centres rencontrent des défis. Il faut impérativement que les appels soient bien dirigés : éviter qu’un client ne tombe sur une ligne fermée ou un agent non disponible. Il est aussi crucial de prendre en compte la langue et la formation de l’agent. Le système de routage devient complexe avec une grande variété d’agents et de compétences.

<center>
<img src="/images/blog/20-seax-distributed-contact-center/1-feature-comparison.png" alt="Comparaison des fonctionnalités : centre traditionnel, centre distribué, SeaX."/>

*Comparaison des fonctionnalités : centre traditionnel, centre distribué, SeaX.*
</center>

# Comment SeaX résout-il ces problèmes ?

## Routage des Appels vers des Emplacements et Agents Distribués
SeaX est une solution de centre de contact collaborative, native du cloud et distribuée, construite sur [Twilio Flex](https://www.twilio.com/flex). Elle permet de configurer plusieurs numéros de téléphone selon la zone géographique, garantissant un fonctionnement correct tout en réunissant tous les agents sur une même plateforme.

Le [Twilio TaskRouter](https://www.twilio.com/taskrouter) attribue appels et messages aux agents en fonction des attributs.

<center>
<img src="/images/blog/20-seax-distributed-contact-center/2-taskrouter.png" alt="Diagramme de l’architecture TaskRouter."/>

*Diagramme de l’architecture TaskRouter.*
</center>

Il permet aussi le routage basé sur les compétences : langues parlées, niveau de formation, etc. Vous pouvez assigner des numéros à des agents spécifiques, même s’ils ne sont pas physiquement présents, pour un routage plus intelligent.

<center>
<img src="/images/blog/20-seax-distributed-contact-center/3-skills.png" alt="Compétences définies dans TaskRouter pour router les appels."/>

*Compétences définies dans TaskRouter pour router les appels.*
</center>

## Configuration de la Disponibilité par Emplacement
SeaX permet de configurer les heures d’ouverture et jours fériés par numéro de téléphone. Chaque site peut donc fonctionner selon son fuseau horaire et ses spécificités locales tout en étant intégré dans une plateforme unifiée.

<center>
<img src="/images/blog/20-seax-distributed-contact-center/4-open-hours.png" alt="Heures d’ouverture pour deux numéros situés dans deux fuseaux horaires."/>
</center>

<center>
<img src="/images/blog/20-seax-distributed-contact-center/5-open-hours.png" alt="Heures d’ouverture pour deux numéros situés dans deux fuseaux horaires."/>

*Heures d’ouverture pour deux numéros situés dans deux fuseaux horaires.*
</center>

## Personnalisation des Messages d’Emplacement Distribué
SeaX permet également de définir des messages personnalisés d’indisponibilité selon le numéro. Vous pouvez ainsi jouer un message dans une langue ou un contenu spécifique à chaque région, lorsque personne n’est disponible.

<center>
<img src="/images/blog/20-seax-distributed-contact-center/6-unavailable-message.png" alt="Message d’indisponibilité pour un numéro spécifique sur la plateforme SeaX."/>

*Message d’indisponibilité pour un numéro spécifique sur la plateforme SeaX.*
</center>

Un centre de contact traditionnel ne peut desservir efficacement que sa zone géographique immédiate. Le modèle distribué étend la portée mais complexifie l’intégration. Avec SeaX, vous bénéficiez d’une plateforme unifiée tout en servant efficacement une clientèle mondiale grâce à des agents répartis.

Merci d’avoir lu cet article sur comment SeaX prend en charge les centres de contact distribués via une plateforme unique. Restez à l’écoute pour notre prochain article sur la synthèse et reconnaissance vocale. En attendant, vous pouvez remplir notre formulaire “[Réserver une Démo](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting)” pour découvrir SeaX de première main.`;export{e as default};

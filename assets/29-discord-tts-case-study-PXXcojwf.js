const e=`---
title: "Synthèse vocale sur Discord : Une étude de cas du bot TTS Discord"
metatitle: "Synthèse vocale sur Discord : Une étude de cas du bot TTS Di..."
date: 2022-12-27 17:04:20-08:00
modified_date: 2025-07-29 20:45:17+00:00
author: Kim Dodds
description: "Dans ce blog, nous discuterons de nos découvertes sur la façon dont les utilisateurs réels de Discord utilisent nos services après avoir examiné plusieurs mois de données authentiques de synthèse vocale."
weight: 1
tags:
  - SeaVoice
  - Discord
image: images/blog/29-tts-case-study/discord-tts-accessibility.jpg
url: /blog/discord-tts-case-study/
---


*Après le lancement de SeaVoice, l'un des bots de synthèse vocale et de reconnaissance vocale les plus rapides et les plus précis sur Discord, nous voulions comprendre comment les utilisateurs interagissaient réellement avec les services. Dans ce blog, nous discuterons de nos découvertes après avoir examiné plusieurs mois de données réelles d'utilisateurs de synthèse vocale.*

# SeaVoice : Un bot Discord de synthèse vocale et de reconnaissance vocale

Discord, étant une plateforme principalement utilisée pour une combinaison de chat audio et textuel, est un fantastique terrain d'essai pour les services d'intelligence vocale et de traitement du langage naturel.
Nous avons déployé le bot SeaVoice, équipé de commandes de synthèse vocale et de reconnaissance vocale, sur Discord en août 2022.
Pour en savoir plus sur le fonctionnement du bot, ou voir une courte démonstration vidéo, vous pouvez visiter le [Wiki du bot Discord SeaVoice](https://wiki.seasalt.ai/seavoice/discord/6-community/).
En novembre de la même année, nous avons publié une nouvelle version avec des améliorations significatives du backend (comme décrit dans notre précédent article de blog : [Bot Discord SeaVoice : Améliorations du backend et de la stabilité](https://seasalt.ai/blog/27-seavoice-discord-backend-improvements/)) qui nous permettent d'enregistrer des données anonymes sur la façon dont les utilisateurs interagissent avec le bot SeaVoice.
Dans ce blog, nous examinerons 1 mois de données utilisateur de la commande de synthèse vocale.

## Utilisation de SeaVoice TTS

<center>
<img src="/images/blog/29-tts-case-study/discord-tts-usage.jpg" alt="Utilisation quotidienne de la synthèse vocale du bot Discord SeaVoice sur 7 semaines."/>

*Utilisation quotidienne de la synthèse vocale du bot Discord SeaVoice sur 7 semaines.*
</center>

Au moment de la rédaction, le bot SeaVoice a été ajouté à près de 800 serveurs !
Depuis que nous avons commencé à enregistrer les données d'utilisation en novembre, nous avons constaté que le nombre total de requêtes par jour peut fluctuer de 150 à plus de 1 300 (avec une moyenne d'environ 560).
Environ 650 utilisateurs ont essayé la commande TTS au moins une fois.
Cependant, la plupart des utilisateurs ne continuent pas à l'utiliser régulièrement après l'avoir essayée.
Parmi les 650 utilisateurs qui ont essayé la commande TTS, environ 200 l'ont utilisée 20 fois ou plus, et seulement 100 l'ont utilisée 50 fois ou plus.
Cela dit, ceux qui apprécient et comptent sur la commande TTS l'utilisent de manière extensive !
Nos 5 meilleurs utilisateurs ont soumis plus de 1 000 requêtes chacun au cours des deux derniers mois, et le meilleur utilisateur a soumis près de 2 500 requêtes à lui seul !

## Observations

### Pourquoi les gens utilisent la synthèse vocale

<center>
<img src="/images/blog/29-tts-case-study/why-mute-on-discord.jpg" alt="Raisons pour lesquelles les utilisateurs du bot Discord SeaVoice utilisent la synthèse vocale."/>

*Raisons pour lesquelles les utilisateurs du bot Discord SeaVoice utilisent la synthèse vocale.*
</center>

Donc, notre première question après avoir vu les données d'utilisation est : **pourquoi les utilisateurs fréquents utilisent-ils le TTS en premier lieu ?**
Nous avons examiné la base de données pour trouver quelques explications.
Voici des commandes TTS réelles de certains de nos utilisateurs.

__*Pourquoi ne parles-tu pas ?*__

    - aussi je ne peux pas parler parce que je mange
    - Je parlerais en fait, mais je suis au travail en ce moment.
    - si je parle, je réveille ma famille
    - désolé, je ne vais pas trop parler. la gorge me fait très mal.
    - je pourrais parler mais ma mère est là
    - je suis trop paresseux pour parler aujourd'hui
    - je ne peux pas parler parce que je suis malade mais je voulais quand même participer :)
    - pas complètement muet, juste que parler demande des efforts. Beaucoup d'efforts certains jours
    - désolé, je suis muet, ma grand-mère parle au téléphone et c'est bruyant
    - Parce que mon micro était cassé

Après avoir trouvé ces explications, nous pouvons les résumer en quelques raisons principales :
- il y a une barrière physique (micro cassé, difficulté à parler, maladie, etc.),
- ils sont occupés à faire autre chose (manger, au travail, etc.),
- leur environnement est trop bruyant ou ils doivent être silencieux, ou
- parce que c'est pratique et qu'ils aiment l'utiliser.

Mais quelle que soit la raison exacte pour laquelle ils utilisent le service TTS, de nombreux utilisateurs ont exprimé leur enthousiasme à pouvoir participer aux conversations du canal vocal alors qu'ils ne le pourraient pas autrement.
Nous pensons que le service TTS rend les canaux vocaux de Discord plus accessibles, et c'est la principale raison pour laquelle nos utilisateurs réguliers continuent d'utiliser le service.

### Utilisation de la langue

Une chose qui m'a frappé en examinant les conversations, c'est que de nombreux utilisateurs ont essayé d'utiliser la commande de synthèse vocale avec différentes langues.
Alors que certains utilisateurs voulaient juste voir si cela fonctionnerait ou trouvaient la prononciation amusante, d'autres, cependant, ont continué à utiliser le TTS dans des langues non anglaises pendant de longues périodes !

<center>
<img src="/images/blog/29-tts-case-study/discord-spanish-tts-test.png" alt="Un utilisateur teste la prononciation espagnole du modèle TTS SeaVoice anglais."/>

*Un utilisateur teste la prononciation espagnole du modèle TTS SeaVoice anglais.*
</center>

Ce fut particulièrement le cas avec les hispanophones, même si (comme le note l'utilisateur ci-dessus) les performances du TTS ne sont pas bonnes pour l'espagnol, car le modèle n'est entraîné que sur l'anglais.
J'ai commencé à noter chaque fois que je rencontrais un utilisateur essayant d'utiliser la commande TTS dans une langue autre que l'anglais.

<center>
<img src="/images/blog/29-tts-case-study/discord-non-english-tts.jpg" alt="Nombre de tentatives d'envoi de requêtes non anglaises à TTS."/>

*Nombre de tentatives d'envoi de requêtes non anglaises à TTS.*
</center>

Le tableau ci-dessus montre le nombre de chaque conversation que j'ai trouvée qui contenait au moins une instance d'une personne utilisant la langue correspondante dans la commande TTS.
Évidemment, l'espagnol est de loin le plus courant, et associé au fait que de nombreux utilisateurs ont continué à utiliser la fonction TTS en espagnol même si les performances étaient médiocres, me fait me demander s'il n'existe pas déjà une alternative viable sur Discord pour le TTS espagnol.
Dans les deux cas, les gens essaient d'utiliser notre service TTS pour d'autres langues, nous pouvons donc suivre les langues les plus demandées et utiliser ces données pour éclairer la formation de nos nouveaux modèles.

### Commentaires sur le bot

Un autre sujet intéressant trouvé dans les journaux était les commentaires sur le bot lui-même.
Heureusement, nous avons vu plusieurs commentaires très positifs sur le bot et ses performances.

<center>
<img src="/images/blog/29-tts-case-study/discord-tts-inclusive-accessibility-user-comment.png" alt="Un utilisateur commente que le bot le fait se sentir plus inclus."/>

*Un utilisateur commente que le bot le fait se sentir plus inclus.*
</center>

Les commentaires les plus touchants provenaient de ceux qui se sentaient exclus des canaux vocaux, mais qui peuvent maintenant participer grâce à l'accessibilité supplémentaire que le bot offre.

Nous avons également trouvé plusieurs commentaires constructifs.

<center>
<img src="/images/blog/29-tts-case-study/discord-tts-speed.png" alt="Un utilisateur commente que la vitesse du TTS est un problème."/>

*Un utilisateur commente que la vitesse du TTS est un problème.*
</center>

Un utilisateur a mentionné que, comme les utilisateurs devront d'abord taper la phrase entière puis l'envoyer, le TTS est plus lent que la parole normale, de sorte que parfois leur énoncé TTS est prononcé un peu tard dans la conversation.
Comme mentionné dans la section précédente, nous avons également vu des demandes de support linguistique supplémentaire ainsi qu'un utilisateur qui espérait pouvoir traduire entre les langues à l'aide du bot.
Surveiller ce type de commentaires nous aidera à planifier et à améliorer les fonctionnalités à l'avenir.

### Nouveauté

Après avoir parcouru toute la collection de commandes TTS, je dirais qu'environ les deux tiers des énoncés sont utilisés dans des conversations générales avec des amis et d'autres personnes sur le serveur.
La plupart des gens jouent à des jeux et discutent simplement avec leurs amis, et ces utilisateurs ont tendance à être ceux qui utilisent régulièrement le service TTS.
En revanche, le tiers restant des énoncés relève de la catégorie « juste pour s'amuser ».
Lorsque vous avez le pouvoir total de faire dire à une voix ce que vous voulez, je crois que c'est la nature humaine de choisir la chose la plus stupide ou la plus obscène à laquelle vous pouvez penser juste pour rire.
Je me souviens d'être assis dans le laboratoire informatique de l'école primaire et d'être diverti pendant des heures par Microsoft Sam (très high-tech à l'époque), en voyant si nous pouvions le faire dire des choses comme « caca » ou « cul ».
Eh bien, je suppose que des enfants comme moi ont grandi, ont acquis un vocabulaire plus riche et ont fini par trouver le même divertissement avec notre service TTS sur Discord.

<center>
<img src="/images/blog/29-tts-case-study/discord-tts-stress-test.png" alt="Exemples de requêtes TTS étranges envoyées par les utilisateurs."/>

*Exemples de requêtes TTS étranges envoyées par les utilisateurs.*
</center>

Parfois, les utilisateurs essaient simplement de casser le bot en tapant des choses comme : des chaînes excessivement longues, des caractères spéciaux, des emojis, des URL, etc.
C'est un exemple classique de personnes testant les limites du logiciel, et cela nous aide en fait à nous assurer que nos services sont robustes et peuvent gérer toute entrée que les utilisateurs leur envoient.

À d'autres moments, les utilisateurs trouvent du divertissement en faisant dire au service TTS les choses les plus obscènes et offensantes qu'ils peuvent imaginer.
Dans les journaux TTS, je pense avoir vu tous les gros mots que je connais (et peut-être certains que je n'avais jamais entendus auparavant), des insultes raciales et du contenu sexuel explicite.

## La question de l'éthique

Malheureusement, il existe de nombreuses façons dont une application de synthèse vocale peut être utilisée de manière désagréable : par exemple, pour promouvoir les discours de haine ou la cyberintimidation.
De plus, bien que les clips audio soient synthétisés à partir d'un modèle, les données pour entraîner le modèle proviennent d'une personne réelle et la sortie d'un bon modèle peut sembler presque indiscernable de l'original.

Donc, ces points, associés à la façon dont nous avons vu de vrais utilisateurs utiliser (ou abuser) de notre service TTS, soulèvent des questions très importantes pour Seasalt.ai en tant qu'entreprise et pour le bot Discord SeaVoice :

- *En tant qu'entreprise, voulons-nous que notre produit soit utilisé de manière potentiellement offensante ou nuisible ?*
- *Quels droits les acteurs vocaux ont-ils sur la façon dont leur voix est utilisée dans les applications de synthèse vocale ?*
- *Avons-nous le droit ou la responsabilité de censurer la façon dont notre service est utilisé ?*

Ces questions ne peuvent être répondues, ni même entièrement explorées, dans un seul article de blog.
Cependant, l'entreprise se sent obligée de considérer continuellement ces problèmes à mesure que nous avançons avec notre projet Discord et continuons à travailler avec nos acteurs vocaux.

Merci de votre intérêt pour notre bot Discord et nos projets d'intelligence vocale ! Vous pouvez en savoir plus sur notre produit STT sur notre [page d'accueil de la reconnaissance vocale](https://suite.seasalt.ai/tts). Pour une démonstration individuelle de l'un de nos produits d'intelligence vocale, remplissez le [formulaire de réservation de démonstration](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting).

Du côté de Discord, vous pouvez en savoir plus sur notre bot et l'ajouter à votre serveur à partir du [Wiki du bot Discord SeaVoice](https://wiki.seasalt.ai/seavoice/discord/6-community/). N'hésitez pas également à rejoindre notre [serveur Discord officiel SeaVoice](https://discord.gg/dfAYfwBQ).

<center>
<iframe src="https://discordapp.com/widget?id=919037515514654721&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
</center>
`;export{e as default};

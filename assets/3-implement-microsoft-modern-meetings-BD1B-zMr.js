const e=`---
title: "De la démo au succès : mise en œuvre des réunions modernes de Microsoft et au-delà (1/5)"
metatitle: "De la démo au succès (1/5) : au-delà des réunions modernes de Microsoft"
date: 2021-07-19
draft: false
author: Cody Kim
description: "Dans la première partie de cette série de blogs, suivez le parcours de Seasalt.ai pour créer SeaMeet, nos solutions de réunions modernes collaboratives."
weight: 1
tags:
  - SeaMeet
image: images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/SeaMeet animation.gif
canonicalURL: /blog/microsoft-modern-meetings/
url: /blog/microsoft-modern-meetings/
---

*Tout au long de cette série de blogs, suivez le parcours de Seasalt.ai pour créer une expérience de réunions modernes complète, en commençant par ses humbles débuts, en optimisant notre service sur différents matériels et modèles, en intégrant des systèmes de PNL de pointe et en terminant enfin par la pleine réalisation de SeaMeet, nos solutions de réunions modernes collaboratives.*

### L'avenir des réunions modernes

[![Démonstration du service de reconnaissance vocale de Microsoft lors de la MS Build 2019](/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/ms-build-play.png)](https://www.youtube.com/watch?t=100&v=EYinMnQWgfU&feature=youtu.be)

Lors de la Microsoft Build 2019, Microsoft a suscité l'enthousiasme du public en dévoilant la dernière de ses solutions de cloud computing : les services vocaux Azure, plus précisément leur application de transcription de réunions. Après son introduction, ce transcripteur de conversation a immédiatement atterri sur le radar de tout le monde et a été mentionné dans les principaux blogs et périodiques technologiques. La démonstration, illustrée dans la vidéo ci-dessous en 2019, a montré beaucoup de muscle des services vocaux Azure. Nous ne savions pas que cela deviendrait rapidement un prélude à la façon dont les réunions modernes se tiendraient dans un contexte de pandémie mondiale et post-pandémique : passer du physique au virtuel puis à l'hybride.

<center>
<img src="/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/azure-demo.png" alt="Démonstration en direct du service de reconnaissance vocale et d'identification du locuteur de Microsoft Azure lors de la MS Build 2019"/>
</center>

Annoncée comme une plate-forme de transcription de conversation, la vitrine de Microsoft pour le service de transcription de réunions d'Azure, judicieusement présentée comme « L'avenir des réunions modernes », a établi son nouveau service comme une plate-forme de reconnaissance vocale (STT) robuste et efficace, adaptée à toutes les entreprises à la recherche d'un moyen de capturer rapidement et proprement toutes leurs conférences importantes.

Qu'est-ce qui fait de ce service le summum de la transcription de réunions ? Premièrement, les performances en temps réel. À mesure que la technologie devient de plus en plus rapide, la patience s'amenuise de plus en plus, où même quelques secondes de retard suffisent amplement à irriter l'utilisateur moyen. Pourtant, Microsoft a prouvé que son transcripteur de conversation est plus que suffisamment rapide, fournissant des transcriptions précises plus rapidement que certains services de sous-titrage, ce qui rend tout à fait possible de suivre une conversation simultanée avec le texte seul.

Ensuite, Microsoft a également présenté ses capacités d'identification du locuteur. Se retrouver avec un fouillis de texte de conversation désorganisé est frustrant et inutile, mais l'identification du locuteur étiquette automatiquement chaque énoncé avec le locuteur, créant un format facile à consommer.

![Interface utilisateur du service de reconnaissance vocale et d'identification du locuteur de Microsoft Azure](/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/azure-ui.png)

Chaque jour, le matériel informatique devient de plus en plus puissant et les entreprises cherchent à extraire chaque dernier cœur des derniers processeurs et GPU. Souvent, les anciennes technologies tombent en désuétude et les clients sont contraints de mettre à niveau tous les deux ans juste pour rester pertinents dans la société. Dans « L'avenir des réunions modernes », Microsoft a optimisé le service vocal Azure pour qu'il s'exécute sur du matériel grand public tout en conservant les calculs lourds de leur côté, élargissant ainsi la population déjà vaste qui peut bénéficier de ce service.

Le service de transcription de réunions d'Azure vise à optimiser la façon dont nous menons nos affaires. Chaque organisation ferait bien d'intégrer un produit comme celui-ci dans son flux de travail. Au cours d'une journée moyenne, les informations circulent constamment et chaque élément est aussi important que le précédent, qu'il s'agisse de rappels, de tâches ou de mises à jour. Trop souvent, des choses se perdent dans les mailles du filet, ce qui signifie une perte de temps et de profits. Ce que la solution de Microsoft offre, c'est un enregistrement complet et généré automatiquement qui délimite exactement ce qui a été dit et qui l'a dit. Fini le temps des informations manquantes et de la recherche aveugle dans de longs enregistrements audio pour une section spécifique. Désormais, toutes les informations dont vous avez besoin sont soigneusement présentées pour que vous puissiez les consulter aussi souvent que nécessaire. Cette technologie est plus importante que jamais. Si l'année 2020 nous a appris quelque chose, c'est la nécessité de la flexibilité, en particulier sur le lieu de travail. Les gens tombent malades et des événements imprévus surviennent, il est donc pratiquement impossible de s'attendre à ce que les employés assistent à toutes les discussions. Avec les réunions modernes, nous sommes un peu plus près de pouvoir nous adapter à ces développements inattendus en donnant essentiellement à chacun la possibilité d'être là sans y être réellement.

### Mise en œuvre des réunions modernes

Mi-2020, nous avons reçu une demande de proposition d'un client gouvernemental à Singapour. Oui, c'était toujours la pandémie. Mais Singapour l'avait sous contrôle, de sorte que les réunions gouvernementales se tenaient toujours dans des salles de conférence physiques. Ils voulaient une solution moderne capable de transcrire la parole de jusqu'à 12 locuteurs différents. De plus, l'identification du locuteur jouerait un rôle important ici.

En ce qui concerne l'identification du locuteur, une différence significative entre ce que propose Azure et ce dont le client a besoin est l'« inscription » vocale : Azure nécessite une voix préenregistrée de tous les locuteurs pour inscrire leur empreinte vocale dans le système. Cependant, il est impossible de demander à des responsables gouvernementaux vraisemblablement très importants de s'asseoir devant un microphone pour être enregistrés. Nous avons apporté quelques adaptations au processus en effectuant d'abord un regroupement de locuteurs non supervisé (également appelé diarisation du locuteur). L'idée est que si un locuteur avait parlé une fois dans notre système, nous le reconnaîtrions la prochaine fois qu'il parlerait.

![Diagramme de flux des services de reconnaissance vocale et d'identification de la parole de Microsoft Azure](/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/azure-diagram.png)

*L'architecture des réunions modernes de [Transcription de conversation Azure](https://docs.microsoft.com/en-us/azure/cognitive-services/speech-service/conversation-transcription). Dans notre adaptation, nous avons assoupli l'exigence d'« inscription de l'utilisateur » avant la réunion à après la réunion.*


Ensuite, nous avons rapidement rassemblé notre arsenal pour l'ensemble du projet. La première étape a été de trouver une matrice de microphones de haute qualité qui fournirait des données audio cristallines à nos modèles de reconnaissance. Nous avons été immédiatement séduits par l'Azure Kinect : une élégante matrice de 7 microphones logée dans un boîtier entièrement en aluminium avec en prime une caméra haute définition et des capteurs de profondeur.

<center>
<img src="/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/kinect.png" alt="L'Azure Kinect DK à 400 $ est utilisé pour les réunions modernes"/>

*L'[Azure Kinect DK](https://azure.microsoft.com/en-us/services/kinect-dk/) à 400 $ est utilisé pour les réunions modernes*
</center>

À première vue, il s'agit d'un appareil vraiment sophistiqué qui compléterait n'importe quelle salle de conférence, mais plus important encore, la puissante matrice de microphones promettait la qualité que nous recherchions. Avec la disposition circulaire, les sept microphones ont ouvert la possibilité d'utiliser des techniques de traitement du signal de pointe telles que la localisation de la source et la formation de faisceaux. Ce microphone était également le complément parfait de notre backend qui utilisait les services vocaux d'Azure, une plate-forme de reconnaissance vocale établie donnant à notre produit la puissance dont il avait besoin pour être un transcripteur de réunions de premier ordre.

<center>
<img src="/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/kinect-spec.png" alt="L'Azure Kinect DK est livré avec une matrice de 7 microphones pour capter les voix"/>

*L'Azure Kinect DK est livré avec une matrice de 7 microphones pour capter les voix*
</center>

Bien qu'Azure n'ait pas fait la coupe finale de SeaMeet, il nous a donné le départ dont nous avions besoin pour pouvoir réaliser notre vision. Enfin, nous avons lié tout cela à une interface utilisateur. Dans notre première itération, nous nous sommes contentés d'une conception générique basée sur Java qui, bien que simple, était parfaitement fonctionnelle. Étant donné que l'appareil Kinect ne peut pas exécuter de code externe, tout cela devait s'exécuter sur un ordinateur portable Windows supplémentaire. Même si c'était un peu approximatif au début, nous étions fiers de dire que nous avions un produit de transcription de réunions entièrement fonctionnel.

<center>
<img src="/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/seameet-old.png" alt="Configuration initiale du service SeaMeet de Seasalt.ai à l'aide d'une matrice de microphones Microsoft Kinect"/>

*Mise en œuvre de réunions modernes avec Azure Kinect et un ordinateur Windows, qui exécute une interface utilisateur simple basée sur Java pour afficher la transcription de la réunion en temps réel et l'identification du locuteur.*
</center>

### Déploiement de réunions modernes

En mai 2021, nos ingénieurs sont arrivés à Singapour pour déployer notre solution commerciale moderne en tant que preuve de concept. Opposés à deux autres entreprises concurrentes, nous avons chacun été chargés de démontrer notre vision de l'avenir des réunions.

Malgré le fait que le sans fil soit devenu la norme au cours de la dernière décennie, nous avons constaté que nos concurrents optaient toujours pour une solution filaire. Comme vous pouvez le voir sur l'image, chacun des 12 haut-parleurs était ancré à un microphone individuel. Un haut-parleur devait parler directement dans le microphone dans un cadre de conversation rapprochée pour que le système capte sa voix. Non seulement cela entrave gravement la flexibilité, mais une telle configuration multiplie également la complexité avec un équipement audiovisuel alambiqué. Notre solution, en revanche, est entièrement alimentée par des capacités de champ lointain, grâce à la matrice de 7 microphones et aux algorithmes de traitement du signal.

Dans une certaine mesure, notre solution ressemblait beaucoup à « Alexa pour les entreprises » : un appareil couvre toute la pièce, avec seulement un câble d'alimentation requis. Comparée à la solution de nos concurrents, notre solution a des générations d'avance dans le sens où nous comprenons vraiment les besoins des entreprises modernes alors qu'elles sont encore entièrement attachées à la génération filaire désuète.

<center>
<img src="/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/poc-setup.png"/>

*Configuration de la salle de conférence PoC. Il y avait 12 intervenants simulant une réunion gouvernementale de 2 heures.*

<img src="/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/poc-captioned.png"/>

*Un plan plus rapproché de tout l'équipement sur place.*
</center>

L'équipe était ravie de voir l'énorme différence. Avec quelques heures de réglage, le PoC final s'est très bien déroulé. L'équipe a également profité d'une visite à Singapour après le PoC, dans un pays où le Covid-19 était strictement contenu afin que la vie et les affaires se déroulent comme d'habitude.

### Au-delà des réunions modernes

Pendant notre séjour à Singapour, nos pensées sont allées au-delà d'un PoC réussi : par rapport à d'autres solutions concurrentes, la nôtre était 10 fois meilleure. Mais comment pourrions-nous faire 10 fois mieux que nous-mêmes ? Veuillez suivre nos étapes jusqu'au prochain blog de cette série.

`;export{e as default};

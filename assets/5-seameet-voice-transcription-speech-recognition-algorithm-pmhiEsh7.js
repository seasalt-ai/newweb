const e=`---
title: "Du Démo au Succès : Au-delà des algorithmes vocaux des réunions modernes (3/5)"
metatitle: "Démo au Succès (3/5) : Au-delà des algorithmes vocaux"
date: 2021-07-30 17:43:38-07:00
modified_date: 2025-07-29 00:00:00+00:00
draft: false
author: Cody Kim, Shayne Mei
description: "Dans la troisième partie de cette série de blogs, suivez le parcours de Seasalt.ai pour créer SeaMeet, notre solution collaborative pour les réunions modernes."
weight: 1
tags:
  - SeaMeet
image: images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/SeaMeet animation.gif
canonicalURL: /blog/seameet-voice-speech-recognition/
url: /blog/seameet-voice-speech-recognition/
---

*Tout au long de cette série de blogs, suivez le parcours de Seasalt.ai pour créer une expérience complète de réunions modernes, des débuts modestes à l’optimisation du service sur différents matériels et modèles, à l’intégration de systèmes NLP de pointe et enfin à la réalisation complète de SeaMeet, notre solution collaborative pour les réunions modernes.*

## Au-delà de l’algorithme
Modern Meetings était une excellente démo, mais elle est restée une démo. Il reste encore beaucoup à faire pour la rendre prête pour la production. Nous avons d’abord mis en œuvre avec succès la version démo en utilisant le stack Microsoft Azure. Mais en reconnaissant toutes les limites du logiciel, nous avons décidé de remplacer les algorithmes par les nôtres et de rendre toute l’expérience beaucoup plus fluide, légère et flexible.
Modern Meetings comporte quatre composants principaux :

1. Traitement du signal sur l’ensemble de microphones, notamment le beam forming
2. Diarisation et identification des intervenants
3. Reconnaissance vocale personnalisée
4. Une meilleure interface utilisateur

Nous détaillerons ensuite tous les composants importants.

<center>
<img src="/images/blog/5-seameet-voice-intelligence-meeting-transcription-speech-recognition-algorithm-of-modern-meeting/tech-stack.png" alt="SeaMeet architect with 4 major components"/>

*Nous avons adapté les 4 principaux composants de Modern Meetings avec notre propre technologie : 1. Traitement du signal avec l’ensemble de microphones ; 2. Diarisation et identification des intervenants ; 3. Reconnaissance vocale personnalisée ; 4. Une interface web moderne.*
</center>

### Traitement du signal sur l’ensemble de microphones
L’ensemble de microphones, comparé à un seul microphone proche de la bouche, capte les voix sur 360 degrés, jusqu’à une distance de 5 mètres. Ainsi, un seul ensemble de microphones peut collecter la voix dans une salle de conférence de taille moyenne de 10x10 mètres. Comme tous les microphones sont regroupés sur un seul appareil, cela réduit considérablement la quantité de câbles dans la salle et simplifie l’installation et la maintenance.
L’objectif de l’utilisation d’un ensemble de microphones est de fournir à nos modèles la meilleure qualité de données possible. Ainsi, avant de passer l’audio par la reconnaissance vocale automatique, nous effectuons plusieurs algorithmes de traitement du signal. Le principal composant de notre pipeline de prétraitement implique un algorithme appelé beamforming. Comme nous travaillons avec des ensembles circulaires de microphones multiples, nous pouvons utiliser la petite différence de temps que le son met à atteindre les différents microphones. Le beamforming détermine les principales caractéristiques du signal — aussi appelé le meilleur faisceau — et accentue ces fréquences tout en atténuant les sons indésirables. L’effet est la réduction du bruit et de la réverbération, tandis que le signal principal, dans notre cas la voix, devient plus fort et plus clair.

Pour des performances optimales de nombreux algorithmes de beamforming, il serait nécessaire de connaître la position exacte de la source (l’intervenant) par rapport au microphone. Mais dans une application réelle, cela est impossible, alors nous calculons d’abord les poids de champ lointain en déterminant la direction de la source. Cette première étape, appelée localisation de la source, ou plus précisément Direction of Arrival (DOA), s’est avérée compliquée. Le principal problème était le lissage. L’algorithme nous donnait approximativement le bon résultat, mais la source déterminée oscillait constamment de 30 degrés de chaque côté de la direction réelle, ce qui perturbait le beamforming. La solution que nous avons trouvée a été de permettre à l’algorithme de localisation de la source d’utiliser uniquement la plage de fréquences qui encode la majeure partie de la voix humaine. Nous avons combiné cela avec une technique de lissage, en gardant un « historique » des résultats DOA pour faire une moyenne. Avec des résultats DOA plus fiables, nous avons pu calculer les poids de champ lointain et les utiliser pour déterminer le meilleur faisceau.

Avec la série d’algorithmes réalisés sur le Kinect DK : beamforming, réduction du bruit, réduction de la réverbération, localisation de la source, nous avons pu produire une voix humaine claire et améliorée en temps réel, tout en identifiant approximativement la direction de l’intervenant. Cela aidera beaucoup à l’identification de l’intervenant à l’étape suivante.

### Diarisation et identification des intervenants

Le prochain composant d’un système moderne de transcription de réunions est la reconnaissance automatique des intervenants. Comme mentionné dans la dernière partie de cette série, lire un texte conversationnel désorganisé sans information sur qui a dit quoi est frustrant et annule l’objectif d’avoir un tel système. C’est là qu’intervient la reconnaissance des intervenants.

Avec ce composant, nous pouvons aligner automatiquement les transcriptions et l’audio avec le nom de l’intervenant. Pour cela, nous utilisons un processus appelé diarisation, qui regroupe les segments audio en un certain nombre de groupes représentant le nombre d’intervenants dans l’enregistrement. Cela fonctionne en exploitant un système de détection d’activité vocale (VAD) pour déterminer les segments de parole, à partir desquels nous pouvons extraire une représentation vectorielle d’une courte fenêtre. Chaque vecteur extrait des fenêtres est appelé xvector au niveau de l’énoncé et, lorsqu’on fait la moyenne, on obtient un xvector au niveau de l’intervenant. Ces xvectors sont ensuite traités par un algorithme de regroupement, où chaque groupe représente les segments de parole appartenant au même intervenant. Il convient de mentionner que le choix de l’algorithme de regroupement affecte beaucoup les performances de la diarisation, et nous avons obtenu un taux d’erreur de diarisation (DER) optimal avec un regroupement spectral utilisant une matrice d’affinité à seuil ajusté automatiquement avec des valeurs de Normalized Maximum Eigengap (NME). Enfin, nous devons décider quel intervenant représente chaque groupe. Avant la réunion, nous pouvons effectuer un processus d’inscription pour extraire des xvectors à partir d’enregistrements de 40 secondes de chaque intervenant, que nous pouvons comparer avec les groupes pour identifier l’intervenant correspondant.

La beauté de cette chaîne de traitement réside dans sa flexibilité. Pour de nombreux scénarios de réunion, il est peu pratique et souvent impossible d’obtenir des enregistrements de chaque intervenant à l’avance. Pensez aux réunions d’affaires avec des clients VIP ou aux grands symposiums avec 50 intervenants. Dans ce cas, en sautant l’étape d’inscription, notre système de diarisation peut toujours séparer les segments de parole et regrouper ceux qui appartiennent au même intervenant. Il suffit qu’une personne écoute quelques secondes de chaque groupe pour déterminer l’identité de l’intervenant. Avec une interface utilisateur web moderne dédiée, nous pouvons offrir la même fonctionnalité mais avec plus de flexibilité.

### Reconnaissance vocale personnalisée

Après avoir découvert le transcripteur de réunions de Microsoft et compris ce qui le rend si puissant, nous étions prêts à rendre notre système totalement indépendant et à aller au-delà d’un produit déjà révolutionnaire. La force motrice derrière Modern Meetings et tout produit de transcription sont les modèles de reconnaissance vocale automatique (ASR). Naturellement, c’est là que nous avons concentré le plus d’attention.
Azure Cognitive Services a proposé une variété de modèles pour différentes langues et dialectes. Cependant, il était difficile de distinguer les performances entre les différents dialectes. Pour les différents dialectes anglais, il est probable que la plupart des efforts et des données aient été consacrés au modèle anglais américain, qui a ensuite été affiné avec des données accentuées pour créer les différents modèles de dialecte. Nous voulions nous assurer que, si nous proposions un modèle distinct, il soit adapté à un cas d’utilisation spécifique. Cela signifiait rassembler des milliers d’heures d’audio et de transcriptions localisées et consacrer des semaines à l’entraînement et à l’affinage. Mais cela valait la peine de voir nos modèles s’améliorer à chaque époque et tenir nos promesses.

Avec un modèle fondamental solide, l’étape suivante a été d’étendre l’utilisabilité et la personnalisation. Chaque secteur a son propre jargon, ce qui rend difficile pour les modèles ASR de distinguer le vocabulaire ésotérique d’une série de mots courants phonétiquement similaires.

Notre réponse est SeaVoice, qui offre un lieu centralisé où les utilisateurs peuvent facilement adapter les modèles à leurs besoins spécifiques.
`;export{e as default};

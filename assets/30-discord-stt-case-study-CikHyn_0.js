const e=`---
title: "Voix-texte sur Discord : une étude de cas du bot Discord STT"
metatitle: "Voix-texte sur Discord : une étude de cas du bot Discord STT"
date: 2023-01-23 11:25:00-08:00
draft: false
author: Kim Dodds
description: "Dans ce blog, nous discuterons de nos découvertes sur la façon dont les utilisateurs réels de Discord utilisent les services SeaVoice après avoir examiné plusieurs semaines de données authentiques de voix-texte."
weight: 1
tags:
  - SeaVoice
  - Discord
image: images/blog/30-stt-case-study/discord-stt-bot-case-study.jpg
canonicalURL: /blog/speech-to-text-discord-case-study/
url: /blog/speech-to-text-discord-case-study/
---

*Après avoir lancé SeaVoice, l'un des bots de synthèse vocale et de reconnaissance vocale les plus rapides et les plus précis sur Discord, nous voulions comprendre comment les utilisateurs interagissaient réellement avec les services. Dans ce blog, nous discuterons de nos découvertes après avoir examiné plusieurs semaines de données utilisateur réelles de reconnaissance vocale.*

# SeaVoice : un bot Discord de synthèse vocale et de reconnaissance vocale

Discord, étant une plateforme principalement utilisée pour une combinaison de chat audio et textuel, est un terrain d'essai fantastique pour les services d'intelligence vocale et de traitement du langage naturel. Nous avons déployé le bot SeaVoice, équipé de commandes de synthèse vocale et de reconnaissance vocale, sur Discord en août 2022. Pour en savoir plus sur le fonctionnement du bot, ou voir une courte démonstration vidéo, vous pouvez visiter le [wiki du bot SeaVoice](https://wiki.seasalt.ai/seavoice/discord/1-intro-discord-bot/). En novembre de la même année, nous avons publié une nouvelle version avec des améliorations significatives du backend (comme décrit dans notre article de blog : [Bot Discord SeaVoice : améliorations du backend et de la stabilité](https://seasalt.ai/blog/27-seavoice-discord-backend-improvements/)) qui nous permettent d'enregistrer des données anonymes sur la façon dont les utilisateurs interagissent avec le bot SeaVoice. Dans notre dernier blog ([Étude de cas du bot Discord TTS](https://seasalt.ai/blog/29-discord-tts-case-study/)), nous avons analysé 1 mois de données utilisateur de la commande de synthèse vocale. En guise de suivi, dans cet article, nous examinerons environ 3 semaines de données utilisateur de reconnaissance vocale.

## Utilisation de SeaVoice STT

Au moment de la rédaction, le bot SeaVoice a été ajouté à près de 900 serveurs ! Environ 260 serveurs totalisant plus de 600 participants ont effectivement essayé la commande STT au moins une fois. Au cours des 3 dernières semaines, nous avons hébergé près de 1 800 sessions STT et produit un total de **plus d'un demi-million de lignes de transcription**.

<center>
<img src="/images/blog/30-stt-case-study/discord-stt-sessions-per-day.png" alt="Sessions quotidiennes de voix-texte du bot Discord SeaVoice sur 3 semaines."/>

*Sessions quotidiennes de voix-texte du bot Discord SeaVoice sur 3 semaines.*
</center>

Si nous examinons le nombre total de sessions STT par jour, nous avons constaté qu'il peut fluctuer de 40 à plus de 140 (avec une moyenne d'environ 70). Nous pouvons également considérer le nombre total de lignes de transcription que nous produisons. Le jour le plus lent, nous produisons aussi peu que 10 000 lignes, cependant, un jour chargé, nous avons produit plus de 40 000 lignes. Pour mettre cela en perspective, le 18 janvier, nous avons hébergé 102 sessions STT avec un total d'un peu moins de 30 000 lignes de transcription ; cela représentait près de 40 heures d'enregistrement.

Nous avons également constaté que si la plupart des sessions sont utilisées pour des conversations plus courtes (médiane de 57 lignes par session), il existe un nombre significatif de sessions très longues qui portent la moyenne à 650 lignes par session. Notre session la plus longue a dépassé 30 000 lignes, soit plus que la valeur d'une journée moyenne ! Enfin, nous avons également examiné le nombre d'utilisateurs qui ont tendance à être dans chaque session et avons constaté qu'il y a généralement 4 à 5 utilisateurs dans chaque session - cependant, nous avons une fois utilisé le bot pour prendre en charge la transcription en direct lors d'un séminaire virtuel qui comptait 45 participants !

<center>
<img src="/images/blog/30-stt-case-study/discord-transcription-lines-per-day.png" alt="Lignes transcrites par le bot Discord SeaVoice par jour sur 3 semaines."/>

*Lignes transcrites par le bot Discord SeaVoice par jour sur 3 semaines.*
</center>

Bien que la majorité des serveurs n'aient pas utilisé la session STT plus de quelques fois, il y en a pas mal qui utilisent le service de manière extensive. Depuis que nous avons commencé à enregistrer les données d'utilisation de STT fin décembre, le nombre total moyen de sessions par serveur est d'environ 7 ; cependant, notre serveur n°1 a enregistré 131 sessions - C'est une moyenne de plus de 6 sessions par jour ! Ce même serveur a transcrit plus de 150 000 lignes de parole en seulement 3 semaines ! Peut-être plus impressionnant encore, notre utilisateur n°1 vient du même serveur et a fait transcrire plus de 60 000 lignes de sa propre parole !

## Observations

### Pourquoi les gens utilisent la voix-texte

<center>
<img src="/images/blog/30-stt-case-study/discord-audio-transcript-download-user-quote.jpg" alt="Un utilisateur du bot Discord SeaVoice exprime son enthousiasme pour les fichiers audio et de transcription persistants."/>

*Un utilisateur du bot Discord SeaVoice exprime son enthousiasme pour les fichiers audio et de transcription persistants.*
</center>

Alors notre première question après avoir vu les données d'utilisation est : **pourquoi les utilisateurs fréquents utilisent-ils la voix-texte en premier lieu ?**

Nous avons examiné la base de données pour trouver des explications. Cependant, il s'est avéré plus difficile de trouver des explications concrètes sur les raisons pour lesquelles les utilisateurs utilisaient le service STT par opposition au service TTS. Apparemment, les gens ressentent le besoin d'expliquer aux autres dans le chat pourquoi ils utilisent TTS, mais moins avec STT. Quoi qu'il en soit, j'ai trouvé des transcriptions intéressantes qui ont donné un aperçu des raisons pour lesquelles les utilisateurs décident d'utiliser le service STT.

__*Pourquoi les utilisateurs utilisent STT :*__

- « C'est pourquoi la transcription est utilisée, parce que je peux regarder des choses que j'ai manquées. »
- « [utilisateur] est malentendant, alors il obtient un bot qui le transcrit »
- « [utilisateur] fait des raids avec eux et ils l'utilisent pour transcrire des trucs, mais ensuite [utilisateur] s'est dit, oh, on peut aussi l'utiliser pour ******* D et D »
- « J'ai hâte de revenir et de lire certaines de ces transcriptions plus tard [...] Je veux réécouter cet enregistrement et revoir cette transcription »
- « Si nous avons nos réunions ici, alors nous pouvons alimenter la transcription de la réunion dans l'IA »
- « Pendant une réunion avec des gens, c'est génial de voir une transcription »
- « [personnes] qui ne sont pas dans le chat ou des personnes qui sont dans la communauté, mais qui ne font pas partie du chat vocal, mais qui décident de regarder et de lire »

Donc, en général, il semble que la plupart des utilisateurs apprécient la commodité d'avoir une transcription en direct qui peut les aider à suivre la conversation et à combler les lacunes qu'ils ont manquées. C'est particulièrement le cas pour les utilisateurs qui ont une déficience auditive ou des difficultés audio/de connexion. Pour certains utilisateurs, le plus grand avantage est de conserver un enregistrement audio et textuel permanent de leur conversation ; cela pourrait être particulièrement applicable pour des cas d'utilisation comme la tenue d'un journal de session de Donjons et Dragons ou la tenue d'un registre de réunions importantes.

Étant donné que de nombreux utilisateurs n'ont pas explicitement dit pourquoi ils utilisaient le service STT, il a également semblé utile de comprendre ce qu'ils faisaient en utilisant le bot. L'examen des transcriptions des utilisateurs m'a donné des indices sur les activités qu'ils menaient pendant la transcription :

__*Ce que les utilisateurs font en utilisant STT :*__

- Juste discuter
    - Jeux :
    - Jeux occasionnels
    - Jeux avancés (ex/ coordination de groupe MMO, Massive Multiplayer Online, raids)
- Jeux de rôle (Donjons et Dragons)
- Streaming / enregistrement de contenu
- Discuter du travail scolaire / professionnel / bénévole

La grande majorité des transcriptions relèvent des catégories « juste discuter » et « jeux occasionnels ». Comme nous l'avons vu plus haut, je pense que la plupart des utilisateurs dans ce cas utilisent le bot pour améliorer l'accessibilité du canal vocal Discord et/ou apprécient la commodité de voir la transcription en direct pour combler les lacunes qu'ils ont manquées dans la conversation. Dans certains cas (comme lorsqu'il est utilisé pour des raids MMO), les discussions de jeu sont très complexes et les utilisateurs se coordonnent en temps réel ; les transcriptions en direct pourraient s'avérer extrêmement utiles pour le succès de l'équipe, car les utilisateurs peuvent se référer aux transcriptions pendant qu'ils jouent.

<center>
<img src="/images/blog/30-stt-case-study/discord-stt-for-mmo-raid.jpg" alt="Exemple de discussion complexe lors d'un raid MMO."/>

*Exemple de discussion complexe lors d'un raid MMO.*
</center>

Il semble également que de nombreux utilisateurs utilisent le bot pour transcrire des conversations plus sérieuses telles que des réunions scolaires, professionnelles et/ou communautaires bénévoles. Nous avons également utilisé notre bot pour transcrire une conférence technologique en ligne, [UnTechCon](https://gfsc.studio/2022/11/14/announcing-untechcon.html). Dans ces cas, les fichiers d'enregistrement et de transcription finaux peuvent s'avérer très utiles pour les utilisateurs pour examen après la réunion. Un dernier exemple intéressant que j'ai trouvé était un utilisateur enregistrant du contenu pour son flux. Étant donné que la transcription finale est accompagnée d'horodatages, les utilisateurs pourraient potentiellement télécharger le fichier de transcription comme sous-titres pour leur contenu audio ou vidéo enregistré.

<center>
<img src="/images/blog/30-stt-case-study/discord-stt-accessibility-user-quote.jpg" alt="Un utilisateur de SeaVoice exprime ses remerciements pour avoir rendu les canaux vocaux de Discord plus accessibles."/>

*Un utilisateur de SeaVoice exprime ses remerciements pour avoir rendu les canaux vocaux de Discord plus accessibles.*
</center>

Mais quelle que soit la raison exacte pour laquelle ils utilisent le service STT, de nombreux utilisateurs ont exprimé leur enthousiasme à l'idée de pouvoir participer aux conversations du canal vocal alors qu'ils n'auraient pas pu le faire autrement. Nous pensons que le service STT rend les canaux vocaux de Discord plus accessibles, et c'est la principale raison pour laquelle nos utilisateurs réguliers continuent d'utiliser le service.

### Commentaires sur le bot Discord SeaVoice

Un autre sujet intéressant trouvé dans les journaux était le commentaire sur le bot lui-même. Heureusement, nous avons vu plusieurs commentaires très positifs sur le bot et ses performances.

<center>
<img src="/images/blog/30-stt-case-study/discord-seavoice-transcription-accuracy.png" alt="Un utilisateur de SeaVoice commente la précision de la transcription."/>

*Un utilisateur de SeaVoice commente la précision de la transcription.*
</center>

Nous avons également trouvé plusieurs commentaires constructifs.

<center>
<img src="/images/blog/30-stt-case-study/discord-stt-accuracy-british-accent.png" alt="Un utilisateur de SeaVoice suggère une amélioration pour les accents britanniques."/>

*Un utilisateur de SeaVoice suggère une amélioration pour les accents britanniques.*
</center>

<center>
<img src="/images/blog/30-stt-case-study/discord-stt-siri-accent-accuracy-comparison.png" alt="Un utilisateur compare les performances de SeaVoice sur l'anglais accentué à celles de Siri."/>

*Un utilisateur compare les performances de SeaVoice sur l'anglais accentué à celles de Siri.*
</center>

La plupart des commentaires constructifs concernent le fait que le bot ne fonctionne pas bien avec l'anglais accentué non américain ; en particulier, les utilisateurs ont mentionné les accents britanniques et écossais. Pour l'avenir de nos services STT, nous pourrions faire des efforts significatifs pour améliorer notre reconnaissance vocale pour divers accents de l'anglais. Bien sûr, l'anglais n'est pas la seule langue que nos utilisateurs parlent, nous prévoyons donc également d'ajouter plus de support linguistique au bot. En fait, nous finalisons actuellement nos intégrations STT et TTS en mandarin taïwanais, et nous publierons bientôt une version mise à jour du bot.

## Confidentialité, sensibilité des données et contenu potentiellement offensant

Le développement de l'IA est entouré d'un torrent de dilemmes éthiques. Nos modèles ont besoin d'énormes quantités de données utilisateur réelles pour bien fonctionner, *mais comment collectons-nous ces données de manière éthique tout en respectant la vie privée de nos utilisateurs ?* Les modèles n'apprennent que sur la base des données qui leur sont fournies et ont donc des biais (potentiellement imprévus) ; *alors comment pouvons-nous nous assurer que nos modèles servent tous nos utilisateurs aussi bien ?* De plus, nos modèles n'ont pas de concept d'acceptabilité sociale et peuvent produire des résultats que certains utilisateurs trouvent offensants. Comme l'a si éloquemment dit l'un de nos utilisateurs : *« Est-ce raciste si le bot le fait, c'est la question »*.

<center>
<img src="/images/blog/30-stt-case-study/stt-accidental-racial-slur.png" alt="Un utilisateur de SeaVoice signale une transcription inexacte problématique."/>

*Un utilisateur de SeaVoice signale une transcription inexacte problématique.*
</center>

La raison pour laquelle je soulève ces points est due à quelques transcriptions préoccupantes dans les journaux. Le premier problème est que le bot transcrit occasionnellement du contenu offensant. Dans l'exemple ci-dessus, le bot a accidentellement transcrit le nom d'utilisateur de quelqu'un comme une insulte raciale. Évidemment, c'est une erreur de la part du bot qui peut être offensante pour nos utilisateurs et doit être étudiée. Mais cela conduit à plus de questions : *où traçons-nous la ligne entre l'offense et le préjudice ?*

<center>
<img src="/images/blog/30-stt-case-study/discord-transcription-censor.png" alt="Un utilisateur de SeaVoice commente la tentative de censurer certains mots de la transcription."/>

*Un utilisateur de SeaVoice commente la tentative de censurer certains mots de la transcription.*
</center>

Eh bien, pour commencer, nous avons décidé de donner ce pouvoir aux utilisateurs. L'une des prochaines fonctionnalités sur lesquelles nous travaillerons est la censure configurable de TTS et STT. Cela permettra aux serveurs d'appliquer éventuellement des censures pour les gros mots, le contenu sexuel, les insultes raciales, etc.

<center>
<img src="/images/blog/30-stt-case-study/discord-careful-transcript-content.png" alt="Un utilisateur de SeaVoice avertit un autre participant d'être conscient que ce qu'il dit apparaîtra dans la transcription."/>

*Un utilisateur de SeaVoice avertit un autre participant d'être conscient que ce qu'il dit apparaîtra dans la transcription.*
</center>

Fait intéressant, un autre problème connexe que nous avons constaté était que les utilisateurs s'autocensuraient pour éviter que certaines choses n'apparaissent dans la transcription. C'était étonnamment courant, et j'ai vu de nombreux cas où les utilisateurs expliquaient qu'ils ne voulaient pas que le bot transcrive ce qu'ils allaient dire, alors ils s'arrêtaient puis redémarraient le STT. C'est une préoccupation tout à fait valable de la part de l'utilisateur si, par exemple, il ne veut pas que le bot transcrive des informations sensibles.

<center>
<img src="/images/blog/30-stt-case-study/discord-stt-pause-deafen.png" alt="Comment mettre en pause le STT en rendant le bot sourd."/>

*Comment mettre en pause le STT en rendant le bot sourd.*
</center>

Je ne suis pas sûr qu'il y ait un moyen d'améliorer l'expérience utilisateur dans ce cas, mais je conseillerais aux utilisateurs qu'ils peuvent « assourdir » le bot temporairement pour arrêter d'envoyer de l'audio au bot. Dans ce cas, le bot ne recevra aucune donnée audio tant qu'il n'aura pas été « désassourdi », de sorte que l'utilisateur peut essentiellement mettre en pause la session STT sans en arrêter et en démarrer une nouvelle.

<center>
<img src="/images/blog/30-stt-case-study/discord-stt-opt-out-mute.jpg" alt="Un utilisateur de SeaVoice commente le malaise d'un autre participant avec le bot."/>

*Un utilisateur de SeaVoice commente le malaise d'un autre participant avec le bot.*
</center>

Enfin, le dernier problème que nous avons constaté est que certains utilisateurs se sentent tellement mal à l'aise avec la transcription du bot qu'ils évitent activement de parler dans le canal vocal lorsque le bot est présent. C'est ***exactement le contraire*** de notre objectif, qui est de rendre les canaux vocaux de Discord plus accessibles à tous. Bien que nous espérions que les utilisateurs accepteront notre [politique de confidentialité](https://seasalt.ai/privacy) et nous feront confiance pour utiliser leurs données de manière responsable, nous respectons absolument le droit de chacun à la vie privée. Par conséquent, **la prochaine fonctionnalité que nous mettrons en œuvre est un paramètre de désactivation STT**. Cela permettra à tout utilisateur de s'exclure de l'enregistrement et de la transcription STT, et ses données audio ne seront ni consultées ni collectées par le bot de quelque manière que ce soit.

Nous espérons que ces fonctionnalités planifiées nous permettront de continuer à rendre les canaux vocaux plus accessibles à tous tout en donnant aux utilisateurs la possibilité d'interagir avec le bot SeaVoice à un niveau avec lequel ils sont à l'aise. À l'avenir, nous continuerons à nous efforcer de résoudre de manière proactive ces problèmes difficiles afin de rendre SeaVoice le meilleur possible !

Merci de votre intérêt pour notre bot Discord et merci à nos utilisateurs pour votre soutien continu ! Vous pouvez en savoir plus sur notre produit STT sur notre [page d'accueil SeaVoice Speech-to-Text](https://suite.seasalt.ai/tts). Pour une démonstration individuelle de l'un de nos produits Voice Intelligence, remplissez le [formulaire de réservation de démonstration](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting).

Si vous n'avez pas encore essayé le bot SeaVoice, vous pouvez en savoir plus sur notre bot et l'ajouter à votre serveur à partir du [wiki du bot Discord SeaVoice](https://wiki.seasalt.ai/seavoice/discord/1-intro-discord-bot/). N'hésitez pas non plus à rejoindre notre [serveur Discord officiel SeaVoice](https://discord.gg/dfAYfwBQ).

<center>
<iframe src="https://discordapp.com/widget?id=919037515514654721&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
</center>
`;export{e as default};

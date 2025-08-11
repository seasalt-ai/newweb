const e=`---
title: "Service client United Airlines : le bon, le mauvais et le laid"
metatitle: "Analyse du service client United Airlines"
date: 2023-03-21 11:25:00-08:00
modified_date: 2025-07-28T16:56:53Z
draft: false
author: Xuchen Yao
description: "Xuchen Yao partage son expérience récente avec le service client United Airlines pendant les retards et annulations de vols, et propose des solutions pour relever les défis de l'extension dynamique du support client pendant les pics de trafic."
weight: 1
tags:
  - SeaX
image: images/blog/31-cx-at-united-airlines/flight-delay-illustration.png
canonicalURL: /blog/customer-service-at-united-airlines/
url: /blog/customer-service-at-united-airlines/
---

*[Seasalt.ai](https://seasalt.ai) PDG Xuchen Yao partage son expérience récente avec le service client United Airlines pendant les retards et annulations de vols. Cela l'a fait prendre conscience des défis auxquels font face les supports client des compagnies aériennes lors de l'extension dynamique pour faire face aux pics de trafic dans de telles situations. Yao parle d'améliorations potentielles, comme détourner le trafic d'auto-assistance des agents humains, améliorer l'efficacité des agents humains, et développer des technologies pour identifier et réduire proactivement les risques de problèmes potentiels.*

Ce blog a été écrit le 22 mars 2023 à bord du vol UA2 de Singapour à San Francisco.

J'ai récemment eu le plaisir de prendre le vol UA1 de San Francisco (SFO) à Singapour (SIN). Ce plaisir s'est rapidement transformé en malheur en raison d'annulations de vols. Voici ce que j'ai appris sur le service client United Airlines du point de vue d'un constructeur de technologies de centre de contact.

# Deux vols retardés : retards et annulations

Voici l'itinéraire prévu du 14 mars 2023, mardi, de Seattle à Singapour :

<center>
<img src="/images/blog/31-cx-at-united-airlines/united-flights.png" alt="Mes vols United Airlines prévus"/>

*7h29 – 9h42, UA2368 de Seattle (SEA) à San Francisco (SFO). 11h50 – 20h15, UA29 de San Francisco (SFO) à Singapour (SIN).*
</center>

Malheureusement, je n'ai pris aucun de ces vols.

Le premier vol a été retardé de 1,5 heure en raison d'un embouteillage à l'aéroport de Seattle (7h du matin !). Cela a réduit mon temps de connexion à SFO à 0. J'ai parlé au personnel de service au sol de SEA, qui m'a mis sur un vol Alaska Airlines de SEA à SFO. Ce vol Alaska Airlines a également été retardé, mais est arrivé à SFO à 11h, me donnant juste assez de temps pour attraper le vol suivant.

**Le bon côté** : United Airlines m'a permis de changer gratuitement vers Alaska Airlines.

**Le bon côté** : United Airlines a géré les retards très activement via le code court "26266". Quand le retard s'est produit, il a même offert des options de re-réservation.

**Le mauvais côté** : Les options de changement de vol étaient limitées aux vols United Airlines. Pas de changement inter-compagnies. J'ai dû parler à un agent humain pour changer vers un vol différent.

**Le côté laid** : Pourquoi l'aéroport SEA était-il si embouteillé à 7h du matin ?!

<center>
<table>
  <tr>
    <td><img src="/images/blog/31-cx-at-united-airlines/united-text-support-3.jpg" alt="Support SMS United Airlines - 3"/></td>
    <td><img src="/images/blog/31-cx-at-united-airlines/united-text-support-4.jpg" alt="Support SMS United Airlines - 4"/></td>
    <td><img src="/images/blog/31-cx-at-united-airlines/united-text-support-5.jpg" alt="Support SMS United Airlines - 5"/></td>
  </tr>
 </table>

*Le système SMS d'United Airlines était opportun et proactif.*
</center>

Ensuite, sur le vol UA1. Nous sommes restés au sol pendant 3 heures, et finalement le vol a été annulé en raison des événements suivants :

1. D'abord, il y avait des vents très forts à San Francisco, et tous les vols étaient au sol.
2. Ensuite, quand nous avons été autorisés à voler, tous les avions faisaient la queue pour le décollage.
3. Enfin, quand c'était presque notre tour, les pilotes ont dit qu'ils étaient en heures supplémentaires, et selon les règles FAA, il était illégal pour eux de continuer à voler. Parce que le vol vers Singapour est de 17 heures, compte tenu du temps qu'ils ont passé au sol, ils arriveraient à Singapour au-delà de la limite.

Malheureusement, il n'y avait pas de pilotes de remplacement, donc tout le vol a été annulé.

**Le côté laid** : Pendant les 3 heures entières au sol, United Airlines n'a fourni que 2 biscuits. C'est tout.

Tout le monde s'est précipité hors de l'avion, réfléchissant à la façon dont cela affecterait leur voyage. Comme c'était un vol international, nous devions arriver à Singapour à une date différente. Pas le lendemain, mais en fait deux jours plus tard : parce que Singapour est 15 heures en avance sur nous, et le vol prend 17 heures.

Ensuite, environ 300 passagers ont couru vers le service client au sol d'United Airlines. Quand je suis arrivé au service client United Airlines, il y avait déjà environ 200 personnes devant moi. Beaucoup d'entre eux étaient affectés par la météo d'autres vols United Airlines.

Étant donné que la file avançait lentement, parler à un agent au sol était futile. Je savais qu'il y avait un autre vol vers Singapour à 23h ce soir-là, aussi United Airlines. J'espérais pouvoir changer vers ce vol de 23h. Probablement que beaucoup de personnes de mon vol voulaient faire la même chose, mais faisaient la queue comme moi.

J'ai fait les choses suivantes :

1. J'ai appelé United Airlines : 800-864-8331
2. J'ai envoyé un SMS à l'assistant virtuel United Airlines via le code court : 32050.
3. J'ai essayé le chat vidéo avec le service client via le site web United Airlines.
4. J'ai aussi fait la queue pour le service client au sol.

Quand il faut résoudre immédiatement un problème important et urgent, je suis littéralement un client **multi-canal**.

**Le bon côté** : United Airlines a fourni 4 façons différentes de contacter leur service client.

**Le bon côté** : En confirmant le numéro de vol, United Airlines a pu vérifier son statut et savoir que le vol était affecté, et a offert des options de changement/annulation.

**Le mauvais côté** : L'estimation du temps d'attente au téléphone était complètement fausse. Il m'a dit que le temps d'attente était de 2 minutes, mais j'ai attendu 45 minutes pour parler à un agent.

**Le mauvais côté** : Le chatbot était très stupide. Je devais suivre son "menu" en répondant par 1/2/3/4 ou A/B/C/D/E.

<center>
<table>
  <tr>
    <td><img src="/images/blog/31-cx-at-united-airlines/united-text-support-3.jpg" alt="Support SMS United Airlines - 3"/></td>
    <td><img src="/images/blog/31-cx-at-united-airlines/united-text-support-4.jpg" alt="Support SMS United Airlines - 4"/></td>
    <td><img src="/images/blog/31-cx-at-united-airlines/united-text-support-5.jpg" alt="Support SMS United Airlines - 5"/></td>
  </tr>
 </table>

*Le chatbot United Airlines utilise une technologie de génération précédente, fournissant des cartes de menu pour limiter l'entrée des passagers.*
</center>

**Le côté laid** : Il y avait moins de 10 agents au sol pour gérer plus de 1000 passagers affectés. Cela a créé de l'anxiété, de la colère, de l'impuissance et du stress pour les clients et les agents. C'est parce que quand notre vol a été annulé, le personnel au sol et les agents de bord ont dit à tout le monde d'aller parler à leur service client au sol. **Diriger chaque passager affecté vers moins de 10 agents au sol a créé une attaque "DDOS" physique sur le service client au sol d'United Airlines.**

DDOS signifie "Déni de Service Distribué", quand les hackers dirigent le trafic de millions d'endroits vers un site web, le rendant incapable de répondre à aucun service.

**Le côté laid** : J'ai utilisé 4 canaux pour communiquer avec United Airlines (SMS, chat vidéo, téléphone, au sol). J'ai utilisé 4x les ressources, et d'autres ont probablement fait la même chose. Cela a artificiellement multiplié par 4 le trafic et la pression sur le service client United Airlines. Je suppose que d'autres passagers ont fait de même, car cela explique pourquoi mon "temps d'attente de 2 minutes" s'est finalement transformé en 45 minutes.

Finalement, j'ai réussi à contacter par téléphone, et l'agent a mis environ 20 minutes pour me changer vers le vol tardif de 23h vers Singapour ce soir-là. Quand j'ai terminé, j'étais toujours dans la file du chat vidéo, traitant avec le chatbot (ironiquement appelé liveperson), et apparemment encore dans la file physique.

J'ai dit à un jeune homme de mon vol d'appeler United Airlines. Il a dit : "Impossible, ça prendrait une éternité !" Mais j'ai dit : "Je viens de changer par téléphone. Regardez, il y a 200 personnes devant nous, combien de temps pensez-vous que vous allez attendre ?"

Plus tard à 23h, j'ai rencontré ce jeune homme sur le vol de changement. Il était très heureux de me voir et très reconnaissant pour mon "conseil téléphonique". Il portait un t-shirt "tiktok" et des écouteurs haut de gamme, donc je pensais qu'il était peut-être techniquement compétent, ou au moins bon avec les ordinateurs.

**Le côté laid** : Un client "techniquement compétent" pensait que le support téléphonique ne résoudrait rien, il préférait faire la queue en personne pour parler à un humain, même s'il voyait clairement à quel point la file était longue. **Cela reflète à quel point l'opinion publique sur l'inutilité du support téléphonique est mauvaise.**

# Support client des compagnies aériennes : le problème principal est l'évolutivité dynamique

Après avoir vécu un retard de vol et une annulation de vol le même jour, et communiqué deux fois avec le service client via 4 canaux différents, ainsi qu'une compréhension approfondie de la façon dont les centres de contact sont construits, je pense que le problème principal du support client des compagnies aériennes est :

**Le support client des compagnies aériennes ne peut pas s'étendre dynamiquement. Ou en termes de cloud computing : le support client des compagnies aériennes n'est pas élastique.**

Cela ne se produit pas seulement chez United Airlines. J'ai eu une expérience similaire avec Air Canada pendant Covid-19 : chaque appel avait un temps d'attente de plus de 2 heures.

Je ne pense même pas qu'un chatbot maladroit ou un agent humain sans empathie soit le problème principal. Le support client a ses modèles uniques, ils viennent par vagues : **généralement quand les vols sont affectés, des dizaines voire des centaines de passagers essaient de contacter simultanément, parfois par des multiples de 4x via des canaux croisés.**

Ces pics de trafic ne sont pas bien gérés par les centres de contact modernes des compagnies aériennes. Pire encore, tous ces problèmes sont des "codes rouges" : ils nécessitent une résolution _immédiate_. Désolé, pas de support email asynchrone basé sur Zendesk. _J'ai besoin de parler à un agent immédiatement_.

# Support client des compagnies aériennes : les humains ne peuvent pas s'étendre

Pensons à la façon dont les sites e-commerce se préparent pendant les pics de trafic comme le Black Friday :
1. **Prédire** quel type de trafic ils auront à quel moment.
2. **Pré-allouer** suffisamment de ressources serveur en contactant les fournisseurs cloud ou en augmentant les limites des clusters de serveurs.
3. **Générer dynamiquement** plus de serveurs quand le trafic augmente.

Le support client des compagnies aériennes peut-il faire la même chose ?
1. **Prédiction** : Nous pouvons utiliser des modèles pour prédire quand les vols seront affectés, mais je ne sais pas s'ils utilisent des modèles. Par exemple, considérez ces facteurs :
    * Trafic autour de l'aéroport – facilement disponible depuis Google Maps
    * Congestion de l'aéroport – certains aéroports ont des mises à jour en temps réel
    * Météo locale
    * Modèles de voyage communs comme les vacances
    * Événements locaux comme le CES de Las Vegas qui amènent beaucoup de voyageurs
    * Autres signaux comme l'état de l'avion
    * Historique des statuts
2. **Pré-allocation** : Je crois que c'est ce que chaque compagnie aérienne fait ou devrait faire pendant les vacances en embauchant plus d'agents. J'espère certainement qu'ils le font. Je sais que TurboTax embauche plus de gens autour des dates limites d'impôts.
3. **Génération dynamique** : C'est le cas le plus difficile. Il n'y a tout simplement pas de moyen facile de le faire avec des humains, surtout avec des agents expérimentés et bien formés.

# Support client des compagnies aériennes : comment s'étendre

Notre objectif principal est de gérer les pics de trafic sans retard quand les passagers ont besoin de résoudre des problèmes immédiatement.
1. Les canaux d'auto-assistance numérique ne semblent pas pouvoir complètement remplacer les agents humains pour deux raisons :
Les canaux d'auto-assistance numérique sont limités et ne peuvent pas fournir l'accès backend suffisant comme les agents humains.
2. Les passagers veulent psychologiquement parler à un humain, car les solutions d'automatisation traditionnelles n'ont pas aidé, surtout les chatbots notoires.

La solution n'est pas si simple, car les humains sont difficiles à étendre. Mais il y a des solutions :
1. Beaucoup de problèmes peuvent encore être résolus via des canaux d'auto-assistance. Nous devons les identifier et détourner le trafic d'auto-assistance des agents humains.
    * Par exemple, quand mon vol a été annulé – je voulais juste re-réserver. Mais United Airlines ne m'a pas donné cette option, j'ai dû appeler. Cependant, quand mon vol a été retardé, United Airlines a proactivement offert l'option de re-réservation. Les solutions à ces deux problèmes sont les mêmes – quand mon vol a été annulé, je n'avais pas besoin de parler à un agent comme quand mon vol a été retardé. Pourquoi ne puis-je pas faire de l'auto-assistance ?
2. Les agents humains peuvent être plus efficaces pendant le chat ou l'appel.
    * L'agent a mis environ 30 minutes pour me changer, dont environ 15 minutes à me faire attendre pendant qu'elle traitait quelque chose.
    * Les 15 minutes restantes elle a parlé avec moi : la moitié du temps elle collectait des informations.
    * Je pense qu'avec l'optimisation, si la collecte d'informations et l'automatisation sont bien faites, 30 minutes peuvent être réduites à 5-10 minutes.

Si je devais construire un système de centre de contact pour United Airlines, je ferais ceci :
1. Fournir le chat et le téléphone comme canaux principaux de service client. Ne pas rediriger tous les passagers d'un avion vers le service client au sol (nous avons tous vu à quel point les points de location de voiture sont encombrés après qu'un gros avion atterrit dans une destination touristique).
2. Fusionner les clients multi-canaux dans un seul canal. Cela signifie identifier les clients le plus rapidement possible. Cela réduira considérablement la taille de la file et économisera la bande passante des agents.
3. Produire un support basé sur le chat plus intelligent. Après ChatGPT, la génération actuelle de chatbots devient obsolète, dépassée et très impopulaire. Laissez ChatGPT gérer la conversation – selon notre expérience, il fait mieux que les humains !
4. Souligner l'efficacité des agents humains : si chaque appel prend 45 minutes, ce n'est pas suffisant pour faire le travail ; aidons-les à résoudre rapidement les problèmes en fournissant :
    * Des suggestions de "prochaine meilleure action"
    * Des "solutions précédemment réussies" basées sur les enregistrements de chat ou d'appel d'autres agents
    * Un copilote en temps réel, aidant à exécuter vers les systèmes backend via des appels API ou l'automatisation RPA
5. Construire un modèle prédictif sur les risques de pics de demandes de service client et les traiter proactivement.

Je n'ai jamais rencontré un représentant du service client qui m'a contacté proactivement pour résoudre un problème. C'est toujours moi, le passager, qui attend anxieusement, fait la queue, appelle.

Nous chez [Seasalt.ai](https://seasalt.ai/?utm_source=blog) sommes ravis de développer une technologie de type "Minority Report" pour identifier les problèmes avant qu'ils ne se produisent, réduire les risques en contactant proactivement les passagers affectés, et relever le défi de l'extension dynamique des centres de contact humains pendant les pics de trafic.

Si dans quelques années, je peux recevoir un appel d'une compagnie aérienne m'informant de problèmes potentiels avant que j'essaie de demander de l'aide, ce sera une expérience client vraiment étonnante et un voyage agréable, même avant que je voyage. Toute compagnie aérienne qui peut faire cela en premier gagnera d'innombrables voyageurs fidèles. `;export{e as default};

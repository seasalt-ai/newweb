const e=`---
title: "OpenAI vs. Humain vs. IA vocale : une comparaison des coûts (5/5)"
metatitle: "OpenAI Realtime API vs. Humain et IA vocale : répartition des coûts"
date: 2024-10-12 00:22:19-07:00
modified_date: 2025-07-26T16:48:39Z
draft: false
author: Xuchen Yao
description: "Une analyse détaillée des coûts de l'API en temps réel d'OpenAI par rapport aux réceptionnistes humains et aux agents d'IA vocale."
weight: 1
tags:
  - Service de réponse automatique
  - Appels entrants pour les petites entreprises
  - SeaChat
  - IA vocale
image: /images/blog/101-openai-chatgpt-realtime-api-cost-breakdown/101-openai-chatgpt-realtime-api-cost-breakdown.svg
canonicalURL: /blog/openai-chatgpt-realtime-api-cost-breakdown/
url: /blog/openai-chatgpt-realtime-api-cost-breakdown/
---


*Ceci est une série de 5 articles explorant les stratégies de communication client pour les petites entreprises, en se concentrant sur les services de réponse:*

<br/>

<center>
<img height="100%" width="80%" style="background-color: #ffffff" src="/images/blog/101-openai-chatgpt-realtime-api-cost-breakdown/series-diagram.svg"  alt="Diagramme de la série d'appels entrants">

</center>

1. [Pourquoi les petites entreprises ont-elles besoin d'un service de réponse ?](https://seasalt.ai/blog/96-why-small-businesses-need-answering-service/): Découvrez l'importance et les avantages des services de réponse.

2. [Externalisation vs. réceptionnistes en direct internes](https://seasalt.ai/blog/97-live-receptionist-inhouse-outbound/): Que sont les réceptionnistes en direct ? Devez-vous externaliser ou embaucher en interne ?

3. [Systèmes de réponse téléphonique automatisés (Réponse vocale interactive IVR vs. Agents d'IA vocale)](https://seasalt.ai/blog/98-inbound-answering-automated-system/): Qu'est-ce qu'un service de réponse automatisé ? Devez-vous utiliser la réponse vocale interactive ou les agents d'IA vocale ?

4. [Décision : Mes petites entreprises devraient-elles utiliser des réceptionnistes en direct ou des services de réponse automatisés ?](https://seasalt.ai/blog/99-inbound-answering-live-vs-automated/): Vous avez tout appris sur les services de réponse de notre série. Il est maintenant temps de décider quel type de service est le mieux adapté à votre entreprise.

5. (Cet article) [OpenAI vs. Humain vs. IA vocale : une comparaison des coûts](https://seasalt.ai/blog/101-openai-chatgpt-realtime-api-cost-breakdown/): Vous vous demandez si vous devriez passer à la dernière technologie d'IA vocale ? Jetons un coup d'œil aux coûts réels.

---

## TLDR:

1. OpenAI et les humains peuvent être **chers** :
   1. L'API en temps réel d'OpenAI peut permettre une expérience d'agent vocal (IA) à environ **1 $ par minute.**
   2. Les réceptionnistes virtuels à la demande (humains) sont également tarifés à environ **1 $ par minute.**
2. Mais il existe des options **équilibrées** avec des mises en garde :
   1. Lorsqu'ils sont employés à long terme, les agents humains avec une bonne maîtrise de l'anglais peuvent coûter aussi peu que 5 $ par **heure** (0,08 $ par minute).
   2. Les agents d'IA vocale proposés par les startups peuvent coûter aussi peu que 7,2 $ par **heure** (0,12 $ par minute).

*Si vous préférez écouter une version audio de cet article, voici la vidéo :*

<iframe width="100%" height="400" src="https://www.youtube.com/embed/?v=DgX6F711ceA&list=PL8K7_LTqly46agqJW2quG5Vsylt5os1Al" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>


## Coût réel de l'API en temps réel de ChatGPT-4o

OpenAI a publié son [API en temps réel](https://openai.com/index/introducing-the-realtime-api/) pour ChatGPT-4o le 1er octobre 2024. C'est 5 mois après la publication de [GPT-4o](https://openai.com/index/hello-gpt-4o/), le premier grand modèle linguistique omnicanal. Les performances sont époustouflantes. Chatgpt-4o-realtime sonne comme un humain, répond comme un humain et est robuste face aux bruits et aux interruptions.

Cependant, Chatgpt-4o-realtime est-il abordable ?

À première vue, l'API en temps réel d'OpenAI semble environ 30 fois plus chère que GPT-4o-mini *en texte* (**5 $ vs 0,15 $** / 1 million de jetons d'entrée).

<br/>

<center>
<div style="background-color: #ffffff;">
<img height="100%" width="100%" src="/images/blog/101-openai-chatgpt-realtime-api-cost-breakdown/October 2024 pricing for chatgpt-4o-mini.png"  alt="Tarification d'octobre 2024 pour chatgpt-4o-mini">
</div>

*Tarification d'octobre 2024 pour chatgpt-4o-realtime*
</center>

<br/>

<center>
<div style="background-color: #ffffff;">
<img height="100%" width="100%" src="/images/blog/101-openai-chatgpt-realtime-api-cost-breakdown/October 2024 pricing for chatgpt-4o-realtime.png"  alt="Tarification d'octobre 2024 pour chatgpt-4o-realtime">
</div>

*Tarification d'octobre 2024 pour chatgpt-4o-mini*
</center>


OpenAI affirme que le coût de l'entrée audio est d'environ 0,06 $ par minute et de 0,24 $ par minute pour la sortie audio. En additionnant ces chiffres, cela ne devrait pas dépasser 0,30 $ par minute, n'est-ce pas ?

Nous avons effectué un test réel de l'API 4o-realtime et avons constaté qu'elle coûte environ 1 $ par minute.


<br/>

<center>
<div style="background-color: #ffffff;">
<img height="100%" width="100%" src="/images/blog/101-openai-chatgpt-realtime-api-cost-breakdown/Screenshot of the cost for one test of the ChatGPT-4o Realtime API.png"  alt="Capture d'écran du coût d'un test de l'API en temps réel de ChatGPT-4o">
</div>

*Capture d'écran du coût d'un test de l'API en temps réel de ChatGPT-4o*
</center>


Nous avons mené une conversation vocale de 5 minutes avec l'API chatgpt-4o-realtime et avons constaté qu'elle coûtait 5,38 $. La conversation vocale de 5 minutes contient environ 142 secondes d'audio transcrit (considérez-le comme une entrée audio), le reste étant principalement une sortie audio.

Lors d'un autre test que nous avons effectué, une simple conversation de 10 minutes a coûté environ 10 $.

Ouch, c'est cher. C'est en fait environ [10 fois plus cher que les propres agents vocaux de Seasalt.ai](https://chat.seasalt.ai/en-us#pricing?utm_source=blog/).

Si certains développeurs ne font que tester l'API et essaient de consacrer des efforts significatifs à la formation d'un agent d'IA vocale qui fait réellement quelque chose, ils peuvent facilement dépenser des centaines de dollars par jour !

## API en temps réel de ChatGPT-4o vs. Agents humains – lequel est le plus abordable ?

Donc, si l'on construisait un agent d'IA vocale en utilisant l'API en temps réel de ChatGPT-4o, cela coûterait environ 1 $ par minute, soit **60 $ de l'heure**.

### Combien coûte un agent humain ?

Si vous en utilisez un en interne, comme un réceptionniste, son salaire peut varier entre le salaire minimum (7,25 $ fédéral à 16 $ en Californie) et peut-être 20 à 30 $ de l'heure.

Si vous utilisez une agence externe, le prix peut varier : certains commencent à 349 $/mois pour 200 minutes plus des frais d'installation. Seasalt.ai a réalisé une enquête détaillée à ce sujet : [Coût des réceptionnistes en direct : interne vs. externalisation](https://seasalt.ai/blog/97-live-receptionist-inhouse-outbound/?utm_source=crossblog).


<br/>

<center>
<img height="100%" width="100%" src="/images/blog/97-live-receptionist-inhouse-outsourced/vendor-summary.png"  alt="Résumé des fournisseurs de réceptionnistes en direct">

*Résumé des fournisseurs de réceptionnistes en direct par Seasalt.ai*
</center>

## API en temps réel de ChatGPT-4o vs. autres agents d'IA vocale – quelle est la différence ?

L'API en temps réel de ChatGPT-4o représente une avancée significative dans la technologie d'IA vocale, offrant plusieurs différences clés par rapport aux autres agents d'IA vocale :

- **Réactivité** : elle offre des interactions quasi en temps réel, avec des temps de réponse moyens de 2 à 3 secondes
- **Robustesse** : L'API permet les interruptions et les redirections pendant les conversations, ce qui permet un flux de dialogue plus naturel
- **De bout en bout** : l'API ne nécessite pas de coller différents composants ensemble, tels que la parole au texte (Azure, Deepgram, etc.) et le texte à la parole (Azure, Eleven labs).

Mais la mise en garde ici est le coût : l'API en temps réel de ChatGPT-4o coûte environ 1 $ par minute, tandis que d'autres [agents d'IA vocale peuvent coûter aussi peu que 0,12 $ par minute](https://seasalt.ai/blog/98-inbound-answering-automated-system/?utm_source=crossblog).

<br/>

<center>
<img height="100%" width="100%" src="/images/blog/98-inbound-answering-automated-system/ai-product-comparison.png"  alt="Seasalt.ai vs. Bland AI vs. Smith.ai. Synthflow.ai vs. Retell AI vs. Slang AI vs. Gridspace pour les agents d'IA vocale">

*Comparaison des produits d'agents d'IA vocale par Seasalt.ai*
</center>


Il y a une différence de prix de 10 fois, mais y a-t-il une différence de performance de 10 fois ? C'est au client de juger.

## Verdict

Pour les propriétaires d'entreprise, il existe fondamentalement 4 options :

1. **Agents humains internes**
2. **Externaliser à une autre entreprise**, soit onshore, soit offshore
3. **Utiliser un agent d'IA vocale abordable**
4. **Construire avec l'API en temps réel d'OpenAI la plus avancée/chère**

J'ai résumé les différents avantages et inconvénients des différentes options ci-dessous :

* L'**API en temps réel d'OpenAI** offre l'expérience la plus rapide et la plus naturelle, mais nécessite une expertise technique et est coûteuse.
* Les **agents humains à la demande onshore** sont bons pour les tâches de base en anglais parfait, mais ont une intégration limitée.
* Les **agents humains à long terme offshore** sont les plus abordables, mais peuvent être peu fiables en raison de problèmes d'infrastructure et d'un taux de rotation élevé.
* Les **agents d'IA vocale intégrés** offrent un équilibre entre le coût, les fonctionnalités et la facilité d'utilisation, mais peuvent être légèrement moins réactifs et présenter des bizarreries d'intégration.

<br/>

<center>
<img height="100%" width="100%" src="/images/blog/101-openai-chatgpt-realtime-api-cost-breakdown/options-for-phone-answer-services.png"  alt="Différentes options pour les services de réponse téléphonique : humains vs. OpenAI vs. startups d'IA vocale">

*Différentes options pour les services de réponse téléphonique : humains vs. OpenAI vs. startups d'IA vocale*
</center>

En tant que praticien dans le domaine de la reconnaissance vocale et du traitement du langage naturel, mes deux centimes sont :

1. Utilisez les agents d'IA vocale intégrés sur le marché, comme [celui que j'ai fièrement construit avec SeaChat](https://wiki.seasalt.ai/seachat/inbound-voice-agent/tutorial/?utm_source=blog/). Ils sont matures et abordables.
2. Donnez une autre année à l'API en temps réel d'OpenAI pour que les cobayes la testent, et j'espère que le prix baissera à un prix plus abordable de 10 $/heure, alors **elle deviendra vraiment incroyable**. Attention, agents humains !


## En savoir plus
Si vous souhaitez d'abord explorer la technologie vocale de l'IA pour le service client à un prix raisonnable, vous pouvez visiter [SeaChat](https://chat.seasalt.ai/?utm_source=blog/) ou vous pouvez [réserver une démo avec nous](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting).


## À propos de cette série

*Ceci est une série de 5 articles explorant les stratégies de communication client pour les petites entreprises, en se concentrant sur les services de réponse:*

- [Pourquoi les petites entreprises ont-elles besoin d'un service de réponse ?](https://seasalt.ai/blog/96-why-small-businesses-need-answering-service/): Découvrez l'importance et les avantages des services de réponse.

- [Externalisation vs. réceptionnistes en direct internes](https://seasalt.ai/blog/97-live-receptionist-inhouse-outbound/): Que sont les réceptionnistes en direct ? Devez-vous externaliser ou embaucher en interne ?

- [Systèmes de réponse téléphonique automatisés (Réponse vocale interactive IVR vs. Agents d'IA vocale)](https://seasalt.ai/blog/98-inbound-answering-automated-system/): Qu'est-ce qu'un service de réponse automatisé ? Devez-vous utiliser l'IVR robotique ou les agents d'IA vocale ?

- [Décision : Mes petites entreprises devraient-elles utiliser des réceptionnistes en direct ou des services de réponse automatisés ?](https://seasalt.ai/blog/99-inbound-answering-live-vs-automated/): Vous avez tout appris sur les services de réponse de notre série. Il est maintenant temps de décider quel type de service est le mieux adapté à votre entreprise.

- (Cet article) [OpenAI vs. Humain vs. IA vocale : une comparaison des coûts](https://seasalt.ai/blog/101-openai-chatgpt-realtime-api-cost-breakdown/): La dernière technologie d'IA vocale d'OpenAI est un excellent agent d'IA vocale. Quel est le coût réel ?
`;export{e as default};

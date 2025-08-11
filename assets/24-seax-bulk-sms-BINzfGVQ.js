const e=`---
title: "SeaX Bulk SMS: Pour un contact client plus rapide et plus efficace"
metatitle: "SeaX Bulk SMS: Pour un contact client plus rapide et plus ef..."
date: 2022-09-09 11:05:22-07:00
modified_date: 2025-07-28 00:00:00+00:00
draft: false
author: Amy Chen, Kim Dodds, Sarah Reid
description: "Dans ce blog, nous montrerons comment la fonction SeaX Bulk SMS permet aux agents d'envoyer des messages sortants de manière proactive par SMS."
weight: 1
tags:
  - SeaX
image: images/blog/24-seax-bulk-sms/thumbnail.png
canonicalURL: /blog/seax-bulk-sms/
url: /blog/seax-bulk-sms/
---


*Dans nos précédents articles de blog, nous avons examiné certaines des fonctionnalités clés de SeaX (y compris [Voice Intelligence](https://seasalt.ai/blog/21-seax-voice-intelligence/), [Knowledge Base](https://seasalt.ai/blog/22-seax-knowledge-base/) et [Case Management](https://seasalt.ai/blog/23-seax-case-management/)) qui aident les agents à mieux gérer les appels et les messages entrants. Dans ce blog, nous montrerons comment la fonction SeaX Bulk SMS permet aux agents d'envoyer des messages sortants de manière proactive par SMS, qui, comme il a été démontré, sont ouverts plus rapidement et plus régulièrement par les destinataires que les communications par e-mail traditionnelles.*

# Table des matières
- [SMS vs E-mail](#sms-vs-email)
- [Normes 10DLC](#10dlc-standards)
- [SeaX Bulk SMS](#seax-bulk-sms)
    - [Téléchargement des contacts](#contact-upload)
    - [Composition du message](#message-composition)
    - [Estimation des coûts](#cost-estimate)
    - [Aperçu des messages en masse](#bulk-message-preview)
    - [Suivi de la progression de la campagne](#campaign-progress-monitoring)
    - [Cahier de messages entrants](#incoming-message-chat)
- [Conclusion](#closing)

# SMS vs E-mail

L'e-mail a tendance à être le mode de communication par défaut pour la plupart des opérations commerciales. Jusqu'à récemment, la messagerie texte (SMS) n'était pas un canal de communication largement utilisé pour la messagerie commerciale en masse, malgré sa popularité pour la communication interpersonnelle quotidienne. Cependant, ces dernières années, les fournisseurs de communication cloud tels que Twilio ont rendu le canal SMS beaucoup plus accessible aux entreprises en gérant les détails complexes de l'infrastructure de télécommunications et des fournisseurs de services en arrière-plan, et en fournissant une API SMS simple en tant que service aux clients. Bien que l'e-mail puisse rester le canal le plus populaire pour les entreprises, le SMS peut fournir un complément unique aux communications par e-mail traditionnelles.

<center>
<img src="/images/blog/24-seax-bulk-sms/1-pros-cons.png" alt="Quelques avantages et inconvénients des SMS pour les communications commerciales."/>

*Quelques avantages et inconvénients des SMS pour les communications commerciales.*
</center>

Mais pourquoi utiliser les SMS si l'e-mail a fait ses preuves ? Si nous prenons les campagnes marketing comme exemple, la réponse courte est : alors que le taux d'ouverture d'une campagne e-mail n'est que de 20 %, le taux d'ouverture moyen des SMS peut atteindre *98 %* - sans compter que les messages texte ont tendance à obtenir plus de réponses. De plus, les messages texte sont généralement ouverts dans les 90 secondes suivant leur réception, tandis que les e-mails ont tendance à être ouverts environ 90 minutes après. Enfin, le SMS a un taux de clics moyen d'environ 19 %, nettement supérieur à 3,2 % pour les e-mails ([source](https://manychat.com/blog/sms-vs-email-marketing-2021/)).

En général, les messages texte sont ouverts plus rapidement et plus fréquemment que les e-mails - peut-être parce que les textes sont toujours livrés directement au destinataire où qu'il se trouve, qu'il ait ou non le Wi-Fi. De plus, comme les SMS sont généralement utilisés pour les messages personnels, et moins fréquemment pour les communications commerciales, les destinataires pourraient considérer les textes comme plus importants ou substantiels que les e-mails.

Alors pourquoi tout le monde n'utilise pas les SMS ? Eh bien, bien sûr, il y a des avantages et des inconvénients. Naturellement, les SMS sont nettement plus chers que les e-mails car ils dépendent de l'infrastructure de télécommunications et des fournisseurs de services (tels que Verizon, AT&T, etc.) pour livrer les messages. De plus, les messages texte ont une limite stricte d'environ 900 caractères et une seule pièce jointe (qui coûte plus cher, bien sûr). Donc, dans l'ensemble, bien que les SMS puissent être une méthode de communication beaucoup plus efficace, l'inconvénient est que les entreprises doivent être plus sélectives quant au contenu qu'elles envoient pour s'assurer qu'elles sont rentables.

Cela dit, il n'y a aucune raison pour que les SMS et les e-mails ne soient pas utilisés ensemble ! Chaque canal a ses propres avantages et inconvénients, de sorte qu'une entreprise peut s'assurer qu'elle envoie les communications les plus efficaces en tirant parti des points forts de chaque canal.

# Normes 10DLC

Pour la messagerie SMS A2P (application-à-personne) à volume élevé, les opérateurs américains utilisent des codes longs standardisés à 10 chiffres, ou 10DLC. Avant de lancer une campagne SMS en masse, nous vous recommandons de lire plus d'informations sur le 10DLC et ses applications [ici](https://support.twilio.com/hc/en-us/articles/1260800720410-What-is-A2P-10DLC-).

# SeaX Bulk SMS

Le service SeaX Bulk SMS vous permet de télécharger facilement vos contacts/prospects, d'envoyer des SMS (nous prenons également en charge les MMS - messages multimédias) en masse et de gérer les réponses entrantes. Lisez la suite pour découvrir les quelques étapes simples pour lancer votre première campagne SMS en masse.

## Téléchargement des contacts

<center>
<img src="/images/blog/24-seax-bulk-sms/2-contact-upload.png" alt="Téléchargement d'une liste de contacts vers SeaX Bulk SMS."/>

*Téléchargement d'une liste de contacts vers SeaX Bulk SMS.*
</center>

La première étape consiste à télécharger les contacts et les prospects. Tout d'abord, organisez les contacts de votre campagne SMS dans un fichier csv. En plus des champs obligatoires, \`phone_number\` et \`name\`, vous pouvez ajouter d'autres champs et les utiliser dans le corps du message. Par exemple, vous pouvez modifier dynamiquement le corps du message pour inclure le nom du destinataire en fonction du champ \`name\` pour chaque contact. 

Ensuite, ouvrez simplement le service Bulk SMS sous SeaX et appuyez sur « Importer » pour télécharger vos contacts. Nous enregistrons tous vos contacts précédents dans la liste des destinataires afin que vous puissiez facilement lancer des campagnes de suivi.

## Composition du message

<center>
<img src="/images/blog/24-seax-bulk-sms/3-message-draft.png" alt="Composition d'un nouveau message SMS avec SeaX Bulk SMS."/>

*Composition d'un nouveau message SMS.*
</center>

L'étape suivante consiste à donner un nom à votre campagne et à composer le message. Bulk SMS vous permet d'accéder à toutes les informations de contact stockées dans votre fichier csv/excel. Par exemple, si vous avez un champ appelé \`name\` dans la liste de contacts, vous pouvez taper \`{name}\` dans le message et le message affichera automatiquement le nom de chaque contact dans le corps du message.

## Estimation des coûts

<center>
<img src="/images/blog/24-seax-bulk-sms/4-cost-estimate.png" alt="Sélection des numéros de téléphone d'envoi et obtention d'une estimation des coûts de campagne avec SeaX Bulk SMS."/>

*Sélection des numéros de téléphone d'envoi et obtention d'une estimation des coûts de campagne.*
</center>

Ensuite, choisissez le numéro de téléphone que vous souhaitez utiliser pour envoyer les messages sortants. Si vous n'avez pas encore de numéro de téléphone, vous pouvez cliquer sur « Devis pour un nouveau numéro » dans le coin supérieur droit pour soumettre une demande d'achat. Notre équipe peut vous aider à acheter de nouveaux numéros 10DLC. 

Vous pouvez également prévisualiser le prix unitaire estimé pour la campagne. Sachez que l'envoi et la réception de SMS/MMS coûtent de l'argent, alors assurez-vous de budgétiser en conséquence. 

## Aperçu des messages en masse 

<center>
<img src="/images/blog/24-seax-bulk-sms/5-preview.png" alt="Aperçu d'une campagne SMS en masse avant l'envoi avec SeaX."/>

*Aperçu d'une campagne SMS en masse avant l'envoi.*
</center>

You may preview the bulk messages before sending. It is vital to confirm the message body, recipients’ phone number, and sender’s phone number. Once you launch the campaign, it will not be possible to retract the messages. On this page, you can preview the first 3 messages in your campaign, which corresponds to the first 3 contacts from your list. 

## Suivi de la progression de la campagne

<center>
<img src="/images/blog/24-seax-bulk-sms/6-monitor.png" alt="Suivi de la progression d'une campagne SMS en masse avec SeaX."/>

*Suivi de la progression d'une campagne SMS en masse.*
</center>

Enfin, vous pouvez vous asseoir et surveiller la progression de la campagne sur le tableau de bord Bulk SMS. La page se rafraîchit et met à jour automatiquement l'état de la campagne. Vous pouvez consulter les statuts de livraison des messages, le taux de réussite/livraison, les coûts estimés, ainsi que le taux de réponse sur cette page. 

## Cahier de messages entrants

<center>
<img src="/images/blog/24-seax-bulk-sms/7-chat.png" alt="Traitement des réponses entrantes d'une campagne SMS en masse avec SeaX."/>

*Traitement des réponses entrantes d'une campagne SMS en masse.*
</center>

Comme toutes les fonctionnalités de SeaX, nous nous efforçons de permettre aux agents ou aux gestionnaires de campagne de gérer les demandes/problèmes entrants - Bulk SMS permet également à SeaX de gérer les efforts de marketing sortants. Après avoir lancé la campagne, vous pouvez gérer toutes les réponses entrantes dans la fenêtre de discussion affichée ci-dessous. 

# Conclusion

Merci d'avoir pris le temps de lire comment le système SeaX Bulk SMS permet aux agents d'envoyer des communications sortantes en plus de gérer les demandes de messages entrants. Restez à l'écoute pour le prochain segment de notre série de blogs, qui couvrira certains des outils de gestion et d'analyse intégrés à la plateforme SeaX. Si vous souhaitez en savoir plus immédiatement, remplissez notre [formulaire de réservation de démo](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting) pour avoir un aperçu direct de la plateforme SeaX.`;export{e as default};

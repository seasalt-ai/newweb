const e=`---
title: "La bonne méthode pour envoyer des SMS en masse à partir d’Excel, Google Sheets et Apple Numbers"
metatitle: "Envoi SMS en masse | Excel, Google Sheets, Apple Numbers"
date: 2023-10-01 10:25:00-08:00
modified_date: 2024-07-01 00:00:00+00:00
draft: false
author: Xuchen Yao
description: "Découvrez comment envoyer des SMS en masse depuis Excel, Google Sheets et Apple Numbers tout en restant conforme au 10DLC."
weight: 1
tags:
  - SeaX
  - Tutoriel
image: images/blog/35-how-to-send-bulk-sms-spreadsheet/35-how-to-send-bulk-sms-spreadsheet.jpg
canonicalURL: /blog/how-to-send-bulk-sms-spreadsheet/
url: /blog/how-to-send-bulk-sms-spreadsheet/
---

L’envoi de SMS en masse à une liste de contacts est une technique largement utilisée par les entreprises, les organisateurs d’événements et de nombreux professionnels. Pouvoir envoyer un message à grande échelle permet de gagner du temps et d’informer efficacement ses contacts. Bien qu’Excel, Google Sheets et Apple Numbers ne soient pas conçus nativement pour l’envoi de SMS, des extensions et services tiers rendent cela possible. Attention toutefois aux pièges et à la réglementation.

# Soyez conforme : inscription 10DLC

L’univers du SMS en masse s’est complexifié avec l’apparition de nouvelles règles anti-spam. Si vous ne souhaitez envoyer qu’une seule campagne et que vous n’êtes pas inquiet des conséquences réglementaires, suivez les tutoriels en ligne. Mais pour une activité durable, il est essentiel de connaître la législation sur le marketing SMS.

Au cœur de cette réglementation : le système 10DLC.

10DLC signifie « 10-Digit Long Code », le nouveau standard pour les SMS A2P (Application-to-Person) aux États-Unis. Points clés :
- Objectif : lutter contre le spam via des règles strictes sur l’envoi massif.
- Conformité : les entreprises doivent enregistrer et faire approuver leur 10DLC pour respecter la réglementation des opérateurs.
- Risques : envoyer des SMS sans 10DLC approuvé peut entraîner un bannissement ou d’autres sanctions.

[Cet article](https://support.twilio.com/hc/en-us/articles/1260800720410-What-is-A2P-10DLC-) explique comment enregistrer une campagne 10DLC. Seasalt.ai a aidé de nombreux clients SeaX Messaging à se mettre en conformité. Des questions ? Contactez-nous.

# Préparer vos contacts dans un tableur

Une fois votre campagne 10DLC en place, vous pouvez envoyer des SMS en masse sans craindre d’être bloqué.

Supposons que vous ayez une liste de contacts dans un tableur et que vous souhaitiez leur envoyer un SMS pour un événement. Commencez par nettoyer et standardiser les numéros.

## 1. Faire une sauvegarde

Avant toute modification, faites une copie de votre fichier : **Fichier > Créer une copie**.

<center>
<img src="/images/blog/35-how-to-send-bulk-sms-spreadsheet/1-make-a-copy-for-bulk-sms-contact-spreadsheet.png" alt="Faire une copie de la feuille de calcul des contacts SMS en masse"/>
_Faire une copie de la feuille de calcul des contacts SMS en masse_
</center>

## 2. Supprimer les doublons

a. Sélectionnez toutes les données.
b. Cliquez sur Données > Nettoyage des données > Supprimer les doublons.
c. Choisissez les colonnes à vérifier puis cliquez sur Supprimer les doublons.
d. Google Sheets vous indique le nombre de doublons supprimés.

<center>
<img src="/images/blog/35-how-to-send-bulk-sms-spreadsheet/2-remove-duplicates-for-bulk-sms-contact-spreadsheet.png" alt="Supprimer les doublons dans la feuille de calcul des contacts SMS en masse"/>
_Supprimer les doublons dans la feuille de calcul des contacts SMS en masse_
</center>

## 3. Standardiser le format des numéros

a. Choisissez un format unique. SeaX Messaging accepte 5551234567, 555-123-4567 ou +15551234567.
b. Utilisez Rechercher et Remplacer pour harmoniser le format (ex : remplacer les points par des tirets).
c. Utilisez une formule ou un script si besoin.

<center>
<img src="/images/blog/35-how-to-send-bulk-sms-spreadsheet/3-clean-numbers-for-bulk-sms-contact-spreadsheet.png" alt="Standardiser le format des numéros de téléphone dans la feuille de calcul des contacts SMS en masse"/>
_Standardiser le format des numéros de téléphone dans la feuille de calcul des contacts SMS en masse_
</center>

### 4. Valider les données

a. Vérifiez que chaque numéro a le bon nombre de chiffres. Filtrez ou triez pour repérer les erreurs.
b. Vérifiez que les noms ne sont pas vides ou erronés.

<center>
<img height="500" src="/images/blog/35-how-to-send-bulk-sms-spreadsheet/4-validate-format-for-bulk-sms-contact-spreadsheet.jpeg" alt="Valider les données dans la feuille de calcul des contacts SMS en masse"/>
_Valider les données dans la feuille de calcul des contacts SMS en masse_
</center>

## 5. Vérifier les cellules vides

Optionnel. Sur SeaX Messaging, les lignes vides sont ignorées automatiquement. Mais il est conseillé de les repérer et de les corriger avec le formatage conditionnel.

<center>
<img height="500" src="/images/blog/35-how-to-send-bulk-sms-spreadsheet/5-clean-blank-cells-for-bulk-sms-contact-spreadsheet.png" alt="Vérifier les cellules vides dans la feuille de calcul des contacts SMS en masse"/>
_Vérifier les cellules vides dans la feuille de calcul des contacts SMS en masse_
</center>

## Conseils supplémentaires sur la préparation des données

Le nettoyage des données est un processus itératif. Selon la taille de votre base, il peut être nécessaire de répéter ces étapes.

## Commencer l’envoi de SMS !

Excel ou Google Sheets ne permettent pas nativement l’envoi de SMS, mais des extensions et services tiers comme ClickSend ou Zapier existent.

Pour un marketing SMS sérieux, privilégiez une plateforme dédiée comme SeaX Messaging. Ces solutions offrent gestion des contacts, chat/appels, suivi des performances et accompagnement pour l’inscription 10DLC.

Quelques prestataires connus :
- SeaX Messaging
- Simple Texting
- Textedly

# Réussir ses campagnes SMS

<center>
<img height="500" src="/images/blog/35-how-to-send-bulk-sms-spreadsheet/6-successful-camapign-bulk-sms-contact-spreadsheet.jpeg" alt="Marketing SMS réussi"/>
</center>

Même avec les meilleures intentions, des problèmes peuvent survenir. Pour réussir sur le long terme :
- Vérifiez et respectez toujours les exigences 10DLC.
- Maintenez la qualité des messages, évitez le spam et proposez une option de désinscription.
- Choisissez un service SMS réputé pour garantir la délivrabilité.

# Conclusion

L’envoi de SMS en masse via des outils comme Excel ou Google Sheets est très efficace, mais avec la réglementation actuelle, il faut agir avec prudence et connaissance. En comprenant le 10DLC, vous pourrez envoyer des SMS en masse en toute confiance.

## Contactez-nous

Pour en savoir plus sur le 10DLC ou sur vos options de marketing SMS, [réservez une démo](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting). Nous serons ravis d’échanger avec vous !
`;export{e as default};

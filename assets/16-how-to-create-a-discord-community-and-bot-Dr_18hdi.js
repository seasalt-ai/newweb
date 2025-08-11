const e=`---
title: "Discord (2/3) : Comment créer une communauté et un bot Discord pour votre marque"
metatitle: "Discord (2/3) : Créez la communauté et le bot Discord de votre marque"
date: 2022-05-31 13:29:51-07:00
modified_date: 2025-08-06 11:06:35+09:00
draft: false
author: Kim Dodds
description: "Dans ce blog, nous vous guiderons dans la création d'un serveur pour votre marque et la connexion d'un bot, qui peut automatiser la modération, le rapport de bugs, les annonces, etc."
weight: 1
tags:
  - SeaX
  - Discord
image: /images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-community-and-bot-for-your-brand.jpg
canonicalURL: /blog/create-a-discord-community-and-bot/
url: /blog/create-a-discord-community-and-bot/
---

*Notre article de blog, [« Discord : Une nouvelle frontière pour l'engagement client »](https://seasalt.ai/blog/15-discord-a-new-frontier-for-customer-engagement/), a traité de la montée en popularité de Discord et de la manière dont les marques peuvent tirer parti de cette nouvelle plateforme sociale pour former leurs propres communautés en ligne et interagir avec les clients. Dans ce blog, nous vous expliquerons comment créer un nouveau serveur officiel pour votre marque, y compris comment connecter un bot, qui peut automatiser des tâches telles que la modération, le rapport de bugs, les annonces, etc.*

## Table des matières
- [Configuration du serveur](#configuration-du-serveur)
    - [Créer un nouveau serveur Discord](#créer-un-nouveau-serveur-discord)
    - [Convertir le serveur en « Serveur communautaire »](#convertir-le-serveur-en-serveur-communautaire)
    - [Configurer les salons, événements et autres fonctionnalités](#configurer-les-salons-événements-et-autres-fonctionnalités)
    - [Faites passer le mot !](#faites-passer-le-mot)
- [Configuration du bot Discord](#configuration-du-bot-discord)
    - [Créer un nouveau bot dans le portail des développeurs Discord](#créer-un-nouveau-bot-dans-le-portail-des-développeurs-discord)
    - [Créer un bot Discord simple avec PyCord](#créer-un-bot-discord-simple-avec-pycord)
    - [Inviter le bot Discord](#inviter-le-bot-discord)
    - [Tester l'intégration](#tester-l-intégration)

# Configuration du serveur

## Créer un nouveau serveur Discord
Depuis l'application Discord, cliquez sur le bouton « Ajouter un serveur » en bas à gauche.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/create-new-discord-server.png" alt="Création d'un nouveau serveur Discord."/>

*Fenêtre de dialogue lors de la création d'un nouveau serveur Discord.*
</center>

Vous pouvez choisir un modèle si vous souhaitez commencer avec des salons déjà créés pour vous, ou vous pouvez partir de zéro. Et la première étape est aussi simple que cela, votre serveur est créé !

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/new-discord-server.png" alt="Un serveur Discord nouvellement créé."/>

*Un serveur Discord nouvellement créé.*
</center>

## Convertir le serveur en « Serveur communautaire »

Il est fortement recommandé d'activer les fonctionnalités « communautaires » du serveur Discord. En convertissant en serveur communautaire, vous activez des outils supplémentaires qui peuvent aider à modérer, gérer et développer le serveur. En particulier, les serveurs communautaires ont accès aux fonctionnalités suivantes :

- **Écran d'accueil** : Présente les nouveaux utilisateurs à votre serveur
- **Salon d'annonces** : Vous permet de diffuser des messages à vos utilisateurs
- **Statistiques du serveur** : Affichez des analyses sur votre communauté et vos utilisateurs
- **Découverte** : Faites la publicité de votre communauté dans l'annuaire des serveurs de Discord

À côté du nom du serveur dans le coin supérieur gauche, cliquez sur le menu déroulant et sélectionnez « Paramètres du serveur ». Cliquez sur l'onglet « Activer la communauté » sur le côté gauche et sélectionnez « Démarrer ».

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/convert-to-community-discord-server.png" alt="Conversion d'un serveur Discord ordinaire en serveur communautaire."/>

*Activation des paramètres du serveur communautaire.*
</center>

Procédez à la configuration requise. L'activation de la communauté nécessite que votre serveur effectue une vérification supplémentaire pour les utilisateurs, active un filtre de discussion et configure un salon de règles.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-community-setup.png" alt="Configuration pour un serveur communautaire Discord."/>

*Configuration du serveur communautaire.*
</center>

Une fois la communauté activée, vous avez accès à plusieurs nouvelles fonctionnalités. Deux des fonctionnalités les plus utiles sont le message de bienvenue et le filtrage des membres :

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-server-welcome-page.png" alt="Exemple de message de bienvenue du serveur."/>

*Exemple de message de bienvenue du serveur.*

<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-server-membership-screening.png" alt="Paramètres de filtrage des membres."/>

*Paramètres de filtrage des membres.*
</center>

## Configurer les salons, événements et autres fonctionnalités
Après avoir configuré le serveur communautaire, vous avez également accès à de nouvelles fonctionnalités depuis la page principale du serveur.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-server-channel-types.png" alt="Création d'un nouveau salon sur un serveur Discord." style="width:50%"/>

*Création d'un nouveau salon.*

<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-server-channels.png" alt="Exemple des salons d'un serveur communautaire Discord." style="width:50%"/>

*Salons d'un serveur communautaire.*
</center>

Lorsque vous créez un nouveau salon, vous avez accès à deux nouveaux types de salons : annonce et scène. Seuls les modérateurs peuvent publier dans le salon d'annonces, ce qui est utile pour les publications et annonces officielles - de nombreux serveurs ont des bots qui publient automatiquement leur fil Twitter officiel ou leurs messages de forum dans ce salon. Le salon « scène » est un type spécial de salon vocal utile pour organiser des événements avec un public en direct. L'hôte a la capacité de modérer les autres intervenants (contrairement à un salon vocal ordinaire, où c'est la foire d'empoigne).

Une fois votre serveur entièrement configuré, il pourrait ressembler à ceci :

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/customized-discord-server.png" alt="Serveur Discord entièrement personnalisé."/>

*Serveur communautaire entièrement personnalisé.*
</center>

## Faites passer le mot !
Une fois votre serveur entièrement configuré, vous pouvez commencer à inviter des gens !
Discord propose un widget préfabriqué gratuit, qui peut être intégré à n'importe quel site Web pour faire la publicité de votre serveur.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-server-widget.png" alt="Paramètres du widget de serveur Discord."/>

*Paramètres du widget de serveur.*

<iframe src="https://discordapp.com/widget?id=966505646944055326&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>

*Un exemple de widget fonctionnel pour le serveur Discord Near Me Messaging de Seasalt.ai.*

</center>

Pour renforcer la confiance des utilisateurs potentiels, vous pouvez éventuellement contacter le support de Discord pour faire vérifier votre serveur. La vérification placera une icône « vérifié » à côté du nom de votre serveur, ce qui indique que le serveur est la communauté officiellement affiliée à une entreprise, une marque ou une personnalité d'intérêt public. Vous pouvez consulter les exigences de vérification sur le [site officiel de Discord](https://support.discord.com/hc/en-us/articles/360001107231-Verified-Server-Requirements).

Une fois que votre serveur est lancé et compte un bon nombre d'utilisateurs, Discord offre davantage d'opportunités pour faire la publicité de votre serveur en interne. Lorsque votre serveur a au moins 8 semaines et plus de 500 utilisateurs, vous pouvez demander un partenariat Discord, ce qui donne à votre serveur des avantages spéciaux exclusifs aux partenaires. Une fois que vous atteignez plus de 1 000 utilisateurs, vous pouvez rejoindre la Découverte de serveurs, ce qui permettra à quiconque utilisant Discord de découvrir et de rejoindre votre serveur.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-server-discovery.png" alt="Paramètres et exigences de la Découverte de serveurs Discord."/>

*Paramètres et exigences de la Découverte de serveurs Discord.*
</center>

# Configuration du bot Discord
Maintenant que vous avez configuré un serveur, vous pouvez l'améliorer en ajoutant un bot pour automatiser certains processus, tels que la modération, les commentaires des utilisateurs et les annonces. Continuez à lire la section suivante pour apprendre à configurer un bot simple, puis restez à l'écoute pour le prochain blog de notre série pour voir comment vous pouvez intégrer une expérience de service client complète au sein de votre serveur Discord.

## Créer un nouveau bot dans le portail des développeurs Discord
Créez un compte sur le [portail des développeurs Discord](https://discord.com/developers/applications). Créez une « Nouvelle application » et nommez-la.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/new-discord-application.png" alt="Créer une nouvelle application sur le portail des développeurs Discord."/>

*Tableau de bord des développeurs Discord : Applications.*
</center>

Sélectionnez votre nouvelle application et cliquez sur l'onglet « Bot » sur le côté gauche.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/new-discord-bot.png" alt="Paramètres du bot de l'application."/>

*Paramètres de l'application Discord.*
</center>

Cliquez sur « Ajouter un bot » pour créer votre bot Discord.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-bot-settings.png" alt="Créer un nouveau bot Discord."/>

*Création d'un nouveau bot Discord.*
</center>

Une fois créé, générez et copiez le jeton du bot. Enfin, assurez-vous que les autorisations de messagerie sont activées.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-bot-messaging-permissions.png" alt="Autorisations de messagerie du bot Discord."/>

*Création d'un nouveau bot Discord.*
</center>

## Créer un bot Discord simple avec PyCord

Nous utilisons la [bibliothèque PyCord](https://docs.pycord.dev/en/master/) comme un wrapper Python pour l'API Discord.

1.  Installez PyCord et créez un nouveau fichier Python pour votre bot Discord.
2.  Importez le paquet Discord et créez une instance du client Discord.
3.  Utilisez le wrapper d'événements du client pour créer une méthode \`on_message\`. Cette méthode recevra chaque message envoyé à un salon auquel le bot a accès.
    a. À l'intérieur de la méthode, vérifiez d'abord si le message provient du bot lui-même, et ignorez-le si c'est le cas.
    b. Sinon, nous commencerons par ne réagir qu'aux messages commençant par \`$bot\` - si le message commence par cela, nous répondrons simplement dans le même salon en disant \`J'ai bien reçu votre message !\`.
4.  Enfin, à la fin du script, assurez-vous de lancer le client Discord pour qu'il commence à écouter les événements dans le salon.

\`\`\`python
import discord

discord_client = discord.Bot()
discord_token = "xxxxxxxxxxxx"
 
@discord_client.event
async def on_message(message):
    """Écoute et réagit aux messages."""
    # Vérifie si le message vient du bot lui-même
    if message.author == discord_client.user:
        return

    msg = message.content
    if msg.startswith("$bot") or isinstance(message.channel, discord.DMChannel):
        await message.channel.send("J'ai bien reçu votre message !")

discord_client.run(discord_token)
`;export{e as default};

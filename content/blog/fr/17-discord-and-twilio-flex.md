---
title: "Discord (3/3) : Discord et Twilio Flex : Amener le Centre de Contact Flex vers des Territoires Inexplorés"
metatitle: "Discord (3/3) : Centre de Contact Twilio Flex dans Discord"
date: 2022-06-07T12:32:24-07:00
author: Kim Dodds
draft: false
image: /images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/flex-discord-thumbnail.png
description: "Dans cet article de blog, nous démontrerons comment Seasalt.ai intègre un centre de contact entièrement fonctionnel dans un serveur Discord."
tags: ["SeaX", "Discord"]
canonicalURL: "/blog/discord-and-twilio"
url: "/blog/discord-and-twilio/"
aliases:
  - /blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/
modified_date: "2025-01-27T10:30:00Z"
---

*Ceci est le dernier article de notre série en trois parties sur l'engagement client sur Discord. Notre premier article de blog ["Une Nouvelle Frontière pour l'Engagement Client"](https://seasalt.ai/blog/15-discord-a-new-frontier-for-customer-engagement/) a discuté de la popularité croissante de Discord et des nouvelles opportunités qu'il offre aux marques pour créer et s'engager avec leurs propres communautés en ligne. Dans la deuxième partie ["Comment Créer une Communauté Discord et un Bot pour Votre Marque"](https://seasalt.ai/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/), nous avons introduit comment créer un serveur Discord pour votre marque et comment intégrer des bots pour gérer la modération du serveur, les annonces, les retours utilisateurs et plus encore. Enfin, dans cet article de blog, nous démontrerons comment Seasalt.ai intègre un centre de contact entièrement fonctionnel dans un serveur Discord, permettant aux marques de gérer tous les aspects du service client sur la plateforme.*

## Table des Matières
- [Table des Matières](#table-des-matieres)
- [Démonstration de Service Client Discord](#demonstration-de-service-client-discord)
- [Twilio Flex](#twilio-flex)
- [SeaX](#seax)
- [Serveur de Démonstration](#serveur-de-demonstration)
  - [Aide Un-à-Plusieurs : Canaux Officiels](#aide-un-a-plusieurs-canaux-officiels)
  - [Aide Un-à-Un : Agent de Service Client](#aide-un-a-un-agent-de-service-client)
    - [Base de Connaissances](#base-de-connaissances)
    - [Transfert d'Agent en Direct](#transfert-dagent-en-direct)
  - [Gestion des Cas](#gestion-des-cas)
- [Plongée Technique Approfondie](#plongee-technique-approfondie)
  - [Définir le Flux Flex](#definir-le-flux-flex)
  - [Créer un Canal Personnalisé](#creer-un-canal-personnalise)
  - [Créer un Serveur HTTP pour Supporter un Routage Plus Complexe](#creer-un-serveur-http-pour-supporter-un-routage-plus-complexe)
    - [Webhook de Messages Sortants](#webhook-de-messages-sortants)
    - [Intégration du Bot](#integration-du-bot)
- [Résumé](#resume)

# Démonstration de Service Client Discord
Si vous êtes impatient d'aller droit au but et de voir le produit final, nous montrerons d'abord la vidéo de démonstration finale :

<iframe width="85%" height="450px" src="https://www.youtube.com/embed/iUK4YkGYI6Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

Notre objectif est de démontrer comment intégrer Discord dans un logiciel de service client existant (dans ce cas, [Twilio Flex](https://flex.twilio.com/)) pour ajouter une valeur supplémentaire au serveur officiel d'une marque. Continuez à lire pour une compréhension plus approfondie de notre implémentation.

# Twilio Flex
Twilio est une entreprise de communications mature qui fournit des APIs pour gérer les SMS, appels téléphoniques, emails, messages de chat et plus encore. Flex est l'un des produits phares de Twilio : un centre de contact basé sur le cloud évolutif qui route les messages et appels de toute source vers des agents virtuels et en direct. Nous avons choisi Flex comme fondation pour notre intégration de centre de contact car il fournit déjà un excellent support pour divers canaux comme Facebook, SMS et WhatsApp.

# SeaX
SeaX est un centre de contact cloud profondément intégré avec des capacités d'IA avancées pour aider à améliorer la productivité et la satisfaction client. SeaX est l'un des produits phares de Seasalt.ai et a été déployé auprès de clients dans plus de 150 pays. La plateforme de centre de contact SeaX est construite sur Twilio Flex et inclut diverses fonctionnalités supplémentaires qui permettent aux agents en direct de mieux assister les clients. Certaines des fonctionnalités les plus utiles incluent la synthèse vocale et reconnaissance vocale intégrées, la base de connaissances pilotée par IA et le système de gestion des cas intégré. Pour plus d'informations sur toutes les fonctionnalités de la plateforme SeaX, visitez la [page d'accueil SeaX](https://seax.seasalt.ai/?utm_source=blog/).

# Serveur de Démonstration
Maintenant nous introduirons comment configurer notre serveur Discord. À des fins de démonstration, nous avons imaginé un scénario où notre serveur est utilisé comme une communauté pour des jeux comme Pokémon Go ! Le tableau ci-dessous décrit certaines des fonctionnalités démontrées dans notre serveur Discord.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-features-2.png" alt="Aperçu des fonctionnalités dans le serveur Discord de démonstration de service client."/>

*Aperçu des fonctionnalités dans le serveur Discord de démonstration.*
</center>

## Aide Un-à-Plusieurs : Canaux Officiels
Plusieurs canaux dans le serveur sont configurés pour fournir des flux directs entre les administrateurs/développeurs officiels et les joueurs.
Le **canal d'annonces** ne peut être publié que par les administrateurs et modérateurs et peut contenir des publications (manuelles ou automatiques) de comptes Twitter, sites web ou autres sources officielles.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-announcement-channel.jpg" alt="Canal d'annonces sur le serveur Discord contenant des publications du compte Twitter officiel."/>

*Canal #annonces de démonstration sur le serveur Discord.*
</center>

Le **canal de signalement de bugs** permet aux joueurs de discuter des bugs et des problèmes qui cassent le jeu. Les administrateurs peuvent surveiller de près ce canal pour identifier tout problème dans le jeu qui devrait être abordé. De plus, les utilisateurs peuvent soumettre des signalements de bugs officiels en utilisant la commande slash `/bug` dans le canal.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-bug-report-channel.jpg" alt="Canal de signalement de bugs sur le serveur Discord contenant des signalements de bugs soumis."/>

*Canal #signalement-de-bugs de démonstration sur le serveur Discord contenant des signalements de bugs soumis.*
</center>

Le **canal de demande de fonctionnalités** permet aux joueurs de discuter des changements de gameplay, améliorations de qualité de vie, ajouts de contenu et plus qu'ils aimeraient voir dans le jeu. Similaire au canal de demande de bugs, leur contribution peut être vue par les modérateurs Discord, et ils peuvent soumettre des demandes officielles en utilisant la commande slash `/nouvelle_fonctionnalite`.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-feature-request-channel.jpg" alt="Canal de demande de fonctionnalités sur le serveur Discord contenant des utilisateurs exécutant des commandes slash."/>

*Canal #demande-de-fonctionnalites de démonstration sur le serveur Discord contenant des utilisateurs exécutant des commandes slash.*
</center>

## Aide Un-à-Un : Agent de Service Client

Les joueurs peuvent déclencher des messages directs avec des agents en utilisant la commande slash `/aidemoi`. Les agents de service client peuvent être automatisés (agents virtuels) ou opérés par des agents en direct.

Pour notre démonstration, nous avons configuré un bot FAQ simple qui interroge la base de connaissances de l'entreprise pour fournir aux utilisateurs des suggestions d'articles pertinentes. Les utilisateurs peuvent également demander des agents en direct et seront transférés vers des agents en direct sur SeaX dans le même chat.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-customer-service-channel.jpg" alt="Canal de service client sur le serveur Discord contenant des utilisateurs déclenchant des MD."/>

*Canal #demande-de-fonctionnalites de démonstration sur le serveur Discord contenant des utilisateurs déclenchant des MD.*
</center>

### Base de Connaissances
Lorsque les utilisateurs soumettent des requêtes aux agents de service virtuels, les agents peuvent référer les utilisateurs vers des articles pertinents dans la base de connaissances.

### Transfert d'Agent en Direct
Une fois que les utilisateurs sont en messages directs avec le bot, ils peuvent demander des agents en direct. Ils recevront immédiatement une notification qu'un cas a été créé pour eux et qu'ils sont transférés vers un agent en direct. Quand l'agent en direct rejoint le chat, ils recevront également une notification.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-customer-service-dm.jpg" alt="Messages directs avec le service client contenant des suggestions d'articles de base de connaissances, transfert d'agent en direct et gestion des cas."/>

*Messages directs avec le service client contenant des suggestions d'articles de base de connaissances, transfert d'agent en direct et gestion des cas.*
</center>

En arrière-plan, les agents en direct peuvent gérer les appels entrants et messages de chat de tous les canaux (SMS, Facebook, Discord, appels vocaux, etc.) via une plateforme. Dans ce cas, la plateforme d'arrière-plan est SeaX.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/flex-discord-channel.jpg" alt="Interface SeaX montrant une vue d'agents en direct conversant avec des utilisateurs Discord."/>

*Interface SeaX montrant une vue d'agents en direct conversant avec des utilisateurs Discord.*
</center>

## Gestion des Cas
Une fonctionnalité que nous voulons souligner dans cette démonstration est la gestion des cas. La solution Discord de Seasalt.ai s'intègre avec le système de gestion des cas de SeaX pour suivre correctement divers cas pour les utilisateurs. Quand les utilisateurs interagissent avec le bot Discord (comme demander des agents en direct ou signaler des bugs), nous pouvons automatiquement ouvrir un nouveau cas et enregistrer toutes les informations importantes sur l'utilisateur et les problèmes qu'ils rencontrent. Cela facilite l'accès des agents en direct à tous les problèmes signalés et assure qu'ils suivent les utilisateurs jusqu'à ce que les cas soient résolus.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-new-case.png" alt="Création d'un nouveau cas dans le système de gestion des cas SeaX."/>

*Création d'un nouveau cas dans le système de gestion des cas SeaX.*

<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-existing-case.png" alt="Visualisation de cas existants dans le système de gestion des cas SeaX."/>

*Visualisation de cas existants dans le système de gestion des cas SeaX.*

</center>

# Plongée Technique Approfondie

Maintenant nous avons vu le produit final et toutes les fonctionnalités disponibles pour les membres du serveur et les agents en direct qui les assistent. Mais comment tout cela est-il réellement implémenté ? Dans notre article de blog précédent ["Comment Créer une Communauté Discord et un Bot pour Votre Marque"](https://seasalt.ai/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/), nous avons introduit comment créer un serveur Discord pour votre marque et comment intégrer des bots Discord pour le gérer. Pour supporter cette démonstration plus avancée, nous avons également utilisé [SeaChat, le moteur d'IA conversationnelle de Seasalt.ai](https://chat.seasalt.ai), pour construire un chatbot simple qui permet à notre bot Discord de gérer les requêtes en langage naturel des utilisateurs.

Côté SeaX, notre équipe a travaillé en étroite collaboration avec Twilio pour créer une solution de centre de contact riche en fonctionnalités basée sur Twilio Flex. Pour plus d'informations sur Twilio Flex et comment fonctionne le processus de configuration, vous pouvez lire le [Guide de Démarrage Rapide Twilio Flex](https://www.twilio.com/docs/flex/quickstart).

Avec le serveur Discord, bot Discord, chatbot prêts, et en s'assurant que nous avons une instance SeaX fonctionnant correctement, le plus grand défi était de savoir comment router correctement les messages entre utilisateurs, bots et agents en direct sur SeaX. Twilio excelle dans la gestion du routage des messages, donc notre objectif était de gérer toutes les commandes slash dans le serveur du bot Discord, puis transférer tous les autres messages (comme les messages directs envoyés aux chatbots ou agents en direct) vers Twilio.

## Définir le Flux Flex
La première étape est de s'assurer que tout message que nous envoyons à Twilio sera routé vers le bon endroit. Nous avons configuré un flux Twilio simple qui vérifie d'abord si l'utilisateur a demandé un agent en direct, et si oui, transfère les messages suivants vers SeaX. Si l'utilisateur n'a pas demandé d'agent en direct, alors nous transférons le message vers le chatbot pour obtenir une réponse. Pour plus d'informations sur comment configurer les flux, voir la [documentation Twilio Studio Flow](https://www.twilio.com/docs/studio).

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-flow.png" alt="Un flux Flex Studio simple qui route les messages entrants vers le chatbot ou SeaX."/>

*Un flux Flex Studio simple qui route les messages entrants vers le chatbot ou SeaX.*
</center>

## Créer un Canal Personnalisé
Donc maintenant nous comprenons comment les messages entrants seront routés. Cependant, Discord n'est pas un canal supporté nativement par Twilio. Heureusement, Twilio a un tutoriel détaillé sur comment [ajouter des canaux de chat personnalisés à Twilio Flex](https://www.twilio.com/blog/add-custom-chat-channel-twilio-flex). Après avoir suivi le guide pour configurer un nouveau canal personnalisé sur Twilio, nous devons réellement transférer les messages de Discord vers Twilio.

D'abord nous configurons le client Twilio :

```python
from twilio.rest import Client
twilio_client = Client(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)
```

Maintenant, une fois que nous recevons un message entrant de Discord, nous pouvons transférer ce message vers Twilio via le client Twilio. D'abord, nous devrions vérifier si l'utilisateur existe déjà dans le système Twilio et s'ils ont déjà un canal de chat ouvert.

```python
# Appeler la méthode get_user pour vérifier si l'utilisateur existe, et si non, créer un nouvel utilisateur
user = await get_user(user_id, twilio_client, TWILIO_SERVICE_SID)

# Obtenir les canaux dans lesquels l'utilisateur se trouve
user_channels = twilio_client.chat \
        .services(TWILIO_SERVICE_SID) \
        .users(user_id) \
        .user_channels \
        .list()
```

Si l'utilisateur a un canal de chat ouvert existant, nous devons l'utiliser pour que nous puissions accéder à l'historique du chat. S'il n'y a pas de canal de chat existant, nous créons un nouveau pour l'utilisateur :

```python
if user_channels:
    channel_sid = user_channels[-1].channel_sid
else:
    channel = twilio_client.flex_api \
            .channel \
            .create(
                flex_flow_sid=FLEX_FLOW_ID,
                chat_user_friendly_name=username,
                chat_friendly_name=chat_name,  # -> Nom convivial pour le canal de chat
                target=conversation_id,  # -> Identifiant unique pour l'identité de l'utilisateur du chat
                identity=conversation_id,  # -> Utilisateur, ex. / ID MD Discord
        )
    channel_sid = channel.sid
```

Enfin, une fois que nous établissons un canal de chat ouvert entre l'utilisateur Discord et Twilio, nous pouvons transférer le message entrant vers le flux Twilio Studio.

```python
message = twilio_client.chat \
        .services(TWILIO_SERVICE_SID) \
        .channels(channel_sid) \
        .messages \
        .create(
            body=message_text,
            from_=user_id,
            x_twilio_webhook_enabled='true',
            attributes=json.dumps(message_json)  # Envoyer les en-têtes comme attributs pour qu'ils puissent être accédés plus tard
        )
```
Maintenant nous pouvons transférer les messages entrants des utilisateurs Discord directement vers notre flux Twilio Flex. Côté bot Discord, assurez-vous que tous les messages directs sont transférés vers Twilio. Maintenant vous pouvez essayer d'envoyer des messages directs au bot Discord, et vous devriez les voir apparaître dans les logs du flux Twilio Studio - bien que nous ne soyons pas encore terminés !

## Créer un Serveur HTTP pour Supporter un Routage Plus Complexe

### Webhook de Messages Sortants
Donc maintenant nous comprenons comment les messages entrants seront routés. Cependant, il nous manque encore quelques parties. D'abord, nous savons que nous pouvons maintenant envoyer des messages à Twilio, mais comment répondons-nous aux utilisateurs sur Discord ? Notre bot Discord est le seul autorisé à envoyer des messages à notre serveur Discord et aux utilisateurs, et Twilio ne sait pas comment retourner nos messages au serveur Discord. La solution est que nous devons configurer un webhook de messages sortants qui se déclenche chaque fois qu'il y a un nouveau message dans le canal de chat Twilio. Dans ce webhook, nous pouvons alors utiliser notre bot Discord pour transférer les messages de retour vers notre serveur.

Pour cela, nous intégrerons le bot Discord dans un serveur HTTP plus puissant. Nous avons configuré un endpoint POST simple utilisant [FastAPI](https://fastapi.tiangolo.com/) qui servira de webhook de messages sortants. Une fois que nous avons le serveur configuré et notre bot Discord fonctionnant avec lui, nous pouvons définir l'endpoint POST.

Cet endpoint recevra chaque message ajouté au canal de chat, donc nous devons d'abord filtrer tout sauf les messages sortants de SeaX. Ensuite, nous devons obtenir l'ID du canal correct du corps du message pour savoir où transférer le message. Enfin, nous pouvons utiliser le client Discord pour transférer le message vers le canal Discord.

```python
@app.post("/forward-to-discord", status_code=200)
async def forward_discord_message(request: Request, response: Response) -> None:
    raw_body = await request.body()
    body = urllib.parse.parse_qs(raw_body.decode())

    # Se concentrer uniquement sur les messages du SDK (Flex, tous les autres messages viendront de l'API)
    if not body.get('Source') == ['SDK']:
        return

    # Les messages de Flex ne contiennent pas le conversationId du message original
    # Nous avons besoin du convId pour envoyer les messages de retour vers la conversation sur GBM
    # Obtenir le message précédent et extraire le conversationId
    message = twilio_client.chat \
            .services(TWILIO_SERVICE_SID) \
            .channels(body.get("ChannelSid")[0]) \
            .messages.list(limit=1)[0]

    attributes = json.loads(message.attributes)

    channel = discord_client.get_channel(attributes.get("channel", {}).get("id"))
    if channel:
        await channel.send(body.get("Body", [""])[0].get("text"))
    else:
        logger.error(f"Canal Discord avec ID {get_channel_id(req)} non trouvé !")
        response.status_code = 400
```

Enfin, pour envoyer des messages à notre endpoint, nous devons faire savoir à Twilio quel est notre nouveau webhook. Chaque canal de chat doit configurer son propre webhook. Donc si nous revenons là où nous avons initialement créé un nouveau canal de chat pour l'utilisateur, nous pouvons ajouter du code supplémentaire pour configurer le webhook :

```python
webhook = twilio_client.chat \
        .services(TWILIO_SERVICE_SID) \
        .channels(channel_sid) \
        .webhooks \
        .create(
            type='webhook',   
configuration_url=f"{SERVER_HOST}/forward-to-discord",
            configuration_method="POST",
            configuration_filters=["onMessageSent", "onMessageUpdated", "onMediaMessageSent"]
        )
```

### Intégration du Bot

Donc maintenant les messages sortants de SeaX devraient être correctement routés de retour vers notre serveur Discord. Mais nous n'avons toujours pas géré les messages envoyés au chatbot. Nous devons configurer un endpoint final qui sera déclenché depuis le flux Twilio Studio et recevra les messages utilisateur, interrogera le bot, et retournera la réponse à Discord.

```python
@app.post("/chatbot-to-discord", status_code=200)
async def receive_discord_message(request: Request, response: Response):
    """Recevoir les requêtes POST de Twilio, interroger le bot, et retourner la réponse à Discord."""
    req = await request.body()
    # Séparer le corps du message original du contenu twilio
    twilio_body, original_message_body = separate_original_message_body(req.decode())

    bot_response = await query_bot(original_message_body, bot_info)

    if bot_response:
        channel = discord_client.get_channel(original_message_body.get("channel_id"))
        if channel:
            for item in bot_response:
                await channel.send(item.get("text"))
```

Assurez-vous que le flux Twilio Studio a le webhook correct pour router les messages vers le bot. Maintenant nous avons terminé le routage des messages ! Nous pouvons voir une vue de haut niveau de tout le routage des messages dans ce diagramme :

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-routing-diagram.jpg" alt="Diagramme de routage des messages."/>

*Diagramme de routage des messages.*
</center>

# Résumé
En résumé, dans cette série d'articles de blog, nous avons discuté de la popularité croissante de Discord et des opportunités qu'il apporte comme nouvelle plateforme pour que les marques interagissent avec les clients. Nous avons introduit certaines fonctionnalités de base de Discord pour montrer comment les marques peuvent construire leurs propres communautés en ligne, ainsi que des fonctionnalités plus avancées qui permettent aux marques d'utiliser des bots Discord pour automatiser la modération et le service client sur leurs serveurs. Enfin, nous avons partagé comment nous avons intégré Discord avec notre plateforme de service client SeaX, apportant des fonctionnalités avancées aux communautés Discord comme le transfert d'agents en direct, la gestion des cas et la recherche de base de connaissances pilotée par IA.
Pour une démonstration personnelle, ou pour apprendre comment Seasalt.ai peut aider à répondre à vos besoins spécifiques en affaires, veuillez remplir notre formulaire ["Réserver une Démonstration"](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting). Pour plus d'informations sur l'intégration Flex/Discord ou pour nous contacter, visitez la [Liste des Partenaires Twilio de Seasalt.ai](https://showcase.twilio.com/partner-listing/a8E8Z000000PDCQUA4).
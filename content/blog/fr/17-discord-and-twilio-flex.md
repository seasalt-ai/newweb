---
title: "Discord (3/3) : Discord & Twilio Flex : Amener le centre de contact Flex en territoire inconnu"
metatitle: "Discord (3/3) : Centre de contact Twilio Flex dans Discord"
date: 2022-06-07T12:32:24-07:00
author: Kim Dodds
draft: false
image: /images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/flex-discord-thumbnail.png
description: "Dans ce blog, nous allons faire la démonstration de la manière dont Seasalt.ai a intégré un centre de contact à part entière dans un serveur Discord."
weight: 1
tags: ["SeaX", "Discord"]
canonicalURL: "/blog/discord-and-twilio"
url: "/blog/discord-and-twilio/"
aliases:
  - /blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/
modified_date: "2025-07-28T16:56:53Z"
---

*Ceci est notre dernier article d'une série en three parties sur l'engagement des clients sur Discord. Notre premier blog, [« Une nouvelle frontière pour l'engagement des clients »](https://seasalt.ai/blog/15-discord-a-new-frontier-for-customer-engagement/), a discuté de la montée en popularité de Discord et de la nouvelle opportunité qu'il présente pour les marques de créer et de participer à leurs propres communautés en ligne. Dans la deuxième partie, [« Comment créer une communauté et un bot Discord pour votre marque »](https://seasalt.ai/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/), nous avons expliqué comment créer un serveur Discord pour votre marque et comment intégrer un bot pour gérer la modération du serveur, les annonces, les commentaires des utilisateurs, etc. Enfin, dans ce blog, nous présenterons une démonstration de la manière dont nous, chez Seasalt.ai, avons intégré un centre de contact à part entière dans un serveur Discord, permettant aux marques de gérer tous les aspects du service client sur la plateforme.*

## Table des matières
- [Table des matières](#table-of-contents)
- [Démonstration du service client Discord](#discord-customer-service-demo)
- [Twilio Flex](#twilio-flex)
- [SeaX](#seax)
- [Serveur de démonstration](#demo-server)
  - [Aide 1 à plusieurs : canaux officiels](#1-to-many-help-official-channels)
  - [Aide 1 à 1 : agent du service client](#1-to-1-help-customer-service-agent)
    - [Base de connaissances](#knowledge-base)
    - [Transfert d'agent en direct](#live-agent-transfer)
  - [Gestion des cas](#case-management)
- [Plongée technique approfondie](#technical-deep-dive)
  - [Définir le flux Flex](#define-the-flex-flow)
  - [Créer un canal personnalisé](#create-a-custom-channel)
  - [Créer un serveur HTTP pour prendre en charge un routage plus complexe](#create-an-http-server-to-support-more-complex-routing)
    - [Webhook des messages sortants](#outbound-messages-webhook)
    - [Intégration du bot](#bot-integration)
- [Résumé](#summary)

# Démonstration du service client Discord
Si vous êtes impatient de passer à l'essentiel et de voir le produit final, nous vous présenterons d'abord la vidéo de démonstration finale :

<iframe width="85%" height="450px" src="https://www.youtube.com/embed/iUK4YkGYI6Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>


Notre objectif est de démontrer comment Discord peut être intégré à un logiciel de service client existant (dans ce cas, [Twilio Flex](https://flex.twilio.com/)) pour ajouter une valeur supplémentaire au serveur officiel d'une marque. Continuez à lire pour un aperçu plus détaillé de notre mise en œuvre.

# Twilio Flex
Twilio est une société de communication bien établie qui propose des API pour la gestion des SMS, des appels téléphoniques, des e-mails, des messages de chat, etc. Flex est l'un des produits phares de Twilio : un centre de contact évolutif basé sur le cloud qui achemine les messages et les appels de n'importe quelle source vers des agents virtuels et en direct. Nous avons choisi Flex comme base pour l'intégration de notre centre de contact car il dispose déjà d'un excellent support pour une grande variété de canaux, tels que Facebook, SMS et WhatsApp.

# SeaX
SeaX est un centre de contact cloud profondément intégré à des fonctionnalités d'IA avancées qui contribuent à augmenter la productivité et la satisfaction des clients. SeaX est l'un des produits phares de Seasalt.ai et a déjà été déployé auprès de clients dans plus de 150 pays. La plateforme de centre de contact SeaX est construite sur Twilio Flex et comprend une variété de fonctionnalités supplémentaires qui permettent aux agents en direct de mieux aider les clients. Certaines des fonctionnalités les plus utiles sont la synthèse vocale et la reconnaissance vocale internes, la base de connaissances alimentée par l'IA et le système de gestion des cas intégré. Pour plus d'informations sur toutes les fonctionnalités de la plateforme SeaX, veuillez visiter la [page d'accueil de SeaX](https://seax.seasalt.ai/?utm_source=blog/).

# Serveur de démonstration
Nous allons maintenant vous expliquer comment nous avons configuré notre serveur Discord. Pour les besoins de la démonstration, nous avons imaginé un scénario où notre serveur était utilisé comme une communauté pour un jeu comme Pokémon Go ! Le tableau suivant présente certaines des fonctionnalités présentées sur notre serveur Discord.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-features-2.png" alt="Aperçu des fonctionnalités du serveur Discord de démonstration du service client."/>

*Aperçu des fonctionnalités du serveur Discord de démonstration.*
</center>

## Aide 1 à plusieurs : canaux officiels
Plusieurs canaux du serveur sont configurés pour fournir un flux direct entre les administrateurs/développeurs officiels et les joueurs.
Le **canal d'annonces** ne peut être publié que par les administrateurs et les modérateurs, and peut inclure des publications (manuelles ou automatisées) du compte Twitter, du site Web ou d'autres sources officielles.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-announcement-channel.jpg" alt="Le canal d'annonces sur le serveur Discord, avec une publication d'un compte Twitter officiel."/>

*Le canal #announcements sur le serveur Discord de démonstration.*
</center>

Le **canal de rapport de bogues** permet aux joueurs de discuter des bogues et des problèmes qui cassent le jeu. Les administrateurs peuvent garder un œil sur ce canal pour identifier tout problème dans le jeu qui devrait être ciblé. De plus, les utilisateurs peuvent soumettre un rapport de bogue officiel à l'aide de la commande barre oblique `/bug` depuis le canal.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-bug-report-channel.jpg" alt="Le canal de rapport de bogues sur le serveur Discord, avec un rapport de bogue soumis."/>

*Le canal #bug-report sur le serveur Discord de démonstration, avec un rapport de bogue soumis.*
</center>

Le **canal de demande de fonctionnalités** permet aux joueurs de discuter des changements de gameplay, des améliorations de la qualité de vie, des ajouts de contenu, etc. qu'ils aimeraient voir ajoutés au jeu. Semblable au canal de demande de bogues, leur contribution peut être vue par les modérateurs de Discord et ils peuvent utiliser la commande barre oblique `/new_feature` pour soumettre une demande officielle.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-feature-request-channel.jpg" alt="Le canal de demande de fonctionnalités sur le serveur Discord, avec un utilisateur effectuant une commande barre oblique."/>

*Le canal #feature-request sur le serveur Discord de démonstration, avec un utilisateur effectuant une commande barre oblique.*
</center>

## Aide 1 à 1 : agent du service client

Les joueurs peuvent utiliser la commande barre oblique `/helpme` pour déclencher un message direct avec un agent. L'agent du service client peut être soit automatisé (agent virtuel), soit géré par un agent en direct.

Pour notre démonstration, nous avons mis en place un simple bot FAQ qui interroge la base de connaissances de l'entreprise pour fournir des suggestions d'articles pertinents à l'utilisateur. L'utilisateur peut également demander un agent en direct et sera transféré dans le même chat vers un agent en direct sur SeaX.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-customer-service-channel.jpg" alt="Le canal du service client sur le serveur Discord, avec un utilisateur déclenchant un DM."/>

*Le canal #feature-request sur le serveur Discord de démonstration, avec un utilisateur déclenchant un DM.*
</center>

### Base de connaissances
Lorsque l'utilisateur soumet une requête à l'agent de service virtuel, l'agent peut renvoyer l'utilisateur à des articles pertinents dans la base de connaissances.

### Transfert d'agent en direct
Une fois qu'un utilisateur est en message direct avec le bot, il peut demander un agent en direct. Il sera immédiatement informé qu'un cas a été créé pour lui et qu'il est en cours de transfert vers un agent en direct. Lorsque l'agent en direct rejoindra le chat, il recevra également une notification.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-customer-service-dm.jpg" alt="Un message direct avec le service client, avec des suggestions d'articles de la base de connaissances, un transfert d'agent en direct et la gestion des cas."/>

*Un message direct avec le service client, avec des suggestions d'articles de la base de connaissances, un transfert d'agent en direct et la gestion des cas.*
</center>

En arrière-plan, les agents en direct peuvent gérer les appels entrants et les messages de chat de tous les canaux (SMS, Facebook, Discord, appel vocal, etc.) via une seule plateforme. Dans ce cas, la plateforme d'arrière-plan est SeaX.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/flex-discord-channel.jpg" alt="L'interface SeaX affichant la vue de l'agent en direct d'une conversation avec un utilisateur sur Discord."/>

*L'interface SeaX affichant la vue de l'agent en direct d'une conversation avec un utilisateur sur Discord.*
</center>

## Gestion des cas
Une fonctionnalité que nous voulions souligner dans cette démonstration est la gestion des cas. La solution Discord de Seasalt.ai s'intègre au système de gestion des cas de SeaX pour suivre correctement les différents cas des utilisateurs. Lorsqu'un utilisateur interagit avec le bot Discord (comme demander un agent en direct ou signaler un bogue), nous pouvons automatiquement ouvrir un nouveau cas et consigner toutes les informations importantes sur l'utilisateur et le problème qu'il rencontre. Cela permet à l'agent en direct d'avoir un accès facile à tous les problèmes signalés et de s'assurer qu'il assure un suivi auprès des utilisateurs jusqu'à ce que le cas soit résolu.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-new-case.png" alt="Création d'un nouveau cas dans le système de gestion des cas de SeaX."/>

*Création d'un nouveau cas dans le système de gestion des cas de SeaX.*

<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-existing-case.png" alt="Affichage d'un cas existant dans le système de gestion des cas de SeaX."/>

*Affichage d'un cas existant dans le système de gestion des cas de SeaX.*

</center>

# Plongée technique approfondie

Maintenant que nous avons vu le produit final et toutes les fonctionnalités disponibles pour les membres du serveur et les agents en direct qui les assistent. Mais comment tout cela a-t-il été réellement mis en œuvre ? Dans notre dernier article de blog, « [Comment créer une communauté et un bot Discord pour votre marque](https://seasalt.ai/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/) », nous avons expliqué comment créer le serveur Discord pour votre marque et comment intégrer un bot Discord pour le gérer. Pour prendre en charge cette démonstration plus avancée, nous avons également utilisé [SeaChat, le moteur d'IA conversationnelle de Seasalt.ai](https://chat.seasalt.ai), pour créer un chatbot simple qui permet à notre bot Discord de gérer les requêtes en langage naturel pour les utilisateurs.

Du côté de SeaX, notre équipe a travaillé en étroite collaboration avec Twilio pour créer une solution de centre de contact riche en fonctionnalités, basée sur Twilio Flex. Pour plus d'informations sur Twilio Flex et le fonctionnement du processus de configuration, vous pouvez lire le [Guide de démarrage rapide de Twilio Flex](https://www.twilio.com/docs/flex/quickstart).

Après avoir préparé le serveur Discord, le bot Discord et le chatbot et nous être assurés que nous avons une instance fonctionnelle de SeaX en cours d'exécution, le plus grand défi consiste à acheminer correctement les messages vers et depuis l'utilisateur, le bot et les agents en direct sur SeaX. Twilio est fantastique pour gérer le routage des messages, notre objectif est donc de gérer toutes les commandes barre oblique depuis notre serveur de bot Discord, puis de transférer tous les autres messages (tels que les messages directs au chatbot ou à l'agent en direct) vers Twilio.

## Définir le flux Flex
La première étape consiste à s'assurer que tous les messages que nous envoyons à Twilio seront acheminés au bon endroit. Nous avons mis en place un flux Twilio simple qui vérifie d'abord si l'utilisateur a demandé un agent en direct, et si c'est le cas, transfère les messages suivants à SeaX. Si l'utilisateur n'a pas demandé d'agent en direct, nous transférons le message au chatbot pour obtenir une réponse. Pour plus d'informations sur la configuration du flux, reportez-vous à la [documentation de Twilio Studio Flow](https://www.twilio.com/docs/studio).

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-flow.png" alt="Un flux Flex Studio simple qui achemine les messages entrants vers un chatbot ou vers SeaX."/>

*Un flux Flex Studio simple qui achemine les messages entrants vers un chatbot ou vers SeaX.*
</center>

## Créer un canal personnalisé
Nous avons donc maintenant une idée de la manière dont les messages entrants seront acheminés. Cependant, Discord n'est pas un canal pris en charge nativement par Twilio. Heureusement, Twilio propose un tutoriel détaillé sur la manière d'[ajouter un canal de discussion personnalisé à Twilio Flex](https://www.twilio.com/blog/add-custom-chat-channel-twilio-flex). Après avoir suivi le guide pour configurer le nouveau canal personnalisé sur Twilio, nous devons en fait transférer les messages de Discord à Twilio.

Nous configurons d'abord le client Twilio :

```python
from twilio.rest import Client
twilio_client = Client(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)
```

Maintenant, une fois que nous recevons un message entrant de Discord, nous pouvons transférer ce message à Twilio via le client Twilio. Tout d'abord, nous devons vérifier si l'utilisateur existe déjà dans le système Twilio et s'il a déjà un canal de discussion ouvert.

```python
# appeler la méthode get_user pour vérifier si l'utilisateur existe, et en créer un nouveau si ce n'est pas le cas
user = await get_user(user_id, twilio_client, TWILIO_SERVICE_SID)

# récupérer les canaux dans lesquels se trouve l'utilisateur
user_channels = twilio_client.chat \
        .services(TWILIO_SERVICE_SID) \
        .users(user_id) \
        .user_channels \
        .list()
```

Si l'utilisateur a un canal de discussion existant ouvert, nous devons l'utiliser pour avoir accès à l'historique du chat. S'il n'y a pas de canal de discussion existant, nous en créons un nouveau pour l'utilisateur :

```python
if user_channels:
    channel_sid = user_channels[-1].channel_sid
else:
    channel = twilio_client.flex_api \
            .channel \
            .create(
                flex_flow_sid=FLEX_FLOW_ID,
                chat_user_friendly_name=username,
                chat_friendly_name=chat_name,  # -> Le nom convivial du canal de discussion
                target=conversation_id,  # -> L'identité qui identifie de manière unique l'utilisateur du chat
                identity=conversation_id,  # -> L'utilisateur, ex/ l'ID DM de Discord
        )
    channel_sid = channel.sid
```

Enfin, une fois que nous avons un canal de discussion ouvert entre l'utilisateur Discord et Twilio, nous pouvons transférer le message entrant au flux Twilio Studio.

```python
message = twilio_client.chat \
        .services(TWILIO_SERVICE_SID) \
        .channels(channel_sid) \
        .messages \
        .create(
            body=message_text,
            from_=user_id,
            x_twilio_webhook_enabled='true',
            attributes=json.dumps(message_json)  # envoyer les en-têtes en tant qu'attribut pour qu'ils soient accessibles plus tard
        )
```
Nous avons maintenant la possibilité de transférer tous nos messages entrants des utilisateurs de Discord directement à notre flux Twilio Flex. Du côté du bot Discord, assurez-vous que tous les messages directs sont transférés à Twilio. Vous pouvez maintenant essayer d'envoyer un message direct au bot Discord, et vous devriez le voir apparaître dans les journaux du flux Twilio Studio - Mais nous n'avons pas encore terminé !

## Créer un serveur HTTP pour prendre en charge un routage plus complexe

### Webhook des messages sortants
Nous avons donc maintenant une idée de la manière dont nos messages entrants seront acheminés. Cependant, il nous manque encore quelques pièces. Tout d'abord, nous savons que nous pouvons maintenant envoyer des messages à Twilio, mais comment répondons-nous à nos utilisateurs sur Discord ? Notre bot Discord est la seule chose autorisée à envoyer des messages à notre serveur et à nos utilisateurs Discord, et Twilio ne sait de toute façon pas comment renvoyer nos messages au serveur Discord. La solution est que nous devons configurer un webhook de messages sortants qui se déclenchera chaque fois qu'il y aura un nouveau message dans le canal de discussion Twilio. Dans ce webhook, nous pouvons ensuite utiliser notre bot Discord pour transférer le message à notre serveur.

Pour ce faire, nous intégrons notre bot Discord dans un serveur HTTP plus robuste. Nous avons utilisé [FastAPI](https://fastapi.tiangolo.com/) pour configurer un point de terminaison POST simple qui servira de webhook pour nos messages sortants. Une fois que nous avons configuré le serveur et que notre bot Discord fonctionne à côté, nous pouvons définir le point de terminaison POST.

Ce point de terminaison recevra chaque message ajouté au canal de discussion, nous voulons donc d'abord filtrer tout sauf les messages sortants de SeaX. Ensuite, nous devrons récupérer l'ID de canal correct dans le corps du message afin de savoir où transférer le message. Enfin, nous pouvons utiliser le client Discord pour transférer le message au canal Discord.

```python
@app.post("/forward-to-discord", status_code=200)
async def forward_discord_message(request: Request, response: Response) -> None:
    raw_body = await request.body()
    body = urllib.parse.parse_qs(raw_body.decode())

    # ne prêter attention qu'aux messages du SDK (Flex, tous les autres proviendront de l'API)
    if not body.get('Source') == ['SDK']:
        return

    # Les messages de Flex ne contiennent pas l'ID de conversation du message d'origine
    # Nous avons besoin de l'ID de conversation pour renvoyer le message à la conversation sur GBM
    # Récupérer le message précédent et extraire l'ID de conversation
    message = twilio_client.chat \
            .services(TWILIO_SERVICE_SID) \
            .channels(body.get("ChannelSid")[0]) \
            .messages.list(limit=1)[0]

    attributes = json.loads(message.attributes)

    channel = discord_client.get_channel(attributes.get(“channel”, {}).get(“id”))
    if channel:
        await channel.send(body.get("Body", [""])[0].get(“text”))
    else:
        logger.error(f"Le canal Discord n'a pas pu être trouvé avec l'ID : {get_channel_id(req)} !")
        response.status_code = 400
```

Enfin, pour que les messages soient envoyés à notre point de terminaison, nous devons informer Twilio de notre nouveau webhook. Chaque canal de discussion doit avoir son propre webhook configuré. Donc, si nous revenons à l'endroit où nous avons initialement créé le nouveau canal de discussion pour l'utilisateur, nous pouvons ajouter du code supplémentaire pour configurer le webhook :

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

### Intégration du bot

Les messages sortants de SeaX devraient donc maintenant être correctement acheminés vers notre serveur Discord. Mais nous n'avons toujours pas traité les messages qui vont au chatbot. Nous devons configurer un dernier point de terminaison qui sera déclenché par le flux Twilio Studio et qui recevra le message de l'utilisateur, interrogera le bot et renverra la réponse à Discord.

```python
@app.post("/chatbot-to-discord", status_code=200)
async def receive_discord_message(request: Request, response: Response):
    """Recevoir une requête POST de Twilio, interroger le bot et renvoyer la réponse à Discord."""
    req = await request.body()
    # séparer le corps du message d'origine du contenu de Twilio
    twilio_body, original_message_body = separate_original_message_body(req.decode())

    bot_response = await query_bot(original_message_body, bot_info)

    if bot_response:
        channel = discord_client.get_channel(original_message_body.get(“channel_id”))
        if channel:
            for item in bot_response:
                await channel.send(item.get(“text”))
```

Assurez-vous que le flux Twilio Studio dispose du webhook correct pour acheminer les messages vers le bot. Nous avons maintenant terminé notre routage de messages ! Nous pouvons voir une vue d'ensemble de tout le routage de messages dans ce diagramme :

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-routing-diagram.jpg" alt="Diagramme de routage des messages."/>

*Diagramme de routage des messages.*
</center>

# Résumé
Pour conclure, dans cette série de blogs, nous avons discuté de la montée en popularité de Discord et de l'opportunité qu'il présente pour les marques en tant que nouvelle plateforme pour interagir avec les clients. Nous avons passé en revue certaines des fonctionnalités de base de Discord, pour montrer how une marque peut créer sa propre communauté en ligne, ainsi que des fonctionnalités plus avancées qui permettent aux marques d'automatiser la modération et le support client sur leur serveur avec des bots Discord. Enfin, nous avons partagé notre démonstration de la manière dont nous avons intégré Discord à notre plateforme de service client, SeaX, pour apporter des fonctionnalités avancées à la communauté Discord, telles que le transfert d'agent en direct, la gestion des cas et la recherche dans la base de connaissances alimentée par l'IA.
Pour une démonstration personnelle, ou pour voir comment Seasalt.ai peut vous aider à répondre à vos besoins commerciaux spécifiques, veuillez remplir notre formulaire « [Réserver une démo](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting) ». Pour plus d'informations sur l'intégration Flex/Discord ou pour nous contacter, veuillez visiter la [liste des partenaires Twilio de Seasalt.ai](https://showcase.twilio.com/partner-listing/a8E8Z000000PDCQUA4).
---
title: "Discord (3/3): Discord & Twilio Flex: Das Flex Contact Center in unbekanntes Terrain bringen"
metatitle: "Discord (3/3): Twilio Flex Contact Center in Discord"
date: 2022-06-07T12:32:24-07:00
author: Kim Dodds
draft: false
image: /images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/flex-discord-thumbnail.png
description: "In diesem Blog zeigen wir, wie Seasalt.ai ein vollwertiges Contact Center in einen Discord-Server integriert hat."
weight: 1
tags: ["SeaX", "Discord"]
canonicalURL: "/blog/discord-and-twilio"
url: "/blog/discord-and-twilio/"
aliases:
  - /blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/
modified_date: "2025-07-28T16:56:53Z"
---

*Dies ist unser letzter Beitrag in einer dreiteiligen Reihe über Kundenbindung auf Discord. Unser erster Blog, [„Eine neue Grenze für die Kundenbindung“](https://seasalt.ai/blog/15-discord-a-new-frontier-for-customer-engagement/), befasste sich mit dem Popularitätsanstieg von Discord und der neuen Möglichkeit, die es Marken bietet, ihre eigenen Online-Communitys zu erstellen und daran teilzunehmen. In Teil zwei, [„So erstellen Sie eine Discord-Community und einen Bot für Ihre Marke“](https://seasalt.ai/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/), haben wir erläutert, wie Sie einen Discord-Server für Ihre Marke erstellen und wie Sie einen Bot integrieren, um die Servermoderation, Ankündigungen, Benutzerfeedback usw. zu verwalten. Schließlich präsentieren wir in diesem Blog eine Demonstration, wie wir bei Seasalt.ai ein vollwertiges Contact Center in einen Discord-Server integriert haben, sodass Marken alle Aspekte der Kundenbetreuung auf der Plattform abwickeln können.*

## Inhaltsverzeichnis
- [Inhaltsverzeichnis](#table-of-contents)
- [Discord-Kundenservice-Demo](#discord-customer-service-demo)
- [Twilio Flex](#twilio-flex)
- [SeaX](#seax)
- [Demo-Server](#demo-server)
  - [1-zu-Viele-Hilfe: Offizielle Kanäle](#1-to-many-help-official-channels)
  - [1-zu-1-Hilfe: Kundendienstmitarbeiter](#1-to-1-help-customer-service-agent)
    - [Wissensdatenbank](#knowledge-base)
    - [Live-Agenten-Übertragung](#live-agent-transfer)
  - [Fallmanagement](#case-management)
- [Technischer Deep Dive](#technical-deep-dive)
  - [Definieren des Flex-Flows](#define-the-flex-flow)
  - [Erstellen eines benutzerdefinierten Kanals](#create-a-custom-channel)
  - [Erstellen eines HTTP-Servers zur Unterstützung komplexerer Weiterleitungen](#create-an-http-server-to-support-more-complex-routing)
    - [Webhook für ausgehende Nachrichten](#outbound-messages-webhook)
    - [Bot-Integration](#bot-integration)
- [Zusammenfassung](#summary)

# Discord-Kundenservice-Demo
Wenn Sie es eilig haben und das Endprodukt sehen möchten, präsentieren wir Ihnen zuerst das endgültige Demo-Video:

<iframe width="85%" height="450px" src="https://www.youtube.com/embed/iUK4YkGYI6Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>


Unser Ziel ist es zu demonstrieren, wie Discord in bestehende Kundenservice-Software (in diesem Fall [Twilio Flex](https://flex.twilio.com/)) integriert werden kann, um dem offiziellen Server einer Marke einen zusätzlichen Mehrwert zu verleihen. Lesen Sie weiter, um einen genaueren Blick auf unsere Implementierung zu werfen.

# Twilio Flex
Twilio ist ein etabliertes Kommunikationsunternehmen, das APIs für die Verwaltung von Textnachrichten, Telefonanrufen, E-Mails, Chat-Nachrichten und mehr anbietet. Flex ist eines der Flaggschiffprodukte von Twilio: ein skalierbares, cloudbasiertes Contact Center, das Nachrichten und Anrufe von jeder Quelle an virtuelle und Live-Agenten weiterleitet. Wir haben Flex als Grundlage für unsere Contact-Center-Integration gewählt, da es bereits eine hervorragende Unterstützung für eine Vielzahl von Kanälen wie Facebook, SMS und WhatsApp bietet.

# SeaX
SeaX ist ein Cloud-Contact-Center, das tief in fortschrittliche KI-Funktionen integriert ist, die zur Steigerung der Produktivität und Kundenzufriedenheit beitragen. SeaX ist eines der Flaggschiffprodukte von Seasalt.ai und wurde bereits an Kunden in über 150 Ländern ausgeliefert. Die SeaX-Contact-Center-Plattform basiert auf Twilio Flex und umfasst eine Vielzahl zusätzlicher Funktionen, die Live-Agenten dabei unterstützen, Kunden besser zu helfen. Einige der nützlichsten Funktionen sind die hauseigene Text-to-Speech- und Speech-to-Text-Funktion, die KI-gestützte Wissensdatenbank und das integrierte Fallmanagementsystem. Weitere Informationen zu allen Funktionen der SeaX-Plattform finden Sie auf der [SeaX-Homepage](https://seax.seasalt.ai/?utm_source=blog/).

# Demo-Server
Jetzt werden wir erläutern, wie wir unseren Discord-Server eingerichtet haben. Für die Demo haben wir uns ein Szenario vorgestellt, in dem unser Server als Community für ein Spiel wie Pokémon Go! verwendet wird. Die folgende Tabelle gibt einen Überblick über einige der auf unserem Discord-Server gezeigten Funktionen.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-features-2.png" alt="Funktionsübersicht des Demo-Kundenservice-Discord-Servers."/>

*Funktionsübersicht des Demo-Discord-Servers.*
</center>

## 1-zu-Viele-Hilfe: Offizielle Kanäle
Mehrere Kanäle auf dem Server sind so eingerichtet, dass sie einen direkten Stream zwischen offiziellen Admins/Entwicklern und Spielern bieten.
Im **Ankündigungskanal** können nur Admins und Mods posten, und er kann (manuelle oder automatisierte) Beiträge vom Twitter-Account, der Website oder anderen offiziellen Quellen enthalten.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-announcement-channel.jpg" alt="Der Ankündigungskanal auf dem Discord-Server mit einem Beitrag von einem offiziellen Twitter-Account."/>

*Der #announcements-Kanal auf dem Demo-Discord-Server.*
</center>

Der **Fehlerbericht-Kanal** ermöglicht es Spielern, Fehler und spielstörende Probleme zu diskutieren. Admins können diesen Kanal im Auge behalten, um Probleme im Spiel zu identifizieren, die behoben werden sollten. Darüber hinaus können Benutzer einen offiziellen Fehlerbericht über den Slash-Befehl `/bug` innerhalb des Kanals einreichen.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-bug-report-channel.jpg" alt="Der Fehlerbericht-Kanal auf dem Discord-Server mit einem eingereichten Fehlerbericht."/>

*Der #bug-report-Kanal auf dem Demo-Discord-Server mit einem eingereichten Fehlerbericht.*
</center>

Der **Funktionswunsch-Kanal** ermöglicht es Spielern, Gameplay-Änderungen, Verbesserungen der Lebensqualität, Inhalts-Ergänzungen usw. zu diskutieren, die sie gerne im Spiel sehen würden. Ähnlich wie beim Fehlerbericht-Kanal können ihre Eingaben von den Discord-Mods gesehen werden und sie können den Slash-Befehl `/new_feature` verwenden, um eine offizielle Anfrage einzureichen.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-feature-request-channel.jpg" alt="Der Funktionswunsch-Kanal auf dem Discord-Server, auf dem ein Benutzer einen Slash-Befehl ausführt."/>

*Der #feature-request-Kanal auf dem Demo-Discord-Server, auf dem ein Benutzer einen Slash-Befehl ausführt.*
</center>

## 1-zu-1-Hilfe: Kundendienstmitarbeiter

Spieler können den Slash-Befehl `/helpme` verwenden, um eine Direktnachricht mit einem Agenten auszulösen. Der Kundendienstmitarbeiter kann entweder automatisiert (virtueller Agent) oder von einem Live-Agenten besetzt sein.

Für unsere Demo haben wir einen einfachen FAQ-Bot eingerichtet, der die Wissensdatenbank des Unternehmens abfragt, um dem Benutzer relevante Artikelvorschläge zu unterbreiten. Der Benutzer kann auch einen Live-Agenten anfordern und wird im selben Chat an einen Live-Agenten auf SeaX weitergeleitet.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-customer-service-channel.jpg" alt="Der Kundenservice-Kanal auf dem Discord-Server, auf dem ein Benutzer eine DM auslöst."/>

*Der #feature-request-Kanal auf dem Demo-Discord-Server, auf dem ein Benutzer eine DM auslöst.*
</center>

### Wissensdatenbank
Wenn der Benutzer eine Anfrage an den virtuellen Service-Agenten sendet, kann der Agent den Benutzer auf relevante Artikel in der Wissensdatenbank verweisen.

### Live-Agenten-Übertragung
Sobald sich ein Benutzer in einer Direktnachricht mit dem Bot befindet, kann er einen Live-Agenten anfordern. Er wird sofort benachrichtigt, dass ein Fall für ihn erstellt wurde und dass er an einen Live-Agenten weitergeleitet wird. Wenn der Live-Agent dem Chat beitritt, erhält er ebenfalls eine Benachrichtigung.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-customer-service-dm.jpg" alt="Eine Direktnachricht mit dem Kundenservice, mit Vorschlägen für KB-Artikel, Live-Agenten-Übertragung und Fallmanagement."/>

*Eine Direktnachricht mit dem Kundenservice, mit Vorschlägen für KB-Artikel, Live-Agenten-Übertragung und Fallmanagement.*
</center>

Im Backend können die Live-Agenten eingehende Anrufe und Chat-Nachrichten von allen Kanälen (SMS, Facebook, Discord, Sprachanruf usw.) über eine einzige Plattform bearbeiten. In diesem Fall ist die Backend-Plattform SeaX.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/flex-discord-channel.jpg" alt="Die SeaX-Oberfläche, die die Ansicht des Live-Agenten einer Konversation mit einem Benutzer auf Discord anzeigt."/>

*Die SeaX-Oberfläche, die die Ansicht des Live-Agenten einer Konversation mit einem Benutzer auf Discord anzeigt.*
</center>

## Fallmanagement
Eine Funktion, die wir in dieser Demo hervorheben wollten, ist das Fallmanagement. Die Discord-Lösung von Seasalt.ai lässt sich in das SeaX-Fallmanagementsystem integrieren, um verschiedene Fälle von Benutzern ordnungsgemäß zu verfolgen. Wenn ein Benutzer mit dem Discord-Bot interagiert (z. B. einen Live-Agenten anfordert oder einen Fehler meldet), können wir automatisch einen neuen Fall öffnen und alle wichtigen Informationen über den Benutzer und das Problem, das er hat, protokollieren. Dies ermöglicht es dem Live-Agenten, einfachen Zugriff auf alle gemeldeten Probleme zu haben und sicherzustellen, dass er sich mit den Benutzern in Verbindung setzt, bis der Fall gelöst ist.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-new-case.png" alt="Erstellen eines neuen Falls im SeaX-Fallmanagementsystem."/>

*Erstellen eines neuen Falls im SeaX-Fallmanagementsystem.*

<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-existing-case.png" alt="Anzeigen eines vorhandenen Falls im SeaX-Fallmanagementsystem."/>

*Anzeigen eines vorhandenen Falls im SeaX-Fallmanagementsystem.*

</center>

# Technischer Deep Dive

Jetzt haben wir das Endprodukt und alle Funktionen gesehen, die den Mitgliedern des Servers und den Live-Agenten, die sie unterstützen, zur Verfügung stehen. Aber wie wurde das Ganze eigentlich umgesetzt? In unserem letzten Blogbeitrag, „[So erstellen Sie eine Discord-Community und einen Bot für Ihre Marke](https://seasalt.ai/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/)“, haben wir erläutert, wie Sie den Discord-Server für Ihre Marke erstellen und wie Sie einen Discord-Bot integrieren, um ihn zu verwalten. Um diese fortgeschrittenere Demo zu unterstützen, haben wir auch [SeaChat, die Konversations-KI-Engine von Seasalt.ai](https://chat.seasalt.ai), verwendet, um einen einfachen Chatbot zu erstellen, der es unserem Discord-Bot ermöglicht, Anfragen in natürlicher Sprache für Benutzer zu bearbeiten.

Auf der SeaX-Seite arbeitete unser Team eng mit Twilio zusammen, um eine funktionsreiche Contact-Center-Lösung zu entwickeln, die auf Twilio Flex aufbaut. Weitere Informationen zu Twilio Flex und zum Einrichtungsprozess finden Sie im [Twilio Flex-Schnellstartleitfaden](https://www.twilio.com/docs/flex/quickstart).

Nachdem wir den Discord-Server, den Discord-Bot und den Chatbot vorbereitet und sichergestellt haben, dass wir eine funktionierende Instanz von SeaX am Laufen haben, besteht die größte Herausforderung darin, die Nachrichten ordnungsgemäß an und von dem Benutzer, dem Bot und den Live-Agenten auf SeaX weiterzuleiten. Twilio ist fantastisch im Umgang mit der Nachrichtenweiterleitung, daher ist unser Ziel, alle Slash-Befehle von unserem Discord-Bot-Server aus zu verarbeiten und dann alle anderen Nachrichten (wie Direktnachrichten an den Chatbot oder den Live-Agenten) an Twilio weiterzuleiten.

## Definieren des Flex-Flows
Der erste Schritt besteht darin, sicherzustellen, dass alle Nachrichten, die wir an Twilio senden, an den richtigen Ort weitergeleitet werden. Wir haben einen einfachen Twilio-Flow eingerichtet, der zuerst prüft, ob der Benutzer einen Live-Agenten angefordert hat, und wenn ja, die folgenden Nachrichten an SeaX weiterleitet. Wenn der Benutzer keinen Live-Agenten angefordert hat, leiten wir die Nachricht an den Chatbot weiter, um eine Antwort zu erhalten. Weitere Informationen zum Einrichten des Flows finden Sie in der [Twilio Studio Flow-Dokumentation](https://www.twilio.com/docs/studio).

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-flow.png" alt="Ein einfacher Flex Studio Flow, der eingehende Nachrichten an einen Chatbot oder an SeaX weiterleitet."/>

*Ein einfacher Flex Studio Flow, der eingehende Nachrichten an einen Chatbot oder an SeaX weiterleitet.*
</center>

## Erstellen eines benutzerdefinierten Kanals
Jetzt haben wir eine Vorstellung davon, wie eingehende Nachrichten weitergeleitet werden. Discord ist jedoch kein von Twilio nativ unterstützter Kanal. Glücklicherweise hat Twilio ein detailliertes Tutorial zum [Hinzufügen eines benutzerdefinierten Chat-Kanals zu Twilio Flex](https://www.twilio.com/blog/add-custom-chat-channel-twilio-flex). Nachdem wir der Anleitung zum Einrichten des neuen benutzerdefinierten Kanals auf Twilio gefolgt sind, müssen wir die Nachrichten tatsächlich von Discord an Twilio weiterleiten.

Zuerst richten wir den Twilio-Client ein:

```python
from twilio.rest import Client
twilio_client = Client(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)
```

Sobald wir eine eingehende Nachricht von Discord erhalten, können wir diese Nachricht über den Twilio-Client an Twilio weiterleiten. Zuerst sollten wir prüfen, ob der Benutzer bereits im Twilio-System vorhanden ist und ob er bereits einen offenen Chat-Kanal hat.

```python
# Rufen Sie die Methode get_user auf, um zu prüfen, ob der Benutzer existiert, und erstellen Sie einen neuen, falls nicht
user = await get_user(user_id, twilio_client, TWILIO_SERVICE_SID)

# Rufen Sie die Kanäle ab, in denen sich der Benutzer befindet
user_channels = twilio_client.chat \
        .services(TWILIO_SERVICE_SID) \
        .users(user_id) \
        .user_channels \
        .list()
```

Wenn der Benutzer einen bestehenden offenen Chat-Kanal hat, müssen wir diesen verwenden, damit wir Zugriff auf den Chat-Verlauf haben. Wenn kein bestehender Chat-Kanal vorhanden ist, erstellen wir einen neuen für den Benutzer:

```python
if user_channels:
    channel_sid = user_channels[-1].channel_sid
else:
    channel = twilio_client.flex_api \
            .channel \
            .create(
                flex_flow_sid=FLEX_FLOW_ID,
                chat_user_friendly_name=username,
                chat_friendly_name=chat_name,  # -> Der Anzeigename des Chat-Kanals
                target=conversation_id,  # -> Die Identität, die den Chat-Benutzer eindeutig identifiziert
                identity=conversation_id,  # -> Der Benutzer, z. B. die Discord-DM-ID
        )
    channel_sid = channel.sid
```

Sobald wir einen offenen Chat-Kanal zwischen dem Discord-Benutzer und Twilio haben, können wir die eingehende Nachricht an den Twilio Studio Flow weiterleiten.

```python
message = twilio_client.chat \
        .services(TWILIO_SERVICE_SID) \
        .channels(channel_sid) \
        .messages \
        .create(
            body=message_text,
            from_=user_id,
            x_twilio_webhook_enabled='true',
            attributes=json.dumps(message_json)  # Senden Sie die Header als Attribut, damit sie später zugänglich sind
        )
```
Jetzt haben wir die Möglichkeit, alle unsere eingehenden Nachrichten von Discord-Benutzern direkt an unseren Twilio Flex Flow weiterzuleiten. Stellen Sie auf der Discord-Bot-Seite sicher, dass alle Direktnachrichten an Twilio weitergeleitet werden. Jetzt können Sie versuchen, eine Direktnachricht an den Discord-Bot zu senden, und Sie sollten sie in den Twilio Studio Flow-Protokollen sehen - Wir sind aber noch nicht fertig!

## Erstellen eines HTTP-Servers zur Unterstützung komplexerer Weiterleitungen

### Webhook für ausgehende Nachrichten
Jetzt haben wir eine Vorstellung davon, wie unsere eingehenden Nachrichten weitergeleitet werden. Es fehlen uns jedoch noch ein paar Teile. Zunächst einmal wissen wir, dass wir jetzt Nachrichten an Twilio senden können, aber wie antworten wir unseren Benutzern auf Discord? Unser Discord-Bot ist das einzige, was berechtigt ist, Nachrichten an unseren Discord-Server und unsere Benutzer zu senden, und Twilio weiß sowieso nicht, wie wir unsere Nachrichten zurück zum Discord-Server bekommen. Die Lösung ist, dass wir einen Webhook für ausgehende Nachrichten einrichten müssen, der jedes Mal ausgelöst wird, wenn eine neue Nachricht im Twilio-Chat-Kanal vorhanden ist. Innerhalb dieses Webhooks können wir dann unseren Discord-Bot verwenden, um die Nachricht zurück an unseren Server weiterzuleiten.

Um dies zu tun, integrieren wir unseren Discord-Bot in einen robusteren HTTP-Server. Wir haben [FastAPI](https://fastapi.tiangolo.com/) verwendet, um einen einfachen POST-Endpunkt einzurichten, der als unser Webhook für ausgehende Nachrichten dient. Sobald wir den Server eingerichtet und unseren Discord-Bot daneben laufen haben, können wir den POST-Endpunkt definieren.

Dieser Endpunkt empfängt jede einzelne Nachricht, die dem Chat-Kanal hinzugefügt wird. Daher möchten wir zuerst alles außer den ausgehenden Nachrichten von SeaX herausfiltern. Als Nächstes müssen wir die richtige Kanal-ID aus dem Nachrichtentext abrufen, damit wir wissen, wohin wir die Nachricht weiterleiten müssen. Schließlich können wir den Discord-Client verwenden, um die Nachricht an den Discord-Kanal weiterzuleiten.

```python
@app.post("/forward-to-discord", status_code=200)
async def forward_discord_message(request: Request, response: Response) -> None:
    raw_body = await request.body()
    body = urllib.parse.parse_qs(raw_body.decode())

    # Achten Sie nur auf Nachrichten vom SDK (Flex, alle anderen stammen von der API)
    if not body.get('Source') == ['SDK']:
        return

    # Nachrichten von Flex enthalten nicht die conversationId der ursprünglichen Nachricht
    # Wir benötigen die convId, um die Nachricht zurück an die Konversation auf GBM zu senden
    # Rufen Sie die vorherige Nachricht ab und extrahieren Sie die conversationId
    message = twilio_client.chat \
            .services(TWILIO_SERVICE_SID) \
            .channels(body.get("ChannelSid")[0]) \
            .messages.list(limit=1)[0]

    attributes = json.loads(message.attributes)

    channel = discord_client.get_channel(attributes.get(“channel”, {}).get(“id”))
    if channel:
        await channel.send(body.get("Body", [""])[0].get(“text”))
    else:
        logger.error(f"Discord-Kanal mit ID konnte nicht gefunden werden: {get_channel_id(req)}!")
        response.status_code = 400
```

Schließlich müssen wir Twilio mitteilen, was unser neuer Webhook ist, damit die Nachrichten an unseren Endpunkt gesendet werden. Jeder Chat-Kanal muss seinen eigenen Webhook konfiguriert haben. Wenn wir also dorthin zurückkehren, wo wir ursprünglich den neuen Chat-Kanal für den Benutzer erstellt haben, können wir zusätzlichen Code hinzufügen, um den Webhook zu konfigurieren:

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

### Bot-Integration

Jetzt sollten ausgehende Nachrichten von SeaX korrekt an unseren Discord-Server zurückgeleitet werden. Aber wir haben die Nachrichten, die an den Chatbot gehen, immer noch nicht behandelt. Wir müssen einen letzten Endpunkt einrichten, der vom Twilio Studio Flow ausgelöst wird und die Benutzernachricht empfängt, den Bot abfragt und die Antwort an Discord zurückgibt.

```python
@app.post("/chatbot-to-discord", status_code=200)
async def receive_discord_message(request: Request, response: Response):
    """Empfangen Sie eine POST-Anfrage von Twilio, fragen Sie den Bot ab und geben Sie die Antwort an Discord zurück."""
    req = await request.body()
    # Trennen Sie den ursprünglichen Nachrichtentext vom Twilio-Inhalt
    twilio_body, original_message_body = separate_original_message_body(req.decode())

    bot_response = await query_bot(original_message_body, bot_info)

    if bot_response:
        channel = discord_client.get_channel(original_message_body.get(“channel_id”))
        if channel:
            for item in bot_response:
                await channel.send(item.get(“text”))
```

Stellen Sie sicher, dass der Twilio Studio Flow den richtigen Webhook hat, um Nachrichten an den Bot weiterzuleiten. Jetzt haben wir unsere Nachrichtenweiterleitung abgeschlossen! Wir können eine allgemeine Ansicht der gesamten Nachrichtenweiterleitung in diesem Diagramm sehen:

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-routing-diagram.jpg" alt="Nachrichtenweiterleitungsdiagramm."/>

*Nachrichtenweiterleitungsdiagramm.*
</center>

# Zusammenfassung
Zusammenfassend haben wir in dieser Blog-Reihe den Popularitätsanstieg von Discord und die Möglichkeit erörtert, die es Marken als neue Plattform zur Interaktion mit Kunden bietet. Wir haben einige der grundlegenden Funktionen von Discord durchgegangen, um zu zeigen, wie eine Marke ihre eigene Online-Community einrichten kann, sowie erweiterte Funktionen, die es Marken ermöglichen, die Moderation und den Kundensupport auf ihrem Server mit Discord-Bots zu automatisieren. Schließlich haben wir unsere Demonstration geteilt, wie wir Discord mit unserer Kundenservice-Plattform SeaX integriert haben, um der Discord-Community erweiterte Funktionen wie Live-Agenten-Übertragung, Fallmanagement und KI-gestützte Wissensdatenbanksuche zur Verfügung zu stellen.
Für eine persönliche Demo oder um zu sehen, wie Seasalt.ai Ihnen bei der Bewältigung Ihrer spezifischen Geschäftsanforderungen helfen kann, füllen Sie bitte unser Formular „[Demo buchen](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting)“ aus. Weitere Informationen zur Flex/Discord-Integration oder zur Kontaktaufnahme mit uns finden Sie in der [Twilio-Partnerliste von Seasalt.ai](https://showcase.twilio.com/partner-listing/a8E8Z000000PDCQUA4).

---
title: "Discord (3/3): Discord und Twilio Flex: Flex Contact Center in unerforschtes Territorium bringen"
metatitle: "Discord (3/3): Twilio Flex Contact Center in Discord"
date: 2022-06-07T12:32:24-07:00
author: Kim Dodds
draft: false
image: /images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/flex-discord-thumbnail.png
description: "In diesem Blogbeitrag demonstrieren wir, wie Seasalt.ai ein vollständig funktionales Contact Center in einen Discord-Server integriert."
tags: ["SeaX", "Discord"]
canonicalURL: "/blog/discord-and-twilio"
url: "/blog/discord-and-twilio/"
aliases:
  - /blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/
modified_date: "2025-01-27T10:30:00Z"
---

*Dies ist der letzte Beitrag unserer dreiteiligen Serie über Kundenengagement auf Discord. Unser erster Blogbeitrag ["Eine neue Grenze für Kundenengagement"](https://seasalt.ai/blog/15-discord-a-new-frontier-for-customer-engagement/) diskutierte Discords wachsende Popularität und die neuen Möglichkeiten, die es Marken bietet, ihre eigenen Online-Communities zu erstellen und sich mit ihnen zu engagieren. Im zweiten Teil ["Wie man eine Discord-Community und Bot für Ihre Marke erstellt"](https://seasalt.ai/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/) führten wir ein, wie man einen Discord-Server für Ihre Marke erstellt und wie man Bots integriert, um Server-Moderation, Ankündigungen, Nutzer-Feedback und mehr zu verwalten. Schließlich demonstrieren wir in diesem Blogbeitrag, wie Seasalt.ai ein vollständig funktionales Contact Center in einen Discord-Server integriert, wodurch Marken alle Aspekte des Kundenservice auf der Plattform handhaben können.*

## Inhaltsverzeichnis
- [Inhaltsverzeichnis](#inhaltsverzeichnis)
- [Discord Kundenservice Demo](#discord-kundenservice-demo)
- [Twilio Flex](#twilio-flex)
- [SeaX](#seax)
- [Demo-Server](#demo-server)
  - [Ein-zu-Viele Hilfe: Offizielle Kanäle](#ein-zu-viele-hilfe-offizielle-kanale)
  - [Ein-zu-Eins Hilfe: Kundenservice-Agent](#ein-zu-eins-hilfe-kundenservice-agent)
    - [Wissensdatenbank](#wissensdatenbank)
    - [Live-Agent-Übertragung](#live-agent-ubertragung)
  - [Fallmanagement](#fallmanagement)
- [Technischer Deep Dive](#technischer-deep-dive)
  - [Flex-Flow definieren](#flex-flow-definieren)
  - [Benutzerdefinierten Kanal erstellen](#benutzerdefinierten-kanal-erstellen)
  - [HTTP-Server erstellen für komplexeres Routing](#http-server-erstellen-fur-komplexeres-routing)
    - [Ausgehende Nachrichten Webhook](#ausgehende-nachrichten-webhook)
    - [Bot-Integration](#bot-integration)
- [Zusammenfassung](#zusammenfassung)

# Discord Kundenservice Demo
Wenn Sie gespannt sind, direkt zum Punkt zu kommen und das Endprodukt zu sehen, zeigen wir zuerst das finale Demo-Video:

<iframe width="85%" height="450px" src="https://www.youtube.com/embed/iUK4YkGYI6Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

Unser Ziel ist es zu demonstrieren, wie Discord in bestehende Kundenservice-Software (in diesem Fall [Twilio Flex](https://flex.twilio.com/)) integriert werden kann, um zusätzlichen Wert zum offiziellen Server einer Marke hinzuzufügen. Lesen Sie weiter für ein tieferes Verständnis unserer Implementierung.

# Twilio Flex
Twilio ist ein reifes Kommunikationsunternehmen, das APIs für die Verwaltung von SMS, Telefonanrufen, E-Mails, Chat-Nachrichten und mehr bereitstellt. Flex ist eines von Twilios Flaggschiff-Produkten: ein skalierbares cloud-basiertes Contact Center, das Nachrichten und Anrufe von jeder Quelle zu virtuellen und Live-Agenten weiterleitet. Wir wählten Flex als Grundlage für unsere Contact Center-Integration, da es bereits ausgezeichnete Unterstützung für verschiedene Kanäle wie Facebook, SMS und WhatsApp bietet.

# SeaX
SeaX ist ein Cloud-Contact Center, das tief mit fortschrittlichen KI-Fähigkeiten integriert ist, um Produktivität und Kundenzufriedenheit zu verbessern. SeaX ist eines von Seasalt.ais Flaggschiff-Produkten und wurde bereits an Kunden in über 150 Ländern ausgerollt. Die SeaX Contact Center-Plattform ist auf Twilio Flex aufgebaut und umfasst verschiedene zusätzliche Funktionen, die es Live-Agenten ermöglichen, Kunden besser zu unterstützen. Zu den nützlichsten Funktionen gehören integrierte Text-zu-Sprache und Sprache-zu-Text, KI-gestützte Wissensdatenbank und integriertes Fallmanagement-System. Für mehr Informationen über alle SeaX-Plattform-Funktionen besuchen Sie die [SeaX-Startseite](https://seax.seasalt.ai/?utm_source=blog/).

# Demo-Server
Jetzt führen wir ein, wie wir unseren Discord-Server einrichten. Für Demonstrationszwecke stellten wir uns ein Szenario vor, in dem unser Server als Community für Spiele wie Pokémon Go! verwendet wird. Die folgende Tabelle beschreibt einige der in unserem Discord-Server demonstrierten Funktionen.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-features-2.png" alt="Übersicht der Funktionen im Demo-Kundenservice Discord-Server."/>

*Übersicht der Funktionen im Demo Discord-Server.*
</center>

## Ein-zu-Viele Hilfe: Offizielle Kanäle
Mehrere Kanäle im Server sind eingerichtet, um direkte Streams zwischen offiziellen Administratoren/Entwicklern und Spielern zu bieten.
Der **Ankündigungskanal** kann nur von Administratoren und Moderatoren gepostet werden und kann (manuelle oder automatische) Beiträge von Twitter-Konten, Websites oder anderen offiziellen Quellen enthalten.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-announcement-channel.jpg" alt="Ankündigungskanal auf dem Discord-Server mit Beiträgen vom offiziellen Twitter-Konto."/>

*Demo #ankündigungen Kanal auf dem Discord-Server.*
</center>

Der **Bug-Report-Kanal** ermöglicht es Spielern, Bugs und spielbrechende Probleme zu diskutieren. Administratoren können diesen Kanal genau überwachen, um alle Probleme im Spiel zu identifizieren, die angegangen werden sollten. Darüber hinaus können Benutzer offizielle Bug-Reports mit dem Slash-Befehl `/bug` innerhalb des Kanals einreichen.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-bug-report-channel.jpg" alt="Bug-Report-Kanal auf dem Discord-Server mit eingereichten Bug-Reports."/>

*Demo #bug-report Kanal auf dem Discord-Server mit eingereichten Bug-Reports.*
</center>

Der **Feature-Request-Kanal** ermöglicht es Spielern, Gameplay-Änderungen, Lebensqualitätsverbesserungen, Inhaltsergänzungen und mehr zu diskutieren, die sie im Spiel sehen möchten. Ähnlich wie beim Bug-Request-Kanal können ihre Eingaben von Discord-Moderatoren gesehen werden, und sie können offizielle Anfragen mit dem Slash-Befehl `/neue_funktion` einreichen.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-feature-request-channel.jpg" alt="Feature-Request-Kanal auf dem Discord-Server mit Benutzern, die Slash-Befehle ausführen."/>

*Demo #feature-request Kanal auf dem Discord-Server mit Benutzern, die Slash-Befehle ausführen.*
</center>

## Ein-zu-Eins Hilfe: Kundenservice-Agent

Spieler können mit dem Slash-Befehl `/hilfmir` direkte Nachrichten mit Agenten auslösen. Kundenservice-Agenten können automatisiert (virtuelle Agenten) oder von Live-Agenten betrieben werden.

Für unsere Demo richteten wir einen einfachen FAQ-Bot ein, der die Unternehmens-Wissensdatenbank abfragt, um Benutzern relevante Artikelvorschläge zu machen. Benutzer können auch Live-Agenten anfordern und werden im selben Chat zu Live-Agenten auf SeaX weitergeleitet.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-customer-service-channel.jpg" alt="Kundenservice-Kanal auf dem Discord-Server mit Benutzern, die DMs auslösen."/>

*Demo #feature-request Kanal auf dem Discord-Server mit Benutzern, die DMs auslösen.*
</center>

### Wissensdatenbank
Wenn Benutzer Anfragen an virtuelle Service-Agenten senden, können die Agenten Benutzer an relevante Artikel in der Wissensdatenbank verweisen.

### Live-Agent-Übertragung
Sobald Benutzer in direkten Nachrichten mit dem Bot sind, können sie Live-Agenten anfordern. Sie erhalten sofort eine Benachrichtigung, dass ein Fall für sie erstellt wurde und dass sie zu einem Live-Agenten weitergeleitet werden. Wenn der Live-Agent dem Chat beitritt, erhalten sie auch eine Benachrichtigung.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-customer-service-dm.jpg" alt="Direkte Nachrichten mit Kundenservice mit Wissensdatenbank-Artikelvorschlägen, Live-Agent-Übertragung und Fallmanagement."/>

*Direkte Nachrichten mit Kundenservice mit Wissensdatenbank-Artikelvorschlägen, Live-Agent-Übertragung und Fallmanagement.*
</center>

Im Backend können Live-Agenten eingehende Anrufe und Chat-Nachrichten von allen Kanälen (SMS, Facebook, Discord, Sprachanrufe, etc.) über eine Plattform handhaben. In diesem Fall ist die Backend-Plattform SeaX.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/flex-discord-channel.jpg" alt="SeaX-Interface zeigt eine Ansicht von Live-Agenten, die mit Discord-Benutzern sprechen."/>

*SeaX-Interface zeigt eine Ansicht von Live-Agenten, die mit Discord-Benutzern sprechen.*
</center>

## Fallmanagement
Eine Funktion, die wir in dieser Demo hervorheben möchten, ist das Fallmanagement. Seasalt.ais Discord-Lösung integriert sich mit dem SeaX-Fallmanagement-System, um verschiedene Fälle für Benutzer ordnungsgemäß zu verfolgen. Wenn Benutzer mit dem Discord-Bot interagieren (wie Live-Agenten anfordern oder Bugs melden), können wir automatisch einen neuen Fall öffnen und alle wichtigen Informationen über den Benutzer und die Probleme, die sie erleben, aufzeichnen. Dies macht es Live-Agenten einfach, auf alle gemeldeten Probleme zuzugreifen und stellt sicher, dass sie Benutzer verfolgen, bis Fälle gelöst sind.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-new-case.png" alt="Erstellen eines neuen Falls im SeaX-Fallmanagement-System."/>

*Erstellen eines neuen Falls im SeaX-Fallmanagement-System.*

<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-existing-case.png" alt="Anzeigen bestehender Fälle im SeaX-Fallmanagement-System."/>

*Anzeigen bestehender Fälle im SeaX-Fallmanagement-System.*

</center>

# Technischer Deep Dive

Jetzt haben wir das Endprodukt und alle Funktionen gesehen, die für Server-Mitglieder und die Live-Agenten verfügbar sind, die sie unterstützen. Aber wie wird das Ganze tatsächlich implementiert? In unserem vorherigen Blogbeitrag ["Wie man eine Discord-Community und Bot für Ihre Marke erstellt"](https://seasalt.ai/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/) führten wir ein, wie man einen Discord-Server für Ihre Marke erstellt und wie man Discord-Bots integriert, um ihn zu verwalten. Um diese erweiterte Demo zu unterstützen, verwendeten wir auch [SeaChat, Seasalt.ais konversationelle KI-Engine](https://chat.seasalt.ai), um einen einfachen Chatbot zu erstellen, der es unserem Discord-Bot ermöglicht, natürliche Sprachanfragen von Benutzern zu handhaben.

Auf der SeaX-Seite arbeitete unser Team eng mit Twilio zusammen, um eine funktionsreiche Contact Center-Lösung basierend auf Twilio Flex zu erstellen. Für mehr Informationen über Twilio Flex und wie der Einrichtungsprozess funktioniert, können Sie den [Twilio Flex Quickstart Guide](https://www.twilio.com/docs/flex/quickstart) lesen.

Mit dem Discord-Server, Discord-Bot, Chatbot bereit und sicherstellend, dass wir eine ordnungsgemäß laufende SeaX-Instanz haben, war die größte Herausforderung, wie Nachrichten korrekt zwischen Benutzern, Bots und Live-Agenten auf SeaX weitergeleitet werden. Twilio ist hervorragend im Handhaben der Nachrichtenweiterleitung, also war unser Ziel, alle Slash-Befehle im Discord-Bot-Server zu handhaben, dann alle anderen Nachrichten (wie direkte Nachrichten, die an Chatbots oder Live-Agenten gesendet werden) an Twilio weiterzuleiten.

## Flex-Flow definieren
Der erste Schritt ist sicherzustellen, dass alle Nachrichten, die wir an Twilio senden, an den richtigen Ort weitergeleitet werden. Wir richteten einen einfachen Twilio-Flow ein, der zuerst prüft, ob der Benutzer einen Live-Agenten angefordert hat, und wenn ja, die folgenden Nachrichten an SeaX weiterleitet. Wenn der Benutzer keinen Live-Agenten angefordert hat, leiten wir die Nachricht an den Chatbot weiter, um eine Antwort zu erhalten. Für mehr Informationen über das Einrichten von Flows siehe die [Twilio Studio Flow Dokumentation](https://www.twilio.com/docs/studio).

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-flow.png" alt="Ein einfacher Flex Studio Flow, der eingehende Nachrichten an Chatbot oder SeaX weiterleitet."/>

*Ein einfacher Flex Studio Flow, der eingehende Nachrichten an Chatbot oder SeaX weiterleitet.*
</center>

## Benutzerdefinierten Kanal erstellen
Also verstehen wir jetzt, wie eingehende Nachrichten weitergeleitet werden. Allerdings ist Discord kein nativ unterstützter Kanal von Twilio. Glücklicherweise hat Twilio ein detailliertes Tutorial darüber, wie man [benutzerdefinierte Chat-Kanäle zu Twilio Flex hinzufügt](https://www.twilio.com/blog/add-custom-chat-channel-twilio-flex). Nach dem Befolgen der Anleitung zum Einrichten eines neuen benutzerdefinierten Kanals auf Twilio müssen wir tatsächlich Nachrichten von Discord an Twilio weiterleiten.

Zuerst richten wir den Twilio-Client ein:

```python
from twilio.rest import Client
twilio_client = Client(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)
```

Jetzt, sobald wir eine eingehende Nachricht von Discord erhalten, können wir diese Nachricht über den Twilio-Client an Twilio weiterleiten. Zuerst sollten wir prüfen, ob der Benutzer bereits im Twilio-System existiert und ob sie bereits einen offenen Chat-Kanal haben.

```python
# Die get_user-Methode aufrufen, um zu prüfen, ob der Benutzer existiert, und wenn nicht, einen neuen Benutzer erstellen
user = await get_user(user_id, twilio_client, TWILIO_SERVICE_SID)

# Die Kanäle abrufen, in denen sich der Benutzer befindet
user_channels = twilio_client.chat \
        .services(TWILIO_SERVICE_SID) \
        .users(user_id) \
        .user_channels \
        .list()
```

Wenn der Benutzer einen bestehenden offenen Chat-Kanal hat, müssen wir ihn verwenden, damit wir auf den Chat-Verlauf zugreifen können. Wenn es keinen bestehenden Chat-Kanal gibt, erstellen wir einen neuen für den Benutzer:

```python
if user_channels:
    channel_sid = user_channels[-1].channel_sid
else:
    channel = twilio_client.flex_api \
            .channel \
            .create(
                flex_flow_sid=FLEX_FLOW_ID,
                chat_user_friendly_name=username,
                chat_friendly_name=chat_name,  # -> Benutzerfreundlicher Name für den Chat-Kanal
                target=conversation_id,  # -> Eindeutiger Identifier für die Chat-Benutzer-Identität
                identity=conversation_id,  # -> Benutzer, z.B. / Discord DM ID
        )
    channel_sid = channel.sid
```

Schließlich, sobald wir einen offenen Chat-Kanal zwischen dem Discord-Benutzer und Twilio eingerichtet haben, können wir die eingehende Nachricht an den Twilio Studio Flow weiterleiten.

```python
message = twilio_client.chat \
        .services(TWILIO_SERVICE_SID) \
        .channels(channel_sid) \
        .messages \
        .create(
            body=message_text,
            from_=user_id,
            x_twilio_webhook_enabled='true',
            attributes=json.dumps(message_json)  # Header als Attribute senden, damit sie später zugänglich sind
        )
```
Jetzt können wir eingehende Nachrichten von Discord-Benutzern direkt an unseren Twilio Flex Flow weiterleiten. Auf der Discord-Bot-Seite stellen Sie sicher, dass alle direkten Nachrichten an Twilio weitergeleitet werden. Jetzt können Sie versuchen, direkte Nachrichten an den Discord-Bot zu senden, und Sie sollten sie in den Twilio Studio Flow-Logs erscheinen sehen - obwohl wir noch nicht fertig sind!

## HTTP-Server erstellen für komplexeres Routing

### Ausgehende Nachrichten Webhook
Also verstehen wir jetzt, wie eingehende Nachrichten weitergeleitet werden. Allerdings fehlen uns noch einige Teile. Erstens wissen wir, dass wir jetzt Nachrichten an Twilio senden können, aber wie antworten wir Benutzern auf Discord? Unser Discord-Bot ist der einzige, der berechtigt ist, Nachrichten an unseren Discord-Server und Benutzer zu senden, und Twilio weiß nicht, wie unsere Nachrichten zum Discord-Server zurückzukehren. Die Lösung ist, dass wir einen ausgehenden Nachrichten-Webhook einrichten müssen, der jedes Mal ausgelöst wird, wenn es eine neue Nachricht im Twilio-Chat-Kanal gibt. In diesem Webhook können wir dann unseren Discord-Bot verwenden, um Nachrichten zurück zu unserem Server weiterzuleiten.

Dafür integrieren wir den Discord-Bot in einen leistungsfähigeren HTTP-Server. Wir richteten einen einfachen POST-Endpoint mit [FastAPI](https://fastapi.tiangolo.com/) ein, der als unser ausgehender Nachrichten-Webhook dient. Sobald wir den Server eingerichtet haben und unser Discord-Bot damit läuft, können wir den POST-Endpoint definieren.

Dieser Endpoint empfängt jede Nachricht, die zum Chat-Kanal hinzugefügt wird, also müssen wir zuerst alles außer ausgehenden Nachrichten von SeaX herausfiltern. Als nächstes müssen wir die korrekte Kanal-ID aus dem Nachrichteninhalt abrufen, damit wir wissen, wohin die Nachricht weitergeleitet werden soll. Schließlich können wir den Discord-Client verwenden, um die Nachricht an den Discord-Kanal weiterzuleiten.

```python
@app.post("/forward-to-discord", status_code=200)
async def forward_discord_message(request: Request, response: Response) -> None:
    raw_body = await request.body()
    body = urllib.parse.parse_qs(raw_body.decode())

    # Nur auf Nachrichten vom SDK fokussieren (Flex, alle anderen Nachrichten kommen von der API)
    if not body.get('Source') == ['SDK']:
        return

    # Nachrichten von Flex enthalten nicht die conversationId der ursprünglichen Nachricht
    # Wir brauchen die convId, um Nachrichten zurück zur Konversation auf GBM zu senden
    # Die vorherige Nachricht abrufen und die conversationId extrahieren
    message = twilio_client.chat \
            .services(TWILIO_SERVICE_SID) \
            .channels(body.get("ChannelSid")[0]) \
            .messages.list(limit=1)[0]

    attributes = json.loads(message.attributes)

    channel = discord_client.get_channel(attributes.get("channel", {}).get("id"))
    if channel:
        await channel.send(body.get("Body", [""])[0].get("text"))
    else:
        logger.error(f"Discord-Kanal mit ID {get_channel_id(req)} nicht gefunden!")
        response.status_code = 400
```

Schließlich, um Nachrichten an unseren Endpoint zu senden, müssen wir Twilio wissen lassen, was unser neuer Webhook ist. Jeder Chat-Kanal muss seinen eigenen Webhook konfigurieren. Also, wenn wir dorthin zurückgehen, wo wir ursprünglich einen neuen Chat-Kanal für den Benutzer erstellt haben, können wir zusätzlichen Code hinzufügen, um den Webhook zu konfigurieren:

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

Also sollten ausgehende Nachrichten von SeaX jetzt korrekt zurück zu unserem Discord-Server weitergeleitet werden. Aber wir haben immer noch nicht die Nachrichten behandelt, die an den Chatbot gehen. Wir müssen einen finalen Endpoint einrichten, der vom Twilio Studio Flow ausgelöst wird und Benutzernachrichten empfängt, den Bot abfragt und die Antwort an Discord zurückgibt.

```python
@app.post("/chatbot-to-discord", status_code=200)
async def receive_discord_message(request: Request, response: Response):
    """POST-Anfragen von Twilio empfangen, Bot abfragen und Antwort an Discord zurückgeben."""
    req = await request.body()
    # Den ursprünglichen Nachrichteninhalt vom Twilio-Inhalt trennen
    twilio_body, original_message_body = separate_original_message_body(req.decode())

    bot_response = await query_bot(original_message_body, bot_info)

    if bot_response:
        channel = discord_client.get_channel(original_message_body.get("channel_id"))
        if channel:
            for item in bot_response:
                await channel.send(item.get("text"))
```

Stellen Sie sicher, dass der Twilio Studio Flow den korrekten Webhook hat, um Nachrichten an den Bot weiterzuleiten. Jetzt haben wir die Nachrichtenweiterleitung abgeschlossen! Wir können eine Top-Level-Ansicht der gesamten Nachrichtenweiterleitung in diesem Diagramm sehen:

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-routing-diagram.jpg" alt="Nachrichtenweiterleitungsdiagramm."/>

*Nachrichtenweiterleitungsdiagramm.*
</center>

# Zusammenfassung
Zusammenfassend diskutierten wir in dieser Blog-Serie Discords wachsende Popularität und die Möglichkeiten, die es als neue Plattform für Marken bringt, mit Kunden zu interagieren. Wir führten einige grundlegende Discord-Funktionen ein, um zu zeigen, wie Marken ihre eigenen Online-Communities aufbauen können, sowie erweiterte Funktionen, die es Marken ermöglichen, Discord-Bots zu verwenden, um Moderation und Kundenservice auf ihren Servern zu automatisieren. Schließlich teilten wir, wie wir Discord mit unserer Kundenservice-Plattform SeaX integriert haben, was erweiterte Funktionen zu Discord-Communities bringt wie Live-Agent-Übertragung, Fallmanagement und KI-gestützte Wissensdatenbank-Suche.
Für eine persönliche Demo oder um zu erfahren, wie Seasalt.ai Ihnen helfen kann, Ihre spezifischen Geschäftsanforderungen zu erfüllen, füllen Sie bitte unser ["Demo buchen"](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting) Formular aus. Für mehr Informationen über Flex/Discord-Integration oder um uns zu kontaktieren, besuchen Sie [Seasalt.ais Twilio Partner-Listing](https://showcase.twilio.com/partner-listing/a8E8Z000000PDCQUA4).

const e=`---
title: "Discord (3/3): Discord und Twilio Flex: Flex Contact Center in unbekanntes Terrain bringen"
metatitle: "Discord (3/3): Twilio Flex Contact Center in Discord"
date: 2022-06-07 12:32:24-07:00
modified_date: 2025-01-27T10:30:00Z
draft: false
author: Kim Dodds
description: "In diesem Blog zeigen wir, wie Seasalt.ai ein vollwertiges Contact Center in einen Discord-Server integriert."
tags:
  - SeaX
  - Discord
image: /images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/flex-discord-thumbnail.png
canonicalURL: /blog/discord-and-twilio
url: /blog/discord-and-twilio/
---

*Dies ist der letzte Artikel unserer dreiteiligen Serie über Kundenengagement auf Discord. Unser erster Blogbeitrag ["Eine neue Grenze für Kundenengagement"](https://seasalt.ai/blog/15-discord-a-new-frontier-for-customer-engagement/) diskutierte die wachsende Popularität von Discord und die neuen Möglichkeiten, die es Marken bietet, ihre eigenen Online-Communities zu erstellen und sich daran zu beteiligen. Im zweiten Teil ["Wie man eine Discord-Community und Bot für Ihre Marke erstellt"](https://seasalt.ai/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/) führten wir ein, wie man einen Discord-Server für Ihre Marke erstellt und wie man Bots integriert, um Server-Moderation, Ankündigungen, Benutzer-Feedback und mehr zu verwalten. Schließlich zeigen wir in diesem Blog, wie Seasalt.ai ein vollwertiges Contact Center in einen Discord-Server integriert, wodurch Marken alle Aspekte des Kundenservice auf der Plattform bewältigen können.*

## Inhaltsverzeichnis
- [Inhaltsverzeichnis](#table-of-contents)
- [Discord Kundenservice Demo](#discord-customer-service-demo)
- [Twilio Flex](#twilio-flex)
- [SeaX](#seax)
- [Demo Server](#demo-server)
  - [1-zu-viele Hilfe: Offizielle Kanäle](#1-to-many-help-official-channels)
  - [1-zu-1 Hilfe: Kundenservice-Agent](#1-to-1-help-customer-service-agent)
    - [Wissensdatenbank](#knowledge-base)
    - [Live-Agent-Übertragung](#live-agent-transfer)
  - [Fallmanagement](#case-management)
- [Technischer Deep Dive](#technical-deep-dive)
  - [Flex-Flow definieren](#define-the-flex-flow)
  - [Benutzerdefinierten Kanal erstellen](#create-a-custom-channel)
  - [HTTP-Server für komplexeres Routing erstellen](#create-an-http-server-to-support-more-complex-routing)
    - [Ausgehende Nachrichten Webhook](#outbound-messages-webhook)
    - [Bot-Integration](#bot-integration)
- [Zusammenfassung](#summary)

# Discord Kundenservice Demo
Wenn Sie gespannt sind, direkt zum Punkt zu kommen und das Endprodukt zu sehen, zeigen wir zuerst das finale Demo-Video:

<iframe width="85%" height="450px" src="https://www.youtube.com/embed/iUK4YkGYI6Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

Unser Ziel ist es zu demonstrieren, wie Discord in bestehende Kundenservice-Software (in diesem Fall [Twilio Flex](https://flex.twilio.com/)) integriert werden kann, um zusätzlichen Wert zu offiziellen Marken-Servern hinzuzufügen. Lesen Sie weiter für ein tieferes Verständnis unserer Implementierung.

# Twilio Flex
Twilio ist ein etabliertes Kommunikationsunternehmen, das APIs für die Verwaltung von SMS, Telefonanrufen, E-Mails, Chat-Nachrichten und mehr bereitstellt. Flex ist eines von Twilios Flaggschiff-Produkten: ein skalierbares cloudbasiertes Contact Center, das Nachrichten und Anrufe von jeder Quelle zu virtuellen und Live-Agents weiterleiten kann. Wir haben Flex als Grundlage für unsere Contact Center-Integration gewählt, da es bereits hervorragende Unterstützung für verschiedene Kanäle wie Facebook, SMS und WhatsApp bietet.

# SeaX
SeaX ist ein Cloud-Contact-Center, das tief mit fortschrittlichen KI-Funktionen integriert ist, um Produktivität und Kundenzufriedenheit zu verbessern. SeaX ist eines der Flaggschiff-Produkte von Seasalt.ai und wurde bereits mit Kunden in über 150 Ländern eingeführt. Die SeaX Contact Center-Plattform ist auf Twilio Flex aufgebaut und umfasst verschiedene zusätzliche Funktionen, die Live-Agents dabei helfen, Kunden besser zu unterstützen. Zu den nützlichsten Funktionen gehören interne Text-zu-Sprache und Sprache-zu-Text, KI-gestützte Wissensdatenbank und integriertes Fallmanagement-System. Für weitere Informationen zu allen Funktionen der SeaX-Plattform besuchen Sie bitte die [SeaX-Hauptseite](https://seax.seasalt.ai/?utm_source=blog/).

# Demo Server
Jetzt stellen wir vor, wie wir unseren Discord-Server eingerichtet haben. Für Demo-Zwecke haben wir uns ein Szenario vorgestellt, in dem unser Server als Community für ein Spiel wie Pokémon Go! verwendet wird. Die folgende Tabelle zeigt einen Überblick über einige der Funktionen, die wir in unserem Demo-Discord-Server demonstrieren.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-features-2.png" alt="Übersicht über die Funktionen des Demo-Kundenservice-Discord-Servers."/>

*Übersicht über die Funktionen des Demo-Discord-Servers.*
</center>

## 1-zu-viele Hilfe: Offizielle Kanäle
Mehrere Kanäle im Server wurden eingerichtet, um einen direkten Stream zwischen offiziellen Administratoren/Entwicklern und Spielern zu bieten.
**Ankündigungskanal** kann nur von Administratoren und Moderatoren gepostet werden und kann (manuelle oder automatische) Beiträge von Twitter-Konten, Websites oder anderen offiziellen Quellen enthalten.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-announcement-channel.jpg" alt="Ankündigungskanal auf Discord-Server mit Beiträgen vom offiziellen Twitter-Konto."/>

*Demo #announcements-Kanal auf Discord-Server.*
</center>

**Bug-Report-Kanal** ermöglicht es Spielern, Bugs und spielbrechende Probleme zu diskutieren. Administratoren können diesen Kanal genau überwachen, um alle Probleme im Spiel zu identifizieren, die angegangen werden sollten. Darüber hinaus können Benutzer den \`/bug\` Slash-Befehl innerhalb des Kanals verwenden, um offizielle Bug-Reports einzureichen.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-bug-report-channel.jpg" alt="Bug-Report-Kanal auf Discord-Server mit eingereichten Bug-Reports."/>

*Demo #bug-report-Kanal auf Discord-Server mit eingereichten Bug-Reports.*
</center>

**Feature-Request-Kanal** ermöglicht es Spielern, Gameplay-Änderungen, Quality-of-Life-Verbesserungen, Content-Ergänzungen und mehr zu diskutieren, die sie im Spiel sehen möchten. Ähnlich wie beim Bug-Request-Kanal können ihre Eingaben von Discord-Moderatoren gesehen werden, die den \`/new_feature\` Slash-Befehl verwenden können, um offizielle Anfragen einzureichen.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-feature-request-channel.jpg" alt="Feature-Request-Kanal auf Discord-Server mit Benutzer, der Slash-Befehl ausführt."/>

*Demo #feature-request-Kanal auf Discord-Server mit Benutzer, der Slash-Befehl ausführt.*
</center>

## 1-zu-1 Hilfe: Kundenservice-Agent

Spieler können den \`/helpme\` Slash-Befehl verwenden, um eine Direktnachricht mit einem Agenten auszulösen. Der Kundenservice-Agent kann automatisiert sein (virtueller Agent) oder von einem Live-Agenten betrieben werden.

Für unsere Demo haben wir einen einfachen FAQ-Bot eingerichtet, der die Unternehmens-Wissensdatenbank abfragt, um Benutzern relevante Artikelvorschläge zu machen. Benutzer können auch einen Live-Agenten anfordern und werden in derselben Chat-Sitzung zu einem Live-Agenten auf SeaX weitergeleitet.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-customer-service-channel.jpg" alt="Kundenservice-Kanal auf Discord-Server mit Benutzer, der DM auslöst."/>

*Demo #feature-request-Kanal auf Discord-Server mit Benutzer, der DM auslöst.*
</center>

### Wissensdatenbank
Wenn ein Benutzer eine Anfrage an den virtuellen Service-Agenten stellt, kann der Agent den Benutzer an relevante Artikel in der Wissensdatenbank verweisen.

### Live-Agent-Übertragung
Sobald ein Benutzer eine Direktnachricht mit dem Bot beginnt, kann er einen Live-Agenten anfordern. Sie erhalten sofort eine Benachrichtigung, dass ein Fall für sie erstellt wurde und sie zu einem Live-Agenten weitergeleitet werden. Wenn der Live-Agent dem Chat beitritt, erhalten sie ebenfalls eine Benachrichtigung.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-customer-service-dm.jpg" alt="Direktnachrichten mit Kundenservice mit Wissensdatenbank-Artikelvorschlägen, Live-Agent-Übertragung und Fallmanagement."/>

*Direktnachrichten mit Kundenservice mit Wissensdatenbank-Artikelvorschlägen, Live-Agent-Übertragung und Fallmanagement.*
</center>

Im Backend können Live-Agents Anrufe und Chat-Nachrichten von allen Kanälen (SMS, Facebook, Discord, Sprachanrufe usw.) über eine einzige Plattform bearbeiten. In diesem Fall ist die Backend-Plattform SeaX.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/flex-discord-channel.jpg" alt="SeaX-Interface zeigt Live-Agent-Ansicht einer Konversation mit Discord-Benutzer."/>

*SeaX-Interface zeigt Live-Agent-Ansicht einer Konversation mit Discord-Benutzer.*
</center>

## Fallmanagement
Eine Funktion, die wir in dieser Demo hervorheben möchten, ist das Fallmanagement. Seasalt.ais Discord-Lösung ist mit dem SeaX-Fallmanagement-System integriert, um die verschiedenen Fälle der Benutzer ordnungsgemäß zu verfolgen. Wenn ein Benutzer mit dem Discord-Bot interagiert (z.B. einen Live-Agenten anfordert oder einen Bug meldet), können wir automatisch einen neuen Fall öffnen und alle wichtigen Informationen über den Benutzer und das Problem, das sie haben, aufzeichnen. Dies ermöglicht es Live-Agents, leicht auf alle gemeldeten Probleme zuzugreifen und sicherzustellen, dass sie den Benutzer verfolgen, bis der Fall gelöst ist.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-new-case.png" alt="Neuen Fall im SeaX-Fallmanagement-System erstellen."/>

*Neuen Fall im SeaX-Fallmanagement-System erstellen.*

<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-existing-case.png" alt="Bestehenden Fall im SeaX-Fallmanagement-System anzeigen."/>

*Bestehenden Fall im SeaX-Fallmanagement-System anzeigen.*

</center>

# Technischer Deep Dive

Jetzt haben wir das Endprodukt und alle Funktionen gesehen, die für Server-Mitglieder und die Live-Agents verfügbar sind, die ihnen helfen. Aber wie wird das Ganze tatsächlich implementiert? In unserem vorherigen Blogbeitrag ["Wie man eine Discord-Community und Bot für Ihre Marke erstellt"](https://seasalt.ai/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/) führten wir ein, wie man einen Discord-Server für Ihre Marke erstellt und wie man Discord-Bots integriert, um ihn zu verwalten. Um diese fortschrittlichere Demo zu unterstützen, haben wir auch [SeaChat, Seasalt.ais konversationelle KI-Engine](https://chat.seasalt.ai), verwendet, um einen einfachen Chatbot zu erstellen, der es unserem Discord-Bot ermöglicht, natürliche Sprachanfragen der Benutzer zu verarbeiten.

Auf der SeaX-Seite hat unser Team eng mit Twilio zusammengearbeitet, um eine funktionsreiche Contact Center-Lösung zu erstellen, die auf Twilio Flex aufbaut. Für weitere Informationen zu Twilio Flex und wie der Einrichtungsprozess funktioniert, können Sie den [Twilio Flex Quickstart Guide](https://www.twilio.com/docs/flex/quickstart) lesen.

Nachdem der Discord-Server, Discord-Bot, Chatbot eingerichtet sind und wir sicherstellen, dass wir eine funktionierende SeaX-Instanz haben, war die größte Herausforderung, wie Nachrichten korrekt zwischen Benutzern, Bots und Live-Agents auf SeaX weitergeleitet werden. Twilio ist großartig im Umgang mit Nachrichtenweiterleitung, also war unser Ziel, alle Slash-Befehle im Discord-Bot-Server zu behandeln und dann alle anderen Nachrichten (wie Direktnachrichten an den Chatbot oder Live-Agent) an Twilio weiterzuleiten.

## Flex-Flow definieren
Der erste Schritt ist sicherzustellen, dass alle Nachrichten, die wir an Twilio senden, an den richtigen Ort weitergeleitet werden. Wir haben einen einfachen Twilio-Flow eingerichtet, der zuerst prüft, ob ein Benutzer einen Live-Agenten angefordert hat, und wenn ja, leitet er die folgenden Nachrichten an SeaX weiter. Wenn der Benutzer keinen Live-Agenten angefordert hat, leiten wir die Nachricht an den Chatbot für eine Antwort weiter. Für weitere Informationen zum Einrichten des Flows siehe [Twilio Studio Flow Dokumentation](https://www.twilio.com/docs/studio).

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-flow.png" alt="Einfacher Flex Studio Flow, der eingehende Nachrichten an Chatbot oder SeaX weiterleitet."/>

*Einfacher Flex Studio Flow, der eingehende Nachrichten an Chatbot oder SeaX weiterleitet.*
</center>

## Benutzerdefinierten Kanal erstellen
Also verstehen wir jetzt, wie eingehende Nachrichten weitergeleitet werden. Discord ist jedoch kein nativ unterstützter Kanal von Twilio. Glücklicherweise hat Twilio ein detailliertes Tutorial darüber, wie man [einen benutzerdefinierten Chat-Kanal zu Twilio Flex hinzufügt](https://www.twilio.com/blog/add-custom-chat-channel-twilio-flex). Nach dem Befolgen der Anleitung zum Einrichten des neuen benutzerdefinierten Kanals auf Twilio müssen wir tatsächlich Nachrichten von Discord an Twilio weiterleiten.

Zuerst richten wir den Twilio-Client ein:

\`\`\`python
from twilio.rest import Client
twilio_client = Client(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)
\`\`\`

Jetzt, sobald wir eine eingehende Nachricht von Discord erhalten, können wir diese Nachricht über den Twilio-Client an Twilio weiterleiten. Zuerst sollten wir prüfen, ob der Benutzer bereits im Twilio-System existiert und ob sie bereits einen offenen Chat-Kanal haben.

\`\`\`python
# get_user-Methode aufrufen, um zu prüfen, ob Benutzer existiert, und neuen Benutzer erstellen, wenn nicht
user = await get_user(user_id, twilio_client, TWILIO_SERVICE_SID)

# Kanäle des Benutzers abrufen
user_channels = twilio_client.chat \\
        .services(TWILIO_SERVICE_SID) \\
        .users(user_id) \\
        .user_channels \\
        .list()
\`\`\`

Wenn der Benutzer einen bestehenden offenen Chat-Kanal hat, müssen wir diesen verwenden, damit wir auf den Chat-Verlauf zugreifen können. Wenn es keinen bestehenden Chat-Kanal gibt, erstellen wir einen neuen für den Benutzer:

\`\`\`python
if user_channels:
    channel_sid = user_channels[-1].channel_sid
else:
    channel = twilio_client.flex_api \\
            .channel \\
            .create(
                flex_flow_sid=FLEX_FLOW_ID,
                chat_user_friendly_name=username,
                chat_friendly_name=chat_name,  # -> Freundlicher Name des Chat-Kanals
                target=conversation_id,  # -> Eindeutige ID, die den Chat-Benutzer identifiziert
                identity=conversation_id,  # -> Benutzer, z.B. / Discord DM ID
        )
    channel_sid = channel.sid
\`\`\`

Schließlich, sobald wir einen offenen Chat-Kanal zwischen dem Discord-Benutzer und Twilio haben, können wir die eingehende Nachricht an den Twilio Studio Flow weiterleiten.

\`\`\`python
message = twilio_client.chat \\
        .services(TWILIO_SERVICE_SID) \\
        .channels(channel_sid) \\
        .messages \\
        .create(
            body=message_text,
            from_=user_id,
            x_twilio_webhook_enabled='true',
            attributes=json.dumps(message_json)  # Header als Attribute senden, damit sie später zugänglich sind
        )
\`\`\`
Jetzt können wir eingehende Nachrichten von Discord-Benutzern direkt an unseren Twilio Flex Flow weiterleiten. Auf der Discord-Bot-Seite stellen Sie sicher, dass alle Direktnachrichten an Twilio weitergeleitet werden. Jetzt können Sie versuchen, eine Direktnachricht an den Discord-Bot zu senden, und Sie sollten sie in den Twilio Studio Flow-Logs erscheinen sehen - aber wir sind noch nicht fertig!

## HTTP-Server für komplexeres Routing erstellen

### Ausgehende Nachrichten Webhook
Also verstehen wir jetzt, wie eingehende Nachrichten weitergeleitet werden. Wir fehlen jedoch noch einige Teile. Erstens wissen wir, dass wir jetzt Nachrichten an Twilio senden können, aber wie antworten wir Benutzern auf Discord? Unser Discord-Bot ist das Einzige, das berechtigt ist, Nachrichten an unseren Discord-Server und Benutzer zu senden, und Twilio weiß auch nicht, wie man unsere Nachrichten zurück zum Discord-Server sendet. Die Lösung ist, dass wir einen ausgehenden Nachrichten-Webhook einrichten müssen, der ausgelöst wird, wann immer es eine neue Nachricht im Twilio-Chat-Kanal gibt. In diesem Webhook können wir dann unseren Discord-Bot verwenden, um die Nachricht zurück zu unserem Server weiterzuleiten.

Dafür integrieren wir den Discord-Bot in einen leistungsfähigeren HTTP-Server. Wir haben [FastAPI](https://fastapi.tiangolo.com/) verwendet, um einen einfachen POST-Endpunkt einzurichten, der als unser ausgehender Nachrichten-Webhook fungiert. Sobald wir den Server eingerichtet haben und unseren Discord-Bot damit laufen lassen, können wir den POST-Endpunkt definieren.

Dieser Endpunkt wird jede Nachricht empfangen, die zum Chat-Kanal hinzugefügt wird, also müssen wir zuerst alles außer ausgehenden Nachrichten von SeaX herausfiltern. Als nächstes müssen wir die richtige Kanal-ID aus dem Nachrichtentext abrufen, damit wir wissen, wohin wir die Nachricht weiterleiten. Schließlich können wir den Discord-Client verwenden, um die Nachricht an den Discord-Kanal weiterzuleiten.

\`\`\`python
@app.post("/forward-to-discord", status_code=200)
async def forward_discord_message(request: Request, response: Response) -> None:
    raw_body = await request.body()
    body = urllib.parse.parse_qs(raw_body.decode())

    # Nur auf Nachrichten von SDK fokussieren (Flex, alle anderen Nachrichten werden von API kommen)
    if not body.get('Source') == ['SDK']:
        return

    # Nachrichten von Flex enthalten nicht die conversationId der ursprünglichen Nachricht
    # Wir brauchen convId, um die Nachricht zurück zur Konversation auf GBM zu senden
    # Letzte Nachricht abrufen und conversationId extrahieren
    message = twilio_client.chat \\
            .services(TWILIO_SERVICE_SID) \\
            .channels(body.get("ChannelSid")[0]) \\
            .messages.list(limit=1)[0]

    attributes = json.loads(message.attributes)

    channel = discord_client.get_channel(attributes.get("channel", {}).get("id"))
    if channel:
        await channel.send(body.get("Body", [""])[0].get("text"))
    else:
        logger.error(f"Discord-Kanal mit ID {get_channel_id(req)} nicht gefunden!")
        response.status_code = 400
\`\`\`

Schließlich, um Nachrichten an unseren Endpunkt zu senden, müssen wir Twilio unseren neuen Webhook mitteilen. Jeder Chat-Kanal muss seinen eigenen Webhook konfigurieren. Also, wenn wir zu dem Ort zurückkehren, wo wir ursprünglich den neuen Chat-Kanal für den Benutzer erstellt haben, können wir zusätzlichen Code hinzufügen, um den Webhook zu konfigurieren:

\`\`\`python
webhook = twilio_client.chat \\
        .services(TWILIO_SERVICE_SID) \\
        .channels(channel_sid) \\
        .webhooks \\
        .create(
            type='webhook',   
configuration_url=f"{SERVER_HOST}/forward-to-discord",
            configuration_method="POST",
            configuration_filters=["onMessageSent", "onMessageUpdated", "onMediaMessageSent"]
        )
\`\`\`

### Bot-Integration

Also sollten ausgehende Nachrichten von SeaX jetzt korrekt zurück zu unserem Discord-Server weitergeleitet werden. Aber wir behandeln immer noch nicht Nachrichten, die an den Chatbot gehen. Wir müssen den letzten Endpunkt einrichten, der vom Twilio Studio Flow ausgelöst wird und Benutzernachrichten empfängt, den Bot abfragt und die Antwort an Discord zurücksendet.

\`\`\`python
@app.post("/chatbot-to-discord", status_code=200)
async def receive_discord_message(request: Request, response: Response):
    """POST-Anfrage von Twilio empfangen, Bot abfragen und Antwort an Discord zurücksenden."""
    req = await request.body()
    # Ursprünglichen Nachrichtentext von Twilio-Inhalt trennen
    twilio_body, original_message_body = separate_original_message_body(req.decode())

    bot_response = await query_bot(original_message_body, bot_info)

    if bot_response:
        channel = discord_client.get_channel(original_message_body.get("channel_id"))
        if channel:
            for item in bot_response:
                await channel.send(item.get("text"))
\`\`\`

Stellen Sie sicher, dass der Twilio Studio Flow den richtigen Webhook hat, um Nachrichten an den Bot weiterzuleiten. Jetzt haben wir die Nachrichtenweiterleitung abgeschlossen! Wir können die Vogelperspektive aller Nachrichtenweiterleitung in diesem Diagramm sehen:

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-routing-diagram.jpg" alt="Nachrichtenweiterleitungsdiagramm."/>

*Nachrichtenweiterleitungsdiagramm.*
</center>

# Zusammenfassung
Zusammenfassend haben wir in dieser Blog-Serie die wachsende Popularität von Discord und die Möglichkeiten diskutiert, die es als neue Plattform für Marken bietet, um mit Kunden zu interagieren. Wir haben einige grundlegende Funktionen von Discord vorgestellt, um zu zeigen, wie Marken ihre eigenen Online-Communities aufbauen können, sowie fortschrittlichere Funktionen, die es Marken ermöglichen, Discord-Bots zu verwenden, um Moderation und Kundensupport auf ihren Servern zu automatisieren. Schließlich haben wir geteilt, wie wir Discord mit unserer Kundenservice-Plattform SeaX integriert haben, um fortschrittliche Funktionen zu Discord-Communities zu bringen, wie Live-Agent-Übertragung, Fallmanagement und KI-gestützte Wissensdatenbank-Suche.
Für eine persönliche Demo oder um zu erfahren, wie Seasalt.ai Ihnen helfen kann, Ihre spezifischen Geschäftsanforderungen zu erfüllen, füllen Sie bitte unser ["Demo buchen"](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting)-Formular aus. Für weitere Informationen zur Flex/Discord-Integration oder um uns zu kontaktieren, besuchen Sie [Seasalt.ais Twilio Partner-Listing](https://showcase.twilio.com/partner-listing/a8E8Z000000PDCQUA4).
`;export{e as default};

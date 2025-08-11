const e=`---
title: "Discord (2/3): So erstellen Sie eine Discord-Community und einen Bot für Ihre Marke"
metatitle: "Discord (2/3): Erstellen Sie die Discord-Community und den Bot Ihrer Marke"
date: 2022-05-31 13:29:51-07:00
modified_date: 2025-08-06 10:45:58+09:00
draft: false
author: Kim Dodds
description: "In diesem Blogbeitrag führen wir Sie durch die Erstellung eines Servers für Ihre Marke und die Anbindung eines Bots, der Moderation, Fehlerberichte, Ankündigungen usw. automatisieren kann."
weight: 1
tags:
  - SeaX
  - Discord
image: /images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-community-and-bot-for-your-brand.jpg
canonicalURL: /blog/create-a-discord-community-and-bot/
url: /blog/create-a-discord-community-and-bot/
---

*Unser Blogbeitrag [„Discord: Eine neue Dimension der Kundenbindung“](https://seasalt.ai/blog/15-discord-a-new-frontier-for-customer-engagement/) befasste sich mit der wachsenden Beliebtheit von Discord und wie Marken diese neue soziale Plattform nutzen können, um eigene Online-Communitys aufzubauen und mit Kunden in Kontakt zu treten. In diesem Blogbeitrag führen wir Sie durch die Erstellung eines neuen offiziellen Servers für Ihre Marke, einschließlich der Anbindung eines Bots, der Aufgaben wie Moderation, Fehlerberichte, Ankündigungen usw. automatisieren kann.*

## Inhaltsverzeichnis
- [Den Server einrichten](#den-server-einrichten)
    - [Einen neuen Discord-Server erstellen](#einen-neuen-discord-server-erstellen)
    - [Den Server in einen „Community-Server“ umwandeln](#den-server-in-einen-community-server-umwandeln)
    - [Kanäle, Events und weitere Funktionen einrichten](#kanäle-events-und-weitere-funktionen-einrichten)
    - [Macht es bekannt!](#macht-es-bekannt)
- [Den Discord-Bot einrichten](#den-discord-bot-einrichten)
    - [Einen neuen Bot im Discord Developer Portal erstellen](#einen-neuen-bot-im-discord-developer-portal-erstellen)
    - [Einen einfachen Discord-Bot mit PyCord erstellen](#einen-einfachen-discord-bot-mit-pycord-erstellen)
    - [Den Discord-Bot einladen](#den-discord-bot-einladen)
    - [Die Integration testen](#die-integration-testen)

# Den Server einrichten

## Einen neuen Discord-Server erstellen
Klicken Sie in der Discord-Anwendung unten links auf die Schaltfläche „Server hinzufügen“.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/create-new-discord-server.png" alt="Einen neuen Discord-Server erstellen."/>

*Aufforderung beim Erstellen eines neuen Discord-Servers.*
</center>

Sie können aus einer Vorlage wählen, wenn Sie mit einigen für Sie erstellten Kanälen beginnen möchten, oder Sie können ganz von vorne anfangen. Und der erste Schritt ist so einfach, Ihr Server ist erstellt!

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/new-discord-server.png" alt="Ein neu erstellter Discord-Server."/>

*Ein neu erstellter Discord-Server.*
</center>

## Den Server in einen „Community-Server“ umwandeln

Es wird dringend empfohlen, die „Community“-Funktionen des Discord-Servers zu aktivieren. Durch die Umwandlung in einen Community-Server schalten Sie zusätzliche Werkzeuge frei, die bei der Moderation, dem Betrieb und dem Wachstum des Servers helfen können. Insbesondere haben Community-Server Zugriff auf die folgenden Funktionen:

- **Willkommensbildschirm**: Stellt neuen Nutzern Ihren Server vor
- **Ankündigungskanal**: Ermöglicht es Ihnen, Nachrichten an Ihre Nutzer zu senden
- **Server-Einblicke**: Zeigen Sie Analysen über Ihre Community und Nutzer an
- **Entdecken**: Bewerben Sie Ihre Community im Server-Verzeichnis von Discord

Klicken Sie oben links neben dem Servernamen auf das Dropdown-Menü und wählen Sie „Servereinstellungen“. Klicken Sie auf der linken Seite auf den Tab „Community aktivieren“ und wählen Sie „Los geht's“.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/convert-to-community-discord-server.png" alt="Einen regulären Discord-Server in einen Community-Server umwandeln."/>

*Aktivieren der Community-Server-Einstellungen.*
</center>

Fahren Sie mit der erforderlichen Einrichtung fort. Um die Community-Funktionen zu aktivieren, muss Ihr Server eine zusätzliche Verifizierung für Benutzer durchführen, einen Chatfilter aktivieren und einen Regelkanal einrichten.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-community-setup.png" alt="Einrichtung für einen Community-Discord-Server."/>

*Einrichtung des Community-Servers.*
</center>

Sobald Sie die Community-Funktionen aktiviert haben, haben Sie Zugriff auf mehrere neue Features. Zwei der nützlichsten Funktionen sind die Willkommensnachricht und die Mitgliederüberprüfung:

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-server-welcome-page.png" alt="Beispiel für eine Server-Willkommensnachricht."/>

*Beispiel für eine Server-Willkommensnachricht.*

<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-server-membership-screening.png" alt="Einstellungen für die Mitgliederüberprüfung."/>

*Einstellungen für die Mitgliederüberprüfung.*
</center>

## Kanäle, Events und weitere Funktionen einrichten
Nachdem Sie den Community-Server eingerichtet haben, haben Sie auch von der Hauptseite des Servers aus Zugriff auf neue Funktionen.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-server-channel-types.png" alt="Erstellen eines neuen Kanals in einem Discord-Server." style="width:50%"/>

*Erstellen eines neuen Kanals.*

<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-server-channels.png" alt="Beispiel für die Kanäle eines Discord-Community-Servers." style="width:50%"/>

*Kanäle eines Community-Servers.*
</center>

Wenn Sie einen neuen Kanal erstellen, haben Sie Zugriff auf zwei neue Kanaltypen: Ankündigung und Bühne. Im Ankündigungskanal können nur Moderatoren posten, was für offizielle Beiträge und Ankündigungen nützlich ist – viele Server lassen Bots automatisch ihren offiziellen Twitter-Feed oder Forenbeiträge in diesem Kanal posten. Der „Bühnen“-Kanal ist eine besondere Art von Sprachkanal, der für die Ausrichtung von Veranstaltungen mit Live-Publikum nützlich ist. Der Host hat die Möglichkeit, andere Sprecher zu moderieren (im Gegensatz zu einem normalen Sprachkanal, wo jeder frei sprechen kann).

Sobald Ihr Server vollständig eingerichtet ist, könnte er etwa so aussehen:

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/customized-discord-server.png" alt="Vollständig angepasster Discord-Server."/>

*Vollständig angepasster Community-Server.*
</center>

## Macht es bekannt!
Sobald Ihr Server vollständig eingerichtet ist, können Sie anfangen, Leute einzuladen!
Discord bietet ein kostenloses, vorgefertigtes Widget, das in jede Website eingebettet werden kann, um für Ihren Server zu werben.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-server-widget.png" alt="Einstellungen für das Discord-Server-Widget."/>

*Einstellungen für das Server-Widget.*

<iframe src="https://discordapp.com/widget?id=966505646944055326&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>

*Ein Beispiel für ein funktionierendes Widget für den Near Me Messaging Discord-Server von Seasalt.ai.*

</center>

Um Vertrauen bei potenziellen Nutzern aufzubauen, können Sie sich optional an den Discord-Support wenden, um Ihren Server verifizieren zu lassen. Die Verifizierung platziert ein „Verifiziert“-Symbol neben Ihrem Servernamen, was anzeigt, dass es sich um die offiziell zugehörige Community eines Unternehmens, einer Marke oder einer Person des öffentlichen Interesses handelt. Die Anforderungen für die Verifizierung finden Sie auf der [offiziellen Website von Discord](https://support.discord.com/hc/en-us/articles/360001107231-Verified-Server-Requirements).

Sobald Ihr Server anläuft und eine gute Anzahl von Nutzern hat, bietet Discord weitere Möglichkeiten, Ihren Server intern zu bewerben. Wenn Ihr Server mindestens 8 Wochen alt ist und mehr als 500 Nutzer hat, können Sie eine Discord-Partnerschaft beantragen, die Ihrem Server spezielle, partner-exklusive Vorteile verschafft. Sobald Sie mehr als 1.000 Nutzer erreichen, können Sie der Server-Entdeckung beitreten, die es jedem Discord-Nutzer ermöglicht, Ihren Server zu entdecken und ihm beizutreten.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-server-discovery.png" alt="Einstellungen und Anforderungen für die Discord-Entdeckung."/>

*Einstellungen und Anforderungen für die Discord-Entdeckung.*
</center>

# Den Discord-Bot einrichten
Nachdem Sie einen Server eingerichtet haben, können Sie ihn erweitern, indem Sie einen Bot hinzufügen, um einige Prozesse wie Moderation, Nutzerfeedback und Ankündigungen zu automatisieren. Lesen Sie den folgenden Abschnitt, um zu erfahren, wie Sie einen einfachen Bot einrichten, und bleiben Sie dran für den nächsten Blog in unserer Serie, um zu sehen, wie Sie ein vollwertiges Kundenservice-Erlebnis in Ihren Discord-Server integrieren können.

## Einen neuen Bot im Discord Developer Portal erstellen
Erstellen Sie ein Konto im [Discord Developer Portal](https://discord.com/developers/applications). Erstellen Sie eine „Neue Anwendung“ und geben Sie ihr einen Namen.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/new-discord-application.png" alt="Eine neue Anwendung im Discord Developer Portal erstellen."/>

*Discord-Entwickler-Dashboard: Anwendungen.*
</center>

Wählen Sie Ihre neue Anwendung aus und klicken Sie auf der linken Seite auf den Tab „Bot“.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/new-discord-bot.png" alt="Bot-Einstellungen der Anwendung."/>

*Discord-Anwendungseinstellungen.*
</center>

Klicken Sie auf „Bot hinzufügen“, um Ihren Discord-Bot zu erstellen.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-bot-settings.png" alt="Einen neuen Discord-Bot erstellen."/>

*Einen neuen Discord-Bot erstellen.*
</center>

Sobald der Bot erstellt ist, generieren und kopieren Sie den Bot-Token. Stellen Sie abschließend sicher, dass die Berechtigungen für Nachrichten aktiviert sind.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-bot-messaging-permissions.png" alt="Nachrichtenberechtigungen für den Discord-Bot."/>

*Einen neuen Discord-Bot erstellen.*
</center>

## Einen einfachen Discord-Bot mit PyCord erstellen

Wir verwenden die [PyCord-Bibliothek](https://docs.pycord.dev/en/master/) als Python-Wrapper für die Discord-API.

1. Installieren Sie PyCord und erstellen Sie eine neue Python-Datei für Ihren Discord-Bot.
2. Importieren Sie das Discord-Paket und erstellen Sie eine Instanz des Discord-Clients.
3. Verwenden Sie den Event-Wrapper des Clients, um eine \`on_message\`-Methode zu erstellen. Diese Methode empfängt jede Nachricht, die an einen Kanal gesendet wird, auf den der Bot Zugriff hat.
    a. Innerhalb der Methode prüfen Sie zuerst, ob die Nachricht vom Bot selbst stammt, und ignorieren Sie sie in diesem Fall.
    b. Andernfalls reagieren wir zunächst nur auf Nachrichten, die mit \`$bot\` beginnen – wenn die Nachricht damit beginnt, antworten wir einfach im selben Kanal mit \`Ich habe deine Nachricht erhalten!\`.
4. Stellen Sie abschließend am Ende des Skripts sicher, dass Sie den Discord-Client ausführen, damit er beginnt, auf Ereignisse im Kanal zu lauschen.\`\`\`python
import discord

discord_client = discord.Bot()
discord_token = “xxxxxxxxxxxx”
 
@discord_client.event
async def on_message(message):
    """Listen and react to messages."""
    # Check if the message is from the bot itself
    if message.author == discord_client.user:
        return

    msg = message.content
    if msg.startswith("$bot") or isinstance(message.channel, discord.DMChannel):
        await message.channel.send(“I got your message!”)

discord_client.run(discord_token)


\`\`\`

### Den Discord-Bot einladen

Um den Bot zu Ihrem Server einzuladen, gehen Sie zurück zum Discord Developer Portal und wählen Sie Ihre Anwendung aus. Klicken Sie auf der linken Seite auf den Tab „OAuth2“ und dann auf „URL Generator“. Wählen Sie im Abschnitt „Scopes“ die Option „bot“ und im Abschnitt „Bot Permissions“ die Option „Send Messages“.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-bot-invite-url.png" alt="Discord Bot Einladungs-URL-Generator."/>

*Discord Bot Einladungs-URL-Generator.*
</center>

Kopieren Sie die generierte URL und fügen Sie sie in Ihren Browser ein. Wählen Sie den Server aus, zu dem Sie den Bot hinzufügen möchten, und klicken Sie auf „Autorisieren“.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-bot-add-to-server.png" alt="Discord Bot zum Server hinzufügen."/>

*Discord Bot zum Server hinzufügen.*
</center>

### Die Integration testen

Nachdem Sie den Bot zu Ihrem Server hinzugefügt haben, können Sie ihn testen, indem Sie in einem beliebigen Kanal, auf den der Bot Zugriff hat, \`$bot Hallo\` eingeben. Der Bot sollte mit \`Ich habe deine Nachricht erhalten!\` antworten.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-bot-test-integration.png" alt="Testen der Discord Bot Integration."/>

*Testen der Discord Bot Integration.*
</center>

## Fazit

In diesem Blogbeitrag haben wir die Schritte zur Erstellung eines Discord-Servers für Ihre Marke und zur Integration eines einfachen Bots behandelt. Discord bietet eine leistungsstarke Plattform für den Aufbau von Communities und die Interaktion mit Kunden. Durch die Nutzung der Community-Funktionen und die Automatisierung von Aufgaben mit Bots können Marken eine ansprechende und effiziente Umgebung für ihre Nutzer schaffen.

Bleiben Sie dran für den nächsten Blogbeitrag in unserer Serie, in dem wir uns ansehen werden, wie Sie ein vollwertiges Kundenservice-Erlebnis in Ihren Discord-Server integrieren können.

## Häufig gestellte Fragen

**F: Was ist ein Discord Community Server?**

A: Ein Discord Community Server ist ein spezieller Servertyp, der zusätzliche Tools und Funktionen für die Moderation, den Betrieb und das Wachstum einer Online-Community bietet. Dazu gehören Willkommensbildschirme, Ankündigungskanäle, Server-Einblicke und die Möglichkeit, im Discord Server-Verzeichnis entdeckt zu werden.

**F: Warum sollte ich einen Discord Bot verwenden?**

A: Ein Discord Bot kann verschiedene Aufgaben automatisieren, wie z. B. Moderation, Fehlerberichte, Ankündigungen und die Beantwortung häufig gestellter Fragen. Dies hilft, die Effizienz zu verbessern und ein besseres Nutzererlebnis zu bieten, indem manuelle Aufgaben reduziert werden.

**F: Kann ich meinen Discord Server verifizieren lassen?**

A: Ja, Sie können Ihren Discord Server verifizieren lassen, um Vertrauen bei potenziellen Nutzern aufzubauen. Ein verifizierter Server zeigt an, dass es sich um die offiziell zugehörige Community einer Marke oder Person des öffentlichen Interesses handelt. Die Anforderungen für die Verifizierung finden Sie auf der offiziellen Website von Discord.

**F: Was ist PyCord?**

A: PyCord ist eine Python-Bibliothek, die als Wrapper für die Discord-API dient. Sie ermöglicht es Entwicklern, Discord Bots mit Python zu erstellen und zu interagieren.

**F: Wie lade ich meinen Discord Bot zu meinem Server ein?**

A: Sie können Ihren Discord Bot über den OAuth2 URL Generator im Discord Developer Portal zu Ihrem Server einladen. Wählen Sie die entsprechenden Scopes und Bot-Berechtigungen aus, generieren Sie die URL und fügen Sie sie in Ihren Browser ein, um den Bot zu Ihrem Server hinzuzufügen.

### Den Discord-Bot einladen
Nachdem Sie den Bot erstellt haben, müssen Sie ihn auf Ihren Server einladen. Gehen Sie dazu auf die Registerkarte „OAuth2“ und wählen Sie die Berechtigungen aus, die Ihr Bot benötigt. Für diesen einfachen Bot benötigen wir nur die Berechtigung „Nachrichten lesen/schreiben“.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-bot-oauth2-permissions.png" alt="OAuth2-Berechtigungen für den Discord-Bot."/>

*OAuth2-Berechtigungen für den Discord-Bot.*
</center>

Kopieren Sie den generierten Link und fügen Sie ihn in Ihren Browser ein. Wählen Sie den Server aus, auf den Sie den Bot einladen möchten, und klicken Sie auf „Autorisieren“.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-bot-invite.png" alt="Den Discord-Bot auf einen Server einladen."/>

*Den Discord-Bot auf einen Server einladen.*
</center>

### Die Integration testen
Sobald der Bot online ist, können Sie die Integration testen, indem Sie eine Nachricht an den Bot senden. Wenn alles richtig eingerichtet ist, sollte der Bot mit „Ich habe deine Nachricht erhalten!“ antworten.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-bot-test-integration.png" alt="Testen der Discord-Bot-Integration."/>

*Testen der Discord-Bot-Integration.*
</center>

### Ein Hinweis zu Python-Discord-Clients

Das [Discord.py](https://github.com/Pycord-Development/pycord) ist das beliebteste Projekt für einen Python-Wrapper für die Discord-API, jedoch hat der Autor und Maintainer [beschlossen, die Bibliothek einzustellen](https://gist.github.com/Rapptz/4a2f62751b9600a31a0d3c78100287f1). Sie können viele alternative Python-Wrapper für die Discord-API finden, und viele sind Forks des ursprünglichen Discord.py. Wir haben uns für PyCord entschieden, weil es gut gewartet zu sein scheint, bereits Slash-Befehle unterstützt und einen [Discord-Server](https://pycord.dev/discord) hat, auf dem wir Fragen stellen können.

Wenn Sie den Discord-Bot erstellen, versuchen Sie, keine anderen Discord-Python-Pakete zu installieren. *Die Discord-Python-Pakete funktionieren normalerweise nicht gut zusammen*, da sie alle unter separater Entwicklung stehen. Zum Beispiel funktioniert PyCord nicht gut mit [discord-components](https://github.com/kiki7000/discord.py-components), also stellen Sie sicher, dass Sie nicht beide Pakete gleichzeitig installiert haben.

## Den Discord-Bot einladen
Als Nächstes können Sie den Bot auf Ihren Server einladen. Klicken Sie auf „OAuth2“ -> „URL-Generator“. Wählen Sie im URL-Generator auf der rechten Seite „bot“ aus.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-bot-invite-url-generator.png" alt="Einen Einladungslink für den Discord-Bot generieren."/>

*Einen Einladungslink für den Bot generieren.*
</center>

Scrollen Sie als Nächstes nach unten, um dem Bot Berechtigungen hinzuzufügen. Sie können den Bot zum Administrator machen oder nur die benötigten Berechtigungen auswählen (dies ist sicherer).

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-bot-permissions.png" alt="Berechtigungseinstellungen für den Discord-Bot."/>

*Berechtigungseinstellungen des Bots.*
</center>

Kopieren Sie abschließend die unten generierte URL und öffnen Sie den Link in einem neuen Tab. Der Link leitet Sie weiter, um den Bot zu einem Server hinzuzufügen, den Sie verwalten.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/add-discord-bot-to-server.png" alt="Den Bot zum Discord-Server hinzufügen." style="width:50%"/>

*Den Bot zum Server hinzufügen.*
</center>

Nachdem der Bot auf den Server eingeladen wurde, klicken Sie auf den Bot und dann auf „Zum Server hinzufügen“. Sie werden gebeten, dem Bot die Berechtigung „Befehle im Server erstellen“ zu erteilen.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/confirm-discord-bot-permissions.png" alt="Berechtigungen des Discord-Bots bestätigen." style="width:50%"/>

*Die Berechtigungen des Bots im Server bestätigen.*
</center>

## Die Integration testen
Jetzt sollte Ihr Bot verbunden sein und alle Aktivitäten auf Ihrem Discord-Server mitverfolgen. Der im obigen Code bereitgestellte Beispiel-Bot antwortet einfach mit „Ich habe deine Nachricht erhalten!“, wenn jemand eine Nachricht eingibt, die mit der Zeichenfolge „$bot“ beginnt. Ein solches String-Matching ist der einfachste Weg, einige Aktionen für Ihren Bot einzurichten. Discord unterstützt jedoch auch native Anwendungsbefehle, die mehr Funktionsunterstützung bieten. Mehr darüber erfahren Sie in der [offiziellen Discord-API-Dokumentation](https://discord.com/developers/docs/interactions/application-commands). Sobald Sie Ihre anfängliche Bot-Integration eingerichtet haben, sind den Diensten, die Ihr Bot Ihrem Server bieten kann, keine Grenzen gesetzt.

Halten Sie Ausschau nach dem letzten Beitrag in unserer Blog-Serie, der zeigen wird, wie wir unser Produkt, [SeaX](https://seax.seasalt.ai/), verwendet haben, um die [Contact-Center-Plattform von Twilio Flex](https://www.twilio.com/flex) mit einem Community-Discord-Server zu verbinden. Diese Integration ermöglicht es Marken, nicht nur die Gemeinschaft mit ihren Kunden zu fördern, sondern auch einen direkten Kommunikationskanal aufrechtzuerhalten und Probleme direkt aus der Online-Community heraus anzugehen.

Für weitere Informationen zu unseren Lösungen besuchen Sie das [Produkt-Wiki von Seasalt.ai](https://wiki.seasalt.ai) – oder füllen Sie das [Formular „Demo buchen“](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting) aus, um einen direkten Einblick zu erhalten.`;export{e as default};

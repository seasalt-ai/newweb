const e=`---
title: "SeaVoice STT/TTS Discord Bot: Backend- und Stabilitätsverbesserungen"
metatitle: "SeaVoice STT/TTS Discord Bot: Backend- und Stabilitätsverbes..."
date: 2022-12-13 11:58:34-08:00
modified_date: 2025-07-28T16:56:53Z
draft: false
author: Sydney Burgess, Kim Dodds, Drake Farmer, Jack Harvison, Dylan Strong, Cody Vernon
description: "Mit der neuesten Version führt der SeaVoice Discord Bot massive Backend-Verbesserungen ein, die die Bot-Stabilität und die zukünftige Entwicklung verbessern."
weight: 1
tags:
  - SeaVoice
  - Discord
image: images/blog/27-discord-backend-improvements/seavoice-discord-stt-tts-bot-backend-improvements.jpg
canonicalURL: /blog/seavoice-discord-backend-improvements/
url: /blog/seavoice-discord-backend-improvements/
---


*Der SeaVoice Discord Bot hat als eine der besten Optionen für die Transkription von Sprache in Discord-Sprachkanälen an Popularität gewonnen. Mit der neuesten Version führen wir massive Backend-Verbesserungen ein, die die Bot-Stabilität verbessern und die zukünftige Entwicklung unterstützen.*

# SeaVoice erinnert sich: Datenbank online!

Hallo zusammen, in letzter Zeit haben wir hinter den Kulissen des SeaVoice Discord Bots an einigen Dingen gearbeitet, die wir gerne teilen möchten!

Wie Sie in unserem vorherigen Blogbeitrag gesehen haben, haben wir dem SeaVoice Bot viele Funktionen hinzugefügt, wie unsere neuen Anrufaufzeichnungen und Transkriptionen. Neben diesen Entwicklungen haben wir dem SeaVoice Discord Bot die Fähigkeit gegeben, sich an das zu erinnern, was er getan hat: alles von Befehlen bis zur Fehlerprotokollierung. Wenn der Bot jetzt mit Ihnen spricht oder Sie ihn verwenden, um einen Anruf aufzuzeichnen, werden all diese Informationen organisiert gespeichert.

## Was das für Benutzer bedeutet
Nun, was bedeutet das für Sie, fragen Sie sich vielleicht?

Nun, zunächst einmal wären unsere neuen Transkriptions- und Audio-Download-Funktionen ohne diese Backend-Verbesserungen nicht möglich! Wir können jetzt auch alle unglücklichen Abstürze, die Sie erleben, automatisch speichern, sodass unser Entwicklungsteam diese Probleme beheben kann, bevor Sie sie überhaupt bemerken. Darüber hinaus, wenn jemand entscheidet, dass er seine Daten nicht mehr in unserem System speichern möchte, ermöglicht uns diese neue Organisation, alle Daten schnell nach Server, Kanal, Benutzer, Datum usw. zu finden, abzurufen und/oder zu entfernen.

Darüber hinaus öffnet dies die Tür für neue Funktionen wie die Verfolgung von Statistiken, die automatische Moderation und vieles mehr. Moderatoren, möchten Sie sicherstellen, dass Ihre Serverregeln eingehalten werden oder überprüfen, wie oft der Bot auf Ihrem Server verwendet wird? Vielleicht möchten Sie das lustige Gespräch, das Sie letzte Woche geführt haben, wieder aufrufen? Mit dem nun fest etablierten und im Produktions-Bot verwendeten Datenbank-Framework sind eine Vielzahl neuer Funktionen leichter erreichbar.

## Datenschutz

Natürlich stellt sich immer die Frage des Datenschutzes und der Datensicherheit, wenn wir über das Speichern von Benutzerdaten sprechen. Hier sind einige wichtige Punkte dazu, wie wir Ihre Daten behandeln:
- Alle Benutzerdaten werden auf einem sicheren Remote-Server gespeichert, auf den nur ausgewählte Seasalt.ai-Mitarbeiter zugreifen können.
- SeaVoice zeichnet nur Daten auf, die von Discord bereitgestellt werden und die Benutzer bei der Interaktion mit dem SeaVoice-Bot bereitstellen; dazu gehören:
    - Server-, Kanal-, Benutzername & ID
    - Text, der in den Befehl \`/speak\` eingegeben wurde
    - Audio, das in einem Sprachkanal gesprochen wurde, während der Bot den Befehl \`/recognize\` ausführt
- Diese Daten werden nur von Seasalt.ai zur Verbesserung der Dienste verwendet.
- Sie können jederzeit die Entfernung aller oder eines Teils Ihrer Daten beantragen.

Für vollständige Details lesen Sie bitte die [Datenschutzrichtlinie von Seasalt.ai](https://seasalt.ai/privacy/).

## Zukünftige Richtungen

Ein Großteil dieses Teils des Updates wird nicht spürbar sein, aber für uns ist der schwierige Teil vorbei, und jetzt können wir mit Projekten beginnen, die es Ihnen ermöglichen, den SeaVoice Discord Bot noch mehr anzupassen und zu nutzen, als Sie es für möglich gehalten hätten.
Eine Funktion, die am Horizont erscheint, sind anpassbare Server- und/oder Benutzerkonfigurationen.
Mit der vorhandenen Datenbank können wir in Zukunft Präferenzen speichern, z. B. ob Sie daran erinnert werden möchten, dass ein Voice-Chat aufgezeichnet wird, wer den Download-Link zu einer Anruf-Transkription erhält oder wer sich von der Aufzeichnung abmelden möchte.

Haben Sie Ideen, die Sie gerne hinzugefügt sehen würden, jetzt, da wir Daten speichern können? Senden Sie uns gerne Vorschläge über den [Offiziellen SeaVoice Discord Server](https://discord.gg/dfAYfwBQ)!

<center>
<iframe src="https://discordapp.com/widget?id=919037515514654721&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
</center>

## Probieren Sie es aus!

Und wenn Sie die neueste Version des SeaVoice Bots noch nicht ausprobiert haben, probieren Sie es aus! Laden Sie den [SeaVoice Discord Bot](https://discord.com/oauth2/authorize?client_id=1001955060210749492&scope=bot) auf Ihren Server ein.
Lesen Sie auch gerne die [SeaVoice Bot-Dokumentation](https://wiki.seasalt.ai/seavoice/discord/discord-bot/), um zu sehen, wie Sie den Bot am besten an die Bedürfnisse Ihrer Community anpassen können.

Bleiben Sie dran für einige aufregende Updates, die in Kürze erscheinen werden!

Danke,

Das SeaVoice Bot Team.
`;export{e as default};

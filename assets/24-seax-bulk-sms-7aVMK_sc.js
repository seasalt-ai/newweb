const e=`---
title: "SeaX Bulk SMS: Für schnellere, effektivere Kundenansprache"
metatitle: "SeaX Bulk SMS: Für schnellere, effektivere Kundenansprache"
date: 2022-09-09 11:05:22-07:00
draft: false
author: Amy Chen, Kim Dodds, Sarah Reid
description: "In diesem Blog zeigen wir, wie die Bulk-SMS-Funktion von SeaX Agenten ermöglicht, proaktiv ausgehende Nachrichten per Text zu senden."
weight: 1
tags:
  - SeaX
image: images/blog/24-seax-bulk-sms/thumbnail.png
canonicalURL: /blog/seax-bulk-sms/
url: /blog/seax-bulk-sms/
---


*In unseren vorherigen Blogbeiträgen haben wir einige der wichtigsten Funktionen von SeaX (einschließlich [Voice Intelligence](https://seasalt.ai/blog/21-seax-voice-intelligence/), [Knowledge Base](https://seasalt.ai/blog/22-seax-knowledge-base/) und [Case Management](https://seasalt.ai/blog/23-seax-case-management/)) vorgestellt, die Agenten helfen, eingehende Anrufe und Nachrichten besser zu bearbeiten. In diesem Blog zeigen wir, wie die Bulk-SMS-Funktion von SeaX Agenten ermöglicht, proaktiv ausgehende Nachrichten per Text zu senden, die von Empfängern nachweislich schneller und konsistenter geöffnet werden als herkömmliche E-Mail-Kommunikationen.*

# Inhaltsverzeichnis
- [SMS vs. E-Mail](#sms-vs-email)
- [10DLC-Standards](#10dlc-standards)
- [SeaX Bulk SMS](#seax-bulk-sms)
    - [Kontakt-Upload](#contact-upload)
    - [Nachrichten-Erstellung](#message-composition)
    - [Kostenschätzung](#cost-estimate)
    - [Vorschau der Massennachricht](#bulk-message-preview)
    - [Überwachung des Kampagnenfortschritts](#campaign-progress-monitoring)
    - [Chat für eingehende Nachrichten](#incoming-message-chat)
- [Schlussfolgerung](#closing)

# SMS vs. E-Mail

E-Mail ist tendenziell der De-facto-Kommunikationsmodus für die meisten Geschäftsabläufe. Bis vor kurzem war Textnachrichten (SMS) kein weit verbreiteter Kommunikationskanal für Massen-Geschäftsnachrichten, trotz ihrer Beliebtheit für die tägliche zwischenmenschliche Kommunikation. In den letzten Jahren haben jedoch Cloud-Kommunikationsanbieter wie Twilio den SMS-Kanal für Unternehmen viel zugänglicher gemacht, indem sie die Feinheiten der Telekommunikationsinfrastruktur und der Dienstanbieter im Backend übernehmen und eine einfache SMS-API als Dienstleistung für Kunden bereitstellen. Während E-Mail der beliebteste Kanal für Unternehmen bleiben mag, kann SMS eine einzigartige Ergänzung zu traditionellen E-Mail-Kommunikationen bieten.

<center>
<img src="/images/blog/24-seax-bulk-sms/1-pros-cons.png" alt="Einige Vor- und Nachteile von SMS für die Geschäftskommunikation."/>

*Einige Vor- und Nachteile von SMS für die Geschäftskommunikation.*
</center>

Aber warum überhaupt SMS verwenden, wenn E-Mail sich als erfolgreich erwiesen hat? Wenn wir Marketingkampagnen als Beispiel nehmen, lautet die kurze Antwort: Während die Öffnungsrate für eine E-Mail-Kampagne nur 20% beträgt, kann die durchschnittliche Öffnungsrate für SMS bis zu *98%* betragen – ganz zu schweigen davon, dass Textnachrichten tendenziell mehr Antworten erhalten. Darüber hinaus werden Textnachrichten typischerweise innerhalb von 90 Sekunden nach Erhalt geöffnet, während E-Mails tendenziell erst nach etwa 90 Minuten geöffnet werden. Zu guter Letzt hat SMS eine durchschnittliche Klickrate von etwa 19%, deutlich höher als 3,2% bei E-Mails ([Quelle](https://manychat.com/blog/sms-vs-email-marketing-2021/)).

Im Allgemeinen werden Textnachrichten schneller und häufiger geöffnet als E-Mails – vielleicht, weil Texte immer direkt an den Empfänger geliefert werden, wo immer er sich befindet, ob er WLAN hat oder nicht. Auch weil SMS typischerweise für persönliche Nachrichten und seltener für die Geschäftskommunikation verwendet wird, könnten Empfänger Texte als wichtiger oder substanzieller als E-Mails ansehen.

Warum verwendet dann nicht jeder SMS? Nun, natürlich gibt es Vor- und Nachteile. Natürlich ist SMS deutlich teurer als E-Mail, da es auf Telekommunikationsinfrastruktur und Dienstanbieter (wie Verizon, AT&T usw.) angewiesen ist, um die Nachrichten zu übermitteln. Zusätzlich haben Textnachrichten eine harte Grenze von etwa 900 Zeichen und einen einzigen Anhang (was natürlich extra kostet). Insgesamt ist SMS zwar eine deutlich effektivere Kommunikationsmethode, der Kompromiss besteht jedoch darin, dass Unternehmen bei den Inhalten, die sie senden, wählerischer sein müssen, um kosteneffizient zu sein.

Dennoch gibt es keinen Grund, warum SMS und E-Mail nicht zusammen verwendet werden sollten! Jeder Kanal hat seine eigenen Vor- und Nachteile, sodass ein Unternehmen sicherstellen kann, dass es die effektivste Kommunikation sendet, indem es die Stärken jedes Kanals nutzt.

# 10DLC-Standards

Für A2P-SMS-Nachrichten (Application-to-Person) mit hohem Volumen verwenden US-amerikanische Mobilfunkanbieter standardisierte 10-stellige Langcodes, oder 10DLC. Bevor Sie eine Bulk-SMS-Kampagne starten, empfehlen wir Ihnen, mehr über 10DLC und seine Anwendungen [hier](https://support.twilio.com/hc/en-us/articles/1260800720410-What-is-A2P-10DLC-) zu lesen.

# SeaX Bulk SMS

Der Bulk-SMS-Dienst von SeaX ermöglicht es Ihnen, Ihre Kontakte/Leads einfach hochzuladen, SMS (wir unterstützen auch MMS – Multimedia-Nachrichten) in großen Mengen zu versenden und eingehende Antworten zu verwalten. Lesen Sie weiter, um die wenigen einfachen Schritte zum Start Ihrer ersten Bulk-SMS-Kampagne zu erfahren.

## Kontakt-Upload

<center>
<img src="/images/blog/24-seax-bulk-sms/2-contact-upload.png" alt="Eine Liste von Kontakten in SeaX Bulk SMS hochladen."/>

*Eine Liste von Kontakten in SeaX Bulk SMS hochladen.*
</center>

Der erste Schritt ist das Hochladen von Kontakten und Leads. Organisieren Sie zunächst die Kontakte für Ihre SMS-Kampagne in einer CSV-Datei. Zusätzlich zu den erforderlichen Feldern \`phone_number\` und \`name\` können Sie weitere Felder hinzufügen und diese im Nachrichtentext verwenden. Zum Beispiel können Sie den Nachrichtentext dynamisch ändern, um den Namen des Empfängers basierend auf dem Feld \`name\` für jeden Kontakt einzuschließen.

Öffnen Sie als Nächstes einfach den Bulk-SMS-Dienst unter SeaX und klicken Sie auf „Importieren“, um Ihre Kontakte hochzuladen. Wir speichern alle Ihre vorherigen Kontakte in der Empfängerliste, sodass Sie problemlos Folgekampagnen starten können.

## Nachrichten-Erstellung

<center>
<img src="/images/blog/24-seax-bulk-sms/3-message-draft.png" alt="Eine neue SMS-Nachricht mit SeaX Bulk SMS verfassen."/>

*Eine neue SMS-Nachricht verfassen.*
</center>

Der nächste Schritt ist, Ihrer Kampagne einen Namen zu geben und die Nachricht zu verfassen. Bulk SMS ermöglicht Ihnen den Zugriff auf alle Kontaktinformationen, die in Ihrer CSV-/Excel-Datei gespeichert sind. Wenn Sie beispielsweise ein Feld namens \`name\` in der Kontaktliste haben, können Sie \`{name}\` in die Nachricht eingeben, und die Nachricht wird den Namen für jeden Kontakt im Nachrichtentext automatisch rendern.

## Kostenschätzung

<center>
<img src="/images/blog/24-seax-bulk-sms/4-cost-estimate.png" alt="Die sendenden Telefonnummern auswählen und eine Kostenschätzung für die Kampagne mit SeaX Bulk SMS erhalten."/>

*Die sendenden Telefonnummern auswählen und eine Kostenschätzung für die Kampagne erhalten.*
</center>

Wählen Sie als Nächstes die Telefonnummer aus, die Sie zum Senden der ausgehenden Nachrichten verwenden möchten. Wenn Sie noch keine Telefonnummer haben, können Sie oben rechts auf „Angebot für eine neue Nummer“ klicken, um eine Kaufanfrage zu stellen. Unser Team kann Ihnen beim Kauf neuer 10DLC-Nummern helfen.

Sie können auch den geschätzten Stückpreis für die Kampagne einsehen. Beachten Sie, dass sowohl das Senden als auch das Empfangen von SMS/MMS Geld kostet, stellen Sie also sicher, dass Sie Ihr Budget entsprechend planen.

## Vorschau der Massennachricht

<center>
<img src="/images/blog/24-seax-bulk-sms/5-preview.png" alt="Vorschau einer Bulk-SMS-Kampagne vor dem Versand mit SeaX."/>

*Vorschau einer Bulk-SMS-Kampagne vor dem Versand.*
</center>

Sie können die Massennachrichten vor dem Versand in der Vorschau anzeigen. Es ist wichtig, den Nachrichtentext, die Telefonnummern der Empfänger und die Telefonnummer des Absenders zu bestätigen. Sobald Sie die Kampagne gestartet haben, ist es nicht mehr möglich, die Nachrichten zurückzuziehen. Auf dieser Seite können Sie die ersten 3 Nachrichten Ihrer Kampagne in der Vorschau anzeigen, die den ersten 3 Kontakten aus Ihrer Liste entsprechen.

## Überwachung des Kampagnenfortschritts

<center>
<img src="/images/blog/24-seax-bulk-sms/6-monitor.png" alt="Den Fortschritt einer Bulk-SMS-Kampagne mit SeaX überwachen."/>

*Den Fortschritt einer Bulk-SMS-Kampagne überwachen.*
</center>

Schließlich können Sie sich zurücklehnen und den Kampagnenfortschritt auf dem Bulk-SMS-Dashboard überwachen. Die Seite wird automatisch aktualisiert und zeigt den Kampagnenstatus an. Sie können die Zustellungsstatus der Nachrichten, die Erfolgs-/Zustellungsrate, die geschätzten Kosten sowie die Antwortrate auf dieser Seite einsehen.

## Chat für eingehende Nachrichten

<center>
<img src="/images/blog/24-seax-bulk-sms/7-chat.png" alt="Eingehende Antworten aus einer Bulk-SMS-Kampagne mit SeaX bearbeiten."/>

*Eingehende Antworten aus einer Bulk-SMS-Kampagne bearbeiten.*
</center>

Wie bei allen SeaX-Funktionen bemühen wir uns, Agenten oder Kampagnenmanagern die Möglichkeit zu geben, eingehende Anfragen/Probleme zu bearbeiten – Bulk SMS ermöglicht es SeaX, auch ausgehende Marketingbemühungen zu handhaben. Nachdem Sie die Kampagne gestartet haben, können Sie alle eingehenden Antworten im unten gezeigten Chatfenster verwalten.

# Schlussfolgerung

Vielen Dank, dass Sie sich die Zeit genommen haben, zu lesen, wie das SeaX Bulk SMS System Agenten befähigt, ausgehende Kommunikationen zu senden und gleichzeitig eingehende Nachrichtenanfragen zu bearbeiten. Bleiben Sie dran für den nächsten Teil unserer Blogserie, der einige der Verwaltungs- und Analysetools behandeln wird, die in die SeaX-Plattform integriert sind. Wenn Sie sofort mehr erfahren möchten, füllen Sie unser [Demo-Buchungsformular](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting) aus, um einen ersten Einblick in die SeaX-Plattform zu erhalten.`;export{e as default};

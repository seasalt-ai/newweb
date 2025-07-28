---
title: "Kunden von jedem Kanal an einem Ort zusammenführen mit SeaX Omnichannel-Kommunikation"
metatitle: "Kundenkontakt mit SeaX Omnichannel-Kommunikation vereinheitlichen"
date: 2022-07-15T13:56:54-07:00
author: Kim Dodds 
draft: false
image: images/blog/19-seax-omnichannel-communication/0-thumbnail.png
description: "In diesem Blog konzentrieren wir uns auf eine der Omnichannel-Kommunikationsfunktionen von SeaX, die es ermöglicht, Benutzernachrichten von jedem Kanal auf der SeaX-Plattform anzuzeigen."
weight: 1
tags: ["SeaX"]
canonicalURL: "/blog/seax-omnichannel-communication/"
url: "/blog/seax-omnichannel-communication/"
---

*In unserem vorherigen Blogbeitrag, [Willkommen bei SeaX, einem kollaborativen Cloud-Kontaktcenter](https://seasalt.ai/blog/18-seax-collaborative-cloud-contact-center-introduction/), haben wir unsere kollaborative Cloud-Kommunikations-Kontaktcenter-Lösung SeaX vorgestellt. Während unser erster Blogbeitrag einen umfassenden Überblick über die grundlegenden Funktionen und erweiterten Funktionen von SeaX gab, werden unsere nachfolgenden Beiträge tiefer in einige der einzelnen Funktionen eintauchen, die SeaX auszeichnen. In diesem Beitrag werden wir uns die Omnichannel-Unterstützung von SeaX genauer ansehen und erfahren, wie Anrufe und Nachrichten von verschiedenen Kanälen auf der SeaX-Plattform angezeigt werden.*

# Inhaltsverzeichnis
- [Was ist Omnichannel-Kommunikation?](#what-is-omnichannel-communication)
- [Nachrichtenlebenszyklus](#message-lifecycle)
    - [Kanal](#kanal)
    - [Nachrichten-Routing](#message-routing)
    - [TaskRouter](#taskrouter)
    - [SeaX-Plattform](#seax-platform)
- [Unterstützte Kanäle](#supported-channels)

# Was ist Omnichannel-Kommunikation?

Zunächst: Was bedeutet „Omnichannel“ eigentlich? Vereinfacht ausgedrückt ist „Omni“ ein Präfix, das „alle“ bedeutet, und „Kanäle“ sind die verschiedenen Plattformen, über die Sie mit Ihren Kunden interagieren können. Einfach ausgedrückt bedeutet „Omnichannel-Kommunikation“ die Fähigkeit, über alle verfügbaren Kanäle zu kommunizieren. Und mehr noch: Omnichannel-Kommunikation bedeutet, dass die Erfahrung zwischen den Kanälen nahtlos ist. Auf Agentenseite werden die Kommunikationen von allen Kanälen in einer einheitlichen Oberfläche dargestellt. Für den Kunden bleiben seine Interaktionsdaten über alle Kanäle hinweg erhalten.

Ein traditionelles Callcenter unterstützt typischerweise nur Telefonanrufe. Fortgeschrittenere Kontaktcenter, die mit Kunden über mehrere Kanäle (wie E-Mail, Webchat und Telefon) in Verbindung treten, verfügen über ein Multichannel-Kontaktcenter. Doch nur weil ein Kontaktcenter mehrere Kanäle nutzt, bedeutet das nicht, dass ihre Erfahrung nahtlos ist. In Multichannel-Kontaktcentern können die verschiedenen Kanäle über einzelne Plattformen zugänglich sein und/oder die Kundendaten sind möglicherweise nicht über die Kanäle hinweg verknüpft. Im Gegensatz dazu ermöglicht das Omnichannel-Kontaktcenter den Agenten, einer Kundenkonversation überallhin zu folgen, ohne an einen Kanal gebunden oder auf Dutzende von Plattformen verteilt zu sein.

<center>
<img src="/images/blog/19-seax-omnichannel-communication/1-contact-center-comparison.png" alt="Funktionsvergleich: traditionelles Callcenter vs. Kontaktcenter; Multichannel vs. Omnichannel."/>

*Funktionsvergleich: traditionelles Callcenter vs. Kontaktcenter; Multichannel vs. Omnichannel.*
</center>

SeaX kann mit praktisch jedem Kanal integriert werden, standardmäßig inklusive: Text, Telefon, Webchat, Facebook und mehr. Alle Nachrichten und Anrufe werden auf einer einheitlichen Plattform angezeigt, und Benutzerdaten von allen Kanälen sind leicht verfügbar.

Wenn Sie direkt zu einer Demo gelangen möchten, sehen Sie sich unser kurzes Video an, das die Omnichannel-Kommunikation von SeaX demonstriert. Im Rest dieses Blogs werden wir erläutern, wie Nachrichten und Anrufe von verschiedenen Kanälen an Agenten in SeaX weitergeleitet werden. Wir werden auch die standardmäßig unterstützten Kanäle vorstellen und diskutieren, wie SeaX erweitert werden kann, um neue Kanäle abzudecken.

<iframe width="85%" height="450px" src="https://www.youtube.com/embed/usb-RK7sHlA" title="YouTube-Videoplayer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

# Nachrichtenlebenszyklus

SeaX basiert auf [Twilio Flex](https://www.twilio.com/flex), einem Cloud-basierten Kontaktcenter, das die Cloud-Kommunikationsplattform von Twilio nutzt. Twilio stellt die grundlegenden Bausteine für SeaX bereit, wie z. B. Telekommunikationsinfrastruktur, Nachrichten- und Aufgabenrouting sowie eine grundlegende Kontaktcenter-Benutzeroberfläche. Lassen Sie uns nun den Lebenszyklus einer eingehenden Benutzernachricht verfolgen und sehen, wie SeaX die grundlegende Twilio-Architektur in Kombination mit benutzerdefinierten Komponenten verwendet, um die Nachricht an den Live-Agenten auf der SeaX-Plattform weiterzuleiten.

## Kanal

<center>
<img src="/images/blog/19-seax-omnichannel-communication/2-example-message.jpg" alt="Benutzer sendet eine Nachricht an ein Unternehmen über Google Business Messages.", style="width:50%"/>

*Senden einer Nachricht an ein Unternehmen über Google Business Messages.*
</center>

Die Reise einer Nachricht beginnt damit, dass der Benutzer die Nachricht schreibt und auf einer unterstützten Plattform sendet. Das obige Beispiel zeigt, wie jemand eine Nachricht an den Seasalt.ai-Chatbot in Google Business Messages sendet. Google Business Messages wird von Twilio standardmäßig nicht unterstützt, daher verwenden wir einen benutzerdefinierten Kanal-Konnektor, der von Seasalt.ai entwickelt wurde, um die Google-Plattform mit Twilio und SeaX zu verbinden.

Sobald die Nachricht gesendet wurde, wird sie vom benutzerdefinierten Konnektor an die Twilio Messaging API übermittelt. Zu diesem Zeitpunkt erstellt Twilio einen neuen Konversationskontext für den Benutzer und bereitet das Routing der Nachricht vor.

## Nachrichten-Routing

<center>
<img src="/images/blog/19-seax-omnichannel-communication/3-studio-flow.png" alt="Ein einfacher Studio Flow, der Nachrichten an einen Chatbot oder einen Live-Agenten weiterleitet."/>

*Ein einfacher Studio Flow, der Nachrichten an einen Chatbot oder einen Live-Agenten weiterleitet.*
</center>

Sobald die Nachricht von Twilio empfangen wurde, muss sie an den richtigen Ort weitergeleitet werden. Zu diesem Zweck verwenden wir [Twilio Studio Flows](https://www.twilio.com/studio), um zu bestimmen, ob eine automatische Antwort gegeben, die Nachricht an einen Chatbot weitergeleitet, der Benutzer mit einem Live-Agenten verbunden oder eine andere Aktion ausgeführt werden soll.

Im einfachen Beispiel oben werden alle eingehenden Nachrichten an einen Chatbot weitergeleitet, es sei denn, sie enthalten die Wörter „Live-Agent“, in diesem Fall wird der Benutzer an einen Live-Agenten auf der SeaX-Plattform weitergeleitet.

## TaskRouter

<center>
<img src="/images/blog/19-seax-omnichannel-communication/4-taskrouter.png" alt="Diagramm der TaskRouter-Architektur."/>

*Diagramm der TaskRouter-Architektur. [Quelle](https://twilio-cms-prod.s3.amazonaws.com/images/taskrouter-diagram.width-800.png).*
</center>

Sobald eine Nachricht an SeaX übertragen wurde, besteht der nächste Schritt darin, zu entscheiden, welcher Agent sie empfangen wird. [Twilio’s TaskRouter](https://www.twilio.com/taskrouter) verteilt Aufgaben wie Nachrichten und Telefonanrufe an die Agenten in SeaX, die sie am besten bearbeiten können. Jedem Agenten in SeaX können Fähigkeiten zugewiesen werden, z. B. welche Sprachen er spricht, in welcher Abteilung er arbeitet, ob er VIP-Kunden betreuen soll usw. Der TaskRouter überprüft die bekannten Informationen über den Benutzer und die Nachricht und wählt dann den am besten geeigneten Mitarbeiter aus, um das Problem zu bearbeiten. Der Studio Flow aus dem vorherigen Schritt kann angepasst werden, um zusätzliche Informationen (wie die bevorzugte Sprache) zu erhalten, und Kundeninformationen können über Konversationen und Kanäle hinweg beibehalten werden, um ein nahtloses Erlebnis zu gewährleisten.

## SeaX-Plattform

<center>
<img src="/images/blog/19-seax-omnichannel-communication/5-seax-incoming-messages.png" alt="Eingehende Anrufe und Nachrichten, die auf der SeaX-Plattform angezeigt werden.", style="width:50%"/>

*Eingehende Anrufe und Nachrichten, die auf der SeaX-Plattform angezeigt werden.*
</center>

Schließlich wird die eingehende Nachricht dem entsprechenden Agenten auf der SeaX-Plattform angezeigt. Agenten können mehrere Aufgaben von mehreren Kanälen gleichzeitig bearbeiten. Im obigen Bild hat ein Agent einen eingehenden Anruf, eine Facebook-Nachricht und eine Webchat-Nachricht. Der Agent kann die Aufgabe annehmen oder ablehnen, um sie an den nächsten verfügbaren Agenten weiterzuleiten.

# Unterstützte Kanäle

Hoffentlich ist nun klarer, was Omnichannel-Kommunikation ist und wie sie das Benutzer- und Agentenerlebnis verbessert. Die letzte Frage ist: Welche Kanäle werden eigentlich standardmäßig unterstützt?

<center>
<img src="/images/blog/19-seax-omnichannel-communication/6-channel-comparison.png" alt="Vergleich der unterstützten Kanäle zwischen traditionellem Callcenter, grundlegendem Twilio Flex und SeaX."/>

*Vergleich der unterstützten Kanäle zwischen traditionellem Callcenter, grundlegendem Twilio Flex und SeaX.*
</center>

Wie bereits erwähnt, unterstützt ein traditionelles Callcenter typischerweise nur Telefonanrufe. Unternehmen können weiterhin mit Kunden in sozialen Medien oder per E-Mail interagieren, aber diese Nachrichten sind nicht in eine einheitliche Plattform integriert.

Twilio Flex hingegen legt den Grundstein für ein fantastisches Omnichannel-Kontaktcenter. Es verfügt jedoch über wenige Kanäle, die standardmäßig verfügbar sind. Neben Telefonanrufen und Textnachrichten bieten sie auch Beta-Unterstützung für Facebook, WhatsApp und E-Mail.

SeaX baut auf Flex auf, um die integrierte Unterstützung für einige der am häufigsten angefragten Kanäle hinzuzufügen: wie Google Business Messages, Discord, Line und Instagram. Darüber hinaus arbeitet Seasalt.ai ständig mit Kunden zusammen, um neue Kanäle in das SeaX-Angebot aufzunehmen. SeaX ist hochgradig anpassbar und leicht erweiterbar – das bedeutet, dass wir mit Ihrem Unternehmen zusammenarbeiten können, um alle Kanäle zu integrieren, die Sie am meisten wünschen.

Vielen Dank, dass Sie sich die Zeit genommen haben, um zu erfahren, wie das SeaX Cloud-Kontaktcenter Omnichannel-Kommunikation nutzt, um ein nahtloses Kunden- und Agentenerlebnis zu bieten. Bleiben Sie dran für unseren nächsten Blogbeitrag, der untersuchen wird, was es bedeutet, ein „verteiltes Kontaktcenter“ zu sein. Wenn Sie sofort mehr erfahren möchten, füllen Sie unser [Demo-Buchungsformular](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting) aus, um einen ersten Einblick in die SeaX-Plattform zu erhalten.

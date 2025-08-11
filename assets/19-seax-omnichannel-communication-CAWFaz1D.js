const e=`---
title: "Bringen Sie Kunden von jedem Kanal an einem Ort mit SeaX Omnichannel Communication"
metatitle: "Vereinheitlichen Sie Kundenkontaktpunkte mit SeaX Omnichannel Communication"
date: 2022-07-15 13:56:54-07:00
modified_date: 2025-08-02 17:00:00-07:00
draft: false
author: Kim Dodds
description: "In diesem Blogbeitrag stellen wir eine der Omnichannel-Kommunikationen von SeaX vor, die es ermöglicht, dass Benutzernachrichten von jedem Kanal auf der SeaX-Plattform angezeigt werden."
weight: 1
tags:
  - SeaX
image: images/blog/19-seax-omnichannel-communication/0-thumbnail.png
canonicalURL: /blog/seax-omnichannel-communication/
url: /blog/seax-omnichannel-communication/
---

*In unserem vorherigen Blogbeitrag [Willkommen bei SeaX, einem kollaborativen Cloud-Kontaktzentrum](https://seasalt.ai/blog/18-seax-collaborative-cloud-contact-center-introduction/) haben wir SeaX, unsere kollaborative Cloud-Kommunikations-Kontaktzentrumslösung, vorgestellt. Während unser erster Blogbeitrag einen umfassenden Überblick über die grundlegenden und fortgeschritteneren Funktionen von SeaX gab, werden unsere nachfolgenden Beiträge tiefer in einige der einzelnen Funktionen eintauchen, die SeaX auszeichnen. In diesem Beitrag werfen wir einen genaueren Blick auf die Omnichannel-Unterstützung von SeaX und sehen, wie Anrufe und Nachrichten von verschiedenen Kanälen auf der SeaX-Plattform angezeigt werden.*

# Inhaltsverzeichnis
- [Was ist Omnichannel-Kommunikation?](#what-is-omnichannel-communication)
- [Nachrichtenlebenszyklus](#message-lifecycle)
    - [Kanal](#channel)
    - [Nachrichtenweiterleitung](#message-routing)
    - [TaskRouter](#taskrouter)
    - [SeaX-Plattform](#seax-platform)
- [Unterstützte Kanäle](#supported-channels)

# Was ist Omnichannel-Kommunikation?

Zunächst einmal, was bedeutet "Omnichannel" eigentlich? Aufgeschlüsselt ist "omni" ein Präfix, das "alle" bedeutet, und "Kanal" sind die verschiedenen Plattformen, auf denen Sie mit Ihren Kunden interagieren können. Einfach ausgedrückt bedeutet "Omnichannel-Kommunikation" also die Möglichkeit, über alle verfügbaren Kanäle zu kommunizieren. Darüber hinaus bedeutet Omnichannel-Kommunikation auch, dass die Erfahrung zwischen den Kanälen nahtlos ist. Auf der Agentenseite werden Kommunikationen von allen Kanälen in einer einheitlichen Oberfläche dargestellt. Für den Kunden sind seine Interaktionsdaten über die Kanäle hinweg persistent.

Traditionelle Callcenter unterstützen oft nur Telefonanrufe. Fortgeschrittenere Kontaktzentren, die Kunden über mehrere Kanäle wie E-Mail, Web-Chat und Telefon erreichen, verfügen über ein Multichannel-Kontaktzentrum. Nur weil ein Kontaktzentrum mehrere Kanäle nutzt, bedeutet das jedoch nicht, dass ihre Erfahrung nahtlos ist. In einem Multichannel-Kontaktzentrum können verschiedene Kanäle über separate Plattformen aufgerufen werden und/oder Kundendaten sind möglicherweise nicht über Kanäle hinweg verknüpft. Im Gegensatz dazu ermöglicht ein Omnichannel-Kontaktzentrum den Agenten, Kundengespräche zu verfolgen, wohin sie auch gehen, ohne an einen Kanal gebunden oder auf ein Dutzend Plattformen verteilt zu sein.

<center>
<img src="/images/blog/19-seax-omnichannel-communication/1-contact-center-comparison.png" alt="Funktionsvergleich: traditionelles Callcenter vs. Kontaktzentrum; Multichannel vs. Omnichannel."/>

*Funktionsvergleich: traditionelles Callcenter vs. Kontaktzentrum; Multichannel vs. Omnichannel.*
</center>

SeaX ist in der Lage, sich in praktisch jeden Kanal zu integrieren, einschließlich standardmäßig: Text, Telefon, Web-Chat, Facebook und mehr. Alle Nachrichten und Anrufe werden auf einer einheitlichen Plattform angezeigt, und Benutzerdaten von allen Kanälen sind sofort verfügbar.

Wenn Sie direkt zur Demo springen möchten, sehen Sie sich unser kurzes Video an, in dem wir die Omnichannel-Kommunikation von SeaX demonstrieren. Im weiteren Verlauf dieses Blogbeitrags werden wir Schritt für Schritt erläutern, wie Nachrichten und Anrufe von verschiedenen Kanälen an einen Agenten in SeaX weitergeleitet werden. Wir werden auch die sofort einsatzbereiten unterstützten Kanäle vorstellen und diskutieren, wie SeaX erweitert werden kann, um neue Kanäle abzudecken.

<iframe width="85%" height="450px" src="https://www.youtube.com/embed/usb-RK7sHlA" title="YouTube-Videoplayer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

# Nachrichtenlebenszyklus

SeaX basiert auf [Twilio Flex](https://www.twilio.com/flex), einem cloudbasierten Kontaktzentrum, das die Cloud-Kommunikationsplattform von Twilio nutzt. Twilio stellt die grundlegenden Bausteine für SeaX bereit, wie z. B. Telekommunikationsinfrastruktur, Nachrichten- und Aufgabenweiterleitung und eine grundlegende Kontaktzentrum-Benutzeroberfläche. Verfolgen wir nun den Lebenszyklus einer eingehenden Benutzernachricht und sehen wir, wie SeaX die grundlegende Twilio-Architektur in Kombination mit benutzerdefinierten Komponenten verwendet, um die Nachricht an einen Live-Agenten auf der SeaX-Plattform weiterzuleiten.

## Kanal

<center>
<img src="/images/blog/19-seax-omnichannel-communication/2-example-message.jpg" alt="Ein Benutzer sendet eine Nachricht an ein Unternehmen über Google Business Messages." style="width:50%"/>

*Senden einer Nachricht an ein Unternehmen über Google Business Messages.*
</center>

Die Reise einer Nachricht beginnt damit, dass ein Benutzer eine Nachricht auf einer unterstützten Plattform verfasst und sendet. Das obige Beispiel zeigt, wie jemand eine Nachricht an einen Seasalt.ai-Chatbot in Google Business Messages sendet. Standardmäßig unterstützt Twilio Google Business Messages nicht, daher verwenden wir einen von Seasalt.ai entwickelten benutzerdefinierten Kanal-Connector, um die Google-Plattform mit Twilio und SeaX zu verbinden.

Sobald die Nachricht gesendet wurde, wird sie vom benutzerdefinierten Connector an die Twilio Messaging API übergeben. An diesem Punkt erstellt Twilio einen neuen Konversationskontext für den Benutzer und bereitet die Weiterleitung der Nachricht vor.

## Nachrichtenweiterleitung

<center>
<img src="/images/blog/19-seax-omnichannel-communication/3-studio-flow.png" alt="Ein einfacher Studio Flow, der Nachrichten an einen Chatbot oder einen Live-Agenten weiterleitet."/>

*Ein einfacher Studio Flow, der Nachrichten an einen Chatbot oder einen Live-Agenten weiterleitet.*
</center>

Sobald die Nachricht von Twilio empfangen wurde, muss sie an den richtigen Ort weitergeleitet werden. Dazu verwenden wir [Twilio Studio Flows](https://www.twilio.com/studio), um zu bestimmen, ob eine automatische Antwort gegeben, die Nachricht an einen Chatbot weitergeleitet, der Benutzer mit einem Live-Agenten verbunden oder eine andere Aktion ausgeführt werden soll.

In dem oben gezeigten einfachen Beispiel werden alle eingehenden Nachrichten an einen Chatbot weitergeleitet, es sei denn, sie enthalten den Ausdruck "Live-Agent". In diesem Fall wird der Benutzer an einen Live-Agenten auf der SeaX-Plattform weitergeleitet.

## TaskRouter

<center>
<img src="/images/blog/19-seax-omnichannel-communication/4-taskrouter.png" alt="TaskRouter-Architekturdiagramm."/>

*TaskRouter-Architekturdiagramm. [Quelle](https://twilio-cms-prod.s3.amazonaws.com/images/taskrouter-diagram.width-800.png).*
</center>

Nachdem die Nachricht an SeaX übergeben wurde, besteht der nächste Schritt darin, zu entscheiden, welcher Agent sie erhalten soll. [Twilios TaskRouter](https://www.twilio.com/taskrouter) weist Aufgaben wie Nachrichten und Telefonanrufe dem Agenten in SeaX zu, der am besten für deren Bearbeitung gerüstet ist. Jedem Agenten in SeaX können Fähigkeiten zugewiesen werden, z. B. welche Sprachen er spricht, in welcher Abteilung er arbeitet, ob er VIP-Kunden betreuen soll usw. TaskRouter prüft die bekannten Informationen über den Benutzer und die Nachricht und wählt dann den am besten geeigneten Mitarbeiter für die Bearbeitung des Problems aus. Der Studio Flow aus dem vorherigen Schritt kann angepasst werden, um zusätzliche Informationen (z. B. die bevorzugte Sprache) zu erhalten, und Kundeninformationen können über Gespräche und Kanäle hinweg beibehalten werden, um sicherzustellen, dass ihre Erfahrung nahtlos ist.

## SeaX-Plattform

<center>
<img src="/images/blog/19-seax-omnichannel-communication/5-seax-incoming-messages.png" alt="Eingehende Anrufe und Nachrichten werden auf der SeaX-Plattform angezeigt." style="width:50%"/>

*Eingehende Anrufe und Nachrichten werden auf der SeaX-Plattform angezeigt.*
</center>

Schließlich wird die eingehende Nachricht dem entsprechenden Agenten auf der SeaX-Plattform angezeigt. Agenten können mehrere Aufgaben von mehreren Kanälen gleichzeitig bearbeiten. Im Bild oben hat ein Agent einen eingehenden Anruf, eine Facebook-Nachricht und eine Web-Chat-Nachricht. Der Agent kann die Aufgabe annehmen oder ablehnen, um sie an den nächsten verfügbaren Agenten weiterzuleiten.

# Unterstützte Kanäle

Hoffentlich ist jetzt klarer, was Omnichannel-Kommunikation ist und wie sie sowohl die Benutzer- als auch die Agentenerfahrung verbessert. Die letzte Frage lautet: Welche Kanäle werden standardmäßig unterstützt?

<center>
<img src="/images/blog/19-seax-omnichannel-communication/6-channel-comparison.png" alt="Vergleich der unterstützten Kanäle zwischen einem traditionellen Callcenter, dem einfachen Twilio Flex und SeaX."/>

*Vergleich der unterstützten Kanäle zwischen einem traditionellen Callcenter, dem einfachen Twilio Flex und SeaX.*
</center>

Wie bereits erwähnt, unterstützen herkömmliche Callcenter oft nur Telefonanrufe. Unternehmen interagieren möglicherweise immer noch mit Kunden über soziale Medien oder E-Mail, aber diese Nachrichten sind nicht in eine einheitliche Plattform integriert.

Twilio Flex hingegen legt den Grundstein für ein hervorragendes Omnichannel-Kontaktzentrum. Es verfügt jedoch nur über wenige sofort einsatzbereite Kanäle. Neben Telefonanrufen und SMS bieten sie Beta-Unterstützung für Facebook, WhatsApp und E-Mail.

SeaX baut auf Flex auf und fügt integrierte Unterstützung für einige der am häufigsten nachgefragten Kanäle hinzu: wie Google Business Messages, Discord, Line und Instagram. Darüber hinaus arbeitet Seasalt.ai ständig mit Kunden zusammen, um neue Kanäle in die SeaX-Produktlinie aufzunehmen. SeaX ist in hohem Maße anpassbar und leicht erweiterbar – das bedeutet, dass wir mit Ihrem Unternehmen zusammenarbeiten können, um jeden Kanal zu integrieren, den Sie sich am meisten wünschen.

Danke, dass Sie sich die Zeit genommen haben, zu lesen, wie das SeaX Cloud Contact Center die Omnichannel-Kommunikation nutzt, um eine nahtlose Kunden- und Agentenerfahrung zu bieten. Bleiben Sie dran für unseren nächsten Blogbeitrag, in dem wir untersuchen, was es bedeutet, ein "verteiltes Kontaktzentrum" zu sein. Wenn Sie jetzt mehr erfahren möchten, füllen Sie unser [Demo-Anforderungsformular](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting) aus, um die SeaX-Plattform aus erster Hand zu erleben.`;export{e as default};

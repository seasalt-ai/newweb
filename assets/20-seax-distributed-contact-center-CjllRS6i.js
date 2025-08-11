const e=`---
title: "Erweitern Sie Ihren Contact Center-Footprint mit einem Distributed Contact Center"
metatitle: "Erweitern Sie Ihren Footprint mit einem Distributed Contact Center"
date: 2022-07-27 21:46:45+00:00
modified_date: 2025-07-28T16:56:53Z
draft: false
author: Sarah Reid
description: "In diesem Blog werden wir uns mit 'verteilten' Contact Centern befassen: Was sie sind, wie sie Ihnen nützen können und wie SeaX dies nutzt, um unsere Kunden besser zu bedienen."
weight: 1
tags:
  - SeaX
image: images/blog/20-seax-distributed-contact-center/0-main.png
canonicalURL: /blog/seax-distributed-contact-center/
url: /blog/seax-distributed-contact-center/
---

*In unserem vorherigen Blogbeitrag, [Kunden von jedem Kanal an einem Ort zusammenführen mit SeaX Omnichannel Communication](https://seasalt.ai/blog/19-seax-omnichannel-communication/), haben wir die Leistungsfähigkeit der Omnichannel-Kommunikation auf der SeaX-Plattform gezeigt, die es ermöglicht, Benutzernachrichten von praktisch jedem Kanal auf der SeaX-Plattform anzuzeigen. In diesem Beitrag werden wir uns mit "verteilten" Contact Centern befassen: Was sie sind, wie sie Ihnen nützen können und wie SeaX eine verteilte Plattform nutzt, um unsere Kunden besser zu bedienen.*

# Inhaltsverzeichnis
- [Was ist ein „verteiltes“ Contact Center?](#what-is-a-distributed-contact-center)
- [Welche Vorteile hat ein „verteiltes“ Contact Center?](#what-benefits-does-a-distributed-contact-center-have)
- [Welche Herausforderungen hat ein „verteiltes“ Contact Center?](#what-challenges-does-a-distributed-contact-center-have)
- [Wie löst SeaX diese Probleme?](#how-does-seax-solve-these-issues)
    - [Anrufe an verteilte Standorte und Agenten weiterleiten](#routing-calls-to-distributed-locations-and-agents)
    - [Verfügbarkeit verteilter Standorte konfigurieren](#configuring-distributed-location-availability)
    - [Nachrichten für verteilte Standorte anpassen](#customize-distributed-location-messaging)

# Was ist ein „verteiltes“ Contact Center?
Auf der einfachsten Ebene ist ein verteiltes Contact Center ein Contact Center, das an mehr als einem Standort existiert, im Gegensatz zum traditionellen Contact Center mit einem Standort. Dies könnte ein Contact Center mit mehreren Büros oder mehreren Standorten in verschiedenen Ländern sein, oder sogar ein Contact Center ohne physischen Standort, in dem alle Agenten remote arbeiten. Verteilte Contact Center müssen jedoch weiterhin wie traditionelle Contact Center mit einem Standort funktionieren und allen Beteiligten ein nahtloses Erlebnis bieten. Für die Agenten bedeutet dies, auf einer Plattform unterstützt zu werden, egal wo sie sich befinden. Für den Kunden bedeutet dies, basierend auf seinen Bedürfnissen korrekt mit dem entsprechenden Standort und Agenten verbunden zu werden.

# Welche Vorteile hat ein „verteiltes“ Contact Center?
Verteilte Contact Center haben eine Reihe von Vorteilen gegenüber traditionellen Contact Centern, insbesondere in Bezug auf ihre Reichweite und Abdeckung. Agenten in mehreren Zeitzonen stellen sicher, dass Kunden Sie jederzeit erreichen können, wenn sie Hilfe benötigen. Bei traditionellen Contact Centern sind Kunden auf Anrufe während einer festgelegten Öffnungszeit beschränkt, was es ihnen erschwert, mit Ihrem Unternehmen in Kontakt zu treten. Agenten an verschiedenen Standorten geben Ihrem Unternehmen auch mehr Möglichkeiten, Mitarbeiter mit vielfältigen Fähigkeiten und Spezialgebieten einzustellen, z. B. Agenten, die eine größere Bandbreite an Sprachen abdecken. Traditionelle Contact Center an einem Standort sind darauf beschränkt, Agenten an diesem Standort einzustellen, was das Risiko birgt, keinen Agenten mit den benötigten Fähigkeiten zu finden. Schließlich ermöglicht die weitreichende Präsenz von Agenten näher an mehr Kunden den Agenten ein tieferes Verständnis für spezielle Regeln und Vorschriften in diesem Bereich. In einem traditionellen Contact Center an einem Standort kennen Agenten möglicherweise keine spezifischen Details über etwas wie den Versand in einem Land auf der anderen Seite der Welt, was die Unterstützung von Kunden erschwert.


# Welche Herausforderungen hat ein „verteiltes“ Contact Center?
Obwohl die verteilte Natur dieser Contact Center viele Vorteile für Ihr Unternehmen hat, gibt es auch einige Herausforderungen. Agenten in mehreren Zeitzonen ermöglichen eine einfache Kommunikation mit Kunden zu jeder Zeit, bedeutet aber auch, dass Anrufe korrekt weitergeleitet werden müssen, damit ein Kunde nicht an einen derzeit geschlossenen Standort oder einen Agenten, der nicht im Dienst ist, weitergeleitet wird. Es ist auch wichtig, Kunden an Agenten zu senden, die die vom Kunden gewünschte Sprache sprechen und über die richtige Schulung verfügen, um ihr Problem zu lösen. Bei der großen Anzahl von Agenten an verschiedenen Standorten mit unterschiedlichen Fähigkeiten kann diese Weiterleitungsaufgabe schnell kompliziert werden.

<center>
<img src="/images/blog/20-seax-distributed-contact-center/1-feature-comparison.png" alt="Funktionsvergleich: traditionelles Callcenter vs. verteiltes Contact Center vs. SeaX."/>

*Funktionsvergleich: traditionelles Callcenter vs. verteiltes Contact Center vs. SeaX.*
</center>

# Wie löst SeaX diese Probleme?

## Anrufe an verteilte Standorte und Agenten weiterleiten
SeaX ist eine kollaborative Contact Center-Lösung, die Cloud-nativ und verteilt ist. Sie basiert auf [Twilio Flex](https://www.twilio.com/flex), das die Cloud-Kommunikationsplattform von Twilio nutzt. Twilio bietet die grundlegenden Bausteine für SeaX, wie Telekommunikationsinfrastruktur, Nachrichten- und Aufgabenrouting und eine grundlegende Contact Center-Benutzeroberfläche. Innerhalb von SeaX können Sie mehrere Telefonnummern für Ihre verschiedenen Standorte konfigurieren, sodass Sie für jeden Bereich, in dem Ihr Contact Center tätig ist, die entsprechenden Länder- und Ortsvorwahlen haben. Sie können Ihre Einstellungen daher nach Standort konfigurieren, um sicherzustellen, dass jeder Standort korrekt funktioniert und die richtigen Anrufe erhält, während alle Ihre Agenten auf derselben Plattform bedient werden.

Der [Twilio TaskRouter](https://www.twilio.com/taskrouter) weist Anrufe und Nachrichten Agenten basierend auf den Anruf- und Agentenattributen zu.

<center>
<img src="/images/blog/20-seax-distributed-contact-center/2-taskrouter.png" alt="Diagramm der TaskRouter-Architektur."/>

*Diagramm der TaskRouter-Architektur. [Quelle](https://twilio-cms-prod.s3.amazonaws.com/images/taskrouter-diagram.width-800.png).*
</center>

Es ermöglicht Ihnen auch die Verwendung von Skill-basiertem Routing, wodurch Sie eine feingranulare Kontrolle darüber erhalten, welche Agenten und Standorte welche Anrufe erhalten. Sie können nicht nur festlegen, welche Fähigkeiten Ihre Agenten haben, z. B. den Grad ihrer Verkaufsschulung, sondern auch Dinge wie die Sprachen, die sie sprechen, auflisten, um sicherzustellen, dass sie nur Anrufe erhalten, die sie bearbeiten können. Darüber hinaus können Sie dieses Routing verwenden, um bestimmten Agenten bestimmte Telefonnummern zuzuweisen, wodurch jeder Agent an einen bestimmten Standort Ihres Contact Centers gebunden wird, auch wenn er sich nicht physisch dort befindet. Agenten erhalten nur Anrufe, die an ihren zugewiesenen Standort weitergeleitet werden, wodurch sichergestellt wird, dass die Anrufe Ihrer Kunden immer an die richtige Person weitergeleitet werden.

<center>
<img src="/images/blog/20-seax-distributed-contact-center/3-skills.png" alt="In TaskRouter definierte Fähigkeiten zum Weiterleiten eingehender Anrufe und Nachrichten."/>

*In TaskRouter definierte Fähigkeiten zum Weiterleiten eingehender Anrufe und Nachrichten.*
</center>

## Verfügbarkeit verteilter Standorte konfigurieren
In SeaX können Sie auch Ihre Öffnungszeiten und Feiertage nach Telefonnummer konfigurieren. Mit diesem Tool können Sie unabhängig steuern, wann jeder Ihrer Standorte geöffnet ist, was Ihnen volle Flexibilität hinsichtlich der Erreichbarkeit jedes Ihrer Standorte gibt. Im Wesentlichen kann jeder Ihrer Standorte wie ein traditionelles Callcenter funktionieren, mit festgelegten Öffnungszeiten und an lokalen Feiertagen geschlossen, während er weiterhin von einer gemeinsamen Plattform für Ihre Agenten konfiguriert und verbunden ist.

<center>
<img src="/images/blog/20-seax-distributed-contact-center/4-open-hours.png" alt="Öffnungszeiten für zwei verschiedene Telefonnummern in zwei verschiedenen Zeitzonen auf derselben SeaX-Instanz."/>
</center>

<center>
<img src="/images/blog/20-seax-distributed-contact-center/5-open-hours.png" alt="Öffnungszeiten für zwei verschiedene Telefonnummern in zwei verschiedenen Zeitzonen auf derselben SeaX-Instanz."/>

*Öffnungszeiten für zwei verschiedene Telefonnummern in zwei verschiedenen Zeitzonen auf derselben SeaX-Instanz.*
</center>

## Nachrichten für verteilte Standorte anpassen
SeaX ermöglicht auch kundenunabhängige Nachrichten nach Telefonnummer. Die Nachrichten bei Nichtverfügbarkeit werden Kunden automatisch vorgespielt, wenn niemand verfügbar ist, um ihren Anruf entgegenzunehmen. Mit der Möglichkeit, diese Nachricht nach Telefonnummer anzupassen, können Sie Nachrichten in verschiedenen Sprachen oder mit unterschiedlichen Informationen haben, je nachdem, was für Kunden, die diesen Standort anrufen, am wichtigsten ist.

<center>
<img src="/images/blog/20-seax-distributed-contact-center/6-unavailable-message.png" alt="Nachricht bei Nichtverfügbarkeit für eine bestimmte Telefonnummer auf der SeaX-Plattform."/>

*Nachricht bei Nichtverfügbarkeit für eine bestimmte Telefonnummer auf der SeaX-Plattform.*
</center>

Ein traditionelles Contact Center an einem Standort kann nur den Bereich um sich herum effektiv bedienen, obwohl es naturgemäß auf einer Plattform basiert. Ein verteiltes Contact Center erweitert die Kundenbasis, die es mit Agenten an mehreren Standorten bedienen kann, erheblich, hat aber einige Herausforderungen bei der Integration aller Dienste, die seine Agenten benötigen, unabhängig davon, wo sie sich befinden. Mit SeaX können Sie jeden Teil Ihrer Kundenbasis erreichen und gleichzeitig alle Ihre Agenten auf einer einfachen Plattform bedienen.

Vielen Dank, dass Sie sich die Zeit genommen haben, um zu erfahren, wie das SeaX Cloud Contact Center Ihr verteiltes Contact Center auf einer Plattform unterstützt. Bleiben Sie dran für unseren nächsten Blogbeitrag, der sich mit unseren hauseigenen Text-to-Speech- und Speech-to-Text-Technologien befasst und wie diese Ihr Contact Center verbessern können. Wenn Sie sofort mehr erfahren möchten, füllen Sie unser Formular „[Demo buchen](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting)“ aus, um einen ersten Einblick in die SeaX-Plattform zu erhalten.
`;export{e as default};

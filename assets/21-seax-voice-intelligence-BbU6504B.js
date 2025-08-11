const e=`---
title: "Verleihen Sie Ihrem Contact Center eine eigene Stimme mit SeaX Voice Intelligence"
metatitle: "Lassen Sie Ihr Contact Center mit SeaX Voice Intelligence sprechen"
date: 2022-08-02 17:24:00-07:00
modified_date: 2025-07-29 20:45:17+00:00
draft: false
author: Kim Dodds, Cody Kim, Xuchen Yao, Guoguo Chen
description: "In diesem Blog zeigen wir, wie die hauseigenen Text-to-Speech- und Speech-to-Text-Engines von Seasalt.ai verschiedene Aspekte der SeaX-Plattform verbessern können."
weight: 1
tags:
  - SeaX
image: /images/blog/21-seax-voice-intelligence/thumbnail.png
canonicalURL: /blog/seax-voice-intelligence/
url: /blog/seax-voice-intelligence/
---

*Bisher haben wir Ihnen in unserer [SeaX-Blogserie](https://seasalt.ai/tags/seax/) einen umfassenden Überblick über das Flaggschiffprodukt von Seasalt.ai gegeben: SeaX. Wir haben auch zwei Hauptmerkmale besprochen, die SeaX von einem herkömmlichen Callcenter unterscheiden: Erstens ist SeaX Omnichannel, was bedeutet, dass Sie einfacher mit Kunden auf jedem Kanal interagieren können, und zweitens ist die Plattform ein verteiltes Contact Center, das es Ihnen ermöglicht, Nachrichten und Anrufe von Kunden auf der ganzen Welt nahtlos an Ihre verteilten Agenten an verschiedenen Standorten weiterzuleiten.*

*Nachdem wir die Grundlagen der SeaX-Plattform behandelt haben, werden wir uns nun den fortschrittlichen KI- und Automatisierungsfunktionen zuwenden, die SeaX von anderen verteilten Omnichannel-Contact Centern unterscheiden. In diesem Blog zeigen wir, wie die hauseigenen Text-to-Speech- und Speech-to-Text-Engines von Seasalt.ai verschiedene Aspekte der SeaX-Plattform verbessern können.*

# Inhaltsverzeichnis
- [Einführung in die Sprachintelligenz](#into-to-voice-intelligence)
- [Was Seasalt.ai auszeichnet](#what-sets-seasaltai-apart)
    - [Sprache-zu-Text](#speech-to-text)
    - [Text-zu-Sprache](#text-to-speech)
- [TTS und STT in SeaX](#tts-and-stt-in-seax)
    - [Sprach-IVR](#voice-ivr)
    - [Nachricht bei Nichtverfügbarkeit](#unavailable-message)
    - [Live-Transkription](#live-transcription)
    - [Und mehr...](#and-more)

# Einführung in die Sprachintelligenz

Sprachintelligenz ist die Verwendung von Künstlicher Intelligenz zur Analyse und Gewinnung von Erkenntnissen aus sprachbasierten Daten. Während das letzte Jahrzehnt eine bemerkenswerte Entwicklung in Sprachtechnologien erlebt hat, ist ihre Verwendung in Unternehmensumgebungen immer noch etwas begrenzt. Unternehmen sammeln weiterhin Terabytes an Sprachdaten, aber in den meisten Fällen werden diese nicht vollständig genutzt.

Ein Grund dafür ist, dass Sprachdaten schwieriger zu verarbeiten sind als andere Datenformen, wie z. B. grundlegende Statistiken oder sogar einfache Textdaten. Sprachdaten sind in vielerlei Hinsicht einzigartig:
1. Sie sind sprachabhängig, mit Dialekten und Akzenten, daher ist es schwierig, 100 % der Informationen zu erfassen
2. Ihre Qualität variiert je nach Kanälen (Telefonie vs. VoIP, Mono vs. Stereo), Abtastrate (8KHz vs. 16KHz), Darstellungsgenauigkeit (8bit, 16 bit, 32bit) und Umgebungsgeräuschen wie Hintergrundgeräuschen
3. Sie sind schwieriger zu interpretieren: von Emotionen der Sprache über die Sprecheridentifikation bis hin zur Semantik der Bedeutung

Wenn sie jedoch mit den richtigen Werkzeugen richtig angegangen werden, kann Sprachintelligenz den Unternehmen, die sie nutzen, massive Vorteile bringen. Unter anderem ermöglicht die Fähigkeit, Sprachdaten richtig zu verwalten, die Verwendung personalisierter Sprache-zu-Text-Transkriptionen, die Gespräche durchsuchbar, indizierbar und aufschlussreich machen können, und ermöglicht eine weitere NLP-Verarbeitung. Da mehr Daten gesammelt werden, sind auch Verbesserungen dieser Dienste möglich, wie z. B.: Erhöhung der Transkriptionsgenauigkeit, Erweiterung des Anwendungsbereichs und Bereitstellung anpassbarer Sprach- und Sprachmodelle zur Anpassung an neue Sprachen und Dialekte.

# Was Seasalt.ai auszeichnet

Seasalt.ai bietet Cloud Communication AI-Technologien und -Produkte für Unternehmenskunden.
Wir haben hauseigene Sprach- und Sprachtechnologien für Textnachrichten
und Sprachanrufe in Unternehmens-Contact Centern entwickelt. Unsere Engine für natürliche Sprache unterstützt eine breite
Palette von Sprachen mit hohen und niedrigen Ressourcen: Burmesisch, Chinesisch, Englisch, Filipino,
Deutsch, Indonesisch, Khmer, Laotisch, Malaiisch, Spanisch, Tamil, Thai, Vietnamesisch usw.
Seasalt.ai wird von Risikokapitalgebern finanziert und von einer Gruppe weltweit führender Experten für tiefe Spracherkennung,
neuronale Sprachsynthese und natürliche Sprachdialoge geleitet.

Sehen Sie sich unser Speech-to-Text-Demo-Video an:
<iframe width="85%" height="450px" src="https://www.youtube.com/embed/Log8usX8ViE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

## Sprache-zu-Text

<center>
<img src="/images/blog/21-seax-voice-intelligence/STT.png" alt="Sprache-zu-Text-Grafik."/>
</center>

Unsere Sprache-zu-Text-Engine nimmt Sprachaudio auf und erstellt Transkriptionen in Echtzeit. Beginnend mit dem Audio extrahieren wir phonetische Merkmale, wandeln diese Merkmale in Phoneme um und ordnen diese Phoneme dann der Orthographie der Zielsprache zu. Unser aktuelles System ist in der Lage, mehrere Sprachen zu transkribieren, darunter Englisch und Chinesisch, wobei ständig weitere Sprachen hinzugefügt werden.

Sehen Sie sich unser Video zur Anpassung von Speech-to-Text an, um zu sehen, wie die STT-Engine von Seasalt für jeden Bereich angepasst werden kann:
<iframe width="85%" height="450px" src="https://www.youtube.com/embed/1YEU6mexzWQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

## Text-zu-Sprache

<center>
<img src="/images/blog/21-seax-voice-intelligence/TTS.png" alt="Text-zu-Sprache-Grafik."/>
</center>

Text-to-Speech ist der Prozess der Synthese realistischer menschlicher Sprache mit natürlicher Intonation und Kadenz nur aus Text. Unser Modell nimmt normalen Text, übersetzt diesen Text in Phoneme und wandelt die Phoneme dann in Audio um, während es gleichzeitig die richtige Tonhöhe, Dauer und Lautstärke bei jedem Zeitschritt für das lebensechteste TTS-Erlebnis vorhersagt. Wenn das Endergebnis nicht perfekt ist, bieten wir die Möglichkeit, das synthetisierte Audio anzupassen, einschließlich Wortausprache, Pausen und Betonung.

Sehen Sie sich unser Demo-Video zur Anpassung von Text-to-Speech an, um zu sehen, wie die Ausgabe der TTS-Engine von Seasalt angepasst werden kann, um lebensechte synthetisierte Sprache zu liefern:

<iframe width="85%" height="450px" src="https://www.youtube.com/embed/GJCOhTtImp8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

Sie können auch die [TTS-Seite](https://suite.seasalt.ai/tts) auf unserer Website besuchen, um Beispiele einiger unserer synthetisierten Stimmen anzuhören, darunter Tom Hanks, David Attenborough und Reese Witherspoon.

# TTS und STT in SeaX

## Sprach-IVR

<center>
<img src="/images/blog/21-seax-voice-intelligence/flow.png" alt="Sprach-IVR-Fluss mit der Sprache-zu-Text-Engine von Seasalt.ai für Echtzeit-Transkription und Anrufweiterleitung."/>

*Sprach-IVR-Fluss mit der Sprache-zu-Text-Engine von Seasalt.ai für Echtzeit-Transkription und Anrufweiterleitung.*
</center>

Sprachintelligenz kann bereits vor der Weiterleitung von Anrufen an die SeaX-Plattform helfen, indem sie sicherstellt, dass Anrufe an den richtigen Ort weitergeleitet werden und wichtige Informationen gesammelt werden, bevor der Anruf an einen Agenten übergeben wird. SeaX verwendet Twilio Studio, um Anruf- und Nachrichtenweiterleitungsflüsse anzupassen. Wir können aber auch unsere Sprache-zu-Text-Engine in den IVR-Fluss integrieren, um dem Kunden die Verwendung natürlicher Sprache zur Weiterleitung seines Anrufs zu ermöglichen (anstelle der traditionellen „drücken Sie 1 für…“-Erfahrung). Wenn Ihr Unternehmen außerdem daran interessiert ist, einen Chatbot zur Interaktion mit Kunden zu verwenden, können wir noch einen Schritt weiter gehen, indem wir Ihrem Chatbot eine Stimme geben, um mit Kunden über das Telefon zu sprechen, indem wir unsere Text-to-Speech-Engine verwenden.

## Nachricht bei Nichtverfügbarkeit

<center>
<img src="/images/blog/21-seax-voice-intelligence/unavailable-message.png" alt="SeaX-Konfiguration für nicht verfügbare Nachrichten mit Text-to-Speech."/>

*SeaX-Konfiguration für nicht verfügbare Nachrichten mit Text-to-Speech.*
</center>

Unsere Text-to-Speech-Technologie ermöglicht auch hochgradig anpassbare Sprachnachrichten. Diese können beispielsweise ausgelöst werden, wenn ein Kunde außerhalb der Geschäftszeiten anruft oder wenn der Kunde in der Warteschleife gehalten werden muss, während er auf einen verfügbaren Agenten wartet.

## Live-Transkription

<center>
<img src="/images/blog/21-seax-voice-intelligence/live-transcription.jpg" alt="Live-Anruf-Transkription mit Analyse, die dem Agenten auf SeaX angezeigt wird."/>

*Live-Anruf-Transkription mit Analyse, die dem Agenten auf SeaX angezeigt wird.*
</center>

Sobald ein Kunde mit einem Agenten telefoniert, liefert unsere Sprache-zu-Text-Engine genaue Echtzeit-Transkriptionen des Gesprächs zur Referenz des Agenten. Dies ermöglicht es dem Agenten, sich auf frühere Punkte im Gespräch zu beziehen und/oder sein Verständnis dessen, was der Kunde gesagt hat, zu überprüfen. Darüber hinaus sind diese Transkriptionen unglaublich nützlich für nachgelagerte Anwendungen wie Themenextraktion, Aktions extraktion, Zusammenfassung, Besprechungsanalyse usw.

## Und mehr...

Die oben genannten sind nur einige Möglichkeiten, wie SeaX fortschrittliche Sprachintelligenz integriert, um Wartezeiten zu verkürzen, die Agentenleistung zu verbessern und Kunden und Agenten gleichermaßen ein insgesamt nahtloses Erlebnis zu bieten. Um mehr über die erweiterten Funktionen der SeaX-Plattform zu erfahren, bleiben Sie dran für unsere nächsten Blogbeiträge, die KI-Wissensdatenbank, Fallmanagement und Massen-SMS umfassen. Um eine persönliche Demo zu erhalten und zu besprechen, wie die SeaX-Plattform Ihre spezifischen Geschäftsanforderungen erfüllen kann, füllen Sie unser [Demo-Buchungsformular](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting) aus.
`;export{e as default};

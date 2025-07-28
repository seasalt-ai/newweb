---
title: "SeaX KB: Eine Wissensdatenbank, die antwortet, bevor gefragt wird"
metatitle: "SeaX KB: Eine Wissensdatenbank, die antwortet, bevor gefragt wird"
date: 2022-08-15T22:01:32-07:00
modified_date: 2025-07-27T00:00:00Z
draft: false
author: Kim Dodds
image: /images/blog/22-seax-knowledge-base/thumbnail.png
description: "In diesem Beitrag setzen wir das Thema KI-Integrationen mit der KI-gestützten Wissensdatenbank von SeaX fort, die vorgeschlagene Antworten in Echtzeit bietet."
weight: 1
tags: ["SeaX"]
canonicalURL: "/blog/seax-kb-a-knowledge-base/"
url: "/blog/seax-kb-a-knowledge-base/"
---

*In unserem vorherigen Blogbeitrag, [Verleihen Sie Ihrem Contact Center eine eigene Stimme mit SeaX Voice Intelligence](https://seasalt.ai/blog/21-seax-voice-intelligence/), haben wir gezeigt, wie die hauseigenen Text-to-Speech- und Speech-to-Text-Engines von Seasalt.ai verschiedene Aspekte der SeaX-Plattform verbessern. In diesem Beitrag setzen wir das Thema KI-Integrationen mit der KI-gestützten Wissensdatenbank von SeaX fort, die Gespräche mithört und vorgeschlagene Antworten in Echtzeit bietet.*

# Inhaltsverzeichnis
- [Die traditionelle Wissensdatenbank](#the-traditional-knowledge-base)
- [SeaX Wissensdatenbank](#seax-knowledge-base)
    - [Eingebettete Benutzeroberfläche für Live-Agenten](#embedded-user-interface-for-live-agents)
    - [Schnelle und genaue Suche](#fast-and-accurate-search)
    - [Echtzeit-Automatisierte Vorschläge](#real-time-automated-suggestions)
    - [Antwortvorlagen](#response-templates)
    - [KB-Verwaltung](#kb-management)
    - [Webinar](#webinar)

# Die traditionelle Wissensdatenbank

Grundsätzlich ist eine Wissensdatenbank (KB) einfach eine Bibliothek mit (idealerweise) gut organisierten und leicht zugänglichen Informationen, die online im Selbstbedienungsmodus genutzt werden. Gute Wissensdatenbank-Systeme verfügen über Funktionen wie hierarchische Inhaltsorganisation, Suche und Kennzeichnung, um Benutzern das Auffinden der richtigen Informationen zu erleichtern.

Die Pflege einer detaillierten Wissensdatenbank ist heutzutage für die meisten Unternehmen Standard. Ob es darum geht, Mitarbeitern beim Austausch interner Informationen über ihr Produkt zu helfen, Fragen potenzieller Kunden zu beantworten, Kunden bei der Fehlerbehebung zu unterstützen oder all das oben Genannte – der Zugang zu Schlüsselinformationen für Mitarbeiter und Kunden bedeutet effizientere Arbeit und höhere Kundenzufriedenheit.

Typischerweise wird eine Wissensdatenbank über ein Content Management System oder ein Knowledge Management System implementiert und gepflegt. Diese Systeme können je nach den Bedürfnissen der Organisation in ihrem Umfang variieren, angefangen von einem einfachen Dokumentenmanager bis hin zu einem funktionsreichen Dienst, der Veröffentlichungs-Workflows, Zielgruppenansprache, Kollaborationstools und vieles mehr umfasst. Obwohl diese Systeme auf verschiedene Weise vielseitig sind, sind sie fast immer dazu gedacht, über die Interaktion mit einer Webseite oder Anwendung aufgerufen zu werden. Für den speziellen Anwendungsfall eines Kundendienstmitarbeiters (der typischerweise eine Wissensdatenbank als eine seiner Hauptressourcen bei der Unterstützung von Kunden nutzt) ist eine enge Integration mit der Contact Center Software notwendig, um den Agenten die nahtlose Bearbeitung von Benutzeranfragen zu ermöglichen.

# SeaX Wissensdatenbank

Unsere Wissensdatenbank wurde von Tag 1 an mit einem ganz bestimmten Anwendungsfall im Hinterkopf entwickelt: sprachbasierter Kundenservice. Während die meisten, wenn nicht alle, bestehenden Wissensdatenbank-Systeme auf der Navigation durch hierarchische Webseiten oder der Eingabe einer Suchanfrage basieren, musste unsere KB schneller und unabhängiger sein, um den Kundendienstmitarbeitern die volle Aufmerksamkeit für den Kunden zu ermöglichen und gleichzeitig Fragen schnell zu beantworten.

Wenn Sie direkt zu einer Demonstration gelangen möchten, können Sie unser kurzes SeaX KB Demo-Video ansehen:
<iframe width="85%" height="450px" src="https://www.youtube.com/embed/C_e_gaZHSFA" title="YouTube-Videoplayer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>


## Eingebettete Benutzeroberfläche für Live-Agenten

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-intro.png" alt="Erster Blick auf die SeaX Wissensdatenbank-Oberfläche."/>

*Erster Blick auf die SeaX Wissensdatenbank-Oberfläche.*
</center>

Da unser KB-Engine speziell für Contact Center-Anwendungen entwickelt wurde, verfügt es natürlich über eine native Integration in die SeaX-Plattform, sodass Agenten nahtlos auf die KB zugreifen können, während sie Anrufe und Nachrichten bearbeiten. Kein Wechseln von Fenstern, kein Blättern durch Tabs, kein Navigieren durch verschachtelte Webseiten.

## Schnelle und genaue Suche

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-manual-search.png" alt="Ergebnisse einer manuellen Suche in der SeaX Wissensdatenbank."/>

*Ergebnisse einer manuellen Suche in der SeaX Wissensdatenbank.*
</center>

Auf der grundlegendsten Ebene wird unsere Wissensdatenbank von einer unglaublich schnellen und genauen Suchmaschine angetrieben. Wir verwenden modernste Techniken zur Verarbeitung natürlicher Sprache und Informationsgewinnung, um aus einfachem Text, Beispielanfragen und unterstützenden URLs Bedeutungen zu extrahieren und die Äußerungen des Kunden den relevantesten KB-Einträgen zuzuordnen. Die Wissensdatenbank-Engine ist hochgradig erweiterbar und kann Milliarden von Dokumenten ohne wahrnehmbare Änderung der Antwortzeit unterstützen.

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-detail.png" alt="KB-Artikel in erweiterter Ansicht nach dem Klicken auf ein Suchergebnis."/>

*KB-Artikel in erweiterter Ansicht nach dem Klicken auf ein Suchergebnis.*
</center>

Zusätzlich zur Suche nach dem relevantesten Dokument liefert unsere Suchmaschine feinere Ergebnisse, indem sie relevante Schlüsselwörter aus der Benutzeranfrage extrahiert und die relevantesten Schlüsselwörter und Passagen in jedem vorgeschlagenen KB-Eintrag hervorhebt.

## Echtzeit-Automatisierte Vorschläge

Doch was wir bisher gezeigt haben, ist immer noch eine manuelle Suche. Live-Agenten sind voll damit beschäftigt, mit Kunden zu interagieren, und würden jedes Mal, wenn sie Informationen benötigen, wertvolle Zeit verlieren, wenn sie eine manuelle Suche in die KB eingeben müssten. Aus diesem Grund ist der größte Mehrwert, den die SeaX Wissensdatenbank bietet, die automatische Echtzeitsuche für text- und sprachbasierte Interaktionen.

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-automatic-search.png" alt="SeaX KB zeigt automatische Artikelvorschläge für eine eingehende Benutzernachricht an."/>

*SeaX KB zeigt automatische Artikelvorschläge für eine eingehende Benutzernachricht an.*
</center>

Jedes Mal, wenn eine neue Benutzernachricht eingeht, wird die Wissensdatenbank automatisch mit der genauen Nachricht des Kunden abgefragt. In Echtzeit, während der Kunde spricht, erhält der Agent aktuelle KB-Artikelvorschläge als Referenz.

Und das funktioniert auch bei sprachbasierten Anrufen! Unser letzter Blogbeitrag, [Verleihen Sie Ihrem Contact Center eine eigene Stimme mit SeaX Voice Intelligence](https://seasalt.ai/blog/21-seax-voice-intelligence/), zeigte die hochmoderne Speech-to-Text-Engine von Seasalt.ai. Die SeaX-Plattform nutzt diese Engine, um alle sprachbasierten Anrufe in Echtzeit zu transkribieren. Dadurch können wir diese Transkriptionen für verschiedene nachgelagerte Anwendungen nutzen, einschließlich der automatischen Wissensdatenbanksuche.

## Antwortvorlagen

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-response-template.png" alt="Ein Agent antwortet einem Kunden mit einem Klick mithilfe der von SeaX KB generierten Antwortvorlage."/>

*Ein Agent antwortet einem Kunden mit einem Klick mithilfe der von SeaX KB generierten Antwortvorlage.*
</center>

Die Suchergebnisse aus der Wissensdatenbank verfügen über eine zusätzliche Funktion, die die Antwortzeiten der Agenten bei textbasierten Interaktionen beschleunigt. Wenn der Agent einen relevanten KB-Artikel findet, kann er einfach auf das `+`-Symbol links neben dem Titel klicken, um eine Antwortvorlage in sein Chatfenster einzufügen. Im Backend generiert die KB bei jeder Suche eine schriftliche Antwort auf die Frage des Benutzers basierend auf den relevantesten Informationen im vorgeschlagenen KB-Artikel und enthält alle unterstützenden Links. Dies kann die Antwortzeit des Agenten erheblich verbessern, da der Agent nicht mehr mit einem leeren Blatt beginnt. Stattdessen hat er die wichtigen Informationen aus dem KB-Artikel bereits in seinem Chatfenster, sodass er sie einfach bearbeiten und senden kann.


## KB-Verwaltung

Nachdem wir nun gesehen haben, was die KB-Engine leisten kann, bleibt eine Frage zum Backend: Wie verwalten Sie die Informationen in der Wissensdatenbank? Die SeaX-Plattform verfügt über eine vollständig integrierte KB-Verwaltungs-UI, die Administratoren über die Einstellungsseite zur Verfügung steht.

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-management.png" alt="SeaX KB-Verwaltungsoberfläche."/>

*SeaX KB-Verwaltungsoberfläche.*
</center>

Auf dieser Seite können Sie einen einzelnen neuen KB-Eintrag hinzufügen oder die gesamte Wissensdatenbank mithilfe einer Tabellenkalkulationsdatei importieren/exportieren. Die Benutzeroberfläche unterstützt auch das Bearbeiten und Löschen von KB-Einträgen, sodass Sie Ihre KB kontinuierlich auf dem neuesten Stand halten können.

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-edit.png" alt="Bearbeiten eines einzelnen KB-Artikels über die SeaX KB-Verwaltungsoberfläche."/>

*Bearbeiten eines einzelnen KB-Artikels über die SeaX KB-Verwaltungsoberfläche.*
</center>

## Webinar

Wenn Sie eine detailliertere Einführung in das Wissensdatenbank-System und dessen Integration in die SeaX-Plattform wünschen, sehen Sie sich bitte unser Webinar zu diesem Thema an:
<iframe width="85%" height="450px" src="https://www.youtube.com/embed/FOqQ01fpKQ4" title="YouTube-Videoplayer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

Für eine persönliche Demo oder um mehr darüber zu erfahren, wie Seasalt.ai seine Lösungen an Ihre Geschäftsanforderungen anpassen kann, füllen Sie bitte unser [Demo-Buchungsformular](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting) aus.

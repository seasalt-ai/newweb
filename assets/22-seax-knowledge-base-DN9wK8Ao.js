const e=`---
title: "SeaX KB: Eine Wissensdatenbank, die Fragen beantwortet, bevor sie gestellt werden"
metatitle: "SeaX KB: Eine Wissensdatenbank, die Fragen beantwortet, bevor sie gestellt werden"
date: 2022-08-15 22:01:32-07:00
modified_date: 2025-07-30 17:01:04.431000+00:00
draft: false
author: Kim Dodds
description: "In diesem Artikel setzen wir das Thema der KI-Integration fort, indem wir die KI-gestützte Wissensdatenbank von SeaX vorstellen, die in Echtzeit vorgeschlagene Antworten liefert."
weight: 1
tags:
  - SeaX
canonicalURL: /blog/seax-kb-a-knowledge-base/
url: /blog/seax-kb-a-knowledge-base/
---

*In unserem vorherigen Blogbeitrag [Geben Sie Ihrem Contact Center mit SeaX Voice Intelligence eine eigene Stimme](https://seasalt.ai/blog/21-seax-voice-intelligence/) haben wir gezeigt, wie die internen Text-to-Speech- und Speech-to-Text-Engines von Seasalt.ai verschiedene Aspekte der SeaX-Plattform verbessern. In diesem Artikel setzen wir das Thema der KI-Integration fort, indem wir die KI-gestützte Wissensdatenbank von SeaX vorstellen, die Gespräche in Echtzeit abhört, um vorgeschlagene Antworten zu liefern.*

# Inhaltsverzeichnis
- [Die traditionelle Wissensdatenbank](#the-traditional-knowledge-base)
- [Die SeaX-Wissensdatenbank](#seax-knowledge-base)
    - [Eingebettete Benutzeroberfläche für Live-Agenten](#embedded-user-interface-for-live-agents)
    - [Schnelle und genaue Suche](#fast-and-accurate-search)
    - [Automatisierte Vorschläge in Echtzeit](#real-time-automated-suggestions)
    - [Antwortvorlagen](#response-templates)
    - [KB-Management](#kb-management)
    - [Webinar](#webinar)

# Die traditionelle Wissensdatenbank

Im Grunde ist eine Wissensdatenbank (Knowledge Base, KB) nur eine (idealerweise) gut organisierte und leicht zugängliche Informationssammlung für den Online-Self-Service. Ein gutes KB-System verfügt über Funktionen wie eine hierarchische Inhaltsorganisation, Suche und Tagging, um den Benutzern das Auffinden der richtigen Informationen zu erleichtern.

Die Pflege einer detaillierten Wissensdatenbank ist für die meisten Unternehmen heutzutage Standard. Ob der Zweck darin besteht, Mitarbeitern zu helfen, internes Wissen über ihre Produkte zu teilen, Fragen potenzieller Kunden zu beantworten, Kunden bei der Fehlerbehebung zu unterstützen oder all dies – die Bereitstellung wichtiger Informationen für Mitarbeiter und Kunden bedeutet effizientere Arbeit und höhere Kundenzufriedenheit.

In der Regel werden Wissensdatenbanken über ein Content-Management-System oder ein Wissensmanagementsystem implementiert und gepflegt. Diese Systeme können je nach den Bedürfnissen einer Organisation in ihrer Größe variieren, von einfachen Dokumentenmanagern bis hin zu funktionsreichen Diensten, die Veröffentlichungsworkflows, Zielgruppenansprache, Kollaborationstools und mehr umfassen. Obwohl diese Systeme in verschiedener Hinsicht vielseitig sind, sind sie fast immer für den Zugriff durch Interaktion mit einer Webseite oder einer Anwendung konzipiert. Für den speziellen Anwendungsfall von Kundendienstmitarbeitern (die Wissensdatenbanken oft als eine ihrer Hauptressourcen zur Unterstützung von Kunden nutzen) ist eine enge Integration mit der Contact-Center-Software erforderlich, damit die Mitarbeiter Benutzeranfragen so nahtlos wie möglich bearbeiten können.

# Die SeaX-Wissensdatenbank

Unsere Wissensdatenbank wurde vom ersten Tag an mit einem ganz bestimmten Anwendungsfall im Hinterkopf entwickelt: dem sprachbasierten Kundenservice. Während die meisten, wenn nicht alle, bestehenden Wissensdatenbanksysteme auf der Navigation durch hierarchische Webseiten oder der Eingabe von Suchanfragen beruhen, musste unsere Wissensdatenbank schneller und autonomer sein, damit sich die Kundendienstmitarbeiter voll und ganz auf den Kunden konzentrieren und dennoch Fragen schnell beantworten können.

Wenn Sie direkt zur Demo springen möchten, können Sie sich unsere kurze SeaX KB-Demo ansehen:
<iframe width="85%" height="450px" src="https://www.youtube.com/embed/C_e_gaZHSFA" title="YouTube-Videoplayer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>


## Eingebettete Benutzeroberfläche für Live-Agenten

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-intro.png" alt="Ein erster Blick auf die SeaX Knowledge Base-Oberfläche."/>

*Ein erster Blick auf die SeaX Knowledge Base-Oberfläche.*
</center>

Da unsere Wissensdatenbank-Engine speziell für Contact-Center-Anwendungen entwickelt wurde, ist sie natürlich nativ in die SeaX-Plattform integriert, sodass Agenten nahtlos auf die Wissensdatenbank zugreifen können, während sie Anrufe und Nachrichten bearbeiten. Kein Wechseln von Fenstern, kein Durchsuchen von Registerkarten, kein Navigieren durch verschachtelte Webseiten.

## Schnelle und genaue Suche

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-manual-search.png" alt="Ergebnisse einer manuellen Suche in der SeaX Knowledge Base."/>

*Ergebnisse einer manuellen Suche in der SeaX Knowledge Base.*
</center>

Auf der grundlegendsten Ebene wird unsere Wissensdatenbank von einer extrem schnellen und genauen Suchmaschine angetrieben. Wir verwenden modernste Technologien zur Verarbeitung natürlicher Sprache und zur Informationsextraktion, um aus Rohtext, Beispielanfragen und unterstützenden URLs Bedeutung zu gewinnen und die Äußerungen der Kunden mit den relevantesten Wissensdatenbankeinträgen abzugleichen. Die Wissensdatenbank-Engine ist hoch skalierbar und kann Milliarden von Dokumenten unterstützen, ohne dass sich die Antwortzeit spürbar ändert.

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-detail.png" alt="Ein Wissensdatenbankartikel in einer erweiterten Ansicht nach dem Klicken auf ein Suchergebnis."/>

*Ein Wissensdatenbankartikel in einer erweiterten Ansicht nach dem Klicken auf ein Suchergebnis.*
</center>

Neben dem Auffinden der relevantesten Dokumente liefert unsere Suchmaschine auch detailliertere Ergebnisse, indem sie wichtige Schlüsselwörter aus der Benutzeranfrage extrahiert und die relevantesten Schlüsselwörter und Passagen in jedem vorgeschlagenen Wissensdatenbankeintrag hervorhebt.

## Automatisierte Vorschläge in Echtzeit

Aber was wir bisher gezeigt haben, ist immer noch eine manuelle Suche. Live-Agenten sind damit beschäftigt, mit Kunden zu interagieren, und die manuelle Eingabe von Suchen in die Wissensdatenbank bei jeder Informationsanforderung verschwendet wertvolle Zeit. Der größte Mehrwert der SeaX Knowledge Base ist daher die automatische Echtzeitsuche für text- und sprachbasierte Interaktionen.

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-automatic-search.png" alt="Die SeaX Knowledge Base zeigt automatische Artikelvorschläge für eine eingehende Benutzernachricht an."/>

*Die SeaX Knowledge Base zeigt automatische Artikelvorschläge für eine eingehende Benutzernachricht an.*
</center>

Jedes Mal, wenn eine neue Benutzernachricht eingeht, fragt die Wissensdatenbank automatisch mit der genauen Nachricht des Kunden ab. In Echtzeit, während der Kunde spricht, werden dem Agenten aktuelle Vorschläge für Wissensdatenbankartikel als Referenz zur Verfügung gestellt.

Dies funktioniert auch für Sprachanrufe! Unser vorheriger Blogbeitrag [Geben Sie Ihrem Contact Center mit SeaX Voice Intelligence eine eigene Stimme](https://seasalt.ai/blog/21-seax-voice-intelligence/) stellte die hochmoderne Speech-to-Text-Engine von Seasalt.ai vor. Die SeaX-Plattform nutzt diese Engine, um alle Sprachanrufe in Echtzeit zu transkribieren. Folglich können wir diese Transkriptionen für eine Vielzahl von nachgelagerten Anwendungen verwenden, einschließlich der automatischen Suche in der Wissensdatenbank.

## Antwortvorlagen

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-response-template.png" alt="Ein Agent antwortet einem Kunden mit einem Klick über eine von der SeaX Knowledge Base generierte Antwortvorlage."/>

*Ein Agent antwortet einem Kunden mit einem Klick über eine von der SeaX Knowledge Base generierte Antwortvorlage.*
</center>

Die Suchergebnisse der Wissensdatenbank verfügen über eine zusätzliche Funktion, mit der die Reaktionsfähigkeit der Agenten auf textbasierte Interaktionen beschleunigt werden kann. Wenn ein Agent einen relevanten Wissensdatenbankartikel findet, kann er einfach auf das „+“-Symbol links neben dem Titel klicken, um eine Antwortvorlage in sein Chatfenster einzufügen. Im Backend generiert die Wissensdatenbank bei jeder Suche eine schriftliche Antwort auf die Frage des Benutzers, basierend auf den relevantesten Informationen aus den vorgeschlagenen Wissensdatenbankartikeln, und enthält alle unterstützenden Links. Dies kann die Reaktionszeiten der Agenten erheblich verbessern, da die Agenten nicht mehr bei Null anfangen. Stattdessen werden die wichtigen Informationen aus dem Wissensdatenbankartikel bereits in ihrem Chatfenster angezeigt, sodass sie sie nur noch bearbeiten und senden müssen.


## KB-Management

Nachdem wir nun gesehen haben, was die Wissensdatenbank-Engine leisten kann, bleibt eine Frage zum Backend offen: Wie werden die Informationen in der Wissensdatenbank verwaltet? Die SeaX-Plattform bietet eine vollständig integrierte Benutzeroberfläche für die Wissensdatenbankverwaltung, auf die Administratoren über die Einstellungsseite zugreifen können.

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-management.png" alt="Die SeaX Knowledge Base Management-Oberfläche."/>

*Die SeaX Knowledge Base Management-Oberfläche.*
</center>

Auf dieser Seite können Sie einzelne neue Wissensdatenbankeinträge hinzufügen oder die gesamte Wissensdatenbank mithilfe einer Tabellenkalkulationsdatei importieren/exportieren. Die Benutzeroberfläche unterstützt auch das Bearbeiten und Löschen von Wissensdatenbankeinträgen, sodass Sie Ihre Wissensdatenbank kontinuierlich auf dem neuesten Stand halten können.

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-edit.png" alt="Bearbeiten eines einzelnen Wissensdatenbankartikels über die SeaX Knowledge Base Management-Oberfläche."/>

*Bearbeiten eines einzelnen Wissensdatenbankartikels über die SeaX Knowledge Base Management-Oberfläche.*
</center>

## Webinar

Wenn Sie einen genaueren Einblick in das Wissensdatenbanksystem und seine Integration in die SeaX-Plattform erhalten möchten, sehen Sie sich unser Webinar zu diesem Thema an:
<iframe width="85%" height="450px" src="https://www.youtube.com/embed/FOqQ01fpKQ4" title="YouTube-Videoplayer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

Für eine persönliche Demo oder um zu erfahren, wie Seasalt.ai eine Lösung für Ihre Geschäftsanforderungen anpassen kann, füllen Sie bitte unser [Formular zur Demoanforderung](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting) aus.`;export{e as default};

const e=`---
title: "Von der Demo zum Erfolg: Fallstricke moderner Meetings (2/5)"
metatitle: "Demo zum Erfolg (2/5): Fallstricke moderner Meetings"
date: 2021-07-30
draft: false
author: Cody Kim
description: "Im zweiten Teil dieser Blogserie verfolgen Sie die Reise von Seasalt.ai zur Entwicklung von SeaMeet, unserer kollaborativen Lösung für moderne Meetings."
weight: 1
tags:
  - SeaMeet
image: images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/SeaMeet animation.gif
canonicalURL: /blog/seameet-voice-and-microsoft-modern-meetings/
url: /blog/seameet-voice-and-microsoft-modern-meetings/
---

*In dieser Blogserie verfolgen Sie die Reise von Seasalt.ai zur Entwicklung einer umfassenden modernen Meeting-Erfahrung, beginnend mit bescheidenen Anfängen, über die Optimierung unseres Dienstes auf verschiedenen Hardware- und Modelltypen bis hin zur Integration modernster NLP-Systeme und schließlich der vollständigen Realisierung von SeaMeet, unserer kollaborativen Lösung für moderne Meetings.*

## Fallstricke moderner Meetings

Während unserer Entwicklung stießen wir auf viele unvorhersehbare Hindernisse ohne klare Ursachen oder Lösungen.

### Ein schneller Start

Das erste Hindernis war, unsere Tools zum Laufen zu bringen. Azure stellte ein Modern Meetings-Beispiel zur Verfügung, das erfreulicherweise mit Linux kompatibel war, aber wir stellten fest, dass die Verwendung des SDK unter Windows zum Ausführen der Demo viel einfacher war – nun, es war schließlich ein Microsoft-Produkt. Nach vielen fehlgeschlagenen Versuchen, das bereitgestellte Beispiel unter Linux zum Laufen zu bringen, mussten wir diesen Weg schließlich aufgeben und auf Windows zurückgreifen. Endlich hatten wir einen funktionierenden Sprachtranskriptor, was ein enormer Anfang war.

### Latenz

Ein Problem, das wir erlebten, war eine Verzögerung von etwa fünf Sekunden beim Empfang unserer Erkennungsergebnisse auf der Frontend-Benutzeroberfläche. Obwohl 5 Sekunden ziemlich schnell erscheinen mögen, ist diese Verzögerung merklich ein paar Sekunden zu langsam, um eine bequeme und praktische Lösung zu sein, insbesondere für die Echtzeitkommunikation.

<center>
<img src="/images/blog/4-seameet-voice-intelligence-meeting-transcription-pitfalls-of-microsoft-modern-meetings/default_ui.png" style="width:400px;" alt="Die Standard-Benutzeroberfläche für die Sprachtranskription durch das Azure Speech SDK"/>

*Die Standard-Benutzeroberfläche für die Sprachtranskription, bereitgestellt vom Azure Speech SDK*
</center>

Latenz war auch im Backend ein ernstes Problem. Zu Beginn jedes Meetings kamen die Ergebnisse in Echtzeit (wie beworben!), aber im Laufe des Meetings stieg die Latenz periodisch auf bis zu dreißig Sekunden an, bevor Text auf den Monitoren erschien. Zu diesem Zeitpunkt war das Gesagte in der Konversation längst irrelevant geworden. Nach unzähligen Tests bemerkten wir, dass sich die Latenz im Laufe des Tages änderte, was wir der Serverauslastung von Azure zu diesem Zeitpunkt zuschrieben. Wir sind im Geschäft, ein konsistentes, zuverlässiges Produkt zu entwickeln, daher waren diese schwankenden und unvorhersehbaren Verzögerungen inakzeptabel. Umso mehr Grund, sich auf unsere eigenen Modelle und Server zu verlassen.

### Dialekt

Ein besonderer Grund, warum wir überhaupt Azure Speech Service verwendet haben, war die breite Unterstützung einer Vielzahl von Sprachen und Dialekten. Wir waren besonders gespannt darauf, das singapurische englische Modell von Azure Speech Service zu nutzen. Aber stellen Sie sich unsere Überraschung vor, als wir feststellten, dass für den singapurischen Dialekt das US-englische Modell das singapurische englische Modell durchweg übertraf. Darüber hinaus erfüllte selbst das beste Modell die Herausforderungen der realen Welt nicht.

<center>
<img src="/images/blog/4-seameet-voice-intelligence-meeting-transcription-pitfalls-of-microsoft-modern-meetings/bad_result.png"/>

*Resultierende Transkription von "Herzlichen Glückwunsch! Junge oder Mädchen?"*
</center>

Wir sahen Ergebnisse wie „ola regulations may be boiled baby cool“, obwohl die Äußerung eigentlich „Herzlichen Glückwunsch! Junge oder Mädchen?“ lautete. Ein gut trainiertes Sprachmodell hätte eine solche Transkription eliminieren sollen. Obwohl dies ein extremes Beispiel ist, gab es häufiger als nicht einen Fehler in jeder Transkription. Egal wie klein der Fehler war, wie ein fehlender Artikel oder ein missverstandenes Wort, jeder Fehler ist ablenkend und kann den Ruf eines Transkriptionsdienstes leicht ruinieren.

### Windows Update

Einige Wochen später hatte das Team Nacht für Nacht damit verbracht, sicherzustellen, dass unser Produkt für die Kundendemonstration in wenigen Tagen bereit war. Unser Meeting-Transkriptor lief reibungslos auf drei separaten Windows-Laptops. Dann, eines Tages aus dem Nichts, waren wir auf nur noch einen funktionierenden Computer reduziert, obwohl niemand den Code angefasst hatte. Wir testeten unsere Netzwerke, überprüften unsere Firewalls, alles, was uns einfiel, was unser Produkt plötzlich zum Ausfall bringen könnte. Unsere letzte Vermutung war, dass ein überraschendes Windows-Update das Azure Speech SDK unerklärlicherweise mit zwei unserer Computer inkompatibel machte, als wir die drei Systeme Bit für Bit verglichen. Da unsere Präsentation schnell näher rückte, waren Stress und Anspannung am Siedepunkt. Mit nur noch einem System schloss das Team einen Pakt: keine Codeänderungen und absolut keine Updates. Nach dieser Tortur hatten wir genug.

### Jenseits moderner Meetings

Um diesen Hindernissen zu entgehen, machte sich das Team von Seasalt.ai daran, eigene akustische und Sprachmodelle zu trainieren, um mit den Fähigkeiten des Konversations-Transkriptors von Azure zu konkurrieren. Während des gesamten Prozesses stellten wir uns immer wieder die Frage: Wohin gehen wir von hier aus? Wie können wir dieses bereits instrumentelle Produkt erweitern?

Moderne Meetings zeigten ein robustes Potenzial für die Spracherkennung, aber das ist auch alles. Es kann uns zuhören, aber was wäre, wenn wir es für uns denken lassen könnten? Mit nur Transkriptionen ist das Produkt zwar beeindruckend, aber die Anwendungen sind etwas begrenzt. Der Übergang von der Sprachtranskription zur Sprachintelligenz öffnet die Türen weit für das, was wir schaffen können. Beispiele für Intelligenz sind Meeting-Zusammenfassungen, Themenabstraktion und Aktions-Extraktionen. Und schließlich die Gestaltung einer schönen Benutzeroberfläche, um alles in einem atemberaubenden Paket zusammenzufassen.

Und das ist die Geschichte bisher, der Beginn der Reise von Seasalt.ai, um die besten Geschäftslösungen auf einen sich schnell entwickelnden Markt zu bringen und sie der Welt zu liefern. Wenn Sie mehr über die Details erfahren möchten, lesen Sie bitte den Rest der Blogserie.
`;export{e as default};

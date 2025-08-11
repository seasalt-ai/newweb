const e=`---
title: "Vom Demo zum Erfolg: Jenseits der Sprachalgorithmen moderner Meetings (3/5)"
metatitle: "Demo zum Erfolg (3/5): Jenseits der Sprachalgorithmen"
date: 2021-07-30 17:43:38-07:00
modified_date: 2025-07-29 00:00:00+00:00
draft: false
author: Cody Kim, Shayne Mei
description: "Im dritten Teil dieser Blogserie begleiten Sie Seasalt.ai auf dem Weg zur Entwicklung von SeaMeet, unserer modernen Lösung für kollaborative Meetings."
weight: 1
tags:
  - SeaMeet
image: images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/SeaMeet animation.gif
canonicalURL: /blog/seameet-voice-speech-recognition/
url: /blog/seameet-voice-speech-recognition/
---

*In dieser Blogserie begleiten Sie Seasalt.ai auf dem Weg zu einem umfassenden modernen Meeting-Erlebnis – von den bescheidenen Anfängen über die Optimierung auf verschiedenen Hardwareplattformen und Modellen bis hin zur Integration modernster NLP-Systeme und der finalen Realisierung von SeaMeet, unserer kollaborativen Meeting-Lösung.*

## Jenseits des Algorithmus
Modern Meetings war ein großartiges Demo, blieb aber ein Demo. Es ist noch ein weiter Weg bis zur Produktionsreife. Wir haben die Demoversion zunächst erfolgreich mit dem Microsoft Azure Stack umgesetzt. Doch nach Erkennen aller Schwächen der Software haben wir die Algorithmen durch eigene ersetzt und das gesamte Erlebnis deutlich flüssiger, leichter und flexibler gestaltet.
Es gibt vier Hauptkomponenten von Modern Meetings:

1. Signalverarbeitung am Mikrofonarray, insbesondere Beamforming
2. Sprecher-Diarisation und -Identifikation
3. Angepasste Spracherkennung
4. Eine bessere Benutzeroberfläche

Im Folgenden werden alle wichtigen Komponenten im Detail erläutert.

<center>
<img src="/images/blog/5-seameet-voice-intelligence-meeting-transcription-speech-recognition-algorithm-of-modern-meeting/tech-stack.png" alt="SeaMeet architect with 4 major components"/>

*Wir haben alle vier Hauptkomponenten von Modern Meetings mit unserem eigenen Tech-Stack angepasst: 1. Signalverarbeitung mit Mikrofonarray; 2. Sprecher-Diarisation und -Identifikation; 3. Angepasste Spracherkennung; 4. Moderne Web-Oberfläche.*
</center>

### Signalverarbeitung am Mikrofonarray
Das Mikrofonarray nimmt im Vergleich zu einem einzelnen Nahbesprechungsmikrofon Stimmen aus einem vollen 360-Grad-Bereich bis zu einer Entfernung von 5 Metern auf. Ein einzelnes Mikrofonarray kann somit Stimmen in einem mittelgroßen Konferenzraum von 10 x 10 Metern erfassen. Da alle Mikrofone auf einem Gerät gebündelt sind, reduziert sich die Kabelmenge im Raum erheblich und die Installation sowie Wartung werden vereinfacht.
Das Ziel der Nutzung eines Mikrofonarrays ist es, unseren Modellen die bestmöglichen Datenqualität zu liefern. Vor der automatischen Spracherkennung führen wir daher mehrere Signalverarbeitungsalgorithmen durch. Der Hauptbestandteil unserer Vorverarbeitung ist das sogenannte Beamforming. Da wir mit kreisförmigen, mehrkanaligen Mikrofonarrays arbeiten, können wir die winzigen Zeitunterschiede nutzen, die der Schall benötigt, um die verschiedenen Mikrofone zu erreichen. Beamforming bestimmt die Hauptmerkmale des Signals – den besten Beam – und verstärkt diese Frequenzen, während unerwünschte Geräusche abgeschwächt werden. Das Ergebnis ist eine Entstörung und Enthallung, während das Hauptsignal, also die Sprache, lauter und klarer wird.

Für die optimale Leistung vieler Beamforming-Algorithmen müsste die genaue Position der Quelle (des Sprechers) relativ zum Mikrofon bekannt sein. Da dies in der Praxis unmöglich ist, berechnen wir zunächst sogenannte Fernfeld-Gewichte, indem wir die Richtung der Quelle bestimmen. Dieser erste Schritt, bekannt als Quellenlokalisierung oder genauer Richtung des Eintreffens (DOA), erwies sich als schwierig. Das Hauptproblem war die Glättung. Der Algorithmus lieferte ungefähr das richtige Ergebnis, aber die ermittelte Quelle schwankte ständig um 30 Grad auf beiden Seiten der tatsächlichen Richtung, was das Beamforming beeinträchtigte. Unsere Lösung bestand darin, dass der Quellenlokalisierungsalgorithmus nur den Frequenzbereich verwendet, der den Großteil der menschlichen Sprache kodiert. Wir kombinierten dies mit einer Glättungstechnik, bei der wir eine „Historie“ der DOA-Ergebnisse zum Mittelwertbilden verwendeten. Mit zuverlässigeren DOA-Ergebnissen konnten wir dann die Fernfeld-Gewichte berechnen und den besten Beam bestimmen.

Mit der Reihe von Algorithmen auf dem Kinect DK – Beamforming, Entstörung, Enthallung, Quellenlokalisierung – konnten wir in Echtzeit klare und verstärkte menschliche Sprache erzeugen und gleichzeitig die ungefähre Richtung des Sprechers bestimmen. Dies hilft bei der Sprecheridentifikation im nächsten Schritt.

### Sprecher-Diarisation und -Identifikation

Die nächste Komponente eines modernen Meeting-Transkriptionssystems ist die automatische Sprechererkennung. Wie im letzten Teil dieser Serie erwähnt, ist das Lesen eines unorganisierten Gesprächstextes ohne Information darüber, wer was gesagt hat, frustrierend und widerspricht dem Zweck eines solchen Systems. Hier kommt die Sprechererkennung ins Spiel.

Mit dieser Komponente können wir Transkriptionen und Audio automatisch dem Namen des Sprechers zuordnen. Dazu verwenden wir einen Prozess namens Diarisation, der Audiosignale in eine bestimmte Anzahl von Gruppen clustert, die der Anzahl der Sprecher in der Aufnahme entsprechen. Dies funktioniert durch die Nutzung eines Voice Activity Detection (VAD)-Systems zur Bestimmung von Sprachsegmenten, aus denen wir eine Vektorrepräsentation eines kurzen Fensters extrahieren. Jeder aus den Fenstern extrahierte Vektor wird als Utterance-Level-xvector bezeichnet, und beim Mittelwertbilden erhalten wir einen Speaker-Level-xvector. Diese xvectors werden dann durch einen Clustering-Algorithmus geführt, wobei jeder Cluster die Sprachsegmente eines Sprechers repräsentiert. Die Wahl des Clustering-Algorithmus beeinflusst die Diarisation-Leistung erheblich, und wir haben eine optimale Diarisation Error Rate (DER) mit spektralem Clustering unter Verwendung einer schwellenwertbasierten Affinitätsmatrix, die mit Normalized Maximum Eigengap (NME)-Werten automatisch abgestimmt wird, erreicht. Schließlich muss entschieden werden, welcher Sprecher welchem Cluster entspricht. Vor dem Meeting kann ein Enrollment-Prozess durchgeführt werden, um xvectors aus 40-sekündigen Aufnahmen jedes Sprechers zu extrahieren, die dann mit den Clustern verglichen werden, um den entsprechenden Sprecher zu identifizieren.

Das Schöne an dieser Pipeline ist ihre Flexibilität. In vielen Meetings ist es unpraktisch oder unmöglich, im Voraus Aufnahmen jedes Sprechers zu erhalten. Denken Sie an Geschäftstreffen mit VIP-Kunden oder große Symposien mit 50 Sprechern. In diesem Fall kann der Enrollment-Schritt übersprungen werden, und unser Diarisation-System kann dennoch die Sprachsegmente sortieren und die zugehörigen Sprecher gruppieren. Es reicht, wenn ein Mensch einige Sekunden aus jedem Cluster hört, um die Sprecheridentität zu bestimmen. Zusammen mit einer modernen Benutzeroberfläche können wir die gleiche Funktionalität mit mehr Flexibilität bieten.

### Angepasste Spracherkennung

Nachdem wir Microsofts Meeting-Transcriber kennengelernt und seine Stärken erkannt hatten, waren wir bereit, unser System vollständig unabhängig zu machen und über ein bereits revolutionäres Produkt hinauszugehen. Die treibende Kraft hinter Modern Meetings und jedem Transkriptionsprodukt sind die automatischen Spracherkennungsmodelle (ASR). Daher lag hier unser Hauptaugenmerk.
Azure Cognitive Services bot eine Vielzahl von Modellen für verschiedene Sprachen und Dialekte. Die Leistung zwischen den Dialekten war jedoch schwer zu unterscheiden. Für die einzelnen englischen Dialekte wurde vermutlich der größte Aufwand und die meiste Datenmenge in das US-Englisch-Modell gesteckt, das dann mit akzentuierten Daten feinabgestimmt wurde, um die verschiedenen Dialektmodelle zu erstellen. Wir wollten sicherstellen, dass ein eigenes Modell auf einen bestimmten Anwendungsfall abgestimmt ist. Das bedeutete, Tausende Stunden lokalisierter Audio- und Transkriptionsdaten zu sammeln und wochenlang zu trainieren und zu optimieren. Aber es war die Mühe wert, zu sehen, wie unsere Modelle mit jedem Epoch besser wurden und das zu liefern, was wir versprochen hatten.

Mit einem soliden Grundmodell war der nächste Schritt die Erweiterung der Nutzbarkeit und Anpassbarkeit. Jede Branche bringt eine Vielzahl eigener Fachbegriffe mit sich, was es ASR-Modellen erschwert, zwischen esoterischem Vokabular und einer Reihe von häufigen, phonetisch ähnlichen Wörtern zu unterscheiden.

Unsere Antwort ist SeaVoice, das einen zentralen Ort bietet, an dem Nutzer Modelle einfach für ihre speziellen Anforderungen anpassen können.
`;export{e as default};

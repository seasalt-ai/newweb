---
title: "Von der Demo zum Erfolg: Meeting-Wahrnehmung (4/5)"
metatitle: "Von der Demo zum Erfolg (4/5): Meeting-Wahrnehmung"
date: 2021-08-28T12:26:00-07:00
author: Kim Dodds
image: "images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/SeaMeet animation.gif"
draft: false
description: "Im vierten Teil dieser Blogserie verfolgen Sie die Reise von Seasalt.ai zur Entwicklung von SeaMeet, unserer kollaborativen Lösung für moderne Meetings."
tags: ["SeaMeet"]
weight: 1  
canonicalURL: "/blog/seameet-voice-summarization-topic-abstraction"
url: "/blog/seameet-voice-summarization-topic-abstraction"
aliases:
    - /blog/6-seameet-voice-intelligence-meeting-transcription-summarization-topic-abstraction-action-extraction/
---

*In dieser Blogserie verfolgen Sie die Reise von Seasalt.ai zur Entwicklung einer umfassenden modernen Meeting-Erfahrung, beginnend mit bescheidenen Anfängen, über die Optimierung unseres Dienstes auf verschiedenen Hardware- und Modelltypen bis hin zur Integration modernster NLP-Systeme und schließlich der vollständigen Realisierung von SeaMeet, unserer kollaborativen Lösung für moderne Meetings.*

## Jenseits der Transkription

Alle bisherigen Hindernisse, denen wir begegneten, lehrten uns eine wichtige Lektion: dass wir all dies selbst besser machen könnten.
Also machte sich das Team von Seasalt.ai daran, eigene akustische und Sprachmodelle zu trainieren, um mit den Fähigkeiten des Konversations-Transkriptors von Azure zu konkurrieren.
Microsoft präsentierte auf der MS Build 2019 eine beeindruckende Präsentation, die Azure Speech Services als hochleistungsfähiges und dennoch sehr zugängliches Produkt vorstellte.
Nachdem wir beeindruckt waren, mussten wir uns die Frage stellen: Wohin gehen wir von hier aus?
Wie können wir dieses bereits instrumentelle Produkt erweitern? Moderne Meetings zeigten ein robustes Potenzial für die Spracherkennung, aber das ist auch alles.
Wir wissen, dass Azure uns zuhören kann, aber was wäre, wenn wir es für uns *denken* lassen könnten?
Mit nur Transkriptionen ist das Produkt zwar beeindruckend, aber die Anwendungen sind etwas begrenzt.

Durch die Integration der bestehenden Spracherkennungstechnologie mit Systemen, die Erkenntnisse aus den Transkriptionen gewinnen können, können wir ein Produkt liefern, das Erwartungen übertrifft und Benutzerbedürfnisse antizipiert.
Wir haben uns entschieden, drei Systeme zu integrieren, um den Gesamtwert unserer SeaMeet-Transkriptionen zu verbessern: Zusammenfassung, Themenabstraktion und Extraktion von Aktionspunkten.
Jedes davon wurde ausgewählt, um spezifische Benutzerprobleme zu lindern.

Zur Demonstration zeigen wir das Ergebnis der Ausführung der Zusammenfassungs-, Themen- und Aktionssysteme auf der folgenden kurzen Transkription:

```
Kim: „Vielen Dank, Xuchen, Sie sind stummgeschaltet, weil viele Leute in diesem Anruf sind. Drücken Sie Stern 6, um die Stummschaltung aufzuheben.“

Xuchen: „OK, ich dachte, es wäre nur schlechter Empfang.“,

Kim: „Ja.“,

Sam: „Ich habe gerade eine separate Datei mit Sprachdaten für Dienstage bis zu 30 Tagen gesendet. Ihr solltet einige aktualisierte Versionen haben.“,

Kim: „Es wird definitiv Grenzfälle geben, in denen das nicht funktioniert. Ich habe bereits ein paar gefunden, wie in diesem Beispiel. Es nimmt das Verb heraus und sagt, der Sprecher sei der Beauftragte, obwohl es wirklich eher Carol ist, die Beauftragte. Aber es ist das gleiche Muster wie bei etwas wie dem zweiten, wo Sie wirklich wollen, dass ich der Beauftragte bin, weil sie Jason nicht beauftragen, sie beauftragen sich selbst, Jason zu informieren.“,

Sam: „Verstanden.“,

Xuchen: „Der Nachteil dabei ist, dass man dafür Regeln schreiben muss. Ja, der Vorteil ist, dass es sich um ein bereits trainiertes Modell handelt. Man kann es weiter trainieren, aber wir müssen keine Tonnen von Daten darauf werfen.“,

Kim: „Obwohl es die Klassifizierung nicht vornimmt, die uns sagen würde, ob dies eine Aktion ist oder etwas anderes?“,

Xuchen: „Also, der Trick hier ist, dass wir wollen, dass das Hilfsverb vorhanden ist, aber wir möchten auch einige Personennamen.“,

Sam: „Richtig, sonst vielleicht weil.“,

Xuchen: „Ja, wenn es einen Satz mit, wissen Sie, vielen Instanzen mit offensichtlichen Wörtern gibt. Allerdings würden nicht viele davon den Aktionen helfen.“
```

Das Folgende ist ein Beispiel für die kurzen Zusammenfassungen, bei denen wir jedes Segment im Originaltranskript durch den Zusammenfasser geleitet haben:

```
Kim: „Xuchen ist stummgeschaltet, weil viele Leute im Anruf sind.“

Xuchen: „Es ist nur schlechter Empfang.“

Sam: „Ich habe eine separate Datei mit Sprachdaten für Dienstage bis zu 30 Tagen gesendet.“

Kim: „Es wird Grenzfälle geben, in denen das nicht funktioniert.“

Xuchen: „Der Nachteil beim Trainieren eines bereits trainierten Modells ist, dass man dafür Regeln schreiben muss.“

Kim: „Die Klassifizierung nimmt die Klassifizierung nicht vor, die ihnen eine Aktion verschaffen würde.“

Xuchen: „Der Trick hier ist, dass sie wollen, dass das Hilfsverb vorhanden ist, aber sie möchten auch einige Personennamen.“

Xuchen: „Wenn es einen Satz mit Wörtern gibt, würden nicht viele davon den Aktionen helfen.“
```

Und dieses Beispiel zeigt das gesamte Meeting, zusammengefasst in einem einzigen Absatz:

```
„Xuchen ist stummgeschaltet, weil viele Leute im Anruf sind. Sam hat eine separate Datei mit Sprachdaten für Dienstage bis zu 30 Tagen gesendet. Xuchen hat einige Grenzfälle gefunden, in denen der Sprecher der Beauftragte ist.“
```

Der Kern sowohl der kurzen als auch der langen Zusammenfassungskomponenten ist ein transformatorbasiertes Zusammenfassungsmodell.
Wir optimieren das Modell auf einem Dialogdatensatz für die abstraktive Zusammenfassung.
Die Daten enthalten Textauszüge unterschiedlicher Länge, die jeweils mit einer handgeschriebenen Zusammenfassung gepaart sind.
Für die mehrsprachige Zusammenfassung verwenden wir dasselbe Paradigma, nutzen aber ein mehrsprachiges Basismodell, das auf einer übersetzten Version des Datensatzes feinabgestimmt wurde.
Über die SeaMeet-Oberfläche hat der Benutzer auch die Möglichkeit, eine maschinell erstellte Zusammenfassung zu überprüfen oder eine eigene bereitzustellen.
Wir können dann diese vom Benutzer eingegebenen Zusammenfassungen sammeln und sie unserem Trainingsdatensatz hinzufügen, um unsere Modelle kontinuierlich zu verbessern.

## Themenabstraktion

<center>
<img src="/images/blog/6-seameet-voice-intelligence-meeting-transcription-summarization-topic-abstraction-action-extraction/topics.png" alt="SeaMeets Themenextraktions-Engine extrahiert Themen aus einem Meeting"/>

*Die SeaMeet-Oberfläche, fokussiert auf den Reiter „Themen“ auf der rechten Seite*
</center>

Ein weiteres Problem beim Umgang mit großen Sammlungen von Transkriptionen ist deren Organisation, Kategorisierung und Suche.
Durch die automatische Abstraktion von Schlüsselwörtern und Themen aus dem Transkript können wir Benutzern eine mühelose Möglichkeit bieten, bestimmte Meetings oder sogar bestimmte Abschnitte von Meetings zu finden, in denen ein relevantes Thema diskutiert wird.
Zusätzlich dienen diese Themen als weitere Methode zur Zusammenfassung der wichtigsten und einprägsamsten Informationen in einem Transkript.

Hier ist ein Beispiel für Schlüsselwörter, die aus dem Beispieltranskript extrahiert würden:

```
Hilfsverb
Sprecher
Sprachdaten
separate Datei
aktualisierte Versionen
Personennamen
trainiertes Modell
Regeln schreiben
```

Die Themenextraktionsaufgabe verwendet eine Kombination aus abstraktiven und extraktiven Ansätzen.
Abstraktiv bezieht sich auf einen Textklassifizierungsansatz, bei dem jede Eingabe in eine Menge von Labels klassifiziert wird, die während des Trainings gesehen wurden.
Für diese Methode verwendeten wir eine neuronale Architektur, die auf Dokumenten trainiert wurde, die mit einer Liste relevanter Themen gepaart waren.
Extraktiv bezieht sich auf einen Schlüsselwortsuchansatz, bei dem relevante Schlüsselwörter aus dem bereitgestellten Text extrahiert und als Themen zurückgegeben werden.
Für diesen Ansatz verwenden wir eine Kombination von Ähnlichkeitsmetriken wie Kosinus-Ähnlichkeit und TF-IDF zusätzlich zu Wort-Kookkurrenz-Informationen, um die relevantesten Schlüsselwörter und Phrasen zu extrahieren.

Die abstraktiven und extraktiven Techniken haben beide Vor- und Nachteile, aber durch ihre gemeinsame Verwendung können wir die Stärken jeder nutzen.
Das abstraktive Modell ist hervorragend darin, unterschiedliche, aber verwandte Details zu sammeln und ein etwas allgemeineres Thema zu finden, das zu allen passt.
Es kann jedoch niemals ein Thema vorhersagen, das es während des Trainings nicht gesehen hat, und es ist unmöglich, jedes erdenkliche Thema zu trainieren, das in einem Gespräch auftauchen könnte!
Die extraktiven Modelle hingegen können Schlüsselwörter und Themen direkt aus dem Text ziehen, was bedeutet, dass sie domänenunabhängig sind und Themen extrahieren können, die sie noch nie zuvor gesehen haben.
Der Nachteil dieses Ansatzes ist, dass die Themen manchmal zu ähnlich oder zu spezifisch sind.
Durch die Verwendung beider haben wir ein gutes Mittelmaß zwischen verallgemeinerbaren und domänenspezifischen gefunden.

## Extraktion von Aktionspunkten

<center>
<img src="/images/blog/6-seameet-voice-intelligence-meeting-transcription-summarization-topic-abstraction-action-extraction/actions.png" alt="SeaMeets Aktionspunkt-Extraktions-Engine erstellt kurze abstraktive Zusammenfassungen von Aktionspunkten, die aus Meeting-Transkriptionen extrahiert wurden"/>

*Die SeaMeet-Benutzeroberfläche, fokussiert auf den Reiter „Aktionen“ auf der rechten Seite*
</center>

Der letzte Schmerzpunkt, den wir für Benutzer lindern wollten, ist die Aufgabe, Aktionspunkte aufzuzeichnen.
Das Aufzeichnen von Aktionspunkten ist eine sehr häufige Aufgabe, die einem Mitarbeiter während eines Meetings zugewiesen wird.
Das Aufschreiben von „wer wem was wann gesagt hat“ kann extrem zeitaufwändig sein und dazu führen, dass der Schreiber abgelenkt wird und nicht vollständig am Meeting teilnehmen kann.
Durch die Automatisierung dieses Prozesses hoffen wir, einen Teil dieser Verantwortung vom Benutzer zu nehmen, damit jeder seine volle Aufmerksamkeit der Teilnahme am Meeting widmen kann.

Das Folgende ist ein Beispiel für einige Aktionspunkte, die aus dem Beispieltranskript extrahiert werden könnten:

```
Vorschlag: „Sam sagt, das Team sollte einige aktualisierte Versionen haben.“

Aussage: „Kim sagt, es wird definitiv Grenzfälle geben, in denen das nicht funktioniert.“

Imperativ: „Xuchen sagt, jemand muss dafür Regeln schreiben.“

Wunsch: „Xuchen sagt, das Team möchte, dass das Hilfsverb vorhanden ist, aber auch einige Personennamen.“
```

Der Zweck des Action Extractor Systems ist es, kurze abstraktive Zusammenfassungen von Aktionspunkten zu erstellen, die aus Meeting-Transkriptionen extrahiert wurden.
Das Ergebnis der Ausführung des Action Extractor über eine Meeting-Transkription ist eine Liste von Befehlen, Vorschlägen, Absichtserklärungen und anderen umsetzbaren Segmenten, die den Meeting-Teilnehmern als Aufgaben oder Nachverfolgungen präsentiert werden können.
In Zukunft wird der Extraktor auch die Namen der Beauftragten und Beauftragenden sowie die Fälligkeitsdaten, die mit jedem Aktionspunkt verknüpft sind, erfassen.

Die Aktionspunkt-Extraktionspipeline besteht aus zwei Hauptkomponenten: einem Klassifikator und einem Zusammenfasser.
Zuerst wird jedes Segment in einen Multi-Klassen-Klassifikator geleitet und erhält eines der folgenden Labels:

- Frage
- Imperativ
- Vorschlag
- Wunsch
- Aussage
- Nicht umsetzbar

Wenn das Segment ein anderes Label als „nicht umsetzbar“ erhält, wird es zusammen mit den beiden vorhergehenden Segmenten im Transkript an die Zusammenfassungskomponente gesendet, die mehr Kontext für die Zusammenfassung liefert.
Der Zusammenfassungsschritt ist im Wesentlichen derselbe wie die eigenständige Zusammenfassungskomponente, jedoch wird das Modell auf einem maßgeschneiderten Datensatz trainiert, der speziell für die Zusammenfassung von Aktionspunkten mit einem gewünschten Ausgabeformat erstellt wurde.

## SeaMeet bekommt ein Gehirn

Dies war ein großer Schritt zur Schaffung unseres eigenen einzigartigen Produkts: das Training von Zusammenfassungs- sowie Themen- und Aktionspunkt-Extraktionsmodellen, um unser Produkt noch weiter zu verbessern, und das Design einer schönen Benutzeroberfläche, um alles in einem atemberaubenden Paket zusammenzufassen.
Dies ist die Geschichte bisher, der Beginn der Reise von Seasalt.ai, um die besten Geschäftslösungen auf einen sich schnell entwickelnden Markt zu bringen und sie der Welt zu liefern, SeaMeet: Die Zukunft moderner Meetings.

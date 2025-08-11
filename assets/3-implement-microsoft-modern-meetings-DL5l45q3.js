const e=`---
title: "Vom Demo zum Erfolg: Implementierung von Microsofts Modern Meetings und darüber hinaus (1/5)"
metatitle: "Vom Demo zum Erfolg (1/5): Jenseits von Microsofts Modern Meetings"
date: 2021-07-19
draft: false
author: Cody Kim
description: "Verfolgen Sie im ersten Teil dieser Blog-Serie die Reise von Seasalt.ai zur Schaffung von SeaMeet, unseren kollaborativen modernen Meeting-Lösungen."
weight: 1
tags:
  - SeaMeet
image: images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/SeaMeet animation.gif
canonicalURL: /blog/microsoft-modern-meetings/
url: /blog/microsoft-modern-meetings/
---

*Verfolgen Sie in dieser Blog-Serie die Reise von Seasalt.ai zur Schaffung eines abgerundeten Modern Meetings-Erlebnisses, angefangen bei seinen bescheidenen Anfängen über die Optimierung unseres Dienstes auf verschiedenen Hardware- und Modelltypen bis hin zur Integration modernster NLP-Systeme und schließlich zur vollständigen Realisierung von SeaMeet, unseren kollaborativen modernen Meeting-Lösungen.*

### Zukunft moderner Meetings

[![Demo von Microsofts Speech-to-Text-Dienst von der MS Build 2019](/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/ms-build-play.png)](https://www.youtube.com/watch?t=100&v=EYinMnQWgfU&feature=youtu.be)

Auf der Microsoft Build 2019 begeisterte Microsoft das Publikum, als sie das Neueste ihrer Cloud-Computing-Lösungen vorstellten: die Azure Speech Services, genauer gesagt ihre Meeting-Transkriptionsanwendung. Nach ihrer Einführung landete dieser Konversationstranskriptor sofort auf jedermanns Radar und wurde in den Top-Tech-Blogs und -Zeitschriften erwähnt. Die Demonstration, die im Video unten aus dem Jahr 2019 veranschaulicht wird, zeigte viel Muskelkraft von den Azure Speech Services. Wir ahnten nicht, dass es schnell zu einem Auftakt dafür wurde, wie moderne Meetings in einer globalen Pandemie und nach der Pandemie abgehalten werden würden: von physisch über virtuell bis hin zu hybrid.

<center>
<img src="/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/azure-demo.png" alt="Live-Demo von Microsoft Azures Speech-to-Text- und Sprecheridentifikation auf der MS Build 2019"/>
</center>

Als Konversationstranskriptionsplattform beworben, etablierte Microsofts Vorzeigebeispiel für den Azure-Meeting-Transkriptionsdienst, treffend als „Die Zukunft moderner Meetings“ eingeführt, ihren neuen Dienst als robuste, effiziente Speech-to-Text (STT)-Plattform, die für alle Unternehmen geeignet ist, die nach einer Möglichkeit suchen, alle ihre wichtigen Konferenzen schnell und sauber zu erfassen.

Was macht diesen Dienst zur Spitze der Meeting-Transkription? Erstens, Echtzeitleistung. Da die Technologie immer schneller wird, wird die Geduld immer geringer, wo selbst eine Verzögerung von wenigen Sekunden mehr als genug ist, um den durchschnittlichen Benutzer zu verärgern. Doch Microsoft hat bewiesen, dass ihr Konversationstranskriptor mehr als schnell genug ist und genaue Transkriptionen schneller liefert als einige Untertitelungsdienste, was es völlig machbar macht, einem gleichzeitigen Gespräch allein mit dem Text zu folgen.

Als Nächstes zeigte Microsoft auch seine Sprecheridentifikationsfähigkeiten. Am Ende mit einem Durcheinander von unorganisiertem Konversationstext zu enden, ist frustrierend und nutzlos, aber die Sprecheridentifikation kennzeichnet automatisch jede Äußerung mit dem Sprecher und schafft so ein leicht verständliches Format.

![Benutzeroberfläche von Microsoft Azures Speech-to-Text- und Sprecheridentifikation](/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/azure-ui.png)

Jeden Tag wird die Computerhardware von Tag zu Tag leistungsfähiger und Unternehmen versuchen, jeden letzten Kern aus den neuesten CPUs und GPUs herauszuholen. Oftmals veraltet ältere Technologie und Kunden sind gezwungen, alle paar Jahre aufzurüsten, nur um in der Gesellschaft relevant zu bleiben. In „Zukunft moderner Meetings“ optimierte Microsoft den Azure Speech Service so, dass er auf handelsüblicher Hardware läuft, während die aufwändige Berechnung auf ihrer Seite bleibt, was die bereits große Bevölkerung, die von diesem Dienst profitieren kann, weiter vergrößert.

Der Meeting-Transkriptionsdienst von Azure soll die Art und Weise, wie wir Geschäfte machen, optimieren. Jede einzelne Organisation täte gut daran, ein Produkt wie dieses in ihren Arbeitsablauf zu integrieren. An einem durchschnittlichen Tag fließen ständig Informationen und jedes Bit ist genauso wichtig wie das letzte, egal ob es sich um Erinnerungen, Aufgaben oder Updates handelt. Zu oft gehen Dinge in den Ritzen verloren und das bedeutet verschwendete Zeit und verschwendete Gewinne. Was die Lösung von Microsoft bietet, ist eine vollständige, automatisch generierte Aufzeichnung, die genau darlegt, was gesagt wurde und wer es gesagt hat. Vorbei sind also die Zeiten fehlender Informationen und des blinden Suchens in langen Audioaufnahmen nach einem bestimmten Abschnitt. Jetzt sind alle Informationen, die Sie benötigen, übersichtlich für Sie angeordnet, damit Sie sie so oft wie nötig nachschlagen können. Diese Technologie ist wichtiger denn je. Wenn uns das Jahr 2020 etwas gelehrt hat, dann ist es die Notwendigkeit von Flexibilität, insbesondere am Arbeitsplatz. Menschen werden krank und unvorhergesehene Ereignisse treten ein, so dass es praktisch unmöglich ist, von den Mitarbeitern zu erwarten, an jeder Diskussion teilzunehmen. Mit Modern Meetings sind wir einen Schritt näher daran, diese unerwarteten Entwicklungen berücksichtigen zu können, indem wir im Wesentlichen jedem die Möglichkeit geben, dabei zu sein, ohne tatsächlich dabei zu sein.

### Implementierung moderner Meetings

Mitte 2020 erhielten wir eine Angebotsanfrage von einem Regierungskunden in Singapur. Ja, es war immer noch eine Pandemie. Aber Singapur hatte sie unter Kontrolle, so dass Regierungstreffen immer noch in physischen Konferenzräumen stattfanden. Sie wollten eine moderne Lösung, die Sprache von bis zu 12 verschiedenen Sprechern transkribieren kann. Darüber hinaus würde die Sprecheridentifikation hier eine wichtige Rolle spielen.

Bei der Sprecheridentifikation besteht ein wesentlicher Unterschied zwischen dem, was Azure anbietet, und dem, was der Kunde benötigt, in der „Registrierung“ der Stimme: Azure benötigt einige vorab aufgezeichnete Stimmen von allen Sprechern, um ihren Stimmabdruck im System zu registrieren. Es ist jedoch unmöglich, einige vermutlich sehr wichtige Regierungsbeamte zu bitten, sich vor ein Mikrofon zu setzen, um aufgenommen zu werden. Wir haben den Prozess angepasst, indem wir zuerst eine unbeaufsichtigte Sprechergruppierung durchgeführt haben (auch Sprecherdiarisierung genannt). Die Idee ist, dass, wenn ein Sprecher einmal in unserem System gesprochen hat, wir ihn beim nächsten Mal wiedererkennen würden.

![Flussdiagramm der Speech-to-Text- und Sprecheridentifikationsdienste von Microsoft Azure](/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/azure-diagram.png)

*Die Architektur moderner Meetings aus der [Azure Conversation Transcription](https://docs.microsoft.com/en-us/azure/cognitive-services/speech-service/conversation-transcription). In unserer Anpassung haben wir die Anforderung der „Benutzerregistrierung“ vor dem Meeting auf nach dem Meeting gelockert.*


Dann haben wir schnell unser Arsenal für das gesamte Projekt zusammengestellt. Der erste Schritt bestand darin, ein hochwertiges Mikrofonarray zu beschaffen, das kristallklare Audiodaten an unsere Erkennungsmodelle liefern würde. Wir waren sofort vom Azure Kinect begeistert: ein stilvolles 7-Mikrofon-Array in einem Vollaluminiumgehäuse mit dem zusätzlichen Bonus einer hochauflösenden Kamera und Tiefensensoren.

<center>
<img src="/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/kinect.png" alt="Das 400-Dollar-Azure-Kinect-DK wird für moderne Meetings verwendet"/>

*Das 400-Dollar-Azure-Kinect-DK wird für moderne Meetings verwendet*
</center>

Allein vom Aussehen her ist dies ein wirklich ausgeklügeltes Gerät, das jeden Konferenzraum ergänzen würde, aber noch wichtiger ist, dass das leistungsstarke Mikrofonarray die Qualität versprach, die wir suchten. Mit der kreisförmigen Anordnung eröffneten die sieben Mikrofone die Möglichkeit, modernste Signalverarbeitungstechniken wie Quellenlokalisierung und Beamforming zu verwenden. Dieses Mikrofon war auch die perfekte Ergänzung zu unserem Backend, das die Speech Services von Azure nutzte, eine etablierte Speech-to-Text-Plattform, die unserem Produkt die Leistung verlieh, die es benötigte, um ein erstklassiger Meeting-Transkriptor zu sein.

<center>
<img src="/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/kinect-spec.png" alt="Das Azure Kinect DK verfügt über ein 7-Mikrofon-Array zur Aufnahme von Stimmen"/>

*Das Azure Kinect DK verfügt über ein 7-Mikrofon-Array zur Aufnahme von Stimmen*
</center>

Obwohl Azure es nicht in die Endversion von SeaMeet geschafft hat, gab es uns den Start, den wir brauchten, um unsere Vision zu verwirklichen. Schließlich haben wir das alles mit einer Benutzeroberfläche verbunden. In unserer ersten Iteration begnügten wir uns mit einem generischen, Java-basierten Design, das zwar schlicht, aber voll funktionsfähig war. Da das Kinect-Gerät keinen externen Code ausführen kann, musste all dies auf einem zusätzlichen einzelnen Windows-Laptop ausgeführt werden. Obwohl es anfangs etwas grob war, waren wir stolz darauf, ein voll funktionsfähiges Meeting-Transkriptionsprodukt zu haben.

<center>
<img src="/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/seameet-old.png" alt="Ersteinrichtung des SeaMeet-Dienstes von Seasalt.ai mit einem Microsoft Kinect-Mikrofonarray"/>

*Implementierung moderner Meetings mit Azure Kinect und einem Windows-Computer, auf dem eine einfache Java-basierte Benutzeroberfläche zur Anzeige von Echtzeit-Meeting-Transkription und Sprecheridentifikation ausgeführt wird.*
</center>

### Bereitstellung moderner Meetings

Im Mai 2021 kamen unsere Ingenieure nach Singapur, um unsere moderne Geschäftslösung als Proof of Concept bereitzustellen. Gegen zwei andere Konkurrenzunternehmen angetreten, hatten wir jeweils die Aufgabe, unsere Vision von der Zukunft der Meetings zu demonstrieren.

Trotz der Tatsache, dass drahtlos im letzten Jahrzehnt zur Norm geworden war, stellten wir fest, dass unsere Konkurrenten sich immer noch für eine kabelgebundene Lösung entschieden. Wie Sie auf dem Bild sehen können, war jeder der 12 Sprecher an ein einzelnes Mikrofon gebunden. Ein Sprecher musste direkt in das Mikrofon sprechen, damit das System seine Stimme aufnahm. Dies behindert nicht nur die Flexibilität erheblich, sondern eine solche Einrichtung vervielfacht auch die Komplexität mit komplizierten AV-Geräten. Unsere Lösung hingegen wird dank des 7-Mikrofon-Arrays und der Signalverarbeitungsalgorithmen vollständig von Fernfeld-Fähigkeiten angetrieben.

In gewissem Maße war unsere Lösung sehr ähnlich wie „Alexa für Unternehmen“: Ein Gerät deckt den gesamten Raum ab, wobei nur ein Stromkabel erforderlich ist. Im Vergleich zur Lösung unserer Wettbewerber ist unsere Lösung Generationen voraus in dem Sinne, dass wir die Bedürfnisse moderner Unternehmen wirklich verstehen, während sie immer noch vollständig in der veralteten kabelgebundenen Generation gefangen sind.

<center>
<img src="/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/poc-setup.png"/>

*PoC-Konferenzraum-Setup. Es gab 12 Sprecher, die ein 2-stündiges Regierungstreffen simulierten.*

<img src="/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/poc-captioned.png"/>

*Eine Nahaufnahme aller Geräte vor Ort.*
</center>

Das Team war begeistert, den großen Unterschied zu sehen. Mit ein paar Stunden Feinabstimmung verlief der endgültige PoC sehr reibungslos. Das Team genoss nach dem PoC auch eine Tour durch Singapur, in einem Land, in dem Covid-19 streng eingedämmt wurde, so dass das Leben und die Geschäfte wie gewohnt liefen.

### Jenseits moderner Meetings

Während unserer Zeit in Singapur gingen unsere Gedanken über einen erfolgreichen PoC hinaus: Im Vergleich zu anderen konkurrierenden Lösungen war unsere 10x besser. Aber wie könnten wir uns selbst um das 10-fache verbessern? Bitte folgen Sie unseren Schritten zum nächsten Blog in dieser Serie.

`;export{e as default};

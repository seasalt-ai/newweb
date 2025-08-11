const e=`---
title: "Vom Demo zum Erfolg: Jenseits der Hardware (5/5)"
metatitle: "Vom Demo zum Erfolg (5/5): Jenseits der Hardware"
date: 2021-09-15 17:24:32-07:00
modified_date: 2025-07-28T16:56:53Z
draft: false
author: Cody Kim
description: "Im letzten Teil dieser Blog-Serie verfolgen Sie die Reise von Seasalt.ai zur Entwicklung von SeaMeet, unseren kollaborativen modernen Meeting-Lösungen."
weight: 1
tags:
  - SeaMeet
image: images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/SeaMeet animation.gif
canonicalURL: /blog/seameet-voice-hardware/
url: /blog/seameet-voice-hardware/
---

*In dieser Blog-Serie verfolgen Sie die Reise von Seasalt.ai zur Entwicklung einer umfassenden Modern Meetings Experience, beginnend mit ihren bescheidenen Anfängen, über die Optimierung unseres Dienstes auf verschiedenen Hardware- und Modellen, bis hin zur Integration modernster NLP-Systeme und schließlich zur vollständigen Realisierung von SeaMeet, unseren kollaborativen modernen Meeting-Lösungen.*

## Jenseits moderner Meetings

Hier bei Seasalt.ai bewunderten wir die aktuellen Fähigkeiten, die die Build 2019-Demo dieses Produkts zeigte, aber wir sind mehr daran interessiert zu sehen, was aus diesem Produkt werden könnte, wie man die Konversationstranskription über die Nachahmung hinausführt. Doch bevor man die Konkurrenz schlagen kann, muss man das Spiel, das man spielt, genau verstehen. Und so wurde SeaMeet geboren. In seinen Anfängen orientierten wir uns an Azure als Modell, um die Grundlagen eines soliden Transkriptionsdienstes zu erfassen, und nutzten die Azure Speech Services als unser Backend, um diese etablierte Technologie zu nutzen.

Wie bei jedem jungen Produkt traten sofort Herausforderungen auf. Um unser Produkt schnell auf den Markt zu bringen, entschieden wir uns für die Verwendung des Microsoft Kinect DK-Mikrofonarrays, das als Hardware-Gegenstück zu den Sprachdiensten beworben wurde und angeblich so abgestimmt war, dass es die optimale Leistung aus den automatischen Spracherkennungsmodellen von Azure herausholt. Obwohl es sich um ein unbestreitbar gut konstruiertes, gut gestaltetes Gerät handelt, verfügt es über ein vollständiges Aluminiumgehäuse, ein Weitwinkelobjektiv, eine Tiefenkamera und ein 7-Mikrofonarray. Es hat auch einen stattlichen Preis von knapp 400 US-Dollar. Ab April 2021 hatte das Kinect DK ein ernsthaftes Problem mit der Unterversorgung. Es ist bis heute, September 2021, immer noch nicht auf Lager. Dies bestätigte uns zusätzlich, dass das Kinect nicht das richtige Gerät für uns ist.

<center>
<img src="/images/blog/7-seameet-voice-intelligence-meeting-transcription-hardware/kinect_store_page.png"/>

*Das Azure Kinect DK war seit dem 2021/4 nicht mehr auf Lager, als dieser Artikel veröffentlicht wurde (2021/9)*
</center>

Das Mikrofonarray ist die erste Komponente in der Konversationstranskriptionspipeline. Als Anbieter eines Transkriptionsdienstes müssen wir in der Lage sein, unsere Hardware nachhaltig und zuverlässig zu beschaffen.

Unsere Suche nach dem perfekten Mikrofonarray führte uns zu zwei Optionen: dem [Respeaker Array v2.0](https://www.seeedstudio.com/ReSpeaker-Mic-Array-v2-0.html) und dem [Respeaker Core v2.0](https://www.seeedstudio.com/ReSpeaker-Core-v2-0.html). Beide Geräte sind kreisförmige Arrays mit vier bzw. sechs Mikrofonen, was ein entscheidendes Merkmal ist, um eine 360-Grad-Quellenlokalisierung durchführen zu können und uns die einfache Integration dieser neuen Geräte in unser bestehendes System zu ermöglichen. Die wahre Schönheit dieser Geräte liegt darin, dass sie über integrierte Signalverarbeitungsalgorithmen verfügen, einschließlich Rauschunterdrückung, Echounterdrückung und Beamforming, die perfekt auf die Abmessungen des Mikrofons abgestimmt sind.

<center>
<img src="/images/blog/7-seameet-voice-intelligence-meeting-transcription-hardware/respeaker_array.png" alt="Respeaker Array v2.0 demonstriert VAD und Quellenlokalisierung"/>

*Respeaker Array v2.0 demonstriert VAD und Quellenlokalisierung*
</center>

<center>
<img src="/images/blog/7-seameet-voice-intelligence-meeting-transcription-hardware/array_demo.jpg" alt="Live-Meeting-Demo mit dem Respeaker Array v2.0"/>

*Live-Meeting-Demo mit dem Respeaker Array v2.0*
</center>

Für das vier Mikrofon Array v2.0, das vollständig über einen USB-Anschluss mit Strom versorgt wurde, bedeutete dies, dass sich der Computer des Benutzers nur auf das Streamen des Audios an den Server konzentrieren musste. Dies entlastet die Signalverarbeitung auf das Mikrofonarray.


<center>
<img src="/images/blog/7-seameet-voice-intelligence-meeting-transcription-hardware/core_demo.png" alt="Respeaker Core v2.0 mit Demo abgebildet"/>

*Respeaker Core v2.0 mit Demo abgebildet*
</center>

Noch überzeugender ist der Core v2.0, ausgestattet mit einem ARM-Prozessor und 1 GB RAM. Er ist in der Lage, eine vollständige Linux-Distribution auszuführen und verfügt über mehr als genug Rechenleistung, um unser Client-Skript auszuführen. Mit diesem Gerät haben wir nicht nur die Verarbeitung vom Computer des Benutzers ausgelagert, sondern auch die Notwendigkeit, einen Computer an das Mikrofon anzuschließen, vollständig beseitigt. Da die Mikrofonarrays nun die aufwendige Verarbeitung übernehmen, haben wir die Hardwareanforderungen für den Betrieb unseres Produkts reduziert und somit effektiv unser Publikum erweitert, das von SeaMeet profitieren kann.

<center>
<img src="/images/blog/7-seameet-voice-intelligence-meeting-transcription-hardware/respeaker_core.png" alt="Core v2.0 Beispiel für die Platzierung eines eigenständigen Mikrofons"/>

*Core v2.0 Beispiel für die Platzierung eines eigenständigen Mikrofons*
</center>

Ein weiteres einzigartiges Merkmal dieser Mikrofonarrays ist das Fehlen eines Gehäuses. Beide werden als blanke PCBs mit freiliegenden Mikrofonen, Chips und Anschlüssen geliefert. Während viele dies als Unannehmlichkeit empfinden werden, sehen wir darin eine Gelegenheit, ein wirklich einzigartiges Gerät zu schaffen, das unverkennbar Seasalt gehört.

    Mit diesen Geräten schließen wir unseren Prototyp von SeaMeet ab, unserem brandneuen, hochmodernen Meeting-Transkriptionsdienst. Und damit schließen wir unsere fünfteilige Serie ab, beginnend mit SeaMeet, das nichts als ein Samen war, inspiriert von einer Microsoft-Demo, und endend mit einem vollständig unabhängigen Produkt. Noch in den Anfängen, hat SeaMeet eine aufregende Reise vor sich, während wir unser Diarisierungssystem, Meeting Sense und Sprachmodelle weiter verfeinern. Das Team von Seasalt.ai ist bestrebt, die Art und Weise, wie die Welt Geschäfte macht, weiterhin zu revolutionieren.
`;export{e as default};

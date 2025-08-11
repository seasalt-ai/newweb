const e=`---
title: "Text-to-Speech auf Discord: Eine TTS Discord Bot Fallstudie"
metatitle: "Text-to-Speech auf Discord: Eine TTS Discord Bot Fallstudie"
date: 2022-12-27 17:04:20-08:00
modified_date: 2025-07-29 20:45:17+00:00
author: Kim Dodds
description: "In diesem Blog werden wir unsere Erkenntnisse darüber diskutieren, wie echte Discord-Benutzer unsere Dienste nutzen, nachdem wir mehrere Monate authentischer Text-to-Speech-Daten überprüft haben."
weight: 1
tags:
  - SeaVoice
  - Discord
image: images/blog/29-tts-case-study/discord-tts-accessibility.jpg
url: /blog/discord-tts-case-study/
---


*Nach der Einführung von SeaVoice, einem der schnellsten und genauesten Text-to-Speech- und Speech-to-Text-Bots auf Discord, wollten wir verstehen, wie Benutzer tatsächlich mit den Diensten interagieren. In diesem Blog werden wir unsere Erkenntnisse nach der Überprüfung mehrerer Monate realer Text-to-Speech-Benutzerdaten diskutieren.*

# SeaVoice: Ein Text-to-Speech- & Speech-to-Text-Discord-Bot

Discord, als Plattform, die hauptsächlich für eine Kombination aus Audio- und Text-basiertem Chat verwendet wird, ist ein fantastisches Testgelände für Sprachintelligenz- und natürliche Sprachverarbeitungsdienste.
Wir haben den SeaVoice Bot, ausgestattet mit Text-to-Speech- und Speech-to-Text-Befehlen, im August 2022 auf Discord bereitgestellt.
Um mehr darüber zu erfahren, wie der Bot funktioniert, oder ein kurzes Video-Demo zu sehen, können Sie das [SeaVoice Discord Bot Wiki](https://wiki.seasalt.ai/seavoice/discord/6-community/) besuchen.
Im November desselben Jahres haben wir eine neue Version mit signifikanten Backend-Verbesserungen veröffentlicht (wie in unserem vorherigen Blogbeitrag beschrieben: [SeaVoice Discord Bot: Backend- & Stabilitätsverbesserungen](https://seasalt.ai/blog/27-seavoice-discord-backend-improvements/)), die es uns ermöglichen, anonyme Daten darüber aufzuzeichnen, wie Benutzer mit dem SeaVoice Bot interagieren.
In diesem Blog werden wir uns 1 Monat Benutzerdaten vom Text-to-Speech-Befehl ansehen.

## SeaVoice TTS-Nutzung

<center>
<img src="/images/blog/29-tts-case-study/discord-tts-usage.jpg" alt="Tägliche Text-to-Speech-Nutzung des SeaVoice Discord Bots über 7 Wochen."/>

*Tägliche Text-to-Speech-Nutzung des SeaVoice Discord Bots über 7 Wochen.*
</center>

Zum Zeitpunkt des Schreibens wurde der SeaVoice Bot zu fast 800 Servern hinzugefügt!
Seit wir im November mit der Aufzeichnung der Nutzungsdaten begonnen haben, haben wir festgestellt, dass die Gesamtzahl der Anfragen pro Tag von nur 150 auf über 1.300 schwanken kann (mit einem Durchschnitt von etwa 560).
Etwa 650 Benutzer haben den TTS-Befehl mindestens einmal ausprobiert.
Die meisten Benutzer verwenden ihn jedoch nach dem Ausprobieren nicht mehr regelmäßig.
Von diesen 650 Benutzern, die den TTS-Befehl ausprobiert haben, verwendeten ihn etwa 200 20 Mal oder öfter, und nur 100 verwendeten ihn 50 Mal oder öfter.
Das heißt, diejenigen, die den TTS-Befehl genießen und sich darauf verlassen, nutzen ihn ausgiebig!
Unsere Top-5-Benutzer haben in den letzten zwei Monaten jeweils über 1.000 Anfragen eingereicht, und der Top-Benutzer hat allein fast 2.500 Anfragen eingereicht!

## Beobachtungen

### Warum Menschen Text-to-Speech verwenden

<center>
<img src="/images/blog/29-tts-case-study/why-mute-on-discord.jpg" alt="Gründe, warum Benutzer des SeaVoice Discord Bots Text-to-Speech verwenden."/>

*Gründe, warum Benutzer des SeaVoice Discord Bots Text-to-Speech verwenden.*
</center>

Unsere erste Frage nach dem Betrachten der Nutzungsdaten ist: **Warum nutzen die häufigen Benutzer TTS überhaupt?**
Wir haben die Datenbank durchsucht, um einige Erklärungen zu finden.
Im Folgenden sind echte TTS-Befehle von einigen unserer Benutzer aufgeführt.

__*Warum sprichst du nicht?*__

    - außerdem kann ich nicht sprechen, weil ich esse
    - Ich würde tatsächlich sprechen, aber ich bin im Moment bei der Arbeit.
    - wenn ich spreche, wecke ich meine Familie auf
    - Entschuldigung, werde nicht viel reden. Der Hals tut sehr weh.
    - Ich könnte sprechen, aber meine Mutter ist hier
    - Ich bin heute zu faul zum Reden
    - Ich kann nicht sprechen, weil ich krank bin, aber ich wollte trotzdem mitmachen :)
    - nicht ganz stumm, es erfordert einfach Anstrengung zu sprechen. An manchen Tagen viel Anstrengung
    - Entschuldigung, ich bin stummgeschaltet, meine Oma telefoniert und es ist laut
    - Weil mein Mikrofon kaputt war

Nachdem wir diese Erklärungen gefunden haben, können wir sie in einige Hauptgründe zusammenfassen:
- es gibt eine physische Barriere (kaputtes Mikrofon, Sprechschwierigkeiten, Krankheit usw.),
- sie sind mit etwas anderem beschäftigt (Essen, Arbeit usw.),
- ihre Umgebung ist zu laut oder sie müssen leise sein, oder
- weil es bequem ist und sie es gerne benutzen.

Aber unabhängig vom genauen Grund, warum sie den TTS-Dienst nutzen, äußerten viele Benutzer ihre Begeisterung darüber, dass sie an den Sprachkanal-Gesprächen teilnehmen konnten, obwohl sie es sonst nicht könnten.
Wir glauben, dass der TTS-Dienst Discord-Sprachkanäle zugänglicher macht, und das ist der Hauptgrund, warum unsere Stammbenutzer den Dienst weiterhin nutzen.

### Sprachnutzung

Eine Sache, die mir beim Überprüfen der Gespräche auffiel, war, dass viele Benutzer versuchten, den Text-to-Speech-Befehl mit verschiedenen Sprachen zu verwenden.
Während einige Benutzer nur sehen wollten, ob es funktionieren würde oder die Aussprache lustig fanden, nutzten andere jedoch weiterhin TTS in nicht-englischen Sprachen über längere Zeiträume hinweg!

<center>
<img src="/images/blog/29-tts-case-study/discord-spanish-tts-test.png" alt="Ein Benutzer testet die spanische Aussprache des englischen SeaVoice TTS-Modells."/>

*Ein Benutzer testet die spanische Aussprache des englischen SeaVoice TTS-Modells.*
</center>

Dies war insbesondere bei spanischsprachigen Personen der Fall, obwohl (wie der oben genannte Benutzer bemerkt) die TTS-Leistung für Spanisch nicht gut ist, da das Modell nur auf Englisch trainiert wurde.
Ich begann, jedes Mal zu notieren, wenn ich einen Benutzer traf, der versuchte, den TTS-Befehl in einer anderen Sprache als Englisch zu verwenden.

<center>
<img src="/images/blog/29-tts-case-study/discord-non-english-tts.jpg" alt="Anzahl der Versuche, nicht-englische Anfragen an TTS zu senden."/>

*Anzahl der Versuche, nicht-englische Anfragen an TTS zu senden.*
</center>

Die obige Tabelle zeigt die Anzahl jeder Konversation, die ich gefunden habe und die mindestens eine Instanz enthielt, in der jemand die entsprechende Sprache im TTS-Befehl verwendete.
Offensichtlich ist Spanisch bei weitem am häufigsten, und in Verbindung mit der Tatsache, dass viele Benutzer die TTS-Funktion auf Spanisch weiterhin nutzten, obwohl die Leistung schlecht war, frage ich mich, ob es auf Discord keine praktikable Alternative für spanisches TTS gibt.
In beiden Fällen versuchen die Leute, unseren TTS-Dienst für andere Sprachen zu nutzen, sodass wir verfolgen können, welche Sprachen am gefragtesten sind, und diese Daten verwenden können, um unser Training neuer Modelle zu informieren.

### Kommentare zum Bot

Ein weiteres interessantes Thema, das in den Protokollen gefunden wurde, waren Kommentare zum Bot selbst.
Glücklicherweise sahen wir mehrere sehr positive Kommentare zum Bot und seiner Leistung.

<center>
<img src="/images/blog/29-tts-case-study/discord-tts-inclusive-accessibility-user-comment.png" alt="Ein Benutzer kommentiert, dass der Bot ihm das Gefühl gibt, mehr dazuzugehören."/>

*Ein Benutzer kommentiert, dass der Bot ihm das Gefühl gibt, mehr dazuzugehören.*
</center>

Die berührendsten Kommentare stammten von denen, die sich von Sprachkanälen ausgeschlossen fühlten, aber jetzt dank der zusätzlichen Barrierefreiheit, die der Bot bietet, teilnehmen können.

Wir fanden auch einige konstruktive Rückmeldungen.

<center>
<img src="/images/blog/29-tts-case-study/discord-tts-speed.png" alt="Ein Benutzer kommentiert, dass die Geschwindigkeit des TTS ein Problem ist."/>

*Ein Benutzer kommentiert, dass die Geschwindigkeit des TTS ein Problem ist.*
</center>

Ein Benutzer erwähnte, dass TTS langsamer ist als normales Sprechen, da Benutzer zuerst den ganzen Satz eingeben und dann senden müssen, sodass ihre TTS-Äußerung manchmal etwas spät im Gespräch gesprochen wird.
Wie im vorherigen Abschnitt erwähnt, sahen wir auch Anfragen nach zusätzlicher Sprachunterstützung sowie einen Benutzer, der hoffte, mit dem Bot zwischen Sprachen übersetzen zu können.
Die Beobachtung dieser Art von Feedback wird uns helfen, Funktionen für die Zukunft zu planen und zu verbessern.

### Neuheit

Nachdem ich die gesamte Sammlung von TTS-Befehlen überflogen habe, würde ich sagen, dass etwa zwei Drittel der Äußerungen in allgemeinen Gesprächen mit Freunden und anderen Leuten auf dem Server verwendet werden.
Die meisten Leute spielen Spiele und chatten einfach mit ihren Freunden, und diese Benutzer neigen dazu, den TTS-Dienst regelmäßig zu nutzen.
Auf der anderen Seite fällt das restliche Drittel der Äußerungen in die Kategorie „einfach nur herumalbern“.
Wenn man die volle Macht hat, eine Stimme sagen zu lassen, was man will, glaube ich, dass es menschliche Natur ist, das albernste oder obszönste Ding zu wählen, das man sich vorstellen kann, nur um zu lachen.
Ich erinnere mich, wie ich im Computerraum der Grundschule saß und stundenlang von Microsoft Sam (damals sehr Hightech) unterhalten wurde, um zu sehen, ob wir ihn dazu bringen konnten, Dinge wie „Kacke“ oder „Arsch“ zu sagen.
Nun, ich nehme an, Kinder wie ich sind erwachsen geworden, haben einen reicheren Wortschatz erworben und fanden schließlich die gleiche Unterhaltung mit unserem TTS-Dienst auf Discord.

<center>
<img src="/images/blog/29-tts-case-study/discord-tts-stress-test.png" alt="Beispiele für seltsame TTS-Anfragen, die von Benutzern gesendet wurden."/>

*Beispiele für seltsame TTS-Anfragen, die von Benutzern gesendet wurden.*
</center>

Manchmal versuchen Benutzer einfach, den Bot zu zerstören, indem sie Dinge wie: übermäßig lange Zeichenketten, Sonderzeichen, Emojis, URLs usw. eingeben.
Dies ist ein klassisches Beispiel dafür, wie Menschen die Grenzen der Software testen, und hilft uns tatsächlich sicherzustellen, dass unsere Dienste robust sind und jede Eingabe, die Benutzer ihnen geben, verarbeiten können.

Andere Male finden Benutzer Unterhaltung, indem sie den TTS-Dienst die obszönsten und beleidigendsten Dinge sagen lassen, die sie sich ausdenken können.
In den TTS-Protokollen sah ich, glaube ich, jedes Schimpfwort, das ich kenne (und vielleicht einige, die ich noch nie zuvor gehört habe), rassistische Beleidigungen und explizite sexuelle Inhalte.

## Die Frage der Ethik

Leider gibt es viele Möglichkeiten, wie eine Text-to-Speech-Anwendung unangenehm verwendet werden kann: zum Beispiel zur Förderung von Hassreden oder Cybermobbing.
Obwohl die Audioclips aus einem Modell synthetisiert werden, stammen die Daten zum Trainieren des Modells von einer realen Person, und die Ausgabe eines guten Modells kann fast nicht vom Original zu unterscheiden sein.

Diese Punkte, gepaart mit der Art und Weise, wie wir gesehen haben, wie echte Benutzer unseren TTS-Dienst nutzen (oder missbrauchen), werfen einige sehr wichtige Fragen für Seasalt.ai als Unternehmen und den SeaVoice Discord Bot auf:

- *Wollen wir als Unternehmen, dass unser Produkt potenziell beleidigend oder schädlich verwendet wird?*
- *Welche Rechte haben Synchronsprecher darüber, wie ihre Stimme in Text-to-Speech-Anwendungen verwendet wird?*
- *Haben wir das Recht oder die Verantwortung, die Nutzung unseres Dienstes zu zensieren?*

Diese Fragen können in einem einzigen Blogbeitrag nicht beantwortet oder gar vollständig untersucht werden.
Das Unternehmen fühlt sich jedoch verpflichtet, diese Probleme kontinuierlich zu berücksichtigen, während wir unser Discord-Projekt vorantreiben und weiterhin mit unseren Synchronsprechern zusammenarbeiten.

Vielen Dank für Ihr Interesse an unserem Discord Bot und unseren Voice Intelligence-Projekten! Weitere Informationen zu unserem STT-Produkt finden Sie auf unserer [Speech-to-Text-Homepage](https://suite.seasalt.ai/tts). Für eine persönliche Demo unserer Voice Intelligence-Produkte füllen Sie das [Demo-Buchungsformular](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting) aus.

Auf der Discord-Seite können Sie mehr über unseren Bot erfahren und ihn Ihrem Server hinzufügen, indem Sie das [SeaVoice Discord Bot Wiki](https://wiki.seasalt.ai/seavoice/discord/6-community/) besuchen. Treten Sie auch gerne unserem [offiziellen SeaVoice Discord Server](https://discord.gg/dfAYfwBQ) bei.

<center>
<iframe src="https://discordapp.com/widget?id=919037515514654721&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
</center>
`;export{e as default};

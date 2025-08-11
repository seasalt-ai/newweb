const e=`---
title: "Kundenservice bei United Airlines: das Gute, das Schlechte und das Hässliche"
metatitle: "Analyse des Kundenservice bei United Airlines"
date: 2023-03-21 11:25:00-08:00
modified_date: 2025-07-28T16:56:53Z
draft: false
author: Xuchen Yao
description: "Xuchen Yao teilt seine jüngsten Erfahrungen mit dem Kundenservice von United Airlines während Flugverspätungen und -ausfällen und schlägt Lösungen vor, um die Herausforderung der dynamischen Skalierung des Kundensupports bei hohem Verkehrsaufkommen zu bewältigen."
weight: 1
tags:
  - SeaX
image: images/blog/31-cx-at-united-airlines/flight-delay-illustration.png
canonicalURL: /blog/customer-service-at-united-airlines/
url: /blog/customer-service-at-united-airlines/
---

*[Seasalt.ai](https://seasalt.ai) CEO, Xuchen Yao, teilt seine jüngsten Erfahrungen mit dem Kundenservice von United Airlines nach Flugverspätungen und -ausfällen. Dies führte ihn zu der Erkenntnis, welche Herausforderungen der Kundenservice von Fluggesellschaften bei der dynamischen Skalierung zur Bewältigung von Verkehrsspitzen in solchen Situationen hat. Xuchen spricht über mögliche Verbesserungen wie die Umleitung von selbstbedienbaren Anfragen von menschlichen Agenten, die Verbesserung der Effizienz menschlicher Agenten und die Entwicklung von Technologien zur proaktiven Identifizierung und Risikominimierung potenzieller Probleme.*

Dieser Blog wurde am 22.03.2023 auf dem UA2-Flug von Singapur nach San Francisco geschrieben.

Ich hatte kürzlich das Vergnügen, den Flug UA1 von San Francisco (SFO) nach Singapur (SIN) zu nehmen. Das Vergnügen wurde schnell zu einem Unglück aufgrund von Flugausfällen. Hier sind die Erkenntnisse über den Kundenservice von United aus der Sicht eines Technologen, der Contact Center aufbaut.



# Ein Flug mit zwei Verzögerungen: verspätet und annulliert

Hier war der Plan für die Reise nach Singapur von Seattle am Dienstag, den 14.03.2023:

<center>
<img src="/images/blog/31-cx-at-united-airlines/united-flights.png" alt="Meine geplanten United-Flüge"/>

*7:29 Uhr – 09:42 Uhr, von Seattle (SEA) nach San Francisco (SFO) mit UA2368. 11:50 Uhr – 08:15 Uhr, von San Francisco (SFO) nach Singapur (SIN) mit UA29.*
</center>

Leider habe ich keinen der Flüge genommen.

Der erste Flug verspätete sich um 1,5 Stunden aufgrund eines Staus am Flughafen Seattle (um 7 Uhr morgens!). Das reduzierte meine Übergangszeit in SFO auf 0. Ich sprach mit dem Bodendienst in SEA und sie buchten mich auf einen Alaska-Flug von SEA nach SFO um. Dieser Alaska-Flug verspätete sich ebenfalls, erreichte aber SFO um 11 Uhr, was mir kaum genug Zeit gab, den nächsten Flug zu erreichen.

**DAS GUTE**: United ließ mich meinen Flug kostenlos auf Alaska umbuchen.

**DAS GUTE**: United war sehr proaktiv bei den Verzögerungen über einen „26266“-Kurzcode. Als die Verzögerung eintrat, bot es sogar Optionen zur Umbuchung meiner Flüge an.

**DAS SCHLECHTE**: Die Option zur Flugumbuchung ist nur auf United-Flüge beschränkt. Keine Umbuchung zwischen Fluggesellschaften. Ich musste mit einem Menschen sprechen, um auf einen anderen Flug umgebucht zu werden.

**DAS HÄSSLICHE**: Warum war der Flughafen SEA um 7 Uhr morgens so verstopft?!

<center>
<table>
  <tr>
    <td><img src="/images/blog/31-cx-at-united-airlines/united-text-support-1.jpg" alt="United Textnachrichten-Support - 1"/></td>
    <td><img src="/images/blog/31-cx-at-united-airlines/united-text-support-2.jpg" alt="United Textnachrichten-Support - 2"/></td>
  </tr>
 </table>

*Das Kurzcode-Nachrichtensystem von United Airlines ist zeitnah und proaktiv.*
</center>


1. Was interessant war, war **auf** UA1. Wir blieben 3 Stunden am Boden und schließlich wurde der Flug aufgrund der folgenden Ereignisse annulliert:
2. Zuerst hatte San Francisco wirklich starken Wind, so dass alle Flüge am Boden blieben.
Dann, als die Freigabe zum Fliegen erteilt wurde, warteten alle Flugzeuge in einer sehr langen Schlange auf die Abfertigung.
3. Schließlich, als wir fast an der Reihe waren, sagten die Piloten, dass sie Überstunden machten und gemäß den FAA-Vorschriften es illegal sei, weiterzufliegen. Da der Flug nach Singapur 17 Stunden dauerte und angesichts der Zeit, die sie am Boden verbrachten, hätten sie die Grenze bis zur Ankunft in Singapur überschritten.

Leider gab es keine Ersatzpiloten, so dass der gesamte Flug annulliert wurde.

**DAS HÄSSLICHE**: Während der gesamten 3 Stunden am Boden bot United 2 Kekse an. Das war's.

Alle stürmten aus dem Flugzeug und dachten darüber nach, wie sich dies auf ihre Reise auswirkte. Da es sich um einen internationalen Flug handelte, wären wir an einem anderen Tag in Singapur angekommen. Nicht am nächsten Tag, sondern tatsächlich zwei Tage später: weil Singapur 15 Stunden voraus ist und der Flug 17 Stunden dauert.

Dann rannten etwa 300 Passagiere zum Bodendienst von United. Als ich den United Kundenservice erreichte, standen bereits etwa 200 Leute vor mir in der Schlange. Viele von ihnen waren aufgrund des Wetters von anderen Flügen, die von United durchgeführt wurden, betroffen.

Angesichts der langsamen Bewegung der Schlange wäre es hoffnungslos gewesen, mit einem Bodenagenten zu sprechen. Ich weiß, dass es am selben Tag einen weiteren Flug um 23 Uhr nach Singapur gibt, ebenfalls von United. Meine Hoffnung ist, auf diesen Flug um 23 Uhr umgebucht zu werden. Wahrscheinlich wollten viele Leute von meinem Flug dasselbe tun, standen aber alle in der Schlange wie ich.

Das habe ich getan:

1. Ich rief United telefonisch an: 800-864-8331
2. Ich schrieb dem virtuellen Agenten von United eine SMS über den Kurzcode: 32050.
3. Ich nutzte die United-Website, um zu versuchen, per Video-Chat mit dem Agenten zu sprechen.
4. Ich stand auch in der Schlange für einen Bodenagenten.

Ich war buchstäblich ein **Cross-Channel**-Kunde, als ich ein wichtiges und dringendes Problem sofort lösen musste.


**DAS GUTE**: United bot 4 verschiedene Möglichkeiten, mit ihrem Kundenservice in Kontakt zu treten.

**DAS GUTE**: Durch die Bestätigung der Flugnummer konnte United den Status abrufen und wusste, dass er betroffen war, und bot Umbuchungs-/Stornierungsoptionen an.

**DAS SCHLECHTE**: Die geschätzte Wartezeit am Telefon war weit daneben. Es wurde mir gesagt, die Wartezeit betrage 2 Minuten, aber ich wartete 45 Minuten, um mit einem Agenten zu sprechen.

**DAS SCHLECHTE**: Der Chatbot ist sehr dumm. Ich musste seinen „Menüs“ folgen, indem ich 1/2/3/4 oder A/B/C/D/E als Antworten drückte.

<center>
<table>
  <tr>
    <td><img src="/images/blog/31-cx-at-united-airlines/united-text-support-3.jpg" alt="United Textnachrichten-Support - 3"/></td>
    <td><img src="/images/blog/31-cx-at-united-airlines/united-text-support-4.jpg" alt="United Textnachrichten-Support - 4"/></td>
    <td><img src="/images/blog/31-cx-at-united-airlines/united-text-support-5.jpg" alt="United Textnachrichten-Support - 5"/></td>
  </tr>
 </table>

*Der Chatbot von United Airlines verwendet eine Technologie der letzten Generation, die eine Menükarte anbietet, um die Eingaben der Passagiere zu begrenzen.*
</center>


**DAS HÄSSLICHE**: Es waren buchstäblich weniger als 10 Kundendienstmitarbeiter am Boden, um über 1000 betroffene Passagiere zu betreuen. Dies führte zu Angst, Wut, Hilflosigkeit und Druck sowohl bei Kunden als auch bei Agenten. Dies liegt daran, dass, als unser Flug annulliert wurde, der Bodendienst und die Flugbegleiter allen sagten, sie sollten sich an ihren Bodendienst wenden. **Die Anweisung an jeden betroffenen Passagier, sich an die weniger als 10 Kundendienstmitarbeiter am Boden zu wenden, führte zu einem physischen „DDOS“-Angriff auf den Bodendienst von United.**

DDOS steht für „Distributed Denial of Service“, wenn Hacker den Datenverkehr von Millionen von Orten auf eine einzige Website lenken, um diese für alle Dienste unerreichbar zu machen.

**DAS HÄSSLICHE**: Ich habe 4 Kanäle genutzt, um mit United zu sprechen (Text, Video-Chat, Telefonanruf, Boden). Ich habe 4-mal mehr Ressourcen verbraucht, und jeder andere hätte dasselbe tun können. Dies erhöhte künstlich den Datenverkehr und den Druck auf den United-Kundenservice um das 4-fache. Ich nehme an, jeder andere Passagier tat dasselbe, denn das erklärt, warum meine „Wartezeit von 2 Minuten“ schließlich 45 Minuten betrug.

Schließlich wurde ich telefonisch verbunden, und der Agent verbrachte etwa 20 Minuten damit, mich auf einen späteren Flug um 23 Uhr nach Singapur am selben Tag umzubuchen. Als ich fertig war, stand ich immer noch in der Video-Chat-Warteschlange, beschäftigte mich mit dem Chatbot (ironischerweise heißt er Liveperson) und stand offensichtlich physisch in der Schlange.

Ich sagte einem jungen Mann, der hinter mir im selben Flug stand, er solle United anrufen. Er sagte: „Auf keinen Fall, das dauert ewig!“ Aber ich sagte: „Ich habe gerade per Telefon umgebucht. Schau, da sind 200 Leute vor uns, wie lange glaubst du, wirst du in der Schlange warten?“

Später um 23 Uhr traf ich den jungen Mann auf meinem umgebuchten Flug. Er war so glücklich, mich zu sehen und konnte mir für den „Telefon-Tipp“ nicht genug danken. Er trug ein „TikTok“-Shirt und hochwertige Kopfhörer, also dachte ich, er sei vielleicht technisch versiert oder zumindest gut mit Computern.

**DAS HÄSSLICHE**: Die Wahrnehmung eines „technikaffinen“ Kunden war, dass Telefonanrufe ihm nichts nützen würden, er würde lieber physisch in der Schlange warten, um mit einer echten Person zu sprechen, obwohl er deutlich sehen konnte, wie lang die Schlange war. **Dies spiegelt wider, wie schlecht die breite Öffentlichkeit über die Nutzlosigkeit des Telefon-Supports denkt.**

# Kundenservice von Fluggesellschaften: Das Hauptproblem ist die dynamische Skalierbarkeit

Mit der Erfahrung, dass ein Flug verspätet war und einer am selben Tag annulliert wurde, und dem Gespräch mit dem Kundenservice über 4 verschiedene Kanäle bei zwei Gelegenheiten, und einem tiefen Verständnis dafür, wie Contact Center aufgebaut sind – ich denke, das Hauptproblem des Kundenservice von Fluggesellschaften ist dies:

**Der Kundenservice von Fluggesellschaften kann sich nicht dynamisch skalieren. Oder, um es in Cloud-Computing-Begriffen auszudrücken: Der Kundenservice von Fluggesellschaften ist nicht elastisch.**

Dies geschah nicht nur bei United. Ich hatte ähnliche Erfahrungen mit Air Canada während Covid-19: Jeder Anruf dauerte mehr als 2 Stunden Wartezeit.

Ich glaube nicht einmal, dass ein dummer Chatbot oder ein unempathischer menschlicher Agent das Hauptproblem ist. Der Kundenservice hat sein einzigartiges Muster, dass er in Wellen kommt: **Normalerweise, wenn ein Flug betroffen ist, versuchen Dutzende oder Hunderte von Passagieren gleichzeitig Kontakt aufzunehmen, manchmal mit einem Multiplikator von 4 über Cross-Channels.**

Diese Art von Verkehrsspitze wird von modernen Contact Centern von Fluggesellschaften nicht gut gehandhabt. Was es noch schlimmer macht, ist, dass all diese Probleme „Code Rot“ sind: Sie müssen _sofort_ gelöst werden. Entschuldigung, keine Zendesk-basierte asynchrone E-Mail-Unterstützung. _Ich muss jetzt sofort mit einem Agenten sprechen_. 

# Kundenservice von Fluggesellschaften: Menschen skalieren nicht

Denken wir darüber nach, wie sich eine E-Commerce-Website auf Spitzenverkehr wie den Black Friday vorbereitet:
1. **Vorhersagen**, welche Art von Verkehr zu welcher Zeit zu erwarten ist.
2. **Genügend Serverressourcen vorab zuweisen**, indem Cloud-Anbieter kontaktiert oder die Grenze ihrer Servercluster erhöht wird.
3. **Dynamisch weitere Server starten**, wenn der Verkehr ansteigt.

Kann der Kundenservice von Fluggesellschaften dasselbe tun?
1. **Vorhersagen**: Es gibt Modelle, die wir verwenden könnten, um vorherzusagen, wann ein Flug betroffen ist, aber ich weiß nicht, ob sie welche verwenden. Zum Beispiel könnte man folgende Faktoren berücksichtigen:
    * Verkehr um den Flughafen – leicht aus Google Maps abrufbar
    * Stau am Flughafen – einige Flughäfen haben Echtzeit-Updates
    * Lokales Wetter
    * Übliche Reisemuster wie Feiertage
    * Lokale Ereignisse, die einen großen Zu- und Abfluss von Passagieren verursachen, wie die CES in Las Vegas
    * Andere Signale wie Flugzeugzustände
    * Verlaufsstatus
2. **Vorab zuweisen**: Ich glaube, das ist es, was jede Fluggesellschaft in der Ferienzeit tun sollte, indem sie mehr Agenten einstellt. Ich hoffe auf jeden Fall, dass sie das tun. Ich weiß, dass TurboTax um die Fristen für die Steuererklärung herum mehr Leute einstellt.
3. **Dynamisch starten**: Dies ist der schwierigste Fall. Es gibt einfach keine einfache Möglichkeit, dies mit Menschen zu tun, insbesondere mit geschulten, erfahrenen Agenten.

# Kundenservice von Fluggesellschaften: Wie man skaliert

Unser Hauptziel ist es, mit Verkehrsspitzen umzugehen, wenn Passagiere ihre Probleme sofort und ohne Verzögerung lösen müssen.
1. Digitale Selbstbedienungskanäle scheinen menschliche Agenten aus den folgenden zwei Gründen nicht vollständig ersetzen zu können:
Digitale Selbstbedienungskanäle sind begrenzt und bieten nicht genügend Back-Office-Zugriff, wie ihn ein menschlicher Agent hat.
2. Passagiere wollen psychologisch mit einem Menschen sprechen, weil traditionell automatisierte Lösungen nicht hilfreich waren, insbesondere die berüchtigten Chatbots.

Die Lösung ist nicht so einfach, da Menschen schwer zu skalieren sind. Aber es gab auch Wege, es zu lösen:
1. Viele Probleme können immer noch durch Selbstbedienungskanäle gelöst werden. Wir müssen sie identifizieren und den selbstbedienbaren Verkehr von menschlichen Agenten umleiten.
    * Zum Beispiel, als mein Flug annulliert wurde – alles, was ich wollte, war, die Flüge umzubuchen. Aber United bot mir diese Option nicht an, und ich musste anrufen. Als mein Flug jedoch verspätet war, bot United mir proaktiv die Umbuchungsoption an. Die Lösungen für beide Probleme sind dieselben – ich muss nicht mit einem Agenten sprechen, wenn mein Flug annulliert wird, mehr als wenn mein Flug verspätet ist. Warum kann ich mich nicht selbst bedienen?
2. Menschliche Agenten können effizienter sein, wenn sie im Chat oder am Telefon sind.
    * Der Kundendienstmitarbeiter brauchte etwa 30 Minuten, um mich umzubuchen, wobei er mich etwa 15 Minuten in der Warteschleife hielt, während sie an etwas arbeitete.
    * Die restlichen 15 Minuten, in denen sie mit mir sprach: die Hälfte der Zeit sammelte sie Informationen.
    * Ich habe das Gefühl, dass mit Optimierung die 30 Minuten auf 5-10 Minuten verkürzt werden können, wenn die Informationssammlung und Automatisierung richtig durchgeführt werden.

Wenn ich ein Contact Center-System für United bauen würde, würde ich Folgendes tun:
1. Chat und Telefonanrufe als primäre Kundenservicekanäle anbieten. Leiten Sie nicht ein ganzes Flugzeug voller Passagiere an den Bodendienst weiter (wir haben alle gesehen, wie überfüllt die Mietwagenstationen sind, nachdem ein großes Flugzeug gerade an einem Touristenziel gelandet ist).
2. Cross-Channel-Kunden in einen einzigen Kanal zusammenführen. Das bedeutet, die Kunden so schnell wie möglich zu identifizieren. Dies wird die Warteschlangengröße erheblich reduzieren und die Agentenbandbreite sparen.
3. Eine intelligentere Chat-basierte Unterstützung produzieren. Die aktuelle Generation von Chatbots wird obsolet, veraltet und sehr unbeliebt, nachdem ChatGPT herausgekommen ist. Lassen Sie ChatGPT die Konversation übernehmen – unserer Erfahrung nach macht es das besser als Menschen!
4. Die Effizienz menschlicher Agenten betonen: Die Erledigung der Aufgabe reicht nicht aus, wenn jeder Anruf 45 Minuten dauert; helfen wir ihnen, die Probleme schnell zu lösen, indem wir anbieten:
    * Vorschläge für die „nächste beste Aktion“
    * „frühere erfolgreiche Lösungen“ basierend auf Chat- oder Anrufprotokollen anderer Agenten
    * Echtzeit-Copilot, der bei der Ausführung zu Back-Office-Systemen über API-Aufrufe oder RPA-Automatisierungen hilft
5. Ein Vorhersagemodell für das Risiko von steigenden Kundendienstanfragen erstellen und proaktiv daran arbeiten.

Ich hatte noch nie einen Kundendienstmitarbeiter, der mich proaktiv kontaktierte, um das Problem zu lösen. Es war immer ich, der Passagier, der frustriert in der Schlange und am Telefon wartete und anrief.

Wir bei [Seasalt.ai](https://seasalt.ai/?utm_source=blog) freuen uns, eine Technologie wie einen „Minderheitenbericht“ zu entwickeln, um das Problem zu identifizieren, bevor es auftritt, es durch proaktive Kontaktaufnahme mit betroffenen Passagieren zu entschärfen und die Herausforderung der dynamischen Skalierung eines Contact Centers mit Menschen während Verkehrsspitzen zu bewältigen.

Wenn ich in den nächsten Jahren einen Anruf von der Fluggesellschaft erhalte, der ein potenzielles Problem kommuniziert, bevor ich versuche, Hilfe zu suchen, wäre das ein wirklich erstaunliches Kundenerlebnis und eine erfreuliche Reise, noch bevor ich die Reise antrete. Welche Fluggesellschaft dies zuerst tun kann, wird so viele treue Fluggäste gewinnen.
`;export{e as default};

---
author: Kim Dodds
canonicalUrl: /blog/discord-tts-case-study/
date: 2022-12-27 17:04:20-08:00
description: În acest blog, vom discuta despre cum utilizatorii reali Discord folosesc
  serviciul nostru după ce am analizat datele reale de text-to-speech de câteva luni.
image: images/blog/29-tts-case-study/discord-tts-accessibility.jpg
metatitle: 'Text-to-Speech pe Discord: Studiu de caz TTS Discord Bot'
modified_date: 2024-12-19 10:30:00+00:00
tags:
- SeaVoice
- Discord
title: 'Text-to-Speech pe Discord: Studiu de caz TTS Discord Bot'
url: /blog/discord-tts-case-study/
weight: 1
---


*După lansarea SeaVoice pe Discord (unul dintre cele mai rapide și precise bot-uri text-to-speech și speech-to-text), am vrut să înțeleg cum utilizatorii interacționează efectiv cu serviciul. În acest blog, vom discuta despre descoperirile noastre după ce am analizat datele reale ale utilizatorilor text-to-speech de câteva luni.*

# SeaVoice: Text-to-Speech și Speech-to-Text Discord Bot

Discord, o platformă folosită în principal pentru combinația de chat audio și text, este un teren excelent de testare pentru serviciile de inteligență vocală și procesarea limbajului natural.
Am implementat botul SeaVoice pe Discord în august 2022, echipat cu comenzi text-to-speech și speech-to-text.
Pentru a afla mai multe despre cum funcționează botul sau pentru a vedea o demonstrație video scurtă, puteți vizita [Wiki-ul SeaVoice Discord Bot](https://wiki.seasalt.ai/seavoice/discord/6-community/).
În noiembrie același an, am lansat o versiune nouă care include îmbunătățiri semnificative ale backend-ului (așa cum am descris în articolul nostru anterior de blog: [SeaVoice Discord Bot: Îmbunătățiri backend și stabilitate](https://seasalt.ai/blog/27-seavoice-discord-backend-improvements/)), care ne-a permis să înregistrăm date anonime despre cum utilizatorii interacționează cu botul SeaVoice.
În acest blog, vom examina datele utilizatorilor pentru comanda text-to-speech de 1 lună.

## Utilizarea SeaVoice TTS

<center>
<img src="/images/blog/29-tts-case-study/discord-tts-usage.jpg" alt="Utilizarea zilnică text-to-speech a botului SeaVoice Discord pe 7 săptămâni."/>

*Utilizarea zilnică text-to-speech a botului SeaVoice Discord pe 7 săptămâni.*
</center>

La momentul scrierii acestui articol, botul SeaVoice a fost adăugat la aproape 800 de servere!
De la începutul înregistrării datelor de utilizare în noiembrie, am descoperit că numărul total de cereri zilnice poate fluctua de la cât de puțin 150 la peste 1.300 (în medie aproximativ 560).
Aproximativ 650 de utilizatori au încercat cel puțin o dată comanda TTS.
Cu toate acestea, majoritatea utilizatorilor nu continuă să o folosească în mod regulat după încercare.
Din cei 650 de utilizatori care au încercat comanda TTS, aproximativ 200 au folosit-o de 20 de ori sau mai mult, iar doar 100 de utilizatori au folosit-o de 50 de ori sau mai mult.
Cu toate acestea, utilizatorii care apreciază și se bazează pe comanda TTS o folosesc intens!
Cei mai buni 5 utilizatori ai noștri au trimis fiecare peste 1.000 de cereri în ultimele două luni, iar utilizatorul de pe primul loc a trimis singur aproape 2.500 de cereri!

## Observații

### De ce oamenii folosesc text-to-speech

<center>
<img src="/images/blog/29-tts-case-study/why-mute-on-discord.jpg" alt="Motivele pentru care utilizatorii botului SeaVoice Discord folosesc text-to-speech."/>

*Motivele pentru care utilizatorii botului SeaVoice Discord folosesc text-to-speech.*
</center>

Deci, după ce am examinat datele de utilizare, prima noastră întrebare a fost: **De ce utilizatorii frecvenți folosesc TTS în primul rând?**
Am examinat baza de date pentru a găsi câteva explicații.
Iată câteva comenzi TTS reale de la unii dintre utilizatorii noștri.

__*De ce nu vorbești?*__

    - De asemenea, nu pot vorbi pentru că mănânc
    - Aș fi vorbit, dar sunt la serviciu acum.
    - Dacă aș vorbi, i-aș trezi pe familia mea
    - Scuze, nu pot vorbi prea mult. Gâtul mă doare.
    - Aș fi putut vorbi, dar mama mea este aici
    - Sunt prea leneș astăzi pentru a vorbi
    - Nu pot vorbi pentru că sunt bolnav, dar încă vreau să particip :)
    - Nu exact mut, doar că vorbirea necesită efort. Unele zile necesită mult efort
    - Scuze, sunt mut, bunica mea vorbește la telefon și este foarte tare
    - Pentru că microfonul meu este stricat

După ce am găsit aceste explicații, le-am putut rezuma la câteva motive principale:
- Există bariere fizice (microfon stricat, dificultăți în vorbire, boală, etc.),
- Sunt ocupați făcând alte lucruri (mâncând, lucrând, etc.),
- Mediul lor este prea zgomotos, sau trebuie să rămână liniștiți, sau
- Pentru că este convenabil și le place să îl folosească.

Dar indiferent de motivul exact pentru care folosesc serviciul TTS, mulți utilizatori au exprimat că sunt fericiți că pot participa la conversațiile din canalele vocale, altfel nu ar fi putut participa.
Credem că serviciul TTS face canalele vocale Discord mai accesibile, ceea ce este motivul principal pentru care utilizatorii noștri obișnuiți continuă să folosească serviciul.

### Utilizarea limbilor

Când am examinat conversațiile, am observat că mulți utilizatori încearcă să folosească comanda text-to-speech cu limbi diferite.
Deși unii utilizatori doar voiau să vadă dacă funcționează, sau găseau pronunția amuzantă, alții au continuat să folosească TTS în limbi non-engleză pentru perioade lungi!

<center>
<img src="/images/blog/29-tts-case-study/discord-spanish-tts-test.png" alt="Utilizator testând pronunția spaniolă pe modelul SeaVoice TTS englez."/>

*Utilizator testând pronunția spaniolă pe modelul SeaVoice TTS englez.*
</center>

Acest lucru este valabil în special pentru utilizatorii de spaniolă, deși (așa cum am menționat mai sus) performanța TTS pentru spaniolă nu este bună, deoarece modelul a fost antrenat doar pe engleză.
Am început să înregistrez de fiecare dată când am întâlnit un utilizator care încearcă să folosească comanda TTS pe limbi non-engleză.

<center>
<img src="/images/blog/29-tts-case-study/discord-non-english-tts.jpg" alt="Numărul de încercări de a trimite cereri non-engleză către TTS."/>

*Numărul de încercări de a trimite cereri non-engleză către TTS.*
</center>

Tabelul de mai sus arată numărul pentru fiecare conversație pe care am găsit-o cu cel puțin o instanță în care s-a folosit limba respectivă în comanda TTS.
Evident, spaniola este de departe cea mai comună, iar faptul că mulți utilizatori continuă să folosească funcția TTS spaniolă chiar și cu performanța slabă mă face să mă întreb dacă nu există alternative TTS spaniolă viabile pe Discord.
În orice caz, oamenii încearcă să folosească serviciul nostru TTS pentru alte limbi, astfel încât putem urmări ce limbi au cea mai mare cerere și să folosim aceste date pentru a ne ghida antrenarea modelelor noi.

### Comentarii despre bot

Un alt subiect interesant găsit în jurnale sunt comentariile despre bot în sine.
Din fericire, am văzut multe comentarii foarte pozitive despre bot și performanța sa.

<center>
<img src="/images/blog/29-tts-case-study/discord-tts-inclusive-accessibility-user-comment.png" alt="Comentariu de utilizator spunând că botul îi face să se simtă mai incluși."/>

*Comentariu de utilizator spunând că botul îi face să se simtă mai incluși.*
</center>

Cele mai mișcătoare comentarii au venit de la cei care se simțeau excluși din canalele vocale, dar acum pot participa datorită accesibilității suplimentare oferite de bot.

Am găsit și câteva feedback-uri constructive.

<center>
<img src="/images/blog/29-tts-case-study/discord-tts-speed.png" alt="Comentariu de utilizator spunând că viteza TTS este o problemă."/>

*Comentariu de utilizator spunând că viteza TTS este o problemă.*
</center>

Un utilizator a menționat că TTS este mai lent decât vorbirea normală din cauza faptului că utilizatorii trebuie să introducă întreaga propoziție și să o trimită mai întâi, astfel încât uneori declarațiile lor TTS sunt puțin întârziate în conversație.
Așa cum am menționat în secțiunea anterioară, am văzut și cereri pentru suport suplimentar de limbi, precum și un utilizator care dorea să poată folosi botul pentru traducerea limbilor.
Urmărirea acestui tip de feedback ne va ajuta să planificăm și să îmbunătățim funcțiile viitoare.

### Noutatea

După ce am parcurs toate comenzile TTS, aș spune că aproximativ două treimi din declarații sunt folosite pentru conversații generale cu prietenii și alții din server.
Majoritatea oamenilor joacă jocuri și vorbesc cu prietenii, iar acești utilizatori tind să fie cei care folosesc serviciul TTS în mod regulat.
Pe de altă parte, restul de o treime din declarații se încadrează în categoria "doar pentru distracție".
Când primești puterea completă de a face o voce să spună orice vrei, cred că este în natura umană să alegi cel mai stupid sau cel mai obscen lucru la care te poți gândi, doar pentru distracție.
Îmi amintesc că stăteam în laboratorul de informatică din școala primară, distrat de Microsoft Sam (foarte high-tech la vremea aceea) timp de ore, pentru a vedea dacă îl putem face să spună cuvinte precum "căcat" sau "fund".
Ei bine, cred că copiii ca mine au crescut, au dobândit un vocabular mai bogat și au găsit în final aceeași distracție în serviciile TTS pe Discord.

<center>
<img src="/images/blog/29-tts-case-study/discord-tts-stress-test.png" alt="Exemple de cereri TTS ciudate trimise de utilizatori."/>

*Exemple de cereri TTS ciudate trimise de utilizatori.*
</center>

Uneori utilizatorii doar încearcă să spargă botul prin introducerea de șiruri prea lungi, caractere speciale, emoji-uri, URL-uri, etc.
Acesta este un exemplu clasic de oameni care testează limitele software-ului și de fapt ne ajută să ne asigurăm că serviciul nostru este robust și poate gestiona orice input de la utilizatori.

Alteori, utilizatorii caută distracție făcând serviciul TTS să spună cele mai obscene și ofensatoare lucruri la care se pot gândi.
În jurnalele TTS, cred că am văzut fiecare înjurătură pe care o știu (poate și câteva pe care nu le-am auzit niciodată), comentarii rasiste și conținut sexual explicit.

## Probleme etice

Din păcate, aplicațiile text-to-speech pot fi folosite în mod neplăcut în mai multe moduri: de exemplu, pentru a promova discursul de ură sau cyberbullying.
În plus, deși clipurile audio sunt sintetizate din modele, datele cu care sunt antrenate modelele provin de la oameni reali, iar outputul unui model bun sună aproape indistinct de vocea originală.

Prin urmare, aceste perspective, împreună cu modul în care am văzut utilizatorii reali cum folosesc (sau abuzează) serviciul nostru TTS, ridică câteva întrebări foarte importante pentru Seasalt.ai ca companie și pentru botul SeaVoice Discord:

- *Ca companie, vrem ca produsul nostru să fie folosit în moduri potențial ofensatoare sau dăunătoare?*
- *Ce drepturi au actorii de voce asupra modului în care vocile lor sunt folosite în aplicațiile text-to-speech?*
- *Avem dreptul sau responsabilitatea de a cenzura modul în care serviciul nostru este folosit?*

Aceste întrebări nu pot fi răspunse într-un singur articol de blog, sau chiar explorate complet.
Cu toate acestea, pe măsură ce progresăm cu proiectul nostru Discord și continuăm să lucrăm cu actorii noștri de voce, compania se simte obligată să ia în considerare constant aceste probleme.

Mulțumim pentru interesul vostru în botul nostru Discord și proiectele de inteligență vocală! Puteți afla mai multe despre produsele noastre STT pe [pagina noastră principală speech-to-text](https://suite.seasalt.ai/tts). Pentru o demonstrație one-on-one a oricăruia dintre produsele noastre de inteligență vocală, vă rugăm să completați [formularul de programare a demonstrației](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting).

Pentru Discord, puteți afla mai multe despre botul nostru și să îl adăugați pe serverul vostru de la [Wiki-ul SeaVoice Discord Bot](https://wiki.seasalt.ai/seavoice/discord/6-community/). De asemenea, sunteți bineveniți să vă alăturați [serverului nostru oficial SeaVoice Discord](https://discord.gg/dfAYfwBQ).

<center>
<iframe src="https://discordapp.com/widget?id=919037515514654721&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
</center> 
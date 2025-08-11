const e=`---
title: "Text-to-Speech pe Discord: Un studiu de caz al botului TTS Discord"
date: 2022-12-27 17:04:20-08:00
modified_date: 2025-08-01T12:00:00Z
author: Kim Dodds
description: "În acest blog vom discuta constatările noastre despre modul în care utilizatorii reali Discord utilizează serviciile noastre după revizuirea mai multor luni de date autentice text-to-speech."
weight: 1
tags:
  - SeaVoice
  - Discord
image: images/blog/29-tts-case-study/discord-tts-accessibility.jpg
url: /blog/discord-tts-case-study/
---

*După lansarea SeaVoice, unul dintre cei mai rapizi și mai precisi roboți text-to-speech și speech-to-text de pe Discord, am vrut să înțelegem cum interacționau de fapt utilizatorii cu serviciile. În acest blog vom discuta constatările noastre după revizuirea mai multor luni de date reale ale utilizatorilor text-to-speech.*

# SeaVoice: Un bot Discord Text-to-Speech & Speech-to-Text

Discord, fiind o platformă utilizată în principal pentru o combinație de chat audio și text, este un teren de testare fantastic pentru inteligența vocală și serviciile de procesare a limbajului natural.
Am implementat botul SeaVoice, echipat cu comenzi text-to-speech și speech-to-text, pe Discord în august 2022.
Pentru a afla mai multe despre cum funcționează botul sau pentru a vedea o scurtă demonstrație video, puteți vizita [Wiki-ul botului Discord SeaVoice](https://wiki.seasalt.ai/seavoice/discord/6-community/).
În noiembrie același an, am lansat o nouă versiune cu îmbunătățiri semnificative la nivel de backend (așa cum este descris în postarea noastră anterioară de pe blog: [Botul Discord SeaVoice: Îmbunătățiri backend și de stabilitate](https://seasalt.ai/blog/27-seavoice-discord-backend-improvements/)) care ne permit să înregistrăm date anonime despre modul în care utilizatorii interacționează cu botul SeaVoice.
În acest blog vom analiza datele utilizatorilor pe o perioadă de 1 lună din comanda text-to-speech.

## Utilizarea SeaVoice TTS

<center>
<img src="/images/blog/29-tts-case-study/discord-tts-usage.jpg" alt="Utilizarea zilnică a text-to-speech a botului Discord SeaVoice pe parcursul a 7 săptămâni."/>

*Utilizarea zilnică a text-to-speech a botului Discord SeaVoice pe parcursul a 7 săptămâni.*
</center>

La momentul scrierii, botul SeaVoice a fost adăugat la aproape 800 de servere!
De când am început să înregistrăm datele de utilizare în noiembrie, am constatat că numărul total de solicitări pe zi poate fluctua de la doar 150 la peste 1.300 (cu o medie de aproximativ 560).
Aproximativ 650 de utilizatori au încercat de fapt comanda TTS cel puțin o dată.
Cu toate acestea, majoritatea utilizatorilor nu continuă să o utilizeze în mod regulat după ce au încercat-o.
Dintre cei 650 de utilizatori care au încercat comanda TTS, aproximativ 200 au folosit-o de 20 sau mai multe ori, și doar 100 au folosit-o de 50 sau mai multe ori.
Acestea fiind spuse, cei care se bucură și se bazează pe comanda TTS o utilizează extensiv!
Primii noștri 5 utilizatori au trimis peste 1.000 de solicitări fiecare în ultimele două luni, iar utilizatorul de top a trimis aproape 2.500 de solicitări singur!

## Observații

### De ce folosesc oamenii text-to-speech

<center>
<img src="/images/blog/29-tts-case-study/why-mute-on-discord.jpg" alt="Motivele pentru care utilizatorii botului Discord SeaVoice utilizează text-to-speech."/>

*Motivele pentru care utilizatorii botului Discord SeaVoice utilizează text-to-speech.*
</center>

Deci, prima noastră întrebare după ce am văzut datele de utilizare este: **de ce utilizează utilizatorii frecvenți TTS în primul rând?**
Am căutat prin baza de date pentru a găsi câteva explicații.
Următoarele sunt comenzi TTS reale de la unii dintre utilizatorii noștri.

__*De ce nu vorbești?*__

    - de asemenea, nu pot vorbi pentru că mănânc
    - aș vorbi de fapt, dar sunt la serviciu în acest moment.
    - dacă vorbesc, îmi trezesc familia
    - scuze, nu voi vorbi prea mult. mă doare gâtul foarte tare.
    - aș putea vorbi, dar mama e aici
    - sunt prea leneș să vorbesc azi
    - nu pot vorbi pentru că sunt bolnav, dar am vrut să int oricum :)
    - nu sunt complet mut, doar că necesită efort să vorbesc. Mult efort în unele zile
    - scuze, sunt mut, bunica mea vorbește la telefon și e zgomotos
    - Pentru că microfonul meu era stricat

După ce am găsit aceste explicații, le putem rezuma în câteva motive principale:
- există o barieră fizică (microfon stricat, dificultate de vorbire, boală etc.),
- sunt ocupați cu altceva (mănâncă, la serviciu etc.),
- mediul lor este prea zgomotos sau trebuie să fie liniștiți, sau
- pentru că este convenabil și le place să-l folosească.

Dar, indiferent de motivul exact pentru care utilizează serviciul TTS, mulți utilizatori și-au exprimat entuziasmul că au putut participa la conversațiile din canalul vocal, când altfel nu ar fi putut.
Credem că serviciul TTS face canalele vocale Discord mai accesibile și acesta este principalul motiv pentru care utilizatorii noștri obișnuiți continuă să utilizeze serviciul.

### Utilizarea limbii

Un lucru care mi-a atras atenția în timp ce revizuiam conversațiile a fost că mulți utilizatori au încercat să utilizeze comanda text-to-speech cu diferite limbi.
În timp ce unii utilizatori doreau doar să vadă dacă va funcționa sau credeau că pronunția este amuzantă, alții, totuși, au continuat să utilizeze TTS în limbi non-engleze pentru perioade lungi de timp!

<center>
<img src="/images/blog/29-tts-case-study/discord-spanish-tts-test.png" alt="Un utilizator testează pronunția spaniolă a modelului TTS englezesc SeaVoice."/>

*Un utilizator testează pronunția spaniolă a modelului TTS englezesc SeaVoice.*
</center>

Acest lucru a fost valabil în special în cazul vorbitorilor de spaniolă, chiar dacă (așa cum notează utilizatorul de mai sus) performanța TTS nu este bună pentru spaniolă, deoarece modelul este antrenat doar pe engleză.
Am început să notez de fiecare dată când am întâlnit un utilizator care încerca să utilizeze comanda TTS într-o altă limbă decât engleza.

<center>
<img src="/images/blog/29-tts-case-study/discord-non-english-tts.jpg" alt="Numărul de încercări de a trimite solicitări non-engleze către TTS."/>

*Numărul de încercări de a trimite solicitări non-engleze către TTS.*
</center>

Tabelul de mai sus arată numărul fiecărei conversații pe care am găsit-o care a avut cel puțin o instanță în care cineva a folosit limba corespunzătoare în comanda TTS.
Evident, spaniola este de departe cea mai comună, iar faptul că mulți utilizatori au continuat să utilizeze funcția TTS în spaniolă, chiar dacă performanța a fost slabă, mă face să mă întreb dacă nu există deja o alternativă viabilă pe Discord pentru TTS spaniol.
În orice caz, oamenii încearcă să utilizeze serviciul nostru TTS pentru alte limbi, așa că putem urmări care limbi sunt cele mai solicitate și putem utiliza aceste date pentru a ne informa antrenamentul de noi modele.

### Comentarii despre bot

Un alt subiect interesant găsit în jurnale a fost comentariile despre botul însuși.
Din fericire, am văzut mai multe comentarii foarte pozitive despre bot și performanța sa.

<center>
<img src="/images/blog/29-tts-case-study/discord-tts-inclusive-accessibility-user-comment.png" alt="Un utilizator comentează că botul îi face să se simtă mai incluși."/>

*Un utilizator comentează că botul îi face să se simtă mai incluși.*
</center>

Cele mai emoționante comentarii au fost de la cei care s-au simțit excluși din canalele vocale, dar acum pot participa datorită accesibilității suplimentare oferite de bot.

Am găsit, de asemenea, câteva feedback-uri constructive.

<center>
<img src="/images/blog/29-tts-case-study/discord-tts-speed.png" alt="Un utilizator comentează că viteza TTS este o problemă."/>

*Un utilizator comentează că viteza TTS este o problemă.*
</center>

Un utilizator a menționat că, deoarece utilizatorii vor trebui mai întâi să tasteze întreaga propoziție și apoi să o trimită, TTS este mai lent decât vorbirea normală, așa că, uneori, enunțul lor TTS este rostit puțin mai târziu în conversație.
Așa cum am menționat în secțiunea anterioară, am văzut, de asemenea, solicitări pentru suport lingvistic suplimentar, precum și un utilizator care spera să poată traduce între limbi folosind botul.
Urmărirea acestui tip de feedback ne va ajuta să planificăm și să îmbunătățim funcțiile pe viitor.

### Noutate

După ce am parcurs întreaga colecție de comenzi TTS, aș spune că aproximativ două treimi din enunțuri sunt utilizate în conversații generale cu prietenii și alte persoane din server.
Majoritatea oamenilor joacă jocuri și doar discută cu prietenii lor, iar acești utilizatori tind să fie cei care utilizează serviciul TTS în mod regulat.
Pe de altă parte, restul de o treime din enunțuri se încadrează în categoria „doar se joacă”.
Când vi se oferă puterea completă de a face o voce să spună orice doriți, cred că este natura umană să alegeți cel mai prostesc sau cel mai obscen lucru la care vă puteți gândi doar pentru a râde.
Îmi amintesc că stăteam în laboratorul de calculatoare din școala primară și mă distram ore întregi cu Microsoft Sam (foarte avansat din punct de vedere tehnologic la acea vreme), văzând dacă îl puteam face să spună lucruri precum „caca” sau „fund”.
Ei bine, cred că copiii ca mine au crescut, au dobândit un vocabular mai bogat și au ajuns să găsească aceeași distracție cu serviciul nostru TTS pe Discord.

<center>
<img src="/images/blog/29-tts-case-study/discord-tts-stress-test.png" alt="Exemple de solicitări TTS ciudate trimise de utilizatori."/>

*Exemple de solicitări TTS ciudate trimise de utilizatori.*
</center>

Uneori, utilizatorii încearcă pur și simplu să strice botul tastând lucruri precum: șiruri excesiv de lungi, caractere speciale, emoji-uri, URL-uri etc.
Acesta este un exemplu clasic de oameni care testează limitele software-ului și ne ajută de fapt să ne asigurăm că serviciile noastre sunt robuste și pot gestiona orice intrare pe care utilizatorii o aruncă asupra lor.

Alteori, utilizatorii găsesc divertisment făcând serviciul TTS să spună cele mai obscene și jignitoare lucruri la care se pot gândi.
În jurnalele TTS cred că am văzut fiecare cuvânt de înjurătură pe care îl știu (și poate unele pe care nu le-am mai auzit niciodată), insulte rasiale și conținut sexual explicit.

## Chestiunea eticii

Din păcate, există multe moduri în care o aplicație text-to-speech poate fi utilizată în mod neplăcut: cum ar fi pentru a promova discursul instigator la ură sau hărțuirea cibernetică.
În plus, în timp ce clipurile audio sunt sintetizate dintr-un model, datele pentru antrenarea modelului provin de la o persoană reală, iar rezultatul unui model bun poate suna aproape indistinguibil de original.

Deci, aceste puncte, împreună cu modul în care am văzut utilizatorii reali folosind (sau abuzând) serviciul nostru TTS, ridică câteva întrebări foarte importante pentru Seasalt.ai ca companie și pentru botul Discord SeaVoice:

- *Dorim noi, ca și companie, ca produsul nostru să fie utilizat în moduri potențial ofensatoare sau dăunătoare?*
- *Ce drepturi au actorii vocali asupra modului în care vocea lor este utilizată în aplicațiile text-to-speech?*
- *Avem dreptul sau responsabilitatea de a cenzura modul în care este utilizat serviciul nostru?*

Acestea sunt întrebări la care nu se poate răspunde, sau chiar explora pe deplin, într-o singură postare pe blog.
Cu toate acestea, compania simte o obligație de a lua în considerare continuu aceste probleme pe măsură ce avansăm cu proiectul nostru Discord și continuăm să lucrăm cu actorii noștri vocali.

Vă mulțumim pentru interesul acordat proiectelor noastre Discord Bot și Voice Intelligence! Puteți afla mai multe despre produsul nostru STT pe [pagina noastră de pornire Speech-to-Text](https://suite.seasalt.ai/tts). Pentru o demonstrație individuală a oricărui produs Voice Intelligence, completați [Formularul de rezervare a unei demonstrații](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting).

Pe partea Discord, puteți afla mai multe despre botul nostru și îl puteți adăuga la serverul dvs. din [Wiki-ul botului Discord SeaVoice](https://wiki.seasalt.ai/seavoice/discord/6-community/). De asemenea, nu ezitați să vă alăturați [Serverului nostru oficial Discord SeaVoice](https://discord.gg/dfAYfwBQ).

<center>
<iframe src="https://discordapp.com/widget?id=919037515514654721&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
</center>
`;export{e as default};

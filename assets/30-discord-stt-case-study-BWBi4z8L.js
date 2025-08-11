const e=`---
title: "Speech-to-Text pe Discord: Un Studiu de Caz al Botului STT Discord"
metatitle: "Speech-to-Text pe Discord: Un Studiu de Caz al Botului STT Discord"
date: 2023-01-23 11:25:00-08:00
draft: false
author: Kim Dodds
description: "În acest blog, vom discuta descoperirile noastre despre modul în care utilizatorii reali Discord folosesc serviciile SeaVoice după ce am revizuit câteva săptămâni de date brute speech-to-text."
weight: 1
tags:
  - SeaVoice
  - Discord
image: images/blog/30-stt-case-study/discord-stt-bot-case-study.jpg
canonicalURL: /blog/speech-to-text-discord-case-study/
url: /blog/speech-to-text-discord-case-study/
---

*După lansarea SeaVoice, unul dintre cele mai rapide și precise boți Text-to-Speech (TTS) și Speech-to-Text (STT) de pe Discord, am vrut să înțelegem cum interacționau de fapt utilizatorii cu serviciile. În acest blog, vom discuta descoperirile noastre după ce am revizuit câteva săptămâni de date reale de la utilizatori speech-to-text.*

# SeaVoice: Un Bot TTS și STT pentru Discord

Discord, fiind o platformă utilizată în primul rând pentru o combinație de chat vocal și text, este un teren de testare excelent pentru serviciile de inteligență artificială audio și procesarea limbajului natural. Am implementat botul SeaVoice, echipat cu comenzi TTS și STT, pe Discord în august 2022. Pentru a afla mai multe despre cum funcționează botul sau pentru a viziona o scurtă demonstrație video, puteți vizita [Wiki-ul Botului SeaVoice](https://wiki.seasalt.ai/seavoice/discord/1-intro-discord-bot/). În noiembrie al aceluiași an, am lansat o nouă versiune cu îmbunătățiri majore de backend (așa cum este detaliat în postarea noastră de blog: [Botul Discord SeaVoice: Îmbunătățiri Backend și Stabilitate](https://seasalt.ai/blog/27-seavoice-discord-backend-improvements/)) care ne permite să înregistrăm date anonimizate despre modul în care utilizatorii interacționează cu botul SeaVoice. În blogul nostru recent ([Studiu de Caz al Botului TTS Discord](https://seasalt.ai/blog/29-discord-tts-case-study/)) am analizat o lună de date de la utilizatorii comenzii TTS. Ca o continuare, în această postare, vom arunca o privire la aproximativ 3 săptămâni de date de la utilizatorii speech-to-text.

## Utilizarea STT SeaVoice

La momentul scrierii acestui articol, botul SeaVoice a fost adăugat la aproape 900 de servere! Aproximativ 260 de servere, totalizând peste 600 de participanți, au încercat comanda STT cel puțin o dată. În ultimele trei săptămâni, am găzduit aproximativ 1800 de sesiuni STT și am generat un total de **peste jumătate de milion de rânduri de transcriere**.

<center>
<img src="/images/blog/30-stt-case-study/discord-stt-sessions-per-day.png" alt="Sesiuni zilnice speech-to-text ale botului SeaVoice Discord pe parcursul a 3 săptămâni."/>

*Sesiuni zilnice speech-to-text ale botului SeaVoice Discord pe parcursul a 3 săptămâni.*
</center>

Dacă ne uităm la numărul total de sesiuni STT pe zi, am constatat că acestea pot varia de la 40 la peste 140 (cu o medie de aproximativ 70). De asemenea, putem privi numărul total de rânduri de transcriere pe care le-am produs. În cea mai lentă zi, am produs un minim de 10 mii de rânduri, totuși, într-o zi aglomerată, am produs peste 40 de mii de rânduri. Pentru a pune acest lucru în perspectivă, pe 18 ianuarie, am găzduit 102 sesiuni STT, totalizând puțin sub 30 de mii de rânduri de transcriere; acest lucru echivalează cu aproximativ 40 de ore de timp de înregistrare.

Am constatat, de asemenea, că, deși majoritatea sesiunilor sunt utilizate pentru chat-uri scurte (în medie 57 de rânduri pe sesiune), există un număr semnificativ de sesiuni foarte lungi care ridică media la 650 de rânduri pe sesiune. Cea mai lungă sesiune a noastră a avut peste 30 de mii de rânduri, ceea ce este mai mult decât o zi întreagă de medie! În cele din urmă, am aruncat o privire și la câți utilizatori tind să fie în fiecare sesiune și am constatat că, de obicei, există 4-5 utilizatori pe sesiune - totuși, am folosit o dată botul pentru a sprijini transcrierea live la un seminar virtual cu 45 de participanți!

<center>
<img src="/images/blog/30-stt-case-study/discord-transcription-lines-per-day.png" alt="Rânduri zilnice de transcriere ale botului SeaVoice Discord pe parcursul a 3 săptămâni."/>

*Rânduri zilnice de transcriere ale botului SeaVoice Discord pe parcursul a 3 săptămâni.*
</center>

Deși majoritatea serverelor nu au folosit o sesiune STT de mai mult de câteva ori, există un număr bun care folosesc serviciul extensiv. De când am început să înregistrăm date de utilizare STT la sfârșitul lunii decembrie, numărul total mediu de sesiuni pe server este de aproximativ 7; totuși, serverul nostru de top este la 131 de sesiuni - ceea ce înseamnă o medie de peste 6 sesiuni pe zi! Același server a transcris peste 150 de mii de rânduri de vorbire în doar 3 săptămâni! Poate chiar mai impresionant, utilizatorul nostru de top este de pe același server și a avut peste 60 de mii de rânduri din propria sa vorbire transcrise!

## Observații

### De ce folosesc oamenii speech-to-text

<center>
<img src="/images/blog/30-stt-case-study/discord-audio-transcript-download-user-quote.jpg" alt="Utilizatorul botului SeaVoice Discord își exprimă entuziasmul pentru fișierele audio și text persistente."/>

*Utilizatorul botului SeaVoice Discord își exprimă entuziasmul pentru fișierele audio și text persistente.*
</center>

Așadar, prima noastră întrebare după ce am văzut datele de utilizare a fost: **De ce folosesc utilizatorii recurenți speech-to-text în primul rând?**

Am căutat prin baza de date pentru a găsi câteva explicații. Cu toate acestea, s-a dovedit a fi dificil să găsim explicații concrete despre motivul pentru care utilizatorii folosesc serviciul STT în loc de serviciul TTS. Se pare că oamenii simt nevoia să le explice celorlalți din chat de ce folosesc TTS, dar mai puțin cu STT. Indiferent, am găsit câteva transcrieri interesante care au oferit câteva informații despre motivul pentru care utilizatorii au decis să utilizeze serviciul STT.

__*De ce folosesc utilizatorii STT:*__

- "De aceea folosesc transcrieri pentru că pot să mă uit la lucrurile pe care le-am ratat."
- "[Utilizatorul] are probleme de auz, așa că iau un bot care transcrie"
- "[Utilizatorul] făcea raid cu ei și foloseau asta pentru a transcrie lucruri, dar apoi [Utilizatorul] a spus, oh, putem folosi asta și pentru lucruri D și D"
- "Abia aștept să mă întorc și să citesc unele dintre aceste transcrieri mai târziu [...] Vreau să mă întorc și să ascult acea înregistrare și să mă uit din nou la acel text"
- "Dacă ne facem întâlnirile aici, putem alimenta textul întâlnirii într-un AI"
- "În timpul unei întâlniri cu oameni, este grozav să vezi o transcriere"
- "[Oameni] care nu sunt în chat sau oameni care sunt în comunitate, dar nu fac parte din chatul vocal, dar decid să se uite și să citească"

Așadar, în general, se pare că majoritatea utilizatorilor se bucură de comoditatea de a avea o transcriere live care îi poate ajuta să țină pasul cu conversația și să umple orice lacune pe care le-ar fi putut rata. Acest lucru este valabil mai ales pentru utilizatorii cu deficiențe de auz sau dificultăți audio/de conexiune. Pentru unii utilizatori, cel mai mare avantaj este de a avea o înregistrare audio și text persistentă a conversației lor; acest lucru poate fi deosebit de convenabil pentru cazuri de utilizare, cum ar fi păstrarea unui jurnal al unei sesiuni Dungeons & Dragons sau păstrarea unui jurnal al întâlnirilor importante.

Deoarece mulți utilizatori nu au declarat în mod explicit de ce foloseau serviciul STT, a părut util să ne facem o idee despre ce făceau în timp ce foloseau botul. Revizuirea transcrierilor utilizatorilor mi-a oferit indicii despre activitățile pe care le desfășurau în timpul transcrierii:

__*Ce fac utilizatorii în timp ce folosesc STT:*__

- Doar vorbind
    - Jocuri:
    - Jocuri ocazionale
    - Jocuri avansate (ex: formatarea raidurilor MMO, jocuri multiplayer online)
- Jocuri de rol (Dungeons & Dragons)
- Streaming / Înregistrare de conținut
- Discutarea muncii școlare / profesionale / voluntare

O mare majoritate a transcrierilor se încadrează în categoriile "doar vorbind" și "jocuri ocazionale". Așa cum se vede mai sus, cred că majoritatea utilizatorilor în acest caz folosesc botul pentru a îmbunătăți accesibilitatea canalului vocal Discord și/sau pentru a se bucura de comoditatea de a vedea o transcriere live pentru a umple orice lacune pe care le-ar fi putut rata în conversație. În unele cazuri (cum ar fi atunci când este folosit pentru raiduri MMO), discuțiile despre jocuri sunt foarte complexe și utilizatorii colaborează unii cu alții în timp real; transcrierile live pot fi extrem de utile pentru succesul echipei, deoarece utilizatorii pot consulta transcrierile în timp ce joacă.

<center>
<img src="/images/blog/30-stt-case-study/discord-stt-for-mmo-raid.jpg" alt="Exemplu de discuție complexă în timpul unui raid MMO."/>

*Exemplu de discuție complexă în timpul unui raid MMO.*
</center>

De asemenea, se pare că mulți utilizatori folosesc botul pentru a transcrie conversații mai serioase, cum ar fi întâlniri școlare, profesionale și/sau de voluntariat. Am folosit, de asemenea, botul nostru pentru a transcrie o conferință de tehnologie online, [UnTechCon](https://gfsc.studio/2022/11/14/announcing-untechcon.html). În aceste cazuri, fișierele finale de înregistrare și text pot fi foarte utile pentru ca utilizatorii să le revizuiască după întâlnire. Un alt exemplu interesant pe care l-am găsit a fost un utilizator care înregistra conținut pentru fluxul său. Deoarece transcrierea finală vine cu marcaje de timp, utilizatorii pot încărca fișierul text ca subtitrări pentru conținutul lor audio sau vizual înregistrat.

<center>
<img src="/images/blog/30-stt-case-study/discord-stt-accessibility-user-quote.jpg" alt="Utilizatorul SeaVoice își exprimă recunoștința pentru că a făcut canalele vocale Discord mai accesibile."/>

*Utilizatorul SeaVoice își exprimă recunoștința pentru că a făcut canalele vocale Discord mai accesibile.*
</center>

Dar, indiferent de motivul exact pentru care folosesc serviciul STT, mulți utilizatori și-au exprimat entuziasmul că au putut participa la conversații în canalele vocale atunci când altfel nu ar fi putut. Credem că serviciul STT face canalele vocale Discord mai accesibile, și acesta este principalul motiv pentru care utilizatorii noștri obișnuiți continuă să folosească serviciul.

### Comentarii despre Botul Discord SeaVoice

Un alt subiect interesant găsit în jurnale au fost comentariile despre botul în sine. Din fericire, am văzut o mulțime de comentarii foarte pozitive despre bot și performanța sa.

<center>
<img src="/images/blog/30-stt-case-study/discord-seavoice-transcription-accuracy.png" alt="Utilizatorul SeaVoice comentează despre acuratețea transcrierii."/>

*Utilizatorul SeaVoice comentează despre acuratețea transcrierii.*
</center>

Am găsit, de asemenea, o mulțime de comentarii constructive.

<center>
<img src="/images/blog/30-stt-case-study/discord-stt-accuracy-british-accent.png" alt="Utilizatorul SeaVoice sugerează îmbunătățiri pentru accentele britanice."/>

*Utilizatorul SeaVoice sugerează îmbunătățiri pentru accentele britanice.*
</center>

<center>
<img src="/images/blog/30-stt-case-study/discord-stt-siri-accent-accuracy-comparison.png" alt="Utilizatorul compară performanța SeaVoice în engleza accentuată cu performanța Siri."/>

*Utilizatorul compară performanța SeaVoice în engleza accentuată cu performanța Siri.*
</center>

Majoritatea comentariilor constructive au fost despre faptul că botul nu a funcționat bine cu engleza accentuată non-americană; în special, utilizatorii au menționat accentele britanice și scoțiene. Pentru viitorul serviciilor noastre STT, putem depune un efort semnificativ pentru a îmbunătăți recunoașterea vorbirii pentru diverse accente englezești. Desigur, engleza nu este singura limbă pe care o vorbesc utilizatorii noștri, așa că intenționăm să adăugăm mai mult suport lingvistic botului. De fapt, finalizăm în prezent integrările STT și TTS pentru mandarina taiwaneză și vom lansa o versiune actualizată a botului în curând.

## Confidențialitate, Sensibilitatea Datelor și Conținut Potențial Ofensator

Dezvoltarea AI este înconjurată de o mulțime de dileme etice. Modelele noastre au nevoie de cantități mari de date de la utilizatori reali pentru a funcționa bine, *dar cum colectăm aceste date etic, respectând în același timp confidențialitatea utilizatorilor noștri?* Modelele învață doar pe baza datelor care le sunt furnizate și, prin urmare, au prejudecăți (poate neașteptate); *cum ne putem asigura că modelele noastre servesc toți utilizatorii noștri cu aceeași calitate?* În plus, modelele noastre nu au niciun simț al acceptabilității sociale și pot produce rezultate pe care unii utilizatori le consideră ofensatoare. Așa cum a spus un utilizator de-al nostru atât de inteligent: *"Este rasist dacă botul a făcut-o, asta e întrebarea"*.

<center>
<img src="/images/blog/30-stt-case-study/stt-accidental-racial-slur.png" alt="Utilizatorul SeaVoice indică o transcriere inexactă problematică."/>

*Utilizatorul SeaVoice indică o transcriere inexactă problematică.*
</center>

Motivul pentru care aduc în discuție aceste puncte este că au existat câteva transcrieri tulburătoare în jurnale. Prima problemă este că botul transcrie uneori conținut ofensator. În exemplul de mai sus, botul a transcris accidental numele de utilizator al cuiva ca o insultă rasială. Aceasta este în mod clar o eroare din partea botului care poate fi ofensatoare pentru utilizatorii noștri și ar trebui investigată. Dar acest lucru duce la mai multe întrebări: *Unde tragem linia între ofensă și rău?*

<center>
<img src="/images/blog/30-stt-case-study/discord-transcription-censor.png" alt="Utilizatorul SeaVoice comentează despre încercarea de a cenzura anumite cuvinte din transcriere."/>

*Utilizatorul SeaVoice comentează despre încercarea de a cenzura anumite cuvinte din transcriere.*
</center>

Ei bine, pentru început, am decis să dăm această putere utilizatorilor. Una dintre următoarele funcționalități la care vom lucra este cenzura configurabilă pentru TTS și STT. Acest lucru va permite serverelor să aplice opțional cenzura pentru înjurături, conținut sexual, insulte rasiale etc.

<center>
<img src="/images/blog/30-stt-case-study/discord-careful-transcript-content.png" alt="Utilizatorul SeaVoice avertizează un alt participant să fie atent la ceea ce spune, deoarece va apărea în transcriere."/>

*Utilizatorul SeaVoice avertizează un alt participant să fie atent la ceea ce spune, deoarece va apărea în transcriere.*
</center>

Interesant, o altă problemă conexă pe care am văzut-o este că utilizatorii se autocenzurează pentru a evita ca anumite lucruri să apară în transcriere. Acest lucru a fost surprinzător de comun și am văzut mai multe cazuri în care utilizatorii au explicat că nu doreau ca botul să transcrie ceea ce urmau să spună, așa că s-au oprit și au repornit STT. Aceasta este o preocupare perfect valabilă din partea utilizatorului dacă, de exemplu, nu doresc ca botul să transcrie anumite informații sensibile.

<center>
<img src="/images/blog/30-stt-case-study/discord-stt-pause-deafen.png" alt="Cum să întrerupeți STT prin dezactivarea sunetului botului."/>

*Cum să întrerupeți STT prin dezactivarea sunetului botului.*
</center>

Nu sunt sigur dacă există vreo modalitate de a îmbunătăți experiența utilizatorului în acest caz, dar aș sfătui utilizatorii că pot "dezactiva sunetul" botului temporar pentru a opri trimiterea oricărui sunet către bot. În acest caz, botul nu va primi date audio până când nu este reactivat, astfel încât utilizatorul poate întrerupe esențial o sesiune STT fără a opri și a începe una nouă.

<center>
<img src="/images/blog/30-stt-case-study/discord-stt-opt-out-mute.jpg" alt="Utilizatorul SeaVoice comentează despre disconfortul unui alt participant cu botul."/>

*Utilizatorul SeaVoice comentează despre disconfortul unui alt participant cu botul.*
</center>

În cele din urmă, ultima problemă pe care am văzut-o este că unii utilizatori sunt atât de incomodați de transcrierea botului încât evită să vorbească activ în canalul vocal în timp ce botul este prezent. Acest lucru este **exact opusul** scopului nostru, care este de a face canalele vocale Discord mai accesibile tuturor. Deși sperăm că utilizatorii vor accepta [Politica noastră de confidențialitate](https://seasalt.ai/privacy) și vor avea încredere în noi pentru a utiliza datele lor în mod responsabil, respectăm pe deplin dreptul tuturor la confidențialitate. Ca atare, **următoarea funcționalitate pe care o vom implementa este o setare de renunțare la STT**. Acest lucru va permite oricărui utilizator să renunțe la înregistrarea și transcrierea STT, iar datele lor audio nu vor fi accesate sau colectate în niciun fel de bot.

Sperăm că aceste funcționalități planificate ne vor permite să continuăm să facem canalele vocale mai accesibile tuturor, oferind în același timp utilizatorilor posibilitatea de a interacționa cu botul SeaVoice la un nivel cu care se simt confortabil. Vom continua să depunem eforturi pentru a aborda proactiv aceste probleme dificile pentru a face SeaVoice cel mai bun posibil!

Vă mulțumim pentru interesul acordat botului nostru Discord și mulțumim utilizatorilor noștri pentru sprijinul continuu! Puteți afla mai multe despre produsul nostru STT pe [pagina de pornire SeaVoice Speech-to-Text](https://suite.seasalt.ai/tts). Pentru o demonstrație individuală a oricăruia dintre produsele noastre AI vocale, completați [formularul de programare a demonstrației](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting).

Dacă nu ați încercat încă botul SeaVoice, puteți afla mai multe despre botul nostru și îl puteți adăuga la serverul dvs. pe [Wiki-ul Botului SeaVoice Discord](https://wiki.seasalt.ai/seavoice/discord/1-intro-discord-bot/). Nu ezitați să vă alăturați [serverului oficial Discord SeaVoice](https://discord.gg/dfAYfwBQ).

<center>
<iframe src="https://discordapp.com/widget?id=919037515514654721&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
</center>
`;export{e as default};

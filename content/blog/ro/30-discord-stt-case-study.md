---
title: "Speech-to-Text pe Discord: Un studiu de caz al botului STT Discord"
metatitle: "Speech-to-Text pe Discord: Un studiu de caz al botului STT Discord"
date: 2023-01-23T11:25:00-08:00
draft: false
author: Kim Dodds
description: În acest blog vom discuta constatările noastre despre modul în care utilizatorii reali Discord utilizează serviciile SeaVoice după revizuirea mai multor săptămâni de date autentice speech-to-text.
weight: 1
tags: ["SeaVoice", "Discord"]
image: images/blog/30-stt-case-study/discord-stt-bot-case-study.jpg
canonicalURL: "/blog/speech-to-text-discord-case-study/"
url: "/blog/speech-to-text-discord-case-study/"
modified_date: "2025-08-01T12:00:00Z"
---

*După lansarea SeaVoice, unul dintre cei mai rapizi și mai precisi roboți text-to-speech și speech-to-text de pe Discord, am vrut să înțelegem cum interacționau de fapt utilizatorii cu serviciile. În acest blog vom discuta constatările noastre după revizuirea mai multor săptămâni de date reale ale utilizatorilor speech-to-text.*

# SeaVoice: Un bot Discord Text-to-Speech & Speech-to-Text

Discord, fiind o platformă utilizată în principal pentru o combinație de chat audio și text, este un teren de testare fantastic pentru inteligența vocală și serviciile de procesare a limbajului natural. Am implementat botul SeaVoice, echipat cu comenzi text-to-speech și speech-to-text, pe Discord în august 2022. Pentru a afla mai multe despre cum funcționează botul sau pentru a vedea o scurtă demonstrație video, puteți vizita [wiki-ul botului SeaVoice](https://wiki.seasalt.ai/seavoice/discord/1-intro-discord-bot/). În noiembrie același an, am lansat o nouă versiune cu îmbunătățiri semnificative la nivel de backend (așa cum este descris în postarea noastră de pe blog: [Botul Discord SeaVoice: Îmbunătățiri backend și de stabilitate](https://seasalt.ai/blog/27-seavoice-discord-backend-improvements/)) care ne permit să înregistrăm date anonime despre modul în care utilizatorii interacționează cu botul SeaVoice. În ultimul nostru blog ([Studiu de caz al botului TTS Discord](https://seasalt.ai/blog/29-discord-tts-case-study/)) am analizat datele utilizatorilor pe o perioadă de 1 lună din comanda text-to-speech. Ca o continuare, în această postare vom analiza datele utilizatorilor speech-to-text pe o perioadă de aproximativ 3 săptămâni.

## Utilizarea SeaVoice STT

La momentul scrierii, botul SeaVoice a fost adăugat la aproape 900 de servere! Aproximativ 260 de servere, totalizând peste 600 de participanți, au încercat de fapt comanda STT cel puțin o dată. În ultimele 3 săptămâni am găzduit aproape 1.800 de sesiuni STT și am generat un total de **peste jumătate de milion de linii de transcriere**.

<center>
<img src="/images/blog/30-stt-case-study/discord-stt-sessions-per-day.png" alt="Sesiuni zilnice speech-to-text ale botului Discord SeaVoice pe parcursul a 3 săptămâni."/>

*Sesiuni zilnice speech-to-text ale botului Discord SeaVoice pe parcursul a 3 săptămâni.*
</center>

Dacă ne uităm la numărul total de sesiuni STT pe zi, am constatat că acesta poate fluctua de la doar 40 la peste 140 (cu o medie de aproximativ 70). Putem lua în considerare și numărul total de linii de transcriere pe care le producem. În cea mai lentă zi, producem doar 10 mii de linii, însă, într-o zi aglomerată am produs peste 40 de mii de linii. Pentru a pune acest lucru în perspectivă, pe 18 ianuarie, am găzduit 102 sesiuni STT cu un total de puțin sub 30 de mii de linii de transcriere; asta a însemnat aproape 40 de ore de înregistrare.

Am constatat, de asemenea, că, deși majoritatea sesiunilor sunt utilizate pentru conversații mai scurte (mediana de 57 de linii pe sesiune), există un număr semnificativ de sesiuni foarte lungi care ridică media la 650 de linii pe sesiune. Cea mai lungă sesiune a noastră a avut peste 30 de mii de linii, mai mult decât o zi medie! În cele din urmă, am analizat și câți utilizatori tind să fie în fiecare sesiune și am constatat că există de obicei 4 până la 5 utilizatori în fiecare sesiune - cu toate acestea, am folosit o dată botul pentru a sprijini transcrierea live la un seminar virtual care a avut 45 de participanți!

<center>
<img src="/images/blog/30-stt-case-study/discord-transcription-lines-per-day.png" alt="Linii transcrise pe zi de botul Discord SeaVoice pe parcursul a 3 săptămâni."/>

*Linii transcrise pe zi de botul Discord SeaVoice pe parcursul a 3 săptămâni.*
</center>

Deși majoritatea serverelor nu au folosit sesiunea STT de mai mult de câteva ori, există destul de multe care utilizează serviciul extensiv. De când am început să înregistrăm datele de utilizare STT la sfârșitul lunii decembrie, numărul total mediu de sesiuni pe server este de aproximativ 7; cu toate acestea, serverul nostru #1 a înregistrat 131 de sesiuni - Asta înseamnă o medie de peste 6 sesiuni pe zi! Același server a transcris peste 150 de mii de linii de vorbire în doar 3 săptămâni! Poate mai impresionant decât atât, utilizatorul nostru #1 este de pe același server și a avut peste 60 de mii de linii din propria sa vorbire transcrise!

## Observații

### De ce folosesc oamenii Speech-to-Text

<center>
<img src="/images/blog/30-stt-case-study/discord-audio-transcript-download-user-quote.jpg" alt="Un utilizator al botului Discord SeaVoice își exprimă entuziasmul cu privire la fișierele audio și de transcriere persistente."/>

*Un utilizator al botului Discord SeaVoice își exprimă entuziasmul cu privire la fișierele audio și de transcriere persistente.*
</center>

Deci, prima noastră întrebare după ce am văzut datele de utilizare este: **de ce utilizează utilizatorii frecvenți speech-to-text în primul rând?**

Am căutat prin baza de date pentru a găsi câteva explicații. Cu toate acestea, s-a dovedit mai dificil să găsim explicații concrete despre motivul pentru care utilizatorii utilizau serviciul STT, spre deosebire de serviciul TTS. Aparent, oamenii simt nevoia să le explice celorlalți din chat de ce folosesc TTS, dar mai puțin în cazul STT. Indiferent, am găsit câteva transcrieri interesante care au oferit o perspectivă asupra motivului pentru care utilizatorii decid să utilizeze serviciul STT.

__*De ce utilizatorii utilizează STT:*__

- „De aceea este folosită transcrierea, pentru că pot vedea lucruri pe care le-am ratat.”
- „[utilizatorul] are probleme de auz, așa că primește un bot care transcrie”
- „[utilizatorul] face raiduri cu ei și folosesc asta pentru a transcrie lucruri, dar apoi [utilizatorul] a spus, oh, putem folosi asta și pentru chestii D și D”
- „Abia aștept să mă întorc și să citesc unele dintre aceste transcrieri mai târziu [...] Vreau să ascult din nou acea înregistrare și să mă uit la acea transcriere”
- „Dacă avem întâlnirile noastre aici, atunci putem introduce transcrierea întâlnirii în AI”
- „În timpul unei întâlniri cu oameni, este grozav să vezi de fapt o transcriere”
- „[oameni] care nu sunt în chat sau oameni care sunt în comunitate, dar nu fac parte din chatul vocal, dar decid să se uite și să citească”

Deci, în general, se pare că majoritatea utilizatorilor se bucură de comoditatea de a avea o transcriere live care îi poate ajuta să țină evidența conversației și să umple orice lacune pe care le-au ratat. Acest lucru este valabil în special pentru utilizatorii care au deficiențe de auz sau dificultăți audio/de conexiune. Pentru unii utilizatori, cel mai mare avantaj este păstrarea unei înregistrări audio și text permanente a conversației lor; acest lucru ar putea fi deosebit de aplicabil pentru cazuri de utilizare precum menținerea unui jurnal de sesiune Dungeons & Dragons sau păstrarea înregistrării întâlnirilor importante.

Deoarece mulți utilizatori nu au spus în mod explicit de ce foloseau serviciul STT, a părut util să înțelegem ce făceau în timp ce utilizau botul. Revizuirea transcrierilor de la utilizatori mi-a dat indicii despre activitățile pe care le făceau în timp ce transcriau:

__*Ce fac utilizatorii în timp ce utilizează STT:*__

- Doar discută
    - Jocuri:
    - Jocuri ocazionale
    - Jocuri avansate (ex/ coordonarea grupului MMO, Massive Multiplayer Online, raiduri)
- Jocuri de rol (Dungeons & Dragons)
- Streaming / înregistrare conținut
- Discutarea muncii școlare / profesionale / voluntare

Marea majoritate a transcrierilor se încadrează în categoriile „doar discută” și „jocuri ocazionale”. Așa cum am văzut mai sus, cred că majoritatea utilizatorilor în acest caz utilizează botul pentru a îmbunătăți accesibilitatea canalului vocal Discord și/sau se bucură de comoditatea de a vedea transcrierea live pentru a umple orice lacune pe care le-au ratat în conversație. În unele cazuri (cum ar fi atunci când este utilizat pentru raiduri MMO), discuțiile despre jocuri sunt foarte complexe, iar utilizatorii se coordonează între ei în timp real; transcrierile live s-ar putea dovedi extrem de utile pentru succesul echipei, deoarece utilizatorii pot consulta transcrierile în timp ce joacă.

<center>
<img src="/images/blog/30-stt-case-study/discord-stt-for-mmo-raid.jpg" alt="Exemplu de discuție complexă în timpul unui raid MMO."/>

*Exemplu de discuție complexă în timpul unui raid MMO.*
</center>

De asemenea, se pare că mulți utilizatori folosesc botul pentru a transcrie conversații mai serioase, cum ar fi întâlnirile comunitare școlare, profesionale și/sau de voluntariat. Am folosit, de asemenea, botul nostru pentru a transcrie o conferință tehnică online, [UnTechCon](https://gfsc.studio/2022/11/14/announcing-untechcon.html). În aceste cazuri, înregistrarea finală și fișierele de transcriere se pot dovedi foarte utile utilizatorilor pentru revizuire după întâlnire. Un ultim exemplu interesant pe care l-am găsit a fost un utilizator care înregistra conținut pentru stream-ul său. Deoarece transcrierea finală vine cu marcaje de timp, utilizatorii ar putea încărca fișierul de transcriere ca subtitrări pentru conținutul lor audio sau video înregistrat.

<center>
<img src="/images/blog/30-stt-case-study/discord-stt-accessibility-user-quote.jpg" alt="Un utilizator SeaVoice își exprimă mulțumirile pentru că a făcut canalele vocale Discord mai accesibile."/>

*Un utilizator SeaVoice își exprimă mulțumirile pentru că a făcut canalele vocale Discord mai accesibile.*
</center>

Dar, indiferent de motivul exact pentru care utilizează serviciul STT, mulți utilizatori și-au exprimat entuziasmul că au putut participa la conversațiile din canalul vocal, când altfel nu ar fi putut. Credem că serviciul STT face canalele vocale Discord mai accesibile și acesta este principalul motiv pentru care utilizatorii noștri obișnuiți continuă să utilizeze serviciul.

### Comentarii despre botul Discord SeaVoice

Un alt subiect interesant găsit în jurnale a fost comentariile despre botul însuși. Din fericire, am văzut mai multe comentarii foarte pozitive despre bot și performanța sa.

<center>
<img src="/images/blog/30-stt-case-study/discord-seavoice-transcription-accuracy.png" alt="Un utilizator SeaVoice comentează acuratețea transcrierii."/>

*Un utilizator SeaVoice comentează acuratețea transcrierii.*
</center>

Am găsit, de asemenea, câteva feedback-uri constructive.

<center>
<img src="/images/blog/30-stt-case-study/discord-stt-accuracy-british-accent.png" alt="Un utilizator SeaVoice sugerează îmbunătățiri pentru accentele britanice."/>

*Un utilizator SeaVoice sugerează îmbunătățiri pentru accentele britanice.*
</center>

<center>
<img src="/images/blog/30-stt-case-study/discord-stt-siri-accent-accuracy-comparison.png" alt="Un utilizator compară performanța SeaVoice pe engleza accentuată cu cea a lui Siri."/>

*Un utilizator compară performanța SeaVoice pe engleza accentuată cu cea a lui Siri.*
</center>

Majoritatea comentariilor constructive au avut legătură cu faptul că botul nu funcționează bine pe engleza cu accent non-american; în special utilizatorii au menționat accentele britanice și scoțiene. Pentru viitorul serviciilor noastre STT, am putea depune eforturi semnificative pentru a îmbunătăți recunoașterea vorbirii pentru diverse accente de engleză. Desigur, engleza nu este singura limbă pe care o vorbesc utilizatorii noștri, așa că intenționăm să adăugăm și mai mult suport lingvistic botului. De fapt, în prezent finalizăm integrările noastre STT și TTS pentru mandarină taiwaneză și vom lansa o versiune actualizată a botului în scurt timp.

## Confidențialitate, sensibilitate a datelor și conținut potențial ofensator

Dezvoltarea AI este înconjurată de un torent de dileme etice. Modelele noastre au nevoie de cantități masive de date reale ale utilizatorilor pentru a funcționa bine, *dar cum colectăm aceste date etic, respectând în același timp confidențialitatea utilizatorilor noștri?* Modelele învață doar pe baza datelor care le sunt furnizate și, prin urmare, au prejudecăți (potențial neprevăzute); *deci cum ne putem asigura că modelele noastre servesc toți utilizatorii la fel de bine?* Mai mult, modelele noastre nu au niciun concept de acceptabilitate socială și pot produce rezultate pe care unii utilizatori le consideră ofensatoare. Așa cum a spus unul dintre utilizatorii noștri atât de elocvent: *„Este rasist dacă botul o face, asta e întrebarea”*.

<center>
<img src="/images/blog/30-stt-case-study/stt-accidental-racial-slur.png" alt="Un utilizator SeaVoice semnalează o transcriere problematică inexactă."/>

*Un utilizator SeaVoice semnalează o transcriere problematică inexactă.*
</center>

Motivul pentru care aduc în discuție aceste puncte este din cauza câtorva transcrieri îngrijorătoare din jurnale. Prima problemă este că botul transcrie ocazional conținut ofensator. În exemplul de mai sus, botul a transcris accidental numele de utilizator al cuiva ca o insultă rasială. Evident, aceasta este o eroare din partea botului care poate fi ofensatoare pentru utilizatorii noștri și ar trebui investigată. Dar acest lucru duce la mai multe întrebări: *unde tragem linia între ofensă și rău?*

<center>
<img src="/images/blog/30-stt-case-study/discord-transcription-censor.png" alt="Un utilizator SeaVoice comentează încercarea de a cenzura anumite cuvinte din transcriere."/>

*Un utilizator SeaVoice comentează încercarea de a cenzura anumite cuvinte din transcriere.*
</center>

Ei bine, pentru început am decis să oferim această putere utilizatorilor. Una dintre următoarele funcții la care vom lucra este cenzura configurabilă a TTS și STT. Acest lucru va permite serverelor să aplice opțional cenzura pentru cuvinte de înjurătură, conținut sexual, insulte rasiale etc.

<center>
<img src="/images/blog/30-stt-case-study/discord-careful-transcript-content.png" alt="Un utilizator SeaVoice avertizează un alt participant să fie conștient că ceea ce spun va ajunge în transcriere."/>

*Un utilizator SeaVoice avertizează un alt participant să fie conștient că ceea ce spun va ajunge în transcriere.*
</center>

Interesant, o altă problemă conexă pe care am observat-o a fost că utilizatorii se autocenzurau pentru a evita ca anumite lucruri să apară în transcriere. Acest lucru a fost surprinzător de comun și am văzut multe cazuri în care utilizatorii au explicat că nu doreau ca botul să transcrie ceea ce urmau să spună, așa că s-au oprit și apoi au repornit STT. Aceasta este o preocupare complet validă din partea utilizatorului, dacă, de exemplu, nu doresc ca botul să transcrie informații sensibile.

<center>
<img src="/images/blog/30-stt-case-study/discord-stt-pause-deafen.png" alt="Cum să întrerupeți STT-ul prin dezactivarea sunetului botului."/>

*Cum să întrerupeți STT-ul prin dezactivarea sunetului botului.*
</center>

Nu sunt sigur că există vreo modalitate de a îmbunătăți experiența utilizatorului în acest caz, dar aș sfătui utilizatorii să „surzească” botul temporar pentru a opri trimiterea oricărui sunet către bot. În acest caz, botul nu va primi date audio până când nu va fi „desurzit”, astfel încât utilizatorul poate, în esență, să întrerupă sesiunea STT fără a opri și a începe una nouă.

<center>
<img src="/images/blog/30-stt-case-study/discord-stt-opt-out-mute.jpg" alt="Un utilizator SeaVoice comentează disconfortul unui alt participant cu botul."/>

*Un utilizator SeaVoice comentează disconfortul unui alt participant cu botul.*
</center>

În cele din urmă, ultima problemă pe care am observat-o este că unii utilizatori se simt atât de inconfortabil cu transcrierea botului încât evită în mod activ să vorbească în canalul vocal în timp ce botul este prezent. Acesta este __*exact opusul*__ scopului nostru, care este de a face canalele vocale Discord mai accesibile pentru toată lumea. Deși sperăm că utilizatorii vor accepta [politica noastră de confidențialitate](https://seasalt.ai/privacy) și vor avea încredere în noi pentru a utiliza datele lor în mod responsabil, respectăm absolut dreptul fiecăruia la confidențialitate. Ca atare, **următoarea funcție pe care o vom implementa este o setare de renunțare la STT**. Aceasta va permite oricărui utilizator să se excludă de la înregistrarea și transcrierea STT, iar datele lor audio nu vor fi accesate sau colectate în niciun fel de către bot.

Sperăm că aceste funcții planificate ne vor permite să continuăm să facem canalele vocale mai accesibile pentru toată lumea, oferind în același timp utilizatorilor posibilitatea de a interacționa cu botul SeaVoice la un nivel cu care se simt confortabil. Pe viitor, vom continua să depunem eforturi pentru a aborda proactiv aceste probleme dificile, pentru a face SeaVoice cel mai bun posibil!

Vă mulțumim pentru interesul acordat proiectelor noastre Discord Bot și vă mulțumim utilizatorilor noștri pentru sprijinul continuu! Puteți afla mai multe despre produsul nostru STT pe [pagina noastră de pornire SeaVoice Speech-to-Text](https://suite.seasalt.ai/tts). Pentru o demonstrație individuală a oricărui produs Voice Intelligence, completați [Formularul de rezervare a unei demonstrații](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting).

Dacă nu ați încercat încă botul SeaVoice, puteți afla mai multe despre botul nostru și îl puteți adăuga la serverul dvs. din [Wiki-ul botului Discord SeaVoice](https://wiki.seasalt.ai/seavoice/discord/1-intro-discord-bot/). De asemenea, nu ezitați să vă alăturați [Serverului nostru oficial Discord SeaVoice](https://discord.gg/dfAYfwBQ).

<center>
<iframe src="https://discordapp.com/widget?id=919037515514654721&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
</center>

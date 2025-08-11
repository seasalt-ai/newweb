const e=`---
title: "De la Demo la Succes: Percepția întâlnirilor (4/5)"
metatitle: "De la Demo la Succes (4/5): Percepția întâlnirilor"
date: 2021-08-28 12:26:00-07:00
modified_date: 2025-08-01T12:00:00Z
draft: false
author: Kim Dodds
description: "În a patra parte a acestei serii de bloguri, urmăriți călătoria Seasalt.ai către crearea SeaMeet, soluțiile noastre colaborative pentru întâlniri moderne."
weight: 1
tags:
  - SeaMeet
image: images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/SeaMeet animation.gif
canonicalURL: /blog/seameet-voice-summarization-topic-abstraction
url: /blog/seameet-voice-summarization-topic-abstraction
---

*De-a lungul acestei serii de bloguri, urmăriți călătoria Seasalt.ai către crearea unei experiențe complete de întâlniri moderne, începând cu începuturile sale umile, până la optimizarea serviciului nostru pe diferite hardware și modele, la integrarea sistemelor NLP de ultimă generație și, în final, la realizarea completă a SeaMeet, soluțiile noastre colaborative pentru întâlniri moderne.*

## Dincolo de transcriere

Toate obstacolele anterioare cu care ne-am confruntat ne-au învățat o lecție importantă: că am putea face toate acestea mai bine singuri.
Deci, echipa de la Seasalt.ai a început să-și antreneze propriile modele acustice și lingvistice pentru a rivaliza cu capabilitățile transcriptorului conversațional Azure.
Microsoft a prezentat o prezentare uimitoare la MS Build 2019, prezentând Azure Speech Services ca un produs extrem de capabil, dar și foarte accesibil.
După ce am fost impresionați, suntem forțați să ne punem întrebarea: de unde mergem mai departe?
Cum putem extinde acest produs deja instrumental? Întâlnirile moderne au demonstrat un potențial robust de transformare a vorbirii în text, dar aici se oprește.
Știm că Azure ne poate asculta, dar ce-ar fi dacă am putea să-l facem să *gândească* pentru noi?
Cu doar transcrieri, deși produsul este impresionant, aplicațiile sunt oarecum limitate.

Prin integrarea tehnologiei existente de transformare a vorbirii în text cu sisteme care pot produce informații din transcrieri, putem livra un produs care depășește așteptările și anticipează nevoile utilizatorilor.
Am decis să încorporăm trei sisteme pentru a îmbunătăți valoarea generală a transcrierilor noastre SeaMeet: rezumarea, abstractizarea subiectelor și extragerea elementelor de acțiune.
Fiecare dintre acestea a fost ales pentru a atenua punctele dureroase specifice ale utilizatorilor.

Pentru a demonstra, vom arăta rezultatul rulării sistemelor de rezumare, subiecte și acțiuni pe următoarea transcriere scurtă:

\`\`\`
Kim: "Mulțumesc, Xuchen, ești pe mut pentru că sunt mulți oameni în acest apel. Apasă Star 6 pentru a activa sunetul.”

Xuchen: "OK, am crezut că e doar o recepție proastă.",

Kim: "Da.",

Sam: "Tocmai am trimis un fișier separat cu date vocale pentru marți până la 30 de zile. Ar trebui să aveți niște versiuni actualizate.",

Kim: "Deci, vor exista cu siguranță cazuri limită în care acest lucru nu funcționează. Am găsit deja câteva, ca în acest exemplu. Scoate verbul de acolo și spune că vorbitorul este cel desemnat, când de fapt Carol este cel desemnat. Dar este același model ca ceva de genul al doilea, unde vrei cu adevărat ca eu să fiu cel desemnat, pentru că nu-l desemnează pe Jason, ci se desemnează pe ei înșiși să-i spună lui Jason.",

Sam: "Am înțeles.",

Xuchen: "Deci, dezavantajul acestui lucru este că trebuie să scrii reguli pentru el. Da, avantajul este că este deja un model antrenat. Îl poți antrena mai departe, dar nu trebuie să arunci o tonă de date asupra acestuia.",

Kim: "Deși nu face clasificarea care ne-ar aduce Este aceasta o acțiune sau este aceasta alta?",

Xuchen: "Deci, trucul aici este că vrem ca verbul auxiliar să fie prezent, dar am vrea și niște nume de persoane.",

Sam: "Corect, altfel poate pentru că.",

Xuchen: "Da, dacă există o propoziție cu, știi, există o mulțime de instanțe cu cuvinte evidente. Cu toate acestea, nu multe dintre ele ar ajuta acțiunile."
\`\`\`

## Rezumare 

<center>
<img src="/images/blog/6-seameet-voice-intelligence-meeting-transcription-summarization-topic-abstraction-action-extraction/summarization.png" alt="Interfața SeaMeet a Seasalt.ai, cu enunțuri ale utilizatorilor cu rezumatele lor scurte"/>

*O prezentare generală a interfeței noastre SeaMeet, cu enunțuri ale utilizatorilor cu rezumatele lor scurte în stânga*
</center>

Deși navigarea unei transcrieri text este cu siguranță mai ușoară decât căutarea prin ore întregi de înregistrări audio, pentru întâlnirile deosebit de lungi poate fi încă consumator de timp să găsești conținut specific sau să obții o imagine de ansamblu a conversației în ansamblu.
Am ales să oferim două tipuri de rezumate pe lângă transcrierea completă.

Rezumatele la nivel de enunț individual oferă segmente mai concise, ușor de citit.
În plus, rezumatele scurte ajută la normalizarea textului prin eliminarea segmentelor semantic goale și efectuarea rezoluției anaforei și a co-referinței.
Putem apoi alimenta segmentele rezumate în aplicații ulterioare (cum ar fi abstractizarea subiectelor) pentru a îmbunătăți rezultatele finale.

Pe lângă rezumatele scurte, am ales să oferim și un singur rezumat lung care își propune să creeze o imagine de ansamblu foarte generală a întregii întâlniri.
Acest rezumat funcționează ca un abstract pentru întâlnire, acoperind doar punctele principale de discuție și concluziile.

Următorul este un exemplu de rezumate scurte, unde am introdus fiecare segment din transcrierea originală prin rezumator:

\`\`\`
Kim: "Xuchen este pe mut pentru că sunt mulți oameni în apel."

Xuchen: "E doar o recepție proastă."

Sam: "Am trimis un fișier separat cu date vocale pentru marți până la 30 de zile."

Kim: "Vor exista cazuri limită în care acest lucru nu funcționează."

Xuchen: "Dezavantajul antrenării unui model deja antrenat este că trebuie să scrii reguli pentru el."

Kim: "Clasificarea nu face clasificarea care le-ar aduce o acțiune."

Xuchen: "Trucul aici este că vor ca verbul auxiliar să fie prezent, dar vor și niște nume de persoane."

Xuchen: "Dacă există o propoziție cu cuvinte, nu multe dintre ele ar ajuta acțiunile."
\`\`\`

Și acest exemplu arată întreaga întâlnire rezumată într-un singur paragraf:

\`\`\`
„Xuchen este pe mut pentru că sunt mulți oameni în apel. Sam a trimis un fișier separat cu date vocale pentru marți până la 30 de zile. Xuchen a găsit câteva cazuri limită în care vorbitorul este cel desemnat.”
\`\`\`

La baza ambelor componente de rezumare scurtă și lungă se află un model de rezumare bazat pe transformator.
Am ajustat modelul pe un set de date de dialog pentru rezumarea abstractivă.
Datele conțin extrase textuale de diverse lungimi, fiecare asociată cu un rezumat scris de mână.
Pentru rezumarea multilingvă, folosim aceeași paradigmă, dar utilizăm un model de bază multilingv ajustat pe o versiune tradusă a setului de date.
Din interfața SeaMeet, utilizatorul are, de asemenea, opțiunea de a verifica un rezumat produs de mașină sau de a-și furniza propriul rezumat.
Putem apoi colecta aceste rezumate introduse de utilizator și le putem adăuga înapoi la setul nostru de antrenament pentru a îmbunătăți continuu modelele noastre.

## Abstractizarea subiectelor

<center>
<img src="/images/blog/6-seameet-voice-intelligence-meeting-transcription-summarization-topic-abstraction-action-extraction/topics.png" alt="Motorul de extragere a subiectelor SeaMeet extrage subiecte dintr-o întâlnire"/>

*Interfața SeaMeet, axată pe fila „Subiecte” din partea dreaptă*
</center>

O altă problemă atunci când se lucrează cu colecții mari de transcrieri este organizarea, clasificarea și căutarea acestora.
Prin abstractizarea automată a cuvintelor cheie și a subiectelor din transcriere, putem oferi utilizatorilor o modalitate fără efort de a urmări anumite întâlniri sau chiar secțiuni specifice ale întâlnirilor în care un subiect relevant este în discuție.
În plus, aceste subiecte servesc ca o altă metodă de rezumare a celor mai importante și memorabile informații dintr-o transcriere.

Iată un exemplu de cuvinte cheie care ar fi extrase din transcrierea eșantion:

\`\`\`
verb auxiliar
vorbitor
date vocale
fișier separat
versiuni actualizate
nume de persoane
model antrenat
scrie reguli
\`\`\`

Sarcina de extragere a subiectelor utilizează o combinație de abordări abstractive și extractive.
Abstractiv se referă la o abordare de clasificare a textului, unde fiecare intrare este clasificată într-un set de etichete văzute în timpul antrenamentului.
Pentru această metodă am folosit o arhitectură neurală antrenată pe documente asociate cu o listă de subiecte relevante.
Extractiv se referă la o abordare de căutare a frazelor cheie, unde frazele cheie relevante sunt extrase din textul furnizat și returnate ca subiecte.
Pentru această abordare, folosim o combinație de metrici de similaritate, cum ar fi similaritatea cosinus și TF-IDF, pe lângă informațiile de co-ocurență a cuvintelor pentru a extrage cele mai relevante cuvinte cheie și fraze.

Tehnicile abstractive și extractive au ambele avantaje și dezavantaje, dar prin utilizarea lor împreună putem profita de punctele forte ale fiecăreia.
Modelul abstractiv este excelent la colectarea detaliilor distincte, dar conexe și la găsirea unui subiect puțin mai generic care să le potrivească pe toate.
Cu toate acestea, nu poate prezice niciodată un subiect pe care nu l-a văzut în timpul antrenamentului și este imposibil să antrenezi pe fiecare subiect imaginabil care ar putea apărea într-o conversație!
Modelele extractive, pe de altă parte, pot extrage cuvinte cheie și subiecte direct din text, ceea ce înseamnă că este independent de domeniu și poate extrage subiecte pe care nu le-a mai văzut niciodată.
Dezavantajul acestei abordări este că, uneori, subiectele sunt prea similare sau prea specifice.
Prin utilizarea ambelor, am găsit un echilibru fericit între generalizabil și specific domeniului.

## Extragerea elementelor de acțiune

<center>
<img src="/images/blog/6-seameet-voice-intelligence-meeting-transcription-summarization-topic-abstraction-action-extraction/actions.png" alt="Motorul de extragere a acțiunilor SeaMeet creează rezumate abstractive scurte ale elementelor de acțiune extrase din transcrierile întâlnirilor"/>

*Interfața SeaMeet, axată pe fila „Acțiuni” din partea dreaptă*
</center>

Ultimul punct dureros pe care ne-am propus să-l atenuăm pentru utilizatori este sarcina de a înregistra elementele de acțiune.
Înregistrarea elementelor de acțiune este o sarcină foarte comună care este atribuită unui angajat în timpul unei întâlniri.
Notarea „cine i-a spus cui să facă ce când” poate fi extrem de consumatoare de timp și poate distrage scriitorul, făcându-l incapabil să participe pe deplin la întâlnire.
Prin automatizarea acestui proces, sperăm să atenuăm o parte din această responsabilitate de la utilizator, astfel încât toată lumea să își poată dedica întreaga atenție participării la întâlnire.

Următorul este un exemplu de elemente de acțiune care ar putea fi extrase din transcrierea exemplu:

\`\`\`
sugestie: "Sam spune că echipa ar trebui să aibă niște versiuni actualizate."

declarație: "Kim spune că vor exista cu siguranță cazuri limită în care acest lucru nu funcționează."

imperativ: "Xuchen spune că cineva trebuie să scrie reguli pentru el."

dorință: "Xuchen spune că echipa vrea ca verbul auxiliar să fie prezent, dar vrea și niște nume de persoane."
\`\`\`

Scopul sistemului de extragere a acțiunilor este de a crea rezumate abstractive scurte ale elementelor de acțiune extrase din transcrierile întâlnirilor.
Rezultatul rulării extractorului de acțiuni peste o transcriere a unei întâlniri este o listă de comenzi, sugestii, declarații de intenție și alte segmente acționabile care pot fi prezentate ca sarcini sau urmăriri pentru participanții la întâlnire.
În viitor, extractorul va capta, de asemenea, numele persoanelor desemnate și ale celor care desemnează, precum și termenele limită legate de fiecare element de acțiune.

Pipeline-ul de extragere a acțiunilor are două componente principale: un clasificator și un rezumator.
În primul rând, fiecare segment este trecut printr-un clasificator multi-clasă și primește una dintre următoarele etichete:

- Întrebare
- Imperativ
- Sugestie
- Dorință
- Declarație
- Neacționabil

Dacă segmentul primește orice etichetă, alta decât „neacționabil”, este trimis componentei de rezumare împreună cu cele două segmente anterioare din transcriere, care oferă mai mult context pentru rezumare.
Pasul de rezumare este, în esență, același cu componenta de rezumare independentă, însă modelul este antrenat pe un set de date personalizat, construit special pentru rezumarea elementelor de acțiune cu un format de ieșire dorit.

## SeaMeet capătă un creier 

Acesta a fost un pas important către crearea propriului nostru produs unic: antrenarea modelelor de rezumare, plus extragerea subiectelor și a acțiunilor pentru a duce produsul nostru și mai departe, și proiectarea unei interfețe frumoase pentru a lega totul într-un pachet uimitor.
Aceasta este povestea de până acum, începutul călătoriei Seasalt.ai de a aduce cele mai bune soluții de afaceri pe o piață în rapidă evoluție și de a le livra lumii, SeaMeet: Viitorul întâlnirilor moderne.
`;export{e as default};

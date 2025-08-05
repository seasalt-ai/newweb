---
title: "De la demonstrație la succes: insight-uri din întâlniri (4/5)"
metatitle: "De la demonstrație la succes (4/5): insight-uri din întâlniri"
date: 2021-08-28T12:26:00-07:00
author: Kim Dodds
image: "images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/SeaMeet animation.gif"
draft: false
description: "În partea a patra a acestei serii de blog-uri, urmați călătoria Seasalt.ai de a crea SeaMeet, soluția noastră colaborativă pentru întâlniri moderne."
tags: ["SeaMeet"]
weight: 1  
canonicalURL: "/blog/seameet-voice-summarization-topic-abstraction"
url: "/blog/seameet-voice-summarization-topic-abstraction"
aliases:
    - /blog/6-seameet-voice-intelligence-meeting-transcription-summarization-topic-abstraction-action-extraction/
modified_date: 2024-12-19T10:30:00Z
---

*În această serie de blog-uri, urmați călătoria Seasalt.ai de a crea o experiență completă de întâlniri moderne, de la începuturile sale modeste, până la optimizarea serviciilor noastre pe diferite hardware și modele, până la integrarea celor mai avansate sisteme de procesare a limbajului natural, în final realizând complet soluția noastră colaborativă pentru întâlniri moderne SeaMeet.*

## Dincolo de transcriere

Toate obstacolele pe care le-am întâlnit anterior ne-au dat o lecție importantă: putem face totul mai bine singuri.
Astfel, echipa Seasalt.ai a început să antreneze propriile noastre modele acustice și lingvistice pentru a rivaliza cu transcriberul de conversații Azure.
Microsoft a făcut o prezentare excelentă la MS Build 2019, demonstrând serviciile vocale Azure, care este atât un produs puternic cât și foarte ușor de folosit.
În uimire, am trebuit să ne întrebăm: unde mergem de aici?
Cum putem extinde acest produs deja util? Modern Meetings a demonstrat un potențial puternic de conversie vocală în text, dar atât.
Știam că Azure ne poate auzi vorbind, dar ce-ar fi dacă am putea să-l facem să *gândească* pentru noi?
Să ne bazăm doar pe transcriere, deși produsul era impresionant, aplicațiile sale erau oarecum limitate.

Prin combinarea tehnologiei existente de conversie vocală în text cu sisteme capabile să genereze insight-uri din transcrieri, putem oferi produse care depășesc așteptările și anticipează nevoile utilizatorilor.
Am decis să integrăm trei sisteme pentru a îmbunătăți valoarea generală a transcrierilor noastre SeaMeet: rezumarea, abstractizarea temelor și extragerea acțiunilor.
Alegerea acestor sisteme a fost făcută pentru a atenua punctele specifice de durere ale utilizatorilor.

Pentru demonstrație, vom arăta rezultatele rulării sistemelor de rezumare, teme și acțiuni pe următoarea transcriere scurtă:

```
Kim: "Mulțumesc, Xuchen, ești pe mute pentru că sunt mulți oameni pe acest apel. Apasă asterisc 6 pentru a te demuta."

Xuchen: "Bine, am crezut că era doar semnalul prost."

Kim: "Da."

Sam: "Tocmai am trimis un fișier separat care conține datele vocale de marți până la 30 de zile. Ar trebui să aveți niște versiuni actualizate."

Kim: "Deci cu siguranță vor fi câteva cazuri limită unde această metodă nu va funcționa. Am găsit deja câteva în acest exemplu. Ia verbul de acolo și spune că vorbitorul este destinatarul, când de fapt Carol este destinatarul. Dar acesta este același model ca în al doilea exemplu, chiar speri să fiu destinatarul, pentru că nu l-au desemnat pe Jason, s-au desemnat pe ei înșiși să-l spună pe JASON."

Sam: "Înțeleg."

Xuchen: "Deci dezavantajul acestei metode este că trebuie să scrii reguli pentru ea. Da, avantajul este că este un model deja antrenat. Poți să-l antrenezi mai departe, dar nu trebuie să investim o mulțime de date pentru asta."

Kim: "Deși nu face clasificarea, poate să ne spună dacă aceasta este o acțiune sau altceva?"

Xuchen: "Deci, trucul aici este că speră să existe verbe auxiliare, dar speră și să existe niște nume de persoane."

Kim: "Da, altfel ar putea fi pentru că."

Xuchen: "Da, dacă într-o propoziție sunt multe instanțe cu cuvinte clare. Cu toate acestea, nu multe dintre ele ajută la acțiune."
```

## Rezumarea

<center>
<img src="/images/blog/6-seameet-voice-intelligence-meeting-transcription-summarization-topic-abstraction-action-extraction/summarization.png" alt="Interfața SeaMeet a Seasalt.ai cu declarațiile utilizatorilor și rezumatele lor scurte"/>

*Vederea de ansamblu a interfeței noastre SeaMeet, cu declarațiile utilizatorilor și rezumatele lor scurte în partea stângă*
</center>

Deși navigarea prin transcrieri text este cu siguranță mai ușoară decât să parcurgi ore de înregistrări, pentru întâlniri deosebit de lungi, găsirea unui conținut specific sau înțelegerea unei priviri de ansamblu asupra întregii conversații rămâne consumatoare de timp.
Am ales să oferim două tipuri de rezumate în plus față de transcrierea completă.

Rezumatele la nivel de declarație individuală oferă fragmente mai concise și mai ușor de citit.
În plus, rezumatele scurte ajută la normalizarea textului prin eliminarea fragmentelor semantic goale și prin efectuarea rezolvării anaferei și coreferenței.
Apoi putem introduce fragmentele rezumate în aplicațiile downstream (cum ar fi abstractizarea temelor) pentru a îmbunătăți rezultatele finale.

În plus față de rezumatele scurte, am ales și să oferim un singur rezumat lung, destinat să creeze o privire de ansamblu foarte generală asupra întregii întâlniri.
Acest rezumat funcționează similar cu un rezumat al întâlnirii, acoperind doar punctele principale de discuție și concluziile.

Iată un exemplu de rezumate scurte, unde am procesat fiecare fragment din transcrierea originală prin rezumator:

```
Kim: "Xuchen este pe mute pentru că sunt mulți oameni pe apel."

Xuchen: "Doar semnalul prost."

Sam: "Am trimis un fișier separat cu datele vocale de marți până la 30 de zile."

Kim: "Vor fi câteva cazuri limită unde această metodă nu va funcționa."

Xuchen: "Dezavantajul antrenării unui model deja antrenat este că trebuie să scrii reguli pentru el."

Kim: "Clasificarea nu face acel tip de clasificare care să le dea o acțiune."

Xuchen: "Trucul aici este că speră să existe verbe auxiliare, dar speră și să existe niște nume de persoane."

Xuchen: "Dacă într-o propoziție sunt multe cuvinte, nu multe dintre ele ajută la acțiune."
```

Acest exemplu arată întreaga întâlnire rezumată într-un paragraf:

```
"Xuchen este pe mute pentru că sunt mulți oameni pe apel. Sam a trimis un fișier separat cu datele vocale de marți până la 30 de zile. Xuchen a găsit câteva cazuri limită unde vorbitorul este destinatarul."
```

Nucleul componentelor de rezumat scurt și lung este un model de rezumare bazat pe Transformer.
Am făcut fine-tuning modelului pe seturi de date de conversații pentru rezumarea abstractivă.
Datele conțin extrase de text de diverse lungimi, fiecare însoțit de un rezumat scris manual.
Pentru rezumarea multilingvă, folosim aceleași exemple, dar folosim un model de bază multilingv cu fine-tuning pe versiunile traduse ale setului de date.
În interfața SeaMeet, utilizatorii pot alege și să valideze rezumatele generate de mașină, sau să furnizeze propriile rezumate.
Apoi putem colecta aceste rezumate introduse de utilizatori și să le adăugăm înapoi în setul nostru de antrenament pentru a îmbunătăți continuu modelele noastre.

## Abstractizarea temelor

<center>
<img src="/images/blog/6-seameet-voice-intelligence-meeting-transcription-summarization-topic-abstraction-action-extraction/topics.png" alt="Motorul de extragere a temelor SeaMeet extrage teme din întâlniri"/>

*Interfața SeaMeet, concentrându-se pe tab-ul "Teme" din partea dreaptă*
</center>

O altă problemă când procesezi multe transcrieri este organizarea, clasificarea și căutarea lor.
Prin abstractizarea automată a cuvintelor cheie și temelor din transcrieri, putem oferi utilizatorilor o modalitate ușoară de a urmări anumite întâlniri, sau chiar părți specifice ale întâlnirilor care discută teme relevante.
În plus, aceste teme pot servi și ca o altă metodă de a rezuma informațiile cele mai importante și memorabile din transcriere.

Iată un exemplu de cuvinte cheie extrase din transcrierea exemplu:

```
Verbe auxiliare
Vorbitor
Date vocale
Fișier separat
Versiuni actualizate
Nume de persoane
Model antrenat
Scrierea regulilor
```

Sarcina de extragere a temelor combină metode abstractive și extractive.
Abstractivă se referă la o metodă de clasificare a textului unde fiecare intrare este clasificată într-un set de etichete văzute în timpul antrenamentului.
Pentru această metodă, folosim o arhitectură neurală antrenată pe documente împerecheate cu liste de teme relevante.
Extractivă se referă la o metodă de căutare a cuvintelor cheie unde cuvinte cheie relevante sunt extrase din textul furnizat și returnate ca teme.
Pentru această metodă, combinăm măsuri de similaritate precum similaritatea cosinus și TF-IDF cu informații despre co-ocurența cuvintelor pentru a extrage cuvintele cheie și frazele cele mai relevante.

Tehnicile abstractive și extractive au fiecare avantaje și dezavantaje, dar prin folosirea lor împreună, putem exploata punctele forte ale fiecăreia.
Modelele abstractive sunt foarte bune la colectarea detaliilor diferite dar conexe și găsirea unei teme puțin mai generale pentru a se potrivi cu toate aceste detalii.
Cu toate acestea, nu poate niciodată să prezică teme pe care nu le-a văzut în timpul antrenamentului, și este imposibil să antrenezi pe fiecare temă imaginabilă care ar putea apărea într-o conversație!
Pe de altă parte, modelele extractive pot extrage direct cuvinte cheie și teme din text, ceea ce înseamnă că este independent de domeniu și poate extrage teme pe care nu le-a văzut niciodată înainte.
Dezavantajul acestei metode este că uneori temele sunt prea similare sau prea specifice.
Prin folosirea ambelor metode simultan, găsim o zonă de confort între generalitate și specificitatea domeniului.

## Extragerea acțiunilor

<center>
<img src="/images/blog/6-seameet-voice-intelligence-meeting-transcription-summarization-topic-abstraction-action-extraction/actions.png" alt="Motorul de extragere a acțiunilor SeaMeet creează rezumate abstracte scurte din acțiunile extrase din transcrierea întâlnirii"/>

*Interfața utilizatorului SeaMeet, concentrându-se pe tab-ul "Acțiuni" din partea dreaptă*
</center>

Ultimul punct de durere pe care ne-am propus să-l atenuezi pentru utilizatori este sarcina de a înregistra acțiunile.
Înregistrarea acțiunilor este o sarcină foarte comună atribuită angajaților în timpul întâlnirilor.
Să scrii "cine i-a spus cui să facă ce când" poate fi foarte consumator de timp și poate cauza distragerea autorului de la participarea completă la întâlnire.
Prin automatizarea acestui proces, sperăm să atenuezi o parte din responsabilitatea utilizatorilor astfel încât toată lumea să poată participa complet la întâlnire.

Iată un exemplu de acțiuni care ar putea fi extrase din transcrierea exemplu:

```
Sugestie: "Sam spune că echipa ar trebui să aibă niște versiuni actualizate."

Declarație: "Kim spune că cu siguranță vor fi câteva cazuri limită unde această metodă nu va funcționa."

Comandă: "Xuchen spune că cineva trebuie să scrie reguli pentru ea."

Dorință: "Xuchen spune că echipa speră să existe verbe auxiliare, dar speră și să existe niște nume de persoane."
```

Scopul sistemului de extragere a acțiunilor este să creeze rezumate abstracte scurte din acțiunile extrase din transcrierea întâlnirii.
Rezultatul rulării extractorului de acțiuni pe transcrierea întâlnirii este o listă de comenzi, sugestii, declarații de intenție și alte fragmente acționabile care pot fi prezentate ca liste de lucru sau acțiuni de urmărit pentru participanții la întâlnire.
În viitor, extractorul va captura și numele destinatarilor și alocatorilor, precum și termenele limită asociate cu fiecare acțiune.

Pipeline-ul de extragere a acțiunilor are două componente principale: un clasificator și un rezumator.
Mai întâi, fiecare fragment este trecut printr-un clasificator multi-clasă și primește una dintre următoarele etichete:

- Întrebare
- Comandă
- Sugestie
- Dorință
- Declarație
- Neacționabil

Dacă fragmentul primește orice etichetă în afară de "Neacționabil", este trimis împreună cu primele două fragmente din transcriere la componenta de rezumare, care oferă mai mult context pentru rezumare.
Pasul de rezumare este în esență același cu componenta de rezumare independentă, cu toate acestea, modelul este antrenat pe un set de date personalizat construit special pentru rezumarea acțiunilor în formatul de ieșire dorit.

## SeaMeet are creier

Acesta este un pas mare spre crearea propriului nostru produs unic: antrenarea modelelor de rezumare precum și a celor de extragere a temelor și acțiunilor pentru a-și propulsa mai departe produsul, și proiectarea unei interfețe frumoase care să integreze totul într-un pachet uimitor.
Aceasta este povestea până acum, începutul călătoriei Seasalt.ai de a aduce cele mai bune soluții de afaceri pe o piață în dezvoltare rapidă și de a livra SeaMeet lumii: viitorul întâlnirilor moderne. 
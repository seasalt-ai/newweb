const e=`---
title: "De la Demo la Succes: Capcanele întâlnirilor moderne (2/5)"
metatitle: "De la Demo la Succes (2/5): Capcanele întâlnirilor moderne"
date: 2021-07-30
modified_date: 2025-08-01T12:00:00Z
draft: false
author: Cody Kim
description: "În a doua parte a acestei serii de bloguri, urmăriți călătoria Seasalt.ai către crearea SeaMeet, soluțiile noastre colaborative pentru întâlniri moderne."
weight: 1
tags:
  - SeaMeet
image: images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/SeaMeet animation.gif
canonicalURL: /blog/seameet-voice-and-microsoft-modern-meetings/
url: /blog/seameet-voice-and-microsoft-modern-meetings/
---

*De-a lungul acestei serii de bloguri, urmăriți călătoria Seasalt.ai către crearea unei experiențe complete de întâlniri moderne, începând cu începuturile sale umile, până la optimizarea serviciului nostru pe diferite hardware și modele, la integrarea sistemelor NLP de ultimă generație și, în final, la realizarea completă a SeaMeet, soluțiile noastre colaborative pentru întâlniri moderne.*

## Capcanele întâlnirilor moderne

Pe parcursul dezvoltării noastre, am întâmpinat multe obstacole imprevizibile, fără cauze sau soluții clare.

### Un început rapid

Primul obstacol a fost punerea în funcțiune a instrumentelor noastre. Azure a furnizat un eșantion de întâlniri moderne, pe care ne-am bucurat că era compatibil cu Linux, dar am descoperit că utilizarea SDK-ului pe Windows pentru a rula demonstrația era mult mai ușoară -- ei bine, era un produs Microsoft, la urma urmei. După multe încercări eșuate de a rula eșantionul furnizat pe Linux, am fost nevoiți să abandonăm acea cale și să recurgem la Windows. În cele din urmă, am avut un transcriptor de vorbire funcțional, ceea ce a fost un început extraordinar.

### Latență

O problemă pe care am întâmpinat-o a fost o întârziere de aproximativ cinci secunde în primirea rezultatelor recunoașterii pe interfața de utilizator frontend. Deși 5 secunde pot părea destul de rapide, această întârziere este vizibil cu câteva secunde prea lentă pentru a fi o soluție convenabilă și practică, mai ales pentru comunicarea în timp real.

<center>
<img src="/images/blog/4-seameet-voice-intelligence-meeting-transcription-pitfalls-of-microsoft-modern-meetings/default_ui.png" style="width:400px;" alt="Interfața implicită pentru transcrierea vorbirii de către Azure Speech SDK"/>

*Interfața implicită pentru transcrierea vorbirii furnizată de Azure Speech SDK*
</center>

Latența a fost, de asemenea, o problemă serioasă în backend. La începutul fiecărei întâlniri, rezultatele veneau în timp real (așa cum a fost anunțat!), dar pe măsură ce întâlnirea continua, latența creștea periodic până la treizeci de secunde înainte ca textul să apară pe monitoare. Până atunci, orice fusese spus devenise de mult irelevant în conversație. După nenumărate teste, am început să observăm că latența se schimba pe parcursul zilei, ceea ce am atribuit încărcării serverului Azure la momentul respectiv. Suntem în afaceri de a crea un produs consistent, fiabil, așa că aceste întârzieri fluctuante și imprevizibile erau inacceptabile. Cu atât mai mult motiv să ne bazăm pe propriile noastre modele și servere.

### Dialect

Un motiv particular pentru care am folosit Azure Speech Service în primul rând a fost suportul lor larg pentru o mare varietate de limbi și dialecte. Am fost deosebit de entuziasmați să folosim modelul de engleză singaporeză al Azure Speech Service. Dar imaginați-vă surpriza noastră când am descoperit că, pentru dialectul singaporez, modelul de engleză americană a depășit în mod constant modelul de engleză singaporeză. Mai mult, chiar și cel mai bun model nu a fost la înălțimea provocărilor din lumea reală.

<center>
<img src="/images/blog/4-seameet-voice-intelligence-meeting-transcription-pitfalls-of-microsoft-modern-meetings/bad_result.png"/>

*Transcrierea rezultată a „Felicitări! Băiețel sau fetiță?”*
</center>

Am văzut rezultate precum „ola regulations may be boiled baby cool” când enunțul era de fapt „Felicitări! Băiețel sau fetiță?”. Un model lingvistic bine antrenat ar fi trebuit să elimine o astfel de transcriere. Deși acesta este un exemplu extrem, de cele mai multe ori, ar exista o eroare în fiecare transcriere. Indiferent cât de mică este eroarea, cum ar fi un articol lipsă sau un cuvânt înțeles greșit, orice greșeală este deranjantă și poate ruina cu ușurință reputația unui serviciu de transcriere.

### Actualizare Windows

Câteva săptămâni mai târziu, echipa a petrecut nopți târzii asigurându-se că produsul nostru era gata pentru demonstrația clientului nostru, care urma să aibă loc în doar câteva zile. Transcriptorul nostru de întâlniri a funcționat fără probleme pe trei laptopuri Windows separate. Apoi, într-o zi, din senin, am rămas cu un singur computer funcțional, deși nimeni nu atinsese codul. Am testat rețelele noastre, am verificat firewall-urile noastre, orice ne-am putut gândi că ar putea cauza brusc eșecul produsului nostru. Ultima noastră presupunere a fost că o actualizare surpriză de Windows a făcut ca Azure Speech SDK să devină inexplicabil incompatibil cu două dintre computerele noastre, când am comparat cele trei sisteme bit cu bit. Cu prezentarea noastră care se apropia rapid, stresul și tensiunea erau la un punct de rupere. Cu un singur sistem rămas, echipa a făcut un pact: fără modificări ale codului și absolut fără actualizări. După această încercare, ne-a fost de ajuns.

### Dincolo de întâlnirile moderne

Pentru a scăpa de aceste obstacole, echipa de la Seasalt.ai a început să-și antreneze propriile modele acustice și lingvistice pentru a rivaliza cu capacitățile transcriptorului conversațional Azure. Pe parcursul întregului proces, am continuat să ne întrebăm: de unde mergem mai departe? Cum putem extinde acest produs deja instrumental?

Întâlnirile moderne au demonstrat un potențial robust de transformare a vorbirii în text, dar aici se oprește. Poate să ne asculte, dar ce-ar fi dacă am putea să-l facem să gândească pentru noi. Cu doar transcrieri, deși produsul este impresionant, aplicațiile sunt oarecum limitate. Trecerea de la transcrierea vorbirii la inteligența vorbirii deschide larg ușile în ceea ce putem crea. Exemple de inteligență includ rezumate ale întâlnirilor, abstractizarea subiectelor și extragerea acțiunilor. În cele din urmă, proiectarea unei interfețe frumoase pentru a lega totul într-un pachet uimitor.

Și aceasta este povestea de până acum, începutul călătoriei Seasalt.ai de a aduce cele mai bune soluții de afaceri pe o piață în rapidă evoluție și de a le livra lumii. Dacă doriți să aflați mai multe detalii, vă rugăm să continuați să citiți restul seriei de bloguri.
`;export{e as default};

const e=`---
title: "SeaX KB: O bază de cunoștințe care răspunde înainte de a fi întrebată"
date: 2022-08-15 22:01:32-07:00
modified_date: 2025-08-01T12:00:00Z
draft: false
author: Kim Dodds
description: "În această postare, continuăm subiectul integrărilor AI cu baza de cunoștințe SeaX, bazată pe AI, care oferă răspunsuri sugerate în timp real."
weight: 1
tags:
  - SeaX
image: /images/blog/22-seax-knowledge-base/thumbnail.png
canonicalURL: /blog/seax-kb-a-knowledge-base/
url: /blog/seax-kb-a-knowledge-base/
---

*În postarea noastră anterioară de pe blog, [Oferă-i centrului tău de contact propria voce cu SeaX Voice Intelligence](https://seasalt.ai/blog/21-seax-voice-intelligence/), am arătat cum motoarele interne de text-to-speech și speech-to-text ale Seasalt.ai îmbunătățesc diverse aspecte ale platformei SeaX. În această postare, continuăm subiectul integrărilor AI cu baza de cunoștințe SeaX, bazată pe AI, care ascultă conversațiile și oferă răspunsuri sugerate în timp real.*

# Cuprins
- [Baza de cunoștințe tradițională](#baza-de-cunoștințe-tradițională)
- [Baza de cunoștințe SeaX](#seax-knowledge-base)
    - [Interfață de utilizator încorporată pentru agenții live](#interfață-de-utilizator-încorporată-pentru-agenții-live)
    - [Căutare rapidă și precisă](#căutare-rapidă-și-precisă)
    - [Sugestii automate în timp real](#sugestii-automate-în-timp-real)
    - [Șabloane de răspuns](#șabloane-de-răspuns)
    - [Gestionarea bazei de cunoștințe](#kb-management)
    - [Webinar](#webinar)

# Baza de cunoștințe tradițională

Fundamental, o bază de cunoștințe (KB) este pur și simplu o bibliotecă de informații (în mod ideal) bine organizate și ușor accesibile, care este utilizată pe bază de autoservire online. Sistemele bune de baze de cunoștințe vor avea caracteristici precum organizarea ierarhică a conținutului, căutarea și etichetarea pentru a ajuta utilizatorii să găsească mai ușor informațiile corecte.

Menținerea unei baze de cunoștințe detaliate este o practică standard pentru majoritatea companiilor în zilele noastre. Indiferent dacă scopul este de a ajuta angajații să partajeze informații interne despre produsul lor, de a răspunde la întrebări pentru un potențial client, de a asista clienții în depanarea problemelor sau toate cele de mai sus - a face informațiile cheie accesibile angajaților și clienților înseamnă o muncă mai eficientă și o satisfacție mai mare a clienților.

De obicei, o bază de cunoștințe este implementată și menținută printr-un sistem de gestionare a conținutului sau un sistem de gestionare a cunoștințelor. Aceste sisteme pot varia în scară în funcție de nevoile organizației, începând de la un simplu manager de documente la un serviciu bogat în funcții care include fluxuri de lucru de publicare, direcționarea publicului, instrumente de colaborare și multe altele. Deși aceste sisteme sunt versatile în diferite moduri, ele sunt aproape întotdeauna destinate să fie accesate prin interacțiunea cu o pagină web sau o aplicație. Pentru cazul de utilizare particular al unui agent de servicii pentru clienți (care utilizează de obicei o bază de cunoștințe ca una dintre principalele sale resurse în asistarea clienților), o integrare strânsă cu software-ul centrului de contact este necesară pentru a permite agenților să gestioneze interogările utilizatorilor cât mai ușor posibil.

# Baza de cunoștințe SeaX

Motorul nostru de bază de cunoștințe a fost proiectat de la bun început cu un caz de utilizare foarte specific în minte: serviciul clienți bazat pe voce. În timp ce majoritatea, dacă nu toate, sistemele de baze de cunoștințe existente se bazează pe navigarea prin pagini web ierarhice sau pe introducerea unei interogări de căutare, baza noastră de cunoștințe trebuia să fie mai rapidă și mai independentă pentru a permite reprezentanților serviciului clienți să acorde toată atenția clientului, răspunzând în același timp rapid la întrebări.

Dacă doriți să treceți direct la o demonstrație, puteți viziona scurtul nostru videoclip demonstrativ SeaX KB:
<iframe width="85%" height="450px" src="https://www.youtube.com/embed/C_e_gaZHSFA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>


## Interfață de utilizator încorporată pentru agenții live

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-intro.png" alt="Prima privire la interfața bazei de cunoștințe SeaX."/>

*Prima privire la interfața bazei de cunoștințe SeaX.*
</center>

Natural, deoarece motorul nostru KB a fost proiectat special pentru aplicații de centre de contact, are integrare nativă cu platforma SeaX, astfel încât agenții să poată accesa fără probleme KB în timp ce gestionează apeluri și mesaje. Fără a schimba ferestrele, fără a răsfoi filele, fără a naviga prin pagini web imbricate.

## Căutare rapidă și precisă

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-manual-search.png" alt="Rezultate dintr-o căutare manuală în baza de cunoștințe SeaX."/>

*Rezultate dintr-o căutare manuală în baza de cunoștințe SeaX.*
</center>

La nivelul cel mai de bază, baza noastră de cunoștințe este alimentată de un motor de căutare incredibil de rapid și precis. Utilizăm tehnici de ultimă generație de procesare a limbajului natural și de extragere a informațiilor pentru a extrage sensul din text simplu, interogări eșantion și URL-uri de suport și pentru a potrivi enunțurile clienților cu cele mai relevante intrări KB. Motorul bazei de cunoștințe este extrem de extensibil și poate suporta miliarde de documente fără o modificare perceptibilă a timpului de răspuns.

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-detail.png" alt="Articol KB în vizualizare extinsă după ce ați făcut clic pe un rezultat al căutării."/>

*Articol KB în vizualizare extinsă după ce ați făcut clic pe un rezultat al căutării.*
</center>

Pe lângă găsirea celui mai relevant document, motorul nostru de căutare oferă rezultate mai detaliate prin extragerea cuvintelor cheie relevante din interogarea utilizatorului și evidențierea celor mai relevante cuvinte cheie și pasaje din fiecare intrare KB sugerată.

## Sugestii automate în timp real

Dar ceea ce am arătat până acum este încă o căutare manuală. Agenții live sunt ocupați cu interacțiunea cu clienții și ar pierde timp prețios introducând o căutare manuală în baza de cunoștințe de fiecare dată când doresc informații. Din acest motiv, cea mai mare valoare adăugată pe care o aduce baza de cunoștințe SeaX este căutarea automată în timp real pentru interacțiunile bazate pe text și voce.

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-automatic-search.png" alt="SeaX KB arată sugestii automate de articole pentru un mesaj de intrare al utilizatorului."/>

*SeaX KB arată sugestii automate de articole pentru un mesaj de intrare al utilizatorului.*
</center>

De fiecare dată când sosește un nou mesaj de la utilizator, baza de cunoștințe va fi interogată automat folosind mesajul exact al clientului. În timp real, pe măsură ce clientul vorbește, agentului i se vor oferi sugestii actualizate de articole din baza de cunoștințe pentru referință.

Și acest lucru funcționează și cu apelurile vocale! Ultima noastră postare pe blog, [Oferă-i centrului tău de contact propria voce cu SeaX Voice Intelligence](https://seasalt.ai/blog/21-seax-voice-intelligence/), a prezentat motorul de ultimă generație Speech-to-Text al Seasalt.ai. Platforma SeaX utilizează acest motor pentru a transcrie toate apelurile vocale în timp real. Ca rezultat, putem folosi acele transcrieri pentru diverse aplicații ulterioare, inclusiv căutarea automată în baza de cunoștințe.

## Șabloane de răspuns

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-response-template.png" alt="Un agent răspunde unui client cu un singur clic folosind șablonul de răspuns generat de SeaX KB."/>

*Un agent răspunde unui client cu un singur clic folosind șablonul de răspuns generat de SeaX KB.*
</center>

Rezultatele căutării din baza de cunoștințe au o caracteristică suplimentară care ajută la accelerarea răspunsurilor agenților pentru interacțiunile bazate pe text. Când agentul găsește un articol relevant din baza de cunoștințe, poate pur și simplu să facă clic pe pictograma \`+\` din stânga titlului pentru a insera un șablon de răspuns în fereastra de chat. Pe backend, de fiecare dată când se caută în baza de cunoștințe, aceasta generează un răspuns scris la întrebarea utilizatorului pe baza celor mai relevante informații din articolul sugerat din baza de cunoștințe și include orice linkuri de suport. Acest lucru poate îmbunătăți considerabil timpul de răspuns al agentului, deoarece agentul nu mai începe de la zero. În schimb, are deja informațiile importante din articolul din baza de cunoștințe în fereastra de chat, astfel încât le poate edita și trimite.


## Gestionarea bazei de cunoștințe

Acum că am văzut ce poate face motorul KB, există o întrebare persistentă despre backend: cum gestionați informațiile din baza de cunoștințe? Platforma SeaX are o interfață de utilizator de gestionare a bazei de cunoștințe complet integrată, disponibilă administratorilor din pagina de setări.

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-management.png" alt="Interfața de gestionare a bazei de cunoștințe SeaX."/>

*Interfața de gestionare a bazei de cunoștințe SeaX.*
</center>

Din această pagină puteți adăuga o singură intrare nouă în baza de cunoștințe sau puteți importa/exporta întreaga bază de cunoștințe folosind un fișier de tip foaie de calcul. Interfața acceptă, de asemenea, editarea și ștergerea intrărilor din baza de cunoștințe, astfel încât să vă puteți menține baza de cunoștințe actualizată în mod continuu.

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-edit.png" alt="Editarea unui singur articol KB prin interfața de gestionare a bazei de cunoștințe SeaX."/>

*Editarea unui singur articol KB prin interfața de gestionare a bazei de cunoștințe SeaX.*
</center>

## Webinar

Dacă doriți să vedeți o prezentare mai aprofundată a sistemului de baze de cunoștințe și a modului în care se integrează cu platforma SeaX, vă rugăm să vizionați webinarul nostru pe acest subiect:
<iframe width="85%" height="450px" src="https://www.youtube.com/embed/FOqQ01fpKQ4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

Pentru o demonstrație individuală sau pentru a afla mai multe despre cum Seasalt.ai își poate adapta soluțiile la nevoile afacerii dvs., vă rugăm să completați formularul nostru [Rezervați o demonstrație](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting).
`;export{e as default};

---
title: "SeaX KB: O bază de cunoștințe care răspunde înainte să întrebi"
metatitle: "SeaX KB: O bază de cunoștințe care răspunde înainte să întrebi"
date: 2022-08-15T22:01:32-07:00
modified_date: 2024-12-19T10:30:00Z
draft: false
author: Kim Dodds
description: "În acest articol, vom continua să explorăm subiectul integrării AI, introducând baza de cunoștințe condusă de AI SeaX, care oferă sugestii de răspuns în timp real."
weight: 1
tags: ["SeaX"]
canonicalURL: "/blog/seax-kb-a-knowledge-base/"
url: "/blog/seax-kb-a-knowledge-base/"
---

*În articolul nostru anterior de blog [Folosiți inteligența vocală SeaX pentru a da voce centrului vostru de contact](https://seasalt.ai/blog/21-seax-voice-intelligence/), am arătat cum motoarele interne de text-to-speech și speech-to-text ale Seasalt.ai îmbunătățesc diverse aspecte ale platformei SeaX. În acest articol, vom continua să explorăm subiectul integrării AI, introducând baza de cunoștințe condusă de AI SeaX, care ascultă conversațiile în timp real și oferă sugestii de răspuns.*

# Cuprins
- [Baza de cunoștințe tradițională](#the-traditional-knowledge-base)
- [Baza de cunoștințe SeaX](#seax-knowledge-base)
    - [Interfață de utilizator integrată pentru agenții live](#embedded-user-interface-for-live-agents)
    - [Căutare rapidă și precisă](#fast-and-accurate-search)
    - [Sugestii automate în timp real](#real-time-automated-suggestions)
    - [Șabloane de răspuns](#response-templates)
    - [Gestionarea bazei de cunoștințe](#kb-management)
    - [Webinar](#webinar)

# Baza de cunoștințe tradițională

La nivel fundamental, o bază de cunoștințe (KB) este doar o (ideal) bibliotecă de informații bine organizată și ușor accesibilă pentru utilizarea self-service online. Un sistem bun de bază de cunoștințe va avea funcții precum organizarea conținutului ierarhic, căutarea și etichetarea pentru a ajuta utilizatorii să găsească mai ușor informațiile corecte.

Menținerea unei baze de cunoștințe detaliate este o practică standard pentru majoritatea companiilor de astăzi. Fie că scopul este să ajute angajații să împărtășească informații interne despre produsele lor, să răspundă la întrebările clienților potențiali, să ajute clienții să rezolve probleme, sau toate cele de mai sus - a face informațiile cheie accesibile angajaților și clienților înseamnă muncă mai eficientă și satisfacție mai mare a clienților.

De obicei, bazele de cunoștințe sunt implementate și menținute prin sisteme de gestionare a conținutului sau sisteme de gestionare a cunoștințelor. Aceste sisteme pot varia în funcție de nevoile organizației, de la manageri de documente simpli la servicii bogate în funcții, inclusiv fluxuri de lucru de publicare, direcționarea audienței, instrumente de colaborare și multe altele. Deși aceste sisteme sunt versatile în diferite privințe, aproape întotdeauna sunt concepute pentru a fi accesate prin interacțiunea cu pagini web sau aplicații. Pentru cazul de utilizare specific al agenților de serviciu clienți (care de obicei folosesc baza de cunoștințe ca una dintre resursele lor principale pentru a ajuta clienții), este necesară o integrare strânsă cu software-ul centrului de contact pentru a permite agenților să proceseze cât mai fără probleme interogările utilizatorilor.

# Baza de cunoștințe SeaX

Baza noastră de cunoștințe a fost concepută de la prima zi cu un caz de utilizare foarte specific în minte: serviciul clienți vocal. Deși majoritatea (dacă nu toate) sistemelor existente de bază de cunoștințe se bazează pe navigarea prin pagini web ierarhică sau introducerea de interogări de căutare, baza noastră de cunoștințe trebuie să fie mai rapidă și mai independentă pentru ca reprezentanții serviciului clienți să-și poată concentra toată atenția asupra clientului, în timp ce încă răspund rapid la întrebări.

Dacă vrei să vezi direct demonstrația, poți urmări scurtul nostru videoclip de demonstrație SeaX KB:
<iframe width="85%" height="450px" src="https://www.youtube.com/embed/C_e_gaZHSFA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

## Interfață de utilizator integrată pentru agenții live

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-intro.png" alt="Prima privire asupra interfeței bazei de cunoștințe SeaX."/>

*Prima privire asupra interfeței bazei de cunoștințe SeaX.*
</center>

În mod natural, deoarece motorul nostru de bază de cunoștințe este conceput special pentru aplicațiile centrului de contact, este integrat nativ cu platforma SeaX pentru ca agenții să poată accesa baza de cunoștințe fără probleme în timp ce procesează apeluri și mesaje. Fără comutarea ferestrelor, fără răsfoirea tab-urilor, fără navigarea prin pagini web imbricate.

## Căutare rapidă și precisă

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-manual-search.png" alt="Rezultatele căutării manuale în baza de cunoștințe SeaX."/>

*Rezultatele căutării manuale în baza de cunoștințe SeaX.*
</center>

La cel mai fundamental nivel, baza noastră de cunoștințe este alimentată de un motor de căutare extrem de rapid și precis. Folosim cele mai avansate tehnici de procesare a limbajului natural și extragere a informațiilor pentru a colecta semnificație din text pur, interogări de exemplu și URL-uri de suport, și pentru a potrivi declarațiile clienților cu cele mai relevante intrări din baza de cunoștințe. Motorul bazei de cunoștințe este foarte scalabil și poate suporta miliarde de documente fără schimbări observabile în timpul de răspuns.

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-detail.png" alt="Articolul bazei de cunoștințe în vedere extinsă după clic pe rezultatul căutării."/>

*Articolul bazei de cunoștințe în vedere extinsă după clic pe rezultatul căutării.*
</center>

Pe lângă găsirea documentelor cele mai relevante, motorul nostru de căutare oferă și rezultate mai rafinate prin extragerea cuvintelor cheie semnificative din interogările utilizatorilor și evidențierea cuvintelor cheie și paragrafelor cele mai relevante din fiecare articol sugerat din baza de cunoștințe.

## Sugestii automate în timp real

Dar ceea ce am arătat până acum este încă căutare manuală. Agenții live sunt ocupați să interacționeze cu clienții, iar introducerea manuală a căutărilor în baza de cunoștințe de fiecare dată când au nevoie de informații irosește timp prețios. Prin urmare, cea mai mare valoare adăugată pe care o aduce baza de cunoștințe SeaX este căutarea automată în timp real pentru interacțiunile text și vocale.

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-automatic-search.png" alt="Baza de cunoștințe SeaX afișează sugestii automate de articole pentru mesajele de intrare ale utilizatorilor."/>

*Baza de cunoștințe SeaX afișează sugestii automate de articole pentru mesajele de intrare ale utilizatorilor.*
</center>

De fiecare dată când vine un mesaj nou de la utilizator, baza de cunoștințe interoghează automat folosind mesajul exact al clientului. În timp real, pe măsură ce clientul vorbește, agenții vor primi cele mai recente sugestii de articole din baza de cunoștințe pentru referință.

Aceasta funcționează și pentru apelurile vocale! Articolul nostru anterior de blog [Folosiți inteligența vocală SeaX pentru a da voce centrului vostru de contact](https://seasalt.ai/blog/21-seax-voice-intelligence/) a arătat motorul cel mai avansat de speech-to-text al Seasalt.ai. Platforma SeaX folosește acel motor pentru a transcrie toate apelurile vocale în timp real. Prin urmare, putem folosi aceste transcrieri pentru diverse aplicații downstream, inclusiv căutarea automată în baza de cunoștințe.

## Șabloane de răspuns

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-response-template.png" alt="Agenții folosesc șabloane de răspuns generate de baza de cunoștințe SeaX pentru a răspunde clienților cu un clic."/>

*Agenții folosesc șabloane de răspuns generate de baza de cunoștințe SeaX pentru a răspunde clienților cu un clic.*
</center>

Rezultatele căutării din baza de cunoștințe au și o funcție suplimentară care ajută la accelerarea timpului de răspuns al agenților pentru interacțiunile bazate pe text. Când agenții găsesc un articol relevant din baza de cunoștințe, trebuie doar să dea clic pe iconița "+" din stânga titlului pentru a insera șablonul de răspuns în fereastra lor de chat. În backend, de fiecare dată când se caută în baza de cunoștințe, aceasta generează un răspuns scris la întrebarea utilizatorului bazat pe informațiile cele mai relevante din articolul sugerat din baza de cunoștințe, inclusiv orice link-uri de suport. Aceasta poate îmbunătăți semnificativ timpul de răspuns al agenților, deoarece agenții nu mai încep de la zero. În schimb, au deja informațiile importante din articolul bazei de cunoștințe afișate în fereastra lor de chat, deci trebuie doar să editeze și să trimită.

## Gestionarea bazei de cunoștințe

Acum că am înțeles funcționalitățile motorului bazei de cunoștințe, mai rămâne o întrebare despre backend: cum se gestionează informațiile din baza de cunoștințe? Platforma SeaX oferă o interfață de utilizator complet integrată pentru gestionarea bazei de cunoștințe pe care administratorii o pot accesa din pagina de setări.

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-management.png" alt="Interfața de gestionare a bazei de cunoștințe SeaX."/>

*Interfața de gestionare a bazei de cunoștințe SeaX.*
</center>

Pe această pagină, puteți adăuga intrări noi individuale în baza de cunoștințe, sau puteți importa/exporta întreaga bază de cunoștințe folosind fișiere de tip spreadsheet. Interfața suportă și editarea și ștergerea intrărilor din baza de cunoștințe, astfel încât să puteți actualiza continuu baza voastră de cunoștințe.

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-edit.png" alt="Editarea unui articol individual din baza de cunoștințe prin interfața de gestionare SeaX."/>

*Editarea unui articol individual din baza de cunoștințe prin interfața de gestionare SeaX.*
</center>

## Webinar

Dacă vrei să înțelegi mai în profunzime sistemul bazei de cunoștințe și cum se integrează cu platforma SeaX, urmărește webinar-ul nostru despre acest subiect:
<iframe width="85%" height="450px" src="https://www.youtube.com/embed/FOqQ01fpKQ4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

Pentru o demonstrație personală, sau pentru a afla cum Seasalt.ai poate personaliza soluțiile în funcție de nevoile voastre de afacere, completați [formularul nostru de programare demonstrație](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting).

---
title: "SeaX KB: O bază de cunoștințe care răspunde înainte să întrebi"
metatitle: "SeaX KB: O bază de cunoștințe care răspunde înainte să întrebi"
date: 2022-08-15T22:01:32-07:00
modified_date: 2025-07-30T17:05:21.933Z
draft: false
author: Kim Dodds
description: "În acest articol, vom continua subiectul integrărilor AI, prezentând baza de cunoștințe alimentată de AI a SeaX, care oferă răspunsuri sugerate în timp real."
weight: 1
tags: ["SeaX"]
canonicalURL: "/blog/seax-kb-a-knowledge-base/"
url: "/blog/seax-kb-a-knowledge-base/"
---

*În postarea noastră anterioară de pe blog, [Dă-i centrului tău de contact o voce proprie cu inteligența vocală SeaX](https://seasalt.ai/blog/21-seax-voice-intelligence/), am arătat cum motoarele interne de conversie text-vorbire și vorbire-text ale Seasalt.ai îmbunătățesc fiecare aspect al platformei SeaX. În acest articol, vom continua subiectul integrărilor AI, prezentând baza de cunoștințe alimentată de AI a SeaX, care ascultă conversațiile și oferă răspunsuri sugerate în timp real.*

# Cuprins
- [Baza de cunoștințe tradițională](#the-traditional-knowledge-base)
- [Baza de cunoștințe SeaX](#seax-knowledge-base)
    - [Interfață de utilizator încorporată pentru agenții live](#embedded-user-interface-for-live-agents)
    - [Căutare rapidă și precisă](#fast-and-accurate-search)
    - [Sugestii automate în timp real](#real-time-automated-suggestions)
    - [Șabloane de răspuns](#response-templates)
    - [Managementul bazei de cunoștințe](#kb-management)
    - [Webinar](#webinar)

# Baza de cunoștințe tradițională

În esență, o bază de cunoștințe (KB) este pur și simplu un depozit (în mod ideal) bine organizat și ușor de accesat de informații pentru autoservire online. Un sistem bun de KB va avea funcții precum organizarea ierarhică a conținutului, căutarea și etichetarea pentru a ajuta utilizatorii să găsească mai ușor informațiile potrivite.

Menținerea unei baze de cunoștințe detaliate este o practică standard pentru majoritatea companiilor din zilele noastre. Fie că scopul este de a ajuta angajații să partajeze informații interne despre produsele lor, de a răspunde la întrebările potențialilor clienți, de a ajuta clienții să depaneze problemele sau toate cele de mai sus - a face informațiile cruciale accesibile atât angajaților, cât și clienților înseamnă o muncă mai eficientă și o satisfacție mai mare a clienților.

De obicei, o bază de cunoștințe este implementată și menținută printr-un sistem de management al conținutului sau un sistem de management al cunoștințelor. Aceste sisteme pot varia în scară, în funcție de nevoile organizației, de la un simplu manager de documente la un serviciu bogat în funcții, cu fluxuri de lucru de publicare, direcționare a publicului, instrumente de colaborare și multe altele. Deși aceste sisteme sunt versatile în diferite aspecte, ele sunt aproape întotdeauna concepute pentru a fi accesate prin interacțiunea cu o pagină web sau o aplicație. Pentru cazul specific de utilizare al unui agent de servicii pentru clienți (care folosește adesea baza de cunoștințe ca una dintre resursele lor principale pentru a ajuta clienții), este necesară o integrare strânsă cu software-ul centrului de contact pentru a permite agentului să gestioneze interogările utilizatorilor cât mai transparent posibil.

# Baza de cunoștințe SeaX

Baza noastră de cunoștințe a fost proiectată încă din prima zi cu un caz de utilizare foarte specific în minte: serviciul pentru clienți prin voce. În timp ce majoritatea, dacă nu toate, sistemele de baze de cunoștințe existente se bazează pe navigarea prin pagini web ierarhice sau pe tastarea unei interogări de căutare, baza noastră de cunoștințe trebuia să fie mai rapidă și mai independentă, astfel încât reprezentanții serviciului pentru clienți să își poată dedica întreaga atenție clientului, răspunzând în același timp rapid la întrebări.

Dacă doriți să treceți direct la demonstrație, puteți viziona scurtul nostru videoclip demonstrativ SeaX KB:
<iframe width="85%" height="450px" src="https://www.youtube.com/embed/C_e_gaZHSFA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>


## Interfață de utilizator încorporată pentru agenții live

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-intro.png" alt="O primă privire asupra interfeței bazei de cunoștințe SeaX."/>

*O primă privire asupra interfeței bazei de cunoștințe SeaX.*
</center>

În mod natural, deoarece motorul nostru de baze de cunoștințe a fost proiectat special pentru aplicațiile centrelor de contact, se integrează nativ cu platforma SeaX, astfel încât agenții să poată accesa baza de cunoștințe fără probleme în timp ce gestionează apeluri și mesaje. Fără comutare de ferestre, fără parcurgerea filelor, fără navigare pe pagini web imbricate.

## Căutare rapidă și precisă

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-manual-search.png" alt="Rezultatele unei căutări manuale în baza de cunoștințe SeaX."/>

*Rezultatele unei căutări manuale în baza de cunoștințe SeaX.*
</center>

La nivelul cel mai de bază, baza noastră de cunoștințe este alimentată de un motor de căutare extrem de rapid și precis. Folosim procesarea limbajului natural și tehnici de extragere a informațiilor de ultimă generație pentru a culege sensul din text simplu, interogări eșantion și adrese URL de asistență și pentru a potrivi declarațiile clientului cu cele mai relevante intrări din baza de cunoștințe. Motorul bazei de cunoștințe este extrem de scalabil și poate suporta miliarde de documente fără nicio modificare vizibilă a timpilor de răspuns.

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-detail.png" alt="Un articol din baza de cunoștințe într-o vizualizare extinsă după ce ați făcut clic pe un rezultat al căutării."/>

*Un articol din baza de cunoștințe într-o vizualizare extinsă după ce ați făcut clic pe un rezultat al căutării.*
</center>

Pe lângă găsirea celor mai relevante documente, motorul nostru de căutare oferă și rezultate mai rafinate prin extragerea cuvintelor cheie proeminente din interogarea utilizatorului și evidențierea celor mai relevante cuvinte cheie și pasaje din fiecare intrare sugerată din baza de cunoștințe.

## Sugestii automate în timp real

Dar ceea ce am arătat până acum este încă o căutare manuală. Agenții live sunt ocupați să interacționeze cu clienții, iar tastarea manuală a unei căutări în baza de cunoștințe de fiecare dată când au nevoie de informații irosește timp prețios. Prin urmare, cea mai mare valoare adăugată pe care o aduce baza de cunoștințe SeaX este căutarea automată în timp real atât pentru interacțiunile text, cât și pentru cele vocale.

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-automatic-search.png" alt="Baza de cunoștințe SeaX afișează sugestii automate de articole pentru un mesaj de utilizator primit."/>

*Baza de cunoștințe SeaX afișează sugestii automate de articole pentru un mesaj de utilizator primit.*
</center>

De fiecare dată când sosește un mesaj nou de la utilizator, baza de cunoștințe este interogată automat folosind mesajul exact al clientului. În timp real, pe măsură ce clientul vorbește, agentului i se vor oferi sugestii actualizate de articole din baza de cunoștințe pentru referință.

Acest lucru funcționează și pentru apelurile vocale! Postarea noastră anterioară de pe blog, [Dă-i centrului tău de contact o voce proprie cu inteligența vocală SeaX](https.seasalt.ai/blog/21-seax-voice-intelligence/), a prezentat motorul de conversie vorbire-text de ultimă generație al Seasalt.ai. Platforma SeaX utilizează acest motor pentru a transcrie toate apelurile vocale în timp real. Ca rezultat, putem folosi aceste transcrieri pentru o varietate de aplicații din aval, inclusiv căutarea automată în baza de cunoștințe.

## Șabloane de răspuns

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-response-template.png" alt="Un agent răspunde unui client cu un singur clic folosind un șablon de răspuns generat de baza de cunoștințe SeaX."/>

*Un agent răspunde unui client cu un singur clic folosind un șablon de răspuns generat de baza de cunoștințe SeaX.*
</center>

Rezultatele căutării din baza de cunoștințe vin cu o funcție suplimentară care ajută la accelerarea răspunsurilor agentului pentru interacțiunile bazate pe text. Când un agent găsește un articol relevant din baza de cunoștințe, poate pur și simplu să facă clic pe pictograma „+” din stânga titlului pentru a insera un șablon de răspuns în fereastra sa de chat. În culise, de fiecare dată când se caută în baza de cunoștințe, se generează un răspuns scris la întrebarea utilizatorului pe baza celor mai relevante informații din articolul sugerat din baza de cunoștințe și se includ orice linkuri de asistență. Acest lucru poate îmbunătăți dramatic timpul de răspuns al agentului, deoarece agentul nu mai pornește de la zero. În schimb, au deja informațiile importante din articolul bazei de cunoștințe afișate în fereastra lor de chat, așa că tot ce trebuie să facă este să editeze și să trimită.


## Managementul bazei de cunoștințe

Acum că am văzut de ce este capabil motorul bazei de cunoștințe, există o întrebare în suspensie despre back-end: cum sunt gestionate informațiile din baza de cunoștințe? Platforma SeaX oferă o interfață de utilizator de management al bazei de cunoștințe complet integrată, pe care administratorii o pot accesa din pagina de setări.

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-management.png" alt="Interfața de management a bazei de cunoștințe SeaX."/>

*Interfața de management a bazei de cunoștințe SeaX.*
</center>

Pe această pagină, puteți adăuga noi intrări individuale în baza de cunoștințe sau puteți importa/exporta întreaga bază de cunoștințe folosind un fișier de calcul tabelar. Interfața acceptă, de asemenea, editarea și ștergerea intrărilor din baza de cunoștințe, astfel încât să vă puteți menține baza de cunoștințe actualizată continuu.

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-edit.png" alt="Editarea unui singur articol din baza de cunoștințe prin interfața de management a bazei de cunoștințe SeaX."/>

*Editarea unui singur articol din baza de cunoștințe prin interfața de management a bazei de cunoștințe SeaX.*
</center>

## Webinar

If you want to take a deeper dive into the knowledge base system and how it integrates with the SeaX platform, watch our webinar on the topic:
<iframe width="85%" height="450px" src="https://www.youtube.com/embed/FOqQ01fpKQ4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

Pentru o demonstrație individuală sau pentru a afla cum Seasalt.ai poate personaliza o soluție pentru nevoile afacerii dvs., completați [formularul nostru de programare a demonstrației](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting).

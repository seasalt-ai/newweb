---
title: "De la demonstrație la succes: dincolo de hardware (5/5)"
metatitle: "De la demonstrație la succes (5/5): dincolo de hardware"
date: 2021-09-15T17:24:32-07:00
author: Cody Kim
image: "images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/SeaMeet animation.gif"
draft: false
description: "În partea finală a acestei serii de blog-uri, urmați călătoria Seasalt.ai de a crea SeaMeet, soluția noastră colaborativă pentru întâlniri moderne."
tags: ["SeaMeet"]
weight: 1 
canonicalURL: "/blog/seameet-voice-hardware/"
url: "/blog/seameet-voice-hardware/"
aliases:
    - /blog/7-seameet-voice-intelligence-meeting-transcription-hardware/
modified_date: 2024-12-19T10:30:00Z
---

*În această serie de blog-uri, urmați călătoria Seasalt.ai de a crea o experiență completă de întâlniri moderne, de la începuturile sale modeste, până la optimizarea serviciilor noastre pe diferite hardware și modele, până la integrarea celor mai avansate sisteme de procesare a limbajului natural, în final realizând complet soluția noastră colaborativă pentru întâlniri moderne SeaMeet.*

## Dincolo de întâlnirile moderne

La Seasalt.ai, admirăm capacitatea existentă demonstrată de acest produs în demonstrația Build 2019, dar suntem mai interesați de ce poate deveni acest produs și cum putem ridica transcrierea conversațiilor dincolo de nivelul de imitație. Dar înainte de a învinge competiția, trebuie mai întâi să înțelegi profund jocul pe care îl joci. Așa s-a născut SeaMeet. În fazele timpurii, am privit Azure ca pe un model pentru a stăpâni fundamentele construirii unui serviciu de transcriere de încredere și am folosit serviciile vocale Azure ca backend pentru a exploata această tehnologie matură.

Ca orice produs nou, provocările au apărut imediat. Pentru a lansa rapid produsul nostru, am ales să folosim array-ul de microfoane Microsoft Kinect DK, care era promovat ca fiind contrapartea hardware pentru serviciile vocale, fiind ajustat pentru a obține performanța optimă din modelele de recunoaștere automată a vocii Azure. Deși este un dispozitiv incontestabil bine construit și proiectat, este echipat cu o carcasă completă din aluminiu, obiectiv cu unghi larg, cameră de adâncime și array de 7 microfoane. Și costă aproape 400 de dolari. Din aprilie 2021, Kinect DK a avut probleme grave de stoc. Până la scrierea acestui articol în septembrie 2021, încă era în stoc insuficient. Aceasta a confirmat în continuare că Kinect nu era potrivit pentru noi.

<center>
<img src="/images/blog/7-seameet-voice-intelligence-meeting-transcription-hardware/kinect_store_page.png"/>

*Azure Kinect DK a fost în stoc insuficient din aprilie 2021 și încă nu a fost reabastecut până la publicarea acestui articol (septembrie 2021).*
</center>

Array-ul de microfoane este primul component din pipeline-ul de transcriere a conversațiilor. Ca furnizor de servicii de transcriere, trebuie să fim capabili să achiziționăm hardware-ul nostru în mod sustenabil și de încredere.

Călătoria noastră pentru a găsi array-ul de microfoane perfect ne-a adus la două opțiuni: [Respeaker Array v2.0](https://www.seeedstudio.com/ReSpeaker-Mic-Array-v2-0.html) și [Respeaker Core v2-0](https://www.seeedstudio.com/ReSpeaker-Core-v2-0.html). Ambele dispozitive sunt array-uri circulare cu patru și respectiv șase microfoane, o funcționalitate cheie capabilă să execute localizarea sursei de sunet pe 360 de grade și ne permite să integrăm ușor aceste dispozitive noi în sistemul nostru existent. Frumusețea reală a acestor dispozitive este că au algoritmi de procesare a semnalelor integrați, inclusiv reducerea zgomotului, eliminarea ecoului și beamforming, toți optimizați perfect pentru dimensiunea microfoanelor.

<center>
<img src="/images/blog/7-seameet-voice-intelligence-meeting-transcription-hardware/respeaker_array.png" alt="Respeaker Array v2.0 demonstrând VAD și localizarea sursei de sunet"/>

*Respeaker Array v2.0 demonstrând VAD și localizarea sursei de sunet*
</center>

<center>
<img src="/images/blog/7-seameet-voice-intelligence-meeting-transcription-hardware/array_demo.jpg" alt="Demonstrație de întâlnire live folosind Respeaker Array v2.0"/>

*Demonstrație de întâlnire live folosind Respeaker Array v2.0*
</center>

Pentru array-ul cu patru microfoane Array v2.0 alimentat complet de portul USB, aceasta înseamnă că computerul utilizatorului trebuie doar să se concentreze pe streaming-ul audio către server. Aceasta descarcă procesarea semnalelor pe array-ul de microfoane.

<center>
<img src="/images/blog/7-seameet-voice-intelligence-meeting-transcription-hardware/core_demo.png" alt="Demonstrația Respeaker Core v2.0"/>

*Demonstrația Respeaker Core v2.0*
</center>

Și mai impresionant este Core v2.0 echipat cu procesor ARM și 1GB RAM. Este capabil să ruleze o distribuție Linux completă și are suficientă putere de procesare pentru a rula scripturile noastre client, nu doar că descărcăm procesarea de pe computerul utilizatorului prin acest dispozitiv, dar eliminăm complet necesitatea de a conecta un computer la microfon. Deoarece array-ul de microfoane face acum procesarea grea, am redus cerințele de hardware necesare pentru a rula produsul, astfel încât am mărit efectiv audiența care poate beneficia de SeaMeet.

<center>
<img src="/images/blog/7-seameet-voice-intelligence-meeting-transcription-hardware/respeaker_core.png" alt="Exemplu de plasare independentă a microfonului Core v2.0"/>

*Exemplu de plasare independentă a microfonului Core v2.0*
</center>

O altă caracteristică unică a acestor array-uri de microfoane este că nu au carcasă. Ambele sunt expediate ca PCB-uri goale, cu microfoanele, chipurile și porturile expuse. Deși mulți ar considera acest lucru incomod, noi îl vedem ca pe o oportunitate de a crea un dispozitiv cu adevărat unic, care este fără îndoială Seasalt.

Cu aceste dispozitive, am finalizat prototipul SeaMeet, serviciul nostru complet nou și de ultimă generație pentru transcrierea întâlnirilor. Aici încheiem seria de cinci părți, începând cu SeaMeet ca doar o sămânță inspirată de demonstrația Microsoft, până la a deveni în final un produs complet independent. SeaMeet este încă în fazele timpurii și va avea o călătorie captivantă pe măsură ce continuăm să perfecționăm sistemul nostru de separare a vorbitorilor, înțelegerea întâlnirilor și modelele lingvistice. Echipa Seasalt.ai este nerăbdătoare să continue să revoluționeze modul în care lumea funcționează. 
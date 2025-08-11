const e=`---
title: "De la Demo la Succes: Dincolo de hardware (5/5)"
metatitle: "De la Demo la Succes (5/5): Dincolo de hardware"
date: 2021-09-15 17:24:32-07:00
modified_date: 2025-08-01T12:00:00Z
draft: false
author: Cody Kim
description: "În ultima parte a acestei serii de bloguri, urmăriți călătoria Seasalt.ai către crearea SeaMeet, soluțiile noastre colaborative pentru întâlniri moderne."
weight: 1
tags:
  - SeaMeet
image: images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/SeaMeet animation.gif
canonicalURL: /blog/seameet-voice-hardware/
url: /blog/seameet-voice-hardware/
---

*De-a lungul acestei serii de bloguri, urmăriți călătoria Seasalt.ai către crearea unei experiențe complete de întâlniri moderne, începând cu începuturile sale umile, până la optimizarea serviciului nostru pe diferite hardware și modele, la integrarea sistemelor NLP de ultimă generație și, în final, la realizarea completă a SeaMeet, soluțiile noastre colaborative pentru întâlniri moderne.*

## Dincolo de întâlnirile moderne

Aici, la Seasalt.ai, am admirat abilitățile actuale demonstrate în demo-ul Build 2019 al acestui produs, dar suntem mai interesați să vedem ce ar putea deveni acest produs, cum să ducem transcrierea conversațiilor dincolo de imitație. Dar înainte de a putea învinge concurența, trebuie mai întâi să înțelegeți în detaliu jocul pe care îl jucați. Și exact așa s-a născut SeaMeet. La începuturile sale, am privit Azure ca un model pentru a înțelege fundamentele a ceea ce face un serviciu de transcriere solid și am folosit serviciile de vorbire Azure ca backend pentru a utiliza această tehnologie consacrată.

La fel ca în cazul oricărui produs tânăr, au apărut imediat provocări. Dornici să lansăm produsul nostru, am optat să folosim matricea de microfoane Kinect DK de la Microsoft, promovată ca fiind omologul hardware al serviciilor de vorbire și, presupus, reglată pentru a obține cea mai optimă performanță de la modelele de recunoaștere automată a vorbirii Azure. Deși un dispozitiv incontestabil bine construit și bine proiectat, vine cu o carcasă completă din aluminiu, o lentilă cu unghi larg, o cameră de adâncime și o matrice de 7 microfoane. De asemenea, are un preț piperat, de aproape 400 USD. Începând cu aprilie 2021, Kinect DK a avut o problemă serioasă de stoc. Este încă epuizat la data scrierii acestui articol, în septembrie 2021. Acest lucru a confirmat și mai mult că Kinect nu este dispozitivul potrivit pentru noi.

<center>
<img src="/images/blog/7-seameet-voice-intelligence-meeting-transcription-hardware/kinect_store_page.png"/>

*Azure Kinect DK a fost epuizat din aprilie 2021 până la publicarea acestui articol (septembrie 2021)*
</center>

Matricea de microfoane este prima componentă din pipeline-ul de transcriere a conversațiilor. În calitate de furnizori de servicii de transcriere, trebuie să putem procura hardware în mod durabil și fiabil.

Călătoria noastră de a găsi matricea de microfoane perfectă ne-a condus la două opțiuni: [Respeaker Array v2.0](https://www.seeedstudio.com/ReSpeaker-Mic-Array-v2-0.html) și [Respeaker Core v2.0](https://www.seeedstudio.com/ReSpeaker-Core-v2-0.html). Ambele dispozitive sunt matrice circulare, cu patru și, respectiv, șase microfoane, ceea ce este o caracteristică crucială pentru a putea efectua localizarea sursei la 360 de grade și pentru a ne permite să integrăm cu ușurință aceste noi dispozitive în sistemul nostru existent. Adevărata frumusețe a acestor dispozitive este că vin cu algoritmi de procesare a semnalului la bord, inclusiv reducerea zgomotului, anularea ecoului și formarea fasciculului, care sunt perfect reglați la dimensiunile microfonului.

<center>
<img src="/images/blog/7-seameet-voice-intelligence-meeting-transcription-hardware/respeaker_array.png" alt="Respeaker Array v2.0 demonstrând VAD și localizarea sursei"/>

*Respeaker Array v2.0 demonstrând VAD și localizarea sursei*
</center>

<center>
<img src="/images/blog/7-seameet-voice-intelligence-meeting-transcription-hardware/array_demo.jpg" alt="Demo de întâlnire live cu Respeaker Array v2.0"/>

*Demo de întâlnire live cu Respeaker Array v2.0*
</center>

Pentru matricea Array v2.0 cu patru microfoane, care era alimentată complet printr-un port USB, acest lucru însemna că computerul utilizatorului trebuia să se concentreze doar pe transmiterea audio către server. Acest lucru descarcă procesarea semnalului către matricea de microfoane.


<center>
<img src="/images/blog/7-seameet-voice-intelligence-meeting-transcription-hardware/core_demo.png" alt="Respeaker Core v2.0 ilustrat cu demo"/>

*Respeaker Core v2.0 ilustrat cu demo*
</center>

Și mai convingător este Core v2.0 echipat cu un procesor ARM și 1GB RAM. Capabil să ruleze o distribuție completă Linux și cu suficientă putere de procesare pentru a rula scriptul nostru client, nu numai că am descărcat procesarea de pe computerul utilizatorului cu acest dispozitiv, am eliminat complet necesitatea de a avea un computer conectat la microfon. Deoarece matricele de microfoane fac acum procesarea grea, am diminuat cerințele hardware necesare pentru a rula produsul nostru și, prin urmare, am crescut efectiv publicul care poate beneficia de SeaMeet.

<center>
<img src="/images/blog/7-seameet-voice-intelligence-meeting-transcription-hardware/respeaker_core.png" alt="Exemplu de plasare a microfonului independent Core v2.0"/>

*Exemplu de plasare a microfonului independent Core v2.0*
</center>

O altă caracteristică unică a acestor matrice de microfoane este lipsa carcasei. Ambele sunt livrate ca PCB-uri goale, cu microfoanele, cipurile și porturile expuse. Deși mulți vor vedea acest lucru ca un inconvenient, noi vedem o oportunitate de a crea un dispozitiv cu adevărat unic, care este inconfundabil al Seasalt.

    Cu aceste dispozitive, punem punctul pe i prototipului nostru SeaMeet, noul nostru serviciu de transcriere a întâlnirilor de ultimă generație. Și cu aceasta încheiem seria noastră de cinci părți, începând de când SeaMeet nu era decât o sămânță inspirată de o demonstrație Microsoft și terminând cu un produs complet independent. Încă în stadiile sale incipiente, SeaMeet are o călătorie interesantă în față, pe măsură ce continuăm să ne perfecționăm sistemul de diarizare, sensul întâlnirilor și modelele lingvistice. Echipa de la Seasalt.ai este dornică să continue să revoluționeze modul în care lumea desfășoară afaceri.
`;export{e as default};

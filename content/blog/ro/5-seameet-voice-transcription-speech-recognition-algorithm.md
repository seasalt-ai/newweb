---
title: "De la demonstrație la succes: revoluția algoritmilor vocali pentru întâlniri moderne (3/5)"
metatitle: "De la demonstrație la succes (3/5): revoluția algoritmilor vocali pentru întâlniri moderne"
date: 2021-07-30T17:43:38-07:00
modified_date: 2024-12-19T10:30:00Z
author: Cody Kim, Shayne Mei
image: "images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/SeaMeet animation.gif"
draft: false
description: "În partea a treia a acestei serii de blog-uri, urmați călătoria Seasalt.ai de a crea SeaMeet, soluția colaborativă pentru întâlniri moderne."
tags: ["SeaMeet"]
weight: 1  
canonicalURL: "/blog/seameet-voice-speech-recognition/"
url: "/blog/seameet-voice-speech-recognition/"
aliases:
    - /blog/5-seameet-voice-intelligence-meeting-transcription-speech-recognition-algorithm-of-modern-meeting/
---

În această serie de blog-uri, urmați călătoria Seasalt.ai de a crea o experiență completă de întâlniri moderne, de la începuturile sale modeste, până la optimizarea serviciilor noastre pe diferite hardware și modele, până la integrarea celor mai avansate sisteme NLP, în final realizând SeaMeet, soluția noastră colaborativă pentru întâlniri moderne.

## Dincolo de algoritmi
Modern Meetings a fost o demonstrație excelentă, dar a rămas întotdeauna la nivel de demonstrație. Era un drum lung până să devină cu adevărat producție. Am implementat cu succes versiunea de demonstrație folosind mai întâi stiva tehnologică Microsoft Azure. Dar după ce am recunoscut diversele deficiențe ale software-ului, am decis să înlocuim cu proprii noștri algoritmi și să facem întreaga experiență mai fluidă, mai ușoară și mai flexibilă.
Modern Meetings are patru componente principale:

1. Procesarea semnalelor pentru array-ul de microfoane, în special beamforming
2. Separarea și identificarea vorbitorilor
3. Recunoașterea vocală personalizată
4. O interfață de utilizator mai bună

Vom prezenta în detaliu toate componentele importante în continuare.

<center>
<img src="/images/blog/5-seameet-voice-intelligence-meeting-transcription-speech-recognition-algorithm-of-modern-meeting/tech-stack.png" alt="Arhitectura SeaMeet cu 4 componente principale"/>

Am reconstruit cele patru componente principale ale Modern Meetings cu propria noastră stivă tehnologică: 1. Procesarea semnalelor pentru array-ul de microfoane; 2. Separarea și identificarea vorbitorilor; 3. Recunoașterea vocală personalizată; 4. Interfață web modernă.
</center>

### Procesarea semnalelor pentru array-ul de microfoane
Comparat cu un singur microfon de apropiere, array-ul de microfoane poate capta sunet din întreaga gamă de 360 de grade, la distanțe de până la 5 metri. Astfel, un array de microfoane poate colecta voce într-o sală de întâlniri de dimensiuni medii de 10 metri x 10 metri. Toate microfoanele sunt concentrate într-un singur dispozitiv, reducând semnificativ dezordinea cablurilor din sala de întâlniri și simplificând instalarea și întreținerea.
Pe de altă parte, obiectivul downstream al utilizării array-ului de microfoane este să furnizăm modelelor noastre date de cea mai bună calitate. Prin urmare, înainte de recunoașterea automată a vocii, aplicăm mai mulți algoritmi de procesare a semnalelor. Nucleul pipeline-ului de preprocesare este algoritmul de beamforming. Deoarece folosim un array circular de microfoane multiple, putem exploata diferențele mici de timp de sosire a sunetului la fiecare microfon. Beamforming-ul funcționează prin determinarea caracteristicilor principale ale semnalului (cel mai bun beam), amplificând aceste frecvențe în timp ce atenuează sunetele nedorite. Rezultatul este reducerea zgomotului și dereverberația, făcând semnalul principal (vocea) mai tare și mai clar.

Performanța optimă a multor algoritmi de beamforming necesită cunoașterea poziției sursei de sunet (vorbitorul) în raport cu microfoanele. Dar în aplicațiile practice acest lucru este aproape imposibil, așa că mai întâi calculăm greutățile de câmp îndepărtat prin determinarea direcției sursei de sunet. Acest pas se numește localizarea sursei de sunet, sau mai specific direcția de sosire (DOA). Principala problemă pe care am întâlnit-o a fost netezimea. Algoritmul poate da rezultate aproximativ corecte, dar direcția determinată a sursei de sunet fluctuează constant în intervalul de 30 de grade pe ambele părți ale direcției reale, afectând beamforming-ul. Soluția noastră este să permitem algoritmului de localizare a sursei de sunet să folosească doar benzile de frecvență care codifică frecvențele principale ale vocii umane și să combinăm tehnici de netezire, păstrând "istoria" rezultatelor DOA pentru medie. Rezultatele DOA mai fiabile ne permit să calculăm greutățile de câmp îndepărtat și să determinăm cel mai bun beam.

Seria de algoritmi executați pe Kinect DK: beamforming, reducerea zgomotului, dereverberația, localizarea sursei de sunet, ne permite să generăm voce umană clară și îmbunătățită în timp real și să localizăm aproximativ direcția vorbitorului. Aceasta va ajuta semnificativ următorul pas de identificare a vorbitorului.

### Separarea și identificarea vorbitorilor

Următoarea componentă cheie a sistemului de transcriere a întâlnirilor este identificarea automată a vorbitorilor. Așa cum s-a menționat în partea anterioară a acestei serii, citirea unui text de conversație dezordonat fără informații despre vorbitori este frustrantă și își pierde complet scopul sistemului. Aici intervine identificarea vorbitorilor.

Prin această componentă, putem alinia automat transcrierile și audio-ul cu numele vorbitorilor. Implementarea se face folosind tehnici de separare care grupează segmentele audio în grupuri egale cu numărul de vorbitori din înregistrare. Metoda folosește un sistem de detectare a activității vocale (VAD) pentru a determina segmentele vocale, din care se extrag reprezentări vectoriale cu ferestre scurte. Vectorul extras din fiecare fereastră se numește xvector la nivel de enunț, care, când este mediat, devine xvector la nivel de vorbitor. Apoi acești xvectori sunt grupați, fiecare cluster reprezentând segmente vocale care aparțin aceluiași vorbitor. Merită menționat că alegerea algoritmului de clustering afectează semnificativ performanța separării, și am obținut cea mai bună rată de eroare de separare (DER) prin folosirea unui algoritm de clustering spectral cu matrice de afinitate cu prag și combinând cu valoarea de gap maxim de caracteristici normalizat (NME) ajustată automat. În final, trebuie determinat ce vorbitor reprezintă fiecare cluster. Înainte de întâlnire, se poate extrage xvector-ul fiecărui vorbitor din 40 de secunde de înregistrare, comparându-l cu rezultatele de clustering pentru a identifica vorbitorul corespunzător.

Flexibilitatea acestui flux constă în faptul că: în multe scenarii de întâlniri, obținerea înregistrărilor fiecărui vorbitor în avans nu este practică. De exemplu, întâlniri de afaceri cu clienți VIP sau conferințe mari cu 50 de vorbitori. În astfel de cazuri, sărind peste pasul de înregistrare, sistemul nostru de separare poate încă grupa segmentele vocale. Este suficientă o intervenție manuală pentru a extrage câteva secunde de audio din fiecare cluster pentru a determina identitatea vorbitorului. Împreună cu o interfață de utilizator modernă dedicată, poate oferi aceeași funcționalitate dar mai flexibilă.

### Recunoașterea vocală personalizată

După ce am înțeles puterea transcriberului de întâlniri Microsoft, am fost gata să facem sistemul complet independent, depășind produsul revoluționar existent. Nucleul Modern Meetings și al oricărui produs de transcriere este modelul de recunoaștere automată a vocii (ASR), deci am acordat cea mai mare atenție.
Azure Cognitive Services oferă modele disponibile pentru diverse limbi și dialecte, dar performanța între diferite dialecte este dificil de distins. Pentru diferitele dialecte ale englezei, cel mai mult efort și date sunt probabil concentrate pe modelul de engleză americană, apoi se face fine-tuning cu date cu accent pentru a produce diverse modele de dialecte. Am vrut să ne asigurăm că dacă oferim modele independente, acestea să fie optimizate pentru cazuri de utilizare specifice. Aceasta înseamnă colectarea a mii de ore de audio și transcrieri localizate și investirea a săptămâni în antrenament și fine-tuning. Dar să vezi modelul îmbunătățindu-se la fiecare epoch și îndeplinind promisiunile este foarte satisfăcător.

Cu un model de bază solid, următorul pas este extinderea disponibilității și personalizării. Fiecare industrie are o mulțime de terminologie proprietară care face modelele ASR dificil de distins între cuvinte rare și cuvinte comune cu pronunție similară.

Soluția noastră este SeaVoice, care oferă utilizatorilor o platformă centralizată pentru a face fine-tuning modelelor pentru nevoi specifice. 
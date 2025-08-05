---
title: "Serviciul clienți United Airlines: Binele, răul și urâtul"
metatitle: "Analiza serviciului clienți United Airlines"
date: 2023-03-21T11:25:00-08:00
draft: false
author: Xuchen Yao
description: "Xuchen Yao își împărtășește experiența recentă cu serviciul clienți United Airlines în timpul întârzierilor și anulărilor de zboruri și propune soluții pentru a aborda provocările de scalare dinamică a suportului clienți în perioadele de vârf de trafic."
weight: 1
tags: ["SeaX"]
image: images/blog/31-cx-at-united-airlines/flight-delay-illustration.png
canonicalURL: "/blog/customer-service-at-united-airlines/"
url: "/blog/customer-service-at-united-airlines/"
modified_date: 2024-12-19T10:30:00Z
---

*CEO-ul [Seasalt.ai](https://seasalt.ai) Xuchen Yao își împărtășește experiența recentă cu serviciul clienți United Airlines în timpul întârzierilor și anulărilor de zboruri. Aceasta l-a făcut să realizeze provocările pe care le întâmpină suportul clienți al companiilor aeriene în scalarea dinamică pentru a face față vârfurilor de trafic în astfel de situații. Xuchen Yao discută despre îmbunătățirile potențiale, cum ar fi redirecționarea traficului de self-service de la agenții umani, îmbunătățirea eficienței agenților umani și dezvoltarea tehnologiei pentru a identifica proactiv și a reduce riscul problemelor potențiale.*

Acest blog a fost scris pe zborul UA2 din 22 martie 2023 de la Singapore la San Francisco.

Am avut recent plăcerea de a zbura cu zborul UA1 de la San Francisco (SFO) la Singapore (SIN). Această plăcere s-a transformat rapid în neplăcere din cauza anulării zborului. Iată ce am învățat despre serviciul clienți United Airlines din perspectiva unui constructor de tehnologie pentru centre de contact.

# Două zboruri întârziate: întârzieri și anulări

Iată planul de călătorie de la Seattle la Singapore din 14 martie 2023, marți:

<center>
<img src="/images/blog/31-cx-at-united-airlines/united-flights.png" alt="Zborurile mele planificate United Airlines"/>

*7:29 AM – 9:42 AM, de la Seattle (SEA) la San Francisco (SFO) cu UA2368. 11:50 AM – 8:15 PM, de la San Francisco (SFO) la Singapore (SIN) cu UA29.*
</center>

Din păcate, nu am luat niciunul dintre zboruri.

Primul zbor a fost întârziat cu 1,5 ore din cauza aglomerării de la aeroportul Seattle (la 7 dimineața!). Aceasta mi-a redus timpul de conexiune în SFO la 0. Am vorbit cu personalul de la sol din SEA, care m-a reprogramat pe un zbor Alaska Airlines de la SEA la SFO. Acel zbor Alaska Airlines a fost și el întârziat, dar a ajuns în SFO la 11 AM, dându-mi aproape suficient timp să prind următorul zbor.

**Partea bună**: United Airlines mi-a permis să schimb gratuit zborul pe Alaska Airlines.

**Partea bună**: United Airlines gestionează foarte proactiv întârzierile prin codul scurt "26266". Când au loc întârzieri, oferă chiar opțiuni de reprogramare a zborurilor.

**Partea rea**: Opțiunile de schimbare a zborurilor sunt limitate la zborurile United Airlines. Nu se pot schimba între companii aeriene. A trebuit să vorbesc cu un agent uman pentru a schimba pe un zbor diferit.

**Partea urâtă**: De ce era aeroportul SEA blocat la 7 dimineața?!

<center>
<table>
  <tr>
    <td><img src="/images/blog/31-cx-at-united-airlines/united-text-support-3.jpg" alt="Suport SMS United Airlines - 3"/></td>
    <td><img src="/images/blog/31-cx-at-united-airlines/united-text-support-4.jpg" alt="Suport SMS United Airlines - 4"/></td>
    <td><img src="/images/blog/31-cx-at-united-airlines/united-text-support-5.jpg" alt="Suport SMS United Airlines - 5"/></td>
  </tr>
 </table>

*Sistemul de SMS al United Airlines este prompt și proactiv.*
</center>

Apoi, pe zborul UA1. Am stat la sol timp de 3 ore, iar în final zborul a fost anulat din cauza următoarelor evenimente:

1. Mai întâi, vântul din San Francisco era foarte puternic și toate zborurile au fost anulate.
2. Apoi, când au fost aprobate zborurile, toate avioanele au stat la coadă pentru decolare.
3. În final, când era aproape rândul nostru, piloții au spus că lucrau overtime și conform regulamentelor FAA, era ilegal să continue să zboare. Pentru că zborul către Singapore durează 17 ore, ținând cont de timpul petrecut la sol, ar fi depășit limita când ar fi ajuns în Singapore.

Din păcate, nu erau piloți de rezervă, deci întregul zbor a fost anulat.

**Partea urâtă**: În tot timpul de 3 ore petrecut la sol, United Airlines a oferit doar 2 biscuiți. Atât.

Toată lumea a ieșit din avion, gândindu-se cum va afecta aceasta călătoria lor. Pentru că era un zbor internațional, ar fi trebuit să ajungem în Singapore într-o dată diferită. Nu a doua zi, ci de fapt două zile mai târziu: pentru că Singapore este cu 15 ore înaintea noastră, iar zborul durează 17 ore.

Apoi aproximativ 300 de pasageri au alergat la serviciul clienți United Airlines de la sol. Când am ajuns la serviciul clienți United Airlines, erau aproximativ 200 de oameni în fața mea la coadă. Mulți dintre ei erau afectați de vremea altor zboruri United Airlines.

Având în vedere că coada se mișca încet, era inutil să vorbesc cu un agent de la sol. Știam că exista un zbor către Singapore la 11 PM în aceeași seară, tot cu United Airlines. Speram să pot să schimb pe acel zbor de la 11 PM. Probabil că mulți de pe zborul meu voiau să facă același lucru, dar toți stăteau la coadă ca mine.

Am făcut următoarele:

1. Am contactat United Airlines prin telefon: 800-864-8331
2. Am trimis SMS la agentul virtual United Airlines prin codul scurt: 32050
3. Am încercat să fac chat video cu un agent pe site-ul United Airlines
4. Am stat și la coada pentru serviciul clienți de la sol

Când trebuie să rezolv o problemă importantă și urgentă imediat, sunt literalmente un client **cross-channel**.

**Partea bună**: United Airlines a oferit 4 moduri diferite de a contacta serviciul lor clienți.

**Partea bună**: Prin confirmarea numărului zborului, United Airlines a putut să-și interogheze statusul și să știe că zborul era afectat, oferind opțiuni de reprogramare/anulare.

**Partea rea**: Estimarea timpului de așteptare la telefon era complet greșită. Mi-a spus că timpul de așteptare era de 2 minute, dar am așteptat 45 de minute să vorbesc cu un agent.

**Partea rea**: Chatbot-ul era foarte prost. A trebuit să urmez "meniul" său prin apăsarea 1/2/3/4 sau A/B/C/D/E ca răspuns.

<center>
<table>
  <tr>
    <td><img src="/images/blog/31-cx-at-united-airlines/united-text-support-3.jpg" alt="Suport SMS United Airlines - 3"/></td>
    <td><img src="/images/blog/31-cx-at-united-airlines/united-text-support-4.jpg" alt="Suport SMS United Airlines - 4"/></td>
    <td><img src="/images/blog/31-cx-at-united-airlines/united-text-support-5.jpg" alt="Suport SMS United Airlines - 5"/></td>
  </tr>
 </table>

*Chatbot-ul United Airlines folosește tehnologie de generație anterioară, oferind carduri de meniu pentru a limita inputul pasagerilor.*
</center>

**Partea urâtă**: La sol erau mai puțin de 10 agenți care gestionau peste 1000 de pasageri afectați. Aceasta a creat anxietate, furie, neputință și stres atât pentru clienți cât și pentru agenți. Acest lucru s-a întâmplat pentru că când zborul nostru a fost anulat, personalul de la sol și stewardesele au spus tuturor să meargă la serviciul lor clienți de la sol. **Direcționarea fiecărui pasager afectat către mai puțin de 10 agenți de la sol a creat un atac fizic "DDOS" asupra serviciului clienți United Airlines de la sol.**

DDOS înseamnă "Distributed Denial of Service", când hackerii direcționează trafic de la milioane de locuri către un site web, făcându-l incapabil să răspundă la orice serviciu.

**Partea urâtă**: Am folosit 4 canale pentru a comunica cu United Airlines (SMS, chat video, telefon, la sol). Am folosit de 4 ori mai multe resurse, iar alții probabil au făcut același lucru. Aceasta a crescut artificial traficul și stresul serviciului clienți United Airlines de 4 ori. Cred că și alți pasageri au făcut același lucru, pentru că aceasta explică de ce "timpul meu de așteptare de 2 minute" a devenit în final 45 de minute.

În final am reușit să contactez prin telefon, iar agentul a petrecut aproximativ 20 de minute să mă reprogrameze pe zborul târziu de la 11 PM către Singapore din acea seară. Când am terminat, încă eram în coada de chat video, interacționând cu chatbot-ul (ironic că se numește liveperson), și evident încă stăteam la coada fizică.

I-am spus unui tânăr de pe același zbor să sune la United Airlines. A spus: "Imposibil, va dura o veșnicie!" Dar am spus: "Tocmai am reprogramat prin telefon. Uite, sunt 200 de oameni în fața noastră, cât crezi că vei sta la coadă?"

Mai târziu la 11 PM, l-am întâlnit pe acel tânăr pe zborul reprogramat. Era foarte fericit să mă vadă și era foarte recunoscător pentru "sfatul meu cu telefonul". Purta un tricou "tiktok" și căști de înaltă calitate, așa că am crezut că poate înțelege tehnologia, sau cel puțin este bun cu calculatoarele.

**Partea urâtă**: Un client "tehnic" credea că suportul telefonic nu poate rezolva nimic și prefera să stea personal la coadă pentru a vorbi cu o persoană reală, deși vedea clar cât de lungă era coada. **Aceasta reflectă cât de proastă este percepția publică despre inutilitatea suportului telefonic.**

# Suportul clienți al companiilor aeriene: Problema principală este scalabilitatea dinamică

După ce am experimentat o întârziere de zbor și o anulare de zbor în aceeași zi, și am comunicat de două ori cu serviciul clienți prin 4 canale diferite, plus o înțelegere profundă a modului în care sunt construite centrele de contact, cred că problema principală cu suportul clienți al companiilor aeriene este:

**Suportul clienți al companiilor aeriene nu se poate scala dinamic. Sau în termeni de cloud computing: suportul clienți al companiilor aeriene nu este elastic.**

Aceasta nu se întâmplă doar la United Airlines. Am avut o experiență similară cu Air Canada în timpul Covid-19: fiecare timp de așteptare la telefon era peste 2 ore.

Nici măcar nu cred că un chatbot prost sau un agent uman fără empatie este problema principală. Suportul clienți are un model unic - vine în valuri: **De obicei, când zborurile sunt afectate, zeci sau sute de pasageri încearcă să contacteze simultan, uneori de 4 ori prin canale multiple cross-channel.**

Acest vârf de trafic nu este gestionat bine de centrele de contact moderne ale companiilor aeriene. Mai rău, toate aceste probleme sunt "cod roșu": trebuie rezolvate _imediat_. Scuze, nu există suport prin email asincron bazat pe Zendesk. _Am nevoie să vorbesc cu un agent imediat_.

# Suportul clienți al companiilor aeriene: Oamenii nu se pot scala

Să ne gândim cum se pregătesc site-urile de e-commerce pentru vârfurile de trafic precum Black Friday:

1. **Predicția** ce tip de trafic va fi la ce oră.
2. **Alocarea prealocată** a resurselor suficiente de server prin contactarea furnizorilor de cloud sau creșterea limitelor cluster-ului de servere.
3. **Generarea dinamică** a mai multor servere când traficul crește.

Poate suportul clienți al companiilor aeriene să facă același lucru?

1. **Predicția**: Putem folosi modele pentru a prezice când zborurile vor fi afectate, dar nu știu dacă folosesc orice model. De exemplu, se pot lua în considerare:
   * Traficul din jurul aeroportului - ușor de obținut de la Google Maps
   * Aglomerarea aeroportului - unele aeroporturi au actualizări în timp real
   * Vremea locală
   * Modelele comune de călătorie precum sărbătorile
   * Evenimente locale precum CES Las Vegas care cauzează mulți călători să intre și să iasă
   * Alte semnale precum starea avionului
   * Istoricul stării
2. **Alocarea prealocată**: Cred că aceasta este ceea ce fiecare companie aeriană face sau ar trebui să facă prin angajarea mai multor agenți în perioada sărbătorilor. Sigur sper că fac asta. Știu că TurboTax angajează mai mulți oameni în jurul datei limită de depunere a declarațiilor.
3. **Generarea dinamică**: Aceasta este cea mai dificilă situație. Nu există nicio modalitate simplă de a face asta cu oamenii, în special cu agenții antrenați și experimentați.

# Suportul clienți al companiilor aeriene: Cum să se scaleze

Obiectivul nostru principal este să gestionăm vârfurile de trafic fără întârziere când pasagerii au nevoie să rezolve probleme imediat.

1. Canalele de self-service digital nu par să poată înlocui complet agenții umani din două motive:
   Canalele de self-service digital sunt limitate și nu pot oferi accesul la backend pe care îl oferă agenții umani.
2. Pasagerii vor psihologic să vorbească cu o persoană, pentru că soluțiile tradiționale de automatizare nu au ajutat, în special chatbot-urile notorii.

Soluția nu este atât de simplă, pentru că oamenii sunt greu de scalat. Dar există soluții:

1. Multe probleme pot fi încă rezolvate prin canalele de self-service. Trebuie să le identificăm și să redirecționăm traficul de self-service de la agenții umani.
   * De exemplu, când zborul meu a fost anulat - voiam doar să reprogramez zborul. Dar United Airlines nu mi-a oferit această opțiune, a trebuit să sun. Cu toate acestea, când zborul meu a fost întârziat, United Airlines mi-a oferit proactiv opțiunea de reprogramare. Soluția pentru ambele probleme este aceeași - când zborul meu a fost anulat, nu aveam nevoie să vorbesc cu un agent ca atunci când zborul a fost întârziat. De ce nu puteam să fac self-service?

2. Agenții umani pot fi mai eficienți în timpul chat-ului sau apelului.
   * Agentul a petrecut aproximativ 30 de minute să mă reprogrameze, din care aproximativ 15 minute m-a făcut să aștept în timp ce ea făcea ceva.
   * Restul de 15 minute a vorbit cu mine: jumătate din timp colecta informații.
   * Cred că prin optimizare, dacă colectarea informațiilor și automatizarea sunt făcute bine, 30 de minute pot fi reduse la 5-10 minute.

Dacă aș construi un sistem de centru de contact pentru United Airlines, aș face asta:

1. Ofer chat și telefon ca canale principale de serviciu clienți. Nu redirecționa toți pasagerii unui avion către serviciul clienți de la sol (am văzut cu toții cât de aglomerat este punctul de închirieri auto după ce un avion mare aterizează într-o destinație turistică).

2. Combin clienții cross-channel într-un singur canal. Aceasta înseamnă identificarea clienților cât mai repede posibil. Aceasta va reduce dramatic dimensiunea cozii și va economisi lățimea de bandă a agenților.

3. Produc suport bazat pe chat mai inteligent. După ChatGPT, chatbot-urile de generație actuală sunt învechite, demodate și foarte nepopulare. Lasă ChatGPT să gestioneze conversația - din experiența noastră, o face mai bine decât oamenii!

4. Emphasize eficiența agenților umani: dacă fiecare apel durează 45 de minute, atunci terminarea muncii nu este suficientă; să îi ajutăm să rezolve problemele rapid prin oferirea:
   * Sugestiilor "următoarei acțiuni optime"
   * "Soluțiilor anterioare reușite" bazate pe înregistrările de chat sau apeluri ale altor agenți
   * Unui copilot în timp real care ajută la executarea automatizării prin API calls sau RPA către sistemele backend

5. Construiesc un model predictiv despre riscul de vârfuri de cereri de serviciu clienți și gestionez proactiv.

Nu am întâlnit niciodată un reprezentant de serviciu clienți să mă contacteze proactiv pentru a rezolva o problemă. Întotdeauna sunt eu, ca pasager, așteptând anxios, stând la coadă, sunând.

Suntem încântați la [Seasalt.ai](https://seasalt.ai/?utm_source=blog) să dezvoltăm o tehnologie similară cu "Minority Report" pentru a identifica problemele înainte să se întâmple, reducând riscul prin contactarea proactivă a pasagerilor afectați și abordând provocarea de scalare dinamică a centrelor de contact umane în vârfurile de trafic.

Dacă în următorii ani, înainte să încerc să caut ajutor, voi primi un apel de la compania aeriană care mă informează despre problemele potențiale, aceasta va fi o experiență de client cu adevărat uimitoare și o călătorie plăcută, chiar înainte să plec. Orice companie aeriană care va face primul acest lucru va câștiga nenumărați călători fideli. 
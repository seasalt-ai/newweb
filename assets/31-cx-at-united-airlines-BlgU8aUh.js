const e=`---
title: "Serviciul clienți la United Airlines: bunul, răul și urâtul"
metatitle: "Analiză asupra serviciului clienți la United Airlines"
date: 2023-03-21 11:25:00-08:00
modified_date: 2025-08-01T12:00:00Z
draft: false
author: Xuchen Yao
description: "Xuchen Yao își împărtășește experiența recentă cu serviciul clienți al United Airlines în timpul întârzierilor și anulărilor de zboruri și propune soluții pentru a aborda provocarea scalării dinamice a asistenței pentru clienți în timpul traficului intens."
weight: 1
tags:
  - SeaX
image: images/blog/31-cx-at-united-airlines/flight-delay-illustration.png
canonicalURL: /blog/customer-service-at-united-airlines/
url: /blog/customer-service-at-united-airlines/
---

*[Seasalt.ai](https://seasalt.ai) CEO, Xuchen Yao, își împărtășește experiența recentă cu serviciul clienți al United Airlines după ce s-a confruntat cu întârzieri și anulări de zboruri. Acest lucru l-a făcut să realizeze provocările cu care se confruntă asistența pentru clienți a companiilor aeriene în scalarea dinamică pentru a gestiona traficul intens în astfel de situații. Xuchen vorbește despre potențiale îmbunătățiri, cum ar fi devierea traficului self-service de la agenții umani, îmbunătățirea eficienței agenților umani și dezvoltarea tehnologiei pentru a identifica și a reduce proactiv riscurile potențiale.*

Acest blog a fost scris în zborul UA2 de la Singapore la San Francisco pe 22.03.2023.

Am avut recent plăcerea de a lua zborul UA1 de la San Francisco (SFO) la Singapore (SIN). Plăcerea s-a transformat rapid într-o nenorocire din cauza anulării zborului. Iată ce am învățat despre serviciul clienți al United din perspectiva unui tehnolog care construiește centre de contact.



# Un zbor cu două întârzieri: întârziat și anulat

Iată planul pentru călătoria la Singapore din Seattle, marți, 14.03.2023:

<center>
<img src="/images/blog/31-cx-at-united-airlines/united-flights.png" alt="Zborurile mele planificate United"/>

*7:29 AM – 09:42 AM, de la Seattle (SEA) la San Francisco (SFO) cu UA2368. 11:50 AM – 08:15 PM, de la San Francisco (SFO) la Singapore (SIN) cu UA29.*
</center>

Din păcate, nu am luat niciunul dintre zboruri.

Primul zbor a fost întârziat cu 1,5 ore din cauza unui blocaj la aeroportul din Seattle (la 7 dimineața!). Asta mi-a redus timpul de tranziție la 0 la SFO. Am vorbit cu serviciul de teren de la SEA și m-au pus pe un zbor Alaska de la SEA la SFO. Acel zbor Alaska a fost și el întârziat, dar a ajuns totuși la SFO la 11 dimineața, dându-mi abia suficient timp să prind următorul zbor.

**PARTEA BUNĂ**: United mi-a permis să-mi schimb zborul cu Alaska gratuit.

**PARTEA BUNĂ**: United a fost foarte proactiv în privința întârzierilor prin intermediul unui cod scurt „26266”. Când a avut loc întârzierea, a oferit chiar opțiuni de a-mi reprograma zborurile.

**PARTEA REA**: Opțiunea de reprogramare a zborului este limitată doar la zborurile United. Nu există reprogramare între companiile aeriene. A trebuit să vorbesc cu un om pentru a fi pus pe un zbor diferit.

**PARTEA URÂTĂ**: De ce era aeroportul SEA atât de aglomerat la 7 dimineața?!

<center>
<table>
  <tr>
    <td><img src="/images/blog/31-cx-at-united-airlines/united-text-support-1.jpg" alt="Suport prin mesaj text United - 1"/></td>
    <td><img src="/images/blog/31-cx-at-united-airlines/united-text-support-2.jpg" alt="Suport prin mesaj text United - 2"/></td>
  </tr>
 </table>

*Sistemul de mesagerie cu cod scurt al United Airlines este la timp și proactiv.*
</center>


1. Ceea ce a fost interesant a fost **pe** UA1. Am stat la sol timp de 3 ore și, în cele din urmă, zborul a fost anulat din cauza următoarelor evenimente:
2. Mai întâi, San Francisco a avut vânt foarte puternic, astfel încât toate zborurile au fost oprite
Apoi, când a fost permis să zboare, toate avioanele așteptau într-o coadă foarte lungă pentru a se elibera
3. În cele din urmă, când era aproape rândul nostru, piloții au spus că lucrau ore suplimentare și, conform reglementărilor FAA, era ilegal pentru ei să continue să zboare. Deoarece zborul către Singapore era de 17 ore și având în vedere timpul petrecut la sol, ar fi depășit limita până la sosirea în Singapore.

Din păcate, nu au existat piloți de înlocuire, așa că întregul zbor a fost anulat.

**PARTEA URÂTĂ**: Pe toată durata celor 3 ore petrecute la sol, United a oferit 2 biscuiți. Atât.

Toată lumea s-a grăbit să iasă din avion, gândindu-se cum le-a afectat acest lucru călătoria. Deoarece este un zbor internațional, am fi ajuns în Singapore într-o altă zi. Nu a doua zi, ci de fapt două zile mai târziu: deoarece Singapore este cu 15 ore înainte, iar zborul este de 17 ore.

Apoi, aproximativ 300 de pasageri au alergat la serviciul clienți la sol al United. Până am ajuns la serviciul clienți United, erau deja aproximativ 200 de persoane în fața mea. Mulți dintre ei au fost afectați din cauza vremii de la alte zboruri operate de United.

A ajunge să vorbești cu un agent la sol ar fi fost fără speranță, având în vedere cât de lent se mișca coada. Știu că există un alt zbor la 11 PM către Singapore în aceeași zi, tot de la United. Speranța mea este să fiu reprogramat la acel zbor de la 11 PM. Probabil că mulți oameni din zborul meu au vrut să facă același lucru, dar toți stăteau la coadă ca și mine.

Iată ce am făcut:

1. Am sunat la United prin telefon: 800-864-8331
2. Am trimis un mesaj agentului virtual United prin cod scurt: 32050.
3. Am folosit site-ul United pentru a încerca să fac video chat cu agentul
4. Stăteam și la coadă pentru un agent la sol

Eram literalmente un client **multi-canal** atunci când trebuia să rezolv o problemă importantă și urgentă imediat.


**PARTEA BUNĂ**: United a oferit 4 moduri diferite de a te conecta cu serviciul lor de clienți.

**PARTEA BUNĂ**: Prin confirmarea numărului zborului, United a putut să-i verifice starea și a știut că a fost afectat, și a oferit opțiuni de reprogramare/anulare.

**PARTEA REA**: Estimarea timpului de așteptare la telefon a fost mult greșită. Mi-a spus că timpul de așteptare era de 2 minute, dar am așteptat 45 de minute pentru a vorbi cu un agent.

**PARTEA REA**: Chatbotul este foarte prost. A trebuit să-i urmez „meniurile” apăsând 1/2/3/4 sau A/B/C/D/E ca răspunsuri.

<center>
<table>
  <tr>
    <td><img src="/images/blog/31-cx-at-united-airlines/united-text-support-3.jpg" alt="Suport prin mesaj text United - 3"/></td>
    <td><img src="/images/blog/31-cx-at-united-airlines/united-text-support-4.jpg" alt="Suport prin mesaj text United - 4"/></td>
    <td><img src="/images/blog/31-cx-at-united-airlines/united-text-support-5.jpg" alt="Suport prin mesaj text United - 5"/></td>
  </tr>
 </table>

*Chatbotul United Airline utilizează tehnologia de ultimă generație care oferă o carte de meniu pentru a limita intrarea pasagerilor.*
</center>


**PARTEA URÂTĂ**: Au fost literalmente mai puțin de 10 agenți de servicii pentru clienți la sol pentru a gestiona peste 1000 de pasageri afectați. Acest lucru a creat anxietate, furie, neajutorare și presiune atât asupra clienților, cât și asupra agenților. Acest lucru se datorează faptului că, atunci când zborul nostru a fost anulat, serviciul la sol și însoțitorii de zbor le-au spus tuturor să vorbească cu serviciul lor de clienți la sol. **Instruirea fiecărui pasager afectat să vorbească cu cei mai puțin de 10 agenți de servicii pentru clienți la sol a creat un atac fizic de tip „DDOS” asupra serviciului de clienți la sol al United.**

DDOS înseamnă „Distributed Denial of Service” (atac de tip refuz de serviciu distribuit) atunci când hackerii direcționează traficul de la milioane de locuri către un singur site web pentru a-l face să nu răspundă la niciun serviciu.

**PARTEA URÂTĂ**: Am folosit 4 canale pentru a vorbi cu United (text, video chat, apel telefonic, la sol). Am folosit de 4 ori mai multe resurse și toți ceilalți ar fi putut face la fel. Acest lucru a crescut artificial un vârf de 4X al traficului și presiunii asupra serviciului clienți United. Presupun că fiecare alt pasager a făcut la fel, pentru că asta a explicat de ce „timpul meu de așteptare de 2 minute” a devenit în cele din urmă 45 de minute.

În cele din urmă, am fost conectat prin telefon, iar agentul a petrecut aproximativ 20 de minute pentru a mă reprograma la un zbor ulterior, la ora 23:00, către Singapore, în aceeași zi. Până am terminat, eram încă la coadă în video chat, mă ocupam de chatbot (în mod ironic, se numește liveperson) și, evident, eram fizic la coadă.

I-am spus unui tânăr care stătea în spatele meu, din același zbor, să sune la United. El a spus: „Nici vorbă, va dura o veșnicie!”. Dar eu am spus: „Tocmai am reprogramat prin telefon. Uite, sunt 200 de oameni în fața noastră, cât crezi că vei aștepta la coadă?”

Mai târziu, la ora 23:00, l-am întâlnit pe tânăr în zborul meu reprogramat. Era atât de fericit să mă vadă și nu-mi putea mulțumi suficient pentru „sfatul telefonic”. Purta un tricou „tiktok” și căști de înaltă calitate, așa că am crezut că ar putea fi priceput la tehnologie sau cel puțin bun cu computerele.

**PARTEA URÂTĂ**: Percepția unui client „priceput la tehnologie” a fost că apelurile telefonice nu-i vor rezolva nimic, ar prefera să aștepte fizic la coadă pentru a vorbi cu o persoană reală, în timp ce putea vedea clar cât de lungă era coada. **Acest lucru reflectă cât de prost gândește publicul larg despre inutilitatea suportului telefonic.**

# Suportul clienți al companiilor aeriene: problema principală este scalabilitatea dinamică

Cu experiența de a avea un zbor întârziat și unul anulat în aceeași zi, și de a vorbi cu serviciile clienți prin 4 canale diferite în două ocazii, și o înțelegere profundă a modului în care sunt construite centrele de contact – cred că problema majoră a suportului clienți al companiilor aeriene este aceasta:

**Suportul clienți al companiilor aeriene nu se poate scala dinamic. Sau, în termeni de cloud computing: Suportul clienți al companiilor aeriene nu este elastic.**

Acest lucru nu s-a întâmplat doar cu United. Am avut experiențe similare cu Air Canada în timpul COVID-19: fiecare apel telefonic a durat mai mult de 2 ore de așteptare.


Nici măcar nu cred că un chatbot prost sau un agent uman lipsit de empatie este problema principală. Suportul clienți are un model unic, care vine în valuri: **de obicei, când un zbor este afectat, între zeci de pasageri și sute dintre ei încearcă să contacteze în același timp, uneori cu un multiplicator de 4 prin canale încrucișate.**

Acest tip de creștere a traficului nu este bine gestionat de centrele de contact moderne ale companiilor aeriene. Ceea ce o înrăutățește este că toate aceste probleme sunt „cod roșu”: trebuie rezolvate _imediat_. Ne pare rău, nu există suport de e-mail asincron bazat pe Zendesk. _Trebuie să vorbesc cu un agent chiar acum_.

# Suportul clienți al companiilor aeriene: Oamenii nu se scalează

Să ne gândim cum se pregătește un site web de comerț electronic în timpul traficului de vârf, cum ar fi Black Friday:
1. **Prezice** ce fel de trafic va primi la ce oră.
2. **Pre-alocă** suficiente resurse de server contactând furnizorii de cloud sau crește limita clusterelor lor de servere.
3. **Generează dinamic** mai multe servere atunci când traficul crește.

Poate suportul clienți al companiilor aeriene să facă același lucru?
1. **Prezice**: există modele pe care le-am putea folosi pentru a prezice când un zbor este afectat, dar nu știu dacă le folosesc. De exemplu, se pot lua în considerare următorii factori:
    * Traficul în jurul aeroportului – ușor de extras din Google Maps
    * Congestia la aeroport – unele aeroporturi au actualizări în timp real
    * Vremea locală
    * Modele de călătorie obișnuite, cum ar fi sărbătorile
    * Evenimente locale care creează un aflux și un exflux mare de pasageri, cum ar fi CES în Las Vegas
    * Alte semnale, cum ar fi condițiile avionului
    * Stări istorice
2. **Pre-alocă**: Cred că asta face sau ar trebui să facă fiecare companie aeriană în jurul sărbătorilor, angajând mai mulți agenți. Cu siguranță sper că fac asta. Știu că TurboTax angajează mai mulți oameni în jurul termenelor limită de depunere a declarațiilor fiscale.
3. **Generează dinamic**: acesta este cel mai dificil caz. Pur și simplu nu există o modalitate ușoară de a o face cu oameni, mai ales cu agenți instruiți și experimentați.

# Suportul clienți al companiilor aeriene: Cum să scalezi

Obiectivul nostru principal este să gestionăm traficul intens atunci când pasagerii trebuie să-și rezolve problemele pe loc, fără întârziere.
1. Canalele digitale self-service nu par să poată înlocui total agenții umani din următoarele două motive:
Canalele digitale self-service sunt limitate și nu oferă suficient acces la back-office, așa cum are un agent uman
2. Pasagerii doresc psihologic să vorbească cu un om, deoarece, în mod tradițional, soluțiile automate nu au fost de ajutor, în special infamele chatbot-uri.

Soluția nu este atât de simplă, deoarece oamenii sunt greu de scalat. Dar au existat și modalități de a o rezolva:
1. Multe probleme pot fi încă rezolvate prin canale self-service. Trebuie să le identificăm și să deviem traficul self-service de la agenții umani.
    * De exemplu, când zborul meu a fost anulat – tot ce am vrut a fost să reprogram zborurile. Dar United nu mi-a oferit această opțiune și a trebuit să sun. Cu toate acestea, când zborul meu a fost întârziat, United mi-a oferit proactiv opțiunea de reprogramare. Soluțiile la ambele probleme sunt aceleași – nu trebuie să vorbesc cu un agent când zborul meu este anulat mai mult decât când zborul meu este întârziat. De ce nu mă pot deservi singur?
2. Agenții umani pot fi mai eficienți atunci când sunt în chat sau la telefon.
    * Agentul de servicii pentru clienți a petrecut aproximativ 30 de minute pentru a mă reprograma, cu aproximativ 15 minute în care m-a ținut în așteptare în timp ce lucra la ceva.
    * Restul de 15 minute în care vorbea cu mine: jumătate din timp colecta informații.
    * Cred că, prin optimizare, cele 30 de minute pot fi scurtate la 5-10 minute dacă colectarea informațiilor și automatizarea sunt făcute corect.

Dacă aș construi un sistem de centru de contact pentru United, următoarele sunt ceea ce aș face:
1. Oferiți chat și apeluri telefonice ca principale canale de servicii pentru clienți. Nu redirecționați un întreg avion de pasageri către serviciile de clienți la sol (am văzut cu toții cât de aglomerate sunt locurile de închirieri auto după ce un avion mare a aterizat într-o destinație turistică).
2. Fuzionați clienții multi-canal într-un singur canal. Acest lucru înseamnă identificarea clienților cât mai curând posibil. Acest lucru va reduce considerabil dimensiunea cozii și va economisi lățimea de bandă a agentului.
3. Produceți un suport mai inteligent bazat pe chat. Generația actuală de chatbot devine învechită, depășită și foarte nepopulară după lansarea ChatGPT. Lăsați ChatGPT să gestioneze conversația – din experiența noastră, o face mai bine decât oamenii!
4. Puneți accent pe eficiența agenților umani: a-ți face treaba nu este suficient dacă fiecare apel durează 45 de minute; să-i ajutăm să rezolve problemele rapid, oferind:
    * sugestii de „următoarea cea mai bună acțiune”
    * „rezolvări anterioare de succes” bazate pe jurnalele de chat sau apeluri ale altor agenți
    * copilot în timp real care ajută la execuție către sistemele back-office prin apeluri API sau automatizări RPA
5. Construiți un model de predicție a riscului de creștere a cererilor de servicii pentru clienți și lucrați proactiv la acesta.


Nu am avut niciodată un agent de servicii pentru clienți care să mă contacteze proactiv pentru a rezolva problema. Am fost întotdeauna eu, pasagerul, așteptând frustrat și sunând la coadă și la telefon.

Noi, la [Seasalt.ai](https://seasalt.ai/?utm_source=blog), suntem bucuroși să construim o tehnologie asemănătoare cu „raportul minoritar” pentru a identifica problema înainte ca aceasta să apară, a o reduce proactiv prin contactarea pasagerilor afectați și a aborda provocarea scalării dinamice a unui centru de contact cu oameni în timpul traficului intens.

Dacă în următorii câțiva ani, primesc un apel telefonic de la compania aeriană care comunică o problemă potențială înainte de a încerca să caut ajutor, asta va fi o experiență cu adevărat uimitoare pentru clienți și o călătorie încântătoare chiar înainte de a face călătoria. Oricare companie aeriană o poate face prima va câștiga atât de mulți călători loiali.
`;export{e as default};

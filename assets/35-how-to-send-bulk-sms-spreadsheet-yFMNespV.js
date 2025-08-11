const e=`---
title: "Modul corect de a trimite SMS-uri în masă către contacte în Excel, Google Sheets și Apple Numbers"
metatitle: "Trimitere SMS în masă | Excel, Google Sheets, Apple Numbers"
date: 2023-10-01 10:25:00-08:00
modified_date: 2025-08-01 12:00:00+00:00
draft: false
author: Xuchen Yao
description: "Aflați cele mai sigure modalități de a trimite SMS-uri în masă din Excel, Google Sheets și Apple Numbers, respectând în același timp conformitatea 10DLC."
weight: 1
tags:
  - SeaX
  - Tutorial
image: images/blog/35-how-to-send-bulk-sms-spreadsheet/35-how-to-send-bulk-sms-spreadsheet.jpg
canonicalURL: /blog/how-to-send-bulk-sms-spreadsheet/
url: /blog/how-to-send-bulk-sms-spreadsheet/
---

Trimiterea de SMS-uri în masă către o listă de contacte a fost o tehnică larg utilizată pentru afaceri, organizatori de evenimente și diverși profesioniști. Capacitatea de a trimite un mesaj în masă poate economisi timp și poate ajuta la menținerea contactelor informate. Deși Excel, Google Sheets și Apple Numbers nu sunt construite în mod inerent pentru a trimite SMS-uri, extensiile și serviciile terțe au venit în ajutor pentru a face acest lucru posibil. Cu toate acestea, există capcane de care trebuie să fiți conștienți.

# Fiți conform: înregistrarea 10DLC

Lumea SMS-urilor în masă nu este la fel de simplă cum era odată, mai ales odată cu creșterea reglementărilor menite să combată spam-ul și mesajele nesolicitate. Dacă doriți să faceți acest lucru o singură dată și nu sunteți preocupat de consecințele reglementare, mergeți mai departe și utilizați tutorialele pe care le-ați găsit online care vă învață cum să trimiteți mesaje SMS în masă folosind un plugin. Cu toate acestea, dacă intenționați să rulați o afacere și campanii de marketing durabile, ar trebui să vă familiarizați mai întâi cu regulile privind marketingul SMS.

Central pentru aceste reglementări este sistemul 10DLC.

10DLC înseamnă Cod lung de 10 cifre și este noul standard pentru mesageria SMS A2P (aplicație-persoană) în SUA. Iată ce trebuie să știți:

- Scop: Datorită creșterii spam-ului și a mesajelor nesolicitate, operatorii au introdus reglementări stricte privind utilizarea 10DLC pentru mesageria în masă.
- Conformitatea afacerilor: Afacerile care doresc să trimită mesaje SMS în masă trebuie să își înregistreze 10DLC și să obțină aprobarea. Acest lucru asigură că respectă reglementările operatorului.
- Riscuri de neconformitate: Trimiterea de SMS-uri fără înregistrarea corespunzătoare sau utilizarea unui 10DLC aprobat poate duce la interdicții sau alte consecințe.

Iată un [articol](https://support.twilio.com/hc/en-us/articles/1260800720410-What-is-A2P-10DLC-) care vă arată cum să vă înregistrați pentru campania 10DLC. Seasalt.ai a ajutat mulți clienți [SeaX Messaging](https://seax.seasalt.ai/?utm_source=blog) să devină conformi 10DLC. Dacă aveți întrebări, nu ezitați să ne contactați.

# Pregătiți-vă contactele în foi de calcul

Acum că v-ați configurat campania 10DLC, puteți începe să trimiteți mesaje în masă clienților dvs. fără să vă faceți griji că veți fi interzis.

Să începem cu un scenariu simplu: aveți o listă de contacte salvate într-o foaie de calcul și doriți să le trimiteți tuturor un SMS pentru un eveniment viitor. Foaia de calcul poate fi în diverse formate. Cele mai comune formate sunt Excel, Google Sheets și Apple Numbers. Va trebui să curățați mai întâi numerele de telefon din foaia de calcul.

Să folosim Google Sheet ca exemplu. Pașii pentru alte formate de foi de calcul vor fi foarte asemănători. Iată un ghid pas cu pas despre cum să faceți acest lucru.

## 1. Faceți o copie de rezervă a datelor dvs.

Faceți o copie a contactelor dvs. pentru a vă asigura că nu pierdeți nicio dată de contact dacă greșiți. Iată cum: **Faceți clic pe \`Fișier\` > \`Faceți o copie\`**.

<center>
<img src="/images/blog/35-how-to-send-bulk-sms-spreadsheet/1-make-a-copy-for-bulk-sms-contact-spreadsheet.png" alt="Faceți o copie de rezervă pentru foaia de calcul de contacte SMS în masă"/>

_Faceți o copie de rezervă pentru foaia de calcul de contacte SMS în masă_

</center>

## 2. Eliminarea datelor duplicate

a. Evidențiați întregul set de date.

b. Faceți clic pe \`Date\` > \`Curățare date\` > \`Eliminați duplicatele\`.

c. Selectați coloanele pe care doriți să le verificați pentru duplicate, apoi faceți clic pe \`Eliminați duplicatele\`.

d. Google Sheets vă va notifica câte duplicate au fost eliminate.

<center>
<img src="/images/blog/35-how-to-send-bulk-sms-spreadsheet/2-remove-duplicates-for-bulk-sms-contact-spreadsheet.png" alt="Eliminați înregistrările duplicate pentru foaia de calcul de contacte SMS în masă"/>

_Eliminați înregistrările duplicate pentru foaia de calcul de contacte SMS în masă_

</center>

## 3. Standardizați formatul numărului de telefon

a. Decideți un format consistent. Verificați formatul numărului de telefon cerut de serviciul pe care îl utilizați. De exemplu, SeaX Messaging acceptă o varietate de formate de telefon, cum ar fi 5551234567 sau 555-123-4567 sau +15551234567.

b. Utilizați \`Găsiți și înlocuiți\` pentru a face formatarea consistentă. De exemplu, înlocuiți toate punctele cu cratime.

c. Utilizați formule sau scripturi personalizate, dacă este necesar, pentru a vă asigura că toate numerele sunt consistente. Acest lucru ar putea necesita abilități mai avansate de foi de calcul

<center>
<img src="/images/blog/35-how-to-send-bulk-sms-spreadsheet/
3-clean-numbers-for-bulk-sms-contact-spreadsheet.png" alt="Standardizați formatul numărului de telefon pentru foaia de calcul de contacte SMS în masă"/>

_Standardizați formatul numărului de telefon pentru foaia de calcul de contacte SMS în masă_

</center>

### 4. Validați intrările de date

a. Pentru numerele de telefon, asigurați-vă că toate au numărul corect de cifre. Filtrați sau sortați datele pentru a identifica anomaliile.

b. Pentru nume, căutați intrări care ar putea fi goale sau completate cu date irelevante.

<center>
<img height="500" src="/images/blog/35-how-to-send-bulk-sms-spreadsheet/
4-validate-format-for-bulk-sms-contact-spreadsheet.jpeg" alt="Validați intrările de date pentru foaia de calcul de contacte SMS în masă"/>

_Validați intrările de date pentru foaia de calcul de contacte SMS în masă_

</center>

## 5. Verificați celulele goale

Acest pas este opțional. Pe SeaX Messaging, sărim automat un rând dacă celulele sunt goale. Cu toate acestea, nu toți furnizorii sau instrumentele vor accepta celule goale. Vă recomandăm insistent să efectuați acest pas de curățare a datelor, dar este opțional pentru SeaX Messaging.

### Iată cum:

a. Evidențiați intervalul de date.

b. Faceți clic pe \`Format\` > \`Formatare condiționată\`.

c. Setați celulele de formatare la \`Celulă este goală\` și alegeți o culoare de evidențiere.

d. Acest lucru vă va permite să identificați și să abordați cu ușurință celulele goale.

<center>
<img height="500" src="/images/blog/35-how-to-send-bulk-sms-spreadsheet/
5-clean-blank-cells-for-bulk-sms-contact-spreadsheet.png" alt="Verificați celulele goale din foaia de calcul de contacte SMS în masă"/>

_Verificați celulele goale din foaia de calcul de contacte SMS în masă_

</center>

## Mai multe despre pregătirea datelor de contact

Amintiți-vă, curățarea datelor este un proces iterativ. În funcție de dimensiunea și calitatea setului dvs. de date, ar putea fi necesar să revizuiți și să repetați acești pași de mai multe ori. Asigurați-vă întotdeauna că verificați de două ori munca dvs. pentru a asigura acuratețea.

## Începeți să trimiteți SMS-uri!

Deși Excel sau Google Sheets nu acceptă nativ SMS-uri, există mai multe extensii și add-on-uri terțe care pot umple acest gol. Câteva opțiuni populare includ:

- ClickSend: Oferă gateway-uri SMS și se integrează bine cu programele de foi de calcul.
- Zapier: Un instrument de integrare care poate conecta Google Sheets la serviciile SMS.

Cu toate acestea, dacă sunteți serios în privința marketingului SMS sau chiar a marketingului omnicanal folosind diverse platforme de mesagerie precum WhatsApp și Facebook Messenger, vă recomandăm să utilizați o platformă dedicată de mesagerie SMS. Aceste platforme vă permit să organizați contactele, să comunicați direct prin chaturi și apeluri, să urmăriți performanța și să cultivați relații pe termen lung cu clienții. Serviciile SMS de încredere mențin o relație mai bună cu operatorii, asigurând o livrare mai fiabilă a mesajelor. De asemenea, oferă asistență pentru clienți pentru înregistrarea 10DLC și educație pentru a vă asigura că rămâneți conform.

Câțiva furnizori populari de servicii de mesagerie SMS sunt:

- SeaX Messaging
- Simple Texting
- Textedly

# Cum să rulați operațiuni de marketing text de succes

<center>
<img height="500" src="/images/blog/35-how-to-send-bulk-sms-spreadsheet/
6-successful-camapign-bulk-sms-contact-spreadsheet.jpeg" alt="Succes în marketingul text"/>

</center>

Chiar și cu cele mai bune intenții, pot apărea probleme. Iată câteva modalități de a rula operațiuni de marketing text de succes pe termen lung:

- Rămâneți informat: Revizuiți periodic cerințele 10DLC și asigurați conformitatea continuă.
- Asigurați calitatea mesajelor: Evitați conținutul asemănător spam-ului, includeți opțiuni obligatorii de renunțare și respectați toate regulile operatorului și regionale.
- Alegeți servicii SNS de încredere: Serviciile SMS terțe au o cunoaștere mai bună a regulilor de conformitate 10DLC și pot avea, de asemenea, o relație mai bună cu operatorii, asigurând o livrare mai fiabilă a mesajelor.

# Concluzie

Trimiterea de SMS-uri în masă către contacte în instrumente de foi de calcul precum Excel, Google Sheets și Apple Numbers poate fi o metodă de comunicare extrem de eficientă. Dar odată cu introducerea reglementărilor precum 10DLC, este esențial să abordați această sarcină cu prudență și diligență. Prin înțelegerea 10DLC mai întâi, puteți naviga în lumea SMS-urilor în masă cu mai multă încredere și eficiență.

## Luați legătura

Dacă sunteți interesat să aflați mai multe despre 10DLC sau să aflați mai multe despre opțiunile dvs. pentru marketingul SMS, [rezervați o demonstrație](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting) cu noi. Suntem întotdeauna bucuroși să discutăm!
`;export{e as default};

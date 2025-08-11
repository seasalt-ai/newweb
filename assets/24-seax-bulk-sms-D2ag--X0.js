const e=`---
title: "SeaX Bulk SMS: Pentru o comunicare cu clienții mai rapidă și mai eficientă"
date: 2022-09-09 11:05:22-07:00
modified_date: 2025-08-01T12:00:00Z
draft: false
author: Amy Chen, Kim Dodds, Sarah Reid
description: "În acest blog, vom arăta cum funcția Bulk SMS a SeaX permite agenților să trimită proactiv mesaje outbound prin text."
weight: 1
tags:
  - SeaX
image: images/blog/24-seax-bulk-sms/thumbnail.png
canonicalURL: /blog/seax-bulk-sms/
url: /blog/seax-bulk-sms/
---

*În postările noastre anterioare de pe blog, am parcurs câteva dintre caracteristicile cheie ale SeaX (inclusiv [Inteligența vocală](https://seasalt.ai/blog/21-seax-voice-intelligence/), [Baza de cunoștințe](https://seasalt.ai/blog/22-seax-knowledge-base/) și [Gestionarea cazurilor](https://seasalt.ai/blog/23-seax-case-management/)) care ajută agenții să gestioneze mai bine apelurile și mesajele primite. În acest blog, vom arăta cum funcția Bulk SMS a SeaX permite agenților să trimită proactiv mesaje outbound prin text, pe care destinatarii le deschid mai repede și mai constant decât comunicările tradiționale prin e-mail.*

# Cuprins
- [SMS vs. E-mail](#sms-vs-e-mail)
- [Standarde 10DLC](#10dlc-standards)
- [SeaX Bulk SMS](#seax-bulk-sms)
    - [Încărcare contacte](#contact-upload)
    - [Compoziție mesaj](#message-composition)
    - [Estimare cost](#cost-estimate)
    - [Previzualizare mesaj în masă](#bulk-message-preview)
    - [Monitorizare progres campanie](#campaign-progress-monitoring)
    - [Chat mesaje primite](#incoming-message-chat)
- [Încheiere](#closing)

# SMS vs. E-mail

E-mailul tinde să fie modul de comunicare de facto pentru majoritatea operațiunilor de afaceri. Până de curând, mesageria text (SMS) nu era un canal de comunicare utilizat pe scară largă pentru mesageria de afaceri în masă, în ciuda popularității sale pentru comunicarea interpersonală zilnică. Cu toate acestea, în ultimii ani, furnizorii de comunicații cloud, cum ar fi Twilio, au făcut canalul SMS mult mai accesibil pentru afaceri, gestionând detaliile infrastructurii de telecomunicații și ale furnizorilor de servicii în backend și oferind un API SMS simplu ca serviciu clienților. Deși e-mailul poate rămâne cel mai popular canal pentru afaceri, SMS-ul poate oferi o completare unică comunicărilor tradiționale prin e-mail.

<center>
<img src="/images/blog/24-seax-bulk-sms/1-pros-cons.png" alt="Câteva dintre avantajele și dezavantajele SMS-ului pentru comunicațiile de afaceri."/>

*Câteva dintre avantajele și dezavantajele SMS-ului pentru comunicațiile de afaceri.*
</center>

Dar de ce să folosiți SMS-ul dacă e-mailul s-a dovedit a fi de succes? Dacă luăm campaniile de marketing ca exemplu, răspunsul scurt este: în timp ce rata de deschidere pentru o campanie de e-mail este de doar 20%, rata medie de deschidere pentru SMS poate fi de până la *98%* - ca să nu mai vorbim că mesajele text tind să primească mai multe răspunsuri. În plus, mesajele text sunt de obicei deschise în 90 de secunde de la primire, în timp ce e-mailurile tind să fie deschise în jurul a 90 de minute. Nu în ultimul rând, SMS-ul are o rată medie de clic de aproximativ 19%, semnificativ mai mare decât 3,2% pentru e-mailuri ([sursă](https://manychat.com/blog/sms-vs-email-marketing-2021/)).

În general, mesajele text sunt deschise mai repede și mai frecvent decât e-mailurile - probabil pentru că textele sunt întotdeauna livrate direct destinatarului oriunde s-ar afla, indiferent dacă au sau nu wifi. De asemenea, deoarece SMS-ul este utilizat de obicei pentru mesaje personale și mai puțin frecvent pentru comunicațiile de afaceri, destinatarii ar putea considera textele mai importante sau mai substanțiale decât e-mailurile.

Deci, de ce nu folosește toată lumea SMS-ul atunci?? Ei bine, desigur că există avantaje și dezavantaje. Natural, SMS-ul este semnificativ mai scump decât e-mailul, deoarece se bazează pe infrastructura de telecomunicații și pe furnizorii de servicii (cum ar fi Verizon, AT&T etc.) pentru a livra mesajele. În plus, mesajele text au o limită strictă de aproximativ 900 de caractere și o singură atașare (care costă în plus, desigur). Deci, în general, deși SMS-ul poate fi o metodă de comunicare semnificativ mai eficientă, compromisul este că afacerile trebuie să fie mai selective în ceea ce privește conținutul pe care îl trimit pentru a se asigura că sunt rentabile.

Acestea fiind spuse, nu există niciun motiv pentru care SMS-ul și e-mailul să nu fie utilizate împreună! Fiecare canal are propriile avantaje și dezavantaje, astfel încât o afacere se poate asigura că trimite cele mai eficiente comunicări profitând de punctele forte ale fiecărui canal.

# Standarde 10DLC

Pentru mesageria A2P (aplicație-persoană) cu volum mare, operatorii din SUA utilizează coduri lungi standardizate de 10 cifre, sau 10DLC. Înainte de a începe o campanie SMS în masă, vă recomandăm să citiți mai multe despre 10DLC și aplicațiile sale [aici](https://support.twilio.com/hc/en-us/articles/1260800720410-What-is-A2P-10DLC-).

# SeaX Bulk SMS

Serviciul Bulk SMS al SeaX vă permite să încărcați cu ușurință contactele/clienții potențiali, să trimiteți SMS-uri (suportăm și MMS - mesaje multimedia) în masă și să gestionați răspunsurile primite. Citiți mai departe pentru a vedea câțiva pași simpli pentru a începe prima dvs. campanie SMS în masă.

## Încărcare contacte

<center>
<img src="/images/blog/24-seax-bulk-sms/2-contact-upload.png" alt="Încărcarea unei liste de contacte în SeaX Bulk SMS."/>

*Încărcarea unei liste de contacte în SeaX Bulk SMS.*
</center>

Primul pas este încărcarea contactelor și a clienților potențiali. Mai întâi, organizați contactele pentru campania dvs. SMS într-un fișier csv. Pe lângă câmpurile obligatorii, \`phone_number\` și \`name\`, puteți adăuga alte câmpuri și le puteți utiliza în corpul mesajului. De exemplu, puteți modifica dinamic corpul mesajului pentru a include numele destinatarului pe baza câmpului \`name\` pentru fiecare contact.

În continuare, deschideți pur și simplu serviciul Bulk SMS sub SeaX și apăsați „Import” pentru a vă încărca contactele. Salvăm toate contactele dvs. anterioare în lista de destinatari, astfel încât să puteți lansa cu ușurință campanii de urmărire.

## Compoziție mesaj

<center>
<img src="/images/blog/24-seax-bulk-sms/3-message-draft.png" alt="Compunerea unui nou mesaj SMS cu SeaX Bulk SMS."/>

*Compunerea unui nou mesaj SMS.*
</center>

Următorul pas este să dați un nume campaniei dvs. și să compuneți mesajul. Bulk SMS vă permite să accesați toate informațiile de contact stocate în fișierul dvs. csv/excel. De exemplu, dacă aveți un câmp numit \`name\` în lista de contacte, puteți tasta \`{name}\` în mesaj și mesajul va reda automat numele pentru fiecare contact în corpul mesajului.

## Estimare cost

<center>
<img src="/images/blog/24-seax-bulk-sms/4-cost-estimate.png" alt="Selectarea numerelor de telefon de trimitere și obținerea unei estimări a costului campaniei cu SeaX Bulk SMS."/>

*Selectarea numerelor de telefon de trimitere și obținerea unei estimări a costului campaniei.*
</center>

În continuare, alegeți numărul de telefon pe care doriți să îl utilizați pentru a trimite mesajele outbound. Dacă nu aveți încă un număr de telefon, puteți face clic pe „Cotație pentru un număr nou” în colțul din dreapta sus pentru a trimite o cerere de achiziție. Echipa noastră vă poate ajuta să cumpărați noi numere 10DLC.

Puteți previzualiza, de asemenea, prețul unitar estimat pentru campanie. Rețineți că atât trimiterea, cât și primirea SMS/MMS costă bani, așa că asigurați-vă că bugetați în consecință.

## Previzualizare mesaj în masă 

<center>
<img src="/images/blog/24-seax-bulk-sms/5-preview.png" alt="Previzualizarea unei campanii SMS în masă înainte de a trimite cu SeaX."/>

*Previzualizarea unei campanii SMS în masă înainte de a trimite.*
</center>

Puteți previzualiza mesajele în masă înainte de a le trimite. Este vital să confirmați corpul mesajului, numărul de telefon al destinatarilor și numărul de telefon al expeditorului. Odată ce lansați campania, nu va fi posibil să retrageți mesajele. Pe această pagină, puteți previzualiza primele 3 mesaje din campania dvs., care corespund primelor 3 contacte din lista dvs.

## Monitorizare progres campanie

<center>
<img src="/images/blog/24-seax-bulk-sms/6-monitor.png" alt="Monitorizarea progresului unei campanii SMS în masă cu SeaX."/>

*Monitorizarea progresului unei campanii SMS în masă.*
</center>

În cele din urmă, vă puteți relaxa și monitoriza progresul campaniei pe tabloul de bord Bulk SMS. Pagina se reîmprospătează automat și actualizează starea campaniei. Puteți vizualiza stările de livrare a mesajelor, rata de succes/livrare, costurile estimate, precum și rata de răspuns pe această pagină.

## Chat mesaje primite

<center>
<img src="/images/blog/24-seax-bulk-sms/7-chat.png" alt="Gestionarea răspunsurilor primite dintr-o campanie SMS în masă cu SeaX."/>

*Gestionarea răspunsurilor primite dintr-o campanie SMS în masă.*
</center>

La fel ca toate funcțiile SeaX, ne străduim să împuternicim agenții sau managerii de campanie să gestioneze cererile/problemele primite - Bulk SMS permite SeaX să gestioneze și eforturile de marketing de ieșire. După ce lansați campania, puteți gestiona toate răspunsurile primite în fereastra de chat afișată mai jos.

# Încheiere

Vă mulțumim că v-ați acordat timp pentru a citi despre modul în care sistemul SeaX Bulk SMS împuternicește agenții să trimită comunicări outbound pe lângă gestionarea cererilor de mesaje primite. Rămâneți pe fază pentru următorul segment din seria noastră de bloguri, care va acoperi unele dintre instrumentele de gestionare și analiză încorporate în platforma SeaX. Dacă sunteți interesat să aflați mai multe imediat, completați formularul nostru [Rezervați o demonstrație](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting) pentru a arunca o privire directă asupra platformei SeaX.
`;export{e as default};

---
author: Amy Chen, Kim Dodds, Sarah Reid
canonicalURL: /blog/seax-bulk-sms/
date: 2022-09-09 11:05:22-07:00
description: În acest blog, vom arăta cum funcția de SMS-uri în lot SeaX permite agenților
  să trimită mesaje de ieșire proactiv prin text.
draft: false
image: images/blog/24-seax-bulk-sms/thumbnail.png
metatitle: 'SMS-uri în lot SeaX: extinderea clienților mai rapidă și mai...'
modified_date: 2024-12-19 10:30:00+00:00
tags:
- SeaX
title: 'SMS-uri în lot SeaX: extinderea clienților mai rapidă și mai eficientă'
url: /blog/seax-bulk-sms/
weight: 1
---


*În articolele noastre anterioare de blog, am introdus câteva dintre funcțiile principale SeaX (inclusiv [inteligența vocală](https://seasalt.ai/blog/21-seax-voice-intelligence/), [baza de cunoștințe](https://seasalt.ai/blog/22-seax-knowledge-base/) și [gestionarea cazurilor](https://seasalt.ai/blog/23-seax-case-management/)) care ajută agenții să proceseze mai bine apelurile și mesajele de intrare. În acest blog, vom arăta cum funcția de SMS-uri în lot SeaX permite agenților să trimită mesaje de ieșire proactiv prin text, iar destinatarii acestor mesaje s-au dovedit a deschide mai rapid și mai consecvent decât comunicarea tradițională prin email.*

# Cuprins
- [SMS vs email](#sms-vs-email)
- [Standardele 10DLC](#10dlc-standards)
- [SMS-uri în lot SeaX](#seax-bulk-sms)
    - [Încărcarea contactelor](#contact-upload)
    - [Compunerea mesajului](#message-composition)
    - [Estimarea costului](#cost-estimate)
    - [Previzualizarea mesajelor în lot](#bulk-message-preview)
    - [Monitorizarea progresului campaniei](#campaign-progress-monitoring)
    - [Chat pentru mesajele de intrare](#incoming-message-chat)
- [Încheiere](#closing)

# SMS vs email

Email-ul tinde să fie modul implicit de comunicare pentru majoritatea operațiunilor de afaceri. Până de curând, SMS-urile, deși populare în comunicarea interpersonală de zi cu zi, nu erau utilizate pe scară largă pentru mesajele comerciale în lot. Cu toate acestea, în ultimii ani, furnizorii de comunicare cloud precum Twilio au făcut canalul SMS mai accesibil pentru companii prin gestionarea sarcinilor greoaie ale infrastructurii de telecomunicații și furnizorilor de servicii din backend și oferirea unui API SMS simplu ca serviciu pentru clienți. Deși email-ul poate rămâne cel mai popular canal pentru companii, SMS-urile pot oferi un complement unic comunicării tradiționale prin email.

<center>
<img src="/images/blog/24-seax-bulk-sms/1-pros-cons.png" alt="Câteva avantaje și dezavantaje ale SMS-urilor în comunicarea comercială."/>

*Câteva avantaje și dezavantaje ale SMS-urilor în comunicarea comercială.*
</center>

Dar dacă email-ul s-a dovedit a fi de succes, de ce să folosești SMS-uri? Dacă luăm ca exemplu o campanie de marketing, răspunsul scurt este: în timp ce campaniile de email au doar o rată de deschidere de 20%, SMS-urile pot avea o rată medie de deschidere de până la *98%*—să nu mai menționăm că SMS-urile tind să primească mai multe răspunsuri. În plus, SMS-urile sunt de obicei deschise în 90 de secunde de la primire, în timp ce email-urile sunt de obicei deschise la aproximativ 90 de minute de la primire. În final, dar nu mai puțin important, SMS-urile au o rată medie de click de aproximativ 19%, mult mai mare decât 3,2% pentru email-uri ([sursă](https://manychat.com/blog/sms-vs-email-marketing-2021/)).

În general, SMS-urile sunt deschise mai rapid și mai frecvent decât email-urile—probabil pentru că SMS-urile sunt întotdeauna livrate direct destinatarului, indiferent de unde se află și dacă au Wi-Fi. În plus, deoarece SMS-urile sunt de obicei folosite pentru mesaje personale și mai puțin pentru comunicarea comercială, destinatarii ar putea considera SMS-urile mai importante sau mai substanțiale decât email-urile.

Deci de ce nu folosește toată lumea SMS-uri? Desigur, există avantaje și dezavantaje. În mod natural, SMS-urile sunt mult mai scumpe decât email-urile, deoarece se bazează pe infrastructura de telecomunicații și furnizorii de servicii (cum ar fi Verizon, AT&T etc.) pentru a livra mesajele. În plus, SMS-urile au o limită dură de aproximativ 900 de caractere și un singur atașament (care, desigur, costă suplimentar). Prin urmare, în general, deși SMS-urile pot fi o modalitate mai eficientă de comunicare, în echilibru, companiile trebuie să fie mai selective în ceea ce trimit pentru a-și asigura eficiența costurilor.

Cu toate acestea, nu există niciun motiv pentru care SMS-urile și email-urile să nu poată fi folosite împreună! Fiecare canal are propriile avantaje și dezavantaje, astfel încât companiile pot asigura că trimit comunicarea cea mai eficientă prin exploatarea punctelor forte ale fiecărui canal.

# Standardele 10DLC

Pentru trimiterea SMS-urilor A2P (aplicație către persoană) în volum mare, operatorii de telecomunicații din SUA folosesc coduri lungi standardizate de 10 cifre, sau 10DLC. Înainte de a începe o campanie de SMS-uri în lot, îți recomandăm să citești mai multe despre 10DLC și aplicațiile sale [aici](https://support.twilio.com/hc/en-us/articles/1260800720410-What-is-A2P-10DLC-).

# SMS-uri în lot SeaX

Serviciul de SMS-uri în lot SeaX îți permite să încarci ușor contacte/lead-uri, să trimiți SMS-uri în lot (suportăm și MMS - mesaje multimedia) și să gestionezi răspunsurile primite. Continuă să citești pentru a afla câțiva pași simpli pentru a-ți începe prima campanie de SMS-uri în lot.

## Încărcarea contactelor

<center>
<img src="/images/blog/24-seax-bulk-sms/2-contact-upload.png" alt="Încărcarea listei de contacte în SMS-urile în lot SeaX."/>

*Încărcarea listei de contacte în SMS-urile în lot SeaX.*
</center>

Primul pas este să încarci contactele și lead-urile. Mai întâi, organizează-ți contactele pentru campania de SMS-uri într-un fișier CSV. În plus față de câmpurile obligatorii `phone_number` și `name`, poți adăuga și alte câmpuri și să le folosești în corpul mesajului. De exemplu, poți schimba dinamic corpul mesajului pentru a include numele destinatarului pe baza câmpului `name` al fiecărui contact.

Apoi, doar deschide serviciul de SMS-uri în lot în SeaX și apasă "Import" pentru a-ți încărca contactele. Vom păstra toate contactele tale anterioare în lista de destinatari pentru a-ți permite să lansezi ușor campanii ulterioare.

## Compunerea mesajului

<center>
<img src="/images/blog/24-seax-bulk-sms/3-message-draft.png" alt="Compunerea unui nou SMS folosind SMS-urile în lot SeaX."/>

*Compunerea unui nou SMS.*
</center>

Următorul pas este să-ți denumești campania și să compui mesajul. SMS-urile în lot îți permit să accesezi toate informațiile de contact stocate în fișierul CSV/Excel. De exemplu, dacă lista ta de contacte are un câmp numit `name`, poți introduce `{name}` în mesaj și mesajul va prezenta automat numele fiecărui contact în corpul mesajului.

## Estimarea costului

<center>
<img src="/images/blog/24-seax-bulk-sms/4-cost-estimate.png" alt="Alege numărul de telefon pentru trimitere și obține estimarea costului campaniei folosind SMS-urile în lot SeaX."/>

*Alege numărul de telefon pentru trimitere și obține estimarea costului campaniei.*
</center>

Apoi, alege numărul de telefon pe care vrei să-l folosești pentru a trimite mesajele de ieșire. Dacă nu ai încă un număr de telefon, poți da clic pe "Cotare număr nou" în colțul din dreapta sus pentru a trimite o cerere de cumpărare. Echipa noastră te poate ajuta să cumperi un număr nou 10DLC.

Poți și să previzualizezi prețul unitar estimat al campaniei. Amintește-ți că atât trimiterea cât și primirea SMS-urilor/MMS-urilor sunt plătite, așa că asigură-te că-ți bugetezi corespunzător.

## Previzualizarea mesajelor în lot

<center>
<img src="/images/blog/24-seax-bulk-sms/5-preview.png" alt="Previzualizează campania de SMS-uri în lot folosind SeaX înainte de trimitere."/>

*Previzualizează campania de SMS-uri în lot folosind SeaX înainte de trimitere.*
</center>

Poți previzualiza mesajele în lot înainte de trimitere. Este crucial să confirmi conținutul mesajului, numerele de telefon ale destinatarilor și numărul de telefon al expeditorului. Odată ce lansezi campania, nu vei putea retrage mesajele. Pe această pagină, poți previzualiza primele 3 mesaje din campanie, care corespund primelor 3 contacte din lista ta.

## Monitorizarea progresului campaniei

<center>
<img src="/images/blog/24-seax-bulk-sms/6-monitor.png" alt="Monitorizează progresul campaniei de SMS-uri în lot folosind SeaX."/>

*Monitorizează progresul campaniei de SMS-uri în lot folosind SeaX.*
</center>

În final, poți să te așezi și să monitorizezi progresul campaniei pe dashboard-ul de SMS-uri în lot. Pagina se va actualiza automat și va actualiza statusul campaniei. Poți vedea pe această pagină statusul livrării mesajelor, rata de succes/livrare, costul estimat și rata de răspuns.

## Chat pentru mesajele de intrare

<center>
<img src="/images/blog/24-seax-bulk-sms/7-chat.png" alt="Gestionează răspunsurile la mesajele de intrare pentru campania de SMS-uri în lot folosind SeaX."/>

*Gestionează răspunsurile la mesajele de intrare pentru campania de SMS-uri în lot folosind SeaX.*
</center>

Ca și toate funcțiile SeaX, ne străduim să împuternicim agenții sau managerii de campanii să gestioneze cereri/probleme de intrare—SMS-urile în lot permit și SeaX să gestioneze munca de marketing de ieșire. După lansarea campaniei, poți gestiona toate răspunsurile de intrare în fereastra de chat arătată mai jos.

# Încheiere

Mulțumim că ți-ai dedicat timpul să citești despre cum sistemul de SMS-uri în lot SeaX împuternicește agenții să trimită comunicare de ieșire și să gestioneze cereri de mesaje de intrare. Urmărește următoarea parte a seriei noastre de blog-uri care va acoperi unele dintre instrumentele de gestionare și analiză integrate în platforma SeaX. Dacă ești interesat să afli mai multe imediat, completează [formularul nostru de programare demonstrație](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting) pentru a experimenta personal platforma SeaX. 
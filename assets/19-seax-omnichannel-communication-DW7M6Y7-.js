const e=`---
title: "Aduceți clienții de pe orice canal într-un singur loc cu comunicarea omnicanal SeaX"
metatitle: "Unificați contactul cu clienții cu comunicarea omnicanal SeaX"
date: 2022-07-15 13:56:54-07:00
modified_date: 2025-08-01 12:00:00+00:00
draft: false
author: Kim Dodds
description: "În acest blog ne concentrăm pe una dintre comunicările omnicanal ale SeaX, care permite ca mesajele utilizatorilor de pe orice canal să fie afișate pe platforma SeaX."
weight: 1
tags:
  - SeaX
image: images/blog/19-seax-omnichannel-communication/0-thumbnail.png
canonicalURL: /blog/seax-omnichannel-communication/
url: /blog/seax-omnichannel-communication/
---

*În postarea noastră anterioară de pe blog, [Bun venit la SeaX, un centru de contact cloud colaborativ](https://seasalt.ai/blog/18-seax-collaborative-cloud-contact-center-introduction/), am prezentat soluția noastră de centru de contact pentru comunicații în cloud colaborativă, SeaX. În timp ce prima noastră postare de pe blog a oferit o imagine de ansamblu cuprinzătoare a funcționalității de bază și a caracteristicilor mai avansate ale SeaX, postările noastre ulterioare vor aprofunda unele dintre caracteristicile individuale care fac ca SeaX să iasă în evidență. În această postare, vom arunca o privire mai atentă la suportul omnicanal al SeaX și vom vedea cum apelurile și mesajele ajung de pe diverse canale pentru a fi afișate pe platforma SeaX.*

# Cuprins
- [Ce este comunicarea omnicanal?](#ce-este-comunicarea-omnicanal)
- [Ciclul de viață al mesajului](#ciclul-de-viață-al-mesajului)
    - [Canal](#canal)
    - [Rutarea mesajelor](#rutarea-mesajelor)
    - [TaskRouter](#taskrouter)
    - [Platforma SeaX](#platforma-seax)
- [Canale acceptate](#canale-acceptate)

# Ce este comunicarea omnicanal?

Pentru început, ce înseamnă de fapt „omnicanal”? Pentru a descompune, „omni” este un prefix care înseamnă „toate”, iar „canalele” sunt diversele platforme prin care puteți interacționa cu clienții dvs. Deci, simplu spus, „comunicarea omnicanal” înseamnă capacitatea de a comunica prin orice și toate canalele disponibile. Și mai mult decât atât, comunicarea omnicanal înseamnă că experiența între canale este perfectă. Pe partea agentului, comunicarea de pe toate canalele este prezentată într-o interfață unificată. Pentru client, datele lor de interacțiune sunt păstrate pe toate canalele.

Un centru de apeluri tradițional acceptă de obicei doar apeluri telefonice. Centrele de contact mai avansate care se conectează cu clienții prin mai multe canale (cum ar fi e-mail, webchat și telefon) au un centru de contact multicanal. Cu toate acestea, doar pentru că un centru de contact utilizează mai multe canale nu înseamnă că experiența lor este perfectă. În centrele de contact multicanal, diferitele canale pot fi accesate prin platforme individuale și/sau datele clienților pot să nu fie legate între canale. În schimb, centrul de contact omnicanal permite agenților să urmărească o conversație cu clientul oriunde merge, fără a fi blocați într-un singur canal sau răspândiți pe zeci de platforme.

<center>
<img src="/images/blog/19-seax-omnichannel-communication/1-contact-center-comparison.png" alt="Comparație de caracteristici: centru de apeluri tradițional vs centru de contact; multicanal vs omnicanal."/>

*Comparație de caracteristici: centru de apeluri tradițional vs centru de contact; multicanal vs omnicanal.*
</center>

SeaX are capacitatea de a se integra cu practic orice canal, inclusiv în mod implicit: text, telefon, webchat, Facebook și multe altele. Toate mesajele și apelurile sunt afișate pe o platformă unificată, iar datele utilizatorilor de pe toate canalele sunt disponibile imediat.

Dacă doriți să treceți direct la o demonstrație, aruncați o privire la videoclipul nostru scurt care demonstrează comunicarea omnicanal a SeaX. În restul acestui blog, vom parcurge modul în care mesajele și apelurile sunt direcționate de pe diverse canale către agenții din SeaX. Vom împărtăși, de asemenea, canalele care sunt acceptate din start și vom discuta despre cum poate fi extins SeaX pentru a acoperi noi canale.

<iframe width="85%" height="450px" src="https://www.youtube.com/embed/usb-RK7sHlA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

# Ciclul de viață al mesajului

SeaX este construit pe [Twilio Flex](https://www.twilio.com/flex), un centru de contact bazat pe cloud care utilizează platforma de comunicații cloud a Twilio. Twilio oferă blocurile de construcție de bază pentru SeaX, cum ar fi infrastructura de telecomunicații, rutarea mesajelor și a sarcinilor și o interfață de utilizator de bază pentru centrul de contact. Acum să urmărim ciclul de viață al unui mesaj de intrare al utilizatorului și să vedem cum SeaX utilizează arhitectura de bază Twilio combinată cu componente personalizate pentru a direcționa mesajul către agentul live de pe platforma SeaX.

## Canal

<center>
<img src="/images/blog/19-seax-omnichannel-communication/2-example-message.jpg" alt="Utilizatorul trimite un mesaj unei afaceri prin Google Business Messages.", style="width:50%"/>

*Trimiterea unui mesaj unei afaceri prin Google Business Messages.*
</center>

Călătoria unui mesaj începe cu utilizatorul care scrie mesajul și îl trimite pe o platformă acceptată. Exemplul de mai sus arată pe cineva care trimite un mesaj chatbotului Seasalt.ai pe Google Business Messages. Google Business Messages nu este acceptat de Twilio în mod implicit, așa că utilizăm un conector de canal personalizat dezvoltat de Seasalt.ai pentru a conecta platforma Google la Twilio și SeaX.

Odată ce mesajul este trimis, acesta este livrat de conectorul personalizat la API-ul de mesagerie Twilio. În acest moment, Twilio creează un nou context de conversație pentru utilizator și se pregătește să direcționeze mesajul.

## Rutarea mesajelor

<center>
<img src="/images/blog/19-seax-omnichannel-communication/3-studio-flow.png" alt="Un flux de studio simplu care direcționează mesajele către un chatbot sau un agent live."/>

*Un flux de studio simplu care direcționează mesajele către un chatbot sau un agent live.*
</center>

Odată ce mesajul a fost primit de Twilio, trebuie să fie direcționat către locul corect. În acest scop, folosim [Twilio Studio Flows](https://www.twilio.com/studio) pentru a determina dacă să oferim un răspuns automat, să redirecționăm mesajul către un chatbot, să conectăm utilizatorul cu un agent live sau să efectuăm o altă acțiune.

În exemplul simplu furnizat mai sus, toate mesajele de intrare vor fi redirecționate către un chatbot, cu excepția cazului în care conțin cuvintele „agent live”, caz în care utilizatorul va fi transferat la un agent live de pe platforma SeaX.

## TaskRouter

<center>
<img src="/images/blog/19-seax-omnichannel-communication/4-taskrouter.png" alt="Diagrama arhitecturii TaskRouter."/>

*Diagrama arhitecturii TaskRouter. [Sursă](https://twilio-cms-prod.s3.amazonaws.com/images/taskrouter-diagram.width-800.png).*
</center>

Odată ce un mesaj este transferat la SeaX, următorul pas este să decidem ce agent îl va primi. [TaskRouter de la Twilio](https://www.twilio.com/taskrouter) distribuie sarcini precum mesaje și apeluri telefonice agenților din SeaX care le pot gestiona cel mai bine. Fiecărui agent din SeaX i se pot atribui abilități precum limbile pe care le vorbește, departamentul în care lucrează, dacă ar trebui să se ocupe de clienții VIP etc. TaskRouter va verifica informațiile cunoscute despre utilizator și mesaj și apoi va selecta cel mai potrivit lucrător pentru a gestiona problema. Fluxul de studio din pasul anterior poate fi personalizat pentru a obține informații suplimentare (cum ar fi limba preferată), iar informațiile despre client pot fi păstrate în toate conversațiile și canalele pentru a se asigura că experiența lor este perfectă.

## Platforma SeaX

<center>
<img src="/images/blog/19-seax-omnichannel-communication/5-seax-incoming-messages.png" alt="Apeluri și mesaje de intrare afișate pe platforma SeaX.", style="width:50%"/>

*Apeluri și mesaje de intrare afișate pe platforma SeaX.*
</center>

În cele din urmă, mesajul de intrare va fi afișat agentului corespunzător de pe platforma SeaX. Agenții pot gestiona mai multe sarcini de pe mai multe canale simultan. În imaginea de mai sus, un agent are un apel de intrare, un mesaj Facebook și un mesaj webchat. Agentul poate accepta sarcina sau o poate refuza pentru a o transmite următorului agent disponibil.

# Canale acceptate

Sperăm că acum este mai clar ce este comunicarea omnicanal și cum îmbunătățește experiența utilizatorului și a agentului. Întrebarea finală este: ce canale sunt de fapt acceptate din start?

<center>
<img src="/images/blog/19-seax-omnichannel-communication/6-channel-comparison.png" alt="Comparație de canale acceptate între centrul de apeluri tradițional, Twilio Flex de bază și SeaX."/>

*Comparație de canale acceptate între centrul de apeluri tradițional, Twilio Flex de bază și SeaX.*
</center>

După cum am menționat anterior, un centru de apeluri tradițional acceptă de obicei doar apeluri telefonice. Companiile pot interacționa în continuare cu clienții pe rețelele sociale sau prin e-mail, dar aceste mesaje nu sunt integrate într-o platformă unificată.

Twilio Flex, pe de altă parte, pune bazele unui centru de contact omnicanal fantastic. Cu toate acestea, are puține canale disponibile din start. Pe lângă apelurile telefonice și text, au și suport beta pentru Facebook, WhatsApp și e-mail.

SeaX se bazează pe Flex pentru a adăuga suport încorporat pentru unele dintre cele mai solicitate canale: cum ar fi Google Business Messages, Discord, Line și Instagram. În plus, Seasalt.ai lucrează mereu cu clienții pentru a aduce noi canale în gama SeaX. SeaX este foarte personalizabil și ușor de extins - ceea ce înseamnă că putem lucra cu compania dvs. pentru a integra orice canale doriți cel mai mult.

Vă mulțumim că ați acordat timp pentru a citi despre cum centrul de contact cloud SeaX utilizează comunicarea omnicanal pentru a oferi o experiență perfectă pentru clienți și agenți. Vă rugăm să rămâneți pe fază pentru următoarea noastră postare pe blog, care va explora ce înseamnă să fii un „centru de contact distribuit”. Dacă sunteți interesat să aflați mai multe imediat, completați formularul nostru [Rezervați o demonstrație](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting) pentru a arunca o privire directă asupra platformei SeaX.
`;export{e as default};

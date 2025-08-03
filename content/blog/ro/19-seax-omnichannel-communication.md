---
title: "Aduceți clienții de pe orice canal într-un singur loc cu comunicarea omnicanal SeaX"
metatitle: "Unificați punctele de contact cu clienții cu comunicarea omnicanal SeaX"
date: 2022-07-15T13:56:54-07:00
modified_date: "2025-08-02T17:00:00-07:00"
author: Kim Dodds
draft: false
image: images/blog/19-seax-omnichannel-communication/0-thumbnail.png
description: "În acest blog, evidențiem una dintre comunicările omnicanal ale SeaX, care permite afișarea mesajelor utilizatorilor de pe orice canal pe platforma SeaX."
weight: 1
tags: ["SeaX"]
canonicalURL: "/blog/seax-omnichannel-communication/"
url: "/blog/seax-omnichannel-communication/"
---

*În postarea noastră anterioară pe blog, [Bun venit la SeaX, un centru de contact cloud colaborativ](https://seasalt.ai/blog/18-seax-collaborative-cloud-contact-center-introduction/), am prezentat SeaX, soluția noastră de centru de contact pentru comunicații cloud colaborative. În timp ce prima noastră postare pe blog a oferit o imagine de ansamblu cuprinzătoare a caracteristicilor de bază și mai avansate ale SeaX, postările noastre ulterioare vor aprofunda unele dintre caracteristicile individuale care fac ca SeaX să iasă în evidență. În această postare, vom arunca o privire mai atentă la suportul omnicanal al SeaX și vom vedea cum apar apelurile și mesajele de pe diferite canale pe platforma SeaX.*

# Cuprins
- [Ce este comunicarea omnicanal?](#what-is-omnichannel-communication)
- [Ciclul de viață al mesajelor](#message-lifecycle)
    - [Canal](#channel)
    - [Rutarea mesajelor](#message-routing)
    - [TaskRouter](#taskrouter)
    - [Platforma SeaX](#seax-platform)
- [Canale acceptate](#supported-channels)

# Ce este comunicarea omnicanal?

În primul rând, ce înseamnă exact „omnicanal”? Descompus, „omni” este un prefix care înseamnă „toate”, iar „canal” sunt diferitele platforme pe care puteți interacționa cu clienții dvs. Deci, în termeni simpli, „comunicarea omnicanal” înseamnă a putea comunica prin orice și toate canalele disponibile. Nu numai atât, dar comunicarea omnicanal înseamnă, de asemenea, că experiența între canale este perfectă. Pe partea agentului, comunicările de pe toate canalele sunt prezentate într-o interfață unificată. Pentru client, datele lor de interacțiune sunt persistente pe canale.

Centrele de apeluri tradiționale acceptă adesea doar apeluri telefonice. Centrele de contact mai avansate care interacționează cu clienții pe mai multe canale, cum ar fi e-mailul, chatul web și telefonul, au un centru de contact multicanal. Cu toate acestea, doar pentru că un centru de contact utilizează mai multe canale nu înseamnă că experiența lor este perfectă. Într-un centru de contact multicanal, diferite canale pot fi accesate prin platforme separate și/sau datele clienților pot să nu fie legate între canale. În schimb, un centru de contact omnicanal permite agenților să urmărească conversațiile clienților oriunde merg, fără a fi blocați într-un singur canal sau împrăștiați pe o duzină de platforme.

<center>
<img src="/images/blog/19-seax-omnichannel-communication/1-contact-center-comparison.png" alt="Comparație de caracteristici: centru de apeluri tradițional vs. centru de contact; multicanal vs. omnicanal."/>

*Comparație de caracteristici: centru de apeluri tradițional vs. centru de contact; multicanal vs. omnicanal.*
</center>

SeaX este capabil să se integreze cu aproape orice canal, inclusiv în mod implicit: text, telefon, chat web, Facebook și multe altele. Toate mesajele și apelurile sunt afișate pe o platformă unificată, iar datele utilizatorilor de pe toate canalele sunt disponibile imediat.

 Dacă doriți să treceți direct la demonstrație, vizionați scurtul nostru videoclip în care demonstrăm comunicarea omnicanal a SeaX. În restul acestui blog, vom parcurge pas cu pas modul în care mesajele și apelurile de pe diverse canale sunt direcționate către un agent în SeaX. Vom partaja, de asemenea, canalele acceptate din cutie și vom discuta despre cum poate fi extins SeaX pentru a acoperi noi canale.

<iframe width="85%" height="450px" src="https://www.youtube.com/embed/usb-RK7sHlA" title="Player video YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

# Ciclul de viață al mesajelor

SeaX este construit pe [Twilio Flex](https://www.twilio.com/flex), un centru de contact bazat pe cloud care utilizează platforma de comunicații cloud a Twilio. Twilio oferă elementele de bază fundamentale pentru SeaX, cum ar fi infrastructura de telecomunicații, rutarea mesajelor și a sarcinilor și o interfață de utilizare de bază a centrului de contact. Acum să urmărim ciclul de viață al unui mesaj de utilizator primit și să vedem cum SeaX utilizează arhitectura de bază Twilio în combinație cu componente personalizate pentru a direcționa mesajul către un agent live pe platforma SeaX.

## Canal

<center>
<img src="/images/blog/19-seax-omnichannel-communication/2-example-message.jpg" alt="Un utilizator trimite un mesaj unei companii pe Google Business Messages." style="width:50%"/>

*Trimiterea unui mesaj unei companii pe Google Business Messages.*
</center>

Călătoria unui mesaj începe cu un utilizator care compune și trimite un mesaj pe o platformă acceptată. Exemplul de mai sus arată pe cineva care trimite un mesaj unui chatbot Seasalt.ai pe Google Business Messages. În mod implicit, Twilio nu acceptă Google Business Messages, așa că utilizăm un conector de canal personalizat dezvoltat de Seasalt.ai pentru a conecta platforma Google la Twilio și SeaX.

Odată ce mesajul este trimis, acesta este transmis de conectorul personalizat către API-ul de mesagerie Twilio. În acest moment, Twilio creează un nou context de conversație pentru utilizator și se pregătește să direcționeze mesajul.

## Rutarea mesajelor

<center>
<img src="/images/blog/19-seax-omnichannel-communication/3-studio-flow.png" alt="Un flux simplu de Studio care direcționează mesajele către un chatbot sau un agent live."/>

*Un flux simplu de Studio care direcționează mesajele către un chatbot sau un agent live.*
</center>

Odată ce mesajul este primit de Twilio, acesta trebuie direcționat către locația corectă. Pentru a face acest lucru, folosim [Twilio Studio Flows](https://www.twilio.com/studio) pentru a determina dacă să dăm un răspuns automat, să redirecționăm mesajul către un chatbot, să conectăm utilizatorul cu un agent live sau să efectuăm o altă acțiune.

În exemplul simplu furnizat mai sus, toate mesajele primite vor fi redirecționate către un chatbot, cu excepția cazului în care conțin expresia „agent live”, caz în care utilizatorul va fi transferat unui agent live pe platforma SeaX.

## TaskRouter

<center>
<img src="/images/blog/19-seax-omnichannel-communication/4-taskrouter.png" alt="Diagrama arhitecturii TaskRouter."/>

*Diagrama arhitecturii TaskRouter. [Sursă](https://twilio-cms-prod.s3.amazonaws.com/images/taskrouter-diagram.width-800.png).*
</center>

După ce mesajul este transferat la SeaX, următorul pas este să decidem ce agent îl va primi. [TaskRouter de la Twilio](https://www.twilio.com/taskrouter) atribuie sarcini precum mesaje și apeluri telefonice agentului din SeaX care este cel mai bine echipat pentru a le gestiona. Fiecărui agent din SeaX i se pot atribui abilități, cum ar fi ce limbi vorbesc, în ce departament lucrează, dacă ar trebui să se ocupe de clienții VIP etc. TaskRouter va verifica informațiile cunoscute despre utilizator și mesaj și apoi va selecta cel mai potrivit angajat pentru a gestiona problema. Fluxul Studio din pasul anterior poate fi personalizat pentru a obține informații suplimentare (cum ar fi limba preferată), iar informațiile despre client pot fi păstrate în conversații și canale pentru a se asigura că experiența lor este perfectă.

## Platforma SeaX

<center>
<img src="/images/blog/19-seax-omnichannel-communication/5-seax-incoming-messages.png" alt="Apelurile și mesajele primite apar pe platforma SeaX." style="width:50%"/>

*Apelurile și mesajele primite apar pe platforma SeaX.*
</center>

În cele din urmă, mesajul primit va fi prezentat agentului corespunzător pe platforma SeaX. Agenții pot gestiona mai multe sarcini de pe mai multe canale simultan. În imaginea de mai sus, un agent are un apel primit, un mesaj pe Facebook și un mesaj de chat web. Agentul poate accepta sarcina sau o poate refuza pentru a o transmite următorului agent disponibil.

# Canale acceptate

Sperăm că acum este mai clar ce este comunicarea omnicanal și cum îmbunătățește atât experiența utilizatorului, cât și a agentului. Ultima întrebare este: ce canale sunt acceptate din cutie?

<center>
<img src="/images/blog/19-seax-omnichannel-communication/6-channel-comparison.png" alt="Comparație a canalelor acceptate între un centru de apeluri tradițional, Twilio Flex de bază și SeaX."/>

*Comparație a canalelor acceptate între un centru de apeluri tradițional, Twilio Flex de bază și SeaX.*
</center>

După cum sa menționat anterior, centrele de apeluri tradiționale acceptă adesea doar apeluri telefonice. Companiile pot interacționa în continuare cu clienții prin intermediul rețelelor sociale sau prin e-mail, dar aceste mesaje nu sunt integrate într-o platformă unificată.

Twilio Flex, pe de altă parte, pune bazele unui centru de contact omnicanal excelent. Cu toate acestea, are foarte puține canale din cutie. Pe lângă apelurile telefonice și SMS-uri, au suport beta pentru Facebook, WhatsApp și e-mail.

SeaX este construit pe Flex și adaugă suport încorporat pentru unele dintre cele mai solicitate canale: cum ar fi Google Business Messages, Discord, Line și Instagram. În plus, Seasalt.ai lucrează constant cu clienții pentru a aduce noi canale în linia de produse SeaX. SeaX este extrem de personalizabil și ușor de extins - asta înseamnă că putem lucra cu compania dvs. pentru a integra orice canal doriți cel mai mult.

 Vă mulțumim că v-ați acordat timp pentru a citi cum centrul de contact cloud SeaX valorifică comunicarea omnicanal pentru a oferi o experiență perfectă pentru clienți și agenți. Rămâneți la curent cu următoarea noastră postare pe blog, care va explora ce înseamnă să fii un „centru de contact distribuit”. Dacă sunteți interesat să aflați mai multe acum, completați [formularul nostru de solicitare demo](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting) pentru a experimenta platforma SeaX direct.

const e=`---
title: "Extindeți amprenta centrului dvs. de contact cu un centru de contact distribuit"
metatitle: "Extindeți-vă amprenta cu un centru de contact distribuit"
date: 2022-07-27 21:46:45+00:00
modified_date: 2025-08-01T12:00:00Z
draft: false
author: Sarah Reid
description: "În acest blog, vom analiza centrele de contact „distribuite”: ce sunt, cum vă pot aduce beneficii și cum folosește SeaX acest lucru pentru a-și servi mai bine clienții."
weight: 1
tags:
  - SeaX
image: images/blog/20-seax-distributed-contact-center/0-main.png
canonicalURL: /blog/seax-distributed-contact-center/
url: /blog/seax-distributed-contact-center/
---

*În postarea noastră anterioară de pe blog, [Aduceți clienții de pe orice canal într-un singur loc cu comunicarea omnicanal SeaX](https://seasalt.ai/blog/19-seax-omnichannel-communication/), am arătat puterea comunicării omnicanal pe SeaX, care permite ca mesajele utilizatorilor de pe practic orice canal să fie afișate pe platforma SeaX. În această postare, vom arunca o privire la centrele de contact „distribuite”: ce sunt, cum vă pot aduce beneficii și cum SeaX utilizează o platformă distribuită pentru a-și servi mai bine clienții.*

# Cuprins
- [Ce este un centru de contact „distribuit”?](#ce-este-un-centru-de-contact-distribuit)
- [Ce beneficii are un centru de contact „distribuit”?](#ce-beneficii-are-un-centru-de-contact-distribuit)
- [Ce provocări are un centru de contact „distribuit”?](#ce-provocări-are-un-centru-de-contact-distribuit)
- [Cum rezolvă SeaX aceste probleme?](#cum-rezolvă-seax-aceste-probleme)
    - [Rutarea apelurilor către locații și agenți distribuiți](#rutarea-apelurilor-către-locații-și-agenți-distribuiți)
    - [Configurarea disponibilității locației distribuite](#configurarea-disponibilității-locației-distribuite)
    - [Personalizarea mesageriei locației distribuite](#personalizarea-mesageriei-locației-distribuite)

# Ce este un centru de contact „distribuit”?
La cel mai simplu nivel, un centru de contact distribuit este un centru de contact care există în mai multe locații, spre deosebire de centrul de contact tradițional cu o singură locație. Acesta ar putea fi un centru de contact cu mai multe birouri, sau mai multe locații în diferite țări, sau chiar un centru de contact fără locație fizică, unde toți agenții lucrează de la distanță. Cu toate acestea, centrele de contact distribuite trebuie să funcționeze în continuare ca centrele de contact tradiționale cu o singură locație, oferind o experiență perfectă pentru toți cei implicați. Pentru agenți, acest lucru înseamnă a fi sprijiniți pe o singură platformă, indiferent de locația lor. Pentru client, acest lucru înseamnă a fi conectat corect la locația și agentul corespunzător, în funcție de nevoile lor.

# Ce beneficii are un centru de contact „distribuit”?
Centrele de contact distribuite au o serie de beneficii față de centrele de contact tradiționale, în special în ceea ce privește acoperirea și acoperirea lor. A avea agenți în mai multe fusuri orare asigură că clienții vă pot contacta ori de câte ori au nevoie de ajutor. Cu centrele de contact tradiționale, clienții sunt limitați la a suna într-un singur set de ore de deschidere, ceea ce le face mai dificil să intre în contact cu afacerea dvs. A avea agenți distribuiți oferă, de asemenea, afacerii dvs. mai multe oportunități de a angaja persoane cu abilități și specialități diverse, cum ar fi agenți care acoperă o gamă mai largă de limbi. Centrele de contact tradiționale dintr-o singură locație sunt limitate la angajarea de agenți în acea locație, riscând să nu poată găsi un agent cu abilitățile de care aveți nevoie. În cele din urmă, a avea agenți răspândiți mai aproape de mai mulți dintre clienții dvs. permite agenților să aibă o înțelegere mai profundă a oricăror reguli și reglementări specializate din acea zonă. Într-un centru de contact tradițional cu o singură locație, agenții s-ar putea să nu cunoască detalii specifice despre ceva precum transportul într-o țară de cealaltă parte a lumii, ceea ce face mai dificilă asistarea clienților.


# Ce provocări are un centru de contact „distribuit”?
Deși natura distribuită a acestor centre de contact are o mulțime de beneficii pentru afacerea dvs., există și unele provocări pentru centrele de contact distribuite. A avea agenți în mai multe fusuri orare permite o comunicare ușoară cu clienții în orice moment, dar înseamnă, de asemenea, că este esențial ca apelurile să fie direcționate corect, astfel încât un client să nu fie direcționat către o locație care este în prezent închisă sau un agent care este în afara programului. De asemenea, este important să trimiteți clienții la agenții care vorbesc limba solicitată de client și au pregătirea corectă pentru a gestiona problema lor. Cu grupul larg de agenți din diferite locații cu abilități diferite, această sarcină de rutare poate deveni rapid complicată.

<center>
<img src="/images/blog/20-seax-distributed-contact-center/1-feature-comparison.png" alt="Comparație de caracteristici: centru de apeluri tradițional vs centru de contact distribuit vs SeaX."/>

*Comparație de caracteristici: centru de apeluri tradițional vs centru de contact distribuit vs SeaX.*
</center>

# Cum rezolvă SeaX aceste probleme?

## Rutarea apelurilor către locații și agenți distribuiți
SeaX este o soluție de centru de contact colaborativă, nativă în cloud și distribuită. Este construită pe [Twilio Flex](https://www.twilio.com/flex) care utilizează platforma de comunicații cloud a Twilio. Twilio oferă blocurile de construcție de bază pentru SeaX, cum ar fi infrastructura de telecomunicații, rutarea mesajelor și a sarcinilor și o interfață de utilizator de bază pentru centrul de contact. În cadrul SeaX, puteți configura mai multe numere de telefon pentru diferitele dvs. locații, permițându-vă să aveți coduri de țară și de zonă corespunzătoare pentru fiecare zonă în care operează centrul dvs. de contact. Prin urmare, puteți configura setările în funcție de locație, asigurându-vă că fiecare locație funcționează corect și primește apelurile corecte, în timp ce vă deserviți toți agenții pe aceeași platformă.

[Twilio TaskRouter](https://www.twilio.com/taskrouter) atribuie apeluri și mesaje agenților pe baza atributelor apelului și ale agentului.

<center>
<img src="/images/blog/20-seax-distributed-contact-center/2-taskrouter.png" alt="Diagrama arhitecturii TaskRouter."/>

*Diagrama arhitecturii TaskRouter. [Sursă](https://twilio-cms-prod.s3.amazonaws.com/images/taskrouter-diagram.width-800.png).*
</center>

De asemenea, vă permite să utilizați rutarea bazată pe abilități, oferindu-vă un control fin asupra căror agenți și locații primesc ce apeluri. Nu numai că puteți eticheta ce abilități au agenții dvs., cum ar fi nivelul pregătirii lor în vânzări, dar puteți, de asemenea, să enumerați lucruri precum limbile pe care le vorbesc, asigurându-vă că primesc doar apeluri pe care le pot gestiona. În plus, puteți utiliza această rutare pentru a atribui numere de telefon specifice agenților, legând fiecare agent de o anumită locație a centrului dvs. de contact, chiar dacă nu se află fizic acolo. Agenții vor primi doar apeluri direcționate către locația lor alocată, asigurându-vă că apelurile clienților dvs. sunt întotdeauna direcționate către persoana corectă.

<center>
<img src="/images/blog/20-seax-distributed-contact-center/3-skills.png" alt="Abilități definite în TaskRouter pentru rutarea apelurilor și mesajelor primite."/>

*Abilități definite în TaskRouter pentru rutarea apelurilor și mesajelor primite.*
</center>

## Configurarea disponibilității locației distribuite
În SeaX, puteți, de asemenea, să vă configurați orele de deschidere și sărbătorile după numărul de telefon. Cu acest instrument, puteți controla independent când fiecare dintre locațiile dvs. este deschisă, oferindu-vă flexibilitate deplină în ceea ce privește momentul în care fiecare dintre locațiile dvs. poate fi contactată. În esență, fiecare dintre locațiile dvs. poate funcționa ca un centru de apeluri tradițional, cu ore de deschidere stabilite și închis în zilele de sărbătoare locală, fiind în același timp configurat și conectat de pe o platformă comună pe care să opereze agenții dvs.

<center>
<img src="/images/blog/20-seax-distributed-contact-center/4-open-hours.png" alt="Orele de funcționare pentru două numere de telefon diferite în două fusuri orare diferite pe aceeași instanță SeaX."/>
</center>

<center>
<img src="/images/blog/20-seax-distributed-contact-center/5-open-hours.png" alt="Orele de funcționare pentru două numere de telefon diferite în două fusuri orare diferite pe aceeași instanță SeaX."/>

*Orele de funcționare pentru două numere de telefon diferite în două fusuri orare diferite pe aceeași instanță SeaX.*
</center>

## Personalizarea mesageriei locației distribuite
SeaX permite, de asemenea, mesaje de indisponibilitate a clientului după numărul de telefon. Mesajele de indisponibilitate sunt redate automat clienților atunci când nu este nimeni disponibil să le preia apelul. Cu posibilitatea de a personaliza acest mesaj după numărul de telefon, puteți avea mesaje în diferite limbi sau care conțin informații diferite, în funcție de ceea ce este cel mai important de transmis clienților care apelează acea locație.

<center>
<img src="/images/blog/20-seax-distributed-contact-center/6-unavailable-message.png" alt="Mesaj de indisponibilitate pentru un anumit număr de telefon pe platforma SeaX."/>

*Mesaj de indisponibilitate pentru un anumit număr de telefon pe platforma SeaX.*
</center>

Un centru de contact tradițional cu o singură locație poate deservi eficient doar zona din jurul său, deși este, prin natura sa, pe o singură platformă. Un centru de contact distribuit extinde considerabil baza de clienți pe care o poate deservi cu agenți în mai multe locații, dar are unele provocări în integrarea tuturor serviciilor de care au nevoie agenții săi, indiferent unde se află. Cu SeaX, puteți ajunge la fiecare parte a bazei dvs. de clienți, în timp ce vă deserviți toți agenții pe o singură platformă ușoară.

Vă mulțumim că ați acordat timp pentru a citi despre cum centrul de contact cloud SeaX sprijină centrul dvs. de contact distribuit pe o singură platformă. Vă rugăm să rămâneți pe fază pentru următoarea noastră postare pe blog, care va aprofunda text-to-speech-ul și speech-to-text-ul nostru intern și cum pot îmbunătăți centrul dvs. de contact. Dacă sunteți interesat să aflați mai multe imediat, completați formularul nostru „[Rezervați o demonstrație](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting)” pentru a arunca o privire directă asupra platformei SeaX.

`;export{e as default};

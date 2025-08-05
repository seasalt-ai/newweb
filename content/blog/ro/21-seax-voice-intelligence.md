---
title: "Folosiți inteligența vocală SeaX pentru a da voce centrului vostru de contact"
metatitle: "Dați voce centrului vostru de contact prin inteligența vocală SeaX"
date: 2022-08-02T17:24:00-07:00
draft: false
author: Kim Dodds, Cody Kim, Xuchen Yao, Guoguo Chen
image: /images/blog/21-seax-voice-intelligence/thumbnail.png
description: "În acest blog, vom arăta cum motoarele interne de text-to-speech și speech-to-text ale Seasalt.ai îmbunătățesc diverse aspecte ale platformei SeaX."
weight: 1
tags: ["SeaX"]
canonicalURL: "/blog/seax-voice-intelligence/"
url: "/blog/seax-voice-intelligence/"
modified_date: 2024-12-19T10:30:00Z
---

*Până acum, în [seria noastră de blog-uri SeaX](https://seasalt.ai/tags/seax/), v-am oferit o privire de ansamblu extinsă asupra produsului de top Seasalt.ai, SeaX. Am discutat și despre două funcții cheie care diferențiază SeaX de centrele de apel tradiționale: în primul rând, SeaX este omnichannel, ceea ce înseamnă că puteți interacționa mai ușor cu clienții pe orice canal; în al doilea rând, platforma este un centru de contact distribuit care vă permite să rutați mesajele și apelurile clienților din întreaga lume fără probleme către agenții voștri distribuiți din diferite regiuni.*

*Acum că am introdus elementele de bază ale platformei SeaX, vom continua cu funcțiile avansate de AI și automatizare care diferențiază SeaX de alte centre de contact omnichannel distribuite. În acest blog, vom arăta cum motoarele interne de text-to-speech și speech-to-text ale Seasalt.ai îmbunătățesc diverse aspecte ale platformei SeaX.*

# Cuprins
- [Introducere în inteligența vocală](#into-to-voice-intelligence)
- [Ce diferențiază Seasalt.ai](#what-sets-seasaltai-apart)
    - [Speech-to-text](#speech-to-text)
    - [Text-to-speech](#text-to-speech)
- [TTS și STT în SeaX](#tts-and-stt-in-seax)
    - [IVR vocal](#voice-ivr)
    - [Mesaj indisponibil](#unavailable-message)
    - [Transcriere live](#live-transcription)
    - [Și multe altele...](#and-more)

# Introducere în inteligența vocală

Inteligența vocală este utilizarea inteligenței artificiale pentru a analiza și a extrage insight-uri din datele bazate pe voce. Deși tehnologiile vocale au avut progrese semnificative în ultimul deceniu, aplicațiile lor în mediile corporative rămân limitate. Companiile acumulează constant terabaiți de date vocale, dar în majoritatea cazurilor, aceste date nu sunt valorificate pe deplin.

Unul dintre motivele pentru aceasta este că datele vocale sunt mai dificil de procesat decât alte forme de date, cum ar fi datele statistice de bază sau chiar datele text pure. Datele vocale sunt unice în multe privințe:
1. Depind de limbă, au dialecte și accente, făcând dificilă captarea a 100% din informații
2. Calitatea lor variază în funcție de canal (telefon vs VoIP, mono vs stereo), rata de eșantionare (8KHz vs 16KHz), precizia de reprezentare (8-bit, 16-bit, 32-bit) și sunetele ambientale (cum ar fi zgomotul de fundal)
3. Sunt mai dificil de interpretat: de la emoțiile vocale la identificarea vorbitorului și înțelesul semantic

Cu toate acestea, dacă sunt procesate corect cu instrumentele potrivite, inteligența vocală poate aduce beneficii enorme companiilor care o folosesc. Printre altele, capacitatea de a gestiona corect datele vocale poate debloca capacitatea de a folosi transcrieri personalizate de speech-to-text care pot face conversațiile căutabile, indexabile și pline de insight-uri, și permit procesarea ulterioară NLP. Pe măsură ce se colectează mai multe date, aceste servicii pot fi și îmbunătățite, de exemplu: creșterea acurateței transcrierii, extinderea acoperirii cazurilor de utilizare și oferirea de modele vocale și lingvistice personalizabile pentru a se adapta la noi limbi și dialecte.

# Ce diferențiază Seasalt.ai

Seasalt.ai oferă clienților corporativi tehnologii și produse AI de comunicare cloud.
Am dezvoltat tehnologii vocale și lingvistice interne pentru mesajele text
și apelurile vocale în centrele de contact corporative. Motorul nostru de limbaj natural suportă o gamă largă de
limbi cu resurse mari și mici: birmaneză, chineză, engleză, filipineză,
germană, indoneziană, khmeră, laoțiană, malaeză, spaniolă, tamilă, thailandeză, vietnameză și multe altele.
Seasalt.ai este finanțat și operat de un grup de experți de top mondial în recunoașterea vocală profundă,
sinteza vocală neurală și conversația în limbaj natural.

Urmăriți videoclipul nostru de demonstrație speech-to-text:
<iframe width="85%" height="450px" src="https://www.youtube.com/embed/Log8usX8ViE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

## Speech-to-text

<center>
<img src="/images/blog/21-seax-voice-intelligence/STT.png" alt="Pictogramă speech-to-text."/>
</center>

Motorul nostru speech-to-text primește audio vocal și generează transcrieri în timp real. Începând cu audio-ul, extragem caracteristici vocale, convertim aceste caracteristici în foneme, apoi mapăm aceste foneme la ortografia limbii țintă. Sistemul nostru actual poate transcrie multiple limbi, inclusiv engleză și chineză, cu mai multe limbi adăugate constant.

Urmăriți videoclipul nostru de personalizare speech-to-text pentru a vedea cum motorul STT Seasalt poate fi personalizat pentru orice domeniu:
<iframe width="85%" height="450px" src="https://www.youtube.com/embed/1YEU6mexzWQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

## Text-to-speech

<center>
<img src="/images/blog/21-seax-voice-intelligence/TTS.png" alt="Pictogramă text-to-speech."/>
</center>

Text-to-speech este procesul de sinteză a textului într-o voce umană realistă cu intonație și ritm natural. Modelul nostru primește text obișnuit, convertește acest text în foneme, apoi convertește fonemele în audio, în timp ce prezice înălțimea corectă, durata și volumul pentru fiecare pas de timp pentru cea mai realistă experiență TTS. Dacă rezultatul final nu este perfect, oferim capacitatea de a ajusta audio-ul sintetizat, inclusiv pronunția cuvintelor, pauzele și accentul.

Urmăriți videoclipul nostru de demonstrație de personalizare text-to-speech pentru a vedea cum poate fi personalizat output-ul motorului TTS Seasalt pentru a oferi voce sintetizată realistă:

<iframe width="85%" height="450px" src="https://www.youtube.com/embed/GJCOhTtImp8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

Puteți vizita și [pagina TTS](https://suite.seasalt.ai/tts) de pe site-ul nostru pentru a asculta exemple ale unor dintre vocile noastre sintetizate, inclusiv Tom Hanks, David Attenborough și Reese Witherspoon.

# TTS și STT în SeaX

## IVR vocal

<center>
<img src="/images/blog/21-seax-voice-intelligence/flow.png" alt="Flux IVR vocal folosind motorul speech-to-text Seasalt.ai pentru transcriere live și rutarea apelurilor."/>

*Flux IVR vocal folosind motorul speech-to-text Seasalt.ai pentru transcriere live și rutarea apelurilor.*
</center>

Inteligența vocală poate începe să ajute înainte ca apelurile să ajungă la platforma SeaX, asigurându-se că apelurile sunt rute la locația corectă și colectând informații importante înainte de a transfera apelul către agent. SeaX folosește Twilio Studio pentru a personaliza fluxurile de rutare a apelurilor și mesajelor. Dar putem și integra motorul nostru speech-to-text în fluxul IVR pentru a permite clienților să-și ruteze apelurile folosind limbaj natural (în loc de experiența tradițională "apăsați 1..."). În plus, dacă compania voastră este interesată să folosească chatbot-uri pentru a interacționa cu clienții, putem merge și mai departe prin folosirea motorului nostru text-to-speech pentru a da voce chatbot-ului vostru, permițându-i să vorbească cu clienții prin telefon.

## Mesaj indisponibil

<center>
<img src="/images/blog/21-seax-voice-intelligence/unavailable-message.png" alt="Configurația mesajului indisponibil SeaX folosind text-to-speech."/>

*Configurația mesajului indisponibil SeaX folosind text-to-speech.*
</center>

Tehnologia noastră text-to-speech permite și mesaje vocale foarte personalizabile. De exemplu, aceste mesaje pot fi declanșate când clienții sună după orele normale de lucru, sau când clienții trebuie să aștepte un agent disponibil.

## Transcriere live

<center>
<img src="/images/blog/21-seax-voice-intelligence/live-transcription.jpg" alt="Transcrierea și analiza live a apelurilor afișate agenților pe SeaX."/>

*Transcrierea și analiza live a apelurilor afișate agenților pe SeaX.*
</center>

Odată ce clientul este în apel cu agentul, motorul nostru speech-to-text oferă agenților transcrieri precise live ale conversației pentru referință. Aceasta permite agenților să se refere la punctele anterioare din conversație și/sau să verifice înțelegerea lor a ceea ce a spus clientul. În plus, aceste transcrieri sunt foarte utile pentru aplicațiile downstream, cum ar fi extragerea temelor, extragerea acțiunilor, rezumarea, analiza întâlnirilor și multe altele.

## Și multe altele...

Cele de mai sus sunt doar câteva modalități prin care SeaX integrează inteligența vocală avansată pentru a reduce timpul de așteptare, îmbunătăți performanța agenților și a oferi o experiență generală fără probleme pentru clienți și agenți. Pentru a afla despre mai multe funcții avansate care vin cu platforma SeaX, urmați următorul nostru articol de blog care include baza de cunoștințe AI, gestionarea cazurilor și SMS-urile în bulk. Pentru o demonstrație personală și pentru a discuta cum platforma SeaX îndeplinește nevoile specifice de afacere, completați [formularul nostru de programare demonstrație](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting). 
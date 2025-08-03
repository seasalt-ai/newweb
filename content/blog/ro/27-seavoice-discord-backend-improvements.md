---
title: "SeaVoice STT/TTS Discord Bot: Îmbunătățiri backend și stabilitate"
date: 2022-12-13T11:58:34-08:00
draft: false
author: Sydney Burgess, Kim Dodds, Drake Farmer, Jack Harvison, Dylan Strong, Cody Vernon
description: "Cu cea mai recentă versiune lansată, SeaVoice Discord Bot introduce îmbunătățiri masive ale backend-ului care îmbunătățesc stabilitatea botului și ajută la dezvoltarea viitoare."
weight: 1
tags: ["SeaVoice", "Discord"]
image: images/blog/27-discord-backend-improvements/seavoice-discord-stt-tts-bot-backend-improvements.jpg
canonicalURL: "/blog/seavoice-discord-backend-improvements/"
url: "/blog/seavoice-discord-backend-improvements/"
modified_date: 2024-12-19T10:30:00Z
---

*SeaVoice Discord Bot devine din ce în ce mai popular ca una dintre cele mai bune opțiuni pentru transcrierea vocală în canalele vocale Discord. Cu cea mai recentă versiune lansată, introducem îmbunătățiri masive ale backend-ului care vor îmbunătăți stabilitatea botului și vor ajuta la dezvoltarea viitoare.*

# SeaVoice își amintește: Baza de date este online!

Salut tuturor, am lucrat recent în culise pentru SeaVoice Discord Bot și am vrut să împărtășim!

După cum ați văzut în articolul nostru anterior de blog, am adăugat multe funcții la SeaVoice Bot, cum ar fi noile noastre înregistrări de apeluri și transcrieri. Pe lângă aceste dezvoltări, am dat și SeaVoice Discord Bot capacitatea de a-și aminti tot ce face: de la comenzi la înregistrarea erorilor. Acum, când botul vorbește cu voi sau îl folosiți pentru a înregistra apeluri, toate aceste informații sunt salvate într-un mod organizat.

## Ce înseamnă asta pentru utilizatori
Vă puteți întreba ce înseamnă asta pentru voi acum?

Ei bine, în primul rând, fără aceste îmbunătățiri backend, noile noastre funcții de transcriere și descărcare audio nu ar fi fost posibile! Acum putem și să salvăm automat orice crash nefericit pe care îl întâlniți, astfel încât echipa noastră de dezvoltare să poată începe să repare aceste probleme înainte să le observați. În plus, dacă cineva decide că nu mai dorește să-și păstreze datele în sistemul nostru, acest nou mod de organizare ne permite să găsim, să recuperăm și/sau să ștergem rapid orice date pe baza serverului, canalului, utilizatorului, datei, etc.

Mai important, aceasta deschide uși pentru funcții noi precum urmărirea statisticilor, auditul automat, etc. Administratori, vreți să vă asigurați că regulile serverului vostru sunt respectate sau să verificați cât de des este folosit botul pe serverul vostru? Poate vreți să găsiți acea conversație amuzantă din săptămâna trecută? Cu framework-ul bazei de date acum stabilit ferm și folosit în botul de producție, diverse funcții noi sunt mai ușor de implementat.

## Confidențialitatea datelor

Desigur, ori de câte ori discutăm despre salvarea datelor utilizatorilor, apar probleme de confidențialitate și securitate a datelor. Iată câteva puncte cheie despre cum gestionăm datele voastre:
- Toate datele utilizatorilor sunt stocate pe servere remote securizate, accesibile doar de un număr selectat de angajați Seasalt.ai
- SeaVoice înregistrează doar datele furnizate de Discord când utilizatorii interacționează cu botul SeaVoice; aceasta include:
    - Server, canal, nume de utilizator și ID
    - Textul introdus în comanda `/speak`
    - Audio-ul spus în canalele vocale când botul execută comanda `/recognize`
- Aceste date vor fi folosite doar de Seasalt.ai pentru îmbunătățirea serviciului
- Puteți solicita ștergerea oricăror date ale voastre în orice moment

Pentru informații complete, vă rugăm să consultați [Politica de confidențialitate Seasalt.ai](https://seasalt.ai/privacy/).

## Direcții viitoare

O mare parte din această actualizare nu va fi observată, dar pentru noi, partea cea mai dificilă a trecut și acum putem începe să dezvoltăm proiecte care vă permit să personalizați și să folosiți SeaVoice Discord Bot mai mult decât v-ați imagina.
O funcție care va fi lansată în curând este configurația personalizabilă pentru servere și/sau utilizatori.
Cu baza de date, aceasta ne va permite să salvăm preferințele în viitor, cum ar fi dacă doriți să primiți alerte când chat-ul vocal este înregistrat, cine va primi link-urile de descărcare pentru transcrierile apelurilor, sau cine dorește să opteze să nu fie înregistrat.

Acum că putem salva date, aveți idei pe care ați vrea să le adăugăm? Vă rugăm să ne faceți sugestii prin [serverul oficial SeaVoice Discord](https://discord.gg/dfAYfwBQ)!

<center>
<iframe src="https://discordapp.com/widget?id=919037515514654721&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
</center>

## Încercați!

Dacă nu ați încercat încă cea mai recentă versiune a SeaVoice Bot, mergeți să o încercați! Invitați [SeaVoice Discord Bot](https://discord.com/oauth2/authorize?client_id=1001955060210749492&scope=bot) pe serverul vostru.
De asemenea, vă rugăm să citiți [documentația SeaVoice Bot](https://wiki.seasalt.ai/seavoice/discord/discord-bot/) pentru a afla cum să folosiți cel mai bine botul pentru a satisface nevoile comunității voastre.

Urmăriți câteva actualizări entuziasmante care vor fi lansate în curând!

Mulțumesc,

Echipa SeaVoice Bot. 
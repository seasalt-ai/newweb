const e=`---
title: "Botul Discord SeaVoice STT/TTS: Îmbunătățiri backend și de stabilitate"
date: 2022-12-13 11:58:34-08:00
modified_date: 2025-08-01T12:00:00Z
draft: false
author: Sydney Burgess, Kim Dodds, Drake Farmer, Jack Harvison, Dylan Strong, Cody Vernon
description: "Cu cea mai recentă versiune, botul Discord SeaVoice lansează îmbunătățiri masive la nivel de backend care îmbunătățesc stabilitatea botului și ajută la dezvoltarea viitoare."
weight: 1
tags:
  - SeaVoice
  - Discord
image: images/blog/27-discord-backend-improvements/seavoice-discord-stt-tts-bot-backend-improvements.jpg
canonicalURL: /blog/seavoice-discord-backend-improvements/
url: /blog/seavoice-discord-backend-improvements/
---

*Botul Discord SeaVoice a câștigat popularitate ca una dintre cele mai bune opțiuni pentru transcrierea vorbirii în canalele vocale Discord. Cu cea mai nouă versiune, lansăm îmbunătățiri masive la nivel de backend care îmbunătățesc stabilitatea botului și ajută la dezvoltarea viitoare.*

# SeaVoice își amintește: Baza de date online!

Salutare tuturor, în ultima vreme am lucrat la niște lucruri în culise pentru botul Discord SeaVoice pe care am dori să le împărtășim!

După cum ați văzut în postarea noastră anterioară de pe blog, am adăugat o mulțime de funcții pentru botul SeaVoice, cum ar fi noile noastre înregistrări de apeluri și transcrieri.
Alături de aceste dezvoltări, am oferit botului Discord SeaVoice capacitatea de a-și aminti ce a făcut: totul, de la comenzi la înregistrarea erorilor.
Acum, când botul vă vorbește sau îl folosiți pentru a înregistra un apel, toate aceste informații sunt salvate într-un mod organizat.

## Ce înseamnă asta pentru utilizatori
Acum, ce înseamnă asta pentru voi, ați putea întreba?


Ei bine, pentru început, noua noastră funcție de transcriere și descărcare audio nu ar fi posibilă fără aceste îmbunătățiri backend! De asemenea, putem stoca acum automat orice erori nefericite pe care le întâmpinați, astfel încât echipa noastră de dezvoltare să poată începe să remedieze aceste probleme înainte chiar să le observați. În plus, dacă cineva decide că nu mai dorește ca datele sale să fie stocate în sistemul nostru, această nouă organizare ne permite să găsim, să recuperăm și/sau să eliminăm rapid orice date după server, canal, utilizator, dată etc.


Mai mult, acest lucru deschide ușa pentru noi funcții, cum ar fi urmărirea statisticilor, auto-moderarea și multe altele.
Moderatori, ați dori să vă asigurați că regulile serverului dvs. sunt respectate sau să verificați cât de des este utilizat botul pe serverul dvs.?
Poate doriți să reluați acea conversație hilară pe care ați avut-o săptămâna trecută?
Cu cadrul bazei de date acum ferm stabilit și utilizat în botul de producție, o mare varietate de noi funcții sunt mai ușor de atins.

## Confidențialitatea datelor

Natural, ori de câte ori discutăm despre salvarea datelor utilizatorilor, se pune problema confidențialității și securității datelor. Iată câteva puncte cheie despre modul în care gestionăm datele dvs.:
- Toate datele utilizatorilor sunt stocate pe un server securizat la distanță, la care doar câțiva angajați Seasalt.ai selectați pot accesa
- SeaVoice înregistrează doar datele Discord furnizate de utilizatori atunci când interacționează cu botul SeaVoice; aceasta include:
    - Numele și ID-ul serverului, canalului, utilizatorului
    - Textul introdus în comanda \`/speak\`
    - Audio vorbit într-un canal vocal în timp ce botul efectuează comanda \`/recognize\`
- Aceste date vor fi utilizate de Seasalt.ai doar pentru a îmbunătăți serviciile
- Puteți solicita ca oricare sau toate datele dvs. să fie eliminate în orice moment

Pentru detalii complete, vă rugăm să consultați [Politica de confidențialitate Seasalt.ai](https://seasalt.ai/privacy/).

## Direcții viitoare

O mare parte din această porțiune a actualizării nu va fi vizibilă, dar pentru noi partea grea s-a terminat, iar acum putem începe să lucrăm la proiecte care vă permit să personalizați și să utilizați botul Discord SeaVoice chiar mai mult decât ați crezut posibil.
O funcție la orizont este configurarea personalizabilă a serverului și/sau a utilizatorului.
Cu baza de date în loc, acest lucru ne va permite să salvăm preferințele în viitor, cum ar fi dacă doriți să vi se reamintească că un chat vocal este înregistrat, cine primește linkul de descărcare a unei transcrieri de apel sau cine dorește să renunțe la înregistrare.


Aveți idei pe care ați dori să le vedeți adăugate acum că putem salva date? Nu ezitați să ne trimiteți câteva sugestii pe [Serverul oficial Discord SeaVoice](https://discord.gg/dfAYfwBQ)!

<center>
<iframe src="https://discordapp.com/widget?id=919037515514654721&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
</center>

## Încercați-l!

Și dacă nu ați încercat încă cea mai recentă versiune a botului SeaVoice, încercați-o! Invitați [Botul Discord SeaVoice](https://discord.com/oauth2/authorize?client_id=1001955060210749492&scope=bot) pe serverul dvs.
Nu ezitați să citiți și [documentația botului SeaVoice](https://wiki.seasalt.ai/seavoice/discord/discord-bot/) pentru a vedea cum puteți utiliza botul pentru a se potrivi cel mai bine nevoilor comunității dvs.


Rămâneți pe fază pentru câteva actualizări interesante care urmează să apară!


Mulțumesc,


Echipa botului SeaVoice.
`;export{e as default};

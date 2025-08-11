const e=`---
title: "Discord (2/3): Cum să creați o comunitate și un bot Discord pentru marca dvs."
metatitle: "Discord (2/3): Creați comunitatea și botul Discord al mărcii dvs."
date: 2022-05-31 13:29:51-07:00
modified_date: 2025-08-01T12:00:00Z
draft: false
author: Kim Dodds
description: "În acest blog, vom parcurge crearea unui server pentru marca dvs. și conectarea unui bot, care poate automatiza moderarea, raportarea erorilor, anunțurile etc."
weight: 1
tags:
  - SeaX
  - Discord
image: /images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-community-and-bot-for-your-brand.jpg
canonicalURL: /blog/create-a-discord-community-and-bot/
url: /blog/create-a-discord-community-and-bot/
---

*Postarea noastră de pe blog, [„Discord: O nouă frontieră pentru implicarea clienților”](https://seasalt.ai/blog/15-discord-a-new-frontier-for-customer-engagement/), a acoperit creșterea popularității Discord și modul în care mărcile pot valorifica această nouă platformă socială pentru a-și forma propriile comunități online și a interacționa cu clienții. În acest blog, vom parcurge cum să creați un nou server oficial pentru marca dvs., inclusiv cum să conectați un bot, care poate automatiza sarcini precum moderarea, raportarea erorilor, anunțurile etc.*

## Cuprins
- [Configurarea serverului](#configurarea-serverului)
    - [Creați un nou server Discord](#creați-un-nou-server-discord)
    - [Convertiți serverul într-un „server comunitar”](#convertiți-serverul-într-un-server-comunitar)
    - [Configurați canale, evenimente și alte caracteristici](#configurați-canale-evenimente-și-alte-caracteristici)
    - [Răspândiți vestea!](#răspândiți-vestea)
- [Configurarea botului Discord](#configurarea-botului-discord)
    - [Creați un nou bot în portalul pentru dezvoltatori Discord](#creați-un-nou-bot-în-portalul-pentru-dezvoltatori-discord)
    - [Creați un bot Discord simplu cu PyCord](#creați-un-bot-discord-simplu-cu-pycord)
    - [Invitați botul Discord](#invitați-botul-discord)
    - [Testați integrarea](#testați-integrarea)

# Configurarea serverului

## Creați un nou server Discord
Din interiorul aplicației Discord, faceți clic pe butonul „Adăugați un server” din partea stângă jos.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/create-new-discord-server.png" alt="Crearea unui nou server Discord."/>

*Solicitare la crearea unui nou server Discord.*
</center>

Puteți selecta dintr-un șablon dacă doriți să începeți cu câteva canale create pentru dvs. sau puteți începe cu o pagină goală. Și primul pas este la fel de simplu, serverul dvs. este creat!

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/new-discord-server.png" alt="Un server Discord nou creat."/>

*Un server Discord nou creat.*
</center>

## Convertiți serverul într-un „server comunitar”

Se recomandă insistent să activați caracteristicile „comunitare” ale serverului Discord. Prin conversia la un server comunitar, activați instrumente suplimentare care pot ajuta la moderarea, rularea și creșterea serverului. În special, serverele comunitare au acces la următoarele caracteristici:

- **Ecran de bun venit**: Prezintă noilor utilizatori serverul dvs.
- **Canal de anunțuri**: Vă permite să difuzați mesaje utilizatorilor dvs.
- **Informații despre server**: vizualizați analize despre comunitatea și utilizatorii dvs.
- **Descoperire**: Promovați-vă comunitatea în Directorul de servere al Discord

Lângă numele serverului din colțul din stânga sus, faceți clic pe meniul derulant și selectați „Setări server”. Faceți clic pe fila „Activați comunitatea” din partea stângă și selectați „Începeți”.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/convert-to-community-discord-server.png" alt="Conversia unui server Discord obișnuit într-un server comunitar."/>

*Activarea setărilor serverului comunitar.*
</center>

Continuați cu configurarea necesară. Activarea comunității necesită ca serverul dvs. să efectueze o verificare suplimentară pentru utilizatori, să activeze un filtru de chat și să configureze un canal de reguli.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-community-setup.png" alt="Configurare pentru un server Discord comunitar."/>

*Configurarea serverului comunitar.*
</center>

Odată ce activați comunitatea, aveți acces la mai multe caracteristici noi. Două dintre cele mai utile caracteristici sunt mesajul de bun venit și verificarea calității de membru:

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-server-welcome-page.png" alt="Exemplu de mesaj de bun venit pe server."/>

*Exemplu de mesaj de bun venit pe server.*

<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-server-membership-screening.png" alt="Setări de verificare a calității de membru."/>

*Setări de verificare a calității de membru.*
</center>

## Configurați canale, evenimente și alte caracteristici
După configurarea serverului comunitar, aveți acces și la noi caracteristici din pagina principală a serverului.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-server-channel-types.png" alt="Crearea unui nou canal într-un server Discord.", style="width:50%"/>

*Crearea unui nou canal.*

<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-server-channels.png" alt="Exemplu de canale ale unui server comunitar Discord." style="width:50%"/>

*Canalele serverului comunitar.*
</center>

Când creați un nou canal, aveți acces la două noi tipuri de canale: anunț și scenă. Canalul de anunțuri poate fi postat doar de moderatori și este util pentru postări și anunțuri oficiale - multe servere vor avea boți care postează automat fluxul lor oficial de Twitter sau postările de pe forum pe acest canal. Canalul „scenă” este un tip special de canal vocal care este util pentru găzduirea de evenimente cu un public live. Gazda are capacitatea de a modera alți vorbitori (spre deosebire de un canal vocal obișnuit, unde este liber pentru toți).

Odată ce serverul dvs. este complet configurat, ar putea arăta cam așa:

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/customized-discord-server.png" alt="Server Discord complet personalizat."/>

*Server comunitar complet personalizat.*
</center>

## Răspândiți vestea!
Odată ce serverul dvs. este complet configurat, puteți începe să invitați oameni!
Discord oferă un widget prefabricat gratuit, care poate fi încorporat în orice site web pentru a vă promova serverul.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-server-widget.png" alt="Setări widget server Discord."/>

*Setări widget server.*

<iframe src="https://discordapp.com/widget?id=966505646944055326&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>

*Un exemplu de widget funcțional pentru serverul Discord Near Me Messaging al Seasalt.ai.*

</center>

Pentru a construi încredere cu potențialii utilizatori, puteți contacta opțional asistența Discord pentru a vă verifica serverul. Verificarea va plasa o pictogramă „verificat” lângă numele serverului dvs., ceea ce indică faptul că serverul este comunitatea afiliată oficial a unei afaceri, mărci și personalități de interes public. Puteți vedea cerințele de verificare pe [site-ul oficial al Discord](https://support.discord.com/hc/en-us/articles/360001107231-Verified-Server-Requirements).

Odată ce serverul dvs. prinde avânt și are un număr bun de utilizatori, Discord oferă mai multe oportunități de a vă promova serverul intern. Când serverul dvs. are cel puțin 8 săptămâni și are peste 500 de utilizatori, puteți aplica pentru parteneriatul Discord, care oferă serverului dvs. avantaje speciale exclusive pentru parteneri. Odată ce atingeți peste 1.000 de utilizatori, vă puteți alătura Server Discovery, care va permite oricui folosește Discord să descopere și să se alăture serverului dvs.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-server-discovery.png" alt="Setări și cerințe Discord Discovery."/>

*Setări și cerințe Discord Discovery.*
</center>

# Configurarea botului Discord
Acum că ați configurat un server, îl puteți îmbunătăți adăugând un bot pentru a automatiza unele procese, cum ar fi moderarea, feedback-ul utilizatorilor și anunțurile. Continuați să citiți secțiunea următoare pentru a afla cum să configurați un bot simplu, apoi rămâneți pe fază pentru următorul blog din seria noastră pentru a vedea cum puteți integra o experiență completă de servicii pentru clienți în serverul dvs. Discord.

## Creați un nou bot în portalul pentru dezvoltatori Discord
Creați un cont pe [Portalul pentru dezvoltatori Discord](https://discord.com/developers/applications). Creați o „Aplicație nouă” și denumiți-o.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/new-discord-application.png" alt="Creați o nouă aplicație pe portalul pentru dezvoltatori Discord."/>

*Tabloul de bord pentru dezvoltatori Discord: Aplicații.*
</center>

Selectați noua dvs. aplicație și faceți clic pe fila „Bot” din partea stângă.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/new-discord-bot.png" alt="Setările botului aplicației."/>

*Setările aplicației Discord.*
</center>

Faceți clic pe „Adăugați un bot” pentru a crea botul dvs. Discord.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-bot-settings.png" alt="Creați un nou bot Discord."/>

*Crearea unui nou bot Discord.*
</center>

Odată creat, generați și copiați tokenul botului. În cele din urmă, asigurați-vă că permisiunile de mesagerie sunt activate.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-bot-messaging-permissions.png" alt="Permisiuni de mesagerie ale botului Discord."/>

*Crearea unui nou bot Discord.*
</center>

## Creați un bot Discord simplu cu PyCord

Folosim biblioteca [PyCord](https://docs.pycord.dev/en/master/) ca un wrapper Python pentru API-ul Discord.

1. Instalați PyCord și creați un nou fișier Python pentru botul dvs. Discord.
2. Importați pachetul Discord și creați o instanță a clientului Discord.
3. Utilizați wrapper-ul \`event\` al clientului pentru a crea o metodă \`on_message\`. Această metodă va primi fiecare mesaj trimis unui canal la care botul are acces.
    a. În cadrul metodei, verificați mai întâi dacă mesajul este de la botul însuși și ignorați-l dacă da.
    b. Altfel, vom începe prin a reacționa doar la mesajele care încep cu \`$bot\` - dacă mesajul începe cu acest lucru, vom răspunde pur și simplu la același canal spunând \`Am primit mesajul tău!\`.
4. În cele din urmă, la sfârșitul scriptului, asigurați-vă că rulați clientul Discord, astfel încât să înceapă să asculte evenimentele din canal.

\`\`\`python
import discord

discord_client = discord.Bot()
discord_token = “xxxxxxxxxxxx”
 
@discord_client.event
async def on_message(message):
    """Ascultă și reacționează la mesaje."""
    # Verifică dacă mesajul este de la botul însuși
    if message.author == discord_client.user:
        return

    msg = message.content
    if msg.startswith("$bot") or isinstance(message.channel, discord.DMChannel):
        await message.channel.send(“Am primit mesajul tău!”)

discord_client.run(discord_token)
\`\`\`

### O notă despre clienții Python Discord

[Discord.py](https://github.com/Pycord-Development/pycord) este cel mai popular proiect pentru wrapper-ul Python pentru API-ul Discord, cu toate acestea, autorul și întreținătorul [au decis să retragă biblioteca](https://gist.github.com/Rapptz/4a2f62751b9600a31a0d3c78100287f1). Puteți găsi multe wrapper-uri Python alternative pentru API-ul Discord, iar multe sunt furci ale originalului Discord.py. Am ales să folosim PyCord deoarece pare bine întreținut, acceptă deja comenzi Slash și are [un server Discord](https://pycord.dev/discord) unde putem pune întrebări.

Când creați botul Discord, încercați să nu instalați alte pachete Python Discord. *Pachetele Python Discord nu funcționează de obicei bine împreună*, deoarece sunt toate în dezvoltare separată. De exemplu, PyCord nu funcționează bine cu [discord-components](https://github.com/kiki7000/discord.py-components), așa că asigurați-vă că nu aveți ambele pachete instalate în același timp.

## Invitați botul Discord
În continuare, puteți invita botul pe serverul dvs. Faceți clic pe „OAuth2” -> „Generator de URL”. Pe generatorul de URL din dreapta, selectați „bot”.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-bot-invite-url-generator.png" alt="Generați un link de invitație pentru botul Discord."/>

*Generarea unui link de invitație pentru bot.*
</center>

În continuare, derulați în jos pentru a adăuga permisiuni botului. Puteți face botul administrator sau puteți selecta doar permisiunile de care aveți nevoie (acest lucru este mai sigur).

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-bot-permissions.png" alt="Setări de permisiuni ale botului Discord."/>

*Setări de permisiuni ale botului.*
</center>

În cele din urmă, copiați adresa URL generată în partea de jos și deschideți linkul într-o filă nouă. Linkul vă va redirecționa pentru a adăuga botul la un server pe care îl gestionați.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/add-discord-bot-to-server.png" alt="Adăugați botul la serverul Discord." style="width:50%"/>

*Adăugarea botului la server.*
</center>

După ce botul este invitat pe server, faceți clic pe bot și faceți clic pe „Adăugați la server”. Vi se va cere să acordați permisiunea „Creați comenzi în server” botului.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/confirm-discord-bot-permissions.png" alt="Confirmați permisiunile botului Discord." style="width:50%"/>

*Confirmați permisiunile botului în server.*
</center>

## Testați integrarea
Acum botul dvs. ar trebui să fie conectat și să asculte toată acțiunea de pe serverul dvs. Discord. Botul eșantion furnizat în codul de mai sus va răspunde pur și simplu „Am primit mesajul tău!” dacă cineva tastează un mesaj care începe cu șirul „$bot”. Potrivirea șirurilor ca aceasta este cea mai simplă modalitate de a configura unele acțiuni pentru botul dvs. Cu toate acestea, Discord acceptă și comenzi de aplicație native care au mai mult suport pentru caracteristici. Puteți citi mai multe despre acestea [în documentația oficială a API-ului Discord](https://discord.com/developers/docs/interactions/application-commands). Odată ce ați configurat integrarea inițială a botului, cerul este limita cu ce servicii poate oferi botul dvs. serverului dvs.


Fiți cu ochii pe postarea finală din seria noastră de blog, care va parcurge modul în care am folosit produsul nostru, [SeaX](https://seax.seasalt.ai/), pentru a conecta [platforma de centru de contact a Twilio Flex](https://www.twilio.com/flex) cu un server comunitar Discord. Această integrare permite mărcilor nu numai să promoveze comunitatea cu clienții lor, ci și să mențină un canal direct de comunicare și să abordeze problemele direct din cadrul comunității online.


Pentru mai multe informații despre oricare dintre soluțiile noastre, vizitați [Wiki-ul produselor Seasalt.ai](https://wiki.seasalt.ai) - sau completați [formularul „Rezervați o demonstrație”](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting) pentru a arunca o privire directă.
`;export{e as default};

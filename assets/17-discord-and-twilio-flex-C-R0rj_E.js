const e=`---
title: "Discord (3/3): Discord & Twilio Flex: Aducerea centrului de contact Flex în teritoriu neexplorat"
metatitle: "Discord (3/3): Centrul de contact Twilio Flex în Discord"
date: 2022-06-07 12:32:24-07:00
modified_date: 2025-08-01T12:00:00Z
draft: false
author: Kim Dodds
description: "În acest blog, vom demonstra cum Seasalt.ai a integrat un centru de contact complet într-un server Discord."
weight: 1
tags:
  - SeaX
  - Discord
image: /images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/flex-discord-thumbnail.png
canonicalURL: /blog/discord-and-twilio
url: /blog/discord-and-twilio/
---

*Aceasta este ultima noastră postare dintr-o serie de trei părți despre implicarea clienților pe Discord. Primul nostru blog, [„O nouă frontieră pentru implicarea clienților”](https://seasalt.ai/blog/15-discord-a-new-frontier-for-customer-engagement/), a discutat despre creșterea popularității Discord și despre noua oportunitate pe care o prezintă pentru mărci de a crea și de a participa la propriile comunități online. În partea a doua, [„Cum să creați o comunitate și un bot Discord pentru marca dvs.”](https://seasalt.ai/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/), am parcurs cum să creați un server Discord pentru marca dvs. și cum să integrați un bot pentru a gestiona moderarea serverului, anunțurile, feedback-ul utilizatorilor etc. În cele din urmă, în acest blog vom prezenta o demonstrație a modului în care noi, la Seasalt.ai, am integrat un centru de contact complet într-un server Discord, permițând mărcilor să gestioneze toate aspectele îngrijirii clienților pe platformă.*

## Cuprins
- [Cuprins](#cuprins)
- [Demonstrație serviciu clienți Discord](#demonstrație-serviciu-clienți-discord)
- [Twilio Flex](#twilio-flex)
- [SeaX](#seax)
- [Server demonstrativ](#server-demonstrativ)
  - [Ajutor 1-la-mulți: Canale oficiale](#ajutor-1-la-mulți-canale-oficiale)
  - [Ajutor 1-la-1: Agent de servicii pentru clienți](#ajutor-1-la-1-agent-de-servicii-pentru-clienți)
    - [Baza de cunoștințe](#baza-de-cunoștințe)
    - [Transfer agent live](#transfer-agent-live)
  - [Gestionarea cazurilor](#gestionarea-cazurilor)
- [Analiză tehnică aprofundată](#analiză-tehnică-aprofundată)
  - [Definiți fluxul Flex](#definiți-fluxul-flex)
  - [Creați un canal personalizat](#creați-un-canal-personalizat)
  - [Creați un server HTTP pentru a sprijini o rutare mai complexă](#creați-un-server-http-pentru-a-sprijini-o-rutare-mai-complexă)
    - [Webhook pentru mesaje de ieșire](#webhook-pentru-mesaje-de-ieșire)
    - [Integrare bot](#integrare-bot)
- [Rezumat](#rezumat)

# Demonstrație serviciu clienți Discord
Dacă sunteți nerăbdători să treceți direct la subiect și să vedeți produsul final, vom prezenta mai întâi videoclipul demonstrativ final:

<iframe width="85%" height="450px" src="https://www.youtube.com/embed/iUK4YkGYI6Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>


Scopul nostru este de a demonstra cum Discord poate fi integrat în software-ul existent de servicii pentru clienți (în acest caz, [Twilio Flex](https://flex.twilio.com/)) pentru a adăuga valoare suplimentară serverului oficial al unei mărci. Continuați să citiți pentru o privire mai atentă asupra implementării noastre.

# Twilio Flex
Twilio este o companie de comunicații bine stabilită, care oferă API-uri pentru gestionarea mesajelor text, a apelurilor telefonice, a e-mailurilor, a mesajelor de chat și multe altele. Flex este unul dintre produsele emblematice ale Twilio: un centru de contact bazat pe cloud, scalabil, care direcționează mesajele și apelurile de la orice sursă către agenți virtuali și live. Am ales Flex ca bază pentru integrarea centrului nostru de contact, deoarece are deja un suport excelent pentru o mare varietate de canale, cum ar fi Facebook, SMS și WhatsApp.

# SeaX
SeaX este un centru de contact în cloud, profund integrat cu funcții avansate de inteligență artificială, care ajută la creșterea productivității și a satisfacției clienților. SeaX este unul dintre produsele emblematice ale Seasalt.ai și a fost deja implementat pentru clienți din peste 150 de țări. Platforma centrului de contact SeaX este construită pe Twilio Flex și include o varietate de funcții suplimentare care le permit agenților live să asiste mai bine clienții. Unele dintre cele mai utile funcții sunt text-to-speech și speech-to-text interne, baza de cunoștințe bazată pe inteligență artificială și sistemul integrat de gestionare a cazurilor. Pentru mai multe informații despre toate capabilitățile platformei SeaX, vă rugăm să vizitați [pagina de pornire SeaX](https://seax.seasalt.ai/?utm_source=blog/).

# Server demonstrativ
Acum vom parcurge modul în care am configurat serverul nostru Discord. În scopul demonstrației, ne-am imaginat un scenariu în care serverul nostru a fost folosit ca o comunitate pentru un joc precum Pokémon Go! Următorul tabel prezintă o imagine de ansamblu a unora dintre caracteristicile demonstrate în serverul nostru Discord.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-features-2.png" alt="Prezentare generală a caracteristicilor serverului Discord demonstrativ de servicii pentru clienți."/>

*Prezentare generală a caracteristicilor serverului Discord demonstrativ.*
</center>

## Ajutor 1-la-mulți: Canale oficiale
Mai multe canale din server sunt configurate pentru a oferi un flux direct între administratorii/dezvoltatorii oficiali și jucători.
Canalul de **anunțuri** poate fi postat doar de administratori și moderatori și poate include postări (manuale sau automate) de pe contul de Twitter, site-ul web sau alte surse oficiale.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-announcement-channel.jpg" alt="Canalul de anunțuri de pe serverul Discord, cu o postare de pe un cont oficial de Twitter."/>

*Canalul #announcements de pe serverul Discord demonstrativ.*
</center>

Canalul de **raportare a erorilor** permite jucătorilor să discute despre erori și probleme care afectează jocul. Administratorii pot supraveghea acest canal pentru a identifica orice probleme din joc care ar trebui vizate. În plus, utilizatorii pot trimite un raport oficial de eroare folosind comanda slash \`/bug\` din interiorul canalului.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-bug-report-channel.jpg" alt="Canalul de raportare a erorilor de pe serverul Discord, cu un raport de eroare trimis."/>

*Canalul #bug-report de pe serverul Discord demonstrativ, cu un raport de eroare trimis.*
</center>

Canalul de **solicitare de caracteristici** permite jucătorilor să discute despre modificări ale gameplay-ului, îmbunătățiri ale calității vieții, adăugiri de conținut etc. pe care ar dori să le vadă adăugate în joc. Similar cu canalul de solicitare de erori, contribuția lor poate fi văzută de moderatorii discord și pot folosi comanda slash \`/new_feature\` pentru a trimite o solicitare oficială.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-feature-request-channel.jpg" alt="Canalul de solicitare de caracteristici de pe serverul Discord, cu un utilizator care execută o comandă slash."/>

*Canalul #feature-request de pe serverul Discord demonstrativ, cu un utilizator care execută o comandă slash.*
</center>

## Ajutor 1-la-1: Agent de servicii pentru clienți

Jucătorii pot folosi comanda slash \`/helpme\` pentru a declanșa un mesaj direct cu un agent. Agentul de servicii pentru clienți poate fi fie automatizat (agent virtual), fie deservit de un agent live.

Pentru demonstrația noastră, am configurat un bot simplu de întrebări frecvente care interoghează baza de cunoștințe a companiei pentru a oferi sugestii de articole relevante utilizatorului. Utilizatorul poate solicita, de asemenea, un agent live și va fi transferat în același chat la un agent live pe SeaX.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-customer-service-channel.jpg" alt="Canalul de servicii pentru clienți de pe serverul Discord, cu un utilizator care declanșează un DM."/>

*Canalul #feature-request de pe serverul Discord demonstrativ, cu un utilizator care declanșează un DM.*
</center>

### Baza de cunoștințe
Când utilizatorul trimite o interogare agentului de servicii virtuale, agentul poate trimite utilizatorul la articole relevante din baza de cunoștințe.

### Transfer agent live 
Odată ce un utilizator se află într-un mesaj direct cu botul, poate solicita un agent live. Vor fi imediat notificați că a fost creat un caz pentru ei și că sunt transferați la un agent live. Când agentul live se alătură chatului, vor primi și o notificare.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-customer-service-dm.jpg" alt="Un mesaj direct cu serviciul pentru clienți, cu sugestii de articole din baza de cunoștințe, transfer de agent live și gestionarea cazurilor."/>

*Un mesaj direct cu serviciul pentru clienți, cu sugestii de articole din baza de cunoștințe, transfer de agent live și gestionarea cazurilor.*
</center>

Pe backend, agenții live pot gestiona apelurile și mesajele de chat primite de pe toate canalele (SMS, Facebook, Discord, apel vocal etc.) printr-o singură platformă. În acest caz, platforma backend este SeaX.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/flex-discord-channel.jpg" alt="Interfața SeaX care afișează vizualizarea agentului live a unei conversații cu un utilizator pe Discord."/>

*Interfața SeaX care afișează vizualizarea agentului live a unei conversații cu un utilizator pe Discord.*
</center>

## Gestionarea cazurilor
O caracteristică pe care am dorit să o subliniem în această demonstrație este gestionarea cazurilor. Soluția Discord a Seasalt.ai se integrează cu sistemul de gestionare a cazurilor SeaX pentru a urmări în mod corespunzător diverse cazuri de la utilizatori. Când un utilizator interacționează cu botul Discord (cum ar fi solicitarea unui agent live sau raportarea unei erori), putem deschide automat un caz nou și putem înregistra toate informațiile importante despre utilizator și problema pe care o întâmpină. Acest lucru permite agentului live să aibă acces ușor la toate problemele raportate și să se asigure că urmăresc utilizatorii până la rezolvarea cazului.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-new-case.png" alt="Crearea unui caz nou în sistemul de gestionare a cazurilor SeaX."/>

*Crearea unui caz nou în sistemul de gestionare a cazurilor SeaX.*

<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-existing-case.png" alt="Vizualizarea unui caz existent în sistemul de gestionare a cazurilor SeaX."/>

*Vizualizarea unui caz existent în sistemul de gestionare a cazurilor SeaX.*

</center>

# Analiză tehnică aprofundată

Acum am văzut produsul final și toate caracteristicile disponibile membrilor serverului și agenților live care îi asistă. Dar cum a fost implementat de fapt totul? În ultima noastră postare pe blog, „[Cum să creați o comunitate și un bot Discord pentru marca dvs.](https://seasalt.ai/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/)”, am parcurs cum să creați serverul Discord pentru marca dvs. și cum să integrați un bot Discord pentru a-l gestiona. Pentru a sprijini această demonstrație mai avansată, am folosit și [SeaChat, motorul de inteligență artificială conversațională al Seasalt.ai](https://chat.seasalt.ai), pentru a construi un chatbot simplu care permite botului nostru Discord să gestioneze interogări în limbaj natural pentru utilizatori.

Pe partea SeaX, echipa noastră a lucrat îndeaproape cu Twilio pentru a crea o soluție de centru de contact plină de caracteristici, construită pe Twilio Flex. Pentru mai multe informații despre Twilio Flex și despre cum funcționează procesul de configurare, puteți citi [Ghidul de pornire rapidă Twilio Flex](https://www.twilio.com/docs/flex/quickstart).

După pregătirea serverului Discord, a botului Discord și a chatbotului și asigurându-ne că avem o instanță funcțională a SeaX în funcțiune, cea mai mare provocare este să direcționăm corect mesajele către și de la utilizator, bot și agenții live de pe SeaX. Twilio este fantastic la gestionarea rutării mesajelor, așa că scopul nostru este să gestionăm toate comenzile slash din interiorul serverului nostru de bot Discord și apoi să redirecționăm toate celelalte mesaje (cum ar fi mesajele directe către chatbot sau agentul live) către Twilio.

## Definiți fluxul Flex
Primul pas este să ne asigurăm că orice mesaje pe care le trimitem către Twilio vor fi direcționate către locul corect. Am configurat un flux Twilio simplu care verifică mai întâi dacă utilizatorul a solicitat un agent live și, dacă da, redirecționează mesajele următoare către SeaX. Dacă utilizatorul nu a solicitat un agent live, atunci redirecționăm mesajul către chatbot pentru a obține un răspuns. Pentru mai multe informații despre cum să configurați fluxul, consultați [documentația Twilio Studio Flow](https://www.twilio.com/docs/studio).

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-flow.png" alt="Un flux simplu Flex Studio care direcționează mesajele primite către un chatbot sau către SeaX."/>

*Un flux simplu Flex Studio care direcționează mesajele primite către un chatbot sau către SeaX.*
</center>

## Creați un canal personalizat
Deci, acum avem o idee despre cum vor fi direcționate mesajele primite. Cu toate acestea, Discord nu este un canal acceptat nativ de Twilio. Din fericire, Twilio are un tutorial detaliat despre cum să [adăugați un canal de chat personalizat la Twilio Flex](https://www.twilio.com/blog/add-custom-chat-channel-twilio-flex). După ce urmăm ghidul pentru a configura noul canal personalizat pe Twilio, trebuie să redirecționăm efectiv mesajele de la Discord la Twilio.

Mai întâi configuram clientul Twilio:

\`\`\`python
from twilio.rest import Client
twilio_client = Client(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)
\`\`\`

Acum, odată ce primim un mesaj de intrare de la Discord, putem redirecționa acel mesaj către Twilio prin intermediul clientului Twilio. Mai întâi, ar trebui să verificăm dacă utilizatorul există deja în sistemul Twilio și dacă are deja un canal de chat deschis.

\`\`\`python
# apelați metoda get_user pentru a verifica dacă utilizatorul există și creați unul nou dacă nu
user = await get_user(user_id, twilio_client, TWILIO_SERVICE_SID)

# preluați canalele în care se află utilizatorul
user_channels = twilio_client.chat \\
        .services(TWILIO_SERVICE_SID) \\
        .users(user_id) \\
        .user_channels \\
        .list()
\`\`\`

Dacă utilizatorul are un canal de chat existent deschis, trebuie să îl folosim pentru a avea acces la istoricul chatului. Dacă nu există un canal de chat existent, creăm unul nou pentru utilizator:

\`\`\`python
if user_channels:
    channel_sid = user_channels[-1].channel_sid
else:
    channel = twilio_client.flex_api \\
            .channel \\
            .create(
                flex_flow_sid=FLEX_FLOW_ID,
                chat_user_friendly_name=username,
                chat_friendly_name=chat_name,  # -> Numele prietenos al canalului de chat
                target=conversation_id,  # -> Identitatea care identifică în mod unic utilizatorul de chat
                identity=conversation_id,  # -> Utilizatorul, ex/ ID-ul DM Discord
        )
    channel_sid = channel.sid
\`\`\`

În cele din urmă, odată ce avem un canal de chat deschis între utilizatorul Discord și Twilio, putem redirecționa mesajul de intrare către fluxul Twilio Studio.

\`\`\`python
message = twilio_client.chat \\
        .services(TWILIO_SERVICE_SID) \\
        .channels(channel_sid) \\
        .messages \\
        .create(
            body=message_text,
            from_=user_id,
            x_twilio_webhook_enabled='true',
            attributes=json.dumps(message_json)  # trimiteți antetele ca atribut, astfel încât să fie accesibile mai târziu
        )
\`\`\`
Acum avem capacitatea de a redirecționa toate mesajele noastre de intrare de la utilizatorii Discord direct către fluxul nostru Twilio Flex. Pe partea botului Discord, asigurați-vă că toate mesajele directe sunt redirecționate către Twilio. Acum puteți încerca să trimiteți un mesaj direct botului Discord și ar trebui să îl vedeți apărând în jurnalele Twilio Studio Flow - Totuși, nu am terminat încă!

## Creați un server HTTP pentru a sprijini o rutare mai complexă

### Webhook pentru mesaje de ieșire
Deci, acum avem o idee despre cum vor fi direcționate mesajele noastre de intrare. Cu toate acestea, ne lipsesc încă câteva piese. În primul rând, știm că putem primi mesaje la Twilio acum, dar cum răspundem utilizatorilor noștri pe Discord? Botul nostru Discord este singurul lucru autorizat să trimită mesaje către serverul și utilizatorii noștri Discord, iar Twilio nu știe oricum cum să ne trimită mesajele înapoi pe serverul Discord. Soluția este că trebuie să configuram un webhook pentru mesaje de ieșire care va fi declanșat de fiecare dată când există un mesaj nou în canalul de chat Twilio. În cadrul acelui webhook, putem folosi apoi botul nostru Discord pentru a redirecționa mesajul înapoi pe serverul nostru.

Pentru a face acest lucru, integrăm botul nostru Discord într-un server HTTP mai robust. Am folosit [FastAPI](https://fastapi.tiangolo.com/) pentru a configura un punct final POST simplu care va servi drept webhook pentru mesajele noastre de ieșire. Odată ce avem serverul configurat și botul nostru Discord rulează alături de el, putem defini punctul final POST.

Acest punct final va primi fiecare mesaj adăugat la canalul de chat, așa că mai întâi dorim să filtrăm totul, cu excepția mesajelor de ieșire de la SeaX. Apoi, va trebui să preluăm ID-ul corect al canalului din corpul mesajului, astfel încât să știm unde să redirecționăm mesajul. În cele din urmă, putem folosi clientul Discord pentru a redirecționa mesajul către canalul Discord.

\`\`\`python
@app.post("/forward-to-discord", status_code=200)
async def forward_discord_message(request: Request, response: Response) -> None:
    raw_body = await request.body()
    body = urllib.parse.parse_qs(raw_body.decode())

    # acordați atenție doar mesajelor de la SDK (Flex, toate celelalte vor fi de la API)
    if not body.get('Source') == ['SDK']:
        return

    # Mesajele de la Flex nu conțin conversationId-ul mesajului original
    # Avem nevoie de convId pentru a trimite mesajul înapoi la conversația de pe GBM
    # Preluați mesajul anterior și extrageți conversationId
    message = twilio_client.chat \\
            .services(TWILIO_SERVICE_SID) \\
            .channels(body.get("ChannelSid")[0]) \\
            .messages.list(limit=1)[0]

    attributes = json.loads(message.attributes)

    channel = discord_client.get_channel(attributes.get("channel", {}).get("id"))
    if channel:
        await channel.send(body.get("Body", [""])[0].get("text"))
    else:
        logger.error(f"Canalul Discord nu a putut fi găsit cu ID-ul: {get_channel_id(req)}!")
        response.status_code = 400
\`\`\`

În cele din urmă, pentru ca mesajele să fie trimise la punctul nostru final, trebuie să anunțăm Twilio care este noul nostru webhook. Fiecare canal de chat trebuie să aibă propriul webhook configurat. Deci, dacă ne întoarcem la locul unde am creat inițial noul canal de chat pentru utilizator, putem adăuga un cod suplimentar pentru a configura webhook-ul:

\`\`\`python
webhook = twilio_client.chat \\
        .services(TWILIO_SERVICE_SID) \\
        .channels(channel_sid) \\
        .webhooks \\
        .create(
            type='webhook',   
configuration_url=f"{SERVER_HOST}/forward-to-discord",
            configuration_method="POST",
            configuration_filters=["onMessageSent", "onMessageUpdated", "onMediaMessageSent"]
        )
\`\`\`

### Integrare bot

Deci, acum mesajele de ieșire de la SeaX ar trebui să fie direcționate corect înapoi pe serverul nostru Discord. Dar încă nu am abordat mesajele care merg la chatbot. Trebuie să configuram un punct final final care va fi declanșat din fluxul Twilio Studio și va primi mesajul utilizatorului, va interoga botul și va returna răspunsul la Discord.

\`\`\`python
@app.post("/chatbot-to-discord", status_code=200)
async def receive_discord_message(request: Request, response: Response):
    """Primește cererea POST de la Twilio, interoghează botul și returnează răspunsul la Discord."""
    req = await request.body()
    # separă corpul mesajului original de conținutul twilio
    twilio_body, original_message_body = separate_original_message_body(req.decode())

    bot_response = await query_bot(original_message_body, bot_info)

    if bot_response:
        channel = discord_client.get_channel(original_message_body.get("channel_id"))
        if channel:
            for item in bot_response:
                await channel.send(item.get("text"))
\`\`\`

Asigurați-vă că fluxul Twilio Studio are webhook-ul corect pentru a direcționa mesajele către bot. Acum am terminat rutarea mesajelor! Putem vedea o imagine de ansamblu la nivel înalt a tuturor rutărilor de mesaje în această diagramă:

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-routing-diagram.jpg" alt="Diagrama de rutare a mesajelor."/>

*Diagrama de rutare a mesajelor.*
</center>

# Rezumat
Pentru a încheia, în această serie de bloguri am discutat despre creșterea popularității Discord și despre oportunitatea pe care o prezintă pentru mărci ca o nouă platformă de a interacționa cu clienții. Am parcurs unele dintre caracteristicile de bază ale Discord, pentru a arăta cum o marcă își poate configura propria comunitate online, precum și caracteristici mai avansate care permit mărcilor să automatizeze moderarea și asistența pentru clienți pe serverul lor cu boți Discord. În cele din urmă, am împărtășit demonstrația noastră despre cum am integrat Discord cu platforma noastră de servicii pentru clienți, SeaX, pentru a aduce caracteristici avansate comunității Discord, cum ar fi transferul de agent live, gestionarea cazurilor, căutarea în baza de cunoștințe bazată pe inteligență artificială.
Pentru o demonstrație personală sau pentru a vedea cum Seasalt.ai vă poate ajuta să abordați nevoile specifice ale afacerii dvs., vă rugăm să completați formularul nostru „[Rezervați o demonstrație](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting)”. Pentru mai multe informații despre integrarea Flex/Discord sau pentru a ne contacta, vă rugăm să vizitați [Lista de parteneri Twilio a Seasalt.ai](https://showcase.twilio.com/partner-listing/a8E8Z000000PDCQUA4).`;export{e as default};

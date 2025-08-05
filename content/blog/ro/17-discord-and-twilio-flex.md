---
title: "Discord (3/3): Discord și Twilio Flex: Aducerea centrului de contact Flex în teritorii neexplorate"
metatitle: "Discord (3/3): Centrul de contact Twilio Flex în Discord"
date: 2022-06-07T12:32:24-07:00
author: Kim Dodds
draft: false
image: /images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/flex-discord-thumbnail.png
description: "În acest blog, vom demonstra cum Seasalt.ai integrează un centru de contact complet funcțional într-un server Discord."
tags: ["SeaX", "Discord"]
canonicalURL: "/blog/discord-and-twilio"
url: "/blog/discord-and-twilio/"
aliases:
  - /blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/
modified_date: 2024-12-19T10:30:00Z
---

*Acesta este ultimul articol din seria noastră de trei părți despre angajarea clienților pe Discord. Primul nostru articol de blog ["O nouă frontieră pentru angajarea clienților"](https://seasalt.ai/blog/15-discord-a-new-frontier-for-customer-engagement/) a discutat despre popularitatea în creștere a Discord și cum oferă noi oportunități pentru branduri să-și creeze și să-și angajeze propriile comunități online. În partea a doua ["Cum să-ți creezi o comunitate Discord și un bot pentru brandul tău"](https://seasalt.ai/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/), am introdus cum să-ți creezi un server Discord pentru brandul tău și cum să integrezi boti pentru a gestiona moderarea serverului, anunțurile, feedback-ul utilizatorilor și multe altele. În final, în acest blog, vom demonstra cum Seasalt.ai integrează un centru de contact complet funcțional într-un server Discord, permițând brandurilor să gestioneze toate aspectele serviciului clienți pe platformă.*

## Cuprins
- [Cuprins](#table-of-contents)
- [Demonstrația serviciului clienți Discord](#discord-customer-service-demo)
- [Twilio Flex](#twilio-flex)
- [SeaX](#seax)
- [Serverul de demonstrație](#demo-server)
  - [Ajutor unu-la-mulți: Canale oficiale](#1-to-many-help-official-channels)
  - [Ajutor unu-la-unu: Agent serviciu clienți](#1-to-1-help-customer-service-agent)
    - [Baza de cunoștințe](#knowledge-base)
    - [Transfer agent live](#live-agent-transfer)
  - [Gestionarea cazurilor](#case-management)
- [Explorare tehnică aprofundată](#technical-deep-dive)
  - [Definirea fluxului Flex](#define-the-flex-flow)
  - [Crearea unui canal personalizat](#create-a-custom-channel)
  - [Crearea unui server HTTP pentru a suporta rutarea mai complexă](#create-an-http-server-to-support-more-complex-routing)
    - [Webhook mesaje de ieșire](#outbound-messages-webhook)
    - [Integrarea botului](#bot-integration)
- [Rezumat](#summary)

# Demonstrația serviciului clienți Discord
Dacă ești dornic să mergi direct la subiect și să vezi produsul final, vom începe prin a prezenta videoclipul final de demonstrație:

<iframe width="85%" height="450px" src="https://www.youtube.com/embed/iUK4YkGYI6Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

Scopul nostru este să demonstrăm cum să integrăm Discord în software-ul existent de serviciu clienți (în acest caz [Twilio Flex](https://flex.twilio.com/)) pentru a adăuga valoare suplimentară la serverele oficiale ale brandurilor. Continuă să citești pentru o înțelegere mai profundă a implementării noastre.

# Twilio Flex
Twilio este o companie de comunicare matură care oferă API-uri pentru gestionarea SMS-urilor, apelurilor telefonice, emailurilor, mesajelor de chat și multe altele. Flex este unul dintre produsele de top ale Twilio: un centru de contact scalabil bazat pe cloud care poate ruta mesaje și apeluri de la orice sursă către agenți virtuali și live. Am ales Flex ca bază pentru integrarea centrului de contact deoarece oferă deja suport excelent pentru diverse canale precum Facebook, SMS și WhatsApp.

# SeaX
SeaX este un centru de contact cloud integrat profund cu funcții AI avansate care ajută la îmbunătățirea productivității și satisfacției clienților. SeaX este unul dintre produsele de top ale Seasalt.ai și a fost lansat la clienți din peste 150 de țări. Platforma centrului de contact SeaX este construită pe Twilio Flex și include diverse funcții suplimentare care permit agenților live să ajute mai bine clienții. Unele dintre cele mai utile funcții includ text-to-speech și speech-to-text intern, baza de cunoștințe condusă de AI și sistemul integrat de gestionare a cazurilor. Pentru mai multe informații despre toate funcțiile platformei SeaX, vizitează [pagina principală SeaX](https://seax.seasalt.ai/?utm_source=blog/).

# Serverul de demonstrație
Acum vom introduce cum să configurăm serverul nostru Discord. În scopuri de demonstrație, am imaginat un scenariu în care serverul nostru este folosit ca o comunitate pentru un joc precum Pokémon Go! Tabelul de mai jos prezintă o privire de ansamblu asupra unor funcții demonstrate în serverul nostru Discord.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-features-2.png" alt="Privire de ansamblu asupra funcțiilor serverului Discord de demonstrație pentru serviciul clienți."/>

*Privire de ansamblu asupra funcțiilor serverului Discord de demonstrație.*
</center>

## Ajutor unu-la-mulți: Canale oficiale
Câteva canale din server sunt configurate pentru a oferi flux direct între administratori/dezvoltatori oficiali și jucători.
**Canalul de anunțuri** poate fi postat doar de administratori și moderatori și poate conține postări (manuale sau automate) de la conturi Twitter, site-uri web sau alte surse oficiale.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-announcement-channel.jpg" alt="Canalul de anunțuri pe serverul Discord, conținând postări de la contul oficial Twitter."/>

*Canalul #announcements pe serverul Discord de demonstrație.*
</center>

**Canalul de raportare bug-uri** permite jucătorilor să discute despre bug-uri și probleme care strică jocul. Administratorii pot urmări îndeaproape acest canal pentru a identifica orice probleme din joc care ar trebui rezolvate. În plus, utilizatorii pot folosi comanda slash `/bug` din canal pentru a trimite raportări oficiale de bug-uri.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-bug-report-channel.jpg" alt="Canalul de raportare bug-uri pe serverul Discord, conținând raportări de bug-uri trimise."/>

*Canalul #bug-report pe serverul Discord de demonstrație, conținând raportări de bug-uri trimise.*
</center>

**Canalul de cereri de funcții** permite jucătorilor să discute despre schimbări de gameplay, îmbunătățiri de calitate a vieții, adăugări de conținut și multe altele pe care și-ar dori să le vadă în joc. Similar cu canalul de cereri de bug-uri, input-ul lor poate fi văzut de moderatorii Discord, care pot folosi comanda slash `/new_feature` pentru a trimite cereri oficiale.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-feature-request-channel.jpg" alt="Canalul de cereri de funcții pe serverul Discord, conținând utilizatori care execută comenzi slash."/>

*Canalul #feature-request pe serverul Discord de demonstrație, conținând utilizatori care execută comenzi slash.*
</center>

## Ajutor unu-la-unu: Agent serviciu clienți

Jucătorii pot folosi comanda slash `/helpme` pentru a declanșa mesaje directe cu un agent. Agentul de serviciu clienți poate fi automatizat (agent virtual) sau operat de un agent live.

Pentru demonstrația noastră, am configurat un bot FAQ simplu care interoghează baza de cunoștințe a companiei pentru a oferi utilizatorilor sugestii de articole relevante. Utilizatorii pot solicita și un agent live și vor fi transferați la un agent live pe SeaX în același chat.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-customer-service-channel.jpg" alt="Canalul de serviciu clienți pe serverul Discord, conținând utilizatori care declanșează DM."/>

*Canalul #feature-request pe serverul Discord de demonstrație, conținând utilizatori care declanșează DM.*
</center>

### Baza de cunoștințe
Când utilizatorii trimit o întrebare agentului virtual de servicii, agentul poate direcționa utilizatorii către articole relevante din baza de cunoștințe.

### Transfer agent live
Odată ce utilizatorii au un mesaj direct cu botul, pot solicita un agent live. Vor primi imediat o notificare că li s-a creat un caz și că sunt transferați la un agent live. Când agentul live se alătură chat-ului, vor primi și o notificare.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-customer-service-dm.jpg" alt="Mesajul direct cu serviciul clienți, conținând sugestii de articole din baza de cunoștințe, transfer agent live și gestionarea cazurilor."/>

*Mesajul direct cu serviciul clienți, conținând sugestii de articole din baza de cunoștințe, transfer agent live și gestionarea cazurilor.*
</center>

În backend, agenții live pot procesa apeluri și mesaje de chat de la toate canalele (SMS, Facebook, Discord, apeluri vocale etc.) printr-o singură platformă. În acest caz, platforma backend este SeaX.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/flex-discord-channel.jpg" alt="Interfața SeaX arătând o vedere a agentului live conversând cu utilizatorul Discord."/>

*Interfața SeaX arătând o vedere a agentului live conversând cu utilizatorul Discord.*
</center>

## Gestionarea cazurilor
O funcție pe care vrem să o evidențiem în această demonstrație este gestionarea cazurilor. Soluția Discord a Seasalt.ai este integrată cu sistemul de gestionare a cazurilor SeaX pentru a urmări corect diversele cazuri ale utilizatorilor. Când utilizatorii interacționează cu botul Discord (de exemplu, solicitând un agent live sau raportând un bug), putem deschide automat un caz nou și înregistra toate informațiile importante despre utilizator și problema pe care o întâlnesc. Aceasta permite agenților live să acceseze ușor toate problemele raportate și să se asigure că urmează utilizatorul până la rezolvarea cazului.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-new-case.png" alt="Crearea unui caz nou în sistemul de gestionare a cazurilor SeaX."/>

*Crearea unui caz nou în sistemul de gestionare a cazurilor SeaX.*

<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-existing-case.png" alt="Vizualizarea unui caz existent în sistemul de gestionare a cazurilor SeaX."/>

*Vizualizarea unui caz existent în sistemul de gestionare a cazurilor SeaX.*

</center>

# Explorare tehnică aprofundată

Acum am văzut produsul final și toate funcțiile disponibile pentru membrii serverului și agenții live care îi ajută. Dar cum este implementat totul de fapt? În articolul nostru anterior de blog ["Cum să-ți creezi o comunitate Discord și un bot pentru brandul tău"](https://seasalt.ai/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/), am introdus cum să-ți creezi un server Discord pentru brandul tău și cum să integrezi boti Discord pentru a-l gestiona. Pentru a suporta această demonstrație mai avansată, am folosit și [SeaChat, motorul AI conversațional al Seasalt.ai](https://chat.seasalt.ai), pentru a construi un chatbot simplu care permite botului nostru Discord să proceseze întrebările în limbaj natural ale utilizatorilor.

Pe partea de SeaX, echipa noastră a lucrat strâns cu Twilio pentru a crea o soluție de centru de contact bogată în funcții bazată pe Twilio Flex. Pentru mai multe informații despre Twilio Flex și cum funcționează procesul de configurare, poți citi [Ghidul de început rapid Twilio Flex](https://www.twilio.com/docs/flex/quickstart).

După ce am pregătit serverul Discord, botul Discord, chatbot-ul și ne-am asigurat că avem o instanță SeaX funcțională, cea mai mare provocare a fost cum să rutăm corect mesajele între utilizatori, bot și agenții live pe SeaX. Twilio este excelent la procesarea rutării mesajelor, deci scopul nostru a fost să procesăm toate comenzile slash din serverul botului Discord, apoi să înaintăm toate celelalte mesaje (cum ar fi mesajele directe trimise către chatbot sau agenții live) către Twilio.

## Definirea fluxului Flex
Primul pas este să ne asigurăm că orice mesaj pe care îl trimitem la Twilio va fi rutat la locația corectă. Am configurat un flux Twilio simplu care verifică mai întâi dacă utilizatorul a solicitat un agent live, și dacă da, înaintează mesajele următoare către SeaX. Dacă utilizatorul nu a solicitat un agent live, atunci înaintăm mesajul către chatbot pentru a obține un răspuns. Pentru mai multe informații despre cum să configurezi fluxul, vezi [documentația Twilio Studio Flow](https://www.twilio.com/docs/studio).

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-flow.png" alt="Un flux Flex Studio simplu care rutează mesajele de intrare către chatbot sau SeaX."/>

*Un flux Flex Studio simplu care rutează mesajele de intrare către chatbot sau SeaX.*
</center>

## Crearea unui canal personalizat
Deci acum înțelegem cum vor fi rute mesajele de intrare. Cu toate acestea, Discord nu este un canal suportat nativ de Twilio. Din fericire, Twilio are un tutorial detaliat despre cum să [adaugi un canal de chat personalizat la Twilio Flex](https://www.twilio.com/blog/add-custom-chat-channel-twilio-flex). După ce am urmat ghidul pentru a configura noul canal personalizat pe Twilio, trebuie să înaintăm efectiv mesajele de la Discord către Twilio.

Mai întâi configurăm clientul Twilio:

```python
from twilio.rest import Client
twilio_client = Client(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)
```

Acum, odată ce primim un mesaj de intrare de la Discord, putem înainta acel mesaj către Twilio prin clientul Twilio. Mai întâi, ar trebui să verificăm dacă utilizatorul există deja în sistemul Twilio și dacă are deja un canal de chat deschis.

```python
# Apelează metoda get_user pentru a verifica dacă utilizatorul există, dacă nu, creează unul nou
user = await get_user(user_id, twilio_client, TWILIO_SERVICE_SID)

# Obține canalele în care se află utilizatorul
user_channels = twilio_client.chat \
        .services(TWILIO_SERVICE_SID) \
        .users(user_id) \
        .user_channels \
        .list()
```

Dacă utilizatorul are un canal de chat deschis existent, trebuie să-l folosim pentru a putea accesa istoricul chat-ului. Dacă nu există un canal de chat existent, creăm unul nou pentru utilizator:

```python
if user_channels:
    channel_sid = user_channels[-1].channel_sid
else:
    channel = twilio_client.flex_api \
            .channel \
            .create(
                flex_flow_sid=FLEX_FLOW_ID,
                chat_user_friendly_name=username,
                chat_friendly_name=chat_name,  # -> numele prietenos al canalului de chat
                target=conversation_id,  # -> identitatea care identifică în mod unic utilizatorul chat-ului
                identity=conversation_id,  # -> utilizatorul, de ex. / Discord DM ID
        )
    channel_sid = channel.sid
```

În final, odată ce am stabilit un canal de chat deschis între utilizatorul Discord și Twilio, putem înainta mesajele de intrare către fluxul Twilio Studio.

```python
message = twilio_client.chat \
        .services(TWILIO_SERVICE_SID) \
        .channels(channel_sid) \
        .messages \
        .create(
            body=message_text,
            from_=user_id,
            x_twilio_webhook_enabled='true',
            attributes=json.dumps(message_json)  # trimite header-ul ca atribute pentru a putea accesa mai târziu
        )
```
Acum putem înainta mesajele de intrare de la utilizatorii Discord direct către fluxul nostru Twilio Flex. Pe partea de bot Discord, asigură-te că toate mesajele directe sunt înaintate către Twilio. Acum poți încerca să trimiți un mesaj direct către botul Discord și ar trebui să-l vezi apărând în logurile fluxului Twilio Studio - dar nu am terminat încă!

## Crearea unui server HTTP pentru a suporta rutarea mai complexă

### Webhook mesaje de ieșire
Deci acum înțelegem cum vor fi rute mesajele de intrare. Cu toate acestea, încă ne lipsesc câteva părți. Mai întâi, știm că acum putem trimite mesaje la Twilio, dar cum răspundem utilizatorilor pe Discord? Botul nostru Discord este singurul autorizat să trimită mesaje la serverul nostru Discord și utilizatori, iar Twilio nu știe cum să ne returneze mesajele la serverul Discord. Soluția este că trebuie să configurăm un webhook pentru mesajele de ieșire care va fi declanșat ori de câte ori există un mesaj nou în canalul de chat Twilio. În acel webhook, putem folosi botul nostru Discord pentru a înainta mesajele înapoi la serverul nostru.

Pentru aceasta, integrăm botul Discord într-un server HTTP mai puternic. Am configurat un endpoint POST simplu folosind [FastAPI](https://fastapi.tiangolo.com/) care va servi ca webhook-ul nostru pentru mesajele de ieșire. Odată ce am configurat serverul și lăsat botul nostru Discord să ruleze cu el, putem defini endpoint-ul POST.

Acest endpoint va primi fiecare mesaj adăugat în canalul de chat, deci mai întâi filtrăm totul în afară de mesajele de ieșire de la SeaX. Apoi, trebuie să obținem ID-ul corect al canalului din corpul mesajului pentru a ști unde să înaintăm mesajul. În final, putem folosi clientul Discord pentru a înainta mesajul la canalul Discord.

```python
@app.post("/forward-to-discord", status_code=200)
async def forward_discord_message(request: Request, response: Response) -> None:
    raw_body = await request.body()
    body = urllib.parse.parse_qs(raw_body.decode())

    # Concentrează-te doar pe mesajele de la SDK (Flex, toate celelalte mesaje vor fi de la API)
    if not body.get('Source') == ['SDK']:
        return

    # Mesajele de la Flex nu conțin conversationId-ul mesajului original
    # Avem nevoie de convId pentru a trimite mesajul înapoi la conversația de pe GBM
    # Obține ultimul mesaj și extrage conversationId
    message = twilio_client.chat \
            .services(TWILIO_SERVICE_SID) \
            .channels(body.get("ChannelSid")[0]) \
            .messages.list(limit=1)[0]

    attributes = json.loads(message.attributes)

    channel = discord_client.get_channel(attributes.get("channel", {}).get("id"))
    if channel:
        await channel.send(body.get("Body", [""])[0].get("text"))
    else:
        logger.error(f"Nu s-a găsit canalul Discord cu ID-ul {get_channel_id(req)}!")
        response.status_code = 400
```

În final, pentru a trimite mesajele la endpoint-ul nostru, trebuie să facem Twilio să știe care este noul nostru webhook. Fiecare canal de chat trebuie să-și configureze propriul webhook. Deci dacă ne întoarcem la locul unde am creat inițial noul canal de chat pentru utilizator, putem adăuga cod suplimentar pentru a configura webhook-ul:

```python
webhook = twilio_client.chat \
        .services(TWILIO_SERVICE_SID) \
        .channels(channel_sid) \
        .webhooks \
        .create(
            type='webhook',   
configuration_url=f"{SERVER_HOST}/forward-to-discord",
            configuration_method="POST",
            configuration_filters=["onMessageSent", "onMessageUpdated", "onMediaMessageSent"]
        )
```

### Integrarea botului

Deci acum mesajele de ieșire de la SeaX ar trebui să fie rute corect înapoi la serverul nostru Discord. Dar încă nu procesăm mesajele trimise către chatbot. Trebuie să configurăm ultimul endpoint care va fi declanșat de fluxul Twilio Studio și va primi mesajul utilizatorului, va interoga botul și va returna răspunsul către Discord.

```python
@app.post("/chatbot-to-discord", status_code=200)
async def receive_discord_message(request: Request, response: Response):
    """Primește o cerere POST de la Twilio, interoghează botul și returnează răspunsul către Discord."""
    req = await request.body()
    # Separă corpul mesajului original de conținutul twilio
    twilio_body, original_message_body = separate_original_message_body(req.decode())

    bot_response = await query_bot(original_message_body, bot_info)

    if bot_response:
        channel = discord_client.get_channel(original_message_body.get("channel_id"))
        if channel:
            for item in bot_response:
                await channel.send(item.get("text"))
```

Asigură-te că fluxul Twilio Studio are webhook-ul corect pentru a ruta mesajele către bot. Acum am terminat rutarea mesajelor! Putem vedea o vedere de ansamblu a tuturor rutărilor de mesaje în această diagramă:

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-routing-diagram.jpg" alt="Diagrama rutării mesajelor."/>

*Diagrama rutării mesajelor.*
</center>

# Rezumat
În concluzie, în această serie de blog-uri, am discutat despre popularitatea în creștere a Discord și oportunitățile pe care le oferă ca o nouă platformă pentru branduri să interacționeze cu clienții. Am introdus câteva funcții de bază ale Discord pentru a demonstra cum brandurile își pot construi propriile comunități online, precum și funcții mai avansate care permit brandurilor să automatizeze moderarea și suportul clienților pe serverele lor folosind boti Discord. În final, am împărtășit cum am integrat Discord cu platforma noastră de serviciu clienți SeaX, aducând astfel funcții avansate la comunitatea Discord, cum ar fi transferul de agenți live, gestionarea cazurilor și căutarea în baza de cunoștințe condusă de AI.
Pentru o demonstrație personală sau pentru a afla cum Seasalt.ai te poate ajuta să îndeplinești nevoile specifice de afacere, completează formularul nostru ["Programează o demonstrație"](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting). Pentru mai multe informații despre integrarea Flex/Discord sau pentru a ne contacta, vizitează [listarea partenerului Twilio Seasalt.ai](https://showcase.twilio.com/partner-listing/a8E8Z000000PDCQUA4). 
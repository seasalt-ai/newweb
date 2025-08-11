const e=`---
title: "Discord (3/3): Discord i Twilio Flex: Wprowadzanie Flex Contact Center na nieznane terytorium"
metatitle: "Discord (3/3): Twilio Flex Contact Center w Discordzie"
date: 2022-06-07 12:32:24-07:00
modified_date: 2025-07-28T16:56:53Z
draft: false
author: Kim Dodds
description: "W tym blogu zademonstrujemy, jak Seasalt.ai zintegrowało pełnoprawne centrum kontaktowe z serwerem Discord."
weight: 1
tags:
  - SeaX
  - Discord
image: /images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/flex-discord-thumbnail.png
canonicalURL: /blog/discord-and-twilio
url: /blog/discord-and-twilio/
---

*To nasz ostatni post z trzyczęściowej serii o zaangażowaniu klientów na Discordzie. Nasz pierwszy blog, [„Nowa granica dla zaangażowania klientów”](https://seasalt.ai/blog/15-discord-a-new-frontier-for-customer-engagement/), omawiał wzrost popularności Discorda i nową możliwość, jaką stwarza on dla marek, aby tworzyć i uczestniczyć w ich własnych społecznościach internetowych. W części drugiej, [„Jak stworzyć społeczność Discord i bota dla swojej marki”](https://seasalt.ai/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/), omówiliśmy, jak stworzyć serwer Discord dla swojej marki i jak zintegrować bota do zarządzania moderacją serwera, ogłoszeniami, opiniami użytkowników itp. Wreszcie, w tym blogu przedstawimy demonstrację, jak my w Seasalt.ai zintegrowaliśmy pełnoprawne centrum kontaktowe z serwerem Discord, umożliwiając markom obsługę wszystkich aspektów obsługi klienta na platformie.*

## Spis treści
- [Spis treści](#table-of-contents)
- [Demo obsługi klienta Discord](#discord-customer-service-demo)
- [Twilio Flex](#twilio-flex)
- [SeaX](#seax)
- [Serwer demonstracyjny](#demo-server)
  - [Pomoc 1-do-wielu: Oficjalne kanały](#1-to-many-help-official-channels)
  - [Pomoc 1-do-1: Agent obsługi klienta](#1-to-1-help-customer-service-agent)
    - [Baza wiedzy](#knowledge-base)
    - [Przekazywanie agenta na żywo](#live-agent-transfer)
  - [Zarządzanie sprawami](#case-management)
- [Głębokie zanurzenie techniczne](#technical-deep-dive)
  - [Definiowanie przepływu Flex](#define-the-flex-flow)
  - [Tworzenie niestandardowego kanału](#create-a-custom-channel)
  - [Tworzenie serwera HTTP do obsługi bardziej złożonego routingu](#create-an-http-server-to-support-more-complex-routing)
    - [Webhook wiadomości wychodzących](#outbound-messages-webhook)
    - [Integracja bota](#bot-integration)
- [Podsumowanie](#summary)

# Demo obsługi klienta Discord
Jeśli nie możesz się doczekać, aby zobaczyć produkt końcowy, najpierw przedstawimy ostateczny film demonstracyjny:

<iframe width="85%" height="450px" src="https://www.youtube.com/embed/iUK4YkGYI6Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>


Naszym celem jest zademonstrowanie, w jaki sposób Discord może zostać zintegrowany z istniejącym oprogramowaniem obsługi klienta (w tym przypadku [Twilio Flex](https://flex.twilio.com/)), aby dodać dodatkową wartość do oficjalnego serwera marki. Czytaj dalej, aby przyjrzeć się bliżej naszej implementacji.

# Twilio Flex
Twilio to dobrze ugruntowana firma komunikacyjna, która oferuje interfejsy API do zarządzania wiadomościami tekstowymi, połączeniami telefonicznymi, wiadomościami e-mail, wiadomościami czatowymi i innymi. Flex to jeden z flagowych produktów Twilio: skalowalne, oparte na chmurze centrum kontaktowe, które kieruje wiadomości i połączenia z dowolnego źródła do wirtualnych i żywych agentów. Wybraliśmy Flex jako podstawę naszej integracji centrum kontaktowego, ponieważ ma już doskonałe wsparcie dla szerokiej gamy kanałów, takich jak Facebook, SMS i WhatsApp.

# SeaX
SeaX to chmurowe centrum kontaktowe, które jest głęboko zintegrowane z zaawansowanymi funkcjami AI, które pomagają zwiększyć produktywność i zadowolenie klienta. SeaX jest jednym z flagowych produktów Seasalt.ai i został już wdrożony u klientów w ponad 150 krajach. Platforma centrum kontaktowego SeaX jest zbudowana na Twilio Flex i zawiera szereg dodatkowych funkcji, które umożliwiają agentom na żywo lepszą pomoc klientom. Niektóre z najbardziej użytecznych funkcji to wewnętrzne funkcje zamiany tekstu na mowę i mowy na tekst, baza wiedzy oparta na sztucznej inteligencji oraz zintegrowany system zarządzania sprawami. Aby uzyskać więcej informacji na temat wszystkich możliwości platformy SeaX, odwiedź [stronę główną SeaX](https://seax.seasalt.ai/?utm_source=blog/).

# Serwer demonstracyjny
Teraz omówimy, jak skonfigurowaliśmy nasz serwer Discord. Na potrzeby demonstracji wyobraziliśmy sobie scenariusz, w którym nasz serwer był używany jako społeczność dla gry takiej jak Pokémon Go! Poniższa tabela przedstawia niektóre z funkcji zademonstrowanych na naszym serwerze Discord.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-features-2.png" alt="Przegląd funkcji demonstracyjnego serwera Discord obsługi klienta."/>

*Przegląd funkcji demonstracyjnego serwera Discord.*
</center>

## Pomoc 1-do-wielu: Oficjalne kanały
Kilka kanałów na serwerze jest skonfigurowanych tak, aby zapewnić bezpośredni strumień między oficjalnymi administratorami/deweloperami a graczami.
**Kanał ogłoszeń** może być używany tylko przez administratorów i moderatorów, i może zawierać (ręczne lub automatyczne) posty z konta Twitter, strony internetowej lub innych oficjalnych źródeł.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-announcement-channel.jpg" alt="Kanał ogłoszeń na serwerze Discord, zawierający post z oficjalnego konta Twitter."/>

*Kanał #announcements na demonstracyjnym serwerze Discord.*
</center>

**Kanał zgłaszania błędów** umożliwia graczom dyskusję o błędach i problemach uniemożliwiających grę. Administratorzy mogą śledzić ten kanał, aby identyfikować wszelkie problemy w grze, które powinny zostać naprawione. Dodatkowo, użytkownicy mogą przesłać oficjalny raport o błędzie, używając polecenia \`/bug\` z poziomu kanału.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-bug-report-channel.jpg" alt="Kanał zgłaszania błędów na serwerze Discord, zawierający przesłany raport o błędzie."/>

*Kanał #bug-report na demonstracyjnym serwerze Discord, zawierający przesłany raport o błędzie.*
</center>

**Kanał propozycji funkcji** umożliwia graczom dyskusję o zmianach w rozgrywce, ulepszeniach jakości życia, dodatkach do zawartości itp., które chcieliby zobaczyć w grze. Podobnie jak w kanale zgłaszania błędów, ich uwagi mogą być widoczne dla moderatorów Discorda i mogą użyć polecenia \`/new_feature\`, aby przesłać oficjalne żądanie.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-feature-request-channel.jpg" alt="Kanał propozycji funkcji na serwerze Discord, z użytkownikiem wykonującym polecenie slash."/>

*Kanał #feature-request na demonstracyjnym serwerze Discord, z użytkownikiem wykonującym polecenie slash.*
</center>

## Pomoc 1-do-1: Agent obsługi klienta

Gracze mogą użyć polecenia \`/helpme\`, aby wywołać bezpośrednią wiadomość z agentem. Agent obsługi klienta może być zautomatyzowany (agent wirtualny) lub obsługiwany przez agenta na żywo.

Na potrzeby naszej demonstracji skonfigurowaliśmy prostego bota FAQ, który odpytuje bazę wiedzy firmy, aby dostarczyć użytkownikowi odpowiednie sugestie artykułów. Użytkownik może również poprosić o agenta na żywo, a zostanie przeniesiony w tym samym czacie do agenta na żywo w SeaX.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-customer-service-channel.jpg" alt="Kanał obsługi klienta na serwerze Discord, z użytkownikiem wywołującym DM."/>

*Kanał #feature-request na demonstracyjnym serwerze Discord, z użytkownikiem wywołującym DM.*
</center>

### Baza wiedzy
Kiedy użytkownik przesyła zapytanie do wirtualnego agenta serwisowego, agent może skierować użytkownika do odpowiednich artykułów w bazie wiedzy.

### Przekazywanie agenta na żywo
Po tym, jak użytkownik znajdzie się w bezpośredniej wiadomości z botem, może poprosić o agenta na żywo. Natychmiast zostanie powiadomiony, że utworzono dla niego sprawę i że jest przekazywany do agenta na żywo. Kiedy agent na żywo dołączy do czatu, również otrzyma powiadomienie.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-customer-service-dm.jpg" alt="Bezpośrednia wiadomość z obsługą klienta, zawierająca sugestie artykułów KB, przekazywanie agenta na żywo i zarządzanie sprawami."/>

*Bezpośrednia wiadomość z obsługą klienta, zawierająca sugestie artykułów KB, przekazywanie agenta na żywo i zarządzanie sprawami.*
</center>

Na zapleczu, agenci na żywo mogą obsługiwać połączenia przychodzące i wiadomości czatowe ze wszystkich kanałów (SMS, Facebook, Discord, połączenia głosowe itp.) za pośrednictwem jednej platformy. W tym przypadku platformą zaplecza jest SeaX.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/flex-discord-channel.jpg" alt="Interfejs SeaX wyświetlający widok agenta na żywo rozmowy z użytkownikiem na Discordzie."/>

*Interfejs SeaX wyświetlający widok agenta na żywo rozmowy z użytkownikiem na Discordzie.*
</center>

## Zarządzanie sprawami
Jedną z funkcji, którą chcieliśmy podkreślić w tej demonstracji, jest zarządzanie sprawami. Rozwiązanie Discord firmy Seasalt.ai integruje się z systemem zarządzania sprawami SeaX, aby prawidłowo śledzić różne sprawy od użytkowników. Gdy użytkownik wchodzi w interakcję z botem Discord (np. prosi o agenta na żywo lub zgłasza błąd), możemy automatycznie otworzyć nową sprawę i zarejestrować wszystkie ważne informacje o użytkowniku i problemie, którego doświadcza. Pozwala to agentowi na żywo na łatwy dostęp do wszystkich zgłoszonych problemów i upewnienie się, że śledzą użytkowników, dopóki sprawa nie zostanie rozwiązana.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-new-case.png" alt="Tworzenie nowej sprawy w systemie zarządzania sprawami SeaX."/>

*Tworzenie nowej sprawy w systemie zarządzania sprawami SeaX.*

<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-existing-case.png" alt="Wyświetlanie istniejącej sprawy w systemie zarządzania sprawami SeaX."/>

*Wyświetlanie istniejącej sprawy w systemie zarządzania sprawami SeaX.*

</center>

# Głębokie zanurzenie techniczne

Teraz widzieliśmy produkt końcowy i wszystkie funkcje dostępne dla członków serwera i agentów na żywo, którzy im pomagają. Ale jak to wszystko zostało faktycznie zaimplementowane? W naszym ostatnim poście na blogu, „[Jak stworzyć społeczność Discord i bota dla swojej marki](https://seasalt.ai/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/)”, omówiliśmy, jak stworzyć serwer Discord dla swojej marki i jak zintegrować bota Discord do zarządzania nim. Aby wesprzeć tę bardziej zaawansowaną demonstrację, użyliśmy również [SeaChat, silnika AI konwersacyjnej Seasalt.ai](https://chat.seasalt.ai), aby zbudować prostego chatbota, który pozwala naszemu botowi Discord obsługiwać zapytania w języku naturalnym dla użytkowników.

Po stronie SeaX, nasz zespół ściśle współpracował z Twilio, aby stworzyć bogate w funkcje rozwiązanie centrum kontaktowego zbudowane na Twilio Flex. Aby uzyskać więcej informacji na temat Twilio Flex i sposobu działania procesu konfiguracji, możesz przeczytać [Przewodnik szybkiego startu Twilio Flex](https://www.twilio.com/docs/flex/quickstart).

Po przygotowaniu serwera Discord, bota Discord i chatbota oraz upewnieniu się, że mamy działającą instancję SeaX, największym wyzwaniem jest prawidłowe kierowanie wiadomości do i od użytkownika, bota i agentów na żywo w SeaX. Twilio jest fantastyczne w obsłudze routingu wiadomości, więc naszym celem jest obsługa wszystkich poleceń slash z naszego serwera bota Discord, a następnie przekazywanie wszystkich innych wiadomości (takich jak wiadomości bezpośrednie do chatbota lub agenta na żywo) do Twilio.

## Definiowanie przepływu Flex
Pierwszym krokiem jest upewnienie się, że wszystkie wiadomości, które wysyłamy do Twilio, zostaną skierowane we właściwe miejsce. Skonfigurowaliśmy prosty przepływ Twilio, który najpierw sprawdza, czy użytkownik zażądał agenta na żywo, a jeśli tak, przekazuje następujące wiadomości do SeaX. Jeśli użytkownik nie zażądał agenta na żywo, przekazujemy wiadomość do chatbota, aby uzyskać odpowiedź. Aby uzyskać więcej informacji na temat konfiguracji przepływu, zapoznaj się z [dokumentacją Twilio Studio Flow](https://www.twilio.com/docs/studio).

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-flow.png" alt="Prosty przepływ Flex Studio, który kieruje wiadomości przychodzące do chatbota lub do SeaX."/>

*Prosty przepływ Flex Studio, który kieruje wiadomości przychodzące do chatbota lub do SeaX.*
</center>

## Tworzenie niestandardowego kanału
Teraz mamy już pojęcie o tym, jak będą kierowane wiadomości przychodzące. Jednak Discord nie jest natywnie obsługiwanym kanałem przez Twilio. Na szczęście Twilio ma szczegółowy samouczek, jak [dodać niestandardowy kanał czatu do Twilio Flex](https://www.twilio.com/blog/add-custom-chat-channel-twilio-flex). Po zastosowaniu się do instrukcji konfiguracji nowego niestandardowego kanału w Twilio, musimy faktycznie przekazać wiadomości z Discorda do Twilio.

Najpierw konfigurujemy klienta Twilio:

\`\`\`python
from twilio.rest import Client
twilio_client = Client(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)
\`\`\`

Teraz, gdy otrzymamy wiadomość przychodzącą z Discorda, możemy przekazać ją do Twilio za pośrednictwem klienta Twilio. Najpierw powinniśmy sprawdzić, czy użytkownik już istnieje w systemie Twilio i czy ma już otwarty kanał czatu.

\`\`\`python
# wywołaj metodę get_user, aby sprawdzić, czy użytkownik istnieje, i utwórz nowego, jeśli nie
user = await get_user(user_id, twilio_client, TWILIO_SERVICE_SID)

# pobierz kanały, w których znajduje się użytkownik
user_channels = twilio_client.chat \\
        .services(TWILIO_SERVICE_SID) \\
        .users(user_id) \\
        .user_channels \\
        .list()
\`\`\`

Jeśli użytkownik ma istniejący otwarty kanał czatu, musimy go użyć, aby mieć dostęp do historii czatu. Jeśli nie ma istniejącego kanału czatu, tworzymy nowy dla użytkownika:

\`\`\`python
if user_channels:
    channel_sid = user_channels[-1].channel_sid
else:
    channel = twilio_client.flex_api \\
            .channel \\
            .create(
                flex_flow_sid=FLEX_FLOW_ID,
                chat_user_friendly_name=username,
                chat_friendly_name=chat_name,  # -> Przyjazna nazwa kanału czatu
                target=conversation_id,  # -> Tożsamość, która jednoznacznie identyfikuje użytkownika czatu
                identity=conversation_id,  # -> Użytkownik, np. ID DM Discorda
        )
    channel_sid = channel.sid
\`\`\`

Na koniec, gdy mamy otwarty kanał czatu między użytkownikiem Discorda a Twilio, możemy przekazać wiadomość przychodzącą do przepływu Twilio Studio.

\`\`\`python
message = twilio_client.chat \\
        .services(TWILIO_SERVICE_SID) \\
        .channels(channel_sid) \\
        .messages \\
        .create(
            body=message_text,
            from_=user_id,
            x_twilio_webhook_enabled='true',
            attributes=json.dumps(message_json)  # wyślij nagłówki jako atrybut, aby były dostępne później
        )
\`\`\`
Teraz mamy możliwość przekazywania wszystkich naszych przychodzących wiadomości od użytkowników Discorda bezpośrednio do naszego przepływu Twilio Flex. Po stronie bota Discord upewnij się, że wszystkie wiadomości bezpośrednie są przekazywane do Twilio. Teraz możesz spróbować wysłać wiadomość bezpośrednią do bota Discord, a powinieneś zobaczyć ją w logach przepływu Twilio Studio - ale jeszcze nie skończyliśmy!

## Tworzenie serwera HTTP do obsługi bardziej złożonego routingu

### Webhook wiadomości wychodzących
Teraz mamy już pojęcie o tym, jak będą kierowane nasze wiadomości przychodzące. Brakuje nam jednak jeszcze kilku elementów. Po pierwsze, wiemy, że możemy teraz wysyłać wiadomości do Twilio, ale jak odpowiadać naszym użytkownikom na Discordzie? Nasz bot Discord jest jedynym, który ma uprawnienia do wysyłania wiadomości na nasz serwer Discord i do użytkowników, a Twilio i tak nie wie, jak odesłać nasze wiadomości z powrotem na serwer Discord. Rozwiązaniem jest skonfigurowanie webhooka wiadomości wychodzących, który będzie uruchamiany za każdym razem, gdy w kanale czatu Twilio pojawi się nowa wiadomość. W ramach tego webhooka możemy następnie użyć naszego bota Discord do przekazania wiadomości z powrotem na nasz serwer.

Aby to zrobić, integrujemy naszego bota Discord z bardziej rozbudowanym serwerem HTTP. Użyliśmy [FastAPI](https://fastapi.tiangolo.com/), aby skonfigurować prosty punkt końcowy POST, który będzie służył jako nasz webhook wiadomości wychodzących. Po skonfigurowaniu serwera i uruchomieniu bota Discord obok niego, możemy zdefiniować punkt końcowy POST.

Ten punkt końcowy będzie odbierał każdą pojedynczą wiadomość dodaną do kanału czatu, więc najpierw chcemy odfiltrować wszystko oprócz wiadomości wychodzących z SeaX. Następnie będziemy musieli pobrać prawidłowy identyfikator kanału z treści wiadomości, aby wiedzieć, dokąd przekazać wiadomość. Na koniec możemy użyć klienta Discord, aby przekazać wiadomość do kanału Discord.

\`\`\`python
@app.post("/forward-to-discord", status_code=200)
async def forward_discord_message(request: Request, response: Response) -> None:
    raw_body = await request.body()
    body = urllib.parse.parse_qs(raw_body.decode())

    # zwracaj uwagę tylko na wiadomości z SDK (Flex, wszystkie inne będą pochodzić z API)
    if not body.get('Source') == ['SDK']:
        return

    # Wiadomości z Flex nie zawierają conversationId oryginalnej wiadomości
    # Potrzebujemy convId, aby wysłać wiadomość z powrotem do konwersacji na GBM
    # Pobierz poprzednią wiadomość i wyodrębnij conversationId
    message = twilio_client.chat \\
            .services(TWILIO_SERVICE_SID) \\
            .channels(body.get("ChannelSid")[0]) \\
            .messages.list(limit=1)[0]

    attributes = json.loads(message.attributes)

    channel = discord_client.get_channel(attributes.get("channel", {}).get("id"))
    if channel:
        await channel.send(body.get("Body", [""])[0].get("text"))
    else:
        logger.error(f"Nie można znaleźć kanału Discord o identyfikatorze: {get_channel_id(req)}!")
        response.status_code = 400
\`\`\`

Na koniec, aby wiadomości były wysyłane do naszego punktu końcowego, musimy poinformować Twilio, czym jest nasz nowy webhook. Każdy kanał czatu musi mieć skonfigurowany własny webhook. Więc, jeśli wrócimy do miejsca, w którym pierwotnie utworzyliśmy nowy kanał czatu dla użytkownika, możemy dodać dodatkowy kod, aby skonfigurować webhook:

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

### Integracja bota

Teraz wiadomości wychodzące z SeaX powinny być prawidłowo kierowane z powrotem na nasz serwer Discord. Ale nadal nie zajęliśmy się wiadomościami, które trafiają do chatbota. Musimy skonfigurować ostatni punkt końcowy, który zostanie uruchomiony z przepływu Twilio Studio i będzie odbierał wiadomość użytkownika, odpytywał bota i zwracał odpowiedź do Discorda.

\`\`\`python
@app.post("/chatbot-to-discord", status_code=200)
async def receive_discord_message(request: Request, response: Response):
    """Odbierz żądanie POST od Twilio, odpytaj bota i zwróć odpowiedź do Discorda."""
    req = await request.body()
    # oddziel oryginalną treść wiadomości od treści Twilio
    twilio_body, original_message_body = separate_original_message_body(req.decode())

    bot_response = await query_bot(original_message_body, bot_info)

    if bot_response:
        channel = discord_client.get_channel(original_message_body.get("channel_id"))
        if channel:
            for item in bot_response:
                await channel.send(item.get("text"))
\`\`\`

Upewnij się, że przepływ Twilio Studio ma prawidłowy webhook do kierowania wiadomości do bota. Teraz zakończyliśmy routing wiadomości! Możemy zobaczyć widok z góry wszystkich routingu wiadomości na tym diagramie:

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-routing-diagram.jpg" alt="Diagram routingu wiadomości."/>

*Diagram routingu wiadomości.*
</center>

# Podsumowanie
Podsumowując, w tej serii blogów omówiliśmy wzrost popularności Discorda i możliwości, jakie stwarza on dla marek jako nowa platforma do angażowania się z klientami. Przeszliśmy przez niektóre podstawowe funkcje Discorda, aby pokazać, jak marka może założyć własną społeczność internetową, a także bardziej zaawansowane funkcje, które pozwalają markom zautomatyzować moderację i obsługę klienta na ich serwerze za pomocą botów Discord. Na koniec, podzieliliśmy się naszą demonstracją, jak zintegrowaliśmy Discord z naszą platformą obsługi klienta, SeaX, aby wprowadzić zaawansowane funkcje do społeczności Discord, takie jak przekazywanie agenta na żywo, zarządzanie sprawami i wyszukiwanie w bazie wiedzy oparte na sztucznej inteligencji.
Aby uzyskać osobistą demonstrację lub dowiedzieć się, jak Seasalt.ai może pomóc w zaspokojeniu Twoich specyficznych potrzeb biznesowych, wypełnij nasz formularz „[Zarezerwuj demo](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting)”. Aby uzyskać więcej informacji na temat integracji Flex/Discord lub skontaktować się z nami, odwiedź [listę partnerów Twilio firmy Seasalt.ai](https://showcase.twilio.com/partner-listing/a8E8Z000000PDCQUA4).`;export{e as default};

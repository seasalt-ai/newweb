const o=`---
title: "Discord (2/3): Jak stworzyć społeczność i bota na Discordzie dla Twojej marki"
metatitle: "Discord (2/3): Stwórz społeczność i bota na Discordzie dla Twojej marki"
date: 2022-05-31 13:29:51-07:00
draft: false
author: Kim Dodds
description: "W tym blogu przeprowadzimy Cię przez proces tworzenia serwera dla Twojej marki i podłączania bota, który może automatyzować moderację, zgłaszanie błędów, ogłoszenia itp."
weight: 1
tags:
  - SeaX
  - Discord
image: /images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-community-and-bot-for-your-brand.jpg
canonicalURL: /blog/create-a-discord-community-and-bot/
url: /blog/create-a-discord-community-and-bot/
---

*Nasz wpis na blogu, [„Discord: Nowa granica zaangażowania klienta”](https://seasalt.ai/blog/15-discord-a-new-frontier-for-customer-engagement/), omówił wzrost popularności Discorda i to, jak marki mogą wykorzystać tę nową platformę społecznościową do tworzenia własnych społeczności online i angażowania się z klientami. W tym blogu przeprowadzimy Cię przez proces tworzenia nowego oficjalnego serwera dla Twojej marki, w tym jak podłączyć bota, który może automatyzować zadania takie jak moderacja, zgłaszanie błędów, ogłoszenia itp.*

## Spis treści
- [Konfiguracja serwera](#konfiguracja-serwera)
    - [Utwórz nowy serwer Discord](#utwórz-nowy-serwer-discord)
    - [Przekształć serwer w „Serwer Społecznościowy”](#przekształć-serwer-w-serwer-społecznościowy)
    - [Skonfiguruj kanały, wydarzenia i inne funkcje](#skonfiguruj-kanały-wydarzenia-i-inne-funkcje)
    - [Rozgłoś to!](#rozgłoś-to)
- [Konfiguracja bota Discord](#konfiguracja-bota-discord)
    - [Utwórz nowego bota w Portalu Deweloperów Discorda](#utwórz-nowego-bota-w-portalu-deweloperów-discorda)
    - [Stwórz prostego bota Discord za pomocą PyCord](#stwórz-prostego-bota-discord-za-pomocą-pycord)
    - [Zaproś bota Discord](#zaproś-bota-discord)
    - [Przetestuj integrację](#przetestuj-integrację)

# Konfiguracja serwera

## Utwórz nowy serwer Discord
Z poziomu aplikacji Discord kliknij przycisk „Dodaj serwer” w lewym dolnym rogu.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/create-new-discord-server.png" alt="Tworzenie nowego serwera Discord."/>

*Monit podczas tworzenia nowego serwera Discord.*
</center>

Możesz wybrać szablon, jeśli chcesz zacząć od kilku kanałów, które zostaną dla Ciebie utworzone, lub możesz zacząć od pustej kartki. I pierwszy krok jest tak prosty, Twój serwer został utworzony!

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/new-discord-server.png" alt="Nowo utworzony serwer Discord."/>

*Nowo utworzony serwer Discord.*
</center>

## Przekształć serwer w „Serwer Społecznościowy”

Zdecydowanie zaleca się włączenie funkcji „społecznościowych” serwera Discord. Przekształcając serwer w serwer społecznościowy, włączasz dodatkowe narzędzia, które mogą pomóc w moderowaniu, prowadzeniu i rozwijaniu serwera. W szczególności serwery społecznościowe mają dostęp do następujących funkcji:

- **Ekran powitalny**: Przedstawia nowych użytkowników Twojemu serwerowi
- **Kanał ogłoszeń**: Umożliwia nadawanie wiadomości do użytkowników
- **Statystyki serwera**: Przeglądaj analizy dotyczące Twojej społeczności i użytkowników
- **Odkrywanie**: Reklamuj swoją społeczność w katalogu serwerów Discorda

Obok nazwy serwera w lewym górnym rogu kliknij rozwijane menu i wybierz „Ustawienia serwera”. Kliknij zakładkę „Włącz społeczność” po lewej stronie i wybierz „Rozpocznij”.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/convert-to-community-discord-server.png" alt="Przekształcanie zwykłego serwera Discord w serwer społecznościowy."/>

*Włączanie ustawień serwera społecznościowego.*
</center>

Kontynuuj przez wymagane ustawienia. Włączenie społeczności wymaga od serwera dodatkowej weryfikacji użytkowników, włączenia filtra czatu i skonfigurowania kanału zasad.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-community-setup.png" alt="Konfiguracja serwera społecznościowego Discord."/>

*Konfiguracja serwera społecznościowego.*
</center>

Po włączeniu społeczności masz dostęp do kilku nowych funkcji. Dwie z najbardziej przydatnych funkcji to wiadomość powitalna i weryfikacja członkostwa:

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-server-welcome-page.png" alt="Przykład wiadomości powitalnej serwera."/>

*Przykład wiadomości powitalnej serwera.*

<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-server-membership-screening.png" alt="Ustawienia weryfikacji członkostwa."/>

*Ustawienia weryfikacji członkostwa.*
</center>

## Skonfiguruj kanały, wydarzenia i inne funkcje
Po skonfigurowaniu serwera społecznościowego masz dostęp do nowych funkcji również z głównej strony serwera.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-server-channel-types.png" alt="Tworzenie nowego kanału na serwerze Discord.", style="width:50%"/>

*Tworzenie nowego kanału.*

<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-server-channels.png" alt="Przykład kanałów serwera społecznościowego Discord." style="width:50%"/>

*Kanały serwera społecznościowego.*
</center>

Podczas tworzenia nowego kanału masz dostęp do dwóch nowych typów kanałów: ogłoszeniowego i scenicznego. Kanał ogłoszeniowy może być używany tylko przez moderatorów i jest przydatny do oficjalnych postów i ogłoszeń – wiele serwerów będzie miało boty automatycznie publikujące swoje oficjalne kanały Twittera lub posty na forum na tym kanale. Kanał „sceniczny” to specjalny rodzaj kanału głosowego, który jest przydatny do organizowania wydarzeń z publicznością na żywo. Gospodarz ma możliwość moderowania innych mówców (w przeciwieństwie do zwykłego kanału głosowego, gdzie panuje wolna amerykanka).

Po skonfigurowaniu serwera może on wyglądać mniej więcej tak:

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/customized-discord-server.png" alt="W pełni dostosowany serwer Discord."/>

*W pełni dostosowany serwer społecznościowy.*
</center>

## Rozgłoś to!
Po skonfigurowaniu serwera możesz zacząć zapraszać ludzi!
Discord oferuje darmowy, gotowy widżet, który można osadzić na dowolnej stronie internetowej, aby reklamować swój serwer.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-server-widget.png" alt="Ustawienia widżetu serwera Discord."/>

*Ustawienia widżetu serwera.*

<iframe src="https://discordapp.com/widget?id=966505646944055326&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>

*Przykład działającego widżetu dla serwera Discord Seasalt.ai Near Me Messaging.*

</center>

Aby zbudować zaufanie wśród potencjalnych użytkowników, możesz opcjonalnie skontaktować się z pomocą techniczną Discorda, aby zweryfikować swój serwer. Weryfikacja umieści ikonę „zweryfikowany” obok nazwy serwera, co oznacza, że serwer jest oficjalnie powiązaną społecznością firmy, marki i osoby publicznej. Wymagania dotyczące weryfikacji można znaleźć na [oficjalnej stronie Discorda](https://support.discord.com/hc/en-us/articles/360001107231-Verified-Server-Requirements).

Gdy Twój serwer ruszy i będzie miał sporą liczbę użytkowników, Discord oferuje więcej możliwości reklamowania serwera wewnętrznie. Gdy Twój serwer ma co najmniej 8 tygodni i ponad 500 użytkowników, możesz ubiegać się o partnerstwo Discorda, co daje Twojemu serwerowi specjalne, ekskluzywne dla partnerów korzyści. Gdy osiągniesz ponad 1000 użytkowników, możesz dołączyć do Server Discovery, co pozwoli każdemu użytkownikowi Discorda odkryć i dołączyć do Twojego serwera.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-server-discovery.png" alt="Ustawienia i wymagania Discord Discovery."/>

*Ustawienia i wymagania Discord Discovery.*
</center>

# Konfiguracja bota Discord
Teraz, gdy skonfigurowałeś serwer, możesz go ulepszyć, dodając bota do automatyzacji niektórych procesów, takich jak moderacja, opinie użytkowników i ogłoszenia. Czytaj dalej w następnej sekcji, aby dowiedzieć się, jak skonfigurować prostego bota, a następnie bądź na bieżąco z kolejnym blogiem z naszej serii, aby zobaczyć, jak możesz zintegrować pełnoprawną obsługę klienta w swoim serwerze Discord.

## Utwórz nowego bota w Portalu Deweloperów Discorda
Utwórz konto na [Portalu Deweloperów Discorda](https://discord.com/developers/applications). Utwórz „Nową aplikację” i nadaj jej nazwę.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/new-discord-application.png" alt="Utwórz nową aplikację w Portalu Deweloperów Discorda."/>

*Panel dewelopera Discorda: Aplikacje.*
</center>

Wybierz swoją nową aplikację i kliknij zakładkę „Bot” po lewej stronie.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/new-discord-bot.png" alt="Ustawienia bota aplikacji."/>

*Ustawienia aplikacji Discord.*
</center>

Kliknij „Dodaj bota”, aby utworzyć swojego bota Discord.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-bot-settings.png" alt="Utwórz nowego bota Discord."/>

*Tworzenie nowego bota Discord.*
</center>

Po utworzeniu wygeneruj i skopiuj token bota. Na koniec upewnij się, że uprawnienia do wysyłania wiadomości są włączone.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-bot-messaging-permissions.png" alt="Uprawnienia do wysyłania wiadomości bota Discord."/>

*Tworzenie nowego bota Discord.*
</center>

## Stwórz prostego bota Discord za pomocą PyCord

Używamy [biblioteki PyCord](https://docs.pycord.dev/en/master/) jako opakowania Pythona dla API Discorda.

1. Zainstaluj PyCord i utwórz nowy plik Pythona dla swojego bota Discord.
2. Zaimportuj pakiet discord i utwórz instancję klienta discord.
3. Użyj opakowania \`event\` klienta, aby utworzyć metodę \`on_message\`. Ta metoda będzie odbierać każdą wiadomość wysłaną na kanał, do którego bot ma dostęp.
    a. W metodzie najpierw sprawdź, czy wiadomość pochodzi od samego bota, i zignoruj, jeśli tak.
    b. W przeciwnym razie zaczniemy od reagowania tylko na wiadomości zaczynające się od \`$bot\` – jeśli wiadomość zaczyna się od tego, po prostu odpowiemy na ten sam kanał, mówiąc \`Otrzymałem Twoją wiadomość!\`.
4. Na koniec skryptu upewnij się, że uruchomisz klienta discord, aby zaczął nasłuchiwać zdarzeń na kanale.

\`\`\`python
import discord

discord_client = discord.Bot()
discord_token = “xxxxxxxxxxxx”
 
@discord_client.event
async def on_message(message):
    """Listen and react to messages."""
    # Check if the message is from the bot itself
    if message.author == discord_client.user:
        return

    msg = message.content
    if msg.startswith("$bot") or isinstance(message.channel, discord.DMChannel):
        await message.channel.send(“I got your message!”)

discord_client.run(discord_token)
\`\`\`
`;export{o as default};

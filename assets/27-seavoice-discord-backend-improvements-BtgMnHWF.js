const a=`---
title: "SeaVoice STT/TTS Discord Bot: Ulepszenia backendu i stabilności"
metatitle: "SeaVoice STT/TTS Discord Bot: Ulepszenia backendu i stabilno..."
date: 2022-12-13 11:58:34-08:00
modified_date: 2025-07-28T16:56:53Z
draft: false
author: Sydney Burgess, Kim Dodds, Drake Farmer, Jack Harvison, Dylan Strong, Cody Vernon
description: "Dzięki najnowszej wersji, SeaVoice Discord Bot wprowadza masowe ulepszenia backendu, które poprawiają stabilność bota i wspomagają przyszły rozwój."
weight: 1
tags:
  - SeaVoice
  - Discord
image: images/blog/27-discord-backend-improvements/seavoice-discord-stt-tts-bot-backend-improvements.jpg
canonicalURL: /blog/seavoice-discord-backend-improvements/
url: /blog/seavoice-discord-backend-improvements/
---


*SeaVoice Discord Bot zyskuje na popularności jako jedna z najlepszych opcji do transkrypcji mowy w kanałach głosowych Discord. Dzięki najnowszej wersji wprowadzamy masowe ulepszenia backendu, które poprawiają stabilność bota i wspomagają przyszły rozwój.*

# SeaVoice pamięta: Baza danych online!

Witajcie wszyscy, ostatnio pracowaliśmy nad kilkoma rzeczami za kulisami dla SeaVoice Discord Bot, którymi chcielibyśmy się podzielić!

Jak widzieliście w naszym poprzednim poście na blogu, dodaliśmy wiele funkcji do bota SeaVoice, takich jak nasze nowe nagrania rozmów i transkrypcje. Oprócz tych zmian, daliśmy botowi SeaVoice Discord możliwość zapamiętywania tego, co zrobił: wszystko, od poleceń po logowanie błędów. Teraz, gdy bot do ciebie mówi lub używasz go do nagrywania rozmowy, wszystkie te informacje są zapisywane w zorganizowany sposób.

## Co to oznacza dla użytkowników
Możesz zapytać, co to oznacza dla Ciebie?

Cóż, na początek, nasza nowa funkcja transkrypcji i pobierania audio nie byłaby możliwa bez tych ulepszeń backendu! Możemy teraz również automatycznie przechowywać wszelkie niefortunne awarie, których doświadczasz, aby nasz zespół programistów mógł zacząć naprawiać te problemy, zanim jeszcze je zauważysz. Dodatkowo, jeśli ktoś zdecyduje, że nie chce już przechowywać swoich danych w naszym systemie, ta nowa organizacja pozwala nam szybko znaleźć, pobrać i/lub usunąć wszelkie dane według serwera, kanału, użytkownika, daty itp.

Co więcej, otwiera to drzwi dla nowych funkcji, takich jak śledzenie statystyk, automatyczna moderacja i wiele innych. Moderatorzy, czy chcielibyście upewnić się, że zasady waszego serwera są przestrzegane lub sprawdzić, jak często bot jest używany na waszym serwerze? Może chcecie odtworzyć tę przezabawną rozmowę, którą mieliście w zeszłym tygodniu? Dzięki solidnie już ugruntowanej i używanej w bocie produkcyjnym strukturze bazy danych, szeroki wachlarz nowych funkcji jest łatwiej dostępny.

## Prywatność danych

Naturalnie, ilekroć rozmawiamy o zapisywaniu danych użytkownika, pojawia się pytanie o prywatność i bezpieczeństwo danych. Oto kilka kluczowych punktów dotyczących sposobu, w jaki obsługujemy Twoje dane:
- Wszystkie dane użytkownika są przechowywane na bezpiecznym serwerze zdalnym, do którego dostęp ma tylko kilku wybranych pracowników Seasalt.ai.
- SeaVoice rejestruje tylko dane dostarczone przez Discord, które użytkownicy dostarczają podczas interakcji z botem SeaVoice; obejmuje to:
    - Nazwa i identyfikator serwera, kanału, użytkownika
    - Tekst wprowadzony w polecenie \`/speak\`
    - Dźwięk wypowiedziany w kanale głosowym, gdy bot wykonuje polecenie \`/recognize\`
- Dane te będą wykorzystywane wyłącznie przez Seasalt.ai w celu ulepszania usług.
- Możesz zażądać usunięcia wszystkich lub części swoich danych w dowolnym momencie.

Pełne szczegóły znajdują się w [Polityce prywatności Seasalt.ai](https://seasalt.ai/privacy/).

## Przyszłe kierunki

Wiele z tej części aktualizacji nie będzie zauważalnych, ale dla nas najtrudniejsza część jest za nami, a teraz możemy zacząć pracować nad projektami, które pozwolą Ci dostosować i używać SeaVoice Discord Bot jeszcze bardziej, niż myślałeś, że to możliwe.
Jedną z funkcji na horyzoncie są konfigurowalne ustawienia serwera i/lub użytkownika.
Z bazą danych na miejscu, pozwoli nam to w przyszłości zapisywać preferencje, takie jak to, czy chcesz być przypominany o nagrywaniu czatu głosowego, kto otrzymuje link do pobrania transkrypcji rozmowy, lub kto chce zrezygnować z nagrywania.

Masz jakieś pomysły, które chciałbyś, aby zostały dodane, teraz gdy możemy zapisywać dane? Śmiało, prześlij nam swoje sugestie na [Oficjalnym Serwerze Discord SeaVoice](https://discord.gg/dfAYfwBQ)!

<center>
<iframe src="https://discordapp.com/widget?id=919037515514654721&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
</center>

## Wypróbuj!

Jeśli jeszcze nie wypróbowałeś najnowszej wersji bota SeaVoice, spróbuj! Zaproś [SeaVoice Discord Bot](https://discord.com/oauth2/authorize?client_id=1001955060210749492&scope=bot) na swój serwer.
Zachęcamy również do zapoznania się z [dokumentacją bota SeaVoice](https://wiki.seasalt.ai/seavoice/discord/discord-bot/), aby dowiedzieć się, jak najlepiej wykorzystać bota do potrzeb swojej społeczności.

Bądź na bieżąco z nadchodzącymi ekscytującymi aktualizacjami!

Z poważaniem,

Zespół bota SeaVoice.
`;export{a as default};

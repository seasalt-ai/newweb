const e=`---
title: "Nadaj swojemu centrum kontaktowemu własny głos dzięki SeaX Voice Intelligence"
metatitle: "Pozwól swojemu centrum kontaktowemu mówić dzięki SeaX Voice Intelligence"
date: 2022-08-02 17:24:00-07:00
modified_date: 2025-07-29 20:45:17+00:00
draft: false
author: Kim Dodds, Cody Kim, Xuchen Yao, Guoguo Chen
description: "W tym blogu pokażemy, jak wewnętrzne silniki Seasalt.ai do zamiany tekstu na mowę i mowy na tekst mogą usprawnić różne aspekty platformy SeaX."
weight: 1
tags:
  - SeaX
image: /images/blog/21-seax-voice-intelligence/thumbnail.png
canonicalURL: /blog/seax-voice-intelligence/
url: /blog/seax-voice-intelligence/
---

*Do tej pory w naszej [serii blogów SeaX](https://seasalt.ai/tags/seax/) przedstawiliśmy szeroki przegląd flagowego produktu Seasalt.ai: SeaX. Omówiliśmy również dwie kluczowe funkcje, które wyróżniają SeaX spośród tradycyjnych centrów telefonicznych: po pierwsze, SeaX jest wielokanałowy, co oznacza, że łatwiej jest wchodzić w interakcje z klientami na dowolnym kanale, a po drugie, platforma jest rozproszonym centrum kontaktowym, co pozwala płynnie kierować wiadomości i połączenia od klientów z całego świata do rozproszonych agentów w różnych lokalizacjach.*

*Teraz, gdy omówiliśmy podstawy platformy SeaX, przejdziemy do zaawansowanych funkcji AI i automatyzacji, które wyróżniają SeaX spośród innych rozproszonych wielokanałowych centrów kontaktowych. W tym blogu pokażemy, jak wewnętrzne silniki Seasalt.ai do zamiany tekstu na mowę i mowy na tekst mogą usprawnić różne aspekty platformy SeaX.*

# Spis treści
- [Wprowadzenie do inteligencji głosowej](#into-to-voice-intelligence)
- [Co wyróżnia Seasalt.ai](#what-sets-seasaltai-apart)
    - [Mowa na tekst](#speech-to-text)
    - [Tekst na mowę](#text-to-speech)
- [TTS i STT w SeaX](#tts-and-stt-in-seax)
    - [IVR głosowy](#voice-ivr)
    - [Wiadomość o niedostępności](#unavailable-message)
    - [Transkrypcja na żywo](#live-transcription)
    - [I więcej...](#and-more)

# Wprowadzenie do inteligencji głosowej

Inteligencja głosowa to wykorzystanie sztucznej inteligencji do analizowania i wyciągania wniosków z danych głosowych. Chociaż w poprzedniej dekadzie nastąpił niezwykły rozwój technologii głosowych, ich wykorzystanie w środowiskach korporacyjnych jest nadal nieco ograniczone. Firmy nadal gromadzą terabajty danych głosowych, ale w większości przypadków nie są one wykorzystywane w pełni.

Jednym z powodów jest to, że dane głosowe są trudniejsze do przetworzenia niż inne formy danych, takie jak podstawowe statystyki, a nawet zwykłe dane tekstowe. Dane mowy są unikalne na wiele różnych sposobów:
1. Są zależne od języka, z dialektami i akcentami, więc trudno jest uchwycić 100% informacji
2. Ich jakość różni się w zależności od kanałów (telefonia vs. VoIP, mono vs. stereo), częstotliwości próbkowania (8KHz vs. 16KHz), dokładności reprezentacji (8bit, 16 bit, 32bit) i dźwięków otoczenia, takich jak szumy tła
3. Trudniej je interpretować: od emocji mowy po identyfikację mówcy i semantykę znaczenia

Jednakże, gdy są odpowiednio obsługiwane za pomocą odpowiednich narzędzi, inteligencja głosowa może przynieść ogromne korzyści firmom, które jej używają. Między innymi, możliwość prawidłowego zarządzania danymi głosowymi odblokowuje możliwość korzystania ze spersonalizowanej transkrypcji mowy na tekst, co może sprawić, że rozmowy będą przeszukiwalne, indeksowalne i wnikliwe, a także umożliwia dalsze przetwarzanie NLP. W miarę gromadzenia większej ilości danych możliwe są również ulepszenia tych usług, takie jak: zwiększenie dokładności transkrypcji, zwiększenie zasięgu przypadków użycia oraz dostarczanie dostosowywalnych modeli mowy i języka w celu dostosowania do nowych języków i dialektów.

# Co wyróżnia Seasalt.ai

Seasalt.ai dostarcza technologie i produkty AI do komunikacji w chmurze dla klientów korporacyjnych.
Opracowaliśmy wewnętrzne technologie mowy i języka dla wiadomości tekstowych
i połączeń głosowych w centrach kontaktowych przedsiębiorstw. Nasz silnik języka naturalnego obsługuje szeroki
zakres języków o wysokich i niskich zasobach: birmański, chiński, angielski, filipiński,
niemiecki, indonezyjski, khmerski, laotański, malajski, hiszpański, tamilski, tajski, wietnamski itp.
Seasalt.ai jest finansowany przez fundusze venture i prowadzony przez grupę wiodących światowych ekspertów w dziedzinie głębokiego rozpoznawania mowy,
syntezy mowy neuronowej i dialogów w języku naturalnym.

Obejrzyj nasz film demonstracyjny zamiany mowy na tekst:
<iframe width="85%" height="450px" src="https://www.youtube.com/embed/Log8usX8ViE" title="Odtwarzacz wideo YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

## Mowa na tekst

<center>
<img src="/images/blog/21-seax-voice-intelligence/STT.png" alt="Grafika mowy na tekst."/>
</center>

Nasz silnik zamiany mowy na tekst przyjmuje dźwięk mowy i tworzy transkrypcje w czasie rzeczywistym. Zaczynając od dźwięku, wyodrębniamy cechy fonetyczne, konwertujemy te cechy na fonemy, a następnie mapujemy te fonemy na ortografię języka docelowego. Nasz obecny system jest w stanie transkrybować kilka języków, w tym angielski i chiński, a kolejne języki są stale dodawane.

Obejrzyj nasz film demonstracyjny dostosowywania mowy na tekst, aby zobaczyć, jak silnik STT Seasalt można dostosować do dowolnej dziedziny:
<iframe width="85%" height="450px" src="https://www.youtube.com/embed/1YEU6mexzWQ" title="Odtwarzacz wideo YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

## Tekst na mowę

<center>
<img src="/images/blog/21-seax-voice-intelligence/TTS.png" alt="Grafika tekstu na mowę."/>
</center>

Tekst na mowę to proces syntezy realistycznej mowy ludzkiej z naturalną intonacją i kadencją wyłącznie z tekstu. Nasz model pobiera zwykły tekst, tłumaczy ten tekst na fonemy, a następnie konwertuje fonemy na dźwięk, przewidując jednocześnie odpowiednią wysokość, czas trwania i głośność w każdym kroku czasowym, aby uzyskać najbardziej realistyczne wrażenia TTS. Jeśli wynik końcowy nie jest idealny, zapewniamy możliwość dostrojenia zsyntetyzowanego dźwięku, w tym wymowy słów, pauz i akcentu.

Obejrzyj nasz film demonstracyjny dostosowywania zamiany tekstu na mowę, aby zobaczyć, jak wyjście silnika TTS Seasalt można dostosować, aby zapewnić realistyczną mowę syntetyczną:

<iframe width="85%" height="450px" src="https://www.youtube.com/embed/GJCOhTtImp8" title="Odtwarzacz wideo YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

Możesz również sprawdzić [stronę TTS](https://suite.seasalt.ai/tts) na naszej stronie internetowej, aby posłuchać przykładów niektórych naszych zsyntetyzowanych głosów, w tym Toma Hanksa, Davida Attenborough i Reese Witherspoon.

# TTS i STT w SeaX

## IVR głosowy

<center>
<img src="/images/blog/21-seax-voice-intelligence/flow.png" alt="Przepływ IVR głosowego wykorzystujący silnik mowy na tekst Seasalt.ai do transkrypcji w czasie rzeczywistym i kierowania połączeń."/>

*Przepływ IVR głosowego wykorzystujący silnik mowy na tekst Seasalt.ai do transkrypcji w czasie rzeczywistym i kierowania połączeń.*
</center>

Inteligencja głosowa może zacząć pomagać, zanim połączenia zostaną nawet wyświetlone na platformie SeaX, upewniając się, że połączenia są kierowane do właściwego miejsca i zbierając ważne informacje przed przekazaniem połączenia agentowi. SeaX używa Twilio Studio do dostosowywania przepływów kierowania połączeń i wiadomości. Ale możemy również zintegrować nasz silnik mowy na tekst w przepływie IVR, aby umożliwić klientowi użycie języka naturalnego do kierowania połączenia (zamiast tradycyjnego doświadczenia „naciśnij 1 dla…”). Dodatkowo, jeśli Twoja firma jest zainteresowana użyciem chatbota do interakcji z klientami, możemy pójść o krok dalej, nadając Twojemu chatbotowi głos do rozmowy z klientami przez telefon za pomocą naszego silnika zamiany tekstu na mowę.

## Wiadomość o niedostępności

<center>
<img src="/images/blog/21-seax-voice-intelligence/unavailable-message.png" alt="Konfiguracja wiadomości o niedostępności SeaX przy użyciu zamiany tekstu na mowę."/>

*Konfiguracja wiadomości o niedostępności SeaX przy użyciu zamiany tekstu na mowę.*
</center>

Nasza technologia zamiany tekstu na mowę pozwala również na wysoce konfigurowalne wiadomości głosowe. Na przykład, mogą być one wyzwalane, gdy klient dzwoni po godzinach pracy, lub jeśli klient musi zostać wstrzymany, czekając na dostępnego agenta.

## Transkrypcja na żywo

<center>
<img src="/images/blog/21-seax-voice-intelligence/live-transcription.jpg" alt="Transkrypcja rozmowy na żywo z wyświetlaniem analizy agentowi w SeaX."/>

*Transkrypcja rozmowy na żywo z wyświetlaniem analizy agentowi w SeaX.*
</center>

Po nawiązaniu połączenia z agentem, nasz silnik zamiany mowy na tekst zapewnia dokładne transkrypcje rozmowy w czasie rzeczywistym dla celów referencyjnych agenta. Pozwala to agentowi odwoływać się do poprzednich punktów rozmowy i/lub dwukrotnie sprawdzać swoje zrozumienie tego, co powiedział klient. Dodatkowo, te transkrypcje są niezwykle przydatne do zastosowań niższego poziomu, takich jak ekstrakcja tematów, ekstrakcja działań, podsumowanie, analiza spotkań itp.

## I więcej...

Powyższe to tylko kilka sposobów, w jakie SeaX integruje zaawansowaną inteligencję głosową, aby skrócić czas oczekiwania, poprawić wydajność agentów i zapewnić klientom i agentom ogólnie płynne doświadczenie. Aby dowiedzieć się więcej o zaawansowanych funkcjach, które oferuje platforma SeaX, bądź na bieżąco z naszymi kolejnymi wpisami na blogu, które obejmują bazę wiedzy AI, zarządzanie sprawami i masowe wiadomości SMS. Aby uzyskać osobistą demonstrację i omówić, w jaki sposób platforma SeaX może zaspokoić Twoje specyficzne potrzeby biznesowe, wypełnij nasz [formularz rezerwacji demonstracji](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting).
`;export{e as default};

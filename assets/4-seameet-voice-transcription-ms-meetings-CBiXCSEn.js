const e=`---
title: "Od Demo do Sukcesu: Pułapki Nowoczesnych Spotkań (2/5)"
metatitle: "Od Demo do Sukcesu (2/5): Pułapki Nowoczesnych Spotkań"
date: 2021-07-30
draft: false
author: Cody Kim
description: "W drugiej części tej serii blogów śledź podróż Seasalt.ai do stworzenia SeaMeet, naszego wspólnego rozwiązania do nowoczesnych spotkań."
weight: 1
tags:
  - SeaMeet
image: images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/SeaMeet animation.gif
canonicalURL: /blog/seameet-voice-and-microsoft-modern-meetings/
url: /blog/seameet-voice-and-microsoft-modern-meetings/
---

*W całej tej serii blogów śledź podróż Seasalt.ai do stworzenia wszechstronnego doświadczenia nowoczesnych spotkań, zaczynając od skromnych początków, poprzez optymalizację naszych usług na różnych sprzętach i modelach, po integrację najnowocześniejszych systemów NLP i wreszcie kończąc na pełnej realizacji SeaMeet, naszego wspólnego rozwiązania do nowoczesnych spotkań.*

## Pułapki Nowoczesnych Spotkań

Podczas naszego rozwoju napotkaliśmy wiele nieprzewidywalnych przeszkód bez jasnych przyczyn ani rozwiązań.

### Szybki Start

Pierwszą przeszkodą było uruchomienie naszych narzędzi. Azure dostarczyło próbkę Modern Meetings, z której byliśmy zadowoleni, że jest kompatybilna z Linuksem, ale okazało się, że użycie SDK na Windows do uruchomienia demo było znacznie łatwiejsze – cóż, w końcu był to produkt Microsoftu. Po wielu nieudanych próbach uruchomienia dostarczonej próbki na Linuksie, ostatecznie musieliśmy porzucić tę ścieżkę i uciec się do Windows. W końcu mieliśmy działający transkrybent mowy, co było ogromnym początkiem.

### Opóźnienie

Jednym z problemów, których doświadczyliśmy, było około pięciosekundowe opóźnienie w otrzymywaniu wyników rozpoznawania w interfejsie użytkownika. Chociaż 5 sekund może wydawać się dość szybko, to opóźnienie jest zauważalnie o kilka sekund za wolne, aby być wygodnym i praktycznym rozwiązaniem, zwłaszcza w przypadku komunikacji w czasie rzeczywistym.

<center>
<img src="/images/blog/4-seameet-voice-intelligence-meeting-transcription-pitfalls-of-microsoft-modern-meetings/default_ui.png" style="width:400px;" alt="Domyślny interfejs użytkownika do transkrypcji mowy przez Azure Speech SDK"/>

*Domyślny interfejs użytkownika do transkrypcji mowy dostarczony przez Azure Speech SDK*
</center>

Opóźnienie było również poważnym problemem w zapleczu. Na początku każdego spotkania wyniki pojawiały się w czasie rzeczywistym (zgodnie z reklamą!), ale w miarę trwania spotkania opóźnienie okresowo wzrastało nawet do trzydziestu sekund, zanim tekst pojawił się na monitorach. W tym czasie to, co zostało powiedziane, dawno straciło znaczenie w rozmowie. Po niezliczonych testach zaczęliśmy zauważać, że opóźnienie zmieniało się w ciągu dnia, co przypisaliśmy obciążeniu serwera Azure w danym momencie. Jesteśmy w biznesie tworzenia spójnego, niezawodnego produktu, więc te fluktuujące i nieprzewidywalne opóźnienia były niedopuszczalne. Tym bardziej powód, aby polegać na naszych własnych modelach i serwerach.

### Dialekt

Jednym z konkretnych powodów, dla których w ogóle użyliśmy Azure Speech Service, było ich szerokie wsparcie dla wielu języków i dialektów. Byliśmy szczególnie podekscytowani możliwością wykorzystania modelu angielskiego singapurskiego Azure Speech Service. Ale wyobraźcie sobie nasze zaskoczenie, gdy odkryliśmy, że dla dialektu singapurskiego model angielski amerykański konsekwentnie przewyższał model angielski singapurski. Co więcej, nawet najlepszy model nie sprostał wyzwaniom w świecie rzeczywistym.

<center>
<img src="/images/blog/4-seameet-voice-intelligence-meeting-transcription-pitfalls-of-microsoft-modern-meetings/bad_result.png"/>

*Wynikowa transkrypcja "Gratulacje! Chłopiec czy dziewczynka?"*
</center>

Widzieliśmy wyniki takie jak „ola regulations may be boiled baby cool”, podczas gdy wypowiedź brzmiała naprawdę „Gratulacje! Chłopiec czy dziewczynka?”. Dobrze wytrenowany model językowy powinien był wyeliminować taką transkrypcję. Chociaż jest to skrajny przykład, częściej niż rzadziej w każdej transkrypcji występował błąd. Niezależnie od tego, jak mały błąd, taki jak brak artykułu lub źle zrozumiane słowo, każdy błąd rozprasza i może łatwo zrujnować reputację usługi transkrypcji.

### Aktualizacja Windows

Kilka tygodni później zespół spędził wiele nocy, upewniając się, że nasz produkt jest gotowy na demonstrację dla klienta, która miała się odbyć za kilka dni. Nasz transkrybent spotkań działał płynnie na trzech oddzielnych laptopach z systemem Windows. Pewnego dnia znikąd zostaliśmy zredukowani do zaledwie jednego działającego komputera, mimo że nikt nie dotykał kodu. Testowaliśmy nasze sieci, sprawdzaliśmy nasze zapory ogniowe, wszystko, co mogliśmy wymyślić, co nagle mogłoby spowodować awarię naszego produktu. Nasze ostatnie przypuszczenie było takie, że niespodziewana aktualizacja systemu Windows sprawiła, że Azure Speech SDK stał się niewytłumaczalnie niekompatybilny z dwoma naszymi komputerami, gdy porównaliśmy trzy systemy bit po bicie. Zbliżająca się szybko prezentacja, stres i napięcie osiągnęły punkt krytyczny. Mając tylko jeden system, zespół zawarł pakt: żadnych zmian w kodzie i absolutnie żadnych aktualizacji. Po tym koszmarze mieliśmy dość.

### Poza Nowoczesnymi Spotkaniami

Aby uciec od tych przeszkód, ekipa Seasalt.ai rozpoczęła szkolenie własnych modeli akustycznych i językowych, aby dorównać możliwościom konwersacyjnego transkrybenta Azure. Przez cały proces zadawaliśmy sobie pytanie: dokąd zmierzamy? Jak możemy rozszerzyć ten już instrumentalny produkt?

Nowoczesne Spotkania wykazały solidny potencjał zamiany mowy na tekst, ale na tym się kończy. Może nas słuchać, ale co jeśli możemy sprawić, by myślało za nas. Przy samych transkrypcjach, choć produkt jest imponujący, zastosowania są nieco ograniczone. Przejście od transkrypcji mowy do inteligencji mowy otwiera szeroko drzwi do tego, co możemy stworzyć. Przykłady inteligencji obejmują podsumowania spotkań, abstrakcję tematów i ekstrakcję działań. Wreszcie, zaprojektowanie pięknego interfejsu, aby połączyć wszystko w oszałamiającą całość.

I to jest historia do tej pory, początek podróży Seasalt.ai do dostarczania najlepszych rozwiązań biznesowych na szybko rozwijający się rynek i dostarczania ich światu. Jeśli chcesz dowiedzieć się więcej o szczegółach, kontynuuj czytanie reszty serii blogów.
`;export{e as default};

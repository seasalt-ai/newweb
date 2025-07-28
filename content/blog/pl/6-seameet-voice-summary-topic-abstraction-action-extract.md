---
title: "Od Demo do Sukcesu: Percepcja Spotkania (4/5)"
metatitle: "Od Demo do Sukcesu (4/5): Percepcja Spotkania"
date: 2021-08-28T12:26:00-07:00
author: Kim Dodds
image: "images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/SeaMeet animation.gif"
draft: false
description: "W czwartej części tej serii blogów śledź podróż Seasalt.ai do stworzenia SeaMeet, naszego wspólnego rozwiązania do nowoczesnych spotkań."
tags: ["SeaMeet"]
weight: 1  
canonicalURL: "/blog/seameet-voice-summarization-topic-abstraction"
url: "/blog/seameet-voice-summarization-topic-abstraction"
aliases:
    - /blog/6-seameet-voice-intelligence-meeting-transcription-summarization-topic-abstraction-action-extraction/
---

*W całej tej serii blogów śledź podróż Seasalt.ai do stworzenia wszechstronnego doświadczenia nowoczesnych spotkań, zaczynając od skromnych początków, poprzez optymalizację naszych usług na różnych sprzętach i modelach, po integrację najnowocześniejszych systemów NLP i wreszcie kończąc na pełnej realizacji SeaMeet, naszego wspólnego rozwiązania do nowoczesnych spotkań.*

## Poza Transkrypcją

Wszystkie napotkane wcześniej przeszkody nauczyły nas ważnej lekcji: że możemy to wszystko zrobić lepiej sami.
Więc ekipa Seasalt.ai rozpoczęła szkolenie własnych modeli akustycznych i językowych, aby dorównać możliwościom konwersacyjnego transkrybenta Azure.
Microsoft zaprezentował niesamowitą prezentację na MS Build 2019, przedstawiając Azure Speech Services jako produkt wysoce wydajny, a jednocześnie bardzo dostępny.
Po zachwycie jesteśmy zmuszeni zadać sobie pytanie: dokąd zmierzamy stąd?
Jak możemy rozszerzyć ten już instrumentalny produkt? Nowoczesne Spotkania wykazały solidny potencjał zamiany mowy na tekst, ale na tym się kończy.
Wiemy, że Azure może nas słuchać, ale co jeśli możemy sprawić, by *myślało* za nas?
Przy samych transkrypcjach, choć produkt jest imponujący, zastosowania są nieco ograniczone.

Integrując istniejącą technologię zamiany mowy na tekst z systemami, które mogą generować spostrzeżenia z transkrypcji, możemy dostarczyć produkt, który przekracza oczekiwania i przewiduje potrzeby użytkowników.
Zdecydowaliśmy się włączyć trzy systemy, aby poprawić ogólną wartość naszych transkrypcji SeaMeet: podsumowanie, abstrakcję tematów i ekstrakcję elementów działania.
Każdy z nich został wybrany w celu złagodzenia konkretnych problemów użytkowników.

Aby zademonstrować, pokażemy wynik uruchomienia systemów podsumowań, tematów i działań na poniższej krótkiej transkrypcji:

```
Kim: „Dziękuję, Xuchen, jesteś wyciszony, ponieważ wiele osób jest na tym połączeniu. Naciśnij Gwiazdkę 6, aby wyłączyć wyciszenie.”

Xuchen: „OK, myślałem, że to tylko słaby odbiór.”,

Kim: „Tak.”,

Sam: „Właśnie wysłałem osobny plik z danymi mowy na wtorki do 30 dni. Powinniście mieć zaktualizowane wersje.”,

Kim: „Więc na pewno będą przypadki brzegowe, w których to nie zadziała. Już znalazłem kilka, jak w tym przykładzie. Wyciąga jakby z czasownika i mówi, że mówca jest przypisanym, podczas gdy to naprawdę bardziej Carol jest przypisanym. Ale to ten sam wzorzec, co coś w rodzaju drugiego, gdzie naprawdę chcesz, żeby to ja był przypisanym, ponieważ oni nie przypisują Jasona, oni przypisują siebie, żeby powiedzieć Jasonowi.”,

Sam: „Rozumiem.”,

Xuchen: „Więc wadą tego jest to, że musisz pisać dla tego reguły. Tak, zaletą jest to, że jest to już wytrenowany model. Możesz go dalej trenować, ale nie musimy wrzucać do tego tony danych.”,

Kim: „Chociaż nie wykonuje klasyfikacji, która dałaby nam Czy to jest akcja, czy to jest coś innego?”,

Xuchen: „Więc, więc sztuczka polega na tym, że chcemy, aby czasownik posiłkowy był obecny, ale także chcielibyśmy, aby były tam jakieś imiona osób.”,

Sam: „Raczej nie, bo.”,

Xuchen: „Tak, jeśli jest zdanie z, wiesz, jest wiele przypadków z oczywistymi słowami. Jednak niewiele z nich pomogłoby w działaniach.”
```

Poniżej przedstawiono przykład krótkich podsumowań, gdzie każdy segment z oryginalnej transkrypcji został przepuszczony przez narzędzie do podsumowywania:

```
Kim: „Xuchen jest wyciszony, ponieważ wiele osób jest na połączeniu.”

Xuchen: „To tylko słaby odbiór.”

Sam: „Wysłałem osobny plik z danymi mowy na wtorki do 30 dni.”

Kim: „Będą przypadki brzegowe, w których to nie zadziała.”

Xuchen: „Wadą trenowania już wytrenowanego modelu jest to, że musisz pisać dla niego reguły.”

Kim: „Klasyfikacja nie wykonuje klasyfikacji, która dałaby im akcję.”

Xuchen: „Sztuczka polega na tym, że chcą, aby czasownik posiłkowy był obecny, ale także chcieliby, aby były tam jakieś imiona osób.”

Xuchen: „Jeśli jest zdanie ze słowami, niewiele z nich pomogłoby w działaniach.”
```

A ten przykład pokazuje całe spotkanie podsumowane w jednym akapicie:

```
„Xuchen jest wyciszony, ponieważ wiele osób jest na połączeniu. Sam wysłał osobny plik z danymi mowy na wtorki do 30 dni. Xuchen znalazł kilka przypadków brzegowych, w których mówca jest przypisanym.”
```

Rdzeniem zarówno krótkich, jak i długich komponentów podsumowujących jest model podsumowujący oparty na transformatorach.
Dostrajamy model na zbiorze danych dialogowych do podsumowywania abstrakcyjnego.
Dane zawierają fragmenty tekstowe o różnej długości, każdy sparowany z ręcznie napisanym podsumowaniem.
W przypadku podsumowywania wielojęzycznego stosujemy ten sam paradygmat, ale wykorzystujemy wielojęzyczny model bazowy dostrojony do przetłumaczonej wersji zbioru danych.
Z interfejsu SeaMeet użytkownik ma również możliwość weryfikacji podsumowania wygenerowanego maszynowo lub podania własnego.
Następnie możemy zebrać te podsumowania wprowadzone przez użytkownika i dodać je z powrotem do naszego zestawu treningowego, aby stale ulepszać nasze modele.

## Abstrakcja Tematów

<center>
<img src="/images/blog/6-seameet-voice-intelligence-meeting-transcription-summarization-topic-abstraction-action-extraction/topics.png" alt="Silnik ekstrakcji tematów SeaMeet wyodrębnia tematy ze spotkania"/>

*Interfejs SeaMeet, skupiony na zakładce „Tematy” po prawej stronie*
</center>

Kolejnym problemem w przypadku dużych zbiorów transkrypcji jest ich organizowanie, kategoryzowanie i wyszukiwanie.
Automatycznie abstrahując słowa kluczowe i tematy z transkrypcji, możemy zapewnić użytkownikom łatwy sposób na odnalezienie określonych spotkań, a nawet konkretnych sekcji spotkań, w których omawiany jest odpowiedni temat.
Dodatkowo, te tematy służą jako kolejna metoda podsumowywania najważniejszych i najbardziej zapadających w pamięć informacji w transkrypcji.

Poniżej przedstawiono przykład słów kluczowych, które zostałyby wyodrębnione z przykładowej transkrypcji:

```
czasownik posiłkowy
mówca
dane mowy
osobny plik
zaktualizowane wersje
imiona osób
wytrenowany model
pisać reguły
```

Zadanie ekstrakcji tematów wykorzystuje kombinację podejść abstrakcyjnych i ekstrakcyjnych.
Abstrakcyjne odnosi się do podejścia klasyfikacji tekstu, gdzie każdy wprowadzony tekst jest klasyfikowany do zestawu etykiet widzianych podczas treningu.
W tej metodzie użyliśmy architektury neuronowej wytrenowanej na dokumentach sparowanych z listą odpowiednich tematów.
Ekstrakcyjne odnosi się do podejścia wyszukiwania fraz kluczowych, gdzie odpowiednie frazy kluczowe są wyodrębniane z dostarczonego tekstu i zwracane jako tematy.
W tym podejściu używamy kombinacji metryk podobieństwa, takich jak podobieństwo cosinusowe i TF-IDF, oprócz informacji o współwystępowaniu słów, aby wyodrębnić najbardziej odpowiednie słowa kluczowe i frazy.

Techniki abstrakcyjne i ekstrakcyjne mają swoje zalety i wady, ale używając ich razem, możemy wykorzystać mocne strony każdej z nich.
Model abstrakcyjny doskonale radzi sobie z gromadzeniem odrębnych, ale powiązanych szczegółów i znajdowaniem nieco bardziej ogólnego tematu, który pasuje do wszystkich.
Jednak nigdy nie może przewidzieć tematu, którego nie widział podczas treningu, i niemożliwe jest trenowanie na każdy możliwy temat, który może pojawić się w rozmowie!
Modele ekstrakcyjne natomiast mogą wyciągać słowa kluczowe i tematy bezpośrednio z tekstu, co oznacza, że są niezależne od domeny i mogą wyodrębniać tematy, których nigdy wcześniej nie widziały.
Wadą tego podejścia jest to, że czasami tematy są zbyt podobne lub zbyt szczegółowe.
Używając obu, znaleźliśmy szczęśliwy środek między uogólnialnością a specyfiką domeny.

## Ekstrakcja Elementów Działania

<center>
<img src="/images/blog/6-seameet-voice-intelligence-meeting-transcription-summarization-topic-abstraction-action-extraction/actions.png" alt="Silnik ekstrakcji działań SeaMeet tworzy krótkie abstrakcyjne podsumowania elementów działań wyodrębnionych z transkrypcji spotkań"/>

*Interfejs użytkownika SeaMeet, skupiony na zakładce „Działania” po prawej stronie*
</center>

Ostatnim problemem, który postanowiliśmy złagodzić dla użytkowników, jest zadanie rejestrowania elementów działania.
Rejestrowanie elementów działania jest bardzo częstym zadaniem, które jest przydzielane pracownikowi do wykonania podczas spotkania.
Zapisywanie „kto komu co powiedział, kiedy” może być niezwykle czasochłonne i może spowodować rozproszenie uwagi piszącego i uniemożliwić mu pełne uczestnictwo w spotkaniu.
Automatyzując ten proces, mamy nadzieję złagodzić część tej odpowiedzialności z użytkownika, aby każdy mógł poświęcić pełną uwagę uczestnictwu w spotkaniu.

Poniżej przedstawiono przykład niektórych elementów działania, które można wyodrębnić z przykładowej transkrypcji:

```
sugestia: „Sam mówi, że zespół powinien mieć zaktualizowane wersje.”

oświadczenie: „Kim mówi, że na pewno będą przypadki brzegowe, w których to nie zadziała.”

imperatyw: „Xuchen mówi, że ktoś musi pisać dla tego reguły.”

pragnienie: „Xuchen mówi, że zespół chce, aby czasownik posiłkowy był obecny, ale także chce, aby były tam jakieś imiona osób.”
```

Celem systemu Ekstraktora Działań jest tworzenie krótkich, abstrakcyjnych podsumowań elementów działań wyodrębnionych z transkrypcji spotkań.
Wynikiem uruchomienia Ekstraktora Działań na transkrypcji spotkania jest lista poleceń, sugestii, oświadczeń o zamiarach i innych segmentów możliwych do podjęcia działań, które mogą być przedstawione jako zadania do wykonania lub kontynuacje dla uczestników spotkania.
W przyszłości ekstraktor będzie również przechwytywał nazwiska osób przypisanych i przypisujących, a także terminy związane z każdym elementem działania.

Potok ekstrakcji działań składa się z dwóch głównych komponentów: klasyfikatora i podsumowującego.
Najpierw każdy segment jest przekazywany do klasyfikatora wieloklasowego i otrzymuje jedną z następujących etykiet:

- Pytanie
- Rozkaz
- Sugestia
- Pragnienie
- Oświadczenie
- Niepodlegające działaniu

Jeśli segment otrzyma inną etykietę niż „niepodlegające działaniu”, jest on wysyłany do komponentu podsumowującego wraz z dwoma poprzednimi segmentami w transkrypcji, które dostarczają więcej kontekstu do podsumowania.
Krok podsumowania jest zasadniczo taki sam jak samodzielny komponent podsumowujący, jednak model jest trenowany na niestandardowym zbiorze danych skonstruowanym specjalnie do podsumowywania elementów działań z pożądanym formatem wyjściowym.

## SeaMeet Dostaje Mózg

To był duży krok w kierunku stworzenia naszego własnego, unikalnego produktu: szkolenie modeli podsumowujących oraz modeli ekstrakcji tematów i działań, aby jeszcze bardziej rozwinąć nasz produkt, a także zaprojektowanie pięknego interfejsu, aby połączyć wszystko w oszałamiającą całość.
To jest historia do tej pory, początek podróży Seasalt.ai do dostarczania najlepszych rozwiązań biznesowych na szybko rozwijający się rynek i dostarczania ich światu, SeaMeet: Przyszłość Nowoczesnych Spotkań.

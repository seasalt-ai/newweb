---
title: "SeaX KB: Baza Wiedzy, która Odpowiada Zanim Zostanie Zadane Pytanie"
metatitle: "SeaX KB: Baza Wiedzy, która Odpowiada Zanim Zostanie Zadane Pytanie"
date: 2022-08-15T22:01:32-07:00
modified_date: 2025-07-27T00:00:00Z
draft: false
author: Kim Dodds
image: /images/blog/22-seax-knowledge-base/thumbnail.png
description: "W tym poście kontynuujemy temat integracji AI z bazą wiedzy SeaX opartą na AI, która oferuje sugerowane odpowiedzi w czasie rzeczywistym."
weight: 1
tags: ["SeaX"]
canonicalURL: "/blog/seax-kb-a-knowledge-base/"
url: "/blog/seax-kb-a-knowledge-base/"
---

*W naszym poprzednim wpisie na blogu, [Nadaj swojemu centrum kontaktowemu własny głos dzięki SeaX Voice Intelligence](https://seasalt.ai/blog/21-seax-voice-intelligence/), pokazaliśmy, jak własne silniki Seasalt.ai do zamiany tekstu na mowę i mowy na tekst usprawniają różne aspekty platformy SeaX. W tym poście kontynuujemy temat integracji AI z bazą wiedzy SeaX opartą na AI, która nasłuchuje rozmów i oferuje sugerowane odpowiedzi w czasie rzeczywistym.*

# Spis Treści
- [Tradycyjna Baza Wiedzy](#the-traditional-knowledge-base)
- [Baza Wiedzy SeaX](#seax-knowledge-base)
    - [Wbudowany Interfejs Użytkownika dla Agentów na Żywo](#embedded-user-interface-for-live-agents)
    - [Szybkie i Dokładne Wyszukiwanie](#fast-and-accurate-search)
    - [Automatyczne Sugestie w Czasie Rzeczywistym](#real-time-automated-suggestions)
    - [Szablony Odpowiedzi](#response-templates)
    - [Zarządzanie Bazą Wiedzy](#kb-management)
    - [Webinar](#webinar)

# Tradycyjna Baza Wiedzy

Zasadniczo baza wiedzy (KB) to po prostu biblioteka (idealnie) dobrze zorganizowanych i łatwo dostępnych informacji, które są wykorzystywane w trybie samoobsługowym online. Dobre systemy baz wiedzy będą posiadały funkcje takie jak hierarchiczna organizacja treści, wyszukiwanie i etykietowanie, aby pomóc użytkownikom łatwiej znaleźć właściwe informacje.

Utrzymywanie szczegółowej bazy wiedzy jest obecnie standardową praktyką dla większości firm. Niezależnie od tego, czy celem jest pomoc pracownikom w udostępnianiu wewnętrznych informacji o produkcie, odpowiadanie na pytania potencjalnego klienta, pomaganie klientom w rozwiązywaniu problemów, czy wszystko powyższe – udostępnianie kluczowych informacji pracownikom i klientom oznacza bardziej efektywną pracę i wyższą satysfakcję klienta.

Zazwyczaj baza wiedzy jest implementowana i utrzymywana za pośrednictwem systemu zarządzania treścią lub systemu zarządzania wiedzą. Systemy te mogą różnić się skalą w zależności od potrzeb organizacji, począwszy od prostego menedżera dokumentów po bogatą w funkcje usługę, która obejmuje przepływy pracy publikowania, targetowanie odbiorców, narzędzia do współpracy i wiele innych. Chociaż systemy te są wszechstronne na różne sposoby, prawie zawsze są przeznaczone do dostępu za pośrednictwem interakcji ze stroną internetową lub aplikacją. W przypadku szczególnego zastosowania agenta obsługi klienta (który zazwyczaj wykorzystuje bazę wiedzy jako jedno z głównych źródeł pomocy klientom) ścisła integracja z oprogramowaniem centrum kontaktowego jest konieczna, aby agenci mogli obsługiwać zapytania użytkowników w możliwie najbardziej płynny sposób.

# Baza Wiedzy SeaX

Nasza baza wiedzy została zaprojektowana od pierwszego dnia z myślą o bardzo konkretnym przypadku użycia: obsłudze klienta opartej na głosie. Chociaż większość, jeśli nie wszystkie, istniejące systemy baz wiedzy opierają się na nawigacji po hierarchicznych stronach internetowych lub wpisywaniu zapytania wyszukiwania, nasza baza wiedzy musiała być szybsza i bardziej niezależna, aby umożliwić przedstawicielom obsługi klienta pełne skupienie się na kliencie, jednocześnie szybko odpowiadając na pytania.

Jeśli chcesz od razu przejść do demonstracji, możesz obejrzeć nasz krótki film demonstracyjny SeaX KB:
<iframe width="85%" height="450px" src="https://www.youtube.com/embed/C_e_gaZHSFA" title="Odtwarzacz wideo YouTube" frameborder="0" allow="akcelerometr; autoodtwarzanie; schowek-zapis; zaszyfrowane-media; żyroskop; obraz-w-obrazie" allowfullscreen style="border-radius: 30px;"></iframe>


## Wbudowany Interfejs Użytkownika dla Agentów na Żywo

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-intro.png" alt="Pierwsze spojrzenie na interfejs bazy wiedzy SeaX."/>

*Pierwsze spojrzenie na interfejs bazy wiedzy SeaX.*
</center>

Naturalnie, ponieważ nasz silnik bazy wiedzy został zaprojektowany specjalnie do zastosowań w centrach kontaktowych, posiada natywną integrację z platformą SeaX, dzięki czemu agenci mogą płynnie uzyskiwać dostęp do bazy wiedzy podczas obsługi połączeń i wiadomości. Bez przełączania okien, bez przewracania zakładek, bez nawigacji po zagnieżdżonych stronach internetowych.

## Szybkie i Dokładne Wyszukiwanie

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-manual-search.png" alt="Wyniki ręcznego wyszukiwania w bazie wiedzy SeaX."/>

*Wyniki ręcznego wyszukiwania w bazie wiedzy SeaX.*
</center>

Na najbardziej podstawowym poziomie nasza baza wiedzy jest zasilana przez niezwykle szybką i dokładną wyszukiwarkę. Wykorzystujemy najnowocześniejsze techniki przetwarzania języka naturalnego i ekstrakcji informacji, aby wydobywać znaczenie z prostego tekstu, przykładowych zapytań i pomocniczych adresów URL oraz dopasowywać wypowiedzi klientów do najbardziej odpowiednich wpisów w bazie wiedzy. Silnik bazy wiedzy jest wysoce rozszerzalny i może obsługiwać miliardy dokumentów bez zauważalnej zmiany czasu odpowiedzi.

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-detail.png" alt="Artykuł z bazy wiedzy w widoku rozszerzonym po kliknięciu na wynik wyszukiwania."/>

*Artykuł z bazy wiedzy w widoku rozszerzonym po kliknięciu na wynik wyszukiwania.*
</center>

Oprócz znajdowania najbardziej odpowiedniego dokumentu, nasza wyszukiwarka dostarcza bardziej szczegółowe wyniki, wyodrębniając istotne słowa kluczowe z zapytania użytkownika i podświetlając najbardziej odpowiednie słowa kluczowe i fragmenty w każdym sugerowanym wpisie bazy wiedzy.

## Automatyczne Sugestie w Czasie Rzeczywistym

Ale to, co pokazaliśmy do tej pory, to nadal wyszukiwanie ręczne. Agenci na żywo mają pełne ręce roboty, wchodząc w interakcje z klientami, i straciliby cenny czas na ręczne wprowadzanie wyszukiwania do bazy wiedzy za każdym razem, gdy chcieliby uzyskać jakieś informacje. Z tego powodu największą wartością dodaną, jaką wnosi baza wiedzy SeaX, jest automatyczne wyszukiwanie w czasie rzeczywistym zarówno dla interakcji tekstowych, jak i głosowych.

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-automatic-search.png" alt="SeaX KB pokazujący automatyczne sugestie artykułów dla przychodzącej wiadomości użytkownika."/>

*SeaX KB pokazujący automatyczne sugestie artykułów dla przychodzącej wiadomości użytkownika.*
</center>

Za każdym razem, gdy pojawi się nowa wiadomość od użytkownika, baza wiedzy zostanie automatycznie przeszukana przy użyciu dokładnej wiadomości klienta. W czasie rzeczywistym, gdy klient rozmawia, agent otrzyma aktualne sugestie artykułów z bazy wiedzy do wykorzystania.

I to działa również z połączeniami głosowymi! Nasz ostatni wpis na blogu, [Nadaj swojemu centrum kontaktowemu własny głos dzięki SeaX Voice Intelligence](https://seasalt.ai/blog/21-seax-voice-intelligence/), pokazał najnowocześniejszy silnik Seasalt.ai do zamiany mowy na tekst. Platforma SeaX wykorzystuje ten silnik do transkrypcji wszystkich połączeń głosowych w czasie rzeczywistym. W rezultacie możemy wykorzystać te transkrypcje do różnych zastosowań, w tym do automatycznego wyszukiwania w bazie wiedzy.

## Szablony Odpowiedzi

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-response-template.png" alt="Agent odpowiada klientowi jednym kliknięciem, używając wygenerowanego szablonu odpowiedzi SeaX KB."/>

*Agent odpowiada klientowi jednym kliknięciem, używając wygenerowanego szablonu odpowiedzi SeaX KB.*
</center>

Wyniki wyszukiwania z bazy wiedzy mają jedną dodatkową funkcję, która pomaga przyspieszyć odpowiedzi agentów w przypadku interakcji tekstowych. Gdy agent znajdzie odpowiedni artykuł z bazy wiedzy, może po prostu kliknąć ikonę `+` po lewej stronie tytułu, aby wstawić szablon odpowiedzi do okna czatu. W tle, za każdym razem, gdy baza wiedzy jest przeszukiwana, generuje ona pisemną odpowiedź na pytanie użytkownika na podstawie najbardziej odpowiednich informacji w sugerowanym artykule z bazy wiedzy i zawiera wszelkie pomocnicze linki. Może to znacznie poprawić czas odpowiedzi agenta, ponieważ agent nie zaczyna już od pustej kartki. Zamiast tego, ma ważne informacje z artykułu z bazy wiedzy już w oknie czatu, więc może je po prostu edytować i wysłać.


## Zarządzanie Bazą Wiedzy

Teraz, gdy już wiemy, co potrafi silnik bazy wiedzy, pozostaje jedno nurtujące pytanie dotyczące zaplecza: jak zarządzać informacjami w bazie wiedzy? Platforma SeaX posiada w pełni zintegrowany interfejs zarządzania bazą wiedzy dostępny dla administratorów ze strony ustawień.

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-management.png" alt="Interfejs zarządzania bazą wiedzy SeaX."/>

*Interfejs zarządzania bazą wiedzy SeaX.*
</center>

Z tej strony możesz dodać pojedynczy nowy wpis do bazy wiedzy lub importować/eksportować całą bazę wiedzy za pomocą pliku arkusza kalkulacyjnego. Interfejs obsługuje również edycję i usuwanie wpisów z bazy wiedzy, dzięki czemu możesz stale aktualizować swoją bazę wiedzy.

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-edit.png" alt="Edycja pojedynczego artykułu z bazy wiedzy za pośrednictwem interfejsu zarządzania bazą wiedzy SeaX."/>

*Edycja pojedynczego artykułu z bazy wiedzy za pośrednictwem interfejsu zarządzania bazą wiedzy SeaX.*
</center>

## Webinar

Jeśli chcesz zobaczyć bardziej szczegółowy przewodnik po systemie bazy wiedzy i sposobie jego integracji z platformą SeaX, obejrzyj nasz webinar na ten temat:
<iframe width="85%" height="450px" src="https://www.youtube.com/embed/FOqQ01fpKQ4" title="Odtwarzacz wideo YouTube" frameborder="0" allow="akcelerometr; autoodtwarzanie; schowek-zapis; zaszyfrowane-media; żyroskop; obraz-w-obrazie" allowfullscreen style="border-radius: 30px;"></iframe>

Aby uzyskać indywidualną demonstrację lub dowiedzieć się więcej o tym, jak Seasalt.ai może dostosować swoje rozwiązania do potrzeb Twojej firmy, wypełnij nasz [formularz rezerwacji demo](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting).

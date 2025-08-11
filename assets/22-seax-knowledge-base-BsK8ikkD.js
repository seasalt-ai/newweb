const a=`---
title: "Baza wiedzy SeaX: Baza wiedzy, która odpowiada, zanim zapytasz"
metatitle: "Baza wiedzy SeaX: Baza wiedzy, która odpowiada, zanim zapytasz"
date: 2022-08-15 22:01:32-07:00
modified_date: 2025-07-30 17:01:30.490000+00:00
draft: false
author: Kim Dodds
description: "W tym artykule kontynuujemy temat integracji sztucznej inteligencji, przedstawiając opartą na sztucznej inteligencji bazę wiedzy SeaX, która dostarcza sugerowane odpowiedzi w czasie rzeczywistym."
weight: 1
tags:
  - SeaX
canonicalURL: /blog/seax-kb-a-knowledge-base/
url: /blog/seax-kb-a-knowledge-base/
---

*W naszym poprzednim wpisie na blogu [Nadaj swojemu centrum kontaktowemu własny głos dzięki SeaX Voice Intelligence](https://seasalt.ai/blog/21-seax-voice-intelligence/) pokazaliśmy, jak wewnętrzne silniki zamiany tekstu na mowę i mowy na tekst firmy Seasalt.ai usprawniają różne aspekty platformy SeaX. W tym artykule będziemy kontynuować temat integracji sztucznej inteligencji, przedstawiając opartą na sztucznej inteligencji bazę wiedzy SeaX, która nasłuchuje rozmów w czasie rzeczywistym, aby dostarczać sugerowane odpowiedzi.*

# Spis treści
- [Tradycyjna baza wiedzy](#the-traditional-knowledge-base)
- [Baza wiedzy SeaX](#seax-knowledge-base)
    - [Wbudowany interfejs użytkownika для agentów na żywo](#embedded-user-interface-for-live-agents)
    - [Szybkie i dokładne wyszukiwanie](#fast-and-accurate-search)
    - [Zautomatyzowane sugestie w czasie rzeczywistym](#real-time-automated-suggestions)
    - [Szablony odpowiedzi](#response-templates)
    - [Zarządzanie bazą wiedzy](#kb-management)
    - [Webinarium](#webinar)

# Tradycyjna baza wiedzy

U podstaw baza wiedzy (KB) to po prostu (najlepiej) dobrze zorganizowany i łatwo dostępny zbiór informacji do samodzielnej obsługi online. Dobry system KB będzie miał takie funkcje, jak hierarchiczna organizacja treści, wyszukiwanie i tagowanie, aby pomóc użytkownikom łatwiej znaleźć właściwe informacje.

Utrzymywanie szczegółowej bazy wiedzy jest obecnie standardową praktyką w większości firm. Niezależnie od tego, czy celem jest pomoc pracownikom w udostępnianiu wewnętrznych informacji o swoich produktach, odpowiadanie na pytania potencjalnych klientów, pomoc klientom w rozwiązywaniu problemów, czy wszystko powyższe — udostępnienie kluczowych informacji zarówno pracownikom, jak i klientom oznacza bardziej wydajną pracę i wyższą satysfakcję klientów.

Zazwyczaj bazy wiedzy są wdrażane i utrzymywane za pośrednictwem systemu zarządzania treścią lub systemu zarządzania wiedzą. Systemy te mogą różnić się skalą w zależności od potrzeb organizacji, od prostych menedżerów dokumentów po bogate w funkcje usługi, które obejmują przepływy pracy publikacji, targetowanie odbiorców, narzędzia do współpracy i wiele innych. Chociaż systemy te są wszechstronne pod różnymi względami, prawie zawsze są zaprojektowane do dostępu poprzez interakcję ze stroną internetową lub aplikacją. W przypadku specyficznego zastosowania agentów obsługi klienta (którzy często używają baz wiedzy jako jednego ze swoich podstawowych zasobów do pomocy klientom), potrzebna jest ścisła integracja z oprogramowaniem centrum kontaktowego, aby umożliwić agentom obsługę zapytań użytkowników tak płynnie, jak to możliwe.

# Baza wiedzy SeaX

Nasza baza wiedzy została zaprojektowana od pierwszego dnia z myślą o bardzo specyficznym zastosowaniu: obsłudze klienta opartej na głosie. Podczas gdy większość, jeśli не wszystkie, istniejących systemów baz wiedzy opiera się na nawigacji po hierarchicznych stronach internetowych lub wpisywaniu zapytań wyszukiwania, nasza baza wiedzy musiała być szybsza i bardziej autonomiczna, aby przedstawiciele obsługi klienta mogli poświęcić całą swoją uwagę klientowi, jednocześnie szybko odpowiadając na pytania.

Jeśli chcesz przejść od razu do wersji demonstracyjnej, możesz obejrzeć naszą krótką wersję demonstracyjną SeaX KB:
<iframe width="85%" height="450px" src="https://www.youtube.com/embed/C_e_gaZHSFA" title="Odtwarzacz wideo YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>


## Wbudowany interfejs użytkownika dla agentów na żywo

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-intro.png" alt="Pierwsze spojrzenie na interfejs Bazy Wiedzy SeaX."/>

*Pierwsze spojrzenie na interfejs Bazy Wiedzy SeaX.*
</center>

Naturalnie, ponieważ nasz silnik bazy wiedzy został zaprojektowany specjalnie dla aplikacji centrum kontaktowego, jest on natywnie zintegrowany z platformą SeaX, dzięki czemu agenci mogą bezproblemowo uzyskiwać dostęp do bazy wiedzy podczas obsługi połączeń i wiadomości. Bez przełączania okien, bez grzebania w kartach, bez nawigacji po zagnieżdżonych stronach internetowych.

## Szybkie i dokładne wyszukiwanie

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-manual-search.png" alt="Wyniki ręcznego wyszukiwania w Bazie Wiedzy SeaX."/>

*Wyniki ręcznego wyszukiwania w Bazie Wiedzy SeaX.*
</center>

Na najbardziej podstawowym poziomie nasza baza wiedzy jest zasilana przez niezwykle szybki i dokładny silnik wyszukiwania. Używamy najnowocześniejszych technik przetwarzania języka naturalnego i ekstrakcji informacji, aby wydobyć znaczenie z surowego tekstu, przykładowych zapytań i pomocniczych adresów URL oraz dopasować wypowiedzi klientów do najbardziej odpowiednich wpisów w bazie wiedzy. Silnik bazy wiedzy jest wysoce skalowalny i może obsługiwać miliardy dokumentów bez zauważalnej zmiany czasu odpowiedzi.

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-detail.png" alt="Artykuł z bazy wiedzy w rozszerzonym widoku po kliknięciu wyniku wyszukiwania."/>

*Artykuł z bazy wiedzy w rozszerzonym widoku po kliknięciu wyniku wyszukiwania.*
</center>

Oprócz znajdowania najbardziej odpowiednich dokumentów, nasz silnik wyszukiwania zapewnia również bardziej szczegółowe wyniki, wyodrębniając istotne słowa kluczowe z zapytania użytkownika i podświetlając najbardziej odpowiednie słowa kluczowe i fragmenty w każdym sugerowanym wpisie w bazie wiedzy.

## Zautomatyzowane sugestie w czasie rzeczywistym

Ale to, co pokazaliśmy do tej pory, to wciąż ręczne wyszukiwanie. Agenci na żywo są zajęci interakcją z klientami, a ręczne wpisywanie wyszukiwań w bazie wiedzy za każdym razem, gdy potrzebują informacji, marnuje cenny czas. Tak więc największą wartością dodaną, która pochodzi z Bazy Wiedzy SeaX, jest zautomatyzowane wyszukiwanie w czasie rzeczywistym zarówno dla interakcji tekstowych, jak i głosowych.

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-automatic-search.png" alt="Baza Wiedzy SeaX pokazująca automatyczne sugestie artykułów dla przychodzącej wiadomości użytkownika."/>

*Baza Wiedzy SeaX pokazująca automatyczne sugestie artykułów dla przychodzącej wiadomości użytkownika.*
</center>

Za każdym razem, gdy pojawia się nowa wiadomość od użytkownika, baza wiedzy automatycznie wysyła zapytanie z dokładną wiadomością klienta. W czasie rzeczywistym, gdy klient mówi, agenci otrzymają aktualne sugestie artykułów z bazy wiedzy do wglądu.

To działa również w przypadku połączeń głosowych! Nasz poprzedni wpis na blogu [Nadaj swojemu centrum kontaktowemu własny głos dzięki SeaX Voice Intelligence](https://seasalt.ai/blog/21-seax-voice-intelligence/) zaprezentował najnowocześniejszy silnik zamiany mowy na tekst firmy Seasalt.ai. Platforma SeaX wykorzystuje ten silnik do transkrypcji wszystkich połączeń głosowych w czasie rzeczywistym. W rezultacie możemy wykorzystać te transkrypcje do różnych zastosowań niższego szczebla, w tym do automatycznego wyszukiwania w bazie wiedzy.

## Szablony odpowiedzi

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-response-template.png" alt="Agent odpowiadający klientowi jednym kliknięciem za pomocą szablonu odpowiedzi wygenerowanego przez Bazę Wiedzy SeaX."/>

*Agent odpowiadający klientowi jednym kliknięciem za pomocą szablonu odpowiedzi wygenerowanego przez Bazę Wiedzy SeaX.*
</center>

Wyniki wyszukiwania w bazie wiedzy zawierają jedną dodatkową funkcję, która pomaga przyspieszyć reakcję agentów na interakcje tekstowe. Gdy agent znajdzie odpowiedni artykuł w bazie wiedzy, może po prostu kliknąć ikonę „+” po lewej stronie tytułu, aby wstawić szablon odpowiedzi do okna czatu. W zapleczu, za każdym razem, gdy przeszukiwana jest baza wiedzy, generuje ona pisemną odpowiedź na pytanie użytkownika na podstawie najbardziej odpowiednich informacji z sugerowanych artykułów w bazie wiedzy i zawiera wszelkie pomocnicze linki. Może to znacznie skrócić czas reakcji agentów, ponieważ agenci nie zaczynają już od zera. Zamiast tego mają już ważne informacje z artykułu w bazie wiedzy wyświetlane w oknie czatu, więc wystarczy je edytować i wysłać.


## Zarządzanie bazą wiedzy

Teraz, gdy zobaczyliśmy, co potrafi silnik bazy wiedzy, pozostaje jedno pytanie dotyczące zaplecza: jak zarządzane są informacje w bazie wiedzy? Platforma SeaX zapewnia w pełni zintegrowany interfejs użytkownika do zarządzania bazą wiedzy, do którego administratorzy mogą uzyskać dostęp ze strony ustawień.

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-management.png" alt="Interfejs zarządzania Bazą Wiedzy SeaX."/>

*Interfejs zarządzania Bazą Wiedzy SeaX.*
</center>

Na tej stronie można dodawać pojedyncze nowe wpisy do bazy wiedzy lub importować/eksportować całą bazę wiedzy za pomocą pliku arkusza kalkulacyjnego. Interfejs obsługuje również edycję i usuwanie wpisów w bazie wiedzy, dzięki czemu można na bieżąco aktualizować bazę wiedzy.

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-edit.png" alt="Edycja pojedynczego artykułu z bazy wiedzy za pośrednictwem interfejsu zarządzania Bazą Wiedzy SeaX."/>

*Edycja pojedynczego artykułu z bazy wiedzy za pośrednictwem interfejsu zarządzania Bazą Wiedzy SeaX.*
</center>

## Webinarium

Jeśli chcesz bliżej przyjrzeć się systemowi bazy wiedzy i jego integracji z platformą SeaX, obejrzyj nasze webinarium na ten temat:
<iframe width="85%" height="450px" src="https://www.youtube.com/embed/FOqQ01fpKQ4" title="Odtwarzacz wideo YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

Aby uzyskać indywidualną wersję demonstracyjną lub dowiedzieć się, jak Seasalt.ai może dostosować rozwiązanie do potrzeb Twojej firmy, wypełnij nasz [formularz umówienia się na wersję demonstracyjną](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting).`;export{a as default};

const e=`---
title: "Rozszerz zasięg swojego Contact Center dzięki Rozproszonemu Contact Center"
metatitle: "Rozszerz swój zasięg dzięki Rozproszonemu Contact Center"
date: 2022-07-27 21:46:45+00:00
draft: false
author: Sarah Reid
description: "W tym blogu przyjrzymy się 'rozproszonym' centrom kontaktowym: czym są, jakie korzyści mogą przynieść i jak SeaX wykorzystuje to do lepszej obsługi naszych klientów."
weight: 1
tags:
  - SeaX
image: images/blog/20-seax-distributed-contact-center/0-main.png
canonicalURL: /blog/seax-distributed-contact-center/
url: /blog/seax-distributed-contact-center/
---

*W naszym poprzednim wpisie na blogu, [Przenieś klientów z dowolnego kanału w jedno miejsce dzięki komunikacji wielokanałowej SeaX](https://seasalt.ai/blog/19-seax-omnichannel-communication/), pokazaliśmy moc komunikacji wielokanałowej na platformie SeaX, która pozwala na wyświetlanie wiadomości użytkowników z praktycznie każdego kanału na platformie SeaX. W tym poście przyjrzymy się "rozproszonym" centrom kontaktowym: czym są, jakie korzyści mogą przynieść i jak SeaX wykorzystuje rozproszoną platformę do lepszej obsługi naszych klientów.*

# Spis treści
- [Czym jest "rozproszone" contact center?](#czym-jest-rozproszone-contact-center)
- [Jakie korzyści ma "rozproszone" contact center?](#jakie-korzysci-ma-rozproszone-contact-center)
- [Jakie wyzwania ma "rozproszone" contact center?](#jakie-wyzwania-ma-rozproszone-contact-center)
- [Jak SeaX rozwiązuje te problemy?](#jak-seax-rozwiazuje-te-problemy)
    - [Kierowanie połączeń do rozproszonych lokalizacji i agentów](#kierowanie-polaczen-do-rozproszonych-lokalizacji-i-agentow)
    - [Konfiguracja dostępności rozproszonych lokalizacji](#konfiguracja-dostepnosci-rozproszonych-lokalizacji)
    - [Dostosowywanie wiadomości dla rozproszonych lokalizacji](#dostosowywanie-wiadomosci-dla-rozproszonych-lokalizacji)

# Czym jest "rozproszone" contact center?
Na najprostszym poziomie, rozproszone contact center to contact center, które istnieje w więcej niż jednej lokalizacji, w przeciwieństwie do tradycyjnego contact center z jedną lokalizacją. Może to być contact center z wieloma biurami, lub wieloma lokalizacjami w różnych krajach, a nawet contact center bez fizycznej lokalizacji, gdzie wszyscy agenci pracują zdalnie. Jednak rozproszone contact center nadal muszą działać jak tradycyjne contact center z jedną lokalizacją, zapewniając płynne doświadczenie dla wszystkich zaangażowanych. Dla agentów oznacza to wsparcie na jednej platformie, niezależnie od ich lokalizacji. Dla klienta oznacza to prawidłowe połączenie z odpowiednią lokalizacją i agentem, w zależności od ich potrzeb.

# Jakie korzyści ma "rozproszone" contact center?
Rozproszone contact center mają szereg korzyści w porównaniu do tradycyjnych contact center, zwłaszcza pod względem zasięgu i pokrycia. Posiadanie agentów w wielu strefach czasowych zapewnia, że klienci mogą się z Tobą skontaktować, kiedy tylko potrzebują pomocy. W tradycyjnych contact center klienci są ograniczeni do dzwonienia w określonych godzinach otwarcia, co utrudnia im kontakt z Twoją firmą. Posiadanie rozproszonych agentów daje również Twojej firmie więcej możliwości zatrudniania osób o różnorodnych umiejętnościach i specjalizacjach, takich jak agenci, którzy obsługują szerszy zakres języków. Tradycyjne contact center w jednej lokalizacji są ograniczone do zatrudniania agentów w tej lokalizacji, co wiąże się z ryzykiem, że nie będą w stanie znaleźć agenta z potrzebnymi umiejętnościami. Wreszcie, posiadanie szeroko rozproszonych agentów bliżej większej liczby klientów pozwala agentom na głębsze zrozumienie wszelkich specjalistycznych zasad i przepisów w danym obszarze. W tradycyjnym contact center z jedną lokalizacją agenci mogą nie znać szczegółów dotyczących na przykład wysyłki w kraju po drugiej stronie świata, co utrudnia im pomoc klientom.


# Jakie wyzwania ma "rozproszone" contact center?
Chociaż rozproszony charakter tych contact center ma wiele korzyści dla Twojej firmy, istnieją również pewne wyzwania związane z rozproszonymi contact center. Posiadanie agentów w wielu strefach czasowych pozwala na łatwą komunikację z klientami przez cały czas, ale oznacza również, że kluczowe jest prawidłowe kierowanie połączeń, aby klient nie został skierowany do lokalizacji, która jest obecnie zamknięta, lub do agenta, który jest poza służbą. Ważne jest również, aby kierować klientów do agentów, którzy mówią w języku klienta i posiadają odpowiednie szkolenie do obsługi ich problemu. Przy szerokiej puli agentów w różnych lokalizacjach o różnych umiejętnościach, to zadanie kierowania może szybko stać się skomplikowane.

<center>
<img src="/images/blog/20-seax-distributed-contact-center/1-feature-comparison.png" alt="Porównanie funkcji: tradycyjne call center vs rozproszone contact center vs SeaX."/>

*Porównanie funkcji: tradycyjne call center vs rozproszone contact center vs SeaX.*
</center>

# Jak SeaX rozwiązuje te problemy?

## Kierowanie połączeń do rozproszonych lokalizacji i agentów
SeaX to rozwiązanie do współpracy w contact center, które jest natywnie chmurowe i rozproszone. Jest zbudowane na bazie [Twilio Flex](https://www.twilio.com/flex), które wykorzystuje platformę komunikacji w chmurze Twilio. Twilio zapewnia podstawowe elementy budulcowe dla SeaX, takie jak infrastruktura telekomunikacyjna, routing wiadomości i zadań oraz podstawowy interfejs użytkownika contact center. W SeaX możesz skonfigurować wiele numerów telefonów dla różnych lokalizacji, co pozwala na posiadanie odpowiednich kodów krajów i obszarów dla każdego obszaru, w którym działa Twoje contact center. Możesz zatem skonfigurować swoje ustawienia według lokalizacji, zapewniając, że każda lokalizacja działa prawidłowo i odbiera właściwe połączenia, jednocześnie obsługując wszystkich agentów na tej samej platformie.

[Twilio TaskRouter](https://www.twilio.com/taskrouter) przypisuje połączenia i wiadomości do agentów na podstawie atrybutów połączenia i agenta.

<center>
<img src="/images/blog/20-seax-distributed-contact-center/2-taskrouter.png" alt="Diagram architektury TaskRouter."/>

*Diagram architektury TaskRouter. [Źródło](https://twilio-cms-prod.s3.amazonaws.com/images/taskrouter-diagram.width-800.png).*
</center>

Umożliwia również korzystanie z routingu opartego na umiejętnościach, co daje precyzyjną kontrolę nad tym, którzy agenci i lokalizacje odbierają jakie połączenia. Możesz nie tylko oznaczyć, jakie umiejętności posiadają Twoi agenci, takie jak poziom ich szkolenia sprzedażowego, ale także wymienić takie rzeczy, jak języki, którymi się posługują, zapewniając, że otrzymują tylko połączenia, które mogą obsłużyć. Ponadto, możesz użyć tego routingu do przypisywania konkretnych numerów telefonów do agentów, wiążąc każdego agenta z określoną lokalizacją Twojego contact center, nawet jeśli nie są tam fizycznie. Agenci będą odbierać tylko połączenia skierowane do ich przypisanej lokalizacji, zapewniając, że połączenia klientów są zawsze kierowane do właściwej osoby.

<center>
<img src="/images/blog/20-seax-distributed-contact-center/3-skills.png" alt="Umiejętności zdefiniowane w TaskRouter do kierowania połączeń przychodzących i wiadomości."/>

*Umiejętności zdefiniowane w TaskRouter do kierowania połączeń przychodzących i wiadomości.*
</center>

## Konfiguracja dostępności rozproszonych lokalizacji
W SeaX możesz również skonfigurować godziny otwarcia i święta według numeru telefonu. Dzięki temu narzędziu możesz niezależnie kontrolować, kiedy każda z Twoich lokalizacji jest otwarta, co daje Ci pełną elastyczność w zakresie tego, kiedy można się skontaktować z każdą z Twoich lokalizacji. W istocie, każda z Twoich lokalizacji może działać jak tradycyjne call center, z ustalonymi godzinami otwarcia i zamknięciem w lokalne święta, jednocześnie będąc skonfigurowaną i połączoną z jednej wspólnej platformy, na której agenci mogą działać.

<center>
<img src="/images/blog/20-seax-distributed-contact-center/4-open-hours.png" alt="Godziny pracy dla dwóch różnych numerów telefonów w dwóch różnych strefach czasowych na tej samej instancji SeaX."/>
</center>

<center>
<img src="/images/blog/20-seax-distributed-contact-center/5-open-hours.png" alt="Godziny pracy dla dwóch różnych numerów telefonów w dwóch różnych strefach czasowych na tej samej instancji SeaX."/>

*Godziny pracy dla dwóch różnych numerów telefonów w dwóch różnych strefach czasowych na tej samej instancji SeaX.*
</center>

## Dostosowywanie wiadomości dla rozproszonych lokalizacji
SeaX umożliwia również wysyłanie wiadomości o niedostępności klienta według numeru telefonu. Wiadomości o niedostępności są automatycznie odtwarzane klientom, gdy nikt nie jest dostępny, aby odebrać ich połączenie. Dzięki możliwości dostosowania tej wiadomości według numeru telefonu, możesz mieć wiadomości w różnych językach lub zawierające różne informacje, w zależności od tego, co jest najważniejsze do przekazania klientom dzwoniącym do tej lokalizacji.

<center>
<img src="/images/blog/20-seax-distributed-contact-center/6-unavailable-message.png" alt="Wiadomość o niedostępności dla konkretnego numeru telefonu na platformie SeaX."/>

*Wiadomość o niedostępności dla konkretnego numeru telefonu na platformie SeaX.*
</center>

Tradycyjne contact center z jedną lokalizacją może skutecznie obsługiwać tylko obszar bezpośrednio wokół niego, choć z natury znajduje się na jednej platformie. Rozproszone contact center znacznie rozszerza bazę klientów, którą może obsługiwać, dzięki agentom w wielu lokalizacjach, ale ma pewne wyzwania związane z integracją wszystkich usług, których agenci potrzebują, niezależnie od tego, gdzie się znajdują. Dzięki SeaX możesz dotrzeć do każdej części swojej bazy klientów, jednocześnie obsługując wszystkich agentów na jednej łatwej platformie.

Dziękujemy za poświęcenie czasu na przeczytanie o tym, jak SeaX cloud contact center wspiera Twoje rozproszone contact center na jednej platformie. Zapraszamy do śledzenia naszego kolejnego wpisu na blogu, który zagłębi się w nasze wewnętrzne rozwiązania text-to-speech i speech-to-text oraz w to, jak mogą one usprawnić Twoje contact center. Jeśli jesteś zainteresowany dowiedzeniem się więcej od razu, wypełnij nasz formularz "[Zarezerwuj Demo](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting)", aby zapoznać się z platformą SeaX z pierwszej ręki.`;export{e as default};

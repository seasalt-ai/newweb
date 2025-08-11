const a=`---
title: "Przenieś klientów z dowolnego kanału w jedno miejsce dzięki komunikacji omnichannel SeaX"
metatitle: "Ujednolić punkty kontaktu z klientem dzięki komunikacji omnichannel SeaX"
date: 2022-07-15 13:56:54-07:00
modified_date: 2025-08-02 17:00:00-07:00
draft: false
author: Kim Dodds
description: "W tym blogu przedstawiamy jedną z komunikacji omnichannel SeaX, która umożliwia wyświetlanie wiadomości użytkowników z dowolnego kanału na platformie SeaX."
weight: 1
tags:
  - SeaX
image: images/blog/19-seax-omnichannel-communication/0-thumbnail.png
canonicalURL: /blog/seax-omnichannel-communication/
url: /blog/seax-omnichannel-communication/
---

*W naszym poprzednim wpisie na blogu, [Witamy w SeaX, współpracującym chmurowym centrum kontaktowym](https://seasalt.ai/blog/18-seax-collaborative-cloud-contact-center-introduction/), przedstawiliśmy SeaX, nasze współpracujące rozwiązanie chmurowego centrum kontaktowego. Podczas gdy nasz pierwszy wpis na blogu zawierał kompleksowy przegląd podstawowych i bardziej zaawansowanych funkcji SeaX, nasze kolejne wpisy zagłębią się w niektóre z poszczególnych funkcji, które wyróżniają SeaX. W tym wpisie przyjrzymy się bliżej obsłudze omnichannel SeaX i zobaczymy, jak połączenia i wiadomości z różnych kanałów pojawiają się na platformie SeaX.*

# Spis treści
- [Co to jest komunikacja omnichannel?](#what-is-omnichannel-communication)
- [Cykl życia wiadomości](#message-lifecycle)
    - [Kanał](#channel)
    - [Routing wiadomości](#message-routing)
    - [TaskRouter](#taskrouter)
    - [Platforma SeaX](#seax-platform)
- [Obsługiwane kanały](#supported-channels)

# Co to jest komunikacja omnichannel?

Po pierwsze, co dokładnie oznacza "omnichannel"? Rozkładając to na czynniki pierwsze, "omni" to przedrostek oznaczający "wszystko", a "kanał" to różne platformy, na których można wchodzić w interakcje z klientami. Mówiąc prościej, "komunikacja omnichannel" oznacza możliwość komunikowania się za pośrednictwem wszystkich dostępnych kanałów. Co więcej, komunikacja omnichannel oznacza również, że doświadczenie między kanałami jest płynne. Po stronie agenta komunikacja ze wszystkich kanałów jest prezentowana w ujednoliconym interfejsie. Dla klienta jego dane interakcji są trwałe we wszystkich kanałach.

Tradycyjne centra telefoniczne często obsługują tylko połączenia telefoniczne. Bardziej zaawansowane centra kontaktowe, które angażują klientów w wielu kanałach, takich jak e-mail, czat internetowy i telefon, mają wielokanałowe centrum kontaktowe. Jednak to, że centrum kontaktowe korzysta z wielu kanałów, nie oznacza, że ich doświadczenie jest płynne. W wielokanałowym centrum kontaktowym różne kanały mogą być dostępne za pośrednictwem oddzielnych platform i/lub dane klientów mogą nie być połączone między kanałami. W przeciwieństwie do tego, centrum kontaktowe omnichannel pozwala agentom śledzić rozmowy z klientami, gdziekolwiek się udają, bez zamykania się w jednym kanale lub rozpraszania na kilkunastu platformach.

<center>
<img src="/images/blog/19-seax-omnichannel-communication/1-contact-center-comparison.png" alt="Porównanie funkcji: tradycyjne centrum telefoniczne a centrum kontaktowe; wielokanałowe a omnichannel."/>

*Porównanie funkcji: tradycyjne centrum telefoniczne a centrum kontaktowe; wielokanałowe a omnichannel.*
</center>

SeaX jest w stanie zintegrować się z praktycznie każdym kanałem, w tym domyślnie: SMS-em, telefonem, czatem internetowym, Facebookiem i innymi. Wszystkie wiadomości i połączenia są wyświetlane na ujednoliconej platformie, a dane użytkowników ze wszystkich kanałów są łatwo dostępne.

Jeśli chcesz przejść od razu do wersji demonstracyjnej, obejrzyj nasz krótki film, w którym demonstrujemy komunikację omnichannel SeaX. W pozostałej części tego bloga przejdziemy krok po kroku, jak wiadomości i połączenia z różnych kanałów są kierowane do agenta w SeaX. Udostępnimy również obsługiwane kanały gotowe do użycia i omówimy, jak można rozszerzyć SeaX, aby objąć nowe kanały.

<iframe width="85%" height="450px" src="https://www.youtube.com/embed/usb-RK7sHlA" title="Odtwarzacz wideo YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

# Cykl życia wiadomości

SeaX jest zbudowany na [Twilio Flex](https://www.twilio.com/flex), chmurowym centrum kontaktowym, które wykorzystuje chmurową platformę komunikacyjną Twilio. Twilio zapewnia podstawowe elementy składowe dla SeaX, takie jak infrastruktura telekomunikacyjna, routing wiadomości i zadań oraz podstawowy interfejs użytkownika centrum kontaktowego. Prześledźmy teraz cykl życia przychodzącej wiadomości użytkownika i zobaczmy, jak SeaX wykorzystuje podstawową architekturę Twilio w połączeniu z niestandardowymi komponentami do kierowania wiadomości do agenta na żywo na platformie SeaX.

## Kanał

<center>
<img src="/images/blog/19-seax-omnichannel-communication/2-example-message.jpg" alt="Użytkownik wysyłający wiadomość do firmy w Wiadomościach Google dla Firm." style="width:50%"/>

*Wysyłanie wiadomości do firmy w Wiadomościach Google dla Firm.*
</center>

Podróż wiadomości rozpoczyna się od napisania i wysłania wiadomości przez użytkownika na obsługiwanej platformie. Powyższy przykład pokazuje kogoś wysyłającego wiadomość do chatbota Seasalt.ai w Wiadomościach Google dla Firm. Domyślnie Twilio nie obsługuje Wiadomości Google dla Firm, dlatego wykorzystujemy niestandardowy łącznik kanałów opracowany przez Seasalt.ai do połączenia platformy Google z Twilio i SeaX.

Po wysłaniu wiadomości jest ona przekazywana przez niestandardowy łącznik do interfejsu API wiadomości Twilio. W tym momencie Twilio tworzy nowy kontekst rozmowy dla użytkownika i przygotowuje się do skierowania wiadomości.

## Routing wiadomości

<center>
<img src="/images/blog/19-seax-omnichannel-communication/3-studio-flow.png" alt="Prosty przepływ Studio, który kieruje wiadomości do chatbota lub agenta na żywo."/>

*Prosty przepływ Studio, który kieruje wiadomości do chatbota lub agenta na żywo.*
</center>

Po odebraniu wiadomości przez Twilio należy ją skierować do właściwej lokalizacji. W tym celu używamy [Twilio Studio Flows](https://www.twilio.com/studio) do określenia, czy udzielić automatycznej odpowiedzi, przekazać wiadomość do chatbota, połączyć użytkownika z agentem na żywo, czy wykonać inną czynność.

W prostym przykładzie podanym powyżej wszystkie przychodzące wiadomości będą przekazywane do chatbota, chyba że zawierają frazę "agent na żywo", w którym to przypadku użytkownik zostanie przeniesiony do agenta na żywo na platformie SeaX.

## TaskRouter

<center>
<img src="/images/blog/19-seax-omnichannel-communication/4-taskrouter.png" alt="Diagram architektury TaskRouter."/>

*Diagram architektury TaskRouter. [Źródło](https://twilio-cms-prod.s3.amazonaws.com/images/taskrouter-diagram.width-800.png).*
</center>

Po przekazaniu wiadomości do SeaX następnym krokiem jest podjęcie decyzji, który agent ją otrzyma. [TaskRouter Twilio](https://www.twilio.com/taskrouter) przypisuje zadania, takie jak wiadomości i połączenia telefoniczne, do agenta w SeaX, który jest najlepiej przygotowany do ich obsługi. Każdemu agentowi w SeaX można przypisać umiejętności, takie jak języki, którymi się posługuje, w jakim dziale pracuje, czy powinien obsługiwać klientów VIP itp. TaskRouter sprawdzi znane informacje o użytkowniku i wiadomości, a następnie wybierze najbardziej odpowiedniego pracownika do obsługi problemu. Przepływ Studio z poprzedniego kroku można dostosować w celu uzyskania dodatkowych informacji (takich jak preferowany język), a informacje o kliencie można zachować w rozmowach i kanałach, aby zapewnić płynne wrażenia.

## Platforma SeaX

<center>
<img src="/images/blog/19-seax-omnichannel-communication/5-seax-incoming-messages.png" alt="Przychodzące połączenia i wiadomości pojawiają się na platformie SeaX." style="width:50%"/>

*Przychodzące połączenia i wiadomości pojawiają się na platformie SeaX.*
</center>

Na koniec przychodząca wiadomość zostanie przedstawiona odpowiedniemu agentowi na platformie SeaX. Agenci mogą obsługiwać wiele zadań z wielu kanałów jednocześnie. Na powyższym obrazku jeden agent ma połączenie przychodzące, wiadomość na Facebooku i wiadomość na czacie internetowym. Agent może zaakceptować zadanie lub je odrzucić, aby przekazać je następnemu dostępnemu agentowi.

# Obsługiwane kanały

Mamy nadzieję, że teraz jest jaśniejsze, czym jest komunikacja omnichannel i jak poprawia ona zarówno wrażenia użytkownika, jak i agenta. Ostatnie pytanie brzmi: które kanały są obsługiwane od razu po wyjęciu z pudełka?

<center>
<img src="/images/blog/19-seax-omnichannel-communication/6-channel-comparison.png" alt="Porównanie obsługiwanych kanałów między tradycyjnym centrum telefonicznym, podstawowym Twilio Flex i SeaX."/>

*Porównanie obsługiwanych kanałów między tradycyjnym centrum telefonicznym, podstawowym Twilio Flex i SeaX.*
</center>

Jak wspomniano wcześniej, tradycyjne centra telefoniczne często obsługują tylko połączenia telefoniczne. Firmy mogą nadal wchodzić w interakcje z klientami za pośrednictwem mediów społecznościowych lub poczty e-mail, ale te wiadomości nie są zintegrowane w ujednoliconej platformie.

Z drugiej strony Twilio Flex stanowi podstawę doskonałego centrum kontaktowego omnichannel. Ma jednak bardzo niewiele kanałów gotowych do użycia. Oprócz połączeń telefonicznych i SMS-ów mają obsługę beta dla Facebooka, WhatsApp i poczty e-mail.

SeaX jest zbudowany na Flex i dodaje wbudowaną obsługę niektórych z najczęściej żądanych kanałów: takich jak Wiadomości Google dla Firm, Discord, Line i Instagram. Ponadto Seasalt.ai stale współpracuje z klientami, aby wprowadzać nowe kanały do linii produktów SeaX. SeaX jest wysoce konfigurowalny i łatwo rozszerzalny - oznacza to, że możemy współpracować z Twoją firmą, aby zintegrować dowolny kanał, którego najbardziej pragniesz.

Dziękujemy za poświęcenie czasu na przeczytanie, w jaki sposób chmurowe centrum kontaktowe SeaX wykorzystuje komunikację omnichannel, aby zapewnić płynne wrażenia klienta i agenta. Bądź na bieżąco z naszym następnym wpisem na blogu, w którym zbadamy, co to znaczy być "rozproszonym centrum kontaktowym". Jeśli jesteś zainteresowany dowiedzeniem się więcej teraz, wypełnij nasz [formularz prośby o wersję demonstracyjną](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting), aby osobiście poznać platformę SeaX.`;export{a as default};

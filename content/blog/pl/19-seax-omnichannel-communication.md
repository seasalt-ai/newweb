---
title: "Przenieś Klientów z Dowolnego Kanału w Jedno Miejsce dzięki Komunikacji Omnichannel SeaX"
metatitle: "Ujednolic Kontakt z Klientem dzięki Komunikacji Omnichannel SeaX"
date: 2022-07-15T13:56:54-07:00
author: Kim Dodds 
draft: false
image: images/blog/19-seax-omnichannel-communication/0-thumbnail.png
description: "W tym blogu skupiamy się na jednej z komunikacji omnichannel SeaX, która pozwala na wyświetlanie wiadomości użytkowników z dowolnego kanału na platformie SeaX."
weight: 1
tags: ["SeaX"]
canonicalURL: "/blog/seax-omnichannel-communication/"
url: "/blog/seax-omnichannel-communication/"
---

*W naszym poprzednim wpisie na blogu, [Witamy w SeaX, Współpracującym Centrum Kontaktowym w Chmurze](https://seasalt.ai/blog/18-seax-collaborative-cloud-contact-center-introduction/), przedstawiliśmy nasze rozwiązanie współpracującego centrum kontaktowego w chmurze, SeaX. Podczas gdy nasz pierwszy wpis na blogu przedstawił kompleksowy przegląd podstawowych funkcji i bardziej zaawansowanych funkcji SeaX, nasze kolejne wpisy zagłębią się w niektóre z indywidualnych funkcji, które wyróżniają SeaX. W tym wpisie przyjrzymy się bliżej obsłudze omnichannel SeaX i zobaczymy, jak połączenia i wiadomości trafiają z różnych kanałów na platformę SeaX.*

# Spis Treści
- [Czym jest komunikacja omnichannel?](#what-is-omnichannel-communication)
- [Cykl życia wiadomości](#message-lifecycle)
    - [Kanał](#channel)
    - [Routing wiadomości](#message-routing)
    - [TaskRouter](#taskrouter)
    - [Platforma SeaX](#seax-platform)
- [Obsługiwane kanały](#supported-channels)

# Czym jest komunikacja omnichannel?

Aby zacząć, co właściwie oznacza „omnichannel”? Mówiąc prościej, „omni” to przedrostek oznaczający „wszystkie”, a „kanały” to różne platformy, za pośrednictwem których można wchodzić w interakcje z klientami. Zatem prosto mówiąc, „komunikacja omnichannel” oznacza możliwość komunikowania się za pośrednictwem wszystkich dostępnych kanałów. Co więcej, komunikacja omnichannel oznacza, że doświadczenie między kanałami jest płynne. Po stronie agenta, komunikacja ze wszystkich kanałów jest prezentowana w jednym ujednoliconym interfejsie. Dla klienta, dane dotyczące jego interakcji są zachowywane na wszystkich kanałach.

Tradycyjne centrum telefoniczne zazwyczaj obsługuje tylko połączenia telefoniczne. Bardziej zaawansowane centra kontaktowe, które łączą się z klientami za pośrednictwem wielu kanałów (takich jak e-mail, czat internetowy i telefon), posiadają wielokanałowe centrum kontaktowe. Jednak to, że centrum kontaktowe wykorzystuje wiele kanałów, nie oznacza, że ich doświadczenie jest płynne. W wielokanałowych centrach kontaktowych różne kanały mogą być dostępne za pośrednictwem indywidualnych platform i/lub dane klienta mogą nie być połączone między kanałami. W przeciwieństwie do tego, wielokanałowe centrum kontaktowe pozwala agentom śledzić rozmowę z klientem, gdziekolwiek się ona toczy, bez blokowania się na jednym kanale lub rozprzestrzeniania się na dziesiątki platform.

<center>
<img src="/images/blog/19-seax-omnichannel-communication/1-contact-center-comparison.png" alt="Porównanie funkcji: tradycyjne centrum telefoniczne vs centrum kontaktowe; wielokanałowe vs omnichannel."/>

*Porównanie funkcji: tradycyjne centrum telefoniczne vs centrum kontaktowe; wielokanałowe vs omnichannel.*
</center>

SeaX ma możliwość integracji z praktycznie każdym kanałem, w tym domyślnie: tekst, telefon, czat internetowy, Facebook i inne. Wszystkie wiadomości i połączenia są wyświetlane na jednej ujednoliconej platformie, a dane użytkownika ze wszystkich kanałów są łatwo dostępne.

Jeśli chcesz od razu przejść do demo, obejrzyj nasz krótki film demonstrujący komunikację omnichannel SeaX. W pozostałej części tego bloga omówimy, jak wiadomości i połączenia są kierowane z różnych kanałów do agentów w SeaX. Podzielimy się również kanałami, które są obsługiwane od razu po wyjęciu z pudełka, i omówimy, jak SeaX można rozszerzyć, aby objąć nowe kanały.

<iframe width="85%" height="450px" src="https://www.youtube.com/embed/usb-RK7sHlA" title="Odtwarzacz wideo YouTube" frameborder="0" allow="akcelerometr; autoodtwarzanie; schowek-zapis; zaszyfrowane-media; żyroskop; obraz-w-obrazie" allowfullscreen style="border-radius: 30px;"></iframe>

# Cykl życia wiadomości

SeaX jest zbudowany na bazie [Twilio Flex](https://www.twilio.com/flex), centrum kontaktowego opartego na chmurze, które wykorzystuje platformę komunikacji w chmurze Twilio. Twilio dostarcza podstawowe elementy konstrukcyjne dla SeaX, takie jak infrastruktura telekomunikacyjna, routing wiadomości i zadań oraz podstawowy interfejs użytkownika centrum kontaktowego. Teraz prześledźmy cykl życia przychodzącej wiadomości użytkownika i zobaczmy, jak SeaX wykorzystuje podstawową architekturę Twilio w połączeniu z niestandardowymi komponentami do kierowania wiadomości do agenta na żywo na platformie SeaX.

## Kanał

<center>
<img src="/images/blog/19-seax-omnichannel-communication/2-example-message.jpg" alt="Użytkownik wysyła wiadomość do firmy za pośrednictwem Google Business Messages.", style="width:50%"/>

*Wysyłanie wiadomości do firmy za pośrednictwem Google Business Messages.*
</center>

Podróż wiadomości rozpoczyna się od napisania i wysłania jej przez użytkownika na obsługiwanej platformie. Powyższy przykład pokazuje, jak ktoś wysyła wiadomość do chatbota Seasalt.ai w Google Business Messages. Google Business Messages nie jest domyślnie obsługiwane przez Twilio, dlatego wykorzystujemy niestandardowy łącznik kanałów opracowany przez Seasalt.ai, aby połączyć platformę Google z Twilio i SeaX.

Po wysłaniu wiadomość jest dostarczana przez niestandardowy łącznik do interfejsu API wiadomości Twilio. W tym momencie Twilio tworzy nowy kontekst rozmowy dla użytkownika i przygotowuje się do routingu wiadomości.

## Routing wiadomości

<center>
<img src="/images/blog/19-seax-omnichannel-communication/3-studio-flow.png" alt="Prosty Studio Flow, który kieruje wiadomości do chatbota lub agenta na żywo."/>

*Prosty Studio Flow, który kieruje wiadomości do chatbota lub agenta na żywo.*
</center>

Po odebraniu wiadomości przez Twilio, musi ona zostać przekierowana do właściwego miejsca. W tym celu używamy [Twilio Studio Flows](https://www.twilio.com/studio), aby określić, czy należy udzielić automatycznej odpowiedzi, przekazać wiadomość do chatbota, połączyć użytkownika z agentem na żywo, czy wykonać inną czynność.

W prostym przykładzie przedstawionym powyżej, wszystkie przychodzące wiadomości zostaną przekazane do chatbota, chyba że zawierają słowa „live agent”, w którym to przypadku użytkownik zostanie przekazany do agenta na żywo na platformie SeaX.

## TaskRouter

<center>
<img src="/images/blog/19-seax-omnichannel-communication/4-taskrouter.png" alt="Diagram architektury TaskRouter."/>

*Diagram architektury TaskRouter. [Źródło](https://twilio-cms-prod.s3.amazonaws.com/images/taskrouter-diagram.width-800.png).*
</center>

Po przeniesieniu wiadomości do SeaX, następnym krokiem jest decyzja, który agent ją otrzyma. [Twilio’s TaskRouter](https://www.twilio.com/taskrouter) dystrybuuje zadania, takie jak wiadomości i połączenia telefoniczne, do agentów w SeaX, którzy najlepiej sobie z nimi poradzą. Każdemu agentowi w SeaX można przypisać umiejętności, takie jak języki, którymi się posługuje, dział, w którym pracuje, czy powinien obsługiwać klientów VIP itp. TaskRouter sprawdzi znane informacje o użytkowniku i wiadomości, a następnie wybierze najbardziej odpowiedniego pracownika do rozwiązania problemu. Studio Flow z poprzedniego kroku można dostosować, aby uzyskać dodatkowe informacje (takie jak preferowany język), a informacje o kliencie mogą być zachowywane w rozmowach i kanałach, aby zapewnić płynne doświadczenie.

## Platforma SeaX

<center>
<img src="/images/blog/19-seax-omnichannel-communication/5-seax-incoming-messages.png" alt="Przychodzące połączenia i wiadomości wyświetlane na platformie SeaX.", style="width:50%"/>

*Przychodzące połączenia i wiadomości wyświetlane na platformie SeaX.*
</center>

Na koniec, przychodząca wiadomość zostanie wyświetlona odpowiedniemu agentowi na platformie SeaX. Agenci mogą obsługiwać wiele zadań z wielu kanałów jednocześnie. Na powyższym obrazku agent ma połączenie przychodzące, wiadomość z Facebooka i wiadomość z czatu internetowego. Agent może zaakceptować zadanie lub odrzucić je, aby zostało przekazane następnemu dostępnemu agentowi.

# Obsługiwane kanały

Mamy nadzieję, że teraz jest jaśniejsze, czym jest komunikacja omnichannel i jak poprawia ona doświadczenie użytkownika i agenta. Ostatnie pytanie brzmi: jakie kanały są faktycznie obsługiwane od razu po wyjęciu z pudełka?

<center>
<img src="/images/blog/19-seax-omnichannel-communication/6-channel-comparison.png" alt="Porównanie obsługiwanych kanałów między tradycyjnym centrum telefonicznym, podstawowym Twilio Flex i SeaX."/>

*Porównanie obsługiwanych kanałów między tradycyjnym centrum telefonicznym, podstawowym Twilio Flex i SeaX.*
</center>

Jak wspomniano wcześniej, tradycyjne centrum telefoniczne zazwyczaj obsługuje tylko połączenia telefoniczne. Firmy mogą nadal wchodzić w interakcje z klientami w mediach społecznościowych lub za pośrednictwem poczty elektronicznej, ale te wiadomości nie są zintegrowane z ujednoliconą platformą.

Twilio Flex, z drugiej strony, stanowi podstawę fantastycznego centrum kontaktowego omnichannel. Jednak ma niewiele kanałów dostępnych od razu po wyjęciu z pudełka. Oprócz połączeń telefonicznych i wiadomości tekstowych, mają również wsparcie beta dla Facebooka, WhatsAppa i poczty elektronicznej.

SeaX bazuje na Flex, aby dodać wbudowaną obsługę niektórych z najczęściej żądanych kanałów: takich jak Google Business Messages, Discord, Line i Instagram. Ponadto Seasalt.ai zawsze współpracuje z klientami, aby wprowadzać nowe kanały do oferty SeaX. SeaX jest wysoce konfigurowalny i łatwo rozszerzalny – co oznacza, że możemy współpracować z Twoją firmą, aby zintegrować dowolne kanały, których najbardziej potrzebujesz.

Dziękujemy za poświęcenie czasu na przeczytanie o tym, jak centrum kontaktowe w chmurze SeaX wykorzystuje komunikację omnichannel, aby zapewnić płynne doświadczenie klienta i agenta. Prosimy o śledzenie naszego następnego wpisu na blogu, który będzie badał, co to znaczy być „rozproszonym centrum kontaktowym”. Jeśli chcesz dowiedzieć się więcej od razu, wypełnij nasz [formularz rezerwacji demo](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting), aby zapoznać się z platformą SeaX.

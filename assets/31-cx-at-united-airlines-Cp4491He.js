const a=`---
title: "Obsługa klienta w United Airlines: dobre, złe i brzydkie"
metatitle: "Analiza obsługi klienta w United Airlines"
date: 2023-03-21 11:25:00-08:00
modified_date: 2025-07-28T16:56:53Z
draft: false
author: Xuchen Yao
description: "Xuchen Yao dzieli się swoimi ostatnimi doświadczeniami z obsługą klienta United Airlines podczas opóźnień i odwołań lotów oraz proponuje rozwiązania problemu dynamicznego skalowania obsługi klienta podczas szczytowego ruchu."
weight: 1
tags:
  - SeaX
image: images/blog/31-cx-at-united-airlines/flight-delay-illustration.png
canonicalURL: /blog/customer-service-at-united-airlines/
url: /blog/customer-service-at-united-airlines/
---

*Prezes [Seasalt.ai](https://seasalt.ai), Xuchen Yao, dzieli się swoimi ostatnimi doświadczeniami z obsługą klienta United Airlines po opóźnieniach i odwołaniach lotów. Doprowadziło go to do uświadomienia sobie wyzwań, przed którymi stoi obsługa klienta linii lotniczych w dynamicznym skalowaniu, aby poradzić sobie z nagłym wzrostem ruchu w takich sytuacjach. Xuchen mówi o potencjalnych ulepszeniach, takich jak przekierowanie ruchu samoobsługowego od agentów ludzkich, poprawa wydajności agentów ludzkich oraz rozwój technologii do proaktywnego identyfikowania i zmniejszania ryzyka potencjalnych problemów.*

Ten blog został napisany na pokładzie lotu UA2 z Singapuru do San Francisco w dniu 22.03.2023.

Niedawno miałem przyjemność lecieć lotem UA1 z San Francisco (SFO) do Singapuru (SIN). Przyjemność szybko zamieniła się w nieszczęście z powodu odwołania lotu. Oto, czego nauczyłem się o obsłudze klienta United z perspektywy technologa, który buduje centra kontaktowe.



# Lot z dwoma opóźnieniami: opóźniony i odwołany

Oto plan podróży do Singapuru z Seattle we wtorek 14.03.2023:

<center>
<img src="/images/blog/31-cx-at-united-airlines/united-flights.png" alt="Moje zaplanowane loty United"/>

*7:29 – 09:42, z Seattle (SEA) do San Francisco (SFO) lotem UA2368. 11:50 – 08:15, z San Francisco (SFO) do Singapuru (SIN) lotem UA29.*
</center>

Niestety, nie skorzystałem z żadnego z tych lotów.

Pierwszy lot opóźnił się o 1,5 godziny z powodu zatoru na lotnisku w Seattle (o 7 rano!). To zredukowało mój czas na przesiadkę do 0 w SFO. Rozmawiałem z obsługą naziemną w SEA i skierowali mnie na lot Alaska Airlines z SEA do SFO. Ten lot Alaska Airlines również się opóźnił, ale i tak dotarł do SFO o 11 rano, dając mi ledwo wystarczająco czasu na złapanie następnego lotu.

**DOBRE**: United pozwoliło mi bezpłatnie zmienić lot na Alaska Airlines.

**DOBRE**: United bardzo proaktywnie informowało o opóźnieniach za pomocą krótkiego kodu „26266”. Gdy nastąpiło opóźnienie, oferowało nawet opcje zmiany rezerwacji lotów.

**ZŁE**: Opcja zmiany rezerwacji lotu jest ograniczona tylko do lotów United. Brak możliwości zmiany rezerwacji między liniami lotniczymi. Musiałem rozmawiać z człowiekiem, aby zostać przeniesionym na inny lot.

**BRZYDKIE**: Dlaczego lotnisko SEA było tak zakorkowane o 7 rano?!

<center>
<table>
  <tr>
    <td><img src="/images/blog/31-cx-at-united-airlines/united-text-support-1.jpg" alt="Wsparcie tekstowe United - 1"/></td>
    <td><img src="/images/blog/31-cx-at-united-airlines/united-text-support-2.jpg" alt="Wsparcie tekstowe United - 2"/></td>
  </tr>
 </table>

*System wiadomości tekstowych United Airlines jest terminowy i proaktywny.*
</center>


1. Co ciekawe, **na** UA1. Pozostaliśmy na ziemi przez 3 godziny i ostatecznie lot został odwołany z powodu następujących wydarzeń:
2. Najpierw w San Francisco wiał bardzo silny wiatr, który uziemił wszystkie loty.
Następnie, gdy loty zostały dopuszczone, wszystkie samoloty czekały w bardzo długiej kolejce na start.
3. W końcu, gdy prawie nadeszła nasza kolej, piloci powiedzieli, że pracują w nadgodzinach i zgodnie z przepisami FAA, kontynuowanie lotu byłoby dla nich nielegalne. Ponieważ lot do Singapuru trwał 17 godzin, a biorąc pod uwagę czas spędzony na ziemi, przekroczyliby limit, zanim dotarliby do Singapuru.

Niestety, nie było pilotów zastępczych, więc cały lot został odwołany.

**BRZYDKIE**: Przez całe 3 godziny na ziemi United zaoferowało 2 herbatniki. To wszystko.

Wszyscy wybiegli z samolotu, zastanawiając się, jak to wpłynęło na ich podróż. Ponieważ był to lot międzynarodowy, do Singapuru dotarlibyśmy innego dnia. Nie następnego dnia, ale faktycznie dwa dni później: ponieważ Singapur jest 15 godzin do przodu, a lot trwa 17 godzin.

Następnie około 300 pasażerów pobiegło do naziemnej obsługi klienta United. Kiedy dotarłem do obsługi klienta United, przede mną stało już około 200 osób. Wielu z nich zostało dotkniętych z powodu pogody z innych lotów obsługiwanych przez United.

Rozmowa z agentem naziemnym byłaby beznadziejna, biorąc pod uwagę, jak wolno przesuwała się kolejka. Wiem, że tego samego dnia jest jeszcze jeden lot o 23:00 do Singapuru, również z United. Mam nadzieję, że uda mi się zmienić rezerwację na ten lot o 23:00. Prawdopodobnie wielu ludzi z mojego lotu chciało zrobić to samo, ale wszyscy stali w kolejce tak jak ja.

Oto, co zrobiłem:

1. Zadzwoniłem do United przez telefon: 800-864-8331
2. Wysłałem SMS-a do wirtualnego agenta United za pomocą krótkiego kodu: 32050.
3. Użyłem strony internetowej United, aby spróbować porozmawiać z agentem przez wideo czat.
4. Stałem również w kolejce do agenta naziemnego.

Byłem dosłownie klientem **wielokanałowym**, gdy musiałem natychmiast rozwiązać ważny i naglący problem.


**DOBRE**: United oferowało 4 różne sposoby kontaktu z obsługą klienta.

**DOBRE**: Potwierdzając numer lotu, United był w stanie sprawdzić jego status i wiedział, że lot jest dotknięty, oraz oferował opcje zmiany rezerwacji/anulowania.

**ZŁE**: Szacowany czas oczekiwania na telefon był bardzo niedokładny. Powiedziano mi, że czas oczekiwania wynosi 2 minuty, ale czekałem 45 minut, aby porozmawiać z agentem.

**ZŁE**: Chatbot jest bardzo głupi. Musiałem podążać za jego „menu”, naciskając 1/2/3/4 lub A/B/C/D/E jako odpowiedzi.

<center>
<table>
  <tr>
    <td><img src="/images/blog/31-cx-at-united-airlines/united-text-support-3.jpg" alt="Wsparcie tekstowe United - 3"/></td>
    <td><img src="/images/blog/31-cx-at-united-airlines/united-text-support-4.jpg" alt="Wsparcie tekstowe United - 4"/></td>
    <td><img src="/images/blog/31-cx-at-united-airlines/united-text-support-5.jpg" alt="Wsparcie tekstowe United - 5"/></td>
  </tr>
 </table>

*Chatbot United Airlines wykorzystuje technologię ostatniej generacji, która oferuje kartę menu, aby ograniczyć wprowadzanie danych przez pasażerów.*
</center>


**BRZYDKIE**: Na ziemi było dosłownie mniej niż 10 agentów obsługi klienta, którzy mieli do czynienia z ponad 1000 poszkodowanych pasażerów. Stworzyło to niepokój, złość, bezradność i presję zarówno na klientów, jak i agentów. Dzieje się tak, ponieważ gdy nasz lot został odwołany, obsługa naziemna i personel pokładowy powiedzieli wszystkim, aby rozmawiali z ich naziemną obsługą klienta. **Instruowanie każdego poszkodowanego pasażera, aby rozmawiał z mniej niż 10 naziemnymi agentami obsługi klienta, stworzyło fizyczny atak „DDOS” na naziemną obsługę klienta United.**

DDOS oznacza „Distributed Denial of Service” (rozproszona odmowa usługi), gdy hakerzy kierują ruch z milionów miejsc do jednej witryny, aby uczynić ją nieodpowiedzialną na wszelkie usługi.

**BRZYDKIE**: Użyłem 4 kanałów, aby porozmawiać z United (tekst, czat wideo, połączenie telefoniczne, naziemne). Wykorzystałem 4 razy więcej zasobów, a każdy inny mógł zrobić to samo. To sztucznie zwiększyło ruch i presję na obsługę klienta United o 4 razy. Przypuszczam, że każdy inny pasażer zrobił to samo, ponieważ to wyjaśnia, dlaczego mój „czas oczekiwania 2 minuty” ostatecznie stał się 45 minutami.

Ostatecznie udało mi się połączyć telefonicznie, a agent poświęcił około 20 minut na zmianę mojej rezerwacji na późniejszy lot o 23:00 do Singapuru tego samego dnia. Kiedy skończyłem, nadal byłem w kolejce na czacie wideo, zajmowałem się chatbotem (ironicznie nazywanym liveperson) i oczywiście fizycznie stałem w kolejce.

Powiedziałem młodemu człowiekowi stojącemu za mną z tego samego lotu, żeby zadzwonił do United. Powiedział: „Nie ma mowy, to potrwa wieki!”. Ale ja powiedziałem: „Właśnie zmieniłem rezerwację przez telefon. Spójrz, przed nami jest 200 osób, ile czasu myślisz, że będziesz czekać w kolejce?”

Później o 23:00 spotkałem tego młodego człowieka na moim zmienionym locie. Był tak szczęśliwy, że mnie zobaczył i nie mógł mi wystarczająco podziękować za „wskazówkę telefoniczną”. Miał na sobie koszulkę z napisem „tiktok” i wysokiej klasy słuchawki, więc pomyślałem, że może jest obeznany z technologią lub przynajmniej dobrze radzi sobie z komputerami.

**BRZYDKIE**: Postrzeganie przez „obeznanego z technologią” klienta było takie, że rozmowy telefoniczne nic dla niego nie rozwiążą, wolałby fizycznie czekać w kolejce, aby porozmawiać z prawdziwą osobą, podczas gdy wyraźnie widział, jak długa była kolejka. **To odzwierciedla, jak źle ogół społeczeństwa myśli o bezużyteczności wsparcia telefonicznego.**

# Obsługa klienta linii lotniczych: głównym problemem jest dynamiczna skalowalność

Z doświadczeniem opóźnienia jednego lotu i odwołania drugiego tego samego dnia, oraz rozmów z obsługą klienta przez 4 różne kanały dwukrotnie, a także z głębokim zrozumieniem, jak budowane są centra kontaktowe – uważam, że głównym problemem obsługi klienta linii lotniczych jest to:

**Obsługa klienta linii lotniczych nie może dynamicznie się skalować. Lub, ujmując to w terminach przetwarzania w chmurze: Obsługa klienta linii lotniczych nie jest elastyczna.**

To nie tylko zdarzyło się w United. Miałem podobne doświadczenia z Air Canada podczas Covid-19: każda rozmowa telefoniczna trwała ponad 2 godziny oczekiwania.

Nie sądzę nawet, że głupi chatbot czy nieempatyczny agent ludzki jest głównym problemem. Obsługa klienta ma swój unikalny wzorzec, że przychodzą falami: **zazwyczaj, gdy lot jest dotknięty, dziesiątki lub setki pasażerów próbują skontaktować się w tym samym czasie, czasami z mnożnikiem 4 przez kanały krzyżowe.**

Ten rodzaj nagłego wzrostu ruchu nie jest dobrze obsługiwany przez nowoczesne centra kontaktowe linii lotniczych. Co gorsza, wszystkie te problemy są „czerwonym kodem”: muszą zostać rozwiązane _natychmiast_. Przepraszam, brak asynchronicznej obsługi e-mail opartej na Zendesk. _Muszę teraz porozmawiać z agentem_. 

# Obsługa klienta linii lotniczych: ludzie się nie skalują

Zastanówmy się, jak strona e-commerce przygotowuje się na szczytowy ruch, taki jak Czarny Piątek:
1. **Przewidzieć**, jaki rodzaj ruchu otrzyma w jakim czasie.
2. **Wstępnie przydzielić** wystarczające zasoby serwera, kontaktując się z dostawcami chmury lub zwiększając limit swoich klastrów serwerów.
3. **Dynamicznie tworzyć** więcej serwerów, gdy ruch wzrasta.

Czy obsługa klienta linii lotniczych może zrobić to samo?
1. **Przewidzieć**: istnieją modele, których moglibyśmy użyć do przewidywania, kiedy lot zostanie dotknięty, ale nie wiem, czy ich używają. Na przykład można wziąć pod uwagę następujące czynniki:
    * Ruch wokół lotniska – łatwo pobierany z Google Maps
    * Zatory na lotnisku – niektóre lotniska mają aktualizacje w czasie rzeczywistym
    * Lokalna pogoda
    * Zwykłe wzorce podróży, takie jak święta
    * Lokalne wydarzenia, które powodują duży napływ i odpływ pasażerów, takie jak CES w Las Vegas
    * Inne sygnały, takie jak warunki samolotu
    * Statusy historii
2. **Wstępnie przydzielić**: Wierzę, że to właśnie robi lub powinien robić każdy przewoźnik lotniczy w okresie świątecznym, zatrudniając więcej agentów. Z pewnością mam nadzieję, że tak robią. Wiem, że TurboTax zatrudnia więcej osób w okolicach terminów składania zeznań podatkowych.
3. **Dynamicznie tworzyć**: to najtrudniejszy przypadek. Po prostu nie ma łatwego sposobu, aby to zrobić z ludźmi, zwłaszcza z przeszkolonymi, doświadczonymi agentami.

# Obsługa klienta linii lotniczych: jak skalować

Naszym głównym celem jest radzenie sobie z nagłym wzrostem ruchu, gdy pasażerowie muszą rozwiązać swoje problemy na miejscu, bez opóźnień.
1. Cyfrowe kanały samoobsługowe nie wydają się być w stanie całkowicie zastąpić agentów ludzkich z następujących dwóch powodów:
Cyfrowe kanały samoobsługowe są ograniczone i nie oferują wystarczającego dostępu do zaplecza, jaki ma agent ludzki.
2. Pasażerowie psychologicznie chcą rozmawiać z człowiekiem, ponieważ tradycyjnie zautomatyzowane rozwiązania nie pomagały, zwłaszcza niesławne chatboty.

Rozwiązanie nie jest tak proste, ponieważ ludzie są trudni do skalowania. Ale były też sposoby na jego rozwiązanie:
1. Wiele problemów nadal można rozwiązać za pomocą kanałów samoobsługowych. Musimy je zidentyfikować i przekierować ruch samoobsługowy od agentów ludzkich.
    * Na przykład, gdy mój lot został odwołany – wszystko, czego chciałem, to zmienić rezerwację lotów. Ale United nie zaoferowało mi tej opcji i musiałem zadzwonić. Jednak gdy mój lot był opóźniony, United proaktywnie zaoferowało mi opcję zmiany rezerwacji. Rozwiązania obu problemów są takie same – nie muszę rozmawiać z agentem, gdy mój lot jest odwołany, bardziej niż gdy mój lot jest opóźniony. Dlaczego nie mogę skorzystać z samoobsługi?
2. Agenci ludzcy mogą być bardziej wydajni podczas czatu lub rozmowy.
    * Agent obsługi klienta potrzebował około 30 minut, aby zmienić moją rezerwację, z czego około 15 minut trzymał mnie na czekaniu, podczas gdy ona nad czymś pracowała.
    * Pozostałe 15 minut, kiedy rozmawiała ze mną: połowę czasu zbierała informacje.
    * Uważam, że przy optymalizacji, 30 minut można skrócić do 5-10 minut, jeśli zbieranie informacji i automatyzacja zostaną wykonane prawidłowo.

Gdybym miał zbudować system centrum kontaktowego dla United, zrobiłbym to:
1. Oferuj czat i połączenia telefoniczne jako podstawowe kanały obsługi klienta. Nie przekierowuj całego samolotu pasażerów do naziemnej obsługi klienta (wszyscy widzieliśmy, jak zatłoczone są wypożyczalnie samochodów po wylądowaniu dużego samolotu w miejscu turystycznym).
2. Połącz klientów wielokanałowych w jeden kanał. Oznacza to jak najszybsze zidentyfikowanie klientów. To znacznie zmniejszy rozmiar kolejki i zaoszczędzi przepustowość agenta.
3. Stwórz bardziej inteligentne wsparcie oparte na czacie. Obecna generacja chatbotów staje się przestarzała, nieaktualna i bardzo niepopularna po pojawieniu się ChatGPT. Niech ChatGPT zajmie się rozmową – z naszego doświadczenia wynika, że robi to lepiej niż ludzie!
4. Podkreślaj wydajność agentów ludzkich: wykonanie zadania nie wystarczy, jeśli każde połączenie trwa 45 minut; pomóżmy im szybko rozwiązywać problemy, oferując:
    * Sugestie „następnego najlepszego działania”
    * „Poprzednie udane rozwiązania” oparte na logach czatu lub połączeń innych agentów
    * Współpracownik w czasie rzeczywistym, który pomaga w realizacji do systemów zaplecza za pośrednictwem wywołań API lub automatyzacji RPA
5. Zbuduj model przewidywania ryzyka nagłego wzrostu liczby zgłoszeń do obsługi klienta i proaktywnie nad nim pracuj.

Nigdy nie zdarzyło mi się, żeby agent obsługi klienta proaktywnie skontaktował się ze mną w celu rozwiązania problemu. Zawsze to ja, pasażer, frustrująco czekałem i dzwoniłem w kolejce i na linii.

My w [Seasalt.ai](https://seasalt.ai/?utm_source=blog) z przyjemnością zbudujemy technologię podobną do „raportu mniejszości”, aby zidentyfikować problem, zanim się pojawi, zmniejszyć ryzyko poprzez proaktywne dotarcie do poszkodowanych pasażerów i sprostać wyzwaniu dynamicznego skalowania centrum kontaktowego z ludźmi podczas szczytowego ruchu.

Jeśli w ciągu najbliższych kilku lat otrzymam telefon od linii lotniczej informujący o potencjalnym problemie, zanim spróbuję szukać pomocy, będzie to naprawdę niesamowite doświadczenie klienta i zachwycająca podróż, zanim jeszcze wyruszę w podróż. Która linia lotnicza zrobi to pierwsza, zdobędzie tak wielu lojalnych pasażerów.
`;export{a as default};

const e=`---
title: "Od dema do sukcesu: Poza sprzętem (5/5)"
metatitle: "Od dema do sukcesu (5/5): Poza sprzętem"
date: 2021-09-15 17:24:32-07:00
modified_date: 2025-07-28T16:56:53Z
draft: false
author: Cody Kim
description: "W ostatniej części tej serii blogów, śledź podróż Seasalt.ai do stworzenia SeaMeet, naszych wspólnych, nowoczesnych rozwiązań do spotkań."
weight: 1
tags:
  - SeaMeet
image: images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/SeaMeet animation.gif
canonicalURL: /blog/seameet-voice-hardware/
url: /blog/seameet-voice-hardware/
---

*W całej tej serii blogów, śledź podróż Seasalt.ai do stworzenia wszechstronnego doświadczenia w zakresie nowoczesnych spotkań, począwszy od skromnych początków, poprzez optymalizację naszych usług na różnym sprzęcie i modelach, aż po integrację najnowocześniejszych systemów NLP i wreszcie pełną realizację SeaMeet, naszych wspólnych, nowoczesnych rozwiązań do spotkań.*

## Poza nowoczesnymi spotkaniami

W Seasalt.ai podziwialiśmy obecne możliwości pokazane na demo Build 2019 tego produktu, ale bardziej interesuje nas to, czym ten produkt może się stać, jak przenieść transkrypcję rozmów poza naśladownictwo. Ale zanim będziesz mógł pokonać konkurencję, musisz najpierw dogłębnie zrozumieć grę, w którą grasz. I tak narodził się SeaMeet. W początkowej fazie patrzyliśmy na Azure jako model do zrozumienia podstaw tego, co tworzy solidną usługę transkrypcji i wykorzystaliśmy usługi mowy Azure jako nasz backend, aby wykorzystać tę ugruntowaną technologię.

Podobnie jak w przypadku każdego młodego produktu, natychmiast pojawiły się wyzwania. Chcąc szybko wprowadzić nasz produkt na rynek, zdecydowaliśmy się na użycie zestawu mikrofonów Microsoft Kinect DK, promowanego jako sprzętowy odpowiednik usług mowy i rzekomo dostrojonego do uzyskania optymalnej wydajności z automatycznych modeli rozpoznawania mowy Azure. Chociaż jest to niezaprzeczalnie dobrze skonstruowane i dobrze zaprojektowane urządzenie, jest ono wyposażone w pełną aluminiową obudowę, szerokokątny obiektyw, kamerę głębi i 7-mikrofonowy zestaw. Ma również wysoką cenę, tuż poniżej 400 dolarów. Od kwietnia 2021 roku Kinect DK miał poważny problem z niedoborem zapasów. Nadal jest niedostępny w momencie pisania tego tekstu we wrześniu 2021 roku. To dodatkowo potwierdziło, że Kinect nie jest dla nas odpowiednim urządzeniem.

<center>
<img src="/images/blog/7-seameet-voice-intelligence-meeting-transcription-hardware/kinect_store_page.png"/>

*Azure Kinect DK był niedostępny od 2021/4 w momencie publikacji tego artykułu (2021/9)*
</center>

Zestaw mikrofonów jest pierwszym elementem w potoku transkrypcji rozmów. Jako dostawcy usług transkrypcji, musimy być w stanie w sposób zrównoważony i niezawodny pozyskiwać nasz sprzęt.

Nasza podróż w poszukiwaniu idealnego zestawu mikrofonów doprowadziła nas do dwóch opcji: [Respeaker Array v2.0](https://www.seeedstudio.com/ReSpeaker-Mic-Array-v2-0.html) i [Respeaker Core v2.0](https://www.seeedstudio.com/ReSpeaker-Core-v2-0.html). Oba te urządzenia to zestawy okrągłe, odpowiednio z czterema i sześcioma mikrofonami, co jest kluczową cechą umożliwiającą lokalizację źródła w 360 stopniach i pozwalającą nam łatwo zintegrować te nowe urządzenia z naszym istniejącym systemem. Prawdziwe piękno tych urządzeń polega na tym, że są one wyposażone w wbudowane algorytmy przetwarzania sygnału, w tym redukcję szumów, eliminację echa i kształtowanie wiązki, które są idealnie dostrojone do wymiarów mikrofonu.

<center>
<img src="/images/blog/7-seameet-voice-intelligence-meeting-transcription-hardware/respeaker_array.png" alt="Respeaker Array v2.0 demonstrujący VAD i lokalizację źródła"/>

*Respeaker Array v2.0 demonstrujący VAD i lokalizację źródła*
</center>

<center>
<img src="/images/blog/7-seameet-voice-intelligence-meeting-transcription-hardware/array_demo.jpg" alt="Demonstracja spotkania na żywo z Respeaker Array v2.0"/>

*Demonstracja spotkania na żywo z Respeaker Array v2.0*
</center>

W przypadku czteromikrofonowego Array v2.0, które było w pełni zasilane przez port USB, oznaczało to, że komputer użytkownika musiał skupić się jedynie na przesyłaniu dźwięku do serwera. To odciąża przetwarzanie sygnału na zestaw mikrofonów.


<center>
<img src="/images/blog/7-seameet-voice-intelligence-meeting-transcription-hardware/core_demo.png" alt="Respeaker Core v2.0 na zdjęciu z demo"/>

*Respeaker Core v2.0 na zdjęciu z demo*
</center>

Jeszcze bardziej przekonujący jest Core v2.0 wyposażony w procesor ARM i 1 GB pamięci RAM. Zdolny do uruchomienia pełnej dystrybucji Linuksa i posiadający więcej niż wystarczającą moc obliczeniową do uruchomienia naszego skryptu klienta, nie tylko odciążyliśmy przetwarzanie z komputera użytkownika za pomocą tego urządzenia, ale całkowicie wyeliminowaliśmy potrzebę podłączania komputera do mikrofonu. Ponieważ zestawy mikrofonów wykonują teraz ciężkie przetwarzanie, zmniejszyliśmy wymagania sprzętowe potrzebne do uruchomienia naszego produktu, a tym samym skutecznie zwiększyliśmy naszą publiczność, która może skorzystać z SeaMeet.

<center>
<img src="/images/blog/7-seameet-voice-intelligence-meeting-transcription-hardware/respeaker_core.png" alt="Przykład Core v2.0 samodzielnego umieszczenia mikrofonu"/>

*Przykład Core v2.0 samodzielnego umieszczenia mikrofonu*
</center>

Kolejną unikalną cechą tych zestawów mikrofonów jest brak obudowy. Oba są dostarczane jako gołe płytki PCB z odsłoniętymi mikrofonami, chipami i portami. Chociaż wielu uzna to za niedogodność, my widzimy w tym okazję do stworzenia naprawdę jedynego w swoim rodzaju urządzenia, które jest niezaprzeczalnie Seasalt.

    Dzięki tym urządzeniom, zamykamy nasz prototyp SeaMeet, naszej nowej, najnowocześniejszej usługi transkrypcji spotkań. I tym samym kończymy naszą pięcioczęściową serię, zaczynając od momentu, gdy SeaMeet było niczym więcej niż ziarnem zainspirowanym demonstracją Microsoftu, a kończąc na w pełni niezależnym produkcie. Nadal na wczesnym etapie, SeaMeet ma przed sobą ekscytującą podróż, ponieważ nadal udoskonalamy nasz system diaryzacji, sens spotkania i modele językowe. Zespół Seasalt.ai chętnie będzie nadal rewolucjonizował sposób prowadzenia biznesu na świecie.
`;export{e as default};

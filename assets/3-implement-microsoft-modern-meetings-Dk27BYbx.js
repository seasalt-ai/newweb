const e=`---
title: "Od demo do sukcesu: Wdrażanie nowoczesnych spotkań Microsoft i nie tylko (1/5)"
metatitle: "Od demo do sukcesu (1/5): Poza nowoczesnymi spotkaniami Microsoft"
date: 2021-07-19
modified_date: 2025-07-29 20:45:17+00:00
draft: false
author: Cody Kim
description: "W pierwszej części tej serii blogów śledź podróż Seasalt.ai do stworzenia SeaMeet, naszych wspólnych nowoczesnych rozwiązań do spotkań."
weight: 1
tags:
  - SeaMeet
image: images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/SeaMeet animation.gif
canonicalURL: /blog/microsoft-modern-meetings/
url: /blog/microsoft-modern-meetings/
---

*W całej tej serii blogów śledź podróż Seasalt.ai do stworzenia wszechstronnego doświadczenia nowoczesnych spotkań, począwszy od skromnych początków, poprzez optymalizację naszych usług na różnych sprzętach i modelach, po integrację najnowocześniejszych systemów NLP i wreszcie pełną realizację SeaMeet, naszych wspólnych nowoczesnych rozwiązań do spotkań.*

### Przyszłość nowoczesnych spotkań

[![Demo usługi zamiany mowy na tekst Microsoftu z MS Build 2019](/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/ms-build-play.png)](https://www.youtube.com/watch?t=100&v=EYinMnQWgfU&feature=youtu.be)

Na konferencji Microsoft Build 2019 Microsoft poruszył publiczność, prezentując najnowsze rozwiązania w dziedzinie przetwarzania w chmurze: Azure Speech Services, a dokładniej ich aplikację Meeting Transcription. Po jej wprowadzeniu ten transkrybent rozmów natychmiast znalazł się w centrum uwagi wszystkich i zyskał wzmianki w czołowych blogach i czasopismach technologicznych. Demonstracja, zilustrowana w poniższym filmie z 2019 roku, pokazała wiele możliwości Azure Speech Services. Mało kto wiedział, że szybko stało się to zapowiedzią tego, jak nowoczesne spotkania będą odbywać się w warunkach globalnej pandemii i po pandemii: od fizycznych do wirtualnych, a następnie hybrydowych.

<center>
<img src="/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/azure-demo.png" alt="Demonstracja na żywo usługi zamiany mowy na tekst i identyfikacji mówcy Microsoft Azure na MS Build 2019"/>
</center>

Reklamowana jako platforma do transkrypcji rozmów, prezentacja usługi transkrypcji spotkań Azure firmy Microsoft, trafnie nazwana „Przyszłością nowoczesnych spotkań”, ugruntowała pozycję ich nowej usługi jako solidnej i wydajnej platformy zamiany mowy na tekst (STT), odpowiedniej dla wszystkich firm poszukujących sposobu na szybkie i uporządkowane rejestrowanie wszystkich ważnych konferencji.

Co sprawia, że ta usługa jest szczytem transkrypcji spotkań? Po pierwsze, wydajność w czasie rzeczywistym. W miarę jak technologia staje się coraz szybsza, cierpliwość staje się coraz mniejsza, gdzie nawet kilkusekundowe opóźnienie wystarczy, aby zirytować przeciętnego użytkownika. Jednak Microsoft udowodnił, że ich transkrybent rozmów jest wystarczająco szybki, zapewniając dokładne transkrypcje szybciej niż niektóre usługi napisów, co sprawia, że możliwe jest śledzenie równoległej rozmowy za pomocą samego tekstu.

Następnie Microsoft zaprezentował również swoje możliwości identyfikacji mówcy. Kończenie z bałaganem nieuporządkowanego tekstu rozmowy jest frustrujące i bezużyteczne, ale identyfikacja mówcy automatycznie oznacza każdą wypowiedź mówcą, tworząc łatwy do przyswojenia format.

![Interfejs użytkownika usługi zamiany mowy na tekst i identyfikacji mówcy Microsoft Azure](/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/azure-ui.png)

Codziennie sprzęt komputerowy staje się coraz potężniejszy, a firmy starają się wycisnąć ostatnie soki z najnowszych procesorów i kart graficznych. Często starsza technologia odchodzi w zapomnienie, a klienci są zmuszeni do modernizacji co kilka lat, aby pozostać na bieżąco w społeczeństwie. W „Przyszłości nowoczesnych spotkań” Microsoft zoptymalizował Azure Speech Service do działania na sprzęcie konsumenckim, jednocześnie utrzymując ciężkie obliczenia po swojej stronie, co jeszcze bardziej rozszerza już i tak ogromną populację, która może skorzystać z tej usługi.

Usługa transkrypcji spotkań Azure ma na celu optymalizację sposobu prowadzenia działalności. Każda organizacja dobrze by zrobiła, włączając taki produkt do swojego przepływu pracy. Na co dzień informacje stale płyną, a każdy bit jest tak samo ważny jak poprzedni, niezależnie od tego, czy są to przypomnienia, zadania czy aktualizacje. Zbyt często rzeczy giną w szczelinach, co oznacza zmarnowany czas i zmarnowane zyski. Rozwiązanie Microsoftu oferuje kompletny, automatycznie generowany zapis, dokładnie określający, co zostało powiedziane i kto to powiedział, więc minęły czasy brakujących informacji i ślepego przeszukiwania długich nagrań audio w poszukiwaniu konkretnej sekcji. Teraz wszystkie potrzebne informacje są starannie ułożone, abyś mógł się do nich odwoływać tak często, jak potrzebujesz. Ta technologia jest ważniejsza niż kiedykolwiek. Jeśli rok 2020 czegoś nas nauczył, to potrzeby elastyczności, zwłaszcza w miejscu pracy. Ludzie chorują i pojawiają się nieprzewidziane wydarzenia, więc praktycznie niemożliwe jest oczekiwanie, że pracownicy będą uczestniczyć w każdej dyskusji. Dzięki nowoczesnym spotkaniom jesteśmy o krok bliżej do możliwości dostosowania się do tych nieoczekiwanych wydarzeń, zasadniczo dając każdemu możliwość bycia tam, nie będąc tam fizycznie.

### Wdrażanie nowoczesnych spotkań

W połowie 2020 roku otrzymaliśmy zapytanie ofertowe od klienta rządowego w Singapurze. Tak, nadal była pandemia. Ale Singapur miał ją pod kontrolą, więc spotkania rządowe nadal odbywały się w fizycznych salach konferencyjnych. Chcieli nowoczesnego rozwiązania, które potrafiłoby transkrybować mowę z maksymalnie 12 różnych mówców. Ponadto identyfikacja mówcy odegrałaby tutaj ważną rolę.

W kwestii identyfikacji mówcy, jedną znaczącą różnicą między tym, co oferuje Azure, a tym, czego potrzebuje klient, jest „rejestracja” głosu: Azure wymaga pewnych nagranych wcześniej głosów od wszystkich mówców, aby zarejestrować ich odcisk głosu w systemie. Jednak niemożliwe jest proszenie niektórych, prawdopodobnie bardzo ważnych urzędników państwowych, aby siedzieli przed mikrofonem w celu nagrania. Dostosowaliśmy proces, wykonując najpierw niekontrolowane grupowanie mówców (zwane również diaryzacją mówców). Idea polega na tym, że jeśli mówca raz przemówił w naszym systemie, rozpoznamy go następnym razem, gdy przemówi.

![Diagram przepływu usług zamiany mowy na tekst i identyfikacji mowy Microsoft Azure](/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/azure-diagram.png)

*Architektura nowoczesnych spotkań z [Azure Conversation Transcription](https://docs.microsoft.com/en-us/azure/cognitive-services/speech-service/conversation-transcription). W naszej adaptacji złagodziliśmy wymóg „rejestracji użytkownika” przed spotkaniem na po spotkaniu.*


Następnie szybko zebraliśmy nasz arsenał do całego projektu. Pierwszym krokiem było pozyskanie wysokiej jakości macierzy mikrofonowej, która dostarczyłaby krystalicznie czyste dane audio do naszych modeli rozpoznawania. Natychmiast urzekł nas Azure Kinect: stylowa, 7-mikrofonowa macierz umieszczona w pełnej aluminiowej obudowie z dodatkowym bonusem w postaci kamery wysokiej rozdzielczości i czujników głębi.

<center>
<img src="/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/kinect.png" alt="Azure Kinect DK za 400 USD jest używany do nowoczesnych spotkań"/>

*Azure Kinect DK za 400 USD [Azure Kinect DK](https://azure.microsoft.com/en-us/services/kinect-dk/) jest używany do nowoczesnych spotkań*
</center>

Już sam wygląd sprawia, że jest to naprawdę wyrafinowane urządzenie, które uzupełni każdą salę konferencyjną, ale co ważniejsze, potężna macierz mikrofonowa obiecywała jakość, której szukaliśmy. Dzięki okrągłemu układowi siedem mikrofonów otworzyło możliwość zastosowania najnowocześniejszych technik przetwarzania sygnałów, takich jak lokalizacja źródła i kształtowanie wiązki. Ten mikrofon był również idealnym połączeniem z naszym zapleczem, które wykorzystywało Azure Speech Services, ugruntowaną platformę zamiany mowy na tekst, dającą naszemu produktowi moc potrzebną do bycia najlepszym transkrybentem spotkań.

<center>
<img src="/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/kinect-spec.png" alt="Azure Kinect DK jest wyposażony w 7-mikrofonową macierz do zbierania głosów"/>

*Azure Kinect DK jest wyposażony w 7-mikrofonową macierz do zbierania głosów*
</center>

Chociaż Azure nie znalazł się w ostatecznej wersji SeaMeet, dał nam początek, którego potrzebowaliśmy, aby zrealizować naszą wizję. Na koniec połączyliśmy to wszystko z interfejsem użytkownika. W naszej pierwszej iteracji zadowoliliśmy się ogólnym, opartym na Javie projektem, który, choć prosty, był w pełni funkcjonalny. Ponieważ urządzenie Kinect nie może uruchamiać zewnętrznego kodu, wszystko to musiało działać na dodatkowym, pojedynczym laptopie z systemem Windows. Mimo że początkowo było to trochę niedopracowane, z dumą możemy powiedzieć, że mieliśmy w pełni funkcjonalny produkt do transkrypcji spotkań.

<center>
<img src="/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/seameet-old.png" alt="Początkowa konfiguracja usługi SeaMeet Seasalt.ai przy użyciu macierzy mikrofonowej Microsoft Kinect"/>

*Wdrażanie nowoczesnych spotkań z Azure Kinect i komputerem z systemem Windows, który uruchamia prosty interfejs użytkownika oparty na Javie, aby wyświetlać transkrypcję spotkań w czasie rzeczywistym i identyfikację mówcy.*
</center>

### Wdrażanie nowoczesnych spotkań

W połowie 2021 roku nasi inżynierowie przybyli do Singapuru, aby wdrożyć nasze nowoczesne rozwiązanie biznesowe jako dowód koncepcji. Rywalizując z dwiema innymi konkurencyjnymi firmami, każda z nich miała za zadanie zademonstrować swoją wizję przyszłości spotkań.

Pomimo faktu, że technologia bezprzewodowa stała się normą w ciągu ostatniej dekady, stwierdziliśmy, że nasi konkurenci nadal wybierali rozwiązania przewodowe. Jak widać na zdjęciu, każdy z 12 głośników był podłączony do indywidualnego mikrofonu. Mówca musiał mówić bezpośrednio do mikrofonu w bliskim otoczeniu, aby system mógł odebrać jego głos. To nie tylko poważnie utrudnia elastyczność, ale taka konfiguracja również zwielokrotnia złożoność dzięki skomplikowanemu sprzętowi AV. Nasze rozwiązanie, z drugiej strony, jest w pełni zasilane przez możliwości dalekiego pola, dzięki 7-mikrofonowej macierzy i algorytmom przetwarzania sygnału.

Do pewnego stopnia nasze rozwiązanie było bardzo podobne do „Alexa For Business”: jedno urządzenie pokrywa cały pokój, wymagany jest tylko kabel zasilający. W porównaniu do rozwiązania naszych konkurentów, nasze rozwiązanie jest o pokolenia do przodu w tym sensie, że naprawdę rozumiemy potrzeby nowoczesnych firm, podczas gdy oni nadal są w pełni związani z przestarzałą generacją przewodową.

<center>
<img src="/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/poc-setup.png"/>

*Konfiguracja sali konferencyjnej PoC. Było 12 mówców symulujących 2-godzinne spotkanie rządowe.*

<img src="/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/poc-captioned.png"/>

*Bliższe ujęcie całego sprzętu na miejscu.*
</center>

Zespół był zachwycony widząc ogromną różnicę. Po kilku godzinach strojenia, ostateczny PoC przebiegł bardzo płynnie. Zespół cieszył się również wycieczką po Singapurze po PoC, w kraju, w którym Covid-19 był ściśle kontrolowany, dzięki czemu życie i biznes toczyły się normalnie.

### Poza nowoczesnymi spotkaniami

Podczas naszego pobytu w Singapurze nasze myśli wykraczały poza udany PoC: w porównaniu do innych konkurencyjnych rozwiązań, nasze było 10 razy lepsze. Ale jak możemy zrobić 10 razy lepiej niż my sami? Proszę śledzić nasze kroki do następnego bloga w tej serii.
`;export{e as default};

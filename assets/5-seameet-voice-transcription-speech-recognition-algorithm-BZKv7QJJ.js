const e=`---
title: "Od demonstracji do sukcesu: Przełom w algorytmach głosowych nowoczesnych spotkań (3/5)"
metatitle: "Od demonstracji do sukcesu (3/5): Przełom w algorytmach głosowych nowoczesnych spotkań"
date: 2021-07-30 17:43:38-07:00
modified_date: 2024-12-19 10:30:00+00:00
draft: false
author: Cody Kim, Shayne Mei
description: "W trzeciej części tej serii blogów, śledź podróż Seasalt.ai w tworzeniu rozwiązania SeaMeet dla nowoczesnych spotkań współpracy."
weight: 1
tags:
  - SeaMeet
image: images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/SeaMeet animation.gif
canonicalURL: /blog/seameet-voice-speech-recognition/
url: /blog/seameet-voice-speech-recognition/
---

W tej serii blogów śledź podróż Seasalt.ai w tworzeniu kompletnego doświadczenia nowoczesnych spotkań, od początkowych kroków, przez optymalizację na różnych sprzętach i modelach, po integrację najnowocześniejszych systemów NLP, ostatecznie osiągając rozwiązanie SeaMeet dla nowoczesnych spotkań współpracy.

## Przekraczanie algorytmów
Modern Meetings to wspaniała demonstracja, ale zawsze pozostawała na poziomie demonstracji. Droga do prawdziwego wdrożenia produkcyjnego była długa. Najpierw pomyślnie zaimplementowaliśmy wersję demonstracyjną używając stosu technologicznego Microsoft Azure. Ale po rozpoznaniu różnych wad oprogramowania, zdecydowaliśmy się zastąpić je własnymi algorytmami i sprawić, by całe doświadczenie było bardziej płynne, lekkie i elastyczne.
Modern Meetings ma cztery główne komponenty:

1. Przetwarzanie sygnałów z szyku mikrofonów, szczególnie formowanie wiązki
2. Separacja i identyfikacja mówców
3. Niestandardowe rozpoznawanie mowy
4. Lepszy interfejs użytkownika

Następnie szczegółowo omówimy wszystkie ważne komponenty.

<center>
<img src="/images/blog/5-seameet-voice-intelligence-meeting-transcription-speech-recognition-algorithm-of-modern-meeting/tech-stack.png" alt="SeaMeet architect with 4 major components"/>

Przekształciliśmy cztery główne komponenty Modern Meetings własnym stosem technologicznym: 1. Przetwarzanie sygnałów z szyku mikrofonów; 2. Separacja i identyfikacja mówców; 3. Niestandardowe rozpoznawanie mowy; 4. Nowoczesny interfejs webowy.
</center>

### Przetwarzanie sygnałów z szyku mikrofonów
W porównaniu z pojedynczym mikrofonem bliskiego pola, szyk mikrofonów może zbierać dźwięk z 360-stopniowego zakresu na odległość do 5 metrów. Tak więc jeden szyk mikrofonów może zbierać mowę w średniej sali konferencyjnej o wymiarach 10m x 10m. Wszystkie mikrofony skoncentrowane w jednym urządzeniu znacznie zmniejszają bałagan kabli w sali konferencyjnej, upraszczając instalację i konserwację.
Z drugiej strony, celem downstream użycia szyku mikrofonów jest dostarczenie naszym modelom danych najwyższej jakości. Dlatego przed automatycznym rozpoznawaniem mowy przeprowadzamy różne algorytmy przetwarzania sygnałów. Rdzeniem potoku preprocessing jest algorytm formowania wiązki. Ponieważ używamy okrągłego szyku wielomikrofonowego, możemy wykorzystać drobne różnice czasowe w dotarciu dźwięku do każdego mikrofonu. Formowanie wiązki służy do określenia głównych cech sygnału (najlepszej wiązki), wzmocnienia tych częstotliwości przy jednoczesnym tłumieniu niepożądanych dźwięków. Efektem jest redukcja szumu i derewerberacja, sprawiająca, że główny sygnał (mowa) jest głośniejszy i wyraźniejszy.

Wiele algorytmów formowania wiązki wymaga znajomości pozycji źródła dźwięku (mówcy) względem mikrofonów dla optymalnej wydajności. Ale w praktycznych zastosowaniach jest to prawie niemożliwe, więc najpierw obliczamy wagi pola dalekiego poprzez określenie kierunku źródła dźwięku. Ten krok nazywa się lokalizacją źródła dźwięku, lub bardziej konkretnie kierunkiem przybycia (DOA). Głównym problemem, z którym się spotkaliśmy, była płynność. Algorytm może dać przybliżone poprawne wyniki, ale określone źródło dźwięku będzie stale oscylować w zakresie 30 stopni po obu stronach prawdziwego kierunku, wpływając na formowanie wiązki. Naszym rozwiązaniem było pozwolenie algorytmowi lokalizacji źródła dźwięku na używanie tylko pasm częstotliwości kodujących główne częstotliwości ludzkiej mowy, w połączeniu z technikami wygładzania, zachowując "historię" wyników DOA do uśredniania. Bardziej niezawodne wyniki DOA pozwalają nam obliczyć wagi pola dalekiego i określić najlepszą wiązkę.

Seria algorytmów uruchomionych na Kinect DK: formowanie wiązki, redukcja szumu, derewerberacja, lokalizacja źródła dźwięku, pozwala nam generować w czasie rzeczywistym wzmocnioną, jasną ludzką mowę i przybliżoną lokalizację kierunku mówcy. To znacznie pomoże w następnym kroku identyfikacji mówcy.

### Separacja i identyfikacja mówców

Następnym kluczowym komponentem systemu transkrypcji spotkań jest automatyczna identyfikacja mówców. Jak opisano w poprzedniej części tej serii, czytanie chaotycznego tekstu dialogu bez informacji o mówcy jest frustrujące, całkowicie pozbawiając sensu systemu. Tu właśnie wkracza identyfikacja mówców.

Przez ten komponent możemy automatycznie dopasować transkrypcje i audio do imion mówców. Metoda implementacji używa technik separacji, grupując segmenty audio w grupy odpowiadające liczbie mówców w nagraniu. Metoda wykorzystuje system wykrywania aktywności głosowej (VAD) do określenia segmentów mowy, z których wyodrębnia się reprezentacje wektorowe krótkich okien. Każdy wektor wyodrębniony z okna nazywa się xvector na poziomie wypowiedzi, a po uśrednieniu daje xvector na poziomie mówcy. Następnie te xvectory są grupowane, każda grupa reprezentuje segmenty mowy należące do tego samego mówcy. Warto zauważyć, że wybór algorytmu grupowania znacznie wpływa na wydajność separacji, osiągnęliśmy najlepszy wskaźnik błędów separacji (DER) używając algorytmu grupowania spektralnego z macierzą powinowactwa progowego w połączeniu z automatycznym dostrajaniem wartości znormalizowanej maksymalnej luki własnej (NME). Na koniec, trzeba określić, kogo reprezentuje każda grupa. Przed spotkaniem można wyodrębnić xvector każdego mówcy z 40-sekundowego nagrania, porównując z wynikami grupowania, aby zidentyfikować odpowiednich mówców.

Elastyczność tego przepływu polega na tym: w wielu scenariuszach spotkań nie jest realistyczne uzyskanie nagrania każdego mówcy z góry. Na przykład spotkania biznesowe z klientami VIP lub duże seminaria z 50 prelegentami. W takich przypadkach, pomijając krok rejestracji, nasz system separacji nadal może grupować segmenty mowy. Wystarczy ręcznie wyodrębnić kilka sekund audio z każdej grupy, aby określić tożsamość mówcy. W połączeniu z dedykowanym nowoczesnym interfejsem użytkownika, może zapewnić tę samą funkcjonalność, ale z większą elastycznością.

### Niestandardowe rozpoznawanie mowy

Po poznaniu potęgi transkrybera spotkań Microsoft, byliśmy gotowi sprawić, by system był całkowicie niezależny, przekraczając już rewolucyjny produkt. Rdzeniem Modern Meetings i każdego produktu transkrypcji jest model automatycznego rozpoznawania mowy (ASR), więc poświęciliśmy mu najwięcej uwagi.
Azure Cognitive Services oferuje modele do wyboru w wielu językach i dialektach, ale wydajność między różnymi dialektami jest trudna do rozróżnienia. Dla różnych dialektów angielskiego, największy wysiłek i dane prawdopodobnie skupiają się na modelu amerykańskiego angielskiego, a następnie fine-tune różnych modeli dialektów z danymi akcentowanymi. Chcieliśmy upewnić się, że jeśli dostarczamy niezależny model, będzie dostrojony do konkretnych przypadków użycia. Oznacza to zbieranie tysięcy godzin zlokalizowanego audio i transkrypcji, oraz poświęcenie tygodni na trening i fine-tuning. Ale widzenie, jak model poprawia się w każdym epoce i spełnia obietnice, jest bardzo satysfakcjonujące.

Po solidnym modelu bazowym, następnym krokiem jest rozszerzenie użyteczności i dostosowania. Każda branża ma mnóstwo terminów własnościowych, które sprawiają, że modele ASR mają trudności z rozróżnieniem rzadkich słów od powszechnych, podobnie brzmiących słów.

Naszym rozwiązaniem jest SeaVoice, które zapewnia użytkownikom scentralizowaną platformę do łatwego fine-tuningu modeli dla konkretnych potrzeb. `;export{e as default};

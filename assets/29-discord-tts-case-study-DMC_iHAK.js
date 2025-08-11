const a=`---
title: "Zamiana tekstu na mowę na Discordzie: studium przypadku bota TTS na Discordzie"
metatitle: "Zamiana tekstu na mowę na Discordzie: studium przypadku bota..."
date: 2022-12-27 17:04:20-08:00
modified_date: 2025-07-29 20:45:17+00:00
author: Kim Dodds
description: "W tym blogu omówimy nasze odkrycia dotyczące tego, w jaki sposób prawdziwi użytkownicy Discorda korzystają z naszych usług po przejrzeniu kilkumiesięcznych autentycznych danych zamiany tekstu na mowę."
weight: 1
tags:
  - SeaVoice
  - Discord
image: images/blog/29-tts-case-study/discord-tts-accessibility.jpg
url: /blog/discord-tts-case-study/
---


*Po uruchomieniu SeaVoice, jednego z najszybszych i najdokładniejszych botów zamiany tekstu na mowę i mowy na tekst na Discordzie, chcieliśmy zrozumieć, w jaki sposób użytkownicy faktycznie wchodzą w interakcję z usługami. W tym blogu omówimy nasze odkrycia po przejrzeniu kilkumiesięcznych danych użytkowników zamiany tekstu na mowę.*

# SeaVoice: Bot Discorda do zamiany tekstu na mowę i mowy na tekst

Discord, będąc platformą używaną głównie do kombinacji czatów audio i tekstowych, jest fantastycznym poligonem doświadczalnym dla usług inteligencji głosowej i przetwarzania języka naturalnego.
W sierpniu 2022 roku wdrożyliśmy na Discorda bota SeaVoice, wyposażonego w polecenia zamiany tekstu na mowę i mowy na tekst.
Aby dowiedzieć się więcej o działaniu bota lub obejrzeć krótkie wideo demonstracyjne, odwiedź [wiki bota SeaVoice na Discordzie](https://wiki.seasalt.ai/seavoice/discord/6-community/).
W listopadzie tego samego roku wydaliśmy nową wersję ze znacznymi ulepszeniami zaplecza (opisanymi w naszym poprzednim wpisie na blogu: [Bot SeaVoice na Discordzie: ulepszenia zaplecza i stabilności](https://seasalt.ai/blog/27-seavoice-discord-backend-improvements/)), które pozwalają nam rejestrować anonimowe dane o tym, w jaki sposób użytkownicy wchodzą w interakcję z botem SeaVoice.
W tym blogu przyjrzymy się danym użytkowników z 1 miesiąca z polecenia zamiany tekstu na mowę.

## Wykorzystanie TTS SeaVoice

<center>
<img src="/images/blog/29-tts-case-study/discord-tts-usage.jpg" alt="Dzienne wykorzystanie zamiany tekstu na mowę przez bota SeaVoice na Discordzie w ciągu 7 tygodni."/>

*Dzienne wykorzystanie zamiany tekstu na mowę przez bota SeaVoice na Discordzie w ciągu 7 tygodni.*
</center>

W chwili pisania tego tekstu bot SeaVoice został dodany do prawie 800 serwerów!
Odkąd zaczęliśmy rejestrować dane o użytkowaniu w listopadzie, odkryliśmy, że całkowita liczba żądań dziennie może wahać się od zaledwie 150 do ponad 1300 (ze średnią około 560).
Około 650 użytkowników faktycznie wypróbowało polecenie TTS co najmniej raz.
Jednak większość użytkowników nie kontynuuje regularnego korzystania z niego po wypróbowaniu.
Z tych 650 użytkowników, którzy wypróbowali polecenie TTS, około 200 użyło go 20 lub więcej razy, a tylko 100 użyło go 50 lub więcej razy.
Niemniej jednak ci, którzy lubią i polegają na poleceniu TTS, używają go intensywnie!
Nasi 5 najlepszych użytkowników przesłało ponad 1000 żądań każdy w ciągu ostatnich dwóch miesięcy, a najlepszy użytkownik przesłał prawie 2500 żądań sam!

## Obserwacje

### Dlaczego ludzie używają zamiany tekstu na mowę

<center>
<img src="/images/blog/29-tts-case-study/why-mute-on-discord.jpg" alt="Powody, dla których użytkownicy bota SeaVoice na Discordzie korzystają z zamiany tekstu na mowę."/>

*Powody, dla których użytkownicy bota SeaVoice na Discordzie korzystają z zamiany tekstu na mowę.*
</center>

Nasze pierwsze pytanie po obejrzeniu danych o użytkowaniu brzmi: **dlaczego częstotliwi użytkownicy w ogóle korzystają z TTS?**
Przejrzeliśmy bazę danych, aby znaleźć kilka wyjaśnień.
Poniżej znajdują się prawdziwe polecenia TTS od niektórych naszych użytkowników.

__*Dlaczego nie mówisz?*__

    - poza tym nie mogę mówić, bo jem
    - Właściwie bym mówił, ale jestem teraz w pracy.
    - jeśli będę mówić, obudzę rodzinę
    - przepraszam, nie będę dużo mówić. gardło bardzo boli.
    - mógłbym mówić, ale moja mama tu jest
    - jestem dzisiaj zbyt leniwy, żeby mówić
    - nie mogę mówić, bo jestem chory, ale i tak chciałem wpaść :)
    - nie jestem całkowicie niemy, po prostu mówienie wymaga wysiłku. Czasami dużego wysiłku
    - przepraszam, jestem wyciszony, moja babcia rozmawia przez telefon i jest głośno
    - Ponieważ mój mikrofon był zepsuty

Po znalezieniu tych wyjaśnień możemy je podsumować w kilku głównych powodach:
- istnieje bariera fizyczna (zepsuty mikrofon, trudności z mówieniem, choroba itp.),
- są zajęci robieniem czegoś innego (jedzenie, praca itp.),
- ich otoczenie jest zbyt głośne lub muszą być cicho, lub
- ponieważ jest to wygodne i lubią z tego korzystać.

Ale bez względu na dokładny powód, dla którego korzystają z usługi TTS, wielu użytkowników wyraziło podekscytowanie, że mogli uczestniczyć w rozmowach na kanale głosowym, gdy w przeciwnym razie nie byliby w stanie.
Uważamy, że usługa TTS sprawia, że kanały głosowe Discorda są bardziej dostępne, i to jest główny powód, dla którego nasi stali użytkownicy nadal korzystają z usługi.

### Użycie języka

Jedną rzeczą, która rzuciła mi się w oczy podczas przeglądania rozmów, było to, że wielu użytkowników próbowało używać polecenia zamiany tekstu na mowę w różnych językach.
Podczas gdy niektórzy użytkownicy chcieli po prostu sprawdzić, czy to zadziała, lub uważali wymowę za zabawną, inni jednak kontynuowali używanie TTS w językach innych niż angielski przez dłuższy czas!

<center>
<img src="/images/blog/29-tts-case-study/discord-spanish-tts-test.png" alt="Użytkownik testuje hiszpańską wymowę angielskiego modelu TTS SeaVoice."/>

*Użytkownik testuje hiszpańską wymowę angielskiego modelu TTS SeaVoice.*
</center>

Było tak zwłaszcza w przypadku osób mówiących po hiszpańsku, mimo że (jak zauważa powyższy użytkownik) wydajność TTS nie jest dobra dla hiszpańskiego, ponieważ model jest szkolony tylko na języku angielskim.
Zacząłem zapisywać za każdym razem, gdy napotkałem użytkownika próbującego użyć polecenia TTS w języku innym niż angielski.

<center>
<img src="/images/blog/29-tts-case-study/discord-non-english-tts.jpg" alt="Liczba prób wysłania żądań w językach innych niż angielski do TTS."/>

*Liczba prób wysłania żądań w językach innych niż angielski do TTS.*
</center>

Powyższa tabela pokazuje liczbę wszystkich znalezionych przeze mnie rozmów, w których co najmniej raz ktoś użył odpowiedniego języka w poleceniu TTS.
Oczywiście hiszpański jest zdecydowanie najczęstszy, a w połączeniu z faktem, że wielu użytkowników nadal używało funkcji TTS w języku hiszpańskim, mimo że wydajność była słaba, zastanawiam się, czy na Discordzie nie ma już realnej alternatywy dla hiszpańskiego TTS.
W obu przypadkach ludzie próbują używać naszej usługi TTS w innych językach, więc możemy śledzić, które języki są najbardziej poszukiwane, i wykorzystywać te dane do informowania o szkoleniu nowych modeli.

### Komentarze na temat bota

Innym interesującym tematem znalezionym w logach były komentarze na temat samego bota.
Na szczęście widzieliśmy kilka bardzo pozytywnych komentarzy na temat bota i jego wydajności.

<center>
<img src="/images/blog/29-tts-case-study/discord-tts-inclusive-accessibility-user-comment.png" alt="Użytkownik komentuje, że bot sprawia, że czują się bardziej włączeni."/>

*Użytkownik komentuje, że bot sprawia, że czują się bardziej włączeni.*
</center>

Najbardziej wzruszające komentarze pochodziły od tych, którzy czuli się wykluczeni z kanałów głosowych, ale teraz mogą w nich uczestniczyć dzięki dodatkowej dostępności, jaką zapewnia bot.

Znaleźliśmy również kilka konstruktywnych opinii.

<center>
<img src="/images/blog/29-tts-case-study/discord-tts-speed.png" alt="Użytkownik komentuje, że prędkość TTS jest problemem."/>

*Użytkownik komentuje, że prędkość TTS jest problemem.*
</center>

Jeden z użytkowników wspomniał, że ponieważ użytkownicy muszą najpierw wpisać całe zdanie, a następnie je wysłać, TTS jest wolniejszy niż normalne mówienie, więc czasami ich wypowiedź TTS jest wypowiadana nieco późno w rozmowie.
Jak wspomniano w poprzedniej sekcji, widzieliśmy również prośby o dodatkową obsługę językową, a także jednego użytkownika, który miał nadzieję, że będzie mógł tłumaczyć między językami za pomocą bota.
Obserwowanie tego rodzaju opinii pomoże nam planować и ulepszać funkcje w przyszłości.

### Nowość

Po przejrzeniu całej kolekcji poleceń TTS powiedziałbym, że około dwie trzecie wypowiedzi jest używanych w ogólnych rozmowach z przyjaciółmi i innymi osobami na serwerze.
Większość ludzi gra w gry i po prostu rozmawia ze znajomymi, a ci użytkownicy zwykle regularnie korzystają z usługi TTS.
Z drugiej strony pozostała jedna trzecia wypowiedzi należy do kategorii „po prostu się wygłupiać”.
Kiedy masz pełną moc, aby głos mówił, co chcesz, wierzę, że ludzką naturą jest wybranie najgłupszej lub najbardziej nieprzyzwoitej rzeczy, jaką możesz wymyślić, tylko dla śmiechu.
Pamiętam, jak siedziałem w pracowni komputerowej w szkole podstawowej i przez wiele godzin bawiłem się Microsoft Sam (wtedy bardzo zaawansowana technologia), sprawdzając, czy możemy zmusić go do mówienia takich rzeczy jak „kupa” czy „tyłek”.
Cóż, przypuszczam, że dzieci takie jak ja dorosły, zyskały bogatsze słownictwo i ostatecznie znalazły tę samą rozrywkę w naszej usłudze TTS na Discordzie.

<center>
<img src="/images/blog/29-tts-case-study/discord-tts-stress-test.png" alt="Przykłady dziwnych żądań TTS wysyłanych przez użytkowników."/>

*Przykłady dziwnych żądań TTS wysyłanych przez użytkowników.*
</center>

Czasami użytkownicy po prostu próbują zepsuć bota, wpisując takie rzeczy jak: nadmiernie długie ciągi znaków, znaki specjalne, emotikony, adresy URL itp.
Jest to klasyczny przykład testowania granic oprogramowania przez ludzi i faktycznie pomaga nam upewnić się, że nasze usługi są solidne i mogą obsłużyć każde dane wejściowe, jakie użytkownicy im podadzą.

Innym razem użytkownicy znajdują rozrywkę, zmuszając usługę TTS do mówienia najbardziej nieprzyzwoitych i obraźliwych rzeczy, jakie mogą wymyślić.
W logach TTS widziałem chyba każde przekleństwo, jakie znam (a może i niektóre, których nigdy wcześniej nie słyszałem), obelgi na tle rasowym i treści o charakterze jednoznacznie seksualnym.

## Kwestia etyki

Niestety istnieje wiele sposobów, w jakie aplikacja zamiany tekstu na mowę może być używana w sposób nieprzyjemny: na przykład do promowania mowy nienawiści lub cyberprzemocy.
Dodatkowo, chociaż klipy audio są syntetyzowane z modelu, dane do trenowania modelu pochodzą od prawdziwej osoby, a dane wyjściowe z dobrego modelu mogą brzmieć prawie nie do odróżnienia od oryginału.

Więc te punkty, w połączeniu z tym, jak widzieliśmy, jak prawdziwi użytkownicy używają (lub nadużywają) naszej usługi TTS, rodzą bardzo ważne pytania dla Seasalt.ai jako firmy i bota SeaVoice na Discordzie:

- *Czy jako firma chcemy, aby nasz produkt był używany w potencjalnie obraźliwy lub szkodliwy sposób?*
- *Jakie prawa mają lektorzy do tego, w jaki sposób ich głos jest wykorzystywany w aplikacjach zamiany tekstu na mowę?*
- *Czy mamy prawo lub obowiązek cenzurować sposób korzystania z naszej usługi?*

Są to pytania, na które nie można odpowiedzieć, a nawet w pełni zbadać, w jednym wpisie na blogu.
Jednak firma czuje się zobowiązana do ciągłego rozważania tych kwestii w miarę postępów w naszym projekcie na Discordzie i kontynuowania współpracy z naszymi lektorami.

Dziękujemy za zainteresowanie naszym botem na Discordzie i projektami Voice Intelligence! Więcej o naszym produkcie STT dowiesz się na naszej [stronie głównej zamiany mowy na tekst](https://suite.seasalt.ai/tts). Aby uzyskać indywidualną demonstrację dowolnego z naszych produktów Voice Intelligence, wypełnij [formularz rezerwacji demonstracji](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting).

Po stronie Discorda możesz dowiedzieć się więcej o naszym bocie i dodać go do swojego serwera z [wiki bota SeaVoice na Discordzie](https://wiki.seasalt.ai/seavoice/discord/6-community/). Zapraszamy również do dołączenia do naszego [oficjalnego serwera SeaVoice na Discordzie](https://discord.gg/dfAYfwBQ).

<center>
<iframe src="https://discordapp.com/widget?id=919037515514654721&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
</center>
`;export{a as default};

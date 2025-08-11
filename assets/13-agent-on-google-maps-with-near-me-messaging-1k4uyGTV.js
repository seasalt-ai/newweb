const a=`---
title: "Uruchom swojego wirtualnego agenta w Google Maps z wiadomościami Near Me"
metatitle: "Uruchom swojego wirtualnego agenta Google Maps z wiadomościami Near Me"
date: 2022-04-19 15:27:21-07:00
modified_date: 2025-07-29 20:45:17+00:00
draft: false
author: Ruli Setiawati
description: "Uruchom swojego wirtualnego agenta w Google Business Messages z wiadomościami Near Me."
weight: 1
tags:
  - NearMe
image: images/blog/13-launch-your-virtual-agent-on-Google-Maps-with-Near-Me-Messaging/thumbnail.png
canonicalURL: /blog/virtual-agent-on-Google-Maps-with-near-me-messaging/
url: /blog/virtual-agent-on-Google-Maps-with-near-me-messaging/
---

Poprzednio przedstawiliśmy Ci [Wiadomości Near Me](https://seasalt.ai/blog/12-near-me-messaging-google-business-messages/) i ich zalety. Wiadomości Near Me implementują wirtualnego agenta Google Business Messages, dostępnego bezpośrednio z przycisku czatu w profilu Google Maps firmy. Wirtualny agent Wiadomości Near Me jest zasilany przez najnowocześniejsze rozumienie języka naturalnego, które dostarcza odpowiedzi podobne do ludzkich. To, co wyróżnia Wiadomości Near Me spośród podobnych usług, to 5-minutowy czas konfiguracji, samoobsługowa personalizacja i wbudowane wsparcie czatu na żywo.

Zalety Wiadomości Near Me to:
- Oszczędność czasu i siły roboczej w świadczeniu doskonałej obsługi klienta
- Dostosowywanie agenta za pośrednictwem platformy samoobsługowej
- Uzyskiwanie wglądu w klienta poprzez analizę Near Me
- Zrozumienie potrzeb klienta poprzez historię rozmów
- Bezpośrednie czatowanie z klientami dzięki naszej funkcji agenta na żywo

Obecnie poszukujemy beta-testerów dla Wiadomości Near Me. Dla naszych beta-testerów oferujemy nasze usługi na nasz koszt przez ograniczony czas, bez konieczności zawierania umowy. Nie przegap tej okazji, aby wypróbować wirtualnego agenta i sprawdzić, czy pasuje on do Twojej firmy. Aby rozpocząć, postępuj zgodnie z tym przewodnikiem krok po kroku, jak uruchomić swojego wirtualnego agenta z Wiadomościami Near Me!


## Przewodnik krok po kroku po uruchomieniu wirtualnego agenta z wiadomościami Near Me

### Krok 1. Odwiedź stronę internetową Near Me Messaging (Aktualizacja: Od tego czasu zmieniliśmy produkt na kreator chatbota wielokanałowego. Teraz nazywa się [SeaChat](https://chat.seasalt.ai/?utm_source=blog)!).

Przejdź do strony internetowej Near Me Messaging (Aktualizacja: Od tego czasu zmieniliśmy produkt na kreator chatbota wielokanałowego. Teraz nazywa się [SeaChat](https://chat.seasalt.ai/?utm_source=blog)!) i kliknij przycisk *„Zaloguj się”*. Po zalogowaniu się na konto, którego używasz do Profilu Firmy w Google, upewnij się, że zaznaczyłeś wszystkie dostępne pola i udzieliłeś Seasalt AI pozwolenia na uruchomienie Twojego wirtualnego agenta. Seasalt.ai jest [oficjalnym partnerem Google](https://developers.google.com/business-communications/business-messages/partners), więc możesz być pewien, że będziemy używać tych uprawnień odpowiedzialnie. **Używamy tych uprawnień do dwóch funkcji: po pierwsze, aby uzyskać dostęp do informacji z Twojego Profilu Firmy w Google, aby Twój wirtualny agent mógł udzielać dokładnych odpowiedzi, a po drugie, abyśmy mogli uruchomić agenta na stronie Google Maps Twojej firmy w Twoim imieniu.**

Nigdy nie będziemy używać tych uprawnień do edytowania lub usuwania Twojego profilu firmy. Nadal musisz udzielić nam wszystkich uprawnień, ponieważ Google nie zapewnia oddzielnych uprawnień dla *„widoku”*, *„edycji”* i *„usuwania”*. Będziemy używać tylko uprawnienia *„widoku”*.

<center>
<img src="/images/blog/13-launch-your-virtual-agent-on-Google-Maps-with-Near-Me-Messaging/2-sign-in.png" alt="Zaloguj się za pomocą konta, którego używasz do Profilu Firmy w Google"/>

*Kliknij „Zaloguj się za pomocą Google” i zaloguj się za pomocą konta Profilu Firmy w Google.*
</center>

<center>
<img src="/images/blog/13-launch-your-virtual-agent-on-Google-Maps-with-Near-Me-Messaging/3-permissions.png"/>

*Udzielenie Seasalt AI uprawnień daje nam możliwość publicznego uruchomienia wirtualnego agenta Twojej marki na Twojej stronie Google Maps w Twoim imieniu.*
</center>


### Krok 2. Zbuduj swojego wirtualnego agenta.

Po zalogowaniu się i udzieleniu pozwolenia zobaczysz wszystkie firmy, którymi zarządzasz za pomocą swojego konta Profilu Firmy w Google. Jeśli nie widzisz swojej firmy, upewnij się, że używasz właściwego konta Profilu Firmy w Google do logowania. Możesz również kliknąć przycisk *„Synchronizuj”*, aby zsynchronizować swoje firmy. Pamiętaj, że będziesz musiał skonfigurować wirtualnego agenta indywidualnie dla każdej z Twoich lokalizacji biznesowych. Aby skonfigurować swojego wirtualnego agenta, kliknij przycisk *„dodaj agenta”* w jednej z Twoich firm.

<center>
<img src="/images/blog/13-launch-your-virtual-agent-on-Google-Maps-with-Near-Me-Messaging/4-business-locations.png"/>

*Firmy powiązane z naszym Profilem Firmy w Google.*
</center>

Wiadomości Near Me rozpoczną budowanie Twojego wirtualnego agenta poprzez synchronizację informacji z Twojego Profilu Firmy w Google. Budowanie wirtualnego agenta powinno zająć mniej niż 5 minut, a Ty możesz obserwować postępy po każdym zakończonym kroku.


<center>
<img src="/images/blog/13-launch-your-virtual-agent-on-Google-Maps-with-Near-Me-Messaging/5-virtual-agent-building.png"/>

*Możesz przeglądać postępy swojego wirtualnego agenta.*
</center>

### Krok 3. Prywatnie przetestuj swojego wirtualnego agenta.

Po zakończeniu budowania agenta na ekranie pojawią się kody QR. Użyj telefonu komórkowego, aby zeskanować kod QR i przetestować swojego wirtualnego agenta. Jest to nadal prywatna wersja Twojego wirtualnego agenta i nie pojawi się jeszcze w Twoim profilu Google Maps. Zauważ, że ten wirtualny agent to początkowa wersja, która wykorzystuje tylko informacje z Twojego Profilu Firmy w Google wraz z recenzjami klientów z Google Maps do generowania odpowiedzi. Jeśli przetestujesz go i poczujesz, że Twój wirtualny agent wymaga ulepszeń, możesz znacznie poprawić odpowiedzi, tworząc niestandardowe często zadawane pytania, dodając informacje z Twojej witryny i kurując swoje recenzje Google. Aby uzyskać bardziej szczegółowy przewodnik po personalizacji, zapoznaj się z naszym [przewodnikiem po ulepszaniu wirtualnego agenta](https://wiki.seasalt.ai/nearme/maintain_agent/improve_agent/).

<center>
<img src="/images/blog/13-launch-your-virtual-agent-on-Google-Maps-with-Near-Me-Messaging/6-agent-built.png" alt=""/>

*Kody QR dla Twojego prywatnego wirtualnego agenta pojawią się po zakończeniu budowania agenta.*
</center>

### Krok 4. Publicznie uruchom swojego wirtualnego agenta.


Po przetestowaniu wirtualnego agenta i zadowoleniu z odpowiedzi, możesz go uruchomić publicznie. Uruchamiając wirtualnego agenta publicznie, Twój agent będzie dostępny dla Twoich klientów w Google Maps. W tym blogu przeprowadzę Cię przez podstawowy proces, ale możesz zapoznać się z naszą dokumentacją i filmami na temat [jak uruchomić swojego wirtualnego agenta w profilu Google Maps](https://wiki.seasalt.ai/nearme/setup/03-publish_agent/) w celu uzyskania bardziej szczegółowych informacji.

Najpierw przejdź do zakładki „Wirtualny Agent” i upewnij się, że *nazwa agenta* i *obraz awatara agenta* są dokładnie takie, jak chcesz, aby się pojawiały. Po zweryfikowaniu *nazwy agenta* i *obrazu awatara* przez Google w ramach procesu uruchamiania, **nie będziesz mógł ich modyfikować za pośrednictwem strony Near Me**.

Po potwierdzeniu danych agenta przejdź do zakładki *„Uruchomienie publiczne”*. Kliknij przycisk *„Weryfikuj”*, aby zweryfikować swoją markę i lokalizację w Google.

<center>
<img src="/images/blog/13-launch-your-virtual-agent-on-Google-Maps-with-Near-Me-Messaging/7-verification.png" alt="zweryfikuj swoją markę i lokalizację w Google"/>

*Kliknięcie przycisku „Weryfikuj” zweryfikuje Twoją markę i lokalizację w Google.*
</center>

Po zweryfikowaniu Twojej marki i lokalizacji możesz kliknąć przycisk *„Uruchom”*, aby publicznie uruchomić swojego wirtualnego agenta.

<center>
<img src="/images/blog/13-launch-your-virtual-agent-on-Google-Maps-with-Near-Me-Messaging/8-launch.png" alt="uruchamianie wirtualnego agenta na przycisku czatu w profilu Google Maps"/>

*Kliknięcie przycisku „Uruchom” uruchomi Twojego wirtualnego agenta na przycisku czatu w Twoim profilu Google Maps.*
</center>

Pojawienie się przycisku czatu w Google Maps może potrwać do czterech godzin. Po pojawieniu się przycisku czatu, Twój wirtualny agent jest dostępny dla Twoich klientów do czatowania. Po publicznym uruchomieniu nadal możesz wprowadzać zmiany i dalej dostosowywać swojego wirtualnego agenta. Kiedy wprowadzasz zmiany, możesz przejść do zakładki *„Test prywatny”*, aby je przetestować przed upublicznieniem. Gdy będziesz zadowolony ze zmian, możesz kliknąć *„Uruchom ponownie”* na stronie *„Uruchomienie publiczne”*, aby natychmiast zaktualizować publiczną wersję swojego wirtualnego agenta.

<center>
<img src="/images/blog/13-launch-your-virtual-agent-on-Google-Maps-with-Near-Me-Messaging/9-relaunch.png" alt="Near Me Messaging integruje Google Business Messages z przyciskiem czatu w Twoim Profilu Google Maps."/>

*Możesz kliknąć przycisk „Uruchom ponownie” po zakończeniu wprowadzania zmian/ulepszeń w swoim wirtualnym agencie.*
</center>

[Zarezerwuj u nas demo](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting), a z przyjemnością Ci pomożemy!

Aktualizacja: Od tego czasu zmieniliśmy produkt na kreator chatbota wielokanałowego. Teraz nazywa się [SeaChat](https://chat.seasalt.ai/?utm_source=blog)!
`;export{a as default};

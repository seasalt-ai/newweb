const e=`---
title: "SeaX Bulk SMS: Dla szybszego i skuteczniejszego dotarcia do klienta"
metatitle: "SeaX Bulk SMS: Dla szybszego i skuteczniejszego dotarcia do ..."
date: 2022-09-09 11:05:22-07:00
modified_date: 2025-07-28 00:00:00+00:00
draft: false
author: Amy Chen, Kim Dodds, Sarah Reid
description: "W tym blogu pokażemy, jak funkcja SeaX Bulk SMS pozwala agentom proaktywnie wysyłać wiadomości wychodzące za pośrednictwem tekstu."
weight: 1
tags:
  - SeaX
image: images/blog/24-seax-bulk-sms/thumbnail.png
canonicalURL: /blog/seax-bulk-sms/
url: /blog/seax-bulk-sms/
---


*W naszych poprzednich postach na blogu omówiliśmy niektóre kluczowe funkcje SeaX (w tym [Voice Intelligence](https://seasalt.ai/blog/21-seax-voice-intelligence/), [Knowledge Base](https://seasalt.ai/blog/22-seax-knowledge-base/) i [Case Management](https://seasalt.ai/blog/23-seax-case-management/)), które pomagają agentom lepiej obsługiwać połączenia przychodzące i wiadomości. W tym blogu pokażemy, jak funkcja SeaX Bulk SMS pozwala agentom proaktywnie wysyłać wiadomości wychodzące za pośrednictwem tekstu, które, jak wykazano, odbiorcy otwierają szybciej i bardziej konsekwentnie niż tradycyjne komunikaty e-mail.*

# Spis treści
- [SMS vs E-mail](#sms-vs-email)
- [Standardy 10DLC](#10dlc-standards)
- [SeaX Bulk SMS](#seax-bulk-sms)
    - [Przesyłanie kontaktów](#contact-upload)
    - [Tworzenie wiadomości](#message-composition)
    - [Szacunkowy koszt](#cost-estimate)
    - [Podgląd wiadomości masowej](#bulk-message-preview)
    - [Monitorowanie postępu kampanii](#campaign-progress-monitoring)
    - [Czat wiadomości przychodzących](#incoming-message-chat)
- [Zakończenie](#closing)

# SMS vs E-mail

E-mail jest zazwyczaj domyślnym trybem komunikacji dla większości operacji biznesowych. Do niedawna wiadomości tekstowe (SMS) nie były szeroko stosowanym kanałem komunikacji dla masowych wiadomości biznesowych, pomimo ich popularności w codziennej komunikacji międzyludzkiej. Jednak w ostatnich latach dostawcy usług komunikacji w chmurze, tacy jak Twilio, znacznie ułatwili dostęp do kanału SMS dla firm, zajmując się zawiłościami infrastruktury telekomunikacyjnej i dostawców usług w tle, a także udostępniając proste API SMS jako usługę dla klientów. Chociaż e-mail może pozostać najpopularniejszym kanałem dla biznesu, SMS może stanowić unikalne uzupełnienie tradycyjnych komunikatów e-mail.

<center>
<img src="/images/blog/24-seax-bulk-sms/1-pros-cons.png" alt="Niektóre zalety i wady SMS-ów w komunikacji biznesowej."/>

*Niektóre zalety i wady SMS-ów w komunikacji biznesowej.*
</center>

Ale po co w ogóle używać SMS-ów, skoro e-mail okazał się skuteczny? Jeśli weźmiemy kampanie marketingowe jako przykład, krótka odpowiedź brzmi: podczas gdy wskaźnik otwarć dla kampanii e-mail wynosi tylko 20%, średni wskaźnik otwarć dla SMS-ów może wynosić aż *98%* - nie wspominając o tym, że wiadomości tekstowe zazwyczaj otrzymują więcej odpowiedzi. Ponadto wiadomości tekstowe są zazwyczaj otwierane w ciągu 90 sekund od otrzymania, podczas gdy e-maile są zazwyczaj otwierane około 90 minut później. Wreszcie, SMS ma średni współczynnik klikalności wynoszący około 19%, znacznie wyższy niż 3,2% dla e-maili ([źródło](https://manychat.com/blog/sms-vs-email-marketing-2021/)).

Ogólnie rzecz biorąc, wiadomości tekstowe są otwierane szybciej i częściej niż e-maile - być może dlatego, że wiadomości tekstowe są zawsze dostarczane bezpośrednio do odbiorcy, gdziekolwiek się znajduje, niezależnie od tego, czy ma Wi-Fi. Ponadto, ponieważ SMS jest zazwyczaj używany do wiadomości osobistych, a rzadziej do komunikacji biznesowej, odbiorcy mogą postrzegać wiadomości tekstowe jako ważniejsze lub bardziej istotne niż e-maile.

So why isn’t everyone using SMS then?? Well, of course there are pros and cons. Naturally SMS is significantly more expensive than email because it relies on telecommunications infrastructure and service providers (such as Verizon, AT&T, etc) to deliver the messages. Additionally, text messages have a hard limit of about 900 characters and a single attachment (which costs extra, of course). So on the whole, while SMS may be a significantly more effective method of communication, the trade off is that businesses must be more selective of the content they send to make sure they are being cost effective.

That being said, there is no reason SMS and email shouldn’t be used together! Each channel has its own pros and cons, so a business can make sure they’re sending the most effective communications by taking advantage of each channel’s strong suits.

# Standardy 10DLC

Do obsługi dużych wolumenów wiadomości SMS A2P (aplikacja-do-osoby) amerykańscy operatorzy wykorzystują ustandaryzowane 10-cyfrowe kody długie, czyli 10DLC. Przed rozpoczęciem masowej kampanii SMS zalecamy zapoznanie się z 10DLC i jego zastosowaniami [tutaj](https://support.twilio.com/hc/en-us/articles/1260800720410-What-is-A2P-10DLC-).

# SeaX Bulk SMS

Usługa SeaX Bulk SMS umożliwia łatwe przesyłanie kontaktów/leadów, masowe wysyłanie SMS-ów (obsługujemy również MMS - wiadomości multimedialne) oraz zarządzanie odpowiedziami przychodzącymi. Czytaj dalej, aby zapoznać się z kilkoma prostymi krokami, aby rozpocząć swoją pierwszą masową kampanię SMS.

## Przesyłanie kontaktów

<center>
<img src="/images/blog/24-seax-bulk-sms/2-contact-upload.png" alt="Przesyłanie listy kontaktów do SeaX Bulk SMS."/>

*Przesyłanie listy kontaktów do SeaX Bulk SMS.*
</center>

Pierwszym krokiem jest przesłanie kontaktów i leadów. Najpierw uporządkuj kontakty do kampanii SMS w pliku csv. Oprócz wymaganych pól, \`phone_number\` i \`name\`, możesz dodać inne pola i użyć ich w treści wiadomości. Na przykład, możesz dynamicznie zmieniać treść wiadomości, aby zawierała imię odbiorcy na podstawie pola \`name\` dla każdego kontaktu. 

Następnie, po prostu otwórz usługę Bulk SMS w SeaX i naciśnij „Importuj”, aby przesłać swoje kontakty. Zapisujemy wszystkie Twoje poprzednie kontakty na liście odbiorców, dzięki czemu możesz łatwo uruchamiać kampanie uzupełniające.

## Tworzenie wiadomości

<center>
<img src="/images/blog/24-seax-bulk-sms/3-message-draft.png" alt="Tworzenie nowej wiadomości SMS za pomocą SeaX Bulk SMS."/>

*Tworzenie nowej wiadomości SMS.*
</center>

Następnym krokiem jest nadanie nazwy kampanii i skomponowanie wiadomości. Bulk SMS umożliwia dostęp do wszystkich informacji kontaktowych przechowywanych w pliku csv/excel. Na przykład, jeśli masz pole o nazwie \`name\` na liście kontaktów, możesz wpisać \`{name}\` w wiadomości, a wiadomość automatycznie wyświetli nazwę dla każdego kontaktu w treści wiadomości.

## Szacunkowy koszt

<center>
<img src="/images/blog/24-seax-bulk-sms/4-cost-estimate.png" alt="Wybieranie numerów telefonów do wysyłania i uzyskiwanie szacunkowego kosztu kampanii za pomocą SeaX Bulk SMS."/>

*Wybieranie numerów telefonów do wysyłania i uzyskiwanie szacunkowego kosztu kampanii.*
</center>

Następnie wybierz numer telefonu, którego chcesz użyć do wysyłania wiadomości wychodzących. Jeśli nie masz jeszcze numeru telefonu, możesz kliknąć „Wycena nowego numeru” w prawym górnym rogu, aby złożyć wniosek o zakup. Nasz zespół może pomóc Ci kupić nowe numery 10DLC. 

Możesz również wyświetlić podgląd szacunkowej ceny jednostkowej kampanii. Pamiętaj, że zarówno wysyłanie, jak i odbieranie SMS/MMS kosztuje, więc upewnij się, że odpowiednio zaplanowałeś budżet. 

## Podgląd wiadomości masowej 

<center>
<img src="/images/blog/24-seax-bulk-sms/5-preview.png" alt="Podgląd kampanii masowej SMS przed wysłaniem za pomocą SeaX."/>

*Podgląd kampanii masowej SMS przed wysłaniem.*
</center>

You may preview the bulk messages before sending. It is vital to confirm the message body, recipients’ phone number, and sender’s phone number. Once you launch the campaign, it will not be possible to retract the messages. On this page, you can preview the first 3 messages in your campaign, which corresponds to the first 3 contacts from your list. 

## Monitorowanie postępu kampanii

<center>
<img src="/images/blog/24-seax-bulk-sms/6-monitor.png" alt="Monitorowanie postępu kampanii masowej SMS za pomocą SeaX."/>

*Monitorowanie postępu kampanii masowej SMS.*
</center>

Finally, you can sit back and monitor the campaign progress on the Bulk SMS dashboard. The page automatically refreshes and updates the campaign status. You can view the message delivery statuses, success/delivery rate, estimated costs, as well as response rate on this page.  

## Czat wiadomości przychodzących

<center>
<img src="/images/blog/24-seax-bulk-sms/7-chat.png" alt="Obsługa przychodzących odpowiedzi z masowej kampanii SMS za pomocą SeaX."/>

*Obsługa przychodzących odpowiedzi z masowej kampanii SMS.*
</center>

Podobnie jak wszystkie funkcje SeaX, staramy się umożliwić agentom lub menedżerom kampanii obsługę przychodzących żądań/problemów - Bulk SMS pozwala SeaX obsługiwać również wychodzące działania marketingowe. Po uruchomieniu kampanii możesz zarządzać wszystkimi przychodzącymi odpowiedziami w oknie czatu pokazanym poniżej. 

# Zakończenie

Dziękujemy za poświęcenie czasu na przeczytanie o tym, jak system SeaX Bulk SMS umożliwia agentom wysyłanie komunikatów wychodzących oprócz obsługi przychodzących żądań wiadomości. Bądź na bieżąco z kolejnym segmentem naszej serii blogów, który obejmie niektóre narzędzia do zarządzania i analizy wbudowane w platformę SeaX. Jeśli chcesz dowiedzieć się więcej od razu, wypełnij nasz [formularz rezerwacji demo](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting), aby zapoznać się z platformą SeaX.`;export{e as default};

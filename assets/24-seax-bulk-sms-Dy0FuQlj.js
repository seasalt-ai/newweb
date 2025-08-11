const a=`---
title: "SeaX Bulk SMS: Para sa Mas Mabilis, Mas Epektibong Pakikipag-ugnayan sa Customer"
metatitle: "SeaX Bulk SMS: Para sa Mas Mabilis, Mas Epektibong Pakikipag..."
date: 2022-09-09 11:05:22-07:00
draft: false
author: Amy Chen, Kim Dodds, Sarah Reid
description: "Sa blog na ito, ipapakita namin kung paano pinapayagan ng feature na Bulk SMS ng SeaX ang mga ahente na proaktibong magpadala ng mga outbound na mensahe sa pamamagitan ng text."
weight: 1
tags:
  - SeaX
image: images/blog/24-seax-bulk-sms/thumbnail.png
canonicalURL: /blog/seax-bulk-sms/
url: /blog/seax-bulk-sms/
---


*Sa aming mga nakaraang blog post, tinalakay namin ang ilan sa mga pangunahing feature ng SeaX (kabilang ang [Voice Intelligence](https://seasalt.ai/blog/21-seax-voice-intelligence/), [Knowledge Base](https://seasalt.ai/blog/22-seax-knowledge-base/), at [Case Management](https://seasalt.ai/blog/23-seax-case-management/)) na tumutulong sa mga ahente na mas mahusay na hawakan ang mga papasok na tawag at mensahe. Sa blog na ito, ipapakita namin kung paano pinapayagan ng feature na Bulk SMS ng SeaX ang mga ahente na proaktibong magpadala ng mga outbound na mensahe sa pamamagitan ng text, na ipinapakita na mas mabilis at mas pare-pareho ang pagbubukas ng mga tatanggap kaysa sa tradisyonal na komunikasyon sa email.*

# Talaan ng mga Nilalaman
- [SMS vs Email](#sms-vs-email)
- [10DLC Standards](#10dlc-standards)
- [SeaX Bulk SMS](#seax-bulk-sms)
    - [Pag-upload ng Contact](#contact-upload)
    - [Pagbuo ng Mensahe](#message-composition)
    - [Tinatayang Gastos](#cost-estimate)
    - [Preview ng Bulk Message](#bulk-message-preview)
    - [Pagsubaybay sa Pag-unlad ng Kampanya](#campaign-progress-monitoring)
    - [Chat ng Papasok na Mensahe](#incoming-message-chat)
- [Pagsasara](#closing)

# SMS vs Email

Ang email ay karaniwang ang de facto na paraan ng komunikasyon para sa karamihan ng mga operasyon ng negosyo. Hanggang kamakailan, ang pagmemensahe sa text (SMS) ay hindi isang malawakang ginagamit na channel ng komunikasyon para sa bulk business messaging, sa kabila ng pagiging popular nito para sa pang-araw-araw na interpersonal na komunikasyon. Gayunpaman, sa mga nakaraang taon, ginawa ng mga cloud communication provider tulad ng Twilio ang channel ng SMS na mas madaling ma-access sa mga negosyo sa pamamagitan ng paghawak sa mga detalye ng imprastraktura ng telekomunikasyon at mga service provider sa backend, at pagbibigay ng simpleng SMS API bilang isang serbisyo sa mga kliyente. Habang ang email ay maaaring manatiling pinakapopular na channel para sa negosyo, ang SMS ay maaaring magbigay ng isang natatanging komplemento sa tradisyonal na komunikasyon sa email.

<center>
<img src="/images/blog/24-seax-bulk-sms/1-pros-cons.png" alt="Ilan sa mga Pros at Cons ng SMS para sa komunikasyon sa negosyo."/>

*Ilan sa mga Pros at Cons ng SMS para sa komunikasyon sa negosyo.*
</center>

Ngunit bakit gagamitin ang SMS kung napatunayang matagumpay ang email? Kung kukunin natin ang mga kampanya sa marketing bilang isang halimbawa, ang maikling sagot ay: habang ang open rate para sa isang kampanya sa email ay 20% lamang, ang average na open rate para sa SMS ay maaaring umabot ng *98%* - hindi pa kasama na ang mga text message ay may posibilidad na makakuha ng mas maraming tugon. Bukod pa rito, ang mga text message ay karaniwang binubuksan sa loob ng 90 segundo ng pagtanggap, habang ang mga email ay karaniwang binubuksan sa humigit-kumulang 90 minuto. Huli ngunit hindi bababa sa, ang SMS ay may average na click through rate na humigit-kumulang 19%, mas mataas kaysa sa 3.2% para sa mga email ([source](https://manychat.com/blog/sms-vs-email-marketing-2021/)).

Sa pangkalahatan, ang mga text message ay mas mabilis at mas madalas na binubuksan kaysa sa mga email - marahil dahil ang mga text ay palaging direktang inihahatid sa tatanggap nasaan man sila, may wifi man o wala. Gayundin dahil ang SMS ay karaniwang ginagamit para sa mga personal na mensahe, at hindi gaanong madalas para sa komunikasyon sa negosyo, maaaring tingnan ng mga tatanggap ang mga text bilang mas mahalaga o makabuluhan kaysa sa mga email.

Kaya bakit hindi lahat ay gumagamit ng SMS? Well, siyempre may mga pros at cons. Natural na mas mahal ang SMS kaysa sa email dahil umaasa ito sa imprastraktura ng telekomunikasyon at mga service provider (tulad ng Verizon, AT&T, atbp.) upang maihatid ang mga mensahe. Bukod pa rito, ang mga text message ay may mahigpit na limitasyon na humigit-kumulang 900 character at isang solong attachment (na may dagdag na bayad, siyempre). Kaya sa kabuuan, habang ang SMS ay maaaring maging isang mas epektibong paraan ng komunikasyon, ang kapalit ay kailangan ng mga negosyo na maging mas mapili sa nilalaman na kanilang ipinapadala upang matiyak na sila ay cost effective.

Gayunpaman, walang dahilan kung bakit hindi dapat gamitin nang magkasama ang SMS at email! Ang bawat channel ay may sariling mga pros at cons, kaya masisiguro ng isang negosyo na nagpapadala sila ng pinakaepektibong komunikasyon sa pamamagitan ng paggamit ng mga kalakasan ng bawat channel.

# 10DLC Standards

Para sa mataas na volume na A2P (application-to-person) SMS messaging, ginagamit ng mga US carrier ang standardized na 10-digit long codes, o 10DLC. Bago magsimula ng isang bulk SMS campaign, inirerekomenda namin na basahin mo pa ang tungkol sa 10DLC at ang mga aplikasyon nito [dito](https://support.twilio.com/hc/en-us/articles/1260800720410-What-is-A2P-10DLC-).

# SeaX Bulk SMS

Ang serbisyo ng Bulk SMS ng SeaX ay nagbibigay-daan sa iyo na madaling mag-upload ng iyong mga contact/leads, magpadala ng SMS (sinusuportahan din namin ang MMS - Multimedia Messages) nang maramihan, at pamahalaan ang mga papasok na tugon. Basahin pa upang makita ang ilang simpleng hakbang upang simulan ang iyong unang bulk SMS campaign.

## Pag-upload ng Contact

<center>
<img src="/images/blog/24-seax-bulk-sms/2-contact-upload.png" alt="Pag-upload ng listahan ng mga contact sa SeaX Bulk SMS."/>

*Pag-upload ng listahan ng mga contact sa SeaX Bulk SMS.*
</center>

Ang unang hakbang ay ang pag-upload ng mga contact at leads. Una, ayusin ang mga contact para sa iyong SMS campaign sa isang csv file. Bukod sa mga kinakailangang field, \`phone_number\` at \`name\`, maaari kang magdagdag ng iba pang mga field at gamitin ang mga ito sa katawan ng mensahe. Halimbawa, maaari mong dynamic na baguhin ang katawan ng mensahe upang isama ang pangalan ng tatanggap batay sa field na \`name\` para sa bawat contact.

Susunod, buksan lamang ang serbisyo ng Bulk SMS sa ilalim ng SeaX at pindutin ang “Import” upang i-upload ang iyong mga contact. Sine-save namin ang lahat ng iyong nakaraang contact sa listahan ng mga tatanggap upang madali mong mailunsad ang mga follow-up na kampanya.

## Pagbuo ng Mensahe

<center>
<img src="/images/blog/24-seax-bulk-sms/3-message-draft.png" alt="Pagbuo ng bagong SMS message gamit ang SeaX Bulk SMS."/>

*Pagbuo ng bagong SMS message.*
</center>

Ang susunod na hakbang ay ang pagbibigay ng pangalan sa iyong kampanya at pagbuo ng mensahe. Pinapayagan ka ng Bulk SMS na i-access ang lahat ng impormasyon ng contact na nakaimbak sa iyong csv/excel file. Halimbawa, kung mayroon kang field na tinatawag na \`name\` sa listahan ng contact, maaari mong i-type ang \`{name}\` sa mensahe at awtomatikong ire-render ng mensahe ang pangalan para sa bawat contact sa katawan ng mensahe.

## Tinatayang Gastos

<center>
<img src="/images/blog/24-seax-bulk-sms/4-cost-estimate.png" alt="Pagpili ng mga numero ng telepono na magpapadala at pagkuha ng tinatayang gastos ng kampanya gamit ang SeaX Bulk SMS."/>

*Pagpili ng mga numero ng telepono na magpapadala at pagkuha ng tinatayang gastos ng kampanya.*
</center>

Susunod, piliin ang numero ng telepono na nais mong gamitin upang magpadala ng mga outbound na mensahe. Kung wala ka pang numero ng telepono, maaari kang mag-click sa “Quote for a New Number” sa kanang sulok sa itaas upang magsumite ng kahilingan sa pagbili. Matutulungan ka ng aming koponan na bumili ng mga bagong 10DLC na numero.

Maaari mo ring i-preview ang tinatayang unit price para sa kampanya. Magkaroon ng kamalayan na ang pagpapadala at pagtanggap ng SMS/MMS ay may bayad kaya siguraduhing magbadyet nang naaayon.

## Preview ng Bulk Message

<center>
<img src="/images/blog/24-seax-bulk-sms/5-preview.png" alt="Pag-preview ng isang Bulk SMS campaign bago ipadala gamit ang SeaX."/>

*Pag-preview ng isang Bulk SMS campaign bago ipadala.*
</center>

Maaari mong i-preview ang mga bulk message bago ipadala. Mahalagang kumpirmahin ang katawan ng mensahe, numero ng telepono ng tatanggap, at numero ng telepono ng nagpadala. Kapag nailunsad mo na ang kampanya, hindi na posible na bawiin ang mga mensahe. Sa pahinang ito, maaari mong i-preview ang unang 3 mensahe sa iyong kampanya, na tumutugma sa unang 3 contact mula sa iyong listahan.

## Pagsubaybay sa Pag-unlad ng Kampanya

<center>
<img src="/images/blog/24-seax-bulk-sms/6-monitor.png" alt="Pagsubaybay sa pag-unlad ng isang Bulk SMS campaign gamit ang SeaX."/>

*Pagsubaybay sa pag-unlad ng isang Bulk SMS campaign.*
</center>

Sa wakas, maaari kang umupo at subaybayan ang pag-unlad ng kampanya sa Bulk SMS dashboard. Awtomatikong nagre-refresh ang pahina at nag-a-update ng status ng kampanya. Maaari mong tingnan ang mga status ng paghahatid ng mensahe, success/delivery rate, tinatayang gastos, pati na rin ang response rate sa pahinang ito.

## Chat ng Papasok na Mensahe

<center>
<img src="/images/blog/24-seax-bulk-sms/7-chat.png" alt="Pag-address ng mga papasok na tugon mula sa isang bulk SMS campaign gamit ang SeaX."/>

*Pag-address ng mga papasok na tugon mula sa isang bulk SMS campaign.*
</center>

Tulad ng lahat ng feature ng SeaX, nagsusumikap kaming bigyan ng kapangyarihan ang mga ahente o campaign manager na hawakan ang mga papasok na kahilingan/isyu - pinapayagan ng Bulk SMS ang SeaX na hawakan din ang mga outbound marketing efforts. Pagkatapos mong ilunsad ang kampanya, maaari mong pamahalaan ang lahat ng papasok na tugon sa chat window na ipinapakita sa ibaba.

# Pagsasara

Salamat sa paglalaan ng oras upang basahin ang tungkol sa kung paano binibigyan ng kapangyarihan ng SeaX Bulk SMS System ang mga ahente na magpadala ng mga outbound na komunikasyon bukod pa sa paghawak ng mga papasok na kahilingan sa mensahe. Manatiling nakatutok para sa susunod na segment sa aming serye ng blog, na sasaklaw sa ilan sa mga tool sa pamamahala at analytics na binuo sa platform ng SeaX. Kung interesado kang matuto nang higit pa kaagad, punan ang aming [Book a Demo form](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting) upang makakuha ng unang pagtingin sa platform ng SeaX.`;export{a as default};

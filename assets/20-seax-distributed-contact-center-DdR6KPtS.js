const a=`---
title: "Palawakin ang Iyong Contact Center Footprint gamit ang isang Distributed Contact Center"
metatitle: "Palawakin ang Iyong Footprint gamit ang isang Distributed Contact Center"
date: 2022-07-27 21:46:45+00:00
modified_date: 2025-07-28T16:56:53Z
draft: false
author: Sarah Reid
description: "Sa blog na ito, titingnan natin ang mga 'distributed' contact center: kung ano ang mga ito, paano ka nila mapapakinabangan, at paano ginagamit ng SeaX ito upang mas mahusay na mapagsilbihan ang aming mga kliyente."
weight: 1
tags:
  - SeaX
image: images/blog/20-seax-distributed-contact-center/0-main.png
canonicalURL: /blog/seax-distributed-contact-center/
url: /blog/seax-distributed-contact-center/
---

*Sa aming nakaraang blog post, [Dalhin ang mga Customer mula sa Anumang Channel sa Isang Lugar gamit ang SeaX Omnichannel Communication](https://seasalt.ai/blog/19-seax-omnichannel-communication/), ipinakita namin ang kapangyarihan ng omnichannel communication sa SeaX platform, na nagpapahintulot sa mga mensahe ng user mula sa halos anumang channel na lumabas sa SeaX platform. Sa post na ito, titingnan natin ang mga "distributed" contact center: kung ano ang mga ito, paano ka nila mapapakinabangan, at paano ginagamit ng SeaX ang isang distributed platform upang mas mahusay na mapagsilbihan ang aming mga kliyente.*

# Talaan ng Nilalaman
- [Ano ang isang “distributed” contact center?](#ano-ang-isang-distributed-contact-center)
- [Ano ang mga benepisyo ng isang “distributed” contact center?](#ano-ang-mga-benepisyo-ng-isang-distributed-contact-center)
- [Ano ang mga hamon ng isang “distributed” contact center?](#ano-ang-mga-hamon-ng-isang-distributed-contact-center)
- [Paano nilulutas ng SeaX ang mga isyung ito?](#paano-nilulutas-ng-seax-ang-mga-isyung-ito)
    - [Pagruruta ng mga Tawag sa mga Distributed na Lokasyon at Ahente](#pagruruta-ng-mga-tawag-sa-mga-distributed-na-lokasyon-at-ahente)
    - [Pag-configure ng Distributed Location Availability](#pag-configure-ng-distributed-location-availability)
    - [I-customize ang Distributed Location Messaging](#i-customize-ang-distributed-location-messaging)

# Ano ang isang “distributed” contact center?
Sa pinakasimpleng antas, ang isang distributed contact center ay isang contact center na umiiral sa higit sa isang lokasyon, hindi tulad ng tradisyonal na one-location contact center. Ito ay maaaring isang contact center na may maraming opisina, o maraming lokasyon sa iba't ibang bansa, o kahit isang contact center na walang pisikal na lokasyon kung saan ang lahat ng mga ahente ay nagtatrabaho nang malayuan. Gayunpaman, ang mga distributed contact center ay kailangan pa ring gumana tulad ng tradisyonal na one-location contact center, na nagbibigay ng walang putol na karanasan para sa lahat ng kasangkot. Para sa mga ahente, nangangahulugan ito na sinusuportahan sila sa isang platform anuman ang kanilang lokasyon. Para sa customer, nangangahulugan ito na tama silang nakakonekta sa naaangkop na lokasyon at ahente batay sa kanilang mga pangangailangan.

# Ano ang mga benepisyo ng isang “distributed” contact center?
Ang mga distributed contact center ay may ilang benepisyo kaysa sa tradisyonal na contact center, lalo na sa mga tuntunin ng kanilang abot at saklaw. Ang pagkakaroon ng mga ahente sa maraming time zone ay nagsisiguro na ang mga customer ay makakaabot sa iyo anumang oras na kailangan nila ng tulong. Sa tradisyonal na contact center, ang mga customer ay limitado sa pagtawag sa isang set ng mga oras ng pagbubukas, na nagpapahirap sa kanila na makipag-ugnayan sa iyong negosyo. Ang pagkakaroon ng mga distributed na ahente ay nagbibigay din sa iyong negosyo ng mas maraming pagkakataon na kumuha ng mga taong may iba't ibang kasanayan at espesyalidad, tulad ng pagkakaroon ng mga ahente na sumasaklaw sa mas malawak na hanay ng mga wika. Ang tradisyonal na contact center sa isang lokasyon ay limitado sa pagkuha ng mga ahente sa lokasyong iyon, na nagpapatakbo ng panganib na hindi makahanap ng ahente na may mga kasanayan na kailangan mo. Sa wakas, ang pagkakaroon ng malawak na mga ahente na mas malapit sa mas maraming customer ay nagpapahintulot sa mga ahente na magkaroon ng mas malalim na pag-unawa sa anumang espesyal na panuntunan at regulasyon sa lugar na iyon. Sa isang tradisyonal na one-location contact center, maaaring hindi alam ng mga ahente ang mga partikular na detalye tungkol sa isang bagay tulad ng pagpapadala sa isang bansa sa kabilang panig ng mundo, na nagpapahirap sa pagtulong sa mga customer.


# Ano ang mga hamon ng isang “distributed” contact center?
Bagama't ang distributed na katangian ng mga contact center na ito ay may maraming benepisyo para sa iyong negosyo, mayroon ding ilang hamon sa mga distributed contact center. Ang pagkakaroon ng mga ahente sa maraming time zone ay nagpapahintulot ng madaling komunikasyon sa mga customer sa lahat ng oras, ngunit nangangahulugan din na mahalaga ang tamang pagruruta ng mga tawag upang hindi mailihis ang customer sa isang lokasyon na kasalukuyang sarado o sa isang ahente na wala sa tungkulin. Mahalaga rin na ipadala ang mga customer sa mga ahente na nagsasalita ng wikang hinihingi ng customer at may tamang pagsasanay upang hawakan ang kanilang isyu. Sa malawak na pool ng mga ahente sa iba't ibang lokasyon na may iba't ibang kasanayan, ang gawaing ito ng pagruruta ay mabilis na magiging kumplikado.

<center>
<img src="/images/blog/20-seax-distributed-contact-center/1-feature-comparison.png" alt="Paghahambing ng feature: tradisyonal na call center vs distributed contact center vs SeaX."/>

*Paghahambing ng feature: tradisyonal na call center vs distributed contact center vs SeaX.*
</center>

# Paano nilulutas ng SeaX ang mga isyung ito?

## Pagruruta ng mga Tawag sa mga Distributed na Lokasyon at Ahente
Ang SeaX ay isang collaborative contact center solution na ipinanganak na cloud-native at distributed. Ito ay binuo sa ibabaw ng [Twilio Flex](https://www.twilio.com/flex) na gumagamit ng cloud communications platform ng Twilio. Nagbibigay ang Twilio ng mga pangunahing building block para sa SeaX, tulad ng telecom infrastructure, message & task routing, at isang basic contact center UI. Sa loob ng SeaX, maaari mong i-configure ang maraming numero ng telepono para sa iyong iba't ibang lokasyon, na nagpapahintulot sa iyo na magkaroon ng naaangkop na country at area codes para sa bawat lugar na pinapatakbo ng iyong contact center. Maaari mo ring i-configure ang iyong mga setting ayon sa lokasyon, na tinitiyak na ang bawat lokasyon ay gumagana nang tama at tumatanggap ng tamang mga tawag, habang pinagsisilbihan pa rin ang lahat ng iyong ahente sa parehong platform.

Ang [Twilio TaskRouter](https://www.twilio.com/taskrouter) ay nagtatalaga ng mga tawag at mensahe sa mga ahente batay sa mga katangian ng tawag at ahente.

<center>
<img src="/images/blog/20-seax-distributed-contact-center/2-taskrouter.png" alt="Diagram ng TaskRouter architecture."/>

*Diagram ng TaskRouter architecture. [Source](https://twilio-cms-prod.s3.amazonaws.com/images/taskrouter-diagram.width-800.png).*
</center>

Pinapayagan ka rin nitong gumamit ng routing na batay sa kasanayan, na nagbibigay sa iyo ng detalyadong kontrol sa kung aling mga ahente at lokasyon ang tumatanggap ng aling mga tawag. Hindi lamang mo maaaring lagyan ng label ang mga kasanayan na mayroon ang iyong mga ahente, tulad ng antas ng kanilang pagsasanay sa pagbebenta, maaari mo ring ilista ang mga bagay tulad ng mga wikang sinasalita nila, na tinitiyak na makakatanggap lamang sila ng mga tawag na kaya nilang hawakan. Bilang karagdagan, maaari mong gamitin ang routing na ito upang magtalaga ng mga partikular na numero ng telepono sa mga ahente, na nag-uugnay sa bawat ahente sa isang partikular na lokasyon ng iyong contact center, kahit na hindi sila pisikal na naroroon. Ang mga ahente ay makakatanggap lamang ng mga tawag na iruruta sa kanilang itinalagang lokasyon, na tinitiyak na ang mga tawag ng iyong mga customer ay palaging ididirekta sa tamang tao.

<center>
<img src="/images/blog/20-seax-distributed-contact-center/3-skills.png" alt="Mga kasanayang tinukoy sa TaskRouter para sa pagruruta ng mga papasok na tawag at mensahe."/>

*Mga kasanayang tinukoy sa TaskRouter para sa pagruruta ng mga papasok na tawag at mensahe.*
</center>

## Pag-configure ng Distributed Location Availability
Sa SeaX, maaari mo ring i-configure ang iyong mga oras ng pagbubukas at mga holiday ayon sa numero ng telepono. Gamit ang tool na ito, maaari mong kontrolin nang independiyente kung kailan bukas ang bawat isa sa iyong mga lokasyon, na nagbibigay sa iyo ng ganap na flexibility kung kailan maaaring makontak ang bawat isa sa iyong mga lokasyon. Sa esensya, ang bawat isa sa iyong mga lokasyon ay maaaring gumana tulad ng isang tradisyonal na call center, na may itinakdang oras ng pagbubukas at sarado sa mga lokal na holiday, habang naka-configure pa rin at konektado mula sa isang karaniwang platform para sa pagpapatakbo ng iyong mga ahente.

<center>
<img src="/images/blog/20-seax-distributed-contact-center/4-open-hours.png" alt="Mga oras ng pagpapatakbo para sa dalawang magkaibang numero ng telepono sa dalawang magkaibang time zone sa parehong SeaX instance."/>
</center>

<center>
<img src="/images/blog/20-seax-distributed-contact-center/5-open-hours.png" alt="Mga oras ng pagpapatakbo para sa dalawang magkaibang numero ng telepono sa dalawang magkaibang time zone sa parehong SeaX instance."/>

*Mga oras ng pagpapatakbo para sa dalawang magkaibang numero ng telepono sa dalawang magkaibang time zone sa parehong SeaX instance.*
</center>

## I-customize ang Distributed Location Messaging
Pinapayagan din ng SeaX ang mga mensahe ng customer na hindi available ayon sa numero ng telepono. Ang mga mensahe na hindi available ay awtomatikong pinapatugtog sa mga customer kapag walang available na tao upang sagutin ang kanilang tawag. Sa kakayahang i-customize ang mensaheng ito ayon sa numero ng telepono, maaari kang magkaroon ng mga mensahe sa iba't ibang wika o naglalaman ng iba't ibang impormasyon depende sa kung ano ang pinakamahalaga na iparating sa mga customer na tumatawag sa lokasyong iyon.

<center>
<img src="/images/blog/20-seax-distributed-contact-center/6-unavailable-message.png" alt="Mensahe na hindi available para sa isang partikular na numero ng telepono sa SeaX platform."/>

*Mensahe na hindi available para sa isang partikular na numero ng telepono sa SeaX platform.*
</center>

Ang isang tradisyonal na one-location contact center ay epektibong makakapagsilbi lamang sa lugar na direktang nakapaligid dito, bagama't likas na nasa isang platform. Ang isang distributed contact center ay lubos na nagpapalawak ng customer base na maaari nitong pagsilbihan sa pamamagitan ng mga ahente sa maraming lokasyon, ngunit may ilang hamon sa pagsasama-sama ng lahat ng serbisyo na kailangan ng mga ahente nito anuman ang kanilang lokasyon. Sa SeaX, maaari mong maabot ang bawat bahagi ng iyong customer base, habang pinagsisilbihan pa rin ang lahat ng iyong ahente sa isang madaling platform.

Salamat sa paglalaan ng oras upang basahin kung paano sinusuportahan ng SeaX cloud contact center ang iyong distributed contact center sa isang platform. Manatiling nakatutok para sa aming susunod na blog post, na susuriin ang aming in-house text-to-speech at speech-to-text, at kung paano nila mapapahusay ang iyong contact center. Kung interesado kang matuto nang higit pa kaagad, punan ang aming form na "[Mag-book ng Demo](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting)" upang makita mismo ang SeaX platform.
`;export{a as default};

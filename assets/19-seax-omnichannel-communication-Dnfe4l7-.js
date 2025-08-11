const a=`---
title: "Dalhin ang mga Customer mula sa Anumang Channel sa Isang Lugar gamit ang SeaX Omnichannel Communication"
metatitle: "Pag-isahin ang mga Customer Touchpoint gamit ang SeaX Omnichannel Communication"
date: 2022-07-15 13:56:54-07:00
modified_date: 2025-08-02 17:00:00-07:00
draft: false
author: Kim Dodds
description: "Sa blog na ito, itinatampok namin ang isa sa mga omnichannel na komunikasyon ng SeaX, na nagbibigay-daan sa mga mensahe ng user mula sa anumang channel na lumabas sa platform ng SeaX."
weight: 1
tags:
  - SeaX
image: images/blog/19-seax-omnichannel-communication/0-thumbnail.png
canonicalURL: /blog/seax-omnichannel-communication/
url: /blog/seax-omnichannel-communication/
---

*Sa aming nakaraang post sa blog, [Maligayang pagdating sa SeaX, isang Collaborative Cloud Contact Center](https://seasalt.ai/blog/18-seax-collaborative-cloud-contact-center-introduction/), ipinakilala namin ang SeaX, ang aming collaborative cloud communications contact center solution. Habang ang aming unang post sa blog ay nagbigay ng isang komprehensibong pangkalahatang-ideya ng mga pangunahing at mas advanced na mga tampok ng SeaX, ang aming mga kasunod na post ay mas malalim na susuriin ang ilan sa mga indibidwal na tampok na nagpapatingkad sa SeaX. Sa post na ito, titingnan natin nang mas malapitan ang suporta sa omnichannel ng SeaX at makikita kung paano lumalabas ang mga tawag at mensahe mula sa iba't ibang mga channel sa platform ng SeaX.*

# Talaan ng mga Nilalaman
- [Ano ang Omnichannel Communication?](#what-is-omnichannel-communication)
- [Lifecycle ng Mensahe](#message-lifecycle)
    - [Channel](#channel)
    - [Pagruruta ng Mensahe](#message-routing)
    - [TaskRouter](#taskrouter)
    - [Platform ng SeaX](#seax-platform)
- [Mga Suportadong Channel](#supported-channels)

# Ano ang Omnichannel Communication?

Una sa lahat, ano nga ba talaga ang ibig sabihin ng "omnichannel"? Kung hahatiin, ang "omni" ay isang panlapi na nangangahulugang "lahat," at ang "channel" ay ang iba't ibang mga platform kung saan maaari kang makipag-ugnayan sa iyong mga customer. Kaya, sa simpleng salita, ang "omnichannel communication" ay nangangahulugang kakayahang makipag-usap sa pamamagitan ng anuman at lahat ng magagamit na mga channel. Hindi lamang iyon, ngunit ang omnichannel communication ay nangangahulugan din na ang karanasan sa pagitan ng mga channel ay walang putol. Sa panig ng ahente, ang mga komunikasyon mula sa lahat ng mga channel ay ipinakita sa isang pinag-isang interface. Para sa customer, ang kanilang data ng pakikipag-ugnayan ay nananatili sa mga channel.

Ang mga tradisyonal na call center ay madalas na sumusuporta lamang sa mga tawag sa telepono. Ang mga mas advanced na contact center na nakikipag-ugnayan sa mga customer sa maraming mga channel, tulad ng email, web chat, at telepono, ay mayroong isang multichannel contact center. Gayunpaman, dahil lamang sa gumagamit ang isang contact center ng maraming mga channel ay hindi nangangahulugang ang kanilang karanasan ay walang putol. Sa isang multichannel contact center, maaaring ma-access ang iba't ibang mga channel sa pamamagitan ng magkakahiwalay na mga platform, at/o maaaring hindi maiugnay ang data ng customer sa mga channel. Sa kabaligtaran, pinapayagan ng isang omnichannel contact center ang mga ahente na subaybayan ang mga pag-uusap ng customer saanman sila magpunta, nang hindi naka-lock sa isang channel o nakakalat sa isang dosenang mga platform.

<center>
<img src="/images/blog/19-seax-omnichannel-communication/1-contact-center-comparison.png" alt="Paghahambing ng tampok: tradisyonal na call center vs. contact center; multichannel vs. omnichannel."/>

*Paghahambing ng tampok: tradisyonal na call center vs. contact center; multichannel vs. omnichannel.*
</center>

Ang SeaX ay may kakayahang mag-integrate sa halos anumang channel, kasama na bilang default: text, telepono, web chat, Facebook, at higit pa. Ang lahat ng mga mensahe at tawag ay ipinapakita sa isang pinag-isang platform, at ang data ng gumagamit mula sa lahat ng mga channel ay madaling magagamit.

Kung nais mong dumiretso sa demo, panoorin ang aming maikling video kung saan ipinapakita namin ang omnichannel na komunikasyon ng SeaX. Sa natitirang bahagi ng blog na ito, dadaan kami sa hakbang-hakbang kung paano nai-ruta ang mga mensahe at tawag mula sa iba't ibang mga channel sa isang ahente sa SeaX. Ibabahagi din namin ang mga out-of-the-box na suportadong mga channel at tatalakayin kung paano maaaring palawakin ang SeaX upang masakop ang mga bagong channel.

<iframe width="85%" height="450px" src="https://www.youtube.com/embed/usb-RK7sHlA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

# Lifecycle ng Mensahe

Ang SeaX ay binuo sa ibabaw ng [Twilio Flex](https://www.twilio.com/flex), isang cloud-based na contact center na gumagamit ng cloud communications platform ng Twilio. Nagbibigay ang Twilio ng mga pangunahing bloke ng gusali para sa SeaX, tulad ng imprastraktura ng telecom, pagruruta ng mensahe at gawain, at isang pangunahing UI ng contact center. Ngayon, subaybayan natin ang lifecycle ng isang papasok na mensahe ng gumagamit at tingnan kung paano ginagamit ng SeaX ang pangunahing arkitektura ng Twilio kasama ng mga custom na bahagi upang i-ruta ang mensahe sa isang live na ahente sa platform ng SeaX.

## Channel

<center>
<img src="/images/blog/19-seax-omnichannel-communication/2-example-message.jpg" alt="Isang user na nagpapadala ng mensahe sa isang negosyo sa pamamagitan ng Google Business Messages." style="width:50%"/>

*Nagpapadala ng mensahe sa isang negosyo sa pamamagitan ng Google Business Messages.*
</center>

Ang paglalakbay ng isang mensahe ay nagsisimula sa isang gumagamit na bumubuo at nagpapadala ng isang mensahe sa isang suportadong platform. Ipinapakita ng halimbawa sa itaas ang isang taong nagpapadala ng mensahe sa isang Seasalt.ai chatbot sa Google Business Messages. Bilang default, hindi sinusuportahan ng Twilio ang Google Business Messages, kaya gumagamit kami ng isang custom na channel connector na binuo ng Seasalt.ai upang ikonekta ang platform ng Google sa Twilio at SeaX.

Kapag naipadala na ang mensahe, ipinapasa ito ng custom na connector sa Twilio Messaging API. Sa puntong ito, lumilikha ang Twilio ng isang bagong konteksto ng pag-uusap para sa gumagamit at naghahanda na i-ruta ang mensahe.

## Pagruruta ng Mensahe

<center>
<img src="/images/blog/19-seax-omnichannel-communication/3-studio-flow.png" alt="Isang simpleng Studio Flow na nagruruta ng mga mensahe sa isang chatbot o isang live na ahente."/>

*Isang simpleng Studio Flow na nagruruta ng mga mensahe sa isang chatbot o isang live na ahente.*
</center>

Kapag natanggap na ng Twilio ang mensahe, kailangan itong i-ruta sa tamang lokasyon. Upang gawin ito, ginagamit namin ang [Twilio Studio Flows](https://www.twilio.com/studio) upang matukoy kung magbibigay ng awtomatikong tugon, ipapasa ang mensahe sa isang chatbot, ikonekta ang gumagamit sa isang live na ahente, o magsagawa ng ibang pagkilos.

Sa simpleng halimbawa na ibinigay sa itaas, lahat ng mga papasok na mensahe ay ipapasa sa isang chatbot maliban kung naglalaman ang mga ito ng pariralang "live agent," kung saan ang gumagamit ay ililipat sa isang live na ahente sa platform ng SeaX.

## TaskRouter

<center>
<img src="/images/blog/19-seax-omnichannel-communication/4-taskrouter.png" alt="Diagram ng arkitektura ng TaskRouter."/>

*Diagram ng arkitektura ng TaskRouter. [Pinagmulan](https://twilio-cms-prod.s3.amazonaws.com/images/taskrouter-diagram.width-800.png).*
</center>

Matapos maipasa ang mensahe sa SeaX, ang susunod na hakbang ay magpasya kung aling ahente ang tatanggap nito. Ang [TaskRouter ng Twilio](https://www.twilio.com/taskrouter) ay nagtatalaga ng mga gawain tulad ng mga mensahe at tawag sa telepono sa ahente sa SeaX na pinakamahusay na nakahanda upang hawakan ang mga ito. Ang bawat ahente sa SeaX ay maaaring italaga ng mga kasanayan, tulad ng kung anong mga wika ang kanilang sinasalita, kung saang departamento sila nagtatrabaho, kung dapat ba silang humawak ng mga customer ng VIP, atbp. Susuriin ng TaskRouter ang kilalang impormasyon tungkol sa gumagamit at mensahe at pagkatapos ay pipiliin ang pinaka-angkop na empleyado upang hawakan ang isyu. Ang Studio Flow mula sa nakaraang hakbang ay maaaring i-customize upang makakuha ng karagdagang impormasyon (tulad ng ginustong wika), at maaaring mapanatili ang impormasyon ng customer sa mga pag-uusap at channel upang matiyak na ang kanilang karanasan ay walang putol.

## Platform ng SeaX

<center>
<img src="/images/blog/19-seax-omnichannel-communication/5-seax-incoming-messages.png" alt="Lumalabas ang mga papasok na tawag at mensahe sa platform ng SeaX." style="width:50%"/>

*Lumalabas ang mga papasok na tawag at mensahe sa platform ng SeaX.*
</center>

Sa wakas, ang papasok na mensahe ay ipapakita sa naaangkop na ahente sa platform ng SeaX. Maaaring hawakan ng mga ahente ang maraming mga gawain mula sa maraming mga channel nang sabay-sabay. Sa larawan sa itaas, ang isang ahente ay may papasok na tawag, isang mensahe sa Facebook, at isang mensahe sa web chat. Maaaring tanggapin ng ahente ang gawain o tanggihan ito upang maipasa ito sa susunod na magagamit na ahente.

# Mga Suportadong Channel

Sana ay mas malinaw na ngayon kung ano ang omnichannel na komunikasyon at kung paano nito pinapahusay ang karanasan ng parehong gumagamit at ahente. Ang huling tanong ay: anong mga channel ang sinusuportahan sa labas ng kahon?

<center>
<img src="/images/blog/19-seax-omnichannel-communication/6-channel-comparison.png" alt="Paghahambing ng mga suportadong channel sa pagitan ng isang tradisyonal na call center, pangunahing Twilio Flex, at SeaX."/>

*Paghahambing ng mga suportadong channel sa pagitan ng isang tradisyonal na call center, pangunahing Twilio Flex, at SeaX.*
</center>

Tulad ng nabanggit kanina, ang mga tradisyonal na call center ay madalas na sumusuporta lamang sa mga tawag sa telepono. Maaaring makipag-ugnayan pa rin ang mga kumpanya sa mga customer sa pamamagitan ng social media o email, ngunit ang mga mensaheng ito ay hindi isinama sa isang pinag-isang platform.

Ang Twilio Flex, sa kabilang banda, ay naglalatag ng pundasyon para sa isang mahusay na omnichannel contact center. Gayunpaman, mayroon itong napakakaunting mga channel sa labas ng kahon. Bilang karagdagan sa mga tawag sa telepono at SMS, mayroon silang suporta sa beta para sa Facebook, WhatsApp, at email.

Ang SeaX ay binuo sa ibabaw ng Flex at nagdaragdag ng built-in na suporta para sa ilan sa mga pinaka-hinihiling na mga channel: tulad ng Google Business Messages, Discord, Line, at Instagram. Bukod pa rito, palaging nakikipagtulungan ang Seasalt.ai sa mga customer upang magdala ng mga bagong channel sa linya ng produkto ng SeaX. Ang SeaX ay lubos na napapasadya at madaling palawakin—nangangahulugan ito na maaari kaming makipagtulungan sa iyong kumpanya upang isama ang anumang channel na pinakagusto mo.

Salamat sa paglalaan ng oras upang basahin kung paano ginagamit ng SeaX cloud contact center ang omnichannel na komunikasyon upang magbigay ng isang walang putol na karanasan sa customer at ahente. Manatiling nakatutok para sa aming susunod na post sa blog, na tutuklasin kung ano ang ibig sabihin ng maging isang "distributed contact center." Kung interesado kang matuto nang higit pa ngayon, punan ang aming [form ng kahilingan sa demo](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting) upang maranasan ang platform ng SeaX nang direkta.`;export{a as default};

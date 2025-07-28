---
title: "Dalhin ang mga Customer mula sa Anumang Channel sa Isang Lugar gamit ang SeaX Omnichannel Communication"
metatitle: "Pag-isahin ang Customer Contact gamit ang SeaX Omnichannel Communication"
date: 2022-07-15T13:56:54-07:00
author: Kim Dodds 
draft: false
image: images/blog/19-seax-omnichannel-communication/0-thumbnail.png
description: "Sa blog na ito, nakatuon kami sa isa sa mga omnichannel communication ng SeaX, na nagbibigay-daan sa mga mensahe ng user mula sa anumang channel na lumabas sa platform ng SeaX."
weight: 1
tags: ["SeaX"]
canonicalURL: "/blog/seax-omnichannel-communication/"
url: "/blog/seax-omnichannel-communication/"
---

*Sa aming nakaraang blog post, [Welcome to SeaX, a Collaborative Cloud Contact Center](https://seasalt.ai/blog/18-seax-collaborative-cloud-contact-center-introduction/), ipinakilala namin ang aming collaborative cloud communication contact center solution, ang SeaX. Habang ang aming unang blog post ay nagbigay ng komprehensibong pangkalahatang-ideya ng mga pangunahing functionality at mas advanced na feature ng SeaX, ang aming mga susunod na post ay susuriin nang mas malalim ang ilan sa mga indibidwal na feature na nagpapatingkad sa SeaX. Sa post na ito, susuriin namin nang mas malapitan ang omnichannel support ng SeaX at tingnan kung paano nakakarating ang mga tawag at mensahe mula sa iba't ibang channel upang lumabas sa platform ng SeaX.*

# Talaan ng Nilalaman
- [Ano ang Omnichannel communication?](#what-is-omnichannel-communication)
- [Message Lifecycle](#message-lifecycle)
    - [Channel](#channel)
    - [Message Routing](#message-routing)
    - [TaskRouter](#taskrouter)
    - [SeaX Platform](#seax-platform)
- [Mga Suportadong Channel](#supported-channels)

# Ano ang Omnichannel communication?

Upang magsimula, ano ba talaga ang ibig sabihin ng “omnichannel”? Upang masira ito, ang “omni” ay isang prefix na nangangahulugang “lahat”, at ang “channels” ay ang iba't ibang platform kung saan ka maaaring makipag-ugnayan sa iyong mga customer. Kaya sa madaling salita, ang “omnichannel communication” ay nangangahulugang kakayahang makipag-ugnayan sa pamamagitan ng anumang at lahat ng magagamit na channel. At higit pa riyan, ang omnichannel communication ay nangangahulugang ang karanasan sa pagitan ng mga channel ay tuluy-tuloy. Sa panig ng ahente, ang komunikasyon mula sa lahat ng channel ay ipinapakita sa isang pinag-isang interface. Para sa customer, ang kanilang data ng interaksyon ay nananatili sa lahat ng channel.

Ang isang tradisyonal na call center ay karaniwang sumusuporta lamang sa mga tawag sa telepono. Ang mas advanced na contact center na kumokonekta sa mga customer sa pamamagitan ng maraming channel (tulad ng email, webchat, at telepon) ay may multichannel contact center. Gayunpaman, dahil lamang sa gumagamit ang isang contact center ng maraming channel ay hindi nangangahulugang tuluy-tuloy ang kanilang karanasan. Sa mga multichannel contact center, ang iba't ibang channel ay maaaring ma-access sa pamamagitan ng indibidwal na platform at/o ang data ng customer ay maaaring hindi naka-link sa lahat ng channel. Sa kabaligtaran, ang omnichannel contact center ay nagbibigay-daan sa mga ahente na sundan ang isang pag-uusap ng customer saanman ito magpunta, nang hindi nakakulong sa isang channel o nakakalat sa dose-dosenang platform.

<center>
<img src="/images/blog/19-seax-omnichannel-communication/1-contact-center-comparison.png" alt="Paghahambing ng feature: tradisyonal na call center vs contact center; multichannel vs omnichannel."/>

*Paghahambing ng feature: tradisyonal na call center vs contact center; multichannel vs omnichannel.*
</center>

Ang SeaX ay may kakayahang isama sa halos anumang channel, kabilang ang default: text, telepon, webchat, Facebook, at marami pa. Lahat ng mensahe at tawag ay lumalabas sa isang pinag-isang platform, at ang data ng user mula sa lahat ng channel ay madaling magagamit.

Kung gusto mong direktang makakuha ng demo, tingnan ang aming maikling video na nagpapakita ng omnichannel communication ng SeaX. Sa natitirang bahagi ng blog na ito, tatalakayin namin kung paano niruruta ang mga mensahe at tawag mula sa iba't ibang channel patungo sa mga ahente sa SeaX. Ibabahagi rin namin ang mga channel na sinusuportahan out of the box, at tatalakayin kung paano maaaring palawakin ang SeaX upang masakop ang mga bagong channel.

<iframe width="85%" height="450px" src="https://www.youtube.com/embed/usb-RK7sHlA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

# Siklo ng Buhay ng Mensahe

Ang SeaX ay binuo sa ibabaw ng [Twilio Flex](https://www.twilio.com/flex), isang cloud-based contact center na gumagamit ng cloud communications platform ng Twilio. Nagbibigay ang Twilio ng mga pangunahing building block para sa SeaX, tulad ng telecom infrastructure, message & task routing, at isang basic contact center UI. Ngayon, subaybayan natin ang siklo ng buhay ng isang papasok na mensahe ng user at tingnan kung paano ginagamit ng SeaX ang basic Twilio architecture na sinamahan ng mga custom component upang iruta ang mensahe sa live agent sa SeaX platform.

## Channel

<center>
<img src="/images/blog/19-seax-omnichannel-communication/2-example-message.jpg" alt="Nagpapadala ang user ng mensahe sa isang negosyo sa pamamagitan ng Google Business Messages.", style="width:50%"/>

*Nagpapadala ng mensahe sa isang negosyo sa pamamagitan ng Google Business Messages.*
</center>

Ang paglalakbay ng isang mensahe ay nagsisimula sa paggawa ng user ng mensahe at pagpapadala nito sa isang sinusuportahang platform. Ang halimbawa sa itaas ay nagpapakita ng isang tao na nagpapadala ng mensahe sa Seasalt.ai chatbot sa Google Business Messages. Hindi sinusuportahan ng Twilio ang Google Business Messages bilang default, kaya ginagamit namin ang isang custom channel connector na binuo ng Seasalt.ai upang ikonekta ang platform ng Google sa Twilio at SeaX.

Kapag naipadala na ang mensahe, ihahatid ito ng custom connector sa Twilio messaging API. Sa puntong ito, gagawa ang Twilio ng bagong konteksto ng pag-uusap para sa user, at maghahanda upang iruta ang mensahe.

## Pagruruta ng Mensahe

<center>
<img src="/images/blog/19-seax-omnichannel-communication/3-studio-flow.png" alt="Isang simpleng Studio Flow na nagruruta ng mga mensahe sa isang chatbot o isang live agent."/>

*Isang simpleng Studio Flow na nagruruta ng mga mensahe sa isang chatbot o isang live agent.*
</center>

Kapag natanggap na ng Twilio ang mensahe, kailangan itong iruta sa tamang lugar. Para sa layuning ito, ginagamit namin ang [Twilio Studio Flows](https://www.twilio.com/studio) upang matukoy kung magbibigay ng awtomatikong tugon, ipapasa ang mensahe sa isang chatbot, ikokonekta ang user sa isang live agent, o magsagawa ng iba pang aksyon.

Sa simpleng halimbawang ibinigay sa itaas, lahat ng papasok na mensahe ay ipapasa sa isang chatbot maliban kung naglalaman ang mga ito ng mga salitang “live agent”, kung saan ang user ay ililipat sa isang live agent sa platform ng SeaX.

## TaskRouter

<center>
<img src="/images/blog/19-seax-omnichannel-communication/4-taskrouter.png" alt="Diagram ng TaskRouter architecture."/>

*Diagram ng TaskRouter architecture. [Source](https://twilio-cms-prod.s3.amazonaws.com/images/taskrouter-diagram.width-800.png).*
</center>

Kapag nailipat na ang mensahe sa SeaX, ang susunod na hakbang ay ang pagpapasya kung aling ahente ang tatanggap nito. Ang [Twilio’s TaskRouter](https://www.twilio.com/taskrouter) ay nagdidistribyut ng mga gawain tulad ng mga mensahe at tawag sa telepono sa mga ahente sa SeaX na pinakamahusay na makakahawak sa mga ito. Ang bawat ahente sa SeaX ay maaaring bigyan ng mga kasanayan tulad ng kung anong mga wika ang kanilang sinasalita, kung anong departamento ang kanilang pinagtatrabahuhan, kung dapat ba nilang hawakan ang mga VIP customer, atbp. Susuriin ng TaskRouter ang mga kilalang impormasyon tungkol sa user at mensahe at pagkatapos ay pipiliin ang pinakaangkop na manggagawa upang hawakan ang isyu. Ang Studio Flow mula sa nakaraang hakbang ay maaaring i-customize upang makakuha ng karagdagang impormasyon (tulad ng gustong wika) at ang impormasyon ng customer ay maaaring mapanatili sa mga pag-uusap at channel upang matiyak na ang kanilang karanasan ay tuluy-tuloy.

## SeaX Platform

<center>
<img src="/images/blog/19-seax-omnichannel-communication/5-seax-incoming-messages.png" alt="Mga papasok na tawag at mensahe na lumalabas sa platform ng SeaX.", style="width:50%"/>

*Mga papasok na tawag at mensahe na lumalabas sa platform ng SeaX.*
</center>

Sa wakas, ang papasok na mensahe ay ipapakita sa naaangkop na ahente sa platform ng SeaX. Maaaring hawakan ng mga ahente ang maraming gawain mula sa maraming channel nang sabay-sabay. Sa larawan sa itaas, may papasok na tawag, mensahe sa Facebook, at mensahe sa webchat ang isang ahente. Maaaring tanggapin ng ahente ang gawain o tanggihan ito upang ipasa sa susunod na available na ahente.

# Mga Suportadong Channel

Sana ngayon ay mas malinaw na kung ano ang omnichannel communication, at kung paano nito pinapahusay ang karanasan ng user at ahente. Ang huling tanong ay: anong mga channel ba talaga ang sinusuportahan out of the box?

<center>
<img src="/images/blog/19-seax-omnichannel-communication/6-channel-comparison.png" alt="Paghahambing ng sinusuportahang channel sa pagitan ng tradisyonal na call center, basic Twilio Flex, at SeaX."/>

*Paghahambing ng sinusuportahang channel sa pagitan ng tradisyonal na call center, basic Twilio Flex, at SeaX.*
</center>

Tulad ng nabanggit kanina, ang isang tradisyonal na call center ay karaniwang sumusuporta lamang sa mga tawag sa telepono. Maaaring makipag-ugnayan pa rin ang mga kumpanya sa mga customer sa social media o sa pamamagitan ng email, ngunit ang mga mensaheng ito ay hindi isinama sa isang pinag-isang platform.

Ang Twilio Flex, sa kabilang banda, ay naglalatag ng pundasyon para sa isang kamangha-manghang omnichannel contact center. Gayunpaman, kakaunti ang mga channel na magagamit nito out of the box. Bukod sa mga tawag sa telepono at text, mayroon din silang beta support para sa Facebook, WhatsApp, at email.

Ang SeaX ay binuo sa ibabaw ng Flex upang magdagdag ng built-in na suporta para sa ilan sa mga pinakakaraniwang hinihiling na channel: tulad ng Google Business Messages, Discord, Line, at Instagram. Bukod pa rito, ang Seasalt.ai ay palaging nakikipagtulungan sa mga customer upang magdala ng mga bagong channel sa lineup ng SeaX. Ang SeaX ay lubos na nako-customize, at madaling mapalawak - nangangahulugang maaari kaming makipagtulungan sa iyong kumpanya upang isama ang anumang channel na pinakagusto mo.

Salamat sa paglalaan ng oras upang basahin kung paano ginagamit ng SeaX cloud contact center ang omnichannel communication upang magbigay ng tuluy-tuloy na karanasan ng customer at ahente. Mangyaring manatiling nakatutok para sa aming susunod na blog post, na susuriin kung ano ang ibig sabihin ng pagiging isang "distributed contact center". Kung interesado kang matuto nang higit pa kaagad, punan ang aming [Book a Demo form](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting) upang makita mismo ang platform ng SeaX.

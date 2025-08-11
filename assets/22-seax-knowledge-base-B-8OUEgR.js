const a=`---
title: "SeaX KB: Isang Knowledge Base na Sumasagot Bago Ka Magtanong"
metatitle: "SeaX KB: Isang Knowledge Base na Sumasagot Bago Ka Magtanong"
date: 2022-08-15 22:01:32-07:00
modified_date: 2025-07-30 17:01:14.001000+00:00
draft: false
author: Kim Dodds
description: "Sa artikulong ito, ipinagpapatuloy namin ang paksa ng pagsasama-sama ng AI sa pamamagitan ng pagpapakilala sa knowledge base na pinapagana ng AI ng SeaX, na nagbibigay ng mga iminungkahing tugon sa real-time."
weight: 1
tags:
  - SeaX
canonicalURL: /blog/seax-kb-a-knowledge-base/
url: /blog/seax-kb-a-knowledge-base/
---

*Sa aming nakaraang post sa blog na [Bigyan ang Iyong Contact Center ng Sarili Nitong Boses gamit ang SeaX Voice Intelligence](https://seasalt.ai/blog/21-seax-voice-intelligence/), ipinakita namin kung paano pinapahusay ng mga in-house na text-to-speech at speech-to-text engine ng Seasalt.ai ang iba't ibang aspeto ng platform ng SeaX. Sa artikulong ito, ipagpapatuloy namin ang paksa ng pagsasama-sama ng AI sa pamamagitan ng pagpapakilala sa knowledge base na pinapagana ng AI ng SeaX, na nakikinig sa mga pag-uusap sa real-time upang magbigay ng mga iminungkahing tugon.*

# Talaan ng mga Nilalaman
- [Ang Tradisyunal na Knowledge Base](#the-traditional-knowledge-base)
- [Ang SeaX Knowledge Base](#seax-knowledge-base)
    - [Naka-embed na User Interface para sa mga Live Agent](#embedded-user-interface-for-live-agents)
    - [Mabilis at Tumpak na Paghahanap](#fast-and-accurate-search)
    - [Mga Real-time na Automated na Mungkahi](#real-time-automated-suggestions)
    - [Mga Template ng Tugon](#response-templates)
    - [Pamamahala ng KB](#kb-management)
    - [Webinar](#webinar)

# Ang Tradisyunal na Knowledge Base

Sa kaibuturan nito, ang isang knowledge base (KB) ay isang (sa isip) maayos na nakaayos at madaling ma-access na koleksyon ng impormasyon para sa online na self-service. Ang isang mahusay na sistema ng KB ay magkakaroon ng mga tampok tulad ng hierarchical na organisasyon ng nilalaman, paghahanap, at pag-tag upang matulungan ang mga user na mahanap ang tamang impormasyon nang mas madali.

Ang pagpapanatili ng isang detalyadong knowledge base ay karaniwang kasanayan para sa karamihan ng mga kumpanya sa kasalukuyan. Kung ang layunin ay tulungan ang mga empleyado na magbahagi ng panloob na impormasyon tungkol sa kanilang mga produkto, sagutin ang mga tanong ng mga prospective na customer, tulungan ang mga customer sa pag-troubleshoot, o lahat ng nabanggit—ang paggawa ng pangunahing impormasyon na naa-access sa mga empleyado at customer ay nangangahulugan ng mas mahusay na trabaho at mas mataas na kasiyahan ng customer.

Karaniwan, ang mga knowledge base ay ipinapatupad at pinapanatili sa pamamagitan ng isang content management system o isang knowledge management system. Ang mga sistemang ito ay maaaring mag-iba sa sukat depende sa mga pangangailangan ng isang organisasyon, mula sa mga simpleng tagapamahala ng dokumento hanggang sa mga serbisyong mayaman sa tampok na kinabibilangan ng mga daloy ng trabaho sa pag-publish, pag-target sa madla, mga tool sa pakikipagtulungan, at higit pa. Habang ang mga sistemang ito ay maraming nalalaman sa iba't ibang aspeto, halos palaging idinisenyo ang mga ito upang ma-access sa pamamagitan ng pakikipag-ugnayan sa isang webpage o isang application. Para sa partikular na kaso ng paggamit ng mga ahente ng serbisyo sa customer (na kadalasang gumagamit ng mga knowledge base bilang isa sa kanilang mga pangunahing mapagkukunan para sa pagtulong sa mga customer), kailangan ang mahigpit na pagsasama sa software ng contact center upang paganahin ang mga ahente na hawakan ang mga query ng user nang walang putol hangga't maaari.

# Ang SeaX Knowledge Base

Ang aming knowledge base ay idinisenyo mula sa unang araw na may isang napaka-partikular na kaso ng paggamit sa isip: serbisyo sa customer na nakabatay sa boses. Samantalang karamihan, kung hindi man lahat, ng mga umiiral na sistema ng knowledge base ay umaasa sa pag-navigate sa mga hierarchical na webpage o pag-type sa mga query sa paghahanap, kailangan ng aming knowledge base na maging mas mabilis at mas nagsasarili upang ang mga kinatawan ng serbisyo sa customer ay maaaring italaga ang kanilang buong pansin sa customer habang mabilis pa ring sumasagot sa mga tanong.

Kung gusto mong dumiretso sa demo, maaari mong panoorin ang aming maikling SeaX KB demo:
<iframe width="85%" height="450px" src="https://www.youtube.com/embed/C_e_gaZHSFA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>


## Naka-embed na User Interface para sa mga Live Agent

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-intro.png" alt="Isang unang pagtingin sa interface ng SeaX Knowledge Base."/>

*Isang unang pagtingin sa interface ng SeaX Knowledge Base.*
</center>

Naturally, dahil ang aming knowledge base engine ay partikular na idinisenyo para sa mga application ng contact center, ito ay natively isinama sa platform ng SeaX upang ang mga ahente ay maaaring walang putol na ma-access ang knowledge base habang humahawak ng mga tawag at mensahe. Walang paglipat ng mga bintana, walang paghahanap sa mga tab, walang pag-navigate sa mga nested na webpage.

## Mabilis at Tumpak na Paghahanap

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-manual-search.png" alt="Mga resulta ng isang manu-manong paghahanap sa SeaX Knowledge Base."/>

*Mga resulta ng isang manu-manong paghahanap sa SeaX Knowledge Base.*
</center>

Sa pinakapangunahing antas, ang aming knowledge base ay pinapagana ng isang napakabilis at tumpak na search engine. Gumagamit kami ng mga state-of-the-art na natural language processing at information extraction techniques para makuha ang kahulugan mula sa raw text, mga halimbawang query, at mga sumusuportang URL at itugma ang mga sinasabi ng mga customer sa mga pinaka-kaugnay na entry sa knowledge base. Ang knowledge base engine ay lubos na nasusukat at maaaring suportahan ang bilyun-bilyong dokumento na walang kapansin-pansing pagbabago sa oras ng pagtugon.

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-detail.png" alt="Isang artikulo sa knowledge base sa isang pinalawak na view pagkatapos mag-click sa isang resulta ng paghahanap."/>

*Isang artikulo sa knowledge base sa isang pinalawak na view pagkatapos mag-click sa isang resulta ng paghahanap.*
</center>

Bilang karagdagan sa paghahanap ng mga pinaka-kaugnay na dokumento, ang aming search engine ay nagbibigay din ng mas pinong mga resulta sa pamamagitan ng pagkuha ng mga pangunahing keyword mula sa query ng user at pag-highlight ng mga pinaka-kaugnay na keyword at mga sipi sa bawat iminungkahing entry sa knowledge base.

## Mga Real-time na Automated na Mungkahi

Ngunit ang ipinakita namin sa ngayon ay isang manu-manong paghahanap pa rin. Ang mga live na ahente ay abala sa pakikipag-ugnayan sa mga customer, at ang manu-manong pag-type ng mga paghahanap sa knowledge base sa tuwing kailangan nila ng impormasyon ay nagsasayang ng mahalagang oras. Kaya, ang pinakamalaking value-add na kasama ng SeaX Knowledge Base ay ang real-time na automated na paghahanap para sa parehong text at voice-based na mga pakikipag-ugnayan.

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-automatic-search.png" alt="Ang SeaX Knowledge Base na nagpapakita ng mga awtomatikong mungkahi ng artikulo para sa isang papasok na mensahe ng user."/>

*Ang SeaX Knowledge Base na nagpapakita ng mga awtomatikong mungkahi ng artikulo para sa isang papasok na mensahe ng user.*
</center>

Sa tuwing may bagong mensahe ng user na dumarating, awtomatikong nag-query ang knowledge base gamit ang eksaktong mensahe ng customer. Sa real-time, habang nagsasalita ang customer, bibigyan ang mga ahente ng mga up-to-date na mungkahi ng artikulo sa knowledge base para sa kanilang sanggunian.

Gumagana rin ito para sa mga voice call! Ang aming nakaraang post sa blog na [Bigyan ang Iyong Contact Center ng Sarili Nitong Boses gamit ang SeaX Voice Intelligence](https://seasalt.ai/blog/21-seax-voice-intelligence/) ay nagpakita ng state-of-the-art na speech-to-text engine ng Seasalt.ai. Ginagamit ng platform ng SeaX ang engine na ito upang i-transcribe ang lahat ng mga voice call sa real-time. Dahil dito, maaari naming gamitin ang mga transkripsyon na ito para sa iba't ibang mga downstream na application, kabilang ang awtomatikong paghahanap sa knowledge base.

## Mga Template ng Tugon

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-response-template.png" alt="Isang ahente na tumutugon sa isang customer sa isang pag-click gamit ang isang template ng tugon na binuo ng SeaX Knowledge Base."/>

*Isang ahente na tumutugon sa isang customer sa isang pag-click gamit ang isang template ng tugon na binuo ng SeaX Knowledge Base.*
</center>

Ang mga resulta ng paghahanap sa knowledge base ay may isang karagdagang tampok upang makatulong na mapabilis ang pagtugon ng mga ahente para sa mga pakikipag-ugnayan na nakabatay sa teksto. Kapag nakahanap ang isang ahente ng isang kaugnay na artikulo sa knowledge base, maaari nilang i-click lamang ang icon na "+" sa kaliwa ng pamagat upang magpasok ng isang template ng tugon sa kanilang window ng chat. Sa backend, sa tuwing hinahanap ang knowledge base, bumubuo ito ng isang nakasulat na tugon sa tanong ng user batay sa pinaka-kaugnay na impormasyon mula sa mga iminungkahing artikulo sa knowledge base at kasama ang anumang mga sumusuportang link. Ito ay maaaring makabuluhang mapabuti ang mga oras ng pagtugon ng mga ahente dahil ang mga ahente ay hindi na nagsisimula mula sa simula. Sa halip, mayroon na silang mahalagang impormasyon mula sa artikulo sa knowledge base na ipinapakita sa kanilang window ng chat, kaya ang kailangan na lang nilang gawin ay i-edit at ipadala.


## Pamamahala ng KB

Ngayong nakita na natin kung ano ang kayang gawin ng knowledge base engine, may isang natitirang tanong tungkol sa backend: paano pinamamahalaan ang impormasyon sa knowledge base? Nagbibigay ang platform ng SeaX ng isang ganap na isinamang UI ng pamamahala ng knowledge base na maaaring ma-access ng mga administrator mula sa pahina ng mga setting.

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-management.png" alt="Ang interface ng Pamamahala ng SeaX Knowledge Base."/>

*Ang interface ng Pamamahala ng SeaX Knowledge Base.*
</center>

Sa pahinang ito, maaari kang magdagdag ng mga indibidwal na bagong entry sa knowledge base, o maaari mong i-import/i-export ang buong knowledge base gamit ang isang spreadsheet file. Sinusuportahan din ng interface ang pag-edit at pagtanggal ng mga entry sa knowledge base upang patuloy mong mapanatiling napapanahon ang iyong knowledge base.

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-edit.png" alt="Pag-edit ng isang solong artikulo sa knowledge base sa pamamagitan ng interface ng Pamamahala ng SeaX Knowledge Base."/>

*Pag-edit ng isang solong artikulo sa knowledge base sa pamamagitan ng interface ng Pamamahala ng SeaX Knowledge Base.*
</center>

## Webinar

Kung gusto mo ng mas malalim na pagtingin sa sistema ng knowledge base at kung paano ito isinasama sa platform ng SeaX, panoorin ang aming webinar sa paksa:
<iframe width="85%" height="450px" src="https://www.youtube.com/embed/FOqQ01fpKQ4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

Para sa isang one-on-one na demo, o para malaman kung paano maaaring i-customize ng Seasalt.ai ang isang solusyon para sa mga pangangailangan ng iyong negosyo, mangyaring punan ang aming [form ng pag-iskedyul ng demo](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting).`;export{a as default};

---
title: "SeaX KB: Isang Knowledge Base na Sumasagot Bago Pa Man Itanong"
metatitle: "SeaX KB: Isang Knowledge Base na Sumasagot Bago Pa Man Itanong"
date: 2022-08-15T22:01:32-07:00
modified_date: 2025-07-27T00:00:00Z
draft: false
author: Kim Dodds
image: /images/blog/22-seax-knowledge-base/thumbnail.png
description: "Sa post na ito, ipinagpapatuloy namin ang paksa ng mga integrasyon ng AI sa AI-powered Knowledge Base ng SeaX, na nag-aalok ng mga iminungkahing tugon sa real time."
weight: 1
tags: ["SeaX"]
canonicalURL: "/blog/seax-kb-a-knowledge-base/"
url: "/blog/seax-kb-a-knowledge-base/"
---

*Sa aming nakaraang blog post, [Bigyan ang Iyong Contact Center ng Sariling Boses gamit ang SeaX Voice Intelligence](https://seasalt.ai/blog/21-seax-voice-intelligence/), ipinakita namin kung paano pinapahusay ng in-house text-to-speech at speech-to-text engines ng Seasalt.ai ang iba't ibang aspeto ng platform ng SeaX. Sa post na ito, ipinagpapatuloy namin ang paksa ng mga integrasyon ng AI sa AI-powered Knowledge Base ng SeaX, na nakikinig sa mga pag-uusap at nag-aalok ng mga iminungkahing tugon sa real time.*

# Talaan ng Nilalaman
- [Ang Tradisyonal na Knowledge Base](#the-traditional-knowledge-base)
- [SeaX Knowledge Base](#seax-knowledge-base)
    - [Naka-embed na User Interface para sa Live Agents](#embedded-user-interface-for-live-agents)
    - [Mabilis at Tumpak na Paghahanap](#fast-and-accurate-search)
    - [Real-Time Automated Suggestions](#real-time-automated-suggestions)
    - [Mga Template ng Tugon](#response-templates)
    - [Pamamahala ng KB](#kb-management)
    - [Webinar](#webinar)

# Ang Tradisyonal na Knowledge Base

Sa panimula, ang isang knowledge base (KB) ay simpleng isang library ng (ideally) maayos na organisado at madaling ma-access na impormasyon na ginagamit sa self-serve na batayan online. Ang magagandang sistema ng knowledge base ay magkakaroon ng mga feature tulad ng hierarchical content organization, paghahanap, at pag-label upang matulungan ang mga user na mas madaling mahanap ang tamang impormasyon.

Ang pagpapanatili ng isang detalyadong knowledge base ay karaniwang gawain para sa karamihan ng mga kumpanya ngayon. Kung ang layunin ay tulungan ang mga empleyado na magbahagi ng panloob na impormasyon tungkol sa kanilang produkto, sagutin ang mga tanong para sa isang potensyal na kliyente, tulungan ang mga customer sa pag-troubleshoot ng mga problema, o lahat ng nabanggit - ang paggawa ng mahalagang impormasyon na madaling ma-access sa mga empleyado at customer ay nangangahulugang mas mahusay na trabaho at mas mataas na kasiyahan ng customer.

Karaniwan, ang isang knowledge base ay ipinapatupad at pinapanatili sa pamamagitan ng isang Content Management System o Knowledge Management System. Ang mga sistemang ito ay maaaring magkakaiba sa laki depende sa mga pangangailangan ng organisasyon, simula sa isang simpleng document manager hanggang sa isang feature-packed na serbisyo na kasama ang mga publishing workflow, audience targeting, collaboration tools, at marami pa. Bagama't ang mga sistemang ito ay versatile sa iba't ibang paraan, halos palagi silang nilayon na ma-access sa pamamagitan ng interaksyon sa isang web page o application. Para sa partikular na kaso ng paggamit ng isang customer service agent (na karaniwang gumagamit ng knowledge base bilang isa sa kanilang pangunahing mapagkukunan sa pagtulong sa mga customer) kinakailangan ang isang mahigpit na integrasyon sa contact center software upang payagan ang mga ahente na hawakan ang mga query ng user nang walang putol hangga't maaari.

# SeaX Knowledge Base

Ang aming knowledge base ay idinisenyo mula sa araw 1 na may napakapartikular na kaso ng paggamit sa isip: voice-based customer service. Bagama't karamihan, kung hindi lahat, ng mga umiiral na sistema ng knowledge base ay umaasa sa pag-navigate sa pamamagitan ng hierarchical webpages o pag-type ng search query, kailangan ng aming KB na maging mas mabilis at mas malaya upang payagan ang mga customer service representative na bigyan ng buong atensyon ang customer habang mabilis pa ring sumasagot sa mga tanong.

Kung gusto mong direktang makakuha ng demonstrasyon, maaari mong panoorin ang aming maikling SeaX KB demo video:
<iframe width="85%" height="450px" src="https://www.youtube.com/embed/C_e_gaZHSFA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>


## Naka-embed na User Interface para sa Live Agents

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-intro.png" alt="Unang tingin sa interface ng SeaX Knowledge Base."/>

*Unang tingin sa interface ng SeaX Knowledge Base.*
</center>

Naturalmente, dahil ang aming KB engine ay idinisenyo partikular para sa mga contact center application, mayroon itong native na integrasyon sa platform ng SeaX upang ang mga ahente ay madaling makakuha ng access sa KB habang humahawak ng mga tawag at mensahe. Walang pagpapalit ng mga bintana, walang paglipat ng mga tab, walang pag-navigate sa mga nested na web page.

## Mabilis at Tumpak na Paghahanap

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-manual-search.png" alt="Mga resulta mula sa isang manual na paghahanap sa SeaX Knowledge Base."/>

*Mga resulta mula sa isang manual na paghahanap sa SeaX Knowledge Base.*
</center>

Sa pinakapangunahing antas, ang aming knowledge base ay pinapagana ng isang napakabilis at tumpak na search engine. Gumagamit kami ng state-of-the-art na natural language processing at information extraction techniques upang makakuha ng kahulugan mula sa plain text, sample queries, at supporting URLs at itugma ang mga pahayag ng customer sa pinaka-relevant na KB entries. Ang knowledge base engine ay lubos na extensible at maaaring sumuporta sa bilyun-bilyong dokumento nang walang nakikitang pagbabago sa oras ng pagtugon.

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-detail.png" alt="KB article sa expanded view pagkatapos mag-click sa isang search result."/>

*KB article sa expanded view pagkatapos mag-click sa isang search result.*
</center>

Bilang karagdagan sa paghahanap ng pinaka-relevant na dokumento, ang aming search engine ay nagbibigay ng mas detalyadong resulta sa pamamagitan ng pagkuha ng mga mahahalagang keyword mula sa query ng user at pag-highlight ng mga pinaka-relevant na keyword at sipi sa loob ng bawat iminungkahing KB entry.

## Real-Time Automated Suggestions

Ngunit ang ipinakita namin sa ngayon ay manual na paghahanap pa rin. Ang mga live agent ay abala sa pakikipag-ugnayan sa mga customer, at mawawalan ng mahalagang oras sa pag-input ng manual na paghahanap sa KB sa bawat pagkakataon na gusto nila ng impormasyon. Dahil dito, ang pinakamalaking halaga na idinadala ng SeaX Knowledge Base ay ang real-time na awtomatikong paghahanap para sa parehong text at voice-based na pakikipag-ugnayan.

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-automatic-search.png" alt="SeaX KB na nagpapakita ng mga awtomatikong mungkahi ng artikulo para sa isang papasok na mensahe ng user."/>

*SeaX KB na nagpapakita ng mga awtomatikong mungkahi ng artikulo para sa isang papasok na mensahe ng user.*
</center>

Sa bawat pagdating ng bagong mensahe ng user, awtomatikong kukuhanin ang knowledge base gamit ang eksaktong mensahe ng customer. Sa real time, habang nakikipag-usap ang customer, bibigyan ang ahente ng mga napapanahong mungkahi ng artikulo ng KB para sa kanilang sanggunian.

At gumagana rin ito sa mga tawag na nakabatay sa boses! Ang aming huling blog post, [Bigyan ang Iyong Contact Center ng Sariling Boses gamit ang SeaX Voice Intelligence](https://seasalt.ai/blog/21-seax-voice-intelligence/), ay nagpakita ng state-of-the-art na Speech-to-Text engine ng Seasalt.ai. Ginagamit ng platform ng SeaX ang engine na iyon upang i-transcribe ang lahat ng tawag na nakabatay sa boses sa real time. Bilang resulta, magagamit namin ang mga transkripsyon na iyon para sa iba't ibang downstream application, kabilang ang awtomatikong paghahanap sa knowledge base.

## Mga Template ng Tugon

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-response-template.png" alt="Isang ahente ang tumugon sa isang customer sa isang click gamit ang nabuong response template ng SeaX KB."/>

*Isang ahente ang tumugon sa isang customer sa isang click gamit ang nabuong response template ng SeaX KB.*
</center>

Ang mga resulta ng paghahanap mula sa knowledge base ay may isang karagdagang tampok na nakakatulong na pabilisin ang mga tugon ng ahente para sa mga pakikipag-ugnayan na nakabatay sa teksto. Kapag nakahanap ang ahente ng isang nauugnay na artikulo ng KB, maaari lamang nilang i-click ang icon na `+` sa kaliwa ng pamagat upang ipasok ang isang template ng tugon sa kanilang chat window. Sa backend, sa bawat paghahanap sa KB, bumubuo ito ng isang nakasulat na tugon sa tanong ng user batay sa pinaka-nauugnay na impormasyon sa iminungkahing artikulo ng KB at kasama ang anumang sumusuportang link. Maaari nitong lubos na mapabuti ang oras ng pagtugon ng ahente, dahil hindi na nagsisimula ang ahente sa isang blangkong slate. Sa halip, mayroon na silang mahalagang impormasyon mula sa artikulo ng KB sa kanilang chat window, kaya maaari lamang nilang i-edit ito at ipadala.


## Pamamahala ng KB

Ngayon na nakita na natin kung ano ang kayang gawin ng KB engine, mayroon pang isang tanong na nananatili tungkol sa backend: paano mo pinamamahalaan ang impormasyon sa knowledge base? Ang platform ng SeaX ay may ganap na integrated na KB management UI na magagamit ng mga administrator mula sa pahina ng settings.

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-management.png" alt="Interface ng pamamahala ng SeaX KB."/>

*Interface ng pamamahala ng SeaX KB.*
</center>

Mula sa pahinang ito, maaari kang magdagdag ng isang bagong entry sa KB o maaari mong i-import/i-export ang buong knowledge base gamit ang isang spreadsheet file. Sinusuportahan din ng interface ang pag-edit at pagtanggal ng mga entry sa KB upang patuloy mong mapanatiling napapanahon ang iyong KB.

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-edit.png" alt="Pag-edit ng isang solong artikulo ng KB sa pamamagitan ng interface ng pamamahala ng SeaX KB."/>

*Pag-edit ng isang solong artikulo ng KB sa pamamagitan ng interface ng pamamahala ng SeaX KB.*
</center>

## Webinar

Kung gusto mong makita ang mas malalim na paglalakad sa sistema ng knowledge base at kung paano ito isinasama sa platform ng SeaX, mangyaring panoorin ang aming webinar tungkol sa paksa:
<iframe width="85%" height="450px" src="https://www.youtube.com/embed/FOqQ01fpKQ4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

Para sa isang one-on-one demo, o upang matuto nang higit pa tungkol sa kung paano maaaring iakma ng Seasalt.ai ang mga solusyon nito sa mga pangangailangan ng iyong negosyo, mangyaring punan ang aming [Book a Demo form](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting).

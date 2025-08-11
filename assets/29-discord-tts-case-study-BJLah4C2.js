const a=`---
title: "Text-to-Speech sa Discord: Isang Case Study ng TTS Discord Bot"
metatitle: "Text-to-Speech sa Discord: Isang Case Study ng TTS Discord B..."
date: 2022-12-27 17:04:20-08:00
modified_date: 2025-07-29 20:45:17+00:00
author: Kim Dodds
description: "Sa blog na ito, tatalakayin namin ang aming mga natuklasan kung paano ginagamit ng mga tunay na gumagamit ng Discord ang aming mga serbisyo pagkatapos suriin ang ilang buwan ng tunay na data ng text-to-speech."
weight: 1
tags:
  - SeaVoice
  - Discord
image: images/blog/29-tts-case-study/discord-tts-accessibility.jpg
url: /blog/discord-tts-case-study/
---


*Pagkatapos ilunsad ang SeaVoice, isa sa pinakamabilis at pinakatumpak na text-to-speech at speech-to-text bot sa Discord, nais naming maunawaan kung paano aktwal na nakikipag-ugnayan ang mga user sa mga serbisyo. Sa blog na ito, tatalakayin namin ang aming mga natuklasan pagkatapos suriin ang ilang buwan ng tunay na data ng user ng text-to-speech.*

# SeaVoice: Isang Text-to-Speech at Speech-to-Text Discord Bot

Ang Discord, bilang isang platform na pangunahing ginagamit para sa kombinasyon ng audio at text-based na pakikipag-chat, ay isang kamangha-manghang lugar ng pagsubok para sa voice intelligence at natural language processing services.
Ipinatupad namin ang SeaVoice Bot, na nilagyan ng mga command na text-to-speech at speech-to-text, sa Discord noong Agosto 2022.
Upang matuto nang higit pa tungkol sa kung paano gumagana ang bot, o makakita ng maikling video demo, maaari mong bisitahin ang [SeaVoice Discord Bot Wiki](https://wiki.seasalt.ai/seavoice/discord/6-community/).
Noong Nobyembre ng parehong taon, naglabas kami ng bagong bersyon na may makabuluhang pagpapabuti sa backend (tulad ng inilarawan sa aming nakaraang blog post: [SeaVoice Discord Bot: Mga Pagpapabuti sa Backend at Stability](https://seasalt.ai/blog/27-seavoice-discord-backend-improvements/)) na nagpapahintulot sa amin na mag-record ng anonymous na data kung paano nakikipag-ugnayan ang mga user sa SeaVoice bot.
Sa blog na ito, titingnan namin ang 1 buwan ng data ng user mula sa command na text-to-speech.

## Paggamit ng SeaVoice TTS

<center>
<img src="/images/blog/29-tts-case-study/discord-tts-usage.jpg" alt="Pang-araw-araw na paggamit ng text-to-speech ng SeaVoice Discord Bot sa loob ng 7 linggo."/>

*Pang-araw-araw na paggamit ng text-to-speech ng SeaVoice Discord Bot sa loob ng 7 linggo.*
</center>

Sa oras ng pagsulat, ang SeaVoice Bot ay naidagdag na sa halos 800 server!
Mula nang simulan namin ang pag-record ng data ng paggamit noong Nobyembre, natuklasan namin na ang kabuuang bilang ng mga kahilingan bawat araw ay maaaring magbago mula sa kasing liit ng 150 hanggang sa mahigit 1,300 (na may average na humigit-kumulang 560).
Humigit-kumulang 650 user ang aktwal na sumubok ng TTS command kahit isang beses.
Gayunpaman, karamihan sa mga user ay hindi patuloy na ginagamit ito nang regular pagkatapos subukan.
Sa 650 user na sumubok ng TTS command, humigit-kumulang 200 ang gumamit nito ng 20 beses o higit pa, at 100 lang ang gumamit nito ng 50 beses o higit pa.
Gayunpaman, ang mga nag-e-enjoy at umaasa sa TTS command ay ginagamit ito nang husto!
Ang aming nangungunang 5 user ay nagsumite ng mahigit 1,000 kahilingan bawat isa sa nakalipas na dalawang buwan, at ang nangungunang user ay nagsumite ng halos 2,500 kahilingan nang mag-isa!

## Mga Obserbasyon

### Bakit Gumagamit ang mga Tao ng Text-to-Speech

<center>
<img src="/images/blog/29-tts-case-study/why-mute-on-discord.jpg" alt="Mga Dahilan kung Bakit Ginagamit ng mga Gumagamit ng SeaVoice Discord Bot ang Text-to-Speech."/>

*Mga Dahilan kung Bakit Ginagamit ng mga Gumagamit ng SeaVoice Discord Bot ang Text-to-Speech.*
</center>

Kaya ang aming unang tanong pagkatapos makita ang data ng paggamit ay: **bakit ginagamit ng mga madalas na gumagamit ang TTS sa unang lugar?**
Sinuri namin ang database upang makahanap ng ilang paliwanag.
Ang sumusunod ay mga tunay na command ng TTS mula sa ilan sa aming mga user.

__*Bakit hindi ka nagsasalita?*__

    - hindi rin ako makapagsalita dahil kumakain ako
    - Sasabihin ko talaga, pero nasa trabaho ako ngayon.
    - kung magsasalita ako, gigisingin ko ang aking pamilya
    - paumanhin, hindi masyadong magsasalita. masakit talaga ang lalamunan.
    - makakapagsalita ako pero nandito ang nanay ko
    - masyado akong tamad magsalita ngayon
    - hindi ako makapagsalita dahil may sakit ako pero gusto ko pa ring sumali :)
    - hindi ganap na mute, kailangan lang ng pagsisikap para makapagsalita. Minsan, malaking pagsisikap
    - paumanhin, naka-mute ako, kausap ng lola ko sa telepono at maingay
    - Dahil sira ang mikropono ko

Pagkatapos makita ang mga paliwanag na ito, maaari nating buod ito sa ilang pangunahing dahilan:
- may pisikal na hadlang (sirang mikropono, hirap magsalita, sakit, atbp.),
- abala sila sa paggawa ng iba (kumakain, nasa trabaho, atbp.),
- masyadong maingay ang kanilang kapaligiran o kailangan nilang maging tahimik, o
- dahil ito ay maginhawa at gusto nilang gamitin ito.

Ngunit anuman ang eksaktong dahilan kung bakit nila ginagamit ang serbisyo ng TTS, maraming user ang nagpahayag ng kagalakan na nakapag-partisipate sila sa mga voice channel na pag-uusap kung hindi man ay hindi nila magagawa.
Naniniwala kami na ginagawang mas accessible ng serbisyo ng TTS ang mga voice channel ng Discord, at iyon ang pangunahing dahilan kung bakit patuloy na ginagamit ng aming mga regular na user ang serbisyo.

### Paggamit ng Wika

Isang bagay na kapansin-pansin sa akin habang sinusuri ang mga pag-uusap ay ang maraming user ang sumubok na gamitin ang text-to-speech command sa iba't ibang wika.
Habang ang ilang user ay gusto lang makita kung gagana ito o naisip na nakakatawa ang pagbigkas, ang iba naman ay patuloy na gumamit ng TTS sa mga wikang hindi Ingles sa loob ng mahabang panahon!

<center>
<img src="/images/blog/29-tts-case-study/discord-spanish-tts-test.png" alt="Sinusubukan ng isang user ang pagbigkas ng Espanyol ng English SeaVoice TTS model."/>

*Sinusubukan ng isang user ang pagbigkas ng Espanyol ng English SeaVoice TTS model.*
</center>

Ito ay partikular na nangyari sa mga nagsasalita ng Espanyol kahit na (tulad ng nabanggit ng user sa itaas) ang pagganap ng TTS ay hindi maganda para sa Espanyol, dahil ang modelo ay sinanay lamang sa Ingles.
Sinimulan kong isulat ang bawat pagkakataon na nakatagpo ako ng isang user na sumusubok na gamitin ang TTS command sa isang wika maliban sa Ingles.

<center>
<img src="/images/blog/29-tts-case-study/discord-non-english-tts.jpg" alt="Bilang ng mga pagtatangka na magpadala ng mga kahilingan na hindi Ingles sa TTS."/>

*Bilang ng mga pagtatangka na magpadala ng mga kahilingan na hindi Ingles sa TTS.*
</center>

Ipinapakita ng talahanayan sa itaas ang bilang ng bawat pag-uusap na nakita ko na mayroong kahit isang pagkakataon ng isang taong gumagamit ng kaukulang wika sa command ng TTS.
Malinaw, ang Espanyol ang pinakakaraniwan, at kasama ng katotohanan na maraming user ang patuloy na gumamit ng function ng TTS sa Espanyol kahit na mahina ang pagganap, nagtataka ako kung walang viable na alternatibo na umiiral na sa Discord para sa Spanish TTS.
Sa alinmang kaso, sinusubukan ng mga tao na gamitin ang aming serbisyo ng TTS para sa ibang mga wika, kaya maaari naming subaybayan kung aling mga wika ang pinakamataas ang demand at gamitin ang data na ito upang ipaalam ang aming pagsasanay ng mga bagong modelo.

### Komentaryo tungkol sa Bot

Ang isa pang kawili-wiling paksa na natagpuan sa mga log ay ang komentaryo tungkol sa bot mismo.
Sa kabutihang palad, nakita namin ang ilang napakapositibong komento tungkol sa bot at sa pagganap nito.

<center>
<img src="/images/blog/29-tts-case-study/discord-tts-inclusive-accessibility-user-comment.png" alt="Nagkomento ang isang user na ginagawa silang mas kasama ng bot."/>

*Nagkomento ang isang user na ginagawa silang mas kasama ng bot.*
</center>

Ang pinaka-nakakaantig na komento ay mula sa mga taong nakaramdam ng pagbubukod mula sa mga voice channel, ngunit ngayon ay nakakapag-partisipate na salamat sa idinagdag na accessibility na ibinibigay ng bot.

Nakakita rin kami ng ilang nakabubuo na feedback.

<center>
<img src="/images/blog/29-tts-case-study/discord-tts-speed.png" alt="Nagkomento ang isang user na ang bilis ng TTS ay isang isyu."/>

*Nagkomento ang isang user na ang bilis ng TTS ay isang isyu.*
</center>

Binanggit ng isang user na, dahil kailangan munang i-type ng mga user ang buong pangungusap at pagkatapos ay ipadala ito, mas mabagal ang TTS kaysa sa normal na pagsasalita, kaya minsan ang kanilang TTS utterance ay binibigkas nang medyo huli sa pag-uusap.
Tulad ng nabanggit sa nakaraang seksyon, nakita rin namin ang mga kahilingan para sa karagdagang suporta sa wika pati na rin ang isang user na umaasa na makapag-translate sa pagitan ng mga wika gamit ang bot.
Ang pagsubaybay sa ganitong uri ng feedback ay makakatulong sa amin na magplano at mapabuti ang mga tampok sa hinaharap.

### Bagong bagay

Pagkatapos suriin ang buong koleksyon ng mga command ng TTS, masasabi kong humigit-kumulang dalawang-katlo ng mga utterance ay ginagamit sa pangkalahatang pag-uusap sa mga kaibigan at iba pang tao sa server.
Karamihan sa mga tao ay naglalaro at nakikipag-chat lang sa kanilang mga kaibigan, at ang mga user na ito ay kadalasang ang mga regular na gumagamit ng serbisyo ng TTS.
Sa kabilang banda, ang natitirang isang-katlo ng mga utterance ay nasa kategorya ng “nagpapatawa lang”.
Kapag binigyan ka ng ganap na kapangyarihan na ipagsalita ang isang boses ng anumang gusto mo, naniniwala ako na likas na sa tao na piliin ang pinakakatawa-tawa o pinakamalalaswang bagay na maiisip mo para lang sa tawanan.
Naaalala ko na nakaupo sa computer lab ng elementarya at naaliw nang maraming oras ni Microsoft Sam (napaka-high tech noon), tinitingnan kung kaya naming ipagsalita ito ng mga bagay tulad ng “tae” o “puwet”.
Well, sa palagay ko ang mga batang tulad ko ay lumaki, nagkaroon ng mas mayamang bokabularyo, at natagpuan ang parehong libangan sa aming serbisyo ng TTS sa Discord.

<center>
<img src="/images/blog/29-tts-case-study/discord-tts-stress-test.png" alt="Mga halimbawa ng kakaibang kahilingan ng TTS na ipinadala ng mga user."/>

*Mga halimbawa ng kakaibang kahilingan ng TTS na ipinadala ng mga user.*
</center>

Minsan sinusubukan lang ng mga user na sirain ang bot sa pamamagitan ng pag-type ng mga bagay tulad ng: labis na mahabang string, mga espesyal na character, emojis, URL, atbp.
Ito ay isang klasikong halimbawa ng mga taong sumusubok sa mga limitasyon ng software, at talagang nakakatulong sa amin na tiyakin na ang aming mga serbisyo ay matatag at kayang hawakan ang anumang input na ibibigay ng mga user dito.

Sa ibang pagkakataon, nakakahanap ng libangan ang mga user sa pamamagitan ng pagpapagsalita sa serbisyo ng TTS ng pinakamalalaswa at nakakasakit na bagay na maiisip nila.
Sa mga log ng TTS, sa tingin ko nakita ko ang bawat mura na alam ko (at marahil ang ilan na hindi ko pa naririnig), mga panlilibak sa lahi, at tahasang nilalaman ng sekswal.

## Ang Isyu ng Etika

Sa kasamaang palad, maraming paraan kung paano maaaring gamitin ang isang text-to-speech application nang hindi kanais-nais: tulad ng pagtataguyod ng hate speech o cyberbullying.
Bukod pa rito, habang ang mga audio clip ay synthesized mula sa isang modelo, ang data upang sanayin ang modelo ay nagmumula sa isang tunay na tao at ang output mula sa isang mahusay na modelo ay maaaring tunog halos hindi makilala mula sa orihinal.

Kaya ang mga puntong ito, kasama ang kung paano namin nakita ang mga tunay na user na gumagamit (o umaabuso) sa aming serbisyo ng TTS, ay nagdudulot ng ilang napakahalagang tanong para sa Seasalt.ai bilang isang kumpanya at ang SeaVoice Discord Bot:

- *Bilang isang kumpanya, gusto ba naming gamitin ang aming produkto sa mga potensyal na nakakasakit o nakakapinsalang paraan?*
- *Anong mga karapatan ang mayroon ang mga voice actor sa kung paano ginagamit ang kanilang boses sa mga text-to-speech application?*
- *Mayroon ba kaming karapatan o responsibilidad na i-censor kung paano ginagamit ang aming serbisyo?*

Ang mga tanong na ito ay hindi masagot, o kahit na ganap na masuri, sa isang blog post lamang.
Gayunpaman, nararamdaman ng kumpanya ang obligasyon na patuloy na isaalang-alang ang mga isyung ito habang sumusulong kami sa aming proyek sa Discord at patuloy na nakikipagtulungan sa aming mga voice actor.

Salamat sa iyong interes sa aming Discord Bot at mga proyek ng Voice Intelligence! Maaari kang matuto nang higit pa tungkol sa aming produkto ng STT sa aming [Speech-to-Text Homepage](https://suite.seasalt.ai/tts). Para sa isang one-on-one demo ng alinman sa aming mga produkto ng Voice Intelligence, punan ang [Book a Demo Form](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting).

Sa panig ng Discord, maaari kang matuto nang higit pa tungkol sa aming bot at idagdag ito sa iyong server mula sa [SeaVoice Discord Bot Wiki](https://wiki.seasalt.ai/seavoice/discord/6-community/). Huwag mag-atubiling sumali sa aming [Opisyal na SeaVoice Discord Server](https://discord.gg/dfAYfwBQ).

<center>
<iframe src="https://discordapp.com/widget?id=919037515514654721&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
</center>
`;export{a as default};

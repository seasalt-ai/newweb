const a=`---
title: "Bigyan ang Iyong Contact Center ng Sariling Boses gamit ang SeaX Voice Intelligence"
metatitle: "Hayaan ang Iyong Contact Center na Magsalita gamit ang SeaX Voice Intelligence"
date: 2022-08-02 17:24:00-07:00
modified_date: 2025-07-29 20:45:17+00:00
draft: false
author: Kim Dodds, Cody Kim, Xuchen Yao, Guoguo Chen
description: "Sa blog na ito, ipapakita namin kung paano mapapahusay ng in-house text-to-speech at speech-to-text engine ng Seasalt.ai ang iba't ibang aspeto ng platform ng SeaX."
weight: 1
tags:
  - SeaX
image: /images/blog/21-seax-voice-intelligence/thumbnail.png
canonicalURL: /blog/seax-voice-intelligence/
url: /blog/seax-voice-intelligence/
---

*Sa ngayon sa aming [serye ng blog ng SeaX](https://seasalt.ai/tags/seax/), binigyan ka namin ng malawak na pangkalahatang-ideya ng flagship product ng Seasalt.ai: SeaX. Tinalakay din namin ang dalawang pangunahing tampok na nagtatakda ng SeaX bukod sa isang tradisyonal na call center: una, na ang SeaX ay omnichannel, na nangangahulugang mas madali kang makikipag-ugnayan sa mga customer sa anumang channel, at pangalawa, na ang platform ay isang distributed contact center, na nagbibigay-daan sa iyo na walang putol na mag-ruta ng mga mensahe at tawag mula sa mga customer sa buong mundo sa iyong mga distributed agent sa iba't ibang lokalidad.*

*Ngayon na nasakop na namin ang mga pangunahing kaalaman ng platform ng SeaX, lilipat kami sa mga advanced na tampok ng AI at automation na nagtatakda ng SeaX bukod sa iba pang distributed omnichannel contact center. Sa blog na ito, ipapakita namin kung paano mapapahusay ng in-house text-to-speech at speech-to-text engine ng Seasalt.ai ang iba't ibang aspeto ng platform ng SeaX.*

# Talaan ng Nilalaman
- [Panimula sa Voice Intelligence](#into-to-voice-intelligence)
- [Ano ang Nagtatakda ng Seasalt.ai Bukod](#what-sets-seasaltai-apart)
    - [Speech-to-Text](#speech-to-text)
    - [Text-to-Speech](#text-to-speech)
- [TTS at STT sa SeaX](#tts-and-stt-in-seax)
    - [Voice IVR](#voice-ivr)
    - [Mensahe na Hindi Available](#unavailable-message)
    - [Live Transcription](#live-transcription)
    - [At Higit Pa...](#and-more)

# Panimula sa Voice Intelligence

Ang Voice Intelligence ay ang paggamit ng Artificial Intelligence upang suriin at kumuha ng mga insight mula sa data na nakabatay sa boses. Habang ang nakaraang dekada ay nakakita ng kapansin-pansing pag-unlad sa mga teknolohiya ng boses, ang kanilang paggamit sa mga setting ng enterprise ay medyo limitado pa rin. Ang mga kumpanya ay patuloy na nag-iipon ng terabytes ng data ng boses, ngunit sa karamihan ng mga kaso, hindi ito ginagamit sa buong potensyal nito.

Ang isang dahilan para dito ay ang data ng boses ay mas mahirap iproseso kaysa sa iba pang mga anyo ng data, tulad ng pangunahing istatistika o kahit na simpleng data ng teksto. Ang data ng pagsasalita ay natatangi sa maraming iba't ibang paraan:
1. Ito ay nakasalalay sa wika, na may mga diyalekto at accent, kaya mahirap makuha ang 100% ng impormasyon
2. Ang kalidad nito ay nag-iiba ayon sa mga channel (telephony vs. VoIP, mono vs. stereo), sampling rate (8KHz vs. 16KHz), representational accuracy (8bit, 16 bit, 32bit) at mga tunog ng kapaligiran tulad ng ingay sa background
3. Mas mahirap itong bigyang-kahulugan: mula sa mga emosyon ng pagsasalita hanggang sa pagkakakilanlan ng nagsasalita hanggang sa semantika ng kahulugan

Gayunpaman, kapag tinugunan nang maayos gamit ang tamang mga tool, ang voice intelligence ay maaaring magbigay ng malaking benepisyo sa mga kumpanyang gumagamit nito. Bukod sa iba pa, ang kakayahang maayos na pamahalaan ang data ng boses ay nagbubukas ng kakayahang gumamit ng personalized na speech-to-text transcription, na maaaring gawing searchable, indexable at insightful ang mga pag-uusap, at nagbibigay-daan para sa karagdagang NLP processing. Habang mas maraming data ang nakolekta, posible rin ang mga pagpapabuti sa mga serbisyong ito, tulad ng: pagtaas ng katumpakan ng transcription, pagtaas ng saklaw ng mga kaso ng paggamit, at pagbibigay ng nako-customize na mga modelo ng pagsasalita at wika upang umangkop sa mga bagong wika at diyalekto.

# Ano ang Nagtatakda ng Seasalt.ai Bukod

Nagbibigay ang Seasalt.ai ng mga teknolohiya at produkto ng Cloud Communication AI sa mga customer ng enterprise.
Nakabuo kami ng in-house na teknolohiya ng pagsasalita at wika para sa mga text message
at voice call sa mga contact center ng enterprise. Sinusuportahan ng aming natural language engine ang malawak na hanay
ng parehong high-resource at low-resource na wika: Burmese, Chinese, English, Filipino,
German, Indonesian, Khmer, Lao, Malay, Spanish, Tamil, Thai, Vietnamese, atbp.
Ang Seasalt.ai ay pinondohan ng venture at pinamamahalaan ng isang grupo ng mga nangungunang eksperto sa mundo sa deep speech
recognition, neural speech synthesis, at natural language dialogues.

Panoorin ang aming speech-to-text demo video:
<iframe width="85%" height="450px" src="https://www.youtube.com/embed/Log8usX8ViE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

## Speech-to-Text

<center>
<img src="/images/blog/21-seax-voice-intelligence/STT.png" alt="Speech-to-text graphic."/>
</center>

Ang aming speech-to-text engine ay tumatanggap ng audio ng pagsasalita at gumagawa ng mga transkripsyon sa real time. Simula sa audio, kinukuha namin ang mga phonetic feature, kino-convert ang mga feature na ito sa phonemes, at pagkatapos ay ime-map ang mga phonemes na ito sa orthography ng target na wika. Ang aming kasalukuyang sistema ay may kakayahang mag-transcribe ng ilang wika, kabilang ang English at Chinese, na may mas maraming wika na patuloy na idinadagdag.

Panoorin ang aming Speech-to-Text customization video upang makita kung paano maaaring i-customize ang STT engine ng Seasalt para sa anumang domain:
<iframe width="85%" height="450px" src="https://www.youtube.com/embed/1YEU6mexzWQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

## Text-to-Speech

<center>
<img src="/images/blog/21-seax-voice-intelligence/TTS.png" alt="Text-to-speech graphic."/>
</center>

Ang Text-to-Speech ay ang proses ng pag-synthesize ng makatotohanang pagsasalita ng tao na kumpleto sa natural na intonation at cadence mula sa teksto lamang. Ang aming modelo ay kumukuha ng regular na teksto, isinasalin ang tekstong ito sa phonemes at pagkatapos ay kino-convert ang phonemes sa audio habang hinuhulaan ang tamang pitch, duration, at volume sa bawat timestep para sa pinakamakatotohanang karanasan sa TTS na posible. Kung ang huling resulta ay hindi perpekto, nagbibigay kami ng kakayahang i-tune ang synthesized audio kabilang ang pagbigkas ng salita, paghinto, at diin.

Panoorin ang aming Text-to-Speech customization demo video upang makita kung paano maaaring i-customize ang output ng TTS engine ng Seasalt upang magbigay ng makatotohanang synthesized speech:

<iframe width="85%" height="450px" src="https://www.youtube.com/embed/GJCOhTtImp8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

Maaari mo ring tingnan ang [pahina ng TTS](https://suite.seasalt.ai/tts) sa aming website upang makinig sa mga halimbawa ng ilan sa aming mga synthesized voice, kabilang sina Tom Hanks, David Attenborough, at Reese Witherspoon.

# TTS at STT sa SeaX

## Voice IVR

<center>
<img src="/images/blog/21-seax-voice-intelligence/flow.png" alt="Voice IVR flow gamit ang speech-to-text engine ng Seasalt.ai para sa real-time transcription at call routing."/>

*Voice IVR flow gamit ang speech-to-text engine ng Seasalt.ai para sa real-time transcription at call routing.*
</center>

Ang voice intelligence ay maaaring magsimulang tumulong bago pa man lumabas ang mga tawag sa platform ng SeaX sa pamamagitan ng pagtiyak na ang mga tawag ay nai-ruta sa tamang lugar at pagkolekta ng mahalagang impormasyon bago ibigay ang tawag sa isang ahente. Ginagamit ng SeaX ang Twilio Studio upang i-customize ang mga daloy ng pag-ruta ng tawag at mensahe. Ngunit maaari rin naming isama ang aming speech-to-text engine sa daloy ng IVR upang payagan ang customer na gumamit ng natural na wika upang i-ruta ang kanilang tawag (sa halip na ang tradisyonal na karanasan na “pindutin ang 1 para sa…”). Bukod pa rito, kung interesado ang iyong kumpanya na gumamit ng chatbot upang makipag-ugnayan sa mga customer, maaari naming gawin itong isang hakbang pa sa pamamagitan ng pagbibigay sa iyong chatbot ng boses upang makipag-usap sa mga customer sa telepono gamit ang aming text-to-speech engine.

## Mensahe na Hindi Available

<center>
<img src="/images/blog/21-seax-voice-intelligence/unavailable-message.png" alt="Konfigurasyon ng mensahe na hindi available ng SeaX gamit ang text-to-speech."/>

*Konfigurasyon ng mensahe na hindi available ng SeaX gamit ang text-to-speech.*
</center>

Ang aming text-to-speech technology ay nagbibigay-daan din para sa lubos na nako-customize na mga voice message. Halimbawa, ang mga ito ay maaaring ma-trigger kapag tumawag ang isang customer pagkatapos ng normal na oras ng negosyo, o kung ang customer ay kailangang i-hold habang naghihintay sila ng available na ahente.

## Live Transcription

<center>
<img src="/images/blog/21-seax-voice-intelligence/live-transcription.jpg" alt="Live call transcription na may analytics na ipinapakita sa ahente sa SeaX."/>

*Live call transcription na may analytics na ipinapakita sa ahente sa SeaX.*
</center>

Kapag ang isang customer ay nasa isang tawag sa isang ahente, ang aming speech-to-text engine ay nagbibigay ng tumpak na real-time na transkripsyon ng pag-uusap para sa sanggunian ng ahente. Nagbibigay-daan ito sa ahente na sumangguni sa mga nakaraang punto sa pag-uusap at/o doblehin ang kanilang pag-unawa sa sinabi ng customer. Bukod pa rito, ang mga transkripsyon na ito ay napakalaking kapaki-pakinabang para sa mga downstream na application tulad ng topic extraction, action extraction, summarization, meeting analytics, atbp.

## At Higit Pa...

Ang nasa itaas ay ilan lamang sa mga paraan kung paano isinasama ng SeaX ang advanced na voice intelligence upang bawasan ang oras ng paghihintay, pagbutihin ang pagganap ng ahente, at bigyan ang mga customer at ahente ng isang pangkalahatang walang putol na karanasan. Upang matuto nang higit pa tungkol sa mga advanced na tampok na kasama ng platform ng SeaX, manatiling nakatutok para sa aming mga susunod na blog post, na kinabibilangan ng AI knowledge base, case management, at bulk SMS. Upang makakuha ng personal na demo at talakayin kung paano matutugunan ng platform ng SeaX ang iyong mga partikular na pangangailangan sa negosyo, punan ang aming [form ng Book a Demo](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting).
`;export{a as default};

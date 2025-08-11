const a=`---
title: "Mula sa Demo tungo sa Tagumpay: Higit pa sa Hardware (5/5)"
metatitle: "Mula sa Demo tungo sa Tagumpay (5/5): Higit pa sa Hardware"
date: 2021-09-15 17:24:32-07:00
modified_date: 2025-07-28T16:56:53Z
draft: false
author: Cody Kim
description: "Sa huling bahagi ng serye ng blog na ito, sundan ang paglalakbay ng Seasalt.ai sa paglikha ng SeaMeet, ang aming mga solusyon sa modernong pagpupulong na nakikipagtulungan."
weight: 1
tags:
  - SeaMeet
image: images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/SeaMeet animation.gif
canonicalURL: /blog/seameet-voice-hardware/
url: /blog/seameet-voice-hardware/
---

*Sa buong serye ng blog na ito, sundan ang paglalakbay ng Seasalt.ai sa paglikha ng isang mahusay na karanasan sa Modern Meetings, simula sa mga hamak na simula nito, hanggang sa pag-optimize ng aming serbisyo sa iba't ibang hardware at modelo, hanggang sa pagsasama ng mga makabagong sistema ng NLP at sa wakas ay nagtatapos sa buong pagsasakatuparan ng SeaMeet, ang aming mga solusyon sa modernong pagpupulong na nakikipagtulungan.*

## Higit pa sa Modernong Pagpupulong

Dito sa Seasalt.ai, hinangaan namin ang kasalukuyang mga kakayahan na ipinakita mula sa demo ng Build 2019 ng produktong ito, ngunit mas interesado kami na makita kung ano ang maaaring maging produkto na ito, kung paano dalhin ang transkripsyon ng pag-uusap na lampas sa panggagaya. Ngunit bago mo matalo ang kumpetisyon, kailangan mo munang lubos na maunawaan ang laro na iyong nilalaro. At ganoon ipinanganak ang SeaMeet. Sa simula nito, tiningnan namin ang Azure bilang isang modelo upang maunawaan ang mga pundasyon ng kung ano ang bumubuo ng isang solidong serbisyo ng transkripsyon at ginamit ang mga serbisyo ng pagsasalita ng Azure bilang aming backend upang magamit ang itinatag na teknolohiyang ito.

Tulad ng anumang bagong produkto, agad na lumitaw ang mga hamon. Sabik na ilunsad ang aming produkto, pinili naming gamitin ang Microsoft Kinect DK microphone array, na ipinagmamalaki bilang hardware-counterpart sa mga serbisyo ng pagsasalita at diumano'y nakatutok upang makuha ang pinakamainam na performance mula sa mga modelo ng awtomatikong pagkilala ng pagsasalita ng Azure. Bagama't isang hindi maikakaila na mahusay na binuo, mahusay na dinisenyong device, ito ay may kumpletong aluminum housing, isang wide angle lens, isang depth camera, at isang 7-microphone array. Mayroon din itong malaking presyo na halos $400. Simula noong Abril 2021, ang Kinect DK ay nagkaroon ng seryosong isyu sa understock. Hindi pa rin ito available hanggang sa pagsulat nito ngayon sa Setyembre 2021. Ito ay lalong nagpatibay na ang Kinect ay hindi ang device para sa amin.

<center>
<img src="/images/blog/7-seameet-voice-intelligence-meeting-transcription-hardware/kinect_store_page.png"/>

*Ang Azure Kinect DK ay hindi na available mula noong 2021/4 nang mailathala ang artikulong ito (2021/9)*
</center>

Ang microphone array ay ang unang bahagi sa pipeline ng transkripsyon ng pag-uusap. Bilang mga tagapagbigay ng serbisyo ng transkripsyon, kailangan nating makapagbigay ng hardware nang sustainable at maaasahan.

Ang aming paglalakbay upang mahanap ang perpektong microphone array ay nagdala sa amin sa dalawang opsyon: ang [Respeaker Array v2.0](https://www.seeedstudio.com/ReSpeaker-Mic-Array-v2-0.html) at ang [Respeaker Core v2.0](https://www.seeedstudio.com/ReSpeaker-Core-v2-0.html). Ang parehong mga device na ito ay circular arrays, apat at anim na mikropono ayon sa pagkakabanggit, na isang mahalagang tampok upang makagawa ng 360 degree source localization at payagan kaming madaling isama ang mga bagong device na ito sa aming umiiral na sistema. Ang tunay na kagandahan ng mga device na ito ay ang mga ito ay may on-board signal processing algorithms kabilang ang denoising, echo cancellation, at beamforming na perpektong nakatutok sa mga dimensyon ng mic.

<center>
<img src="/images/blog/7-seameet-voice-intelligence-meeting-transcription-hardware/respeaker_array.png" alt="Respeaker Array v2.0 na nagpapakita ng VAD at source localization"/>

*Respeaker Array v2.0 na nagpapakita ng VAD at source localization*
</center>

<center>
<img src="/images/blog/7-seameet-voice-intelligence-meeting-transcription-hardware/array_demo.jpg" alt="Live meeting demo gamit ang Respeaker Array v2.0"/>

*Live meeting demo gamit ang Respeaker Array v2.0*
</center>

Para sa apat na mikropono Array v2.0, na ganap na pinapagana ng isang USB port, nangangahulugan ito na ang computer ng gumagamit ay kailangan lamang tumuon sa pag-stream ng audio sa server. Ito ay nagpapagaan ng signal processing sa microphone array.


<center>
<img src="/images/blog/7-seameet-voice-intelligence-meeting-transcription-hardware/core_demo.png" alt="Respeaker Core v2.0 na may demo"/>

*Respeaker Core v2.0 na may demo*
</center>

Mas nakakumbinsi pa ang Core v2.0 na nilagyan ng ARM processor at 1GB RAM. May kakayahang magpatakbo ng isang buong distribusyon ng Linux at may higit sa sapat na processing power upang patakbuhin ang aming client script, hindi lamang namin naibsan ang processing mula sa computer ng gumagamit gamit ang device na ito, ganap din naming inalis ang pangangailangan na magkaroon ng computer na konektado sa mikropono. Dahil ang mga microphone array na ngayon ang gumagawa ng mabigat na processing, binawasan namin ang mga kinakailangan sa hardware na kailangan upang patakbuhin ang aming produkto at samakatuwid ay epektibong nadagdagan ang aming audience na maaaring makinabang mula sa SeaMeet.

<center>
<img src="/images/blog/7-seameet-voice-intelligence-meeting-transcription-hardware/respeaker_core.png" alt="Halimbawa ng Core v2.0 ng standalone microphone placement"/>

*Halimbawa ng Core v2.0 ng standalone microphone placement*
</center>

Ang isa pang natatanging katangian ng mga microphone array na ito ay ang kawalan ng housing. Parehong ipinapadala bilang bare PCB's na may mga mic, chips at port na lahat ay nakalantad. Bagama't marami ang makakakita nito bilang isang abala, nakikita namin ang isang pagkakataon upang lumikha ng isang tunay na kakaibang device na walang alinlangan na sa Seasalt.

    Sa mga device na ito, tinatapos namin ang aming prototype ng SeaMeet, ang aming bagong, state-of-the-art na serbisyo ng transkripsyon ng pulong. At sa pamamagitan nito, tinatapos namin ang aming limang bahaging serye, simula nang ang SeaMeet ay wala pa kundi isang binhi na inspirasyon ng isang demo ng Microsoft, at nagtatapos sa isang ganap na independiyenteng produkto. Nasa maagang yugto pa rin, ang SeaMeet ay may kapana-panabik na paglalakbay sa hinaharap habang patuloy naming pinipino ang aming diarization system, meeting sense, at mga modelo ng wika. Ang team sa Seasalt.ai ay sabik na ipagpatuloy ang pagbabago sa paraan ng pagpapatakbo ng negosyo sa mundo.
`;export{a as default};

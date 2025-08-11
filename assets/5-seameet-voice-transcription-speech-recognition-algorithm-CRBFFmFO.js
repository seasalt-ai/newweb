const a=`---
title: "Mula Demo Hanggang Tagumpay: Lampas sa Speech Algorithms ng Modern Meetings (3/5)"
metatitle: "Demo Hanggang Tagumpay (3/5): Lampas sa Speech Algorithms"
date: 2021-07-30 17:43:38-07:00
modified_date: 2025-07-29 00:00:00+00:00
draft: false
author: Cody Kim, Shayne Mei
description: "Sa ikatlong bahagi ng seryeng ito, sundan ang paglalakbay ng Seasalt.ai sa paglikha ng SeaMeet, ang aming solusyon para sa modernong kolaboratibong pagpupulong."
weight: 1
tags:
  - SeaMeet
image: images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/SeaMeet animation.gif
canonicalURL: /blog/seameet-voice-speech-recognition/
url: /blog/seameet-voice-speech-recognition/
---

*Sa buong seryeng ito, sundan ang paglalakbay ng Seasalt.ai sa paglikha ng isang kumpletong Modern Meetings Experience, mula sa mga simpleng simula, pag-optimize sa iba't ibang hardware at modelo, hanggang sa integrasyon ng makabagong NLP systems at sa huli ay ang ganap na pagbuo ng SeaMeet, ang aming kolaboratibong solusyon para sa modernong pagpupulong.*

## Lampas sa Algorithm
Ang Modern Meetings ay isang kamangha-manghang demo, ngunit nanatili itong demo. Malayo pa ang lalakbayin bago ito maging handa para sa produksyon. Una naming [matagumpay na naipatupad](https://seasalt.ai/blog/5-seameet-voice-transcription-speech-recognition-algorithm/) ang demo gamit ang Microsoft Azure stack. Ngunit nang matukoy ang mga kahinaan ng software, nagpasya kaming palitan ang mga algorithm ng sarili namin at gawing mas magaan, mas maayos, at mas flexible ang buong karanasan.
May apat na pangunahing bahagi ang Modern Meetings:

1. Signal processing sa microphone array, lalo na ang beam forming
2. Speaker diarization at identification
3. Customized speech recognition
4. Mas mahusay na UI

Susunod, idedetalye namin ang lahat ng mahahalagang bahagi.

<center>
<img src="/images/blog/5-seameet-voice-intelligence-meeting-transcription-speech-recognition-algorithm-of-modern-meeting/tech-stack.png" alt="SeaMeet architect with 4 major components"/>

*Inangkop namin ang lahat ng 4 na pangunahing bahagi ng Modern Meetings gamit ang sarili naming tech stack: 1. Signal processing sa microphone array; 2. Speaker diarization at identification; 3. Customized speech recognition; 4. Modern web UI.*
</center>

### Signal Processing sa Microphone Array
Ang microphone array, kumpara sa isang single na malapitang mikropono, ay kumukuha ng boses mula sa buong 360-degree na saklaw, hanggang 5 metro ang layo. Kaya't isang microphone array ay kayang mangolekta ng boses sa isang medium-sized na conference room na 10x10 metro. Dahil lahat ng mikropono ay nakapangkat sa isang device, nababawasan nang malaki ang mga kable sa silid at napapadali ang setup at maintenance.
Ang layunin ng paggamit ng microphone array ay bigyan ang aming mga modelo ng pinakamagandang kalidad ng data. Kaya bago dumaan sa automatic speech recognition, nagsasagawa kami ng ilang signal processing algorithms. Ang pangunahing bahagi ng aming preprocessing pipeline ay ang algorithm na tinatawag na beamforming. Dahil gumagamit kami ng bilog, multi-microphone arrays, nagagamit namin ang maliit na pagkakaiba ng oras na inaabot ng tunog bago marating ang iba't ibang mikropono. Ang ginagawa ng beamforming ay tukuyin ang pangunahing katangian ng signal — ang pinakamahusay na beam — at palakasin ang mga frequency na ito habang pinapahina ang hindi kanais-nais na tunog. Ang epekto ay denoising at dereverberation habang ang pangunahing signal, sa aming kaso ay speech, ay nagiging mas malakas at mas malinaw.

Para sa optimal na performance ng maraming beamforming algorithms, kailangan malaman ang eksaktong posisyon ng source (speaker) kaugnay ng mikropono. Ngunit sa totoong aplikasyon, imposible ito, kaya't una naming kinakalculate ang tinatawag na far field weights sa pamamagitan ng pagtukoy ng direksyon ng source. Ang unang hakbang na ito, na tinatawag na source localization o mas partikular na Direction of Arrival (DOA), ay napatunayang mahirap. Ang pangunahing isyu ay smoothing. Binibigyan kami ng algorithm ng halos tamang resulta ngunit ang natukoy na source ay palaging nagbabago ng 30 degrees sa magkabilang panig ng totoong direksyon na nakakaapekto sa beamforming. Ang solusyon namin ay hayaan lang ang source localization algorithm na gamitin ang range ng frequencies na nag-eencode ng karamihan sa boses ng tao. Pinagsama namin ito sa smoothing technique kung saan nagtatago kami ng "history" ng DOA results para i-average. Sa mas maaasahang DOA results, maaari naming kalkulahin ang far field weights at tukuyin ang pinakamahusay na beam.

Sa serye ng algorithms na isinagawa sa Kinect DK: beamforming, denoising, dereverberation, source localization, nagawa naming makagawa ng malinaw at pinahusay na boses ng tao sa real time habang natutukoy din ang tinatayang direksyon ng speaker. Malaking tulong ito sa speaker identification sa susunod na hakbang.

### Speaker Diarization at Identification

Ang susunod na bahagi ng state-of-the-art meeting transcription system ay ang automatic speaker recognition o identification. Tulad ng nabanggit sa huling bahagi ng seryeng ito, ang pagbabasa ng magulong conversational text na walang impormasyon kung sino ang nagsalita ay nakakainis at lubos na sumisira sa layunin ng pagkakaroon ng ganitong sistema. Dito pumapasok ang speaker recognition, na kilala rin bilang speaker identification.

Sa bahaging ito, maaari naming i-align nang awtomatiko ang transcriptions at audio sa pangalan ng speaker. Para magawa ito, gumagamit kami ng prosesong tinatawag na diarization na naggugrupo ng audio segments sa bilang ng speakers sa recording. Gumagana ito sa pamamagitan ng paggamit ng Voice Activity Detection (VAD) system para matukoy ang speech segments, kung saan maaari kaming mag-extract ng vector representation ng maikling window. Ang bawat vector na nakuha mula sa windows ay tinatawag na utterance-level xvector at kapag in-average ay nagiging speaker-level x-vector. Ang mga x-vectors na ito ay pinapadaan sa clustering algorithm, kung saan ang bawat cluster ay kumakatawan sa speech segments na kabilang sa parehong speaker. Mahalaga ang pagpili ng clustering algorithm sa diarization performance, at nakamit namin ang optimal Diarization Error Rate (DER) gamit ang spectral clustering na may thresholded affinity matrix na auto-tuned gamit ang Normalized Maximum Eigengap (NME) values. Sa huli, kailangan naming tukuyin kung aling speaker ang kumakatawan sa bawat cluster. Bago ang meeting, maaaring magsagawa ng enrollment process para mag-extract ng x-vectors mula sa 40-segundong recording ng bawat speaker, na maaari naming ikumpara sa clusters para matukoy ang kaukulang speaker.

Ang kagandahan ng pipeline na ito ay ang flexibility. Sa maraming meeting scenarios, hindi praktikal at madalas imposible na makakuha ng recordings ng bawat speaker nang maaga. Isipin ang business meetings na may VIP clients o malalaking symposium na may 50 speakers. Sa ganitong kaso, kahit hindi mag-enroll, ang diarization system namin ay maaari pa ring mag-grupo ng speech segments at pagsamahin ang mga kabilang sa parehong speaker. Kailangan lang ng tao na makinig ng ilang segundo mula sa bawat cluster para matukoy ang speaker identity. Kasama ng dedikadong modern user interface, maaari naming ibigay ang parehong functionality ngunit mas flexible.

### Customized speech recognition

Matapos makilala ang meeting transcriber ng Microsoft at ang mga dahilan kung bakit ito makapangyarihan, handa na kaming gawing ganap na independent ang aming system at lampasan ang isang rebolusyonaryong produkto. Ang driving force sa likod ng Modern Meetings at anumang transcription product ay ang Automatic Speech Recognition (ASR) models. Kaya't dito nakatuon ang aming pansin.
Azure Cognitive Services ay nag-aalok ng maraming models para sa iba't ibang wika at dialect. Gayunpaman, mahirap matukoy ang performance sa pagitan ng iba't ibang dialect. Para sa mga English dialect, malamang na karamihan ng effort at data ay napunta sa US English model na pagkatapos ay na-finetune gamit ang accented data para makagawa ng iba't ibang dialect models. Gusto naming siguraduhin na kung mag-aalok kami ng distinct model, ito ay naka-tune para sa specific use case. Nangangahulugan ito ng pag-source ng libu-libong oras ng localized audio at transcriptions, at paglalaan ng linggo sa training at finetuning. Ngunit sulit ang kasiyahan na makita ang aming models na gumagaling bawat epoch at natutupad ang aming ipinangako.

Kapag may solidong foundational model na, ang susunod na hakbang ay palawakin ang usability at customizability. Bawat industriya ay may sariling jargon na nagpapahirap sa ASR models na tukuyin ang esoteric vocabulary at karaniwang mga salitang magkatunog.

Ang sagot namin ay SeaVoice, na nagbibigay ng centralized location kung saan madaling i-tune ng users ang models para sa kanilang partikular na pangangailangan.
`;export{a as default};

const a=`---
title: "Mula Demo hanggang Tagumpay: Pagpapatupad ng Mga Modernong Pagpupulong ng Microsoft at Higit Pa (1/5)"
metatitle: "Mula Demo hanggang Tagumpay (1/5): Higit pa sa Mga Modernong Pagpupulong ng Microsoft"
date: 2021-07-19
draft: false
author: Cody Kim
description: "Sa unang bahagi ng serye ng blog na ito, sundan ang paglalakbay ng Seasalt.ai sa paglikha ng SeaMeet, ang aming mga solusyon sa modernong pagpupulong na may pakikipagtulungan."
weight: 1
tags:
  - SeaMeet
image: images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/SeaMeet animation.gif
canonicalURL: /blog/microsoft-modern-meetings/
url: /blog/microsoft-modern-meetings/
---

*Sa buong serye ng blog na ito, sundan ang paglalakbay ng Seasalt.ai sa paglikha ng isang mahusay na Modern Meetings Experience, simula sa mga hamak na simula nito, sa pag-optimize ng aming serbisyo sa iba't ibang hardware at modelo, sa pagsasama ng mga makabagong sistema ng NLP at sa wakas ay nagtatapos sa buong pagsasakatuparan ng SeaMeet, ang aming mga solusyon sa modernong pagpupulong na may pakikipagtulungan.*

### Hinaharap ng mga Modernong Pagpupulong

[![Demo ng serbisyo ng speech-to-text ng Microsoft mula sa MS Build 2019](/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/ms-build-play.png)](https://www.youtube.com/watch?t=100&v=EYinMnQWgfU&feature=youtu.be)

Sa Microsoft Build 2019, pinukaw ng Microsoft ang madla nang ilantad nila ang pinakabago sa kanilang mga solusyon sa cloud computing: ang Azure Speech Services, mas partikular ang kanilang aplikasyon sa Meeting Transcription. Matapos ang pagpapakilala nito, agad na napunta sa radar ng lahat ang transcriber ng pag-uusap na ito at nakakuha ng mga pagbanggit sa mga nangungunang tech blog at peryodiko. Ang demonstrasyon, na inilalarawan sa video sa ibaba noong 2019, ay nagpakita ng maraming lakas mula sa Azure Speech Services. Hindi namin alam na mabilis itong naging isang paunang salita kung paano gaganapin ang mga modernong pagpupulong sa isang pandaigdigang pandemya at post-pandemikong setting: mula sa pisikal hanggang sa virtual hanggang sa hybrid.

<center>
<img src="/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/azure-demo.png" alt="Live demo ng speech-to-text at speaker identification ng Microsoft Azure sa MS Build 2019"/>
</center>

Ipinakilala bilang isang platform ng transkripsyon ng pag-uusap, ang showcase ng Microsoft para sa serbisyo ng transkripsyon ng pagpupulong ng Azure, na angkop na ipinakilala bilang "Ang Hinaharap ng mga Modernong Pagpupulong", ay itinatag ang kanilang bagong serbisyo bilang isang matatag, mahusay na platform ng speech-to-text (STT) na angkop para sa lahat ng mga negosyo na naghahanap ng isang paraan upang mabilis at maayos na makuha ang lahat ng kanilang mahahalagang kumperensya.

Ano ang gumagawa sa serbisyong ito na tuktok ng transkripsyon ng pagpupulong? Una, pagganap sa real-time. Habang nagiging mas mabilis at mas mabilis ang teknolohiya, lalong numinipis ang pasensya kung saan kahit na ang ilang segundo ng pagkaantala ay higit pa sa sapat upang mainis ang karaniwang gumagamit. Ngunit pinatunayan ng Microsoft na ang kanilang transcriber ng pag-uusap ay higit pa sa sapat na mabilis, na nagbibigay ng tumpak na mga transkripsyon nang mas mabilis kaysa sa ilang mga serbisyo ng closed captioning, na ginagawang ganap na magagawa na sundan ang isang kasabay na pag-uusap gamit ang teksto lamang.

Susunod, ipinakita rin ng Microsoft ang kanilang mga kakayahan sa pagkakakilanlan ng nagsasalita. Ang pagtatapos sa isang gulo ng hindi organisadong teksto ng pag-uusap ay nakakadismaya at walang silbi, ngunit awtomatikong nilalagyan ng label ng pagkakakilanlan ng nagsasalita ang bawat pagbigkas sa nagsasalita na lumilikha ng isang madaling maunawaan na format.

![User interface ng speech-to-text at speaker identification ng Microsoft Azure](/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/azure-ui.png)

Araw-araw, ang hardware ng computing ay lumalakas araw-araw at ang mga kumpanya ay naghahanap upang pisilin ang bawat huling core mula sa pinakabagong mga CPU at GPU. Kadalasan ang mas lumang teknolohiya ay nagiging lipas na at ang mga customer ay napipilitang mag-upgrade bawat ilang taon upang manatiling may kaugnayan sa lipunan. Sa "Hinaharap ng mga Modernong Pagpupulong", na-optimize ng Microsoft ang Azure Speech Service upang tumakbo sa hardware na grade-consumer habang pinapanatili ang mabibigat na pagkalkula sa kanilang panig, na lalong nagpapalawak sa malawak na populasyon na maaaring makinabang sa serbisyong ito.

Ang serbisyo ng transkripsyon ng pagpupulong ng Azure ay nakatayo upang i-optimize ang paraan ng pagsasagawa namin ng negosyo. Ang bawat solong organisasyon ay gagawa ng mabuti upang isama ang isang produkto na tulad nito sa kanilang daloy ng trabaho. Sa isang karaniwang araw, ang impormasyon ay patuloy na dumadaloy at ang bawat piraso ay kasinghalaga ng huli, maging ito man ay mga paalala, gawain, o pag-update. Masyadong madalas na nawawala ang mga bagay sa mga bitak at nangangahulugan iyon ng nasayang na oras at nasayang na kita. Ang inaalok ng solusyon ng Microsoft ay isang kumpleto, awtomatikong nabuong talaan na naglalarawan nang eksakto kung ano ang sinabi at kung sino ang nagsabi nito, kaya't wala na ang mga araw ng nawawalang impormasyon at bulag na pangangaso sa mahahabang pag-record ng audio para sa isang partikular na seksyon. Ngayon, ang lahat ng impormasyong kailangan mo ay maayos na inilatag para sa iyo upang sanggunian nang madalas hangga't kailangan mo. Ang teknolohiyang ito ay mas mahalaga kaysa dati. Kung may itinuro sa atin ang taong 2020, ito ay ang pangangailangan para sa kakayahang umangkop, lalo na sa lugar ng trabaho. Nagkakasakit ang mga tao at lumitaw ang mga hindi inaasahang kaganapan kaya't halos imposible na asahan ang mga empleyado na dumalo sa bawat talakayan. Sa Mga Modernong Pagpupulong, isang hakbang tayo na mas malapit sa pag-acommodate sa mga hindi inaasahang pag-unlad na ito sa pamamagitan ng mahalagang pagbibigay sa lahat ng kakayahang naroroon nang hindi aktwal na naroroon.

### Pagpapatupad ng mga Modernong Pagpupulong

Sa kalagitnaan ng 2020, nakatanggap kami ng isang kahilingan para sa panukala mula sa isang kliyente ng gobyerno sa Singapore. Oo, pandemya pa rin. Ngunit kontrolado ito ng Singapore kaya't ang mga pagpupulong ng gobyerno ay nangyayari pa rin sa mga pisikal na silid ng kumperensya. Nais nila ng isang modernong solusyon na maaaring mag-transcribe ng pagsasalita mula sa hanggang 12 iba't ibang mga nagsasalita. Bukod dito, ang pagkakakilanlan ng nagsasalita ay gaganap ng isang mahalagang papel dito.

Sa pagkakakilanlan ng nagsasalita, isang makabuluhang pagkakaiba sa pagitan ng kung ano ang inaalok ng Azure at kung ano ang kailangan ng kliyente ay ang "pagpapatala" ng boses: nangangailangan ang Azure ng ilang paunang naitala na boses mula sa lahat ng mga nagsasalita upang ma-enroll ang kanilang voiceprint sa system. Gayunpaman, imposible na hilingin sa ilang marahil napakahalagang opisyal ng gobyerno na umupo sa harap ng isang mikropono upang maitala. Gumawa kami ng ilang pag-angkop sa proseso sa pamamagitan ng unang pagsasagawa ng hindi pinangangasiwaang pag-cluster ng nagsasalita (tinatawag ding speaker diarization). Ang ideya ay kung ang isang nagsasalita ay nagsalita nang isang beses sa aming system, makikilala namin sila sa susunod na pagsasalita nila.

![Flow diagram ng mga serbisyo ng speech-to-text at speech identification ng Microsoft Azure](/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/azure-diagram.png)

*Ang arkitektura ng mga modernong pagpupulong mula sa [Azure Conversation Transcription](https://docs.microsoft.com/en-us/azure/cognitive-services/speech-service/conversation-transcription). Sa aming pag-angkop, pinaluwag namin ang kinakailangan ng "Pagpapatala ng Gumagamit" bago ang pagpupulong hanggang pagkatapos ng pagpupulong.*


Pagkatapos ay mabilis naming binuo ang aming arsenal para sa buong proyekto. Ang unang hakbang ay ang pagkuha ng isang mataas na kalidad na microphone array na maghahatid ng malinaw na data ng audio sa aming mga modelo ng pagkilala. Agad kaming naakit sa Azure Kinect: isang naka-istilong, 7 microphone array na nakalagay sa isang buong aluminyo na pambalot na may dagdag na bonus ng isang high definition camera at mga sensor ng lalim.

<center>
<img src="/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/kinect.png" alt="Ang $400 Azure Kinect DK ay ginagamit para sa Mga Modernong Pagpupulong"/>

*Ang $400 [Azure Kinect DK](https://azure.microsoft.com/en-us/services/kinect-dk/) ay ginagamit para sa Mga Modernong Pagpupulong*
</center>

Sa hitsura pa lang, ito ay isang tunay na sopistikadong aparato na makadagdag sa anumang silid ng kumperensya, ngunit mas mahalaga ang malakas na microphone array ay nangako ng kalidad na hinahanap namin. Sa pabilog na pag-aayos, binuksan ng pitong mikropono ang posibilidad ng paggamit ng mga makabagong diskarte sa pagproseso ng signal tulad ng lokalisasyon ng mapagkukunan at beamforming. Ang mikropono na ito ay perpektong pares din sa aming backend na gumamit ng Azure's Speech Services, isang itinatag na platform ng speech-to-text na nagbibigay sa aming produkto ng lakas na kailangan nito upang maging isang nangungunang transcriber ng pagpupulong.

<center>
<img src="/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/kinect-spec.png" alt="Ang Azure Kinect DK ay may kasamang 7 microphone array upang kunin ang mga boses"/>

*Ang Azure Kinect DK ay may kasamang 7 microphone array upang kunin ang mga boses*
</center>

Habang hindi ginawa ng Azure ang huling hiwa ng SeaMeet, binigyan kami nito ng simula na kailangan namin upang maisakatuparan ang aming pananaw. Sa wakas, pinagsama namin ang lahat ng ito sa isang user interface. Sa aming unang pag-ulit, gumamit kami ng isang generic, Java-based na disenyo na, bagaman simple, ay perpektong gumagana. Dahil hindi maaaring magpatakbo ng panlabas na code ang Kinect device, kailangan itong tumakbo sa isang dagdag na solong Windows laptop. Kahit na medyo magaspang ito sa simula, ipinagmamalaki naming sabihin na mayroon kaming isang ganap na gumaganang produkto ng transkripsyon ng pagpupulong.

<center>
<img src="/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/seameet-old.png" alt="Paunang pag-setup ng serbisyo ng SeaMeet ng Seasalt.ai gamit ang isang Microsoft Kinect microphone array"/>

*Pagpapatupad ng Mga Modernong Pagpupulong gamit ang Azure Kinect at isang Windows computer, na nagpapatakbo ng isang simpleng UI na batay sa Java upang ipakita ang real-time na transkripsyon ng pagpupulong at pagkakakilanlan ng nagsasalita.*
</center>

### Pag-deploy ng mga Modernong Pagpupulong

Noong Mayo 2021, dumating ang aming mga inhinyero sa Singapore upang i-deploy ang aming modernong solusyon sa negosyo bilang isang patunay ng konsepto. Nakipaglaban sa dalawang iba pang mga kumpanya ng kakumpitensya, bawat isa sa amin ay inatasan na ipakita ang aming pananaw sa hinaharap ng mga pagpupulong.

Sa kabila ng katotohanan na ang wireless ay naging pamantayan sa nakaraang dekada, nalaman namin na ang aming mga kakumpitensya ay pinili pa rin ang isang wired na solusyon. Tulad ng makikita mo mula sa larawan, bawat isa sa 12 nagsasalita ay naka-angkla sa isang indibidwal na mikropono. Kailangang magsalita nang direkta ang isang nagsasalita sa mikropono sa isang malapit na setting ng pag-uusap para makuha ng system ang kanilang boses. Hindi lamang nito lubos na pinipigilan ang kakayahang umangkop, ngunit ang ganitong pag-setup ay nagpaparami rin ng pagiging kumplikado sa mga kumplikadong kagamitan sa AV. Ang aming solusyon, sa kabilang banda, ay ganap na pinapagana ng mga kakayahan sa malayong larangan, salamat sa 7 microphone array at mga algorithm sa pagproseso ng signal.

Sa ilang sukat, ang aming solusyon ay halos katulad ng "Alexa For Business": isang aparato ang sumasaklaw sa buong silid, na may isang power cable lamang na kinakailangan. Kung ikukumpara sa solusyon ng aming mga kakumpitensya, ang aming solusyon ay mga henerasyon na nauuna sa diwa na tunay naming nauunawaan ang mga pangangailangan ng mga modernong negosyo habang sila ay ganap pa ring nakatali sa lipas na sa panahong wired na henerasyon.

<center>
<img src="/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/poc-setup.png"/>

*Pag-setup ng silid ng kumperensya ng PoC. Mayroong 12 nagsasalita na nagsi-simulate ng isang 2-oras na pagpupulong ng gobyerno.*

<img src="/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/poc-captioned.png"/>

*Isang mas malapit na kuha ng lahat ng kagamitan sa site.*
</center>

Ang koponan ay nasasabik na makita ang malaking pagkakaiba. Sa ilang oras ng pag-tune, naging napakakinis ng huling PoC. Nasiyahan din ang koponan sa isang paglilibot sa Singapore pagkatapos ng PoC, sa isang bansa kung saan mahigpit na napigilan ang Covid-19 upang ang buhay at negosyo ay tumakbo tulad ng dati.

### Higit pa sa mga Modernong Pagpupulong

Sa aming panahon sa Singapore, ang aming mga saloobin ay lumampas sa isang matagumpay na PoC: kumpara sa iba pang mga nakikipagkumpitensyang solusyon, ang sa amin ay 10x na mas mahusay. Ngunit paano natin magagawa ang 10x na mas mahusay kaysa sa ating sarili? Mangyaring sundin ang aming mga hakbang sa susunod na blog sa seryeng ito.

`;export{a as default};

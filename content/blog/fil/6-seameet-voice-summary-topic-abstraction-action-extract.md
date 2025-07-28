---
title: "Mula sa Demo hanggang Tagumpay: Pagdama sa Pagpupulong (4/5)"
metatitle: "Mula sa Demo hanggang Tagumpay (4/5): Pagdama sa Pagpupulong"
date: 2021-08-28T12:26:00-07:00
author: Kim Dodds
image: "images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/SeaMeet animation.gif"
draft: false
description: "Sa ikaapat na bahagi ng serye ng blog na ito, sundan ang paglalakbay ng Seasalt.ai sa paglikha ng SeaMeet, ang aming collaborative na modernong solusyon sa pagpupulong."
tags: ["SeaMeet"]
weight: 1  
canonicalURL: "/blog/seameet-voice-summarization-topic-abstraction"
url: "/blog/seameet-voice-summarization-topic-abstraction"
aliases:
    - /blog/6-seameet-voice-intelligence-meeting-transcription-summarization-topic-abstraction-action-extraction/
---

*Sa buong serye ng blog na ito, sundan ang paglalakbay ng Seasalt.ai sa paglikha ng isang mahusay na Modern Meetings Experience, simula sa mga mapagpakumbabang simula nito, sa pag-optimize ng aming serbisyo sa iba't ibang hardware at modelo, sa pagsasama ng mga state-of-the-art na sistema ng NLP at sa wakas ay nagtatapos sa ganap na pagsasakatuparan ng SeaMeet, ang aming collaborative na modernong solusyon sa pagpupulong.*

## Higit pa sa Transkripsyon

Ang lahat ng mga nakaraang balakid na aming kinaharap ay nagturo sa amin ng isang mahalagang aral: na mas mahusay naming magagawa ang lahat ng ito nang mag-isa.
Kaya't ang mga tauhan dito sa Seasalt.ai ay nagsimulang magsanay ng aming sariling mga modelo ng acoustic at wika upang makipagkumpetensya sa mga kakayahan ng conversational transcriber ng Azure.
Nagpakita ang Microsoft ng isang kamangha-manghang presentasyon sa MS Build 2019, na nagpapakita ng Azure's Speech Services bilang parehong lubos na may kakayahan at napakadaling gamitin na produkto.
Matapos mamangha, napilitan kaming magtanong, saan tayo pupunta mula rito?
Paano natin mapapalawak ang produktong ito na napakahalaga na? Ipinakita ng Modern Meetings ang matatag na potensyal ng speech to text, ngunit doon ito humihinto.
Alam namin na makikinig sa amin ang Azure, ngunit paano kung maaari naming ipaisip ito para sa amin?
Sa mga transkripsyon lamang, bagama't kahanga-hanga ang produkto, medyo limitado ang mga aplikasyon.

Sa pamamagitan ng pagsasama ng umiiral na teknolohiya ng speech-to-text sa mga sistema na maaaring makagawa ng mga insight mula sa mga transkripsyon, makakapaghatid kami ng produkto na lumalampas sa mga inaasahan at inaasahan ang mga pangangailangan ng user.
Nagpasya kaming isama ang tatlong sistema upang mapabuti ang pangkalahatang halaga ng aming mga transkripsyon ng SeaMeet: pagbubuod, pag-abstract ng paksa, at pagkuha ng item ng aksyon.
Ang bawat isa sa mga ito ay pinili upang maibsan ang mga partikular na problema ng user.

Upang ipakita, ipapakita namin ang resulta ng pagpapatakbo ng mga sistema ng pagbubuod, paksa, at aksyon sa sumusunod na maikling transkripsyon:

```
Kim: "Salamat, Xuchen, naka-mute ka dahil maraming tao ang nasa tawag na ito. Pindutin ang Star 6 para i-unmute."

Xuchen: "OK, akala ko mahina lang ang signal.",

Kim: "Oo.",

Sam: "Nagpadala lang ako ng hiwalay na file na may speech data para sa mga Martes hanggang 30 araw. Dapat mayroon kayong updated na bersyon.",

Kim: "Kaya tiyak na magkakaroon ng mga edge case kung saan hindi ito gagana. Nakahanap na ako ng ilang tulad sa halimbawang ito. Kinukuha nito ang pandiwa doon at sinasabing ang nagsasalita ang assignee, samantalang si Carol talaga ang assignee doon. Ngunit ito ay parehong pattern tulad ng pangalawa kung saan gusto mo talaga na ako ang assignee dahil hindi nila ina-assign si Jason, ina-assign nila ang kanilang sarili upang sabihin kay Jason.",

Sam: "Nakuha ko.",

Xuchen: "Kaya ang downside nito ay kailangan mong magsulat ng mga panuntunan para dito. Oo, ang upside ay ito ay isang sanay na modelo. Maaari mo itong sanayin pa, ngunit hindi namin kailangang maglagay ng maraming data dito.",

Kim: "Bagama't hindi nito ginagawa ang klasipikasyon na magbibigay sa amin Ito ba ay isang aksyon o ito ay iba pa?",

Xuchen: "Kaya, ang trick dito ay gusto namin na ang auxiliary verb ay naroroon, ngunit gusto rin namin ang ilang pangalan ng tao.",

Sam: "Tama, kung hindi, maaaring dahil.",

Xuchen: "Oo, kung mayroong isang pangungusap na may, alam mo, maraming pagkakataon na may malinaw na mga salita. Gayunpaman, hindi marami sa kanila ang makakatulong sa mga aksyon."
```

Ang sumusunod ay isang halimbawa ng mga maikling buod, kung saan ang bawat segment sa orihinal na transkripsyon ay ipinasa sa summarizer:

```
Kim: "Naka-mute si Xuchen dahil maraming tao ang nasa tawag."

Xuchen: "Mahina lang ang signal."

Sam: "Nagpadala ako ng hiwalay na file na may speech data para sa mga Martes hanggang 30 araw."

Kim: "Magkakaroon ng mga edge case kung saan hindi ito gagana."

Xuchen: "Ang downside ng pagsasanay ng isang sanay na modelo ay kailangan mong magsulat ng mga panuntunan para dito."

Kim: "Hindi ginagawa ng klasipikasyon ang klasipikasyon na magbibigay sa kanila ng aksyon."

Xuchen: "Ang trick dito ay gusto nila na ang auxiliary verb ay naroroon, ngunit gusto rin nila ang ilang pangalan ng tao."

Xuchen: "Kung mayroong isang pangungusap na may mga salita, hindi marami sa kanila ang makakatulong sa mga aksyon."
```

At ipinapakita ng halimbawang ito ang buong pagpupulong na binubuod sa isang talata:

```
“Naka-mute si Xuchen dahil maraming tao ang nasa tawag. Nagpadala si Sam ng hiwalay na file na may speech data para sa mga Martes hanggang 30 araw. Nakahanap si Xuchen ng ilang edge case kung saan ang nagsasalita ang assignee.”
```

Sa core ng parehong maikli at mahabang bahagi ng pagbubuod ay isang transformer-based na modelo ng pagbubuod.
Pinipino namin ang modelo sa isang dataset ng diyalogo para sa abstractive summarization.
Ang data ay naglalaman ng mga textual excerpt ng iba't ibang haba na bawat isa ay ipinares sa isang sulat-kamay na buod.
Para sa multilingual summarization, ginagamit namin ang parehong paradigma, ngunit gumagamit ng multilingual base model na pinino sa isang isinaling bersyon ng dataset.
Mula sa interface ng SeaMeet, mayroon ding opsyon ang user na i-verify ang isang buod na ginawa ng makina, o magbigay ng sarili nilang buod.
Maaari naming kolektahin ang mga buod na ito na inilagay ng user at idagdag ang mga ito pabalik sa aming training set upang patuloy na mapabuti ang aming mga modelo.

## Pag-abstract ng Paksa

<center>
<img src="/images/blog/6-seameet-voice-intelligence-meeting-transcription-summarization-topic-abstraction-action-extraction/topics.png" alt="Kinukuha ng engine ng pagkuha ng paksa ng SeaMeet ang mga paksa mula sa isang pagpupulong"/>

*Ang interface ng SeaMeet, nakatuon sa tab na ‘Mga Paksa’ sa kanang bahagi*
</center>

Ang isa pang problema kapag nakikipag-ugnayan sa malalaking koleksyon ng mga transkripsyon ay ang pag-oorganisa, pagkakategorya, at paghahanap sa mga ito.
Sa pamamagitan ng awtomatikong pag-abstract ng mga keyword at paksa mula sa transkripsyon, maaari naming bigyan ang mga user ng madaling paraan upang mahanap ang ilang partikular na pagpupulong, o kahit na mga partikular na seksyon ng mga pagpupulong kung saan tinalakay ang isang nauugnay na paksa.
Bukod pa rito, ang mga paksang ito ay nagsisilbing isa pang paraan ng pagbubuod ng pinakamahalaga at di malilimutang impormasyon sa isang transkripsyon.

Narito ang isang halimbawa ng mga keyword na kukunin mula sa sample transcript:

```
auxiliary verb
speaker
speech data
separate file
updated versions
person names
trained model
write rules
```

Ang gawain ng pagkuha ng paksa ay gumagamit ng kombinasyon ng abstractive at extractive na mga diskarte.
Ang abstractive ay tumutukoy sa isang text classification approach, kung saan ang bawat input ay ikinategorya sa isang set ng mga label na nakita sa panahon ng pagsasanay.
Para sa pamamaraang ito, gumamit kami ng neural architecture na sinanay sa mga dokumento na ipinares sa isang listahan ng mga nauugnay na paksa.
Ang extractive ay tumutukoy sa isang keyphrase search approach kung saan ang mga nauugnay na keyphrase ay kinukuha mula sa ibinigay na teksto at ibinabalik bilang mga paksa.
Para sa diskarte na ito, gumagamit kami ng kombinasyon ng mga sukatan ng pagkakapareho tulad ng cosine similarity at TF-IDF bilang karagdagan sa impormasyon ng co-occurrence ng salita upang makuha ang pinaka-relevant na mga keyword at parirala.

Ang mga abstractive at extractive na pamamaraan ay parehong may mga kalamangan at kahinaan, ngunit sa pamamagitan ng paggamit ng mga ito nang magkasama, maaari nating samantalahin ang mga kalakasan ng bawat isa.
Ang abstractive model ay mahusay sa pagkolekta ng mga natatangi, ngunit magkakaugnay na detalye at paghahanap ng isang bahagyang mas pangkalahatang paksa na nababagay sa lahat ng ito.
Gayunpaman, hindi nito kailanman mahuhulaan ang isang paksa na hindi pa nito nakita sa panahon ng pagsasanay, at imposibleng sanayin sa bawat maiisip na paksa na maaaring lumabas sa isang pag-uusap!
Ang mga extractive model, sa kabilang banda, ay maaaring kumuha ng mga keyword at paksa nang direkta mula sa teksto, na nangangahulugang ito ay domain independent, at maaaring kumuha ng mga paksa na hindi pa nito nakita. Ang drawback sa diskarte na ito ay kung minsan ang mga paksa ay masyadong magkatulad o masyadong tiyak. Sa pamamagitan ng paggamit ng pareho, nakahanap kami ng isang masayang medium sa pagitan ng generalizable at domain-specific.

## Pagkuha ng Item ng Aksyon

<center>
<img src="/images/blog/6-seameet-voice-intelligence-meeting-transcription-summarization-topic-abstraction-action-extraction/actions.png" alt="Gumagawa ang engine ng pagkuha ng aksyon ng SeaMeet ng maikling abstractive na buod ng mga item ng aksyon na kinuha mula sa mga transkripsyon ng pagpupulong"/>

*Ang SeaMeet UI, nakatuon sa tab na ‘Mga Aksyon’ sa kanang bahagi*
</center>

Ang huling problema na nilayon naming maibsan para sa mga user ay ang gawain ng pagtatala ng mga item ng aksyon.
Ang pagtatala ng mga item ng aksyon ay isang napakakaraniwang gawain na itinalaga sa isang empleyado upang gawin sa panahon ng isang pagpupulong.
Ang pagsusulat ng ‘sino ang nagsabi kanino na gawin kung ano kailan’ ay maaaring lubhang nakakaubos ng oras, at maaaring maging sanhi ng pagkaabala ng manunulat at hindi makilahok nang buo sa pagpupulong.
Sa pamamagitan ng pag-automate ng proses na ito, umaasa kaming maibsan ang ilan sa responsibilidad na iyon mula sa user upang ang lahat ay makapagbigay ng kanilang buong atensyon sa paglahok sa pagpupulong.

Ang sumusunod ay isang halimbawa ng ilang item ng aksyon na maaaring makuha mula sa halimbawang transkripsyon:

```
suggestion: "Sabi ni Sam, dapat may updated na bersyon ang team."

statement: "Sabi ni Kim, tiyak na magkakaroon ng mga edge case kung saan hindi ito gagana."

imperative: "Sabi ni Xuchen, may kailangang magsulat ng mga panuntunan para dito."

desire: "Sabi ni Xuchen, gusto ng team na naroroon ang auxiliary verb, ngunit gusto rin nila ang ilang pangalan ng tao."
```

Ang layunin ng Action Extractor system ay lumikha ng maikling abstractive na buod ng mga item ng aksyon na kinuha mula sa mga transkripsyon ng pagpupulong.
Ang resulta ng pagpapatakbo ng Action Extractor sa isang transkripsyon ng pagpupulong ay isang listahan ng mga command, mungkahi, pahayag ng intensyon, at iba pang mga actionable segment na maaaring ipakita bilang mga to-do o follow-up para sa mga kalahok sa pagpupulong.
Sa hinaharap, kukunin din ng extractor ang mga pangalan ng mga assignee at assigner pati na rin ang mga takdang petsa na nakatali sa bawat item ng aksyon.

Ang pipeline ng pagkuha ng aksyon ay may dalawang pangunahing bahagi: isang classifier at isang summarizer.
Una, ang bawat segment ay ipinapasa sa isang multi-class classifier at tumatanggap ng isa sa mga sumusunod na label:

- Tanong
- Imperative
- Mungkahi
- Pagnanais
- Pahayag
- Hindi actionable

Kung ang segment ay tumatanggap ng anumang label maliban sa ‘non-actionable’, ito ay ipinapadala sa summarization component kasama ang dalawang nakaraang segment sa transkripsyon, na nagbibigay ng mas maraming konteksto para sa summarization.
Ang hakbang ng pagbubuod ay mahalagang pareho sa stand-alone na bahagi ng pagbubuod, gayunpaman ang modelo ay sinanay sa isang bespoke dataset na partikular na binuo para sa pagbubuod ng mga item ng aksyon na may gustong format ng output.

## Nagkaroon ng Utak ang SeaMeet

Ito ay isang malaking hakbang tungo sa paglikha ng aming sariling natatanging produkto: pagsasanay ng pagbubuod kasama ang mga modelo ng pagkuha ng paksa at aksyon upang higit pang mapabuti ang aming produkto, at pagdidisenyo ng isang magandang interface upang pagsamahin ang lahat sa isang nakamamanghang pakete.
Ito ang kwento sa ngayon, ang simula ng paglalakbay ng Seasalt.ai upang magdala ng pinakamahusay na mga solusyon sa negosyo sa isang mabilis na umuunlad na merkado at maihatid sa mundo, SeaMeet: Ang Kinabukasan ng Modernong Pagpupulong.

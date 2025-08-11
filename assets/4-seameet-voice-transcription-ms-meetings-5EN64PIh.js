const a=`---
title: "Mula sa Demo hanggang Tagumpay: Mga Bitag ng Modernong Pagpupulong (2/5)"
metatitle: "Demo hanggang Tagumpay (2/5): Mga Bitag ng Modernong Pagpupulong"
date: 2021-07-30
draft: false
author: Cody Kim
description: "Sa ikalawang bahagi ng serye ng blog na ito, sundan ang paglalakbay ng Seasalt.ai sa paglikha ng SeaMeet, ang aming collaborative na modernong solusyon sa pagpupulong."
weight: 1
tags:
  - SeaMeet
image: images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/SeaMeet animation.gif
canonicalURL: /blog/seameet-voice-and-microsoft-modern-meetings/
url: /blog/seameet-voice-and-microsoft-modern-meetings/
---

*Sa buong serye ng blog na ito, sundan ang paglalakbay ng Seasalt.ai sa paglikha ng isang mahusay na Modern Meetings Experience, simula sa mga mapagpakumbabang simula nito, sa pag-optimize ng aming serbisyo sa iba't ibang hardware at modelo, sa pagsasama ng mga state-of-the-art na sistema ng NLP at sa wakas ay nagtatapos sa ganap na pagsasakatuparan ng SeaMeet, ang aming collaborative na modernong solusyon sa pagpupulong.*

## Mga Bitag ng Modernong Pagpupulong

Sa buong pag-unlad namin, nakatagpo kami ng maraming hindi mahuhulaan na mga hadlang nang walang malinaw na sanhi o solusyon.

### Isang Mabilis na Pagsisimula

Ang unang balakid ay ang pagpapatakbo ng aming mga tool. Nagbigay ang Azure ng isang sample ng Modern Meetings na ikinatuwa namin na tugma sa Linux, ngunit nalaman namin na ang paggamit ng SDK sa Windows upang patakbuhin ang demo ay mas madali -- well, produkto ng Microsoft ito pagkatapos ng lahat. Matapos ang maraming nabigong pagtatangka upang patakbuhin ang ibinigay na sample sa Linux, sa huli ay kinailangan naming iwanan ang landas na iyon at lumipat sa Windows. Sa wakas ay nagkaroon kami ng isang gumaganang speech transcriber, na isang napakalaking simula.

### Latency

Isang isyu na naranasan namin ay ang humigit-kumulang limang segundong pagkaantala sa pagtanggap ng aming mga resulta ng pagkilala sa front end UI. Bagama't ang 5 segundo ay maaaring mukhang mabilis, ang pagkaantala na ito ay kapansin-pansin na ilang segundo ang bagal mula sa pagiging isang maginhawa at praktikal na solusyon, lalo na para sa real-time na komunikasyon.

<center>
<img src="/images/blog/4-seameet-voice-intelligence-meeting-transcription-pitfalls-of-microsoft-modern-meetings/default_ui.png" style="width:400px;" alt="Ang default na UI para sa speech transcription ng Azure Speech SDK"/>

*Ang default na UI para sa speech transcription na ibinigay ng Azure Speech SDK*
</center>

Ang latency ay isa ring seryosong isyu sa back end. Sa simula ng bawat pulong, ang mga resulta ay dumating sa real-time (tulad ng na-advertise!) ngunit habang nagpapatuloy ang pulong, ang latency ay pana-panahong tataas nang hanggang tatlumpung segundo bago lumitaw ang teksto sa mga monitor. Sa panahong iyon, ang anumang sinabi ay matagal nang naging hindi nauugnay sa pag-uusap. Matapos ang hindi mabilang na mga pagsubok, nagsimula kaming mapansin na ang latency ay nagbabago sa buong araw, na iniugnay namin sa server load ng Azure sa sandaling iyon. Kami ay nasa negosyo ng paglikha ng isang pare-pareho, maaasahang produkto, kaya ang mga pabago-bago at hindi mahuhulaan na pagkaantala na ito ay hindi katanggap-tanggap. Lalo pa itong dahilan upang umasa sa aming sariling mga modelo at server.

### Dayalekto

Isang partikular na dahilan kung bakit namin ginamit ang Azure Speech Service sa simula pa lamang ay ang kanilang malawak na suporta sa iba't ibang wika at dayalekto. Kami ay partikular na nasasabik na gamitin ang Singaporean English model ng Azure Speech Service. Ngunit isipin ang aming pagtataka nang matuklasan namin na, para sa dayalekto ng Singapore, ang US English model ay patuloy na mas mahusay kaysa sa Singaporean English model. Bukod pa rito, kahit ang pinakamahusay na modelo ay hindi nakatugon sa mga hamon sa totoong mundo.

<center>
<img src="/images/blog/4-seameet-voice-intelligence-meeting-transcription-pitfalls-of-microsoft-modern-meetings/bad_result.png"/>

*Resultang transkripsyon ng "Congratulations! Baby boy or baby girl?"*
</center>

Nakikita namin ang mga resulta tulad ng “ola regulations may be boiled baby cool” samantalang ang sinabi ay “Congratulations! Baby boy or baby girl?”. Ang isang mahusay na sinanay na modelo ng wika ay dapat na nagtanggal ng ganoong transkripsyon. Bagama't ito ay isang matinding halimbawa, mas madalas kaysa sa hindi, magkakaroon ng error sa bawat transkripsyon. Gaano man kaliit ang error, tulad ng nawawalang artikulo o hindi nauunawaang salita, anumang pagkakamali ay nakakagambala at madaling makasira sa reputasyon ng isang serbisyo ng transkripsyon.

### Windows Update

Ilang linggo ang lumipas, ang koponan ay nagtrabaho nang magdamag upang matiyak na handa ang aming produkto para sa demonstrasyon ng aming kliyente sa loob lamang ng ilang araw. Ang aming meeting transcriber ay tumakbo nang maayos sa tatlong magkahiwalay na Windows laptop. Pagkatapos, isang araw, bigla na lang kaming nabawasan sa isang gumaganang computer kahit na walang nagalaw sa code. Sinubukan namin ang aming mga network, sinuri ang aming mga firewall, anumang maiisip namin na biglang magiging sanhi ng pagkabigo ng aming produkto. Ang aming huling hula ay isang sorpresang Windows update ang naging dahilan upang ang Azure Speech SDK ay hindi maipaliwanag na hindi tugma sa dalawa sa aming mga computer nang ihambing namin ang tatlong sistema nang bit by bit. Sa mabilis na pagdating ng aming showcase, ang stress at tensyon ay nasa breaking point. Sa isang sistema na lang ang natitira, nagkasundo ang koponan: walang pagbabago sa code at walang anumang update. Pagkatapos ng pagsubok na ito, sapat na kami.

### Higit pa sa Modernong Pagpupulong

Upang makatakas sa mga hadlang na ito, ang Seasalt.ai ay nagsimulang magsanay ng sarili nitong mga modelo ng acoustic at wika upang makipagkumpetensya sa mga kakayahan ng conversational transcriber ng Azure. Sa buong proses, patuloy naming tinatanong, saan tayo pupunta mula rito? Paano natin mapapalawak ang produktong ito na napakahalaga na?

Ipinakita ng Modern Meetings ang matatag na potensyal ng speech to text, ngunit doon ito humihinto. Maaari itong makinig sa atin, ngunit paano kung maaari nating ipaisip ito para sa atin. Sa mga transkripsyon lamang, bagama't kahanga-hanga ang produkto, medyo limitado ang mga aplikasyon. Ang paglipat mula sa speech transcription patungo sa speech intelligence ay nagbubukas ng malawak na pinto sa kung ano ang maaari nating likhain. Kasama sa mga halimbawa ng intelligence ang mga buod ng pulong, topic abstraction at action extraction. Sa wakas, ang pagdidisenyo ng isang magandang interface upang pagsamahin ang lahat sa isang nakamamanghang pakete.

At ito ang kwento sa ngayon, ang simula ng paglalakbay ng Seasalt.ai upang magdala ng pinakamahusay na mga solusyon sa negosyo sa isang mabilis na umuunlad na merkado at maihatid sa mundo. Kung nais mong malaman ang higit pa tungkol sa mga detalye, mangyaring ipagpatuloy ang pagbabasa ng iba pang serye ng blog.
`;export{a as default};

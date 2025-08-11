const a=`---
title: "OpenAI vs. Tao vs. Voice AI: Isang Paghahambing ng Gastos (5/5)"
metatitle: "OpenAI Realtime API vs. Tao at Voice AI: Paghahati-hati ng Gastos"
date: 2024-10-12 00:22:19-07:00
modified_date: 2025-07-26T16:48:39Z
draft: false
author: Xuchen Yao
description: "Isang detalyadong pagsusuri ng gastos ng OpenAI Realtime API kumpara sa mga human receptionist at voice AI agents."
weight: 1
tags:
  - Serbisyo ng Auto Answering
  - Papasok na Tawag para sa Maliit na Negosyo
  - SeaChat
  - Voice AI
image: /images/blog/101-openai-chatgpt-realtime-api-cost-breakdown/101-openai-chatgpt-realtime-api-cost-breakdown.svg
canonicalURL: /blog/openai-chatgpt-realtime-api-cost-breakdown/
url: /blog/openai-chatgpt-realtime-api-cost-breakdown/
---


*Ito ay isang serye ng 5 artikulo na nagtutuklas ng mga estratehiya sa komunikasyon ng customer para sa maliliit na negosyo, na nakatuon sa mga serbisyo ng pagsagot:*

<br/>

<center>
<img height="100%" width="80%" style="background-color: #ffffff" src="/images/blog/101-openai-chatgpt-realtime-api-cost-breakdown/series-diagram.svg"  alt="Diagrama ng Serye ng Papasok na Tawag">

</center>

1. [Bakit Kailangan ng Maliit na Negosyo ng Serbisyo ng Pagsagot?](https://seasalt.ai/blog/96-why-small-businesses-need-answering-service/): Tuklasin ang kahalagahan at benepisyo ng mga serbisyo ng pagsagot.

2. [Outsourcing vs. In-house Live Receptionists](https://seasalt.ai/blog/97-live-receptionist-inhouse-outbound/): Ano ang mga live receptionist? Dapat ka bang mag-outsource o mag-hire ng in-house?

3. [Automated Phone Answering Systems (Interactive Voice Response IVR vs. Voice AI Agents)](https://seasalt.ai/blog/98-inbound-answering-automated-system/): Ano ang automated answering service? Dapat mo bang gamitin ang Interactive Voice Response o Voice AI agents?

4. [Desisyon: Dapat Bang Gumamit ang Aking Maliit na Negosyo ng Live Receptionists o Automated Answering Services?](https://seasalt.ai/blog/99-inbound-answering-live-vs-automated/): Natutunan mo na ang lahat tungkol sa mga serbisyo ng pagsagot mula sa aming serye. Ngayon na ang oras upang magpasya kung anong uri ng serbisyo ang pinakamahusay para sa iyong negosyo.

5. (Artikulong Ito) [OpenAI vs. Tao vs. Voice AI: Isang Paghahambing ng Gastos](https://seasalt.com/blog/101-openai-chatgpt-realtime-api-cost-breakdown/): Nagtataka kung dapat kang lumipat sa pinakabagong teknolohiya ng voice AI? Tingnan natin ang tunay na gastos.

---

## TLDR:

1. Parehong OpenAI at tao ay maaaring **mahal**:
   1. Ang Realtime API ng OpenAI ay maaaring magbigay ng karanasan ng voice agent (AI) sa humigit-kumulang **$1 bawat minuto.**
   2. Ang mga on-demand na virtual receptionist (tao) ay nagkakahalaga rin ng humigit-kumulang **$1 bawat minuto.**
2. Ngunit may mga **balanseng** pagpipilian na may mga babala:
   1. Kapag nagtatrabaho nang pangmatagalan, ang mga ahente ng tao na may mahusay na Ingles ay maaaring maging kasingbaba ng $5 bawat **oras** ($0.08 bawat minuto).
   2. Ang mga voice AI agent na inaalok ng mga startup ay maaaring maging kasingbaba ng $7.2 bawat **oras** ($0.12 bawat minuto).

*Kung mas gusto mong makinig sa isang audio na bersyon ng artikulong ito, narito ang video:*

<iframe width="100%" height="400" src="https://www.youtube.com/embed/?v=DgX6F711ceA&list=PL8K7_LTqly46agqJW2quG5Vsylt5os1Al" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>


## Tunay na Gastos ng ChatGPT-4o’s Realtime API

Inilabas ng OpenAI ang [Realtime API](https://openai.com/index/introducing-the-realtime-api/) nito para sa ChatGPT-4o noong Oktubre 1, 2024. Ito ay 5 buwan pagkatapos ng paglabas ng [GPT-4o](https://openai.com/index/hello-gpt-4o/), ang unang omnichannel large language model. Ang pagganap ay nakamamangha. Ang Chatgpt-4o-realtime ay parang tao, tumutugon tulad ng tao, at matatag laban sa mga ingay at pagkaantala.

Gayunpaman, abot-kaya ba ang Chatgpt-4o-realtime?

Sa unang tingin, ang Realtime API ng OpenAI ay lumilitaw na humigit-kumulang 30x na mas mahal kaysa sa GPT-4o-mini *sa text* (**$5 vs. $0.15** / 1M input tokens).

<br/>

<center>
<div style="background-color: #ffffff;">
<img height="100%" width="100%" src="/images/blog/101-openai-chatgpt-realtime-api-cost-breakdown/October 2024 pricing for chatgpt-4o-mini.png"  alt="Presyo ng chatgpt-4o-mini noong Oktubre 2024">
</div>

*Presyo ng chatgpt-4o-realtime noong Oktubre 2024*
</center>

<br/>

<center>
<div style="background-color: #ffffff;">
<img height="100%" width="100%" src="/images/blog/101-openai-chatgpt-realtime-api-cost-breakdown/October 2024 pricing for chatgpt-4o-realtime.png"  alt="Presyo ng chatgpt-4o-realtime noong Oktubre 2024">
</div>

*Presyo ng chatgpt-4o-mini noong Oktubre 2024*
</center>


Sinasabi ng OpenAI na nagkakahalaga ito ng humigit-kumulang $0.06 bawat minuto para sa audio input at $0.24 bawat minuto para sa audio output. Kung pagsasamahin ang mga ito, hindi dapat lumampas sa $0.30 bawat minuto, tama?

Nagsagawa kami ng real-world test ng 4o-realtime API at nalaman na nagkakahalaga ito ng humigit-kumulang $1 bawat minuto.


<br/>

<center>
<div style="background-color: #ffffff;">
<img height="100%" width="100%" src="/images/blog/101-openai-chatgpt-realtime-api-cost-breakdown/Screenshot of the cost for one test of the ChatGPT-4o Realtime API.png"  alt="Screenshot ng gastos para sa isang pagsubok ng ChatGPT-4o Realtime API">
</div>

*Screenshot ng gastos para sa isang pagsubok ng ChatGPT-4o Realtime API*
</center>


Nagsagawa kami ng 5 minutong pag-uusap sa boses gamit ang chatgpt-4o-realtime API, at nalaman na nagkakahalaga ito ng $5.38. Ang 5 minutong pag-uusap sa boses ay may humigit-kumulang 142 segundo ng na-transcribe na audio (isipin ito bilang audio input), ang natitira ay halos audio output.

Sa isa pang pagsubok na ginawa namin, ang isang simpleng pag-uusap ng 10 minuto ay nagkakahalaga ng humigit-kumulang $10.

Naku, mahal iyon. Ito ay halos [10 beses na mas mahal kaysa sa sariling voice agents ng Seasalt.ai](https://chat.seasalt.ai/en-us#pricing?utm_source=blog/).

Kung ang ilang developer ay sinusubukan lamang ang API at sinusubukang gumugol ng makabuluhang pagsisikap upang sanayin ang isang voice AI agent na talagang gumagawa ng isang bagay, madali silang makagastos ng daan-daang dolyar sa isang araw!

## ChatGPT-4o’s Realtime API vs. Human Agents – alin ang mas abot-kaya?

Kaya kung ang isang tao ay bumuo ng isang voice AI agent gamit ang ChatGPT-4o’s Realtime API, ito ay nagkakahalaga ng humigit-kumulang $1 bawat minuto, o **$60 bawat oras**.

### Magkano ang halaga ng isang human agent?

Kung gagamit ka ng isang in-house, tulad ng isang front desk receptionist, maaaring nasa pagitan sila ng minimum wage ($7.25 federal hanggang $16 sa California) hanggang marahil $20 hanggang $30 bawat oras.

Kung gagamit ka ng isang outsourced agency, maaaring mag-iba ang presyo: ang ilan ay nagsisimula sa $349/buwan para sa 200 minuto plus setup fee. Ang Seasalt.ai ay nagsulat ng isang detalyadong survey tungkol dito: [Gastos ng Live Receptionists: In-house vs. Outsourcing](https://seasalt.ai/blog/97-live-receptionist-inhouse-outbound/?utm_source=crossblog).


<br/>

<center>
<img height="100%" width="100%" src="/images/blog/97-live-receptionist-inhouse-outsourced/vendor-summary.png"  alt="Buod ng Vendor ng Live Receptionist">

*Buod ng Vendor ng Live Receptionist ng Seasalt.ai*
</center>

## ChatGPT-4o’s Realtime API vs. iba pang Voice AI Agents – ano ang pagkakaiba?

Ang Realtime API ng ChatGPT-4o ay kumakatawan sa isang makabuluhang pag-unlad sa teknolohiya ng voice AI, na nag-aalok ng ilang pangunahing pagkakaiba kumpara sa iba pang voice AI agents:

- **Responsiveness**: nagbibigay ito ng halos real-time na interaksyon, na may average na oras ng pagtugon na 2 hanggang 3 segundo
- **Robustness**: Ang API ay nagbibigay-daan sa mga pagkaantala at pag-redirect sa panahon ng pag-uusap, na nagbibigay-daan para sa mas natural na daloy ng diyalogo
- **End to end**: hindi nangangailangan ang API ng pagdikit ng iba't ibang bahagi, tulad ng speech to text (Azure, Deepgram, atbp), at text to speech (Azure, Eleven labs).

Ngunit ang babala dito ay ang gastos: ang Realtime API ng ChatGPT-4o ay nagkakahalaga ng humigit-kumulang $1 bawat minuto, habang ang iba pang [voice AI agents ay maaaring maging kasingbaba ng $0.12 bawat minuto](https://seasalt.ai/blog/98-inbound-answering-automated-system/?utm_source=crossblog).

<br/>

<center>
<img height="100%" width="100%" src="/images/blog/98-inbound-answering-automated-system/ai-product-comparison.png"  alt="Seasalt.ai vs. Bland AI vs. Smith.ai. Synthflow.ai vs. Retell AI vs. Slang AI vs. Gridspace para sa voice AI agents">

*Paghahambing ng Produk ng Voice AI Agent ng Seasalt.ai*
</center>


Mayroong 10 beses na pagkakaiba sa presyo, ngunit mayroon bang 10 beses na pagkakaiba sa pagganap? Iyon ay para sa kliyente na humusga.

## Hatol

Para sa mga may-ari ng negosyo, mayroong 4 na pangunahing pagpipilian:

1. **Mga in-house human agent**
2. **Mag-outsource sa ibang kumpanya**, onshore o offshore
3. **Gumamit ng abot-kayang voice AI agent**
4. **Bumuo gamit ang pinaka-advanced/mahal na OpenAI Realtime API**

Ibinuod ko ang iba't ibang kalamangan at kahinaan ng iba't ibang opsyon sa ibaba:

* Ang **OpenAI Realtime API** ay nag-aalok ng pinakamabilis at pinaka-natural na karanasan ngunit nangangailangan ng teknikal na kadalubhasaan at mahal.
* Ang **Onshore On Demand Human Agents** ay mahusay para sa mga pangunahing gawain sa perpektong Ingles ngunit may limitadong integrasyon.
* Ang **Offshore Long Term Human Agents** ay ang pinaka-abot-kaya ngunit maaaring hindi maaasahan dahil sa mga isyu sa imprastraktura at mataas na turnover.
* Ang **Integrated Voice AI Agents** ay nag-aalok ng balanse sa pagitan ng gastos, mga tampok, at kadalian ng paggamit, ngunit maaaring bahagyang hindi gaanong tumutugon at may mga kakaibang integrasyon.

<br/>

<center>
<img height="100%" width="100%" src="/images/blog/101-openai-chatgpt-realtime-api-cost-breakdown/options-for-phone-answer-services.png"  alt="Iba't ibang Opsyon para sa Mga Serbisyo ng Pagsagot sa Telepono: tao vs. OpenAI vs. mga startup ng voice AI">

*Iba't ibang Opsyon para sa Mga Serbisyo ng Pagsagot sa Telepono: tao vs. OpenAI vs. mga startup ng voice AI*
</center>

Bilang isang practitioner sa larangan ng speech recognition at natural language processing, ang aking dalawang sentimo ay:

1. Gamitin ang mga integrated voice AI agent sa merkado, tulad ng [isa na buong pagmamalaki kong binuo gamit ang SeaChat](https://wiki.seasalt.ai/seachat/inbound-voice-agent/tutorial/?utm_source=blog/). Ang mga ito ay mature at abot-kaya.
2. Bigyan ng isa pang taon ang OpenAI Realtime API para subukan ito ng mga guinea pig, at sana ay bumaba ang presyo sa mas abot-kayang $10/oras, pagkatapos ay **ito ay magiging tunay na kamangha-mangha**. Mag-ingat, mga human agent!


## Matuto Nang Higit Pa
Kung nais mong unang tuklasin ang teknolohiya ng boses ng AI para sa serbisyo sa customer sa isang makatwirang presyo, maaari mong bisitahin ang [SeaChat](https://chat.seasalt.ai/?utm_source=blog/) o maaari kang [mag-book ng demo sa amin](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting).


## Tungkol sa Seryeng Ito

*Ito ay isang serye ng 5 artikulo na nagtutuklas ng mga estratehiya sa komunikasyon ng customer para sa maliliit na negosyo, na nakatuon sa mga serbisyo ng pagsagot:*

- [Bakit Kailangan ng Maliit na Negosyo ng Serbisyo ng Pagsagot?](https://seasalt.ai/blog/96-why-small-businesses-need-answering-service/): Tuklasin ang kahalagahan at benepisyo ng mga serbisyo ng pagsagot.

- [Outsourcing vs. In-house Live Receptionists](https://seasalt.ai/blog/97-live-receptionist-inhouse-outbound/): Ano ang mga live receptionist? Dapat ka bang mag-outsource o mag-hire ng in-house?

- [Automated Phone Answering Systems (Interactive Voice Response IVR vs. Voice AI Agents)](https://seasalt.ai/blog/98-inbound-answering-automated-system/): Ano ang automated answering service? Dapat mo bang gamitin ang robotic IVR o Voice AI agents?

- [Desisyon: Dapat Bang Gumamit ang Aking Maliit na Negosyo ng Live Receptionists o Automated Answering Services?](https://seasalt.ai/blog/99-inbound-answering-live-vs-automated/): Natutunan mo na ang lahat tungkol sa mga serbisyo ng pagsagot mula sa aming serye. Ngayon na ang oras upang magpasya kung anong uri ng serbisyo ang pinakamahusay para sa iyong negosyo.

- (Artikulong Ito) [OpenAI vs. Tao vs. Voice AI: Isang Paghahambing ng Gastos](https://seasalt.ai/blog/101-openai-chatgpt-realtime-api-cost-breakdown/): Ang pinakabagong teknolohiya ng voice AI mula sa OpenAI ay isang mahusay na voice AI agent. Ano ang tunay na gastos?
`;export{a as default};

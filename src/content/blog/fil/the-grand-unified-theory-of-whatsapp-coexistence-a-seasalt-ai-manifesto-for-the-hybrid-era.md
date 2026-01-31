---
author: SeaMeet Copilot
category: Pangnegosyong Mensahe
date: '2026-01-29'
meta_description: Tuklasin kung paano ang WhatsApp Pagkakasama ng Seasalt.ai ay nagkukumpleto
  ng agwat sa pagitan ng Negosyo App at API, na nagbibigay-daan sa pakikipagtulungan
  ng tao at AI para sa walang putol na karanasan ng kustomer sa hibridong panahon.
modified_date: '2026-01-29'
tags:
- WhatsApp Pagkakasama
- Seasalt.ai
- API
- Negosyo App
- Hibridong Panahon
- Kustomer Karanasan
- AI Pakikipagtulungan
title: 'Ang Dakilang Pinag-isang Teorya ng WhatsApp Pagkakasama: Isang Manifesto ng
  Seasalt.ai para sa Hibridong Panahon'
url: /blog/the-grand-unified-theory-of-whatsapp-coexistence-a-seasalt-ai-manifesto-for-the-hybrid-era
image:
  url: /images/blog/the-grand-unified-theory-of-whatsapp-coexistence-a-seasalt-ai-manifesto-for-the-hybrid-era.jpg
  alt: "The Grand Unified Theory of WhatsApp Coexistence: A Seasalt.ai Manifesto for the Hybrid Era"
---
# **Ang Pambansang Pinag-isang Teorya ng Pagkakasama-sama ng WhatsApp: Isang Manifesto ng Seasalt.ai para sa Hybrid na Panahon**

## **1\. Pagsisimula: Ang Wakas ng Panahon ng "Alinman o"** 

Sa loob ng halos isang dekada, ang mundo ng business messaging ay nahahati ng isang malinaw, nakakainis na binary. Sa isang panig ay nakatayo ang **WhatsApp Business App**—ang minamahal na tool ng mga maliliit na negosyante, naa-access diretso mula sa isang smartphone, personal, manu-mano, at libre. Sa kabilang panig ay nakatayo ang **WhatsApp Business Platform (API)**—ang lakas ng enterprise, na kayang mag-operate sa malaking sukat, may automation, at malalim na CRM integration, ngunit hindi nakikita ang manu-manong pagpapatakbo ng isang human agent sa isang mobile device.

Ang mga negosyo ay napilitang pumili. Gusto ba nila ng empatiya ng isang tao o ang kahusayan ng isang makina? Gusto ba nilang panatilihin ang kanilang chat history sa kanilang telepono, o iwaksi ang lahat para makakuha ng access sa chatbots? Ang dichotomiyang ito ay humadlang sa paglago. Pinilit nito ang mga lumalawak na negosyo na iwanan ang mismong mga numero ng telepono na pinagkakatiwalaan ng kanilang mga customer, o mas masahol pa, manatili sa mga manu-manong workflow na hindi kayang lumaki.

Ngunit ang tides ay nagbago. Pumasok tayo sa panahon ng **WhatsApp Coexistence (Pagkakasama-sama)**.

Hindi ito basta isang feature update; ito ay isang paradigm shift sa kung paano natin iniisip ang customer experience (CX). Sa **Seasalt.ai**, matagal na nating inilunsad ang pilosopiyang ang hinaharap ay hindi "Tao *vs.* AI", kundi "Tao *plus* AI". Ang Pagkakasama-sama ay ang teknikal na pagpapakita ng paniniwalang ito. Pinapayagan nito ang isang solong numero ng telepono na mag-operate nang sabay-sabay sa WhatsApp Business App at Cloud API.1 Inuugnay nito ang agwat, lumilikha ng isang pinag-isang ecosystem kung saan ang isang maliliit na negosyante ay maaaring sumagot sa isang VIP client mula sa kanyang bulsa habang ang isang SeaChat AI agent ay humahawak ng libu-libong support tickets sa background.3

Sa detalyadong ulat na ito, tayo ay maglalakbay sa pinakamalalim na teknikal na mga gusot at pinakamataas na estratehikong mga tuktok ng Pagkakasama-sama. Hahatiin natin ang arkitektura ng "Mirroring", ang mga detalyadong bahagi ng webhook routing, ang ekonomiya ng mga bagong pricing model, at ang "Human-in-the-Loop" workflows na naglalarawan sa **Seasalt.ai** collaborative contact center. Kami ang may-ari ng impormasyong ito, at ibinibigay namin sa inyo ang susi sa kaharian.

### **1.1 Ang Vision ng Seasalt.ai: Collaborative Intelligence**

Bakit mahalaga ang Pagkakasama-sama? Dahil hindi pinapansin ng mga customer ang inyong tech stack; pinapansin nila ang resolusyon. Kapag ang isang customer ay nagme-message sa isang negosyo, inaasahan nila ang bilis ng isang bot at ang pag-unawa ng isang tao.

Ang **Seasalt.ai** platform ay binuo sa premise ng "Collaborative Intelligence". Naniniwala tayo na ang isang AI agent ay dapat tratuhin bilang isang digital na empleyado—isa na hindi natutulog, agad na naaalala ang bawat interaksyon mula sa Knowledge Base (KB), at walang sagabal na inihahand over ang mga kumplikadong emosyonal na gawain sa mga human colleagues.4 Pinapayagan ng Pagkakasama-sama ito sa pamamagitan ng pagpapanatili ng human agent "in the loop" physically. Hindi tulad ng mga legacy API setup kung saan ang may-ari ng negosyo ay hindi nakikita ang mga usapan ng bot maliban kung maglo-log in sila sa isang web dashboard, ang Pagkakasama-sama ay nagmimirror ng bawat bot interaction pabalik sa WhatsApp Business App sa telepono.1 Maaaring panoorin ng tao ang AI na gumagana sa real-time, at makialam lamang kapag kailangan. Ang transparency na ito ay nagbubuo ng tiwala sa automation at tinitiyak na walang customer ang maiiwan sa isang loop.

## **2\. Ang Arkitektura ng Pagkakasama-sama: Paano Gumagana ang Mirror 🪞**

Upang masakop ang Pagkakasama-sama, kailangang maintindihan ang kumplikadong pag-oorganisa na nangyayari sa loob ng infrastructure ng Meta. Ito ay isang mahinhing sayaw ng synchronization, throughput management, at dual-delivery protocols na idinisenyo para panatilihing magkakasundo ang dalawang magkaibang platform.

### **2.1 Ang Mekanismo ng Message Mirroring**

Sa gitna ng Pagkakasama-sama ay ang konsepto ng **Message Mirroring**. Kapag ang isang numero ng telepono ay na-onboard sa Cloud API via Embedded Signup flow na may Coexistence enabled, ang arkitektura ay nagbabago mula sa single-pipe delivery patungo sa dual-cast system.

1. **Inbound Mirroring (User ![][image1] Business):** Kapag ang isang kustomer ay nagpadala ng mensahe, ang mga server ng Meta ay naghahatid nito sa dalawang destinasyon nang sabay-sabay. Unang-una, inilalagay ito sa **WhatsApp Business App** na naka-install sa pisikal na device (o mga linked na companion device). Pangalawa, isang JSON payload na naglalaman ng mga detalye ng mensahe ay ipo-post sa **Webhook URL** na naka-configure para sa Cloud API.1 Tinitiyak nito na parehong ang human agent na may hawak ng telepono at ang AI agent na nakikinig sa server ay agad na nalalaman ang bagong inquiry.  
2. **Outbound Mirroring (Business ![][image1] User):**  
   * **Via App:** Kung ang human ay sumasagot nang manu-mano gamit ang Business App, ang mensahe ay ipinapadala sa user. Mahalaga, isang partikular na webhook event—smb_message_echoes—ay ipinapadala sa API para ipaalam sa backend system na may naganap na manual na sagot.5 Ang "Echo" na ito ay ang tibok ng puso ng synchronization, na nagpapahintulot sa AI na malaman na dapat itong huminto.  
   * **Via API:** Kung ang AI ay sumasagot sa pamamagitan ng Cloud API, ang mensahe ay ipinapadala sa user at gayundin ay "ine-echo" pabalik sa chat history ng Business App.1 Tinitiyak nito na ang human agent ay may kumpletong transcript ng kung ano ang ipinangako o ipinaliwanag ng bot.

### **2.2 Throughput Constraints: The 20 MPS Limit**

Bagama't ang Cloud API ay teoretikal na may kakayahang hawakan ang napakalaking dami ng messaging traffic (kadalasang lumalampas sa 80 mensahe bawat segundo para sa enterprise tiers), ang Coexistence ay nagpapataw ng mahigpit na pisikal na limitasyon. Upang mapanatili ang integridad ng database sa mobile device at tiyakin na ang Business App ay hindi mag-crash sa bigat ng papasok na data, ang Meta ay nagpapatupad ng **Fixed Throughput Limit na 20 Mensahe Bawat Segundo (MPS)** para sa lahat ng numero sa Coexistence mode.1  

Ang limitasyong ito ay isang kritikal na arkitektural na hadlang. Ipinapahiwatig nito na ang Coexistence ay idinisenyo para sa *conversational* na mga gawain—customer support, sales inquiries, at katamtamang dami ng notifications—sa halip na high-frequency broadcasting o malalaking utility blasts (tulad ng pambansang emergency alerts). Kung ang isang negosyo ay susubukang mag-push ng 100 MPS sa pamamagitan ng isang Coexistence number, ang API ay magt-throttle ng traffic para protektahan ang mobile app sync.  

**Implication for Architects:** Kapag nagdidisenyo ng solusyon para sa Coexistence, ang mga developer ay dapat magpatupad ng **Token Bucket** o **Leaky Bucket** algorithm sa kanilang message queue (halimbawa, gamit ang Redis o RabbitMQ) para pamahalaan ang outbound traffic. Ang system ay dapat maglabas ng mga mensahe sa isang rate na mahigpit na mas mababa sa 20 MPS para maiwasan ang rate-limiting errors (HTTP 429) o mga isyu sa desynchronization.1  

### **2.3 Device Topology at Mga Limitasyon**  

Ang paglipat sa Coexistence ay pangunahing binabago ang device graph ng isang WhatsApp account. Ang mga standard na WhatsApp Business account ay sumusuporta sa "Companion Mode," na nagpapahintulot ng hanggang 4 (o 10 para sa Meta Verified) na linked na device.7 Gayunpaman, ang onboarding process para sa Coexistence ay nag-trigger ng reset ng topology na ito.  

* **Unlinking Event:** Matapos ang matagumpay na onboarding sa Cloud API, lahat ng dating linked na companion devices (WhatsApp Web, Desktop) ay epektibong na-unlink at na-log out. Ang business administrator ay dapat na manu-manong i-re-link ang mga device na ito pagkatapos ng transition.1  
* **Operating System Divergence:** Hindi lahat ng companion devices ay pantay-pantay sa paningin ng Coexistence. Habang ang mga standard na web at desktop client ay sumusuporta sa mirroring ng mga mensahe, ang **WhatsApp for Windows** at **WhatsApp for WearOS** ay may kasaysayan ng pagharap sa mga limitasyon tungkol sa smb_message_echoes webhook.1 Ito ay nagmumungkahi na ang synchronization protocol ay lubos na na-optimize para sa mga pangunahing mobile operating system (Android at iOS) at ang web-based na protocol, na may mga native na desktop app na minsan ay nahuhuli sa webhook parity.  

**Unsupported Features:**  

Sa paghahangad ng stability, ang ilang mga rich feature ay hindi pinapayagan o inalis kapag dumadaan sa Coexistence bridge:  

* **Group Chats:** Ang Cloud API ay hindi sumusuporta sa Group logic sa parehong paraan ng App. Dahil dito, ang Group Chats ay **hindi sinasynchronize**.1 Ang API ay nananatiling isang mahigpit na 1:1 na channel.  
* **Ephemeral Content:** Ang mga feature tulad ng "View Once" media at "Live Location" sharing ay hindi pinapayagan para sa 1:1 chats sa Coexistence mode.1 Ito ay isang privacy at technical safeguard, dahil ang API ay hindi maaaring patuloy na mag-imbak o magproseso ng ephemeral data sa paraang sumusunod sa ephemeral na katangian ng App feature.  


## **3. Ang Onboarding Odyssey: Embedded Signup & Migration 🚀**  

Ang gateway sa Coexistence ay **Embedded Signup**. Ito ay ang mekanismo kung saan ang isang negosyo ay nagbibigay ng pahintulot sa isang Partner (tulad ng **Seasalt.ai** o **360dialog**) na pamahalaan ang kanilang messaging sa pamamagitan ng API habang pinapanatili ang kanilang numero sa App. Ito ay isang tumpak na workflow na nangangailangan ng partikular na technical flags para magtagumpay.  

### **3.1 Ang "FeatureType" Flag: Ang Lihim na Kamay**  

Para sa isang standard na API onboarding, ang isang developer ay simpleng naglalabas ng Facebook Login flow. Gayunpaman, para ma-trigger ang Coexistence flow—which partikular na tinatanong ang user kung gusto nilang panatilihin ang kanilang existing App history—ang developer ay dapat mag-inject ng isang partikular na configuration sa SDK.

Ang extras object sa configuration ng Facebook Login ay dapat magsama ng featureType parameter na nakatakda sa whatsapp_business_app_onboarding.1  

Kapag ang flag na ito ay naroroon, binabago ng onboarding wizard ang kanyang pag-uugali. Sa halip na pilitin ang user na i-delete ang kanilang account o pumili ng bagong numero, nagpapakita ito ng isang screen na nag-aalok na **"Ikonekta ang iyong kasalukuyang WhatsApp Business account"**.1  

### **3.2 Ang Data Synchronization Window: 24 Oras na Buhay**  

Isa sa pinakamalalim na bentahe ng Coexistence kaysa sa legacy API migration ay ang **History Preservation**. Noong nakaraan, ang paglipat sa API ay nangangahulugang pagkawala ng lahat ng chat history. Ang Coexistence ay nagpapahintulot sa pag-import ng huling **6 na buwan** ng kasaysayan ng pag-uusap.8  

Gayunpaman, hindi ito isang permanenteng estado ng access. Ito ay isang **transient operational window**.  

* **Ang Timer:** Kapag natapos na ng user ang Embedded Signup flow, ang Partner (Developer) ay may eksaktong **24 na oras** para humiling ng unang history sync.1  
* **Ang Oportunidad:** Ang 24-oras na window na ito ay kritikal para sa pagsasanay ng AI. Sa **Seasalt.ai**, ginagamit namin ang window na ito para i-ingest ang mga historical na interaksyon sa aming **SeaChat** RAG (Retrieval Augmented Generation) system.3 Sa pamamagitan ng pagsusuri ng 6 na buwang mga usapang pinamumunuan ng tao, ang AI agent ay maaaring "matuto" ang partikular na tono ng negosyo, mga madalas na tanong, at mga detalye ng produkto bago pa man ito magpadala ng kanyang unang automated na mensahe.  

**Teknikal na Tala:** Kasama sa history sync ang teksto at media ngunit hindi kasama ang mga ephemeral na mensahe na sensitibo sa privacy. Ang mga developer ay dapat na handa na may high-throughput ingestion pipeline (halimbawa, gamit ang **Supabase** o **MongoDB**) para masipsip ang data spike na ito kaagad pagkatapos ng onboarding.9  

### **3.3 Ang Verification Dilemma: Pagkawala ng Blue Badge**  

Isang kritikal na "Second-Order Insight" para sa mga negosyong may mataas na brand equity ay ang katayuan ng **Official Business Account (OBA)**—ang hinahangad na Green Tick o Blue Badge.  

* **Ang Pagbaba:** Kinukumpirma ng dokumentasyon na ang katayuan ng OBA ay **hindi awtomatikong nalilipat** mula sa App patungo sa API.10 Kapag ang isang verified na numero ay na-onboard sa Cloud API, maaari itong pansamantalang mawala ang badge nito.  
* **Ang Pagbawi:** Ang negosyo ay dapat na muling mag-apply para sa katayuan ng OBA sa pamamagitan ng proseso ng verification ng API. Kabilang dito ang pagsusumite muli ng press coverage at domain verification.  
* **Estratehiya:** Dapat ipaalam sa mga negosyo na handa ang kanilang mga verification documents *bago* mag-trigger ng migration para mabawasan ang "Trust Gap"—ang panahon kung saan sila ay hindi verified.  

## ---  

**4\. Ang Webhook Nervous System: Pagpapaunawa sa Pulso 💓**  

Kung ang Coexistence ay ang katawan, ang **Webhooks** ay ang nervous system. Sa isang standard na setup ng API, nakikinig ka para sa mga mensahe. Sa Coexistence, kailangan mong makinig para sa *mga pagbabago ng estado* at *mga echo*.  

### **4.1 Ang Pamilya ng Webhook na "SMB"**  

Ipinakilala ng Meta ang isang partikular na hanay ng mga webhook field na may prefix na smb_ para hawakan ang mga kakaibang kinakailangan ng hybrid na mga account.5  

| Webhook Field | Payload Description | Strategic Function |  
| :---- | :---- | :---- |  
| messages | Karaniwang inbound message object. | **Ang Tainga:** Nakikinig para sa mga query ng customer para i-trigger ang SeaChat AI. |  
| smb_message_echoes | Outbound na mensahe na ipinadala sa pamamagitan ng App. | **Ang Pahinang:** Nagsasabi sa AI na may sumagot nang manu-mano na tao. Kritikal para sa handover logic. |  
| smb_app_state_sync | Mga update sa contact list (pagdaragdag/pag-edit). | **Ang Rolodex:** Nagsi-sync ng mga bagong contact na naka-save sa telepono patungo sa central na CRM/Seasalt.ai dashboard. |  
| history | Historical na dump ng mensahe. | **Ang Memorya:** Naghahatid ng 6-na-buwang backlog para sa pagsasanay ng AI/RAG ingestion. |  

### **4.2 Paghawak sa "Echo" para sa Pamamahala ng Estado**  

Ang smb_message_echoes webhook ay ang pinaka-kakaibang tampok ng Coexistence. Naglalaman ito ng message body at metadata ng kung ano ang na-type ng business user sa kanilang telepono.  

* **Insight:** Ito ay nagbibigay-daan para sa "Shadow Monitoring." Kahit na hindi aktibo ang AI, maaaring suriin ng system ang mga manu-manong sagot ng tao para sa quality assurance (QA) o sentiment analysis.  
* **Panganib:** Kung hindi sumusubscribe ang developer sa field na ito, ang AI ay bulag sa mga aksyon ng tao. Maaaring sumagot ang bot sa isang user *pagkatapos* na resolbahin na ng tao ang isyu, na nagpapakita ng hindi pagkakaugnay ng negosyo.  

### **4.3 Seguridad at Redundancy ng Webhook**  

Dahil ang arkitektura ng Coexistence ay umaasa sa mga real-time na signal na ito para pigilan ang "Bot-Human Collisions," ang pagiging maaasahan ng webhook endpoint ay napakahalaga.  

* **Arkitektura:** Inirerekomenda namin ang isang serverless na arkitektura (halimbawa, AWS Lambda o Google Cloud Functions) para hawakan ang webhook ingestion. Ang mga function na ito ay dapat na walang ibang ginagawa kundi i-validate ang X-Hub-Signature (seguridad), i-push ang payload sa isang queue (SQS/PubSub), at agad na magbalik ng 200 OK status.11  
* **Dahilan:** Kung ang endpoint ay tumatagal ng masyadong mahaba para iproseso ang logic (halimbawa, direktang pagtawag sa OpenAI API sa loob ng webhook handler), magti-timeout ang Meta sa request at iri-retry ito, na posibleng magdulot ng duplicate processing. Ang pag-offload sa isang queue ay tinitiyak na ang 200 OK ay agad na ipinapadala, na pinapanatili ang linya na malinis.11  

## **5\. Ang Routing at Ang Override Protocol: Ang Multi-Partner Mesh 🕸️**

Habang lumalaki ang mga negosyo, kadalasan silang lumalagpas sa isang solong provider ng software. Maaaring gusto nila ang **Seasalt.ai** para sa kanilang AI Chatbot, **Twilio** para sa kanilang OTP authentication, at isang espesyal na carrier para sa Voice. Ang "Override" architecture ng WhatsApp ay ginagawang posible ito sa isang solong numero ng telepono.

### **5.1 Ang Webhook Override Hierarchy**

Ang imprastraktura ng Meta ay nagbibigay-daan para sa granular routing ng webhooks batay sa isang hierarchy ng pagtitiyak. Ito ang "Traffic Control" system ng Coexistence.13

1. **Level 1: Phone Number Override (Pinakamataas na Priyoridad)**  
   * **Logic:** "Kung ang partikular na numero ng telepono na ito ay tumanggap ng kaganapan, ipadala ito sa URL X, anuman ang sinasabi ng WABA."  
   * **Use Case:** Ang isang franchise WABA ay may 50 mga lokasyon. Nais ng Lokasyon A na gumamit ng SeaChat; ang Lokasyon B ay gumagamit ng isang legacy system. Ang override ay nagpapahintulot sa numero ng Lokasyon A na mag-route sa webhooks ng SeaChat nang hindi naaapektuhan ang Lokasyon B.  
   * **API:** POST /\<PHONE_NUMBER_ID\>/subscribed_apps with override_callback_uri.13  
2. **Level 2: WABA Override (Katamtamang Priyoridad)**  
   * **Logic:** "Kung walang phone number override na umiiral, ipadala ang lahat ng kaganapan para sa WABA na ito sa URL Y."  
   * **Use Case:** Nais ng isang brand na ilipat ang kanilang buong account sa isang bagong provider.  
3. **Level 3: App Default (Pinakamababang Priyoridad)**  
   * **Logic:** "Kung walang mga override na umiiral, ipadala sa URL na tinukoy sa App Dashboard."

### **5.2 Ang Chat vs. Voice Split**

Ang isang sopistikadong kakayahan ng Cloud API ay ang kakayahang paghiwalayin ang **Messaging** at **Calling** providers sa parehong numero.

* **Ang Setup:** Maaaring ikonekta ng isang negosyo ang kanilang numero sa Partner A (hal., Seasalt.ai) para sa messages webhooks at Partner B (hal., isang VoIP provider) para sa voice webhooks.14  
* **Ang Benefit:** Nagbibigay-daan ito para sa isang "Best of Breed" stack. Nakukuha ng negosyo ang world-class na NLP ng SeaChat para sa text, ngunit ang high-fidelity na voice termination ng isang dedikadong telecom carrier para sa mga tawag.  
* **Ang Configuration:** Ito ay pinamamahalaan sa pamamagitan ng pagsusubscribe sa kani-kanilang Apps lamang sa mga partikular na field na kailangan nila. Ang App A ay nagsusubscribe sa messages; ang App B ay nagsusubscribe sa voice_status at call_log.14

## **6\. Ang Ekonomiks ng Coexistence: Arbitraging the Hybrid Model 💰**

Ang Coexistence model ay nagpapakilala ng isang kakaibang economic opportunity: ang kakayahang mag-arbitrage sa pagitan ng "Free" Business App at ang "Paid" API. Ang pag-unawa sa **Conversation Categories** ay mahalaga para sa ROI.

### **6.1 Ang Apat na Kategorya ng Gastos**

Noong kalagitnaan ng 2025, ang WhatsApp ay nagsisingil batay sa 24-oras na conversation windows na inisagawa ng mga partikular na template category.15

| Kategorya | Paglalarawan | Cost Profile | Seasalt.ai Optimization Strategy |
| :---- | :---- | :---- | :---- |
| **Marketing** | Mga promosyon, alok, update. | **$$$ (Pinakamataas)** | Gamitin nang paminsan-minsan. I-segment ang mga audience sa pamamagitan ng Seasalt.ai para matiyak ang mataas na conversion. |
| **Utility** | Mga update sa order, resibo. | **$$ (Katamtaman)** | I-automate sa pamamagitan ng API. Kinakailangang gastos sa pagpapatakbo ng negosyo. |
| **Authentication** | Mga OTP, login codes. | **$ (Pinakamababa)** | Mataas na volume, mababang gastos. Kritikal para sa seguridad. |
| **Service** | Mga inquiry na inisagawa ng user. | **LIBRE** (karamihan) | **Ang Sweet Spot.** Ang lahat ng AI support traffic ay nasa dito. |

### **6.2 Ang Coexistence Arbitrage Strategy**

Ang tunay na lakas ng Coexistence ay nakasalalay sa kung paano nakikipag-ugnayan ang mga gastos na ito sa manual na App.

1. **Inbound ay Libre:** Kapag ang isang user ay nagme-message sa negosyo (Service Conversation), ang 24-oras na window ay bubukas. Sa window na ito, maaaring sumagot ang negosyo gamit ang *free-form* na mensahe.  
   * *App:* Ang mga manual na sagot ay libre.  
   * *API:* Ang mga bot na sagot ay libre (walang template cost).  
   * *Result:* **Maaaring resolbahin ng SeaChat** ang 10,000 support tickets sa isang buwan para sa **$0** sa mga bayarin ng WhatsApp, basta't ang user ang nagpasimula ng chat.15  
2. **Outbound Nurture via App:** Ang mga marketing template ay mahal. Gayunpaman, sa Coexistence mode, maaaring magpadala ang isang salesperson ng *manual* na follow-up message sa pamamagitan ng Business App sa isang warm lead. Dahil ito ay isang manual na 1:1 na mensahe mula sa App, hindi ito nagkakaroon ng **API cost**.16  
   * *Caveat:* Hindi ito nagsasala. Perpekto ito para sa pagsasara ng mga high-value na deal (VIPs), ngunit imposible para sa mass marketing.  
3. **Ang 72-Hour Ad Window:** Kapag ang isang user ay nag-click ng isang **Click-to-WhatsApp (CTWA)** ad, ang free entry point window ay pinalawak hanggang sa **72 oras**.17  
   * *Strategy:* Gamitin ang mga ad para mag-drive ng traffic. Kapag sila ay nag-click, may 3 araw ang SeaChat para alagaan, i-qualify, at i-convert ang lead nang libre.

### **6.3 ROI Calculation Table**

*Scenario: E-commerce store na may 5,000 monthly active customers.*

| Operasyon | Legacy Method (SMS/Email) | Pure API (Walang Coexistence) | Coexistence \+ SeaChat |
| :---- | :---- | :---- | :---- |
| **Support (Inbound)** | Mabagal, Email Lag | Mabilis, Paid Tooling | **Mabilis, LIBRE (Service Window)** |
| **Receipts (Utility)** | Mga Gastos sa SMS (\~$0.02/msg) | Utility Rate (\~$0.03/conv) | **Utility Rate (Automated)** |
| **VIP Sales (Outbound)** | Mga Tawag sa Telepono (Mataas na Labor) | Marketing Rate (\~$0.06/conv) | **LIBRE (Manual via App)** |
| **Context** | Fragmented | Dashboard Only | **Unified (Phone \+ Web)** |

## **7\. Human-in-the-Loop: Ang Sining ng Pagpasa 🤝**  

Ang pilosopiya ng "Seasalt.ai" ay itinayo sa walang sagabal na paglipat mula sa AI patungo sa Tao. Sa isang setup ng Coexistence, ang pagpasa na ito ay dapat na teknikal na matatag upang maiwasan ang "Race Conditions" kung saan ang bot at tao ay naglalaban para sa kontrol.  

### **7.1 Ang "Pause" Logic: Isang Teknikal na Malalim na Pagsisiyasat**  

Upang maipatupad ang isang walang salungatan na pagpasa, ang backend system ay dapat na magpapanatili ng isang state machine para sa bawat usapan.  

**Ang "Echo" Trigger:**  

Ang pinakamalakas na signal para sa pagpasa ay ang smb_message_echoes webhook.  

* *Kaganapan:* Ang ahente ng tao ay nagpapadala ng "Hi there, I can help with this" sa pamamagitan ng mobile App.  
* *Webhook:* Tinatanggap ng API ang smb_message_echoes.  
* *Aksyon:* Ang backend ay nagse-set ng isang flag na bot_paused: true at pause_expiry: timestamp + 2 oras sa Redis cache para sa numerong telepono na iyon.18  

**Ang "Resume" Timer:**  

Hindi natin maaaring iwanang naka-pause ang bot magpakailanman. Maaaring pumunta ang tao sa tanghalian o makalimutan na isara ang ticket.  

* *Logic:* Isang background worker (Cron job) ang sumusuri para sa mga expired na pause timer. Kung ang current_time > pause_expiry at ang usapan ay hindi aktibo, ang estado ng bot ay na-reset sa aktibo.  
* *Optimization:* Ang mga advanced na system ay nagpapahintulot sa tao na mag-type ng isang command tulad ng \#resume o \#bot sa App para manwal na muling i-activate ang AI kaagad.19  

### **7.2 Resolusyon ng Salungatan: Ang Problema ng "Double Reply"**  

Ano ang mangyayari kung ang user ay nagpapadala ng 5 larawan sa loob ng 1 segundo?  

* *Ang Problema:* Maaaring mag-spawn ang API ng 5 magkahiwalay na webhook event. Kung pinoproseso ng AI ang mga ito nang parallel, maaari itong magpadala ng 5 magkahiwalay na mensahe na "Hello, how can I help?". Ito ay isang "Race Condition".20  
* *Ang Solusyon:* **Debouncing.** Dapat na magpatupad ang middleware ng isang debounce buffer. Kapag dumating ang unang mensahe, maghintay ng 500ms-1000ms para sa mga kasunod na mensahe. Pagsamahin ang mga ito sa isang solong context block bago ipadala sa LLM (Large Language Model).11  

### **7.3 Mga Tampok ng Seasalt.ai: RAG at Context Extraction**  

Kapag nangyari na ang pagpasa, kailangan ng tao ng konteksto. Hindi nila gustong tanungin ang "Ano ang iyong order number?" kung naipon na ito ng bot.  

* **Context Extraction:** Gumagamit ang SeaChat ng NLP para kunin ang mga entity (Order ID, Email, Intent) mula sa pakikipag-ugnayan ng bot. Ang mga ito ay na-sync sa Seasalt.ai dashboard at maaari pang i-inject sa mga tala ng CRM.21  
* **Pagbubuod:** Kapag binubuksan ng tao ang chat, maaaring bumuo ang Seasalt.ai ng isang 3-bullet na buod ng pakikipag-ugnayan ng bot, na ipapakita bilang isang internal note o system message, na tinitiyak na ang ahente ay agad na makakapag-trabaho.4  


## **8\. Ang Ekosistema ng Kasosyo: Pag-navigate sa Labyrinth 🧭**  

Hindi lahat ng access sa API ay pareho. Upang paganahin ang Coexistence, ang isang negosyo ay dapat na makipagtulungan sa isang **Meta Business Partner**. Mayroong dalawang pangunahing modelo: **Solution Partners** at **Tech Providers**.  

### **8.1 Mga Solution Partner vs. Tech Provider**  

| Tampok | Solution Partner (hal., 360dialog, Twilio) | Tech Provider (Ang "ISV" Route) |  
| :---- | :---- | :---- |  
| **Tungkulin** | Full-service na provider. May-ari ng credit line. | Software vendor. Nagpapadali ng koneksyon. |  
| **Billing** | Nagbabayad ka sa Partner; Nagbabayad ang Partner sa Meta. | Nagbabayad ka diretso sa Meta (karaniwan). |  
| **Onboarding** | Embedded Signup na may Config ng Partner. | Embedded Signup na may Config ng Tech Provider. |  
| **Mga Limitasyon** | Mataas na mga limitasyon sa scaling. | Nakakapos sa ~200 bagong customer/linggo sa simula.22 |  
| **Gamit na Kaso** | Karamihan sa mga negosyo na nangangailangan ng full support. | Mga platform ng SaaS na gumagawa ng sarili nilang "White Label" na WhatsApp. |  

### **8.2 Estruktura ng Account: Shared WABA vs. OBO**  

* **Shared WABA:** Ang negosyo ang may-ari ng WABA ngunit "nagbabahagi" ng access sa Partner. Ito ang moderno, inirerekomendang pamantayan. Nagbibigay ito sa negosyo ng portability; kung papatalsikin nila ang Partner, panatilihin nila ang WABA.23  
* **On-Behalf-Of (OBO):** Ang Partner ang may-ari ng WABA "on behalf of" ng kliyente. Ito ay isang legacy na modelo. Lumilikha ito ng mga panganib ng "Vendor Lock-in". **Rekomendasyon:** Palaging magpilit sa isang Shared WABA na modelo sa pamamagitan ng Embedded Signup upang tiyakin na ikaw ang may-ari ng iyong data at reputasyon ng numerong telepono.23  


## **9\. Pag-troubleshoot at Mga Edge Case: Ang Gabay ng "Overlord" 🛠️**  

Kahit ang pinakamahusay na mga arkitektura ay nahaharap sa totoong mundo na gusot na data. Narito ang mga edge case na nagbabantay sa mga developer.  

### **9.1 Ang "Ghost" Conversation**  

* *Senaryo:* Isang user ang nagme-message. Ang bot ay naka-pause. Ang telepono ng human agent ay patay. Ang user ay nakakakuha ng katahimikan.  
* *Solusyon:* Magpatupad ng isang "Out of Office" na layer ng logic sa middleware. Kung hindi nakita ang smb_message_echoes (sagot ng tao) sa loob ng 15 minuto ng pagpasa, ang system ay magpapadala ng isang fallback na template: "Ang aming human agents ay kasalukuyang abala. Nakatanggap kami ng iyong query at sasagutin namin ito sa lalong madaling panahon.".18  

### **9.2 Block Rate Contagion**

* *Senaryo:* Isang taong ahente ay naging agresibo sa pagbebenta sa App, na nagmemensahe sa 50 taong hindi nag-opt-in. Ang mga user ay nagrereport/bumablock sa numero.  
* *Kinalabasan:* Ang rating ng kalidad ng numerong telepono ay bumababa sa "Mababa."  
* *Epekto:* Ang **API** ay pinapatawan ng parusa. Ang throughput para sa Mga template ng Marketing ay na-throttle, o ang numero ay ganap na binabawal.  
* *Aral:* Ang pagkakasama-sama ay nag-uugnay sa kapalaran ng App at API. Ang masamang pag-uugali sa manual na bahagi ay sumisira sa scalability ng automated na bahagi. Ang mahigpit na pagsasanay para sa mga taong ahente ay hindi napag-uusapan.24

### **9.3 Ang "Hindi Napatunayan" na Pagpapakita ng Pangalan**

* *Isyu:* Sa API, ang "Display Name" ay ipinapakita lamang kung ang numero ay isang Official Business Account (Green Tick). Kung hindi, ang user ay nakikita lamang ang numerong telepono sa header ng chat.  
* *Kumpara:* Sa App, ang pangalan ay kadalasang nakikita mula sa contact card.  
* *Paghihirap:* Maaaring tiwalaan ng mga user ang profile ng App (na mukhang pamilyar) ngunit magdududa sa template ng API (na maaaring mukhang generic).  
* *Solusyon:* Tiyaking ang profile photo at description ay magkapareho sa parehong App at mga setting ng WABA para mapanatili ang visual continuity.25

## **10\. Mga Hinaharap na Panahon: Ang Seasalt.ai Roadmap 🔮**

Ang pagkakasama-sama ay simula pa lamang. Ang pagsasama-sama ng Large Language Models (LLMs), Voice AI, at Omni-channel routing ay lumilikha ng isang hinaharap kung saan ang pagkakaiba sa pagitan ng "App" at "API" ay ganap na mawawala.

### **10.1 Multi-Agent Orchestration**

Tumutungo tayo sa mga sistema kung saan ang isang "Router Agent" (pinapagana ng isang mabilis na modelo tulad ng GPT-4o-mini) ay nakaupo sa entry point. Sinusuri nito ang intensyon ng user at iniroroute ang usapan sa isang "Specialist Agent" (hal., isang Booking Bot, isang Support Bot) o isang "Human Agent."

* **Seasalt.ai Innovation:** Binubuo natin ang mga orchestration layer kung saan ang mga ahente na ito ay maaaring "mag-usap" sa isa't isa sa backend, na nagpapasa ng context JSONs bago pa makita ng user ang isang sagot.26

### **10.2 Ang Voice-Text Continuum**

Sa **SeaVoice**, pinagsasama natin ang voice capabilities diretso sa Coexistence flow.

* *Vision:* Isang user ay nagcha-chat sa WhatsApp. Natatamaan sila ng isang hadlang. Ang AI ay nagpapadala ng isang mensahe: "Gusto mo bang tawagan kita para ipaliwanag?" Ang user ay nag-click ng "Oo." Ang SeaVoice agent ay tumatawag agad sa kanila, na nire-referensya ang context ng chat. Ang recording ng tawag ay pagkatapos ay na-transcribe at ibinabalik sa WhatsApp chat bilang isang buod.4

### **10.3 Konklusyon: Ang Bukas na Pinto**

Ang panahon ng pagpili sa pagitan ng "Human" App at "Robot" API ay tapos na. Ang pagkakasama-sama ay nawasak ang pader na iyon. Pinagkakapantay-pantay nito ang access sa enterprise-grade AI para sa bawat negosyo na mayroong smartphone.

Ang teknolohiya ay kumplikado—webhooks, overrides, JSON payloads, at echo events—ngunit ang kinalabasan ay simple: Mas mahusay na mga usapan.

Sa Seasalt.ai, binuo natin ang Seasalt.ai platform para hawakan ang kumplikadong ito para sa iyo. Pinamamahalaan natin ang routing, ang RAG, ang rate limits, at ang pagsunod sa batas, para maaari kang mag-focus sa mahalaga: ang pagkonekta sa iyong mga customer.

Simulan nang libre. Panatilihin ang iyong telepono. I-on ang AI. Ang hinaharap ay naghihintay. ❤️ 🌊 🤖

## **Appendix: Mga Talahanayan ng Sanggunian**

### **Talahanayan A: Feature Comparison Matrix**

| Feature | Legacy Business App | Pure Cloud API | Coexistence (Hybrid) |
| :---- | :---- | :---- | :---- |
| **Messaging Limit** | Walang Limitasyon (Manual) | Tiered (1k \- Walang Limitasyon) | **Tiered (API) / Walang Limit (App)** |
| **Throughput** | Bilis ng Tao | Mataas (80+ mps) | **May Takdang Limit (20 mps)** |
| **Multi-User** | May Limitasyon (Mga Naka-link na Device) | Walang Limitasyon (sa pamamagitan ng Software) | **Walang Limitasyon (API) \+ Mobile** |
| **Chat History** | Lokal na Backup | Wala (Bagong Simula) | **6-Month Import** |
| **Group Chats** | Oo | Hindi | **Hindi (App lamang, walang sync)** |
| **Automation** | Pangunahin (Away msg) | Advanced (Mga Bot) | **Advanced \+ Manual Override** |
| **Kost** | Libre | Para sa Bawat Mensahe | **Hybrid (App Libre / API Bayad)** |

### **Talahanayan B: Webhook Event Dictionary**

| Pangalan ng Kaganapan | Pinagmulan | Payload Key | Kailangang Gawin na Aksyon |
| :---- | :---- | :---- | :---- |
| messages | User | entry.changes.value.messages | **I-trigger ang Sagot ng Bot** |
| smb\_message\_echoes | Negosyo (App) | ...value.statuses (echo) | **Pausahin ang Bot (Handover)** |
| smb\_app\_state\_sync | Negosyo (App) | ...value.contacts | **I-update ang CRM Contact** |
| template\_category\_update | Meta | ...value.message\_template\_status\_update | **I-update ang Budget Logic** |

### **Talahanayan C: Gabay sa Pag-aayos ng Problema**

| Sintomas | Posibleng Sanhi | Solusyon |
| :---- | :---- | :---- |
| **Nagsasagot ang Bot habang ang tao ay nagi-type** | Kawalan ng smb\_message\_echoes subscription | Mag-subscribe sa Echoes; Implementahin ang Pause logic. |
| **Kawalan ng kasaysayan ng mensahe pagkatapos ng onboard** | Nag-expire ang 24-hour window | **Kritikal na Pagkabigo.** Nawala ang kasaysayan. Subukang muli ang onboarding kung posible. |
| **Mga error na "Rate Limit Exceeded"** | Lumampas sa 20 mps | Implementahin ang Redis Token Bucket sa outbound queue. |
| **Nawala ang Green Tick** | Ang migration ay nag-reset ng OBA status | I-re-submit ang OBA application na may press docs. |
| **Hindi nagsa-sync ang Desktop App** | Hindi sinusuportahang OS (Windows/WearOS) | Gamitin ang Web Browser o MacOS client para sa maaasahang sync. |

#### **Mga Ginamit na Sanggunian**

1. Pagpapaunlad ng mga user ng app na WhatsApp Business (kilala rin bilang "Coexistence") - Meta para sa Mga Developer, na-access noong Enero 28, 2026, [https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/onboarding-business-app-users/](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/onboarding-business-app-users/)  
2. WhatsApp Coexistence - Gamitin ang WhatsApp Business App at API sa Parehong Numero, na-access noong Enero 28, 2026, [https://wetarseel.ai/whatsapp-coexistence-whatsapp-business-app-api-together/](https://wetarseel.ai/whatsapp-coexistence-whatsapp-business-app-api-together/)  
3. Pagpapakilala sa SeaChat - Seasalt.ai, na-access noong Enero 28, 2026, [https://wiki.seasalt.ai/seachat/getting-started/01-seachat-intro/](https://wiki.seasalt.ai/seachat/getting-started/01-seachat-intro/)  
4. Maligayang Pagdating sa Seasalt.ai, isang Collaborative Cloud Contact Center - Seasalt.ai, na-access noong Enero 28, 2026, [https://seasalt.ai/en/blog/18-Seasalt.ai-collab-cloud-contact-center/](https://seasalt.ai/en/blog/18-seax-collab-cloud-contact-center/)  
5. Webhooks | Dokumentasyon para sa Mga Developer, na-access noong Enero 28, 2026, [https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/overview/](https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/overview/)  
6. Paano Pamahalaan ang Mga Automated na WhatsApp Bot para sa Maraming Tenant na May Natatanging Mga Numero ng Telepono sa Isang Multi-Tenant na Aplikasyon? - Stack Overflow, na-access noong Enero 28, 2026, [https://stackoverflow.com/questions/79271628/how-to-manage-automated-whatsapp-bots-for-multiple-tenants-with-unique-phone-num](https://stackoverflow.com/questions/79271628/how-to-manage-automated-whatsapp-bots-for-multiple-tenants-with-unique-phone-num)  
7. Tungkol sa multi-agent | Sentro ng Tulong ng WhatsApp, na-access noong Enero 28, 2026, [https://faq.whatsapp.com/395911122612120](https://faq.whatsapp.com/395911122612120)  
8. WhatsApp Coexistence: Isang Pinakamalakas na Gabay sa Paggamit Nito Para sa Komunikasyon sa WhatsApp - Zixflow, na-access noong Enero 28, 2026, [https://zixflow.com/blog/whatsapp-coexistence/](https://zixflow.com/blog/whatsapp-coexistence/)  
9. Soporte sa WhatsApp ng AI na may Paghahatid ng Tao gamit ang Gemini, Twilio, at Supabase RAG - N8N, na-access noong Enero 28, 2026, [https://n8n.io/workflows/11648-ai-whatsapp-support-with-human-handoff-using-gemini-twilio-and-supabase-rag/](https://n8n.io/workflows/11648-ai-whatsapp-support-with-human-handoff-using-gemini-twilio-and-supabase-rag/)  
10. WhatsApp Coexistence - 360Dialog, na-access noong Enero 28, 2026, [https://docs.360dialog.com/partner/waba-management/whatsapp-coexistence](https://docs.360dialog.com/partner/waba-management/whatsapp-coexistence)  
11. Pagbuo ng Isang Arkitektura ng Webhook na Maaaring Palakihin para sa Mga Custom na Solusyon sa WhatsApp - ChatArchitect, na-access noong Enero 28, 2026, [https://www.chatarchitect.com/news/building-a-scalable-webhook-architecture-for-custom-whatsapp-solutions](https://www.chatarchitect.com/news/building-a-scalable-webhook-architecture-for-custom-whatsapp-solutions)  
12. Ang WhatsApp cloud API ay Nagpapadala ng Paunang Abiso ng Lumang Mensahe na Papasok ng Maraming Beses sa Aking Webhook - Stack Overflow, na-access noong Enero 28, 2026, [https://stackoverflow.com/questions/72894209/whatsapp-cloud-api-sending-old-message-inbound-notification-multiple-time-on-my](https://stackoverflow.com/questions/72894209/whatsapp-cloud-api-sending-old-message-inbound-notification-multiple-time-on-my)  
13. Webhook overrides | Dokumentasyon para sa Mga Developer, na-access noong Enero 28, 2026, [https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/override/](https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/override/)  
14. FAQs | Dokumentasyon para sa Mga Developer, na-access noong Enero 28, 2026, [https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/faq/](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/faq/)  
15. WhatsApp Coexistence Mode (Gabay para sa 2026): Gamitin ang App at API Nang Magkasama + Bagong Presyo, na-access noong Enero 28, 2026, [https://chakrahq.com/article/whatsapp-coexistence-all-about-coexistence-mode-pricing-and-how-to-optimize-cost/](https://chakrahq.com/article/whatsapp-coexistence-all-about-coexistence-mode-pricing-and-how-to-optimize-cost/)  
16. WhatsApp Coexistence: Paggamit ng Numero ng WhatsApp Business App kasama ang WhatsApp API - WANotifier, na-access noong Enero 28, 2026, [https://wanotifier.com/whatsapp-coexistence-guide/](https://wanotifier.com/whatsapp-coexistence-guide/)  
17. Presyo sa Platform ng WhatsApp Business - Meta para sa Mga Developer - Facebook, na-access noong Enero 28, 2026, [https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing](https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing)  
18. Nobyembre 14: Pinahusay na Paghahatid ng Tao-Bot - Turn.io Learn, na-access noong Enero 28, 2026, [https://learn.turn.io/l/en/article/jynv5tspbm-14-nov-inbox-routing-improvements](https://learn.turn.io/l/en/article/jynv5tspbm-14-nov-inbox-routing-improvements)  
19. Pinakamahusay na Alternatibo para sa Paghahatid ng Tao na May AI Agents? : r/n8n - Reddit, na-access noong Enero 28, 2026, [https://www.reddit.com/r/n8n/comments/1ko70xz/best_alternative_for_human_handover_with_ai_agents/](https://www.reddit.com/r/n8n/comments/1ko70xz/best_alternative_for_human_handover_with_ai_agents/)  
20. [Bug]: Channel ng WhatsApp - Ang Kondisyon ng Karera ay Lumilikha ng Maraming Usapan Kapag Nagsisimula ng Chat na May Maraming Larawan (Album) · Isyu #13261 - GitHub, na-access noong Enero 28, 2026, [https://github.com/chatwoot/chatwoot/issues/13261](https://github.com/chatwoot/chatwoot/issues/13261)  
21. Pagsasama ng Seasalt.ai sa WhatsApp - Seasalt.ai, na-access noong Enero 28, 2026, [https://wiki.seasalt.ai/en/seachat/integrations/seax-seachat-whatsapp/](https://wiki.seasalt.ai/en/seachat/integrations/seax-seachat-whatsapp/)  
22. Mga Solusyon para sa Maraming Kasosyo | Dokumentasyon para sa Mga Developer, na-access noong Enero 28, 2026, [https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/multi-partner-solutions/](https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/multi-partner-solutions/)  
23. Pagkakaiba sa Pagitan ng Mga Ibinahagi at Hindi Ibinahagi na Mga Account sa WhatsApp Business (WABAs), na-access noong Enero 28, 2026, [https://api.support.vonage.com/hc/en-us/articles/21336595205532-Difference-Between-Shared-and-Non-Shared-WhatsApp-Business-Accounts-WABAs](https://api.support.vonage.com/hc/en-us/articles/21336595205532-Difference-Between-Shared-and-Non-Shared-WhatsApp-Business-Accounts-WABAs)  
24. Pangkalahatang Tanawin ng Platform ng WhatsApp Business kasama ang Twilio, na-access noong Enero 28, 2026, [https://www.twilio.com/docs/whatsapp/api](https://www.twilio.com/docs/whatsapp/api)  
25. Tungkol sa Platform ng WhatsApp Business - Meta para sa Mga Developer - Facebook, na-access noong Enero 28, 2026, [https://developers.facebook.com/documentation/business-messaging/whatsapp/about-the-platform](https://developers.facebook.com/documentation/business-messaging/whatsapp/about-the-platform)  
26. Paano I-enable ang Mga Sagot na May Ahente sa Totoo Mong Oras sa WhatsApp Gamit ang OWL - Camel AI, na-access noong Enero 28, 2026, [https://www.camel-ai.org/blogs/mcp-servers-whatsapp-owl](https://www.camel-ai.org/blogs/mcp-servers-whatsapp-owl)
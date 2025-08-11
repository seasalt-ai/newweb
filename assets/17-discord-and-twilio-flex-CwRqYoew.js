const a=`---
title: "Discord (3/3): Discord at Twilio Flex: Pagdadala ng Flex Contact Center sa Hindi pa Nalakbay na Teritoryo"
metatitle: "Discord (3/3): Twilio Flex Contact Center sa Discord"
date: 2022-06-07 12:32:24-07:00
modified_date: 2025-07-28T16:56:53Z
draft: false
author: Kim Dodds
description: "Sa blog na ito, ipapakita namin kung paano isinama ng Seasalt.ai ang isang ganap na contact center sa isang Discord server."
weight: 1
tags:
  - SeaX
  - Discord
image: /images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/flex-discord-thumbnail.png
canonicalURL: /blog/discord-and-twilio
url: /blog/discord-and-twilio/
---

*Ito ang aming huling post sa isang serye ng tatlong bahagi tungkol sa pakikipag-ugnayan ng customer sa Discord. Ang aming unang blog, [“Isang Bagong Hangganan para sa Pakikipag-ugnayan ng Customer”](https://seasalt.ai/blog/15-discord-a-new-frontier-for-customer-engagement/), ay tinalakay ang pagtaas ng katanyagan ng Discord, at ang bagong pagkakataon na ipinakita nito para sa mga tatak na lumikha at makilahok sa kanilang sariling mga online na komunidad. Sa ikalawang bahagi, [“Paano Gumawa ng isang Komunidad ng Discord at Bot para sa iyong Tatak”](https://seasalt.ai/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/), tinalakay namin kung paano lumikha ng isang discord server para sa iyong tatak, at kung paano isama ang isang bot upang pamahalaan ang pagmo-moderate ng server, mga anunsyo, feedback ng gumagamit, atbp. Sa wakas, sa blog na ito ay magpapakita kami ng isang demonstrasyon kung paano namin sa Seasalt.ai isinama ang isang ganap na contact center sa isang Discord server, na nagpapahintulot sa mga tatak na pangasiwaan ang lahat ng aspeto ng pangangalaga sa customer sa platform.*

## Talaan ng mga Nilalaman
- [Talaan ng mga Nilalaman](#table-of-contents)
- [Demo ng Serbisyo sa Customer ng Discord](#discord-customer-service-demo)
- [Twilio Flex](#twilio-flex)
- [SeaX](#seax)
- [Demo Server](#demo-server)
  - [Tulong 1-sa-Marami: Mga Opisyal na Channel](#1-to-many-help-official-channels)
  - [Tulong 1-sa-1: Ahente ng Serbisyo sa Customer](#1-to-1-help-customer-service-agent)
    - [Base ng Kaalaman](#knowledge-base)
    - [Paglipat ng Live na Ahente](#live-agent-transfer)
  - [Pamamahala ng Kaso](#case-management)
- [Malalim na Pagsisid sa Teknikal](#technical-deep-dive)
  - [Tukuyin ang Daloy ng Flex](#define-the-flex-flow)
  - [Gumawa ng Pasadyang Channel](#create-a-custom-channel)
  - [Gumawa ng isang HTTP Server upang Suportahan ang Mas Kumplikadong Pagruruta](#create-an-http-server-to-support-more-complex-routing)
    - [Webhook ng mga Papalabas na Mensahe](#outbound-messages-webhook)
    - [Pagsasama ng Bot](#bot-integration)
- [Buod](#summary)

# Demo ng Serbisyo sa Customer ng Discord
Kung sabik kang dumiretso sa punto at makita ang panghuling produkto, ipapakita muna namin ang panghuling video ng demo:

<iframe width="85%" height="450px" src="https://www.youtube.com/embed/iUK4YkGYI6Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>


Ang aming layunin ay ipakita kung paano maaaring isama ang Discord sa umiiral na software ng serbisyo sa customer (sa kasong ito, [Twilio Flex](https://flex.twilio.com/)) upang magdagdag ng karagdagang halaga sa opisyal na server ng isang tatak. Patuloy na basahin para sa isang mas malapit na pagtingin sa aming pagpapatupad.

# Twilio Flex
Ang Twilio ay isang matatag na kumpanya ng komunikasyon na nag-aalok ng mga API para sa pamamahala ng mga text message, tawag sa telepono, email, mensahe sa chat, at higit pa. Ang Flex ay isa sa mga pangunahing produkto ng Twilio: isang nasusukat na contact center na nakabatay sa cloud na nagruruta ng mga mensahe at tawag mula sa anumang mapagkukunan patungo sa mga virtual at live na ahente. Pinili namin ang Flex bilang batayan para sa aming pagsasama ng contact center dahil mayroon na itong mahusay na suporta para sa isang malawak na pagkakaiba-iba ng mga channel, tulad ng Facebook, SMS, at WhatsApp.

# SeaX
Ang SeaX ay isang cloud contact center na malalim na isinama sa mga advanced na tampok ng AI na tumutulong na mapalakas ang pagiging produktibo at kasiyahan ng customer. Ang SeaX ay isa sa mga pangunahing produkto ng Seasalt.ai, at naipalabas na sa mga kliyente sa higit sa 150 mga bansa. Ang platform ng contact center ng SeaX ay binuo sa ibabaw ng Twilio Flex at may kasamang iba't ibang mga karagdagang tampok na nagbibigay-daan sa mga live na ahente na mas mahusay na tulungan ang mga customer. Ang ilan sa mga pinaka-kapaki-pakinabang na tampok ay ang in-house na text-to-speech at speech-to-text, knowledge base na pinapagana ng AI, at integrated case management system. Para sa karagdagang impormasyon tungkol sa lahat ng mga kakayahan ng platform ng SeaX, mangyaring bisitahin ang [homepage ng SeaX](https://seax.seasalt.ai/?utm_source=blog/).

# Demo Server
Ngayon ay tatalakayin natin kung paano namin na-set up ang aming Discord server. Para sa mga layunin ng demo, naisip namin ang isang senaryo kung saan ginamit ang aming server bilang isang komunidad para sa isang laro tulad ng Pokémon Go! Ang sumusunod na talahanayan ay nagbubuod ng ilan sa mga tampok na ipinakita sa aming Discord server.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-features-2.png" alt="Pangkalahatang-ideya ng tampok ng demo na server ng Discord ng serbisyo sa customer."/>

*Pangkalahatang-ideya ng tampok ng demo na server ng Discord.*
</center>

## Tulong 1-sa-Marami: Mga Opisyal na Channel
Maraming mga channel sa server ang naka-set up upang magbigay ng isang direktang stream sa pagitan ng mga opisyal na admin/developer at mga manlalaro.
Ang **channel ng anunsyo** ay maaari lamang i-post ng mga admin at mod, at maaaring magsama ng (manu-mano o awtomatikong) mga post mula sa Twitter account, website, o iba pang mga opisyal na mapagkukunan.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-announcement-channel.jpg" alt="Ang channel ng mga anunsyo sa Discord server, na nagtatampok ng isang post mula sa isang opisyal na Twitter account."/>

*Ang #announcements channel sa demo na Discord server.*
</center>

Ang **channel ng ulat ng bug** ay nagpapahintulot sa mga manlalaro na talakayin ang mga bug at mga isyu na nakakasira ng laro. Maaaring bantayan ng mga admin ang channel na ito upang matukoy ang anumang mga isyu sa laro na dapat i-target. Bukod pa rito, maaaring magsumite ang mga gumagamit ng isang opisyal na ulat ng bug gamit ang \`/bug\` slash command mula sa loob ng channel.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-bug-report-channel.jpg" alt="Ang channel ng ulat ng bug sa Discord server, na nagtatampok ng isang isinumite na ulat ng bug."/>

*Ang #bug-report channel sa demo na Discord server, na nagtatampok ng isang isinumite na ulat ng bug.*
</center>

Ang **channel ng kahilingan ng tampok** ay nagpapahintulot sa mga manlalaro na talakayin ang mga pagbabago sa gameplay, mga pagpapabuti sa kalidad ng buhay, mga pagdaragdag ng nilalaman, atbp. na nais nilang makita na idinagdag sa laro. Katulad ng channel ng kahilingan ng bug, ang kanilang input ay maaaring makita ng mga mod ng discord at maaari nilang gamitin ang \`/new_feature\` slash command upang magsumite ng isang opisyal na kahilingan.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-feature-request-channel.jpg" alt="Ang channel ng kahilingan ng tampok sa Discord server, na nagtatampok ng isang gumagamit na nagsasagawa ng isang slash command."/>

*Ang #feature-request channel sa demo na Discord server, na nagtatampok ng isang gumagamit na nagsasagawa ng isang slash command.*
</center>

## Tulong 1-sa-1: Ahente ng Serbisyo sa Customer

Maaaring gamitin ng mga manlalaro ang \`/helpme\` slash command upang mag-trigger ng isang direktang mensahe sa isang ahente. Ang Ahente ng Serbisyo sa Customer ay maaaring maging awtomatiko (virtual na ahente) o pinamamahalaan ng isang live na ahente.

Para sa aming demo, nag-set up kami ng isang simpleng FAQ bot na nagtatanong sa knowledge base ng kumpanya upang magbigay ng mga nauugnay na mungkahi ng artikulo sa gumagamit. Maaari ring humiling ang gumagamit ng isang live na ahente, at ililipat sa parehong chat sa isang live na ahente sa SeaX.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-customer-service-channel.jpg" alt="Ang channel ng serbisyo sa customer sa Discord server, na nagtatampok ng isang gumagamit na nagti-trigger ng isang DM."/>

*Ang #feature-request channel sa demo na Discord server, na nagtatampok ng isang gumagamit na nagti-trigger ng isang DM.*
</center>

### Base ng Kaalaman
Kapag nagsumite ang gumagamit ng isang query sa virtual na ahente ng serbisyo, maaaring i-refer ng ahente ang gumagamit sa mga nauugnay na artikulo sa knowledge base.

### Paglipat ng Live na Ahente
Kapag ang isang gumagamit ay nasa isang direktang mensahe sa bot, maaari silang humiling ng isang live na ahente. Agad silang aabisuhan na isang kaso ang nilikha para sa kanila, at na sila ay inililipat sa isang live na ahente. Kapag sumali ang live na ahente sa chat, makakatanggap din sila ng isang abiso.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-customer-service-dm.jpg" alt="Isang direktang mensahe sa serbisyo sa customer, na nagtatampok ng mga mungkahi ng artikulo sa KB, paglipat ng live na ahente, at pamamahala ng kaso."/>

*Isang direktang mensahe sa serbisyo sa customer, na nagtatampok ng mga mungkahi ng artikulo sa KB, paglipat ng live na ahente, at pamamahala ng kaso.*
</center>

Sa backend, maaaring pangasiwaan ng mga live na ahente ang mga papasok na tawag at mensahe sa chat mula sa lahat ng mga channel (SMS, Facebook, Discord, voice call, atbp.) sa pamamagitan ng isang solong platform. Sa kasong ito, ang backend platform ay SeaX.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/flex-discord-channel.jpg" alt="Ang interface ng SeaX na nagpapakita ng view ng live na ahente ng isang pag-uusap sa isang gumagamit sa Discord."/>

*Ang interface ng SeaX na nagpapakita ng view ng live na ahente ng isang pag-uusap sa isang gumagamit sa Discord.*
</center>

## Pamamahala ng Kaso
Isang tampok na nais naming bigyang-diin sa demo na ito ay ang pamamahala ng kaso. Ang solusyon ng Discord ng Seasalt.ai ay isinasama sa sistema ng pamamahala ng kaso ng SeaX upang maayos na masubaybayan ang iba't ibang mga kaso mula sa mga gumagamit. Kapag nakikipag-ugnayan ang isang gumagamit sa Discord bot (tulad ng paghiling ng isang live na ahente o pag-uulat ng isang bug), maaari naming awtomatikong buksan ang isang bagong kaso at i-log ang lahat ng mahalagang impormasyon tungkol sa gumagamit at sa isyu na kanilang nararanasan. Nagbibigay-daan ito sa live na ahente na magkaroon ng madaling pag-access sa lahat ng mga naiulat na isyu, at tiyakin na sinusundan nila ang mga gumagamit hanggang sa malutas ang kaso.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-new-case.png" alt="Paglikha ng isang bagong kaso sa sistema ng pamamahala ng kaso ng SeaX."/>

*Paglikha ng isang bagong kaso sa sistema ng pamamahala ng kaso ng SeaX.*

<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-existing-case.png" alt="Pagtingin sa isang umiiral na kaso sa sistema ng pamamahala ng kaso ng SeaX."/>

*Pagtingin sa isang umiiral na kaso sa sistema ng pamamahala ng kaso ng SeaX.*

</center>

# Malalim na Pagsisid sa Teknikal

Ngayon ay nakita na natin ang panghuling produkto at lahat ng mga tampok na magagamit sa mga miyembro ng server at sa mga live na ahente na tumutulong sa kanila. Ngunit paano ba talaga ipinatupad ang buong bagay? Sa aming huling post sa blog, “[Paano Gumawa ng isang Komunidad ng Discord at Bot para sa iyong Tatak](https://seasalt.ai/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/)”, tinalakay namin kung paano lumikha ng server ng Discord para sa iyong tatak at kung paano isama ang isang Discord bot upang pamahalaan ito. Upang suportahan ang mas advanced na demo na ito, ginamit din namin ang [SeaChat, ang Conversational AI engine ng Seasalt.ai](https://chat.seasalt.ai), upang bumuo ng isang simpleng chatbot na nagpapahintulot sa aming Discord bot na pangasiwaan ang mga query sa natural na wika para sa mga gumagamit.

Sa panig ng SeaX, malapit na nakipagtulungan ang aming koponan sa Twilio upang lumikha ng isang solusyon sa contact center na puno ng tampok na binuilt sa ibabaw ng Twilio Flex. Para sa karagdagang impormasyon tungkol sa Twilio Flex at kung paano gumagana ang proseso ng pag-set up, maaari mong basahin ang [Gabay sa Mabilis na Pagsisimula ng Twilio Flex](https://www.twilio.com/docs/flex/quickstart).

Pagkatapos ihanda ang Discord server, Discord bot, at chatbot at tiyakin na mayroon kaming isang gumaganang instance ng SeaX na tumatakbo, ang pinakamalaking hamon ay ang maayos na pagruruta ng mga mensahe papunta at mula sa gumagamit, bot, at mga live na ahente sa SeaX. Ang Twilio ay kamangha-mangha sa paghawak ng pagruruta ng mensahe, kaya ang aming layunin ay pangasiwaan ang lahat ng mga slash command mula sa loob ng aming Discord bot server, at pagkatapos ay ipasa ang lahat ng iba pang mga mensahe (tulad ng mga direktang mensahe sa chatbot o live na ahente) sa Twilio.

## Tukuyin ang Daloy ng Flex
Ang unang hakbang ay tiyakin na ang anumang mga mensahe na ipinapadala namin sa Twilio ay iruruta sa tamang lugar. Nag-set up kami ng isang simpleng daloy ng Twilio na unang sinusuri kung humiling ang gumagamit ng isang live na ahente, at kung gayon ay ipinapasa ang mga sumusunod na mensahe sa SeaX. Kung hindi humiling ang gumagamit ng isang live na ahente, ipinapasa namin ang mensahe sa chatbot upang makakuha ng isang tugon. Para sa karagdagang impormasyon tungkol sa kung paano i-set up ang daloy, sumangguni sa [dokumentasyon ng Twilio Studio Flow](https://www.twilio.com/docs/studio).

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-flow.png" alt="Isang simpleng Daloy ng Flex Studio na nagruruta ng mga papasok na mensahe sa isang chatbot o sa SeaX."/>

*Isang simpleng Daloy ng Flex Studio na nagruruta ng mga papasok na mensahe sa isang chatbot o sa SeaX.*
</center>

## Gumawa ng Pasadyang Channel
Kaya ngayon ay mayroon na tayong ideya kung paano iruruta ang mga papasok na mensahe. Gayunpaman, ang Discord ay hindi isang natively na sinusuportahang channel ng Twilio. Sa kabutihang palad, mayroong isang detalyadong tutorial ang Twilio kung paano [Magdagdag ng isang Pasadyang Channel ng Chat sa Twilio Flex](https://www.twilio.com/blog/add-custom-chat-channel-twilio-flex). Pagkatapos sundin ang gabay upang i-set up ang bagong pasadyang channel sa Twilio, kailangan nating aktwal na ipasa ang mga mensahe mula sa Discord sa Twilio.

Una, i-set up natin ang kliyente ng Twilio:

\`\`\`python
from twilio.rest import Client
twilio_client = Client(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)
\`\`\`

Ngayon, sa sandaling makatanggap tayo ng isang papasok na mensahe mula sa Discord, maaari nating ipasa ang mensaheng iyon sa Twilio sa pamamagitan ng kliyente ng Twilio. Una, dapat nating suriin kung mayroon nang gumagamit sa sistema ng Twilio, at kung mayroon na silang bukas na channel ng chat.

\`\`\`python
# tawagan ang paraan ng get_user upang suriin kung mayroon nang gumagamit, at lumikha ng bago kung wala
user = await get_user(user_id, twilio_client, TWILIO_SERVICE_SID)

# kunin ang mga channel kung saan naroroon ang gumagamit
user_channels = twilio_client.chat \\
        .services(TWILIO_SERVICE_SID) \\
        .users(user_id) \\
        .user_channels \\
        .list()
\`\`\`

Kung mayroon nang bukas na channel ng chat ang gumagamit, kailangan nating gamitin iyon upang magkaroon tayo ng access sa kasaysayan ng chat. Kung walang umiiral na channel ng chat, lilikha tayo ng bago para sa gumagamit:

\`\`\`python
if user_channels:
    channel_sid = user_channels[-1].channel_sid
else:
    channel = twilio_client.flex_api \\
            .channel \\
            .create(
                flex_flow_sid=FLEX_FLOW_ID,
                chat_user_friendly_name=username,
                chat_friendly_name=chat_name,  # -> Ang magiliw na pangalan ng channel ng chat
                target=conversation_id,  # -> Ang pagkakakilanlan na natatanging tumutukoy sa gumagamit ng chat
                identity=conversation_id,  # -> Ang gumagamit, hal./ ang Discord DM ID
        )
    channel_sid = channel.sid
\`\`\`

Sa wakas, sa sandaling magkaroon tayo ng isang bukas na channel ng chat sa pagitan ng gumagamit ng Discord at Twilio, maaari nating ipasa ang papasok na mensahe sa daloy ng Twilio Studio.

\`\`\`python
message = twilio_client.chat \\
        .services(TWILIO_SERVICE_SID) \\
        .channels(channel_sid) \\
        .messages \\
        .create(
            body=message_text,
            from_=user_id,
            x_twilio_webhook_enabled='true',
            attributes=json.dumps(message_json)  # ipadala ang mga header bilang katangian upang ma-access ito sa ibang pagkakataon
        )
\`\`\`
Ngayon ay mayroon na tayong kakayahang ipasa ang lahat ng ating mga papasok na mensahe mula sa mga gumagamit ng Discord nang direkta sa ating Daloy ng Twilio Flex. Sa panig ng Discord bot, tiyaking ipinapasa ang lahat ng mga direktang mensahe sa Twilio. Ngayon ay maaari mong subukang magpadala ng isang direktang mensahe sa Discord bot, at dapat mo itong makita na lumilitaw sa mga log ng Daloy ng Twilio Studio - Ngunit hindi pa tayo tapos!

## Gumawa ng isang HTTP Server upang Suportahan ang Mas Kumplikadong Pagruruta

### Webhook ng mga Papalabas na Mensahe
Kaya ngayon ay mayroon na tayong ideya kung paano iruruta ang ating mga papasok na mensahe. Gayunpaman, mayroon pa tayong ilang mga piraso na nawawala. Una sa lahat, alam natin na maaari na nating makuha ang mga mensahe sa Twilio ngayon, ngunit paano tayo tutugon sa ating mga gumagamit sa Discord? Ang ating Discord bot ang tanging bagay na awtorisadong magpadala ng mga mensahe sa ating Discord server at mga gumagamit, at hindi alam ng Twilio kung paano ibabalik ang ating mga mensahe sa Discord server pa rin. Ang solusyon ay, kailangan nating mag-set up ng isang webhook ng mga papalabas na mensahe na magti-trigger sa tuwing may bagong mensahe sa channel ng chat ng Twilio. Sa loob ng webhook na iyon, maaari nating gamitin ang ating Discord bot upang ipasa ang mensahe pabalik sa ating server.

Upang gawin ito, isinasama natin ang ating Discord bot sa isang mas matatag na HTTP server. Ginamit namin ang [FastAPI](https://fastapi.tiangolo.com/) upang mag-set up ng isang simpleng POST endpoint na magsisilbing ating webhook ng mga papalabas na mensahe. Sa sandaling ma-set up na natin ang server at tumatakbo na ang ating Discord bot kasama nito, maaari na nating tukuyin ang POST endpoint.

Ang endpoint na ito ay tatanggap ng bawat solong mensahe na idinagdag sa channel ng chat, kaya gusto muna nating i-filter ang lahat maliban sa mga papalabas na mensahe mula sa SeaX. Susunod, kakailanganin nating kunin ang tamang channel ID mula sa katawan ng mensahe upang malaman natin kung saan ipapasa ang mensahe. Sa wakas, maaari nating gamitin ang kliyente ng Discord upang ipasa ang mensahe sa channel ng Discord.

\`\`\`python
@app.post("/forward-to-discord", status_code=200)
async def forward_discord_message(request: Request, response: Response) -> None:
    raw_body = await request.body()
    body = urllib.parse.parse_qs(raw_body.decode())

    # bigyang-pansin lamang ang mga mensahe mula sa SDK (Flex, lahat ng iba pa ay mula sa API)
    if not body.get('Source') == ['SDK']:
        return

    # Ang mga mensahe mula sa Flex ay hindi naglalaman ng conversationId ng orihinal na mensahe
    # Kailangan natin ang convId upang maipadala ang mensahe pabalik sa pag-uusap sa GBM
    # Kunin ang nakaraang mensahe at i-extract ang conversationId
    message = twilio_client.chat \\
            .services(TWILIO_SERVICE_SID) \\
            .channels(body.get("ChannelSid")[0]) \\
            .messages.list(limit=1)[0]

    attributes = json.loads(message.attributes)

    channel = discord_client.get_channel(attributes.get(“channel”, {}).get(“id”))
    if channel:
        await channel.send(body.get("Body", [""])[0].get(“text”))
    else:
        logger.error(f"Hindi mahanap ang Discord channel na may ID: {get_channel_id(req)}!")
        response.status_code = 400
\`\`\`

Sa wakas, upang maipadala ang mga mensahe sa ating endpoint, kailangan nating ipaalam sa Twilio kung ano ang ating bagong webhook. Ang bawat channel ng chat ay kailangang magkaroon ng sarili nitong naka-configure na webhook. Kaya, kung babalikan natin kung saan natin unang nilikha ang bagong channel ng chat para sa gumagamit, maaari tayong magdagdag ng ilang karagdagang code upang i-configure ang webhook:

\`\`\`python
webhook = twilio_client.chat \\
        .services(TWILIO_SERVICE_SID) \\
        .channels(channel_sid) \\
        .webhooks \\
        .create(
            type='webhook',   
configuration_url=f"{SERVER_HOST}/forward-to-discord",
            configuration_method="POST",
            configuration_filters=["onMessageSent", "onMessageUpdated", "onMediaMessageSent"]
        )
\`\`\`

### Pagsasama ng Bot

Kaya ngayon ang mga papalabas na mensahe mula sa SeaX ay dapat na maayos na iruruta pabalik sa ating Discord server. Ngunit hindi pa rin natin natutugunan ang mga mensahe na napupunta sa chatbot. Kailangan nating mag-set up ng isang panghuling endpoint na magti-trigger mula sa Daloy ng Twilio Studio at tatanggap ng mensahe ng gumagamit, magtatanong sa bot, at ibabalik ang tugon sa Discord.

\`\`\`python
@app.post("/chatbot-to-discord", status_code=200)
async def receive_discord_message(request: Request, response: Response):
    """Tumanggap ng POST request mula sa Twilio, magtanong sa bot, at ibalik ang tugon sa Discord."""
    req = await request.body()
    # paghiwalayin ang orihinal na katawan ng mensahe mula sa nilalaman ng twilio
    twilio_body, original_message_body = separate_original_message_body(req.decode())

    bot_response = await query_bot(original_message_body, bot_info)

    if bot_response:
        channel = discord_client.get_channel(original_message_body.get(“channel_id”))
        if channel:
            for item in bot_response:
                await channel.send(item.get(“text”))
\`\`\`

Tiyaking may tamang webhook ang Daloy ng Twilio Studio upang iruta ang mga mensahe sa bot. Ngayon ay natapos na natin ang ating pagruruta ng mensahe! Makikita natin ang isang top-level na view ng lahat ng pagruruta ng mensahe sa diagram na ito:

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-routing-diagram.jpg" alt="Diagram ng pagruruta ng mensahe."/>

*Diagram ng pagruruta ng mensahe.*
</center>

# Buod
Upang tapusin, sa serye ng blog na ito ay tinalakay natin ang pagtaas ng katanyagan ng Discord at ang pagkakataon na ipinakita nito sa mga tatak bilang isang bagong platform upang makipag-ugnayan sa mga customer. Tinalakay natin ang ilan sa mga pangunahing tampok ng Discord, upang ipakita kung paano maaaring mag-set up ang isang tatak ng kanilang sariling online na komunidad, pati na rin ang mga mas advanced na tampok na nagpapahintulot sa mga tatak na i-automate ang pagmo-moderate at suporta sa customer sa kanilang server gamit ang mga Discord bot. Sa wakas, ibinahagi namin ang aming demonstrasyon kung paano namin isinama ang Discord sa aming platform ng serbisyo sa customer, ang SeaX, upang magdala ng mga advanced na tampok sa komunidad ng Discord, tulad ng paglipat ng live na ahente, pamamahala ng kaso, at paghahanap sa knowledge base na pinapagana ng AI.
Para sa isang personal na demo, o upang makita kung paano makakatulong ang Seasalt.ai na matugunan ang iyong mga partikular na pangangailangan sa negosyo, mangyaring punan ang aming form na “[Mag-book ng Demo](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting)”. Para sa karagdagang impormasyon tungkol sa pagsasama ng Flex/Discord o upang makipag-ugnayan sa amin, mangyaring bisitahin ang [Listahan ng Kasosyo ng Twilio ng Seasalt.ai](https://showcase.twilio.com/partner-listing/a8E8Z000000PDCQUA4).`;export{a as default};

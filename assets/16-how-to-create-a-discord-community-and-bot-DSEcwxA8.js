const a=`---
title: "Discord (2/3): Paano Gumawa ng Discord Community at Bot para sa Iyong Brand"
metatitle: "Discord (2/3): Gumawa ng Discord Community at Bot ng Iyong Brand"
date: 2022-05-31 13:29:51-07:00
modified_date: 2025-08-06 10:59:10+09:00
draft: false
author: Kim Dodds
description: "Sa blog na ito, tatalakayin natin ang paggawa ng server para sa iyong brand at pagkonekta ng bot, na maaaring mag-automate ng moderation, bug reporting, announcements, atbp."
weight: 1
tags:
  - SeaX
  - Discord
image: /images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-community-and-bot-for-your-brand.jpg
canonicalURL: /blog/create-a-discord-community-and-bot/
url: /blog/create-a-discord-community-and-bot/
---

*Ang aming blog post, [“Discord: Isang Bagong Henerasyon para sa Customer Engagement”](https.seasalt.ai/blog/15-discord-a-new-frontier-for-customer-engagement/), ay tumalakay sa pag-usbong ng kasikatan ng Discord, at kung paano maaaring samantalahin ng mga brand ang bagong social platform na ito upang bumuo ng kanilang sariling mga online community at makipag-ugnayan sa mga customer. Sa blog na ito, tatalakayin natin kung paano gumawa ng bagong opisyal na server para sa iyong brand, kasama na ang kung paano ikonekta ang isang bot, na maaaring mag-automate ng mga gawain tulad ng moderation, pag-uulat ng bug, mga anunsyo, atbp.*

## Talaan ng mga Nilalaman
- [Pag-set up ng Server](#pag-set-up-ng-server)
    - [Gumawa ng Bagong Discord Server](#gumawa-ng-bagong-discord-server)
    - [Gawing "Community Server" ang Server](#gawing-community-server-ang-server)
    - [Mag-set up ng mga Channel, Event, at Iba Pang Feature](#mag-set-up-ng-mga-channel-event-at-iba-pang-feature)
    - [Ipagkalat ang Balita!](#ipagkalat-ang-balita)
- [Pag-set up ng Discord Bot](#pag-set-up-ng-discord-bot)
    - [Gumawa ng Bagong Bot sa Discord Developer Portal](#gumawa-ng-bagong-bot-sa-discord-developer-portal)
    - [Gumawa ng Simpleng Discord Bot gamit ang PyCord](#gumawa-ng-simpleng-discord-bot-gamit-ang-pycord)
    - [Anyayahan ang Discord Bot](#anyayahan-ang-discord-bot)
    - [Subukan ang Integration](#subukan-ang-integration)

# Pag-set up ng Server

## Gumawa ng Bagong Discord Server
Mula sa loob ng Discord application, i-click ang "Add Server" na button sa ibabang kaliwang bahagi.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/create-new-discord-server.png" alt="Paggawa ng bagong Discord server."/>

*Prompt kapag gumagawa ng bagong Discord server.*
</center>

Maaari kang pumili mula sa isang template kung gusto mong magsimula na may ilang mga channel na nilikha para sa iyo, o maaari kang magsimula sa simula. At ang unang hakbang ay ganoon kadali, ang iyong server ay nalikha na!

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/new-discord-server.png" alt="Isang bagong likhang Discord server."/>

*Isang bagong likhang Discord server.*
</center>

## Gawing "Community Server" ang Server

Lubos na inirerekomenda na i-enable ang mga "community" feature ng Discord server. Sa pamamagitan ng pag-convert sa isang community server, binibigyan mo ng bisa ang mga karagdagang tool na makakatulong sa pag-moderate, pagpapatakbo, at pagpapalago ng server. Sa partikular, ang mga community server ay may access sa mga sumusunod na feature:

- **Welcome Screen**: Ipinapakilala ang mga bagong user sa iyong server
- **Announcement Channel**: Nagbibigay-daan sa iyo na mag-broadcast ng mga mensahe sa iyong mga user
- **Server Insights**: Tingnan ang analytics tungkol sa iyong community at mga user
- **Discovery**: I-advertise ang iyong community sa Server Directory ng Discord

Sa tabi ng pangalan ng server sa itaas na kaliwang sulok, i-click ang drop down at piliin ang "Server Settings". I-click ang "Enable Community" tab sa kaliwang bahagi at piliin ang "Get Started".

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/convert-to-community-discord-server.png" alt="Pag-convert ng isang regular na Discord server sa isang community server."/>

*Pag-enable sa mga setting ng community server.*
</center>

Magpatuloy sa kinakailangang setup. Ang pag-enable sa community ay nangangailangan na ang iyong server ay magsagawa ng karagdagang verification para sa mga user, mag-enable ng chat filter, at mag-set up ng isang rules channel.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-community-setup.png" alt="Setup para sa isang community Discord server."/>

*Pag-set up ng community server.*
</center>

Kapag na-enable mo na ang community, mayroon ka nang access sa ilang mga bagong feature. Dalawa sa mga pinaka-kapaki-pakinabang na feature ay ang welcome message at ang membership screening:

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-server-welcome-page.png" alt="Halimbawa ng welcome message ng server."/>

*Halimbawa ng welcome message ng server.*

<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-server-membership-screening.png" alt="Mga setting ng membership screening."/>

*Mga setting ng membership screening.*
</center>

## Mag-set up ng mga Channel, Event, at Iba Pang Feature
Pagkatapos i-set up ang community server, mayroon ka ring access sa mga bagong feature mula sa pangunahing pahina ng server.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-server-channel-types.png" alt="Paggawa ng bagong channel sa isang Discord server." style="width:50%"/>

*Paggawa ng bagong channel.*

<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-server-channels.png" alt="Halimbawa ng mga channel ng isang Discord community server." style="width:50%"/>

*Mga channel ng community server.*
</center>

Kapag gumawa ka ng bagong channel, mayroon kang access sa dalawang bagong uri ng channel: announcement at stage. Ang announcement channel ay maaari lamang i-post ng mga moderator, at kapaki-pakinabang para sa mga opisyal na post at anunsyo - maraming server ang may mga bot na awtomatikong nagpo-post ng kanilang opisyal na twitter feed o mga post sa forum sa channel na ito. Ang "stage" channel ay isang espesyal na uri ng voice channel na kapaki-pakinabang para sa pagho-host ng mga event na may live na audience. Ang host ay may kakayahang i-moderate ang ibang mga speaker (hindi tulad sa isang regular na voice channel, kung saan ito ay isang free-for-all).

Kapag na-set up na ang lahat sa iyong server, maaaring ganito ang magiging hitsura nito:

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/customized-discord-server.png" alt="Ganap na na-customize na Discord server."/>

*Ganap na na-customize na community server.*
</center>

## Ipagkalat ang Balita!
Kapag na-set up na ang lahat sa iyong server, maaari ka nang magsimulang mag-imbita ng mga tao!
Nag-aalok ang Discord ng isang libreng pre-made na widget, na maaaring i-embed sa anumang website upang i-advertise ang iyong server.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-server-widget.png" alt="Mga setting ng Discord server widget."/>

*Mga setting ng server widget.*

<iframe src="https://discordapp.com/widget?id=966505646944055326&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>

*Isang halimbawa ng gumaganang widget para sa Near Me Messaging Discord server ng Seasalt.ai.*

</center>

Upang bumuo ng tiwala sa mga potensyal na user, maaari kang opsyonal na makipag-ugnayan sa suporta ng Discord upang ma-verify ang iyong server. Ang pag-verify ay maglalagay ng isang "verified" na icon sa tabi ng pangalan ng iyong server na nagpapahiwatig na ang server ay ang opisyal na kaakibat na komunidad ng isang negosyo, brand, at figure ng pampublikong interes. Maaari mong makita ang mga kinakailangan sa pag-verify sa [opisyal na site ng Discord](https://support.discord.com/hc/en-us/articles/360001107231-Verified-Server-Requirements).

Kapag nagsimula na ang iyong server at mayroon nang sapat na bilang ng mga user, nag-aalok ang Discord ng mas maraming pagkakataon upang i-advertise ang iyong server sa loob. Kapag ang iyong server ay hindi bababa sa 8 linggo na at may 500+ na user, maaari kang mag-apply para sa Discord partnership, na nagbibigay sa iyong server ng mga espesyal na perk na eksklusibo sa partner. Kapag umabot ka sa 1,000+ na user, maaari kang sumali sa Server Discovery, na magbibigay-daan sa sinumang gumagamit ng Discord na matuklasan at sumali sa iyong server.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-server-discovery.png" alt="Mga setting at kinakailangan ng Discord Discovery."/>

*Mga setting at kinakailangan ng Discord Discovery.*
</center>

# Pag-set up ng Discord Bot
Ngayong nakapag-set up ka na ng server, maaari mo itong pagandahin sa pamamagitan ng pagdaragdag ng bot upang i-automate ang ilang proseso, tulad ng moderation, feedback ng user, at mga anunsyo. Patuloy na basahin ang sumusunod na seksyon upang malaman kung paano mag-set up ng isang simpleng bot, at pagkatapos ay abangan ang susunod na blog sa aming serye upang makita kung paano mo maaaring i-integrate ang isang ganap na karanasan sa serbisyo sa customer sa loob ng iyong discord server.

## Gumawa ng Bagong Bot sa Discord Developer Portal
Gumawa ng account sa [Discord Developer Portal](https://discord.com/developers/applications). Gumawa ng "New Application" at pangalanan ito.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/new-discord-application.png" alt="Gumawa ng bagong application sa Discord Developer Portal."/>

*Discord developer dashboard: Applications.*
</center>

Piliin ang iyong bagong application at i-click ang "Bot" tab sa kaliwang bahagi.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/new-discord-bot.png" alt="Mga setting ng Bot ng Application."/>

*Mga setting ng Discord application.*
</center>

I-click ang "Add Bot" para gawin ang iyong discord bot.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-bot-settings.png" alt="Gumawa ng bagong Discord bot."/>

*Paggawa ng bagong Discord bot.*
</center>

Kapag nagawa na, i-generate at kopyahin ang bot token. Sa wakas, tiyakin na naka-on ang mga pahintulot sa pagmemensahe.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-bot-messaging-permissions.png" alt="Mga pahintulot sa pagmemensahe ng Discord Bot."/>

*Paggawa ng bagong Discord bot.*
</center>

## Gumawa ng Simpleng Discord Bot gamit ang PyCord

Ginagamit namin ang [PyCord library](https://docs.pycord.dev/en/master/) bilang isang Python wrapper para sa Discord API.

1.  I-install ang PyCord at gumawa ng bagong Python file para sa iyong discord bot.
2.  I-import ang discord package at gumawa ng instance ng discord client.
3.  Gamitin ang event wrapper ng client upang lumikha ng isang on_message method. Ang method na ito ay tatanggap ng bawat mensahe na ipinadala sa isang channel na may access ang bot.
    a. Sa loob ng method, suriin muna kung ang mensahe ay mula sa bot mismo, at huwag pansinin kung ganoon.
    b. Kung hindi, magsisimula tayo sa pamamagitan lamang ng pag-react sa mga mensahe na nagsisimula sa \`$bot\` - kung ang mensahe ay nagsisimula dito, tutugon lang tayo sa parehong channel na nagsasabing \`Nakuha ko ang iyong mensahe!\`.
4.  Sa wakas, sa dulo ng script, tiyakin na patakbuhin ang discord client upang magsimula itong makinig sa mga event sa channel.

\`\`\`python
import discord

discord_client = discord.Bot()
discord_token = "xxxxxxxxxxxx"
 
@discord_client.event
async def on_message(message):
    """Makinig at mag-react sa mga mensahe."""
    # Suriin kung ang mensahe ay mula sa bot mismo
    if message.author == discord_client.user:
        return

    msg = message.content
    if msg.startswith("$bot") or isinstance(message.channel, discord.DMChannel):
        await message.channel.send("Nakuha ko ang iyong mensahe!")

discord_client.run(discord_token)
\`\`\`

## Anyayahan ang Discord Bot

Upang anyayahan ang bot sa iyong server, kailangan mong bumuo ng isang URL ng imbitasyon. Sa Discord Developer Portal, i-click ang "OAuth2" tab sa kaliwang bahagi, at pagkatapos ay i-click ang "URL Generator". Piliin ang "bot" sa ilalim ng "Scopes" at pagkatapos ay piliin ang "Send Messages" sa ilalim ng "Bot Permissions". Kopyahin ang nabuong URL at i-paste ito sa iyong browser. Piliin ang server na gusto mong anyayahan ang bot at i-click ang "Authorize".

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-bot-invite-url.png" alt="Bumuo ng URL ng imbitasyon ng Discord bot."/>

*Bumuo ng URL ng imbitasyon ng Discord bot.*
</center>

## Subukan ang Integration

Ngayon, sa loob ng iyong Discord server, i-type ang \`$bot hello\` sa anumang channel na may access ang bot. Dapat kang makakuha ng tugon mula sa bot na nagsasabing \`Nakuha ko ang iyong mensahe!\`

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-bot-test-integration.png" alt="Subukan ang integrasyon ng Discord bot."/>

*Subukan ang integrasyon ng Discord bot.*
</center>

Abangan ang huling post sa aming serye ng blog, na tatalakayin kung paano namin ginamit ang aming produkto, ang SeaX, upang ikonekta ang contact center platform ng Twilio Flex sa isang community Discord server. Ang integration na ito ay nagbibigay-daan sa mga brand na hindi lamang magtaguyod ng komunidad sa kanilang mga customer, kundi pati na rin mapanatili ang isang direktang channel ng komunikasyon at tugunan ang mga problema mula mismo sa loob ng online na komunidad.

Para sa karagdagang impormasyon tungkol sa alinman sa aming mga solusyon, bisitahin ang Product Wiki ng Seasalt.ai - o punan ang form na "Mag-book ng Demo" upang makakuha ng firsthand na pagtingin.`;export{a as default};

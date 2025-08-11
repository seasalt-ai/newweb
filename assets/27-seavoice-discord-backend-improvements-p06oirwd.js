const a=`---
title: "SeaVoice STT/TTS Discord Bot: Mga Pagpapabuti sa Backend at Katatagan"
metatitle: "SeaVoice STT/TTS Discord Bot: Mga Pagpapabuti sa Backend at ..."
date: 2022-12-13 11:58:34-08:00
modified_date: 2025-07-28T16:56:53Z
draft: false
author: Sydney Burgess, Kim Dodds, Drake Farmer, Jack Harvison, Dylan Strong, Cody Vernon
description: "Sa pinakabagong release, ang SeaVoice Discord Bot ay naglulunsad ng malawakang pagpapabuti sa backend na nagpapataas ng katatagan ng bot at tumutulong sa pagbuo sa hinaharap."
weight: 1
tags:
  - SeaVoice
  - Discord
image: images/blog/27-discord-backend-improvements/seavoice-discord-stt-tts-bot-backend-improvements.jpg
canonicalURL: /blog/seavoice-discord-backend-improvements/
url: /blog/seavoice-discord-backend-improvements/
---


*Ang SeaVoice Discord Bot ay nagiging popular bilang isa sa mga pinakamahusay na opsyon para sa pag-transcribe ng pagsasalita sa mga voice channel ng Discord. Sa pinakabagong release, naglulunsad kami ng malawakang pagpapabuti sa backend na nagpapataas ng katatagan ng bot at tumutulong sa pagbuo sa hinaharap.*

# Naaalala ng SeaVoice: Online na ang Database!

Kumusta sa lahat, kamakailan lang ay nagtatrabaho kami sa ilang bagay sa likod ng mga eksena para sa SeaVoice Discord Bot na gusto naming ibahagi!

Tulad ng nakita mo sa aming nakaraang blog post, nagdagdag kami ng maraming feature para sa SeaVoice Bot, tulad ng aming bagong mga recording ng tawag at transkripsyon. Kasama ng mga pagpapaunlad na ito, binigyan namin ang SeaVoice Discord Bot ng kakayahang alalahanin ang mga nagawa nito: lahat mula sa mga command hanggang sa pag-log ng error. Ngayon kapag pinagsalita mo ang bot, o ginamit mo ito upang mag-record ng tawag, ang lahat ng impormasyong iyon ay nai-save sa isang organisadong paraan.

## Ano ang Ibig Sabihin Nito para sa mga Gumagamit
Ngayon, ano ang ibig sabihin nito para sa iyo, maaari mong itanong?

Well, sa simula, ang aming bagong transcription at audio download feature ay hindi magiging posible kung wala ang mga pagpapabuti sa backend na ito! Maaari na rin naming awtomatikong i-store ang anumang hindi inaasahang pag-crash na maranasan mo upang masimulan ng aming development team ang pag-aayos ng mga isyung ito bago mo pa man mapansin ang mga ito. Bukod pa rito, kung magpasya ang sinuman na ayaw na nilang i-store ang kanilang data sa aming system, ang bagong organisasyong ito ay nagbibigay-daan sa amin na mabilis na mahanap, makuha, at/o alisin ang anumang data ayon sa server, channel, user, petsa, atbp.

Higit pa rito, binubuksan nito ang pinto para sa mga bagong feature tulad ng pagsubaybay sa istatistika, auto-moderation, at marami pa. Mga moderator, gusto niyo bang tiyakin na sinusunod ang mga panuntunan ng inyong server o suriin kung gaano kadalas ginagamit ang bot sa inyong server? Baka gusto niyo ring balikan ang nakakatawang pag-uusap na nagkaroon kayo noong nakaraang linggo? Sa database framework na ngayon ay matatag na at ginagamit sa production bot, mas madaling maabot ang malawak na hanay ng mga bagong feature.

## Pagkapribado ng Data

Natural lang na tuwing pinag-uusapan natin ang pag-save ng data ng user, mayroong tanong tungkol sa pagkapribado at seguridad ng data. Narito ang ilang mahahalagang punto tungkol sa kung paano namin pinangangasiwaan ang iyong data:
- Lahat ng data ng user ay nakaimbak sa isang secure na remote server, na iilang piling empleyado lamang ng Seasalt.ai ang makaka-access.
- Ang SeaVoice ay nagre-record lamang ng data na ibinigay ng Discord na ibinigay ng mga user kapag nakikipag-ugnayan sa SeaVoice bot; kasama rito ang:
    - Pangalan at id ng Server, Channel, User
    - Text na inilagay sa \`/speak\` command
    - Audio na sinasalita sa isang voice channel habang ginagawa ng bot ang \`/recognize\` command
- Ang data na ito ay gagamitin lamang ng Seasalt.ai upang mapabuti ang mga serbisyo.
- Maaari kang humiling na alisin ang anuman o lahat ng iyong data anumang oras.

Para sa buong detalye, mangyaring sumangguni sa [Patakaran sa Pagkapribado ng Seasalt.ai](https://seasalt.ai/privacy/).

## Mga Direksyon sa Hinaharap

Marami sa bahaging ito ng update ay hindi mapapansin, ngunit para sa amin ang mahirap na bahagi ay tapos na, at ngayon ay maaari na kaming magsimulang magtrabaho sa mga proyekto na magbibigay-daan sa iyo upang i-customize at gamitin ang SeaVoice Discord Bot nang higit pa sa inaakala mong posible.
Isang feature na nasa abot-tanaw ay ang mga nako-customize na configuration ng server at/o user.
Sa database na nasa lugar na, papayagan kami nitong mag-save ng mga kagustuhan sa hinaharap, tulad ng kung gusto mong paalalahanan na nire-record ang isang voice chat, sino ang makakatanggap ng download link sa isang transkripsyon ng tawag, o sino ang gustong mag-opt-out sa pagre-record.

Mayroon ka bang mga ideya na gusto mong makita na idinagdag ngayon na maaari na kaming mag-save ng data? Huwag mag-atubiling magpadala sa amin ng ilang mungkahi sa [Opisyal na SeaVoice Discord Server](https://discord.gg/dfAYfwBQ)!

<center>
<iframe src="https://discordapp.com/widget?id=919037515514654721&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
</center>

## Subukan ito!

At kung hindi mo pa nasubukan ang pinakabagong release ng SeaVoice Bot, subukan mo na! Imbitahin ang [SeaVoice Discord Bot](https://discord.com/oauth2/authorize?client_id=1001955060210749492&scope=bot) sa iyong server.
Malaya ring basahin ang [dokumentasyon ng SeaVoice Bot](https://wiki.seasalt.ai/seavoice/discord/discord-bot/) upang makita kung paano mo magagamit ang bot upang pinakamahusay na umangkop sa mga pangangailangan ng iyong komunidad.

Manatiling nakatutok para sa ilang kapana-panabik na update na paparating!

Salamat,

Ang SeaVoice Bot Team.
`;export{a as default};

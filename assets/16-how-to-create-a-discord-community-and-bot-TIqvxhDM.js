const a=`---
title: "Discord (2/3): Cara Membuat Komuniti dan Bot Discord untuk Jenama Anda"
metatitle: "Discord (2/3): Cipta Komuniti dan Bot Discord Jenama Anda"
date: 2022-05-31 13:29:51-07:00
draft: false
author: Kim Dodds
description: "Dalam blog ini, kami akan membimbing anda melalui penciptaan pelayan untuk jenama anda dan menyambungkan bot, yang boleh mengautomasikan moderasi, pelaporan pepijat, pengumuman, dll."
weight: 1
tags:
  - SeaX
  - Discord
image: /images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-community-and-bot-for-your-brand.jpg
canonicalURL: /blog/create-a-discord-community-and-bot/
url: /blog/create-a-discord-community-and-bot/
---

*Catatan blog kami, [“Discord: Sempadan Baharu untuk Penglibatan Pelanggan”](https://seasalt.ai/blog/15-discord-a-new-frontier-for-customer-engagement/), meliputi peningkatan populariti Discord, dan bagaimana jenama boleh memanfaatkan platform sosial baharu ini untuk membentuk komuniti dalam talian mereka sendiri dan berinteraksi dengan pelanggan. Dalam blog ini, kami akan membimbing anda cara membuat pelayan rasmi baharu untuk jenama anda, termasuk cara menyambungkan bot, yang boleh mengautomasikan tugas seperti moderasi, pelaporan pepijat, pengumuman, dll.*

## Isi Kandungan
- [Menyediakan Pelayan](#menyediakan-pelayan)
    - [Cipta Pelayan Discord Baharu](#cipta-pelayan-discord-baharu)
    - [Tukar Pelayan kepada "Pelayan Komuniti"](#tukar-pelayan-kepada-pelayan-komuniti)
    - [Sediakan Saluran, Acara, dan Ciri-ciri Lain](#sediakan-saluran-acara-dan-ciri-ciri-lain)
    - [Sebarkan Berita!](#sebarkan-berita)
- [Menyediakan Bot Discord](#menyediakan-bot-discord)
    - [Cipta Bot Baharu dalam Portal Pembangun Discord](#cipta-bot-baharu-dalam-portal-pembangun-discord)
    - [Cipta Bot Discord Mudah dengan PyCord](#cipta-bot-discord-mudah-dengan-pycord)
    - [Jemput Bot Discord](#jemput-bot-discord)
    - [Uji Integrasi](#uji-integrasi)

# Menyediakan Pelayan

## Cipta Pelayan Discord Baharu
Dari dalam aplikasi Discord, klik butang “Tambah Pelayan” di bahagian bawah sebelah kiri.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/create-new-discord-server.png" alt="Mencipta pelayan Discord baharu."/>

*Gesaan apabila mencipta pelayan Discord baharu.*
</center>

Anda boleh memilih daripada templat jika anda ingin bermula dengan beberapa saluran yang dicipta untuk anda, atau anda boleh bermula dengan kosong. Dan langkah pertama semudah itu, pelayan anda telah dicipta!

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/new-discord-server.png" alt="Pelayan Discord yang baru dicipta."/>

*Pelayan Discord yang baru dicipta.*
</center>

## Tukar Pelayan kepada "Pelayan Komuniti"

Sangat disyorkan untuk mendayakan ciri-ciri “komuniti” pelayan Discord. Dengan menukar kepada pelayan komuniti, anda mendayakan alat tambahan yang boleh membantu menyederhanakan, menjalankan, dan mengembangkan pelayan. Khususnya, pelayan komuniti mempunyai akses kepada ciri-ciri berikut:

- **Skrin Selamat Datang**: Memperkenalkan pengguna baharu kepada pelayan anda
- **Saluran Pengumuman**: Membolehkan anda menyiarkan mesej kepada pengguna anda
- **Wawasan Pelayan**: melihat analitik tentang komuniti dan pengguna anda
- **Penemuan**: Iklankan komuniti anda di Direktori Pelayan Discord

Di sebelah nama pelayan di sudut kiri atas, klik menu lungsur dan pilih “Tetapan Pelayan”. Klik tab “Dayakan Komuniti” di sebelah kiri dan pilih “Mula”.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/convert-to-community-discord-server.png" alt="Menukar pelayan Discord biasa kepada pelayan komuniti."/>

*Mendayakan tetapan pelayan komuniti.*
</center>

Teruskan melalui persediaan yang diperlukan. Mendayakan komuniti memerlukan pelayan anda untuk melakukan pengesahan tambahan untuk pengguna, mendayakan penapis sembang, dan menyediakan saluran peraturan.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-community-setup.png" alt="Persediaan untuk pelayan Discord komuniti."/>

*Menyediakan pelayan komuniti.*
</center>

Setelah anda mendayakan komuniti, anda mempunyai akses kepada beberapa ciri baharu. Dua ciri yang paling berguna ialah mesej selamat datang dan saringan keahlian:

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-server-welcome-page.png" alt="Contoh mesej selamat datang pelayan."/>

*Contoh mesej selamat datang pelayan.*

<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-server-membership-screening.png" alt="Tetapan saringan keahlian."/>

*Tetapan saringan keahlian.*
</center>

## Sediakan Saluran, Acara, dan Ciri-ciri Lain
Setelah menyediakan pelayan komuniti, anda mempunyai akses kepada ciri-ciri baharu dari halaman pelayan utama juga.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-server-channel-types.png" alt="Mencipta saluran baharu dalam pelayan Discord.", style="width:50%"/>

*Mencipta saluran baharu.*

<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-server-channels.png" alt="Contoh saluran pelayan komuniti Discord." style="width:50%"/>

*Saluran pelayan komuniti.*
</center>

Apabila anda mencipta saluran baharu, anda mempunyai akses kepada dua jenis saluran baharu: pengumuman dan pentas. Saluran pengumuman hanya boleh diposkan oleh moderator, dan berguna untuk pos rasmi dan pengumuman - banyak pelayan akan mempunyai bot secara automatik memposkan suapan twitter rasmi atau pos forum mereka ke saluran ini. Saluran “pentas” adalah jenis saluran suara khas yang berguna untuk menganjurkan acara dengan penonton secara langsung. Hos mempunyai keupayaan untuk menyederhanakan pembesar suara lain (tidak seperti dalam saluran suara biasa, di mana ia adalah bebas untuk semua).

Setelah pelayan anda siap sedia, ia mungkin kelihatan seperti ini:

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/customized-discord-server.png" alt="Pelayan Discord yang disesuaikan sepenuhnya."/>

*Pelayan komuniti yang disesuaikan sepenuhnya.*
</center>

## Sebarkan Berita!
Setelah pelayan anda siap sedia, anda boleh mula menjemput orang!
Discord menawarkan widget prabuatan percuma, yang boleh dibenamkan dalam mana-mana laman web untuk mengiklankan pelayan anda.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-server-widget.png" alt="Tetapan widget pelayan Discord."/>

*Tetapan widget pelayan.*

<iframe src="https://discordapp.com/widget?id=966505646944055326&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>

*Contoh widget yang berfungsi untuk pelayan Discord Near Me Messaging Seasalt.ai.*

</center>

Untuk membina kepercayaan dengan pengguna berpotensi, anda boleh secara pilihan menghubungi sokongan Discord untuk mendapatkan pelayan anda disahkan. Pengesahan akan meletakkan ikon “disahkan” di sebelah nama pelayan anda yang menunjukkan bahawa pelayan adalah komuniti rasmi yang berafiliasi dengan perniagaan, jenama, dan tokoh kepentingan awam. Anda boleh melihat keperluan pengesahan di [laman rasmi Discord](https://support.discord.com/hc/en-us/articles/360001107231-Verified-Server-Requirements).

Setelah pelayan anda bermula dan mempunyai bilangan pengguna yang baik, Discord menawarkan lebih banyak peluang untuk mengiklankan pelayan anda secara dalaman. Apabila pelayan anda berumur sekurang-kurangnya 8 minggu dan mempunyai 500+ pengguna, anda boleh memohon untuk perkongsian Discord, yang memberikan pelayan anda faedah eksklusif rakan kongsi. Setelah anda mencapai 1,000+ pengguna, anda boleh menyertai Penemuan Pelayan, yang akan membolehkan sesiapa sahaja yang menggunakan Discord untuk menemui dan menyertai pelayan anda.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-server-discovery.png" alt="Tetapan dan keperluan Penemuan Discord."/>

*Tetapan dan keperluan Penemuan Discord.*
</center>

# Menyediakan Bot Discord
Sekarang setelah anda menyediakan pelayan, anda boleh mempertingkatkannya dengan menambah bot untuk mengautomasikan beberapa proses, seperti moderasi, maklum balas pengguna, dan pengumuman. Teruskan membaca bahagian berikut untuk mengetahui cara menyediakan bot mudah, dan kemudian nantikan blog seterusnya dalam siri kami untuk melihat bagaimana anda boleh mengintegrasikan pengalaman perkhidmatan pelanggan yang lengkap dalam pelayan Discord anda.

## Cipta Bot Baharu dalam Portal Pembangun Discord
Cipta akaun di [Portal Pembangun Discord](https://discord.com/developers/applications). Cipta “Aplikasi Baharu” dan namakannya.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/new-discord-application.png" alt="Cipta aplikasi baharu di Portal Pembangun Discord."/>

*Papan pemuka pembangun Discord: Aplikasi.*
</center>

Pilih aplikasi baharu anda dan klik tab “Bot” di sebelah kiri.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/new-discord-bot.png" alt="Tetapan Bot Aplikasi."/>

*Tetapan aplikasi Discord.*
</center>

Klik “Tambah Bot” untuk mencipta bot Discord anda.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-bot-settings.png" alt="Cipta bot Discord baharu."/>

*Mencipta bot Discord baharu.*
</center>

Setelah dicipta, jana dan salin token bot. Akhir sekali, pastikan kebenaran pemesejan dihidupkan.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-bot-messaging-permissions.png" alt="Kebenaran pemesejan Bot Discord."/>

*Mencipta bot Discord baharu.*
</center>

## Cipta Bot Discord Mudah dengan PyCord

Kami menggunakan [perpustakaan PyCord](https://docs.pycord.dev/en/master/) sebagai pembungkus Python untuk API Discord.

1. Pasang PyCord dan cipta fail Python baharu untuk bot Discord anda.
2. Import pakej discord dan cipta contoh klien discord.
3. Gunakan pembungkus \`event\` klien untuk mencipta kaedah \`on_message\`. Kaedah ini akan menerima setiap mesej yang dihantar ke saluran yang boleh diakses oleh bot.
    a. Dalam kaedah, mula-mula semak jika mesej itu daripada bot itu sendiri, dan abaikan jika ya.
    b. Jika tidak, kami akan bermula dengan hanya bertindak balas kepada mesej yang bermula dengan \`$bot\` - jika mesej bermula dengan ini, kami hanya akan membalas ke saluran yang sama dengan mengatakan \`Saya mendapat mesej anda!\`.
4. Akhir sekali, pada akhir skrip, pastikan untuk menjalankan klien discord supaya ia mula mendengar acara dalam saluran.

\`\`\`python
import discord

discord_client = discord.Bot()
discord_token = “xxxxxxxxxxxx”
 
@discord_client.event
async def on_message(message):
    """Dengar dan bertindak balas kepada mesej."""
    # Semak jika mesej itu daripada bot itu sendiri
    if message.author == discord_client.user:
        return

    msg = message.content
    if msg.startswith("$bot") or isinstance(message.channel, discord.DMChannel):
        await message.channel.send(“Saya mendapat mesej anda!”)

discord_client.run(discord_token)
\`\`\`
`;export{a as default};

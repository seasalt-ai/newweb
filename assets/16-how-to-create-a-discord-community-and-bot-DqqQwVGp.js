const a=`---
title: "Discord (2/3): Cara Membuat Komunitas dan Bot Discord untuk Merek Anda"
metatitle: "Discord (2/3): Buat Komunitas dan Bot Discord Merek Anda"
date: 2022-05-31 13:29:51-07:00
draft: false
author: Kim Dodds
description: "Dalam blog ini, kami akan membahas cara membuat server untuk merek Anda dan menghubungkan bot, yang dapat mengotomatiskan moderasi, pelaporan bug, pengumuman, dll."
weight: 1
tags:
  - SeaX
  - Discord
image: /images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-community-and-bot-for-your-brand.jpg
canonicalURL: /blog/create-a-discord-community-and-bot/
url: /blog/create-a-discord-community-and-bot/
---

*Posting blog kami, [“Discord: Batas Baru untuk Keterlibatan Pelanggan”](https://seasalt.ai/blog/15-discord-a-new-frontier-for-customer-engagement/), membahas peningkatan popularitas Discord, dan bagaimana merek dapat memanfaatkan platform sosial baru ini untuk membentuk komunitas online mereka sendiri dan berinteraksi dengan pelanggan. Dalam blog ini, kami akan membahas cara membuat server resmi baru untuk merek Anda, termasuk cara menghubungkan bot, yang dapat mengotomatiskan tugas-tugas seperti moderasi, pelaporan bug, pengumuman, dll.*

## Daftar Isi
- [Menyiapkan Server](#menyiapkan-server)
    - [Membuat Server Discord Baru](#membuat-server-discord-baru)
    - [Mengubah Server menjadi "Server Komunitas"](#mengubah-server-menjadi-server-komunitas)
    - [Menyiapkan Saluran, Acara, dan Fitur Lainnya](#menyiapkan-saluran-acara-dan-fitur-lainnya)
    - [Sebarkan Berita!](#sebarkan-berita)
- [Menyiapkan Bot Discord](#menyiapkan-bot-discord)
    - [Membuat Bot Baru di Portal Pengembang Discord](#membuat-bot-baru-di-portal-pengembang-discord)
    - [Membuat Bot Discord Sederhana dengan PyCord](#membuat-bot-discord-sederhana-dengan-pycord)
    - [Mengundang Bot Discord](#mengundang-bot-discord)
    - [Menguji Integrasi](#menguji-integrasi)

# Menyiapkan Server

## Membuat Server Discord Baru
Dari dalam aplikasi Discord, klik tombol “Tambah Server” di sisi kiri bawah.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/create-new-discord-server.png" alt="Membuat server Discord baru."/>

*Prompt saat membuat server Discord baru.*
</center>

Anda dapat memilih dari template jika Anda ingin memulai dengan beberapa saluran yang dibuat untuk Anda, atau Anda dapat memulai dari awal. Dan langkah pertama semudah itu, server Anda telah dibuat!

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/new-discord-server.png" alt="Server Discord yang baru dibuat."/>

*Server Discord yang baru dibuat.*
</center>

## Mengubah Server menjadi "Server Komunitas"

Sangat disarankan untuk mengaktifkan fitur “komunitas” dari server Discord. Dengan mengonversi ke server komunitas, Anda mengaktifkan alat tambahan yang dapat membantu memoderasi, menjalankan, dan mengembangkan server. Secara khusus, server komunitas memiliki akses ke fitur-fitur berikut:

- **Layar Selamat Datang**: Memperkenalkan pengguna baru ke server Anda
- **Saluran Pengumuman**: Memungkinkan Anda menyiarkan pesan ke pengguna Anda
- **Wawasan Server**: melihat analitik tentang komunitas dan pengguna Anda
- **Penemuan**: Mengiklankan komunitas Anda di Direktori Server Discord

Di samping nama server di sudut kiri atas, klik drop down dan pilih “Pengaturan Server”. Klik tab “Aktifkan Komunitas” di sisi kiri dan pilih “Mulai”.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/convert-to-community-discord-server.png" alt="Mengonversi server Discord biasa menjadi server komunitas."/>

*Mengaktifkan pengaturan server komunitas.*
</center>

Lanjutkan melalui pengaturan yang diperlukan. Mengaktifkan komunitas mengharuskan server Anda untuk melakukan verifikasi tambahan untuk pengguna, mengaktifkan filter obrolan, dan menyiapkan saluran aturan.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-community-setup.png" alt="Pengaturan untuk server Discord komunitas."/>

*Menyiapkan server komunitas.*
</center>

Setelah Anda mengaktifkan komunitas, Anda memiliki akses ke beberapa fitur baru. Dua fitur yang paling berguna adalah pesan selamat datang dan penyaringan keanggotaan:

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-server-welcome-page.png" alt="Contoh pesan selamat datang server."/>

*Contoh pesan selamat datang server.*

<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-server-membership-screening.png" alt="Pengaturan penyaringan keanggotaan."/>

*Pengaturan penyaringan keanggotaan.*
</center>

## Menyiapkan Saluran, Acara, dan Fitur Lainnya
Setelah menyiapkan server komunitas, Anda memiliki akses ke fitur baru dari halaman server utama juga.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-server-channel-types.png" alt="Membuat saluran baru di server Discord.", style="width:50%"/>

*Membuat saluran baru.*

<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-server-channels.png" alt="Contoh saluran server komunitas Discord." style="width:50%"/>

*Saluran server komunitas.*
</center>

Ketika Anda membuat saluran baru, Anda memiliki akses ke dua jenis saluran baru: pengumuman dan panggung. Saluran pengumuman hanya dapat diposting oleh moderator, dan berguna untuk postingan dan pengumuman resmi - banyak server akan memiliki bot yang secara otomatis memposting feed twitter resmi atau postingan forum mereka ke saluran ini. Saluran “panggung” adalah jenis saluran suara khusus yang berguna untuk menyelenggarakan acara dengan audiens langsung. Host memiliki kemampuan untuk memoderasi pembicara lain (tidak seperti di saluran suara biasa, di mana itu adalah bebas untuk semua). 

Setelah server Anda siap, mungkin akan terlihat seperti ini:

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/customized-discord-server.png" alt="Server Discord yang sepenuhnya disesuaikan."/>

*Server komunitas yang sepenuhnya disesuaikan.*
</center>

## Sebarkan Berita!
Setelah server Anda siap, Anda bisa mulai mengundang orang!
Discord menawarkan widget prabuatan gratis, yang dapat disematkan di situs web mana pun untuk mengiklankan server Anda. 

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-server-widget.png" alt="Pengaturan widget server Discord."/>

*Pengaturan widget server.*

<iframe src="https://discordapp.com/widget?id=966505646944055326&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>

*Contoh widget yang berfungsi untuk server Discord Near Me Messaging Seasalt.ai.*

</center>

Untuk membangun kepercayaan dengan calon pengguna, Anda dapat secara opsional menghubungi dukungan Discord untuk memverifikasi server Anda. Verifikasi akan menempatkan ikon “terverifikasi” di samping nama server Anda yang menunjukkan bahwa server tersebut adalah komunitas resmi yang berafiliasi dengan bisnis, merek, dan tokoh kepentingan publik. Anda dapat melihat persyaratan verifikasi di [situs resmi Discord](https://support.discord.com/hc/en-us/articles/360001107231-Verified-Server-Requirements).

Setelah server Anda berjalan dan memiliki sejumlah pengguna yang baik, Discord menawarkan lebih banyak peluang untuk mengiklankan server Anda secara internal. Ketika server Anda berusia setidaknya 8 minggu dan memiliki 500+ pengguna, Anda dapat mengajukan permohonan kemitraan Discord, yang memberikan server Anda fasilitas eksklusif mitra khusus. Setelah Anda mencapai 1.000+ pengguna, Anda dapat bergabung dengan Penemuan Server, yang akan memungkinkan siapa pun yang menggunakan Discord untuk menemukan dan bergabung dengan server Anda. 

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-server-discovery.png" alt="Pengaturan dan persyaratan Discord Discovery."/>

*Pengaturan dan persyaratan Discord Discovery.*
</center>

# Menyiapkan Bot Discord
Sekarang setelah Anda menyiapkan server, Anda dapat meningkatkannya dengan menambahkan bot untuk mengotomatiskan beberapa proses, seperti moderasi, umpan balik pengguna, dan pengumuman. Lanjutkan membaca bagian berikut untuk mempelajari cara menyiapkan bot sederhana, dan kemudian nantikan blog berikutnya dalam seri kami untuk melihat bagaimana Anda dapat mengintegrasikan pengalaman layanan pelanggan yang lengkap dalam server Discord Anda.

## Membuat Bot Baru di Portal Pengembang Discord
Buat akun di [Portal Pengembang Discord](https://discord.com/developers/applications). Buat “Aplikasi Baru” dan beri nama.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/new-discord-application.png" alt="Buat aplikasi baru di Portal Pengembang Discord."/>

*Dasbor pengembang Discord: Aplikasi.*
</center>

Pilih aplikasi baru Anda dan klik tab “Bot” di sisi kiri.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/new-discord-bot.png" alt="Pengaturan Bot aplikasi."/>

*Pengaturan aplikasi Discord.*
</center>

Klik “Tambah Bot” untuk membuat bot Discord Anda.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-bot-settings.png" alt="Buat bot Discord baru."/>

*Membuat bot Discord baru.*
</center>

Setelah dibuat, buat dan salin token bot. Terakhir, pastikan izin perpesanan diaktifkan.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-bot-messaging-permissions.png" alt="Izin perpesanan Bot Discord."/>

*Membuat bot Discord baru.*
</center>

## Membuat Bot Discord Sederhana dengan PyCord

Kami menggunakan [perpustakaan PyCord](https://docs.pycord.dev/en/master/) sebagai pembungkus Python untuk API Discord. 

1. Instal PyCord dan buat file Python baru untuk bot Discord Anda. 
2. Impor paket discord dan buat instance klien discord. 
3. Gunakan pembungkus \`event\` dari klien untuk membuat metode \`on_message\`. Metode ini akan menerima setiap pesan yang dikirim ke saluran yang dapat diakses oleh bot. 
    a. Di dalam metode, pertama-tama periksa apakah pesan berasal dari bot itu sendiri, dan abaikan jika demikian. 
    b. Jika tidak, kita akan mulai dengan hanya bereaksi terhadap pesan yang dimulai dengan \`$bot\` - jika pesan dimulai dengan ini, kita hanya akan merespons ke saluran yang sama dengan mengatakan \`Saya menerima pesan Anda!\`. 
4. Terakhir, di akhir skrip, pastikan untuk menjalankan klien discord agar mulai mendengarkan peristiwa di saluran.

\`\`\`python
import discord

discord_client = discord.Bot()
discord_token = “xxxxxxxxxxxx”
 
@discord_client.event
async def on_message(message):
    """Dengarkan dan bereaksi terhadap pesan."""
    # Periksa apakah pesan berasal dari bot itu sendiri
    if message.author == discord_client.user:
        return

    msg = message.content
    if msg.startswith("$bot") or isinstance(message.channel, discord.DMChannel):
        await message.channel.send(“Saya menerima pesan Anda!”)

discord_client.run(discord_token)
\`\`\`
`;export{a as default};

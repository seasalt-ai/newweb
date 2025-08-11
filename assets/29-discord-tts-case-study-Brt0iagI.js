const a=`---
title: "Teks-ke-Suara di Discord: Studi Kasus Bot Discord TTS"
metatitle: "Teks-ke-Suara di Discord: Studi Kasus Bot Discord TTS"
date: 2022-12-27 17:04:20-08:00
modified_date: 2025-07-29 20:45:17+00:00
author: Kim Dodds
description: "Dalam blog ini kita akan membahas temuan kami tentang bagaimana pengguna Discord nyata memanfaatkan layanan kami setelah meninjau data teks-ke-suara otentik selama beberapa bulan."
weight: 1
tags:
  - SeaVoice
  - Discord
image: images/blog/29-tts-case-study/discord-tts-accessibility.jpg
url: /blog/discord-tts-case-study/
---


*Setelah meluncurkan SeaVoice, salah satu bot teks-ke-suara dan suara-ke-teks tercepat dan paling akurat di Discord, kami ingin memahami bagaimana pengguna sebenarnya berinteraksi dengan layanan tersebut. Dalam blog ini kami akan membahas temuan kami setelah meninjau data pengguna teks-ke-suara nyata selama beberapa bulan.*

# SeaVoice: Bot Discord Teks-ke-Suara & Suara-ke-Teks

Discord, sebagai platform yang terutama digunakan untuk kombinasi obrolan audio dan teks, adalah tempat pengujian yang fantastis untuk layanan kecerdasan suara dan pemrosesan bahasa alami.
Kami menerapkan Bot SeaVoice, yang dilengkapi dengan perintah teks-ke-suara dan suara-ke-teks, ke Discord pada Agustus 2022.
Untuk mempelajari lebih lanjut tentang cara kerja bot, atau melihat demo video singkat, Anda dapat mengunjungi [Wiki Bot Discord SeaVoice](https://wiki.seasalt.ai/seavoice/discord/6-community/).
Pada bulan November di tahun yang sama, kami merilis versi baru dengan peningkatan backend yang signifikan (seperti yang dijelaskan di posting blog kami sebelumnya: [Bot Discord SeaVoice: Peningkatan Backend & Stabilitas](https://seasalt.ai/blog/27-seavoice-discord-backend-improvements/)) yang memungkinkan kami merekam data anonim tentang bagaimana pengguna berinteraksi dengan bot SeaVoice.
Dalam blog ini kita akan melihat data pengguna selama 1 bulan dari perintah teks-ke-suara.

## Penggunaan TTS SeaVoice

<center>
<img src="/images/blog/29-tts-case-study/discord-tts-usage.jpg" alt="Penggunaan teks-ke-suara harian Bot Discord SeaVoice selama 7 minggu."/>

*Penggunaan teks-ke-suara harian Bot Discord SeaVoice selama 7 minggu.*
</center>

Pada saat penulisan, Bot SeaVoice telah ditambahkan ke hampir 800 server!
Sejak kami mulai merekam data penggunaan pada bulan November, kami menemukan bahwa jumlah total permintaan per hari dapat berfluktuasi dari 150 hingga lebih dari 1.300 (dengan rata-rata sekitar 560).
Sekitar 650 pengguna telah mencoba perintah TTS setidaknya sekali.
Namun, sebagian besar pengguna tidak terus menggunakannya secara teratur setelah mencobanya.
Dari 650 pengguna yang mencoba perintah TTS, sekitar 200 menggunakannya 20 kali atau lebih, dan hanya 100 yang menggunakannya 50 kali atau lebih.
Meski begitu, mereka yang menikmati dan mengandalkan perintah TTS menggunakannya secara ekstensif!
5 pengguna teratas kami telah mengirimkan lebih dari 1.000 permintaan masing-masing dalam dua bulan terakhir, dan pengguna teratas telah mengirimkan hampir 2.500 permintaan sendirian!

## Pengamatan

### Mengapa Orang Menggunakan Teks-ke-Suara

<center>
<img src="/images/blog/29-tts-case-study/why-mute-on-discord.jpg" alt="Alasan pengguna Bot Discord SeaVoice menggunakan teks-ke-suara."/>

*Alasan pengguna Bot Discord SeaVoice menggunakan teks-ke-suara.*
</center>

Jadi pertanyaan pertama kami setelah melihat data penggunaan adalah: **mengapa pengguna yang sering menggunakan TTS sejak awal?**
Kami melihat melalui database untuk menemukan beberapa penjelasan.
Berikut ini adalah perintah TTS nyata dari beberapa pengguna kami.

__*Mengapa kamu tidak bicara?*__

    - juga saya tidak bisa bicara karena saya sedang makan
    - Saya sebenarnya akan bicara, tetapi saya sedang bekerja saat ini.
    - jika saya bicara maka saya akan membangunkan keluarga saya
    - maaf, tidak akan banyak bicara. tenggorokan sakit sekali.
    - saya bisa bicara tapi ibu saya ada di sini
    - saya terlalu malas untuk bicara hari ini
    - saya tidak bisa bicara karena saya sakit tapi saya tetap ingin ikut :)
    - tidak sepenuhnya bisu, hanya butuh usaha untuk bicara. Beberapa hari butuh banyak usaha
    - maaf saya membisukan nenek saya sedang berbicara di telepon dan suaranya keras
    - Karena mikrofon saya rusak

Setelah menemukan penjelasan ini, kami dapat merangkumnya menjadi beberapa alasan utama:
- ada hambatan fisik (mikrofon rusak, kesulitan berbicara, sakit, dll.),
- mereka sibuk melakukan hal lain (makan, di tempat kerja, dll.),
- lingkungan mereka terlalu bising atau mereka harus diam, atau
- karena nyaman dan mereka suka menggunakannya.

Tetapi terlepas dari alasan pastinya mereka menggunakan layanan TTS, banyak pengguna menyatakan kegembiraan bahwa mereka dapat berpartisipasi dalam percakapan saluran suara padahal sebaliknya mereka tidak akan bisa.
Kami percaya bahwa layanan TTS membuat saluran suara Discord lebih mudah diakses, dan itulah alasan utama pengguna reguler kami terus menggunakan layanan ini.

### Penggunaan Bahasa

Satu hal yang menonjol bagi saya saat meninjau percakapan, adalah banyak pengguna mencoba menggunakan perintah teks-ke-suara dengan bahasa yang berbeda.
Sementara beberapa pengguna hanya ingin melihat apakah itu akan berhasil atau menganggap pengucapannya lucu, yang lain, bagaimanapun, terus menggunakan TTS dalam bahasa non-Inggris untuk waktu yang lama!

<center>
<img src="/images/blog/29-tts-case-study/discord-spanish-tts-test.png" alt="Seorang pengguna menguji pengucapan bahasa Spanyol dari model TTS SeaVoice bahasa Inggris."/>

*Seorang pengguna menguji pengucapan bahasa Spanyol dari model TTS SeaVoice bahasa Inggris.*
</center>

Ini terutama terjadi pada penutur bahasa Spanyol meskipun (seperti yang dicatat pengguna di atas) kinerja TTS tidak baik untuk bahasa Spanyol, karena modelnya hanya dilatih dalam bahasa Inggris.
Saya mulai mencatat setiap kali saya menemukan pengguna yang mencoba menggunakan perintah TTS pada bahasa selain bahasa Inggris.

<center>
<img src="/images/blog/29-tts-case-study/discord-non-english-tts.jpg" alt="Jumlah upaya untuk mengirim permintaan non-Inggris ke TTS."/>

*Jumlah upaya untuk mengirim permintaan non-Inggris ke TTS.*
</center>

Tabel di atas menunjukkan hitungan setiap percakapan yang saya temukan yang memiliki setidaknya satu contoh seseorang menggunakan bahasa yang sesuai dalam perintah TTS.
Jelas, bahasa Spanyol sejauh ini yang paling umum, dan dipasangkan dengan fakta bahwa banyak pengguna terus menggunakan fungsi TTS dalam bahasa Spanyol meskipun kinerjanya buruk, membuat saya bertanya-tanya apakah belum ada alternatif yang layak di Discord untuk TTS bahasa Spanyol.
Dalam kedua kasus tersebut, orang-orang mencoba menggunakan layanan TTS kami untuk bahasa lain, jadi kami dapat melacak bahasa mana yang paling banyak diminati dan menggunakan data ini untuk menginformasikan pelatihan model baru kami.

### Komentar tentang Bot

Topik menarik lainnya yang ditemukan di log adalah komentar tentang bot itu sendiri.
Syukurlah, kami melihat beberapa komentar yang sangat positif tentang bot dan kinerjanya.

<center>
<img src="/images/blog/29-tts-case-study/discord-tts-inclusive-accessibility-user-comment.png" alt="Seorang pengguna berkomentar bahwa bot membuat mereka merasa lebih disertakan."/>

*Seorang pengguna berkomentar bahwa bot membuat mereka merasa lebih disertakan.*
</center>

Komentar yang paling menyentuh adalah dari mereka yang merasa tersisih dari saluran suara, tetapi sekarang dapat berpartisipasi berkat aksesibilitas tambahan yang disediakan bot.

Kami juga menemukan beberapa umpan balik yang membangun.

<center>
<img src="/images/blog/29-tts-case-study/discord-tts-speed.png" alt="Seorang pengguna berkomentar bahwa kecepatan TTS menjadi masalah."/>

*Seorang pengguna berkomentar bahwa kecepatan TTS menjadi masalah.*
</center>

Seorang pengguna menyebutkan bahwa, karena pengguna pertama-tama harus mengetik seluruh kalimat dan kemudian mengirimkannya, TTS lebih lambat daripada berbicara normal, jadi terkadang ucapan TTS mereka diucapkan sedikit terlambat dalam percakapan.
Seperti yang disebutkan di bagian sebelumnya, kami juga melihat permintaan untuk dukungan bahasa tambahan serta satu pengguna yang berharap dapat menerjemahkan antar bahasa menggunakan bot.
Mengawasi umpan balik semacam ini akan membantu kami merencanakan dan meningkatkan fitur di masa mendatang.

### Kebaruan

Setelah menelusuri seluruh koleksi perintah TTS, saya akan mengatakan bahwa sekitar dua pertiga dari ucapan tersebut digunakan dalam percakapan umum dengan teman dan orang lain di server.
Kebanyakan orang bermain game dan hanya mengobrol dengan teman-teman mereka, dan pengguna ini cenderung menjadi orang yang menggunakan layanan TTS secara teratur.
Di sisi lain, sepertiga sisa ucapan termasuk dalam kategori “hanya main-main”.
Ketika Anda diberi kekuatan penuh untuk membuat suara mengatakan apa pun yang Anda inginkan, saya percaya itu adalah sifat manusia untuk memilih hal yang paling konyol atau paling cabul yang dapat Anda pikirkan hanya untuk tertawa.
Saya ingat duduk di lab komputer sekolah dasar dan dihibur selama berjam-jam oleh Microsoft Sam (teknologi yang sangat tinggi pada saat itu), melihat apakah kami bisa membuatnya mengatakan hal-hal seperti “kotoran” atau “pantat”.
Yah, saya kira anak-anak seperti saya tumbuh dewasa, memperoleh kosakata yang lebih kaya, dan akhirnya menemukan hiburan yang sama dengan layanan TTS kami di Discord.

<center>
<img src="/images/blog/29-tts-case-study/discord-tts-stress-test.png" alt="Contoh permintaan TTS aneh yang dikirim oleh pengguna."/>

*Contoh permintaan TTS aneh yang dikirim oleh pengguna.*
</center>

Terkadang pengguna hanya mencoba dan merusak bot dengan mengetik hal-hal seperti: string yang terlalu panjang, karakter khusus, emoji, URL, dll.
Ini adalah contoh klasik orang yang menguji batas perangkat lunak, dan sebenarnya membantu kami memastikan bahwa layanan kami kuat dan dapat menangani input apa pun yang dilemparkan pengguna padanya.

Di lain waktu, pengguna menemukan hiburan dengan membuat layanan TTS mengatakan hal-hal paling cabul dan menyinggung yang dapat mereka pikirkan.
Di log TTS saya pikir saya melihat setiap kata makian yang saya tahu (dan mungkin beberapa yang belum pernah saya dengar sebelumnya), cercaan rasial, dan konten seksual eksplisit.

## Masalah Etika

Sayangnya ada banyak cara aplikasi teks-ke-suara dapat digunakan secara tidak menyenangkan: seperti untuk mempromosikan ujaran kebencian atau penindasan maya.
Selain itu, sementara klip audio disintesis dari model, data untuk melatih model berasal dari orang sungguhan dan output dari model yang baik dapat terdengar hampir tidak dapat dibedakan dari aslinya.

Jadi poin-poin ini, dipasangkan dengan bagaimana kami melihat pengguna nyata menggunakan (atau menyalahgunakan) layanan TTS kami, menimbulkan beberapa pertanyaan yang sangat penting bagi Seasalt.ai sebagai perusahaan dan Bot Discord SeaVoice:

- *Apakah kami sebagai perusahaan ingin produk kami digunakan dengan cara yang berpotensi menyinggung atau berbahaya?*
- *Hak apa yang dimiliki pengisi suara atas bagaimana suara mereka digunakan dalam aplikasi teks-ke-suara?*
- *Apakah kami memiliki hak atau tanggung jawab untuk menyensor bagaimana layanan kami digunakan?*

Pertanyaan-pertanyaan ini tidak dapat dijawab, atau bahkan dieksplorasi sepenuhnya, dalam satu posting blog.
Namun perusahaan merasa berkewajiban untuk terus mempertimbangkan masalah ini saat kami bergerak maju dengan proyek Discord kami dan terus bekerja dengan pengisi suara kami.

Terima kasih atas minat Anda pada proyek Bot Discord dan Kecerdasan Suara kami! Anda dapat mempelajari lebih lanjut tentang produk STT kami di [Beranda Suara-ke-Teks](https://suite.seasalt.ai/tts) kami. Untuk demo satu-satu dari salah satu produk Kecerdasan Suara kami, isi [Formulir Pesan Demo](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting).

Di sisi Discord, Anda dapat mempelajari lebih lanjut tentang bot kami dan menambahkannya ke server Anda dari [Wiki Bot Discord SeaVoice](https://wiki.seasalt.ai/seavoice/discord/6-community/). Juga jangan ragu untuk bergabung dengan [Server Discord SeaVoice Resmi](https://discord.gg/dfAYfwBQ) kami.

<center>
<iframe src="https://discordapp.com/widget?id=919037515514654721&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
</center>
`;export{a as default};

const a=`---
title: "SeaVoice STT/TTS Discord Bot: Penambahbaikan Backend & Kestabilan"
metatitle: "SeaVoice STT/TTS Discord Bot: Penambahbaikan Backend & Kesta..."
date: 2022-12-13 11:58:34-08:00
modified_date: 2025-07-28T16:56:53Z
draft: false
author: Sydney Burgess, Kim Dodds, Drake Farmer, Jack Harvison, Dylan Strong, Cody Vernon
description: "Dengan keluaran terbaru, SeaVoice Discord Bot melancarkan penambahbaikan backend besar-besaran yang meningkatkan kestabilan bot dan membantu pembangunan masa depan."
weight: 1
tags:
  - SeaVoice
  - Discord
image: images/blog/27-discord-backend-improvements/seavoice-discord-stt-tts-bot-backend-improvements.jpg
canonicalURL: /blog/seavoice-discord-backend-improvements/
url: /blog/seavoice-discord-backend-improvements/
---


*SeaVoice Discord Bot telah mendapat populariti sebagai salah satu pilihan terbaik untuk menyalin pertuturan dalam saluran suara Discord. Dengan keluaran terbaru, kami melancarkan penambahbaikan backend besar-besaran yang meningkatkan kestabilan bot dan membantu pembangunan masa depan.*

# SeaVoice Mengingat: Pangkalan Data Dalam Talian!

Salam semua, kebelakangan ini kami telah mengusahakan beberapa perkara di belakang tabir untuk SeaVoice Discord Bot yang ingin kami kongsikan!

Seperti yang anda lihat dalam catatan blog kami sebelum ini, kami telah menambah banyak ciri untuk SeaVoice Bot, seperti rakaman panggilan dan transkripsi baharu kami. Bersama-sama dengan pembangunan ini, kami telah memberikan SeaVoice Discord Bot keupayaan untuk mengingati apa yang telah dilakukannya: segala-galanya daripada arahan hingga log ralat. Kini apabila bot bercakap dengan anda, atau anda menggunakannya untuk merakam panggilan, semua maklumat itu disimpan dengan cara yang teratur.

## Apa Maksud Ini untuk Pengguna
Sekarang apa maksud ini untuk anda, anda mungkin bertanya?

Nah, untuk bermula, ciri transkripsi dan muat turun audio baharu kami tidak akan mungkin tanpa penambahbaikan backend ini! Kami juga kini boleh menyimpan sebarang ranap yang tidak diingini yang anda alami secara automatik supaya pasukan pembangunan kami boleh mula membetulkan isu-isu ini sebelum anda menyedarinya. Selain itu, jika sesiapa memutuskan mereka tidak lagi mahu data mereka disimpan dalam sistem kami, organisasi baharu ini membolehkan kami mencari, mendapatkan semula, dan/atau membuang sebarang data dengan cepat mengikut pelayan, saluran, pengguna, tarikh, dsb.

Lebih-lebih lagi, ini membuka pintu untuk ciri-ciri baharu seperti penjejakan statistik, moderasi automatik, dan banyak lagi. Moderator, adakah anda ingin memastikan bahawa peraturan pelayan anda dipatuhi atau memeriksa berapa kerap bot digunakan dalam pelayan anda? Mungkin anda ingin menarik perbualan lucu yang anda lakukan minggu lepas? Dengan kerangka kerja pangkalan data kini kukuh di tempatnya dan digunakan dalam bot pengeluaran, pelbagai ciri baharu lebih mudah dicapai.

## Privasi Data

Secara semula jadi, setiap kali kita membincangkan penyimpanan data pengguna, timbul persoalan privasi dan keselamatan data. Berikut adalah beberapa perkara utama tentang cara kami mengendalikan data anda:
- Semua data pengguna disimpan di pelayan jauh yang selamat, yang hanya boleh diakses oleh beberapa pekerja Seasalt.ai terpilih.
- SeaVoice hanya merekodkan data yang disediakan oleh Discord yang disediakan oleh pengguna semasa berinteraksi dengan bot SeaVoice; itu termasuk:
    - Nama & id Pelayan, Saluran, Pengguna
    - Teks yang dimasukkan ke dalam arahan \`/speak\`
    - Audio yang dituturkan dalam saluran suara semasa bot sedang melakukan arahan \`/recognize\`
- Data ini hanya akan digunakan oleh Seasalt.ai untuk meningkatkan perkhidmatan.
- Anda boleh meminta agar mana-mana atau semua data anda dialih keluar pada bila-bila masa.

Untuk butiran penuh, sila rujuk kepada [Dasar Privasi Seasalt.ai](https://seasalt.ai/privacy/).

## Arah Masa Depan

Banyak bahagian kemas kini ini tidak akan ketara, tetapi bagi kami bahagian yang sukar telah berakhir, dan kini kami boleh mula mengusahakan projek yang membolehkan anda menyesuaikan dan menggunakan SeaVoice Discord Bot lebih daripada yang anda sangka mungkin.
Satu ciri yang akan datang ialah konfigurasi pelayan dan/atau pengguna yang boleh disesuaikan.
Dengan pangkalan data yang ada, ini akan membolehkan kami menyimpan pilihan pada masa hadapan, seperti sama ada anda ingin diingatkan bahawa sembang suara sedang dirakam, siapa yang menerima pautan muat turun ke transkripsi panggilan, atau siapa yang ingin menarik diri daripada dirakam.

Ada idea yang anda ingin lihat ditambah sekarang setelah kami boleh menyimpan data? Jangan ragu untuk menghantar beberapa cadangan kepada kami melalui [Pelayan Discord Rasmi SeaVoice](https://discord.gg/dfAYfwBQ)!

<center>
<iframe src="https://discordapp.com/widget?id=919037515514654721&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
</center>

## Cubalah!

Dan jika anda belum mencuba keluaran terbaru SeaVoice Bot, cubalah! Jemput [SeaVoice Discord Bot](https://discord.com/oauth2/authorize?client_id=1001955060210749492&scope=bot) ke pelayan anda.
Jangan ragu untuk membaca [dokumentasi SeaVoice Bot](https://wiki.seasalt.ai/seavoice/discord/discord-bot/) juga untuk melihat bagaimana anda boleh menggunakan bot untuk memenuhi keperluan komuniti anda dengan sebaik-baiknya.

Nantikan kemas kini menarik yang akan datang!

Terima kasih,

Pasukan Bot SeaVoice.
`;export{a as default};

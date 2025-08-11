const a=`---
title: "SeaVoice STT/TTS Discord Bot: Peningkatan Backend & Stabilitas"
metatitle: "SeaVoice STT/TTS Discord Bot: Peningkatan Backend & Stabilit..."
date: 2022-12-13 11:58:34-08:00
modified_date: 2025-07-28T16:56:53Z
draft: false
author: Sydney Burgess, Kim Dodds, Drake Farmer, Jack Harvison, Dylan Strong, Cody Vernon
description: "Dengan rilis terbaru, SeaVoice Discord Bot meluncurkan peningkatan backend besar-besaran yang meningkatkan stabilitas bot dan membantu pengembangan di masa mendatang."
weight: 1
tags:
  - SeaVoice
  - Discord
image: images/blog/27-discord-backend-improvements/seavoice-discord-stt-tts-bot-backend-improvements.jpg
canonicalURL: /blog/seavoice-discord-backend-improvements/
url: /blog/seavoice-discord-backend-improvements/
---


*SeaVoice Discord Bot telah mendapatkan popularitas sebagai salah satu opsi terbaik untuk mentranskripsikan ucapan di saluran suara Discord. Dengan rilis terbaru, kami meluncurkan peningkatan backend besar-besaran yang meningkatkan stabilitas bot dan membantu pengembangan di masa mendatang.*

# SeaVoice Mengingat: Database Online!

Halo semuanya, akhir-akhir ini kami telah mengerjakan beberapa hal di balik layar untuk SeaVoice Discord Bot yang ingin kami bagikan!

Seperti yang Anda lihat di postingan blog kami sebelumnya, kami menambahkan banyak fitur untuk SeaVoice Bot, seperti rekaman panggilan dan transkripsi baru kami. Bersamaan dengan pengembangan ini, kami telah memberikan SeaVoice Discord Bot kemampuan untuk mengingat apa yang telah dilakukannya: semuanya mulai dari perintah hingga pencatatan kesalahan. Sekarang ketika bot berbicara kepada Anda, atau Anda menggunakannya untuk merekam panggilan, semua informasi itu disimpan dengan cara yang terorganisir.

## Apa Artinya Ini bagi Pengguna
Sekarang apa artinya ini bagi Anda, Anda mungkin bertanya?

Nah, untuk memulai, fitur transkripsi dan unduhan audio baru kami tidak akan mungkin tanpa peningkatan backend ini! Kami juga sekarang dapat secara otomatis menyimpan setiap crash yang tidak menguntungkan yang Anda alami sehingga tim pengembangan kami dapat mulai memperbaiki masalah ini bahkan sebelum Anda menyadarinya. Selain itu, jika ada yang memutuskan mereka tidak lagi ingin data mereka disimpan di sistem kami, organisasi baru ini memungkinkan kami untuk dengan cepat menemukan, mengambil, dan/atau menghapus data apa pun berdasarkan server, saluran, pengguna, tanggal, dll.

Terlebih lagi, ini membuka pintu untuk fitur-fitur baru seperti pelacakan statistik, moderasi otomatis, dan banyak lagi. Moderator, apakah Anda ingin memastikan bahwa aturan server Anda dipatuhi atau memeriksa seberapa sering bot digunakan di server Anda? Mungkin Anda ingin menarik percakapan lucu yang Anda lakukan minggu lalu? Dengan kerangka kerja database yang sekarang kokoh di tempatnya dan digunakan dalam bot produksi, berbagai fitur baru lebih mudah dijangkau.

## Privasi Data

Secara alami, setiap kali kita membahas penyimpanan data pengguna, ada pertanyaan tentang privasi dan keamanan data. Berikut adalah beberapa poin penting tentang cara kami menangani data Anda:
- Semua data pengguna disimpan di server jarak jauh yang aman, yang hanya dapat diakses oleh beberapa karyawan Seasalt.ai terpilih.
- SeaVoice hanya merekam data yang disediakan oleh Discord yang disediakan oleh pengguna saat berinteraksi dengan bot SeaVoice; itu termasuk:
    - Nama & id Server, Saluran, Pengguna
    - Teks yang dimasukkan ke dalam perintah \`/speak\`
    - Audio yang diucapkan di saluran suara saat bot melakukan perintah \`/recognize\`
- Data ini hanya akan digunakan oleh Seasalt.ai untuk meningkatkan layanan.
- Anda dapat meminta agar data Anda dihapus kapan saja.

Untuk detail lengkap, silakan merujuk ke [Kebijakan Privasi Seasalt.ai](https://seasalt.ai/privacy/).

## Arah Masa Depan

Banyak bagian dari pembaruan ini tidak akan terlihat, tetapi bagi kami bagian yang sulit sudah berakhir, dan sekarang kami dapat mulai mengerjakan proyek yang memungkinkan Anda untuk menyesuaikan dan menggunakan SeaVoice Discord Bot lebih dari yang Anda kira mungkin.
Salah satu fitur yang akan datang adalah konfigurasi server dan/atau pengguna yang dapat disesuaikan.
Dengan database yang ada, ini akan memungkinkan kami untuk menyimpan preferensi di masa mendatang, seperti apakah Anda ingin diingatkan bahwa obrolan suara sedang direkam, siapa yang menerima tautan unduhan ke transkripsi panggilan, atau siapa yang ingin memilih untuk tidak direkam.

Punya ide yang ingin Anda tambahkan sekarang setelah kami dapat menyimpan data? Jangan ragu untuk mengirimkan beberapa saran kepada kami melalui [Server Discord Resmi SeaVoice](https://discord.gg/dfAYfwBQ)!

<center>
<iframe src="https://discordapp.com/widget?id=919037515514654721&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
</center>

## Cobalah!

Dan jika Anda belum mencoba rilis terbaru dari SeaVoice Bot, cobalah! Undang [SeaVoice Discord Bot](https://discord.com/oauth2/authorize?client_id=1001955060210749492&scope=bot) ke server Anda.
Jangan ragu untuk membaca [dokumentasi SeaVoice Bot](https://wiki.seasalt.ai/seavoice/discord/discord-bot/) juga untuk melihat bagaimana Anda dapat menggunakan bot untuk memenuhi kebutuhan komunitas Anda dengan sebaik-baiknya.

Nantikan pembaruan menarik yang akan datang!

Terima kasih,

Tim Bot SeaVoice.
`;export{a as default};

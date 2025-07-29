---
title: "Membawa Pelanggan dari Saluran Apa Pun ke Satu Tempat dengan Komunikasi Omnichannel SeaX"
metatitle: "Satukan Kontak Pelanggan dengan Komunikasi Omnichannel SeaX"
date: 2022-07-15T13:56:54-07:00
author: Kim Dodds 
draft: false
image: images/blog/19-seax-omnichannel-communication/0-thumbnail.png
description: "Dalam blog ini kami fokus pada salah satu komunikasi omnichannel SeaX, yang memungkinkan pesan pengguna dari saluran mana pun untuk ditampilkan di platform SeaX."
weight: 1
tags: ["SeaX"]
canonicalURL: "/blog/seax-omnichannel-communication/"
url: "/blog/seax-omnichannel-communication/"
---

*Dalam postingan blog kami sebelumnya, [Selamat Datang di SeaX, Pusat Kontak Cloud Kolaboratif](https://seasalt.ai/blog/18-seax-collaborative-cloud-contact-center-introduction/), kami memperkenalkan solusi pusat kontak komunikasi cloud kolaboratif kami, SeaX. Sementara postingan blog pertama kami memberikan gambaran umum yang komprehensif tentang fungsionalitas dasar dan fitur-fitur canggih SeaX, postingan kami selanjutnya akan menyelami lebih dalam beberapa fitur individual yang membuat SeaX menonjol. Dalam postingan ini, kami akan melihat lebih dekat dukungan omnichannel SeaX dan melihat bagaimana panggilan dan pesan dari berbagai saluran ditampilkan di platform SeaX.*

# Daftar Isi
- [Apa itu komunikasi Omnichannel?](#what-is-omnichannel-communication)
- [Siklus Hidup Pesan](#message-lifecycle)
    - [Saluran](#channel)
    - [Perutean Pesan](#message-routing)
    - [TaskRouter](#taskrouter)
    - [Platform SeaX](#seax-platform)
- [Saluran yang Didukung](#supported-channels)

# Apa itu komunikasi Omnichannel?

Untuk memulai, apa sebenarnya arti "omnichannel"? Sederhananya, "omni" adalah awalan yang berarti "semua", dan "saluran" adalah berbagai platform tempat Anda dapat berinteraksi dengan pelanggan Anda. Jadi sederhananya, "komunikasi omnichannel" berarti kemampuan untuk berkomunikasi melalui semua saluran yang tersedia. Dan lebih dari itu, komunikasi omnichannel berarti bahwa pengalaman antar saluran mulus. Di sisi agen, komunikasi dari semua saluran disajikan dalam satu antarmuka terpadu. Untuk pelanggan, data interaksi mereka tetap ada di seluruh saluran.

Pusat panggilan tradisional biasanya hanya mendukung panggilan telepon. Pusat kontak yang lebih canggih yang terhubung dengan pelanggan melalui berbagai saluran (seperti email, webchat, dan telepon) memiliki pusat kontak multi-saluran. Namun, hanya karena pusat kontak menggunakan banyak saluran tidak berarti pengalaman mereka mulus. Di pusat kontak multi-saluran, saluran yang berbeda dapat diakses melalui platform individual dan/atau data pelanggan mungkin tidak terhubung di seluruh saluran. Sebaliknya, pusat kontak omnichannel memungkinkan agen mengikuti percakapan pelanggan ke mana pun ia pergi, tanpa terkunci dalam satu saluran atau tersebar di lusinan platform.

<center>
<img src="/images/blog/19-seax-omnichannel-communication/1-contact-center-comparison.png" alt="Perbandingan fitur: pusat panggilan tradisional vs pusat kontak; multi-saluran vs omnichannel."/>

*Perbandingan fitur: pusat panggilan tradisional vs pusat kontak; multi-saluran vs omnichannel.*
</center>

SeaX memiliki kemampuan untuk berintegrasi dengan hampir semua saluran, termasuk secara default: teks, telepon, webchat, Facebook, dan banyak lagi. Semua pesan dan panggilan ditampilkan di satu platform terpadu, dan data pengguna dari semua saluran tersedia dengan mudah.

Jika Anda ingin langsung ke demo, lihat video singkat kami yang mendemonstrasikan komunikasi omnichannel SeaX. Di sisa blog ini, kami akan membahas bagaimana pesan dan panggilan dirutekan dari berbagai saluran ke agen di SeaX. Kami juga akan membagikan saluran yang didukung di luar kotak, dan membahas bagaimana SeaX dapat diperluas untuk mencakup saluran baru.

<iframe width="85%" height="450px" src="https://www.youtube.com/embed/usb-RK7sHlA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

# Siklus Hidup Pesan

SeaX dibangun di atas [Twilio Flex](https://www.twilio.com/flex), pusat kontak berbasis cloud yang memanfaatkan platform komunikasi cloud Twilio. Twilio menyediakan blok bangunan dasar untuk SeaX, seperti infrastruktur telekomunikasi, perutean pesan & tugas, dan UI pusat kontak dasar. Sekarang mari kita lacak siklus hidup pesan pengguna yang masuk dan lihat bagaimana SeaX menggunakan arsitektur dasar Twilio yang dikombinasikan dengan komponen khusus untuk merutekan pesan ke agen langsung di platform SeaX.

## Saluran

<center>
<img src="/images/blog/19-seax-omnichannel-communication/2-example-message.jpg" alt="Pengguna mengirim pesan ke bisnis melalui Google Business Messages.", style="width:50%"/>

*Mengirim pesan ke bisnis melalui Google Business Messages.*
</center>

Perjalanan pesan dimulai dengan pengguna menulis pesan dan mengirimkannya di platform yang didukung. Contoh di atas menunjukkan seseorang mengirim pesan ke chatbot Seasalt.ai di Google Business Messages. Google Business Messages tidak didukung oleh Twilio secara default, jadi kami menggunakan konektor saluran khusus yang dikembangkan oleh Seasalt.ai untuk menghubungkan platform Google ke Twilio dan SeaX.

Setelah pesan dikirim, pesan tersebut dikirimkan oleh konektor khusus ke API perpesanan Twilio. Pada titik ini, Twilio membuat konteks percakapan baru untuk pengguna, dan bersiap untuk merutekan pesan.

## Perutean Pesan

<center>
<img src="/images/blog/19-seax-omnichannel-communication/3-studio-flow.png" alt="Alur Studio sederhana yang merutekan pesan ke chatbot atau agen langsung."/>

*Alur Studio sederhana yang merutekan pesan ke chatbot atau agen langsung.*
</center>

Setelah pesan diterima oleh Twilio, pesan tersebut perlu dirutekan ke tempat yang benar. Untuk tujuan ini, kami menggunakan [Twilio Studio Flows](https://www.twilio.com/studio) untuk menentukan apakah akan memberikan respons otomatis, meneruskan pesan ke chatbot, menghubungkan pengguna dengan agen langsung, atau melakukan tindakan lain.

Dalam contoh sederhana yang diberikan di atas, semua pesan masuk akan diteruskan ke chatbot kecuali jika berisi kata-kata "agen langsung", dalam hal ini pengguna akan ditransfer ke agen langsung di platform SeaX.

## TaskRouter

<center>
<img src="/images/blog/19-seax-omnichannel-communication/4-taskrouter.png" alt="Diagram arsitektur TaskRouter."/>

*Diagram arsitektur TaskRouter. [Sumber](https://twilio-cms-prod.s3.amazonaws.com/images/taskrouter-diagram.width-800.png).*
</center>

Setelah pesan ditransfer ke SeaX, langkah selanjutnya adalah memutuskan agen mana yang akan menerimanya. [Twilio’s TaskRouter](https://www.twilio.com/taskrouter) mendistribusikan tugas-tugas seperti pesan dan panggilan telepon ke agen-agen di SeaX yang dapat menanganinya dengan sebaik-baiknya. Setiap agen di SeaX dapat diberi keterampilan seperti bahasa yang mereka gunakan, departemen tempat mereka bekerja, apakah mereka harus menangani pelanggan VIP, dll. TaskRouter akan memeriksa informasi yang diketahui tentang pengguna dan pesan, lalu memilih pekerja yang paling sesuai untuk menangani masalah tersebut. Alur Studio dari langkah sebelumnya dapat disesuaikan untuk mendapatkan informasi tambahan (seperti bahasa pilihan) dan informasi pelanggan dapat dipertahankan di seluruh percakapan dan saluran untuk memastikan pengalaman mereka mulus.

## Platform SeaX

<center>
<img src="/images/blog/19-seax-omnichannel-communication/5-seax-incoming-messages.png" alt="Panggilan dan pesan masuk ditampilkan di platform SeaX.", style="width:50%"/>

*Panggilan dan pesan masuk ditampilkan di platform SeaX.*
</center>

Akhirnya, pesan masuk akan ditampilkan kepada agen yang sesuai di platform SeaX. Agen dapat menangani beberapa tugas dari beberapa saluran secara bersamaan. Dalam gambar di atas, seorang agen memiliki panggilan masuk, pesan Facebook, dan pesan webchat. Agen dapat menerima tugas atau menolaknya untuk diteruskan ke agen berikutnya yang tersedia.

# Saluran yang Didukung

Semoga sekarang lebih jelas apa itu komunikasi omnichannel, dan bagaimana hal itu meningkatkan pengalaman pengguna dan agen. Pertanyaan terakhir adalah: saluran apa saja yang sebenarnya didukung di luar kotak?

<center>
<img src="/images/blog/19-seax-omnichannel-communication/6-channel-comparison.png" alt="Perbandingan saluran yang didukung antara pusat panggilan tradisional, Twilio Flex dasar, dan SeaX."/>

*Perbandingan saluran yang didukung antara pusat panggilan tradisional, Twilio Flex dasar, dan SeaX.*
</center>

Seperti yang disebutkan sebelumnya, pusat panggilan tradisional biasanya hanya mendukung panggilan telepon. Perusahaan mungkin masih berinteraksi dengan pelanggan di media sosial atau melalui email, tetapi pesan-pesan ini tidak terintegrasi ke dalam platform terpadu.

Twilio Flex, di sisi lain, meletakkan dasar untuk pusat kontak omnichannel yang fantastis. Namun, ia memiliki beberapa saluran yang tersedia di luar kotak. Selain panggilan telepon dan teks, mereka juga memiliki dukungan beta untuk Facebook, WhatsApp, dan email.

SeaX dibangun di atas Flex untuk menambahkan dukungan bawaan untuk beberapa saluran yang paling sering diminta: seperti Google Business Messages, Discord, Line, dan Instagram. Selain itu, Seasalt.ai selalu bekerja sama dengan pelanggan untuk membawa saluran baru ke jajaran SeaX. SeaX sangat dapat disesuaikan, dan mudah diperluas - yang berarti kami dapat bekerja sama dengan perusahaan Anda untuk mengintegrasikan saluran apa pun yang paling Anda inginkan.

Terima kasih telah meluangkan waktu untuk membaca tentang bagaimana pusat kontak cloud SeaX menggunakan komunikasi omnichannel untuk memberikan pengalaman pelanggan dan agen yang mulus. Nantikan postingan blog kami berikutnya, yang akan membahas apa artinya menjadi "pusat kontak terdistribusi". Jika Anda tertarik untuk mempelajari lebih lanjut segera, isi [formulir Pesan Demo](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting) kami untuk melihat langsung platform SeaX.

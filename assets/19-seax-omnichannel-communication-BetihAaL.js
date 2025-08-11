const a=`---
title: "Bawa Pelanggan dari Saluran Apa Pun ke Satu Tempat dengan Komunikasi Omnichannel SeaX"
metatitle: "Satukan Titik Kontak Pelanggan dengan Komunikasi Omnichannel SeaX"
date: 2022-07-15 13:56:54-07:00
modified_date: 2025-08-02 17:00:00-07:00
draft: false
author: Kim Dodds
description: "Dalam blog ini, kami menyoroti salah satu komunikasi omnichannel SeaX, yang memungkinkan pesan pengguna dari saluran apa pun muncul di platform SeaX."
weight: 1
tags:
  - SeaX
image: images/blog/19-seax-omnichannel-communication/0-thumbnail.png
canonicalURL: /blog/seax-omnichannel-communication/
url: /blog/seax-omnichannel-communication/
---

*Dalam postingan blog kami sebelumnya, [Selamat Datang di SeaX, Pusat Kontak Cloud Kolaboratif](https://seasalt.ai/blog/18-seax-collaborative-cloud-contact-center-introduction/), kami memperkenalkan SeaX, solusi pusat kontak komunikasi cloud kolaboratif kami. Sementara postingan blog pertama kami memberikan gambaran umum yang komprehensif tentang fitur-fitur dasar dan lebih canggih dari SeaX, postingan kami selanjutnya akan membahas lebih dalam beberapa fitur individual yang membuat SeaX menonjol. Dalam postingan ini, kita akan melihat lebih dekat dukungan omnichannel SeaX dan melihat bagaimana panggilan dan pesan dari berbagai saluran muncul di platform SeaX.*

# Daftar Isi
- [Apa itu Komunikasi Omnichannel?](#what-is-omnichannel-communication)
- [Siklus Hidup Pesan](#message-lifecycle)
    - [Saluran](#channel)
    - [Perutean Pesan](#message-routing)
    - [TaskRouter](#taskrouter)
    - [Platform SeaX](#seax-platform)
- [Saluran yang Didukung](#supported-channels)

# Apa itu Komunikasi Omnichannel?

Pertama-tama, apa sebenarnya arti "omnichannel"? Dipecah, "omni" adalah awalan yang berarti "semua," dan "saluran" adalah berbagai platform tempat Anda dapat berinteraksi dengan pelanggan Anda. Jadi, secara sederhana, "komunikasi omnichannel" berarti dapat berkomunikasi melalui setiap dan semua saluran yang tersedia. Tidak hanya itu, tetapi komunikasi omnichannel juga berarti bahwa pengalaman antar saluran mulus. Di sisi agen, komunikasi dari semua saluran disajikan dalam antarmuka terpadu. Bagi pelanggan, data interaksi mereka persisten di seluruh saluran.

Call center tradisional seringkali hanya mendukung panggilan telepon. Pusat kontak yang lebih canggih yang berinteraksi dengan pelanggan di berbagai saluran, seperti email, obrolan web, dan telepon, memiliki pusat kontak multisaluran. Namun, hanya karena pusat kontak menggunakan banyak saluran tidak berarti pengalaman mereka mulus. Di pusat kontak multisaluran, saluran yang berbeda dapat diakses melalui platform terpisah, dan/atau data pelanggan mungkin tidak ditautkan di seluruh saluran. Sebaliknya, pusat kontak omnichannel memungkinkan agen untuk melacak percakapan pelanggan ke mana pun mereka pergi, tanpa terkunci dalam satu saluran atau tersebar di selusin platform.

<center>
<img src="/images/blog/19-seax-omnichannel-communication/1-contact-center-comparison.png" alt="Perbandingan fitur: call center tradisional vs. pusat kontak; multisaluran vs. omnichannel."/>

*Perbandingan fitur: call center tradisional vs. pusat kontak; multisaluran vs. omnichannel.*
</center>

SeaX mampu berintegrasi dengan hampir semua saluran, termasuk secara default: teks, telepon, obrolan web, Facebook, dan banyak lagi. Semua pesan dan panggilan ditampilkan pada platform terpadu, dan data pengguna dari semua saluran sudah tersedia.

Jika Anda ingin langsung ke demo, tonton video singkat kami di mana kami mendemonstrasikan komunikasi omnichannel SeaX. Di sisa blog ini, kami akan membahas langkah demi langkah bagaimana pesan dan panggilan dari berbagai saluran dialihkan ke agen di SeaX. Kami juga akan membagikan saluran yang didukung di luar kotak dan membahas bagaimana SeaX dapat diperluas untuk mencakup saluran baru.

<iframe width="85%" height="450px" src="https://www.youtube.com/embed/usb-RK7sHlA" title="Pemutar video YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

# Siklus Hidup Pesan

SeaX dibangun di atas [Twilio Flex](https://www.twilio.com/flex), pusat kontak berbasis cloud yang memanfaatkan platform komunikasi cloud Twilio. Twilio menyediakan blok bangunan fundamental untuk SeaX, seperti infrastruktur telekomunikasi, perutean pesan dan tugas, dan UI pusat kontak dasar. Sekarang mari kita lacak siklus hidup pesan pengguna yang masuk dan lihat bagaimana SeaX menggunakan arsitektur Twilio dasar dalam kombinasi dengan komponen khusus untuk merutekan pesan ke agen langsung di platform SeaX.

## Saluran

<center>
<img src="/images/blog/19-seax-omnichannel-communication/2-example-message.jpg" alt="Seorang pengguna mengirim pesan ke bisnis di Google Business Messages." style="width:50%"/>

*Mengirim pesan ke bisnis di Google Business Messages.*
</center>

Perjalanan pesan dimulai dengan pengguna yang menulis dan mengirim pesan di platform yang didukung. Contoh di atas menunjukkan seseorang mengirim pesan ke chatbot Seasalt.ai di Google Business Messages. Secara default, Twilio tidak mendukung Google Business Messages, jadi kami menggunakan konektor saluran khusus yang dikembangkan oleh Seasalt.ai untuk menjembatani platform Google ke Twilio dan SeaX.

Setelah pesan dikirim, pesan tersebut diteruskan oleh konektor khusus ke Twilio Messaging API. Pada titik ini, Twilio membuat konteks percakapan baru untuk pengguna dan bersiap untuk merutekan pesan.

## Perutean Pesan

<center>
<img src="/images/blog/19-seax-omnichannel-communication/3-studio-flow.png" alt="Alur Studio sederhana yang merutekan pesan ke chatbot atau agen langsung."/>

*Alur Studio sederhana yang merutekan pesan ke chatbot atau agen langsung.*
</center>

Setelah pesan diterima oleh Twilio, pesan tersebut perlu dirutekan ke lokasi yang benar. Untuk melakukan ini, kami menggunakan [Twilio Studio Flows](https://www.twilio.com/studio) untuk menentukan apakah akan memberikan respons otomatis, meneruskan pesan ke chatbot, menghubungkan pengguna dengan agen langsung, atau melakukan tindakan lain.

Dalam contoh sederhana yang diberikan di atas, semua pesan yang masuk akan diteruskan ke chatbot kecuali jika berisi frasa "agen langsung", dalam hal ini pengguna akan ditransfer ke agen langsung di platform SeaX.

## TaskRouter

<center>
<img src="/images/blog/19-seax-omnichannel-communication/4-taskrouter.png" alt="Diagram arsitektur TaskRouter."/>

*Diagram arsitektur TaskRouter. [Sumber](https://twilio-cms-prod.s3.amazonaws.com/images/taskrouter-diagram.width-800.png).*
</center>

Setelah pesan ditransfer ke SeaX, langkah selanjutnya adalah memutuskan agen mana yang akan menerimanya. [TaskRouter Twilio](https://www.twilio.com/taskrouter) menugaskan tugas seperti pesan dan panggilan telepon ke agen di SeaX yang paling siap untuk menanganinya. Setiap agen di SeaX dapat diberi keterampilan, seperti bahasa apa yang mereka gunakan, di departemen mana mereka bekerja, apakah mereka harus menangani pelanggan VIP, dll. TaskRouter akan memeriksa informasi yang diketahui tentang pengguna dan pesan dan kemudian memilih karyawan yang paling tepat untuk menangani masalah tersebut. Alur Studio dari langkah sebelumnya dapat disesuaikan untuk mendapatkan informasi tambahan (seperti bahasa pilihan), dan informasi pelanggan dapat dipertahankan di seluruh percakapan dan saluran untuk memastikan pengalaman mereka mulus.

## Platform SeaX

<center>
<img src="/images/blog/19-seax-omnichannel-communication/5-seax-incoming-messages.png" alt="Panggilan dan pesan masuk muncul di platform SeaX." style="width:50%"/>

*Panggilan dan pesan masuk muncul di platform SeaX.*
</center>

Terakhir, pesan yang masuk akan disajikan kepada agen yang sesuai di platform SeaX. Agen dapat menangani banyak tugas dari berbagai saluran sekaligus. Pada gambar di atas, satu agen memiliki panggilan masuk, pesan Facebook, dan pesan obrolan web. Agen dapat menerima tugas atau menolaknya untuk meneruskannya ke agen berikutnya yang tersedia.

# Saluran yang Didukung

Semoga sekarang lebih jelas apa itu komunikasi omnichannel dan bagaimana hal itu meningkatkan pengalaman pengguna dan agen. Pertanyaan terakhir adalah: saluran apa yang didukung di luar kotak?

<center>
<img src="/images/blog/19-seax-omnichannel-communication/6-channel-comparison.png" alt="Perbandingan saluran yang didukung antara call center tradisional, Twilio Flex dasar, dan SeaX."/>

*Perbandingan saluran yang didukung antara call center tradisional, Twilio Flex dasar, dan SeaX.*
</center>

Seperti disebutkan sebelumnya, call center tradisional seringkali hanya mendukung panggilan telepon. Perusahaan mungkin masih berinteraksi dengan pelanggan melalui media sosial atau email, tetapi pesan-pesan ini tidak terintegrasi ke dalam platform terpadu.

Twilio Flex, di sisi lain, meletakkan dasar untuk pusat kontak omnichannel yang sangat baik. Namun, ia memiliki sangat sedikit saluran di luar kotak. Selain panggilan telepon dan SMS, mereka memiliki dukungan beta untuk Facebook, WhatsApp, dan email.

SeaX dibangun di atas Flex dan menambahkan dukungan bawaan untuk beberapa saluran yang paling banyak diminta: seperti Google Business Messages, Discord, Line, dan Instagram. Selain itu, Seasalt.ai selalu bekerja sama dengan pelanggan untuk menghadirkan saluran baru ke lini produk SeaX. SeaX sangat dapat disesuaikan dan mudah diperluas—ini berarti kami dapat bekerja sama dengan perusahaan Anda untuk mengintegrasikan saluran apa pun yang paling Anda inginkan.

Terima kasih telah meluangkan waktu untuk membaca bagaimana pusat kontak cloud SeaX memanfaatkan komunikasi omnichannel untuk memberikan pengalaman pelanggan dan agen yang mulus. Nantikan postingan blog kami berikutnya, yang akan mengeksplorasi apa artinya menjadi "pusat kontak terdistribusi". Jika Anda tertarik untuk mempelajari lebih lanjut sekarang, isi [formulir permintaan demo](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting) kami untuk merasakan platform SeaX secara langsung.`;export{a as default};

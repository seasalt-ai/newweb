const a=`---
title: "Berikan Pusat Kontak Anda Suara Sendiri dengan SeaX Voice Intelligence"
metatitle: "Biarkan Pusat Kontak Anda Berbicara dengan SeaX Voice Intelligence"
date: 2022-08-02 17:24:00-07:00
modified_date: 2025-07-29 20:45:17+00:00
draft: false
author: Kim Dodds, Cody Kim, Xuchen Yao, Guoguo Chen
description: "Dalam blog ini, kami akan menunjukkan bagaimana mesin teks-ke-suara dan suara-ke-teks Seasalt.ai dapat meningkatkan berbagai aspek platform SeaX."
weight: 1
tags:
  - SeaX
image: /images/blog/21-seax-voice-intelligence/thumbnail.png
canonicalURL: /blog/seax-voice-intelligence/
url: /blog/seax-voice-intelligence/
---

*Sejauh ini dalam [seri blog SeaX](https://seasalt.ai/tags/seax/), kami telah memberikan gambaran umum yang luas tentang produk unggulan Seasalt.ai: SeaX. Kami juga membahas dua fitur utama yang membedakan SeaX dari pusat panggilan tradisional: pertama, bahwa SeaX adalah omnichannel, yang berarti Anda dapat lebih mudah berinteraksi dengan pelanggan di saluran mana pun, dan kedua, bahwa platform ini adalah pusat kontak terdistribusi, yang memungkinkan Anda untuk dengan mulus mengarahkan pesan dan panggilan dari pelanggan di seluruh dunia ke agen terdistribusi Anda di berbagai lokasi.*

*Sekarang setelah kami membahas dasar-dasar platform SeaX, kami akan beralih ke fitur AI dan otomatisasi canggih yang membedakan SeaX dari pusat kontak omnichannel terdistribusi lainnya. Dalam blog ini, kami akan menunjukkan bagaimana mesin teks-ke-suara dan suara-ke-teks Seasalt.ai dapat meningkatkan berbagai aspek platform SeaX.*

# Daftar Isi
- [Pengantar Kecerdasan Suara](#into-to-voice-intelligence)
- [Apa yang Membedakan Seasalt.ai](#what-sets-seasaltai-apart)
    - [Suara-ke-Teks](#speech-to-text)
    - [Teks-ke-Suara](#text-to-speech)
- [TTS dan STT di SeaX](#tts-and-stt-in-seax)
    - [IVR Suara](#voice-ivr)
    - [Pesan Tidak Tersedia](#unavailable-message)
    - [Transkripsi Langsung](#live-transcription)
    - [Dan Lainnya...](#and-more)

# Pengantar Kecerdasan Suara

Kecerdasan Suara adalah penggunaan Kecerdasan Buatan untuk menganalisis dan menarik wawasan dari data berbasis suara. Meskipun dekade sebelumnya telah melihat perkembangan luar biasa dalam teknologi suara, penggunaannya dalam pengaturan perusahaan masih agak terbatas. Perusahaan terus mengumpulkan terabyte data suara, tetapi dalam banyak kasus, itu tidak digunakan secara maksimal.

Salah satu alasannya adalah data suara lebih sulit diproses daripada bentuk data lain, seperti statistik dasar atau bahkan data teks biasa. Data ucapan unik dalam banyak cara yang berbeda:
1. Ini tergantung bahasa, dengan dialek dan aksen, sehingga sulit untuk menangkap 100% informasi
2. Kualitasnya bervariasi berdasarkan saluran (telepon vs. VoIP, mono vs. stereo), laju pengambilan sampel (8KHz vs. 16KHz), akurasi representasi (8bit, 16 bit, 32bit) dan suara lingkungan seperti kebisingan latar belakang
3. Lebih sulit untuk menafsirkan: dari emosi ucapan hingga identifikasi pembicara hingga semantik makna

Namun, jika ditangani dengan benar dengan alat yang tepat, kecerdasan suara dapat memberikan manfaat besar bagi perusahaan yang menggunakannya. Antara lain, kemampuan untuk mengelola data suara dengan benar membuka kemampuan untuk menggunakan transkripsi suara-ke-teks yang dipersonalisasi, yang dapat membuat percakapan dapat dicari, diindeks & berwawasan, dan memungkinkan pemrosesan NLP lebih lanjut. Seiring dengan semakin banyaknya data yang dikumpulkan, peningkatan pada layanan ini juga dimungkinkan, seperti: meningkatkan akurasi transkripsi, meningkatkan cakupan kasus penggunaan, dan menyediakan model ucapan dan bahasa yang dapat disesuaikan untuk beradaptasi dengan bahasa dan dialek baru.

# Apa yang Membedakan Seasalt.ai

Seasalt.ai menyediakan teknologi dan produk AI Komunikasi Cloud untuk pelanggan perusahaan.
Kami telah mengembangkan teknologi ucapan dan bahasa internal untuk pesan teks
dan panggilan suara di pusat kontak perusahaan. Mesin bahasa alami kami mendukung berbagai
bahasa sumber daya tinggi dan sumber daya rendah: Burma, Cina, Inggris, Filipina,
Jerman, Indonesia, Khmer, Lao, Melayu, Spanyol, Tamil, Thailand, Vietnam, dll.
Seasalt.ai didanai ventura dan dijalankan oleh sekelompok ahli terkemuka dunia dalam pengenalan ucapan mendalam,
sintesis ucapan saraf, dan dialog bahasa alami.

Tonton video demo suara-ke-teks kami:
<iframe width="85%" height="450px" src="https://www.youtube.com/embed/Log8usX8ViE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

## Suara-ke-Teks

<center>
<img src="/images/blog/21-seax-voice-intelligence/STT.png" alt="Grafik suara-ke-teks."/>
</center>

Mesin suara-ke-teks kami menerima audio ucapan dan menghasilkan transkripsi secara real time. Dimulai dengan audio, kami mengekstrak fitur fonetik, mengubah fitur ini menjadi fonem, dan kemudian memetakan fonem ini ke ortografi bahasa target. Sistem kami saat ini mampu mentranskripsi beberapa bahasa, termasuk Inggris dan Cina, dengan lebih banyak bahasa yang terus ditambahkan.

Tonton video kustomisasi Speech-to-Text kami untuk melihat bagaimana mesin STT Seasalt dapat disesuaikan untuk domain apa pun:
<iframe width="85%" height="450px" src="https://www.youtube.com/embed/1YEU6mexzWQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

## Teks-ke-Suara

<center>
<img src="/images/blog/21-seax-voice-intelligence/TTS.png" alt="Grafik teks-ke-suara."/>
</center>

Teks-ke-Suara adalah proses mensintesis ucapan manusia yang realistis lengkap dengan intonasi dan irama alami hanya dari teks. Model kami mengambil teks biasa, menerjemahkan teks ini menjadi fonem dan kemudian mengubah fonem menjadi audio sambil memprediksi nada, durasi, dan volume yang tepat pada setiap langkah waktu untuk pengalaman TTS yang paling hidup. Jika hasil akhirnya tidak sempurna, kami menyediakan kemampuan untuk menyetel audio yang disintesis termasuk pengucapan kata, jeda, dan penekanan.

Tonton video demo kustomisasi Text-to-Speech kami untuk melihat bagaimana output mesin TTS Seasalt dapat disesuaikan untuk memberikan ucapan sintetis yang hidup:

<iframe width="85%" height="450px" src="https://www.youtube.com/embed/GJCOhTtImp8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

Anda juga dapat memeriksa [halaman TTS](https://suite.seasalt.ai/tts) di situs web kami untuk mendengarkan contoh beberapa suara sintetis kami, termasuk Tom Hanks, David Attenborough, dan Reese Witherspoon.

# TTS dan STT di SeaX

## IVR Suara

<center>
<img src="/images/blog/21-seax-voice-intelligence/flow.png" alt="Alur IVR Suara menggunakan mesin suara-ke-teks Seasalt.ai untuk transkripsi real-time dan perutean panggilan."/>

*Alur IVR Suara menggunakan mesin suara-ke-teks Seasalt.ai untuk transkripsi real-time dan perutean panggilan.*
</center>

Kecerdasan suara dapat mulai membantu sebelum panggilan bahkan muncul ke platform SeaX dengan memastikan bahwa panggilan diarahkan ke tempat yang benar dan mengumpulkan informasi penting sebelum menyerahkan panggilan ke agen. SeaX menggunakan Twilio Studio untuk menyesuaikan alur perutean panggilan dan pesan. Tetapi kami juga dapat mengintegrasikan mesin suara-ke-teks kami dalam alur IVR untuk memungkinkan pelanggan menggunakan bahasa alami untuk mengarahkan panggilan mereka (bukan pengalaman tradisional “tekan 1 untuk…”). Selain itu, jika perusahaan Anda tertarik untuk menggunakan chatbot untuk berinteraksi dengan pelanggan, kami dapat melangkah lebih jauh dengan memberikan suara kepada chatbot Anda untuk berbicara dengan pelanggan melalui telepon menggunakan mesin teks-ke-suara kami.

## Pesan Tidak Tersedia

<center>
<img src="/images/blog/21-seax-voice-intelligence/unavailable-message.png" alt="Konfigurasi pesan tidak tersedia SeaX menggunakan teks-ke-suara."/>

*Konfigurasi pesan tidak tersedia SeaX menggunakan teks-ke-suara.*
</center>

Teknologi teks-ke-suara kami juga memungkinkan pesan suara yang sangat dapat disesuaikan. Misalnya, ini dapat dipicu ketika pelanggan menelepon setelah jam kerja normal, atau jika pelanggan perlu ditahan saat mereka menunggu agen yang tersedia.

## Transkripsi Langsung

<center>
<img src="/images/blog/21-seax-voice-intelligence/live-transcription.jpg" alt="Transkripsi panggilan langsung dengan analitik yang ditampilkan kepada agen di SeaX."/>

*Transkripsi panggilan langsung dengan analitik yang ditampilkan kepada agen di SeaX.*
</center>

Setelah pelanggan melakukan panggilan dengan agen, mesin suara-ke-teks kami menyediakan transkripsi percakapan real-time yang akurat untuk referensi agen. Ini memungkinkan agen untuk merujuk ke poin-poin sebelumnya dalam percakapan dan/atau memeriksa kembali pemahaman mereka tentang apa yang dikatakan pelanggan. Selain itu, transkripsi ini sangat berguna untuk aplikasi hilir seperti ekstraksi topik, ekstraksi tindakan, ringkasan, analitik rapat, dll.

## Dan Lainnya...

Di atas hanyalah beberapa cara SeaX mengintegrasikan kecerdasan suara canggih untuk mengurangi waktu tunggu, meningkatkan kinerja agen, dan memberikan pengalaman yang mulus secara keseluruhan kepada pelanggan dan agen. Untuk mempelajari lebih lanjut tentang fitur-fitur canggih yang datang dengan platform SeaX, nantikan postingan blog kami berikutnya, yang mencakup basis pengetahuan AI, manajemen kasus, dan SMS massal. Untuk mendapatkan demo pribadi dan mendiskusikan bagaimana platform SeaX dapat memenuhi kebutuhan bisnis spesifik Anda, isi [formulir Pesan Demo](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting) kami.
`;export{a as default};

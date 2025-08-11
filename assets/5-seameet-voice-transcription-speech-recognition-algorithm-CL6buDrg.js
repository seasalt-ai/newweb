const a=`---
title: "Dari Demo ke Kejayaan: Terobosan Algoritma Suara Mesyuarat Moden (3/5)"
metatitle: "Dari Demo ke Kejayaan (3/5): Terobosan Algoritma Suara Mesyuarat Moden"
date: 2021-07-30 17:43:38-07:00
modified_date: 2024-07-19T00:00:00Z
draft: false
author: Cody Kim, Shayne Mei
description: "Dalam bahagian ketiga siri blog ini, ikuti perjalanan Seasalt.ai membangunkan penyelesaian mesyuarat moden SeaMeet."
weight: 1
tags:
  - SeaMeet
image: images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/SeaMeet animation.gif
canonicalURL: /blog/seameet-voice-speech-recognition/
url: /blog/seameet-voice-speech-recognition/
---

Dalam siri blog ini, ikuti perjalanan Seasalt.ai membangunkan pengalaman mesyuarat moden yang lengkap, dari permulaan, pengoptimuman pada pelbagai perkakasan dan model, hingga integrasi sistem NLP tercanggih, akhirnya merealisasikan penyelesaian kolaborasi SeaMeet.

## Melangkaui Algoritma
Modern Meetings ialah demo yang hebat, tetapi ia kekal sebagai demo. Untuk benar-benar digunakan dalam produksi, masih ada jalan panjang. Kami mula-mula berjaya membina demo menggunakan teknologi Microsoft Azure. Namun, setelah mengenal pasti pelbagai kekurangan perisian, kami memutuskan untuk menggantikan algoritma dengan teknologi sendiri, menjadikan pengalaman lebih lancar, ringan dan fleksibel.
Modern Meetings mempunyai empat komponen utama:

1. Pemprosesan isyarat susunan mikrofon, terutamanya pembentukan pancaran (beamforming)
2. Pemisahan dan pengecaman penutur
3. Pengecaman suara tersuai
4. Antara muka pengguna yang lebih baik

Seterusnya kami akan menerangkan setiap komponen penting ini.

<center>
<img src="/images/blog/5-seameet-voice-intelligence-meeting-transcription-speech-recognition-algorithm-of-modern-meeting/tech-stack.png" alt="SeaMeet architect with 4 major components"/>

Kami membina semula empat komponen utama Modern Meetings dengan teknologi kami sendiri: 1. Pemprosesan isyarat susunan mikrofon; 2. Pemisahan dan pengecaman penutur; 3. Pengecaman suara tersuai; 4. Antara muka web moden.
</center>

### Pemprosesan Isyarat Susunan Mikrofon
Berbanding mikrofon tunggal, susunan mikrofon boleh menangkap suara dari 360 darjah sehingga jarak 5 meter. Satu susunan mikrofon boleh mengumpul suara dalam bilik mesyuarat bersaiz sederhana 10m x 10m. Semua mikrofon tertumpu pada satu peranti, mengurangkan kekusutan kabel dan memudahkan pemasangan serta penyelenggaraan.
Matlamat utama menggunakan susunan mikrofon adalah untuk menyediakan data berkualiti tinggi kepada model kami. Oleh itu, sebelum pengecaman suara automatik, kami menjalankan pelbagai algoritma pemprosesan isyarat. Inti praproses ini ialah algoritma beamforming. Dengan susunan mikrofon bulat, kami boleh memanfaatkan perbezaan masa ketibaan suara ke setiap mikrofon. Beamforming menentukan ciri utama isyarat (beam terbaik), menguatkan frekuensi tersebut dan menindas bunyi yang tidak diingini. Hasilnya ialah pengurangan hingar dan gema, menjadikan suara utama lebih jelas.

Banyak algoritma beamforming memerlukan maklumat lokasi penutur relatif kepada mikrofon. Namun, dalam aplikasi sebenar, ini hampir mustahil. Jadi, kami mula-mula mengira arah sumber suara (DOA). Masalah utama ialah kestabilan. Algoritma boleh memberikan hasil kasar yang betul, tetapi sumber suara akan berayun dalam lingkungan 30 darjah di kedua-dua sisi arah sebenar, menjejaskan beamforming. Penyelesaian kami ialah hanya menggunakan jalur frekuensi utama suara manusia dan menggabungkan teknik pelicinan, mengekalkan "sejarah" DOA untuk purata. DOA yang lebih stabil membolehkan kami mengira berat medan jauh dan menentukan beam terbaik.

Pada Kinect DK, satu siri algoritma dijalankan: beamforming, pengurangan hingar, pengurangan gema, dan pengesanan arah sumber suara. Ini membolehkan kami menghasilkan suara manusia yang jelas secara masa nyata dan menganggarkan arah penutur, membantu pengecaman penutur seterusnya.

### Pemisahan dan Pengecaman Penutur
Komponen penting seterusnya ialah pengecaman penutur automatik. Seperti yang diterangkan dalam bahagian sebelumnya, membaca transkrip tanpa maklumat penutur adalah mengelirukan dan tidak bermakna. Inilah peranan pengecaman penutur.

Dengan komponen ini, kami boleh menyelaraskan transkrip dan audio dengan nama penutur. Kaedahnya ialah menggunakan teknik pemisahan, mengelompokkan segmen audio mengikut bilangan penutur. Sistem pengesanan aktiviti suara (VAD) mengenal pasti segmen suara, dan vektor x (xvector) tetingkap pendek diekstrak. Purata xvector ini menghasilkan xvector per penutur. Kemudian, pengelompokan dilakukan, setiap kelompok mewakili segmen suara penutur yang sama. Pilihan algoritma pengelompokan sangat mempengaruhi prestasi pemisahan. Kami menggunakan pengelompokan spektrum dengan matriks afiniti ambang dan penalaan automatik nilai NME, mencapai kadar ralat pemisahan terbaik (DER). Akhirnya, setiap kelompok dipadankan dengan penutur sebenar menggunakan rakaman 40 saat sebelum mesyuarat.

Fleksibiliti proses ini ialah: dalam banyak mesyuarat, tidak realistik untuk mendapatkan rakaman setiap penutur terlebih dahulu. Contohnya, mesyuarat perniagaan dengan pelanggan VIP atau seminar besar dengan 50 penutur. Dalam kes ini, langkah pendaftaran boleh dilangkau, sistem pemisahan kami masih boleh mengelompokkan segmen suara. Hanya perlu manusia mendengar beberapa saat dari setiap kelompok untuk mengenal pasti penutur. Dengan antara muka pengguna moden, fungsi yang sama boleh dicapai dengan lebih fleksibel.

### Pengecaman Suara Tersuai

Setelah memahami kehebatan transkrip mesyuarat Microsoft, kami bersedia untuk membina sistem yang benar-benar berdikari, melangkaui produk revolusioner sedia ada. Inti Modern Meetings dan mana-mana produk transkrip ialah model pengecaman suara automatik (ASR), jadi kami memberi tumpuan paling banyak di sini.
Azure Cognitive Services menawarkan pelbagai model bahasa dan dialek, tetapi prestasi antara dialek sukar dibezakan. Untuk pelbagai dialek Inggeris, kebanyakan usaha dan data tertumpu pada model Inggeris Amerika, kemudian dialek lain disesuaikan dengan data beraksen. Kami mahu memastikan jika menyediakan model tersendiri, ia benar-benar dioptimumkan untuk kes penggunaan tertentu. Ini bermakna mengumpul ribuan jam audio dan transkrip setempat, serta berminggu-minggu latihan dan penalaan. Melihat model bertambah baik setiap epoch sangat memuaskan.

Dengan model asas yang kukuh, langkah seterusnya ialah memperluas kebolehcapaian dan penyesuaian. Setiap industri mempunyai banyak istilah khusus, menjadikan model ASR sukar membezakan perkataan jarang dan perkataan biasa yang sebutannya serupa.

Penyelesaian kami ialah SeaVoice, yang menyediakan platform terpusat untuk pengguna menyesuaikan model mengikut keperluan khusus mereka. `;export{a as default};

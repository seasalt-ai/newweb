const a=`---
title: "Dari Demo ke Sukses: Terobosan Algoritma Suara Rapat Modern (3/5)"
metatitle: "Dari Demo ke Sukses (3/5): Terobosan Algoritma Suara Rapat Modern"
date: 2021-07-30 17:43:38-07:00
modified_date: 2024-07-19 00:00:00+00:00
draft: false
author: Cody Kim, Shayne Mei
description: "Bagian ketiga dari seri blog ini mengikuti perjalanan Seasalt.ai dalam menciptakan solusi rapat kolaboratif modern SeaMeet."
weight: 1
tags:
  - SeaMeet
image: images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/SeaMeet animation.gif
canonicalURL: /blog/seameet-voice-speech-recognition/
url: /blog/seameet-voice-speech-recognition/
---

Dalam seri blog ini, ikuti perjalanan Seasalt.ai dalam menciptakan pengalaman rapat modern yang lengkap, mulai dari tahap awal, optimasi di berbagai perangkat keras dan model, hingga integrasi sistem NLP tercanggih, akhirnya mewujudkan solusi rapat kolaboratif modern SeaMeet.

## Melampaui Algoritma

Modern Meetings adalah demo yang hebat, tetapi tetap saja hanya sebatas demo. Untuk benar-benar digunakan di produksi, masih ada jalan panjang. Awalnya kami berhasil membuat versi demo menggunakan stack teknologi Microsoft Azure. Namun, setelah menyadari berbagai kekurangan perangkat lunak, kami memutuskan untuk menggantinya dengan algoritma sendiri agar pengalaman menjadi lebih lancar, ringan, dan fleksibel.

Modern Meetings memiliki empat komponen utama:
1. Pemrosesan sinyal array mikrofon, khususnya beamforming
2. Pemisahan dan identifikasi pembicara
3. Pengenalan suara yang disesuaikan
4. Antarmuka pengguna yang lebih baik

Selanjutnya, kami akan membahas semua komponen penting ini secara detail.

<center>
<img src="/images/blog/5-seameet-voice-intelligence-meeting-transcription-speech-recognition-algorithm-of-modern-meeting/tech-stack.png" alt="Arsitektur SeaMeet dengan 4 komponen utama"/>
Kami membangun ulang empat komponen utama Modern Meetings dengan teknologi kami sendiri: 1. Pemrosesan sinyal array mikrofon; 2. Pemisahan dan identifikasi pembicara; 3. Pengenalan suara yang disesuaikan; 4. Antarmuka web modern.
</center>

### Pemrosesan Sinyal Array Mikrofon

Dibandingkan dengan mikrofon tunggal, array mikrofon dapat menangkap suara dari 360 derajat hingga jarak 5 meter. Dengan demikian, satu array mikrofon dapat mengumpulkan suara di ruang rapat berukuran sedang 10x10 meter. Semua mikrofon terpusat pada satu perangkat, secara signifikan mengurangi kekacauan kabel di ruang rapat dan menyederhanakan instalasi serta pemeliharaan.

Di sisi lain, tujuan hilir dari penggunaan array mikrofon adalah menyediakan data berkualitas terbaik untuk model kami. Oleh karena itu, sebelum pengenalan suara otomatis, kami melakukan berbagai algoritma pemrosesan sinyal. Inti dari pipeline pra-pemrosesan adalah algoritma beamforming. Karena kami menggunakan array mikrofon melingkar, kami dapat memanfaatkan perbedaan waktu kedatangan suara ke setiap mikrofon. Beamforming berfungsi untuk menentukan fitur utama sinyal (beam terbaik), memperkuat frekuensi tersebut, sekaligus meredam suara yang tidak diinginkan. Hasilnya adalah pengurangan noise dan dereverberasi, sehingga sinyal utama (suara) terdengar lebih keras dan jelas.

Banyak algoritma beamforming berkinerja optimal jika mengetahui posisi sumber suara (pembicara) relatif terhadap mikrofon. Namun, dalam praktiknya hal ini hampir mustahil, sehingga kami terlebih dahulu menghitung bobot jarak jauh dengan menentukan arah datangnya suara (DOA). Masalah utama yang kami temui adalah kestabilan. Algoritma dapat memberikan hasil yang cukup akurat, tetapi posisi sumber suara sering berfluktuasi dalam rentang 30 derajat di kedua sisi arah sebenarnya, memengaruhi beamforming. Solusi kami adalah hanya membiarkan algoritma DOA menggunakan pita frekuensi utama suara manusia dan mengombinasikan teknik smoothing, menyimpan "riwayat" hasil DOA untuk dirata-ratakan. Hasil DOA yang lebih andal memungkinkan kami menghitung bobot jarak jauh dan menentukan beam terbaik.

Serangkaian algoritma yang dijalankan di Kinect DK—beamforming, noise reduction, dereverberasi, dan DOA—memungkinkan kami menghasilkan suara manusia yang jernih secara real-time dan memperkirakan arah pembicara. Ini sangat membantu tahap berikutnya, yaitu identifikasi pembicara.

### Pemisahan dan Identifikasi Pembicara

Komponen penting berikutnya dari sistem transkripsi rapat adalah identifikasi pembicara otomatis. Seperti yang dijelaskan pada bagian sebelumnya, membaca transkrip percakapan tanpa informasi pembicara sangat membingungkan dan kehilangan makna. Di sinilah pentingnya identifikasi pembicara.

Dengan komponen ini, kami dapat secara otomatis menyelaraskan transkrip dan audio dengan nama pembicara. Caranya adalah dengan menggunakan teknik pemisahan, mengelompokkan segmen audio menjadi sejumlah grup sesuai jumlah pembicara. Metode ini menggunakan sistem deteksi aktivitas suara (VAD) untuk menentukan segmen suara, lalu mengekstrak vektor representasi jendela pendek. Setiap vektor jendela disebut xvector tingkat ucapan, yang dirata-ratakan menjadi xvector tingkat pembicara. Xvector ini kemudian dikelompokkan, setiap klaster mewakili segmen suara dari pembicara yang sama. Perlu dicatat, pemilihan algoritma klaster sangat memengaruhi performa pemisahan. Kami mencapai DER (Diarization Error Rate) terbaik dengan menggunakan spectral clustering yang dioptimalkan secara otomatis dengan threshold affinity matrix dan nilai NME (Normalized Maximum Eigengap). Terakhir, perlu mengidentifikasi pembicara di setiap klaster. Sebelum rapat, dapat direkam 40 detik suara setiap pembicara untuk mengekstrak xvector, lalu dicocokkan dengan hasil klaster.

Fleksibilitas proses ini adalah: dalam banyak skenario rapat, tidak realistis untuk merekam suara setiap pembicara sebelumnya. Misalnya, rapat bisnis dengan klien VIP atau seminar besar dengan 50 pembicara. Dalam kasus ini, tanpa langkah pendaftaran, sistem pemisahan kami tetap dapat mengelompokkan segmen suara. Hanya perlu mengambil beberapa detik audio dari setiap klaster secara manual untuk mengidentifikasi pembicara. Dengan antarmuka pengguna modern khusus, fungsi yang sama dapat dicapai dengan lebih fleksibel.

### Pengenalan Suara yang Disesuaikan

Setelah memahami kekuatan transkrip rapat Microsoft, kami siap membuat sistem benar-benar independen, melampaui produk revolusioner yang ada. Inti dari Modern Meetings dan produk transkripsi apa pun adalah model Automatic Speech Recognition (ASR), sehingga kami memberikan perhatian terbesar di sini.

Azure Cognitive Services menyediakan berbagai model untuk banyak bahasa dan dialek, tetapi performa antar dialek sulit dibedakan. Untuk berbagai dialek bahasa Inggris, upaya dan data utama mungkin difokuskan pada model bahasa Inggris Amerika, lalu dialek lain disesuaikan dengan data beraksen. Kami ingin memastikan jika menyediakan model terpisah, harus dioptimalkan untuk kasus penggunaan tertentu. Ini berarti mengumpulkan ribuan jam audio dan transkrip lokal, serta berminggu-minggu pelatihan dan penyesuaian. Namun, melihat model berkembang di setiap epoch dan memenuhi janji sangat memuaskan.

Dengan model dasar yang kuat, langkah berikutnya adalah memperluas ketersediaan dan kustomisasi. Setiap industri memiliki banyak istilah khusus, membuat model ASR sulit membedakan kata langka dari kata umum yang mirip pengucapannya.

Solusi kami adalah SeaVoice, yang menyediakan platform terpusat bagi pengguna untuk menyesuaikan model sesuai kebutuhan spesifik mereka. `;export{a as default};

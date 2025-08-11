const a=`---
title: "Dari Demo ke Sukses: Melampaui Perangkat Keras (5/5)"
metatitle: "Dari Demo ke Sukses (5/5): Melampaui Perangkat Keras"
date: 2021-09-15 17:24:32-07:00
modified_date: 2025-07-28T16:56:53Z
draft: false
author: Cody Kim
description: "Di bagian terakhir dari seri blog ini, ikuti perjalanan Seasalt.ai dalam menciptakan SeaMeet, solusi rapat modern kolaboratif kami."
weight: 1
tags:
  - SeaMeet
image: images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/SeaMeet animation.gif
canonicalURL: /blog/seameet-voice-hardware/
url: /blog/seameet-voice-hardware/
---

*Di seluruh seri blog ini, ikuti perjalanan Seasalt.ai dalam menciptakan Pengalaman Rapat Modern yang menyeluruh, mulai dari awal yang sederhana, hingga mengoptimalkan layanan kami pada perangkat keras dan model yang berbeda, hingga mengintegrasikan sistem NLP canggih dan akhirnya berakhir pada realisasi penuh SeaMeet, solusi rapat modern kolaboratif kami.*

## Melampaui Rapat Modern

Di Seasalt.ai, kami mengagumi kemampuan yang ditunjukkan dari demo Build 2019 produk ini, tetapi kami lebih tertarik untuk melihat apa yang bisa menjadi produk ini, bagaimana membawa transkripsi percakapan melampaui peniruan. Tetapi sebelum Anda dapat mengalahkan kompetisi, Anda harus terlebih dahulu memahami secara mendalam permainan yang Anda mainkan. Dan begitulah SeaMeet lahir. Pada masa-masa awalnya, kami melihat Azure sebagai model untuk memahami dasar-dasar apa yang membuat layanan transkripsi yang solid dan menggunakan layanan ucapan Azure sebagai backend kami untuk memanfaatkan teknologi yang sudah mapan ini.

Sama seperti produk muda lainnya, tantangan segera muncul. Bersemangat untuk meluncurkan produk kami, kami memilih untuk menggunakan array mikrofon Microsoft Kinect DK, yang dipromosikan sebagai perangkat keras pelengkap layanan ucapan dan seharusnya disetel untuk mendapatkan kinerja paling optimal dari model pengenalan ucapan otomatis Azure. Meskipun merupakan perangkat yang tidak dapat disangkal dibangun dengan baik, dirancang dengan baik, ia dilengkapi dengan casing aluminium penuh, lensa sudut lebar, kamera kedalaman, dan array 7 mikrofon. Harganya juga mahal, hanya di bawah $400. Mulai April 2021, Kinect DK memiliki masalah kekurangan stok yang serius. Hingga penulisan hari ini di September 2021, masih belum tersedia. Ini semakin memperkuat bahwa Kinect bukanlah perangkat yang tepat untuk kami.

<center>
<img src="/images/blog/7-seameet-voice-intelligence-meeting-transcription-hardware/kinect_store_page.png"/>

*Azure Kinect DK telah kehabisan stok sejak 2021/4 saat artikel ini diterbitkan (2021/9)*
</center>

Array mikrofon adalah komponen pertama dalam pipeline transkripsi percakapan. Sebagai penyedia layanan transkripsi, kami harus dapat secara berkelanjutan dan andal menyediakan perangkat keras kami.

Perjalanan kami untuk menemukan array mikrofon yang sempurna membawa kami ke dua pilihan: [Respeaker Array v2.0](https://www.seeedstudio.com/ReSpeaker-Mic-Array-v2-0.html) dan [Respeaker Core v2.0](https://www.seeedstudio.com/ReSpeaker-Core-v2-0.html). Kedua perangkat ini adalah array melingkar, masing-masing empat dan enam mikrofon, yang merupakan fitur penting untuk dapat melakukan lokalisasi sumber 360 derajat dan memungkinkan kami untuk dengan mudah mengintegrasikan perangkat baru ini ke dalam sistem kami yang sudah ada. Keindahan sejati dari perangkat ini adalah mereka dilengkapi dengan algoritma pemrosesan sinyal on-board termasuk denoising, echo cancellation, dan beamforming yang disetel dengan sempurna sesuai dimensi mikrofon.

<center>
<img src="/images/blog/7-seameet-voice-intelligence-meeting-transcription-hardware/respeaker_array.png" alt="Respeaker Array v2.0 mendemonstrasikan VAD dan lokalisasi sumber"/>

*Respeaker Array v2.0 mendemonstrasikan VAD dan lokalisasi sumber*
</center>

<center>
<img src="/images/blog/7-seameet-voice-intelligence-meeting-transcription-hardware/array_demo.jpg" alt="Demo rapat langsung dengan Respeaker Array v2.0"/>

*Demo rapat langsung dengan Respeaker Array v2.0*
</center>

Untuk array empat mikrofon Array v2.0, yang sepenuhnya ditenagai oleh port USB, ini berarti komputer pengguna hanya perlu fokus pada streaming audio ke server. Ini memindahkan pemrosesan sinyal ke array mikrofon.


<center>
<img src="/images/blog/7-seameet-voice-intelligence-meeting-transcription-hardware/core_demo.png" alt="Respeaker Core v2.0 digambarkan dengan demo"/>

*Respeaker Core v2.0 digambarkan dengan demo*
</center>

Yang lebih menarik lagi adalah Core v2.0 yang dilengkapi dengan prosesor ARM dan RAM 1GB. Mampu menjalankan distribusi Linux penuh dan dengan daya pemrosesan yang lebih dari cukup untuk menjalankan skrip klien kami, kami tidak hanya memindahkan pemrosesan dari komputer pengguna dengan perangkat ini, kami telah sepenuhnya menghilangkan kebutuhan untuk memiliki komputer yang terhubung ke mikrofon. Karena array mikrofon sekarang melakukan pemrosesan berat, kami mengurangi persyaratan perangkat keras yang diperlukan untuk menjalankan produk kami dan oleh karena itu secara efektif meningkatkan audiens kami yang dapat memperoleh manfaat dari SeaMeet.

<center>
<img src="/images/blog/7-seameet-voice-intelligence-meeting-transcription-hardware/respeaker_core.png" alt="Contoh Core v2.0 penempatan mikrofon mandiri"/>

*Contoh Core v2.0 penempatan mikrofon mandiri*
</center>

Karakteristik unik lainnya dari array mikrofon ini adalah tidak adanya casing. Keduanya dikirimkan sebagai PCB telanjang dengan mikrofon, chip, dan port semuanya terbuka. Meskipun banyak yang akan melihat ini sebagai ketidaknyamanan, kami melihat peluang untuk menciptakan perangkat yang benar-benar unik yang tidak salah lagi adalah milik Seasalt.

    Dengan perangkat ini, kami mengikat simpul pada prototipe SeaMeet kami, layanan transkripsi rapat canggih kami yang baru. Dan dengan ini kami menyimpulkan seri lima bagian kami, dimulai ketika SeaMeet hanyalah benih yang terinspirasi oleh demo Microsoft, dan berakhir dengan produk yang sepenuhnya independen. Masih dalam tahap awal, SeaMeet memiliki perjalanan yang menarik di depan karena kami terus memoles sistem diarization, pengertian rapat, dan model bahasa kami. Tim Seasalt.ai sangat ingin terus merevolusi cara dunia berbisnis.
`;export{a as default};

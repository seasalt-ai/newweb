const a=`---
title: "Dari Demo ke Kejayaan: Melangkaui Perkakasan (5/5)"
metatitle: "Dari Demo ke Kejayaan (5/5): Melangkaui Perkakasan"
date: 2021-09-15 17:24:32-07:00
modified_date: 2025-07-28T16:56:53Z
draft: false
author: Cody Kim
description: "Dalam bahagian terakhir siri blog ini, ikuti perjalanan Seasalt.ai untuk mencipta SeaMeet, penyelesaian mesyuarat moden kolaboratif kami."
weight: 1
tags:
  - SeaMeet
image: images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/SeaMeet animation.gif
canonicalURL: /blog/seameet-voice-hardware/
url: /blog/seameet-voice-hardware/
---

*Sepanjang siri blog ini, ikuti perjalanan Seasalt.ai untuk mencipta Pengalaman Mesyuarat Moden yang menyeluruh, bermula dari permulaannya yang sederhana, kepada mengoptimumkan perkhidmatan kami pada perkakasan dan model yang berbeza, kepada mengintegrasikan sistem NLP yang canggih dan akhirnya berakhir dengan realisasi penuh SeaMeet, penyelesaian mesyuarat moden kolaboratif kami.*

## Melangkaui Mesyuarat Moden

Di Seasalt.ai, kami mengagumi keupayaan semasa yang ditunjukkan daripada demo Build 2019 produk ini, tetapi kami lebih berminat untuk melihat apa yang boleh menjadi produk ini, bagaimana untuk membawa transkripsi perbualan melangkaui peniruan. Tetapi sebelum anda boleh mengalahkan persaingan, anda perlu terlebih dahulu memahami secara mendalam permainan yang anda mainkan. Dan begitulah SeaMeet dilahirkan. Pada peringkat awal, kami melihat Azure sebagai model untuk memahami asas-asas yang menjadikan perkhidmatan transkripsi yang kukuh dan menggunakan perkhidmatan pertuturan Azure sebagai bahagian belakang kami untuk memanfaatkan teknologi yang mantap ini.

Sama seperti mana-mana produk muda, cabaran muncul serta-merta. Bersemangat untuk melancarkan produk kami, kami memilih untuk menggunakan tatasusunan mikrofon Microsoft Kinect DK, yang dipromosikan sebagai perkakasan pelengkap kepada perkhidmatan pertuturan dan kononnya ditala untuk mendapatkan prestasi yang paling optimum daripada model pengecaman pertuturan automatik Azure. Walaupun ia adalah peranti yang tidak dapat dinafikan dibina dengan baik, direka bentuk dengan baik, ia datang dengan perumah aluminium penuh, kanta sudut lebar, kamera kedalaman, dan tatasusunan 7 mikrofon. Ia juga membawa tanda harga yang lumayan pada harga kurang daripada $400. Bermula pada April 2021, Kinect DK mempunyai masalah kekurangan stok yang serius. Ia masih kehabisan stok sehingga penulisan hari ini pada September 2021. Ini mengukuhkan lagi bahawa Kinect bukanlah peranti untuk kami.

<center>
<img src="/images/blog/7-seameet-voice-intelligence-meeting-transcription-hardware/kinect_store_page.png"/>

*Azure Kinect DK telah kehabisan stok sejak 2021/4 apabila artikel ini diterbitkan (2021/9)*
</center>

Tatasusunan mikrofon adalah komponen pertama dalam saluran paip transkripsi perbualan. Sebagai pembekal perkhidmatan transkripsi, kami perlu dapat membekalkan perkakasan kami secara mampan dan boleh dipercayai.

Perjalanan kami untuk mencari tatasusunan mikrofon yang sempurna membawa kami kepada dua pilihan: [Respeaker Array v2.0](https://www.seeedstudio.com/ReSpeaker-Mic-Array-v2-0.html) dan [Respeaker Core v2.0](https://www.seeedstudio.com/ReSpeaker-Core-v2-0.html). Kedua-dua peranti ini adalah tatasusunan bulat, masing-masing empat dan enam mikrofon, yang merupakan ciri penting untuk dapat melakukan lokalisasi sumber 360 darjah dan membolehkan kami mengintegrasikan peranti baharu ini dengan mudah ke dalam sistem sedia ada kami. Keindahan sebenar peranti ini ialah ia dilengkapi dengan algoritma pemprosesan isyarat terbina dalam termasuk penyahbunyian, pembatalan gema, dan pembentukan pancaran yang ditala dengan sempurna mengikut dimensi mikrofon.

<center>
<img src="/images/blog/7-seameet-voice-intelligence-meeting-transcription-hardware/respeaker_array.png" alt="Respeaker Array v2.0 menunjukkan VAD dan lokalisasi sumber"/>

*Respeaker Array v2.0 menunjukkan VAD dan lokalisasi sumber*
</center>

<center>
<img src="/images/blog/7-seameet-voice-intelligence-meeting-transcription-hardware/array_demo.jpg" alt="Demo mesyuarat langsung dengan Respeaker Array v2.0"/>

*Demo mesyuarat langsung dengan Respeaker Array v2.0*
</center>

Untuk tatasusunan empat mikrofon Array v2.0, yang dikuasakan sepenuhnya oleh port USB, ini bermakna komputer pengguna hanya perlu menumpukan pada penstriman audio ke pelayan. Ini memindahkan pemprosesan isyarat ke tatasusunan mikrofon.


<center>
<img src="/images/blog/7-seameet-voice-intelligence-meeting-transcription-hardware/core_demo.png" alt="Respeaker Core v2.0 digambarkan dengan demo"/>

*Respeaker Core v2.0 digambarkan dengan demo*
</center>

Yang lebih menarik ialah Core v2.0 yang dilengkapi dengan pemproses ARM dan RAM 1GB. Mampu menjalankan pengedaran Linux penuh dan dengan kuasa pemprosesan yang lebih daripada mencukupi untuk menjalankan skrip klien kami, kami bukan sahaja telah memindahkan pemprosesan daripada komputer pengguna dengan peranti ini, kami telah menghapuskan sepenuhnya keperluan untuk mempunyai komputer yang disambungkan ke mikrofon. Oleh kerana tatasusunan mikrofon kini melakukan pemprosesan berat, kami mengurangkan keperluan perkakasan yang diperlukan untuk menjalankan produk kami dan oleh itu secara berkesan meningkatkan khalayak kami yang boleh mendapat manfaat daripada SeaMeet.

<center>
<img src="/images/blog/7-seameet-voice-intelligence-meeting-transcription-hardware/respeaker_core.png" alt="Contoh Core v2.0 penempatan mikrofon kendiri"/>

*Contoh Core v2.0 penempatan mikrofon kendiri*
</center>

Satu lagi ciri unik tatasusunan mikrofon ini ialah ketiadaan perumah. Kedua-duanya dihantar sebagai PCB kosong dengan mikrofon, cip dan port semuanya terdedah. Walaupun ramai yang akan melihat ini sebagai kesulitan, kami melihat peluang untuk mencipta peranti yang benar-benar unik yang tidak dapat disangkal milik Seasalt.

    Dengan peranti ini, kami mengikat simpulan pada prototaip SeaMeet kami, perkhidmatan transkripsi mesyuarat canggih kami yang baharu. Dan dengan ini kami menyimpulkan siri lima bahagian kami, bermula apabila SeaMeet hanyalah benih yang diilhamkan oleh demo Microsoft, dan berakhir dengan produk yang sepenuhnya bebas. Masih di peringkat awal, SeaMeet mempunyai perjalanan yang menarik di hadapan kerana kami terus menggilap sistem diarization, deria mesyuarat, dan model bahasa kami. Pasukan Seasalt.ai tidak sabar untuk terus merevolusikan cara dunia menjalankan perniagaan.
`;export{a as default};

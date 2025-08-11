const a=`---
title: "Berikan Pusat Hubungan Anda Suara Sendiri dengan SeaX Voice Intelligence"
metatitle: "Biarkan Pusat Hubungan Anda Berbicara dengan SeaX Voice Intelligence"
date: 2022-08-02 17:24:00-07:00
modified_date: 2025-07-29 20:45:17+00:00
draft: false
author: Kim Dodds, Cody Kim, Xuchen Yao, Guoguo Chen
description: "Dalam blog ini, kami akan menunjukkan bagaimana enjin teks-ke-ucapan dan ucapan-ke-teks Seasalt.ai dapat meningkatkan pelbagai aspek platform SeaX."
weight: 1
tags:
  - SeaX
image: /images/blog/21-seax-voice-intelligence/thumbnail.png
canonicalURL: /blog/seax-voice-intelligence/
url: /blog/seax-voice-intelligence/
---

*Setakat ini dalam [siri blog SeaX](https://seasalt.ai/tags/seax/) kami, kami telah memberikan gambaran keseluruhan yang luas tentang produk utama Seasalt.ai: SeaX. Kami juga membincangkan dua ciri utama yang membezakan SeaX daripada pusat panggilan tradisional: pertama, SeaX adalah omnisaluran, yang bermaksud anda lebih mudah berinteraksi dengan pelanggan di mana-mana saluran, dan kedua, platform ini adalah pusat hubungan teragih, yang membolehkan anda menghantar mesej dan panggilan dari pelanggan di seluruh dunia kepada ejen teragih anda di pelbagai lokasi dengan lancar.*

*Sekarang setelah kami meliputi asas platform SeaX, kami akan beralih kepada ciri AI dan automasi canggih yang membezakan SeaX daripada pusat hubungan omnisaluran teragih yang lain. Dalam blog ini, kami akan menunjukkan bagaimana enjin teks-ke-ucapan dan ucapan-ke-teks Seasalt.ai dapat meningkatkan pelbagai aspek platform SeaX.*

# Jadual Kandungan
- [Pengenalan kepada Kecerdasan Suara](#into-to-voice-intelligence)
- [Apa yang Membezakan Seasalt.ai](#what-sets-seasaltai-apart)
    - [Ucapan-ke-Teks](#speech-to-text)
    - [Teks-ke-Ucapan](#text-to-speech)
- [TTS dan STT dalam SeaX](#tts-and-stt-in-seax)
    - [IVR Suara](#voice-ivr)
    - [Mesej Tidak Tersedia](#unavailable-message)
    - [Transkripsi Langsung](#live-transcription)
    - [Dan Lagi...](#and-more)

# Pengenalan kepada Kecerdasan Suara

Kecerdasan Suara adalah penggunaan Kecerdasan Buatan untuk menganalisis dan mendapatkan pandangan daripada data berasaskan suara. Walaupun dekad sebelumnya telah menyaksikan perkembangan luar biasa dalam teknologi suara, penggunaannya dalam tetapan perusahaan masih agak terhad. Syarikat terus mengumpul terabyte data suara, tetapi dalam kebanyakan kes, ia tidak digunakan sepenuhnya.

Salah satu sebabnya ialah data suara lebih sukar diproses daripada bentuk data lain, seperti statistik asas atau bahkan data teks biasa. Data ucapan adalah unik dalam banyak cara yang berbeza:
1. Ia bergantung kepada bahasa, dengan dialek dan loghat, jadi sukar untuk menangkap 100% maklumat
2. Kualitinya berbeza mengikut saluran (telefoni vs. VoIP, mono vs. stereo), kadar pensampelan (8KHz vs. 16KHz), ketepatan perwakilan (8bit, 16 bit, 32bit) dan bunyi persekitaran seperti bunyi latar belakang
3. Ia lebih sukar untuk ditafsirkan: daripada emosi ucapan kepada pengenalan pembesar suara kepada semantik makna

Walau bagaimanapun, apabila ditangani dengan betul dengan alat yang betul, kecerdasan suara dapat memberikan manfaat besar kepada syarikat yang menggunakannya. Antara lain, keupayaan untuk mengurus data suara dengan betul membuka kunci keupayaan untuk menggunakan transkripsi ucapan-ke-teks yang diperibadikan, yang boleh menjadikan perbualan boleh dicari, diindeks & berwawasan, dan membenarkan pemprosesan NLP selanjutnya. Apabila lebih banyak data dikumpul, penambahbaikan kepada perkhidmatan ini juga mungkin, seperti: meningkatkan ketepatan transkripsi, meningkatkan liputan kes penggunaan, dan menyediakan model ucapan dan bahasa yang boleh disesuaikan untuk menyesuaikan diri dengan bahasa dan dialek baharu.

# Apa yang Membezakan Seasalt.ai

Seasalt.ai menyediakan teknologi dan produk AI Komunikasi Awan kepada pelanggan perusahaan.
Kami telah membangunkan teknologi ucapan dan bahasa dalaman untuk mesej teks
dan panggilan suara di pusat hubungan perusahaan. Enjin bahasa semula jadi kami menyokong pelbagai
bahasa sumber tinggi dan sumber rendah: Burma, Cina, Inggeris, Filipina,
Jerman, Indonesia, Khmer, Lao, Melayu, Sepanyol, Tamil, Thai, Vietnam, dll.
Seasalt.ai dibiayai oleh modal teroka dan dikendalikan oleh sekumpulan pakar terkemuka dunia dalam pengecaman ucapan mendalam,
sintesis ucapan saraf, dan dialog bahasa semula jadi.

Tonton video demo ucapan-ke-teks kami:
<iframe width="85%" height="450px" src="https://www.youtube.com/embed/Log8usX8ViE" title="Pemain video YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

## Ucapan-ke-Teks

<center>
<img src="/images/blog/21-seax-voice-intelligence/STT.png" alt="Grafik ucapan-ke-teks."/>
</center>

Enjin ucapan-ke-teks kami menerima audio ucapan dan menghasilkan transkripsi dalam masa nyata. Bermula dengan audio, kami mengekstrak ciri-ciri fonetik, menukar ciri-ciri ini kepada fonem, dan kemudian memetakan fonem ini kepada ortografi bahasa sasaran. Sistem kami sekarang mampu mentranskripsi beberapa bahasa, termasuk Bahasa Inggeris dan Bahasa Cina, dengan lebih banyak bahasa sentiasa ditambah.

Tonton video penyesuaian Ucapan-ke-Teks kami untuk melihat bagaimana enjin STT Seasalt boleh disesuaikan untuk mana-mana domain:
<iframe width="85%" height="450px" src="https://www.youtube.com/embed/1YEU6mexzWQ" title="Pemain video YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

## Teks-ke-Ucapan

<center>
<img src="/images/blog/21-seax-voice-intelligence/TTS.png" alt="Grafik teks-ke-ucapan."/>
</center>

Teks-ke-Ucapan adalah proses mensintesis ucapan manusia yang realistik lengkap dengan intonasi dan irama semula jadi hanya dari teks. Model kami mengambil teks biasa, menterjemahkan teks ini kepada fonem dan kemudian menukar fonem kepada audio sambil meramalkan pic, tempoh, dan kelantangan yang betul pada setiap langkah masa untuk pengalaman TTS yang paling hidup. Jika hasil akhir tidak sempurna, kami menyediakan keupayaan untuk menyesuaikan audio yang disintesis termasuk sebutan perkataan, jeda, dan penekanan.

Tonton video demo penyesuaian Teks-ke-Ucapan kami untuk melihat bagaimana output enjin TTS Seasalt boleh disesuaikan untuk menyediakan ucapan sintetik yang hidup:

<iframe width="85%" height="450px" src="https://www.youtube.com/embed/GJCOhTtImp8" title="Pemain video YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

Anda juga boleh menyemak [halaman TTS](https://suite.seasalt.ai/tts) di laman web kami untuk mendengar contoh beberapa suara sintetik kami, termasuk Tom Hanks, David Attenborough, dan Reese Witherspoon.

# TTS dan STT dalam SeaX

## IVR Suara

<center>
<img src="/images/blog/21-seax-voice-intelligence/flow.png" alt="Aliran IVR Suara menggunakan enjin ucapan-ke-teks Seasalt.ai untuk transkripsi masa nyata dan penghalaan panggilan."/>

*Aliran IVR Suara menggunakan enjin ucapan-ke-teks Seasalt.ai untuk transkripsi masa nyata dan penghalaan panggilan.*
</center>

Kecerdasan suara boleh mula membantu sebelum panggilan sampai ke platform SeaX dengan memastikan panggilan dihalakan ke tempat yang betul dan mengumpul maklumat penting sebelum menyerahkan panggilan kepada ejen. SeaX menggunakan Twilio Studio untuk menyesuaikan aliran penghalaan panggilan dan mesej. Tetapi kami juga boleh mengintegrasikan enjin ucapan-ke-teks kami dalam aliran IVR untuk membolehkan pelanggan menggunakan bahasa semula jadi untuk menghalakan panggilan mereka (bukannya pengalaman tradisional “tekan 1 untuk…”). Selain itu, jika syarikat anda berminat untuk menggunakan chatbot untuk berinteraksi dengan pelanggan, kami boleh melangkah lebih jauh dengan memberikan chatbot anda suara untuk bercakap dengan pelanggan melalui telefon menggunakan enjin teks-ke-ucapan kami.

## Mesej Tidak Tersedia

<center>
<img src="/images/blog/21-seax-voice-intelligence/unavailable-message.png" alt="Konfigurasi mesej tidak tersedia SeaX menggunakan teks-ke-ucapan."/>

*Konfigurasi mesej tidak tersedia SeaX menggunakan teks-ke-ucapan.*
</center>

Teknologi teks-ke-ucapan kami juga membenarkan mesej suara yang sangat boleh disesuaikan. Contohnya, ini boleh dicetuskan apabila pelanggan menelefon selepas waktu perniagaan biasa, atau jika pelanggan perlu ditahan sementara menunggu ejen yang tersedia.

## Transkripsi Langsung

<center>
<img src="/images/blog/21-seax-voice-intelligence/live-transcription.jpg" alt="Transkripsi panggilan langsung dengan analitik yang dipaparkan kepada ejen di SeaX."/>

*Transkripsi panggilan langsung dengan analitik yang dipaparkan kepada ejen di SeaX.*
</center>

Setelah pelanggan berada dalam panggilan dengan ejen, enjin ucapan-ke-teks kami menyediakan transkripsi perbualan masa nyata yang tepat untuk rujukan ejen. Ini membolehkan ejen merujuk kepada titik-titik sebelumnya dalam perbualan dan/atau menyemak semula pemahaman mereka tentang apa yang dikatakan pelanggan. Selain itu, transkripsi ini sangat berguna untuk aplikasi hiliran seperti pengekstrakan topik, pengekstrakan tindakan, ringkasan, analisis mesyuarat, dll.

## Dan Lagi...

Di atas hanyalah beberapa cara SeaX mengintegrasikan kecerdasan suara canggih untuk mengurangkan masa menunggu, meningkatkan prestasi ejen, dan memberikan pengalaman yang lancar secara keseluruhan kepada pelanggan dan ejen. Untuk mengetahui lebih lanjut tentang ciri-ciri canggih yang datang dengan platform SeaX, nantikan catatan blog kami yang seterusnya, yang merangkumi pangkalan pengetahuan AI, pengurusan kes, dan SMS pukal. Untuk mendapatkan demo peribadi dan membincangkan bagaimana platform SeaX dapat memenuhi keperluan perniagaan khusus anda, isi [borang Tempah Demo](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting) kami.
`;export{a as default};

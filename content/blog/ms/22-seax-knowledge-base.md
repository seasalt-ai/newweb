---
title: "SeaX KB: Pangkalan Pengetahuan yang Menjawab Sebelum Ditanya"
metatitle: "SeaX KB: Pangkalan Pengetahuan yang Menjawab Sebelum Ditanya"
date: 2022-08-15T22:01:32-07:00
modified_date: 2025-07-27T00:00:00Z
draft: false
author: Kim Dodds
description: "Dalam catatan ini, kami meneruskan topik integrasi AI dengan Pangkalan Pengetahuan berkuasa AI SeaX, yang menawarkan respons yang dicadangkan dalam masa nyata."
weight: 1
tags: ["SeaX"]
canonicalURL: "/blog/seax-kb-a-knowledge-base/"
url: "/blog/seax-kb-a-knowledge-base/"
---

*Dalam catatan blog kami sebelum ini, [Berikan Pusat Hubungan Anda Suara Sendiri dengan SeaX Voice Intelligence](https://seasalt.ai/blog/21-seax-voice-intelligence/), kami menunjukkan bagaimana enjin teks-ke-pertuturan dan pertuturan-ke-teks Seasalt.ai yang dibangunkan sendiri meningkatkan pelbagai aspek platform SeaX. Dalam catatan ini, kami meneruskan topik integrasi AI dengan Pangkalan Pengetahuan berkuasa AI SeaX, yang mendengar perbualan dan menawarkan respons yang dicadangkan dalam masa nyata.*

# Jadual Kandungan
- [Pangkalan Pengetahuan Tradisional](#the-traditional-knowledge-base)
- [Pangkalan Pengetahuan SeaX](#seax-knowledge-base)
    - [Antara Muka Pengguna Terbenam untuk Ejen Langsung](#embedded-user-interface-for-live-agents)
    - [Carian Pantas dan Tepat](#fast-and-accurate-search)
    - [Cadangan Automatik Masa Nyata](#real-time-automated-suggestions)
    - [Templat Respons](#response-templates)
    - [Pengurusan KB](#kb-management)
    - [Webinar](#webinar)

# Pangkalan Pengetahuan Tradisional

Pada dasarnya, pangkalan pengetahuan (KB) hanyalah perpustakaan maklumat yang (idealnya) tersusun rapi dan mudah diakses yang digunakan secara layan diri dalam talian. Sistem pangkalan pengetahuan yang baik akan mempunyai ciri-ciri seperti organisasi kandungan hierarki, carian, dan pelabelan untuk membantu pengguna mencari maklumat yang betul dengan lebih mudah.

Mengekalkan pangkalan pengetahuan yang terperinci adalah amalan standard bagi kebanyakan syarikat pada masa kini. Sama ada tujuannya adalah untuk membantu pekerja berkongsi maklumat dalaman tentang produk mereka, menjawab soalan untuk bakal pelanggan, membantu pelanggan menyelesaikan masalah, atau semua perkara di atas - menjadikan maklumat utama mudah diakses oleh pekerja dan pelanggan bermakna kerja yang lebih cekap dan kepuasan pelanggan yang lebih tinggi.

Biasanya, pangkalan pengetahuan dilaksanakan dan diselenggara melalui Sistem Pengurusan Kandungan atau Sistem Pengurusan Pengetahuan. Sistem ini boleh berbeza-beza dalam skala bergantung kepada keperluan organisasi, bermula dari pengurus dokumen yang mudah kepada perkhidmatan yang kaya dengan ciri-ciri yang termasuk aliran kerja penerbitan, penargetan audiens, alat kerjasama, dan banyak lagi. Walaupun sistem ini serba boleh dalam pelbagai cara, ia hampir selalu bertujuan untuk diakses melalui interaksi dengan halaman web atau aplikasi. Untuk kes penggunaan khusus ejen perkhidmatan pelanggan (yang biasanya menggunakan pangkalan pengetahuan sebagai salah satu sumber utama mereka dalam membantu pelanggan) integrasi yang ketat dengan perisian pusat hubungan adalah perlu untuk membolehkan ejen mengendalikan pertanyaan pengguna dengan lancar yang mungkin.

# Pangkalan Pengetahuan SeaX

Pangkalan pengetahuan kami direka dari hari pertama dengan kes penggunaan yang sangat khusus dalam fikiran: perkhidmatan pelanggan berasaskan suara. Walaupun kebanyakan, jika tidak semua, sistem pangkalan pengetahuan sedia ada bergantung pada navigasi melalui halaman web hierarki atau menaip pertanyaan carian, KB kami perlu lebih pantas dan lebih bebas untuk membolehkan wakil perkhidmatan pelanggan memberikan perhatian penuh kepada pelanggan sambil masih menjawab soalan dengan cepat.

Jika anda ingin terus ke demonstrasi, anda boleh menonton video demo SeaX KB pendek kami:
<iframe width="85%" height="450px" src="https://www.youtube.com/embed/C_e_gaZHSFA" title="Pemain video YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>


## Antara Muka Pengguna Terbenam untuk Ejen Langsung

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-intro.png" alt="Pandangan pertama pada antara muka Pangkalan Pengetahuan SeaX."/>

*Pandangan pertama pada antara muka Pangkalan Pengetahuan SeaX.*
</center>

Secara semula jadi, kerana enjin KB kami direka khusus untuk aplikasi pusat hubungan, ia mempunyai integrasi asli dengan platform SeaX supaya ejen dapat mengakses KB dengan lancar semasa mengendalikan panggilan dan mesej. Tiada penukaran tetingkap, tiada membalik tab, tiada navigasi melalui halaman web bersarang.

## Carian Pantas dan Tepat

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-manual-search.png" alt="Hasil carian manual dalam Pangkalan Pengetahuan SeaX."/>

*Hasil carian manual dalam Pangkalan Pengetahuan SeaX.*
</center>

Pada tahap yang paling asas, pangkalan pengetahuan kami dikuasakan oleh enjin carian yang sangat pantas dan tepat. Kami menggunakan teknik pemprosesan bahasa semula jadi dan pengekstrakan maklumat terkini untuk mengumpul makna daripada teks biasa, pertanyaan sampel, & URL sokongan dan memadankan ucapan pelanggan dengan entri KB yang paling relevan. Enjin pangkalan pengetahuan sangat boleh diperluas dan boleh menyokong berbilion-bilion dokumen tanpa perubahan yang dapat dilihat dalam masa tindak balas.

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-detail.png" alt="Artikel KB dalam paparan yang diperluas selepas mengklik pada hasil carian."/>

*Artikel KB dalam paparan yang diperluas selepas mengklik pada hasil carian.*
</center>

Selain mencari dokumen yang paling relevan, enjin carian kami menyediakan hasil yang lebih terperinci dengan mengekstrak kata kunci penting daripada pertanyaan pengguna dan menyerlahkan kata kunci dan petikan yang paling relevan dalam setiap entri KB yang dicadangkan.

## Cadangan Automatik Masa Nyata

Tetapi apa yang telah kami tunjukkan setakat ini masih merupakan carian manual. Ejen langsung mempunyai banyak kerja berinteraksi dengan pelanggan, dan akan kehilangan masa yang berharga untuk memasukkan carian manual ke dalam KB setiap kali mereka mahukan maklumat. Atas sebab itu, nilai tambah terbesar yang dibawa oleh Pangkalan Pengetahuan SeaX adalah carian automatik masa nyata untuk interaksi berasaskan teks dan suara.

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-automatic-search.png" alt="SeaX KB menunjukkan cadangan artikel automatik untuk mesej pengguna yang masuk."/>

*SeaX KB menunjukkan cadangan artikel automatik untuk mesej pengguna yang masuk.*
</center>

Setiap kali mesej pengguna baharu masuk, pangkalan pengetahuan akan secara automatik ditanya menggunakan mesej tepat pelanggan. Dalam masa nyata, semasa pelanggan bercakap, ejen akan diberikan cadangan artikel KB yang terkini untuk rujukan mereka.

Dan ini juga berfungsi dengan panggilan berasaskan suara! Catatan blog terakhir kami, [Berikan Pusat Hubungan Anda Suara Sendiri dengan SeaX Voice Intelligence](https://seasalt.ai/blog/21-seax-voice-intelligence/), menunjukkan enjin Speech-to-Text Seasalt.ai yang canggih. Platform SeaX menggunakan enjin itu untuk mentranskripsi semua panggilan berasaskan suara dalam masa nyata. Hasilnya, kami boleh menggunakan transkripsi tersebut untuk pelbagai aplikasi hiliran, termasuk carian pangkalan pengetahuan automatik.

## Templat Respons

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-response-template.png" alt="Seorang ejen membalas pelanggan dalam satu klik menggunakan templat respons yang dihasilkan oleh SeaX KB."/>

*Seorang ejen membalas pelanggan dalam satu klik menggunakan templat respons yang dihasilkan oleh SeaX KB.*
</center>

Hasil carian dari pangkalan pengetahuan mempunyai satu ciri tambahan yang membantu mempercepatkan respons ejen untuk interaksi berasaskan teks. Apabila ejen menemui artikel KB yang relevan, mereka hanya boleh mengklik ikon `+` di sebelah kiri tajuk untuk memasukkan templat respons ke dalam tetingkap sembang mereka. Di bahagian belakang, setiap kali KB dicari, ia menjana respons bertulis kepada soalan pengguna berdasarkan maklumat yang paling relevan dalam artikel KB yang dicadangkan dan termasuk sebarang pautan sokongan. Ini boleh meningkatkan masa respons ejen dengan ketara, kerana ejen tidak lagi bermula dari awal. Sebaliknya, mereka mempunyai maklumat penting dari artikel KB yang sudah ada dalam tetingkap sembang mereka, jadi mereka boleh mengeditnya dan menghantarnya.


## Pengurusan KB

Sekarang setelah kita melihat apa yang boleh dilakukan oleh enjin KB, ada satu soalan yang masih belum terjawab mengenai bahagian belakang: bagaimana anda menguruskan maklumat dalam pangkalan pengetahuan? Platform SeaX mempunyai UI pengurusan KB yang bersepadu sepenuhnya yang tersedia untuk pentadbir dari halaman tetapan.

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-management.png" alt="Antara muka pengurusan SeaX KB."/>

*Antara muka pengurusan SeaX KB.*
</center>

Dari halaman ini anda boleh menambah entri KB baru tunggal atau anda boleh mengimport/mengeksport keseluruhan pangkalan pengetahuan menggunakan fail hamparan. Antara muka juga menyokong penyuntingan dan penghapusan entri KB supaya anda boleh sentiasa mengemas kini KB anda.

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-edit.png" alt="Menyunting satu artikel KB melalui antara muka pengurusan SeaX KB."/>

*Menyunting satu artikel KB melalui antara muka pengurusan SeaX KB.*
</center>

## Webinar

Jika anda ingin melihat panduan yang lebih mendalam tentang sistem pangkalan pengetahuan dan bagaimana ia berintegrasi dengan platform SeaX, sila tonton webinar kami mengenai subjek tersebut:
<iframe width="85%" height="450px" src="https://www.youtube.com/embed/FOqQ01fpKQ4" title="Pemain video YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

Untuk demo satu-satu, atau untuk mengetahui lebih lanjut tentang bagaimana Seasalt.ai boleh menyesuaikan penyelesaiannya dengan keperluan perniagaan anda, sila isi [borang Tempah Demo](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting) kami.

const a=`---
title: "Perkhidmatan Pelanggan di United Airlines: yang Baik, yang Buruk dan yang Hodoh"
metatitle: "Analisis Perkhidmatan Pelanggan di United Airlines"
date: 2023-03-21 11:25:00-08:00
modified_date: 2025-07-28T16:56:53Z
draft: false
author: Xuchen Yao
description: "Xuchen Yao berkongsi pengalaman terbarunya dengan perkhidmatan pelanggan United Airlines semasa kelewatan dan pembatalan penerbangan dan mencadangkan penyelesaian untuk menangani cabaran penskalaan dinamik sokongan pelanggan semasa trafik melonjak."
weight: 1
tags:
  - SeaX
image: images/blog/31-cx-at-united-airlines/flight-delay-illustration.png
canonicalURL: /blog/customer-service-at-united-airlines/
url: /blog/customer-service-at-united-airlines/
---

*Ketua Pegawai Eksekutif [Seasalt.ai](https://seasalt.ai), Xuchen Yao, berkongsi pengalaman terbarunya dengan perkhidmatan pelanggan United Airlines selepas menghadapi kelewatan dan pembatalan penerbangan. Ini menyebabkan beliau menyedari cabaran yang dihadapi oleh sokongan pelanggan syarikat penerbangan dalam menskalakan dirinya secara dinamik untuk mengendalikan trafik yang melonjak semasa situasi sedemikian. Xuchen bercakap tentang penambahbaikan yang berpotensi seperti mengalihkan trafik layan diri daripada ejen manusia, meningkatkan kecekapan ejen manusia, dan membangunkan teknologi untuk mengenal pasti dan mengurangkan risiko masalah yang berpotensi secara proaktif.*

Blog ini ditulis pada penerbangan UA2 dari Singapura ke San Francisco pada 22/3/2023.

Saya baru-baru ini berkesempatan menaiki penerbangan UA1 dari San Francisco (SFO) ke Singapura (SIN). Keseronokan itu cepat bertukar menjadi malang kerana pembatalan penerbangan. Berikut adalah pembelajaran tentang perkhidmatan pelanggan United dari sudut pandangan seorang ahli teknologi yang membina pusat hubungan.



# Penerbangan dua kali ganda: tertunda dan dibatalkan

Berikut adalah rancangan perjalanan ke Singapura dari Seattle pada hari Selasa 14/3/2023:

<center>
<img src="/images/blog/31-cx-at-united-airlines/united-flights.png" alt="Penerbangan United saya yang dirancang"/>

*7:29 pagi – 09:42 pagi, dari Seattle (SEA) ke San Francisco (SFO) dengan UA2368. 11:50 pagi – 08:15 malam, dari San Francisco (SFO) ke Singapura (SIN) dengan UA29.*
</center>

Malangnya, saya tidak menaiki mana-mana penerbangan.

Penerbangan pertama tertunda selama 1.5 jam kerana kesesakan di lapangan terbang Seattle (pada pukul 7 pagi!). Itu mengurangkan masa transit saya kepada 0 di SFO. Saya bercakap dengan perkhidmatan lapangan di SEA dan mereka menempatkan saya di penerbangan Alaska dari SEA ke SFO. Penerbangan Alaska itu juga tertunda tetapi masih tiba di SFO pada pukul 11 pagi, memberikan saya masa yang cukup untuk mengejar penerbangan seterusnya.

**YANG BAIK**: United membenarkan saya menukar penerbangan saya ke Alaska secara percuma.

**YANG BAIK**: United sangat proaktif dalam menangani kelewatan melalui kod pendek “26266”. Apabila kelewatan berlaku, ia malah menawarkan pilihan untuk menempah semula penerbangan saya.

**YANG BURUK**: Anggaran masa menunggu telefon jauh meleset. Ia memberitahu saya masa menunggu adalah 2 minit tetapi saya menunggu 45 minit untuk bercakap dengan ejen.

**YANG BURUK**: Chatbot itu sangat bodoh. Saya terpaksa mengikut “menu”nya dengan menekan 1/2/3/4 atau A/B/C/D/E sebagai balasan.

<center>
<table>
  <tr>
    <td><img src="/images/blog/31-cx-at-united-airlines/united-text-support-3.jpg" alt="Sokongan mesej teks United - 3"/></td>
    <td><img src="/images/blog/31-cx-at-united-airlines/united-text-support-4.jpg" alt="Sokongan mesej teks United - 4"/></td>
    <td><img src="/images/blog/31-cx-at-united-airlines/united-text-support-5.jpg" alt="Sokongan mesej teks United - 5"/></td>
  </tr>
 </table>

*Chatbot United Airlines menggunakan teknologi generasi terakhir yang menawarkan kad menu untuk mengehadkan input penumpang.*
</center>


**YANG HODOH**: Terdapat secara harfiah kurang daripada 10 ejen perkhidmatan pelanggan di darat untuk mengendalikan lebih 1000 penumpang yang terjejas. Ini menimbulkan kebimbangan, kemarahan, rasa tidak berdaya, dan tekanan kepada pelanggan dan ejen. Ini kerana apabila penerbangan kami dibatalkan, perkhidmatan darat dan atendan penerbangan memberitahu semua orang untuk bercakap dengan perkhidmatan pelanggan darat mereka. **Mengarah setiap penumpang yang terjejas untuk bercakap dengan kurang daripada 10 ejen perkhidmatan pelanggan darat telah mencipta serangan "DDOS" fizikal ke atas perkhidmatan pelanggan darat United.**

DDOS bermaksud "Distributed Denial of Service" apabila penggodam mengarahkan trafik dari berjuta-juta tempat ke satu laman web untuk menjadikannya tidak responsif kepada sebarang perkhidmatan.

**YANG HODOH**: Saya menggunakan 4 saluran untuk bercakap dengan United (teks, sembang video, panggilan telefon, darat). Saya menggunakan 4 kali ganda lebih banyak sumber dan orang lain juga boleh melakukan perkara yang sama. Ini secara buatan meningkatkan lonjakan trafik dan tekanan kepada perkhidmatan pelanggan United sebanyak 4 kali ganda. Saya rasa setiap penumpang lain juga berbuat demikian kerana itu menjelaskan mengapa "masa menunggu 2 minit" saya akhirnya menjadi 45 minit.

Akhirnya saya berjaya berhubung melalui telefon dan ejen menghabiskan kira-kira 20 minit untuk menempah semula saya ke penerbangan kemudian pada pukul 11 malam ke Singapura pada hari yang sama. Apabila saya selesai, saya masih beratur dalam sembang video, berurusan dengan chatbot (ironinya ia dipanggil liveperson), dan jelas sekali secara fizikal beratur.

Saya memberitahu seorang pemuda yang berdiri di belakang saya dari penerbangan yang sama untuk menghubungi United. Dia berkata: “Tidak mungkin, itu akan mengambil masa yang sangat lama!” Tetapi saya berkata: “Saya baru sahaja menempah semula melalui telefon. Lihat, ada 200 orang di hadapan kita, berapa lama anda rasa anda akan menunggu dalam barisan?”

Kemudian pada pukul 11 malam, saya bertemu dengan pemuda itu di penerbangan saya yang ditempah semula. Dia sangat gembira melihat saya dan tidak henti-henti mengucapkan terima kasih atas “petua telefon” itu. Dia memakai baju “tiktok” dan fon kepala mewah, jadi saya fikir dia mungkin celik teknologi atau sekurang-kurangnya mahir dengan komputer.

**YANG HODOH**: Persepsi daripada pelanggan yang “celik teknologi” ialah panggilan telefon tidak akan menyelesaikan apa-apa untuknya, dia lebih suka menunggu secara fizikal dalam barisan untuk bercakap dengan orang sebenar sedangkan dia jelas dapat melihat betapa panjangnya barisan itu. **Ini mencerminkan betapa buruknya pandangan masyarakat umum tentang ketidakbergunaan sokongan telefon.**

# Sokongan Pelanggan Syarikat Penerbangan: Masalah Utama ialah Skalabiliti Dinamik

Dengan pengalaman satu penerbangan tertunda dan satu dibatalkan pada hari yang sama, dan bercakap dengan perkhidmatan pelanggan melalui 4 saluran berbeza pada dua kesempatan, dan pemahaman mendalam tentang bagaimana pusat hubungan dibina – saya rasa masalah utama Sokongan Pelanggan Syarikat Penerbangan adalah ini:

**Sokongan Pelanggan Syarikat Penerbangan tidak dapat menskalakan dirinya secara dinamik. Atau dalam istilah pengkomputeran awan: Sokongan Pelanggan Syarikat Penerbangan tidak elastik.**

Ini bukan sahaja berlaku dengan United. Saya mempunyai pengalaman yang sama dengan Air Canada semasa Covid-19: setiap panggilan telefon mengambil masa lebih daripada 2 jam menunggu.

Saya tidak fikir chatbot yang bodoh atau ejen manusia yang tidak berempati adalah masalah utama. Sokongan pelanggan mempunyai corak unik iaitu ia datang secara bergelombang: **biasanya apabila penerbangan terjejas, antara puluhan hingga ratusan penumpang cuba menghubungi pada masa yang sama, kadang-kadang dengan pengganda 4 melalui saluran silang.**

Lonjakan trafik seperti ini tidak ditangani dengan baik oleh pusat hubungan syarikat penerbangan moden. Apa yang lebih teruk ialah semua isu ini adalah “kod merah”: ia perlu diselesaikan _segera_. Maaf, tiada sokongan e-mel Asynchronous berasaskan Zendesk. _Saya perlu bercakap dengan ejen sekarang_. 

# Sokongan Pelanggan Syarikat Penerbangan: Manusia Tidak Berskala

Mari kita fikirkan bagaimana laman web e-dagang menyediakan dirinya semasa trafik puncak seperti Black Friday:
1. **Ramalkan** jenis trafik yang akan diperoleh pada waktu tertentu.
2. **Peruntukkan awal** sumber pelayan yang mencukupi dengan menghubungi penyedia awan atau meningkatkan had kluster pelayan mereka.
3. **Hasilkan secara dinamik** lebih banyak pelayan apabila trafik melonjak.

Bolehkah sokongan pelanggan syarikat penerbangan melakukan perkara yang sama?
1. **Ramalkan**: terdapat model yang boleh kita gunakan untuk meramalkan bila penerbangan terjejas tetapi saya tidak tahu sama ada mereka menggunakannya. Sebagai contoh, seseorang boleh mengambil kira faktor-faktor berikut:
    * Trafik sekitar lapangan terbang – mudah ditarik keluar dari Google Maps
    * Kesesakan di lapangan terbang – beberapa lapangan terbang mempunyai kemas kini masa nyata
    * Cuaca tempatan
    * Corak perjalanan biasa seperti cuti
    * Acara tempatan yang mewujudkan kemasukan dan pengeluaran penumpang yang besar seperti CES di Las Vegas
    * Isyarat lain seperti keadaan pesawat
    * Status sejarah
2. **Peruntukkan awal**: Saya percaya inilah yang setiap syarikat penerbangan lakukan atau patut lakukan semasa musim cuti dengan mengupah lebih ramai ejen. Saya pasti berharap mereka berbuat demikian. Saya tahu TurboTax mengupah lebih ramai orang sekitar tarikh akhir pengembalian cukai.
3. **Hasilkan secara dinamik**: ini adalah kes yang paling sukar. Tiada cara mudah untuk melakukannya dengan manusia, terutamanya dengan ejen yang terlatih dan berpengalaman.

# Sokongan Pelanggan Syarikat Penerbangan: Cara Menskalakan

Matlamat utama kami adalah untuk menangani lonjakan trafik apabila penumpang perlu menyelesaikan masalah mereka di tempat kejadian, tanpa berlengah-lengah.
1. Saluran layan diri digital nampaknya tidak dapat menggantikan ejen manusia sepenuhnya atas dua sebab berikut:
Saluran layan diri digital adalah terhad dan tidak menawarkan akses pejabat belakang yang mencukupi seperti yang dimiliki oleh ejen manusia.
2. Penumpang secara psikologi ingin bercakap dengan manusia kerana secara tradisinya penyelesaian automatik tidak membantu, terutamanya chatbot yang terkenal.

Penyelesaiannya tidak begitu mudah kerana manusia sukar untuk diskalakan. Tetapi ada juga cara untuk menyelesaikannya:
1. Banyak masalah masih boleh diselesaikan melalui saluran layan diri. Kita perlu mengenal pasti mereka dan mengalihkan trafik layan diri daripada ejen manusia.
    * Contohnya, apabila penerbangan saya dibatalkan – apa yang saya mahukan hanyalah menempah semula penerbangan. Tetapi United tidak menawarkan pilihan ini kepada saya dan saya terpaksa menelefon. Walau bagaimanapun, apabila penerbangan saya tertunda, United secara proaktif menawarkan pilihan tempahan semula kepada saya. Penyelesaian untuk kedua-dua masalah adalah sama – saya tidak perlu bercakap dengan ejen apabila penerbangan saya dibatalkan lebih daripada apabila penerbangan saya tertunda. Mengapa saya tidak boleh layan diri?
2. Ejen manusia boleh menjadi lebih cekap apabila dalam sembang atau dalam panggilan.
    * Ejen perkhidmatan pelanggan mengambil masa kira-kira 30 minit untuk menempah semula saya, dengan kira-kira 15 minit menahan saya sementara dia sedang mengerjakan sesuatu.
    * Baki 15 minit ketika dia bercakap dengan saya: separuh masa dia mengumpul maklumat.
    * Saya rasa dengan pengoptimuman, 30 minit boleh dipendekkan kepada 5-10 minit jika pengumpulan maklumat dan automasi dilakukan dengan betul.

Jika saya membina sistem pusat hubungan untuk United, berikut adalah apa yang akan saya lakukan:
1. Tawarkan sembang dan panggilan telefon sebagai saluran perkhidmatan pelanggan utama. Jangan alihkan seluruh pesawat penumpang ke perkhidmatan pelanggan darat (kita semua telah melihat betapa sesaknya tempat penyewaan kereta selepas pesawat besar baru mendarat di destinasi pelancongan).
2. Gabungkan pelanggan silang saluran ke dalam satu saluran tunggal. Ini bermakna mengenal pasti pelanggan secepat mungkin. Ini akan mengurangkan saiz barisan dengan ketara dan menjimatkan lebar jalur ejen.
3. Hasilkan sokongan berasaskan sembang yang lebih pintar. Generasi chatbot semasa menjadi usang, ketinggalan zaman, dan sangat tidak popular selepas ChatGPT keluar. Biarkan ChatGPT mengendalikan perbualan – dalam pengalaman kami ia lebih baik daripada manusia!
4. Tekankan kecekapan ejen manusia: menyelesaikan tugas tidak mencukupi jika setiap panggilan mengambil masa 45 minit; mari bantu mereka menyelesaikan masalah dengan cepat dengan menawarkan:
    * Cadangan “tindakan terbaik seterusnya”
    * “Penyelesaian berjaya sebelumnya” berdasarkan log sembang atau panggilan ejen lain
    * Copilot masa nyata yang membantu pelaksanaan ke sistem pejabat belakang melalui panggilan API atau automasi RPA
5. Bina model ramalan mengenai risiko lonjakan permintaan perkhidmatan pelanggan dan usahakan secara proaktif.

Saya tidak pernah mempunyai ejen perkhidmatan pelanggan yang secara proaktif menghubungi saya untuk menyelesaikan masalah. Ia sentiasa saya, penumpang, yang menunggu dengan kecewa dan menelefon dalam barisan dan di talian.

Kami di [Seasalt.ai](https://seasalt.ai/?utm_source=blog) gembira untuk membina teknologi seperti “laporan minoriti” untuk mengenal pasti masalah sebelum ia berlaku, mengurangkan risiko dengan menghubungi penumpang yang terjejas secara proaktif, dan menangani cabaran penskalaan dinamik pusat hubungan dengan manusia semasa trafik melonjak.

Jika dalam beberapa tahun akan datang, saya menerima panggilan telefon daripada syarikat penerbangan yang memaklumkan masalah yang berpotensi sebelum saya cuba mendapatkan bantuan, itu akan menjadi pengalaman pelanggan yang benar-benar menakjubkan dan perjalanan yang menyeronokkan sebelum saya memulakan perjalanan. Mana-mana syarikat penerbangan yang boleh melakukannya terlebih dahulu akan memenangi begitu banyak penumpang setia.
`;export{a as default};

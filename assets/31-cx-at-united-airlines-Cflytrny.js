const a=`---
title: "Layanan Pelanggan United Airlines: Baik, Buruk, dan Buruk Sekali"
metatitle: "Analisis Layanan Pelanggan United Airlines"
date: 2023-03-21 11:25:00-08:00
modified_date: 2024-07-19T00:00:00Z
draft: false
author: Xuchen Yao
description: "Xuchen Yao membagikan pengalamannya baru-baru ini dengan layanan pelanggan United Airlines selama penundaan dan pembatalan penerbangan, serta menawarkan solusi untuk tantangan penskalaan dukungan pelanggan secara dinamis selama lonjakan lalu lintas."
weight: 1
tags:
  - SeaX
image: images/blog/31-cx-at-united-airlines/flight-delay-illustration.png
canonicalURL: /blog/customer-service-at-united-airlines/
url: /blog/customer-service-at-united-airlines/
---

*[Seasalt.ai](https://seasalt.ai) CEO Xuchen Yao membagikan pengalamannya baru-baru ini dengan layanan pelanggan United Airlines selama penundaan dan pembatalan penerbangan. Hal ini membuatnya menyadari tantangan yang dihadapi oleh dukungan pelanggan maskapai dalam penskalaan dinamis untuk menghadapi lonjakan lalu lintas seperti itu. Xuchen Yao membahas potensi perbaikan, seperti mengalihkan lalu lintas layanan mandiri dari agen manusia, meningkatkan efisiensi agen manusia, dan mengembangkan teknologi untuk secara proaktif mengidentifikasi serta mengurangi risiko masalah potensial.*

Blog ini ditulis pada 22 Maret 2023 di penerbangan UA2 dari Singapura ke San Francisco.

Saya baru-baru ini berkesempatan naik penerbangan UA1 dari San Francisco (SFO) ke Singapura (SIN). Karena pembatalan penerbangan, kesenangan itu segera berubah menjadi ketidakberuntungan. Berikut adalah pelajaran saya tentang layanan pelanggan United Airlines dari sudut pandang seorang teknisi contact center.

# Dua Penerbangan Tertunda: Penundaan dan Pembatalan

Ini adalah rencana perjalanan saya dari Seattle ke Singapura pada Selasa, 14 Maret 2023:

<center>
<img src="/images/blog/31-cx-at-united-airlines/united-flights.png" alt="Rencana penerbangan United Airlines saya"/>

*07:29 – 09:42, dari Seattle (SEA) ke San Francisco (SFO) dengan UA2368. 11:50 – 20:15, dari San Francisco (SFO) ke Singapura (SIN) dengan UA29.*
</center>

Sayangnya, saya tidak menaiki salah satu penerbangan tersebut.

Penerbangan pertama tertunda 1,5 jam karena kemacetan di bandara Seattle (pukul 7 pagi!). Ini membuat waktu transit saya di SFO menjadi nol. Saya berbicara dengan staf darat SEA, mereka memindahkan saya ke penerbangan Alaska Airlines dari SEA ke SFO. Penerbangan Alaska itu juga tertunda, tetapi masih tiba di SFO pukul 11 pagi, hampir tidak cukup waktu untuk mengejar penerbangan berikutnya.

**Sisi baiknya**: United Airlines mengizinkan saya mengubah penerbangan ke Alaska Airlines secara gratis.

**Sisi baiknya**: United Airlines sangat proaktif dalam menangani penundaan melalui kode pendek "26266". Saat terjadi penundaan, mereka bahkan menawarkan opsi untuk memesan ulang penerbangan.

**Sisi buruknya**: Opsi perubahan penerbangan hanya terbatas pada penerbangan United Airlines. Tidak bisa pindah antar maskapai. Saya harus berbicara dengan layanan pelanggan manusia untuk pindah ke penerbangan lain.

**Sisi sangat buruk**: Mengapa bandara SEA sudah macet parah jam 7 pagi?!

<center>
<table>
  <tr>
    <td><img src="/images/blog/31-cx-at-united-airlines/united-text-support-3.jpg" alt="Dukungan SMS United Airlines - 3"/></td>
    <td><img src="/images/blog/31-cx-at-united-airlines/united-text-support-4.jpg" alt="Dukungan SMS United Airlines - 4"/></td>
    <td><img src="/images/blog/31-cx-at-united-airlines/united-text-support-5.jpg" alt="Dukungan SMS United Airlines - 5"/></td>
  </tr>
</table>

*SMS system United Airlines tepat waktu dan proaktif.*
</center>

1. Menariknya, di penerbangan UA1. Kami tertahan di darat selama 3 jam, dan akhirnya penerbangan dibatalkan karena:
2. Pertama, angin kencang di San Francisco, semua penerbangan dihentikan.
Kemudian, saat diizinkan terbang, semua pesawat mengantri untuk lepas landas.
3. Akhirnya, saat hampir giliran kami, pilot mengatakan mereka sudah lembur, dan menurut peraturan FAA, mereka tidak boleh terbang lebih lama. Karena penerbangan ke Singapura memakan waktu 17 jam, dengan waktu di darat, mereka akan melebihi batas saat tiba di Singapura.

Sayangnya, tidak ada pilot pengganti, jadi seluruh penerbangan dibatalkan.

**Sisi sangat buruk**: Selama 3 jam di darat, United Airlines hanya menyediakan 2 biskuit. Itu saja.

Semua orang bergegas keluar dari pesawat, memikirkan bagaimana ini akan memengaruhi perjalanan mereka. Karena ini penerbangan internasional, kami seharusnya tiba di Singapura pada tanggal yang berbeda. Bukan keesokan harinya, tapi dua hari kemudian: karena Singapura 15 jam lebih cepat, dan penerbangan memakan waktu 17 jam.

Sekitar 300 penumpang berlari ke layanan pelanggan darat United Airlines. Saat saya tiba, sudah ada sekitar 200 orang di depan saya. Banyak dari mereka juga terkena dampak cuaca pada penerbangan United Airlines lainnya.

Karena antrean bergerak lambat, berbicara dengan agen darat sia-sia. Saya tahu ada penerbangan United Airlines lain ke Singapura pukul 11 malam. Saya berharap bisa pindah ke penerbangan malam itu. Mungkin banyak orang di penerbangan saya juga ingin melakukan hal yang sama, tapi semuanya antre.

Saya melakukan hal berikut:

1. Saya menelepon United Airlines: 800-864-8331
2. Saya mengirim SMS ke asisten virtual United Airlines melalui kode pendek: 32050.
3. Saya mencoba menghubungi layanan pelanggan melalui video chat di situs web United Airlines.
4. Saya juga antre untuk berbicara dengan agen darat.

Ketika Anda perlu segera menyelesaikan masalah penting dan mendesak, saya benar-benar menjadi pelanggan **omnichannel**.

**Sisi baiknya**: United Airlines menyediakan 4 cara berbeda untuk menghubungi layanan pelanggan mereka.

**Sisi baiknya**: Dengan mengonfirmasi nomor penerbangan, United Airlines dapat memeriksa statusnya dan mengetahui penerbangan terdampak, serta menawarkan opsi perubahan/pembatalan.

**Sisi buruknya**: Estimasi waktu tunggu telepon benar-benar salah. Dikatakan 2 menit, tapi saya menunggu 45 menit untuk berbicara dengan agen.

**Sisi buruknya**: Chatbot sangat kaku. Saya harus mengikuti "menu" dengan membalas 1/2/3/4 atau A/B/C/D/E.

<center>
<table>
  <tr>
    <td><img src="/images/blog/31-cx-at-united-airlines/united-text-support-3.jpg" alt="Dukungan SMS United Airlines - 3"/></td>
    <td><img src="/images/blog/31-cx-at-united-airlines/united-text-support-4.jpg" alt="Dukungan SMS United Airlines - 4"/></td>
    <td><img src="/images/blog/31-cx-at-united-airlines/united-text-support-5.jpg" alt="Dukungan SMS United Airlines - 5"/></td>
  </tr>
</table>

*Chatbot United Airlines menggunakan teknologi generasi lama, menawarkan menu untuk membatasi input penumpang.*
</center>

**Sisi sangat buruk**: Hanya ada kurang dari 10 staf layanan pelanggan darat untuk menangani lebih dari 1.000 penumpang terdampak. Ini menyebabkan kecemasan, kemarahan, ketidakberdayaan, dan stres bagi pelanggan dan staf. Ketika penerbangan kami dibatalkan, staf darat dan awak kabin menyuruh semua orang untuk berbicara dengan layanan pelanggan darat. **Menginstruksikan setiap penumpang terdampak untuk berbicara dengan kurang dari 10 staf adalah "serangan DDOS" fisik pada layanan pelanggan United Airlines.**

DDOS berarti "Distributed Denial of Service", ketika peretas mengarahkan lalu lintas dari jutaan tempat ke satu situs web sehingga tidak dapat merespons layanan apa pun.

**Sisi sangat buruk**: Saya menggunakan 4 saluran untuk menghubungi United Airlines (SMS, video chat, telepon, darat). Saya menggunakan 4 kali sumber daya, dan orang lain mungkin melakukan hal yang sama. Ini secara artifisial meningkatkan lalu lintas dan tekanan pada layanan pelanggan United Airlines 4 kali lipat. Saya kira penumpang lain juga melakukan hal yang sama, yang menjelaskan mengapa "waktu tunggu 2 menit" saya menjadi 45 menit.

Akhirnya saya berhasil berbicara melalui telepon, agen menghabiskan sekitar 20 menit membantu saya pindah ke penerbangan malam ke Singapura. Saat saya selesai, saya masih dalam antrean video chat, masih berurusan dengan chatbot (ironisnya namanya liveperson), dan jelas masih antre secara fisik.

Saya memberi tahu seorang pemuda di penerbangan saya untuk menelepon United Airlines. Dia berkata, "Tidak mungkin, itu akan menunggu selamanya!" Tapi saya bilang, "Saya baru saja berhasil pindah lewat telepon. Lihat, ada 200 orang di depan kita, menurutmu berapa lama kamu harus antre?"

Nanti malam, saya bertemu pemuda itu di penerbangan yang sudah dijadwalkan ulang. Dia sangat senang melihat saya dan berterima kasih atas "tips telepon" saya. Dia mengenakan kaos "tiktok" dan headphone mahal, jadi saya pikir dia mungkin paham teknologi, atau setidaknya mahir komputer.

**Sisi sangat buruk**: Seorang pelanggan "melek teknologi" menganggap dukungan telepon tidak berguna, lebih memilih antre untuk berbicara langsung dengan manusia, meskipun dia tahu betapa panjangnya antrean. **Ini mencerminkan betapa buruknya persepsi publik tentang dukungan telepon.**

# Dukungan Pelanggan Maskapai: Masalah Utama adalah Skalabilitas Dinamis

Mengalami penundaan dan pembatalan penerbangan dalam satu hari, berkomunikasi dengan layanan pelanggan melalui 4 saluran berbeda dua kali, serta pemahaman mendalam tentang cara membangun contact center, saya percaya masalah utama dukungan pelanggan maskapai adalah:

**Dukungan pelanggan maskapai tidak dapat diskalakan secara dinamis. Atau dalam istilah cloud computing: tidak elastis.**

Ini tidak hanya terjadi di United Airlines. Saya juga mengalami hal serupa dengan Air Canada selama Covid-19: waktu tunggu telepon selalu lebih dari 2 jam.

Saya bahkan tidak berpikir chatbot kaku atau agen manusia yang kurang empati adalah masalah utama. Dukungan pelanggan memiliki pola unik: **ketika penerbangan terdampak, puluhan atau ratusan penumpang mencoba menghubungi secara bersamaan, kadang dikalikan 4 saluran.**

Lonjakan lalu lintas ini tidak ditangani dengan baik oleh contact center maskapai modern. Lebih buruk lagi, semua masalah ini adalah "kode merah": mereka perlu diselesaikan _segera_. Maaf, tidak ada dukungan email asinkron berbasis Zendesk. _Saya butuh bicara dengan agen sekarang juga_.

# Dukungan Pelanggan Maskapai: Manusia Tidak Bisa Diskalakan

Mari kita pikirkan bagaimana situs e-commerce mempersiapkan diri untuk lonjakan lalu lintas seperti Black Friday:
1. **Memprediksi** kapan dan berapa banyak lalu lintas yang akan didapat.
2. **Pra-penjatahan** sumber daya server dengan menghubungi penyedia cloud atau meningkatkan cluster.
3. **Membuat** lebih banyak server secara dinamis saat lonjakan terjadi.

Bisakah dukungan pelanggan maskapai melakukan hal yang sama?
1. **Prediksi**: Kita bisa menggunakan model untuk memprediksi kapan penerbangan akan terdampak, tapi saya tidak tahu apakah mereka menggunakan model apa pun. Misalnya, faktor-faktor berikut bisa dipertimbangkan:
   * Lalu lintas sekitar bandara—bisa didapat dari Google Maps
   * Kepadatan bandara—beberapa bandara punya update real-time
   * Cuaca lokal
   * Pola perjalanan umum seperti hari libur
   * Event lokal besar seperti CES di Las Vegas
   * Kondisi pesawat dan sinyal lain
   * Status historis
2. **Pra-penjatahan**: Saya yakin ini yang dilakukan atau seharusnya dilakukan setiap maskapai dengan mempekerjakan lebih banyak agen saat musim liburan. Saya tahu TurboTax mempekerjakan lebih banyak orang menjelang tenggat pajak.
3. **Membuat dinamis**: Ini yang paling sulit. Tidak ada cara mudah untuk melakukan ini dengan manusia, terutama agen berpengalaman.

# Dukungan Pelanggan Maskapai: Cara Menskalakan

Tujuan utama kami adalah menangani lonjakan lalu lintas, agar penumpang tidak menunggu saat butuh solusi segera.
1. Saluran layanan mandiri digital tampaknya tidak bisa sepenuhnya menggantikan agen manusia, karena dua alasan:
   * Saluran layanan mandiri terbatas, tidak bisa memberikan akses backend selengkap agen manusia.
   * Penumpang secara psikologis ingin berbicara dengan manusia, karena solusi otomatis tradisional tidak membantu, terutama chatbot yang terkenal kaku.

Solusinya tidak sederhana, karena manusia sulit diskalakan. Tapi ada cara:
1. Banyak masalah masih bisa diselesaikan melalui saluran layanan mandiri. Kita perlu mengidentifikasi dan mengalihkan lalu lintas layanan mandiri dari agen manusia.
   * Misalnya, saat penerbangan saya dibatalkan—saya hanya ingin memesan ulang. Tapi United Airlines tidak memberi saya opsi itu, saya harus menelepon. Namun, saat penerbangan saya tertunda, United Airlines proaktif menawarkan opsi pemesanan ulang. Solusinya sama—saat penerbangan dibatalkan, saya tidak perlu bicara dengan agen seperti saat penundaan. Kenapa tidak bisa layanan mandiri?
2. Agen manusia bisa lebih efisien saat chat atau telepon.
   * Agen menghabiskan sekitar 30 menit membantu saya pindah, 15 menit di antaranya saya menunggu, sisanya dia mengumpulkan data.
   * Saya rasa dengan optimalisasi, jika pengumpulan data dan otomatisasi dilakukan dengan baik, 30 menit bisa dipangkas jadi 5-10 menit.

Jika saya membangun sistem contact center untuk United Airlines, saya akan:
1. Menyediakan chat dan telepon sebagai saluran utama layanan pelanggan. Jangan mengarahkan seluruh penumpang ke layanan pelanggan darat (kita semua tahu betapa penuhnya rental mobil setelah pesawat besar mendarat di destinasi wisata).
2. Menggabungkan pelanggan omnichannel ke satu saluran. Artinya, identifikasi pelanggan secepat mungkin. Ini akan sangat mengurangi panjang antrean dan menghemat bandwidth agen.
3. Mengembangkan dukungan berbasis chat yang lebih cerdas. Setelah ChatGPT muncul, chatbot generasi sekarang sudah usang dan tidak disukai. Biarkan ChatGPT menangani percakapan—dari pengalaman kami, ia lebih baik dari manusia!
4. Fokus pada efisiensi agen manusia: jika setiap panggilan butuh 45 menit, itu tidak cukup; mari bantu mereka menyelesaikan masalah lebih cepat dengan:
   * Saran "langkah terbaik berikutnya"
   * "Solusi sukses sebelumnya" dari riwayat chat atau panggilan agen lain
   * Copilot real-time, membantu otomatisasi backend lewat API atau RPA
5. Membangun model prediksi lonjakan permintaan layanan pelanggan, dan secara proaktif menanganinya.

Saya belum pernah mengalami agen layanan pelanggan yang proaktif menghubungi saya untuk menyelesaikan masalah. Selalu saya sebagai penumpang yang menunggu, antre, dan menelepon.

Kami di [Seasalt.ai](https://seasalt.ai/?utm_source=blog) senang mengembangkan teknologi seperti "Minority Report" untuk mengidentifikasi masalah sebelum terjadi, menghubungi penumpang terdampak secara proaktif, dan menghadapi tantangan penskalaan contact center manusia secara dinamis selama lonjakan lalu lintas.

Jika dalam beberapa tahun ke depan, sebelum saya meminta bantuan, saya menerima telepon dari maskapai yang memberi tahu potensi masalah, itu akan menjadi pengalaman pelanggan yang luar biasa bahkan sebelum saya bepergian. Maskapai yang pertama melakukan ini akan memenangkan banyak pelanggan setia. `;export{a as default};

const a=`---
title: "SeaX KB: Basis Pengetahuan yang Menjawab Sebelum Anda Bertanya"
metatitle: "SeaX KB: Basis Pengetahuan yang Menjawab Sebelum Anda Bertanya"
date: 2022-08-15 22:01:32-07:00
modified_date: 2025-07-30 17:01:21.048000+00:00
draft: false
author: Kim Dodds
description: "Dalam artikel ini, kami melanjutkan topik integrasi AI dengan memperkenalkan basis pengetahuan bertenaga AI SeaX, yang memberikan balasan yang disarankan secara real-time."
weight: 1
tags:
  - SeaX
canonicalURL: /blog/seax-kb-a-knowledge-base/
url: /blog/seax-kb-a-knowledge-base/
---

*Dalam postingan blog kami sebelumnya [Berikan Suara Sendiri pada Pusat Kontak Anda dengan Kecerdasan Suara SeaX](https://seasalt.ai/blog/21-seax-voice-intelligence/), kami menunjukkan bagaimana mesin text-to-speech dan speech-to-text internal Seasalt.ai menyempurnakan berbagai aspek platform SeaX. Dalam artikel ini, kita akan melanjutkan topik integrasi AI dengan memperkenalkan basis pengetahuan bertenaga AI SeaX, yang mendengarkan percakapan secara real-time untuk memberikan balasan yang disarankan.*

# Daftar Isi
- [Basis Pengetahuan Tradisional](#the-traditional-knowledge-base)
- [Basis Pengetahuan SeaX](#seax-knowledge-base)
    - [Antarmuka Pengguna Tertanam untuk Agen Langsung](#embedded-user-interface-for-live-agents)
    - [Pencarian Cepat dan Akurat](#fast-and-accurate-search)
    - [Saran Otomatis Real-time](#real-time-automated-suggestions)
    - [Templat Respons](#response-templates)
    - [Manajemen KB](#kb-management)
    - [Webinar](#webinar)

# Basis Pengetahuan Tradisional

Pada intinya, basis pengetahuan (KB) hanyalah kumpulan informasi yang (idealnya) terorganisir dengan baik dan mudah diakses untuk layanan mandiri online. Sistem KB yang baik akan memiliki fitur seperti organisasi konten hierarkis, pencarian, dan penandaan untuk membantu pengguna menemukan informasi yang tepat dengan lebih mudah.

Memelihara basis pengetahuan yang terperinci adalah praktik standar bagi sebagian besar perusahaan saat ini. Apakah tujuannya adalah untuk membantu karyawan berbagi informasi internal tentang produk mereka, menjawab pertanyaan calon pelanggan, membantu pelanggan dengan pemecahan masalah, atau semua hal di atas—membuat informasi penting dapat diakses oleh karyawan dan pelanggan berarti pekerjaan yang lebih efisien dan kepuasan pelanggan yang lebih tinggi.

Biasanya, basis pengetahuan diimplementasikan dan dipelihara melalui sistem manajemen konten atau sistem manajemen pengetahuan. Sistem ini dapat bervariasi skalanya tergantung pada kebutuhan organisasi, dari manajer dokumen sederhana hingga layanan kaya fitur yang mencakup alur kerja penerbitan, penargetan audiens, alat kolaborasi, dan banyak lagi. Meskipun sistem ini serbaguna dalam berbagai aspek, sistem ini hampir selalu dirancang untuk diakses melalui interaksi dengan halaman web atau aplikasi. Untuk kasus penggunaan spesifik agen layanan pelanggan (yang sering menggunakan basis pengetahuan sebagai salah satu sumber daya utama mereka untuk membantu pelanggan), integrasi yang erat dengan perangkat lunak pusat kontak diperlukan untuk memungkinkan agen menangani pertanyaan pengguna se-mulus mungkin.

# Basis Pengetahuan SeaX

Basis pengetahuan kami dirancang sejak hari pertama dengan kasus penggunaan yang sangat spesifik dalam pikiran: layanan pelanggan berbasis suara. Sedangkan sebagian besar, jika tidak semua, sistem basis pengetahuan yang ada mengandalkan navigasi melalui halaman web hierarkis atau mengetikkan kueri pencarian, basis pengetahuan kami harus lebih cepat dan lebih otonom sehingga perwakilan layanan pelanggan dapat mencurahkan perhatian penuh mereka kepada pelanggan sambil tetap menjawab pertanyaan dengan cepat.

Jika Anda ingin langsung ke demo, Anda dapat menonton demo singkat SeaX KB kami:
<iframe width="85%" height="450px" src="https://www.youtube.com/embed/C_e_gaZHSFA" title="Pemutar video YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>


## Antarmuka Pengguna Tertanam untuk Agen Langsung

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-intro.png" alt="Tampilan pertama antarmuka Basis Pengetahuan SeaX."/>

*Tampilan pertama antarmuka Basis Pengetahuan SeaX.*
</center>

Secara alami, karena mesin basis pengetahuan kami dirancang khusus untuk aplikasi pusat kontak, mesin ini terintegrasi secara native ke dalam platform SeaX sehingga agen dapat mengakses basis pengetahuan dengan mulus saat menangani panggilan dan pesan. Tidak perlu berpindah jendela, tidak perlu meraba-raba tab, tidak perlu menavigasi halaman web bersarang.

## Pencarian Cepat dan Akurat

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-manual-search.png" alt="Hasil pencarian manual di Basis Pengetahuan SeaX."/>

*Hasil pencarian manual di Basis Pengetahuan SeaX.*
</center>

Pada tingkat paling dasar, basis pengetahuan kami didukung oleh mesin pencari yang sangat cepat dan akurat. Kami menggunakan pemrosesan bahasa alami dan teknik ekstraksi informasi canggih untuk mengumpulkan makna dari teks mentah, contoh kueri, dan URL pendukung dan mencocokkan ucapan pelanggan dengan entri basis pengetahuan yang paling relevan. Mesin basis pengetahuan sangat skalabel dan dapat mendukung miliaran dokumen tanpa perubahan waktu respons yang terlihat.

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-detail.png" alt="Artikel basis pengetahuan dalam tampilan yang diperluas setelah mengklik hasil pencarian."/>

*Artikel basis pengetahuan dalam tampilan yang diperluas setelah mengklik hasil pencarian.*
</center>

Selain menemukan dokumen yang paling relevan, mesin pencari kami juga memberikan hasil yang lebih terperinci dengan mengekstraksi kata kunci yang menonjol dari kueri pengguna dan menyorot kata kunci dan bagian yang paling relevan di setiap entri basis pengetahuan yang disarankan.

## Saran Otomatis Real-time

Tetapi apa yang telah kami tunjukkan sejauh ini masih merupakan pencarian manual. Agen langsung sibuk berinteraksi dengan pelanggan, dan mengetik pencarian secara manual ke dalam basis pengetahuan setiap kali mereka membutuhkan informasi membuang-buang waktu yang berharga. Jadi, nilai tambah terbesar yang datang dengan Basis Pengetahuan SeaX adalah pencarian otomatis real-time untuk interaksi berbasis teks dan suara.

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-automatic-search.png" alt="Basis Pengetahuan SeaX menunjukkan saran artikel otomatis untuk pesan pengguna yang masuk."/>

*Basis Pengetahuan SeaX menunjukkan saran artikel otomatis untuk pesan pengguna yang masuk.*
</center>

Setiap kali pesan pengguna baru masuk, basis pengetahuan secara otomatis menanyakan dengan pesan persis pelanggan. Secara real-time, saat pelanggan berbicara, agen akan diberikan saran artikel basis pengetahuan terbaru untuk referensi mereka.

Ini juga berfungsi untuk panggilan suara! Postingan blog kami sebelumnya [Berikan Suara Sendiri pada Pusat Kontak Anda dengan Kecerdasan Suara SeaX](https://seasalt.ai/blog/21-seax-voice-intelligence/) menampilkan mesin speech-to-text canggih Seasalt.ai. Platform SeaX memanfaatkan mesin ini untuk mentranskripsikan semua panggilan suara secara real-time. Akibatnya, kami dapat menggunakan transkripsi ini untuk berbagai aplikasi hilir, termasuk pencarian basis pengetahuan otomatis.

## Templat Respons

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-response-template.png" alt="Seorang agen membalas pelanggan dalam satu klik dengan templat respons yang dihasilkan oleh Basis Pengetahuan SeaX."/>

*Seorang agen membalas pelanggan dalam satu klik dengan templat respons yang dihasilkan oleh Basis Pengetahuan SeaX.*
</center>

Hasil pencarian basis pengetahuan dilengkapi dengan satu fitur tambahan untuk membantu mempercepat responsivitas agen untuk interaksi berbasis teks. Ketika seorang agen menemukan artikel basis pengetahuan yang relevan, mereka cukup mengklik ikon "+" di sebelah kiri judul untuk menyisipkan templat respons ke dalam jendela obrolan mereka. Di backend, setiap kali basis pengetahuan dicari, ia menghasilkan respons tertulis untuk pertanyaan pengguna berdasarkan informasi yang paling relevan dari artikel basis pengetahuan yang disarankan dan menyertakan tautan pendukung apa pun. Ini dapat secara dramatis meningkatkan waktu respons agen karena agen tidak lagi memulai dari awal. Sebaliknya, mereka sudah menampilkan informasi penting dari artikel basis pengetahuan di jendela obrolan mereka, jadi yang harus mereka lakukan hanyalah mengedit dan mengirim.


## Manajemen KB

Sekarang setelah kita melihat apa yang dapat dilakukan oleh mesin basis pengetahuan, ada satu pertanyaan yang masih ada tentang backend: bagaimana informasi dalam basis pengetahuan dikelola? Platform SeaX menyediakan UI manajemen basis pengetahuan yang terintegrasi penuh yang dapat diakses oleh administrator dari halaman pengaturan.

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-management.png" alt="Antarmuka Manajemen Basis Pengetahuan SeaX."/>

*Antarmuka Manajemen Basis Pengetahuan SeaX.*
</center>

Di halaman ini, Anda dapat menambahkan entri basis pengetahuan baru satu per satu, atau Anda dapat mengimpor/mengekspor seluruh basis pengetahuan menggunakan file spreadsheet. Antarmuka ini juga mendukung pengeditan dan penghapusan entri basis pengetahuan sehingga Anda dapat terus memperbarui basis pengetahuan Anda.

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-edit.png" alt="Mengedit satu artikel basis pengetahuan melalui antarmuka Manajemen Basis Pengetahuan SeaX."/>

*Mengedit satu artikel basis pengetahuan melalui antarmuka Manajemen Basis Pengetahuan SeaX.*
</center>

## Webinar

Jika Anda ingin melihat lebih dalam tentang sistem basis pengetahuan dan bagaimana sistem ini terintegrasi dengan platform SeaX, tonton webinar kami tentang topik tersebut:
<iframe width="85%" height="450px" src="https://www.youtube.com/embed/FOqQ01fpKQ4" title="Pemutar video YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

Untuk demo satu lawan satu, atau untuk mengetahui bagaimana Seasalt.ai dapat menyesuaikan solusi untuk kebutuhan bisnis Anda, silakan isi [formulir jadwal demo](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting) kami.`;export{a as default};

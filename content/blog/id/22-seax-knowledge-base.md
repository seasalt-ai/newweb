---
title: "SeaX KB: Basis Pengetahuan yang Menjawab Sebelum Ditanya"
metatitle: "SeaX KB: Basis Pengetahuan yang Menjawab Sebelum Ditanya"
date: 2022-08-15T22:01:32-07:00
modified_date: 2025-07-27T00:00:00Z
draft: false
author: Kim Dodds
image: /images/blog/22-seax-knowledge-base/thumbnail.png
description: "Dalam postingan ini, kami melanjutkan topik integrasi AI dengan Basis Pengetahuan bertenaga AI SeaX, yang menawarkan respons yang disarankan secara real time."
weight: 1
tags: ["SeaX"]
canonicalURL: "/blog/seax-kb-a-knowledge-base/"
url: "/blog/seax-kb-a-knowledge-base/"
---

*Dalam postingan blog kami sebelumnya, [Berikan Pusat Kontak Anda Suara Sendiri dengan SeaX Voice Intelligence](https://seasalt.ai/blog/21-seax-voice-intelligence/), kami menunjukkan bagaimana mesin text-to-speech dan speech-to-text Seasalt.ai yang dikembangkan sendiri meningkatkan berbagai aspek platform SeaX. Dalam postingan ini, kami melanjutkan topik integrasi AI dengan Basis Pengetahuan bertenaga AI SeaX, yang mendengarkan percakapan dan menawarkan respons yang disarankan secara real time.*

# Daftar Isi
- [Basis Pengetahuan Tradisional](#the-traditional-knowledge-base)
- [Basis Pengetahuan SeaX](#seax-knowledge-base)
    - [Antarmuka Pengguna Tertanam untuk Agen Langsung](#embedded-user-interface-for-live-agents)
    - [Pencarian Cepat dan Akurat](#fast-and-accurate-search)
    - [Saran Otomatis Real-Time](#real-time-automated-suggestions)
    - [Templat Respons](#response-templates)
    - [Manajemen KB](#kb-management)
    - [Webinar](#webinar)

# Basis Pengetahuan Tradisional

Pada dasarnya, basis pengetahuan (KB) hanyalah perpustakaan informasi yang (idealnya) terorganisir dengan baik dan mudah diakses yang digunakan secara swalayan online. Sistem basis pengetahuan yang baik akan memiliki fitur-fitur seperti organisasi konten hierarkis, pencarian, dan pelabelan untuk membantu pengguna menemukan informasi yang benar dengan lebih mudah.

Mempertahankan basis pengetahuan yang terperinci adalah praktik standar bagi sebagian besar perusahaan saat ini. Baik tujuannya adalah membantu karyawan berbagi informasi internal tentang produk mereka, menjawab pertanyaan untuk calon klien, membantu pelanggan memecahkan masalah, atau semua hal di atas - membuat informasi kunci dapat diakses oleh karyawan dan pelanggan berarti pekerjaan yang lebih efisien dan kepuasan pelanggan yang lebih tinggi.

Biasanya, basis pengetahuan diimplementasikan dan dikelola melalui Sistem Manajemen Konten atau Sistem Manajemen Pengetahuan. Sistem ini dapat bervariasi dalam skala tergantung pada kebutuhan organisasi, mulai dari manajer dokumen sederhana hingga layanan yang kaya fitur yang mencakup alur kerja penerbitan, penargetan audiens, alat kolaborasi, dan banyak lagi. Meskipun sistem ini serbaguna dalam berbagai cara, mereka hampir selalu dimaksudkan untuk diakses melalui interaksi dengan halaman web atau aplikasi. Untuk kasus penggunaan khusus agen layanan pelanggan (yang biasanya menggunakan basis pengetahuan sebagai salah satu sumber daya utama mereka dalam membantu pelanggan) integrasi yang erat dengan perangkat lunak pusat kontak diperlukan untuk memungkinkan agen menangani pertanyaan pengguna semulus mungkin.

# Basis Pengetahuan SeaX

Basis pengetahuan kami dirancang sejak hari pertama dengan kasus penggunaan yang sangat spesifik: layanan pelanggan berbasis suara. Meskipun sebagian besar, jika tidak semua, sistem basis pengetahuan yang ada mengandalkan navigasi melalui halaman web hierarkis atau mengetikkan kueri pencarian, KB kami harus lebih cepat dan lebih independen agar perwakilan layanan pelanggan dapat memberikan perhatian penuh kepada pelanggan sambil tetap menjawab pertanyaan dengan cepat.

Jika Anda ingin langsung ke demonstrasi, Anda dapat menonton video demo SeaX KB singkat kami:
<iframe width="85%" height="450px" src="https://www.youtube.com/embed/C_e_gaZHSFA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>


## Antarmuka Pengguna Tertanam untuk Agen Langsung

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-intro.png" alt="Tampilan pertama antarmuka Basis Pengetahuan SeaX."/>

*Tampilan pertama antarmuka Basis Pengetahuan SeaX.*
</center>

Secara alami, karena mesin KB kami dirancang khusus untuk aplikasi pusat kontak, ia memiliki integrasi asli dengan platform SeaX sehingga agen dapat mengakses KB dengan mulus saat menangani panggilan dan pesan. Tidak perlu beralih jendela, tidak perlu membolak-balik tab, tidak perlu menavigasi melalui halaman web bersarang.

## Pencarian Cepat dan Akurat

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-manual-search.png" alt="Hasil dari pencarian manual di Basis Pengetahuan SeaX."/>

*Hasil dari pencarian manual di Basis Pengetahuan SeaX.*
</center>

Pada tingkat paling dasar, basis pengetahuan kami didukung oleh mesin pencari yang sangat cepat dan akurat. Kami menggunakan teknik pemrosesan bahasa alami dan ekstraksi informasi canggih untuk mengumpulkan makna dari teks biasa, kueri sampel, & URL pendukung dan mencocokkan ucapan pelanggan dengan entri KB yang paling relevan. Mesin basis pengetahuan sangat dapat diperluas dan dapat mendukung miliaran dokumen tanpa perubahan yang terlihat dalam waktu respons.

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-detail.png" alt="Artikel KB dalam tampilan yang diperluas setelah mengklik hasil pencarian."/>

*Artikel KB dalam tampilan yang diperluas setelah mengklik hasil pencarian.*
</center>

Selain menemukan dokumen yang paling relevan, mesin pencari kami memberikan hasil yang lebih terperinci dengan mengekstraksi kata kunci penting dari kueri pengguna dan menyoroti kata kunci dan bagian yang paling relevan dalam setiap entri KB yang disarankan.

## Saran Otomatis Real-Time

Namun, apa yang telah kami tunjukkan sejauh ini masih merupakan pencarian manual. Agen langsung memiliki banyak pekerjaan dalam berinteraksi dengan pelanggan, dan akan kehilangan waktu berharga untuk memasukkan pencarian manual ke dalam KB setiap kali mereka menginginkan informasi. Untuk alasan itu, nilai tambah terbesar yang dibawa oleh Basis Pengetahuan SeaX adalah pencarian otomatis real-time untuk interaksi berbasis teks dan suara.

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-automatic-search.png" alt="SeaX KB menampilkan saran artikel otomatis untuk pesan pengguna yang masuk."/>

*SeaX KB menampilkan saran artikel otomatis untuk pesan pengguna yang masuk.*
</center>

Setiap kali pesan pengguna baru masuk, basis pengetahuan akan secara otomatis dikueri menggunakan pesan persis pelanggan. Secara real time, saat pelanggan berbicara, agen akan diberikan saran artikel KB yang terbaru untuk referensi mereka.

Dan ini juga berfungsi dengan panggilan berbasis suara! Postingan blog terakhir kami, [Berikan Pusat Kontak Anda Suara Sendiri dengan SeaX Voice Intelligence](https://seasalt.ai/blog/21-seax-voice-intelligence/), menunjukkan mesin Speech-to-Text Seasalt.ai yang canggih. Platform SeaX menggunakan mesin itu untuk mentranskripsikan semua panggilan berbasis suara secara real time. Akibatnya, kami dapat menggunakan transkripsi tersebut untuk berbagai aplikasi hilir, termasuk pencarian basis pengetahuan otomatis.

## Templat Respons

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-response-template.png" alt="Seorang agen merespons pelanggan dalam satu klik menggunakan templat respons yang dihasilkan SeaX KB."/>

*Seorang agen merespons pelanggan dalam satu klik menggunakan templat respons yang dihasilkan SeaX KB.*
</center>

Hasil pencarian dari basis pengetahuan memiliki satu fitur tambahan yang membantu mempercepat respons agen untuk interaksi berbasis teks. Ketika agen menemukan artikel KB yang relevan, mereka cukup mengklik ikon `+` di sebelah kiri judul untuk menyisipkan templat respons ke jendela obrolan mereka. Di backend, setiap kali KB dicari, ia menghasilkan respons tertulis terhadap pertanyaan pengguna berdasarkan informasi paling relevan dalam artikel KB yang disarankan dan menyertakan tautan pendukung apa pun. Ini dapat sangat meningkatkan waktu respons agen, karena agen tidak lagi memulai dari awal. Sebaliknya, mereka memiliki informasi penting dari artikel KB yang sudah ada di jendela obrolan mereka, sehingga mereka dapat dengan mudah mengeditnya dan mengirimkannya.


## Manajemen KB

Sekarang setelah kita melihat apa yang dapat dilakukan mesin KB, ada satu pertanyaan yang tersisa tentang backend: bagaimana Anda mengelola informasi di basis pengetahuan? Platform SeaX memiliki UI manajemen KB yang terintegrasi penuh yang tersedia untuk administrator dari halaman pengaturan.

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-management.png" alt="Antarmuka manajemen SeaX KB."/>

*Antarmuka manajemen SeaX KB.*
</center>

Dari halaman ini Anda dapat menambahkan entri KB baru tunggal atau Anda dapat mengimpor/mengekspor seluruh basis pengetahuan menggunakan file spreadsheet. Antarmuka juga mendukung pengeditan dan penghapusan entri KB sehingga Anda dapat terus memperbarui KB Anda.

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-edit.png" alt="Mengedit satu artikel KB melalui antarmuka manajemen SeaX KB."/>

*Mengedit satu artikel KB melalui antarmuka manajemen SeaX KB.*
</center>

## Webinar

Jika Anda ingin melihat panduan yang lebih mendalam tentang sistem basis pengetahuan dan bagaimana ia terintegrasi dengan platform SeaX, silakan tonton webinar kami tentang subjek tersebut:
<iframe width="85%" height="450px" src="https://www.youtube.com/embed/FOqQ01fpKQ4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

Untuk demo satu-satu, atau untuk mempelajari lebih lanjut tentang bagaimana Seasalt.ai dapat menyesuaikan solusinya dengan kebutuhan bisnis Anda, silakan isi [formulir Pesan Demo](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting) kami.

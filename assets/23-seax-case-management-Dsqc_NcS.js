const a=`---
title: "SeaX Case Management: Kendalikan Pelacakan Kasus Pusat Kontak Anda"
metatitle: "Manajemen Kasus SeaX: Lacak Interaksi Pelanggan Anda"
date: 2022-08-17 22:28:15+00:00
modified_date: 2025-07-29 20:45:17+00:00
draft: false
author: Sarah Reid
description: "Dalam postingan ini, kami menjelajahi integrasi AI dengan Manajemen Kasus, yang memberikan alat kepada agen Anda untuk melacak dan merekam interaksi dengan pelanggan Anda di SeaX."
weight: 1
tags:
  - SeaX
image: images/blog/23-seax-case-management/0-main.png
canonicalURL: /blog/seax-case-management/
url: /blog/seax-case-management/
---

*Dalam postingan blog kami sebelumnya, [SeaX KB: Basis Pengetahuan yang Menjawab Sebelum Ditanya](https://seasalt.ai/blog/22-seax-knowledge-base/), kami menunjukkan bagaimana Basis Pengetahuan internal Seasalt.ai menempatkan informasi perusahaan Anda langsung di ujung jari agen Anda, meningkatkan efisiensi dan akurasi di pusat kontak Anda. Dalam postingan ini, kami melanjutkan topik integrasi AI dengan sistem Manajemen Kasus SeaX, yang memberikan alat yang ampuh kepada agen Anda untuk melacak dan merekam interaksi dengan pelanggan Anda langsung di antarmuka SeaX.*

# Daftar Isi
- [Ticketing vs Manajemen Kasus](#ticketing-vs-case-management)
- [Manajemen Kasus SeaX](#seax-case-management)
    - [Antarmuka Pengguna Tertanam untuk Agen Langsung](#embedded-user-interface-for-live-agents)
    - [Pencarian Otomatis yang Kuat](#powerful-automatic-search)
    - [Manajemen Kontak Terintegrasi](#integrated-contact-management)
    - [Interaksi Pelanggan yang Terhubung](#linked-customer-interactions)
    - [Bidang yang Dapat Disesuaikan](#customizable-fields)
    - [Tindak Lanjut Kasus Otomatis](#automated-case-follow-up)
    - [Dasbor Administrator](#administrator-dashboard)
    - [Webinar](#webinar)

# Ticketing vs Manajemen Kasus

Istilah 'ticketing' dan 'manajemen kasus' sering digunakan secara bergantian untuk merujuk pada sistem ketika detail suatu masalah disimpan dalam beberapa objek data, yang kemudian digunakan dan dirujuk selama masalah diselesaikan. Namun, di mana kedua istilah ini biasanya berbeda adalah dalam kompleksitas sistem.

Sistem 'ticketing' biasanya lebih sederhana, di mana tiket digunakan untuk menyimpan detail satu masalah tertentu, dan dibuang atau diarsipkan ketika masalah diselesaikan. Sistem 'manajemen kasus' biasanya lebih kompleks, dan melakukan lebih dari sekadar melacak masa pakai suatu masalah. Kasus sering kali dihubungkan dengan hal-hal lain, seperti kasus serupa lainnya atau pelanggan yang membuka kasus, sehingga tren dapat digunakan untuk menyelesaikan masalah yang lebih luas. Informasi tentang berbagai interaksi dengan pelanggan selama masalah dapat disimpan dalam data kasus, sehingga setiap agen berikutnya yang menangani kasus tersebut tahu persis apa yang terjadi. Sebuah kasus dapat ditutup dan kemudian dibuka kembali jika pelanggan kembali dengan masalah yang berulang. Manajemen kasus adalah alat yang lebih kuat dan fleksibel untuk melacak tugas dan interaksi yang lebih kompleks dalam pusat kontak.

# Manajemen Kasus SeaX

Manajemen kasus kami didasarkan pada prinsip kemudahan penggunaan saat berinteraksi dengan pelanggan. Hal terakhir yang dibutuhkan agen saat membantu pelanggan adalah harus khawatir tentang mengingat semuanya untuk mencatat setelah panggilan, atau dipaksa untuk beralih ke beberapa program yang berbeda hanya untuk berbicara dengan pelanggan, menemukan informasi yang ada, dan mencatat informasi baru.

Jika Anda ingin langsung ke demonstrasi, Anda dapat menonton video demo singkat Manajemen Kasus SeaX kami:

<iframe width="85%" height="450px" src="https://www.youtube.com/embed/yf1REVZtRa8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

## Antarmuka Pengguna Tertanam untuk Agen Langsung

<center>
<img src="/images/blog/23-seax-case-management/1-intro.png" alt="Tampilan pertama antarmuka Manajemen Kasus SeaX."/>

*Tampilan pertama antarmuka Manajemen Kasus SeaX.*
</center>

Karena fokus kami adalah membuat manajemen kasus dapat diakses oleh agen, Sistem Manajemen Kasus SeaX terintegrasi secara native ke dalam SeaX. Agen dapat menambahkan kasus baru, mengedit yang sudah ada, dan mencatat semua yang diperlukan di antarmuka yang sama tempat mereka menangani panggilan dan pesan. Tidak ada pergantian jendela, tidak ada bolak-balik tab, tidak ada navigasi melalui halaman web bersarang.

## Pencarian Otomatis yang Kuat

<center>
<img src="/images/blog/23-seax-case-management/2-search.png" alt="Antarmuka pencarian Manajemen Kasus SeaX."/>

*Antarmuka pencarian Manajemen Kasus SeaX.*
</center>

Pencarian kasus kami yang cepat dan akurat memungkinkan Anda mencari dan mengurutkan berdasarkan aspek apa pun dari informasi kasus Anda, termasuk pencarian teks lengkap catatan agen dan pemfilteran berdasarkan bidang data kustom Anda sendiri.

## Manajemen Kontak Terintegrasi

<center>
<img src="/images/blog/23-seax-case-management/3-contacts.png" alt="Antarmuka kontak pelanggan Manajemen Kasus SeaX."/>

*Antarmuka kontak pelanggan Manajemen Kasus SeaX.*
</center>

Selain mengelola informasi kasus, kami juga menyediakan manajemen kontak untuk menyimpan informasi pelanggan Anda dan menghubungkan kasus pelanggan bersama-sama. Seperti halnya kasus, Anda dapat menyimpan catatan tentang pelanggan dan mengelompokkannya berdasarkan label untuk melacak siapa yang menelepon ke pusat kontak Anda.

## Interaksi Pelanggan yang Terhubung

<center>
<img src="/images/blog/23-seax-case-management/4-recording.png" alt="Sematkan rekaman panggilan Anda langsung ke kasus terkait."/>

*Sematkan rekaman panggilan Anda langsung ke kasus terkait.*
</center>

Setiap kasus terhubung ke kontak terkait, tetapi kami juga dapat menghubungkan panggilan individual ke kasus terkait. Dengan fungsi 'Sematkan Rekaman Tugas', Anda dapat langsung melampirkan rekaman panggilan ke kasus, memungkinkan tinjauan di masa mendatang tentang apa yang sebenarnya terjadi dalam setiap interaksi pelanggan terkait.

## Bidang yang Dapat Disesuaikan

<center>
<img src="/images/blog/23-seax-case-management/5-custom-fields.png" alt="Tentukan bidang data kustom untuk menyimpan informasi pelanggan dan kasus yang penting bagi Anda."/>

*Tentukan bidang data kustom untuk menyimpan informasi pelanggan dan kasus yang penting bagi Anda.*
</center>

Kami memahami bahwa setiap perusahaan unik, dan setiap pusat kontak perlu mengumpulkan berbagai jenis informasi dalam kasus mereka. Oleh karena itu, Sistem Manajemen Kasus SeaX menyediakan set dasar bidang data penting, sambil menyediakan fungsi bidang kustom sehingga Anda dapat menambahkan bidang data tambahan ke kasus dan kontak pelanggan untuk mengumpulkan informasi apa pun yang Anda butuhkan di pusat kontak Anda.

<center>
<img src="/images/blog/23-seax-case-management/6-custom-fields.png" alt="Akses bidang kustom Anda langsung di kartu kasus dan kontak."/>

*Akses bidang kustom Anda langsung di kartu kasus dan kontak.*
</center>

## Tindak Lanjut Kasus Otomatis

<center>
<img src="/images/blog/23-seax-case-management/7-sms.png" alt="Otomatiskan pesan untuk mengumpulkan status kasus dan skor CSAT dari pelanggan."/>

*Otomatiskan pesan untuk mengumpulkan status kasus dan skor CSAT dari pelanggan.*
</center>

Ada sejumlah interaksi pelanggan berulang kecil yang harus dilakukan di pusat kontak untuk memastikan bahwa kasus ditangani dengan benar. Sistem Manajemen Kasus SeaX dapat mengotomatiskan percakapan ini untuk Anda, sehingga agen Anda dapat fokus pada masalah yang lebih kompleks. Dengan sekali klik, Anda dapat mengirim pesan ke pelanggan untuk memeriksa status kasus yang telah dibuka untuk waktu yang lama atau meminta tanggapan pada survei kepuasan pelanggan, dan sistem akan secara otomatis memperbarui informasi kasus mereka berdasarkan tanggapan mereka.

## Dasbor Administrator

<center>
<img src="/images/blog/23-seax-case-management/8-admin.png" alt="Kontrol informasi dalam sistem manajemen kasus Anda dengan dasbor administrator."/>

*Kontrol informasi dalam sistem manajemen kasus Anda dengan dasbor administrator.*
</center>

Menyimpan informasi tentang kasus di pusat kontak Anda adalah satu hal, dan mengelola kasus di pusat kontak Anda adalah hal lain. Sistem Manajemen Kasus SeaX menyediakan dasbor administrator sehingga Anda dapat melakukan hal itu. Dari sini Anda dapat memantau semua kasus dalam sistem Anda dan menggali detail untuk menentukan mana yang membutuhkan perhatian. Anda dapat mengurutkan berdasarkan rentang waktu atau agen, mengirim pesan pemeriksaan status otomatis, atau mencari kasus dengan tag tertentu, apa pun yang diperlukan untuk mengelola kasus Anda.

## Webinar

Jika Anda ingin melihat panduan yang lebih mendalam tentang sistem manajemen kasus dan bagaimana ia terintegrasi dengan platform SeaX, silakan tonton webinar kami tentang topik tersebut:

<iframe width="85%" height="450px" src="https://www.youtube.com/embed/yf1REVZtRa8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

Terima kasih telah meluangkan waktu untuk membaca tentang bagaimana Sistem Manajemen Kasus SeaX mendukung agen Anda saat mereka berinteraksi dengan pelanggan Anda. Harap nantikan postingan blog kami berikutnya, yang akan membahas proses pengiriman pesan SMS massal menggunakan platform SeaX. Jika Anda tertarik untuk mempelajari lebih lanjut segera, isi [formulir Pesan Demo](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting) kami untuk melihat langsung platform SeaX.`;export{a as default};

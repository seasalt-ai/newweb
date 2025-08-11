const a=`---
title: "SeaX Bulk SMS: Untuk Jangkauan Pelanggan yang Lebih Cepat dan Efektif"
metatitle: "SeaX Bulk SMS: Untuk Jangkauan Pelanggan yang Lebih Cepat da..."
date: 2022-09-09 11:05:22-07:00
modified_date: 2025-07-28 00:00:00+00:00
draft: false
author: Amy Chen, Kim Dodds, Sarah Reid
description: "Dalam blog ini, kami akan menunjukkan bagaimana fitur Bulk SMS SeaX memungkinkan agen untuk secara proaktif mengirim pesan keluar melalui teks."
weight: 1
tags:
  - SeaX
image: images/blog/24-seax-bulk-sms/thumbnail.png
canonicalURL: /blog/seax-bulk-sms/
url: /blog/seax-bulk-sms/
---


*Dalam postingan blog kami sebelumnya, kami telah membahas beberapa fitur utama SeaX (termasuk [Voice Intelligence](https://seasalt.ai/blog/21-seax-voice-intelligence/), [Knowledge Base](https://seasalt.ai/blog/22-seax-knowledge-base/), dan [Case Management](https://seasalt.ai/blog/23-seax-case-management/)) yang membantu agen untuk menangani panggilan dan pesan masuk dengan lebih baik. Dalam blog ini, kami akan menunjukkan bagaimana fitur Bulk SMS SeaX memungkinkan agen untuk secara proaktif mengirim pesan keluar melalui teks, yang terbukti dibuka oleh penerima lebih cepat dan lebih konsisten daripada komunikasi email tradisional.*

# Daftar Isi
- [SMS vs Email](#sms-vs-email)
- [Standar 10DLC](#10dlc-standards)
- [SeaX Bulk SMS](#seax-bulk-sms)
    - [Unggah Kontak](#contact-upload)
    - [Komposisi Pesan](#message-composition)
    - [Estimasi Biaya](#cost-estimate)
    - [Pratinjau Pesan Massal](#bulk-message-preview)
    - [Pemantauan Kemajuan Kampanye](#campaign-progress-monitoring)
    - [Obrolan Pesan Masuk](#incoming-message-chat)
- [Penutup](#closing)

# SMS vs Email

Email cenderung menjadi mode komunikasi de facto untuk sebagian besar operasi bisnis. Sampai saat ini, pesan teks (SMS) bukanlah saluran komunikasi yang banyak digunakan untuk pesan bisnis massal, meskipun popularitasnya untuk komunikasi interpersonal sehari-hari. Namun, dalam beberapa tahun terakhir, penyedia komunikasi cloud seperti Twilio telah membuat saluran SMS jauh lebih mudah diakses oleh bisnis dengan menangani seluk-beluk infrastruktur telekomunikasi dan penyedia layanan di backend, dan menyediakan API SMS sederhana sebagai layanan kepada klien. Meskipun email mungkin tetap menjadi saluran paling populer untuk bisnis, SMS dapat memberikan pelengkap unik untuk komunikasi email tradisional.

<center>
<img src="/images/blog/24-seax-bulk-sms/1-pros-cons.png" alt="Beberapa Kelebihan dan Kekurangan SMS untuk komunikasi bisnis."/>

*Beberapa Kelebihan dan Kekurangan SMS untuk komunikasi bisnis.*
</center>

Tetapi mengapa menggunakan SMS sama sekali jika email terbukti berhasil? Jika kita mengambil kampanye pemasaran sebagai contoh, jawaban singkatnya adalah: sementara tingkat pembukaan untuk kampanye email hanya 20%, tingkat pembukaan rata-rata untuk SMS bisa mencapai *98%* - belum lagi pesan teks cenderung mendapatkan lebih banyak respons. Selain itu, pesan teks biasanya dibuka dalam waktu 90 detik setelah diterima, sementara email cenderung dibuka sekitar 90 menit. Terakhir, SMS memiliki tingkat klik-tayang rata-rata sekitar 19%, jauh lebih tinggi dari 3,2% untuk email ([sumber](https://manychat.com/blog/sms-vs-email-marketing-2021/)).

Secara umum, pesan teks dibuka lebih cepat dan lebih sering daripada email - mungkin karena teks selalu dikirim langsung ke penerima di mana pun mereka berada, apakah mereka memiliki wifi atau tidak. Juga karena SMS biasanya digunakan untuk pesan pribadi, dan lebih jarang untuk komunikasi bisnis, penerima mungkin menganggap teks lebih penting atau substansial daripada email.

Jadi mengapa tidak semua orang menggunakan SMS sama sekali? Tentu saja ada pro dan kontra. Secara alami, SMS jauh lebih mahal daripada email karena mengandalkan infrastruktur telekomunikasi dan penyedia layanan (seperti Verizon, AT&T, dll.) untuk mengirimkan pesan. Selain itu, pesan teks memiliki batas keras sekitar 900 karakter dan satu lampiran (yang tentu saja dikenakan biaya tambahan). Jadi secara keseluruhan, meskipun SMS mungkin merupakan metode komunikasi yang jauh lebih efektif, kekurangannya adalah bisnis harus lebih selektif terhadap konten yang mereka kirim untuk memastikan efektivitas biaya.

Meski begitu, tidak ada alasan mengapa SMS dan email tidak boleh digunakan bersama! Setiap saluran memiliki pro dan kontranya sendiri, jadi bisnis dapat memastikan mereka mengirimkan komunikasi yang paling efektif dengan memanfaatkan keunggulan masing-masing saluran.

# Standar 10DLC

Untuk pesan SMS A2P (aplikasi-ke-orang) bervolume tinggi, operator AS menggunakan kode panjang 10 digit standar, atau 10DLC. Sebelum memulai kampanye SMS massal, kami menyarankan Anda untuk membaca lebih lanjut tentang 10DLC dan aplikasinya [di sini](https://support.twilio.com/hc/en-us/articles/1260800720410-What-is-A2P-10DLC-).

# SeaX Bulk SMS

Layanan Bulk SMS SeaX memungkinkan Anda untuk dengan mudah mengunggah kontak/prospek Anda, mengirim SMS (kami juga mendukung MMS - Pesan Multimedia) secara massal, dan mengelola respons masuk. Baca terus untuk melihat beberapa langkah sederhana untuk memulai kampanye SMS massal pertama Anda.

## Unggah Kontak

<center>
<img src="/images/blog/24-seax-bulk-sms/2-contact-upload.png" alt="Mengunggah daftar kontak ke SeaX Bulk SMS."/>

*Mengunggah daftar kontak ke SeaX Bulk SMS.*
</center>

Langkah pertama adalah mengunggah kontak dan prospek. Pertama, atur kontak untuk kampanye SMS Anda dalam file csv. Selain bidang yang wajib diisi, \`phone_number\` dan \`name\`, Anda dapat menambahkan bidang lain dan menggunakannya di badan pesan. Misalnya, Anda dapat secara dinamis mengubah badan pesan untuk menyertakan nama penerima berdasarkan bidang \`name\` untuk setiap kontak. 

Selanjutnya, cukup buka layanan Bulk SMS di bawah SeaX dan tekan “Import” untuk mengunggah kontak Anda. Kami menyimpan semua kontak Anda sebelumnya di daftar penerima sehingga Anda dapat dengan mudah meluncurkan kampanye tindak lanjut.

## Komposisi Pesan

<center>
<img src="/images/blog/24-seax-bulk-sms/3-message-draft.png" alt="Menyusun pesan SMS baru dengan SeaX Bulk SMS."/>

*Menyusun pesan SMS baru.*
</center>

Langkah selanjutnya adalah memberi nama kampanye Anda dan menyusun pesan. Bulk SMS memungkinkan Anda mengakses semua informasi kontak yang tersimpan di file csv/excel Anda. Misalnya, jika Anda memiliki bidang bernama \`name\` di daftar kontak, Anda dapat mengetik \`{name}\` di pesan dan pesan akan secara otomatis menampilkan nama untuk setiap kontak di badan pesan.

## Estimasi Biaya

<center>
<img src="/images/blog/24-seax-bulk-sms/4-cost-estimate.png" alt="Memilih nomor telepon pengirim dan mendapatkan estimasi biaya kampanye dengan SeaX Bulk SMS."/>

*Memilih nomor telepon pengirim dan mendapatkan estimasi biaya kampanye.*
</center>

Selanjutnya, pilih nomor telepon yang ingin Anda gunakan untuk mengirim pesan keluar. Jika Anda belum memiliki nomor telepon, Anda dapat mengklik “Quote for a New Number” di sudut kanan atas untuk mengirimkan permintaan pembelian. Tim kami dapat membantu Anda membeli nomor 10DLC baru. 

Anda juga dapat melihat pratinjau perkiraan harga satuan untuk kampanye. Perlu diketahui bahwa pengiriman dan penerimaan SMS/MMS dikenakan biaya, jadi pastikan Anda menganggarkan sesuai. 

## Pratinjau Pesan Massal 

<center>
<img src="/images/blog/24-seax-bulk-sms/5-preview.png" alt="Melihat pratinjau kampanye Bulk SMS sebelum mengirim dengan SeaX."/>

*Melihat pratinjau kampanye Bulk SMS sebelum mengirim.*
</center>

Anda dapat melihat pratinjau pesan massal sebelum mengirim. Sangat penting untuk mengonfirmasi badan pesan, nomor telepon penerima, dan nomor telepon pengirim. Setelah Anda meluncurkan kampanye, tidak mungkin untuk menarik kembali pesan. Di halaman ini, Anda dapat melihat pratinjau 3 pesan pertama dalam kampanye Anda, yang sesuai dengan 3 kontak pertama dari daftar Anda. 

## Pemantauan Kemajuan Kampanye

<center>
<img src="/images/blog/24-seax-bulk-sms/6-monitor.png" alt="Memantau kemajuan kampanye Bulk SMS dengan SeaX."/>

*Memantau kemajuan kampanye Bulk SMS.*
</center>

Akhirnya, Anda dapat bersantai dan memantau kemajuan kampanye di dasbor Bulk SMS. Halaman secara otomatis menyegarkan dan memperbarui status kampanye. Anda dapat melihat status pengiriman pesan, tingkat keberhasilan/pengiriman, perkiraan biaya, serta tingkat respons di halaman ini. 

## Obrolan Pesan Masuk

<center>
<img src="/images/blog/24-seax-bulk-sms/7-chat.png" alt="Menangani respons masuk dari kampanye SMS massal dengan SeaX."/>

*Menangani respons masuk dari kampanye SMS massal.*
</center>

Sama seperti semua fitur SeaX, kami berusaha memberdayakan agen atau manajer kampanye untuk menangani permintaan/masalah masuk - Bulk SMS juga memungkinkan SeaX untuk menangani upaya pemasaran keluar. Setelah Anda meluncurkan kampanye, Anda dapat mengelola semua respons masuk di jendela obrolan yang ditunjukkan di bawah ini. 

# Penutup

Terima kasih telah meluangkan waktu untuk membaca tentang bagaimana Sistem Bulk SMS SeaX memberdayakan agen untuk mengirim komunikasi keluar selain menangani permintaan pesan masuk. Nantikan segmen berikutnya dalam seri blog kami, yang akan membahas beberapa alat manajemen dan analitik yang dibangun ke dalam platform SeaX. Jika Anda tertarik untuk mempelajari lebih lanjut segera, isi [formulir Pesan Demo](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting) kami untuk melihat langsung platform SeaX.`;export{a as default};

---
title: "Dari Demo ke Sukses: Persepsi Rapat (4/5)"
metatitle: "Dari Demo ke Sukses (4/5): Persepsi Rapat"
date: 2021-08-28T12:26:00-07:00
modified_date: 2025-07-27T00:00:00Z
author: Kim Dodds
image: "images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/SeaMeet animation.gif"
draft: false
description: "Di bagian keempat dari seri blog ini, ikuti perjalanan Seasalt.ai dalam menciptakan SeaMeet, solusi rapat modern kolaboratif kami."
tags: ["SeaMeet"]
weight: 1  
canonicalURL: "/blog/seameet-voice-summarization-topic-abstraction"
url: "/blog/seameet-voice-summarization-topic-abstraction"
aliases:
    - /blog/6-seameet-voice-intelligence-meeting-transcription-summarization-topic-abstraction-action-extraction/
---

*Sepanjang seri blog ini, ikuti perjalanan Seasalt.ai dalam menciptakan Pengalaman Rapat Modern yang menyeluruh, dimulai dari awal yang sederhana, hingga mengoptimalkan layanan kami pada perangkat keras dan model yang berbeda, hingga mengintegrasikan sistem NLP canggih dan akhirnya berakhir pada realisasi penuh SeaMeet, solusi rapat modern kolaboratif kami.*

## Di Luar Transkripsi

Semua hambatan sebelumnya yang kami hadapi mengajarkan kami pelajaran penting: bahwa kami dapat melakukan semua ini dengan lebih baik sendiri.
Jadi, kru di Seasalt.ai mulai melatih model akustik dan bahasa kami sendiri untuk menyaingi kemampuan transkriber percakapan Azure.
Microsoft menyajikan presentasi yang luar biasa di MS Build 2019, menampilkan Azure Speech Services sebagai produk yang sangat mumpuni namun sangat mudah diakses.
Setelah terkesima, kami terpaksa bertanya, ke mana kita akan pergi dari sini?
Bagaimana kita bisa memperluas produk yang sudah instrumental ini? Rapat Modern menunjukkan potensi speech to text yang kuat, tetapi di situlah batasnya.
Kami tahu Azure dapat mendengarkan kami, tetapi bagaimana jika kami dapat membuatnya *berpikir* untuk kami?
Dengan hanya transkripsi, meskipun produknya mengesankan, aplikasinya agak terbatas.

Dengan mengintegrasikan teknologi speech-to-text yang ada dengan sistem yang dapat menghasilkan wawasan dari transkripsi, kami dapat menghadirkan produk yang melebihi harapan dan mengantisipasi kebutuhan pengguna.
Kami memutuskan untuk menggabungkan tiga sistem untuk meningkatkan nilai keseluruhan transkripsi SeaMeet kami: ringkasan, abstraksi topik, dan ekstraksi item tindakan.
Masing-masing dipilih untuk mengurangi masalah pengguna tertentu.

Untuk mendemonstrasikan, kami akan menunjukkan hasil menjalankan sistem ringkasan, topik, dan tindakan pada transkripsi singkat berikut:

```
Kim: "Terima kasih, Xuchen Anda dibisukan karena banyak orang di panggilan ini. Tekan Bintang 6 untuk mengaktifkan suara."

Xuchen: "Oke, saya pikir itu hanya penerimaan yang buruk.",

Kim: "Ya.",

Sam: "Saya baru saja mengirimkan file terpisah dengan data ucapan untuk hari Selasa sampai 30 hari. Kalian seharusnya memiliki beberapa versi yang diperbarui.",

Kim: "Jadi pasti akan ada kasus-kasus ekstrem di mana ini tidak berfungsi. Saya sudah menemukan beberapa seperti dalam contoh ini. Ini mengambil seperti dari kata kerja di sana dan mengatakan pembicara adalah penerima tugas padahal sebenarnya Carol lebih merupakan penerima tugas di sana. tetapi polanya sama dengan sesuatu seperti yang kedua di mana Anda benar-benar ingin saya menjadi penerima tugas karena mereka tidak menugaskan Jason, mereka menugaskan diri mereka sendiri untuk memberi tahu Jason.",

Sam: "Mengerti.",

Xuchen: "Jadi kelemahan dari ini adalah Anda harus menulis aturan untuk itu. Ya, keuntungannya adalah ini adalah model yang sudah terlatih. Anda dapat melatihnya lebih lanjut tetapi kami tidak perlu membuang banyak data untuk ini.",

Kim: "Meskipun itu tidak melakukan klasifikasi yang akan memberi kita Apakah ini tindakan atau ini yang lain?",

Xuchen: "Jadi, jadi triknya di sini adalah kita ingin kata kerja bantu hadir, tetapi juga kita juga ingin beberapa nama orang.",

Sam: "Benar, kalau tidak mungkin karena.",

Xuchen: "Ya, jika ada kalimat dengan Anda tahu ada banyak contoh dengan kata-kata yang jelas. Namun, tidak banyak dari mereka yang akan membantu tindakan."
```

## Ringkasan

<center>
<img src="/images/blog/6-seameet-voice-intelligence-meeting-transcription-summarization-topic-abstraction-action-extraction/summarization.png" alt="Antarmuka SeaMeet Seasalt.ai, menampilkan ucapan pengguna dengan ringkasan singkatnya"/>

*Ikhtisar antarmuka SeaMeet kami, menampilkan ucapan pengguna dengan ringkasan singkatnya di sebelah kiri*
</center>

Meskipun menavigasi transkripsi teks tentu lebih mudah daripada menggali berjam-jam audio yang direkam, untuk rapat yang sangat panjang, masih bisa memakan waktu untuk menemukan konten tertentu atau mendapatkan gambaran umum percakapan secara keseluruhan.
Kami memilih untuk menyediakan dua jenis ringkasan selain transkripsi lengkap.

Ringkasan pada tingkat ucapan individu memberikan segmen yang lebih ringkas dan mudah dibaca.
Selain itu, ringkasan singkat membantu menormalkan teks dengan menghapus segmen yang kosong secara semantik dan melakukan resolusi anaphora & co-reference.
Kami kemudian dapat memasukkan segmen yang diringkas ke dalam aplikasi hilir (seperti abstraksi topik) untuk meningkatkan hasil akhir.

Selain ringkasan singkat, kami juga memilih untuk menyediakan satu ringkasan panjang yang bertujuan untuk membuat gambaran umum yang sangat umum dari seluruh rapat.
Ringkasan ini berfungsi seperti abstrak untuk rapat, hanya mencakup poin-poin pembicaraan utama dan kesimpulan.

Berikut adalah contoh ringkasan singkat, di mana kami memasukkan setiap segmen dalam transkripsi asli melalui perangkum:

```
Kim: "Xuchen dibisukan karena banyak orang di panggilan itu."

Xuchen: "Itu hanya penerimaan yang buruk."

Sam: "Saya mengirimkan file terpisah dengan data ucapan untuk hari Selasa hingga 30 hari."

Kim: "Akan ada kasus-kasus ekstrem di mana ini tidak berfungsi."

Xuchen: "Kelemahan melatih model yang sudah terlatih adalah Anda harus menulis aturan untuk itu."

Kim: "Klasifikasi tidak melakukan klasifikasi yang akan memberi mereka tindakan."

Xuchen: "Triknya di sini adalah mereka ingin kata kerja bantu hadir, tetapi juga mereka juga ingin beberapa nama orang."

Xuchen: "Jika ada kalimat dengan kata-kata, tidak banyak dari mereka yang akan membantu tindakan."
```

Dan contoh ini menunjukkan seluruh rapat diringkas menjadi satu paragraf:

```
“Xuchen dibisukan karena banyak orang di panggilan itu. Sam mengirimkan file terpisah dengan data ucapan untuk hari Selasa hingga 30 hari. Xuchen telah menemukan beberapa kasus ekstrem di mana pembicara adalah penerima tugas.”
```

Inti dari kedua komponen ringkasan pendek dan panjang adalah model ringkasan berbasis transformer.
Kami menyempurnakan model pada dataset dialog untuk ringkasan abstraktif.
Data berisi kutipan teks dengan berbagai panjang, masing-masing dipasangkan dengan ringkasan tulisan tangan.
Untuk ringkasan multibahasa, kami menggunakan paradigma yang sama, tetapi menggunakan model dasar multibahasa yang disempurnakan pada versi terjemahan dari dataset.
Dari antarmuka SeaMeet, pengguna juga memiliki opsi untuk memverifikasi ringkasan yang dihasilkan mesin, atau memberikan ringkasan mereka sendiri.
Kami kemudian dapat mengumpulkan ringkasan yang dimasukkan pengguna ini dan menambahkannya kembali ke set pelatihan kami untuk terus meningkatkan model kami.

## Abstraksi Topik

<center>
<img src="/images/blog/6-seameet-voice-intelligence-meeting-transcription-summarization-topic-abstraction-action-extraction/topics.png" alt="Mesin ekstraksi topik SeaMeet mengekstrak topik dari rapat"/>

*Antarmuka SeaMeet, berfokus pada tab ‘Topik’ di sisi kanan*
</center>

Masalah lain saat berurusan dengan koleksi transkripsi yang besar adalah mengorganisir, mengkategorikan, dan mencarinya.
Dengan secara otomatis mengabstraksi kata kunci dan topik dari transkripsi, kami dapat memberikan pengguna cara yang mudah untuk melacak rapat tertentu, atau bahkan bagian tertentu dari rapat di mana topik yang relevan sedang dibahas.
Selain itu, topik-topik ini berfungsi sebagai metode lain untuk meringkas informasi terpenting dan paling berkesan dalam transkripsi.

Berikut adalah contoh kata kunci yang akan diekstraksi dari transkripsi sampel:

```
kata kerja bantu
pembicara
data ucapan
file terpisah
versi yang diperbarui
nama orang
model terlatih
tulis aturan
```

Tugas ekstraksi topik menggunakan kombinasi pendekatan abstraktif dan ekstraktif.
Abstraktif mengacu pada pendekatan klasifikasi teks, di mana setiap input diklasifikasikan ke dalam seperangkat label yang terlihat selama pelatihan.
Untuk metode ini kami menggunakan arsitektur saraf yang dilatih pada dokumen yang dipasangkan dengan daftar topik yang relevan.
Ekstraktif mengacu pada pendekatan pencarian frasa kunci di mana frasa kunci yang relevan diekstraksi dari teks yang disediakan dan dikembalikan sebagai topik.
Untuk pendekatan ini, kami menggunakan kombinasi metrik kesamaan seperti kesamaan kosinus & TF-IDF selain informasi ko-occurrence kata untuk mengekstrak kata kunci dan frasa yang paling relevan.

Teknik abstraktif dan ekstraktif keduanya memiliki pro dan kontra, tetapi dengan menggunakannya bersama-sama kita dapat memanfaatkan kekuatan masing-masing.
Model abstraktif sangat baik dalam mengumpulkan detail yang berbeda, tetapi terkait dan menemukan topik yang sedikit lebih umum yang sesuai untuk semuanya.
Namun, ia tidak pernah dapat memprediksi topik yang belum pernah dilihatnya selama pelatihan, dan tidak mungkin untuk melatih setiap topik yang mungkin muncul dalam percakapan!
Model ekstraktif, di sisi lain, dapat menarik kata kunci dan topik langsung dari teks, yang berarti bahwa ia tidak tergantung pada domain, dan dapat mengekstrak topik yang belum pernah dilihat sebelumnya.
Kekurangan dari pendekatan ini adalah bahwa kadang-kadang topik terlalu mirip atau terlalu spesifik.
Dengan menggunakan keduanya, kami telah menemukan titik tengah yang bahagia antara yang dapat digeneralisasi dan yang spesifik domain.

## Ekstraksi Item Tindakan

<center>
<img src="/images/blog/6-seameet-voice-intelligence-meeting-transcription-summarization-topic-abstraction-action-extraction/actions.png" alt="Mesin ekstraksi tindakan SeaMeet membuat ringkasan abstraktif singkat dari item tindakan yang diekstraksi dari transkripsi rapat"/>

*UI SeaMeet, berfokus pada tab ‘Tindakan’ di sisi kanan*
</center>

Masalah terakhir yang ingin kami atasi untuk pengguna adalah tugas merekam item tindakan.
Merekam item tindakan adalah tugas yang sangat umum yang ditugaskan kepada karyawan untuk dilakukan selama rapat.
Mencatat ‘siapa yang memberi tahu siapa untuk melakukan apa kapan’ bisa sangat memakan waktu, dan dapat menyebabkan penulis terganggu dan tidak dapat berpartisipasi penuh dalam rapat.
Dengan mengotomatiskan proses ini, kami berharap dapat mengurangi sebagian tanggung jawab tersebut dari pengguna sehingga setiap orang dapat mencurahkan perhatian penuh mereka untuk berpartisipasi dalam rapat.

Berikut adalah contoh beberapa item tindakan yang dapat diekstraksi dari transkripsi contoh:

```
saran: "Sam mengatakan tim harus memiliki beberapa versi yang diperbarui."

pernyataan: "Kim mengatakan pasti akan ada kasus-kasus ekstrem di mana ini tidak berfungsi."

imperatif: "Xuchen mengatakan seseorang harus menulis aturan untuk itu."

desire: "Xuchen mengatakan tim ingin kata kerja bantu hadir, tetapi juga ingin beberapa nama orang."
```

Tujuan dari sistem Ekstraktor Tindakan adalah untuk membuat ringkasan abstraktif singkat dari item tindakan yang diekstraksi dari transkripsi rapat.
Hasil menjalankan Ekstraktor Tindakan di atas transkripsi rapat adalah daftar perintah, saran, pernyataan niat, dan segmen yang dapat ditindaklanjuti lainnya yang dapat disajikan sebagai to-do atau tindak lanjut untuk peserta rapat.
Di masa depan, ekstraktor juga akan menangkap nama-nama penerima tugas & pemberi tugas serta tanggal jatuh tempo yang terkait dengan setiap item tindakan.

Pipeline ekstraksi tindakan memiliki dua komponen utama: pengklasifikasi dan perangkum.
Pertama, setiap segmen dilewatkan ke pengklasifikasi multi-kelas dan menerima salah satu label berikut:

- Pertanyaan
- Imperatif
- Saran
- Keinginan
- Pernyataan
- Tidak dapat ditindaklanjuti

Jika segmen menerima label selain ‘tidak dapat ditindaklanjuti’, segmen tersebut dikirim ke komponen ringkasan bersama dengan dua segmen sebelumnya dalam transkripsi, yang memberikan lebih banyak konteks untuk ringkasan.
Langkah ringkasan pada dasarnya sama dengan komponen ringkasan mandiri, namun model dilatih pada dataset khusus yang dibangun khusus untuk meringkas item tindakan dengan format output yang diinginkan.

## SeaMeet Mendapatkan Otak

Ini telah menjadi langkah besar menuju penciptaan produk unik kami sendiri: melatih model ringkasan ditambah topik dan ekstraksi tindakan untuk membawa produk kami lebih jauh, dan merancang antarmuka yang indah untuk mengikat semuanya dalam paket yang menakjubkan.
Ini adalah cerita sejauh ini, awal perjalanan Seasalt.ai untuk menghadirkan solusi bisnis terbaik ke pasar yang berkembang pesat dan mengirimkannya ke dunia, SeaMeet: Masa Depan Rapat Modern.

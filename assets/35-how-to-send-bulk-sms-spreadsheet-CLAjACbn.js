const a=`---
title: "Cara Benar Mengirim SMS Massal ke Kontak di Excel, Google Sheets, dan Apple Numbers"
metatitle: "Kirim SMS Massal | Excel, Google Sheets, Apple Numbers"
date: 2023-10-01 10:25:00-08:00
modified_date: 2024-07-01 00:00:00+00:00
draft: false
author: Xuchen Yao
description: "Pelajari cara paling aman mengirim SMS massal dari Excel, Google Sheets, dan Apple Numbers dengan tetap patuh pada 10DLC."
weight: 1
tags:
  - SeaX
  - Tutorial
image: images/blog/35-how-to-send-bulk-sms-spreadsheet/35-how-to-send-bulk-sms-spreadsheet.jpg
canonicalURL: /blog/how-to-send-bulk-sms-spreadsheet/
url: /blog/how-to-send-bulk-sms-spreadsheet/
---

Mengirim SMS massal ke daftar kontak adalah teknik yang banyak digunakan oleh bisnis, penyelenggara acara, dan profesional. Kemampuan mengirim pesan secara serentak menghemat waktu dan membantu menjaga komunikasi. Walaupun Excel, Google Sheets, dan Apple Numbers tidak dirancang khusus untuk SMS, banyak ekstensi dan layanan pihak ketiga yang dapat digunakan. Namun, ada beberapa hal penting yang harus diperhatikan.

# Patuhi Regulasi: Registrasi 10DLC

Dunia SMS massal kini lebih kompleks dengan adanya regulasi baru untuk memerangi spam dan pesan tidak diinginkan. Jika Anda hanya ingin mengirim sekali dan tidak khawatir soal regulasi, Anda bisa mengikuti tutorial online. Namun, untuk bisnis berkelanjutan, Anda harus memahami aturan SMS marketing.

Inti dari regulasi ini adalah sistem 10DLC.

10DLC adalah singkatan dari 10-Digit Long Code, standar baru untuk SMS A2P (Application-to-Person) di AS. Poin penting:
- Tujuan: Karena meningkatnya spam, operator menerapkan regulasi ketat untuk penggunaan 10DLC dalam pengiriman massal.
- Kepatuhan Bisnis: Bisnis yang ingin mengirim SMS massal harus mendaftarkan dan mendapatkan persetujuan 10DLC.
- Risiko Ketidakpatuhan: Mengirim SMS tanpa registrasi atau persetujuan 10DLC dapat menyebabkan pemblokiran atau sanksi lain.

[Artikel ini](https://support.twilio.com/hc/en-us/articles/1260800720410-What-is-A2P-10DLC-) menjelaskan cara registrasi kampanye 10DLC. Seasalt.ai telah membantu banyak pelanggan SeaX Messaging untuk patuh pada 10DLC. Ada pertanyaan? Hubungi kami.

# Siapkan Kontak Anda di Spreadsheet

Setelah kampanye 10DLC Anda aktif, Anda bisa mulai mengirim SMS massal tanpa takut diblokir.

Misal, Anda punya daftar kontak di spreadsheet dan ingin mengirim SMS untuk sebuah acara. Pertama, bersihkan dan standarisasi nomor telepon.

## 1. Buat Cadangan Data

Selalu buat salinan sebelum mengedit: **File > Make a copy**.

<center>
<img src="/images/blog/35-how-to-send-bulk-sms-spreadsheet/1-make-a-copy-for-bulk-sms-contact-spreadsheet.png" alt="Buat cadangan spreadsheet kontak"/>
_Buat cadangan spreadsheet kontak_
</center>

## 2. Hapus Data Duplikat

a. Sorot seluruh data.
b. Klik Data > Data cleanup > Remove duplicates.
c. Pilih kolom yang ingin dicek, lalu klik Remove duplicates.
d. Google Sheets akan memberi tahu berapa duplikat yang dihapus.

<center>
<img src="/images/blog/35-how-to-send-bulk-sms-spreadsheet/2-remove-duplicates-for-bulk-sms-contact-spreadsheet.png" alt="Hapus duplikat pada spreadsheet kontak"/>
_Hapus duplikat pada spreadsheet kontak_
</center>

## 3. Standarisasi Format Nomor Telepon

a. Pilih format yang konsisten. SeaX Messaging menerima 5551234567, 555-123-4567, atau +15551234567.
b. Gunakan Find and Replace untuk menyamakan format (misal, ganti titik dengan tanda hubung).
c. Gunakan formula atau skrip jika perlu.

<center>
<img src="/images/blog/35-how-to-send-bulk-sms-spreadsheet/3-clean-numbers-for-bulk-sms-contact-spreadsheet.png" alt="Standarisasi nomor telepon pada spreadsheet kontak"/>
_Standarisasi nomor telepon_
</center>

### 4. Validasi Data

a. Pastikan semua nomor memiliki digit yang benar. Filter atau urutkan data untuk menemukan kesalahan.
b. Periksa nama agar tidak kosong atau salah.

<center>
<img height="500" src="/images/blog/35-how-to-send-bulk-sms-spreadsheet/4-validate-format-for-bulk-sms-contact-spreadsheet.jpeg" alt="Validasi data pada spreadsheet kontak"/>
_Validasi data pada spreadsheet kontak_
</center>

## 5. Cek Sel Kosong

Langkah ini opsional. Di SeaX Messaging, baris kosong otomatis dilewati. Namun, sebaiknya tetap cek dan perbaiki sel kosong dengan Conditional formatting.

<center>
<img height="500" src="/images/blog/35-how-to-send-bulk-sms-spreadsheet/5-clean-blank-cells-for-bulk-sms-contact-spreadsheet.png" alt="Cek sel kosong pada spreadsheet kontak"/>
_Cek sel kosong pada spreadsheet kontak_
</center>

## Tips Tambahan untuk Persiapan Data

Pembersihan data adalah proses berulang. Tergantung ukuran data, Anda mungkin perlu mengulangi langkah-langkah ini beberapa kali.

## Mulai Kirim SMS!

Excel atau Google Sheets tidak mendukung SMS secara default, tapi ada ekstensi dan layanan pihak ketiga seperti ClickSend dan Zapier.

Untuk SMS marketing profesional, gunakan platform khusus seperti SeaX Messaging. Platform ini menyediakan manajemen kontak, chat/call, pelacakan performa, dan dukungan registrasi 10DLC.

Beberapa penyedia layanan populer:
- SeaX Messaging
- Simple Texting
- Textedly

# Cara Menjalankan Operasi SMS Marketing yang Sukses

<center>
<img height="500" src="/images/blog/35-how-to-send-bulk-sms-spreadsheet/6-successful-camapign-bulk-sms-contact-spreadsheet.jpeg" alt="Sukses dalam SMS marketing"/>
</center>

Meski sudah berhati-hati, masalah bisa saja muncul. Untuk sukses jangka panjang:
- Selalu cek dan patuhi persyaratan 10DLC.
- Jaga kualitas pesan, hindari spam, dan sediakan opsi opt-out.
- Pilih layanan SMS terpercaya agar pengiriman lebih terjamin.

# Kesimpulan

Mengirim SMS massal dengan alat seperti Excel atau Google Sheets sangat efisien, tapi dengan regulasi baru, Anda harus lebih hati-hati. Dengan memahami 10DLC, Anda bisa mengirim SMS massal dengan lebih percaya diri.

## Hubungi Kami

Jika ingin tahu lebih lanjut tentang 10DLC atau opsi SMS marketing, [jadwalkan demo](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting) bersama kami. Kami siap membantu!
`;export{a as default};

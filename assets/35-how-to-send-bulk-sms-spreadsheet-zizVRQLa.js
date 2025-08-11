const a=`---
title: "Cara Betul Menghantar SMS Pukal kepada Kontak dalam Excel, Google Sheets, dan Apple Numbers"
metatitle: "SMS Pukal | Excel, Google Sheets, Apple Numbers"
date: 2023-10-01 10:25:00-08:00
modified_date: 2024-07-01 00:00:00+00:00
draft: false
author: Xuchen Yao
description: "Ketahui cara paling selamat untuk menghantar SMS pukal dari Excel, Google Sheets, dan Apple Numbers sambil mematuhi peraturan 10DLC."
weight: 1
tags:
  - SeaX
  - Tutorial
image: images/blog/35-how-to-send-bulk-sms-spreadsheet/35-how-to-send-bulk-sms-spreadsheet.jpg
canonicalURL: /blog/how-to-send-bulk-sms-spreadsheet/
url: /blog/how-to-send-bulk-sms-spreadsheet/
---

Menghantar SMS pukal kepada senarai kontak adalah teknik yang banyak digunakan oleh perniagaan, penganjur acara, dan pelbagai profesional. Keupayaan untuk menghantar mesej secara serentak dapat menjimatkan masa dan memastikan semua kontak sentiasa dimaklumkan. Walaupun Excel, Google Sheets, dan Apple Numbers tidak direka khusus untuk menghantar SMS, pelbagai sambungan dan perkhidmatan pihak ketiga telah memudahkan proses ini. Namun, terdapat beberapa risiko dan peraturan yang perlu diambil kira.

# Pematuhan Peraturan: Pendaftaran 10DLC

Dunia SMS pukal kini lebih kompleks dengan kemunculan peraturan baharu untuk membanteras spam dan mesej tidak diingini. Jika anda hanya ingin melakukannya sekali dan tidak bimbang tentang risiko peraturan, anda boleh menggunakan tutorial dalam talian yang mengajar cara menghantar SMS pukal menggunakan pemalam. Namun, jika anda ingin menjalankan perniagaan dan kempen pemasaran yang mampan, anda perlu memahami peraturan pemasaran SMS.

Inti utama peraturan ini ialah sistem 10DLC.

10DLC bermaksud 10-Digit Long Code, iaitu piawaian baharu untuk SMS A2P (Application-to-Person) di Amerika Syarikat. Poin penting:
- Tujuan: Disebabkan peningkatan spam dan mesej tidak diingini, syarikat telekomunikasi memperkenalkan peraturan ketat untuk penggunaan 10DLC dalam penghantaran pukal.
- Pematuhan Perniagaan: Perniagaan yang ingin menghantar SMS pukal mesti mendaftar 10DLC mereka dan mendapat kelulusan. Ini memastikan mereka mematuhi peraturan syarikat telekomunikasi.
- Risiko Ketidakpatuhan: Menghantar SMS tanpa pendaftaran atau kelulusan 10DLC boleh menyebabkan akaun disekat atau tindakan lain.

[Artikel ini](https://support.twilio.com/hc/en-us/articles/1260800720410-What-is-A2P-10DLC-) menerangkan cara mendaftar kempen 10DLC. Seasalt.ai telah membantu ramai pelanggan SeaX Messaging untuk mematuhi 10DLC. Jika ada soalan, sila hubungi kami.

# Sediakan Kontak Anda dalam Spreadsheet

Setelah kempen 10DLC anda disediakan, anda boleh mula menghantar SMS pukal tanpa bimbang akaun disekat.

Sebagai contoh, anda mempunyai senarai kontak dalam spreadsheet dan ingin menghantar SMS kepada semua untuk satu acara. Anda perlu membersihkan dan menstandardkan nombor telefon terlebih dahulu.

## 1. Buat Salinan Sandaran Data

Sentiasa buat salinan sebelum mengedit: **Fail > Buat salinan**.

<center>
<img src="/images/blog/35-how-to-send-bulk-sms-spreadsheet/1-make-a-copy-for-bulk-sms-contact-spreadsheet.png" alt="Buat salinan sandaran spreadsheet kontak SMS pukal"/>
_Buat salinan sandaran spreadsheet kontak SMS pukal_

## 2. Buang Data Duplikat

a. Pilih semua data
b. Klik Data > Pembersihan data > Buang duplikat
c. Pilih lajur yang ingin diperiksa, kemudian klik Buang duplikat
d. Google Sheets akan memaklumkan berapa banyak duplikat yang dibuang

<center>
<img src="/images/blog/35-how-to-send-bulk-sms-spreadsheet/2-remove-duplicates-for-bulk-sms-contact-spreadsheet.png" alt="Buang duplikat dalam spreadsheet kontak SMS pukal"/>
_Buang duplikat dalam spreadsheet kontak SMS pukal_

## 3. Standardkan Format Nombor Telefon

a. Pilih format yang konsisten. SeaX Messaging menerima pelbagai format seperti 5551234567, 555-123-4567, atau +15551234567.
b. Gunakan Cari dan Ganti untuk menyeragamkan format (contohnya, tukar titik kepada sengkang).
c. Gunakan formula atau skrip jika perlu.

<center>
<img src="/images/blog/35-how-to-send-bulk-sms-spreadsheet/3-clean-numbers-for-bulk-sms-contact-spreadsheet.png" alt="Standardkan format nombor telefon dalam spreadsheet kontak SMS pukal"/>
_Standardkan format nombor telefon dalam spreadsheet kontak SMS pukal_

### 4. Sahkan Data

a. Pastikan semua nombor mempunyai digit yang betul. Tapis atau susun data untuk mencari kesilapan.
b. Pastikan nama tidak kosong atau salah.

<center>
<img height="500" src="/images/blog/35-how-to-send-bulk-sms-spreadsheet/4-validate-format-for-bulk-sms-contact-spreadsheet.jpeg" alt="Sahkan data dalam spreadsheet kontak SMS pukal"/>
_Sahkan data dalam spreadsheet kontak SMS pukal_

## 5. Semak Sel Kosong

Langkah ini adalah pilihan. Dalam SeaX Messaging, baris dengan sel kosong akan dilangkau secara automatik. Namun, sebaiknya semak dan betulkan sel kosong menggunakan pemformatan bersyarat.

<center>
<img height="500" src="/images/blog/35-how-to-send-bulk-sms-spreadsheet/5-clean-blank-cells-for-bulk-sms-contact-spreadsheet.png" alt="Semak sel kosong dalam spreadsheet kontak SMS pukal"/>
_Semak sel kosong dalam spreadsheet kontak SMS pukal_

## Tip Tambahan untuk Penyediaan Data

Pembersihan data adalah proses berulang. Bergantung pada saiz dan kualiti data, anda mungkin perlu mengulangi langkah-langkah ini beberapa kali.

## Mula Hantar SMS!

Excel atau Google Sheets tidak menyokong SMS secara lalai, tetapi terdapat pelbagai sambungan dan perkhidmatan pihak ketiga seperti ClickSend dan Zapier.

Untuk pemasaran SMS profesional, gunakan platform khusus seperti SeaX Messaging. Platform ini menawarkan pengurusan kontak, chat/panggilan, penjejakan prestasi, dan sokongan pendaftaran 10DLC.

Beberapa penyedia perkhidmatan popular:
- SeaX Messaging
- Simple Texting
- Textedly

# Cara Menjalankan Operasi Pemasaran SMS yang Berjaya

<center>
<img height="500" src="/images/blog/35-how-to-send-bulk-sms-spreadsheet/6-successful-camapign-bulk-sms-contact-spreadsheet.jpeg" alt="Kejayaan pemasaran SMS"/>

Walaupun anda berhati-hati, masalah boleh berlaku. Untuk kejayaan jangka panjang:
- Sentiasa semak dan patuhi keperluan 10DLC
- Pastikan kualiti mesej, elakkan kandungan spam, dan sediakan pilihan keluar (opt-out)
- Pilih perkhidmatan SMS yang dipercayai untuk penghantaran yang lebih terjamin

# Kesimpulan

Menghantar SMS pukal menggunakan alat seperti Excel atau Google Sheets sangat berkesan, tetapi dengan peraturan baharu, anda perlu lebih berhati-hati. Dengan memahami 10DLC, anda boleh menghantar SMS pukal dengan lebih yakin dan berkesan.

## Hubungi Kami

Jika anda ingin tahu lebih lanjut tentang 10DLC atau pilihan pemasaran SMS, [tempah demo](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting) bersama kami. Kami sedia membantu anda!
`;export{a as default};

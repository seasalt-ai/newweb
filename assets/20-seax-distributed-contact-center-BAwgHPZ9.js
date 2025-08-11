const a=`---
title: "Perluas Jejak Pusat Kontak Anda dengan Pusat Kontak Terdistribusi"
metatitle: "Perluas Jejak Anda dengan Pusat Kontak Terdistribusi"
date: 2022-07-27 21:46:45+00:00
modified_date: 2025-07-28T16:56:53Z
draft: false
author: Sarah Reid
description: "Dalam blog ini, kita akan melihat pusat kontak 'terdistribusi': apa itu, bagaimana mereka dapat menguntungkan Anda, dan bagaimana SeaX menggunakannya untuk melayani klien kami dengan lebih baik."
weight: 1
tags:
  - SeaX
image: images/blog/20-seax-distributed-contact-center/0-main.png
canonicalURL: /blog/seax-distributed-contact-center/
url: /blog/seax-distributed-contact-center/
---

*Dalam postingan blog kami sebelumnya, [Bawa Pelanggan dari Saluran Mana Pun ke Satu Tempat dengan Komunikasi Omnichannel SeaX](https://seasalt.ai/blog/19-seax-omnichannel-communication/), kami menunjukkan kekuatan komunikasi omnichannel di platform SeaX, yang memungkinkan pesan pengguna dari hampir semua saluran untuk ditampilkan di platform SeaX. Dalam postingan ini, kita akan melihat pusat kontak "terdistribusi": apa itu, bagaimana mereka dapat menguntungkan Anda, dan bagaimana SeaX memanfaatkan platform terdistribusi untuk melayani klien kami dengan lebih baik.*

# Daftar Isi
- [Apa itu pusat kontak “terdistribusi”?](#apa-itu-pusat-kontak-terdistribusi)
- [Apa manfaat pusat kontak “terdistribusi”?](#apa-manfaat-pusat-kontak-terdistribusi)
- [Apa tantangan pusat kontak “terdistribusi”?](#apa-tantangan-pusat-kontak-terdistribusi)
- [Bagaimana SeaX memecahkan masalah ini?](#bagaimana-seax-memecahkan-masalah-ini)
    - [Merutekan Panggilan ke Lokasi dan Agen Terdistribusi](#merutekan-panggilan-ke-lokasi-dan-agen-terdistribusi)
    - [Mengonfigurasi Ketersediaan Lokasi Terdistribusi](#mengonfigurasi-ketersediaan-lokasi-terdistribusi)
    - [Menyesuaikan Pesan Lokasi Terdistribusi](#menyesuaikan-pesan-lokasi-terdistribusi)

# Apa itu pusat kontak “terdistribusi”?
Pada tingkat paling sederhana, pusat kontak terdistribusi adalah pusat kontak yang ada di lebih dari satu lokasi, tidak seperti pusat kontak satu lokasi tradisional. Ini bisa berupa pusat kontak dengan banyak kantor, atau banyak lokasi di berbagai negara, atau bahkan pusat kontak tanpa lokasi fisik di mana semua agen bekerja dari jarak jauh. Namun, pusat kontak terdistribusi masih perlu beroperasi seperti pusat kontak satu lokasi tradisional, memberikan pengalaman yang mulus bagi semua yang terlibat. Bagi agen, ini berarti didukung pada satu platform di mana pun mereka berada. Bagi pelanggan, ini berarti terhubung dengan benar ke lokasi dan agen yang sesuai berdasarkan kebutuhan mereka.

# Apa manfaat pusat kontak “terdistribusi”?
Pusat kontak terdistribusi memiliki sejumlah manfaat dibandingkan pusat kontak tradisional, terutama dalam hal jangkauan dan cakupannya. Memiliki agen di beberapa zona waktu memastikan bahwa pelanggan dapat menghubungi Anda kapan pun mereka membutuhkan bantuan. Dengan pusat kontak tradisional, pelanggan terbatas untuk menelepon selama satu set jam buka, sehingga lebih sulit bagi mereka untuk menghubungi bisnis Anda. Memiliki agen terdistribusi juga memberi bisnis Anda lebih banyak kesempatan untuk mempekerjakan orang dengan keterampilan dan spesialisasi yang beragam, seperti memiliki agen yang mencakup berbagai bahasa yang lebih luas. Pusat kontak tradisional di satu lokasi terbatas untuk mempekerjakan agen di lokasi tersebut, sehingga berisiko tidak dapat menemukan agen dengan keterampilan yang Anda butuhkan. Akhirnya, memiliki agen yang tersebar luas lebih dekat ke lebih banyak pelanggan Anda memungkinkan agen untuk memiliki pemahaman yang lebih dalam tentang aturan dan peraturan khusus di area tersebut. Di pusat kontak satu lokasi tradisional, agen mungkin tidak mengetahui detail spesifik tentang sesuatu seperti pengiriman di negara lain di dunia, sehingga lebih sulit untuk membantu pelanggan.


# Apa tantangan pusat kontak “terdistribusi”?
Meskipun sifat terdistribusi dari pusat kontak ini memiliki banyak manfaat bagi bisnis Anda, ada juga beberapa tantangan untuk pusat kontak terdistribusi. Memiliki agen di beberapa zona waktu memungkinkan komunikasi yang mudah dengan pelanggan setiap saat, tetapi juga berarti bahwa penting bagi panggilan untuk dirutekan dengan benar sehingga pelanggan tidak diarahkan ke lokasi yang saat ini tutup atau agen yang sedang tidak bertugas. Penting juga untuk mengirim pelanggan ke agen yang berbicara bahasa yang diminta pelanggan dan memiliki pelatihan yang benar untuk menangani masalah mereka. Dengan banyaknya agen di lokasi yang berbeda dengan keterampilan yang berbeda, tugas perutean ini dapat dengan cepat menjadi rumit.

<center>
<img src="/images/blog/20-seax-distributed-contact-center/1-feature-comparison.png" alt="Perbandingan fitur: pusat panggilan tradisional vs pusat kontak terdistribusi vs SeaX."/>

*Perbandingan fitur: pusat panggilan tradisional vs pusat kontak terdistribusi vs SeaX.*
</center>

# Bagaimana SeaX memecahkan masalah ini?

## Merutekan Panggilan ke Lokasi dan Agen Terdistribusi
SeaX adalah solusi pusat kontak kolaboratif yang lahir cloud-native dan terdistribusi. Ini dibangun di atas [Twilio Flex](https://www.twilio.com/flex) yang memanfaatkan platform komunikasi cloud Twilio. Twilio menyediakan blok bangunan dasar untuk SeaX, seperti infrastruktur telekomunikasi, perutean pesan & tugas, dan UI pusat kontak dasar. Dalam SeaX, Anda dapat mengonfigurasi beberapa nomor telepon untuk lokasi Anda yang berbeda, memungkinkan Anda untuk memiliki kode negara dan area yang sesuai untuk setiap area tempat pusat kontak Anda beroperasi. Oleh karena itu, Anda dapat mengonfigurasi pengaturan Anda berdasarkan lokasi, memastikan bahwa setiap lokasi beroperasi dengan benar dan menerima panggilan yang tepat, sambil tetap melayani semua agen Anda di platform yang sama.

[Twilio TaskRouter](https://www.twilio.com/taskrouter) menetapkan panggilan dan pesan ke agen berdasarkan atribut panggilan dan agen.

<center>
<img src="/images/blog/20-seax-distributed-contact-center/2-taskrouter.png" alt="Diagram arsitektur TaskRouter."/>

*Diagram arsitektur TaskRouter. [Sumber](https://twilio-cms-prod.s3.amazonaws.com/images/taskrouter-diagram.width-800.png).*
</center>

Ini juga memungkinkan Anda untuk menggunakan perutean berbasis keterampilan, memberi Anda kontrol yang terperinci tentang agen dan lokasi mana yang menerima panggilan mana. Anda tidak hanya dapat memberi label keterampilan yang dimiliki agen Anda, seperti tingkat pelatihan penjualan mereka, Anda juga dapat mencantumkan hal-hal seperti bahasa yang mereka gunakan, memastikan bahwa mereka hanya mendapatkan panggilan yang dapat mereka tangani. Selain itu, Anda dapat menggunakan perutean ini untuk menetapkan nomor telepon tertentu ke agen, mengikat setiap agen ke lokasi tertentu di pusat kontak Anda, bahkan jika mereka tidak secara fisik berada di sana. Agen hanya akan menerima panggilan yang dirutekan ke lokasi yang ditetapkan, memastikan bahwa panggilan pelanggan Anda selalu diarahkan ke orang yang tepat.

<center>
<img src="/images/blog/20-seax-distributed-contact-center/3-skills.png" alt="Keterampilan yang ditentukan di TaskRouter untuk merutekan panggilan dan pesan masuk."/>

*Keterampilan yang ditentukan di TaskRouter untuk merutekan panggilan dan pesan masuk.*
</center>

## Mengonfigurasi Ketersediaan Lokasi Terdistribusi
Di SeaX, Anda juga dapat mengonfigurasi jam buka dan hari libur Anda berdasarkan nomor telepon. Dengan alat ini, Anda dapat mengontrol secara independen kapan setiap lokasi Anda buka, memberi Anda fleksibilitas penuh mengenai kapan setiap lokasi Anda dapat dihubungi. Pada dasarnya, setiap lokasi Anda dapat beroperasi seperti pusat panggilan tradisional, dengan jam buka yang ditetapkan dan tutup pada hari libur lokal, sambil tetap dikonfigurasi dan terhubung dari satu platform umum untuk agen Anda beroperasi.

<center>
<img src="/images/blog/20-seax-distributed-contact-center/4-open-hours.png" alt="Jam operasional untuk dua nomor telepon berbeda di dua zona waktu berbeda pada instance SeaX yang sama."/>
</center>

<center>
<img src="/images/blog/20-seax-distributed-contact-center/5-open-hours.png" alt="Jam operasional untuk dua nomor telepon berbeda di dua zona waktu berbeda pada instance SeaX yang sama."/>

*Jam operasional untuk dua nomor telepon berbeda di dua zona waktu berbeda pada instance SeaX yang sama.*
</center>

## Menyesuaikan Pesan Lokasi Terdistribusi
SeaX juga memungkinkan pesan pelanggan tidak tersedia berdasarkan nomor telepon. Pesan tidak tersedia secara otomatis diputar ke pelanggan ketika tidak ada yang tersedia untuk menerima panggilan mereka. Dengan kemampuan untuk menyesuaikan pesan ini berdasarkan nomor telepon, Anda dapat memiliki pesan dalam bahasa yang berbeda atau berisi informasi yang berbeda tergantung pada apa yang paling penting untuk disampaikan kepada pelanggan yang menelepon lokasi tersebut.

<center>
<img src="/images/blog/20-seax-distributed-contact-center/6-unavailable-message.png" alt="Pesan tidak tersedia untuk nomor telepon tertentu di platform SeaX."/>

*Pesan tidak tersedia untuk nomor telepon tertentu di platform SeaX.*
</center>

Pusat kontak satu lokasi tradisional hanya dapat secara efektif melayani area di sekitarnya, meskipun secara alami berada di satu platform. Pusat kontak terdistribusi sangat memperluas basis pelanggan yang dapat dilayani dengan agen di berbagai lokasi, tetapi memiliki beberapa tantangan dalam mengintegrasikan semua layanan yang dibutuhkan agennya di mana pun mereka berada. Dengan SeaX, Anda bisa mendapatkan jangkauan ke setiap bagian basis pelanggan Anda, sambil tetap melayani semua agen Anda di satu platform yang mudah.

Terima kasih telah meluangkan waktu untuk membaca tentang bagaimana pusat kontak cloud SeaX mendukung pusat kontak terdistribusi Anda di satu platform. Nantikan postingan blog kami berikutnya, yang akan membahas lebih dalam tentang teknologi text-to-speech dan speech-to-text internal kami, dan bagaimana mereka dapat meningkatkan pusat kontak Anda. Jika Anda tertarik untuk mempelajari lebih lanjut segera, isi formulir "[Pesan Demo](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting)" kami untuk melihat langsung platform SeaX.
`;export{a as default};

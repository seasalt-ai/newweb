const a=`---
title: "Dari Demo ke Sukses: Jebakan Rapat Modern (2/5)"
metatitle: "Dari Demo ke Sukses (2/5): Jebakan Rapat Modern"
date: 2021-07-30
draft: false
author: Cody Kim
description: "Di bagian kedua dari seri blog ini, ikuti perjalanan Seasalt.ai dalam menciptakan SeaMeet, solusi rapat modern kolaboratif kami."
weight: 1
tags:
  - SeaMeet
image: images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/SeaMeet animation.gif
canonicalURL: /blog/seameet-voice-and-microsoft-modern-meetings/
url: /blog/seameet-voice-and-microsoft-modern-meetings/
---

*Sepanjang seri blog ini, ikuti perjalanan Seasalt.ai dalam menciptakan Pengalaman Rapat Modern yang menyeluruh, dimulai dari awal yang sederhana, hingga mengoptimalkan layanan kami pada perangkat keras dan model yang berbeda, hingga mengintegrasikan sistem NLP canggih dan akhirnya berakhir pada realisasi penuh SeaMeet, solusi rapat modern kolaboratif kami.*

## Jebakan Rapat Modern

Sepanjang pengembangan kami, kami menghadapi banyak hambatan tak terduga tanpa penyebab atau solusi yang jelas.

### Awal yang Cepat

Hambatan pertama adalah membuat alat kami berfungsi. Azure menyediakan sampel Rapat Modern yang kami senang kompatibel dengan Linux, tetapi kami menemukan bahwa menggunakan SDK di Windows untuk menjalankan demo jauh lebih mudah - yah, itu adalah produk Microsoft. Setelah banyak upaya yang gagal untuk membuat sampel yang disediakan berjalan di Linux, kami akhirnya harus meninggalkan jalur itu dan beralih ke Windows. Akhirnya kami memiliki transkriber ucapan yang berfungsi, yang merupakan awal yang luar biasa.

### Latensi

Salah satu masalah yang kami alami adalah penundaan sekitar lima detik dalam menerima hasil pengenalan kami di UI front end. Meskipun 5 detik mungkin tampak cukup cepat, penundaan ini terasa beberapa detik terlalu lambat untuk menjadi solusi yang nyaman dan praktis, terutama untuk komunikasi real-time.

<center>
<img src="/images/blog/4-seameet-voice-intelligence-meeting-transcription-pitfalls-of-microsoft-modern-meetings/default_ui.png" style="width:400px;" alt="UI default untuk transkripsi ucapan oleh Azure Speech SDK"/>

*UI default untuk transkripsi ucapan yang disediakan oleh Azure Speech SDK*
</center>

Latensi juga merupakan masalah serius di backend. Pada awal setiap rapat, hasilnya datang secara real-time (seperti yang diiklankan!) tetapi seiring berjalannya rapat, latensi akan melonjak secara berkala hingga tiga puluh detik sebelum teks muncul di monitor. Pada saat itu, apa pun yang dikatakan sudah lama menjadi tidak relevan dalam percakapan. Setelah tes yang tak terhitung jumlahnya, kami mulai memperhatikan bahwa latensi berubah sepanjang hari, yang kami kaitkan dengan beban server Azure saat itu. Kami bergerak di bidang menciptakan produk yang konsisten dan andal, jadi penundaan yang berfluktuasi dan tidak terduga ini tidak dapat diterima. Semakin banyak alasan untuk mengandalkan model dan server kami sendiri.

### Dialek

Salah satu alasan khusus mengapa kami menggunakan Azure Speech Service sejak awal adalah dukungan luas mereka terhadap berbagai bahasa dan dialek. Kami sangat antusias untuk memanfaatkan model Bahasa Inggris Singapura dari Azure Speech Service. Tetapi bayangkan kejutan kami ketika menemukan bahwa, untuk dialek Singapura, model Bahasa Inggris AS secara konsisten mengungguli model Bahasa Inggris Singapura. Selain itu, bahkan model terbaik pun tidak sesuai dengan tantangan dunia nyata.

<center>
<img src="/images/blog/4-seameet-voice-intelligence-meeting-transcription-pitfalls-of-microsoft-modern-meetings/bad_result.png"/>

*Transkripsi yang dihasilkan dari "Selamat! Bayi laki-laki atau bayi perempuan?"*
</center>

Kami melihat hasil seperti "peraturan ola mungkin direbus bayi keren" padahal ucapannya sebenarnya "Selamat! Bayi laki-laki atau bayi perempuan?". Model bahasa yang terlatih dengan baik seharusnya dapat menghilangkan transkripsi semacam itu. Meskipun ini adalah contoh ekstrem, lebih sering daripada tidak, akan ada kesalahan dalam setiap transkripsi. Sekecil apa pun kesalahannya, seperti artikel yang hilang atau kata yang salah paham, kesalahan apa pun mengganggu dan dapat dengan mudah merusak reputasi layanan transkripsi.

### Pembaruan Windows

Beberapa minggu kemudian, tim telah menghabiskan malam demi malam untuk memastikan produk kami siap untuk demonstrasi klien hanya beberapa hari lagi. Transkriber rapat kami berjalan lancar di tiga laptop Windows yang terpisah. Kemudian suatu hari entah dari mana kami hanya memiliki satu komputer yang berfungsi meskipun tidak ada yang menyentuh kode. Kami menguji jaringan kami, memeriksa firewall kami, apa pun yang dapat kami pikirkan yang tiba-tiba menyebabkan produk kami gagal. Tebakan terakhir kami adalah bahwa pembaruan Windows yang mengejutkan membuat Azure Speech SDK secara tidak dapat dijelaskan tidak kompatibel dengan dua komputer kami ketika kami membandingkan ketiga sistem bit demi bit. Dengan pameran kami yang akan datang dengan cepat, stres dan ketegangan berada pada titik puncaknya. Dengan hanya satu sistem yang tersisa, tim membuat pakta: tidak ada perubahan kode dan sama sekali tidak ada pembaruan. Setelah cobaan ini, kami sudah cukup.

### Di Luar Rapat Modern

Untuk menghindari hambatan ini, kru di Seasalt.ai mulai melatih model akustik dan bahasa kami sendiri untuk menyaingi kemampuan transkriber percakapan Azure. Sepanjang seluruh proses, kami terus bertanya, ke mana kita akan pergi dari sini? Bagaimana kita bisa memperluas produk yang sudah instrumental ini?

SeaMeet menunjukkan potensi speech to text yang kuat, tetapi di situlah batasnya. Ia dapat mendengarkan kita, tetapi bagaimana jika kita dapat membuatnya berpikir untuk kita. Dengan hanya transkripsi, meskipun produknya mengesankan, aplikasinya agak terbatas. Beralih dari transkripsi ucapan ke kecerdasan ucapan membuka pintu lebar-lebar dalam apa yang dapat kita ciptakan. Contoh kecerdasan termasuk ringkasan rapat, abstraksi topik, dan ekstraksi tindakan. Akhirnya, merancang antarmuka yang indah untuk mengikat semuanya dalam paket yang menakjubkan.

Dan inilah ceritanya sejauh ini, awal perjalanan Seasalt.ai untuk menghadirkan solusi bisnis terbaik ke pasar yang berkembang pesat dan mengirimkannya ke dunia. Jika Anda ingin tahu lebih banyak tentang detailnya, silakan lanjutkan membaca seri blog lainnya.`;export{a as default};

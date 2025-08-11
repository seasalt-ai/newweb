const a=`---
title: "Dari Demo ke Kejayaan: Perangkap Mesyuarat Moden (2/5)"
metatitle: "Dari Demo ke Kejayaan (2/5): Perangkap Mesyuarat Moden"
date: 2021-07-30
draft: false
author: Cody Kim
description: "Dalam bahagian kedua siri blog ini, ikuti perjalanan Seasalt.ai untuk mencipta SeaMeet, penyelesaian mesyuarat moden kolaboratif kami."
weight: 1
tags:
  - SeaMeet
image: images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/SeaMeet animation.gif
canonicalURL: /blog/seameet-voice-and-microsoft-modern-meetings/
url: /blog/seameet-voice-and-microsoft-modern-meetings/
---

*Sepanjang siri blog ini, ikuti perjalanan Seasalt.ai untuk mencipta Pengalaman Mesyuarat Moden yang menyeluruh, bermula dari permulaan yang sederhana, hingga mengoptimumkan perkhidmatan kami pada perkakasan dan model yang berbeza, hingga mengintegrasikan sistem NLP canggih dan akhirnya berakhir pada realisasi penuh SeaMeet, penyelesaian mesyuarat moden kolaboratif kami.*

## Perangkap Mesyuarat Moden

Sepanjang pembangunan kami, kami menghadapi banyak halangan yang tidak dapat diramalkan tanpa sebab atau penyelesaian yang jelas.

### Permulaan Pantas

Halangan pertama adalah untuk memastikan alat kami berfungsi. Azure menyediakan sampel Mesyuarat Moden yang kami gembira serasi dengan Linux, tetapi kami mendapati bahawa menggunakan SDK di Windows untuk menjalankan demo adalah lebih mudah -- nah, ia adalah produk Microsoft. Selepas banyak percubaan yang gagal untuk menjalankan sampel yang disediakan di Linux, kami akhirnya terpaksa meninggalkan laluan itu dan beralih kepada Windows. Akhirnya kami mempunyai transkrip pertuturan yang berfungsi, yang merupakan permulaan yang luar biasa.

### Latensi

Salah satu masalah yang kami alami ialah kelewatan kira-kira lima saat dalam menerima hasil pengecaman kami pada UI bahagian hadapan. Walaupun 5 saat mungkin kelihatan agak pantas, kelewatan ini jelas beberapa saat terlalu perlahan untuk menjadi penyelesaian yang mudah dan praktikal, terutamanya untuk komunikasi masa nyata.

<center>
<img src="/images/blog/4-seameet-voice-intelligence-meeting-transcription-pitfalls-of-microsoft-modern-meetings/default_ui.png" style="width:400px;" alt="UI lalai untuk transkripsi pertuturan oleh Azure Speech SDK"/>

*UI lalai untuk transkripsi pertuturan yang disediakan oleh Azure Speech SDK*
</center>

Latensi juga merupakan masalah serius di bahagian belakang. Pada permulaan setiap mesyuarat, hasilnya datang dalam masa nyata (seperti yang diiklankan!) tetapi apabila mesyuarat berterusan, latensi akan melonjak secara berkala sehingga tiga puluh saat sebelum teks muncul di monitor. Pada masa itu, apa sahaja yang dikatakan telah lama menjadi tidak relevan dalam perbualan. Selepas ujian yang tidak terkira banyaknya, kami mula menyedari bahawa latensi berubah sepanjang hari, yang kami kaitkan dengan beban pelayan Azure pada masa itu. Kami berada dalam perniagaan mencipta produk yang konsisten dan boleh dipercayai, jadi kelewatan yang berubah-ubah dan tidak dapat diramalkan ini tidak dapat diterima. Lebih banyak sebab untuk bergantung pada model dan pelayan kami sendiri.

### Dialek

Salah satu sebab khusus mengapa kami menggunakan Azure Speech Service pada mulanya adalah sokongan luas mereka terhadap pelbagai bahasa dan dialek. Kami sangat teruja untuk menggunakan model Bahasa Inggeris Singapura Azure Speech Service. Tetapi bayangkan kejutan kami apabila mendapati bahawa, untuk dialek Singapura, model Bahasa Inggeris AS secara konsisten mengatasi model Bahasa Inggeris Singapura. Tambahan pula, walaupun model terbaik tidak memenuhi cabaran dunia sebenar.

<center>
<img src="/images/blog/4-seameet-voice-intelligence-meeting-transcription-pitfalls-of-microsoft-modern-meetings/bad_result.png"/>

*Transkripsi yang terhasil daripada "Tahniah! Bayi lelaki atau bayi perempuan?"*
</center>

Kami melihat hasil seperti “ola regulations may be boiled baby cool” sedangkan ucapan itu sebenarnya “Tahniah! Bayi lelaki atau bayi perempuan?”. Model bahasa yang terlatih dengan baik sepatutnya dapat menghapuskan transkripsi sedemikian. Walaupun ini adalah contoh yang melampau, lebih kerap daripada tidak, akan ada ralat dalam setiap transkripsi. Tidak kira betapa kecilnya ralat, seperti artikel yang hilang atau perkataan yang salah faham, sebarang kesilapan adalah mengganggu dan boleh dengan mudah merosakkan reputasi perkhidmatan transkripsi.

### Kemas Kini Windows

Beberapa minggu kemudian, pasukan telah menghabiskan malam demi malam memastikan produk kami siap untuk demonstrasi pelanggan hanya beberapa hari lagi. Transkrip mesyuarat kami berjalan lancar pada tiga komputer riba Windows yang berasingan. Kemudian suatu hari entah dari mana kami hanya tinggal satu komputer yang berfungsi walaupun tiada siapa yang menyentuh kod. Kami menguji rangkaian kami, memeriksa tembok api kami, apa sahaja yang kami fikirkan yang tiba-tiba akan menyebabkan produk kami gagal. Tebakan terakhir kami ialah kemas kini Windows yang mengejutkan menyebabkan Azure Speech SDK menjadi tidak serasi secara tidak dapat dijelaskan dengan dua komputer kami apabila kami membandingkan tiga sistem bit demi bit. Dengan pameran kami yang semakin hampir, tekanan dan ketegangan berada pada tahap yang kritikal. Dengan hanya satu sistem yang tinggal, pasukan membuat perjanjian: tiada perubahan kod dan sama sekali tiada kemas kini. Selepas dugaan ini, kami sudah cukup.

### Melangkaui Mesyuarat Moden

Untuk melepaskan diri daripada halangan ini, kru di Seasalt.ai mula melatih model akustik dan bahasa kami sendiri untuk menyaingi keupayaan transkrip perbualan Azure. Sepanjang keseluruhan proses, kami terus bertanya, ke mana kita akan pergi dari sini? Bagaimana kita boleh mengembangkan produk yang sudah instrumental ini?

Mesyuarat Moden menunjukkan potensi pertuturan ke teks yang teguh, tetapi di situlah ia berhenti. Ia boleh mendengar kita, tetapi bagaimana jika kita boleh membuatnya berfikir untuk kita. Dengan hanya transkripsi, walaupun produk itu mengagumkan, aplikasinya agak terhad. Beralih daripada transkripsi pertuturan kepada kecerdasan pertuturan membuka pintu luas kepada apa yang boleh kita cipta. Contoh kecerdasan termasuk ringkasan mesyuarat, abstraksi topik dan pengekstrakan tindakan. Akhirnya, mereka bentuk antara muka yang cantik untuk mengikat semuanya dalam pakej yang menakjubkan.

Dan inilah kisah setakat ini, permulaan perjalanan Seasalt.ai untuk membawa penyelesaian perniagaan terbaik ke pasaran yang berkembang pesat dan menyampaikannya kepada dunia. Jika anda ingin mengetahui lebih lanjut tentang butiran, sila teruskan membaca siri blog yang lain.
`;export{a as default};

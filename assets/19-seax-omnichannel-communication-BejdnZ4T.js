const a=`---
title: "Bawa Pelanggan dari Mana-mana Saluran ke Satu Tempat dengan Komunikasi Omnichannel SeaX"
metatitle: "Satukan Titik Sentuh Pelanggan dengan Komunikasi Omnichannel SeaX"
date: 2022-07-15 13:56:54-07:00
modified_date: 2025-08-02 17:00:00-07:00
draft: false
author: Kim Dodds
description: "Dalam blog ini, kami mengetengahkan salah satu komunikasi omnichannel SeaX, yang membolehkan mesej pengguna dari mana-mana saluran muncul di platform SeaX."
weight: 1
tags:
  - SeaX
image: images/blog/19-seax-omnichannel-communication/0-thumbnail.png
canonicalURL: /blog/seax-omnichannel-communication/
url: /blog/seax-omnichannel-communication/
---

*Dalam catatan blog kami sebelum ini, [Selamat Datang ke SeaX, Pusat Hubungan Awan Kolaboratif](https://seasalt.ai/blog/18-seax-collaborative-cloud-contact-center-introduction/), kami memperkenalkan SeaX, penyelesaian pusat hubungan komunikasi awan kolaboratif kami. Walaupun catatan blog pertama kami memberikan gambaran keseluruhan yang komprehensif tentang ciri-ciri asas dan lebih maju SeaX, catatan kami yang berikutnya akan menyelami lebih mendalam beberapa ciri individu yang menjadikan SeaX menonjol. Dalam catatan ini, kita akan melihat dengan lebih dekat sokongan omnichannel SeaX dan melihat bagaimana panggilan dan mesej dari saluran yang berbeza muncul di platform SeaX.*

# Isi kandungan
- [Apakah Komunikasi Omnichannel?](#what-is-omnichannel-communication)
- [Kitaran Hayat Mesej](#message-lifecycle)
    - [Saluran](#channel)
    - [Penghalaan Mesej](#message-routing)
    - [TaskRouter](#taskrouter)
    - [Platform SeaX](#seax-platform)
- [Saluran yang Disokong](#supported-channels)

# Apakah Komunikasi Omnichannel?

Pertama sekali, apakah sebenarnya maksud "omnichannel"? Dipecahkan, "omni" ialah awalan yang bermaksud "semua," dan "saluran" ialah pelbagai platform di mana anda boleh berinteraksi dengan pelanggan anda. Jadi, secara ringkasnya, "komunikasi omnichannel" bermaksud dapat berkomunikasi melalui mana-mana dan semua saluran yang ada. Bukan itu sahaja, tetapi komunikasi omnichannel juga bermakna pengalaman antara saluran adalah lancar. Di pihak ejen, komunikasi dari semua saluran dipersembahkan dalam antara muka yang bersatu. Bagi pelanggan, data interaksi mereka berterusan di seluruh saluran.

Pusat panggilan tradisional selalunya hanya menyokong panggilan telefon. Pusat hubungan yang lebih maju yang berinteraksi dengan pelanggan melalui pelbagai saluran, seperti e-mel, sembang web dan telefon, mempunyai pusat hubungan pelbagai saluran. Walau bagaimanapun, hanya kerana pusat hubungan menggunakan pelbagai saluran tidak bermakna pengalaman mereka lancar. Di pusat hubungan pelbagai saluran, saluran yang berbeza mungkin diakses melalui platform yang berasingan, dan/atau data pelanggan mungkin tidak dipautkan merentas saluran. Sebaliknya, pusat hubungan omnichannel membolehkan ejen menjejaki perbualan pelanggan ke mana sahaja mereka pergi, tanpa terkurung dalam satu saluran atau tersebar di sedozen platform.

<center>
<img src="/images/blog/19-seax-omnichannel-communication/1-contact-center-comparison.png" alt="Perbandingan ciri: pusat panggilan tradisional lwn. pusat hubungan; pelbagai saluran lwn. omnichannel."/>

*Perbandingan ciri: pusat panggilan tradisional lwn. pusat hubungan; pelbagai saluran lwn. omnichannel.*
</center>

SeaX mampu berintegrasi dengan hampir mana-mana saluran, termasuk secara lalai: teks, telefon, sembang web, Facebook dan banyak lagi. Semua mesej dan panggilan dipaparkan pada platform bersatu, dan data pengguna dari semua saluran sedia ada.

Jika anda ingin melompat terus ke demo, tonton video pendek kami di mana kami menunjukkan komunikasi omnichannel SeaX. Dalam baki blog ini, kami akan melalui langkah demi langkah bagaimana mesej dan panggilan dari pelbagai saluran dihalakan ke ejen di SeaX. Kami juga akan berkongsi saluran yang disokong di luar kotak dan membincangkan bagaimana SeaX boleh diperluaskan untuk merangkumi saluran baharu.

<iframe width="85%" height="450px" src="https://www.youtube.com/embed/usb-RK7sHlA" title="Pemain video YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

# Kitaran Hayat Mesej

SeaX dibina di atas [Twilio Flex](https://www.twilio.com/flex), pusat hubungan berasaskan awan yang menggunakan platform komunikasi awan Twilio. Twilio menyediakan blok binaan asas untuk SeaX, seperti infrastruktur telekom, penghalaan mesej dan tugas, dan UI pusat hubungan asas. Sekarang mari kita jejaki kitaran hayat mesej pengguna yang masuk dan lihat bagaimana SeaX menggunakan seni bina Twilio asas dalam kombinasi dengan komponen tersuai untuk menghalakan mesej ke ejen langsung di platform SeaX.

## Saluran

<center>
<img src="/images/blog/19-seax-omnichannel-communication/2-example-message.jpg" alt="Pengguna menghantar mesej kepada perniagaan di Google Business Messages." style="width:50%"/>

*Menghantar mesej kepada perniagaan di Google Business Messages.*
</center>

Perjalanan mesej bermula dengan pengguna mengarang dan menghantar mesej pada platform yang disokong. Contoh di atas menunjukkan seseorang menghantar mesej kepada chatbot Seasalt.ai di Google Business Messages. Secara lalai, Twilio tidak menyokong Google Business Messages, jadi kami menggunakan penyambung saluran tersuai yang dibangunkan oleh Seasalt.ai untuk merapatkan platform Google ke Twilio dan SeaX.

Sebaik sahaja mesej dihantar, ia dihantar oleh penyambung tersuai ke API Pemesejan Twilio. Pada ketika ini, Twilio mencipta konteks perbualan baharu untuk pengguna dan bersedia untuk menghalakan mesej.

## Penghalaan Mesej

<center>
<img src="/images/blog/19-seax-omnichannel-communication/3-studio-flow.png" alt="Aliran Studio ringkas yang menghalakan mesej ke chatbot atau ejen langsung."/>

*Aliran Studio ringkas yang menghalakan mesej ke chatbot atau ejen langsung.*
</center>

Sebaik sahaja mesej diterima oleh Twilio, ia perlu dihalakan ke lokasi yang betul. Untuk melakukan ini, kami menggunakan [Twilio Studio Flows](https://www.twilio.com/studio) untuk menentukan sama ada untuk memberikan respons automatik, memajukan mesej ke chatbot, menyambungkan pengguna dengan ejen langsung atau melakukan beberapa tindakan lain.

Dalam contoh ringkas yang diberikan di atas, semua mesej yang masuk akan dimajukan ke chatbot melainkan ia mengandungi frasa "ejen langsung," dalam kes ini pengguna akan dipindahkan ke ejen langsung di platform SeaX.

## TaskRouter

<center>
<img src="/images/blog/19-seax-omnichannel-communication/4-taskrouter.png" alt="Rajah seni bina TaskRouter."/>

*Rajah seni bina TaskRouter. [Sumber](https://twilio-cms-prod.s3.amazonaws.com/images/taskrouter-diagram.width-800.png).*
</center>

Selepas mesej dipindahkan ke SeaX, langkah seterusnya ialah memutuskan ejen mana yang akan menerimanya. [TaskRouter Twilio](https://www.twilio.com/taskrouter) menugaskan tugas seperti mesej dan panggilan telefon kepada ejen di SeaX yang paling lengkap untuk mengendalikannya. Setiap ejen di SeaX boleh diberikan kemahiran, seperti bahasa apa yang mereka pertuturkan, jabatan apa yang mereka bekerja, sama ada mereka harus mengendalikan pelanggan VIP, dll. TaskRouter akan menyemak maklumat yang diketahui tentang pengguna dan mesej dan kemudian memilih pekerja yang paling sesuai untuk menangani isu tersebut. Aliran Studio dari langkah sebelumnya boleh disesuaikan untuk mendapatkan maklumat tambahan (seperti bahasa pilihan), dan maklumat pelanggan boleh dikekalkan merentas perbualan dan saluran untuk memastikan pengalaman mereka lancar.

## Platform SeaX

<center>
<img src="/images/blog/19-seax-omnichannel-communication/5-seax-incoming-messages.png" alt="Panggilan dan mesej masuk muncul di platform SeaX." style="width:50%"/>

*Panggilan dan mesej masuk muncul di platform SeaX.*
</center>

Akhir sekali, mesej yang masuk akan dibentangkan kepada ejen yang sesuai di platform SeaX. Ejen boleh mengendalikan pelbagai tugas dari pelbagai saluran sekaligus. Dalam imej di atas, seorang ejen mempunyai panggilan masuk, mesej Facebook dan mesej sembang web. Ejen boleh menerima tugas atau menolaknya untuk menyerahkannya kepada ejen seterusnya yang tersedia.

# Saluran yang Disokong

Semoga kini lebih jelas apakah komunikasi omnichannel dan bagaimana ia meningkatkan pengalaman pengguna dan ejen. Soalan terakhir ialah: saluran manakah yang disokong di luar kotak?

<center>
<img src="/images/blog/19-seax-omnichannel-communication/6-channel-comparison.png" alt="Perbandingan saluran yang disokong antara pusat panggilan tradisional, Twilio Flex asas dan SeaX."/>

*Perbandingan saluran yang disokong antara pusat panggilan tradisional, Twilio Flex asas dan SeaX.*
</center>

Seperti yang dinyatakan sebelum ini, pusat panggilan tradisional selalunya hanya menyokong panggilan telefon. Syarikat mungkin masih berinteraksi dengan pelanggan melalui media sosial atau e-mel, tetapi mesej ini tidak disepadukan ke dalam platform bersatu.

Twilio Flex, sebaliknya, meletakkan asas untuk pusat hubungan omnichannel yang sangat baik. Walau bagaimanapun, ia mempunyai sangat sedikit saluran di luar kotak. Selain panggilan telefon dan SMS, mereka mempunyai sokongan beta untuk Facebook, WhatsApp dan e-mel.

SeaX dibina di atas Flex dan menambah sokongan terbina dalam untuk beberapa saluran yang paling banyak diminta: seperti Google Business Messages, Discord, Line dan Instagram. Di samping itu, Seasalt.ai sentiasa bekerjasama dengan pelanggan untuk membawa saluran baharu ke barisan produk SeaX. SeaX sangat boleh disesuaikan dan mudah diperluaskan—ini bermakna kami boleh bekerjasama dengan syarikat anda untuk menyepadukan mana-mana saluran yang paling anda inginkan.

Terima kasih kerana meluangkan masa untuk membaca bagaimana pusat hubungan awan SeaX memanfaatkan komunikasi omnichannel untuk memberikan pengalaman pelanggan dan ejen yang lancar. Nantikan catatan blog kami yang seterusnya, yang akan meneroka apa ertinya menjadi "pusat hubungan teragih." Jika anda berminat untuk mengetahui lebih lanjut sekarang, isikan [borang permintaan demo](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting) kami untuk mengalami platform SeaX secara langsung.`;export{a as default};

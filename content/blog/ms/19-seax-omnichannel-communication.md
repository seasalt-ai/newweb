---
title: "Bawa Pelanggan dari Mana-mana Saluran ke Satu Tempat dengan Komunikasi Omnichannel SeaX"
metatitle: "Satukan Hubungan Pelanggan dengan Komunikasi Omnichannel SeaX"
date: 2022-07-15T13:56:54-07:00
author: Kim Dodds 
draft: false
image: images/blog/19-seax-omnichannel-communication/0-thumbnail.png
description: "Dalam blog ini kami menumpukan pada salah satu komunikasi omnichannel SeaX, yang membenarkan mesej pengguna dari mana-mana saluran untuk dipaparkan di platform SeaX."
weight: 1
tags: ["SeaX"]
canonicalURL: "/blog/seax-omnichannel-communication/"
url: "/blog/seax-omnichannel-communication/"
---

*Dalam catatan blog kami sebelum ini, [Selamat Datang ke SeaX, Pusat Hubungan Awan Kolaboratif](https://seasalt.ai/blog/18-seax-collaborative-cloud-contact-center-introduction/), kami memperkenalkan penyelesaian pusat hubungan komunikasi awan kolaboratif kami, SeaX. Walaupun catatan blog pertama kami memberikan gambaran keseluruhan yang komprehensif tentang fungsi asas dan ciri-ciri yang lebih maju SeaX, catatan kami yang seterusnya akan menyelami lebih mendalam beberapa ciri individu yang menjadikan SeaX menonjol. Dalam catatan ini, kami akan melihat dengan lebih dekat sokongan omnichannel SeaX dan melihat bagaimana panggilan dan mesej dari pelbagai saluran dipaparkan di platform SeaX.*

# Jadual Kandungan
- [Apakah komunikasi Omnichannel?](#what-is-omnichannel-communication)
- [Kitaran Hayat Mesej](#message-lifecycle)
    - [Saluran](#channel)
    - [Penghalaan Mesej](#message-routing)
    - [TaskRouter](#taskrouter)
    - [Platform SeaX](#seax-platform)
- [Saluran yang Disokong](#supported-channels)

# Apakah komunikasi Omnichannel?

Untuk bermula, apakah sebenarnya maksud "omnichannel"? Untuk memecahkannya, "omni" adalah awalan yang bermaksud "semua", dan "saluran" adalah pelbagai platform di mana anda boleh berinteraksi dengan pelanggan anda. Jadi secara ringkasnya, "komunikasi omnichannel" bermaksud keupayaan untuk berkomunikasi melalui mana-mana dan semua saluran yang tersedia. Dan lebih daripada itu, komunikasi omnichannel bermaksud pengalaman antara saluran adalah lancar. Di pihak ejen, komunikasi dari semua saluran dipaparkan dalam satu antara muka yang bersatu. Bagi pelanggan, data interaksi mereka dikekalkan merentasi saluran.

Pusat panggilan tradisional biasanya hanya menyokong panggilan telefon. Pusat hubungan yang lebih maju yang berhubung dengan pelanggan melalui pelbagai saluran (seperti e-mel, sembang web, dan telefon) mempunyai pusat hubungan berbilang saluran. Walau bagaimanapun, hanya kerana pusat hubungan menggunakan pelbagai saluran tidak bermakna pengalaman mereka lancar. Dalam pusat hubungan berbilang saluran, saluran yang berbeza mungkin diakses melalui platform individu dan/atau data pelanggan mungkin tidak dihubungkan merentasi saluran. Sebaliknya, pusat hubungan omnichannel membolehkan ejen mengikuti perbualan pelanggan ke mana sahaja ia pergi, tanpa terperangkap dalam satu saluran atau tersebar di puluhan platform.

<center>
<img src="/images/blog/19-seax-omnichannel-communication/1-contact-center-comparison.png" alt="Perbandingan ciri: pusat panggilan tradisional vs pusat hubungan; berbilang saluran vs omnichannel."/>

*Perbandingan ciri: pusat panggilan tradisional vs pusat hubungan; berbilang saluran vs omnichannel.*
</center>

SeaX mempunyai keupayaan untuk berintegrasi dengan hampir mana-mana saluran, termasuk secara lalai: teks, telefon, sembang web, Facebook, dan banyak lagi. Semua mesej dan panggilan dipaparkan pada satu platform yang bersatu, dan data pengguna dari semua saluran mudah didapati.

Jika anda ingin terus ke demo, lihat video pendek kami yang menunjukkan komunikasi omnichannel SeaX. Dalam baki blog ini, kami akan menerangkan bagaimana mesej dan panggilan dihalakan dari pelbagai saluran kepada ejen di SeaX. Kami juga akan berkongsi saluran yang disokong di luar kotak, dan membincangkan bagaimana SeaX boleh diperluaskan untuk meliputi saluran baharu.

<iframe width="85%" height="450px" src="https://www.youtube.com/embed/usb-RK7sHlA" title="Pemain video YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

# Kitaran Hayat Mesej

SeaX dibina di atas [Twilio Flex](https://www.twilio.com/flex), pusat hubungan berasaskan awan yang menggunakan platform komunikasi awan Twilio. Twilio menyediakan blok binaan asas untuk SeaX, seperti infrastruktur telekomunikasi, penghalaan mesej & tugas, dan UI pusat hubungan asas. Sekarang mari kita jejak kitaran hayat mesej pengguna yang masuk dan lihat bagaimana SeaX menggunakan seni bina asas Twilio digabungkan dengan komponen tersuai untuk menghalakan mesej kepada ejen langsung di platform SeaX.

## Saluran

<center>
<img src="/images/blog/19-seax-omnichannel-communication/2-example-message.jpg" alt="Pengguna menghantar mesej kepada perniagaan melalui Google Business Messages.", style="width:50%"/>

*Menghantar mesej kepada perniagaan melalui Google Business Messages.*
</center>

Perjalanan mesej bermula dengan pengguna menulis mesej dan menghantarnya pada platform yang disokong. Contoh di atas menunjukkan seseorang menghantar mesej kepada chatbot Seasalt.ai di Google Business Messages. Google Business Messages tidak disokong oleh Twilio secara lalai, jadi kami menggunakan penyambung saluran tersuai yang dibangunkan oleh Seasalt.ai untuk menyambungkan platform Google ke Twilio dan SeaX.

Setelah mesej dihantar, ia dihantar oleh penyambung tersuai ke API pemesejan Twilio. Pada ketika ini, Twilio mencipta konteks perbualan baharu untuk pengguna, dan bersedia untuk menghalakan mesej.

## Penghalaan Mesej

<center>
<img src="/images/blog/19-seax-omnichannel-communication/3-studio-flow.png" alt="Aliran Studio yang mudah yang menghalakan mesej kepada chatbot atau ejen langsung."/>

*Aliran Studio yang mudah yang menghalakan mesej kepada chatbot atau ejen langsung.*
</center>

Setelah mesej diterima oleh Twilio, ia perlu dihalakan ke tempat yang betul. Untuk tujuan ini, kami menggunakan [Twilio Studio Flows](https://www.twilio.com/studio) untuk menentukan sama ada untuk memberikan respons automatik, memajukan mesej kepada chatbot, menghubungkan pengguna dengan ejen langsung, atau melakukan tindakan lain.

Dalam contoh mudah yang diberikan di atas, semua mesej masuk akan dimajukan kepada chatbot melainkan ia mengandungi perkataan "ejen langsung", dalam hal ini pengguna akan dipindahkan kepada ejen langsung di platform SeaX.

## TaskRouter

<center>
<img src="/images/blog/19-seax-omnichannel-communication/4-taskrouter.png" alt="Diagram seni bina TaskRouter."/>

*Diagram seni bina TaskRouter. [Sumber](https://twilio-cms-prod.s3.amazonaws.com/images/taskrouter-diagram.width-800.png).*
</center>

Setelah mesej dipindahkan ke SeaX, langkah seterusnya adalah untuk memutuskan ejen mana yang akan menerimanya. [Twilio’s TaskRouter](https://www.twilio.com/taskrouter) mengedarkan tugas seperti mesej dan panggilan telefon kepada ejen di SeaX yang paling sesuai untuk mengendalikannya. Setiap ejen di SeaX boleh diberikan kemahiran seperti bahasa yang mereka tuturkan, jabatan tempat mereka bekerja, sama ada mereka harus mengendalikan pelanggan VIP, dsb. TaskRouter akan menyemak maklumat yang diketahui tentang pengguna dan mesej dan kemudian memilih pekerja yang paling sesuai untuk mengendalikan isu tersebut. Aliran Studio dari langkah sebelumnya boleh disesuaikan untuk mendapatkan maklumat tambahan (seperti bahasa pilihan) dan maklumat pelanggan boleh dikekalkan merentasi perbualan dan saluran untuk memastikan pengalaman mereka lancar.

## Platform SeaX

<center>
<img src="/images/blog/19-seax-omnichannel-communication/5-seax-incoming-messages.png" alt="Panggilan dan mesej masuk dipaparkan di platform SeaX.", style="width:50%"/>

*Panggilan dan mesej masuk dipaparkan di platform SeaX.*
</center>

Akhirnya, mesej masuk akan dipaparkan kepada ejen yang sesuai di platform SeaX. Ejen boleh mengendalikan pelbagai tugas dari pelbagai saluran secara serentak. Dalam imej di atas, seorang ejen mempunyai panggilan masuk, mesej Facebook, dan mesej sembang web. Ejen boleh menerima tugas atau menolaknya untuk dihantar kepada ejen seterusnya yang tersedia.

# Saluran yang Disokong

Semoga kini lebih jelas apa itu komunikasi omnichannel, dan bagaimana ia meningkatkan pengalaman pengguna dan ejen. Soalan terakhir ialah: saluran mana yang sebenarnya disokong di luar kotak?

<center>
<img src="/images/blog/19-seax-omnichannel-communication/6-channel-comparison.png" alt="Perbandingan saluran yang disokong antara pusat panggilan tradisional, Twilio Flex asas, dan SeaX."/>

*Perbandingan saluran yang disokong antara pusat panggilan tradisional, Twilio Flex asas, dan SeaX.*
</center>

Seperti yang disebutkan sebelum ini, pusat panggilan tradisional biasanya hanya menyokong panggilan telefon. Syarikat mungkin masih berinteraksi dengan pelanggan di media sosial atau melalui e-mel, tetapi mesej ini tidak disepadukan ke dalam platform yang bersatu.

Twilio Flex, sebaliknya, meletakkan asas untuk pusat hubungan omnichannel yang hebat. Walau bagaimanapun, ia mempunyai beberapa saluran yang tersedia di luar kotak. Selain panggilan telefon dan teks, mereka juga mempunyai sokongan beta untuk Facebook, WhatsApp, dan e-mel.

SeaX dibina di atas Flex untuk menambah sokongan terbina dalam untuk beberapa saluran yang paling kerap diminta: seperti Google Business Messages, Discord, Line, dan Instagram. Selain itu, Seasalt.ai sentiasa bekerjasama dengan pelanggan untuk membawa saluran baharu ke dalam barisan SeaX. SeaX sangat boleh disesuaikan, dan mudah diperluaskan – bermakna kami boleh bekerjasama dengan syarikat anda untuk mengintegrasikan mana-mana saluran yang paling anda inginkan.

Terima kasih kerana meluangkan masa untuk membaca tentang bagaimana pusat hubungan awan SeaX menggunakan komunikasi omnichannel untuk menyediakan pengalaman pelanggan dan ejen yang lancar. Sila nantikan catatan blog kami yang seterusnya, yang akan meneroka maksud menjadi "pusat hubungan teragih". Jika anda berminat untuk mengetahui lebih lanjut dengan segera, isi [borang Tempah Demo](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting) kami untuk melihat platform SeaX secara langsung.

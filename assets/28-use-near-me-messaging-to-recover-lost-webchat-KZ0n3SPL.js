const a=`---
title: "Pengguna telah meninggalkan obrolan web: gunakan Pesan di Sekitar untuk mengirim pesan kepada mereka!"
metatitle: "Pengguna telah meninggalkan obrolan web: hubungi kembali dengan Pesan di Sekitar!"
date: 2022-12-25 12:48:52-08:00
modified_date: 2025-07-28T16:03:25.123456
draft: false
author: Xuchen Yao
description: "Pesan di Sekitar memecahkan satu masalah obrolan web: hubungi kembali pengguna Anda bahkan *setelah* mereka meninggalkan percakapan."
weight: 1
tags:
  - NearMe
image: images/blog/28-use-near-me-messaging-to-recover-lost-webchat/near-me-messaging-google-business-messages-recover-webchat.png
canonicalURL: /blog/use-near-me-messaging-to-recover/
url: /blog/use-near-me-messaging-to-recover/
---

Pada pagi Natal tahun 2022, saya terbangun dan menemukan beberapa pesan yang ditinggalkan oleh pengguna bernama Henry. Saat saya membaca pesan-pesan itu, Henry sudah pergi. Yang saya dapatkan hanyalah pesan yang dia kirim melalui obrolan web, dan namanya.

(Kemudian ternyata Henry tinggal di Nigeria dan berada di zona waktu yang sama sekali berbeda. Ketika saya melakukan obrolan video dengannya, saya benar-benar bisa melihat keringat di wajahnya, kontras dengan cuaca Seattle yang sangat dingin.)

Untungnya obrolan web di situs web Seasalt.ai menggunakan Pesan di Sekitar (Pembaruan: Kami telah mengubah produk menjadi pembuat chatbot omni-channel. Sekarang disebut [SeaChat](https://chat.seasalt.ai/?utm_source=blog)!). Backend-nya didukung oleh Google Business Messages, yang memberi Anda fitur bagus untuk mengirim pesan ke ponsel pengguna dalam waktu 30 hari setelah mereka pertama kali menghubungi Anda. Sebaliknya, Facebook hanya memberi Anda [jendela 24 jam](https://developers.facebook.com/docs/messenger-platform/policy/policy-overview/) untuk menghubungi pengguna setelah mereka memulai percakapan dengan bot Messenger Anda.

Bagi pengguna yang ingin tahu secara teknis, ini dimungkinkan oleh kerangka kerja Layanan Google Play yang diinstal di ponsel pengguna. Jadi selama mereka memiliki Google di ponsel mereka, Anda selalu dapat menghubungi mereka.

Jadi kesimpulannya: Pesan di Sekitar menyediakan fitur hebat untuk menangkap prospek yang hilang.

Hadiah Natal apa yang lebih baik untuk sebuah bisnis selain prospek yang pulih dan obrolan yang menyenangkan dengan mereka di benua lain?`;export{a as default};

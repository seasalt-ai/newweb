const a=`---
title: "Teks-ke-Pertuturan di Discord: Kajian Kes Bot Discord TTS"
metatitle: "Teks-ke-Pertuturan di Discord: Kajian Kes Bot Discord TTS"
date: 2022-12-27 17:04:20-08:00
modified_date: 2025-07-29 20:45:17+00:00
author: Kim Dodds
description: "Dalam blog ini kami akan membincangkan penemuan kami tentang bagaimana pengguna Discord sebenar menggunakan perkhidmatan kami selepas menyemak beberapa bulan data teks-ke-pertuturan yang sahih."
weight: 1
tags:
  - SeaVoice
  - Discord
image: images/blog/29-tts-case-study/discord-tts-accessibility.jpg
url: /blog/discord-tts-case-study/
---


*Selepas melancarkan SeaVoice, salah satu bot teks-ke-pertuturan dan pertuturan-ke-teks terpantas dan paling tepat di Discord, kami ingin memahami bagaimana pengguna sebenarnya berinteraksi dengan perkhidmatan tersebut. Dalam blog ini kami akan membincangkan penemuan kami selepas menyemak beberapa bulan data pengguna teks-ke-pertuturan sebenar.*

# SeaVoice: Bot Discord Teks-ke-Pertuturan & Pertuturan-ke-Teks

Discord, sebagai platform yang terutamanya digunakan untuk gabungan sembang audio dan berasaskan teks, adalah medan ujian yang hebat untuk perkhidmatan kecerdasan suara dan pemprosesan bahasa semula jadi.
Kami menggunakan Bot SeaVoice, yang dilengkapi dengan arahan teks-ke-pertuturan dan pertuturan-ke-teks, ke Discord pada Ogos 2022.
Untuk mengetahui lebih lanjut tentang cara bot berfungsi, atau melihat demo video pendek, anda boleh melawat [Wiki Bot Discord SeaVoice](https://wiki.seasalt.ai/seavoice/discord/6-community/).
Pada November tahun yang sama, kami mengeluarkan versi baharu dengan penambahbaikan backend yang ketara (seperti yang diterangkan dalam catatan blog kami sebelum ini: [Bot Discord SeaVoice: Penambahbaikan Backend & Kestabilan](https://seasalt.ai/blog/27-seavoice-discord-backend-improvements/)) yang membolehkan kami merekod data tanpa nama tentang cara pengguna berinteraksi dengan bot SeaVoice.
Dalam blog ini kami akan melihat data pengguna selama 1 bulan dari arahan teks-ke-pertuturan.

## Penggunaan TTS SeaVoice

<center>
<img src="/images/blog/29-tts-case-study/discord-tts-usage.jpg" alt="Penggunaan teks-ke-pertuturan harian Bot Discord SeaVoice selama 7 minggu."/>

*Penggunaan teks-ke-pertuturan harian Bot Discord SeaVoice selama 7 minggu.*
</center>

Pada masa penulisan, Bot SeaVoice telah ditambahkan ke hampir 800 pelayan!
Sejak kami mula merekod data penggunaan pada bulan November, kami mendapati bahawa jumlah permintaan setiap hari boleh berfluktuasi dari serendah 150 hingga lebih 1,300 (dengan purata kira-kira 560).
Kira-kira 650 pengguna telah mencuba arahan TTS sekurang-kurangnya sekali.
Walau bagaimanapun, kebanyakan pengguna tidak terus menggunakannya secara kerap selepas mencubanya.
Daripada 650 pengguna yang mencuba arahan TTS, kira-kira 200 menggunakannya 20 kali atau lebih, dan hanya 100 menggunakannya 50 kali atau lebih.
Walaupun begitu, mereka yang menikmati dan bergantung pada arahan TTS menggunakannya secara meluas!
5 pengguna teratas kami telah menghantar lebih 1,000 permintaan setiap seorang dalam dua bulan terakhir, dan pengguna teratas telah menghantar hampir 2,500 permintaan sahaja!

## Pemerhatian

### Mengapa Orang Menggunakan Teks-ke-Pertuturan

<center>
<img src="/images/blog/29-tts-case-study/why-mute-on-discord.jpg" alt="Sebab pengguna Bot Discord SeaVoice menggunakan teks-ke-pertuturan."/>

*Sebab pengguna Bot Discord SeaVoice menggunakan teks-ke-pertuturan.*
</center>

Jadi soalan pertama kami selepas melihat data penggunaan ialah: **mengapa pengguna yang kerap menggunakan TTS pada mulanya?**
Kami melihat melalui pangkalan data untuk mencari beberapa penjelasan.
Berikut adalah arahan TTS sebenar daripada beberapa pengguna kami.

__*Kenapa awak tak bercakap?*__

    - juga saya tak boleh bercakap sebab saya sedang makan
    - Saya sebenarnya akan bercakap, tetapi saya sedang bekerja pada masa ini.
    - jika saya bercakap maka saya akan membangunkan keluarga saya
    - maaf, takkan banyak bercakap. tekak sakit sangat.
    - saya boleh bercakap tapi ibu saya ada di sini
    - saya terlalu malas untuk bercakap hari ini
    - saya tak boleh bercakap sebab saya sakit tapi saya tetap nak masuk :)
    - tidak sepenuhnya bisu, cuma memerlukan usaha untuk bercakap. Banyak usaha kadang-kadang
    - maaf saya bisu nenek saya sedang bercakap di telefon dan ia bising
    - Kerana mikrofon saya rosak

Setelah menemui penjelasan ini, kami boleh meringkaskannya kepada beberapa sebab utama:
- terdapat halangan fizikal (mikrofon rosak, kesukaran bercakap, sakit, dll.),
- mereka sibuk melakukan perkara lain (makan, di tempat kerja, dll.),
- persekitaran mereka terlalu bising atau mereka perlu senyap, atau
- kerana ia mudah dan mereka suka menggunakannya.

Tetapi tanpa mengira sebab sebenar mereka menggunakan perkhidmatan TTS, ramai pengguna menyatakan kegembiraan bahawa mereka dapat mengambil bahagian dalam perbualan saluran suara sedangkan mereka tidak dapat berbuat demikian.
Kami percaya bahawa perkhidmatan TTS menjadikan saluran suara Discord lebih mudah diakses, dan itulah sebab utama pengguna biasa kami terus menggunakan perkhidmatan ini.

### Penggunaan Bahasa

Satu perkara yang menonjol kepada saya semasa menyemak perbualan, ialah ramai pengguna cuba menggunakan arahan teks-ke-pertuturan dengan bahasa yang berbeza.
Walaupun sesetengah pengguna hanya ingin melihat sama ada ia akan berfungsi atau menganggap sebutan itu lucu, yang lain, bagaimanapun, terus menggunakan TTS dalam bahasa bukan Inggeris untuk tempoh masa yang panjang!

<center>
<img src="/images/blog/29-tts-case-study/discord-spanish-tts-test.png" alt="Seorang pengguna menguji sebutan bahasa Sepanyol model TTS SeaVoice bahasa Inggeris."/>

*Seorang pengguna menguji sebutan bahasa Sepanyol model TTS SeaVoice bahasa Inggeris.*
</center>

Ini terutamanya berlaku dengan penutur bahasa Sepanyol walaupun (seperti yang dicatat oleh pengguna di atas) prestasi TTS tidak baik untuk bahasa Sepanyol, kerana model hanya dilatih dalam bahasa Inggeris.
Saya mula mencatat setiap kali saya menemui pengguna yang cuba menggunakan arahan TTS dalam bahasa selain bahasa Inggeris.

<center>
<img src="/images/blog/29-tts-case-study/discord-non-english-tts.jpg" alt="Kiraan percubaan untuk menghantar permintaan bukan Inggeris ke TTS."/>

*Kiraan percubaan untuk menghantar permintaan bukan Inggeris ke TTS.*
</center>

Jadual di atas menunjukkan kiraan setiap perbualan yang saya temui yang mempunyai sekurang-kurangnya satu contoh seseorang menggunakan bahasa yang sepadan dalam arahan TTS.
Jelas sekali, bahasa Sepanyol adalah yang paling biasa, dan digabungkan dengan fakta bahawa ramai pengguna terus menggunakan fungsi TTS dalam bahasa Sepanyol walaupun prestasinya lemah, membuat saya tertanya-tanya sama ada tiada alternatif yang sesuai yang sudah wujud di Discord untuk TTS bahasa Sepanyol.
Dalam kedua-dua kes, orang ramai cuba menggunakan perkhidmatan TTS kami untuk bahasa lain, jadi kami boleh menjejaki bahasa mana yang paling banyak permintaan dan menggunakan data ini untuk memaklumkan latihan model baharu kami.

### Komen tentang Bot

Topik menarik lain yang ditemui dalam log ialah komen tentang bot itu sendiri.
Syukurlah, kami melihat beberapa komen yang sangat positif tentang bot dan prestasinya.

<center>
<img src="/images/blog/29-tts-case-study/discord-tts-inclusive-accessibility-user-comment.png" alt="Seorang pengguna mengulas bahawa bot membuat mereka berasa lebih inklusif."/>

*Seorang pengguna mengulas bahawa bot membuat mereka berasa lebih inklusif.*
</center>

Komen yang paling menyentuh hati adalah daripada mereka yang merasa terpinggir daripada saluran suara, tetapi kini dapat mengambil bahagian berkat kebolehcapaian tambahan yang disediakan oleh bot.

Kami juga menemui beberapa maklum balas yang membina.

<center>
<img src="/images/blog/29-tts-case-study/discord-tts-speed.png" alt="Seorang pengguna mengulas bahawa kelajuan TTS adalah masalah."/>

*Seorang pengguna mengulas bahawa kelajuan TTS adalah masalah.*
</center>

Seorang pengguna menyebut bahawa, kerana pengguna perlu menaip keseluruhan ayat terlebih dahulu dan kemudian menghantarnya, TTS lebih perlahan daripada pertuturan biasa, jadi kadang-kadang ucapan TTS mereka diucapkan sedikit lewat dalam perbualan.
Seperti yang disebutkan dalam bahagian sebelumnya, kami juga melihat permintaan untuk sokongan bahasa tambahan serta seorang pengguna yang berharap dapat menterjemah antara bahasa menggunakan bot.
Mengawasi maklum balas seperti ini akan membantu kami merancang dan meningkatkan ciri-ciri pada masa hadapan.

### Kebaruan

Setelah meneliti keseluruhan koleksi arahan TTS, saya akan mengatakan bahawa kira-kira dua pertiga daripada ucapan digunakan dalam perbualan umum dengan rakan-rakan dan orang lain di pelayan.
Kebanyakan orang bermain permainan dan hanya berbual dengan rakan-rakan mereka, dan pengguna ini cenderung menjadi orang yang menggunakan perkhidmatan TTS secara kerap.
Sebaliknya, satu pertiga daripada ucapan yang tinggal termasuk dalam kategori “hanya bermain-main”.
Apabila anda diberi kuasa penuh untuk membuat suara mengatakan apa sahaja yang anda mahu, saya percaya adalah sifat manusia untuk memilih perkara yang paling bodoh atau paling lucah yang anda boleh fikirkan hanya untuk ketawa.
Saya ingat duduk di makmal komputer sekolah rendah dan terhibur berjam-jam oleh Microsoft Sam (sangat berteknologi tinggi pada masa itu), melihat sama ada kami boleh membuatnya mengatakan perkara seperti “tahi” atau “punggung”.
Nah, saya rasa kanak-kanak seperti saya membesar, memperoleh perbendaharaan kata yang lebih kaya, dan akhirnya menemui hiburan yang sama dengan perkhidmatan TTS kami di Discord.

<center>
<img src="/images/blog/29-tts-case-study/discord-tts-stress-test.png" alt="Contoh permintaan TTS pelik yang dihantar oleh pengguna."/>

*Contoh permintaan TTS pelik yang dihantar oleh pengguna.*
</center>

Kadang-kadang pengguna hanya cuba merosakkan bot dengan menaip perkara seperti: rentetan yang terlalu panjang, aksara khas, emoji, URL, dll.
Ini adalah contoh klasik orang yang menguji had perisian, dan sebenarnya membantu kami memastikan bahawa perkhidmatan kami teguh dan dapat mengendalikan sebarang input yang diberikan pengguna kepadanya.

Pada masa lain, pengguna mencari hiburan dengan membuat perkhidmatan TTS mengatakan perkara yang paling lucah dan menyinggung perasaan yang boleh mereka fikirkan.
Dalam log TTS saya rasa saya melihat setiap perkataan kesat yang saya tahu (dan mungkin beberapa yang saya tidak pernah dengar sebelum ini), cercaan perkauman, dan kandungan seksual eksplisit.

## Perkara Etika

Malangnya terdapat banyak cara aplikasi teks-ke-pertuturan boleh digunakan secara tidak menyenangkan: seperti untuk mempromosikan ucapan kebencian atau buli siber.
Selain itu, walaupun klip audio disintesis daripada model, data untuk melatih model berasal daripada orang sebenar dan output daripada model yang baik boleh kedengaran hampir tidak dapat dibezakan daripada yang asal.

Jadi perkara-perkara ini, digabungkan dengan bagaimana kami telah melihat pengguna sebenar menggunakan (atau menyalahgunakan) perkhidmatan TTS kami, menimbulkan beberapa soalan yang sangat penting untuk Seasalt.ai sebagai sebuah syarikat dan Bot Discord SeaVoice:

- *Adakah kami sebagai sebuah syarikat mahu produk kami digunakan dengan cara yang berpotensi menyinggung perasaan atau berbahaya?*
- *Apakah hak pelakon suara terhadap bagaimana suara mereka digunakan dalam aplikasi teks-ke-pertuturan?*
- *Adakah kami mempunyai hak atau tanggungjawab untuk menapis cara perkhidmatan kami digunakan?*

Soalan-soalan ini tidak dapat dijawab, atau bahkan diterokai sepenuhnya, dalam satu catatan blog.
Walau bagaimanapun, syarikat merasakan kewajipan untuk terus mempertimbangkan isu-isu ini semasa kami meneruskan projek Discord kami dan terus bekerjasama dengan pelakon suara kami.

Terima kasih atas minat anda terhadap projek Bot Discord dan Kecerdasan Suara kami! Anda boleh mengetahui lebih lanjut tentang produk STT kami di [Halaman Utama Pertuturan-ke-Teks](https://suite.seasalt.ai/tts) kami. Untuk demo satu-satu mana-mana produk Kecerdasan Suara kami, isi [Borang Tempahan Demo](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting).

Di sisi Discord, anda boleh mengetahui lebih lanjut tentang bot kami dan menambahkannya ke pelayan anda dari [Wiki Bot Discord SeaVoice](https://wiki.seasalt.ai/seavoice/discord/6-community/). Juga jangan ragu untuk menyertai [Pelayan Discord SeaVoice Rasmi](https://discord.gg/dfAYfwBQ) kami.

<center>
<iframe src="https://discordapp.com/widget?id=919037515514654721&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
</center>
`;export{a as default};

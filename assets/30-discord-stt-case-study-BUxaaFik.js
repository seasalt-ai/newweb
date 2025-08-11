const a=`---
title: "Suara ke Teks di Discord: Kajian Kes Bot Discord STT"
metatitle: "Suara ke Teks di Discord: Kajian Kes Bot Discord STT"
date: 2023-01-23 11:25:00-08:00
draft: false
author: Kim Dodds
description: "Dalam blog ini kami akan membincangkan penemuan kami tentang bagaimana pengguna Discord sebenar menggunakan perkhidmatan SeaVoice selepas mengkaji beberapa minggu data suara ke teks yang sahih."
weight: 1
tags:
  - SeaVoice
  - Discord
image: images/blog/30-stt-case-study/discord-stt-bot-case-study.jpg
canonicalURL: /blog/speech-to-text-discord-case-study/
url: /blog/speech-to-text-discord-case-study/
---

*Selepas melancarkan SeaVoice, salah satu bot teks-ke-ucapan dan ucapan-ke-teks terpantas dan paling tepat di Discord, kami ingin memahami bagaimana pengguna sebenarnya berinteraksi dengan perkhidmatan tersebut. Dalam blog ini kami akan membincangkan penemuan kami selepas mengkaji beberapa minggu data pengguna suara ke teks sebenar.*

# SeaVoice: Bot Discord Teks-ke-Ucapan & Ucapan-ke-Teks

Discord, sebagai platform yang digunakan terutamanya untuk gabungan sembang berasaskan audio dan teks, adalah medan ujian yang hebat untuk perkhidmatan kecerdasan suara dan pemprosesan bahasa semula jadi. Kami menggunakan Bot SeaVoice, yang dilengkapi dengan arahan teks-ke-ucapan dan ucapan-ke-teks, ke Discord pada Ogos 2022. Untuk mengetahui lebih lanjut tentang cara bot berfungsi, atau melihat demo video pendek, anda boleh melawat [wiki Bot SeaVoice](https://wiki.seasalt.ai/seavoice/discord/1-intro-discord-bot/). Pada November tahun yang sama, kami mengeluarkan versi baharu dengan penambahbaikan backend yang ketara (seperti yang diterangkan dalam catatan blog kami: [Bot Discord SeaVoice: Penambahbaikan Backend & Kestabilan](https://seasalt.ai/blog/27-seavoice-discord-backend-improvements/)) yang membolehkan kami merekod data tanpa nama tentang cara pengguna berinteraksi dengan bot SeaVoice. Dalam blog terakhir kami ([Kajian Kes Bot Discord TTS](https://seasalt.ai/blog/29-discord-tts-case-study/)) kami menganalisis data pengguna selama 1 bulan daripada arahan teks-ke-ucapan. Sebagai susulan, dalam catatan ini kami akan melihat data pengguna suara ke teks selama kira-kira 3 minggu.

## Penggunaan STT SeaVoice

Pada masa penulisan, Bot SeaVoice telah ditambahkan ke hampir 900 pelayan! Kira-kira 260 pelayan dengan jumlah lebih 600 peserta sebenarnya telah mencuba arahan STT sekurang-kurangnya sekali. Dalam 3 minggu yang lalu kami telah menganjurkan hampir 1,800 sesi STT dan mengeluarkan sejumlah **lebih setengah juta baris transkripsi**.

<center>
<img src="/images/blog/30-stt-case-study/discord-stt-sessions-per-day.png" alt="Sesi suara ke teks harian Bot Discord SeaVoice selama 3 minggu."/>

*Sesi suara ke teks harian Bot Discord SeaVoice selama 3 minggu.*
</center>

Jika kita melihat jumlah keseluruhan sesi STT setiap hari, kita dapati bahawa ia boleh berubah-ubah dari serendah 40 hingga lebih 140 (dengan purata kira-kira 70). Kita juga boleh mempertimbangkan jumlah keseluruhan baris transkripsi yang kita hasilkan. Pada hari yang paling perlahan, kita menghasilkan serendah 10 ribu baris, namun, pada hari yang sibuk kita telah menghasilkan lebih daripada 40 ribu baris. Untuk meletakkannya dalam perspektif, pada 18 Januari, kita menganjurkan 102 sesi STT dengan jumlah kurang daripada 30 ribu baris transkripsi; itu berjumlah hampir 40 jam masa rakaman.

Kami juga mendapati bahawa walaupun kebanyakan sesi digunakan untuk perbualan yang lebih pendek (median 57 baris setiap sesi), terdapat sejumlah besar sesi yang sangat panjang yang menaikkan purata kepada 650 baris setiap sesi. Sesi terpanjang kami adalah lebih 30 ribu baris, lebih daripada nilai purata sehari! Akhirnya kami juga melihat berapa ramai pengguna yang cenderung berada dalam setiap sesi dan mendapati bahawa biasanya terdapat 4 hingga 5 pengguna dalam setiap sesi - namun kami pernah menggunakan bot untuk menyokong transkripsi langsung di seminar maya yang mempunyai 45 peserta!

<center>
<img src="/images/blog/30-stt-case-study/discord-transcription-lines-per-day.png" alt="Baris yang ditranskripsi oleh Bot Discord SeaVoice setiap hari selama 3 minggu."/>

*Baris yang ditranskripsi oleh Bot Discord SeaVoice setiap hari selama 3 minggu.*
</center>

Walaupun majoriti pelayan tidak menggunakan sesi STT lebih daripada beberapa kali, terdapat beberapa yang menggunakan perkhidmatan ini secara meluas. Sejak kami mula merekodkan data penggunaan STT pada akhir Disember, purata jumlah sesi setiap pelayan adalah kira-kira 7; namun, pelayan #1 kami telah mencatatkan 131 sesi - Itu purata lebih 6 sesi sehari! Pelayan yang sama telah mentranskripsikan lebih 150 ribu baris ucapan dalam masa 3 minggu sahaja! Mungkin yang lebih mengagumkan daripada itu, pengguna #1 kami berasal dari pelayan yang sama dan telah mentranskripsikan lebih 60 ribu baris ucapan mereka sendiri!

## Pemerhatian

### Mengapa Orang Menggunakan Suara ke Teks

<center>
<img src="/images/blog/30-stt-case-study/discord-audio-transcript-download-user-quote.jpg" alt="Seorang pengguna bot Discord SeaVoice menyatakan kegembiraan tentang fail audio dan transkripsi yang berterusan."/>

*Seorang pengguna bot Discord SeaVoice menyatakan kegembiraan tentang fail audio dan transkripsi yang berterusan.*
</center>

Jadi soalan pertama kami selepas melihat data penggunaan ialah: **mengapa pengguna yang kerap menggunakan suara ke teks pada mulanya?**

Kami melihat melalui pangkalan data untuk mencari beberapa penjelasan. Walau bagaimanapun, ternyata lebih sukar untuk mencari penjelasan konkrit mengapa pengguna menggunakan perkhidmatan STT berbanding perkhidmatan TTS. Nampaknya orang ramai merasakan keperluan untuk menjelaskan kepada orang lain dalam sembang mengapa mereka menggunakan TTS, tetapi kurang begitu dengan STT. Walau bagaimanapun, saya menemui beberapa transkripsi menarik yang memberikan sedikit gambaran tentang mengapa pengguna memutuskan untuk menggunakan perkhidmatan STT.

__*Mengapa pengguna menggunakan STT:*__

- “Inilah sebabnya mengapa transkripsi digunakan kerana saya boleh melihat perkara yang saya terlepas.”
- “[pengguna] sukar mendengar, jadi dia mendapat bot yang mentranskripsikannya”
- “[pengguna] menyerbu dengan mereka dan mereka menggunakannya untuk mentranskripsi barang, tetapi kemudian [pengguna] berkata, oh, kita juga boleh menggunakannya untuk ******* D dan D”
- “Saya tidak sabar untuk kembali dan membaca beberapa transkripsi ini kemudian [...] Saya ingin mendengar rakaman itu dan melihat transkripsi itu lagi”
- “Jika kita mengadakan mesyuarat di sini, maka kita boleh memasukkan transkripsi mesyuarat ke dalam AI”
- “Semasa mesyuarat dengan orang ramai, sangat bagus untuk benar-benar melihat transkripsi”
- “[orang] yang tidak berada dalam sembang atau orang yang berada dalam komuniti, tetapi bukan sebahagian daripada sembang suara, tetapi mereka memutuskan untuk melihat dan membaca”

Jadi secara umum, nampaknya kebanyakan pengguna menikmati kemudahan mempunyai transkripsi langsung yang boleh membantu mereka menjejaki perbualan dan mengisi sebarang jurang yang mereka terlepas. Ini terutamanya berlaku untuk pengguna yang mempunyai masalah pendengaran atau masalah audio/sambungan. Bagi sesetengah pengguna, faedah terbesar adalah menyimpan rekod audio dan teks kekal perbualan mereka; ini boleh digunakan terutamanya untuk kes penggunaan seperti mengekalkan log sesi Dungeons & Dragons atau menyimpan rekod mesyuarat penting.

Oleh kerana ramai pengguna tidak menyatakan secara eksplisit mengapa mereka menggunakan perkhidmatan STT, ia juga kelihatan berguna untuk mendapatkan gambaran tentang apa yang mereka lakukan semasa menggunakan bot. Mengkaji transkripsi daripada pengguna memberi saya petunjuk tentang aktiviti yang mereka lakukan semasa mentranskripsi:

__*Apa yang pengguna lakukan semasa menggunakan STT:*__

- Hanya berbual
    - Permainan:
    - Permainan kasual
    - Permainan lanjutan (cth/ menyelaraskan kumpulan MMO, Massive Multiplayer Online, serbuan)
- Permainan main peranan (Dungeons & Dragons)
- Penstriman / merakam kandungan
- Membincangkan kerja sekolah / profesional / sukarela

Sebahagian besar transkripsi termasuk dalam kategori “hanya berbual” dan “permainan kasual”. Seperti yang kita lihat di atas, saya fikir kebanyakan pengguna dalam kes ini menggunakan bot untuk meningkatkan kebolehcapaian saluran suara Discord dan/atau menikmati kemudahan melihat transkripsi langsung untuk mengisi sebarang jurang yang mereka terlepas dalam perbualan. Dalam beberapa kes (seperti apabila digunakan untuk serbuan MMO), perbincangan permainan sangat kompleks dan pengguna menyelaraskan antara satu sama lain dalam masa nyata; transkripsi langsung boleh terbukti sangat berguna untuk kejayaan pasukan kerana pengguna boleh merujuk transkripsi semasa mereka bermain.

<center>
<img src="/images/blog/30-stt-case-study/discord-stt-for-mmo-raid.jpg" alt="Contoh perbincangan kompleks semasa serbuan MMO."/>

*Contoh perbincangan kompleks semasa serbuan MMO.*
</center>

Nampaknya ramai pengguna juga menggunakan bot untuk mentranskripsikan perbualan yang lebih serius seperti mesyuarat sekolah, profesional dan/atau komuniti sukarelawan. Kami juga menggunakan bot kami untuk mentranskripsikan persidangan teknologi dalam talian, [UnTechCon](https://gfsc.studio/2022/11/14/announcing-untechcon.html). Dalam kes ini, fail rakaman dan transkripsi akhir mungkin terbukti sangat membantu pengguna untuk semakan selepas mesyuarat. Satu contoh menarik terakhir yang saya temui ialah pengguna merakam kandungan untuk strim mereka. Oleh kerana transkripsi akhir datang dengan cap masa, pengguna berpotensi memuat naik fail transkripsi sebagai sari kata untuk kandungan audio atau video yang dirakam mereka.

<center>
<img src="/images/blog/30-stt-case-study/discord-stt-accessibility-user-quote.jpg" alt="Seorang pengguna SeaVoice mengucapkan terima kasih kerana menjadikan saluran suara Discord lebih mudah diakses."/>

*Seorang pengguna SeaVoice mengucapkan terima kasih kerana menjadikan saluran suara Discord lebih mudah diakses.*
</center>

Tetapi tanpa mengira sebab sebenar mereka menggunakan perkhidmatan STT, ramai pengguna menyatakan kegembiraan bahawa mereka dapat mengambil bahagian dalam perbualan saluran suara sedangkan mereka tidak dapat melakukannya. Kami percaya bahawa perkhidmatan STT menjadikan saluran suara Discord lebih mudah diakses, dan itulah sebab utama pengguna biasa kami terus menggunakan perkhidmatan tersebut.

### Ulasan tentang Bot Discord SeaVoice

Satu lagi topik menarik yang ditemui dalam log ialah ulasan tentang bot itu sendiri. Syukurlah, kami melihat beberapa komen yang sangat positif tentang bot dan prestasinya.

<center>
<img src="/images/blog/30-stt-case-study/discord-seavoice-transcription-accuracy.png" alt="Seorang pengguna SeaVoice mengulas tentang ketepatan transkripsi."/>

*Seorang pengguna SeaVoice mengulas tentang ketepatan transkripsi.*
</center>

Kami juga menemui beberapa maklum balas yang membina.

<center>
<img src="/images/blog/30-stt-case-study/discord-stt-accuracy-british-accent.png" alt="Seorang pengguna SeaVoice mencadangkan penambahbaikan untuk aksen British."/>

*Seorang pengguna SeaVoice mencadangkan penambahbaikan untuk aksen British.*
</center>

<center>
<img src="/images/blog/30-stt-case-study/discord-stt-siri-accent-accuracy-comparison.png" alt="Seorang pengguna membandingkan prestasi SeaVoice pada bahasa Inggeris beraksen dengan Siri."/>

*Seorang pengguna membandingkan prestasi SeaVoice pada bahasa Inggeris beraksen dengan Siri.*
</center>

Kebanyakan komen yang membina berkaitan dengan bot yang tidak berprestasi baik pada bahasa Inggeris beraksen bukan Amerika; khususnya pengguna menyebut aksen British dan Scotland. Untuk masa depan perkhidmatan STT kami, kami boleh berusaha keras untuk meningkatkan pengecaman pertuturan kami untuk pelbagai aksen bahasa Inggeris. Sudah tentu, bahasa Inggeris bukan satu-satunya bahasa yang dituturkan oleh pengguna kami, jadi kami juga merancang untuk menambah lebih banyak sokongan bahasa kepada bot. Malah, kami sedang memuktamadkan integrasi STT dan TTS Mandarin Taiwan kami, dan akan mengeluarkan versi bot yang dikemas kini tidak lama lagi.

## Privasi, Sensitiviti Data, & Kandungan yang Berpotensi Menyinggung

Perkembangan AI dikelilingi oleh pelbagai dilema etika. Model kami memerlukan sejumlah besar data pengguna sebenar untuk berfungsi dengan baik, *tetapi bagaimana kami mengumpul data itu secara etika sambil menghormati privasi pengguna kami?* Model hanya belajar berdasarkan data yang diberikan kepada mereka dan oleh itu mempunyai bias (yang berpotensi tidak dijangka); *jadi bagaimana kami dapat memastikan model kami melayani semua pengguna kami dengan sama baiknya?* Selain itu, model kami tidak mempunyai konsep penerimaan sosial dan boleh menghasilkan keputusan yang sesetengah pengguna mendapati menyinggung. Seperti yang dikatakan oleh salah seorang pengguna kami dengan begitu fasih: *“Adakah ia rasis jika bot yang melakukannya, itulah persoalannya”*.

<center>
<img src="/images/blog/30-stt-case-study/stt-accidental-racial-slur.png" alt="Seorang pengguna SeaVoice menunjukkan transkripsi yang tidak tepat yang bermasalah."/>

*Seorang pengguna SeaVoice menunjukkan transkripsi yang tidak tepat yang bermasalah.*
</center>

Sebab saya membangkitkan perkara ini adalah kerana beberapa transkripsi yang membimbangkan dalam log. Isu pertama ialah bot kadang-kadang mentranskripsikan kandungan yang menyinggung. Dalam contoh di atas, bot secara tidak sengaja mentranskripsikan nama pengguna seseorang sebagai cercaan kaum. Jelas sekali ini adalah kesilapan di pihak bot yang mungkin menyinggung pengguna kami dan harus disiasat. Tetapi ini membawa kepada lebih banyak soalan: *di mana kita menarik garis antara kesalahan dan bahaya?*

<center>
<img src="/images/blog/30-stt-case-study/discord-transcription-censor.png" alt="Seorang pengguna SeaVoice mengulas tentang percubaan untuk menapis perkataan tertentu daripada transkripsi."/>

*Seorang pengguna SeaVoice mengulas tentang percubaan untuk menapis perkataan tertentu daripada transkripsi.*
</center>

Baiklah, untuk bermula kami telah memutuskan untuk memberikan kuasa itu kepada pengguna. Salah satu ciri seterusnya yang akan kami usahakan ialah penapisan TTS dan STT yang boleh dikonfigurasi. Ini akan membolehkan pelayan secara pilihan menggunakan penapis untuk kata-kata kesat, kandungan seksual, cercaan kaum, dsb.

<center>
<img src="/images/blog/30-stt-case-study/discord-careful-transcript-content.png" alt="Seorang pengguna SeaVoice memberi amaran kepada peserta lain agar berhati-hati bahawa apa yang mereka katakan akan berakhir dalam transkripsi."/>

*Seorang pengguna SeaVoice memberi amaran kepada peserta lain agar berhati-hati bahawa apa yang mereka katakan akan berakhir dalam transkripsi.*
</center>

Menariknya, satu lagi isu berkaitan yang kami lihat ialah pengguna menapis diri mereka sendiri untuk mengelakkan perkara tertentu muncul dalam transkripsi. Ini adalah perkara biasa yang mengejutkan, dan saya melihat banyak kes di mana pengguna menjelaskan bahawa mereka tidak mahu bot mentranskripsikan apa yang akan mereka katakan jadi mereka berhenti dan kemudian memulakan semula STT. Ini adalah kebimbangan yang sah sepenuhnya di pihak pengguna jika contohnya mereka tidak mahu bot mentranskripsikan beberapa maklumat sensitif.

<center>
<img src="/images/blog/30-stt-case-study/discord-stt-pause-deafen.png" alt="Cara menjeda STT dengan memekakkan bot."/>

*Cara menjeda STT dengan memekakkan bot.*
</center>

Saya tidak pasti ada cara kami boleh meningkatkan pengalaman pengguna dalam kes ini, tetapi saya akan menasihati pengguna bahawa mereka boleh “memekakkan” bot buat sementara waktu untuk berhenti menghantar sebarang audio kepada bot. Dalam kes ini, bot tidak akan menerima sebarang data audio sehingga ia “tidak dipekakkan”, jadi pengguna pada dasarnya boleh menjeda sesi STT tanpa menghentikan dan memulakan yang baharu.

<center>
<img src="/images/blog/30-stt-case-study/discord-stt-opt-out-mute.jpg" alt="Seorang pengguna SeaVoice mengulas tentang ketidakselesaan peserta lain dengan bot."/>

*Seorang pengguna SeaVoice mengulas tentang ketidakselesaan peserta lain dengan bot.*
</center>

Akhir sekali, isu terakhir yang kami lihat ialah sesetengah pengguna berasa sangat tidak selesa dengan transkripsi bot sehingga mereka secara aktif mengelak daripada bercakap dalam saluran suara semasa bot hadir. Ini adalah ***bertentangan sepenuhnya*** dengan matlamat kami, iaitu untuk menjadikan saluran suara Discord lebih mudah diakses oleh semua orang. Walaupun kami berharap pengguna akan menerima [dasar privasi](https://seasalt.ai/privacy) kami dan mempercayai kami untuk menggunakan data mereka secara bertanggungjawab, kami benar-benar menghormati hak privasi setiap orang. Oleh itu, **ciri seterusnya yang akan kami laksanakan ialah tetapan menarik diri STT**. Ini akan membolehkan mana-mana pengguna mengecualikan diri mereka daripada rakaman dan transkripsi STT, dan data audio mereka tidak akan diakses atau dikumpul dalam apa jua cara oleh bot.

Kami berharap ciri-ciri yang dirancang ini akan membolehkan kami terus menjadikan saluran suara lebih mudah diakses oleh semua orang sambil memberi pengguna keupayaan untuk berinteraksi dengan Bot SeaVoice pada tahap yang mereka selesa. Bergerak ke hadapan kami akan terus berusaha untuk menangani masalah-masalah mencabar ini secara proaktif untuk menjadikan SeaVoice yang terbaik!

Terima kasih atas minat anda terhadap Bot Discord kami dan terima kasih kepada pengguna kami atas sokongan berterusan anda! Anda boleh mengetahui lebih lanjut tentang produk STT kami di [Halaman Utama SeaVoice Speech-to-Text](https://suite.seasalt.ai/tts) kami. Untuk demo satu-satu mana-mana produk Voice Intelligence kami, isi [Borang Tempahan Demo](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting).

Jika anda belum mencuba bot SeaVoice, anda boleh mengetahui lebih lanjut tentang bot kami dan menambahkannya ke pelayan anda dari [Wiki Bot Discord SeaVoice](https://wiki.seasalt.ai/seavoice/discord/1-intro-discord-bot/). Jangan ragu juga untuk menyertai [Pelayan Discord SeaVoice Rasmi](https://discord.gg/dfAYfwBQ) kami.

<center>
<iframe src="https://discordapp.com/widget?id=919037515514654721&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
</center>
`;export{a as default};

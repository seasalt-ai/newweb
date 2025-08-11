const a=`---
title: "Dari Demo kepada Kejayaan: Melaksanakan Mesyuarat Moden Microsoft dan Seterusnya (1/5)"
metatitle: "Dari Demo kepada Kejayaan (1/5): Melangkaui Mesyuarat Moden Microsoft"
date: 2021-07-19
draft: false
author: Cody Kim
description: "Dalam bahagian pertama siri blog ini, ikuti perjalanan Seasalt.ai untuk mencipta SeaMeet, penyelesaian mesyuarat moden kolaboratif kami."
weight: 1
tags:
  - SeaMeet
image: images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/SeaMeet animation.gif
canonicalURL: /blog/microsoft-modern-meetings/
url: /blog/microsoft-modern-meetings/
---

*Sepanjang siri blog ini, ikuti perjalanan Seasalt.ai untuk mencipta Pengalaman Mesyuarat Moden yang menyeluruh, bermula dari permulaannya yang sederhana, kepada mengoptimumkan perkhidmatan kami pada perkakasan dan model yang berbeza, kepada mengintegrasikan sistem NLP yang canggih dan akhirnya berakhir dengan realisasi penuh SeaMeet, penyelesaian mesyuarat moden kolaboratif kami.*

### Masa Depan Mesyuarat Moden

[![Demo perkhidmatan pertuturan-ke-teks Microsoft dari MS Build 2019](/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/ms-build-play.png)](https://www.youtube.com/watch?t=100&v=EYinMnQWgfU&feature=youtu.be)

Di Microsoft Build 2019, Microsoft membangkitkan penonton apabila mereka memperkenalkan yang terbaru dalam penyelesaian pengkomputeran awan mereka: Perkhidmatan Pertuturan Azure, lebih khusus lagi aplikasi Transkripsi Mesyuarat mereka. Selepas pengenalannya, transkripsi perbualan ini serta-merta mendarat di radar semua orang dan mendapat sebutan di kalangan blog dan majalah teknologi terkemuka. Demonstrasi, yang digambarkan dalam video di bawah pada tahun 2019, menunjukkan banyak kekuatan daripada Perkhidmatan Pertuturan Azure. Sedikit yang kami tahu bahawa ia dengan cepat menjadi permulaan bagaimana mesyuarat moden akan diadakan dalam suasana pandemik global dan pasca-pandemik: beralih dari fizikal ke maya ke hibrid.

<center>
<img src="/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/azure-demo.png" alt="Demo langsung perkhidmatan pertuturan-ke-teks dan pengenalan penceramah Microsoft Azure di MS Build 2019"/>
</center>

Diiklankan sebagai platform transkripsi perbualan, pameran Microsoft untuk perkhidmatan transkripsi mesyuarat Azure, yang diperkenalkan dengan tepat sebagai "Masa Depan Mesyuarat Moden", menubuhkan perkhidmatan baru mereka sebagai platform pertuturan-ke-teks (STT) yang mantap dan cekap yang sesuai untuk semua perniagaan yang mencari cara untuk menangkap semua persidangan penting mereka dengan cepat dan kemas.

Apa yang menjadikan perkhidmatan ini kemuncak transkripsi mesyuarat? Pertama, prestasi masa nyata. Apabila teknologi menjadi lebih pantas dan lebih pantas, kesabaran semakin menipis di mana kelewatan beberapa saat pun sudah lebih daripada cukup untuk menjengkelkan pengguna biasa. Namun Microsoft membuktikan bahawa transkripsi perbualan mereka lebih daripada cukup pantas, menyediakan transkripsi yang tepat lebih cepat daripada beberapa perkhidmatan kapsyen tertutup, menjadikannya benar-benar boleh dilaksanakan untuk mengikuti perbualan serentak dengan teks sahaja.

Seterusnya, Microsoft juga memaparkan keupayaan pengenalan penceramah mereka. Berakhir dengan kekacauan teks perbualan yang tidak teratur adalah mengecewakan dan tidak berguna, tetapi pengenalan penceramah secara automatik melabelkan setiap ucapan dengan penceramah yang mencipta format yang mudah digunakan.

![Antara muka pengguna perkhidmatan pertuturan-ke-teks dan pengenalan penceramah Microsoft Azure](/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/azure-ui.png)

Setiap hari, perkakasan pengkomputeran menjadi lebih berkuasa dari hari ke hari dan syarikat-syarikat berusaha untuk memerah setiap teras terakhir dari CPU dan GPU terkini. Selalunya teknologi lama menjadi usang dan pelanggan terpaksa menaik taraf setiap beberapa tahun hanya untuk kekal relevan dalam masyarakat. Dalam "Masa Depan Mesyuarat Moden", Microsoft mengoptimumkan Perkhidmatan Pertuturan Azure untuk berjalan pada perkakasan gred pengguna sambil mengekalkan pengiraan berat di pihak mereka, seterusnya mengembangkan populasi yang sudah luas yang boleh mendapat manfaat daripada perkhidmatan ini.

Perkhidmatan transkripsi mesyuarat Azure bersedia untuk mengoptimumkan cara kita menjalankan perniagaan. Setiap organisasi akan berbuat baik untuk memasukkan produk seperti ini dalam aliran kerja mereka. Pada hari biasa, maklumat sentiasa mengalir dan setiap bit sama pentingnya dengan yang terakhir, sama ada peringatan, tugas atau kemas kini. Terlalu kerap perkara hilang dalam keretakan dan itu bermakna masa yang terbuang dan keuntungan yang terbuang. Apa yang ditawarkan oleh penyelesaian Microsoft ialah rekod lengkap yang dijana secara automatik yang menggambarkan dengan tepat apa yang dikatakan dan siapa yang mengatakannya, jadi sudah berlalu hari-hari maklumat yang hilang dan memburu secara membabi buta melalui rakaman audio yang panjang untuk bahagian tertentu. Kini, semua maklumat yang anda perlukan disusun dengan kemas untuk anda rujuk sekerap yang anda perlukan. Teknologi ini lebih penting daripada sebelumnya. Jika tahun 2020 mengajar kita apa-apa, ia adalah keperluan untuk fleksibiliti, terutamanya di tempat kerja. Orang ramai jatuh sakit dan peristiwa yang tidak dijangka timbul jadi hampir mustahil untuk mengharapkan pekerja menghadiri setiap perbincangan. Dengan Mesyuarat Moden, kita selangkah lebih dekat untuk dapat menampung perkembangan yang tidak dijangka ini dengan pada dasarnya memberi semua orang keupayaan untuk berada di sana tanpa benar-benar berada di sana.

### Melaksanakan Mesyuarat Moden

Pada pertengahan 2020, kami menerima permintaan untuk cadangan daripada pelanggan kerajaan di Singapura. Ya, ia masih pandemik. Tetapi Singapura telah mengawalnya jadi mesyuarat kerajaan masih berlaku di bilik persidangan fizikal. Mereka mahukan penyelesaian moden yang boleh mentranskripsikan pertuturan daripada sehingga 12 penceramah yang berbeza. Tambahan pula, pengenalan penceramah akan memainkan peranan penting di sini.

Mengenai pengenalan penceramah, satu perbezaan ketara antara apa yang ditawarkan oleh Azure dan apa yang diperlukan oleh pelanggan ialah "pendaftaran" suara: Azure memerlukan beberapa suara pra-rakam daripada semua penceramah untuk mendaftarkan cap suara mereka dalam sistem. Walau bagaimanapun, adalah mustahil untuk meminta beberapa pegawai kerajaan yang mungkin sangat penting untuk duduk di hadapan mikrofon untuk dirakam. Kami melakukan beberapa penyesuaian pada proses dengan melakukan pengelompokan penceramah tanpa pengawasan terlebih dahulu (juga dipanggil diarization penceramah). Ideanya ialah jika seorang penceramah telah bercakap sekali dalam sistem kami, kami akan mengenali mereka pada kali berikutnya mereka bercakap.

![Gambar rajah aliran perkhidmatan pertuturan-ke-teks dan pengenalan pertuturan Microsoft Azure](/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/azure-diagram.png)

*Seni bina mesyuarat moden dari [Transkripsi Perbualan Azure](https://docs.microsoft.com/en-us/azure/cognitive-services/speech-service/conversation-transcription). Dalam penyesuaian kami, kami melonggarkan keperluan "Pendaftaran Pengguna" sebelum mesyuarat kepada selepas mesyuarat.*


Kemudian kami dengan cepat mengumpulkan senjata kami untuk keseluruhan projek. Langkah pertama adalah untuk mendapatkan sumber tatasusunan mikrofon berkualiti tinggi yang akan menyampaikan data audio yang jernih kepada model pengecaman kami. Kami serta-merta terpikat dengan Azure Kinect: tatasusunan 7 mikrofon yang bergaya yang ditempatkan dalam selongsong aluminium penuh dengan bonus tambahan kamera definisi tinggi dan penderia kedalaman.

<center>
<img src="/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/kinect.png" alt="Azure Kinect DK $400 digunakan untuk Mesyuarat Moden"/>

*[Azure Kinect DK](https://azure.microsoft.com/en-us/services/kinect-dk/) $400 digunakan untuk Mesyuarat Moden*
</center>

Dengan rupa sahaja, ini adalah peranti yang benar-benar canggih yang akan melengkapkan mana-mana bilik persidangan, tetapi yang lebih penting tatasusunan mikrofon yang berkuasa menjanjikan kualiti yang kami cari. Dengan susunan bulat, tujuh mikrofon membuka kemungkinan menggunakan teknik pemprosesan isyarat canggih seperti penyetempatan sumber dan pembentukan rasuk. Mikrofon ini juga merupakan pasangan yang sempurna dengan backend kami yang menggunakan Perkhidmatan Pertuturan Azure, platform pertuturan-ke-teks yang mantap yang memberikan produk kami kuasa yang diperlukan untuk menjadi transkripsi mesyuarat terkemuka.

<center>
<img src="/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/kinect-spec.png" alt="Azure Kinect DK dilengkapi dengan tatasusunan 7 mikrofon untuk menangkap suara"/>

*Azure Kinect DK dilengkapi dengan tatasusunan 7 mikrofon untuk menangkap suara*
</center>

Walaupun Azure tidak membuat potongan akhir SeaMeet, ia memberi kami permulaan yang kami perlukan untuk dapat merealisasikan visi kami. Akhirnya kami mengikat semua ini bersama-sama dengan antara muka pengguna. Dalam lelaran pertama kami, kami menggunakan reka bentuk berasaskan Java generik yang, walaupun biasa, berfungsi dengan sempurna. Kerana peranti Kinect tidak dapat menjalankan kod luaran, semua ini terpaksa dijalankan pada komputer riba Windows tunggal tambahan. Walaupun pada mulanya ia agak kasar, kami berbangga untuk mengatakan bahawa kami mempunyai produk transkripsi mesyuarat yang berfungsi sepenuhnya.

<center>
<img src="/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/seameet-old.png" alt="Persediaan awal perkhidmatan SeaMeet Seasalt.ai menggunakan tatasusunan mikrofon Microsoft Kinect"/>

*Melaksanakan Mesyuarat Moden dengan Azure Kinect dan komputer Windows, yang menjalankan UI berasaskan Java yang ringkas untuk menunjukkan transkripsi mesyuarat masa nyata dan pengenalan penceramah.*
</center>

### Melaksanakan Mesyuarat Moden

Pada bulan Mei 2021, jurutera kami tiba di Singapura untuk menggunakan penyelesaian perniagaan moden kami sebagai bukti konsep. Beradu dengan dua syarikat pesaing lain, kami masing-masing ditugaskan untuk menunjukkan visi kami tentang masa depan mesyuarat.

Walaupun fakta bahawa wayarles telah menjadi kebiasaan sejak sedekad yang lalu, kami mendapati bahawa pesaing kami masih memilih penyelesaian berwayar. Seperti yang anda lihat dari gambar, setiap 12 penceramah berlabuh pada mikrofon individu. Seorang penceramah terpaksa bercakap terus ke dalam mikrofon dalam suasana perbualan rapat agar sistem dapat menangkap suara mereka. Ini bukan sahaja sangat menghalang fleksibiliti, tetapi persediaan sedemikian juga melipatgandakan kerumitan dengan peralatan AV yang berbelit-belit. Penyelesaian kami, sebaliknya, dikuasakan sepenuhnya oleh keupayaan medan jauh, terima kasih kepada tatasusunan 7 mikrofon dan algoritma pemprosesan isyarat.

Sedikit sebanyak, penyelesaian kami sangat mirip dengan "Alexa Untuk Perniagaan": satu peranti meliputi seluruh bilik, dengan hanya kabel kuasa yang diperlukan. Berbanding dengan penyelesaian pesaing kami, penyelesaian kami adalah generasi di hadapan dalam erti kata bahawa kami benar-benar memahami keperluan perniagaan moden manakala mereka masih terikat sepenuhnya dengan generasi berwayar yang lapuk.

<center>
<img src="/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/poc-setup.png"/>

*Persediaan bilik persidangan PoC. Terdapat 12 penceramah yang mensimulasikan mesyuarat kerajaan selama 2 jam.*

<img src="/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/poc-captioned.png"/>

*Pukulan lebih dekat semua peralatan di tapak.*
</center>

Pasukan itu teruja melihat perbezaan yang besar. Dengan beberapa jam penalaan, PoC terakhir berjalan dengan lancar. Pasukan itu juga menikmati lawatan di Singapura selepas PoC, di sebuah negara di mana Covid-19 dikawal dengan ketat supaya kehidupan dan perniagaan berjalan seperti biasa.

### Melangkaui Mesyuarat Moden

Semasa kami berada di Singapura, fikiran kami melangkaui PoC yang berjaya: berbanding dengan penyelesaian bersaing yang lain, penyelesaian kami adalah 10x lebih baik. Tetapi bagaimana kami boleh melakukan 10x lebih baik daripada diri kami sendiri? Sila ikuti langkah kami ke blog seterusnya dalam siri ini.

`;export{a as default};

const a=`---
title: "Dari Demo ke Sukses: Menerapkan Rapat Modern Microsoft dan Selanjutnya (1/5)"
metatitle: "Demo ke Sukses (1/5): Melampaui Rapat Modern Microsoft"
date: 2021-07-19
modified_date: 2025-07-29 20:45:17+00:00
draft: false
author: Cody Kim
description: "Di bagian pertama seri blog ini, ikuti perjalanan Seasalt.ai dalam menciptakan SeaMeet, solusi rapat modern kolaboratif kami."
weight: 1
tags:
  - SeaMeet
image: images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/SeaMeet animation.gif
canonicalURL: /blog/microsoft-modern-meetings/
url: /blog/microsoft-modern-meetings/
---

*Sepanjang seri blog ini, ikuti perjalanan Seasalt.ai dalam menciptakan Pengalaman Rapat Modern yang menyeluruh, dimulai dari awal yang sederhana, hingga mengoptimalkan layanan kami pada berbagai perangkat keras dan model, hingga mengintegrasikan sistem NLP canggih dan akhirnya mencapai realisasi penuh SeaMeet, solusi rapat modern kolaboratif kami.*

### Masa Depan Rapat Modern

[![Demo layanan speech-to-text Microsoft dari MS Build 2019](/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/ms-build-play.png)](https://www.youtube.com/watch?t=100&v=EYinMnQWgfU&feature=youtu.be)

Pada Microsoft Build 2019, Microsoft membangkitkan semangat audiens ketika mereka meluncurkan yang terbaru dalam solusi komputasi awan mereka: Azure Speech Services, lebih khusus lagi aplikasi Meeting Transcription mereka. Setelah diperkenalkan, transkripsi percakapan ini segera menarik perhatian semua orang dan mendapatkan sebutan di antara blog dan majalah teknologi terkemuka. Demonstrasi, yang diilustrasikan dalam video di bawah ini pada tahun 2019, menunjukkan banyak kekuatan dari Azure Speech Services. Sedikit yang kami tahu bahwa itu dengan cepat menjadi awal dari bagaimana rapat modern akan diadakan dalam pandemi global dan pengaturan pasca-pandemi: beralih dari fisik ke virtual ke hibrida.

<center>
<img src="/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/azure-demo.png" alt="Demo langsung speech-to-text dan identifikasi pembicara Microsoft Azure di MS Build 2019"/>
</center>

Diiklankan sebagai platform transkripsi percakapan, pameran Microsoft untuk layanan transkripsi rapat Azure, yang diperkenalkan dengan tepat sebagai “Masa Depan Rapat Modern”, menetapkan layanan baru mereka sebagai platform speech-to-text (STT) yang kuat dan efisien yang cocok untuk semua bisnis yang mencari cara untuk dengan cepat dan rapi menangkap semua konferensi penting mereka.

Apa yang membuat layanan ini menjadi puncak transkripsi rapat? Pertama, kinerja real-time. Seiring dengan semakin cepatnya teknologi, kesabaran semakin menipis di mana bahkan beberapa detik penundaan sudah lebih dari cukup untuk membuat pengguna rata-rata kesal. Namun Microsoft membuktikan bahwa transkripsi percakapan mereka lebih dari cukup cepat, memberikan transkripsi yang akurat lebih cepat daripada beberapa layanan closed captioning, membuatnya sepenuhnya layak untuk mengikuti percakapan bersamaan hanya dengan teks.

Selanjutnya, Microsoft juga menampilkan kemampuan identifikasi pembicara mereka. Berakhir dengan kekacauan teks percakapan yang tidak terorganisir sangat membuat frustrasi dan tidak berguna, tetapi identifikasi pembicara secara otomatis melabeli setiap ucapan dengan pembicara yang menciptakan format yang mudah dikonsumsi.

![Antarmuka pengguna speech-to-text dan identifikasi pembicara Microsoft Azure](/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/azure-ui.png)

Setiap hari, perangkat keras komputasi semakin kuat dari hari ke hari dan perusahaan berusaha untuk memeras setiap inti terakhir dari CPU dan GPU terbaru. Seringkali teknologi lama menjadi usang dan pelanggan terpaksa meningkatkan setiap beberapa tahun hanya untuk tetap relevan dalam masyarakat. Dalam “Masa Depan Rapat Modern”, Microsoft mengoptimalkan Azure Speech Service untuk berjalan pada perangkat keras kelas konsumen sambil menjaga komputasi berat di pihak mereka, lebih memperluas populasi yang sudah luas yang dapat memperoleh manfaat dari layanan ini.

Layanan transkripsi rapat Azure bertujuan untuk mengoptimalkan cara kita melakukan bisnis. Setiap organisasi akan sangat diuntungkan dengan memasukkan produk seperti ini ke dalam alur kerja mereka. Setiap hari, informasi terus mengalir dan setiap bit sama pentingnya dengan yang terakhir, apakah itu pengingat, tugas, atau pembaruan. Terlalu sering hal-hal hilang dalam celah dan itu berarti waktu yang terbuang dan keuntungan yang terbuang. Solusi Microsoft menawarkan catatan yang lengkap, dibuat secara otomatis yang menggambarkan dengan tepat apa yang dikatakan dan siapa yang mengatakannya, sehingga tidak ada lagi hari-hari kehilangan informasi dan mencari-cari rekaman audio yang panjang untuk bagian tertentu. Sekarang, semua informasi yang Anda butuhkan disajikan dengan rapi agar Anda dapat merujuknya sesering yang Anda butuhkan. Teknologi ini lebih penting dari sebelumnya. Jika tahun 2020 mengajarkan kita sesuatu, itu adalah kebutuhan akan fleksibilitas, terutama di tempat kerja. Orang sakit dan peristiwa tak terduga muncul sehingga hampir tidak mungkin mengharapkan karyawan untuk menghadiri setiap diskusi. Dengan Rapat Modern, kita selangkah lebih dekat untuk dapat mengakomodasi perkembangan tak terduga ini dengan pada dasarnya memberikan setiap orang kemampuan untuk hadir tanpa benar-benar hadir.

### Menerapkan Rapat Modern

Pada pertengahan 2020, kami menerima permintaan proposal dari klien pemerintah di Singapura. Ya, itu masih pandemi. Tetapi Singapura mengendalikannya sehingga rapat pemerintah masih diadakan di ruang konferensi fisik. Mereka menginginkan solusi modern yang dapat mentranskripsi pidato dari hingga 12 pembicara yang berbeda. Selain itu, identifikasi pembicara akan memainkan peran penting di sini.

Pada identifikasi pembicara, satu perbedaan signifikan antara apa yang ditawarkan Azure dan apa yang dibutuhkan klien adalah “pendaftaran” suara: Azure memerlukan beberapa suara yang direkam sebelumnya dari semua pembicara untuk mendaftarkan cetakan suara mereka dalam sistem. Namun, tidak mungkin meminta beberapa pejabat pemerintah yang presumably sangat penting untuk duduk di depan mikrofon untuk direkam. Kami melakukan beberapa adaptasi pada proses dengan melakukan pengelompokan pembicara tanpa pengawasan terlebih dahulu (juga disebut diarization pembicara). Idenya adalah bahwa jika seorang pembicara telah berbicara sekali dalam sistem kami, kami akan mengenali mereka saat mereka berbicara lagi.

![Diagram alir speech-to-text dan layanan identifikasi pembicara Microsoft Azure](/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/azure-diagram.png)

*Arsitektur rapat modern dari [Azure Conversation Transcription](https://docs.microsoft.com/en-us/azure/cognitive-services/speech-service/conversation-transcription). Dalam adaptasi kami, kami melonggarkan persyaratan “Pendaftaran Pengguna” sebelum rapat menjadi setelah rapat.*


Kemudian kami dengan cepat mengumpulkan persenjataan kami untuk seluruh proyek. Langkah pertama adalah mencari array mikrofon berkualitas tinggi yang akan memberikan data audio yang jernih ke model pengenalan kami. Kami segera terpikat oleh Azure Kinect: array mikrofon 7 yang bergaya yang ditempatkan dalam casing aluminium penuh dengan bonus tambahan kamera definisi tinggi dan sensor kedalaman.

<center>
<img src="/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/kinect.png" alt="Azure Kinect DK seharga $400 digunakan untuk Rapat Modern"/>

*Azure Kinect DK seharga $400 [Azure Kinect DK](https://azure.microsoft.com/en-us/services/kinect-dk/) digunakan untuk Rapat Modern*
</center>

Dari tampilannya saja, ini adalah perangkat yang benar-benar canggih yang akan melengkapi ruang konferensi mana pun, tetapi yang lebih penting, array mikrofon yang kuat menjanjikan kualitas yang kami cari. Dengan pengaturan melingkar, tujuh mikrofon membuka kemungkinan penggunaan teknik pemrosesan sinyal canggih seperti lokalisasi sumber dan pembentukan berkas. Mikrofon ini juga merupakan pasangan yang sempurna dengan backend kami yang menggunakan Azure’s Speech Services, sebuah platform speech-to-text yang mapan yang memberikan produk kami kekuatan yang dibutuhkan untuk menjadi transkripsi rapat terkemuka.

<center>
<img src="/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/kinect-spec.png" alt="Azure Kinect DK dilengkapi dengan array mikrofon 7 untuk mengambil suara"/>

*Azure Kinect DK dilengkapi dengan array mikrofon 7 untuk mengambil suara*
</center>

Meskipun Azure tidak masuk dalam daftar akhir SeaMeet, itu memberi kami awal yang kami butuhkan untuk mewujudkan visi kami. Akhirnya kami menyatukan semua ini dengan antarmuka pengguna. Dalam iterasi pertama kami, kami puas dengan desain generik berbasis Java yang, meskipun sederhana, berfungsi dengan sempurna. Karena perangkat Kinect tidak dapat menjalankan kode eksternal, semua ini harus berjalan pada laptop Windows tunggal tambahan. Meskipun pada awalnya sedikit kasar, kami bangga mengatakan bahwa kami memiliki produk transkripsi rapat yang berfungsi penuh.

<center>
<img src="/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/seameet-old.png" alt="Pengaturan awal layanan SeaMeet Seasalt.ai menggunakan array mikrofon Microsoft Kinect"/>

*Menerapkan Rapat Modern dengan Azure Kinect dan komputer Windows, yang menjalankan UI berbasis Java sederhana untuk menampilkan transkripsi rapat real-time dan identifikasi pembicara.*
</center>

### Menyebarkan Rapat Modern

Pada pertengahan Mei 2021, insinyur kami tiba di Singapura untuk menyebarkan solusi bisnis modern kami sebagai bukti konsep. Bersaing dengan dua perusahaan pesaing lainnya, kami masing-masing ditugaskan untuk mendemonstrasikan visi kami tentang masa depan rapat.

Meskipun nirkabel telah menjadi norma selama dekade terakhir, kami menemukan bahwa pesaing kami masih memilih solusi berkabel. Seperti yang Anda lihat dari gambar, masing-masing dari 12 pembicara dihubungkan ke mikrofon individual. Seorang pembicara harus berbicara langsung ke mikrofon dalam pengaturan bicara dekat agar sistem dapat menangkap suara mereka. Ini tidak hanya sangat menghambat fleksibilitas, tetapi pengaturan seperti itu juga melipatgandakan kompleksitas dengan peralatan AV yang rumit. Solusi kami, di sisi lain, sepenuhnya didukung oleh kemampuan far-field, berkat array mikrofon 7 dan algoritma pemrosesan sinyal.

Sampai batas tertentu, solusi kami sangat mirip dengan “Alexa For Business”: satu perangkat mencakup seluruh ruangan, hanya dengan kabel daya yang diperlukan. Dibandingkan dengan solusi pesaing kami, solusi kami adalah generasi di depan dalam arti bahwa kami benar-benar memahami kebutuhan bisnis modern sementara mereka masih sepenuhnya terikat pada generasi berkabel yang sudah ketinggalan zaman.

<center>
<img src="/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/poc-setup.png"/>

*Pengaturan ruang konferensi PoC. Ada 12 pembicara yang mensimulasikan rapat pemerintah selama 2 jam.*

<img src="/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/poc-captioned.png"/>

*Tampilan lebih dekat dari semua peralatan di lokasi.*
</center>

Tim sangat senang melihat perbedaan besar. Dengan beberapa jam penyesuaian, PoC terakhir berjalan sangat lancar. Tim juga menikmati tur di Singapura setelah PoC, di negara di mana Covid-19 dikendalikan dengan ketat sehingga kehidupan dan bisnis berjalan seperti biasa.

### Melampaui Rapat Modern

Selama kami di Singapura, pikiran kami melampaui PoC yang sukses: dibandingkan dengan solusi pesaing lainnya, solusi kami 10 kali lebih baik. Tapi bagaimana kami bisa melakukan 10 kali lebih baik dari diri kami sendiri? Silakan ikuti langkah-langkah kami ke blog berikutnya dalam seri ini.
`;export{a as default};

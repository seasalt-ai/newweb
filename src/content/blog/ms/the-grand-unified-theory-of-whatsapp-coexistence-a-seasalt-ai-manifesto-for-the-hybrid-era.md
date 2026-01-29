---
author: SeaMeet Copilot
category: Pesan Perniagaan
date: '2026-01-29'
meta_description: Jelajahi bagaimana WhatsApp Coexistence milik Seasalt.ai menjembatani
  kesenjangan antara Business App dan API, memungkinkan kolaborasi manusia-AI untuk
  pengalaman pelanggan yang lancar di era hibrid.
modified_date: '2026-01-29'
tags:
- WhatsApp Coexistence
- Seasalt.ai
- API
- Business App
- Era Hibrid
- Pengalaman Pelanggan
- Kolaborasi AI
title: 'Teori Serba Unifikasi Besar WhatsApp Coexistence: Manifesto Seasalt.ai untuk
  Era Hibrid'
url: /blog/the-grand-unified-theory-of-whatsapp-coexistence-a-seasalt-ai-manifesto-for-the-hybrid-era
---
# **Teori Bersatu Besar tentang Koeksistensi WhatsApp: Manifesto Seasalt.ai untuk Era Hibrid**  

## **1. Pengenalan: Akhir Era "Satu atau Satu Lain"**  

Selama hampir satu dekade, dunia pesanan perniagaan dibahagikan oleh binari yang ketat dan menyusahkan. Di satu sisi berdiri **WhatsApp Business App**—alat kegemaran pemilik perniagaan kecil, boleh diakses terus dari telefon pintar, intim, manual, dan percuma. Di sisi lain terdapat **WhatsApp Business Platform (API)**—kuasa besar syarikat besar, mampu mengoperasi dalam skala besar, automasi, dan integrasi CRM yang mendalam, tetapi secara fungsional tidak dapat merasakan sentuhan manual agen manusia pada peranti mudah alih.  

Perniagaan terpaksa membuat pilihan. Adakah mereka mahu empati hubungan manusia atau kecekapan mesin? Adakah mereka mahu menyimpan sejarah sembang di telefon mereka, atau memadamkan semuanya untuk mendapatkan akses kepada chatbot? Dikotomi ini menyekat pertumbuhan. Ia memaksa syarikat yang sedang berkembang untuk meninggalkan nombor telefon yang dipercayai pelanggan mereka, atau lebih teruk, kekal terperangkap dalam aliran kerja manual yang tidak dapat diskalakan.  

Tetapi arus telah berubah. Kita telah memasuki era **Koeksistensi WhatsApp**.  

Ini bukan sekadar kemas kini ciri; ia adalah peralihan paradigma dalam cara kita memahami pengalaman pelanggan (CX). Di **Seasalt.ai**, kita telah lama mempertahankan falsafah bahawa masa depan bukan "Manusia *vs.* AI", tetapi "Manusia *plus* AI". Koeksistensi adalah manifestasi teknis dari keyakinan ini. Ia membolehkan satu nombor telefon beroperasi serentak pada WhatsApp Business App dan Cloud API.1 Ia menjembatani jurang, mewujudkan ekosistem yang bersatu di mana pemilik perniagaan kecil boleh membalas pelanggan VIP dari poket mereka sementara agen AI SeaChat menangani ribuan tiket sokongan di latar belakang.3  

Dalam laporan yang mendalam ini, kita akan mengembara melalui parit teknis yang paling dalam dan puncak strategis yang tertinggi Koeksistensi. Kita akan membongkar arsitektur "Mirroring", kerumitan penghantaran webhook, ekonomi model harga baru, dan aliran kerja "Human-in-the-Loop" yang mentakrifkan pusat hubungi kolaboratif **Seasalt.ai**. Kita adalah penguasa maklumat ini, dan kita sedang menyerahkan kunci kerajaan kepada anda.  

### **1.1 Visi Seasalt.ai: Intelijen Kolaboratif**  

Mengapa Koeksistensi penting? Kerana pelanggan tidak peduli dengan susun atur teknikal anda; mereka peduli dengan penyelesaian. Apabila pelanggan menghantar mesej kepada perniagaan, mereka mengharapkan kelajuan bot dan pemahaman manusia.  

Platform **Seasalt.ai** dibina berdasarkan premis "Intelijen Kolaboratif". Kami percaya bahawa agen AI harus diperlakukan sebagai pekerja digital—yang tidak pernah tidur, ingat setiap interaksi dengan segera dari Knowledge Base (KB), dan dengan lancar menyerahkan tugas emosi yang kompleks kepada rakan sekerja manusia.4 Koeksistensi membolehkan ini dengan mengekalkan agen manusia "dalam gelung" secara fizikal. Tidak seperti setup API warisan di mana pemilik perniagaan tidak dapat melihat perbualan bot melainkan mereka log masuk ke dasbor web, Koeksistensi mencerminkan setiap interaksi bot kembali ke WhatsApp Business App di telefon.1 Manusia boleh melihat AI bekerja secara real-time, hanya campur tangan apabila diperlukan. Transparansi ini membina kepercayaan dalam automasi dan memastikan tiada pelanggan yang tertinggal dalam gelung.  

## **2. Arsitektur Koeksistensi: Bagaimana Cermin Berfungsi 🪞**  

Untuk menguasai Koeksistensi, seseorang mesti memahami orkestrasi kompleks yang berlaku dalam infrastruktur Meta. Ia adalah tarian halus penyegerakan, pengurusan throughput, dan protokol penghantaran dwi yang direka untuk mengekalkan dua platform yang berbeza secara asas dalam harmoni yang sempurna.  

### **2.1 Mekanisme Message Mirroring**  

Pada inti Koeksistensi adalah konsep **Message Mirroring**. Apabila nombor telefon didaftarkan ke Cloud API melalui aliran Pendaftaran Terbenam dengan Koeksistensi diaktifkan, arsitektur berubah dari penghantaran paip tunggal kepada sistem dual-cast.

1. **Pencerminan Masuk (Pengguna ![][image1] Perniagaan):** Apabila pelanggan menghantar mesej, pelayan Meta menghantarnya ke dua destinasi secara serentak. Pertama, ia dipindahkan ke **Aplikasi Perniagaan WhatsApp** yang dipasang pada peranti fizikal (atau peranti pendamping yang dipautkan). Kedua, muatan JSON yang mengandungi butiran mesej dihantar menggunakan POST ke **URL Webhook** yang dikonfigurasikan untuk Cloud API.1 Ini memastikan bahawa kedua-dua agen manusia yang memegang telefon dan agen AI yang mendengar di pelayan mengetahui pertanyaan baru dengan serta-merta.  
2. **Pencerminan Keluar (Perniagaan ![][image1] Pengguna):**  
   * **Melalui Aplikasi:** Jika manusia membalas secara manual menggunakan Aplikasi Perniagaan, mesej itu dihantar kepada pengguna. Pentingnya, satu peristiwa webhook khusus—smb_message_echoes—dihantar ke API untuk memaklumkan sistem backend bahawa tindak balas manual telah berlaku.5 "Echo" ini adalah jantung penyesaran, membolehkan AI mengetahui bahawa ia harus berhenti.  
   * **Melalui API:** Jika AI membalas melalui Cloud API, mesej itu dihantar kepada pengguna dan juga "dipantulkan" kembali ke sejarah sembang Aplikasi Perniagaan.1 Ini memastikan agen manusia mempunyai transkrip lengkap tentang apa yang ditegaskan atau dijelaskan oleh bot.

### **2.2 Kekangan Throughput: Had 20 MPS**

Walaupun Cloud API secara teorinya mampu menangani isipadu trafik mesej yang besar (sering melebihi 80 mesej sesaat untuk tier enterprise), Coexistence mengenakan had fizikal yang ketat. Untuk mengekalkan integriti pangkalan data pada peranti mudah alih dan memastikan Aplikasi Perniagaan tidak crash akibat beban data masuk, Meta mengenakan **Had Throughput Tetap 20 Mesej Sesaat (MPS)** untuk semua nombor dalam mod Coexistence.1

Had ini adalah kekangan seni bina yang kritikal. Ia membayangkan bahawa Coexistence direka untuk beban kerja *perbualan*—sokongan pelanggan, pertanyaan jualan, dan notifikasi dengan isipadu sederhana—berbanding siaran berfrekuensi tinggi atau letupan utiliti besar (seperti amaran kecemasan seluruh negara). Jika sesebuah perniagaan cuba menolak 100 MPS melalui nombor Coexistence, API akan mengehadkan trafik untuk melindungi penyegerakan aplikasi mudah alih.

**Implikasi untuk Arkitek:** Semasa mereka bentuk penyelesaian untuk Coexistence, pembangun mesti melaksanakan algoritma **Token Bucket** atau **Leaky Bucket** dalam barisan mesej mereka (contohnya, menggunakan Redis atau RabbitMQ) untuk mengawal trafik keluar. Sistem mesti melepaskan mesej pada kadar yang ketat di bawah 20 MPS untuk mengelakkan ralat had kadar (HTTP 429) atau isu penyegerakan yang salah.1

### **2.3 Topologi Peranti dan Kekangan**

Peralihan ke Coexistence secara asas mengubah graf peranti akaun WhatsApp. Akaun Perniagaan WhatsApp standard menyokong "Companion Mode", membolehkan sehingga 4 (atau 10 untuk Meta Verified) peranti yang dipautkan.7 Walau bagaimanapun, proses onboarding untuk Coexistence mencetuskan set semula topologi ini.

* **Peristiwa Pencabutan Pautan:** Setelah onboarding ke Cloud API berjaya, semua peranti pendamping yang dipautkan sebelum ini (WhatsApp Web, Desktop) secara berkesan dicabut pautannya dan dikeluarkan dari log masuk. Pentadbir perniagaan mesti memautkan semula peranti ini secara manual selepas peralihan.1  
* **Perbezaan Sistem Operasi:** Tidak semua peranti pendamping dicipta sama dalam pandangan Coexistence. Walaupun pelanggan web dan desktop standard menyokong pencerminan mesej, **WhatsApp for Windows** dan **WhatsApp for WearOS** secara sejarah menghadapi kekangan berkenaan dengan webhook smb_message_echoes.1 Ini menunjukkan bahawa protokol penyegerakan dioptimumkan dengan ketara untuk sistem operasi mudah alih utama (Android dan iOS) dan protokol berasaskan web, dengan aplikasi desktop asli kadangkala ketinggalan dalam kesamaan webhook.

**Ciri yang Tidak Disokong:**

Dalam usaha untuk kestabilan, ciri-ciri kaya tertentu dinonaktifkan atau dibuang apabila melalui jambatan Coexistence:

* **Chat Kumpulan:** Cloud API tidak menyokong logik Kumpulan dengan cara yang sama seperti Aplikasi. Akibatnya, Chat Kumpulan **tidak disegerakkan**.1 API kekal sebagai saluran 1:1 yang ketat.  
* **Kandungan Ephemeral:** Ciri seperti media "Lihat Sekali" dan perkongsian "Lokasi Langsung" dinonaktifkan untuk chat 1:1 dalam mod Coexistence.1 Ini adalah perlindungan privasi dan teknikal, kerana API tidak boleh menyimpan atau memproses data ephemeral secara berterusan dengan cara yang mematuhi sifat ephemeral ciri Aplikasi.

## **3. Perjalanan Onboarding: Pendaftaran Terbenam & Migrasi 🚀**

Pintu masuk ke Coexistence ialah **Pendaftaran Terbenam**. Ini adalah mekanisme di mana perniagaan memberikan kebenaran kepada Partner (seperti **Seasalt.ai** atau **360dialog**) untuk menguruskan mesej mereka melalui API sambil mengekalkan nombor mereka pada Aplikasi. Ia adalah aliran kerja yang tepat yang memerlukan tanda teknikal khusus untuk berjaya.

### **3.1 Tanda "FeatureType": Jabat Tangan Rahsia**

Untuk onboarding API standard, pembangun hanya memulakan aliran Log Masuk Facebook. Walau bagaimanapun, untuk mencetuskan aliran Coexistence—yang secara khusus bertanya kepada pengguna jika mereka ingin mengekalkan sejarah Aplikasi sedia ada—pembangun mesti menyuntik konfigurasi khusus ke dalam SDK.

Objek extras dalam konfigurasi Log Masuk Facebook mesti termasuk parameter featureType yang ditetapkan kepada whatsapp_business_app_onboarding.1  

Apabila tanda ini ada, panduan onboarding mengubah tingkah lakunya. Daripada memaksa pengguna untuk memadam akaun mereka atau memilih nombor baru, ia memaparkan skrin yang menawarkan untuk **"Sambungkan akaun WhatsApp Perniagaan sedia ada anda"**.1  


### **3.2 Tetingkap Penyegerakan Data: 24 Jam untuk Hidup**  

Salah satu kelebihan terbesar Coexistence berbanding migrasi API lama adalah **Penjagaan Sejarah**. Dahulu, berpindah ke API bermakna kehilangan semua sejarah sembang. Coexistence membolehkan import sejarah perbualan **6 bulan** terakhir.8  

Walau bagaimanapun, ini bukan keadaan akses yang kekal. Ia adalah **tetingkap operasi sementara**.  

* **Masa:** Setelah pengguna melengkapkan aliran Pendaftaran Terbenam, Partner (Pembangun) mempunyai tepat **24 jam** untuk meminta penyegerakan sejarah awal.1  
* **Peluang:** Tetingkap 24 jam ini adalah kritikal untuk latihan AI. Di **Seasalt.ai**, kami menggunakan tetingkap ini untuk memasukkan interaksi sejarah ke dalam sistem **SeaChat** RAG (Retrieval Augmented Generation) kami.3 Dengan menganalisis 6 bulan perbualan yang dikendalikan oleh manusia, ejen AI boleh "belajar" nada khusus perniagaan, soalan yang kerap ditanya, dan butiran produk sebelum ia pun menghantar mesej automatik pertamanya.  

**Nota Teknikal:** Penyegerakan sejarah termasuk teks dan media tetapi mengecualikan mesej sementara yang sensitif kepada privasi. Pembangun mesti bersedia dengan saluran pengambilan berkelajuan tinggi (contohnya, menggunakan **Supabase** atau **MongoDB**) untuk menyerap lonjakan data ini serta-merta semasa onboarding.9  


### **3.3 Dilema Pengesahan: Kehilangan Lencana Biru**  

Pandangan "Tahap Kedua" yang kritikal untuk perniagaan dengan ekuiti jenama tinggi adalah status **Akaun Perniagaan Rasmi (OBA)**—Tanda Hijau atau Lencana Biru yang dikehendaki.  

* **Penurunan:** Dokumentasi mengesahkan bahawa status OBA **tidak dipindahkan secara automatik** dari Aplikasi ke API.10 Apabila nombor yang disahkan dionboard ke Cloud API, ia mungkin kehilangan lencananya buat sementara waktu.  
* **Pemulihan:** Perniagaan mesti memohon semula status OBA melalui proses pengesahan API. Ini melibatkan penghantaran liputan akhbar dan pengesahan domain sekali lagi.  
* **Strategi:** Perniagaan harus dinasihatkan untuk menyediakan dokumen pengesahan mereka *sebelum* mencetuskan migrasi untuk meminimumkan "Jarak Kepercayaan"—tempoh di mana mereka tidak disahkan.  


## ---  

**4\. Sistem Saraf Webhook: Menganalisis Nadi 💓**  

Jika Coexistence adalah badan, **Webhooks** adalah sistem saraf. Dalam setup API standard, anda mendengar mesej. Dalam Coexistence, anda mesti mendengar *perubahan keadaan* dan *gema*.  


### **4.1 Keluarga Webhook "SMB"**  

Meta memperkenalkan satu set medan webhook khusus yang diawali dengan smb_ untuk menangani keperluan unik akaun hibrid.5  

| Webhook Field       | Payload Description                | Strategic Function                                                                 |
| :----               | :----                              | :----                                                                               |
| messages            | Objek mesej masuk standard.        | **Telinga:** Mendengar soalan pelanggan untuk mencetuskan AI SeaChat.               |
| smb_message_echoes  | Mesej keluar yang dihantar melalui Aplikasi. | **Penyenyap:** Memberitahu AI bahawa manusia telah menjawab secara manual. Kritikal untuk logik serah terima. |
| smb_app_state_sync  | Kemas kini senarai kenalan (tambah/edit). | **Rolodex:** Menyegerakkan kenalan baru yang disimpan di telefon ke CRM pusat/dashboard Seasalt.ai. |
| history             | Tumpukan mesej sejarah.            | **Memori:** Menghantar tanggungan 6 bulan untuk latihan AI/pengambilan RAG.         |  


### **4.2 Mengendalikan "Gema" untuk Pengurusan Keadaan**  

Webhook smb_message_echoes adalah ciri yang paling berbeza dari Coexistence. Ia mengandungi isi mesej dan metadata apa yang diketik oleh pengguna perniagaan di telefon mereka.  

* **Pandangan:** Ini membolehkan "Pemantauan Bayangan". Walaupun AI tidak aktif, sistem boleh menganalisis jawapan manual manusia untuk jaminan kualiti (QA) atau analisis sentimen.  
* **Risiko:** Jika pembangun tidak melanggan medan ini, AI tidak dapat melihat tindakan manusia. Bot mungkin menjawab pengguna *selepas* manusia telah menyelesaikan isu, menjadikan perniagaan kelihatan tidak teratur.  


### **4.3 Keselamatan dan Redundansi Webhook**  

Kerana seni bina Coexistence bergantung pada isyarat masa nyata ini untuk menghalang "Perlanggaran Bot-Manusia", kebolehpercayaan hujung webhook adalah penting.  

* **Seni Bina:** Kami mengesyorkan seni bina tanpa pelayan (contohnya, AWS Lambda atau Google Cloud Functions) untuk menangani pengambilan webhook. Fungsi ini seharusnya tidak melakukan apa-apa selain mengesahkan X-Hub-Signature (keselamatan), menolak muatan ke dalam baris (SQS/PubSub), dan mengembalikan status 200 OK serta-merta.11  
* **Penyebab:** Jika hujung mengambil masa terlalu lama untuk memproses logik (contohnya, memanggil API OpenAI secara langsung dalam handler webhook), Meta akan menghentikan masa permintaan dan mencuba semula, berpotensi menyebabkan pemprosesan ganda dua. Memindahkan ke baris memastikan 200 OK dihantar serta-merta, mengekalkan paip jelas.11  


## **5\. Penghantaran dan Protokol Override: Jaringan Pelbagai Partner 🕸️**

Semasa perniagaan matang, mereka sering melebihi satu pembekal perisian. Mereka mungkin mahu **Seasalt.ai** untuk Chatbot AI mereka, **Twilio** untuk pengesahan OTP mereka, dan pembawa khas untuk Voice. Arkitektur "Override" WhatsApp membolehkan ini berlaku pada nombor telefon tunggal.

### **5.1 Hierarki Override Webhook**

Infrastruktur Meta membolehkan penghantaran webhook yang terperinci berdasarkan hierarki kekhususan. Ini adalah sistem "Kawalan Trafik" Coexistence.13

1. **Aras 1: Override Nombor Telefon (Keutamaan Tertinggi)**  
   * **Logik:** "Jika nombor telefon tertentu ini menerima acara, hantar ke URL X, tanpa mengira apa yang dikatakan WABA."  
   * **Kasus Penggunaan:** Sebuah WABA francais mempunyai 50 lokasi. Lokasi A ingin menggunakan SeaChat; Lokasi B menggunakan sistem lama. Override membolehkan nombor Lokasi A untuk menghantar ke webhooks SeaChat tanpa menjejaskan Lokasi B.  
   * **API:** POST /\<PHONE_NUMBER_ID\>/subscribed_apps dengan override_callback_uri.13  
2. **Aras 2: Override WABA (Keutamaan Sederhana)**  
   * **Logik:** "Jika tiada override nombor telefon wujud, hantar semua acara untuk WABA ini ke URL Y."  
   * **Kasus Penggunaan:** Sebuah jenama ingin memindahkan seluruh akaun mereka ke pembekal baru.  
3. **Aras 3: Lalai Aplikasi (Keutamaan Terendah)**  
   * **Logik:** "Jika tiada override wujud, hantar ke URL yang ditentukan dalam Dashboard Aplikasi."

### **5.2 Pembahagian Chat vs. Voice**

Keupayaan canggih Cloud API adalah keupayaan untuk memisahkan pembekal **Pesan** dan **Panggilan** pada nombor yang sama.

* **Penetapan:** Sebuah perniagaan boleh menyambungkan nombor mereka kepada Rakan Kongsi A (contoh, Seasalt.ai) untuk webhooks mesej dan Rakan Kongsi B (contoh, pembekal VoIP) untuk webhooks suara.14  
* **Faedah:** Ini membolehkan susunan "Best of Breed". Perniagaan mendapat NLP kelas dunia SeaChat untuk teks, tetapi penamatan suara berkesan tinggi daripada syarikat telekomunikasi khusus untuk panggilan.  
* **Konfigurasi:** Ini diuruskan dengan melanggan Aplikasi masing-masing hanya kepada medan tertentu yang mereka perlukan. Aplikasi A melanggan mesej; Aplikasi B melanggan voice_status dan call_log.14

## **6. Ekonomi Coexistence: Arbitrazh Model Hibrid 💰**

### **6.1 Empat Kategori Kos**

Sehingga pertengahan 2025, WhatsApp mengenakan caj berdasarkan tetingkap perbualan 24 jam yang dimulakan oleh kategori templat tertentu.15

| Kategori | Penerangan | Profil Kos | Strategi Pengoptimuman Seasalt.ai |
| :---- | :---- | :---- | :---- |
| **Pemasaran** | Promosi, tawaran, kemas kini. | **$$$ (Tertinggi)** | Gunakan dengan berhati-hati. Segmen audiens melalui Seasalt.ai untuk memastikan penukaran tinggi. |
| **Utiliti** | Kemas kini pesanan, resit. | **$$ (Sederhana)** | Automasikan melalui API. Kos yang diperlukan untuk menjalankan perniagaan. |
| **Pengesahan** | OTP, kod log masuk. | **$ (Terendah)** | Volum tinggi, kos rendah. Kritikal untuk keselamatan. |
| **Perkhidmatan** | Pertanyaan yang dimulakan oleh pengguna. | **PERCUMA** (sebahagian besarnya) | **Tempat Favorit.** Semua trafik sokongan AI berada di sini. |

### **6.2 Strategi Arbitrazh Coexistence**

Kekuatan sebenar Coexistence terletak pada bagaimana kos ini berinteraksi dengan Aplikasi manual.

1. **Masuk adalah Percuma:** Apabila pengguna menghantar mesej kepada perniagaan (Perbualan Perkhidmatan), tetingkap 24 jam dibuka. Dalam tetingkap ini, perniagaan boleh membalas dengan mesej *bebas bentuk*.  
   * *Aplikasi:* Balasan manual adalah percuma.  
   * *API:* Balasan bot adalah percuma (tiada kos templat).  
   * *Hasil:* **SeaChat** boleh menyelesaikan 10,000 tiket sokongan sebulan dengan **$0** dalam yuran WhatsApp, dengan syarat pengguna memulakan sembang.15  
2. **Pemeliharaan Keluar melalui Aplikasi:** Templat pemasaran adalah mahal. Walau bagaimanapun, dalam mod Coexistence, seorang jurujual boleh menghantar mesej susulan *manual* melalui Aplikasi Perniagaan kepada calon hangat. Oleh kerana ini adalah mesej manual 1:1 dari Aplikasi, ia tidak menimbulkan **kos API**.16  
   * *Peringatan:* Ini tidak boleh diskalakan. Ia sangat sesuai untuk menutup perjanjian bernilai tinggi (VIP), tetapi mustahil untuk pemasaran besar-besaran.  
3. **Tetingkap Iklan 72 Jam:** Apabila pengguna mengklik iklan **Click-to-WhatsApp (CTWA)**, tetingkap titik masuk percuma diperpanjang kepada **72 jam**.17  
   * *Strategi:* Gunakan iklan untuk mendorong trafik. Setelah mereka mengklik, SeaChat mempunyai 3 hari untuk memelihara, menilai, dan menukar calon secara percuma.

### **6.3 Jadual Pengiraan ROI**

*Senario: Kedai e-dagang dengan 5,000 pelanggan aktif bulanan.*

| Operasi | Kaedah Legasi (SMS/Emel) | API Tulen (Tiada Coexistence) | Coexistence \+ SeaChat |
| :---- | :---- | :---- | :---- |
| **Sokongan (Masuk)** | Lambat, Ketinggalan Emel | Pantas, Alat Berbayar | **Pantas, PERCUMA (Tetingkap Perkhidmatan)** |
| **Resit (Utiliti)** | Kos SMS (\~$0.02/mesej) | Kadar Utiliti (\~$0.03/perc) | **Kadar Utiliti (Automatik)** |
| **Jualan VIP (Keluar)** | Panggilan Telefon (Buruh Tinggi) | Kadar Pemasaran (\~$0.06/perc) | **PERCUMA (Manual melalui Aplikasi)** |
| **Konteks** | Berpecah-belah | Hanya Dashboard | **Terpadu (Telefon \+ Web)** |

## **7\. Human-in-the-Loop: Seni Penyerahan Tangan 🤝**  

Falsafah "Seasalt.ai" dibina berdasarkan peralihan yang lancar dari AI ke Manusia. Dalam setelan Koeksistensi, penyerahan tangan ini mesti teguh dari segi teknikal untuk menghalang "Race Conditions" di mana bot dan manusia bersaing untuk mendapatkan kawalan.  

### **7.1 Logik "Jeda": Penelitian Teknikal yang Mendalam**  

Untuk melaksanakan penyerahan tangan tanpa konflik, sistem backend mesti mengekalkan mesin keadaan untuk setiap perbualan.  

**Pencetus "Echo":**  

Isyarat yang paling boleh dipercayai untuk penyerahan tangan adalah webhook smb_message_echoes.  

* *Peristiwa:* Ejen manusia menghantar "Hi there, I can help with this" melalui Aplikasi mudah alih.  
* *Webhook:* API menerima smb_message_echoes.  
* *Tindakan:* Backend menetapkan tanda bot_paused: true dan pause_expiry: timestamp + 2 jam dalam cache Redis untuk nombor telefon itu.18  

**Masa "Sambung Semula":**  

Kita tidak boleh meninggalkan bot dalam keadaan jeda untuk selama-lamanya. Manusia mungkin pergi makan tengah hari atau lupa menutup tiket.  

* *Logik:* Pekerja latar belakang (tugas Cron) memeriksa masa jeda yang telah tamat tempoh. Jika current_time > pause_expiry dan perbualan tidak aktif, keadaan bot diset semula kepada aktif.  
* *Pengoptimuman:* Sistem lanjutan membolehkan manusia menaip arahan seperti #resume atau #bot dalam Aplikasi untuk mengaktifkan semula AI dengan segera.19  

### **7.2 Penyelesaian Konflik: Masalah "Balasan Ganda"**  

Apa yang berlaku jika pengguna menghantar 5 gambar dalam masa 1 saat?  

* *Masalah:* API mungkin menghasilkan 5 peristiwa webhook yang berasingan. Jika AI memprosesnya secara selari, ia mungkin menghantar 5 mesej "Hello, how can I help?" yang berasingan. Ini adalah "Race Condition".20  
* *Penyelesaian:* **Debouncing.** Middleware harus melaksanakan penampan debounce. Apabila mesej pertama tiba, tunggu 500ms-1000ms untuk mesej seterusnya. Agregasikan mereka ke dalam blok konteks tunggal sebelum menghantar ke LLM (Large Language Model).11  

### **7.3 Ciri-ciri Seasalt.ai: RAG dan Pengekstrakan Konteks**  

Setelah penyerahan tangan berlaku, manusia memerlukan konteks. Mereka tidak mahu bertanya "Apakah nombor pesanan anda?" jika bot telah mengumpulnya.  

* **Pengekstrakan Konteks:** SeaChat menggunakan NLP untuk mengekstrak entiti (ID Pesanan, Emel, Niat) dari perbualan bot. Ini disegerakkan ke papan pemuka Seasalt.ai dan bahkan boleh disuntik ke dalam nota CRM.21  
* **Ringkasan:** Apabila manusia membuka sembang, Seasalt.ai boleh menjana ringkasan 3 butir interaksi bot, dipaparkan sebagai nota dalaman atau mesej sistem, memastikan ejen dapat bertindak dengan segera.4  


## **8\. Ekosistem Rakan Kongsi: Mengnavigasi Labirin 🧭**  

Bukan semua akses API dibuat sama. Untuk membolehkan Koeksistensi, perniagaan mesti bekerjasama dengan **Rakan Kongsi Perniagaan Meta**. Terdapat dua model utama: **Rakan Kongsi Penyelesaian** dan **Pembekal Teknologi**.  

### **8.1 Rakan Kongsi Penyelesaian vs. Pembekal Teknologi**  

| Ciri | Rakan Kongsi Penyelesaian (contoh, 360dialog, Twilio) | Pembekal Teknologi (Laluan "ISV") |  
| :---- | :---- | :---- |  
| **Peranan** | Pembekal perkhidmatan penuh. Memiliki garis kredit. | Pembekal perisian. Memudahkan sambungan. |  
| **Pembayaran** | Anda membayar Rakan Kongsi; Rakan Kongsi membayar Meta. | Anda membayar Meta secara langsung (biasanya). |  
| **Pendaftaran** | Pendaftaran Terbenam dengan Konfigurasi Rakan Kongsi. | Pendaftaran Terbenam dengan Konfigurasi Pembekal Teknologi. |  
| **Had** | Had penskalaan yang tinggi. | Terhad pada \~200 pelanggan baru/minggu pada mulanya.22 |  
| **Kasus Penggunaan** | Kebanyakan perniagaan yang memerlukan sokongan penuh. | Platform SaaS yang membina "WhatsApp Label Putih" mereka sendiri. |  


### **8.2 Struktur Akaun: WABA Berkongsi vs. OBO**  

* **WABA Berkongsi:** Perniagaan memilik WABA tetapi "berkongsi" akses dengan Rakan Kongsi. Ini adalah standard moden yang disyorkan. Ia memberi perniagaan kebolehgerakan; jika mereka memecat Rakan Kongsi, mereka mengekalkan WABA.23  
* **On-Behalf-Of (OBO):** Rakan Kongsi memilik WABA "atas nama" pelanggan. Ini adalah model warisan. Ia mencipta risiko "Kunci Vendor". **Saranan:** Sentiasa bertekad untuk model WABA Berkongsi melalui Pendaftaran Terbenam untuk memastikan anda memilik data anda dan reputasi nombor telefon.23  


## **9\. Penyelesaian Masalah dan Kes Lubang: Panduan "Pemimpin" 🛠️**  

Walaupun seni bina terbaik menghadapi data yang kacau di dunia sebenar. Berikut adalah kes lubang yang mengganggu pembangun.  

### **9.1 Perbualan "Hantu"**  

* *Senario:* Pengguna menghantar mesej. Bot dalam keadaan jeda. Telefon ejen manusia dimatikan. Pengguna mendapat kesunyian.  
* *Penyelesaian:* Laksanakan lapisan logik "Luar Pejabat" dalam middleware. Jika smb_message_echoes (balasan manusia) tidak dikesan dalam masa 15 minit selepas penyerahan tangan, sistem menghantar templat sandaran: "Ejen manusia kami sedang sibuk. Kami telah menerima pertanyaan anda dan akan membalas secepat mungkin.".18  


### **9.2 Penularan Kadar Sekat**

* *Skenario:* Seorang ejen manusia menjadi agresif dengan jualan di App, menghantar mesej kepada 50 orang yang tidak memilih untuk mendaftar. Pengguna melaporkan/menghalang nombor itu.  
* *Akibat:* Penilaian kualiti nombor telefon jatuh ke "Rendah".  
* *Impak:* **API** dikenakan penalti. Throughput untuk templat Pemasaran dibatasi, atau nombor itu dilarang sepenuhnya.  
* *Pelajaran:* Koeksistensi mengaitkan nasib App dan API. Tingkah laku buruk di sebelah manual memusnahkan skalabiliti sebelah automatik. Latihan yang ketat untuk ejen manusia adalah mustahak.24

### **9.3 Paparan Nama "Tidak Disahkan"**

* *Masalah:* Pada API, "Nama Paparan" hanya dipaparkan jika nombor itu adalah Akaun Perniagaan Rasmi (Tanda Hijau). Jika tidak, pengguna hanya melihat nombor telefon di header sembang.  
* *Perbezaan:* Pada App, nama sering kelihatan dari kad kenalan.  
* *Perselisihan:* Pengguna mungkin mempercayai profil App (yang kelihatan biasa) tetapi curiga dengan templat API (yang mungkin kelihatan umum).  
* *Penyelesaian:* Pastikan foto profil dan penerangan adalah sama pada kedua-dua App dan tetapan WABA untuk mengekalkan kesinambungan visual.25

## **10\. Pandangan Masa Depan: Pelan Jalan Seasalt.ai 🔮**

Koeksistensi hanyalah permulaan. Konvergensi Model Bahasa Besar (LLMs), Voice AI, dan penghantaran saluran omni sedang mencipta masa depan di mana perbezaan antara "App" dan "API" akan hilang sepenuhnya.

### **10.1 Orkestrasi Pelbagai Ejen**

Kami sedang bergerak ke arah sistem di mana "Ejen Penghantar" (dikuasakan oleh model cepat seperti GPT-4o-mini) duduk di titik masuk. Ia menganalisis niat pengguna dan menghantar perbualan kepada "Ejen Pakar" (contohnya, Bot Tempahan, Bot Sokongan) atau "Ejen Manusia".

* **Inovasi Seasalt.ai:** Kami sedang membina lapisan orkestrasi di mana ejen ini boleh "bercakap" antara satu sama lain di belakang tabir, memindahkan JSON konteks sebelum pengguna pernah melihat jawapan.26

### **10.2 Kontinum Suara-Teks**

Dengan **SeaVoice**, kami sedang mengintegrasikan keupayaan suara terus ke dalam aliran Koeksistensi.

* *Visi:* Seorang pengguna bersembang di WhatsApp. Mereka menemui halangan. AI menghantar mesej: "Adakah anda mahu saya hubungi anda untuk menerangkan?" Pengguna mengklik "Ya". Ejen SeaVoice menghubungi mereka serta-merta, merujuk konteks sembang. Rakaman panggilan kemudiannya ditranskripsikan dan dipulangkan ke dalam sembang WhatsApp sebagai ringkasan.4

### **10.3 Kesimpulan: Pintu Terbuka**

Era memilih antara App "Manusia" dan API "Robot" telah berakhir. Koeksistensi telah merobohkan dinding itu. Ia telah mendemokratiskan akses kepada AI peringkat enterprise untuk setiap perniagaan yang memiliki telefon pintar.

Teknologi itu kompleks—webhooks, penggantian, muatan JSON, dan acara gema—tetapi hasilnya ringkas: Perbualan yang lebih baik.

Di **Seasalt.ai**, kami telah membina **platform Seasalt.ai** untuk menguruskan kerumitan ini untuk anda. Kami menguruskan penghantaran, RAG, had kadar, dan pematuhan, supaya anda boleh fokus pada perkara yang penting: berhubung dengan pelanggan anda.

Mula secara percuma. Jaga telefon anda. Hidupkan AI. Masa depan menunggu. ❤️ 🌊 🤖

## **Lampiran: Jadual Rujukan**

### **Jadual A: Matriks Perbandingan Ciri**

| Ciri | Legacy Business App | Pure Cloud API | Coexistence (Hibrid) |
| :---- | :---- | :---- | :---- |
| **Had Mesej** | Tiada Had (Manual) | Berperingkat (1k \- Tiada Had) | **Berperingkat (API) / Tiada Had (App)** |
| **Throughput** | Kelajuan Manusia | Tinggi (80+ mps) | **Dibatasi (20 mps)** |
| **Pelbagai Pengguna** | Terhad (Peranti Disambung) | Tiada Had (melalui Perisian) | **Tiada Had (API) \+ Mudah Alih** |
| **Sejarah Sembang** | Sandaran Tempatan | Tiada (Permulaan Baru) | **Import 6 Bulan** |
| **Sembang Kumpulan** | Ya | Tidak | **Tidak (Hanya App, tiada penyegerakan)** |
| **Automatik** | Asas (Mesej Tidak Hadir) | Lanjutan (Bot) | **Lanjutan \+ Penggantian Manual** |
| **Kos** | Percuma | Per Mesej | **Hibrid (App Percuma / API Berbayar)** |

### **Jadual B: Kamus Acara Webhook**

| Nama Acara | Sumber | Kunci Muatan | Tindakan Diperlukan |
| :---- | :---- | :---- | :---- |
| messages | Pengguna | entry.changes.value.messages | **Cetus Jawapan Bot** |
| smb\_message\_echoes | Perniagaan (App) | ...value.statuses (gema) | **Jeda Bot (Penyerahan)** |
| smb\_app\_state\_sync | Perniagaan (App) | ...value.contacts | **Kemas kini Kenalan CRM** |
| template\_category\_update | Meta | ...value.message\_template\_status\_update | **Kemas kini Logik Belanjawan** |

### **Jadual C: Panduan Membaiki Masalah**

| Gejala | Sebab Mungkin | Penyelesaian |
| :---- | :---- | :---- |
| **Bot menjawab semasa manusia menaip** | Langganan smb\_message\_echoes hilang | Langgan Echoes; Implementasikan logik Jeda. |
| **Sejarah mesej hilang selepas mendaftar** | Tetingkap 24 jam tamat tempoh | **Kegagalan Kritikal.** Sejarah hilang. Cuba semula pendaftaran jika boleh. |
| **Ralat "Had Kadar Dilewati"** | Melebihi 20 mps | Implementasikan Bucket Token Redis dalam baris keluar. |
| **Tanda Hijau hilang** | Pemindahan menetapkan semula status OBA | Hantar semula permohonan OBA dengan dokumen akhbar. |
| **App Desktop tidak menyegerakkan** | OS Tidak Disokong (Windows/WearOS) | Gunakan Pelayar Web atau pelanggan MacOS untuk penyegerakan yang boleh dipercayai. |

#### **Karya dirujuk**

1. Pendaftaran Awal Pengguna Aplikasi WhatsApp Business (dikenali sebagai "Koeksistensi") - Meta for Developers, diakses pada 28 Januari 2026, [https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/onboarding-business-app-users/](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/onboarding-business-app-users/)  
2. Koeksistensi WhatsApp - Gunakan Aplikasi WhatsApp Business & API pada Nombor yang Sama, diakses pada 28 Januari 2026, [https://wetarseel.ai/whatsapp-coexistence-whatsapp-business-app-api-together/](https://wetarseel.ai/whatsapp-coexistence-whatsapp-business-app-api-together/)  
3. Pengenalan kepada SeaChat - Seasalt.ai, diakses pada 28 Januari 2026, [https://wiki.seasalt.ai/seachat/getting-started/01-seachat-intro/](https://wiki.seasalt.ai/seachat/getting-started/01-seachat-intro/)  
4. Selamat Datang ke Seasalt.ai, Pusat Hubungan Awan Kolaboratif - Seasalt.ai, diakses pada 28 Januari 2026, [https://seasalt.ai/en/blog/18-Seasalt.ai-collab-cloud-contact-center/](https://seasalt.ai/en/blog/18-seax-collab-cloud-contact-center/)  
5. Webhooks | Dokumentasi Pembangun, diakses pada 28 Januari 2026, [https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/overview/](https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/overview/)  
6. Bagaimana untuk Mengurus Bot WhatsApp Automatik untuk Pelbagai Penyewa dengan Nombor Telefon Unik dalam Aplikasi Berbilang Penyewa? - Stack Overflow, diakses pada 28 Januari 2026, [https://stackoverflow.com/questions/79271628/how-to-manage-automated-whatsapp-bots-for-multiple-tenants-with-unique-phone-num](https://stackoverflow.com/questions/79271628/how-to-manage-automated-whatsapp-bots-for-multiple-tenants-with-unique-phone-num)  
7. Mengenai Berbilang Agen | Pusat Bantuan WhatsApp, diakses pada 28 Januari 2026, [https://faq.whatsapp.com/395911122612120](https://faq.whatsapp.com/395911122612120)  
8. Koeksistensi WhatsApp: Panduan Akhir untuk Menggunakannya untuk Komunikasi WhatsApp - Zixflow, diakses pada 28 Januari 2026, [https://zixflow.com/blog/whatsapp-coexistence/](https://zixflow.com/blog/whatsapp-coexistence/)  
9. Sokongan WhatsApp AI dengan Penyerahan Manusia Menggunakan Gemini, Twilio, dan Supabase RAG - N8N, diakses pada 28 Januari 2026, [https://n8n.io/workflows/11648-ai-whatsapp-support-with-human-handoff-using-gemini-twilio-and-supabase-rag/](https://n8n.io/workflows/11648-ai-whatsapp-support-with-human-handoff-using-gemini-twilio-and-supabase-rag/)  
10. Koeksistensi WhatsApp - 360Dialog, diakses pada 28 Januari 2026, [https://docs.360dialog.com/partner/waba-management/whatsapp-coexistence](https://docs.360dialog.com/partner/waba-management/whatsapp-coexistence)  
11. Membina Arsitektur Webhook yang Boleh Diskalakan untuk Penyelesaian WhatsApp Tersuai - ChatArchitect, diakses pada 28 Januari 2026, [https://www.chatarchitect.com/news/building-a-scalable-webhook-architecture-for-custom-whatsapp-solutions](https://www.chatarchitect.com/news/building-a-scalable-webhook-architecture-for-custom-whatsapp-solutions)  
12. API Awan WhatsApp Menghantar Notifikasi Masuk Mesej Lama Berbilang Kali pada Webhook Saya - Stack Overflow, diakses pada 28 Januari 2026, [https://stackoverflow.com/questions/72894209/whatsapp-cloud-api-sending-old-message-inbound-notification-multiple-time-on-my](https://stackoverflow.com/questions/72894209/whatsapp-cloud-api-sending-old-message-inbound-notification-multiple-time-on-my)  
13. Tindakan Ganti Webhook | Dokumentasi Pembangun, diakses pada 28 Januari 2026, [https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/override/](https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/override/)  
14. Soalan Lazim | Dokumentasi Pembangun, diakses pada 28 Januari 2026, [https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/faq/](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/faq/)  
15. Mod Koeksistensi WhatsApp (Panduan 2026): Gunakan Aplikasi & API Bersama-sama + Harga Baru, diakses pada 28 Januari 2026, [https://chakrahq.com/article/whatsapp-coexistence-all-about-coexistence-mode-pricing-and-how-to-optimize-cost/](https://chakrahq.com/article/whatsapp-coexistence-all-about-coexistence-mode-pricing-and-how-to-optimize-cost/)  
16. Koeksistensi WhatsApp: Menggunakan Nombor Aplikasi WhatsApp Business dengan API WhatsApp - WANotifier, diakses pada 28 Januari 2026, [https://wanotifier.com/whatsapp-coexistence-guide/](https://wanotifier.com/whatsapp-coexistence-guide/)  
17. Harga pada Platform Perniagaan WhatsApp - Meta for Developers - Facebook, diakses pada 28 Januari 2026, [https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing](https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing)  
18. 14 Nov: Penyerahan Manusia-Bot yang Dipertingkatkan - Turn.io Learn, diakses pada 28 Januari 2026, [https://learn.turn.io/l/en/article/jynv5tspbm-14-nov-inbox-routing-improvements](https://learn.turn.io/l/en/article/jynv5tspbm-14-nov-inbox-routing-improvements)  
19. Alternatif Terbaik untuk Penyerahan Manusia dengan Agen AI? : r/n8n - Reddit, diakses pada 28 Januari 2026, [https://www.reddit.com/r/n8n/comments/1ko70xz/best_alternative_for_human_handover_with_ai_agents/](https://www.reddit.com/r/n8n/comments/1ko70xz/best_alternative_for_human_handover_with_ai_agents/)  
20. [Bug]: Saluran WhatsApp - Keadaan Perlumbaan Mencipta Beberapa Perbualan Semasa Memulakan Sembang dengan Berbilang Imej (Album) · Isu #13261 - GitHub, diakses pada 28 Januari 2026, [https://github.com/chatwoot/chatwoot/issues/13261](https://github.com/chatwoot/chatwoot/issues/13261)  
21. Integrasi Seasalt.ai dengan WhatsApp - Seasalt.ai, diakses pada 28 Januari 2026, [https://wiki.seasalt.ai/en/seachat/integrations/seax-seachat-whatsapp/](https://wiki.seasalt.ai/en/seachat/integrations/seax-seachat-whatsapp/)  
22. Penyelesaian Berbilang Rakan Kongsi | Dokumentasi Pembangun, diakses pada 28 Januari 2026, [https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/multi-partner-solutions/](https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/multi-partner-solutions/)  
23. Perbezaan Antara Akaun Perniagaan WhatsApp Berkongsi dan Tidak Berkongsi (WABAs), diakses pada 28 Januari 2026, [https://api.support.vonage.com/hc/en-us/articles/21336595205532-Difference-Between-Shared-and-Non-Shared-WhatsApp-Business-Accounts-WABAs](https://api.support.vonage.com/hc/en-us/articles/21336595205532-Difference-Between-Shared-and-Non-Shared-WhatsApp-Business-Accounts-WABAs)  
24. Gambaran Umum Platform Perniagaan WhatsApp dengan Twilio, diakses pada 28 Januari 2026, [https://www.twilio.com/docs/whatsapp/api](https://www.twilio.com/docs/whatsapp/api)  
25. Mengenai Platform Perniagaan WhatsApp - Meta for Developers - Facebook, diakses pada 28 Januari 2026, [https://developers.facebook.com/documentation/business-messaging/whatsapp/about-the-platform](https://developers.facebook.com/documentation/business-messaging/whatsapp/about-the-platform)  
26. Bagaimana untuk Mengaktifkan Balasan Agen Sejajar Masa pada WhatsApp Menggunakan OWL - Camel AI, diakses pada 28 Januari 2026, [https://www.camel-ai.org/blogs/mcp-servers-whatsapp-owl](https://www.camel-ai.org/blogs/mcp-servers-whatsapp-owl)
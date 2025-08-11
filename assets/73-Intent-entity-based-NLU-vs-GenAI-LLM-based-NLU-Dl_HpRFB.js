const a=`---
title: "NLU Berasaskan Niat/Entiti vs. NLU Berasaskan GenAI/LLM: Perbezaannya dalam Jutaan (Contoh dan Dolar)"
metatitle: "NLU Berasaskan Niat/Entiti vs. NLU Berasaskan GenAI/LLM"
date: 2024-03-14 00:22:19-07:00
modified_date: 2025-07-28T16:56:53Z
draft: false
author: Xuchen Yao
description: Buka kunci masa depan AI Perbualan - Mengapa peralihan daripada NLU berasaskan niat/entiti kepada GenAI/LLM adalah penting untuk skalabiliti, kecekapan kos, dan kebolehsuaian."
weight: 1
tags:
  - SeaChat
  - AI Tools
  - Customer Experience
  - Customer Story
  - NLU
image: /images/blog/73-Intent-entity-based-NLU-vs-GenAI-LLM-based-NLU/73-Intent-entity-based-NLU-vs-GenAI-LLM-based-NLU.png
canonicalURL: /blog/intent-entity-based-nlu-vs-genai-llm-based-nlu/
url: /blog/intent-entity-based-nlu-vs-genai-llm-based-nlu/
---

Kepada semua Pengarah Perkhidmatan Pelanggan atau Pemasaran, jika bos anda bertanya soalan berikut, hantarkan artikel ini kepada mereka:

"**Mengapa NLU berasaskan niat/entiti sudah lapuk dan LLM/GenAI adalah trend yang jelas?**"

Sistem Pemahaman Bahasa Asli (NLU) bertujuan untuk memproses dan menganalisis input bahasa asli, seperti teks atau pertuturan, untuk mendapatkan makna, mengekstrak maklumat yang relevan, dan memahami niat di sebalik komunikasi. NLU adalah komponen asas pelbagai aplikasi AI, termasuk pembantu maya, chatbot, alat analisis sentimen, sistem terjemahan bahasa, dan banyak lagi. Ia memainkan peranan penting dalam membolehkan interaksi manusia-komputer dan memudahkan pembangunan sistem pintar yang mampu memahami dan bertindak balas terhadap input bahasa asli.

Soalan ini datang daripada pelanggan sedia ada yang sedang memikirkan semula pendekatan IVR dan chatbot mereka. Mereka terikat dengan generasi sebelumnya bagi timbunan teknologi berasaskan NLU, yang biasanya ditawarkan oleh pemain teknologi besar seperti: [Microsoft Bot Framework](https://dev.botframework.com/) (atau [luis.ai](https://luis.ai")), [IBM Watson NLU](https://www.ibm.com/products/natural-language-understanding), [Google DialogFlow](https://cloud.google.com/dialogflow), [Meta’s wit.ai](https://wit.ai), [Amazon Lex](https://aws.amazon.com/lex/), [SAP Conversational AI](https://cai.tools.sap/), [Nuance Mix NLU](https://www.nuance.com/omni-channel-customer-engagement/ai-for-developers/nuance-mix/mix-nlu.html).

Cabaran adalah bahawa pelanggan utama seperti syarikat insurans, institusi kewangan, kerajaan, syarikat penerbangan/pengedar kereta, dan perjanjian besar lain telah menggunakan teknologi generasi terakhir. Tetapi kerana NLU berasaskan niat/entiti tidak boleh diskalakan, pelanggan perlu membelanjakan ratusan ribu hingga jutaan dolar setiap tahun untuk mengekalkan dan menaik taraf sistem NLU mereka. Kekurangan skalabiliti ini menyumbang kepada peningkatan kos penyelenggaraan, akhirnya menguntungkan pembekal NLU generasi terakhir dengan mengorbankan pelanggan mereka. Kerana mereka tidak boleh diskalakan, kos penyelenggaraan lebih tinggi dari tahun ke tahun.

## Mengapa NLU berasaskan niat/entiti gagal diskalakan dengan berkesan?

Sebab utama terletak pada kuasa diskriminatif model yang terhad. Berikut adalah pecahan mengapa ini berlaku:

1. **Keperluan Niat Minimum**: Model NLU memerlukan sekurang-kurangnya dua niat yang berbeza untuk dilatih dengan berkesan. Contohnya, apabila bertanya tentang cuaca, niat mungkin jelas, tetapi di sebalik setiap pertanyaan terdapat pelbagai niat yang berpotensi, seperti fallback atau pertanyaan yang tidak berkaitan dengan cuaca seperti "apa khabar?"

2. **Tuntutan Data Latihan**: Syarikat teknologi besar biasanya menuntut ribuan contoh positif bagi setiap niat untuk latihan yang berkesan. Set data yang luas ini diperlukan agar model dapat belajar dan membezakan antara niat yang berbeza dengan tepat.

3. **Mengimbangi Contoh Positif dan Negatif**: Menambah contoh positif kepada satu niat memerlukan kemasukan contoh negatif untuk niat lain. Pendekatan seimbang ini memastikan bahawa model NLU dapat belajar daripada kedua-dua contoh positif dan negatif dengan berkesan.

4. **Set Contoh yang Pelbagai**: Kedua-dua contoh positif dan negatif mestilah pelbagai untuk mengelakkan overfitting dan meningkatkan keupayaan model untuk menggeneralisasi merentasi konteks yang berbeza.

5. **Kerumitan Menambah Niat Baharu**: Menambah niat baharu kepada model NLU sedia ada melibatkan proses yang sukar. Ribuan contoh positif dan negatif mesti ditambah, diikuti dengan latihan semula model untuk mengekalkan prestasi asasnya. Proses ini menjadi semakin mencabar apabila bilangan niat bertambah.

## Kesan Preskripsi: Perangkap NLU Berasaskan Niat/Entiti

<center>
<img height="100%" width="50%" src="/images/blog/73-Intent-entity-based-NLU-vs-GenAI-LLM-based-NLU/the-prescribing-effect-the-pitfall-of-Intent-entity-based-NLU-01.jpg" alt="Kesan Preskripsi NLU berasaskan Niat/Entiti">

*Kesan Preskripsi NLU berasaskan Niat/Entiti*
</center>


Analog dengan fenomena dalam perubatan yang dikenali sebagai "**kaskade preskripsi**," cabaran skalabiliti NLU berasaskan niat/entiti boleh disamakan dengan kaskade preskripsi yang menakutkan. Bayangkan seorang individu warga emas yang dibebani dengan pelbagai ubat harian, setiap satu dipreskripsi untuk menangani kesan sampingan ubat sebelumnya. Senario ini terlalu biasa, di mana pengenalan Ubat A membawa kepada kesan sampingan yang memerlukan preskripsi Ubat B untuk menentangnya. Walau bagaimanapun, Ubat B memperkenalkan set kesan sampingannya sendiri, mendorong keperluan untuk Ubat C, dan seterusnya. Akibatnya, warga emas tersebut mendapati dirinya dibanjiri dengan segunung pil untuk diuruskan—satu kaskade preskripsi.

Metafora ilustratif lain ialah membina menara blok, dengan setiap blok mewakili ubat. Pada mulanya, Ubat A diletakkan, tetapi ketidakstabilannya (kesan sampingan) mendorong penambahan Ubat B untuk menstabilkannya. Walau bagaimanapun, penambahan baru ini mungkin tidak berintegrasi dengan lancar, menyebabkan menara semakin condong (kesan sampingan B). Dalam usaha untuk membetulkan ketidakstabilan ini, lebih banyak blok (Ubat C, D, dll.) ditambah, memburukkan lagi ketidakstabilan menara dan kerentanannya untuk runtuh—satu representasi komplikasi kesihatan yang berpotensi timbul daripada pelbagai ubat.

<center>
<img height="60%" width="60%" src="/images/blog/73-Intent-entity-based-NLU-vs-GenAI-LLM-based-NLU/the-prescribing-effect-the-pitfall-of-Intent-entity-based-NLU-02.jpg" alt="Metafora ilustratif lain untuk NLU berasaskan niat/entiti ialah membina menara blok">

*Metafora ilustratif lain untuk NLU berasaskan niat/entiti ialah membina menara blok*
</center>

Begitu juga, dengan setiap niat baharu yang ditambahkan pada sistem NLU, menara blok metafora semakin tinggi, meningkatkan ketidakstabilan. Keperluan untuk pengukuhan meningkat, menyebabkan kos penyelenggaraan yang lebih tinggi. Akibatnya, walaupun NLU berasaskan niat/entiti mungkin kelihatan menarik kepada pembekal pada mulanya, realitinya adalah ia menjadi terlalu membebankan pelanggan untuk dikekalkan. Sistem ini kekurangan skalabiliti, menimbulkan cabaran yang signifikan kepada pembekal dan pelanggan.
Dalam bahagian seterusnya, kami akan meneroka bagaimana NLU berasaskan GenAI/LLM menawarkan alternatif yang lebih mampan dan boleh diskalakan untuk menangani cabaran ini dengan berkesan.

## NLU Berasaskan GenAI/LLM: Penyelesaian yang Berdaya Tahan

NLU berasaskan GenAI/LLM menawarkan penyelesaian yang mantap kepada cabaran skalabiliti yang dihadapi oleh sistem berasaskan niat/entiti. Ini terutamanya disebabkan oleh dua faktor utama:

1. **Pra-Latihan dan Pengetahuan Dunia**: Model GenAI/LLM dilatih terlebih dahulu pada sejumlah besar data, membolehkan mereka mewarisi kekayaan pengetahuan dunia. Pengetahuan terkumpul ini memainkan peranan penting dalam membezakan antara pelbagai niat, dengan itu meningkatkan keupayaan diskriminatif model terhadap contoh negatif.

2. **Pembelajaran Few-Shot**: Salah satu ciri utama NLU berasaskan GenAI/LLM ialah keupayaannya untuk menggunakan teknik pembelajaran few-shot. Tidak seperti kaedah tradisional yang memerlukan data latihan yang luas untuk setiap niat, pembelajaran few-shot membolehkan model belajar daripada hanya beberapa contoh. Pendekatan pembelajaran yang cekap ini mengukuhkan objektif yang dimaksudkan dengan data minimum, mengurangkan beban latihan dengan ketara.

Pertimbangkan senario ini: apabila disajikan dengan pertanyaan "Bagaimana cuaca hari ini?" sebagai pembaca, anda secara naluri mengenalinya sebagai pertanyaan tentang cuaca di tengah-tengah banyak ayat yang ditemui setiap hari. Keupayaan semula jadi untuk membezakan niat ini adalah serupa dengan konsep pembelajaran few-shot.

Sebagai orang dewasa, otak kita dilatih terlebih dahulu dengan perbendaharaan kata yang luas, dianggarkan sekitar 150 juta perkataan pada usia 20 tahun. Pendedahan linguistik yang meluas ini membolehkan kita memahami niat baharu dengan cepat apabila menemuinya, hanya memerlukan beberapa contoh untuk pengukuhan.

Urban Dictionary berfungsi sebagai sumber yang sangat baik untuk meneroka contoh pembelajaran few-shot dalam tindakan, yang seterusnya menggambarkan keberkesanannya dalam memudahkan pemahaman yang cepat.

Keupayaan pembelajaran few-shot yang wujud dalam NLU berasaskan GenAI/LLM adalah penting dalam mengurangkan kos dan membolehkan skalabiliti. Dengan sebahagian besar latihan telah selesai semasa pra-latihan, penalaan halus model dengan bilangan contoh minimum menjadi tumpuan utama, menyelaraskan proses dan meningkatkan skalabiliti.

## NLU Berasaskan GenAI/LLM: Memberikan Hasil dan Bukti

Sehingga Mac 2024, landskap pemprosesan bahasa semula jadi (NLP) telah mengalami perubahan yang signifikan, ditandai dengan kemunculan NLU berasaskan GenAI/LLM sebagai pengubah permainan. Kemajuan yang pernah dominan dalam inovasi NLP telah mendatar sejak 2-3 tahun yang lalu, seperti yang dibuktikan oleh genangan dalam kemajuan terkini. Jika anda menyemak <a href="https://github.com/sebastianruder/NLP-progress">kemajuan NLP</a> yang pernah paling popular untuk keadaan seni, ia kebanyakannya berhenti 2-3 tahun yang lalu:

<center>
<img height="80%" width="80%" src="/images/blog/73-Intent-entity-based-NLU-vs-GenAI-LLM-based-NLU/nlp-progress.png" alt="Kami pernah menjejaki inovasi NLP di Repo Github ini. Kemas kini kebanyakannya berhenti 2-3 tahun yang lalu.">

*Kami pernah menjejaki inovasi NLP di Repo Github ini. Kemas kini kebanyakannya berhenti 2-3 tahun yang lalu.*
</center>

Salah satu penanda aras penting yang menggariskan perubahan paradigma ini ialah <a href="https://super.gluebenchmark.com/leaderboard/">papan pendahulu SuperGlue</a>, dengan entri terbarunya pada Disember 2022. Menariknya, jangka masa ini bertepatan dengan pengenalan ChatGPT (3.5), yang mencetuskan gelombang kejutan di seluruh komuniti NLP.

<center>
<img height="80%" width="80%" src="/images/blog/73-Intent-entity-based-NLU-vs-GenAI-LLM-based-NLU/superglue-leaderboard.png" alt="Papan pendahulu SuperGlue popular sehingga pengenalan ChatGPT">

*Papan pendahulu SuperGlue popular sehingga pengenalan ChatGPT*
</center>

Kertas kerja seminal GPT-3, yang bertajuk "<a href="https://arxiv.org/abs/2005.14165">Model Bahasa adalah Pembelajar Few-Shot</a>", menawarkan bukti yang meyakinkan tentang keberkesanan pembelajaran few-shot. Rajah 2.1 di halaman 7 dalam kertas kerja tersebut menggambarkan perbezaan antara pendekatan pembelajaran zero-shot, one-shot, dan few-shot, menonjolkan keunggulan yang terakhir dari segi kecekapan dan keberkesanan pembelajaran.


<center>
<img height="80%" width="80%" src="/images/blog/73-Intent-entity-based-NLU-vs-GenAI-LLM-based-NLU/few-shot-learners.png" alt="Perbezaan antara pendekatan pembelajaran zero-shot, one-shot, dan few-shot">

*Perbezaan antara pendekatan pembelajaran zero-shot, one-shot, dan few-shot*
</center>

Tambahan pula, mengesahkan keberkesanan NLU berasaskan GenAI/LLM ialah Jadual 3.8 di halaman 19, yang menyediakan perbandingan langsung antara kaedah NLU diselia tradisional dan pembelajaran Few-Shot GPT-3. Dalam perbandingan ini, GPT-3 Few-Shot mengatasi BERT-Large yang telah ditala halus, perwakilan pembelajaran diselia yang digunakan oleh sistem NLU berasaskan niat/entiti, merentasi pelbagai tugas.

<center>
<img height="100%" width="100%" src="/images/blog/73-Intent-entity-based-NLU-vs-GenAI-LLM-based-NLU/gpt-performance.png"  alt="GPT-3 Few-Shot mengatasi BERT-Large yang telah ditala halus merentasi pelbagai tugas">

*GPT-3 Few-Shot mengatasi BERT-Large yang telah ditala halus merentasi pelbagai tugas*
</center>

Keunggulan GPT-3 Few-Shot bukan sahaja jelas dalam ketepatannya tetapi juga dalam kecekapan kosnya. Kedua-dua persediaan awal dan kos penyelenggaraan yang berkaitan dengan NLU berasaskan GenAI/LLM adalah jauh lebih rendah berbanding kaedah tradisional.

Bukti empirikal yang dibentangkan dalam komuniti NLP menggariskan impak transformatif NLU berasaskan GenAI/LLM. Ia telah menunjukkan ketepatan dan kecekapan yang tiada tandingan. Seterusnya, mari kita semak keberkesanan kosnya.

## Keperluan Data Latihan: Analisis Perbandingan

Perbandingan yang mendedahkan antara NLU berasaskan niat/entiti dan NLU berasaskan GenAI/LLM menjelaskan keperluan data latihan yang berbeza. Rajah 3.8 di halaman 20 memberikan kontras yang ketara:

<center>
<img height="100%" width="100%" src="/images/blog/73-Intent-entity-based-NLU-vs-GenAI-LLM-based-NLU/superglue-performance.png" alt="NLU berasaskan GenAI/LLM memerlukan data yang jauh lebih kecil untuk latihan">

*NLU berasaskan GenAI/LLM memerlukan data yang jauh lebih kecil untuk latihan*
</center>

- **NLU Pembelajaran Diselia**: Pendekatan tradisional ini memerlukan set data yang luas, dengan lebih daripada setengah juta contoh (630K) diperlukan untuk latihan yang berkesan.

- **GPT-3 Few-Shot**: Sebaliknya, NLU berasaskan GenAI/LLM menunjukkan kecekapan yang luar biasa, dengan hanya 32 contoh bagi setiap tugas yang mencukupi untuk penalaan yang berkesan.

Besarnya perbezaan ini sangat ketara: **630,000 contoh berbanding hanya 32**. Pengurangan drastik dalam keperluan data latihan ini diterjemahkan kepada penjimatan kos yang signifikan untuk perniagaan yang mengguna pakai NLU berasaskan GenAI/LLM.

Tambahan pula, impak tersirat pada garis masa pembangunan adalah mendalam. Dengan NLU berasaskan GenAI/LLM, proses latihan yang dipendekkan mempercepatkan penggunaan sistem NLU dengan faktor magnitud berganda, memudahkan penyesuaian dan inovasi pantas dalam bidang pemprosesan bahasa semula jadi.

Pada dasarnya, perbandingan ini menggariskan potensi transformatif NLU berasaskan GenAI/LLM, menawarkan kecekapan dan keberkesanan kos yang tiada tandingan dalam keperluan data latihan dan garis masa pembangunan.

## Menerima Evolusi: Mengapa NLU Berasaskan GenAI/LLM Berkuasa


Dalam bidang pemahaman bahasa semula jadi, peralihan daripada sistem berasaskan niat/entiti kepada penyelesaian berasaskan GenAI/LLM tidak dapat dipertikaikan sedang berlaku. Peralihan ini didorong oleh pelbagai faktor yang menggariskan batasan NLU berasaskan niat/entiti tradisional dan kelebihan menarik yang ditawarkan oleh pendekatan berasaskan GenAI/LLM.

NLU berasaskan niat/entiti semakin dianggap lapuk atas beberapa sebab yang meyakinkan:

1. **Fleksibiliti Terhad**: Sistem NLU tradisional bergantung pada niat dan entiti yang telah ditetapkan, mengehadkan kebolehsuaian chatbot dan IVR kepada input pengguna yang menyimpang daripada kategori yang telah ditetapkan ini.

2. **Cabaran Penyelenggaraan**: Apabila sistem ini berskala dan bilangan niat dan entiti bertambah, kerumitan dan masa yang diperlukan untuk penyelenggaraan dan kemas kini meningkat secara eksponen.

3. **Kekurangan Pemahaman Kontekstual**: Sistem ini sering gagal memahami nuansa kontekstual yang rumit dalam perbualan, mengakibatkan respons yang tidak tepat atau keperluan untuk input pengguna tambahan untuk menjelaskan niat.

4. **Kekurangan Penjanaan**: Sistem NLU berasaskan niat dan entiti secara intrinsik terhad dalam keupayaan mereka untuk menjana teks, mengehadkan mereka kepada tugas yang berpusat pada pengelasan niat dan pengekstrakan entiti. Ini mengehadkan kebolehsuaian chatbot dan IVR, sering membawa kepada respons monoton yang gagal selaras dengan konteks perbualan.

Berbeza sekali, NLU berasaskan GenAI/LLM muncul sebagai trend yang berlaku kerana atribut transformatifnya:

1. **Pembelajaran Adaptif**: Model GenAI mempunyai kapasiti untuk belajar secara dinamik daripada perbualan masa nyata, membolehkan mereka menyesuaikan diri dengan topik baharu dan tingkah laku pengguna secara autonomi, tanpa memerlukan kemas kini manual.

2. **Pemahaman Kontekstual**: Model-model ini cemerlang dalam memahami nuansa kontekstual yang rumit dalam perbualan, menghasilkan respons yang lebih tepat dan relevan yang bergema dengan pengguna.

3. **Pembelajaran Few-Shot**: Model GenAI boleh dilatih dengan contoh minimum, menyelaraskan proses latihan dan mengurangkan kebergantungan pada definisi niat dan entiti yang jelas.

4. **Penjanaan Bahasa Asli**: GenAI/LLM mempunyai keupayaan untuk menjana teks, memperkasakan mereka untuk mencipta chatbot dan aplikasi NLP lain yang memberikan respons semula jadi dan relevan secara kontekstual.

Masa depan AI perbualan bergantung pada sistem yang boleh belajar dan menyesuaikan diri secara organik, memberikan pengguna pengalaman yang lancar dan intuitif. NLU berasaskan GenAI/LLM merangkumi evolusi ini, menawarkan pendekatan yang dinamik dan fleksibel yang melangkaui batasan sistem berasaskan niat/entiti tradisional.

Pada dasarnya, trajektori NLU yang berlaku secara tegas ditentukan oleh kebangkitan pendekatan berasaskan GenAI/LLM, menandakan era baharu AI perbualan yang mengutamakan kebolehsuaian, kontekstualiti, dan berpusatkan pengguna.
`;export{a as default};

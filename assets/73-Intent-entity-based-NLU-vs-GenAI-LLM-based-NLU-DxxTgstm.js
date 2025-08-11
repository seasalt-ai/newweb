const a=`---
title: "NLU Berbasis Intent/Entitas vs. NLU Berbasis GenAI/LLM: Perbedaannya Jutaan (Contoh dan Dolar)"
metatitle: "NLU Berbasis Intent/Entitas vs. NLU Berbasis GenAI/LLM"
date: 2024-03-14 00:22:19-07:00
modified_date: 2025-07-28T16:56:53Z
draft: false
author: Xuchen Yao
description: Buka masa depan AI Percakapan - Mengapa pergeseran dari NLU berbasis intent/entitas ke GenAI/LLM sangat penting untuk skalabilitas, efisiensi biaya, dan adaptabilitas."
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

Kepada semua Direktur Layanan Pelanggan atau Pemasaran, jika atasan Anda menanyakan pertanyaan berikut, kirimkan artikel ini kepada mereka:

"**Mengapa NLU berbasis intent/entitas sudah usang dan mengapa NLU berbasis LLM/GenAI adalah tren yang jelas?**"

Sistem Natural Language Understanding (NLU) bertujuan untuk memproses dan menganalisis input bahasa alami, seperti teks atau ucapan, untuk mendapatkan makna, mengekstrak informasi yang relevan, dan memahami maksud di balik komunikasi. NLU adalah komponen fundamental dari berbagai aplikasi AI, termasuk asisten virtual, chatbot, alat analisis sentimen, sistem terjemahan bahasa, dan banyak lagi. Ini memainkan peran penting dalam memungkinkan interaksi manusia-komputer dan memfasilitasi pengembangan sistem cerdas yang mampu memahami dan menanggapi input bahasa alami.

Pertanyaan ini berasal dari klien yang sudah mapan yang sedang memikirkan kembali pendekatan IVR dan chatbot mereka. Mereka terkunci dalam tumpukan teknologi berbasis NLU generasi sebelumnya, yang biasanya ditawarkan oleh pemain teknologi besar seperti: [Microsoft Bot Framework](https://dev.botframework.com/) (atau [luis.ai](https://luis.ai")), [IBM Watson NLU](https://www.ibm.com/products/natural-language-understanding), [Google DialogFlow](https://cloud.google.com/dialogflow), [Meta’s wit.ai](https://wit.ai), [Amazon Lex](https://aws.amazon.com/lex/), [SAP Conversational AI](https://cai.tools.sap/), [Nuance Mix NLU](https://www.nuance.com/omni-channel-customer-engagement/ai-for-developers/nuance-mix/mix-nlu.html).

Tantangannya adalah bahwa klien-klien besar seperti perusahaan asuransi, lembaga keuangan, pemerintah, maskapai penerbangan/dealer mobil, dan kesepakatan besar lainnya telah menerapkan teknologi generasi terakhir. Namun karena NLU berbasis intent/entitas tidak dapat diskalakan, klien harus menghabiskan ratusan ribu hingga jutaan dolar setiap tahun untuk memelihara dan meningkatkan sistem NLU mereka. Kurangnya skalabilitas ini berkontribusi pada peningkatan biaya pemeliharaan, yang pada akhirnya menguntungkan penyedia NLU generasi terakhir dengan mengorbankan klien mereka. Karena mereka tidak dapat diskalakan, biaya pemeliharaan lebih tinggi dari tahun ke tahun.

## Mengapa NLU berbasis intent/entitas gagal diskalakan secara efektif?

Alasan utamanya terletak pada kekuatan diskriminatif model yang terbatas. Berikut adalah rincian mengapa hal ini terjadi:

1. **Persyaratan Intent Minimum**: Model NLU membutuhkan setidaknya dua intent yang berbeda untuk dilatih secara efektif. Misalnya, ketika bertanya tentang cuaca, intent mungkin jelas, tetapi di balik setiap kueri ada beberapa intent potensial, seperti fallback atau pertanyaan yang tidak terkait dengan cuaca seperti "apa kabar?"

2. **Tuntutan Data Pelatihan**: Perusahaan teknologi besar biasanya menuntut ribuan contoh positif per intent untuk pelatihan yang efektif. Kumpulan data yang luas ini diperlukan agar model dapat belajar dan membedakan antara intent yang berbeda secara akurat.

3. **Menyeimbangkan Contoh Positif dan Negatif**: Menambahkan contoh positif ke satu intent memerlukan penyertaan contoh negatif untuk intent lain. Pendekatan seimbang ini memastikan bahwa model NLU dapat belajar dari instance positif dan negatif secara efektif.

4. **Set Contoh yang Beragam**: Baik contoh positif maupun negatif harus beragam untuk mencegah overfitting dan meningkatkan kemampuan model untuk menggeneralisasi di berbagai konteks.

5. **Kompleksitas Menambahkan Intent Baru**: Menambahkan intent baru ke model NLU yang ada melibatkan proses yang melelahkan. Ribuan contoh positif dan negatif harus ditambahkan, diikuti dengan pelatihan ulang model untuk mempertahankan kinerja dasarnya. Proses ini menjadi semakin menantang seiring bertambahnya jumlah intent.

## Efek Resep: Jebakan NLU Berbasis Intent/Entitas

<center>
<img height="100%" width="50%" src="/images/blog/73-Intent-entity-based-NLU-vs-GenAI-LLM-based-NLU/the-prescribing-effect-the-pitfall-of-Intent-entity-based-NLU-01.jpg" alt="Efek Resep NLU berbasis Intent/Entitas">

*Efek Resep NLU berbasis Intent/Entitas*
</center>


Analog dengan fenomena dalam kedokteran yang dikenal sebagai "**kaskade resep**," tantangan skalabilitas NLU berbasis intent/entitas dapat disamakan dengan kaskade resep yang menakutkan. Bayangkan seorang individu lansia yang dibebani dengan banyak obat harian, masing-masing diresepkan untuk mengatasi efek samping dari obat sebelumnya. Skenario ini terlalu akrab, di mana pengenalan Obat A menyebabkan efek samping yang memerlukan resep Obat B untuk mengatasinya. Namun, Obat B memperkenalkan serangkaian efek sampingnya sendiri, yang mendorong kebutuhan akan Obat C, dan seterusnya. Akibatnya, orang lansia tersebut menemukan dirinya dibanjiri dengan segunung pil untuk dikelola—sebuah kaskade resep.

Metafora ilustratif lainnya adalah membangun menara balok, dengan setiap balok mewakili obat. Awalnya, Obat A ditempatkan, tetapi ketidakstabilannya (efek samping) mendorong penambahan Obat B untuk menstabilkannya. Namun, penambahan baru ini mungkin tidak terintegrasi dengan mulus, menyebabkan menara semakin miring (efek samping dari B). Dalam upaya untuk memperbaiki ketidakstabilan ini, lebih banyak balok (Obat C, D, dll.) ditambahkan, memperburuk ketidakstabilan menara dan kerentanannya terhadap keruntuhan—representasi dari potensi komplikasi kesehatan yang timbul dari banyak obat.

<center>
<img height="60%" width="60%" src="/images/blog/73-Intent-entity-based-NLU-vs-GenAI-LLM-based-NLU/the-prescribing-effect-the-pitfall-of-Intent-entity-based-NLU-02.jpg" alt="Metafora ilustratif lainnya untuk NLU berbasis intent/entitas adalah membangun menara balok">

*Metafora ilustratif lainnya untuk NLU berbasis intent/entitas adalah membangun menara balok*
</center>

Demikian pula, dengan setiap intent baru yang ditambahkan ke sistem NLU, menara balok metaforis tumbuh lebih tinggi, meningkatkan ketidakstabilan. Kebutuhan akan penguatan meningkat, yang mengakibatkan biaya pemeliharaan yang lebih tinggi. Akibatnya, meskipun NLU berbasis intent/entitas mungkin tampak menarik bagi penyedia pada awalnya, kenyataannya adalah bahwa itu menjadi sangat membebani klien untuk dipelihara. Sistem ini kurang skalabilitas, menimbulkan tantangan signifikan bagi penyedia dan klien.
Di bagian selanjutnya, kita akan mengeksplorasi bagaimana NLU berbasis GenAI/LLM menawarkan alternatif yang lebih berkelanjutan dan skalabel untuk mengatasi tantangan ini secara efektif.

## NLU Berbasis GenAI/LLM: Solusi yang Tangguh

NLU berbasis GenAI/LLM menawarkan solusi yang kuat untuk tantangan skalabilitas yang dihadapi oleh sistem berbasis intent/entitas. Hal ini terutama disebabkan oleh dua faktor kunci:

1. **Pra-Pelatihan dan Pengetahuan Dunia**: Model GenAI/LLM dilatih sebelumnya pada sejumlah besar data, memungkinkan mereka untuk mewarisi kekayaan pengetahuan dunia. Pengetahuan yang terakumulasi ini memainkan peran penting dalam membedakan antara berbagai intent, sehingga meningkatkan kemampuan diskriminatif model terhadap contoh negatif.

2. **Pembelajaran Few-Shot**: Salah satu fitur utama NLU berbasis GenAI/LLM adalah kemampuannya untuk menggunakan teknik pembelajaran few-shot. Tidak seperti metode tradisional yang membutuhkan data pelatihan ekstensif untuk setiap intent, pembelajaran few-shot memungkinkan model untuk belajar hanya dari beberapa contoh. Pendekatan pembelajaran yang efisien ini memperkuat tujuan yang dimaksudkan dengan data minimal, secara signifikan mengurangi beban pelatihan.

Pertimbangkan skenario ini: ketika disajikan dengan kueri "Bagaimana cuaca hari ini?" sebagai pembaca, Anda secara naluriah mengenalinya sebagai pertanyaan tentang cuaca di tengah banyaknya kalimat yang ditemui setiap hari. Kemampuan bawaan untuk membedakan maksud ini mirip dengan konsep pembelajaran few-shot.

Sebagai orang dewasa, otak kita dilatih sebelumnya dengan kosakata yang luas, diperkirakan sekitar 150 juta kata pada usia 20 tahun. Paparan linguistik yang luas ini memungkinkan kita untuk dengan cepat memahami maksud baru saat menemukannya, hanya membutuhkan beberapa contoh untuk penguatan.

Urban Dictionary berfungsi sebagai sumber yang sangat baik untuk menjelajahi contoh pembelajaran few-shot dalam tindakan, yang selanjutnya mengilustrasikan efektivitasnya dalam memfasilitasi pemahaman yang cepat.

Kemampuan pembelajaran few-shot yang melekat pada NLU berbasis GenAI/LLM sangat penting dalam mengurangi biaya dan memungkinkan skalabilitas. Dengan sebagian besar pelatihan sudah selesai selama pra-pelatihan, penyetelan halus model dengan jumlah contoh minimal menjadi fokus utama, merampingkan proses dan meningkatkan skalabilitas.

## NLU Berbasis GenAI/LLM: Memberikan Hasil dan Bukti

Per Maret 2024, lanskap pemrosesan bahasa alami (NLP) telah mengalami pergeseran signifikan, ditandai dengan munculnya NLU berbasis GenAI/LLM sebagai pengubah permainan. Kemajuan yang dulunya dominan dalam inovasi NLP telah mendatar selama 2-3 tahun terakhir, sebagaimana dibuktikan oleh stagnasi dalam kemajuan state-of-the-art. Jika Anda memeriksa <a href="https://github.com/sebastianruder/NLP-progress">kemajuan NLP</a> yang dulunya paling populer untuk state of the art, sebagian besar berhenti 2-3 tahun yang lalu:

<center>
<img height="80%" width="80%" src="/images/blog/73-Intent-entity-based-NLU-vs-GenAI-LLM-based-NLU/nlp-progress.png" alt="Kami dulu melacak inovasi NLP di Repo Github ini. Pembaruan sebagian besar berhenti 2-3 tahun yang lalu.">

*Kami dulu melacak inovasi NLP di Repo Github ini. Pembaruan sebagian besar berhenti 2-3 tahun yang lalu.*
</center>

Salah satu tolok ukur penting yang menggarisbawahi pergeseran paradigma ini adalah <a href="https://super.gluebenchmark.com/leaderboard/">papan peringkat SuperGlue</a>, dengan entri terbarunya pada Desember 2022. Menariknya, kerangka waktu ini bertepatan dengan pengenalan ChatGPT (3.5), yang menimbulkan gelombang kejutan di seluruh komunitas NLP.

<center>
<img height="80%" width="80%" src="/images/blog/73-Intent-entity-based-NLU-vs-GenAI-LLM-based-NLU/superglue-leaderboard.png" alt="Papan peringkat SuperGlue populer hingga diperkenalkannya ChatGPT">

*Papan peringkat SuperGlue populer hingga diperkenalkannya ChatGPT*
</center>

Makalah seminal GPT-3, yang berjudul "<a href="https://arxiv.org/abs/2005.14165">Model Bahasa adalah Pembelajar Few-Shot</a>", menawarkan bukti kuat tentang efektivitas pembelajaran few-shot. Gambar 2.1 di halaman 7 dalam makalah tersebut menggambarkan perbedaan antara pendekatan pembelajaran zero-shot, one-shot, dan few-shot, menyoroti keunggulan yang terakhir dalam hal efisiensi dan efektivitas pembelajaran.


<center>
<img height="80%" width="80%" src="/images/blog/73-Intent-entity-based-NLU-vs-GenAI-LLM-based-NLU/few-shot-learners.png" alt="Perbedaan antara pendekatan pembelajaran zero-shot, one-shot, dan few-shot">

*Perbedaan antara pendekatan pembelajaran zero-shot, one-shot, dan few-shot*
</center>

Lebih lanjut menguatkan efektivitas NLU berbasis GenAI/LLM adalah Tabel 3.8 di halaman 19, yang memberikan perbandingan langsung antara metode NLU yang diawasi tradisional dan pembelajaran Few-Shot GPT-3. Dalam perbandingan ini, GPT-3 Few-Shot melampaui Fine-tuned BERT-Large, representasi pembelajaran yang diawasi yang digunakan oleh sistem NLU berbasis intent/entitas, di berbagai tugas.

<center>
<img height="100%" width="100%" src="/images/blog/73-Intent-entity-based-NLU-vs-GenAI-LLM-based-NLU/gpt-performance.png"  alt="GPT-3 Few-Shot melampaui Fine-tuned BERT-Large di berbagai tugas">

*GPT-3 Few-Shot melampaui Fine-tuned BERT-Large di berbagai tugas*
</center>

Keunggulan GPT-3 Few-Shot tidak hanya terlihat pada akurasinya tetapi juga pada efisiensi biayanya. Baik biaya pengaturan awal maupun pemeliharaan yang terkait dengan NLU berbasis GenAI/LLM secara signifikan lebih rendah dibandingkan dengan metode tradisional.

Bukti empiris yang disajikan dalam komunitas NLP menggarisbawahi dampak transformatif NLU berbasis GenAI/LLM. Ini telah menunjukkan akurasi dan efisiensi yang tak tertandingi. Selanjutnya, mari kita periksa efektivitas biayanya.

## Persyaratan Data Pelatihan: Analisis Komparatif

Perbandingan yang mengungkapkan antara NLU berbasis intent/entitas dan NLU berbasis GenAI/LLM menjelaskan persyaratan data pelatihan yang berbeda. Gambar 3.8 di halaman 20 memberikan kontras yang mencolok:

<center>
<img height="100%" width="100%" src="/images/blog/73-Intent-entity-based-NLU-vs-GenAI-LLM-based-NLU/superglue-performance.png" alt="NLU berbasis GenAI/LLM membutuhkan data yang jauh lebih sedikit untuk pelatihan">

*NLU berbasis GenAI/LLM membutuhkan data yang jauh lebih sedikit untuk pelatihan*
</center>

- **NLU Pembelajaran Terawasi**: Pendekatan tradisional ini membutuhkan kumpulan data yang ekstensif, dengan lebih dari setengah juta contoh (630K) diperlukan untuk pelatihan yang efektif.

- **GPT-3 Few-Shot**: Sebaliknya, NLU berbasis GenAI/LLM menunjukkan efisiensi yang luar biasa, dengan hanya 32 contoh per tugas yang cukup untuk penyetelan yang efektif.

Besarnya perbedaan ini sangat mencolok: **630.000 contoh versus hanya 32**. Pengurangan drastis dalam persyaratan data pelatihan ini berarti penghematan biaya yang signifikan bagi bisnis yang mengadopsi NLU berbasis GenAI/LLM.

Selain itu, dampak tersirat pada jadwal pengembangan sangat mendalam. Dengan NLU berbasis GenAI/LLM, proses pelatihan yang dipersingkat mempercepat penyebaran sistem NLU dengan faktor besaran ganda, memfasilitasi adaptasi dan inovasi yang cepat dalam ranah pemrosesan bahasa alami.

Pada intinya, perbandingan ini menggarisbawahi potensi transformatif NLU berbasis GenAI/LLM, menawarkan efisiensi dan efektivitas biaya yang tak tertandingi dalam persyaratan data pelatihan dan jadwal pengembangan.

## Merangkul Evolusi: Mengapa NLU Berbasis GenAI/LLM Berkuasa


Dalam ranah pemahaman bahasa alami, transisi dari sistem berbasis intent/entitas ke solusi berbasis GenAI/LLM tidak dapat disangkal sedang berlangsung. Pergeseran ini didorong oleh banyak faktor yang menggarisbawahi keterbatasan NLU berbasis intent/entitas tradisional dan keuntungan menarik yang ditawarkan oleh pendekatan berbasis GenAI/LLM.

NLU berbasis intent/entitas semakin dianggap usang karena beberapa alasan yang meyakinkan:

1. **Fleksibilitas Terbatas**: Sistem NLU tradisional bergantung pada intent dan entitas yang telah ditentukan sebelumnya, membatasi kemampuan chatbot dan IVR untuk beradaptasi dengan input pengguna yang menyimpang dari kategori yang telah ditentukan ini.

2. **Tantangan Pemeliharaan**: Seiring dengan skalanya sistem ini dan proliferasi jumlah intent dan entitas, kompleksitas dan waktu yang dibutuhkan untuk pemeliharaan dan pembaruan meningkat secara eksponensial.

3. **Kurangnya Pemahaman Kontekstual**: Sistem ini sering gagal dalam memahami nuansa kontekstual yang rumit dari percakapan, yang mengakibatkan respons yang tidak akurat atau kebutuhan akan input pengguna tambahan untuk mengklarifikasi maksud.

4. **Kurangnya Generasi**: Sistem NLU berbasis intent dan entitas secara inheren terbatas dalam kemampuannya untuk menghasilkan teks, membatasi mereka pada tugas-tugas yang berpusat pada klasifikasi intent dan ekstraksi entitas. Hal ini membatasi kemampuan chatbot dan IVR untuk beradaptasi, seringkali mengarah pada respons monoton yang gagal selaras dengan konteks percakapan.

Berbeda sekali, NLU berbasis GenAI/LLM muncul sebagai tren yang berlaku karena atribut transformatifnya:

1. **Pembelajaran Adaptif**: Model GenAI memiliki kapasitas untuk belajar secara dinamis dari percakapan real-time, memungkinkan mereka untuk menyesuaikan diri dengan topik baru dan perilaku pengguna secara otonom, tanpa memerlukan pembaruan manual.

2. **Pemahaman Kontekstual**: Model-model ini unggul dalam memahami nuansa kontekstual yang rumit dari percakapan, menghasilkan respons yang lebih tepat dan relevan yang beresonansi dengan pengguna.

3. **Pembelajaran Few-Shot**: Model GenAI dapat dilatih dengan contoh minimal, merampingkan proses pelatihan dan mengurangi ketergantungan pada definisi intent dan entitas eksplisit.

4. **Generasi Bahasa Alami**: GenAI/LLM memiliki kemampuan untuk menghasilkan teks, memberdayakan mereka untuk membuat chatbot dan aplikasi NLP lainnya yang memberikan respons alami dan relevan secara kontekstual.

Masa depan AI percakapan bergantung pada sistem yang dapat belajar dan beradaptasi secara organik, memberikan pengguna pengalaman yang mulus dan intuitif. NLU berbasis GenAI/LLM mewujudkan evolusi ini, menawarkan pendekatan yang dinamis dan fleksibel yang melampaui batasan sistem berbasis intent/entitas tradisional.

Pada intinya, lintasan NLU yang berlaku secara tegas ditentukan oleh kebangkitan pendekatan berbasis GenAI/LLM, mengantarkan era baru AI percakapan yang memprioritaskan adaptabilitas, kontekstualitas, dan sentrisitas pengguna.
`;export{a as default};

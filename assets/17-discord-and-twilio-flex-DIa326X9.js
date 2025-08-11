const a=`---
title: "Discord (3/3): Discord & Twilio Flex: Membawa Flex Contact Center ke Wilayah yang Belum Dipetakan"
metatitle: "Discord (3/3): Twilio Flex Contact Center di Discord"
date: 2022-06-07 12:32:24-07:00
modified_date: 2025-07-28T16:56:53Z
draft: false
author: Kim Dodds
description: "Dalam blog ini, kami akan mendemonstrasikan bagaimana Seasalt.ai mengintegrasikan pusat kontak penuh ke dalam server Discord."
weight: 1
tags:
  - SeaX
  - Discord
image: /images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/flex-discord-thumbnail.png
canonicalURL: /blog/discord-and-twilio
url: /blog/discord-and-twilio/
---

*Ini adalah postingan terakhir kami dalam seri tiga bagian tentang keterlibatan pelanggan di Discord. Blog pertama kami, [“Batas Baru untuk Keterlibatan Pelanggan”](https://seasalt.ai/blog/15-discord-a-new-frontier-for-customer-engagement/), membahas peningkatan popularitas Discord, dan peluang baru yang dihadirkannya bagi merek untuk membuat dan berpartisipasi dalam komunitas online mereka sendiri. Di bagian kedua, [“Cara Membuat Komunitas dan Bot Discord untuk Merek Anda”](https://seasalt.ai/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/), kami membahas cara membuat server discord untuk merek Anda, dan cara mengintegrasikan bot untuk mengelola moderasi server, pengumuman, umpan balik pengguna, dll. Terakhir, dalam blog ini kami akan menyajikan demonstrasi bagaimana kami di Seasalt.ai mengintegrasikan pusat kontak penuh ke dalam server Discord, yang memungkinkan merek untuk menangani semua aspek layanan pelanggan di platform.*

## Daftar Isi
- [Daftar Isi](#table-of-contents)
- [Demo Layanan Pelanggan Discord](#discord-customer-service-demo)
- [Twilio Flex](#twilio-flex)
- [SeaX](#seax)
- [Server Demo](#demo-server)
  - [Bantuan 1-ke-Banyak: Saluran Resmi](#1-to-many-help-official-channels)
  - [Bantuan 1-ke-1: Agen Layanan Pelanggan](#1-to-1-help-customer-service-agent)
    - [Basis Pengetahuan](#knowledge-base)
    - [Transfer Agen Langsung](#live-agent-transfer)
  - [Manajemen Kasus](#case-management)
- [Penyelaman Teknis Mendalam](#technical-deep-dive)
  - [Tentukan Alur Flex](#define-the-flex-flow)
  - [Buat Saluran Kustom](#create-a-custom-channel)
  - [Buat Server HTTP untuk Mendukung Perutean yang Lebih Kompleks](#create-an-http-server-to-support-more-complex-routing)
    - [Webhook Pesan Keluar](#outbound-messages-webhook)
    - [Integrasi Bot](#bot-integration)
- [Ringkasan](#summary)

# Demo Layanan Pelanggan Discord
Jika Anda ingin langsung ke intinya dan melihat produk akhir, kami akan menyajikan video demo akhir terlebih dahulu:

<iframe width="85%" height="450px" src="https://www.youtube.com/embed/iUK4YkGYI6Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

Tujuan kami adalah untuk mendemonstrasikan bagaimana Discord dapat diintegrasikan ke dalam perangkat lunak layanan pelanggan yang ada (dalam hal ini, [Twilio Flex](https://flex.twilio.com/)) untuk menambah nilai tambahan pada server resmi suatu merek. Teruslah membaca untuk melihat lebih dekat implementasi kami.

# Twilio Flex
Twilio adalah perusahaan komunikasi yang mapan yang menawarkan API untuk mengelola pesan teks, panggilan telepon, email, pesan obrolan, dan banyak lagi. Flex adalah salah satu produk andalan Twilio: pusat kontak berbasis cloud yang dapat diskalakan yang merutekan pesan dan panggilan dari sumber mana pun ke agen virtual dan langsung. Kami memilih Flex sebagai dasar untuk integrasi pusat kontak kami karena sudah memiliki dukungan yang sangat baik untuk berbagai macam saluran, seperti Facebook, SMS, dan WhatsApp.

# SeaX
SeaX adalah pusat kontak cloud yang terintegrasi secara mendalam dengan fitur-fitur AI canggih yang membantu meningkatkan produktivitas dan kepuasan pelanggan. SeaX adalah salah satu produk andalan Seasalt.ai, dan telah diluncurkan ke klien di lebih dari 150 negara. Platform pusat kontak SeaX dibangun di atas Twilio Flex dan mencakup berbagai fitur tambahan yang memberdayakan agen langsung untuk membantu pelanggan dengan lebih baik. Beberapa fitur yang paling berguna adalah text-to-speech & speech-to-text internal, basis pengetahuan bertenaga AI, dan sistem manajemen kasus terintegrasi. Untuk informasi lebih lanjut tentang semua kemampuan platform SeaX, silakan kunjungi [beranda SeaX](https://seax.seasalt.ai/?utm_source=blog/).

# Server Demo
Sekarang kami akan memandu Anda cara mengatur server Discord kami. Untuk keperluan demo, kami membayangkan sebuah skenario di mana server kami digunakan sebagai komunitas untuk game seperti Pokémon Go! Tabel berikut mengulas beberapa fitur yang didemonstrasikan di server Discord kami.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-features-2.png" alt="Tinjauan fitur server Discord layanan pelanggan demo."/>

*Tinjauan fitur server Discord demo.*
</center>

## Bantuan 1-ke-Banyak: Saluran Resmi
Beberapa saluran di server diatur untuk menyediakan aliran langsung antara admin/pengembang resmi dan pemain.
**Saluran pengumuman** hanya dapat diposting oleh admin dan mod, dan dapat menyertakan postingan (manual atau otomatis) dari akun Twitter, situs web, atau sumber resmi lainnya.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-announcement-channel.jpg" alt="Saluran pengumuman di server Discord, menampilkan postingan dari akun Twitter resmi."/>

*Saluran #announcements di server Discord demo.*
</center>

**Saluran laporan bug** memungkinkan pemain untuk mendiskusikan bug dan masalah yang merusak game. Admin dapat mengawasi saluran ini untuk mengidentifikasi masalah apa pun dalam game yang harus ditargetkan. Selain itu, pengguna dapat mengirimkan laporan bug resmi menggunakan perintah garis miring \`/bug\` dari dalam saluran.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-bug-report-channel.jpg" alt="Saluran laporan bug di server Discord, menampilkan laporan bug yang dikirimkan."/>

*Saluran #bug-report di server Discord demo, menampilkan laporan bug yang dikirimkan.*
</center>

**Saluran permintaan fitur** memungkinkan pemain untuk mendiskusikan perubahan gameplay, peningkatan kualitas hidup, penambahan konten, dll. yang ingin mereka lihat ditambahkan ke dalam game. Mirip dengan saluran permintaan bug, masukan mereka dapat dilihat oleh mod discord dan mereka dapat menggunakan perintah garis miring \`/new_feature\` untuk mengirimkan permintaan resmi.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-feature-request-channel.jpg" alt="Saluran permintaan fitur di server Discord, menampilkan pengguna yang melakukan perintah garis miring."/>

*Saluran #feature-request di server Discord demo, menampilkan pengguna yang melakukan perintah garis miring.*
</center>

## Bantuan 1-ke-1: Agen Layanan Pelanggan

Pemain dapat menggunakan perintah garis miring \`/helpme\` untuk memicu pesan langsung dengan agen. Agen Layanan Pelanggan dapat berupa otomatis (agen virtual) atau diawaki oleh agen langsung.

Untuk demo kami, kami menyiapkan bot FAQ sederhana yang menanyakan basis pengetahuan perusahaan untuk memberikan saran artikel yang relevan kepada pengguna. Pengguna juga dapat meminta agen langsung, dan akan ditransfer dalam obrolan yang sama ke agen langsung di SeaX.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-customer-service-channel.jpg" alt="Saluran layanan pelanggan di server Discord, menampilkan pengguna yang memicu DM."/>

*Saluran #feature-request di server Discord demo, menampilkan pengguna yang memicu DM.*
</center>

### Basis Pengetahuan
Ketika pengguna mengirimkan kueri ke agen layanan virtual, agen dapat merujuk pengguna ke artikel yang relevan di basis pengetahuan.

### Transfer Agen Langsung
Setelah pengguna berada dalam pesan langsung dengan bot, mereka dapat meminta agen langsung. Mereka akan segera diberi tahu bahwa sebuah kasus telah dibuat untuk mereka, dan bahwa mereka sedang ditransfer ke agen langsung. Ketika agen langsung bergabung dalam obrolan, mereka juga akan mendapatkan pemberitahuan.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-customer-service-dm.jpg" alt="Pesan langsung dengan layanan pelanggan, menampilkan saran artikel KB, transfer agen langsung, dan manajemen kasus."/>

*Pesan langsung dengan layanan pelanggan, menampilkan saran artikel KB, transfer agen langsung, dan manajemen kasus.*
</center>

Di backend, agen langsung dapat menangani panggilan masuk dan pesan obrolan dari semua saluran (SMS, Facebook, Discord, panggilan suara, dll.) melalui satu platform. Dalam hal ini, platform backend adalah SeaX.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/flex-discord-channel.jpg" alt="Antarmuka SeaX yang menampilkan tampilan agen langsung dari percakapan dengan pengguna di Discord."/>

*Antarmuka SeaX yang menampilkan tampilan agen langsung dari percakapan dengan pengguna di Discord.*
</center>

## Manajemen Kasus
Salah satu fitur yang ingin kami tekankan dalam demo ini adalah manajemen kasus. Solusi Discord Seasalt.ai terintegrasi dengan sistem manajemen kasus SeaX untuk melacak berbagai kasus dari pengguna dengan benar. Ketika seorang pengguna berinteraksi dengan bot Discord (seperti meminta agen langsung atau melaporkan bug), kami dapat secara otomatis membuka kasus baru dan mencatat semua informasi penting tentang pengguna dan masalah yang mereka alami. Hal ini memungkinkan agen langsung untuk memiliki akses mudah ke semua masalah yang dilaporkan, dan memastikan bahwa mereka menindaklanjuti dengan pengguna sampai kasus tersebut diselesaikan.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-new-case.png" alt="Membuat kasus baru di sistem manajemen kasus SeaX."/>

*Membuat kasus baru di sistem manajemen kasus SeaX.*

<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-existing-case.png" alt="Melihat kasus yang ada di sistem manajemen kasus SeaX."/>

*Melihat kasus yang ada di sistem manajemen kasus SeaX.*

</center>

# Penyelaman Teknis Mendalam

Sekarang kita telah melihat produk akhir dan semua fitur yang tersedia untuk anggota server dan agen langsung yang membantu mereka. Tapi bagaimana sebenarnya semuanya diimplementasikan? Dalam postingan blog terakhir kami, “[Cara Membuat Komunitas dan Bot Discord untuk Merek Anda](https://seasalt.ai/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/)”, kami membahas cara membuat server Discord untuk merek Anda dan cara mengelolanya. Untuk mendukung demo yang lebih canggih ini, kami juga menggunakan [SeaChat, mesin AI Percakapan Seasalt.ai](https://chat.seasalt.ai), untuk membangun chatbot sederhana yang memungkinkan bot Discord kami menangani kueri bahasa alami untuk pengguna.

Di sisi SeaX, tim kami bekerja sama dengan Twilio untuk menciptakan solusi pusat kontak yang kaya fitur yang dibangun di atas Twilio Flex. Untuk informasi lebih lanjut tentang Twilio Flex dan cara kerja proses penyiapan, Anda dapat membaca [Panduan Memulai Cepat Twilio Flex](https://www.twilio.com/docs/flex/quickstart).

Setelah menyiapkan server Discord, bot Discord, dan chatbot dan memastikan bahwa kami memiliki instance SeaX yang berfungsi, tantangan terbesar adalah merutekan pesan dengan benar ke dan dari pengguna, bot, dan agen langsung di SeaX. Twilio sangat fantastis dalam menangani perutean pesan, jadi tujuan kami adalah menangani semua perintah garis miring dari dalam server bot Discord kami, dan kemudian meneruskan semua pesan lain (seperti pesan langsung ke chatbot atau agen langsung) ke Twilio.

## Tentukan Alur Flex
Langkah pertama adalah memastikan bahwa setiap pesan yang kami kirim ke Twilio akan dirutekan ke tempat yang benar. Kami menyiapkan alur Twilio sederhana yang pertama-tama memeriksa apakah pengguna meminta agen langsung, dan jika demikian meneruskan pesan berikut ke SeaX. Jika pengguna tidak meminta agen langsung, maka kami meneruskan pesan ke chatbot untuk mendapatkan respons. Untuk informasi lebih lanjut tentang cara mengatur alur, lihat [dokumentasi Alur Studio Twilio](https://www.twilio.com/docs/studio).

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-flow.png" alt="Alur Studio Flex sederhana yang merutekan pesan masuk ke chatbot atau ke SeaX."/>

*Alur Studio Flex sederhana yang merutekan pesan masuk ke chatbot atau ke SeaX.*
</center>

## Buat Saluran Kustom
Jadi sekarang kita punya gambaran tentang bagaimana pesan masuk akan dirutekan. Namun, Discord bukanlah saluran yang didukung secara native oleh Twilio. Untungnya, Twilio memiliki tutorial terperinci tentang cara [Menambahkan Saluran Obrolan Kustom ke Twilio Flex](https://www.twilio.com/blog/add-custom-chat-channel-twilio-flex). Setelah mengikuti panduan untuk menyiapkan saluran kustom baru di Twilio, kita perlu benar-benar meneruskan pesan dari Discord ke Twilio.

Pertama kita siapkan klien Twilio:

\`\`\`python
from twilio.rest import Client
twilio_client = Client(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)
\`\`\`

Sekarang, setelah kami menerima pesan masuk dari Discord, kami dapat meneruskan pesan itu ke Twilio melalui klien Twilio. Pertama, kita harus memeriksa apakah pengguna sudah ada di sistem Twilio, dan apakah mereka sudah memiliki saluran obrolan yang terbuka.

\`\`\`python
# panggil metode get_user untuk memeriksa apakah pengguna ada, dan buat yang baru jika tidak
user = await get_user(user_id, twilio_client, TWILIO_SERVICE_SID)

# ambil saluran tempat pengguna berada
user_channels = twilio_client.chat \\
        .services(TWILIO_SERVICE_SID) \\
        .users(user_id) \\
        .user_channels \\
        .list()
\`\`\`

Jika pengguna memiliki saluran obrolan yang ada yang terbuka, kita perlu menggunakannya agar kita memiliki akses ke riwayat obrolan. Jika tidak ada saluran obrolan yang ada, kita buat yang baru untuk pengguna:

\`\`\`python
if user_channels:
    channel_sid = user_channels[-1].channel_sid
else:
    channel = twilio_client.flex_api \\
            .channel \\
            .create(
                flex_flow_sid=FLEX_FLOW_ID,
                chat_user_friendly_name=username,
                chat_friendly_name=chat_name,  # -> Nama ramah saluran obrolan
                target=conversation_id,  # -> Identitas yang secara unik mengidentifikasi pengguna obrolan
                identity=conversation_id,  # -> Pengguna, mis./ ID DM Discord
        )
    channel_sid = channel.sid
\`\`\`

Terakhir, setelah kami memiliki saluran obrolan terbuka antara pengguna Discord dan Twilio, kami dapat meneruskan pesan masuk ke alur Twilio Studio.

\`\`\`python
message = twilio_client.chat \\
        .services(TWILIO_SERVICE_SID) \\
        .channels(channel_sid) \\
        .messages \\
        .create(
            body=message_text,
            from_=user_id,
            x_twilio_webhook_enabled='true',
            attributes=json.dumps(message_json)  # kirim header sebagai atribut sehingga dapat diakses nanti
        )
\`\`\`
Sekarang kami memiliki kemampuan untuk meneruskan semua pesan masuk kami dari pengguna Discord langsung ke Alur Twilio Flex kami. Di sisi bot Discord, pastikan semua pesan langsung diteruskan ke Twilio. Sekarang Anda dapat mencoba mengirim pesan langsung ke bot Discord, dan Anda akan melihatnya muncul di log Alur Studio Twilio - Namun, kami belum selesai!

## Buat Server HTTP untuk Mendukung Perutean yang Lebih Kompleks

### Webhook Pesan Keluar
Jadi sekarang kita punya gambaran tentang bagaimana pesan masuk kita akan dirutekan. Namun, kita masih kekurangan beberapa bagian. Pertama-tama, kita tahu bahwa kita sekarang bisa mendapatkan pesan ke Twilio, tetapi bagaimana kita menanggapi pengguna kita di Discord? Bot Discord kita adalah satu-satunya hal yang diizinkan untuk mengirim pesan ke server dan pengguna Discord kita, dan Twilio tidak tahu cara mengembalikan pesan kita ke server Discord. Solusinya adalah, kita perlu menyiapkan webhook pesan keluar yang akan dipicu setiap kali ada pesan baru di saluran obrolan Twilio. Di dalam webhook itu, kita kemudian dapat menggunakan bot Discord kita untuk meneruskan pesan kembali ke server kita.

Untuk melakukan ini, kami mengintegrasikan bot Discord kami ke dalam server HTTP yang lebih kuat. Kami menggunakan [FastAPI](https://fastapi.tiangolo.com/) untuk menyiapkan titik akhir POST sederhana yang akan berfungsi sebagai webhook pesan keluar kami. Setelah kami menyiapkan server dan bot Discord kami berjalan di sampingnya, kami dapat menentukan titik akhir POST.

Titik akhir ini akan menerima setiap pesan tunggal yang ditambahkan ke saluran obrolan, jadi pertama-tama kami ingin memfilter semuanya kecuali pesan keluar dari SeaX. Selanjutnya, kita perlu mengambil ID saluran yang benar dari badan pesan sehingga kita tahu ke mana harus meneruskan pesan. Terakhir, kita dapat menggunakan klien Discord untuk meneruskan pesan ke saluran Discord.

\`\`\`python
@app.post("/forward-to-discord", status_code=200)
async def forward_discord_message(request: Request, response: Response) -> None:
    raw_body = await request.body()
    body = urllib.parse.parse_qs(raw_body.decode())

    # hanya perhatikan pesan dari SDK (Flex, semua yang lain akan berasal dari API)
    if not body.get('Source') == ['SDK']:
        return

    # Pesan dari Flex tidak berisi conversationId pesan asli
    # Kita memerlukan convId untuk mengirim pesan kembali ke percakapan di GBM
    # Ambil pesan sebelumnya dan ekstrak conversationId
    message = twilio_client.chat \\
            .services(TWILIO_SERVICE_SID) \\
            .channels(body.get("ChannelSid")[0]) \\
            .messages.list(limit=1)[0]

    attributes = json.loads(message.attributes)

    channel = discord_client.get_channel(attributes.get(“channel”, {}).get(“id”))
    if channel:
        await channel.send(body.get("Body", [""])[0].get(“text”))
    else:
        logger.error(f"Saluran Discord tidak dapat ditemukan dengan ID: {get_channel_id(req)}!")
        response.status_code = 400
\`\`\`

Terakhir, agar pesan dikirim ke titik akhir kami, kami perlu memberi tahu Twilio apa webhook baru kami. Setiap saluran obrolan perlu memiliki webhook sendiri yang dikonfigurasi. Jadi, jika kita kembali ke tempat kita pertama kali membuat saluran obrolan baru untuk pengguna, kita dapat menambahkan beberapa kode tambahan untuk mengonfigurasi webhook:

\`\`\`python
webhook = twilio_client.chat \\
        .services(TWILIO_SERVICE_SID) \\
        .channels(channel_sid) \\
        .webhooks \\
        .create(
            type='webhook',   
configuration_url=f"{SERVER_HOST}/forward-to-discord",
            configuration_method="POST",
            configuration_filters=["onMessageSent", "onMessageUpdated", "onMediaMessageSent"]
        )
\`\`\`

### Integrasi Bot

Jadi sekarang pesan keluar dari SeaX harus dirutekan dengan benar kembali ke server Discord kami. Tapi kami masih belum menangani pesan yang masuk ke chatbot. Kita perlu menyiapkan satu titik akhir terakhir yang akan dipicu dari Alur Studio Twilio dan akan menerima pesan pengguna, menanyakan bot, dan mengembalikan respons ke Discord.

\`\`\`python
@app.post("/chatbot-to-discord", status_code=200)
async def receive_discord_message(request: Request, response: Response):
    """Menerima permintaan POST dari Twilio, menanyakan bot, dan mengembalikan respons ke Discord."""
    req = await request.body()
    # pisahkan badan pesan asli dari konten twilio
    twilio_body, original_message_body = separate_original_message_body(req.decode())

    bot_response = await query_bot(original_message_body, bot_info)

    if bot_response:
        channel = discord_client.get_channel(original_message_body.get(“channel_id”))
        if channel:
            for item in bot_response:
                await channel.send(item.get(“text”))
\`\`\`

Pastikan Alur Studio Twilio memiliki webhook yang benar untuk merutekan pesan ke bot. Sekarang kita telah menyelesaikan perutean pesan kita! Kita dapat melihat tampilan tingkat atas dari semua perutean pesan dalam diagram ini:

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-routing-diagram.jpg" alt="Diagram perutean pesan."/>

*Diagram perutean pesan.*
</center>

# Ringkasan
Sebagai penutup, dalam seri blog ini kami telah membahas peningkatan popularitas Discord dan peluang yang dihadirkannya bagi merek sebagai platform baru untuk berinteraksi dengan pelanggan. Kami telah membahas beberapa fitur dasar Discord, untuk menunjukkan bagaimana suatu merek dapat mendirikan komunitas online mereka sendiri, serta fitur-fitur yang lebih canggih yang memungkinkan merek untuk mengotomatiskan moderasi dan dukungan pelanggan di server mereka dengan bot Discord. Terakhir, kami membagikan demonstrasi kami tentang bagaimana kami mengintegrasikan Discord dengan platform layanan pelanggan kami, SeaX, untuk menghadirkan fitur-fitur canggih ke komunitas Discord, seperti transfer agen langsung, manajemen kasus, dan pencarian basis pengetahuan bertenaga AI.
Untuk demo pribadi, atau untuk melihat bagaimana Seasalt.ai dapat membantu memenuhi kebutuhan bisnis spesifik Anda, silakan isi formulir “[Pesan Demo](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting)” kami. Untuk informasi lebih lanjut tentang integrasi Flex/Discord atau untuk menghubungi kami, silakan kunjungi [Daftar Mitra Twilio Seasalt.ai](https://showcase.twilio.com/partner-listing/a8E8Z000000PDCQUA4).
`;export{a as default};

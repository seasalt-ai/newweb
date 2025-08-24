const a=`---
title: "Panduan Lengkap Anda untuk Konversi Audio: Konversi File Suara dengan Mudah | Seri Kotak Alat Audio"
metatitle: "Konversi File Audio/Suara | Seri Kotak Alat Audio"
date: 2024-04-01 10:25:00-08:00
draft: false
author: Guoguo Chen
description: "Pelajari tentang konverter file audio, konversi format suara, dan perangkat lunak konverter audio gratis terbaik. Konversi file audio dengan mudah dengan panduan langkah demi langkah kami."
weight: 1
tags:
  - Kotak Alat Audio
  - Alat AI
image: images/blog/81-how-to-convert-audio-files-to-different-formats/81-how-to-convert-audio-files-to-different-formats.png
canonicalURL: /blog/how-to-convert-audio-files-to-different-formats/
url: /blog/how-to-convert-audio-files-to-different-formats/
---

# Pengantar Konversi Audio
Dalam dunia audio digital, ada banyak cara untuk menyimpan suara kita. Setiap cara memiliki fitur khusus sendiri, seperti membuat file lebih kecil atau menjaga suara tetap jernih. Tapi mengapa begitu banyak? Yah, karena setiap orang memiliki kebutuhan dan preferensi yang berbeda. Beberapa format berfungsi baik untuk berbagi musik secara online, sementara yang lain terbaik untuk rekaman studio.

Tetapi terkadang, kita perlu mengubah satu jenis file audio menjadi jenis lain. Mungkin pemutar musik kita hanya memutar satu jenis file, tetapi kita memiliki lagu dalam format yang berbeda. Atau mungkin kita ingin menghemat ruang di komputer kita dengan membuat file besar menjadi lebih kecil. Di situlah konversi audio berperan. Hari ini, mari kita jelajahi dunia format audio dan pelajari cara mudah mengonversi dari satu format ke format lainnya.

# Format Audio Umum
## MP3, WAV, AAC, FLAC, OGG: Memahami Format Audio Umum

Sebelum kita menyelami detail konversi audio, mari kita lihat lebih dekat beberapa format audio yang paling umum dan di mana Anda mungkin menemukannya:

- MP3 (MPEG-1 Audio Layer 3): MP3 seperti superstar format audio. Ini sempurna untuk berbagi dan mendengarkan musik secara online karena membuat file lebih kecil tanpa kehilangan terlalu banyak kualitas. Jadi, ketika Anda mengunduh lagu dari internet, kemungkinan besar itu dalam format MP3.

- WAV (Waveform Audio File Format): WAV adalah tentang menjaga semuanya tetap sangat jernih. Ini adalah format pilihan untuk rekaman audio profesional karena tidak mengompresi suara, yang berarti sangat bagus untuk membuat musik di studio.
- AAC (Advanced Audio Coding): AAC adalah format yang digunakan oleh iTunes dan Apple Music, jadi ketika Anda membeli lagu dari iTunes Store, kemungkinan besar itu dalam format AAC. Plus, ini juga merupakan format default untuk merekam memo suara di iPhone.

- FLAC (Free Lossless Audio Codec): FLAC adalah untuk para audiophile di luar sana yang menginginkan yang terbaik dari kedua dunia: ukuran file kecil dan kualitas suara terbaik. Ini sempurna untuk mengarsipkan album favorit Anda atau menikmati musik berkualitas tinggi di headphone mewah Anda.

- OGG (Ogg Vorbis): OGG mungkin tidak sepopuler yang lain, tetapi masih cukup keren. Ini adalah format open-source yang bagus untuk streaming musik online. Plus, ini lebih kecil dari file MP3 dan mendukung fitur tambahan seperti metadata, yang berguna untuk mengatur perpustakaan musik Anda.

# Cara Mengonversi File Audio - Opsi untuk Konversi Audio

## Konversi Audio dengan Baris Perintah

Ada banyak opsi untuk konversi audio. Jika Anda lebih suka antarmuka GUI, Anda dapat menggunakan konverter audio online atau Audacity. Jika Anda bersedia untuk mengotori tangan Anda dan tidak keberatan mengetik, Anda dapat menggunakan SoX atau GStreamer, yang menawarkan lebih banyak fleksibilitas. Di sini, saya akan fokus pada GStreamer karena mendukung baris perintah dan pemrograman dengan baik dan secara alami mendukung streaming (atau konversi secara langsung).


### Instalasi GStreamer
Situs web resmi GStreamer menyediakan instruksi instalasi terperinci untuk berbagai sistem operasi, lihat di sini. Berikut ini juga berfungsi.

Untuk sistem Linux, Anda umumnya dapat menggunakan manajer paket. Misalnya, untuk sistem berbasis Debian/Ubuntu, Anda cukup melakukan

\`\`\`
sudo apt install gstreamer1.0
sudo apt install gstreamer1.0-plugins-base
sudo apt install gstreamer1.0-plugins-good gstreamer1.0-plugins-bad gstreamer1.0-plugins-ugly
\`\`\`

Perintah kedua dan ketiga bersifat opsional tetapi saya selalu merasa berguna untuk menginstal plugin tambahan ini.

Untuk MacOS, Anda dapat menginstal melalui Homebrew. Mirip dengan perintah Linux, Anda melakukan

\`\`\`
brew install gstreamer
\`\`\`

Homebrew tidak menyediakan paket terpisah untuk plugin Gstreamer "good", "bad", dan "ugly" seperti yang dilakukan untuk distribusi Linux. Sebaliknya, Homebrew biasanya menginstal satu set plugin sebagai bagian dari paket \`gstreamer\` itu sendiri.

Untuk Windows, ada penginstal yang sudah dikompilasi, buka dokumentasi GStreamer di sini dan ikuti instruksinya.


### Konversi Audio
Setelah GStreamer terinstal, cukup mudah untuk mengonversi dari satu format audio ke format lainnya. Misalkan Anda memiliki satu file audio dalam format MP3, mari kita beri nama \`input.mp3\`, dan Anda ingin mengonversinya ke format WAV, mari kita beri nama \`output.wav\`, Anda cukup menjalankan perintah berikut:

\`\`\`
gst-launch-1.0 filesrc location=input.mp3 ! decodebin ! audioconvert ! audioresample ! wavenc ! filesink location=output.wav
\`\`\`

Perintah ini menggunakan elemen GStreamer berikut:

- filesrc: Membaca data dari file.
- decodebin: Secara otomatis mendeteksi dan mendekode format audio file input.
- audioconvert: Mengonversi format audio ke format yang sesuai untuk konversi.
- audioresample: Mengambil sampel ulang audio ke laju sampel yang diinginkan, jika perlu.
- wavenc: Mengodekan data audio ke format WAV.
- filesink: Menulis data audio output ke file.

Setelah Anda menjalankan perintah ini, GStreamer akan membaca file MP3 input, mendekodenya, mengonversinya ke format WAV, dan menyimpan file WAV yang dihasilkan ke lokasi yang ditentukan.

Anda dapat menentukan detail format WAV menggunakan elemen audioconvert. Berikut adalah contoh pengaturan laju sampel ke 44100 Hz dan saluran ke stereo:

\`\`\`
gst-launch-1.0 filesrc location=input.mp3 ! decodebin ! audioconvert ! audio/x-raw,format=S16LE,rate=44100,channels=2 ! wavenc ! filesink location=output.wav
\`\`\`

Demikian pula, Anda dapat mengonversi dari satu jenis ke jenis lain menggunakan plugin GStreamer yang berbeda.


# Konversi Audio Secara Langsung

Konversi audio secara langsung, atau konversi audio real-time, sangat penting dalam berbagai skenario pemrosesan audio. Untuk menyebutkan beberapa saja:

- Adaptabilitas Streaming: Saat streaming konten audio melalui jaringan, perangkat dan platform yang berbeda mungkin memiliki persyaratan yang bervariasi untuk format audio dan codec. Konversi real-time memastikan adaptabilitas streaming yang mulus dengan menyesuaikan data audio secara dinamis agar sesuai dengan spesifikasi setiap perangkat atau platform penerima. Adaptabilitas ini penting untuk memastikan pemutaran yang lancar di berbagai lingkungan tanpa perlu pra-pemrosesan atau pengodean ulang.
- Transmisi Latensi Rendah: Dalam aplikasi interaktif seperti komunikasi suara, game online, atau acara langsung, meminimalkan latensi sangat penting untuk menjaga responsivitas real-time dan keterlibatan pengguna. Melakukan konversi audio secara langsung memungkinkan data audio ditransmisikan dengan penundaan minimal, memastikan pengiriman dan pemutaran yang hampir instan. Transmisi latensi rendah ini meningkatkan pengalaman pengguna secara keseluruhan, terutama dalam aplikasi yang sensitif terhadap waktu di mana responsivitas sangat penting.
- Efisiensi Sumber Daya: Konversi audio real-time menghemat sumber daya sistem dengan menghindari kebutuhan untuk menyimpan atau memproses file audio besar terlebih dahulu. Alih-alih mengonversi konten audio terlebih dahulu ke berbagai format, konversi secara langsung memungkinkan sumber daya dialokasikan secara dinamis sesuai kebutuhan, mengurangi persyaratan penyimpanan dan overhead pemrosesan. Pendekatan yang efisien sumber daya ini sangat menguntungkan di lingkungan yang terbatas sumber daya, seperti sistem tertanam atau perangkat seluler, di mana mengoptimalkan pemanfaatan sumber daya sangat penting untuk menjaga kinerja dan skalabilitas.

Dalam kasus penggunaan khusus kami, kami memiliki perangkat lunak intelijen percakapan bernama [SeaMeet](https://seameet.ai/?utm_source=blog) yang menerima file audio atau streaming (misalnya, Google Meet) dalam berbagai format audio dan mentranskripsikan percakapan dari ucapan ke teks. Jadi, kami harus mengonversi audio dalam berbagai format ke format yang berfungsi dengan mesin pengenalan ucapan kami secara langsung.

Konversi audio secara langsung atau real-time dapat dicapai menggunakan pustaka GStreamer. Mirip dengan perintah, kita harus mengatur plugin GStreamer dalam pipeline konversi streaming, tetapi kali ini, dengan bahasa pemrograman.

Mari kita posting contoh kerja di Python terlebih dahulu, dan kita akan menjelaskan cara kerjanya.

\`\`\`
#!/usr/bin/python3

import gi
gi.require_version('Gst', '1.0')
from gi.repository import Gst
import threading
import queue
import time

# Initialize GStreamer
Gst.init(None)

class AudioConverter:
    """
    Converts different audio to PCM in real-time or faster, depending on options.

    Attributes:
        pipeline (Gst.Pipeline): The GStreamer pipeline for processing audio.
        appsrc (Gst.Element): The appsink element for feeding data to the pipeline.
        decodebin (Gst.Element): The decodebin element for decoding different audio.
        audioconvert (Gst.Element): The audioconvert element for format conversion.
        audioresample (Gst.Element): The audioresample element for adjusting sample rate (optional).
        outputformat (Gst.Element): The outputformat element to set output format.
        appsink (Gst.Element): The appsink element for receiving converted data.
        input_queue (queue.Queue): Queue for input audio data chunks.
        output_queue (queue.Queue): Queue for output PCM data chunks.
        thread (threading.Thread): Thread for reading input data and running pipeline.
        options (dict): Dictionary containing configuration options.

    Options:
        sync (bool, default=True): Whether to synchronize appsink with pipeline clock (real-time processing).
        preroll (bool, default=False): Preroll the pipeline before processing data.

    Methods:
        push_data(data_chunk): Pushes an audio data chunk to the input queue.
        pull_converted_data(): Retrieves a converted PCM data chunk from the output queue.
        run(): Starts the pipeline and data processing thread.
        on_pad_added(element, pad): Connects elements in the pipeline.
        new_sample_callback(appsink): Receives newly converted data and adds it to the output queue.
        on_message(bus, message): Handles pipeline messages (EOS, error).
    """

    def __init__(self, options=None):
        """
        Initializes the AudioConverter with default or provided options.
        """
        self.options = options or {}

        # Set default values for all options
        self.options.setdefault("sync", True)
        self.options.setdefault("preroll", False)
        self.options.setdefault("output_format", "audio/x-raw,format=S16LE,rate=16000,channels=1")

        self.pipeline = Gst.Pipeline()

        self.appsrc = Gst.ElementFactory.make("appsrc", "appsrc")
        self.decodebin = Gst.ElementFactory.make("decodebin", "decodebin")
        self.audioconvert = Gst.ElementFactory.make("audioconvert", "audioconvert")
        self.audioresample = Gst.ElementFactory.make("audioresample", "audioresample")
        self.outputformat = Gst.ElementFactory.make("capsfilter", "outputformat")
        self.outputformatcaps = Gst.Caps.from_string(self.options["output_format"])
        self.outputformat.set_property("caps", self.outputformatcaps)
        self.appsink = Gst.ElementFactory.make("appsink", "appsink")

        # Add elements to the pipeline
        self.pipeline.add(self.appsrc)
        self.pipeline.add(self.decodebin)
        self.pipeline.add(self.audioconvert)
        self.pipeline.add(self.audioresample)
        self.pipeline.add(self.outputformat)
        self.pipeline.add(self.appsink)

        # Link elements together
        self.appsrc.link(self.decodebin)
        self.decodebin.connect("pad-added", self.on_pad_added)
        self.audioconvert.link(self.audioresample)
        self.audioresample.link(self.outputformat)
        self.outputformat.link(self.appsink)

        # Set appsink properties
        self.appsink.set_property("emit-signals", True)
        self.appsink.connect("new-sample", self.new_sample_callback)
        if not self.options["sync"]:
            self.appsink.set_property("sync", False)

        # Create input and output queues based on options
        self.input_queue = queue.Queue()
        self.output_queue = queue.Queue()

        self.thread = threading.Thread(target=self.run)
        self.thread.start()

    def push_data(self, data_chunk):
        self.input_queue.put(data_chunk)

    def pull_converted_data(self):
        if not self.output_queue.empty():
            return self.output_queue.get(block=False)  # Wait for data or None
        else:
            return None

    def run(self):
        """
        Starts the pipeline and data processing thread.
        """

        self.pipeline.set_state(Gst.State.PLAYING)
        bus = self.pipeline.get_bus()
        bus.add_signal_watch()
        bus.connect("message", self.on_message)

        # Preroll pipeline if enabled
        if self.options["preroll"]:
            while True:
                msg = bus.timed_pop(Gst.MessageType.ELEMENT, Gst.CLOCK_TIME_NONE)
                if msg is not None:
                    break
            self.pipeline.set_state(Gst.State.NULL)

        while True:
            while self.input_queue.empty():  # Wait for data if the queue is empty
                time.sleep(0.01)

            data_chunk = self.input_queue.get(block=False)  # Wait for data or None
            if data_chunk is None:
                self.appsrc.emit("end-of-stream")
                break  # End of data received

            self.process_data(data_chunk)

        # Wait for the EOS message
        bus.poll(Gst.MessageType.EOS | Gst.MessageType.ERROR, Gst.CLOCK_TIME_NONE)
        self.pipeline.set_state(Gst.State.NULL)

    def process_data(self, data_chunk):
        if data_chunk is None:
            return False

        self.appsrc.emit("push-buffer", Gst.Buffer.new_wrapped(data_chunk))
        return True

    def on_pad_added(self, element, pad):
        if pad.query_caps(None).to_string().startswith("audio/"):
            pad.link(self.audioconvert.get_static_pad("sink"))

    def new_sample_callback(self, appsink):
        sample = appsink.emit("pull-sample")
        if sample:
            buffer = sample.get_buffer()
            data_chunk = buffer.extract_dup(0, buffer.get_size())
            self.output_queue.put(data_chunk)
            print("Data Converted")

        return Gst.FlowReturn.OK

    def on_message(self, bus, message):
        t = message.type
        if t == Gst.MessageType.EOS:
            print("End of stream")
            self.output_queue.put(None)  # Signal end of stream to downstream
            self.pipeline.set_state(Gst.State.NULL)
        elif t == Gst.MessageType.ERROR:
            err, debug = message.parse_error()
            print("Error: %s" % err, debug)
            self.pipeline.set_state(Gst.State.NULL)

    def pipeline_reached_eos(self):
        """
Checks if the pipeline has reached EOS.
"""
        return not self.pipeline or self.pipeline.get_state(Gst.CLOCK_TIME_NONE)[1] == Gst.State.NULL

def main():
    # Create an AudioConverter instance
    converter = AudioConverter(options={"sync": False,
        "output_format": "audio/x-raw,format=S16LE,rate=16000,channels=1"})

    CHUNK_SIZE = 1024  # Adjust as needed
    with open("input.mp3", "rb") as infile, \\
         open("output.pcm", "wb") as outfile:

        while True:
            # Read a chunk of data from the input file
            data_chunk = infile.read(CHUNK_SIZE)
            if not data_chunk:
                converter.push_data(None)    # Push stream end.
                break

            # Push the data chunk to the converter
            print("Data Push")
            converter.push_data(data_chunk)

            # Attempt to pull any converted data immediately
            converted_chunk = converter.pull_converted_data()
            while converted_chunk is not None:
                outfile.write(converted_chunk)
                converted_chunk = converter.pull_converted_data()

            # Calculate sleep time based on processed audio duration
            audio_duration = 0.05
            time.sleep(audio_duration)

        # Flush out the remaining data from the pipeline.
        while not converter.pipeline_reached_eos():
            converted_chunk = converter.pull_converted_data()
            while converted_chunk is not None:
                outfile.write(converted_chunk)
                converted_chunk = converter.pull_converted_data()
            # time.sleep(0.01)
        converted_chunk = converter.pull_converted_data()
        if converted_chunk is not None:
            outfile.write(converted_chunk)

        # Flush any remaining data to the output file
        outfile.flush()


    # Signal end of input data and wait for completion
    converter.thread.join()

if __name__ == "__main__":
    main()
\`\`\`
\`\`\`

## Kelas “AudioConverter”
Kelas AudioConverter adalah fungsionalitas inti untuk konversi format audio real-time dalam kode ini. Mari kita uraikan bagaimana ia menggunakan pipeline GStreamer untuk mencapai hal ini.

Plugin Gstreamer utama dan aliran data adalah sebagai berikut:
1. Potongan data audio didorong dari program Python ke \`appsrc\`.
2. \`appsrc\` menyuntikkan data ke dalam pipeline.
3. \`decodebin\` mendekode format audio yang masuk.
4. \`audioconvert\` melakukan konversi format ke PCM.
5. \`audioresample\` (jika diaktifkan) menyesuaikan laju sampel.
6. \`outputformat\` memastikan data cocok dengan format PCM yang diinginkan.
7. \`appsink\` menerima data PCM yang dikonversi dan menyediakan mekanisme callback bagi program Python untuk mengambilnya.

Dengan kata lain, ia menerima potongan data audio demi potongan menggunakan \`appsrc\`, mengonversi data audio, lalu mengirimkan data keluar potongan demi potongan menggunakan \`appsink\`.

Beberapa metode kunci untuk kelas \`AudioConverter\` adalah:
- \`on_pad_added\`: Fungsi callback ini dipicu ketika pad baru (titik koneksi data) tersedia pada suatu elemen. Ini secara khusus memeriksa pad dari decodebin dan menautkannya ke audioconvert untuk menangani data audio yang didekodekan.
- \`new_sample_callback\`: Fungsi ini dipanggil oleh appsink setiap kali sampel baru (potongan data PCM yang dikonversi) tersedia. Ini mengekstrak data dari buffer sampel dan menambahkannya ke antrean output agar program Python dapat mengaksesnya.
- \`on_message\`: Fungsi ini menangani pesan GStreamer yang diterima di bus pipeline. Ini mendengarkan pesan seperti End-of-Stream (EOS) atau kesalahan. Setelah EOS, ia memberi sinyal akhir ke program dan membersihkan pipeline.
Kesalahan dicatat untuk tujuan debugging.

Kelas AudioConverter memanfaatkan fungsionalitas pipeline dan elemen GStreamer untuk mencapai konversi format audio real-time. Elemen GStreamer menangani decoding, konversi, dan pengemasan data audio, sementara kelas menyediakan metode untuk interaksi dan pertukaran data dengan program Python.

### Fungsi “main”

Fungsi \`main\` mensimulasikan streaming audio real-time dan menunjukkan cara menggunakan kelas \`AudioConverter\`. Anda dapat menulis fungsi pembungkus Anda sendiri untuk kelas \`AudioConverter\` tetapi beberapa poin penting:

#### Pemrosesan Berbasis Potongan
Tidak seperti membaca seluruh file audio sekaligus, kode membaca data dalam potongan yang lebih kecil (CHUNK_SIZE). Ini mensimulasikan bagaimana data audio mungkin diterima dalam aliran berkelanjutan melalui jaringan atau dari sumber langsung.

#### Pengambilan Data Non-pemblokiran
Setelah mendorong potongan input, kode mencoba menarik data yang dikonversi yang tersedia segera menggunakan pull_converted_data. Ini meniru bagaimana aplikasi streaming mungkin perlu memproses dan berpotensi memutar ulang audio yang dikonversi sesegera mungkin, tanpa menunggu seluruh file dikonversi.

#### Tidur untuk Potensi Mengejar
Waktu tidur yang dihitung, meskipun kemungkinan tidak sempurna, memperkenalkan penundaan antara mendorong data baru dan mencoba menarik data yang dikonversi. Ini mensimulasikan waktu potensial yang mungkin dibutuhkan konverter (pipeline GStreamer) untuk memproses potongan yang diterima. Ini memungkinkan konverter waktu untuk mengejar sebelum memberinya lebih banyak data.

# Mengapa melakukan semuanya sendiri?

Meskipun mengonversi file audio ke format yang berbeda sangat penting, mengapa berhenti di situ? Tingkatkan pengalaman audio Anda dengan [SeaMeet](https://seameet.ai/?utm_source=blog).

**SeaMeet menawarkan transkripsi dan ringkasan yang akurat dan real-time untuk semua kebutuhan audio Anda.** Baik Anda mengonversi file audio, merekam podcast, atau hanya ingin memiliki transkrip percakapan, SeaMeet menyediakan transkrip instan berkualitas tinggi dan ringkasan yang berwawasan luas. Alat canggih ini dapat menghemat jam kerja manual Anda dan membantu Anda mengekstrak nilai maksimum dari konten audio Anda.

[Daftar untuk SeaMeet hari ini](https://seameet.ai/?utm_source=blog) dan rasakan kegembiraan melacak percakapan Anda.

# Lebih Banyak dari Seri Kotak Alat Audio

- [Cara Mengunduh Data Audio dari YouTube, Satu dan Banyak Video](https://seasalt.ai/blog/65-how-to-download-audio-from-youtube/?utm_source=blog)
`;export{a as default};

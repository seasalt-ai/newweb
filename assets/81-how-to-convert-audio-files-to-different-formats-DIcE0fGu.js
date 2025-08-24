const e=`---
title: "Twój kompleksowy przewodnik po konwersji audio: łatwo konwertuj pliki dźwiękowe | Seria Audio Toolbox"
metatitle: "Konwersja plików audio/dźwiękowych | Seria Audio Toolbox"
date: 2024-04-01 10:25:00-08:00
draft: false
author: Guoguo Chen
description: "Dowiedz się o konwerterach plików audio, konwersji formatów dźwięku i najlepszym darmowym oprogramowaniu do konwersji audio. Konwertuj pliki audio bez wysiłku dzięki naszemu przewodnikowi krok po kroku."
weight: 1
tags:
  - Audio Toolbox
  - AI Tools
image: images/blog/81-how-to-convert-audio-files-to-different-formats/81-how-to-convert-audio-files-to-different-formats.png
canonicalURL: /blog/how-to-convert-audio-files-to-different-formats/
url: /blog/how-to-convert-audio-files-to-different-formats/
---

# Wprowadzenie do konwersji audio
W świecie cyfrowego audio istnieje wiele sposobów zapisywania naszych dźwięków. Każdy sposób ma swoje specjalne cechy, takie jak zmniejszanie rozmiaru plików lub zachowanie naprawdę czystego dźwięku. Ale dlaczego tak wiele? Cóż, ponieważ każdy ma inne potrzeby i preferencje. Niektóre formaty sprawdzają się dobrze do udostępniania muzyki online, podczas gdy inne są najlepsze do nagrań studyjnych.

Ale czasami musimy zmienić jeden typ pliku audio na inny. Może nasz odtwarzacz muzyczny odtwarza tylko jeden rodzaj pliku, a my mamy piosenkę w innym formacie. A może chcemy zaoszczędzić miejsce na komputerze, zmniejszając duże pliki. Właśnie tam wkracza konwersja audio. Dzisiaj zbadajmy świat formatów audio i dowiedzmy się, jak łatwo konwertować z jednego na drugi.

# Popularne formaty audio
## MP3, WAV, AAC, FLAC, OGG: Zrozumienie popularnych formatów audio

Zanim zagłębimy się w szczegóły konwersji audio, przyjrzyjmy się bliżej niektórym z najpopularniejszych formatów audio i miejscom, w których można je napotkać:

- MP3 (MPEG-1 Audio Layer 3): MP3 jest jak supergwiazda formatów audio. Jest idealny do udostępniania i słuchania muzyki online, ponieważ zmniejsza rozmiar plików bez zbytniej utraty jakości. Kiedy więc pobierasz piosenkę z internetu, jest duża szansa, że jest w formacie MP3.

- WAV (Waveform Audio File Format): WAV stawia na zachowanie super czystości. Jest to format docelowy dla profesjonalnych nagrań audio, ponieważ nie kompresuje dźwięku, co oznacza, że świetnie nadaje się do tworzenia muzyki w studio.
- AAC (Advanced Audio Coding): AAC to format używany przez iTunes i Apple Music, więc kiedy kupujesz piosenkę w sklepie iTunes Store, prawdopodobnie jest w formacie AAC. Ponadto jest to również domyślny format do nagrywania notatek głosowych na iPhone'ach.

- FLAC (Free Lossless Audio Codec): FLAC jest dla audiofilów, którzy chcą tego, co najlepsze z obu światów: małych rozmiarów plików i najwyższej jakości dźwięku. Jest idealny do archiwizowania ulubionych albumów lub cieszenia się muzyką wysokiej jakości na fantazyjnych słuchawkach.

- OGG (Ogg Vorbis): OGG może nie jest tak popularny jak inne, ale wciąż jest całkiem fajny. Jest to format open-source, który świetnie nadaje się do strumieniowego przesyłania muzyki online. Ponadto jest mniejszy niż pliki MP3 i obsługuje dodatkowe funkcje, takie jak metadane, co jest przydatne do organizowania biblioteki muzycznej.

# Jak konwertować pliki audio - Opcje konwersji audio

## Konwersja audio za pomocą wiersza polece

Istnieje wiele opcji konwersji audio. Jeśli wolisz interfejsy graficzne, możesz użyć konwerterów audio online lub Audacity. Jeśli jesteś otwarty na ubrudzenie sobie rąk i nie masz nic przeciwko pisaniu, możesz użyć SoX lub GStreamer, które oferują większą elastyczność. Tutaj skupię się na GStreamer, ponieważ dobrze obsługuje zarówno wiersz poleceń, jak i programowanie, i naturalnie obsługuje strumieniowanie (lub konwersję w locie).


### Instalacja GStreamer
Oficjalna strona GStreamer zawiera szczegółowe instrukcje instalacji dla różnych systemów operacyjnych, zobacz tutaj. Poniższe również działa.

W systemach Linux można ogólnie używać menedżerów pakietów. Na przykład w systemach opartych na Debianie/Ubuntu wystarczy wykonać

\`\`\`
sudo apt install gstreamer1.0
sudo apt install gstreamer1.0-plugins-base
sudo apt install gstreamer1.0-plugins-good gstreamer1.0-plugins-bad gstreamer1.0-plugins-ugly
\`\`\`

Druga i trzecia komenda są opcjonalne, ale zawsze uważam, że warto zainstalować te dodatkowe wtyczki.

W systemie MacOS można zainstalować za pomocą Homebrew. Podobnie jak w przypadku poleceń Linuksa, wykonujesz

\`\`\`
brew install gstreamer
\`\`\`

Homebrew nie dostarcza oddzielnych pakietów dla wtyczek Gstreamer „good”, „bad” i „ugly”, tak jak robi to w przypadku dystrybucji Linuksa. Zamiast tego Homebrew zazwyczaj instaluje zestaw wtyczek jako część samego pakietu \`gstreamer\`.

Dla systemu Windows istnieją prekompilowane instalatory, przejdź do dokumentacji GStreamer tutaj i postępuj zgodnie z instrukcjami.


### Konwersja audio
Po zainstalowaniu GStreamer konwersja z jednego formatu audio na inny jest dość prosta. Załóżmy, że masz jeden plik audio w formacie MP3, nazwijmy go \`input.mp3\`, i chcesz go przekonwertować na format WAV, nazwijmy go \`output.wav\`, po prostu uruchom następujące polecenie:

\`\`\`
gst-launch-1.0 filesrc location=input.mp3 ! decodebin ! audioconvert ! audioresample ! wavenc ! filesink location=output.wav
\`\`\`

To polecenie używa następujących elementów GStreamer:

- filesrc: Odczytuje dane z pliku.
- decodebin: Automatycznie wykrywa i dekoduje format audio pliku wejściowego.
- audioconvert: Konwertuje format audio na format odpowiedni do konwersji.
- audioresample: Próbkuje ponownie dźwięk do pożądanej częstotliwości próbkowania, jeśli to konieczne.
- wavenc: Koduje dane audio do formatu WAV.
- filesink: Zapisuje wyjściowe dane audio do pliku.

Po uruchomieniu tego polecenia GStreamer odczyta wejściowy plik MP3, zdekoduje go, przekonwertuje na format WAV i zapisze wynikowy plik WAV w określonej lokalizacji.

Możesz określić szczegóły formatu WAV za pomocą elementu audioconvert. Oto przykład ustawienia częstotliwości próbkowania na 44100 Hz i kanałów na stereo:

\`\`\`
gst-launch-1.0 filesrc location=input.mp3 ! decodebin ! audioconvert ! audio/x-raw,format=S16LE,rate=44100,channels=2 ! wavenc ! filesink location=output.wav
\`\`\`

Podobnie można konwertować z jednego typu na inny za pomocą różnych wtyczek GStreamer.


# Konwersja audio w locie

Konwersja audio w locie, czyli konwersja audio w czasie rzeczywistym, jest niezbędna w różnych scenariuszach przetwarzania audio. Wymieniając tylko kilka:

- Adaptacyjność strumieniowania: Podczas strumieniowania treści audio przez sieci różne urządzenia i platformy mogą mieć różne wymagania dotyczące formatów audio i kodeków. Konwersja w czasie rzeczywistym zapewnia płynną adaptacyjność strumieniowania poprzez dynamiczne dostosowywanie danych audio do specyfikacji każdego urządzenia lub platformy odbierającej. Ta adaptacyjność jest niezbędna do zapewnienia płynnego odtwarzania w różnych środowiskach bez konieczności wstępnego przetwarzania lub ponownego kodowania.
- Transmisja o niskim opóźnieniu: W aplikacjach interaktywnych, takich jak komunikacja głosowa, gry online lub wydarzenia na żywo, minimalizacja opóźnień ma kluczowe znaczenie dla utrzymania responsywności w czasie rzeczywistym i zaangażowania użytkowników. Wykonywanie konwersji audio w locie pozwala na przesyłanie danych audio z minimalnym opóźnieniem, zapewniając niemal natychmiastowe dostarczanie i odtwarzanie. Ta transmisja o niskim opóźnieniu poprawia ogólne wrażenia użytkownika, zwłaszcza w aplikacjach wrażliwych na czas, w których responsywność ma ogromne znaczenie.
- Efektywność zasobów: Konwersja audio w czasie rzeczywistym oszczędza zasoby systemowe, unikając konieczności wcześniejszego przechowywania lub przetwarzania dużych plików audio. Zamiast wstępnego konwertowania treści audio na różne formaty, konwersja w locie pozwala na dynamiczne przydzielanie zasobów w razie potrzeby, zmniejszając wymagania dotyczące pamięci masowej i narzut na przetwarzanie. To zasobooszczędne podejście jest szczególnie korzystne w środowiskach o ograniczonych zasobach, takich jak systemy wbudowane lub urządzenia mobilne, gdzie optymalizacja wykorzystania zasobów jest niezbędna do utrzymania wydajności i skalowalności.

W naszym konkretnym przypadku użycia mamy oprogramowanie do analizy konwersacji o nazwie [SeaMeet](https://seameet.ai/?utm_source=blog), które akceptuje pliki audio lub strumienie (np. Google Meet) w różnych formatach audio i transkrybuje rozmowę z mowy na tekst. Musimy więc konwertować audio w różnych formatach na format, który działa z naszym silnikiem rozpoznawania mowy w locie.

Konwersję audio w locie lub w czasie rzeczywistym można osiągnąć za pomocą biblioteki GStreamer. Podobnie jak w przypadku polecenia, będziemy musieli zorganizować wtyczki GStreamer w potoku konwersji strumieniowej, ale tym razem za pomocą języka programowania.

Najpierw opublikujmy działający przykład w Pythonie, a następnie wyjaśnimy, jak działa.

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
        """Checks if the pipeline has reached EOS."""
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

## Klasa „AudioConverter”
Klasa AudioConverter jest podstawową funkcjonalnością do konwersji formatów audio w czasie rzeczywistym w tym kodzie. Przyjrzyjmy się, jak wykorzystuje potok GStreamer do osiągnięcia tego celu.

Kluczowe wtyczki Gstreamer i przepływ danych są następujące:
1. Fragmenty danych audio są przesyłane z programu Python do \`appsrc\`.
2. \`appsrc\` wstrzykuje dane do potoku.
3. \`decodebin\` dekoduje przychodzący format audio.
4. \`audioconvert\` wykonuje konwersję formatu na PCM.
5. \`audioresample\` (jeśli włączone) dostosowuje częstotliwość próbkowania.
6. \`outputformat\` zapewnia, że dane odpowiadają żądanemu formatowi PCM.
7. \`appsink\` odbiera przekonwertowane dane PCM i zapewnia mechanizm wywołania zwrotnego dla programu Python w celu ich pobrania.

Innymi słowy, akceptuje fragmenty danych audio po fragmencie za pomocą \`appsrc\`, konwertuje dane audio, a następnie wysyła dane fragment po fragmencie za pomocą \`appsink\`.

Niektóre kluczowe metody dla klasy \`AudioConverter\` to:
- \`on_pad_added\`: Ta funkcja wywołania zwrotnego jest wyzwalana, gdy nowy pad (punkt połączenia danych) staje się dostępny w elemencie. Specjalnie sprawdza pad z decodebin i łączy go z audioconvert, aby obsłużyć zdekodowane dane audio.
- \`new_sample_callback\`: Ta funkcja jest wywoływana przez appsink, gdy tylko nowa próbka (przekonwertowany fragment danych PCM) jest dostępna. Wyodrębnia dane z bufora próbki i dodaje je do kolejki wyjściowej, aby program Python mógł uzyskać do nich dostęp.
- \`on_message\`: Ta funkcja obsługuje wiadomości GStreamer odbierane na magistrali potoku. Nasłuchuje wiadomości, takie jak koniec strumienia (EOS) lub błędy. Po EOS sygnalizuje koniec programu i czyści potok. Błędy są rejestrowane w celach debugowania.

Klasa AudioConverter wykorzystuje funkcjonalności potoku i elementów GStreamer do osiągnięcia konwersji formatu audio w czasie rzeczywistym. Elementy GStreamer obsługują dekodowanie, konwersję i pakowanie danych audio, podczas gdy klasa zapewnia metody interakcji i wymiany danych z programem Python.

### Funkcja „main”

Funkcja \`main\` symuluje strumieniowanie audio w czasie rzeczywistym i demonstruje, jak używać klasy \`AudioConverter\`. Możesz napisać własną funkcję opakowującą dla klasy \`AudioConverter\`, ale oto kilka kluczowych punktów:

#### Przetwarzanie oparte na fragmentach
W przeciwieństwie do odczytywania całego pliku audio naraz, kod odczytuje dane w mniejszych fragmentach (CHUNK_SIZE). Symuluje to sposób, w jaki dane audio mogą być odbierane w ciągłym strumieniu przez sieć lub z żywego źródła.

#### Nieblokujące pobieranie danych
Po przesłaniu fragmentu wejściowego kod próbuje natychmiast pobrać dostępne przekonwertowane dane za pomocą pull_converted_data. To naśladuje sposób, w jaki aplikacja strumieniowa może potrzebować przetworzyć i potencjalnie odtworzyć przekonwertowane audio tak szybko, jak to możliwe, bez czekania na konwersję całego pliku.

#### Uśpienie dla potencjalnego nadrobienia zaległości
Obliczony czas uśpienia, choć prawdopodobnie niedoskonały, wprowadza opóźnienie między przesyłaniem nowych danych a próbą pobrania przekonwertowanych danych. Symuluje to potencjalny czas, jaki może zająć konwerterowi (potokowi GStreamer) przetworzenie odebranego fragmentu. Pozwala to konwerterowi na nadrobienie zaległości przed podaniem mu większej ilości danych.

# Dlaczego robić to wszystko samemu?

Chociaż konwersja plików audio na różne formaty jest niezbędna, dlaczego na tym poprzestać? Popraw swoje wrażenia dźwiękowe dzięki [SeaMeet](https://seameet.ai/?utm_source=blog).

**SeaMeet oferuje dokładne, w czasie rzeczywistym transkrypcje i podsumowania dla wszystkich Twoich potrzeb audio.** Niezależnie od tego, czy konwertujesz pliki audio, nagrywasz podcast, czy po prostu chcesz mieć transkrypcję rozmowy, SeaMeet zapewnia natychmiastowe, wysokiej jakości transkrypcje i wnikliwe podsumowania. To potężne narzędzie może zaoszczędzić Ci godziny ręcznej pracy i pomóc Ci wydobyć maksymalną wartość z Twoich treści audio.

[Zarejestruj się w SeaMeet już dziś](https://seameet.ai/?utm_source=blog) i doświadcz radości śledzenia swoich rozmów.

# Więcej z serii Narzędzi Audio

- [Jak pobrać dane audio z YouTube, jeden i wiele filmów](https://seasalt.ai/blog/65-how-to-download-audio-from-youtube/?utm_source=blog)`;export{e as default};

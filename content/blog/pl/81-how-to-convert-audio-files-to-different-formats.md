---
title: "Ваш полный гид по конвертации аудио: легко конвертируйте звуковые файлы | Серия Audio Toolbox"
metatitle: "Конвертация аудио/звуковых файлов | Серия Audio Toolbox"
date: 2024-04-01T10:25:00-08:00
draft: false
author: Guoguo Chen
description: Узнайте о конвертерах аудиофайлов, конвертации звуковых форматов и лучшем бесплатном программном обеспечении для конвертации аудио. Конвертируйте аудиофайлы без усилий с нашим пошаговым руководством.
weight: 1
tags: ["Audio Toolbox", "AI Tools"]
image: images/blog/81-how-to-convert-audio-files-to-different-formats/81-how-to-convert-audio-files-to-different-formats.png
canonicalURL: "/blog/how-to-convert-audio-files-to-different-formats/"
url: "/blog/how-to-convert-audio-files-to-different-formats/"
---

# Введение в конвертацию аудио
В мире цифрового аудио существует множество способов сохранения наших звуков. Каждый способ имеет свои особенности, такие как уменьшение размера файлов или сохранение очень чистого звука. Но почему так много? Ну, потому что у каждого свои потребности и предпочтения. Некоторые форматы хорошо подходят для обмена музыкой онлайн, в то время как другие лучше всего подходят для студийных записей.

Но иногда нам нужно изменить один тип аудиофайла на другой. Возможно, наш музыкальный проигрыватель воспроизводит только один тип файла, но у нас есть песня в другом формате. Или, возможно, мы хотим сэкономить место на нашем компьютере, уменьшив большие файлы. Вот тут-то и приходит на помощь конвертация аудио. Сегодня давайте исследуем мир аудиоформатов и научимся легко конвертировать из одного в другой.

# Распространенные аудиоформаты
## MP3, WAV, AAC, FLAC, OGG: Понимание распространенных аудиоформатов

Прежде чем мы углубимся в детали конвертации аудио, давайте сначала поближе рассмотрим некоторые из наиболее распространенных аудиоформатов и то, где вы можете с ними столкнуться:

- MP3 (MPEG-1 Audio Layer 3): MP3 — это как суперзвезда аудиоформатов. Он идеально подходит для обмена и прослушивания музыки онлайн, потому что он делает файлы меньше, не теряя слишком много качества. Так что, когда вы скачиваете песню из интернета, скорее всего, она в формате MP3.

- WAV (Waveform Audio File Format): WAV — это все о сохранении суперчистого звука. Это формат, который используется для профессиональных аудиозаписей, потому что он не сжимает звук, что означает, что он отлично подходит для создания музыки в студии.
- AAC (Advanced Audio Coding): AAC — это формат, используемый iTunes и Apple Music, поэтому, когда вы покупаете песню в iTunes Store, она, вероятно, будет в формате AAC. Кроме того, это также формат по умолчанию для записи голосовых заметок на iPhone.

- FLAC (Free Lossless Audio Codec): FLAC предназначен для аудиофилов, которые хотят получить лучшее из обоих миров: небольшой размер файлов и высочайшее качество звука. Он идеально подходит для архивирования ваших любимых альбомов или наслаждения высококачественной музыкой на ваших дорогих наушниках.

- OGG (Ogg Vorbis): OGG, возможно, не так популярен, как другие, но он все равно довольно крут. Это формат с открытым исходным кодом, который отлично подходит для потоковой передачи музыки онлайн. Кроме того, он меньше файлов MP3 и поддерживает дополнительные функции, такие как метаданные, что удобно для организации вашей музыкальной библиотеки.

# Как конвертировать аудиофайлы - Варианты конвертации аудио

## Конвертация аудио с помощью командной строки

Существует множество вариантов конвертации аудио. Если вы предпочитаете графические интерфейсы, вы можете использовать онлайн-конвертеры аудио или Audacity. Если вы готовы испачкать руки и не против печатать, вы можете использовать SoX или GStreamer, которые предлагают большую гибкость. Здесь я сосредоточусь на GStreamer, поскольку он хорошо поддерживает как командную строку, так и программирование, и естественным образом поддерживает потоковую передачу (или конвертацию на лету).


### Установка GStreamer
Официальный сайт GStreamer предоставляет подробные инструкции по установке для различных операционных систем, см. здесь. Следующее также работает.

Для систем Linux вы обычно можете использовать менеджеры пакетов. Например, для систем на базе Debian/Ubuntu вы просто выполняете:

```
sudo apt install gstreamer1.0
sudo apt install gstreamer1.0-plugins-base
sudo apt install gstreamer1.0-plugins-good gstreamer1.0-plugins-bad gstreamer1.0-plugins-ugly
```

Вторая и третья команды являются необязательными, но я всегда считаю, что полезно установить эти дополнительные плагины.

Для MacOS вы можете установить через Homebrew. Аналогично командам Linux, вы выполняете:

```
brew install gstreamer
```

Homebrew не предоставляет отдельные пакеты для плагинов Gstreamer «good», «bad» и «ugly», как это делает для дистрибутивов Linux. Вместо этого Homebrew обычно устанавливает набор плагинов как часть самого пакета `gstreamer`.

Для Windows существуют предварительно скомпилированные установщики, перейдите к документации GStreamer здесь и следуйте инструкциям.


### Конвертация аудио
После установки GStreamer довольно просто конвертировать из одного аудиоформата в другой. Предположим, у вас есть один аудиофайл в формате MP3, назовем его `input.mp3`, и вы хотите конвертировать его в формат WAV, назовем его `output.wav`, вы просто запускаете следующую команду:

```
gst-launch-1.0 filesrc location=input.mp3 ! decodebin ! audioconvert ! audioresample ! wavenc ! filesink location=output.wav
```

Эта команда использует следующие элементы GStreamer:

- filesrc: Читает данные из файла.
- decodebin: Автоматически определяет и декодирует аудиоформат входного файла.
- audioconvert: Конвертирует аудиоформат в формат, подходящий для конвертации.
- audioresample: Пересэмплирует аудио до желаемой частоты дискретизации, если необходимо.
- wavenc: Кодирует аудиоданные в формат WAV.
- filesink: Записывает выходные аудиоданные в файл.

После выполнения этой команды GStreamer прочитает входной файл MP3, декодирует его, конвертирует в формат WAV и сохранит полученный файл WAV в указанном месте.

Вы можете указать детали формата WAV, используя элемент audioconvert. Вот пример установки частоты дискретизации на 44100 Гц и каналов на стерео:

```
gst-launch-1.0 filesrc location=input.mp3 ! decodebin ! audioconvert ! audio/x-raw,format=S16LE,rate=44100,channels=2 ! wavenc ! filesink location=output.wav
```

Аналогично, вы можете конвертировать из одного типа в другой, используя различные плагины GStreamer.


# Конвертация аудио на лету

Конвертация аудио на лету, или конвертация аудио в реальном времени, необходима в различных сценариях обработки аудио. Чтобы назвать лишь несколько:

- Адаптивность потоковой передачи: При потоковой передаче аудиоконтента по сетям различные устройства и платформы могут иметь различные требования к аудиоформатам и кодекам. Конвертация в реальном времени обеспечивает бесшовную адаптивность потоковой передачи путем динамической настройки аудиоданных в соответствии со спецификациями каждого принимающего устройства или платформы. Эта адаптивность необходима для обеспечения плавного воспроизведения в различных средах без необходимости предварительной обработки или перекодирования.
- Передача с низкой задержкой: В интерактивных приложениях, таких как голосовая связь, онлайн-игры или живые события, минимизация задержки имеет решающее значение для поддержания реакции в реальном времени и вовлеченности пользователей. Выполнение конвертации аудио на лету позволяет передавать аудиоданные с минимальной задержкой, обеспечивая почти мгновенную доставку и воспроизведение. Эта передача с низкой задержкой улучшает общее впечатление пользователя, особенно в приложениях, чувствительных ко времени, где реакция имеет первостепенное значение.
- Эффективность ресурсов: Конвертация аудио в реальном времени экономит системные ресурсы, избегая необходимости предварительного хранения или обработки больших аудиофайлов. Вместо предварительной конвертации аудиоконтента в различные форматы, конвертация на лету позволяет динамически выделять ресурсы по мере необходимости, уменьшая требования к хранению и накладные расходы на обработку. Этот ресурсоэффективный подход особенно выгоден в средах с ограниченными ресурсами, таких как встроенные системы или мобильные устройства, где оптимизация использования ресурсов необходима для поддержания производительности и масштабируемости.

В нашем конкретном случае использования у нас есть программное обеспечение для анализа разговоров под названием [SeaMeet](https://meet.seasalt.ai/?utm_source=blog), которое принимает аудиофайлы или потоки (например, Google Meet) в различных аудиоформатах и транскрибирует разговор из речи в текст. Таким образом, нам необходимо конвертировать аудио в различных форматах в формат, который работает с нашим движком распознавания речи на лету.

Конвертация аудио на лету или в реальном времени может быть достигнута с помощью библиотеки GStreamer. Аналогично команде, нам придется организовать плагины GStreamer в конвейер потоковой конвертации, но на этот раз с использованием языка программирования.

Давайте сначала опубликуем рабочий пример на Python, а затем объясним, как он работает.

```
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
    with open("input.mp3", "rb") as infile, \
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
```

## Klasa „AudioConverter”
Klasa AudioConverter jest podstawową funkcjonalnością do konwersji formatów audio w czasie rzeczywistym w tym kodzie. Przyjrzyjmy się, jak wykorzystuje potok GStreamer do osiągnięcia tego celu.

Kluczowe wtyczki Gstreamer i przepływ danych są następujące:
1. Fragmenty danych audio są przesyłane z programu Python do `appsrc`.
2. `appsrc` wstrzykuje dane do potoku.
3. `decodebin` dekoduje przychodzący format audio.
4. `audioconvert` wykonuje konwersję formatu na PCM.
5. `audioresample` (jeśli włączone) dostosowuje częstotliwość próbkowania.
6. `outputformat` zapewnia, że dane odpowiadają żądanemu formatowi PCM.
7. `appsink` odbiera przekonwertowane dane PCM i zapewnia mechanizm wywołania zwrotnego dla programu Python w celu ich pobrania.

Innymi słowy, akceptuje fragmenty danych audio po fragmencie za pomocą `appsrc`, konwertuje dane audio, a następnie wysyła dane fragment po fragmencie za pomocą `appsink`.

Niektóre kluczowe metody dla klasy `AudioConverter` to:
- `on_pad_added`: Ta funkcja wywołania zwrotnego jest wyzwalana, gdy nowy pad (punkt połączenia danych) staje się dostępny w elemencie. Specjalnie sprawdza pad z decodebin i łączy go z audioconvert, aby obsłużyć zdekodowane dane audio.
- `new_sample_callback`: Ta funkcja jest wywoływana przez appsink, gdy tylko nowa próbka (przekonwertowany fragment danych PCM) jest dostępna. Wyodrębnia dane z bufora próbki i dodaje je do kolejki wyjściowej, aby program Python mógł uzyskać do nich dostęp.
- `on_message`: Ta funkcja obsługuje wiadomości GStreamer odbierane na magistrali potoku. Nasłuchuje wiadomości, takie jak koniec strumienia (EOS) lub błędy. Po EOS sygnalizuje koniec programu i czyści potok. Błędy są rejestrowane w celach debugowania.

Klasa AudioConverter wykorzystuje funkcjonalności potoku i elementów GStreamer do osiągnięcia konwersji formatu audio w czasie rzeczywistym. Elementy GStreamer obsługują dekodowanie, konwersję i pakowanie danych audio, podczas gdy klasa zapewnia metody interakcji i wymiany danych z programem Python.

### Funkcja „main”

Funkcja `main` symuluje strumieniowanie audio w czasie rzeczywistym i demonstruje, jak używać klasy `AudioConverter`. Możesz napisać własną funkcję opakowującą dla klasy `AudioConverter`, ale oto kilka kluczowych punktów:

#### Przetwarzanie oparte na fragmentach
W przeciwieństwie do odczytywania całego pliku audio naraz, kod odczytuje dane w mniejszych fragmentach (CHUNK_SIZE). Symuluje to sposób, w jaki dane audio mogą być odbierane w ciągłym strumieniu przez sieć lub z żywego źródła.

#### Nieblokujące pobieranie danych
Po przesłaniu fragmentu wejściowego kod próbuje natychmiast pobrać dostępne przekonwertowane dane za pomocą pull_converted_data. To naśladuje sposób, w jaki aplikacja strumieniowa może potrzebować przetworzyć i potencjalnie odtworzyć przekonwertowane audio tak szybko, jak to możliwe, bez czekania na konwersję całego pliku.

#### Uśpienie dla potencjalnego nadrobienia zaległości
Obliczony czas uśpienia, choć prawdopodobnie niedoskonały, wprowadza opóźnienie między przesyłaniem nowych danych a próbą pobrania przekonwertowanych danych. Symuluje to potencjalny czas, jaki może zająć konwerterowi (potokowi GStreamer) przetworzenie odebranego fragmentu. Pozwala to konwerterowi na nadrobienie zaległości przed podaniem mu większej ilości danych.

# Dlaczego robić to wszystko samemu?

Chociaż konwersja plików audio na różne formaty jest niezbędna, dlaczego na tym poprzestać? Popraw swoje wrażenia dźwiękowe dzięki [SeaMeet](https://meet.seasalt.ai/?utm_source=blog).

**SeaMeet oferuje dokładne, w czasie rzeczywitym transkrypcje i podsumowania dla wszystkich Twoich potrzeb audio.** Niezależnie od tego, czy konwertujesz pliki audio, nagrywasz podcast, czy po prostu chcesz mieć transkrypcję rozmowy, SeaMeet zapewnia natychmiastowe, wysokiej jakości transkrypcje i wnikliwe podsumowania. To potężne narzędzie może zaoszczędzić Ci godziny ręcznej pracy i pomóc Ci wydobyć maksymalną wartość z Twoich treści audio.

[Zarejestruj się w SeaMeet już dziś](https://meet.seasalt.ai/?utm_source=blog) i doświadcz radości śledzenia swoich rozmów.

# Więcej z serii Narzędzi Audio

- [Jak pobrać dane audio z YouTube, jeden i wiele filmów](https://seasalt.ai/blog/65-how-to-download-audio-from-youtube/?utm_source=blog)

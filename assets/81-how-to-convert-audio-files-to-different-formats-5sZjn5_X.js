const e=`---
title: "您的音訊轉換綜合指南：輕鬆轉換聲音檔案 | 音訊工具箱系列"
metatitle: "音訊/聲音檔案轉換 | 音訊工具箱系列"
date: 2024-04-01 10:25:00-08:00
draft: false
author: Guoguo Chen
description: "了解音訊檔案轉換器、聲音格式轉換以及最佳免費音訊轉換器軟體。透過我們的逐步指南輕鬆轉換音訊檔案。"
weight: 1
tags:
  - 音訊工具箱
  - AI 工具
image: images/blog/81-how-to-convert-audio-files-to-different-formats/81-how-to-convert-audio-files-to-different-formats.png
canonicalURL: /blog/how-to-convert-audio-files-to-different-formats/
url: /blog/how-to-convert-audio-files-to-different-formats/
---

# 音訊轉換簡介
在數位音訊的世界中，有許多方法可以儲存我們的聲音。每種方法都有其獨特的特點，例如使檔案更小或保持聲音非常清晰。但為什麼有這麼多呢？嗯，因為每個人都有不同的需求和偏好。有些格式非常適合線上分享音樂，而另一些則最適合錄音室錄音。

但有時，我們需要將一種音訊檔案類型轉換為另一種。也許我們的音樂播放器只能播放一種檔案，但我們有一首不同格式的歌曲。或者我們可能想透過縮小大檔案來節省電腦空間。這就是音訊轉換的用武之地。今天，讓我們探索音訊格式的世界，並學習如何輕鬆地將一種格式轉換為另一種格式。

# 常見音訊格式
## MP3、WAV、AAC、FLAC、OGG：了解常見音訊格式

在我們深入了解音訊轉換的細節之前，讓我們先仔細看看一些最常見的音訊格式以及您可能在哪裡遇到它們：

- MP3 (MPEG-1 Audio Layer 3)：MP3 就像音訊格式的超級巨星。它非常適合線上分享和收聽音樂，因為它可以在不損失太多品質的情況下使檔案更小。所以，當您從網際網路下載歌曲時，很可能它是 MP3 格式。

- WAV (Waveform Audio File Format)：WAV 的重點是保持聲音超級清晰。它是專業錄音的首選格式，因為它不壓縮聲音，這意味著它非常適合在錄音室製作音樂。
- AAC (Advanced Audio Coding)：AAC 是 iTunes 和 Apple Music 使用的格式，所以當您從 iTunes Store 購買歌曲時，它很可能是 AAC 格式。此外，它也是 iPhone 上錄製語音備忘錄的預設格式。

- FLAC (Free Lossless Audio Codec)：FLAC 適用於那些希望兩全其美的發燒友：小檔案大小和一流的音質。它非常適合歸檔您最喜歡的專輯或在您的高級耳機上欣賞高品質音樂。

- OGG (Ogg Vorbis)：OGG 可能不如其他格式流行，但它仍然很酷。它是一種開源格式，非常適合線上串流音樂。此外，它比 MP3 檔案小，並支援元資料等額外功能，這對於組織您的音樂庫非常方便。

# 如何轉換音訊檔案 - 音訊轉換選項

## 使用命令列進行音訊轉換

音訊轉換有很多選項。如果您喜歡 GUI 介面，可以使用線上音訊轉換器或 Audacity。如果您願意動手並樂於打字，可以使用 SoX 或 GStreamer，它們提供更大的靈活性。在這裡，我將重點介紹 GStreamer，因為它同時支援命令列和程式設計，並且自然支援串流（或即時轉換）。


### GStreamer 安裝
GStreamer 官方網站提供了各種作業系統的詳細安裝說明，請參閱此處。以下方法也適用。

對於 Linux 系統，您通常可以使用套件管理器。例如，對於基於 Debian/Ubuntu 的系統，您只需執行以下操作：

\`\`\`
sudo apt install gstreamer1.0
sudo apt install gstreamer1.0-plugins-base
sudo apt install gstreamer1.0-plugins-good gstreamer1.0-plugins-bad gstreamer1.0-plugins-ugly
\`\`\`

第二個和第三個命令是可選的，但我總是覺得安裝這些額外的插件很有幫助。

對於 MacOS，您可以透過 Homebrew 安裝。與 Linux 命令類似，您執行以下操作：

\`\`\`
brew install gstreamer
\`\`\`

Homebrew 不像 Linux 發行版那樣為“good”、“bad”和“ugly”Gstreamer 插件提供單獨的套件。相反，Homebrew 通常將一組插件作為 \`gstreamer\` 套件本身的一部分進行安裝。

對於 Windows，有預編譯的安裝程式，請訪問此處的 GStreamer 文件並按照說明進行操作。


### 音訊轉換
安裝 GStreamer 後，將一種音訊格式轉換為另一種格式非常簡單。假設您有一個 MP3 格式的音訊檔案，我們將其命名為 \`input.mp3\`，並且您想將其轉換為 WAV 格式，我們將其命名為 \`output.wav\`，您只需執行以下命令：

\`\`\`
gst-launch-1.0 filesrc location=input.mp3 ! decodebin ! audioconvert ! audioresample ! wavenc ! filesink location=output.wav
\`\`\`

此命令使用以下 GStreamer 元素：

- filesrc：從檔案讀取資料。
- decodebin：自動偵測和解碼輸入檔案的音訊格式。
- audioconvert：將音訊格式轉換為適合轉換的格式。
- audioresample：如有必要，將音訊重新取樣到所需的取樣率。
- wavenc：將音訊資料編碼為 WAV 格式。
- filesink：將輸出音訊資料寫入檔案。

運行此命令後，GStreamer 將讀取輸入的 MP3 檔案，對其進行解碼，將其轉換為 WAV 格式，並將生成的 WAV 檔案儲存到指定位置。

您可以使用 audioconvert 元素指定 WAV 格式詳細資訊。以下是將取樣率設定為 44100 Hz 和通道設定為立體聲的範例：

\`\`\`
gst-launch-1.0 filesrc location=input.mp3 ! decodebin ! audioconvert ! audio/x-raw,format=S16LE,rate=44100,channels=2 ! wavenc ! filesink location=output.wav
\`\`\`

同樣，您可以使用不同的 GStreamer 插件將一種類型轉換為另一種類型。


# 即時音訊轉換

即時音訊轉換，或即時音訊轉換，在各種音訊處理場景中至關重要。僅舉幾例：

- 串流適應性：透過網路串流音訊內容時，不同的設備和平台可能對音訊格式和編解碼器有不同的要求。即時轉換透過動態調整音訊資料以匹配每個接收設備或平台的規範來確保無縫串流適應性。這種適應性對於確保在不同環境中流暢播放至關重要，而無需預處理或重新編碼。
- 低延遲傳輸：在語音通訊、線上遊戲或現場活動等互動式應用程式中，最小化延遲對於保持即時響應和使用者參與至關重要。即時執行音訊轉換允許以最小延遲傳輸音訊資料，確保幾乎即時的交付和播放。這種低延遲傳輸增強了整體使用者體驗，尤其是在響應性至關重要的時間敏感應用程式中。
- 資源效率：即時音訊轉換透過避免預先儲存或處理大型音訊檔案來節省系統資源。即時轉換音訊內容到各種格式，而不是預先轉換，允許根據需要動態分配資源，從而減少儲存需求和處理開銷。這種資源高效的方法在資源受限的環境中特別有利，例如嵌入式系統或行動設備，其中優化資源利用率對於保持性能和可擴展性至關重要。

在我們的特定用例中，我們有一個名為 [SeaMeet](https://seameet.ai/?utm_source=blog) 的對話智能軟體，它接受各種音訊格式的音訊檔案或串流（例如 Google Meet），並將對話從語音轉換為文字。因此，我們必須將各種格式的音訊即時轉換為與我們的語音識別引擎相容的格式。

即時或即時音訊轉換可以使用 GStreamer 庫實現。與命令類似，我們需要將 GStreamer 插件組織成串流轉換管道，但這次使用程式設計語言。

讓我們首先發布一個 Python 中的工作範例，然後我們將解釋它是如何工作的。

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

## “AudioConverter” 類別
AudioConverter 類別是此程式碼中即時音訊格式轉換的核心功能。讓我們分解一下它如何使用 GStreamer 管道來實現這一點。

關鍵的 Gstreamer 插件和資料流如下：
1. 音訊資料塊從 Python 程式推送到 \`appsrc\`。
2. \`appsrc\` 將資料注入管道。
3. \`decodebin\` 解碼傳入的音訊格式。
4. \`audioconvert\` 執行格式轉換為 PCM。
5. \`audioresample\`（如果啟用）調整取樣率。
6. \`outputformat\` 確保資料符合所需的 PCM 格式。
7. \`appsink\` 接收轉換後的 PCM 資料，並為 Python 程式提供回呼機制以檢索它。

換句話說，它使用 \`appsrc\` 逐塊接收音訊資料，轉換音訊資料，然後使用 \`appsink\` 逐塊發送資料。

\`AudioConverter\` 類別的一些關鍵方法是：
- \`on_pad_added\`：當元素上出現新的 pad（資料連接點）時，此回呼函數會觸發。它專門檢查來自 decodebin 的 pad 並將其連結到 audioconvert 以處理解碼後的音訊資料。
- \`new_sample_callback\`：每當有新樣本（轉換後的 PCM 資料塊）可用時，appsink 都會呼叫此函數。它從樣本緩衝區中提取資料並將其新增到輸出佇列中，供 Python 程式存取。
- \`on_message\`：此函數處理在管道總線上接收到的 GStreamer 訊息。它偵聽諸如流結束 (EOS) 或錯誤之類的消息。收到 EOS 後，它會向程式發出結束訊號並清理管道。錯誤會記錄下來以供偵錯。

AudioConverter 類別利用 GStreamer 的管道和元素功能來實現即時音訊格式轉換。GStreamer 元素處理音訊資料的解碼、轉換和打包，而該類別提供與 Python 程式進行互動和資料交換的方法。

### “main” 函數

\`main\` 函數模擬即時音訊串流，並演示如何使用 \`AudioConverter\` 類別。您可以為 \`AudioConverter\` 類別編寫自己的包裝函數，但有幾個關鍵點：

#### 基於塊的處理
與一次性讀取整個音訊檔案不同，程式碼以較小的塊（CHUNK_SIZE）讀取資料。這模擬了音訊資料如何透過網路或從即時來源以連續流的形式接收。

#### 非阻塞資料檢索
推送輸入塊後，程式碼嘗試使用 pull_converted_data 立即拉取任何可用的轉換資料。這模擬了串流應用程式可能需要盡快處理和潛在播放轉換後的音訊，而無需等待整個檔案轉換完成。

#### 睡眠以實現潛在的追趕
計算出的睡眠時間，儘管可能不完美，但在推送新資料和嘗試拉取轉換後的資料之間引入了延遲。這模擬了轉換器（GStreamer 管道）處理接收到的塊可能需要的時間。它允許轉換器在接收更多資料之前有時間趕上。

# 為什麼要自己做所有事情？

雖然將音訊檔案轉換為不同的格式至關重要，但為什麼止步於此呢？使用 [SeaMeet](https://seameet.ai/?utm_source=blog) 提升您的音訊體驗。

**SeaMeet 為您的所有音訊需求提供準確、即時的轉錄和摘要。** 無論您是轉換音訊檔案、錄製播客，還是只想進行對話轉錄，SeaMeet 都能提供即時、高品質的轉錄和富有洞察力的摘要。這個強大的工具可以為您節省數小時的手動工作，並幫助您從音訊內容中提取最大價值。

[立即註冊 SeaMeet](https://seameet.ai/?utm_source=blog)，體驗追蹤對話的樂趣。

# 音訊工具箱系列更多內容

- [如何從 YouTube 下載音訊資料，單個和多個影片](https://seasalt.ai/blog/65-how-to-download-audio-from-youtube/?utm_source=blog)
`;export{e as default};

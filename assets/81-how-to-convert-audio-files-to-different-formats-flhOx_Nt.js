const e=`---
title: "您的音频转换综合指南：轻松转换声音文件 | 音频工具箱系列"
metatitle: "音频/声音文件转换 | 音频工具箱系列"
date: 2024-04-01 10:25:00-08:00
draft: false
author: Guoguo Chen
description: "了解音频文件转换器、声音格式转换以及最佳免费音频转换器软件。通过我们的分步指南轻松转换音频文件。"
weight: 1
tags:
  - 音频工具箱
  - AI 工具
image: images/blog/81-how-to-convert-audio-files-to-different-formats/81-how-to-convert-audio-files-to-different-formats.png
canonicalURL: /blog/how-to-convert-audio-files-to-different-formats/
url: /blog/how-to-convert-audio-files-to-different-formats/
---

# 音频转换简介
在数字音频世界中，有许多保存声音的方法。每种方法都有其独特的特点，例如使文件更小或保持声音非常清晰。但为什么有这么多呢？嗯，因为每个人都有不同的需求和偏好。有些格式非常适合在线共享音乐，而另一些则最适合录音室录音。

但有时，我们需要将一种类型的音频文件转换为另一种。也许我们的音乐播放器只能播放一种文件，但我们有一首不同格式的歌曲。或者我们可能想通过缩小大文件来节省计算机空间。这就是音频转换的用武之地。今天，让我们探索音频格式的世界，并学习如何轻松地将一种格式转换为另一种格式。

# 常见音频格式
## MP3、WAV、AAC、FLAC、OGG：了解常见音频格式

在深入了解音频转换细节之前，让我们首先仔细看看一些最常见的音频格式以及您可能在哪里遇到它们：

- MP3 (MPEG-1 Audio Layer 3)：MP3 就像音频格式的超级明星。它非常适合在线共享和收听音乐，因为它可以在不损失太多质量的情况下使文件更小。所以，当您从互联网下载歌曲时，很可能它是 MP3 格式。

- WAV (Waveform Audio File Format)：WAV 的重点是保持声音超级清晰。它是专业录音的首选格式，因为它不压缩声音，这意味着它非常适合在录音室制作音乐。
- AAC (Advanced Audio Coding)：AAC 是 iTunes 和 Apple Music 使用的格式，所以当您从 iTunes Store 购买歌曲时，它很可能是 AAC 格式。此外，它也是 iPhone 上录制语音备忘录的默认格式。

- FLAC (Free Lossless Audio Codec)：FLAC 适用于那些希望两全其美的发烧友：小文件大小和一流的音质。它非常适合存档您最喜欢的专辑或在您的高级耳机上欣赏高品质音乐。

- OGG (Ogg Vorbis)：OGG 可能不如其他格式流行，但它仍然很酷。它是一种开源格式，非常适合在线流媒体音乐。此外，它比 MP3 文件小，并支持元数据等额外功能，这对于组织您的音乐库非常方便。

# 如何转换音频文件 - 音频转换选项

## 使用命令行进行音频转换

音频转换有很多选项。如果您喜欢 GUI 界面，可以使用在线音频转换器或 Audacity。如果您愿意动手并乐于打字，可以使用 SoX 或 GStreamer，它们提供更大的灵活性。在这里，我将重点介绍 GStreamer，因为它同时支持命令行和编程，并且自然支持流式传输（或即时转换）。


### GStreamer 安装
GStreamer 官方网站提供了各种操作系统的详细安装说明，请参见此处。以下方法也适用。

对于 Linux 系统，您通常可以使用包管理器。例如，对于基于 Debian/Ubuntu 的系统，您只需执行以下操作：

\`\`\`
sudo apt install gstreamer1.0
sudo apt install gstreamer1.0-plugins-base
sudo apt install gstreamer1.0-plugins-good gstreamer1.0-plugins-bad gstreamer1.0-plugins-ugly
\`\`\`

第二个和第三个命令是可选的，但我总是觉得安装这些额外的插件很有帮助。

对于 MacOS，您可以通过 Homebrew 安装。与 Linux 命令类似，您执行以下操作：

\`\`\`
brew install gstreamer
\`\`\`

Homebrew 不像 Linux 发行版那样为“good”、“bad”和“ugly”Gstreamer 插件提供单独的包。相反，Homebrew 通常将一组插件作为 \`gstreamer\` 包本身的一部分进行安装。

对于 Windows，有预编译的安装程序，请访问此处的 GStreamer 文档并按照说明进行操作。


### 音频转换
安装 GStreamer 后，将一种音频格式转换为另一种格式非常简单。假设您有一个 MP3 格式的音频文件，我们将其命名为 \`input.mp3\`，并且您想将其转换为 WAV 格式，我们将其命名为 \`output.wav\`，您只需运行以下命令：

\`\`\`
gst-launch-1.0 filesrc location=input.mp3 ! decodebin ! audioconvert ! audioresample ! wavenc ! filesink location=output.wav
\`\`\`

此命令使用以下 GStreamer 元素：

- filesrc：从文件读取数据。
- decodebin：自动检测和解码输入文件的音频格式。
- audioconvert：将音频格式转换为适合转换的格式。
- audioresample：如有必要，将音频重新采样到所需的采样率。
- wavenc：将音频数据编码为 WAV 格式。
- filesink：将输出音频数据写入文件。

运行此命令后，GStreamer 将读取输入的 MP3 文件，对其进行解码，将其转换为 WAV 格式，并将生成的 WAV 文件保存到指定位置。

您可以使用 audioconvert 元素指定 WAV 格式详细信息。以下是将采样率设置为 44100 Hz 和通道设置为立体声的示例：

\`\`\`
gst-launch-1.0 filesrc location=input.mp3 ! decodebin ! audioconvert ! audio/x-raw,format=S16LE,rate=44100,channels=2 ! wavenc ! filesink location=output.wav
\`\`\`

同样，您可以使用不同的 GStreamer 插件将一种类型转换为另一种类型。


# 即时音频转换

即时音频转换，或实时音频转换，在各种音频处理场景中至关重要。仅举几例：

- 流媒体适应性：通过网络流媒体音频内容时，不同的设备和平台可能对音频格式和编解码器有不同的要求。实时转换通过动态调整音频数据以匹配每个接收设备或平台的规范来确保无缝流媒体适应性。这种适应性对于确保在不同环境中流畅播放至关重要，而无需预处理或重新编码。
- 低延迟传输：在语音通信、在线游戏或现场活动等交互式应用程序中，最小化延迟对于保持实时响应和用户参与至关重要。即时执行音频转换允许以最小延迟传输音频数据，确保几乎即时的交付和播放。这种低延迟传输增强了整体用户体验，尤其是在响应性至关重要的时间敏感应用程序中。
- 资源效率：实时音频转换通过避免预先存储或处理大型音频文件来节省系统资源。即时转换音频内容到各种格式，而不是预先转换，允许根据需要动态分配资源，从而减少存储需求和处理开销。这种资源高效的方法在资源受限的环境中特别有利，例如嵌入式系统或移动设备，其中优化资源利用率对于保持性能和可扩展性至关重要。

在我们的特定用例中，我们有一个名为 [SeaMeet](https://seameet.ai/?utm_source=blog) 的对话智能软件，它接受各种音频格式的音频文件或流（例如 Google Meet），并将对话从语音转换为文本。因此，我们必须将各种格式的音频即时转换为与我们的语音识别引擎兼容的格式。

即时或实时音频转换可以使用 GStreamer 库实现。与命令类似，我们需要将 GStreamer 插件组织成流式转换管道，但这次使用编程语言。

让我们首先发布一个 Python 中的工作示例，然后我们将解释它是如何工作的。

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
## “AudioConverter” 类
AudioConverter 类是此代码中实时音频格式转换的核心功能。让我们分解一下它如何使用 GStreamer 管道来实现这一点。

关键的 Gstreamer 插件和数据流如下：
1. 音频数据块从 Python 程序推送到 \`appsrc\`。
2. \`appsrc\` 将数据注入管道。
3. \`decodebin\` 解码传入的音频格式。
4. \`audioconvert\` 执行格式转换为 PCM。
5. \`audioresample\`（如果启用）调整采样率。
6. \`outputformat\` 确保数据与所需的 PCM 格式匹配。
7. \`appsink\` 接收转换后的 PCM 数据，并为 Python 程序提供回调机制以检索它。

换句话说，它使用 \`appsrc\` 逐块接收音频数据，转换音频数据，然后使用 \`appsink\` 逐块发送数据。

\`AudioConverter\` 类的一些关键方法是：
- \`on_pad_added\`：当元素上出现新的 pad（数据连接点）时，此回调函数会触发。它专门检查来自 decodebin 的 pad 并将其链接到 audioconvert 以处理解码后的音频数据。
- \`new_sample_callback\`：每当有新样本（转换后的 PCM 数据块）可用时，appsink 都会调用此函数。它从样本缓冲区中提取数据并将其添加到输出队列中，供 Python 程序访问。
- \`on_message\`：此函数处理在管道总线上接收到的 GStreamer 消息。它侦听诸如流结束 (EOS) 或错误之类的消息。收到 EOS 后，它会向程序发出结束信号并清理管道。错误会记录下来以供调试。

AudioConverter 类利用 GStreamer 的管道和元素功能来实现实时音频格式转换。GStreamer 元素处理音频数据的解码、转换和打包，而该类提供与 Python 程序进行交互和数据交换的方法。

### “main” 函数

\`main\` 函数模拟实时音频流，并演示如何使用 \`AudioConverter\` 类。您可以为 \`AudioConverter\` 类编写自己的包装函数，但有几个关键点：

#### 基于块的处理
与一次性读取整个音频文件不同，代码以较小的块（CHUNK_SIZE）读取数据。这模拟了音频数据如何通过网络或从实时源以连续流的形式接收。

#### 非阻塞数据检索
推送输入块后，代码尝试使用 pull_converted_data 立即拉取任何可用的转换数据。这模拟了流媒体应用程序可能需要尽快处理和潜在播放转换后的音频，而无需等待整个文件转换完成。

#### 睡眠以实现潜在的追赶
计算出的睡眠时间，尽管可能不完美，但在推送新数据和尝试拉取转换后的数据之间引入了延迟。这模拟了转换器（GStreamer 管道）处理接收到的块可能需要的时间。它允许转换器在接收更多数据之前有时间追赶。

# 为什么要自己做所有事情？

虽然将音频文件转换为不同的格式至关重要，但为什么止步于此呢？使用 [SeaMeet](https://seameet.ai/?utm_source=blog) 提升您的音频体验。

**SeaMeet 为您的所有音频需求提供准确、实时的转录和摘要。** 无论您是转换音频文件、录制播客，还是只想进行对话转录，SeaMeet 都能提供即时、高质量的转录和富有洞察力的摘要。这个强大的工具可以为您节省数小时的手动工作，并帮助您从音频内容中提取最大价值。

[立即注册 SeaMeet](https://seameet.ai/?utm_source=blog)，体验跟踪对话的乐趣。

# 音频工具箱系列更多内容

- [如何从 YouTube 下载音频数据，单个和多个视频](https://seasalt.ai/blog/65-how-to-download-audio-from-youtube/?utm_source=blog)
`;export{e as default};

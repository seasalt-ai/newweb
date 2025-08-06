---
title: "音频转换完整指南：轻松转换音频文件 | 音频工具箱系列"
metatitle: "音频/声音文件转换 | 音频工具箱系列"
date: 2024-04-01T10:25:00-08:00
draft: false
author: Guoguo Chen
description: 了解音频文件转换器、声音格式转换和最佳免费音频转换软件。通过我们的分步指南轻松转换音频文件。
weight: 1
tags: ["Audio Toolbox", "AI Tools"]
image: images/blog/81-how-to-convert-audio-files-to-different-formats/81-how-to-convert-audio-files-to-different-formats.png
canonicalURL: "/blog/how-to-convert-audio-files-to-different-formats/"
url: "/blog/how-to-convert-audio-files-to-different-formats/"
---

# 音频转换简介
在数字音频的世界里，有很多种保存声音的方式。每种方式都有其特殊的特性，比如让文件更小或保持声音非常清晰。但为什么有这么多格式呢？这是因为每个人都有不同的需求和偏好。有些格式适合在线分享音乐，而其他格式最适合录音室录制。

但有时，我们需要将一种类型的音频文件转换为另一种。也许我们的音乐播放器只能播放一种类型的文件，但我们有一首不同格式的歌曲。或者我们想通过让大文件变小来节省电脑空间。这就是音频转换的用武之地。今天，让我们探索音频格式的世界，学习如何轻松地从一种格式转换为另一种。

# 常见音频格式
## MP3、WAV、AAC、FLAC、OGG：了解常见音频格式

在深入了解音频转换细节之前，让我们先仔细看看一些最常见的音频格式以及你可能在哪里遇到它们：

- **MP3 (MPEG-1 Audio Layer 3)**：MP3就像音频格式中的超级明星。它非常适合在线分享和听音乐，因为它能让文件变小而不损失太多质量。所以，当你从互联网下载歌曲时，很可能就是MP3格式。

- **WAV (Waveform Audio File Format)**：WAV专注于保持超级清晰。它是专业音频录制的首选格式，因为它不压缩声音，这意味着它非常适合在录音室制作音乐。

- **AAC (Advanced Audio Coding)**：AAC是iTunes和Apple Music使用的格式，所以当你从iTunes Store购买歌曲时，很可能是AAC格式。另外，它也是iPhone录制语音备忘录的默认格式。

- **FLAC (Free Lossless Audio Codec)**：FLAC是为那些想要两全其美的发烧友准备的：小文件大小和顶级音质。它非常适合存档你最喜欢的专辑或在你的高级耳机上享受高质量音乐。

- **OGG (Ogg Vorbis)**：OGG可能不如其他格式流行，但它仍然很酷。它是一个开源格式，非常适合在线流媒体音乐。另外，它比MP3文件更小，支持元数据等额外功能，这对组织你的音乐库很有用。

# 如何转换音频文件 - 音频转换选项

## 使用命令行进行音频转换

音频转换有很多选项。如果你喜欢GUI界面，可以使用在线音频转换器或Audacity。如果你愿意动手并且不介意打字，可以使用SoX或GStreamer，它们提供更多灵活性。这里，我将专注于GStreamer，因为它很好地支持命令行和编程，并且自然地支持流媒体（或实时转换）。

### GStreamer安装
GStreamer官方网站为各种操作系统提供了详细的安装说明，请参见这里。以下方法也有效。

对于Linux系统，你通常可以使用包管理器。例如，对于基于Debian/Ubuntu的系统，你只需执行：

```
sudo apt install gstreamer1.0
sudo apt install gstreamer1.0-plugins-base
sudo apt install gstreamer1.0-plugins-good gstreamer1.0-plugins-bad gstreamer1.0-plugins-ugly
```

第二个和第三个命令是可选的，但我总是发现安装这些额外的插件很有帮助。

对于MacOS，你可以通过Homebrew安装。类似于Linux命令，你执行：

```
brew install gstreamer
```

Homebrew不像Linux发行版那样为"good"、"bad"和"ugly"GStreamer插件提供单独的包。相反，Homebrew通常将一组插件作为`gstreamer`包本身的一部分安装。

对于Windows，有预编译的安装程序，请转到GStreamer文档这里并按照说明操作。

### 音频转换
一旦安装了GStreamer，从一种音频格式转换为另一种就相当简单了。假设你有一个MP3格式的音频文件，让我们命名为`input.mp3`，你想将其转换为WAV格式，让我们命名为`output.wav`，你只需运行以下命令：

```
gst-launch-1.0 filesrc location=input.mp3 ! decodebin ! audioconvert ! audioresample ! wavenc ! filesink location=output.wav
```

此命令使用以下GStreamer元素：

- **filesrc**：从文件读取数据。
- **decodebin**：自动检测和解码输入文件的音频格式。
- **audioconvert**：将音频格式转换为适合转换的格式。
- **audioresample**：如有必要，将音频重新采样到所需的采样率。
- **wavenc**：将音频数据编码为WAV格式。
- **filesink**：将输出音频数据写入文件。

一旦运行此命令，GStreamer将读取输入MP3文件，解码它，转换为WAV格式，并将生成的WAV文件保存到指定位置。

你可以使用audioconvert元素指定WAV格式详情。这是一个设置采样率为44100 Hz和声道为立体声的示例：

```
gst-launch-1.0 filesrc location=input.mp3 ! decodebin ! audioconvert ! audio/x-raw,format=S16LE,rate=44100,channels=2 ! wavenc ! filesink location=output.wav
```

类似地，你可以使用不同的GStreamer插件从一种类型转换为另一种。

# 实时音频转换

实时音频转换，或实时音频转换，在各种音频处理场景中至关重要。仅举几个例子：

- **流媒体适应性**：当通过网络流式传输音频内容时，不同的设备和平台可能对音频格式和编解码器有不同的要求。实时转换通过动态调整音频数据以匹配每个接收设备或平台的规格，确保无缝的流媒体适应性。这种适应性对于确保在不同环境中流畅播放至关重要，无需预处理或重新编码。

- **低延迟传输**：在语音通信、在线游戏或直播等交互式应用程序中，最小化延迟对于保持实时响应性和用户参与度至关重要。实时执行音频转换允许音频数据以最小延迟传输，确保近乎即时的传递和播放。这种低延迟传输增强了整体用户体验，特别是在响应性至关重要的时间敏感应用程序中。

- **资源效率**：实时音频转换通过避免预先存储或处理大音频文件的需要来节省系统资源。与预先将音频内容转换为各种格式不同，实时转换允许根据需要动态分配资源，减少存储需求和处理开销。这种资源高效的方法在资源受限的环境中特别有利，如嵌入式系统或移动设备，其中优化资源利用对于保持性能和可扩展性至关重要。

在我们的具体用例中，我们有一个名为[SeaMeet](https://meet.seasalt.ai/?utm_source=blog)的对话智能软件，它接受各种音频格式的音频文件或流（例如，Google Meet），并将对话从语音转录为文本。所以，我们必须实时将各种格式的音频转换为与我们的语音识别引擎兼容的格式。

实时音频转换可以使用GStreamer库实现。与命令类似，我们必须将GStreamer插件组织在流转换管道中，但这次使用编程语言。

让我们首先发布一个Python的工作示例，然后解释它是如何工作的。

```
#!/usr/bin/python3

import gi
gi.require_version('Gst', '1.0')
from gi.repository import Gst
import threading
import queue
import time

# 初始化GStreamer
Gst.init(None)

class AudioConverter:
    """
    实时或更快地转换不同音频为PCM，具体取决于选项。

    属性：
        pipeline (Gst.Pipeline): 用于处理音频的GStreamer管道。
        appsrc (Gst.Element): 用于向管道提供数据的appsrc元素。
        decodebin (Gst.Element): 用于解码不同音频的decodebin元素。
        audioconvert (Gst.Element): 用于格式转换的audioconvert元素。
        audioresample (Gst.Element): 用于调整采样率的audioresample元素（可选）。
        outputformat (Gst.Element): 用于设置输出格式的outputformat元素。
        appsink (Gst.Element): 用于接收转换数据的appsink元素。
        input_queue (queue.Queue): 输入音频数据块的队列。
        output_queue (queue.Queue): 输出PCM数据块的队列。
        thread (threading.Thread): 用于读取输入数据和运行管道的线程。
        options (dict): 包含配置选项的字典。

    选项：
        sync (bool, default=True): 是否将appsink与管道时钟同步（实时处理）。
        preroll (bool, default=False): 在处理数据前预滚动管道。

    方法：
        push_data(data_chunk): 将音频数据块推送到输入队列。
        pull_converted_data(): 从输出队列检索转换的PCM数据块。
        run(): 启动管道和数据处理线程。
        on_pad_added(element, pad): 连接管道中的元素。
        new_sample_callback(appsink): 接收新转换的数据并将其添加到输出队列。
        on_message(bus, message): 处理管道消息（EOS、错误）。
    """

    def __init__(self, options=None):
        """
        使用默认或提供的选项初始化AudioConverter。
        """
        self.options = options or {}

        # 为所有选项设置默认值
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

        # 将元素添加到管道
        self.pipeline.add(self.appsrc)
        self.pipeline.add(self.decodebin)
        self.pipeline.add(self.audioconvert)
        self.pipeline.add(self.audioresample)
        self.pipeline.add(self.outputformat)
        self.pipeline.add(self.appsink)

        # 将元素链接在一起
        self.appsrc.link(self.decodebin)
        self.decodebin.connect("pad-added", self.on_pad_added)
        self.audioconvert.link(self.audioresample)
        self.audioresample.link(self.outputformat)
        self.outputformat.link(self.appsink)

        # 设置appsink属性
        self.appsink.set_property("emit-signals", True)
        self.appsink.connect("new-sample", self.new_sample_callback)
        if not self.options["sync"]:
            self.appsink.set_property("sync", False)

        # 根据选项创建输入和输出队列
        self.input_queue = queue.Queue()
        self.output_queue = queue.Queue()

        self.thread = threading.Thread(target=self.run)
        self.thread.start()

    def push_data(self, data_chunk):
        self.input_queue.put(data_chunk)

    def pull_converted_data(self):
        if not self.output_queue.empty():
            return self.output_queue.get(block=False)  # 等待数据或None
        else:
            return None

    def run(self):
        """
        启动管道和数据处理线程。
        """

        self.pipeline.set_state(Gst.State.PLAYING)
        bus = self.pipeline.get_bus()
        bus.add_signal_watch()
        bus.connect("message", self.on_message)

        # 如果启用，预滚动管道
        if self.options["preroll"]:
            while True:
                msg = bus.timed_pop(Gst.MessageType.ELEMENT, Gst.CLOCK_TIME_NONE)
                if msg is not None:
                    break
            self.pipeline.set_state(Gst.State.NULL)

        while True:
            while self.input_queue.empty():  # 如果队列为空，等待数据
                time.sleep(0.01)

            data_chunk = self.input_queue.get(block=False)  # 等待数据或None
            if data_chunk is None:
                self.appsrc.emit("end-of-stream")
                break  # 接收到数据结束

            self.process_data(data_chunk)

        # 等待EOS消息
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
            print("数据已转换")

        return Gst.FlowReturn.OK

    def on_message(self, bus, message):
        t = message.type
        if t == Gst.MessageType.EOS:
            print("流结束")
            self.output_queue.put(None)  # 向下游发送流结束信号
            self.pipeline.set_state(Gst.State.NULL)
        elif t == Gst.MessageType.ERROR:
            err, debug = message.parse_error()
            print("错误: %s" % err, debug)
            self.pipeline.set_state(Gst.State.NULL)

    def pipeline_reached_eos(self):
        """检查管道是否已达到EOS。"""
        return not self.pipeline or self.pipeline.get_state(Gst.CLOCK_TIME_NONE)[1] == Gst.State.NULL

def main():
    # 创建AudioConverter实例
    converter = AudioConverter(options={"sync": False,
        "output_format": "audio/x-raw,format=S16LE,rate=16000,channels=1"})

    CHUNK_SIZE = 1024  # 根据需要调整
    with open("input.mp3", "rb") as infile, \
         open("output.pcm", "wb") as outfile:

        while True:
            # 从输入文件读取数据块
            data_chunk = infile.read(CHUNK_SIZE)
            if not data_chunk:
                converter.push_data(None)    # 推送流结束。
                break

            # 将数据块推送到转换器
            print("数据推送")
            converter.push_data(data_chunk)

            # 立即尝试拉取任何转换的数据
            converted_chunk = converter.pull_converted_data()
            while converted_chunk is not None:
                outfile.write(converted_chunk)
                converted_chunk = converter.pull_converted_data()

            # 根据处理的音频持续时间计算睡眠时间
            audio_duration = 0.05
            time.sleep(audio_duration)

        # 从管道中刷新剩余数据。
        while not converter.pipeline_reached_eos():
            converted_chunk = converter.pull_converted_data()
            while converted_chunk is not None:
                outfile.write(converted_chunk)
                converted_chunk = converter.pull_converted_data()
            # time.sleep(0.01)
        converted_chunk = converter.pull_converted_data()
        if converted_chunk is not None:
            outfile.write(converted_chunk)

        # 将任何剩余数据刷新到输出文件
        outfile.flush()


    # 发送输入数据结束信号并等待完成
    converter.thread.join()

if __name__ == "__main__":
    main()
```

## "AudioConverter"类
AudioConverter类是此代码中实时音频格式转换的核心功能。让我们分解它如何使用GStreamer管道来实现这一点。

关键的GStreamer插件和数据流如下：
1. 音频数据块从Python程序推送到`appsrc`。
2. `appsrc`将数据注入管道。
3. `decodebin`解码传入的音频格式。
4. `audioconvert`执行格式转换为PCM。
5. `audioresample`（如果启用）调整采样率。
6. `outputformat`确保数据匹配所需的PCM格式。
7. `appsink`接收转换的PCM数据，并为Python程序提供回调机制来检索它。

换句话说，它使用`appsrc`逐块接受音频数据，转换音频数据，然后使用`appsink`逐块发送数据。

`AudioConverter`类的一些关键方法是：
- `on_pad_added`：当元素上的新pad（数据连接点）可用时触发此回调函数。它专门检查来自decodebin的pad并将其链接到audioconvert以处理解码的音频数据。
- `new_sample_callback`：每当有新样本（转换的PCM数据块）可用时，appsink会调用此函数。它从样本缓冲区提取数据并将其添加到输出队列中，供Python程序访问。
- `on_message`：此函数处理在管道总线上接收的GStreamer消息。它监听流结束（EOS）或错误等消息。在EOS时，它向程序发送结束信号并清理管道。错误会被记录用于调试。

AudioConverter类利用GStreamer的管道和元素功能来实现实时音频格式转换。GStreamer元素处理音频数据的解码、转换和打包，而类提供与Python程序交互和数据交换的方法。

### "main"函数

`main`函数模拟实时音频流，演示如何使用`AudioConverter`类。你可以为`AudioConverter`类编写自己的包装函数，但有几个关键点：

#### 基于块的处理
与一次性读取整个音频文件不同，代码以较小的块（CHUNK_SIZE）读取数据。这模拟了音频数据如何通过网络或从直播源连续接收。

#### 非阻塞数据检索
推送输入块后，代码尝试使用pull_converted_data立即拉取可用的转换数据。这模拟了流媒体应用程序如何可能需要尽快处理和潜在播放转换的音频，而不等待整个文件被转换。

#### 睡眠以潜在追赶
计算的睡眠时间，虽然可能不完美，但在推送新数据和尝试拉取转换数据之间引入了延迟。这模拟了转换器（GStreamer管道）处理接收块可能需要的时间。它允许转换器在向其提供更多数据之前有时间追赶。

# 为什么要自己做这一切？

虽然将音频文件转换为不同格式很重要，但为什么要止步于此？使用[SeaMeet](https://meet.seasalt.ai/?utm_source=blog)增强你的音频体验。

**SeaMeet为你的所有音频需求提供准确、实时的转录和摘要。**无论你是转换音频文件、录制播客，还是只想有对话记录，SeaMeet都提供即时、高质量的转录和有见地的摘要。这个强大的工具可以为你节省数小时的手动工作，帮助你从音频内容中提取最大价值。

[立即注册SeaMeet](https://meet.seasalt.ai/?utm_source=blog)，体验跟踪对话的乐趣。

# 更多音频工具箱系列

- [如何从YouTube下载音频数据，一个和多个视频](https://seasalt.ai/blog/65-how-to-download-audio-from-youtube/?utm_source=blog) 
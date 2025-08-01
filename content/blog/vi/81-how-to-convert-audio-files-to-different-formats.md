---
title: "คู่มือฉบับสมบูรณ์สำหรับการแปลงไฟล์เสียง: แปลงไฟล์เสียงได้อย่างง่ายดาย | ชุดเครื่องมือเสียง"
metatitle: "การแปลงไฟล์เสียง/เสียง | ชุดเครื่องมือเสียง"
date: 2024-04-01T10:25:00-08:00
draft: false
author: Guoguo Chen
description: เรียนรู้เกี่ยวกับตัวแปลงไฟล์เสียง การแปลงรูปแบบเสียง และซอฟต์แวร์แปลงไฟล์เสียงฟรีที่ดีที่สุด แปลงไฟล์เสียงได้อย่างง่ายดายด้วยคู่มือทีละขั้นตอนของเรา
weight: 1
tags: ["ชุดเครื่องมือเสียง", "เครื่องมือ AI"]
image: images/blog/81-how-to-convert-audio-files-to-different-formats/81-how-to-convert-audio-files-to-different-formats.png
canonicalURL: "/blog/how-to-convert-audio-files-to-different-formats/"
url: "/blog/how-to-convert-audio-files-to-different-formats/"
---

# บทนำสู่การแปลงไฟล์เสียง
ในโลกของเสียงดิจิทัล มีหลายวิธีในการบันทึกเสียงของเรา แต่ละวิธีมีคุณสมบัติพิเศษของตัวเอง เช่น การทำให้ไฟล์เล็กลง หรือการรักษาคุณภาพเสียงให้ชัดเจน แต่ทำไมถึงมีมากมายขนาดนี้? ก็เพราะทุกคนมีความต้องการและความชอบที่แตกต่างกัน บางรูปแบบเหมาะสำหรับการแชร์เพลงออนไลน์ ในขณะที่บางรูปแบบเหมาะที่สุดสำหรับการบันทึกเสียงในสตูดิโอ

แต่บางครั้ง เราจำเป็นต้องเปลี่ยนไฟล์เสียงประเภทหนึ่งไปเป็นอีกประเภทหนึ่ง อาจเป็นเพราะเครื่องเล่นเพลงของเราเล่นได้เพียงไฟล์ประเภทเดียว แต่เรามีเพลงในรูปแบบอื่น หรืออาจเป็นเพราะเราต้องการประหยัดพื้นที่ในคอมพิวเตอร์โดยการทำให้ไฟล์ขนาดใหญ่เล็กลง นั่นคือจุดที่การแปลงไฟล์เสียงเข้ามามีบทบาท วันนี้ เรามาสำรวจโลกของรูปแบบเสียงและเรียนรู้วิธีการแปลงจากรูปแบบหนึ่งไปอีกรูปแบบหนึ่งได้อย่างง่ายดาย

# รูปแบบเสียงทั่วไป
## MP3, WAV, AAC, FLAC, OGG: ทำความเข้าใจรูปแบบเสียงทั่วไป

ก่อนที่เราจะเจาะลึกรายละเอียดการแปลงไฟล์เสียง เรามาดูรูปแบบเสียงที่พบบ่อยที่สุดบางรูปแบบและที่ที่คุณอาจพบเจอ:

- MP3 (MPEG-1 Audio Layer 3): MP3 เปรียบเสมือนซูเปอร์สตาร์ของรูปแบบเสียง เหมาะสำหรับการแชร์และฟังเพลงออนไลน์ เพราะทำให้ไฟล์มีขนาดเล็กลงโดยไม่สูญเสียคุณภาพมากเกินไป ดังนั้น เมื่อคุณดาวน์โหลดเพลงจากอินเทอร์เน็ต มีโอกาสสูงที่เพลงนั้นจะอยู่ในรูปแบบ MP3

- WAV (Waveform Audio File Format): WAV เน้นการรักษาความชัดเจนของเสียง เป็นรูปแบบที่นิยมใช้สำหรับการบันทึกเสียงระดับมืออาชีพ เพราะไม่บีบอัดเสียง ซึ่งหมายความว่าเหมาะสำหรับการสร้างเพลงในสตูดิโอ
- AAC (Advanced Audio Coding): AAC เป็นรูปแบบที่ใช้โดย iTunes และ Apple Music ดังนั้นเมื่อคุณซื้อเพลงจาก iTunes Store เพลงนั้นน่าจะอยู่ในรูปแบบ AAC นอกจากนี้ ยังเป็นรูปแบบเริ่มต้นสำหรับการบันทึกเสียงบันทึกบน iPhone อีกด้วย

- FLAC (Free Lossless Audio Codec): FLAC เหมาะสำหรับนักฟังเพลงที่ต้องการสิ่งที่ดีที่สุดจากทั้งสองโลก: ขนาดไฟล์เล็กและคุณภาพเสียงระดับสูงสุด เหมาะสำหรับการเก็บถาวรอัลบั้มโปรดของคุณ หรือเพลิดเพลินกับเพลงคุณภาพสูงบนหูฟังสุดหรูของคุณ

- OGG (Ogg Vorbis): OGG อาจไม่เป็นที่นิยมเท่ารูปแบบอื่น ๆ แต่ก็ยังค่อนข้างเจ๋ง เป็นรูปแบบโอเพนซอร์สที่ยอดเยี่ยมสำหรับการสตรีมเพลงออนไลน์ นอกจากนี้ ยังมีขนาดเล็กกว่าไฟล์ MP3 และรองรับคุณสมบัติเพิ่มเติม เช่น เมตาดาตา ซึ่งมีประโยชน์สำหรับการจัดระเบียบไลบรารีเพลงของคุณ

# วิธีการแปลงไฟล์เสียง - ตัวเลือกสำหรับการแปลงไฟล์เสียง

## การแปลงไฟล์เสียงด้วย Command Line

มีตัวเลือกมากมายสำหรับการแปลงไฟล์เสียง หากคุณชอบอินเทอร์เฟซแบบ GUI คุณสามารถใช้ตัวแปลงไฟล์เสียงออนไลน์หรือ Audacity หากคุณเปิดใจที่จะลองทำด้วยตัวเองและไม่รังเกียจการพิมพ์ คุณสามารถใช้ SoX หรือ GStreamer ซึ่งให้ความยืดหยุ่นมากกว่า ที่นี่ ฉันจะเน้นที่ GStreamer เนื่องจากรองรับทั้ง Command Line และการเขียนโปรแกรมได้ดี และรองรับการสตรีม (หรือการแปลงแบบทันที) ได้อย่างเป็นธรรมชาติ


### การติดตั้ง GStreamer
เว็บไซต์ทางการของ GStreamer มีคำแนะนำการติดตั้งโดยละเอียดสำหรับระบบปฏิบัติการต่างๆ ดูได้ที่นี่ สิ่งต่อไปนี้ก็ใช้ได้เช่นกัน

สำหรับระบบ Linux โดยทั่วไปคุณสามารถใช้ตัวจัดการแพ็คเกจได้ ตัวอย่างเช่น สำหรับระบบที่ใช้ Debian/Ubuntu คุณเพียงแค่ทำดังนี้

```
sudo apt install gstreamer1.0
sudo apt install gstreamer1.0-plugins-base
sudo apt install gstreamer1.0-plugins-good gstreamer1.0-plugins-bad gstreamer1.0-plugins-ugly
```

คำสั่งที่สองและสามเป็นทางเลือก แต่ฉันมักจะพบว่าการติดตั้งปลั๊กอินเพิ่มเติมเหล่านี้มีประโยชน์

สำหรับ MacOS คุณสามารถติดตั้งผ่าน Homebrew ได้ คล้ายกับคำสั่ง Linux คุณทำดังนี้

```
brew install gstreamer
```

Homebrew ไม่ได้จัดเตรียมแพ็คเกจแยกต่างหากสำหรับปลั๊กอิน Gstreamer “good”, “bad” และ “ugly” เหมือนที่ทำสำหรับ Linux distributions แต่ Homebrew มักจะติดตั้งชุดปลั๊กอินเป็นส่วนหนึ่งของแพ็คเกจ `gstreamer` เอง

สำหรับ Windows มีตัวติดตั้งที่คอมไพล์ไว้ล่วงหน้า ไปที่เอกสาร GStreamer ที่นี่ และทำตามคำแนะนำ


### การแปลงไฟล์เสียง
เมื่อคุณติดตั้ง GStreamer แล้ว การแปลงจากรูปแบบเสียงหนึ่งไปอีกรูปแบบหนึ่งก็ค่อนข้างตรงไปตรงมา สมมติว่าคุณมีไฟล์เสียงหนึ่งไฟล์ในรูปแบบ MP3 เราจะตั้งชื่อว่า `input.mp3` และคุณต้องการแปลงเป็นรูปแบบ WAV เราจะตั้งชื่อว่า `output.wav` คุณเพียงแค่รันคำสั่งต่อไปนี้:

```
gst-launch-1.0 filesrc location=input.mp3 ! decodebin ! audioconvert ! audioresample ! wavenc ! filesink location=output.wav
```

คำสั่งนี้ใช้ส่วนประกอบ GStreamer ต่อไปนี้:

- filesrc: อ่านข้อมูลจากไฟล์
- decodebin: ตรวจจับและถอดรหัสรูปแบบเสียงของไฟล์อินพุตโดยอัตโนมัติ
- audioconvert: แปลงรูปแบบเสียงเป็นรูปแบบที่เหมาะสมสำหรับการแปลง
- audioresample: สุ่มตัวอย่างเสียงใหม่เป็นอัตราตัวอย่างที่ต้องการ หากจำเป็น
- wavenc: เข้ารหัสข้อมูลเสียงเป็นรูปแบบ WAV
- filesink: เขียนข้อมูลเสียงเอาต์พุตลงในไฟล์

เมื่อคุณรันคำสั่งนี้ GStreamer จะอ่านไฟล์ MP3 อินพุต ถอดรหัส แปลงเป็นรูปแบบ WAV และบันทึกไฟล์ WAV ที่ได้ไปยังตำแหน่งที่ระบุ

คุณสามารถระบุรายละเอียดรูปแบบ WAV โดยใช้ส่วนประกอบ audioconvert นี่คือตัวอย่างการตั้งค่าอัตราตัวอย่างเป็น 44100 Hz และช่องเป็นสเตอริโอ:

```
gst-launch-1.0 filesrc location=input.mp3 ! decodebin ! audioconvert ! audio/x-raw,format=S16LE,rate=44100,channels=2 ! wavenc ! filesink location=output.wav
```

ในทำนองเดียวกัน คุณสามารถแปลงจากประเภทหนึ่งไปอีกประเภทหนึ่งได้โดยใช้ปลั๊กอิน GStreamer ที่แตกต่างกัน


# การแปลงไฟล์เสียงแบบทันที

การแปลงไฟล์เสียงแบบทันที หรือการแปลงไฟล์เสียงแบบเรียลไทม์ เป็นสิ่งจำเป็นในสถานการณ์การประมวลผลเสียงต่างๆ เพื่อยกตัวอย่างเพียงไม่กี่ข้อ:

- ความสามารถในการปรับตัวของการสตรีม: เมื่อสตรีมเนื้อหาเสียงผ่านเครือข่าย อุปกรณ์และแพลตฟอร์มต่างๆ อาจมีความต้องการที่แตกต่างกันสำหรับรูปแบบเสียงและตัวแปลงสัญญาณ การแปลงแบบเรียลไทม์ช่วยให้มั่นใจได้ถึงความสามารถในการปรับตัวของการสตรีมที่ราบรื่นโดยการปรับข้อมูลเสียงแบบไดนามิกให้ตรงกับข้อกำหนดของอุปกรณ์หรือแพลตฟอร์มผู้รับแต่ละราย ความสามารถในการปรับตัวนี้เป็นสิ่งจำเป็นเพื่อให้แน่ใจว่าการเล่นจะราบรื่นในสภาพแวดล้อมที่หลากหลายโดยไม่จำเป็นต้องมีการประมวลผลล่วงหน้าหรือการเข้ารหัสใหม่
- การส่งข้อมูลที่มีความหน่วงต่ำ: ในแอปพลิเคชันแบบโต้ตอบ เช่น การสื่อสารด้วยเสียง เกมออนไลน์ หรือกิจกรรมสด การลดความหน่วงเป็นสิ่งสำคัญสำหรับการรักษาการตอบสนองแบบเรียลไทม์และการมีส่วนร่วมของผู้ใช้ การแปลงข้อมูลเสียงแบบทันทีช่วยให้ข้อมูลเสียงถูกส่งด้วยความหน่วงน้อยที่สุด ทำให้มั่นใจได้ถึงการส่งมอบและการเล่นที่เกือบจะทันที การส่งข้อมูลที่มีความหน่วงต่ำนี้ช่วยเพิ่มประสบการณ์ผู้ใช้โดยรวม โดยเฉพาะอย่างยิ่งในแอปพลิเคชันที่ไวต่อเวลาซึ่งการตอบสนองเป็นสิ่งสำคัญยิ่ง
- ประสิทธิภาพทรัพยากร: การแปลงข้อมูลเสียงแบบเรียลไทม์ช่วยประหยัดทรัพยากรระบบโดยหลีกเลี่ยงความจำเป็นในการจัดเก็บหรือประมวลผลไฟล์เสียงขนาดใหญ่ล่วงหน้า แทนที่จะแปลงเนื้อหาเสียงล่วงหน้าเป็นรูปแบบต่างๆ การแปลงแบบทันทีช่วยให้สามารถจัดสรรทรัพยากรแบบไดนามิกตามความจำเป็น ลดความต้องการพื้นที่จัดเก็บและค่าใช้จ่ายในการประมวลผล วิธีการที่ประหยัดทรัพยากรนี้มีประโยชน์อย่างยิ่งในสภาพแวดล้อมที่มีทรัพยากรจำกัด เช่น ระบบฝังตัวหรืออุปกรณ์เคลื่อนที่ ซึ่งการเพิ่มประสิทธิภาพการใช้ทรัพยากรเป็นสิ่งสำคัญสำหรับการรักษาประสิทธิภาพและความสามารถในการปรับขนาด

ในกรณีการใช้งานเฉพาะของเรา เรามีซอฟต์แวร์อัจฉริยะการสนทนาชื่อ [SeaMeet](https://meet.seasalt.ai/?utm_source=blog) ซึ่งรับไฟล์เสียงหรือสตรีม (เช่น Google Meet) ในรูปแบบเสียงต่างๆ และถอดความการสนทนาจากคำพูดเป็นข้อความ ดังนั้น เราจึงต้องแปลงเสียงในรูปแบบต่างๆ ให้เป็นรูปแบบที่ทำงานร่วมกับเอ็นจิ้นการรู้จำเสียงพูดของเราได้ทันที

การแปลงไฟล์เสียงแบบทันทีหรือแบบเรียลไทม์สามารถทำได้โดยใช้ไลบรารี GStreamer คล้ายกับคำสั่ง เราจะต้องจัดเรียงปลั๊กอิน GStreamer ในไปป์ไลน์การแปลงแบบสตรีมมิ่ง แต่คราวนี้ใช้ภาษาโปรแกรม

มาโพสต์ตัวอย่างการทำงานใน Python ก่อน แล้วเราจะอธิบายว่ามันทำงานอย่างไร

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

## Lớp “AudioConverter”
Lớp AudioConverter เป็นฟังก์ชันหลักสำหรับการแปลงรูปแบบเสียงแบบเรียลไทม์ในโค้ดนี้ มาวิเคราะห์กันว่ามันใช้ไปป์ไลน์ GStreamer เพื่อให้บรรลุเป้าหมายนี้ได้อย่างไร

ปลั๊กอิน Gstreamer หลักและการไหลของข้อมูลมีดังนี้:
1. บล็อกข้อมูลเสียงจะถูกส่งจากโปรแกรม Python ไปยัง `appsrc`
2. `appsrc` ป้อนข้อมูลเข้าสู่ไปป์ไลน์
3. `decodebin` ถอดรหัสรูปแบบเสียงที่เข้ามา
4. `audioconvert` ทำการแปลงรูปแบบเป็น PCM
5. `audioresample` (หากเปิดใช้งาน) ปรับอัตราตัวอย่าง
6. `outputformat` ตรวจสอบให้แน่ใจว่าข้อมูลตรงกับรูปแบบ PCM ที่ต้องการ
7. `appsink` รับข้อมูล PCM ที่แปลงแล้วและมีกลไกการเรียกกลับเพื่อให้โปรแกรม Python ดึงข้อมูลได้

กล่าวอีกนัยหนึ่งคือ มันรับข้อมูลเสียงทีละบล็อกโดยใช้ `appsrc` แปลงข้อมูลเสียงแล้วส่งข้อมูลออกทีละบล็อกโดยใช้ `appsink`

เมธอดหลักบางส่วนสำหรับคลาส `AudioConverter` คือ:
- `on_pad_added`: ฟังก์ชันเรียกกลับนี้จะถูกเรียกใช้เมื่อมี pad ใหม่ (จุดเชื่อมต่อข้อมูล) พร้อมใช้งานบนองค์ประกอบ มันจะตรวจสอบ pad จาก decodebin โดยเฉพาะและเชื่อมโยงกับ audioconvert เพื่อประมวลผลข้อมูลเสียงที่ถอดรหัสแล้ว
- `new_sample_callback`: ฟังก์ชันนี้ถูกเรียกโดย appsink เมื่อมีตัวอย่างใหม่ (บล็อกข้อมูล PCM ที่แปลงแล้ว) พร้อมใช้งาน มันจะดึงข้อมูลจากบัฟเฟอร์ตัวอย่างและเพิ่มลงในคิวเอาต์พุตเพื่อให้โปรแกรม Python เข้าถึงได้
- `on_message`: ฟังก์ชันนี้จัดการข้อความ GStreamer ที่ได้รับบนบัสของไปป์ไลน์ มันจะฟังข้อความเช่น End-of-Stream (EOS) หรือข้อผิดพลาด เมื่อได้รับ EOS มันจะส่งสัญญาณสิ้นสุดไปยังโปรแกรมและล้างไปป์ไลน์ ข้อผิดพลาดจะถูกบันทึกไว้เพื่อวัตถุประสงค์ในการดีบัก

คลาส AudioConverter ใช้ประโยชน์จากฟังก์ชันไปป์ไลน์และองค์ประกอบของ GStreamer เพื่อให้บรรลุการแปลงรูปแบบเสียงแบบเรียลไทม์ องค์ประกอบ GStreamer จัดการการถอดรหัส การแปลง และการบรรจุข้อมูลเสียง ในขณะที่คลาสมีเมธอดสำหรับการโต้ตอบและแลกเปลี่ยนข้อมูลกับโปรแกรม Python

### ฟังก์ชัน “main”

ฟังก์ชัน `main` จำลองการสตรีมเสียงแบบเรียลไทม์และแสดงให้เห็นถึงวิธีการใช้คลาส `AudioConverter` คุณสามารถเขียนฟังก์ชัน wrapper ของคุณเองสำหรับคลาส `AudioConverter` ได้ แต่มีประเด็นสำคัญบางประการ:

#### การประมวลผลแบบบล็อก
ไม่เหมือนกับการอ่านไฟล์เสียงทั้งหมดในคราวเดียว โค้ดจะอ่านข้อมูลเป็นบล็อกเล็กๆ (CHUNK_SIZE) สิ่งนี้จำลองวิธีการรับข้อมูลเสียงในการสตรีมต่อเนื่องผ่านเครือข่ายหรือจากแหล่งข้อมูลสด

#### การดึงข้อมูลแบบไม่บล็อก
หลังจากส่งบล็อกอินพุตแล้ว โค้ดจะพยายามดึงข้อมูลที่แปลงแล้วที่พร้อมใช้งานทันทีโดยใช้ pull_converted_data สิ่งนี้จำลองวิธีการที่แอปพลิเคชันสตรีมมิ่งอาจต้องประมวลผลและอาจเล่นเสียงที่แปลงแล้วโดยเร็วที่สุด โดยไม่ต้องรอให้ไฟล์ทั้งหมดถูกแปลง

#### การพักเพื่อความสามารถในการตามทัน
เวลาพักที่คำนวณได้ แม้ว่าจะไม่สมบูรณ์แบบ แต่ก็สร้างความล่าช้าระหว่างการส่งข้อมูลใหม่และการพยายามดึงข้อมูลที่แปลงแล้ว สิ่งนี้จำลองเวลาที่ตัวแปลง (ไปป์ไลน์ GStreamer) อาจใช้ในการประมวลผลบล็อกที่ได้รับ มันช่วยให้ตัวแปลงมีเวลาในการตามทันก่อนที่จะให้ข้อมูลเพิ่มเติม

# ทำไมต้องทำเองทั้งหมด?

แม้ว่าการแปลงไฟล์เสียงเป็นรูปแบบต่างๆ เป็นสิ่งจำเป็น แต่ทำไมต้องหยุดอยู่แค่นั้น? ยกระดับประสบการณ์เสียงของคุณด้วย [SeaMeet](https://meet.seasalt.ai/?utm_source=blog)

**SeaMeet ให้การถอดเสียงและการสรุปที่แม่นยำแบบเรียลไทม์สำหรับทุกความต้องการด้านเสียงของคุณ** ไม่ว่าคุณจะแปลงไฟล์เสียง บันทึกพอดแคสต์ หรือเพียงแค่ต้องการการถอดเสียงการสนทนา SeaMeet ให้การถอดเสียงคุณภาพสูงทันทีและบทสรุปเชิงลึก เครื่องมืออันทรงพลังนี้สามารถช่วยคุณประหยัดเวลาในการทำงานด้วยตนเองและช่วยให้คุณดึงคุณค่าสูงสุดจากเนื้อหาเสียงของคุณ

[ลงทะเบียน SeaMeet วันนี้](https://meet.seasalt.ai/?utm_source=blog) และสัมผัสประสบการณ์ความสุขในการติดตามการสนทนาของคุณ

# เพิ่มเติมจากชุดเครื่องมือเสียง

- [วิธีการดาวน์โหลดข้อมูลเสียงจาก YouTube วิดีโอเดียวและหลายวิดีโอ](https://seasalt.ai/blog/65-how-to-download-audio-from-youtube/?utm_source=blog)
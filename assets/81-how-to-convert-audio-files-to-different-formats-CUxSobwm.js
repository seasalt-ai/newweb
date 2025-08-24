const e=`---
title: "Your Comprehensive Guide to Audio Conversion: Convert Sound Files Easily | Audio Toolbox Series"
metatitle: "Audio/Sound Files Conversion | Audio Toolbox Series"
date: 2024-04-01 10:25:00-08:00
draft: false
author: Guoguo Chen
description: "Learn about audio file converters, sound format conversion, and the best free audio converter software. Convert audio files effortlessly with our step-by-step guide."
weight: 1
tags:
  - Audio Toolbox
  - AI Tools
image: images/blog/81-how-to-convert-audio-files-to-different-formats/81-how-to-convert-audio-files-to-different-formats.png
canonicalURL: /blog/how-to-convert-audio-files-to-different-formats/
url: /blog/how-to-convert-audio-files-to-different-formats/
---

# Introduction to Audio Conversion
In the world of digital audio, there are many ways to save our sounds. Each way has its own special features, like making files smaller or keeping the sound really clear. But why so many? Well, because everyone has different needs and preferences. Some formats work well for sharing music online, while others are best for studio recordings.

But sometimes, we need to change one type of audio file into another. Maybe our music player only plays one kind of file, but we have a song in a different format. Or maybe we want to save space on our computer by making big files smaller. That's where audio conversion comes in. Today, let's explore the world of audio formats and learn how to easily convert from one to another.

# Common Audio Formats
## MP3, WAV, AAC, FLAC, OGG: Understanding Common Audio Formats

Before we dive into the audio conversion details, let's first take a closer look at some of the most common audio formats and where you might encounter them: 

- MP3 (MPEG-1 Audio Layer 3): MP3 is like the superstar of audio formats. It's perfect for sharing and listening to music online because it makes files smaller without losing too much quality. So, when you download a song from the internet, chances are it's in MP3 format.

- WAV (Waveform Audio File Format): WAV is all about keeping things super clear. It's the go-to format for professional audio recordings because it doesn't compress the sound, which means it's great for making music in a studio. 
- AAC (Advanced Audio Coding): AAC is the format used by iTunes and Apple Music, so when you buy a song from the iTunes Store, it's probably in AAC format. Plus, it's also the default format for recording voice memos on iPhones.

- FLAC (Free Lossless Audio Codec): FLAC is for the audiophiles out there who want the best of both worlds: small file sizes and top-notch sound quality. It's perfect for archiving your favorite albums or enjoying high-quality music on your fancy headphones. 

- OGG (Ogg Vorbis): OGG might not be as popular as the others, but it's still pretty cool. It's an open-source format that's great for streaming music online. Plus, it's smaller than MP3 files and supports extra features like metadata, which is handy for organizing your music library.

# How to Convert Audio Files - Options for Audio Conversion

## Audio Conversion with Command Line

There are many options for audio conversion. If you prefer GUI interfaces, you could use online audio converters or Audacity. If you're open to getting your hands dirty and don’t mind typing, you can use SoX or GStreamer, which offer more flexibility. Here, I'm going to focus on GStreamer since it supports both command line and programming well and naturally supports streaming (or conversion on the fly).


### GStreamer Installation
The official GStreamer website provides detailed installation instructions for various operating systems, see here. The following also works.

For Linux systems, you can generally use package managers. For example, for Debian/Ubuntu-based systems, you simply do

\`\`\`
sudo apt install gstreamer1.0
sudo apt install gstreamer1.0-plugins-base
sudo apt install gstreamer1.0-plugins-good gstreamer1.0-plugins-bad gstreamer1.0-plugins-ugly
\`\`\`

The second and third commands are optional but I always find it’s helpful to install these additional plugins.

For MacOS, you can install through Homebrew. Similar to the Linux commands, you do

\`\`\`
brew install gstreamer
\`\`\`

Homebrew does not provide separate packages for the “good”, “bad” and “ugly” Gstreamer plugins as it does for Linux distributions. Instead, Homebrew typically installs a set of plugins as part of the \`gstreamer\` package itself.

For Windows, there are pre-compiled installers, go to the GStreamer documentation here and follow the instructions.


### Audio Conversion
Once you have GStreamer installed, it’s pretty straightforward to convert from one audio format into another. Suppose you have one audio file in MP3 format, let’s name it \`input.mp3\`, and you would like to convert it to WAV format, let’s name it \`output.wav\`, you simply run the following command:

\`\`\`
gst-launch-1.0 filesrc location=input.mp3 ! decodebin ! audioconvert ! audioresample ! wavenc ! filesink location=output.wav
\`\`\`

This command uses the following GStreamer elements: 

- filesrc: Reads data from a file. 
- decodebin: Automatically detects and decodes the audio format of the input file.
- audioconvert: Converts the audio format to a format suitable for conversion.
- audioresample: Resamples the audio to the desired sample rate, if necessary. 
- wavenc: Encodes the audio data to the WAV format. 
- filesink: Writes the output audio data to a file. 

Once you run this command, GStreamer will read the input MP3 file, decode it, convert it to WAV format, and save the resulting WAV file to the specified location.

You can specify the WAV format details using the audioconvert element. Here's an example setting the sample rate to 44100 Hz and channels to stereo:

\`\`\`
gst-launch-1.0 filesrc location=input.mp3 ! decodebin ! audioconvert ! audio/x-raw,format=S16LE,rate=44100,channels=2 ! wavenc ! filesink location=output.wav
\`\`\`

Similarly, you can convert from one type to another using different GStreamer plugins.


# Audio Conversion on the Fly

Audio conversion on the fly, or real-time audio conversion, is essential in various audio processing scenarios. To name just a few:

- Streaming Adaptability: When streaming audio content over networks, different devices and platforms may have varying requirements for audio formats and codecs. Real-time conversion ensures seamless streaming adaptability by dynamically adjusting the audio data to match the specifications of each receiving device or platform. This adaptability is essential for ensuring smooth playback across diverse environments without the need for pre-processing or re-encoding. 
- Low-Latency Transmission: In interactive applications such as voice communication, online gaming, or live events, minimizing latency is crucial for maintaining real-time responsiveness and user engagement. Performing audio conversion on the fly allows audio data to be transmitted with minimal delay, ensuring near-instantaneous delivery and playback. This low-latency transmission enhances the overall user experience, especially in time-sensitive applications where responsiveness is paramount. 
- Resource Efficiency: Real-time audio conversion conserves system resources by avoiding the need for storing or processing large audio files in advance. Instead of pre-converting audio content to various formats, conversion on the fly allows resources to be allocated dynamically as needed, reducing storage requirements and processing overhead. This resource-efficient approach is particularly advantageous in resource-constrained environments, such as embedded systems or mobile devices, where optimizing resource utilization is essential for maintaining performance and scalability.

In our specific use case, we have a conversation intelligence software called [SeaMeet](https://seameet.ai/?utm_source=blog) which accepts audio files or streams (e.g., Google Meet) in various audio formats and transcribes the conversation from speech to text. So, we have to convert audio in various formats into a format that works with our speech recognition engine on the fly.

On-the-fly or real-time audio conversion can be achieved using the GStreamer library. Similar to the command, we will have to organzie the GStreamer plugins in a streaming conversion pipeline, but this time, with a programming language.

Let’s first post a working example in Python, and we will explain how it works.

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

## The “AudioConverter” Class
The AudioConverter class is the core functionality for real-time audio format conversion in this code. Let's break down how it uses a GStreamer pipeline to achieve this.

The key Gstreamer plugins and the data flow is as follows:
1. Audio data chunks are pushed from the Python program to \`appsrc\`. 
2. \`appsrc\` injects the data into the pipeline. 
3. \`decodebin\` decodes the incoming audio format. 
4. \`audioconvert\` performs the format conversion to PCM. 
5. \`audioresample\` (if enabled) adjusts the sample rate. 
6. \`outputformat\` ensures the data matches the desired PCM format.
7. \`appsink\` receives the converted PCM data and provides a callback mechanism for the Python program to retrieve it.

In other words, it accepts audio data chunk by chunk using \`appsrc\`, converts the audio data and then sends the data out chunk by chunk using \`appsink\`.

Some key methods for the \`AudioConverter\` class are:
- \`on_pad_added\`: This callback function is triggered when a new pad (data connection point) becomes available on an element. It specifically checks for a pad from decodebin and links it to audioconvert to handle the decoded audio data. 
- \`new_sample_callback\`: This function is called by appsink whenever a new sample (converted PCM data chunk) is available. It extracts the data from the sample buffer and adds it to the output queue for the Python program to access. 
- \`on_message\`: This function handles GStreamer messages received on the pipeline's bus. It listens for messages like End-of-Stream (EOS) or errors. Upon EOS, it signals the end to the program and cleans up the pipeline. Errors are logged for debugging purposes.

The AudioConverter class leverages GStreamer's pipeline and element functionalities to achieve real-time audio format conversion. The GStreamer elements handle the decoding, conversion, and packaging of the audio data, while the class provides methods for interaction and data exchange with the Python program.

### The “main” Function

The \`main\` function simulates real-time audio streaming and demonstrates how to use the \`AudioConverter\` class. You can write your own wrapper function for the \`AudioConverter\` class but a few key points:

#### Chunk-based Processing
Unlike reading the entire audio file at once, the code reads data in smaller chunks (CHUNK_SIZE). This simulates how audio data might be received in a continuous stream over a network or from a live source. 

#### Non-blocking Data Retrieval
After pushing an input chunk, the code attempts to pull immediately available converted data using pull_converted_data. This mimics how a streaming application might need to process and potentially play back the converted audio as soon as possible, without waiting for the entire file to be converted. 

#### Sleep for Potential Catch-up
The calculated sleep time, though likely not perfect, introduces a delay between pushing new data and attempting to pull converted data. This simulates the potential time it might take for the converter (GStreamer pipeline) to process the received chunk. It allows the converter some time to catch up before feeding it with more data.

# Why doing it all by yourself?

While converting audio files to different formats is essential, why stop there? Enhance your audio experience with [SeaMeet](https://seameet.ai/?utm_source=blog).

**SeaMeet offers accurate, real-time transcription and summaries for all your audio needs.** Whether you're converting audio files, recording a podcast, or just want to have a conversation transcript, SeaMeet provides instant, high-quality transcripts and insightful summaries. This powerful tool can save you hours of manual work and help you extract maximum value from your audio content.

[Sign up for SeaMeet today](https://seameet.ai/?utm_source=blog) and experience the joy of tracking your conversation.

# More from Audio Toolbox Series

- [How to Download Audio Data from YouTube, One and Many Videos](https://seasalt.ai/blog/65-how-to-download-audio-from-youtube/?utm_source=blog)`;export{e as default};

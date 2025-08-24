const e=`---
title: "Ihr umfassender Leitfaden zur Audiokonvertierung: Sounddateien einfach konvertieren | Audio-Toolbox-Serie"
metatitle: "Audiokonvertierung | Audio-Toolbox-Serie"
date: 2024-04-01 10:25:00-08:00
draft: false
author: Guoguo Chen
description: "Erfahren Sie mehr über Audiokonverter, die Konvertierung von Soundformaten und die beste kostenlose Audiokonverter-Software. Konvertieren Sie Audiodateien mühelos mit unserer Schritt-für-Schritt-Anleitung."
weight: 1
tags:
  - Audio-Toolbox
  - AI-Tools
image: images/blog/81-how-to-convert-audio-files-to-different-formats/81-how-to-convert-audio-files-to-different-formats.png
canonicalURL: /blog/how-to-convert-audio-files-to-different-formats/
url: /blog/how-to-convert-audio-files-to-different-formats/
---

# Einführung in die Audiokonvertierung
In der Welt des digitalen Audios gibt es viele Möglichkeiten, unsere Klänge zu speichern. Jede Methode hat ihre eigenen Besonderheiten, wie das Verkleinern von Dateien oder das Beibehalten eines wirklich klaren Klangs. Aber warum so viele? Nun, weil jeder unterschiedliche Bedürfnisse und Vorlieben hat. Einige Formate eignen sich gut zum Teilen von Musik online, während andere am besten für Studioaufnahmen geeignet sind.

Manchmal müssen wir jedoch einen Audiotyp in einen anderen umwandeln. Vielleicht spielt unser Musikplayer nur eine Art von Datei ab, aber wir haben ein Lied in einem anderen Format. Oder vielleicht möchten wir Speicherplatz auf unserem Computer sparen, indem wir große Dateien verkleinern. Hier kommt die Audiokonvertierung ins Spiel. Lassen Sie uns heute die Welt der Audioformate erkunden und lernen, wie man einfach von einem zum anderen konvertiert.

# Gängige Audioformate
## MP3, WAV, AAC, FLAC, OGG: Gängige Audioformate verstehen

Bevor wir uns mit den Details der Audiokonvertierung befassen, werfen wir zunächst einen genaueren Blick auf einige der gängigsten Audioformate und wo Sie ihnen begegnen könnten:

- MP3 (MPEG-1 Audio Layer 3): MP3 ist wie der Superstar der Audioformate. Es ist perfekt zum Teilen und Hören von Musik online, da es Dateien verkleinert, ohne zu viel Qualität zu verlieren. Wenn Sie also ein Lied aus dem Internet herunterladen, ist es wahrscheinlich im MP3-Format.

- WAV (Waveform Audio File Format): Bei WAV geht es darum, die Dinge super klar zu halten. Es ist das bevorzugte Format für professionelle Audioaufnahmen, da es den Klang nicht komprimiert, was bedeutet, dass es sich hervorragend zum Musizieren in einem Studio eignet.
- AAC (Advanced Audio Coding): AAC ist das Format, das von iTunes und Apple Music verwendet wird. Wenn Sie also ein Lied im iTunes Store kaufen, ist es wahrscheinlich im AAC-Format. Außerdem ist es auch das Standardformat zum Aufnehmen von Sprachnotizen auf iPhones.

- FLAC (Free Lossless Audio Codec): FLAC ist für Audiophile gedacht, die das Beste aus beiden Welten wollen: kleine Dateigrößen und erstklassige Klangqualität. Es ist perfekt zum Archivieren Ihrer Lieblingsalben oder zum Genießen hochwertiger Musik mit Ihren schicken Kopfhörern.

- OGG (Ogg Vorbis): OGG ist vielleicht nicht so beliebt wie die anderen, aber es ist immer noch ziemlich cool. Es ist ein Open-Source-Format, das sich hervorragend zum Streamen von Musik online eignet. Außerdem ist es kleiner als MP3-Dateien und unterstützt zusätzliche Funktionen wie Metadaten, was praktisch ist, um Ihre Musikbibliothek zu organisieren.

# So konvertieren Sie Audiodateien – Optionen zur Audiokonvertierung

## Audiokonvertierung mit der Befehlszeile

Es gibt viele Optionen für die Audiokonvertierung. Wenn Sie GUI-Oberflächen bevorzugen, können Sie Online-Audiokonverter oder Audacity verwenden. Wenn Sie bereit sind, sich die Hände schmutzig zu machen und das Tippen nicht stört, können Sie SoX oder GStreamer verwenden, die mehr Flexibilität bieten. Hier werde ich mich auf GStreamer konzentrieren, da es sowohl die Befehlszeile als auch die Programmierung gut unterstützt und das Streaming (oder die Konvertierung im laufenden Betrieb) natürlich unterstützt.


### GStreamer-Installation
Die offizielle GStreamer-Website bietet detaillierte Installationsanweisungen für verschiedene Betriebssysteme, siehe hier. Das Folgende funktioniert auch.

Für Linux-Systeme können Sie im Allgemeinen Paketmanager verwenden. Für Debian/Ubuntu-basierte Systeme führen Sie beispielsweise einfach Folgendes aus:

\`\`\`
sudo apt install gstreamer1.0
sudo apt install gstreamer1.0-plugins-base
sudo apt install gstreamer1.0-plugins-good gstreamer1.0-plugins-bad gstreamer1.0-plugins-ugly
\`\`\`

Die zweite und dritte Befehle sind optional, aber ich finde es immer hilfreich, diese zusätzlichen Plugins zu installieren.

Für MacOS können Sie über Homebrew installieren. Ähnlich wie bei den Linux-Befehlen führen Sie Folgendes aus:

\`\`\`
brew install gstreamer
\`\`\`

Homebrew bietet keine separaten Pakete für die „good“, „bad“ und „ugly“ Gstreamer-Plugins an, wie es für Linux-Distributionen der Fall ist. Stattdessen installiert Homebrew typischerweise eine Reihe von Plugins als Teil des \`gstreamer\`-Pakets selbst.

Für Windows gibt es vorkompilierte Installationsprogramme. Gehen Sie hier zur GStreamer-Dokumentation und folgen Sie den Anweisungen.


### Audiokonvertierung
Sobald GStreamer installiert ist, ist es ziemlich einfach, von einem Audioformat in ein anderes zu konvertieren. Angenommen, Sie haben eine Audiodatei im MP3-Format, nennen wir sie \`input.mp3\`, und Sie möchten sie in das WAV-Format konvertieren, nennen wir sie \`output.wav\`, führen Sie einfach den folgenden Befehl aus:

\`\`\`
gst-launch-1.0 filesrc location=input.mp3 ! decodebin ! audioconvert ! audioresample ! wavenc ! filesink location=output.wav
\`\`\`

Dieser Befehl verwendet die folgenden GStreamer-Elemente:

- filesrc: Liest Daten aus einer Datei.
- decodebin: Erkennt und dekodiert automatisch das Audioformat der Eingabedatei.
- audioconvert: Konvertiert das Audioformat in ein für die Konvertierung geeignetes Format.
- audioresample: Resampelt das Audio bei Bedarf auf die gewünschte Abtastrate.
- wavenc: Kodiert die Audiodaten in das WAV-Format.
- filesink: Schreibt die Ausgabedaten in eine Datei.

Nachdem Sie diesen Befehl ausgeführt haben, liest GStreamer die MP3-Eingabedatei, dekodiert sie, konvertiert sie in das WAV-Format und speichert die resultierende WAV-Datei am angegebenen Speicherort.

Sie können die WAV-Formatdetails mit dem audioconvert-Element angeben. Hier ist ein Beispiel, das die Abtastrate auf 44100 Hz und die Kanäle auf Stereo einstellt:

\`\`\`
gst-launch-1.0 filesrc location=input.mp3 ! decodebin ! audioconvert ! audio/x-raw,format=S16LE,rate=44100,channels=2 ! wavenc ! filesink location=output.wav
\`\`\`

Ähnlich können Sie mit verschiedenen GStreamer-Plugins von einem Typ zum anderen konvertieren.


# Audiokonvertierung im laufenden Betrieb

Die Audiokonvertierung im laufenden Betrieb, oder Echtzeit-Audiokonvertierung, ist in verschiedenen Audiodatenverarbeitungsszenarien unerlässlich. Um nur einige zu nennen:

- Streaming-Anpassungsfähigkeit: Beim Streaming von Audioinhalten über Netzwerke können verschiedene Geräte und Plattformen unterschiedliche Anforderungen an Audioformate und Codecs haben. Die Echtzeitkonvertierung gewährleistet eine nahtlose Streaming-Anpassungsfähigkeit, indem die Audiodaten dynamisch an die Spezifikationen jedes empfangenden Geräts oder jeder Plattform angepasst werden. Diese Anpassungsfähigkeit ist unerlässlich, um eine reibungslose Wiedergabe in verschiedenen Umgebungen ohne Vorverarbeitung oder Neukodierung zu gewährleisten.
- Übertragung mit geringer Latenz: In interaktiven Anwendungen wie Sprachkommunikation, Online-Spielen oder Live-Events ist die Minimierung der Latenz entscheidend für die Aufrechterhaltung der Echtzeit-Reaktionsfähigkeit und des Benutzerengagements. Die Durchführung der Audiokonvertierung im laufenden Betrieb ermöglicht die Übertragung von Audiodaten mit minimaler Verzögerung, wodurch eine nahezu sofortige Bereitstellung und Wiedergabe gewährleistet wird. Diese Übertragung mit geringer Latenz verbessert das gesamte Benutzererlebnis, insbesondere in zeitkritischen Anwendungen, bei denen die Reaktionsfähigkeit von größter Bedeutung ist.
- Ressourceneffizienz: Die Echtzeit-Audiokonvertierung spart Systemressourcen, indem sie die Notwendigkeit vermeidet, große Audiodateien im Voraus zu speichern oder zu verarbeiten. Anstatt Audioinhalte in verschiedene Formate vorzukonvertieren, ermöglicht die Konvertierung im laufenden Betrieb, dass Ressourcen dynamisch nach Bedarf zugewiesen werden, wodurch der Speicherbedarf und der Verarbeitungsaufwand reduziert werden. Dieser ressourceneffiziente Ansatz ist besonders vorteilhaft in ressourcenbeschränkten Umgebungen, wie z. B. eingebetteten Systemen oder mobilen Geräten, wo die Optimierung der Ressourcennutzung für die Aufrechterhaltung der Leistung und Skalierbarkeit unerlässlich ist.

In unserem speziellen Anwendungsfall haben wir eine Konversationsintelligenzsoftware namens [SeaMeet](https://seameet.ai/?utm_source=blog), die Audiodateien oder Streams (z. B. Google Meet) in verschiedenen Audioformaten akzeptiert und die Konversation von Sprache in Text transkribiert. Wir müssen also Audio in verschiedenen Formaten im laufenden Betrieb in ein Format konvertieren, das mit unserer Spracherkennungs-Engine funktioniert.

Die On-the-Fly- oder Echtzeit-Audiokonvertierung kann mit der GStreamer-Bibliothek erreicht werden. Ähnlich wie beim Befehl müssen wir die GStreamer-Plugins in einer Streaming-Konvertierungspipeline organisieren, diesmal jedoch mit einer Programmiersprache.

Lassen Sie uns zunächst ein funktionierendes Beispiel in Python posten, und wir werden erklären, wie es funktioniert.

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

## Die Klasse „AudioConverter“
Die Klasse AudioConverter ist die Kernfunktionalität für die Echtzeit-Audiokonvertierung in diesem Code. Lassen Sie uns aufschlüsseln, wie sie eine GStreamer-Pipeline verwendet, um dies zu erreichen.

Die wichtigsten GStreamer-Plugins und der Datenfluss sind wie folgt:
1. Audio-Datenblöcke werden vom Python-Programm an \`appsrc\` übertragen.
2. \`appsrc\` injiziert die Daten in die Pipeline.
3. \`decodebin\` dekodiert das eingehende Audioformat.
4. \`audioconvert\` führt die Formatkonvertierung nach PCM durch.
5. \`audioresample\` (falls aktiviert) passt die Abtastrate an.
6. \`outputformat\` stellt sicher, dass die Daten dem gewünschten PCM-Format entsprechen.
7. \`appsink\` empfängt die konvertierten PCM-Daten und bietet einen Callback-Mechanismus für das Python-Programm, um sie abzurufen.

Mit anderen Worten, es akzeptiert Audio-Datenblock für Audio-Datenblock mit \`appsrc\`, konvertiert die Audiodaten und sendet die Daten dann Block für Block mit \`appsink\` aus.

Einige wichtige Methoden für die Klasse \`AudioConverter\` sind:
- \`on_pad_added\`: Diese Callback-Funktion wird ausgelöst, wenn ein neues Pad (Datenverbindungspunkt) an einem Element verfügbar wird. Sie prüft speziell auf ein Pad von decodebin und verknüpft es mit audioconvert, um die dekodierten Audiodaten zu verarbeiten.
- \`new_sample_callback\`: Diese Funktion wird von appsink aufgerufen, wenn ein neues Sample (konvertierter PCM-Datenblock) verfügbar ist. Sie extrahiert die Daten aus dem Sample-Puffer und fügt sie der Ausgabewarteschlange hinzu, damit das Python-Programm darauf zugreifen kann.
- \`on_message\`: Diese Funktion verarbeitet GStreamer-Nachrichten, die auf dem Bus der Pipeline empfangen werden. Sie lauscht auf Nachrichten wie End-of-Stream (EOS) oder Fehler. Bei EOS signalisiert sie dem Programm das Ende und bereinigt die Pipeline. Fehler werden zu Debugging-Zwecken protokolliert.

Die Klasse AudioConverter nutzt die Pipeline- und Elementfunktionen von GStreamer, um eine Echtzeit-Audiokonvertierung zu erreichen. Die GStreamer-Elemente übernehmen das Dekodieren, Konvertieren und Verpacken der Audiodaten, während die Klasse Methoden für die Interaktion und den Datenaustausch mit dem Python-Programm bereitstellt.

### Die Funktion „main“

Die Funktion \`main\` simuliert Echtzeit-Audio-Streaming und demonstriert die Verwendung der Klasse \`AudioConverter\`. Sie können Ihre eigene Wrapper-Funktion für die Klasse \`AudioConverter\` schreiben, aber hier sind einige wichtige Punkte:

#### Chunk-basierte Verarbeitung
Im Gegensatz zum gleichzeitigen Lesen der gesamten Audiodatei liest der Code Daten in kleineren Blöcken (CHUNK_SIZE). Dies simuliert, wie Audiodaten in einem kontinuierlichen Stream über ein Netzwerk oder von einer Live-Quelle empfangen werden könnten.

#### Nicht-blockierender Datenabruf
Nach dem Pushen eines Eingabeblocks versucht der Code, sofort verfügbare konvertierte Daten mit \`pull_converted_data\` abzurufen. Dies ahmt nach, wie eine Streaming-Anwendung die konvertierten Audiodaten so schnell wie möglich verarbeiten und möglicherweise wiedergeben muss, ohne darauf zu warten, dass die gesamte Datei konvertiert wird.

#### Schlaf für potenziellen Aufholbedarf
Die berechnete Schlafzeit, obwohl wahrscheinlich nicht perfekt, führt eine Verzögerung zwischen dem Pushen neuer Daten und dem Versuch, konvertierte Daten abzurufen, ein. Dies simuliert die potenzielle Zeit, die der Konverter (GStreamer-Pipeline) benötigt, um den empfangenen Block zu verarbeiten. Es gibt dem Konverter etwas Zeit, um aufzuholen, bevor er mit weiteren Daten gefüttert wird.

# Warum alles selbst machen?

Obwohl die Konvertierung von Audiodateien in verschiedene Formate unerlässlich ist, warum sollte man dort aufhören? Verbessern Sie Ihr Audioerlebnis mit [SeaMeet](https://seameet.ai/?utm_source=blog).

**SeaMeet bietet genaue, Echtzeit-Transkriptionen und Zusammenfassungen für alle Ihre Audioanforderungen.** Egal, ob Sie Audiodateien konvertieren, einen Podcast aufnehmen oder einfach nur eine Gesprächstranskription haben möchten, SeaMeet bietet sofortige, hochwertige Transkriptionen und aufschlussreiche Zusammenfassungen. Dieses leistungsstarke Tool kann Ihnen Stunden manueller Arbeit ersparen und Ihnen helfen, den maximalen Wert aus Ihren Audioinhalten zu ziehen.

[Melden Sie sich noch heute für SeaMeet an](https://seameet.ai/?utm_source=blog) und erleben Sie die Freude, Ihre Gespräche zu verfolgen.

# Mehr aus der Audio-Toolbox-Serie

- [So laden Sie Audiodaten von YouTube herunter, einzelne und mehrere Videos](https://seasalt.ai/blog/65-how-to-download-audio-from-youtube/?utm_source=blog)`;export{e as default};

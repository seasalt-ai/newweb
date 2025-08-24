const e=`---
title: "Ghidul dumneavoastră cuprinzător pentru conversia audio: Convertiți fișierele audio cu ușurință | Seria Audio Toolbox"
metatitle: "Conversia fișierelor audio/sunet | Seria Audio Toolbox"
date: 2024-04-01 10:25:00-08:00
modified_date: 2024-05-16T12:00:00Z
draft: false
author: Guoguo Chen
description: "Aflați despre convertoarele de fișiere audio, conversia formatelor audio și cel mai bun software gratuit de conversie audio. Convertiți fișierele audio cu ușurință cu ghidul nostru pas cu pas."
weight: 1
tags:
  - Audio Toolbox
  - Instrumente AI
image: images/blog/81-how-to-convert-audio-files-to-different-formats/81-how-to-convert-audio-files-to-different-formats.png
canonicalURL: /blog/how-to-convert-audio-files-to-different-formats/
url: /blog/how-to-convert-audio-files-to-different-formats/
---

# Introducere în conversia audio
În lumea audio digitală, există multe modalități de a stoca sunetele noastre. Fiecare metodă are caracteristicile sale unice, cum ar fi reducerea dimensiunii fișierelor sau menținerea sunetului foarte clar. Dar de ce există atât de multe? Ei bine, pentru că fiecare are nevoi și preferințe diferite. Unele formate sunt perfecte pentru partajarea muzicii online, în timp ce altele sunt cele mai bune pentru înregistrările de studio.

Dar, uneori, trebuie să convertim un tip de fișier audio în altul. Poate că playerul nostru muzical poate reda doar un singur tip de fișier, dar avem o melodie într-un format diferit. Sau poate dorim să economisim spațiu pe computer prin micșorarea fișierelor mari. Aici intervine conversia audio. Astăzi, să explorăm lumea formatelor audio și să învățăm cum să convertim cu ușurință un format în altul.

# Formate audio comune
## MP3, WAV, AAC, FLAC, OGG: Înțelegerea formatelor audio comune

Înainte de a ne adânci în detaliile conversiei audio, să aruncăm o privire mai atentă la unele dintre cele mai comune formate audio și unde le puteți întâlni:

- MP3 (MPEG-1 Audio Layer 3): MP3 este ca superstarul formatelor audio. Este excelent pentru partajarea și ascultarea muzicii online, deoarece poate face fișierele mai mici fără a pierde prea multă calitate. Deci, atunci când descărcați melodii de pe internet, este foarte probabil să fie în format MP3.

- WAV (Waveform Audio File Format): WAV se concentrează pe menținerea sunetului super clar. Este formatul preferat pentru înregistrările profesionale, deoarece nu comprimă sunetul, ceea ce înseamnă că este perfect pentru producția muzicală în studio.
- AAC (Advanced Audio Coding): AAC este formatul folosit de iTunes și Apple Music, așa că atunci când cumpărați o melodie din iTunes Store, este foarte probabil să fie în format AAC. În plus, este și formatul implicit pentru înregistrarea notelor vocale pe iPhone.

- FLAC (Free Lossless Audio Codec): FLAC este pentru audiofilii care doresc tot ce este mai bun din ambele lumi: dimensiune mică a fișierului și calitate audio de top. Este excelent pentru arhivarea albumelor preferate sau pentru a vă bucura de muzică de înaltă calitate pe căștile dvs. premium.

- OGG (Ogg Vorbis): OGG poate să nu fie la fel de popular ca alte formate, dar este totuși cool. Este un format open-source, excelent pentru streamingul muzicii online. În plus, este mai mic decât fișierele MP3 și acceptă funcții suplimentare, cum ar fi metadatele, ceea ce este foarte util pentru organizarea bibliotecii muzicale.

# Cum să convertiți fișiere audio - Opțiuni de conversie audio

## Conversia audio folosind linia de comandă

Există multe opțiuni pentru conversia audio. Dacă preferați o interfață grafică, puteți utiliza un convertor audio online sau Audacity. Dacă sunteți dispus să vă murdăriți pe mâini și să tastați, puteți utiliza SoX sau GStreamer, care oferă o flexibilitate mai mare. Aici, mă voi concentra pe GStreamer, deoarece acceptă atât linia de comandă, cât și programarea și are suport nativ pentru streaming (sau conversie în timp real).


### Instalarea GStreamer
Site-ul oficial GStreamer oferă instrucțiuni detaliate de instalare pentru diverse sisteme de operare, vă rugăm să consultați aici. Următoarele metode funcționează și ele.

Pentru sistemele Linux, puteți utiliza de obicei managerul de pachete. De exemplu, pentru sistemele bazate pe Debian/Ubuntu, trebuie doar să rulați:

\`\`\`
sudo apt install gstreamer1.0
sudo apt install gstreamer1.0-plugins-base
sudo apt install gstreamer1.0-plugins-good gstreamer1.0-plugins-bad gstreamer1.0-plugins-ugly
\`\`\`

A doua și a treia comandă sunt opționale, dar am considerat întotdeauna că este util să instalez aceste pluginuri suplimentare.

Pentru MacOS, puteți instala prin Homebrew. Similar cu comenzile Linux, rulați:

\`\`\`
brew install gstreamer
\`\`\`

Homebrew nu oferă pachete separate pentru pluginurile Gstreamer „good”, „bad” și „ugly” ca distribuțiile Linux. În schimb, Homebrew instalează de obicei un set de pluginuri ca parte a pachetului \`gstreamer\` în sine.

Pentru Windows, există instalatori precompilați, vă rugăm să vizitați documentația GStreamer aici și să urmați instrucțiunile.


### Conversia audio
După instalarea GStreamer, conversia unui format audio în altul este destul de simplă. Să presupunem că aveți un fișier audio în format MP3, să-l numim \`input.mp3\`, și doriți să-l convertiți în format WAV, să-l numim \`output.wav\`, trebuie doar să rulați următoarea comandă:

\`\`\`
gst-launch-1.0 filesrc location=input.mp3 ! decodebin ! audioconvert ! audioresample ! wavenc ! filesink location=output.wav
\`\`\`

Această comandă utilizează următoarele elemente GStreamer:

- filesrc: Citește date dintr-un fișier.
- decodebin: Detectează și decodează automat formatul audio al fișierului de intrare.
- audioconvert: Convertește formatul audio într-un format potrivit pentru conversie.
- audioresample: Re-eșantionează audio la rata de eșantionare dorită, dacă este necesar.
- wavenc: Codează datele audio în format WAV.
- filesink: Scrie datele audio de ieșire într-un fișier.

După rularea acestei comenzi, GStreamer va citi fișierul MP3 de intrare, îl va decoda, îl va converti în format WAV și va salva fișierul WAV rezultat în locația specificată.

Puteți specifica detaliile formatului WAV utilizând elementul audioconvert. Iată un exemplu de setare a ratei de eșantionare la 44100 Hz și a canalelor la stereo:

\`\`\`
gst-launch-1.0 filesrc location=input.mp3 ! decodebin ! audioconvert ! audio/x-raw,format=S16LE,rate=44100,channels=2 ! wavenc ! filesink location=output.wav
\`\`\`

În mod similar, puteți utiliza diferite pluginuri GStreamer pentru a converti un tip în altul.


# Conversia audio în timp real

Conversia audio în timp real, sau conversia audio live, este crucială în diverse scenarii de procesare audio. Doar pentru a numi câteva:

- Adaptabilitatea streamingului: Atunci când transmiteți conținut audio prin rețea, diferite dispozitive și platforme pot avea cerințe diferite pentru formatele audio și codecuri. Conversia în timp real asigură o adaptabilitate perfectă a streamingului prin ajustarea dinamică a datelor audio pentru a se potrivi specificațiilor fiecărui dispozitiv sau platformă de recepție. Această adaptabilitate este esențială pentru a asigura o redare fluidă în medii diferite, fără preprocesare sau re-codificare.
- Transmisie cu latență scăzută: În aplicațiile interactive, cum ar fi comunicarea vocală, jocurile online sau evenimentele live, minimizarea latenței este crucială pentru menținerea unei reacții în timp real și a implicării utilizatorilor. Executarea conversiei audio în timp real permite transmiterea datelor audio cu latență minimă, asigurând o livrare și redare aproape instantanee. Această transmisie cu latență scăzută îmbunătățește experiența generală a utilizatorului, în special în aplicațiile sensibile la timp, unde reacția este esențială.
- Eficiența resurselor: Conversia audio în timp real economisește resurse de sistem prin evitarea stocării sau procesării prealabile a fișierelor audio mari. Conversia în timp real a conținutului audio în diverse formate, în loc de pre-conversie, permite alocarea dinamică a resurselor după cum este necesar, reducând astfel cerințele de stocare și suprasolicitarea procesării. Această abordare eficientă din punct de vedere al resurselor este deosebit de avantajoasă în medii cu resurse limitate, cum ar fi sistemele încorporate sau dispozitivele mobile, unde optimizarea utilizării resurselor este crucială pentru menținerea performanței și scalabilității.

În cazul nostru de utilizare specific, avem un software de inteligență conversațională numit [SeaMeet](https://seameet.ai/?utm_source=blog), care acceptă fișiere audio sau fluxuri audio în diverse formate (de exemplu, Google Meet) și convertește conversațiile din voce în text. Prin urmare, trebuie să convertim audio în diverse formate în timp real într-un format compatibil cu motorul nostru de recunoaștere a vorbirii.

Conversia audio în timp real sau live poate fi realizată folosind biblioteca GStreamer. Similar cu comenzile, trebuie să organizăm pluginurile GStreamer într-un pipeline de conversie a fluxului, dar de data aceasta folosind un limbaj de programare.

Să publicăm mai întâi un exemplu de lucru în Python, apoi vom explica cum funcționează.

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
        self.input_queue.put(data_chunk)`;export{e as default};

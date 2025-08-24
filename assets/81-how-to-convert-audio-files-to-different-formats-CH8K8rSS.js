const e=`---
title: "Seu Guia Completo para Conversão de Áudio: Converta Arquivos de Som Facilmente | Série Caixa de Ferramentas de Áudio"
metatitle: "Conversão de Arquivos de Áudio/Som | Série Caixa de Ferramentas de Áudio"
date: 2024-04-01 10:25:00-08:00
draft: false
author: Guoguo Chen
description: "Aprenda sobre conversores de arquivos de áudio, conversão de formato de som e o melhor software conversor de áudio gratuito. Converta arquivos de áudio sem esforço com nosso guia passo a passo."
weight: 1
tags:
  - Caixa de Ferramentas de Áudio
  - Ferramentas de IA
image: images/blog/81-how-to-convert-audio-files-to-different-formats/81-how-to-convert-audio-files-to-different-formats.png
canonicalURL: /blog/how-to-convert-audio-files-to-different-formats/
url: /blog/how-to-convert-audio-files-to-different-formats/
---

# Introdução à Conversão de Áudio
No mundo do áudio digital, existem muitas maneiras de salvar nossos sons. Cada maneira tem suas próprias características especiais, como tornar os arquivos menores ou manter o som realmente claro. Mas por que tantos? Bem, porque cada um tem necessidades e preferências diferentes. Alguns formatos funcionam bem para compartilhar música online, enquanto outros são melhores para gravações de estúdio.

Mas às vezes, precisamos mudar um tipo de arquivo de áudio para outro. Talvez nosso reprodutor de música só toque um tipo de arquivo, mas temos uma música em um formato diferente. Ou talvez queiramos economizar espaço em nosso computador, tornando arquivos grandes menores. É aí que entra a conversão de áudio. Hoje, vamos explorar o mundo dos formatos de áudio e aprender como converter facilmente de um para outro.

# Formatos de Áudio Comuns
## MP3, WAV, AAC, FLAC, OGG: Entendendo os Formatos de Áudio Comuns

Antes de mergulharmos nos detalhes da conversão de áudio, vamos primeiro dar uma olhada em alguns dos formatos de áudio mais comuns e onde você pode encontrá-los:

- MP3 (MPEG-1 Audio Layer 3): MP3 é como a superestrela dos formatos de áudio. É perfeito para compartilhar e ouvir música online porque torna os arquivos menores sem perder muita qualidade. Então, quando você baixa uma música da internet, é provável que esteja no formato MP3.

- WAV (Waveform Audio File Format): WAV é sobre manter as coisas super claras. É o formato ideal para gravações de áudio profissionais porque não comprime o som, o que significa que é ótimo para fazer música em um estúdio.
- AAC (Advanced Audio Coding): AAC é o formato usado pelo iTunes e Apple Music, então quando você compra uma música na iTunes Store, provavelmente está no formato AAC. Além disso, também é o formato padrão para gravar memorandos de voz em iPhones.

- FLAC (Free Lossless Audio Codec): FLAC é para os audiófilos que querem o melhor dos dois mundos: tamanhos de arquivo pequenos e qualidade de som de primeira linha. É perfeito para arquivar seus álbuns favoritos ou desfrutar de música de alta qualidade em seus fones de ouvido sofisticados.

- OGG (Ogg Vorbis): OGG pode não ser tão popular quanto os outros, mas ainda é bem legal. É um formato de código aberto que é ótimo para streaming de música online. Além disso, é menor que os arquivos MP3 e suporta recursos extras como metadados, o que é útil para organizar sua biblioteca de música.

# Como Converter Arquivos de Áudio - Opções para Conversão de Áudio

## Conversão de Áudio com Linha de Comando

Existem muitas opções para conversão de áudio. Se você preferir interfaces GUI, pode usar conversores de áudio online ou Audacity. Se você estiver aberto a sujar as mãos e não se importar em digitar, pode usar SoX ou GStreamer, que oferecem mais flexibilidade. Aqui, vou me concentrar no GStreamer, pois ele suporta bem tanto a linha de comando quanto a programação e suporta naturalmente o streaming (ou conversão em tempo real).


### Instalação do GStreamer
O site oficial do GStreamer fornece instruções detalhadas de instalação para vários sistemas operacionais, veja aqui. O seguinte também funciona.

Para sistemas Linux, você geralmente pode usar gerenciadores de pacotes. Por exemplo, para sistemas baseados em Debian/Ubuntu, você simplesmente faz

\`\`\`
sudo apt install gstreamer1.0
sudo apt install gstreamer1.0-plugins-base
sudo apt install gstreamer1.0-plugins-good gstreamer1.0-plugins-bad gstreamer1.0-plugins-ugly
\`\`\`

Os segundo e terceiro comandos são opcionais, mas sempre acho útil instalar esses plugins adicionais.

Para MacOS, você pode instalar via Homebrew. Semelhante aos comandos Linux, você faz

\`\`\`
brew install gstreamer
\`\`\`

O Homebrew não fornece pacotes separados para os plugins Gstreamer “good”, “bad” e “ugly” como faz para as distribuições Linux. Em vez disso, o Homebrew geralmente instala um conjunto de plugins como parte do próprio pacote \`gstreamer\`.

Para Windows, existem instaladores pré-compilados, vá para a documentação do GStreamer aqui e siga as instruções.


### Conversão de Áudio
Depois de instalar o GStreamer, é bem simples converter de um formato de áudio para outro. Suponha que você tenha um arquivo de áudio no formato MP3, vamos chamá-lo de \`input.mp3\`, e você gostaria de convertê-lo para o formato WAV, vamos chamá-lo de \`output.wav\`, basta executar o seguinte comando:

\`\`\`
gst-launch-1.0 filesrc location=input.mp3 ! decodebin ! audioconvert ! audioresample ! wavenc ! filesink location=output.wav
\`\`\`

Este comando usa os seguintes elementos GStreamer:

- filesrc: Lê dados de um arquivo.
- decodebin: Detecta e decodifica automaticamente o formato de áudio do arquivo de entrada.
- audioconvert: Converte o formato de áudio para um formato adequado para conversão.
- audioresample: Reamostra o áudio para a taxa de amostragem desejada, se necessário.
- wavenc: Codifica os dados de áudio para o formato WAV.
- filesink: Grava os dados de áudio de saída em um arquivo.

Depois de executar este comando, o GStreamer lerá o arquivo MP3 de entrada, o decodificará, o converterá para o formato WAV e salvará o arquivo WAV resultante no local especificado.

Você pode especificar os detalhes do formato WAV usando o elemento audioconvert. Aqui está um exemplo que define a taxa de amostragem para 44100 Hz e os canais para estéreo:

\`\`\`
gst-launch-1.0 filesrc location=input.mp3 ! decodebin ! audioconvert ! audio/x-raw,format=S16LE,rate=44100,channels=2 ! wavenc ! filesink location=output.wav
\`\`\`

Da mesma forma, você pode converter de um tipo para outro usando diferentes plugins GStreamer.


# Conversão de Áudio em Tempo Real

A conversão de áudio em tempo real, ou conversão de áudio em tempo real, é essencial em vários cenários de processamento de áudio. Para citar apenas alguns:

- Adaptabilidade de Streaming: Ao transmitir conteúdo de áudio por redes, diferentes dispositivos e plataformas podem ter requisitos variados para formatos de áudio e codecs. A conversão em tempo real garante uma adaptabilidade de streaming perfeita, ajustando dinamicamente os dados de áudio para corresponder às especificações de cada dispositivo ou plataforma receptora. Essa adaptabilidade é essencial para garantir uma reprodução suave em diversos ambientes, sem a necessidade de pré-processamento ou recodificação.
- Transmissão de Baixa Latência: Em aplicativos interativos, como comunicação por voz, jogos online ou eventos ao vivo, minimizar a latência é crucial para manter a capacidade de resposta em tempo real e o envolvimento do usuário. A realização da conversão de áudio em tempo real permite que os dados de áudio sejam transmitidos com atraso mínimo, garantindo entrega e reprodução quase instantâneas. Essa transmissão de baixa latência aprimora a experiência geral do usuário, especialmente em aplicativos sensíveis ao tempo, onde a capacidade de resposta é fundamental.
- Eficiência de Recursos: A conversão de áudio em tempo real economiza recursos do sistema, evitando a necessidade de armazenar ou processar grandes arquivos de áudio com antecedência. Em vez de pré-converter o conteúdo de áudio para vários formatos, a conversão em tempo real permite que os recursos sejam alocados dinamicamente conforme necessário, reduzindo os requisitos de armazenamento e a sobrecarga de processamento. Essa abordagem eficiente em termos de recursos é particularmente vantajosa em ambientes com recursos limitados, como sistemas embarcados ou dispositivos móveis, onde a otimização do uso de recursos é essencial para manter o desempenho e a escalabilidade.

Em nosso caso de uso específico, temos um software de inteligência de conversação chamado [SeaMeet](https://seameet.ai/?utm_source=blog) que aceita arquivos de áudio ou streams (por exemplo, Google Meet) em vários formatos de áudio e transcreve a conversa de fala para texto. Portanto, precisamos converter o áudio em vários formatos para um formato que funcione com nosso mecanismo de reconhecimento de fala em tempo real.

A conversão de áudio em tempo real pode ser alcançada usando a biblioteca GStreamer. Semelhante ao comando, teremos que organizar os plugins GStreamer em um pipeline de conversão de streaming, mas desta vez, com uma linguagem de programação.

Vamos primeiro postar um exemplo de trabalho em Python, e explicaremos como funciona.

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

## A Classe “AudioConverter”
A classe AudioConverter é a funcionalidade central para a conversão de formato de áudio em tempo real neste código. Vamos detalhar como ela usa um pipeline GStreamer para conseguir isso.

Os principais plugins GStreamer e o fluxo de dados são os seguintes:
1. Blocos de dados de áudio são enviados do programa Python para \`appsrc\`.
2. \`appsrc\` injeta os dados no pipeline.
3. \`decodebin\` decodifica o formato de áudio de entrada.
4. \`audioconvert\` realiza a conversão de formato para PCM.
5. \`audioresample\` (se ativado) ajusta a taxa de amostragem.
6. \`outputformat\` garante que os dados correspondam ao formato PCM desejado.
7. \`appsink\` recebe os dados PCM convertidos e fornece um mecanismo de callback para o programa Python recuperá-los.

Em outras palavras, ele aceita dados de áudio bloco por bloco usando \`appsrc\`, converte os dados de áudio e, em seguida, envia os dados bloco por bloco usando \`appsink\`.

Alguns métodos-chave para a classe \`AudioConverter\` são:
- \`on_pad_added\`: Esta função de callback é acionada quando um novo pad (ponto de conexão de dados) fica disponível em um elemento. Ela verifica especificamente um pad de decodebin e o vincula a audioconvert para lidar com os dados de áudio decodificados.
- \`new_sample_callback\`: Esta função é chamada por appsink sempre que um novo sample (bloco de dados PCM convertido) está disponível. Ela extrai os dados do buffer de sample e os adiciona à fila de saída para que o programa Python possa acessá-los.
- \`on_message\`: Esta função lida com as mensagens GStreamer recebidas no barramento do pipeline. Ela escuta mensagens como End-of-Stream (EOS) ou erros. Após o EOS, ela sinaliza o fim para o programa e limpa o pipeline. Os erros são registrados para fins de depuração.

A classe AudioConverter aproveita as funcionalidades de pipeline e elementos do GStreamer para realizar a conversão de formato de áudio em tempo real. Os elementos do GStreamer lidam com a decodificação, conversão e empacotamento dos dados de áudio, enquanto a classe fornece métodos para interação e troca de dados com o programa Python.

### A Função “main”

A função \`main\` simula o streaming de áudio em tempo real e demonstra como usar a classe \`AudioConverter\`. Você pode escrever sua própria função wrapper para a classe \`AudioConverter\`, mas alguns pontos-chave:

#### Processamento Baseado em Blocos
Ao contrário da leitura de todo o arquivo de áudio de uma vez, o código lê os dados em blocos menores (CHUNK_SIZE). Isso simula como os dados de áudio podem ser recebidos em um fluxo contínuo por uma rede ou de uma fonte ao vivo.

#### Recuperação de Dados Não Bloqueante
Depois de enviar um bloco de entrada, o código tenta extrair imediatamente os dados convertidos disponíveis usando \`pull_converted_data\`. Isso imita como um aplicativo de streaming pode precisar processar e potencialmente reproduzir o áudio convertido o mais rápido possível, sem esperar que o arquivo inteiro seja convertido.

#### Pausa para Potencial Recuperação
O tempo de suspensão calculado, embora provavelmente não seja perfeito, introduz um atraso entre o envio de novos dados e a tentativa de extrair dados convertidos. Isso simula o tempo potencial que o conversor (pipeline GStreamer) pode levar para processar o bloco recebido. Ele permite que o conversor tenha algum tempo para se recuperar antes de alimentá-lo com mais dados.

# Por que fazer tudo sozinho?

Embora a conversão de arquivos de áudio para diferentes formatos seja essencial, por que parar por aí? Aprimore sua experiência de áudio com [SeaMeet](https://seameet.ai/?utm_source=blog).

**O SeaMeet oferece transcrição e resumos precisos e em tempo real para todas as suas necessidades de áudio.** Quer você esteja convertendo arquivos de áudio, gravando um podcast ou apenas queira ter uma transcrição de conversa, o SeaMeet fornece transcrições instantâneas de alta qualidade e resumos perspicazes. Essa ferramenta poderosa pode economizar horas de trabalho manual e ajudá-lo a extrair o valor máximo do seu conteúdo de áudio.

[Inscreva-se no SeaMeet hoje](https://seameet.ai/?utm_source=blog) e experimente a alegria de acompanhar sua conversa.

# Mais da Série Caixa de Ferramentas de Áudio

- [Como Baixar Dados de Áudio do YouTube, Um e Muitos Vídeos](https://seasalt.ai/blog/65-how-to-download-audio-from-youtube/?utm_source=blog)
`;export{e as default};

const e=`---
title: "Dê ao seu Contact Center a sua própria voz com SeaX Voice Intelligence"
metatitle: "Deixe o seu Contact Center falar com SeaX Voice Intelligence"
date: 2022-08-02 17:24:00-07:00
modified_date: 2025-07-29 20:45:17+00:00
draft: false
author: Kim Dodds, Cody Kim, Xuchen Yao, Guoguo Chen
description: "Neste blog, mostraremos como os motores internos de texto-para-voz e voz-para-texto da Seasalt.ai podem aprimorar vários aspectos da plataforma SeaX."
weight: 1
tags:
  - SeaX
image: /images/blog/21-seax-voice-intelligence/thumbnail.png
canonicalURL: /blog/seax-voice-intelligence/
url: /blog/seax-voice-intelligence/
---

*Até agora, em nossa [série de blogs SeaX](https://seasalt.ai/tags/seax/), demos a você uma ampla visão geral do produto principal da Seasalt.ai: SeaX. Também discutimos duas características-chave que diferenciam o SeaX de um call center tradicional: primeiro, que o SeaX é omnichannel, o que significa que você pode interagir mais facilmente com os clientes em qualquer canal, e segundo, que a plataforma é um contact center distribuído, o que permite rotear mensagens e chamadas de clientes de todo o mundo para seus agentes distribuídos em vários locais.*

*Agora que cobrimos o básico da plataforma SeaX, passaremos para os recursos avançados de IA e automação que diferenciam o SeaX de outros contact centers omnichannel distribuídos. Neste blog, mostraremos como os motores internos de texto-para-voz e voz-para-texto da Seasalt.ai podem aprimorar vários aspectos da plataforma SeaX.*

# Sumário
- [Introdução à Inteligência de Voz](#into-to-voice-intelligence)
- [O que diferencia a Seasalt.ai](#what-sets-seasaltai-apart)
    - [Voz para Texto](#speech-to-text)
    - [Texto para Voz](#text-to-speech)
- [TTS e STT no SeaX](#tts-and-stt-in-seax)
    - [IVR de Voz](#voice-ivr)
    - [Mensagem de Indisponibilidade](#unavailable-message)
    - [Transcrições ao Vivo](#live-transcription)
    - [E mais...](#and-more)

# Introdução à Inteligência de Voz

Inteligência de Voz é o uso de Inteligência Artificial para analisar e extrair insights de dados baseados em voz. Embora a década anterior tenha visto um notável desenvolvimento em tecnologias de voz, seu uso em ambientes empresariais ainda é um tanto limitado. As empresas continuam a acumular terabytes de dados de voz, mas na maioria dos casos, eles não estão sendo usados em todo o seu potencial.

Uma das razões para isso é que os dados de voz são mais difíceis de processar do que outras formas de dados, como estatísticas básicas ou até mesmo dados de texto simples. Os dados de fala são únicos de várias maneiras diferentes:
1. Depende do idioma, com dialetos e sotaques, por isso é difícil capturar 100% das informações
2. Sua qualidade varia de acordo com os canais (telefonia vs. VoIP, mono vs. estéreo), taxa de amostragem (8KHz vs. 16KHz), precisão representacional (8bit, 16 bit, 32bit) e sons ambientais, como ruídos de fundo
3. É mais difícil de interpretar: das emoções da fala à identificação do locutor à semântica do significado

No entanto, quando abordada adequadamente com as ferramentas certas, a inteligência de voz pode trazer enormes benefícios para as empresas que a utilizam. Entre outras coisas, ser capaz de gerenciar adequadamente os dados de voz desbloqueia a capacidade de usar a transcrição de fala para texto personalizada, o que pode tornar as conversas pesquisáveis, indexáveis e perspicazes, e permite o processamento posterior de PNL. À medida que mais dados são coletados, melhorias nesses serviços também são possíveis, como: aumentar a precisão da transcrição, aumentar a cobertura de casos de uso e fornecer modelos de fala e linguagem personalizáveis para se adaptar a novos idiomas e dialetos.

# O que diferencia a Seasalt.ai

A Seasalt.ai fornece tecnologias e produtos de IA de comunicação em nuvem para clientes empresariais.
Desenvolvemos tecnologias internas de fala e linguagem para mensagens de texto
e chamadas de voz em contact centers empresariais. Nosso motor de linguagem natural suporta uma ampla
gama de idiomas de alto e baixo recurso: birmanês, chinês, inglês, filipino,
alemão, indonésio, khmer, laosiano, malaio, espanhol, tâmil, tailandês, vietnamita, etc.
A Seasalt.ai é financiada por capital de risco e administrada por um grupo de especialistas líderes mundiais em reconhecimento de fala profunda,
síntese de fala neural e diálogos de linguagem natural.

Assista ao nosso vídeo de demonstração de fala para texto:
<iframe width="85%" height="450px" src="https://www.youtube.com/embed/Log8usX8ViE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

## Voz para Texto

<center>
<img src="/images/blog/21-seax-voice-intelligence/STT.png" alt="Gráfico de voz para texto."/>
</center>

Nosso motor de fala para texto recebe áudio de fala e produz transcrições em tempo real. Começando com o áudio, extraímos características fonéticas, convertemos essas características em fonemas e, em seguida, mapeamos esses fonemas para a ortografia do idioma de destino. Nosso sistema atual é capaz de transcrever vários idiomas, incluindo inglês e chinês, com mais idiomas sendo constantemente adicionados.

Assista ao nosso vídeo de personalização de Fala para Texto para ver como o motor STT da Seasalt pode ser personalizado para qualquer domínio:
<iframe width="85%" height="450px" src="https://www.youtube.com/embed/1YEU6mexzWQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

## Texto para Voz

<center>
<img src="/images/blog/21-seax-voice-intelligence/TTS.png" alt="Gráfico de texto para voz."/>
</center>

Texto para Voz é o processo de sintetizar fala humana realista completa com entonação e cadência naturais apenas a partir de texto. Nosso modelo pega o texto regular, traduz esse texto em fonemas e, em seguida, converte os fonemas em áudio, prevendo o tom, a duração e o volume corretos em cada etapa do tempo para a experiência TTS mais realista possível. Se o resultado final não for perfeito, oferecemos a capacidade de ajustar o áudio sintetizado, incluindo a pronúncia das palavras, pausas e ênfase.

Assista ao nosso vídeo de demonstração de personalização de Texto para Voz para ver como a saída do motor TTS da Seasalt pode ser personalizada para fornecer fala sintetizada realista:

<iframe width="85%" height="450px" src="https://www.youtube.com/embed/GJCOhTtImp8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

Você também pode verificar a [página TTS](https://suite.seasalt.ai/tts) em nosso site para ouvir exemplos de algumas de nossas vozes sintetizadas, incluindo Tom Hanks, David Attenborough e Reese Witherspoon.

# TTS e STT no SeaX

## IVR de Voz

<center>
<img src="/images/blog/21-seax-voice-intelligence/flow.png" alt="Fluxo de IVR de Voz usando o motor de fala para texto da Seasalt.ai para transcrição em tempo real e roteamento de chamadas."/>

*Fluxo de IVR de Voz usando o motor de fala para texto da Seasalt.ai para transcrição em tempo real e roteamento de chamadas.*
</center>

A inteligência de voz pode começar a ajudar antes mesmo que as chamadas cheguem à plataforma SeaX, garantindo que as chamadas sejam roteadas para o local correto e coletando informações importantes antes de entregar a chamada a um agente. O SeaX usa o Twilio Studio para personalizar os fluxos de roteamento de chamadas e mensagens. Mas também podemos integrar nosso motor de fala para texto no fluxo IVR para permitir que o cliente use a linguagem natural para rotear sua chamada (em vez da experiência tradicional de “pressione 1 para…”). Além disso, se sua empresa estiver interessada em usar um chatbot para interagir com os clientes, podemos ir um passo além, dando ao seu chatbot uma voz para conversar com os clientes por telefone usando nosso motor de texto para voz.

## Mensagem de Indisponibilidade

<center>
<img src="/images/blog/21-seax-voice-intelligence/unavailable-message.png" alt="Configuração de mensagem de indisponibilidade do SeaX usando texto para voz."/>

*Configuração de mensagem de indisponibilidade do SeaX usando texto para voz.*
</center>

Nossa tecnologia de texto para voz também permite mensagens de voz altamente personalizáveis. Por exemplo, elas podem ser acionadas quando um cliente liga após o horário comercial normal, ou se o cliente precisa ser colocado em espera enquanto aguarda um agente disponível.

## Transcrições ao Vivo

<center>
<img src="/images/blog/21-seax-voice-intelligence/live-transcription.jpg" alt="Transcrições de chamadas ao vivo com análises sendo exibidas ao agente no SeaX."/>

*Transcrições de chamadas ao vivo com análises sendo exibidas ao agente no SeaX.*
</center>

Uma vez que um cliente está em uma chamada com um agente, nosso motor de fala para texto fornece transcrições precisas em tempo real da conversa para referência do agente. Isso permite que o agente se refira a pontos anteriores na conversa e/ou verifique novamente sua compreensão do que o cliente disse. Além disso, essas transcrições são incrivelmente úteis para aplicações a jusante, como extração de tópicos, extração de ações, sumarização, análise de reuniões, etc.

## E mais...

As opções acima são apenas algumas das maneiras pelas quais o SeaX integra inteligência de voz avançada para reduzir os tempos de espera, melhorar o desempenho do agente e proporcionar uma experiência geral perfeita para clientes e agentes. Para saber mais sobre os recursos avançados que vêm com a plataforma SeaX, fique atento às nossas próximas postagens no blog, que incluem base de conhecimento de IA, gerenciamento de casos e SMS em massa. Para obter uma demonstração pessoal e discutir como a plataforma SeaX pode atender às suas necessidades específicas de negócios, preencha nosso [formulário de agendamento de demonstração](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting).
`;export{e as default};

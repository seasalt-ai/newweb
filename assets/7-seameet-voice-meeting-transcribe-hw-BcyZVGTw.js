const e=`---
title: "Do Demo ao Sucesso: Além do Hardware (5/5)"
metatitle: "Do Demo ao Sucesso (5/5): Além do Hardware"
date: 2021-09-15 17:24:32-07:00
modified_date: 2025-07-28T16:56:53Z
draft: false
author: Cody Kim
description: "Na última parte desta série de blogs, acompanhe a jornada da Seasalt.ai para criar o SeaMeet, nossas soluções colaborativas de reuniões modernas."
weight: 1
tags:
  - SeaMeet
image: images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/SeaMeet animation.gif
canonicalURL: /blog/seameet-voice-hardware/
url: /blog/seameet-voice-hardware/
---

*Ao longo desta série de blogs, acompanhe a jornada da Seasalt.ai para criar uma Experiência de Reuniões Modernas completa, começando com seus primórdios humildes, à otimização de nosso serviço em diferentes hardwares e modelos, à integração de sistemas de PNL de última geração e, finalmente, terminando na plena realização do SeaMeet, nossas soluções colaborativas de reuniões modernas.*

## Além das Reuniões Modernas

Aqui na Seasalt.ai, admiramos as capacidades atuais mostradas na demonstração Build 2019 deste produto, mas estamos mais interessados em ver o que este produto poderia se tornar, como levar a transcrição de conversas além da imitação. Mas antes que você possa vencer a concorrência, você precisa primeiro entender intimamente o jogo que está jogando. E assim nasceu o SeaMeet. Em seus primórdios, olhamos para o Azure como um modelo para compreender os fundamentos do que torna um serviço de transcrição sólido e usamos os serviços de fala do Azure como nosso backend para utilizar essa tecnologia estabelecida.

Assim como em qualquer produto jovem, os desafios surgiram imediatamente. Ansiosos para lançar nosso produto, optamos por usar o conjunto de microfones Microsoft Kinect DK, promovido como o equivalente de hardware dos serviços de fala e supostamente ajustado para obter o desempenho mais otimizado dos modelos de reconhecimento automático de fala do Azure. Embora seja um dispositivo inegavelmente bem construído e bem projetado, ele vem com uma carcaça de alumínio completa, uma lente grande angular, uma câmera de profundidade e um conjunto de 7 microfones. Ele também tem um preço alto, pouco menos de US$ 400. A partir de abril de 2021, o Kinect DK teve um sério problema de falta de estoque. Ele ainda está fora de estoque na data de hoje, setembro de 2021. Isso reforçou ainda mais que o Kinect não é o dispositivo para nós.

<center>
<img src="/images/blog/7-seameet-voice-intelligence-meeting-transcription-hardware/kinect_store_page.png"/>

*O Azure Kinect DK estava fora de estoque desde 2021/4 quando este artigo foi publicado (2021/9)*
</center>

O conjunto de microfones é o primeiro componente no pipeline de transcrição de conversas. Como fornecedores de um serviço de transcrição, precisamos ser capazes de fornecer nosso hardware de forma sustentável e confiável.

Nossa jornada para encontrar o conjunto de microfones perfeito nos levou a duas opções: o [Respeaker Array v2.0](https://www.seeedstudio.com/ReSpeaker-Mic-Array-v2-0.html) e o [Respeaker Core v2.0](https://www.seeedstudio.com/ReSpeaker-Core-v2-0.html). Ambos os dispositivos são conjuntos circulares, de quatro e seis microfones, respectivamente, o que é uma característica crucial para poder realizar a localização de fonte em 360 graus e nos permitir integrar facilmente esses novos dispositivos em nosso sistema existente. A verdadeira beleza desses dispositivos é que eles vêm com algoritmos de processamento de sinal integrados, incluindo denoising, cancelamento de eco e beamforming que são perfeitamente ajustados às dimensões do microfone.

<center>
<img src="/images/blog/7-seameet-voice-intelligence-meeting-transcription-hardware/respeaker_array.png" alt="Respeaker Array v2.0 demonstrando VAD e localização de fonte"/>

*Respeaker Array v2.0 demonstrando VAD e localização de fonte*
</center>

<center>
<img src="/images/blog/7-seameet-voice-intelligence-meeting-transcription-hardware/array_demo.jpg" alt="Demonstração de reunião ao vivo com o Respeaker Array v2.0"/>

*Demonstração de reunião ao vivo com o Respeaker Array v2.0*
</center>

Para o conjunto de quatro microfones Array v2.0, que era totalmente alimentado por uma porta USB, isso significava que o computador do usuário só precisava se concentrar na transmissão do áudio para o servidor. Isso descarrega o processamento de sinal para o conjunto de microfones.


<center>
<img src="/images/blog/7-seameet-voice-intelligence-meeting-transcription-hardware/core_demo.png" alt="Respeaker Core v2.0 retratado com demonstração"/>

*Respeaker Core v2.0 retratado com demonstração*
</center>

Ainda mais convincente é o Core v2.0 equipado com um processador ARM e 1 GB de RAM. Capaz de executar uma distribuição Linux completa e com poder de processamento mais do que suficiente para executar nosso script cliente, não apenas descarregamos o processamento do computador do usuário com este dispositivo, mas eliminamos completamente a necessidade de ter um computador conectado ao microfone. Como os conjuntos de microfones agora estão fazendo o processamento pesado, diminuímos os requisitos de hardware necessários para executar nosso produto e, portanto, aumentamos efetivamente nosso público que pode se beneficiar do SeaMeet.

<center>
<img src="/images/blog/7-seameet-voice-intelligence-meeting-transcription-hardware/respeaker_core.png" alt="Exemplo de Core v2.0 de posicionamento de microfone autônomo"/>

*Exemplo de Core v2.0 de posicionamento de microfone autônomo*
</center>

Outra característica única desses conjuntos de microfones é a falta de carcaça. Ambos são enviados como PCBs nus com os microfones, chips e portas todos expostos. Embora muitos vejam isso como um inconveniente, vemos uma oportunidade de criar um dispositivo verdadeiramente único que é inconfundivelmente da Seasalt.

    Com esses dispositivos, amarramos o nó em nosso protótipo do SeaMeet, nosso novo e moderno serviço de transcrição de reuniões. E com isso, concluímos nossa série de cinco partes, começando quando o SeaMeet não passava de uma semente inspirada em uma demonstração da Microsoft, e terminando com um produto totalmente independente. Ainda em seus estágios iniciais, o SeaMeet tem uma jornada emocionante pela frente enquanto continuamos a aprimorar nosso sistema de diarização, senso de reunião e modelos de linguagem. A equipe da Seasalt.ai está ansiosa para continuar a revolucionar a forma como o mundo faz negócios.
`;export{e as default};

const e=`---
title: "Do Demo ao Sucesso: Armadilhas das Reuniões Modernas (2/5)"
metatitle: "Do Demo ao Sucesso (2/5): Armadilhas das Reuniões Modernas"
date: 2021-07-30
draft: false
author: Cody Kim
description: "Na segunda parte desta série de blogs, acompanhe a jornada da Seasalt.ai para criar o SeaMeet, nossa solução colaborativa para reuniões modernas."
weight: 1
tags:
  - SeaMeet
image: images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/SeaMeet animation.gif
canonicalURL: /blog/seameet-voice-and-microsoft-modern-meetings/
url: /blog/seameet-voice-and-microsoft-modern-meetings/
---

*Ao longo desta série de blogs, acompanhe a jornada da Seasalt.ai para criar uma experiência de Reuniões Modernas completa, começando com seus humildes inícios, otimizando nosso serviço em diferentes hardwares e modelos, integrando sistemas de PNL de última geração e, finalmente, culminando na realização completa do SeaMeet, nossa solução colaborativa para reuniões modernas.*

## Armadilhas das Reuniões Modernas

Ao longo do nosso desenvolvimento, encontramos muitos obstáculos imprevisíveis sem causas ou soluções claras.

### Um Início Rápido

O primeiro obstáculo foi fazer nossas ferramentas funcionarem. O Azure forneceu uma amostra de Reuniões Modernas que ficamos felizes em saber que era compatível com Linux, mas descobrimos que usar o SDK no Windows para executar a demonstração era muito mais fácil - bem, afinal, era um produto da Microsoft. Após muitas tentativas frustradas de fazer a amostra fornecida funcionar no Linux, finalmente tivemos que abandonar esse caminho e recorrer ao Windows. Finalmente, tínhamos um transcriptor de fala funcional, o que foi um tremendo começo.

### Latência

Um problema que experimentamos foi um atraso de aproximadamente cinco segundos no recebimento de nossos resultados de reconhecimento na interface do usuário. Embora 5 segundos possam parecer bastante rápidos, esse atraso é notavelmente alguns segundos muito lento para ser uma solução conveniente e prática, especialmente para comunicação em tempo real.

<center>
<img src="/images/blog/4-seameet-voice-intelligence-meeting-transcription-pitfalls-of-microsoft-modern-meetings/default_ui.png" style="width:400px;" alt="A interface do usuário padrão para transcrição de fala pelo Azure Speech SDK"/>

*A interface do usuário padrão para transcrição de fala fornecida pelo Azure Speech SDK*
</center>

A latência também foi um problema sério no back-end. No início de cada reunião, os resultados chegavam em tempo real (conforme anunciado!), mas à medida que a reunião prosseguia, a latência aumentava periodicamente para até trinta segundos antes que o texto aparecesse nos monitores. A essa altura, o que quer que tenha sido dito já havia se tornado irrelevante na conversa. Após inúmeros testes, começamos a notar que a latência mudava ao longo do dia, o que atribuímos à carga do servidor do Azure no momento. Estamos no negócio de criar um produto consistente e confiável, então esses atrasos flutuantes e imprevisíveis eram inaceitáveis. Mais um motivo para confiar em nossos próprios modelos e servidores.

### Dialeto

Uma razão particular pela qual usamos o Azure Speech Service em primeiro lugar foi o amplo suporte a uma grande variedade de idiomas e dialetos. Estávamos particularmente animados para usar o modelo de inglês de Cingapura do Azure Speech Service. Mas imagine nossa surpresa ao descobrir que, para o dialeto de Cingapura, o modelo de inglês dos EUA superava consistentemente o modelo de inglês de Cingapura. Além disso, mesmo o melhor modelo não correspondeu aos desafios do mundo real.

<center>
<img src="/images/blog/4-seameet-voice-intelligence-meeting-transcription-pitfalls-of-microsoft-modern-meetings/bad_result.png"/>

*Transcrições resultantes de "Parabéns! Menino ou menina?"*
</center>

Víamos resultados como “ola regulations may be boiled baby cool” quando a frase era realmente “Parabéns! Menino ou menina?”. Um modelo de linguagem bem treinado deveria ter eliminado tal transcrição. Embora este seja um exemplo extremo, na maioria das vezes, haveria um erro em cada transcrição. Não importa quão pequeno seja o erro, como um artigo ausente ou uma palavra mal interpretada, qualquer erro é distrativo e pode facilmente arruinar a reputação de um serviço de transcrição.

### Atualização do Windows

Algumas semanas depois, a equipe passou noites e noites garantindo que nosso produto estivesse pronto para a demonstração do cliente em apenas alguns dias. Nosso transcriptor de reuniões funcionou perfeitamente em três laptops Windows separados. Então, um dia, do nada, fomos reduzidos a apenas um computador funcionando, embora ninguém tivesse tocado no código. Testamos nossas redes, verificamos nossos firewalls, tudo o que pudéssemos pensar que de repente faria nosso produto falhar. Nosso último palpite foi que uma atualização surpresa do Windows tornou o Azure Speech SDK inexplicavelmente incompatível com dois de nossos computadores quando comparamos os três sistemas bit a bit. Com nossa apresentação se aproximando rapidamente, o estresse e a tensão estavam no limite. Com apenas um sistema restante, a equipe fez um pacto: nenhuma alteração no código e absolutamente nenhuma atualização. Depois dessa provação, já tínhamos o suficiente.

### Além das Reuniões Modernas

Para escapar desses obstáculos, a equipe da Seasalt.ai começou a treinar seus próprios modelos acústicos e de linguagem para rivalizar com as capacidades do transcriptor conversacional do Azure. Durante todo o processo, continuamos fazendo a pergunta: para onde vamos a partir daqui? Como podemos expandir este produto já instrumental?

As Reuniões Modernas demonstraram um forte potencial de fala para texto, mas é aí que para. Ele pode nos ouvir, mas e se pudermos fazê-lo pensar por nós? Apenas com transcrições, embora o produto seja impressionante, as aplicações são um tanto limitadas. Passar da transcrição de fala para a inteligência de fala abre as portas para o que podemos criar. Exemplos de inteligência incluem resumos de reuniões, abstração de tópicos e extração de ações. Finalmente, projetar uma interface bonita para unir tudo em um pacote deslumbrante.

E esta é a história até agora, o início da jornada da Seasalt.ai para trazer as melhores soluções de negócios para um mercado em rápida evolução e entregá-las ao mundo. Se você quiser saber mais detalhes, continue lendo o restante da série de blogs.
`;export{e as default};

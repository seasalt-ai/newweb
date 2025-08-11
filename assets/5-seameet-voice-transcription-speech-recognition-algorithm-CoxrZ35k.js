const e=`---
title: "Do Demo ao Sucesso: Além dos Algoritmos de Voz das Reuniões Modernas (3/5)"
metatitle: "Demo ao Sucesso (3/5): Além dos Algoritmos de Voz"
date: 2021-07-30 17:43:38-07:00
modified_date: 2025-07-29 00:00:00+00:00
draft: false
author: Cody Kim, Shayne Mei
description: "Na terceira parte desta série de blogs, acompanhe a jornada da Seasalt.ai na criação do SeaMeet, nossa solução colaborativa para reuniões modernas."
weight: 1
tags:
  - SeaMeet
image: images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/SeaMeet animation.gif
canonicalURL: /blog/seameet-voice-speech-recognition/
url: /blog/seameet-voice-speech-recognition/
---

*Ao longo desta série de blogs, acompanhe a jornada da Seasalt.ai para criar uma experiência completa de Reuniões Modernas, desde os humildes começos, passando pela otimização do serviço em diferentes hardwares e modelos, até a integração de sistemas NLP de última geração e, finalmente, a realização completa do SeaMeet, nossa solução colaborativa para reuniões modernas.*

## Além do Algoritmo
Modern Meetings foi uma ótima demonstração, mas permaneceu como uma demo. Ainda há um longo caminho para torná-lo pronto para produção. Primeiro, implementamos com sucesso a versão demo usando o Microsoft Azure stack. Mas, ao reconhecer todas as limitações do software, decidimos trocar os algoritmos pelos nossos próprios e tornar toda a experiência muito mais suave, leve e flexível.
Há quatro componentes principais nas Modern Meetings:

1. Processamento de sinal no array de microfones, especialmente beam forming
2. Diarização e identificação de falantes
3. Reconhecimento de fala personalizado
4. Uma interface de usuário melhor

A seguir, detalharemos todos os componentes importantes.

<center>
<img src="/images/blog/5-seameet-voice-intelligence-meeting-transcription-speech-recognition-algorithm-of-modern-meeting/tech-stack.png" alt="SeaMeet architect with 4 major components"/>

*Adaptamos todos os 4 principais componentes das Modern Meetings com nossa própria tecnologia: 1. Processamento de sinal com array de microfones; 2. Diarização e identificação de falantes; 3. Reconhecimento de fala personalizado; 4. Uma interface web moderna.*
</center>

### Processamento de Sinal no Array de Microfones
O array de microfones, em comparação com um microfone único próximo à boca, capta vozes de todo o alcance de 360 graus, até uma distância de 5 metros. Assim, um único array de microfones é capaz de coletar voz em uma sala de conferências de tamanho médio de 10x10 metros. Como todos os microfones estão agrupados em um único dispositivo, isso reduz significativamente a quantidade de cabos na sala e simplifica a instalação e manutenção.
Por outro lado, o objetivo de usar um array de microfones é fornecer aos nossos modelos a melhor qualidade de dados possível. Portanto, antes de passar o áudio pelo reconhecimento automático de fala, realizamos vários algoritmos de processamento de sinal. O principal componente do nosso pipeline de pré-processamento envolve um algoritmo conhecido como beamforming. Como trabalhamos com arrays circulares de múltiplos microfones, podemos utilizar a pequena diferença de tempo que o som leva para atingir os vários microfones. O beamforming determina as principais características do sinal — também conhecido como melhor feixe — e acentua essas frequências enquanto atenua os sons indesejados. O efeito é a remoção de ruído e reverberação, enquanto o sinal principal, no nosso caso a fala, fica mais alto e claro.

Para o desempenho ideal de muitos algoritmos de beamforming, seria necessário saber a posição exata da fonte (o falante) em relação ao microfone. Mas, em uma aplicação real, isso é impossível, então primeiro calculamos os chamados pesos de campo distante determinando a direção da fonte. Esse primeiro passo, conhecido como localização da fonte, ou mais especificamente Direction of Arrival (DOA), mostrou-se complicado. O principal problema era o suavizamento. O algoritmo nos dava aproximadamente o resultado correto, mas a fonte determinada oscilava constantemente 30 graus para cada lado da direção verdadeira, o que prejudicava o beamforming. A solução que encontramos foi permitir que o algoritmo de localização da fonte usasse apenas a faixa de frequências que codifica a maior parte da fala humana. Combinamos isso com uma técnica de suavização, mantendo um “histórico” dos resultados de DOA para fazer uma média. Com resultados de DOA mais confiáveis, pudemos calcular os pesos de campo distante e usar esses para determinar o melhor feixe.

Com a série de algoritmos realizados no Kinect DK: beamforming, remoção de ruído, redução de reverberação, localização da fonte, conseguimos produzir fala humana clara e aprimorada em tempo real, além de identificar aproximadamente a direção do falante. Isso ajudará muito na identificação do falante na próxima etapa.

### Diarização e Identificação de Falantes

O próximo componente de um sistema moderno de transcrição de reuniões é o reconhecimento automático de falantes. Como mencionado na última parte desta série, ler um texto de conversa desorganizado sem informação sobre quem disse o quê é frustrante e anula o propósito de ter tal sistema. É aí que entra o reconhecimento de falantes.

Com esse componente, podemos alinhar automaticamente as transcrições e o áudio com o nome do falante. Para isso, usamos um processo chamado diarização, que agrupa segmentos de áudio em um determinado número de grupos representando o número de falantes na gravação. Isso funciona aproveitando um sistema de Detecção de Atividade de Voz (VAD) para determinar segmentos de fala, dos quais podemos extrair uma representação vetorial de uma janela curta. Cada vetor extraído das janelas é chamado de xvector de nível de enunciado e, quando fazemos a média, obtemos um xvector de nível de falante. Esses xvectors são então processados por um algoritmo de agrupamento, onde cada grupo representa os segmentos de fala que pertencem ao mesmo falante. Vale mencionar que a escolha do algoritmo de agrupamento afeta muito o desempenho da diarização, e conseguimos uma taxa de erro de diarização (DER) ideal com agrupamento espectral usando uma matriz de afinidade com limiar ajustado automaticamente com valores de Normalized Maximum Eigengap (NME). Por fim, precisamos decidir qual falante representa cada grupo. Antes da reunião, podemos realizar um processo de inscrição para extrair xvectors de gravações de 40 segundos de cada falante, que podemos comparar com os grupos para identificar o falante correspondente.

A beleza desse pipeline está na flexibilidade. Para muitos cenários de reunião, é impraticável e muitas vezes impossível obter gravações de cada falante com antecedência. Considere reuniões de negócios com clientes VIP ou grandes simpósios com 50 falantes. Nesse caso, pulando a etapa de inscrição, nosso sistema de diarização ainda pode separar os segmentos de fala e agrupar os que pertencem ao mesmo falante. Basta que uma pessoa ouça alguns segundos de cada grupo para determinar a identidade do falante. Junto com uma interface de usuário moderna dedicada, podemos fornecer a mesma funcionalidade, mas com mais flexibilidade.

### Reconhecimento de Fala Personalizado

Depois de conhecer o transcritor de reuniões da Microsoft e entender o que o torna tão poderoso, estávamos prontos para tornar nosso sistema totalmente independente e ir além de um produto já revolucionário. A força motriz por trás das Modern Meetings e de qualquer produto de transcrição são os modelos de Reconhecimento Automático de Fala (ASR). Naturalmente, esse foi nosso maior foco.
Azure Cognitive Services ofereceu uma variedade de modelos para diferentes idiomas e dialetos. No entanto, o desempenho entre os diferentes dialetos era difícil de distinguir. Para os dialetos de inglês, é provável que a maior parte do esforço e dos dados tenha sido dedicada ao modelo de inglês dos EUA, que foi então ajustado com dados de sotaque para criar os vários modelos de dialeto. Queríamos garantir que, se oferecêssemos um modelo distinto, ele fosse ajustado para um caso de uso específico. Isso significou reunir milhares de horas de áudio e transcrições localizadas e dedicar semanas de treinamento e ajuste fino. Mas valeu a pena ver nossos modelos melhorarem a cada época e entregar o que prometemos.

Com um modelo fundamental sólido, o próximo passo foi expandir a usabilidade e a personalização. Cada setor tem seu próprio jargão, tornando difícil para os modelos ASR distinguir entre vocabulário esotérico e uma sequência de palavras comuns foneticamente semelhantes.

Nossa resposta é o SeaVoice, que oferece um local centralizado onde os usuários podem facilmente ajustar modelos para suas necessidades específicas.
`;export{e as default};

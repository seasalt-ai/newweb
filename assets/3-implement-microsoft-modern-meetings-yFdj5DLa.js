const e=`---
title: "Da demonstração ao sucesso: implementando as reuniões modernas da Microsoft e além (1/5)"
metatitle: "Da demonstração ao sucesso (1/5): além das reuniões modernas da Microsoft"
date: 2021-07-19
draft: false
author: Cody Kim
description: "Na primeira parte desta série de blogs, acompanhe a jornada da Seasalt.ai para criar o SeaMeet, nossas soluções colaborativas de reuniões modernas."
weight: 1
tags:
  - SeaMeet
image: images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/SeaMeet animation.gif
canonicalURL: /blog/microsoft-modern-meetings/
url: /blog/microsoft-modern-meetings/
---

*Ao longo desta série de blogs, acompanhe a jornada da Seasalt.ai para criar uma experiência de reuniões modernas bem-arredondada, começando com seus primórdios humildes, otimizando nosso serviço em diferentes hardwares e modelos, integrando sistemas de PNL de última geração e, finalmente, terminando na plena realização do SeaMeet, nossas soluções colaborativas de reuniões modernas.*

### O futuro das reuniões modernas

[![Demonstração do serviço de conversão de fala em texto da Microsoft da MS Build 2019](/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/ms-build-play.png)](https://www.youtube.com/watch?t=100&v=EYinMnQWgfU&feature=youtu.be)

Na Microsoft Build 2019, a Microsoft despertou o público quando revelou o que há de mais recente em suas soluções de computação em nuvem: os Serviços de Fala do Azure, mais especificamente seu aplicativo de Transcrição de Reuniões. Após sua introdução, este transcritor de conversas pousou imediatamente no radar de todos e ganhou menções nos principais blogs e periódicos de tecnologia. A demonstração, ilustrada no vídeo abaixo em 2019, mostrou muita força dos Serviços de Fala do Azure. Mal sabíamos que rapidamente se tornou um prelúdio de como as reuniões modernas seriam realizadas em um cenário de pandemia global e pós-pandemia: passando do físico para o virtual e para o híbrido.

<center>
<img src="/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/azure-demo.png" alt="Demonstração ao vivo do serviço de conversão de fala em texto e identificação de locutor do Microsoft Azure na MS Build 2019"/>
</center>

Anunciado como uma plataforma de transcrição de conversas, o showcase da Microsoft para o serviço de transcrição de reuniões do Azure, apropriadamente apresentado como “O Futuro das Reuniões Modernas”, estabeleceu seu novo serviço como uma plataforma robusta e eficiente de conversão de fala em texto (STT), adequada para todas as empresas que procuram uma maneira de capturar rápida e organizadamente todas as suas conferências importantes.

O que torna este serviço o auge da transcrição de reuniões? Primeiro, desempenho em tempo real. À medida que a tecnologia se torna cada vez mais rápida, a paciência fica cada vez mais escassa, onde até mesmo um atraso de alguns segundos é mais do que suficiente para irritar o usuário médio. No entanto, a Microsoft provou que seu transcritor de conversas é mais do que rápido o suficiente, fornecendo transcrições precisas mais rapidamente do que alguns serviços de legendas ocultas, tornando totalmente viável acompanhar uma conversa simultânea apenas com o texto.

Em seguida, a Microsoft também exibiu seus recursos de identificação de locutor. Acabar com uma bagunça de texto de conversação desorganizado é frustrante e inútil, mas a identificação de locutor rotula automaticamente cada enunciado com o locutor, criando um formato de fácil consumo.

![Interface do usuário do serviço de conversão de fala em texto e identificação de locutor do Microsoft Azure](/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/azure-ui.png)

Todos os dias, o hardware de computação se torna mais poderoso e as empresas procuram extrair até o último núcleo das CPUs e GPUs mais recentes. Muitas vezes, a tecnologia mais antiga entra em obsolescência e os clientes são forçados a atualizar a cada dois anos apenas para se manterem relevantes na sociedade. Em “O Futuro das Reuniões Modernas”, a Microsoft otimizou o Serviço de Fala do Azure para ser executado em hardware de nível de consumidor, mantendo a computação pesada do seu lado, expandindo ainda mais a já vasta população que pode se beneficiar deste serviço.

O serviço de transcrição de reuniões do Azure visa otimizar a maneira como conduzimos os negócios. Toda e qualquer organização faria bem em incorporar um produto como este em seu fluxo de trabalho. Em um dia normal, as informações estão fluindo constantemente e cada bit é tão significativo quanto o último, sejam lembretes, tarefas ou atualizações. Muitas vezes, as coisas se perdem nas rachaduras e isso significa tempo e lucros desperdiçados. O que a solução da Microsoft oferece é um registro completo e gerado automaticamente, delineando exatamente o que foi dito e quem o disse, então já se foram os dias de informações perdidas e caça cega em longas gravações de áudio por uma seção específica. Agora, todas as informações de que você precisa estão organizadas para você consultar com a frequência necessária. Essa tecnologia é mais importante do que nunca. Se o ano de 2020 nos ensinou alguma coisa, foi a necessidade de flexibilidade, especialmente no local de trabalho. As pessoas ficam doentes e surgem eventos imprevistos, por isso é virtualmente impossível esperar que os funcionários participem de todas as discussões. Com as Reuniões Modernas, estamos um passo mais perto de poder acomodar esses desenvolvimentos inesperados, essencialmente dando a todos a capacidade de estar lá sem realmente estar lá.

### Implementando Reuniões Modernas

Em meados de 2020, recebemos um pedido de proposta de um cliente do governo de Cingapura. Sim, ainda era pandemia. Mas Cingapura tinha tudo sob controle, então as reuniões do governo ainda aconteciam em salas de conferência físicas. Eles queriam uma solução moderna que pudesse transcrever a fala de até 12 locutores diferentes. Além disso, a identificação do locutor desempenharia um papel importante aqui.

Na identificação do locutor, uma diferença significativa entre o que o Azure oferece e o que o cliente precisa é o “registro” de voz: o Azure requer alguma voz pré-gravada de todos os locutores para registrar sua impressão de voz no sistema. No entanto, é impossível pedir a alguns funcionários do governo presumivelmente muito importantes que se sentem em frente a um microfone para serem gravados. Fizemos algumas adaptações ao processo, fazendo primeiro o agrupamento de locutores não supervisionado (também chamado de diarização de locutores). A ideia é que, se um locutor tivesse falado uma vez em nosso sistema, nós o reconheceríamos na próxima vez que ele falasse.

![Diagrama de fluxo dos serviços de conversão de fala em texto e identificação de fala do Microsoft Azure](/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/azure-diagram.png)

*A arquitetura das reuniões modernas da [Transcrição de Conversas do Azure](https://docs.microsoft.com/en-us/azure/cognitive-services/speech-service/conversation-transcription). Em nossa adaptação, relaxamos o requisito de “Registro de Usuário” antes da reunião para depois da reunião.*


Então, rapidamente montamos nosso arsenal para todo o projeto. O primeiro passo foi obter um conjunto de microfones de alta qualidade que fornecesse dados de áudio cristalinos para nossos modelos de reconhecimento. Fomos imediatamente atraídos pelo Azure Kinect: um elegante conjunto de 7 microfones alojado em uma caixa de alumínio completa com o bônus adicional de uma câmera de alta definição e sensores de profundidade.

<center>
<img src="/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/kinect.png" alt="O Azure Kinect DK de US$ 400 é usado para Reuniões Modernas"/>

*O [Azure Kinect DK](https://azure.microsoft.com/en-us/services/kinect-dk/) de US$ 400 é usado para Reuniões Modernas*
</center>

Só pela aparência, este é um dispositivo verdadeiramente sofisticado que complementaria qualquer sala de conferências, mas o mais importante é que o poderoso conjunto de microfones prometia a qualidade que procurávamos. Com o arranjo circular, os sete microfones abriram a possibilidade de usar técnicas de processamento de sinal de última geração, como localização de fonte e formação de feixe. Este microfone também foi o par perfeito com nosso backend, que utilizou os Serviços de Fala do Azure, uma plataforma estabelecida de conversão de fala em texto, dando ao nosso produto o poder de que precisava para ser um transcritor de reuniões de primeira linha.

<center>
<img src="/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/kinect-spec.png" alt="O Azure Kinect DK vem com um conjunto de 7 microfones para captar vozes"/>

*O Azure Kinect DK vem com um conjunto de 7 microfones para captar vozes*
</center>

Embora o Azure não tenha feito o corte final do SeaMeet, ele nos deu o começo de que precisávamos para poder realizar nossa visão. Finalmente, unimos tudo isso a uma interface de usuário. Em nossa primeira iteração, nos contentamos com um design genérico baseado em Java que, embora simples, era perfeitamente funcional. Como o dispositivo Kinect não pode executar código externo, tudo isso teve que ser executado em um único laptop Windows extra. Embora tenha sido um pouco difícil no início, ficamos orgulhosos de dizer que tínhamos um produto de transcrição de reuniões totalmente funcional.

<center>
<img src="/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/seameet-old.png" alt="Configuração inicial do serviço SeaMeet da Seasalt.ai usando um conjunto de microfones Microsoft Kinect"/>

*Implementando Reuniões Modernas com o Azure Kinect e um computador Windows, que executa uma interface de usuário simples baseada em Java para mostrar a transcrição da reunião em tempo real e a identificação do locutor.*
</center>

### Implantando Reuniões Modernas

Em maio de 2021, nossos engenheiros chegaram a Cingapura para implantar nossa solução de negócios moderna como uma prova de conceito. Enfrentando duas outras empresas concorrentes, cada um de nós foi encarregado de demonstrar nossa visão do futuro das reuniões.

Apesar do fato de que o sem fio se tornou a norma na última década, descobrimos que nossos concorrentes ainda optavam por uma solução com fio. Como você pode ver na imagem, cada um dos 12 locutores estava ancorado a um microfone individual. Um locutor tinha que falar diretamente no microfone em um ambiente de fala próxima para que o sistema captasse sua voz. Isso não apenas prejudica severamente a flexibilidade, mas essa configuração também multiplica a complexidade com equipamentos de AV complicados. Nossa solução, por outro lado, é totalmente alimentada por recursos de campo distante, graças ao conjunto de 7 microfones e algoritmos de processamento de sinal.

Até certo ponto, nossa solução era muito parecida com o “Alexa para Negócios”: um dispositivo cobre toda a sala, com apenas um cabo de alimentação necessário. Em comparação com a solução de nossos concorrentes, nossa solução está gerações à frente no sentido de que realmente entendemos as necessidades dos negócios modernos, enquanto eles ainda estão totalmente presos à geração com fio datada.

<center>
<img src="/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/poc-setup.png"/>

*Configuração da sala de conferências PoC. Havia 12 locutores simulando uma reunião de governo de 2 horas.*

<img src="/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/poc-captioned.png"/>

*Uma foto mais próxima de todo o equipamento no local.*
</center>

A equipe ficou animada ao ver a enorme diferença. Com algumas horas de ajuste, o PoC final correu muito bem. A equipe também desfrutou de um tour em Cingapura após o PoC, em um país onde a Covid-19 foi estritamente contida para que a vida e os negócios corressem como de costume.

### Além das Reuniões Modernas

Durante nosso tempo em Cingapura, nossos pensamentos foram além de um PoC bem-sucedido: em comparação com outras soluções concorrentes, a nossa era 10 vezes melhor. Mas como poderíamos fazer 10 vezes melhor do que nós mesmos? Siga nossos passos para o próximo blog desta série.

`;export{e as default};

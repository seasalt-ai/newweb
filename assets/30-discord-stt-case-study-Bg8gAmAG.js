const e=`---
title: "Speech-to-Text no Discord: Um Estudo de Caso do Bot STT do Discord"
metatitle: "Speech-to-Text no Discord: Um Estudo de Caso do Bot STT do Discord"
date: 2023-01-23 11:25:00-08:00
draft: false
author: Kim Dodds
description: "Neste blog, discutiremos nossas descobertas sobre como os usuários reais do Discord estão usando os serviços SeaVoice após revisar várias semanas de dados brutos de fala para texto."
weight: 1
tags:
  - SeaVoice
  - Discord
image: images/blog/30-stt-case-study/discord-stt-bot-case-study.jpg
canonicalURL: /blog/speech-to-text-discord-case-study/
url: /blog/speech-to-text-discord-case-study/
---

*Após o lançamento do SeaVoice, um dos bots de Text-to-Speech (TTS) e Speech-to-Text (STT) mais rápidos e precisos no Discord, queríamos entender como os usuários estavam realmente interagindo com os serviços. Neste blog, discutiremos nossas descobertas após revisar várias semanas de dados reais de usuários de fala para texto.*

# SeaVoice: Um Bot de TTS e STT para Discord

O Discord, sendo uma plataforma usada principalmente para uma mistura de chat de voz e texto, é um excelente campo de testes para serviços de IA de áudio e processamento de linguagem natural. Nós implantamos o bot SeaVoice, equipado com comandos de TTS e STT, no Discord em agosto de 2022. Para saber mais sobre como o bot funciona, ou para assistir a uma breve demonstração em vídeo, você pode visitar a [Wiki do Bot SeaVoice](https://wiki.seasalt.ai/seavoice/discord/1-intro-discord-bot/). Em novembro do mesmo ano, lançamos uma nova versão com grandes melhorias de backend (conforme detalhado em nossa postagem no blog: [Bot SeaVoice Discord: Melhorias de Backend e Estabilidade](https://seasalt.ai/blog/27-seavoice-discord-backend-improvements/)) que nos permite registrar dados anonimizados sobre como os usuários interagem com o bot SeaVoice. Em nosso blog recente ([Estudo de Caso do Bot TTS do Discord](https://seasalt.ai/blog/29-discord-tts-case-study/)) analisamos um mês de dados de usuários do comando TTS. Como acompanhamento, nesta postagem, daremos uma olhada em aproximadamente 3 semanas de dados de usuários de fala para texto.

## Uso do SeaVoice STT

No momento em que este artigo foi escrito, o bot SeaVoice foi adicionado a quase 900 servidores! Cerca de 260 servidores, totalizando mais de 600 participantes, experimentaram o comando STT pelo menos uma vez. Nas últimas três semanas, hospedamos aproximadamente 1800 sessões de STT e geramos um total de **mais de meio milhão de linhas de transcrição**.

<center>
<img src="/images/blog/30-stt-case-study/discord-stt-sessions-per-day.png" alt="Sessões diárias de fala para texto do bot SeaVoice Discord ao longo de 3 semanas."/>

*Sessões diárias de fala para texto do bot SeaVoice Discord ao longo de 3 semanas.*
</center>

Se olharmos para o número total de sessões de STT por dia, descobrimos que elas podem variar de 40 a mais de 140 (com uma média de cerca de 70). Também podemos olhar para o número total de linhas de transcrição que produzimos. No dia mais lento, produzimos um mínimo de 10 mil linhas, no entanto, em um dia agitado, produzimos mais de 40 mil linhas. Para colocar isso em perspectiva, em 18 de janeiro, hospedamos 102 sessões de STT totalizando pouco menos de 30 mil linhas de transcrição; isso equivale a aproximadamente 40 horas de tempo de gravação.

Também descobrimos que, embora a maioria das sessões seja usada para bate-papos curtos (média de 57 linhas por sessão), há um número significativo de sessões muito longas que elevam a média para 650 linhas por sessão. Nossa sessão mais longa teve mais de 30 mil linhas, o que é mais do que um dia inteiro de média! Finalmente, também demos uma olhada em quantos usuários tendem a estar em cada sessão e descobrimos que geralmente há de 4 a 5 usuários por sessão - no entanto, uma vez usamos o bot para apoiar a transcrição ao vivo em um seminário virtual com 45 participantes!

<center>
<img src="/images/blog/30-stt-case-study/discord-transcription-lines-per-day.png" alt="Linhas de transcrição diárias do bot SeaVoice Discord ao longo de 3 semanas."/>

*Linhas de transcrição diárias do bot SeaVoice Discord ao longo de 3 semanas.*
</center>

Embora a maioria dos servidores não tenha usado uma sessão de STT mais do que algumas vezes, há um bom número que usa o serviço extensivamente. Desde que começamos a registrar dados de uso de STT no final de dezembro, o número total médio de sessões por servidor é de cerca de 7; no entanto, nosso servidor principal está em 131 sessões - o que é uma média de mais de 6 sessões por dia! O mesmo servidor transcreveu mais de 150 mil linhas de fala em apenas 3 semanas! Talvez ainda mais impressionante, nosso usuário principal é do mesmo servidor e teve mais de 60 mil linhas de sua própria fala transcritas!

## Observações

### Por que as pessoas usam fala para texto

<center>
<img src="/images/blog/30-stt-case-study/discord-audio-transcript-download-user-quote.jpg" alt="Usuário do bot SeaVoice Discord expressa entusiasmo por arquivos de áudio e texto persistentes."/>

*Usuário do bot SeaVoice Discord expressa entusiasmo por arquivos de áudio e texto persistentes.*
</center>

Então, nossa primeira pergunta depois de ver os dados de uso foi: **Por que os usuários recorrentes usam fala para texto em primeiro lugar?**

Nós vasculhamos o banco de dados para encontrar algumas explicações. No entanto, provou ser difícil encontrar explicações concretas sobre por que os usuários usam o serviço STT em vez do serviço TTS. Parece que as pessoas sentem a necessidade de explicar aos outros no chat por que estão usando TTS, mas menos com STT. Independentemente disso, encontrei algumas transcrições interessantes que deram algumas informações sobre por que os usuários decidiram usar o serviço STT.

__*Por que os usuários usam STT:*__

- "É por isso que eu uso transcrições porque eu posso olhar para as coisas que eu perdi."
- "[Usuário] tem problemas de audição, então eles pegam um bot que transcreve"
- "[Usuário] estava invadindo com eles e eles estavam usando isso para transcrever coisas, mas então [Usuário] disse, oh, nós podemos usar isso para coisas de D e D também"
- "Mal posso esperar para voltar e ler algumas dessas transcrições mais tarde [...] Eu quero voltar e ouvir essa gravação e olhar para esse texto novamente"
- "Se fizermos nossas reuniões aqui, podemos alimentar o texto da reunião para uma IA"
- "Durante uma reunião com pessoas, é ótimo ver uma transcrição"
- "[Pessoas] que não estão no chat ou pessoas que estão na comunidade, mas não fazem parte do chat de voz, mas decidem olhar e ler"

Então, em geral, parece que a maioria dos usuários gosta da conveniência de ter uma transcrição ao vivo que pode ajudá-los a acompanhar a conversa e preencher quaisquer lacunas que possam ter perdido. Isso é especialmente verdadeiro para usuários com deficiência auditiva ou dificuldades de áudio/conexão. Para alguns usuários, a maior vantagem é ter um registro de áudio e texto persistente de sua conversa; isso pode ser especialmente conveniente para casos de uso como manter um registro de uma sessão de Dungeons & Dragons ou manter um registro de reuniões importantes.

Como muitos usuários não declararam explicitamente por que estavam usando o serviço STT, também parecia útil ter uma ideia do que eles estavam fazendo enquanto usavam o bot. A revisão das transcrições dos usuários me deu dicas sobre as atividades que eles estavam realizando durante a transcrição:

__*O que os usuários fazem enquanto usam STT:*__

- Apenas conversando
    - Jogos:
    - Jogos casuais
    - Jogos avançados (ex: formatação de raides de MMO, jogos multiplayer online)
- Jogos de RPG (Dungeons & Dragons)
- Streaming / Gravação de conteúdo
- Discutindo trabalho escolar / profissional / voluntário

Uma grande maioria das transcrições se enquadra nas categorias de "apenas conversando" e "jogos casuais". Como visto acima, acredito que a maioria dos usuários neste caso está usando o bot para melhorar a acessibilidade do canal de voz do Discord e/ou desfrutar da conveniência de ver uma transcrição ao vivo para preencher quaisquer lacunas que possam ter perdido na conversa. Em alguns casos (como quando usado para raides de MMO), as discussões de jogos são muito complexas e os usuários estão colaborando uns com os outros em tempo real; as transcrições ao vivo podem ser extremamente úteis para o sucesso da equipe, pois os usuários podem consultar as transcrições enquanto jogam.

<center>
<img src="/images/blog/30-stt-case-study/discord-stt-for-mmo-raid.jpg" alt="Exemplo de uma discussão complexa durante um raide de MMO."/>

*Exemplo de uma discussão complexa durante um raide de MMO.*
</center>

Também parece que muitos usuários estão usando o bot para transcrever conversas mais sérias, como reuniões de comunidade escolar, profissional e/ou voluntária. Também usamos nosso bot para transcrever uma conferência de tecnologia online, [UnTechCon](https://gfsc.studio/2022/11/14/announcing-untechcon.html). Nesses casos, os arquivos de gravação e texto finais podem ser muito úteis para os usuários revisarem após a reunião. Outro exemplo interessante que encontrei foi um usuário gravando conteúdo para sua transmissão. Como a transcrição final vem com carimbos de data/hora, os usuários podem carregar o arquivo de texto como legendas para seu conteúdo de áudio ou visual gravado.

<center>
<img src="/images/blog/30-stt-case-study/discord-stt-accessibility-user-quote.jpg" alt="Usuário do SeaVoice expressa gratidão por tornar os canais de voz do Discord mais acessíveis."/>

*Usuário do SeaVoice expressa gratidão por tornar os canais de voz do Discord mais acessíveis.*
</center>

Mas, independentemente do motivo exato pelo qual eles usam o serviço STT, muitos usuários expressaram entusiasmo por terem conseguido participar de conversas em canais de voz quando, de outra forma, não teriam conseguido. Acreditamos que o serviço STT torna os canais de voz do Discord mais acessíveis, e essa é a principal razão pela qual nossos usuários regulares continuam a usar o serviço.

### Comentários sobre o Bot SeaVoice Discord

Outro tópico interessante encontrado nos logs foram os comentários sobre o próprio bot. Felizmente, vimos muitos comentários muito positivos sobre o bot e seu desempenho.

<center>
<img src="/images/blog/30-stt-case-study/discord-seavoice-transcription-accuracy.png" alt="Usuário do SeaVoice comenta sobre a precisão da transcrição."/>

*Usuário do SeaVoice comenta sobre a precisão da transcrição.*
</center>

Também encontramos muitos comentários construtivos.

<center>
<img src="/images/blog/30-stt-case-study/discord-stt-accuracy-british-accent.png" alt="Usuário do SeaVoice sugere melhoria para sotaques britânicos."/>

*Usuário do SeaVoice sugere melhoria para sotaques britânicos.*
</center>

<center>
<img src="/images/blog/30-stt-case-study/discord-stt-siri-accent-accuracy-comparison.png" alt="Usuário compara o desempenho do SeaVoice em inglês com sotaque com o desempenho da Siri."/>

*Usuário compara o desempenho do SeaVoice em inglês com sotaque com o desempenho da Siri.*
</center>

A maioria dos comentários construtivos foi sobre o bot não ter um bom desempenho em inglês com sotaque não americano; em particular, os usuários mencionaram sotaques britânicos e escoceses. Para o futuro de nossos serviços de STT, podemos fazer um esforço significativo para melhorar nosso reconhecimento de fala para vários sotaques de inglês. Claro, o inglês não é a única língua que nossos usuários falam, então também planejamos adicionar mais suporte a idiomas ao bot. De fato, estamos atualmente finalizando as integrações de STT e TTS para mandarim taiwanês, e lançaremos uma versão atualizada do bot em breve.

## Privacidade, Sensibilidade de Dados e Conteúdo Potencialmente Ofensivo

O desenvolvimento de IA é cercado por uma enxurrada de dilemas éticos. Nossos modelos precisam de grandes quantidades de dados de usuários reais para funcionar bem, *mas como coletamos esses dados eticamente, respeitando a privacidade de nossos usuários?* Os modelos aprendem apenas com base nos dados que lhes são fornecidos e, portanto, têm vieses (talvez inesperados); *como podemos garantir que nossos modelos sirvam a todos os nossos usuários com a mesma qualidade?* Além disso, nossos modelos não têm noção de aceitabilidade social e podem produzir resultados que alguns usuários consideram ofensivos. Como um de nossos usuários disse de forma tão inteligente: *"É racista se o bot fez isso, essa é a questão"*.

<center>
<img src="/images/blog/30-stt-case-study/stt-accidental-racial-slur.png" alt="Usuário do SeaVoice aponta uma transcrição imprecisa problemática."/>

*Usuário do SeaVoice aponta uma transcrição imprecisa problemática.*
</center>

A razão pela qual levanto esses pontos é que havia algumas transcrições perturbadoras nos logs. O primeiro problema é que o bot às vezes transcreve conteúdo ofensivo. No exemplo acima, o bot transcreveu acidentalmente o nome de usuário de alguém como um insulto racial. Isso é claramente um erro por parte do bot que pode ser ofensivo para nossos usuários e deve ser investigado. Mas isso leva a mais perguntas: *Onde traçamos a linha entre ofensa e dano?*

<center>
<img src="/images/blog/30-stt-case-study/discord-transcription-censor.png" alt="Usuário do SeaVoice comenta sobre a tentativa de censurar certas palavras da transcrição."/>

*Usuário do SeaVoice comenta sobre a tentativa de censurar certas palavras da transcrição.*
</center>

Bem, para começar, decidimos dar esse poder aos usuários. Uma das próximas funcionalidades em que trabalharemos é a censura configurável para TTS e STT. Isso permitirá que os servidores apliquem opcionalmente a censura a palavrões, conteúdo sexual, insultos raciais, etc.

<center>
<img src="/images/blog/30-stt-case-study/discord-careful-transcript-content.png" alt="Usuário do SeaVoice adverte outro participante para ter cuidado com o que diz, pois aparecerá na transcrição."/>

*Usuário do SeaVoice adverte outro participante para ter cuidado com o que diz, pois aparecerá na transcrição.*
</center>

Curiosamente, outro problema relacionado que vimos é que os usuários se autocensuram para evitar que certas coisas apareçam na transcrição. Isso foi surpreendentemente comum, e vi vários casos em que os usuários explicaram que não queriam que o bot transcrevesse o que eles estavam prestes a dizer, então eles pararam e reiniciaram o STT. Essa é uma preocupação perfeitamente válida por parte do usuário se eles, por exemplo, não quiserem que o bot transcreva certas informações sensíveis.

<center>
<img src="/images/blog/30-stt-case-study/discord-stt-pause-deafen.png" alt="Como pausar o STT silenciando o bot."/>

*Como pausar o STT silenciando o bot.*
</center>

Não tenho certeza se há alguma maneira de melhorarmos a experiência do usuário neste caso, mas eu aconselharia os usuários que eles podem "silenciar" o bot temporariamente para parar de enviar qualquer áudio para o bot. Nesse caso, o bot não receberá nenhum dado de áudio até que seja dessilenciado, então o usuário pode essencialmente pausar uma sessão de STT sem parar e iniciar uma nova.

<center>
<img src="/images/blog/30-stt-case-study/discord-stt-opt-out-mute.jpg" alt="Usuário do SeaVoice comenta sobre o desconforto de outro participante com o bot."/>

*Usuário do SeaVoice comenta sobre o desconforto de outro participante com o bot.*
</center>

Finalmente, o último problema que vimos é que alguns usuários ficam tão desconfortáveis com a transcrição do bot que evitam falar ativamente no canal de voz enquanto o bot está presente. Isso é **exatamente o oposto** do nosso objetivo, que é tornar os canais de voz do Discord mais acessíveis a todos. Embora esperemos que os usuários aceitem nossa [Política de Privacidade](https://seasalt.ai/privacy) e confiem em nós para usar seus dados de forma responsável, respeitamos totalmente o direito de todos à privacidade. Como tal, **a próxima funcionalidade que implementaremos é uma configuração de exclusão de STT**. Isso permitirá que qualquer usuário se exclua da gravação e transcrição de STT, e seus dados de áudio não serão acessados ou coletados de forma alguma pelo bot.

Esperamos que essas funcionalidades planejadas nos permitam continuar a tornar os canais de voz mais acessíveis a todos, ao mesmo tempo em que damos aos usuários a capacidade de interagir com o bot SeaVoice em um nível com o qual se sintam confortáveis. Continuaremos a fazer um esforço para abordar proativamente essas questões difíceis para tornar o SeaVoice o melhor que ele pode ser!

Obrigado pelo seu interesse em nosso bot do Discord e obrigado aos nossos usuários pelo seu apoio contínuo! Você pode aprender mais sobre nosso produto STT na [página inicial do SeaVoice Speech-to-Text](https://suite.seasalt.ai/tts). Para uma demonstração individual de qualquer um de nossos produtos de IA de voz, preencha o [formulário de agendamento de demonstração](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting).

Se você ainda não experimentou o bot SeaVoice, pode aprender mais sobre nosso bot e adicioná-lo ao seu servidor na [Wiki do Bot SeaVoice Discord](https://wiki.seasalt.ai/seavoice/discord/1-intro-discord-bot/). Sinta-se à vontade para se juntar ao [servidor oficial do Discord do SeaVoice](https://discord.gg/dfAYfwBQ).

<center>
<iframe src="https://discordapp.com/widget?id=919037515514654721&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
</center>`;export{e as default};

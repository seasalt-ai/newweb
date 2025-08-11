const a=`---
title: "SeaVoice STT/TTS Discord Bot: O primeiro a fornecer gravações de voz para download com transcrições de IA"
metatitle: "SeaVoice STT/TTS Discord Bot: Downloads de Gravações"
date: 2022-12-13 11:51:16-08:00
modified_date: 2025-07-29 20:45:17+00:00
draft: false
author: Sydney Burgess, Kim Dodds, Drake Farmer, Jack Harvison, Dylan Strong, Cody Vernon
description: "Com o lançamento mais recente, o SeaVoice Discord Bot é o primeiro na plataforma a oferecer gravações de canal de voz para download com transcrições geradas por IA."
weight: 1
tags:
  - SeaVoice
  - Discord
image: images/blog/26-discord-download/seavoice-discord-audio-transcript-download.jpg
url: /blog/seavoice-discord-recording-download/
---

*O SeaVoice Discord Bot tem ganhado popularidade como uma das melhores opções para transcrever fala em canais de voz do Discord. Com o lançamento mais recente, o bot é o primeiro no Discord a oferecer gravações de canal de voz para download com transcrições geradas por IA.*

# Arquivos de Áudio e Transcrição para Download no Discord: Novos Recursos Emocionantes no Lançamento Mais Recente do Bot SeaVoice

Olá a todos, estamos animados para anunciar um novo recurso para o bot SeaVoice Discord!

<center>
<img src="/images/blog/26-discord-download/1-seavoice-discord-speech-to-text.png" alt="SeaVoice Discord Bot transcrevendo fala de um canal de voz em tempo real."/>

*SeaVoice Discord Bot transcrevendo fala de um canal de voz em tempo real.*
</center>

Desde o lançamento, o SeaVoice Discord Bot teve duas capacidades principais: ele transcreve conversas usando tecnologias de fala para texto altamente precisas e pode sintetizar fala com base nas entradas do usuário.
Ele tem crescido rapidamente em popularidade e agora está em mais de 700 servidores em todo o mundo, pouco depois de ser lançado.

Como equipe, discutimos diferentes maneiras de tornar o bot mais útil e acessível para os usuários.
Decidimos que fornecer uma gravação e transcrição das sessões seria útil para registrar reuniões, salvar sessões de jogo e várias outras situações.

## Visão Geral do Download de Transcrição e Áudio

<center>
<img src="/images/blog/26-discord-download/2-seavoice-audio-transcript-download-discord-direct-message.png" alt="SeaVoice Discord Bot envia uma DM com transcrição e downloads de áudio após cada sessão."/>

*SeaVoice Discord Bot envia uma DM com transcrição e downloads de áudio após cada sessão.*
</center>

Nos últimos meses, nossa equipe tem trabalhado duro para tornar essa ideia realidade.
Agora, quando você traz o bot para sua chamada para transcrever sua conversa com o comando \`/recognize\`, ele também gravará a chamada e persistirá as transcrições nos bastidores.
Quando você pedir para o bot sair, todos que participaram da chamada receberão uma mensagem direta do bot que contém uma transcrição completa e uma gravação da chamada.

<center>
<img src="/images/blog/26-discord-download/3-seavoice-discord-audio-download.png" alt="Clicar no link do SeaVoice Discord Bot abre uma página da web para pré-visualizar e baixar a gravação de áudio."/>

*Clicar no link do SeaVoice Discord Bot abre uma página da web para pré-visualizar e baixar a gravação de áudio.*
</center>

Haverá um link para baixar a gravação completa em formato mp3.
Esta é uma gravação de faixa única, então a fala de todos os usuários estará no mesmo arquivo.
O processamento de áudio para isso pode levar um pouco de tempo, então aguarde alguns segundos para o bot enviar o link, talvez até alguns minutos para conversas mais longas.

<center>
<img src="/images/blog/26-discord-download/4-seavoice-discord-transcription-file.png" alt="Arquivo de transcrição para download enviado pelo SeaVoice Discord Bot."/>

*Arquivo de transcrição para download enviado pelo SeaVoice Discord Bot.*
</center>

A transcrição está na forma de um arquivo de texto e inclui carimbos de data/hora para o início e o fim de cada coisa que foi dita, bem como o nome de usuário da pessoa que a disse.
Isso deve facilitar para os membros do seu servidor o acompanhamento das chamadas, e será útil para registrar reuniões de projeto, bem como sessões de jogo.

## Desafios

Deve-se notar também que tivemos um grande desafio em lidar com o áudio, pois o Discord envia o áudio de cada usuário separadamente e sem nenhum silêncio incluído.
Então, por favor, tenha em mente que ainda pode haver alguns problemas a serem resolvidos, e continuaremos a melhorar este recurso para tornar as gravações finais o mais precisas possível!
Se você encontrar algum problema com suas gravações ou transcrições, por favor, informe nossa equipe no [Servidor Oficial do Discord SeaVoice](https://discord.gg/dfAYfwBQ).
<center>
<iframe src="https://discordapp.com/widget?id=919037515514654721&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
</center>

## Direções Futuras

Com este recurso desafiador finalmente pronto para lançamento, nossa equipe já está planejando nossas próximas adições ao bot.
Algumas coisas que estamos analisando para o futuro são permitir configurações personalizáveis para servidores e/ou usuários para coisas como: como eles querem que as gravações sejam tratadas, o formato do arquivo de transcrição, se/quando reproduzir um aviso de gravação, canal padrão para saída de transcrições, etc.
Gostaríamos muito de ouvir suas sugestões para novos recursos (ou como melhorar os existentes) em nosso [Servidor Oficial do Discord SeaVoice](https://discord.gg/dfAYfwBQ).

## Experimente!

Enquanto isso, você pode convidar o [SeaVoice Discord Bot](https://discord.com/oauth2/authorize?client_id=1001955060210749492&scope=bot) para o seu servidor e experimentá-lo você mesmo.
Sinta-se à vontade para ler a [documentação do SeaVoice Bot](https://wiki.seasalt.ai/seavoice/discord/discord-bot/) também para ver como você pode usar o bot para melhor atender às necessidades da sua comunidade.


Esperamos que esses novos recursos o ajudem em tudo o que você usa o bot e que você se divirta usando-os!


Saudações,


A Equipe do Bot SeaVoice
`;export{a as default};

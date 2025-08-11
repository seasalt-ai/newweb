const a=`---
title: "Bot Discord SeaVoice STT/TTS: Melhorias no Backend e Estabilidade"
metatitle: "Bot Discord SeaVoice STT/TTS: Melhorias no Backend e Estabil..."
date: 2022-12-13 11:58:34-08:00
modified_date: 2025-07-28T16:56:53Z
draft: false
author: Sydney Burgess, Kim Dodds, Drake Farmer, Jack Harvison, Dylan Strong, Cody Vernon
description: "Com o lançamento mais recente, o Bot Discord SeaVoice lança melhorias massivas no backend que aprimoram a estabilidade do bot e auxiliam no desenvolvimento futuro."
weight: 1
tags:
  - SeaVoice
  - Discord
image: images/blog/27-discord-backend-improvements/seavoice-discord-stt-tts-bot-backend-improvements.jpg
canonicalURL: /blog/seavoice-discord-backend-improvements/
url: /blog/seavoice-discord-backend-improvements/
---


*O Bot Discord SeaVoice tem ganhado popularidade como uma das melhores opções para transcrever fala em canais de voz do Discord. Com o lançamento mais recente, estamos lançando melhorias massivas no backend que aprimoram a estabilidade do bot e auxiliam no desenvolvimento futuro.*

# SeaVoice Lembra: Banco de Dados Online!

Olá a todos, ultimamente temos trabalhado em algumas coisas nos bastidores para o Bot Discord SeaVoice que gostaríamos de compartilhar!

Como você viu em nossa postagem anterior no blog, adicionamos muitos recursos ao Bot SeaVoice, como nossas novas gravações de chamadas e transcrições. Juntamente com esses desenvolvimentos, demos ao Bot Discord SeaVoice a capacidade de lembrar o que ele fez: tudo, desde comandos até o registro de erros. Agora, quando o bot fala com você, ou você o usa para gravar uma chamada, todas essas informações são salvas de forma organizada.

## O que isso significa para os usuários
Agora, o que isso significa para você, você pode perguntar?

Bem, para começar, nossos novos recursos de transcrição e download de áudio não seriam possíveis sem essas melhorias de backend! Também podemos agora armazenar automaticamente quaisquer falhas infelizes que você experimente para que nossa equipe de desenvolvimento possa começar a corrigir esses problemas antes mesmo que você os perceba. Além disso, se alguém decidir que não deseja mais que seus dados sejam armazenados em nosso sistema, essa nova organização nos permite encontrar, recuperar e/ou remover rapidamente quaisquer dados por servidor, canal, usuário, data, etc.

Além disso, isso abre a porta para novos recursos, como rastreamento de estatísticas, moderação automática e muito mais. Moderadores, vocês gostariam de garantir que as regras do seu servidor estão sendo seguidas ou verificar com que frequência o bot é usado em seu servidor? Talvez você queira puxar aquela conversa hilária que teve na semana passada? Com a estrutura do banco de dados agora firmemente estabelecida e usada no bot de produção, uma ampla variedade de novos recursos está mais facilmente ao alcance.

## Privacidade dos Dados

Naturalmente, sempre que discutimos o salvamento de dados do usuário, há a questão da privacidade e segurança dos dados. Aqui estão alguns pontos-chave sobre como lidamos com seus dados:
- Todos os dados do usuário são armazenados em um servidor remoto seguro, ao qual apenas alguns funcionários selecionados da Seasalt.ai podem acessar.
- O SeaVoice registra apenas os dados fornecidos pelo Discord que os usuários fornecem ao interagir com o bot SeaVoice; isso inclui:
    - Nome e ID do servidor, canal, usuário
    - Texto inserido no comando \`/speak\`
    - Áudio falado em um canal de voz enquanto o bot está executando o comando \`/recognize\`
- Esses dados serão usados apenas pela Seasalt.ai para melhorar os serviços.
- Você pode solicitar que todos ou parte de seus dados sejam removidos a qualquer momento.

Para detalhes completos, consulte a [Política de Privacidade da Seasalt.ai](https://seasalt.ai/privacy/).

## Direções Futuras

Grande parte desta porção da atualização não será perceptível, mas para nós a parte difícil acabou, e agora podemos começar a trabalhar em projetos que permitirão que você personalize e use o SeaVoice Discord Bot ainda mais do que você pensava ser possível.
Um recurso no horizonte são as configurações personalizáveis do servidor e/ou do usuário.
Com o banco de dados em vigor, isso nos permitirá salvar preferências no futuro, como se você deseja ser lembrado de que um bate-papo por voz está sendo gravado, quem recebe o link de download para uma transcrição de chamada ou quem deseja optar por não ser gravado.

Tem alguma ideia que gostaria de ver adicionada agora que podemos salvar dados? Sinta-se à vontade para nos enviar algumas sugestões através do [Servidor Oficial do Discord do SeaVoice](https://discord.gg/dfAYfwBQ)!

<center>
<iframe src="https://discordapp.com/widget?id=919037515514654721&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
</center>

## Experimente!

E se você ainda não experimentou o lançamento mais recente do SeaVoice Bot, experimente! Convide o [Bot Discord SeaVoice](https://discord.com/oauth2/authorize?client_id=1001955060210749492&scope=bot) para o seu servidor.
Sinta-se à vontade para ler a [documentação do Bot SeaVoice](https://wiki.seasalt.ai/seavoice/discord/discord-bot/) também para ver como você pode usar o bot para melhor atender às necessidades da sua comunidade.

Fique ligado para algumas atualizações emocionantes que estão por vir!

Obrigado,

A Equipe do Bot SeaVoice.
`;export{a as default};

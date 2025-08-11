const e=`---
title: "Discord (3/3): Discord e Twilio Flex: Trazendo o Contact Center Flex para Território Inexplorado"
metatitle: "Discord (3/3): Twilio Flex Contact Center no Discord"
date: 2022-06-07 12:32:24-07:00
modified_date: 2025-07-28T16:56:53Z
draft: false
author: Kim Dodds
description: "Neste blog, demonstraremos como a Seasalt.ai integrou um contact center completo em um servidor Discord."
weight: 1
tags:
  - SeaX
  - Discord
image: /images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/flex-discord-thumbnail.png
canonicalURL: /blog/discord-and-twilio
url: /blog/discord-and-twilio/
---

*Esta é a nossa última postagem em uma série de três partes sobre o engajamento do cliente no Discord. Nosso primeiro blog, [“Uma Nova Fronteira para o Engajamento do Cliente”](https://seasalt.ai/blog/15-discord-a-new-frontier-for-customer-engagement/), discutiu o aumento da popularidade do Discord e a nova oportunidade que ele apresenta para as marcas criarem e participarem de suas próprias comunidades online. Na parte dois, [“Como Criar uma Comunidade e um Bot do Discord para sua Marca”](https://seasalt.ai/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/), explicamos como criar um servidor Discord para sua marca e como integrar um bot para gerenciar a moderação do servidor, anúncios, feedback do usuário, etc. Finalmente, neste blog, apresentaremos uma demonstração de como nós da Seasalt.ai integramos um contact center completo em um servidor Discord, permitindo que as marcas lidem com todos os aspectos do atendimento ao cliente na plataforma.*

## Sumário
- [Sumário](#table-of-contents)
- [Demonstração do Serviço de Atendimento ao Cliente do Discord](#discord-customer-service-demo)
- [Twilio Flex](#twilio-flex)
- [SeaX](#seax)
- [Servidor de Demonstração](#demo-server)
  - [Ajuda de 1 para Muitos: Canais Oficiais](#1-to-many-help-official-channels)
  - [Ajuda de 1 para 1: Agente de Atendimento ao Cliente](#1-to-1-help-customer-service-agent)
    - [Base de Conhecimento](#knowledge-base)
    - [Transferência de Agente ao Vivo](#live-agent-transfer)
  - [Gerenciamento de Casos](#case-management)
- [Análise Técnica Aprofundada](#technical-deep-dive)
  - [Definir o Fluxo Flex](#define-the-flex-flow)
  - [Criar um Canal Personalizado](#create-a-custom-channel)
  - [Criar um Servidor HTTP para Suportar Roteamento Mais Complexo](#create-an-http-server-to-support-more-complex-routing)
    - [Webhook de Mensagens de Saída](#outbound-messages-webhook)
    - [Integração de Bot](#bot-integration)
- [Resumo](#summary)

# Demonstração do Serviço de Atendimento ao Cliente do Discord
Se você está ansioso para ir direto ao ponto e ver o produto final, apresentaremos o vídeo de demonstração final primeiro:

<iframe width="85%" height="450px" src="https://www.youtube.com/embed/iUK4YkGYI6Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>


Nosso objetivo é demonstrar como o Discord pode ser integrado ao software de atendimento ao cliente existente (neste caso, [Twilio Flex](https://flex.twilio.com/)) para adicionar valor adicional ao servidor oficial de uma marca. Continue lendo para uma análise mais detalhada de nossa implementação.

# Twilio Flex
Twilio é uma empresa de comunicações bem estabelecida que oferece APIs para gerenciar mensagens de texto, chamadas telefônicas, e-mails, mensagens de chat e muito mais. Flex é um dos produtos carro-chefe da Twilio: um contact center escalável baseado em nuvem que roteia mensagens e chamadas de qualquer fonte para agentes virtuais e ao vivo. Escolhemos o Flex como base para nossa integração de contact center porque ele já possui excelente suporte para uma ampla variedade de canais, como Facebook, SMS e WhatsApp.

# SeaX
SeaX é um contact center em nuvem profundamente integrado com recursos avançados de IA que ajudam a aumentar a produtividade e a satisfação do cliente. SeaX é um dos produtos carro-chefe da Seasalt.ai e já foi lançado para clientes em mais de 150 países. A plataforma de contact center SeaX é construída sobre o Twilio Flex e inclui uma variedade de recursos adicionais que capacitam os agentes ao vivo a ajudar melhor os clientes. Alguns dos recursos mais úteis são o text-to-speech e speech-to-text internos, a base de conhecimento alimentada por IA e o sistema de gerenciamento de casos integrado. Para obter mais informações sobre todas as capacidades da plataforma SeaX, visite a [página inicial do SeaX](https://seax.seasalt.ai/?utm_source=blog/).

# Servidor de Demonstração
Agora vamos explicar como configuramos nosso servidor Discord. Para fins de demonstração, imaginamos um cenário em que nosso servidor foi usado como uma comunidade para um jogo como Pokémon Go! A tabela a seguir resume alguns dos recursos demonstrados em nosso servidor Discord.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-features-2.png" alt="Visão geral dos recursos do servidor Discord de demonstração do serviço de atendimento ao cliente."/>

*Visão geral dos recursos do servidor Discord de demonstração.*
</center>

## Ajuda de 1 para Muitos: Canais Oficiais
Vários canais no servidor são configurados para fornecer um fluxo direto entre administradores/desenvolvedores oficiais e jogadores.
O **canal de anúncios** só pode ser postado por administradores e moderadores, e pode incluir postagens (manuais ou automatizadas) da conta do Twitter, site ou outras fontes oficiais.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-announcement-channel.jpg" alt="O canal de anúncios no servidor Discord, apresentando uma postagem de uma conta oficial do Twitter."/>

*O canal #announcements no servidor Discord de demonstração.*
</center>

O **canal de relatório de bugs** permite que os jogadores discutam bugs e problemas que quebram o jogo. Os administradores podem ficar de olho neste canal para identificar quaisquer problemas no jogo que devam ser direcionados. Além disso, os usuários podem enviar um relatório de bug oficial usando o comando de barra \`/bug\` de dentro do canal.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-bug-report-channel.jpg" alt="O canal de relatório de bugs no servidor Discord, apresentando um relatório de bug enviado."/>

*O canal #bug-report no servidor Discord de demonstração, apresentando um relatório de bug enviado.*
</center>

O **canal de solicitação de recursos** permite que os jogadores discutam mudanças na jogabilidade, melhorias na qualidade de vida, adições de conteúdo, etc. que eles gostariam de ver adicionados ao jogo. Semelhante ao canal de solicitação de bugs, suas entradas podem ser vistas pelos moderadores do Discord e eles podem usar o comando de barra \`/new_feature\` para enviar uma solicitação oficial.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-feature-request-channel.jpg" alt="O canal de solicitação de recursos no servidor Discord, apresentando um usuário executando um comando de barra."/>

*O canal #feature-request no servidor Discord de demonstração, apresentando um usuário executando um comando de barra.*
</center>

## Ajuda de 1 para 1: Agente de Atendimento ao Cliente

Os jogadores podem usar o comando de barra \`/helpme\` para acionar uma mensagem direta com um agente. O Agente de Atendimento ao Cliente pode ser automatizado (agente virtual) ou operado por um agente ao vivo.

Para nossa demonstração, configuramos um bot de perguntas frequentes simples que consulta a base de conhecimento da empresa para fornecer sugestões de artigos relevantes ao usuário. O usuário também pode solicitar um agente ao vivo e será transferido no mesmo chat para um agente ao vivo no SeaX.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-customer-service-channel.jpg" alt="O canal de atendimento ao cliente no servidor Discord, apresentando um usuário acionando um DM."/>

*O canal #feature-request no servidor Discord de demonstração, apresentando um usuário acionando um DM.*
</center>

### Base de Conhecimento
Quando o usuário envia uma consulta ao agente de serviço virtual, o agente pode encaminhar o usuário para artigos relevantes na base de conhecimento.

### Transferência de Agente ao Vivo
Uma vez que um usuário esteja em uma mensagem direta com o bot, ele pode solicitar um agente ao vivo. Ele será imediatamente notificado de que um caso foi criado para ele e que está sendo transferido para um agente ao vivo. Quando o agente ao vivo entrar no chat, ele também receberá uma notificação.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-customer-service-dm.jpg" alt="Uma mensagem direta com o atendimento ao cliente, apresentando sugestões de artigos da base de conhecimento, transferência de agente ao vivo e gerenciamento de casos."/>

*Uma mensagem direta com o atendimento ao cliente, apresentando sugestões de artigos da base de conhecimento, transferência de agente ao vivo e gerenciamento de casos.*
</center>

No backend, os agentes ao vivo podem lidar com chamadas e mensagens de chat de todos os canais (SMS, Facebook, Discord, chamada de voz, etc.) através de uma única plataforma. Neste caso, a plataforma de backend é o SeaX.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/flex-discord-channel.jpg" alt="A interface do SeaX exibindo a visão do agente ao vivo de uma conversa com um usuário no Discord."/>

*A interface do SeaX exibindo a visão do agente ao vivo de uma conversa com um usuário no Discord.*
</center>

## Gerenciamento de Casos
Uma característica que queríamos enfatizar nesta demonstração é o gerenciamento de casos. A solução Discord da Seasalt.ai se integra com o sistema de gerenciamento de casos do SeaX para rastrear adequadamente vários casos de usuários. Quando um usuário interage com o bot do Discord (como solicitar um agente ao vivo ou relatar um bug), podemos abrir automaticamente um novo caso e registrar todas as informações importantes sobre o usuário e o problema que ele está enfrentando. Isso permite que o agente ao vivo tenha fácil acesso a todos os problemas relatados e garanta que eles acompanhem os usuários até que o caso seja resolvido.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-new-case.png" alt="Criando um novo caso no sistema de gerenciamento de casos do SeaX."/>

*Criando um novo caso no sistema de gerenciamento de casos do SeaX.*

<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-existing-case.png" alt="Visualizando um caso existente no sistema de gerenciamento de casos do SeaX."/>

*Visualizando um caso existente no sistema de gerenciamento de casos do SeaX.*

</center>

# Análise Técnica Aprofundada

Agora vimos o produto final e todos os recursos disponíveis para os membros do servidor e os agentes ao vivo que os auxiliam. Mas como tudo isso foi realmente implementado? Em nossa última postagem no blog, “[Como Criar uma Comunidade e um Bot do Discord para sua Marca](https://seasalt.ai/blog/16-discord-how-to-create-a-discord-community-and-bot-for-the-brand/)”, explicamos como criar o servidor Discord para sua marca e como integrar um bot Discord para gerenciá-lo. Para apoiar esta demonstração mais avançada, também usamos [SeaChat, o motor de IA Conversacional da Seasalt.ai](https://chat.seasalt.ai), para construir um chatbot simples que permite que nosso bot Discord lide com consultas em linguagem natural para os usuários.

No lado do SeaX, nossa equipe trabalhou em estreita colaboração com a Twilio para criar uma solução de contact center rica em recursos construída sobre o Twilio Flex. Para obter mais informações sobre o Twilio Flex e como o processo de configuração funciona, você pode ler o [Guia de Início Rápido do Twilio Flex](https://www.twilio.com/docs/flex/quickstart).

Depois de preparar o servidor Discord, o bot Discord e o chatbot e garantir que temos uma instância funcional do SeaX em execução, o maior desafio é rotear corretamente as mensagens para e do usuário, do bot e dos agentes ao vivo no SeaX. A Twilio é fantástica em lidar com o roteamento de mensagens, então nosso objetivo é lidar com todos os comandos de barra dentro do nosso servidor de bot Discord e, em seguida, encaminhar todas as outras mensagens (como mensagens diretas para o chatbot ou para o agente ao vivo) para a Twilio.

## Definir o Fluxo Flex
O primeiro passo é garantir que todas as mensagens que enviamos para a Twilio sejam roteadas para o local correto. Configuramos um fluxo simples da Twilio que primeiro verifica se o usuário solicitou um agente ao vivo e, em caso afirmativo, encaminha as seguintes mensagens para o SeaX. Se o usuário não solicitou um agente ao vivo, encaminhamos a mensagem para o chatbot para obter uma resposta. Para obter mais informações sobre como configurar o fluxo, consulte a [documentação do Twilio Studio Flow](https://www.twilio.com/docs/studio).

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-flow.png" alt="Um fluxo simples do Flex Studio que roteia mensagens de entrada para um chatbot ou para o SeaX."/>

*Um fluxo simples do Flex Studio que roteia mensagens de entrada para um chatbot ou para o SeaX.*
</center>

## Criar um Canal Personalizado
Então, agora temos uma ideia de como as mensagens de entrada serão roteadas. No entanto, o Discord não é um canal nativamente suportado pela Twilio. Felizmente, a Twilio tem um tutorial detalhado sobre como [Adicionar um Canal de Chat Personalizado ao Twilio Flex](https://www.twilio.com/blog/add-custom-chat-channel-twilio-flex). Depois de seguir o guia para configurar o novo canal personalizado na Twilio, precisamos realmente encaminhar as mensagens do Discord para a Twilio.

Primeiro, configuramos o cliente Twilio:

\`\`\`python
from twilio.rest import Client
twilio_client = Client(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)
\`\`\`

Agora, uma vez que recebemos uma mensagem de entrada do Discord, podemos encaminhar essa mensagem para a Twilio através do cliente Twilio. Primeiro, devemos verificar se o usuário já existe no sistema Twilio e se ele já possui um canal de chat aberto.

\`\`\`python
# chamar o método get_user para verificar se o usuário existe e criar um novo se não
user = await get_user(user_id, twilio_client, TWILIO_SERVICE_SID)

# buscar os canais em que o usuário está
user_channels = twilio_client.chat \\
        .services(TWILIO_SERVICE_SID) \\
        .users(user_id) \\
        .user_channels \\
        .list()
\`\`\`

Se o usuário tiver um canal de chat aberto existente, precisamos usá-lo para ter acesso ao histórico de chat. Se não houver um canal de chat existente, criamos um novo para o usuário:

\`\`\`python
if user_channels:
    channel_sid = user_channels[-1].channel_sid
else:
    channel = twilio_client.flex_api \\
            .channel \\
            .create(
                flex_flow_sid=FLEX_FLOW_ID,
                chat_user_friendly_name=username,
                chat_friendly_name=chat_name,  # -> O nome amigável do canal de chat
                target=conversation_id,  # -> A identidade que identifica unicamente o usuário do chat
                identity=conversation_id,  # -> O usuário, ex/ o ID DM do Discord
        )
    channel_sid = channel.sid
\`\`\`

Finalmente, uma vez que temos um canal de chat aberto entre o usuário do Discord e a Twilio, podemos encaminhar a mensagem de entrada para o fluxo do Twilio Studio.

\`\`\`python
message = twilio_client.chat \\
        .services(TWILIO_SERVICE_SID) \\
        .channels(channel_sid) \\
        .messages \\
        .create(
            body=message_text,
            from_=user_id,
            x_twilio_webhook_enabled='true',
            attributes=json.dumps(message_json)  # enviar os cabeçalhos como atributo para que sejam acessíveis mais tarde
        )
\`\`\`
Agora temos a capacidade de encaminhar todas as nossas mensagens de entrada de usuários do Discord diretamente para o nosso Fluxo Twilio Flex. No lado do bot do Discord, certifique-se de que todas as mensagens diretas estão sendo encaminhadas para a Twilio. Agora você pode tentar enviar uma mensagem direta para o bot do Discord, e você deve vê-la aparecer nos logs do Fluxo do Twilio Studio - Mas ainda não terminamos!

## Criar um Servidor HTTP para Suportar Roteamento Mais Complexo

### Webhook de Mensagens de Saída
Então, agora temos uma ideia de como nossas mensagens de entrada serão roteadas. No entanto, ainda faltam algumas peças. Em primeiro lugar, sabemos que agora podemos enviar mensagens para a Twilio, mas como respondemos aos nossos usuários no Discord? Nosso bot do Discord é a única coisa autorizada a enviar mensagens para nosso servidor e usuários do Discord, e a Twilio não sabe como enviar nossas mensagens de volta para o servidor do Discord de qualquer maneira. A solução é que precisamos configurar um webhook de mensagens de saída que será acionado toda vez que houver uma nova mensagem no canal de chat da Twilio. Dentro desse webhook, podemos então usar nosso bot do Discord para encaminhar a mensagem de volta para nosso servidor.

Para fazer isso, integramos nosso bot do Discord em um servidor HTTP mais robusto. Usamos [FastAPI](https://fastapi.tiangolo.com/) para configurar um endpoint POST simples que servirá como nosso webhook de mensagens de saída. Uma vez que tenhamos o servidor configurado e nosso bot do Discord funcionando ao lado dele, podemos definir o endpoint POST.

Este endpoint receberá cada mensagem adicionada ao canal de chat, então primeiro queremos filtrar tudo, exceto as mensagens de saída do SeaX. Em seguida, precisaremos pegar o ID do canal correto do corpo da mensagem para que saibamos para onde encaminhar a mensagem. Finalmente, podemos usar o cliente Discord para encaminhar a mensagem para o canal Discord.

\`\`\`python
@app.post("/forward-to-discord", status_code=200)
async def forward_discord_message(request: Request, response: Response) -> None:
    raw_body = await request.body()
    body = urllib.parse.parse_qs(raw_body.decode())

    # apenas preste atenção às mensagens do SDK (Flex, todas as outras serão da API)
    if not body.get('Source') == ['SDK']:
        return

    # As mensagens do Flex não contêm o conversationId da mensagem original
    # Precisamos do convId para enviar a mensagem de volta para a conversa no GBM
    # Buscar a mensagem anterior e extrair o conversationId
    message = twilio_client.chat \\
            .services(TWILIO_SERVICE_SID) \\
            .channels(body.get("ChannelSid")[0]) \\
            .messages.list(limit=1)[0]

    attributes = json.loads(message.attributes)

    channel = discord_client.get_channel(attributes.get("channel", {}).get("id"))
    if channel:
        await channel.send(body.get("Body", [""])[0].get("text"))
    else:
        logger.error(f"Canal Discord não pôde ser encontrado com o ID: {get_channel_id(req)}!")
        response.status_code = 400
\`\`\`

Finalmente, para que as mensagens sejam enviadas para o nosso endpoint, precisamos informar à Twilio qual é o nosso novo webhook. Cada canal de chat precisa ter seu próprio webhook configurado. Então, se voltarmos para onde criamos originalmente o novo canal de chat para o usuário, podemos adicionar algum código adicional para configurar o webhook:

\`\`\`python
webhook = twilio_client.chat \\
        .services(TWILIO_SERVICE_SID) \\
        .channels(channel_sid) \\
        .webhooks \\
        .create(
            type='webhook',   
configuration_url=f"{SERVER_HOST}/forward-to-discord",
            configuration_method="POST",
            configuration_filters=["onMessageSent", "onMessageUpdated", "onMediaMessageSent"]
        )
\`\`\`

### Integração de Bot

Então, agora as mensagens de saída do SeaX devem ser roteadas corretamente de volta para o nosso servidor Discord. Mas ainda não abordamos as mensagens que vão para o chatbot. Precisamos configurar um último endpoint que será acionado pelo Fluxo do Twilio Studio e receberá a mensagem do usuário, consultará o bot e retornará a resposta para o Discord.

\`\`\`python
@app.post("/chatbot-to-discord", status_code=200)
async def receive_discord_message(request: Request, response: Response):
    """Receber solicitação POST da Twilio, consultar o bot e retornar a resposta para o Discord."""
    req = await request.body()
    # separar o corpo da mensagem original do conteúdo do twilio
    twilio_body, original_message_body = separate_original_message_body(req.decode())

    bot_response = await query_bot(original_message_body, bot_info)

    if bot_response:
        channel = discord_client.get_channel(original_message_body.get("channel_id"))
        if channel:
            for item in bot_response:
                await channel.send(item.get("text"))
\`\`\`

Certifique-se de que o Fluxo do Twilio Studio tenha o webhook correto para rotear as mensagens para o bot. Agora terminamos nosso roteamento de mensagens! Podemos ver uma visão de alto nível de todo o roteamento de mensagens neste diagrama:

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-routing-diagram.jpg" alt="Diagrama de roteamento de mensagens."/>

*Diagrama de roteamento de mensagens.*
</center>

# Resumo
Para concluir, nesta série de blogs discutimos o aumento da popularidade do Discord e a oportunidade que ele apresenta para as marcas como uma nova plataforma para interagir com os clientes. Percorremos alguns dos recursos básicos do Discord, para mostrar como uma marca pode configurar sua própria comunidade online, bem como recursos mais avançados que permitem que as marcas automatizem a moderação e o suporte ao cliente em seu servidor com bots do Discord. Finalmente, compartilhamos nossa demonstração de como integramos o Discord com nossa plataforma de atendimento ao cliente, SeaX, para trazer recursos avançados para a comunidade do Discord, como transferência de agente ao vivo, gerenciamento de casos e pesquisa de base de conhecimento alimentada por IA.
Para uma demonstração pessoal, ou para ver como a Seasalt.ai pode ajudar a atender às suas necessidades de negócios específicas, preencha nosso formulário “[Agendar uma Demonstração](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting)”. Para obter mais informações sobre a integração Flex/Discord ou para entrar em contato conosco, visite a [Lista de Parceiros Twilio da Seasalt.ai](https://showcase.twilio.com/partner-listing/a8E8Z000000PDCQUA4).`;export{e as default};

const a=`---
title: "Leve clientes de qualquer canal para um só lugar com a comunicação omnicanal da SeaX"
metatitle: "Unifique os pontos de contato do cliente com a comunicação omnicanal da SeaX"
date: 2022-07-15 13:56:54-07:00
modified_date: 2025-08-02 17:00:00-07:00
draft: false
author: Kim Dodds
description: "Neste blog, destacamos uma das comunicações omnicanal da SeaX, que permite que as mensagens do usuário de qualquer canal apareçam na plataforma SeaX."
weight: 1
tags:
  - SeaX
image: images/blog/19-seax-omnichannel-communication/0-thumbnail.png
canonicalURL: /blog/seax-omnichannel-communication/
url: /blog/seax-omnichannel-communication/
---

*Em nossa postagem anterior do blog, [Bem-vindo ao SeaX, um centro de contato na nuvem colaborativo](https://seasalt.ai/blog/18-seax-collaborative-cloud-contact-center-introduction/), apresentamos o SeaX, nossa solução de centro de contato de comunicações na nuvem colaborativa. Embora nossa primeira postagem no blog tenha fornecido uma visão geral abrangente dos recursos básicos e mais avançados do SeaX, nossas postagens subsequentes se aprofundarão em alguns dos recursos individuais que destacam o SeaX. Nesta postagem, examinaremos mais de perto o suporte omnicanal do SeaX e veremos como as chamadas e mensagens de diferentes canais aparecem na plataforma SeaX.*

# Índice
- [O que é comunicação omnicanal?](#what-is-omnichannel-communication)
- [Ciclo de vida da mensagem](#message-lifecycle)
    - [Canal](#channel)
    - [Roteamento de mensagens](#message-routing)
    - [TaskRouter](#taskrouter)
    - [Plataforma SeaX](#seax-platform)
- [Canais suportados](#supported-channels)

# O que é comunicação omnicanal?

Em primeiro lugar, o que exatamente significa "omnicanal"? Detalhadamente, "omni" é um prefixo que significa "todos", e "canal" são as várias plataformas nas quais você pode interagir com seus clientes. Portanto, em termos simples, "comunicação omnicanal" significa ser capaz de se comunicar por meio de todos e quaisquer canais disponíveis. Não apenas isso, mas a comunicação omnicanal também significa que a experiência entre os canais é perfeita. Do lado do agente, as comunicações de todos os canais são apresentadas em uma interface unificada. Para o cliente, seus dados de interação são persistentes em todos os canais.

Os call centers tradicionais geralmente suportam apenas chamadas telefônicas. Centros de contato mais avançados que se envolvem com clientes em vários canais, como e-mail, chat na web e telefone, têm um centro de contato multicanal. No entanto, só porque um centro de contato utiliza vários canais não significa que sua experiência seja perfeita. Em um centro de contato multicanal, diferentes canais podem ser acessados por meio de plataformas separadas e/ou os dados do cliente podem não estar vinculados entre os canais. Em contraste, um centro de contato omnicanal permite que os agentes rastreiem as conversas dos clientes onde quer que eles vão, sem ficarem presos a um único canal ou espalhados por uma dúzia de plataformas.

<center>
<img src="/images/blog/19-seax-omnichannel-communication/1-contact-center-comparison.png" alt="Comparação de recursos: call center tradicional vs. centro de contato; multicanal vs. omnicanal."/>

*Comparação de recursos: call center tradicional vs. centro de contato; multicanal vs. omnicanal.*
</center>

O SeaX é capaz de se integrar a praticamente qualquer canal, incluindo, por padrão: texto, telefone, chat na web, Facebook e muito mais. Todas as mensagens e chamadas são exibidas em uma plataforma unificada, e os dados do usuário de todos os canais estão prontamente disponíveis.

Se você quiser ir direto para a demonstração, assista ao nosso pequeno vídeo onde demonstramos a comunicação omnicanal do SeaX. No restante deste blog, percorreremos passo a passo como as mensagens e chamadas de vários canais são roteadas para um agente no SeaX. Também compartilharemos os canais suportados prontos para uso e discutiremos como o SeaX pode ser estendido para cobrir novos canais.

<iframe width="85%" height="450px" src="https://www.youtube.com/embed/usb-RK7sHlA" title="Player de vídeo do YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

# Ciclo de vida da mensagem

O SeaX é construído sobre o [Twilio Flex](https://www.twilio.com/flex), um centro de contato baseado em nuvem que utiliza a plataforma de comunicação em nuvem da Twilio. A Twilio fornece os blocos de construção fundamentais para o SeaX, como infraestrutura de telecomunicações, roteamento de mensagens e tarefas e uma interface de usuário básica do centro de contato. Agora, vamos rastrear o ciclo de vida de uma mensagem de usuário recebida e ver como o SeaX usa a arquitetura básica da Twilio em combinação com componentes personalizados para rotear a mensagem para um agente ao vivo na plataforma SeaX.

## Canal

<center>
<img src="/images/blog/19-seax-omnichannel-communication/2-example-message.jpg" alt="Um usuário enviando uma mensagem para uma empresa no Google Business Messages." style="width:50%"/>

*Enviando uma mensagem para uma empresa no Google Business Messages.*
</center>

A jornada de uma mensagem começa com um usuário redigindo e enviando uma mensagem em uma plataforma suportada. O exemplo acima mostra alguém enviando uma mensagem para um chatbot da Seasalt.ai no Google Business Messages. Por padrão, o Twilio não oferece suporte ao Google Business Messages, então utilizamos um conector de canal personalizado desenvolvido pela Seasalt.ai para conectar a plataforma do Google ao Twilio e ao SeaX.

Uma vez que a mensagem é enviada, ela é passada pelo conector personalizado para a API de mensagens da Twilio. Neste ponto, a Twilio cria um novo contexto de conversa para o usuário e se prepara para rotear a mensagem.

## Roteamento de mensagens

<center>
<img src="/images/blog/19-seax-omnichannel-communication/3-studio-flow.png" alt="Um fluxo de estúdio simples que roteia mensagens para um chatbot ou um agente ao vivo."/>

*Um fluxo de estúdio simples que roteia mensagens para um chatbot ou um agente ao vivo.*
</center>

Uma vez que a mensagem é recebida pela Twilio, ela precisa ser roteada para o local correto. Para fazer isso, usamos os [Twilio Studio Flows](https://www.twilio.com/studio) para determinar se devemos dar uma resposta automatizada, encaminhar a mensagem para um chatbot, conectar o usuário a um agente ao vivo ou realizar alguma outra ação.

No exemplo simples fornecido acima, todas as mensagens recebidas serão encaminhadas para um chatbot, a menos que contenham a frase "agente ao vivo", caso em que o usuário será transferido para um agente ao vivo na plataforma SeaX.

## TaskRouter

<center>
<img src="/images/blog/19-seax-omnichannel-communication/4-taskrouter.png" alt="Diagrama de arquitetura do TaskRouter."/>

*Diagrama de arquitetura do TaskRouter. [Fonte](https://twilio-cms-prod.s3.amazonaws.com/images/taskrouter-diagram.width-800.png).*
</center>

Depois que a mensagem é transferida para o SeaX, o próximo passo é decidir qual agente a receberá. O [TaskRouter da Twilio](https://www.twilio.com/taskrouter) atribui tarefas como mensagens e chamadas telefônicas ao agente no SeaX que está mais bem equipado para lidar com elas. Cada agente no SeaX pode receber habilidades, como quais idiomas eles falam, em qual departamento eles trabalham, se devem lidar com clientes VIP, etc. O TaskRouter verificará as informações conhecidas sobre o usuário e a mensagem e, em seguida, selecionará o funcionário mais apropriado para lidar com o problema. O fluxo do Studio da etapa anterior pode ser personalizado para obter informações adicionais (como idioma preferido), e as informações do cliente podem ser mantidas em conversas e canais para garantir que sua experiência seja perfeita.

## Plataforma SeaX

<center>
<img src="/images/blog/19-seax-omnichannel-communication/5-seax-incoming-messages.png" alt="Chamadas e mensagens recebidas aparecem na plataforma SeaX." style="width:50%"/>

*Chamadas e mensagens recebidas aparecem na plataforma SeaX.*
</center>

Finalmente, a mensagem recebida será apresentada ao agente apropriado na plataforma SeaX. Os agentes podem lidar com várias tarefas de vários canais ao mesmo tempo. Na imagem acima, um agente tem uma chamada recebida, uma mensagem do Facebook e uma mensagem de chat na web. O agente pode aceitar a tarefa ou recusá-la para passá-la para o próximo agente disponível.

# Canais suportados

Esperamos que agora esteja mais claro o que é comunicação omnicanal e como ela aprimora a experiência do usuário e do agente. A última pergunta é: quais canais são suportados prontos para uso?

<center>
<img src="/images/blog/19-seax-omnichannel-communication/6-channel-comparison.png" alt="Comparação de canais suportados entre um call center tradicional, o Twilio Flex básico e o SeaX."/>

*Comparação de canais suportados entre um call center tradicional, o Twilio Flex básico e o SeaX.*
</center>

Como mencionado anteriormente, os call centers tradicionais geralmente suportam apenas chamadas telefônicas. As empresas ainda podem interagir com os clientes por meio de mídias sociais ou e-mail, mas essas mensagens não são integradas em uma plataforma unificada.

O Twilio Flex, por outro lado, estabelece as bases para um excelente centro de contato omnicanal. No entanto, ele tem muito poucos canais prontos para uso. Além de chamadas telefônicas e SMS, eles têm suporte beta para Facebook, WhatsApp e e-mail.

O SeaX é construído sobre o Flex e adiciona suporte integrado para alguns dos canais mais solicitados: como Google Business Messages, Discord, Line e Instagram. Além disso, a Seasalt.ai está sempre trabalhando com os clientes para trazer novos canais para a linha de produtos SeaX. O SeaX é altamente personalizável e facilmente extensível, o que significa que podemos trabalhar com sua empresa para integrar qualquer canal que você mais desejar.

Obrigado por dedicar seu tempo para ler como o centro de contato na nuvem da SeaX aproveita a comunicação omnicanal para fornecer uma experiência perfeita para o cliente e o agente. Fique atento à nossa próxima postagem no blog, que explorará o que significa ser um "centro de contato distribuído". Se você estiver interessado em saber mais agora, preencha nosso [formulário de solicitação de demonstração](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting) para experimentar a plataforma SeaX em primeira mão.`;export{a as default};

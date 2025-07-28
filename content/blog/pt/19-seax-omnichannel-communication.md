---
title: "Traga Clientes de Qualquer Canal para um Único Lugar com a Comunicação Omnicanal SeaX"
metatitle: "Unifique o Contato com o Cliente com a Comunicação Omnicanal SeaX"
date: 2022-07-15T13:56:54-07:00
author: Kim Dodds 
draft: false
image: images/blog/19-seax-omnichannel-communication/0-thumbnail.png
description: "Neste blog, focamos em uma das comunicações omnicanal do SeaX, que permite que mensagens de usuários de qualquer canal sejam exibidas na plataforma SeaX."
weight: 1
tags: ["SeaX"]
canonicalURL: "/blog/seax-omnichannel-communication/"
url: "/blog/seax-omnichannel-communication/"
---

*Em nossa postagem anterior no blog, [Bem-vindo ao SeaX, um Contact Center Colaborativo na Nuvem](https://seasalt.ai/blog/18-seax-collaborative-cloud-contact-center-introduction/), apresentamos nossa solução de contact center de comunicação colaborativa na nuvem, o SeaX. Enquanto nossa primeira postagem no blog forneceu uma visão geral abrangente da funcionalidade básica e dos recursos mais avançados do SeaX, nossas postagens subsequentes aprofundarão alguns dos recursos individuais que fazem o SeaX se destacar. Nesta postagem, examinaremos mais de perto o suporte omnicanal do SeaX e veremos como as chamadas e mensagens de vários canais são exibidas na plataforma SeaX.*

# Sumário
- [O que é comunicação omnicanal?](#what-is-omnichannel-communication)
- [Ciclo de Vida da Mensagem](#message-lifecycle)
    - [Canal](#channel)
    - [Roteamento de Mensagens](#message-routing)
    - [TaskRouter](#taskrouter)
    - [Plataforma SeaX](#seax-platform)
- [Canais Suportados](#supported-channels)

# O que é comunicação omnicanal?

Para começar, o que significa “omnicanal” na verdade? Para simplificar, “omni” é um prefixo que significa “todos”, e “canais” são as várias plataformas através das quais você pode interagir com seus clientes. Então, simplesmente, “comunicação omnicanal” significa a capacidade de se comunicar através de todos e quaisquer canais disponíveis. E mais do que isso, a comunicação omnicanal significa que a experiência entre os canais é perfeita. Do lado do agente, a comunicação de todos os canais é apresentada em uma interface unificada. Para o cliente, seus dados de interação são persistidos em todos os canais.

Um call center tradicional normalmente suporta apenas chamadas telefônicas. Centros de contato mais avançados que se conectam com clientes por meio de vários canais (como e-mail, webchat e telefone) possuem um contact center multicanal. No entanto, o fato de um contact center utilizar vários canais não significa que sua experiência seja perfeita. Em contact centers multicanal, os diferentes canais podem ser acessados por meio de plataformas individuais e/ou os dados do cliente podem não estar vinculados entre os canais. Em contraste, o contact center omnicanal permite que os agentes sigam uma conversa com o cliente onde quer que ela vá, sem ficar presos a um canal ou espalhados por dezenas de plataformas.

<center>
<img src="/images/blog/19-seax-omnichannel-communication/1-contact-center-comparison.png" alt="Comparação de recursos: call center tradicional vs contact center; multicanal vs omnicanal."/>

*Comparação de recursos: call center tradicional vs contact center; multicanal vs omnicanal.*
</center>

O SeaX tem a capacidade de se integrar com praticamente qualquer canal, incluindo por padrão: texto, telefone, webchat, Facebook e muito mais. Todas as mensagens e chamadas são exibidas em uma plataforma unificada, e os dados do usuário de todos os canais estão prontamente disponíveis.

Se você quiser ir direto para uma demonstração, dê uma olhada em nosso pequeno vídeo demonstrando a comunicação omnicanal do SeaX. No restante deste blog, explicaremos como as mensagens e chamadas são roteadas de vários canais para os agentes no SeaX. Também compartilharemos os canais que são suportados de fábrica e discutiremos como o SeaX pode ser estendido para cobrir novos canais.

<iframe width="85%" height="450px" src="https://www.youtube.com/embed/usb-RK7sHlA" title="Reprodutor de vídeo do YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

# Ciclo de Vida da Mensagem

O SeaX é construído sobre o [Twilio Flex](https://www.twilio.com/flex), um contact center baseado em nuvem que utiliza a plataforma de comunicações em nuvem da Twilio. A Twilio fornece os blocos de construção básicos para o SeaX, como infraestrutura de telecomunicações, roteamento de mensagens e tarefas e uma interface de usuário básica do contact center. Agora, vamos rastrear o ciclo de vida de uma mensagem de usuário de entrada e ver como o SeaX usa a arquitetura básica da Twilio combinada com componentes personalizados para rotear a mensagem para o agente ao vivo na plataforma SeaX.

## Canal

<center>
<img src="/images/blog/19-seax-omnichannel-communication/2-example-message.jpg" alt="O usuário envia uma mensagem para uma empresa via Google Business Messages.", style="width:50%"/>

*Enviando uma mensagem para uma empresa via Google Business Messages.*
</center>

A jornada de uma mensagem começa com o usuário escrevendo a mensagem e enviando-a em uma plataforma suportada. O exemplo acima mostra alguém enviando uma mensagem para o chatbot Seasalt.ai no Google Business Messages. O Google Business Messages não é suportado pelo Twilio por padrão, então utilizamos um conector de canal personalizado desenvolvido pela Seasalt.ai para conectar a plataforma Google ao Twilio e ao SeaX.

Uma vez que a mensagem é enviada, ela é entregue pelo conector personalizado à API de mensagens do Twilio. Neste ponto, o Twilio cria um novo contexto de conversa para o usuário e se prepara para rotear a mensagem.

## Roteamento de Mensagens

<center>
<img src="/images/blog/19-seax-omnichannel-communication/3-studio-flow.png" alt="Um Studio Flow simples que roteia mensagens para um chatbot ou um agente ao vivo."/>

*Um Studio Flow simples que roteia mensagens para um chatbot ou um agente ao vivo.*
</center>

Uma vez que a mensagem foi recebida pelo Twilio, ela precisa ser roteada para o local correto. Para este propósito, usamos [Twilio Studio Flows](https://www.twilio.com/studio) para determinar se devemos fornecer uma resposta automatizada, encaminhar a mensagem para um chatbot, conectar o usuário com um agente ao vivo ou realizar alguma outra ação.

No exemplo simples fornecido acima, todas as mensagens de entrada serão encaminhadas para um chatbot, a menos que contenham as palavras "agente ao vivo", caso em que o usuário será transferido para um agente ao vivo na plataforma SeaX.

## TaskRouter

<center>
<img src="/images/blog/19-seax-omnichannel-communication/4-taskrouter.png" alt="Diagrama da arquitetura do TaskRouter."/>

*Diagrama da arquitetura do TaskRouter. [Fonte](https://twilio-cms-prod.s3.amazonaws.com/images/taskrouter-diagram.width-800.png).*
</center>

Uma vez que uma mensagem é transferida para o SeaX, o próximo passo é decidir qual agente a receberá. O [TaskRouter da Twilio](https://www.twilio.com/taskrouter) distribui tarefas como mensagens e chamadas telefônicas para os agentes no SeaX que podem melhor lidar com elas. Cada agente no SeaX pode receber habilidades como quais idiomas eles falam, em qual departamento trabalham, se devem lidar com clientes VIP, etc. O TaskRouter verificará as informações conhecidas sobre o usuário e a mensagem e, em seguida, selecionará o trabalhador mais apropriado para lidar com o problema. O Studio Flow da etapa anterior pode ser personalizado para obter informações adicionais (como idioma preferencial) e as informações do cliente podem ser persistidas em conversas e canais para garantir que sua experiência seja perfeita.

## Plataforma SeaX

<center>
<img src="/images/blog/19-seax-omnichannel-communication/5-seax-incoming-messages.png" alt="Chamadas e mensagens recebidas exibidas na plataforma SeaX.", style="width:50%"/>

*Chamadas e mensagens recebidas exibidas na plataforma SeaX.*
</center>

Finalmente, a mensagem de entrada será exibida para o agente apropriado na plataforma SeaX. Os agentes podem lidar com várias tarefas de vários canais simultaneamente. Na imagem acima, um agente tem uma chamada de entrada, mensagem do Facebook e mensagem de webchat. O agente pode aceitar a tarefa ou recusá-la para que seja passada para o próximo agente disponível.

# Canais Suportados

Esperamos que agora esteja mais claro o que é a comunicação omnicanal e como ela aprimora a experiência do usuário e do agente. A pergunta final é: quais canais são realmente suportados de fábrica?

<center>
<img src="/images/blog/19-seax-omnichannel-communication/6-channel-comparison.png" alt="Comparação de canais suportados entre call center tradicional, Twilio Flex básico e SeaX."/>

*Comparação de canais suportados entre call center tradicional, Twilio Flex básico e SeaX.*
</center>

Como mencionado anteriormente, um call center tradicional normalmente suporta apenas chamadas telefônicas. As empresas ainda podem interagir com os clientes nas mídias sociais ou por e-mail, mas essas mensagens não são integradas em uma plataforma unificada.

O Twilio Flex, por outro lado, estabelece as bases para um fantástico contact center omnicanal. No entanto, ele tem poucos canais disponíveis de fábrica. Além de chamadas telefônicas e texto, eles também têm suporte beta para Facebook, WhatsApp e e-mail.

O SeaX se baseia no Flex para adicionar suporte integrado para alguns dos canais mais solicitados: como Google Business Messages, Discord, Line e Instagram. Além disso, a Seasalt.ai está sempre trabalhando com os clientes para trazer novos canais para a linha SeaX. O SeaX é altamente personalizável e facilmente extensível – o que significa que podemos trabalhar com sua empresa para integrar quaisquer canais que você mais desejar.

Obrigado por dedicar seu tempo para ler sobre como o contact center em nuvem SeaX utiliza a comunicação omnicanal para fornecer uma experiência perfeita ao cliente e ao agente. Fique atento à nossa próxima postagem no blog, que explorará o que significa ser um "contact center distribuído". Se você estiver interessado em saber mais imediatamente, preencha nosso [formulário de agendamento de demonstração](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting) para ter uma primeira visão da plataforma SeaX.

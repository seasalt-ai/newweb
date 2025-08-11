const a=`---
title: "SeaX Bulk SMS: Para um alcance mais rápido e eficaz ao cliente"
metatitle: "SeaX Bulk SMS: Para um alcance mais rápido e eficaz ao clien..."
date: 2022-09-09 11:05:22-07:00
modified_date: 2025-07-28T16:03:25.123456
draft: false
author: Amy Chen, Kim Dodds, Sarah Reid
description: "Neste blog, mostraremos como o recurso de SMS em massa do SeaX permite que os agentes enviem mensagens de saída de forma proativa por texto."
weight: 1
tags:
  - SeaX
image: images/blog/24-seax-bulk-sms/thumbnail.png
canonicalURL: /blog/seax-bulk-sms/
url: /blog/seax-bulk-sms/
---


*Em nossas postagens de blog anteriores, percorremos alguns dos principais recursos do SeaX (incluindo [Inteligência de Voz](https://seasalt.ai/blog/21-seax-voice-intelligence/), [Base de Conhecimento](https://seasalt.ai/blog/22-seax-knowledge-base/) e [Gerenciamento de Casos](https://seasalt.ai/blog/23-seax-case-management/)) que ajudam os agentes a lidar melhor com as chamadas e mensagens recebidas. Neste blog, mostraremos como o recurso de SMS em massa do SeaX permite que os agentes enviem mensagens de saída de forma proativa por texto, que os destinatários comprovadamente abrem mais cedo e de forma mais consistente do que as comunicações por e-mail tradicionais.*

# Tabela de Conteúdos
- [SMS vs Email](#sms-vs-email)
- [Padrões 10DLC](#10dlc-standards)
- [SeaX Bulk SMS](#seax-bulk-sms)
    - [Upload de Contatos](#contact-upload)
    - [Composição da Mensagem](#message-composition)
    - [Estimativa de Custo](#cost-estimate)
    - [Pré-visualização de Mensagem em Massa](#bulk-message-preview)
    - [Monitoramento do Progresso da Campanha](#campaign-progress-monitoring)
    - [Chat de Mensagens Recebidas](#incoming-message-chat)
- [Encerramento](#closing)

# SMS vs Email

O e-mail tende a ser o modo de comunicação padrão para a maioria das operações de negócios. Até um pouco recentemente, as mensagens de texto (SMS) não eram um canal de comunicação amplamente utilizado para mensagens de negócios em massa, apesar de sua popularidade para a comunicação interpessoal do dia-a-dia. No entanto, nos últimos anos, provedores de comunicação em nuvem como a Twilio tornaram o canal de SMS muito mais acessível para as empresas, lidando com os detalhes da infraestrutura de telecomunicações e provedores de serviços no backend e fornecendo uma API de SMS simples como um serviço para os clientes. Embora o e-mail possa continuar sendo o canal mais popular para negócios, o SMS pode fornecer um complemento exclusivo às comunicações por e-mail tradicionais.

<center>
<img src="/images/blog/24-seax-bulk-sms/1-pros-cons.png" alt="Alguns dos prós e contras do SMS para comunicações de negócios."/>

*Alguns dos prós e contras do SMS para comunicações de negócios.*
</center>

Mas por que usar SMS se o e-mail provou ser bem-sucedido? Se tomarmos as campanhas de marketing como exemplo, a resposta curta é: enquanto a taxa de abertura de uma campanha de e-mail é de apenas 20%, a taxa média de abertura de SMS pode chegar a *98%* - sem mencionar que as mensagens de texto tendem a obter mais respostas. Além disso, as mensagens de texto são normalmente abertas em 90 segundos após o recebimento, enquanto os e-mails tendem a ser abertos em torno da marca de 90 minutos. Por último, mas não menos importante, o SMS tem uma taxa média de cliques de cerca de 19%, significativamente maior que 3,2% para e-mails ([fonte](https://manychat.com/blog/sms-vs-email-marketing-2021/)).

Em geral, as mensagens de texto são abertas mais rapidamente e com mais frequência do que os e-mails - talvez porque os textos sejam sempre entregues diretamente ao destinatário onde quer que estejam, tenham ou não wi-fi. Também porque o SMS é normalmente usado para mensagens pessoais e com menos frequência para comunicações de negócios, os destinatários podem ver os textos como sendo mais importantes ou substanciais do que os e-mails.

Então, por que nem todo mundo está usando SMS?? Bem, é claro que existem prós e contras. Naturalmente, o SMS é significativamente mais caro do que o e-mail porque depende da infraestrutura de telecomunicações e dos provedores de serviços (como Verizon, AT&T, etc.) para entregar as mensagens. Além disso, as mensagens de texto têm um limite rígido de cerca de 900 caracteres e um único anexo (que custa mais, é claro). Portanto, no geral, embora o SMS possa ser um método de comunicação significativamente mais eficaz, a desvantagem é que as empresas devem ser mais seletivas quanto ao conteúdo que enviam para garantir que sejam econômicas.

Dito isso, não há razão para que o SMS e o e-mail não devam ser usados ​​juntos! Cada canal tem seus próprios prós e contras, para que uma empresa possa garantir que está enviando as comunicações mais eficazes, aproveitando os pontos fortes de cada canal.

# Padrões 10DLC

Para mensagens SMS A2P (aplicativo para pessoa) de alto volume, as operadoras dos EUA utilizam códigos longos padronizados de 10 dígitos, ou 10DLC. Antes de iniciar uma campanha de SMS em massa, recomendamos que você leia mais sobre o 10DLC e suas aplicações [aqui](https://support.twilio.com/hc/en-us/articles/1260800720410-What-is-A2P-10DLC-).

# SeaX Bulk SMS

O serviço de SMS em massa do SeaX permite que você carregue facilmente seus contatos/leads, envie SMS (também suportamos MMS - Mensagens Multimídia) em massa e gerencie as respostas recebidas. Continue lendo para ver os poucos passos simples para iniciar sua primeira campanha de SMS em massa.

## Upload de Contatos

<center>
<img src="/images/blog/24-seax-bulk-sms/2-contact-upload.png" alt="Carregando uma lista de contatos para o SeaX Bulk SMS."/>

*Carregando uma lista de contatos para o SeaX Bulk SMS.*
</center>

O primeiro passo é carregar contatos e leads. Primeiro, organize os contatos para sua campanha de SMS em um arquivo csv. Além dos campos obrigatórios, \`phone_number\` e \`name\`, você pode adicionar outros campos e usá-los no corpo da mensagem. Por exemplo, você pode alterar dinamicamente o corpo da mensagem para incluir o nome do destinatário com base no campo \`name\` de cada contato.

Em seguida, basta abrir o serviço de SMS em massa no SeaX e pressionar “Importar” para carregar seus contatos. Salvamos todos os seus contatos anteriores na lista de destinatários para que você possa lançar facilmente campanhas de acompanhamento.

## Composição da Mensagem

<center>
<img src="/images/blog/24-seax-bulk-sms/3-message-draft.png" alt="Compondo uma nova mensagem SMS com o SeaX Bulk SMS."/>

*Compondo uma nova mensagem SMS.*
</center>

O próximo passo é dar um nome à sua campanha e compor a mensagem. O SMS em massa permite que você acesse todas as informações de contato armazenadas em seu arquivo csv/excel. Por exemplo, se você tiver um campo chamado \`name\` na lista de contatos, poderá digitar \`{name}\` na mensagem e a mensagem renderizará automaticamente o nome de cada contato no corpo da mensagem.

## Estimativa de Custo

<center>
<img src="/images/blog/24-seax-bulk-sms/4-cost-estimate.png" alt="Selecionando os números de telefone de envio e obtendo uma estimativa de custo da campanha com o SeaX Bulk SMS."/>

*Selecionando os números de telefone de envio e obtendo uma estimativa de custo da campanha.*
</center>

Em seguida, escolha o número de telefone que você gostaria de usar para enviar as mensagens de saída. Se você ainda não tiver um número de telefone, pode clicar em “Cotação para um novo número” no canto superior direito para enviar uma solicitação de compra. Nossa equipe pode ajudá-lo a comprar novos números 10DLC.

Você também pode visualizar o preço unitário estimado para a campanha. Esteja ciente de que tanto o envio quanto o recebimento de SMS/MMS custam dinheiro, portanto, certifique-se de orçar adequadamente.

## Pré-visualização de Mensagem em Massa

<center>
<img src="/images/blog/24-seax-bulk-sms/5-preview.png" alt="Pré-visualizando uma campanha de SMS em massa antes de enviar com o SeaX."/>

*Pré-visualizando uma campanha de SMS em massa antes de enviar.*
</center>

Você pode visualizar as mensagens em massa antes de enviar. É vital confirmar o corpo da mensagem, o número de telefone dos destinatários e o número de telefone do remetente. Depois de lançar a campanha, não será possível retrair as mensagens. Nesta página, você pode visualizar as 3 primeiras mensagens de sua campanha, que correspondem aos 3 primeiros contatos de sua lista.

## Monitoramento do Progresso da Campanha

<center>
<img src="/images/blog/24-seax-bulk-sms/6-monitor.png" alt="Monitorando o progresso de uma campanha de SMS em massa com o SeaX."/>

*Monitorando o progresso de uma campanha de SMS em massa.*
</center>

Finalmente, você pode sentar e monitorar o progresso da campanha no painel de SMS em massa. A página é atualizada automaticamente e atualiza o status da campanha. Você pode visualizar os status de entrega da mensagem, taxa de sucesso/entrega, custos estimados, bem como a taxa de resposta nesta página.

## Chat de Mensagens Recebidas

<center>
<img src="/images/blog/24-seax-bulk-sms/7-chat.png" alt="Lidando com respostas recebidas de uma campanha de SMS em massa com o SeaX."/>

*Lidando com respostas recebidas de uma campanha de SMS em massa.*
</center>

Assim como todos os recursos do SeaX, nos esforçamos para capacitar agentes ou gerentes de campanha a lidar com solicitações/problemas recebidos - o SMS em massa permite que o SeaX lide também com os esforços de marketing de saída. Depois de lançar a campanha, você pode gerenciar todas as respostas recebidas na janela de bate-papo mostrada abaixo.

# Encerramento

Obrigado por dedicar seu tempo para ler sobre como o Sistema de SMS em Massa do SeaX capacita os agentes a enviar comunicações de saída, além de lidar com as solicitações de mensagens recebidas. Fique atento ao próximo segmento de nossa série de blogs, que abordará algumas das ferramentas de gerenciamento e análise integradas à plataforma SeaX. Se você estiver interessado em saber mais imediatamente, preencha nosso [formulário Agendar uma demonstração](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting) para ter uma visão em primeira mão da plataforma SeaX.
`;export{a as default};

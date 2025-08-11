const e=`---
title: "A Maneira Correta de Enviar SMS em Lote para Contatos no Excel, Google Sheets e Apple Numbers"
metatitle: "Envio de SMS em Lote | Excel, Google Sheets, Apple Numbers"
date: 2023-10-01 10:25:00-08:00
draft: false
author: Xuchen Yao
description: "Aprenda as maneiras mais seguras de enviar SMS em lote do Excel, Google Sheets e Apple Numbers, mantendo a conformidade com o 10DLC."
weight: 1
tags:
  - SeaX
  - Tutorial
image: images/blog/35-how-to-send-bulk-sms-spreadsheet/35-how-to-send-bulk-sms-spreadsheet.jpg
canonicalURL: /blog/how-to-send-bulk-sms-spreadsheet/
url: /blog/how-to-send-bulk-sms-spreadsheet/
---

O envio de SMS em massa para uma lista de contatos tem sido uma técnica amplamente utilizada por empresas, organizadores de eventos e vários profissionais. A capacidade de enviar uma mensagem em massa pode economizar tempo e ajudar a manter os contatos informados. Embora o Excel, Google Sheets e Apple Numbers não sejam inerentemente construídos para enviar SMS, extensões e serviços de terceiros surgiram para tornar isso possível. No entanto, existem armadilhas a serem observadas.

# Esteja em Conformidade: Registro 10DLC

O mundo do SMS em massa não é tão simples como antes, especialmente com o aumento de regulamentações destinadas a combater spam e mensagens não solicitadas. Se você só quer fazer isso uma vez e não se preocupa em enfrentar consequências regulatórias, vá em frente e use os tutoriais que você encontrou online que ensinam como enviar mensagens SMS em massa usando um plugin. No entanto, se você pretende administrar um negócio sustentável e campanhas de marketing, deve primeiro se familiarizar com as regras que cercam o marketing por SMS.

Central para essas regulamentações é o sistema 10DLC.

10DLC significa Código Longo de 10 Dígitos, e é o novo padrão para mensagens SMS A2P (Application-to-Person) nos EUA. Aqui está o que você precisa saber:

- **Propósito**: Devido ao aumento de spam e mensagens não solicitadas, as operadoras introduziram regulamentações rígidas sobre o uso de 10DLC para mensagens em massa.
- **Conformidade Empresarial**: As empresas que desejam enviar mensagens SMS em massa devem registrar seu 10DLC e obter sua aprovação. Isso garante que elas sigam as regulamentações das operadoras.
- **Riscos da Não Conformidade**: Enviar SMS sem registrar corretamente ou usar um 10DLC aprovado pode levar a banimentos ou outras consequências.

Aqui está um [artigo](https://support.twilio.com/hc/en-us/articles/1260800720410-What-is-A2P-10DLC-) que mostra como se registrar para uma campanha 10DLC. A Seasalt.ai ajudou muitos clientes do [SeaX Messaging](https://seax.seasalt.ai/?utm_source=blog) a se tornarem compatíveis com o 10DLC. Se você tiver alguma dúvida, sinta-se à vontade para entrar em contato conosco.

# Prepare Seus Contatos em Planilhas

Agora que você configurou sua campanha 10DLC, pode começar a enviar mensagens em massa para seus clientes sem se preocupar em ser banido.

Vamos começar com um cenário simples: você tem uma lista de contatos salva em uma planilha e deseja enviar a todos eles um SMS para um evento próximo. A planilha pode estar em vários formatos. Os formatos mais comuns são Excel, Google Sheets e Apple Numbers. Você precisará limpar os números de telefone em sua planilha primeiro.

Vamos usar o Planilhas Google como exemplo. Os passos para outros formatos de planilha serão muito semelhantes. Aqui está um guia passo a passo sobre como fazer isso.

## 1. Faça um Backup dos seus dados

Fazer uma cópia de seus contatos garante que você não perca nenhum dado de contato se cometer um erro. Veja como: **Clique em \`Arquivo\` > \`Fazer uma cópia\`**.

<center>
<img src="/images/blog/35-how-to-send-bulk-sms-spreadsheet/1-make-a-copy-for-bulk-sms-contact-spreadsheet.png" alt="Faça uma cópia de backup da sua planilha de contatos para SMS em massa"/>

_Faça uma cópia de backup da sua planilha de contatos para SMS em massa_

</center>

## 2. Remoção de Dados Duplicados

a. Destaque todo o conjunto de dados.

b. Clique em \`Dados\` > \`Limpeza de dados\` > \`Remover duplicatas\`.

c. Selecione as colunas que você deseja verificar para duplicatas e clique em \`Remover duplicatas\`.

d. O Planilhas Google irá notificá-lo sobre quantas duplicatas foram removidas.

<center>
<img src="/images/blog/35-how-to-send-bulk-sms-spreadsheet/2-remove-duplicates-for-bulk-sms-contact-spreadsheet.png" alt="Remova registros duplicados da sua planilha de contatos para SMS em massa"/>

_Remova registros duplicados da sua planilha de contatos para SMS em massa_

</center>

## 3. Padronize o Formato do Número de Telefone

a. Decida sobre um formato consistente. Verifique o formato do número de telefone exigido pelo serviço que você está usando. Por exemplo, o SeaX Messaging aceita uma variedade de formatos de telefone, como 5551234567 ou 555-123-4567 ou +15551234567.

b. Use \`Localizar e Substituir\` para tornar a formatação consistente. Por exemplo, substitua todos os pontos por hífens.

c. Use fórmulas personalizadas ou scripts, se necessário, para garantir que todos os números sejam consistentes. Isso pode exigir habilidades mais avançadas em planilhas.

<center>
<img src="/images/blog/35-how-to-send-bulk-sms-spreadsheet/
3-clean-numbers-for-bulk-sms-contact-spreadsheet.png" alt="Padronize o formato do número de telefone para sua planilha de contatos de SMS em massa"/>

_Padronize o formato do número de telefone para sua planilha de contatos de SMS em massa_

</center>

### 4. Valide as Entradas de Dados

a. Para números de telefone, garanta que todos tenham o número correto de dígitos. Filtre ou ordene os dados para identificar anomalias.

b. Para nomes, procure por entradas que possam estar em branco ou preenchidas com dados irrelevantes.

<center>
<img height="500" src="/images/blog/35-how-to-send-bulk-sms-spreadsheet/
4-validate-format-for-bulk-sms-contact-spreadsheet.jpeg" alt="Valide as entradas de dados para sua planilha de contatos de SMS em massa"/>

_Valide as entradas de dados para sua planilha de contatos de SMS em massa_

</center>

## 5. Verifique Células em Branco

Este passo é opcional. No SeaX Messaging, pulamos automaticamente uma linha se as células estiverem vazias. No entanto, nem todos os provedores ou ferramentas gostarão de células em branco. Recomendamos fortemente que você realize este passo de limpeza de dados, mas é opcional para o SeaX Messaging.

### Veja como:

a. Destaque seu intervalo de dados.

b. Clique em \`Formatar\` > \`Formatação condicional\`.

c. Defina a formatação de células se para \`A célula está vazia\` e escolha uma cor de destaque.

d. Isso permitirá que você localize e trate facilmente as células em branco.

<center>
<img height="500" src="/images/blog/35-how-to-send-bulk-sms-spreadsheet/
5-clean-blank-cells-for-bulk-sms-contact-spreadsheet.png" alt="Verifique células em branco na sua planilha de contatos para SMS em massa"/>

_Verifique células em branco na sua planilha de contatos para SMS em massa_

</center>

## Mais sobre a Preparação de Dados de Contato

Lembre-se, a limpeza de dados é um processo iterativo. Dependendo do tamanho e da qualidade do seu conjunto de dados, você pode precisar revisitar e repetir esses passos várias vezes. Sempre certifique-se de verificar seu trabalho para garantir a precisão.

## Comece a Enviar SMS!

Embora o Excel ou o Planilhas Google não suportem nativamente o envio de SMS, existem várias extensões e complementos de terceiros que podem preencher essa lacuna. Algumas escolhas populares incluem:

- ClickSend: Oferece gateways de SMS e se integra bem com programas de planilha.
- Zapier: Uma ferramenta de integração que pode conectar o Planilhas Google a serviços de SMS.

No entanto, se você leva a sério o Marketing por SMS ou mesmo o marketing omni-channel usando várias plataformas de mensagens como WhatsApp e Facebook Messenger, recomendamos o uso de uma plataforma de mensagens SMS dedicada. Essas plataformas permitem organizar contatos, comunicar-se diretamente por meio de chats e chamadas, acompanhar o desempenho e cultivar relacionamentos de longo prazo com os clientes. Serviços de SMS respeitáveis mantêm um melhor relacionamento com as operadoras, garantindo uma entrega de mensagens mais confiável. Eles também oferecem suporte ao cliente para registro e educação sobre 10DLC para garantir que você permaneça em conformidade.

Alguns provedores de serviços de mensagens SMS populares são:

- SeaX Messaging
- Simple Texting
- Textedly

# Como Realizar Operações de Marketing por Texto Bem-Sucedidas

<center>
<img height="500" src="/images/blog/35-how-to-send-bulk-sms-spreadsheet/
6-successful-camapign-bulk-sms-contact-spreadsheet.jpeg" alt="Sucesso no marketing por texto"/>

</center>

Mesmo com as melhores intenções, problemas podem surgir. Aqui estão algumas maneiras de realizar operações de marketing por texto bem-sucedidas a longo prazo:

- **Mantenha-se Informado**: Revise regularmente os requisitos do 10DLC e garanta a conformidade contínua.
- **Garanta a Qualidade da Mensagem**: Evite conteúdo semelhante a spam, inclua opções obrigatórias de cancelamento de inscrição e cumpra todas as regras regionais e das operadoras.
- **Escolha Serviços de SMS de Reputação**: Serviços de SMS de terceiros têm um conhecimento melhor sobre as regras de conformidade do 10DLC e também podem ter um melhor relacionamento com as operadoras, garantindo uma entrega de mensagens mais confiável.

# Conclusão

Enviar SMS em lote para contatos em ferramentas de planilha como Excel, Google Sheets e Apple Numbers pode ser um método de comunicação altamente eficiente. Mas com a introdução de regulamentações como o 10DLC, é essencial abordar esta tarefa com cautela e a devida diligência. Ao entender primeiro o 10DLC, você pode navegar no mundo do SMS em massa com mais confiança e eficácia.

## Entre em contato

Se você estiver interessado em saber mais sobre o 10DLC ou sobre suas opções para marketing por SMS, [agende uma demonstração](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting) conosco. Estamos sempre felizes em conversar!`;export{e as default};

const e=`---
title: "Atendimento ao Cliente na United Airlines: o Bom, o Mau e o Feio"
metatitle: "Análise do Atendimento ao Cliente na United Airlines"
date: 2023-03-21 11:25:00-08:00
modified_date: 2025-07-28T16:56:53Z
draft: false
author: Xuchen Yao
description: "Xuchen Yao compartilha sua experiência recente com o atendimento ao cliente da United Airlines durante atrasos e cancelamentos de voos e propõe soluções para lidar com o desafio de escalar dinamicamente o suporte ao cliente durante o tráfego intenso."
weight: 1
tags:
  - SeaX
image: images/blog/31-cx-at-united-airlines/flight-delay-illustration.png
canonicalURL: /blog/customer-service-at-united-airlines/
url: /blog/customer-service-at-united-airlines/
---

*O CEO da [Seasalt.ai](https://seasalt.ai), Xuchen Yao, compartilha sua experiência recente com o atendimento ao cliente da United Airlines após enfrentar atrasos e cancelamentos de voos. Isso o levou a perceber os desafios enfrentados pelo suporte ao cliente de companhias aéreas para escalar dinamicamente e lidar com o tráfego intenso durante tais situações. Xuchen fala sobre possíveis melhorias, como desviar o tráfego de autoatendimento de agentes humanos, melhorar a eficiência dos agentes humanos e desenvolver tecnologia para identificar e reduzir proativamente os riscos de problemas potenciais.*

Este blog foi escrito no voo UA2 de Singapura para São Francisco em 22/03/2023.

Recentemente, tive o prazer de pegar o voo UA1 de São Francisco (SFO) para Singapura (SIN). O prazer rapidamente se tornou um infortúnio devido ao cancelamento do voo. Aqui está o que aprendi sobre o atendimento ao cliente da United pelos olhos de um tecnólogo que constrói centrais de atendimento.



# Um voo de dois atrasos: atrasado e cancelado

Este era o plano para a viagem a Singapura saindo de Seattle na terça-feira, 14/03/2023:

<center>
<img src="/images/blog/31-cx-at-united-airlines/united-flights.png" alt="Meus voos planejados da United"/>

*7:29 AM – 09:42 AM, de Seattle (SEA) para São Francisco (SFO) no UA2368. 11:50 AM – 08:15 PM, de São Francisco (SFO) para Singapura (SIN) no UA29.*
</center>

Infelizmente, não peguei nenhum dos voos.

O primeiro voo atrasou 1,5 horas devido a um engarrafamento no aeroporto de Seattle (às 7h da manhã!). Isso reduziu meu tempo de transição para 0 no SFO. Conversei com o serviço de campo em SEA e eles me colocaram em um voo da Alaska Airlines de SEA para SFO. Esse voo da Alaska Airlines também atrasou, mas ainda chegou ao SFO às 11h, dando-me tempo suficiente para pegar o próximo voo.

**O BOM**: A United me permitiu mudar meu voo para a Alaska Airlines gratuitamente.

**O BOM**: A United foi muito proativa em relação aos atrasos por meio de um código curto “26266”. Quando o atraso aconteceu, ela até ofereceu opções para remarcar meus voos.

**O RUIM**: A opção de remarcação de voo é limitada apenas aos voos da United. Não há remarcação entre companhias aéreas. Tive que falar com um humano para ser colocado em um voo diferente.

**O FEIO**: Por que o Aeroporto de SEA estava tão congestionado às 7h da manhã?!

<center>
<table>
  <tr>
    <td><img src="/images/blog/31-cx-at-united-airlines/united-text-support-1.jpg" alt="Suporte por mensagem de texto da United - 1"/></td>
    <td><img src="/images/blog/31-cx-at-united-airlines/united-text-support-2.jpg" alt="Suporte por mensagem de texto da United - 2"/></td>
  </tr>
 </table>

*O sistema de mensagens de código curto da United Airlines é oportuno e proativo.*
</center>


1. O que foi interessante foi **no** UA1. Ficamos em terra por 3 horas e, eventualmente, o voo foi cancelado devido aos seguintes eventos:
2. Primeiro, São Francisco teve ventos muito fortes que todos os voos foram suspensos.
Então, quando foi liberado para voar, todos os aviões estavam esperando em uma fila muito longa para decolar.
3. Finalmente, quando estava quase na nossa vez, os pilotos disseram que estavam trabalhando horas extras e, de acordo com os regulamentos da FAA, era ilegal para eles continuarem a voar. Como o voo para Singapura era de 17 horas e, dado o tempo que passaram em terra, eles teriam excedido o limite ao chegar a Singapura.

Infelizmente, não havia pilotos substitutos, então o voo inteiro foi cancelado.

**O FEIO**: Durante as 3 horas em terra, a United ofereceu 2 biscoitos. Só isso.

Todos saíram correndo do avião, pensando em como isso afetava sua viagem. Como era um voo internacional, teríamos chegado a Singapura em um dia diferente. Não no dia seguinte, mas na verdade dois dias depois: porque Singapura está 15 horas à frente e o voo dura 17 horas.

Então, cerca de 300 passageiros correram para o atendimento ao cliente em terra da United. Quando cheguei ao Atendimento ao Cliente da United, já havia cerca de 200 pessoas na fila à minha frente. Muitos deles foram afetados devido ao clima de outros voos operados pela United.

Falar com um agente em terra seria inútil, dada a lentidão da fila. Sei que há outro voo às 23h para Singapura no mesmo dia, também da United. Minha esperança é ser remarcado para esse voo das 23h. Provavelmente muitas pessoas do meu voo queriam fazer o mesmo, mas todos ficaram na fila como eu.

Foi o que eu fiz:

1. Liguei para a United por telefone: 800-864-8331
2. Enviei uma mensagem de texto para o agente virtual da United via código curto: 32050.
3. Usei o site da United para tentar conversar por vídeo com o agente.
4. Eu também estava na fila para um agente em terra.

Eu era literalmente um cliente **multicanal** quando precisava resolver um problema importante e emergente imediatamente.


**O BOM**: A United ofereceu 4 maneiras diferentes de se conectar com seu atendimento ao cliente.

**O BOM**: Ao confirmar o número do voo, a United conseguiu verificar seu status e soube que estava afetado, e ofereceu opções de remarcação/cancelamento.

**O RUIM**: A estimativa do tempo de espera telefônica estava muito errada. Disseram-me que o tempo de espera era de 2 minutos, mas esperei 45 minutos para falar com um agente.

**O RUIM**: O chatbot é muito burro. Tive que seguir seus “menus” pressionando 1/2/3/4 ou A/B/C/D/E como respostas.

<center>
<table>
  <tr>
    <td><img src="/images/blog/31-cx-at-united-airlines/united-text-support-3.jpg" alt="Suporte por mensagem de texto da United - 3"/></td>
    <td><img src="/images/blog/31-cx-at-united-airlines/united-text-support-4.jpg" alt="Suporte por mensagem de texto da United - 4"/></td>
    <td><img src="/images/blog/31-cx-at-united-airlines/united-text-support-5.jpg" alt="Suporte por mensagem de texto da United - 5"/></td>
  </tr>
 </table>

*O chatbot da United Airlines usa tecnologia de última geração que oferece um cartão de menu para limitar a entrada de passageiros.*
</center>


**O FEIO**: Havia literalmente menos de 10 agentes de atendimento ao cliente em terra para lidar com mais de 1000 passageiros afetados. Isso gerou ansiedade, raiva, desamparo e pressão tanto nos clientes quanto nos agentes. Isso ocorre porque, quando nosso voo foi cancelado, o serviço de terra e os comissários de bordo disseram a todos para falarem com o atendimento ao cliente em terra. **Instruir cada passageiro afetado a falar com os menos de 10 agentes de atendimento ao cliente em terra criou um ataque físico de “DDOS” ao atendimento ao cliente em terra da United.**

DDOS significa “Distributed Denial of Service” (Negação de Serviço Distribuída) quando hackers direcionam o tráfego de milhões de lugares para um único site para torná-lo inacessível a quaisquer serviços.

**O FEIO**: Usei 4 canais para falar com a United (texto, chat de vídeo, chamada telefônica, em terra). Usei 4 vezes mais recursos e todos os outros poderiam ter feito o mesmo. Isso aumentou artificialmente um pico de 4X de tráfego e pressão para o atendimento ao cliente da United. Suponho que todos os outros passageiros fizeram o mesmo porque isso explica por que meu “tempo de espera de 2 minutos” acabou se tornando 45 minutos.

Eventualmente, consegui me conectar por telefone e o agente levou cerca de 20 minutos para me remarcar para um voo posterior às 23h para Singapura no mesmo dia. Quando terminei, ainda estava na fila do chat de vídeo, lidando com o chatbot (ironicamente chamado liveperson) e, obviamente, fisicamente na fila.

Eu disse a um jovem que estava atrás de mim no mesmo voo para ligar para a United. Ele disse: “De jeito nenhum, isso vai demorar uma eternidade!”. Mas eu disse: “Acabei de remarcar por telefone. Olhe, há 200 pessoas na nossa frente, quanto tempo você acha que vai esperar na fila?”

Mais tarde, às 23h, encontrei o jovem no meu voo remarcado. Ele ficou tão feliz em me ver e não conseguia me agradecer o suficiente pela “dica do telefone”. Ele usava uma camiseta “tiktok” e fones de ouvido de alta qualidade, então pensei que ele poderia ser um conhecedor de tecnologia ou pelo menos bom com computadores.

**O FEIO**: A percepção de um cliente “conhecedor de tecnologia” era que as chamadas telefônicas não resolveriam nada para ele, ele preferiria esperar fisicamente na fila para falar com uma pessoa real, embora pudesse ver claramente o tamanho da fila. **Isso reflete o quão mal o público em geral pensa sobre a inutilidade do suporte telefônico.**

# Suporte ao Cliente de Companhias Aéreas: o Principal Problema é a Escalabilidade Dinâmica

Com a experiência de ter um voo atrasado e um cancelado no mesmo dia, e conversar com os serviços de atendimento ao cliente por 4 canais diferentes em duas ocasiões, e um profundo entendimento de como as centrais de atendimento são construídas – acredito que o principal problema do Suporte ao Cliente de Companhias Aéreas é este:

**O Suporte ao Cliente de Companhias Aéreas não pode escalar-se dinamicamente. Ou, para usar termos de computação em nuvem: o Suporte ao Cliente de Companhias Aéreas não é elástico.**

Isso não aconteceu apenas com a United. Tive experiências semelhantes com a Air Canada durante a Covid-19: cada chamada telefônica levava mais de 2 horas de espera.

Nem mesmo acho que um chatbot inútil ou um agente humano sem empatia seja o principal problema. O suporte ao cliente tem um padrão único: **geralmente, quando um voo é afetado, entre dezenas e centenas de passageiros tentam entrar em contato ao mesmo tempo, às vezes com um multiplicador de 4 por meio de canais cruzados.**

Esse tipo de aumento de tráfego não é bem gerenciado pelos centros de contato modernos das companhias aéreas. O que piora é que todos esses problemas são “código vermelho”: precisam ser resolvidos _imediatamente_. Desculpe, não há suporte por e-mail assíncrono baseado em Zendesk. _Preciso falar com um agente agora mesmo_.

# Suporte ao Cliente de Companhias Aéreas: Humanos Não Escalam

Pensemos em como um site de e-commerce se prepara durante o tráfego de pico, como a Black Friday:
1. **Prever** que tipo de tráfego receberá em que momento.
2. **Pré-alocar** recursos de servidor suficientes, entrando em contato com provedores de nuvem ou aumentando o limite de seus clusters de servidores.
3. **Gerar dinamicamente** mais servidores quando o tráfego aumenta.

O suporte ao cliente de companhias aéreas pode fazer o mesmo?
1. **Prever**: existem modelos que poderíamos usar para prever quando um voo é afetado, mas não sei se eles os usam. Por exemplo, pode-se levar em consideração os seguintes fatores:
    * Tráfego ao redor do aeroporto – facilmente obtido do Google Maps
    * Congestionamento no aeroporto – alguns aeroportos têm atualizações em tempo real
    * Clima local
    * Padrões de viagem usuais, como feriados
    * Eventos locais que criam um grande fluxo de entrada e saída de passageiros, como a CES em Las Vegas
    * Outros sinais, como condições da aeronave
    * Status do histórico
2. **Pré-alocar**: Acredito que é isso que toda companhia aérea está fazendo ou deveria fazer durante as temporadas de férias, contratando mais agentes. Certamente espero que o façam. Sei que a TurboTax contrata mais pessoas perto dos prazos de declaração de imposto.
3. **Gerar dinamicamente**: este é o caso mais difícil. Simplesmente não há uma maneira fácil de fazer isso com humanos, especialmente com agentes treinados e experientes.

# Suporte ao Cliente de Companhias Aéreas: Como Escalar

Nosso principal objetivo é lidar com o aumento do tráfego quando os passageiros precisam resolver seus problemas no local, sem demora.
1. Canais de autoatendimento digital não parecem ser capazes de substituir totalmente os agentes humanos pelos dois motivos a seguir:
Canais de autoatendimento digital são limitados e não oferecem acesso suficiente ao back-office como um agente humano tem.
2. Os passageiros psicologicamente querem falar com um humano porque, tradicionalmente, as soluções automatizadas não ajudavam, especialmente os infames chatbots.

A solução não é tão simples porque os humanos são difíceis de escalar. Mas também havia maneiras de resolver isso:
1. Muitos problemas ainda podem ser resolvidos por canais de autoatendimento. Precisamos identificá-los e desviar o tráfego de autoatendimento dos agentes humanos.
    * Por exemplo, quando meu voo foi cancelado – tudo o que eu queria era remarcar os voos. Mas a United não me ofereceu essa opção e eu tive que ligar. No entanto, quando meu voo atrasou, a United me ofereceu proativamente a opção de remarcar. As soluções para ambos os problemas são as mesmas – não preciso falar com um agente quando meu voo é cancelado mais do que quando meu voo está atrasado. Por que não posso me autoatender?
2. Agentes humanos podem ser mais eficientes quando estão no chat ou na chamada.
    * O agente de atendimento ao cliente levou cerca de 30 minutos para me remarcar, com cerca de 15 minutos me deixando em espera enquanto ela trabalhava em algo.
    * Os 15 minutos restantes em que ela estava falando comigo: metade do tempo ela estava coletando informações.
    * Sinto que, com a otimização, os 30 minutos podem ser reduzidos para 5-10 minutos se a coleta de informações e a automação forem feitas corretamente.

Se eu fosse construir um sistema de central de atendimento para a United, faria o seguinte:
1. Oferecer chat e chamadas telefônicas como os principais canais de atendimento ao cliente. Não redirecione um avião inteiro de passageiros para os serviços de atendimento ao cliente em terra (todos nós já vimos como os locais de aluguel de carros ficam lotados depois que um grande avião acaba de pousar em um destino turístico).
2. Mesclar clientes multicanal em um único canal. Isso significa identificar os clientes o mais rápido possível. Isso reduzirá muito o tamanho da fila e economizará largura de banda do agente.
3. Produzir um suporte baseado em chat mais inteligente. A geração atual de chatbots se torna obsoleta, desatualizada e muito impopular depois que o ChatGPT é lançado. Deixe o ChatGPT lidar com a conversa – em nossa experiência, ele faz isso melhor do que os humanos!
4. Enfatizar a eficiência dos agentes humanos: fazer o trabalho não é suficiente se cada chamada leva 45 minutos; vamos ajudá-los a resolver os problemas rapidamente, oferecendo:
    * Sugestões de “próxima melhor ação”
    * “Resoluções bem-sucedidas anteriores” com base nos registros de chat ou chamadas de outros agentes
    * Copiloto em tempo real que ajuda na execução para sistemas de back-office via chamadas de API ou automações RPA
5. Construir um modelo de previsão sobre o risco de aumento de solicitações de atendimento ao cliente e trabalhar proativamente nisso.

Nunca tive um agente de atendimento ao cliente que me procurasse proativamente para resolver o problema. Sempre fui eu, o passageiro, esperando frustrado e ligando na fila e na linha.

Nós da [Seasalt.ai](https://seasalt.ai/?utm_source=blog) estamos felizes em construir uma tecnologia semelhante a um “relatório de minoria” para identificar o problema antes que ele aconteça, reduzir o risco entrando em contato proativamente com os passageiros afetados e enfrentar o desafio de escalar dinamicamente uma central de atendimento com humanos durante o tráfego intenso.

Se nos próximos anos eu receber uma ligação da companhia aérea comunicando um problema potencial antes mesmo de eu tentar buscar ajuda, essa será uma experiência de cliente verdadeiramente incrível e uma jornada deliciosa antes mesmo de eu fazer a viagem. Qualquer companhia aérea que conseguir fazer isso primeiro ganhará muitos passageiros leais.
`;export{e as default};

const e=`---
title: "Expanda a Pegada do seu Contact Center com um Contact Center Distribuído"
metatitle: "Expanda a sua Pegada com um Contact Center Distribuído"
date: 2022-07-27 21:46:45+00:00
draft: false
author: Sarah Reid
description: "Neste blog, vamos analisar os contact centers 'distribuídos': o que são, como podem beneficiá-lo e como o SeaX utiliza isso para melhor servir os nossos clientes."
weight: 1
tags:
  - SeaX
image: images/blog/20-seax-distributed-contact-center/0-main.png
canonicalURL: /blog/seax-distributed-contact-center/
url: /blog/seax-distributed-contact-center/
---

*No nosso post anterior, [Traga Clientes de Qualquer Canal para um Só Lugar com a Comunicação Omnicanal SeaX](https://seasalt.ai/blog/19-seax-omnichannel-communication/), mostramos o poder da comunicação omnicanal no SeaX, que permite que as mensagens dos utilizadores de praticamente qualquer canal sejam exibidas na plataforma SeaX. Neste post, vamos analisar os contact centers "distribuídos": o que são, como podem beneficiá-lo e como o SeaX aproveita uma plataforma distribuída para melhor servir os nossos clientes.*

# Tabela de Conteúdos
- [O que é um contact center "distribuído"?](#o-que-e-um-contact-center-distribuido)
- [Que benefícios tem um contact center "distribuído"?](#que-beneficios-tem-um-contact-center-distribuido)
- [Que desafios tem um contact center "distribuído"?](#que-desafios-tem-um-contact-center-distribuido)
- [Como o SeaX resolve estes problemas?](#como-o-seax-resolve-estes-problemas)
    - [Encaminhamento de Chamadas para Localizações e Agentes Distribuídos](#encaminhamento-de-chamadas-para-localizacoes-e-agentes-distribuidos)
    - [Configuração da Disponibilidade da Localização Distribuída](#configuracao-da-disponibilidade-da-localizacao-distribuida)
    - [Personalizar Mensagens de Localização Distribuída](#personalizar-mensagens-de-localizacao-distribuida)

# O que é um contact center "distribuído"?
No nível mais simples, um contact center distribuído é um contact center que existe em mais de uma localização, ao contrário do contact center tradicional de uma única localização. Isso pode ser um contact center com vários escritórios, ou várias localizações em diferentes países, ou até mesmo um contact center sem localização física onde todos os agentes trabalham remotamente. No entanto, os contact centers distribuídos ainda precisam operar como os contact centers tradicionais de uma única localização, proporcionando uma experiência perfeita para todos os envolvidos. Para os agentes, isso significa ser suportado em uma única plataforma, independentemente de onde estejam localizados. Para o cliente, isso significa ser corretamente conectado à localização e ao agente apropriados com base nas suas necessidades.

# Que benefícios tem um contact center "distribuído"?
Os contact centers distribuídos têm uma série de benefícios em relação aos contact centers tradicionais, especialmente em termos de alcance e cobertura. Ter agentes em vários fusos horários garante que os clientes possam contactá-lo sempre que precisarem de ajuda. Com os contact centers tradicionais, os clientes estão limitados a ligar durante um conjunto de horas de funcionamento, tornando mais difícil para eles entrar em contacto com o seu negócio. Ter agentes distribuídos também dá ao seu negócio mais oportunidades de contratar pessoas com diversas habilidades e especialidades, como ter agentes que cobrem uma gama mais ampla de idiomas. Os contact centers tradicionais em uma única localização estão limitados a contratar agentes nessa localização, correndo o risco de não conseguir encontrar um agente com as habilidades de que precisa. Finalmente, ter agentes amplamente distribuídos mais próximos de mais clientes permite que os agentes tenham uma compreensão mais profunda de quaisquer regras e regulamentos especializados nessa área. Em um contact center tradicional de uma única localização, os agentes podem não saber detalhes específicos sobre algo como o envio em um país do outro lado do mundo, tornando mais difícil ajudar os clientes.


# Que desafios tem um contact center "distribuído"?
Embora a natureza distribuída desses contact centers traga muitos benefícios para o seu negócio, também existem alguns desafios para os contact centers distribuídos. Ter agentes em vários fusos horários permite uma comunicação fácil com os clientes a todo momento, mas também significa que é essencial que as chamadas sejam encaminhadas corretamente para que um cliente não seja direcionado para uma localização que esteja atualmente fechada ou para um agente que esteja fora de serviço. Também é importante enviar os clientes para os agentes que falam o idioma solicitado pelo cliente e que tenham o treinamento correto para lidar com o seu problema. Com o grande número de agentes em diferentes localizações com diferentes habilidades, essa tarefa de encaminhamento pode rapidamente se tornar complicada.

<center>
<img src="/images/blog/20-seax-distributed-contact-center/1-feature-comparison.png" alt="Comparação de recursos: call center tradicional vs contact center distribuído vs SeaX."/>

*Comparação de recursos: call center tradicional vs contact center distribuído vs SeaX.*
</center>

# Como o SeaX resolve estes problemas?

## Encaminhamento de Chamadas para Localizações e Agentes Distribuídos
O SeaX é uma solução de contact center colaborativa que nasceu nativa da nuvem e distribuída. É construída sobre o [Twilio Flex](https://www.twilio.com/flex) que utiliza a plataforma de comunicações em nuvem da Twilio. A Twilio fornece os blocos de construção básicos para o SeaX, como infraestrutura de telecomunicações, encaminhamento de mensagens e tarefas e uma interface de utilizador básica de contact center. Dentro do SeaX, pode configurar vários números de telefone para as suas diferentes localizações, permitindo que tenha códigos de país e área apropriados para cada área em que o seu contact center opera. Pode, portanto, configurar as suas definições por localização, garantindo que cada localização opera corretamente e recebe as chamadas certas, enquanto ainda serve todos os seus agentes na mesma plataforma.

O [Twilio TaskRouter](https://www.twilio.com/taskrouter) atribui chamadas e mensagens aos agentes com base nos atributos da chamada e do agente.

<center>
<img src="/images/blog/20-seax-distributed-contact-center/2-taskrouter.png" alt="Diagrama da arquitetura do TaskRouter."/>

*Diagrama da arquitetura do TaskRouter. [Fonte](https://twilio-cms-prod.s3.amazonaws.com/images/taskrouter-diagram.width-800.png).*
</center>

Também permite usar o encaminhamento baseado em habilidades, dando-lhe um controlo preciso sobre quais agentes e localizações recebem quais chamadas. Não só pode rotular as habilidades que os seus agentes têm, como o nível do seu treinamento de vendas, como também pode listar coisas como os idiomas que falam, garantindo que só recebem chamadas que podem lidar. Além disso, pode usar este encaminhamento para atribuir números de telefone específicos aos agentes, ligando cada agente a uma localização particular do seu contact center, mesmo que não estejam fisicamente lá. Os agentes só receberão chamadas encaminhadas para a sua localização atribuída, garantindo que as chamadas dos seus clientes são sempre direcionadas para a pessoa correta.

<center>
<img src="/images/blog/20-seax-distributed-contact-center/3-skills.png" alt="Habilidades definidas no TaskRouter para encaminhamento de chamadas e mensagens recebidas."/>

*Habilidades definidas no TaskRouter para encaminhamento de chamadas e mensagens recebidas.*
</center>

## Configuração da Disponibilidade da Localização Distribuída
No SeaX, também pode configurar os seus horários de funcionamento e feriados por número de telefone. Com esta ferramenta, pode controlar independentemente quando cada uma das suas localizações está aberta, dando-lhe total flexibilidade quanto a quando cada uma das suas localizações pode ser contactada. Em essência, cada uma das suas localizações pode operar como um call center tradicional, com horários de funcionamento definidos e fechado em feriados locais, enquanto ainda está configurada e conectada a partir de uma plataforma comum para os seus agentes operarem.

<center>
<img src="/images/blog/20-seax-distributed-contact-center/4-open-hours.png" alt="Horários de funcionamento para dois números de telefone diferentes em dois fusos horários diferentes na mesma instância SeaX."/>
</center>

<center>
<img src="/images/blog/20-seax-distributed-contact-center/5-open-hours.png" alt="Horários de funcionamento para dois números de telefone diferentes em dois fusos horários diferentes na mesma instância SeaX."/>

*Horários de funcionamento para dois números de telefone diferentes em dois fusos horários diferentes na mesma instância SeaX.*
</center>

## Personalizar Mensagens de Localização Distribuída
O SeaX também permite mensagens de cliente indisponível por número de telefone. As mensagens de indisponibilidade são reproduzidas automaticamente para os clientes quando não há ninguém disponível para atender a sua chamada. Com a capacidade de personalizar esta mensagem por número de telefone, pode ter mensagens em diferentes idiomas ou contendo informações diferentes, dependendo do que é mais importante transmitir aos clientes que ligam para essa localização.

<center>
<img src="/images/blog/20-seax-distributed-contact-center/6-unavailable-message.png" alt="Mensagem de indisponibilidade para um número de telefone específico na plataforma SeaX."/>

*Mensagem de indisponibilidade para um número de telefone específico na plataforma SeaX.*
</center>

Um contact center tradicional de uma única localização só pode servir eficazmente a área diretamente ao seu redor, embora seja por natureza em uma única plataforma. Um contact center distribuído expande grandemente a base de clientes que pode servir com agentes em várias localizações, mas tem alguns desafios com a integração de todos os serviços que os seus agentes precisam, independentemente de onde estejam. Com o SeaX, pode alcançar todas as partes da sua base de clientes, enquanto ainda serve todos os seus agentes em uma plataforma fácil.

Obrigado por dedicar o seu tempo a ler sobre como o SeaX cloud contact center suporta o seu contact center distribuído em uma única plataforma. Fique atento ao nosso próximo post no blog, que abordará o nosso text-to-speech e speech-to-text internos, e como eles podem melhorar o seu contact center. Se estiver interessado em saber mais de imediato, preencha o nosso formulário "[Agendar uma Demonstração](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting)" para ter uma primeira visão da plataforma SeaX.`;export{e as default};

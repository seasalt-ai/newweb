---
title: "SeaX KB: Uma Base de Conhecimento que Responde Antes de Ser Perguntado"
metatitle: "SeaX KB: Uma Base de Conhecimento que Responde Antes de Ser Perguntado"
date: 2022-08-15T22:01:32-07:00
modified_date: 2025-07-27T00:00:00Z
draft: false
author: Kim Dodds
description: "Nesta postagem, continuamos o tópico das integrações de IA com a Base de Conhecimento alimentada por IA do SeaX, que oferece respostas sugeridas em tempo real."
weight: 1
tags: ["SeaX"]
canonicalURL: "/blog/seax-kb-a-knowledge-base/"
url: "/blog/seax-kb-a-knowledge-base/"
---

*Em nossa postagem anterior no blog, [Dê ao seu Contact Center sua própria voz com SeaX Voice Intelligence](https://seasalt.ai/blog/21-seax-voice-intelligence/), mostramos como os motores internos de texto para fala e fala para texto da Seasalt.ai aprimoram vários aspectos da plataforma SeaX. Nesta postagem, continuamos o tópico das integrações de IA com a Base de Conhecimento alimentada por IA do SeaX, que ouve as conversas e oferece respostas sugeridas em tempo real.*

# Sumário
- [A Base de Conhecimento Tradicional](#the-traditional-knowledge-base)
- [Base de Conhecimento SeaX](#seax-knowledge-base)
    - [Interface de Usuário Incorporada para Agentes ao Vivo](#embedded-user-interface-for-live-agents)
    - [Pesquisa Rápida e Precisa](#fast-and-accurate-search)
    - [Sugestões Automatizadas em Tempo Real](#real-time-automated-suggestions)
    - [Modelos de Resposta](#response-templates)
    - [Gerenciamento de KB](#kb-management)
    - [Webinar](#webinar)

# A Base de Conhecimento Tradicional

Fundamentalmente, uma base de conhecimento (KB) é simplesmente uma biblioteca de informações (idealmente) bem organizadas e facilmente acessíveis que são utilizadas em regime de autoatendimento online. Bons sistemas de base de conhecimento terão recursos como organização hierárquica de conteúdo, pesquisa e rotulagem para ajudar os usuários a encontrar as informações corretas com mais facilidade.

Manter uma base de conhecimento detalhada é uma prática padrão para a maioria das empresas hoje em dia. Seja para ajudar os funcionários a compartilhar informações internas sobre seus produtos, responder a perguntas de um cliente em potencial, auxiliar os clientes na solução de problemas ou tudo o que foi dito acima - tornar as informações-chave acessíveis a funcionários e clientes significa um trabalho mais eficiente e maior satisfação do cliente.

Normalmente, uma base de conhecimento é implementada e mantida por meio de um Sistema de Gerenciamento de Conteúdo ou Sistema de Gerenciamento de Conhecimento. Esses sistemas podem variar em escala dependendo das necessidades da organização, começando por um simples gerenciador de documentos até um serviço repleto de recursos que inclui fluxos de trabalho de publicação, segmentação de público, ferramentas de colaboração e muito mais. Embora esses sistemas sejam versáteis de várias maneiras, eles quase sempre são destinados a serem acessados por meio da interação com uma página da web ou aplicativo. Para o caso de uso particular de um agente de atendimento ao cliente (que normalmente utiliza uma base de conhecimento como um de seus principais recursos para auxiliar os clientes), uma integração estreita com o software do contact center é necessária para permitir que os agentes lidem com as consultas do usuário da forma mais transparente possível.

# Base de Conhecimento SeaX

Nossa base de conhecimento foi projetada desde o primeiro dia com um caso de uso muito particular em mente: atendimento ao cliente baseado em voz. Embora a maioria, se não todos, os sistemas de base de conhecimento existentes dependam da navegação por páginas da web hierárquicas ou da digitação de uma consulta de pesquisa, nossa KB precisava ser mais rápida e independente para permitir que os representantes de atendimento ao cliente dessem total atenção ao cliente enquanto ainda respondiam às perguntas rapidamente.

Se você quiser ir direto para uma demonstração, pode assistir ao nosso breve vídeo de demonstração do SeaX KB:
<iframe width="85%" height="450px" src="https://www.youtube.com/embed/C_e_gaZHSFA" title="Reprodutor de vídeo do YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>


## Interface de Usuário Incorporada para Agentes ao Vivo

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-intro.png" alt="Primeira olhada na interface da Base de Conhecimento SeaX."/>

*Primeira olhada na interface da Base de Conhecimento SeaX.*
</center>

Naturalmente, como nosso motor de KB foi projetado especificamente para aplicações de contact center, ele possui integração nativa com a plataforma SeaX para que os agentes possam acessar o KB de forma transparente enquanto lidam com chamadas e mensagens. Sem alternar janelas, sem folhear abas, sem navegar por páginas da web aninhadas.

## Pesquisa Rápida e Precisa

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-manual-search.png" alt="Resultados de uma pesquisa manual na Base de Conhecimento SeaX."/>

*Resultados de uma pesquisa manual na Base de Conhecimento SeaX.*
</center>

No nível mais básico, nossa base de conhecimento é alimentada por um mecanismo de busca incrivelmente rápido e preciso. Usamos técnicas de processamento de linguagem natural e extração de informações de última geração para coletar significado de texto simples, consultas de exemplo e URLs de suporte e corresponder as declarações do cliente às entradas de KB mais relevantes. O mecanismo da base de conhecimento é altamente extensível e pode suportar bilhões de documentos sem alteração perceptível no tempo de resposta.

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-detail.png" alt="Artigo da KB em visualização expandida após clicar em um resultado de pesquisa."/>

*Artigo da KB em visualização expandida após clicar em um resultado de pesquisa.*
</center>

Além de encontrar o documento mais relevante, nosso mecanismo de busca fornece resultados mais granulares, extraindo palavras-chave salientes da consulta do usuário e destacando as palavras-chave e passagens mais relevantes em cada entrada de KB sugerida.

## Sugestões Automatizadas em Tempo Real

Mas o que mostramos até agora ainda é uma pesquisa manual. Os agentes ao vivo estão ocupados interagindo com os clientes e perderiam um tempo valioso inserindo uma pesquisa manual na KB toda vez que quisessem alguma informação. Por esse motivo, o maior valor agregado que a Base de Conhecimento SeaX traz é a pesquisa automatizada em tempo real para interações baseadas em texto e voz.

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-automatic-search.png" alt="SeaX KB mostrando sugestões automáticas de artigos para uma mensagem de usuário de entrada."/>

*SeaX KB mostrando sugestões automáticas de artigos para uma mensagem de usuário de entrada.*
</center>

Cada vez que uma nova mensagem de usuário chega, a base de conhecimento será automaticamente consultada usando a mensagem exata do cliente. Em tempo real, enquanto o cliente está falando, o agente receberá sugestões de artigos da KB atualizadas para sua referência.

E isso também funciona com chamadas de voz! Nossa última postagem no blog, [Dê ao seu Contact Center sua própria voz com SeaX Voice Intelligence](https://seasalt.ai/blog/21-seax-voice-intelligence/), mostrou o motor de Speech-to-Text de última geração da Seasalt.ai. A plataforma SeaX utiliza esse motor para transcrever todas as chamadas de voz em tempo real. Como resultado, podemos usar essas transcrições para várias aplicações downstream, incluindo pesquisa automática na base de conhecimento.

## Modelos de Resposta

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-response-template.png" alt="Um agente responde a um cliente com um clique usando o modelo de resposta gerado pelo SeaX KB."/>

*Um agente responde a um cliente com um clique usando o modelo de resposta gerado pelo SeaX KB.*
</center>

Os resultados da pesquisa da base de conhecimento possuem um recurso adicional que ajuda a acelerar as respostas dos agentes para interações baseadas em texto. Quando o agente encontra um artigo relevante da KB, ele pode simplesmente clicar no ícone `+` à esquerda do título para inserir um modelo de resposta em sua janela de chat. No backend, toda vez que a KB é pesquisada, ela gera uma resposta escrita à pergunta do usuário com base nas informações mais relevantes do artigo da KB sugerido e inclui quaisquer links de suporte. Isso pode melhorar muito o tempo de resposta do agente, pois o agente não está mais começando do zero. Em vez disso, ele já tem as informações importantes do artigo da KB em sua janela de chat, então ele pode simplesmente editá-las e enviá-las.


## Gerenciamento de KB

Agora que vimos o que o motor de KB pode fazer, há uma pergunta persistente sobre o backend: como você gerencia as informações na base de conhecimento? A plataforma SeaX possui uma interface de gerenciamento de KB totalmente integrada disponível para administradores na página de configurações.

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-management.png" alt="Interface de gerenciamento do SeaX KB."/>

*Interface de gerenciamento do SeaX KB.*
</center>

Desta página, você pode adicionar uma única nova entrada de KB ou pode importar/exportar toda a base de conhecimento usando um arquivo de planilha. A interface também suporta a edição e exclusão de entradas de KB para que você possa manter seu KB continuamente atualizado.

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-edit.png" alt="Editando um único artigo da KB através da interface de gerenciamento do SeaX KB."/>

*Editando um único artigo da KB através da interface de gerenciamento do SeaX KB.*
</center>

## Webinar

Se você quiser ver um passo a passo mais aprofundado do sistema de base de conhecimento e como ele se integra à plataforma SeaX, assista ao nosso webinar sobre o assunto:
<iframe width="85%" height="450px" src="https://www.youtube.com/embed/FOqQ01fpKQ4" title="Reprodutor de vídeo do YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

Para uma demonstração individual, ou para saber mais sobre como a Seasalt.ai pode adaptar suas soluções às necessidades do seu negócio, preencha nosso [formulário de agendamento de demonstração](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting).

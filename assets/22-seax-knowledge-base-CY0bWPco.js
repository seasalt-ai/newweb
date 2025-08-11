const e=`---
title: "SeaX KB: Uma base de conhecimento que responde antes mesmo de você perguntar"
metatitle: "SeaX KB: Uma base de conhecimento que responde antes mesmo de você perguntar"
date: 2022-08-15 22:01:32-07:00
modified_date: 2025-07-30 17:05:21.933000+00:00
draft: false
author: Kim Dodds
description: "Neste artigo, continuaremos o tópico de integrações de IA, apresentando a base de conhecimento alimentada por IA do SeaX, que fornece respostas sugeridas em tempo real."
weight: 1
tags:
  - SeaX
canonicalURL: /blog/seax-kb-a-knowledge-base/
url: /blog/seax-kb-a-knowledge-base/
---

*Em nosso post anterior do blog, [Dê ao seu contact center uma voz própria com a inteligência de voz SeaX](https://seasalt.ai/blog/21-seax-voice-intelligence/), mostramos como os mecanismos internos de conversão de texto em fala e fala em texto da Seasalt.ai aprimoram todos os aspectos da plataforma SeaX. Neste artigo, continuaremos o tópico de integrações de IA, apresentando a base de conhecimento alimentada por IA do SeaX, que ouve as conversas e fornece respostas sugeridas em tempo real.*

# Índice
- [A base de conhecimento tradicional](#the-traditional-knowledge-base)
- [Base de conhecimento SeaX](#seax-knowledge-base)
    - [Interface de usuário incorporada para agentes ao vivo](#embedded-user-interface-for-live-agents)
    - [Pesquisa rápida e precisa](#fast-and-accurate-search)
    - [Sugestões automatizadas em tempo real](#real-time-automated-suggestions)
    - [Modelos de resposta](#response-templates)
    - [Gerenciamento da base de conhecimento](#kb-management)
    - [Webinar](#webinar)

# A base de conhecimento tradicional

Em sua essência, uma base de conhecimento (KB) é simplesmente um repositório de informações (idealmente) bem organizado e de fácil acesso para autoatendimento online. Um bom sistema de KB terá recursos como organização de conteúdo hierárquico, pesquisa e marcação para ajudar os usuários a encontrar as informações certas com mais facilidade.

Manter uma base de conhecimento detalhada é uma prática padrão para a maioria das empresas hoje em dia. Seja o objetivo ajudar os funcionários a compartilhar informações internas sobre seus produtos, responder a perguntas de clientes em potencial, ajudar os clientes a solucionar problemas ou tudo isso - tornar as informações cruciais acessíveis a funcionários e clientes significa um trabalho mais eficiente e maior satisfação do cliente.

Normalmente, uma base de conhecimento é implementada e mantida por meio de um sistema de gerenciamento de conteúdo ou de um sistema de gerenciamento de conhecimento. Esses sistemas podem variar em escala, dependendo das necessidades da organização, desde um simples gerenciador de documentos até um serviço rico em recursos com fluxos de trabalho de publicação, segmentação de público, ferramentas de colaboração e muito mais. Embora esses sistemas sejam versáteis em diferentes aspectos, eles quase sempre são projetados para serem acessados por meio da interação com uma página da web ou aplicativo. Para o caso de uso específico de um agente de atendimento ao cliente (que geralmente usa a base de conhecimento como um de seus principais recursos para ajudar os clientes), é necessária uma integração estreita com o software do contact center para permitir que o agente lide com as dúvidas do usuário da maneira mais transparente possível.

# Base de conhecimento SeaX

Nossa base de conhecimento foi projetada desde o primeiro dia com um caso de uso muito específico em mente: atendimento ao cliente por voz. Embora a maioria, se não todos, os sistemas de base de conhecimento existentes dependam da navegação por páginas da web hierárquicas ou da digitação de uma consulta de pesquisa, nossa base de conhecimento precisava ser mais rápida e independente para que os representantes de atendimento ao cliente pudessem dedicar toda a sua atenção ao cliente e, ao mesmo tempo, responder rapidamente às perguntas.

Se você quiser ir direto para a demonstração, pode assistir ao nosso pequeno vídeo de demonstração do SeaX KB:
<iframe width="85%" height="450px" src="https://www.youtube.com/embed/C_e_gaZHSFA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>


## Interface de usuário incorporada para agentes ao vivo

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-intro.png" alt="Uma primeira olhada na interface da base de conhecimento SeaX."/>

*Uma primeira olhada na interface da base de conhecimento SeaX.*
</center>

Naturalmente, como nosso mecanismo de base de conhecimento foi projetado especificamente para aplicativos de contact center, ele se integra nativamente à plataforma SeaX para que os agentes possam acessar a base de conhecimento sem problemas enquanto lidam com chamadas e mensagens. Sem troca de janelas, sem percorrer abas, sem navegar em páginas da web aninhadas.

## Pesquisa rápida e precisa

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-manual-search.png" alt="Resultados de uma pesquisa manual na base de conhecimento SeaX."/>

*Resultados de uma pesquisa manual na base de conhecimento SeaX.*
</center>

No nível mais básico, nossa base de conhecimento é alimentada por um mecanismo de pesquisa extremamente rápido e preciso. Usamos processamento de linguagem natural e técnicas de extração de informações de última geração para extrair significado de texto simples, consultas de exemplo e URLs de suporte e combinar as declarações do cliente com as entradas mais relevantes da base de conhecimento. O mecanismo da base de conhecimento é altamente escalável e pode suportar bilhões de documentos sem alteração perceptível nos tempos de resposta.

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-detail.png" alt="Um artigo da base de conhecimento em uma visualização expandida após clicar em um resultado de pesquisa."/>

*Um artigo da base de conhecimento em uma visualização expandida após clicar em um resultado de pesquisa.*
</center>

Além de encontrar os documentos mais relevantes, nosso mecanismo de pesquisa também fornece resultados mais refinados, extraindo palavras-chave salientes da consulta do usuário e destacando as palavras-chave e passagens mais relevantes em cada entrada sugerida da base de conhecimento.

## Sugestões automatizadas em tempo real

Mas o que mostramos até agora ainda é uma pesquisa manual. Os agentes ao vivo estão ocupados interagindo com os clientes, e digitar manualmente uma pesquisa na base de conhecimento toda vez que precisam de informações desperdiça um tempo valioso. Portanto, o maior valor agregado que a base de conhecimento SeaX traz para a mesa é a pesquisa automática em tempo real para interações de texto e voz.

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-automatic-search.png" alt="A base de conhecimento SeaX mostrando sugestões automáticas de artigos para uma mensagem de usuário recebida."/>

*A base de conhecimento SeaX mostrando sugestões automáticas de artigos para uma mensagem de usuário recebida.*
</center>

Toda vez que uma nova mensagem de usuário chega, a base de conhecimento é consultada automaticamente usando a mensagem exata do cliente. Em tempo real, à medida que o cliente fala, o agente receberá sugestões atualizadas de artigos da base de conhecimento para sua referência.

Isso também funciona para chamadas de voz! Nosso post anterior do blog, [Dê ao seu contact center uma voz própria com a inteligência de voz SeaX](https.seasalt.ai/blog/21-seax-voice-intelligence/), apresentou o mecanismo de conversão de fala em texto de última geração da Seasalt.ai. A plataforma SeaX utiliza esse mecanismo para transcrever todas as chamadas de voz em tempo real. Como resultado, podemos usar essas transcrições para uma variedade de aplicativos downstream, incluindo a pesquisa automática na base de conhecimento.

## Modelos de resposta

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-response-template.png" alt="Um agente respondendo a um cliente com um clique usando um modelo de resposta gerado pela base de conhecimento SeaX."/>

*Um agente respondendo a um cliente com um clique usando um modelo de resposta gerado pela base de conhecimento SeaX.*
</center>

Os resultados da pesquisa da base de conhecimento vêm com um recurso adicional que ajuda a acelerar as respostas do agente para interações baseadas em texto. Quando um agente encontra um artigo relevante da base de conhecimento, ele pode simplesmente clicar no ícone "+" à esquerda do título para inserir um modelo de resposta em sua janela de bate-papo. Nos bastidores, toda vez que a base de conhecimento é pesquisada, ela gera uma resposta por escrito à pergunta do usuário com base nas informações mais relevantes do artigo sugerido da base de conhecimento e inclui quaisquer links de suporte. Isso pode melhorar drasticamente o tempo de resposta do agente, pois o agente não está mais começando do zero. Em vez disso, eles já têm as informações importantes do artigo da base de conhecimento exibidas em sua janela de bate-papo, então tudo o que precisam fazer é editar e enviar.


## Gerenciamento da base de conhecimento

Agora que vimos do que o mecanismo da base de conhecimento é capaz, há uma pergunta pendente sobre o back-end: como as informações na base de conhecimento são gerenciadas? A plataforma SeaX fornece uma interface de usuário de gerenciamento de base de conhecimento totalmente integrada que os administradores podem acessar na página de configurações.

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-management.png" alt="A interface de gerenciamento da base de conhecimento SeaX."/>

*A interface de gerenciamento da base de conhecimento SeaX.*
</center>

Nesta página, você pode adicionar novas entradas individuais da base de conhecimento ou importar/exportar toda a sua base de conhecimento usando um arquivo de planilha. A interface também oferece suporte à edição e exclusão de entradas da base de conhecimento para que você possa manter sua base de conhecimento continuamente atualizada.

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-edit.png" alt="Editando um único artigo da base de conhecimento por meio da interface de gerenciamento da base de conhecimento SeaX."/>

*Editando um único artigo da base de conhecimento por meio da interface de gerenciamento da base de conhecimento SeaX.*
</center>

## Webinar

Se você quiser se aprofundar no sistema de base de conhecimento e como ele se integra à plataforma SeaX, assista ao nosso webinar sobre o assunto:
<iframe width="85%" height="450px" src="https://www.youtube.com/embed/FOqQ01fpKQ4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

Para uma demonstração individual ou para saber como a Seasalt.ai pode personalizar uma solução para as necessidades do seu negócio, preencha nosso [formulário de agendamento de demonstração](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting).`;export{e as default};

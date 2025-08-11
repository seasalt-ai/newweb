const e=`---
title: "NLU baseado em intenção/entidade vs. NLU baseado em GenAI/LLM: a diferença está em milhões (de exemplos e dólares)"
metatitle: "NLU baseado em intenção/entidade vs. NLU baseado em GenAI/LLM"
date: 2024-03-14 00:22:19-07:00
modified_date: 2025-07-28T16:56:53Z
draft: false
author: Xuchen Yao
description: Desbloqueie o futuro da IA Conversacional - Por que a mudança de NLU baseado em intenção/entidade para GenAI/LLM é crucial para escalabilidade, eficiência de custos e adaptabilidade."
weight: 1
tags:
  - SeaChat
  - AI Tools
  - Customer Experience
  - Customer Story
  - NLU
image: /images/blog/73-Intent-entity-based-NLU-vs-GenAI-LLM-based-NLU/73-Intent-entity-based-NLU-vs-GenAI-LLM-based-NLU.png
canonicalURL: /blog/intent-entity-based-nlu-vs-genai-llm-based-nlu/
url: /blog/intent-entity-based-nlu-vs-genai-llm-based-nlu/
---

Para todos os Diretores de Atendimento ao Cliente ou Marketing, se seu chefe lhe fizer a seguinte pergunta, envie-lhes este artigo:

"**Por que o NLU baseado em intenção/entidade está desatualizado e o NLU baseado em LLM/GenAI é a tendência óbvia?**"

Os sistemas de Compreensão da Linguagem Natural (NLU) visam processar e analisar entradas de linguagem natural, como texto ou fala, a fim de derivar significado, extrair informações relevantes e compreender a intenção subjacente à comunicação. O NLU é um componente fundamental de várias aplicações de IA, incluindo assistentes virtuais, chatbots, ferramentas de análise de sentimento, sistemas de tradução de idiomas e muito mais. Ele desempenha um papel crítico em permitir a interação humano-computador e facilitar o desenvolvimento de sistemas inteligentes capazes de compreender e responder a entradas de linguagem natural.

Esta questão vem de clientes estabelecidos que estão repensando sua abordagem de IVR e chatbot. Eles estão presos à geração anterior de pilhas de tecnologia baseadas em NLU, geralmente oferecidas por grandes players de tecnologia como: [Microsoft Bot Framework](https://dev.botframework.com/) (ou [luis.ai](https://luis.ai")), [IBM Watson NLU](https://www.ibm.com/products/natural-language-understanding), [Google DialogFlow](https://cloud.google.com/dialogflow), [Meta’s wit.ai](https://wit.ai), [Amazon Lex](https://aws.amazon.com/lex/), [SAP Conversational AI](https://cai.tools.sap/), [Nuance Mix NLU](https://www.nuance.com/omni-channel-customer-engagement/ai-for-developers/nuance-mix/mix-nlu.html).

O desafio é que grandes clientes, como seguradoras, instituições financeiras, governos, companhias aéreas/concessionárias de automóveis e outros grandes negócios, já implantaram a tecnologia de última geração. Mas como o NLU baseado em intenção/entidade não é escalável, os clientes precisam gastar centenas de milhares a milhões de dólares todos os anos para manter e atualizar seu sistema NLU. Essa falta de escalabilidade contribui para o aumento dos custos de manutenção, beneficiando, em última análise, os provedores de NLU de última geração às custas de seus clientes. Como eles não escalam, o custo de manutenção é maior ano após ano.

## Por que o NLU baseado em intenção/entidade não consegue escalar efetivamente?

A principal razão reside no poder discriminatório limitado do modelo. Aqui está um detalhamento do porquê isso acontece:

1. **Requisito Mínimo de Intenções**: Modelos NLU exigem pelo menos duas intenções distintas para treinar efetivamente. Por exemplo, ao perguntar sobre o tempo, a intenção pode ser clara, mas por trás de cada consulta existem múltiplas intenções potenciais, como um fallback ou consultas não relacionadas ao tempo, como "como você está?"

2. **Demandas de Dados de Treinamento**: Grandes empresas de tecnologia geralmente exigem milhares de exemplos positivos por intenção para um treinamento eficaz. Este extenso conjunto de dados é necessário para que o modelo aprenda e discrimine entre diferentes intenções com precisão.

3. **Equilibrando Exemplos Positivos e Negativos**: Adicionar exemplos positivos a uma intenção exige a inclusão de exemplos negativos para outras intenções. Essa abordagem equilibrada garante que o modelo NLU possa aprender de forma eficaz tanto de instâncias positivas quanto negativas.

4. **Conjuntos de Exemplos Diversos**: Tanto os exemplos positivos quanto os negativos devem ser diversos para evitar o overfitting e aprimorar a capacidade do modelo de generalizar em diferentes contextos.

5. **Complexidade de Adicionar Novas Intenções**: Adicionar uma nova intenção a um modelo NLU existente envolve um processo trabalhoso. Milhares de exemplos positivos e negativos devem ser adicionados, seguidos de um retreinamento do modelo para manter seu desempenho de linha de base. Esse processo se torna cada vez mais desafiador à medida que o número de intenções cresce.

## O Efeito de Prescrição: A Armadilha do NLU Baseado em Intenção/Entidade

<center>
<img height="100%" width="50%" src="/images/blog/73-Intent-entity-based-NLU-vs-GenAI-LLM-based-NLU/the-prescribing-effect-the-pitfall-of-Intent-entity-based-NLU-01.jpg" alt="O Efeito de Prescrição do NLU baseado em Intenção/Entidade">

*O Efeito de Prescrição do NLU baseado em Intenção/Entidade*
</center>


Analogamente ao fenômeno na medicina conhecido como "**cascata de prescrição**", os desafios de escalabilidade do NLU baseado em intenção/entidade podem ser comparados a uma cascata assustadora de prescrições. Imagine um indivíduo idoso sobrecarregado com uma infinidade de medicamentos diários, cada um prescrito para tratar os efeitos colaterais do anterior. Esse cenário é muito familiar, onde a introdução do Medicamento A leva a efeitos colaterais que exigem a prescrição do Medicamento B para combatê-los. No entanto, o Medicamento B introduz seu próprio conjunto de efeitos colaterais, o que leva à necessidade do Medicamento C, e assim por diante. Consequentemente, a pessoa idosa se vê inundada com uma montanha de pílulas para gerenciar — uma cascata de prescrição.

Outra metáfora ilustrativa é a de construir uma torre de blocos, com cada bloco representando um medicamento. Inicialmente, o Medicamento A é colocado, mas sua instabilidade (efeitos colaterais) leva à adição do Medicamento B para estabilizá-lo. No entanto, essa nova adição pode não se integrar perfeitamente, fazendo com que a torre se incline ainda mais (efeito colateral de B). Em um esforço para retificar essa instabilidade, mais blocos (Medicamentos C, D, etc.) são adicionados, exacerbando a instabilidade da torre e sua suscetibilidade ao colapso — uma representação das potenciais complicações de saúde decorrentes de múltiplos medicamentos.

<center>
<img height="60%" width="60%" src="/images/blog/73-Intent-entity-based-NLU-vs-GenAI-LLM-based-NLU/the-prescribing-effect-the-pitfall-of-Intent-entity-based-NLU-02.jpg" alt="Outra metáfora ilustrativa para NLU baseado em intenção/entidade é construir uma torre de blocos">

*Outra metáfora ilustrativa para NLU baseado em intenção/entidade é construir uma torre de blocos*
</center>

Da mesma forma, a cada nova intenção adicionada a um sistema NLU, a torre metafórica de blocos cresce, aumentando a instabilidade. A necessidade de reforço aumenta, resultando em custos de manutenção mais altos. Consequentemente, embora o NLU baseado em intenção/entidade possa parecer atraente para os provedores inicialmente, a realidade é que ele se torna excessivamente oneroso para os clientes manterem. Esses sistemas carecem de escalabilidade, o que representa desafios significativos para provedores e clientes.
Nas seções subsequentes, exploraremos como o NLU baseado em GenAI/LLM oferece uma alternativa mais sustentável e escalável para abordar esses desafios de forma eficaz.

## NLU Baseado em GenAI/LLM: Uma Solução Resiliente

O NLU baseado em GenAI/LLM oferece uma solução robusta para os desafios de escalabilidade enfrentados pelos sistemas baseados em intenção/entidade. Isso é atribuído principalmente a dois fatores-chave:

1. **Pré-treinamento e Conhecimento do Mundo**: Modelos GenAI/LLM são pré-treinados em grandes quantidades de dados, permitindo que herdem uma riqueza de conhecimento do mundo. Esse conhecimento acumulado desempenha um papel crucial na distinção entre várias intenções, aprimorando assim as capacidades discriminatórias do modelo contra exemplos negativos.

2. **Aprendizagem Few-Shot**: Uma das características marcantes do NLU baseado em GenAI/LLM é sua capacidade de empregar técnicas de aprendizagem few-shot. Ao contrário dos métodos tradicionais que exigem dados de treinamento extensos para cada intenção, a aprendizagem few-shot permite que o modelo aprenda com apenas alguns exemplos. Essa abordagem de aprendizagem eficiente reforça os objetivos pretendidos com dados mínimos, reduzindo significativamente a carga de treinamento.

Considere este cenário: quando apresentada a consulta "Como está o tempo hoje?" como leitor, você a reconhece instintivamente como uma pergunta sobre o tempo em meio à multidão de frases encontradas diariamente. Essa capacidade inata de discernir a intenção é semelhante ao conceito de aprendizagem few-shot.

Como adultos, nossos cérebros são pré-treinados com um vasto vocabulário, estimado em cerca de 150 milhões de palavras aos 20 anos. Essa extensa exposição linguística nos permite compreender rapidamente novas intenções ao encontrá-las, exigindo apenas alguns exemplos para reforço.

O Urban Dictionary serve como um excelente recurso para explorar exemplos de aprendizagem few-shot em ação, ilustrando ainda mais sua eficácia em facilitar a compreensão rápida.

A capacidade de aprendizagem few-shot inerente ao NLU baseado em GenAI/LLM é fundamental para reduzir custos e permitir a escalabilidade. Com a maior parte do treinamento já concluída durante o pré-treinamento, o ajuste fino do modelo com um número mínimo de exemplos torna-se o foco principal, otimizando o processo e melhorando a escalabilidade.

## NLU Baseado em GenAI/LLM: Entregando Resultados e Evidências

Em março de 2024, o cenário do processamento de linguagem natural (PLN) passou por uma mudança significativa, marcada pelo surgimento do NLU baseado em GenAI/LLM como um divisor de águas. O progresso outrora dominante na inovação do PLN estagnou nos últimos 2-3 anos, como evidenciado pela estagnação nos avanços de ponta. Se você verificar o <a href="https://github.com/sebastianruder/NLP-progress">progresso do PLN</a> que antes era o mais popular para o estado da arte, ele parou em sua maioria há 2-3 anos:

<center>
<img height="80%" width="80%" src="/images/blog/73-Intent-entity-based-NLU-vs-GenAI-LLM-based-NLU/nlp-progress.png" alt="Costumávamos rastrear a inovação do PLN neste repositório do Github. A atualização parou em sua maioria há 2-3 anos.">

*Costumávamos rastrear a inovação do PLN neste repositório do Github. A atualização parou em sua maioria há 2-3 anos.*
</center>

Um marco notável que sublinha essa mudança de paradigma é a <a href="https://super.gluebenchmark.com/leaderboard/">tabela de classificação do SuperGlue</a>, com sua última entrada em dezembro de 2022. Curiosamente, esse período coincide com a introdução do ChatGPT (3.5), que causou ondas de choque em toda a comunidade de PLN.

<center>
<img height="80%" width="80%" src="/images/blog/73-Intent-entity-based-NLU-vs-GenAI-LLM-based-NLU/superglue-leaderboard.png" alt="A tabela de classificação do SuperGlue era popular até a introdução do ChatGPT">

*A tabela de classificação do SuperGlue era popular até a introdução do ChatGPT*
</center>

O artigo seminal do GPT-3, apropriadamente intitulado "<a href="https://arxiv.org/abs/2005.14165">Modelos de Linguagem são Aprendizes Few-Shot</a>", oferece evidências convincentes da eficácia da aprendizagem few-shot. A Figura 2.1 na página 7 do artigo delimita as distinções entre as abordagens de aprendizagem zero-shot, one-shot e few-shot, destacando a superioridade desta última em termos de eficiência e eficácia da aprendizagem.


<center>
<img height="80%" width="80%" src="/images/blog/73-Intent-entity-based-NLU-vs-GenAI-LLM-based-NLU/few-shot-learners.png" alt="As distinções entre as abordagens de aprendizagem zero-shot, one-shot e few-shot">

*As distinções entre as abordagens de aprendizagem zero-shot, one-shot e few-shot*
</center>

Além disso, corroborando a eficácia do NLU baseado em GenAI/LLM, a Tabela 3.8 na página 19 fornece uma comparação direta entre os métodos NLU supervisionados tradicionais e a aprendizagem Few-Shot do GPT-3. Nesta comparação, o GPT-3 Few-Shot supera o BERT-Large ajustado, uma representação da aprendizagem supervisionada empregada pelos sistemas NLU baseados em intenção/entidade, em várias tarefas.

<center>
<img height="100%" width="100%" src="/images/blog/73-Intent-entity-based-NLU-vs-GenAI-LLM-based-NLU/gpt-performance.png"  alt="GPT-3 Few-Shot supera Fine-tuned BERT-Large em várias tarefas">

*GPT-3 Few-Shot supera Fine-tuned BERT-Large em várias tarefas*
</center>

A superioridade do GPT-3 Few-Shot não é apenas evidente em sua precisão, mas também em sua eficiência de custos. Tanto a configuração inicial quanto os custos de manutenção associados ao NLU baseado em GenAI/LLM são significativamente mais baixos em comparação com os métodos tradicionais.

As evidências empíricas apresentadas na comunidade de PLN sublinham o impacto transformador do NLU baseado em GenAI/LLM. Ele já demonstrou sua precisão e eficiência inigualáveis. Em seguida, vamos verificar sua eficácia de custos.

## Requisitos de Dados de Treinamento: Uma Análise Comparativa

Uma comparação reveladora entre o NLU baseado em intenção/entidade e o NLU baseado em GenAI/LLM lança luz sobre seus requisitos de dados de treinamento díspares. A Figura 3.8 na página 20 apresenta um contraste marcante:

<center>
<img height="100%" width="100%" src="/images/blog/73-Intent-entity-based-NLU-vs-GenAI-LLM-based-NLU/superglue-performance.png" alt="NLU baseado em GenAI/LLM requer muito menos dados para treinamento">

*NLU baseado em GenAI/LLM requer muito menos dados para treinamento*
</center>

- **NLU de Aprendizagem Supervisionada**: Essa abordagem tradicional exige um conjunto de dados extenso, com mais de meio milhão de exemplos (630K) necessários para um treinamento eficaz.

- **GPT-3 Few-Shot**: Em contraste, o NLU baseado em GenAI/LLM demonstra notável eficiência, com apenas 32 exemplos por tarefa suficientes para um ajuste fino eficaz.

A magnitude dessa diferença é impressionante: **630.000 exemplos versus meros 32**. Essa redução drástica nos requisitos de dados de treinamento se traduz em economias de custos significativas para empresas que adotam o NLU baseado em GenAI/LLM.

Além disso, o impacto implícito nos prazos de desenvolvimento é profundo. Com o NLU baseado em GenAI/LLM, o processo de treinamento encurtado acelera a implantação de sistemas NLU por múltiplos fatores de magnitude, facilitando a rápida adaptação e inovação no campo do processamento de linguagem natural.

Em essência, essa comparação ressalta o potencial transformador do NLU baseado em GenAI/LLM, oferecendo eficiência e custo-benefício inigualáveis nos requisitos de dados de treinamento e nos prazos de desenvolvimento.

## Abraçando a Evolução: Por que o NLU Baseado em GenAI/LLM Prevalece


No campo da compreensão da linguagem natural, a transição de sistemas baseados em intenção/entidade para soluções baseadas em GenAI/LLM está indiscutivelmente em andamento. Essa mudança é impulsionada por uma infinidade de fatores que sublinham as limitações do NLU tradicional baseado em intenção/entidade e as vantagens convincentes oferecidas pelas abordagens baseadas em GenAI/LLM.

O NLU baseado em intenção/entidade é cada vez mais considerado obsoleto por várias razões convincentes:

1. **Flexibilidade Limitada**: Sistemas NLU tradicionais dependem de intenções e entidades predefinidas, restringindo a adaptabilidade de chatbots e IVRs a entradas de usuários que se desviam dessas categorias predefinidas.

2. **Desafios de Manutenção**: À medida que esses sistemas escalam e o número de intenções e entidades prolifera, a complexidade e o tempo necessários para manutenção e atualizações aumentam exponencialmente.

3. **Falta de Compreensão Contextual**: Esses sistemas frequentemente falham em compreender as nuances contextuais intrincadas das conversas, resultando em respostas imprecisas ou na necessidade de entrada adicional do usuário para esclarecer as intenções.

4. **Falta de Geração**: Sistemas NLU baseados em intenção e entidade são inerentemente limitados em sua capacidade de gerar texto, confinando-os a tarefas centradas na classificação de intenções e extração de entidades. Isso restringe a adaptabilidade de chatbots e IVRs, muitas vezes levando a respostas monótonas que não se alinham com o contexto conversacional.

Em contraste, o NLU baseado em GenAI/LLM surge como a tendência predominante devido aos seus atributos transformadores:

1. **Aprendizagem Adaptativa**: Modelos GenAI possuem a capacidade de aprender dinamicamente a partir de conversas em tempo real, permitindo que se aclimatam a novos tópicos e comportamentos de usuários de forma autônoma, sem a necessidade de atualizações manuais.

2. **Compreensão Contextual**: Esses modelos se destacam na compreensão das nuances contextuais intrincadas das conversas, resultando em respostas mais precisas e relevantes que ressoam com os usuários.

3. **Aprendizagem Few-Shot**: Modelos GenAI podem ser treinados com exemplos mínimos, otimizando o processo de treinamento e reduzindo a dependência de definições explícitas de intenções e entidades.

4. **Geração de Linguagem Natural**: GenAI/LLMs possuem a capacidade de gerar texto, capacitando-os a criar chatbots e outras aplicações de PLN que fornecem respostas naturais e contextualmente relevantes.

O futuro da IA conversacional depende de sistemas que possam aprender e se adaptar organicamente, proporcionando aos usuários uma experiência fluida e intuitiva. O NLU baseado em GenAI/LLM incorpora essa evolução, oferecendo uma abordagem dinâmica e flexível que transcende as restrições dos sistemas tradicionais baseados em intenção/entidade.

Em essência, a trajetória predominante do NLU é inequivocamente definida pela ascensão das abordagens baseadas em GenAI/LLM, anunciando uma nova era de IA conversacional que prioriza a adaptabilidade, a contextualidade e a centralidade no usuário.
`;export{e as default};

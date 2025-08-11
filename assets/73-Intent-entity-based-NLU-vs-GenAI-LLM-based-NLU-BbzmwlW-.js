const e=`---
title: "NLU basado en intenciones/entidades vs. NLU basado en Gen..."
metatitle: "NLU basado en intenciones/entidades vs. NLU basado en Gen..."
date: 2024-03-14 00:22:19-07:00
modified_date: 2025-07-28T16:56:53Z
draft: false
author: Xuchen Yao
description: "Descubra el futuro de la IA conversacional: por qué el cambio de NLU basado en intenciones/entidades a NLU basado en GenAI/LLM es crucial para la escalabilidad, la rentabilidad y la adaptabilidad."
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


A todos los Directores de Servicio al Cliente o Marketing, si su jefe les hace la siguiente pregunta, envíenles este artículo:

"**¿Por qué el NLU basado en intenciones/entidades está obsoleto y el NLU basado en LLM/GenAI es la tendencia obvia?**"

Los sistemas de Comprensión del Lenguaje Natural (NLU) tienen como objetivo procesar y analizar entradas de lenguaje natural, como texto o voz, para derivar significado, extraer información relevante y comprender la intención subyacente detrás de la comunicación. NLU es un componente fundamental de varias aplicaciones de IA, incluidos asistentes virtuales, chatbots, herramientas de análisis de sentimientos, sistemas de traducción de idiomas y más. Desempeña un papel fundamental en la habilitación de la interacción humano-computadora y la facilitación del desarrollo de sistemas inteligentes capaces de comprender y responder a entradas de lenguaje natural.

Esta pregunta proviene de clientes establecidos que están reconsiderando su enfoque de IVR y chatbot. Están atrapados en la generación anterior de pilas tecnológicas basadas en NLU, generalmente ofrecidas por grandes actores tecnológicos como: [Microsoft Bot Framework](https://dev.botframework.com/) (o [luis.ai](https://luis.ai")), [IBM Watson NLU](https://www.ibm.com/products/natural-language-understanding), [Google DialogFlow](https://cloud.google.com/dialogflow), [Meta’s wit.ai](https://wit.ai), [Amazon Lex](https://aws.amazon.com/lex/), [SAP Conversational AI](https://cai.tools.sap/), [Nuance Mix NLU](https://www.nuance.com/omni-channel-customer-engagement/ai-for-developers/nuance-mix/mix-nlu.html).

El desafío es que los principales clientes, como las compañías de seguros, las instituciones financieras, los gobiernos, las aerolíneas/concesionarios de automóviles y otros grandes negocios, ya han implementado la tecnología de última generación. Pero debido a que el NLU basado en intenciones/entidades no es escalable, los clientes tienen que gastar cientos de miles a millones de dólares cada año para mantener y actualizar su sistema NLU. Esta falta de escalabilidad contribuye al aumento de los costos de mantenimiento, lo que en última instancia beneficia a los proveedores de NLU de última generación a expensas de sus clientes. Debido a que no escalan, el costo de mantenimiento es más alto año tras año.

## ¿Por qué el NLU basado en intenciones/entidades no escala eficazmente?

La razón principal radica en el poder discriminatorio limitado del modelo. Aquí hay un desglose de por qué este es el caso:

1. **Requisito mínimo de intenciones**: Los modelos NLU requieren al menos dos intenciones distintas para entrenar eficazmente. Por ejemplo, al preguntar sobre el clima, la intención podría ser clara, pero detrás de cada consulta hay múltiples intenciones potenciales, como una alternativa o consultas no relacionadas con el clima como "¿cómo estás?"

2. **Demandas de datos de entrenamiento**: Las grandes empresas tecnológicas suelen exigir miles de ejemplos positivos por intención para un entrenamiento eficaz. Este extenso conjunto de datos es necesario para que el modelo aprenda y discrimine entre diferentes intenciones con precisión.

3. **Equilibrio de ejemplos positivos y negativos**: Agregar ejemplos positivos a una intención requiere la inclusión de ejemplos negativos para otras intenciones. Este enfoque equilibrado garantiza que el modelo NLU pueda aprender de manera efectiva tanto de instancias positivas como negativas.

4. **Conjuntos de ejemplos diversos**: Tanto los ejemplos positivos como los negativos deben ser diversos para evitar el sobreajuste y mejorar la capacidad del modelo para generalizar en diferentes contextos.

5. **Complejidad de agregar nuevas intenciones**: Agregar una nueva intención a un modelo NLU existente implica un proceso laborioso. Se deben agregar miles de ejemplos positivos y negativos, seguido de un reentrenamiento del modelo para mantener su rendimiento base. Este proceso se vuelve cada vez más desafiante a medida que crece el número de intenciones.

## El efecto de prescripción: la trampa del NLU basado en intenciones/entidades

<center>
<img height="100%" width="50%" src="/images/blog/73-Intent-entity-based-NLU-vs-GenAI-LLM-based-NLU/the-prescribing-effect-the-pitfall-of-Intent-entity-based-NLU-01.jpg" alt="El efecto de prescripción del NLU basado en intenciones/entidades">

*El efecto de prescripción del NLU basado en intenciones/entidades*
</center>


Análogamente al fenómeno en medicina conocido como "**cascada de prescripción**", los desafíos de escalabilidad del NLU basado en intenciones/entidades pueden compararse con una abrumadora cascada de prescripciones. Imagine a una persona mayor cargada con una plétora de medicamentos diarios, cada uno recetado para abordar los efectos secundarios del anterior. Este escenario es demasiado familiar, donde la introducción del Medicamento A conduce a efectos secundarios que requieren la prescripción del Medicamento B para contrarrestarlos. Sin embargo, el Medicamento B introduce su propio conjunto de efectos secundarios, lo que provoca la necesidad del Medicamento C, y así sucesivamente. En consecuencia, la persona mayor se encuentra inundada con una montaña de píldoras que manejar, una cascada de prescripción.

Otra metáfora ilustrativa es la de construir una torre de bloques, donde cada bloque representa un medicamento. Inicialmente, se coloca el Medicamento A, pero su inestabilidad (efectos secundarios) provoca la adición del Medicamento B para estabilizarlo. Sin embargo, esta nueva adición puede no integrarse sin problemas, lo que hace que la torre se incline aún más (efecto secundario de B). En un esfuerzo por rectificar esta inestabilidad, se agregan más bloques (Medicamentos C, D, etc.), lo que exacerba la inestabilidad de la torre y su susceptibilidad al colapso, una representación de las posibles complicaciones de salud que surgen de múltiples medicamentos.

<center>
<img height="60%" width="60%" src="/images/blog/73-Intent-entity-based-NLU-vs-GenAI-LLM-based-NLU/the-prescribing-effect-the-pitfall-of-Intent-entity-based-NLU-02.jpg" alt="Otra metáfora ilustrativa para el NLU basado en intenciones/entidades es construir una torre de bloques">

*Otra metáfora ilustrativa para el NLU basado en intenciones/entidades es construir una torre de bloques*
</center>

De manera similar, con cada nueva intención agregada a un sistema NLU, la torre metafórica de bloques crece más alta, aumentando la inestabilidad. La necesidad de refuerzo aumenta, lo que resulta en mayores costos de mantenimiento. En consecuencia, si bien el NLU basado en intenciones/entidades puede parecer atractivo para los proveedores inicialmente, la realidad es que se vuelve excesivamente oneroso para los clientes mantenerlo. Estos sistemas carecen de escalabilidad, lo que plantea desafíos significativos tanto para los proveedores como para los clientes.
En las secciones siguientes, exploraremos cómo el NLU basado en GenAI/LLM ofrece una alternativa más sostenible y escalable para abordar estos desafíos de manera efectiva.

## NLU basado en GenAI/LLM: una solución resiliente

El NLU basado en GenAI/LLM ofrece una solución robusta a los desafíos de escalabilidad que enfrentan los sistemas basados en intenciones/entidades. Esto se atribuye principalmente a dos factores clave:

1. **Preentrenamiento y conocimiento del mundo**: Los modelos GenAI/LLM se preentrenan con grandes cantidades de datos, lo que les permite heredar una gran cantidad de conocimiento del mundo. Este conocimiento acumulado juega un papel crucial en la distinción entre varias intenciones, mejorando así las capacidades discriminatorias del modelo contra ejemplos negativos.

2. **Aprendizaje de pocas tomas (Few-Shot Learning)**: Una de las características distintivas del NLU basado en GenAI/LLM es su capacidad para emplear técnicas de aprendizaje de pocas tomas. A diferencia de los métodos tradicionales que requieren grandes cantidades de datos de entrenamiento para cada intención, el aprendizaje de pocas tomas permite que el modelo aprenda de solo unos pocos ejemplos. Este enfoque de aprendizaje eficiente refuerza los objetivos previstos con datos mínimos, lo que reduce significativamente la carga de entrenamiento.

Considere este escenario: cuando se le presenta la consulta "¿Qué tiempo hace hoy?" como lector, usted la reconoce instintivamente como una pregunta sobre el clima entre la multitud de oraciones que encuentra a diario. Esta capacidad innata para discernir la intención es similar al concepto de aprendizaje de pocas tomas.

Como adultos, nuestros cerebros están preentrenados con un vasto vocabulario, estimado en alrededor de 150 millones de palabras a la edad de 20 años. Esta extensa exposición lingüística nos permite comprender rápidamente nuevas intenciones al encontrarlas, requiriendo solo unos pocos ejemplos para el refuerzo.

El Urban Dictionary sirve como un excelente recurso para explorar ejemplos de aprendizaje de pocas tomas en acción, ilustrando aún más su eficacia para facilitar una comprensión rápida.

La capacidad de aprendizaje de pocas tomas inherente al NLU basado en GenAI/LLM es fundamental para reducir costos y permitir la escalabilidad. Con la mayor parte del entrenamiento ya completada durante el preentrenamiento, el ajuste fino del modelo con un número mínimo de ejemplos se convierte en el enfoque principal, lo que agiliza el proceso y mejora la escalabilidad.

## NLU basado en GenAI/LLM: entrega de resultados y evidencia

Desde marzo de 2024, el panorama del procesamiento del lenguaje natural (PLN) ha experimentado un cambio significativo, marcado por la aparición del NLU basado en GenAI/LLM como un cambio de juego. El progreso que alguna vez fue dominante en la innovación del PLN se ha estancado en los últimos 2-3 años, como lo demuestra el estancamiento en los avances de vanguardia. Si revisa el <a href="https://github.com/sebastianruder/NLP-progress">progreso del PLN</a> que alguna vez fue el más popular para el estado del arte, en su mayoría se detuvo hace 2-3 años:

<center>
<img height="80%" width="80%" src="/images/blog/73-Intent-entity-based-NLU-vs-GenAI-LLM-based-NLU/nlp-progress.png" alt="Solíamos rastrear la innovación del PLN en este repositorio de Github. La actualización se detuvo en su mayoría hace 2-3 años.">

*Solíamos rastrear la innovación del PLN en este repositorio de Github. La actualización se detuvo en su mayoría hace 2-3 años.*
</center>

Un punto de referencia notable que subraya este cambio de paradigma es la <a href="https://super.gluebenchmark.com/leaderboard/">tabla de clasificación de SuperGlue</a>, con su última entrada en diciembre de 2022. Curiosamente, este período de tiempo coincide con la introducción de ChatGPT (3.5), que causó conmoción en la comunidad del PLN.

<center>
<img height="80%" width="80%" src="/images/blog/73-Intent-entity-based-NLU-vs-GenAI-LLM-based-NLU/superglue-leaderboard.png" alt="La tabla de clasificación de SuperGlue fue popular hasta la introducción de ChatGPT">

*La tabla de clasificación de SuperGlue fue popular hasta la introducción de ChatGPT*
</center>

El influyente artículo de GPT-3, acertadamente titulado "<a href="https://arxiv.org/abs/2005.14165">Los modelos de lenguaje son aprendices de pocas tomas</a>", ofrece pruebas convincentes de la eficacia del aprendizaje de pocas tomas. La Figura 2.1 en la página 7 del artículo delimita las distinciones entre los enfoques de aprendizaje de cero tomas, una toma y pocas tomas, destacando la superioridad de este último en términos de eficiencia y eficacia del aprendizaje.


<center>
<img height="80%" width="80%" src="/images/blog/73-Intent-entity-based-NLU-vs-GenAI-LLM-based-NLU/few-shot-learners.png" alt="Las distinciones entre los enfoques de aprendizaje de cero tomas, una toma y pocas tomas">

*Las distinciones entre los enfoques de aprendizaje de cero tomas, una toma y pocas tomas*
</center>

Además, corroborando la eficacia del NLU basado en GenAI/LLM, la Tabla 3.8 en la página 19 proporciona una comparación directa entre los métodos NLU supervisados tradicionales y el aprendizaje de pocas tomas de GPT-3. En esta comparación, GPT-3 Few-Shot supera a Fine-tuned BERT-Large, una representación del aprendizaje supervisado empleado por los sistemas NLU basados en intenciones/entidades, en varias tareas.

<center>
<img height="100%" width="100%" src="/images/blog/73-Intent-entity-based-NLU-vs-GenAI-LLM-based-NLU/gpt-performance.png"  alt="GPT-3 Few-Shot supera a Fine-tuned BERT-Large en varias tareas">

*GPT-3 Few-Shot supera a Fine-tuned BERT-Large en varias tareas*
</center>

La superioridad de GPT-3 Few-Shot no solo es evidente en su precisión, sino también en su rentabilidad. Tanto la configuración inicial como los costos de mantenimiento asociados con el NLU basado en GenAI/LLM son significativamente más bajos en comparación con los métodos tradicionales.

La evidencia empírica presentada en la comunidad de PLN subraya el impacto transformador del NLU basado en GenAI/LLM. Ya ha demostrado su precisión y eficiencia inigualables. A continuación, examinemos su rentabilidad.

## Requisitos de datos de entrenamiento: un análisis comparativo

Una comparación reveladora entre el NLU basado en intenciones/entidades y el NLU basado en GenAI/LLM arroja luz sobre sus dispares requisitos de datos de entrenamiento. La Figura 3.8 en la página 20 presenta un marcado contraste:

<center>
<img height="100%" width="100%" src="/images/blog/73-Intent-entity-based-NLU-vs-GenAI-LLM-based-NLU/superglue-performance.png" alt="El NLU basado en GenAI/LLM requiere muchos menos datos para el entrenamiento">

*El NLU basado en GenAI/LLM requiere muchos menos datos para el entrenamiento*
</center>

- **NLU de aprendizaje supervisado**: Este enfoque tradicional requiere un conjunto de datos extenso, con más de medio millón de ejemplos (630K) necesarios para un entrenamiento eficaz.

- **GPT-3 de pocas tomas**: En contraste, el NLU basado en GenAI/LLM demuestra una eficiencia notable, con solo 32 ejemplos por tarea suficientes para un ajuste fino eficaz.

La magnitud de esta diferencia es sorprendente: **630.000 ejemplos frente a solo 32**. Esta drástica reducción en los requisitos de datos de entrenamiento se traduce en importantes ahorros de costos para las empresas que adoptan el NLU basado en GenAI/LLM.

Además, el impacto implícito en los plazos de desarrollo es profundo. Con el NLU basado en GenAI/LLM, el proceso de entrenamiento acortado acelera la implementación de los sistemas NLU por múltiples factores de magnitud, facilitando la rápida adaptación e innovación en el ámbito del procesamiento del lenguaje natural.

En esencia, esta comparación subraya el potencial transformador del NLU basado en GenAI/LLM, ofreciendo una eficiencia y rentabilidad inigualables en los requisitos de datos de entrenamiento y los plazos de desarrollo.

## Abrazando la evolución: por qué prevalece el NLU basado en GenAI/LLM


En el ámbito de la comprensión del lenguaje natural, la transición de los sistemas basados en intenciones/entidades a las soluciones basadas en GenAI/LLM está indiscutiblemente en marcha. Este cambio es impulsado por una multitud de factores que subrayan las limitaciones del NLU tradicional basado en intenciones/entidades y las ventajas convincentes que ofrecen los enfoques basados en GenAI/LLM.

El NLU basado en intenciones/entidades se considera cada vez más obsoleto por varias razones convincentes:

1. **Flexibilidad limitada**: Los sistemas NLU tradicionales dependen de intenciones y entidades predefinidas, lo que restringe la adaptabilidad de los chatbots e IVR a las entradas de los usuarios que se desvían de estas categorías predefinidas.

2. **Desafíos de mantenimiento**: A medida que estos sistemas escalan y el número de intenciones y entidades prolifera, la complejidad y el tiempo necesarios para el mantenimiento y las actualizaciones aumentan exponencialmente.

3. **Falta de comprensión contextual**: Estos sistemas a menudo fallan en comprender los matices contextuales intrincados de las conversaciones, lo que resulta en respuestas inexactas o la necesidad de una entrada adicional del usuario para aclarar las intenciones.

4. **Falta de generación**: Los sistemas NLU basados en intenciones y entidades están inherentemente limitados en su capacidad para generar texto, lo que los confina a tareas centradas en la clasificación de intenciones y la extracción de entidades. Esto restringe la adaptabilidad de los chatbots e IVR, lo que a menudo conduce a respuestas monótonas que no se alinean con el contexto conversacional.

En marcado contraste, el NLU basado en GenAI/LLM emerge como la tendencia predominante debido a sus atributos transformadores:

1. **Aprendizaje adaptativo**: Los modelos GenAI poseen la capacidad de aprender dinámicamente de conversaciones en tiempo real, lo que les permite aclimatarse a nuevos temas y comportamientos de los usuarios de forma autónoma, sin necesidad de actualizaciones manuales.

2. **Comprensión contextual**: Estos modelos sobresalen en la comprensión de los intrincados matices contextuales de las conversaciones, lo que resulta en respuestas más precisas y relevantes que resuenan con los usuarios.

3. **Aprendizaje de pocas tomas**: Los modelos GenAI se pueden entrenar con ejemplos mínimos, lo que agiliza el proceso de entrenamiento y reduce la dependencia de definiciones explícitas de intenciones y entidades.

4. **Generación de lenguaje natural**: Los GenAI/LLM cuentan con la capacidad de generar texto, lo que les permite crear chatbots y otras aplicaciones de PLN que brindan respuestas naturales y contextualmente relevantes.

El futuro de la IA conversacional depende de sistemas que puedan aprender y adaptarse orgánicamente, brindando a los usuarios una experiencia fluida e intuitiva. El NLU basado en GenAI/LLM encarna esta evolución, ofreciendo un enfoque dinámico y flexible que trasciende las limitaciones de los sistemas tradicionales basados en intenciones/entidades.

En esencia, la trayectoria predominante del NLU está definida inequívocamente por el ascenso de los enfoques basados en GenAI/LLM, lo que anuncia una nueva era de IA conversacional que prioriza la adaptabilidad, la contextualidad y la centralidad en el usuario.
`;export{e as default};

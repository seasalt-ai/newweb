const e=`---
title: "Del Demo al Éxito: Más allá de los algoritmos de voz en reuniones modernas (3/5)"
metatitle: "Demo al Éxito (3/5): Más allá de los algoritmos de voz"
date: 2021-07-30 17:43:38-07:00
modified_date: 2025-07-29 00:00:00+00:00
draft: false
author: Cody Kim, Shayne Mei
description: "En la tercera parte de esta serie de blogs, sigue el viaje de Seasalt.ai para crear SeaMeet, nuestra solución colaborativa para reuniones modernas."
weight: 1
tags:
  - SeaMeet
image: images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/SeaMeet animation.gif
canonicalURL: /blog/seameet-voice-speech-recognition/
url: /blog/seameet-voice-speech-recognition/
---

*A lo largo de esta serie de blogs, sigue el viaje de Seasalt.ai para crear una experiencia completa de reuniones modernas, desde sus humildes comienzos, optimizando el servicio en diferentes hardware y modelos, integrando sistemas NLP de última generación y finalmente culminando en la realización total de SeaMeet, nuestra solución colaborativa para reuniones modernas.*

## Más allá del algoritmo
Modern Meetings fue una excelente demostración, pero se quedó como demo. Todavía queda mucho por hacer para que esté listo para producción. Primero implementamos con éxito la versión demo usando Microsoft Azure stack. Pero al reconocer todas las limitaciones del software, decidimos cambiar los algoritmos por los nuestros y hacer que toda la experiencia fuera mucho más fluida, ligera y flexible.
Hay cuatro componentes principales en Modern Meetings:

1. Procesamiento de señal en el array de micrófonos, especialmente beam forming
2. Diarización e identificación de hablantes
3. Reconocimiento de voz personalizado
4. Una mejor interfaz de usuario

A continuación detallaremos todos los componentes importantes.

<center>
<img src="/images/blog/5-seameet-voice-intelligence-meeting-transcription-speech-recognition-algorithm-of-modern-meeting/tech-stack.png" alt="SeaMeet architect with 4 major components"/>

*Adaptamos los 4 componentes principales de Modern Meetings con nuestra propia tecnología: 1. Procesamiento de señal con array de micrófonos; 2. Diarización e identificación de hablantes; 3. Reconocimiento de voz personalizado; 4. Una interfaz web moderna.*
</center>

### Procesamiento de señal en el array de micrófonos
El array de micrófonos, en comparación con un solo micrófono cercano, capta voces desde todo el rango de 360 grados, hasta una distancia de 5 metros. Así, un solo array de micrófonos puede recoger voz en una sala de conferencias de tamaño medio de 10x10 metros. Como todos los micrófonos están agrupados en un solo dispositivo, esto reduce significativamente la cantidad de cables en la sala y simplifica la instalación y el mantenimiento.
Por otro lado, el objetivo de usar un array de micrófonos es proporcionar a nuestros modelos la mejor calidad de datos posible. Así que antes de pasar el audio por el reconocimiento automático de voz, primero realizamos varios algoritmos de procesamiento de señal. El componente principal de nuestra línea de preprocesamiento implica un algoritmo conocido como beamforming. Como trabajamos con arrays circulares de múltiples micrófonos, podemos utilizar la pequeña diferencia de tiempo que tarda el sonido en llegar a los distintos micrófonos. El beamforming determina las principales características de la señal —también conocido como el mejor haz— y acentúa esas frecuencias mientras atenúa los sonidos no deseados. El efecto es la reducción de ruido y reverberación, mientras que la señal principal, en nuestro caso la voz, se vuelve más fuerte y clara.

Para el rendimiento óptimo de muchos algoritmos de beamforming, sería necesario conocer la posición exacta de la fuente (el hablante) en relación con el micrófono. Pero en una aplicación real esto es imposible, así que primero calculamos los llamados pesos de campo lejano determinando la dirección de la fuente. Este primer paso, conocido como localización de la fuente, o más específicamente Direction of Arrival (DOA), resultó complicado. El principal problema era el suavizado. El algoritmo nos daba aproximadamente el resultado correcto, pero la fuente determinada oscilaba constantemente 30 grados a cada lado de la dirección verdadera, lo que afectaba al beamforming. La solución que encontramos fue permitir que el algoritmo de localización de la fuente usara solo el rango de frecuencias que codifica la mayor parte de la voz humana. Combinamos esto con una técnica de suavizado, manteniendo un “historial” de los resultados de DOA para promediar. Con resultados de DOA más confiables, pudimos calcular los pesos de campo lejano y usar esos para determinar el mejor haz.

Con la serie de algoritmos realizados en el Kinect DK: beamforming, reducción de ruido, reducción de reverberación, localización de la fuente, pudimos producir voz humana clara y mejorada en tiempo real, además de identificar aproximadamente la dirección del hablante. Esto ayudará mucho en la identificación del hablante en el siguiente paso.

### Diarización e identificación de hablantes

El siguiente componente de un sistema moderno de transcripción de reuniones es el reconocimiento automático de hablantes. Como se mencionó en la última parte de esta serie, leer un texto conversacional desorganizado sin información sobre quién dijo qué es frustrante y anula el propósito de tener tal sistema. Aquí es donde entra el reconocimiento de hablantes.

Con este componente podemos alinear automáticamente las transcripciones y el audio con el nombre del hablante. Para ello, usamos un proceso llamado diarización, que agrupa segmentos de audio en un número determinado de grupos que representan el número de hablantes en la grabación. Esto funciona aprovechando un sistema de Detección de Actividad de Voz (VAD) para determinar segmentos de voz, de los cuales podemos extraer una representación vectorial de una ventana corta. Cada vector extraído de las ventanas se llama xvector a nivel de enunciado y, cuando se promedia, obtenemos un xvector a nivel de hablante. Estos xvectors se procesan mediante un algoritmo de agrupamiento, donde cada grupo representa los segmentos de voz que pertenecen al mismo hablante. Cabe mencionar que la elección del algoritmo de agrupamiento afecta mucho el rendimiento de la diarización, y hemos logrado una tasa de error de diarización (DER) óptima con agrupamiento espectral usando una matriz de afinidad con umbral ajustado automáticamente con valores de Normalized Maximum Eigengap (NME). Finalmente, debemos decidir qué hablante representa cada grupo. Antes de la reunión, podemos realizar un proceso de inscripción para extraer xvectors de grabaciones de 40 segundos de cada hablante, que podemos comparar con los grupos para identificar al hablante correspondiente.

La belleza de esta línea de procesamiento está en la flexibilidad. Para muchos escenarios de reuniones, es poco práctico y a menudo imposible obtener grabaciones de cada hablante con antelación. Considera reuniones de negocios con clientes VIP o grandes simposios con 50 hablantes. En ese caso, omitiendo la etapa de inscripción, nuestro sistema de diarización aún puede separar los segmentos de voz y agrupar los que pertenecen al mismo hablante. Basta con que una persona escuche unos segundos de cada grupo para determinar la identidad del hablante. Junto con una interfaz de usuario moderna dedicada, podemos ofrecer la misma funcionalidad pero con más flexibilidad.

### Reconocimiento de voz personalizado

Después de conocer el transcriptor de reuniones de Microsoft y entender por qué es tan poderoso, estábamos listos para hacer nuestro sistema completamente independiente e ir más allá de un producto ya revolucionario. La fuerza impulsora detrás de Modern Meetings y cualquier producto de transcripción son los modelos de Reconocimiento Automático de Voz (ASR). Por lo tanto, naturalmente, este fue nuestro mayor enfoque.
Azure Cognitive Services ofreció una variedad de modelos para diferentes idiomas y dialectos. Sin embargo, el rendimiento entre los diferentes dialectos era difícil de distinguir. Para los dialectos de inglés, es probable que la mayor parte del esfuerzo y los datos se hayan dedicado al modelo de inglés estadounidense, que luego se ajustó con datos de acento para crear los diversos modelos de dialecto. Queríamos asegurarnos de que, si ofrecíamos un modelo distinto, estuviera ajustado para un caso de uso específico. Esto significó reunir miles de horas de audio y transcripciones localizadas y dedicar semanas de entrenamiento y ajuste fino. Pero valió la pena ver nuestros modelos mejorar con cada época y cumplir lo prometido.

Con un modelo fundamental sólido, el siguiente paso fue expandir la usabilidad y la personalización. Cada industria tiene su propio argot, lo que dificulta que los modelos ASR distingan entre vocabulario esotérico y una secuencia de palabras comunes fonéticamente similares.

Nuestra respuesta es SeaVoice, que ofrece un lugar centralizado donde los usuarios pueden ajustar fácilmente los modelos para sus necesidades específicas.
`;export{e as default};

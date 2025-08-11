const e=`---
title: "Dé a su centro de contacto su propia voz con SeaX Voice Intelligence"
metatitle: "Deje que su centro de contacto hable con SeaX Voice Intelligence"
date: 2022-08-02 17:24:00-07:00
modified_date: 2025-07-29 20:45:17+00:00
draft: false
author: Kim Dodds, Cody Kim, Xuchen Yao, Guoguo Chen
description: "En este blog, mostraremos cómo los motores internos de texto a voz y voz a texto de Seasalt.ai pueden mejorar varios aspectos de la plataforma SeaX."
weight: 1
tags:
  - SeaX
image: /images/blog/21-seax-voice-intelligence/thumbnail.png
canonicalURL: /blog/seax-voice-intelligence/
url: /blog/seax-voice-intelligence/
---

*Hasta ahora, en nuestra [serie de blogs de SeaX](https://seasalt.ai/tags/seax/), le hemos dado una visión general amplia del producto estrella de Seasalt.ai: SeaX. También discutimos dos características clave que distinguen a SeaX de un centro de llamadas tradicional: primero, que SeaX es omnicanal, lo que significa que puede interactuar más fácilmente con los clientes en cualquier canal, y segundo, que la plataforma es un centro de contacto distribuido, lo que le permite enrutar sin problemas mensajes y llamadas de clientes de todo el mundo a sus agentes distribuidos en varias ubicaciones.*

*Ahora que hemos cubierto los conceptos básicos de la plataforma SeaX, pasaremos a las funciones avanzadas de IA y automatización que distinguen a SeaX de otros centros de contacto omnicanal distribuidos. En este blog, mostraremos cómo los motores internos de texto a voz y voz a texto de Seasalt.ai pueden mejorar varios aspectos de la plataforma SeaX.*

# Tabla de Contenidos
- [Introducción a la Inteligencia de Voz](#into-to-voice-intelligence)
- [Lo que distingue a Seasalt.ai](#what-sets-seasaltai-apart)
    - [Voz a Texto](#speech-to-text)
    - [Texto a Voz](#text-to-speech)
- [TTS y STT en SeaX](#tts-and-stt-in-seax)
    - [IVR de Voz](#voice-ivr)
    - [Mensaje de No Disponible](#unavailable-message)
    - [Transcipción en Vivo](#live-transcription)
    - [Y más...](#and-more)

# Introducción a la Inteligencia de Voz

La Inteligencia de Voz es el uso de la Inteligencia Artificial para analizar y extraer información de datos basados en voz. Si bien la década anterior ha visto un notable desarrollo en las tecnologías de voz, su uso en entornos empresariales todavía es algo limitado. Las empresas continúan acumulando terabytes de datos de voz, pero en la mayoría de los casos, no se están utilizando en todo su potencial.

Una de las razones de esto es que los datos de voz son más difíciles de procesar que otras formas de datos, como estadísticas básicas o incluso datos de texto sin formato. Los datos de voz son únicos de muchas maneras diferentes:
1. Depende del idioma, con dialectos y acentos, por lo que es difícil capturar el 100% de la información
2. Su calidad varía según los canales (telefonía vs. VoIP, mono vs. estéreo), la frecuencia de muestreo (8KHz vs. 16KHz), la precisión representacional (8bit, 16 bit, 32bit) y los sonidos ambientales como el ruido de fondo
3. Es más difícil de interpretar: desde las emociones del habla hasta la identificación del hablante y la semántica del significado

Sin embargo, cuando se aborda correctamente con las herramientas adecuadas, la inteligencia de voz puede proporcionar enormes beneficios a las empresas que la utilizan. Entre otras cosas, poder gestionar correctamente los datos de voz desbloquea la capacidad de utilizar la transcripción de voz a texto personalizada, lo que puede hacer que las conversaciones sean buscables, indexables y perspicaces, y permite un procesamiento posterior de PNL. A medida que se recopilan más datos, también son posibles mejoras en estos servicios, como: aumentar la precisión de la transcripción, aumentar la cobertura de casos de uso y proporcionar modelos de voz y lenguaje personalizables para adaptarse a nuevos idiomas y dialectos.

# Lo que distingue a Seasalt.ai

Seasalt.ai proporciona tecnologías y productos de IA de comunicación en la nube a clientes empresariales.
Hemos desarrollado tecnologías internas de voz y lenguaje para mensajes de texto
y llamadas de voz en centros de contacto empresariales. Nuestro motor de lenguaje natural admite una amplia
gama de idiomas de alto y bajo recurso: birmano, chino, inglés, filipino,
alemán, indonesio, jemer, laosiano, malayo, español, tamil, tailandés, vietnamita, etc.
Seasalt.ai está financiada por capital de riesgo y dirigida por un grupo de expertos líderes mundiales en reconocimiento de voz profundo,
síntesis de voz neuronal y diálogos de lenguaje natural.

Mire nuestro video de demostración de voz a texto:
<iframe width="85%" height="450px" src="https://www.youtube.com/embed/Log8usX8ViE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

## Voz a Texto

<center>
<img src="/images/blog/21-seax-voice-intelligence/STT.png" alt="Gráfico de voz a texto."/>
</center>

Nuestro motor de voz a texto recibe audio de voz y produce transcripciones en tiempo real. Comenzando con el audio, extraemos características fonéticas, convertimos estas características en fonemas y luego mapeamos estos fonemas a la ortografía del idioma de destino. Nuestro sistema actual es capaz de transcribir varios idiomas, incluidos inglés y chino, y se agregan más idiomas constantemente.

Mire nuestro video de personalización de Voz a Texto para ver cómo el motor STT de Seasalt se puede personalizar para cualquier dominio:
<iframe width="85%" height="450px" src="https://www.youtube.com/embed/1YEU6mexzWQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

## Texto a Voz

<center>
<img src="/images/blog/21-seax-voice-intelligence/TTS.png" alt="Gráfico de texto a voz."/>
</center>

Texto a Voz es el proceso de sintetizar habla humana realista con entonación y cadencia naturales solo a partir de texto. Nuestro modelo toma el texto regular, traduce este texto a fonemas y luego convierte los fonemas en audio, prediciendo el tono, la duración y el volumen correctos en cada paso de tiempo para la experiencia TTS más realista posible. Si el resultado final no es perfecto, ofrecemos la capacidad de ajustar el audio sintetizado, incluida la pronunciación de palabras, pausas y énfasis.

Mire nuestro video de demostración de personalización de Texto a Voz para ver cómo la salida del motor TTS de Seasalt se puede personalizar para proporcionar habla sintetizada realista:

<iframe width="85%" height="450px" src="https://www.youtube.com/embed/GJCOhTtImp8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

También puede consultar la [página de TTS](https://suite.seasalt.ai/tts) en nuestro sitio web para escuchar ejemplos de algunas de nuestras voces sintetizadas, incluidos Tom Hanks, David Attenborough y Reese Witherspoon.

# TTS y STT en SeaX

## IVR de Voz

<center>
<img src="/images/blog/21-seax-voice-intelligence/flow.png" alt="Flujo de IVR de Voz utilizando el motor de voz a texto de Seasalt.ai para transcripción en tiempo real y enrutamiento de llamadas."/>

*Flujo de IVR de Voz utilizando el motor de voz a texto de Seasalt.ai para transcripción en tiempo real y enrutamiento de llamadas.*
</center>

La inteligencia de voz puede comenzar a ayudar incluso antes de que las llamadas lleguen a la plataforma SeaX, asegurándose de que las llamadas se enruten al lugar correcto y recopilando información importante antes de entregar la llamada a un agente. SeaX utiliza Twilio Studio para personalizar los flujos de enrutamiento de llamadas y mensajes. Pero también podemos integrar nuestro motor de voz a texto en el flujo IVR para permitir que el cliente use el lenguaje natural para enrutar su llamada (en lugar de la experiencia tradicional de “presione 1 para…”). Además, si su empresa está interesada en usar un chatbot para interactuar con los clientes, podemos ir un paso más allá, dándole a su chatbot una voz para hablar con los clientes por teléfono usando nuestro motor de texto a voz.

## Mensaje de No Disponible

<center>
<img src="/images/blog/21-seax-voice-intelligence/unavailable-message.png" alt="Configuración de mensaje de no disponible de SeaX usando texto a voz."/>

*Configuración de mensaje de no disponible de SeaX usando texto a voz.*
</center>

Nuestra tecnología de texto a voz también permite mensajes de voz altamente personalizables. Por ejemplo, estos pueden activarse cuando un cliente llama después del horario comercial normal, o si el cliente necesita ser puesto en espera mientras espera a un agente disponible.

## Transcripción en Vivo

<center>
<img src="/images/blog/21-seax-voice-intelligence/live-transcription.jpg" alt="Transcripción de llamadas en vivo con análisis que se muestran al agente en SeaX."/>

*Transcripción de llamadas en vivo con análisis que se muestran al agente en SeaX.*
</center>

Una vez que un cliente está en una llamada con un agente, nuestro motor de voz a texto proporciona transcripciones precisas en tiempo real de la conversación para referencia del agente. Esto permite al agente referirse a puntos anteriores en la conversación y/o verificar su comprensión de lo que dijo el cliente. Además, estas transcripciones son increíblemente útiles para aplicaciones posteriores como extracción de temas, extracción de acciones, resumen, análisis de reuniones, etc.

## Y más...

Lo anterior son solo algunas de las formas en que SeaX integra inteligencia de voz avanzada para reducir los tiempos de espera, mejorar el rendimiento del agente y brindar una experiencia general fluida tanto a clientes como a agentes. Para obtener más información sobre las funciones avanzadas que vienen con la plataforma SeaX, esté atento a nuestras próximas publicaciones de blog, que incluyen base de conocimientos de IA, gestión de casos y SMS masivos. Para obtener una demostración personal y discutir cómo la plataforma SeaX puede satisfacer sus necesidades comerciales específicas, complete nuestro [formulario de reserva de demostración](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting).
`;export{e as default};

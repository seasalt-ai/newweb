const e=`---
title: "OpenAI vs. Humano vs. IA de voz: una comparación de costos (5/5)"
metatitle: "OpenAI Realtime API vs. Humano e IA de voz: desglose de costos"
date: 2024-10-12 00:22:19-07:00
modified_date: 2025-07-26T16:48:39Z
draft: false
author: Xuchen Yao
description: "Un análisis detallado de costos de la API en tiempo real de OpenAI en comparación con los recepcionistas humanos y los agentes de IA de voz."
weight: 1
tags:
  - Servicio de contestador automático
  - Llamadas entrantes para pequeñas empresas
  - SeaChat
  - IA de voz
image: /images/blog/101-openai-chatgpt-realtime-api-cost-breakdown/101-openai-chatgpt-realtime-api-cost-breakdown.svg
canonicalURL: /blog/openai-chatgpt-realtime-api-cost-breakdown/
url: /blog/openai-chatgpt-realtime-api-cost-breakdown/
---


*Esta es una serie de 5 artículos que exploran las estrategias de comunicación con el cliente para pequeñas empresas, centrándose en los servicios de contestador:*

<br/>

<center>
<img height="100%" width="80%" style="background-color: #ffffff" src="/images/blog/101-openai-chatgpt-realtime-api-cost-breakdown/series-diagram.svg"  alt="Diagrama de la serie de llamadas entrantes">

</center>

1. [¿Por qué las pequeñas empresas necesitan un servicio de contestador?](https://seasalt.ai/blog/96-why-small-businesses-need-answering-service/): Descubra la importancia y los beneficios de los servicios de contestador.

2. [Subcontratación vs. recepcionistas en vivo internos](https://seasalt.ai/blog/97-live-receptionist-inhouse-outbound/): ¿Qué son los recepcionistas en vivo? ¿Debería subcontratar o contratar internamente?

3. [Sistemas de contestador telefónico automatizados (Respuesta de voz interactiva IVR vs. Agentes de IA de voz)](https://seasalt.ai/blog/98-inbound-answering-automated-system/): ¿Qué es un servicio de contestador automático? ¿Debería usar la respuesta de voz interactiva o los agentes de IA de voz?

4. [Decisión: ¿Deberían mis pequeñas empresas usar recepcionistas en vivo o servicios de contestador automático?](https://seasalt.ai/blog/99-inbound-answering-live-vs-automated/): Ha aprendido todo sobre los servicios de contestador de nuestra serie. Ahora es el momento de decidir qué tipo de servicio es mejor para su negocio.

5. (Este artículo) [OpenAI vs. Humano vs. IA de voz: una comparación de costos](https://seasalt.ai/blog/101-openai-chatgpt-realtime-api-cost-breakdown/): ¿Se pregunta si debería cambiar a la última tecnología de IA de voz? Echemos un vistazo a los costos reales.

---

## TLDR:

1. Tanto OpenAI como los humanos pueden ser **caros**:
   1. La API en tiempo real de OpenAI puede habilitar la experiencia de agente de voz (IA) a aproximadamente **$1 por minuto.**
   2. Los recepcionistas virtuales a pedido (humanos) también tienen un precio de alrededor de **$1 por minuto.**
2. Pero hay opciones **equilibradas** con advertencias:
   1. Cuando se emplean a largo plazo, los agentes humanos con buen inglés pueden costar tan solo $5 por **hora** ($0.08 por minuto).
   2. Los agentes de IA de voz ofrecidos por startups pueden costar tan solo $7.2 por **hora** ($0.12 por minuto).

*Si prefiere escuchar una versión de audio de este artículo, aquí está el video:*

<iframe width="100%" height="400" src="https://www.youtube.com/embed/?v=DgX6F711ceA&list=PL8K7_LTqly46agqJW2quG5Vsylt5os1Al" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>


## Costo real de la API en tiempo real de ChatGPT-4o

OpenAI lanzó su [API en tiempo real](https://openai.com/index/introducing-the-realtime-api/) para ChatGPT-4o el 1 de octubre de 2024. Esto es 5 meses después del lanzamiento de [GPT-4o](https://openai.com/index/hello-gpt-4o/), el primer modelo de lenguaje grande omnicanal. El rendimiento es asombroso. Chatgpt-4o-realtime suena como un humano, responde como un humano y es robusto contra ruidos e interrupciones.

Sin embargo, ¿es asequible Chatgpt-4o-realtime?

A primera vista, la API en tiempo real de OpenAI parece aproximadamente 30 veces más cara que GPT-4o-mini *en texto* (**$5 vs. $0.15** / 1M tokens de entrada).

<br/>

<center>
<div style="background-color: #ffffff;">
<img height="100%" width="100%" src="/images/blog/101-openai-chatgpt-realtime-api-cost-breakdown/October 2024 pricing for chatgpt-4o-mini.png"  alt="Precios de chatgpt-4o-mini en octubre de 2024">
</div>

*Precios de chatgpt-4o-realtime en octubre de 2024*
</center>

<br/>

<center>
<div style="background-color: #ffffff;">
<img height="100%" width="100%" src="/images/blog/101-openai-chatgpt-realtime-api-cost-breakdown/October 2024 pricing for chatgpt-4o-realtime.png"  alt="Precios de chatgpt-4o-realtime en octubre de 2024">
</div>

*Precios de chatgpt-4o-mini en octubre de 2024*
</center>


OpenAI afirma que cuesta aproximadamente $0.06 por minuto para la entrada de audio y $0.24 por minuto para la salida de audio. Sumando esto, sugiere que no debería exceder los $0.30 por minuto, ¿verdad?

Realizamos una prueba en el mundo real de la API 4o-realtime y descubrimos que cuesta aproximadamente $1 por minuto.


<br/>

<center>
<div style="background-color: #ffffff;">
<img height="100%" width="100%" src="/images/blog/101-openai-chatgpt-realtime-api-cost-breakdown/Screenshot of the cost for one test of the ChatGPT-4o Realtime API.png"  alt="Captura de pantalla del costo de una prueba de la API en tiempo real de ChatGPT-4o">
</div>

*Captura de pantalla del costo de una prueba de la API en tiempo real de ChatGPT-4o*
</center>


Realizamos una conversación de voz de 5 minutos con la API chatgpt-4o-realtime y descubrimos que costó $5.38. La conversación de voz de 5 minutos tiene aproximadamente 142 segundos de audio transcrito (piense en ello como entrada de audio), el resto es principalmente salida de audio.

En otra prueba que hicimos, una conversación simple de 10 minutos costó alrededor de $10.

¡Vaya, eso es caro! En realidad, es aproximadamente [10 veces más caro que los propios agentes de voz de Seasalt.ai](https://chat.seasalt.ai/en-us#pricing?utm_source=blog/).

Si algunos desarrolladores solo están probando la API e intentando dedicar un esfuerzo significativo a entrenar un agente de IA de voz que realmente haga algo, ¡pueden gastar fácilmente cientos de dólares en un día!

## API en tiempo real de ChatGPT-4o vs. Agentes humanos – ¿cuál es más asequible?

Entonces, si se construyera un agente de IA de voz usando la API en tiempo real de ChatGPT-4o, costaría alrededor de $1 por minuto, o **$60 por hora**.

### ¿Cuánto cuesta un agente humano?

Si utiliza uno interno, como un recepcionista de mostrador, su salario podría oscilar entre el salario mínimo ($7.25 federal a $16 en California) y quizás $20 a $30 por hora.

Si utiliza una agencia externa, el precio puede variar: algunos comienzan en $349/mes por 200 minutos más una tarifa de configuración. Seasalt.ai ha escrito una encuesta detallada sobre esto: [Costo de los recepcionistas en vivo: internos vs. subcontratación](https://seasalt.ai/blog/97-live-receptionist-inhouse-outbound/?utm_source=crossblog).


<br/>

<center>
<img height="100%" width="100%" src="/images/blog/97-live-receptionist-inhouse-outsourced/vendor-summary.png"  alt="Resumen de proveedores de recepcionistas en vivo">

*Resumen de proveedores de recepcionistas en vivo por Seasalt.ai*
</center>

## API en tiempo real de ChatGPT-4o vs. otros agentes de IA de voz – ¿cuál es la diferencia?

La API en tiempo real de ChatGPT-4o representa un avance significativo en la tecnología de IA de voz, ofreciendo varias diferencias clave en comparación con otros agentes de IA de voz:

- **Capacidad de respuesta**: proporciona interacciones casi en tiempo real, con tiempos de respuesta promedio de 2 a 3 segundos
- **Robustez**: La API permite interrupciones y redireccionamientos durante las conversaciones, lo que permite un flujo de diálogo más natural
- **De extremo a extremo**: la API no requiere unir diferentes componentes, como voz a texto (Azure, Deepgram, etc.) y texto a voz (Azure, Eleven Labs).

Pero la advertencia aquí es el costo: la API en tiempo real de ChatGPT-4o cuesta aproximadamente $1 por minuto, mientras que otros [agentes de IA de voz pueden costar tan solo $0.12 por minuto](https://seasalt.ai/blog/98-inbound-answering-automated-system/?utm_source=crossblog).

<br/>

<center>
<img height="100%" width="100%" src="/images/blog/98-inbound-answering-automated-system/ai-product-comparison.png"  alt="Seasalt.ai vs. Bland AI vs. Smith.ai. Synthflow.ai vs. Retell AI vs. Slang AI vs. Gridspace para agentes de IA de voz">

*Comparación de productos de agentes de IA de voz por Seasalt.ai*
</center>


Hay una diferencia de precio de 10 veces, pero ¿hay una diferencia de rendimiento de 10 veces? Eso lo juzgará el cliente.

## Veredicto

Para los propietarios de negocios, básicamente hay 4 opciones:

1. **Agentes humanos internos**
2. **Subcontratar a una empresa diferente**, ya sea en el país o en el extranjero
3. **Usar un agente de IA de voz asequible**
4. **Construir con la API en tiempo real de OpenAI más avanzada/cara**

A continuación, resumí los diversos pros y contras de las diferentes opciones:

* La **API en tiempo real de OpenAI** ofrece la experiencia más rápida y natural, pero requiere experiencia técnica y es costosa.
* Los **agentes humanos a pedido en tierra** son buenos para tareas básicas en inglés perfecto, pero tienen una integración limitada.
* Los **agentes humanos a largo plazo en el extranjero** son los más asequibles, pero pueden ser poco confiables debido a problemas de infraestructura y alta rotación.
* Los **agentes de IA de voz integrados** ofrecen un equilibrio entre costo, características y facilidad de uso, pero pueden ser un poco menos receptivos y tener peculiaridades de integración.

<br/>

<center>
<img height="100%" width="100%" src="/images/blog/101-openai-chatgpt-realtime-api-cost-breakdown/options-for-phone-answer-services.png"  alt="Diferentes opciones para servicios de contestador telefónico: humanos vs. OpenAI vs. startups de IA de voz">

*Diferentes opciones para servicios de contestador telefónico: humanos vs. OpenAI vs. startups de IA de voz*
</center>

Como profesional en el campo del reconocimiento de voz y el procesamiento del lenguaje natural, mis dos centavos son:

1. Utilice los agentes de IA de voz integrados en el mercado, como [el que construí con orgullo con SeaChat](https://wiki.seasalt.ai/seachat/inbound-voice-agent/tutorial/?utm_source=blog/). Son maduros y asequibles.
2. Dele otro año a la API en tiempo real de OpenAI para que los conejillos de indias la prueben, y con suerte el precio bajará a un más asequible $10/hora, entonces **se volverá realmente asombrosa**. ¡Cuidado, agentes humanos!


## Aprende más
Si desea explorar primero la tecnología de voz de IA para el servicio al cliente a un precio razonable, puede visitar [SeaChat](https://chat.seasalt.ai/?utm_source=blog/) o puede [reservar una demostración con nosotros](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting).


## Acerca de esta serie

*Esta es una serie de 5 artículos que exploran las estrategias de comunicación con el cliente para pequeñas empresas, centrándose en los servicios de contestador:*

- [¿Por qué las pequeñas empresas necesitan un servicio de contestador?](https://seasalt.ai/blog/96-why-small-businesses-need-answering-service/): Descubra la importancia y los beneficios de los servicios de contestador.

- [Subcontratación vs. recepcionistas en vivo internos](https://seasalt.ai/blog/97-live-receptionist-inhouse-outbound/): ¿Qué son los recepcionistas en vivo? ¿Debería subcontratar o contratar internamente?

- [Sistemas de contestador telefónico automatizados (Respuesta de voz interactiva IVR vs. Agentes de IA de voz)](https://seasalt.ai/blog/98-inbound-answering-automated-system/): ¿Qué es un servicio de contestador automático? ¿Debería usar IVR robótico o agentes de IA de voz?

- [Decisión: ¿Deberían mis pequeñas empresas usar recepcionistas en vivo o servicios de contestador automático?](https://seasalt.ai/blog/99-inbound-answering-live-vs-automated/): Ha aprendido todo sobre los servicios de contestador de nuestra serie. Ahora es el momento de decidir qué tipo de servicio es mejor para su negocio.

- (Este artículo) [OpenAI vs. Humano vs. IA de voz: una comparación de costos](https://seasalt.ai/blog/101-openai-chatgpt-realtime-api-cost-breakdown/): La última tecnología de IA de voz de OpenAI es un gran agente de IA de voz. ¿Cuál es el costo real?
`;export{e as default};

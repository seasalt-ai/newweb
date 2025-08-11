const e=`---
title: "Del demo al éxito: Trampas de las reuniones modernas (2/5)"
metatitle: "Del demo al éxito (2/5): Trampas de las reuniones modernas"
date: 2021-07-30
draft: false
author: Cody Kim
description: "En la segunda parte de esta serie de blogs, siga el viaje de Seasalt.ai para crear SeaMeet, nuestra solución colaborativa de reuniones modernas."
weight: 1
tags:
  - SeaMeet
image: images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/SeaMeet animation.gif
canonicalURL: /blog/seameet-voice-and-microsoft-modern-meetings/
url: /blog/seameet-voice-and-microsoft-modern-meetings/
---

*A lo largo de esta serie de blogs, siga el viaje de Seasalt.ai para crear una experiencia de reuniones modernas completa, comenzando con sus humildes inicios, optimizando nuestro servicio en diferentes hardware y modelos, integrando sistemas de PNL de última generación y, finalmente, culminando en la realización completa de SeaMeet, nuestra solución colaborativa de reuniones modernas.*

## Trampas de las reuniones modernas

Durante nuestro desarrollo, encontramos muchos obstáculos impredecibles sin causas o soluciones claras.

### Un inicio rápido

El primer obstáculo fue hacer que nuestras herramientas funcionaran. Azure proporcionó una muestra de Reuniones Modernas que nos alegró que fuera compatible con Linux, pero descubrimos que usar el SDK en Windows para ejecutar la demostración era mucho más fácil, bueno, después de todo, era un producto de Microsoft. Después de muchos intentos fallidos de hacer que la muestra proporcionada se ejecutara en Linux, finalmente tuvimos que abandonar ese camino y recurrir a Windows. Finalmente, tuvimos un transcriptor de voz funcional, lo que fue un tremendo comienzo.

### Latencia

Un problema que experimentamos fue un retraso de aproximadamente cinco segundos en la recepción de nuestros resultados de reconocimiento en la interfaz de usuario. Si bien 5 segundos pueden parecer bastante rápidos, este retraso es notablemente unos segundos demasiado lento para ser una solución conveniente y práctica, especialmente para la comunicación en tiempo real.

<center>
<img src="/images/blog/4-seameet-voice-intelligence-meeting-transcription-pitfalls-of-microsoft-modern-meetings/default_ui.png" style="width:400px;" alt="La interfaz de usuario predeterminada para la transcripción de voz por el SDK de voz de Azure"/>

*La interfaz de usuario predeterminada para la transcripción de voz proporcionada por el SDK de voz de Azure*
</center>

La latencia también fue un problema grave en el back-end. Al comienzo de cada reunión, los resultados llegaban en tiempo real (¡como se anunciaba!), pero a medida que la reunión avanzaba, la latencia se disparaba periódicamente hasta treinta segundos antes de que el texto apareciera en los monitores. Para entonces, lo que se había dicho ya había dejado de ser relevante en la conversación. Después de innumerables pruebas, comenzamos a notar que la latencia cambiaba a lo largo del día, lo que atribuimos a la carga del servidor de Azure en ese momento. Estamos en el negocio de crear un producto consistente y confiable, por lo que estos retrasos fluctuantes e impredecibles eran inaceptables. Más razón aún para confiar en nuestros propios modelos y servidores.

### Dialecto

Una razón particular por la que usamos Azure Speech Service en primer lugar fue su amplio soporte para una gran variedad de idiomas y dialectos. Estábamos particularmente emocionados de utilizar el modelo de inglés de Singapur de Azure Speech Service. Pero imagine nuestra sorpresa al descubrir que, para el dialecto de Singapur, el modelo de inglés de EE. UU. superó consistentemente al modelo de inglés de Singapur. Además, incluso el mejor modelo no estuvo a la altura de los desafíos del mundo real.

<center>
<img src="/images/blog/4-seameet-voice-intelligence-meeting-transcription-pitfalls-of-microsoft-modern-meetings/bad_result.png"/>

*Transcripción resultante de "¡Felicidades! ¿Niño o niña?"*
</center>

Estábamos viendo resultados como “ola regulations may be boiled baby cool” cuando la expresión era realmente “¡Felicidades! ¿Niño o niña?”. Un modelo de lenguaje bien entrenado debería haber eliminado tal transcripción. Si bien este es un ejemplo extremo, la mayoría de las veces, habría un error en cada transcripción. No importa cuán pequeño sea el error, como un artículo faltante o una palabra mal entendida, cualquier error es una distracción y puede arruinar fácilmente la reputación de un servicio de transcripción.

### Actualización de Windows

Unas semanas después, el equipo había pasado noches y noches asegurándose de que nuestro producto estuviera listo para la demostración de nuestro cliente en solo unos días. Nuestro transcriptor de reuniones funcionó sin problemas en tres computadoras portátiles con Windows separadas. Luego, un día, de la nada, nos quedamos con solo una computadora funcionando, aunque nadie había tocado el código. Probamos nuestras redes, revisamos nuestros firewalls, todo lo que se nos ocurrió que podría causar repentinamente que nuestro producto fallara. Nuestra última suposición fue que una actualización sorpresa de Windows hizo que el SDK de voz de Azure se volviera inexplicablemente incompatible con dos de nuestras computadoras cuando comparamos los tres sistemas bit a bit. Con nuestra exhibición acercándose rápidamente, el estrés y la tensión estaban en un punto de ruptura. Con solo un sistema restante, el equipo hizo un pacto: no cambiar el código y absolutamente ninguna actualización. Después de esta prueba, tuvimos suficiente.

### Más allá de las reuniones modernas

Para escapar de estas obstrucciones, el equipo de Seasalt.ai se propuso entrenar sus propios modelos acústicos y de lenguaje para rivalizar con las capacidades del transcriptor conversacional de Azure. Durante todo el proceso, seguimos haciéndonos la pregunta: ¿hacia dónde vamos desde aquí? ¿Cómo podemos expandir este producto ya instrumental?

Las reuniones modernas demostraron un sólido potencial de voz a texto, pero ahí es donde se detiene. Puede escucharnos, pero ¿qué pasaría si pudiéramos hacer que pensara por nosotros? Con solo transcripciones, si bien el producto es impresionante, las aplicaciones son algo limitadas. Pasar de la transcripción de voz a la inteligencia de voz abre las puertas de par en par a lo que podemos crear. Ejemplos de inteligencia incluyen resúmenes de reuniones, abstracción de temas y extracción de acciones. Finalmente, diseñar una hermosa interfaz para unir todo en un paquete impresionante.

Esta es la historia hasta ahora, el comienzo del viaje de Seasalt.ai para llevar las mejores soluciones de negocios a un mercado en rápida evolución y entregarlas al mundo. Si desea saber más detalles, continúe leyendo el resto de la serie de blogs.
`;export{e as default};

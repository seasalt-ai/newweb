const e=`---
title: "Del Demo al Éxito: Más allá del Hardware (5/5)"
metatitle: "Del Demo al Éxito (5/5): Más allá del Hardware"
date: 2021-09-15 17:24:32-07:00
modified_date: 2025-07-28T16:56:53Z
draft: false
author: Cody Kim
description: "En la última parte de esta serie de blogs, siga el viaje de Seasalt.ai para crear SeaMeet, nuestras soluciones colaborativas de reuniones modernas."
weight: 1
tags:
  - SeaMeet
image: images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/SeaMeet animation.gif
canonicalURL: /blog/seameet-voice-hardware/
url: /blog/seameet-voice-hardware/
---

*A lo largo de esta serie de blogs, siga el viaje de Seasalt.ai para crear una experiencia de reuniones modernas completa, comenzando con sus humildes comienzos, hasta la optimización de nuestro servicio en diferentes hardware y modelos, hasta la integración de sistemas de PNL de última generación y finalmente terminando en la realización completa de SeaMeet, nuestras soluciones colaborativas de reuniones modernas.*

## Más allá de las reuniones modernas

Aquí en Seasalt.ai, admiramos las capacidades actuales mostradas en la demostración de Build 2019 de este producto, pero estamos más interesados en ver en qué podría convertirse este producto, cómo llevar la transcripción de conversaciones más allá de la imitación. Pero antes de poder vencer a la competencia, primero debe comprender íntimamente el juego que está jugando. Y así nació SeaMeet. En sus inicios, miramos a Azure como un modelo para comprender los fundamentos de lo que hace un servicio de transcripción sólido y utilizamos los servicios de voz de Azure como nuestro backend para utilizar esta tecnología establecida.

Al igual que con cualquier producto joven, surgieron desafíos de inmediato. Ansiosos por lanzar nuestro producto, optamos por utilizar la matriz de micrófonos Microsoft Kinect DK, promocionada como el equivalente de hardware de los servicios de voz y supuestamente ajustada para obtener el rendimiento más óptimo de los modelos de reconocimiento automático de voz de Azure. Aunque es un dispositivo innegablemente bien construido y bien diseñado, viene con una carcasa de aluminio completa, una lente gran angular, una cámara de profundidad y una matriz de 7 micrófonos. También tiene un precio elevado de poco menos de $400. A partir de abril de 2021, el Kinect DK tuvo un grave problema de escasez de existencias. Todavía está agotado a la fecha de hoy, septiembre de 2021. Esto reforzó aún más que el Kinect no es el dispositivo para nosotros.

<center>
<img src="/images/blog/7-seameet-voice-intelligence-meeting-transcription-hardware/kinect_store_page.png"/>

*El Azure Kinect DK había estado agotado desde el 2021/4 cuando se publicó este artículo (2021/9)*
</center>

La matriz de micrófonos es el primer componente en la tubería de transcripción de conversaciones. Como proveedores de un servicio de transcripción, necesitamos poder obtener nuestro hardware de manera sostenible y confiable.

Nuestro viaje para encontrar la matriz de micrófonos perfecta nos llevó a dos opciones: el [Respeaker Array v2.0](https://www.seeedstudio.com/ReSpeaker-Mic-Array-v2-0.html) y el [Respeaker Core v2.0](https://www.seeedstudio.com/ReSpeaker-Core-v2-0.html). Ambos dispositivos son matrices circulares, de cuatro y seis micrófonos respectivamente, lo cual es una característica crucial para poder realizar la localización de fuentes de 360 grados y permitirnos integrar fácilmente estos nuevos dispositivos en nuestro sistema existente. La verdadera belleza de estos dispositivos es que vienen con algoritmos de procesamiento de señales integrados que incluyen reducción de ruido, cancelación de eco y formación de haces que están perfectamente ajustados a las dimensiones del micrófono.

<center>
<img src="/images/blog/7-seameet-voice-intelligence-meeting-transcription-hardware/respeaker_array.png" alt="Respeaker Array v2.0 demostrando VAD y localización de fuentes"/>

*Respeaker Array v2.0 demostrando VAD y localización de fuentes*
</center>

<center>
<img src="/images/blog/7-seameet-voice-intelligence-meeting-transcription-hardware/array_demo.jpg" alt="Demostración de reunión en vivo con el Respeaker Array v2.0"/>

*Demostración de reunión en vivo con el Respeaker Array v2.0*
</center>

Para la matriz de cuatro micrófonos Array v2.0, que se alimentaba completamente a través de un puerto USB, esto significaba que la computadora del usuario solo tenía que concentrarse en transmitir el audio al servidor. Esto descarga el procesamiento de la señal a la matriz de micrófonos.


<center>
<img src="/images/blog/7-seameet-voice-intelligence-meeting-transcription-hardware/core_demo.png" alt="Respeaker Core v2.0 fotografiado con demostración"/>

*Respeaker Core v2.0 fotografiado con demostración*
</center>

Aún más convincente es el Core v2.0 equipado con un procesador ARM y 1 GB de RAM. Capaz de ejecutar una distribución completa de Linux y con suficiente potencia de procesamiento para ejecutar nuestro script de cliente, no solo hemos descargado el procesamiento de la computadora del usuario con este dispositivo, sino que hemos eliminado por completo la necesidad de tener una computadora conectada al micrófono. Debido a que las matrices de micrófonos ahora realizan el procesamiento pesado, disminuimos los requisitos de hardware necesarios para ejecutar nuestro producto y, por lo tanto, aumentamos efectivamente nuestra audiencia que puede beneficiarse de SeaMeet.

<center>
<img src="/images/blog/7-seameet-voice-intelligence-meeting-transcription-hardware/respeaker_core.png" alt="Ejemplo de Core v2.0 de colocación de micrófono independiente"/>

*Ejemplo de Core v2.0 de colocación de micrófono independiente*
</center>

Otra característica única de estas matrices de micrófonos es la falta de carcasa. Ambas se envían como PCB desnudos con los micrófonos, chips y puertos expuestos. Si bien muchos lo verán como un inconveniente, nosotros vemos una oportunidad para crear un dispositivo verdaderamente único que sea inconfundiblemente de Seasalt.

    Con estos dispositivos, cerramos el círculo de nuestro prototipo de SeaMeet, nuestro nuevo y vanguardista servicio de transcripción de reuniones. Y con esto concluimos nuestra serie de cinco partes, comenzando cuando SeaMeet no era más que una semilla inspirada en una demostración de Microsoft, y terminando con un producto completamente independiente. Todavía en sus primeras etapas, SeaMeet tiene un emocionante viaje por delante mientras continuamos puliendo nuestro sistema de diarización, sentido de reunión y modelos de lenguaje. El equipo de Seasalt.ai está ansioso por seguir revolucionando la forma en que el mundo hace negocios.
`;export{e as default};

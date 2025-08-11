const e=`---
title: "Lleve a los clientes de cualquier canal a un solo lugar con la comunicación omnicanal de SeaX"
metatitle: "Unifique los puntos de contacto con el cliente con la comunicación omnicanal de SeaX"
date: 2022-07-15 13:56:54-07:00
modified_date: 2025-08-02 17:00:00-07:00
draft: false
author: Kim Dodds
description: "En este blog, destacamos una de las comunicaciones omnicanal de SeaX, que permite que los mensajes de los usuarios de cualquier canal se muestren en la plataforma SeaX."
weight: 1
tags:
  - SeaX
image: images/blog/19-seax-omnichannel-communication/0-thumbnail.png
canonicalURL: /blog/seax-omnichannel-communication/
url: /blog/seax-omnichannel-communication/
---

*En nuestra publicación de blog anterior, [Bienvenido a SeaX, un centro de contacto en la nube colaborativo](https://seasalt.ai/blog/18-seax-collaborative-cloud-contact-center-introduction/), presentamos SeaX, nuestra solución de centro de contacto de comunicaciones en la nube colaborativa. Si bien nuestra primera publicación de blog brindó una descripción general completa de las características básicas y más avanzadas de SeaX, nuestras publicaciones posteriores profundizarán en algunas de las características individuales que hacen que SeaX se destaque. En esta publicación, analizaremos más de cerca el soporte omnicanal de SeaX y veremos cómo las llamadas y los mensajes de diferentes canales aparecen en la plataforma SeaX.*

# Tabla de contenido
- [¿Qué es la comunicación omnicanal?](#what-is-omnichannel-communication)
- [Ciclo de vida del mensaje](#message-lifecycle)
    - [Canal](#channel)
    - [Enrutamiento de mensajes](#message-routing)
    - [TaskRouter](#taskrouter)
    - [Plataforma SeaX](#seax-platform)
- [Canales compatibles](#supported-channels)

# ¿Qué es la comunicación omnicanal?

Primero, ¿qué significa exactamente "omnicanal"? Desglosado, "omni" es un prefijo que significa "todo", y "canal" son las diversas plataformas en las que puede interactuar con sus clientes. Entonces, en pocas palabras, "comunicación omnicanal" significa poder comunicarse a través de todos y cada uno de los canales disponibles. No solo eso, sino que la comunicación omnicanal también significa que la experiencia entre canales es perfecta. Del lado del agente, las comunicaciones de todos los canales se presentan en una interfaz unificada. Para el cliente, sus datos de interacción son persistentes en todos los canales.

Los centros de llamadas tradicionales a menudo solo admiten llamadas telefónicas. Los centros de contacto más avanzados que se comunican con los clientes a través de múltiples canales, como correo electrónico, chat web y teléfono, tienen un centro de contacto multicanal. Sin embargo, el hecho de que un centro de contacto utilice múltiples canales no significa que su experiencia sea perfecta. En un centro de contacto multicanal, se puede acceder a diferentes canales a través de plataformas separadas y/o los datos de los clientes pueden no estar vinculados entre canales. Por el contrario, un centro de contacto omnicanal permite a los agentes realizar un seguimiento de las conversaciones de los clientes dondequiera que vayan, sin estar encerrados en un solo canal o distribuidos en una docena de plataformas.

<center>
<img src="/images/blog/19-seax-omnichannel-communication/1-contact-center-comparison.png" alt="Comparación de características: centro de llamadas tradicional frente a centro de contacto; multicanal frente a omnicanal."/>

*Comparación de características: centro de llamadas tradicional frente a centro de contacto; multicanal frente a omnicanal.*
</center>

SeaX puede integrarse con prácticamente cualquier canal, incluidos, de forma predeterminada: texto, teléfono, chat web, Facebook y más. Todos los mensajes y llamadas se muestran en una plataforma unificada y los datos de los usuarios de todos los canales están disponibles.

Si desea ir directamente a la demostración, vea nuestro breve video en el que demostramos la comunicación omnicanal de SeaX. En el resto de este blog, explicaremos paso a paso cómo se enrutan los mensajes y las llamadas de varios canales a un agente en SeaX. También compartiremos los canales compatibles listos para usar y discutiremos cómo se puede ampliar SeaX para cubrir nuevos canales.

<iframe width="85%" height="450px" src="https://www.youtube.com/embed/usb-RK7sHlA" title="Reproductor de video de YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

# Ciclo de vida del mensaje

SeaX se basa en [Twilio Flex](https://www.twilio.com/flex), un centro de contacto basado en la nube que utiliza la plataforma de comunicaciones en la nube de Twilio. Twilio proporciona los componentes básicos para SeaX, como la infraestructura de telecomunicaciones, el enrutamiento de mensajes y tareas, y una interfaz de usuario de centro de contacto básica. Ahora sigamos el ciclo de vida de un mensaje de usuario entrante y veamos cómo SeaX utiliza la arquitectura básica de Twilio en combinación con componentes personalizados para enrutar el mensaje a un agente en vivo en la plataforma SeaX.

## Canal

<center>
<img src="/images/blog/19-seax-omnichannel-communication/2-example-message.jpg" alt="Un usuario envía un mensaje a una empresa a través de Google Business Messages." style="width:50%"/>

*Enviar un mensaje a una empresa a través de Google Business Messages.*
</center>

El viaje de un mensaje comienza con un usuario que redacta y envía un mensaje en una plataforma compatible. El ejemplo anterior muestra a alguien enviando un mensaje a un chatbot de Seasalt.ai en Google Business Messages. De forma predeterminada, Twilio no es compatible con Google Business Messages, por lo que utilizamos un conector de canal personalizado desarrollado por Seasalt.ai para conectar la plataforma de Google a Twilio y SeaX.

Una vez que se envía el mensaje, el conector personalizado lo pasa a la API de mensajería de Twilio. En este punto, Twilio crea un nuevo contexto de conversación para el usuario y se prepara para enrutar el mensaje.

## Enrutamiento de mensajes

<center>
<img src="/images/blog/19-seax-omnichannel-communication/3-studio-flow.png" alt="Un flujo de estudio simple que enruta los mensajes a un chatbot o a un agente en vivo."/>

*Un flujo de estudio simple que enruta los mensajes a un chatbot o a un agente en vivo.*
</center>

Una vez que Twilio recibe el mensaje, debe enrutarse al lugar correcto. Para hacer esto, usamos [Twilio Studio Flows](https://www.twilio.com/studio) para determinar si dar una respuesta automática, reenviar el mensaje a un chatbot, conectar al usuario con un agente en vivo o realizar alguna otra acción.

En el ejemplo simple proporcionado anteriormente, todos los mensajes entrantes se reenviarán a un chatbot a menos que incluyan la frase "agente en vivo", en cuyo caso el usuario será transferido a un agente en vivo en la plataforma SeaX.

## TaskRouter

<center>
<img src="/images/blog/19-seax-omnichannel-communication/4-taskrouter.png" alt="Diagrama de arquitectura de TaskRouter."/>

*Diagrama de arquitectura de TaskRouter. [Fuente](https://twilio-cms-prod.s3.amazonaws.com/images/taskrouter-diagram.width-800.png).*
</center>

Después de que el mensaje se transfiere a SeaX, el siguiente paso es decidir qué agente lo recibirá. [TaskRouter de Twilio](https://www.twilio.com/taskrouter) asigna tareas como mensajes y llamadas telefónicas al agente en SeaX que esté mejor equipado para manejarlas. A cada agente en SeaX se le pueden asignar habilidades, como qué idiomas hablan, en qué departamento trabajan, si deben atender a clientes VIP, etc. TaskRouter verificará la información conocida sobre el usuario y el mensaje y luego seleccionará al empleado más apropiado para manejar el problema. El flujo de Studio del paso anterior se puede personalizar para obtener información adicional (como el idioma preferido), y la información del cliente se puede conservar en todas las conversaciones y canales para garantizar que su experiencia sea perfecta.

## Plataforma SeaX

<center>
<img src="/images/blog/19-seax-omnichannel-communication/5-seax-incoming-messages.png" alt="Las llamadas y los mensajes entrantes aparecen en la plataforma SeaX." style="width:50%"/>

*Las llamadas y los mensajes entrantes aparecen en la plataforma SeaX.*
</center>

Finalmente, el mensaje entrante se presentará al agente apropiado en la plataforma SeaX. Los agentes pueden manejar múltiples tareas de múltiples canales a la vez. En la imagen de arriba, un agente tiene una llamada entrante, un mensaje de Facebook y un mensaje de chat web. El agente puede aceptar la tarea o rechazarla para pasarla al siguiente agente disponible.

# Canales compatibles

Con suerte, ahora está más claro qué es la comunicación omnicanal y cómo mejora la experiencia tanto del usuario como del agente. La última pregunta es: ¿qué canales son compatibles de fábrica?

<center>
<img src="/images/blog/19-seax-omnichannel-communication/6-channel-comparison.png" alt="Comparación de canales compatibles entre un centro de llamadas tradicional, Twilio Flex básico y SeaX."/>

*Comparación de canales compatibles entre un centro de llamadas tradicional, Twilio Flex básico y SeaX.*
</center>

Como se mencionó anteriormente, los centros de llamadas tradicionales a menudo solo admiten llamadas telefónicas. Es posible que las empresas aún interactúen con los clientes a través de las redes sociales или el correo electrónico, pero estos mensajes no están integrados en una plataforma unificada.

Twilio Flex, por otro lado, sienta las bases para un excelente centro de contacto omnicanal. Sin embargo, tiene muy pocos canales listos para usar. Además de las llamadas telefónicas y los SMS, tienen soporte beta para Facebook, WhatsApp y correo electrónico.

SeaX se basa en Flex y agrega soporte integrado para algunos de los canales más solicitados: como Google Business Messages, Discord, Line e Instagram. Además, Seasalt.ai siempre está trabajando con los clientes para incorporar nuevos canales a la línea de productos SeaX. SeaX es altamente personalizable y fácilmente ampliable, lo que significa que podemos trabajar con su empresa para integrar cualquier canal que más desee.

Gracias por tomarse el tiempo de leer cómo el centro de contacto en la nube de SeaX aprovecha la comunicación omnicanal para brindar una experiencia perfecta para el cliente y el agente. Estén atentos a nuestra próxima publicación de blog, que explorará lo que significa ser un "centro de contacto distribuido". Si está interesado en obtener más información ahora, complete nuestro [formulario de solicitud de demostración](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting) para experimentar la plataforma SeaX de primera mano.`;export{e as default};

---
title: "Lleve a los clientes de cualquier canal a un solo lugar con la comunicación omnicanal de SeaX"
metatitle: "Unifique el contacto con el cliente con la comunicación omnicanal de SeaX"
date: 2022-07-15T13:56:54-07:00
author: Kim Dodds 
draft: false
image: images/blog/19-seax-omnichannel-communication/0-thumbnail.png
description: "En este blog nos centramos en una de las comunicaciones omnicanal de SeaX, que permite que los mensajes de los usuarios de cualquier canal se muestren en la plataforma SeaX."
weight: 1
tags: ["SeaX"]
canonicalURL: "/blog/seax-omnichannel-communication/"
url: "/blog/seax-omnichannel-communication/"
---

*En nuestra publicación de blog anterior, [Bienvenido a SeaX, un centro de contacto colaborativo en la nube](https://seasalt.ai/blog/18-seax-collaborative-cloud-contact-center-introduction/), presentamos nuestra solución de centro de contacto de comunicación colaborativa en la nube, SeaX. Si bien nuestra primera publicación de blog brindó una descripción general completa de la funcionalidad básica y las características más avanzadas de SeaX, nuestras publicaciones posteriores profundizarán en algunas de las características individuales que hacen que SeaX se destaque. En esta publicación, analizaremos más de cerca el soporte omnicanal de SeaX y veremos cómo las llamadas y los mensajes de varios canales se muestran en la plataforma SeaX.*

# Tabla de Contenidos
- [¿Qué es la comunicación omnicanal?](#what-is-omnichannel-communication)
- [Ciclo de vida del mensaje](#message-lifecycle)
    - [Canal](#channel)
    - [Enrutamiento de mensajes](#message-routing)
    - [TaskRouter](#taskrouter)
    - [Plataforma SeaX](#seax-platform)
- [Canales compatibles](#supported-channels)

# ¿Qué es la comunicación omnicanal?

Para empezar, ¿qué significa realmente “omnicanal”? Para desglosarlo, “omni” es un prefijo que significa “todo”, y “canales” son las diversas plataformas a través de las cuales puede interactuar con sus clientes. Así que, en pocas palabras, “comunicación omnicanal” significa la capacidad de comunicarse a través de todos y cada uno de los canales disponibles. Y más que eso, la comunicación omnicanal significa que la experiencia entre canales es fluida. Por parte del agente, la comunicación de todos los canales se presenta en una interfaz unificada. Para el cliente, sus datos de interacción persisten en todos los canales.

Un centro de llamadas tradicional normalmente solo admite llamadas telefónicas. Los centros de contacto más avanzados que se conectan con los clientes a través de múltiples canales (como correo electrónico, chat web y teléfono) tienen un centro de contacto multicanal. Sin embargo, el hecho de que un centro de contacto utilice múltiples canales no significa que su experiencia sea fluida. En los centros de contacto multicanal, se puede acceder a los diferentes canales a través de plataformas individuales y/o los datos del cliente pueden no estar vinculados entre canales. Por el contrario, el centro de contacto omnicanal permite a los agentes seguir una conversación con el cliente dondequiera que vaya, sin estar bloqueados en un canal o distribuidos en docenas de plataformas.

<center>
<img src="/images/blog/19-seax-omnichannel-communication/1-contact-center-comparison.png" alt="Comparación de características: centro de llamadas tradicional vs centro de contacto; multicanal vs omnicanal."/>

*Comparación de características: centro de llamadas tradicional vs centro de contacto; multicanal vs omnicanal.*
</center>

SeaX tiene la capacidad de integrarse con prácticamente cualquier canal, incluyendo por defecto: texto, teléfono, chat web, Facebook y más. Todos los mensajes y llamadas se muestran en una plataforma unificada, y los datos de usuario de todos los canales están fácilmente disponibles.

Si desea ir directamente a una demostración, eche un vistazo a nuestro breve video que demuestra la comunicación omnicanal de SeaX. En el resto de este blog, le explicaremos cómo se enrutan los mensajes y las llamadas desde varios canales a los agentes en SeaX. También compartiremos los canales que se admiten de forma predeterminada y discutiremos cómo se puede extender SeaX para cubrir nuevos canales.

<iframe width="85%" height="450px" src="https://www.youtube.com/embed/usb-RK7sHlA" title="Reproductor de video de YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

# Ciclo de vida del mensaje

SeaX está construido sobre [Twilio Flex](https://www.twilio.com/flex), un centro de contacto basado en la nube que utiliza la plataforma de comunicaciones en la nube de Twilio. Twilio proporciona los bloques de construcción básicos para SeaX, como la infraestructura de telecomunicaciones, el enrutamiento de mensajes y tareas, y una interfaz de usuario básica del centro de contacto. Ahora, rastreemos el ciclo de vida de un mensaje de usuario entrante y veamos cómo SeaX utiliza la arquitectura básica de Twilio combinada con componentes personalizados para enrutar el mensaje al agente en vivo en la plataforma SeaX.

## Canal

<center>
<img src="/images/blog/19-seax-omnichannel-communication/2-example-message.jpg" alt="El usuario envía un mensaje a una empresa a través de Google Business Messages.", style="width:50%"/>

*Enviando un mensaje a una empresa a través de Google Business Messages.*
</center>

El viaje de un mensaje comienza con el usuario escribiendo el mensaje y enviándolo en una plataforma compatible. El ejemplo anterior muestra a alguien enviando un mensaje al chatbot Seasalt.ai en Google Business Messages. Google Business Messages no es compatible con Twilio por defecto, por lo que utilizamos un conector de canal personalizado desarrollado por Seasalt.ai para conectar la plataforma de Google con Twilio y SeaX.

Una vez que se envía el mensaje, el conector personalizado lo entrega a la API de mensajería de Twilio. En este punto, Twilio crea un nuevo contexto de conversación para el usuario y se prepara para enrutar el mensaje.

## Enrutamiento de mensajes

<center>
<img src="/images/blog/19-seax-omnichannel-communication/3-studio-flow.png" alt="Un Studio Flow simple que enruta mensajes a un chatbot o a un agente en vivo."/>

*Un Studio Flow simple que enruta mensajes a un chatbot o a un agente en vivo.*
</center>

Una vez que Twilio ha recibido el mensaje, debe ser enrutado al lugar correcto. Para este propósito, utilizamos [Twilio Studio Flows](https://www.twilio.com/studio) para determinar si proporcionar una respuesta automatizada, reenviar el mensaje a un chatbot, conectar al usuario con un agente en vivo o realizar alguna otra acción.

En el ejemplo simple proporcionado anteriormente, todos los mensajes entrantes se reenviarán a un chatbot a menos que contengan las palabras "agente en vivo", en cuyo caso el usuario será transferido a un agente en vivo en la plataforma SeaX.

## TaskRouter

<center>
<img src="/images/blog/19-seax-omnichannel-communication/4-taskrouter.png" alt="Diagrama de la arquitectura de TaskRouter."/>

*Diagrama de la arquitectura de TaskRouter. [Fuente](https://twilio-cms-prod.s3.amazonaws.com/images/taskrouter-diagram.width-800.png).*
</center>

Una vez que un mensaje se transfiere a SeaX, el siguiente paso es decidir qué agente lo recibirá. El [TaskRouter de Twilio](https://www.twilio.com/taskrouter) distribuye tareas como mensajes y llamadas telefónicas a los agentes en SeaX que mejor pueden manejarlas. A cada agente en SeaX se le pueden asignar habilidades como los idiomas que hablan, el departamento en el que trabajan, si deben atender a clientes VIP, etc. El TaskRouter verificará la información conocida sobre el usuario y el mensaje y luego seleccionará al trabajador más apropiado para manejar el problema. El Studio Flow del paso anterior se puede personalizar para obtener información adicional (como el idioma preferido) y la información del cliente se puede mantener en todas las conversaciones y canales para garantizar que su experiencia sea fluida.

## Plataforma SeaX

<center>
<img src="/images/blog/19-seax-omnichannel-communication/5-seax-incoming-messages.png" alt="Llamadas y mensajes entrantes que aparecen en la plataforma SeaX.", style="width:50%"/>

*Llamadas y mensajes entrantes que aparecen en la plataforma SeaX.*
</center>

Finalmente, el mensaje entrante se mostrará al agente apropiado en la plataforma SeaX. Los agentes pueden manejar múltiples tareas de múltiples canales simultáneamente. En la imagen de arriba, un agente tiene una llamada entrante, un mensaje de Facebook y un mensaje de chat web. El agente puede aceptar la tarea o rechazarla para que se pase al siguiente agente disponible.

# Canales compatibles

Esperemos que ahora esté más claro qué es la comunicación omnicanal y cómo mejora la experiencia del usuario y del agente. La pregunta final es: ¿qué canales son realmente compatibles de forma predeterminada?

<center>
<img src="/images/blog/19-seax-omnichannel-communication/6-channel-comparison.png" alt="Comparación de canales compatibles entre el centro de llamadas tradicional, Twilio Flex básico y SeaX."/>

*Comparación de canales compatibles entre el centro de llamadas tradicional, Twilio Flex básico y SeaX.*
</center>

Como se mencionó anteriormente, un centro de llamadas tradicional normalmente solo admite llamadas telefónicas. Las empresas aún pueden interactuar con los clientes en las redes sociales o por correo electrónico, pero estos mensajes no están integrados en una plataforma unificada.

Twilio Flex, por otro lado, sienta las bases para un fantástico centro de contacto omnicanal. Sin embargo, tiene pocos canales disponibles de forma predeterminada. Además de las llamadas telefónicas y los mensajes de texto, también tienen soporte beta para Facebook, WhatsApp y correo electrónico.

SeaX se basa en Flex para agregar soporte integrado para algunos de los canales más solicitados: como Google Business Messages, Discord, Line e Instagram. Además, Seasalt.ai siempre está trabajando con los clientes para incorporar nuevos canales a la línea de SeaX. SeaX es altamente personalizable y fácilmente extensible, lo que significa que podemos trabajar con su empresa para integrar cualquier canal que más desee.

Gracias por tomarse el tiempo de leer sobre cómo el centro de contacto en la nube de SeaX utiliza la comunicación omnicanal para brindar una experiencia fluida al cliente y al agente. Esté atento a nuestra próxima publicación de blog, que explorará lo que significa ser un "centro de contacto distribuido". Si está interesado en obtener más información de inmediato, complete nuestro [formulario de reserva de demostración](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting) para ver de primera mano la plataforma SeaX.

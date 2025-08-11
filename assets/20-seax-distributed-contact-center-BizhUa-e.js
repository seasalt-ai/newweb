const e=`---
title: "Expanda la huella de su centro de contacto con un centro de contacto distribuido"
metatitle: "Expanda su huella con un centro de contacto distribuido"
date: 2022-07-27 21:46:45+00:00
modified_date: 2025-07-28T16:56:53Z
draft: false
author: Sarah Reid
description: "En este blog, analizaremos los centros de contacto 'distribuidos': qué son, cómo pueden beneficiarle y cómo SeaX los utiliza para servir mejor a nuestros clientes."
weight: 1
tags:
  - SeaX
image: images/blog/20-seax-distributed-contact-center/0-main.png
canonicalURL: /blog/seax-distributed-contact-center/
url: /blog/seax-distributed-contact-center/
---

*En nuestra publicación de blog anterior, [Lleve a los clientes de cualquier canal a un solo lugar con la comunicación omnicanal de SeaX](https://seasalt.ai/blog/19-seax-omnichannel-communication/), mostramos el poder de la comunicación omnicanal en la plataforma SeaX, que permite que los mensajes de los usuarios de prácticamente cualquier canal se muestren en la plataforma SeaX. En esta publicación, analizaremos los centros de contacto "distribuidos": qué son, cómo pueden beneficiarle y cómo SeaX aprovecha una plataforma distribuida para servir mejor a nuestros clientes.*

# Tabla de Contenidos
- [¿Qué es un centro de contacto “distribuido”?](#qué-es-un-centro-de-contacto-distribuido)
- [¿Qué beneficios tiene un centro de contacto “distribuido”?](#qué-beneficios-tiene-un-centro-de-contacto-distribuido)
- [¿Qué desafíos tiene un centro de contacto “distribuido”?](#qué-desafíos-tiene-un-centro-de-contacto-distribuido)
- [¿Cómo resuelve SeaX estos problemas?](#cómo-resuelve-seax-estos-problemas)
    - [Enrutamiento de llamadas a ubicaciones y agentes distribuidos](#enrutamiento-de-llamadas-a-ubicaciones-y-agentes-distribuidos)
    - [Configuración de la disponibilidad de la ubicación distribuida](#configuración-de-la-disponibilidad-de-la-ubicación-distribuida)
    - [Personalizar la mensajería de ubicación distribuida](#personalizar-la-mensajería-de-ubicación-distribuida)

# ¿Qué es un centro de contacto “distribuido”?
En el nivel más simple, un centro de contacto distribuido es un centro de contacto que existe en más de una ubicación, a diferencia del centro de contacto tradicional de una sola ubicación. Esto podría ser un centro de contacto con múltiples oficinas, o múltiples ubicaciones en diferentes países, o incluso un centro de contacto sin ubicación física donde todos los agentes trabajan de forma remota. Sin embargo, los centros de contacto distribuidos aún necesitan operar como los centros de contacto tradicionales de una sola ubicación, brindando una experiencia fluida para todos los involucrados. Para los agentes, esto significa ser compatibles con una sola plataforma sin importar dónde se encuentren. Para el cliente, esto significa estar correctamente conectado a la ubicación y al agente apropiados según sus necesidades.

# ¿Qué beneficios tiene un centro de contacto “distribuido”?
Los centros de contacto distribuidos tienen una serie de beneficios sobre los centros de contacto tradicionales, especialmente en términos de su alcance y cobertura. Tener agentes en múltiples zonas horarias asegura que los clientes puedan comunicarse con usted cuando necesiten ayuda. Con los centros de contacto tradicionales, los clientes están limitados a llamar durante un horario de atención establecido, lo que les dificulta ponerse en contacto con su negocio. Tener agentes distribuidos también le brinda a su negocio más oportunidades de contratar personas con diversas habilidades y especialidades, como tener agentes que cubran una gama más amplia de idiomas. Los centros de contacto tradicionales en una sola ubicación están limitados a contratar agentes en esa ubicación, lo que conlleva el riesgo de no poder encontrar un agente con las habilidades que necesita. Finalmente, tener agentes distribuidos más cerca de más de sus clientes permite a los agentes tener una comprensión más profunda de cualquier regla y regulación especializada en esa área. En un centro de contacto tradicional de una sola ubicación, es posible que los agentes no conozcan detalles específicos sobre algo como el envío en un país al otro lado del mundo, lo que dificulta la asistencia a los clientes.


# ¿Qué desafíos tiene un centro de contacto “distribuido”?
Si bien la naturaleza distribuida de estos centros de contacto tiene muchos beneficios para su negocio, también existen algunos desafíos para los centros de contacto distribuidos. Tener agentes en múltiples zonas horarias permite una fácil comunicación con los clientes en todo momento, pero también significa que es esencial que las llamadas se enruten correctamente para que un cliente no sea dirigido a una ubicación que actualmente está cerrada o a un agente que está fuera de servicio. También es importante enviar a los clientes a los agentes que hablan el idioma solicitado por el cliente y que tienen la capacitación correcta para manejar su problema. Con la amplia gama de agentes en diferentes ubicaciones con diferentes habilidades, esta tarea de enrutamiento puede complicarse rápidamente.

<center>
<img src="/images/blog/20-seax-distributed-contact-center/1-feature-comparison.png" alt="Comparación de características: centro de llamadas tradicional vs. centro de contacto distribuido vs. SeaX."/>

*Comparación de características: centro de llamadas tradicional vs. centro de contacto distribuido vs. SeaX.*
</center>

# ¿Cómo resuelve SeaX estos problemas?

## Enrutamiento de llamadas a ubicaciones y agentes distribuidos
SeaX es una solución de centro de contacto colaborativa que nace en la nube y es distribuida. Está construida sobre [Twilio Flex](https://www.twilio.com/flex) que utiliza la plataforma de comunicaciones en la nube de Twilio. Twilio proporciona los bloques de construcción básicos para SeaX, como la infraestructura de telecomunicaciones, el enrutamiento de mensajes y tareas, y una interfaz de usuario básica del centro de contacto. Dentro de SeaX, puede configurar múltiples números de teléfono para sus diferentes ubicaciones, lo que le permite tener los códigos de país y área apropiados para cada área en la que opera su centro de contacto. Por lo tanto, puede configurar sus ajustes por ubicación, asegurándose de que cada ubicación funcione correctamente y reciba las llamadas correctas, mientras sigue atendiendo a todos sus agentes en la misma plataforma.

El [Twilio TaskRouter](https://www.twilio.com/taskrouter) asigna llamadas y mensajes a los agentes en función de los atributos de la llamada y del agente.

<center>
<img src="/images/blog/20-seax-distributed-contact-center/2-taskrouter.png" alt="Diagrama de la arquitectura de TaskRouter."/>

*Diagrama de la arquitectura de TaskRouter. [Fuente](https://twilio-cms-prod.s3.amazonaws.com/images/taskrouter-diagram.width-800.png).*
</center>

También le permite utilizar el enrutamiento basado en habilidades, lo que le brinda un control granular sobre qué agentes y ubicaciones reciben qué llamadas. No solo puede etiquetar las habilidades que tienen sus agentes, como el nivel de su capacitación en ventas, sino que también puede enumerar cosas como los idiomas que hablan, asegurándose de que solo reciban llamadas que puedan manejar. Además, puede utilizar este enrutamiento para asignar números de teléfono específicos a los agentes, vinculando a cada agente a una ubicación particular de su centro de contacto, incluso si no están físicamente allí. Los agentes solo recibirán llamadas enrutadas a su ubicación asignada, lo que garantiza que las llamadas de sus clientes siempre se dirijan a la persona correcta.

<center>
<img src="/images/blog/20-seax-distributed-contact-center/3-skills.png" alt="Habilidades definidas en el TaskRouter para enrutar llamadas y mensajes entrantes."/>

*Habilidades definidas en el TaskRouter para enrutar llamadas y mensajes entrantes.*
</center>

## Configuración de la disponibilidad de la ubicación distribuida
En SeaX, también puede configurar sus horarios de apertura y días festivos por número de teléfono. Con esta herramienta, puede controlar de forma independiente cuándo está abierta cada una de sus ubicaciones, lo que le brinda total flexibilidad en cuanto a cuándo se puede contactar con cada una de sus ubicaciones. En esencia, cada una de sus ubicaciones puede funcionar como un centro de llamadas tradicional, con horarios de apertura establecidos y cerrado en días festivos locales, mientras que sigue configurada y conectada desde una plataforma común para que sus agentes operen.

<center>
<img src="/images/blog/20-seax-distributed-contact-center/4-open-hours.png" alt="Horario de atención para dos números de teléfono diferentes en dos zonas horarias diferentes en la misma instancia de SeaX."/>
</center>

<center>
<img src="/images/blog/20-seax-distributed-contact-center/5-open-hours.png" alt="Horario de atención para dos números de teléfono diferentes en dos zonas horarias diferentes en la misma instancia de SeaX."/>

*Horario de atención para dos números de teléfono diferentes en dos zonas horarias diferentes en la misma instancia de SeaX.*
</center>

## Personalizar la mensajería de ubicación distribuida
SeaX también permite mensajes de cliente no disponible por número de teléfono. Los mensajes de no disponible se reproducen automáticamente a los clientes cuando no hay nadie disponible para atender su llamada. Con la capacidad de personalizar este mensaje por número de teléfono, puede tener mensajes en diferentes idiomas o que contengan información diferente, dependiendo de lo que sea más importante transmitir a los clientes que llaman a esa ubicación.

<center>
<img src="/images/blog/20-seax-distributed-contact-center/6-unavailable-message.png" alt="Mensaje de no disponible para un número de teléfono específico en la plataforma SeaX."/>

*Mensaje de no disponible para un número de teléfono específico en la plataforma SeaX.*
</center>

Un centro de contacto tradicional de una sola ubicación solo puede atender eficazmente el área directamente a su alrededor, aunque por naturaleza se encuentra en una sola plataforma. Un centro de contacto distribuido amplía enormemente la base de clientes a la que puede atender con agentes en múltiples ubicaciones, pero tiene algunos desafíos con la integración de todos los servicios que sus agentes necesitan, sin importar dónde se encuentren. Con SeaX, puede llegar a cada parte de su base de clientes, mientras sigue atendiendo a todos sus agentes en una plataforma fácil de usar.

Gracias por tomarse el tiempo de leer sobre cómo el centro de contacto en la nube de SeaX admite su centro de contacto distribuido en una sola plataforma. Manténgase atento a nuestra próxima publicación de blog, que profundizará en nuestras tecnologías internas de texto a voz y voz a texto, y cómo pueden mejorar su centro de contacto. Si está interesado en obtener más información de inmediato, complete nuestro formulario "[Reservar una demostración](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting)" para obtener una primera vista de la plataforma SeaX.
`;export{e as default};

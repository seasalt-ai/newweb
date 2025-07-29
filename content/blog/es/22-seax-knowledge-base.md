---
title: "SeaX KB: Una base de conocimientos que responde antes de que se le pregunte"
metatitle: "SeaX KB: Una base de conocimientos que responde antes de que se le pregunte"
date: 2022-08-15T22:01:32-07:00
draft: false
author: Kim Dodds
image: /images/blog/22-seax-knowledge-base/thumbnail.png
description: "En esta publicación, continuamos con el tema de las integraciones de IA con la base de conocimientos impulsada por IA de SeaX, que ofrece respuestas sugeridas en tiempo real."
weight: 1
tags: ["SeaX"]
canonicalURL: "/blog/seax-kb-a-knowledge-base/"
url: "/blog/seax-kb-a-knowledge-base/"
---

*En nuestra publicación de blog anterior, [Dé a su centro de contacto su propia voz con SeaX Voice Intelligence](https://seasalt.ai/blog/21-seax-voice-intelligence/), mostramos cómo los motores internos de texto a voz y de voz a texto de Seasalt.ai mejoran varios aspectos de la plataforma SeaX. En esta publicación, continuamos con el tema de las integraciones de IA con la base de conocimientos impulsada por IA de SeaX, que escucha las conversaciones y ofrece respuestas sugeridas en tiempo real.*

# Tabla de Contenidos
- [La base de conocimientos tradicional](#the-traditional-knowledge-base)
- [Base de conocimientos SeaX](#seax-knowledge-base)
    - [Interfaz de usuario incrustada para agentes en vivo](#embedded-user-interface-for-live-agents)
    - [Búsqueda rápida y precisa](#fast-and-accurate-search)
    - [Sugerencias automatizadas en tiempo real](#real-time-automated-suggestions)
    - [Plantillas de respuesta](#response-templates)
    - [Gestión de KB](#kb-management)
    - [Webinar](#webinar)

# La base de conocimientos tradicional

Fundamentalmente, una base de conocimientos (KB) es simplemente una biblioteca de información (idealmente) bien organizada y de fácil acceso que se utiliza de forma autoservicio en línea. Los buenos sistemas de base de conocimientos tendrán características como la organización jerárquica del contenido, la búsqueda y el etiquetado para ayudar a los usuarios a encontrar la información correcta más fácilmente.

Mantener una base de conocimientos detallada es una práctica estándar para la mayoría de las empresas hoy en día. Ya sea para ayudar a los empleados a compartir información interna sobre su producto, responder preguntas de un cliente potencial, ayudar a los clientes a solucionar problemas o todo lo anterior, hacer que la información clave sea accesible para los empleados y los clientes significa un trabajo más eficiente y una mayor satisfacción del cliente.

Normalmente, una base de conocimientos se implementa y mantiene a través de un sistema de gestión de contenido o un sistema de gestión de conocimientos. Estos sistemas pueden variar en escala según las necesidades de la organización, desde un simple gestor de documentos hasta un servicio repleto de funciones que incluye flujos de trabajo de publicación, segmentación de audiencia, herramientas de colaboración y más. Si bien estos sistemas son versátiles de diferentes maneras, casi siempre están destinados a ser accedidos a través de la interacción con una página web o aplicación. Para el caso de uso particular de un agente de servicio al cliente (que normalmente utiliza una base de conocimientos como uno de sus principales recursos para ayudar a los clientes), es necesaria una estrecha integración con el software del centro de contacto para permitir que los agentes manejen las consultas de los usuarios de la manera más fluida posible.

# Base de conocimientos SeaX

Nuestra base de conocimientos fue diseñada desde el primer día con un caso de uso muy particular en mente: el servicio al cliente basado en voz. Si bien la mayoría, si no todos, los sistemas de base de conocimientos existentes se basan en la navegación a través de páginas web jerárquicas o en la introducción de una consulta de búsqueda, nuestra KB necesitaba ser más rápida e independiente para permitir que los representantes de servicio al cliente prestaran toda su atención al cliente mientras seguían respondiendo preguntas rápidamente.

Si desea ir directamente a una demostración, puede ver nuestro breve video de demostración de SeaX KB:
<iframe width="85%" height="450px" src="https://www.youtube.com/embed/C_e_gaZHSFA" title="Reproductor de video de YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>


## Interfaz de usuario incrustada para agentes en vivo

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-intro.png" alt="Primera vista de la interfaz de la base de conocimientos de SeaX."/>

*Primera vista de la interfaz de la base de conocimientos de SeaX.*
</center>

Naturalmente, dado que nuestro motor de KB fue diseñado específicamente para aplicaciones de centros de contacto, tiene una integración nativa con la plataforma SeaX para que los agentes puedan acceder a la KB sin problemas mientras manejan llamadas y mensajes. Sin cambiar de ventana, sin hojear pestañas, sin navegar por páginas web anidadas.

## Búsqueda rápida y precisa

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-manual-search.png" alt="Resultados de una búsqueda manual en la base de conocimientos de SeaX."/>

*Resultados de una búsqueda manual en la base de conocimientos de SeaX.*
</center>

En el nivel más básico, nuestra base de conocimientos está impulsada por un motor de búsqueda increíblemente rápido y preciso. Utilizamos técnicas de procesamiento de lenguaje natural y extracción de información de última generación para recopilar el significado de texto sin formato, consultas de ejemplo y URL de soporte, y para hacer coincidir las expresiones del cliente con las entradas de KB más relevantes. El motor de la base de conocimientos es altamente extensible y puede admitir miles de millones de documentos sin un cambio perceptible en el tiempo de respuesta.

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-detail.png" alt="Artículo de KB en vista expandida después de hacer clic en un resultado de búsqueda."/>

*Artículo de KB en vista expandida después de hacer clic en un resultado de búsqueda.*
</center>

Además de encontrar el documento más relevante, nuestro motor de búsqueda proporciona resultados más detallados al extraer palabras clave destacadas de la consulta del usuario y resaltar las palabras clave y pasajes más relevantes dentro de cada entrada de KB sugerida.

## Sugerencias automatizadas en tiempo real

Pero lo que hemos mostrado hasta ahora sigue siendo una búsqueda manual. Los agentes en vivo están ocupados interactuando con los clientes y perderían un tiempo valioso ingresando una búsqueda manual en la KB cada vez que quisieran alguna información. Por esa razón, el mayor valor agregado que la base de conocimientos de SeaX aporta es la búsqueda automatizada en tiempo real para interacciones basadas en texto y voz.

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-automatic-search.png" alt="SeaX KB mostrando sugerencias automáticas de artículos para un mensaje de usuario entrante."/>

*SeaX KB mostrando sugerencias automáticas de artículos para un mensaje de usuario entrante.*
</center>

Cada vez que llega un nuevo mensaje de usuario, la base de conocimientos se consultará automáticamente utilizando el mensaje exacto del cliente. En tiempo real, mientras el cliente está hablando, el agente recibirá sugerencias de artículos de KB actualizadas para su referencia.

¡Y esto también funciona con llamadas de voz! Nuestra última publicación de blog, [Dé a su centro de contacto su propia voz con SeaX Voice Intelligence](https://seasalt.ai/blog/21-seax-voice-intelligence/), mostró el motor de voz a texto de última generación de Seasalt.ai. La plataforma SeaX utiliza ese motor para transcribir todas las llamadas de voz en tiempo real. Como resultado, podemos usar esas transcripciones para varias aplicaciones posteriores, incluida la búsqueda automática de bases de conocimientos.

## Plantillas de respuesta

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-response-template.png" alt="Un agente responde a un cliente con un solo clic utilizando la plantilla de respuesta generada por SeaX KB."/>

*Un agente responde a un cliente con un solo clic utilizando la plantilla de respuesta generada por SeaX KB.*
</center>

Los resultados de búsqueda de la base de conocimientos tienen una característica adicional que ayuda a acelerar las respuestas de los agentes para interacciones basadas en texto. Cuando el agente encuentra un artículo de KB relevante, simplemente puede hacer clic en el icono `+` a la izquierda del título para insertar una plantilla de respuesta en su ventana de chat. En el backend, cada vez que se busca en la KB, se genera una respuesta escrita a la pregunta del usuario basada en la información más relevante del artículo de KB sugerido y se incluyen los enlaces de apoyo. Esto puede mejorar enormemente el tiempo de respuesta del agente, ya que el agente ya no comienza con una pizarra en blanco. En su lugar, tienen la información importante del artículo de KB ya en su ventana de chat, por lo que simplemente pueden editarla y enviarla.


## Gestión de KB

Ahora que hemos visto lo que puede hacer el motor de KB, queda una pregunta persistente sobre el backend: ¿cómo se gestiona la información en la base de conocimientos? La plataforma SeaX tiene una interfaz de usuario de gestión de KB totalmente integrada disponible para los administradores desde la página de configuración.

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-management.png" alt="Interfaz de gestión de SeaX KB."/>

*Interfaz de gestión de SeaX KB.*
</center>

Desde esta página puede agregar una nueva entrada de KB o puede importar/exportar toda la base de conocimientos usando un archivo de hoja de cálculo. La interfaz también admite la edición y eliminación de entradas de KB para que pueda mantener su KB continuamente actualizada.

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-edit.png" alt="Editando un solo artículo de KB a través de la interfaz de gestión de SeaX KB."/>

*Editando un solo artículo de KB a través de la interfaz de gestión de SeaX KB.*
</center>

## Webinar

Si desea ver un recorrido más detallado del sistema de base de conocimientos y cómo se integra con la plataforma SeaX, vea nuestro seminario web sobre el tema:
<iframe width="85%" height="450px" src="https://www.youtube.com/embed/FOqQ01fpKQ4" title="Reproductor de video de YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

Para una demostración individual, o para obtener más información sobre cómo Seasalt.ai puede adaptar sus soluciones a las necesidades de su negocio, complete nuestro [formulario de reserva de demostración](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting).

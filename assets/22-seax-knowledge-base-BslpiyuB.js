const e=`---
title: "SeaX KB: una base de conocimientos que responde antes de que preguntes"
metatitle: "SeaX KB: una base de conocimientos que responde antes de que preguntes"
date: 2022-08-15 22:01:32-07:00
modified_date: 2025-07-30 17:01:09.247000+00:00
draft: false
author: Kim Dodds
description: "En este artículo, continuamos con el tema de la integración de la IA presentando la base de conocimientos impulsada por la IA de SeaX, que proporciona respuestas sugeridas en tiempo real."
weight: 1
tags:
  - SeaX
canonicalURL: /blog/seax-kb-a-knowledge-base/
url: /blog/seax-kb-a-knowledge-base/
---

*En nuestra publicación de blog anterior [Dale a tu centro de contacto su propia voz con SeaX Voice Intelligence](https://seasalt.ai/blog/21-seax-voice-intelligence/), mostramos cómo los motores de texto a voz y de voz a texto internos de Seasalt.ai mejoran varios aspectos de la plataforma SeaX. En este artículo, continuaremos con el tema de la integración de la IA presentando la base de conocimientos impulsada por la IA de SeaX, que escucha las conversaciones en tiempo real para proporcionar respuestas sugeridas.*

# Tabla de contenido
- [La base de conocimientos tradicional](#the-traditional-knowledge-base)
- [La base de conocimientos de SeaX](#seax-knowledge-base)
    - [Interfaz de usuario integrada para agentes en vivo](#embedded-user-interface-for-live-agents)
    - [Búsqueda rápida y precisa](#fast-and-accurate-search)
    - [Sugerencias automáticas en tiempo real](#real-time-automated-suggestions)
    - [Plantillas de respuesta](#response-templates)
    - [Gestión de la base de conocimientos](#kb-management)
    - [Seminario web](#webinar)

# La base de conocimientos tradicional

En esencia, una base de conocimientos (KB) es solo una colección de información (idealmente) bien organizada y de fácil acceso para el autoservicio en línea. Un buen sistema de KB tendrá características como organización de contenido jerárquico, búsqueda y etiquetado para ayudar a los usuarios a encontrar la información correcta más fácilmente.

Mantener una base de conocimientos detallada es una práctica estándar para la mayoría de las empresas en la actualidad. Ya sea que el propósito sea ayudar a los empleados a compartir información interna sobre sus productos, responder las preguntas de los clientes potenciales, ayudar a los clientes con la solución de problemas o todo lo anterior, hacer que la información clave sea accesible tanto para los empleados como para los clientes significa un trabajo más eficiente y una mayor satisfacción del cliente.

Por lo general, las bases de conocimientos se implementan y mantienen a través de un sistema de gestión de contenido o un sistema de gestión del conocimiento. Estos sistemas pueden variar en escala según las necesidades de una organización, desde simples administradores de documentos hasta servicios ricos en funciones que incluyen flujos de trabajo de publicación, segmentación de audiencia, herramientas de colaboración y más. Si bien estos sistemas son versátiles en varios aspectos, casi siempre están diseñados para ser accedidos a través de la interacción con una página web o una aplicación. Para el caso de uso específico de los agentes de servicio al cliente (que a menudo usan las bases de conocimientos como uno de sus principales recursos para ayudar a los clientes), se necesita una estrecha integración con el software del centro de contacto para permitir que los agentes manejen las consultas de los usuarios de la manera más fluida posible.

# La base de conocimientos de SeaX

Nuestra base de conocimientos fue diseñada desde el primer día con un caso de uso muy específico en mente: el servicio al cliente por voz. Mientras que la mayoría, si no todos, los sistemas de bases de conocimientos existentes se basan en la navegación a través de páginas web jerárquicas o en la escritura de consultas de búsqueda, nuestra base de conocimientos necesitaba ser más rápida y autónoma para que los representantes de servicio al cliente pudieran dedicar toda su atención al cliente y al mismo tiempo responder preguntas rápidamente.

Si desea pasar directamente a la demostración, puede ver nuestra breve demostración de SeaX KB:
<iframe width="85%" height="450px" src="https://www.youtube.com/embed/C_e_gaZHSFA" title="Reproductor de video de YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>


## Interfaz de usuario integrada para agentes en vivo

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-intro.png" alt="Un primer vistazo a la interfaz de la base de conocimientos de SeaX."/>

*Un primer vistazo a la interfaz de la base de conocimientos de SeaX.*
</center>

Naturalmente, dado que nuestro motor de base de conocimientos fue diseñado específicamente para aplicaciones de centros de contacto, está integrado de forma nativa en la plataforma SeaX para que los agentes puedan acceder sin problemas a la base de conocimientos mientras manejan llamadas y mensajes. Sin cambiar de ventana, sin buscar en pestañas, sin navegar por páginas web anidadas.

## Búsqueda rápida y precisa

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-manual-search.png" alt="Resultados de una búsqueda manual en la base de conocimientos de SeaX."/>

*Resultados de una búsqueda manual en la base de conocimientos de SeaX.*
</center>

En el nivel más básico, nuestra base de conocimientos está impulsada por un motor de búsqueda extremadamente rápido y preciso. Utilizamos técnicas de procesamiento del lenguaje natural y extracción de información de última generación para obtener significado de texto sin formato, consultas de ejemplo y URL de soporte y para hacer coincidir las expresiones de los clientes con las entradas más relevantes de la base de conocimientos. El motor de la base de conocimientos es altamente escalable y puede admitir miles de millones de documentos sin ningún cambio perceptible en el tiempo de respuesta.

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-detail.png" alt="Un artículo de la base de conocimientos en una vista ampliada después de hacer clic en un resultado de búsqueda."/>

*Un artículo de la base de conocimientos en una vista ampliada después de hacer clic en un resultado de búsqueda.*
</center>

Además de encontrar los documentos más relevantes, nuestro motor de búsqueda también proporciona resultados más detallados al extraer palabras clave destacadas de la consulta del usuario y resaltar las palabras clave y los pasajes más relevantes en cada entrada sugerida de la base de conocimientos.

## Sugerencias automáticas en tiempo real

Pero lo que hemos mostrado hasta ahora sigue siendo una búsqueda manual. Los agentes en vivo están ocupados interactuando with customers, and manually typing searches into the knowledge base every time they need information wastes precious time. So, the biggest value-add that comes with the SeaX Knowledge Base is real-time automated search for both text and voice-based interactions.

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-automatic-search.png" alt="The SeaX Knowledge Base showing automatic article suggestions for an incoming user message."/>

*The SeaX Knowledge Base showing automatic article suggestions for an incoming user message.*
</center>

Every time a new user message comes in, the knowledge base automatically queries with the customer's exact message. In real-time, as the customer is speaking, agents will be provided with up-to-date knowledge base article suggestions for their reference.

This works for voice calls too! Our previous blog post [Give Your Contact Center Its Own Voice with SeaX Voice Intelligence](https://seasalt.ai/blog/21-seax-voice-intelligence/) showcased Seasalt.ai's state-of-the-art speech-to-text engine. The SeaX platform leverages this engine to transcribe all voice calls in real-time. Consequently, we can use these transcriptions for a variety of downstream applications, including automatic knowledge base search.

## Response Templates

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-response-template.png" alt="An agent replying to a customer in one click with a response template generated by the SeaX Knowledge Base."/>

*An agent replying to a customer in one click with a response template generated by the SeaX Knowledge Base.*
</center>

Knowledge base search results come with one additional feature to help speed up agents' responsiveness for text-based interactions. When an agent finds a relevant knowledge base article, they can simply click the "+" icon to the left of the title to insert a response template into their chat window. On the backend, every time the knowledge base is searched, it generates a written response to the user's question based on the most relevant information from the suggested knowledge base articles and includes any supporting links. This can dramatically improve agents' response times as agents are no longer starting from scratch. Instead, they already have the important information from the knowledge base article displayed in their chat window, so all they have to do is edit and send.


## KB Management

Now that we've seen what the knowledge base engine can do, there's one lingering question about the backend: how is the information in the knowledge base managed? The SeaX platform provides a fully integrated knowledge base management UI that administrators can access from the settings page.

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-management.png" alt="The SeaX Knowledge Base Management interface."/>

*The SeaX Knowledge Base Management interface.*
</center>

On this page, you can add individual new knowledge base entries, or you can import/export the entire knowledge base using a spreadsheet file. The interface also supports editing and deleting knowledge base entries so that you can continuously keep your knowledge base up-to-date.

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-edit.png" alt="Editing a single knowledge base article through the SeaX Knowledge Base Management interface."/>

*Editing a single knowledge base article through the SeaX Knowledge Base Management interface.*
</center>

## Webinar

If you'd like a more in-depth look at the knowledge base system and how it integrates with the SeaX platform, watch our webinar on the topic:
<iframe width="85%" height="450px" src="https://www.youtube.com/embed/FOqQ01fpKQ4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

For a one-on-one demo, or to find out how Seasalt.ai can customize a solution for your business needs, please fill out our [schedule-a-demo form](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting).`;export{e as default};

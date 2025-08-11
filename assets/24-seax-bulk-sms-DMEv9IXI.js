const e=`---
title: "SMS masivo de SeaX: para un alcance al cliente más rápido y efectivo"
metatitle: "SMS masivo de SeaX: para un alcance al cliente más rápido y ..."
date: 2022-09-09 11:05:22-07:00
modified_date: 2025-07-28T16:03:25.123456
draft: false
author: Amy Chen, Kim Dodds, Sarah Reid
description: "En este blog, mostraremos cómo la función de SMS masivo de SeaX permite a los agentes enviar mensajes salientes de forma proactiva por mensaje de texto."
weight: 1
tags:
  - SeaX
image: images/blog/24-seax-bulk-sms/thumbnail.png
canonicalURL: /blog/seax-bulk-sms/
url: /blog/seax-bulk-sms/
---


*En nuestras publicaciones de blog anteriores, analizamos algunas de las características clave de SeaX (incluida la [Inteligencia de voz](https://seasalt.ai/blog/21-seax-voice-intelligence/), la [Base de conocimientos](https://seasalt.ai/blog/22-seax-knowledge-base/) y la [Gestión de casos](https://seasalt.ai/blog/23-seax-case-management/)) que ayudan a los agentes a gestionar mejor las llamadas y los mensajes entrantes. En este blog, mostraremos cómo la función de SMS masivo de SeaX permite a los agentes enviar mensajes salientes de forma proactiva por mensaje de texto, que se ha demostrado que los destinatarios abren antes y de forma más consistente que las comunicaciones por correo electrónico tradicionales.*

# Tabla de contenido
- [SMS vs. correo electrónico](#sms-vs-email)
- [Estándares 10DLC](#10dlc-standards)
- [SMS masivo de SeaX](#seax-bulk-sms)
    - [Carga de contactos](#contact-upload)
    - [Composición del mensaje](#message-composition)
    - [Estimación de costos](#cost-estimate)
    - [Vista previa de mensajes masivos](#bulk-message-preview)
    - [Monitoreo del progreso de la campaña](#campaign-progress-monitoring)
    - [Chat de mensajes entrantes](#incoming-message-chat)
- [Cierre](#closing)

# SMS vs. correo electrónico

El correo electrónico tiende a ser el modo de comunicación de facto para la mayoría de las operaciones comerciales. Hasta hace relativamente poco, la mensajería de texto (SMS) no era un canal de comunicación muy utilizado para la mensajería comercial masiva, a pesar de su popularidad para la comunicación interpersonal diaria. Sin embargo, en los últimos años, los proveedores de comunicaciones en la nube como Twilio han hecho que el canal de SMS sea mucho más accesible para las empresas al encargarse de los detalles de la infraestructura de telecomunicaciones y los proveedores de servicios en el backend, y al proporcionar una API de SMS simple como servicio a los clientes. Si bien el correo electrónico puede seguir siendo el canal más popular para los negocios, el SMS puede proporcionar un complemento único a las comunicaciones por correo electrónico tradicionales.

<center>
<img src="/images/blog/24-seax-bulk-sms/1-pros-cons.png" alt="Algunos de los pros y los contras de los SMS para las comunicaciones comerciales."/>

*Algunos de los pros y los contras de los SMS para las comunicaciones comerciales.*
</center>

Pero, ¿por qué usar SMS si el correo electrónico ha demostrado ser exitoso? Si tomamos las campañas de marketing como ejemplo, la respuesta corta es: si bien la tasa de apertura de una campaña de correo electrónico es de solo el 20%, la tasa de apertura promedio de los SMS puede llegar al *98%*, sin mencionar que los mensajes de texto tienden a obtener más respuestas. Además, los mensajes de texto suelen abrirse a los 90 segundos de ser recibidos, mientras que los correos electrónicos tienden a abrirse alrededor de los 90 minutos. Por último, pero no menos importante, los SMS tienen una tasa de clics promedio de alrededor del 19%, significativamente más alta que el 3.2% de los correos electrónicos ([fuente](https://manychat.com/blog/sms-vs-email-marketing-2021/)).

En general, los mensajes de texto se abren más rápido y con más frecuencia que los correos electrónicos, quizás porque los textos siempre se entregan directamente al destinatario dondequiera que esté, ya sea que tenga wifi o no. También porque los SMS se utilizan normalmente para mensajes personales y con menos frecuencia para comunicaciones comerciales, los destinatarios pueden ver los textos como más importantes o sustanciales que los correos electrónicos.

Entonces, ¿por qué no todo el mundo usa SMS? Bueno, por supuesto que hay pros y contras. Naturalmente, los SMS son significativamente más caros que el correo electrónico porque dependen de la infraestructura de telecomunicaciones y los proveedores de servicios (como Verizon, AT&T, etc.) para entregar los mensajes. Además, los mensajes de texto tienen un límite estricto de unos 900 caracteres y un único archivo adjunto (que cuesta más, por supuesto). Por lo tanto, en general, si bien los SMS pueden ser un método de comunicación significativamente más eficaz, la contrapartida es que las empresas deben ser más selectivas con el contenido que envían para asegurarse de que sea rentable.

¡Dicho esto, no hay ninguna razón por la que los SMS y el correo electrónico no deban usarse juntos! Cada canal tiene sus propios pros y contras, por lo que una empresa puede asegurarse de que está enviando las comunicaciones más eficaces aprovechando los puntos fuertes de cada canal.

# Estándares 10DLC

Para la mensajería SMS A2P (de aplicación a persona) de alto volumen, los operadores de EE. UU. utilizan códigos largos estandarizados de 10 dígitos, o 10DLC. Antes de iniciar una campaña de SMS masivos, le recomendamos que lea más sobre 10DLC y sus aplicaciones [aquí](https://support.twilio.com/hc/en-us/articles/1260800720410-What-is-A2P-10DLC-).

# SMS masivo de SeaX

El servicio de SMS masivo de SeaX le permite cargar fácilmente sus contactos/clientes potenciales, enviar SMS (también admitimos MMS - Mensajes multimedia) de forma masiva y gestionar las respuestas entrantes. Siga leyendo para ver los pocos pasos sencillos para iniciar su primera campaña de SMS masivos.

## Carga de contactos

<center>
<img src="/images/blog/24-seax-bulk-sms/2-contact-upload.png" alt="Cargando una lista de contactos en SMS masivo de SeaX."/>

*Cargando una lista de contactos en SMS masivo de SeaX.*
</center>

El primer paso es cargar los contactos y los clientes potenciales. Primero, organice los contactos para su campaña de SMS en un archivo csv. Además de los campos obligatorios, \`phone_number\` y \`name\`, puede agregar otros campos y usarlos en el cuerpo del mensaje. Por ejemplo, puede cambiar dinámicamente el cuerpo del mensaje para incluir el nombre del destinatario según el campo \`name\` de cada contacto.

Luego, simplemente abra el servicio de SMS masivo en SeaX y presione "Importar" para cargar sus contactos. Guardamos todos sus contactos anteriores en la lista de destinatarios para que pueda lanzar fácilmente campañas de seguimiento.

## Composición del mensaje

<center>
<img src="/images/blog/24-seax-bulk-sms/3-message-draft.png" alt="Redactando un nuevo mensaje SMS con SMS masivo de SeaX."/>

*Redactando un nuevo mensaje SMS.*
</center>

El siguiente paso es darle un nombre a su campaña y redactar el mensaje. El SMS masivo le permite acceder a toda la información de contacto almacenada en su archivo csv/excel. Por ejemplo, si tiene un campo llamado \`name\` en la lista de contactos, puede escribir \`{name}\` en el mensaje y el mensaje mostrará automáticamente el nombre de cada contacto en el cuerpo del mensaje.

## Estimación de costos

<center>
<img src="/images/blog/24-seax-bulk-sms/4-cost-estimate.png" alt="Seleccionando los números de teléfono de envío y obteniendo una estimación de costos de la campaña con SMS masivo de SeaX."/>

*Seleccionando los números de teléfono de envío y obteniendo una estimación de costos de la campaña.*
</center>

A continuación, elija el número de teléfono que le gustaría usar para enviar los mensajes salientes. Si aún no tiene un número de teléfono, puede hacer clic en "Cotizar un número nuevo" en la esquina superior derecha para enviar una solicitud de compra. Nuestro equipo puede ayudarlo a comprar nuevos números 10DLC.

También puede obtener una vista previa del precio unitario estimado de la campaña. Tenga en cuenta que tanto el envío como la recepción de SMS/MMS cuestan dinero, así que asegúrese de presupuestar en consecuencia.

## Vista previa de mensajes masivos

<center>
<img src="/images/blog/24-seax-bulk-sms/5-preview.png" alt="Vista previa de una campaña de SMS masivos antes de enviarla con SeaX."/>

*Vista previa de una campaña de SMS masivos antes de enviarla.*
</center>

Puede obtener una vista previa de los mensajes masivos antes de enviarlos. Es vital confirmar el cuerpo del mensaje, el número de teléfono de los destinatarios y el número de teléfono del remitente. Una vez que inicie la campaña, no será posible retirar los mensajes. En esta página, puede obtener una vista previa de los 3 primeros mensajes de su campaña, que corresponden a los 3 primeros contactos de su lista.

## Monitoreo del progreso de la campaña

<center>
<img src="/images/blog/24-seax-bulk-sms/6-monitor.png" alt="Monitoreando el progreso de una campaña de SMS masivos con SeaX."/>

*Monitoreando el progreso de una campaña de SMS masivos.*
</center>

Finalmente, puede sentarse y monitorear el progreso de la campaña en el panel de SMS masivo. La página se actualiza automáticamente y actualiza el estado de la campaña. Puede ver los estados de entrega de los mensajes, la tasa de éxito/entrega, los costos estimados y la tasa de respuesta en esta página.

## Chat de mensajes entrantes

<center>
<img src="/images/blog/24-seax-bulk-sms/7-chat.png" alt="Abordando las respuestas entrantes de una campaña de SMS masivos con SeaX."/>

*Abordando las respuestas entrantes de una campaña de SMS masivos.*
</center>

Al igual que todas las funciones de SeaX, nos esforzamos por capacitar a los agentes o gerentes de campaña para que manejen las solicitudes/problemas entrantes; el SMS masivo también permite a SeaX manejar los esfuerzos de marketing salientes. Después de lanzar la campaña, puede gestionar todas las respuestas entrantes en la ventana de chat que se muestra a continuación.

# Cierre

Gracias por tomarse el tiempo de leer sobre cómo el sistema de SMS masivo de SeaX capacita a los agentes para enviar comunicaciones salientes además de gestionar las solicitudes de mensajes entrantes. Esté atento al próximo segmento de nuestra serie de blogs, que cubrirá algunas de las herramientas de gestión y análisis integradas en la plataforma SeaX. Si está interesado en obtener más información de inmediato, complete nuestro [formulario para reservar una demostración](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting) para obtener una visión de primera mano de la plataforma SeaX.
`;export{e as default};

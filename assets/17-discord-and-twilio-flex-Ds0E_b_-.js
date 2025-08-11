const e=`---
title: "Discord (3/3): Discord y Twilio Flex: Llevando el Centro de Contacto Flex a Territorio Inexplorado"
metatitle: "Discord (3/3): Centro de Contacto Twilio Flex en Discord"
date: 2022-06-07 12:32:24-07:00
modified_date: 2025-01-27T10:30:00Z
draft: false
author: Kim Dodds
description: "En este blog, demostramos cómo Seasalt.ai integra un centro de contacto completo en un servidor de Discord."
tags:
  - SeaX
  - Discord
image: /images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/flex-discord-thumbnail.png
canonicalURL: /blog/discord-and-twilio
url: /blog/discord-and-twilio/
---

*Este es el último artículo de nuestra serie de tres partes sobre el compromiso del cliente en Discord. Nuestro primer post del blog ["Una Nueva Frontera para el Compromiso del Cliente"](https://seasalt.ai/blog/15-discord-a-new-frontier-for-customer-engagement/) discutió la creciente popularidad de Discord y las nuevas oportunidades que proporciona para que las marcas creen y se involucren con sus propias comunidades en línea. En la segunda parte ["Cómo Crear una Comunidad de Discord y Bot para Tu Marca"](https://seasalt.ai/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/), introdujimos cómo crear un servidor de Discord para tu marca y cómo integrar bots para gestionar la moderación del servidor, anuncios, comentarios de usuarios y más. Finalmente, en este blog, demostramos cómo Seasalt.ai integra un centro de contacto completo en un servidor de Discord, permitiendo a las marcas manejar todos los aspectos del servicio al cliente en la plataforma.*

## Tabla de Contenidos
- [Tabla de Contenidos](#table-of-contents)
- [Demo de Servicio al Cliente de Discord](#discord-customer-service-demo)
- [Twilio Flex](#twilio-flex)
- [SeaX](#seax)
- [Servidor Demo](#demo-server)
  - [Ayuda 1-a-muchos: Canales Oficiales](#1-to-many-help-official-channels)
  - [Ayuda 1-a-1: Agente de Servicio al Cliente](#1-to-1-help-customer-service-agent)
    - [Base de Conocimientos](#knowledge-base)
    - [Transferencia de Agente en Vivo](#live-agent-transfer)
  - [Gestión de Casos](#case-management)
- [Inmersión Técnica Profunda](#technical-deep-dive)
  - [Definir el Flujo Flex](#define-the-flex-flow)
  - [Crear un Canal Personalizado](#create-a-custom-channel)
  - [Crear un Servidor HTTP para Soportar Enrutamiento Más Complejo](#create-an-http-server-to-support-more-complex-routing)
    - [Webhook de Mensajes Salientes](#outbound-messages-webhook)
    - [Integración del Bot](#bot-integration)
- [Resumen](#summary)

# Demo de Servicio al Cliente de Discord
Si estás ansioso por llegar al punto y ver el producto final, primero mostraremos el video demo final:

<iframe width="85%" height="450px" src="https://www.youtube.com/embed/iUK4YkGYI6Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

Nuestro objetivo es demostrar cómo Discord puede integrarse en software de servicio al cliente existente (en este caso [Twilio Flex](https://flex.twilio.com/)) para agregar valor adicional a los servidores oficiales de marca. Continúa leyendo para una comprensión más profunda de nuestra implementación.

# Twilio Flex
Twilio es una empresa de comunicaciones madura que proporciona APIs para gestionar SMS, llamadas telefónicas, correos electrónicos, mensajes de chat y más. Flex es uno de los productos insignia de Twilio: un centro de contacto basado en la nube escalable que puede enrutar mensajes y llamadas desde cualquier fuente a agentes virtuales y en vivo. Elegimos Flex como la base para nuestra integración del centro de contacto porque ya proporciona excelente soporte para varios canales como Facebook, SMS y WhatsApp.

# SeaX
SeaX es un centro de contacto en la nube profundamente integrado con capacidades avanzadas de IA para ayudar a mejorar la productividad y la satisfacción del cliente. SeaX es uno de los productos insignia de Seasalt.ai y ha sido lanzado con clientes en más de 150 países. La plataforma del centro de contacto SeaX está construida sobre Twilio Flex e incluye varias características adicionales que ayudan a los agentes en vivo a asistir mejor a los clientes. Algunas de las características más útiles incluyen texto-a-voz interno y voz-a-texto, base de conocimientos impulsada por IA y sistema integrado de gestión de casos. Para más información sobre todas las características de la plataforma SeaX, por favor visita la [página principal de SeaX](https://seax.seasalt.ai/?utm_source=blog/).

# Servidor Demo
Ahora introduciremos cómo configuramos nuestro servidor de Discord. Para propósitos de demo, imaginamos un escenario donde nuestro servidor se usa como comunidad para un juego como Pokémon Go! La tabla de abajo muestra una visión general de algunas características que demostramos en nuestro servidor demo de Discord.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-features-2.png" alt="Visión general de las características del servidor demo de servicio al cliente de Discord."/>

*Visión general de las características del servidor demo de Discord.*
</center>

## Ayuda 1-a-muchos: Canales Oficiales
Varios canales en el servidor están configurados para proporcionar transmisiones directas entre administradores/desarrolladores oficiales y jugadores.
**Canal de anuncios** solo puede ser publicado por administradores y moderadores, y puede contener publicaciones (manuales o automáticas) de cuentas de Twitter, sitios web u otras fuentes oficiales.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-announcement-channel.jpg" alt="Canal de anuncios en servidor de Discord conteniendo publicaciones de la cuenta oficial de Twitter."/>

*Canal demo #announcements en servidor de Discord.*
</center>

**Canal de reporte de errores** permite a los jugadores discutir errores y problemas que rompen el juego. Los administradores pueden monitorear de cerca este canal para identificar cualquier problema en el juego que debería abordarse. Además, los usuarios pueden usar el comando slash \`/bug\` dentro del canal para enviar reportes oficiales de errores.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-bug-report-channel.jpg" alt="Canal de reporte de errores en servidor de Discord conteniendo reportes de errores enviados."/>

*Canal demo #bug-report en servidor de Discord conteniendo reportes de errores enviados.*
</center>

**Canal de solicitud de características** permite a los jugadores discutir cambios de jugabilidad, mejoras de calidad de vida, adiciones de contenido y más que les gustaría ver en el juego. Similar al canal de solicitud de errores, su entrada puede ser vista por moderadores de Discord que pueden usar el comando slash \`/new_feature\` para enviar solicitudes oficiales.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-feature-request-channel.jpg" alt="Canal de solicitud de características en servidor de Discord conteniendo usuario ejecutando comando slash."/>

*Canal demo #feature-request en servidor de Discord conteniendo usuario ejecutando comando slash.*
</center>

## Ayuda 1-a-1: Agente de Servicio al Cliente

Los jugadores pueden usar el comando slash \`/helpme\` para activar un mensaje directo con un agente. El agente de servicio al cliente puede ser automatizado (agente virtual) u operado por un agente en vivo.

Para nuestro demo, configuramos un bot FAQ simple que consulta la base de conocimientos de la empresa para proporcionar a los usuarios sugerencias de artículos relevantes. Los usuarios también pueden solicitar un agente en vivo y serán transferidos a un agente en vivo en SeaX en la misma sesión de chat.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-customer-service-channel.jpg" alt="Canal de servicio al cliente en servidor de Discord conteniendo usuario activando DM."/>

*Canal demo #feature-request en servidor de Discord conteniendo usuario activando DM.*
</center>

### Base de Conocimientos
Cuando un usuario envía una consulta al agente de servicio virtual, el agente puede referir al usuario a artículos relevantes en la base de conocimientos.

### Transferencia de Agente en Vivo
Una vez que un usuario inicia un mensaje directo con el bot, puede solicitar un agente en vivo. Recibirá inmediatamente una notificación de que se ha creado un caso para ellos y que están siendo transferidos a un agente en vivo. Cuando el agente en vivo se une al chat, también recibirá una notificación.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-customer-service-dm.jpg" alt="Mensajes directos con servicio al cliente conteniendo sugerencias de artículos de base de conocimientos, transferencia de agente en vivo y gestión de casos."/>

*Mensajes directos con servicio al cliente conteniendo sugerencias de artículos de base de conocimientos, transferencia de agente en vivo y gestión de casos.*
</center>

En el backend, los agentes en vivo pueden manejar llamadas y mensajes de chat de todos los canales (SMS, Facebook, Discord, llamadas de voz, etc.) a través de una sola plataforma. En este caso, la plataforma backend es SeaX.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/flex-discord-channel.jpg" alt="Interfaz SeaX mostrando vista de agente en vivo de conversación con usuario de Discord."/>

*Interfaz SeaX mostrando vista de agente en vivo de conversación con usuario de Discord.*
</center>

## Gestión de Casos
Una característica que queremos destacar en este demo es la gestión de casos. La solución de Discord de Seasalt.ai está integrada con el sistema de gestión de casos de SeaX para rastrear adecuadamente los varios casos de los usuarios. Cuando un usuario interactúa con el bot de Discord (como solicitar un agente en vivo o reportar un error), podemos abrir automáticamente un nuevo caso y registrar toda la información importante sobre el usuario y el problema que están experimentando. Esto hace que sea fácil para los agentes en vivo acceder a todos los problemas reportados y asegura que rastreen al usuario hasta que el caso se resuelva.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-new-case.png" alt="Creando nuevo caso en el sistema de gestión de casos de SeaX."/>

*Creando nuevo caso en el sistema de gestión de casos de SeaX.*

<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-existing-case.png" alt="Viendo caso existente en el sistema de gestión de casos de SeaX."/>

*Viendo caso existente en el sistema de gestión de casos de SeaX.*

</center>

# Inmersión Técnica Profunda

Ahora hemos visto el producto final y todas las características disponibles para los miembros del servidor y los agentes en vivo que los ayudan. Pero ¿cómo se implementa todo realmente? En nuestro post anterior del blog ["Cómo Crear una Comunidad de Discord y Bot para Tu Marca"](https://seasalt.ai/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/), introdujimos cómo crear un servidor de Discord para tu marca y cómo integrar bots de Discord para gestionarlo. Para soportar este demo más avanzado, también usamos [SeaChat, el motor de IA conversacional de Seasalt.ai](https://chat.seasalt.ai), para construir un chatbot simple que permite a nuestro bot de Discord manejar consultas de lenguaje natural de los usuarios.

En el lado de SeaX, nuestro equipo trabajó estrechamente con Twilio para crear una solución de centro de contacto rica en características construida sobre Twilio Flex. Para más información sobre Twilio Flex y cómo funciona el proceso de configuración, puedes leer la [Guía de Inicio Rápido de Twilio Flex](https://www.twilio.com/docs/flex/quickstart).

Después de configurar el servidor de Discord, bot de Discord, chatbot y asegurar que tenemos una instancia de SeaX funcionando, el mayor desafío era cómo enrutar adecuadamente los mensajes entre usuarios, bots y agentes en vivo en SeaX. Twilio es excelente manejando el enrutamiento de mensajes, así que nuestro objetivo era manejar todos los comandos slash en el servidor del bot de Discord, luego reenviar todos los otros mensajes (como mensajes directos enviados al chatbot o agente en vivo) a Twilio.

## Definir el Flujo Flex
El primer paso es asegurar que cualquier mensaje que enviemos a Twilio será enrutado al lugar correcto. Configuramos un flujo simple de Twilio que primero verifica si un usuario ha solicitado un agente en vivo, y si es así, reenvía los siguientes mensajes a SeaX. Si el usuario no ha solicitado un agente en vivo, reenviamos el mensaje al chatbot para una respuesta. Para más información sobre configurar el flujo, ve la [documentación de Twilio Studio Flow](https://www.twilio.com/docs/studio).

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-flow.png" alt="Flujo simple de Flex Studio que enruta mensajes entrantes a chatbot o SeaX."/>

*Flujo simple de Flex Studio que enruta mensajes entrantes a chatbot o SeaX.*
</center>

## Crear un Canal Personalizado
Así que ahora entendemos cómo se enrutarán los mensajes entrantes. Sin embargo, Discord no es un canal soportado nativamente por Twilio. Afortunadamente, Twilio tiene un tutorial detallado sobre cómo [agregar un canal de chat personalizado a Twilio Flex](https://www.twilio.com/blog/add-custom-chat-channel-twilio-flex). Después de seguir la guía para configurar el nuevo canal personalizado en Twilio, realmente necesitamos reenviar mensajes de Discord a Twilio.

Primero configuramos el cliente de Twilio:

\`\`\`python
from twilio.rest import Client
twilio_client = Client(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)
\`\`\`

Ahora, una vez que recibimos un mensaje entrante de Discord, podemos reenviar ese mensaje a Twilio a través del cliente de Twilio. Primero, deberíamos verificar si el usuario ya existe en el sistema de Twilio y si ya tienen un canal de chat abierto.

\`\`\`python
# Llamar método get_user para verificar si el usuario existe, crear nuevo usuario si no
user = await get_user(user_id, twilio_client, TWILIO_SERVICE_SID)

# Obtener canales del usuario
user_channels = twilio_client.chat \\
        .services(TWILIO_SERVICE_SID) \\
        .users(user_id) \\
        .user_channels \\
        .list()
\`\`\`

Si el usuario tiene un canal de chat abierto existente, necesitamos usarlo para que podamos acceder al historial del chat. Si no hay un canal de chat existente, creamos uno nuevo para el usuario:

\`\`\`python
if user_channels:
    channel_sid = user_channels[-1].channel_sid
else:
    channel = twilio_client.flex_api \\
            .channel \\
            .create(
                flex_flow_sid=FLEX_FLOW_ID,
                chat_user_friendly_name=username,
                chat_friendly_name=chat_name,  # -> Nombre amigable para el canal de chat
                target=conversation_id,  # -> Identificador único para la identidad del usuario del chat
                identity=conversation_id,  # -> Usuario, ej. / Discord DM ID
        )
    channel_sid = channel.sid
\`\`\`

Finalmente, una vez que tenemos un canal de chat abierto entre el usuario de Discord y Twilio, podemos reenviar el mensaje entrante al flujo de Twilio Studio.

\`\`\`python
message = twilio_client.chat \\
        .services(TWILIO_SERVICE_SID) \\
        .channels(channel_sid) \\
        .messages \\
        .create(
            body=message_text,
            from_=user_id,
            x_twilio_webhook_enabled='true',
            attributes=json.dumps(message_json)  # Enviar headers como atributos para que puedan ser accedidos después
        )
\`\`\`
Ahora podemos reenviar mensajes entrantes de usuarios de Discord directamente a nuestro flujo de Twilio Flex. En el lado del bot de Discord, asegúrate de que todos los mensajes directos sean reenviados a Twilio. Ahora puedes intentar enviar un mensaje directo al bot de Discord, y deberías verlo aparecer en los logs del flujo de Twilio Studio - ¡pero aún no hemos terminado!

## Crear un Servidor HTTP para Soportar Enrutamiento Más Complejo

### Webhook de Mensajes Salientes
Así que ahora entendemos cómo se enrutarán los mensajes entrantes. Sin embargo, aún nos faltan algunas partes. Primero, sabemos que ahora podemos enviar mensajes a Twilio, pero ¿cómo respondemos a los usuarios en Discord? Nuestro bot de Discord es lo único autorizado para enviar mensajes a nuestro servidor de Discord y usuarios, y Twilio tampoco sabe cómo enviar nuestros mensajes de vuelta al servidor de Discord. La solución es que necesitamos configurar un webhook de mensajes salientes que se active cada vez que hay un nuevo mensaje en el canal de chat de Twilio. En ese webhook, podemos entonces usar nuestro bot de Discord para reenviar el mensaje de vuelta a nuestro servidor.

Para esto, integraremos el bot de Discord en un servidor HTTP más potente. Usamos [FastAPI](https://fastapi.tiangolo.com/) para configurar un endpoint POST simple que servirá como nuestro webhook de mensajes salientes. Una vez que configuramos el servidor y tenemos nuestro bot de Discord ejecutándose con él, podemos definir el endpoint POST.

Este endpoint recibirá cada mensaje agregado al canal de chat, así que primero necesitamos filtrar todo excepto los mensajes salientes de SeaX. Luego, necesitamos obtener el ID del canal correcto del cuerpo del mensaje para saber dónde reenviar el mensaje. Finalmente, podemos usar el cliente de Discord para reenviar el mensaje al canal de Discord.

\`\`\`python
@app.post("/forward-to-discord", status_code=200)
async def forward_discord_message(request: Request, response: Response) -> None:
    raw_body = await request.body()
    body = urllib.parse.parse_qs(raw_body.decode())

    # Solo enfocarse en mensajes del SDK (Flex, todos los otros mensajes vendrán de la API)
    if not body.get('Source') == ['SDK']:
        return

    # Los mensajes de Flex no contienen el conversationId del mensaje original
    # Necesitamos convId para enviar el mensaje de vuelta a la conversación en GBM
    # Obtener el mensaje anterior y extraer conversationId
    message = twilio_client.chat \\
            .services(TWILIO_SERVICE_SID) \\
            .channels(body.get("ChannelSid")[0]) \\
            .messages.list(limit=1)[0]

    attributes = json.loads(message.attributes)

    channel = discord_client.get_channel(attributes.get("channel", {}).get("id"))
    if channel:
        await channel.send(body.get("Body", [""])[0].get("text"))
    else:
        logger.error(f"¡Canal de Discord con ID {get_channel_id(req)} no encontrado!")
        response.status_code = 400
\`\`\`

Finalmente, para enviar mensajes a nuestro endpoint, necesitamos hacerle saber a Twilio cuál es nuestro nuevo webhook. Cada canal de chat necesita configurar su propio webhook. Así que si volvemos a donde originalmente creamos el nuevo canal de chat para el usuario, podemos agregar algo de código adicional para configurar el webhook:

\`\`\`python
webhook = twilio_client.chat \\
        .services(TWILIO_SERVICE_SID) \\
        .channels(channel_sid) \\
        .webhooks \\
        .create(
            type='webhook',   
configuration_url=f"{SERVER_HOST}/forward-to-discord",
            configuration_method="POST",
            configuration_filters=["onMessageSent", "onMessageUpdated", "onMediaMessageSent"]
        )
\`\`\`

### Integración del Bot

Así que ahora los mensajes salientes de SeaX deberían ser enrutados correctamente de vuelta a nuestro servidor de Discord. Pero aún no hemos manejado los mensajes que van al chatbot. Necesitamos configurar el endpoint final que será activado desde el flujo de Twilio Studio y recibirá mensajes de usuario, consultará el bot y enviará la respuesta de vuelta a Discord.

\`\`\`python
@app.post("/chatbot-to-discord", status_code=200)
async def receive_discord_message(request: Request, response: Response):
    """Recibir solicitud POST de Twilio, consultar bot y enviar respuesta de vuelta a Discord."""
    req = await request.body()
    # Separar cuerpo del mensaje original del contenido de twilio
    twilio_body, original_message_body = separate_original_message_body(req.decode())

    bot_response = await query_bot(original_message_body, bot_info)

    if bot_response:
        channel = discord_client.get_channel(original_message_body.get("channel_id"))
        if channel:
            for item in bot_response:
                await channel.send(item.get("text"))
\`\`\`

Asegúrate de que el flujo de Twilio Studio tenga el webhook correcto para enrutar mensajes al bot. ¡Ahora hemos completado el enrutamiento de mensajes! Podemos ver la vista de alto nivel de todo el enrutamiento de mensajes en este diagrama:

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-routing-diagram.jpg" alt="Diagrama de enrutamiento de mensajes."/>

*Diagrama de enrutamiento de mensajes.*
</center>

# Resumen
En resumen, en esta serie de blogs, discutimos la creciente popularidad de Discord y las oportunidades que trae como una nueva plataforma para que las marcas interactúen con los clientes. Introdujimos algunas características básicas de Discord para mostrar cómo las marcas pueden construir sus propias comunidades en línea, así como características más avanzadas que permiten a las marcas usar bots de Discord para automatizar la moderación y el soporte al cliente en sus servidores. Finalmente, compartimos cómo integramos Discord con nuestra plataforma de servicio al cliente SeaX, trayendo características avanzadas a las comunidades de Discord como transferencia de agente en vivo, gestión de casos y búsqueda de base de conocimientos impulsada por IA.
Para una demo personal, o para aprender cómo Seasalt.ai puede ayudarte a cumplir con tus necesidades específicas de negocio, por favor llena nuestro formulario ["Reservar Demo"](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting). Para más información sobre la integración Flex/Discord o para contactarnos, visita el [Listado de Socios de Twilio de Seasalt.ai](https://showcase.twilio.com/partner-listing/a8E8Z000000PDCQUA4).
`;export{e as default};

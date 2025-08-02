---
title: "Discord (3/3): Discord y Twilio Flex: Llevando el Centro de Contacto Flex a Territorio Inexplorado"
metatitle: "Discord (3/3): Centro de Contacto Twilio Flex en Discord"
date: 2022-06-07T12:32:24-07:00
author: Kim Dodds
draft: false
image: /images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/flex-discord-thumbnail.png
description: "En esta publicación del blog, demostraremos cómo Seasalt.ai integra un centro de contacto completamente funcional en un servidor de Discord."
tags: ["SeaX", "Discord"]
canonicalURL: "/blog/discord-and-twilio"
url: "/blog/discord-and-twilio/"
aliases:
  - /blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/
modified_date: "2025-01-27T10:30:00Z"
---

*Esta es la publicación final de nuestra serie de tres partes sobre el compromiso del cliente en Discord. Nuestra primera publicación del blog ["Una Nueva Frontera para el Compromiso del Cliente"](https://seasalt.ai/blog/15-discord-a-new-frontier-for-customer-engagement/) discutió la creciente popularidad de Discord y las nuevas oportunidades que proporciona para que las marcas creen y se involucren con sus propias comunidades en línea. En la segunda parte ["Cómo Crear una Comunidad de Discord y Bot para tu Marca"](https://seasalt.ai/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/), introdujimos cómo crear un servidor de Discord para tu marca y cómo integrar bots para gestionar la moderación del servidor, anuncios, retroalimentación de usuarios y más. Finalmente, en esta publicación del blog, demostraremos cómo Seasalt.ai integra un centro de contacto completamente funcional en un servidor de Discord, permitiendo a las marcas manejar todos los aspectos del servicio al cliente en la plataforma.*

## Tabla de Contenidos
- [Tabla de Contenidos](#tabla-de-contenidos)
- [Demostración de Servicio al Cliente en Discord](#demostración-de-servicio-al-cliente-en-discord)
- [Twilio Flex](#twilio-flex)
- [SeaX](#seax)
- [Servidor de Demostración](#servidor-de-demostración)
  - [Ayuda Uno a Muchos: Canales Oficiales](#ayuda-uno-a-muchos-canales-oficiales)
  - [Ayuda Uno a Uno: Agente de Servicio al Cliente](#ayuda-uno-a-uno-agente-de-servicio-al-cliente)
    - [Base de Conocimientos](#base-de-conocimientos)
    - [Transferencia de Agente en Vivo](#transferencia-de-agente-en-vivo)
  - [Gestión de Casos](#gestión-de-casos)
- [Inmersión Técnica Profunda](#inmersión-técnica-profunda)
  - [Definir el Flujo de Flex](#definir-el-flujo-de-flex)
  - [Crear un Canal Personalizado](#crear-un-canal-personalizado)
  - [Crear un Servidor HTTP para Soportar Enrutamiento Más Complejo](#crear-un-servidor-http-para-soportar-enrutamiento-más-complejo)
    - [Webhook de Mensajes Salientes](#webhook-de-mensajes-salientes)
    - [Integración del Bot](#integración-del-bot)
- [Resumen](#resumen)

# Demostración de Servicio al Cliente en Discord
Si estás ansioso por ir directo al grano y ver el producto final, primero mostraremos el video de demostración final:

<iframe width="85%" height="450px" src="https://www.youtube.com/embed/iUK4YkGYI6Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

Nuestro objetivo es demostrar cómo integrar Discord en software de servicio al cliente existente (en este caso, [Twilio Flex](https://flex.twilio.com/)) para agregar valor adicional al servidor oficial de una marca. Continúa leyendo para una comprensión más profunda de nuestra implementación.

# Twilio Flex
Twilio es una empresa de comunicaciones madura que proporciona APIs para gestionar SMS, llamadas telefónicas, correos electrónicos, mensajes de chat y más. Flex es uno de los productos insignia de Twilio: un centro de contacto basado en la nube escalable que enruta mensajes y llamadas desde cualquier fuente a agentes virtuales y en vivo. Elegimos Flex como la base para nuestra integración del centro de contacto porque ya proporciona excelente soporte para varios canales como Facebook, SMS y WhatsApp.

# SeaX
SeaX es un centro de contacto en la nube profundamente integrado con capacidades avanzadas de IA para ayudar a mejorar la productividad y la satisfacción del cliente. SeaX es uno de los productos insignia de Seasalt.ai y ha sido desplegado a clientes en más de 150 países. La plataforma del centro de contacto SeaX está construida sobre Twilio Flex e incluye varias características adicionales que permiten a los agentes en vivo asistir mejor a los clientes. Algunas de las características más útiles incluyen texto a voz y voz a texto integrados, base de conocimientos impulsada por IA y sistema de gestión de casos integrado. Para más información sobre todas las características de la plataforma SeaX, visita la [página principal de SeaX](https://seax.seasalt.ai/?utm_source=blog/).

# Servidor de Demostración
Ahora introduciremos cómo configurar nuestro servidor de Discord. Para propósitos de demostración, imaginamos un escenario donde nuestro servidor se usa como una comunidad para juegos como Pokémon Go! La tabla a continuación describe algunas de las características demostradas en nuestro servidor de Discord.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-features-2.png" alt="Descripción general de características en el servidor de Discord de demostración de servicio al cliente."/>

*Descripción general de características en el servidor de Discord de demostración.*
</center>

## Ayuda Uno a Muchos: Canales Oficiales
Varios canales en el servidor están configurados para proporcionar transmisiones directas entre administradores/desarrolladores oficiales y jugadores.
El **canal de anuncios** solo puede ser publicado por administradores y moderadores y puede contener publicaciones (manuales o automáticas) de cuentas de Twitter, sitios web u otras fuentes oficiales.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-announcement-channel.jpg" alt="Canal de anuncios en el servidor de Discord que contiene publicaciones de la cuenta oficial de Twitter."/>

*Canal #anuncios de demostración en el servidor de Discord.*
</center>

El **canal de reporte de errores** permite a los jugadores discutir errores y problemas que rompen el juego. Los administradores pueden monitorear de cerca este canal para identificar cualquier problema en el juego que debería ser abordado. Además, los usuarios pueden enviar reportes oficiales de errores usando el comando slash `/bug` dentro del canal.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-bug-report-channel.jpg" alt="Canal de reporte de errores en el servidor de Discord que contiene reportes de errores enviados."/>

*Canal #reporte-de-errores de demostración en el servidor de Discord que contiene reportes de errores enviados.*
</center>

El **canal de solicitud de características** permite a los jugadores discutir cambios en el juego, mejoras de calidad de vida, adiciones de contenido y más que les gustaría ver en el juego. Similar al canal de solicitud de errores, su entrada puede ser vista por moderadores de Discord, y pueden enviar solicitudes oficiales usando el comando slash `/nueva_característica`.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-feature-request-channel.jpg" alt="Canal de solicitud de características en el servidor de Discord que contiene usuarios ejecutando comandos slash."/>

*Canal #solicitud-de-características de demostración en el servidor de Discord que contiene usuarios ejecutando comandos slash.*
</center>

## Ayuda Uno a Uno: Agente de Servicio al Cliente

Los jugadores pueden activar mensajes directos con agentes usando el comando slash `/ayudame`. Los agentes de servicio al cliente pueden ser automatizados (agentes virtuales) u operados por agentes en vivo.

Para nuestra demostración, configuramos un bot de FAQ simple que consulta la base de conocimientos de la empresa para proporcionar a los usuarios sugerencias de artículos relevantes. Los usuarios también pueden solicitar agentes en vivo y serán transferidos a agentes en vivo en SeaX en el mismo chat.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-customer-service-channel.jpg" alt="Canal de servicio al cliente en el servidor de Discord que contiene usuarios activando MDs."/>

*Canal #solicitud-de-características de demostración en el servidor de Discord que contiene usuarios activando MDs.*
</center>

### Base de Conocimientos
Cuando los usuarios envían consultas a agentes de servicio virtuales, los agentes pueden referir a los usuarios a artículos relevantes en la base de conocimientos.

### Transferencia de Agente en Vivo
Una vez que los usuarios están en mensajes directos con el bot, pueden solicitar agentes en vivo. Recibirán inmediatamente una notificación de que se ha creado un caso para ellos y que están siendo transferidos a un agente en vivo. Cuando el agente en vivo se une al chat, también recibirán una notificación.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-customer-service-dm.jpg" alt="Mensajes directos con servicio al cliente que contiene sugerencias de artículos de la base de conocimientos, transferencia de agente en vivo y gestión de casos."/>

*Mensajes directos con servicio al cliente que contiene sugerencias de artículos de la base de conocimientos, transferencia de agente en vivo y gestión de casos.*
</center>

En el backend, los agentes en vivo pueden manejar llamadas entrantes y mensajes de chat de todos los canales (SMS, Facebook, Discord, llamadas de voz, etc.) a través de una plataforma. En este caso, la plataforma backend es SeaX.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/flex-discord-channel.jpg" alt="Interfaz de SeaX mostrando una vista de agentes en vivo conversando con usuarios de Discord."/>

*Interfaz de SeaX mostrando una vista de agentes en vivo conversando con usuarios de Discord.*
</center>

## Gestión de Casos
Una característica que queremos enfatizar en esta demostración es la gestión de casos. La solución de Discord de Seasalt.ai se integra con el sistema de gestión de casos de SeaX para rastrear correctamente varios casos para los usuarios. Cuando los usuarios interactúan con el bot de Discord (como solicitar agentes en vivo o reportar errores), podemos abrir automáticamente un nuevo caso y registrar toda la información importante sobre el usuario y los problemas que están experimentando. Esto hace que sea fácil para los agentes en vivo acceder a todos los problemas reportados y asegura que rastreen a los usuarios hasta que los casos se resuelvan.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-new-case.png" alt="Creando un nuevo caso en el sistema de gestión de casos de SeaX."/>

*Creando un nuevo caso en el sistema de gestión de casos de SeaX.*

<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-existing-case.png" alt="Viendo casos existentes en el sistema de gestión de casos de SeaX."/>

*Viendo casos existentes en el sistema de gestión de casos de SeaX.*

</center>

# Inmersión Técnica Profunda

Ahora hemos visto el producto final y todas las características disponibles para los miembros del servidor y los agentes en vivo que los asisten. Pero ¿cómo se implementa realmente todo esto? En nuestra publicación anterior del blog ["Cómo Crear una Comunidad de Discord y Bot para tu Marca"](https://seasalt.ai/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/), introdujimos cómo crear un servidor de Discord para tu marca y cómo integrar bots de Discord para gestionarlo. Para soportar esta demostración más avanzada, también usamos [SeaChat, el motor de IA conversacional de Seasalt.ai](https://chat.seasalt.ai), para construir un chatbot simple que permite a nuestro bot de Discord manejar consultas de lenguaje natural de los usuarios.

En el lado de SeaX, nuestro equipo trabajó estrechamente con Twilio para crear una solución de centro de contacto rica en características basada en Twilio Flex. Para más información sobre Twilio Flex y cómo funciona el proceso de configuración, puedes leer la [Guía de Inicio Rápido de Twilio Flex](https://www.twilio.com/docs/flex/quickstart).

Con el servidor de Discord, bot de Discord, chatbot listo, y asegurando que tenemos una instancia de SeaX funcionando correctamente, el mayor desafío era cómo enrutar correctamente los mensajes entre usuarios, bots y agentes en vivo en SeaX. Twilio sobresale en manejar el enrutamiento de mensajes, así que nuestro objetivo era manejar todos los comandos slash en el servidor del bot de Discord, luego reenviar todos los otros mensajes (como mensajes directos enviados a chatbots o agentes en vivo) a Twilio.

## Definir el Flujo de Flex
El primer paso es asegurar que cualquier mensaje que enviemos a Twilio será enrutado a la ubicación correcta. Configuramos un flujo simple de Twilio que primero verifica si el usuario solicitó un agente en vivo, y si es así, reenvía los siguientes mensajes a SeaX. Si el usuario no solicitó un agente en vivo, entonces reenviamos el mensaje al chatbot para obtener una respuesta. Para más información sobre cómo configurar flujos, ver la [documentación de Twilio Studio Flow](https://www.twilio.com/docs/studio).

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-flow.png" alt="Un flujo simple de Flex Studio que enruta mensajes entrantes al chatbot o SeaX."/>

*Un flujo simple de Flex Studio que enruta mensajes entrantes al chatbot o SeaX.*
</center>

## Crear un Canal Personalizado
Así que ahora entendemos cómo se enrutarán los mensajes entrantes. Sin embargo, Discord no es un canal soportado nativamente por Twilio. Afortunadamente, Twilio tiene un tutorial detallado sobre cómo [agregar canales de chat personalizados a Twilio Flex](https://www.twilio.com/blog/add-custom-chat-channel-twilio-flex). Después de seguir la guía para configurar un nuevo canal personalizado en Twilio, realmente necesitamos reenviar mensajes de Discord a Twilio.

Primero configuramos el cliente de Twilio:

```python
from twilio.rest import Client
twilio_client = Client(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)
```

Ahora, una vez que recibimos un mensaje entrante de Discord, podemos reenviar ese mensaje a Twilio a través del cliente de Twilio. Primero, deberíamos verificar si el usuario ya existe en el sistema de Twilio y si ya tienen un canal de chat abierto.

```python
# Llamar al método get_user para verificar si el usuario existe, y si no, crear un nuevo usuario
user = await get_user(user_id, twilio_client, TWILIO_SERVICE_SID)

# Obtener los canales en los que está el usuario
user_channels = twilio_client.chat \
        .services(TWILIO_SERVICE_SID) \
        .users(user_id) \
        .user_channels \
        .list()
```

Si el usuario tiene un canal de chat abierto existente, necesitamos usarlo para que podamos acceder al historial del chat. Si no hay un canal de chat existente, creamos uno nuevo para el usuario:

```python
if user_channels:
    channel_sid = user_channels[-1].channel_sid
else:
    channel = twilio_client.flex_api \
            .channel \
            .create(
                flex_flow_sid=FLEX_FLOW_ID,
                chat_user_friendly_name=username,
                chat_friendly_name=chat_name,  # -> Nombre amigable para el canal de chat
                target=conversation_id,  # -> Identificador único para la identidad del usuario del chat
                identity=conversation_id,  # -> Usuario, ej. / ID de MD de Discord
        )
    channel_sid = channel.sid
```

Finalmente, una vez que establecemos un canal de chat abierto entre el usuario de Discord y Twilio, podemos reenviar el mensaje entrante al flujo de Twilio Studio.

```python
message = twilio_client.chat \
        .services(TWILIO_SERVICE_SID) \
        .channels(channel_sid) \
        .messages \
        .create(
            body=message_text,
            from_=user_id,
            x_twilio_webhook_enabled='true',
            attributes=json.dumps(message_json)  # Enviar encabezados como atributos para que se puedan acceder más tarde
        )
```
Ahora podemos reenviar mensajes entrantes de usuarios de Discord directamente a nuestro flujo de Twilio Flex. En el lado del bot de Discord, asegúrate de que todos los mensajes directos se reenvíen a Twilio. Ahora puedes intentar enviar mensajes directos al bot de Discord, y deberías verlos aparecer en los logs del flujo de Twilio Studio - ¡aunque aún no hemos terminado!

## Crear un Servidor HTTP para Soportar Enrutamiento Más Complejo

### Webhook de Mensajes Salientes
Así que ahora entendemos cómo se enrutarán los mensajes entrantes. Sin embargo, aún nos faltan algunas partes. Primero, sabemos que ahora podemos enviar mensajes a Twilio, pero ¿cómo respondemos a los usuarios en Discord? Nuestro bot de Discord es el único autorizado para enviar mensajes a nuestro servidor de Discord y usuarios, y Twilio no sabe cómo devolver nuestros mensajes al servidor de Discord. La solución es que necesitamos configurar un webhook de mensajes salientes que se active cada vez que hay un nuevo mensaje en el canal de chat de Twilio. En ese webhook, podemos usar nuestro bot de Discord para reenviar mensajes de vuelta a nuestro servidor.

Para esto, integraremos el bot de Discord en un servidor HTTP más potente. Configuramos un endpoint POST simple usando [FastAPI](https://fastapi.tiangolo.com/) que servirá como nuestro webhook de mensajes salientes. Una vez que tenemos el servidor configurado y nuestro bot de Discord ejecutándose con él, podemos definir el endpoint POST.

Este endpoint recibirá cada mensaje agregado al canal de chat, así que primero necesitamos filtrar todo excepto los mensajes salientes de SeaX. Luego, necesitamos obtener el ID del canal correcto del cuerpo del mensaje para saber dónde reenviar el mensaje. Finalmente, podemos usar el cliente de Discord para reenviar el mensaje al canal de Discord.

```python
@app.post("/forward-to-discord", status_code=200)
async def forward_discord_message(request: Request, response: Response) -> None:
    raw_body = await request.body()
    body = urllib.parse.parse_qs(raw_body.decode())

    # Solo enfocarse en mensajes del SDK (Flex, todos los otros mensajes vendrán de la API)
    if not body.get('Source') == ['SDK']:
        return

    # Los mensajes de Flex no contienen el conversationId del mensaje original
    # Necesitamos el convId para enviar mensajes de vuelta a la conversación en GBM
    # Obtener el mensaje anterior y extraer el conversationId
    message = twilio_client.chat \
            .services(TWILIO_SERVICE_SID) \
            .channels(body.get("ChannelSid")[0]) \
            .messages.list(limit=1)[0]

    attributes = json.loads(message.attributes)

    channel = discord_client.get_channel(attributes.get("channel", {}).get("id"))
    if channel:
        await channel.send(body.get("Body", [""])[0].get("text"))
    else:
        logger.error(f"¡No se encontró el canal de Discord con ID {get_channel_id(req)}!")
        response.status_code = 400
```

Finalmente, para enviar mensajes a nuestro endpoint, necesitamos hacer que Twilio sepa cuál es nuestro nuevo webhook. Cada canal de chat necesita configurar su propio webhook. Así que si volvemos a donde inicialmente creamos un nuevo canal de chat para el usuario, podemos agregar algo de código adicional para configurar el webhook:

```python
webhook = twilio_client.chat \
        .services(TWILIO_SERVICE_SID) \
        .channels(channel_sid) \
        .webhooks \
        .create(
            type='webhook',   
configuration_url=f"{SERVER_HOST}/forward-to-discord",
            configuration_method="POST",
            configuration_filters=["onMessageSent", "onMessageUpdated", "onMediaMessageSent"]
        )
```

### Integración del Bot

Así que ahora los mensajes salientes de SeaX deberían enrutarse correctamente de vuelta a nuestro servidor de Discord. Pero aún no hemos manejado los mensajes enviados al chatbot. Necesitamos configurar un endpoint final que se active desde el flujo de Twilio Studio y reciba mensajes de usuario, consulte al bot, y devuelva la respuesta a Discord.

```python
@app.post("/chatbot-to-discord", status_code=200)
async def receive_discord_message(request: Request, response: Response):
    """Recibir solicitudes POST de Twilio, consultar al bot, y devolver la respuesta a Discord."""
    req = await request.body()
    # Separar el cuerpo del mensaje original del contenido de twilio
    twilio_body, original_message_body = separate_original_message_body(req.decode())

    bot_response = await query_bot(original_message_body, bot_info)

    if bot_response:
        channel = discord_client.get_channel(original_message_body.get("channel_id"))
        if channel:
            for item in bot_response:
                await channel.send(item.get("text"))
```

Asegúrate de que el flujo de Twilio Studio tenga el webhook correcto para enrutar mensajes al bot. ¡Ahora hemos completado el enrutamiento de mensajes! Podemos ver una vista de alto nivel de todo el enrutamiento de mensajes en este diagrama:

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-routing-diagram.jpg" alt="Diagrama de enrutamiento de mensajes."/>

*Diagrama de enrutamiento de mensajes.*
</center>

# Resumen
En resumen, en esta serie del blog, discutimos la creciente popularidad de Discord y las oportunidades que trae como una nueva plataforma para que las marcas interactúen con los clientes. Introdujimos algunas características básicas de Discord para mostrar cómo las marcas pueden construir sus propias comunidades en línea, así como características más avanzadas que permiten a las marcas usar bots de Discord para automatizar la moderación y el servicio al cliente en sus servidores. Finalmente, compartimos cómo integramos Discord con nuestra plataforma de servicio al cliente SeaX, trayendo características avanzadas a las comunidades de Discord como transferencia de agente en vivo, gestión de casos y búsqueda de base de conocimientos impulsada por IA.
Para una demostración personal, o para aprender cómo Seasalt.ai puede ayudar a satisfacer tus necesidades específicas de negocio, por favor llena nuestro formulario ["Reservar una Demostración"](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting). Para más información sobre la integración Flex/Discord o para contactarnos, visita la [Lista de Socios de Twilio de Seasalt.ai](https://showcase.twilio.com/partner-listing/a8E8Z000000PDCQUA4).

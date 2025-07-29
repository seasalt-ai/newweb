---
title: "Discord (3/3): Discord y Twilio Flex: Llevando el Contact Center de Flex a un territorio inexplorado"
metatitle: "Discord (3/3): Twilio Flex Contact Center en Discord"
date: 2022-06-07T12:32:24-07:00
author: Kim Dodds
draft: false
image: /images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/flex-discord-thumbnail.png
description: "En este blog, demostraremos cómo Seasalt.ai integró un centro de contacto completo en un servidor de Discord."
weight: 1
tags: ["SeaX", "Discord"]
canonicalURL: "/blog/discord-and-twilio"
url: "/blog/discord-and-twilio/"
aliases:
  - /blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/
modified_date: "2025-07-28T16:56:53Z"
---

*Esta es nuestra última publicación de una serie de tres partes sobre la participación del cliente en Discord. Nuestro primer blog, [“Una nueva frontera para la participación del cliente”](https://seasalt.ai/blog/15-discord-a-new-frontier-for-customer-engagement/), discutió el aumento de la popularidad de Discord y la nueva oportunidad que presenta para que las marcas creen y participen en sus propias comunidades en línea. En la segunda parte, [“Cómo crear una comunidad y un bot de Discord para su marca”](https://seasalt.ai/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/), explicamos cómo crear un servidor de Discord para su marca y cómo integrar un bot para administrar la moderación del servidor, los anuncios, los comentarios de los usuarios, etc. Finalmente, en este blog presentaremos una demostración de cómo en Seasalt.ai integramos un centro de contacto completo en un servidor de Discord, lo que permite a las marcas manejar todos los aspectos de la atención al cliente en la plataforma.*

## Tabla de contenido
- [Tabla de contenido](#table-of-contents)
- [Demostración de servicio al cliente de Discord](#discord-customer-service-demo)
- [Twilio Flex](#twilio-flex)
- [SeaX](#seax)
- [Servidor de demostración](#demo-server)
  - [Ayuda de 1 a muchos: canales oficiales](#1-to-many-help-official-channels)
  - [Ayuda 1 a 1: Agente de servicio al cliente](#1-to-1-help-customer-service-agent)
    - [Base de conocimientos](#knowledge-base)
    - [Transferencia de agente en vivo](#live-agent-transfer)
  - [Gestión de casos](#case-management)
- [Análisis técnico profundo](#technical-deep-dive)
  - [Definir el flujo de Flex](#define-the-flex-flow)
  - [Crear un canal personalizado](#create-a-custom-channel)
  - [Crear un servidor HTTP para admitir un enrutamiento más complejo](#create-an-http-server-to-support-more-complex-routing)
    - [Webhook de mensajes salientes](#outbound-messages-webhook)
    - [Integración de bot](#bot-integration)
- [Resumen](#summary)

# Demostración de servicio al cliente de Discord
Si está ansioso por ir al grano y ver el producto final, primero presentaremos el video de demostración final:

<iframe width="85%" height="450px" src="https://www.youtube.com/embed/iUK4YkGYI6Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>


Nuestro objetivo es demostrar cómo se puede integrar Discord en el software de servicio al cliente existente (en este caso, [Twilio Flex](https://flex.twilio.com/)) para agregar valor adicional al servidor oficial de una marca. Siga leyendo para ver más de cerca nuestra implementación.

# Twilio Flex
Twilio es una empresa de comunicaciones bien establecida que ofrece API para administrar mensajes de texto, llamadas telefónicas, correos electrónicos, mensajes de chat y más. Flex es uno de los productos estrella de Twilio: un centro de contacto escalable basado en la nube que enruta mensajes y llamadas desde cualquier fuente a agentes virtuales y en vivo. Elegimos Flex como base para la integración de nuestro centro de contacto porque ya tiene un excelente soporte para una amplia variedad de canales, como Facebook, SMS y WhatsApp.

# SeaX
SeaX es un centro de contacto en la nube que está profundamente integrado con funciones avanzadas de inteligencia artificial que ayudan a impulsar la productividad y la satisfacción del cliente. SeaX es uno de los productos estrella de Seasalt.ai y ya se ha implementado para clientes en más de 150 países. La plataforma del centro de contacto SeaX se basa en Twilio Flex e incluye una variedad de funciones adicionales que permiten a los agentes en vivo ayudar mejor a los clientes. Algunas de las funciones más útiles son la conversión de texto a voz y de voz a texto interna, la base de conocimientos impulsada por IA y el sistema integrado de gestión de casos. Para obtener más información sobre todas las capacidades de la plataforma SeaX, visite la [página de inicio de SeaX](https://seax.seasalt.ai/?utm_source=blog/).

# Servidor de demostración
Ahora explicaremos cómo configuramos nuestro servidor de Discord. Para los fines de la demostración, imaginamos un escenario en el que nuestro servidor se usó como una comunidad para un juego como Pokémon Go. La siguiente tabla resume algunas de las funciones demostradas en nuestro servidor de Discord.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-features-2.png" alt="Descripción general de las funciones del servidor de Discord de servicio al cliente de demostración."/>

*Descripción general de las funciones del servidor de Discord de demostración.*
</center>

## Ayuda de 1 a muchos: canales oficiales
Se configuran varios canales en el servidor para proporcionar una transmisión directa entre los administradores/desarrolladores oficiales y los jugadores.
Solo los administradores y moderadores pueden publicar en el **canal de anuncios**, y puede incluir publicaciones (manuales o automatizadas) de la cuenta de Twitter, el sitio web u otras fuentes oficiales.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-announcement-channel.jpg" alt="El canal de anuncios en el servidor de Discord, con una publicación de una cuenta oficial de Twitter."/>

*El canal #announcements en el servidor de Discord de demostración.*
</center>

El **canal de informes de errores** permite a los jugadores discutir errores y problemas que rompen el juego. Los administradores pueden vigilar este canal para identificar cualquier problema en el juego que deba abordarse. Además, los usuarios pueden enviar un informe de error oficial usando el comando de barra `/bug` desde el canal.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-bug-report-channel.jpg" alt="El canal de informes de errores en el servidor de Discord, con un informe de error enviado."/>

*El canal #bug-report en el servidor de Discord de demostración, con un informe de error enviado.*
</center>

El **canal de solicitud de funciones** permite a los jugadores discutir cambios en el juego, mejoras en la calidad de vida, adiciones de contenido, etc. que les gustaría ver agregados al juego. Al igual que en el canal de solicitud de errores, sus comentarios pueden ser vistos por los moderadores de Discord y pueden usar el comando de barra `/new_feature` para enviar una solicitud oficial.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-feature-request-channel.jpg" alt="El canal de solicitud de funciones en el servidor de Discord, con un usuario realizando un comando de barra."/>

*El canal #feature-request en el servidor de Discord de demostración, con un usuario realizando un comando de barra.*
</center>

## Ayuda 1 a 1: Agente de servicio al cliente

Los jugadores pueden usar el comando de barra `/helpme` para iniciar un mensaje directo con un agente. El agente de servicio al cliente puede ser automatizado (agente virtual) o atendido por un agente en vivo.

Para nuestra demostración, configuramos un bot de preguntas frecuentes simple que consulta la base de conocimientos de la empresa para proporcionar sugerencias de artículos relevantes al usuario. El usuario también puede solicitar un agente en vivo y será transferido en el mismo chat a un agente en vivo en SeaX.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-customer-service-channel.jpg" alt="El canal de servicio al cliente en el servidor de Discord, con un usuario iniciando un DM."/>

*El canal #feature-request en el servidor de Discord de demostración, con un usuario iniciando un DM.*
</center>

### Base de conocimientos
Cuando el usuario envía una consulta al agente de servicio virtual, el agente puede remitir al usuario a artículos relevantes en la base de conocimientos.

### Transferencia de agente en vivo
Una vez que un usuario está en un mensaje directo con el bot, puede solicitar un agente en vivo. Se le notificará de inmediato que se ha creado un caso para él y que se le está transfiriendo a un agente en vivo. Cuando el agente en vivo se una al chat, también recibirá una notificación.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-customer-service-dm.jpg" alt="Un mensaje directo con el servicio al cliente, con sugerencias de artículos de la base de conocimientos, transferencia de agente en vivo y gestión de casos."/>

*Un mensaje directo con el servicio al cliente, con sugerencias de artículos de la base de conocimientos, transferencia de agente en vivo y gestión de casos.*
</center>

En el backend, los agentes en vivo pueden manejar las llamadas entrantes y los mensajes de chat de todos los canales (SMS, Facebook, Discord, llamadas de voz, etc.) a través de una única plataforma. En este caso, la plataforma de backend es SeaX.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/flex-discord-channel.jpg" alt="La interfaz de SeaX que muestra la vista del agente en vivo de una conversación con un usuario en Discord."/>

*La interfaz de SeaX que muestra la vista del agente en vivo de una conversación con un usuario en Discord.*
</center>

## Gestión de casos
Una característica que queríamos enfatizar en esta demostración es la gestión de casos. La solución de Discord de Seasalt.ai se integra con el sistema de gestión de casos de SeaX para rastrear adecuadamente varios casos de los usuarios. Cuando un usuario interactúa con el bot de Discord (como solicitar un agente en vivo o informar un error), podemos abrir automáticamente un nuevo caso y registrar toda la información importante sobre el usuario y el problema que está experimentando. Esto permite que el agente en vivo tenga fácil acceso a todos los problemas informados y se asegure de que hagan un seguimiento con los usuarios hasta que se resuelva el caso.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-new-case.png" alt="Creación de un nuevo caso en el sistema de gestión de casos de SeaX."/>

*Creación de un nuevo caso en el sistema de gestión de casos de SeaX.*

<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-existing-case.png" alt="Visualización de un caso existente en el sistema de gestión de casos de SeaX."/>

*Visualización de un caso existente en el sistema de gestión de casos de SeaX.*

</center>

# Análisis técnico profundo

Ahora hemos visto el producto final y todas las funciones disponibles para los miembros del servidor y los agentes en vivo que los asisten. Pero, ¿cómo se implementó todo en realidad? En nuestra última publicación de blog, “[Cómo crear una comunidad y un bot de Discord para su marca](https://seasalt.ai/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/)”, explicamos cómo crear el servidor de Discord para su marca y cómo integrar un bot de Discord para administrarlo. Para respaldar esta demostración más avanzada, también utilizamos [SeaChat, el motor de inteligencia artificial conversacional de Seasalt.ai](https://chat.seasalt.ai), para crear un chatbot simple que permite a nuestro bot de Discord manejar consultas en lenguaje natural para los usuarios.

Por el lado de SeaX, nuestro equipo trabajó en estrecha colaboración con Twilio para crear una solución de centro de contacto repleta de funciones basada en Twilio Flex. Para obtener más información sobre Twilio Flex y cómo funciona el proceso de configuración, puede leer la [Guía de inicio rápido de Twilio Flex](https://www.twilio.com/docs/flex/quickstart).

Después de preparar el servidor de Discord, el bot de Discord y el chatbot y asegurarnos de que tenemos una instancia funcional de SeaX en funcionamiento, el mayor desafío es enrutar correctamente los mensajes hacia y desde el usuario, el bot y los agentes en vivo en SeaX. Twilio es fantástico para manejar el enrutamiento de mensajes, por lo que nuestro objetivo es manejar todos los comandos de barra desde nuestro servidor de bot de Discord y luego reenviar todos los demás mensajes (como los mensajes directos al chatbot o al agente en vivo) a Twilio.

## Definir el flujo de Flex
El primer paso es asegurarse de que cualquier mensaje que enviemos a Twilio se enrute al lugar correcto. Configuramos un flujo de Twilio simple que primero verifica si el usuario solicitó un agente en vivo y, de ser así, reenvía los siguientes mensajes a SeaX. Si el usuario no solicitó un agente en vivo, reenviamos el mensaje al chatbot para obtener una respuesta. Para obtener más información sobre cómo configurar el flujo, consulte la [documentación de Twilio Studio Flow](https://www.twilio.com/docs/studio).

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-flow.png" alt="Un flujo de Flex Studio simple que enruta los mensajes entrantes a un chatbot o a SeaX."/>

*Un flujo de Flex Studio simple que enruta los mensajes entrantes a un chatbot o a SeaX.*
</center>

## Crear un canal personalizado
Así que ahora tenemos una idea de cómo se enrutarán los mensajes entrantes. Sin embargo, Discord no es un canal compatible de forma nativa con Twilio. Afortunadamente, Twilio tiene un tutorial detallado sobre cómo [agregar un canal de chat personalizado a Twilio Flex](https://www.twilio.com/blog/add-custom-chat-channel-twilio-flex). Después de seguir la guía para configurar el nuevo canal personalizado en Twilio, necesitamos reenviar los mensajes de Discord a Twilio.

Primero configuramos el cliente de Twilio:

```python
from twilio.rest import Client
twilio_client = Client(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)
```

Ahora, una vez que recibimos un mensaje entrante de Discord, podemos reenviar ese mensaje a Twilio a través del cliente de Twilio. Primero, debemos verificar si el usuario ya existe en el sistema de Twilio y si ya tiene un canal de chat abierto.

```python
# llamar al método get_user para verificar si el usuario existe y crear uno nuevo si no
user = await get_user(user_id, twilio_client, TWILIO_SERVICE_SID)

# obtener los canales en los que se encuentra el usuario
user_channels = twilio_client.chat \
        .services(TWILIO_SERVICE_SID) \
        .users(user_id) \
        .user_channels \
        .list()
```

Si el usuario tiene un canal de chat abierto existente, debemos usarlo para poder acceder al historial de chat. Si no hay un canal de chat existente, creamos uno nuevo para el usuario:

```python
if user_channels:
    channel_sid = user_channels[-1].channel_sid
else:
    channel = twilio_client.flex_api \
            .channel \
            .create(
                flex_flow_sid=FLEX_FLOW_ID,
                chat_user_friendly_name=username,
                chat_friendly_name=chat_name,  # -> El nombre amigable del canal de chat
                target=conversation_id,  # -> La identidad que identifica de forma única al usuario de chat
                identity=conversation_id,  # -> El usuario, ej./ el ID de DM de Discord
        )
    channel_sid = channel.sid
```

Finalmente, una vez que tenemos un canal de chat abierto entre el usuario de Discord y Twilio, podemos reenviar el mensaje entrante al flujo de Twilio Studio.

```python
message = twilio_client.chat \
        .services(TWILIO_SERVICE_SID) \
        .channels(channel_sid) \
        .messages \
        .create(
            body=message_text,
            from_=user_id,
            x_twilio_webhook_enabled='true',
            attributes=json.dumps(message_json)  # enviar los encabezados como atributo para que sean accesibles más tarde
        )
```
Ahora tenemos la capacidad de reenviar todos nuestros mensajes entrantes de los usuarios de Discord directamente a nuestro flujo de Twilio Flex. En el lado del bot de Discord, asegúrese de que todos los mensajes directos se reenvíen a Twilio. Ahora puede intentar enviar un mensaje directo al bot de Discord y debería verlo aparecer en los registros de flujo de Twilio Studio. ¡Pero aún no hemos terminado!

## Crear un servidor HTTP para admitir un enrutamiento más complejo

### Webhook de mensajes salientes
Así que ahora tenemos una idea de cómo se enrutarán nuestros mensajes entrantes. Sin embargo, todavía nos faltan algunas piezas. En primer lugar, sabemos que ahora podemos enviar mensajes a Twilio, pero ¿cómo respondemos a nuestros usuarios en Discord? Nuestro bot de Discord es lo único que está autorizado para enviar mensajes a nuestro servidor y usuarios de Discord, y Twilio no sabe cómo devolver nuestros mensajes al servidor de Discord de todos modos. La solución es que necesitamos configurar un webhook de mensajes salientes que se activará cada vez que haya un nuevo mensaje en el canal de chat de Twilio. Dentro de ese webhook, podemos usar nuestro bot de Discord para reenviar el mensaje a nuestro servidor.

Para hacer esto, integramos nuestro bot de Discord en un servidor HTTP más robusto. Usamos [FastAPI](https://fastapi.tiangolo.com/) para configurar un punto final POST simple que servirá como nuestro webhook de mensajes salientes. Una vez que tenemos el servidor configurado y nuestro bot de Discord funcionando junto a él, podemos definir el punto final POST.

Este punto final recibirá cada mensaje que se agregue al canal de chat, por lo que primero queremos filtrar todo excepto los mensajes salientes de SeaX. A continuación, necesitaremos obtener el ID de canal correcto del cuerpo del mensaje para saber a dónde reenviar el mensaje. Finalmente, podemos usar el cliente de Discord para reenviar el mensaje al canal de Discord.

```python
@app.post("/forward-to-discord", status_code=200)
async def forward_discord_message(request: Request, response: Response) -> None:
    raw_body = await request.body()
    body = urllib.parse.parse_qs(raw_body.decode())

    # solo prestar atención a los mensajes del SDK (Flex, todos los demás serán de la API)
    if not body.get('Source') == ['SDK']:
        return

    # Los mensajes de Flex no contienen el conversationId del mensaje original
    # Necesitamos el convId para enviar el mensaje de vuelta a la conversación en GBM
    # Obtener el mensaje anterior y extraer el conversationId
    message = twilio_client.chat \
            .services(TWILIO_SERVICE_SID) \
            .channels(body.get("ChannelSid")[0]) \
            .messages.list(limit=1)[0]

    attributes = json.loads(message.attributes)

    channel = discord_client.get_channel(attributes.get(“channel”, {}).get(“id”))
    if channel:
        await channel.send(body.get("Body", [""])[0].get(“text”))
    else:
        logger.error(f"¡No se pudo encontrar el canal de Discord con el ID: {get_channel_id(req)}!")
        response.status_code = 400
```

Finalmente, para que los mensajes se envíen a nuestro punto final, debemos informar a Twilio cuál es nuestro nuevo webhook. Cada canal de chat debe tener su propio webhook configurado. Entonces, si volvemos a donde creamos originalmente el nuevo canal de chat para el usuario, podemos agregar algo de código adicional para configurar el webhook:

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

### Integración de bot

Así que ahora los mensajes salientes de SeaX deberían enrutarse correctamente de vuelta a nuestro servidor de Discord. Pero todavía no hemos abordado los mensajes que van al chatbot. Necesitamos configurar un punto final final que se activará desde el flujo de Twilio Studio y recibirá el mensaje del usuario, consultará al bot y devolverá la respuesta a Discord.

```python
@app.post("/chatbot-to-discord", status_code=200)
async def receive_discord_message(request: Request, response: Response):
    """Recibir una solicitud POST de Twilio, consultar al bot y devolver la respuesta a Discord."""
    req = await request.body()
    # separar el cuerpo del mensaje original del contenido de Twilio
    twilio_body, original_message_body = separate_original_message_body(req.decode())

    bot_response = await query_bot(original_message_body, bot_info)

    if bot_response:
        channel = discord_client.get_channel(original_message_body.get(“channel_id”))
        if channel:
            for item in bot_response:
                await channel.send(item.get(“text”))
```

Asegúrese de que el flujo de Twilio Studio tenga el webhook correcto para enrutar los mensajes al bot. ¡Ahora hemos terminado nuestro enrutamiento de mensajes! Podemos ver una vista de alto nivel de todo el enrutamiento de mensajes en este diagrama:

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-routing-diagram.jpg" alt="Diagrama de enrutamiento de mensajes."/>

*Diagrama de enrutamiento de mensajes.*
</center>

# Resumen
Para concluir, en esta serie de blogs hemos discutido el aumento de la popularidad de Discord y la oportunidad que presenta para las marcas como una nueva plataforma para interactuar con los clientes. Hemos repasado algunas de las funciones básicas de Discord para mostrar cómo una marca puede configurar su propia comunidad en línea, así como funciones más avanzadas que permiten a las marcas automatizar la moderación y el soporte al cliente en su servidor con bots de Discord. Finalmente, compartimos nuestra demostración de cómo integramos Discord con nuestra plataforma de servicio al cliente, SeaX, para llevar funciones avanzadas a la comunidad de Discord, como la transferencia de agentes en vivo, la gestión de casos y la búsqueda en la base de conocimientos impulsada por IA.
Para una demostración personal, o para ver cómo Seasalt.ai puede ayudar a abordar sus necesidades comerciales específicas, complete nuestro formulario “[Reservar una demostración](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting)”. Para obtener más información sobre la integración de Flex/Discord o para contactarnos, visite la [lista de socios de Twilio de Seasalt.ai](https://showcase.twilio.com/partner-listing/a8E8Z000000PDCQUA4).

const e=`---
title: "Discord (2/3): Cómo Crear una Comunidad y un Bot de Discord para tu Marca"
metatitle: "Discord (2/3): Crea la Comunidad y el Bot de Discord de tu Marca"
date: 2024-07-30 00:00:00+00:00
draft: false
author: Kim Dodds
description: "En este blog, te guiaremos a través de la creación de un servidor para tu marca y la conexión de un bot, que puede automatizar la moderación, el informe de errores, los anuncios, etc."
weight: 1
tags:
  - SeaX
  - Discord
image: /images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-community-and-bot-for-your-brand.jpg
canonicalURL: /blog/create-a-discord-community-and-bot/
url: /blog/create-a-discord-community-and-bot/
---

*Nuestra publicación de blog, [“Discord: Una Nueva Frontera para la Interacción con el Cliente”](https://seasalt.ai/blog/15-discord-a-new-frontier-for-customer-engagement/), cubrió el aumento de popularidad de Discord y cómo las marcas pueden capitalizar esta nueva plataforma social para formar sus propias comunidades en línea e interactuar con los clientes. En este blog, te guiaremos a través de cómo crear un nuevo servidor oficial para tu marca, incluyendo cómo conectar un bot, que puede automatizar tareas como la moderación, el informe de errores, los anuncios, etc.*

## Tabla de Contenidos
- [Configuración del Servidor](#setting-up-the-server)
    - [Crear un Nuevo Servidor de Discord](#create-a-new-discord-server)
    - [Convertir el Servidor en un "Servidor de Comunidad"](#convert-the-server-to-a-community-server)
    - [Configurar Canales, Eventos y Otras Funciones](#set-up-channels-events-and-other-features)
    - [¡Corre la Voz!](#get-the-word-out)
- [Configuración del Bot de Discord](#setting-up-the-discord-bot)
    - [Crear un Nuevo Bot en el Portal de Desarrolladores de Discord](#create-a-new-bot-in-the-discord-developer-portal)
    - [Crear un Bot Simple de Discord con PyCord](#create-a-simple-discord-bot-with-pycord)
    - [Invitar al Bot de Discord](#invite-the-discord-bot)
    - [Probar la Integración](#test-the-integration)

# Configuración del Servidor

## Crear un Nuevo Servidor de Discord
Desde la aplicación de Discord, haz clic en el botón "Añadir Servidor" en la parte inferior izquierda.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/create-new-discord-server.png" alt="Creando un nuevo servidor de Discord."/>

*Mensaje al crear un nuevo servidor de Discord.*
</center>

Puedes seleccionar una plantilla si quieres empezar con algunos canales ya creados para ti, o puedes empezar desde cero. Y el primer paso es tan fácil como eso, ¡tu servidor está creado!

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/new-discord-server.png" alt="Un servidor de Discord recién creado."/>

*Un servidor de Discord recién creado.*
</center>

## Convertir el Servidor en un "Servidor de Comunidad"

Es muy recomendable habilitar las funciones de "comunidad" del servidor de Discord. Al convertir a un servidor de comunidad, habilitas herramientas adicionales que pueden ayudar a moderar, ejecutar y hacer crecer el servidor. En particular, los servidores de comunidad tienen acceso a las siguientes funciones:

- **Pantalla de Bienvenida**: Introduce a los nuevos usuarios a tu servidor
- **Canal de Anuncios**: Te permite transmitir mensajes a tus usuarios
- **Estadísticas del Servidor**: ver análisis sobre tu comunidad y usuarios
- **Descubrimiento**: Anuncia tu comunidad en el Directorio de Servidores de Discord

Junto al nombre del servidor en la esquina superior izquierda, haz clic en el menú desplegable y selecciona "Configuración del Servidor". Haz clic en la pestaña "Habilitar Comunidad" en el lado izquierdo y selecciona "Empezar".

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/convert-to-community-discord-server.png" alt="Convirtiendo un servidor de Discord regular en un servidor de comunidad."/>

*Habilitando la configuración del servidor de comunidad.*
</center>

Continúa con la configuración requerida. Habilitar la comunidad requiere que tu servidor realice una verificación adicional para los usuarios, habilite un filtro de chat y configure un canal de reglas.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-community-setup.png" alt="Configuración para un servidor de comunidad de Discord."/>

*Configurando el servidor de comunidad.*
</center>

Una vez que habilitas la comunidad, tienes acceso a varias funciones nuevas. Dos de las funciones más útiles son el mensaje de bienvenida y la verificación de membresía:

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-server-welcome-page.png" alt="Ejemplo de mensaje de bienvenida del servidor."/>

*Ejemplo de mensaje de bienvenida del servidor.*

<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-server-membership-screening.png" alt="Configuración de verificación de membresía."/>

*Configuración de verificación de membresía.*
</center>

## Configurar Canales, Eventos y Otras Funciones
Después de configurar el servidor de comunidad, también tienes acceso a nuevas funciones desde la página principal del servidor.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-server-channel-types.png" alt="Creando un nuevo canal en un servidor de Discord.", style="width:50%"/>

*Creando un nuevo canal.*

<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-server-channels.png" alt="Ejemplo de canales de un servidor de comunidad de Discord." style="width:50%"/>

*Canales del servidor de comunidad.*
</center>

Cuando creas un nuevo canal, tienes acceso a dos nuevos tipos de canal: anuncio y escenario. El canal de anuncios solo puede ser publicado por moderadores, y es útil para publicaciones y anuncios oficiales; muchos servidores tendrán bots que publicarán automáticamente sus feeds de Twitter o publicaciones de foros oficiales en este canal. El canal de "escenario" es un tipo especial de canal de voz que es útil para organizar eventos con una audiencia en vivo. El anfitrión tiene la capacidad de moderar a otros oradores (a diferencia de un canal de voz regular, donde es un todos contra todos).

Una vez que tu servidor esté configurado, podría verse así:

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/customized-discord-server.png" alt="Servidor de Discord totalmente personalizado."/>

*Servidor de comunidad totalmente personalizado.*
</center>

## ¡Corre la Voz!
Una vez que tu servidor esté configurado, ¡puedes empezar a invitar gente!
Discord ofrece un widget prefabricado gratuito, que se puede incrustar en cualquier sitio web para anunciar tu servidor.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-server-widget.png" alt="Configuración del widget del servidor de Discord."/>

*Configuración del widget del servidor.*

<iframe src="https://discordapp.com/widget?id=966505646944055326&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>

*Un ejemplo de un widget funcional para el servidor de Discord de Seasalt.ai's Near Me Messaging.*

</center>

Para generar confianza con los usuarios potenciales, puedes contactar opcionalmente al soporte de Discord para verificar tu servidor. La verificación colocará un icono de "verificado" junto al nombre de tu servidor, lo que indica que el servidor es la comunidad oficialmente afiliada de una empresa, marca y figura de interés público. Puedes ver los requisitos de verificación en el [sitio oficial de Discord](https://support.discord.com/hc/en-us/articles/360001107231-Verified-Server-Requirements).

Una vez que tu servidor despegue y tenga un buen número de usuarios, Discord ofrece más oportunidades para anunciar tu servidor internamente. Cuando tu servidor tenga al menos 8 semanas y más de 500 usuarios, puedes solicitar la asociación con Discord, lo que le dará a tu servidor ventajas exclusivas para socios. Una vez que alcances los 1,000 usuarios, puedes unirte a la Detección de Servidores, lo que permitirá a cualquier persona que use Discord descubrir y unirse a tu servidor.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-server-discovery.png" alt="Configuración y requisitos de Detección de Discord."/>

*Configuración y requisitos de Detección de Discord.*
</center>

# Configuración del Bot de Discord
Ahora que has configurado un servidor, puedes mejorarlo añadiendo un bot para automatizar algunos procesos, como la moderación, los comentarios de los usuarios y los anuncios. Sigue leyendo la siguiente sección para aprender a configurar un bot simple, y luego mantente atento al próximo blog de nuestra serie para ver cómo puedes integrar una experiencia de servicio al cliente completa dentro de tu servidor de Discord.

## Crear un nuevo Bot en el Portal de Desarrolladores de Discord
Crea una cuenta en el [Portal de Desarrolladores de Discord](https://discord.com/developers/applications). Crea una "Nueva Aplicación" y ponle un nombre.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/new-discord-application.png" alt="Crear una nueva aplicación en el Portal de Desarrolladores de Discord."/>

*Panel de desarrolladores de Discord: Aplicaciones.*
</center>

Selecciona tu nueva aplicación y haz clic en la pestaña "Bot" en el lado izquierdo.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/new-discord-bot.png" alt="Configuración del Bot de la aplicación."/>

*Configuración de la aplicación de Discord.*
</center>

Haz clic en "Añadir Bot" para crear tu bot de Discord.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-bot-settings.png" alt="Crear un nuevo bot de Discord."/>

*Creando un nuevo bot de Discord.*
</center>

Una vez creado, genera y copia el token del bot. Finalmente, asegúrate de que los permisos de mensajería estén activados.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-bot-messaging-permissions.png" alt="Permisos de mensajería del Bot de Discord."/>

*Creando un nuevo bot de Discord.*
</center>

## Crear un Bot Simple de Discord con PyCord

Utilizamos la [biblioteca PyCord](https://docs.pycord.dev/en/master/) como un envoltorio de Python para la API de Discord.

1. Instala PyCord y crea un nuevo archivo Python para tu bot de Discord.
2. Importa el paquete \`discord\` y crea una instancia del cliente \`discord\`.
3. Usa el envoltorio \`event\` del cliente para crear un método \`on_message\`. Este método recibirá cada mensaje enviado a un canal al que el bot tenga acceso.
    a. Dentro del método, primero verifica si el mensaje es del propio bot e ignóralo si lo es.
    b. De lo contrario, comenzaremos reaccionando solo a los mensajes que comiencen con \`$bot\`; si el mensaje comienza con esto, simplemente responderemos al mismo canal diciendo \`¡Recibí tu mensaje!\`.
4. Finalmente, al final del script, asegúrate de ejecutar el cliente de Discord para que comience a escuchar eventos en el canal.

\`\`\`python
import discord

discord_client = discord.Bot()
discord_token = "xxxxxxxxxxxx"
 
@discord_client.event
async def on_message(message):
    """Escucha y reacciona a los mensajes."""
    # Comprueba si el mensaje es del propio bot
    if message.author == discord_client.user:
        return

    msg = message.content
    if msg.startswith("$bot") or isinstance(message.channel, discord.DMChannel):
        await message.channel.send("¡Recibí tu mensaje!")

discord_client.run(discord_token)
\`\`\`

## Invitar al Bot de Discord
Ahora que has creado un bot, puedes invitarlo a tu servidor de Discord. En el Portal de Desarrolladores de Discord, selecciona tu aplicación y haz clic en la pestaña "OAuth2" en el lado izquierdo. En la sección "Scopes", selecciona "bot" y "applications.commands". En la sección "Bot Permissions", selecciona los permisos que tu bot necesitará. Para este bot simple, solo necesitará "Send Messages" y "Read Message History".

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-bot-oauth2-url.png" alt="URL de invitación de OAuth2 del Bot de Discord."/>

*URL de invitación de OAuth2 del Bot de Discord.*
</center>

Copia la URL generada y pégala en tu navegador. Se te pedirá que selecciones un servidor para invitar a tu bot. Selecciona el servidor que creaste anteriormente y haz clic en "Autorizar".

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-bot-invite.png" alt="Invitar al Bot de Discord a un servidor."/>

*Invitar al Bot de Discord a un servidor.*
</center>

## Probar la Integración
Ahora que tu bot está en tu servidor, puedes probarlo. Envía un mensaje que comience con \`$bot\` en cualquier canal al que tu bot tenga acceso. Tu bot debería responder con \`¡Recibí tu mensaje!\`.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-bot-test.png" alt="Probar el Bot de Discord."/>

*Probar el Bot de Discord.*
</center>

# Conclusión
En este blog, te hemos guiado a través de la creación de un servidor de Discord para tu marca y la conexión de un bot simple. En el próximo blog de nuestra serie, te mostraremos cómo integrar una experiencia de servicio al cliente completa dentro de tu servidor de Discord, utilizando la plataforma SeaChat de Seasalt.ai.

# Preguntas Frecuentes
**P: ¿Qué es Discord?**
R: Discord es una plataforma de comunicación que permite a los usuarios chatear por voz, video y texto. Es popular entre los jugadores, pero también es utilizado por comunidades y empresas para construir comunidades en línea e interactuar con los clientes.

**P: ¿Qué es un bot de Discord?**
R: Un bot de Discord es un programa automatizado que puede realizar tareas en un servidor de Discord. Los bots se pueden utilizar para la moderación, el informe de errores, los anuncios y más.

**P: ¿Cómo creo un servidor de Discord?**
R: Puedes crear un servidor de Discord desde la aplicación de Discord haciendo clic en el botón "Añadir Servidor" en la parte inferior izquierda. Puedes seleccionar una plantilla o empezar desde cero.

**P: ¿Cómo convierto mi servidor de Discord en un "Servidor de Comunidad"?**
R: Puedes convertir tu servidor de Discord en un "Servidor de Comunidad" desde la configuración del servidor. Esto habilitará herramientas adicionales que pueden ayudar a moderar, ejecutar y hacer crecer el servidor.

**P: ¿Cómo creo un bot de Discord?**
R: Puedes crear un bot de Discord en el Portal de Desarrolladores de Discord. Crea una nueva aplicación, añade un bot y genera un token. Luego puedes usar una biblioteca como PyCord para crear un bot simple.

**P: ¿Cómo invito a mi bot de Discord a un servidor?**
R: Puedes invitar a tu bot de Discord a un servidor generando una URL de invitación de OAuth2 en el Portal de Desarrolladores de Discord. Copia la URL y pégala en tu navegador para seleccionar un servidor para invitar a tu bot.

## Invitar al Bot de Discord
Ahora que has creado un bot, puedes invitarlo a tu servidor. En el Portal de Desarrolladores de Discord, selecciona tu aplicación y haz clic en la pestaña "OAuth2" en el lado izquierdo. En la sección "URL Generator", selecciona "bot" en la sección "Scopes" y "Send Messages" en la sección "Bot Permissions". Copia la URL generada y pégala en tu navegador. Selecciona tu servidor de Discord y haz clic en "Autorizar".

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-bot-invite-url.png" alt="Generando una URL de invitación para el bot de Discord."/>

*Generando una URL de invitación para el bot de Discord.*
</center>

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-bot-authorize.png" alt="Autorizando el bot de Discord para un servidor."/>

*Autorizando el bot de Discord para un servidor.*
</center>

## Probar la Integración
Ahora que el bot está en tu servidor, puedes probarlo. Ejecuta el script de Python que creaste para tu bot. En tu servidor de Discord, envía un mensaje que comience con \`$bot\` (por ejemplo, \`$bot hola\`). El bot debería responder con "¡Recibí tu mensaje!".

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-bot-test.png" alt="Probando el bot de Discord en un servidor."/>

*Probando el bot de Discord en un servidor.*
</center>

¡Felicidades! Has configurado un servidor de Discord y un bot simple. En la próxima publicación de esta serie, exploraremos cómo puedes integrar una experiencia de servicio al cliente completa dentro de tu servidor de Discord utilizando la API de Discord y Twilio Flex.
author: SeaHealth Editorial Team
description: Aprende a crear una comunidad en Discord y configurar un bot automatizado
  para gestión y participación, con consejos SEO para usuarios hispanohablantes.
lang: es
metatitle: Cómo crear una comunidad y bot en Discord
published: 2024-07-01
slug: 16-how-to-create-a-discord-community-and-bot
title: Cómo crear una comunidad y bot en Discord
---


# Cómo crear una comunidad y bot en Discord

Discord es una plataforma clave para comunidades digitales en España y Latinoamérica. Descubre cómo crear tu servidor y añadir un bot para automatizar y mejorar la gestión.

## Paso 1: Crea tu servidor de Discord

1. Regístrate e inicia sesión en Discord.
2. Haz clic en el icono “+” para crear un nuevo servidor.
3. Elige “Crear mi propio servidor” y define nombre y región.

## Paso 2: Invita miembros a tu comunidad

- Haz clic en el nombre del servidor y selecciona “Invitar personas”.
- Copia el enlace de invitación y compártelo con amigos o grupos.

## Paso 3: Configura un bot automatizado

1. Accede al Discord Developer Portal y crea una nueva aplicación.
2. Añade un bot y obtén el Token.
3. Usa Node.js o Python para programar el bot (se recomienda discord.js).
4. Aloja el bot en un servidor para funcionamiento 24/7.

## Ejemplos de automatización

- Mensaje de bienvenida
- Respuestas automáticas por palabra clave
- Comandos de administración
- Informes y estadísticas

## Consejos SEO

- Usa palabras clave como “Discord”, “comunidad” y “bot” en el título
- Estructura el texto en secciones claras
- Responde dudas comunes de usuarios hispanohablantes

---

*Este artículo está diseñado para ayudar a usuarios de habla hispana a crear comunidades activas y automatizadas en Discord.*
`;export{e as default};

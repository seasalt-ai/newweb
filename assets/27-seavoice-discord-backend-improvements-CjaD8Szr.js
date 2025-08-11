const e=`---
title: "Bot de Discord SeaVoice STT/TTS: Mejoras en el Backend y la Estabilidad"
metatitle: "Bot de Discord SeaVoice STT/TTS: Mejoras en el Backend y la ..."
date: 2022-12-13 11:58:34-08:00
modified_date: 2025-07-28T16:56:53Z
draft: false
author: Sydney Burgess, Kim Dodds, Drake Farmer, Jack Harvison, Dylan Strong, Cody Vernon
description: "Con la última versión, el Bot de Discord SeaVoice lanza mejoras masivas en el backend que mejoran la estabilidad del bot y el desarrollo futuro."
weight: 1
tags:
  - SeaVoice
  - Discord
image: images/blog/27-discord-backend-improvements/seavoice-discord-stt-tts-bot-backend-improvements.jpg
canonicalURL: /blog/seavoice-discord-backend-improvements/
url: /blog/seavoice-discord-backend-improvements/
---


*El Bot de Discord SeaVoice ha ganado popularidad como una de las mejores opciones para transcribir voz en los canales de voz de Discord. Con la última versión, estamos lanzando mejoras masivas en el backend que mejoran la estabilidad del bot y ayudan con el desarrollo futuro.*

# SeaVoice Recuerda: ¡Base de Datos en Línea!

¡Hola a todos, últimamente hemos estado trabajando en algunas cosas detrás de escena para el Bot de Discord SeaVoice que nos gustaría compartir!

Como vieron en nuestra publicación de blog anterior, agregamos muchas características para el Bot de SeaVoice, como nuestras nuevas grabaciones de llamadas y transcripciones. Junto con estos desarrollos, le hemos dado al Bot de Discord SeaVoice la capacidad de recordar lo que ha hecho: todo, desde comandos hasta el registro de errores. Ahora, cuando el bot le hable o lo use para grabar una llamada, toda esa información se guarda de manera organizada.

## Qué significa esto para los usuarios
Ahora, ¿qué significa esto para usted, se preguntará?

Bueno, para empezar, ¡nuestra nueva función de transcripción y descarga de audio no sería posible sin estas mejoras de backend! Ahora también podemos almacenar automáticamente cualquier caída desafortunada que experimente para que nuestro equipo de desarrollo pueda comenzar a solucionar estos problemas antes de que usted los note. Además, si alguien decide que ya no quiere que sus datos se almacenen en nuestro sistema, esta nueva organización nos permite encontrar, recuperar y/o eliminar rápidamente cualquier dato por servidor, canal, usuario, fecha, etc.

Es más, esto abre la puerta a nuevas funciones como el seguimiento de estadísticas, la moderación automática y mucho más. Moderadores, ¿les gustaría asegurarse de que se cumplan las reglas de su servidor o verificar con qué frecuencia se usa el bot en su servidor? ¿Quizás quieran recuperar esa conversación hilarante que tuvieron la semana pasada? Con el marco de la base de datos ahora firmemente establecido y utilizado en el bot de producción, una amplia variedad de nuevas funciones están más fácilmente al alcance.

## Privacidad de los datos

Naturalmente, cada vez que hablamos de guardar datos de usuario, surge la cuestión de la privacidad y seguridad de los datos. Aquí hay algunos puntos clave sobre cómo manejamos sus datos:
- Todos los datos de usuario se almacenan en un servidor remoto seguro, al que solo unos pocos empleados seleccionados de Seasalt.ai pueden acceder.
- SeaVoice solo registra los datos proporcionados por Discord que los usuarios proporcionan al interactuar con el bot SeaVoice; eso incluye:
    - Nombre e ID del servidor, canal y usuario
    - Texto introducido en el comando \`/speak\`
    - Audio hablado en un canal de voz mientras el bot está ejecutando el comando \`/recognize\`
- Estos datos solo serán utilizados por Seasalt.ai para mejorar los servicios.
- Puede solicitar que se eliminen todos o parte de sus datos en cualquier momento.

Para obtener todos los detalles, consulte la [Política de privacidad de Seasalt.ai](https://seasalt.ai/privacy/).

## Direcciones futuras

Gran parte de esta porción de la actualización no será perceptible, pero para nosotros la parte difícil ha terminado, y ahora podemos comenzar a trabajar en proyectos que le permitirán personalizar y usar el Bot de Discord SeaVoice aún más de lo que creía posible.
Una característica en el horizonte son las configuraciones personalizables del servidor y/o del usuario.
Con la base de datos en su lugar, esto nos permitirá guardar preferencias en el futuro, como si desea que se le recuerde que un chat de voz se está grabando, quién recibe el enlace de descarga de una transcripción de llamada, o quién desea optar por no ser grabado.

¿Tiene alguna idea que le gustaría ver agregada ahora que podemos guardar datos? ¡No dude en enviarnos algunas sugerencias a través del [Servidor oficial de Discord de SeaVoice](https://discord.gg/dfAYfwBQ)!

<center>
<iframe src="https://discordapp.com/widget?id=919037515514654721&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
</center>

## ¡Pruébalo!

¡Y si aún no has probado la última versión del Bot de SeaVoice, anímate a probarlo! Invita al [Bot de Discord SeaVoice](https://discord.com/oauth2/authorize?client_id=1001955060210749492&scope=bot) a tu servidor.
No dudes en leer la [documentación del Bot de SeaVoice](https://wiki.seasalt.ai/seavoice/discord/discord-bot/) también para ver cómo puedes usar el bot para satisfacer mejor las necesidades de tu comunidad.

¡Mantente atento a las emocionantes actualizaciones que se avecinan!

Gracias,

El equipo del Bot de SeaVoice.
`;export{e as default};

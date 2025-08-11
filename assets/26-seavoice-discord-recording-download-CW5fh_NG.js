const e=`---
title: "SeaVoice STT/TTS Discord Bot: El primero en proporcionar grabaciones de voz descargables con transcripciones de IA"
metatitle: "SeaVoice STT/TTS Discord Bot: Descargas de grabaciones"
date: 2022-12-13 11:51:16-08:00
modified_date: 2025-07-29 20:45:17+00:00
draft: false
author: Sydney Burgess, Kim Dodds, Drake Farmer, Jack Harvison, Dylan Strong, Cody Vernon
description: "Con la última versión, SeaVoice Discord Bot es el primero en la plataforma en ofrecer grabaciones de canales de voz descargables con transcripciones generadas por IA."
weight: 1
tags:
  - SeaVoice
  - Discord
image: images/blog/26-discord-download/seavoice-discord-audio-transcript-download.jpg
url: /blog/seavoice-discord-recording-download/
---

*El bot SeaVoice Discord ha ganado popularidad como una de las mejores opciones para transcribir voz en los canales de voz de Discord. Con la última versión, el bot es el primero en Discord en ofrecer grabaciones de canales de voz descargables con transcripciones generadas por IA.*

# Archivos de audio y transcripción descargables en Discord: Nuevas y emocionantes funciones en la última versión del bot de SeaVoice

¡Hola a todos, estamos emocionados de anunciar una nueva función para el bot SeaVoice Discord!

<center>
<img src="/images/blog/26-discord-download/1-seavoice-discord-speech-to-text.png" alt="El bot SeaVoice Discord transcribiendo voz de un canal de voz en tiempo real."/>

*El bot SeaVoice Discord transcribiendo voz de un canal de voz en tiempo real.*
</center>

Desde su lanzamiento, el bot SeaVoice Discord ha tenido dos capacidades principales: transcribe conversaciones utilizando tecnologías de voz a texto de alta precisión y puede sintetizar voz basándose en las entradas del usuario.
Ha crecido rápidamente en popularidad y ahora está en más de 700 servidores en todo el mundo poco después de su lanzamiento.

Como equipo, discutimos diferentes formas de hacer que el bot sea más útil y accesible para los usuarios.
Decidimos que proporcionar una grabación y una transcripción de las sesiones sería útil para registrar reuniones, guardar sesiones de juego y una serie de otras situaciones.

## Descripción general de la descarga de transcripciones y audio

<center>
<img src="/images/blog/26-discord-download/2-seavoice-audio-transcript-download-discord-direct-message.png" alt="El bot SeaVoice Discord envía un DM con transcripción y descargas de audio después de cada sesión."/>

*El bot SeaVoice Discord envía un DM con transcripción y descargas de audio después de cada sesión.*
</center>

Durante los últimos meses, nuestro equipo ha estado trabajando arduamente para hacer realidad esta idea.
Ahora, cuando traiga el bot a su llamada para transcribir su conversación con el comando \`/recognize\`, también grabará la llamada y conservará las transcripciones en segundo plano.
Cuando le pida al bot que se vaya, todos los que participaron en la llamada recibirán un mensaje directo del bot que contiene una transcripción completa y una grabación de la llamada.

<center>
<img src="/images/blog/26-discord-download/3-seavoice-discord-audio-download.png" alt="Al hacer clic en el enlace del bot SeaVoice Discord se abre una página web para previsualizar y descargar la grabación de audio."/>

*Al hacer clic en el enlace del bot SeaVoice Discord se abre una página web para previsualizar y descargar la grabación de audio.*
</center>

Habrá un enlace para descargar la grabación completa en formato mp3.
Esta es una grabación de una sola pista, por lo que la voz de todos los usuarios estará en el mismo archivo.
El procesamiento de audio para esto puede llevar un poco de tiempo, así que espere unos segundos para que el bot envíe el enlace, quizás hasta un par de minutos para conversaciones más largas.

<center>
<img src="/images/blog/26-discord-download/4-seavoice-discord-transcription-file.png" alt="Archivo de transcripción descargable enviado por el bot SeaVoice Discord."/>

*Archivo de transcripción descargable enviado por el bot SeaVoice Discord.*
</center>

La transcripción está en forma de archivo de texto e incluye marcas de tiempo para el inicio y el final de cada cosa que se dijo, así como el nombre de usuario de la persona que lo dijo.
Esto debería facilitar a los miembros de su servidor el seguimiento de las llamadas, y será útil para registrar reuniones de proyectos, así como sesiones de juego.

## Desafíos

También cabe señalar que tuvimos un gran desafío al manejar el audio, ya que Discord envía el audio de cada usuario por separado y sin incluir ningún silencio.
Así que tenga en cuenta que todavía puede haber algunos problemas que resolver, ¡y continuaremos mejorando esta función para que las grabaciones finales sean lo más precisas posible!
Si tiene algún problema con sus grabaciones o transcripciones, informe a nuestro equipo en el [Servidor oficial de Discord de SeaVoice](https://discord.gg/dfAYfwBQ).
<center>
<iframe src="https://discordapp.com/widget?id=919037515514654721&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
</center>

## Direcciones futuras

Con esta desafiante función finalmente lista para su lanzamiento, nuestro equipo ya está planificando nuestras próximas adiciones al bot.
Algunas cosas que estamos investigando para el futuro son permitir configuraciones personalizables para servidores y/o usuarios para cosas como: cómo quieren que se manejen las grabaciones, el formato del archivo de transcripción, si/cuándo reproducir un descargo de responsabilidad de grabación, el canal predeterminado para la salida de transcripciones, etc.
Nos encantaría escuchar cualquier sugerencia que tenga para nuevas funciones (o cómo mejorar las existentes) en nuestro [Servidor oficial de Discord de SeaVoice](https://discord.gg/dfAYfwBQ).

## ¡Pruébalo!

Mientras tanto, puedes invitar al [bot SeaVoice Discord](https://discord.com/oauth2/authorize?client_id=1001955060210749492&scope=bot) a tu servidor y probarlo tú mismo.
No dudes en leer también la [documentación del bot SeaVoice](https://wiki.seasalt.ai/seavoice/discord/discord-bot/) para ver cómo puedes usar el bot para que se adapte mejor a las necesidades de tu comunidad.


¡Esperamos que estas nuevas funciones te ayuden con todo lo que uses el bot y que te diviertas usándolas!


Saludos,


El equipo del bot SeaVoice
`;export{e as default};

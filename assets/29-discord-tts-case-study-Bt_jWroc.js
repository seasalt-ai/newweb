const e=`---
title: "Texto a voz en Discord: Un estudio de caso del bot TTS de Discord"
metatitle: "Texto a voz en Discord: Un estudio de caso del bot TTS de Di..."
date: 2022-12-27 17:04:20-08:00
modified_date: 2025-07-29 20:45:17+00:00
author: Kim Dodds
description: "En este blog, discutiremos nuestros hallazgos sobre cómo los usuarios reales de Discord utilizan nuestros servicios después de revisar varios meses de datos auténticos de texto a voz."
weight: 1
tags:
  - SeaVoice
  - Discord
image: images/blog/29-tts-case-study/discord-tts-accessibility.jpg
url: /blog/discord-tts-case-study/
---


*Después de lanzar SeaVoice, uno de los bots de texto a voz y voz a texto más rápidos y precisos en Discord, queríamos entender cómo los usuarios interactuaban realmente con los servicios. En este blog, discutiremos nuestros hallazgos después de revisar varios meses de datos reales de usuarios de texto a voz.*

# SeaVoice: Un bot de Discord de texto a voz y voz a texto

Discord, al ser una plataforma utilizada principalmente para una combinación de audio y chat basado en texto, es un fantástico campo de pruebas para los servicios de inteligencia de voz y procesamiento de lenguaje natural.
Implementamos el bot SeaVoice, equipado con comandos de texto a voz y voz a texto, en Discord en agosto de 2022.
Para obtener más información sobre cómo funciona el bot, o ver una breve demostración en video, puede visitar la [Wiki del bot SeaVoice Discord](https://wiki.seasalt.ai/seavoice/discord/6-community/).
En noviembre del mismo año, lanzamos una nueva versión con mejoras significativas en el backend (como se describe en nuestra publicación de blog anterior: [Bot SeaVoice Discord: Mejoras de backend y estabilidad](https://seasalt.ai/blog/27-seavoice-discord-backend-improvements/)) que nos permiten registrar datos anónimos sobre cómo los usuarios interactúan con el bot SeaVoice.
En este blog, analizaremos 1 mes de datos de usuario del comando de texto a voz.

## Uso de SeaVoice TTS

<center>
<img src="/images/blog/29-tts-case-study/discord-tts-usage.jpg" alt="Uso diario de texto a voz del bot SeaVoice Discord durante 7 semanas."/>

*Uso diario de texto a voz del bot SeaVoice Discord durante 7 semanas.*
</center>

En el momento de escribir este artículo, el bot SeaVoice se ha añadido a casi 800 servidores.
Desde que comenzamos a registrar los datos de uso en noviembre, hemos descubierto que el número total de solicitudes por día puede fluctuar desde tan solo 150 hasta más de 1.300 (con un promedio de aproximadamente 560).
Alrededor de 650 usuarios han probado el comando TTS al menos una vez.
Sin embargo, la mayoría de los usuarios no continúan usándolo regularmente después de probarlo.
De esos 650 usuarios que probaron el comando TTS, aproximadamente 200 lo usaron 20 veces o más, y solo 100 lo usaron 50 veces o más.
Dicho esto, ¡aquellos que disfrutan y confían en el comando TTS lo usan extensamente!
Nuestros 5 usuarios principales han enviado más de 1.000 solicitudes cada uno en los últimos dos meses, ¡y el usuario principal ha enviado casi 2.500 solicitudes solo!

## Observaciones

### Por qué la gente usa texto a voz

<center>
<img src="/images/blog/29-tts-case-study/why-mute-on-discord.jpg" alt="Razones por las que los usuarios del bot SeaVoice Discord utilizan texto a voz."/>

*Razones por las que los usuarios del bot SeaVoice Discord utilizan texto a voz.*
</center>

Entonces, nuestra primera pregunta después de ver los datos de uso es: **¿por qué los usuarios frecuentes utilizan el TTS en primer lugar?**
Buscamos en la base de datos para encontrar algunas explicaciones.
Los siguientes son comandos TTS reales de algunos de nuestros usuarios.

__*¿Por qué no hablas?*__

    - además no puedo hablar porque estoy comiendo
    - En realidad hablaría, pero estoy en el trabajo en este momento.
    - si hablo, despertaré a mi familia
    - lo siento, no voy a hablar mucho. me duele mucho la garganta.
    - podría hablar pero mi mamá está aquí
    - hoy estoy demasiado perezoso para hablar
    - no puedo hablar porque estoy enfermo pero quería entrar de todos modos :)
    - no totalmente mudo, solo requiere esfuerzo para hablar. Mucho esfuerzo algunos días
    - lo siento, estoy silenciado, mi abuela está hablando por teléfono y es ruidoso
    - Porque mi micrófono estaba roto

Después de encontrar estas explicaciones, podemos resumirlas en algunas razones principales:
- hay una barrera física (micrófono roto, dificultad para hablar, enfermedad, etc.),
- están ocupados haciendo otra cosa (comiendo, en el trabajo, etc.),
- su entorno es demasiado ruidoso o necesitan estar en silencio, o
- porque es conveniente y les gusta usarlo.

Pero, independientemente de la razón exacta por la que usan el servicio TTS, muchos usuarios expresaron su entusiasmo por poder participar en las conversaciones del canal de voz cuando de otro modo no podrían.
Creemos que el servicio TTS hace que los canales de voz de Discord sean más accesibles, y esa es la razón principal por la que nuestros usuarios habituales siguen utilizando el servicio.

### Uso del idioma

Una cosa que me llamó la atención al revisar las conversaciones fue que muchos usuarios intentaron usar el comando de texto a voz con diferentes idiomas.
Si bien algunos usuarios solo querían ver si funcionaría o pensaron que la pronunciación era divertida, otros, sin embargo, ¡continuaron usando el TTS en idiomas no ingleses durante períodos prolongados!

<center>
<img src="/images/blog/29-tts-case-study/discord-spanish-tts-test.png" alt="Un usuario prueba la pronunciación en español del modelo TTS de SeaVoice en inglés."/>

*Un usuario prueba la pronunciación en español del modelo TTS de SeaVoice en inglés.*
</center>

Este fue particularmente el caso con los hablantes de español, aunque (como señala el usuario anterior) el rendimiento de TTS no es bueno para el español, ya que el modelo solo está entrenado en inglés.
Comencé a anotar cada vez que encontraba un usuario que intentaba usar el comando TTS en un idioma que no fuera el inglés.

<center>
<img src="/images/blog/29-tts-case-study/discord-non-english-tts.jpg" alt="Recuento de intentos de enviar solicitudes no inglesas a TTS."/>

*Recuento de intentos de enviar solicitudes no inglesas a TTS.*
</center>

La tabla anterior muestra un recuento de cada conversación que encontré que tenía al menos una instancia de alguien usando el idioma correspondiente en el comando TTS.
Obviamente, el español es, con mucho, el más común, y junto con el hecho de que muchos usuarios continuaron usando la función TTS en español a pesar de que el rendimiento era deficiente, me hace preguntarme si no existe ya una alternativa viable en Discord para el TTS en español.
En cualquier caso, la gente está tratando de usar nuestro servicio TTS para otros idiomas, por lo que podemos realizar un seguimiento de qué idiomas tienen la mayor demanda y usar estos datos para informar nuestro entrenamiento de nuevos modelos.

### Comentarios sobre el bot

Otro tema interesante que se encontró en los registros fueron los comentarios sobre el propio bot.
Afortunadamente, vimos varios comentarios muy positivos sobre el bot y su rendimiento.

<center>
<img src="/images/blog/29-tts-case-study/discord-tts-inclusive-accessibility-user-comment.png" alt="Un usuario comenta que el bot le hace sentir más incluido."/>

*Un usuario comenta que el bot le hace sentir más incluido.*
</center>

Los comentarios más conmovedores fueron de aquellos que se sentían excluidos de los canales de voz, pero que ahora pueden participar gracias a la accesibilidad adicional que proporciona el bot.

También encontramos algunos comentarios constructivos.

<center>
<img src="/images/blog/29-tts-case-study/discord-tts-speed.png" alt="Un usuario comenta que la velocidad del TTS es un problema."/>

*Un usuario comenta que la velocidad del TTS es un problema.*
</center>

Un usuario mencionó que, dado que los usuarios primero deberán escribir la oración completa y luego enviarla, el TTS es más lento que el habla normal, por lo que a veces su pronunciación TTS se pronuncia un poco tarde en la conversación.
Como se mencionó en la sección anterior, también vimos solicitudes de soporte de idiomas adicionales, así como un usuario que esperaba poder traducir entre idiomas usando el bot.
Mantenerse al tanto de este tipo de comentarios nos ayudará a planificar y mejorar las funciones en el futuro.

### Novedad

Después de hojear toda la colección de comandos TTS, diría que aproximadamente dos tercios de las expresiones se utilizan en conversaciones generales con amigos y otras personas en el servidor.
La mayoría de la gente está jugando y simplemente chateando con sus amigos, y estos usuarios tienden a ser los que usan el servicio TTS regularmente.
Por otro lado, el tercio restante de las expresiones se encuadra en la categoría de “simplemente hacer el tonto”.
Cuando se te da el poder completo de hacer que una voz diga lo que quieras, creo que es la naturaleza humana elegir la cosa más tonta u obscena que se te ocurra solo para reír.
Recuerdo estar sentado en el laboratorio de computación de la escuela primaria y entretenerme durante horas y horas con Microsoft Sam (muy alta tecnología en ese momento), viendo si podíamos hacer que dijera cosas como “caca” o “culo”.
Bueno, supongo que niños como yo crecieron, adquirieron un vocabulario más rico y terminaron encontrando el mismo entretenimiento con nuestro servicio TTS en Discord.

<center>
<img src="/images/blog/29-tts-case-study/discord-tts-stress-test.png" alt="Ejemplos de solicitudes TTS extrañas enviadas por los usuarios."/>

*Ejemplos de solicitudes TTS extrañas enviadas por los usuarios.*
</center>

A veces, los usuarios simplemente intentan romper el bot escribiendo cosas como: cadenas excesivamente largas, caracteres especiales, emojis, URL, etc.
Este es un ejemplo clásico de personas que prueban los límites del software, y en realidad nos ayuda a asegurarnos de que nuestros servicios sean robustos y puedan manejar cualquier entrada que los usuarios les arrojen.

Otras veces, los usuarios encuentran entretenimiento haciendo que el servicio TTS diga las cosas más obscenas y ofensivas que se les ocurran.
En los registros de TTS, creo que vi todas las palabrotas que conozco (y quizás algunas que nunca había escuchado antes), insultos raciales y contenido sexual explícito.

## La cuestión de la ética

Desafortunadamente, hay muchas maneras en que una aplicación de texto a voz puede usarse de manera desagradable: como para promover el discurso de odio o el ciberacoso.
Además, si bien los clips de audio se sintetizan a partir de un modelo, los datos para entrenar el modelo provienen de una persona real y la salida de un buen modelo puede sonar casi indistinguible del original.

Así que estos puntos, junto con la forma en que hemos visto a usuarios reales usar (o abusar) de nuestro servicio TTS, plantean algunas preguntas muy importantes para Seasalt.ai como empresa y para el bot SeaVoice Discord:

- *¿Queremos como empresa que nuestro producto se utilice de formas potencialmente ofensivas o dañinas?*
- *¿Qué derechos tienen los actores de voz sobre cómo se utiliza su voz en las aplicaciones de texto a voz?*
- *¿Tenemos el derecho o la responsabilidad de censurar cómo se utiliza nuestro servicio?*

Estas son preguntas que no pueden ser respondidas, o incluso exploradas completamente, en una sola publicación de blog.
Sin embargo, la empresa siente la obligación de considerar continuamente estos problemas a medida que avanzamos con nuestro proyecto de Discord y continuamos trabajando con nuestros actores de voz.

Gracias por su interés en nuestro bot de Discord y proyectos de inteligencia de voz. Puede obtener más información sobre nuestro producto STT en nuestra [página de inicio de voz a texto](https://suite.seasalt.ai/tts). Para una demostración individual de cualquiera de nuestros productos de inteligencia de voz, complete el [formulario de reserva de demostración](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting).

En el lado de Discord, puede obtener más información sobre nuestro bot y agregarlo a su servidor desde la [Wiki del bot SeaVoice Discord](https://wiki.seasalt.ai/seavoice/discord/6-community/). No dude en unirse a nuestro [servidor oficial de Discord de SeaVoice](https://discord.gg/dfAYfwBQ).

<center>
<iframe src="https://discordapp.com/widget?id=919037515514654721&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
</center>
`;export{e as default};

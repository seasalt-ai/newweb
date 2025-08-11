const e=`---
title: "Voz a texto en Discord: un estudio de caso del bot STT de Discord"
metatitle: "Voz a texto en Discord: un estudio de caso del bot STT de Discord"
date: 2023-01-23 11:25:00-08:00
draft: false
author: Kim Dodds
description: "En este blog, discutiremos nuestros hallazgos sobre cómo los usuarios reales de Discord utilizan los servicios de SeaVoice después de revisar varias semanas de datos auténticos de voz a texto."
weight: 1
tags:
  - SeaVoice
  - Discord
image: images/blog/30-stt-case-study/discord-stt-bot-case-study.jpg
canonicalURL: /blog/speech-to-text-discord-case-study/
url: /blog/speech-to-text-discord-case-study/
---

*Después de lanzar SeaVoice, uno de los bots de texto a voz y voz a texto más rápidos y precisos en Discord, queríamos entender cómo los usuarios interactuaban realmente con los servicios. En este blog, discutiremos nuestros hallazgos después de revisar varias semanas de datos de usuario reales de voz a texto.*

# SeaVoice: Un bot de Discord de texto a voz y voz a texto

Discord, al ser una plataforma utilizada principalmente para una combinación de chat de audio y texto, es un fantástico campo de pruebas para los servicios de inteligencia de voz y procesamiento de lenguaje natural. Implementamos el bot SeaVoice, equipado con comandos de texto a voz y voz a texto, en Discord en agosto de 2022. Para obtener más información sobre cómo funciona el bot, o ver una breve demostración en video, puede visitar la [wiki del bot SeaVoice](https://wiki.seasalt.ai/seavoice/discord/1-intro-discord-bot/). En noviembre del mismo año, lanzamos una nueva versión con mejoras significativas en el backend (como se describe en nuestra publicación de blog: [Bot de Discord SeaVoice: mejoras de backend y estabilidad](https://seasalt.ai/blog/27-seavoice-discord-backend-improvements/)) que nos permiten registrar datos anónimos sobre cómo los usuarios interactúan con el bot SeaVoice. En nuestro último blog ([Estudio de caso del bot de Discord TTS](https://seasalt.ai/blog/29-discord-tts-case-study/)) analizamos 1 mes de datos de usuario del comando de texto a voz. Como seguimiento, en esta publicación analizaremos aproximadamente 3 semanas de datos de usuario de voz a texto.

## Uso de STT de SeaVoice

¡Al momento de escribir esto, el bot SeaVoice ha sido agregado a casi 900 servidores! Alrededor de 260 servidores con un total de más de 600 participantes han probado el comando STT al menos una vez. En las últimas 3 semanas hemos alojado casi 1.800 sesiones de STT y hemos generado un total de **más de medio millón de líneas de transcripción**.

<center>
<img src="/images/blog/30-stt-case-study/discord-stt-sessions-per-day.png" alt="Sesiones diarias de voz a texto del bot Discord SeaVoice durante 3 semanas."/>

*Sesiones diarias de voz a texto del bot Discord SeaVoice durante 3 semanas.*
</center>

Si observamos el número total de sesiones STT por día, hemos descubierto que puede fluctuar desde tan solo 40 hasta más de 140 (con un promedio de alrededor de 70). También podemos considerar el número total de líneas de transcripción que estamos produciendo. En el día más lento, producimos tan solo 10 mil líneas, sin embargo, en un día ajetreado hemos producido más de 40 mil líneas. Para ponerlo en perspectiva, el 18 de enero, alojamos 102 sesiones STT con un total de poco menos de 30 mil líneas de transcripción; eso ascendió a casi 40 horas de tiempo de grabación.

También descubrimos que si bien la mayoría de las sesiones se utilizan para conversaciones más cortas (mediana de 57 líneas por sesión), hay un número significativo de sesiones muy largas que elevan el promedio a 650 líneas por sesión. ¡Nuestra sesión más larga fue de más de 30 mil líneas, más que el valor de un día promedio! Finalmente, también echamos un vistazo a cuántos usuarios suelen estar en cada sesión y descubrimos que normalmente hay de 4 a 5 usuarios en cada sesión, ¡sin embargo, una vez usamos el bot para admitir la transcripción en vivo en un seminario virtual que tuvo 45 participantes!

<center>
<img src="/images/blog/30-stt-case-study/discord-transcription-lines-per-day.png" alt="Líneas transcritas por el bot Discord SeaVoice por día durante 3 semanas."/>

*Líneas transcritas por el bot Discord SeaVoice por día durante 3 semanas.*
</center>

Si bien la mayoría de los servidores no han utilizado la sesión STT más de unas pocas veces, hay bastantes que utilizan el servicio de forma extensiva. Desde que comenzamos a registrar los datos de uso de STT a fines de diciembre, el número total promedio de sesiones por servidor es de aproximadamente 7; sin embargo, nuestro servidor #1 ha registrado 131 sesiones, ¡lo que representa un promedio de más de 6 sesiones por día! Ese mismo servidor ha transcrito más de 150 mil líneas de voz en solo 3 semanas. Quizás lo más impresionante es que nuestro usuario #1 es del mismo servidor y ha transcrito más de 60 mil líneas de su propia voz.

## Observaciones

### Por qué la gente usa la voz a texto

<center>
<img src="/images/blog/30-stt-case-study/discord-audio-transcript-download-user-quote.jpg" alt="Un usuario del bot Discord SeaVoice expresa entusiasmo por los archivos de audio y transcripción persistentes."/>

*Un usuario del bot Discord SeaVoice expresa entusiasmo por los archivos de audio y transcripción persistentes.*
</center>

Entonces, nuestra primera pregunta después de ver los datos de uso es: **¿por qué los usuarios frecuentes utilizan la voz a texto en primer lugar?**

Revisamos la base de datos para encontrar algunas explicaciones. Sin embargo, resultó más difícil encontrar explicaciones concretas de por qué los usuarios utilizaban el servicio STT en lugar del servicio TTS. Aparentemente, la gente siente la necesidad de explicar a los demás en el chat por qué están usando TTS, pero menos con STT. De todos modos, encontré algunas transcripciones interesantes que dieron una idea de por qué los usuarios deciden utilizar el servicio STT.

__*Por qué los usuarios utilizan STT:*__

- “Por eso se usa la transcripción, porque puedo ver cosas que me perdí.”
- “[usuario] tiene problemas de audición, así que consigue un bot que lo transcriba”
- “[usuario] asalta con ellos y lo usan para transcribir cosas, pero luego [usuario] dijo, oh, también podemos usar eso para ******* D y D”
- “No puedo esperar a volver y leer algunas de estas transcripciones más tarde [...] Quiero volver a escuchar esa grabación y ver esa transcripción de nuevo”
- “Si tenemos nuestras reuniones aquí, entonces podemos alimentar la transcripción de la reunión a la IA”
- “Durante una reunión con gente, es genial ver una transcripción”
- “[gente] que no está en el chat o gente que está en la comunidad, pero no forma parte del chat de voz, pero deciden mirar y leer”

En general, parece que la mayoría de los usuarios disfrutan de la comodidad de tener una transcripción en vivo que puede ayudarlos a seguir la conversación y llenar cualquier vacío que hayan perdido. Esto es particularmente cierto para los usuarios que tienen problemas de audición o dificultades de audio/conexión. Para algunos usuarios, la mayor ventaja es mantener un registro permanente de audio y texto de su conversación; esto podría ser particularmente aplicable para casos de uso como mantener un registro de sesiones de Dungeons & Dragons o mantener un registro de reuniones importantes.

Debido a que muchos usuarios no dijeron explícitamente por qué usaban el servicio STT, también pareció útil tener una idea de lo que estaban haciendo mientras usaban el bot. La revisión de las transcripciones de los usuarios me dio pistas sobre las actividades que estaban realizando mientras transcribían:

__*Lo que los usuarios están haciendo mientras usan STT:*__

- Solo chateando
    - Juegos:
    - Juegos casuales
    - Juegos avanzados (ej. coordinar grupos de MMO, Massive Multiplayer Online, raids)
- Juegos de rol (Dungeons & Dragons)
- Transmisión / grabación de contenido
- Discutir el trabajo escolar / profesional / voluntario

La gran mayoría de las transcripciones caen en las categorías de “solo chatear” y “juegos casuales”. Como vimos anteriormente, creo que la mayoría de los usuarios en este caso utilizan el bot para mejorar la accesibilidad del canal de voz de Discord y/o disfrutan de la comodidad de ver la transcripción en vivo para llenar cualquier vacío que hayan perdido en la conversación. En algunos casos (como cuando se usa para incursiones de MMO), las discusiones de juegos son muy complejas y los usuarios se coordinan entre sí en tiempo real; las transcripciones en vivo podrían resultar extremadamente útiles para el éxito del equipo, ya que los usuarios pueden consultar las transcripciones mientras juegan.

<center>
<img src="/images/blog/30-stt-case-study/discord-stt-for-mmo-raid.jpg" alt="Ejemplo de discusión compleja durante una incursión de MMO."/>

*Ejemplo de discusión compleja durante una incursión de MMO.*
</center>

También parece que muchos usuarios están usando el bot para transcribir conversaciones más serias, como reuniones escolares, profesionales y/o comunitarias de voluntarios. También usamos nuestro bot para transcribir una conferencia de tecnología en línea, [UnTechCon](https://gfsc.studio/2022/11/14/announcing-untechcon.html). En estos casos, los archivos de grabación y transcripción finales pueden resultar muy útiles para que los usuarios los revisen después de la reunión. Un último ejemplo interesante que encontré fue un usuario que grababa contenido para su transmisión. Dado que la transcripción final viene con marcas de tiempo, los usuarios podrían potencialmente cargar el archivo de transcripción como subtítulos para su contenido de audio o video grabado.

<center>
<img src="/images/blog/30-stt-case-study/discord-stt-accessibility-user-quote.jpg" alt="Un usuario de SeaVoice expresa su agradecimiento por hacer que los canales de voz de Discord sean más accesibles."/>

*Un usuario de SeaVoice expresa su agradecimiento por hacer que los canales de voz de Discord sean más accesibles.*
</center>

Pero independientemente de la razón exacta por la que usan el servicio STT, muchos usuarios expresaron entusiasmo por poder participar en las conversaciones del canal de voz cuando de otro modo no podrían. Creemos que el servicio STT hace que los canales de voz de Discord sean más accesibles, y esa es la razón principal por la que nuestros usuarios habituales siguen utilizando el servicio.

### Comentarios sobre el bot Discord SeaVoice

Otro tema interesante que se encontró en los registros fue el comentario sobre el propio bot. Afortunadamente, vimos varios comentarios muy positivos sobre el bot y su rendimiento.

<center>
<img src="/images/blog/30-stt-case-study/discord-seavoice-transcription-accuracy.png" alt="Un usuario de SeaVoice comenta sobre la precisión de la transcripción."/>

*Un usuario de SeaVoice comenta sobre la precisión de la transcripción.*
</center>

También encontramos varios comentarios constructivos.

<center>
<img src="/images/blog/30-stt-case-study/discord-stt-accuracy-british-accent.png" alt="Un usuario de SeaVoice sugiere mejoras para los acentos británicos."/>

*Un usuario de SeaVoice sugiere mejoras para los acentos británicos.*
</center>

<center>
<img src="/images/blog/30-stt-case-study/discord-stt-siri-accent-accuracy-comparison.png" alt="Un usuario compara el rendimiento de SeaVoice en inglés acentuado con el de Siri."/>

*Un usuario compara el rendimiento de SeaVoice en inglés acentuado con el de Siri.*
</center>

La mayoría de los comentarios constructivos tenían que ver con que el bot no funcionaba bien con el inglés con acento no estadounidense; en particular, los usuarios mencionaron los acentos británico y escocés. Para el futuro de nuestros servicios STT, podríamos esforzarnos significativamente en mejorar nuestro reconocimiento de voz para varios acentos del inglés. Por supuesto, el inglés no es el único idioma que hablan nuestros usuarios, por lo que también planeamos agregar más soporte de idiomas al bot. De hecho, actualmente estamos finalizando nuestras integraciones de STT y TTS en mandarín taiwanés, y pronto lanzaremos una versión actualizada del bot.

## Privacidad, sensibilidad de los datos y contenido potencialmente ofensivo

El desarrollo de la IA está rodeado por un torrente de dilemas éticos. Nuestros modelos necesitan grandes cantidades de datos de usuario reales para funcionar bien, *pero ¿cómo recopilamos esos datos de forma ética respetando la privacidad de nuestros usuarios?* Los modelos aprenden solo en función de los datos que se les proporcionan y, por lo tanto, tienen sesgos (potencialmente imprevistos); *entonces, ¿cómo podemos asegurarnos de que nuestros modelos sirvan a todos nuestros usuarios por igual?* Además, nuestros modelos no tienen un concepto de aceptabilidad social y pueden producir resultados que algunos usuarios consideren ofensivos. Como uno de nuestros usuarios lo expresó tan elocuentemente: *“¿Es racista si el bot lo hace, esa es la pregunta”*.

<center>
<img src="/images/blog/30-stt-case-study/stt-accidental-racial-slur.png" alt="Un usuario de SeaVoice señala una transcripción inexacta problemática."/>

*Un usuario de SeaVoice señala una transcripción inexacta problemática.*
</center>

La razón por la que menciono estos puntos es por algunas transcripciones preocupantes en los registros. El primer problema es que el bot ocasionalmente transcribe contenido ofensivo. En el ejemplo anterior, el bot transcribió accidentalmente el nombre de usuario de alguien como un insulto racial. Obviamente, esto es un error por parte del bot que puede ser ofensivo para nuestros usuarios y debe investigarse. Pero esto lleva a más preguntas: *¿dónde trazamos la línea entre la ofensa y el daño?*

<center>
<img src="/images/blog/30-stt-case-study/discord-transcription-censor.png" alt="Un usuario de SeaVoice comenta sobre el intento de censurar ciertas palabras de la transcripción."/>

*Un usuario de SeaVoice comenta sobre el intento de censurar ciertas palabras de la transcripción.*
</center>

Bueno, para empezar, hemos decidido dar ese poder a los usuarios. Una de las próximas características en las que trabajaremos es la censura configurable de TTS y STT. Esto permitirá a los servidores aplicar opcionalmente censuras para palabrotas, contenido sexual, insultos raciales, etc.

<center>
<img src="/images/blog/30-stt-case-study/discord-careful-transcript-content.png" alt="Un usuario de SeaVoice advierte a otro participante que sea consciente de que lo que digan aparecerá en la transcripción."/>

*Un usuario de SeaVoice advierte a otro participante que sea consciente de que lo que digan aparecerá en la transcripción.*
</center>

Curiosamente, otro problema relacionado que vimos fue que los usuarios se autocensuraban para evitar que ciertas cosas aparecieran en la transcripción. Esto fue sorprendentemente común, y vi muchos casos en los que los usuarios explicaron que no querían que el bot transcribiera lo que iban a decir, así que se detuvieron y luego reiniciaron el STT. Esta es una preocupación completamente válida por parte del usuario si, por ejemplo, no quieren que el bot transcriba información sensible.

<center>
<img src="/images/blog/30-stt-case-study/discord-stt-pause-deafen.png" alt="Cómo pausar el STT ensordeciendo al bot."/>

*Cómo pausar el STT ensordeciendo al bot.*
</center>

No estoy seguro de que haya alguna forma de mejorar la experiencia del usuario en este caso, pero aconsejaría a los usuarios que pueden “ensordecer” el bot temporalmente para dejar de enviar cualquier audio al bot. En este caso, el bot no recibirá ningún dato de audio hasta que se “desensordezca”, por lo que el usuario puede esencialmente pausar la sesión STT sin detener y comenzar una nueva.

<center>
<img src="/images/blog/30-stt-case-study/discord-stt-opt-out-mute.jpg" alt="Un usuario de SeaVoice comenta sobre la incomodidad de otro participante con el bot."/>

*Un usuario de SeaVoice comenta sobre la incomodidad de otro participante con el bot.*
</center>

Finalmente, el último problema que vimos es que algunos usuarios se sienten tan incómodos con la transcripción del bot que evitan activamente hablar en el canal de voz mientras el bot está presente. Esto es ***exactamente lo contrario*** de nuestro objetivo, que es hacer que los canales de voz de Discord sean más accesibles para todos. Si bien esperamos que los usuarios acepten nuestra [política de privacidad](https://seasalt.ai/privacy) y confíen en nosotros para usar sus datos de manera responsable, respetamos absolutamente el derecho de todos a la privacidad. Por lo tanto, **la próxima característica que implementaremos es una configuración de exclusión voluntaria de STT**. Esto permitirá a cualquier usuario excluirse de la grabación y transcripción de STT, y sus datos de audio no serán accedidos ni recopilados de ninguna manera por el bot.

Esperamos que estas características planificadas nos permitan seguir haciendo que los canales de voz sean más accesibles para todos, al tiempo que brindamos a los usuarios la capacidad de interactuar con el bot SeaVoice a un nivel con el que se sientan cómodos. ¡En el futuro, continuaremos esforzándonos por abordar proactivamente estos problemas desafiantes para que SeaVoice sea lo mejor posible!

¡Gracias por su interés en nuestro bot de Discord y gracias a nuestros usuarios por su continuo apoyo! Puede obtener más información sobre nuestro producto STT en nuestra [página de inicio de SeaVoice Speech-to-Text](https://suite.seasalt.ai/tts). Para una demostración individual de cualquiera de nuestros productos de inteligencia de voz, complete el [formulario de reserva de demostración](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting).

Si aún no ha probado el bot SeaVoice, puede obtener más información sobre nuestro bot y agregarlo a su servidor desde la [wiki del bot Discord SeaVoice](https://wiki.seasalt.ai/seavoice/discord/1-intro-discord-bot/). No dude también en unirse a nuestro [servidor oficial de Discord SeaVoice](https://discord.gg/dfAYfwBQ).

<center>
<iframe src="https://discordapp.com/widget?id=919037515514654721&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
</center>
`;export{e as default};

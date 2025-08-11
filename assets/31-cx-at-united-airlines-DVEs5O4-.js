const e=`---
title: "Servicio al cliente en United Airlines: lo bueno, lo malo y lo feo"
metatitle: "Análisis del servicio al cliente en United Airlines"
date: 2023-03-21 11:25:00-08:00
modified_date: 2025-07-28T16:56:53Z
draft: false
author: Xuchen Yao
description: "Xuchen Yao comparte su experiencia reciente con el servicio al cliente de United Airlines durante retrasos y cancelaciones de vuelos y propone soluciones para abordar el desafío de escalar dinámicamente el soporte al cliente durante el tráfico pico."
weight: 1
tags:
  - SeaX
image: images/blog/31-cx-at-united-airlines/flight-delay-illustration.png
canonicalURL: /blog/customer-service-at-united-airlines/
url: /blog/customer-service-at-united-airlines/
---

*[Seasalt.ai](https://seasalt.ai) CEO, Xuchen Yao, comparte su experiencia reciente con el servicio al cliente de United Airlines después de enfrentar retrasos y cancelaciones de vuelos. Esto lo llevó a darse cuenta de los desafíos que enfrenta el soporte al cliente de las aerolíneas para escalar dinámicamente y manejar el tráfico pico durante tales situaciones. Xuchen habla sobre posibles mejoras como desviar el tráfico de autoservicio de los agentes humanos, mejorar la eficiencia de los agentes humanos y desarrollar tecnología para identificar y reducir proactivamente los riesgos de posibles problemas.*

Este blog fue escrito en el vuelo UA2 de Singapur a San Francisco el 22/03/2023.

Recientemente tuve el placer de tomar el vuelo UA1 de San Francisco (SFO) a Singapur (SIN). El placer se convirtió rápidamente en una desgracia debido a la cancelación del vuelo. Aquí está lo que aprendí sobre el servicio al cliente de United desde la perspectiva de un tecnólogo que construye centros de contacto.



# Un vuelo de dos etapas: retrasado y cancelado

Aquí estaba el plan para el viaje a Singapur desde Seattle el martes 14/03/2023:

<center>
<img src="/images/blog/31-cx-at-united-airlines/united-flights.png" alt="Mis vuelos planeados de United"/>

*7:29 AM – 09:42 AM, de Seattle (SEA) a San Francisco (SFO) en UA2368. 11:50 AM – 08:15 PM, de San Francisco (SFO) a Singapur (SIN) en UA29.*
</center>

Desafortunadamente, no tomé ninguno de los vuelos.

El primer vuelo se retrasó 1.5 horas debido a un atasco en el aeropuerto de Seattle (¡a las 7 AM de la mañana!). Eso redujo mi tiempo de transición a 0 en SFO. Hablé con el servicio de campo en tierra de SEA y me pusieron en un vuelo de Alaska de SEA a SFO. Ese vuelo de Alaska también se retrasó, pero aun así llegó a SFO a las 11 AM, dándome apenas tiempo suficiente para tomar el siguiente vuelo.

**LO BUENO**: United me permitió cambiar mi vuelo a Alaska de forma gratuita.

**LO BUENO**: United fue muy proactivo con los retrasos a través de un código corto “26266”. Cuando ocurrió el retraso, incluso ofreció opciones para volver a reservar mis vuelos.

**LO MALO**: La opción de volver a reservar el vuelo solo se limita a los vuelos de United. No se puede volver a reservar entre aerolíneas. Tuve que hablar con una persona para que me pusieran en un vuelo diferente.

**LO FEO**: ¿Por qué el aeropuerto de SEA estaba tan atascado a las 7 AM?!

<center>
<table>
  <tr>
    <td><img src="/images/blog/31-cx-at-united-airlines/united-text-support-1.jpg" alt="Soporte de mensajes de texto de United - 1"/></td>
    <td><img src="/images/blog/31-cx-at-united-airlines/united-text-support-2.jpg" alt="Soporte de mensajes de texto de United - 2"/></td>
  </tr>
 </table>

*El sistema de mensajería de código corto de United Airlines es oportuno y proactivo.*
</center>


1. Lo interesante fue **en** UA1. Permanecimos en tierra durante 3 horas y finalmente el vuelo fue cancelado debido a los siguientes eventos:
2. Primero, San Francisco tuvo vientos muy fuertes que todos los vuelos fueron suspendidos.
Luego, cuando se autorizó el vuelo, todos los aviones esperaban en una cola muy larga para despegar.
3. Finalmente, cuando casi era nuestro turno, los pilotos dijeron que estaban trabajando horas extras y, según las regulaciones de la FAA, era ilegal que continuaran volando. Debido a que el vuelo a Singapur era de 17 horas y dado el tiempo que pasaron en tierra, habrían excedido el límite al llegar a Singapur.

Desafortunadamente, no había pilotos de reemplazo, por lo que todo el vuelo fue cancelado.

**LO FEO**: Durante las 3 horas que estuvimos en tierra, United ofreció 2 galletas. Eso es todo.

Todos salieron corriendo del avión, pensando en cómo esto afectaba su viaje. Dado que es un vuelo internacional, habríamos llegado a Singapur en un día diferente. No al día siguiente, sino en realidad dos días después: porque Singapur está 15 horas por delante y el vuelo dura 17 horas.

Luego, unos 300 pasajeros corrieron al servicio de atención al cliente en tierra de United. Cuando llegué al servicio de atención al cliente de United, ya había unas 200 personas en la fila delante de mí. Muchos de ellos se vieron afectados debido al clima de otros vuelos operados por United.

Hablar con un agente en tierra sería inútil dada la lentitud de la fila. Sé que hay otro vuelo a las 11 PM a Singapur el mismo día, también de United. Mi esperanza es que me vuelvan a reservar en ese vuelo a las 11 PM. Probablemente mucha gente de mi vuelo quería hacer lo mismo, pero todos se quedaron en la fila como yo.

Esto es lo que hice:

1. Llamé a United por teléfono: 800-864-8331
2. Envié un mensaje de texto al agente virtual de United a través del código corto: 32050.
3. Usé el sitio web de United para intentar chatear por video con el agente.
4. También estaba haciendo fila para un agente en tierra.

Literalmente, fui un cliente **multicanal** cuando necesité resolver un problema importante y urgente de inmediato.


**LO BUENO**: United ofreció 4 formas diferentes de conectarse con su servicio al cliente.

**LO BUENO**: Al confirmar el número de vuelo, United pudo obtener su estado y supo que estaba afectado, y ofreció opciones de cambio de reserva/cancelación.

**LO MALO**: La estimación del tiempo de espera telefónica estaba muy equivocada. Me dijeron que el tiempo de espera era de 2 minutos, pero esperé 45 minutos para hablar con un agente.

**LO MALO**: El chatbot es muy tonto. Tuve que seguir sus “menús” presionando 1/2/3/4 o A/B/C/D/E como respuestas.

<center>
<table>
  <tr>
    <td><img src="/images/blog/31-cx-at-united-airlines/united-text-support-3.jpg" alt="Soporte de mensajes de texto de United - 3"/></td>
    <td><img src="/images/blog/31-cx-at-united-airlines/united-text-support-4.jpg" alt="Soporte de mensajes de texto de United - 4"/></td>
    <td><img src="/images/blog/31-cx-at-united-airlines/united-text-support-5.jpg" alt="Soporte de mensajes de texto de United - 5"/></td>
  </tr>
 </table>

*El chatbot de United Airlines utiliza tecnología de última generación que ofrece una tarjeta de menú para limitar la entrada de pasajeros.*
</center>


**LO FEO**: Había literalmente menos de 10 agentes de servicio al cliente en tierra para atender a más de 1000 pasajeros afectados. Esto generó ansiedad, enojo, impotencia y presión tanto en los clientes como en los agentes. Esto se debe a que cuando nuestro vuelo fue cancelado, el servicio en tierra y los asistentes de vuelo les dijeron a todos que hablaran con su servicio al cliente en tierra. **Instruir a cada pasajero afectado para que hablara con los menos de 10 agentes de servicio al cliente en tierra creó un ataque físico de “DDOS” en el servicio al cliente en tierra de United.**

DDOS significa “Distributed Denial of Service” (Denegación de Servicio Distribuida) cuando los hackers dirigen el tráfico de millones de lugares a un solo sitio web para que no responda a ningún servicio.

**LO FEO**: Utilicé 4 canales para hablar con United (texto, videochat, llamada telefónica, en tierra). Utilicé 4 veces más recursos y todos los demás podrían haber hecho lo mismo. Esto aumentó artificialmente un pico de 4 veces el tráfico y la presión sobre el servicio al cliente de United. Supongo que todos los demás pasajeros hicieron lo mismo porque eso explica por qué mi “tiempo de espera de 2 minutos” finalmente se convirtió en 45 minutos.

Finalmente, me conecté por teléfono y el agente tardó unos 20 minutos en volver a reservarme en un vuelo posterior a las 11 PM a Singapur el mismo día. Cuando terminé, todavía estaba en la fila del videochat, lidiando con el chatbot (irónicamente se llama liveperson), y obviamente físicamente en la fila.

Le dije a un joven que estaba detrás de mí en el mismo vuelo que llamara a United. Él dijo: “¡De ninguna manera, eso tardará una eternidad!”. Pero yo le dije: “Acabo de volver a reservar por teléfono. Mira, hay 200 personas delante de nosotros, ¿cuánto tiempo crees que esperarás en la fila?”.

Más tarde, a las 11 PM, me encontré con el joven en mi vuelo con reserva cambiada. Estaba muy feliz de verme y no podía agradecerme lo suficiente por el “consejo telefónico”. Llevaba una camiseta de “tiktok” y auriculares de alta gama, así que pensé que podría ser un experto en tecnología o al menos bueno con las computadoras.

**LO FEO**: La percepción de un cliente “experto en tecnología” era que las llamadas telefónicas no le resolverían nada, preferiría esperar físicamente en la fila para hablar con una persona real mientras podía ver claramente lo larga que era la fila. **Esto refleja lo mal que el público en general piensa sobre la inutilidad del soporte telefónico.**

# Soporte al cliente de aerolíneas: el principal problema es la escalabilidad dinámica

Con la experiencia de tener un vuelo retrasado y otro cancelado el mismo día, y hablar con los servicios de atención al cliente a través de 4 canales diferentes en dos ocasiones, y una profunda comprensión de cómo se construyen los centros de contacto, creo que el principal problema del soporte al cliente de las aerolíneas es este:

**El soporte al cliente de las aerolíneas no puede escalarse dinámicamente. O, para decirlo en términos de computación en la nube: el soporte al cliente de las aerolíneas no es elástico.**

Esto no solo sucedió con United. Tuve experiencias similares con Air Canada durante el Covid-19: cada llamada telefónica tardaba más de 2 horas de espera.

Ni siquiera creo que un chatbot inútil o un agente humano sin empatía sea el problema principal. El soporte al cliente tiene un patrón único: **generalmente, cuando un vuelo se ve afectado, entre decenas y cientos de pasajeros intentan contactar al mismo tiempo, a veces con un multiplicador de 4 a través de canales cruzados.**

Este tipo de aumento de tráfico no se maneja bien en los centros de contacto modernos de las aerolíneas. Lo que lo empeora es que todos estos problemas son de “código rojo”: deben resolverse _inmediatamente_. Lo siento, no hay soporte de correo electrónico asíncrono basado en Zendesk. _Necesito hablar con un agente ahora mismo_.

# Soporte al cliente de aerolíneas: los humanos no escalan

Pensemos en cómo se prepara un sitio web de comercio electrónico durante el tráfico pico como el Black Friday:
1. **Predecir** qué tipo de tráfico obtendrá en qué momento.
2. **Pre-asignar** suficientes recursos de servidor contactando a proveedores de la nube o aumentando el límite de sus clústeres de servidores.
3. **Generar dinámicamente** más servidores cuando el tráfico aumenta.

¿Puede el soporte al cliente de las aerolíneas hacer lo mismo?
1. **Predecir**: existen modelos que podríamos usar para predecir cuándo un vuelo se ve afectado, pero no sé si los usan. Por ejemplo, se pueden tener en cuenta los siguientes factores:
    * Tráfico alrededor del aeropuerto – fácilmente extraíble de Google Maps
    * Congestión en el aeropuerto – algunos aeropuertos tienen actualizaciones en tiempo real
    * Clima local
    * Patrones de viaje habituales como vacaciones
    * Eventos locales que crean una gran afluencia y salida de pasajeros como el CES en Las Vegas
    * Otras señales como las condiciones del avión
    * Estados del historial
2. **Pre-asignar**: Creo que esto es lo que cada aerolínea está haciendo o debería hacer durante las temporadas de vacaciones contratando más agentes. Ciertamente espero que lo hagan. Sé que TurboTax contrata a más personas alrededor de las fechas límite de declaración de impuestos.
3. **Generar dinámicamente**: este es el caso más difícil. Simplemente no hay una manera fácil de hacerlo con humanos, especialmente con agentes capacitados y experimentados.

# Soporte al cliente de aerolíneas: cómo escalar

Nuestro objetivo principal es lidiar con el aumento del tráfico cuando los pasajeros necesitan resolver sus problemas en el acto, sin demora.
1. Los canales de autoservicio digital no parecen poder reemplazar totalmente a los agentes humanos por las siguientes dos razones:
Los canales de autoservicio digital son limitados y no ofrecen suficiente acceso a la oficina administrativa como lo tiene un agente humano.
2. Los pasajeros psicológicamente quieren hablar con un humano porque tradicionalmente las soluciones automatizadas no ayudaban, especialmente los infames chatbots.

La solución no es tan sencilla porque los humanos son difíciles de escalar. Pero también había formas de resolverlo:
1. Muchos problemas aún pueden resolverse mediante canales de autoservicio. Necesitamos identificarlos y desviar el tráfico de autoservicio de los agentes humanos.
    * Por ejemplo, cuando mi vuelo fue cancelado, todo lo que quería era volver a reservar los vuelos. Pero United no me ofreció esta opción y tuve que llamar. Sin embargo, cuando mi vuelo se retrasó, United me ofreció proactivamente la opción de volver a reservar. Las soluciones a ambos problemas son las mismas: no necesito hablar con un agente cuando mi vuelo se cancela más que cuando mi vuelo se retrasa. ¿Por qué no puedo autoservirme?
2. Los agentes humanos pueden ser más eficientes cuando están en el chat o en la llamada.
    * El agente de servicio al cliente tardó unos 30 minutos en volver a reservarme, con unos 15 minutos poniéndome en espera mientras ella trabajaba en algo.
    * Los 15 minutos restantes cuando me estaba hablando: la mitad del tiempo estaba recopilando información.
    * Siento que con la optimización, los 30 minutos se pueden acortar a 5-10 minutos si la recopilación de información y la automatización se realizan correctamente.

Si tuviera que construir un sistema de centro de contacto para United, esto es lo que haría:
1. Ofrecer chat y llamadas telefónicas como canales principales de servicio al cliente. No redirija un avión lleno de pasajeros a los servicios de atención al cliente en tierra (todos hemos visto lo abarrotados que están los lugares de alquiler de coches después de que un gran avión acaba de aterrizar en un destino turístico).
2. Fusionar clientes multicanal en un solo canal. Esto significa identificar a los clientes lo antes posible. Esto reducirá en gran medida el tamaño de la cola y ahorrará ancho de banda al agente.
3. Producir un soporte basado en chat más inteligente. La generación actual de chatbots se vuelve obsoleta, anticuada y muy impopular después de que ChatGPT salga. Deje que ChatGPT maneje la conversación, ¡en nuestra experiencia lo hace mejor que los humanos!
4. Enfatizar la eficiencia de los agentes humanos: hacer el trabajo no es suficiente si cada llamada dura 45 minutos; ayudémosles a resolver los problemas rápidamente ofreciendo:
    * Sugerencias de “próxima mejor acción”
    * “Resoluciones exitosas anteriores” basadas en los registros de chat o llamadas de otros agentes
    * Copiloto en tiempo real que ayuda con la ejecución a sistemas de back-office a través de llamadas API o automatizaciones RPA
5. Construir un modelo de predicción sobre el riesgo de aumento de solicitudes de servicio al cliente y trabajar proactivamente en ello.

Nunca tuve un agente de servicio al cliente que se comunicara proactivamente conmigo para resolver el problema. Siempre fui yo, el pasajero, esperando frustrado y llamando en la fila y en la línea.

En [Seasalt.ai](https://seasalt.ai/?utm_source=blog) estamos encantados de construir una tecnología similar a un "informe de minorías" para identificar el problema antes de que ocurra, reducir el riesgo contactando proactivamente a los pasajeros afectados y abordar el desafío de escalar dinámicamente un centro de contacto con humanos durante el tráfico pico.

Si en los próximos años recibo una llamada telefónica de la aerolínea comunicando un problema potencial antes de que intente buscar ayuda, esa será una experiencia de cliente verdaderamente asombrosa y un viaje delicioso incluso antes de que realice el viaje. Cualquier aerolínea que pueda hacerlo primero ganará muchos viajeros leales.
`;export{e as default};

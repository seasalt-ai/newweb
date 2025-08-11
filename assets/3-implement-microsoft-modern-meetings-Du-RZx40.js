const e=`---
title: "De la demostración al éxito: implementando las reuniones modernas de Microsoft y más allá (1/5)"
metatitle: "De la demostración al éxito (1/5): más allá de las reuniones modernas de Microsoft"
date: 2021-07-19
draft: false
author: Cody Kim
description: "En la primera parte de esta serie de blogs, siga el viaje de Seasalt.ai para crear SeaMeet, nuestras soluciones colaborativas de reuniones modernas."
weight: 1
tags:
  - SeaMeet
image: images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/SeaMeet animation.gif
canonicalURL: /blog/microsoft-modern-meetings/
url: /blog/microsoft-modern-meetings/
---

*A lo largo de esta serie de blogs, siga el viaje de Seasalt.ai para crear una experiencia de reuniones modernas bien completa, comenzando con sus humildes comienzos, optimizando nuestro servicio en diferentes hardware y modelos, integrando sistemas de PNL de última generación y finalmente terminando en la plena realización de SeaMeet, nuestras soluciones colaborativas de reuniones modernas.*

### El futuro de las reuniones modernas

[![Demostración del servicio de voz a texto de Microsoft de MS Build 2019](/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/ms-build-play.png)](https://www.youtube.com/watch?t=100&v=EYinMnQWgfU&feature=youtu.be)

En Microsoft Build 2019, Microsoft despertó a la audiencia cuando dio a conocer lo último en sus soluciones de computación en la nube: los Servicios de Voz de Azure, más específicamente su aplicación de Transcripción de Reuniones. Después de su introducción, este transcriptor de conversaciones aterrizó inmediatamente en el radar de todos y obtuvo menciones en los principales blogs y publicaciones periódicas de tecnología. La demostración, ilustrada en el video a continuación en 2019, mostró mucha fuerza de los Servicios de Voz de Azure. Poco sabíamos que rápidamente se convirtió en un preludio de cómo se celebrarían las reuniones modernas en un entorno de pandemia global y pospandemia: pasando de lo físico a lo virtual y a lo híbrido.

<center>
<img src="/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/azure-demo.png" alt="Demostración en vivo del servicio de voz a texto e identificación de hablantes de Microsoft Azure en MS Build 2019"/>
</center>

Anunciado como una plataforma de transcripción de conversaciones, el escaparate de Microsoft para el servicio de transcripción de reuniones de Azure, acertadamente presentado como “El futuro de las reuniones modernas”, estableció su nuevo servicio como una plataforma robusta y eficiente de voz a texto (STT) adecuada para todas las empresas que buscan una forma de capturar rápida y ordenadamente todas sus conferencias importantes.

¿Qué hace que este servicio sea el pináculo de la transcripción de reuniones? Primero, rendimiento en tiempo real. A medida que la tecnología se vuelve cada vez más rápida, la paciencia se vuelve cada vez más escasa, donde incluso un retraso de unos pocos segundos es más que suficiente para irritar al usuario promedio. Sin embargo, Microsoft demostró que su transcriptor de conversaciones es más que suficientemente rápido, proporcionando transcripciones precisas más rápido que algunos servicios de subtítulos cerrados, lo que hace que sea completamente factible seguir una conversación simultánea solo con el texto.

Luego, Microsoft también mostró sus capacidades de identificación de hablantes. Terminar con un lío de texto de conversación desorganizado es frustrante e inútil, pero la identificación de hablantes etiqueta automáticamente cada enunciado con el hablante, creando un formato de fácil consumo.

![Interfaz de usuario del servicio de voz a texto e identificación de hablantes de Microsoft Azure](/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/azure-ui.png)

Cada día, el hardware informático se vuelve más potente y las empresas buscan exprimir hasta el último núcleo de las últimas CPU y GPU. A menudo, la tecnología más antigua cae en la obsolescencia y los clientes se ven obligados a actualizar cada dos años solo para mantenerse relevantes en la sociedad. En “El futuro de las reuniones modernas”, Microsoft optimizó el Servicio de Voz de Azure para que se ejecutara en hardware de nivel de consumidor mientras mantenía la computación pesada de su lado, expandiendo aún más la ya vasta población que puede beneficiarse de este servicio.

El servicio de transcripción de reuniones de Azure se propone optimizar la forma en que hacemos negocios. Todas y cada una de las organizaciones harían bien en incorporar un producto como este en su flujo de trabajo. En un día normal, la información fluye constantemente y cada bit es tan significativo como el anterior, ya sean recordatorios, tareas o actualizaciones. Con demasiada frecuencia, las cosas se pierden en las grietas y eso significa tiempo y ganancias desperdiciados. Lo que ofrece la solución de Microsoft es un registro completo y generado automáticamente que delinea exactamente lo que se dijo y quién lo dijo, por lo que se acabaron los días de información perdida y de buscar a ciegas en largas grabaciones de audio una sección específica. Ahora, toda la información que necesita está ordenada para que la consulte con la frecuencia que necesite. Esta tecnología es más importante que nunca. Si el año 2020 nos enseñó algo, es la necesidad de flexibilidad, especialmente en el lugar de trabajo. La gente se enferma y surgen imprevistos, por lo que es prácticamente imposible esperar que los empleados asistan a todas las discusiones. Con las Reuniones Modernas, estamos un paso más cerca de poder acomodar estos desarrollos inesperados al darles a todos la capacidad de estar allí sin estar realmente allí.

### Implementando Reuniones Modernas

A mediados de 2020, recibimos una solicitud de propuesta de un cliente gubernamental en Singapur. Sí, todavía era una pandemia. Pero Singapur lo tenía bajo control, por lo que las reuniones gubernamentales todavía se llevaban a cabo en salas de conferencias físicas. Querían una solución moderna que pudiera transcribir el habla de hasta 12 hablantes diferentes. Además, la identificación de hablantes jugaría un papel importante aquí.

En la identificación de hablantes, una diferencia significativa entre lo que ofrece Azure y lo que necesita el cliente es la “inscripción” de voz: Azure requiere algo de voz pregrabada de todos los hablantes para inscribir su huella de voz en el sistema. Sin embargo, es imposible pedir a algunos funcionarios gubernamentales presumiblemente muy importantes que se sienten frente a un micrófono para ser grabados. Hicimos algunas adaptaciones al proceso haciendo primero una agrupación de hablantes no supervisada (también llamada diarización de hablantes). La idea es que si un hablante hubiera hablado una vez en nuestro sistema, lo reconoceríamos la próxima vez que hablara.

![Diagrama de flujo de los servicios de voz a texto e identificación de voz de Microsoft Azure](/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/azure-diagram.png)

*La arquitectura de las reuniones modernas de [Transcripción de Conversaciones de Azure](https://docs.microsoft.com/en-us/azure/cognitive-services/speech-service/conversation-transcription). En nuestra adaptación, relajamos el requisito de “Inscripción de usuario” antes de la reunión para después de la reunión.*


Luego, rápidamente reunimos nuestro arsenal para todo el proyecto. El primer paso fue obtener una matriz de micrófonos de alta calidad que entregara datos de audio nítidos a nuestros modelos de reconocimiento. Inmediatamente nos sentimos atraídos por el Azure Kinect: una elegante matriz de 7 micrófonos alojada en una carcasa de aluminio completa con la ventaja adicional de una cámara de alta definición y sensores de profundidad.

<center>
<img src="/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/kinect.png" alt="El Azure Kinect DK de $400 se usa para reuniones modernas"/>

*El [Azure Kinect DK](https://azure.microsoft.com/en-us/services/kinect-dk/) de $400 se usa para reuniones modernas*
</center>

Solo por su apariencia, este es un dispositivo verdaderamente sofisticado que complementaría cualquier sala de conferencias, pero lo más importante es que la potente matriz de micrófonos prometía la calidad que buscábamos. Con la disposición circular, los siete micrófonos abrieron la posibilidad de utilizar técnicas de procesamiento de señales de última generación, como la localización de fuentes y la formación de haces. Este micrófono también fue el complemento perfecto para nuestro backend, que utilizó los Servicios de Voz de Azure, una plataforma establecida de voz a texto que le dio a nuestro producto la potencia que necesitaba para ser un transcriptor de reuniones de primera línea.

<center>
<img src="/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/kinect-spec.png" alt="El Azure Kinect DK viene con una matriz de 7 micrófonos para captar voces"/>

*El Azure Kinect DK viene con una matriz de 7 micrófonos para captar voces*
</center>

Si bien Azure no llegó al corte final de SeaMeet, nos dio el comienzo que necesitábamos para poder hacer realidad nuestra visión. Finalmente, unimos todo esto con una interfaz de usuario. En nuestra primera iteración, nos las arreglamos con un diseño genérico basado en Java que, aunque simple, era perfectamente funcional. Debido a que el dispositivo Kinect no puede ejecutar código externo, todo esto tuvo que ejecutarse en una computadora portátil con Windows adicional. Aunque al principio fue un poco tosco, nos enorgullecía decir que teníamos un producto de transcripción de reuniones completamente funcional.

<center>
<img src="/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/seameet-old.png" alt="Configuración inicial del servicio SeaMeet de Seasalt.ai usando una matriz de micrófonos Microsoft Kinect"/>

*Implementando Reuniones Modernas con Azure Kinect y una computadora con Windows, que ejecuta una interfaz de usuario simple basada en Java para mostrar la transcripción de la reunión en tiempo real y la identificación del hablante.*
</center>

### Desplegando Reuniones Modernas

En mayo de 2021, nuestros ingenieros llegaron a Singapur para implementar nuestra solución empresarial moderna como prueba de concepto. Enfrentados a otras dos empresas competidoras, a cada uno de nosotros se nos encomendó la tarea de demostrar nuestra visión del futuro de las reuniones.

A pesar de que lo inalámbrico se había convertido en la norma durante la última década, descubrimos que nuestros competidores todavía optaban por una solución con cable. Como puede ver en la imagen, cada uno de los 12 hablantes estaba anclado a un micrófono individual. Un hablante tenía que hablar directamente al micrófono en un entorno de conversación cercana para que el sistema captara su voz. Esto no solo dificulta gravemente la flexibilidad, sino que una configuración de este tipo también multiplica la complejidad con equipos de AV complicados. Nuestra solución, por otro lado, está totalmente impulsada por capacidades de campo lejano, gracias a la matriz de 7 micrófonos y los algoritmos de procesamiento de señales.

Hasta cierto punto, nuestra solución era muy parecida a “Alexa para empresas”: un dispositivo cubre toda la sala, con solo un cable de alimentación requerido. En comparación con la solución de nuestros competidores, nuestra solución está generaciones por delante en el sentido de que realmente entendemos las necesidades de las empresas modernas, mientras que ellos todavía están completamente atados a la anticuada generación con cable.

<center>
<img src="/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/poc-setup.png"/>

*Configuración de la sala de conferencias PoC. Hubo 12 hablantes que simularon una reunión gubernamental de 2 horas.*

<img src="/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/poc-captioned.png"/>

*Una toma más cercana de todo el equipo en el sitio.*
</center>

El equipo se emocionó al ver la enorme diferencia. Con unas pocas horas de ajuste, el PoC final se desarrolló sin problemas. El equipo también disfrutó de un recorrido por Singapur después del PoC, en un país donde el Covid-19 estaba estrictamente contenido para que la vida y los negocios transcurrieran como de costumbre.

### Más allá de las reuniones modernas

Durante nuestro tiempo en Singapur, nuestros pensamientos fueron más allá de un PoC exitoso: en comparación con otras soluciones de la competencia, la nuestra era 10 veces mejor. Pero, ¿cómo podríamos hacerlo 10 veces mejor que nosotros mismos? Siga nuestros pasos hasta el próximo blog de esta serie.

`;export{e as default};

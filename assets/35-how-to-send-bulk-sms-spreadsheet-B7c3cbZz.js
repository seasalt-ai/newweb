const e=`---
title: "La forma correcta de enviar mensajes SMS a contactos en Excel, Google Sheets y Apple Numbers"
metatitle: "Envío masivo de SMS | Excel, Google Sheets, Apple Numbers"
date: 2024-05-16 00:00:00-08:00
draft: false
author: Xuchen Yao
description: "Aprenda las formas más seguras de enviar mensajes SMS a granel desde Excel, Google Sheets y Apple Numbers, mientras se mantiene compatible con 10DLC."
weight: 1
tags:
  - SeaX
  - Tutorial
image: images/blog/35-how-to-send-bulk-sms-spreadsheet/35-how-to-send-bulk-sms-spreadsheet.jpg
canonicalURL: /blog/how-to-send-bulk-sms-spreadsheet/
url: /blog/how-to-send-bulk-sms-spreadsheet/
---

El envío masivo de SMS a una lista de contactos es una técnica ampliamente utilizada por empresas, organizadores de eventos y diversos profesionales. La capacidad de enviar un mensaje de forma masiva puede ahorrar tiempo y ayudar a mantener a los contactos informados. Si bien Excel, Google Sheets y Apple Numbers no están diseñados inherentemente para enviar SMS, las extensiones y los servicios de terceros han surgido para facilitar esto. Sin embargo, hay trampas que uno debe tener en cuenta.

# Sea compatible: Registro 10DLC

El mundo de los SMS masivos ya no es tan sencillo como solía ser, especialmente con el surgimiento de regulaciones para combatir el spam y los mensajes no deseados. Si solo desea hacer esto una vez y no le preocupan las ramificaciones regulatorias, use los tutoriales en línea que le enseñan cómo enviar mensajes SMS masivos con un complemento. Sin embargo, si desea ejecutar un negocio sostenible y campañas de marketing, primero debe familiarizarse con las reglas de marketing por SMS.

Central para estas regulaciones es el sistema 10DLC.

10DLC significa Código Largo de 10 Dígitos y es el nuevo estándar para mensajes SMS A2P (Aplicación a Persona) en los EE. UU. Esto es lo que necesita saber:

- Propósito: Debido a un aumento en el spam y los mensajes no deseados, los operadores de red han implementado regulaciones estrictas sobre el uso de 10DLC para el envío masivo.
- Cumplimiento empresarial: Las empresas que deseen enviar mensajes SMS masivos deben registrar y aprobar su 10DLC. Esto asegura que cumplan con las regulaciones de los operadores.
- Riesgos de incumplimiento: El envío de SMS sin el registro adecuado o el uso de un 10DLC aprobado puede resultar en bloqueos u otras consecuencias.

Aquí hay un [artículo](https://support.twilio.com/hc/en-us/articles/1260800720410-What-is-A2P-10DLC-) que le muestra cómo registrarse para una campaña 10DLC. Seasalt.ai ha ayudado a muchos clientes de [SeaX Messaging](https://seax.seasalt.ai/?utm_source=blog) a cumplir con 10DLC. Si tiene alguna pregunta, no dude en contactarnos.

# Prepare sus contactos en hojas de cálculo

Una vez que haya configurado su campaña 10DLC, puede comenzar a enviar SMS masivos a sus clientes sin preocuparse de ser bloqueado.

Comencemos con un escenario simple: tiene una lista de contactos almacenada en una hoja de cálculo y desea enviarles a todos un SMS para un próximo evento. La hoja de cálculo puede estar en varios formatos. Los formatos más comunes son Excel, Google Sheets y Apple Numbers. Primero deberá limpiar los números de teléfono en su hoja de cálculo.

Tomemos Google Sheet como ejemplo. Los pasos para otros formatos de hoja de cálculo son muy similares. Aquí hay una guía paso a paso sobre cómo puede hacerlo.

## 1. Cree una copia de seguridad de sus datos

Una copia de sus contactos asegura que no perderá ningún dato de contacto si comete un error. Así es como se hace: **Haga clic en \`Archivo\` > \`Hacer una copia\`**.

<center>
<img src="/images/blog/35-how-to-send-bulk-sms-spreadsheet/1-make-a-copy-for-bulk-sms-contact-spreadsheet.png" alt="Haga una copia de seguridad de su hoja de cálculo de contactos para SMS masivos"/>

_Haga una copia de seguridad de su hoja de cálculo de contactos para SMS masivos_

</center>

## 2. Eliminar datos duplicados

a. Resalte todo el conjunto de datos.

b. Haga clic en \`Datos\` > \`Limpieza de datos\` > \`Eliminar duplicados\`.

c. Seleccione las columnas que desea verificar en busca de duplicados y luego haga clic en \`Eliminar duplicados\`.

d. Google Sheets le notificará cuántos duplicados se eliminaron.

<img src="/images/blog/35-how-to-send-bulk-sms-spreadsheet/2-remove-duplicates-for-bulk-sms-contact-spreadsheet.png" alt="Eliminar duplicados de la hoja de cálculo de contactos de SMS masivos"/>
_Eliminar duplicados de la hoja de cálculo de contactos de SMS masivos_

## 3. Estandarizar el formato del número de teléfono

a. Establezca un formato consistente. Verifique el formato de número de teléfono requerido por el servicio que está utilizando. Por ejemplo, SeaX Messaging acepta una variedad de formatos de teléfono como 5551234567 o 555-123-4567 o +15551234567.

b. Use \`Buscar y reemplazar\` para que el formato sea consistente. Por ejemplo, reemplace todos los puntos con guiones.

c. Si es necesario, use fórmulas o scripts personalizados para asegurarse de que todos los números sean consistentes. Esto puede requerir habilidades más avanzadas en hojas de cálculo.

<img src="/images/blog/35-how-to-send-bulk-sms-spreadsheet/3-clean-numbers-for-bulk-sms-contact-spreadsheet.png" alt="Estandarizar el formato de número de teléfono para la hoja de cálculo de contactos de SMS masivos"/>
_Estandarizar el formato de número de teléfono para la hoja de cálculo de contactos de SMS masivos_

### 4. Validación de datos

a. Para los números de teléfono, asegúrese de que todos tengan el número correcto de dígitos. Filtre o ordene los datos para identificar anomalías.

b. Para los nombres, busque entradas que puedan estar en blanco o contener datos irrelevantes.

<img height="500" src="/images/blog/35-how-to-send-bulk-sms-spreadsheet/4-validate-format-for-bulk-sms-contact-spreadsheet.jpeg" alt="Validar datos para la hoja de cálculo de contactos de SMS masivos"/>
_Validar datos para la hoja de cálculo de contactos de SMS masivos_

## 5. Verifique las celdas en blanco

Este paso es opcional. En SeaX Messaging, omitimos automáticamente una fila si las celdas están en blanco. Sin embargo, no a todos los proveedores o herramientas les gustan las celdas en blanco. Le recomendamos encarecidamente que realice este paso de limpieza de datos, pero es opcional para SeaX Messaging.

### Así es como se hace:

a. Resalte su rango de datos.

b. Haga clic en \`Formato\` > \`Formato condicional\`.

c. Establezca las celdas de formato en \`La celda está vacía\` y elija un color de resaltado.

d. Esto le permitirá identificar y abordar fácilmente las celdas en blanco.

<img height="500" src="/images/blog/35-how-to-send-bulk-sms-spreadsheet/5-clean-blank-cells-for-bulk-sms-contact-spreadsheet.png" alt="Comprobar celdas en blanco para la hoja de cálculo de contactos de SMS masivos"/>
_Comprobar celdas en blanco para la hoja de cálculo de contactos de SMS masivos_

## Más sobre la preparación de datos de contacto

Recuerde, la limpieza de datos es un proceso iterativo. Es posible que deba repetir estos pasos varias veces, dependiendo del tamaño y la calidad de su conjunto de datos. Siempre revise su trabajo cuidadosamente para garantizar la precisión.

## ¡Comience a enviar SMS!

Aunque Excel o Google Sheets no admiten SMS de forma nativa, existen varias extensiones y complementos de terceros que pueden cerrar esta brecha. Algunas opciones populares incluyen:

- ClickSend: Ofrece pasarelas de SMS y se integra bien con programas de hojas de cálculo.
- Zapier: Una herramienta de integración que puede conectar Google Sheets con servicios de SMS.

Sin embargo, si se toma en serio el marketing por SMS o incluso el marketing omnicanal con diferentes plataformas de mensajería como WhatsApp y Facebook Messenger, le recomendamos utilizar una plataforma de mensajería SMS dedicada. Estas plataformas le permiten organizar contactos, comunicarse directamente a través de chats y llamadas, rastrear el rendimiento y construir relaciones a largo plazo con los clientes. Los servicios de SMS de buena reputación mantienen una mejor relación con los operadores de red, lo que garantiza una entrega de mensajes más confiable. También brindan soporte al cliente para el registro 10DLC y capacitación para asegurarse de que se mantenga compatible.

Algunos proveedores populares de servicios de mensajería SMS incluyen:

- SeaX Messaging
- Simple Texting
- Textedly

# Cómo ejecutar operaciones exitosas de marketing de texto

<img height="500" src="/images/blog/35-how-to-send-bulk-sms-spreadsheet/6-successful-camapign-bulk-sms-contact-spreadsheet.jpeg" alt="Marketing SMS exitoso"}

Incluso con las mejores intenciones, pueden surgir problemas. Aquí hay algunas formas de ejecutar operaciones de marketing de texto exitosas a largo plazo:

- Manténgase informado: Revise regularmente los requisitos de 10DLC y asegure el cumplimiento continuo.
- Asegure la calidad del mensaje: Evite el contenido similar al spam, incluya opciones obligatorias de exclusión voluntaria y cumpla con todas las reglas del operador y regionales.
- Elija servicios SNS de buena reputación: Los servicios de SMS de terceros tienen un mejor conocimiento de las reglas de cumplimiento de 10DLC y también pueden tener una mejor relación con los operadores de red, lo que garantiza una entrega de mensajes más confiable.

# Conclusión

El envío masivo de SMS a contactos en programas de hojas de cálculo como Excel, Google Sheets y Apple Numbers puede ser un método de comunicación muy eficiente. Sin embargo, con la introducción de regulaciones como 10DLC, es imperativo abordar esta tarea con precaución y diligencia. Al comprender primero 10DLC, puede navegar por el mundo de los SMS masivos de manera más segura y efectiva.

## Contáctenos

Si desea obtener más información sobre 10DLC o explorar sus opciones para el marketing por SMS, [reserve una demostración](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting) con nosotros. ¡Siempre estamos felices de hablar!
`;export{e as default};

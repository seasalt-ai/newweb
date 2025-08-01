---
title: "Discord (3/3): Discord и Twilio Flex: Перенос контакт-центра Flex на неизведанную территорию"
metatitle: "Discord (3/3): Контакт-центр Twilio Flex в Discord"
date: 2022-06-07T12:32:24-07:00
author: Kim Dodds
draft: false
image: /images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/flex-discord-thumbnail.png
description: "В этом блоге мы продемонстрируем, как Seasalt.ai интегрировала полнофункциональный контакт-центр в сервер Discord."
weight: 1
tags: ["SeaX", "Discord"]
canonicalURL: "/blog/discord-and-twilio"
url: "/blog/discord-and-twilio/"
aliases:
  - /blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/
modified_date: "2025-07-28T16:56:53Z"
---

*Это наша последняя публикация в серии из трех частей о взаимодействии с клиентами в Discord. В нашем первом блоге [«Новый рубеж для взаимодействия с клиентами»](https://seasalt.ai/blog/15-discord-a-new-frontier-for-customer-engagement/) обсуждался рост популярности Discord и новые возможности, которые он предоставляет брендам для создания и участия в собственных онлайн-сообществах. Во второй части [«Как создать сообщество Discord и бота для вашего бренда»](https://seasalt.ai/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/) мы рассказали, как создать сервер Discord для вашего бренда и как интегрировать бота для управления модерацией сервера, объявлениями, отзывами пользователей и т. д. Наконец, в этом блоге мы продемонстрируем, как мы в Seasalt.ai интегрировали полнофункциональный контакт-центр в сервер Discord, что позволяет брендам обрабатывать все аспекты обслуживания клиентов на платформе.*

## Содержание
- [Содержание](#table-of-contents)
- [Демонстрация обслуживания клиентов Discord](#discord-customer-service-demo)
- [Twilio Flex](#twilio-flex)
- [SeaX](#seax)
- [Демо-сервер](#demo-server)
  - [Помощь 1-ко-многим: Официальные каналы](#1-to-many-help-official-channels)
  - [Помощь 1-к-1: Агент по обслуживанию клиентов](#1-to-1-help-customer-service-agent)
    - [База знаний](#knowledge-base)
    - [Передача живому агенту](#live-agent-transfer)
  - [Управление кейсами](#case-management)
- [Глубокое техническое погружение](#technical-deep-dive)
  - [Определение потока Flex](#define-the-flex-flow)
  - [Создание пользовательского канала](#create-a-custom-channel)
  - [Создание HTTP-сервера для поддержки более сложной маршрутизации](#create-an-http-server-to-support-more-complex-routing)
    - [Веб-хук исходящих сообщений](#outbound-messages-webhook)
    - [Интеграция бота](#bot-integration)
- [Резюме](#summary)

# Демонстрация обслуживания клиентов Discord
Если вы хотите сразу перейти к делу и увидеть конечный продукт, мы сначала представим окончательное демонстрационное видео:

<iframe width="85%" height="450px" src="https://www.youtube.com/embed/iUK4YkGYI6Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>


Наша цель — продемонстрировать, как Discord можно интегрировать в существующее программное обеспечение для обслуживания клиентов (в данном случае, [Twilio Flex](https://flex.twilio.com/)) для добавления дополнительной ценности официальному серверу бренда. Продолжайте читать, чтобы более подробно ознакомиться с нашей реализацией.

# Twilio Flex
Twilio — это хорошо зарекомендовавшая себя коммуникационная компания, которая предлагает API для управления текстовыми сообщениями, телефонными звонками, электронными письмами, сообщениями в чате и многим другим. Flex — один из флагманских продуктов Twilio: масштабируемый облачный контакт-центр, который маршрутизирует сообщения и звонки из любого источника виртуальным и живым агентам. Мы выбрали Flex в качестве основы для нашей интеграции контакт-центра, потому что он уже имеет отличную поддержку для широкого спектра каналов, таких как Facebook, SMS и WhatsApp.

# SeaX
SeaX — это облачный контакт-центр, глубоко интегрированный с передовыми функциями искусственного интеллекта, которые помогают повысить производительность и удовлетворенность клиентов. SeaX — один из флагманских продуктов Seasalt.ai, который уже был внедрен у клиентов в более чем 150 странах. Платформа контакт-центра SeaX построена на базе Twilio Flex и включает в себя множество дополнительных функций, которые позволяют живым агентам лучше помогать клиентам. Некоторые из наиболее полезных функций — это встроенные функции преобразования текста в речь и речи в текст, база знаний на основе искусственного интеллекта и интегрированная система управления кейсами. Для получения дополнительной информации обо всех возможностях платформы SeaX, пожалуйста, посетите [домашнюю страницу SeaX](https://seax.seasalt.ai/?utm_source=blog/).

# Демо-сервер
Теперь мы расскажем, как мы настроили наш сервер Discord. Для целей демонстрации мы представили сценарий, в котором наш сервер использовался как сообщество для игры, такой как Pokémon Go! В следующей таблице приведен обзор некоторых функций, продемонстрированных на нашем сервере Discord.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-features-2.png" alt="Обзор функций демонстрационного сервера Discord для обслуживания клиентов."/>

*Обзор функций демонстрационного сервера Discord.*
</center>

## Помощь 1-ко-многим: Официальные каналы
Несколько каналов на сервере настроены для обеспечения прямого потока между официальными администраторами/разработчиками и игроками.
В **канале объявлений** могут публиковать только администраторы и модераторы, и он может содержать (ручные или автоматические) публикации из учетной записи Twitter, веб-сайта или других официальных источников.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-announcement-channel.jpg" alt="Канал объявлений на сервере Discord, с публикацией из официального аккаунта Twitter."/>

*Канал #announcements на демонстрационном сервере Discord.*
</center>

**Канал отчетов об ошибках** позволяет игрокам обсуждать ошибки и проблемы, нарушающие игру. Администраторы могут следить за этим каналом, чтобы выявлять любые проблемы в игре, которые должны быть устранены. Кроме того, пользователи могут отправить официальный отчет об ошибке, используя команду `/bug` из канала.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-bug-report-channel.jpg" alt="Канал отчетов об ошибках на сервере Discord, с отправленным отчетом об ошибке."/>

*Канал #bug-report на демонстрационном сервере Discord, с отправленным отчетом об ошибке.*
</center>

**Канал запросов функций** позволяет игрокам обсуждать изменения в игровом процессе, улучшения качества жизни, добавления контента и т. д., которые они хотели бы видеть в игре. Подобно каналу запросов об ошибках, их ввод может быть просмотрен модераторами Discord, и они могут использовать команду `/new_feature` для отправки официального запроса.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-feature-request-channel.jpg" alt="Канал запросов функций на сервере Discord, с пользователем, выполняющим команду слэш."/>

*Канал #feature-request на демонстрационном сервере Discord, с пользователем, выполняющим команду слэш.*
</center>

## Помощь 1-к-1: Агент по обслуживанию клиентов

Игроки могут использовать команду `/helpme` для запуска прямого сообщения с агентом. Агент по обслуживанию клиентов может быть либо автоматизированным (виртуальный агент), либо управляться живым агентом.

Для нашей демонстрации мы настроили простой бот FAQ, который запрашивает базу знаний компании, чтобы предоставить пользователю соответствующие предложения статей. Пользователь также может запросить живого агента, и будет переведен в тот же чат к живому агенту на SeaX.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-customer-service-channel.jpg" alt="Канал обслуживания клиентов на сервере Discord, с пользователем, запускающим DM."/>

*Канал #feature-request на демонстрационном сервере Discord, с пользователем, запускающим DM.*
</center>

### База знаний
Когда пользователь отправляет запрос виртуальному агенту службы поддержки, агент может направить пользователя к соответствующим статьям в базе знаний.

### Передача живому агенту
Как только пользователь находится в прямом сообщении с ботом, он может запросить живого агента. Ему немедленно будет сообщено, что для него создан кейс и что он переводится к живому агенту. Когда живой агент присоединится к чату, он также получит уведомление.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-customer-service-dm.jpg" alt="Прямое сообщение со службой поддержки, содержащее предложения статей из базы знаний, передачу живому агенту и управление кейсами."/>

*Прямое сообщение со службой поддержки, содержащее предложения статей из базы знаний, передачу живому агенту и управление кейсами.*
</center>

В бэкенде живые агенты могут обрабатывать входящие звонки и сообщения чата со всех каналов (SMS, Facebook, Discord, голосовой вызов и т. д.) через единую платформу. В данном случае бэкенд-платформой является SeaX.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/flex-discord-channel.jpg" alt="Интерфейс SeaX, отображающий вид живого агента разговора с пользователем в Discord."/>

*Интерфейс SeaX, отображающий вид живого агента разговора с пользователем в Discord.*
</center>

## Управление кейсами
Одной из функций, которую мы хотели подчеркнуть в этой демонстрации, является управление кейсами. Решение Discord от Seasalt.ai интегрируется с системой управления кейсами SeaX для правильного отслеживания различных кейсов от пользователей. Когда пользователь взаимодействует с ботом Discord (например, запрашивает живого агента или сообщает об ошибке), мы можем автоматически открыть новый кейс и записать всю важную информацию о пользователе и проблеме, с которой он столкнулся. Это позволяет живому агенту легко получать доступ ко всем сообщенным проблемам и убедиться, что он следит за пользователями до тех пор, пока кейс не будет решен.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-new-case.png" alt="Создание нового кейса в системе управления кейсами SeaX."/>

*Создание нового кейса в системе управления кейсами SeaX.*

<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-existing-case.png" alt="Просмотр существующего кейса в системе управления кейсами SeaX."/>

*Просмотр существующего кейса в системе управления кейсами SeaX.*

</center>

# Глубокое техническое погружение

Теперь мы увидели конечный продукт и все функции, доступные членам сервера и живым агентам, которые им помогают. Но как все это было реализовано на самом деле? В нашей последней публикации в блоге «[Как создать сообщество Discord и бота для вашего бренда](https://seasalt.ai/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/)» мы рассказали, как создать сервер Discord для вашего бренда и как интегрировать бота Discord для управления им. Для поддержки этой более продвинутой демонстрации мы также использовали [SeaChat, разговорный ИИ-движок Seasalt.ai](https://chat.seasalt.ai), для создания простого чат-бота, который позволяет нашему боту Discord обрабатывать запросы на естественном языке для пользователей.

Со стороны SeaX наша команда тесно сотрудничала с Twilio для создания многофункционального решения контакт-центра, построенного на базе Twilio Flex. Для получения дополнительной информации о Twilio Flex и о том, как работает процесс настройки, вы можете прочитать [Руководство по быстрому старту Twilio Flex](https://www.twilio.com/docs/flex/quickstart).

После подготовки сервера Discord, бота Discord и чат-бота и убедившись, что у нас есть работающий экземпляр SeaX, самая большая проблема заключается в правильной маршрутизации сообщений к пользователю, боту и живым агентам на SeaX и от них. Twilio отлично справляется с маршрутизацией сообщений, поэтому наша цель — обрабатывать все команды слэш из нашего сервера бота Discord, а затем пересылать все остальные сообщения (такие как прямые сообщения чат-боту или живому агенту) в Twilio.

## Определение потока Flex
Первый шаг — убедиться, что все сообщения, которые мы отправляем в Twilio, будут маршрутизированы в правильное место. Мы настроили простой поток Twilio, который сначала проверяет, запросил ли пользователь живого агента, и если да, то пересылает следующие сообщения в SeaX. Если пользователь не запросил живого агента, то мы пересылаем сообщение чат-боту для получения ответа. Для получения дополнительной информации о том, как настроить поток, обратитесь к [документации Twilio Studio Flow](https://www.twilio.com/docs/studio).

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-flow.png" alt="Простой поток Flex Studio, который маршрутизирует входящие сообщения чат-боту или SeaX."/>

*Простой поток Flex Studio, который маршрутизирует входящие сообщения чат-боту или SeaX.*
</center>

## Создание пользовательского канала
Итак, теперь у нас есть представление о том, как будут маршрутизироваться входящие сообщения. Однако Discord не является каналом, изначально поддерживаемым Twilio. К счастью, у Twilio есть подробное руководство о том, как [добавить пользовательский канал чата в Twilio Flex](https://www.twilio.com/blog/add-custom-chat-channel-twilio-flex). После выполнения инструкций по настройке нового пользовательского канала в Twilio нам нужно фактически пересылать сообщения из Discord в Twilio.

Сначала мы настраиваем клиент Twilio:

```python
from twilio.rest import Client
twilio_client = Client(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)
```

Теперь, как только мы получаем входящее сообщение от Discord, мы можем переслать это сообщение в Twilio через клиент Twilio. Сначала мы должны проверить, существует ли пользователь уже в системе Twilio, и есть ли у него уже открытый канал чата.

```python
# вызвать метод get_user, чтобы проверить, существует ли пользователь, и создать нового, если нет
user = await get_user(user_id, twilio_client, TWILIO_SERVICE_SID)

# получить каналы, в которых находится пользователь
user_channels = twilio_client.chat \
        .services(TWILIO_SERVICE_SID) \
        .users(user_id) \
        .user_channels \
        .list()
```

Если у пользователя есть существующий открытый канал чата, мы должны использовать его, чтобы иметь доступ к истории чата. Если существующего канала чата нет, мы создаем новый для пользователя:

```python
if user_channels:
    channel_sid = user_channels[-1].channel_sid
else:
    channel = twilio_client.flex_api \
            .channel \
            .create(
                flex_flow_sid=FLEX_FLOW_ID,
                chat_user_friendly_name=username,
                chat_friendly_name=chat_name,  # -> Дружественное имя канала чата
                target=conversation_id,  # -> Идентификатор, который однозначно идентифицирует пользователя чата
                identity=conversation_id,  # -> Пользователь, например/ ID DM Discord
        )
    channel_sid = channel.sid
```

Наконец, как только у нас есть открытый канал чата между пользователем Discord и Twilio, мы можем переслать входящее сообщение в поток Twilio Studio.

```python
message = twilio_client.chat \
        .services(TWILIO_SERVICE_SID) \
        .channels(channel_sid) \
        .messages \
        .create(
            body=message_text,
            from_=user_id,
            x_twilio_webhook_enabled='true',
            attributes=json.dumps(message_json)  # отправить заголовки как атрибут, чтобы они были доступны позже
        )
```
Теперь у нас есть возможность пересылать все наши входящие сообщения от пользователей Discord непосредственно в наш поток Twilio Flex. На стороне бота Discord убедитесь, что все прямые сообщения пересылаются в Twilio. Теперь вы можете попробовать отправить прямое сообщение боту Discord, и вы должны увидеть его в журналах потока Twilio Studio - но мы еще не закончили!

## Создание HTTP-сервера для поддержки более сложной маршрутизации

### Веб-хук исходящих сообщений
Итак, теперь у нас есть представление о том, как будут маршрутизироваться наши входящие сообщения. Однако нам все еще не хватает нескольких частей. Прежде всего, мы знаем, что теперь мы можем отправлять сообщения в Twilio, но как мы отвечаем нашим пользователям в Discord? Наш бот Discord — единственное, что разрешено отправлять сообщения на наш сервер Discord и пользователям, и Twilio все равно не знает, как вернуть наши сообщения на сервер Discord. Решение состоит в том, что нам нужно настроить веб-хук исходящих сообщений, который будет срабатывать каждый раз, когда в канале чата Twilio появляется новое сообщение. В рамках этого веб-хука мы можем затем использовать наш бот Discord для пересылки сообщения обратно на наш сервер.

Для этого мы интегрируем наш бот Discord в более надежный HTTP-сервер. Мы использовали [FastAPI](https://fastapi.tiangolo.com/) для настройки простого конечной точки POST, которая будет служить нашим веб-хуком исходящих сообщений. Как только мы настроим сервер и наш бот Discord будет работать рядом с ним, мы можем определить конечную точку POST.

Эта конечная точка будет получать каждое сообщение, добавленное в канал чата, поэтому сначала мы хотим отфильтровать все, кроме исходящих сообщений от SeaX. Затем нам нужно будет получить правильный идентификатор канала из тела сообщения, чтобы мы знали, куда пересылать сообщение. Наконец, мы можем использовать клиент Discord для пересылки сообщения в канал Discord.

```python
@app.post("/forward-to-discord", status_code=200)
async def forward_discord_message(request: Request, response: Response) -> None:
    raw_body = await request.body()
    body = urllib.parse.parse_qs(raw_body.decode())

    # обращайте внимание только на сообщения от SDK (Flex, все остальные будут от API)
    if not body.get('Source') == ['SDK']:
        return

    # Сообщения от Flex не содержат conversationId исходного сообщения
    # Нам нужен convId для отправки сообщения обратно в разговор на GBM
    # Получить предыдущее сообщение и извлечь conversationId
    message = twilio_client.chat \
            .services(TWILIO_SERVICE_SID) \
            .channels(body.get("ChannelSid")[0]) \
            .messages.list(limit=1)[0]

    attributes = json.loads(message.attributes)

    channel = discord_client.get_channel(attributes.get(“channel”, {}).get(“id”))
    if channel:
        await channel.send(body.get("Body", [""])[0].get(“text”))
    else:
        logger.error(f"Канал Discord не найден с ID: {get_channel_id(req)}!")
        response.status_code = 400
```

Наконец, чтобы сообщения отправлялись на нашу конечную точку, нам нужно сообщить Twilio, что такое наш новый веб-хук. Каждый канал чата должен иметь свой собственный настроенный веб-хук. Итак, если мы вернемся к тому месту, где мы изначально создали новый канал чата для пользователя, мы можем добавить дополнительный код для настройки веб-хука:

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

### Интеграция бота

Итак, теперь исходящие сообщения от SeaX должны быть правильно маршрутизированы обратно на наш сервер Discord. Но мы все еще не рассмотрели сообщения, которые отправляются чат-боту. Нам нужно настроить последнюю конечную точку, которая будет запускаться из Twilio Studio Flow и будет получать сообщение пользователя, запрашивать бота и возвращать ответ в Discord.

```python
@app.post("/chatbot-to-discord", status_code=200)
async def receive_discord_message(request: Request, response: Response):
    """Получить POST-запрос от Twilio, запросить бота и вернуть ответ в Discord."""
    req = await request.body()
    # отделить тело исходного сообщения от содержимого twilio
    twilio_body, original_message_body = separate_original_message_body(req.decode())

    bot_response = await query_bot(original_message_body, bot_info)

    if bot_response:
        channel = discord_client.get_channel(original_message_body.get(“channel_id”))
        if channel:
            for item in bot_response:
                await channel.send(item.get(“text”))
```

Убедитесь, что Twilio Studio Flow имеет правильный веб-хук для маршрутизации сообщений боту. Теперь мы завершили маршрутизацию сообщений! Мы можем увидеть общий вид всей маршрутизации сообщений на этой диаграмме:

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-routing-diagram.jpg" alt="Диаграмма маршрутизации сообщений."/>

*Диаграмма маршрутизации сообщений.*
</center>

# Резюме
В заключение, в этой серии блогов мы обсудили рост популярности Discord и возможности, которые он предоставляет брендам как новая платформа для взаимодействия с клиентами. Мы рассмотрели некоторые основные функции Discord, чтобы показать, как бренд может создать свое собственное онлайн-сообщество, а также более продвинутые функции, которые позволяют брендам автоматизировать модерацию и поддержку клиентов на своем сервере с помощью ботов Discord. Наконец, мы поделились нашей демонстрацией того, как мы интегрировали Discord с нашей платформой обслуживания клиентов, SeaX, чтобы предоставить сообществу Discord расширенные функции, такие как передача живого агента, управление кейсами и поиск в базе знаний на основе ИИ.
Для личной демонстрации или чтобы узнать, как Seasalt.ai может помочь удовлетворить ваши конкретные бизнес-потребности, пожалуйста, заполните нашу форму «[Заказать демонстрацию](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting)». Для получения дополнительной информации об интеграции Flex/Discord или для связи с нами, пожалуйста, посетите [список партнеров Twilio компании Seasalt.ai](https://showcase.twilio.com/partner-listing/a8E8Z000000PDCQUA4).
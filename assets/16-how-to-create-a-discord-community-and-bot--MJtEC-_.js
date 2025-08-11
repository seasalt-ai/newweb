const n=`---
title: "Discord (2/3): Как создать сообщество Discord и бота для вашего бренда"
metatitle: "Discord (2/3): Создайте сообщество Discord и бота для вашего бренда"
date: 2022-05-31 13:29:51-07:00
modified_date: 2024-12-19 10:00:00+00:00
draft: false
author: Kim Dodds
description: "В этом блоге мы рассмотрим создание сервера для вашего бренда и подключение бота, который может автоматизировать модерацию, отчеты об ошибках, объявления и т.д."
weight: 1
tags:
  - SeaX
  - Discord
image: /images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-community-and-bot-for-your-brand.jpg
canonicalURL: /blog/create-a-discord-community-and-bot/
url: /blog/create-a-discord-community-and-bot/
---

*Наш пост в блоге ["Discord: Новый рубеж для взаимодействия с клиентами"](https://seasalt.ai/blog/15-discord-a-new-frontier-for-customer-engagement/) охватывал рост популярности Discord и то, как бренды могут использовать эту новую социальную платформу для формирования собственных онлайн-сообществ и взаимодействия с клиентами. В этом блоге мы рассмотрим, как создать новый официальный сервер для вашего бренда, включая подключение бота, который может автоматизировать такие задачи, как модерация, отчеты об ошибках, объявления и т.д.*

## Содержание
- [Настройка сервера](#настройка-сервера)
    - [Создание нового сервера Discord](#создание-нового-сервера-discord)
    - [Преобразование сервера в "Сервер сообщества"](#преобразование-сервера-в-сервер-сообщества)
    - [Настройка каналов, событий и других функций](#настройка-каналов-событий-и-других-функций)
    - [Распространяйте информацию!](#распространяйте-информацию)
- [Настройка бота Discord](#настройка-бота-discord)
    - [Создание нового бота в Discord Developer Portal](#создание-нового-бота-в-discord-developer-portal)
    - [Создание простого бота Discord с PyCord](#создание-простого-бота-discord-с-pycord)
    - [Приглашение бота Discord](#приглашение-бота-discord)
    - [Тестирование интеграции](#тестирование-интеграции)

# Настройка сервера

## Создание нового сервера Discord
В приложении Discord нажмите кнопку "Добавить сервер" в левом нижнем углу.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/create-new-discord-server.png" alt="Создание нового сервера Discord."/>

*Запрос при создании нового сервера Discord.*
</center>

Вы можете выбрать шаблон, если хотите начать с каналов, которые создаются для вас, или можете начать с чистого листа. И первый шаг так же прост - ваш сервер создан!

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/new-discord-server.png" alt="Новый сервер Discord."/>

*Новый сервер Discord.*
</center>

## Преобразование сервера в "Сервер сообщества"

Настоятельно рекомендуется включить функции "сообщества" сервера Discord. Преобразуя в сервер сообщества, вы включаете дополнительные инструменты, которые могут помочь модерировать, управлять и развивать сервер. В частности, серверы сообществ имеют доступ к следующим функциям:

- **Экран приветствия**: Представляет новых пользователей вашему серверу
- **Канал объявлений**: Позволяет транслировать сообщения вашим пользователям
- **Аналитика сервера**: просмотр аналитики о вашем сообществе и пользователях
- **Обнаружение**: Рекламируйте ваше сообщество в каталоге серверов Discord

Рядом с именем сервера в левом верхнем углу нажмите на выпадающий список и выберите "Настройки сервера". Нажмите вкладку "Включить сообщество" слева и выберите "Начать".

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/convert-to-community-discord-server.png" alt="Преобразование обычного сервера Discord в сервер сообщества."/>

*Включение настроек сервера сообщества.*
</center>

Пройдите через необходимую настройку. Включение сообщества требует от вашего сервера дополнительной проверки пользователей, включения фильтра чата и настройки канала правил.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-community-setup.png" alt="Настройка сервера сообщества Discord."/>

*Настройка сервера сообщества.*
</center>

После включения сообщества у вас есть доступ к нескольким новым функциям. Две из самых полезных функций - это приветственное сообщение и проверка членства:

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-server-welcome-page.png" alt="Пример приветственного сообщения сервера."/>

*Пример приветственного сообщения сервера.*

<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-server-membership-screening.png" alt="Настройки проверки членства."/>

*Настройки проверки членства.*
</center>

## Настройка каналов, событий и других функций
После настройки сервера сообщества у вас также есть доступ к новым функциям с главной страницы сервера.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-server-channel-types.png" alt="Создание нового канала в сервере Discord.", style="width:50%"/>

*Создание нового канала.*

<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-server-channels.png" alt="Пример каналов сервера сообщества Discord." style="width:50%"/>

*Каналы сервера сообщества.*
</center>

При создании нового канала у вас есть доступ к двум новым типам каналов: объявления и сцена. Канал объявлений может публиковать только модераторы, и он полезен для официальных постов и объявлений - многие серверы будут автоматически публиковать свои официальные твиты или посты форума в этот канал. Канал "сцена" - это особый тип голосового канала, который полезен для проведения мероприятий с живой аудиторией. Ведущий имеет возможность модерировать других выступающих (в отличие от обычного голосового канала, где это свободное для всех).

После полной настройки ваш сервер может выглядеть примерно так:

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/customized-discord-server.png" alt="Полностью настроенный сервер Discord."/>

*Полностью настроенный сервер сообщества.*
</center>

## Распространяйте информацию!
После настройки сервера вы можете начать приглашать людей!
Discord предлагает бесплатный готовый виджет, который можно встроить на любой веб-сайт для рекламы вашего сервера.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-server-widget.png" alt="Настройки виджета сервера Discord."/>

*Настройки виджета сервера.*

<iframe src="https://discordapp.com/widget?id=966505646944055326&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>

*Пример работающего виджета для сервера Discord Near Me Messaging от Seasalt.ai.*

</center>

Для укрепления доверия с потенциальными пользователями вы можете по желанию обратиться в службу поддержки Discord для проверки вашего сервера. Проверка разместит значок "проверено" рядом с именем вашего сервера, что указывает на то, что сервер является официально связанным сообществом бизнеса, бренда и фигуры общественного интереса. Вы можете увидеть требования к проверке на [официальном сайте Discord](https://support.discord.com/hc/en-us/articles/360001107231-Verified-Server-Requirements).

После того как ваш сервер начнет работать и наберет хорошее количество пользователей, Discord предлагает больше возможностей для рекламы вашего сервера внутри платформы. Когда ваш сервер просуществует не менее 8 недель и наберет 500+ пользователей, вы можете подать заявку на партнерство Discord, что даст вашему серверу специальные привилегии только для партнеров. После достижения 1000+ пользователей вы можете присоединиться к Server Discovery, что позволит любому пользователю Discord обнаружить и присоединиться к вашему серверу.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-server-discovery.png" alt="Настройки и требования Discord Discovery."/>

*Настройки и требования Discord Discovery.*
</center>

# Настройка бота Discord
Теперь, когда вы настроили сервер, вы можете улучшить его, добавив бота для автоматизации некоторых процессов, таких как модерация, обратная связь пользователей и объявления. Продолжайте читать следующий раздел, чтобы узнать, как настроить простого бота, а затем следите за следующим постом в нашей серии блогов, чтобы увидеть, как вы можете интегрировать полноценный опыт обслуживания клиентов в ваш сервер Discord.

## Создание нового бота в Discord Developer Portal
Создайте аккаунт на [Discord Developer Portal](https://discord.com/developers/applications). Создайте "Новое приложение" и назовите его.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/new-discord-application.png" alt="Создание нового приложения на Discord Developer Portal."/>

*Панель разработчика Discord: Приложения.*
</center>

Выберите ваше новое приложение и нажмите вкладку "Бот" слева.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/new-discord-bot.png" alt="Настройки бота приложения."/>

*Настройки приложения Discord.*
</center>

Нажмите "Добавить бота", чтобы создать вашего бота Discord.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-bot-settings.png" alt="Создание нового бота Discord."/>

*Создание нового бота Discord.*
</center>

После создания сгенерируйте и скопируйте токен бота. Наконец, убедитесь, что разрешения на отправку сообщений включены.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-bot-messaging-permissions.png" alt="Разрешения на отправку сообщений бота Discord."/>

*Создание нового бота Discord.*
</center>

## Создание простого бота Discord с PyCord

Мы используем библиотеку [PyCord](https://docs.pycord.dev/en/master/) как Python-обертку для API Discord.

1. Установите PyCord и создайте новый Python-файл для вашего бота Discord.
2. Импортируйте пакет discord и создайте экземпляр клиента discord.
3. Используйте декоратор \`event\` клиента для создания метода \`on_message\`. Этот метод будет получать каждое сообщение, отправленное в канал, к которому у бота есть доступ.
    a. Внутри метода сначала проверьте, не от бота ли сообщение, и игнорируйте, если да.
    b. В противном случае мы начнем с реакции только на сообщения, начинающиеся с \`$bot\` - если сообщение начинается с этого, мы просто ответим в том же канале, сказав \`Я получил ваше сообщение!\`.
4. Наконец, в конце скрипта убедитесь, что запускаете клиент Discord, чтобы он начал слушать события в канале.

\`\`\`python
import discord

discord_client = discord.Bot()
discord_token = "xxxxxxxxxxxx"
 
@discord_client.event
async def on_message(message):
    """Слушать и реагировать на сообщения."""
    # Проверить, не от бота ли сообщение
    if message.author == discord_client.user:
        return

    msg = message.content
    if msg.startswith("$bot") or isinstance(message.channel, discord.DMChannel):
        await message.channel.send("Я получил ваше сообщение!")

discord_client.run(discord_token)
\`\`\`

### Примечание о Python-клиентах Discord

[Discord.py](https://github.com/Pycord-Development/pycord) - самый популярный проект для Python-обертки API Discord, однако автор и сопровождающий [решили прекратить поддержку библиотеки](https://gist.github.com/Rapptz/4a2f62751b9600a31a0d3c78100287f1). Вы можете найти много альтернативных Python-оберток для API Discord, и многие являются форками оригинального Discord.py. Мы выбрали PyCord, потому что он кажется хорошо поддерживаемым, уже поддерживает Slash Commands и имеет [сервер Discord](https://pycord.dev/discord), где мы можем задавать вопросы.

При создании бота Discord старайтесь не устанавливать другие пакеты Discord для Python. *Пакеты Discord для Python обычно плохо работают вместе*, поскольку они все находятся под отдельной разработкой. Например, PyCord плохо работает с [discord-components](https://github.com/kiki7000/discord.py-components), поэтому убедитесь, что у вас не установлены оба пакета одновременно.

## Приглашение бота Discord
Далее вы можете пригласить бота на ваш сервер. Нажмите на "OAuth2" -> "URL Generator". В генераторе URL справа выберите "bot".

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-bot-invite-url-generator.png" alt="Генерация ссылки-приглашения для бота Discord."/>

*Генерация ссылки-приглашения для бота.*
</center>

Далее прокрутите вниз, чтобы добавить разрешения боту. Вы можете сделать бота администратором или просто выбрать необходимые разрешения (это безопаснее).

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-bot-permissions.png" alt="Настройки разрешений бота Discord."/>

*Настройки разрешений бота.*
</center>

Наконец, скопируйте URL, сгенерированный внизу, и откройте ссылку в новой вкладке. Ссылка перенаправит вас для добавления бота на сервер, которым вы управляете.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/add-discord-bot-to-server.png" alt="Добавление бота на сервер Discord." style="width:50%"/>

*Добавление бота на сервер.*
</center>

После приглашения бота на сервер нажмите на бота и нажмите "Добавить на сервер". Вам будет предложено дать разрешение "Создавать команды на сервере" боту.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/confirm-discord-bot-permissions.png" alt="Подтверждение разрешений бота Discord." style="width:50%"/>

*Подтверждение разрешений бота на сервере.*
</center>

## Тестирование интеграции
Теперь ваш бот должен быть подключен и слушать все действия на вашем сервере Discord. Примерный бот, предоставленный в коде выше, просто ответит "Я получил ваше сообщение!", если кто-то введет сообщение, начинающееся со строки "$bot". Сопоставление строк, подобное этому, - самый простой способ настроить некоторые действия для вашего бота. Однако Discord также поддерживает нативные команды приложений, которые имеют больше поддержки функций. Вы можете прочитать больше о них [в официальной документации API Discord](https://discord.com/developers/docs/interactions/application-commands). После настройки первоначальной интеграции бота небо - предел того, какие услуги ваш бот может предоставлять вашему серверу.

Следите за финальным постом в нашей серии блогов, который покажет, как мы использовали наш продукт [SeaX](https://seax.seasalt.ai/) для подключения [платформы контакт-центра Twilio Flex](https://www.twilio.com/flex) с сервером сообщества Discord. Эта интеграция позволяет брендам не только развивать сообщество с клиентами, но и поддерживать прямой канал связи и решать проблемы прямо из онлайн-сообщества.

Для получения дополнительной информации о любом из наших решений посетите [Wiki продуктов Seasalt.ai](https://wiki.seasalt.ai) - или заполните форму ["Заказать демо"](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting), чтобы получить представление из первых рук.
`;export{n as default};

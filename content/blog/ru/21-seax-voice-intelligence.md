---
title: "Придайте своему контакт-центру собственный голос с помощью SeaX Voice Intelligence"
metatitle: "Пусть ваш контакт-центр говорит с помощью SeaX Voice Intelligence"
date: 2022-08-02T17:24:00-07:00
draft: false
author: Kim Dodds, Cody Kim, Xuchen Yao, Guoguo Chen
image: /images/blog/21-seax-voice-intelligence/thumbnail.png
description: "В этом блоге мы покажем, как внутренние движки Seasalt.ai для преобразования текста в речь и речи в текст могут улучшить различные аспекты платформы SeaX."
weight: 1
tags: ["SeaX"]
canonicalURL: "/blog/seax-voice-intelligence/"
url: "/blog/seax-voice-intelligence/"
modified_date: 2025-07-29T20:45:17Z
---

*До сих пор в нашей [серии блогов SeaX](https://seasalt.ai/tags/seax/) мы давали вам широкий обзор флагманского продукта Seasalt.ai: SeaX. Мы также обсудили две ключевые особенности, которые отличают SeaX от традиционного колл-центра: во-первых, SeaX является омниканальным, что означает, что вы можете легче взаимодействовать с клиентами по любому каналу, и, во-вторых, платформа является распределенным контакт-центром, что позволяет беспрепятственно маршрутизировать сообщения и звонки от клиентов по всему миру к вашим распределенным агентам в различных местах.*

*Теперь, когда мы рассмотрели основы платформы SeaX, мы перейдем к расширенным функциям ИИ и автоматизации, которые отличают SeaX от других распределенных омниканальных контакт-центров. В этом блоге мы покажем, как внутренние движки Seasalt.ai для преобразования текста в речь и речи в текст могут улучшить различные аспекты платформы SeaX.*

# Содержание
- [Введение в голосовой интеллект](#into-to-voice-intelligence)
- [Что отличает Seasalt.ai](#what-sets-seasaltai-apart)
    - [Речь в текст](#speech-to-text)
    - [Текст в речь](#text-to-speech)
- [TTS и STT в SeaX](#tts-and-stt-in-seax)
    - [Голосовой IVR](#voice-ivr)
    - [Сообщение о недоступности](#unavailable-message)
    - [Живая транскрипция](#live-transcription)
    - [И многое другое...](#and-more)

# Введение в голосовой интеллект

Голосовой интеллект — это использование искусственного интеллекта для анализа и извлечения информации из голосовых данных. Хотя в последнее десятилетие наблюдалось замечательное развитие голосовых технологий, их использование в корпоративных условиях все еще несколько ограничено. Компании продолжают накапливать терабайты голосовых данных, но в большинстве случаев они не используются в полной мере.

Одна из причин этого заключается в том, что голосовые данные сложнее обрабатывать, чем другие формы данных, такие как базовая статистика или даже простой текстовый файл. Речевые данные уникальны во многих отношениях:
1. Они зависят от языка, с диалектами и акцентами, поэтому трудно уловить 100% информации
2. Их качество варьируется в зависимости от каналов (телефония против VoIP, моно против стерео), частоты дискретизации (8 кГц против 16 кГц), точности представления (8 бит, 16 бит, 32 бит) и окружающих звуков, таких как фоновые шумы
3. Их сложнее интерпретировать: от эмоций речи до идентификации говорящего и семантики значения

Однако при правильном подходе с использованием подходящих инструментов голосовой интеллект может принести огромную пользу компаниям, которые его используют. Помимо прочего, возможность правильно управлять голосовыми данными открывает возможность использования персонализированной транскрипции речи в текст, что может сделать разговоры доступными для поиска, индексируемыми и информативными, а также позволяет дальнейшую обработку NLP. По мере сбора большего количества данных также возможны улучшения этих услуг, такие как: повышение точности транскрипции, расширение охвата вариантов использования и предоставление настраиваемых моделей речи и языка для адаптации к новым языкам и диалектам.

# Что отличает Seasalt.ai

Seasalt.ai предоставляет технологии и продукты облачного коммуникационного ИИ для корпоративных клиентов.
Мы разработали собственные технологии речи и языка для текстовых сообщений
и голосовых вызовов в корпоративных контакт-центрах. Наш движок естественного языка поддерживает широкий
спектр языков с высоким и низким уровнем ресурсов: бирманский, китайский, английский, филиппинский,
немецкий, индонезийский, кхмерский, лаосский, малайский, испанский, тамильский, тайский, вьетнамский и т. д.
Seasalt.ai финансируется венчурным капиталом и управляется группой ведущих мировых экспертов в области глубокого распознавания речи,
нейронного синтеза речи и диалогов на естественном языке.

Посмотрите наше демонстрационное видео преобразования речи в текст:
<iframe width="85%" height="450px" src="https://www.youtube.com/embed/Log8usX8ViE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

## Речь в текст

<center>
<img src="/images/blog/21-seax-voice-intelligence/STT.png" alt="Графика речи в текст."/>
</center>

Наш движок преобразования речи в текст принимает голосовое аудио и производит транскрипции в реальном времени. Начиная с аудио, мы извлекаем фонетические признаки, преобразуем эти признаки в фонемы, а затем сопоставляем эти фонемы с орфографией целевого языка. Наша текущая система способна транскрибировать несколько языков, включая английский и китайский, при этом постоянно добавляются новые языки.

Посмотрите наше видео по настройке преобразования речи в текст, чтобы узнать, как движок STT Seasalt можно настроить для любой области:
<iframe width="85%" height="450px" src="https://www.youtube.com/embed/1YEU6mexzWQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

## Текст в речь

<center>
<img src="/images/blog/21-seax-voice-intelligence/TTS.png" alt="Графика текста в речь."/>
</center>

Преобразование текста в речь — это процесс синтеза реалистичной человеческой речи с естественной интонацией и каденцией только из текста. Наша модель берет обычный текст, переводит его в фонемы, а затем преобразует фонемы в аудио, предсказывая при этом правильную высоту тона, длительность и громкость на каждом временном шаге для максимально реалистичного опыта TTS. Если конечный результат не идеален, мы предоставляем возможность настраивать синтезированное аудио, включая произношение слов, паузы и акценты.

Посмотрите наше демонстрационное видео по настройке преобразования текста в речь, чтобы узнать, как выход движка TTS Seasalt можно настроить для получения реалистичной синтезированной речи:

<iframe width="85%" height="450px" src="https://www.youtube.com/embed/GJCOhTtImp8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

Вы также можете посетить [страницу TTS](https://suite.seasalt.ai/tts) на нашем веб-сайте, чтобы послушать примеры некоторых наших синтезированных голосов, включая Тома Хэнкса, Дэвида Аттенборо и Риз Уизерспун.

# TTS и STT в SeaX

## Голосовой IVR

<center>
<img src="/images/blog/21-seax-voice-intelligence/flow.png" alt="Поток голосового IVR с использованием движка преобразования речи в текст Seasalt.ai для транскрипции в реальном времени и маршрутизации вызовов."/>

*Поток голосового IVR с использованием движка преобразования речи в текст Seasalt.ai для транскрипции в реальном времени и маршрутизации вызовов.*
</center>

Голосовой интеллект может начать помогать еще до того, как вызовы появятся на платформе SeaX, обеспечивая маршрутизацию вызовов в нужное место и сбор важной информации перед передачей вызова агенту. SeaX использует Twilio Studio для настройки потоков маршрутизации вызовов и сообщений. Но мы также можем интегрировать наш движок преобразования речи в текст в поток IVR, чтобы позволить клиенту использовать естественный язык для маршрутизации своего вызова (вместо традиционного опыта «нажмите 1 для…»). Кроме того, если ваша компания заинтересована в использовании чат-бота для взаимодействия с клиентами, мы можем пойти еще дальше, предоставив вашему чат-боту голос для общения с клиентами по телефону с помощью нашего движка преобразования текста в речь.

## Сообщение о недоступности

<center>
<img src="/images/blog/21-seax-voice-intelligence/unavailable-message.png" alt="Конфигурация сообщения о недоступности SeaX с использованием преобразования текста в речь."/>

*Конфигурация сообщения о недоступности SeaX с использованием преобразования текста в речь.*
</center>

Наша технология преобразования текста в речь также позволяет создавать очень настраиваемые голосовые сообщения. Например, они могут быть активированы, когда клиент звонит после обычных рабочих часов, или если клиента нужно поставить на удержание, пока он ждет доступного агента.

## Живая транскрипция

<center>
<img src="/images/blog/21-seax-voice-intelligence/live-transcription.jpg" alt="Транскрипция живого звонка с аналитикой, отображаемой агенту в SeaX."/>

*Транскрипция живого звонка с аналитикой, отображаемой агенту в SeaX.*
</center>

Как только клиент находится в разговоре с агентом, наш движок преобразования речи в текст предоставляет точные транскрипции разговора в реальном времени для справки агента. Это позволяет агенту ссылаться на предыдущие моменты разговора и/или перепроверять свое понимание того, что сказал клиент. Кроме того, эти транскрипции невероятно полезны для последующих приложений, таких как извлечение тем, извлечение действий, суммирование, анализ встреч и т. д.

## И многое другое...

Выше приведены лишь несколько способов, которыми SeaX интегрирует передовой голосовой интеллект для сокращения времени ожидания, повышения производительности агентов и обеспечения общего бесперебойного взаимодействия как для клиентов, так и для агентов. Чтобы узнать больше о расширенных функциях, которые поставляются с платформой SeaX, следите за нашими следующими сообщениями в блоге, которые включают базу знаний ИИ, управление кейсами и массовые SMS. Чтобы получить личную демонстрацию и обсудить, как платформа SeaX может удовлетворить ваши конкретные бизнес-потребности, заполните нашу [форму бронирования демонстрации](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting).

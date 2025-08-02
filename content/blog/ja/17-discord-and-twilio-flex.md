---
title: "Discord (3/3): DiscordとTwilio Flex: Flexコンタクトセンターを未開拓の領域へ"
metatitle: "Discord (3/3): DiscordでのTwilio Flexコンタクトセンター"
date: 2022-06-07T12:32:24-07:00
author: Kim Dodds
draft: false
image: /images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/flex-discord-thumbnail.png
description: "このブログ記事では、Seasalt.aiがDiscordサーバーに完全に機能するコンタクトセンターを統合する方法を実演します。"
tags: ["SeaX", "Discord"]
canonicalURL: "/blog/discord-and-twilio"
url: "/blog/discord-and-twilio/"
aliases:
  - /blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/
modified_date: "2025-01-27T10:30:00Z"
---

*これは、Discordでの顧客エンゲージメントに関する3部構成シリーズの最終記事です。最初のブログ記事["顧客エンゲージメントの新フロンティア"](https://seasalt.ai/blog/15-discord-a-new-frontier-for-customer-engagement/)では、Discordの人気の高まりと、ブランドが独自のオンラインコミュニティを作成し、それらと関わる新しい機会について議論しました。第2部["ブランドのためのDiscordコミュニティとボットの作成方法"](https://seasalt.ai/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/)では、ブランドのためのDiscordサーバーの作成方法と、サーバー管理、アナウンス、ユーザーフィードバックなどを管理するボットの統合方法を紹介しました。最後に、このブログ記事では、Seasalt.aiがDiscordサーバーに完全に機能するコンタクトセンターを統合し、ブランドがプラットフォーム上のカスタマーサービスのすべての側面を処理できるようにする方法を実演します。*

## 目次
- [目次](#目次)
- [Discordカスタマーサービスデモ](#discordカスタマーサービスデモ)
- [Twilio Flex](#twilio-flex)
- [SeaX](#seax)
- [デモサーバー](#デモサーバー)
  - [1対多ヘルプ：公式チャンネル](#1対多ヘルプ公式チャンネル)
  - [1対1ヘルプ：カスタマーサービスエージェント](#1対1ヘルプカスタマーサービスエージェント)
    - [ナレッジベース](#ナレッジベース)
    - [ライブエージェント転送](#ライブエージェント転送)
  - [ケース管理](#ケース管理)
- [技術的詳細](#技術的詳細)
  - [Flexフローの定義](#flexフローの定義)
  - [カスタムチャンネルの作成](#カスタムチャンネルの作成)
  - [より複雑なルーティングをサポートするHTTPサーバーの作成](#より複雑なルーティングをサポートするhttpサーバーの作成)
    - [送信メッセージWebhook](#送信メッセージwebhook)
    - [ボット統合](#ボット統合)
- [まとめ](#まとめ)

# Discordカスタマーサービスデモ
最終製品をすぐに見たい場合は、まず最終デモビデオをお見せします：

<iframe width="85%" height="450px" src="https://www.youtube.com/embed/iUK4YkGYI6Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

私たちの目標は、Discordを既存のカスタマーサービスソフトウェア（この場合は[Twilio Flex](https://flex.twilio.com/)）に統合して、ブランドの公式サーバーに追加価値を提供する方法を実演することです。実装の詳細な理解のために、読み続けてください。

# Twilio Flex
Twilioは、SMS、電話、メール、チャットメッセージなどを管理するためのAPIを提供する成熟した通信会社です。FlexはTwilioの主力製品の1つで、任意のソースからのメッセージとコールを仮想エージェントとライブエージェントにルーティングするスケーラブルなクラウドベースのコンタクトセンターです。Flexをコンタクトセンター統合の基盤として選択したのは、Facebook、SMS、WhatsAppなどの様々なチャンネルに対して既に優れたサポートを提供しているためです。

# SeaX
SeaXは、生産性と顧客満足度の向上を支援する高度なAI機能と深く統合されたクラウドコンタクトセンターです。SeaXはSeasalt.aiの主力製品の1つで、150以上の国々の顧客に展開されています。SeaXコンタクトセンタープラットフォームはTwilio Flexの上に構築されており、ライブエージェントが顧客をより良く支援できるようにする様々な追加機能を含んでいます。最も有用な機能には、内蔵のテキスト読み上げと音声認識、AI駆動のナレッジベース、統合ケース管理システムがあります。SeaXプラットフォームのすべての機能の詳細については、[SeaXホームページ](https://seax.seasalt.ai/?utm_source=blog/)をご覧ください。

# デモサーバー
次に、Discordサーバーの設定方法を紹介します。デモの目的で、私たちのサーバーがPokémon Go!などのゲームのコミュニティとして使用されるシナリオを想定しました。以下の表は、Discordサーバーで実演された機能の一部を概説しています。

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-features-2.png" alt="デモカスタマーサービスDiscordサーバーの機能概要。"/>

*デモDiscordサーバーの機能概要。*
</center>

## 1対多ヘルプ：公式チャンネル
サーバー内のいくつかのチャンネルは、公式管理者/開発者とプレイヤー間の直接ストリームを提供するように設定されています。
**アナウンスチャンネル**は管理者とモデレーターのみが投稿でき、Twitterアカウント、ウェブサイト、その他の公式ソースからの（手動または自動）投稿を含むことができます。

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-announcement-channel.jpg" alt="公式Twitterアカウントからの投稿を含むDiscordサーバーのアナウンスチャンネル。"/>

*デモDiscordサーバーの#announcementsチャンネル。*
</center>

**バグ報告チャンネル**では、プレイヤーがバグやゲームを破綻させる問題について議論できます。管理者はこのチャンネルを密接に監視して、ゲーム内で対処すべき問題を特定できます。さらに、ユーザーはチャンネル内で`/bug`スラッシュコマンドを使用して公式バグ報告を送信できます。

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-bug-report-channel.jpg" alt="送信されたバグ報告を含むDiscordサーバーのバグ報告チャンネル。"/>

*送信されたバグ報告を含むデモDiscordサーバーの#bug-reportチャンネル。*
</center>

**機能リクエストチャンネル**では、プレイヤーがゲームプレイの変更、生活の質の向上、コンテンツの追加など、ゲームで見たい変更について議論できます。バグリクエストチャンネルと同様に、彼らの入力はDiscordモデレーターが見ることができ、`/new_feature`スラッシュコマンドを使用して公式リクエストを送信できます。

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-feature-request-channel.jpg" alt="スラッシュコマンドを実行するユーザーを含むDiscordサーバーの機能リクエストチャンネル。"/>

*スラッシュコマンドを実行するユーザーを含むデモDiscordサーバーの#feature-requestチャンネル。*
</center>

## 1対1ヘルプ：カスタマーサービスエージェント

プレイヤーは`/helpme`スラッシュコマンドを使用してエージェントとのダイレクトメッセージをトリガーできます。カスタマーサービスエージェントは自動化（仮想エージェント）またはライブエージェントによって操作できます。

デモでは、企業のナレッジベースを照会してユーザーに関連する記事の提案を提供するシンプルなFAQボットを設定しました。ユーザーはライブエージェントをリクエストすることもでき、同じチャットでSeaXのライブエージェントに転送されます。

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-customer-service-channel.jpg" alt="DMをトリガーするユーザーを含むDiscordサーバーのカスタマーサービスチャンネル。"/>

*DMをトリガーするユーザーを含むデモDiscordサーバーの#feature-requestチャンネル。*
</center>

### ナレッジベース
ユーザーが仮想サービスエージェントにクエリを送信すると、エージェントはユーザーをナレッジベースの関連記事に紹介できます。

### ライブエージェント転送
ユーザーがボットとのダイレクトメッセージに入ると、ライブエージェントをリクエストできます。彼らはすぐに、彼らのためにケースが作成され、ライブエージェントに転送されていることを通知されます。ライブエージェントがチャットに参加すると、彼らも通知を受け取ります。

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-customer-service-dm.jpg" alt="ナレッジベース記事の提案、ライブエージェント転送、ケース管理を含むカスタマーサービスとのダイレクトメッセージ。"/>

*ナレッジベース記事の提案、ライブエージェント転送、ケース管理を含むカスタマーサービスとのダイレクトメッセージ。*
</center>

バックエンドでは、ライブエージェントはすべてのチャンネル（SMS、Facebook、Discord、音声通話など）からの着信コールとチャットメッセージを1つのプラットフォームで処理できます。この場合、バックエンドプラットフォームはSeaXです。

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/flex-discord-channel.jpg" alt="Discordユーザーと会話するライブエージェントのビューを示すSeaXインターフェース。"/>

*Discordユーザーと会話するライブエージェントのビューを示すSeaXインターフェース。*
</center>

## ケース管理
このデモで強調したい機能の1つはケース管理です。Seasalt.aiのDiscordソリューションはSeaXケース管理システムと統合され、ユーザーの様々なケースを適切に追跡します。ユーザーがDiscordボットと対話するとき（ライブエージェントをリクエストしたりバグを報告したりするなど）、新しいケースを自動的に開き、ユーザーと彼らが経験している問題に関するすべての重要な情報を記録できます。これにより、ライブエージェントがすべての報告された問題に簡単にアクセスでき、ケースが解決されるまでユーザーを追跡することを確実にします。

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-new-case.png" alt="SeaXケース管理システムで新しいケースを作成。"/>

*SeaXケース管理システムで新しいケースを作成。*

<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-existing-case.png" alt="SeaXケース管理システムで既存のケースを表示。"/>

*SeaXケース管理システムで既存のケースを表示。*

</center>

# 技術的詳細

今、最終製品とサーバーメンバーとそれらを支援するライブエージェントが利用できるすべての機能を見ました。しかし、全体が実際にどのように実装されているのでしょうか？前回のブログ記事["ブランドのためのDiscordコミュニティとボットの作成方法"](https://seasalt.ai/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/)では、ブランドのためのDiscordサーバーの作成方法とDiscordボットを統合して管理する方法を紹介しました。このより高度なデモをサポートするために、[SeaChat、Seasalt.aiの会話型AIエンジン](https://chat.seasalt.ai)も使用して、Discordボットがユーザーの自然言語クエリを処理できるシンプルなチャットボットを構築しました。

SeaX側では、私たちのチームはTwilioと密接に協力して、Twilio Flexベースの機能豊富なコンタクトセンターソリューションを作成しました。Twilio Flexとセットアッププロセスの動作についての詳細は、[Twilio Flexクイックスタートガイド](https://www.twilio.com/docs/flex/quickstart)をご覧ください。

Discordサーバー、Discordボット、チャットボットの準備ができ、適切に動作するSeaXインスタンスがあることを確認した後、最大の課題は、ユーザー、ボット、SeaXのライブエージェント間でメッセージを適切にルーティングする方法でした。Twilioはメッセージルーティングの処理に優れているため、私たちの目標はDiscordボットサーバー内のすべてのスラッシュコマンドを処理し、その後他のすべてのメッセージ（チャットボットやライブエージェントに送信されるダイレクトメッセージなど）をTwilioに転送することでした。

## Flexフローの定義
最初のステップは、Twilioに送信するすべてのメッセージが正しい場所にルーティングされることを確認することです。ライブエージェントをリクエストしたかどうかを最初にチェックし、そうであれば後続のメッセージをSeaXに転送するシンプルなTwilioフローを設定しました。ユーザーがライブエージェントをリクエストしなかった場合、メッセージをチャットボットに転送して応答を取得します。フローの設定方法の詳細については、[Twilio Studio Flowドキュメント](https://www.twilio.com/docs/studio)を参照してください。

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-flow.png" alt="着信メッセージをチャットボットまたはSeaXにルーティングするシンプルなFlex Studioフロー。"/>

*着信メッセージをチャットボットまたはSeaXにルーティングするシンプルなFlex Studioフロー。*
</center>

## カスタムチャンネルの作成
今、着信メッセージがどのようにルーティングされるかを理解しました。しかし、DiscordはTwilioによってネイティブにサポートされているチャンネルではありません。幸い、Twilioには[Twilio Flexにカスタムチャットチャンネルを追加する方法](https://www.twilio.com/blog/add-custom-chat-channel-twilio-flex)に関する詳細なチュートリアルがあります。Twilioで新しいカスタムチャンネルを設定するガイドに従った後、実際にDiscordからTwilioにメッセージを転送する必要があります。

まずTwilioクライアントを設定します：

```python
from twilio.rest import Client
twilio_client = Client(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)
```

今、Discordから着信メッセージを受信すると、Twilioクライアントを介してそのメッセージをTwilioに転送できます。まず、ユーザーが既にTwilioシステムに存在し、既にオープンチャットチャンネルがあるかどうかをチェックする必要があります。

```python
# get_userメソッドを呼び出してユーザーが存在するかチェックし、存在しない場合は新しいユーザーを作成
user = await get_user(user_id, twilio_client, TWILIO_SERVICE_SID)

# ユーザーがいるチャンネルを取得
user_channels = twilio_client.chat \
        .services(TWILIO_SERVICE_SID) \
        .users(user_id) \
        .user_channels \
        .list()
```

ユーザーに既存のオープンチャットチャンネルがある場合、チャット履歴にアクセスできるようにそれを使用する必要があります。既存のチャットチャンネルがない場合、ユーザーのために新しいものを作成します：

```python
if user_channels:
    channel_sid = user_channels[-1].channel_sid
else:
    channel = twilio_client.flex_api \
            .channel \
            .create(
                flex_flow_sid=FLEX_FLOW_ID,
                chat_user_friendly_name=username,
                chat_friendly_name=chat_name,  # -> チャットチャンネルのフレンドリ名
                target=conversation_id,  # -> チャットユーザーアイデンティティを一意に識別するID
                identity=conversation_id,  # -> ユーザー、例：/ Discord DM ID
        )
    channel_sid = channel.sid
```

最後に、DiscordユーザーとTwilioの間にオープンチャットチャンネルを確立すると、着信メッセージをTwilio Studioフローに転送できます。

```python
message = twilio_client.chat \
        .services(TWILIO_SERVICE_SID) \
        .channels(channel_sid) \
        .messages \
        .create(
            body=message_text,
            from_=user_id,
            x_twilio_webhook_enabled='true',
            attributes=json.dumps(message_json)  # 後でアクセスできるようにヘッダーを属性として送信
        )
```
今、Discordユーザーからの着信メッセージをTwilio Flexフローに直接転送できます。Discordボット側では、すべてのダイレクトメッセージがTwilioに転送されることを確認してください。今、Discordボットにダイレクトメッセージを送信してみることができ、Twilio Studioフローログに表示されるはずです - ただし、まだ完了していません！

## より複雑なルーティングをサポートするHTTPサーバーの作成

### 送信メッセージWebhook
今、着信メッセージがどのようにルーティングされるかを理解しました。しかし、まだいくつかの部分が不足しています。まず、今Twilioにメッセージを送信できることを知っていますが、Discordのユーザーにどのように返信しますか？私たちのDiscordボットはDiscordサーバーとユーザーにメッセージを送信する唯一の認可されたものであり、TwilioはメッセージをDiscordサーバーに戻す方法を知りません。解決策は、Twilioチャットチャンネルに新しいメッセージがあるたびにトリガーされる送信メッセージWebhookを設定する必要があることです。そのWebhookで、Discordボットを使用してメッセージをサーバーに転送できます。

このために、Discordボットをより強力なHTTPサーバーに統合します。[FastAPI](https://fastapi.tiangolo.com/)を使用してシンプルなPOSTエンドポイントを設定し、送信メッセージWebhookとして機能させます。サーバーを設定し、Discordボットがそれと一緒に実行されると、POSTエンドポイントを定義できます。

このエンドポイントはチャットチャンネルに追加されたすべてのメッセージを受信するため、まずSeaXからの送信メッセージ以外のすべてを除外する必要があります。次に、メッセージ本文から正しいチャンネルIDを取得して、メッセージを転送する場所を知る必要があります。最後に、Discordクライアントを使用してメッセージをDiscordチャンネルに転送できます。

```python
@app.post("/forward-to-discord", status_code=200)
async def forward_discord_message(request: Request, response: Response) -> None:
    raw_body = await request.body()
    body = urllib.parse.parse_qs(raw_body.decode())

    # SDKからのメッセージのみに焦点を当てる（Flex、他のすべてのメッセージはAPIから来る）
    if not body.get('Source') == ['SDK']:
        return

    # Flexからのメッセージには元のメッセージのconversationIdが含まれていない
    # GBM上の会話にメッセージを戻すためにconvIdが必要
    # 前のメッセージを取得してconversationIdを抽出
    message = twilio_client.chat \
            .services(TWILIO_SERVICE_SID) \
            .channels(body.get("ChannelSid")[0]) \
            .messages.list(limit=1)[0]

    attributes = json.loads(message.attributes)

    channel = discord_client.get_channel(attributes.get("channel", {}).get("id"))
    if channel:
        await channel.send(body.get("Body", [""])[0].get("text"))
    else:
        logger.error(f"ID {get_channel_id(req)}のDiscordチャンネルが見つかりません！")
        response.status_code = 400
```

最後に、メッセージをエンドポイントに送信するために、Twilioに新しいWebhookが何であるかを知らせる必要があります。各チャットチャンネルは独自のWebhookを設定する必要があります。したがって、最初にユーザーのために新しいチャットチャンネルを作成した場所に戻ると、Webhookを設定するために追加のコードを追加できます：

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

### ボット統合

今、SeaXからの送信メッセージが正しくDiscordサーバーに戻ってルーティングされるはずです。しかし、まだチャットボットに送信されるメッセージを処理していません。Twilio Studioフローからトリガーされ、ユーザーメッセージを受信し、ボットにクエリを実行し、Discordに応答を返す最終エンドポイントを設定する必要があります。

```python
@app.post("/chatbot-to-discord", status_code=200)
async def receive_discord_message(request: Request, response: Response):
    """TwilioからのPOSTリクエストを受信し、ボットにクエリを実行し、Discordに応答を返す。"""
    req = await request.body()
    # 元のメッセージ本文をtwilioコンテンツから分離
    twilio_body, original_message_body = separate_original_message_body(req.decode())

    bot_response = await query_bot(original_message_body, bot_info)

    if bot_response:
        channel = discord_client.get_channel(original_message_body.get("channel_id"))
        if channel:
            for item in bot_response:
                await channel.send(item.get("text"))
```

Twilio Studioフローがメッセージをボットにルーティングする正しいWebhookを持っていることを確認してください。今、メッセージルーティングが完了しました！この図でメッセージルーティングの全体像を見ることができます：

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-routing-diagram.jpg" alt="メッセージルーティング図。"/>

*メッセージルーティング図。*
</center>

# まとめ
まとめると、このブログシリーズでは、Discordの人気の高まりと、ブランドが顧客と対話する新しいプラットフォームとしてもたらす機会について議論しました。ブランドが独自のオンラインコミュニティを構築する方法を示すために、Discordの基本的な機能をいくつか紹介し、ブランドがDiscordボットを使用してサーバー上のモデレーションとカスタマーサービスを自動化できるより高度な機能も紹介しました。最後に、DiscordをカスタマーサービスプラットフォームSeaXと統合し、ライブエージェント転送、ケース管理、AI駆動のナレッジベース検索などの高度な機能をDiscordコミュニティにもたらす方法を共有しました。
個人的なデモや、Seasalt.aiが特定のビジネスニーズを満たすのにどのように役立つかを学ぶために、["デモを予約"](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting)フォームにご記入ください。Flex/Discord統合の詳細やお問い合わせについては、[Seasalt.aiのTwilioパートナーリスト](https://showcase.twilio.com/partner-listing/a8E8Z000000PDCQUA4)をご覧ください。

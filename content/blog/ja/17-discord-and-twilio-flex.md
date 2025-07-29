---
title: "Discord (3/3): Discord & Twilio Flex: Flexコンタクトセンターを未開の領域に持ち込む"
metatitle: "Discord (3/3): DiscordのTwilio Flexコンタクトセンター"
date: 2022-06-07T12:32:24-07:00
author: Kim Dodds
draft: false
image: /images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/flex-discord-thumbnail.png
description: "このブログでは、Seasalt.aiが本格的なコンタクトセンターをDiscordサーバーに統合した方法を実演します。"
weight: 1
tags: ["SeaX", "Discord"]
canonicalURL: "/blog/discord-and-twilio"
url: "/blog/discord-and-twilio/"
aliases:
  - /blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/
modified_date: "2025-07-28T16:56:53Z"
---

*これは、Discordでの顧客エンゲージメントに関する3部構成シリーズの最後の投稿です。最初のブログ[「顧客エンゲージメントの新たなフロンティア」](https://seasalt.ai/blog/15-discord-a-new-frontier-for-customer-engagement/)では、Discordの人気の上昇と、ブランドが独自のオンラインコミュニティを作成して参加するための新たな機会について説明しました。パート2の[「ブランド用のDiscordコミュニティとボットを作成する方法」](https://seasalt.ai/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/)では、ブランド用のDiscordサーバーを作成する方法と、サーバーのモデレーション、お知らせ、ユーザーフィードバックなどを管理するためのボットを統合する方法について説明しました。最後に、このブログでは、Seasalt.aiが本格的なコンタクトセンターをDiscordサーバーに統合し、ブランドがプラットフォーム上の顧客ケアのあらゆる側面を処理できるようにした方法のデモンストレーションを紹介します。*

## 目次
- [目次](#table-of-contents)
- [Discordカスタマーサービスデモ](#discord-customer-service-demo)
- [Twilio Flex](#twilio-flex)
- [SeaX](#seax)
- [デモサーバー](#demo-server)
  - [1対多のヘルプ：公式チャンネル](#1-to-many-help-official-channels)
  - [1対1のヘルプ：カスタマーサービスエージェント](#1-to-1-help-customer-service-agent)
    - [ナレッジベース](#knowledge-base)
    - [ライブエージェント転送](#live-agent-transfer)
  - [ケース管理](#case-management)
- [技術的な詳細](#technical-deep-dive)
  - [Flexフローの定義](#define-the-flex-flow)
  - [カスタムチャネルの作成](#create-a-custom-channel)
  - [より複雑なルーティングをサポートするためのHTTPサーバーの作成](#create-an-http-server-to-support-more-complex-routing)
    - [アウトバウンドメッセージWebhook](#outbound-messages-webhook)
    - [ボットの統合](#bot-integration)
- [まとめ](#summary)

# Discordカスタマーサービスデモ
すぐに最終製品をご覧になりたい場合は、まず最終的なデモビデオをご覧ください。

<iframe width="85%" height="450px" src="https://www.youtube.com/embed/iUK4YkGYI6Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>


私たちの目標は、Discordを既存のカスタマーサービスソフトウェア（この場合は[Twilio Flex](https://flex.twilio.com/)）に統合して、ブランドの公式サーバーに付加価値を付ける方法を示すことです。実装の詳細については、引き続きお読みください。

# Twilio Flex
Twilioは、テキストメッセージ、電話、メール、チャットメッセージなどを管理するためのAPIを提供する、定評のある通信会社です。FlexはTwilioの主力製品の1つです。あらゆるソースからのメッセージや通話を仮想エージェントやライブエージェントにルーティングする、スケーラブルなクラウドベースのコンタクトセンターです。Facebook、SMS、WhatsAppなど、さまざまなチャネルをすでに優れたサポートしているため、コンタクトセンター統合の基盤としてFlexを選択しました。

# SeaX
SeaXは、生産性と顧客満足度を向上させるのに役立つ高度なAI機能を深く統合したクラウドコンタクトセンターです。SeaXはSeasalt.aiの主力製品の1つであり、すでに150か国以上のクライアントに展開されています。SeaXコンタクトセンタープラットフォームはTwilio Flex上に構築されており、ライブエージェントが顧客をより良く支援できるようにするさまざまな追加機能が含まれています。最も便利な機能のいくつかは、社内のテキスト読み上げと音声認識、AI搭載のナレッジベース、統合されたケース管理システムです。SeaXプラットフォームのすべての機能の詳細については、[SeaXホームページ](https://seax.seasalt.ai/?utm_source=blog/)をご覧ください。

# デモサーバー
次に、Discordサーバーの設定方法について説明します。デモの目的で、サーバーがPokémon Go!のようなゲームのコミュニティとして使用されるシナリオを想像しました。次の表は、Discordサーバーでデモンストレーションされた機能の一部を概説しています。

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-features-2.png" alt="デモカスタマーサービスDiscordサーバーの機能概要。"/>

*デモDiscordサーバーの機能概要。*
</center>

## 1対多のヘルプ：公式チャンネル
サーバー内のいくつかのチャネルは、公式の管理者/開発者とプレイヤーの間に直接的なストリームを提供するように設定されています。
**お知らせチャンネル**は、管理者とモデレーターのみが投稿でき、Twitterアカウント、ウェブサイト、またはその他の公式ソースからの（手動または自動の）投稿を含めることができます。

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-announcement-channel.jpg" alt="Discordサーバーのお知らせチャンネル。公式Twitterアカウントからの投稿が掲載されています。"/>

*デモDiscordサーバーの#announcementsチャンネル。*
</center>

**バグ報告チャンネル**では、プレイヤーがバグやゲームを破壊する問題について話し合うことができます。管理者はこのチャンネルを監視して、ゲーム内で対処すべき問題を特定できます。さらに、ユーザーはチャンネル内から`/bug`スラッシュコマンドを使用して公式のバグ報告を送信できます。

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-bug-report-channel.jpg" alt="Discordサーバーのバグ報告チャンネル。送信されたバグ報告が掲載されています。"/>

*デモDiscordサーバーの#bug-reportチャンネル。送信されたバグ報告が掲載されています。*
</center>

**機能リクエストチャンネル**では、プレイヤーがゲームプレイの変更、生活の質の向上、コンテンツの追加など、ゲームに追加してほしいことについて話し合うことができます。バグリクエストチャンネルと同様に、彼らの意見はDiscordモデレーターに見てもらうことができ、`/new_feature`スラッシュコマンドを使用して公式のリクエストを送信できます。

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-feature-request-channel.jpg" alt="Discordサーバーの機能リクエストチャンネル。ユーザーがスラッシュコマンドを実行しています。"/>

*デモDiscordサーバーの#feature-requestチャンネル。ユーザーがスラッシュコマンドを実行しています。*
</center>

## 1対1のヘルプ：カスタマーサービスエージェント

プレイヤーは`/helpme`スラッシュコマンドを使用して、エージェントとのダイレクトメッセージを開始できます。カスタマーサービスエージェントは、自動化（仮想エージェント）またはライブエージェントが対応できます。

デモでは、会社のナレッジベースを照会してユーザーに関連する記事の提案を提供する簡単なFAQボットを設定しました。ユーザーはライブエージェントをリクエストすることもでき、同じチャットでSeaXのライブエージェントに転送されます。

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-customer-service-channel.jpg" alt="Discordサーバーのカスタマーサービスチャンネル。ユーザーがDMを開始しています。"/>

*デモDiscordサーバーの#feature-requestチャンネル。ユーザーがDMを開始しています。*
</center>

### ナレッジベース
ユーザーが仮想サービスエージェントにクエリを送信すると、エージェントはユーザーをナレッジベースの関連記事に誘導できます。

### ライブエージェント転送
ユーザーがボットとのダイレクトメッセージに入ると、ライブエージェントをリクエストできます。すぐにケースが作成されたこと、およびライブエージェントに転送されていることが通知されます。ライブエージェントがチャットに参加すると、通知も届きます。

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-customer-service-dm.jpg" alt="カスタマーサービスとのダイレクトメッセージ。KB記事の提案、ライブエージェント転送、ケース管理が特徴です。"/>

*カスタマーサービスとのダイレクトメッセージ。KB記事の提案、ライブエージェント転送、ケース管理が特徴です。*
</center>

バックエンドでは、ライブエージェントはすべてのチャネル（SMS、Facebook、Discord、音声通話など）からの着信通話とチャットメッセージを単一のプラットフォームで処理できます。この場合、バックエンドプラットフォームはSeaXです。

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/flex-discord-channel.jpg" alt="Discord上のユーザーとの会話のライブエージェントのビューを表示するSeaXインターフェース。"/>

*Discord上のユーザーとの会話のライブエージェントのビューを表示するSeaXインターフェース。*
</center>

## ケース管理
このデモで強調したかった機能の1つは、ケース管理です。Seasalt.aiのDiscordソリューションは、SeaXケース管理システムと統合して、ユーザーからのさまざまなケースを適切に追跡します。ユーザーがDiscordボットと対話する（ライブエージェントをリクエストしたり、バグを報告したりするなど）と、自動的に新しいケースを開き、ユーザーと彼らが経験している問題に関するすべての重要な情報を記録できます。これにより、ライブエージェントは報告されたすべての問題に簡単にアクセスでき、ケースが解決されるまでユーザーをフォローアップできます。

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-new-case.png" alt="SeaXケース管理システムで新しいケースを作成する。"/>

*SeaXケース管理システムで新しいケースを作成する。*

<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-existing-case.png" alt="SeaXケース管理システムで既存のケースを表示する。"/>

*SeaXケース管理システムで既存のケースを表示する。*

</center>

# 技術的な詳細

これで、最終製品と、サーバーのメンバーと彼らを支援するライブエージェントが利用できるすべての機能を確認しました。しかし、全体は実際にどのように実装されたのでしょうか？前回のブログ投稿「[ブランド用のDiscordコミュニティとボットを作成する方法](https://seasalt.ai/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/)」では、ブランド用のDiscordサーバーを作成する方法と、それを管理するためのDiscordボットを統合する方法について説明しました。このより高度なデモをサポートするために、[Seasalt.aiの会話型AIエンジンであるSeaChat](https://chat.seasalt.ai)も使用して、Discordボットがユーザーの自然言語クエリを処理できるようにする簡単なチャットボットを構築しました。

SeaX側では、私たちのチームはTwilioと緊密に協力して、Twilio Flex上に構築された機能豊富なコンタクトセンターソリューションを作成しました。Twilio Flexとセットアッププロセスの詳細については、[Twilio Flexクイックスタートガイド](https://www.twilio.com/docs/flex/quickstart)をご覧ください。

Discordサーバー、Discordボット、チャットボットを準備し、SeaXの動作インスタンスが稼働していることを確認した後、最大の課題は、ユーザー、ボット、SeaXのライブエージェントとの間でメッセージを適切にルーティングすることです。Twilioはメッセージルーティングの処理に優れているため、私たちの目標は、Discordボットサーバー内からすべてのスラッシュコマンドを処理し、その後、他のすべてのメッセージ（チャットボットやライブエージェントへのダイレクトメッセージなど）をTwilioに転送することです。

## Flexフローの定義
最初のステップは、Twilioに送信するメッセージが正しい場所にルーティングされることを確認することです。ユーザーがライブエージェントをリクエストしたかどうかを最初に確認し、そうであれば次のメッセージをSeaXに転送する簡単なTwilioフローを設定しました。ユーザーがライブエージェントをリクエストしなかった場合は、メッセージをチャットボットに転送して応答を取得します。フローの設定方法の詳細については、[Twilio Studioフローのドキュメント](https://www.twilio.com/docs/studio)を参照してください。

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-flow.png" alt="着信メッセージをチャットボットまたはSeaXにルーティングする簡単なFlex Studioフロー。"/>

*着信メッセージをチャットボットまたはSeaXにルーティングする簡単なFlex Studioフロー。*
</center>

## カスタムチャネルの作成
これで、着信メッセージがどのようにルーティングされるかについて、ある程度の見当がつきました。ただし、DiscordはTwilioでネイティブにサポートされているチャネルではありません。幸いなことに、Twilioには[Twilio Flexにカスタムチャットチャネルを追加する方法](https://www.twilio.com/blog/add-custom-chat-channel-twilio-flex)に関する詳細なチュートリアルがあります。Twilioで新しいカスタムチャネルを設定するためのガイドに従った後、実際にDiscordからTwilioにメッセージを転送する必要があります。

まず、Twilioクライアントを設定します。

```python
from twilio.rest import Client
twilio_client = Client(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)
```

これで、Discordから着信メッセージを受信すると、そのメッセージをTwilioクライアント経由でTwilioに転送できます。まず、ユーザーがTwilioシステムにすでに存在するかどうか、およびオープンなチャットチャネルがすでにあるかどうかを確認する必要があります。

```python
# get_userメソッドを呼び出してユーザーが存在するかどうかを確認し、存在しない場合は新しいユーザーを作成します
user = await get_user(user_id, twilio_client, TWILIO_SERVICE_SID)

# ユーザーが参加しているチャネルを取得します
user_channels = twilio_client.chat \
        .services(TWILIO_SERVICE_SID) \
        .users(user_id) \
        .user_channels \
        .list()
```

ユーザーに既存のオープンなチャットチャネルがある場合は、チャット履歴にアクセスできるように、それを使用する必要があります。既存のチャットチャネルがない場合は、ユーザー用に新しいチャネルを作成します。

```python
if user_channels:
    channel_sid = user_channels[-1].channel_sid
else:
    channel = twilio_client.flex_api \
            .channel \
            .create(
                flex_flow_sid=FLEX_FLOW_ID,
                chat_user_friendly_name=username,
                chat_friendly_name=chat_name,  # -> チャットチャネルのフレンドリ名
                target=conversation_id,  # -> チャットユーザーを一意に識別するID
                identity=conversation_id,  # -> ユーザー、例/ Discord DM ID
        )
    channel_sid = channel.sid
```

最後に、DiscordユーザーとTwilioの間にオープンなチャットチャネルができたら、着信メッセージをTwilio Studioフローに転送できます。

```python
message = twilio_client.chat \
        .services(TWILIO_SERVICE_SID) \
        .channels(channel_sid) \
        .messages \
        .create(
            body=message_text,
            from_=user_id,
            x_twilio_webhook_enabled='true',
            attributes=json.dumps(message_json)  # 後でアクセスできるようにヘッダーを属性として送信します
        )
```
これで、Discordユーザーからのすべての着信メッセージをTwilio Flexフローに直接転送できるようになりました。Discordボット側では、すべてのダイレクトメッセージがTwilioに転送されていることを確認してください。これで、Discordボットにダイレクトメッセージを送信してみると、Twilio Studioフローのログに表示されるはずです。ただし、まだ完了ではありません。

## より複雑なルーティングをサポートするためのHTTPサーバーの作成

### アウトバウンドメッセージWebhook
これで、着信メッセージがどのようにルーティングされるかについて、ある程度の見当がつきました。ただし、まだいくつかの部分が欠けています。まず、Twilioにメッセージを送信できることはわかりましたが、Discordのユーザーにどのように応答すればよいでしょうか？Discordボットは、Discordサーバーとユーザーにメッセージを送信することを許可されている唯一のものであり、TwilioはとにかくDiscordサーバーにメッセージを返す方法を知りません。解決策は、Twilioチャットチャネルに新しいメッセージがあるたびにトリガーされるアウトバウンドメッセージWebhookを設定する必要があるということです。そのWebhook内で、Discordボットを使用してメッセージをサーバーに転送できます。

これを行うには、Discordボットをより堅牢なHTTPサーバーに統合します。[FastAPI](https://fastapi.tiangolo.com/)を使用して、アウトバウンドメッセージWebhookとして機能する単純なPOSTエンドポイントを設定しました。サーバーを設定し、Discordボットをその横で実行したら、POSTエンドポイントを定義できます。

このエンドポイントは、チャットチャネルに追加されたすべての単一のメッセージを受信するため、まずSeaXからのアウトバウンドメッセージを除くすべてをフィルタリングします。次に、メッセージをどこに転送するかを知るために、メッセージ本文から正しいチャネルIDを取得する必要があります。最後に、Discordクライアントを使用してメッセージをDiscordチャネルに転送できます。

```python
@app.post("/forward-to-discord", status_code=200)
async def forward_discord_message(request: Request, response: Response) -> None:
    raw_body = await request.body()
    body = urllib.parse.parse_qs(raw_body.decode())

    # SDKからのメッセージのみに注意してください（Flex、その他はすべてAPIからになります）
    if not body.get('Source') == ['SDK']:
        return

    # Flexからのメッセージには、元のメッセージのconversationIdは含まれていません
    # GBMの会話にメッセージを返すには、convIdが必要です
    # 前のメッセージを取得してconversationIdを抽出します
    message = twilio_client.chat \
            .services(TWILIO_SERVICE_SID) \
            .channels(body.get("ChannelSid")[0]) \
            .messages.list(limit=1)[0]

    attributes = json.loads(message.attributes)

    channel = discord_client.get_channel(attributes.get(“channel”, {}).get(“id”))
    if channel:
        await channel.send(body.get("Body", [""])[0].get(“text”))
    else:
        logger.error(f"IDを持つDiscordチャネルが見つかりませんでした：{get_channel_id(req)}！")
        response.status_code = 400
```

最後に、メッセージをエンドポイントに送信するには、Twilioに新しいWebhookが何であるかを知らせる必要があります。各チャットチャネルには、独自のWebhookが設定されている必要があります。したがって、最初にユーザー用に新しいチャットチャネルを作成した場所に戻ると、Webhookを設定するための追加のコードを追加できます。

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

### ボットの統合

これで、SeaXからのアウトバウンドメッセージは、Discordサーバーに正しくルーティングされるはずです。しかし、チャットボットに送信されるメッセージにはまだ対処していません。Twilio Studioフローからトリガーされ、ユーザーメッセージを受信し、ボットにクエリを実行し、応答をDiscordに返す最後の エンドポイントを設定する必要があります。

```python
@app.post("/chatbot-to-discord", status_code=200)
async def receive_discord_message(request: Request, response: Response):
    """TwilioからPOSTリクエストを受信し、ボットにクエリを実行し、応答をDiscordに返します。"""
    req = await request.body()
    # 元のメッセージ本文をtwilioコンテンツから分離します
    twilio_body, original_message_body = separate_original_message_body(req.decode())

    bot_response = await query_bot(original_message_body, bot_info)

    if bot_response:
        channel = discord_client.get_channel(original_message_body.get(“channel_id”))
        if channel:
            for item in bot_response:
                await channel.send(item.get(“text”))
```

Twilio Studioフローに、メッセージをボットにルーティングするための正しいWebhookがあることを確認してください。これで、メッセージルーティングが完了しました。この図ですべてのメッセージルーティングのトップレベルビューを確認できます。

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-routing-diagram.jpg" alt="メッセージルーティング図。"/>

*メッセージルーティング図。*
</center>

# まとめ
まとめると、このブログシリーズでは、Discordの人気の上昇と、それがブランドにとって顧客と関わるための新しいプラットフォームとして提示する機会について説明しました。Discordの基本的な機能のいくつかについて説明し、ブランドが独自のオンラインコミュニティをどのように設定できるか、また、Discordボットを使用してサーバー上のモデレーションとカスタマーサポートを自動化できる高度な機能についても説明しました。最後に、DiscordをカスタマーサービスプラットフォームであるSeaXと統合して、ライブエージェント転送、ケース管理、AI搭載のナレッジベース検索などの高度な機能をDiscordコミュニティにもたらしたデモンストレーションを共有しました。
個人的なデモ、またはSeasalt.aiが特定のビジネスニーズに対応する方法については、「[デモを予約する](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting)」フォームにご記入ください。Flex/Discord統合の詳細またはお問い合わせについては、[Seasalt.aiのTwilioパートナーリスト](https://showcase.twilio.com/partner-listing/a8E8Z000000PDCQUA4)をご覧ください。

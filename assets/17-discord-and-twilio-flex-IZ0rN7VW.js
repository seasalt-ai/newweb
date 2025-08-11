const n=`---
title: "Discord (3/3): DiscordとTwilio Flex: Flexコンタクトセンターを未開拓の領域へ"
metatitle: "Discord (3/3): DiscordでのTwilio Flexコンタクトセンター"
date: 2022-06-07 12:32:24-07:00
modified_date: 2025-01-27T10:30:00Z
draft: false
author: Kim Dodds
description: "このブログでは、Seasalt.aiがDiscordサーバーに完全な機能を持つコンタクトセンターを統合する方法を実証します。"
tags:
  - SeaX
  - Discord
image: /images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/flex-discord-thumbnail.png
canonicalURL: /blog/discord-and-twilio
url: /blog/discord-and-twilio/
---

*これは、Discordでの顧客エンゲージメントに関する3部構成シリーズの最終記事です。最初のブログ記事["顧客エンゲージメントの新フロンティア"](https://seasalt.ai/blog/15-discord-a-new-frontier-for-customer-engagement/)では、Discordの普及と、ブランドが独自のオンラインコミュニティを作成・参加するための新しい機会について議論しました。第2部["ブランドのためのDiscordコミュニティとボットの作成方法"](https://seasalt.ai/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/)では、ブランドのためのDiscordサーバーの作成方法と、サーバー管理、アナウンス、ユーザーフィードバックなどを管理するボットの統合方法を紹介しました。最後に、このブログでは、Seasalt.aiがDiscordサーバーに完全な機能を持つコンタクトセンターを統合し、ブランドがプラットフォームでのカスタマーサービスのすべての側面を処理できるようにする方法を実証します。*

## 目次
- [目次](#table-of-contents)
- [Discordカスタマーサービスデモ](#discord-customer-service-demo)
- [Twilio Flex](#twilio-flex)
- [SeaX](#seax)
- [デモサーバー](#demo-server)
  - [1対多のヘルプ: 公式チャンネル](#1-to-many-help-official-channels)
  - [1対1のヘルプ: カスタマーサービスエージェント](#1-to-1-help-customer-service-agent)
    - [ナレッジベース](#knowledge-base)
    - [ライブエージェント転送](#live-agent-transfer)
  - [ケース管理](#case-management)
- [技術的詳細](#technical-deep-dive)
  - [Flexフローの定義](#define-the-flex-flow)
  - [カスタムチャンネルの作成](#create-a-custom-channel)
  - [より複雑なルーティングをサポートするHTTPサーバーの作成](#create-an-http-server-to-support-more-complex-routing)
    - [送信メッセージWebhook](#outbound-messages-webhook)
    - [ボット統合](#bot-integration)
- [まとめ](#summary)

# Discordカスタマーサービスデモ
要点に直行して最終製品を見たい場合は、まず最終デモビデオをお見せします：

<iframe width="85%" height="450px" src="https://www.youtube.com/embed/iUK4YkGYI6Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

私たちの目標は、Discordを既存のカスタマーサービスソフトウェア（この場合は[Twilio Flex](https://flex.twilio.com/)）に統合して、公式ブランドサーバーに追加価値を提供する方法を実証することです。実装の詳細な理解のために、読み続けてください。

# Twilio Flex
Twilioは、SMS、電話、メール、チャットメッセージなどを管理するためのAPIを提供する成熟した通信企業です。FlexはTwilioの主力製品の1つで、任意のソースからのメッセージとコールを仮想エージェントとライブエージェントにルーティングできるスケーラブルなクラウドベースのコンタクトセンターです。Facebook、SMS、WhatsAppなどの様々なチャンネルで既に優れたサポートを提供しているため、コンタクトセンター統合の基盤としてFlexを選択しました。

# SeaX
SeaXは、生産性と顧客満足度の向上を支援する高度なAI機能と深く統合されたクラウドコンタクトセンターです。SeaXはSeasalt.aiの主力製品の1つで、150以上の国々の顧客に展開されています。SeaXコンタクトセンタープラットフォームはTwilio Flex上に構築され、ライブエージェントが顧客をより適切に支援するのに役立つ様々な追加機能が含まれています。最も有用な機能には、内部テキスト読み上げと音声認識、AI駆動のナレッジベース、統合ケース管理システムなどがあります。SeaXプラットフォームのすべての機能の詳細については、[SeaXホームページ](https://seax.seasalt.ai/?utm_source=blog/)をご覧ください。

# デモサーバー
次に、Discordサーバーの設定方法を紹介します。デモ目的で、私たちのサーバーがPokémon Go!のようなゲームのコミュニティとして使用されるシナリオを想定しました。以下の表は、デモDiscordサーバーで実証する機能の概要を示しています。

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-features-2.png" alt="デモカスタマーサービスDiscordサーバーの機能概要。"/>

*デモDiscordサーバーの機能概要。*
</center>

## 1対多のヘルプ: 公式チャンネル
サーバー内のいくつかのチャンネルは、公式管理者/開発者とプレイヤー間の直接ストリームを提供するために設定されています。
**アナウンスチャンネル**は管理者とモデレーターのみが投稿でき、Twitterアカウント、ウェブサイト、その他の公式ソースからの（手動または自動）投稿を含むことができます。

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-announcement-channel.jpg" alt="公式Twitterアカウントからの投稿を含むDiscordサーバーのアナウンスチャンネル。"/>

*Discordサーバーのデモ#announcementsチャンネル。*
</center>

**バグ報告チャンネル**では、プレイヤーがバグやゲームを破綻させる問題について議論できます。管理者はこのチャンネルを密接に監視して、対処すべきゲーム内の問題を特定できます。さらに、ユーザーはチャンネル内で\`/bug\`スラッシュコマンドを使用して公式バグ報告を送信できます。

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-bug-report-channel.jpg" alt="送信されたバグ報告を含むDiscordサーバーのバグ報告チャンネル。"/>

*送信されたバグ報告を含むDiscordサーバーのデモ#bug-reportチャンネル。*
</center>

**機能リクエストチャンネル**では、プレイヤーがゲームプレイの変更、生活の質の向上、コンテンツの追加など、ゲームで見たい変更について議論できます。バグリクエストチャンネルと同様に、Discordモデレーターが彼らの入力を確認でき、\`/new_feature\`スラッシュコマンドを使用して公式リクエストを送信できます。

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-feature-request-channel.jpg" alt="スラッシュコマンドを実行するユーザーを含むDiscordサーバーの機能リクエストチャンネル。"/>

*スラッシュコマンドを実行するユーザーを含むDiscordサーバーのデモ#feature-requestチャンネル。*
</center>

## 1対1のヘルプ: カスタマーサービスエージェント

プレイヤーは\`/helpme\`スラッシュコマンドを使用してエージェントとのダイレクトメッセージをトリガーできます。カスタマーサービスエージェントは自動化（仮想エージェント）またはライブエージェントによって操作できます。

デモでは、企業のナレッジベースを照会してユーザーに関連記事の提案を提供するシンプルなFAQボットを設定しました。ユーザーはライブエージェントをリクエストすることもでき、同じチャットセッションでSeaXのライブエージェントに転送されます。

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-customer-service-channel.jpg" alt="DMをトリガーするユーザーを含むDiscordサーバーのカスタマーサービスチャンネル。"/>

*DMをトリガーするユーザーを含むDiscordサーバーのデモ#feature-requestチャンネル。*
</center>

### ナレッジベース
ユーザーが仮想サービスエージェントにクエリを送信すると、エージェントはユーザーをナレッジベースの関連記事に紹介できます。

### ライブエージェント転送
ユーザーがボットとのダイレクトメッセージを開始すると、ライブエージェントをリクエストできます。ケースが作成され、ライブエージェントに転送されていることを即座に通知されます。ライブエージェントがチャットに参加すると、通知も受け取ります。

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-customer-service-dm.jpg" alt="ナレッジベース記事の提案、ライブエージェント転送、ケース管理を含むカスタマーサービスとのダイレクトメッセージ。"/>

*ナレッジベース記事の提案、ライブエージェント転送、ケース管理を含むカスタマーサービスとのダイレクトメッセージ。*
</center>

バックエンドでは、ライブエージェントは単一のプラットフォームを通じてすべてのチャンネル（SMS、Facebook、Discord、音声通話など）からのコールとチャットメッセージを処理できます。この場合、バックエンドプラットフォームはSeaXです。

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/flex-discord-channel.jpg" alt="Discordユーザーとの会話のライブエージェントビューを示すSeaXインターフェース。"/>

*Discordユーザーとの会話のライブエージェントビューを示すSeaXインターフェース。*
</center>

## ケース管理
このデモで強調したい機能の1つはケース管理です。Seasalt.aiのDiscordソリューションはSeaXケース管理システムと統合され、ユーザーの様々なケースを適切に追跡します。ユーザーがDiscordボットと対話するとき（ライブエージェントをリクエストしたりバグを報告したりするなど）、新しいケースを自動的に開き、ユーザーと彼らが経験している問題に関するすべての重要な情報を記録できます。これにより、ライブエージェントが報告されたすべての問題に簡単にアクセスでき、ケースが解決されるまでユーザーを追跡することを保証します。

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-new-case.png" alt="SeaXケース管理システムで新しいケースを作成。"/>

*SeaXケース管理システムで新しいケースを作成。*

<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-existing-case.png" alt="SeaXケース管理システムで既存のケースを表示。"/>

*SeaXケース管理システムで既存のケースを表示。*

</center>

# 技術的詳細

今、最終製品とサーバーメンバーと彼らを支援するライブエージェントが利用できるすべての機能を見ました。しかし、すべてが実際にどのように実装されているのでしょうか？前回のブログ記事["ブランドのためのDiscordコミュニティとボットの作成方法"](https://seasalt.ai/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/)では、ブランドのためのDiscordサーバーの作成方法とDiscordボットを統合して管理する方法を紹介しました。このより高度なデモをサポートするために、[SeaChat、Seasalt.aiの会話型AIエンジン](https://chat.seasalt.ai)も使用して、Discordボットがユーザーの自然言語クエリを処理できるシンプルなチャットボットを構築しました。

SeaX側では、チームはTwilioと密接に協力して、Twilio Flex上に構築された機能豊富なコンタクトセンターソリューションを作成しました。Twilio Flexとセットアッププロセスの動作についての詳細は、[Twilio Flexクイックスタートガイド](https://www.twilio.com/docs/flex/quickstart)をご覧ください。

Discordサーバー、Discordボット、チャットボットを設定し、動作するSeaXインスタンスがあることを確認した後、最大の課題は、SeaX上のユーザー、ボット、ライブエージェント間でメッセージを適切にルーティングする方法でした。Twilioはメッセージルーティングの処理に優れているため、Discordボットサーバー内のすべてのスラッシュコマンドを処理し、他のすべてのメッセージ（チャットボットやライブエージェントに送信されるダイレクトメッセージなど）をTwilioに転送することを目標としました。

## Flexフローの定義
最初のステップは、Twilioに送信するすべてのメッセージが正しい場所にルーティングされることを確認することです。ユーザーがライブエージェントをリクエストしたかどうかを最初にチェックし、そうであれば後続のメッセージをSeaXに転送するシンプルなTwilioフローを設定しました。ユーザーがライブエージェントをリクエストしていない場合、メッセージをチャットボットに転送して応答を得ます。フローの設定についての詳細は、[Twilio Studio Flowドキュメント](https://www.twilio.com/docs/studio)をご覧ください。

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-flow.png" alt="受信メッセージをチャットボットまたはSeaXにルーティングするシンプルなFlex Studioフロー。"/>

*受信メッセージをチャットボットまたはSeaXにルーティングするシンプルなFlex Studioフロー。*
</center>

## カスタムチャンネルの作成
今、受信メッセージがどのようにルーティングされるかを理解しています。しかし、DiscordはTwilioによってネイティブにサポートされているチャンネルではありません。幸い、Twilioには[Twilio Flexにカスタムチャットチャンネルを追加する方法](https://www.twilio.com/blog/add-custom-chat-channel-twilio-flex)に関する詳細なチュートリアルがあります。Twilioで新しいカスタムチャンネルを設定するガイドに従った後、実際にDiscordからTwilioにメッセージを転送する必要があります。

まずTwilioクライアントを設定します：

\`\`\`python
from twilio.rest import Client
twilio_client = Client(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)
\`\`\`

今、Discordから受信メッセージを受け取ると、Twilioクライアントを通じてそのメッセージをTwilioに転送できます。まず、ユーザーが既にTwilioシステムに存在し、既にオープンチャットチャンネルを持っているかどうかをチェックする必要があります。

\`\`\`python
# ユーザーが存在するかどうかをチェックするget_userメソッドを呼び出し、存在しない場合は新しいユーザーを作成
user = await get_user(user_id, twilio_client, TWILIO_SERVICE_SID)

# ユーザーのチャンネルを取得
user_channels = twilio_client.chat \\
        .services(TWILIO_SERVICE_SID) \\
        .users(user_id) \\
        .user_channels \\
        .list()
\`\`\`

ユーザーが既存のオープンチャットチャンネルを持っている場合、チャット履歴にアクセスできるようにそれを使用する必要があります。既存のチャットチャンネルがない場合、ユーザーのために新しいものを作成します：

\`\`\`python
if user_channels:
    channel_sid = user_channels[-1].channel_sid
else:
    channel = twilio_client.flex_api \\
            .channel \\
            .create(
                flex_flow_sid=FLEX_FLOW_ID,
                chat_user_friendly_name=username,
                chat_friendly_name=chat_name,  # -> チャットチャンネルのフレンドリ名
                target=conversation_id,  # -> チャットユーザーを一意に識別するID
                identity=conversation_id,  # -> ユーザー、例 / Discord DM ID
        )
    channel_sid = channel.sid
\`\`\`

最後に、DiscordユーザーとTwilioの間にオープンチャットチャンネルがあると、受信メッセージをTwilio Studioフローに転送できます。

\`\`\`python
message = twilio_client.chat \\
        .services(TWILIO_SERVICE_SID) \\
        .channels(channel_sid) \\
        .messages \\
        .create(
            body=message_text,
            from_=user_id,
            x_twilio_webhook_enabled='true',
            attributes=json.dumps(message_json)  # 後でアクセスできるようにヘッダーを属性として送信
        )
\`\`\`
今、Discordユーザーからの受信メッセージをTwilio Flexフローに直接転送できます。Discordボット側では、すべてのダイレクトメッセージがTwilioに転送されることを確認してください。今、Discordボットにダイレクトメッセージを送信してみて、Twilio Studioフローログに表示されるはずです - しかし、まだ終わっていません！

## より複雑なルーティングをサポートするHTTPサーバーの作成

### 送信メッセージWebhook
今、受信メッセージがどのようにルーティングされるかを理解しています。しかし、まだいくつかの部分が不足しています。まず、今Twilioにメッセージを送信できることを知っていますが、Discord上のユーザーにどのように返信するのでしょうか？私たちのDiscordボットは、Discordサーバーとユーザーにメッセージを送信する唯一の認可されたものであり、TwilioもメッセージをDiscordサーバーに戻す方法を知りません。解決策は、Twilioチャットチャンネルに新しいメッセージがあるたびにトリガーされる送信メッセージWebhookを設定する必要があることです。そのWebhookで、Discordボットを使用してメッセージをサーバーに転送できます。

このために、Discordボットをより強力なHTTPサーバーに統合します。[FastAPI](https://fastapi.tiangolo.com/)を使用して、送信メッセージWebhookとして機能するシンプルなPOSTエンドポイントを設定しました。サーバーを設定し、Discordボットがそれと一緒に動作すると、POSTエンドポイントを定義できます。

このエンドポイントはチャットチャンネルに追加されるすべてのメッセージを受け取るため、まずSeaXからの送信メッセージ以外のすべてを除外する必要があります。次に、メッセージをどこに転送するかを知るために、メッセージ本文から正しいチャンネルIDを取得する必要があります。最後に、Discordクライアントを使用してメッセージをDiscordチャンネルに転送できます。

\`\`\`python
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
    message = twilio_client.chat \\
            .services(TWILIO_SERVICE_SID) \\
            .channels(body.get("ChannelSid")[0]) \\
            .messages.list(limit=1)[0]

    attributes = json.loads(message.attributes)

    channel = discord_client.get_channel(attributes.get("channel", {}).get("id"))
    if channel:
        await channel.send(body.get("Body", [""])[0].get("text"))
    else:
        logger.error(f"ID {get_channel_id(req)}のDiscordチャンネルが見つかりません！")
        response.status_code = 400
\`\`\`

最後に、メッセージをエンドポイントに送信するために、Twilioに新しいWebhookが何であるかを知らせる必要があります。各チャットチャンネルは独自のWebhookを設定する必要があります。したがって、元々ユーザーのために新しいチャットチャンネルを作成した場所に戻ると、Webhookを設定するための追加コードを追加できます：

\`\`\`python
webhook = twilio_client.chat \\
        .services(TWILIO_SERVICE_SID) \\
        .channels(channel_sid) \\
        .webhooks \\
        .create(
            type='webhook',   
configuration_url=f"{SERVER_HOST}/forward-to-discord",
            configuration_method="POST",
            configuration_filters=["onMessageSent", "onMessageUpdated", "onMediaMessageSent"]
        )
\`\`\`

### ボット統合

今、SeaXからの送信メッセージが正しくDiscordサーバーにルーティングされるはずです。しかし、まだチャットボットに行くメッセージを処理していません。Twilio Studioフローからトリガーされ、ユーザーメッセージを受け取り、ボットにクエリを実行し、応答をDiscordに戻す最終エンドポイントを設定する必要があります。

\`\`\`python
@app.post("/chatbot-to-discord", status_code=200)
async def receive_discord_message(request: Request, response: Response):
    """TwilioからのPOSTリクエストを受け取り、ボットにクエリを実行し、応答をDiscordに戻す。"""
    req = await request.body()
    # 元のメッセージ本文をtwilioコンテンツから分離
    twilio_body, original_message_body = separate_original_message_body(req.decode())

    bot_response = await query_bot(original_message_body, bot_info)

    if bot_response:
        channel = discord_client.get_channel(original_message_body.get("channel_id"))
        if channel:
            for item in bot_response:
                await channel.send(item.get("text"))
\`\`\`

Twilio Studioフローがメッセージをボットにルーティングする正しいWebhookを持っていることを確認してください。今、メッセージルーティングが完了しました！この図でメッセージルーティングのトップレベルビューを見ることができます：

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-routing-diagram.jpg" alt="メッセージルーティング図。"/>

*メッセージルーティング図。*
</center>

# まとめ
要約すると、このブログシリーズでは、Discordの普及と、ブランドが顧客と対話するための新しいプラットフォームとしてもたらす機会について議論しました。ブランドが独自のオンラインコミュニティを構築する方法を示すために、Discordの基本的な機能をいくつか紹介し、ブランドがDiscordボットを使用してサーバーでのモデレーションとカスタマーサポートを自動化できるより高度な機能も紹介しました。最後に、DiscordをカスタマーサービスプラットフォームSeaXと統合し、ライブエージェント転送、ケース管理、AI駆動のナレッジベース検索などの高度な機能をDiscordコミュニティにもたらす方法を共有しました。
個人的なデモや、Seasalt.aiが特定のビジネスニーズを満たすのにどのように役立つかを学ぶために、["デモを予約"](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting)フォームにご記入ください。Flex/Discord統合の詳細やお問い合わせについては、[Seasalt.aiのTwilioパートナーリスト](https://showcase.twilio.com/partner-listing/a8E8Z000000PDCQUA4)をご覧ください。
`;export{n as default};

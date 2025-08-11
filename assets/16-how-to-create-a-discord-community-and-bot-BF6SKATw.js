const n=`---
title: "Discord (2/3): ブランドのDiscordコミュニティとボットを作成する方法"
metatitle: "Discord (2/3): ブランドのDiscordコミュニティとボットを作成する"
date: 2025-08-07T10:11:00 # 需要确认
draft: false
author: Kim Dodds
description: "このブログでは、ブランドのDiscordサーバーを作成し、モデレーション、バグ報告、アナウンスなどを自動化できるボットを接続する方法を説明します。"
weight: 1
tags:
  - SeaX
  - Discord
image: /images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-community-and-bot-for-your-brand.jpg
---

*私たちのブログ記事「[Discord: 顧客エンゲージメントの新たなフロンティア](https://seasalt.ai/blog/15-discord-a-new-frontier-for-customer-engagement/)」では、Discordの人気上昇と、ブランドがこの新しいソーシャルプラットフォームを活用して独自のオンラインコミュニティを形成し、顧客とエンゲージする方法について説明しました。このブログでは、モデレーション、バグ報告、アナウンスなどのタスクを自動化できるボットの接続方法を含め、ブランドの新しい公式サーバーを作成する方法を説明します。*

## 目次
- [サーバーのセットアップ](#サーバーのセットアップ)
    - [新しいDiscordサーバーを作成する](#新しいdiscordサーバーを作成する)
    - [サーバーを「コミュニティサーバー」に変換する](#サーバーをコミュニティサーバーに変換する)
    - [チャンネル、イベント、その他の機能を設定する](#チャンネルイベントその他の機能を設定する)
    - [情報を広める！](#情報を広める)
- [Discordボットのセットアップ](#discordボットのセットアップ)
    - [Discord開発者ポータルで新しいボットを作成する](#discord開発者ポータルで新しいボットを作成する)
    - [PyCordでシンプルなDiscordボットを作成する](#pycordでシンプルなdiscordボットを作成する)
    - [Discordボットを招待する](#discordボットを招待する)
    - [統合をテストする](#統合をテストする)

# サーバーのセットアップ

## 新しいDiscordサーバーを作成する
Discordアプリケーション内から、左下にある「サーバーを追加」ボタンをクリックします。

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/create-new-discord-server.png" alt="新しいDiscordサーバーを作成する。"/>

*新しいDiscordサーバーを作成する際のプロンプト。*
</center>

作成済みのチャンネルから始めたい場合はテンプレートから選択できますし、まっさらな状態から始めることもできます。最初のステップはこれだけで、サーバーが作成されます！

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/new-discord-server.png" alt="新しく作成されたDiscordサーバー。"/>

*新しく作成されたDiscordサーバー。*
</center>

## サーバーを「コミュニティサーバー」に変換する

Discordサーバーの「コミュニティ」機能を有効にすることを強くお勧めします。コミュニティサーバーに変換することで、サーバーのモデレート、運営、成長に役立つ追加ツールが有効になります。特に、コミュニティサーバーは以下の機能にアクセスできます。

- **ウェルカムスクリーン**: 新しいユーザーをサーバーに紹介します
- **アナウンスチャンネル**: ユーザーにメッセージをブロードキャストできます
- **サーバーインサイト**: コミュニティとユーザーに関する分析を表示します
- **ディスカバリー**: Discordのサーバーディレクトリでコミュニティを宣伝します

左上隅のサーバー名の横にあるドロップダウンをクリックし、「サーバー設定」を選択します。左側の「コミュニティを有効にする」タブをクリックし、「開始する」を選択します。

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/convert-to-community-discord-server.png" alt="通常のDiscordサーバーをコミュニティサーバーに変換する。"/>

*コミュニティサーバー設定を有効にする。*
</center>

必要なセットアップを進めます。コミュニティを有効にするには、サーバーがユーザーの追加認証を実行し、チャットフィルターを有効にし、ルールチャンネルを設定する必要があります。

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-community-setup.png" alt="コミュニティDiscordサーバーのセットアップ。"/>

*コミュニティサーバーのセットアップ。*
</center>

コミュニティを有効にすると、いくつかの新しい機能にアクセスできます。最も便利な機能の2つは、ウェルカムメッセージとメンバーシップスクリーニングです。

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-server-welcome-page.png" alt="サーバーウェルカムメッセージの例。"/>

*サーバーウェルカムメッセージの例。*

<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-server-membership-screening.png" alt="メンバーシップスクリーニング設定。"/>

*メンバーシップスクリーニング設定。*
</center>

## チャンネル、イベント、その他の機能を設定する
コミュニティサーバーを設定した後、メインサーバーページからも新しい機能にアクセスできます。

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-server-channel-types.png" alt="Discordサーバーで新しいチャンネルを作成する。" style="width:50%"/>

*新しいチャンネルを作成する。*

<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-server-channels.png" alt="Discordコミュニティサーバーのチャンネルの例。" style="width:50%"/>

*コミュニティサーバーのチャンネル。*
</center>

新しいチャンネルを作成すると、アナウンスとステージの2つの新しいチャンネルタイプにアクセスできます。アナウンスチャンネルはモデレーターのみが投稿でき、公式の投稿やアナウンスに役立ちます。多くのサーバーでは、ボットが公式のTwitterフィードやフォーラムの投稿をこのチャンネルに自動的に投稿します。「ステージ」チャンネルは、ライブオーディエンスとのイベントをホストするのに役立つ特別な種類の音声チャンネルです。ホストは他のスピーカーをモデレートする機能を持っています（通常の音声チャンネルとは異なり、自由参加ではありません）。

サーバーがすべて設定されると、次のようになります。

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/customized-discord-server.png" alt="完全にカスタマイズされたDiscordサーバー。"/>

*完全にカスタマイズされたコミュニティサーバー。*
</center>

## 情報を広める！
サーバーがすべて設定されたら、人々を招待し始めることができます！
Discordは無料の既製ウィジェットを提供しており、任意のウェブサイトに埋め込んでサーバーを宣伝できます。

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-server-widget.png" alt="Discordサーバーウィジェット設定。"/>

*サーバーウィジェット設定。*

<iframe src="https://discordapp.com/widget?id=966505646944055326&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>

*Seasalt.aiのNear Me Messaging Discordサーバーの動作するウィジェットの例。*

</center>

潜在的なユーザーとの信頼を築くために、必要に応じてDiscordサポートに連絡してサーバーを認証してもらうことができます。認証されると、サーバー名の横に「認証済み」アイコンが表示され、そのサーバーがビジネス、ブランド、公共の利益の人物の公式に提携しているコミュニティであることを示します。認証要件は[Discordの公式ウェブサイト](https://support.discord.com/hc/en-us/articles/360001107231-Verified-Server-Requirements)で確認できます。

サーバーが軌道に乗り、十分な数のユーザーを獲得すると、Discordはサーバーを内部で宣伝する機会をさらに提供します。サーバーが少なくとも8週間経過し、500人以上のユーザーがいる場合、Discordパートナーシップを申請できます。これにより、サーバーは特別なパートナー限定の特典を得られます。1,000人以上のユーザーに達すると、サーバーディスカバリーに参加でき、Discordを使用している誰もがサーバーを発見して参加できるようになります。

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-server-discovery.png" alt="Discordディスカバリー設定と要件。"/>

*Discordディスカバリー設定と要件。*
</center>

# Discordボットのセットアップ
サーバーを設定したので、ボットを追加してモデレーション、ユーザーフィードバック、アナウンスなどのプロセスを自動化することで、サーバーを強化できます。以下のセクションを読み進めて、シンプルなボットを設定する方法を学び、シリーズの次のブログで、Discordサーバー内で本格的なカスタマーサービス体験を統合する方法を確認してください。

## Discord開発者ポータルで新しいボットを作成する
[Discord開発者ポータル](https://discord.com/developers/applications)でアカウントを作成します。「新しいアプリケーション」を作成し、名前を付けます。

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/new-discord-application.png" alt="Discord開発者ポータルで新しいアプリケーションを作成する。"/>

*Discord開発者ダッシュボード: アプリケーション。*
</center>

新しいアプリケーションを選択し、左側の「ボット」タブをクリックします。

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/new-discord-bot.png" alt="アプリケーションのボット設定。"/>

*Discordアプリケーション設定。*
</center>

「ボットを追加」をクリックして、Discordボットを作成します。

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-bot-settings.png" alt="新しいDiscordボットを作成する。"/>

*新しいDiscordボットを作成する。*
</center>

作成後、ボットトークンを生成してコピーします。最後に、メッセージング権限がオンになっていることを確認します。

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-bot-messaging-permissions.png" alt="Discordボットメッセージング権限。"/>

*新しいDiscordボットを作成する。*
</center>

## PyCordでシンプルなDiscordボットを作成する

私たちは[PyCordライブラリ](https://docs.pycord.dev/en/master/)をDiscord APIのPythonラッパーとして使用しています。

1. PyCordをインストールし、Discordボット用の新しいPythonファイルを作成します。
2. discordパッケージをインポートし、discordクライアントのインスタンスを作成します。
3. クライアントの\`event\`ラッパーを使用して、\`on_message\`メソッドを作成します。このメソッドは、ボットがアクセスできるチャンネルに送信されたすべてのメッセージを受信します。
    a. メソッド内で、まずメッセージがボット自身からのものであるかを確認し、そうであれば無視します。
    b. それ以外の場合は、\`$bot\`で始まるメッセージにのみ反応することから始めます。メッセージがこれで始まる場合、同じチャンネルに\`I got your message!\`と応答します。
4. 最後に、スクリプトの最後に、discordクライアントを実行して、チャンネルでイベントのリッスンを開始するようにします。

\`\`\`python
import discord

discord_client = discord.Bot()
discord_token = “xxxxxxxxxxxx”
 
@discord_client.event
async def on_message(message):
    """Listen and react to messages."""
    # Check if the message is from the bot itself
    if message.author == discord_client.user:
        return

    msg = message.content
    if msg.startswith("$bot") or isinstance(message.channel, discord.DMChannel):
        await message.channel.send(“I got your message!”)

discord_client.run(discord_token)
\`\`\`
author: SeaHealth Editorial Team
description: 日本語ユーザー向けに、Discordでコミュニティを作成し、Botを自動化する方法とSEOのポイントを解説します。
lang: ja
metatitle: DiscordコミュニティとBotの作り方
published: 2024-07-01
slug: 16-how-to-create-a-discord-community-and-bot
title: DiscordコミュニティとBotの作り方
---


# DiscordコミュニティとBotの作り方

Discordは日本でも人気のコミュニティ運営プラットフォームです。ここではサーバーの作成からBotの導入まで、効率的な運用方法を紹介します。

## ステップ1：Discordサーバーを作成

1. Discordに登録し、ログインします。
2. 左側の「+」アイコンをクリックして新しいサーバーを作成します。
3. 「自分用サーバーを作成」を選び、名前と地域を設定します。

## ステップ2：メンバーを招待

- サーバー名をクリックし、「メンバーを招待」を選択します。
- 招待リンクをコピーして友人やグループに共有します。

## ステップ3：Botの自動化設定

1. Discord Developer Portalで新しいアプリケーションを作成します。
2. Botを追加し、トークンを取得します。
3. Node.jsまたはPython（推奨：discord.js）でBotを開発します。
4. Botをサーバーにホスティングし、24時間稼働させます。

## 自動化の例

- ウェルカムメッセージ
- キーワードによる自動返信
- 管理者コマンド
- 統計・レポート

## SEOのポイント

- タイトルに「Discord」「コミュニティ」「Bot」などのキーワードを含める
- セクションごとに分かりやすく構成する
- 日本語ユーザーのよくある質問に答える

---

*このガイドは日本語ユーザーがDiscordで活発なコミュニティと自動化管理を実現するためのものです。*
`;export{n as default};

const e=`---
title: "SeaVoice STT/TTS Discord Bot: バックエンドと安定性の改善"
metatitle: "SeaVoice STT/TTS Discord Bot: バックエンドと安定性の改善"
date: 2022-12-13 11:58:34-08:00
modified_date: 2025-07-28T16:56:53Z
draft: false
author: Sydney Burgess, Kim Dodds, Drake Farmer, Jack Harvison, Dylan Strong, Cody Vernon
description: "最新リリースにより、SeaVoice Discord Botは、ボットの安定性と将来の開発を改善する大規模なバックエンド改善を開始します。"
weight: 1
tags:
  - SeaVoice
  - Discord
image: images/blog/27-discord-backend-improvements/seavoice-discord-stt-tts-bot-backend-improvements.jpg
canonicalURL: /blog/seavoice-discord-backend-improvements/
url: /blog/seavoice-discord-backend-improvements/
---


*SeaVoice Discord Botは、Discordのボイスチャンネルで音声を文字起こしするための最良の選択肢の1つとして人気を集めています。最新リリースでは、ボットの安定性を向上させ、将来の開発を支援する大規模なバックエンド改善を開始します。*

# SeaVoiceは覚えている：データベースがオンラインに！

皆さん、こんにちは。最近、SeaVoice Discord Botの舞台裏でいくつかの作業を行ってきましたので、共有したいと思います！

以前のブログ投稿でご覧いただいたように、新しい通話録音や文字起こしなど、SeaVoice Botに多くの機能を追加しました。これらの開発と並行して、SeaVoice Discord Botには、コマンドからエラーログまで、これまでの行動を記憶する機能が与えられました。これで、ボットがあなたに話しかけたり、通話を録音するために使用したりすると、そのすべての情報が整理された方法で保存されます。

## これがユーザーにとって何を意味するか
さて、これがあなたにとって何を意味するのか、疑問に思われるかもしれません。

まず、これらのバックエンドの改善がなければ、新しい文字起こしとオーディオダウンロード機能は実現できませんでした！また、発生した不幸なクラッシュを自動的に保存できるようになったため、開発チームはあなたが気づく前にこれらの問題を修正し始めることができます。さらに、誰かがシステムにデータを保存したくないと判断した場合、この新しい組織化により、サーバー、チャンネル、ユーザー、日付などによってデータをすばやく見つけ、取得、および/または削除することができます。

さらに、これにより、統計追跡、自動モデレーションなどの新機能への扉が開かれます。モデレーターの皆様、サーバーのルールが守られていることを確認したり、サーバーでボットがどれくらいの頻度で使用されているかを確認したいですか？もしかしたら、先週の面白い会話を引っ張り出したいですか？データベースフレームワークがしっかりと確立され、本番ボットで使用されるようになったことで、幅広い新機能がより簡単に利用できるようになりました。

## データプライバシー

当然のことながら、ユーザーデータの保存について議論する際には、データプライバシーとセキュリティの問題が常に発生します。ここでは、データの取り扱いに関するいくつかの重要なポイントを説明します。
- すべてのユーザーデータは安全なリモートサーバーに保存され、Seasalt.aiの選ばれた少数の従業員のみがアクセスできます。
- SeaVoiceは、ユーザーがSeaVoiceボットとやり取りする際にDiscordから提供されたデータのみを記録します。これには以下が含まれます。
    - サーバー、チャンネル、ユーザー名、ID
    - \`/speak\` コマンドに入力されたテキスト
    - ボットが \`/recognize\` コマンドを実行中にボイスチャンネルで話された音声
- このデータは、Seasalt.aiがサービスを改善するためにのみ使用されます。
- お客様は、いつでもデータの全部または一部の削除を要求できます。

詳細については、[Seasalt.aiプライバシーポリシー](https://seasalt.ai/privacy/)をご参照ください。

## 将来の方向性

このアップデートの大部分は目立たないでしょうが、私たちにとっては難しい部分は終わり、今ではSeaVoice Discord Botを想像以上にカスタマイズして使用できるプロジェクトに取り組み始めることができます。
今後の機能の1つは、カスタマイズ可能なサーバーおよび/またはユーザー設定です。
データベースが導入されたことで、将来的には、ボイスチャットが録音されていることを通知するかどうか、通話の文字起こしへのダウンロードリンクを誰が受け取るか、または録音をオプトアウトしたい人が誰かなど、設定を保存できるようになります。

データを保存できるようになった今、追加してほしいアイデアはありますか？[公式SeaVoice Discordサーバー](https://discord.gg/dfAYfwBQ)までお気軽にご提案ください！

<center>
<iframe src="https://discordapp.com/widget?id=919037515514654721&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
</center>

## 試してみてください！

まだSeaVoice Botの最新リリースを試していない方は、ぜひ試してみてください！[SeaVoice Discord Bot](https://discord.com/oauth2/authorize?client_id=1001955060210749492&scope=bot)をあなたのサーバーに招待してください。
また、[SeaVoice Botのドキュメント](https://wiki.seasalt.ai/seavoice/discord/discord-bot/)も読んで、コミュニティのニーズに最適な方法でボットを使用する方法を確認してください。

今後のエキサイティングなアップデートにご期待ください！

ありがとうございます。

SeaVoice Botチーム。
`;export{e as default};

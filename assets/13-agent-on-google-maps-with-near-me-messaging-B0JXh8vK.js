const n=`---
title: "Google マップでバーチャルエージェントを起動し、ニアミーメッセージングを活用する"
metatitle: "Google マップでバーチャルエージェントを起動し、ニアミーメッセージングを活用する"
date: 2022-04-19 15:27:21-07:00
modified_date: 2025-07-29 17:35:15+00:00
draft: false
author: Ruli Setiawati
description: "ニアミーメッセージングでGoogleビジネスメッセージにバーチャルエージェントを起動する。"
weight: 1
tags:
  - NearMe
image: images/blog/13-launch-your-virtual-agent-on-Google-Maps-with-Near-Me-Messaging/thumbnail.png
canonicalURL: /blog/virtual-agent-on-Google-Maps-with-near-me-messaging/
url: /blog/virtual-agent-on-Google-Maps-with-near-me-messaging/
---

以前、[ニアミーメッセージング](https://seasalt.ai/blog/12-near-me-messaging-google-business-messages/)とその利点についてご紹介しました。ニアミーメッセージングは、Googleビジネスメッセージのバーチャルエージェントを実装しており、ビジネスのGoogleマッププロフィールのチャットボタンから直接利用できます。ニアミーメッセージングのバーチャルエージェントは、人間のような応答を提供する最先端の自然言語理解によって駆動されています。ニアミーメッセージングが類似のサービスと異なる点は、5分間のセットアップ時間、セルフサービスによるカスタマイズ、そして組み込みのライブチャットサポートです。

ニアミーメッセージングの利点には以下が含まれます。
- 優れた顧客サービスを提供する時間と人員の節約
- セルフサービスプラットフォームを通じてエージェントをカスタマイズ
- ニアミーアナリティクスを通じて顧客インサイトを獲得
- 会話履歴を通じて顧客のニーズを理解
- ライブエージェント機能で顧客と直接チャット

現在、ニアミーメッセージングのベータテスターを募集しています。ベータテスターの方には、期間限定で、契約不要で、当社の費用でサービスを提供しています。バーチャルエージェントを試して、あなたのビジネスに合っているかどうかを確認するこの機会をお見逃しなく。始めるには、ニアミーメッセージングでバーチャルエージェントを起動する方法に関するこのステップバイステップガイドに従ってください！


## ニアミーメッセージングでバーチャルエージェントを起動するためのステップバイステップガイド

### ステップ1. ニアミーメッセージングのウェブサイトにアクセスします（更新：製品はオムニチャネルチャットボットビルダーにピボットしました。現在は[SeaChat](https://chat.seasalt.ai/?utm_source=blog)と呼ばれています！）。

ニアミーメッセージングのウェブサイト（更新：製品はオムニチャネルチャットボットビルダーにピボットしました。現在は[SeaChat](https://chat.seasalt.ai/?utm_source=blog)と呼ばれています！）にアクセスし、*「サインイン」*ボタンをクリックします。Googleビジネスプロフィールで使用しているアカウントでサインインしたら、利用可能なすべてのチェックボックスをオンにし、Seasalt AIにバーチャルエージェントを起動する許可を与えていることを確認してください。Seasalt.aiは[Googleの公式パートナー](https://developers.google.com/business-communications/business-messages/partners)ですので、これらの許可を責任を持って使用することをご安心ください。**これらの許可は2つの機能のために使用しています。1つ目は、バーチャルエージェントが正確な応答を提供できるように、Googleビジネスプロフィールから情報にアクセスするため、2つ目は、お客様に代わってエージェントをビジネスのGoogleマップページに起動できるようにするためです。**

これらの許可を使用して、ビジネスプロフィールを編集または削除することはありません。Googleは*「表示」*、*「編集」*、*「削除」*の個別の許可を提供していないため、すべてに許可を与える必要があります。*「表示」*許可のみを使用します。

<center>
<img src="/images/blog/13-launch-your-virtual-agent-on-Google-Maps-with-Near-Me-Messaging/2-sign-in.png" alt="Googleビジネスプロフィールで使用しているアカウントでサインインする"/>

*「Googleでサインイン」をクリックし、Googleビジネスプロフィールアカウントでサインインします。*
</center>

<center>
<img src="/images/blog/13-launch-your-virtual-agent-on-Google-Maps-with-Near-Me-Messaging/3-permissions.png"/>

*Seasalt AIに許可を与えることで、お客様に代わってブランドのバーチャルエージェントをGoogleマップページに公開することができます。*
</center>


### ステップ2. バーチャルエージェントを構築します。

サインインして許可を与えると、Googleビジネスプロフィールアカウントで管理しているすべてのビジネスが表示されます。ビジネスが表示されない場合は、正しいGoogleビジネスプロフィールアカウントでログインしていることを確認してください。*「同期」*ボタンをクリックしてビジネスを同期することもできます。各ビジネスロケーションごとにバーチャルエージェントを個別に設定する必要があることに注意してください。バーチャルエージェントを設定するには、いずれかのビジネスの*「エージェントを追加」*ボタンをクリックします。

<center>
<img src="/images/blog/13-launch-your-virtual-agent-on-Google-Maps-with-Near-Me-Messaging/4-business-locations.png"/>

*Googleビジネスプロフィールに関連付けられたビジネス。*
</center>

ニアミーメッセージングは、Googleビジネスプロフィールから情報を同期することで、バーチャルエージェントの構築を開始します。バーチャルエージェントの構築には5分もかからず、各ステップが完了するにつれて進捗状況を確認できます。


<center>
<img src="/images/blog/13-launch-your-virtual-agent-on-Google-Maps-with-Near-Me-Messaging/5-virtual-agent-building.png"/>

*バーチャルエージェントの進捗状況を確認できます。*
</center>

### ステップ3. バーチャルエージェントをプライベートテストします。

エージェントの構築が完了すると、画面にQRコードが表示されます。携帯電話でQRコードをスキャンして、バーチャルエージェントをテストしてください。これはまだバーチャルエージェントのプライベートバージョンであり、Googleマッププロフィールにはまだ表示されません。このバーチャルエージェントは、Googleビジネスプロフィールからの情報とGoogleマップからの顧客レビューのみを使用して応答を生成する初期バージョンであることに注意してください。テストしてみて、バーチャルエージェントに改善が必要だと感じた場合は、カスタムFAQを作成したり、ウェブサイトから情報を追加したり、Googleレビューをキュレーションしたりすることで、応答を大幅に改善できます。カスタマイズに関する詳細なウォークスルーについては、[バーチャルエージェントを改善するためのガイド](https://wiki.seasalt.ai/nearme/maintain_agent/improve_agent/)をご覧ください。

<center>
<img src="/images/blog/13-launch-your-virtual-agent-on-Google-Maps-with-Near-Me-Messaging/6-agent-built.png" alt=""/>

*エージェントの構築が完了すると、プライベートバーチャルエージェントのQRコードが表示されます。*
</center>

### ステップ4. バーチャルエージェントを公開します。


バーチャルエージェントをテストし、応答に満足したら、バーチャルエージェントを公開できます。バーチャルエージェントを公開すると、Googleマップで顧客がエージェントとチャットできるようになります。このブログでは、基本的なプロセスを説明しますが、より詳細な情報については、[Googleマッププロフィールでバーチャルエージェントを起動する方法](https://wiki.seasalt.ai/nearme/setup/03-publish_agent/)に関するドキュメントとビデオを参照してください。

まず、「バーチャルエージェント」タブに移動し、*エージェント名*と*エージェントアバター画像*が希望どおりに表示されることを確認してください。*エージェント名*と*アバター画像*がGoogleによって起動プロセスの一部として検証されると、**ニアミーサイト経由でそれらを変更することはできません**。

エージェントの詳細を確認したら、「公開起動」タブに移動します。*「確認」*ボタンをクリックして、Googleでブランドと場所を確認します。

<center>
<img src="/images/blog/13-launch-your-virtual-agent-on-Google-Maps-with-Near-Me-Messaging/7-verification.png" alt="Googleでブランドと場所を確認する"/>

*「確認」ボタンをクリックすると、Googleでブランドと場所が確認されます。*
</center>

ブランドと場所が確認されたら、*「起動」*ボタンをクリックしてバーチャルエージェントを公開します。

<center>
<img src="/images/blog/13-launch-your-virtual-agent-on-Google-Maps-with-Near-Me-Messaging/8-launch.png" alt="Googleマッププロフィールのチャットボタンでバーチャルエージェントを起動する"/>

*「起動」ボタンをクリックすると、Googleマッププロフィールのチャットボタンでバーチャルエージェントが起動します。*
</center>

チャットボタンがGoogleマップに表示されるまで最大4時間かかる場合があります。チャットボタンが表示されると、バーチャルエージェントは顧客がチャットできるようになります。公開後も、バーチャルエージェントを継続的に変更し、さらにカスタマイズできます。変更を行う際は、「プライベートテスト」タブに移動して、公開する前にテストできます。変更に満足したら、「公開起動」ページから*「再起動」*をクリックして、バーチャルエージェントの公開バージョンを即座に更新できます。

<center>
<img src="/images/blog/13-launch-your-virtual-agent-on-Google-Maps-with-Near-Me-Messaging/9-relaunch.png" alt="ニアミーメッセージングは、GoogleビジネスメッセージをGoogleマッププロフィールのチャットボタンと統合します。"/>

*バーチャルエージェントの変更/改善が完了したら、「再起動」ボタンをクリックできます。*
</center>

[デモを予約](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting)してください。喜んでお手伝いさせていただきます！

更新：製品はオムニチャネルチャットボットビルダーにピボットしました。現在は[SeaChat](https://chat.seasalt.ai/?utm_source=blog)と呼ばれています！


`;export{n as default};

---
title: "SeaX オムニチャネルコミュニケーションで顧客をあらゆるチャネルから一箇所に集める"
metatitle: "SeaX オムニチャネルコミュニケーションで顧客との接点を統一"
date: 2022-07-15T13:56:54-07:00
author: Kim Dodds 
draft: false
image: images/blog/19-seax-omnichannel-communication/0-thumbnail.png
description: "このブログでは、SeaXのオムニチャネルコミュニケーションの1つに焦点を当て、あらゆるチャネルからのユーザーメッセージをSeaXプラットフォームに表示する方法を説明します。"
weight: 1
tags: ["SeaX"]
canonicalURL: "/blog/seax-omnichannel-communication/"
url: "/blog/seax-omnichannel-communication/"
---

*前回のブログ記事「[SeaXへようこそ、コラボレーティブなクラウドコンタクトセンター](https://seasalt.ai/blog/18-seax-collaborative-cloud-contact-center-introduction/)」では、当社のコラボレーティブなクラウドコミュニケーションコンタクトセンターソリューションであるSeaXをご紹介しました。最初のブログ記事では、SeaXの基本的な機能とより高度な機能の包括的な概要を説明しましたが、今後の記事では、SeaXを際立たせる個々の機能のいくつかについて深く掘り下げていきます。この記事では、SeaXのオムニチャネルサポートを詳しく見て、さまざまなチャネルからの通話やメッセージがSeaXプラットフォームにどのように表示されるかを確認します。*

# 目次
- [オムニチャネルコミュニケーションとは？](#what-is-omnichannel-communication)
- [メッセージのライフサイクル](#message-lifecycle)
    - [チャネル](#channel)
    - [メッセージルーティング](#message-routing)
    - [TaskRouter](#taskrouter)
    - [SeaXプラットフォーム](#seax-platform)
- [サポートされているチャネル](#supported-channels)

# オムニチャネルコミュニケーションとは？

まず、「オムニチャネル」とは具体的に何を意味するのでしょうか？分解すると、「オムニ」は「すべて」を意味する接頭辞であり、「チャネル」は顧客とやり取りできるさまざまなプラットフォームです。つまり、簡単に言えば、「オムニチャネルコミュニケーション」とは、利用可能なあらゆるチャネルを通じてコミュニケーションする能力を意味します。さらに、オムニチャネルコミュニケーションとは、チャネル間のエクスペリエンスがシームレスであることを意味します。エージェント側では、すべてのチャネルからのコミュニケーションが1つの統合されたインターフェースで表示されます。顧客にとっては、インタラクションデータがチャネル間で永続化されます。

従来のコールセンターは通常、電話のみをサポートしています。複数のチャネル（電子メール、ウェブチャット、電話など）を介して顧客と接続するより高度なコンタクトセンターは、マルチチャネルコンタクトセンターを持っています。しかし、コンタクトセンターが複数のチャネルを利用しているからといって、そのエクスペリエンスがシームレスであるとは限りません。マルチチャネルコンタクトセンターでは、異なるチャネルが個別のプラットフォームを介してアクセスされる場合があり、または顧客データがチャネル間でリンクされていない場合があります。対照的に、オムニチャネルコンタクトセンターでは、エージェントは顧客との会話がどこへ行っても追跡でき、1つのチャネルに閉じ込められたり、数十のプラットフォームに分散したりすることはありません。

<center>
<img src="/images/blog/19-seax-omnichannel-communication/1-contact-center-comparison.png" alt="機能比較：従来のコールセンター vs コンタクトセンター；マルチチャネル vs オムニチャネル。"/>

*機能比較：従来のコールセンター vs コンタクトセンター；マルチチャネル vs オムニチャネル。*
</center>

SeaXは、テキスト、電話、ウェブチャット、Facebookなど、事実上あらゆるチャネルと統合する機能を備えています。すべてのメッセージと通話は1つの統合されたプラットフォームに表示され、すべてのチャネルからのユーザーデータはすぐに利用できます。

デモを直接ご覧になりたい場合は、SeaXのオムニチャネルコミュニケーションを実演する短いビデオをご覧ください。このブログの残りの部分では、さまざまなチャネルからSeaXのエージェントにメッセージや通話がどのようにルーティングされるかを説明します。また、すぐに利用できるサポートされているチャネルを共有し、SeaXを拡張して新しいチャネルをカバーする方法についても説明します。

<iframe width="85%" height="450px" src="https://www.youtube.com/embed/usb-RK7sHlA" title="YouTubeビデオプレーヤー" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

# メッセージのライフサイクル

SeaXは、Twilioのクラウドコミュニケーションプラットフォームを利用するクラウドベースのコンタクトセンターである[Twilio Flex](https://www.twilio.com/flex)の上に構築されています。Twilioは、通信インフラ、メッセージとタスクのルーティング、基本的なコンタクトセンターUIなど、SeaXの基本的な構成要素を提供します。それでは、受信したユーザーメッセージのライフサイクルを追跡し、SeaXが基本的なTwilioアーキテクチャとカスタムコンポーネントを組み合わせて、メッセージをSeaXプラットフォーム上のライブエージェントにルーティングする方法を見てみましょう。

## チャネル

<center>
<img src="/images/blog/19-seax-omnichannel-communication/2-example-message.jpg" alt="ユーザーがGoogle Business Messages経由でビジネスにメッセージを送信します。", style="width:50%"/>

*Google Business Messages経由でビジネスにメッセージを送信する。*
</center>

メッセージの旅は、ユーザーがメッセージを作成し、サポートされているプラットフォームで送信することから始まります。上記の例は、Google Business MessagesでSeasalt.aiチャットボットにメッセージを送信している人を示しています。Google Business MessagesはTwilioではデフォルトでサポートされていないため、Seasalt.aiが開発したカスタムチャネルコネクタを利用して、GoogleプラットフォームをTwilioとSeaXに接続しています。

メッセージが送信されると、カスタムコネクタによってTwilioメッセージングAPIに配信されます。この時点で、Twilioはユーザーの新しい会話コンテキストを作成し、メッセージをルーティングする準備をします。

## メッセージルーティング

<center>
<img src="/images/blog/19-seax-omnichannel-communication/3-studio-flow.png" alt="メッセージをチャットボットまたはライブエージェントにルーティングするシンプルなStudio Flow。"/>

*メッセージをチャットボットまたはライブエージェントにルーティングするシンプルなStudio Flow。*
</center>

Twilioがメッセージを受信すると、適切な場所にルーティングする必要があります。この目的のために、[Twilio Studio Flows](https://www.twilio.com/studio)を使用して、自動応答を提供するか、メッセージをチャットボットに転送するか、ユーザーをライブエージェントに接続するか、またはその他のアクションを実行するかを決定します。

上記の簡単な例では、すべての着信メッセージはチャットボットに転送されますが、「ライブエージェント」という単語が含まれている場合は、ユーザーはSeaXプラットフォーム上のライブエージェントに転送されます。

## TaskRouter

<center>
<img src="/images/blog/19-seax-omnichannel-communication/4-taskrouter.png" alt="TaskRouterアーキテクチャの図。"/>

*TaskRouterアーキテクチャの図。[出典](https://twilio-cms-prod.s3.amazonaws.com/images/taskrouter-diagram.width-800.png)。*
</center>

メッセージがSeaXに転送されると、次のステップは、どのエージェントがそれを受信するのかを決定することです。[TwilioのTaskRouter](https://www.twilio.com/taskrouter)は、メッセージや電話などのタスクを、それらを最も適切に処理できるSeaXのエージェントに分配します。SeaXの各エージェントには、話せる言語、所属部署、VIP顧客を扱うべきかどうかなどのスキルを割り当てることができます。TaskRouterは、ユーザーとメッセージに関する既知の情報を確認し、問題に対処するのに最も適切なワーカーを選択します。前のステップのStudio Flowは、追加情報（優先言語など）を取得するためにカスタマイズでき、顧客情報は会話やチャネル間で永続化できるため、シームレスなエクスペリエンスが保証されます。

## SeaXプラットフォーム

<center>
<img src="/images/blog/19-seax-omnichannel-communication/5-seax-incoming-messages.png" alt="SeaXプラットフォームに表示される着信通話とメッセージ。", style="width:50%"/>

*SeaXプラットフォームに表示される着信通話とメッセージ。*
</center>

最後に、受信メッセージはSeaXプラットフォーム上の適切なエージェントに表示されます。エージェントは、複数のチャネルからの複数のタスクを同時に処理できます。上記の画像では、エージェントは着信、Facebookメッセージ、ウェブチャットメッセージを受信しています。エージェントはタスクを受け入れるか、拒否して次の利用可能なエージェントに渡すことができます。

# サポートされているチャネル

これで、オムニチャネルコミュニケーションとは何か、そしてそれがユーザーとエージェントのエクスペリエンスをどのように向上させるかがより明確になったことを願います。最後の質問は、実際にどのようなチャネルがすぐに利用できるのかということです。

<center>
<img src="/images/blog/19-seax-omnichannel-communication/6-channel-comparison.png" alt="従来のコールセンター、基本的なTwilio Flex、およびSeaX間のサポートされているチャネルの比較。"/>

*従来のコールセンター、基本的なTwilio Flex、およびSeaX間のサポートされているチャネルの比較。*
</center>

前述のとおり、従来のコールセンターは通常、電話のみをサポートしています。企業はソーシャルメディアや電子メールを通じて顧客とやり取りすることもありますが、これらのメッセージは統合されたプラットフォームには統合されていません。

一方、Twilio Flexは、素晴らしいオムニチャネルコンタクトセンターの基盤を築きます。しかし、すぐに利用できるチャネルはほとんどありません。電話とテキストメッセージに加えて、Facebook、WhatsApp、電子メールのベータ版サポートも提供しています。

SeaXはFlexの上に構築されており、Google Business Messages、Discord、Line、Instagramなど、最も一般的に要求されるチャネルの組み込みサポートを追加しています。さらに、Seasalt.aiは常に顧客と協力して、新しいチャネルをSeaXのラインナップに導入しています。SeaXは高度にカスタマイズ可能で簡単に拡張可能であり、これは、お客様の会社と協力して、お客様が最も望むチャネルを統合できることを意味します。

SeaXクラウドコンタクトセンターがオムニチャネルコミュニケーションを利用して、シームレスな顧客とエージェントのエクスペリエンスを提供する方法についてお読みいただきありがとうございます。次回のブログ記事では、「分散型コンタクトセンター」とは何かを探求しますので、ご期待ください。すぐに詳細を知りたい場合は、[デモ予約フォーム](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting)にご記入ください。SeaXプラットフォームを直接ご覧いただけます。

const e=`---
title: "ユーザーがウェブチャットを終了しました：Near Me Messaging を使用してメッセージをプッシュしましょう！"
metatitle: "ユーザーがウェブチャットを終了しました：Near Me Messaging で連絡を取りましょう！"
date: 2022-12-25 12:48:52-08:00
modified_date: 2025-07-28 16:03:25.123456
draft: false
author: Xuchen Yao
description: "Near Me Messaging はウェブチャットの1つの問題を解決します：ユーザーが会話を終了した*後でも*、彼らと連絡を取り直すことができます。"
weight: 1
tags:
  - NearMe
image: images/blog/28-use-near-me-messaging-to-recover-lost-webchat/near-me-messaging-google-business-messages-recover-webchat.png
canonicalURL: /blog/use-near-me-messaging-to-recover/
url: /blog/use-near-me-messaging-to-recover/
---

2022年のクリスマスの朝、私はヘンリーというユーザーからのメッセージで目を覚ましました。私がメッセージにたどり着いたときには、ヘンリーはすでに去っていました。私が得たのは、彼がウェブチャットで送ったメッセージと彼の名前だけでした。

（後に、ヘンリーがナイジェリアを拠点としており、まったく異なるタイムゾーンにいることが判明しました。彼とビデオチャットをしたとき、シアトルの凍えるような寒さとは対照的に、彼の顔に汗が流れているのが文字通り見えました。）

幸いなことに、Seasalt.ai のウェブサイトのウェブチャットは Near Me Messaging を介しています（更新：その後、製品をオムニチャネルチャットボットビルダーに転換しました。現在は [SeaChat](https://chat.seasalt.ai/?utm_source=blog) と呼ばれています！）。バックエンドは Google Business Messages を利用しており、ユーザーが最初に連絡してきた後30日以内にユーザーの携帯電話にメッセージをプッシュする便利な機能を提供します。対照的に、Facebook は、ユーザーが Messenger ボットとの会話を開始した後、ユーザーに連絡するのに [24時間のウィンドウ](https://developers.facebook.com/docs/messenger-platform/policy/policy-overview/) しか与えません。

技術的に好奇心旺盛なユーザーのために説明すると、これはユーザーの携帯電話にインストールされている Google Play サービスフレームワークによって有効になります。したがって、彼らが携帯電話に Google を持っている限り、いつでも彼らに連絡できます。

したがって、結論：Near Me Messaging は、失われた見込み客を捕らえるための優れた機能を提供します。

回復した見込み客と、別の continent での楽しいチャットよりも、ビジネスにとってより良いクリスマスプレゼントは何でしょうか？
`;export{e as default};

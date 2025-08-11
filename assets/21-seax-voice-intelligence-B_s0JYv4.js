const e=`---
title: "SeaX 音声インテリジェンスでコンタクトセンターに独自の音声を与える"
metatitle: "SeaX 音声インテリジェンスでコンタクトセンターを話させる"
date: 2022-08-02 17:24:00-07:00
modified_date: 2025-07-29 20:45:17+00:00
draft: false
author: Kim Dodds, Cody Kim, Xuchen Yao, Guoguo Chen
description: "このブログでは、Seasalt.aiの社内テキスト読み上げおよび音声認識エンジンがSeaXプラットフォームのさまざまな側面をどのように強化できるかを示します。"
weight: 1
tags:
  - SeaX
image: /images/blog/21-seax-voice-intelligence/thumbnail.png
canonicalURL: /blog/seax-voice-intelligence/
url: /blog/seax-voice-intelligence/
---

*これまでの[SeaXブログシリーズ](https://seasalt.ai/tags/seax/)では、Seasalt.aiの主力製品であるSeaXの概要を広く説明してきました。また、SeaXを従来のコールセンターと区別する2つの主要な機能についても議論しました。1つ目は、SeaXがオムニチャネルであること、つまり、どのチャネルでも顧客とより簡単にやり取りできること、2つ目は、このプラットフォームが分散型コンタクトセンターであること、これにより、世界中の顧客からのメッセージや通話を、さまざまな場所にある分散型エージェントにシームレスにルーティングできることです。*

*SeaXプラットフォームの基本を説明したので、次に、SeaXを他の分散型オムニチャネルコンタクトセンターと区別する高度なAIおよび自動化機能について説明します。このブログでは、Seasalt.aiの社内テキスト読み上げおよび音声認識エンジンがSeaXプラットフォームのさまざまな側面をどのように強化できるかを示します。*

# 目次
- [音声インテリジェンスの紹介](#into-to-voice-intelligence)
- [Seasalt.aiが際立つ理由](#what-sets-seasaltai-apart)
    - [音声認識](#speech-to-text)
    - [テキスト読み上げ](#text-to-speech)
- [SeaXにおけるTTSとSTT](#tts-and-stt-in-seax)
    - [音声IVR](#voice-ivr)
    - [利用不可メッセージ](#unavailable-message)
    - [ライブトランスクリプション](#live-transcription)
    - [その他...](#and-more)

# 音声インテリジェンスの紹介

音声インテリジェンスとは、人工知能を使用して音声ベースのデータを分析し、洞察を引き出すことです。過去10年間で音声技術は目覚ましい発展を遂げましたが、企業での利用はまだ限られています。企業はテラバイト単位の音声データを蓄積し続けていますが、ほとんどの場合、その潜在能力を最大限に活用できていません。

その理由の1つは、音声データが基本的な統計データやプレーンテキストデータなどの他の形式のデータよりも処理が難しいことです。音声データはさまざまな点でユニークです。
1. 言語に依存し、方言やアクセントがあるため、情報の100%を捉えるのは難しい
2. その品質は、チャネル（電話 vs. VoIP、モノラル vs. ステレオ）、サンプリングレート（8KHz vs. 16KHz）、表現精度（8ビット、16ビット、32ビット）、および背景ノイズなどの環境音によって異なる
3. 解釈が難しい：音声の感情から話者識別、意味のセマンティクスまで

しかし、適切なツールで適切に対処すれば、音声インテリジェンスはそれを使用する企業に大きな利益をもたらすことができます。とりわけ、音声データを適切に管理できることで、パーソナライズされた音声認識トランスクリプションを使用する能力が解き放たれ、会話を検索可能、インデックス可能、洞察に富んだものにすることができ、さらに下流のNLP処理を可能にします。より多くのデータが収集されるにつれて、これらのサービスの改善も可能になります。たとえば、トランスクリプションの精度向上、ユースケースのカバー範囲の拡大、新しい言語や方言に適応するためのカスタマイズ可能な音声および言語モデルの提供などです。

# Seasalt.aiが際立つ理由

Seasalt.aiは、企業顧客にクラウド通信AI技術と製品を提供しています。
私たちは、企業コンタクトセンターにおけるテキストメッセージと音声通話のための社内音声および言語技術を開発しました。
当社の自然言語エンジンは、ビルマ語、中国語、英語、フィリピン語、ドイツ語、インドネシア語、クメール語、ラオス語、マレー語、スペイン語、タミル語、タイ語、ベトナム語など、
高リソース言語と低リソース言語の両方を幅広くサポートしています。
Seasalt.aiはベンチャー資金を調達しており、深層音声認識、ニューラル音声合成、自然言語対話の分野で世界をリードする専門家グループによって運営されています。

音声認識のデモビデオをご覧ください。
<iframe width="85%" height="450px" src="https://www.youtube.com/embed/Log8usX8ViE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

## 音声認識

<center>
<img src="/images/blog/21-seax-voice-intelligence/STT.png" alt="音声認識グラフィック。"/>
</center>

当社の音声認識エンジンは、音声オーディオを入力として受け取り、リアルタイムでトランスクリプションを生成します。オーディオから始めて、音響的特徴を抽出し、これらの特徴を音素に変換し、次にこれらの音素をターゲット言語の正書法にマッピングします。現在のシステムは、英語と中国語を含むいくつかの言語をトランスクライブすることができ、さらに多くの言語が常に追加されています。

SeasaltのSTTエンジンがどのようにあらゆるドメインにカスタマイズできるかを示す音声認識カスタマイズビデオをご覧ください。
<iframe width="85%" height="450px" src="https://www.youtube.com/embed/1YEU6mexzWQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

## テキスト読み上げ

<center>
<img src="/images/blog/21-seax-voice-intelligence/TTS.png" alt="テキスト読み上げグラフィック。"/>
</center>

テキスト読み上げとは、テキストのみから自然なイントネーションとリズムを備えたリアルな人間の音声を合成するプロセスです。当社のモデルは、通常のテキストを受け取り、このテキストを音素に変換し、次に音素をオーディオに変換します。その際、各タイムステップで適切なピッチ、持続時間、音量を予測し、可能な限りリアルなTTS体験を提供します。最終結果が完璧でない場合でも、単語の発音、一時停止、強調など、合成されたオーディオを調整する機能を提供します。

SeasaltのTTSエンジンの出力がどのようにカスタマイズされてリアルな合成音声を提供できるかを示すテキスト読み上げカスタマイズデモビデオをご覧ください。

<iframe width="85%" height="450px" src="https://www.youtube.com/embed/GJCOhTtImp8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

当社のウェブサイトの[TTSページ](https://suite.seasalt.ai/tts)で、トム・ハンクス、デビッド・アッテンボロー、リース・ウィザースプーンなど、合成音声の例を聞くこともできます。

# SeaXにおけるTTSとSTT

## 音声IVR

<center>
<img src="/images/blog/21-seax-voice-intelligence/flow.png" alt="Seasalt.aiの音声認識エンジンを使用したリアルタイムトランスクリプションと通話ルーティングのための音声IVRフロー。"/>

*Seasalt.aiの音声認識エンジンを使用したリアルタイムトランスクリプションと通話ルーティングのための音声IVRフロー。*
</center>

音声インテリジェンスは、通話がSeaXプラットフォームに到達する前から、通話が正しい場所にルーティングされ、通話をエージェントに引き渡す前に重要な情報を収集することで、支援を開始できます。SeaXはTwilio Studioを使用して通話およびメッセージルーティングフローをカスタマイズします。しかし、当社の音声認識エンジンをIVRフローに統合して、顧客が自然言語を使用して通話をルーティングできるようにすることもできます（従来の「1を押して…」という体験の代わりに）。さらに、貴社がチャットボットを使用して顧客と対話することに関心がある場合、当社のテキスト読み上げエンジンを使用して、チャットボットに電話で顧客と話すための音声を与えることで、さらに一歩進めることができます。

## 利用不可メッセージ

<center>
<img src="/images/blog/21-seax-voice-intelligence/unavailable-message.png" alt="テキスト読み上げを使用したSeaXの利用不可メッセージ設定。"/>

*テキスト読み上げを使用したSeaXの利用不可メッセージ設定。*
</center>

当社のテキスト読み上げ技術は、高度にカスタマイズ可能な音声メッセージも可能にします。たとえば、これらは、顧客が通常の営業時間外に電話をかけてきた場合、または顧客が利用可能なエージェントを待っている間に保留にする必要がある場合にトリガーできます。

## ライブトランスクリプション

<center>
<img src="/images/blog/21-seax-voice-intelligence/live-transcription.jpg" alt="SeaXでエージェントに表示される分析を伴うライブ通話トランスクリプション。"/>

*SeaXでエージェントに表示される分析を伴うライブ通話トランスクリプション。*
</center>

顧客がエージェントと通話している場合、当社の音声認識エンジンは、エージェントの参照のために会話の正確なリアルタイムトランスクリプションを提供します。これにより、エージェントは会話の以前のポイントを参照したり、顧客が言ったことの理解を再確認したりできます。さらに、これらのトランスクリプションは、トピック抽出、アクション抽出、要約、会議分析などの下流アプリケーションにとって非常に役立ちます。

## その他...

上記は、SeaXが高度な音声インテリジェンスを統合して、待ち時間を短縮し、エージェントのパフォーマンスを向上させ、顧客とエージェントの両方に全体的にシームレスな体験を提供する方法のほんの一部です。SeaXプラットフォームに付属するより高度な機能については、AIナレッジベース、ケース管理、一括SMSを含む次のブログ投稿にご期待ください。個人的なデモを入手し、SeaXプラットフォームがお客様の特定のビジネスニーズにどのように対応できるかについて話し合うには、[デモ予約フォーム](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting)にご記入ください。
`;export{e as default};

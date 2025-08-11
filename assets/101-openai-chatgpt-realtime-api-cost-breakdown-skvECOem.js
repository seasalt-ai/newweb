const n=`---
title: "OpenAI vs. 人間 vs. 音声AI：コスト比較 (5/5)"
metatitle: "OpenAI Realtime API vs. 人間と音声AI：コストの内訳"
date: 2024-10-12 00:22:19-07:00
modified_date: 2025-07-26 16:48:39+00:00
draft: false
author: Xuchen Yao
description: "OpenAIのRealtime APIと人間の受付担当者、音声AIエージェントのコストを詳細に比較分析します。"
weight: 1
tags:
  - 自動応答サービス
  - 中小企業向けインバウンドコール
  - SeaChat
  - 音声AI
image: /images/blog/101-openai-chatgpt-realtime-api-cost-breakdown/101-openai-chatgpt-realtime-api-cost-breakdown.svg
canonicalURL: /blog/openai-chatgpt-realtime-api-cost-breakdown/
url: /blog/openai-chatgpt-realtime-api-cost-breakdown/
---


*これは、中小企業向けの顧客コミュニケーション戦略を探求する5つの記事シリーズで、応答サービスに焦点を当てています。*

<br/>

<center>
<img height="100%" width="80%" style="background-color: #ffffff" src="/images/blog/101-openai-chatgpt-realtime-api-cost-breakdown/series-diagram.svg"  alt="インバウンドシリーズ図">

</center>

1. [中小企業が応答サービスを必要とする理由](https://seasalt.ai/blog/96-why-small-businesses-need-answering-service/)：応答サービスの重要性と利点を発見してください。

2. [アウトソーシング vs. 社内ライブ受付](https://seasalt.ai/blog/97-live-receptionist-inhouse-outbound/)：ライブ受付とは何ですか？アウトソーシングすべきか、社内で雇用すべきか？

3. [自動電話応答システム（インタラクティブ音声応答IVR vs. 音声AIエージェント）](https://seasalt.ai/blog/98-inbound-answering-automated-system/)：自動応答サービスとは何ですか？インタラクティブ音声応答または音声AIエージェントを使用すべきですか？

4. [決定：私の小規模企業はライブ受付または自動応答サービスを使用すべきですか？](https://seasalt.ai/blog/99-inbound-answering-live-vs-automated/)：当社のシリーズから応答サービスについてすべて学びました。今こそ、あなたのビジネスに最適なサービスの種類を決定する時です。

5. （この記事）[OpenAI vs. 人間 vs. 音声AI：コスト比較](https://seasalt.ai/blog/101-openai-chatgpt-realtime-api-cost-breakdown/)：最新の音声AI技術に切り替えるべきか疑問に思っていますか？実際のコストを見てみましょう。

---

## TLDR:

1. OpenAIも人間も**高価**になる可能性があります：
   1. OpenAIのRealtime APIは、音声エージェント（AI）体験を約**1分あたり1ドル**で実現できます。
   2. オンデマンドの仮想受付（人間）も約**1分あたり1ドル**で価格設定されています。
2. しかし、注意点のある**バランスの取れた**選択肢もあります：
   1. 長期的に雇用された場合、英語が堪能な人間エージェントは**1時間あたり**5ドル（1分あたり0.08ドル）と低くなる可能性があります。
   2. スタートアップが提供する音声AIエージェントは、**1時間あたり**7.2ドル（1分あたり0.12ドル）と低くなる可能性があります。

*この記事の音声版を聴きたい場合は、こちらがビデオです：*

<iframe width="100%" height="400" src="https://www.youtube.com/embed/?v=DgX6F711ceA&list=PL8K7_LTqly46agqJW2quG5Vsylt5os1Al" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>


## ChatGPT-4oのリアルタイムAPIの実際のコスト

OpenAIは、2024年10月1日にChatGPT-4o用の[リアルタイムAPI](https://openai.com/index/introducing-the-realtime-api/)をリリースしました。これは、最初のオムニチャネル大規模言語モデルである[GPT-4o](https://openai.com/index/hello-gpt-4o/)のリリースから5か月後のことです。そのパフォーマンスは驚くべきものです。Chatgpt-4o-realtimeは人間のように聞こえ、人間のように応答し、ノイズや中断に対して堅牢です。

しかし、Chatgpt-4o-realtimeは手頃な価格ですか？

一見すると、OpenAIのリアルタイムAPIは、GPT-4o-miniの*テキスト*よりも約30倍高価に見えます（**5ドル対0.15ドル** / 1M入力トークン）。

<br/>

<center>
<div style="background-color: #ffffff;">
<img height="100%" width="100%" src="/images/blog/101-openai-chatgpt-realtime-api-cost-breakdown/October 2024 pricing for chatgpt-4o-mini.png"  alt="chatgpt-4o-miniの2024年10月の価格">
</div>

*chatgpt-4o-realtimeの2024年10月の価格*
</center>

<br/>

<center>
<div style="background-color: #ffffff;">
<img height="100%" width="100%" src="/images/blog/101-openai-chatgpt-realtime-api-cost-breakdown/October 2024 pricing for chatgpt-4o-realtime.png"  alt="chatgpt-4o-realtimeの2024年10月の価格">
</div>

*chatgpt-4o-miniの2024年10月の価格*
</center>


OpenAIは、音声入力に1分あたり約0.06ドル、音声出力に1分あたり0.24ドルかかると主張しています。これらを合計すると、1分あたり0.30ドルを超えることはないはずですよね？

私たちは4o-realtime APIの実際のテストを実施し、1分あたり約1ドルかかることがわかりました。


<br/>

<center>
<div style="background-color: #ffffff;">
<img height="100%" width="100%" src="/images/blog/101-openai-chatgpt-realtime-api-cost-breakdown/Screenshot of the cost for one test of the ChatGPT-4o Realtime API.png"  alt="ChatGPT-4oリアルタイムAPIの1回のテストのコストのスクリーンショット">
</div>

*ChatGPT-4oリアルタイムAPIの1回のテストのコストのスクリーンショット*
</center>


chatgpt-4o-realtime APIとの5分間の音声会話を行い、5.38ドルかかりました。5分間の音声会話には約142秒の文字起こしされた音声（音声入力と考えてください）が含まれており、残りはほとんど音声出力です。

私たちが行った別のテストでは、10分間の簡単な会話に約10ドルかかりました。

うわー、それは高いですね。実際、[Seasalt.ai独自の音声エージェントよりも約10倍高価です](https://chat.seasalt.ai/en-us#pricing?utm_source=blog/)。

一部の開発者がAPIをテストしているだけで、実際に何かをする音声AIエージェントをトレーニングするために意味のある努力をしようとしている場合、1日で簡単に数百ドルを費やすことができます！

## ChatGPT-4oのリアルタイムAPI vs. 人間エージェント – どちらがより手頃ですか？

したがって、ChatGPT-4oのリアルタイムAPIを使用して音声AIエージェントを構築した場合、1分あたり約1ドル、つまり**1時間あたり60ドル**かかります。

### 人間エージェントの費用はいくらですか？

フロントデスクの受付係など、社内で雇用する場合、最低賃金（連邦政府の7.25ドルからカリフォルニアの16ドル）から、おそらく1時間あたり20ドルから30ドルの間になる可能性があります。

外部の代理店を利用する場合、価格は異なる場合があります。一部は200分で月額349ドルから始まり、セットアップ料金が追加されます。Seasalt.aiはこれに関して詳細な調査を書いています：[ライブ受付の費用：社内 vs. アウトソーシング](https://seasalt.ai/blog/97-live-receptionist-inhouse-outbound/?utm_source=crossblog)。


<br/>

<center>
<img height="100%" width="100%" src="/images/blog/97-live-receptionist-inhouse-outsourced/vendor-summary.png"  alt="ライブ受付ベンダー概要">

*Seasalt.aiによるライブ受付ベンダー概要*
</center>

## ChatGPT-4oのリアルタイムAPI vs. その他の音声AIエージェント – 違いは何ですか？

ChatGPT-4oのリアルタイムAPIは、音声AI技術における重要な進歩を表しており、他の音声AIエージェントと比較していくつかの重要な違いを提供します：

- **応答性**：平均応答時間2〜3秒で、ほぼリアルタイムのインタラクションを提供します
- **堅牢性**：APIは会話中の割り込みとリダイレクトを可能にし、より自然な対話フローを可能にします
- **エンドツーエンド**：APIは、音声からテキスト（Azure、Deepgramなど）やテキストから音声（Azure、Eleven labs）など、異なるコンポーネントを結合する必要がありません。

しかし、ここでの注意点はコストです。ChatGPT-4oのリアルタイムAPIは1分あたり約1ドルかかりますが、他の[音声AIエージェントは1分あたり0.12ドルと低くなる可能性があります](https://seasalt.ai/blog/98-inbound-answering-automated-system/?utm_source=crossblog)。

<br/>

<center>
<img height="100%" width="100%" src="/images/blog/98-inbound-answering-automated-system/ai-product-comparison.png"  alt="音声AIエージェントのSeasalt.ai vs. Bland AI vs. Smith.ai。Synthflow.ai vs. Retell AI vs. Slang AI vs. Gridspace">

*Seasalt.aiによる音声AIエージェント製品比較*
</center>


価格に10倍の差がありますが、パフォーマンスに10倍の差はありますか？それは顧客が判断することです。

## 評決

事業主には、基本的に4つの選択肢があります：

1. **社内人間エージェント**
2. **別の会社にアウトソーシングする**（国内または海外）
3. **手頃な価格の音声AIエージェントを使用する**
4. **最も高度/高価なOpenAIリアルタイムAPIで構築する**

以下に、さまざまなオプションの長所と短所をまとめました：

* **OpenAIリアルタイムAPI**は最速で最も自然な体験を提供しますが、技術的な専門知識が必要で高価です。
* **オンショアオンデマンド人間エージェント**は、完璧な英語での基本的なタスクに適していますが、統合が限られています。
* **オフショア長期人間エージェント**は最も手頃ですが、インフラストラクチャの問題と高い離職率のため信頼性が低い場合があります。
* **統合音声AIエージェント**は、コスト、機能、使いやすさのバランスを提供しますが、応答性がわずかに低く、統合に癖がある場合があります。

<br/>

<center>
<img height="100%" width="100%" src="/images/blog/101-openai-chatgpt-realtime-api-cost-breakdown/options-for-phone-answer-services.png"  alt="電話応答サービスのさまざまなオプション：人間 vs. OpenAI vs. 音声AIスタートアップ">

*電話応答サービスのさまざまなオプション：人間 vs. OpenAI vs. 音声AIスタートアップ*
</center>

音声認識と自然言語処理の分野の専門家として、私の意見は次のとおりです：

1. 市場の統合音声AIエージェントを使用してください。たとえば、[私がSeaChatで誇りを持って構築したもの](https://wiki.seasalt.ai/seachat/inbound-voice-agent/tutorial/?utm_source=blog/)などです。これらは成熟しており、手頃な価格です。
2. OpenAIリアルタイムAPIには、モルモットがテストするためにさらに1年を与えてください。うまくいけば、価格がより手頃な1時間あたり10ドルに下がり、そのとき**本当に素晴らしいものになるでしょう**。人間エージェントに注意してください！


## もっと詳しく知る
手頃な価格で顧客サービス向けのAI音声技術を最初に探求したい場合は、[SeaChat](https://chat.seasalt.ai/?utm_source=blog/)にアクセスするか、[デモを予約](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting)できます。


## このシリーズについて

*これは、中小企業向けの顧客コミュニケーション戦略を探求する5つの記事シリーズで、応答サービスに焦点を当てています。*

- [中小企業が応答サービスを必要とする理由](https://seasalt.ai/blog/96-why-small-businesses-need-answering-service/)：応答サービスの重要性と利点を発見してください。

- [アウトソーシング vs. 社内ライブ受付](https://seasalt.ai/blog/97-live-receptionist-inhouse-outbound/)：ライブ受付とは何ですか？アウトソーシングすべきか、社内で雇用すべきか？

- [自動電話応答システム（インタラクティブ音声応答IVR vs. 音声AIエージェント）](https://seasalt.ai/blog/98-inbound-answering-automated-system/)：自動応答サービスとは何ですか？ロボットIVRまたは音声AIエージェントを使用すべきですか？

- [決定：私の小規模企業はライブ受付または自動応答サービスを使用すべきですか？](https://seasalt.ai/blog/99-inbound-answering-live-vs-automated/)：当社のシリーズから応答サービスについてすべて学びました。今こそ、あなたのビジネスに最適なサービスの種類を決定する時です。

- （この記事）[OpenAI vs. 人間 vs. 音声AI：コスト比較](https://seasalt.ai/blog/101-openai-chatgpt-realtime-api-cost-breakdown/)：OpenAIの最新の音声AI技術は優れた音声AIエージェントです。実際のコストはいくらですか？
`;export{n as default};

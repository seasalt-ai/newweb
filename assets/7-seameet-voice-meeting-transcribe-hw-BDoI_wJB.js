const e=`---
title: "デモから成功へ：ハードウェアを超えて (5/5)"
metatitle: "デモから成功へ (5/5)：ハードウェアを超えて"
date: 2021-09-15 17:24:32-07:00
modified_date: 2025-07-28 16:56:53+00:00
draft: false
author: Cody Kim
description: "このブログシリーズの最終回では、Seasalt.aiが共同の最新の会議ソリューションであるSeaMeetを作成するまでの道のりを追います。"
weight: 1
tags:
  - SeaMeet
image: images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/SeaMeet animation.gif
canonicalURL: /blog/seameet-voice-hardware/
url: /blog/seameet-voice-hardware/
---

*このブログシリーズを通して、Seasalt.aiが、その謙虚な始まりから、さまざまなハードウェアとモデルでサービスを最適化し、最先端のNLPシステムを統合し、最終的に共同の最新の会議ソリューションであるSeaMeetの完全な実現に至るまでの、バランスの取れた最新の会議体験を作成するまでの道のりを追ってください。*

## 最新の会議を超えて

ここSeasalt.aiでは、この製品のBuild 2019デモで示された現在の能力を賞賛しましたが、私たちはこの製品が何になるのか、会話の文字起こしを模倣を超えてどのように進めるのかに、より興味を持っています。しかし、競争に打ち勝つには、まず自分がプレイしているゲームを深く理解する必要があります。そして、SeaMeetが誕生しました。その初期段階では、私たちはAzureを堅牢な文字起こしサービスを構成する基盤を把握するためのモデルとして捉え、この確立されたテクノロジーを活用するためにAzure Speech Servicesをバックエンドとして使用しました。

他の若い製品と同様に、課題はすぐに現れました。製品を迅速に立ち上げるために、私たちはMicrosoftのKinect DKマイクアレイを使用することを選択しました。これは、音声サービスのハードウェア対応品として宣伝され、Azureの自動音声認識モデルから最適なパフォーマンスを引き出すように調整されているとされていました。間違いなくよく構築され、よく設計されたデバイスですが、完全なアルミニウムハウジング、広角レンズ、深度カメラ、7マイクアレイが付属しています。また、400ドル弱という高価な価格も付いています。2021年4月以降、Kinect DKは深刻な在庫不足の問題を抱えていました。2021年9月現在も在庫切れです。これは、Kinectが私たちにとって適切なデバイスではないことをさらに裏付けました。

<center>
<img src="/images/blog/7-seameet-voice-intelligence-meeting-transcription-hardware/kinect_store_page.png"/>

*Azure Kinect DKは、この記事が公開された時点（2021年9月）で2021年4月から在庫切れでした。*
</center>

マイクアレイは、会話の文字起こしパイプラインの最初のコンポーネントです。文字起こしサービスの提供者として、私たちはハードウェアを継続的かつ確実に調達できる必要があります。

完璧なマイクアレイを見つけるための私たちの旅は、2つの選択肢にたどり着きました。[Respeaker Array v2.0](https://www.seeedstudio.com/ReSpeaker-Mic-Array-v2-0.html)と[Respeaker Core v2.0](https://www.seeedstudio.com/ReSpeaker-Core-v2-0.html)です。どちらのデバイスも円形アレイで、それぞれ4つと6つのマイクを備えています。これは、360度の音源定位を実行し、これらの新しいデバイスを既存のシステムに簡単に統合できる重要な機能です。これらのデバイスの真の美しさは、ノイズ除去、エコーキャンセル、ビームフォーミングなどのオンボード信号処理アルゴリズムが付属しており、マイクの寸法に完全に調整されていることです。

<center>
<img src="/images/blog/7-seameet-voice-intelligence-meeting-transcription-hardware/respeaker_array.png" alt="Respeaker Array v2.0によるVADと音源定位のデモンストレーション"/>

*Respeaker Array v2.0によるVADと音源定位のデモンストレーション*
</center>

<center>
<img src="/images/blog/7-seameet-voice-intelligence-meeting-transcription-hardware/array_demo.jpg" alt="Respeaker Array v2.0を使用したライブ会議デモ"/>

*Respeaker Array v2.0を使用したライブ会議デモ*
</center>

USBポートから完全に給電される4マイクアレイv2.0の場合、ユーザーのコンピュータはオーディオをサーバーにストリーミングすることにのみ集中すればよいことを意味しました。これにより、信号処理はマイクアレイにオフロードされます。


<center>
<img src="/images/blog/7-seameet-voice-intelligence-meeting-transcription-hardware/core_demo.png" alt="デモ付きのRespeaker Core v2.0の写真"/>

*デモ付きのRespeaker Core v2.0の写真*
</center>

さらに魅力的なのは、ARMプロセッサと1GBのRAMを搭載したCore v2.0です。完全なLinuxディストリビューションを実行でき、クライアントスクリプトを実行するのに十分な処理能力を備えているため、このデバイスでユーザーのコンピューターからの処理をオフロードしただけでなく、コンピューターをマイクに接続する必要性を完全に排除しました。マイクアレイが重い処理を行うようになったため、製品を実行するために必要なハードウェア要件を減らし、その結果、SeaMeetから恩恵を受けることができるオーディエンスを効果的に増やしました。

<center>
<img src="/images/blog/7-seameet-voice-intelligence-meeting-transcription-hardware/respeaker_core.png" alt="スタンドアロンマイク配置のCore v2.0の例"/>

*スタンドアロンマイク配置のCore v2.0の例*
</center>

これらのマイクアレイのもう一つのユニークな特徴は、ハウジングがないことです。どちらもマイク、チップ、ポートがすべて露出したベアPCBとして出荷されます。多くの人はこれを不便だと感じるかもしれませんが、私たちはこれを、紛れもなくSeasaltのものである、真に唯一無二のデバイスを作成する機会だと考えています。

    これらのデバイスにより、私たちはSeaMeetのプロトタイプ、つまり真新しい最先端の会議文字起こしサービスを完成させました。そして、これで5部構成のシリーズを締めくくります。Microsoftのデモに触発された種に過ぎなかったSeaMeetが、完全に独立した製品になるまでを追いました。まだ初期段階ですが、SeaMeetは、ダイアライゼーションシステム、会議の理解、言語モデルを磨き続ける中で、エキサイティングな旅が待っています。Seasalt.aiのチームは、世界のビジネスのやり方を革新し続けることに意欲的です。
`;export{e as default};

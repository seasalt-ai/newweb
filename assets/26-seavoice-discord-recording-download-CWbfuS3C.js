const o=`---
title: "SeaVoice STT/TTS Discord Bot：AI文字起こし付きダウンロード可能な音声録音を提供する初のボット"
metatitle: "SeaVoice STT/TTS Discord Bot：録音ダウンロード"
date: 2022-12-13 11:51:16-08:00
modified_date: 2025-07-29 20:45:17+00:00
draft: false
author: Sydney Burgess, Kim Dodds, Drake Farmer, Jack Harvison, Dylan Strong, Cody Vernon
description: "最新リリースにより、SeaVoice Discord Botは、AI生成の文字起こし付きでダウンロード可能な音声チャンネル録音を提供するプラットフォーム初のボットとなりました。"
weight: 1
tags:
  - SeaVoice
  - Discord
image: images/blog/26-discord-download/seavoice-discord-audio-transcript-download.jpg
url: /blog/seavoice-discord-recording-download/
---

*SeaVoice Discord Botは、Discordの音声チャンネルでの音声文字起こしに最適なオプションの1つとして人気を集めています。最新リリースにより、このボットは、AI生成の文字起こし付きでダウンロード可能な音声チャンネル録音を提供するDiscord初のボットとなりました。*

# Discordでのダウンロード可能な音声および文字起こしファイル：SeaVoiceの最新ボットリリースにおけるエキサイティングな新機能

皆さん、こんにちは。SeaVoice Discordボットの新機能をお知らせできることを嬉しく思います！

<center>
<img src="/images/blog/26-discord-download/1-seavoice-discord-speech-to-text.png" alt="SeaVoice Discord Botが音声チャンネルからリアルタイムで音声を文字起こししています。"/>

*SeaVoice Discord Botが音声チャンネルからリアルタイムで音声を文字起こししています。*
</center>

リリース以来、SeaVoice Discord Botには2つの主要な機能がありました。それは、非常に正確な音声認識技術を使用して会話を文字起こしすることと、ユーザー入力に基づいて音声を合成することです。
リリース後まもなく、その人気は急速に高まり、現在では世界中の700以上のサーバーで利用されています。

チームとして、私たちはボットをユーザーにとってより便利でアクセスしやすいものにするためのさまざまな方法について話し合いました。
私たちは、セッションの録音と文字起こしを提供することが、会議の記録、プレイセッションの保存、その他多くの状況で役立つと判断しました。

## 文字起こしと音声ダウンロードの概要

<center>
<img src="/images/blog/26-discord-download/2-seavoice-audio-transcript-download-discord-direct-message.png" alt="SeaVoice Discord Botは、各セッション後に文字起こしと音声ダウンロードを含むDMを送信します。"/>

*SeaVoice Discord Botは、各セッション後に文字起こしと音声ダウンロードを含むDMを送信します。*
</center>

過去数ヶ月間、私たちのチームはこのアイデアを実現するために懸命に努力してきました。
これで、\`/recognize\`コマンドでボットを呼び出して会話を文字起こしすると、ボットは通話を録音し、舞台裏で文字起こしを保持します。
ボットに退出を求めると、通話に参加した全員がボットから直接メッセージを受け取ります。これには、完全な文字起こしと通話の録音が含まれます。

<center>
<img src="/images/blog/26-discord-download/3-seavoice-discord-audio-download.png" alt="SeaVoice Discord Botのリンクをクリックすると、音声録音をプレビューしてダウンロードするためのウェブページが開きます。"/>

*SeaVoice Discord Botのリンクをクリックすると、音声録音をプレビューしてダウンロードするためのウェブページが開きます。*
</center>

完全な録音をmp3形式でダウンロードするためのリンクがあります。
これは単一トラックの録音なので、すべてのユーザーの音声は同じファイルに含まれます。
これの音声処理には少し時間がかかる場合がありますので、ボットがリンクを送信するまで数秒、長い会話の場合は数分かかる場合があります。

<center>
<img src="/images/blog/26-discord-download/4-seavoice-discord-transcription-file.png" alt="SeaVoice Discord Botによって送信されたダウンロード可能な文字起こしファイル。"/>

*SeaVoice Discord Botによって送信されたダウンロード可能な文字起こしファイル。*
</center>

文字起こしはテキストファイル形式で、各発言の開始と終了のタイムスタンプ、および発言者のユーザー名が含まれています。
これにより、サーバーのメンバーは通話を簡単に追跡でき、プロジェクト会議やプレイセッションの記録にも役立ちます。

## 課題

また、Discordは各ユーザーの音声を個別に、そして無音を含まずに送信するため、音声の整理にはかなりの課題がありました。
したがって、まだ解決すべき問題がいくつかある可能性があることを念頭に置いてください。最終的な録音を可能な限り正確にするために、この機能を改善し続けます！
録音または文字起こしで問題が発生した場合は、[公式SeaVoice Discordサーバー](https://discord.gg/dfAYfwBQ]でチームにお知らせください。
<center>
<iframe src="https://discordapp.com/widget?id=919037515514654721&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
</center>

## 今後の方向性

この困難な機能がようやくリリース準備が整ったことで、私たちのチームはすでにボットへの次の追加機能を計画しています。
将来検討していることには、サーバーやユーザー向けのカスタマイズ可能な設定を許可することなどがあります。たとえば、録音の処理方法、文字起こしファイルの形式、録音免責事項を再生するかどうか/いつ再生するか、文字起こしを出力するデフォルトチャンネルなどです。
新しい機能（または既存の機能を改善する方法）に関するご提案は、[公式SeaVoice Discordサーバー](https://discord.gg/dfAYfwBQ)でお待ちしております。

## 試してみてください！

その間、[SeaVoice Discord Bot](https://discord.com/oauth2/authorize?client_id=1001955060210749492&scope=bot)をサーバーに招待して、ご自身で試してみてください。
また、[SeaVoice Botのドキュメント](https://wiki.seasalt.ai/seavoice/discord/discord-bot/)も読んで、ボットをコミュニティのニーズに最適に合わせる方法を確認してください。


これらの新機能が、ボットを使用するあらゆることに役立ち、楽しく使用できることを願っています！


敬具、


SeaVoice Botチーム
`;export{o as default};

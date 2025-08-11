const n=`---
title: "Discord 上的文字轉語音：TTS Discord 機器人案例研究"
metatitle: "Discord 上的文字轉語音：TTS Discord 機器人案例研究"
date: 2022-12-27 17:04:20-08:00
modified_date: 2025-07-29 20:45:17+00:00
author: Kim Dodds
description: "在這篇部落格中，我們將討論在審查了幾個月的真實文字轉語音數據後，我們發現真實 Discord 用戶如何利用我們的服務。"
weight: 1
tags:
  - SeaVoice
  - Discord
image: images/blog/29-tts-case-study/discord-tts-accessibility.jpg
url: /blog/discord-tts-case-study/
---


*在 Discord 上推出 SeaVoice（最快、最準確的文字轉語音和語音轉文字機器人之一）後，我們想了解用戶實際如何與服務互動。在這篇部落格中，我們將討論在審查了幾個月的真實文字轉語音用戶數據後，我們的發現。*

# SeaVoice：文字轉語音和語音轉文字 Discord 機器人

Discord 是一個主要用於音訊和文字聊天組合的平台，是語音智慧和自然語言處理服務的絕佳測試場。
我們於 2022 年 8 月在 Discord 上部署了 SeaVoice 機器人，配備了文字轉語音和語音轉文字命令。
要了解有關機器人工作原理的更多資訊，或觀看簡短的影片演示，您可以訪問 [SeaVoice Discord 機器人維基](https://wiki.seasalt.ai/seavoice/discord/6-community/)。
同年 11 月，我們發布了一個新版本，其中包含顯著的後端改進（如我們之前的部落格文章所述：[SeaVoice Discord 機器人：後端和穩定性改進](https://seasalt.ai/blog/27-seavoice-discord-backend-improvements/)），這使我們能夠記錄用戶如何與 SeaVoice 機器人互動的匿名數據。
在這篇部落格中，我們將查看文字轉語音命令的 1 個月用戶數據。

## SeaVoice TTS 使用情況

<center>
<img src="/images/blog/29-tts-case-study/discord-tts-usage.jpg" alt="SeaVoice Discord 機器人每日文字轉語音使用情況，為期 7 週。"/>

*SeaVoice Discord 機器人每日文字轉語音使用情況，為期 7 週。*
</center>

撰寫本文時，SeaVoice 機器人已添加到近 800 個伺服器中！
自 11 月開始記錄使用數據以來，我們發現每天的總請求數可以從低至 150 個波動到超過 1,300 個（平均約 560 個）。
大約 650 名用戶至少嘗試過一次 TTS 命令。
然而，大多數用戶在嘗試後不會繼續定期使用它。
在嘗試過 TTS 命令的 650 名用戶中，大約 200 名用戶使用了 20 次或更多次，只有 100 名用戶使用了 50 次或更多次。
話雖如此，那些喜歡並依賴 TTS 命令的用戶會大量使用它！
我們的前 5 名用戶在過去兩個月中每人提交了 1,000 多個請求，而排名第一的用戶單獨提交了近 2,500 個請求！

## 觀察

### 人們為什麼使用文字轉語音

<center>
<img src="/images/blog/29-tts-case-study/why-mute-on-discord.jpg" alt="SeaVoice Discord 機器人用戶使用文字轉語音的原因。"/>

*SeaVoice Discord 機器人用戶使用文字轉語音的原因。*
</center>

因此，在查看使用數據後，我們的第一個問題是：**為什麼頻繁用戶首先使用 TTS？**
我們查看了資料庫以找到一些解釋。
以下是我們一些用戶的真實 TTS 命令。

__*你為什麼不說話？*__

    - 另外我不能說話，因為我在吃飯
    - 我本來會說話的，但我現在在工作。
    - 如果我說話，我會吵醒我的家人
    - 抱歉，不會說太多。喉嚨很痛。
    - 我本來可以說話的，但我媽媽在這裡
    - 我今天太懶了，不想說話
    - 我不能說話，因為我病了，但我還是想加入 :)
    - 不完全是靜音，只是說話需要付出努力。有些日子需要付出很多努力
    - 抱歉，我靜音了，我奶奶正在打電話，聲音很大
    - 因為我的麥克風壞了

找到這些解釋後，我們可以將其總結為幾個主要原因：
- 存在物理障礙（麥克風壞了，說話困難，生病等），
- 他們忙於做其他事情（吃飯，工作等），
- 他們的環境太吵，或者他們需要保持安靜，或者
- 因為它很方便，他們喜歡使用它。

但無論他們使用 TTS 服務的確切原因是什麼，許多用戶都表示很高興他們能夠參與語音頻道對話，否則他們將無法參與。
我們相信 TTS 服務使 Discord 語音頻道更易於訪問，這是我們普通用戶繼續使用該服務的主要原因。

### 語言使用

在查看對話時，我注意到的一件事是，許多用戶嘗試使用不同語言的文字轉語音命令。
雖然有些用戶只是想看看它是否有效，或者認為發音很有趣，但其他人卻繼續長時間使用非英語語言的 TTS！

<center>
<img src="/images/blog/29-tts-case-study/discord-spanish-tts-test.png" alt="用戶測試英語 SeaVoice TTS 模型的西班牙語發音。"/>

*用戶測試英語 SeaVoice TTS 模型的西班牙語發音。*
</center>

西班牙語使用者尤其如此，儘管（如上所述）TTS 性能對西班牙語不好，因為該模型僅在英語上進行訓練。
我開始記錄每次遇到用戶嘗試在非英語語言上使用 TTS 命令的情況。

<center>
<img src="/images/blog/29-tts-case-study/discord-non-english-tts.jpg" alt="嘗試向 TTS 發送非英語請求的次數。"/>

*嘗試向 TTS 發送非英語請求的次數。*
</center>

上表顯示了我發現的每個對話的計數，其中至少有一個實例在 TTS 命令中使用了相應的語言。
顯然，西班牙語是迄今為止最常見的，再加上許多用戶即使性能不佳也繼續使用西班牙語 TTS 功能的事實，讓我懷疑 Discord 上是否沒有可行的西班牙語 TTS 替代方案。
無論哪種情況，人們都在嘗試將我們的 TTS 服務用於其他語言，因此我們可以跟踪哪些語言需求量最大，並使用這些數據來指導我們新模型的訓練。

### 關於機器人的評論

日誌中發現的另一個有趣話題是關於機器人本身的評論。
值得慶幸的是，我們看到了許多關於機器人及其性能的非常積極的評論。

<center>
<img src="/images/blog/29-tts-case-study/discord-tts-inclusive-accessibility-user-comment.png" alt="用戶評論說機器人讓他們感到更融入。"/>

*用戶評論說機器人讓他們感到更融入。*
</center>

最感人的評論來自那些覺得自己被語音頻道排除在外，但現在由於機器人提供的額外可訪問性而能夠參與其中的人。

我們還發現了一些建設性的回饋。

<center>
<img src="/images/blog/29-tts-case-study/discord-tts-speed.png" alt="用戶評論說 TTS 的速度是一個問題。"/>

*用戶評論說 TTS 的速度是一個問題。*
</center>

一位用戶提到，由於用戶需要先輸入整個句子然後發送出去，因此 TTS 比正常說話慢，所以有時他們的 TTS 發言在對話中會稍微延遲。
如上一節所述，我們還看到了對額外語言支援的請求，以及一位用戶希望能夠使用機器人進行語言翻譯。
關注此類回饋將幫助我們規劃和改進未來的功能。

### 新穎性

瀏覽完所有 TTS 命令後，我想說大約三分之二的發言用於與伺服器中的朋友和其他人進行一般對話。
大多數人都在玩遊戲並與朋友聊天，這些用戶往往是定期使用 TTS 服務的用戶。
另一方面，其餘三分之一的發言屬於「只是胡鬧」的範疇。
當你被賦予完全的權力讓一個聲音說出你想要的任何東西時，我相信人類的本性就是為了好玩而選擇你能想到的最愚蠢或最淫穢的東西。
我記得坐在小學電腦實驗室裡，被 Microsoft Sam（當時非常高科技）娛樂了幾個小時，看看我們是否能讓它說出「便便」或「屁股」之類的詞。
嗯，我想像我這樣的孩子長大了，獲得了更豐富的詞彙，最終在 Discord 上的 TTS 服務中找到了同樣的樂趣。

<center>
<img src="/images/blog/29-tts-case-study/discord-tts-stress-test.png" alt="用戶發送的奇怪 TTS 請求示例。"/>

*用戶發送的奇怪 TTS 請求示例。*
</center>

有時用戶只是嘗試通過輸入過長的字串、特殊字元、表情符號、URL 等來破壞機器人。
這是人們測試軟體極限的經典示例，實際上也有助於我們確保我們的服務健壯，並且可以處理用戶輸入的任何內容。

其他時候，用戶通過讓 TTS 服務說出他們能想到的最淫穢和冒犯性的東西來尋找樂趣。
在 TTS 日誌中，我想我看到了我所知道的每一個髒話（也許還有一些我從未聽說過的），種族歧視言論和露骨的性內容。

## 道德問題

不幸的是，文字轉語音應用程式可以通過多種方式被不愉快地使用：例如，用於宣傳仇恨言論或網路霸凌。
此外，雖然音訊剪輯是從模型合成的，但訓練模型的數據來自真實的人，並且良好模型的輸出聽起來幾乎與原始聲音無法區分。

因此，這些觀點，再加上我們看到真實用戶如何使用（或濫用）我們的 TTS 服務，為 Seasalt.ai 作為一家公司和 SeaVoice Discord 機器人提出了一些非常重要的問題：

- *作為一家公司，我們是否希望我們的產品以潛在的冒犯性或有害方式使用？*
- *配音演員對他們的聲音在文字轉語音應用程式中的使用方式擁有什麼權利？*
- *我們是否有權或有責任審查我們的服務使用方式？*

這些問題無法在一篇部落格文章中回答，甚至無法完全探討。
然而，隨著我們 Discord 專案的推進並繼續與我們的配音演員合作，公司感到有義務不斷考慮這些問題。

感謝您對我們的 Discord 機器人及語音智慧專案的興趣！您可以在我們的 [語音轉文字首頁](https://suite.seasalt.ai/tts) 上了解有關我們 STT 產品的更多資訊。要獲得我們任何語音智慧產品的一對一演示，請填寫 [預約演示表單](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting)。

在 Discord 方面，您可以從 [SeaVoice Discord 機器人維基](https://wiki.seasalt.ai/seavoice/discord/6-community/) 了解有關我們機器人的更多資訊並將其添加到您的伺服器。也歡迎加入我們的 [官方 SeaVoice Discord 伺服器](https://discord.gg/dfAYfwBQ)。

<center>
<iframe src="https://discordapp.com/widget?id=919037515514654721&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
</center>
`;export{n as default};

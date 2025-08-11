const n=`---
title: "Discord 上的語音轉文字：STT Discord 機器人案例研究"
metatitle: "Discord 上的語音轉文字：STT Discord 機器人案例研究"
date: 2023-01-23 11:25:00-08:00
draft: false
author: Kim Dodds
description: "在這篇部落格中，我們將討論我們在審查了數週的真實語音轉文字數據後，發現真實 Discord 用戶如何利用 SeaVoice 服務。"
weight: 1
tags:
  - SeaVoice
  - Discord
image: images/blog/30-stt-case-study/discord-stt-bot-case-study.jpg
canonicalURL: /blog/speech-to-text-discord-case-study/
url: /blog/speech-to-text-discord-case-study/
---

*在 Discord 上推出 SeaVoice（最快、最準確的文字轉語音和語音轉文字機器人之一）後，我們想了解用戶實際如何與服務互動。在這篇部落格中，我們將討論我們在審查了數週的真實語音轉文字用戶數據後的發現。*

# SeaVoice：一個文字轉語音和語音轉文字的 Discord 機器人

Discord 作為一個主要用於音訊和文字聊天組合的平台，是語音智慧和自然語言處理服務的絕佳測試場。我們於 2022 年 8 月在 Discord 上部署了 SeaVoice 機器人，該機器人配備了文字轉語音和語音轉文字命令。要了解有關機器人工作原理的更多資訊或觀看簡短的影片演示，您可以訪問 [SeaVoice 機器人維基](https://wiki.seasalt.ai/seavoice/discord/1-intro-discord-bot/)。同年 11 月，我們發布了一個新版本，其中包含顯著的後端改進（如我們的部落格文章中所述：[SeaVoice Discord 機器人：後端和穩定性改進](https://seasalt.ai/blog/27-seavoice-discord-backend-improvements/)），這使我們能夠記錄用戶如何與 SeaVoice 機器人互動的匿名數據。在我們的上一篇部落格（[TTS Discord 機器人案例研究](https://seasalt.ai/blog/29-discord-tts-case-study/)）中，我們分析了文字轉語音命令的 1 個月用戶數據。作為後續，在這篇文章中，我們將查看大約 3 週的語音轉文字用戶數據。

## SeaVoice STT 使用情況

截至撰寫本文時，SeaVoice 機器人已添加到近 900 個伺服器中！大約 260 個伺服器，總計超過 600 名參與者，至少嘗試過一次 STT 命令。在過去的 3 週中，我們舉辦了近 1,800 個 STT 會話，並輸出了總計 **超過 50 萬行轉錄**。

<center>
<img src="/images/blog/30-stt-case-study/discord-stt-sessions-per-day.png" alt="SeaVoice Discord 機器人每日語音轉文字會話，為期 3 週。"/>

*SeaVoice Discord 機器人每日語音轉文字會話，為期 3 週。*
</center>

如果我們查看每天的 STT 會話總數，我們發現它可以在 40 到 140 之間波動（平均約為 70）。我們還可以考慮我們正在生成的轉錄行總數。在最慢的一天，我們生成了少至 1 萬行，然而，在繁忙的一天，我們生成了超過 4 萬行。從這個角度來看，1 月 18 日，我們舉辦了 102 個 STT 會話，總計略低於 3 萬行轉錄；這相當於近 40 小時的錄音時間。

我們還發現，雖然大多數會話用於較短的對話（每個會話中位數為 57 行），但有大量非常長的會話將平均值提高到每個會話 650 行。我們最長的會話超過 3 萬行，超過平均一天的量！最後，我們還查看了每個會話中有多少用戶，發現每個會話通常有 4 到 5 個用戶——但是我們曾經使用機器人支持一個有 45 名參與者的虛擬研討會的實時轉錄！

<center>
<img src="/images/blog/30-stt-case-study/discord-transcription-lines-per-day.png" alt="SeaVoice Discord 機器人每日轉錄行數，為期 3 週。"/>

*SeaVoice Discord 機器人每日轉錄行數，為期 3 週。*
</center>

雖然大多數伺服器使用 STT 會話的次數不多，但也有不少伺服器廣泛使用該服務。自 12 月下旬我們開始記錄 STT 使用數據以來，每個伺服器的平均會話總數約為 7；然而，我們的 #1 伺服器已記錄了 131 個會話——平均每天超過 6 個會話！同一個伺服器在短短 3 週內轉錄了超過 15 萬行語音！也許更令人印象深刻的是，我們的 #1 用戶來自同一個伺服器，並且他自己的語音已轉錄了超過 6 萬行！

## 觀察

### 為什麼人們使用語音轉文字

<center>
<img src="/images/blog/30-stt-case-study/discord-audio-transcript-download-user-quote.jpg" alt="一位 SeaVoice Discord 機器人用戶表達了對持久化音訊和轉錄檔案的興奮。"/>

*一位 SeaVoice Discord 機器人用戶表達了對持久化音訊和轉錄檔案的興奮。*
</center>

因此，在查看使用數據後，我們的第一個問題是：**為什麼頻繁使用的用戶首先使用語音轉文字？**

我們查看了資料庫以尋找一些解釋。然而，事實證明，找到用戶為什麼使用 STT 服務而不是 TTS 服務的具體解釋更加困難。顯然，人們覺得有必要向聊天中的其他人解釋他們為什麼使用 TTS，但 STT 則不然。儘管如此，我確實發現了一些有趣的轉錄，這些轉錄提供了一些關於用戶為什麼決定使用 STT 服務的見解。

__*為什麼用戶使用 STT：*__

- “這就是為什麼使用轉錄的原因，因為我可以查看我錯過的東西。”
- “[用戶]聽力不好，所以他得到了可以轉錄的機器人”
- “[用戶]和他們一起突襲，他們用它來轉錄東西，但後來[用戶]說，哦，我們也可以用它來玩 ******* D 和 D 遊戲”
- “我迫不及待地想稍後回去閱讀這些轉錄本 [...] 我想回去聽那個錄音並再次查看那個轉錄本”
- “如果我們在這裡開會，那麼我們可以將會議的轉錄本輸入到 AI 中”
- “與人開會時，實際看到轉錄本真是太棒了”
- “[人們]不在聊天中，或者在社區中但不是語音聊天的一部分，但他們決定查看和閱讀”

因此，總的來說，似乎大多數用戶都喜歡擁有實時轉錄的便利性，這可以幫助他們跟踪對話並填補他們錯過的任何空白。對於聽力障礙或音訊/連接困難的用戶來說尤其如此。對於某些用戶來說，最大的好處是保留他們對話的永久音訊和文字記錄；這可能特別適用於諸如維護《龍與地下城》會話日誌或記錄重要會議等用例。

由於許多用戶沒有明確說明他們為什麼使用 STT 服務，因此了解他們在利用機器人時正在做什麼也很有用。查看用戶的轉錄本讓我了解了他們在轉錄時正在進行的活動：

__*用戶在使用 STT 時正在做什麼：*__

- 只是聊天
    - 遊戲：
    - 休閒遊戲
    - 高級遊戲（例如/協調組 MMO，大型多人線上，突襲）
- 角色扮演遊戲（龍與地下城）
- 串流/錄製內容
- 討論學校/專業/志願工作

絕大多數轉錄都屬於“只是聊天”和“休閒遊戲”類別。正如我們上面所看到的，我認為在這種情況下，大多數用戶使用機器人來提高 Discord 語音通道的可訪問性，和/或享受查看實時轉錄的便利性，以填補他們在對話中錯過的任何空白。在某些情況下（例如用於 MMO 突襲時），遊戲討論非常複雜，用戶實時相互協調；實時轉錄對於團隊的成功可能非常有用，因為用戶可以在玩遊戲時參考轉錄本。

<center>
<img src="/images/blog/30-stt-case-study/discord-stt-for-mmo-raid.jpg" alt="MMO 突襲期間複雜討論的示例。"/>

*MMO 突襲期間複雜討論的示例。*
</center>

似乎也有很多用戶使用機器人轉錄更嚴肅的對話，例如學校、專業和/或志願社區會議。我們還使用我們的機器人轉錄了一次線上技術會議，[UnTechCon](https://gfsc.studio/2022/11/14/announcing-untechcon.html)。在這些情況下，最終的錄音和轉錄文件可能對用戶在會議後進行審查非常有幫助。我發現的最後一個有趣的例子是用戶為其串流錄製內容。由於最終轉錄本帶有時間戳，用戶可以潛在地將轉錄文件作為其錄製音訊或影片內容的字幕上傳。

<center>
<img src="/images/blog/30-stt-case-study/discord-stt-accessibility-user-quote.jpg" alt="一位 SeaVoice 用戶感謝使 Discord 語音通道更易於訪問。"/>

*一位 SeaVoice 用戶感謝使 Discord 語音通道更易於訪問。*
</center>

但無論他們使用 STT 服務的確切原因是什麼，許多用戶都表示興奮，因為他們能夠參與語音通道對話，否則他們將無法參與。我們相信 STT 服務使 Discord 語音通道更易於訪問，這是我們普通用戶繼續使用該服務的主要原因。

### 關於 SeaVoice Discord 機器人的評論

日誌中發現的另一個有趣的話題是關於機器人本身的評論。值得慶幸的是，我們看到了關於機器人及其性能的幾個非常積極的評論。

<center>
<img src="/images/blog/30-stt-case-study/discord-seavoice-transcription-accuracy.png" alt="一位 SeaVoice 用戶評論了轉錄的準確性。"/>

*一位 SeaVoice 用戶評論了轉錄的準確性。*
</center>

我們還發現了一些建設性的回饋。

<center>
<img src="/images/blog/30-stt-case-study/discord-stt-accuracy-british-accent.png" alt="一位 SeaVoice 用戶建議改進英式口音。"/>

*一位 SeaVoice 用戶建議改進英式口音。*
</center>

<center>
<img src="/images/blog/30-stt-case-study/discord-stt-siri-accent-accuracy-comparison.png" alt="一位用戶將 SeaVoice 在帶口音的英語上的表現與 Siri 進行了比較。"/>

*一位用戶將 SeaVoice 在帶口音的英語上的表現與 Siri 進行了比較。*
</center>

大多數建設性評論都與機器人在非美式口音英語上的表現不佳有關；特別是用戶提到了英式和蘇格蘭口音。對於我們未來的 STT 服務，我們可以投入大量精力來改進我們對各種英語口音的語音識別。當然，英語並不是我們用戶使用的唯一語言，所以我們還計劃為機器人添加更多語言支持。事實上，我們目前正在最終確定我們的台灣普通話 STT 和 TTS 集成，並將很快發布更新版本的機器人。

## 隱私、數據敏感性和潛在冒犯性內容

人工智能的發展被倫理困境的洪流所包圍。我們的模型需要大量的真實用戶數據才能表現良好，*但我們如何在尊重用戶隱私的同時以道德方式收集這些數據？* 模型僅根據提供給它們的數據進行學習，因此存在（潛在的不可預見的）偏見；*那麼我們如何確保我們的模型能夠同樣良好地服務所有用戶？* 此外，我們的模型沒有社會可接受性的概念，可能會產生一些用戶認為具有冒犯性的結果。正如我們的一位用戶雄辯地說的那樣：*“如果機器人這樣做，那是不是種族主義，這就是問題所在”*。

<center>
<img src="/images/blog/30-stt-case-study/stt-accidental-racial-slur.png" alt="一位 SeaVoice 用戶指出一個有問題的、不準確的轉錄。"/>

*一位 SeaVoice 用戶指出一個有問題的、不準確的轉錄。*
</center>

我提出這些觀點的原因是日誌中存在一些令人擔憂的轉錄。第一個問題是機器人偶爾會轉錄冒犯性內容。在上面的示例中，機器人意外地將某人的用戶名轉錄為種族歧視語。顯然，這是機器人方面的錯誤，可能會冒犯我們的用戶，應該進行調查。但這引出了更多問題：*我們應該在哪裡劃定冒犯與傷害之間的界限？*

<center>
<img src="/images/blog/30-stt-case-study/discord-transcription-censor.png" alt="一位 SeaVoice 用戶評論了嘗試從轉錄中審查某些詞語。"/>

*一位 SeaVoice 用戶評論了嘗試從轉錄中審查某些詞語。*
</center>

嗯，首先我們決定將這種權力賦予用戶。我們將要開發的下一個功能之一是 TTS 和 STT 的可配置審查。這將允許伺服器選擇性地對髒話、性內容、種族歧視語等進行審查。

<center>
<img src="/images/blog/30-stt-case-study/discord-careful-transcript-content.png" alt="一位 SeaVoice 用戶警告另一位參與者，他們所說的話最終會出現在轉錄中。"/>

*一位 SeaVoice 用戶警告另一位參與者，他們所說的話最終會出現在轉錄中。*
</center>

有趣的是，我們看到的另一個相關問題是用戶自我審查，以避免某些內容出現在轉錄中。這出奇地普遍，我看到許多用戶解釋說他們不希望機器人轉錄他們即將說的話，所以他們停下來然後重新啟動 STT。如果用戶不希望機器人轉錄一些敏感信息，這在用戶方面是完全有效的擔憂。

<center>
<img src="/images/blog/30-stt-case-study/discord-stt-pause-deafen.png" alt="如何透過使機器人失聰來暫停 STT。"/>

*如何透過使機器人失聰來暫停 STT。*
</center>

我不確定在這種情況下我們是否能改善用戶體驗，但我會建議用戶可以暫時“使機器人失聰”以停止向機器人發送任何音訊。在這種情況下，機器人將不會收到任何音訊數據，直到它被“解除失聰”，因此用戶基本上可以在不停止和重新開始新會話的情況下暫停 STT 會話。

<center>
<img src="/images/blog/30-stt-case-study/discord-stt-opt-out-mute.jpg" alt="一位 SeaVoice 用戶評論了另一位參與者對機器人的不適。"/>

*一位 SeaVoice 用戶評論了另一位參與者對機器人的不適。*
</center>

最後，我們看到的最後一個問題是，一些用戶對機器人轉錄感到非常不舒服，以至於他們在機器人存在時主動避免在語音通道中說話。這與我們的目標***完全相反***，我們的目標是讓 Discord 語音通道對每個人都更易於訪問。雖然我們希望用戶能夠接受我們的[隱私政策](https://seasalt.ai/privacy)並相信我們會負責任地使用他們的數據，但我們絕對尊重每個人的隱私權。因此，**我們將要實現的下一個功能是 STT 選擇退出設置**。這將允許任何用戶將自己排除在 STT 錄音和轉錄之外，並且他們的音訊數據將不會被機器人以任何方式訪問或收集。

我們希望這些計劃中的功能能夠讓我們繼續使語音通道對每個人都更易於訪問，同時賦予用戶以他們感到舒適的級別與 SeaVoice 機器人互動的能力。展望未來，我們將繼續努力主動解決這些具有挑戰性的問題，以使 SeaVoice 達到最佳狀態！

感謝您對我們的 Discord 機器人的興趣，也感謝我們的用戶一直以來的支持！您可以在我們的 [SeaVoice 語音轉文本主頁](https://suite.seasalt.ai/tts)上了解有關我們 STT 產品的更多信息。要獲得我們任何語音智能產品的一對一演示，請填寫 [預訂演示表](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting)。

如果您還沒有嘗試過 SeaVoice 機器人，您可以從 [SeaVoice Discord 機器人維基](https://wiki.seasalt.ai/seavoice/discord/1-intro-discord-bot/)了解更多關於我們的機器人並將其添加到您的伺服器。也歡迎加入我們的 [官方 SeaVoice Discord 伺服器](https://discord.gg/dfAYfwBQ)。

<center>
<iframe src="https://discordapp.com/widget?id=919037515514654721&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
</center>
`;export{n as default};

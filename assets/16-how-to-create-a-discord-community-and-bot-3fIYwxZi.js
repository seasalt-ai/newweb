const n=`---
title: "Discord (2/3): 如何為您的品牌創建 Discord 社群和機器人"
metatitle: "Discord (2/3): 創建您品牌的 Discord 社群和機器人"
date: 2022-05-31 13:29:51-07:00
draft: false
author: Kim Dodds
description: "在本篇部落格中，我們將逐步介紹如何為您的品牌創建一個伺服器並連接一個機器人，該機器人可以自動化處理審核、錯誤回報、公告等任務。"
weight: 1
tags:
  - SeaX
  - Discord
image: /images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-community-and-bot-for-your-brand.jpg
canonicalURL: /blog/create-a-discord-community-and-bot/
url: /blog/create-a-discord-community-and-bot/
---

*在我們的部落格文章 [「Discord：客戶互動的新前沿」](https://seasalt.ai/blog/15-discord-a-new-frontier-for-customer-engagement/) 中，我們探討了 Discord 的日益普及，以及品牌如何利用這個新的社交平台來組建自己的線上社群並與客戶互動。在本篇部落格中，我們將逐步介紹如何為您的品牌創建一個新的官方伺服器，包括如何連接一個機器人，該機器人可以自動化處理審核、錯誤回報、公告等任務。*

## 目錄
- [設定伺服器](#設定伺服器)
    - [創建一個新的 Discord 伺服器](#創建一個新的-discord-伺服器)
    - [將伺服器轉換為「社群伺服器」](#將伺服器轉換為社群伺服器)
    - [設定頻道、活動和其他功能](#設定頻道活動和其他功能)
    - [廣而告之！](#廣而告之)
- [設定 Discord 機器人](#設定-discord-機器人)
    - [在 Discord 開發者入口網站中創建一個新機器人](#在-discord-開發者入口網站中創建一個新機器人)
    - [使用 PyCord 創建一個簡單的 Discord 機器人](#使用-pycord-創建一個簡單的-discord-機器人)
    - [邀請 Discord 機器人](#邀請-discord-機器人)
    - [測試整合](#測試整合)

# 設定伺服器

## 創建一個新的 Discord 伺服器
在 Discord 應用程式中，點擊左下角的「新增伺服器」按鈕。

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/create-new-discord-server.png" alt="創建一個新的 Discord 伺服器。"/>

*創建新 Discord 伺服器時的提示。*
</center>

您可以從範本中選擇，以便開始時就為您創建一些頻道，或者您也可以從零開始。第一步就是這麼簡單，您的伺服器就創建好了！

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/new-discord-server.png" alt="一個新創建的 Discord 伺服器。"/>

*一個新創建的 Discord 伺服器。*
</center>

## 將伺服器轉換為「社群伺服器」

強烈建議啟用 Discord 伺服器的「社群」功能。透過轉換為社群伺服器，您可以啟用額外的工具來協助審核、營運和發展伺服器。特別是，社群伺服器可以使用以下功能：

- **歡迎畫面**：向新使用者介紹您的伺服器
- **公告頻道**：允許您向使用者廣播訊息
- **伺服器洞察**：檢視關於您社群和使用者的分析資料
- **探索**：在 Discord 的伺服器目錄中宣傳您的社群

在左上角的伺服器名稱旁邊，點擊下拉選單並選擇「伺服器設定」。點擊左側的「啟用社群」標籤，然後選擇「開始使用」。

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/convert-to-community-discord-server.png" alt="將普通 Discord 伺服器轉換為社群伺服器。"/>

*啟用社群伺服器設定。*
</center>

按要求完成設定。啟用社群功能需要您的伺服器對使用者進行額外的驗證，啟用聊天過濾器，並設定一個規則頻道。

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-community-setup.png" alt="社群 Discord 伺服器的設定。"/>

*設定社群伺服器。*
</center>

啟用社群後，您可以使用幾項新功能。其中兩個最有用的功能是歡迎訊息和成員篩選：

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-server-welcome-page.png" alt="伺服器歡迎訊息範例。"/>

*伺服器歡迎訊息範例。*

<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-server-membership-screening.png" alt="成員篩選設定。"/>

*成員篩選設定。*
</center>

## 設定頻道、活動和其他功能
設定好社群伺服器後，您也可以從主伺服器頁面存取新功能。

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-server-channel-types.png" alt="在 Discord 伺服器中創建一個新頻道。", style="width:50%"/>

*創建一個新頻道。*

<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-server-channels.png" alt="一個 Discord 社群伺服器的頻道範例。" style="width:50%"/>

*社群伺服器頻道。*
</center>

當您創建一個新頻道時，可以使用兩種新的頻道類型：公告和舞台。公告頻道只能由管理員發布內容，非常適合用於官方貼文和公告——許多伺服器會讓機器人自動將其官方推特或論壇貼文發布到此頻道。「舞台」頻道是一種特殊的語音頻道，適合用於舉辦有現場觀眾的活動。主持人可以管理其他發言者（不像在常規語音頻道中，所有人都可以自由發言）。

當您的伺服器全部設定好後，它可能看起來像這樣：

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/customized-discord-server.png" alt="完全自訂的 Discord 伺服器。"/>

*完全自訂的社群伺服器。*
</center>

## 廣而告之！
伺服器設定好後，您就可以開始邀請人了！
Discord 提供一個免費的預製小工具，可以嵌入任何網站來宣傳您的伺服器。

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-server-widget.png" alt="Discord 伺服器小工具設定。"/>

*伺服器小工具設定。*

<iframe src="https://discordapp.com/widget?id=966505646944055326&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>

*Seasalt.ai 的 Near Me Messaging Discord 伺服器小工具運作範例。*

</center>

為了與潛在使用者建立信任，您可以選擇聯繫 Discord 客服以獲取伺服器驗證。驗證後，您的伺服器名稱旁邊會有一個「已驗證」圖示，表明該伺服器是某個企業、品牌或公眾人物的官方關聯社群。您可以在 [Discord 官方網站](https://support.discord.com/hc/en-us/articles/360001107231-Verified-Server-Requirements)上查看驗證要求。

一旦您的伺服器初具規模並擁有相當數量的使用者，Discord 會提供更多在內部宣傳您伺服器的機會。當您的伺服器創建至少8週並擁有500名以上的使用者時，您可以申請 Discord 合作夥伴，這將為您的伺服器帶來特殊的合作夥伴專屬福利。當使用者數達到1000名以上時，您可以加入伺服器探索，這將允許任何使用 Discord 的人發現並加入您的伺服器。

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-server-discovery.png" alt="Discord 探索設定和要求。"/>

*Discord 探索設定和要求。*
</center>

# 設定 Discord 機器人
現在您已經設定好了伺服器，可以透過新增機器人來增強其功能，以自動化處理審核、使用者回饋和公告等流程。請繼續閱讀以下部分，學習如何設定一個簡單的機器人，並敬請期待我們系列的下一篇部落格，屆時我們將展示如何將一個功能齊全的客戶服務體驗整合到您的 Discord 伺服器中。

## 在 Discord 開發者入口網站中創建一個新機器人
在 [Discord 開發者入口網站](https://discord.com/developers/applications)上創建一個帳號。創建一個「新應用程式」並為其命名。

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/new-discord-application.png" alt="在 Discord 開發者入口網站上創建一個新應用程式。"/>

*Discord 開發者儀表板：應用程式。*
</center>

選擇您的新應用程式，然後點擊左側的「機器人」標籤。

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/new-discord-bot.png" alt="應用程式的機器人設定。"/>

*Discord 應用程式設定。*
</center>

點擊「新增機器人」來創建您的 Discord 機器人。

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-bot-settings.png" alt="創建一個新的 Discord 機器人。"/>

*創建一個新的 Discord 機器人。*
</center>

創建後，生成並複製機器人權杖。最後，確保訊息權限已開啟。

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-bot-messaging-permissions.png" alt="Discord 機器人訊息權限。"/>

*創建一個新的 Discord 機器人。*
</center>

## 使用 PyCord 創建一個簡單的 Discord 機器人

我們使用 [PyCord 函式庫](https://docs.pycord.dev/en/master/)作為 Discord API 的 Python 封裝。

1. 安裝 PyCord 並為您的 Discord 機器人創建一個新的 Python 檔案。
2. 匯入 \`discord\` 套件並創建一個 \`discord\` 客戶端的實例。
3. 使用客戶端的 \`event\` 裝飾器創建一個 \`on_message\` 方法。該方法將接收發送到機器人有權存取的頻道中的每條訊息。
    a. 在該方法中，首先檢查訊息是否來自機器人本身，如果是則忽略。
    b. 否則，我們先只對以 \`$bot\` 開頭的訊息做出反應——如果訊息以此開頭，我們就在同一頻道回覆說 \`我收到您的訊息了！\`。
4. 最後，在腳本末尾，確保執行 \`discord\` 客戶端，以便它開始監聽頻道中的事件。

### 關於 Python Discord 客戶端的說明
Discord.py 是最受歡迎的 Discord API Python 封裝專案，但其作者和維護者決定停用該函式庫。您可以找到許多替代的 Discord API Python 封裝，其中許多是原始 Discord.py 的分支。我們選擇使用 PyCord 是因為它似乎維護良好，已經支援斜線命令，並且有一個Discord 伺服器可以提問。

當您創建 Discord 機器人時，盡量不要安裝其他的 Discord Python 套件。不同的 Discord Python 套件通常不能很好地協同工作，因為它們都在獨立開發。例如，PyCord 與 discord-components 相容性不佳，因此請確保不要同時安裝這兩個套件。

## 邀請 Discord 機器人
接下來，您可以邀請機器人到您的伺服器。點擊「OAuth2」 -> 「URL 產生器」。在右側的 URL 產生器上，選擇「bot」。

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-bot-invite-url-generator.png" alt="為 Discord 機器人產生邀請連結。"/>

為機器人產生邀請連結。

</center>

接下來，向下捲動以新增機器的權限。您可以讓機器人成為管理員，或者只選擇您需要的權限（這樣更安全）。

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-bot-permissions.png" alt="Discord 機器人權限設定。"/>

機器人權限設定。

</center>

最後，複製底部產生的 URL 並在新分頁中開啟連結。該連結會將您重定向到將機器人新增到您管理的伺服器的頁面。

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/add-discord-bot-to-server.png" alt="將機器人新增到 Discord 伺服器。" style="width:50%"/>

將機器人新增到伺服器。

</center>

機器人被邀請到伺服器後，點擊該機器人並點擊「新增到伺服器」。系統會要求您授予機器人「在伺服器中創建命令」的權限。

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/confirm-discord-bot-permissions.png" alt="確認 Discord 機器人權限。" style="width:50%"/>

在伺服器中確認機器人的權限。

</center>

## 測試整合
現在您的機器人應該已經連接好並正在監聽您 Discord 伺服器中的所有活動。上面程式碼中提供的範例機器人只會在有人輸入以「$bot」開頭的訊息時回覆「我收到您的訊息了！」。像這樣的字串比對是為您的機器人設定某些操作的最簡單方法。但是，Discord 還支援具有更多功能支援的原生應用程式命令。您可以在官方 Discord API 文件中閱讀更多相關內容。一旦您完成了初始的機器人整合設定，您的機器人可以為伺服器提供的服務將有無限可能。

請繼續關注我們部落格系列的最後一篇文章，屆時我們將逐步介紹我們如何使用我們的產品 SeaX 將 Twilio Flex 的聯絡中心平台與一個社群 Discord 伺服器連接起來。這種整合不僅允許品牌與其客戶建立社群，還能保持直接的溝通管道，並直接在線上社群內解決問題。

欲了解我們任何解決方案的更多資訊，請造訪 Seasalt.ai 的產品維基 - 或填寫「預約示範」表格以親身體驗。`;export{n as default};

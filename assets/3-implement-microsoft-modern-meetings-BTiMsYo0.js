const n=`---
title: "從示範到成功：實施微軟的現代會議及其他（1/5）"
metatitle: "從示範到成功（1/5）：超越微軟的現代會議"
date: 2021-07-19
draft: false
author: Cody Kim
description: "在本部落格系列的第一部分，跟隨 Seasalt.ai 創建 SeaMeet 的旅程，這是我們協作的現代會議解決方案。"
weight: 1
tags:
  - SeaMeet
image: images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/SeaMeet animation.gif
canonicalURL: /blog/microsoft-modern-meetings/
url: /blog/microsoft-modern-meetings/
---

*在本部落格系列中，跟隨 Seasalt.ai 創建一個全面的現代會議體驗的旅程，從其卑微的開端，到在不同硬體和模型上優化我們的服務，再到整合最先進的自然語言處理系統，最後以 SeaMeet 的完全實現告終，這是我們協作的現代會議解決方案。*

### 現代會議的未來

[![微軟語音轉文字服務在 MS Build 2019 的示範](/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/ms-build-play.png)](https://www.youtube.com/watch?t=100&v=EYinMnQWgfU&feature=youtu.be)

在 2019 年的微軟 Build 大會上，微軟在揭曉其最新的雲端運算解決方案時，激起了觀眾的熱情：Azure 語音服務，更具體地說是他們的會議轉錄應用程式。在推出後，這個對話轉錄器立即引起了所有人的注意，並在頂級科技部落格和期刊中獲得了提及。 2019 年的示範，如下面的影片所示，展示了 Azure 語音服務的強大功能。我們幾乎不知道，它很快就成為了在全球大流行和後大流行環境中如何舉行現代會議的序幕：從實體到虛擬再到混合。

<center>
<img src="/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/azure-demo.png" alt="微軟 Azure 語音轉文字和說話者識別在 MS Build 2019 的現場示範"/>
</center>

作為一個對話轉錄平台進行廣告，微軟為 Azure 的會議轉錄服務所做的展示，恰如其分地介紹為「現代會議的未來」，將他們的新服務確立為一個強大、高效的語音轉文字（STT）平台，適合所有希望快速、整潔地擷取所有重要會議的企業。

是什麼讓這項服務成為會議轉錄的巔峰之作？首先，即時性能。隨著技術越來越快，耐心也越來越薄，即使是幾秒鐘的延遲也足以惹惱普通用戶。然而，微軟證明了他們的對話轉錄器速度綽綽有餘，提供的轉錄比一些隱藏式字幕服務還要快，使得僅憑文字就能完全跟上同步對話。

接下來，微軟還展示了他們的說話者識別能力。最終得到一堆雜亂無章的對話文字是令人沮喪和無用的，但說話者識別會自動用說話者標記每個話語，從而創建一個易於使用的格式。

![微軟 Azure 語音轉文字和說話者識別的使用者介面](/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/azure-ui.png)

每天，計算硬體都日益強大，公司都希望從最新的 CPU 和 GPU 中榨取最後一點核心。通常，較舊的技術會過時，客戶被迫每隔幾年升級一次，才能在社會中保持相關性。在「現代會議的未來」中，微軟優化了 Azure 語音服務，使其能夠在消費級硬體上運行，同時將繁重的計算保留在他們這邊，從而進一步擴大了已經龐大的可以從這項服務中受益的人群。

Azure 的會議轉錄服務旨在優化我們開展業務的方式。每個組織都應該將這樣的產品納入其工作流程。在普通的一天裡，資訊不斷流動，每一點都和上一點一樣重要，無論是提醒、任務還是更新。很多時候，事情會在縫隙中丟失，這意味著浪費時間和利潤。微軟的解決方案提供的是一個完整的、自動生成的記錄，準確地描述了說了什麼以及誰說的，所以資訊丟失和在冗長的錄音中盲目尋找特定部分的日子已經一去不復返了。現在，您需要的所有資訊都整齊地擺在您面前，供您隨時參考。這項技術比以往任何時候都更重要。如果說 2020 年教會了我們什麼，那就是對靈活性的需求，尤其是在工作場所。人們會生病，會出現意想不到的事件，因此幾乎不可能指望員工參加每一次討論。有了現代會議，我們離能夠適應這些意想不到的發展又近了一步，基本上是讓每個人都能在場而無需實際在場。

### 實施現代會議

2020 年中，我們收到了新加坡一位政府客戶的提案請求。是的，那時仍然是疫情期間。但新加坡已經控制住了疫情，所以政府會議仍然在實體會議室舉行。他們想要一個現代化的解決方案，可以轉錄多達 12 位不同發言者的語音。此外，發言者識別在這裡將扮演重要角色。

在說話者識別方面，Azure 提供的功能與客戶需求之間的一個顯著差異是語音「註冊」：Azure 要求所有說話者提供一些預先錄製的語音，以便在系統中註冊他們的聲紋。然而，要讓一些想必非常重要的政府官員坐在麥克風前被錄音是不可能的。我們對這個過程做了一些調整，首先進行了無監督的說話者聚類（也稱為說話者日誌）。這個想法是，如果一個說話者在我們的系統中說過一次話，我們下次他們說話時就會認出他們。

![微軟 Azure 語音轉文字和語音識別服務的流程圖](/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/azure-diagram.png)

*來自 [Azure 對話轉錄](https://docs.microsoft.com/en-us/azure/cognitive-services/speech-service/conversation-transcription) 的現代會議架構。在我們的調整中，我們將會議前「使用者註冊」的要求放寬到會議後。*


然後，我們迅速為整個專案組裝了我們的武器庫。第一步是採購一個高品質的麥克風陣列，它將為我們的識別模型提供清晰的音訊資料。我們立即被 Azure Kinect 所吸引：一個時尚的 7 麥克風陣列，裝在一個全鋁外殼中，還附帶一個高畫質攝影機和深度感測器。

<center>
<img src="/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/kinect.png" alt="價值 400 美元的 Azure Kinect DK 用於現代會議"/>

*價值 400 美元的 [Azure Kinect DK](https://azure.microsoft.com/en-us/services/kinect-dk/) 用於現代會議*
</center>

僅從外觀來看，這就是一個真正精密的設備，可以與任何會議室相得益彰，但更重要的是，強大的麥克風陣列承諾了我們所追求的品質。憑藉圓形排列，七個麥克風為使用最先進的訊號處理技術（如聲源定位和波束成形）開闢了可能性。這個麥克風也是我們後端的完美搭配，後端利用了 Azure 的語音服務，這是一個成熟的語音轉文字平台，為我們的產品提供了成為頂級會議轉錄器所需的動力。

<center>
<img src="/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/kinect-spec.png" alt="Azure Kinect DK 配備 7 個麥克風陣列以拾取語音"/>

*Azure Kinect DK 配備 7 個麥克風陣列以拾取語音*
</center>

雖然 Azure 沒有進入 SeaMeet 的最終版本，但它為我們實現我們的願景提供了所需的開端。最後，我們將所有這些與一個使用者介面結合在一起。在我們的第一次迭代中，我們使用了一個通用的、基於 Java 的設計，雖然簡單，但功能齊全。由於 Kinect 設備無法運行外部程式碼，因此所有這些都必須在一個額外的單一 Windows 筆記型電腦上運行。儘管一開始有點粗糙，但我們很自豪地說，我們擁有一個功能齊全的會議轉錄產品。

<center>
<img src="/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/seameet-old.png" alt="使用微軟 Kinect 麥克風陣列的 Seasalt.ai 的 SeaMeet 服務的初始設定"/>

*使用 Azure Kinect 和一台 Windows 電腦實施現代會議，該電腦運行一個簡單的基於 Java 的使用者介面，以顯示即時會議轉錄和說話者識別。*
</center>

### 部署現代會議

2021 年 5 月，我們的工程師抵達新加坡，部署我們的現代商業解決方案作為概念驗證。與另外兩家競爭公司競爭，我們各自的任務是展示我們對會議未來的願景。

儘管無線在過去十年中已成為常態，但我們發現我們的競爭對手仍然選擇有線解決方案。從圖片中可以看出，12 位發言者中的每一位都固定在一個單獨的麥克風上。發言者必須在近距離通話環境中直接對著麥克風講話，系統才能拾取他們的聲音。這不僅嚴重阻礙了靈活性，而且這種設置還會因複雜的影音設備而使複雜性倍增。另一方面，我們的解決方案完全由遠場功能提供支援，這要歸功於 7 麥克風陣列和訊號處理演算法。

在某種程度上，我們的解決方案非常像「Alexa for Business」：一個設備覆蓋整個房間，只需要一根電源線。與我們競爭對手的解決方案相比，我們的解決方案在我們真正了解現代企業的需求方面領先了幾代，而他們仍然完全受制於過時的有線一代。

<center>
<img src="/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/poc-setup.png"/>

*PoC 會議室設置。有 12 位發言者模擬了一場 2 小時的政府會議。*

<img src="/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/poc-captioned.png"/>

*現場所有設備的特寫鏡頭。*
</center>

團隊看到巨大的差異感到非常興奮。經過幾個小時的調整，最終的 PoC 進行得非常順利。團隊還在 PoC 之後在新加坡進行了一次旅行，在一個 Covid-19 受到嚴格控制的國家，生活和商業照常進行。

### 超越現代會議

在我們在新加坡期間，我們的想法超越了一個成功的 PoC：與其他競爭解決方案相比，我們的解決方案要好 10 倍。但我們如何能比自己做得好 10 倍呢？請跟隨我們的腳步，進入本系列的下一個部落格。

`;export{n as default};

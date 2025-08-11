const e=`---
title: "從演示到成功：超越硬體 (5/5)"
metatitle: "從演示到成功 (5/5)：超越硬體"
date: 2021-09-15 17:24:32-07:00
modified_date: 2025-07-28 16:56:53+00:00
draft: false
author: Cody Kim
description: "在本博客系列的最後一部分，跟隨 Seasalt.ai 創建 SeaMeet 的旅程，這是我們的協作式現代會議解決方案。"
weight: 1
tags:
  - SeaMeet
image: images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/SeaMeet animation.gif
canonicalURL: /blog/seameet-voice-hardware/
url: /blog/seameet-voice-hardware/
---

*在本系列博客中，跟隨 Seasalt.ai 打造全面的現代會議體驗的旅程，從其卑微的開端，到在不同硬體和模型上優化我們的服務，再到集成最先進的自然語言處理系統，最終完全實現我們的協作式現代會議解決方案 SeaMeet。*

## 超越現代會議

在 Seasalt.ai，我們欽佩這款產品在 Build 2019 演示中展示的現有能力，但我們更感興趣的是這款產品能發展成什麼樣，以及如何將對話轉錄提升到超越模仿的水平。但在擊敗競爭對手之前，您首先需要深入了解您正在玩的遊戲。SeaMeet 就這樣誕生了。在初期，我們將 Azure 視為一個模型，以掌握構建可靠轉錄服務的基礎，並使用 Azure 語音服務作為我們的後端來利用這項成熟的技術。

就像任何新產品一樣，挑戰立即出現。為了快速推出我們的產品，我們選擇使用 Microsoft Kinect DK 麥克風陣列，它被宣傳為語音服務的硬體對應物，據說經過調整可以從 Azure 的自動語音識別模型中獲得最佳性能。儘管它是一個無可否認的精心建造、精心設計的設備，但它配備了全鋁外殼、廣角鏡頭、深度攝像頭和 7 麥克風陣列。它的價格也高達近 400 美元。從 2021 年 4 月開始，Kinect DK 出現了嚴重的庫存不足問題。截至 2021 年 9 月撰寫本文時，它仍然缺貨。這進一步證實了 Kinect 不適合我們。

<center>
<img src="/images/blog/7-seameet-voice-intelligence-meeting-transcription-hardware/kinect_store_page.png"/>

*Azure Kinect DK 自 2021 年 4 月起缺貨，截至本文發布時（2021 年 9 月）仍未補貨。*
</center>

麥克風陣列是對話轉錄管道中的第一個組件。作為轉錄服務的提供商，我們需要能夠可持續且可靠地採購我們的硬體。

我們尋找完美麥克風陣列的旅程使我們找到了兩個選擇：[Respeaker Array v2.0](https://www.seeedstudio.com/ReSpeaker-Mic-Array-v2-0.html) 和 [Respeaker Core v2.0](https://www.seeedstudio.com/ReSpeaker-Core-v2-0.html)。這兩個設備都是圓形陣列，分別有四個和六個麥克風，這是能夠執行 360 度聲源定位的關鍵功能，並允許我們輕鬆地將這些新設備集成到我們現有的系統中。這些設備真正的美妙之處在於它們內置了信號處理算法，包括降噪、回聲消除和波束成形，這些算法都完美地針對麥克風的尺寸進行了調整。

<center>
<img src="/images/blog/7-seameet-voice-intelligence-meeting-transcription-hardware/respeaker_array.png" alt="Respeaker Array v2.0 演示 VAD 和聲源定位"/>

*Respeaker Array v2.0 演示 VAD 和聲源定位*
</center>

<center>
<img src="/images/blog/7-seameet-voice-intelligence-meeting-transcription-hardware/array_demo.jpg" alt="使用 Respeaker Array v2.0 進行現場會議演示"/>

*使用 Respeaker Array v2.0 進行現場會議演示*
</center>

對於完全由 USB 端口供電的四麥克風陣列 Array v2.0，這意味著用戶電腦只需專注於將音訊流式傳輸到服務器。這會將信號處理卸載到麥克風陣列。


<center>
<img src="/images/blog/7-seameet-voice-intelligence-meeting-transcription-hardware/core_demo.png" alt="Respeaker Core v2.0 演示圖"/>

*Respeaker Core v2.0 演示圖*
</center>

更引人注目的是配備 ARM 處理器和 1GB RAM 的 Core v2.0。它能夠運行完整的 Linux 發行版，並擁有足夠的處理能力來運行我們的客戶端腳本，我們不僅通過此設備將處理從用戶電腦上卸載，而且完全消除了將電腦連接到麥克風的需要。由於麥克風陣列現在正在進行繁重的處理，我們降低了運行產品所需的硬體要求，因此有效地增加了可以從 SeaMeet 中受益的受眾。

<center>
<img src="/images/blog/7-seameet-voice-intelligence-meeting-transcription-hardware/respeaker_core.png" alt="Core v2.0 獨立麥克風放置示例"/>

*Core v2.0 獨立麥克風放置示例*
</center>

這些麥克風陣列的另一個獨特之處在於它們沒有外殼。兩者都以裸露的 PCB 形式發貨，麥克風、芯片和端口都暴露在外。雖然許多人會認為這不方便，但我們認為這是一個機會，可以創造一個真正獨一無二的設備，它無疑是 Seasalt 的。

    有了這些設備，我們完成了 SeaMeet 的原型，這是我們全新的、最先進的會議轉錄服務。至此，我們結束了五部分系列文章，從 SeaMeet 只是受 Microsoft 演示啟發而產生的一個種子開始，到最終成為一個完全獨立的產品。SeaMeet 仍處於早期階段，隨著我們不斷完善我們的說話人分離系統、會議理解和語言模型，它將迎來激動人心的旅程。Seasalt.ai 團隊渴望繼續徹底改變世界的商業運作方式。
`;export{e as default};

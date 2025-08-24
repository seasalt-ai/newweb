const n=`---
title: "如何從 YouTube 下載音訊資料，單個和多個影片 | 音訊工具箱系列"
metatitle: "從 YouTube 下載音訊資料 | 音訊工具箱系列"
date: 2024-01-15 10:25:00-08:00
modified_date: 2025-07-28 16:56:53+00:00
draft: false
author: Guoguo Chen
description: "了解如何使用免費工具合法高效地從單個或多個 YouTube 影片下載音訊。探索工具和技術，為您的創意專案提取音樂、播客、音效等。"
weight: 1
tags:
  - Audio Toolbox
  - AI Tools
image: images/blog/65-how-to-download-audio-from-youtube/65-how-to-download-audio-from-youtube.png
canonicalURL: /blog/how-to-download-audio-from-youtube/
url: /blog/how-to-download-audio-from-youtube/
---

今天，讓我們深入探討一個與許多人產生共鳴的話題：如何免費從 YouTube 下載音訊資料。

法律免責聲明：在繼續之前，必須承認從 YouTube 下載音訊資料可能涉及法律複雜性。用戶必須確保遵守 YouTube 的服務條款和版權法，並獲得下載內容預期用途的適當授權。

# 了解 YouTube 的音訊生態
YouTube 是一個包含各種音訊內容的寶庫，提供各種音樂、播客、講座、音效等。熟悉 YouTube 上可用的音訊內容類型以及相關的法律考慮因素對於負責任地使用此平台至關重要。

## YouTube 上的音訊內容範例：

### 音樂
探索涵蓋各種流派的官方音樂影片、翻唱、混音和混搭。

### 播客
參與大量涵蓋無數主題的播客，通常伴隨著視覺元素以增強理解。

### 教育資源
訪問大學和專家分享的講座和教育內容，作為寶貴的學習輔助工具。

### 音效和循環
YouTube 為創意專案提供了廣泛的音效和音樂循環。

# 將單個 YouTube 影片轉換為 MP3（單個檔案）

如果只是幾個單獨的檔案，我更喜歡使用免費的線上轉換器。有很多選項可用。這裡有幾個可以考慮：

## [ToMP3.cc](https://tomp3.cc/)

網站：[https://tomp3.cc/](https://tomp3.cc/)

1. 它是免費的，不需要註冊。
2. 將您的 YouTube 影片連結貼到搜索欄中，然後點擊“START”按鈕。
3. 您可以選擇將音訊下載為 MP3，並提供各種位元率選項。

<center>
<img height="450px" src="/images/blog/65-how-to-download-audio-from-youtube/1-seasalt-ai-youtube-to-mp3.png" alt="使用 ToMP3.cc 將 YouTube 轉換為 mp3"/>

*使用 ToMP3.cc 將 YouTube 轉換為 mp3*
</center>

## [ClipConverter.app](https://www.clipconverter.app/)

網站：[https://www.clipconverter.app/](https://www.clipconverter.app/)

1. 它是免費的，不需要註冊。
2. 將您的 YouTube 影片連結貼到搜索欄中，然後點擊“START”按鈕。
3. 您可以選擇將音訊下載為 MP3，並提供各種位元率選項。

<center>
<img height="450px" src="/images/blog/65-how-to-download-audio-from-youtube/2-seasalt-ai-youtube-to-mp3-clipconverter.png" alt="使用 ClipConverter.app 將 YouTube 轉換為 mp3"/>

*使用 ClipConverter.app 將 YouTube 轉換為 mp3*
</center>


# 將許多 YouTube 影片轉換為 MP3（檔案列表）

現在，如果您必須下載大量音訊檔案並且願意動手操作，我們應該使用名為 \`youtube-dl\` 的命令行工具。準確地說，我們將使用其分叉版本 \`yt-dlp\`。您可以在此處找到 [GitHub 存儲庫](https://github.com/yt-dlp/yt-dlp)：[https://github.com/yt-dlp/yt-dlp](https://github.com/yt-dlp/yt-dlp)。

## 如何使用 \`yt-dlp\` 將 YouTube 影片下載為 MP3

\`yt-dlp\` 是一個免費工具，您可以從電腦的命令提示字元執行它。它主要使用 Python 製作，可在 Linux、Mac OS 和 Windows 上運行。

### 步驟 1：安裝
安裝 \`yt-dlp\` 非常簡單。您可以下載適用於您電腦系統的正確檔案，例如 Windows 或 Mac，然後進行設定即可使用。之後，它就可以使用了。

另一種安裝方法是使用名為 \`pip\` 的程式。此方法可讓您輕鬆取得 yt-dlp 和任何更新。這是一個您可以使用的簡單命令：

\`\`\`
python3 -m pip install --no-deps -U yt-dlp
\`\`\`

您可能還需要通過運行以下命令來更新您的憑證和 \`yt-dlp\`：
\`\`\`
python3 -m pip install --upgrade certifi
yt-dlp -U
\`\`\`

### 步驟 2：測試安裝
安裝後，請務必將程式位置添加到電腦的 PATH 中，以便在使用命令提示字元時輕鬆找到它。

要測試您的安裝，請鍵入：

\`\`\`
yt-dlp --help
\`\`\`

此命令在使用命令行工具 \`yt-dlp\` 時會印出通用選項。


### 步驟 3：將 YouTube 影片下載為 MP3

現在，假設我們要下載 YouTube 檔案 https://youtu.be/Qmkd8ucEVbU，我們可以執行以下命令：

\`\`\`
yt-dlp -x --audio-format mp3 https://youtu.be/Qmkd8ucEVbU
\`\`\`

在上述命令中，選項 \`-x\` 表示我們只提取音訊（忽略影片），選項 \`--audio-format mp3\` 將音訊格式指定為 MP3，而 https://youtu.be/Qmkd8ucEVbU 是要下載的 YouTube 檔案。

如果您想將下載的音訊保存為特定檔案名，而不是使用工具生成的名稱，您可以運行：
\`\`\`
yt-dlp -x --audio-format mp3 -o Jeremy_Blake_Stardrive_Rock.mp3 https://youtu.be/Qmkd8ucEVbU
\`\`\`

這裡，\`-o Jeremy_Blake_Stardrive_Rock.mp3\` 表示下載的檔案應保存為 \`Jeremy_Blake_Stardrive_Rock.mp3\`。

### 步驟 4：（高級）下載 YouTube 影片列表為 MP3

現在我們準備下載大量的 YouTube 檔案。我們的想法是編寫一個腳本來封裝命令行工具 \`yt-dlp\`，然後自動逐個下載檔案。讓我們使用 Python。

將以下程式碼複製並貼到檔案中，我們可以將其命名為 \`download_youtube_to_mp3.py\`。此外，在同一個資料夾中創建一個名為 \`urls.txt\` 的檔案，並添加您要下載的 YouTube 影片的 URL，每個 URL 佔一行。

\`\`\`
import subprocess

def download_youtube_audios(urls_file):
    with open(urls_file, 'r') as file:
        urls = file.readlines()
        for url in urls:
            url = url.strip()
            subprocess.call(['yt-dlp', '-x', '--audio-format', 'mp3', url])

if __name__ == "__main__":
    urls_file = 'urls.txt'  # 包含 YouTube 影片 URL 的檔案名
    download_youtube_audios(urls_file)
\`\`\`

運行 \`python3 download_youtube_to_mp3.py\`，然後您將從 YouTube 影片列表中獲取所有 MP3 檔案。瞧！


## 法律注意事項
YouTube 擁有最好的音訊收藏之一，但了解法律條款並確保您下載的資料可以合法用於個人和商業目的非常重要。您需要注意的事項包括：

- 版權：大多數內容受版權保護，使用需要獲得許可。
- 知識共享：某些內容具有知識共享許可，允許在未經許可的情況下進行特定使用。
- 合理使用：合理使用允許對受版權保護的材料進行某些使用，但理解其應用可能很複雜。
- YouTube 服務條款：遵守 YouTube 的規則對於避免帳戶暫停等處罰至關重要。

總的來說，雖然 YouTube 提供了寶貴的音訊資源，但負責任地並根據法律準則使用它們至關重要。在下載或使用 YouTube 上的音訊內容之前，請務必確保您擁有適當的權限。


# 為什麼要自己做所有事情？

雖然從 YouTube 下載音訊可能很有用，但為什麼止步於此呢？使用 [SeaMeet](https://seameet.ai/?utm_source=blog) 將您的音訊處理提升到新的水平。

**SeaMeet 為您的所有音訊需求提供準確、實時的轉錄和摘要。** 無論您是開會、錄製播客，還是只想獲得對話轉錄，SeaMeet 都能提供即時、高品質的轉錄和富有洞察力的摘要。這個強大的工具可以為您節省數小時的手動工作，並幫助您從音訊內容中提取最大價值。

[立即註冊 SeaMeet](https://seameet.ai/?utm_source=blog)，體驗追蹤對話的樂趣。

# 音訊工具箱系列更多內容

- [您的音訊轉換綜合指南：輕鬆轉換聲音檔案](https://seasalt.ai/blog/81-how-to-convert-audio-files-to-different-formats/?utm_source=blog)
`;export{n as default};

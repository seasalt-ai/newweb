const n=`---
title: "SeaVoice STT/TTS Discord Bot: Đầu tiên cung cấp bản ghi âm giọng nói có thể tải xuống với bản chép lời AI"
metatitle: "SeaVoice STT/TTS Discord Bot: Tải xuống bản ghi"
date: 2022-12-13 11:51:16-08:00
modified_date: 2025-07-29 20:45:17+00:00
draft: false
author: Sydney Burgess, Kim Dodds, Drake Farmer, Jack Harvison, Dylan Strong, Cody Vernon
description: "Với bản phát hành mới nhất, SeaVoice Discord Bot là bot đầu tiên trên nền tảng này cung cấp bản ghi âm kênh thoại có thể tải xuống với bản chép lời do AI tạo ra."
weight: 1
tags:
  - SeaVoice
  - Discord
image: images/blog/26-discord-download/seavoice-discord-audio-transcript-download.jpg
url: /blog/seavoice-discord-recording-download/
---

*SeaVoice Discord Bot đã trở nên phổ biến như một trong những lựa chọn tốt nhất để chép lời giọng nói trong các kênh thoại Discord. Với bản phát hành mới nhất, bot này là bot đầu tiên trên Discord cung cấp bản ghi âm kênh thoại có thể tải xuống với bản chép lời do AI tạo ra.*

# Tệp âm thanh và bản chép lời có thể tải xuống trên Discord: Các tính năng mới thú vị trong bản phát hành bot mới nhất của SeaVoice

Chào mọi người, chúng tôi rất vui mừng thông báo một tính năng mới cho bot SeaVoice Discord!

<center>
<img src="/images/blog/26-discord-download/1-seavoice-discord-speech-to-text.png" alt="SeaVoice Discord Bot chép lời giọng nói từ kênh thoại trong thời gian thực."/>

*SeaVoice Discord Bot chép lời giọng nói từ kênh thoại trong thời gian thực.*
</center>

Kể từ khi phát hành, SeaVoice Discord Bot có hai khả năng chính: nó chép lời các cuộc trò chuyện bằng công nghệ chuyển giọng nói thành văn bản có độ chính xác cao và có thể tổng hợp giọng nói dựa trên đầu vào của người dùng.
Nó đã nhanh chóng trở nên phổ biến và hiện có mặt trên hơn 700 máy chủ trên toàn thế giới ngay sau khi ra mắt.

Là một nhóm, chúng tôi đã thảo luận về các cách khác nhau để làm cho bot hữu ích và dễ tiếp cận hơn cho người dùng.
Chúng tôi quyết định rằng việc cung cấp bản ghi và bản chép lời các phiên sẽ hữu ích cho việc ghi nhật ký cuộc họp, lưu các phiên chơi game và một số tình huống khác.

## Tổng quan về tải xuống bản chép lời và âm thanh

<center>
<img src="/images/blog/26-discord-download/2-seavoice-audio-transcript-download-discord-direct-message.png" alt="SeaVoice Discord Bot gửi DM với bản chép lời và tải xuống âm thanh sau mỗi phiên."/>

*SeaVoice Discord Bot gửi DM với bản chép lời và tải xuống âm thanh sau mỗi phiên.*
</center>

Trong vài tháng qua, nhóm của chúng tôi đã làm việc chăm chỉ để biến ý tưởng này thành hiện thực.
Bây giờ, khi bạn đưa bot vào cuộc gọi của mình để chép lời cuộc trò chuyện của bạn bằng lệnh \`/recognize\`, nó cũng sẽ ghi lại cuộc gọi và lưu trữ các bản chép lời ở chế độ nền.
Khi bạn yêu cầu bot rời đi, mọi người tham gia cuộc gọi sẽ nhận được tin nhắn trực tiếp từ bot chứa bản chép lời đầy đủ và bản ghi âm cuộc gọi.

<center>
<img src="/images/blog/26-discord-download/3-seavoice-discord-audio-download.png" alt="Nhấp vào liên kết từ SeaVoice Discord Bot sẽ mở một trang web để xem trước và tải xuống bản ghi âm."/>

*Nhấp vào liên kết từ SeaVoice Discord Bot sẽ mở một trang web để xem trước và tải xuống bản ghi âm.*
</center>

Sẽ có một liên kết để tải xuống bản ghi đầy đủ ở định dạng mp3.
Đây là bản ghi một kênh, vì vậy giọng nói từ tất cả người dùng sẽ nằm trong cùng một tệp.
Quá trình xử lý âm thanh này có thể mất một chút thời gian, vì vậy vui lòng đợi vài giây để bot gửi liên kết, có thể lên đến vài phút đối với các cuộc trò chuyện dài hơn.

<center>
<img src="/images/blog/26-discord-download/4-seavoice-discord-transcription-file.png" alt="Tệp bản chép lời có thể tải xuống được gửi bởi SeaVoice Discord Bot."/>

*Tệp bản chép lời có thể tải xuống được gửi bởi SeaVoice Discord Bot.*
</center>

Bản chép lời ở dạng tệp văn bản và bao gồm dấu thời gian cho thời điểm bắt đầu và kết thúc của mỗi điều đã nói, cũng như tên người dùng của người đã nói.
Điều này sẽ giúp các thành viên máy chủ của bạn dễ dàng theo dõi các cuộc gọi, và sẽ hữu ích cho việc ghi nhật ký các cuộc họp dự án cũng như các phiên chơi game.

## Thách thức

Cũng cần lưu ý rằng chúng tôi đã gặp khá nhiều thách thức trong việc xử lý âm thanh, vì Discord gửi âm thanh của mỗi người dùng riêng biệt và không bao gồm bất kỳ khoảng lặng nào.
Vì vậy, xin lưu ý rằng vẫn có thể có một vài vấn đề cần giải quyết, và chúng tôi sẽ tiếp tục cải thiện tính năng này để làm cho các bản ghi cuối cùng chính xác nhất có thể!
Nếu bạn gặp bất kỳ vấn đề nào với bản ghi hoặc bản chép lời của mình, vui lòng cho nhóm của chúng tôi biết trên [Máy chủ Discord SeaVoice chính thức](https://discord.gg/dfAYfwBQ).
<center>
<iframe src="https://discordapp.com/widget?id=919037515514654721&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
</center>

## Hướng đi tương lai

Với tính năng đầy thách thức này cuối cùng đã sẵn sàng để phát hành, nhóm của chúng tôi đã lên kế hoạch cho các bổ sung tiếp theo cho bot.
Một số điều chúng tôi đang xem xét trong tương lai là cho phép cấu hình tùy chỉnh cho máy chủ và/hoặc người dùng cho những thứ như: cách họ muốn xử lý bản ghi, định dạng tệp bản chép lời, có/khi nào phát cảnh báo ghi âm, kênh mặc định để xuất bản chép lời, v.v.
Chúng tôi rất muốn nghe bất kỳ đề xuất nào bạn có cho các tính năng mới (hoặc cách cải thiện các tính năng hiện có) trên [Máy chủ Discord SeaVoice chính thức](https://discord.gg/dfAYfwBQ).

## Hãy thử!

Trong thời gian chờ đợi, bạn có thể mời [SeaVoice Discord Bot](https://discord.com/oauth2/authorize?client_id=1001955060210749492&scope=bot) vào máy chủ của mình và tự mình thử.
Bạn cũng có thể đọc [tài liệu Bot SeaVoice](https://wiki.seasalt.ai/seavoice/discord/discord-bot/) để xem cách bạn có thể sử dụng bot để phù hợp nhất với nhu cầu cộng đồng của mình.


Chúng tôi hy vọng rằng các tính năng mới này sẽ giúp bạn với bất cứ điều gì bạn sử dụng bot cho và bạn sẽ vui vẻ khi sử dụng chúng!


Trân trọng,


Đội ngũ Bot SeaVoice
`;export{n as default};

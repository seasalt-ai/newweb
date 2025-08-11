const n=`---
title: "SeaVoice STT/TTS Discord Bot: Cải thiện Backend & Độ ổn định"
metatitle: "SeaVoice STT/TTS Discord Bot: Cải thiện Backend & Độ ổn định"
date: 2022-12-13 11:58:34-08:00
modified_date: 2025-07-28T16:56:53Z
draft: false
author: Sydney Burgess, Kim Dodds, Drake Farmer, Jack Harvison, Dylan Strong, Cody Vernon
description: "Với bản phát hành mới nhất, SeaVoice Discord Bot ra mắt các cải tiến backend lớn giúp cải thiện độ ổn định của bot và hỗ trợ phát triển trong tương lai."
weight: 1
tags:
  - SeaVoice
  - Discord
image: images/blog/27-discord-backend-improvements/seavoice-discord-stt-tts-bot-backend-improvements.jpg
canonicalURL: /blog/seavoice-discord-backend-improvements/
url: /blog/seavoice-discord-backend-improvements/
---


*SeaVoice Discord Bot đã trở nên phổ biến như một trong những lựa chọn tốt nhất để phiên âm giọng nói trong các kênh thoại Discord. Với bản phát hành mới nhất, chúng tôi đang triển khai các cải tiến backend lớn giúp cải thiện độ ổn định của bot và hỗ trợ phát triển trong tương lai.*

# SeaVoice ghi nhớ: Cơ sở dữ liệu trực tuyến!

Chào mọi người, gần đây chúng tôi đã làm việc trên một số thứ đằng sau hậu trường cho SeaVoice Discord Bot mà chúng tôi muốn chia sẻ!

Như bạn đã thấy trong bài đăng blog trước của chúng tôi, chúng tôi đã thêm rất nhiều tính năng cho SeaVoice Bot, chẳng hạn như các bản ghi và phiên âm cuộc gọi mới của chúng tôi. Cùng với những phát triển này, chúng tôi đã cấp cho SeaVoice Discord Bot khả năng ghi nhớ những gì nó đã làm: mọi thứ từ lệnh đến ghi lỗi. Bây giờ, khi bot nói chuyện với bạn hoặc bạn sử dụng nó để ghi lại một cuộc gọi, tất cả thông tin đó được lưu trữ một cách có tổ chức.

## Điều này có ý nghĩa gì đối với người dùng
Bây giờ, bạn có thể hỏi, điều này có ý nghĩa gì đối với bạn?

À, trước hết, tính năng phiên âm và tải xuống âm thanh mới của chúng tôi sẽ không thể thực hiện được nếu không có những cải tiến backend này! Giờ đây, chúng tôi cũng có thể tự động lưu trữ mọi sự cố không may mà bạn gặp phải để nhóm phát triển của chúng tôi có thể bắt đầu khắc phục những vấn đề này trước khi bạn nhận ra chúng. Ngoài ra, nếu bất kỳ ai quyết định không muốn dữ liệu của họ được lưu trữ trong hệ thống của chúng tôi nữa, tổ chức mới này cho phép chúng tôi nhanh chóng tìm, truy xuất và/hoặc xóa bất kỳ dữ liệu nào theo máy chủ, kênh, người dùng, ngày, v.v.

Hơn nữa, điều này mở ra cánh cửa cho các tính năng mới như theo dõi thống kê, tự động kiểm duyệt và nhiều hơn nữa. Các quản trị viên, bạn có muốn đảm bảo rằng các quy tắc máy chủ của mình đang được tuân thủ hoặc kiểm tra tần suất bot được sử dụng trong máy chủ của bạn không? Có lẽ bạn muốn xem lại cuộc trò chuyện vui nhộn mà bạn đã có vào tuần trước? Với khung cơ sở dữ liệu hiện đã được thiết lập vững chắc và được sử dụng trong bot sản xuất, một loạt các tính năng mới dễ dàng tiếp cận hơn.

## Quyền riêng tư dữ liệu

Đương nhiên, bất cứ khi nào chúng ta thảo luận về việc lưu dữ liệu người dùng, luôn có câu hỏi về quyền riêng tư và bảo mật dữ liệu. Dưới đây là một vài điểm chính về cách chúng tôi xử lý dữ liệu của bạn:
- Tất cả dữ liệu người dùng được lưu trữ trên một máy chủ từ xa an toàn, mà chỉ một số ít nhân viên Seasalt.ai được chọn mới có thể truy cập.
- SeaVoice chỉ ghi lại dữ liệu do Discord cung cấp mà người dùng cung cấp khi tương tác với bot SeaVoice; điều đó bao gồm:
    - Tên & ID máy chủ, kênh, người dùng
    - Văn bản được nhập vào lệnh \`/speak\`
    - Âm thanh được nói trong kênh thoại khi bot đang thực hiện lệnh \`/recognize\`
- Dữ liệu này sẽ chỉ được Seasalt.ai sử dụng để cải thiện dịch vụ.
- Bạn có thể yêu cầu xóa bất kỳ hoặc tất cả dữ liệu của mình bất cứ lúc nào.

Để biết chi tiết đầy đủ, vui lòng tham khảo [Chính sách quyền riêng tư của Seasalt.ai](https://seasalt.ai/privacy/).

## Định hướng tương lai

Phần lớn bản cập nhật này sẽ không đáng chú ý, nhưng đối với chúng tôi, phần khó đã qua, và bây giờ chúng tôi có thể bắt đầu làm việc trên các dự án cho phép bạn tùy chỉnh và sử dụng SeaVoice Discord Bot nhiều hơn những gì bạn nghĩ là có thể.
Một tính năng sắp ra mắt là cấu hình máy chủ và/hoặc người dùng có thể tùy chỉnh.
Với cơ sở dữ liệu đã có, điều này sẽ cho phép chúng tôi lưu các tùy chọn trong tương lai, chẳng hạn như bạn có muốn được nhắc nhở rằng một cuộc trò chuyện thoại đang được ghi âm hay không, ai sẽ nhận được liên kết tải xuống bản ghi cuộc gọi hoặc ai muốn từ chối ghi âm.

Bạn có ý tưởng nào muốn được thêm vào bây giờ khi chúng tôi có thể lưu dữ liệu không? Đừng ngần ngại gửi cho chúng tôi một số gợi ý trên [Máy chủ Discord chính thức của SeaVoice](https://discord.gg/dfAYfwBQ)!

<center>
<iframe src="https://discordapp.com/widget?id=919037515514654721&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
</center>

## Hãy thử nó!

Và nếu bạn chưa thử bản phát hành mới nhất của SeaVoice Bot, hãy thử ngay! Mời [SeaVoice Discord Bot](https://discord.com/oauth2/authorize?client_id=1001955060210749492&scope=bot) vào máy chủ của bạn.
Bạn cũng có thể đọc [tài liệu của SeaVoice Bot](https://wiki.seasalt.ai/seavoice/discord/discord-bot/) để xem cách bạn có thể sử dụng bot để phù hợp nhất với nhu cầu của cộng đồng mình.

Hãy theo dõi để biết một số cập nhật thú vị sắp tới!

Cảm ơn,

Đội ngũ SeaVoice Bot.
`;export{n as default};

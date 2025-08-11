const n=`---
title: "Chuyển văn bản thành giọng nói trên Discord: Nghiên cứu điển hình về Bot Discord TTS"
metatitle: "Chuyển văn bản thành giọng nói trên Discord: Nghiên cứu điển..."
date: 2022-12-27 17:04:20-08:00
modified_date: 2025-07-29 20:45:17+00:00
author: Kim Dodds
description: "Trong blog này, chúng tôi sẽ thảo luận về những phát hiện của mình về cách người dùng Discord thực sự sử dụng dịch vụ của chúng tôi sau khi xem xét dữ liệu chuyển văn bản thành giọng nói xác thực trong vài tháng."
weight: 1
tags:
  - SeaVoice
  - Discord
image: images/blog/29-tts-case-study/discord-tts-accessibility.jpg
url: /blog/discord-tts-case-study/
---


*Sau khi ra mắt SeaVoice, một trong những bot chuyển văn bản thành giọng nói và giọng nói thành văn bản nhanh nhất và chính xác nhất trên Discord, chúng tôi muốn hiểu cách người dùng thực sự tương tác với các dịch vụ. Trong blog này, chúng tôi sẽ thảo luận về những phát hiện của mình sau khi xem xét dữ liệu người dùng chuyển văn bản thành giọng nói thực tế trong vài tháng.*

# SeaVoice: Bot Discord chuyển văn bản thành giọng nói & giọng nói thành văn bản

Discord, là một nền tảng chủ yếu được sử dụng để kết hợp trò chuyện bằng âm thanh và văn bản, là một sân thử nghiệm tuyệt vời cho các dịch vụ trí tuệ giọng nói và xử lý ngôn ngữ tự nhiên.
Chúng tôi đã triển khai Bot SeaVoice, được trang bị các lệnh chuyển văn bản thành giọng nói và giọng nói thành văn bản, lên Discord vào tháng 8 năm 2022.
Để tìm hiểu thêm về cách bot hoạt động hoặc xem video demo ngắn, bạn có thể truy cập [Wiki Bot Discord SeaVoice](https://wiki.seasalt.ai/seavoice/discord/6-community/).
Vào tháng 11 cùng năm, chúng tôi đã phát hành một phiên bản mới với những cải tiến đáng kể về backend (như được mô tả trong bài đăng blog trước của chúng tôi: [Bot Discord SeaVoice: Cải tiến Backend & Độ ổn định](https://seasalt.ai/blog/27-seavoice-discord-backend-improvements/)) cho phép chúng tôi ghi lại dữ liệu ẩn danh về cách người dùng tương tác với bot SeaVoice.
Trong blog này, chúng tôi sẽ xem xét dữ liệu người dùng trong 1 tháng từ lệnh chuyển văn bản thành giọng nói.

## Sử dụng TTS của SeaVoice

<center>
<img src="/images/blog/29-tts-case-study/discord-tts-usage.jpg" alt="Sử dụng chuyển văn bản thành giọng nói hàng ngày của Bot Discord SeaVoice trong 7 tuần."/>

*Sử dụng chuyển văn bản thành giọng nói hàng ngày của Bot Discord SeaVoice trong 7 tuần.*
</center>

Tại thời điểm viết bài, Bot SeaVoice đã được thêm vào gần 800 máy chủ!
Kể từ khi chúng tôi bắt đầu ghi lại dữ liệu sử dụng vào tháng 11, chúng tôi đã phát hiện ra rằng tổng số yêu cầu mỗi ngày có thể dao động từ 150 đến hơn 1.300 (với mức trung bình khoảng 560).
Khoảng 650 người dùng đã thử lệnh TTS ít nhất một lần.
Tuy nhiên, hầu hết người dùng không tiếp tục sử dụng nó thường xuyên sau khi thử.
Trong số 650 người dùng đã thử lệnh TTS, khoảng 200 người đã sử dụng nó 20 lần trở lên, và chỉ 100 người đã sử dụng nó 50 lần trở lên.
Điều đó nói lên rằng, những người thực sự thích và dựa vào lệnh TTS sử dụng nó rất nhiều!
5 người dùng hàng đầu của chúng tôi đã gửi hơn 1.000 yêu cầu mỗi người trong hai tháng qua, và người dùng hàng đầu đã gửi gần 2.500 yêu cầu một mình!

## Quan sát

### Tại sao mọi người sử dụng chuyển văn bản thành giọng nói

<center>
<img src="/images/blog/29-tts-case-study/why-mute-on-discord.jpg" alt="Lý do người dùng Bot Discord SeaVoice sử dụng chuyển văn bản thành giọng nói."/>

*Lý do người dùng Bot Discord SeaVoice sử dụng chuyển văn bản thành giọng nói.*
</center>

Vì vậy, câu hỏi đầu tiên của chúng tôi sau khi xem dữ liệu sử dụng là: **tại sao những người dùng thường xuyên lại sử dụng TTS ngay từ đầu?**
Chúng tôi đã xem xét cơ sở dữ liệu để tìm một số giải thích.
Sau đây là các lệnh TTS thực tế từ một số người dùng của chúng tôi.

__*Tại sao bạn không nói chuyện?*__

    - ngoài ra tôi không thể nói chuyện vì tôi đang ăn
    - Tôi thực sự sẽ nói chuyện, nhưng tôi đang ở nơi làm việc vào lúc này.
    - nếu tôi nói chuyện thì tôi sẽ đánh thức gia đình tôi
    - xin lỗi, sẽ không nói chuyện nhiều. cổ họng đau lắm.
    - tôi có thể nói chuyện nhưng mẹ tôi ở đây
    - hôm nay tôi quá lười để nói chuyện
    - tôi không thể nói chuyện vì tôi bị ốm nhưng tôi vẫn muốn tham gia :)
    - không hoàn toàn im lặng, chỉ cần nỗ lực để nói chuyện. Có những ngày cần rất nhiều nỗ lực
    - xin lỗi tôi bị tắt tiếng bà tôi đang nói chuyện điện thoại và nó ồn ào
    - Vì mic của tôi bị hỏng

Sau khi tìm thấy những giải thích này, chúng ta có thể tóm tắt chúng thành một vài lý do chính:
- có một rào cản vật lý (mic hỏng, khó nói, ốm, v.v.),
- họ đang bận làm việc khác (ăn uống, ở nơi làm việc, v.v.),
- môi trường của họ quá ồn ào hoặc họ cần giữ im lặng, hoặc
- vì nó tiện lợi và họ thích sử dụng nó.

Nhưng bất kể lý do chính xác họ sử dụng dịch vụ TTS là gì, nhiều người dùng đã bày tỏ sự phấn khích khi họ có thể tham gia vào các cuộc trò chuyện kênh thoại khi họ không thể làm được điều đó.
Chúng tôi tin rằng dịch vụ TTS giúp các kênh thoại Discord dễ tiếp cận hơn, và đó là lý do chính khiến người dùng thường xuyên của chúng tôi tiếp tục sử dụng dịch vụ này.

### Sử dụng ngôn ngữ

Một điều nổi bật đối với tôi khi xem xét các cuộc trò chuyện là nhiều người dùng đã thử sử dụng lệnh chuyển văn bản thành giọng nói với các ngôn ngữ khác nhau.
Trong khi một số người dùng chỉ muốn xem liệu nó có hoạt động hay không hoặc nghĩ rằng cách phát âm thật buồn cười, thì những người khác lại tiếp tục sử dụng TTS bằng các ngôn ngữ không phải tiếng Anh trong thời gian dài!

<center>
<img src="/images/blog/29-tts-case-study/discord-spanish-tts-test.png" alt="Người dùng thử nghiệm cách phát âm tiếng Tây Ban Nha của mô hình TTS SeaVoice tiếng Anh."/>

*Người dùng thử nghiệm cách phát âm tiếng Tây Ban Nha của mô hình TTS SeaVoice tiếng Anh.*
</center>

Điều này đặc biệt đúng với những người nói tiếng Tây Ban Nha mặc dù (như người dùng ở trên đã lưu ý) hiệu suất TTS không tốt cho tiếng Tây Ban Nha, vì mô hình chỉ được đào tạo bằng tiếng Anh.
Tôi bắt đầu ghi lại bất cứ khi nào tôi gặp một người dùng cố gắng sử dụng lệnh TTS bằng một ngôn ngữ khác ngoài tiếng Anh.

<center>
<img src="/images/blog/29-tts-case-study/discord-non-english-tts.jpg" alt="Số lần thử gửi yêu cầu không phải tiếng Anh đến TTS."/>

*Số lần thử gửi yêu cầu không phải tiếng Anh đến TTS.*
</center>

Bảng trên hiển thị số lượng mỗi cuộc trò chuyện mà tôi tìm thấy có ít nhất một trường hợp ai đó sử dụng ngôn ngữ tương ứng trong lệnh TTS.
Rõ ràng, tiếng Tây Ban Nha là phổ biến nhất, và kết hợp với thực tế là nhiều người dùng tiếp tục sử dụng chức năng TTS bằng tiếng Tây Ban Nha mặc dù hiệu suất kém, khiến tôi tự hỏi liệu có lựa chọn thay thế khả thi nào đã tồn tại trên Discord cho TTS tiếng Tây Ban Nha hay không.
Trong cả hai trường hợp, mọi người đang cố gắng sử dụng dịch vụ TTS của chúng tôi cho các ngôn ngữ khác, vì vậy chúng tôi có thể theo dõi những ngôn ngữ nào đang có nhu cầu cao nhất và sử dụng dữ liệu này để thông báo việc đào tạo các mô hình mới của chúng tôi.

### Bình luận về Bot

Một chủ đề thú vị khác được tìm thấy trong nhật ký là bình luận về chính bot.
May mắn thay, chúng tôi đã thấy một số bình luận rất tích cực về bot và hiệu suất của nó.

<center>
<img src="/images/blog/29-tts-case-study/discord-tts-inclusive-accessibility-user-comment.png" alt="Người dùng bình luận rằng bot khiến họ cảm thấy được hòa nhập hơn."/>

*Người dùng bình luận rằng bot khiến họ cảm thấy được hòa nhập hơn.*
</center>

Những bình luận cảm động nhất là từ những người cảm thấy bị loại trừ khỏi các kênh thoại, nhưng giờ đây có thể tham gia nhờ khả năng tiếp cận bổ sung mà bot cung cấp.

Chúng tôi cũng tìm thấy một số phản hồi mang tính xây dựng.

<center>
<img src="/images/blog/29-tts-case-study/discord-tts-speed.png" alt="Người dùng bình luận rằng tốc độ của TTS là một vấn đề."/>

*Người dùng bình luận rằng tốc độ của TTS là một vấn đề.*
</center>

Một người dùng đã đề cập rằng, vì người dùng sẽ cần nhập toàn bộ câu và sau đó gửi đi, TTS chậm hơn so với việc nói bình thường, vì vậy đôi khi lời nói TTS của họ được nói hơi muộn trong cuộc trò chuyện.
Như đã đề cập trong phần trước, chúng tôi cũng thấy các yêu cầu hỗ trợ ngôn ngữ bổ sung cũng như một người dùng hy vọng có thể dịch giữa các ngôn ngữ bằng cách sử dụng bot.
Theo dõi loại phản hồi này sẽ giúp chúng tôi lập kế hoạch và cải thiện các tính năng trong tương lai.

### Tính mới lạ

Sau khi lướt qua toàn bộ bộ sưu tập các lệnh TTS, tôi có thể nói rằng khoảng hai phần ba các câu nói được sử dụng trong các cuộc trò chuyện chung với bạn bè và những người khác trong máy chủ.
Hầu hết mọi người đang chơi game và chỉ trò chuyện với bạn bè của họ, và những người dùng này có xu hướng là những người sử dụng dịch vụ TTS thường xuyên.
Mặt khác, một phần ba còn lại của các câu nói thuộc loại “chỉ đùa giỡn”.
Khi bạn được trao toàn quyền để làm cho một giọng nói nói bất cứ điều gì bạn muốn, tôi tin rằng bản chất con người là chọn điều ngớ ngẩn nhất hoặc tục tĩu nhất mà bạn có thể nghĩ ra chỉ để cười.
Tôi nhớ mình đã ngồi trong phòng máy tính ở trường tiểu học và được giải trí hàng giờ liền bởi Microsoft Sam (rất công nghệ cao vào thời điểm đó), xem liệu chúng tôi có thể làm cho nó nói những từ như “phân” hoặc “mông” hay không.
Chà, tôi cho rằng những đứa trẻ như tôi đã lớn lên, có vốn từ vựng phong phú hơn, và cuối cùng tìm thấy sự giải trí tương tự với dịch vụ TTS của chúng tôi trên Discord.

<center>
<img src="/images/blog/29-tts-case-study/discord-tts-stress-test.png" alt="Ví dụ về các yêu cầu TTS kỳ lạ được người dùng gửi."/>

*Ví dụ về các yêu cầu TTS kỳ lạ được người dùng gửi.*
</center>

Đôi khi người dùng chỉ cố gắng phá vỡ bot bằng cách nhập những thứ như: chuỗi quá dài, ký tự đặc biệt, biểu tượng cảm xúc, URL, v.v.
Đây là một ví dụ cổ điển về việc mọi người kiểm tra giới hạn của phần mềm, và thực sự giúp chúng tôi đảm bảo rằng các dịch vụ của chúng tôi mạnh mẽ và có thể xử lý bất kỳ đầu vào nào mà người dùng đưa vào.

Những lúc khác, người dùng tìm thấy sự giải trí bằng cách khiến dịch vụ TTS nói những điều tục tĩu và xúc phạm nhất mà họ có thể nghĩ ra.
Trong nhật ký TTS, tôi nghĩ tôi đã thấy mọi từ chửi thề mà tôi biết (và có thể một số từ tôi chưa từng nghe trước đây), những lời lẽ phân biệt chủng tộc và nội dung tình dục rõ ràng.

## Vấn đề đạo đức

Thật không may, có nhiều cách mà ứng dụng chuyển văn bản thành giọng nói có thể được sử dụng một cách không mong muốn: chẳng hạn như để quảng bá lời nói căm thù hoặc bắt nạt trên mạng.
Ngoài ra, trong khi các đoạn âm thanh được tổng hợp từ một mô hình, dữ liệu để đào tạo mô hình đến từ một người thật và đầu ra từ một mô hình tốt có thể nghe gần như không thể phân biệt được với bản gốc.

Vì vậy, những điểm này, cùng với cách chúng tôi đã thấy người dùng thực sự sử dụng (hoặc lạm dụng) dịch vụ TTS của chúng tôi, đặt ra một số câu hỏi rất quan trọng cho Seasalt.ai với tư cách là một công ty và Bot Discord SeaVoice:

- *Với tư cách là một công ty, chúng tôi có muốn sản phẩm của mình được sử dụng theo những cách có khả năng gây khó chịu hoặc có hại không?*
- *Diễn viên lồng tiếng có quyền gì đối với cách giọng nói của họ được sử dụng trong các ứng dụng chuyển văn bản thành giọng nói?*
- *Chúng tôi có quyền hoặc trách nhiệm kiểm duyệt cách dịch vụ của chúng tôi được sử dụng không?*

Những câu hỏi này không thể được trả lời, hoặc thậm chí được khám phá đầy đủ, trong một bài đăng blog duy nhất.
Tuy nhiên, công ty cảm thấy có nghĩa vụ phải liên tục xem xét các vấn đề này khi chúng tôi tiến hành dự án Discord của mình và tiếp tục làm việc với các diễn viên lồng tiếng của chúng tôi.

Cảm ơn bạn đã quan tâm đến dự án Bot Discord và Trí tuệ giọng nói của chúng tôi! Bạn có thể tìm hiểu thêm về sản phẩm STT của chúng tôi trên [Trang chủ Chuyển giọng nói thành văn bản](https://suite.seasalt.ai/tts) của chúng tôi. Để được demo trực tiếp một trong các sản phẩm Trí tuệ giọng nói của chúng tôi, hãy điền vào [Biểu mẫu Đặt lịch demo](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting).

Trên Discord, bạn có thể tìm hiểu thêm về bot của chúng tôi và thêm nó vào máy chủ của bạn từ [Wiki Bot Discord SeaVoice](https://wiki.seasalt.ai/seavoice/discord/6-community/). Ngoài ra, hãy thoải mái tham gia [Máy chủ Discord SeaVoice chính thức](https://discord.gg/dfAYfwBQ) của chúng tôi.

<center>
<iframe src="https://discordapp.com/widget?id=919037515514654721&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
</center>
`;export{n as default};

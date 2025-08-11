const n=`---
title: "Chuyển lời nói thành văn bản trên Discord: Nghiên cứu điển hình về Bot Discord STT"
metatitle: "Chuyển lời nói thành văn bản trên Discord: Nghiên cứu điển hình về Bot Discord STT"
date: 2023-01-23 11:25:00-08:00
draft: false
author: Kim Dodds
description: "Trong blog này, chúng tôi sẽ thảo luận về những phát hiện của mình về cách người dùng Discord thực sự sử dụng dịch vụ SeaVoice sau khi xem xét dữ liệu chuyển lời nói thành văn bản xác thực trong vài tuần."
weight: 1
tags:
  - SeaVoice
  - Discord
image: images/blog/30-stt-case-study/discord-stt-bot-case-study.jpg
canonicalURL: /blog/speech-to-text-discord-case-study/
url: /blog/speech-to-text-discord-case-study/
---

*Sau khi ra mắt SeaVoice, một trong những bot chuyển văn bản thành giọng nói và chuyển giọng nói thành văn bản nhanh nhất và chính xác nhất trên Discord, chúng tôi muốn hiểu cách người dùng thực sự tương tác với các dịch vụ. Trong blog này, chúng tôi sẽ thảo luận về những phát hiện của mình sau khi xem xét dữ liệu người dùng chuyển giọng nói thành văn bản thực tế trong vài tuần.*

# SeaVoice: Bot Discord chuyển văn bản thành giọng nói & chuyển giọng nói thành văn bản

Discord, là một nền tảng chủ yếu được sử dụng để kết hợp trò chuyện dựa trên âm thanh và văn bản, là một sân thử nghiệm tuyệt vời cho các dịch vụ trí tuệ giọng nói và xử lý ngôn ngữ tự nhiên. Chúng tôi đã triển khai Bot SeaVoice, được trang bị các lệnh chuyển văn bản thành giọng nói và chuyển giọng nói thành văn bản, lên Discord vào tháng 8 năm 2022. Để tìm hiểu thêm về cách bot hoạt động hoặc xem bản demo video ngắn, bạn có thể truy cập [wiki Bot SeaVoice](https://wiki.seasalt.ai/seavoice/discord/1-intro-discord-bot/). Vào tháng 11 cùng năm, chúng tôi đã phát hành một phiên bản mới với những cải tiến đáng kể về backend (như được mô tả trong bài đăng blog của chúng tôi: [Bot Discord SeaVoice: Cải tiến backend & ổn định](https://seasalt.ai/blog/27-seavoice-discord-backend-improvements/)) cho phép chúng tôi ghi lại dữ liệu ẩn danh về cách người dùng tương tác với bot SeaVoice. Trong blog cuối cùng của chúng tôi ([Nghiên cứu điển hình về Bot Discord TTS](https://seasalt.ai/blog/29-discord-tts-case-study/)) chúng tôi đã phân tích dữ liệu người dùng trong 1 tháng từ lệnh chuyển văn bản thành giọng nói. Để tiếp nối, trong bài đăng này, chúng tôi sẽ xem xét dữ liệu người dùng chuyển giọng nói thành văn bản trong khoảng 3 tuần.

## Sử dụng STT SeaVoice

Tại thời điểm viết bài, Bot SeaVoice đã được thêm vào gần 900 máy chủ! Khoảng 260 máy chủ với tổng số hơn 600 người tham gia đã thực sự thử lệnh STT ít nhất một lần. Trong 3 tuần qua, chúng tôi đã tổ chức gần 1.800 phiên STT và xuất ra tổng cộng **hơn nửa triệu dòng chuyển đổi**.

<center>
<img src="/images/blog/30-stt-case-study/discord-stt-sessions-per-day.png" alt="Các phiên chuyển lời nói thành văn bản hàng ngày của Bot Discord SeaVoice trong 3 tuần."/>

*Các phiên chuyển lời nói thành văn bản hàng ngày của Bot Discord SeaVoice trong 3 tuần.*
</center>

Nếu chúng ta nhìn vào tổng số phiên STT mỗi ngày, chúng tôi nhận thấy rằng nó có thể dao động từ ít nhất 40 đến hơn 140 (với mức trung bình khoảng 70). Chúng ta cũng có thể xem xét tổng số dòng chuyển đổi mà chúng tôi đang tạo ra. Vào ngày chậm nhất, chúng tôi tạo ra ít nhất 10 nghìn dòng, tuy nhiên, vào một ngày bận rộn, chúng tôi đã tạo ra hơn 40 nghìn dòng. Để đưa ra một cái nhìn tổng quan, vào ngày 18 tháng 1, chúng tôi đã tổ chức 102 phiên STT với tổng số chỉ dưới 30 nghìn dòng chuyển đổi; điều đó tương đương với gần 40 giờ ghi âm.

Chúng tôi cũng nhận thấy rằng trong khi hầu hết các phiên được sử dụng cho các cuộc trò chuyện ngắn hơn (trung bình 57 dòng mỗi phiên), có một số lượng đáng kể các phiên rất dài làm tăng mức trung bình lên 650 dòng mỗi phiên. Phiên dài nhất của chúng tôi là hơn 30 nghìn dòng, nhiều hơn giá trị trung bình của một ngày! Cuối cùng, chúng tôi cũng đã xem xét có bao nhiêu người dùng có xu hướng tham gia vào mỗi phiên và nhận thấy rằng thường có 4 đến 5 người dùng trong mỗi phiên - tuy nhiên, chúng tôi đã từng sử dụng bot để hỗ trợ chuyển đổi trực tiếp tại một hội thảo ảo có 45 người tham gia!

<center>
<img src="/images/blog/30-stt-case-study/discord-transcription-lines-per-day.png" alt="Các dòng được chuyển đổi bởi Bot Discord SeaVoice mỗi ngày trong 3 tuần."/>

*Các dòng được chuyển đổi bởi Bot Discord SeaVoice mỗi ngày trong 3 tuần.*
</center>

Trong khi phần lớn các máy chủ chưa sử dụng phiên STT nhiều hơn một vài lần, có khá nhiều máy chủ sử dụng dịch vụ này rộng rãi. Kể từ khi chúng tôi bắt đầu ghi lại dữ liệu sử dụng STT vào cuối tháng 12, tổng số phiên trung bình mỗi máy chủ là khoảng 7; tuy nhiên, máy chủ số 1 của chúng tôi đã ghi lại 131 phiên - Đó là trung bình hơn 6 phiên mỗi ngày! Máy chủ đó đã chuyển đổi hơn 150 nghìn dòng lời nói chỉ trong 3 tuần! Có lẽ ấn tượng hơn thế, người dùng số 1 của chúng tôi đến từ cùng một máy chủ và đã có hơn 60 nghìn dòng lời nói của riêng họ được chuyển đổi!

## Quan sát

### Tại sao mọi người sử dụng chuyển lời nói thành văn bản

<center>
<img src="/images/blog/30-stt-case-study/discord-audio-transcript-download-user-quote.jpg" alt="Một người dùng bot Discord SeaVoice bày tỏ sự phấn khích về các tệp âm thanh và chuyển đổi được lưu trữ."/>

*Một người dùng bot Discord SeaVoice bày tỏ sự phấn khích về các tệp âm thanh và chuyển đổi được lưu trữ.*
</center>

Vì vậy, câu hỏi đầu tiên của chúng tôi sau khi xem dữ liệu sử dụng là: **tại sao những người dùng thường xuyên lại sử dụng chuyển lời nói thành văn bản ngay từ đầu?**

Chúng tôi đã xem xét cơ sở dữ liệu để tìm một số giải thích. Tuy nhiên, việc tìm ra những giải thích cụ thể về lý do người dùng sử dụng dịch vụ STT thay vì dịch vụ TTS lại khó hơn. Rõ ràng mọi người cảm thấy cần phải giải thích cho những người khác trong cuộc trò chuyện tại sao họ sử dụng TTS, nhưng ít hơn với STT. Dù sao đi nữa, tôi đã tìm thấy một số bản chuyển đổi thú vị đã cung cấp một số hiểu biết về lý do người dùng quyết định sử dụng dịch vụ STT.

__*Tại sao người dùng sử dụng STT:*__

- “Đây là lý do tại sao bản chuyển đổi được sử dụng vì tôi có thể xem những thứ mà tôi đã bỏ lỡ.”
- “[người dùng] bị khó nghe, vì vậy anh ấy có một bot chuyển đổi nó”
- “[người dùng] đột kích với họ và họ sử dụng nó để chuyển đổi mọi thứ, nhưng sau đó [người dùng] nói, ồ, chúng ta cũng có thể sử dụng nó cho ******* D và D”
- “Tôi không thể chờ đợi để quay lại và đọc một số bản chuyển đổi này sau [...] Tôi muốn nghe lại bản ghi âm đó và xem lại bản chuyển đổi đó”
- “Nếu chúng ta có các cuộc họp ở đây, thì chúng ta có thể đưa bản chuyển đổi của cuộc họp vào AI”
- “Trong một cuộc họp với mọi người, thật tuyệt khi thực sự thấy một bản chuyển đổi”
- “[những người] không có trong cuộc trò chuyện hoặc những người trong cộng đồng, nhưng không phải là một phần của trò chuyện thoại, nhưng họ quyết định xem và đọc”

Vì vậy, nói chung, có vẻ như hầu hết người dùng đều thích sự tiện lợi của việc có một bản chuyển đổi trực tiếp có thể giúp họ theo dõi cuộc trò chuyện và lấp đầy bất kỳ khoảng trống nào mà họ đã bỏ lỡ. Điều này đặc biệt đúng đối với những người dùng bị suy giảm thính lực hoặc gặp khó khăn về âm thanh/kết nối. Đối với một số người dùng, lợi ích lớn nhất là giữ một bản ghi âm thanh và văn bản vĩnh viễn của cuộc trò chuyện của họ; điều này có thể đặc biệt áp dụng cho các trường hợp sử dụng như duy trì nhật ký phiên Dungeons & Dragons hoặc giữ hồ sơ các cuộc họp quan trọng.

Vì nhiều người dùng không nói rõ lý do tại sao họ sử dụng dịch vụ STT, nên việc hiểu họ đang làm gì khi sử dụng bot cũng có vẻ hữu ích. Xem xét các bản chuyển đổi từ người dùng đã cho tôi gợi ý về các hoạt động mà họ đang thực hiện trong khi chuyển đổi:

__*Người dùng đang làm gì khi sử dụng STT:*__

- Chỉ trò chuyện
    - Chơi game:
    - Chơi game thông thường
    - Chơi game nâng cao (ví dụ: phối hợp nhóm MMO, Massive Multiplayer Online, đột kích)
- Trò chơi nhập vai (Dungeons & Dragons)
- Phát trực tiếp / ghi nội dung
- Thảo luận về công việc học tập / chuyên môn / tình nguyện

Phần lớn các bản chuyển đổi thuộc các danh mục “chỉ trò chuyện” và “chơi game thông thường”. Như chúng ta đã thấy ở trên, tôi nghĩ hầu hết người dùng trong trường hợp này sử dụng bot để cải thiện khả năng truy cập của kênh thoại Discord và/hoặc tận hưởng sự tiện lợi của việc xem bản chuyển đổi trực tiếp để lấp đầy bất kỳ khoảng trống nào mà họ đã bỏ lỡ trong cuộc trò chuyện. Trong một số trường hợp (như khi được sử dụng cho các cuộc đột kích MMO), các cuộc thảo luận về trò chơi rất phức tạp và người dùng đang phối hợp với nhau trong thời gian thực; các bản chuyển đổi trực tiếp có thể cực kỳ hữu ích cho sự thành công của nhóm vì người dùng có thể tham khảo các bản chuyển đổi khi họ đang chơi.

<center>
<img src="/images/blog/30-stt-case-study/discord-stt-for-mmo-raid.jpg" alt="Ví dụ về cuộc thảo luận phức tạp trong một cuộc đột kích MMO."/>

*Ví dụ về cuộc thảo luận phức tạp trong một cuộc đột kích MMO.*
</center>

Có vẻ như cũng có rất nhiều người dùng đang sử dụng bot để chuyển đổi các cuộc trò chuyện nghiêm túc hơn như các cuộc họp trường học, chuyên nghiệp và/hoặc cộng đồng tình nguyện. Chúng tôi cũng đã sử dụng bot của mình để chuyển đổi một hội nghị công nghệ trực tuyến, [UnTechCon](https://gfsc.studio/2022/11/14/announcing-untechcon.html). Trong những trường hợp này, các tệp ghi âm và chuyển đổi cuối cùng có thể rất hữu ích cho người dùng để xem lại sau cuộc họp. Một ví dụ thú vị cuối cùng mà tôi tìm thấy là một người dùng đang ghi lại nội dung cho luồng của họ. Vì bản chuyển đổi cuối cùng đi kèm với dấu thời gian, người dùng có thể tải tệp chuyển đổi lên làm phụ đề cho nội dung âm thanh hoặc video đã ghi của họ.

<center>
<img src="/images/blog/30-stt-case-study/discord-stt-accessibility-user-quote.jpg" alt="Một người dùng SeaVoice bày tỏ lòng biết ơn vì đã làm cho các kênh thoại Discord dễ tiếp cận hơn."/>

*Một người dùng SeaVoice bày tỏ lòng biết ơn vì đã làm cho các kênh thoại Discord dễ tiếp cận hơn.*
</center>

Nhưng bất kể lý do chính xác họ sử dụng dịch vụ STT là gì, nhiều người dùng đã bày tỏ sự phấn khích rằng họ có thể tham gia vào các cuộc trò chuyện kênh thoại khi họ không thể. Chúng tôi tin rằng dịch vụ STT làm cho các kênh thoại Discord dễ tiếp cận hơn, và đó là lý do chính khiến người dùng thường xuyên của chúng tôi tiếp tục sử dụng dịch vụ.

### Bình luận về Bot Discord SeaVoice

Một chủ đề thú vị khác được tìm thấy trong nhật ký là bình luận về chính bot. May mắn thay, chúng tôi đã thấy một số bình luận rất tích cực về bot và hiệu suất của nó.

<center>
<img src="/images/blog/30-stt-case-study/discord-seavoice-transcription-accuracy.png" alt="Một người dùng SeaVoice bình luận về độ chính xác của bản chuyển đổi."/>

*Một người dùng SeaVoice bình luận về độ chính xác của bản chuyển đổi.*
</center>

Chúng tôi cũng tìm thấy một số phản hồi mang tính xây dựng.

<center>
<img src="/images/blog/30-stt-case-study/discord-stt-accuracy-british-accent.png" alt="Một người dùng SeaVoice đề xuất cải thiện cho giọng Anh."/>

*Một người dùng SeaVoice đề xuất cải thiện cho giọng Anh.*
</center>

<center>
<img src="/images/blog/30-stt-case-study/discord-stt-siri-accent-accuracy-comparison.png" alt="Một người dùng so sánh hiệu suất của SeaVoice trên tiếng Anh có giọng với Siri."/>

*Một người dùng so sánh hiệu suất của SeaVoice trên tiếng Anh có giọng với Siri.*
</center>

Phần lớn các bình luận mang tính xây dựng liên quan đến việc bot không hoạt động tốt với tiếng Anh giọng không phải Mỹ; đặc biệt người dùng đã đề cập đến giọng Anh và Scotland. Đối với tương lai của các dịch vụ STT của chúng tôi, chúng tôi có thể nỗ lực đáng kể để cải thiện khả năng nhận dạng giọng nói của chúng tôi cho các giọng tiếng Anh khác nhau. Tất nhiên, tiếng Anh không phải là ngôn ngữ duy nhất mà người dùng của chúng tôi nói, vì vậy chúng tôi cũng có kế hoạch thêm nhiều hỗ trợ ngôn ngữ cho bot. Trên thực tế, chúng tôi hiện đang hoàn thiện tích hợp STT và TTS tiếng Quan thoại Đài Loan của mình, và sẽ sớm phát hành phiên bản cập nhật của bot.

## Quyền riêng tư, độ nhạy dữ liệu & nội dung có khả năng gây khó chịu

Phát triển AI được bao quanh bởi một loạt các vấn đề đạo đức. Các mô hình của chúng tôi cần một lượng lớn dữ liệu người dùng thực để hoạt động tốt, *nhưng làm thế nào để chúng tôi thu thập dữ liệu đó một cách đạo đức trong khi vẫn tôn trọng quyền riêng tư của người dùng?* Các mô hình chỉ học dựa trên dữ liệu được cung cấp cho chúng và do đó có những thành kiến (có khả năng không lường trước được); *vậy làm thế nào để chúng tôi có thể đảm bảo các mô hình của chúng tôi phục vụ tất cả người dùng của chúng tôi tốt như nhau?* Hơn nữa, các mô hình của chúng tôi không có khái niệm về sự chấp nhận xã hội và có thể tạo ra kết quả mà một số người dùng thấy khó chịu. Như một trong những người dùng của chúng tôi đã nói một cách hùng hồn: *“Liệu có phải là phân biệt chủng tộc nếu bot làm điều đó không, đó là câu hỏi”*.

<center>
<img src="/images/blog/30-stt-case-study/stt-accidental-racial-slur.png" alt="Một người dùng SeaVoice chỉ ra một bản chuyển đổi không chính xác có vấn đề."/>

*Một người dùng SeaVoice chỉ ra một bản chuyển đổi không chính xác có vấn đề.*
</center>

Lý do tôi đưa ra những điểm này là vì một vài bản chuyển đổi đáng lo ngại trong nhật ký. Vấn đề đầu tiên là bot đôi khi chuyển đổi nội dung gây khó chịu. Trong ví dụ trên, bot vô tình chuyển đổi tên người dùng của ai đó thành một từ ngữ phân biệt chủng tộc. Rõ ràng đây là một lỗi ở phía bot có thể gây khó chịu cho người dùng của chúng tôi và nên được điều tra. Nhưng điều này dẫn đến nhiều câu hỏi hơn: *chúng ta nên vạch ra ranh giới giữa sự xúc phạm và tổn hại ở đâu?*

<center>
<img src="/images/blog/30-stt-case-study/discord-transcription-censor.png" alt="Một người dùng SeaVoice bình luận về việc cố gắng kiểm duyệt một số từ nhất định khỏi bản chuyển đổi."/>

*Một người dùng SeaVoice bình luận về việc cố gắng kiểm duyệt một số từ nhất định khỏi bản chuyển đổi.*
</center>

Chà, để bắt đầu, chúng tôi đã quyết định trao quyền đó cho người dùng. Một trong những tính năng tiếp theo mà chúng tôi sẽ phát triển là kiểm duyệt TTS và STT có thể cấu hình. Điều này sẽ cho phép các máy chủ tùy chọn áp dụng kiểm duyệt cho các từ chửi thề, nội dung tình dục, từ ngữ phân biệt chủng tộc, v.v.

<center>
<img src="/images/blog/30-stt-case-study/discord-careful-transcript-content.png" alt="Một người dùng SeaVoice cảnh báo một người tham gia khác phải ý thức rằng những gì họ nói sẽ xuất hiện trong bản chuyển đổi."/>

*Một người dùng SeaVoice cảnh báo một người tham gia khác phải ý thức rằng những gì họ nói sẽ xuất hiện trong bản chuyển đổi.*
</center>

Điều thú vị là một vấn đề liên quan khác mà chúng tôi thấy là người dùng tự kiểm duyệt để tránh một số thứ xuất hiện trong bản chuyển đổi. Điều này phổ biến một cách đáng ngạc nhiên, và tôi đã thấy nhiều trường hợp người dùng giải thích rằng họ không muốn bot chuyển đổi những gì họ sắp nói nên họ dừng lại và sau đó khởi động lại STT. Đây là một mối quan tâm hoàn toàn hợp lệ ở phía người dùng nếu ví dụ họ không muốn bot chuyển đổi một số thông tin nhạy cảm.

<center>
<img src="/images/blog/30-stt-case-study/discord-stt-pause-deafen.png" alt="Cách tạm dừng STT bằng cách làm cho bot bị điếc."/>

*Cách tạm dừng STT bằng cách làm cho bot bị điếc.*
</center>

Tôi không chắc có cách nào chúng tôi có thể cải thiện trải nghiệm người dùng trong trường hợp này, nhưng tôi khuyên người dùng rằng họ có thể “làm cho bot bị điếc” tạm thời để ngừng gửi bất kỳ âm thanh nào đến bot. Trong trường hợp này, bot sẽ không nhận được dữ liệu âm thanh nào cho đến khi nó được “bỏ điếc”, vì vậy người dùng về cơ bản có thể tạm dừng phiên STT mà không cần dừng và bắt đầu một phiên mới.

<center>
<img src="/images/blog/30-stt-case-study/discord-stt-opt-out-mute.jpg" alt="Một người dùng SeaVoice bình luận về sự khó chịu của người tham gia khác với bot."/>

*Một người dùng SeaVoice bình luận về sự khó chịu của người tham gia khác với bot.*
</center>

Cuối cùng, vấn đề cuối cùng mà chúng tôi thấy là một số người dùng cảm thấy rất khó chịu khi bot chuyển đổi đến mức họ chủ động tránh nói chuyện trong kênh thoại khi bot có mặt. Đây là ***hoàn toàn ngược lại*** với mục tiêu của chúng tôi, đó là làm cho các kênh thoại Discord dễ tiếp cận hơn cho mọi người. Mặc dù chúng tôi hy vọng người dùng sẽ chấp nhận [chính sách quyền riêng tư](https://seasalt.ai/privacy) của chúng tôi và tin tưởng chúng tôi sử dụng dữ liệu của họ một cách có trách nhiệm, chúng tôi hoàn toàn tôn trọng quyền riêng tư của mọi người. Do đó, **tính năng tiếp theo mà chúng tôi sẽ triển khai là cài đặt từ chối STT**. Điều này sẽ cho phép bất kỳ người dùng nào tự loại trừ khỏi bản ghi và chuyển đổi STT, và dữ liệu âm thanh của họ sẽ không được bot truy cập hoặc thu thập dưới bất kỳ hình thức nào.

Chúng tôi hy vọng rằng các tính năng được lên kế hoạch này sẽ cho phép chúng tôi tiếp tục làm cho các kênh thoại dễ tiếp cận hơn cho mọi người trong khi vẫn trao quyền cho người dùng tương tác với Bot SeaVoice ở mức độ mà họ cảm thấy thoải mái. Trong tương lai, chúng tôi sẽ tiếp tục nỗ lực chủ động giải quyết những vấn đề đầy thách thức này để làm cho SeaVoice trở nên tốt nhất có thể!

Cảm ơn bạn đã quan tâm đến Bot Discord của chúng tôi và cảm ơn người dùng của chúng tôi đã tiếp tục hỗ trợ! Bạn có thể tìm hiểu thêm về sản phẩm STT của chúng tôi trên [Trang chủ Chuyển lời nói thành văn bản của SeaVoice](https://suite.seasalt.ai/tts). Để có bản demo trực tiếp một đối một về bất kỳ sản phẩm Trí tuệ giọng nói nào của chúng tôi, hãy điền vào [Biểu mẫu Đặt lịch demo](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting).

Nếu bạn chưa thử bot SeaVoice, bạn có thể tìm hiểu thêm về bot của chúng tôi và thêm nó vào máy chủ của bạn từ [Wiki Bot Discord SeaVoice](https://wiki.seasalt.ai/seavoice/discord/1-intro-discord-bot/). Ngoài ra, hãy thoải mái tham gia [Máy chủ Discord SeaVoice chính thức](https://discord.gg/dfAYfwBQ) của chúng tôi.

<center>
<iframe src="https://discordapp.com/widget?id=919037515514654721&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
</center>
`;export{n as default};

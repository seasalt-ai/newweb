const n=`---
title: "Trao cho Trung tâm liên lạc của bạn tiếng nói riêng với SeaX Voice Intelligence"
metatitle: "Hãy để Trung tâm liên lạc của bạn nói chuyện với SeaX Voice Intelligence"
date: 2022-08-02 17:24:00-07:00
modified_date: 2025-07-29 20:45:17+00:00
draft: false
author: Kim Dodds, Cody Kim, Xuchen Yao, Guoguo Chen
description: "Trong blog này, chúng tôi sẽ chỉ ra cách các công cụ chuyển văn bản thành giọng nói và chuyển giọng nói thành văn bản nội bộ của Seasalt.ai có thể nâng cao các khía cạnh khác nhau của nền tảng SeaX."
weight: 1
tags:
  - SeaX
image: /images/blog/21-seax-voice-intelligence/thumbnail.png
canonicalURL: /blog/seax-voice-intelligence/
url: /blog/seax-voice-intelligence/
---

*Cho đến nay trong [loạt blog SeaX](https://seasalt.ai/tags/seax/) của chúng tôi, chúng tôi đã cung cấp cho bạn cái nhìn tổng quan rộng rãi về sản phẩm chủ lực của Seasalt.ai: SeaX. Chúng tôi cũng đã thảo luận về hai tính năng chính giúp SeaX khác biệt với trung tâm cuộc gọi truyền thống: thứ nhất, SeaX là đa kênh, có nghĩa là bạn có thể tương tác dễ dàng hơn với khách hàng trên bất kỳ kênh nào, và thứ hai, nền tảng này là một trung tâm liên lạc phân tán, cho phép bạn định tuyến liền mạch các tin nhắn và cuộc gọi từ khách hàng trên khắp thế giới đến các đại lý phân tán của bạn ở các địa điểm khác nhau.*

*Bây giờ chúng tôi đã đề cập đến những điều cơ bản của nền tảng SeaX, chúng tôi sẽ chuyển sang các tính năng AI và tự động hóa tiên tiến giúp SeaX khác biệt với các trung tâm liên lạc đa kênh phân tán khác. Trong blog này, chúng tôi sẽ chỉ ra cách các công cụ chuyển văn bản thành giọng nói và chuyển giọng nói thành văn bản nội bộ của Seasalt.ai có thể nâng cao các khía cạnh khác nhau của nền tảng SeaX.*

# Mục lục
- [Giới thiệu về Trí tuệ giọng nói](#into-to-voice-intelligence)
- [Điều gì làm nên sự khác biệt của Seasalt.ai](#what-sets-seasaltai-apart)
    - [Chuyển giọng nói thành văn bản](#speech-to-text)
    - [Chuyển văn bản thành giọng nói](#text-to-speech)
- [TTS và STT trong SeaX](#tts-and-stt-in-seax)
    - [IVR giọng nói](#voice-ivr)
    - [Tin nhắn không khả dụng](#unavailable-message)
    - [Chuyển đổi trực tiếp](#live-transcription)
    - [Và hơn thế nữa...](#and-more)

# Giới thiệu về Trí tuệ giọng nói

Trí tuệ giọng nói là việc sử dụng Trí tuệ nhân tạo để phân tích và rút ra thông tin chi tiết từ dữ liệu dựa trên giọng nói. Mặc dù thập kỷ trước đã chứng kiến sự phát triển đáng kể trong các công nghệ giọng nói, nhưng việc sử dụng chúng trong môi trường doanh nghiệp vẫn còn hạn chế. Các công ty tiếp tục tích lũy hàng terabyte dữ liệu giọng nói, nhưng trong hầu hết các trường hợp, chúng không được sử dụng hết tiềm năng.

Một lý do cho điều này là dữ liệu giọng nói khó xử lý hơn các dạng dữ liệu khác, chẳng hạn như thống kê cơ bản hoặc thậm chí dữ liệu văn bản thuần túy. Dữ liệu giọng nói là duy nhất theo nhiều cách khác nhau:
1. Nó phụ thuộc vào ngôn ngữ, với các phương ngữ và giọng điệu, vì vậy rất khó để nắm bắt 100% thông tin
2. Chất lượng của nó thay đổi theo kênh (điện thoại so với VoIP, đơn âm so với âm thanh nổi), tốc độ lấy mẫu (8KHz so với 16KHz), độ chính xác biểu diễn (8bit, 16 bit, 32bit) và âm thanh môi trường như tiếng ồn xung quanh
3. Khó diễn giải hơn: từ cảm xúc của giọng nói đến nhận dạng người nói đến ngữ nghĩa của ý nghĩa

Tuy nhiên, khi được xử lý đúng cách bằng các công cụ phù hợp, trí tuệ giọng nói có thể mang lại lợi ích to lớn cho các công ty sử dụng nó. Trong số những điều khác, khả năng quản lý dữ liệu giọng nói đúng cách sẽ mở khóa khả năng sử dụng chuyển đổi giọng nói thành văn bản được cá nhân hóa, điều này có thể làm cho các cuộc trò chuyện có thể tìm kiếm, lập chỉ mục và sâu sắc, đồng thời cho phép xử lý NLP tiếp theo. Khi thu thập thêm dữ liệu, các cải tiến đối với các dịch vụ này cũng có thể thực hiện được, chẳng hạn như: tăng độ chính xác của chuyển đổi, tăng phạm vi bao phủ các trường hợp sử dụng và cung cấp các mô hình giọng nói và ngôn ngữ có thể tùy chỉnh để thích ứng với các ngôn ngữ và phương ngữ mới.

# Điều gì làm nên sự khác biệt của Seasalt.ai

Seasalt.ai cung cấp các công nghệ và sản phẩm AI truyền thông đám mây cho khách hàng doanh nghiệp.
Chúng tôi đã phát triển các công nghệ giọng nói và ngôn ngữ nội bộ cho tin nhắn văn bản
và cuộc gọi thoại trong các trung tâm liên lạc doanh nghiệp. Công cụ ngôn ngữ tự nhiên của chúng tôi hỗ trợ nhiều
ngôn ngữ tài nguyên cao và tài nguyên thấp: tiếng Miến Điện, tiếng Trung, tiếng Anh, tiếng Philippines,
tiếng Đức, tiếng Indonesia, tiếng Khmer, tiếng Lào, tiếng Mã Lai, tiếng Tây Ban Nha, tiếng Tamil, tiếng Thái, tiếng Việt, v.v.
Seasalt.ai được tài trợ mạo hiểm và được điều hành bởi một nhóm các chuyên gia hàng đầu thế giới về nhận dạng giọng nói sâu,
tổng hợp giọng nói thần kinh và đối thoại ngôn ngữ tự nhiên.

Xem video demo chuyển giọng nói thành văn bản của chúng tôi:
<iframe width="85%" height="450px" src="https://www.youtube.com/embed/Log8usX8ViE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

## Chuyển giọng nói thành văn bản

<center>
<img src="/images/blog/21-seax-voice-intelligence/STT.png" alt="Đồ họa chuyển giọng nói thành văn bản."/>
</center>

Công cụ chuyển giọng nói thành văn bản của chúng tôi nhận âm thanh giọng nói và tạo ra các bản ghi theo thời gian thực. Bắt đầu với âm thanh, chúng tôi trích xuất các đặc điểm ngữ âm, chuyển đổi các đặc điểm này thành âm vị, sau đó ánh xạ các âm vị này vào chính tả của ngôn ngữ đích. Hệ thống hiện tại của chúng tôi có khả năng chuyển đổi một số ngôn ngữ, bao gồm tiếng Anh và tiếng Trung, với nhiều ngôn ngữ khác liên tục được thêm vào.

Xem video tùy chỉnh Chuyển giọng nói thành văn bản của chúng tôi để xem cách công cụ STT của Seasalt có thể được tùy chỉnh cho bất kỳ miền nào:
<iframe width="85%" height="450px" src="https://www.youtube.com/embed/1YEU6mexzWQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

## Chuyển văn bản thành giọng nói

<center>
<img src="/images/blog/21-seax-voice-intelligence/TTS.png" alt="Đồ họa chuyển văn bản thành giọng nói."/>
</center>

Chuyển văn bản thành giọng nói là quá trình tổng hợp giọng nói con người thực tế với ngữ điệu và nhịp điệu tự nhiên chỉ từ văn bản. Mô hình của chúng tôi lấy văn bản thông thường, dịch văn bản này thành âm vị và sau đó chuyển đổi âm vị thành âm thanh trong khi dự đoán cao độ, thời lượng và âm lượng phù hợp ở mỗi bước thời gian để có trải nghiệm TTS sống động nhất có thể. Nếu kết quả cuối cùng không hoàn hảo, chúng tôi cung cấp khả năng điều chỉnh âm thanh tổng hợp bao gồm cách phát âm từ, tạm dừng và nhấn mạnh.

Xem video demo tùy chỉnh Chuyển văn bản thành giọng nói của chúng tôi để xem cách đầu ra công cụ TTS của Seasalt có thể được tùy chỉnh để cung cấp giọng nói tổng hợp sống động như thật:

<iframe width="85%" height="450px" src="https://www.youtube.com/embed/GJCOhTtImp8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

Bạn cũng có thể kiểm tra [trang TTS](https://suite.seasalt.ai/tts) trên trang web của chúng tôi để nghe các ví dụ về một số giọng nói tổng hợp của chúng tôi, bao gồm Tom Hanks, David Attenborough và Reese Witherspoon.

# TTS và STT trong SeaX

## IVR giọng nói

<center>
<img src="/images/blog/21-seax-voice-intelligence/flow.png" alt="Luồng IVR giọng nói sử dụng công cụ chuyển giọng nói thành văn bản của Seasalt.ai để chuyển đổi thời gian thực và định tuyến cuộc gọi."/>

*Luồng IVR giọng nói sử dụng công cụ chuyển giọng nói thành văn bản của Seasalt.ai để chuyển đổi thời gian thực và định tuyến cuộc gọi.*
</center>

Trí tuệ giọng nói có thể bắt đầu hỗ trợ trước khi các cuộc gọi được đưa lên nền tảng SeaX bằng cách đảm bảo rằng các cuộc gọi được định tuyến đến đúng nơi và thu thập thông tin quan trọng trước khi chuyển cuộc gọi cho một đại lý. SeaX sử dụng Twilio Studio để tùy chỉnh luồng định tuyến cuộc gọi và tin nhắn. Nhưng chúng tôi cũng có thể tích hợp công cụ chuyển giọng nói thành văn bản của mình vào luồng IVR để cho phép khách hàng sử dụng ngôn ngữ tự nhiên để định tuyến cuộc gọi của họ (thay vì trải nghiệm truyền thống “nhấn 1 để…”). Ngoài ra, nếu công ty của bạn quan tâm đến việc sử dụng chatbot để tương tác với khách hàng, chúng tôi có thể tiến thêm một bước bằng cách cung cấp cho chatbot của bạn một giọng nói để nói chuyện với khách hàng qua điện thoại bằng công cụ chuyển văn bản thành giọng nói của chúng tôi.

## Tin nhắn không khả dụng

<center>
<img src="/images/blog/21-seax-voice-intelligence/unavailable-message.png" alt="Cấu hình tin nhắn không khả dụng của SeaX sử dụng chuyển văn bản thành giọng nói."/>

*Cấu hình tin nhắn không khả dụng của SeaX sử dụng chuyển văn bản thành giọng nói.*
</center>

Công nghệ chuyển văn bản thành giọng nói của chúng tôi cũng cho phép các tin nhắn thoại có thể tùy chỉnh cao. Ví dụ, chúng có thể được kích hoạt khi khách hàng gọi đến sau giờ làm việc bình thường, hoặc nếu khách hàng cần được giữ máy trong khi chờ đợi một đại lý có sẵn.

## Chuyển đổi trực tiếp

<center>
<img src="/images/blog/21-seax-voice-intelligence/live-transcription.jpg" alt="Chuyển đổi cuộc gọi trực tiếp với phân tích được hiển thị cho đại lý trên SeaX."/>

*Chuyển đổi cuộc gọi trực tiếp với phân tích được hiển thị cho đại lý trên SeaX.*
</center>

Khi khách hàng đang trong cuộc gọi với một đại lý, công cụ chuyển giọng nói thành văn bản của chúng tôi cung cấp các bản ghi chính xác theo thời gian thực của cuộc trò chuyện để đại lý tham khảo. Điều này cho phép đại lý tham khảo các điểm trước đó trong cuộc trò chuyện và/hoặc kiểm tra lại sự hiểu biết của họ về những gì khách hàng đã nói. Ngoài ra, các bản ghi này cực kỳ hữu ích cho các ứng dụng hạ nguồn như trích xuất chủ đề, trích xuất hành động, tóm tắt, phân tích cuộc họp, v.v.

## Và hơn thế nữa...

Trên đây chỉ là một vài cách mà SeaX tích hợp trí tuệ giọng nói tiên tiến để giảm thời gian chờ, cải thiện hiệu suất đại lý và mang lại trải nghiệm liền mạch tổng thể cho cả khách hàng và đại lý. Để tìm hiểu thêm về các tính năng nâng cao đi kèm với nền tảng SeaX, hãy theo dõi các bài đăng blog tiếp theo của chúng tôi, bao gồm cơ sở kiến thức AI, quản lý trường hợp và SMS hàng loạt. Để nhận bản demo cá nhân và thảo luận về cách nền tảng SeaX có thể đáp ứng nhu cầu kinh doanh cụ thể của bạn, hãy điền vào [biểu mẫu Đặt lịch demo](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting) của chúng tôi.
`;export{n as default};

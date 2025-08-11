const n=`---
title: "Đưa khách hàng từ mọi kênh về một nơi với giao tiếp đa kênh SeaX"
metatitle: "Hợp nhất liên hệ khách hàng với giao tiếp đa kênh SeaX"
date: 2022-07-15 13:56:54-07:00
draft: false
author: Kim Dodds
description: "Trong blog này, chúng tôi tập trung vào một trong những giao tiếp đa kênh của SeaX, cho phép các tin nhắn của người dùng từ bất kỳ kênh nào được hiển thị trên nền tảng SeaX."
weight: 1
tags:
  - SeaX
image: images/blog/19-seax-omnichannel-communication/0-thumbnail.png
canonicalURL: /blog/seax-omnichannel-communication/
url: /blog/seax-omnichannel-communication/
---

*Trong bài đăng blog trước của chúng tôi, [Chào mừng đến với SeaX, một Trung tâm liên lạc đám mây hợp tác](https://seasalt.ai/blog/18-seax-collaborative-cloud-contact-center-introduction/), chúng tôi đã giới thiệu giải pháp trung tâm liên lạc đám mây hợp tác của mình, SeaX. Trong khi bài đăng blog đầu tiên của chúng tôi đã cung cấp một cái nhìn tổng quan toàn diện về chức năng cơ bản và các tính năng nâng cao hơn của SeaX, các bài đăng tiếp theo của chúng tôi sẽ đi sâu hơn vào một số tính năng riêng lẻ làm cho SeaX nổi bật. Trong bài đăng này, chúng tôi sẽ xem xét kỹ hơn về hỗ trợ đa kênh của SeaX và xem cách các cuộc gọi và tin nhắn từ các kênh khác nhau được hiển thị trên nền tảng SeaX.*

# Mục lục
- [Giao tiếp đa kênh là gì?](#what-is-omnichannel-communication)
- [Vòng đời tin nhắn](#message-lifecycle)
    - [Kênh](#channel)
    - [Định tuyến tin nhắn](#message-routing)
    - [TaskRouter](#taskrouter)
    - [Nền tảng SeaX](#seax-platform)
- [Các kênh được hỗ trợ](#supported-channels)

# Giao tiếp đa kênh là gì?

Để bắt đầu, "đa kênh" thực sự có nghĩa là gì? Để phân tích nó, "omni" là tiền tố có nghĩa là "tất cả", và "kênh" là các nền tảng khác nhau mà qua đó bạn có thể tương tác với khách hàng của mình. Vì vậy, đơn giản là "giao tiếp đa kênh" có nghĩa là khả năng giao tiếp thông qua bất kỳ và tất cả các kênh có sẵn. Và hơn thế nữa, giao tiếp đa kênh có nghĩa là trải nghiệm giữa các kênh là liền mạch. Về phía đại lý, giao tiếp từ tất cả các kênh được trình bày trong một giao diện thống nhất. Đối với khách hàng, dữ liệu tương tác của họ được duy trì trên các kênh.

Một trung tâm cuộc gọi truyền thống thường chỉ hỗ trợ các cuộc gọi điện thoại. Các trung tâm liên lạc tiên tiến hơn kết nối với khách hàng qua nhiều kênh (như email, webchat và điện thoại) có một trung tâm liên lạc đa kênh. Tuy nhiên, chỉ vì một trung tâm liên lạc sử dụng nhiều kênh không có nghĩa là trải nghiệm của họ là liền mạch. Trong các trung tâm liên lạc đa kênh, các kênh khác nhau có thể được truy cập thông qua các nền tảng riêng lẻ và/hoặc dữ liệu khách hàng có thể không được liên kết trên các kênh. Ngược lại, trung tâm liên lạc đa kênh cho phép các đại lý theo dõi cuộc trò chuyện của khách hàng bất cứ nơi nào nó diễn ra, mà không bị khóa vào một kênh hoặc trải rộng trên hàng chục nền tảng.

<center>
<img src="/images/blog/19-seax-omnichannel-communication/1-contact-center-comparison.png" alt="So sánh tính năng: trung tâm cuộc gọi truyền thống so với trung tâm liên lạc; đa kênh so với đa kênh."/>

*So sánh tính năng: trung tâm cuộc gọi truyền thống so với trung tâm liên lạc; đa kênh so với đa kênh.*
</center>

SeaX có khả năng tích hợp với hầu hết mọi kênh, bao gồm theo mặc định: văn bản, điện thoại, webchat, Facebook và hơn thế nữa. Tất cả tin nhắn và cuộc gọi đều được hiển thị trên một nền tảng thống nhất và dữ liệu người dùng từ tất cả các kênh đều có sẵn.

Nếu bạn muốn xem demo ngay, hãy xem video ngắn của chúng tôi trình diễn giao tiếp đa kênh của SeaX. Trong phần còn lại của blog này, chúng tôi sẽ hướng dẫn bạn cách các tin nhắn và cuộc gọi được định tuyến từ các kênh khác nhau đến các đại lý trong SeaX. Chúng tôi cũng sẽ chia sẻ các kênh được hỗ trợ sẵn và thảo luận về cách SeaX có thể được mở rộng để bao gồm các kênh mới.

<iframe width="85%" height="450px" src="https://www.youtube.com/embed/usb-RK7sHlA" title="Trình phát video YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

# Vòng đời tin nhắn

SeaX được xây dựng dựa trên [Twilio Flex](https://www.twilio.com/flex), một trung tâm liên lạc dựa trên đám mây sử dụng nền tảng truyền thông đám mây của Twilio. Twilio cung cấp các khối xây dựng cơ bản cho SeaX, chẳng hạn như cơ sở hạ tầng viễn thông, định tuyến tin nhắn & tác vụ và giao diện người dùng trung tâm liên lạc cơ bản. Bây giờ hãy theo dõi vòng đời của một tin nhắn người dùng đến và xem SeaX sử dụng kiến trúc Twilio cơ bản kết hợp với các thành phần tùy chỉnh để định tuyến tin nhắn đến đại lý trực tiếp trên nền tảng SeaX.

## Kênh

<center>
<img src="/images/blog/19-seax-omnichannel-communication/2-example-message.jpg" alt="Người dùng gửi tin nhắn cho doanh nghiệp qua Google Business Messages.", style="width:50%"/>

*Gửi tin nhắn cho doanh nghiệp qua Google Business Messages.*
</center>

Hành trình của một tin nhắn bắt đầu khi người dùng viết tin nhắn và gửi nó trên một nền tảng được hỗ trợ. Ví dụ trên cho thấy ai đó đang gửi tin nhắn đến chatbot Seasalt.ai trên Google Business Messages. Google Business Messages không được Twilio hỗ trợ mặc định, vì vậy chúng tôi sử dụng một trình kết nối kênh tùy chỉnh được phát triển bởi Seasalt.ai để kết nối nền tảng Google với Twilio và SeaX.

Khi tin nhắn được gửi, nó sẽ được trình kết nối tùy chỉnh gửi đến API nhắn tin của Twilio. Tại thời điểm này, Twilio tạo một ngữ cảnh hội thoại mới cho người dùng và chuẩn bị định tuyến tin nhắn.

## Định tuyến tin nhắn

<center>
<img src="/images/blog/19-seax-omnichannel-communication/3-studio-flow.png" alt="Một Studio Flow đơn giản định tuyến tin nhắn đến chatbot hoặc đại lý trực tiếp."/>

*Một Studio Flow đơn giản định tuyến tin nhắn đến chatbot hoặc đại lý trực tiếp.*
</center>

Khi tin nhắn đã được Twilio nhận, nó cần được định tuyến đến đúng nơi. Với mục đích này, chúng tôi sử dụng [Twilio Studio Flows](https://www.twilio.com/studio) để xác định xem có nên cung cấp phản hồi tự động, chuyển tiếp tin nhắn đến chatbot, kết nối người dùng với đại lý trực tiếp hay thực hiện một hành động nào đó khác.

Trong ví dụ đơn giản được cung cấp ở trên, tất cả các tin nhắn đến sẽ được chuyển tiếp đến một chatbot trừ khi chúng chứa các từ "đại lý trực tiếp", trong trường hợp đó người dùng sẽ được chuyển đến một đại lý trực tiếp trên nền tảng SeaX.

## TaskRouter

<center>
<img src="/images/blog/19-seax-omnichannel-communication/4-taskrouter.png" alt="Sơ đồ kiến trúc TaskRouter."/>

*Sơ đồ kiến trúc TaskRouter. [Nguồn](https://twilio-cms-prod.s3.amazonaws.com/images/taskrouter-diagram.width-800.png).*
</center>

Khi một tin nhắn được chuyển đến SeaX, bước tiếp theo là quyết định đại lý nào sẽ nhận nó. [Twilio’s TaskRouter](https://www.twilio.com/taskrouter) phân phối các tác vụ như tin nhắn và cuộc gọi điện thoại đến các đại lý trong SeaX có thể xử lý chúng tốt nhất. Mỗi đại lý trong SeaX có thể được gán các kỹ năng như ngôn ngữ họ nói, bộ phận họ làm việc, liệu họ có nên xử lý khách hàng VIP, v.v. TaskRouter sẽ kiểm tra thông tin đã biết về người dùng và tin nhắn, sau đó chọn nhân viên phù hợp nhất để xử lý vấn đề. Luồng Studio từ bước trước có thể được tùy chỉnh để lấy thêm thông tin (chẳng hạn như ngôn ngữ ưu tiên) và thông tin khách hàng có thể được duy trì trên các cuộc trò chuyện và kênh để đảm bảo trải nghiệm của họ là liền mạch.

## Nền tảng SeaX

<center>
<img src="/images/blog/19-seax-omnichannel-communication/5-seax-incoming-messages.png" alt="Các cuộc gọi và tin nhắn đến được hiển thị trên nền tảng SeaX.", style="width:50%"/>

*Các cuộc gọi và tin nhắn đến được hiển thị trên nền tảng SeaX.*
</center>

Cuối cùng, tin nhắn đến sẽ được hiển thị cho đại lý thích hợp trên nền tảng SeaX. Các đại lý có thể xử lý nhiều tác vụ từ nhiều kênh cùng một lúc. Trong hình trên, một đại lý có cuộc gọi đến, tin nhắn Facebook và tin nhắn webchat. Đại lý có thể chấp nhận tác vụ hoặc từ chối để nó được chuyển đến đại lý tiếp theo có sẵn.

# Các kênh được hỗ trợ

Hy vọng bây giờ đã rõ hơn về giao tiếp đa kênh là gì và cách nó nâng cao trải nghiệm người dùng và đại lý. Câu hỏi cuối cùng là: những kênh nào thực sự được hỗ trợ sẵn?

<center>
<img src="/images/blog/19-seax-omnichannel-communication/6-channel-comparison.png" alt="So sánh kênh được hỗ trợ giữa trung tâm cuộc gọi truyền thống, Twilio Flex cơ bản và SeaX."/>

*So sánh kênh được hỗ trợ giữa trung tâm cuộc gọi truyền thống, Twilio Flex cơ bản và SeaX.*
</center>

Như đã đề cập trước đây, một trung tâm cuộc gọi truyền thống thường chỉ hỗ trợ các cuộc gọi điện thoại. Các công ty vẫn có thể tương tác với khách hàng trên mạng xã hội hoặc qua email, nhưng những tin nhắn này không được tích hợp vào một nền tảng thống nhất.

Twilio Flex, mặt khác, đặt nền tảng cho một trung tâm liên lạc đa kênh tuyệt vời. Tuy nhiên, nó có ít kênh có sẵn ngay lập tức. Ngoài các cuộc gọi điện thoại và tin nhắn văn bản, họ còn có hỗ trợ beta cho Facebook, WhatsApp và email.

SeaX được xây dựng trên Flex để thêm hỗ trợ tích hợp cho một số kênh được yêu cầu phổ biến nhất: chẳng hạn như Google Business Messages, Discord, Line và Instagram. Ngoài ra, Seasalt.ai luôn làm việc với khách hàng để đưa các kênh mới vào dòng sản phẩm SeaX. SeaX có khả năng tùy chỉnh cao và dễ dàng mở rộng - nghĩa là chúng tôi có thể làm việc với công ty của bạn để tích hợp bất kỳ kênh nào bạn muốn nhất.

Cảm ơn bạn đã dành thời gian đọc về cách trung tâm liên lạc đám mây SeaX sử dụng giao tiếp đa kênh để cung cấp trải nghiệm khách hàng và đại lý liền mạch. Vui lòng theo dõi bài đăng blog tiếp theo của chúng tôi, bài viết sẽ khám phá ý nghĩa của việc trở thành một "trung tâm liên lạc phân tán". Nếu bạn muốn tìm hiểu thêm ngay lập tức, hãy điền vào [biểu mẫu Đặt lịch demo](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting) của chúng tôi để có cái nhìn đầu tiên về nền tảng SeaX.
`;export{n as default};

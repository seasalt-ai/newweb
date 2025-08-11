const n=`---
title: "Hướng dẫn cuối cùng để bật trò chuyện trên Google Maps để kết nối với khách hàng"
metatitle: "Hướng dẫn cuối cùng để bật trò chuyện trên Google Maps"
date: 2022-04-29 20:39:13-07:00
modified_date: 2025-07-28 00:00:00+00:00
draft: false
author: Ruli Setiawati
description: "Trong blog này, chúng ta sẽ xem xét ba phương pháp khác nhau để bật Trò chuyện trên Google Maps với ba phương pháp khác nhau này để kết nối tốt hơn với khách hàng."
tags:
  - NearMe
image: images/blog/14-ultimate-guide-to-enabling-chat-on-google-maps-to-connect-with-customers/ultimate_guide_thumbnail.png
canonicalURL: /blog/enable-chat-on-google-maps-to-connect-with-customers/
url: /blog/enable-chat-on-google-maps-to-connect-with-customers/
---

*Trò chuyện trên Google Maps là một cách tuyệt vời để doanh nghiệp kết nối với khách hàng. Có nhiều cách khác nhau để bật Trò chuyện trên Google Maps: một cách thủ công với Google Business Profile, một cách tự động với Google Business Messages và một cách kết hợp những điều tốt nhất của cả hai thế giới với Near Me Messaging. Blog này sẽ hướng dẫn bạn cách bật Trò chuyện trên Google Maps bằng ba phương pháp khác nhau này.*

<center>
<img src="/images/blog/14-ultimate-guide-to-enabling-chat-on-google-maps-to-connect-with-customers/comparison_table.jpg" alt="So sánh 3 phương pháp khác nhau để triển khai Trò chuyện trên Google Maps với Google Business Profile, Google Business Messages và Near Me Messaging"/>

*So sánh 3 phương pháp khác nhau để triển khai Trò chuyện trên Google Maps với [Google Business Profile](https://www.google.com/intl/en_us/business/), [Google Business Messages](https://businessmessages.google/) và Near Me Messaging.*
</center>

# Mục lục
- [Trò chuyện trên Google Maps là gì và tại sao bạn nên bật nó](#what-is-google-maps-chat-and-why-you-should-enable-it)
- [1. Trò chuyện trên Google Maps với Google Business Profile](#1-google-maps-chat-with-google-business-profile)
    - [Hướng dẫn từng bước để bật Trò chuyện trên Google Maps với Google Business Profile](#step-1-sign-in-to-your-google-business-profile-account)
- [2. Trò chuyện trên Google Maps với Google Business Messages](#2-google-maps-chat-with-google-business-messages)
    - [Cách doanh nghiệp triển khai Google Business Messages](#how-businesses-implement-google-business-messages)
    - [Rào cản triển khai](#barriers-for-implementation)
- [3. Trò chuyện trên Google Maps với Near Me Messaging](#3-google-maps-chat-with-near-me-messaging)
    - [Lợi ích của Near Me Messaging](#benefits-of-near-me-messaging)
    - [Hướng dẫn từng bước để bật Trò chuyện trên Google Maps với Near Me Messaging](#step-by-step-guide-to-launching-your-virtual-agent-with-near-me-messaging)

# Trò chuyện trên Google Maps là gì và tại sao bạn nên bật nó

Khi bạn đang đi đến một cửa hàng, phòng tập thể dục, đại lý ô tô hoặc các doanh nghiệp khác bằng ứng dụng Google Maps, bạn có thể đã nhận thấy rằng một số trong số đó có nút trò chuyện được nhúng trong đó. Nút trò chuyện này cho phép bạn, với tư cách là chủ doanh nghiệp, giao tiếp với khách hàng của mình. Khách hàng của bạn có thể liên hệ trực tiếp với bạn qua nút trò chuyện trên Google Maps hoặc trên Google Search và bạn sẽ có thể trả lời bất cứ khi nào bạn có mặt.

<center>
<img src="/images/blog/14-ultimate-guide-to-enabling-chat-on-google-maps-to-connect-with-customers/chat_button.png" alt="Danh sách doanh nghiệp có tính năng trò chuyện được bật trên Hồ sơ Google Maps"/>

*Tính năng trò chuyện trông như thế nào trên danh sách doanh nghiệp từ ứng dụng Google Maps.*
</center>

Tại sao đây là một tính năng quan trọng đối với chủ doanh nghiệp? Đầu tiên, doanh nghiệp của bạn sẽ nổi bật giữa các doanh nghiệp khác vì bạn giúp khách hàng dễ dàng kết nối với bạn. Trên thực tế, [72% khách hàng](https://blog.avochato.com/index.php/2019/12/12/business-to-customer-communication-text-message-software) có nhiều khả năng mua sản phẩm từ một cửa hàng mà họ có thể hỏi về sản phẩm qua tin nhắn trò chuyện. Thứ hai, Google Maps đã trở thành thông tin địa phương 411 cho người tiêu dùng khi họ tìm kiếm thông tin doanh nghiệp, nhờ tất cả các loại thông tin doanh nghiệp tổng hợp (như menu, đặt chỗ, tiện nghi, điểm nổi bật, bản xem trước, hình ảnh). Google Maps đã trở thành [hệ điều hành mới cho doanh nghiệp](/blog/11-google-maps-replaces-google-my-business/).


Hiện tại, có nhiều cách khác nhau để bật Trò chuyện trên Google Maps: một cách thủ công với Google Business Profile, một cách tự động với Google Business Messages và một cách kết hợp những điều tốt nhất của cả hai thế giới với Near Me Messaging. Chúng tôi sẽ hướng dẫn bạn cách sử dụng Trò chuyện trên Google Maps với Google Business Profile và Google Business Messages, cùng với ưu và nhược điểm của chúng. Cuối cùng, chúng tôi sẽ hướng dẫn bạn cách sử dụng Trò chuyện trên Google Maps với Near Me Messaging.

# 1. Trò chuyện trên Google Maps với Google Business Profile

Google Business Profile là một công cụ cho phép doanh nghiệp tạo hồ sơ hoặc danh sách doanh nghiệp miễn phí sẽ xuất hiện trên các dịch vụ của Google như Google Search và Google Maps. Bạn có thể tham khảo các tài nguyên của Google về [cách thêm hoặc xác nhận Hồ sơ doanh nghiệp của bạn trên Google](https://support.google.com/business/answer/2911778?hl=en&co=GENIE.Platform%3DDesktop). Lợi ích của việc có danh sách Google Business Profile bao gồm:

- Thu hút khách hàng và tăng khả năng hiển thị thông qua Google Search và Google Maps
- Cung cấp thông tin cập nhật về doanh nghiệp của bạn như giờ làm việc và thuộc tính
- Xây dựng danh tiếng thông qua xếp hạng sao và đánh giá
- Thu thập thông tin chi tiết về hiệu suất tìm kiếm của bạn trên các dịch vụ của Google

Với Google Business Profile, bạn có thể bật tính năng trò chuyện trong ba bước dễ dàng sau:

## Bước 1. Đăng nhập vào tài khoản Google Business Profile của bạn.

Truy cập [trang chủ Google Business Profile](https://www.google.com/business/) và đăng nhập vào danh sách doanh nghiệp của bạn.

<center>
<img src="/images/blog/9-enable-chat-on-Google-Maps/GBP_manager_interface.png" alt="Trang Google Business Profile sau khi chủ doanh nghiệp đăng nhập"/>

*Trang Google Business Profile sau khi chủ doanh nghiệp đăng nhập.*
</center>

## Bước 2. Chuyển đến tab Tin nhắn.

Bước tiếp theo là nhấp vào tab *"Tin nhắn"* ở phía bên trái của trang.

<center>
<img src="/images/blog/9-enable-chat-on-Google-Maps/messages_tab.png" alt="Giao diện tab Tin nhắn trên Google Business Profile"/>

*Giao diện tab Tin nhắn.*
</center>

## Bước 3. Kích hoạt tính năng ‘Trò chuyện’ trên danh sách của bạn.

Nhấp vào nút *"bật trò chuyện"* như hình dưới đây.

<center>
<img src="/images/blog/9-enable-chat-on-Google-Maps/turn_on_chat.png" alt= "Nhấp vào nút bật trò chuyện sẽ kích hoạt tính năng trò chuyện"/>

*Nhấp vào nút Bật trò chuyện để kích hoạt tính năng trò chuyện.*
</center>

Ngay sau khi bạn nhấp vào nút *"Bật trò chuyện"*, một cửa sổ bật lên sẽ xuất hiện để thông báo cho bạn rằng trò chuyện của bạn đã được kích hoạt. Google cũng sẽ gửi cho bạn một thông báo qua email về tính năng trò chuyện mới được kích hoạt của bạn.

<center>
<img src="/images/blog/9-enable-chat-on-Google-Maps/chat_activated.png"/>

*Một trang bật lên thông báo cho chủ doanh nghiệp rằng tính năng trò chuyện đã được kích hoạt.*
</center>


<center>
<img src="/images/blog/9-enable-chat-on-Google-Maps/email_notifications.png" alt="Thông báo email từ Google về tính năng Trò chuyện mới được kích hoạt trên Google Maps"/>

*Thông báo email từ Google về tính năng “Trò chuyện” mới được kích hoạt.*
</center>

## Trả lời tin nhắn của khách hàng

Khi bạn kích hoạt dịch vụ Nhắn tin trên Google Business Profile, bạn có thể thấy nút Trò chuyện trên danh sách của mình và khách hàng sẽ có thể liên hệ với doanh nghiệp của bạn với bất kỳ câu hỏi nào họ có thể có. Hãy nhớ rằng khi bạn sử dụng tính năng này, bạn phải đảm bảo rằng bạn sẽ có mặt để trả lời các câu hỏi. Khách hàng có thể thấy thời gian phản hồi trung bình của bạn và có thể không muốn liên hệ với bạn nếu họ thấy thời gian phản hồi lâu hơn. Điều quan trọng là bạn phải trả lời tin nhắn của khách hàng trong vòng 24 giờ. Theo trang Câu hỏi thường gặp của [Google Business Profile](https://support.google.com/business/answer/9114771?hl=en&co=GENIE.Platform%3DAndroid#zippy=%2Chow-do-i-keep-the-chat-button-active-on-google), Google có thể xóa nút "Trò chuyện" trên danh sách của bạn nếu bạn không trả lời trong vòng một ngày.

<center>
<img src="/images/blog/9-enable-chat-on-Google-Maps/response_time.png" alt="Thời gian phản hồi được hiển thị trên tính năng trò chuyện trên Google Maps khi khách hàng sắp nhập câu hỏi"/>

*Thời gian phản hồi được hiển thị trên tính năng trò chuyện trên Google Maps 
khi khách hàng sắp nhập câu hỏi.*
</center>

Bây giờ bạn đã biết cách Trò chuyện trên Google Maps hoạt động với Google Business Profile, làm thế nào để bạn đảm bảo doanh nghiệp của mình có thể theo kịp số lượng câu hỏi của khách hàng ngày càng tăng? Khi khách hàng liên hệ với bạn nhiều hơn qua trò chuyện, bạn có thể không có thời gian và tài nguyên để trả lời từng cuộc trò chuyện, đặc biệt là trong giờ đóng cửa. Hơn nữa, hầu hết các câu hỏi có thể lặp đi lặp lại. Đồng thời, khách hàng mong đợi câu trả lời tức thì từ các doanh nghiệp. Nếu doanh nghiệp không đáp ứng nhu cầu của khách hàng, họ có nguy cơ mất khách hàng hiện tại và tiềm năng.

<center>
<img src="/images/blog/10-use-Google-Business-Messages-to-engage-with-customers-off-hours/1-stats.png" alt="Người tiêu dùng thất vọng vì câu hỏi của họ không được trả lời và bị kẹt trong thời gian chờ quá lâu"/>

*Điều gì đang thúc đẩy tương lai của nhắn tin ở Hoa Kỳ? ([nguồn](https://developers.google.com/business-communications/business-messages/files/us-business-messages-infographic.pdf))*
</center>


<center>
<img src="/images/blog/10-use-Google-Business-Messages-to-engage-with-customers-off-hours/2-one_star.png" alt="Đánh giá 1 sao của một khách hàng khó chịu trên Google Maps do chủ doanh nghiệp thiếu giao tiếp."/>

*Đánh giá 1 sao của một khách hàng khó chịu do chủ doanh nghiệp thiếu giao tiếp.*
</center>


Đó là lý do tại sao chúng tôi muốn giới thiệu cho bạn phương pháp thứ hai, một cách tự động để sử dụng trò chuyện trên Google Maps với Google Business Messages.


# 2. Trò chuyện trên Google Maps với Google Business Messages

[Google Business Messages](https://businessmessages.google/) là một trải nghiệm hội thoại thế hệ tiếp theo giải quyết vấn đề cung cấp phản hồi theo thời gian thực cho khách hàng của bạn khi không có người. Trong khi Google Business Profile cho phép chủ doanh nghiệp trò chuyện trực tiếp với khách hàng thông qua nút trò chuyện trên Google Maps, Google Business Messages tiến thêm một bước bằng cách cho phép tích hợp với một tác nhân ảo. Theo [chatbots.org](https://www.google.com/url?q=https://www.chatbots.org/virtual_agent/&sa=D&source=docs&ust=1648605707733291&usg=AOvVaw1v4dJFgDD-5SmpSNZBu3J6), tác nhân ảo là "một nhân vật ảo trí tuệ nhân tạo được tạo ra bằng máy tính, hoạt hình (thường có hình dạng giống người) đóng vai trò là đại diện dịch vụ khách hàng trực tuyến".


<center>
<img src="/images/blog/10-use-Google-Business-Messages-to-engage-with-customers-off-hours/3-stats.png" alt="Các nhà ra quyết định kinh doanh tin rằng Google Business Messages sẽ cải thiện tương tác với khách hàng"/>

*Cá nhân hóa: Cách các công cụ giao tiếp thông minh thúc đẩy kết quả kinh doanh ([nguồn](https://services.google.com/fh/files/misc/how_smart_communication_tools_drive_business_results.pdf)).*
</center>


Một tác nhân ảo thường được gọi là trợ lý kỹ thuật số. Các tác nhân ảo sử dụng công nghệ Xử lý ngôn ngữ tự nhiên (NLP) để cung cấp các phản hồi tự động. Các tác nhân ảo có thể mang lại lợi ích cho doanh nghiệp của bạn bằng cách giảm thời gian phản hồi, cung cấp khả năng truy cập 24/7 và cải thiện trải nghiệm khách hàng. Đó là cách Google Business Messages có thể giúp bạn cung cấp các phản hồi tự động chất lượng cao cho khách hàng của mình.

Các lợi ích bổ sung của Google Business Messages bao gồm:
- Cung cấp câu trả lời tức thì cho các câu hỏi của khách hàng
- Tiết kiệm thời gian và tiền bạc trong việc cung cấp dịch vụ khách hàng xuất sắc
- Xây dựng lòng tin với khách hàng của bạn

<center>
<img src="/images/blog/10-use-Google-Business-Messages-to-engage-with-customers-off-hours/4-GBM_bridgepoint_runners.png" alt="Google Business Messages tích hợp tác nhân ảo trực tiếp vào nút trò chuyện trên Google Maps"/>

*Google Business Messages tích hợp tác nhân ảo trực tiếp vào nút trò chuyện của bạn.*
</center>


## Cách doanh nghiệp triển khai Google Business Messages

Để hiểu rõ hơn về cách Google Business Messages có thể giúp doanh nghiệp của bạn, hãy cùng xem xét một số ví dụ từ Walmart, Levi's và Albertsons Companies.

### 1. Walmart

Walmart là một trong những công ty đầu tiên triển khai Business Messages ([Blog của Google](https://blog.google/products/maps/now-sending-business-messages-google-maps-and-search/)). Với Google Business Messages, Walmart cung cấp thông tin cập nhật về giờ mở cửa cửa hàng, sản phẩm, vắc xin và xét nghiệm COVID-19, các tùy chọn nhận hàng và giao hàng, chính sách trả hàng, v.v. Khách hàng có thể nhận được câu trả lời tức thì bất cứ lúc nào trong ngày.

<center>
<img src="/images/blog/10-use-Google-Business-Messages-to-engage-with-customers-off-hours/5-walmart_chat.png" alt="Khách hàng có thể liên hệ với Walmart qua nút trò chuyện trên Google Maps (chỉ dành cho thiết bị di động)"/>

*Khách hàng có thể liên hệ với Walmart qua nút trò chuyện trên Google Maps (chỉ dành cho thiết bị di động).*
</center>


<center>
<img src="/images/blog/10-use-Google-Business-Messages-to-engage-with-customers-off-hours/6-walmart_va.png" alt="Khách hàng có thể hỏi tác nhân ảo của Walmart về giờ mở cửa cửa hàng, sản phẩm, chính sách khẩu trang, vắc xin COVID-19 và nhiều hơn nữa"/>

*Khách hàng có thể hỏi về giờ mở cửa cửa hàng, sản phẩm, chính sách khẩu trang, vắc xin COVID-19 và nhiều hơn nữa.*
</center>

### 2. Levi's


Levi's là một công ty quần áo nổi tiếng với quần jean denim Levi's, với 3.100 cửa hàng bán lẻ trên 110 quốc gia. Trong thời gian đại dịch, Levi's nhận thấy rằng người mua sắm dành một lượng thời gian đáng kể cho việc nghiên cứu trước khi mua hàng và giờ mở cửa cửa hàng có thể thay đổi thường xuyên hơn. Levi's muốn chuyển đổi người mua sắm thành khách hàng thực tế và cung cấp phản hồi nhanh chóng cho các câu hỏi của người mua sắm.

Vào tháng 6 năm 2020, Levi's đã triển khai Google Business Messages với mục tiêu cải thiện trải nghiệm khách hàng bằng cách cung cấp thông tin cập nhật về các cửa hàng và sản phẩm. Levi's đã tận dụng khả năng của Google Business Messages để giúp khách hàng bất cứ lúc nào trong ngày và kết quả là đã đạt được 85% điểm hài lòng của khách hàng (CSAT). Levi's cũng nhận thấy rằng có nhiều câu hỏi liên quan đến cửa hàng được giải quyết gấp 30 lần. Tìm hiểu thêm về cách Levi's triển khai Google Business Messages [tại đây](https://developers.google.com/business-communications/business-messages/files/levis-case-study.pdf).

<center>
<img src="/images/blog/10-use-Google-Business-Messages-to-engage-with-customers-off-hours/7-levi_chat.png" alt="Khách hàng có thể liên hệ với Levi’s qua nút trò chuyện trên Google Maps (chỉ dành cho thiết bị di động)"/>

*Khách hàng có thể liên hệ với Levi’s qua nút trò chuyện (chỉ dành cho thiết bị di động).*
</center>


<center>
<img src="/images/blog/10-use-Google-Business-Messages-to-engage-with-customers-off-hours/8-levi_va.png" alt="Khách hàng có thể xem sản phẩm của Levi’s khi tương tác với tác nhân ảo của Levi’s trên Google Maps"/>

*Khách hàng có thể xem sản phẩm của Levi’s khi tương tác với tác nhân ảo của Levi’s.*
</center>


### 3. Albertsons Companies

Albertsons Co. sở hữu một số hiệu thuốc trên khắp Hoa Kỳ bao gồm Safeway, Jewel-Osco, Vons, Albertsons, Shaw's, v.v. Cuối năm 2020, trong đợt phát hành vắc xin COVID-19 ban đầu, số lượt tìm kiếm vắc xin trực tuyến đã tăng lên. Có nhiều câu hỏi hơn về tính đủ điều kiện tiêm vắc xin, các cuộc hẹn và nơi mọi người có thể tiêm vắc xin. Albertsons Co. đã quyết định kích hoạt Google Business Messages để cung cấp thông tin cập nhật về tiêu chí đủ điều kiện, các cuộc hẹn, tính khả dụng, v.v. Kết quả là, họ đã có thể giảm số lượng cuộc gọi đến, ngăn chặn thông tin sai lệch có thể xảy ra và giúp khách hàng 24/7.

<center>
<img src="/images/blog/10-use-Google-Business-Messages-to-engage-with-customers-off-hours/9-albertsons_chat.png" alt="Khách hàng có thể nhận thông tin về tính đủ điều kiện tiêm vắc xin và đặt lịch hẹn trực tiếp từ tác nhân ảo của Albertsons Co."/>

*Khách hàng có thể nhận thông tin về tính đủ điều kiện tiêm vắc xin và đặt lịch hẹn.*
</center>

Google Business Messages là một cách tuyệt vời để tiết kiệm thời gian và tiền bạc trong việc trả lời các câu hỏi lặp đi lặp lại, xây dựng mối quan hệ với khách hàng và cải thiện trải nghiệm khách hàng tổng thể.


## Rào cản triển khai

Có hai hạn chế chính đối với việc triển khai Google Business Messages phổ biến như đã thấy ở trên.

Pertama, [việc tạo và duy trì một tác nhân ảo xuất sắc không phải là một nhiệm vụ đơn giản](https://developers.google.com/business-communications/business-messages/guides/how-it-works); nó đòi hỏi kiến thức nâng cao về AI đàm thoại và thời gian phát triển đáng kể. Các doanh nghiệp sử dụng Google Business Messages cần phải trả tiền cho một công ty tư vấn chuyên nghiệp để tạo ra một trải nghiệm hoàn toàn tùy chỉnh cho họ từ đầu. Điều này thường tốn kém và có thể mất nhiều tháng. Các doanh nghiệp lớn như Levi's, Walmart và Albertsons Companies là những người có thể đủ khả năng chi trả cho một dịch vụ đặc biệt như vậy. Công ty tư vấn thường cũng hoàn toàn kiểm soát việc phát triển và bảo trì sản phẩm. Nếu bạn phải thực hiện thay đổi, bạn phải thông qua công ty và điều này tốn thêm thời gian.

Thứ hai, Google Business Messages là một sự thay thế cho khả năng nhắn tin được tích hợp trong Google Business Profile. Với tư cách là chủ doanh nghiệp, bạn có thể bật nút trò chuyện trên Google Business Profile và trả lời bất cứ khi nào bạn có mặt. Tuy nhiên, khi bạn triển khai Google Business Messages, tin nhắn đến của bạn sẽ được chuyển đến tác nhân trực tiếp của bạn và bạn mất khả năng trò chuyện trực tiếp với khách hàng trong Google Business Profile hoặc sử dụng ứng dụng Google My Business.

<center>
<img src="/images/blog/10-use-Google-Business-Messages-to-engage-with-customers-off-hours/10-live_agent.png" alt="Giải pháp trò chuyện trực tiếp cho phép chủ doanh nghiệp nói chuyện trực tiếp với khách hàng"/>

*Nếu giải pháp trò chuyện trực tiếp được bật, khách hàng có thể nhấp vào “Nhắn tin cho tác nhân trực tiếp” để nói chuyện trực tiếp với chủ doanh nghiệp.*
</center>


Nếu bạn vẫn muốn nói chuyện trực tiếp với khách hàng khi sử dụng Google Business Messages, bạn cần [yêu cầu công ty tư vấn](https://developers.google.com/business-communications/business-messages/partners) cung cấp giải pháp trò chuyện trực tiếp. Nếu tính năng này được bật, khách hàng có thể nhấp vào nút “Nhắn tin cho tác nhân trực tiếp”, và sau đó bạn sẽ có thể tham gia cuộc trò chuyện và trò chuyện với khách hàng. Từ phía tác nhân trực tiếp, các cuộc trò chuyện sẽ diễn ra trên bất kỳ nền tảng nào mà công ty tư vấn đã chọn để tích hợp; đây có thể là qua văn bản, WhatsApp, Messenger, một phần mềm dịch vụ khách hàng hiện có như Zendesk, hoặc một trang web hoặc ứng dụng điện thoại được xây dựng tùy chỉnh.

Bây giờ bạn có thể tự hỏi, có giải pháp nào để vượt qua những rào cản này nhưng vẫn đạt được lợi ích của Google Business Messages không? Đó là lý do tại sao chúng tôi muốn giới thiệu cho bạn giải pháp mới nhất của chúng tôi, Near Me Messaging, và cách bạn có thể tận dụng tối đa trò chuyện trên Google Maps của mình với nó!

# 3. Trò chuyện trên Google Maps với Near Me Messaging

Near Me Messaging tích hợp AI đàm thoại tiên tiến với Google Business Messages, cho phép khách hàng liên hệ với doanh nghiệp của bạn bất cứ lúc nào trong ngày thông qua nút trò chuyện trên hồ sơ Google Maps của bạn. Bằng cách này, bạn có thể tập trung vào việc chăm sóc doanh nghiệp của mình trong khi Near Me Messaging xử lý các câu hỏi của khách hàng. Điều làm cho Near Me Messaging khác biệt so với các dịch vụ tương tự là thời gian thiết lập 5 phút, khả năng tùy chỉnh tự phục vụ và hỗ trợ trò chuyện trực tiếp tích hợp.

<center>
<img height="550" src="/images/blog/12-near-me-messaging-complements-google-business-messages/1-GBM-chat-button.png" alt="Near Me Messaging tích hợp Google Business Messages với nút trò chuyện trên Hồ sơ Google Maps của bạn."/>

*Near Me Messaging tích hợp Google Business Messages với nút trò chuyện trên Hồ sơ Google Maps của bạn.*
</center>

Đầu tiên, khi các doanh nghiệp tích hợp Google Business Messages, họ cần phải trả tiền cho một công ty tư vấn chuyên nghiệp để tạo ra một trải nghiệm hoàn toàn tùy chỉnh cho họ từ đầu. Điều này thường tốn kém và mất thời gian. Chúng tôi hiểu rằng việc đầu tư thời gian và tài nguyên điển hình để tận dụng Google Business Messages là một rào cản đối với nhiều doanh nghiệp nhỏ. Near Me Messaging giải quyết hạn chế này bằng cách cung cấp một giải pháp phải chăng cho các doanh nghiệp vừa và nhỏ. Bạn có thể có một tác nhân ảo hoạt động trong vòng chưa đầy 5 phút. Hơn nữa, bạn có thể liên tục cập nhật và tùy chỉnh tác nhân ảo của mình bất cứ lúc nào từ trang web Near Me Messaging. Các thay đổi bạn thực hiện trên trang web Near Me Messaging sẽ có hiệu lực ngay lập tức đối với khách hàng đang tương tác với tác nhân của bạn.

Ngoài ra, khi bạn bật nút trò chuyện trên Google Business Profile, bạn có thể trả lời khách hàng của mình bất cứ khi nào bạn có mặt. Nhưng khi bạn tích hợp Google Business Messages, tin nhắn đến của bạn sẽ được chuyển đến tác nhân trực tiếp của bạn và bạn mất khả năng trò chuyện trực tiếp với khách hàng trong Google Business Profile. Near Me Messaging giải quyết hạn chế này bằng cách cung cấp tính năng tác nhân trực tiếp mà không mất thêm chi phí hoặc thời gian thiết lập. Với tính năng tác nhân trực tiếp, khách hàng có thể yêu cầu được chuyển đến một người thật bất cứ lúc nào. Khi bạn thấy yêu cầu tác nhân trực tiếp, hoặc nếu bạn muốn tiếp quản tác nhân ảo, bạn có thể tham gia cuộc trò chuyện và nói chuyện trực tiếp với khách hàng của mình.

## Lợi ích của Near Me Messaging

### 1. Tiết kiệm thời gian và nhân lực trong việc cung cấp dịch vụ khách hàng xuất sắc

Khi bạn sử dụng Near Me Messaging, các phản hồi cho các câu hỏi cơ bản nhất sẽ được xử lý tự động dựa trên thông tin từ Google Business Profile của bạn. Càng nhiều thông tin trên Google Business Profile của bạn, tác nhân càng có thể phản hồi tốt hơn các câu hỏi cơ bản. Và nếu bạn muốn cập nhật Google Business Profile của mình, bạn có thể đồng bộ hóa các thay đổi của mình với Near Me để tự động cập nhật các phản hồi của bot. Tác nhân ảo cũng sẽ tạo ra các phản hồi từ các đánh giá người dùng có liên quan trên hồ sơ Google Maps của bạn có xếp hạng sao cao. Ngoài các phản hồi được tạo tự động, bạn có thể thêm nhiều nội dung tùy chỉnh hơn thông qua Câu hỏi thường gặp (FAQ) và cơ sở kiến thức, mà chúng tôi sẽ thảo luận chi tiết hơn trong phần tiếp theo.

Trong vòng 5 phút sau khi đăng nhập vào trang web Near Me, bạn có thể thử nghiệm tác nhân ảo của riêng mình đang hoạt động. Tác nhân ảo của bạn có thể cung cấp câu trả lời tức thì cho các câu hỏi lặp đi lặp lại của khách hàng 24/7. Bằng cách này, bạn có thể xây dựng và duy trì mối quan hệ với khách hàng của mình.

<center>
<img src="/images/blog/12-near-me-messaging-complements-google-business-messages/2-custom-FAQ.png" alt="Near Me Messaging cung cấp tính năng Câu hỏi thường gặp tùy chỉnh để cá nhân hóa tác nhân ảo"/>

*Ví dụ từ tính năng Câu hỏi thường gặp tùy chỉnh của chúng tôi.*
</center>

### 2. Khả năng tự phục vụ và tùy chỉnh.

Ngoài việc tạo phản hồi từ Hồ sơ doanh nghiệp và đánh giá của khách hàng, Near Me Messaging còn được trang bị khả năng tùy chỉnh tự phục vụ. Để cá nhân hóa tác nhân ảo của bạn, một số tính năng cơ bản bạn có thể tùy chỉnh là tên tác nhân ảo, tin nhắn chào mừng và logo. Quan trọng hơn, bạn có thể tạo các phản hồi tùy chỉnh cho các truy vấn của người dùng cụ thể cho doanh nghiệp của bạn. Điều này được thực hiện bằng cách tạo các câu hỏi thường gặp (FAQ) và thêm thông tin khác về doanh nghiệp của bạn (chẳng hạn như văn bản từ trang web của bạn) vào cơ sở kiến thức.

Sau khi tùy chỉnh tác nhân của mình, bạn có thể kiểm tra riêng tư cho đến khi bạn hài lòng với hiệu suất. Khi bạn đã sẵn sàng, bạn có thể công khai khởi chạy nó trực tiếp từ trang web Near Me Messaging. Khi bạn công khai khởi chạy tác nhân ảo của mình, bạn có thể liên tục thực hiện các thay đổi và tùy chỉnh thêm tác nhân ảo của mình. Khi bạn thực hiện thay đổi, bạn có thể truy cập tab *"Kiểm tra riêng tư"* để kiểm tra chúng trước khi công khai. Khi bạn hài lòng với các thay đổi, bạn có thể nhấp vào *"Khởi chạy lại"* từ trang *"Khởi chạy công khai"* để cập nhật ngay lập tức phiên bản công khai của tác nhân ảo của bạn.

<center>
<img src="/images/blog/13-launch-your-virtual-agent-on-Google-Maps-with-Near-Me-Messaging/9-relaunch.png" alt="Near Me Messaging tích hợp Google Business Messages với nút trò chuyện trên Hồ sơ Google Maps của bạn."/>

*Bạn có thể nhấp vào nút "Khởi chạy lại" sau khi bạn đã hoàn tất việc thực hiện các thay đổi/cải tiến cho tác nhân ảo của mình.*
</center>


Bây giờ bạn đã biết các phương pháp khác nhau để triển khai Trò chuyện trên Google Maps, bạn có muốn biết thêm về cách tận dụng tối đa tính năng trò chuyện của mình không?

Chúng tôi đã tạo [một Nhóm Facebook dành cho chủ doanh nghiệp để chia sẻ và thảo luận về cách tối ưu hóa Trò chuyện trên Google Maps của bạn](https://www.facebook.com/groups/513092883608553). Chủ doanh nghiệp có thể hỏi nhau, chia sẻ thông tin và nhận thông báo về các sự kiện hoặc hội thảo trên web mới nhất về tối ưu hóa Trò chuyện trên Google Maps. Tham gia ngay để tận dụng tối đa cơ hội này!
`;export{n as default};

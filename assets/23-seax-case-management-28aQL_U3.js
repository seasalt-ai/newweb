const n=`---
title: "SeaX Case Management: Kiểm soát việc theo dõi trường hợp của trung tâm liên lạc của bạn"
metatitle: "SeaX Case Management: Theo dõi các tương tác của khách hàng của bạn"
date: 2022-08-17 22:28:15+00:00
modified_date: 2025-07-29 20:45:17+00:00
draft: false
author: Sarah Reid
description: "Trong bài đăng này, chúng tôi khám phá các tích hợp AI với Quản lý trường hợp, cung cấp cho các đại lý của bạn các công cụ để theo dõi và ghi lại các tương tác với khách hàng của bạn trong SeaX."
weight: 1
tags:
  - SeaX
image: images/blog/23-seax-case-management/0-main.png
canonicalURL: /blog/seax-case-management/
url: /blog/seax-case-management/
---

*Trong bài đăng blog trước của chúng tôi, [SeaX KB: Cơ sở tri thức trả lời trước khi được hỏi](https://seasalt.ai/blog/22-seax-knowledge-base/), chúng tôi đã chỉ ra cách Cơ sở tri thức nội bộ của Seasalt.ai đặt thông tin của công ty bạn trực tiếp vào tay các đại lý của bạn, tăng cường hiệu quả và độ chính xác trong trung tâm liên lạc của bạn. Trong bài đăng này, chúng tôi tiếp tục chủ đề tích hợp AI với hệ thống Quản lý trường hợp của SeaX, cung cấp cho các đại lý của bạn các công cụ mạnh mẽ để theo dõi và ghi lại các tương tác với khách hàng của bạn trực tiếp trong giao diện SeaX.*

# Mục lục
- [Ticketing so với Quản lý trường hợp](#ticketing-vs-case-management)
- [Quản lý trường hợp SeaX](#seax-case-management)
    - [Giao diện người dùng nhúng cho các đại lý trực tiếp](#embedded-user-interface-for-live-agents)
    - [Tìm kiếm tự động mạnh mẽ](#powerful-automatic-search)
    - [Quản lý liên hệ tích hợp](#integrated-contact-management)
    - [Tương tác khách hàng được liên kết](#linked-customer-interactions)
    - [Các trường có thể tùy chỉnh](#customizable-fields)
    - [Theo dõi trường hợp tự động](#automated-case-follow-up)
    - [Bảng điều khiển quản trị viên](#administrator-dashboard)
    - [Hội thảo trên web](#webinar)

# Ticketing so với Quản lý trường hợp

Các thuật ngữ ‘ticketing’ và ‘quản lý trường hợp’ thường được sử dụng thay thế cho nhau để chỉ một hệ thống khi các chi tiết của một vấn đề được lưu trữ trong một đối tượng dữ liệu nào đó, sau đó được sử dụng và tham chiếu trong quá trình giải quyết vấn đề. Tuy nhiên, điểm khác biệt chính giữa hai thuật ngữ này thường nằm ở độ phức tạp của hệ thống.

Các hệ thống ‘ticketing’ thường đơn giản hơn, trong đó vé được sử dụng để lưu trữ các chi tiết của một vấn đề cụ thể, và bị loại bỏ hoặc lưu trữ khi vấn đề được giải quyết. Các hệ thống ‘quản lý trường hợp’ thường phức tạp hơn, và làm nhiều hơn là chỉ theo dõi vòng đời của một vấn đề. Các trường hợp thường được liên kết với những thứ khác, chẳng hạn như các trường hợp tương tự khác hoặc khách hàng đã mở trường hợp, để các xu hướng có thể được sử dụng để giải quyết các vấn đề phổ biến hơn. Thông tin về nhiều tương tác với khách hàng trong quá trình giải quyết vấn đề có thể được lưu trữ trong dữ liệu trường hợp, do đó mỗi đại lý tiếp theo xử lý trường hợp đều biết chính xác điều gì đang xảy ra. Một trường hợp có thể được đóng và sau đó mở lại nếu khách hàng quay lại với một vấn đề tái diễn. Quản lý trường hợp là một công cụ mạnh mẽ và linh hoạt hơn để theo dõi các tác vụ và tương tác phức tạp hơn trong một trung tâm liên lạc.

# Quản lý trường hợp SeaX

Quản lý trường hợp của chúng tôi dựa trên nguyên tắc dễ sử dụng khi tương tác với khách hàng. Điều cuối cùng mà một đại lý cần khi hỗ trợ khách hàng là phải lo lắng về việc ghi nhớ mọi thứ để ghi chú sau cuộc gọi, hoặc bị buộc phải chuyển sang nhiều chương trình khác nhau chỉ để nói chuyện với khách hàng, tìm thông tin hiện có và ghi chú về thông tin mới.

Nếu bạn muốn xem trực tiếp bản demo, bạn có thể xem video demo ngắn về SeaX Case Management của chúng tôi:

<iframe width="85%" height="450px" src="https://www.youtube.com/embed/yf1REVZtRa8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

## Giao diện người dùng nhúng cho các đại lý trực tiếp

<center>
<img src="/images/blog/23-seax-case-management/1-intro.png" alt="Cái nhìn đầu tiên về giao diện SeaX Case Management."/>

*Cái nhìn đầu tiên về giao diện SeaX Case Management.*
</center>

Vì trọng tâm của chúng tôi là làm cho quản lý trường hợp có thể truy cập được đối với các đại lý, Hệ thống quản lý trường hợp SeaX được tích hợp nguyên bản vào SeaX. Các đại lý có thể thêm các trường hợp mới, chỉnh sửa các trường hợp hiện có và ghi lại tất cả các ghi chú cần thiết trong cùng một giao diện nơi họ xử lý các cuộc gọi và tin nhắn. Không cần chuyển đổi cửa sổ, không cần lật qua các tab, không cần điều hướng qua các trang web lồng nhau.

## Tìm kiếm tự động mạnh mẽ

<center>
<img src="/images/blog/23-seax-case-management/2-search.png" alt="Giao diện tìm kiếm SeaX Case Management."/>

*Giao diện tìm kiếm SeaX Case Management.*
</center>

Tìm kiếm trường hợp nhanh chóng và chính xác của chúng tôi cho phép bạn tìm kiếm và sắp xếp theo bất kỳ khía cạnh nào của thông tin trường hợp của bạn, bao gồm tìm kiếm toàn văn bản ghi chú của đại lý và lọc theo các trường dữ liệu tùy chỉnh của riêng bạn.

## Quản lý liên hệ tích hợp

<center>
<img src="/images/blog/23-seax-case-management/3-contacts.png" alt="Giao diện liên hệ khách hàng của SeaX Case Management."/>

*Giao diện liên hệ khách hàng của SeaX Case Management.*
</center>

Ngoài việc quản lý thông tin trường hợp, chúng tôi cũng cung cấp quản lý liên hệ để lưu trữ thông tin khách hàng của bạn và liên kết các trường hợp của khách hàng với nhau. Giống như các trường hợp, bạn có thể lưu trữ ghi chú về khách hàng và nhóm chúng theo nhãn để theo dõi chính xác ai đang gọi đến trung tâm liên lạc của bạn.

## Tương tác khách hàng được liên kết

<center>
<img src="/images/blog/23-seax-case-management/4-recording.png" alt="Nhúng bản ghi cuộc gọi của bạn trực tiếp vào trường hợp liên quan."/>

*Nhúng bản ghi cuộc gọi của bạn trực tiếp vào trường hợp liên quan.*
</center>

Mỗi trường hợp được liên kết với liên hệ liên quan, nhưng chúng tôi cũng có thể liên kết các cuộc gọi riêng lẻ với trường hợp liên quan. Với chức năng ‘Nhúng bản ghi tác vụ’, bạn có thể trực tiếp đính kèm bản ghi cuộc gọi vào trường hợp, cho phép xem lại chính xác những gì đã xảy ra trong mỗi tương tác khách hàng liên quan.

## Các trường có thể tùy chỉnh

<center>
<img src="/images/blog/23-seax-case-management/5-custom-fields.png" alt="Xác định các trường dữ liệu tùy chỉnh để lưu trữ thông tin khách hàng và trường hợp quan trọng đối với bạn."/>

*Xác định các trường dữ liệu tùy chỉnh để lưu trữ thông tin khách hàng và trường hợp quan trọng đối với bạn.*
</center>

Chúng tôi hiểu rằng mỗi công ty là duy nhất, và mỗi trung tâm liên lạc sẽ cần thu thập các loại thông tin khác nhau trong các trường hợp của họ. Do đó, Hệ thống quản lý trường hợp SeaX cung cấp bộ trường dữ liệu quan trọng cơ bản, đồng thời cung cấp chức năng trường tùy chỉnh để bạn có thể thêm các trường dữ liệu bổ sung vào cả trường hợp và liên hệ khách hàng để thu thập bất kỳ thông tin nào bạn cần trong trung tâm liên lạc của bạn.

<center>
<img src="/images/blog/23-seax-case-management/6-custom-fields.png" alt="Truy cập các trường tùy chỉnh của bạn trực tiếp trong thẻ trường hợp và liên hệ."/>

*Truy cập các trường tùy chỉnh của bạn trực tiếp trong thẻ trường hợp và liên hệ.*
</center>

## Theo dõi trường hợp tự động

<center>
<img src="/images/blog/23-seax-case-management/7-sms.png" alt="Tự động hóa tin nhắn để thu thập trạng thái trường hợp và điểm CSAT từ khách hàng."/>

*Tự động hóa tin nhắn để thu thập trạng thái trường hợp và điểm CSAT từ khách hàng.*
</center>

Có một số tương tác khách hàng lặp đi lặp lại nhỏ phải được thực hiện trong một trung tâm liên lạc để đảm bảo rằng các trường hợp được xử lý đúng cách. Hệ thống quản lý trường hợp SeaX có thể tự động hóa các cuộc trò chuyện này cho bạn, để các đại lý của bạn có thể tập trung vào các vấn đề phức tạp hơn. Với một cú nhấp chuột, bạn có thể gửi tin nhắn cho khách hàng để kiểm tra trạng thái của một trường hợp đã mở trong một thời gian dài hoặc yêu cầu phản hồi về một cuộc khảo sát sự hài lòng của khách hàng, và hệ thống sẽ tự động cập nhật thông tin trường hợp của họ dựa trên phản hồi của họ.

## Bảng điều khiển quản trị viên

<center>
<img src="/images/blog/23-seax-case-management/8-admin.png" alt="Kiểm soát thông tin trong hệ thống quản lý trường hợp của bạn bằng bảng điều khiển quản trị viên."/>

*Kiểm soát thông tin trong hệ thống quản lý trường hợp của bạn bằng bảng điều khiển quản trị viên.*
</center>

Lưu trữ thông tin về các trường hợp trong trung tâm liên lạc của bạn là một chuyện, và quản lý các trường hợp trong trung tâm liên lạc của bạn là một chuyện khác. Hệ thống quản lý trường hợp SeaX cung cấp bảng điều khiển quản trị viên để bạn có thể làm điều đó. Từ đây, bạn có thể giám sát tất cả các trường hợp trong hệ thống của mình và đi sâu vào chi tiết để xác định trường hợp nào cần chú ý. Bạn có thể sắp xếp theo phạm vi thời gian hoặc đại lý, gửi tin nhắn kiểm tra trạng thái tự động, hoặc tìm kiếm các trường hợp có thẻ cụ thể, bất cứ điều gì cần thiết để quản lý các trường hợp của bạn.

## Hội thảo trên web

Nếu bạn muốn xem hướng dẫn chi tiết hơn về hệ thống quản lý trường hợp và cách nó tích hợp với nền tảng SeaX, vui lòng xem hội thảo trên web của chúng tôi về chủ đề này:

<iframe width="85%" height="450px" src="https://www.youtube.com/embed/xwZla3ftWLk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

Cảm ơn bạn đã dành thời gian đọc về cách Hệ thống quản lý trường hợp SeaX hỗ trợ các đại lý của bạn khi họ tương tác với khách hàng của bạn. Vui lòng theo dõi bài đăng blog tiếp theo của chúng tôi, bài đăng này sẽ đi sâu vào quy trình gửi tin nhắn SMS hàng loạt bằng nền tảng SeaX. Nếu bạn quan tâm đến việc tìm hiểu thêm ngay lập tức, hãy điền vào [biểu mẫu Đặt lịch demo](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting) của chúng tôi để có cái nhìn trực tiếp về nền tảng SeaX.
`;export{n as default};

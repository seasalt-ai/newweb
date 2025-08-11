const n=`---
title: "SeaX Bulk SMS: Để Tiếp Cận Khách Hàng Nhanh Hơn, Hiệu Quả Hơn"
metatitle: "SeaX Bulk SMS: Để Tiếp Cận Khách Hàng Nhanh Hơn, Hiệu Quả Hơ..."
date: 2022-09-09 11:05:22-07:00
draft: false
author: Amy Chen, Kim Dodds, Sarah Reid
description: "Trong blog này, chúng tôi sẽ trình bày cách tính năng Bulk SMS của SeaX cho phép các đại lý chủ động gửi tin nhắn đi qua văn bản."
weight: 1
tags:
  - SeaX
image: images/blog/24-seax-bulk-sms/thumbnail.png
canonicalURL: /blog/seax-bulk-sms/
url: /blog/seax-bulk-sms/
---


*Trong các bài đăng blog trước đây, chúng tôi đã giới thiệu một số tính năng chính của SeaX (bao gồm [Voice Intelligence](https://seasalt.ai/blog/21-seax-voice-intelligence/), [Knowledge Base](https://seasalt.ai/blog/22-seax-knowledge-base/), và [Case Management](https://seasalt.ai/blog/23-seax-case-management/)) giúp các đại lý xử lý tốt hơn các cuộc gọi và tin nhắn đến. Trong blog này, chúng tôi sẽ trình bày cách tính năng Bulk SMS của SeaX cho phép các đại lý chủ động gửi tin nhắn đi qua văn bản, mà người nhận được chứng minh là mở sớm hơn và nhất quán hơn so với các phương thức liên lạc email truyền thống.*

# Mục lục
- [SMS so với Email](#sms-vs-email)
- [Tiêu chuẩn 10DLC](#10dlc-standards)
- [SeaX Bulk SMS](#seax-bulk-sms)
    - [Tải lên danh bạ](#contact-upload)
    - [Soạn tin nhắn](#message-composition)
    - [Ước tính chi phí](#cost-estimate)
    - [Xem trước tin nhắn hàng loạt](#bulk-message-preview)
    - [Theo dõi tiến độ chiến dịch](#campaign-progress-monitoring)
    - [Trò chuyện tin nhắn đến](#incoming-message-chat)
- [Kết luận](#closing)

# SMS so với Email

Email có xu hướng là phương thức giao tiếp mặc định cho hầu hết các hoạt động kinh doanh. Cho đến gần đây, tin nhắn văn bản (SMS) không phải là một kênh giao tiếp được sử dụng rộng rãi cho tin nhắn kinh doanh hàng loạt, mặc dù nó phổ biến cho giao tiếp cá nhân hàng ngày. Tuy nhiên, trong những năm gần đây, các nhà cung cấp dịch vụ truyền thông đám mây như Twilio đã làm cho kênh SMS dễ tiếp cận hơn nhiều đối với các doanh nghiệp bằng cách xử lý các chi tiết phức tạp của cơ sở hạ tầng viễn thông và nhà cung cấp dịch vụ ở phần phụ trợ, và cung cấp một API SMS đơn giản như một dịch vụ cho khách hàng. Mặc dù email có thể vẫn là kênh phổ biến nhất cho doanh nghiệp, SMS có thể cung cấp một sự bổ sung độc đáo cho các phương thức liên lạc email truyền thống.

<center>
<img src="/images/blog/24-seax-bulk-sms/1-pros-cons.png" alt="Một số ưu và nhược điểm của SMS cho giao tiếp kinh doanh."/>

*Một số ưu và nhược điểm của SMS cho giao tiếp kinh doanh.*
</center>

Nhưng tại sao lại sử dụng SMS nếu email đã được chứng minh là thành công? Nếu chúng ta lấy các chiến dịch tiếp thị làm ví dụ, câu trả lời ngắn gọn là: trong khi tỷ lệ mở cho một chiến dịch email chỉ là 20%, tỷ lệ mở trung bình cho SMS có thể lên tới *98%* - chưa kể tin nhắn văn bản có xu hướng nhận được nhiều phản hồi hơn. Ngoài ra, tin nhắn văn bản thường được mở trong vòng 90 giây sau khi nhận được, trong khi email có xu hướng được mở vào khoảng 90 phút. Cuối cùng nhưng không kém phần quan trọng, SMS có tỷ lệ nhấp chuột trung bình khoảng 19%, cao hơn đáng kể so với 3,2% đối với email ([nguồn](https://manychat.com/blog/sms-vs-email-marketing-2021/)).

Nói chung, tin nhắn văn bản được mở nhanh hơn và thường xuyên hơn email - có lẽ vì tin nhắn luôn được gửi trực tiếp đến người nhận dù họ ở đâu, dù có wifi hay không. Cũng bởi vì SMS thường được sử dụng cho tin nhắn cá nhân, và ít thường xuyên hơn cho giao tiếp kinh doanh, người nhận có thể xem tin nhắn văn bản là quan trọng hơn hoặc có ý nghĩa hơn email.

Vậy tại sao không phải ai cũng sử dụng SMS? Chà, tất nhiên có những ưu và nhược điểm. Đương nhiên SMS đắt hơn đáng kể so với email vì nó dựa vào cơ sở hạ tầng viễn thông và nhà cung cấp dịch vụ (như Verizon, AT&T, v.v.) để gửi tin nhắn. Ngoài ra, tin nhắn văn bản có giới hạn cứng khoảng 900 ký tự và một tệp đính kèm duy nhất (tất nhiên là tốn thêm chi phí). Vì vậy, nhìn chung, mặc dù SMS có thể là một phương pháp giao tiếp hiệu quả hơn đáng kể, nhưng đánh đổi là các doanh nghiệp phải chọn lọc hơn về nội dung họ gửi để đảm bảo họ đang tiết kiệm chi phí.

Điều đó nói lên rằng, không có lý do gì SMS và email không nên được sử dụng cùng nhau! Mỗi kênh có những ưu và nhược điểm riêng, vì vậy một doanh nghiệp có thể đảm bảo họ đang gửi những thông tin liên lạc hiệu quả nhất bằng cách tận dụng thế mạnh của từng kênh.

# Tiêu chuẩn 10DLC

Đối với tin nhắn SMS A2P (ứng dụng-đến-người) khối lượng lớn, các nhà mạng Hoa Kỳ sử dụng mã dài 10 chữ số tiêu chuẩn, hoặc 10DLC. Trước khi bắt đầu một chiến dịch SMS hàng loạt, chúng tôi khuyên bạn nên đọc thêm về 10DLC và các ứng dụng của nó [tại đây](https://support.twilio.com/hc/en-us/articles/1260800720410-What-is-A2P-10DLC-).

# SeaX Bulk SMS

Dịch vụ Bulk SMS của SeaX cho phép bạn dễ dàng tải lên danh bạ/khách hàng tiềm năng của mình, gửi SMS (chúng tôi cũng hỗ trợ MMS - Tin nhắn đa phương tiện) hàng loạt và quản lý các phản hồi đến. Đọc tiếp để xem các bước đơn giản để bắt đầu chiến dịch SMS hàng loạt đầu tiên của bạn.

## Tải lên danh bạ

<center>
<img src="/images/blog/24-seax-bulk-sms/2-contact-upload.png" alt="Tải lên danh sách liên hệ vào SeaX Bulk SMS."/>

*Tải lên danh sách liên hệ vào SeaX Bulk SMS.*
</center>

Bước đầu tiên là tải lên danh bạ và khách hàng tiềm năng. Đầu tiên, tổ chức các liên hệ cho chiến dịch SMS của bạn trong một tệp csv. Ngoài các trường bắt buộc, \`phone_number\` và \`name\`, bạn có thể thêm các trường khác và sử dụng chúng trong nội dung tin nhắn. Ví dụ, bạn có thể thay đổi động nội dung tin nhắn để bao gồm tên người nhận dựa trên trường \`name\` cho mỗi liên hệ.

Tiếp theo, chỉ cần mở dịch vụ Bulk SMS trong SeaX và nhấn “Import” để tải lên danh bạ của bạn. Chúng tôi lưu tất cả các liên hệ trước đây của bạn trong danh sách người nhận để bạn có thể dễ dàng khởi chạy các chiến dịch theo dõi.

## Soạn tin nhắn

<center>
<img src="/images/blog/24-seax-bulk-sms/3-message-draft.png" alt="Soạn tin nhắn SMS mới với SeaX Bulk SMS."/>

*Soạn tin nhắn SMS mới.*
</center>

Bước tiếp theo là đặt tên cho chiến dịch của bạn và soạn tin nhắn. Bulk SMS cho phép bạn truy cập tất cả thông tin liên hệ được lưu trữ trong tệp csv/excel của bạn. Ví dụ, nếu bạn có một trường gọi là \`name\` trong danh sách liên hệ, bạn có thể nhập \`{name}\` vào tin nhắn và tin nhắn sẽ tự động hiển thị tên cho mỗi liên hệ trong nội dung tin nhắn.

## Ước tính chi phí

<center>
<img src="/images/blog/24-seax-bulk-sms/4-cost-estimate.png" alt="Chọn số điện thoại gửi và nhận ước tính chi phí chiến dịch với SeaX Bulk SMS."/>

*Chọn số điện thoại gửi và nhận ước tính chi phí chiến dịch.*
</center>

Tiếp theo, chọn số điện thoại mà bạn muốn sử dụng để gửi tin nhắn đi. Nếu bạn chưa có số điện thoại, bạn có thể nhấp vào “Quote for a New Number” ở góc trên bên phải để gửi yêu cầu mua. Nhóm của chúng tôi có thể giúp bạn mua số 10DLC mới.

Bạn cũng có thể xem trước giá đơn vị ước tính cho chiến dịch. Lưu ý rằng cả việc gửi và nhận SMS/MMS đều tốn tiền, vì vậy hãy đảm bảo bạn lập ngân sách phù hợp.

## Xem trước tin nhắn hàng loạt

<center>
<img src="/images/blog/24-seax-bulk-sms/5-preview.png" alt="Xem trước chiến dịch SMS hàng loạt trước khi gửi với SeaX."/>

*Xem trước chiến dịch SMS hàng loạt trước khi gửi.*
</center>

Bạn có thể xem trước các tin nhắn hàng loạt trước khi gửi. Điều quan trọng là phải xác nhận nội dung tin nhắn, số điện thoại của người nhận và số điện thoại của người gửi. Sau khi bạn khởi chạy chiến dịch, sẽ không thể rút lại tin nhắn. Trên trang này, bạn có thể xem trước 3 tin nhắn đầu tiên trong chiến dịch của mình, tương ứng với 3 liên hệ đầu tiên từ danh sách của bạn.

## Theo dõi tiến độ chiến dịch

<center>
<img src="/images/blog/24-seax-bulk-sms/6-monitor.png" alt="Theo dõi tiến độ chiến dịch SMS hàng loạt với SeaX."/>

*Theo dõi tiến độ chiến dịch SMS hàng loạt.*
</center>

Cuối cùng, bạn có thể ngồi lại và theo dõi tiến độ chiến dịch trên bảng điều khiển Bulk SMS. Trang tự động làm mới và cập nhật trạng thái chiến dịch. Bạn có thể xem trạng thái gửi tin nhắn, tỷ lệ thành công/gửi, chi phí ước tính, cũng như tỷ lệ phản hồi trên trang này.

## Trò chuyện tin nhắn đến

<center>
<img src="/images/blog/24-seax-bulk-sms/7-chat.png" alt="Giải quyết các phản hồi đến từ một chiến dịch SMS hàng loạt với SeaX."/>

*Giải quyết các phản hồi đến từ một chiến dịch SMS hàng loạt.*
</center>

Giống như tất cả các tính năng của SeaX, chúng tôi cố gắng trao quyền cho các đại lý hoặc người quản lý chiến dịch để xử lý các yêu cầu/vấn đề đến - Bulk SMS cho phép SeaX xử lý các nỗ lực tiếp thị đi. Sau khi bạn khởi chạy chiến dịch, bạn có thể quản lý tất cả các phản hồi đến trong cửa sổ trò chuyện hiển thị bên dưới.

# Kết luận

Cảm ơn bạn đã dành thời gian đọc về cách Hệ thống Bulk SMS của SeaX trao quyền cho các đại lý gửi thông tin liên lạc đi ngoài việc xử lý các yêu cầu tin nhắn đến. Hãy theo dõi phần tiếp theo trong loạt bài đăng blog của chúng tôi, sẽ đề cập đến một số công cụ quản lý và phân tích được tích hợp trong nền tảng SeaX. Nếu bạn muốn tìm hiểu thêm ngay lập tức, hãy điền vào biểu mẫu [Đặt lịch Demo](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting) của chúng tôi để có cái nhìn đầu tiên về nền tảng SeaX.`;export{n as default};

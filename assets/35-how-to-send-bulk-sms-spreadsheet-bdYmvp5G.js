const n=`---
title: "Cách đúng để gửi SMS hàng loạt cho danh bạ trong Excel, Google Sheets và Apple Numbers"
metatitle: "Gửi SMS hàng loạt | Excel, Google Sheets, Apple Numbers"
date: 2023-10-01 10:25:00-08:00
modified_date: 2024-07-01 00:00:00+00:00
draft: false
author: Xuchen Yao
description: "Tìm hiểu cách gửi SMS hàng loạt an toàn từ Excel, Google Sheets và Apple Numbers, tuân thủ quy định 10DLC."
weight: 1
tags:
  - SeaX
  - Hướng dẫn
image: images/blog/35-how-to-send-bulk-sms-spreadsheet/35-how-to-send-bulk-sms-spreadsheet.jpg
canonicalURL: /blog/how-to-send-bulk-sms-spreadsheet/
url: /blog/how-to-send-bulk-sms-spreadsheet/
---

Gửi SMS hàng loạt cho danh sách liên hệ là kỹ thuật phổ biến được các doanh nghiệp, nhà tổ chức sự kiện và nhiều chuyên gia sử dụng. Việc gửi tin nhắn đồng loạt giúp tiết kiệm thời gian và đảm bảo thông tin đến với nhiều người cùng lúc. Dù Excel, Google Sheets và Apple Numbers không hỗ trợ gửi SMS mặc định, các tiện ích mở rộng và dịch vụ bên thứ ba đã giúp điều này trở nên khả thi. Tuy nhiên, cần lưu ý các quy định và rủi ro liên quan.

# Tuân thủ quy định: Đăng ký 10DLC

Gửi SMS hàng loạt ngày càng bị siết chặt bởi các quy định chống spam và tin nhắn không mong muốn. Nếu bạn chỉ gửi một lần và không lo về hậu quả, có thể dùng các hướng dẫn trực tuyến. Nhưng nếu muốn làm marketing bền vững, bạn cần hiểu rõ các quy tắc về SMS marketing.

Trung tâm của các quy định này là hệ thống 10DLC.

10DLC là viết tắt của 10-Digit Long Code, tiêu chuẩn mới cho SMS A2P (Application-to-Person) tại Mỹ. Những điểm chính:
- Mục đích: Do spam tăng cao, các nhà mạng áp dụng quy định nghiêm ngặt với 10DLC cho gửi tin nhắn hàng loạt
- Tuân thủ doanh nghiệp: Doanh nghiệp muốn gửi SMS hàng loạt phải đăng ký và được phê duyệt 10DLC
- Rủi ro không tuân thủ: Gửi SMS không đăng ký hoặc không được duyệt 10DLC có thể bị khóa tài khoản hoặc xử phạt

[Bài viết này](https://support.twilio.com/hc/en-us/articles/1260800720410-What-is-A2P-10DLC-) hướng dẫn đăng ký chiến dịch 10DLC. Seasalt.ai đã giúp nhiều khách hàng SeaX Messaging tuân thủ 10DLC. Có thắc mắc? Liên hệ với chúng tôi!

# Chuẩn bị danh bạ trong bảng tính

Sau khi thiết lập chiến dịch 10DLC, bạn có thể gửi SMS hàng loạt mà không lo bị khóa tài khoản.

Giả sử bạn có danh sách liên hệ trong bảng tính và muốn gửi SMS cho tất cả về một sự kiện. Trước tiên, hãy làm sạch và chuẩn hóa số điện thoại.

## 1. Tạo bản sao lưu dữ liệu

Luôn tạo bản sao trước khi chỉnh sửa: **Tệp > Tạo bản sao**.

<center>
<img src="/images/blog/35-how-to-send-bulk-sms-spreadsheet/1-make-a-copy-for-bulk-sms-contact-spreadsheet.png" alt="Sao lưu bảng tính danh bạ SMS hàng loạt"/>
_Sao lưu bảng tính danh bạ SMS hàng loạt_
</center>

## 2. Xóa dữ liệu trùng lặp

a. Chọn toàn bộ dữ liệu
b. Nhấn Dữ liệu > Dọn dẹp dữ liệu > Xóa trùng lặp
c. Chọn cột cần kiểm tra rồi nhấn Xóa trùng lặp
d. Google Sheets sẽ thông báo số lượng trùng lặp đã xóa

<center>
<img src="/images/blog/35-how-to-send-bulk-sms-spreadsheet/2-remove-duplicates-for-bulk-sms-contact-spreadsheet.png" alt="Xóa trùng lặp trong bảng tính danh bạ SMS hàng loạt"/>
_Xóa trùng lặp trong bảng tính danh bạ SMS hàng loạt_
</center>

## 3. Chuẩn hóa định dạng số điện thoại

a. Chọn định dạng phù hợp với dịch vụ sử dụng (SeaX Messaging chấp nhận 5551234567, 555-123-4567, +15551234567)
b. Dùng Tìm và Thay thế để đồng bộ định dạng (ví dụ: thay dấu chấm bằng dấu gạch ngang)
c. Nếu cần, dùng công thức hoặc script

<center>
<img src="/images/blog/35-how-to-send-bulk-sms-spreadsheet/3-clean-numbers-for-bulk-sms-contact-spreadsheet.png" alt="Chuẩn hóa số điện thoại trong bảng tính danh bạ SMS hàng loạt"/>
_Chuẩn hóa số điện thoại trong bảng tính danh bạ SMS hàng loạt_
</center>

### 4. Kiểm tra dữ liệu

a. Đảm bảo số điện thoại đủ số chữ số. Lọc hoặc sắp xếp để phát hiện lỗi
b. Kiểm tra tên không bị trống hoặc sai

<center>
<img height="500" src="/images/blog/35-how-to-send-bulk-sms-spreadsheet/4-validate-format-for-bulk-sms-contact-spreadsheet.jpeg" alt="Kiểm tra dữ liệu trong bảng tính danh bạ SMS hàng loạt"/>
_Kiểm tra dữ liệu trong bảng tính danh bạ SMS hàng loạt_
</center>

## 5. Kiểm tra ô trống

Bước này là tùy chọn. Trong SeaX Messaging, các dòng có ô trống sẽ tự động bị bỏ qua. Tuy nhiên, các dịch vụ khác có thể báo lỗi nên nên dùng định dạng có điều kiện để phát hiện và sửa ô trống.

<center>
<img height="500" src="/images/blog/35-how-to-send-bulk-sms-spreadsheet/5-clean-blank-cells-for-bulk-sms-contact-spreadsheet.png" alt="Kiểm tra ô trống trong bảng tính danh bạ SMS hàng loạt"/>
_Kiểm tra ô trống trong bảng tính danh bạ SMS hàng loạt_
</center>

## Mẹo bổ sung khi chuẩn bị dữ liệu

Làm sạch dữ liệu là quá trình lặp lại. Tùy vào lượng và chất lượng dữ liệu, bạn có thể phải lặp lại các bước này nhiều lần.

## Bắt đầu gửi SMS!

Excel hay Google Sheets không hỗ trợ gửi SMS mặc định, nhưng có thể dùng tiện ích mở rộng hoặc dịch vụ bên thứ ba như ClickSend, Zapier

Nếu muốn làm SMS Marketing chuyên nghiệp hoặc giao tiếp đa kênh, hãy dùng nền tảng chuyên dụng như SeaX Messaging với các tính năng quản lý danh bạ, chat/gọi, theo dõi hiệu quả và hỗ trợ đăng ký 10DLC

Một số nhà cung cấp phổ biến:
- SeaX Messaging
- Simple Texting
- Textedly

# Mẹo vận hành SMS Marketing thành công

<center>
<img height="500" src="/images/blog/35-how-to-send-bulk-sms-spreadsheet/6-successful-camapign-bulk-sms-contact-spreadsheet.jpeg" alt="Mẹo thành công cho SMS Marketing"/>
</center>

Dù cẩn thận đến đâu vẫn có thể gặp sự cố. Để thành công lâu dài:
- Luôn kiểm tra và tuân thủ yêu cầu 10DLC
- Đảm bảo chất lượng tin nhắn, tránh spam, cung cấp tùy chọn opt-out
- Chọn dịch vụ SMS uy tín để đảm bảo tin nhắn được gửi thành công

# Kết luận

Gửi SMS hàng loạt bằng các công cụ như Excel, Google Sheets rất hiệu quả, nhưng cần hiểu rõ quy định mới và thực hiện cẩn trọng. Khi hiểu 10DLC, bạn sẽ tự tin và an toàn hơn khi gửi SMS

## Liên hệ

Nếu muốn biết thêm về 10DLC hoặc các lựa chọn SMS Marketing, [đặt lịch demo](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting) với chúng tôi. Chúng tôi luôn sẵn sàng hỗ trợ!
`;export{n as default};

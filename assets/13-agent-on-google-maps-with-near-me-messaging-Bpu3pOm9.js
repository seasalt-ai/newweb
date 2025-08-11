const n=`---
title: "Ra mắt Đại lý ảo của bạn trên Google Maps với Tin nhắn gần tôi"
metatitle: "Ra mắt Đại lý ảo của Google Maps của bạn với Tin nhắn gần tôi"
date: 2022-04-19 15:27:21-07:00
modified_date: 2025-07-29 20:45:17+00:00
draft: false
author: Ruli Setiawati
description: "Ra mắt đại lý ảo của bạn trên Google Business Messages với Tin nhắn gần tôi."
weight: 1
tags:
  - NearMe
image: images/blog/13-launch-your-virtual-agent-on-Google-Maps-with-Near-Me-Messaging/thumbnail.png
canonicalURL: /blog/virtual-agent-on-Google-Maps-with-near-me-messaging/
url: /blog/virtual-agent-on-Google-Maps-with-near-me-messaging/
---

Chúng tôi đã giới thiệu cho bạn [Tin nhắn gần tôi](https://seasalt.ai/blog/12-near-me-messaging-google-business-messages/) và những lợi ích của nó. Tin nhắn gần tôi triển khai một đại lý ảo Google Business Messages, có sẵn trực tiếp từ nút trò chuyện trên hồ sơ Google Maps của doanh nghiệp. Đại lý ảo của Tin nhắn gần tôi được hỗ trợ bởi công nghệ hiểu ngôn ngữ tự nhiên tiên tiến mang lại phản hồi giống con người. Điều làm cho Tin nhắn gần tôi khác biệt so với các dịch vụ tương tự là thời gian thiết lập 5 phút, tùy chỉnh tự phục vụ và hỗ trợ trò chuyện trực tiếp tích hợp.

Lợi ích của Tin nhắn gần tôi bao gồm:
- Tiết kiệm thời gian và nhân lực trong việc cung cấp dịch vụ khách hàng xuất sắc
- Tùy chỉnh đại lý của bạn thông qua nền tảng tự phục vụ
- Thu thập thông tin chi tiết về khách hàng thông qua Phân tích gần tôi
- Hiểu nhu cầu của khách hàng thông qua lịch sử trò chuyện
- Trò chuyện trực tiếp với khách hàng của bạn bằng tính năng đại lý trực tiếp của chúng tôi

Chúng tôi hiện đang tìm kiếm người thử nghiệm beta cho Tin nhắn gần tôi. Đối với những người thử nghiệm beta của chúng tôi, chúng tôi đang cung cấp dịch vụ của mình với chi phí của chúng tôi trong một thời gian giới hạn, không cần hợp đồng. Đừng bỏ lỡ cơ hội này để thử một đại lý ảo và xem liệu nó có phù hợp với doanh nghiệp của bạn không. Để bắt đầu, hãy làm theo hướng dẫn từng bước này về cách ra mắt đại lý ảo của bạn với Tin nhắn gần tôi!


## Hướng dẫn từng bước để ra mắt Đại lý ảo của bạn với Tin nhắn gần tôi

### Bước 1. Truy cập trang web Tin nhắn gần tôi (Cập nhật: Chúng tôi đã chuyển sản phẩm thành trình tạo chatbot đa kênh. Bây giờ được gọi là [SeaChat](https://chat.seasalt.ai/?utm_source=blog)!).

Truy cập trang web Tin nhắn gần tôi (Cập nhật: Chúng tôi đã chuyển sản phẩm thành trình tạo chatbot đa kênh. Bây giờ được gọi là [SeaChat](https://chat.seasalt.ai/?utm_source=blog)!) và nhấp vào nút *“Đăng nhập”*. Sau khi bạn đăng nhập bằng tài khoản bạn sử dụng cho Hồ sơ doanh nghiệp trên Google, hãy đảm bảo rằng bạn đã chọn tất cả các ô có sẵn và cấp quyền cho Seasalt AI để ra mắt đại lý ảo của bạn. Seasalt.ai là [Đối tác chính thức của Google](https://developers.google.com/business-communications/business-messages/partners), vì vậy bạn có thể yên tâm rằng chúng tôi sẽ sử dụng các quyền này một cách có trách nhiệm. **Chúng tôi đang sử dụng các quyền này cho hai chức năng: thứ nhất, để truy cập thông tin từ Hồ sơ doanh nghiệp trên Google của bạn để đại lý ảo của bạn có thể cung cấp phản hồi chính xác, và thứ hai để chúng tôi có thể ra mắt đại lý trên trang Google Maps của doanh nghiệp bạn thay mặt bạn.**

Chúng tôi sẽ không bao giờ sử dụng các quyền này để chỉnh sửa hoặc xóa hồ sơ doanh nghiệp của bạn. Chúng tôi vẫn cần bạn cấp quyền cho tất cả chúng vì Google không cung cấp các quyền riêng biệt cho *“xem”*, *“chỉnh sửa”* và *“xóa”*. Chúng tôi sẽ chỉ sử dụng quyền *“xem”*.

<center>
<img src="/images/blog/13-launch-your-virtual-agent-on-Google-Maps-with-Near-Me-Messaging/2-sign-in.png" alt="Đăng nhập bằng tài khoản bạn sử dụng cho Hồ sơ doanh nghiệp trên Google"/>

*Nhấp vào “Đăng nhập bằng Google” và đăng nhập bằng tài khoản Hồ sơ doanh nghiệp trên Google của bạn.*
</center>

<center>
<img src="/images/blog/13-launch-your-virtual-agent-on-Google-Maps-with-Near-Me-Messaging/3-permissions.png"/>

*Cấp quyền cho Seasalt AI cho phép chúng tôi công khai ra mắt đại lý ảo của thương hiệu bạn trên trang Google Maps của bạn thay mặt bạn.*
</center>


### Bước 2. Xây dựng đại lý ảo của bạn.

Sau khi bạn đăng nhập và cấp quyền, bạn sẽ thấy tất cả các doanh nghiệp mà bạn quản lý bằng tài khoản Hồ sơ doanh nghiệp trên Google của mình. Nếu bạn không thấy doanh nghiệp của mình, hãy đảm bảo rằng bạn đang sử dụng đúng tài khoản Hồ sơ doanh nghiệp trên Google để đăng nhập. Bạn cũng có thể nhấp vào nút *“Đồng bộ hóa”* để đồng bộ hóa các doanh nghiệp của mình. Lưu ý rằng bạn sẽ cần thiết lập đại lý ảo riêng lẻ cho từng địa điểm kinh doanh của mình. Để thiết lập đại lý ảo của bạn, hãy nhấp vào nút *“thêm đại lý”* trên một trong các doanh nghiệp của bạn.

<center>
<img src="/images/blog/13-launch-your-virtual-agent-on-Google-Maps-with-Near-Me-Messaging/4-business-locations.png"/>

*Các doanh nghiệp liên kết với Hồ sơ doanh nghiệp trên Google của chúng tôi.*
</center>

Tin nhắn gần tôi sẽ bắt đầu xây dựng đại lý ảo của bạn bằng cách đồng bộ hóa thông tin từ Hồ sơ doanh nghiệp trên Google của bạn. Việc xây dựng đại lý ảo của bạn sẽ mất chưa đầy 5 phút và bạn có thể theo dõi tiến trình khi mỗi bước hoàn thành.


<center>
<img src="/images/blog/13-launch-your-virtual-agent-on-Google-Maps-with-Near-Me-Messaging/5-virtual-agent-building.png"/>

*Bạn có thể xem tiến trình của đại lý ảo của mình.*
</center>

### Bước 3. Kiểm tra riêng đại lý ảo của bạn.

Khi đại lý của bạn hoàn tất việc xây dựng, mã QR sẽ xuất hiện trên màn hình của bạn. Sử dụng điện thoại di động của bạn để quét mã QR và kiểm tra đại lý ảo của bạn. Đây vẫn là phiên bản riêng tư của đại lý ảo của bạn và chưa xuất hiện trên hồ sơ Google Maps của bạn. Lưu ý rằng đại lý ảo này là phiên bản ban đầu chỉ sử dụng thông tin từ Hồ sơ doanh nghiệp trên Google của bạn cùng với các đánh giá của khách hàng từ Google Maps để tạo phản hồi. Nếu bạn kiểm tra và cảm thấy đại lý ảo của bạn cần một số cải tiến, bạn có thể cải thiện đáng kể các phản hồi bằng cách tạo Câu hỏi thường gặp tùy chỉnh, thêm thông tin từ trang web của bạn và quản lý các đánh giá của Google. Để biết hướng dẫn chi tiết hơn về tùy chỉnh, hãy xem [hướng dẫn của chúng tôi để cải thiện đại lý ảo của bạn](https://wiki.seasalt.ai/nearme/maintain_agent/improve_agent/).

<center>
<img src="/images/blog/13-launch-your-virtual-agent-on-Google-Maps-with-Near-Me-Messaging/6-agent-built.png" alt=""/>

*Mã QR cho đại lý ảo riêng tư của bạn sẽ xuất hiện sau khi đại lý của bạn hoàn tất việc xây dựng.*
</center>

### Bước 4. Ra mắt đại lý ảo của bạn một cách công khai.


Sau khi bạn kiểm tra đại lý ảo của mình và hài lòng với các phản hồi, bạn có thể tiếp tục và ra mắt đại lý ảo của mình. Bằng cách ra mắt đại lý ảo của bạn một cách công khai, đại lý của bạn sẽ có sẵn cho khách hàng của bạn trên Google Maps. Trong blog này, tôi sẽ hướng dẫn bạn qua quy trình cơ bản, nhưng bạn có thể tham khảo tài liệu và video của chúng tôi về [cách ra mắt đại lý ảo của bạn trên hồ sơ Google Maps của bạn](https://wiki.seasalt.ai/nearme/setup/03-publish_agent/) để biết thêm thông tin chi tiết.

Đầu tiên, hãy chuyển đến tab “Đại lý ảo” và đảm bảo rằng *tên đại lý* và *hình ảnh đại diện đại lý* của bạn chính xác như bạn muốn chúng xuất hiện. Sau khi *tên đại lý* và *hình ảnh đại diện* được Google xác minh là một phần của quá trình ra mắt, **bạn sẽ không thể sửa đổi chúng thông qua trang Tin nhắn gần tôi**.

Sau khi bạn đã xác nhận chi tiết đại lý của mình, hãy điều hướng đến tab *“Ra mắt công khai”*. Nhấp vào nút *“Xác minh”* để xác minh thương hiệu và vị trí của bạn với Google.

<center>
<img src="/images/blog/13-launch-your-virtual-agent-on-Google-Maps-with-Near-Me-Messaging/7-verification.png" alt="xác minh thương hiệu và vị trí của bạn với Google"/>

*Nhấp vào nút "Xác minh" sẽ xác minh thương hiệu và vị trí của bạn với Google.*
</center>

Sau khi thương hiệu và vị trí của bạn được xác minh, bạn có thể nhấp vào nút *“Ra mắt”* để ra mắt đại lý ảo của bạn một cách công khai.

<center>
<img src="/images/blog/13-launch-your-virtual-agent-on-Google-Maps-with-Near-Me-Messaging/8-launch.png" alt="ra mắt đại lý ảo của bạn trên nút trò chuyện của hồ sơ Google Maps của bạn"/>

*Nhấp vào nút “Ra mắt” sẽ ra mắt đại lý ảo của bạn trên nút trò chuyện trên hồ sơ Google Maps của bạn.*
</center>

Có thể mất đến bốn giờ để nút trò chuyện xuất hiện trên Google Maps. Khi nút trò chuyện xuất hiện, đại lý ảo của bạn đã sẵn sàng để khách hàng của bạn trò chuyện. Sau khi ra mắt công khai, bạn vẫn có thể liên tục thực hiện các thay đổi và tùy chỉnh thêm đại lý ảo của mình. Khi bạn thực hiện các thay đổi, bạn có thể chuyển đến tab *“Kiểm tra riêng”* để kiểm tra chúng trước khi công khai. Sau khi bạn hài lòng với các thay đổi, bạn có thể nhấp vào *“Ra mắt lại”* từ trang *“Ra mắt công khai”* để cập nhật ngay lập tức phiên bản công khai của đại lý ảo của bạn.

<center>
<img src="/images/blog/13-launch-your-virtual-agent-on-Google-Maps-with-Near-Me-Messaging/9-relaunch.png" alt="Tin nhắn gần tôi tích hợp Google Business Messages với nút trò chuyện trên Hồ sơ Google Maps của bạn."/>

*Bạn có thể nhấp vào nút "Ra mắt lại" sau khi bạn đã hoàn tất việc thực hiện các thay đổi/cải tiến cho đại lý ảo của bạn.*
</center>

[Đặt lịch demo với chúng tôi](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting) và chúng tôi sẽ rất vui lòng giúp bạn!

Cập nhật: Chúng tôi đã chuyển sản phẩm thành trình tạo chatbot đa kênh. Bây giờ được gọi là [SeaChat](https://chat.seasalt.ai/?utm_source=blog)!
`;export{n as default};

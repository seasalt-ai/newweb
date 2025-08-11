const n=`---
title: "Mở rộng phạm vi trung tâm liên lạc của bạn với trung tâm liên lạc phân tán"
metatitle: "Mở rộng phạm vi của bạn với trung tâm liên lạc phân tán"
date: 2022-07-27 21:46:45+00:00
draft: false
author: Sarah Reid
description: "Trong bài đăng này, chúng ta sẽ xem xét 'trung tâm liên lạc phân tán': nó là gì, nó có thể mang lại lợi ích gì cho bạn và cách SeaX sử dụng nền tảng phân tán này để phục vụ khách hàng của chúng tôi tốt hơn"
weight: 1
tags:
  - SeaX
image: images/blog/20-seax-distributed-contact-center/0-main.png
canonicalURL: /blog/seax-distributed-contact-center/
url: /blog/seax-distributed-contact-center/
---

*Trong bài đăng blog trước của chúng tôi [Bringing customers from all channels together in one place with SeaX's Omnichannel Communication](https://seasalt.ai/blog/19-seax-omnichannel-communication/), chúng tôi đã thể hiện sức mạnh của giao tiếp Omnichannel trên SeaX, nơi tin nhắn từ người dùng từ hầu hết mọi kênh có thể được hiển thị trên nền tảng SeaX. Trong bài đăng này, chúng ta sẽ xem xét 'trung tâm liên lạc phân tán': nó là gì, nó có thể mang lại lợi ích gì cho bạn và cách SeaX sử dụng nền tảng phân tán này để phục vụ khách hàng của chúng tôi tốt hơn*

# Mục lục
- [Trung tâm liên lạc "phân tán" là gì?](#trung-tâm-liên-lạc-phân-tán-là-gì)
- [Trung tâm liên lạc "phân tán" có lợi ích gì?](#trung-tâm-liên-lạc-phân-tán-có-lợi-ích-gì)
- [Trung tâm liên lạc "phân tán" có thách thức gì?](#trung-tâm-liên-lạc-phân-tán-có-thách-thức-gì)
- [SeaX giải quyết những vấn đề này như thế nào?](#seax-giải-quyết-những-vấn-đề-này-như-thế-nào)
    - [Định tuyến cuộc gọi đến các địa điểm và đại lý phân tán](#định-tuyến-cuộc-gọi-đến-các-địa-điểm-và-đại-lý-phân-tán)
    - [Cấu hình khả năng sẵn có của địa điểm phân tán](#cấu-hình-khả-năng-sẵn-có-của-địa-điểm-phân-tán)
    - [Tùy chỉnh thông báo theo địa điểm phân tán](#tùy-chỉnh-thông-báo-theo-địa-điểm-phân-tán)

# Trung tâm liên lạc "phân tán" là gì?
Ở mức độ đơn giản nhất, trung tâm liên lạc phân tán là trung tâm liên lạc tồn tại ở nhiều địa điểm. Không giống như trung tâm liên lạc truyền thống có một địa điểm duy nhất, nó có thể là trung tâm liên lạc có nhiều văn phòng, hoặc nhiều địa điểm ở các quốc gia khác nhau, hoặc thậm chí là trung tâm liên lạc không có địa điểm thực tế, nơi tất cả các đại lý làm việc từ xa. Tuy nhiên, trung tâm liên lạc phân tán vẫn phải hoạt động như một trung tâm liên lạc truyền thống có một địa điểm duy nhất, cung cấp trải nghiệm liền mạch cho tất cả mọi người liên quan. Đối với đại lý, điều đó có nghĩa là có được hỗ trợ trên một nền tảng duy nhất, bất kể họ ở đâu. Đối với khách hàng, điều đó có nghĩa là được kết nối đúng với địa điểm và đại lý phù hợp, tùy thuộc vào nhu cầu của họ.

# Trung tâm liên lạc "phân tán" có lợi ích gì?
Trung tâm liên lạc phân tán có một số lợi thế so với trung tâm liên lạc truyền thống, đặc biệt là về phạm vi tiếp cận và khả năng mở rộng. Có đại lý ở nhiều múi giờ khác nhau đảm bảo rằng khách hàng có thể liên hệ với bạn bất cứ khi nào họ cần hỗ trợ. Với trung tâm liên lạc truyền thống, khách hàng bị giới hạn gọi điện trong một khung giờ làm việc duy nhất, khiến họ khó liên hệ với doanh nghiệp của bạn. Có đại lý phân tán mang lại cho doanh nghiệp của bạn nhiều cơ hội hơn để tuyển dụng những người có kỹ năng và chuyên môn đa dạng, chẳng hạn như đại lý hỗ trợ nhiều ngôn ngữ. Trung tâm liên lạc truyền thống có một địa điểm duy nhất bị giới hạn trong việc tuyển dụng đại lý tại địa điểm đó, có nguy cơ không thể tìm được đại lý có kỹ năng bạn cần. Cuối cùng, có đại lý phân tán gần khách hàng hơn, đại lý có thể hiểu sâu hơn về các quy tắc và quy định cụ thể trong khu vực đó. Trong trung tâm liên lạc truyền thống có một địa điểm duy nhất, đại lý có thể không biết chi tiết cụ thể về một số thứ, chẳng hạn như vận chuyển ở một quốc gia ở phía bên kia thế giới, khiến họ khó giúp đỡ khách hàng.


# Trung tâm liên lạc "phân tán" có thách thức gì?
Mặc dù bản chất phân tán của các trung tâm liên lạc này mang lại nhiều lợi ích cho doanh nghiệp của bạn, nhưng cũng có một số thách thức đối với trung tâm liên lạc phân tán. Có đại lý ở nhiều múi giờ khác nhau giúp dễ dàng liên lạc với khách hàng mọi lúc, nhưng cũng có nghĩa là định tuyến cuộc gọi chính xác là cực kỳ quan trọng, để khách hàng không bị chuyển đến địa điểm đã đóng cửa, hoặc đại lý không có mặt. Cũng rất quan trọng để gửi khách hàng đến đại lý nói ngôn ngữ mà khách hàng yêu cầu, và người được đào tạo đúng cách để giải quyết vấn đề của họ. Với số lượng lớn đại lý ở các địa điểm khác nhau có kỹ năng khác nhau, công việc định tuyến này có thể nhanh chóng trở nên phức tạp.

<center>
<img src="/images/blog/20-seax-distributed-contact-center/1-feature-comparison.png" alt="So sánh tính năng: Trung tâm dịch vụ khách hàng truyền thống vs Trung tâm liên lạc phân tán vs SeaX."/>

*So sánh tính năng: Trung tâm dịch vụ khách hàng truyền thống vs Trung tâm liên lạc phân tán vs SeaX.*
</center>

# SeaX giải quyết những vấn đề này như thế nào?

## Định tuyến cuộc gọi đến các địa điểm và đại lý phân tán
SeaX là giải pháp trung tâm liên lạc hợp tác được xây dựng trên đám mây và phân tán, được xây dựng trên [Twilio Flex](https://www.twilio.com/flex), sử dụng nền tảng truyền thông đám mây của Twilio. Twilio cung cấp các khối xây dựng cơ bản cho SeaX, chẳng hạn như cơ sở hạ tầng viễn thông, định tuyến tin nhắn và tác vụ, và giao diện người dùng trung tâm liên lạc cơ bản. Trong SeaX, bạn có thể định cấu hình nhiều số điện thoại cho các địa điểm khác nhau của mình, cho phép bạn có mã quốc gia và mã vùng phù hợp cho từng khu vực mà trung tâm liên lạc của bạn hoạt động. Bằng cách này, bạn có thể định cấu hình cài đặt của mình theo địa điểm, đảm bảo rằng mỗi địa điểm hoạt động chính xác và nhận cuộc gọi phù hợp, trong khi tất cả đại lý của bạn được phục vụ trên cùng một nền tảng.

[Twilio TaskRouter](https://www.twilio.com/taskrouter) định tuyến cuộc gọi và tin nhắn đến đại lý dựa trên thuộc tính của cuộc gọi và đại lý.

<center>
<img src="/images/blog/20-seax-distributed-contact-center/2-taskrouter.png" alt="Sơ đồ kiến trúc TaskRouter."/>

*Sơ đồ kiến trúc TaskRouter. [Nguồn](https://twilio-cms-prod.s3.amazonaws.com/images/taskrouter-diagram.width-800.png).*
</center>

Nó cũng cho phép bạn sử dụng định tuyến dựa trên kỹ năng, cho phép bạn kiểm soát chi tiết đại lý và địa điểm nào nhận cuộc gọi nào. Bạn không chỉ có thể gắn nhãn đại lý của mình có kỹ năng gì, chẳng hạn như cấp độ đào tạo bán hàng, mà còn có thể chỉ định những thứ như ngôn ngữ họ nói, đảm bảo rằng họ chỉ nhận được cuộc gọi mà họ có thể xử lý. Ngoài ra, bạn có thể sử dụng định tuyến này để gán số điện thoại cụ thể cho đại lý, liên kết từng đại lý với một địa điểm cụ thể của trung tâm liên lạc của bạn, ngay cả khi họ không thực sự ở đó. Đại lý sẽ chỉ nhận được cuộc gọi được định tuyến đến địa điểm được chỉ định, đảm bảo rằng cuộc gọi của khách hàng của bạn luôn được định tuyến đến đúng người.

<center>
<img src="/images/blog/20-seax-distributed-contact-center/3-skills.png" alt="Kỹ năng được xác định trong TaskRouter để định tuyến cuộc gọi và tin nhắn đến."/>

*Kỹ năng được xác định trong TaskRouter để định tuyến cuộc gọi và tin nhắn đến.*
</center>

## Cấu hình khả năng sẵn có của địa điểm phân tán
Trong SeaX, bạn cũng có thể định cấu hình giờ làm việc và ngày lễ theo số điện thoại. Với công cụ này, bạn có thể tự do kiểm soát khi nào mỗi địa điểm của bạn mở cửa, mang lại cho bạn sự linh hoạt hoàn toàn trong cách liên lạc với từng địa điểm của bạn. Về cơ bản, mỗi địa điểm của bạn có thể hoạt động như một trung tâm dịch vụ khách hàng truyền thống, với giờ làm việc được chỉ định và đóng cửa vào các ngày lễ địa phương, trong khi vẫn được định cấu hình và kết nối từ một nền tảng chung để đại lý của bạn có thể hoạt động.

<center>
<img src="/images/blog/20-seax-distributed-contact-center/4-open-hours.png" alt="Giờ làm việc cho hai số điện thoại khác nhau ở hai múi giờ khác nhau trên cùng một phiên bản SeaX."/>
</center>

<center>
<img src="/images/blog/20-seax-distributed-contact-center/5-open-hours.png" alt="Giờ làm việc cho hai số điện thoại khác nhau ở hai múi giờ khác nhau trên cùng một phiên bản SeaX."/>

*Giờ làm việc cho hai số điện thoại khác nhau ở hai múi giờ khác nhau trên cùng một phiên bản SeaX.*
</center>

## Tùy chỉnh thông báo theo địa điểm phân tán
SeaX cũng cho phép thông báo không khả dụng theo số điện thoại. Thông báo không khả dụng sẽ tự động phát cho khách hàng khi không có ai nhận cuộc gọi. Với khả năng tùy chỉnh thông báo này theo số điện thoại, bạn có thể có thông báo bằng các ngôn ngữ khác nhau hoặc có thông tin khác nhau, tùy thuộc vào điều gì quan trọng nhất để truyền đạt với khách hàng gọi đến địa điểm đó.

<center>
<img src="/images/blog/20-seax-distributed-contact-center/6-unavailable-message.png" alt="Thông báo không khả dụng cho số điện thoại cụ thể trên nền tảng SeaX."/>

*Thông báo không khả dụng cho số điện thoại cụ thể trên nền tảng SeaX.*
</center>

Trung tâm liên lạc truyền thống có một địa điểm duy nhất chỉ có thể phục vụ hiệu quả khu vực xung quanh, ngay cả khi về bản chất nó nằm trên một nền tảng duy nhất. Trung tâm liên lạc phân tán mở rộng đáng kể cơ sở khách hàng có thể được phục vụ với đại lý ở nhiều địa điểm, nhưng cũng có một số thách thức trong việc hợp nhất tất cả các dịch vụ mà đại lý cần, bất kể họ ở đâu. Với SeaX, bạn có thể tiếp cận mọi phần của cơ sở khách hàng của mình, trong khi tất cả đại lý của bạn được phục vụ trên một nền tảng duy nhất, dễ sử dụng.

Cảm ơn bạn đã dành thời gian đọc về cách trung tâm liên lạc đám mây của SeaX hỗ trợ trung tâm liên lạc phân tán của bạn trên một nền tảng duy nhất. Hãy theo dõi bài đăng blog tiếp theo của chúng tôi, nơi chúng tôi sẽ đi sâu vào giải pháp Text-to-Speech và Speech-to-Text nội bộ của chúng tôi và cách chúng có thể cải thiện trung tâm liên lạc của bạn. Nếu bạn quan tâm đến việc tìm hiểu thêm ngay bây giờ, vui lòng điền vào biểu mẫu "[Đặt lịch trình diễn](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting)" của chúng tôi để xem nền tảng SeaX cho chính bạn`;export{n as default};

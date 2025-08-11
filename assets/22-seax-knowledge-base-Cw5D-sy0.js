const n=`---
title: "SeaX KB: Cơ sở kiến thức trả lời trước cả khi bạn hỏi"
metatitle: "SeaX KB: Cơ sở kiến thức trả lời trước cả khi bạn hỏi"
date: 2022-08-15 22:01:32-07:00
modified_date: 2025-07-30 17:05:21.933000+00:00
draft: false
author: Kim Dodds
description: "Trong bài viết này, chúng tôi sẽ tiếp tục chủ đề tích hợp AI, giới thiệu cơ sở kiến thức do AI cung cấp của SeaX, cung cấp các câu trả lời đề xuất trong thời gian thực."
weight: 1
tags:
  - SeaX
canonicalURL: /blog/seax-kb-a-knowledge-base/
url: /blog/seax-kb-a-knowledge-base/
---

*Trong bài đăng trên blog trước của chúng tôi, [Hãy để trung tâm liên lạc của bạn có tiếng nói riêng với trí tuệ giọng nói SeaX](https://seasalt.ai/blog/21-seax-voice-intelligence/), chúng tôi đã cho thấy các công cụ chuyển văn bản thành giọng nói và giọng nói thành văn bản sẵn có của Seasalt.ai đã nâng cao mọi khía cạnh của nền tảng SeaX như thế nào. Trong bài viết này, chúng tôi sẽ tiếp tục chủ đề tích hợp AI, giới thiệu cơ sở kiến thức do AI cung cấp của SeaX, giúp lắng nghe các cuộc trò chuyện và đưa ra các câu trả lời đề xuất trong thời gian thực.*

# Mục lục
- [Cơ sở kiến thức truyền thống](#the-traditional-knowledge-base)
- [Cơ sở kiến thức SeaX](#seax-knowledge-base)
    - [Giao diện người dùng nhúng cho các đại lý trực tiếp](#embedded-user-interface-for-live-agents)
    - [Tìm kiếm nhanh và chính xác](#fast-and-accurate-search)
    - [Đề xuất tự động theo thời gian thực](#real-time-automated-suggestions)
    - [Mẫu phản hồi](#response-templates)
    - [Quản lý KB](#kb-management)
    - [Hội thảo trên web](#webinar)

# Cơ sở kiến thức truyền thống

Về cốt lõi, cơ sở kiến thức (KB) chỉ đơn giản là một kho lưu trữ thông tin (lý tưởng là) được tổ chức tốt và dễ dàng truy cập để tự phục vụ trực tuyến. Một hệ thống KB tốt sẽ có các tính năng như tổ chức nội dung phân cấp, tìm kiếm và gắn thẻ để giúp người dùng tìm thấy thông tin phù hợp dễ dàng hơn.

Việc duy trì một cơ sở kiến thức chi tiết là một thông lệ tiêu chuẩn đối với hầu hết các công ty ngày nay. Cho dù mục đích là để giúp nhân viên chia sẻ thông tin nội bộ về sản phẩm của họ, trả lời các câu hỏi từ khách hàng tiềm năng, hỗ trợ khách hàng khắc phục sự cố hay tất cả những điều trên - việc cung cấp thông tin quan trọng cho cả nhân viên và khách hàng có nghĩa là công việc hiệu quả hơn và sự hài lòng của khách hàng cao hơn.

Thông thường, một cơ sở kiến thức được triển khai và duy trì thông qua một hệ thống quản lý nội dung hoặc một hệ thống quản lý kiến thức. Các hệ thống này có thể thay đổi về quy mô tùy thuộc vào nhu cầu của tổ chức, từ một trình quản lý tài liệu đơn giản đến một dịch vụ giàu tính năng với quy trình xuất bản, nhắm mục tiêu đối tượng, công cụ cộng tác, v.v. Mặc dù các hệ thống này rất linh hoạt ở các khía cạnh khác nhau, chúng hầu như luôn được thiết kế để được truy cập thông qua tương tác với một trang web hoặc ứng dụng. Đối với trường hợp sử dụng cụ thể của một đại lý dịch vụ khách hàng (người thường sử dụng cơ sở kiến thức như một trong những tài nguyên chính của họ để hỗ trợ khách hàng), cần phải tích hợp chặt chẽ với phần mềm trung tâm liên lạc để cho phép đại lý xử lý các truy vấn của người dùng một cách liền mạch nhất có thể.

# Cơ sở kiến thức SeaX

Cơ sở kiến thức của chúng tôi được thiết kế ngay từ đầu với một trường hợp sử dụng rất cụ thể: dịch vụ khách hàng bằng giọng nói. Trong khi hầu hết, nếu không phải tất cả, các hệ thống cơ sở kiến thức hiện có đều dựa vào việc điều hướng qua các trang web phân cấp hoặc nhập một truy vấn tìm kiếm, cơ sở kiến thức của chúng tôi cần phải nhanh hơn và độc lập hơn để các đại diện dịch vụ khách hàng có thể dành toàn bộ sự chú ý cho khách hàng trong khi vẫn trả lời nhanh các câu hỏi.

Nếu bạn muốn chuyển thẳng đến phần trình diễn, bạn có thể xem video trình diễn SeaX KB ngắn của chúng tôi:
<iframe width="85%" height="450px" src="https://www.youtube.com/embed/C_e_gaZHSFA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>


## Giao diện người dùng nhúng cho các đại lý trực tiếp

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-intro.png" alt="Cái nhìn đầu tiên về giao diện cơ sở kiến thức SeaX."/>

*Cái nhìn đầu tiên về giao diện cơ sở kiến thức SeaX.*
</center>

Một cách tự nhiên, vì công cụ cơ sở kiến thức của chúng tôi được thiết kế đặc biệt cho các ứng dụng trung tâm liên lạc, nó tích hợp nguyên bản với nền tảng SeaX để các đại lý có thể truy cập cơ sở kiến thức một cách liền mạch trong khi xử lý các cuộc gọi và tin nhắn. Không cần chuyển đổi cửa sổ, không cần lướt qua các tab, không cần điều hướng các trang web lồng nhau.

## Tìm kiếm nhanh và chính xác

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-manual-search.png" alt="Kết quả tìm kiếm thủ công trong cơ sở kiến thức SeaX."/>

*Kết quả tìm kiếm thủ công trong cơ sở kiến thức SeaX.*
</center>

Ở cấp độ cơ bản nhất, cơ sở kiến thức của chúng tôi được cung cấp bởi một công cụ tìm kiếm cực kỳ nhanh và chính xác. Chúng tôi sử dụng các kỹ thuật xử lý ngôn ngữ tự nhiên và trích xuất thông tin tiên tiến nhất để thu thập ý nghĩa từ văn bản thuần túy, các truy vấn mẫu và các URL hỗ trợ và đối sánh các phát biểu của khách hàng với các mục cơ sở kiến thức phù hợp nhất. Công cụ cơ sở kiến thức có khả năng mở rộng cao và có thể hỗ trợ hàng tỷ tài liệu mà không có sự thay đổi đáng kể về thời gian phản hồi.

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-detail.png" alt="Một bài viết trong cơ sở kiến thức ở chế độ xem mở rộng sau khi nhấp vào kết quả tìm kiếm."/>

*Một bài viết trong cơ sở kiến thức ở chế độ xem mở rộng sau khi nhấp vào kết quả tìm kiếm.*
</center>

Ngoài việc tìm kiếm các tài liệu phù hợp nhất, công cụ tìm kiếm của chúng tôi còn cung cấp các kết quả tinh chỉnh hơn bằng cách trích xuất các từ khóa nổi bật từ truy vấn của người dùng và làm nổi bật các từ khóa và đoạn văn phù hợp nhất trong mỗi mục cơ sở kiến thức được đề xuất.

## Đề xuất tự động theo thời gian thực

Nhưng những gì chúng tôi đã trình bày cho đến nay vẫn là tìm kiếm thủ công. Các đại lý trực tiếp đang bận rộn tương tác với khách hàng và việc nhập thủ công một tìm kiếm vào cơ sở kiến thức mỗi khi họ cần thông tin sẽ lãng phí thời gian quý báu. Do đó, giá trị gia tăng lớn nhất mà cơ sở kiến thức SeaX mang lại là tìm kiếm tự động theo thời gian thực cho cả tương tác văn bản và giọng nói.

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-automatic-search.png" alt="Cơ sở kiến thức SeaX hiển thị các đề xuất bài viết tự động cho một tin nhắn đến của người dùng."/>

*Cơ sở kiến thức SeaX hiển thị các đề xuất bài viết tự động cho một tin nhắn đến của người dùng.*
</center>

Mỗi khi có một tin nhắn mới của người dùng, cơ sở kiến thức sẽ được truy vấn tự động bằng cách sử dụng tin nhắn chính xác của khách hàng. Trong thời gian thực, khi khách hàng nói, đại lý sẽ được cung cấp các đề xuất bài viết cơ sở kiến thức được cập nhật để tham khảo.

Điều này cũng hoạt động cho các cuộc gọi thoại! Bài đăng trên blog trước của chúng tôi, [Hãy để trung tâm liên lạc của bạn có tiếng nói riêng với trí tuệ giọng nói SeaX](https.seasalt.ai/blog/21-seax-voice-intelligence/), đã giới thiệu công cụ chuyển giọng nói thành văn bản tiên tiến của Seasalt.ai. Nền tảng SeaX sử dụng công cụ này để phiên âm tất cả các cuộc gọi thoại trong thời gian thực. Do đó, chúng tôi có thể sử dụng các bản phiên âm này cho nhiều ứng dụng hạ nguồn khác nhau, bao gồm cả tìm kiếm cơ sở kiến thức tự động.

## Mẫu phản hồi

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-response-template.png" alt="Một đại lý trả lời khách hàng bằng một cú nhấp chuột bằng cách sử dụng mẫu phản hồi do cơ sở kiến thức SeaX tạo ra."/>

*Một đại lý trả lời khách hàng bằng một cú nhấp chuột bằng cách sử dụng mẫu phản hồi do cơ sở kiến thức SeaX tạo ra.*
</center>

Kết quả tìm kiếm của cơ sở kiến thức đi kèm với một tính năng bổ sung giúp tăng tốc độ phản hồi của đại lý đối với các tương tác dựa trên văn bản. Khi một đại lý tìm thấy một bài viết cơ sở kiến thức có liên quan, họ có thể chỉ cần nhấp vào biểu tượng "+" ở bên trái tiêu đề để chèn một mẫu phản hồi vào cửa sổ trò chuyện của họ. Ở phần phụ trợ, mỗi khi cơ sở kiến thức được tìm kiếm, nó sẽ tạo ra một câu trả lời bằng văn bản cho câu hỏi của người dùng dựa trên thông tin phù hợp nhất từ bài viết cơ sở kiến thức được đề xuất và bao gồm bất kỳ liên kết hỗ trợ nào. Điều này có thể cải thiện đáng kể thời gian phản hồi của đại lý vì đại lý không còn bắt đầu từ đầu. Thay vào đó, họ đã có thông tin quan trọng từ bài viết cơ sở kiến thức được hiển thị trong cửa sổ trò chuyện của họ, vì vậy tất cả những gì họ cần làm là chỉnh sửa và gửi.


## Quản lý KB

Bây giờ chúng ta đã thấy công cụ cơ sở kiến thức có khả năng gì, có một câu hỏi còn bỏ ngỏ về phần phụ trợ: thông tin trong cơ sở kiến thức được quản lý như thế nào? Nền tảng SeaX cung cấp một giao diện người dùng quản lý cơ sở kiến thức được tích hợp đầy đủ mà quản trị viên có thể truy cập từ trang cài đặt.

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-management.png" alt="Giao diện quản lý cơ sở kiến thức SeaX."/>

*Giao diện quản lý cơ sở kiến thức SeaX.*
</center>

Trên trang này, bạn có thể thêm các mục cơ sở kiến thức mới riêng lẻ hoặc bạn có thể nhập/xuất toàn bộ cơ sở kiến thức của mình bằng tệp bảng tính. Giao diện cũng hỗ trợ chỉnh sửa và xóa các mục cơ sở kiến thức để bạn có thể liên tục cập nhật cơ sở kiến thức của mình.

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-edit.png" alt="Chỉnh sửa một bài viết cơ sở kiến thức duy nhất thông qua giao diện quản lý cơ sở kiến thức SeaX."/>

*Chỉnh sửa một bài viết cơ sở kiến thức duy nhất thông qua giao diện quản lý cơ sở kiến thức SeaX.*
</center>

## Hội thảo trên web

Nếu bạn muốn tìm hiểu sâu hơn về hệ thống cơ sở kiến thức và cách nó tích hợp với nền tảng SeaX, hãy xem hội thảo trên web của chúng tôi về chủ đề này:
<iframe width="85%" height="450px" src="https://www.youtube.com/embed/FOqQ01fpKQ4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

Để có một bản trình diễn trực tiếp hoặc để tìm hiểu cách Seasalt.ai có thể tùy chỉnh một giải pháp cho nhu cầu kinh doanh của bạn, hãy điền vào [biểu mẫu lên lịch trình diễn](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting) của chúng tôi.`;export{n as default};

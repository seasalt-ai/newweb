---
title: "SeaX KB: Cơ sở tri thức trả lời trước khi được hỏi"
metatitle: "SeaX KB: Cơ sở tri thức trả lời trước khi được hỏi"
date: 2022-08-15T22:01:32-07:00
modified_date: 2025-07-27T00:00:00Z
draft: false
author: Kim Dodds
description: "Trong bài đăng này, chúng tôi tiếp tục chủ đề tích hợp AI với Cơ sở tri thức được hỗ trợ bởi AI của SeaX, cung cấp các phản hồi được đề xuất theo thời gian thực."
weight: 1
tags: ["SeaX"]
canonicalURL: "/blog/seax-kb-a-knowledge-base/"
url: "/blog/seax-kb-a-knowledge-base/"
---

*Trong bài đăng blog trước của chúng tôi, [Cung cấp cho Trung tâm liên lạc của bạn tiếng nói riêng với SeaX Voice Intelligence](https://seasalt.ai/blog/21-seax-voice-intelligence/), chúng tôi đã chỉ ra cách các công cụ chuyển văn bản thành giọng nói và chuyển giọng nói thành văn bản nội bộ của Seasalt.ai nâng cao các khía cạnh khác nhau của nền tảng SeaX. Trong bài đăng này, chúng tôi tiếp tục chủ đề tích hợp AI với Cơ sở tri thức được hỗ trợ bởi AI của SeaX, lắng nghe các cuộc trò chuyện và cung cấp các phản hồi được đề xuất theo thời gian thực.*

# Mục lục
- [Cơ sở tri thức truyền thống](#the-traditional-knowledge-base)
- [Cơ sở tri thức SeaX](#seax-knowledge-base)
    - [Giao diện người dùng nhúng cho đại lý trực tiếp](#embedded-user-interface-for-live-agents)
    - [Tìm kiếm nhanh và chính xác](#fast-and-accurate-search)
    - [Đề xuất tự động theo thời gian thực](#real-time-automated-suggestions)
    - [Mẫu phản hồi](#response-templates)
    - [Quản lý KB](#kb-management)
    - [Webinar](#webinar)

# Cơ sở tri thức truyền thống

Về cơ bản, cơ sở tri thức (KB) chỉ đơn giản là một thư viện thông tin (lý tưởng là) được tổ chức tốt và dễ dàng truy cập, được sử dụng trên cơ sở tự phục vụ trực tuyến. Các hệ thống cơ sở tri thức tốt sẽ có các tính năng như tổ chức nội dung phân cấp, tìm kiếm và gắn nhãn để giúp người dùng tìm thông tin chính xác dễ dàng hơn.

Việc duy trì một cơ sở tri thức chi tiết là thực hành tiêu chuẩn đối với hầu hết các công ty hiện nay. Cho dù mục đích là giúp nhân viên chia sẻ thông tin nội bộ về sản phẩm của họ, trả lời câu hỏi cho khách hàng tiềm năng, hỗ trợ khách hàng khắc phục sự cố, hay tất cả những điều trên - việc cung cấp thông tin quan trọng cho nhân viên và khách hàng có nghĩa là công việc hiệu quả hơn và sự hài lòng của khách hàng cao hơn.

Thông thường, một cơ sở tri thức được triển khai và duy trì thông qua Hệ thống quản lý nội dung hoặc Hệ thống quản lý tri thức. Các hệ thống này có thể thay đổi về quy mô tùy thuộc vào nhu cầu của tổ chức, bắt đầu từ một trình quản lý tài liệu đơn giản đến một dịch vụ đầy đủ tính năng bao gồm quy trình xuất bản, nhắm mục tiêu đối tượng, công cụ cộng tác, v.v. Mặc dù các hệ thống này linh hoạt theo nhiều cách khác nhau, nhưng chúng hầu như luôn được thiết kế để truy cập thông qua tương tác với một trang web hoặc ứng dụng. Đối với trường hợp sử dụng cụ thể của một đại lý dịch vụ khách hàng (người thường sử dụng cơ sở tri thức như một trong những nguồn tài nguyên chính của họ trong việc hỗ trợ khách hàng), việc tích hợp chặt chẽ với phần mềm trung tâm liên lạc là cần thiết để cho phép các đại lý xử lý các truy vấn của người dùng một cách liền mạch nhất có thể.

# Cơ sở tri thức SeaX

Cơ sở tri thức của chúng tôi được thiết kế ngay từ ngày đầu với một trường hợp sử dụng rất cụ thể: dịch vụ khách hàng dựa trên giọng nói. Mặc dù hầu hết, nếu không phải tất cả, các hệ thống cơ sở tri thức hiện có đều dựa vào việc điều hướng qua các trang web phân cấp hoặc nhập truy vấn tìm kiếm, KB của chúng tôi cần phải nhanh hơn và độc lập hơn để cho phép các đại diện dịch vụ khách hàng tập trung hoàn toàn vào khách hàng trong khi vẫn trả lời các câu hỏi một cách nhanh chóng.

Nếu bạn muốn xem demo ngay, bạn có thể xem video demo SeaX KB ngắn của chúng tôi:
<iframe width="85%" height="450px" src="https://www.youtube.com/embed/C_e_gaZHSFA" title="Trình phát video YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>


## Giao diện người dùng nhúng cho đại lý trực tiếp

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-intro.png" alt="Cái nhìn đầu tiên về giao diện Cơ sở tri thức SeaX."/>

*Cái nhìn đầu tiên về giao diện Cơ sở tri thức SeaX.*
</center>

Đương nhiên, vì công cụ KB của chúng tôi được thiết kế đặc biệt cho các ứng dụng trung tâm liên lạc, nó có tích hợp gốc với nền tảng SeaX để các đại lý có thể truy cập KB một cách liền mạch trong khi xử lý cuộc gọi và tin nhắn. Không cần chuyển đổi cửa sổ, không cần lật qua các tab, không cần điều hướng qua các trang web lồng nhau.

## Tìm kiếm nhanh và chính xác

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-manual-search.png" alt="Kết quả từ tìm kiếm thủ công trong Cơ sở tri thức SeaX."/>

*Kết quả từ tìm kiếm thủ công trong Cơ sở tri thức SeaX.*
</center>

Ở cấp độ cơ bản nhất, cơ sở tri thức của chúng tôi được cung cấp bởi một công cụ tìm kiếm cực kỳ nhanh và chính xác. Chúng tôi sử dụng các kỹ thuật xử lý ngôn ngữ tự nhiên và trích xuất thông tin tiên tiến nhất để thu thập ý nghĩa từ văn bản thuần túy, các truy vấn mẫu và các URL hỗ trợ, đồng thời khớp các phát biểu của khách hàng với các mục KB phù hợp nhất. Công cụ cơ sở tri thức có khả năng mở rộng cao và có thể hỗ trợ hàng tỷ tài liệu mà không có sự thay đổi đáng kể về thời gian phản hồi.

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-detail.png" alt="Bài viết KB trong chế độ xem mở rộng sau khi nhấp vào kết quả tìm kiếm."/>

*Bài viết KB trong chế độ xem mở rộng sau khi nhấp vào kết quả tìm kiếm.*
</center>

Ngoài việc tìm kiếm tài liệu phù hợp nhất, công cụ tìm kiếm của chúng tôi còn cung cấp kết quả chi tiết hơn bằng cách trích xuất các từ khóa nổi bật từ truy vấn của người dùng và làm nổi bật các từ khóa và đoạn văn phù hợp nhất trong mỗi mục KB được đề xuất.

## Đề xuất tự động theo thời gian thực

Nhưng những gì chúng tôi đã trình bày cho đến nay vẫn là tìm kiếm thủ công. Các đại lý trực tiếp bận rộn tương tác với khách hàng, và sẽ mất thời gian quý báu để nhập tìm kiếm thủ công vào KB mỗi khi họ muốn có thông tin. Vì lý do đó, giá trị gia tăng lớn nhất mà Cơ sở tri thức SeaX mang lại là tìm kiếm tự động theo thời gian thực cho cả tương tác dựa trên văn bản và giọng nói.

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-automatic-search.png" alt="SeaX KB hiển thị các đề xuất bài viết tự động cho tin nhắn người dùng đến."/>

*SeaX KB hiển thị các đề xuất bài viết tự động cho tin nhắn người dùng đến.*
</center>

Mỗi khi có tin nhắn người dùng mới đến, cơ sở tri thức sẽ tự động được truy vấn bằng chính tin nhắn của khách hàng. Theo thời gian thực, khi khách hàng đang nói chuyện, đại lý sẽ được cung cấp các đề xuất bài viết KB cập nhật để tham khảo.

Và điều này cũng hoạt động với các cuộc gọi dựa trên giọng nói! Bài đăng blog cuối cùng của chúng tôi, [Cung cấp cho Trung tâm liên lạc của bạn tiếng nói riêng với SeaX Voice Intelligence](https://seasalt.ai/blog/21-seax-voice-intelligence/), đã giới thiệu công cụ Chuyển giọng nói thành văn bản tiên tiến của Seasalt.ai. Nền tảng SeaX sử dụng công cụ đó để chuyển đổi tất cả các cuộc gọi dựa trên giọng nói theo thời gian thực. Kết quả là, chúng tôi có thể sử dụng các bản ghi đó cho các ứng dụng hạ nguồn khác nhau, bao gồm tìm kiếm cơ sở tri thức tự động.

## Mẫu phản hồi

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-response-template.png" alt="Một đại lý phản hồi khách hàng chỉ bằng một cú nhấp chuột bằng cách sử dụng mẫu phản hồi được tạo bởi SeaX KB."/>

*Một đại lý phản hồi khách hàng chỉ bằng một cú nhấp chuột bằng cách sử dụng mẫu phản hồi được tạo bởi SeaX KB.*
</center>

Kết quả tìm kiếm từ cơ sở tri thức có thêm một tính năng giúp tăng tốc độ phản hồi của đại lý đối với các tương tác dựa trên văn bản. Khi đại lý tìm thấy một bài viết KB có liên quan, họ chỉ cần nhấp vào biểu tượng `+` ở bên trái tiêu đề để chèn mẫu phản hồi vào cửa sổ trò chuyện của họ. Ở phần phụ trợ, mỗi khi KB được tìm kiếm, nó sẽ tạo ra một phản hồi bằng văn bản cho câu hỏi của người dùng dựa trên thông tin liên quan nhất trong bài viết KB được đề xuất và bao gồm bất kỳ liên kết hỗ trợ nào. Điều này có thể cải thiện đáng kể thời gian phản hồi của đại lý, vì đại lý không còn bắt đầu từ một trang trống. Thay vào đó, họ đã có thông tin quan trọng từ bài viết KB trong cửa sổ trò chuyện của họ, vì vậy họ có thể dễ dàng chỉnh sửa và gửi.


## Quản lý KB

Bây giờ chúng ta đã thấy những gì công cụ KB có thể làm, có một câu hỏi còn bỏ ngỏ về phần phụ trợ: làm thế nào để bạn quản lý thông tin trong cơ sở tri thức? Nền tảng SeaX có giao diện quản lý KB tích hợp đầy đủ có sẵn cho quản trị viên từ trang cài đặt.

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-management.png" alt="Giao diện quản lý SeaX KB."/>

*Giao diện quản lý SeaX KB.*
</center>

Từ trang này, bạn có thể thêm một mục KB mới hoặc bạn có thể nhập/xuất toàn bộ cơ sở tri thức bằng cách sử dụng tệp bảng tính. Giao diện cũng hỗ trợ chỉnh sửa và xóa các mục KB để bạn có thể liên tục cập nhật KB của mình.

<center>
<img src="/images/blog/22-seax-knowledge-base/kb-edit.png" alt="Chỉnh sửa một bài viết KB duy nhất thông qua giao diện quản lý SeaX KB."/>

*Chỉnh sửa một bài viết KB duy nhất thông qua giao diện quản lý SeaX KB.*
</center>

## Hội thảo trực tuyến

Nếu bạn muốn xem hướng dẫn chi tiết hơn về hệ thống cơ sở tri thức và cách nó tích hợp với nền tảng SeaX, vui lòng xem hội thảo trực tuyến của chúng tôi về chủ đề này:
<iframe width="85%" height="450px" src="https://www.youtube.com/embed/FOqQ01fpKQ4" title="Trình phát video YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

Để có bản demo một-một, hoặc để tìm hiểu thêm về cách Seasalt.ai có thể điều chỉnh các giải pháp của mình theo nhu cầu kinh doanh của bạn, vui lòng điền vào [biểu mẫu Đặt lịch demo](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting) của chúng tôi.

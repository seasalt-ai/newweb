const n=`---
title: "Từ Demo đến Thành công: Vượt xa phần cứng (5/5)"
metatitle: "Từ Demo đến Thành công (5/5): Vượt xa phần cứng"
date: 2021-09-15 17:24:32-07:00
modified_date: 2025-07-28T16:56:53Z
draft: false
author: Cody Kim
description: "Trong phần cuối cùng của loạt bài blog này, hãy theo dõi hành trình của Seasalt.ai để tạo ra SeaMeet, các giải pháp cuộc họp hiện đại hợp tác của chúng tôi."
weight: 1
tags:
  - SeaMeet
image: images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/SeaMeet animation.gif
canonicalURL: /blog/seameet-voice-hardware/
url: /blog/seameet-voice-hardware/
---

*Trong suốt loạt bài đăng trên blog này, hãy theo dõi hành trình của Seasalt.ai để tạo ra Trải nghiệm Cuộc họp Hiện đại toàn diện, bắt đầu từ những khởi đầu khiêm tốn, đến việc tối ưu hóa dịch vụ của chúng tôi trên các phần cứng và mô hình khác nhau, đến việc tích hợp các hệ thống NLP tiên tiến và cuối cùng là kết thúc bằng việc hiện thực hóa đầy đủ SeaMeet, các giải pháp cuộc họp hiện đại hợp tác của chúng tôi.*

## Vượt xa các cuộc họp hiện đại

Tại Seasalt.ai, chúng tôi ngưỡng mộ những khả năng hiện tại được thể hiện từ bản demo Build 2019 của sản phẩm này, nhưng chúng tôi quan tâm hơn đến việc sản phẩm này có thể trở thành gì, làm thế nào để đưa việc phiên âm cuộc trò chuyện vượt ra ngoài sự bắt chước. Nhưng trước khi bạn có thể đánh bại đối thủ, bạn cần phải hiểu rõ trò chơi mà bạn đang chơi. Và thế là SeaMeet ra đời. Ban đầu, chúng tôi xem Azure như một mô hình để nắm bắt các nền tảng tạo nên một dịch vụ phiên âm vững chắc và sử dụng các dịch vụ giọng nói của Azure làm phần phụ trợ để tận dụng công nghệ đã được thiết lập này.

Cũng như bất kỳ sản phẩm non trẻ nào, những thách thức xuất hiện ngay lập tức. Để nhanh chóng ra mắt sản phẩm, chúng tôi đã chọn sử dụng mảng micrô Microsoft Kinect DK, được quảng cáo là phần cứng tương đương với các dịch vụ giọng nói và được cho là đã được điều chỉnh để đạt được hiệu suất tối ưu nhất từ các mô hình nhận dạng giọng nói tự động của Azure. Mặc dù là một thiết bị được chế tạo tốt, thiết kế tốt không thể phủ nhận, nó đi kèm với vỏ nhôm hoàn chỉnh, ống kính góc rộng, camera độ sâu và mảng 7 micrô. Nó cũng có giá khá cao, chỉ dưới 400 đô la. Bắt đầu từ tháng 4 năm 2021, Kinect DK đã gặp vấn đề nghiêm trọng về thiếu hàng. Nó vẫn hết hàng tính đến thời điểm viết bài này vào tháng 9 năm 2021. Điều này càng củng cố rằng Kinect không phải là thiết bị phù hợp với chúng tôi.

<center>
<img src="/images/blog/7-seameet-voice-intelligence-meeting-transcription-hardware/kinect_store_page.png"/>

*Azure Kinect DK đã hết hàng từ 2021/4 khi bài viết này được xuất bản (2021/9)*
</center>

Mảng micrô là thành phần đầu tiên trong quy trình phiên âm cuộc trò chuyện. Là nhà cung cấp dịch vụ phiên âm, chúng tôi cần có khả năng cung cấp phần cứng của mình một cách bền vững và đáng tin cậy.

Hành trình tìm kiếm mảng micrô hoàn hảo của chúng tôi đã dẫn chúng tôi đến hai lựa chọn: [Respeaker Array v2.0](https://www.seeedstudio.com/ReSpeaker-Mic-Array-v2-0.html) và [Respeaker Core v2.0](https://www.seeedstudio.com/ReSpeaker-Core-v2-0.html). Cả hai thiết bị này đều là mảng tròn, lần lượt có bốn và sáu micrô, đây là một tính năng quan trọng để có thể thực hiện định vị nguồn 360 độ và cho phép chúng tôi dễ dàng tích hợp các thiết bị mới này vào hệ thống hiện có của mình. Vẻ đẹp thực sự của các thiết bị này là chúng đi kèm với các thuật toán xử lý tín hiệu tích hợp bao gồm khử nhiễu, khử tiếng vọng và tạo chùm tia được điều chỉnh hoàn hảo theo kích thước của micrô.

<center>
<img src="/images/blog/7-seameet-voice-intelligence-meeting-transcription-hardware/respeaker_array.png" alt="Respeaker Array v2.0 trình diễn VAD và định vị nguồn"/>

*Respeaker Array v2.0 trình diễn VAD và định vị nguồn*
</center>

<center>
<img src="/images/blog/7-seameet-voice-intelligence-meeting-transcription-hardware/array_demo.jpg" alt="Demo cuộc họp trực tiếp với Respeaker Array v2.0"/>

*Demo cuộc họp trực tiếp với Respeaker Array v2.0*
</center>

Đối với mảng bốn micrô Array v2.0, được cấp nguồn hoàn toàn bằng cổng USB, điều này có nghĩa là máy tính của người dùng chỉ phải tập trung vào việc truyền âm thanh đến máy chủ. Điều này giúp giảm tải việc xử lý tín hiệu cho mảng micrô.


<center>
<img src="/images/blog/7-seameet-voice-intelligence-meeting-transcription-hardware/core_demo.png" alt="Respeaker Core v2.0 được chụp với bản demo"/>

*Respeaker Core v2.0 được chụp với bản demo*
</center>

Thậm chí còn hấp dẫn hơn là Core v2.0 được trang bị bộ xử lý ARM và RAM 1GB. Có khả năng chạy một bản phân phối Linux đầy đủ và có đủ sức mạnh xử lý để chạy tập lệnh máy khách của chúng tôi, chúng tôi không chỉ giảm tải việc xử lý từ máy tính của người dùng bằng thiết bị này mà còn loại bỏ hoàn toàn nhu cầu kết nối máy tính với micrô. Vì các mảng micrô hiện đang thực hiện xử lý nặng, chúng tôi đã giảm các yêu cầu phần cứng cần thiết để chạy sản phẩm của mình và do đó đã tăng hiệu quả lượng khán giả có thể hưởng lợi từ SeaMeet.

<center>
<img src="/images/blog/7-seameet-voice-intelligence-meeting-transcription-hardware/respeaker_core.png" alt="Ví dụ Core v2.0 về vị trí micrô độc lập"/>

*Ví dụ Core v2.0 về vị trí micrô độc lập*
</center>

Một đặc điểm độc đáo khác của các mảng micrô này là chúng không có vỏ bọc. Cả hai đều được vận chuyển dưới dạng PCB trần với micrô, chip và cổng đều lộ ra ngoài. Mặc dù nhiều người sẽ coi đây là một sự bất tiện, nhưng chúng tôi thấy đây là cơ hội để tạo ra một thiết bị thực sự độc đáo, không thể nhầm lẫn là của Seasalt.

    Với các thiết bị này, chúng tôi đã hoàn thiện nguyên mẫu SeaMeet, dịch vụ phiên âm cuộc họp hiện đại, tiên tiến của chúng tôi. Và với điều này, chúng tôi kết thúc loạt bài năm phần của mình, bắt đầu khi SeaMeet chỉ là một hạt giống được truyền cảm hứng từ bản demo của Microsoft, và kết thúc bằng một sản phẩm hoàn toàn độc lập. Vẫn còn ở giai đoạn đầu, SeaMeet có một hành trình thú vị phía trước khi chúng tôi tiếp tục trau dồi hệ thống diarization, cảm nhận cuộc họp và các mô hình ngôn ngữ của mình. Đội ngũ Seasalt.ai rất mong muốn tiếp tục cách mạng hóa cách thế giới kinh doanh.
`;export{n as default};

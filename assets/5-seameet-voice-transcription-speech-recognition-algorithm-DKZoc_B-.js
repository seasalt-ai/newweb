const n=`---
title: "Từ Demo đến Thành Công: Vượt Qua Thuật Toán Giọng Nói của Cuộc Họp Hiện Đại (3/5)"
metatitle: "Demo đến Thành Công (3/5): Vượt Qua Thuật Toán Giọng Nói"
date: 2021-07-30 17:43:38-07:00
modified_date: 2025-07-29 00:00:00+00:00
draft: false
author: Cody Kim, Shayne Mei
description: "Trong phần ba của loạt blog này, hãy theo dõi hành trình của Seasalt.ai tạo ra SeaMeet, giải pháp họp hiện đại hợp tác."
weight: 1
tags:
  - SeaMeet
image: images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/SeaMeet animation.gif
canonicalURL: /blog/seameet-voice-speech-recognition/
url: /blog/seameet-voice-speech-recognition/
---

*Trong suốt loạt blog này, hãy theo dõi hành trình của Seasalt.ai tạo ra trải nghiệm Cuộc Họp Hiện Đại toàn diện, bắt đầu từ những khởi đầu khiêm tốn, tối ưu hóa dịch vụ trên các phần cứng và mô hình khác nhau, tích hợp hệ thống NLP tiên tiến và cuối cùng là hiện thực hóa SeaMeet, giải pháp họp hợp tác hiện đại.*

## Vượt Qua Thuật Toán
Modern Meetings là một bản demo tuyệt vời, nhưng nó vẫn chỉ là demo. Còn rất nhiều việc phải làm để đưa nó vào sản xuất. Chúng tôi đã [triển khai thành công](https://seasalt.ai/blog/5-seameet-voice-transcription-speech-recognition-algorithm/) phiên bản demo với Microsoft Azure. Nhưng nhận ra [những hạn chế](https://seasalt.ai/blog/5-seameet-voice-transcription-speech-recognition-algorithm/) của phần mềm, chúng tôi quyết định thay thế thuật toán bằng của riêng mình và làm cho trải nghiệm mượt mà, nhẹ nhàng và linh hoạt hơn.
Có bốn thành phần chính của Modern Meetings như sau:

1. Xử lý tín hiệu trên mảng micro, đặc biệt là beam forming
2. Phân đoạn và nhận diện người nói
3. Nhận diện giọng nói tùy chỉnh
4. Giao diện người dùng tốt hơn

Tiếp theo, chúng tôi sẽ trình bày chi tiết các thành phần quan trọng.

<center>
<img src="/images/blog/5-seameet-voice-intelligence-meeting-transcription-speech-recognition-algorithm-of-modern-meeting/tech-stack.png" alt="SeaMeet architect with 4 major components"/>

*Chúng tôi đã điều chỉnh cả 4 thành phần chính của Modern Meetings với công nghệ riêng: 1. Xử lý tín hiệu với mảng micro; 2. Phân đoạn và nhận diện người nói; 3. Nhận diện giọng nói tùy chỉnh; 4. Giao diện web hiện đại.*
</center>

### Xử lý tín hiệu trên mảng micro
Mảng micro, so với micro đơn gần miệng, thu âm từ mọi hướng 360 độ, với khoảng cách lên đến 5 mét. Do đó, một mảng micro có thể thu giọng nói trong phòng họp vừa 10x10 mét. Vì tất cả micro đều tập trung trên một thiết bị, nó giảm đáng kể dây cáp trong phòng họp và đơn giản hóa việc lắp đặt, bảo trì.
Mục tiêu tiếp theo khi dùng mảng micro là cung cấp dữ liệu chất lượng tốt nhất cho mô hình. Trước khi nhận diện giọng nói tự động, chúng tôi thực hiện nhiều thuật toán xử lý tín hiệu. Thành phần chính là thuật toán beamforming. Với mảng micro tròn, đa hướng, chúng tôi tận dụng sự khác biệt thời gian nhỏ khi âm thanh đến các micro. Beamforming xác định đặc điểm chính của tín hiệu — beam tốt nhất — và tăng cường tần số này, đồng thời giảm tiếng ồn không mong muốn. Hiệu quả là khử nhiễu và giảm vang, làm cho giọng nói rõ ràng hơn.

Để beamforming hoạt động tối ưu, cần biết vị trí nguồn (người nói) so với micro. Nhưng thực tế điều này không khả thi, nên chúng tôi tính toán trọng số trường xa bằng cách xác định hướng nguồn. Bước đầu tiên này gọi là xác định vị trí nguồn hoặc cụ thể hơn là hướng đến (DOA). Vấn đề chính là làm mượt kết quả. Thuật toán cho kết quả gần đúng nhưng nguồn xác định dao động 30 độ quanh hướng thực, làm sai beamforming. Giải pháp là chỉ dùng dải tần số chứa phần lớn giọng nói con người cho thuật toán xác định vị trí nguồn, kết hợp kỹ thuật làm mượt bằng cách lưu lịch sử DOA để tính trung bình. DOA ổn định hơn giúp tính trọng số trường xa và xác định beam tốt nhất.

Với chuỗi thuật toán trên Kinect DK: beamforming, khử nhiễu, giảm vang, xác định vị trí nguồn, chúng tôi tạo ra giọng nói rõ ràng, tăng cường theo thời gian thực và xác định hướng người nói. Điều này hỗ trợ nhận diện người nói ở bước tiếp theo.

### Phân đoạn và nhận diện người nói

Thành phần tiếp theo của hệ thống chuyển âm cuộc họp hiện đại là nhận diện người nói tự động. Như đã nói ở phần trước, đọc văn bản hội thoại lộn xộn không có thông tin người nói rất khó chịu và làm mất ý nghĩa của hệ thống. Đây là lúc nhận diện người nói phát huy tác dụng.

Thành phần này giúp tự động căn chỉnh chuyển âm và âm thanh với tên người nói. Để thực hiện, chúng tôi dùng kỹ thuật phân đoạn, nhóm các đoạn âm thanh thành số nhóm bằng số người nói trong bản ghi. Kỹ thuật này sử dụng hệ thống phát hiện hoạt động giọng nói (VAD) để xác định đoạn nói, từ đó trích xuất vector đại diện cho cửa sổ ngắn. Mỗi vector này gọi là xvector cấp câu, trung bình lại thành xvector cấp người nói. Các xvector này được đưa vào thuật toán phân nhóm, mỗi nhóm đại diện cho các đoạn nói của cùng một người. Lựa chọn thuật toán phân nhóm ảnh hưởng lớn đến hiệu quả, chúng tôi đạt được tỷ lệ lỗi phân đoạn tối ưu (DER) với phân nhóm phổ dùng ma trận liên kết ngưỡng tự động điều chỉnh bằng giá trị NME. Cuối cùng, cần xác định người nói của mỗi nhóm. Trước cuộc họp, có thể ghi âm 40 giây của mỗi người để trích xuất xvector, so sánh với nhóm để nhận diện người nói.

Điểm mạnh của quy trình này là tính linh hoạt. Nhiều cuộc họp không thể lấy trước bản ghi của từng người, ví dụ họp với khách VIP hoặc hội nghị lớn có 50 người nói. Khi đó, bỏ qua bước đăng ký, hệ thống vẫn nhóm các đoạn nói, chỉ cần con người nghe vài giây mỗi nhóm để xác định người nói. Kết hợp giao diện người dùng hiện đại, chúng tôi cung cấp chức năng tương tự nhưng linh hoạt hơn.

### Nhận diện giọng nói tùy chỉnh

Sau khi tìm hiểu trình chuyển âm cuộc họp của Microsoft và điểm mạnh của nó, chúng tôi sẵn sàng làm hệ thống độc lập và vượt qua sản phẩm cách mạng sẵn có. Động lực của Modern Meetings và mọi sản phẩm chuyển âm là các mô hình nhận diện giọng nói tự động (ASR). Vì vậy, chúng tôi tập trung nhiều nhất vào đây.
Azure Cognitive Services cung cấp nhiều mô hình cho các ngôn ngữ và phương ngữ khác nhau. Tuy nhiên, hiệu suất giữa các phương ngữ khó phân biệt. Với các phương ngữ tiếng Anh, có thể phần lớn công sức và dữ liệu tập trung vào mô hình tiếng Anh Mỹ, sau đó tinh chỉnh bằng dữ liệu có giọng để tạo ra các mô hình phương ngữ khác. Chúng tôi muốn đảm bảo nếu cung cấp mô hình riêng thì phải tối ưu cho từng trường hợp sử dụng. Điều này đòi hỏi hàng nghìn giờ âm thanh và chuyển âm bản địa hóa, cùng nhiều tuần huấn luyện và tinh chỉnh. Nhưng cảm giác thấy mô hình tiến bộ qua từng epoch và thực hiện đúng cam kết rất tuyệt vời.

Khi đã có mô hình nền tảng vững chắc, bước tiếp theo là mở rộng khả năng sử dụng và tùy chỉnh. Mỗi ngành có nhiều thuật ngữ riêng, khiến mô hình ASR khó phân biệt từ chuyên ngành và từ phổ thông phát âm giống nhau.

Giải pháp của chúng tôi là SeaVoice, cung cấp nền tảng tập trung để người dùng dễ dàng tinh chỉnh mô hình cho nhu cầu riêng.
`;export{n as default};

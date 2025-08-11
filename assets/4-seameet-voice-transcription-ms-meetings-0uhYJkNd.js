const n=`---
title: "Từ Demo đến Thành công: Cạm bẫy của các cuộc họp hiện đại (2/5)"
metatitle: "Từ Demo đến Thành công (2/5): Cạm bẫy của các cuộc họp hiện đại"
date: 2021-07-30
draft: false
author: Cody Kim
description: "Trong phần thứ hai của loạt blog này, hãy theo dõi hành trình của Seasalt.ai để tạo ra SeaMeet, giải pháp cuộc họp hiện đại hợp tác của chúng tôi."
weight: 1
tags:
  - SeaMeet
image: images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/SeaMeet animation.gif
canonicalURL: /blog/seameet-voice-and-microsoft-modern-meetings/
url: /blog/seameet-voice-and-microsoft-modern-meetings/
---

*Trong suốt loạt blog này, hãy theo dõi hành trình của Seasalt.ai để tạo ra Trải nghiệm cuộc họp hiện đại toàn diện, bắt đầu từ những khởi đầu khiêm tốn, đến việc tối ưu hóa dịch vụ của chúng tôi trên các phần cứng và mô hình khác nhau, đến việc tích hợp các hệ thống NLP tiên tiến và cuối cùng là hiện thực hóa hoàn toàn SeaMeet, giải pháp cuộc họp hiện đại hợp tác của chúng tôi.*

## Cạm bẫy của các cuộc họp hiện đại

Trong suốt quá trình phát triển, chúng tôi đã gặp phải nhiều trở ngại không thể đoán trước mà không có nguyên nhân hoặc giải pháp rõ ràng.

### Khởi đầu nhanh chóng

Trở ngại đầu tiên là làm cho các công cụ của chúng tôi hoạt động. Azure đã cung cấp một mẫu Cuộc họp hiện đại mà chúng tôi rất vui vì nó tương thích với Linux, nhưng chúng tôi nhận thấy rằng việc sử dụng SDK trên Windows để chạy bản demo dễ dàng hơn nhiều -- dù sao thì đó cũng là một sản phẩm của Microsoft. Sau nhiều lần cố gắng không thành công để chạy mẫu được cung cấp trên Linux, cuối cùng chúng tôi đã phải từ bỏ con đường đó và chuyển sang Windows. Cuối cùng, chúng tôi đã có một bộ chuyển đổi giọng nói hoạt động, đó là một khởi đầu tuyệt vời.

### Độ trễ

Một vấn đề chúng tôi gặp phải là độ trễ khoảng năm giây khi nhận kết quả nhận dạng trên giao diện người dùng. Mặc dù 5 giây có vẻ khá nhanh, nhưng độ trễ này rõ ràng là quá chậm vài giây để trở thành một giải pháp tiện lợi và thiết thực, đặc biệt đối với giao tiếp thời gian thực.

<center>
<img src="/images/blog/4-seameet-voice-intelligence-meeting-transcription-pitfalls-of-microsoft-modern-meetings/default_ui.png" style="width:400px;" alt="Giao diện người dùng mặc định để chuyển đổi giọng nói bằng Azure Speech SDK"/>

*Giao diện người dùng mặc định để chuyển đổi giọng nói do Azure Speech SDK cung cấp*
</center>

Độ trễ cũng là một vấn đề nghiêm trọng ở phần phụ trợ. Khi bắt đầu mỗi cuộc họp, kết quả đến theo thời gian thực (như quảng cáo!) nhưng khi cuộc họp tiếp tục, độ trễ sẽ định kỳ tăng vọt lên đến ba mươi giây trước khi văn bản xuất hiện trên màn hình. Đến lúc đó, bất cứ điều gì đã nói đã trở nên không liên quan trong cuộc trò chuyện. Sau vô số thử nghiệm, chúng tôi bắt đầu nhận thấy rằng độ trễ thay đổi trong suốt cả ngày, điều mà chúng tôi cho là do tải máy chủ của Azure vào thời điểm đó. Chúng tôi đang kinh doanh sản phẩm nhất quán, đáng tin cậy, vì vậy những sự chậm trễ dao động và không thể đoán trước này là không thể chấp nhận được. Càng có nhiều lý do để dựa vào các mô hình và máy chủ của riêng chúng tôi.

### Phương ngữ

Một lý do đặc biệt khiến chúng tôi sử dụng Azure Speech Service ngay từ đầu là sự hỗ trợ rộng rãi của họ đối với nhiều ngôn ngữ và phương ngữ. Chúng tôi đặc biệt hào hứng khi sử dụng mô hình tiếng Anh Singapore của Azure Speech Service. Nhưng hãy tưởng tượng sự ngạc nhiên của chúng tôi khi phát hiện ra rằng, đối với phương ngữ Singapore, mô hình tiếng Anh Mỹ luôn vượt trội hơn mô hình tiếng Anh Singapore. Hơn nữa, ngay cả mô hình tốt nhất cũng không đáp ứng được những thách thức trong thế giới thực.

<center>
<img src="/images/blog/4-seameet-voice-intelligence-meeting-transcription-pitfalls-of-microsoft-modern-meetings/bad_result.png"/>

*Bản ghi kết quả của "Chúc mừng! Bé trai hay bé gái?"*
</center>

Chúng tôi đã thấy các kết quả như “ola regulations may be boiled baby cool” trong khi câu nói thực sự là “Chúc mừng! Bé trai hay bé gái?”. Một mô hình ngôn ngữ được đào tạo tốt lẽ ra phải loại bỏ bản ghi như vậy. Mặc dù đây là một ví dụ cực đoan, nhưng thường xuyên hơn là không, sẽ có lỗi trong mỗi bản ghi. Dù lỗi nhỏ đến đâu, chẳng hạn như thiếu một mạo từ hoặc từ bị hiểu sai, bất kỳ lỗi nào cũng gây mất tập trung và có thể dễ dàng làm hỏng danh tiếng của dịch vụ ghi chép.

### Cập nhật Windows

Một vài tuần sau, nhóm đã dành nhiều đêm để đảm bảo sản phẩm của chúng tôi sẵn sàng cho buổi trình diễn khách hàng chỉ còn vài ngày nữa. Bộ chuyển đổi cuộc họp của chúng tôi chạy trơn tru trên ba máy tính xách tay Windows riêng biệt. Sau đó, một ngày nọ, chúng tôi chỉ còn một máy tính hoạt động mặc dù không ai chạm vào mã. Chúng tôi đã kiểm tra mạng của mình, kiểm tra tường lửa của mình, bất cứ điều gì chúng tôi có thể nghĩ ra có thể đột ngột khiến sản phẩm của chúng tôi bị lỗi. Phỏng đoán cuối cùng của chúng tôi là một bản cập nhật Windows bất ngờ đã khiến Azure Speech SDK không tương thích một cách khó hiểu với hai máy tính của chúng tôi khi chúng tôi so sánh ba hệ thống từng bit. Với buổi giới thiệu sắp diễn ra nhanh chóng, căng thẳng và áp lực đã đến mức đỉnh điểm. Chỉ còn một hệ thống, nhóm đã thỏa thuận: không thay đổi mã và tuyệt đối không cập nhật. Sau thử thách này, chúng tôi đã đủ.

### Vượt ra ngoài các cuộc họp hiện đại

Để thoát khỏi những trở ngại này, đội ngũ Seasalt.ai đã bắt đầu đào tạo các mô hình âm thanh và ngôn ngữ của riêng mình để cạnh tranh với khả năng của bộ chuyển đổi đàm thoại của Azure. Trong suốt quá trình, chúng tôi luôn tự hỏi, chúng ta sẽ đi đâu từ đây? Làm thế nào chúng ta có thể mở rộng sản phẩm đã rất quan trọng này?

Các cuộc họp hiện đại đã chứng minh tiềm năng chuyển giọng nói thành văn bản mạnh mẽ, nhưng đó là giới hạn của nó. Nó có thể lắng nghe chúng ta, nhưng nếu chúng ta có thể khiến nó suy nghĩ thay chúng ta thì sao. Chỉ với các bản ghi, mặc dù sản phẩm rất ấn tượng, nhưng các ứng dụng có phần hạn chế. Chuyển từ chuyển giọng nói thành văn bản sang trí tuệ giọng nói mở ra cánh cửa rộng lớn cho những gì chúng ta có thể tạo ra. Các ví dụ về trí tuệ bao gồm tóm tắt cuộc họp, trừu tượng hóa chủ đề và trích xuất hành động. Cuối cùng, thiết kế một giao diện đẹp mắt để kết nối mọi thứ trong một gói tuyệt đẹp.

Và đây là câu chuyện cho đến nay, khởi đầu hành trình của Seasalt.ai để mang đến những giải pháp kinh doanh tốt nhất cho một thị trường đang phát triển nhanh chóng và cung cấp cho thế giới. Nếu bạn muốn biết thêm chi tiết, vui lòng tiếp tục đọc phần còn lại của loạt blog.
`;export{n as default};

---
title: "Từ Demo đến Thành công: Nhận thức cuộc họp (4/5)"
metatitle: "Từ Demo đến Thành công (4/5): Nhận thức cuộc họp"
date: 2021-08-28T12:26:00-07:00
author: Kim Dodds
image: "images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/SeaMeet animation.gif"
draft: false
description: "Trong phần thứ tư của loạt blog này, hãy theo dõi hành trình của Seasalt.ai để tạo ra SeaMeet, giải pháp cuộc họp hiện đại hợp tác của chúng tôi."
tags: ["SeaMeet"]
weight: 1  
canonicalURL: "/blog/seameet-voice-summarization-topic-abstraction"
url: "/blog/seameet-voice-summarization-topic-abstraction"
aliases:
    - /blog/6-seameet-voice-intelligence-meeting-transcription-summarization-topic-abstraction-action-extraction/
---

*Trong suốt loạt blog này, hãy theo dõi hành trình của Seasalt.ai để tạo ra Trải nghiệm cuộc họp hiện đại toàn diện, bắt đầu từ những khởi đầu khiêm tốn, đến việc tối ưu hóa dịch vụ của chúng tôi trên các phần cứng và mô hình khác nhau, đến việc tích hợp các hệ thống NLP tiên tiến và cuối cùng là hiện thực hóa hoàn toàn SeaMeet, giải pháp cuộc họp hiện đại hợp tác của chúng tôi.*

## Vượt ra ngoài bản ghi

Tất cả những trở ngại trước đây mà chúng tôi phải đối mặt đã dạy cho chúng tôi một bài học quan trọng: rằng chúng tôi có thể tự mình làm tốt hơn tất cả những điều này.
Vì vậy, đội ngũ Seasalt.ai đã bắt đầu đào tạo các mô hình âm thanh và ngôn ngữ của riêng mình để cạnh tranh với khả năng của bộ chuyển đổi đàm thoại của Azure.
Microsoft đã có một bài thuyết trình tuyệt vời tại MS Build 2019, giới thiệu Azure Speech Services vừa là một sản phẩm có khả năng cao vừa rất dễ tiếp cận.
Sau khi bị ấn tượng, chúng tôi buộc phải đặt câu hỏi, chúng ta sẽ đi đâu từ đây?
Làm thế nào chúng ta có thể mở rộng sản phẩm đã rất quan trọng này? Các cuộc họp hiện đại đã chứng minh tiềm năng chuyển giọng nói thành văn bản mạnh mẽ, nhưng đó là giới hạn của nó.
Chúng tôi biết Azure có thể lắng nghe chúng tôi, nhưng nếu chúng tôi có thể khiến nó *suy nghĩ* thay chúng tôi thì sao?
Chỉ với các bản ghi, mặc dù sản phẩm rất ấn tượng, nhưng các ứng dụng có phần hạn chế.

Bằng cách tích hợp công nghệ chuyển giọng nói thành văn bản hiện có với các hệ thống có thể tạo ra thông tin chi tiết từ các bản ghi, chúng tôi có thể cung cấp một sản phẩm vượt quá mong đợi và dự đoán nhu cầu của người dùng.
Chúng tôi quyết định kết hợp ba hệ thống để cải thiện giá trị tổng thể của các bản ghi SeaMeet của chúng tôi: tóm tắt, trừu tượng hóa chủ đề và trích xuất mục hành động.
Mỗi hệ thống này được chọn để giảm bớt các vấn đề cụ thể của người dùng.

Để minh họa, chúng tôi sẽ hiển thị kết quả chạy các hệ thống tóm tắt, chủ đề và hành động trên bản ghi ngắn sau:

```
Kim: "Cảm ơn, Xuchen, bạn đã bị tắt tiếng vì có nhiều người đang trong cuộc gọi này. Nhấn Phím 6 để bật tiếng."

Xuchen: "Được rồi, tôi cứ nghĩ đó chỉ là tín hiệu kém.",

Kim: "Vâng.",

Sam: "Tôi vừa gửi một tệp riêng với dữ liệu giọng nói cho các ngày thứ Ba cho đến 30 ngày. Các bạn nên có một số phiên bản cập nhật.",

Kim: "Vì vậy, chắc chắn sẽ có những trường hợp ngoại lệ mà điều này không hoạt động. Tôi đã tìm thấy một vài trường hợp như trong ví dụ này. Nó lấy động từ ra và nói người nói là người được giao, trong khi thực sự Carol mới là người được giao. Nhưng nó có cùng một mẫu với cái thứ hai, nơi bạn thực sự muốn tôi là người được giao vì họ không giao Jason, họ tự giao cho mình để nói với Jason.",

Sam: "Đã hiểu.",

Xuchen: "Vì vậy, nhược điểm của việc này là bạn phải viết các quy tắc cho nó. Vâng, ưu điểm là nó là một mô hình đã được đào tạo. Bạn có thể đào tạo nó thêm, nhưng chúng tôi không cần phải ném một tấn dữ liệu vào nó.",

Kim: "Mặc dù nó không thực hiện phân loại mà sẽ cho chúng ta Đây có phải là một hành động hay đây là một cái khác?",

Xuchen: "Vì vậy, thủ thuật ở đây là chúng ta muốn động từ phụ trợ phải có mặt, nhưng chúng ta cũng muốn có một số tên người.",

Sam: "Đúng vậy, nếu không thì có thể vì.",

Xuchen: "Vâng, nếu có một câu với, bạn biết đấy, có rất nhiều trường hợp với các từ rõ ràng. Tuy nhiên, không nhiều trong số chúng sẽ giúp ích cho các hành động."
```

Sau đây là ví dụ về các bản tóm tắt ngắn, trong đó chúng tôi đã đưa từng phân đoạn trong bản ghi gốc qua bộ tóm tắt:

```
Kim: "Xuchen bị tắt tiếng vì có nhiều người đang trong cuộc gọi."

Xuchen: "Đó chỉ là tín hiệu kém."

Sam: "Tôi đã gửi một tệp riêng với dữ liệu giọng nói cho các ngày thứ Ba cho đến 30 ngày."

Kim: "Sẽ có những trường hợp ngoại lệ mà điều này không hoạt động."

Xuchen: "Nhược điểm của việc đào tạo một mô hình đã được đào tạo là bạn phải viết các quy tắc cho nó."

Kim: "Phân loại không thực hiện phân loại mà sẽ cho họ một hành động."

Xuchen: "Thủ thuật ở đây là họ muốn động từ phụ trợ phải có mặt, nhưng họ cũng muốn có một số tên người."

Xuchen: "Nếu có một câu với các từ, không nhiều trong số chúng sẽ giúp ích cho các hành động."
```

Và ví dụ này cho thấy toàn bộ cuộc họp được tóm tắt thành một đoạn văn duy nhất:

```
“Xuchen bị tắt tiếng vì có nhiều người đang trong cuộc gọi. Sam đã gửi một tệp riêng với dữ liệu giọng nói cho các ngày thứ Ba cho đến 30 ngày. Xuchen đã tìm thấy một số trường hợp ngoại lệ mà người nói là người được giao.”
```

Cốt lõi của cả thành phần tóm tắt ngắn và dài là một mô hình tóm tắt dựa trên transformer.
Chúng tôi tinh chỉnh mô hình trên một tập dữ liệu đối thoại để tóm tắt trừu tượng.
Dữ liệu chứa các đoạn văn bản có độ dài khác nhau, mỗi đoạn được ghép nối với một bản tóm tắt viết tay.
Đối với tóm tắt đa ngôn ngữ, chúng tôi sử dụng cùng một mô hình, nhưng sử dụng một mô hình cơ sở đa ngôn ngữ được tinh chỉnh trên một phiên bản dịch của tập dữ liệu.
Từ giao diện SeaMeet, người dùng cũng có tùy chọn để xác minh bản tóm tắt do máy tạo ra, hoặc cung cấp bản tóm tắt của riêng họ.
Sau đó, chúng tôi có thể thu thập các bản tóm tắt do người dùng nhập này và thêm chúng trở lại tập huấn luyện của chúng tôi để liên tục cải thiện các mô hình của chúng tôi.

## Trừu tượng hóa chủ đề

<center>
<img src="/images/blog/6-seameet-voice-intelligence-meeting-transcription-summarization-topic-abstraction-action-extraction/topics.png" alt="Công cụ trích xuất chủ đề của SeaMeet trích xuất các chủ đề từ một cuộc họp"/>

*Giao diện SeaMeet, tập trung vào tab ‘Chủ đề’ ở phía bên phải*
</center>

Một vấn đề khác khi xử lý các bộ sưu tập bản ghi lớn là tổ chức, phân loại và tìm kiếm chúng.
Bằng cách tự động trừu tượng hóa các từ khóa và chủ đề từ bản ghi, chúng tôi có thể cung cấp cho người dùng một cách dễ dàng để theo dõi các cuộc họp nhất định, hoặc thậm chí các phần cụ thể của các cuộc họp nơi một chủ đề liên quan đang được thảo luận.
Ngoài ra, các chủ đề này đóng vai trò là một phương pháp khác để tóm tắt thông tin quan trọng và đáng nhớ nhất trong bản ghi.

Sau đây là ví dụ về các từ khóa sẽ được trích xuất từ bản ghi mẫu:

```
động từ phụ trợ
người nói
dữ liệu giọng nói
tệp riêng biệt
phiên bản cập nhật
tên người
mô hình đã được đào tạo
viết quy tắc
```

Nhiệm vụ trích xuất chủ đề sử dụng sự kết hợp của các phương pháp trừu tượng và trích xuất.
Trừu tượng hóa đề cập đến một phương pháp phân loại văn bản, trong đó mỗi đầu vào được phân loại thành một tập hợp các nhãn được thấy trong quá trình đào tạo.
Đối với phương pháp này, chúng tôi đã sử dụng một kiến trúc mạng thần kinh được đào tạo trên các tài liệu được ghép nối với danh sách các chủ đề liên quan.
Trích xuất đề cập đến một phương pháp tìm kiếm cụm từ khóa, trong đó các cụm từ khóa liên quan được trích xuất từ văn bản được cung cấp và trả về dưới dạng chủ đề.
Đối với phương pháp này, chúng tôi sử dụng sự kết hợp của các số liệu tương tự như độ tương tự cosine & TF-IDF ngoài thông tin đồng xuất hiện từ để trích xuất các từ khóa và cụm từ liên quan nhất.

Các kỹ thuật trừu tượng và trích xuất đều có ưu và nhược điểm, nhưng bằng cách sử dụng chúng cùng nhau, chúng ta có thể tận dụng thế mạnh của từng kỹ thuật.
Mô hình trừu tượng rất tốt trong việc thu thập các chi tiết khác biệt nhưng có liên quan và tìm ra một chủ đề tổng quát hơn một chút phù hợp với tất cả chúng.
Tuy nhiên, nó không bao giờ có thể dự đoán một chủ đề mà nó chưa từng thấy trong quá trình đào tạo, và không thể đào tạo trên mọi chủ đề có thể xuất hiện trong một cuộc trò chuyện!
Các mô hình trích xuất, mặt khác, có thể kéo các từ khóa và chủ đề trực tiếp từ văn bản, có nghĩa là nó độc lập với miền, và có thể trích xuất các chủ đề mà nó chưa từng thấy trước đây.
Nhược điểm của phương pháp này là đôi khi các chủ đề quá giống nhau hoặc quá cụ thể.
Bằng cách sử dụng cả hai, chúng tôi đã tìm thấy một điểm cân bằng tốt giữa khả năng tổng quát hóa và tính đặc thù của miền.

## Trích xuất mục hành động

<center>
<img src="/images/blog/6-seameet-voice-intelligence-meeting-transcription-summarization-topic-abstraction-action-extraction/actions.png" alt="Công cụ trích xuất hành động của SeaMeet tạo ra các bản tóm tắt trừu tượng ngắn gọn về các mục hành động được trích xuất từ các bản ghi cuộc họp"/>

*Giao diện người dùng SeaMeet, tập trung vào tab ‘Hành động’ ở phía bên phải*
</center>

Điểm khó khăn cuối cùng mà chúng tôi đặt ra để giảm bớt cho người dùng là nhiệm vụ ghi lại các mục hành động.
Ghi lại các mục hành động là một nhiệm vụ rất phổ biến được giao cho một nhân viên thực hiện trong một cuộc họp.
Ghi lại ‘ai đã nói với ai làm gì khi nào’ có thể tốn rất nhiều thời gian, và có thể khiến người viết bị phân tâm và không thể tham gia đầy đủ vào cuộc họp.
Bằng cách tự động hóa quá trình này, chúng tôi hy vọng sẽ giảm bớt một phần trách nhiệm đó từ người dùng để mọi người có thể dành toàn bộ sự chú ý của mình để tham gia vào cuộc họp.

Sau đây là ví dụ về một số mục hành động có thể được trích xuất từ bản ghi ví dụ:

```
gợi ý: "Sam nói nhóm nên có một số phiên bản cập nhật."

tuyên bố: "Kim nói chắc chắn sẽ có những trường hợp ngoại lệ mà điều này không hoạt động."

bắt buộc: "Xuchen nói ai đó phải viết quy tắc cho nó."

mong muốn: "Xuchen nói nhóm muốn động từ phụ trợ phải có mặt, nhưng cũng muốn có một số tên người."
```

Mục đích của hệ thống Trích xuất Hành động là tạo ra các bản tóm tắt trừu tượng ngắn gọn về các mục hành động được trích xuất từ các bản ghi cuộc họp.
Kết quả của việc chạy Trích xuất Hành động trên bản ghi cuộc họp là một danh sách các lệnh, gợi ý, tuyên bố ý định và các phân đoạn có thể hành động khác có thể được trình bày dưới dạng việc cần làm hoặc theo dõi cho những người tham gia cuộc họp.
Trong tương lai, bộ trích xuất cũng sẽ nắm bắt tên của người được giao & người giao cũng như ngày đến hạn gắn liền với mỗi mục hành động.

Quy trình trích xuất hành động có hai thành phần chính: bộ phân loại và bộ tóm tắt.
Đầu tiên, mỗi phân đoạn được đưa vào bộ phân loại đa lớp và nhận một trong các nhãn sau:

- Câu hỏi
- Mệnh lệnh
- Gợi ý
- Mong muốn
- Tuyên bố
- Không thể hành động

Nếu phân đoạn nhận bất kỳ nhãn nào khác ngoài ‘không thể hành động’, nó sẽ được gửi đến thành phần tóm tắt cùng với hai phân đoạn trước đó trong bản ghi, cung cấp thêm ngữ cảnh cho bản tóm tắt.
Bước tóm tắt về cơ bản giống như thành phần tóm tắt độc lập, tuy nhiên mô hình được đào tạo trên một tập dữ liệu tùy chỉnh được xây dựng đặc biệt để tóm tắt các mục hành động với định dạng đầu ra mong muốn.

## SeaMeet có bộ não

Đây là một bước tiến lớn trong việc tạo ra sản phẩm độc đáo của riêng chúng tôi: đào tạo các mô hình tóm tắt cộng với các mô hình trích xuất chủ đề và hành động để đưa sản phẩm của chúng tôi tiến xa hơn, và thiết kế một giao diện đẹp mắt để kết nối mọi thứ trong một gói tuyệt đẹp.
Đây là câu chuyện cho đến nay, khởi đầu hành trình của Seasalt.ai để mang đến những giải pháp kinh doanh tốt nhất cho một thị trường đang phát triển nhanh chóng và cung cấp cho thế giới, SeaMeet: Tương lai của các cuộc họp hiện đại.

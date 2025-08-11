const n=`---
title: "Từ Demo đến Thành công: Nhận thức về Cuộc họp (4/5)"
metatitle: "Từ Demo đến Thành công (4/5): Nhận thức về Cuộc họp"
date: 2021-08-28 12:26:00-07:00
modified_date: 2025-07-28T16:56:53Z
draft: false
author: Kim Dodds
description: "Trong phần thứ tư của loạt bài blog này, hãy theo dõi hành trình của Seasalt.ai để tạo ra SeaMeet, các giải pháp cuộc họp hiện đại hợp tác của chúng tôi."
weight: 1
tags:
  - SeaMeet
image: images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/SeaMeet animation.gif
canonicalURL: /blog/seameet-voice-summarization-topic-abstraction
url: /blog/seameet-voice-summarization-topic-abstraction
---

*Trong suốt loạt bài đăng trên blog này, hãy theo dõi hành trình của Seasalt.ai để tạo ra Trải nghiệm Cuộc họp Hiện đại toàn diện, bắt đầu từ những khởi đầu khiêm tốn, đến việc tối ưu hóa dịch vụ của chúng tôi trên các phần cứng và mô hình khác nhau, đến việc tích hợp các hệ thống NLP tiên tiến và cuối cùng là kết thúc bằng việc hiện thực hóa đầy đủ SeaMeet, các giải pháp cuộc họp hiện đại hợp tác của chúng tôi.*

## Ngoài việc sao chép

Tất cả những trở ngại trước đây mà chúng tôi phải đối mặt đã dạy cho chúng tôi một bài học quan trọng: rằng chúng tôi có thể tự mình làm tất cả những điều này tốt hơn.
Vì vậy, đội ngũ tại Seasalt.ai đã bắt đầu đào tạo các mô hình âm học và ngôn ngữ của riêng mình để cạnh tranh với khả năng của trình sao chép đàm thoại của Azure.
Microsoft đã có một bài thuyết trình tuyệt vời tại MS Build 2019, giới thiệu Dịch vụ giọng nói của Azure như một sản phẩm vừa có năng lực cao vừa rất dễ tiếp cận.
Sau khi bị choáng ngợp, chúng tôi buộc phải đặt câu hỏi, chúng ta sẽ đi đâu từ đây?
Làm thế nào chúng ta có thể mở rộng sản phẩm vốn đã rất hữu ích này? Các cuộc họp hiện đại đã chứng tỏ tiềm năng chuyển giọng nói thành văn bản mạnh mẽ, nhưng đó là nơi nó dừng lại.
Chúng tôi biết Azure có thể lắng nghe chúng tôi, nhưng điều gì sẽ xảy ra nếu chúng tôi có thể khiến nó *suy nghĩ* cho chúng tôi?
Chỉ với các bản sao chép, mặc dù sản phẩm rất ấn tượng, các ứng dụng có phần hạn chế.

Bằng cách tích hợp công nghệ chuyển giọng nói thành văn bản hiện có với các hệ thống có thể tạo ra thông tin chi tiết từ các bản sao chép, chúng tôi có thể cung cấp một sản phẩm vượt quá mong đợi và dự đoán nhu cầu của người dùng.
Chúng tôi đã quyết định kết hợp ba hệ thống để cải thiện giá trị tổng thể của các bản sao chép SeaMeet của chúng tôi: tóm tắt, trừu tượng hóa chủ đề và trích xuất mục hành động.
Mỗi hệ thống này được chọn để giảm bớt các điểm đau cụ thể của người dùng.

Để minh họa, chúng tôi sẽ hiển thị kết quả của việc chạy các hệ thống tóm tắt, chủ đề và hành động trên bản ghi ngắn sau:

\`\`\`
Kim: "Cảm ơn bạn, Xuchen bạn đang bị tắt tiếng vì có rất nhiều người trong cuộc gọi này. Nhấn sao 6 để bật tiếng."

Xuchen: "OK tôi nghĩ đó chỉ là tín hiệu kém.",

Kim: "Vâng.",

Sam: "Tôi vừa gửi một tệp riêng có dữ liệu giọng nói cho các ngày thứ Ba cho đến 30 ngày. Các bạn nên có một số phiên bản cập nhật.",

Kim: "Vì vậy, chắc chắn sẽ có những trường hợp đặc biệt mà điều này không hoạt động. Tôi đã tìm thấy một vài trường hợp như trong ví dụ này. Nó giống như lấy động từ ra khỏi đó và nói rằng người nói là người được giao nhiệm vụ trong khi thực tế Carol mới là người được giao nhiệm vụ. nhưng đó là cùng mộtรูปแบบ như một cái gì đó giống như cái thứ hai, nơi bạn thực sự muốn tôi là người được giao nhiệm vụ vì họ không giao nhiệm vụ cho Jason mà họ tự giao nhiệm vụ cho mình để nói với Jason.",

Sam: "Hiểu rồi.",

Xuchen: "Vì vậy, nhược điểm của điều này là bạn phải viết các quy tắc cho nó. Vâng, ưu điểm là nó đã là một mô hình được đào tạo. Bạn có thể đào tạo nó thêm nhưng chúng tôi không cần phải ném một tấn dữ liệu vào đây.",

Kim: "Mặc dù nó không thực hiện phân loại để cho chúng tôi biết Đây có phải là một hành động hay là một cái gì khác?",

Xuchen: "Vì vậy, mẹo ở đây là chúng tôi muốn có động từ phụ, nhưng chúng tôi cũng muốn có một số tên người.",

Sam: "Đúng vậy, nếu không có thể là do.",

Xuchen: "Vâng, nếu có một câu với bạn biết đấy có rất nhiều trường hợp có những từ rõ ràng. Tuy nhiên, không nhiều trong số chúng sẽ giúp ích cho các hành động."
\`\`\`

## Tóm tắt

<center>
<img src="/images/blog/6-seameet-voice-intelligence-meeting-transcription-summarization-topic-abstraction-action-extraction/summarization.png" alt="Giao diện SeaMeet của Seasalt.ai, có các phát biểu của người dùng với các bản tóm tắt ngắn gọn của họ"/>

*Tổng quan về giao diện SeaMeet của chúng tôi, có các phát biểu của người dùng với các bản tóm tắt ngắn gọn của họ ở bên trái*
</center>

Trong khi việc điều hướng một bản ghi văn bản chắc chắn dễ dàng hơn việc đào sâu hàng giờ âm thanh đã ghi, đối với các cuộc họp đặc biệt dài, việc tìm kiếm nội dung cụ thể hoặc có được cái nhìn tổng quan về toàn bộ cuộc trò chuyện vẫn có thể tốn thời gian.
Chúng tôi đã chọn cung cấp hai loại tóm tắt ngoài bản ghi đầy đủ.

Các bản tóm tắt ở cấp độ phát biểu riêng lẻ cung cấp các phân đoạn ngắn gọn, dễ đọc hơn.
Ngoài ra, các bản tóm tắt ngắn giúp chuẩn hóa văn bản bằng cách loại bỏ các phân đoạn trống về mặt ngữ nghĩa và thực hiện giải quyết đại từ và đồng tham chiếu.
Sau đó, chúng tôi có thể cung cấp các phân đoạn đã tóm tắt vào các ứng dụng hạ nguồn (chẳng hạn như trừu tượng hóa chủ đề) để cải thiện kết quả cuối cùng.

Ngoài các bản tóm tắt ngắn, chúng tôi cũng đã chọn cung cấp một bản tóm tắt dài duy nhất nhằm mục đích tạo ra một cái nhìn tổng quan rất chung về toàn bộ cuộc họp.
Bản tóm tắt này hoạt động giống như một bản tóm tắt cho cuộc họp, chỉ bao gồm các điểm nói chính và kết luận.

Sau đây là một ví dụ về các bản tóm tắt ngắn, trong đó chúng tôi đã đưa từng phân đoạn trong bản ghi gốc qua trình tóm tắt:

\`\`\`
Kim: "Xuchen bị tắt tiếng vì có rất nhiều người trong cuộc gọi."

Xuchen: "Chỉ là tín hiệu kém."

Sam: "Tôi đã gửi một tệp riêng có dữ liệu giọng nói cho các ngày thứ Ba cho đến 30 ngày."

Kim: "Sẽ có những trường hợp đặc biệt mà điều này không hoạt động."

Xuchen: "Nhược điểm của việc đào tạo một mô hình đã được đào tạo là bạn phải viết các quy tắc cho nó."

Kim: "Việc phân loại không thực hiện phân loại sẽ mang lại cho họ một hành động."

Xuchen: "Mẹo ở đây là họ muốn có động từ phụ, nhưng họ cũng muốn có một số tên người."

Xuchen: "Nếu có một câu có các từ, không nhiều trong số chúng sẽ giúp ích cho các hành động."
\`\`\`

Và ví dụ này cho thấy toàn bộ cuộc họp được tóm tắt trong một đoạn văn duy nhất:

\`\`\`
"Xuchen bị tắt tiếng vì có rất nhiều người trong cuộc gọi. Sam đã gửi một tệp riêng có dữ liệu giọng nói cho các ngày thứ Ba cho đến 30 ngày. Xuchen đã tìm thấy một số trường hợp đặc biệt trong đó người nói là người được giao nhiệm vụ."
\`\`\`

Cốt lõi của cả hai thành phần tóm tắt ngắn và dài là một mô hình tóm tắt dựa trên máy biến áp.
Chúng tôi tinh chỉnh mô hình trên một tập dữ liệu đối thoại để tóm tắt trừu tượng.
Dữ liệu chứa các đoạn văn bản có độ dài khác nhau, mỗi đoạn được ghép nối với một bản tóm tắt viết tay.
Đối với tóm tắt đa ngôn ngữ, chúng tôi sử dụng cùng một mô hình, nhưng sử dụng một mô hình cơ sở đa ngôn ngữ được tinh chỉnh trên một phiên bản đã dịch của tập dữ liệu.
Từ giao diện SeaMeet, người dùng cũng có tùy chọn xác minh bản tóm tắt do máy tạo hoặc cung cấp bản tóm tắt của riêng họ.
Sau đó, chúng tôi có thể thu thập các bản tóm tắt do người dùng nhập này và thêm chúng trở lại vào bộ đào tạo của mình để liên tục cải thiện các mô hình của mình.

## Trừu tượng hóa chủ đề

<center>
<img src="/images/blog/6-seameet-voice-intelligence-meeting-transcription-summarization-topic-abstraction-action-extraction/topics.png" alt="Công cụ trích xuất chủ đề của SeaMeet trích xuất các chủ đề từ một cuộc họp"/>

*Giao diện SeaMeet, tập trung vào tab ‘Chủ đề’ ở phía bên phải*
</center>

Một vấn đề khác khi xử lý các bộ sưu tập lớn các bản sao chép là sắp xếp, phân loại và tìm kiếm chúng.
Bằng cách tự động trừu tượng hóa các từ khóa và chủ đề từ bản ghi, chúng tôi có thể cung cấp cho người dùng một cách dễ dàng để theo dõi các cuộc họp nhất định, hoặc thậm chí các phần cụ thể của các cuộc họp nơi một chủ đề có liên quan đang được thảo luận.
Ngoài ra, các chủ đề này đóng vai trò là một phương pháp khác để tóm tắt thông tin quan trọng và đáng nhớ nhất trong một bản ghi.

Đây là một ví dụ về các từ khóa sẽ được trích xuất từ bản ghi mẫu:

\`\`\`
động từ phụ
người nói
dữ liệu giọng nói
tệp riêng biệt
phiên bản cập nhật
tên người
mô hình được đào tạo
viết quy tắc
\`\`\`

Nhiệm vụ trích xuất chủ đề sử dụng sự kết hợp của các phương pháp trừu tượng và trích xuất.
Trừu tượng đề cập đến một phương pháp phân loại văn bản, trong đó mỗi đầu vào được phân loại thành một tập hợp các nhãn được thấy trong quá trình đào tạo.
Đối với phương pháp này, chúng tôi đã sử dụng một kiến trúc thần kinh được đào tạo trên các tài liệu được ghép nối với một danh sách các chủ đề có liên quan.
Trích xuất đề cập đến một phương pháp tìm kiếm cụm từ khóa trong đó các cụm từ khóa có liên quan được trích xuất từ văn bản được cung cấp và trả về dưới dạng chủ đề.
Đối với phương pháp này, chúng tôi sử dụng sự kết hợp của các số liệu tương tự như tương tự cosin và TF-IDF ngoài thông tin đồng xuất hiện của từ để trích xuất các từ khóa và cụm từ có liên quan nhất.

Cả hai kỹ thuật trừu tượng và trích xuất đều có ưu và nhược điểm, nhưng bằng cách sử dụng chúng cùng nhau, chúng ta có thể tận dụng thế mạnh của mỗi kỹ thuật.
Mô hình trừu tượng rất tuyệt vời trong việc thu thập các chi tiết riêng biệt nhưng có liên quan và tìm ra một chủ đề chung hơn một chút phù hợp với tất cả chúng.
Tuy nhiên, nó không bao giờ có thể dự đoán một chủ đề mà nó chưa thấy trong quá trình đào tạo, và không thể đào tạo trên mọi chủ đề có thể tưởng tượng được có thể xuất hiện trong một cuộc trò chuyện!
Các mô hình trích xuất, mặt khác, có thể lấy các từ khóa và chủ đề trực tiếp từ văn bản, có nghĩa là nó độc lập với miền và có thể trích xuất các chủ đề mà nó chưa từng thấy trước đây.
Hạn chế của phương pháp này là đôi khi các chủ đề quá giống nhau hoặc quá cụ thể.
Bằng cách sử dụng cả hai, chúng tôi đã tìm thấy một phương tiện hạnh phúc giữa có thể khái quát hóa và dành riêng cho miền.

## Trích xuất mục hành động

<center>
<img src="/images/blog/6-seameet-voice-intelligence-meeting-transcription-summarization-topic-abstraction-action-extraction/actions.png" alt="Công cụ trích xuất hành động của SeaMeet tạo ra các bản tóm tắt trừu tượng ngắn gọn về các mục hành động được trích xuất từ các bản sao chép cuộc họp"/>

*Giao diện người dùng SeaMeet, tập trung vào tab ‘Hành động’ ở phía bên phải*
</center>

Điểm đau cuối cùng mà chúng tôi đặt ra để giảm bớt cho người dùng là nhiệm vụ ghi lại các mục hành động.
Ghi lại các mục hành động là một nhiệm vụ rất phổ biến được giao cho một nhân viên thực hiện trong một cuộc họp.
Việc viết ra ‘ai đã bảo ai làm gì khi nào’ có thể cực kỳ tốn thời gian và có thể khiến người viết bị phân tâm và không thể tham gia đầy đủ vào cuộc họp.
Bằng cách tự động hóa quy trình này, chúng tôi hy vọng sẽ giảm bớt một phần trách nhiệm đó cho người dùng để mọi người có thể dành toàn bộ sự chú ý của mình để tham gia vào cuộc họp.

Sau đây là một ví dụ về một số mục hành động có thể được trích xuất từ bản ghi ví dụ:

\`\`\`
đề xuất: "Sam nói rằng nhóm nên có một số phiên bản cập nhật."

tuyên bố: "Kim nói rằng chắc chắn sẽ có những trường hợp đặc biệt mà điều này không hoạt động."

mệnh lệnh: "Xuchen nói rằng ai đó phải viết các quy tắc cho nó."

 mong muốn: "Xuchen nói rằng nhóm muốn có động từ phụ, nhưng cũng muốn có một số tên người."
\`\`\`

Mục đích của hệ thống Trình trích xuất hành động là tạo ra các bản tóm tắt trừu tượng ngắn gọn về các mục hành động được trích xuất từ các bản sao chép cuộc họp.
Kết quả của việc chạy Trình trích xuất hành động trên một bản sao chép cuộc họp là một danh sách các lệnh, đề xuất, tuyên bố về ý định và các phân đoạn có thể hành động khác có thể được trình bày dưới dạng việc cần làm hoặc theo dõi cho những người tham gia cuộc họp.
Trong tương lai, trình trích xuất cũng sẽ nắm bắt tên của người được giao nhiệm vụ và người giao nhiệm vụ cũng như ngày đến hạn gắn liền với mỗi mục hành động.

Quy trình trích xuất hành động có hai thành phần chính: một bộ phân loại và một bộ tóm tắt.
Đầu tiên, mỗi phân đoạn được chuyển vào một bộ phân loại đa lớp và nhận một trong các nhãn sau:

- Câu hỏi
- Mệnh lệnh
- Đề xuất
- Mong muốn
- Tuyên bố
- Không thể hành động

Nếu phân đoạn nhận được bất kỳ nhãn nào khác ngoài ‘không thể hành động’, nó sẽ được gửi đến thành phần tóm tắt cùng với hai phân đoạn trước đó trong bản ghi, cung cấp thêm ngữ cảnh cho việc tóm tắt.
Bước tóm tắt về cơ bản giống như thành phần tóm tắt độc lập, tuy nhiên mô hình được đào tạo trên một tập dữ liệu riêng được xây dựng đặc biệt để tóm tắt các mục hành động với định dạng đầu ra mong muốn.

## SeaMeet có bộ não

Đây là một bước tiến lớn trong việc tạo ra sản phẩm độc đáo của riêng chúng tôi: đào tạo các mô hình tóm tắt cộng với trích xuất chủ đề và hành động để đưa sản phẩm của chúng tôi đi xa hơn nữa và thiết kế một giao diện đẹp để kết hợp mọi thứ lại với nhau trong một gói tuyệt đẹp.
Đây là câu chuyện cho đến nay, sự khởi đầu của hành trình của Seasalt.ai để mang lại các giải pháp kinh doanh tốt nhất cho một thị trường đang phát triển nhanh chóng và mang đến cho thế giới, SeaMeet: Tương lai của các cuộc họp hiện đại.`;export{n as default};

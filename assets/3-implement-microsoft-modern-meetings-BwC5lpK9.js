const n=`---
title: "Từ bản demo đến thành công: Triển khai các cuộc họp hiện đại của Microsoft và hơn thế nữa (1/5)"
metatitle: "Từ bản demo đến thành công (1/5): Ngoài các cuộc họp hiện đại của Microsoft"
date: 2021-07-19
draft: false
author: Cody Kim
description: "Trong phần đầu tiên của loạt bài blog này, hãy theo dõi hành trình của Seasalt.ai để tạo ra SeaMeet, các giải pháp cuộc họp hiện đại hợp tác của chúng tôi."
weight: 1
tags:
  - SeaMeet
image: images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/SeaMeet animation.gif
canonicalURL: /blog/microsoft-modern-meetings/
url: /blog/microsoft-modern-meetings/
---

*Trong suốt loạt bài blog này, hãy theo dõi hành trình của Seasalt.ai để tạo ra một Trải nghiệm Họp Hiện đại toàn diện, bắt đầu từ những khởi đầu khiêm tốn, đến việc tối ưu hóa dịch vụ của chúng tôi trên các phần cứng và mô hình khác nhau, đến việc tích hợp các hệ thống NLP tiên tiến và cuối cùng kết thúc bằng việc hiện thực hóa hoàn toàn SeaMeet, các giải pháp họp hiện đại hợp tác của chúng tôi.*

### Tương lai của các cuộc họp hiện đại

[![Bản demo dịch vụ chuyển lời nói thành văn bản của Microsoft từ MS Build 2019](/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/ms-build-play.png)](https://www.youtube.com/watch?t=100&v=EYinMnQWgfU&feature=youtu.be)

Tại Microsoft Build 2019, Microsoft đã khuấy động khán giả khi họ công bố giải pháp điện toán đám mây mới nhất của mình: Dịch vụ giọng nói Azure, cụ thể hơn là ứng dụng Phiên âm cuộc họp. Sau khi được giới thiệu, trình phiên âm cuộc trò chuyện này ngay lập tức lọt vào tầm ngắm của mọi người và được đề cập trên các blog và tạp chí công nghệ hàng đầu. Buổi trình diễn, được minh họa trong video dưới đây vào năm 2019, đã cho thấy rất nhiều sức mạnh từ Dịch vụ giọng nói Azure. Chúng tôi không hề biết rằng nó đã nhanh chóng trở thành khúc dạo đầu cho cách các cuộc họp hiện đại sẽ được tổ chức trong bối cảnh đại dịch toàn cầu và sau đại dịch: đi từ vật lý sang ảo sang kết hợp.

<center>
<img src="/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/azure-demo.png" alt="Bản demo trực tiếp về dịch vụ chuyển lời nói thành văn bản và nhận dạng người nói của Microsoft Azure tại MS Build 2019"/>
</center>

Được quảng cáo là một nền tảng phiên âm cuộc trò chuyện, buổi giới thiệu của Microsoft về dịch vụ phiên âm cuộc họp của Azure, được giới thiệu một cách khéo léo là “Tương lai của các cuộc họp hiện đại”, đã thiết lập dịch vụ mới của họ như một nền tảng chuyển lời nói thành văn bản (STT) mạnh mẽ, hiệu quả, phù hợp với tất cả các doanh nghiệp đang tìm kiếm một cách để nhanh chóng và gọn gàng ghi lại tất cả các hội nghị quan trọng của họ.

Điều gì làm cho dịch vụ này trở thành đỉnh cao của phiên âm cuộc họp? Đầu tiên, hiệu suất thời gian thực. Khi công nghệ ngày càng nhanh hơn, sự kiên nhẫn ngày càng mỏng đi, nơi mà ngay cả một vài giây chậm trễ cũng đủ để làm phiền người dùng trung bình. Tuy nhiên, Microsoft đã chứng minh rằng trình phiên âm cuộc trò chuyện của họ nhanh hơn cả, cung cấp các bản phiên âm chính xác nhanh hơn một số dịch vụ phụ đề chi tiết, giúp bạn hoàn toàn có thể theo dõi một cuộc trò chuyện đồng thời chỉ bằng văn bản.

Tiếp theo, Microsoft cũng đã trình diễn khả năng nhận dạng người nói của mình. Việc kết thúc với một mớ văn bản hội thoại vô tổ chức thật khó chịu và vô dụng, nhưng nhận dạng người nói sẽ tự động gắn nhãn cho mỗi phát ngôn với người nói, tạo ra một định dạng dễ sử dụng.

![Giao diện người dùng của dịch vụ chuyển lời nói thành văn bản và nhận dạng người nói của Microsoft Azure](/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/azure-ui.png)

Ngày nay, phần cứng máy tính ngày càng mạnh mẽ hơn và các công ty tìm cách tận dụng mọi lõi cuối cùng từ các CPU và GPU mới nhất. Thông thường, công nghệ cũ trở nên lỗi thời và khách hàng buộc phải nâng cấp vài năm một lần chỉ để duy trì sự phù hợp trong xã hội. Trong “Tương lai của các cuộc họp hiện đại”, Microsoft đã tối ưu hóa Dịch vụ giọng nói Azure để chạy trên phần cứng cấp tiêu dùng trong khi vẫn giữ các tính toán nặng ở phía họ, mở rộng hơn nữa dân số vốn đã rộng lớn có thể hưởng lợi từ dịch vụ này.

Dịch vụ phiên âm cuộc họp của Azure nhằm tối ưu hóa cách chúng ta tiến hành kinh doanh. Mọi tổ chức đều nên kết hợp một sản phẩm như thế này vào quy trình làm việc của mình. Vào một ngày bình thường, thông tin liên tục trôi chảy và mọi bit đều quan trọng như bit cuối cùng, cho dù đó là lời nhắc, nhiệm vụ hay cập nhật. Quá thường xuyên, mọi thứ bị mất trong các vết nứt và điều đó có nghĩa là lãng phí thời gian và lãng phí lợi nhuận. Giải pháp của Microsoft cung cấp một bản ghi hoàn chỉnh, được tạo tự động, phân định chính xác những gì đã được nói và ai đã nói, vì vậy đã qua rồi những ngày thiếu thông tin và săn lùng mù quáng qua các bản ghi âm dài để tìm một phần cụ thể. Giờ đây, tất cả thông tin bạn cần đều được trình bày gọn gàng để bạn tham khảo thường xuyên khi cần. Công nghệ này quan trọng hơn bao giờ hết. Nếu năm 2020 đã dạy chúng ta bất cứ điều gì thì đó là sự cần thiết của sự linh hoạt, đặc biệt là ở nơi làm việc. Mọi người bị ốm và các sự kiện không lường trước được phát sinh, vì vậy hầu như không thể mong đợi nhân viên tham dự mọi cuộc thảo luận. Với các cuộc họp hiện đại, chúng ta tiến một bước gần hơn đến việc có thể đáp ứng những phát triển bất ngờ này bằng cách về cơ bản mang lại cho mọi người khả năng có mặt ở đó mà không thực sự ở đó.

### Triển khai các cuộc họp hiện đại

Vào giữa năm 2020, chúng tôi đã nhận được một yêu cầu đề xuất từ một khách hàng chính phủ ở Singapore. Vâng, đó vẫn là đại dịch. Nhưng Singapore đã kiểm soát được nó nên các cuộc họp của chính phủ vẫn diễn ra trong các phòng hội nghị thực tế. Họ muốn có một giải pháp hiện đại có thể phiên âm lời nói từ tối đa 12 người nói khác nhau. Hơn nữa, nhận dạng người nói sẽ đóng một vai trò quan trọng ở đây.

Về nhận dạng người nói, một điểm khác biệt đáng kể giữa những gì Azure cung cấp và những gì khách hàng cần là “đăng ký” giọng nói: Azure yêu cầu một số giọng nói được ghi âm trước từ tất cả những người nói để đăng ký dấu vân tay giọng nói của họ trong hệ thống. Tuy nhiên, không thể yêu cầu một số quan chức chính phủ được cho là rất quan trọng ngồi trước micrô để được ghi âm. Chúng tôi đã thực hiện một số điều chỉnh cho quy trình bằng cách thực hiện phân cụm người nói không giám sát trước (còn được gọi là phân đoạn người nói). Ý tưởng là nếu một người nói đã nói một lần trong hệ thống của chúng tôi, chúng tôi sẽ nhận ra họ vào lần nói tiếp theo.

![Sơ đồ luồng của dịch vụ chuyển lời nói thành văn bản và nhận dạng giọng nói của Microsoft Azure](/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/azure-diagram.png)

*Kiến trúc của các cuộc họp hiện đại từ [Phiên âm cuộc trò chuyện Azure](https://docs.microsoft.com/en-us/azure/cognitive-services/speech-service/conversation-transcription). Trong bản điều chỉnh của chúng tôi, chúng tôi đã nới lỏng yêu cầu “Đăng ký người dùng” trước cuộc họp thành sau cuộc họp.*


Sau đó, chúng tôi nhanh chóng tập hợp kho vũ khí của mình cho toàn bộ dự án. Bước đầu tiên là tìm nguồn cung cấp một mảng micrô chất lượng cao sẽ cung cấp dữ liệu âm thanh rõ ràng cho các mô hình nhận dạng của chúng tôi. Chúng tôi ngay lập tức bị thu hút bởi Azure Kinect: một mảng 7 micrô thời trang được đặt trong một vỏ nhôm hoàn toàn với phần thưởng bổ sung là một máy ảnh độ nét cao và các cảm biến độ sâu.

<center>
<img src="/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/kinect.png" alt="Azure Kinect DK trị giá 400 đô la được sử dụng cho các cuộc họp hiện đại"/>

*Azure Kinect DK trị giá 400 đô la được sử dụng cho các cuộc họp hiện đại*
</center>

Chỉ nhìn bề ngoài, đây là một thiết bị thực sự tinh vi sẽ bổ sung cho bất kỳ phòng hội nghị nào, nhưng quan trọng hơn là mảng micrô mạnh mẽ đã hứa hẹn chất lượng mà chúng tôi đang tìm kiếm. Với sự sắp xếp hình tròn, bảy micrô đã mở ra khả năng sử dụng các kỹ thuật xử lý tín hiệu tiên tiến như định vị nguồn và tạo chùm tia. Micrô này cũng là sự kết hợp hoàn hảo với phần phụ trợ của chúng tôi, sử dụng Dịch vụ giọng nói của Azure, một nền tảng chuyển lời nói thành văn bản đã được thiết lập, mang lại cho sản phẩm của chúng tôi sức mạnh cần thiết để trở thành một trình phiên âm cuộc họp hàng đầu.

<center>
<img src="/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/kinect-spec.png" alt="Azure Kinect DK đi kèm với một mảng 7 micrô để thu giọng nói"/>

*Azure Kinect DK đi kèm với một mảng 7 micrô để thu giọng nói*
</center>

Trong khi Azure không lọt vào vòng chung kết của SeaMeet, nó đã cho chúng tôi sự khởi đầu cần thiết để có thể hiện thực hóa tầm nhìn của mình. Cuối cùng, chúng tôi đã kết hợp tất cả những điều này với một giao diện người dùng. Trong lần lặp lại đầu tiên, chúng tôi đã sử dụng một thiết kế dựa trên Java chung chung, mặc dù đơn giản nhưng hoàn toàn có chức năng. Bởi vì thiết bị Kinect không thể chạy mã bên ngoài, tất cả những điều này phải chạy trên một máy tính xách tay Windows bổ sung. Mặc dù ban đầu nó hơi thô sơ, nhưng chúng tôi tự hào nói rằng chúng tôi đã có một sản phẩm phiên âm cuộc họp đầy đủ chức năng.

<center>
<img src="/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/seameet-old.png" alt="Thiết lập ban đầu của dịch vụ SeaMeet của Seasalt.ai bằng mảng micrô Microsoft Kinect"/>

*Triển khai các cuộc họp hiện đại với Azure Kinect và máy tính Windows, chạy giao diện người dùng dựa trên Java đơn giản để hiển thị phiên âm cuộc họp và nhận dạng người nói theo thời gian thực.*
</center>

### Triển khai các cuộc họp hiện đại

Vào tháng 5 năm 2021, các kỹ sư của chúng tôi đã đến Singapore để triển khai giải pháp kinh doanh hiện đại của chúng tôi như một bằng chứng về khái niệm. Đối đầu với hai công ty cạnh tranh khác, mỗi chúng tôi được giao nhiệm vụ trình diễn tầm nhìn của mình về tương lai của các cuộc họp.

Mặc dù thực tế là không dây đã trở thành tiêu chuẩn trong thập kỷ qua, chúng tôi thấy rằng các đối thủ cạnh tranh của chúng tôi vẫn chọn giải pháp có dây. Như bạn có thể thấy từ hình ảnh, mỗi người trong số 12 người nói đều được gắn vào một micrô riêng. Một người nói phải nói trực tiếp vào micrô trong một môi trường nói gần để hệ thống thu được giọng nói của họ. Điều này không chỉ cản trở nghiêm trọng tính linh hoạt mà một thiết lập như vậy còn nhân lên sự phức tạp với các thiết bị AV phức tạp. Giải pháp của chúng tôi, mặt khác, được cung cấp đầy đủ bởi các khả năng trường xa, nhờ vào mảng 7 micrô và các thuật toán xử lý tín hiệu.

Ở một mức độ nào đó, giải pháp của chúng tôi rất giống với “Alexa cho doanh nghiệp”: một thiết bị bao phủ toàn bộ căn phòng, chỉ cần một dây cáp nguồn. So với giải pháp của các đối thủ cạnh tranh, giải pháp của chúng tôi đi trước nhiều thế hệ theo nghĩa là chúng tôi thực sự hiểu nhu cầu của các doanh nghiệp hiện đại trong khi họ vẫn hoàn toàn bị ràng buộc vào thế hệ có dây lỗi thời.

<center>
<img src="/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/poc-setup.png"/>

*Thiết lập phòng hội nghị PoC. Có 12 người nói mô phỏng một cuộc họp chính phủ kéo dài 2 giờ.*

<img src="/images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/poc-captioned.png"/>

*Một bức ảnh chụp cận cảnh tất cả các thiết bị tại chỗ.*
</center>

Nhóm đã rất phấn khích khi thấy sự khác biệt lớn. Với một vài giờ điều chỉnh, PoC cuối cùng đã diễn ra rất suôn sẻ. Nhóm cũng đã có một chuyến tham quan ở Singapore sau PoC, tại một quốc gia nơi Covid-19 được kiểm soát chặt chẽ để cuộc sống và kinh doanh diễn ra như bình thường.

### Ngoài các cuộc họp hiện đại

Trong thời gian ở Singapore, suy nghĩ của chúng tôi đã vượt ra ngoài một PoC thành công: so với các giải pháp cạnh tranh khác, giải pháp của chúng tôi tốt hơn 10 lần. Nhưng làm thế nào chúng ta có thể làm tốt hơn 10 lần so với chính mình? Vui lòng làm theo các bước của chúng tôi đến blog tiếp theo trong loạt bài này.

`;export{n as default};

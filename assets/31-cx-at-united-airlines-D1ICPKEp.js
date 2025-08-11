const n=`---
title: "Dịch vụ khách hàng của United Airlines: Điều tốt, điều xấu và điều tồi tệ"
metatitle: "Phân tích dịch vụ khách hàng của United Airlines"
date: 2023-03-21 11:25:00-08:00
modified_date: 2025-07-28T16:56:53Z
draft: false
author: Xuchen Yao
description: "Xuchen Yao chia sẻ trải nghiệm gần đây của mình với dịch vụ khách hàng của United Airlines trong thời gian chuyến bay bị hoãn và hủy, đồng thời đề xuất các giải pháp để giải quyết thách thức về việc mở rộng quy mô hỗ trợ khách hàng một cách linh hoạt trong thời gian lưu lượng truy cập tăng đột biến."
weight: 1
tags:
  - SeaX
image: images/blog/31-cx-at-united-airlines/flight-delay-illustration.png
canonicalURL: /blog/customer-service-at-united-airlines/
url: /blog/customer-service-at-united-airlines/
---

*Xuchen Yao, CEO của [Seasalt.ai](https://seasalt.ai), chia sẻ trải nghiệm gần đây của mình với dịch vụ khách hàng của United Airlines sau khi đối mặt với các chuyến bay bị hoãn và hủy. Điều này khiến ông nhận ra những thách thức mà bộ phận hỗ trợ khách hàng của hãng hàng không phải đối mặt trong việc mở rộng quy mô một cách linh hoạt để xử lý lưu lượng truy cập tăng đột biến trong những tình huống như vậy. Xuchen nói về những cải tiến tiềm năng như chuyển hướng lưu lượng truy cập tự phục vụ khỏi các nhân viên con người, cải thiện hiệu quả của nhân viên con người và phát triển công nghệ để chủ động xác định và giảm thiểu rủi ro các vấn đề tiềm ẩn.*

Bài blog này được viết trên chuyến bay UA2 từ Singapore đến San Francisco vào ngày 22/03/2023.

Tôi gần đây đã có niềm vui được đi chuyến bay UA1 từ San Francisco (SFO) đến Singapore (SIN). Niềm vui nhanh chóng trở thành bất hạnh do chuyến bay bị hủy. Dưới đây là những điều học được về dịch vụ khách hàng của United từ góc nhìn của một nhà công nghệ xây dựng các trung tâm liên lạc.



# Một chuyến bay với hai lần trễ: trễ và hủy

Đây là kế hoạch cho chuyến đi đến Singapore từ Seattle vào thứ Ba, ngày 14/03/2023:

<center>
<img src="/images/blog/31-cx-at-united-airlines/united-flights.png" alt="Các chuyến bay United đã lên kế hoạch của tôi"/>

*7:29 sáng – 09:42 sáng, từ Seattle (SEA) đến San Francisco (SFO) trên chuyến bay UA2368. 11:50 sáng – 08:15 tối, từ San Francisco (SFO) đến Singapore (SIN) trên chuyến bay UA29.*
</center>

Thật không may, tôi đã không đi chuyến bay nào.

Chuyến bay đầu tiên bị hoãn 1,5 giờ do kẹt xe tại sân bay Seattle (lúc 7 giờ sáng!). Điều đó làm giảm thời gian chuyển tiếp của tôi xuống 0 tại SFO. Tôi đã nói chuyện với dịch vụ mặt đất tại SEA và họ đã chuyển tôi sang chuyến bay Alaska từ SEA đến SFO. Chuyến bay Alaska đó cũng bị hoãn nhưng vẫn đến SFO lúc 11 giờ sáng, cho tôi vừa đủ thời gian để bắt chuyến bay tiếp theo.

**ĐIỀU TỐT**: United cho phép tôi đổi chuyến bay sang Alaska miễn phí.

**ĐIỀU TỐT**: United rất chủ động trong việc thông báo về các sự chậm trễ thông qua mã ngắn “26266”. Khi sự chậm trễ xảy ra, họ thậm chí còn đưa ra các lựa chọn để đặt lại chuyến bay của tôi.

**ĐIỀU TỆ**: Tùy chọn đặt lại chuyến bay chỉ giới hạn ở các chuyến bay của United. Không có đặt lại giữa các hãng hàng không. Tôi phải nói chuyện với một người để được chuyển sang một chuyến bay khác.

**ĐIỀU TỒI TỆ**: Tại sao sân bay SEA lại tắc nghẽn vào lúc 7 giờ sáng?!

<center>
<table>
  <tr>
    <td><img src="/images/blog/31-cx-at-united-airlines/united-text-support-1.jpg" alt="Hỗ trợ tin nhắn văn bản của United - 1"/></td>
    <td><img src="/images/blog/31-cx-at-united-airlines/united-text-support-2.jpg" alt="Hỗ trợ tin nhắn văn bản của United - 2"/></td>
  </tr>
 </table>

*Hệ thống nhắn tin mã ngắn của United Airlines kịp thời và chủ động.*
</center>


1. Điều thú vị là **trên** UA1. Chúng tôi ở lại mặt đất 3 giờ và cuối cùng chuyến bay bị hủy do các sự kiện sau:
2. Đầu tiên, San Francisco có gió rất mạnh khiến tất cả các chuyến bay bị đình chỉ.
Sau đó, khi được phép bay, tất cả các máy bay đều đang chờ đợi trong một hàng dài để cất cánh.
3. Cuối cùng, khi gần đến lượt chúng tôi, các phi công nói rằng họ đang làm thêm giờ và theo quy định của FAA, việc họ tiếp tục bay là bất hợp pháp. Bởi vì chuyến bay đến Singapore là 17 giờ và với thời gian họ đã dành trên mặt đất, họ sẽ vượt quá giới hạn khi đến Singapore.

Thật không may, không có phi công thay thế, vì vậy toàn bộ chuyến bay đã bị hủy.

**ĐIỀU TỒI TỆ**: Trong suốt 3 giờ ở mặt đất, United chỉ cung cấp 2 chiếc bánh quy. Chỉ vậy thôi.

Mọi người vội vã ra khỏi máy bay, nghĩ về việc điều này ảnh hưởng đến chuyến đi của họ như thế nào. Vì đây là chuyến bay quốc tế, chúng tôi sẽ đến Singapore vào một ngày khác. Không phải ngày hôm sau, mà thực ra là hai ngày sau: vì Singapore đi trước 15 giờ và chuyến bay là 17 giờ.

Sau đó, khoảng 300 hành khách chạy đến dịch vụ khách hàng mặt đất của United. Khi tôi đến Dịch vụ khách hàng của United, đã có khoảng 200 người xếp hàng trước tôi. Rất nhiều người trong số họ bị ảnh hưởng do thời tiết từ các chuyến bay khác do United khai thác.

Việc nói chuyện với một nhân viên mặt đất là vô vọng vì hàng đợi di chuyển quá chậm. Tôi biết có một chuyến bay khác lúc 11 giờ tối đến Singapore cùng ngày, cũng của United. Hy vọng của tôi là được đặt lại chuyến bay đó lúc 11 giờ tối. Có lẽ rất nhiều người từ chuyến bay của tôi cũng muốn làm điều tương tự nhưng tất cả đều xếp hàng như tôi.

Đây là những gì tôi đã làm:

1. Tôi đã gọi cho United qua điện thoại: 800-864-8331
2. Tôi đã nhắn tin cho đại lý ảo của United qua mã ngắn: 32050.
3. Tôi đã sử dụng trang web của United để thử trò chuyện video với đại lý.
4. Tôi cũng đang xếp hàng chờ một đại lý mặt đất.

Tôi thực sự là một khách hàng **đa kênh** khi cần giải quyết một vấn đề quan trọng và khẩn cấp ngay lập tức.


**ĐIỀU TỐT**: United cung cấp 4 cách khác nhau để kết nối với dịch vụ khách hàng của họ.

**ĐIỀU TỐT**: Bằng cách xác nhận số hiệu chuyến bay, United đã có thể tra cứu trạng thái của chuyến bay và biết rằng nó bị ảnh hưởng, đồng thời đưa ra các tùy chọn đặt lại/hủy chuyến.

**ĐIỀU TỆ**: Ước tính thời gian chờ điện thoại hoàn toàn sai. Họ nói với tôi rằng thời gian chờ là 2 phút nhưng tôi đã đợi 45 phút để nói chuyện với một đại lý.

**ĐIỀU TỆ**: Chatbot rất ngu ngốc. Tôi phải làm theo “menu” của nó bằng cách nhấn 1/2/3/4 hoặc A/B/C/D/E làm câu trả lời.

<center>
<table>
  <tr>
    <td><img src="/images/blog/31-cx-at-united-airlines/united-text-support-3.jpg" alt="Hỗ trợ tin nhắn văn bản của United - 3"/></td>
    <td><img src="/images/blog/31-cx-at-united-airlines/united-text-support-4.jpg" alt="Hỗ trợ tin nhắn văn bản của United - 4"/></td>
    <td><img src="/images/blog/31-cx-at-united-airlines/united-text-support-5.jpg" alt="Hỗ trợ tin nhắn văn bản của United - 5"/></td>
  </tr>
 </table>

*Chatbot của United Airlines sử dụng công nghệ thế hệ cuối cùng cung cấp thẻ menu để giới hạn đầu vào của hành khách.*
</center>


**ĐIỀU TỒI TỆ**: Thực tế có ít hơn 10 nhân viên dịch vụ khách hàng mặt đất để xử lý hơn 1000 hành khách bị ảnh hưởng. Điều này tạo ra sự lo lắng, tức giận, bất lực và áp lực cho cả khách hàng và nhân viên. Điều này là do khi chuyến bay của chúng tôi bị hủy, dịch vụ mặt đất và tiếp viên hàng không đã nói với mọi người rằng hãy nói chuyện với dịch vụ khách hàng mặt đất của họ. **Việc hướng dẫn mọi hành khách bị ảnh hưởng nói chuyện với chưa đến 10 nhân viên dịch vụ khách hàng mặt đất đã tạo ra một cuộc tấn công “DDOS” vật lý vào dịch vụ khách hàng mặt đất của United.**

DDOS là viết tắt của “Distributed Denial of Service” (Tấn công từ chối dịch vụ phân tán) khi tin tặc điều hướng lưu lượng truy cập từ hàng triệu nơi đến một trang web duy nhất để làm cho nó không phản hồi bất kỳ dịch vụ nào.

**ĐIỀU TỒI TỆ**: Tôi đã sử dụng 4 kênh để nói chuyện với United (tin nhắn, trò chuyện video, cuộc gọi điện thoại, mặt đất). Tôi đã sử dụng tài nguyên nhiều hơn 4 lần và mọi người khác cũng có thể làm điều tương tự. Điều này đã làm tăng đột biến lưu lượng truy cập và áp lực lên dịch vụ khách hàng của United một cách giả tạo lên 4 lần. Tôi cho rằng mọi hành khách khác cũng đã làm như vậy vì điều đó giải thích tại sao “thời gian chờ 2 phút” của tôi cuối cùng lại trở thành 45 phút.

Cuối cùng, tôi đã kết nối được qua điện thoại và nhân viên đã dành khoảng 20 phút để đặt lại cho tôi một chuyến bay sau đó vào lúc 11 giờ tối đến Singapore cùng ngày. Khi tôi kết thúc, tôi vẫn đang xếp hàng trong cuộc trò chuyện video, đối phó với chatbot (trớ trêu thay nó được gọi là liveperson), và rõ ràng là đang xếp hàng vật lý.

Tôi nói với một chàng trai trẻ đứng sau tôi từ cùng chuyến bay hãy gọi United. Anh ta nói: “Không đời nào, sẽ mất mãi mãi!” Nhưng tôi nói: “Tôi vừa đặt lại qua điện thoại. Nhìn kìa, có 200 người trước mặt chúng ta, bạn nghĩ bạn sẽ đợi bao lâu trong hàng?”

Sau đó vào lúc 11 giờ tối, tôi gặp lại chàng trai trẻ trên chuyến bay đã đặt lại của mình. Anh ấy rất vui khi gặp tôi và không ngừng cảm ơn tôi vì “mẹo điện thoại”. Anh ấy mặc áo phông “tiktok” và đeo tai nghe cao cấp, vì vậy tôi nghĩ anh ấy có thể là người am hiểu công nghệ hoặc ít nhất là giỏi máy tính.

**ĐIỀU TỒI TỆ**: Nhận thức từ một khách hàng “am hiểu công nghệ” là các cuộc gọi điện thoại sẽ không giải quyết được bất cứ điều gì cho anh ta, anh ta thà đợi trực tiếp trong hàng để nói chuyện với một người thật trong khi anh ta có thể nhìn rõ hàng dài đến mức nào. **Điều này phản ánh cách công chúng nói chung nghĩ tệ về sự vô ích của hỗ trợ qua điện thoại.**

# Hỗ trợ khách hàng của hãng hàng không: Vấn đề chính là khả năng mở rộng động

Với kinh nghiệm một chuyến bay bị hoãn và một chuyến bị hủy trong cùng một ngày, và nói chuyện với dịch vụ khách hàng qua 4 kênh khác nhau trong hai lần, và hiểu sâu sắc về cách các trung tâm liên lạc được xây dựng – tôi nghĩ vấn đề chính của Hỗ trợ khách hàng của hãng hàng không là đây:

**Hỗ trợ khách hàng của hãng hàng không không thể tự mở rộng quy mô một cách linh hoạt. Hoặc nói theo thuật ngữ điện toán đám mây: Hỗ trợ khách hàng của hãng hàng không không đàn hồi.**

Điều này không chỉ xảy ra với United. Tôi đã có những trải nghiệm tương tự với Air Canada trong thời gian Covid-19: mỗi cuộc gọi điện thoại mất hơn 2 giờ chờ đợi.

Tôi thậm chí không nghĩ rằng một chatbot vô dụng hay một nhân viên không đồng cảm là vấn đề chính. Hỗ trợ khách hàng có một mô hình độc đáo là họ đến theo từng đợt: **thường khi một chuyến bay bị ảnh hưởng, hàng chục đến hàng trăm hành khách cố gắng liên hệ cùng một lúc, đôi khi với hệ số nhân 4 thông qua các kênh chéo.**

Loại lưu lượng truy cập tăng đột biến này không được các trung tâm liên lạc hiện đại của hãng hàng không xử lý tốt. Điều tồi tệ hơn là tất cả các vấn đề này đều là “mã đỏ”: chúng cần được giải quyết _ngay lập tức_. Xin lỗi, không có hỗ trợ email không đồng bộ dựa trên Zendesk. _Tôi cần nói chuyện với một nhân viên ngay bây giờ_.

# Hỗ trợ khách hàng của hãng hàng không: Con người không thể mở rộng quy mô

Hãy nghĩ xem một trang web thương mại điện tử chuẩn bị như thế nào trong thời gian lưu lượng truy cập cao điểm như Black Friday:
1. **Dự đoán** loại lưu lượng truy cập sẽ nhận được vào thời điểm nào.
2. **Phân bổ trước** đủ tài nguyên máy chủ bằng cách liên hệ với các nhà cung cấp đám mây hoặc tăng giới hạn của các cụm máy chủ của họ.
3. **Tạo động** thêm máy chủ khi lưu lượng truy cập tăng đột biến.

Hỗ trợ khách hàng của hãng hàng không có thể làm điều tương tự không?
1. **Dự đoán**: có những mô hình chúng ta có thể sử dụng để dự đoán khi nào một chuyến bay bị ảnh hưởng nhưng tôi không biết liệu họ có sử dụng bất kỳ mô hình nào không. Ví dụ, người ta có thể xem xét các yếu tố sau:
    * Lưu lượng truy cập xung quanh sân bay – dễ dàng lấy từ Google Maps
    * Tắc nghẽn tại sân bay – một số sân bay có cập nhật thời gian thực
    * Thời tiết địa phương
    * Các kiểu du lịch thông thường như ngày lễ
    * Các sự kiện địa phương tạo ra lượng hành khách ra vào lớn như CES ở Las Vegas
    * Các tín hiệu khác như tình trạng máy bay
    * Trạng thái lịch sử
2. **Phân bổ trước**: Tôi tin rằng đây là điều mà mỗi hãng hàng không đang hoặc nên làm trong mùa lễ bằng cách thuê thêm nhân viên. Tôi chắc chắn hy vọng họ làm điều đó. Tôi biết TurboTax thuê thêm người vào khoảng thời hạn nộp thuế.
3. **Tạo động**: đây là trường hợp khó nhất. Đơn giản là không có cách nào dễ dàng để làm điều đó với con người, đặc biệt là với những nhân viên được đào tạo có kinh nghiệm.

# Hỗ trợ khách hàng của hãng hàng không: Cách mở rộng quy mô

Mục tiêu chính của chúng tôi là xử lý lưu lượng truy cập tăng đột biến khi hành khách cần giải quyết vấn đề của họ ngay tại chỗ, không chậm trễ.
1. Các kênh tự phục vụ kỹ thuật số dường như không thể thay thế hoàn toàn nhân viên con người vì hai lý do sau:
Các kênh tự phục vụ kỹ thuật số bị hạn chế và không cung cấp đủ quyền truy cập vào hệ thống back-office như một nhân viên con người có.
2. Hành khách về mặt tâm lý muốn nói chuyện với một người vì các giải pháp tự động truyền thống không giúp ích được gì, đặc biệt là các chatbot khét tiếng.

Giải pháp không đơn giản như vậy vì con người khó mở rộng quy mô. Nhưng cũng có những cách để giải quyết nó:
1. Rất nhiều vấn đề vẫn có thể được giải quyết bằng các kênh tự phục vụ. Chúng ta cần xác định chúng và chuyển hướng lưu lượng truy cập tự phục vụ khỏi các nhân viên con người.
    * Ví dụ, khi chuyến bay của tôi bị hủy – tất cả những gì tôi muốn là đặt lại chuyến bay. Nhưng United không cung cấp cho tôi tùy chọn này và tôi phải gọi điện. Tuy nhiên, khi chuyến bay của tôi bị hoãn, United đã chủ động cung cấp cho tôi tùy chọn đặt lại. Các giải pháp cho cả hai vấn đề đều giống nhau – tôi không cần nói chuyện với một nhân viên khi chuyến bay của tôi bị hủy hơn là khi chuyến bay của tôi bị hoãn. Tại sao tôi không thể tự phục vụ?
2. Nhân viên con người có thể hiệu quả hơn khi trò chuyện hoặc gọi điện.
    * Nhân viên dịch vụ khách hàng mất khoảng 30 phút để đặt lại cho tôi, với khoảng 15 phút để tôi chờ trong khi cô ấy đang làm việc gì đó.
    * 15 phút còn lại khi cô ấy nói chuyện với tôi: một nửa thời gian cô ấy đang thu thập thông tin.
    * Tôi cảm thấy rằng với sự tối ưu hóa, 30 phút có thể được rút ngắn xuống còn 5-10 phút nếu việc thu thập thông tin và tự động hóa được thực hiện đúng cách.

Nếu tôi xây dựng một hệ thống trung tâm liên lạc cho United, tôi sẽ làm như sau:
1. Cung cấp trò chuyện và cuộc gọi điện thoại làm kênh dịch vụ khách hàng chính. Đừng chuyển hướng toàn bộ máy bay hành khách đến các dịch vụ khách hàng mặt đất (chúng ta đều đã thấy các địa điểm cho thuê xe đông đúc như thế nào sau khi một máy bay lớn vừa hạ cánh tại một điểm đến du lịch).
2. Hợp nhất khách hàng đa kênh vào một kênh duy nhất. Điều này có nghĩa là xác định khách hàng càng sớm càng tốt. Điều này sẽ giảm đáng kể kích thước hàng đợi và tiết kiệm băng thông của nhân viên.
3. Sản xuất một hỗ trợ dựa trên trò chuyện thông minh hơn. Thế hệ chatbot hiện tại trở nên lỗi thời, lạc hậu và rất không phổ biến sau khi ChatGPT ra mắt. Hãy để ChatGPT xử lý cuộc trò chuyện – theo kinh nghiệm của chúng tôi, nó làm tốt hơn con người!
4. Nhấn mạnh hiệu quả của nhân viên con người: hoàn thành công việc là chưa đủ nếu mỗi cuộc gọi mất 45 phút; hãy giúp họ giải quyết vấn đề nhanh chóng bằng cách cung cấp:
    * Các đề xuất “hành động tốt nhất tiếp theo”
    * “Các giải pháp thành công trước đó” dựa trên nhật ký trò chuyện hoặc cuộc gọi của các nhân viên khác
    * Đồng phi công thời gian thực giúp thực hiện các hệ thống back-office thông qua các cuộc gọi API hoặc tự động hóa RPA
5. Xây dựng mô hình dự đoán về rủi ro tăng đột biến các yêu cầu dịch vụ khách hàng và chủ động xử lý.

Tôi chưa bao giờ có một nhân viên dịch vụ khách hàng chủ động liên hệ với tôi để giải quyết vấn đề. Luôn luôn là tôi, hành khách, bực bội chờ đợi và gọi điện trong hàng và trên đường dây.

Chúng tôi tại [Seasalt.ai](https://seasalt.ai/?utm_source=blog) rất vui được xây dựng một công nghệ giống như “báo cáo thiểu số” để xác định vấn đề trước khi nó xảy ra, giảm thiểu rủi ro bằng cách chủ động liên hệ với các hành khách bị ảnh hưởng và giải quyết thách thức về việc mở rộng quy mô động một trung tâm liên lạc với con người trong thời gian lưu lượng truy cập tăng đột biến.

Nếu trong vài năm tới, tôi nhận được một cuộc điện thoại từ hãng hàng không thông báo về một vấn đề tiềm ẩn trước khi tôi cố gắng tìm kiếm sự giúp đỡ, đó sẽ là một trải nghiệm khách hàng thực sự tuyệt vời và một hành trình thú vị ngay cả trước khi tôi thực hiện chuyến đi. Bất kỳ hãng hàng không nào có thể làm điều đó trước tiên sẽ giành được rất nhiều hành khách trung thành.
`;export{n as default};

const n=`---
title: "OpenAI vs. Con người vs. AI giọng nói: So sánh chi phí (5/5)"
metatitle: "OpenAI Realtime API vs. Con người và AI giọng nói: Phân tích chi phí"
date: 2024-10-12 00:22:19-07:00
modified_date: 2025-07-26T16:48:39Z
draft: false
author: Xuchen Yao
description: "Phân tích chi phí chi tiết của OpenAI Realtime API so với nhân viên lễ tân và các đại lý AI giọng nói."
weight: 1
tags:
  - Dịch vụ trả lời tự động
  - Cuộc gọi đến cho doanh nghiệp nhỏ
  - SeaChat
  - AI giọng nói
image: /images/blog/101-openai-chatgpt-realtime-api-cost-breakdown/101-openai-chatgpt-realtime-api-cost-breakdown.svg
canonicalURL: /blog/openai-chatgpt-realtime-api-cost-breakdown/
url: /blog/openai-chatgpt-realtime-api-cost-breakdown/
---


*Đây là chuỗi 5 bài viết khám phá các chiến lược giao tiếp với khách hàng cho các doanh nghiệp nhỏ, tập trung vào các dịch vụ trả lời:*

<br/>

<center>
<img height="100%" width="80%" style="background-color: #ffffff" src="/images/blog/101-openai-chatgpt-realtime-api-cost-breakdown/series-diagram.svg"  alt="Sơ đồ chuỗi cuộc gọi đến">

</center>

1. [Tại sao các doanh nghiệp nhỏ cần dịch vụ trả lời?](https://seasalt.ai/blog/96-why-small-businesses-need-answering-service/): Khám phá tầm quan trọng và lợi ích của các dịch vụ trả lời.

2. [Thuê ngoài so với nhân viên lễ tân trực tiếp nội bộ](https://seasalt.ai/blog/97-live-receptionist-inhouse-outbound/): Nhân viên lễ tân trực tiếp là gì? Bạn nên thuê ngoài hay thuê nội bộ?

3. [Hệ thống trả lời điện thoại tự động (Phản hồi giọng nói tương tác IVR so với Đại lý AI giọng nói)](https://seasalt.ai/blog/98-inbound-answering-automated-system/): Dịch vụ trả lời tự động là gì? Bạn nên sử dụng Phản hồi giọng nói tương tác hay đại lý AI giọng nói?

4. [Quyết định: Doanh nghiệp nhỏ của tôi có nên sử dụng nhân viên lễ tân trực tiếp hay dịch vụ trả lời tự động?](https://seasalt.ai/blog/99-inbound-answering-live-vs-automated/): Bạn đã tìm hiểu tất cả về các dịch vụ trả lời từ chuỗi của chúng tôi. Bây giờ là lúc quyết định loại dịch vụ nào là tốt nhất cho doanh nghiệp của bạn.

5. (Bài viết này) [OpenAI vs. Con người vs. AI giọng nói: So sánh chi phí](https://seasalt.ai/blog/101-openai-chatgpt-realtime-api-cost-breakdown/): Tự hỏi liệu bạn có nên chuyển sang công nghệ AI giọng nói mới nhất không? Hãy cùng xem xét chi phí thực tế.

---

## TLDR:

1. Cả OpenAI và con người đều có thể **đắt đỏ**:
   1. API thời gian thực của OpenAI có thể cho phép trải nghiệm đại lý giọng nói (AI) với chi phí khoảng **1 đô la mỗi phút.**
   2. Nhân viên lễ tân ảo theo yêu cầu (con người) cũng có giá khoảng **1 đô la mỗi phút.**
2. Nhưng có những lựa chọn **cân bằng** với những cảnh báo:
   1. Khi được tuyển dụng dài hạn, các đại lý con người có tiếng Anh tốt có thể có giá thấp tới 5 đô la mỗi **giờ** (0,08 đô la mỗi phút).
   2. Các đại lý AI giọng nói do các công ty khởi nghiệp cung cấp có thể có giá thấp tới 7,2 đô la mỗi **giờ** (0,12 đô la mỗi phút).

*Nếu bạn muốn nghe phiên bản âm thanh của bài viết này, đây là video:*

<iframe width="100%" height="400" src="https://www.youtube.com/embed/?v=DgX6F711ceA&list=PL8K7_LTqly46agqJW2quG5Vsylt5os1Al" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>


## Chi phí thực tế của API thời gian thực ChatGPT-4o

OpenAI đã phát hành [API thời gian thực](https://openai.com/index/introducing-the-realtime-api/) cho ChatGPT-4o vào ngày 1 tháng 10 năm 2024. Đây là 5 tháng sau khi phát hành [GPT-4o](https://openai.com/index/hello-gpt-4o/), mô hình ngôn ngữ lớn đa kênh đầu tiên. Hiệu suất thật đáng kinh ngạc. Chatgpt-4o-realtime nghe giống con người, phản hồi giống con người và mạnh mẽ chống lại tiếng ồn và gián đoạn.

Tuy nhiên, Chatgpt-4o-realtime có phải là giá cả phải chăng không?

Thoạt nhìn, API thời gian thực của OpenAI có vẻ đắt hơn khoảng 30 lần so với GPT-4o-mini *trong văn bản* (**5 đô la so với 0,15 đô la** / 1 triệu token đầu vào).

<br/>

<center>
<div style="background-color: #ffffff;">
<img height="100%" width="100%" src="/images/blog/101-openai-chatgpt-realtime-api-cost-breakdown/October 2024 pricing for chatgpt-4o-mini.png"  alt="Giá chatgpt-4o-mini tháng 10 năm 2024">
</div>

*Giá chatgpt-4o-realtime tháng 10 năm 2024*
</center>

<br/>

<center>
<div style="background-color: #ffffff;">
<img height="100%" width="100%" src="/images/blog/101-openai-chatgpt-realtime-api-cost-breakdown/October 2024 pricing for chatgpt-4o-realtime.png"  alt="Giá chatgpt-4o-realtime tháng 10 năm 2024">
</div>

*Giá chatgpt-4o-mini tháng 10 năm 2024*
</center>


OpenAI tuyên bố rằng chi phí đầu vào âm thanh khoảng 0,06 đô la mỗi phút và 0,24 đô la mỗi phút cho đầu ra âm thanh. Cộng các khoản này lại cho thấy nó không nên vượt quá 0,30 đô la mỗi phút, phải không?

Chúng tôi đã thực hiện một thử nghiệm thực tế với API 4o-realtime và thấy rằng nó có giá khoảng 1 đô la mỗi phút.


<br/>

<center>
<div style="background-color: #ffffff;">
<img height="100%" width="100%" src="/images/blog/101-openai-chatgpt-realtime-api-cost-breakdown/Screenshot of the cost for one test of the ChatGPT-4o Realtime API.png"  alt="Ảnh chụp màn hình chi phí cho một thử nghiệm API thời gian thực ChatGPT-4o">
</div>

*Ảnh chụp màn hình chi phí cho một thử nghiệm API thời gian thực ChatGPT-4o*
</center>


Chúng tôi đã thực hiện một cuộc trò chuyện thoại 5 phút với API chatgpt-4o-realtime và thấy rằng nó có giá 5,38 đô la. Cuộc trò chuyện thoại 5 phút có khoảng 142 giây âm thanh được phiên âm (coi đó là đầu vào âm thanh), phần còn lại chủ yếu là đầu ra âm thanh.

Trong một thử nghiệm khác mà chúng tôi đã thực hiện, một cuộc trò chuyện đơn giản kéo dài 10 phút có giá khoảng 10 đô la.

Ôi, đắt quá. Nó thực sự [đắt hơn khoảng 10 lần so với các đại lý giọng nói của Seasalt.ai](https://chat.seasalt.ai/en-us#pricing?utm_source=blog/).

Nếu một số nhà phát triển chỉ đang thử nghiệm API và cố gắng dành một số nỗ lực đáng kể để đào tạo một đại lý AI giọng nói thực sự làm được điều gì đó, họ có thể dễ dàng chi hàng trăm đô la trong một ngày!

## API thời gian thực ChatGPT-4o so với Đại lý con người – cái nào phải chăng hơn?

Vì vậy, nếu một người xây dựng một đại lý AI giọng nói bằng cách sử dụng API thời gian thực của ChatGPT-4o, nó sẽ có giá khoảng 1 đô la mỗi phút, hoặc **60 đô la một giờ**.

### Một đại lý con người có giá bao nhiêu?

Nếu bạn sử dụng một người nội bộ, chẳng hạn như nhân viên lễ tân, họ có thể có mức lương từ mức lương tối thiểu (7,25 đô la liên bang đến 16 đô la ở California) đến khoảng 20 đến 30 đô la mỗi giờ.

Nếu bạn sử dụng một cơ quan thuê ngoài, giá có thể thay đổi: một số bắt đầu từ 349 đô la/tháng cho 200 phút cộng với phí thiết lập. Seasalt.ai đã viết một cuộc khảo sát chi tiết về vấn đề này: [Chi phí của nhân viên lễ tân trực tiếp: Nội bộ so với Thuê ngoài](https://seasalt.ai/blog/97-live-receptionist-inhouse-outbound/?utm_source=crossblog).


<br/>

<center>
<img height="100%" width="100%" src="/images/blog/97-live-receptionist-inhouse-outsourced/vendor-summary.png"  alt="Tóm tắt nhà cung cấp nhân viên lễ tân trực tiếp">

*Tóm tắt nhà cung cấp nhân viên lễ tân trực tiếp của Seasalt.ai*
</center>

## API thời gian thực ChatGPT-4o so với các đại lý AI giọng nói khác – sự khác biệt là gì?

API thời gian thực của ChatGPT-4o đại diện cho một bước tiến đáng kể trong công nghệ AI giọng nói, mang lại một số khác biệt chính so với các đại lý AI giọng nói khác:

- **Khả năng phản hồi**: nó cung cấp các tương tác gần như thời gian thực, với thời gian phản hồi trung bình từ 2 đến 3 giây
- **Tính mạnh mẽ**: API cho phép gián đoạn và chuyển hướng trong các cuộc trò chuyện, cho phép luồng đối thoại tự nhiên hơn
- **Đầu cuối**: API không yêu cầu ghép nối các thành phần khác nhau lại với nhau, chẳng hạn như chuyển lời nói thành văn bản (Azure, Deepgram, v.v.) và chuyển văn bản thành lời nói (Azure, Eleven labs).

Nhưng cảnh báo ở đây là chi phí: API thời gian thực của ChatGPT-4o có giá khoảng 1 đô la mỗi phút, trong khi các [đại lý AI giọng nói khác có thể có giá thấp tới 0,12 đô la mỗi phút](https://seasalt.ai/blog/98-inbound-answering-automated-system/?utm_source=crossblog).

<br/>

<center>
<img height="100%" width="100%" src="/images/blog/98-inbound-answering-automated-system/ai-product-comparison.png"  alt="Seasalt.ai vs. Bland AI vs. Smith.ai. Synthflow.ai vs. Retell AI vs. Slang AI vs. Gridspace cho các đại lý AI giọng nói">

*So sánh sản phẩm đại lý AI giọng nói của Seasalt.ai*
</center>


Có sự khác biệt 10 lần về giá, nhưng có sự khác biệt 10 lần về hiệu suất không? Điều đó là do khách hàng đánh giá.

## Phán quyết

Đối với các chủ doanh nghiệp, về cơ bản có 4 lựa chọn:

1. **Đại lý con người nội bộ**
2. **Thuê ngoài cho một công ty khác**, dù là trong nước hay nước ngoài
3. **Sử dụng một đại lý AI giọng nói phải chăng**
4. **Xây dựng với API thời gian thực OpenAI tiên tiến/đắt nhất**

Tôi đã tóm tắt các ưu và nhược điểm khác nhau của các lựa chọn khác nhau dưới đây:

* **API thời gian thực của OpenAI** mang lại trải nghiệm nhanh nhất và tự nhiên nhất nhưng đòi hỏi chuyên môn kỹ thuật và đắt tiền.
* **Đại lý con người theo yêu cầu trong nước** tốt cho các tác vụ cơ bản bằng tiếng Anh hoàn hảo nhưng có tích hợp hạn chế.
* **Đại lý con người dài hạn ở nước ngoài** là lựa chọn phải chăng nhất nhưng có thể không đáng tin cậy do các vấn đề về cơ sở hạ tầng và tỷ lệ luân chuyển cao.
* **Đại lý AI giọng nói tích hợp** mang lại sự cân bằng giữa chi phí, tính năng và dễ sử dụng, nhưng có thể phản hồi chậm hơn một chút và có những điểm kỳ lạ trong tích hợp.

<br/>

<center>
<img height="100%" width="100%" src="/images/blog/101-openai-chatgpt-realtime-api-cost-breakdown/options-for-phone-answer-services.png"  alt="Các lựa chọn khác nhau cho dịch vụ trả lời điện thoại: con người vs. OpenAI vs. các công ty khởi nghiệp AI giọng nói">

*Các lựa chọn khác nhau cho dịch vụ trả lời điện thoại: con người vs. OpenAI vs. các công ty khởi nghiệp AI giọng nói*
</center>

Với tư cách là một người thực hành trong lĩnh vực nhận dạng giọng nói và xử lý ngôn ngữ tự nhiên, hai xu của tôi là:

1. Sử dụng các đại lý AI giọng nói tích hợp trên thị trường, như [cái mà tôi tự hào xây dựng với SeaChat](https://wiki.seasalt.ai/seachat/inbound-voice-agent/tutorial/?utm_source=blog/). Chúng trưởng thành và phải chăng.
2. Cho API thời gian thực của OpenAI thêm một năm để các con chuột lang thử nghiệm, và hy vọng giá sẽ giảm xuống mức phải chăng hơn là 10 đô la/giờ, khi đó **nó sẽ trở nên thực sự tuyệt vời**. Cẩn thận, các đại lý con người!


## Tìm hiểu thêm
Nếu bạn muốn khám phá công nghệ giọng nói AI cho dịch vụ khách hàng với giá cả hợp lý, bạn có thể truy cập [SeaChat](https://chat.seasalt.ai/?utm_source=blog/) hoặc bạn có thể [đặt lịch demo với chúng tôi](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting).


## Về chuỗi này

*Đây là chuỗi 5 bài viết khám phá các chiến lược giao tiếp với khách hàng cho các doanh nghiệp nhỏ, tập trung vào các dịch vụ trả lời:*

- [Tại sao các doanh nghiệp nhỏ cần dịch vụ trả lời?](https://seasalt.ai/blog/96-why-small-businesses-need-answering-service/): Khám phá tầm quan trọng và lợi ích của các dịch vụ trả lời.

- [Thuê ngoài so với nhân viên lễ tân trực tiếp nội bộ](https://seasalt.ai/blog/97-live-receptionist-inhouse-outbound/): Nhân viên lễ tân trực tiếp là gì? Bạn nên thuê ngoài hay thuê nội bộ?

- [Hệ thống trả lời điện thoại tự động (Phản hồi giọng nói tương tác IVR so với Đại lý AI giọng nói)](https://seasalt.ai/blog/98-inbound-answering-automated-system/): Dịch vụ trả lời tự động là gì? Bạn nên sử dụng IVR robot hay Đại lý AI giọng nói?

- [Quyết định: Doanh nghiệp nhỏ của tôi có nên sử dụng nhân viên lễ tân trực tiếp hay dịch vụ trả lời tự động?](https://seasalt.ai/blog/99-inbound-answering-live-vs-automated/): Bạn đã tìm hiểu tất cả về các dịch vụ trả lời từ chuỗi của chúng tôi. Bây giờ là lúc quyết định loại dịch vụ nào là tốt nhất cho doanh nghiệp của bạn.

- (Bài viết này) [OpenAI vs. Con người vs. AI giọng nói: So sánh chi phí](https://seasalt.ai/blog/101-openai-chatgpt-realtime-api-cost-breakdown/): Công nghệ AI giọng nói mới nhất từ OpenAI là một đại lý AI giọng nói tuyệt vời. Chi phí thực tế là gì?
`;export{n as default};

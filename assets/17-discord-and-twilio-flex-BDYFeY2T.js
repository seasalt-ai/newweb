const n=`---
title: "Discord (3/3): Discord & Twilio Flex: Đưa Trung tâm liên hệ Flex vào lãnh thổ chưa được khám phá"
metatitle: "Discord (3/3): Trung tâm liên hệ Twilio Flex trong Discord"
date: 2022-06-07 12:32:24-07:00
modified_date: 2025-07-28T16:56:53Z
draft: false
author: Kim Dodds
description: "Trong blog này, chúng tôi sẽ trình bày cách Seasalt.ai tích hợp một trung tâm liên hệ đầy đủ chức năng vào máy chủ Discord."
tags:
  - SeaX
  - Discord
image: /images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/flex-discord-thumbnail.png
canonicalURL: /blog/discord-and-twilio
url: /blog/discord-and-twilio/
---

*Đây là bài đăng cuối cùng của chúng tôi trong loạt bài gồm ba phần về tương tác với khách hàng trên Discord. Blog đầu tiên của chúng tôi, [“Một biên giới mới cho tương tác với khách hàng”](https://seasalt.ai/blog/15-discord-a-new-frontier-for-customer-engagement/), đã thảo luận về sự gia tăng mức độ phổ biến của Discord và cơ hội mới mà nó mang lại cho các thương hiệu để tạo và tham gia vào các cộng đồng trực tuyến của riêng họ. Trong phần hai, [“Cách tạo cộng đồng Discord và bot cho thương hiệu của bạn”](https://seasalt.ai/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/), chúng tôi đã hướng dẫn cách tạo máy chủ Discord cho thương hiệu của bạn và cách tích hợp bot để quản lý kiểm duyệt máy chủ, thông báo, phản hồi của người dùng, v.v. Cuối cùng, trong blog này, chúng tôi sẽ trình bày một minh chứng về cách chúng tôi tại Seasalt.ai đã tích hợp một trung tâm liên hệ đầy đủ chức năng vào máy chủ Discord, cho phép các thương hiệu xử lý tất cả các khía cạnh của dịch vụ khách hàng trên nền tảng.*

## Mục lục
- [Mục lục](#table-of-contents)
- [Demo dịch vụ khách hàng Discord](#discord-customer-service-demo)
- [Twilio Flex](#twilio-flex)
- [SeaX](#seax)
- [Máy chủ Demo](#demo-server)
  - [Trợ giúp 1-nhiều: Kênh chính thức](#1-to-many-help-official-channels)
  - [Trợ giúp 1-1: Đại lý dịch vụ khách hàng](#1-to-1-help-customer-service-agent)
    - [Cơ sở kiến thức](#knowledge-base)
    - [Chuyển giao đại lý trực tiếp](#live-agent-transfer)
  - [Quản lý trường hợp](#case-management)
- [Tìm hiểu sâu về kỹ thuật](#technical-deep-dive)
  - [Xác định luồng Flex](#define-the-flex-flow)
  - [Tạo kênh tùy chỉnh](#create-a-custom-channel)
  - [Tạo máy chủ HTTP để hỗ trợ định tuyến phức tạp hơn](#create-an-http-server-to-support-more-complex-routing)
    - [Webhook tin nhắn đi](#outbound-messages-webhook)
    - [Tích hợp Bot](#bot-integration)
- [Tóm tắt](#summary)

# Demo dịch vụ khách hàng Discord
Nếu bạn muốn đi thẳng vào vấn đề và xem sản phẩm cuối cùng, chúng tôi sẽ trình bày video demo cuối cùng trước:

<iframe width="85%" height="450px" src="https://www.youtube.com/embed/iUK4YkGYI6Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>


Mục tiêu của chúng tôi là chứng minh cách Discord có thể được tích hợp vào phần mềm dịch vụ khách hàng hiện có (trong trường hợp này là [Twilio Flex](https://flex.twilio.com/)) để tăng thêm giá trị cho máy chủ chính thức của một thương hiệu. Tiếp tục đọc để xem xét kỹ hơn việc triển khai của chúng tôi.

# Twilio Flex
Twilio là một công ty truyền thông có uy tín cung cấp API để quản lý tin nhắn văn bản, cuộc gọi điện thoại, email, tin nhắn trò chuyện và hơn thế nữa. Flex là một trong những sản phẩm chủ lực của Twilio: một trung tâm liên hệ dựa trên đám mây có khả năng mở rộng, định tuyến tin nhắn và cuộc gọi từ bất kỳ nguồn nào đến các đại lý ảo và trực tiếp. Chúng tôi đã chọn Flex làm cơ sở cho việc tích hợp trung tâm liên hệ của mình vì nó đã có sự hỗ trợ tuyệt vời cho nhiều kênh khác nhau, chẳng hạn như Facebook, SMS và WhatsApp.

# SeaX
SeaX là một trung tâm liên hệ đám mây được tích hợp sâu với các tính năng AI tiên tiến giúp tăng năng suất và sự hài lòng của khách hàng. SeaX là một trong những sản phẩm chủ lực của Seasalt.ai và đã được triển khai cho khách hàng tại hơn 150 quốc gia. Nền tảng trung tâm liên hệ SeaX được xây dựng trên Twilio Flex và bao gồm nhiều tính năng bổ sung giúp các đại lý trực tiếp hỗ trợ khách hàng tốt hơn. Một số tính năng hữu ích nhất là chuyển văn bản thành giọng nói và chuyển giọng nói thành văn bản nội bộ, cơ sở kiến thức được hỗ trợ bởi AI và hệ thống quản lý trường hợp tích hợp. Để biết thêm thông tin về tất cả các khả năng của nền tảng SeaX, vui lòng truy cập [trang chủ SeaX](https://seax.seasalt.ai/?utm_source=blog/).

# Máy chủ Demo
Bây giờ chúng ta sẽ xem cách chúng tôi thiết lập máy chủ Discord của mình. Với mục đích demo, chúng tôi đã hình dung một kịch bản trong đó máy chủ của chúng tôi được sử dụng làm cộng đồng cho một trò chơi như Pokémon Go! Bảng sau đây tổng quan một số tính năng được trình bày trong máy chủ Discord của chúng tôi.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-features-2.png" alt="Tổng quan tính năng của máy chủ Discord dịch vụ khách hàng demo."/>

*Tổng quan tính năng của máy chủ Discord demo.*
</center>

## Trợ giúp 1-nhiều: Kênh chính thức
Một số kênh trong máy chủ được thiết lập để cung cấp luồng trực tiếp giữa quản trị viên/nhà phát triển chính thức và người chơi.
**Kênh thông báo** chỉ có thể được đăng bởi quản trị viên và người điều hành, và có thể bao gồm các bài đăng (thủ công hoặc tự động) từ tài khoản Twitter, trang web hoặc các nguồn chính thức khác.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-announcement-channel.jpg" alt="Kênh thông báo trên máy chủ Discord, có một bài đăng từ tài khoản Twitter chính thức."/>

*Kênh #announcements trên máy chủ Discord demo.*
</center>

**Kênh báo cáo lỗi** cho phép người chơi thảo luận về các lỗi và các vấn đề gây lỗi game. Quản trị viên có thể theo dõi kênh này để xác định bất kỳ vấn đề nào trong game cần được giải quyết. Ngoài ra, người dùng có thể gửi báo cáo lỗi chính thức bằng cách sử dụng lệnh \`/bug\` từ trong kênh.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-bug-report-channel.jpg" alt="Kênh báo cáo lỗi trên máy chủ Discord, có một báo cáo lỗi đã gửi."/>

*Kênh #bug-report trên máy chủ Discord demo, có một báo cáo lỗi đã gửi.*
</center>

**Kênh yêu cầu tính năng** cho phép người chơi thảo luận về các thay đổi gameplay, cải thiện chất lượng cuộc sống, bổ sung nội dung, v.v. mà họ muốn thấy được thêm vào trò chơi. Tương tự như kênh yêu cầu lỗi, đầu vào của họ có thể được các mod Discord xem và họ có thể sử dụng lệnh \`/new_feature\` để gửi yêu cầu chính thức.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-feature-request-channel.jpg" alt="Kênh yêu cầu tính năng trên máy chủ Discord, có một người dùng đang thực hiện lệnh slash."/>

*Kênh #feature-request trên máy chủ Discord demo, có một người dùng đang thực hiện lệnh slash.*
</center>

## Trợ giúp 1-1: Đại lý dịch vụ khách hàng

Người chơi có thể sử dụng lệnh \`/helpme\` để kích hoạt tin nhắn trực tiếp với một đại lý. Đại lý dịch vụ khách hàng có thể là tự động (đại lý ảo) hoặc do một đại lý trực tiếp điều hành.

Đối với bản demo của chúng tôi, chúng tôi đã thiết lập một bot FAQ đơn giản truy vấn cơ sở kiến thức của công ty để cung cấp các gợi ý bài viết liên quan cho người dùng. Người dùng cũng có thể yêu cầu một đại lý trực tiếp và sẽ được chuyển trong cùng một cuộc trò chuyện đến một đại lý trực tiếp trên SeaX.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-customer-service-channel.jpg" alt="Kênh dịch vụ khách hàng trên máy chủ Discord, có một người dùng đang kích hoạt DM."/>

*Kênh #feature-request trên máy chủ Discord demo, có một người dùng đang kích hoạt DM.*
</center>

### Cơ sở kiến thức
Khi người dùng gửi truy vấn đến đại lý dịch vụ ảo, đại lý có thể giới thiệu người dùng đến các bài viết liên quan trong cơ sở kiến thức.

### Chuyển giao đại lý trực tiếp
Khi người dùng đang nhắn tin trực tiếp với bot, họ có thể yêu cầu một đại lý trực tiếp. Họ sẽ được thông báo ngay lập tức rằng một trường hợp đã được tạo cho họ và họ đang được chuyển đến một đại lý trực tiếp. Khi đại lý trực tiếp tham gia trò chuyện, họ cũng sẽ nhận được thông báo.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-customer-service-dm.jpg" alt="Một tin nhắn trực tiếp với dịch vụ khách hàng, có các gợi ý bài viết KB, chuyển giao đại lý trực tiếp và quản lý trường hợp."/>

*Một tin nhắn trực tiếp với dịch vụ khách hàng, có các gợi ý bài viết KB, chuyển giao đại lý trực tiếp và quản lý trường hợp.*
</center>

Ở phần backend, các đại lý trực tiếp có thể xử lý các cuộc gọi đến và tin nhắn trò chuyện từ tất cả các kênh (SMS, Facebook, Discord, cuộc gọi thoại, v.v.) thông qua một nền tảng duy nhất. Trong trường hợp này, nền tảng backend là SeaX.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/flex-discord-channel.jpg" alt="Giao diện SeaX hiển thị chế độ xem của đại lý trực tiếp về cuộc trò chuyện với người dùng trên Discord."/>

*Giao diện SeaX hiển thị chế độ xem của đại lý trực tiếp về cuộc trò chuyện với người dùng trên Discord.*
</center>

## Quản lý trường hợp
Một tính năng mà chúng tôi muốn nhấn mạnh trong bản demo này là quản lý trường hợp. Giải pháp Discord của Seasalt.ai tích hợp với hệ thống quản lý trường hợp SeaX để theo dõi đúng các trường hợp khác nhau từ người dùng. Khi người dùng tương tác với bot Discord (chẳng hạn như yêu cầu một đại lý trực tiếp hoặc báo cáo lỗi), chúng tôi có thể tự động mở một trường hợp mới và ghi lại tất cả thông tin quan trọng về người dùng và vấn đề họ đang gặp phải. Điều này cho phép đại lý trực tiếp dễ dàng truy cập vào tất cả các vấn đề đã báo cáo và đảm bảo rằng họ theo dõi người dùng cho đến khi trường hợp được giải quyết.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-new-case.png" alt="Tạo một trường hợp mới trong hệ thống quản lý trường hợp SeaX."/>

*Tạo một trường hợp mới trong hệ thống quản lý trường hợp SeaX.*

<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-existing-case.png" alt="Xem một trường hợp hiện có trong hệ thống quản lý trường hợp SeaX."/>

*Xem một trường hợp hiện có trong hệ thống quản lý trường hợp SeaX.*

</center>

# Tìm hiểu sâu về kỹ thuật

Bây giờ chúng ta đã thấy sản phẩm cuối cùng và tất cả các tính năng có sẵn cho các thành viên của máy chủ và các đại lý trực tiếp hỗ trợ họ. Nhưng toàn bộ quá trình này thực sự được triển khai như thế nào? Trong bài đăng blog cuối cùng của chúng tôi, “[Cách tạo cộng đồng Discord và bot cho thương hiệu của bạn](https://seasalt.ai/blog/16-discord-how-to-create-a-discord-community-and-bot-for-thương hiệu của bạn/)”, chúng tôi đã hướng dẫn cách tạo máy chủ Discord cho thương hiệu của bạn và cách tích hợp bot Discord để quản lý nó. Để hỗ trợ bản demo nâng cao hơn này, chúng tôi cũng đã sử dụng [SeaChat, công cụ AI đàm thoại của Seasalt.ai](https://chat.seasalt.ai), để xây dựng một chatbot đơn giản cho phép bot Discord của chúng tôi xử lý các truy vấn ngôn ngữ tự nhiên cho người dùng.

Ở phía SeaX, nhóm của chúng tôi đã làm việc chặt chẽ với Twilio để tạo ra một giải pháp trung tâm liên hệ đầy đủ tính năng được xây dựng trên Twilio Flex. Để biết thêm thông tin về Twilio Flex và cách thức hoạt động của quy trình thiết lập, bạn có thể đọc [Hướng dẫn bắt đầu nhanh Twilio Flex](https://www.twilio.com/docs/flex/quickstart).

Sau khi chuẩn bị máy chủ Discord, bot Discord và chatbot và đảm bảo rằng chúng tôi có một phiên bản SeaX đang hoạt động, thách thức lớn nhất là định tuyến đúng các tin nhắn đến và đi từ người dùng, bot và các đại lý trực tiếp trên SeaX. Twilio rất tuyệt vời trong việc xử lý định tuyến tin nhắn, vì vậy mục tiêu của chúng tôi là xử lý tất cả các lệnh slash từ bên trong máy chủ bot Discord của chúng tôi, và sau đó chuyển tiếp tất cả các tin nhắn khác (chẳng hạn như tin nhắn trực tiếp đến chatbot hoặc đại lý trực tiếp) đến Twilio.

## Xác định luồng Flex
Bước đầu tiên là đảm bảo rằng mọi tin nhắn chúng tôi gửi đến Twilio sẽ được định tuyến đến đúng nơi. Chúng tôi đã thiết lập một luồng Twilio đơn giản, đầu tiên kiểm tra xem người dùng có yêu cầu đại lý trực tiếp hay không, và nếu có thì chuyển tiếp các tin nhắn sau đến SeaX. Nếu người dùng không yêu cầu đại lý trực tiếp, thì chúng tôi chuyển tiếp tin nhắn đến chatbot để nhận phản hồi. Để biết thêm thông tin về cách thiết lập luồng, hãy tham khảo [tài liệu Twilio Studio Flow](https://www.twilio.com/docs/studio).

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-flow.png" alt="Một luồng Flex Studio đơn giản định tuyến các tin nhắn đến một chatbot hoặc đến SeaX."/>

*Một luồng Flex Studio đơn giản định tuyến các tin nhắn đến một chatbot hoặc đến SeaX.*
</center>

## Tạo kênh tùy chỉnh
Vậy là bây giờ chúng ta đã có ý tưởng về cách các tin nhắn đến sẽ được định tuyến. Tuy nhiên, Discord không phải là một kênh được Twilio hỗ trợ nguyên bản. May mắn thay, Twilio có một hướng dẫn chi tiết về cách [Thêm kênh trò chuyện tùy chỉnh vào Twilio Flex](https://www.twilio.com/blog/add-custom-chat-channel-twilio-flex). Sau khi làm theo hướng dẫn để thiết lập kênh tùy chỉnh mới trên Twilio, chúng ta cần thực sự chuyển tiếp các tin nhắn từ Discord đến Twilio.

Đầu tiên chúng ta thiết lập client Twilio:

\`\`\`python
from twilio.rest import Client
twilio_client = Client(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)
\`\`\`

Bây giờ, khi chúng tôi nhận được một tin nhắn đến từ Discord, chúng tôi có thể chuyển tiếp tin nhắn đó đến Twilio thông qua client Twilio. Đầu tiên, chúng tôi nên kiểm tra xem người dùng đã tồn tại trong hệ thống Twilio hay chưa và liệu họ đã có một kênh trò chuyện đang mở hay chưa.

\`\`\`python
# gọi phương thức get_user để kiểm tra xem người dùng có tồn tại không và tạo một người dùng mới nếu không
user = await get_user(user_id, twilio_client, TWILIO_SERVICE_SID)

# lấy các kênh mà người dùng đang ở
user_channels = twilio_client.chat \\
        .services(TWILIO_SERVICE_SID) \\
        .users(user_id) \\
        .user_channels \\
        .list()
\`\`\`

Nếu người dùng có một kênh trò chuyện đang mở, chúng ta cần sử dụng kênh đó để có quyền truy cập vào lịch sử trò chuyện. Nếu không có kênh trò chuyện hiện có, chúng ta tạo một kênh mới cho người dùng:

\`\`\`python
if user_channels:
    channel_sid = user_channels[-1].channel_sid
else:
    channel = twilio_client.flex_api \\
            .channel \\
            .create(
                flex_flow_sid=FLEX_FLOW_ID,
                chat_user_friendly_name=username,
                chat_friendly_name=chat_name,  # -> Tên thân thiện của kênh trò chuyện
                target=conversation_id,  # -> Định danh duy nhất xác định người dùng trò chuyện
                identity=conversation_id,  # -> Người dùng, ví dụ/ ID DM Discord
        )
    channel_sid = channel.sid
\`\`\`

Cuối cùng, khi chúng ta có một kênh trò chuyện đang mở giữa người dùng Discord và Twilio, chúng ta có thể chuyển tiếp tin nhắn đến đến luồng Twilio Studio.

\`\`\`python
message = twilio_client.chat \\
        .services(TWILIO_SERVICE_SID) \\
        .channels(channel_sid) \\
        .messages \\
        .create(
            body=message_text,
            from_=user_id,
            x_twilio_webhook_enabled='true',
            attributes=json.dumps(message_json)  # gửi trong các tiêu đề dưới dạng thuộc tính để có thể truy cập sau này
        )
\`\`\`
Bây giờ chúng ta có khả năng chuyển tiếp tất cả các tin nhắn đến từ người dùng Discord trực tiếp đến Luồng Twilio Flex của chúng ta. Về phía bot Discord, hãy đảm bảo rằng tất cả các tin nhắn trực tiếp đang được chuyển tiếp đến Twilio. Bây giờ bạn có thể thử gửi một tin nhắn trực tiếp đến bot Discord và bạn sẽ thấy nó xuất hiện trong nhật ký Luồng Twilio Studio - Tuy nhiên, chúng ta vẫn chưa xong!

## Tạo máy chủ HTTP để hỗ trợ định tuyến phức tạp hơn

### Webhook tin nhắn đi
Vậy là bây giờ chúng ta đã có ý tưởng về cách các tin nhắn đến sẽ được định tuyến. Tuy nhiên, chúng ta vẫn còn thiếu một vài phần. Trước hết, chúng ta biết rằng bây giờ chúng ta có thể gửi tin nhắn đến Twilio, nhưng làm thế nào để chúng ta trả lời người dùng của mình trên Discord? Bot Discord của chúng ta là thứ duy nhất được ủy quyền gửi tin nhắn đến máy chủ và người dùng Discord của chúng ta, và Twilio dù sao cũng không biết cách đưa tin nhắn của chúng ta trở lại máy chủ Discord. Giải pháp là, chúng ta cần thiết lập một webhook tin nhắn đi sẽ được kích hoạt mỗi khi có một tin nhắn mới trong kênh trò chuyện Twilio. Trong webhook đó, chúng ta có thể sử dụng bot Discord của mình để chuyển tiếp tin nhắn trở lại máy chủ của chúng ta.

Để làm điều này, chúng tôi tích hợp bot Discord của mình vào một máy chủ HTTP mạnh mẽ hơn. Chúng tôi đã sử dụng [FastAPI](https://fastapi.tiangolo.com/) để thiết lập một điểm cuối POST đơn giản sẽ đóng vai trò là webhook tin nhắn đi của chúng tôi. Khi chúng tôi đã thiết lập máy chủ và bot Discord của chúng tôi đang chạy cùng với nó, chúng tôi có thể xác định điểm cuối POST.

Điểm cuối này sẽ nhận mọi tin nhắn được thêm vào kênh trò chuyện, vì vậy trước tiên chúng tôi muốn lọc ra mọi thứ ngoại trừ các tin nhắn đi từ SeaX. Tiếp theo, chúng tôi sẽ cần lấy ID kênh chính xác từ nội dung tin nhắn để chúng tôi biết nơi chuyển tiếp tin nhắn. Cuối cùng, chúng tôi có thể sử dụng client Discord để chuyển tiếp tin nhắn đến kênh Discord.

\`\`\`python
@app.post("/forward-to-discord", status_code=200)
async def forward_discord_message(request: Request, response: Response) -> None:
    raw_body = await request.body()
    body = urllib.parse.parse_qs(raw_body.decode())

    # chỉ chú ý đến các tin nhắn từ SDK (Flex, tất cả các tin nhắn khác sẽ từ API)
    if not body.get('Source') == ['SDK']:
        return

    # Tin nhắn từ Flex không chứa conversationId của tin nhắn gốc
    # Chúng ta cần convId để gửi tin nhắn trở lại cuộc trò chuyện trên GBM
    # Lấy tin nhắn trước đó và trích xuất conversationId
    message = twilio_client.chat \\
            .services(TWILIO_SERVICE_SID) \\
            .channels(body.get("ChannelSid")[0]) \\
            .messages.list(limit=1)[0]

    attributes = json.loads(message.attributes)

    channel = discord_client.get_channel(attributes.get(“channel”, {}).get(“id”))
    if channel:
        await channel.send(body.get("Body", [""])[0].get(“text”))
    else:
        logger.error(f"Không tìm thấy kênh Discord với ID: {get_channel_id(req)}!")
        response.status_code = 400
\`\`\`

Cuối cùng, để các tin nhắn được gửi đến điểm cuối của chúng tôi, chúng tôi cần cho Twilio biết webhook mới của chúng tôi là gì. Mỗi kênh trò chuyện cần có webhook riêng được cấu hình. Vì vậy, nếu chúng ta quay lại nơi chúng ta đã tạo kênh trò chuyện mới cho người dùng ban đầu, chúng ta có thể thêm một số mã bổ sung để cấu hình webhook:

\`\`\`python
webhook = twilio_client.chat \\
        .services(TWILIO_SERVICE_SID) \\
        .channels(channel_sid) \\
        .webhooks \\
        .create(
            type='webhook',   
configuration_url=f"{SERVER_HOST}/forward-to-discord",
            configuration_method="POST",
            configuration_filters=["onMessageSent", "onMessageUpdated", "onMediaMessageSent"]
        )
\`\`\`

### Tích hợp Bot

Vậy là bây giờ các tin nhắn đi từ SeaX sẽ được định tuyến đúng cách trở lại máy chủ Discord của chúng ta. Nhưng chúng ta vẫn chưa giải quyết các tin nhắn gửi đến chatbot. Chúng ta cần thiết lập một điểm cuối cuối cùng sẽ được kích hoạt từ Luồng Twilio Studio và sẽ nhận tin nhắn của người dùng, truy vấn bot và trả về phản hồi cho Discord.

\`\`\`python
@app.post("/chatbot-to-discord", status_code=200)
async def receive_discord_message(request: Request, response: Response):
    """Nhận yêu cầu POST từ Twilio, truy vấn bot và trả về phản hồi cho Discord."""
    req = await request.body()
    # tách nội dung tin nhắn gốc khỏi nội dung twilio
    twilio_body, original_message_body = separate_original_message_body(req.decode())

    bot_response = await query_bot(original_message_body, bot_info)

    if bot_response:
        channel = discord_client.get_channel(original_message_body.get(“channel_id”))
        if channel:
            for item in bot_response:
                await channel.send(item.get(“text”))
\`\`\`

Đảm bảo rằng Luồng Twilio Studio có webhook chính xác để định tuyến tin nhắn đến bot. Bây giờ chúng ta đã hoàn thành định tuyến tin nhắn của mình! Chúng ta có thể xem tổng quan cấp cao về tất cả định tuyến tin nhắn trong sơ đồ này:

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-routing-diagram.jpg" alt="Sơ đồ định tuyến tin nhắn."/>

*Sơ đồ định tuyến tin nhắn.*
</center>

# Tóm tắt
Để kết thúc, trong loạt bài blog này, chúng tôi đã thảo luận về sự gia tăng mức độ phổ biến của Discord và cơ hội mà nó mang lại cho các thương hiệu như một nền tảng mới để tương tác với khách hàng. Chúng tôi đã xem xét một số tính năng cơ bản của Discord, để cho thấy cách một thương hiệu có thể thiết lập cộng đồng trực tuyến của riêng mình, cũng như các tính năng nâng cao hơn cho phép các thương hiệu tự động hóa việc kiểm duyệt và hỗ trợ khách hàng trên máy chủ của họ bằng các bot Discord. Cuối cùng, chúng tôi đã chia sẻ bản demo của mình về cách chúng tôi tích hợp Discord với nền tảng dịch vụ khách hàng của mình, SeaX, để mang lại các tính năng nâng cao cho cộng đồng Discord, chẳng hạn như chuyển giao đại lý trực tiếp, quản lý trường hợp và tìm kiếm cơ sở kiến thức được hỗ trợ bởi AI.
Để có bản demo cá nhân, hoặc để xem Seasalt.ai có thể giúp đáp ứng các nhu cầu kinh doanh cụ thể của bạn như thế nào, vui lòng điền vào biểu mẫu “[Đặt lịch demo](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting)” của chúng tôi. Để biết thêm thông tin về tích hợp Flex/Discord hoặc để liên hệ với chúng tôi, vui lòng truy cập [Danh sách đối tác Twilio của Seasalt.ai](https://showcase.twilio.com/partner-listing/a8E8Z000000PDCQUA4).`;export{n as default};

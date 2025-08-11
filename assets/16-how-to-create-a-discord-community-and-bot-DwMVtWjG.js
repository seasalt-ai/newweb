const n=`---
title: "Discord (2/3): Cách tạo Cộng đồng và Bot Discord cho Thương hiệu của bạn"
metatitle: "Discord (2/3): Tạo Cộng đồng và Bot Discord cho Thương hiệu của bạn"
date: 2022-05-31 13:29:51-07:00
draft: false
author: Kim Dodds
description: "Trong blog này, chúng tôi sẽ hướng dẫn bạn cách tạo một máy chủ cho thương hiệu của bạn và kết nối một bot, có thể tự động hóa việc kiểm duyệt, báo cáo lỗi, thông báo, v.v."
weight: 1
tags:
  - SeaX
  - Discord
image: /images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-community-and-bot-for-your-brand.jpg
canonicalURL: /blog/create-a-discord-community-and-bot/
url: /blog/create-a-discord-community-and-bot/
---

*Bài đăng trên blog của chúng tôi, [“Discord: Một Biên giới Mới cho Sự Tương tác của Khách hàng”](https://seasalt.ai/blog/15-discord-a-new-frontier-for-customer-engagement/), đã đề cập đến sự gia tăng phổ biến của Discord và cách các thương hiệu có thể tận dụng nền tảng xã hội mới này để hình thành cộng đồng trực tuyến của riêng họ và tương tác với khách hàng. Trong blog này, chúng tôi sẽ hướng dẫn bạn cách tạo một máy chủ chính thức mới cho thương hiệu của bạn, bao gồm cách kết nối một bot, có thể tự động hóa các tác vụ như kiểm duyệt, báo cáo lỗi, thông báo, v.v.*

## Mục lục
- [Thiết lập Máy chủ](#setting-up-the-server)
    - [Tạo một Máy chủ Discord Mới](#create-a-new-discord-server)
    - [Chuyển đổi Máy chủ thành "Máy chủ Cộng đồng"](#convert-the-server-to-a-community-server)
    - [Thiết lập Kênh, Sự kiện và các Tính năng khác](#set-up-channels-events-and-other-features)
    - [Quảng bá!](#get-the-word-out)
- [Thiết lập Bot Discord](#setting-up-the-discord-bot)
    - [Tạo một Bot mới trong Cổng thông tin dành cho nhà phát triển của Discord](#create-a-new-bot-in-the-discord-developer-portal)
    - [Tạo một Bot Discord đơn giản với PyCord](#create-a-simple-discord-bot-with-pycord)
    - [Mời Bot Discord](#invite-the-discord-bot)
    - [Kiểm tra Tích hợp](#test-the-integration)

# Thiết lập Máy chủ

## Tạo một Máy chủ Discord Mới
Từ trong ứng dụng Discord, nhấp vào nút “Add Server” (Thêm Máy chủ) ở phía dưới bên trái.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/create-new-discord-server.png" alt="Tạo một máy chủ Discord mới."/>

*Lời nhắc khi tạo một máy chủ Discord mới.*
</center>

Bạn có thể chọn từ một mẫu nếu bạn muốn bắt đầu với một số kênh đã được tạo sẵn cho bạn, hoặc bạn có thể bắt đầu với một trang trắng. Và bước đầu tiên đơn giản như vậy, máy chủ của bạn đã được tạo!

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/new-discord-server.png" alt="Một máy chủ Discord mới được tạo."/>

*Một máy chủ Discord mới được tạo.*
</center>

## Chuyển đổi Máy chủ thành "Máy chủ Cộng đồng"

Rất khuyến khích bật các tính năng “cộng đồng” của máy chủ Discord. Bằng cách chuyển đổi thành máy chủ cộng đồng, bạn sẽ kích hoạt các công cụ bổ sung có thể giúp kiểm duyệt, vận hành và phát triển máy chủ. Cụ thể, các máy chủ cộng đồng có quyền truy cập vào các tính năng sau:

- **Màn hình chào mừng (Welcome Screen)**: Giới thiệu người dùng mới đến máy chủ của bạn
- **Kênh thông báo (Announcement Channel)**: Cho phép bạn phát thông điệp đến người dùng của mình
- **Thông tin chi tiết về Máy chủ (Server Insights)**: xem phân tích về cộng đồng và người dùng của bạn
- **Khám phá (Discovery)**: Quảng cáo cộng đồng của bạn trên Danh bạ Máy chủ của Discord

Bên cạnh tên máy chủ ở góc trên cùng bên trái, nhấp vào menu thả xuống và chọn “Server Settings” (Cài đặt Máy chủ). Nhấp vào tab “Enable Community” (Bật Cộng đồng) ở phía bên trái và chọn “Get Started” (Bắt đầu).

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/convert-to-community-discord-server.png" alt="Chuyển đổi một máy chủ Discord thông thường thành máy chủ cộng đồng."/>

*Bật cài đặt máy chủ cộng đồng.*
</center>

Tiếp tục qua các bước thiết lập bắt buộc. Việc bật cộng đồng yêu cầu máy chủ của bạn phải thực hiện xác minh bổ sung cho người dùng, bật bộ lọc trò chuyện và thiết lập một kênh quy tắc.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-community-setup.png" alt="Thiết lập cho một máy chủ Discord cộng đồng."/>

*Thiết lập máy chủ cộng đồng.*
</center>

Một khi bạn đã bật cộng đồng, bạn có quyền truy cập vào một số tính năng mới. Hai trong số các tính năng hữu ích nhất là tin nhắn chào mừng và sàng lọc thành viên:

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-server-welcome-page.png" alt="Ví dụ về tin nhắn chào mừng của máy chủ."/>

*Ví dụ về tin nhắn chào mừng của máy chủ.*

<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-server-membership-screening.png" alt="Cài đặt sàng lọc thành viên."/>

*Cài đặt sàng lọc thành viên.*
</center>

## Thiết lập Kênh, Sự kiện và các Tính năng khác
Sau khi thiết lập máy chủ cộng đồng, bạn cũng có quyền truy cập vào các tính năng mới từ trang máy chủ chính.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-server-channel-types.png" alt="Tạo một kênh mới trong máy chủ Discord.", style="width:50%"/>

*Tạo một kênh mới.*

<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-server-channels.png" alt="Ví dụ về các kênh của một máy chủ cộng đồng Discord." style="width:50%"/>

*Các kênh của máy chủ cộng đồng.*
</center>

Khi bạn tạo một kênh mới, bạn có quyền truy cập vào hai loại kênh mới: kênh thông báo (announcement) và kênh sân khấu (stage). Kênh thông báo chỉ có thể được đăng bởi người kiểm duyệt, và hữu ích cho các bài đăng và thông báo chính thức - rất nhiều máy chủ sẽ có bot tự động đăng các bài viết từ Twitter chính thức hoặc diễn đàn của họ vào kênh này. Kênh "sân khấu" là một loại kênh thoại đặc biệt hữu ích để tổ chức các sự kiện với khán giả trực tiếp. Người tổ chức có khả năng kiểm duyệt các diễn giả khác (không giống như trong một kênh thoại thông thường, nơi mọi người đều có thể nói tự do).

Khi máy chủ của bạn đã được thiết lập xong, nó có thể trông giống như thế này:

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/customized-discord-server.png" alt="Máy chủ Discord được tùy chỉnh hoàn toàn."/>

*Máy chủ cộng đồng được tùy chỉnh hoàn toàn.*
</center>

## Quảng bá!
Khi máy chủ của bạn đã được thiết lập xong, bạn có thể bắt đầu mời mọi người!
Discord cung cấp một widget miễn phí được tạo sẵn, có thể được nhúng vào bất kỳ trang web nào để quảng cáo máy chủ của bạn.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-server-widget.png" alt="Cài đặt widget của máy chủ Discord."/>

*Cài đặt widget của máy chủ.*

<iframe src="https://discordapp.com/widget?id=966505646944055326&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>

*Một ví dụ về widget đang hoạt động cho máy chủ Discord Near Me Messaging của Seasalt.ai.*

</center>

Để xây dựng lòng tin với những người dùng tiềm năng, bạn có thể tùy chọn liên hệ với bộ phận hỗ trợ của Discord để xác minh máy chủ của mình. Việc xác minh sẽ đặt một biểu tượng “đã xác minh” bên cạnh tên máy chủ của bạn, cho biết rằng máy chủ là cộng đồng liên kết chính thức của một doanh nghiệp, thương hiệu và nhân vật của công chúng. Bạn có thể xem các yêu cầu xác minh trên [trang web chính thức của Discord](https://support.discord.com/hc/en-us/articles/360001107231-Verified-Server-Requirements).

Khi máy chủ của bạn phát triển và có một số lượng người dùng kha khá, Discord sẽ cung cấp nhiều cơ hội hơn để quảng cáo máy chủ của bạn trong nội bộ. Khi máy chủ của bạn đã tồn tại ít nhất 8 tuần và có hơn 500 người dùng, bạn có thể đăng ký Đối tác Discord, điều này sẽ mang lại cho máy chủ của bạn những đặc quyền độc quyền dành cho đối tác. Khi bạn đạt hơn 1.000 người dùng, bạn có thể tham gia Khám phá Máy chủ (Server Discovery), điều này sẽ cho phép bất kỳ ai sử dụng Discord khám phá và tham gia máy chủ của bạn.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-server-discovery.png" alt="Cài đặt và yêu cầu Khám phá Máy chủ của Discord."/>

*Cài đặt và yêu cầu Khám phá Máy chủ của Discord.*
</center>

# Thiết lập Bot Discord
Bây giờ bạn đã thiết lập một máy chủ, bạn có thể nâng cao nó bằng cách thêm một bot để tự động hóa một số quy trình, chẳng hạn như kiểm duyệt, phản hồi của người dùng và thông báo. Hãy tiếp tục đọc phần sau để tìm hiểu cách thiết lập một bot đơn giản, và sau đó hãy theo dõi bài đăng tiếp theo trong loạt bài của chúng tôi để xem cách bạn có thể tích hợp một trải nghiệm dịch vụ khách hàng toàn diện trong máy chủ Discord của mình.

## Tạo một Bot mới trong Cổng thông tin dành cho nhà phát triển của Discord
Tạo một tài khoản trên [Cổng thông tin dành cho nhà phát triển của Discord](https://discord.com/developers/applications). Tạo một “Ứng dụng mới” và đặt tên cho nó.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/new-discord-application.png" alt="Tạo một ứng dụng mới trên Cổng thông tin dành cho nhà phát triển của Discord."/>

*Bảng điều khiển dành cho nhà phát triển của Discord: Ứng dụng.*
</center>

Chọn ứng dụng mới của bạn và nhấp vào tab “Bot” ở phía bên trái.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/new-discord-bot.png" alt="Cài đặt Bot của ứng dụng."/>

*Cài đặt ứng dụng Discord.*
</center>

Nhấp vào “Add Bot” (Thêm Bot) để tạo bot Discord của bạn.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-bot-settings.png" alt="Tạo một bot Discord mới."/>

*Tạo một bot Discord mới.*
</center>

Sau khi tạo, hãy tạo và sao chép token của bot. Cuối cùng, hãy đảm bảo rằng quyền nhắn tin đã được bật.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-bot-messaging-permissions.png" alt="Quyền nhắn tin của Bot Discord."/>

*Tạo một bot Discord mới.*
</center>

## Tạo một Bot Discord đơn giản với PyCord

Chúng tôi sử dụng [thư viện PyCord](https://docs.pycord.dev/en/master/) như một trình bao bọc Python cho API của Discord.

1. Cài đặt PyCord và tạo một tệp Python mới cho bot Discord của bạn.
2. Nhập gói discord và tạo một phiên bản của client discord.
3. Sử dụng trình bao bọc \`event\` của client để tạo một phương thức \`on_message\`. Phương thức này sẽ nhận mọi tin nhắn được gửi đến một kênh mà bot có quyền truy cập.
   a. Trong phương thức, trước tiên hãy kiểm tra xem tin nhắn có phải từ chính bot không, và bỏ qua nếu có.
   b. Nếu không, chúng ta sẽ bắt đầu bằng cách chỉ phản ứng với các tin nhắn bắt đầu bằng \`$bot\` - nếu tin nhắn bắt đầu bằng chuỗi này, chúng ta sẽ chỉ phản hồi lại cùng một kênh rằng \`I got your message!\`.
4. Cuối cùng, ở cuối kịch bản, hãy chắc chắn chạy client discord để nó bắt đầu lắng nghe các sự kiện trong kênh.



### Một lưu ý về các Client Discord Python
Discord.py là dự án phổ biến nhất cho trình bao bọc Python cho API của Discord, tuy nhiên, tác giả và người bảo trì đã quyết định ngừng hoạt động thư viện này. Bạn có thể tìm thấy nhiều trình bao bọc Python thay thế khác cho API của Discord, và nhiều trong số đó là các nhánh của Discord.py gốc. Chúng tôi chọn sử dụng PyCord vì nó có vẻ được bảo trì tốt, đã hỗ trợ Lệnh Slash (Slash Commands), và có một máy chủ Discord nơi chúng tôi có thể đặt câu hỏi.

Khi bạn tạo bot Discord, cố gắng không cài đặt các gói Python Discord khác. Các gói Python Discord thường không hoạt động tốt với nhau vì chúng đều được phát triển riêng biệt. Ví dụ, PyCord không hoạt động tốt với discord-components vì vậy hãy chắc chắn rằng bạn không cài đặt cả hai gói cùng một lúc.

## Mời Bot Discord
Tiếp theo, bạn có thể mời bot vào máy chủ của mình. Nhấp vào “OAuth2” -> “URL Generator” (Trình tạo URL). Trên Trình tạo URL ở bên phải, chọn “bot”.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-bot-invite-url-generator.png" alt="Tạo một liên kết mời cho bot Discord."/>

Tạo một liên kết mời cho bot.

</center>

Tiếp theo, cuộn xuống để thêm quyền cho bot. Bạn có thể đặt bot làm quản trị viên, hoặc chỉ chọn các quyền bạn cần (điều này an toàn hơn).

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-bot-permissions.png" alt="Cài đặt quyền của bot Discord."/>

Cài đặt quyền của bot.

</center>

Cuối cùng, sao chép URL được tạo ở dưới cùng và mở liên kết trong một tab mới. Liên kết sẽ chuyển hướng bạn đến việc thêm bot vào một máy chủ mà bạn quản lý.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/add-discord-bot-to-server.png" alt="Thêm bot vào máy chủ Discord." style="width:50%"/>

Thêm bot vào máy chủ.

</center>

Sau khi bot được mời vào máy chủ, nhấp vào bot và nhấp vào “Add to Server” (Thêm vào Máy chủ). Bạn sẽ được yêu cầu cấp quyền “Create Commands in the Server” (Tạo lệnh trong máy chủ) cho bot.

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/confirm-discord-bot-permissions.png" alt="Xác nhận quyền của bot Discord." style="width:50%"/>

Xác nhận quyền của bot trong máy chủ.

</center>

## Kiểm tra Tích hợp
Bây giờ bot của bạn đã được kết nối và đang lắng nghe mọi hoạt động trong máy chủ Discord của bạn. Bot mẫu được cung cấp trong mã ở trên sẽ chỉ đơn giản là phản hồi “I got your message!” nếu ai đó gõ một tin nhắn bắt đầu bằng chuỗi “$bot”. Việc so khớp chuỗi như thế này là cách dễ nhất để thiết lập một số hành động cho bot của bạn. Tuy nhiên, Discord cũng hỗ trợ các lệnh ứng dụng gốc có nhiều tính năng hơn. Bạn có thể đọc thêm về chúng trong tài liệu API chính thức của Discord. Một khi bạn đã thiết lập tích hợp bot ban đầu của mình, bầu trời là giới hạn với những dịch vụ mà bot của bạn có thể cung cấp cho máy chủ của bạn.

Hãy chú ý đến bài đăng cuối cùng trong loạt bài blog của chúng tôi, sẽ hướng dẫn cách chúng tôi đã sử dụng sản phẩm của mình, SeaX, để kết nối nền tảng trung tâm liên lạc của Twilio Flex với một máy chủ cộng đồng Discord. Sự tích hợp này cho phép các thương hiệu không chỉ nuôi dưỡng cộng đồng với khách hàng của họ, mà còn duy trì một kênh liên lạc trực tiếp và giải quyết các vấn đề trực tiếp từ bên trong cộng đồng trực tuyến.

Để biết thêm thông tin về bất kỳ giải pháp nào của chúng tôi, hãy truy cập Wiki Sản phẩm của Seasalt.ai - hoặc điền vào biểu mẫu "Đặt lịch Demo" để có được cái nhìn trực tiếp.`;export{n as default};

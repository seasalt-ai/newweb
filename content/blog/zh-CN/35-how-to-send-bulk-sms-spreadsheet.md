---
title: "在Excel、Google Sheets和Apple Numbers中批量发送短信给联系人的正确方法"
metatitle: "短信批量发送 | Excel、Google Sheets、Apple Numbers"
date: 2023-10-01T10:25:00-08:00
draft: false
author: Xuchen Yao
description: '学习从Excel、Google Sheets和Apple Numbers批量发送短信的最安全方法，同时保持10DLC合规。'
weight: 1
tags: ["SeaX", "教程"]
image: images/blog/35-how-to-send-bulk-sms-spreadsheet/35-how-to-send-bulk-sms-spreadsheet.jpg
canonicalURL: "/blog/how-to-send-bulk-sms-spreadsheet/"
url: "/blog/how-to-send-bulk-sms-spreadsheet/"
---

向联系人列表发送批量短信一直是企业、活动组织者和各种专业人士广泛使用的技术。批量发送消息的能力可以节省时间并帮助保持联系人的信息更新。虽然Excel、Google Sheets和Apple Numbers本身并不是为发送短信而构建的，但扩展程序和第三方服务已经出现来使这成为可能。但是，有一些陷阱需要注意。

# 保持合规：10DLC注册

批量短信的世界不像以前那样简单，特别是随着旨在打击垃圾邮件和未经请求消息的法规的兴起。如果您只想做一次并且不担心面临监管后果，请继续使用您在网上找到的教程，这些教程教您如何使用插件发送批量短信。但是，如果您打算经营可持续的业务和营销活动，您应该首先熟悉围绕短信营销的规则。

这些法规的核心是10DLC系统。

10DLC代表10位长代码，这是美国A2P（应用程序到人员）短信的新标准。以下是您需要了解的内容：

- 目的：由于垃圾邮件和未经请求消息的增加，运营商引入了围绕使用10DLC进行批量消息传递的严格法规。
- 业务合规：希望发送批量短信的企业必须注册其10DLC并获得批准。这确保他们遵守运营商法规。
- 不合规的风险：在没有适当注册或使用批准的10DLC的情况下发送短信可能导致禁令或其他后果。

这里有一篇[文章](https://support.twilio.com/hc/en-us/articles/1260800720410-What-is-A2P-10DLC-)向您展示如何注册10DLC活动。Seasalt.ai帮助许多[SeaX Messaging](https://seax.seasalt.ai/?utm_source=blog)客户实现10DLC合规。如果您有任何问题，请随时联系我们。

# 在电子表格中准备您的联系人

现在您已经设置了10DLC活动，您可以开始批量向客户发送消息，而不必担心被禁止。

让我们从一个简单的场景开始：您有一个保存在电子表格中的联系人列表，您想向他们发送即将举行的活动的短信。电子表格可以是各种格式。最常见的格式是Excel、Google Sheets和Apple Numbers。您需要首先清理电子表格中的电话号码。

让我们以Google Sheet为例。其他电子表格格式的步骤将非常相似。以下是逐步指南。

## 1. 备份您的数据

复制您的联系人确保如果您搞砸了不会丢失任何联系人数据。方法如下：**点击`文件` > `制作副本`**。

<center>
<img src="/images/blog/35-how-to-send-bulk-sms-spreadsheet/1-make-a-copy-for-bulk-sms-contact-spreadsheet.png" alt="为您的批量短信联系人电子表格制作备份副本"/>

_为您的批量短信联系人电子表格制作备份副本_

</center>

## 2. 重复数据删除

a. 突出显示整个数据集。

b. 点击`数据` > `数据清理` > `删除重复项`。

c. 选择要检查重复项的列，然后点击`删除重复项`。

d. Google Sheets将通知您删除了多少个重复项。

<center>
<img src="/images/blog/35-how-to-send-bulk-sms-spreadsheet/2-remove-duplicates-for-bulk-sms-contact-spreadsheet.png" alt="为您的批量短信联系人电子表格删除重复记录"/>

_为您的批量短信联系人电子表格删除重复记录_

</center>

## 3. 标准化电话号码格式

a. 决定一致的格式。检查您使用的服务要求的电话号码格式。例如，SeaX Messaging接受各种电话号码格式，如5551234567或555-123-4567或+15551234567。

b. 使用`查找和替换`使格式一致。例如，将所有句点替换为破折号。

c. 如有必要，使用自定义公式或脚本来确保所有数字都一致。这可能需要更高级的电子表格技能。

<center>
<img src="/images/blog/35-how-to-send-bulk-sms-spreadsheet/3-clean-numbers-for-bulk-sms-contact-spreadsheet.png" alt="为您的批量短信联系人电子表格标准化电话号码格式"/>

_为您的批量短信联系人电子表格标准化电话号码格式_

</center>

### 4. 验证数据条目

a. 对于电话号码，确保所有都有正确的位数。过滤或排序数据以识别异常。

b. 对于姓名，查找可能为空或填充了无关数据的条目。

<center>
<img height="500" src="/images/blog/35-how-to-send-bulk-sms-spreadsheet/4-validate-format-for-bulk-sms-contact-spreadsheet.jpeg" alt="验证您的批量短信联系人电子表格的数据条目"/>

_验证您的批量短信联系人电子表格的数据条目_

</center>

## 5. 检查空白单元格

此步骤是可选的。在SeaX Messaging上，如果单元格为空，我们会自动跳过一行。但是，并非所有提供商或工具都喜欢空白单元格。我们强烈建议您执行此数据清理步骤，但对于SeaX Messaging来说是可选的。

### 方法如下：

a. 突出显示您的数据范围。

b. 点击`格式` > `条件格式`。

c. 将格式单元格设置为`单元格为空`并选择高亮颜色。

d. 这将允许您轻松发现并处理空白单元格。

<center>
<img height="500" src="/images/blog/35-how-to-send-bulk-sms-spreadsheet/5-clean-blank-cells-for-bulk-sms-contact-spreadsheet.png" alt="检查您的批量短信联系人电子表格中的空白单元格"/>

_检查您的批量短信联系人电子表格中的空白单元格_

</center>

## 关于准备联系人数据的更多信息

请记住，数据清理是一个迭代过程。根据数据集的大小和质量，您可能需要多次重新访问和重复这些步骤。始终确保仔细检查您的工作以确保准确性。

## 开始发送短信！

虽然Excel或Google Sheets本身不支持短信，但有几个第三方扩展和插件可以弥合这一差距。一些流行的选择包括：

- ClickSend：提供短信网关并与电子表格程序良好集成。
- Zapier：一个集成工具，可以将Google Sheets连接到短信服务。

但是，如果您认真对待短信营销或甚至使用WhatsApp和Facebook Messenger等各种消息平台的全渠道营销，我们建议使用专门的短信平台。这些平台允许您组织联系人、通过聊天和电话直接沟通、跟踪绩效并与客户建立长期关系。信誉良好的短信服务与运营商保持更好的关系，确保更可靠的消息传递。他们还提供10DLC注册和教育的客户支持，以确保您保持合规。

一些流行的短信服务提供商包括：

- SeaX Messaging
- Simple Texting
- Textedly

# 如何运行成功的文本营销活动

<center>
<img height="500" src="/images/blog/35-how-to-send-bulk-sms-spreadsheet/6-successful-camapign-bulk-sms-contact-spreadsheet.jpeg" alt="文本营销成功"/>

</center>

即使有最好的意图，问题也可能出现。以下是长期运行成功文本营销活动的几种方法：

- 保持信息灵通：定期审查10DLC要求并确保持续合规。
- 确保消息质量：避免类似垃圾邮件的内容，包括强制性的选择退出选项，并遵守所有运营商和地区规则。
- 选择信誉良好的短信服务：第三方短信服务对10DLC合规规则有更好的了解，也可能与运营商有更好的关系，确保更可靠的消息传递。

# 结论

向Excel、Google Sheets和Apple Numbers等电子表格工具中的联系人发送批量短信可能是一种高效的沟通方法。但随着10DLC等法规的引入，谨慎和尽职调查地处理这项任务至关重要。通过首先了解10DLC，您可以更自信、更有效地驾驭批量短信的世界。

## 联系我们

如果您有兴趣了解更多关于10DLC的信息或了解更多关于短信营销的选择，请[预约演示](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting)。我们总是很乐意聊天！

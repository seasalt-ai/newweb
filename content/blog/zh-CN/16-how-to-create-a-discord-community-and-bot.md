---
title: "Discord (2/3): 如何为您的品牌创建 Discord 社区和机器人"
metatitle: "Discord (2/3): 创建您品牌的 Discord 社区和机器人"
date: 2022-05-31T13:29:51-07:00
author: Kim Dodds
image: /images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-community-and-bot-for-your-brand.jpg
description: "在本篇博客中，我们将逐步介绍如何为您的品牌创建一个服务器并连接一个机器人，该机器人可以自动化处理审核、错误报告、公告等任务。"
draft: false
weight: 1
tags: ["SeaX", "Discord"]
canonicalURL: "/blog/create-a-discord-community-and-bot/"
url: "/blog/create-a-discord-community-and-bot/"
aliases: 
    - /blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/
---

*在我们的博客文章 [“Discord：客户互动的新前沿”](https://seasalt.ai/blog/15-discord-a-new-frontier-for-customer-engagement/) 中，我们探讨了 Discord 的日益普及，以及品牌如何利用这个新的社交平台来组建自己的在线社区并与客户互动。在本篇博客中，我们将逐步介绍如何为您的品牌创建一个新的官方服务器，包括如何连接一个机器人，该机器人可以自动化处理审核、错误报告、公告等任务。*

## 目录
- [设置服务器](#设置服务器)
    - [创建一个新的 Discord 服务器](#创建一个新的-discord-服务器)
    - [将服务器转换为“社区服务器”](#将服务器转换为社区服务器)
    - [设置频道、活动和其他功能](#设置频道活动和其他功能)
    - [广而告之！](#广而告之)
- [设置 Discord 机器人](#设置-discord-机器人)
    - [在 Discord 开发者门户中创建一个新机器人](#在-discord-开发者门户中创建一个新机器人)
    - [使用 PyCord 创建一个简单的 Discord 机器人](#使用-pycord-创建一个简单的-discord-机器人)
    - [邀请 Discord 机器人](#邀请-discord-机器人)
    - [测试集成](#测试集成)

# 设置服务器

## 创建一个新的 Discord 服务器
在 Discord 应用程序中，点击左下角的“添加服务器”按钮。

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/create-new-discord-server.png" alt="创建一个新的 Discord 服务器。"/>

*创建新 Discord 服务器时的提示。*
</center>

您可以从模板中选择，以便开始时就为您创建一些频道，或者您也可以从零开始。第一步就是这么简单，您的服务器就创建好了！

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/new-discord-server.png" alt="一个新创建的 Discord 服务器。"/>

*一个新创建的 Discord 服务器。*
</center>

## 将服务器转换为“社区服务器”

强烈建议启用 Discord 服务器的“社区”功能。通过转换为社区服务器，您可以启用额外的工具来帮助审核、运营和发展服务器。特别是，社区服务器可以使用以下功能：

- **欢迎屏幕**：向新用户介绍您的服务器
- **公告频道**：允许您向用户广播消息
- **服务器洞察**：查看关于您社区和用户的分析数据
- **发现**：在 Discord 的服务器目录中宣传您的社区

在左上角的服务器名称旁边，点击下拉菜单并选择“服务器设置”。点击左侧的“启用社区”选项卡，然后选择“开始”。

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/convert-to-community-discord-server.png" alt="将普通 Discord 服务器转换为社区服务器。"/>

*启用社区服务器设置。*
</center>

按要求完成设置。启用社区功能需要您的服务器对用户进行额外的验证，启用聊天过滤器，并设置一个规则频道。

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-community-setup.png" alt="社区 Discord 服务器的设置。"/>

*设置社区服务器。*
</center>

启用社区后，您可以使用几项新功能。其中两个最有用的功能是欢迎消息和成员筛选：

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-server-welcome-page.png" alt="服务器欢迎消息示例。"/>

*服务器欢迎消息示例。*

<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-server-membership-screening.png" alt="成员筛选设置。"/>

*成员筛选设置。*
</center>

## 设置频道、活动和其他功能
设置好社区服务器后，您也可以从主服务器页面访问新功能。

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-server-channel-types.png" alt="在 Discord 服务器中创建一个新频道。", style="width:50%"/>

*创建一个新频道。*

<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-server-channels.png" alt="一个 Discord 社区服务器的频道示例。" style="width:50%"/>

*社区服务器频道。*
</center>

当您创建一个新频道时，可以使用两种新的频道类型：公告和舞台。公告频道只能由管理员发布内容，非常适合用于官方帖子和公告——许多服务器会让机器人自动将其官方推特或论坛帖子发布到此频道。“舞台”频道是一种特殊的语音频道，适合用于举办有现场观众的活动。主持人可以管理其他发言者（不像在常规语音频道中，所有人都可以自由发言）。

当您的服务器全部设置好后，它可能看起来像这样：

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/customized-discord-server.png" alt="完全自定义的 Discord 服务器。"/>

*完全自定义的社区服务器。*
</center>

## 广而告之！
服务器设置好后，您就可以开始邀请人了！
Discord 提供一个免费的预制小部件，可以嵌入任何网站来宣传您的服务器。

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-server-widget.png" alt="Discord 服务器小部件设置。"/>

*服务器小部件设置。*

<iframe src="https://discordapp.com/widget?id=966505646944055326&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>

*Seasalt.ai 的 Near Me Messaging Discord 服务器小部件工作示例。*

</center>

为了与潜在用户建立信任，您可以选择联系 Discord 客服以获取服务器验证。验证后，您的服务器名称旁边会有一个“已验证”图标，表明该服务器是某个企业、品牌或公众人物的官方关联社区。您可以在 [Discord 官方网站](https://support.discord.com/hc/en-us/articles/360001107231-Verified-Server-Requirements)上查看验证要求。

一旦您的服务器初具规模并拥有相当数量的用户，Discord 会提供更多在内部宣传您服务器的机会。当您的服务器创建至少8周并拥有500多名用户时，您可以申请 Discord 合作伙伴，这将为您的服务器带来特殊的合作伙伴专属福利。当用户数达到1000多名时，您可以加入服务器发现，这将允许任何使用 Discord 的人发现并加入您的服务器。

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-server-discovery.png" alt="Discord 发现设置和要求。"/>

*Discord 发现设置和要求。*
</center>

# 设置 Discord 机器人
现在您已经设置好了服务器，可以通过添加机器人来增强其功能，以自动化处理审核、用户反馈和公告等流程。请继续阅读以下部分，学习如何设置一个简单的机器人，并敬请期待我们系列的下一篇博客，届时我们将展示如何将一个功能齐全的客户服务体验集成到您的 Discord 服务器中。

## 在 Discord 开发者门户中创建一个新机器人
在 [Discord 开发者门户](https://discord.com/developers/applications)上创建一个账户。创建一个“新应用程序”并为其命名。

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/new-discord-application.png" alt="在 Discord 开发者门户上创建一个新应用程序。"/>

*Discord 开发者仪表盘：应用程序。*
</center>

选择您的新应用程序，然后点击左侧的“机器人”选项卡。

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/new-discord-bot.png" alt="应用程序的机器人设置。"/>

*Discord 应用程序设置。*
</center>

点击“添加机器人”来创建您的 Discord 机器人。

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-bot-settings.png" alt="创建一个新的 Discord 机器人。"/>

*创建一个新的 Discord 机器人。*
</center>

创建后，生成并复制机器人令牌。最后，确保消息权限已开启。

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-bot-messaging-permissions.png" alt="Discord 机器人消息权限。"/>

*创建一个新的 Discord 机器人。*
</center>

## 使用 PyCord 创建一个简单的 Discord 机器人

我们使用 [PyCord 库](https://docs.pycord.dev/en/master/)作为 Discord API 的 Python 封装。

1. 安装 PyCord 并为您的 Discord 机器人创建一个新的 Python 文件。
2. 导入 `discord` 包并创建一个 `discord` 客户端的实例。
3. 使用客户端的 `event` 装饰器创建一个 `on_message` 方法。该方法将接收发送到机器人有权访问的频道中的每条消息。
    a. 在该方法中，首先检查消息是否来自机器人本身，如果是则忽略。
    b. 否则，我们先只对以 `$bot` 开头的消息做出反应——如果消息以此开头，我们就在同一频道回复说 `我收到您的消息了！`。
4. 最后，在脚本末尾，确保运行 `discord` 客户端，以便它开始监听频道中的事件。

```python
import discord

discord_client = discord.Bot()
discord_token = "xxxxxxxxxxxx"
 
@discord_client.event
async def on_message(message):
    """监听并对消息做出反应。"""
    # 检查消息是否来自机器人本身
    if message.author == discord_client.user:
        return

    msg = message.content
    if msg.startswith("$bot") or isinstance(message.channel, discord.DMChannel):
        await message.channel.send("我收到您的消息了！")

discord_client.run(discord_token)
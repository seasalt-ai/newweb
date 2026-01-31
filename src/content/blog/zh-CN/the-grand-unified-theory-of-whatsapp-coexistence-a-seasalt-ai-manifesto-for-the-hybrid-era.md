---
author: SeaMeet Copilot
category: 商业消息传递
date: '2026-01-29'
meta_description: 了解 Seasalt.ai 的 WhatsApp Coexistence 如何弥合 Business App 与 API 之间的差距，实现人机协作，在混合时代获得无缝的客户体验。
modified_date: '2026-01-29'
tags:
- WhatsApp Coexistence
- Seasalt.ai
- API
- Business App
- 混合时代
- 客户体验
- AI 协作
title: WhatsApp 共存的大一统理论：Seasalt.ai 混合时代宣言
url: /blog/the-grand-unified-theory-of-whatsapp-coexistence-a-seasalt-ai-manifesto-for-the-hybrid-era
image:
  url: /images/blog/the-grand-unified-theory-of-whatsapp-coexistence-a-seasalt-ai-manifesto-for-the-hybrid-era.jpg
  alt: "The Grand Unified Theory of WhatsApp Coexistence: A Seasalt.ai Manifesto for the Hybrid Era"
---
# **WhatsApp共存的大一统理论：Seasalt.ai混合时代宣言**

## **1. 引言：“非此即彼”时代的终结**  

近十年来，商业消息领域被一种鲜明而令人沮丧的二元对立所分割。一边是**WhatsApp Business App**——深受小企业主喜爱的工具，可直接通过智能手机访问，亲密、手动且免费。另一边则是**WhatsApp Business Platform (API)**——企业级的强大工具，能够实现大规模运营、自动化和深度CRM集成，但在功能上无法感知人类Agent在移动设备上的手动操作。  

企业被迫做出选择。他们想要的是人际连接的同理心，还是机器的效率？他们想要将聊天记录保存在手机上，还是为了使用聊天机器人而清空记录？这种二分法扼杀了增长。它迫使不断扩张的企业放弃客户信任的电话号码，或者更糟的是，陷入无法扩展的手动工作流程中。  

但潮流已经转变。我们已进入**WhatsApp共存**时代。  

这不仅仅是一次功能更新；它是我们对客户体验（CX）概念的范式转变。在**Seasalt.ai**，我们长期以来一直倡导这样一种理念：未来不是“人类*对抗*人工智能”，而是“人类*加*人工智能”。共存是这一信念的技术体现。它允许单个电话号码同时在WhatsApp Business App和Cloud API上运行。1 它弥合了分歧，创建了一个统一的生态系统，小企业主可以在口袋里回复VIP客户，而SeaChat AIAgent则在后台处理数千张支持工单。3  

在这份详尽的报告中，我们将深入探讨共存最深入的技术细节和最高层次的战略要点。我们将剖析“镜像”架构、webhook路由的复杂性、新定价模型的经济性，以及定义**Seasalt.ai**协作联络中心的“人机协作”工作流程。我们是这些信息的掌控者，现在将通往王国的钥匙交到你手中。  

### **1.1 Seasalt.ai愿景：协作智能**  

共存为何重要？因为客户并不关心你的技术栈；他们关心的是问题解决。当客户向企业发送消息时，他们期望的是机器人的速度和人类的理解。  

**Seasalt.ai**平台建立在“协作智能”的前提下。我们认为，人工智能Agent应被视为数字员工——一个永不睡觉、能立即从知识库（KB）中调取每一次交互记录，并能无缝地将复杂的情感任务交给人类同事的员工。4 共存通过让人类Agent实际“参与其中”来实现这一点。与传统的API设置不同，在传统设置中，企业主除非登录网络仪表板，否则无法看到机器人的对话，而共存会将每一次机器人交互都镜像回手机上的WhatsApp Business App。1 人类可以实时观察人工智能的工作，仅在必要时进行干预。这种透明度建立了对自动化的信任，并确保没有客户会陷入循环而无人问津。  


## **2. 共存的架构：镜像如何工作 🪞**  

要掌握共存，必须了解Meta基础设施内发生的复杂协调。这是一场涉及同步、吞吐量管理和双交付协议的精妙舞蹈，旨在让两个根本不同的平台保持完美和谐。  

### **2.1 消息镜像机制**  

共存的核心是**消息镜像**的概念。当一个电话号码通过启用共存的嵌入式注册流程接入Cloud API时，架构从单管道交付转变为双播系统。1  


（注：原文中 footnote 1、3、4 等编号已按原文保留，未做翻译处理）

1. **入站镜像（用户![][image1]企业）**：当客户发送消息时，Meta 的服务器会同时将其投递到两个目的地。首先，它会被推送到安装在物理设备（或链接的 companion 设备）上的**WhatsApp 商业应用**。其次，包含消息详细信息的 JSON 有效负载会被 POST 到为 Cloud API 配置的**Webhook URL**。1 这确保了手持手机的人工Agent和监听服务器的 AI Agent都能立即知晓新的查询。  
2. **出站镜像（企业![][image1]用户）**：  
   * **通过应用程序**：如果人工使用商业应用程序手动回复，消息将被投递到用户。至关重要的是，一个特定的 webhook 事件——smb_message_echoes——会被发送到 API，以通知后端系统已发生手动回复。5 这个“回声”是同步的心跳，使 AI 知道它应该暂停。  
   * **通过 API**：如果 AI 通过 Cloud API 回复，消息将被发送到用户，并且还会“回声”回到商业应用程序的聊天记录中。1 这确保人工Agent拥有机器人所承诺或解释内容的完整记录。

### **2.2 吞吐量限制：20 MPS 上限**

虽然 Cloud API 理论上能够处理大量消息流量（企业层级通常超过 80 条/秒），但共存模式施加了严格的物理限制。为了维护移动设备上的数据库完整性并确保商业应用程序不会因传入数据过多而崩溃，Meta 对共存模式下的所有号码实施**20 条/秒（MPS）的固定吞吐量限制**。1  

此限制是一个关键的架构约束。这意味着共存模式专为*对话式*工作负载而设计——客户支持、销售查询和中等 volume 的通知——而非高频广播或大规模实用消息（如全国性紧急警报）。如果企业试图通过共存号码推送 100 MPS 的流量，API 将限制流量以保护移动应用程序同步。  

**对架构师的影响**：在设计共存模式的解决方案时，开发人员必须在其消息队列（例如，利用 Redis 或 RabbitMQ）中实施**令牌桶**或**漏桶**算法来管理出站流量。系统必须以严格低于 20 MPS 的速率释放消息，以避免速率限制错误（HTTP 429）或不同步问题。1  

### **2.3 设备拓扑和限制**  

向共存模式的过渡从根本上改变了 WhatsApp 帐户的设备图。标准 WhatsApp 商业帐户支持“Companion 模式”，允许最多 4 台（Meta 验证帐户为 10 台）链接设备。7 然而，共存模式的入职流程会触发此拓扑的重置。  

* **解除链接事件**：成功入职 Cloud API 后，所有先前链接的 companion 设备（WhatsApp Web、桌面版）将被有效解除链接并注销。企业管理员必须在过渡后手动重新链接这些设备。1  
* **操作系统差异**：在共存模式下，并非所有 companion 设备都是平等的。虽然标准的 Web 和桌面客户端支持消息镜像，但**WhatsApp for Windows**和**WhatsApp for WearOS**在 smb_message_echoes webhook 方面历来存在限制。1 这表明同步协议针对主要移动操作系统（Android 和 iOS）和基于 Web 的协议进行了大量优化，而原生桌面应用程序有时在 webhook 一致性方面滞后。  

**不支持的功能**：  

为了追求稳定性，某些丰富功能在通过共存桥时会被禁用或剥离：  

* **群聊**：Cloud API 不支持与应用程序相同的群聊逻辑。因此，群聊**不同步**。1 API 仍然是严格的 1:1 通道。  
* **临时内容**：共存模式下的 1:1 聊天禁用“一次性查看”媒体和“实时位置”共享等功能。1 这是一种隐私和技术保障，因为 API 无法以符合应用程序功能临时性质的方式持久存储或处理临时数据。  

## **3. 入职之旅：嵌入式注册与迁移 🚀**  

共存模式的入口是**嵌入式注册**。这是一种机制，通过该机制，企业授予合作伙伴（如**Seasalt.ai**或**360dialog**）权限，使其能够通过 API 管理其消息传递，同时在应用程序上保留其号码。这是一个精确的工作流程，需要特定的技术标志才能成功。  

### **3.1 “FeatureType”标志：秘密握手**  

对于标准的 API 入职，开发人员只需启动 Facebook 登录流程。然而，要触发共存流程——该流程会专门询问用户是否要保留其现有应用程序历史记录——开发人员必须向 SDK 中注入特定配置。

Facebook 登录配置中的 extras 对象必须包含 featureType 参数，且该参数需设置为 whatsapp_business_app_onboarding.1  

当存在此标志时，入职向导会改变其行为。它不会强制用户删除帐户或选择新号码，而是显示一个屏幕，提供“连接您现有的 WhatsApp 商业帐户”的选项。1  


### **3.2 数据同步窗口：24 小时有效期**  

与传统 API 迁移相比，共存模式最显著的优势之一是**历史记录保留**。过去，迁移到 API 意味着丢失所有聊天记录。共存模式允许导入最近**6 个月**的对话历史。8  

然而，这并非永久的访问状态，而是一个**临时操作窗口**。  

* **计时器：** 一旦用户完成嵌入式注册流程，合作伙伴（开发者）有整整**24 小时**的时间来请求初始历史记录同步。1  
* **机遇：** 这个 24 小时窗口对 AI 训练至关重要。在 **Seasalt.ai**，我们利用这个窗口将历史交互数据摄入我们的 **SeaChat** RAG（检索增强生成）系统。3 通过分析 6 个月的人工主导对话，AI Agent可以在发送第一条自动消息之前“学习”企业的特定语气、常见问题和产品细节。  

**技术说明：** 历史记录同步包括文本和媒体，但不包括隐私敏感的临时消息。开发者必须准备好高吞吐量的摄入管道（例如，使用 **Supabase** 或 **MongoDB**），以便在入职时立即处理这种数据峰值。9  


### **3.3 验证困境：失去蓝标**  

对于具有高品牌资产的企业而言，一个关键的“二阶洞察”是**官方商业帐户（OBA）**的状态——即令人垂涎的绿标或蓝标。  

* **下降：** 文档确认 OBA 状态**不会从应用程序自动转移**到 API。10 当已验证的号码入职到云 API 时，可能会暂时失去其徽章。  
* **恢复：** 企业必须通过 API 验证流程重新申请 OBA 状态。这涉及再次提交新闻报道和域名验证。  
* **策略：** 应建议企业在触发迁移之前准备好验证文件，以尽量缩短“信任差距”——即未验证的时间段。  


## ---  

**4. Webhook 神经系统：解析脉搏 💓**  

如果说共存模式是身体，那么 **Webhook** 就是神经系统。在标准 API 设置中，你只需监听消息。而在共存模式下，你必须监听*状态变化*和*回声*。  


### **4.1 “SMB” Webhook 家族**  

Meta 引入了一组特定的 Webhook 字段，前缀为 smb_，以处理混合帐户的独特需求。5  

| Webhook 字段          | 有效负载描述                  | 战略功能                                  |  
| :------------------- | :--------------------------- | :--------------------------------------- |  
| messages             | 标准入站消息对象              | **耳朵：** 监听客户查询以触发 SeaChat AI  |  
| smb_message_echoes   | 通过应用程序发送的出站消息      | **消音器：** 告知 AI 人类已手动回复。对切换逻辑至关重要 |  
| smb_app_state_sync   | 联系人列表更新（添加/编辑）    | **名片夹：** 将手机上保存的新联系人同步到中央 CRM/Seasalt.ai 仪表板 |  
| history              | 历史消息转储                  | **记忆：** 提供 6 个月的积压数据，用于 AI 训练/RAG 摄入 |  


### **4.2 处理用于状态管理的“回声”**  

smb_message_echoes Webhook 是共存模式最独特的功能。它包含企业用户在手机上输入的消息正文和元数据。  

* **见解：** 这允许进行“影子监控”。即使 AI 未激活，系统也可以分析人类的手动回复，以进行质量保证（QA）或情绪分析。  
* **风险：** 如果开发者未订阅此字段，AI 将对人类的操作视而不见。机器人可能会在人类已经解决问题后回复用户，使企业看起来不协调。  


### **4.3 Webhook 安全性和冗余**  

由于共存架构依赖这些实时信号来防止“机器人-人类冲突”，因此 Webhook 端点的可靠性至关重要。  

* **架构：** 我们建议使用无服务器架构（例如，AWS Lambda 或 Google Cloud Functions）来处理 Webhook 摄入。这些函数应仅执行以下操作：验证 X-Hub-Signature（安全性）、将有效负载推送到队列（SQS/PubSub），并立即返回 200 OK 状态。11  
* **原因：** 如果端点处理逻辑的时间过长（例如，在 Webhook 处理程序中直接调用 OpenAI API），Meta 将使请求超时并重试，可能导致重复处理。卸载到队列可确保立即发送 200 OK，保持管道畅通。11  


## **5. 路由和覆盖协议：多合作伙伴网格 🕸️**

随着企业的成熟，它们往往会超出单一软件提供商的服务范围。它们可能希望使用**Seasalt.ai**作为其AI聊天机器人，**Twilio**用于OTP身份验证，并使用专业运营商提供语音服务。WhatsApp的“覆盖”架构使得在单个电话号码上实现这一点成为可能。


### **5.1 Webhook 覆盖层级结构**  

Meta的基础设施允许基于特定性层级对webhook进行精细化路由。这是共存模式的“流量控制”系统。¹³  

1. **第1级：电话号码覆盖（最高优先级）**  
   * **逻辑**：“如果这个特定电话号码收到事件，就将其发送到URL X，无论WABA如何规定。”  
   * **用例**：一个特许经营WABA有50个地点。地点A希望使用SeaChat；地点B使用 legacy 系统。覆盖功能允许地点A的号码路由到SeaChat的webhook，而不影响地点B。  
   * **API**：向/\<PHONE_NUMBER_ID\>/subscribed_apps发送POST请求，并附带override_callback_uri。¹³  
2. **第2级：WABA覆盖（中等优先级）**  
   * **逻辑**：“如果没有电话号码覆盖，则将此WABA的所有事件发送到URL Y。”  
   * **用例**：一个品牌希望将其整个账户迁移到新提供商。  
3. **第3级：应用默认（最低优先级）**  
   * **逻辑**：“如果没有覆盖，则发送到应用仪表板中定义的URL。”  


### **5.2 聊天与语音分离**  

Cloud API的一项复杂功能是能够在同一个号码上分离**消息**和**通话**提供商。  

* **设置**：企业可以将其号码连接到合作伙伴A（例如Seasalt.ai）以获取消息webhook，并连接到合作伙伴B（例如VoIP提供商）以获取语音webhook。¹⁴  
* **优势**：这允许构建“最佳组合”堆栈。企业可以获得SeaChat用于文本的世界级NLP，同时获得专用电信运营商用于通话的高保真语音终端。  
* **配置**：这通过仅让相应应用订阅其所需的特定字段来管理。应用A订阅消息；应用B订阅voice_status和call_log。¹⁴  


## **6. 共存的经济学：混合模式的套利 💰**  

共存模式带来了独特的经济机会：在“免费”商业应用和“付费”API之间进行套利的能力。理解**对话类别**对于ROI至关重要。  


### **6.1 四类成本**  

截至2025年年中，WhatsApp根据特定模板类别发起的24小时对话窗口收费。¹⁵  

| 类别       | 描述                 | 成本概况       | Seasalt.ai 优化策略                  |
| :--------- | :------------------- | :------------- | :----------------------------------- |
| **营销**   | 促销、优惠、更新     | **$$$（最高）** | 尽量少用。通过Seasalt.ai细分受众以确保高转化率。 |
| **实用**   | 订单更新、收据       | **$$（中等）**  | 通过API自动化。必要的业务成本。        |
| **身份验证** | OTP、登录代码         | **$（最低）**   | 高容量，低成本。对安全至关重要。      |
| **服务**   | 用户发起的查询       | **免费（大部分）** | **甜蜜点**。所有AI支持流量均在此处。   |  


### **6.2 共存套利策略**  

共存的真正力量在于这些成本与手动应用的交互方式。  

1. **入站免费**：当用户向企业发送消息（服务对话）时，24小时窗口开启。在此窗口中，企业可以回复*自由格式*消息。  
   * *应用*：手动回复免费。  
   * *API*：机器人回复免费（无模板成本）。  
   * *结果*：**SeaChat**每月可以解决10,000张支持工单，而WhatsApp费用为**0美元**，前提是用户发起聊天。¹⁵  
2. **通过应用进行出站培育**：营销模板成本高昂。然而，在共存模式下，销售人员可以通过商业应用向潜在客户发送*手动*跟进消息。由于这是来自应用的手动1:1消息，因此**无API成本**。¹⁶  
   * *注意*：这无法扩展。它非常适合促成高价值交易（VIP客户），但不适用于大规模营销。  
3. **72小时广告窗口**：当用户点击**点击进入WhatsApp (CTWA)**广告时，免费入口窗口延长至**72小时**。¹⁷  
   * *策略*：使用广告吸引流量。一旦用户点击，SeaChat有3天时间免费培育、筛选和转化潜在客户。  


### **6.3 ROI计算表**  

*场景：拥有5,000名月度活跃客户的电子商务商店。*  

| 运营            | 传统方法（短信/电子邮件） | 纯API（无共存） | 共存 + SeaChat          |
| :-------------- | :----------------------- | :-------------- | :---------------------- |
| **支持（入站）** | 缓慢，电子邮件延迟       | 快速，付费工具   | **快速，免费（服务窗口）** |
| **收据（实用）** | 短信成本（约0.02美元/条） | 实用费率（约0.03美元/对话） | **实用费率（自动化）**   |
| **VIP销售（出站）** | 电话呼叫（高人力成本）   | 营销费率（约0.06美元/对话） | **免费（通过应用手动操作）** |
| **背景**        | 碎片化                   | 仅仪表板        | **统一（电话 + 网络）**  |

## **7. 人在回路中：交接的艺术 🤝**  

Seasalt.ai 的理念建立在 AI 到人类的无缝过渡之上。在共存设置中，这种交接必须在技术上足够稳健，以防止出现“竞争条件”（Race Conditions），即机器人和人类争夺控制权的情况。  


### **7.1 暂停逻辑：技术深度解析**  

为实现无冲突交接，后端系统必须为每个对话维护一个状态机。  

**回声触发器（Echo Trigger）：**  

最可靠的交接信号是 smb_message_echoes webhook。  

* *事件：* 人工Agent通过移动应用发送“你好，我可以帮忙处理这个问题”。  
* *Webhook：* API 接收 smb_message_echoes。  
* *操作：* 后端为该电话号码在 Redis 缓存中设置标志位 bot_paused: true 以及 pause_expiry: 时间戳 + 2 小时。¹⁸  


**恢复计时器（Resume Timer）：**  

我们不能让机器人永远处于暂停状态。人类可能去吃午饭或忘记关闭工单。  

* *逻辑：* 后台工作进程（Cron 作业）检查过期的暂停计时器。如果当前时间 > 暂停到期时间且对话处于非活动状态，则将机器人状态重置为活动。  
* *优化：* 高级系统允许人类在应用中输入诸如 #resume 或 #bot 之类的命令，立即手动重新激活 AI。¹⁹  


### **7.2 冲突解决：“双重回复”问题**  

如果用户在 1 秒内发送 5 张图片会怎样？  

* *问题：* API 可能会生成 5 个独立的 webhook 事件。如果 AI 并行处理这些事件，可能会发送 5 条独立的“你好，有什么我可以帮忙的吗？”消息。这就是“竞争条件”。²⁰  
* *修复：* **防抖（Debouncing）**。中间件应实现防抖缓冲区。当第一条消息到达时，等待 500 毫秒至 1000 毫秒以接收后续消息。将它们聚合为单个上下文块后再发送给 LLM（大型语言模型）。¹¹  


### **7.3 Seasalt.ai 功能：RAG 和上下文提取**  

交接后，人类需要上下文。如果机器人已经收集了订单号，他们就不想再问“你的订单号是多少？”。  

* **上下文提取：** SeaChat 使用 NLP 从机器人的对话中提取实体（订单 ID、电子邮件、意图）。这些实体同步到 Seasalt.ai 仪表板，甚至可以注入到 CRM 备注中。²¹  
* **总结：** 当人类打开聊天时，Seasalt.ai 可以生成机器人交互的 3 点摘要，以内部备注或系统消息的形式显示，确保Agent能够立即投入工作。⁴  


## **8. 合作伙伴生态系统：迷宫导航 🧭**  

并非所有 API 访问都是平等的。要实现共存，企业必须与 **Meta 业务合作伙伴** 合作。主要有两种模式：**解决方案合作伙伴**（Solution Partners）和 **技术提供商**（Tech Providers）。  


### **8.1 解决方案合作伙伴 vs. 技术提供商**  

| 功能          | 解决方案合作伙伴（例如 360dialog、Twilio）          | 技术提供商（ISV 路线）                          |  
| :------------ | :----------------------------------------------- | :--------------------------------------------- |  
| **角色**      | 全方位服务提供商。拥有信用额度。                  | 软件供应商。促进连接。                          |  
| **计费**      | 企业向合作伙伴付费；合作伙伴向 Meta 付费。        | 企业直接向 Meta 付费（通常情况下）。            |  
| **入职**      | 通过合作伙伴配置进行嵌入式注册。                  | 通过技术提供商配置进行嵌入式注册。              |  
| **限制**      | 高扩展限制。                                      | 初期每周新增客户上限约 200 个。²²               |  
| **用例**      | 大多数需要全面支持的企业。                        | 构建自有“白标”（White Label）WhatsApp 的 SaaS 平台。 |  


### **8.2 账户结构：共享 WABA 与 OBO**  

* **共享 WABA：** 企业拥有 WABA，但与合作伙伴“共享”访问权限。这是现代的推荐标准。它赋予企业可移植性；如果企业解雇合作伙伴，仍可保留 WABA。²³  
* **代运营（OBO）：** 合作伙伴“代表”客户拥有 WABA。这是一种 legacy 模式。它会带来“供应商锁定”（Vendor Lock-in）风险。**建议：** 始终坚持通过嵌入式注册使用共享 WABA 模式，以确保您拥有自己的数据和电话号码声誉。²³  


## **9. 故障排除和边缘案例：“霸主”指南 🛠️**  

即使是最佳架构也会面临现实中的复杂数据问题。以下是困扰开发者的边缘案例。  


### **9.1 “幽灵”对话**  

* *场景：* 用户发送消息。机器人已暂停。人工Agent的手机已关机。用户得不到任何回应。  
* *修复：* 在中间件中实现“外出办公”逻辑层。如果在交接后 15 分钟内未检测到 smb_message_echoes（人工回复），系统会发送一个 fallback 模板：“我们的人工Agent当前正忙。我们已收到您的查询，将尽快回复。”。¹⁸  


### **9.2 封锁率蔓延**

* *场景：* 人工Agent在应用程序上强行推销，向50名未选择加入的用户发送消息。用户举报/屏蔽该号码。  
* *后果：* 该电话号码的质量评级降至“低”。  
* *影响：* **API** 受到处罚。营销模板的吞吐量被限制，或号码被完全封禁。  
* *教训：* 共存将应用程序和 API 的命运联系在一起。人工端的不良行为会破坏自动化端的可扩展性。对人工Agent的严格培训必不可少。24  

### **9.3 “未验证”名称显示**  

* *问题：* 在 API 上，只有当号码是官方企业账户（绿标）时，才会显示“显示名称”。否则，用户在聊天标题中只能看到电话号码。  
* *对比：* 在应用程序上，名称通常可从联系人卡片中看到。  
* *摩擦点：* 用户可能信任应用程序资料（看起来熟悉），但对 API 模板（可能看起来通用）产生怀疑。  
* *解决方法：* 确保应用程序和 WABA 设置中的个人资料照片和描述完全相同，以保持视觉连续性。25  

## **10. 未来展望：Seasalt.ai 路线图 🔮**  

共存只是开始。大型语言模型（LLMs）、语音 AI 和全渠道路由的融合正在创造一个未来，其中“应用程序”和“API”之间的区别将完全消失。  

### **10.1 多Agent编排**  

我们正在向这样的系统迈进：一个“路由Agent”（由 GPT-4o-mini 等快速模型提供支持）位于入口处。它分析用户的意图，并将对话路由到“ specialist Agent”（例如，预订机器人、支持机器人）或“人工Agent”。  

* **Seasalt.ai 创新：** 我们正在构建编排层，使这些Agent能够在后端“对话”，在用户看到回复之前传递上下文 JSON。26  

### **10.2 语音-文本连续体**  

通过 **SeaVoice**，我们正在将语音功能直接集成到共存流程中。  

* *愿景：* 用户在 WhatsApp 上聊天。他们遇到了障碍。AI 发送一条消息：“您希望我打电话给您解释吗？” 用户点击“是”。SeaVoice Agent立即致电他们，并参考聊天上下文。然后，通话记录被转录并作为摘要推回 WhatsApp 聊天中。4  

### **10.3 结论：敞开的大门**  

在“人工”应用程序和“机器人”API 之间进行选择的时代已经结束。共存已推倒了那堵墙。它使每个拥有智能手机的企业都能平等获得企业级 AI。  

技术很复杂——webhooks、覆盖、JSON 有效负载和回声事件——但结果很简单：**更好的对话**。  

在 **Seasalt.ai**，我们构建了 **Seasalt.ai** 平台来为您处理这种复杂性。我们管理路由、RAG、速率限制和合规性，因此您可以专注于重要的事情：与客户建立联系。  

免费开始。保留您的手机。开启 AI。未来在等待。 ❤️ 🌊 🤖  

## **附录：参考表格**  

### **表 A：功能比较矩阵**  

| 功能               | 传统企业应用程序       | 纯云 API              | 共存（混合）                |
| :----------------- | :--------------------- | :-------------------- | :-------------------------- |
| **消息限制**       | 无限（人工）           | 分层（1k - 无限）     | **分层（API）/ 无限（应用程序）** |
| **吞吐量**         | 人工速度               | 高（80+ 条/秒）       | **上限（20 条/秒）**        |
| **多用户**         | 有限（关联设备）       | 无限（通过软件）      | **无限（API）+ 移动**       |
| **聊天记录**       | 本地备份               | 无（全新开始）        | **6 个月导入**              |
| **群聊**           | 是                     | 否                    | **否（仅应用程序，无同步）** |
| **自动化**         | 基本（离开消息）       | 高级（机器人）        | **高级 + 人工覆盖**         |
| **成本**           | 免费                   | 每条消息付费          | **混合（应用程序免费 / API 付费）** |

### **表 B：Webhook 事件字典**  

| 事件名称            | 来源             | 有效负载键                  | 所需操作              |
| :------------------ | :--------------- | :-------------------------- | :-------------------- |
| messages            | 用户             | entry.changes.value.messages | **触发机器人回复**    |
| smb_message_echoes  | 企业（应用程序） | ...value.statuses (echo)    | **暂停机器人（移交）** |
| smb_app_state_sync  | 企业（应用程序） | ...value.contacts           | **更新 CRM 联系人**   |
| template_category_update | Meta      | ...value.message_template_status_update | **更新预算逻辑**      |

### **表 C：故障排除指南**  

| 症状                     | 可能原因                  | 解决方法                          |
| :----------------------- | :------------------------ | :-------------------------------- |
| **人工输入时机器人回复** | 缺少 smb_message_echoes 订阅 | 订阅 Echoes；实施暂停逻辑。        |
| **入职后聊天记录丢失**   | 24 小时窗口过期            | **严重故障。记录丢失。如有可能，重新入职。** |
| **超出速率限制错误**     | 超过 20 条/秒             | 在出站队列中实施 Redis 令牌桶。    |
| **绿标丢失**             | 迁移重置 OBA 状态         | 提交带有新闻文档的 OBA 申请。      |
| **桌面应用程序未同步**   | 不支持的操作系统（Windows/WearOS） | 使用 Web 浏览器或 MacOS 客户端以实现可靠同步。 |

#### **引用作品**

1. 引导使用 WhatsApp 商业应用用户（又名“共存”）- Meta 开发者平台，访问日期：2026年1月28日，[https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/onboarding-business-app-users/](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/onboarding-business-app-users/)  
2. WhatsApp 共存 - 在同一号码上使用 WhatsApp 商业应用和 API，访问日期：2026年1月28日，[https://wetarseel.ai/whatsapp-coexistence-whatsapp-business-app-api-together/](https://wetarseel.ai/whatsapp-coexistence-whatsapp-business-app-api-together/)  
3. SeaChat 简介 - Seasalt.ai，访问日期：2026年1月28日，[https://wiki.seasalt.ai/seachat/getting-started/01-seachat-intro/](https://wiki.seasalt.ai/seachat/getting-started/01-seachat-intro/)  
4. 欢迎使用 Seasalt.ai，一个协作式云联络中心 - Seasalt.ai，访问日期：2026年1月28日，[https://seasalt.ai/en/blog/18-Seasalt.ai-collab-cloud-contact-center/](https://seasalt.ai/en/blog/18-seax-collab-cloud-contact-center/)  
5. Webhooks | 开发者文档，访问日期：2026年1月28日，[https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/overview/](https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/overview/)  
6. 如何在多租户应用程序中管理具有唯一电话号码的多个租户的自动化 WhatsApp 机器人？ - Stack Overflow，访问日期：2026年1月28日，[https://stackoverflow.com/questions/79271628/how-to-manage-automated-whatsapp-bots-for-multiple-tenants-with-unique-phone-num](https://stackoverflow.com/questions/79271628/how-to-manage-automated-whatsapp-bots-for-multiple-tenants-with-unique-phone-num)  
7. 关于多Agent | WhatsApp 帮助中心，访问日期：2026年1月28日，[https://faq.whatsapp.com/395911122612120](https://faq.whatsapp.com/395911122612120)  
8. WhatsApp 共存：使用它进行 WhatsApp 通信的终极指南 - Zixflow，访问日期：2026年1月28日，[https://zixflow.com/blog/whatsapp-coexistence/](https://zixflow.com/blog/whatsapp-coexistence/)  
9. 使用 Gemini、Twilio 和 Supabase RAG 实现带有人工交接的 AI WhatsApp 支持 - N8N，访问日期：2026年1月28日，[https://n8n.io/workflows/11648-ai-whatsapp-support-with-human-handoff-using-gemini-twilio-and-supabase-rag/](https://n8n.io/workflows/11648-ai-whatsapp-support-with-human-handoff-using-gemini-twilio-and-supabase-rag/)  
10. WhatsApp 共存 - 360Dialog，访问日期：2026年1月28日，[https://docs.360dialog.com/partner/waba-management/whatsapp-coexistence](https://docs.360dialog.com/partner/waba-management/whatsapp-coexistence)  
11. 为自定义 WhatsApp 解决方案构建可扩展的 Webhook 架构 - ChatArchitect，访问日期：2026年1月28日，[https://www.chatarchitect.com/news/building-a-scalable-webhook-architecture-for-custom-whatsapp-solutions](https://www.chatarchitect.com/news/building-a-scalable-webhook-architecture-for-custom-whatsapp-solutions)  
12. WhatsApp 云 API 多次向我的 Webhook 发送旧消息入站通知 - Stack Overflow，访问日期：2026年1月28日，[https://stackoverflow.com/questions/72894209/whatsapp-cloud-api-sending-old-message-inbound-notification-multiple-time-on-my](https://stackoverflow.com/questions/72894209/whatsapp-cloud-api-sending-old-message-inbound-notification-multiple-time-on-my)  
13. Webhook 覆盖 | 开发者文档，访问日期：2026年1月28日，[https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/override/](https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/override/)  
14. 常见问题解答 | 开发者文档，访问日期：2026年1月28日，[https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/faq/](https://developers.facebook.com/documentation/business-messaging/whatsapp/calling/faq/)  
15. WhatsApp 共存模式（2026 指南）：同时使用应用和 API + 新定价，访问日期：2026年1月28日，[https://chakrahq.com/article/whatsapp-coexistence-all-about-coexistence-mode-pricing-and-how-to-optimize-cost/](https://chakrahq.com/article/whatsapp-coexistence-all-about-coexistence-mode-pricing-and-how-to-optimize-cost/)  
16. WhatsApp 共存：将 WhatsApp 商业应用号码与 WhatsApp API 结合使用 - WANotifier，访问日期：2026年1月28日，[https://wanotifier.com/whatsapp-coexistence-guide/](https://wanotifier.com/whatsapp-coexistence-guide/)  
17. WhatsApp 商业平台定价 - Meta 开发者平台 - Facebook，访问日期：2026年1月28日，[https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing](https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing)  
18. 11月14日：改进的人工-机器人交接 - Turn.io 学习中心，访问日期：2026年1月28日，[https://learn.turn.io/l/en/article/jynv5tspbm-14-nov-inbox-routing-improvements](https://learn.turn.io/l/en/article/jynv5tspbm-14-nov-inbox-routing-improvements)  
19. 用于人工智能Agent的人工交接的最佳替代方案是什么？：r/n8n - Reddit，访问日期：2026年1月28日，[https://www.reddit.com/r/n8n/comments/1ko70xz/best_alternative_for_human_handover_with_ai_agents/](https://www.reddit.com/r/n8n/comments/1ko70xz/best_alternative_for_human_handover_with_ai_agents/)  
20. [Bug]：WhatsApp 渠道 - 竞态条件在启动包含多张图片（相册）的聊天时创建多个对话 · Issue #13261 - GitHub，访问日期：2026年1月28日，[https://github.com/chatwoot/chatwoot/issues/13261](https://github.com/chatwoot/chatwoot/issues/13261)  
21. Seasalt.ai 与 WhatsApp 的集成 - Seasalt.ai，访问日期：2026年1月28日，[https://wiki.seasalt.ai/en/seachat/integrations/seax-seachat-whatsapp/](https://wiki.seasalt.ai/en/seachat/integrations/seax-seachat-whatsapp/)  
22. 多合作伙伴解决方案 | 开发者文档，访问日期：2026年1月28日，[https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/multi-partner-solutions/](https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/multi-partner-solutions/)  
23. 共享和非共享 WhatsApp 商业账户（WABAs）之间的区别，访问日期：2026年1月28日，[https://api.support.vonage.com/hc/en-us/articles/21336595205532-Difference-Between-Shared-and-Non-Shared-WhatsApp-Business-Accounts-WABAs](https://api.support.vonage.com/hc/en-us/articles/21336595205532-Difference-Between-Shared-and-Non-Shared-WhatsApp-Business-Accounts-WABAs)  
24. Twilio 的 WhatsApp 商业平台概述，访问日期：2026年1月28日，[https://www.twilio.com/docs/whatsapp/api](https://www.twilio.com/docs/whatsapp/api)  
25. 关于 WhatsApp 商业平台 - Meta 开发者平台 - Facebook，访问日期：2026年1月28日，[https://developers.facebook.com/documentation/business-messaging/whatsapp/about-the-platform](https://developers.facebook.com/documentation/business-messaging/whatsapp/about-the-platform)  
26. 如何使用 OWL 在 WhatsApp 上启用实时Agent回复 - Camel AI，访问日期：2026年1月28日，[https://www.camel-ai.org/blogs/mcp-servers-whatsapp-owl](https://www.camel-ai.org/blogs/mcp-servers-whatsapp-owl)
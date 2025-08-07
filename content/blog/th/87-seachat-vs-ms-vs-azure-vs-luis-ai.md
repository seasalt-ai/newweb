---
title: "SeaChat เทียบกับ Microsoft Bot Framework และ Azure Bot Service (LUIS.ai)"
metatitle: "SeaChat เทียบกับ Microsoft Bot Framework และ Azure Bot Service (LUIS.ai)"
date: 2024-04-02 00:22:19-07:00
modified_date: 2024-07-08 09:00:00+00:00
draft: false
author: Xuchen Yao
description: "ในด้าน Conversational AI Microsoft Azure Bot Service (LUIS.ai) เคยเป็นที่นิยม แต่ SeaChat ที่ใช้ Large Language Models (LLMs) สามารถก้าวข้ามข้อจำกัดและสร้างประสบการณ์การสนทนาที่เป็นธรรมชาติและลื่นไหลมากขึ้น"
weight: 1
tags:
  - SeaChat
  - AI Tools
  - LLM
  - Conversational AI
  - NLU
image: /images/blog/74-SeaChat-vs-Microsoft-Bot-Framework-vs-Azure-Bot-Service-vs-luis-ai/blog-banner.png
canonicalURL: /zh/blog/seachat-vs-microsoft-bot-framework-vs-azure-bot-service-vs-luis-ai/
url: /zh/blog/seachat-vs-microsoft-bot-framework-vs-azure-bot-service-vs-luis-ai/
---

โลกของ Conversational AI ตื่นเต้นกับข่าวล่าสุดเกี่ยวกับความร่วมมือที่ลึกซึ้งระหว่าง Microsoft และ OpenAI แม้ว่าบางคนจะเฉลิมฉลองศักยภาพของความร่วมมือนี้ แต่ภายใน Microsoft ก็มีเสียงที่ไม่พอใจเช่นกัน ตามรายงาน ผู้ที่อยู่ภายในกังวลว่า จะเบี่ยงเบนจากการพัฒนา AI ภายใน เพื่อส่งเสริมผลิตภัณฑ์ของ OpenAI

พื้นที่หนึ่งที่กล่าวถึงโดยเฉพาะคือชะตากรรมของ Microsoft Azure Bot Service แหล่งข่าวภายในแนะนำว่ามันอาจ "[หายไปมากหรือน้อย](https://www.digitalinformationworld.com/2024/03/microsoft-insiders-fear-firm-has.html)" ถูกแทนที่ด้วยโซลูชันของ OpenAI

[Microsoft Bot Framework](https://dev.botframework.com/) และ [Azure AI Bot Service](https://azure.microsoft.com/en-us/products/ai-services/ai-bot-service) (และ [LUIS.ai](http://LUIS.ai)) เป็นชุดของไลบรารี เครื่องมือ และบริการที่ให้คุณสร้าง ทดสอบ ปรับใช้ และจัดการ Bot อัจฉริยะ อย่างไรก็ตาม [GitHub Repository ของ Bot Framework SDK](https://github.com/microsoft/botframework-sdk) ไม่มีการอัปเดตนอกเหนือจาก README เป็นเวลากว่า 2 ปี (ณ ปี 2024):

<img height="60%" width="100%" src="/images/blog/74-SeaChat-vs-Microsoft-Bot-Framework-vs-Azure-Bot-Service-vs-luis-ai/1-Microsoft-bot-framework.png" alt="">

## ทางเลือกสำหรับ Microsoft Bot Framework สำหรับนักพัฒนาคืออะไร?

SeaChat เข้ามา: **ผู้ท้าทาย LLM**

ในขณะที่ Microsoft คิดเกี่ยวกับกลยุทธ์ AI ของพวกเขา Seasalt.ai กำลังดึงดูดความสนใจด้วยแพลตฟอร์มการสนทนาที่ขับเคลื่อนด้วย LLM (Large Language Models) [SeaChat](https://chat.seasalt.ai/?utm_source=blog) SeaChat ใช้ประโยชน์จากความก้าวหน้าล่าสุดในการเข้าใจภาษาธรรมชาติ ให้ประสบการณ์ผู้ใช้ที่เป็นธรรมชาติและใช้งานง่ายมากกว่า Chatbot แบบดั้งเดิมที่ใช้กฎ

**นี่คือเหตุผลที่ SeaChat อาจอยู่ในตำแหน่งที่ดีในการนำการปฏิวัติ Conversational AI**:

- **พลังของ LLM**:
  ใช้ประโยชน์จากพลังของ LLM ส่งเสริมการสนทนาที่ละเอียดอ่อนมากขึ้น
  เข้าใจบริบทและเจตนาได้แม่นยำมากขึ้น
  ทำให้การโต้ตอบกับผู้ใช้เป็นธรรมชาติและลื่นไหลมากขึ้น
- **ความยืดหยุ่น**:
  ปรับตัวและเรียนรู้เมื่อโต้ตอบกับผู้ใช้
  ปรับปรุงความสามารถในการให้การตอบสนองที่เกี่ยวข้องและมีประโยชน์อย่างต่อเนื่อง
  จัดการการสอบถามและคำขอที่ซับซ้อนตามเวลา
- **การรวมที่ราบรื่น**:
  รวมกับแพลตฟอร์มและแอปพลิเคชันต่างๆ อย่างราบรื่น
  ง่ายต่อการปรับใช้ Chatbot ในช่องทางต่างๆ
  ให้การสนับสนุนหลายช่องทางสำหรับประสบการณ์ลูกค้าที่เป็นเอกภาพ
- **ลดเวลาในการพัฒนา**: สร้าง Chatbot ที่ซับซ้อนด้วยความต้องการโค้ดน้อยที่สุด
- **คุ้มค่า**: กำจัดความต้องการข้อมูลการฝึกอบรมและทรัพยากรจำนวนมาก
- **ความสามารถในการขยายตัว**: จัดการการสอบถามปริมาณสูงได้อย่างง่ายดาย โดยไม่กระทบประสิทธิภาพ

## ข้อเสียของ Azure Bot Service และ Microsoft Bot Framework

แม้ว่า Azure Bot Services และ Microsoft Bot Framework จะมีประโยชน์ แต่พวกเขานำมาซึ่งข้อเสียบางประการ:

- **ข้อจำกัดที่ใช้กฎ**: การพึ่งพากฎที่กำหนดไว้ล่วงหน้าอาจนำไปสู่การสนทนาที่แข็ง ยากที่จะจัดการกับการป้อนข้อมูลของผู้ใช้ที่คาดไม่ถึง
- **ความซับซ้อนในการพัฒนา**: การสร้างและบำรุงรักษา Chatbot ที่ซับซ้อนอาจต้องการความรู้ด้านโค้ดค่อนข้างมาก
- **ความสามารถในการขยายตัวที่จำกัด**: การจัดการการสอบถามปริมาณสูงอาจเป็นความท้าทาย กระทบประสิทธิภาพ
- **ความท้าทายในการรวม**: การรวมกับแพลตฟอร์มต่างๆ อาจต้องการงานพัฒนาที่เพิ่มเติม
- **การผูกติดกับผู้ให้บริการ**: การพึ่งพาระบบนิเวศ Microsoft อาจจำกัดความยืดหยุ่นและตัวเลือกในอนาคต
- **อนาคตที่ไม่แน่นอนกับ OpenAI**: การหันไปใช้โซลูชัน OpenAI ของ Microsoft สร้างความไม่แน่นอนเกี่ยวกับการสนับสนุน Bot Framework ในระยะยาว

## การเปรียบเทียบ NLU ที่ใช้ Intent/Entity แบบดั้งเดิมกับ NLU ที่ใช้ LLM

การวิจัยแสดงให้เห็นว่าความแตกต่างระหว่าง NLU ที่ใช้ Intent/Entity และ NLU ที่ใช้ LLM คือ [หลายล้าน](https://seasalt.ai/blog/73-intent-entity-based-nlu-vs-genai-llm-based-nlu/?utm_source=blog) ในแง่ของตัวอย่างการฝึกอบรม คือ 630,000 ตัวอย่างเทียบกับเพียง 32 ตัวอย่าง การลดลงอย่างมากของความต้องการข้อมูลการฝึกอบรมนี้แปลงเป็นการประหยัดต้นทุนที่สำคัญสำหรับธุรกิจที่นำ NLU ที่ใช้ GenAI/LLM มาใช้

#### SeaChat เทียบกับ Microsoft Bot Framework ####

<center>
<img height="60%" width="100%" src="/images/blog/87-zh-SeaChat-vs-Microsoft-Bot-Framework-vs-Azure-Bot-Service-vs-luis-ai/87-zh-SeaChat-vs-Microsoft-Bot-Framework-vs-Azure-Bot-Service-vs-luis-ai.png" alt="">

*SeaChat เทียบกับ Microsoft Bot Framework*
</center>

## SeaChat ให้ประสบการณ์การสนทนาที่ดีขึ้น

SeaChat แสดงถึงความก้าวหน้าที่สำคัญในด้าน Conversational AI ให้แพลตฟอร์มที่ทรงพลังและหลากหลายสำหรับธุรกิจในการสร้างประสบการณ์การสนทนาที่น่าสนใจและเป็นส่วนตัว ด้วยเทคโนโลยีที่ก้าวหน้า การรวมที่ราบรื่น และชุดฟีเจอร์ที่ครอบคลุม [SeaChat](https://chat.seasalt.ai/?utm_source=blog) เป็นตัวเลือกที่แข็งแกร่งแทน Framework แบบดั้งเดิมอย่าง Azure Bot Services และ Microsoft Bot Framework เปิดทางสู่อนาคตของการโต้ตอบที่ขับเคลื่อนด้วย AI 
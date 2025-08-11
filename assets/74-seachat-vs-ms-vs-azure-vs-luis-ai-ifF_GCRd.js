const e=`---
title: "SeaChat vs Microsoft Bot Framework vs Azure Bot Services(LUIS.ai)"
metatitle: "SeaChat vs. Microsoft Framework vs. Azure Services"
date: 2024-03-21 00:22:19-07:00
modified_date: 2024-06-09
draft: false
author: Xuchen Yao
description: "ทำไม Microsoft Bot Framework และ Azure Bot Services (LUIS.ai) ถึงล้าสมัย? ค้นพบ SeaChat - ก้าวข้ามแชทบอทแบบเดิมด้วยเทคโนโลยี LLM ที่ล้ำสมัย สร้างบทสนทนาเสมือนมนุษย์ที่น่าสนใจ"
weight: 1
tags:
  - SeaChat
  - AI Tools
  - LLM
  - Conversational AI
  - NLU
image: /images/blog/74-SeaChat-vs-Microsoft-Bot-Framework-vs-Azure-Bot-Service-vs-luis-ai/blog-banner.png
canonicalURL: /blog/seachat-vs-microsoft-framework-vs-azure-service-vs-luis-ai/
url: /blog/seachat-vs-microsoft-framework-vs-azure-service-vs-luis-ai/
---

วงการ AI ด้านการสนทนากำลังคึกคักกับข่าวความร่วมมือระหว่าง Microsoft และ OpenAI ที่ลึกซึ้งขึ้น ขณะที่บางคนมองเห็นโอกาสจากพันธมิตรนี้ ก็มีเสียงกังวลจากภายใน Microsoft ว่าอาจลดการพัฒนา AI ภายในเพื่อเน้นผลิตภัณฑ์ของ OpenAI

หนึ่งในประเด็นที่ถูกกล่าวถึงคืออนาคตของ Azure Bot Service ของ Microsoft แหล่งข่าวภายในระบุว่าอาจจะ "แทบจะหายไป" และถูกแทนที่ด้วยโซลูชันของ OpenAI

Microsoft Bot Framework และ Azure AI Bot Service (รวมถึง LUIS.ai) เป็นชุดเครื่องมือและบริการสำหรับสร้าง ทดสอบ ปรับใช้ และจัดการบอทอัจฉริยะ อย่างไรก็ตาม GitHub repo สำหรับ Bot Framework SDK ไม่ได้อัปเดตมานานกว่า 2 ปี (ณ ปี 2024) ยกเว้น README:

<img height="60%" width="100%" src="/images/blog/74-SeaChat-vs-Microsoft-Bot-Framework-vs-Azure-Bot-Service-vs-luis-ai/1-Microsoft-bot-framework.png" alt="">

## ทางเลือกสำหรับนักพัฒนาแทน Microsoft Bot Framework

SeaChat: **ผู้ท้าชิงจาก LLM**

ขณะที่ Microsoft กำลังวางกลยุทธ์ด้าน AI ทาง Seasalt.ai ก็สร้างกระแสด้วยแพลตฟอร์มสนทนา LLM (Large Language Model) [SeaChat](https: //chat.seasalt.ai/?utm_source=blog) SeaChat ใช้เทคโนโลยีความเข้าใจภาษาธรรมชาติขั้นสูง ให้ประสบการณ์ผู้ใช้ที่เป็นธรรมชาติและเข้าใจง่ายกว่าบอทแบบเดิม

**เหตุผลที่ SeaChat อาจเป็นผู้นำการปฏิวัติ AI ด้านการสนทนา: **
- **พลังของ LLM**:
ใช้ศักยภาพของ LLM สร้างบทสนทนาที่ลึกซึ้ง
เข้าใจบริบทและเจตนาได้แม่นยำ
สร้างปฏิสัมพันธ์ที่เป็นธรรมชาติและลื่นไหล
- **ความยืดหยุ่น**:
ปรับตัวและเรียนรู้จากการสนทนากับผู้ใช้
พัฒนาความสามารถในการตอบสนองที่เหมาะสมและเป็นประโยชน์อย่างต่อเนื่อง
รองรับคำถามและคำขอที่ซับซ้อนได้
- **การผสานรวมที่ไร้รอยต่อ**:
ผสานกับแพลตฟอร์มและแอปพลิเคชันต่าง ๆ ได้ง่าย
นำบอทไปใช้ในหลายช่องทางได้สะดวก
รองรับหลายช่องทางเพื่อประสบการณ์ลูกค้าที่เป็นหนึ่งเดียว
- **ลดเวลาในการพัฒนา**: สร้างบอทที่ซับซ้อนได้เร็วขึ้นโดยใช้โค้ดน้อยลง
- **คุ้มค่า**: ไม่ต้องใช้ข้อมูลฝึกสอนและทรัพยากรจำนวนมาก
- **ขยายขนาดได้ง่าย**: รองรับปริมาณคำถามจำนวนมากโดยไม่ลดประสิทธิภาพ

## ข้อเสียของ Azure Bot Services และ Microsoft Bot Framework
แม้ Azure Bot Services และ Microsoft Bot Framework จะเคยมีประโยชน์ แต่ก็มีข้อจำกัด:
- **ข้อจำกัดจากกฎที่ตั้งไว้**: การใช้กฎที่กำหนดไว้ล่วงหน้าทำให้บทสนทนาไม่เป็นธรรมชาติและจัดการกับข้อมูลที่ไม่คาดคิดได้ยาก
- **ความซับซ้อนในการพัฒนา**: การสร้างและดูแลบอทที่ซับซ้อนต้องใช้ความเชี่ยวชาญด้านโค้ด
- **ขยายขนาดได้จำกัด**: การจัดการคำถามจำนวนมากอาจเป็นปัญหาและลดประสิทธิภาพ
- **ความยากในการผสานรวม**: การผสานกับแพลตฟอร์มต่าง ๆ อาจต้องใช้ความพยายามเพิ่มเติม
- **การผูกขาดกับผู้ให้บริการ**: การพึ่งพา Microsoft อาจจำกัดความยืดหยุ่นและทางเลือกในอนาคต
- **อนาคตที่ไม่แน่นอนกับ OpenAI**: การเปลี่ยนไปใช้โซลูชัน OpenAI ของ Microsoft ทำให้อนาคตของ Bot Framework ไม่แน่นอน

## NLU แบบดั้งเดิมที่ใช้ intent/entity vs. NLU ที่ใช้ LLM
`;export{e as default};

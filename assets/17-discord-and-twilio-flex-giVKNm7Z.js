const n=`---
title: "Discord (3/3): Discord และ Twilio Flex: การนำ Flex Contact Center เข้าสู่ดินแดนที่ไม่เคยมีใครสำรวจ"
metatitle: "Discord (3/3): Twilio Flex Contact Center ใน Discord"
date: 2022-06-07 12:32:24-07:00
modified_date: 2025-07-28T16:56:53Z
draft: false
author: Kim Dodds
description: "ในบล็อกนี้ เราจะสาธิตวิธีการที่ Seasalt.ai ได้รวมศูนย์ติดต่อแบบครบวงจรเข้ากับเซิร์ฟเวอร์ Discord"
weight: 1
tags:
  - SeaX
  - Discord
image: /images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/flex-discord-thumbnail.png
canonicalURL: /blog/discord-and-twilio
url: /blog/discord-and-twilio/
---

*นี่คือโพสต์สุดท้ายของเราในชุดสามส่วนเกี่ยวกับการมีส่วนร่วมของลูกค้าบน Discord บล็อกแรกของเรา [“พรมแดนใหม่สำหรับการมีส่วนร่วมของลูกค้า”](https://seasalt.ai/blog/15-discord-a-new-frontier-for-customer-engagement/) ได้กล่าวถึงการเพิ่มขึ้นของความนิยมของ Discord และโอกาสใหม่ที่นำเสนอสำหรับแบรนด์ในการสร้างและเข้าร่วมชุมชนออนไลน์ของตนเอง ในส่วนที่สอง [“วิธีสร้างชุมชน Discord และบอทสำหรับแบรนด์ของคุณ”](https://seasalt.ai/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/) เราได้อธิบายวิธีการสร้างเซิร์ฟเวอร์ Discord สำหรับแบรนด์ของคุณ และวิธีการรวมบอทเพื่อจัดการการดูแลเซิร์ฟเวอร์ การประกาศ ผลตอบรับจากผู้ใช้ ฯลฯ สุดท้าย ในบล็อกนี้ เราจะนำเสนอการสาธิตว่า Seasalt.ai ได้รวมศูนย์ติดต่อแบบครบวงจรเข้ากับเซิร์ฟเวอร์ Discord ได้อย่างไร ทำให้แบรนด์สามารถจัดการทุกด้านของการดูแลลูกค้าบนแพลตฟอร์มได้*

## สารบัญ
- [สารบัญ](#table-of-contents)
- [การสาธิตบริการลูกค้า Discord](#discord-customer-service-demo)
- [Twilio Flex](#twilio-flex)
- [SeaX](#seax)
- [เซิร์ฟเวอร์สาธิต](#demo-server)
  - [ความช่วยเหลือแบบ 1 ต่อ หลาย: ช่องทางทางการ](#1-to-many-help-official-channels)
  - [ความช่วยเหลือแบบ 1 ต่อ 1: ตัวแทนบริการลูกค้า](#1-to-1-help-customer-service-agent)
    - [ฐานความรู้](#knowledge-base)
    - [การโอนตัวแทนสด](#live-agent-transfer)
  - [การจัดการกรณี](#case-management)
- [การเจาะลึกทางเทคนิค](#technical-deep-dive)
  - [กำหนด Flex Flow](#define-the-flex-flow)
  - [สร้างช่องทางที่กำหนดเอง](#create-a-custom-channel)
  - [สร้างเซิร์ฟเวอร์ HTTP เพื่อรองรับการกำหนดเส้นทางที่ซับซ้อนยิ่งขึ้น](#create-an-http-server-to-support-more-complex-routing)
    - [Webhook ข้อความขาออก](#outbound-messages-webhook)
    - [การรวมบอท](#bot-integration)
- [สรุป](#summary)

# การสาธิตบริการลูกค้า Discord
หากคุณกระตือรือร้นที่จะเข้าสู่ประเด็นสำคัญและดูผลิตภัณฑ์สุดท้าย เราจะนำเสนอวิดีโอสาธิตสุดท้ายก่อน:

<iframe width="85%" height="450px" src="https://www.youtube.com/embed/iUK4YkGYI6Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>


เป้าหมายของเราคือการสาธิตว่า Discord สามารถรวมเข้ากับซอฟต์แวร์บริการลูกค้าที่มีอยู่ได้อย่างไร (ในกรณีนี้คือ [Twilio Flex](https://flex.twilio.com/)) เพื่อเพิ่มมูลค่าให้กับเซิร์ฟเวอร์อย่างเป็นทางการของแบรนด์ อ่านต่อเพื่อดูการใช้งานของเราอย่างใกล้ชิด

# Twilio Flex
Twilio เป็นบริษัทสื่อสารที่ได้รับการยอมรับซึ่งนำเสนอ API สำหรับการจัดการข้อความตัวอักษร การโทรศัพท์ อีเมล ข้อความแชท และอื่นๆ Flex เป็นหนึ่งในผลิตภัณฑ์เรือธงของ Twilio: ศูนย์ติดต่อบนคลาวด์ที่ปรับขนาดได้ ซึ่งกำหนดเส้นทางข้อความและการโทรจากแหล่งใดๆ ไปยังตัวแทนเสมือนและตัวแทนสด เราเลือก Flex เป็นพื้นฐานสำหรับการรวมศูนย์ติดต่อของเรา เนื่องจากมีการสนับสนุนที่ยอดเยี่ยมสำหรับช่องทางที่หลากหลาย เช่น Facebook, SMS และ WhatsApp

# SeaX
SeaX เป็นศูนย์ติดต่อบนคลาวด์ที่ผสานรวมอย่างลึกซึ้งกับคุณสมบัติ AI ขั้นสูงที่ช่วยเพิ่มประสิทธิภาพการทำงานและความพึงพอใจของลูกค้า SeaX เป็นหนึ่งในผลิตภัณฑ์เรือธงของ Seasalt.ai และได้เปิดตัวให้กับลูกค้าในกว่า 150 ประเทศแล้ว แพลตฟอร์มศูนย์ติดต่อ SeaX สร้างขึ้นบน Twilio Flex และมีคุณสมบัติเพิ่มเติมที่หลากหลายที่ช่วยให้ตัวแทนสดสามารถช่วยเหลือลูกค้าได้ดียิ่งขึ้น คุณสมบัติที่มีประโยชน์ที่สุดบางส่วนคือ text-to-speech และ speech-to-text ภายในองค์กร, ฐานความรู้ที่ขับเคลื่อนด้วย AI และระบบการจัดการกรณีแบบรวม สำหรับข้อมูลเพิ่มเติมเกี่ยวกับความสามารถทั้งหมดของแพลตฟอร์ม SeaX โปรดเยี่ยมชม [หน้าแรกของ SeaX](https://seax.seasalt.ai/?utm_source=blog/)

# เซิร์ฟเวอร์สาธิต
ตอนนี้เราจะมาดูกันว่าเราตั้งค่าเซิร์ฟเวอร์ Discord ของเราอย่างไร สำหรับวัตถุประสงค์ของการสาธิต เราจินตนาการถึงสถานการณ์ที่เซิร์ฟเวอร์ของเราถูกใช้เป็นชุมชนสำหรับเกมอย่าง Pokémon Go! ตารางต่อไปนี้สรุปคุณสมบัติบางอย่างที่แสดงในเซิร์ฟเวอร์ Discord ของเรา

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-features-2.png" alt="ภาพรวมคุณสมบัติของเซิร์ฟเวอร์ Discord บริการลูกค้าสาธิต"/>

*ภาพรวมคุณสมบัติของเซิร์ฟเวอร์ Discord สาธิต*
</center>

## ความช่วยเหลือแบบ 1 ต่อ หลาย: ช่องทางทางการ
ช่องทางหลายช่องในเซิร์ฟเวอร์ถูกตั้งค่าเพื่อให้มีกระแสข้อมูลโดยตรงระหว่างผู้ดูแลระบบ/นักพัฒนาอย่างเป็นทางการและผู้เล่น
**ช่องประกาศ** สามารถโพสต์ได้โดยผู้ดูแลระบบและผู้ดูแลเท่านั้น และสามารถรวมโพสต์ (ด้วยตนเองหรืออัตโนมัติ) จากบัญชี Twitter เว็บไซต์ หรือแหล่งข้อมูลทางการอื่นๆ

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-announcement-channel.jpg" alt="ช่องประกาศบนเซิร์ฟเวอร์ Discord ซึ่งมีโพสต์จากบัญชี Twitter อย่างเป็นทางการ"/>

*ช่อง #announcements บนเซิร์ฟเวอร์ Discord สาธิต*
</center>

**ช่องรายงานข้อผิดพลาด** อนุญาตให้ผู้เล่นพูดคุยเกี่ยวกับข้อผิดพลาดและปัญหาที่ทำให้เกมหยุดทำงาน ผู้ดูแลระบบสามารถจับตาดูช่องนี้เพื่อระบุปัญหาใดๆ ในเกมที่ควรได้รับการแก้ไข นอกจากนี้ ผู้ใช้สามารถส่งรายงานข้อผิดพลาดอย่างเป็นทางการโดยใช้คำสั่ง \`/bug\` จากภายในช่อง

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-bug-report-channel.jpg" alt="ช่องรายงานข้อผิดพลาดบนเซิร์ฟเวอร์ Discord ซึ่งมีรายงานข้อผิดพลาดที่ส่งมา"/>

*ช่อง #bug-report บนเซิร์ฟเวอร์ Discord สาธิต ซึ่งมีรายงานข้อผิดพลาดที่ส่งมา*
</center>

**ช่องคำขอคุณสมบัติ** อนุญาตให้ผู้เล่นพูดคุยเกี่ยวกับการเปลี่ยนแปลงการเล่นเกม การปรับปรุงคุณภาพชีวิต การเพิ่มเนื้อหา ฯลฯ ที่พวกเขาต้องการให้เพิ่มลงในเกม คล้ายกับช่องคำขอข้อผิดพลาด ข้อมูลที่ป้อนสามารถมองเห็นได้โดยผู้ดูแล Discord และพวกเขาสามารถใช้คำสั่ง \`/new_feature\` เพื่อส่งคำขออย่างเป็นทางการได้

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-feature-request-channel.jpg" alt="ช่องคำขอคุณสมบัติบนเซิร์ฟเวอร์ Discord ซึ่งมีผู้ใช้กำลังดำเนินการคำสั่ง slash"/>

*ช่อง #feature-request บนเซิร์ฟเวอร์ Discord สาธิต ซึ่งมีผู้ใช้กำลังดำเนินการคำสั่ง slash*
</center>

## ความช่วยเหลือแบบ 1 ต่อ 1: ตัวแทนบริการลูกค้า

ผู้เล่นสามารถใช้คำสั่ง \`/helpme\` เพื่อเรียกข้อความโดยตรงกับตัวแทน ตัวแทนบริการลูกค้าสามารถเป็นได้ทั้งแบบอัตโนมัติ (ตัวแทนเสมือน) หรือมีเจ้าหน้าที่เป็นตัวแทนสด

สำหรับการสาธิตของเรา เราได้ตั้งค่าบอท FAQ แบบง่ายๆ ซึ่งจะสอบถามฐานความรู้ของบริษัทเพื่อเสนอแนะบทความที่เกี่ยวข้องให้กับผู้ใช้ ผู้ใช้ยังสามารถขอตัวแทนสดได้ และจะถูกโอนในแชทเดียวกันไปยังตัวแทนสดบน SeaX

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-customer-service-channel.jpg" alt="ช่องบริการลูกค้าบนเซิร์ฟเวอร์ Discord ซึ่งมีผู้ใช้กำลังเรียก DM"/>

*ช่อง #feature-request บนเซิร์ฟเวอร์ Discord สาธิต ซึ่งมีผู้ใช้กำลังเรียก DM*
</center>

### ฐานความรู้
เมื่อผู้ใช้ส่งคำถามไปยังตัวแทนบริการเสมือน ตัวแทนสามารถแนะนำผู้ใช้ไปยังบทความที่เกี่ยวข้องในฐานความรู้ได้

### การโอนตัวแทนสด
เมื่อผู้ใช้อยู่ในข้อความโดยตรงกับบอท พวกเขาสามารถขอตัวแทนสดได้ พวกเขาจะได้รับการแจ้งเตือนทันทีว่ามีการสร้างกรณีสำหรับพวกเขา และกำลังถูกโอนไปยังตัวแทนสด เมื่อตัวแทนสดเข้าร่วมแชท พวกเขาก็จะได้รับการแจ้งเตือนเช่นกัน

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-customer-service-dm.jpg" alt="ข้อความโดยตรงกับบริการลูกค้า ซึ่งมีคำแนะนำบทความ KB การโอนตัวแทนสด และการจัดการกรณี"/>

*ข้อความโดยตรงกับบริการลูกค้า ซึ่งมีคำแนะนำบทความ KB การโอนตัวแทนสด และการจัดการกรณี*
</center>

ในส่วนหลังบ้าน ตัวแทนสดสามารถจัดการสายเรียกเข้าและข้อความแชทจากทุกช่องทาง (SMS, Facebook, Discord, การโทรด้วยเสียง ฯลฯ) ผ่านแพลตฟอร์มเดียว ในกรณีนี้ แพลตฟอร์มหลังบ้านคือ SeaX

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/flex-discord-channel.jpg" alt="อินเทอร์เฟซ SeaX ที่แสดงมุมมองของตัวแทนสดของการสนทนากับผู้ใช้บน Discord"/>

*อินเทอร์เฟซ SeaX ที่แสดงมุมมองของตัวแทนสดของการสนทนากับผู้ใช้บน Discord*
</center>

## การจัดการกรณี
คุณสมบัติหนึ่งที่เราต้องการเน้นในการสาธิตนี้คือการจัดการกรณี โซลูชัน Discord ของ Seasalt.ai ผสานรวมกับระบบการจัดการกรณีของ SeaX เพื่อติดตามกรณีต่างๆ จากผู้ใช้อย่างเหมาะสม เมื่อผู้ใช้โต้ตอบกับบอท Discord (เช่น การขอตัวแทนสดหรือการรายงานข้อผิดพลาด) เราสามารถเปิดกรณีใหม่โดยอัตโนมัติและบันทึกข้อมูลสำคัญทั้งหมดเกี่ยวกับผู้ใช้และปัญหาที่พวกเขากำลังประสบอยู่ สิ่งนี้ช่วยให้ตัวแทนสดสามารถเข้าถึงปัญหาที่รายงานทั้งหมดได้อย่างง่ายดาย และตรวจสอบให้แน่ใจว่าพวกเขาติดตามผู้ใช้จนกว่ากรณีจะได้รับการแก้ไข

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-new-case.png" alt="การสร้างกรณีใหม่ในระบบการจัดการกรณีของ SeaX"/>

*การสร้างกรณีใหม่ในระบบการจัดการกรณีของ SeaX*

<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-existing-case.png" alt="การดูกรณีที่มีอยู่ในระบบการจัดการกรณีของ SeaX"/>

*การดูกรณีที่มีอยู่ในระบบการจัดการกรณีของ SeaX*

</center>

# การเจาะลึกทางเทคนิค

ตอนนี้เราได้เห็นผลิตภัณฑ์สุดท้ายและคุณสมบัติทั้งหมดที่มีให้สำหรับสมาชิกเซิร์ฟเวอร์และตัวแทนสดที่ช่วยเหลือพวกเขาแล้ว แต่ทั้งหมดนี้ถูกนำไปใช้จริงได้อย่างไร? ในบล็อกโพสต์ล่าสุดของเรา “[วิธีสร้างชุมชน Discord และบอทสำหรับแบรนด์ของคุณ](https://seasalt.ai/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/)” เราได้อธิบายวิธีการสร้างเซิร์ฟเวอร์ Discord สำหรับแบรนด์ของคุณ และวิธีการรวมบอท Discord เพื่อจัดการมัน เพื่อสนับสนุนการสาธิตขั้นสูงนี้ เรายังใช้ [SeaChat ซึ่งเป็นเอ็นจิ้น AI การสนทนาของ Seasalt.ai](https://chat.seasalt.ai) เพื่อสร้างแชทบอทแบบง่ายๆ ที่ช่วยให้บอท Discord ของเราสามารถจัดการคำถามภาษาธรรมชาติสำหรับผู้ใช้ได้

ในส่วนของ SeaX ทีมงานของเราทำงานอย่างใกล้ชิดกับ Twilio เพื่อสร้างโซลูชันศูนย์ติดต่อที่เต็มไปด้วยคุณสมบัติที่สร้างขึ้นบน Twilio Flex สำหรับข้อมูลเพิ่มเติมเกี่ยวกับ Twilio Flex และวิธีการทำงานของกระบวนการตั้งค่า คุณสามารถอ่าน [คู่มือเริ่มต้นใช้งาน Twilio Flex](https://www.twilio.com/docs/flex/quickstart)

หลังจากเตรียมเซิร์ฟเวอร์ Discord, บอท Discord และแชทบอท และตรวจสอบให้แน่ใจว่าเรามีอินสแตนซ์ที่ใช้งานได้ของ SeaX ที่ทำงานอยู่ ความท้าทายที่ยิ่งใหญ่ที่สุดคือการกำหนดเส้นทางข้อความเข้าและออกจากผู้ใช้ บอท และตัวแทนสดบน SeaX อย่างถูกต้อง Twilio นั้นยอดเยี่ยมในการจัดการการกำหนดเส้นทางข้อความ ดังนั้นเป้าหมายของเราคือการจัดการคำสั่ง slash ทั้งหมดจากภายในเซิร์ฟเวอร์บอท Discord ของเรา จากนั้นส่งต่อข้อความอื่นๆ ทั้งหมด (เช่น ข้อความโดยตรงไปยังแชทบอทหรือตัวแทนสด) ไปยัง Twilio

## กำหนด Flex Flow
ขั้นตอนแรกคือการตรวจสอบให้แน่ใจว่าข้อความใดๆ ที่เราส่งไปยัง Twilio จะถูกกำหนดเส้นทางไปยังตำแหน่งที่ถูกต้อง เราตั้งค่า Twilio flow แบบง่ายๆ ที่จะตรวจสอบก่อนว่าผู้ใช้ร้องขอตัวแทนสดหรือไม่ และถ้าใช่ จะส่งต่อข้อความต่อไปนี้ไปยัง SeaX หากผู้ใช้ไม่ได้ร้องขอตัวแทนสด เราจะส่งต่อข้อความไปยังแชทบอทเพื่อรับการตอบกลับ สำหรับข้อมูลเพิ่มเติมเกี่ยวกับวิธีการตั้งค่า flow โปรดดู [เอกสาร Twilio Studio Flow](https://www.twilio.com/docs/studio)

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-flow.png" alt="Flex Studio Flow แบบง่ายๆ ที่กำหนดเส้นทางข้อความขาเข้าไปยังแชทบอทหรือไปยัง SeaX"/>

*Flex Studio Flow แบบง่ายๆ ที่กำหนดเส้นทางข้อความขาเข้าไปยังแชทบอทหรือไปยัง SeaX*
</center>

## สร้างช่องทางที่กำหนดเอง
ตอนนี้เรามีความคิดแล้วว่าข้อความขาเข้าจะถูกกำหนดเส้นทางอย่างไร อย่างไรก็ตาม Discord ไม่ใช่ช่องทางที่ Twilio รองรับโดยกำเนิด โชคดีที่ Twilio มีบทช่วยสอนโดยละเอียดเกี่ยวกับวิธี [เพิ่มช่องแชทที่กำหนดเองลงใน Twilio Flex](https://www.twilio.com/blog/add-custom-chat-channel-twilio-flex) หลังจากทำตามคำแนะนำเพื่อตั้งค่าช่องทางที่กำหนดเองใหม่บน Twilio เราจำเป็นต้องส่งต่อข้อความจาก Discord ไปยัง Twilio จริงๆ

ขั้นแรก เราตั้งค่าไคลเอ็นต์ Twilio:

\`\`\`python
from twilio.rest import Client
twilio_client = Client(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)
\`\`\`

ตอนนี้ เมื่อเราได้รับข้อความขาเข้าจาก Discord เราสามารถส่งต่อข้อความนั้นไปยัง Twilio ผ่านไคลเอ็นต์ Twilio ก่อนอื่น เราควรตรวจสอบว่าผู้ใช้มีอยู่ในระบบ Twilio แล้วหรือไม่ และมีช่องแชทเปิดอยู่แล้วหรือไม่

\`\`\`python
# เรียกใช้เมธอด get_user เพื่อตรวจสอบว่าผู้ใช้มีอยู่หรือไม่ และสร้างใหม่หากไม่มี
user = await get_user(user_id, twilio_client, TWILIO_SERVICE_SID)

# ดึงช่องที่ผู้ใช้อยู่
user_channels = twilio_client.chat \\
        .services(TWILIO_SERVICE_SID) \\
        .users(user_id) \\
        .user_channels \\
        .list()
\`\`\`

หากผู้ใช้มีช่องแชทที่เปิดอยู่แล้ว เราจำเป็นต้องใช้ช่องนั้นเพื่อให้เราสามารถเข้าถึงประวัติการแชทได้ หากไม่มีช่องแชทอยู่ เราจะสร้างช่องใหม่สำหรับผู้ใช้:

\`\`\`python
if user_channels:
    channel_sid = user_channels[-1].channel_sid
else:
    channel = twilio_client.flex_api \\
            .channel \\
            .create(
                flex_flow_sid=FLEX_FLOW_ID,
                chat_user_friendly_name=username,
                chat_friendly_name=chat_name,  # -> ชื่อที่ใช้งานง่ายของช่องแชท
                target=conversation_id,  # -> ID ที่ระบุผู้ใช้แชทได้อย่างไม่ซ้ำกัน
                identity=conversation_id,  # -> ผู้ใช้ เช่น ID DM ของ Discord
        )
    channel_sid = channel.sid
\`\`\`

สุดท้าย เมื่อเรามีช่องแชทที่เปิดอยู่ระหว่างผู้ใช้ Discord และ Twilio เราสามารถส่งต่อข้อความขาเข้าไปยัง Twilio Studio flow ได้

\`\`\`python
message = twilio_client.chat \\
        .services(TWILIO_SERVICE_SID) \\
        .channels(channel_sid) \\
        .messages \\
        .create(
            body=message_text,
            from_=user_id,
            x_twilio_webhook_enabled='true',
            attributes=json.dumps(message_json)  # ส่งในส่วนหัวเป็นแอตทริบิวต์เพื่อให้เข้าถึงได้ในภายหลัง
        )
\`\`\`
ตอนนี้เรามีความสามารถในการส่งต่อข้อความขาเข้าทั้งหมดจากผู้ใช้ Discord ไปยัง Twilio Flex Flow ของเราโดยตรง ในส่วนของบอท Discord ตรวจสอบให้แน่ใจว่าข้อความโดยตรงทั้งหมดถูกส่งต่อไปยัง Twilio ตอนนี้คุณสามารถลองส่งข้อความโดยตรงไปยังบอท Discord และคุณควรจะเห็นข้อความนั้นปรากฏในบันทึก Twilio Studio Flow - แต่เรายังไม่เสร็จสิ้น!

## สร้างเซิร์ฟเวอร์ HTTP เพื่อรองรับการกำหนดเส้นทางที่ซับซ้อนยิ่งขึ้น

### Webhook ข้อความขาออก
ตอนนี้เรามีความคิดแล้วว่าข้อความขาเข้าของเราจะถูกกำหนดเส้นทางอย่างไร อย่างไรก็ตาม เรายังขาดอีกสองสามส่วน ประการแรก เรารู้ว่าตอนนี้เราสามารถส่งข้อความไปยัง Twilio ได้แล้ว แต่เราจะตอบกลับผู้ใช้ของเราบน Discord ได้อย่างไร? บอท Discord ของเราเป็นสิ่งเดียวที่ได้รับอนุญาตให้ส่งข้อความไปยังเซิร์ฟเวอร์และผู้ใช้ Discord ของเรา และ Twilio ก็ไม่รู้ว่าจะส่งข้อความของเรากลับไปยังเซิร์ฟเวอร์ Discord ได้อย่างไรอยู่ดี วิธีแก้ปัญหาคือ เราจำเป็นต้องตั้งค่า webhook ข้อความขาออกที่จะถูกเรียกใช้ทุกครั้งที่มีข้อความใหม่ในช่องแชท Twilio ภายใน webhook นั้น เราสามารถใช้บอท Discord ของเราเพื่อส่งต่อข้อความกลับไปยังเซิร์ฟเวอร์ของเราได้

ในการดำเนินการนี้ เราได้รวมบอท Discord ของเราเข้ากับเซิร์ฟเวอร์ HTTP ที่แข็งแกร่งยิ่งขึ้น เราใช้ [FastAPI](https://fastapi.tiangolo.com/) เพื่อตั้งค่าปลายทาง POST แบบง่ายๆ ซึ่งจะทำหน้าที่เป็น webhook ข้อความขาออกของเรา เมื่อเราตั้งค่าเซิร์ฟเวอร์และบอท Discord ของเราทำงานควบคู่กันแล้ว เราสามารถกำหนดปลายทาง POST ได้

ปลายทางนี้จะได้รับข้อความทุกข้อความที่เพิ่มลงในช่องแชท ดังนั้นขั้นแรกเราต้องการกรองทุกอย่างยกเว้นข้อความขาออกจาก SeaX ถัดไป เราจะต้องดึง ID ช่องที่ถูกต้องจากเนื้อหาข้อความเพื่อให้เรารู้ว่าจะส่งต่อข้อความไปที่ใด สุดท้าย เราสามารถใช้ไคลเอ็นต์ Discord เพื่อส่งต่อข้อความไปยังช่อง Discord ได้

\`\`\`python
@app.post("/forward-to-discord", status_code=200)
async def forward_discord_message(request: Request, response: Response) -> None:
    raw_body = await request.body()
    body = urllib.parse.parse_qs(raw_body.decode())

    # สนใจเฉพาะข้อความจาก SDK (Flex, อื่นๆ ทั้งหมดจะมาจาก API)
    if not body.get('Source') == ['SDK']:
        return

    # ข้อความจาก Flex ไม่มี conversationId ของข้อความต้นฉบับ
    # เราต้องการ convId เพื่อส่งข้อความกลับไปยังการสนทนาบน GBM
    # ดึงข้อความก่อนหน้าและแยก conversationId
    message = twilio_client.chat \\
            .services(TWILIO_SERVICE_SID) \\
            .channels(body.get("ChannelSid")[0]) \\
            .messages.list(limit=1)[0]

    attributes = json.loads(message.attributes)

    channel = discord_client.get_channel(attributes.get(“channel”, {}).get(“id”))
    if channel:
        await channel.send(body.get("Body", [""])[0].get(“text”))
    else:
        logger.error(f"ไม่พบช่อง Discord ที่มี ID: {get_channel_id(req)}!")
        response.status_code = 400
\`\`\`

สุดท้าย เพื่อให้ข้อความถูกส่งไปยังปลายทางของเรา เราจำเป็นต้องแจ้งให้ Twilio ทราบว่า webhook ใหม่ของเราคืออะไร แต่ละช่องแชทจำเป็นต้องมีการกำหนดค่า webhook ของตัวเอง ดังนั้น หากเราย้อนกลับไปยังจุดที่เราสร้างช่องแชทใหม่สำหรับผู้ใช้ในตอนแรก เราสามารถเพิ่มโค้ดเพิ่มเติมเพื่อกำหนดค่า webhook ได้:

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

### การรวมบอท

ดังนั้นตอนนี้ข้อความขาออกจาก SeaX ควรถูกกำหนดเส้นทางกลับไปยังเซิร์ฟเวอร์ Discord ของเราอย่างถูกต้อง แต่เรายังไม่ได้จัดการกับข้อความที่ส่งไปยังแชทบอท เราจำเป็นต้องตั้งค่าปลายทางสุดท้ายที่จะถูกเรียกใช้จาก Twilio Studio Flow และจะได้รับข้อความจากผู้ใช้ สอบถามบอท และส่งคืนการตอบกลับไปยัง Discord

\`\`\`python
@app.post("/chatbot-to-discord", status_code=200)
async def receive_discord_message(request: Request, response: Response):
    """รับคำขอ POST จาก Twilio สอบถามบอท และส่งคืนการตอบกลับไปยัง Discord"""
    req = await request.body()
    # แยกเนื้อหาข้อความต้นฉบับออกจากเนื้อหา twilio
    twilio_body, original_message_body = separate_original_message_body(req.decode())

    bot_response = await query_bot(original_message_body, bot_info)

    if bot_response:
        channel = discord_client.get_channel(original_message_body.get(“channel_id”))
        if channel:
            for item in bot_response:
                await channel.send(item.get(“text”))
\`\`\`

ตรวจสอบให้แน่ใจว่า Twilio Studio Flow มี webhook ที่ถูกต้องเพื่อกำหนดเส้นทางข้อความไปยังบอท ตอนนี้เราได้กำหนดเส้นทางข้อความเสร็จสิ้นแล้ว! เราสามารถดูมุมมองระดับบนสุดของการกำหนดเส้นทางข้อความทั้งหมดในแผนภาพนี้:

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-routing-diagram.jpg" alt="แผนภาพการกำหนดเส้นทางข้อความ"/>

*แผนภาพการกำหนดเส้นทางข้อความ*
</center>

# สรุป
สรุปแล้ว ในชุดบล็อกนี้ เราได้กล่าวถึงการเพิ่มขึ้นของความนิยมของ Discord และโอกาสที่นำเสนอสำหรับแบรนด์ในฐานะแพลตฟอร์มใหม่ในการมีส่วนร่วมกับลูกค้า เราได้อธิบายคุณสมบัติพื้นฐานบางอย่างของ Discord เพื่อแสดงให้เห็นว่าแบรนด์สามารถตั้งค่าชุมชนออนไลน์ของตนเองได้อย่างไร รวมถึงคุณสมบัติขั้นสูงเพิ่มเติมที่ช่วยให้แบรนด์สามารถทำให้การดูแลและการสนับสนุนลูกค้าบนเซิร์ฟเวอร์ของตนเป็นไปโดยอัตโนมัติด้วยบอท Discord สุดท้าย เราได้แบ่งปันการสาธิตของเราว่าเราได้รวม Discord เข้ากับแพลตฟอร์มบริการลูกค้าของเรา SeaX ได้อย่างไร เพื่อนำคุณสมบัติขั้นสูงมาสู่ชุมชน Discord เช่น การโอนตัวแทนสด การจัดการกรณี และการค้นหาฐานความรู้ที่ขับเคลื่อนด้วย AI
สำหรับการสาธิตส่วนตัว หรือเพื่อดูว่า Seasalt.ai สามารถช่วยตอบสนองความต้องการทางธุรกิจเฉพาะของคุณได้อย่างไร โปรดกรอกแบบฟอร์ม “[จองการสาธิต](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting)” ของเรา สำหรับข้อมูลเพิ่มเติมเกี่ยวกับการรวม Flex/Discord หรือเพื่อติดต่อเรา โปรดเยี่ยมชม [รายชื่อพันธมิตร Twilio ของ Seasalt.ai](https://showcase.twilio.com/partner-listing/a8E8Z000000PDCQUA4)
`;export{n as default};

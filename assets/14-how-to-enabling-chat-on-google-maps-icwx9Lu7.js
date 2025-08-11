const s=`---
title: "คู่มือฉบับสมบูรณ์สำหรับการเปิดใช้งานแชทบน Google Maps เพื่อเชื่อมต่อกับลูกค้า"
metatitle: "คู่มือฉบับสมบูรณ์สำหรับการเปิดใช้งานแชทบน Google Maps"
date: 2022-04-29 20:39:13-07:00
modified_date: 2025-07-28 00:00:00+00:00
draft: false
author: Ruli Setiawati
description: "ในบล็อกนี้ เราจะมาดูสามวิธีที่แตกต่างกันในการเปิดใช้งาน Google Maps Chat ด้วยสามวิธีที่แตกต่างกันนี้ เพื่อเชื่อมต่อกับลูกค้าได้ดียิ่งขึ้น"
tags:
  - NearMe
image: images/blog/14-ultimate-guide-to-enabling-chat-on-google-maps-to-connect-with-customers/ultimate_guide_thumbnail.png
canonicalURL: /blog/enable-chat-on-google-maps-to-connect-with-customers/
url: /blog/enable-chat-on-google-maps-to-connect-with-customers/
---

*Google Maps Chat เป็นวิธีที่ยอดเยี่ยมสำหรับธุรกิจในการเชื่อมต่อกับลูกค้า มีวิธีต่างๆ ในการเปิดใช้งาน Google Maps Chat: แบบแมนนวลด้วย Google Business Profile, แบบอัตโนมัติด้วย Google Business Messages และแบบที่รวมสิ่งที่ดีที่สุดของทั้งสองโลกเข้ากับ Near Me Messaging บล็อกนี้จะแนะนำคุณเกี่ยวกับวิธีเปิดใช้งาน Google Maps Chat ด้วยสามวิธีที่แตกต่างกันนี้*

<center>
<img src="/images/blog/14-ultimate-guide-to-enabling-chat-on-google-maps-to-connect-with-customers/comparison_table.jpg" alt="การเปรียบเทียบ 3 วิธีที่แตกต่างกันในการใช้งาน Google Maps Chat กับ Google Business Profile, Google Business Messages และ Near Me Messaging"/>

*การเปรียบเทียบ 3 วิธีที่แตกต่างกันในการใช้งาน Google Maps Chat กับ [Google Business Profile](https://www.google.com/intl/en_us/business/), [Google Business Messages](https://businessmessages.google/) และ Near Me Messaging.*
</center>

# สารบัญ
- [Google Maps Chat คืออะไร และทำไมคุณควรเปิดใช้งาน](#what-is-google-maps-chat-and-why-you-should-enable-it)
- [1. Google Maps Chat กับ Google Business Profile](#1-google-maps-chat-with-google-business-profile)
    - [คู่มือทีละขั้นตอนเพื่อเปิดใช้งาน Google Maps Chat กับ Google Business Profile](#step-1-sign-in-to-your-google-business-profile-account)
- [2. Google Maps Chat กับ Google Business Messages](#2-google-maps-chat-with-google-business-messages)
    - [ธุรกิจใช้งาน Google Business Messages อย่างไร](#how-businesses-implement-google-business-messages)
    - [อุปสรรคในการใช้งาน](#barriers-for-implementation)
- [3. Google Maps Chat กับ Near Me Messaging](#3-google-maps-chat-with-near-me-messaging)
    - [ประโยชน์ของ Near Me Messaging](#benefits-of-near-me-messaging)
    - [คู่มือทีละขั้นตอนเพื่อเปิดใช้งาน Google Maps Chat กับ Near Me Messaging](#step-by-step-guide-to-launching-your-virtual-agent-with-near-me-messaging)

# Google Maps Chat คืออะไร และทำไมคุณควรเปิดใช้งาน

เมื่อคุณกำลังเดินทางไปยังร้านค้า ยิม ตัวแทนจำหน่ายรถยนต์ หรือธุรกิจอื่นๆ โดยใช้แอป Google Maps คุณอาจสังเกตเห็นว่าบางแห่งมีปุ่มแชทฝังอยู่ ปุ่มแชทนี้ช่วยให้คุณในฐานะเจ้าของธุรกิจสามารถสื่อสารกับลูกค้าของคุณได้ ลูกค้าของคุณสามารถติดต่อคุณได้โดยตรงผ่านปุ่มแชทบน Google Maps หรือบน Google Search และคุณจะสามารถตอบกลับได้ทุกเมื่อที่คุณว่าง

<center>
<img src="/images/blog/14-ultimate-guide-to-enabling-chat-on-google-maps-to-connect-with-customers/chat_button.png" alt="รายชื่อธุรกิจที่มีคุณสมบัติแชทเปิดใช้งานบนโปรไฟล์ Google Maps"/>

*ลักษณะของฟีเจอร์แชทบนรายชื่อธุรกิจจากแอป Google Maps.*
</center>

ทำไมคุณสมบัตินี้จึงสำคัญสำหรับเจ้าของธุรกิจ? ประการแรก ธุรกิจของคุณจะโดดเด่นกว่าธุรกิจอื่นๆ เพราะคุณทำให้ลูกค้าเชื่อมต่อกับคุณได้ง่ายขึ้น อันที่จริง [72% ของลูกค้า](https://blog.avochato.com/index.php/2019/12/12/business-to-customer-communication-text-message-software) มีแนวโน้มที่จะซื้อสินค้าจากร้านค้าที่พวกเขาสามารถสอบถามเกี่ยวกับสินค้าผ่านการส่งข้อความแชทได้มากกว่า ประการที่สอง Google Maps ได้กลายเป็นข้อมูลท้องถิ่น 411 สำหรับผู้บริโภคเมื่อพวกเขากำลังค้นหาข้อมูลธุรกิจ ต้องขอบคุณข้อมูลธุรกิจที่รวบรวมไว้ทุกประเภท (เช่น เมนู การจอง สิ่งอำนวยความสะดวก จุดเด่น ตัวอย่าง รูปภาพ) Google Maps ได้กลายเป็น [ระบบปฏิบัติการใหม่สำหรับธุรกิจ](/blog/11-google-maps-replaces-google-my-business/) แล้ว


ตอนนี้ มีหลายวิธีในการเปิดใช้งาน Google Maps Chat: วิธีแมนนวลด้วย Google Business Profile, วิธีอัตโนมัติด้วย Google Business Messages และวิธีที่รวมสิ่งที่ดีที่สุดของทั้งสองโลกเข้ากับ Near Me Messaging เราจะแนะนำคุณเกี่ยวกับวิธีใช้ Google Maps Chat กับ Google Business Profile และ Google Business Messages พร้อมข้อดีและข้อเสีย สุดท้าย เราจะแนะนำคุณเกี่ยวกับการใช้ Google Maps Chat กับ Near Me Messaging

# 1. Google Maps Chat กับ Google Business Profile

Google Business Profile เป็นเครื่องมือที่ช่วยให้ธุรกิจสามารถสร้างโปรไฟล์ธุรกิจหรือรายชื่อธุรกิจฟรีที่จะปรากฏในบริการของ Google เช่น Google Search และ Google Maps คุณสามารถอ้างอิงแหล่งข้อมูลของ Google เกี่ยวกับ [วิธีเพิ่มหรือยืนยันโปรไฟล์ธุรกิจของคุณบน Google](https://support.google.com/business/answer/2911778?hl=th&co=GENIE.Platform%3DDesktop) ข้อดีของการมีรายชื่อ Google Business Profile ได้แก่:

- ดึงดูดลูกค้าและเพิ่มการมองเห็นผ่าน Google Search และ Google Maps
- ให้ข้อมูลล่าสุดเกี่ยวกับธุรกิจของคุณ เช่น เวลาทำการและคุณสมบัติ
- สร้างชื่อเสียงผ่านการให้คะแนนดาวและรีวิว
- รับข้อมูลเชิงลึกเกี่ยวกับประสิทธิภาพการค้นหาของคุณในบริการของ Google

ด้วย Google Business Profile คุณสามารถเปิดใช้งานคุณสมบัติแชทได้ในสามขั้นตอนง่ายๆ เหล่านี้:

## ขั้นตอนที่ 1. ลงชื่อเข้าใช้บัญชี Google Business Profile ของคุณ

เยี่ยมชม [หน้าแรกของ Google Business Profile](https://www.google.com/business/) และลงชื่อเข้าใช้รายชื่อธุรกิจของคุณ

<center>
<img src="/images/blog/9-enable-chat-on-Google-Maps/GBP_manager_interface.png" alt="หน้า Google Business Profile เมื่อเจ้าของธุรกิจลงชื่อเข้าใช้แล้ว"/>

*หน้า Google Business Profile เมื่อเจ้าของธุรกิจลงชื่อเข้าใช้แล้ว*
</center>

## ขั้นตอนที่ 2. ไปที่แท็บข้อความ

ขั้นตอนต่อไปคือการคลิกแท็บ *"ข้อความ"* ที่ด้านซ้ายของหน้า

<center>
<img src="/images/blog/9-enable-chat-on-google-maps/messages_tab.png" alt="อินเทอร์เฟซของแท็บข้อความบน Google Business Profile"/>

*อินเทอร์เฟซของแท็บข้อความ*
</center>

## ขั้นตอนที่ 3. เปิดใช้งานคุณสมบัติ ‘แชท’ ในรายชื่อของคุณ

คลิกปุ่ม *"เปิดแชท"* ดังที่แสดงด้านล่าง

<center>
<img src="/images/blog/9-enable-chat-on-Google-Maps/turn_on_chat.png" alt= "การคลิกปุ่มเปิดแชทจะเปิดใช้งานคุณสมบัติแชท"/>

*คลิกปุ่มเปิดแชทเพื่อเปิดใช้งานคุณสมบัติแชท*
</center>

ทันทีที่คุณคลิกปุ่ม *"เปิดแชท"* จะมีป๊อปอัปปรากฏขึ้นเพื่อแจ้งให้คุณทราบว่าแชทของคุณเปิดใช้งานแล้ว Google จะส่งการแจ้งเตือนทางอีเมลเกี่ยวกับคุณสมบัติแชทที่เปิดใช้งานใหม่ของคุณด้วย

<center>
<img src="/images/blog/9-enable-chat-on-Google-Maps/chat_activated.png"/>

*หน้าป๊อปอัปแจ้งเจ้าของธุรกิจว่าคุณสมบัติแชทเปิดใช้งานแล้ว*
</center>


<center>
<img src="/images/blog/9-enable-chat-on-Google-Maps/email_notifications.png" alt="การแจ้งเตือนทางอีเมลจาก Google เกี่ยวกับคุณสมบัติแชทที่เปิดใช้งานใหม่บน Google Maps"/>

*การแจ้งเตือนทางอีเมลจาก Google เกี่ยวกับคุณสมบัติ “แชท” ที่เปิดใช้งานใหม่*
</center>

## การตอบกลับข้อความของลูกค้า

เมื่อคุณเปิดใช้งานบริการ Google Business Profile Messaging คุณจะเห็นปุ่มแชทในรายชื่อของคุณ และลูกค้าจะสามารถติดต่อธุรกิจของคุณเพื่อสอบถามข้อมูลใดๆ ที่อาจมี โปรดทราบว่าเมื่อคุณใช้คุณสมบัตินี้ คุณต้องแน่ใจว่าคุณจะพร้อมตอบกลับข้อซักถาม ลูกค้าสามารถดูเวลาตอบกลับโดยเฉลี่ยของคุณ และอาจไม่ต้องการติดต่อคุณหากเห็นเวลาตอบกลับที่นานขึ้น สิ่งสำคัญคือคุณต้องตอบกลับข้อความของลูกค้าภายใน 24 ชั่วโมง ตามหน้าคำถามที่พบบ่อยของ [Google Business Profile](https://support.google.com/business/answer/9114771?hl=th&co=GENIE.Platform%3DAndroid#zippy=%2Chow-do-i-keep-the-chat-button-active-on-google) Google อาจลบปุ่ม "แชท" ในรายชื่อของคุณ หากคุณไม่ตอบกลับภายในหนึ่งวัน

<center>
<img src="/images/blog/9-enable-chat-on-Google-Maps/response_time.png" alt="เวลาตอบกลับจะแสดงบนคุณสมบัติแชทบน Google Maps เมื่อลูกค้ากำลังจะพิมพ์คำถาม"/>

*เวลาตอบกลับจะแสดงบนคุณสมบัติแชทบน Google Maps 
เมื่อลูกค้ากำลังจะพิมพ์คำถาม*
</center>

เมื่อคุณทราบแล้วว่า Google Maps Chat ทำงานอย่างไรกับ Google Business Profile คุณจะแน่ใจได้อย่างไรว่าธุรกิจของคุณสามารถรับมือกับจำนวนคำถามของลูกค้าที่เพิ่มขึ้นได้? เมื่อลูกค้าติดต่อคุณทางแชทมากขึ้น คุณอาจไม่มีเวลาและทรัพยากรเพียงพอที่จะตอบกลับทุกแชท โดยเฉพาะอย่างยิ่งในช่วงเวลาปิดทำการ นอกจากนี้ คำถามส่วนใหญ่ยังเป็นคำถามซ้ำๆ ในขณะเดียวกัน ลูกค้าก็คาดหวังคำตอบทันทีจากธุรกิจ หากธุรกิจไม่ตอบสนองความต้องการของลูกค้า พวกเขาก็เสี่ยงที่จะสูญเสียลูกค้าปัจจุบันและลูกค้าเป้าหมาย

<center>
<img src="/images/blog/10-use-Google-Business-Messages-to-engage-with-customers-off-hours/1-stats.png" alt="ผู้บริโภคหงุดหงิดที่คำถามไม่ได้รับคำตอบและต้องรอสายนานเกินไป"/>

*อะไรคือแรงขับเคลื่อนอนาคตของการส่งข้อความในสหรัฐอเมริกา? ([ที่มา](https://developers.google.com/business-communications/business-messages/files/us-business-messages-infographic.pdf))*
</center>


<center>
<img src="/images/blog/10-use-Google-Business-Messages-to-engage-with-customers-off-hours/2-one_star.png" alt="การให้คะแนน 1 ดาวโดยลูกค้าที่ไม่พอใจบน Google Maps เนื่องจากเจ้าของธุรกิจขาดการสื่อสาร"/>

*การให้คะแนน 1 ดาวโดยลูกค้าที่ไม่พอใจเนื่องจากเจ้าของธุรกิจขาดการสื่อสาร*
</center>


นั่นคือเหตุผลที่เราต้องการแนะนำให้คุณรู้จักกับวิธีที่สอง ซึ่งเป็นวิธีอัตโนมัติในการใช้ Google Maps chat กับ Google Business Messages


# 2. Google Maps Chat กับ Google Business Messages

[Google Business Messages](https://businessmessages.google/) เป็นประสบการณ์การสนทนารุ่นใหม่ที่ช่วยแก้ปัญหาการให้คำตอบแบบเรียลไทม์แก่ลูกค้าของคุณเมื่อไม่มีมนุษย์ให้บริการ ในขณะที่ Google Business Profile ช่วยให้เจ้าของธุรกิจสามารถแชทโดยตรงกับลูกค้าผ่านปุ่มแชทบน Google Maps แต่ Google Business Messages ก้าวไปอีกขั้นด้วยการเปิดใช้งานการรวมเข้ากับตัวแทนเสมือน ตาม [chatbots.org](https://www.google.com/url?q=https://www.chatbots.org/virtual_agent/&sa=D&source=docs&ust=1648605707733291&usg=AOvVaw1v4dJFgDD-5SmpSNZBu3J6) ตัวแทนเสมือนคือ "ตัวละครเสมือนจริงที่สร้างโดยคอมพิวเตอร์ มีชีวิตชีวา และใช้ปัญญาประดิษฐ์ (มักมีรูปร่างเหมือนมนุษย์) ซึ่งทำหน้าที่เป็นตัวแทนบริการลูกค้าออนไลน์"


<center>
<img src="/images/blog/10-use-Google-Business-Messages-to-engage-with-customers-off-hours/3-stats.png" alt="ผู้บริหารธุรกิจเชื่อว่า Google Business Messages จะช่วยปรับปรุงการโต้ตอบกับลูกค้า"/>

*ทำให้เป็นส่วนตัว: เครื่องมือสื่อสารอัจฉริยะขับเคลื่อนผลลัพธ์ทางธุรกิจได้อย่างไร ([ที่มา](https://services.google.com/fh/files/misc/how_smart_communication_tools_drive_business_results.pdf))*
</center>


ตัวแทนเสมือนมักถูกเรียกว่าผู้ช่วยดิจิทัล ตัวแทนเสมือนใช้เทคโนโลยีที่เรียกว่า Natural Language Processing (NLP) เพื่อให้คำตอบอัตโนมัติ ตัวแทนเสมือนสามารถเป็นประโยชน์ต่อธุรกิจของคุณโดยการลดเวลาตอบกลับ ให้บริการตลอด 24 ชั่วโมงทุกวัน และปรับปรุงประสบการณ์ของลูกค้า นี่คือวิธีที่ Google Business Messages สามารถช่วยให้คุณให้คำตอบอัตโนมัติคุณภาพสูงแก่ลูกค้าของคุณได้

ประโยชน์เพิ่มเติมของ Google Business Messages ได้แก่:
- ให้คำตอบทันทีสำหรับคำถามของลูกค้า
- ประหยัดเวลาและเงินในการให้บริการลูกค้าที่เป็นเลิศ
- สร้างความไว้วางใจกับลูกค้าของคุณ

<center>
<img src="/images/blog/10-use-Google-Business-Messages-to-engage-with-customers-off-hours/4-GBM_bridgepoint_runners.png" alt="Google Business Messages รวมตัวแทนเสมือนเข้ากับปุ่มแชทบน Google Maps โดยตรง"/>

*Google Business Messages รวมตัวแทนเสมือนเข้ากับปุ่มแชทของคุณโดยตรง*
</center>


## ธุรกิจใช้งาน Google Business Messages อย่างไร

เพื่อให้เข้าใจได้ดีขึ้นว่า Google Business Messages สามารถช่วยธุรกิจของคุณได้อย่างไร ลองดูตัวอย่างจาก Walmart, Levi's และ Albertsons Companies

### 1. Walmart

Walmart เป็นหนึ่งในบริษัทแรกๆ ที่นำ Business Messages มาใช้ ([บล็อกของ Google](https://blog.google/products/maps/now-sending-business-messages-google-maps-and-search/)) ด้วย Google Business Messages Walmart ให้ข้อมูลล่าสุดเกี่ยวกับเวลาทำการของร้านค้า ผลิตภัณฑ์ วัคซีนและการทดสอบ COVID-19 ตัวเลือกการรับและจัดส่ง นโยบายการคืนสินค้า และอื่นๆ ลูกค้าสามารถรับคำตอบได้ทันทีตลอดเวลา

<center>
<img src="/images/blog/10-use-Google-Business-Messages-to-engage-with-customers-off-hours/5-walmart_chat.png" alt="ลูกค้าสามารถติดต่อ Walmart ผ่านปุ่มแชทบน Google Maps (เฉพาะมือถือ)"/>

*ลูกค้าสามารถติดต่อ Walmart ผ่านปุ่มแชทบน Google Maps (เฉพาะมือถือ)*
</center>


<center>
<img src="/images/blog/10-use-Google-Business-Messages-to-engage-with-customers-off-hours/6-walmart_va.png" alt="ลูกค้าสามารถสอบถามตัวแทนเสมือนของ Walmart เกี่ยวกับเวลาทำการของร้านค้า ผลิตภัณฑ์ นโยบายหน้ากากอนามัย วัคซีน COVID-19 และอื่นๆ"/>

*ลูกค้าสามารถสอบถามเกี่ยวกับเวลาทำการของร้านค้า ผลิตภัณฑ์ นโยบายหน้ากากอนามัย วัคซีน COVID-19 และอื่นๆ*
</center>

### 2. Levi's


Levi's เป็นบริษัทเสื้อผ้าที่รู้จักกันดีในเรื่องกางเกงยีนส์ Levi's โดยมีร้านค้าปลีก 3,100 แห่งใน 110 ประเทศ ในช่วงการระบาดใหญ่ Levi's สังเกตเห็นว่าผู้ซื้อใช้เวลาจำนวนมากในการวิจัยก่อนการซื้อ และเวลาทำการของร้านค้าสามารถเปลี่ยนแปลงได้บ่อยขึ้น Levi's ต้องการเปลี่ยนผู้ซื้อให้เป็นลูกค้าจริงและให้คำตอบที่รวดเร็วสำหรับคำถามของผู้ซื้อ

ในเดือนมิถุนายน 2020 Levi's ได้นำ Google Business Messages มาใช้โดยมีเป้าหมายเพื่อปรับปรุงประสบการณ์ของลูกค้าโดยการให้ข้อมูลล่าสุดเกี่ยวกับร้านค้าและผลิตภัณฑ์ Levi's ใช้ประโยชน์จากความสามารถของ Google Business Messages ในการช่วยเหลือลูกค้าได้ตลอดเวลา และส่งผลให้สามารถบรรลุคะแนนความพึงพอใจของลูกค้า (CSAT) 85% Levi's ยังพบว่ามีคำถามที่เกี่ยวข้องกับร้านค้าที่ได้รับการแก้ไขเพิ่มขึ้น 30 เท่า เรียนรู้เพิ่มเติมเกี่ยวกับวิธีที่ Levi's นำ Google Business Messages มาใช้ [ที่นี่](https://developers.google.com/business-communications/business-messages/files/levis-case-study.pdf)

<center>
<img src="/images/blog/10-use-Google-Business-Messages-to-engage-with-customers-off-hours/7-levi_chat.png" alt="ลูกค้าสามารถติดต่อ Levi’s ผ่านปุ่มแชทบน Google Maps (เฉพาะมือถือ)"/>

*ลูกค้าสามารถติดต่อ Levi’s ผ่านปุ่มแชท (เฉพาะมือถือ)*
</center>


<center>
<img src="/images/blog/10-use-Google-Business-Messages-to-engage-with-customers-off-hours/8-levi_va.png" alt="ลูกค้าสามารถดูผลิตภัณฑ์ของ Levi’s เมื่อโต้ตอบกับตัวแทนเสมือนของ Levi’s บน Google Maps"/>

*ลูกค้าสามารถดูผลิตภัณฑ์ของ Levi’s เมื่อโต้ตอบกับตัวแทนเสมือนของ Levi’s*
</center>


### 3. Albertsons Companies

Albertsons Co. เป็นเจ้าของร้านขายยาหลายแห่งทั่วสหรัฐอเมริกา รวมถึง Safeway, Jewel-Osco, Vons, Albertsons, Shaw’s และอื่นๆ ในช่วงปลายปี 2020 ระหว่างการเปิดตัววัคซีน COVID-19 ครั้งแรก มีการค้นหาวัคซีนทางออนไลน์เพิ่มขึ้น มีคำถามเพิ่มเติมเกี่ยวกับคุณสมบัติในการรับวัคซีน การนัดหมาย และสถานที่ที่ผู้คนสามารถรับวัคซีนได้ Albertsons Co. ตัดสินใจเปิดใช้งาน Google Business Messages เพื่อให้ข้อมูลล่าสุดเกี่ยวกับเกณฑ์คุณสมบัติ การนัดหมาย ความพร้อมใช้งาน และอื่นๆ ส่งผลให้พวกเขาสามารถลดจำนวนสายเรียกเข้า ป้องกันข้อมูลที่ผิดพลาดที่อาจเกิดขึ้น และช่วยเหลือลูกค้าได้ตลอด 24 ชั่วโมงทุกวัน

<center>
<img src="/images/blog/10-use-Google-Business-Messages-to-engage-with-customers-off-hours/9-albertsons_chat.png" alt="ลูกค้าสามารถรับข้อมูลเกี่ยวกับคุณสมบัติในการรับวัคซีนและจองนัดหมายได้โดยตรงจากตัวแทนเสมือนของ Albertsons Co."/>

*ลูกค้าสามารถรับข้อมูลเกี่ยวกับคุณสมบัติในการรับวัคซีนและจองนัดหมายได้*
</center>

Google Business Messages เป็นวิธีที่ยอดเยี่ยมในการประหยัดเวลาและเงินในการตอบคำถามซ้ำๆ สร้างความสัมพันธ์กับลูกค้า และปรับปรุงประสบการณ์ของลูกค้าโดยรวม


## อุปสรรคในการใช้งาน

มีข้อจำกัดหลักสองประการในการใช้งาน Google Business Messages ทั่วไปดังที่เห็นด้านบน

ประการแรก [การสร้างและบำรุงรักษาตัวแทนเสมือนที่ยอดเยี่ยมไม่ใช่เรื่องง่าย](https://developers.google.com/business-communications/business-messages/guides/how-it-works) ต้องใช้ความรู้ขั้นสูงเกี่ยวกับ AI การสนทนาและเวลาในการพัฒนาที่สำคัญ ธุรกิจที่ใช้ Google Business Messages จำเป็นต้องจ่ายเงินให้บริษัทที่ปรึกษามืออาชีพเพื่อสร้างประสบการณ์ที่ปรับแต่งได้อย่างสมบูรณ์ตั้งแต่เริ่มต้น ซึ่งโดยปกติจะมีราคาแพงและอาจใช้เวลาหลายเดือน องค์กรขนาดใหญ่ เช่น Levi's, Walmart และ Albertsons Companies เป็นผู้ที่สามารถจ่ายค่าบริการพิเศษดังกล่าวได้ บริษัทที่ปรึกษามักจะควบคุมการพัฒนาและบำรุงรักษาผลิตภัณฑ์อย่างเต็มที่ หากคุณต้องทำการเปลี่ยนแปลง คุณต้องผ่านบริษัทและสิ่งนี้ต้องใช้เวลาเพิ่มเติม

ประการที่สอง Google Business Messages เป็นการแทนที่ความสามารถในการส่งข้อความที่สร้างขึ้นใน Google Business Profile ในฐานะเจ้าของธุรกิจ คุณสามารถเปิดใช้งานปุ่มแชทบน Google Business Profiles และตอบกลับได้ทุกเมื่อที่คุณว่าง อย่างไรก็ตาม เมื่อคุณใช้งาน Google Business Messages ข้อความขาเข้าของคุณจะถูกส่งไปยังตัวแทนสดของคุณ และคุณจะสูญเสียความสามารถในการแชทโดยตรงกับลูกค้าภายใน Google Business Profile หรือใช้แอป Google My Business

<center>
<img src="/images/blog/10-use-Google-Business-Messages-to-engage-with-customers-off-hours/10-live_agent.png" alt="โซลูชันแชทสดช่วยให้เจ้าของธุรกิจสามารถพูดคุยกับลูกค้าได้โดยตรง"/>

*หากเปิดใช้งานโซลูชันแชทสด ลูกค้าจะสามารถคลิก “ส่งข้อความถึงตัวแทนสด” เพื่อพูดคุยกับเจ้าของธุรกิจได้โดยตรง*
</center>


หากคุณยังต้องการพูดคุยโดยตรงกับลูกค้าในขณะที่ใช้ Google Business Messages คุณต้อง [ขอให้บริษัทที่ปรึกษา](https://developers.google.com/business-communications/business-messages/partners) จัดหาโซลูชันแชทสด หากเปิดใช้งานคุณสมบัตินี้ ลูกค้าสามารถคลิกปุ่ม “ส่งข้อความถึงตัวแทนสด” จากนั้นคุณจะสามารถเข้าร่วมการสนทนาและแชทกับลูกค้าได้ จากฝั่งตัวแทนสด การสนทนาจะเกิดขึ้นบนแพลตฟอร์มใดก็ตามที่บริษัทที่ปรึกษาเลือกที่จะรวมเข้าด้วยกัน ซึ่งอาจเป็นข้อความ, WhatsApp, Messenger, ซอฟต์แวร์บริการลูกค้าที่มีอยู่ เช่น Zendesk หรือเว็บไซต์หรือแอปโทรศัพท์ที่สร้างขึ้นเอง

ตอนนี้คุณอาจสงสัยว่ามีวิธีแก้ปัญหาเพื่อเอาชนะอุปสรรคเหล่านี้ แต่ยังคงได้รับประโยชน์จาก Google Business Messages หรือไม่ นั่นคือเหตุผลที่เราต้องการแสดงโซลูชันล่าสุดของเรา Near Me Messaging และวิธีที่คุณสามารถใช้ Google Maps chat ให้เกิดประโยชน์สูงสุดด้วย!

# 3. Google Maps Chat กับ Near Me Messaging

Near Me Messaging ผสานรวม AI การสนทนาที่ล้ำสมัยเข้ากับ Google Business Messages ทำให้ลูกค้าสามารถติดต่อธุรกิจของคุณได้ตลอดเวลาผ่านปุ่มแชทบนโปรไฟล์ Google Maps ของคุณ ด้วยวิธีนี้ คุณสามารถมุ่งเน้นไปที่การดูแลธุรกิจของคุณในขณะที่ Near Me Messaging จัดการคำถามของลูกค้า สิ่งที่ทำให้ Near Me Messaging แตกต่างจากบริการที่คล้ายกันคือเวลาในการตั้งค่า 5 นาที การปรับแต่งด้วยตนเอง และการสนับสนุนแชทสดในตัว

<center>
<img height="550" src="/images/blog/12-near-me-messaging-complements-google-business-messages/1-GBM-chat-button.png" alt="Near Me Messaging ผสานรวม Google Business Messages เข้ากับปุ่มแชทบนโปรไฟล์ Google Maps ของคุณ"/>

*Near Me Messaging ผสานรวม Google Business Messages เข้ากับปุ่มแชทบนโปรไฟล์ Google Maps ของคุณ*
</center>

ประการแรก เมื่อธุรกิจรวม Google Business Messages พวกเขาจำเป็นต้องจ่ายเงินให้บริษัทที่ปรึกษามืออาชีพเพื่อสร้างประสบการณ์ที่ปรับแต่งได้อย่างสมบูรณ์ตั้งแต่เริ่มต้น ซึ่งโดยปกติจะมีราคาแพงและใช้เวลา เราเข้าใจว่าการลงทุนเวลาและทรัพยากรทั่วไปเพื่อใช้ประโยชน์จาก Google Business Messages เป็นอุปสรรคต่อธุรกิจขนาดเล็กจำนวนมาก Near Me Messaging แก้ไขข้อจำกัดนี้โดยการจัดหาโซลูชันราคาไม่แพงสำหรับ SMEs คุณสามารถมีตัวแทนเสมือนที่ทำงานได้ภายในเวลาไม่ถึง 5 นาที นอกจากนี้ คุณสามารถอัปเดตและปรับแต่งตัวแทนเสมือนของคุณได้อย่างต่อเนื่องทุกเมื่อจากเว็บไซต์ Near Me Messaging การเปลี่ยนแปลงที่คุณทำบนเว็บไซต์ Near Me Messaging จะมีผลทันทีสำหรับลูกค้าที่โต้ตอบกับตัวแทนของคุณ

นอกจากนั้น เมื่อคุณเปิดใช้งานปุ่มแชทบน Google Business Profile คุณสามารถตอบกลับลูกค้าได้ทุกเมื่อที่คุณว่าง แต่เมื่อคุณรวม Google Business Messages ข้อความขาเข้าของคุณจะถูกส่งไปยังตัวแทนสดของคุณ และคุณจะสูญเสียความสามารถในการแชทโดยตรงกับลูกค้าภายใน Google Business Profile หรือใช้แอป Google My Business Near Me Messaging แก้ไขข้อจำกัดนี้โดยการจัดหาคุณสมบัติตัวแทนสดโดยไม่มีค่าใช้จ่ายเพิ่มเติมหรือเวลาในการตั้งค่า ด้วยคุณสมบัติตัวแทนสด ลูกค้าสามารถขอให้โอนไปยังบุคคลจริงได้ตลอดเวลา เมื่อคุณเห็นคำขอตัวแทนสด หรือหากคุณต้องการเข้าควบคุมตัวแทนเสมือน คุณสามารถเข้าร่วมการสนทนาและพูดคุยโดยตรงกับลูกค้าของคุณได้ จากฝั่งตัวแทนสด การสนทนาจะเกิดขึ้นบนแพลตฟอร์มใดก็ตามที่บริษัทที่ปรึกษาเลือกที่จะรวมเข้าด้วยกัน ซึ่งอาจเป็นข้อความ, WhatsApp, Messenger, ซอฟต์แวร์บริการลูกค้าที่มีอยู่ เช่น Zendesk หรือเว็บไซต์หรือแอปโทรศัพท์ที่สร้างขึ้นเอง

เมื่อคุณทราบวิธีการต่างๆ ในการใช้งาน Google Maps Chat แล้ว คุณต้องการทราบข้อมูลเพิ่มเติมเกี่ยวกับวิธีใช้คุณสมบัติแชทของคุณให้เกิดประโยชน์สูงสุดหรือไม่?

เราได้สร้าง [กลุ่ม Facebook สำหรับเจ้าของธุรกิจเพื่อแบ่งปันและหารือเกี่ยวกับวิธีเพิ่มประสิทธิภาพ Google Maps Chat ของคุณ](https://www.facebook.com/groups/513092883608553) เจ้าของธุรกิจสามารถถามคำถามกัน แบ่งปันข้อมูล และรับการแจ้งเตือนเกี่ยวกับกิจกรรมหรือการสัมมนาผ่านเว็บล่าสุดเกี่ยวกับการเพิ่มประสิทธิภาพ Google Maps Chat เข้าร่วมตอนนี้เพื่อใช้ประโยชน์จากโอกาสนี้อย่างเต็มที่!
`;export{s as default};

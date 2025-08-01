---
title: "SeaX Bulk SMS: เพื่อการเข้าถึงลูกค้าที่รวดเร็วและมีประสิทธิภาพยิ่งขึ้น"
date: 2022-09-09T11:05:22-07:00
draft: false
author: Amy Chen, Kim Dodds, Sarah Reid
image: images/blog/24-seax-bulk-sms/thumbnail.png
description: "ในบล็อกนี้ เราจะแสดงให้เห็นว่าฟีเจอร์ Bulk SMS ของ SeaX ช่วยให้ตัวแทนสามารถส่งข้อความขาออกผ่านข้อความได้อย่างไร"
weight: 1
tags: ["SeaX"]
canonicalURL: "/blog/seax-bulk-sms/"
url: "/blog/seax-bulk-sms/"
---

*ในบล็อกโพสต์ก่อนหน้านี้ เราได้กล่าวถึงคุณสมบัติหลักบางประการของ SeaX (รวมถึง [Voice Intelligence](https://seasalt.ai/blog/21-seax-voice-intelligence/), [Knowledge Base](https://seasalt.ai/blog/22-seax-knowledge-base/) และ [Case Management](https://seasalt.ai/blog/23-seax-case-management/)) ที่ช่วยให้ตัวแทนจัดการสายเรียกเข้าและข้อความได้ดีขึ้น ในบล็อกนี้ เราจะแสดงให้เห็นว่าฟีเจอร์ Bulk SMS ของ SeaX ช่วยให้ตัวแทนสามารถส่งข้อความขาออกผ่านข้อความได้อย่างไร ซึ่งผู้รับจะเปิดอ่านได้เร็วกว่าและสม่ำเสมอมากกว่าการสื่อสารทางอีเมลแบบดั้งเดิม*

# สารบัญ
- [SMS vs อีเมล](#sms-vs-email)
- [มาตรฐาน 10DLC](#10dlc-standards)
- [SeaX Bulk SMS](#seax-bulk-sms)
    - [การอัปโหลดผู้ติดต่อ](#contact-upload)
    - [การเขียนข้อความ](#message-composition)
    - [ประมาณการค่าใช้จ่าย](#cost-estimate)
    - [ตัวอย่างข้อความจำนวนมาก](#bulk-message-preview)
    - [การติดตามความคืบหน้าของแคมเปญ](#campaign-progress-monitoring)
    - [แชทข้อความขาเข้า](#incoming-message-chat)
- [สรุป](#closing)

# SMS vs อีเมล

อีเมลมีแนวโน้มที่จะเป็นโหมดการสื่อสารหลักสำหรับการดำเนินธุรกิจส่วนใหญ่ จนกระทั่งเมื่อไม่นานมานี้ การส่งข้อความ (SMS) ไม่ใช่ช่องทางการสื่อสารที่ใช้กันอย่างแพร่หลายสำหรับการส่งข้อความธุรกิจจำนวนมาก แม้ว่าจะได้รับความนิยมสำหรับการสื่อสารระหว่างบุคคลในชีวิตประจำวันก็ตาม อย่างไรก็ตาม ในช่วงไม่กี่ปีที่ผ่านมา ผู้ให้บริการการสื่อสารบนคลาวด์ เช่น Twilio ได้ทำให้ช่องทาง SMS เข้าถึงธุรกิจได้ง่ายขึ้นมาก โดยจัดการโครงสร้างพื้นฐานโทรคมนาคมและผู้ให้บริการในส่วนหลังบ้าน และให้บริการ SMS API ที่เรียบง่ายแก่ลูกค้า แม้ว่าอีเมลอาจยังคงเป็นช่องทางที่ได้รับความนิยมมากที่สุดสำหรับธุรกิจ แต่ SMS สามารถเป็นส่วนเสริมที่ไม่เหมือนใครสำหรับการสื่อสารทางอีเมลแบบดั้งเดิม

<center>
<img src="/images/blog/24-seax-bulk-sms/1-pros-cons.png" alt="ข้อดีและข้อเสียบางประการของ SMS สำหรับการสื่อสารทางธุรกิจ"/>

*ข้อดีและข้อเสียบางประการของ SMS สำหรับการสื่อสารทางธุรกิจ*
</center>

แต่ทำไมต้องใช้ SMS เลยถ้าอีเมลพิสูจน์แล้วว่าประสบความสำเร็จ? หากเรายกตัวอย่างแคมเปญการตลาด คำตอบสั้นๆ คือ: ในขณะที่อัตราการเปิดอีเมลแคมเปญอยู่ที่เพียง 20% แต่อัตราการเปิด SMS โดยเฉลี่ยสามารถสูงถึง *98%* - ไม่ต้องพูดถึงว่าข้อความมักจะได้รับการตอบกลับมากกว่า นอกจากนี้ ข้อความมักจะถูกเปิดภายใน 90 วินาทีหลังจากได้รับ ในขณะที่อีเมลมักจะถูกเปิดประมาณ 90 นาทีหลังจากได้รับ สุดท้ายแต่ไม่ท้ายสุด SMS มีอัตราการคลิกผ่านโดยเฉลี่ยประมาณ 19% ซึ่งสูงกว่า 3.2% สำหรับอีเมลอย่างมีนัยสำคัญ ([แหล่งที่มา](https://manychat.com/blog/sms-vs-email-marketing-2021/))

โดยทั่วไป ข้อความจะถูกเปิดเร็วกว่าและบ่อยกว่าอีเมล อาจเป็นเพราะข้อความจะถูกส่งตรงถึงผู้รับเสมอไม่ว่าจะอยู่ที่ใด มี Wi-Fi หรือไม่ก็ตาม นอกจากนี้ เนื่องจาก SMS มักใช้สำหรับข้อความส่วนตัว และไม่ค่อยใช้สำหรับการสื่อสารทางธุรกิจ ผู้รับอาจมองว่าข้อความเป็นสิ่งสำคัญหรือมีสาระมากกว่าอีเมล

แล้วทำไมทุกคนถึงไม่ใช้ SMS ล่ะ? แน่นอนว่ามีทั้งข้อดีและข้อเสีย SMS มีราคาแพงกว่าอีเมลอย่างมาก เนื่องจากต้องพึ่งพาโครงสร้างพื้นฐานโทรคมนาคมและผู้ให้บริการ (เช่น Verizon, AT&T ฯลฯ) ในการส่งข้อความ นอกจากนี้ ข้อความยังมีข้อจำกัดที่ 900 ตัวอักษรและไฟล์แนบเดียว (ซึ่งมีค่าใช้จ่ายเพิ่มเติมแน่นอน) ดังนั้น โดยรวมแล้ว แม้ว่า SMS อาจเป็นวิธีการสื่อสารที่มีประสิทธิภาพมากกว่าอย่างมาก แต่ข้อแลกเปลี่ยนคือธุรกิจต้องเลือกเนื้อหาที่จะส่งอย่างรอบคอบเพื่อให้แน่ใจว่าคุ้มค่า

อย่างไรก็ตาม ไม่มีเหตุผลใดที่ SMS และอีเมลไม่ควรใช้ร่วมกัน! แต่ละช่องทางมีข้อดีและข้อเสียของตัวเอง ดังนั้นธุรกิจจึงสามารถมั่นใจได้ว่าพวกเขากำลังส่งการสื่อสารที่มีประสิทธิภาพสูงสุดโดยใช้ประโยชน์จากจุดแข็งของแต่ละช่องทาง

# มาตรฐาน 10DLC

สำหรับการส่งข้อความ SMS แบบ A2P (application-to-person) ที่มีปริมาณมาก ผู้ให้บริการในสหรัฐอเมริกาใช้รหัสยาว 10 หลักมาตรฐาน หรือ 10DLC ก่อนเริ่มแคมเปญ SMS จำนวนมาก เราขอแนะนำให้คุณอ่านเพิ่มเติมเกี่ยวกับ 10DLC และการใช้งาน [ที่นี่](https://support.twilio.com/hc/en-us/articles/1260800720410-What-is-A2P-10DLC-)

# SeaX Bulk SMS

บริการ Bulk SMS ของ SeaX ช่วยให้คุณสามารถอัปโหลดผู้ติดต่อ/ลูกค้าเป้าหมายของคุณได้อย่างง่ายดาย ส่ง SMS (เรารองรับ MMS - Multimedia Messages ด้วย) เป็นจำนวนมาก และจัดการการตอบกลับที่เข้ามา อ่านต่อเพื่อดูขั้นตอนง่ายๆ ไม่กี่ขั้นตอนในการเริ่มต้นแคมเปญ SMS จำนวนมากครั้งแรกของคุณ

## การอัปโหลดผู้ติดต่อ

<center>
<img src="/images/blog/24-seax-bulk-sms/2-contact-upload.png" alt="การอัปโหลดรายชื่อผู้ติดต่อไปยัง SeaX Bulk SMS"/>

*การอัปโหลดรายชื่อผู้ติดต่อไปยัง SeaX Bulk SMS*
</center>

ขั้นตอนแรกคือการอัปโหลดผู้ติดต่อและลูกค้าเป้าหมาย ก่อนอื่น ให้จัดระเบียบผู้ติดต่อสำหรับแคมเปญ SMS ของคุณในไฟล์ csv นอกเหนือจากฟิลด์ที่จำเป็น `phone_number` และ `name` คุณอาจเพิ่มฟิลด์อื่น ๆ และใช้ในเนื้อหาข้อความได้ ตัวอย่างเช่น คุณสามารถเปลี่ยนเนื้อหาข้อความแบบไดนามิกเพื่อรวมชื่อผู้รับตามฟิลด์ `name` สำหรับผู้ติดต่อแต่ละราย

ถัดไป เพียงเปิดบริการ Bulk SMS ภายใต้ SeaX แล้วกด “Import” เพื่ออัปโหลดผู้ติดต่อของคุณ เราบันทึกผู้ติดต่อก่อนหน้าทั้งหมดของคุณในรายการผู้รับ เพื่อให้คุณสามารถเปิดตัวแคมเปญติดตามผลได้อย่างง่ายดาย

## การเขียนข้อความ

<center>
<img src="/images/blog/24-seax-bulk-sms/3-message-draft.png" alt="การเขียนข้อความ SMS ใหม่ด้วย SeaX Bulk SMS"/>

*การเขียนข้อความ SMS ใหม่*
</center>

ขั้นตอนต่อไปคือการตั้งชื่อแคมเปญของคุณและเขียนข้อความ Bulk SMS ช่วยให้คุณเข้าถึงข้อมูลผู้ติดต่อทั้งหมดที่เก็บไว้ในไฟล์ csv/excel ของคุณ ตัวอย่างเช่น หากคุณมีฟิลด์ชื่อ `name` ในรายชื่อผู้ติดต่อ คุณสามารถพิมพ์ `{name}` ในข้อความ และข้อความจะแสดงชื่อสำหรับผู้ติดต่อแต่ละรายในเนื้อหาข้อความโดยอัตโนมัติ

## ประมาณการค่าใช้จ่าย

<center>
<img src="/images/blog/24-seax-bulk-sms/4-cost-estimate.png" alt="การเลือกหมายเลขโทรศัพท์สำหรับส่งและรับประมาณการค่าใช้จ่ายแคมเปญด้วย SeaX Bulk SMS"/>

*การเลือกหมายเลขโทรศัพท์สำหรับส่งและรับประมาณการค่าใช้จ่ายแคมเปญ*
</center>

ถัดไป เลือกหมายเลขโทรศัพท์ที่คุณต้องการใช้เพื่อส่งข้อความขาออก หากคุณยังไม่มีหมายเลขโทรศัพท์ คุณสามารถคลิกที่ “ขอใบเสนอราคาสำหรับหมายเลขใหม่” ที่มุมขวาบนเพื่อส่งคำขอซื้อ ทีมงานของเราสามารถช่วยคุณซื้อหมายเลข 10DLC ใหม่ได้

คุณยังสามารถดูตัวอย่างราคาต่อหน่วยโดยประมาณสำหรับแคมเปญได้ โปรดทราบว่าทั้งการส่งและรับ SMS/MMS มีค่าใช้จ่าย ดังนั้นโปรดจัดงบประมาณให้เหมาะสม

## ตัวอย่างข้อความจำนวนมาก

<center>
<img src="/images/blog/24-seax-bulk-sms/5-preview.png" alt="การดูตัวอย่างแคมเปญ Bulk SMS ก่อนส่งด้วย SeaX"/>

*การดูตัวอย่างแคมเปญ Bulk SMS ก่อนส่ง*
</center>

คุณสามารถดูตัวอย่างข้อความจำนวนมากก่อนส่งได้ สิ่งสำคัญคือต้องยืนยันเนื้อหาข้อความ หมายเลขโทรศัพท์ของผู้รับ และหมายเลขโทรศัพท์ของผู้ส่ง เมื่อคุณเปิดตัวแคมเปญแล้ว จะไม่สามารถเรียกคืนข้อความได้ ในหน้านี้ คุณสามารถดูตัวอย่าง 3 ข้อความแรกในแคมเปญของคุณ ซึ่งสอดคล้องกับผู้ติดต่อ 3 รายแรกจากรายการของคุณ

## การติดตามความคืบหน้าของแคมเปญ

<center>
<img src="/images/blog/24-seax-bulk-sms/6-monitor.png" alt="การติดตามความคืบหน้าของแคมเปญ Bulk SMS ด้วย SeaX"/>

*การติดตามความคืบหน้าของแคมเปญ Bulk SMS*
</center>

สุดท้าย คุณสามารถนั่งพักผ่อนและติดตามความคืบหน้าของแคมเปญบนแดชบอร์ด Bulk SMS หน้าจะรีเฟรชและอัปเดตสถานะแคมเปญโดยอัตโนมัติ คุณสามารถดูสถานะการส่งข้อความ อัตราความสำเร็จ/การส่งมอบ ค่าใช้จ่ายโดยประมาณ รวมถึงอัตราการตอบกลับในหน้านี้

## แชทข้อความขาเข้า

<center>
<img src="/images/blog/24-seax-bulk-sms/7-chat.png" alt="การจัดการการตอบกลับที่เข้ามาจากแคมเปญ Bulk SMS ด้วย SeaX"/>

*การจัดการการตอบกลับที่เข้ามาจากแคมเปญ Bulk SMS*
</center>

เช่นเดียวกับคุณสมบัติทั้งหมดของ SeaX เรามุ่งมั่นที่จะเสริมสร้างศักยภาพของตัวแทนหรือผู้จัดการแคมเปญในการจัดการคำขอ/ปัญหาที่เข้ามา - Bulk SMS ช่วยให้ SeaX สามารถจัดการความพยายามทางการตลาดขาออกได้เช่นกัน หลังจากที่คุณเปิดตัวแคมเปญ คุณสามารถจัดการการตอบกลับที่เข้ามาทั้งหมดในหน้าต่างแชทที่แสดงด้านล่าง

# สรุป

ขอขอบคุณที่สละเวลาอ่านเกี่ยวกับวิธีที่ระบบ SeaX Bulk SMS ช่วยให้ตัวแทนสามารถส่งการสื่อสารขาออกได้ นอกเหนือจากการจัดการคำขอข้อความขาเข้า โปรดติดตามส่วนถัดไปในชุดบล็อกของเรา ซึ่งจะครอบคลุมเครื่องมือการจัดการและการวิเคราะห์บางส่วนที่สร้างขึ้นในแพลตฟอร์ม SeaX หากคุณสนใจที่จะเรียนรู้เพิ่มเติมทันที โปรดกรอกแบบฟอร์ม [จองการสาธิต](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting) ของเราเพื่อดูแพลตฟอร์ม SeaX ด้วยตัวคุณเอง
---
title: "SeaVoice STT/TTS Discord Bot: บอทแรกที่ให้บริการบันทึกเสียงที่ดาวน์โหลดได้พร้อมการถอดเสียง AI"
metatitle: "SeaVoice STT/TTS Discord Bot: ดาวน์โหลดบันทึก"
date: 2022-12-13T11:51:16-08:00
draft: false
author: Sydney Burgess, Kim Dodds, Drake Farmer, Jack Harvison, Dylan Strong, Cody Vernon
description: ด้วยการเปิดตัวล่าสุด SeaVoice Discord Bot เป็นบอทแรกบนแพลตฟอร์มที่นำเสนอการบันทึกช่องเสียงที่ดาวน์โหลดได้พร้อมการถอดเสียงที่สร้างโดย AI
weight: 1
tags: ["SeaVoice", "Discord"]
image: images/blog/26-discord-download/seavoice-discord-audio-transcript-download.jpg
canonicalUrl: "/blog/seavoice-discord-recording-download/"
url: "/blog/seavoice-discord-recording-download/"
modified_date: 2025-07-29T20:45:17Z
---

*SeaVoice Discord Bot ได้รับความนิยมเพิ่มขึ้นในฐานะหนึ่งในตัวเลือกที่ดีที่สุดสำหรับการถอดเสียงพูดในช่องเสียง Discord ด้วยการเปิดตัวล่าสุด บอทนี้เป็นบอทแรกบน Discord ที่นำเสนอการบันทึกช่องเสียงที่ดาวน์โหลดได้พร้อมการถอดเสียงที่สร้างโดย AI*

# ไฟล์เสียงและไฟล์ถอดเสียงที่ดาวน์โหลดได้บน Discord: คุณสมบัติใหม่ที่น่าตื่นเต้นในการเปิดตัวบอทล่าสุดของ SeaVoice

สวัสดีทุกคน เราตื่นเต้นที่จะประกาศคุณสมบัติใหม่สำหรับบอท SeaVoice Discord!

<center>
<img src="/images/blog/26-discord-download/1-seavoice-discord-speech-to-text.png" alt="SeaVoice Discord Bot ถอดเสียงพูดจากช่องเสียงแบบเรียลไทม์"/>

*SeaVoice Discord Bot ถอดเสียงพูดจากช่องเสียงแบบเรียลไทม์*
</center>

ตั้งแต่เปิดตัว SeaVoice Discord Bot มีความสามารถหลักสองประการ: ถอดเสียงการสนทนาโดยใช้เทคโนโลยี speech-to-text ที่แม่นยำสูง และสามารถสังเคราะห์เสียงพูดตามข้อมูลที่ผู้ใช้ป้อน
ได้รับความนิยมอย่างรวดเร็วและขณะนี้มีอยู่ในเซิร์ฟเวอร์กว่า 700 แห่งทั่วโลกหลังจากเปิดตัวไม่นาน

ในฐานะทีม เราได้หารือถึงวิธีต่างๆ ในการทำให้บอทมีประโยชน์และเข้าถึงได้ง่ายขึ้นสำหรับผู้ใช้
เราตัดสินใจว่าการจัดเตรียมการบันทึกและถอดเสียงของเซสชันจะเป็นประโยชน์สำหรับการบันทึกการประชุม การบันทึกเซสชันการเล่น และสถานการณ์อื่นๆ อีกมากมาย

## ภาพรวมการถอดเสียงและการดาวน์โหลดเสียง

<center>
<img src="/images/blog/26-discord-download/2-seavoice-audio-transcript-download-discord-direct-message.png" alt="SeaVoice Discord Bot ส่ง DM พร้อมการถอดเสียงและการดาวน์โหลดเสียงหลังแต่ละเซสชัน"/>

*SeaVoice Discord Bot ส่ง DM พร้อมการถอดเสียงและการดาวน์โหลดเสียงหลังแต่ละเซสชัน*
</center>

ในช่วงสองสามเดือนที่ผ่านมา ทีมงานของเราได้ทำงานอย่างหนักเพื่อทำให้แนวคิดนี้เป็นจริง
ตอนนี้เมื่อคุณนำบอทเข้าสู่การโทรเพื่อถอดเสียงการสนทนาของคุณด้วยคำสั่ง `/recognize` บอทจะบันทึกการโทรและเก็บการถอดเสียงไว้เบื้องหลังด้วย
เมื่อคุณขอให้บอทออกไป ทุกคนที่เข้าร่วมการโทรจะได้รับข้อความส่วนตัวจากบอทซึ่งมีบันทึกการสนทนาฉบับเต็มและบันทึกเสียงการโทร

<center>
<img src="/images/blog/26-discord-download/3-seavoice-discord-audio-download.png" alt="การคลิกลิงก์จาก SeaVoice Discord Bot จะเปิดหน้าเว็บเพื่อดูตัวอย่างและดาวน์โหลดบันทึกเสียง"/>

*การคลิกลิงก์จาก SeaVoice Discord Bot จะเปิดหน้าเว็บเพื่อดูตัวอย่างและดาวน์โหลดบันทึกเสียง*
</center>

จะมีลิงก์สำหรับดาวน์โหลดบันทึกฉบับเต็มในรูปแบบ mp3
นี่คือการบันทึกแบบแทร็กเดียว ดังนั้นเสียงพูดจากผู้ใช้ทุกคนจะอยู่ในไฟล์เดียวกัน
การประมวลผลเสียงนี้อาจใช้เวลาสักครู่ ดังนั้นโปรดรอสักครู่เพื่อให้บอทส่งลิงก์ อาจใช้เวลาถึงสองสามนาทีสำหรับการสนทนาที่ยาวขึ้น

<center>
<img src="/images/blog/26-discord-download/4-seavoice-discord-transcription-file.png" alt="ไฟล์ถอดเสียงที่ดาวน์โหลดได้ที่ส่งโดย SeaVoice Discord Bot"/>

*ไฟล์ถอดเสียงที่ดาวน์โหลดได้ที่ส่งโดย SeaVoice Discord Bot*
</center>

การถอดเสียงอยู่ในรูปแบบไฟล์ข้อความและมีเวลาประทับสำหรับจุดเริ่มต้นและจุดสิ้นสุดของแต่ละสิ่งที่พูด รวมถึงชื่อผู้ใช้ของบุคคลที่พูด
สิ่งนี้จะช่วยให้สมาชิกเซิร์ฟเวอร์ของคุณติดตามการโทรได้ง่ายขึ้น และจะเป็นประโยชน์สำหรับการบันทึกการประชุมโครงการและเซสชันการเล่น

## ความท้าทาย

ควรสังเกตด้วยว่าเรามีความท้าทายอย่างมากในการจัดการเสียง เนื่องจาก Discord ส่งเสียงของผู้ใช้แต่ละคนแยกกันและไม่มีเสียงเงียบรวมอยู่ด้วย
ดังนั้นโปรดจำไว้ว่าอาจยังมีปัญหาบางอย่างที่ต้องแก้ไข และเราจะยังคงปรับปรุงคุณสมบัตินี้เพื่อให้การบันทึกขั้นสุดท้ายแม่นยำที่สุดเท่าที่จะเป็นไปได้!
หากคุณพบปัญหาใดๆ กับการบันทึกหรือการถอดเสียงของคุณ โปรดแจ้งให้ทีมงานของเราทราบที่ [เซิร์ฟเวอร์ Discord SeaVoice อย่างเป็นทางการ](https://discord.gg/dfAYfwBQ)
<center>
<iframe src="https://discordapp.com/widget?id=919037515514654721&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
</center>

## ทิศทางในอนาคต

เมื่อคุณสมบัติที่ท้าทายนี้พร้อมสำหรับการเปิดตัวในที่สุด ทีมงานของเรากำลังวางแผนการเพิ่มเติมต่อไปสำหรับบอทแล้ว
บางสิ่งที่เรากำลังพิจารณาในอนาคตคือการอนุญาตให้มีการกำหนดค่าที่ปรับแต่งได้สำหรับเซิร์ฟเวอร์และ/หรือผู้ใช้สำหรับสิ่งต่างๆ เช่น: วิธีการจัดการการบันทึก รูปแบบของไฟล์ถอดเสียง จะเล่นคำปฏิเสธการบันทึกหรือไม่/เมื่อใด ช่องเริ่มต้นสำหรับการส่งออกการถอดเสียง ฯลฯ
เรายินดีรับฟังข้อเสนอแนะใดๆ ที่คุณมีสำหรับคุณสมบัติใหม่ (หรือวิธีปรับปรุงคุณสมบัติที่มีอยู่) บน [เซิร์ฟเวอร์ Discord SeaVoice อย่างเป็นทางการ](https://discord.gg/dfAYfwBQ)

## ลองใช้เลย!

ในระหว่างนี้ คุณสามารถเชิญ [SeaVoice Discord Bot](https://discord.com/oauth2/authorize?client_id=1001955060210749492&scope=bot) ไปยังเซิร์ฟเวอร์ของคุณและลองใช้ด้วยตัวเองได้เลย
อย่าลังเลที่จะอ่าน [เอกสารประกอบ SeaVoice Bot](https://wiki.seasalt.ai/seavoice/discord/discord-bot/) เพื่อดูว่าคุณจะใช้บอทให้เหมาะสมกับความต้องการของชุมชนของคุณได้อย่างไร


เราหวังว่าคุณสมบัติใหม่เหล่านี้จะช่วยคุณในทุกสิ่งที่คุณใช้บอท และคุณจะสนุกกับการใช้งาน!


ขอแสดงความนับถือ,


ทีมงาน SeaVoice Bot

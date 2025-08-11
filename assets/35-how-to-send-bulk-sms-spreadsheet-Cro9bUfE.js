const e=`---
title: "Excel, Google Sheets, Apple Numbers மூலம் Bulk SMS அனுப்பும் சரியான வழி"
metatitle: "Bulk SMS அனுப்பு | Excel, Google Sheets, Apple Numbers"
date: 2023-10-01 10:25:00-08:00
modified_date: 2024-07-01 00:00:00+00:00
draft: false
author: Xuchen Yao
description: "Excel, Google Sheets, Apple Numbers மூலம் 10DLC விதிமுறைகளை பின்பற்றி பாதுகாப்பாக Bulk SMS அனுப்பும் முறையை அறிக."
weight: 1
tags:
  - SeaX
  - வழிகாட்டி
image: images/blog/35-how-to-send-bulk-sms-spreadsheet/35-how-to-send-bulk-sms-spreadsheet.jpg
canonicalURL: /blog/how-to-send-bulk-sms-spreadsheet/
url: /blog/how-to-send-bulk-sms-spreadsheet/
---

தொடர்பு பட்டியலுக்கு Bulk SMS அனுப்புவது நிறுவனங்கள், நிகழ்ச்சி ஏற்பாட்டாளர்கள், பல்வேறு தொழில்முனைவோர்கள் பயன்படுத்தும் ஒரு பொதுவான நடைமுறை. ஒரே நேரத்தில் பலருக்கு செய்தி அனுப்புவது நேரத்தை சேமித்து, தகவலை விரைவாக பகிர உதவும். Excel, Google Sheets, Apple Numbers இயல்பாக SMS அனுப்பும் வசதியில்லை; ஆனால், பல விரிவாக்கங்கள் மற்றும் மூன்றாம் தரப்பு சேவைகள் இதை சாத்தியமாக்குகின்றன. இருப்பினும், சில விதிமுறைகள் மற்றும் அபாயங்களை கவனிக்க வேண்டும்.

# விதிமுறை பின்பற்றல்: 10DLC பதிவு

சமீபத்தில், spam மற்றும் அனாவசிய செய்திகளை தடுக்கும் விதிமுறைகள் அதிகரித்துள்ளன. ஒருமுறை மட்டும் அனுப்ப விரும்பினால், ஆன்லைன் டுடோரியல்கள் போதுமானவை. ஆனால், தொடர்ச்சியான வணிகம் அல்லது மார்க்கெட்டிங் செய்ய விரும்பினால், SMS மார்க்கெட்டிங் விதிகளை தெரிந்து கொள்ள வேண்டும்.

இதில் முக்கியமானது 10DLC அமைப்பு.

10DLC என்பது 10-Digit Long Code-ஐ குறிக்கும், இது அமெரிக்காவில் A2P (Application-to-Person) SMS-க்கு புதிய தரமாகும். முக்கிய அம்சங்கள்:
- நோக்கம்: spam மற்றும் அனாவசிய செய்திகளின் அதிகரிப்பால், carrier-கள் 10DLC-க்கு கடுமையான விதிகளை கொண்டு வந்துள்ளனர்
- வணிக ஒழுங்குமுறை: Bulk SMS அனுப்பும் நிறுவனங்கள் 10DLC-ஐ பதிவு செய்து அனுமதி பெற வேண்டும்
- விதிமுறை மீறல் அபாயம்: பதிவு செய்யாமல் அல்லது அனுமதியில்லாமல் அனுப்பினால், கணக்கு முடக்கம் போன்ற அபாயங்கள்

[இந்தக் கட்டுரை](https://support.twilio.com/hc/en-us/articles/1260800720410-What-is-A2P-10DLC-) 10DLC பதிவு செய்யும் முறையை விளக்குகிறது. Seasalt.ai பல SeaX Messaging வாடிக்கையாளர்களுக்கு 10DLC பின்பற்ற உதவியுள்ளது. கேள்விகள் இருந்தால் எங்களை தொடர்பு கொள்ளுங்கள்.

# Spreadsheet-ல் தொடர்புகளை தயார் செய்யவும்

10DLC முகாமை அமைத்த பிறகு, கணக்கு முடக்கம் பற்றிய கவலை இல்லாமல் Bulk SMS அனுப்பலாம்.

உதாரணமாக, ஒரு spreadsheet-ல் தொடர்புகள் பட்டியலை வைத்திருக்கிறீர்கள், அனைவருக்கும் ஒரு நிகழ்வுக்காக SMS அனுப்ப விரும்புகிறீர்கள். முதலில், தொலைபேசி எண்களை சுத்தம் செய்து, ஒரே வடிவத்தில் மாற்ற வேண்டும்.

## 1. தரவின் பிரதியை எடுக்கவும்

திருத்தம் செய்யும் முன் எப்போதும் ஒரு பிரதியை எடுக்கவும்: **File > Make a copy**.

<center>
<img src="/images/blog/35-how-to-send-bulk-sms-spreadsheet/1-make-a-copy-for-bulk-sms-contact-spreadsheet.png" alt="Bulk SMS தொடர்பு spreadsheet பிரதியை எடுக்கவும்"/>
_Bulk SMS தொடர்பு spreadsheet பிரதியை எடுக்கவும்_
</center>

## 2. Duplicate தரவை நீக்கவும்

a. அனைத்து தரவையும் தேர்வு செய்யவும்
b. Data > Data cleanup > Remove duplicates கிளிக் செய்யவும்
c. சரிபார்க்க வேண்டிய பத்திகளை தேர்வு செய்து Remove duplicates கிளிக் செய்யவும்
d. Google Sheets எத்தனை duplicates நீக்கப்பட்டன என்பதை காட்டும்

<center>
<img src="/images/blog/35-how-to-send-bulk-sms-spreadsheet/2-remove-duplicates-for-bulk-sms-contact-spreadsheet.png" alt="Bulk SMS தொடர்பு spreadsheet duplicate நீக்கம்"/>
_Bulk SMS தொடர்பு spreadsheet duplicate நீக்கம்_
</center>

## 3. தொலைபேசி எண் வடிவத்தை ஒரே மாதிரியாக்கவும்

a. சேவை ஏற்கும் வடிவத்தை தேர்வு செய்யவும் (SeaX Messaging 5551234567, 555-123-4567, +15551234567 போன்றவற்றை ஏற்கும்)
b. Find and Replace மூலம் வடிவத்தை ஒரே மாதிரியாக்கவும் (உதா: புள்ளிகளை hyphen-ஆக மாற்றவும்)
c. தேவைப்பட்டால் formula அல்லது script பயன்படுத்தவும்

<center>
<img src="/images/blog/35-how-to-send-bulk-sms-spreadsheet/3-clean-numbers-for-bulk-sms-contact-spreadsheet.png" alt="Bulk SMS தொடர்பு spreadsheet தொலைபேசி எண் வடிவ ஒரே மாதிரியாக்கம்"/>
_Bulk SMS தொடர்பு spreadsheet தொலைபேசி எண் வடிவ ஒரே மாதிரியாக்கம்_
</center>

### 4. தரவை சரிபார்க்கவும்

a. அனைத்து எண்களும் சரியான இலக்கங்கள் உள்ளதா என சரிபார்க்கவும். Filter அல்லது sort மூலம் பிழைகளை கண்டறியவும்
b. பெயர் புலம் காலியாகவோ தவறாகவோ இல்லையா என உறுதி செய்யவும்

<center>
<img height="500" src="/images/blog/35-how-to-send-bulk-sms-spreadsheet/4-validate-format-for-bulk-sms-contact-spreadsheet.jpeg" alt="Bulk SMS தொடர்பு spreadsheet தரவு சரிபார்ப்பு"/>
_Bulk SMS தொடர்பு spreadsheet தரவு சரிபார்ப்பு_
</center>

## 5. காலி செல்களை சரிபார்க்கவும்

இந்த படி விருப்பமானது. SeaX Messaging-ல் காலி செல்கள் உள்ள வரிசைகள் தானாகவே தவிர்க்கப்படும். ஆனால், பிற சேவைகளில் பிழை ஏற்படலாம்; எனவே, conditional formatting மூலம் காலி செல்களை கண்டறிந்து திருத்த பரிந்துரைக்கப்படுகிறது.

<center>
<img height="500" src="/images/blog/35-how-to-send-bulk-sms-spreadsheet/5-clean-blank-cells-for-bulk-sms-contact-spreadsheet.png" alt="Bulk SMS தொடர்பு spreadsheet காலி செல்கள் சரிபார்ப்பு"/>
_Bulk SMS தொடர்பு spreadsheet காலி செல்கள் சரிபார்ப்பு_
</center>

## தரவு தயாரிப்புக்கான கூடுதல் குறிப்புகள்

Data cleaning என்பது ஒரு மறு செயல். தரவு அளவு மற்றும் தரத்தைப் பொறுத்து, இந்த படிகளை பலமுறை செய்ய வேண்டியிருக்கலாம்.

## SMS அனுப்பத் தொடங்குங்கள்!

Excel அல்லது Google Sheets இயல்பாக SMS அனுப்ப முடியாது; ஆனால் ClickSend, Zapier போன்ற விரிவாக்கங்கள் மற்றும் மூன்றாம் தரப்பு சேவைகள் மூலம் இது சாத்தியம்.

விரிவான SMS மார்க்கெட்டிங் அல்லது Omni-channel தொடர்புக்கு SeaX Messaging போன்ற தனிப்பயன் பிளாட்ஃபாரத்தை பயன்படுத்த பரிந்துரைக்கப்படுகிறது. இதில் தொடர்பு மேலாண்மை, chat/call, செயல்திறன் கண்காணிப்பு, 10DLC பதிவு ஆதரவு போன்றவை உள்ளன.

சில பிரபல சேவைகள்:
- SeaX Messaging
- Simple Texting
- Textedly

# வெற்றிகரமான SMS மார்க்கெட்டிங் செயல்பாடுகள்

<center>
<img height="500" src="/images/blog/35-how-to-send-bulk-sms-spreadsheet/6-successful-camapign-bulk-sms-contact-spreadsheet.jpeg" alt="SMS மார்க்கெட்டிங் வெற்றிக்கான குறிப்புகள்"/>
</center>

எவ்வளவு கவனமாக இருந்தாலும் சிக்கல்கள் ஏற்படலாம். நீண்ட கால வெற்றிக்காக:
- 10DLC தேவைகளை அடிக்கடி சரிபார்த்து, எப்போதும் பின்பற்றவும்
- செய்தி தரத்தை பாதுகாத்து, spam-ஐ தவிர்த்து, opt-out விருப்பத்தை வழங்கவும்
- நம்பகமான SMS சேவையை தேர்வு செய்து, message delivery-ஐ உறுதி செய்யவும்

# முடிவு

Excel, Google Sheets போன்ற கருவிகள் மூலம் Bulk SMS அனுப்புவது மிகவும் பயனுள்ளதாகும்; ஆனால் புதிய விதிமுறைகளை புரிந்து கொண்டு கவனமாக செயல்பட வேண்டும். 10DLC பற்றி தெரிந்து கொண்டு, பாதுகாப்பாகவும் பயனுள்ளதாகவும் SMS அனுப்புங்கள்.

## எங்களை தொடர்பு கொள்ளுங்கள்

10DLC அல்லது SMS மார்க்கெட்டிங் பற்றி மேலும் தெரிந்து கொள்ள [டெமோ பதிவு செய்யவும்](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting). எப்போதும் உங்களுக்கு உதவ தயாராக இருக்கிறோம்!
`;export{e as default};

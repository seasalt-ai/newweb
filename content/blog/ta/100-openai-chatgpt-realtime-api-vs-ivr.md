---
title: "OpenAI-இன் புதிய குரல் தொழில்நுட்பம் உங்கள் ஊடாடும் குரல் பதிலளிப்பை (IVR) மாற்ற முடியுமா?"
metatitle: "OpenAI-இன் புதிய குரல் தொழில்நுட்பம் உங்கள் IVR-ஐ மாற்ற முடியுமா?"
date: 2024-10-14T00:22:19-07:00
modified_date: "2025-07-26T16:48:39Z"
draft: false
author: Amy Chen
description: "OpenAI-இன் புதிய குரல் தொழில்நுட்பம் உங்கள் தற்போதைய ஊடாடும் குரல் பதிலளிப்பு அமைப்பை மாற்ற முடியுமா என்பதை ஆராயுங்கள்."
weight: 1
tags: ["தானியங்கி பதிலளிப்பு சேவை", "சிறு வணிகங்களுக்கான உள்வரும் அழைப்பு", "SeaChat", "குரல் AI"]
toc: true
image: /images/blog/100-openai-chatgpt-realtime-api-vs-ivr/100-openai-chatgpt-realtime-api-vs-ivr.png
canonicalURL: "/blog/openai-chatgpt-realtime-api-vs-ivr/"
url: "/blog/openai-chatgpt-realtime-api-vs-ivr/"
---

OpenAI-இன் புதிய குரல் தொழில்நுட்பம் நம்பமுடியாத அளவிற்கு மனிதனைப் போலவே ஒலிக்கிறது என்பதை நீங்கள் கேள்விப்பட்டிருக்கலாம். டெமோக்கள் ஆச்சரியமாகத் தெரிகின்றன. OpenAI குரல் முகவர் புத்திசாலி, இயல்பானவர் மற்றும் குறுக்கீடுகளை மிக நன்றாக கையாளுகிறார். ஆனால் அது உங்கள் தற்போதைய ஊடாடும் குரல் பதிலளிப்பு அமைப்பை மாற்றத் தயாரா? அல்லது, நீங்கள் ஏற்கனவே ஒரு வாய்ஸ்பாட் சேவையை வாங்கியிருந்தால், உங்கள் வாடிக்கையாளர்களுக்கு சேவை செய்ய அதை OpenAI-இன் குரல் உதவியாளருடன் மாற்ற முடியுமா? அதை எளிமையான சொற்களில் உடைப்போம்.

*இந்த கட்டுரையின் ஆடியோ பதிப்பைக் கேட்க விரும்பினால், இங்கே வீடியோ உள்ளது:*

<iframe width="100%" height="400" src="https://www.youtube.com/embed/?v=DgX6F711ceA&list=PL8K7_LTqly46agqJW2quG5Vsylt5os1Al" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

## நல்ல செய்தி

OpenAI-இன் புதிய குரல் AI (ChatGPT-4o Realtime API என்று அழைக்கப்படுகிறது) உண்மையில் ஈர்க்கக்கூடியது:

நீங்கள் அதைப் பார்க்கவில்லை என்றால், ரே பெர்னாண்டோவால் உருவாக்கப்பட்ட இந்த டெமோ வீடியோவைப் பாருங்கள்:

<iframe width="85%" height="450px" src="https://www.youtube.com/embed/M8-bsaaLLyg" title="Live: OpenAI 2024 Realtime Voice API Demo - Dev Day Exclusive" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

- இது மிகவும் இயல்பாகவும் மனிதனைப் போலவும் ஒலிக்கிறது
- இது விரைவாக பதிலளிக்கிறது, கிட்டத்தட்ட ஒரு உண்மையான நபருடன் பேசுவது போல
- இது உரையாடலில் குறுக்கீடுகள் மற்றும் மாற்றங்களை சீராக கையாள முடியும்

இருப்பினும், இதன் பொருள் என்னவென்றால், வணிக உரிமையாளர்களாக, உங்கள் வாடிக்கையாளர் சேவை முகவருக்காக OpenAI குரலுக்கு மாற முடியுமா? இல்லை. அவ்வளவு சீக்கிரம் இல்லை. இது மிகவும் விலை உயர்ந்தது.

## இது உங்கள் வணிகத்திற்கு மதிப்புள்ளதா?
### விலைகளை ஒப்பிடுவோம்!

துரதிர்ஷ்டவசமாக, இந்த புதிய OpenAI குரல் உதவியாளர் அதிக விலையுடன் வருகிறது:

- ஒரு நிமிட உரையாடலுக்கு சுமார் $1 செலவாகும்
- அது ஒரு மணி நேரத்திற்கு சுமார் $60

இதை ஒரு கண்ணோட்டத்தில் வைக்க, இந்த செலவை இன்றுள்ள 3 முக்கிய தீர்வுகளுடன் ஒப்பிடுவோம்:

- மனித அழைப்பு மைய முகவர்கள்
  - ஒரு மணி நேரத்திற்கு $5 முதல் $30 வரை. நீங்கள் யாரை, எங்கு வேலைக்கு அமர்த்துகிறீர்கள் என்பதைப் பொறுத்து.
- ஊடாடும் குரல் பதிலளிப்பு (IVR)
  - மலிவாக செயல்படுத்த முடியும். மாதத்திற்கு $25-$100.
- மற்ற AI குரல் தொழில்நுட்பங்கள் (வாய்ஸ்பாட்கள்) ஒரு மணி நேரத்திற்கு $7 வரை குறைவாக செலவாகும்

## இது உங்கள் வணிகத்திற்கு மதிப்புள்ளதா?

OpenAI-இன் தொழில்நுட்பம் ஈர்க்கக்கூடியதாக இருந்தாலும், தற்போது மற்ற விருப்பங்களை விட இது மிகவும் விலை உயர்ந்தது. இங்கே ஒரு விரைவான ஒப்பீடு:

1. OpenAI-இன் புதிய குரல் AI (Realtime Voice API): $60/மணிநேரம்
2. மனித முகவர்கள்: $5-$30/மணிநேரம்
3. தற்போதுள்ள AI குரல் வழங்குநர்கள்: $7-$15/மணிநேரம்

## OpenAI-இன் புதிய குரல் AI-ஐப் பயன்படுத்த வேண்டுமா?

பெரும்பாலான வணிகங்களுக்கு, OpenAI-இன் புதிய குரல் தொழில்நுட்பம் அதன் மேம்பட்ட அம்சங்கள் இருந்தபோதிலும், தற்போது பயன்படுத்த மிகவும் விலை உயர்ந்ததாக இருக்கலாம். இது மற்ற நல்ல AI விருப்பங்களை விட சுமார் 10 மடங்கு விலை உயர்ந்தது, ஆனால் 10 மடங்கு சிறப்பாக இருக்க வேண்டிய அவசியமில்லை.

## அதற்கு பதிலாக என்ன செய்ய வேண்டும்

1. உங்கள் தற்போதைய தொலைபேசி பதிலளிப்பு அமைப்பில் நீங்கள் மகிழ்ச்சியாக இருந்தால், இப்போதைக்கு அதனுடன் ஒட்டிக்கொள்ளுங்கள்.
2. நீங்கள் மேம்படுத்த விரும்பினால், Seasalt.ai, Bland AI அல்லது Retell AI போன்ற நிறுவனங்களிலிருந்து மலிவு விலையில் AI குரல் தொழில்நுட்பங்களைக் கவனியுங்கள்.
3. OpenAI-இன் தொழில்நுட்பத்தைக் கவனியுங்கள். எதிர்காலத்தில், விலை குறையலாம், இது வணிகங்களுக்கு மிகவும் நடைமுறைக்குரிய விருப்பமாக மாறும்.

மிகவும் மேம்பட்ட தொழில்நுட்பம் எப்போதும் உங்கள் வணிகத் தேவைகளுக்கு சிறந்த தேர்வாக இருக்காது. எந்த மாற்றங்களையும் செய்வதற்கு முன் உங்கள் பட்ஜெட், உங்களுக்குத் தேவையான வாடிக்கையாளர் சேவையின் தரம் மற்றும் ஒரு தீர்வு உங்கள் இருக்கும் அமைப்புகளுடன் எவ்வளவு நன்றாக ஒருங்கிணைக்கிறது என்பதைக் கவனியுங்கள்.

## மேலும் அறிக
நியாயமான விலையில் வாடிக்கையாளர் சேவைக்கான AI குரல் தொழில்நுட்பத்தை முதலில் ஆராய விரும்பினால், நீங்கள் [SeaChat](https://chat.seasalt.ai/?utm_source=blog/) ஐப் பார்வையிடலாம் அல்லது [எங்களுடன் ஒரு டெமோவை பதிவு செய்யலாம்](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting).

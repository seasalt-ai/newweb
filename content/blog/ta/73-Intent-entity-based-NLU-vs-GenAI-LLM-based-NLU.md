---
title: "நோக்கம்/நிறுவனம் சார்ந்த NLU vs. GenAI/LLM சார்ந்த NLU: மில்லியன் கணக்கான (எடுத்துக்காட்டுகள் மற்றும் டாலர்கள்) வேறுபாடு"
metatitle: "நோக்கம்/நிறுவனம் சார்ந்த NLU vs. GenAI/LLM சார்ந்த NLU"
date: 2024-03-14T00:22:19-07:00
draft: false
author: Xuchen Yao
description: உரையாடல் AI இன் எதிர்காலத்தைத் திறக்கவும் - நோக்கம்/நிறுவனம் சார்ந்த NLU இலிருந்து GenAI/LLM க்கு மாறுவது ஏன் அளவிடுதல், செலவு-திறன் மற்றும் தகவமைப்புக்கு முக்கியமானது."
weight: 1
tags: ["SeaChat", "AI Tools", "Customer Experience", "Customer Story", "NLU"]
image: /images/blog/73-Intent-entity-based-NLU-vs-GenAI-LLM-based-NLU/73-Intent-entity-based-NLU-vs-GenAI-LLM-based-NLU.png
canonicalURL: "/blog/intent-entity-based-nlu-vs-genai-llm-based-nlu/"
url: "/blog/intent-entity-based-nlu-vs-genai-llm-based-nlu/"
modified_date: "2025-07-28T16:56:53Z"
---

அனைத்து வாடிக்கையாளர் சேவை அல்லது சந்தைப்படுத்தல் இயக்குநர்களுக்கும், உங்கள் முதலாளி பின்வரும் கேள்வியைக் கேட்டால், இந்த கட்டுரையை அவர்களுக்கு அனுப்பவும்:

"**நோக்கம்/நிறுவனம் சார்ந்த NLU ஏன் காலாவதியானது மற்றும் LLM/GenAI ஏன் வெளிப்படையான போக்கு?**"

இயற்கை மொழி புரிதல் (NLU) அமைப்புகள், உரை அல்லது பேச்சு போன்ற இயற்கை மொழி உள்ளீடுகளைச் செயலாக்கி பகுப்பாய்வு செய்வதன் மூலம், அர்த்தத்தைப் பெறுவதையும், தொடர்புடைய தகவல்களைப் பிரித்தெடுப்பதையும், தகவல்தொடர்புக்குப் பின்னால் உள்ள அடிப்படை நோக்கத்தைப் புரிந்துகொள்வதையும் நோக்கமாகக் கொண்டுள்ளன. NLU என்பது மெய்நிகர் உதவியாளர்கள், சாட்போட்கள், உணர்வு பகுப்பாய்வு கருவிகள், மொழிபெயர்ப்பு அமைப்புகள் மற்றும் பலவற்றை உள்ளடக்கிய பல்வேறு AI பயன்பாடுகளின் ஒரு அடிப்படை அங்கமாகும். இது மனித-கணினி தொடர்புகளை செயல்படுத்துவதிலும், இயற்கை மொழி உள்ளீடுகளைப் புரிந்துகொண்டு பதிலளிக்கக்கூடிய அறிவார்ந்த அமைப்புகளின் வளர்ச்சியை எளிதாக்குவதிலும் முக்கிய பங்கு வகிக்கிறது.

இந்த கேள்வி, தங்கள் IVR மற்றும் சாட்போட் அணுகுமுறையை மறுபரிசீலனை செய்யும் நிறுவப்பட்ட வாடிக்கையாளர்களிடமிருந்து வருகிறது. அவர்கள் முந்தைய தலைமுறை NLU-அடிப்படையிலான தொழில்நுட்ப அடுக்கில் பூட்டப்பட்டுள்ளனர், இது பொதுவாக பெரிய தொழில்நுட்ப நிறுவனங்களான: [Microsoft Bot Framework](https://dev.botframework.com/) (அல்லது [luis.ai](https://luis.ai")), [IBM Watson NLU](https://www.ibm.com/products/natural-language-understanding), [Google DialogFlow](https://cloud.google.com/dialogflow), [Meta’s wit.ai](https://wit.ai), [Amazon Lex](https://aws.amazon.com/lex/), [SAP Conversational AI](https://cai.tools.sap/), [Nuance Mix NLU](https://www.nuance.com/omni-channel-customer-engagement/ai-for-developers/nuance-mix/mix-nlu.html) போன்றவர்களால் வழங்கப்படுகிறது.

சவால் என்னவென்றால், காப்பீட்டு நிறுவனங்கள், நிதி நிறுவனங்கள், அரசாங்கங்கள், விமான நிறுவனங்கள்/கார் டீலர்ஷிப்கள் மற்றும் பிற பெரிய ஒப்பந்தங்கள் போன்ற முக்கிய வாடிக்கையாளர்கள் ஏற்கனவே கடந்த தலைமுறை தொழில்நுட்பத்தை பயன்படுத்தியுள்ளனர். ஆனால் நோக்கம்/நிறுவனம் சார்ந்த NLU அளவிட முடியாததால், வாடிக்கையாளர்கள் தங்கள் NLU அமைப்பை பராமரிக்கவும் மேம்படுத்தவும் ஒவ்வொரு ஆண்டும் நூறாயிரக்கணக்கான முதல் மில்லியன் கணக்கான டாலர்களை செலவிட வேண்டும். அளவிட முடியாத இந்த குறைபாடு பராமரிப்பு செலவுகளை அதிகரிக்க பங்களிக்கிறது, இறுதியில் கடந்த தலைமுறை NLU வழங்குநர்களுக்கு அவர்களின் வாடிக்கையாளர்களின் செலவில் பயனளிக்கிறது. அவை அளவிட முடியாததால், பராமரிப்பு செலவு ஆண்டுதோறும் அதிகமாக உள்ளது.

## நோக்கம்/நிறுவனம் சார்ந்த NLU ஏன் திறம்பட அளவிடத் தவறுகிறது?

முக்கிய காரணம் மாதிரியின் வரையறுக்கப்பட்ட பாகுபடுத்தும் சக்தியில் உள்ளது. இது ஏன் இப்படி இருக்கிறது என்பதற்கான விளக்கம் இங்கே:

1. **குறைந்தபட்ச நோக்கங்கள் தேவை**: NLU மாதிரிகள் திறம்பட பயிற்சி பெற குறைந்தபட்சம் இரண்டு தனித்துவமான நோக்கங்கள் தேவை. உதாரணமாக, வானிலை பற்றி கேட்கும்போது, நோக்கம் தெளிவாக இருக்கலாம், ஆனால் ஒவ்வொரு வினவலுக்கும் பின்னால் பல சாத்தியமான நோக்கங்கள் உள்ளன, அதாவது ஒரு பின்னடைவு அல்லது "நீங்கள் எப்படி இருக்கிறீர்கள்?" போன்ற வானிலை தொடர்பான அல்லாத விசாரணைகள்.

2. **பயிற்சி தரவு தேவைகள்**: பெரிய தொழில்நுட்ப நிறுவனங்கள் பொதுவாக பயனுள்ள பயிற்சிக்கு ஒவ்வொரு நோக்கத்திற்கும் ஆயிரக்கணக்கான நேர்மறை எடுத்துக்காட்டுகளைக் கோருகின்றன. இந்த விரிவான தரவுத்தொகுப்பு மாதிரிக்கு வெவ்வேறு நோக்கங்களுக்கு இடையில் துல்லியமாக கற்றுக்கொள்ளவும் வேறுபடுத்தவும் அவசியம்.

3. **நேர்மறை மற்றும் எதிர்மறை எடுத்துக்காட்டுகளை சமநிலைப்படுத்துதல்**: ஒரு நோக்கத்திற்கு நேர்மறை எடுத்துக்காட்டுகளைச் சேர்ப்பது மற்ற நோக்கங்களுக்கு எதிர்மறை எடுத்துக்காட்டுகளைச் சேர்ப்பதை அவசியமாக்குகிறது. இந்த சமச்சீர் அணுகுமுறை NLU மாதிரி நேர்மறை மற்றும் எதிர்மறை நிகழ்வுகள் இரண்டிலிருந்தும் திறம்பட கற்றுக்கொள்ள முடியும் என்பதை உறுதி செய்கிறது.

4. **பல்வேறு எடுத்துக்காட்டு தொகுப்புகள்**: நேர்மறை மற்றும் எதிர்மறை எடுத்துக்காட்டுகள் இரண்டும் பல்வேறு சூழல்களில் மாதிரியின் பொதுமைப்படுத்தும் திறனை மேம்படுத்தவும், அதிகப்படியான பொருத்தத்தைத் தடுக்கவும் வேறுபட்டதாக இருக்க வேண்டும்.

5. **புதிய நோக்கங்களைச் சேர்ப்பதன் சிக்கலானது**: இருக்கும் NLU மாதிரியில் ஒரு புதிய நோக்கத்தைச் சேர்ப்பது ஒரு கடினமான செயல்முறையை உள்ளடக்கியது. ஆயிரக்கணக்கான நேர்மறை மற்றும் எதிர்மறை எடுத்துக்காட்டுகள் சேர்க்கப்பட வேண்டும், அதைத் தொடர்ந்து அதன் அடிப்படை செயல்திறனைப் பராமரிக்க மாதிரிக்கு மீண்டும் பயிற்சி அளிக்கப்பட வேண்டும். நோக்கங்களின் எண்ணிக்கை அதிகரிக்கும்போது இந்த செயல்முறை பெருகிய முறையில் சவாலாகிறது.

## பரிந்துரைக்கும் விளைவு: நோக்கம்/நிறுவனம் சார்ந்த NLU இன் குறைபாடு

<center>
<img height="100%" width="50%" src="/images/blog/73-Intent-entity-based-NLU-vs-GenAI-LLM-based-NLU/the-prescribing-effect-the-pitfall-of-Intent-entity-based-NLU-01.jpg" alt="நோக்கம்/நிறுவனம் சார்ந்த NLU இன் பரிந்துரைக்கும் விளைவு">

*நோக்கம்/நிறுவனம் சார்ந்த NLU இன் பரிந்துரைக்கும் விளைவு*
</center>


மருத்துவத்தில் "**பரிந்துரைக்கும் அடுக்கு**" என்று அறியப்படும் நிகழ்வுக்கு ஒத்ததாக, நோக்கம்/நிறுவனம் சார்ந்த NLU இன் அளவிடுதல் சவால்களை பரிந்துரைகளின் அச்சுறுத்தும் அடுக்காக ஒப்பிடலாம். தினசரி ஏராளமான மருந்துகளால் சுமையாக இருக்கும் ஒரு வயதான நபரை கற்பனை செய்து பாருங்கள், ஒவ்வொரு மருந்தும் முந்தைய மருந்தின் பக்க விளைவுகளை நிவர்த்தி செய்ய பரிந்துரைக்கப்படுகிறது. இந்த சூழ்நிலை மிகவும் பரிச்சயமானது, அங்கு மருந்து A இன் அறிமுகம் பக்க விளைவுகளுக்கு வழிவகுக்கிறது, இது அவற்றை எதிர்கொள்ள மருந்து B ஐ பரிந்துரைக்க வேண்டிய அவசியத்தை ஏற்படுத்துகிறது. இருப்பினும், மருந்து B அதன் சொந்த பக்க விளைவுகளை அறிமுகப்படுத்துகிறது, இது மருந்து C இன் தேவையைத் தூண்டுகிறது, மேலும் பல. இதன் விளைவாக, வயதான நபர் நிர்வகிக்க வேண்டிய மாத்திரைகளின் மலையில் மூழ்கிவிடுகிறார் - ஒரு பரிந்துரைக்கும் அடுக்கு.

மற்றொரு விளக்கமான உருவகம், தொகுதிகளின் கோபுரத்தை உருவாக்குவது, ஒவ்வொரு தொகுதியும் ஒரு மருந்தைக் குறிக்கிறது. ஆரம்பத்தில், மருந்து A வைக்கப்படுகிறது, ஆனால் அதன் நிலையற்ற தன்மை (பக்க விளைவுகள்) அதை நிலைப்படுத்த மருந்து B ஐச் சேர்க்க தூண்டுகிறது. இருப்பினும், இந்த புதிய சேர்க்கை தடையின்றி ஒருங்கிணைக்கப்படாமல் போகலாம், இதனால் கோபுரம் மேலும் சாய்ந்துவிடும் (B இன் பக்க விளைவு). இந்த நிலையற்ற தன்மையை சரிசெய்யும் முயற்சியில், மேலும் தொகுதிகள் (மருந்துகள் C, D, முதலியன) சேர்க்கப்படுகின்றன, இது கோபுரத்தின் நிலையற்ற தன்மையையும் சரிவுக்கு ஆளாகும் தன்மையையும் அதிகரிக்கிறது - பல மருந்துகளிலிருந்து எழும் சாத்தியமான சுகாதார சிக்கல்களின் பிரதிநிதித்துவம்.

<center>
<img height="60%" width="60%" src="/images/blog/73-Intent-entity-based-NLU-vs-GenAI-LLM-based-NLU/the-prescribing-effect-the-pitfall-of-Intent-entity-based-NLU-02.jpg" alt="நோக்கம்/நிறுவனம் சார்ந்த NLU க்கான மற்றொரு விளக்கமான உருவகம், தொகுதிகளின் கோபுரத்தை உருவாக்குவது">

*நோக்கம்/நிறுவனம் சார்ந்த NLU க்கான மற்றொரு விளக்கமான உருவகம், தொகுதிகளின் கோபுரத்தை உருவாக்குவது*
</center>

இதேபோல், NLU அமைப்புக்கு சேர்க்கப்படும் ஒவ்வொரு புதிய நோக்கத்துடனும், உருவக தொகுதிகளின் கோபுரம் உயரமாக வளர்கிறது, இது நிலையற்ற தன்மையை அதிகரிக்கிறது. வலுவூட்டலின் தேவை அதிகரிக்கிறது, இதன் விளைவாக அதிக பராமரிப்பு செலவுகள் ஏற்படுகின்றன. இதன் விளைவாக, நோக்கம்/நிறுவனம் சார்ந்த NLU ஆரம்பத்தில் வழங்குநர்களுக்கு கவர்ச்சிகரமானதாகத் தோன்றினாலும், அதை பராமரிப்பது வாடிக்கையாளர்களுக்கு அதிக சுமையாக மாறும் என்பதே உண்மை. இந்த அமைப்புகள் அளவிடுதல் திறனைக் கொண்டிருக்கவில்லை, இது வழங்குநர்கள் மற்றும் வாடிக்கையாளர்கள் இருவருக்கும் குறிப்பிடத்தக்க சவால்களை ஏற்படுத்துகிறது.
அடுத்த பிரிவுகளில், GenAI/LLM-அடிப்படையிலான NLU இந்த சவால்களை திறம்பட எதிர்கொள்ள எவ்வாறு மிகவும் நிலையான மற்றும் அளவிடக்கூடிய மாற்றீட்டை வழங்குகிறது என்பதை ஆராய்வோம்.

## GenAI/LLM-அடிப்படையிலான NLU: ஒரு மீள்திறன் தீர்வு

GenAI/LLM-அடிப்படையிலான NLU, நோக்கம்/நிறுவனம் சார்ந்த அமைப்புகள் எதிர்கொள்ளும் அளவிடுதல் சவால்களுக்கு ஒரு வலுவான தீர்வை வழங்குகிறது. இது முக்கியமாக இரண்டு முக்கிய காரணிகளுக்குக் காரணம்:

1. **முன் பயிற்சி மற்றும் உலக அறிவு**: GenAI/LLM மாதிரிகள் ஏராளமான தரவுகளில் முன் பயிற்சி அளிக்கப்படுகின்றன, இது அவர்களுக்கு உலக அறிவின் செல்வத்தை மரபுரிமையாகப் பெற உதவுகிறது. இந்த திரட்டப்பட்ட அறிவு, பல்வேறு நோக்கங்களுக்கு இடையில் வேறுபடுத்துவதில் முக்கிய பங்கு வகிக்கிறது, இதன் மூலம் எதிர்மறை எடுத்துக்காட்டுகளுக்கு எதிராக மாதிரியின் பாகுபடுத்தும் திறன்களை மேம்படுத்துகிறது.

2. **சில-ஷாட் கற்றல் (Few-Shot Learning)**: GenAI/LLM-அடிப்படையிலான NLU இன் தனித்துவமான அம்சங்களில் ஒன்று, சில-ஷாட் கற்றல் நுட்பங்களைப் பயன்படுத்தும் திறன் ஆகும். ஒவ்வொரு நோக்கத்திற்கும் விரிவான பயிற்சித் தரவு தேவைப்படும் பாரம்பரிய முறைகளைப் போலல்லாமல், சில-ஷாட் கற்றல் மாதிரிக்கு சில எடுத்துக்காட்டுகளிலிருந்து கற்றுக்கொள்ள உதவுகிறது. இந்த திறமையான கற்றல் அணுகுமுறை, குறைந்தபட்ச தரவுகளுடன் நோக்கம் கொண்ட இலக்குகளை வலுப்படுத்துகிறது, பயிற்சிச் சுமையைக் கணிசமாக குறைக்கிறது.

இந்த காட்சியைப் பாருங்கள்: ஒரு வாசகராக "இன்றைய வானிலை எப்படி?" என்ற வினவல் உங்களுக்கு வழங்கப்பட்டால், நீங்கள் தினசரி சந்திக்கும் பல வாக்கியங்களுக்கு மத்தியில் வானிலை பற்றிய ஒரு விசாரணையாக அதை உள்ளுணர்வாக அடையாளம் காண்கிறீர்கள். நோக்கத்தை வேறுபடுத்தும் இந்த உள்ளார்ந்த திறன் சில-ஷாட் கற்றல் கருத்துக்கு ஒத்ததாகும்.

பெரியவர்களாக, நமது மூளை ஒரு பரந்த சொற்களஞ்சியத்துடன் முன் பயிற்சி அளிக்கப்படுகிறது, இது 20 வயதிற்குள் சுமார் 150 மில்லியன் வார்த்தைகள் என மதிப்பிடப்பட்டுள்ளது. இந்த விரிவான மொழி வெளிப்பாடு, புதிய நோக்கங்களை சந்திக்கும்போது அவற்றை விரைவாகப் புரிந்துகொள்ள உதவுகிறது, வலுவூட்டலுக்கு சில எடுத்துக்காட்டுகள் மட்டுமே தேவை.

அர்பன் டிக்ஷனரி, சில-ஷாட் கற்றலின் எடுத்துக்காட்டுகளைச் செயல்படுத்துவதைப் பற்றி ஆராய்வதற்கு ஒரு சிறந்த ஆதாரமாக செயல்படுகிறது, இது விரைவான புரிதலை எளிதாக்குவதில் அதன் செயல்திறனை மேலும் விளக்குகிறது.

GenAI/LLM-அடிப்படையிலான NLU இல் உள்ள சில-ஷாட் கற்றல் திறன், செலவுகளைக் குறைப்பதிலும், அளவிடுதல் திறனை செயல்படுத்துவதிலும் முக்கிய பங்கு வகிக்கிறது. முன் பயிற்சியின் போது பெரும்பாலான பயிற்சி ஏற்கனவே முடிந்துவிட்டதால், குறைந்தபட்ச எடுத்துக்காட்டுகளுடன் மாதிரியை நன்றாகச் சரிசெய்வது முதன்மை கவனமாகிறது, இது செயல்முறையை நெறிப்படுத்துகிறது மற்றும் அளவிடுதல் திறனை மேம்படுத்துகிறது.

## GenAI/LLM-அடிப்படையிலான NLU: முடிவுகள் மற்றும் ஆதாரங்களை வழங்குதல்

மார்ச் 2024 நிலவரப்படி, இயற்கை மொழி செயலாக்கத்தின் (NLP) நிலப்பரப்பு ஒரு குறிப்பிடத்தக்க மாற்றத்திற்கு உட்பட்டுள்ளது, இது GenAI/LLM-அடிப்படையிலான NLU ஒரு கேம்-சேஞ்சராக உருவானதன் மூலம் குறிக்கப்படுகிறது. NLP கண்டுபிடிப்பில் ஒரு காலத்தில் ஆதிக்கம் செலுத்திய முன்னேற்றம் கடந்த 2-3 ஆண்டுகளாக தேக்கமடைந்துள்ளது, இது அதிநவீன முன்னேற்றங்களில் உள்ள தேக்கநிலையால் நிரூபிக்கப்பட்டுள்ளது. நீங்கள் ஒரு காலத்தில் மிகவும் பிரபலமான <a href="https://github.com/sebastianruder/NLP-progress">NLP முன்னேற்றத்தை</a> கலை நிலைக்கு சரிபார்த்தால், அது பெரும்பாலும் 2-3 ஆண்டுகளுக்கு முன்பு நின்றுவிட்டது:

<center>
<img height="80%" width="80%" src="/images/blog/73-Intent-entity-based-NLU-vs-GenAI-LLM-based-NLU/nlp-progress.png" alt="இந்த Github Repo இல் NLP கண்டுபிடிப்பை நாங்கள் கண்காணித்தோம். புதுப்பிப்பு பெரும்பாலும் 2-3 ஆண்டுகளுக்கு முன்பு நின்றுவிட்டது.">

*இந்த Github Repo இல் NLP கண்டுபிடிப்பை நாங்கள் கண்காணித்தோம். புதுப்பிப்பு பெரும்பாலும் 2-3 ஆண்டுகளுக்கு முன்பு நின்றுவிட்டது.*
</center>

இந்த முன்னுதாரண மாற்றத்தை அடிக்கோடிட்டுக் காட்டும் ஒரு குறிப்பிடத்தக்க அளவுகோல் <a href="https://super.gluebenchmark.com/leaderboard/">SuperGlue லீடர்போர்டு</a> ஆகும், இது டிசம்பர் 2022 இல் அதன் சமீபத்திய உள்ளீட்டைக் கொண்டுள்ளது. சுவாரஸ்யமாக, இந்த காலக்கெடு ChatGPT (3.5) இன் அறிமுகத்துடன் ஒத்துப்போகிறது, இது NLP சமூகத்தில் அதிர்ச்சி அலைகளை அனுப்பியது.

<center>
<img height="80%" width="80%" src="/images/blog/73-Intent-entity-based-NLU-vs-GenAI-LLM-based-NLU/superglue-leaderboard.png" alt="ChatGPT அறிமுகப்படுத்தப்படும் வரை SuperGlue லீடர்போர்டு பிரபலமாக இருந்தது">

*ChatGPT அறிமுகப்படுத்தப்படும் வரை SuperGlue லீடர்போர்டு பிரபலமாக இருந்தது*
</center>

GPT-3 இன் முக்கிய கட்டுரை, பொருத்தமாக "<a href="https://arxiv.org/abs/2005.14165">மொழி மாதிரிகள் சில-ஷாட் கற்றவர்கள்</a>" என்று தலைப்பிடப்பட்டுள்ளது, இது சில-ஷாட் கற்றலின் செயல்திறனுக்கு உறுதியான ஆதாரங்களை வழங்குகிறது. கட்டுரையின் 7 ஆம் பக்கத்தில் உள்ள படம் 2.1, ஜீரோ-ஷாட், ஒன்-ஷாட் மற்றும் சில-ஷாட் கற்றல் அணுகுமுறைகளுக்கு இடையிலான வேறுபாடுகளை விவரிக்கிறது, கற்றல் திறன் மற்றும் செயல்திறன் அடிப்படையில் பிந்தையவற்றின் மேன்மையை எடுத்துக்காட்டுகிறது.


<center>
<img height="80%" width="80%" src="/images/blog/73-Intent-entity-based-NLU-vs-GenAI-LLM-based-NLU/few-shot-learners.png" alt="ஜீரோ-ஷாட், ஒன்-ஷாட் மற்றும் சில-ஷாட் கற்றல் அணுகுமுறைகளுக்கு இடையிலான வேறுபாடுகள்">

*ஜீரோ-ஷாட், ஒன்-ஷாட் மற்றும் சில-ஷாட் கற்றல் அணுகுமுறைகளுக்கு இடையிலான வேறுபாடுகள்*
</center>

மேலும், GenAI/LLM-அடிப்படையிலான NLU இன் செயல்திறனை உறுதிப்படுத்தும் வகையில், பக்கம் 19 இல் உள்ள அட்டவணை 3.8, பாரம்பரிய மேற்பார்வையிடப்பட்ட NLU முறைகள் மற்றும் GPT-3 சில-ஷாட் கற்றல் ஆகியவற்றுக்கு இடையே நேரடி ஒப்பீட்டை வழங்குகிறது. இந்த ஒப்பீட்டில், GPT-3 சில-ஷாட், நோக்கம்/நிறுவனம் சார்ந்த NLU அமைப்புகளால் பயன்படுத்தப்படும் மேற்பார்வையிடப்பட்ட கற்றலின் பிரதிநிதித்துவமான Fine-tuned BERT-Large ஐ பல்வேறு பணிகளில் மிஞ்சுகிறது.

<center>
<img height="100%" width="100%" src="/images/blog/73-Intent-entity-based-NLU-vs-GenAI-LLM-based-NLU/gpt-performance.png"  alt="GPT-3 சில-ஷாட் பல்வேறு பணிகளில் Fine-tuned BERT-Large ஐ மிஞ்சுகிறது">

*GPT-3 சில-ஷாட் பல்வேறு பணிகளில் Fine-tuned BERT-Large ஐ மிஞ்சுகிறது*
</center>

GPT-3 சில-ஷாட்டின் மேன்மை அதன் துல்லியத்தில் மட்டுமல்ல, அதன் செலவு-திறனிலும் தெளிவாகிறது. GenAI/LLM-அடிப்படையிலான NLU உடன் தொடர்புடைய ஆரம்ப அமைப்பு மற்றும் பராமரிப்பு செலவுகள் பாரம்பரிய முறைகளை விட கணிசமாக குறைவாக உள்ளன.

NLP சமூகத்தில் வழங்கப்பட்ட அனுபவ ஆதாரங்கள் GenAI/LLM-அடிப்படையிலான NLU இன் மாற்றும் தாக்கத்தை அடிக்கோடிட்டுக் காட்டுகின்றன. இது ஏற்கனவே அதன் இணையற்ற துல்லியம் மற்றும் செயல்திறனை நிரூபித்துள்ளது. அடுத்து, அதன் செலவு-திறனைப் பார்ப்போம்.

## பயிற்சி தரவு தேவைகள்: ஒரு ஒப்பீட்டு பகுப்பாய்வு

நோக்கம்/நிறுவனம் சார்ந்த NLU மற்றும் GenAI/LLM-அடிப்படையிலான NLU க்கு இடையிலான ஒரு வெளிப்படுத்தும் ஒப்பீடு அவற்றின் மாறுபட்ட பயிற்சி தரவு தேவைகளை வெளிச்சம் போட்டுக் காட்டுகிறது. பக்கம் 20 இல் உள்ள படம் 3.8 ஒரு கடுமையான வேறுபாட்டைக் காட்டுகிறது:

<center>
<img height="100%" width="100%" src="/images/blog/73-Intent-entity-based-NLU-vs-GenAI-LLM-based-NLU/superglue-performance.png" alt="GenAI/LLM-அடிப்படையிலான NLU பயிற்சிக்கு மிகக் குறைந்த தரவு தேவைப்படுகிறது">

*GenAI/LLM-அடிப்படையிலான NLU பயிற்சிக்கு மிகக் குறைந்த தரவு தேவைப்படுகிறது*
</center>

- **மேற்பார்வையிடப்பட்ட கற்றல் NLU**: இந்த பாரம்பரிய அணுகுமுறைக்கு விரிவான தரவுத்தொகுப்பு தேவைப்படுகிறது, பயனுள்ள பயிற்சிக்கு அரை மில்லியனுக்கும் அதிகமான எடுத்துக்காட்டுகள் (630K) தேவை.

- **சில-ஷாட் GPT-3**: இதற்கு நேர்மாறாக, GenAI/LLM-அடிப்படையிலான NLU குறிப்பிடத்தக்க செயல்திறனை வெளிப்படுத்துகிறது, ஒவ்வொரு பணிக்கும் 32 எடுத்துக்காட்டுகள் மட்டுமே பயனுள்ள சரிசெய்தலுக்கு போதுமானது.

இந்த வேறுபாட்டின் அளவு வியக்க வைக்கிறது: **630,000 எடுத்துக்காட்டுகள் எதிராக வெறும் 32**. பயிற்சி தரவு தேவைகளில் இந்த வியத்தகு குறைப்பு, GenAI/LLM-அடிப்படையிலான NLU ஐ ஏற்றுக்கொண்ட வணிகங்களுக்கு குறிப்பிடத்தக்க செலவு சேமிப்பிற்கு வழிவகுக்கிறது.

மேலும், வளர்ச்சி காலக்கெடுவில் உள்ள மறைமுகமான தாக்கம் ஆழமானது. GenAI/LLM-அடிப்படையிலான NLU உடன், சுருக்கப்பட்ட பயிற்சி செயல்முறை NLU அமைப்புகளின் வரிசைப்படுத்தலை பல மடங்கு வேகப்படுத்துகிறது, இது இயற்கை மொழி செயலாக்கத் துறையில் விரைவான தழுவல் மற்றும் கண்டுபிடிப்புகளை எளிதாக்குகிறது.

சுருக்கமாக, இந்த ஒப்பீடு GenAI/LLM-அடிப்படையிலான NLU இன் மாற்றும் திறனை அடிக்கோடிட்டுக் காட்டுகிறது, இது பயிற்சி தரவு தேவைகள் மற்றும் வளர்ச்சி காலக்கெடுவில் இணையற்ற செயல்திறன் மற்றும் செலவு-திறனை வழங்குகிறது.

## பரிணாம வளர்ச்சியைத் தழுவுதல்: GenAI/LLM-அடிப்படையிலான NLU ஏன் மேலோங்குகிறது


இயற்கை மொழி புரிதலின் துறையில், நோக்கம்/நிறுவனம் சார்ந்த அமைப்புகளிலிருந்து GenAI/LLM-அடிப்படையிலான தீர்வுகளுக்கு மாறுவது மறுக்க முடியாத வகையில் நடந்து வருகிறது. இந்த மாற்றம், பாரம்பரிய நோக்கம்/நிறுவனம் சார்ந்த NLU இன் வரம்புகள் மற்றும் GenAI/LLM-அடிப்படையிலான அணுகுமுறைகளால் வழங்கப்படும் கட்டாய நன்மைகளை அடிக்கோடிட்டுக் காட்டும் பல காரணிகளால் உந்தப்படுகிறது.

நோக்கம்/நிறுவனம் சார்ந்த NLU பல கட்டாய காரணங்களுக்காக பெருகிய முறையில் காலாவதியானதாகக் கருதப்படுகிறது:

1. **வரையறுக்கப்பட்ட நெகிழ்வுத்தன்மை**: பாரம்பரிய NLU அமைப்புகள் முன் வரையறுக்கப்பட்ட நோக்கங்கள் மற்றும் நிறுவனங்களைச் சார்ந்துள்ளன, இது இந்த முன் வரையறுக்கப்பட்ட வகைகளிலிருந்து விலகிச் செல்லும் பயனர் உள்ளீடுகளுக்கு சாட்போட்கள் மற்றும் IVR களின் தகவமைப்புத் திறனைக் கட்டுப்படுத்துகிறது.

2. **பராமரிப்பு சவால்கள்**: இந்த அமைப்புகள் அளவிடப்பட்டு, நோக்கங்கள் மற்றும் நிறுவனங்களின் எண்ணிக்கை பெருகும்போது, பராமரிப்பு மற்றும் புதுப்பிப்புகளுக்குத் தேவையான சிக்கல்தன்மையும் நேரமும் அதிவேகமாக அதிகரிக்கிறது.

3. **சூழல் புரிதல் இல்லாமை**: இந்த அமைப்புகள் பெரும்பாலும் உரையாடல்களின் சிக்கலான சூழல் நுணுக்கங்களைப் புரிந்துகொள்வதில் தடுமாறுகின்றன, இதன் விளைவாக தவறான பதில்கள் அல்லது நோக்கங்களைத் தெளிவுபடுத்த கூடுதல் பயனர் உள்ளீடு தேவைப்படுகிறது.

4. **உருவாக்கம் இல்லாமை**: நோக்கம் மற்றும் நிறுவனம் சார்ந்த NLU அமைப்புகள் உரை உருவாக்கும் திறனில் உள்ளார்ந்த வரம்புகளைக் கொண்டுள்ளன, இது நோக்கங்களை வகைப்படுத்துதல் மற்றும் நிறுவனங்களைப் பிரித்தெடுத்தல் ஆகியவற்றை மையமாகக் கொண்ட பணிகளுக்கு அவற்றை கட்டுப்படுத்துகிறது. இது சாட்போட்கள் மற்றும் IVR களின் தகவமைப்புத் திறனைக் கட்டுப்படுத்துகிறது, பெரும்பாலும் உரையாடல் சூழலுடன் பொருந்தாத ஒரே மாதிரியான பதில்களுக்கு வழிவகுக்கிறது.

இதற்கு நேர்மாறாக, GenAI/LLM-அடிப்படையிலான NLU அதன் மாற்றும் பண்புகள் காரணமாக மேலோங்கிய போக்காக வெளிப்படுகிறது:

1. **தகவமைப்பு கற்றல்**: GenAI மாதிரிகள் நிகழ்நேர உரையாடல்களில் இருந்து மாறும் வகையில் கற்றுக்கொள்ளும் திறனைக் கொண்டுள்ளன, இது கைமுறை புதுப்பிப்புகள் தேவையில்லாமல், புதிய தலைப்புகள் மற்றும் பயனர் நடத்தைகளுக்கு தானாகவே பழக்கப்பட உதவுகிறது.

2. **சூழல் புரிதல்**: இந்த மாதிரிகள் உரையாடல்களின் சிக்கலான சூழல் நுணுக்கங்களைப் புரிந்துகொள்வதில் சிறந்து விளங்குகின்றன, இதன் விளைவாக பயனர்களுடன் ஒத்திசைக்கும் மிகவும் துல்லியமான மற்றும் பொருத்தமான பதில்கள் கிடைக்கின்றன.

3. **சில-ஷாட் கற்றல்**: GenAI மாதிரிகளை குறைந்தபட்ச எடுத்துக்காட்டுகளுடன் பயிற்சி அளிக்க முடியும், இது பயிற்சி செயல்முறையை நெறிப்படுத்துகிறது மற்றும் வெளிப்படையான நோக்கம் மற்றும் நிறுவன வரையறைகளைச் சார்ந்திருப்பதைக் குறைக்கிறது.

4. **இயற்கை மொழி உருவாக்கம்**: GenAI/LLM கள் உரை உருவாக்கும் திறனைக் கொண்டுள்ளன, இது இயற்கை மற்றும் சூழல் சார்ந்த பதில்களை வழங்கும் சாட்போட்கள் மற்றும் பிற NLP பயன்பாடுகளை உருவாக்க அவர்களுக்கு அதிகாரம் அளிக்கிறது.

உரையாடல் AI இன் எதிர்காலம், இயற்கையாகவே கற்றுக்கொண்டு தகவமைக்கக்கூடிய அமைப்புகளைச் சார்ந்துள்ளது, இது பயனர்களுக்கு தடையற்ற மற்றும் உள்ளுணர்வு அனுபவத்தை வழங்குகிறது. GenAI/LLM-அடிப்படையிலான NLU இந்த பரிணாம வளர்ச்சியை உள்ளடக்கியது, இது பாரம்பரிய நோக்கம்/நிறுவனம் சார்ந்த அமைப்புகளின் வரம்புகளைத் தாண்டிய ஒரு மாறும் மற்றும் நெகிழ்வான அணுகுமுறையை வழங்குகிறது.

சுருக்கமாக, NLU இன் மேலோங்கிய பாதை, GenAI/LLM-அடிப்படையிலான அணுகுமுறைகளின் எழுச்சியால் சந்தேகத்திற்கு இடமின்றி வரையறுக்கப்படுகிறது, இது தகவமைப்பு, சூழல் மற்றும் பயனர் மையப்படுத்தலுக்கு முன்னுரிமை அளிக்கும் உரையாடல் AI இன் புதிய சகாப்தத்தை அறிவிக்கிறது.

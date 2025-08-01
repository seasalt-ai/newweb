---
title: "டெமோவிலிருந்து வெற்றிக்கு: நவீன கூட்டங்களின் பேச்சு الگொரிதம்களை கடந்தது (3/5)"
metatitle: "டெமோவிலிருந்து வெற்றிக்கு (3/5): நவீன கூட்டங்களின் பேச்சு الگொரிதம்கள்"
date: 2021-07-30T17:43:38-07:00
modified_date: 2025-07-29T00:00:00Z
author: Cody Kim, Shayne Mei
image: "images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/SeaMeet animation.gif"
draft: false
description: "இந்த பிளாக் தொடரின் மூன்றாவது பகுதியில், Seasalt.ai உருவாக்கிய SeaMeet, நவீன கூட்டங்களுக்கான ஒத்துழைப்பு தீர்வை உருவாக்கும் பயணத்தை பின்தொடருங்கள்."
tags: ["SeaMeet"]
weight: 1  
canonicalURL: "/blog/seameet-voice-speech-recognition/"
url: "/blog/seameet-voice-speech-recognition/"
aliases:
    - /blog/5-seameet-voice-intelligence-meeting-transcription-speech-recognition-algorithm-of-modern-meeting/
---

*இந்த பிளாக் தொடரில், Seasalt.ai உருவாக்கிய முழுமையான நவீன கூட்ட அனுபவத்தை பின்தொடருங்கள், ஆரம்பத்தில் இருந்து, பல்வேறு ஹார்ட்வேர் மற்றும் மாதிரிகளில் சேவையை மேம்படுத்துதல், நவீன NLP அமைப்புகளை ஒருங்கிணைத்தல், மற்றும் SeaMeet, நவீன கூட்டங்களுக்கான ஒத்துழைப்பு தீர்வை முழுமையாக உருவாக்குதல் வரை.*

## الگொரிதம்களை கடந்தது
Modern Meetings ஒரு சிறந்த டெமோவாக இருந்தது, ஆனால் அது டெமோவாகவே இருந்தது. அதை உற்பத்திக்கு தயாராக்க இன்னும் பல வழிகள் உள்ளன. Microsoft Azure stack-ஐ பயன்படுத்தி டெமோ பதிப்பை முதலில் வெற்றிகரமாக செயல்படுத்தினோம். ஆனால் மென்பொருளின் அனைத்து குறைகளை அறிந்த பிறகு, الگொரிதம்களை எங்களுடையவற்றால் மாற்றி, அனுபவத்தை மேலும் மென்மையாகவும், எளிதாகவும், நெகிழ்வாகவும் மாற்றினோம்.
Modern Meetings-இன் நான்கு முக்கிய கூறுகள்:

1. மைக்ரோஃபோன் அரேவில் சிக்னல் செயலாக்கம், குறிப்பாக beam forming
2. பேச்சாளர் பிரித்தல் மற்றும் அடையாளம் காணுதல்
3. தனிப்பயன் பேச்சு شناختம்
4. சிறந்த UI

அடுத்ததாக, முக்கிய கூறுகளை விரிவாக விளக்குகிறோம்.

<center>
<img src="/images/blog/5-seameet-voice-intelligence-meeting-transcription-speech-recognition-algorithm-of-modern-meeting/tech-stack.png" alt="SeaMeet architect with 4 major components"/>

*Modern Meetings-இன் நான்கு முக்கிய கூறுகளை எங்களுடைய தொழில்நுட்பத்துடன் மாற்றியமைத்தோம்: 1. மைக்ரோஃபோன் அரேவில் சிக்னல் செயலாக்கம்; 2. பேச்சாளர் பிரித்தல் மற்றும் அடையாளம் காணுதல்; 3. தனிப்பயன் பேச்சு شناختம்; 4. நவீன வலை UI.*
</center>

### மைக்ரோஃபோன் அரேவில் சிக்னல் செயலாக்கம்
ஒரு தனி நெருக்கமான மைக்ரோஃபோனுடன் ஒப்பிடும்போது, மைக்ரோஃபோன் அரே 360 டிகிரி எல்லா திசைகளிலும், 5 மீட்டர் தூரம் வரை குரலை பிடிக்கிறது. எனவே, ஒரு மைக்ரோஃபோன் அரே 10x10 மீட்டர் அளவுள்ள நடுத்தர கூட்ட அறையில் குரலை சேகரிக்க முடியும். அனைத்து மைக்ரோஃபோன்களும் ஒரு சாதனத்தில் சேர்க்கப்பட்டுள்ளதால், அறையில் கம்பிகள் குறைகிறது மற்றும் அமைப்பு, பராமரிப்பு எளிதாகிறது.
மைக்ரோஃபோன் அரேவை பயன்படுத்துவதன் நோக்கம், எங்கள் மாதிரிகளுக்கு சிறந்த தரமான தரவை வழங்குவது. ஆகவே, தானாக பேச்சு شناختத்திற்கு முன், பல சிக்னல் செயலாக்க الگொரிதம்கள் செய்யப்படுகின்றன. எங்கள் preprocessing pipeline-இன் முக்கிய கூறு beamforming الگொரிதம். சுற்று, பல மைக்ரோஃபோன் அரேவை பயன்படுத்துவதால், ஒலி பல மைக்ரோஃபோன்களுக்கு அடையும் சிறிய நேர வேறுபாட்டை பயன்படுத்த முடிகிறது. beamforming-இன் வேலை, சிக்னலின் முக்கிய அம்சங்களை (சிறந்த beam) கண்டறிந்து, அந்த அதிர்வெண்களை அதிகரித்து, தேவையற்ற ஒலிகளை குறைக்கும். விளைவாக, denoising மற்றும் dereverberation, முக்கிய சிக்னல் (பேச்சு) அதிகம் மற்றும் தெளிவாகிறது.

பல beamforming الگொரிதம்களின் சிறந்த செயல்பாட்டிற்கு, மூலத்தின் (பேச்சாளர்) துல்லியமான இடத்தை மைக்ரோஃபோனுடன் ஒப்பிட வேண்டும். ஆனால் உண்மையான பயன்பாட்டில் இது சாத்தியமில்லை, எனவே முதலில் source-இன் திசையை கண்டறிந்து, far field weights-ஐ கணக்கிடுகிறோம். இந்த முதல் படி source localization அல்லது Direction of Arrival (DOA) எனப்படுகிறது, இது சிரமமானது. முக்கிய பிரச்சனை smoothing. الگொரிதம் சரியான முடிவை அளிக்கிறது, ஆனால் source 30 டிகிரி இருபுறமும் மாறுகிறது, இது beamforming-ஐ பாதிக்கிறது. எங்கள் தீர்வு, source localization الگொரிதம் மனித பேச்சு அடங்கும் அதிர்வெண்கள் மட்டுமே பயன்படுத்த வேண்டும். இதை smoothing technique-உடன் இணைத்து, DOA முடிவுகளின் "வரலாறு" வைத்திருப்போம். நம்பகமான DOA முடிவுகளுடன், far field weights-ஐ கணக்கிட்டு, சிறந்த beam-ஐ கண்டறியலாம்.

Kinect DK-இல் beamforming, denoising, dereverberation, source localization الگொரிதம்கள் மூலம், நேரடி நேரத்தில் தெளிவான, மேம்படுத்தப்பட்ட மனித பேச்சை உருவாக்க முடிந்தது, பேச்சாளர் திசையை கண்டறியவும் முடிந்தது. இது அடுத்த படியில் பேச்சாளர் அடையாளம் காண உதவும்.

### பேச்சாளர் பிரித்தல் மற்றும் அடையாளம் காணுதல்

நவீன கூட்ட transcription அமைப்பின் அடுத்த கூறு, தானாக பேச்சாளர் شناختம். கடந்த பகுதியில்சொன்னபடி, பேச்சாளர் தகவல் இல்லாமல் குழப்பமான உரையாடல் உரையை படிப்பது சிரமம், அமைப்பின் நோக்கத்தை இழக்கிறது. இங்கே பேச்சாளர் شناختம் முக்கியம்.

இந்த கூறு மூலம், transcription மற்றும் audio-ஐ பேச்சாளர் பெயருடன் தானாக ஒழுங்குபடுத்தலாம். இதை செய்ய, diarization எனப்படும் செயல்முறை பயன்படுத்தப்படுகிறது, audio பகுதிகளை பதிவு செய்யப்பட்ட பேச்சாளர் எண்ணிக்கைக்கு ஏற்ப குழுக்களாக பிரிக்கிறது. இது Voice Activity Detection (VAD) மூலம் speech பகுதிகளை கண்டறிந்து, குறுகிய window-இன் vector representation-ஐ எடுக்கிறது. ஒவ்வொரு window-இல் எடுக்கப்பட்ட vector utterance-level xvector, சராசரி செய்தால் speaker-level xvector. இவை clustering الگொரிதம் மூலம், ஒவ்வொரு cluster-இல் ஒரே பேச்சாளருக்கான speech பகுதிகள். clustering الگொரிதம் தேர்வு diarization செயல்பாட்டை பாதிக்கிறது, spectral clustering மற்றும் thresholded affinity matrix, Normalized Maximum Eigengap (NME) values-ஐ auto-tune செய்து, சிறந்த Diarization Error Rate (DER) கிடைத்தது. இறுதியில், ஒவ்வொரு cluster-ஐ எந்த பேச்சாளர் என தீர்மானிக்க வேண்டும். கூட்டத்திற்கு முன், ஒவ்வொரு பேச்சாளரின் 40-வினாடி பதிவு மூலம் xvector எடுத்து, cluster-ஐ ஒப்பிட்டு பேச்சாளர் அடையாளம் காணலாம்.

இந்த pipeline-இன் அழகு flexibility. பல கூட்டங்களில், ஒவ்வொரு பேச்சாளரின் பதிவு முன்பே பெறுவது சாத்தியமில்லை. VIP வாடிக்கையாளர்களுடன் கூட்டங்கள், 50 பேச்சாளர்கள் கொண்ட பெரிய கருத்தரங்குகள். அப்போது enrollment படி தவிர்த்து, diarization அமைப்பு speech பகுதிகளை பிரிக்க முடியும். ஒவ்வொரு cluster-இல் சில விநாடிகள் மனிதர் கேட்டு, பேச்சாளர் அடையாளம் காணலாம். நவீன UI-யுடன், அதே செயல்பாடு, அதிக flexibility-யுடன் வழங்கலாம்.

### தனிப்பயன் பேச்சு شناختம்

Microsoft meeting transcriber-ஐ அறிந்த பிறகு, அதன் பலவீனங்களை அறிந்து, எங்கள் அமைப்பை முழுமையாக சுயாதீனமாக்க தயாராக இருந்தோம். Modern Meetings மற்றும் transcription தயாரிப்புகளின் driving force Automatic Speech Recognition (ASR) மாதிரிகள். எனவே, அதிக கவனம் இதற்கு.
Azure Cognitive Services பல மொழிகள் மற்றும் பாங்குகளுக்கான மாதிரிகள் வழங்குகிறது. ஆனால் பாங்குகளுக்கு இடையே செயல்பாடு வேறுபாடு தெரியவில்லை. English பாங்குகளுக்கு, பெரும்பாலான data மற்றும் முயற்சி US English மாதிரிக்கு, பிறகு accented data-இல் fine-tune செய்து, பல பாங்கு மாதிரிகள் உருவாக்கப்பட்டது. distinct model வழங்கினால், அது குறிப்பிட்ட பயன்பாட்டுக்கு tune செய்ய வேண்டும். இதற்கு ஆயிரக்கணக்கான மணி நேரம் local audio மற்றும் transcription, பல வாரங்கள் training மற்றும் finetuning. ஆனால் ஒவ்வொரு epoch-இல் model மேம்படுவது, நாங்கள் வாக்குறுதியளித்ததை நிறைவேற்றுவது மகிழ்ச்சி.

மூல மாதிரி உறுதியானதும், usability மற்றும் customizability-ஐ விரிவாக்குவது அடுத்த படி. ஒவ்வொரு துறைக்கும் தனிப்பட்ட சொற்கள், ASR மாதிரிகள் அவற்றை பொதுவான, ஒத்த ஒலியுள்ள சொற்களிலிருந்து வேறுபடுத்த சிரமம்.

எங்கள் பதில் SeaVoice, centralized location, பயனர்கள் தங்கள் தேவைக்கு models-ஐ எளிதில் tune செய்யலாம்.

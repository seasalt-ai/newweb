---
title: "SeaVoice STT/TTS Discord Bot: बैकएंड और स्थिरता में सुधार"
date: 2022-12-13T11:58:34-08:00
draft: false
author: Sydney Burgess, Kim Dodds, Drake Farmer, Jack Harvison, Dylan Strong, Cody Vernon
description: नवीनतम रिलीज़ के साथ, SeaVoice Discord Bot बड़े पैमाने पर बैकएंड सुधार लॉन्च करता है जो बॉट की स्थिरता और भविष्य के विकास में सुधार करते हैं।
weight: 1
tags: ["SeaVoice", "Discord"]
image: images/blog/27-discord-backend-improvements/seavoice-discord-stt-tts-bot-backend-improvements.jpg
canonicalURL: "/blog/seavoice-discord-backend-improvements/"
url: "/blog/seavoice-discord-backend-improvements/"
modified_date: "2025-07-28T16:56:53Z"
---

*SeaVoice Discord Bot ने Discord वॉयस चैनलों में भाषण को प्रतिलेखित करने के लिए सबसे अच्छे विकल्पों में से एक के रूप में लोकप्रियता हासिल की है। नवीनतम रिलीज़ के साथ, हम बड़े पैमाने पर बैकएंड सुधार लॉन्च कर रहे हैं जो बॉट की स्थिरता में सुधार करते हैं और भविष्य के विकास में सहायता करते हैं।*

# SeaVoice को याद है: डेटाबेस ऑनलाइन!

सभी को नमस्कार, हाल ही में हम SeaVoice Discord Bot के लिए कुछ पर्दे के पीछे काम कर रहे हैं जिसे हम साझा करना चाहेंगे!

जैसा कि आपने हमारी पिछली ब्लॉग पोस्ट में देखा, हमने SeaVoice Bot के लिए कई सुविधाएँ जोड़ी हैं, जैसे हमारी नई कॉल रिकॉर्डिंग और प्रतिलेखन। इन विकासों के साथ-साथ हमने SeaVoice Discord Bot को यह याद रखने की क्षमता दी है कि उसने क्या किया है: कमांड से लेकर त्रुटि लॉगिंग तक सब कुछ। अब जब बॉट आपसे बात करता है, या आप इसे कॉल रिकॉर्ड करने के लिए उपयोग करते हैं, तो वह सारी जानकारी एक व्यवस्थित तरीके से सहेजी जाती है।

## इसका उपयोगकर्ताओं के लिए क्या मतलब है
अब आप पूछ सकते हैं कि इसका आपके लिए क्या मतलब है?

खैर, शुरुआत के लिए, हमारी नई प्रतिलेखन और ऑडियो डाउनलोड सुविधा इन बैकएंड सुधारों के बिना संभव नहीं होगी! अब हम आपके द्वारा अनुभव की जाने वाली किसी भी दुर्भाग्यपूर्ण क्रैश को स्वचालित रूप से संग्रहीत कर सकते हैं ताकि हमारी विकास टीम आपको नोटिस करने से पहले इन समस्याओं को ठीक करना शुरू कर सके। इसके अतिरिक्त, यदि कोई यह तय करता है कि वे अब अपने डेटा को हमारे सिस्टम में संग्रहीत नहीं करना चाहते हैं, तो यह नया संगठन हमें सर्वर, चैनल, उपयोगकर्ता, तिथि आदि के अनुसार किसी भी डेटा को जल्दी से खोजने, पुनः प्राप्त करने और/या हटाने की अनुमति देता है।

इससे भी अधिक, यह सांख्यिकी ट्रैकिंग, ऑटो-मॉडरेशन और बहुत कुछ जैसी नई सुविधाओं के लिए द्वार खोलता है। मॉडरेटर, क्या आप यह सुनिश्चित करना चाहेंगे कि आपके सर्वर के नियमों का पालन किया जा रहा है या यह जांचना चाहेंगे कि आपके सर्वर में बॉट का कितनी बार उपयोग किया जाता है? शायद आप पिछले सप्ताह हुई उस प्रफुल्लित करने वाली बातचीत को देखना चाहते हैं? डेटाबेस फ्रेमवर्क अब मजबूती से स्थापित हो गया है और उत्पादन बॉट में उपयोग किया जाता है, नई सुविधाओं की एक विस्तृत विविधता अधिक आसानी से पहुंच के भीतर है।

## डेटा गोपनीयता

स्वाभाविक रूप से, जब भी हम उपयोगकर्ता डेटा को सहेजने की बात करते हैं, तो डेटा गोपनीयता और सुरक्षा का प्रश्न उठता है। यहां कुछ प्रमुख बिंदु दिए गए हैं कि हम आपके डेटा को कैसे संभालते हैं:
- सभी उपयोगकर्ता डेटा एक सुरक्षित रिमोट सर्वर पर संग्रहीत होता है, जिसे केवल कुछ चुनिंदा Seasalt.ai कर्मचारी ही एक्सेस कर सकते हैं।
- SeaVoice केवल Discord द्वारा प्रदान किए गए डेटा को रिकॉर्ड करता है जो उपयोगकर्ता SeaVoice बॉट के साथ इंटरैक्ट करते समय प्रदान करते हैं; इसमें शामिल हैं:
    - सर्वर, चैनल, उपयोगकर्ता नाम और आईडी
    - `/speak` कमांड में दर्ज किया गया टेक्स्ट
    - बॉट `/recognize` कमांड निष्पादित करते समय वॉयस चैनल में बोला गया ऑडियो
- इस डेटा का उपयोग केवल Seasalt.ai द्वारा सेवाओं को बेहतर बनाने के लिए किया जाएगा।
- आप किसी भी समय अपने सभी या किसी भी डेटा को हटाने का अनुरोध कर सकते हैं।

पूर्ण विवरण के लिए, कृपया [Seasalt.ai गोपनीयता नीति](https://seasalt.ai/privacy/) देखें।

## भविष्य की दिशाएँ

अपडेट का यह हिस्सा बहुत अधिक ध्यान देने योग्य नहीं होगा, लेकिन हमारे लिए कठिन हिस्सा खत्म हो गया है, और अब हम उन परियोजनाओं पर काम करना शुरू कर सकते हैं जो आपको SeaVoice Discord Bot को अपनी कल्पना से भी अधिक अनुकूलित और उपयोग करने की अनुमति देंगे।
क्षितिज पर एक सुविधा अनुकूलन योग्य सर्वर और/या उपयोगकर्ता कॉन्फ़िगरेशन है।
डेटाबेस के साथ, यह हमें भविष्य में वरीयताओं को सहेजने की अनुमति देगा, जैसे कि आप यह याद दिलाना चाहते हैं कि वॉयस चैट रिकॉर्ड किया जा रहा है, कॉल प्रतिलेखन का डाउनलोड लिंक किसे प्राप्त होता है, या कौन रिकॉर्ड होने से ऑप्ट-आउट करना चाहता है।

क्या आपके पास कोई विचार है जिसे आप जोड़ना चाहेंगे अब जब हम डेटा सहेज सकते हैं? [आधिकारिक SeaVoice Discord Server](https://discord.gg/dfAYfwBQ) पर हमें कुछ सुझाव भेजने के लिए स्वतंत्र महसूस करें!

<center>
<iframe src="https://discordapp.com/widget?id=919037515514654721&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
</center>

## इसे आज़माएं!

और यदि आपने अभी तक SeaVoice Bot का नवीनतम रिलीज़ नहीं आज़माया है, तो इसे आज़माएं! [SeaVoice Discord Bot](https://discord.com/oauth2/authorize?client_id=1001955060210749492&scope=bot) को अपने सर्वर पर आमंत्रित करें।
आप [SeaVoice Bot दस्तावेज़](https://wiki.seasalt.ai/seavoice/discord/discord-bot/) को भी पढ़ने के लिए स्वतंत्र महसूस करें ताकि यह देख सकें कि आप बॉट का उपयोग अपनी समुदाय की जरूरतों को पूरा करने के लिए कैसे कर सकते हैं।

आने वाले कुछ रोमांचक अपडेट के लिए बने रहें!

धन्यवाद,

SeaVoice बॉट टीम।

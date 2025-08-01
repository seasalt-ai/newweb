---
title: "डेमो से सफलता तक: हार्डवेयर से परे (5/5)"
metatitle: "डेमो से सफलता तक (5/5): हार्डवेयर से परे"
date: 2021-09-15T17:24:32-07:00
author: Cody Kim
image: "images/blog/3-implementing-Microsoft-modern-meetings-and-beyond/SeaMeet animation.gif"
draft: false
description: "इस ब्लॉग श्रृंखला के अंतिम भाग में, SeaMeet, हमारे सहयोगी आधुनिक मीटिंग समाधानों को बनाने के लिए Seasalt.ai की यात्रा का अनुसरण करें।"
tags: ["SeaMeet"]
weight: 1 
canonicalURL: "/blog/seameet-voice-hardware/"
url: "/blog/seameet-voice-hardware/"
aliases:
    - /blog/7-seameet-voice-intelligence-meeting-transcription-hardware/
modified_date: "2025-07-28T16:56:53Z"
---

*इस ब्लॉग श्रृंखला के दौरान, Seasalt.ai की एक अच्छी तरह से आधुनिक मीटिंग अनुभव बनाने की यात्रा का अनुसरण करें, इसकी विनम्र शुरुआत से लेकर, विभिन्न हार्डवेयर और मॉडलों पर हमारी सेवा का अनुकूलन करने, अत्याधुनिक एनएलपी सिस्टम को एकीकृत करने और अंत में SeaMeet, हमारे सहयोगी आधुनिक मीटिंग समाधानों की पूर्ण प्राप्ति पर समाप्त होने तक।*

## आधुनिक बैठकों से परे

यहां Seasalt.ai में, हमने इस उत्पाद के बिल्ड 2019 डेमो से प्रदर्शित वर्तमान क्षमताओं की प्रशंसा की, लेकिन हम यह देखने में अधिक रुचि रखते हैं कि यह उत्पाद क्या बन सकता है, बातचीत प्रतिलेखन को नकल से परे कैसे ले जाया जाए। लेकिन इससे पहले कि आप प्रतिस्पर्धा को हरा सकें, आपको पहले उस खेल को गहराई से समझना होगा जिसे आप खेल रहे हैं। और बस ऐसे ही SeaMeet का जन्म हुआ। अपनी शैशवावस्था में हमने Azure को एक ठोस प्रतिलेखन सेवा बनाने वाले नींव को समझने के लिए एक मॉडल के रूप में देखा और इस स्थापित तकनीक का उपयोग करने के लिए Azure स्पीच सेवाओं को अपने बैकएंड के रूप में इस्तेमाल किया।

किसी भी युवा उत्पाद की तरह, चुनौतियाँ तुरंत सामने आईं। अपने उत्पाद को लॉन्च करने के लिए उत्सुक, हमने Microsoft के Kinect DK माइक्रोफोन ऐरे का उपयोग करने का विकल्प चुना, जिसे स्पीच सेवाओं के हार्डवेयर-समकक्ष के रूप में प्रचारित किया गया था और कथित तौर पर Azure के स्वचालित स्पीच रिकॉग्निशन मॉडल से सबसे इष्टतम प्रदर्शन प्राप्त करने के लिए ट्यून किया गया था। हालांकि यह एक निर्विवाद रूप से अच्छी तरह से निर्मित, अच्छी तरह से डिज़ाइन किया गया उपकरण है, इसमें एक पूर्ण एल्यूमीनियम आवास, एक विस्तृत कोण लेंस, एक गहराई कैमरा और 7-माइक्रोफोन ऐरे शामिल है। इसकी कीमत भी लगभग $400 है। अप्रैल 2021 से, Kinect DK में गंभीर अंडरस्टॉक समस्या थी। सितंबर 2021 में आज भी यह स्टॉक से बाहर है। इसने इस बात पर और जोर दिया कि Kinect हमारे लिए उपकरण नहीं है।

<center>
<img src="/images/blog/7-seameet-voice-intelligence-meeting-transcription-hardware/kinect_store_page.png"/>

*यह लेख प्रकाशित होने के समय (2021/9) Azure Kinect DK 2021/4 से स्टॉक से बाहर था।*
</center>

माइक्रोफोन ऐरे वार्तालाप प्रतिलेखन पाइपलाइन में पहला घटक है। एक प्रतिलेखन सेवा के प्रदाताओं के रूप में, हमें अपने हार्डवेयर को स्थायी रूप से और विश्वसनीय रूप से स्रोत करने में सक्षम होना चाहिए।

सही माइक्रोफोन ऐरे खोजने की हमारी यात्रा ने हमें दो विकल्पों तक पहुंचाया: [Respeaker Array v2.0](https://www.seeedstudio.com/ReSpeaker-Mic-Array-v2-0.html) और [Respeaker Core v2.0](https://www.seeedstudio.com/ReSpeaker-Core-v2-0.html)। ये दोनों डिवाइस गोलाकार ऐरे हैं, क्रमशः चार और छह माइक्रोफोन के साथ, जो 360 डिग्री स्रोत स्थानीयकरण करने और इन नए उपकरणों को हमारे मौजूदा सिस्टम में आसानी से एकीकृत करने में सक्षम होने के लिए एक महत्वपूर्ण विशेषता है। इन उपकरणों की वास्तविक सुंदरता यह है कि वे शोर कम करने, इको रद्द करने और बीमफॉर्मिंग सहित ऑन-बोर्ड सिग्नल प्रोसेसिंग एल्गोरिदम के साथ आते हैं जो माइक के आयामों के लिए पूरी तरह से ट्यून किए गए हैं।

<center>
<img src="/images/blog/7-seameet-voice-intelligence-meeting-transcription-hardware/respeaker_array.png" alt="Respeaker Array v2.0 VAD और स्रोत स्थानीयकरण का प्रदर्शन कर रहा है"/>

*Respeaker Array v2.0 VAD और स्रोत स्थानीयकरण का प्रदर्शन कर रहा है*
</center>

<center>
<img src="/images/blog/7-seameet-voice-intelligence-meeting-transcription-hardware/array_demo.jpg" alt="Respeaker Array v2.0 के साथ लाइव मीटिंग डेमो"/>

*Respeaker Array v2.0 के साथ लाइव मीटिंग डेमो*
</center>

चार माइक्रोफोन ऐरे v2.0 के लिए, जो पूरी तरह से एक USB पोर्ट द्वारा संचालित था, इसका मतलब था कि उपयोगकर्ता के कंप्यूटर को केवल सर्वर पर ऑडियो स्ट्रीम करने पर ध्यान केंद्रित करना था। यह सिग्नल प्रोसेसिंग को माइक्रोफोन ऐरे पर ऑफलोड करता है।


<center>
<img src="/images/blog/7-seameet-voice-intelligence-meeting-transcription-hardware/core_demo.png" alt="डेमो के साथ Respeaker Core v2.0 चित्रित"/>

*डेमो के साथ Respeaker Core v2.0 चित्रित*
</center>

इससे भी अधिक आकर्षक ARM प्रोसेसर और 1GB RAM से लैस Core v2.0 है। एक पूर्ण लिनक्स वितरण चलाने में सक्षम और हमारे क्लाइंट स्क्रिप्ट को चलाने के लिए पर्याप्त प्रसंस्करण शक्ति के साथ, हमने न केवल इस डिवाइस के साथ उपयोगकर्ता के कंप्यूटर से प्रसंस्करण को ऑफलोड किया है, बल्कि हमने माइक्रोफोन से जुड़े कंप्यूटर की आवश्यकता को पूरी तरह से समाप्त कर दिया है। चूंकि माइक्रोफोन ऐरे अब भारी प्रसंस्करण कर रहे हैं, हमने अपने उत्पाद को चलाने के लिए आवश्यक हार्डवेयर आवश्यकताओं को कम कर दिया है और इसलिए प्रभावी रूप से अपने दर्शकों को बढ़ा दिया है जो SeaMeet से लाभ उठा सकते हैं।

<center>
<img src="/images/blog/7-seameet-voice-intelligence-meeting-transcription-hardware/respeaker_core.png" alt="स्वतंत्र माइक्रोफोन प्लेसमेंट का कोर v2.0 उदाहरण"/>

*स्वतंत्र माइक्रोफोन प्लेसमेंट का कोर v2.0 उदाहरण*
</center>

इन माइक्रोफोन ऐरे की एक और अनूठी विशेषता उनके आवास की कमी है। दोनों को नंगे पीसीबी के रूप में माइक्रोफोन, चिप्स और पोर्ट सभी खुले हुए भेजे जाते हैं। जबकि कई इसे एक असुविधा के रूप में देखेंगे, हम इसे एक तरह का उपकरण बनाने का अवसर देखते हैं जो स्पष्ट रूप से Seasalt का है।

    इन उपकरणों के साथ, हम SeaMeet के अपने प्रोटोटाइप पर गांठ बांधते हैं, हमारी बिल्कुल नई, अत्याधुनिक मीटिंग प्रतिलेखन सेवा। और इसके साथ हम अपनी पांच-भाग की श्रृंखला को समाप्त करते हैं, जब SeaMeet Microsoft डेमो से प्रेरित एक बीज के अलावा कुछ भी नहीं था, और एक पूरी तरह से स्वतंत्र उत्पाद के साथ समाप्त होता है। अभी भी अपने शुरुआती चरणों में, SeaMeet की एक रोमांचक यात्रा आगे है क्योंकि हम अपने डायरीकरण प्रणाली, मीटिंग सेंस और भाषा मॉडल को पॉलिश करना जारी रखते हैं। Seasalt.ai की टीम दुनिया के व्यापार करने के तरीके में क्रांति लाना जारी रखने के लिए उत्सुक है।

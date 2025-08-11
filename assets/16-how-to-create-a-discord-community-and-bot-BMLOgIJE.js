const n=`---
title: "डिस्कॉर्ड पर कम्युनिटी और बॉट कैसे बनाएं"
metatitle: "डिस्कॉर्ड पर कम्युनिटी और बॉट कैसे बनाएं"
date: 2025-08-07 10:11:05
author: SeaHealth Editorial Team
description: "हिंदी उपयोगकर्ताओं के लिए डिस्कॉर्ड पर कम्युनिटी और ऑटोमेटेड बॉट बनाने की पूरी प्रक्रिया, SEO टिप्स के साथ।"
---


# डिस्कॉर्ड पर कम्युनिटी और बॉट कैसे बनाएं

Discord भारत में ऑनलाइन कम्युनिटी के लिए लोकप्रिय प्लेटफॉर्म है। इस लेख में आप जानेंगे कि कैसे सर्वर बनाएं और ऑटोमेटेड बॉट सेट करें।

## चरण 1: Discord सर्वर बनाएं

1. Discord पर अकाउंट बनाएं और लॉगिन करें।
2. बाईं ओर “+” आइकन पर क्लिक करके नया सर्वर बनाएं।
3. “Create My Own Server” चुनें, नाम और क्षेत्र सेट करें।

## चरण 2: सदस्यों को आमंत्रित करें

- सर्वर नाम पर क्लिक करें, “Invite People” चुनें।
- इनवाइट लिंक कॉपी करें और दोस्तों या ग्रुप्स में शेयर करें।

## चरण 3: ऑटोमेटेड बॉट सेट करें

1. Discord Developer Portal पर जाएं, नया एप्लिकेशन बनाएं।
2. Bot जोड़ें और Token प्राप्त करें।
3. Node.js या Python (discord.js अनुशंसित) से बॉट बनाएं।
4. बॉट को सर्वर पर होस्ट करें ताकि वह 24x7 चले।

## ऑटोमेशन के उदाहरण

- वेलकम मैसेज
- कीवर्ड पर ऑटोमेटेड रिप्लाई
- एडमिन कमांड्स
- रिपोर्ट और स्टैटिस्टिक्स

## SEO टिप्स

- टाइटल में “Discord”, “कम्युनिटी”, “बॉट” जैसे कीवर्ड शामिल करें
- लेख को स्पष्ट सेक्शन में बांटें
- हिंदी उपयोगकर्ताओं के सामान्य सवालों के जवाब दें

# सर्वर स्थापित करना

## एक नया Discord सर्वर बनाएं
Discord एप्लिकेशन के भीतर से, नीचे बाईं ओर “Add Server” बटन पर क्लिक करें।

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/create-new-discord-server.png" alt="एक नया Discord सर्वर बनाना।"/>

*एक नया Discord सर्वर बनाते समय प्रॉम्प्ट।*
</center>

यदि आप कुछ चैनलों के साथ शुरुआत करना चाहते हैं जो आपके लिए बनाए गए हैं, तो आप एक टेम्पलेट से चुन सकते हैं, या आप एक खाली स्लेट से शुरू कर सकते हैं। और पहला कदम उतना ही आसान है, आपका सर्वर बन गया है!

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/new-discord-server.png" alt="एक नया बनाया गया Discord सर्वर।"/>

*एक नया बनाया गया Discord सर्वर।*
</center>

## सर्वर को "कम्युनिटी सर्वर" में बदलें

Discord सर्वर की "कम्युनिटी" सुविधाओं को सक्षम करने की अत्यधिक अनुशंसा की जाती है। एक कम्युनिटी सर्वर में परिवर्तित करके, आप अतिरिक्त उपकरण सक्षम करते हैं जो सर्वर को मॉडरेट करने, चलाने और विकसित करने में मदद कर सकते हैं। विशेष रूप से, कम्युनिटी सर्वर में निम्नलिखित सुविधाओं तक पहुंच होती है:

- **वेलकम स्क्रीन**: नए उपयोगकर्ताओं को आपके सर्वर से परिचित कराता है
- **अनाउंसमेंट चैनल**: आपको अपने उपयोगकर्ताओं को संदेश प्रसारित करने की अनुमति देता है
- **सर्वर इनसाइट्स**: अपने समुदाय और उपयोगकर्ताओं के बारे में विश्लेषण देखें
- **डिस्कवरी**: Discord की सर्वर डायरेक्टरी पर अपने समुदाय का विज्ञापन करें

ऊपर बाईं ओर सर्वर नाम के बगल में, ड्रॉप डाउन पर क्लिक करें और “Server Settings” चुनें। बाईं ओर “Enable Community” टैब पर क्लिक करें और “Get Started” चुनें।

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/convert-to-community-discord-server.png" alt="एक नियमित Discord सर्वर को कम्युनिटी सर्वर में बदलना।"/>

*कम्युनिटी सर्वर सेटिंग्स को सक्षम करना।*
</center>

आवश्यक सेटअप के माध्यम से आगे बढ़ें। कम्युनिटी को सक्षम करने के लिए आपके सर्वर को उपयोगकर्ताओं के लिए अतिरिक्त सत्यापन करने, एक चैट फ़िल्टर सक्षम करने और एक नियम चैनल स्थापित करने की आवश्यकता होती है।

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-community-setup.png" alt="एक कम्युनिटी Discord सर्वर के लिए सेटअप।"/>

*कम्युनिटी सर्वर स्थापित करना।*
</center>

एक बार जब आप कम्युनिटी को सक्षम कर लेते हैं, तो आपके पास कई नई सुविधाओं तक पहुंच होती है। सबसे उपयोगी सुविधाओं में से दो वेलकम मैसेज और सदस्यता स्क्रीनिंग हैं:

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-server-welcome-page.png" alt="सर्वर वेलकम मैसेज उदाहरण।"/>

*सर्वर वेलकम मैसेज उदाहरण।*

<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-server-membership-screening.png" alt="सदस्यता स्क्रीनिंग सेटिंग्स।"/>

*सदस्यता स्क्रीनिंग सेटिंग्स।*
</center>

## चैनल, इवेंट और अन्य सुविधाएँ सेट करें
कम्युनिटी सर्वर स्थापित करने के बाद, आपके पास मुख्य सर्वर पेज से भी नई सुविधाओं तक पहुंच होती है।

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-server-channel-types.png" alt="एक Discord सर्वर में एक नया चैनल बनाना।" style="width:50%"/>

*एक नया चैनल बनाना।*

<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-server-channels.png" alt="एक Discord कम्युनिटी सर्वर के चैनलों का उदाहरण।" style="width:50%"/>

*कम्युनिटी सर्वर चैनल।*
</center>

जब आप एक नया चैनल बनाते हैं, तो आपके पास दो नए चैनल प्रकारों तक पहुंच होती है: अनाउंसमेंट और स्टेज। अनाउंसमेंट चैनल में केवल मॉडरेटर ही पोस्ट कर सकते हैं, और यह आधिकारिक पोस्ट और घोषणाओं के लिए उपयोगी है - बहुत सारे सर्वर में बॉट स्वचालित रूप से अपने आधिकारिक ट्विटर फीड या फोरम पोस्ट को इस चैनल पर पोस्ट करेंगे। "स्टेज" चैनल एक विशेष प्रकार का वॉयस चैनल है जो लाइव दर्शकों के साथ इवेंट होस्ट करने के लिए उपयोगी है। होस्ट के पास अन्य वक्ताओं को मॉडरेट करने की क्षमता होती है (नियमित वॉयस चैनल के विपरीत, जहां यह एक फ्री-फॉर-ऑल है)।

एक बार जब आपका सर्वर पूरी तरह से सेट हो जाता है, तो यह कुछ ऐसा दिख सकता है:

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/customized-discord-server.png" alt="पूरी तरह से अनुकूलित Discord सर्वर।"/>

*पूरी तरह से अनुकूलित कम्युनिटी सर्वर।*
</center>

## प्रचार करें!
एक बार जब आपका सर्वर पूरी तरह से सेट हो जाता है, तो आप लोगों को आमंत्रित करना शुरू कर सकते हैं!
Discord एक मुफ्त प्रीमेड विजेट प्रदान करता है, जिसे आपके सर्वर का विज्ञापन करने के लिए किसी भी वेबसाइट में एम्बेड किया जा सकता है।

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-server-widget.png" alt="Discord सर्वर विजेट सेटिंग्स।"/>

*सर्वर विजेट सेटिंग्स।*

<iframe src="https://discordapp.com/widget?id=966505646944055326&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>

*Seasalt.ai के Near Me Messaging Discord सर्वर के लिए एक कार्यशील विजेट का एक उदाहरण।*

</center>

संभावित उपयोगकर्ताओं के साथ विश्वास बनाने के लिए, आप वैकल्पिक रूप से Discord समर्थन से संपर्क करके अपने सर्वर को सत्यापित करवा सकते हैं। सत्यापन आपके सर्वर नाम के बगल में एक "सत्यापित" आइकन रखेगा जो इंगित करता है कि सर्वर किसी व्यवसाय, ब्रांड और सार्वजनिक हित के व्यक्ति का आधिकारिक रूप से संबद्ध समुदाय है। आप Discord की आधिकारिक साइट पर सत्यापन आवश्यकताओं को देख सकते हैं <mcurl name="Discord's official site" url="https://support.discord.com/hc/en-us/articles/360001107231-Verified-Server-Requirements"></mcurl>।

एक बार जब आपका सर्वर शुरू हो जाता है और उसमें अच्छी संख्या में उपयोगकर्ता होते हैं, तो Discord आपके सर्वर का आंतरिक रूप से विज्ञापन करने के अधिक अवसर प्रदान करता है। जब आपका सर्वर कम से कम 8 सप्ताह पुराना होता है और उसमें 500+ उपयोगकर्ता होते हैं, तो आप Discord साझेदारी के लिए आवेदन कर सकते हैं, जो आपके सर्वर को विशेष भागीदार-अनन्य सुविधाएं प्रदान करता है। एक बार जब आप 1,000+ उपयोगकर्ताओं तक पहुंच जाते हैं, तो आप सर्वर डिस्कवरी में शामिल हो सकते हैं, जो Discord का उपयोग करने वाले किसी भी व्यक्ति को आपके सर्वर को खोजने और उसमें शामिल होने की अनुमति देगा।

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-server-discovery.png" alt="Discord डिस्कवरी सेटिंग्स और आवश्यकताएँ।"/>

*Discord डिस्कवरी सेटिंग्स और आवश्यकताएँ।*
</center>

# Discord बॉट स्थापित करना
अब जब आपने एक सर्वर स्थापित कर लिया है, तो आप कुछ प्रक्रियाओं को स्वचालित करने के लिए एक बॉट जोड़कर इसे बढ़ा सकते हैं, जैसे मॉडरेशन, उपयोगकर्ता प्रतिक्रिया और घोषणाएं। एक साधारण बॉट कैसे स्थापित करें, यह जानने के लिए निम्नलिखित अनुभाग को पढ़ते रहें, और फिर हमारी श्रृंखला में अगले ब्लॉग के लिए बने रहें यह देखने के लिए कि आप अपने Discord सर्वर के भीतर एक पूर्ण ग्राहक सेवा अनुभव को कैसे एकीकृत कर सकते हैं।

## Discord डेवलपर पोर्टल में एक नया बॉट बनाएं
<mcurl name="Discord Developer Portal" url="https://discord.com/developers/applications"></mcurl> पर एक खाता बनाएं। एक “New Application” बनाएं और उसे नाम दें।

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/new-discord-application.png" alt="Discord डेवलपर पोर्टल पर एक नया एप्लिकेशन बनाएं।"/>

*Discord डेवलपर डैशबोर्ड: एप्लिकेशन।*
</center>

अपना नया एप्लिकेशन चुनें और बाईं ओर “Bot” टैब पर क्लिक करें।

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/new-discord-bot.png" alt="एप्लिकेशन की बॉट सेटिंग्स।"/>

*Discord एप्लिकेशन सेटिंग्स।*
</center>

अपना Discord बॉट बनाने के लिए “Add Bot” पर क्लिक करें।

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-bot-settings.png" alt="एक नया Discord बॉट बनाएं।"/>

*एक नया Discord बॉट बनाना।*
</center>

एक बार बन जाने के बाद, बॉट टोकन जनरेट करें और कॉपी करें। अंत में, सुनिश्चित करें कि मैसेजिंग अनुमतियां चालू हैं।

<center>
<img src="/images/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/discord-bot-messaging-permissions.png" alt="Discord बॉट मैसेजिंग अनुमतियां।"/>

*एक नया Discord बॉट बनाना।*
</center>

## PyCord के साथ एक साधारण Discord बॉट बनाएं

हम Discord API के लिए एक Python रैपर के रूप में <mcurl name="PyCord library" url="https://docs.pycord.dev/en/master/"></mcurl> का उपयोग करते हैं।

1. PyCord स्थापित करें और अपने Discord बॉट के लिए एक नई Python फ़ाइल बनाएं।
2. Discord पैकेज आयात करें और Discord क्लाइंट का एक इंस्टेंस बनाएं।
3. क्लाइंट के \`event\` रैपर का उपयोग करके एक \`on_message\` विधि बनाएं। यह विधि बॉट तक पहुंच वाले चैनल पर भेजे गए प्रत्येक संदेश को प्राप्त करेगी।
    a. विधि के भीतर, पहले जांचें कि संदेश बॉट से ही है, और यदि ऐसा है तो अनदेखा करें।
    b. अन्यथा, हम केवल \`$bot\` से शुरू होने वाले संदेशों पर प्रतिक्रिया करके शुरू करेंगे - यदि संदेश इससे शुरू होता है, तो हम उसी चैनल पर \`मुझे आपका संदेश मिल गया!\` कहकर जवाब देंगे।
4. अंत में, स्क्रिप्ट के अंत में, Discord क्लाइंट को चलाना सुनिश्चित करें ताकि वह चैनल में इवेंट्स को सुनना शुरू कर दे।

\`\`\`python
import discord

discord_client = discord.Bot()
discord_token = “xxxxxxxxxxxx”
 
@discord_client.event
async def on_message(message):
    """Listen and react to messages."""
    # Check if the message is from the bot itself
    if message.author == discord_client.user:
        return

    msg = message.content
    if msg.startswith("$bot") or isinstance(message.channel, discord.DMChannel):
        await message.channel.send(“मुझे आपका संदेश मिल गया!”)

discord_client.run(discord_token)
\`\`\`

---

*यह गाइड हिंदी Discord उपयोगकर्ताओं के लिए बनाया गया है ताकि वे सक्रिय कम्युनिटी और ऑटोमेटेड मैनेजमेंट बना सकें।*
`;export{n as default};

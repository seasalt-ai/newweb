const n=`---
title: "Discord (3/3): Discord و Twilio Flex: جلب مركز الاتصال Flex إلى أراضٍ مجهولة"
metatitle: "Discord (3/3): مركز الاتصال Twilio Flex في Discord"
date: 2022-06-07 12:32:24-07:00
modified_date: 2025-01-27 10:30:00+00:00
draft: false
author: Kim Dodds
description: "في هذه المدونة، سنوضح كيف يمكن لـ Seasalt.ai دمج مركز اتصال كامل الوظائف في خادم Discord."
tags:
  - SeaX
  - Discord
image: /images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/flex-discord-thumbnail.png
canonicalURL: /blog/discord-and-twilio
url: /blog/discord-and-twilio/
---

*هذه هي المقالة الأخيرة في سلسلتنا المكونة من ثلاثة أجزاء حول مشاركة العملاء على Discord. ناقشت مقالتنا الأولى ["حدود جديدة لمشاركة العملاء"](https://seasalt.ai/blog/15-discord-a-new-frontier-for-customer-engagement/) الانتشار المتزايد لـ Discord والفرص الجديدة التي يوفرها للعلامات التجارية لإنشاء والمشاركة في مجتمعاتها الإلكترونية الخاصة. في الجزء الثاني ["كيفية إنشاء مجتمع Discord وروبوت لعلامتك التجارية"](https://seasalt.ai/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/)، قدمنا كيفية إنشاء خادم Discord لعلامتك التجارية وكيفية دمج الروبوتات لإدارة مراجعة الخادم والإعلانات وملاحظات المستخدمين وغير ذلك. أخيراً، في هذه المدونة، سنوضح كيف يمكن لـ Seasalt.ai دمج مركز اتصال كامل الوظائف في خادم Discord، مما يتيح للعلامات التجارية التعامل مع جميع جوانب خدمة العملاء على المنصة.*

## جدول المحتويات
- [جدول المحتويات](#table-of-contents)
- [عرض توضيحي لخدمة العملاء على Discord](#discord-customer-service-demo)
- [Twilio Flex](#twilio-flex)
- [SeaX](#seax)
- [الخادم التجريبي](#demo-server)
  - [المساعدة من واحد إلى كثير: القنوات الرسمية](#1-to-many-help-official-channels)
  - [المساعدة من واحد إلى واحد: وكيل خدمة العملاء](#1-to-1-help-customer-service-agent)
    - [قاعدة المعرفة](#knowledge-base)
    - [تحويل الوكيل المباشر](#live-agent-transfer)
  - [إدارة الحالات](#case-management)
- [الغوص التقني العميق](#technical-deep-dive)
  - [تحديد تدفق Flex](#define-the-flex-flow)
  - [إنشاء قناة مخصصة](#create-a-custom-channel)
  - [إنشاء خادم HTTP لدعم التوجيه الأكثر تعقيداً](#create-an-http-server-to-support-more-complex-routing)
    - [Webhook الرسائل الصادرة](#outbound-messages-webhook)
    - [تكامل الروبوت](#bot-integration)
- [الخلاصة](#summary)

# عرض توضيحي لخدمة العملاء على Discord
إذا كنت متشوقاً للوصول إلى النقطة الرئيسية ورؤية المنتج النهائي، سنعرض أولاً الفيديو التجريبي النهائي:

<iframe width="85%" height="450px" src="https://www.youtube.com/embed/iUK4YkGYI6Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>

هدفنا هو توضيح كيفية دمج Discord مع برامج خدمة العملاء الموجودة (في هذه الحالة [Twilio Flex](https://flex.twilio.com/)) لزيادة القيمة المضافة لخوادم العلامة التجارية الرسمية. تابع القراءة للحصول على فهم أعمق لتنفيذنا.

# Twilio Flex
Twilio هي شركة اتصالات ناضجة توفر APIs لإدارة الرسائل النصية والمكالمات الهاتفية ورسائل البريد الإلكتروني ورسائل الدردشة وغير ذلك. Flex هو أحد المنتجات الرئيسية لـ Twilio: مركز اتصال قابل للتوسع قائم على السحابة يمكنه توجيه الرسائل والمكالمات من أي مصدر إلى الوكلاء الافتراضيين والمباشرين. اخترنا Flex كأساس لتكامل مركز الاتصال لأنه يوفر بالفعل دعماً ممتازاً لمختلف القنوات مثل Facebook والرسائل النصية وWhatsApp.

# SeaX
SeaX هو مركز اتصال سحابي متكامل بعمق مع وظائف الذكاء الاصطناعي المتقدمة للمساعدة في تحسين الإنتاجية ورضا العملاء. SeaX هو أحد المنتجات الرئيسية لـ Seasalt.ai وقد تم إطلاقه مع عملاء في أكثر من 150 دولة. منصة مركز الاتصال SeaX مبنية على Twilio Flex وتتضمن وظائف إضافية متنوعة تمكن الوكلاء المباشرين من مساعدة العملاء بشكل أفضل. بعض أكثر الوظائف فائدة تشمل النص إلى الكلام والكلام إلى النص الداخلي وقاعدة المعرفة المدعومة بالذكاء الاصطناعي ونظام إدارة الحالات المتكامل. لمزيد من المعلومات حول جميع وظائف منصة SeaX، يرجى زيارة [الصفحة الرئيسية لـ SeaX](https://seax.seasalt.ai/?utm_source=blog/).

# الخادم التجريبي
الآن سنقدم كيفية إعداد خادم Discord الخاص بنا. لأغراض العرض التوضيحي، تخيلنا سيناريو حيث يتم استخدام خادمنا كمجتمع للعبة مثل Pokémon Go! يوضح الجدول أدناه بعض الوظائف التي نعرضها في خادم Discord التجريبي الخاص بنا.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-features-2.png" alt="نظرة عامة على وظائف خادم Discord التجريبي لخدمة العملاء."/>

*نظرة عامة على وظائف خادم Discord التجريبي.*
</center>

## المساعدة من واحد إلى كثير: القنوات الرسمية
تم إعداد عدة قنوات في الخادم لتوفير تدفق مباشر بين المديرين/المطورين الرسميين واللاعبين.
**قناة الإعلانات** يمكن فقط للمديرين والمشرفين النشر فيها، ويمكن أن تحتوي على منشورات (يدوية أو تلقائية) من حسابات Twitter أو المواقع الإلكترونية أو المصادر الرسمية الأخرى.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-announcement-channel.jpg" alt="قناة الإعلانات على خادم Discord تحتوي على منشورات من الحساب الرسمي على Twitter."/>

*قناة #announcements التجريبية على خادم Discord.*
</center>

**قناة تقارير الأخطاء** تسمح للاعبين بمناقشة الأخطاء والمشاكل التي تعطل اللعبة. يمكن للمديرين مراقبة هذه القناة عن كثب لتحديد أي مشاكل في اللعبة يجب حلها. بالإضافة إلى ذلك، يمكن للمستخدمين استخدام أمر الشرطة المائلة \`/bug\` داخل القناة لتقديم تقرير خطأ رسمي.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-bug-report-channel.jpg" alt="قناة تقارير الأخطاء على خادم Discord تحتوي على تقارير أخطاء مقدمة."/>

*قناة #bug-report التجريبية على خادم Discord تحتوي على تقارير أخطاء مقدمة.*
</center>

**قناة طلبات الميزات** تسمح للاعبين بمناقشة تغييرات اللعب وتحسينات جودة الحياة وإضافات المحتوى وما إلى ذلك التي يرغبون في رؤيتها في اللعبة. مثل قناة طلبات الأخطاء، يمكن رؤية مدخلاتهم من قبل مشرفي Discord الذين يمكنهم استخدام أمر الشرطة المائلة \`/new_feature\` لتقديم طلب رسمي.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-feature-request-channel.jpg" alt="قناة طلبات الميزات على خادم Discord تحتوي على مستخدم ينفذ أمر الشرطة المائلة."/>

*قناة #feature-request التجريبية على خادم Discord تحتوي على مستخدم ينفذ أمر الشرطة المائلة.*
</center>

## المساعدة من واحد إلى واحد: وكيل خدمة العملاء

يمكن للاعبين استخدام أمر الشرطة المائلة \`/helpme\` لتفعيل رسائل مباشرة مع وكيل. يمكن أن يكون وكيل خدمة العملاء آلياً (وكيل افتراضي) أو يعمل بواسطة وكيل مباشر.

للعرض التوضيحي الخاص بنا، أعددنا روبوت FAQ بسيط يستفسر من قاعدة معرفة الشركة لتقديم اقتراحات المقالات ذات الصلة للمستخدمين. يمكن للمستخدمين أيضاً طلب وكيل مباشر وسيتم تحويلهم إلى وكيل مباشر على SeaX في نفس الدردشة.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-customer-service-channel.jpg" alt="قناة خدمة العملاء على خادم Discord تحتوي على مستخدم يفعّل DM."/>

*قناة #feature-request التجريبية على خادم Discord تحتوي على مستخدم يفعّل DM.*
</center>

### قاعدة المعرفة
عندما يقدم المستخدم استفساراً لوكيل الخدمة الافتراضي، يمكن للوكيل إحالة المستخدم إلى المقالات ذات الصلة في قاعدة المعرفة.

### تحويل الوكيل المباشر
بمجرد أن يبدأ المستخدم في الرسائل المباشرة مع الروبوت، يمكنه طلب وكيل مباشر. سيتلقى إشعاراً فورياً بأنه تم إنشاء حالة له وأنه يتم تحويله إلى وكيل مباشر. عندما ينضم الوكيل المباشر إلى الدردشة، سيتلقى إشعاراً أيضاً.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-demo-customer-service-dm.jpg" alt="الرسائل المباشرة مع خدمة العملاء تحتوي على اقتراحات مقالات قاعدة المعرفة وتحويل الوكيل المباشر وإدارة الحالات."/>

*الرسائل المباشرة مع خدمة العملاء تحتوي على اقتراحات مقالات قاعدة المعرفة وتحويل الوكيل المباشر وإدارة الحالات.*
</center>

في الخلفية، يمكن للوكيل المباشر التعامل مع المكالمات ورسائل الدردشة من جميع القنوات (الرسائل النصية وFacebook وDiscord والمكالمات الصوتية وما إلى ذلك) من خلال منصة واحدة. في هذه الحالة، المنصة الخلفية هي SeaX.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/flex-discord-channel.jpg" alt="واجهة SeaX تعرض وجهة نظر الوكيل المباشر في محادثة مع مستخدم Discord."/>

*واجهة SeaX تعرض وجهة نظر الوكيل المباشر في محادثة مع مستخدم Discord.*
</center>

## إدارة الحالات
إحدى الوظائف التي نريد التأكيد عليها في هذا العرض التوضيحي هي إدارة الحالات. حل Discord الخاص بـ Seasalt.ai متكامل مع نظام إدارة الحالات SeaX لتتبع حالات المستخدمين المختلفة بشكل صحيح. عندما يتفاعل المستخدم مع روبوت Discord (مثل طلب وكيل مباشر أو الإبلاغ عن خطأ)، يمكننا فتح حالة جديدة تلقائياً وتسجيل جميع المعلومات المهمة حول المستخدم والمشكلة التي يواجهها. هذا يجعل من السهل على الوكلاء المباشرين الوصول إلى جميع المشاكل المبلغ عنها والتأكد من تتبعهم للمستخدم حتى يتم حل الحالة.

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-new-case.png" alt="إنشاء حالة جديدة في نظام إدارة الحالات SeaX."/>

*إنشاء حالة جديدة في نظام إدارة الحالات SeaX.*

<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-existing-case.png" alt="عرض الحالة الموجودة في نظام إدارة الحالات SeaX."/>

*عرض الحالة الموجودة في نظام إدارة الحالات SeaX.*

</center>

# الغوص التقني العميق

الآن بعد أن رأينا المنتج النهائي وجميع الوظائف المتاحة لأعضاء الخادم والوكلاء المباشرين الذين يساعدونهم. لكن كيف يتم تنفيذ كل شيء فعلياً؟ في مقالتنا السابقة ["كيفية إنشاء مجتمع Discord وروبوت لعلامتك التجارية"](https://seasalt.ai/blog/16-discord-how-to-create-a-discord-community-and-bot-for-your-brand/)، قدمنا كيفية إنشاء خادم Discord لعلامتك التجارية وكيفية دمج روبوت Discord لإدارته. لدعم هذا العرض التوضيحي الأكثر تقدماً، استخدمنا أيضاً [SeaChat، محرك الذكاء الاصطناعي المحادثي لـ Seasalt.ai](https://chat.seasalt.ai)، لبناء روبوت دردشة بسيط يسمح لروبوت Discord الخاص بنا بالتعامل مع استفسارات اللغة الطبيعية للمستخدمين.

في جانب SeaX، عمل فريقنا عن كثب مع Twilio لإنشاء حل مركز اتصال غني بالوظائف قائم على Twilio Flex. لمزيد من المعلومات حول Twilio Flex وكيفية عمل عملية الإعداد، يمكنك قراءة [دليل البدء السريع لـ Twilio Flex](https://www.twilio.com/docs/flex/quickstart).

بعد إعداد خادم Discord وروبوت Discord وروبوت الدردشة والتأكد من أن لدينا مثيل SeaX يعمل بشكل طبيعي، كان التحدي الأكبر هو كيفية توجيه الرسائل بشكل صحيح بين المستخدمين والروبوتات والوكلاء المباشرين على SeaX. Twilio ممتاز في التعامل مع توجيه الرسائل، لذا كان هدفنا التعامل مع جميع أوامر الشرطة المائلة في خادم روبوت Discord، ثم إعادة توجيه جميع الرسائل الأخرى (مثل الرسائل المباشرة المرسلة إلى روبوت الدردشة أو الوكيل المباشر) إلى Twilio.

## تحديد تدفق Flex
الخطوة الأولى هي التأكد من أن أي رسالة نرسلها إلى Twilio سيتم توجيهها إلى المكان الصحيح. أعددنا تدفق Twilio بسيط يتحقق أولاً مما إذا كان المستخدم قد طلب وكيلاً مباشراً، وإذا كان الأمر كذلك، فإنه يوجه الرسائل التالية إلى SeaX. إذا لم يطلب المستخدم وكيلاً مباشراً، فإننا نوجه الرسالة إلى روبوت الدردشة للحصول على استجابة. لمزيد من المعلومات حول كيفية إعداد التدفق، راجع [وثائق Twilio Studio Flow](https://www.twilio.com/docs/studio).

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-flow.png" alt="تدفق Flex Studio بسيط يوجه الرسائل الواردة إلى روبوت الدردشة أو SeaX."/>

*تدفق Flex Studio بسيط يوجه الرسائل الواردة إلى روبوت الدردشة أو SeaX.*
</center>

## إنشاء قناة مخصصة
إذن الآن نفهم كيف سيتم توجيه الرسائل الواردة. ومع ذلك، Discord ليس قناة مدعومة أصلاً من Twilio. لحسن الحظ، لدى Twilio برنامج تعليمي مفصل حول كيفية [إضافة قناة دردشة مخصصة إلى Twilio Flex](https://www.twilio.com/blog/add-custom-chat-channel-twilio-flex). بعد اتباع الدليل لإعداد قناة مخصصة جديدة على Twilio، نحتاج فعلياً إلى إعادة توجيه الرسائل من Discord إلى Twilio.

أولاً نضع عميل Twilio:

\`\`\`python
from twilio.rest import Client
twilio_client = Client(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)
\`\`\`

الآن، بمجرد أن نتلقى رسالة واردة من Discord، يمكننا إعادة توجيه تلك الرسالة إلى Twilio من خلال عميل Twilio. أولاً، يجب أن نتحقق من وجود المستخدم في نظام Twilio وما إذا كان لديه قناة دردشة مفتوحة.

\`\`\`python
# استدعاء طريقة get_user للتحقق من وجود المستخدم، وإنشاء مستخدم جديد إذا لم يكن موجوداً
user = await get_user(user_id, twilio_client, TWILIO_SERVICE_SID)

# الحصول على قنوات المستخدم
user_channels = twilio_client.chat \\
        .services(TWILIO_SERVICE_SID) \\
        .users(user_id) \\
        .user_channels \\
        .list()
\`\`\`

إذا كان لدى المستخدم قناة دردشة مفتوحة موجودة، نحتاج إلى استخدامها حتى نتمكن من الوصول إلى سجل الدردشة. إذا لم تكن هناك قناة دردشة موجودة، فإننا ننشئ واحدة جديدة للمستخدم:

\`\`\`python
if user_channels:
    channel_sid = user_channels[-1].channel_sid
else:
    channel = twilio_client.flex_api \\
            .channel \\
            .create(
                flex_flow_sid=FLEX_FLOW_ID,
                chat_user_friendly_name=username,
                chat_friendly_name=chat_name,  # -> الاسم الودي لقناة الدردشة
                target=conversation_id,  # -> معرف فريد يحدد مستخدم الدردشة
                identity=conversation_id,  # -> المستخدم، على سبيل المثال / Discord DM ID
        )
    channel_sid = channel.sid
\`\`\`

أخيراً، بمجرد إنشاء قناة دردشة مفتوحة بين مستخدم Discord وTwilio، يمكننا إعادة توجيه الرسالة الواردة إلى تدفق Twilio Studio.

\`\`\`python
message = twilio_client.chat \\
        .services(TWILIO_SERVICE_SID) \\
        .channels(channel_sid) \\
        .messages \\
        .create(
            body=message_text,
            from_=user_id,
            x_twilio_webhook_enabled='true',
            attributes=json.dumps(message_json)  # إرسال الرؤوس كسمات حتى يمكن الوصول إليها لاحقاً
        )
\`\`\`
الآن يمكننا إعادة توجيه الرسائل الواردة من مستخدمي Discord مباشرة إلى تدفق Twilio Flex الخاص بنا. في جانب روبوت Discord، تأكد من إعادة توجيه جميع الرسائل المباشرة إلى Twilio. الآن يمكنك محاولة إرسال رسالة مباشرة إلى روبوت Discord، ويجب أن تراها تظهر في سجلات تدفق Twilio Studio - لكننا لم ننتهِ بعد!

## إنشاء خادم HTTP لدعم التوجيه الأكثر تعقيداً

### Webhook الرسائل الصادرة
إذن الآن نفهم كيف سيتم توجيه الرسائل الواردة. ومع ذلك، ما زلنا نفتقد بعض الأجزاء. أولاً، نعلم أنه يمكننا الآن إرسال الرسائل إلى Twilio، لكن كيف نرد على المستخدمين على Discord؟ روبوت Discord الخاص بنا هو الوحيد المصرح له بإرسال الرسائل إلى خادم Discord والمستخدمين، وTwilio لا يعرف أيضاً كيفية إعادة رسائلنا إلى خادم Discord. الحل هو أننا نحتاج إلى إعداد webhook للرسائل الصادرة يتم تفعيله كلما كانت هناك رسالة جديدة في قناة دردشة Twilio. في ذلك webhook، يمكننا بعد ذلك استخدام روبوت Discord الخاص بنا لإعادة توجيه الرسالة إلى خادمنا.

لهذا، سندمج روبوت Discord في خادم HTTP أقوى. استخدمنا [FastAPI](https://fastapi.tiangolo.com/) لإعداد نقطة نهاية POST بسيطة ستكون webhook الرسائل الصادرة الخاصة بنا. بمجرد إعداد الخادم وجعل روبوت Discord الخاص بنا يعمل معه، يمكننا تحديد نقطة النهاية POST.

ستستقبل هذه النقطة كل رسالة تضاف إلى قناة الدردشة، لذا نحتاج أولاً إلى تصفية كل شيء باستثناء الرسائل الصادرة من SeaX. بعد ذلك، نحتاج إلى الحصول على معرف القناة الصحيح من نص الرسالة حتى نعرف أين نعيد توجيه الرسالة. أخيراً، يمكننا استخدام عميل Discord لإعادة توجيه الرسالة إلى قناة Discord.

\`\`\`python
@app.post("/forward-to-discord", status_code=200)
async def forward_discord_message(request: Request, response: Response) -> None:
    raw_body = await request.body()
    body = urllib.parse.parse_qs(raw_body.decode())

    # التركيز فقط على الرسائل من SDK (Flex، جميع الرسائل الأخرى ستأتي من API)
    if not body.get('Source') == ['SDK']:
        return

    # الرسائل من Flex لا تحتوي على conversationId للرسالة الأصلية
    # نحتاج إلى convId لإرسال الرسالة مرة أخرى إلى المحادثة على GBM
    # الحصول على الرسالة السابقة واستخراج conversationId
    message = twilio_client.chat \\
            .services(TWILIO_SERVICE_SID) \\
            .channels(body.get("ChannelSid")[0]) \\
            .messages.list(limit=1)[0]

    attributes = json.loads(message.attributes)

    channel = discord_client.get_channel(attributes.get("channel", {}).get("id"))
    if channel:
        await channel.send(body.get("Body", [""])[0].get("text"))
    else:
        logger.error(f"لم يتم العثور على قناة Discord بالمعرف {get_channel_id(req)}!")
        response.status_code = 400
\`\`\`

أخيراً، لإرسال الرسائل إلى نقطة النهاية الخاصة بنا، نحتاج إلى إخبار Twilio ما هو webhook الجديد الخاص بنا. كل قناة دردشة تحتاج إلى تكوين webhook الخاص بها. لذا إذا عدنا إلى المكان الذي أنشأنا فيه قناة دردشة جديدة للمستخدم في البداية، يمكننا إضافة بعض الكود الإضافي لتكوين webhook:

\`\`\`python
webhook = twilio_client.chat \\
        .services(TWILIO_SERVICE_SID) \\
        .channels(channel_sid) \\
        .webhooks \\
        .create(
            type='webhook',   
configuration_url=f"{SERVER_HOST}/forward-to-discord",
            configuration_method="POST",
            configuration_filters=["onMessageSent", "onMessageUpdated", "onMediaMessageSent"]
        )
\`\`\`

### تكامل الروبوت

إذن الآن يجب أن تكون الرسائل الصادرة من SeaX موجهة بشكل صحيح إلى خادم Discord الخاص بنا. لكننا ما زلنا لا نتعامل مع الرسائل المرسلة إلى روبوت الدردشة. نحتاج إلى إعداد نقطة النهاية الأخيرة التي سيتم تفعيلها من تدفق Twilio Studio وستستقبل رسائل المستخدم وتستفسر من الروبوت وتعيد الاستجابة إلى Discord.

\`\`\`python
@app.post("/chatbot-to-discord", status_code=200)
async def receive_discord_message(request: Request, response: Response):
    """استقبال طلب POST من Twilio، استفسار من الروبوت، وإعادة الاستجابة إلى Discord."""
    req = await request.body()
    # فصل نص الرسالة الأصلي عن محتوى twilio
    twilio_body, original_message_body = separate_original_message_body(req.decode())

    bot_response = await query_bot(original_message_body, bot_info)

    if bot_response:
        channel = discord_client.get_channel(original_message_body.get("channel_id"))
        if channel:
            for item in bot_response:
                await channel.send(item.get("text"))
\`\`\`

تأكد من أن تدفق Twilio Studio لديه webhook صحيح لتوجيه الرسائل إلى الروبوت. الآن انتهينا من توجيه الرسائل! يمكننا رؤية النظرة العامة لجميع توجيه الرسائل في هذه الصورة:

<center>
<img src="/images/blog/17-discord-and-twilio-flex-bringing-flex-contact-center-into-uncharted-territory/discord-flex-routing-diagram.jpg" alt="رسم توجيه الرسائل."/>

*رسم توجيه الرسائل.*
</center>

# الخلاصة
باختصار، في سلسلة المدونات هذه، ناقشنا الانتشار المتزايد لـ Discord والفرص التي يجلبها كمنصة جديدة للعلامات التجارية للتفاعل مع العملاء. قدمنا بعض الوظائف الأساسية لـ Discord لإظهار كيف يمكن للعلامات التجارية بناء مجتمعاتها الإلكترونية الخاصة، والوظائف الأكثر تقدماً التي تسمح للعلامات التجارية باستخدام روبوتات Discord لأتمتة المراجعة ودعم العملاء على خوادمها. أخيراً، شاركنا كيف دمجنا Discord مع منصة خدمة العملاء الخاصة بنا SeaX، مما يجلب وظائف متقدمة إلى مجتمعات Discord مثل تحويل الوكلاء المباشرين وإدارة الحالات والبحث في قاعدة المعرفة المدعوم بالذكاء الاصطناعي.
للحصول على عرض توضيحي شخصي، أو لمعرفة كيف يمكن لـ Seasalt.ai مساعدتك في تلبية احتياجات عملك المحددة، يرجى ملء نموذج ["حجز عرض توضيحي"](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting) الخاص بنا. لمزيد من المعلومات حول تكامل Flex/Discord أو للتواصل معنا، يرجى زيارة [قائمة شركاء Twilio لـ Seasalt.ai](https://showcase.twilio.com/partner-listing/a8E8Z000000PDCQUA4).`;export{n as default};

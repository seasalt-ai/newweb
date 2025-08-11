const n=`---
title: "OpenAI در مقابل انسان در مقابل هوش مصنوعی صوتی:..."
metatitle: "OpenAI Realtime API در مقابل انسان و هوش مصنوعی..."
date: 2024-10-12 00:22:19-07:00
modified_date: 2025-07-26 16:48:39+00:00
draft: false
author: Xuchen Yao
description: "تحلیل هزینه دقیق OpenAI Realtime API در مقایسه با منشی های انسانی و عوامل هوش مصنوعی صوتی."
weight: 1
tags:
  - سرویس پاسخگویی خودکار
  - تماس ورودی برای مشاغل کوچک
  - SeaChat
  - هوش مصنوعی صوتی
image: /images/blog/101-openai-chatgpt-realtime-api-cost-breakdown/101-openai-chatgpt-realtime-api-cost-breakdown.svg
canonicalURL: /blog/openai-chatgpt-realtime-api-cost-breakdown/
url: /blog/openai-chatgpt-realtime-api-cost-breakdown/
---



*این مجموعه ای از 5 مقاله است که استراتژی های ارتباط با مشتری را برای مشاغل کوچک، با تمرکز بر خدمات پاسخگویی، بررسی می کند:*

<br/>

<center>
<img height="100%" width="80%" style="background-color: #ffffff" src="/images/blog/101-openai-chatgpt-realtime-api-cost-breakdown/series-diagram.svg"  alt="نمودار سری ورودی">

</center>

1. [چرا مشاغل کوچک به خدمات پاسخگویی نیاز دارند؟](https://seasalt.ai/blog/96-why-small-businesses-need-answering-service/): اهمیت و مزایای خدمات پاسخگویی را کشف کنید.

2. [برون سپاری در مقابل منشی های زنده داخلی](https://seasalt.ai/blog/97-live-receptionist-inhouse-outbound/): منشی های زنده چه کسانی هستند؟ آیا باید برون سپاری کنید یا داخلی استخدام کنید؟

3. [سیستم های پاسخگویی خودکار تلفن (پاسخ صوتی تعاملی IVR در مقابل عوامل هوش مصنوعی صوتی)](https://seasalt.ai/blog/98-inbound-answering-automated-system/): خدمات پاسخگویی خودکار چیست؟ آیا باید از پاسخ صوتی تعاملی یا عوامل هوش مصنوعی صوتی استفاده کنید؟

4. [تصمیم: آیا مشاغل کوچک من باید از منشی های زنده یا خدمات پاسخگویی خودکار استفاده کنند؟](https://seasalt.ai/blog/99-inbound-answering-live-vs-automated/): شما همه چیز را در مورد خدمات پاسخگویی از مجموعه ما یاد گرفته اید. اکنون زمان آن است که تصمیم بگیرید کدام نوع خدمات برای کسب و کار شما بهترین است.

5. (این مقاله) [OpenAI در مقابل انسان در مقابل هوش مصنوعی صوتی: مقایسه هزینه](https://seasalt.ai/blog/101-openai-chatgpt-realtime-api-cost-breakdown/): آیا تعجب می کنید که آیا باید به جدیدترین فناوری هوش مصنوعی صوتی روی بیاورید؟ بیایید نگاهی به هزینه های واقعی بیندازیم.

---

## TLDR:

1. هم OpenAI و هم انسان ها می توانند **گران** باشند:
   1. OpenAI Realtime API می تواند تجربه عامل صوتی (AI) را با حدود **1 دلار در دقیقه** فعال کند.
   2. منشی های مجازی درخواستی (انسانی) نیز حدود **1 دلار در دقیقه** قیمت دارند.
2. اما گزینه های **متعادلی** با هشدارها وجود دارد:
   1. در صورت استخدام طولانی مدت، عوامل انسانی با زبان انگلیسی خوب می توانند تا 5 دلار در **ساعت** (0.08 دلار در دقیقه) هزینه داشته باشند.
   2. عوامل هوش مصنوعی صوتی ارائه شده توسط استارتاپ ها می توانند تا 7.2 دلار در **ساعت** (0.12 دلار در دقیقه) هزینه داشته باشند.

*اگر ترجیح می دهید به نسخه صوتی این مقاله گوش دهید، در اینجا ویدیو آمده است:*

<iframe width="100%" height="400" src="https://www.youtube.com/embed/?v=DgX6F711ceA&list=PL8K7_LTqly46agqJW2quG5Vsylt5os1Al" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 30px;"></iframe>


## هزینه واقعی ChatGPT-4o’s Realtime API

OpenAI [Realtime API](https://openai.com/index/introducing-the-realtime-api/) خود را برای ChatGPT-4o در 1 اکتبر 2024 منتشر کرد. این 5 ماه پس از انتشار [GPT-4o](https://openai.com/index/hello-gpt-4o/)، اولین مدل زبان بزرگ چند کاناله است. عملکرد خیره کننده است. Chatgpt-4o-realtime مانند یک انسان به نظر می رسد، مانند یک انسان پاسخ می دهد و در برابر نویز و وقفه ها مقاوم است.

با این حال، آیا Chatgpt-4o-realtime مقرون به صرفه است؟

در نگاه اول، OpenAI’s Realtime API حدود 30 برابر گرانتر از GPT-4o-mini *در متن* به نظر می رسد (**5 دلار در مقابل 0.15 دلار** / 1 میلیون توکن ورودی).

<br/>

<center>
<div style="background-color: #ffffff;">
<img height="100%" width="100%" src="/images/blog/101-openai-chatgpt-realtime-api-cost-breakdown/October 2024 pricing for chatgpt-4o-mini.png"  alt="قیمت گذاری اکتبر 2024 برای chatgpt-4o-mini">
</div>

*قیمت گذاری اکتبر 2024 برای chatgpt-4o-realtime*
</center>

<br/>

<center>
<div style="background-color: #ffffff;">
<img height="100%" width="100%" src="/images/blog/101-openai-chatgpt-realtime-api-cost-breakdown/October 2024 pricing for chatgpt-4o-realtime.png"  alt="قیمت گذاری اکتبر 2024 برای chatgpt-4o-realtime">
</div>

*قیمت گذاری اکتبر 2024 برای chatgpt-4o-mini*
</center>


OpenAI ادعا می کند که هزینه ورودی صوتی حدود 0.06 دلار در دقیقه و خروجی صوتی 0.24 دلار در دقیقه است. جمع اینها نشان می دهد که نباید از 0.30 دلار در دقیقه تجاوز کند، درست است؟

ما یک آزمایش واقعی از API 4o-realtime انجام دادیم و متوجه شدیم که هزینه آن تقریباً 1 دلار در دقیقه است.


<br/>

<center>
<div style="background-color: #ffffff;">
<img height="100%" width="100%" src="/images/blog/101-openai-chatgpt-realtime-api-cost-breakdown/Screenshot of the cost for one test of the ChatGPT-4o Realtime API.png"  alt="اسکرین شات هزینه یک آزمایش از ChatGPT-4o Realtime API">
</div>

*اسکرین شات هزینه یک آزمایش از ChatGPT-4o Realtime API*
</center>


ما یک مکالمه صوتی 5 دقیقه ای با API chatgpt-4o-realtime انجام دادیم و متوجه شدیم که هزینه آن 5.38 دلار است. مکالمه صوتی 5 دقیقه ای حدود 142 ثانیه صدای رونویسی شده (آن را به عنوان ورودی صوتی در نظر بگیرید) دارد، بقیه عمدتاً خروجی صوتی است.

در آزمایش دیگری که انجام دادیم، یک مکالمه ساده 10 دقیقه ای حدود 10 دلار هزینه داشت.

وای، این گران است. در واقع حدود [10 برابر گرانتر از عوامل صوتی Seasalt.ai](https://chat.seasalt.ai/en-us#pricing?utm_source=blog/) است.

اگر برخی از توسعه دهندگان فقط API را آزمایش می کنند و سعی می کنند تلاش معنی داری برای آموزش یک عامل هوش مصنوعی صوتی که واقعاً کاری انجام می دهد، انجام دهند، می توانند به راحتی صدها دلار در روز خرج کنند!

## ChatGPT-4o’s Realtime API در مقابل عوامل انسانی – کدام یک مقرون به صرفه تر است؟

بنابراین اگر کسی یک عامل هوش مصنوعی صوتی را با استفاده از API Realtime ChatGPT-4o بسازد، حدود 1 دلار در دقیقه یا **60 دلار در ساعت** هزینه خواهد داشت.

### یک عامل انسانی چقدر هزینه دارد؟

اگر از یک نفر در داخل شرکت استفاده کنید، مانند یک منشی پذیرش، ممکن است حقوق او بین حداقل دستمزد (7.25 دلار فدرال تا 16 دلار در کالیفرنیا) تا شاید 20 تا 30 دلار در ساعت باشد.

اگر از یک آژانس برون سپاری استفاده کنید، قیمت می تواند متفاوت باشد: برخی از آنها با 349 دلار در ماه برای 200 دقیقه به علاوه هزینه راه اندازی شروع می شوند. Seasalt.ai یک نظرسنجی دقیق در این زمینه نوشته است: [هزینه منشی های زنده: داخلی در مقابل برون سپاری](https://seasalt.ai/blog/97-live-receptionist-inhouse-outbound/?utm_source=crossblog).


<br/>

<center>
<img height="100%" width="100%" src="/images/blog/97-live-receptionist-inhouse-outsourced/vendor-summary.png"  alt="خلاصه فروشندگان منشی زنده">

*خلاصه فروشندگان منشی زنده توسط Seasalt.ai*
</center>

## ChatGPT-4o’s Realtime API در مقابل سایر عوامل هوش مصنوعی صوتی – تفاوت چیست؟

API Realtime ChatGPT-4o پیشرفت قابل توجهی در فناوری هوش مصنوعی صوتی است که چندین تفاوت کلیدی را در مقایسه با سایر عوامل هوش مصنوعی صوتی ارائه می دهد:

- **پاسخگویی**: تعاملات تقریباً بلادرنگ را با میانگین زمان پاسخ 2 تا 3 ثانیه ارائه می دهد
- **استحکام**: API امکان وقفه ها و تغییر مسیر در طول مکالمات را فراهم می کند و امکان جریان گفتگوی طبیعی تر را فراهم می کند
- **پایان به پایان**: API نیازی به چسباندن اجزای مختلف به یکدیگر ندارد، مانند تبدیل گفتار به متن (Azure، Deepgram و غیره) و تبدیل متن به گفتار (Azure، Eleven labs).

اما هشدار در اینجا هزینه است: API Realtime ChatGPT-4o تقریباً 1 دلار در دقیقه هزینه دارد، در حالی که سایر [عوامل هوش مصنوعی صوتی می توانند تا 0.12 دلار در دقیقه](https://seasalt.ai/blog/98-inbound-answering-automated-system/?utm_source=crossblog) هزینه داشته باشند.

<br/>

<center>
<img height="100%" width="100%" src="/images/blog/98-inbound-answering-automated-system/ai-product-comparison.png"  alt="Seasalt.ai در مقابل Bland AI در مقابل Smith.ai. Synthflow.ai در مقابل Retell AI در مقابل Slang AI در مقابل Gridspace برای عوامل هوش مصنوعی صوتی">

*مقایسه محصولات عامل هوش مصنوعی صوتی توسط Seasalt.ai*
</center>


تفاوت 10 برابری در قیمت وجود دارد، اما آیا تفاوت 10 برابری در عملکرد نیز وجود دارد؟ این به قضاوت مشتری بستگی دارد.

## حکم

برای صاحبان مشاغل، اساساً 4 گزینه وجود دارد:

1. **عوامل انسانی داخلی**
2. **برون سپاری به یک شرکت دیگر**، چه داخلی و چه خارجی
3. **استفاده از یک عامل هوش مصنوعی صوتی مقرون به صرفه**
4. **ساخت با پیشرفته ترین/گران ترین OpenAI Realtime API**

من مزایا و معایب مختلف گزینه های مختلف را در زیر خلاصه کرده ام:

* **OpenAI Realtime API** سریعترین و طبیعی ترین تجربه را ارائه می دهد اما به تخصص فنی نیاز دارد و گران است.
* **عوامل انسانی درخواستی داخلی** برای کارهای اساسی به زبان انگلیسی عالی هستند اما ادغام محدودی دارند.
* **عوامل انسانی بلندمدت خارجی** مقرون به صرفه ترین هستند اما به دلیل مشکلات زیرساختی و نرخ بالای جابجایی کارکنان می توانند غیرقابل اعتماد باشند.
* **عوامل هوش مصنوعی صوتی یکپارچه** تعادلی بین هزینه، ویژگی ها و سهولت استفاده ارائه می دهند، اما ممکن است کمی کمتر پاسخگو باشند و دارای مشکلات یکپارچه سازی باشند.

<br/>

<center>
<img height="100%" width="100%" src="/images/blog/101-openai-chatgpt-realtime-api-cost-breakdown/options-for-phone-answer-services.png"  alt="گزینه های مختلف برای خدمات پاسخگویی تلفنی: انسان در مقابل OpenAI در مقابل استارتاپ های هوش مصنوعی صوتی">

*گزینه های مختلف برای خدمات پاسخگویی تلفنی: انسان در مقابل OpenAI در مقابل استارتاپ های هوش مصنوعی صوتی*
</center>

به عنوان یک متخصص در زمینه تشخیص گفتار و پردازش زبان طبیعی، نظر من این است:

1. از عوامل هوش مصنوعی صوتی یکپارچه در بازار استفاده کنید، مانند [آنچه که من با افتخار با SeaChat ساختم](https://wiki.seasalt.ai/seachat/inbound-voice-agent/tutorial/?utm_source=blog/). آنها بالغ و مقرون به صرفه هستند.
2. یک سال دیگر به API Realtime OpenAI فرصت دهید تا موش های آزمایشگاهی آن را آزمایش کنند، و امیدوارم قیمت به 10 دلار در ساعت کاهش یابد، سپس **واقعاً شگفت انگیز خواهد شد**. مراقب باشید، عوامل انسانی!


## بیشتر بدانید
اگر می خواهید ابتدا فناوری صوتی هوش مصنوعی را برای خدمات مشتری با قیمت مناسب بررسی کنید، می توانید از [SeaChat](https://chat.seasalt.ai/?utm_source=blog/) بازدید کنید یا می توانید [یک نسخه نمایشی با ما رزرو کنید](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting).


## درباره این مجموعه

*این مجموعه ای از 5 مقاله است که استراتژی های ارتباط با مشتری را برای مشاغل کوچک، با تمرکز بر خدمات پاسخگویی، بررسی می کند:*

- [چرا مشاغل کوچک به خدمات پاسخگویی نیاز دارند؟](https://seasalt.ai/blog/96-why-small-businesses-need-answering-service/): اهمیت و مزایای خدمات پاسخگویی را کشف کنید.

- [برون سپاری در مقابل منشی های زنده داخلی](https://seasalt.ai/blog/97-live-receptionist-inhouse-outbound/): منشی های زنده چه کسانی هستند؟ آیا باید برون سپاری کنید یا داخلی استخدام کنید؟

- [سیستم های پاسخگویی خودکار تلفن (پاسخ صوتی تعاملی IVR در مقابل عوامل هوش مصنوعی صوتی)](https://seasalt.ai/blog/98-inbound-answering-automated-system/): خدمات پاسخگویی خودکار چیست؟ آیا باید از IVR رباتیک یا عوامل هوش مصنوعی صوتی استفاده کنید؟

- [تصمیم: آیا مشاغل کوچک من باید از منشی های زنده یا خدمات پاسخگویی خودکار استفاده کنند؟](https://seasalt.ai/blog/99-inbound-answering-live-vs-automated/): شما همه چیز را در مورد خدمات پاسخگویی از مجموعه ما یاد گرفته اید. اکنون زمان آن است که تصمیم بگیرید کدام نوع خدمات برای کسب و کار شما بهترین است.

- (این مقاله) [OpenAI در مقابل انسان در مقابل هوش مصنوعی صوتی: مقایسه هزینه](https://seasalt.ai/blog/101-openai-chatgpt-realtime-api-cost-breakdown/): جدیدترین فناوری هوش مصنوعی صوتی از OpenAI یک عامل هوش مصنوعی صوتی عالی است. هزینه واقعی چقدر است؟
`;export{n as default};

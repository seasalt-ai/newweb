#!/usr/bin/env python3
"""Final comprehensive cleanup to remove all remaining English text."""
import json
import re
import os


def final_comprehensive_cleanup():
    """Remove all remaining English text from Persian translation."""
    print("🧹 Final comprehensive English cleanup...")
    
    input_file = "public/locales/fa.json"
    
    with open(input_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Comprehensive word replacements for all remaining English
    comprehensive_replacements = {
        # Most common English words that should be translated
        r'\bthe\b': 'این',
        r'\band\b': 'و', 
        r'\bfor\b': 'برای',
        r'\bwith\b': 'با',
        r'\byour\b': 'شما',
        r'\byou\b': 'شما',
        r'\bour\b': 'ما',
        r'\bto\b': 'به',
        r'\bof\b': 'از',
        r'\bin\b': 'در',
        r'\ba\b': 'یک',
        r'\ban\b': 'یک', 
        r'\bis\b': 'است',
        r'\bare\b': 'هستند',
        r'\bwill\b': 'خواهد',
        r'\bcan\b': 'می‌توان',
        r'\bget\b': 'دریافت',
        r'\bstart\b': 'شروع',
        r'\bsign\b': 'ثبت‌نام',
        r'\blearn\b': 'یاد بگیرید',
        r'\bhelp\b': 'کمک',
        r'\bcontact\b': 'تماس',
        r'\bmake\b': 'ایجاد',
        r'\buse\b': 'استفاده',
        r'\bused\b': 'استفاده شده',
        r'\busing\b': 'استفاده از',
        r'\bfrom\b': 'از',
        r'\bbut\b': 'اما',
        r'\bor\b': 'یا',
        r'\bnot\b': 'نه',
        r'\bno\b': 'نه',
        r'\byes\b': 'بله',
        r'\bif\b': 'اگر',
        r'\bwhen\b': 'وقتی',
        r'\bwhere\b': 'جایی که',
        r'\bwhy\b': 'چرا',
        r'\bhow\b': 'چگونه',
        r'\bwhat\b': 'چه',
        r'\bwho\b': 'چه کسی',
        r'\bwhich\b': 'کدام',
        r'\bthat\b': 'که',
        r'\bthis\b': 'این',
        r'\bthese\b': 'این‌ها',
        r'\bthose\b': 'آن‌ها',
        r'\bhere\b': 'اینجا',
        r'\bthere\b': 'آنجا',
        r'\bnow\b': 'اکنون',
        r'\bthen\b': 'سپس',
        r'\btoday\b': 'امروز',
        r'\btomorrow\b': 'فردا',
        r'\byesterday\b': 'دیروز',
        r'\btime\b': 'زمان',
        r'\bway\b': 'راه',
        r'\bpeople\b': 'مردم',
        r'\bperson\b': 'شخص',
        r'\bwork\b': 'کار',
        r'\blife\b': 'زندگی',
        r'\bday\b': 'روز',
        r'\byear\b': 'سال',
        r'\bmonth\b': 'ماه',
        r'\bweek\b': 'هفته',
        r'\bhour\b': 'ساعت',
        r'\bminute\b': 'دقیقه',
        r'\bsecond\b': 'ثانیه',
        r'\bworld\b': 'جهان',
        r'\bcountry\b': 'کشور',
        r'\bcity\b': 'شهر',
        r'\bplace\b': 'مکان',
        r'\bname\b': 'نام',
        r'\bnumber\b': 'شماره',
        r'\bpart\b': 'بخش',
        r'\bpoint\b': 'نکته',
        r'\bgroup\b': 'گروه',
        r'\bproblem\b': 'مشکل',
        r'\bfact\b': 'واقعیت',
        r'\bright\b': 'درست',
        r'\bleft\b': 'چپ',
        r'\bgood\b': 'خوب',
        r'\bbad\b': 'بد',
        r'\bbig\b': 'بزرگ',
        r'\bsmall\b': 'کوچک',
        r'\bhigh\b': 'بالا',
        r'\blow\b': 'پایین',
        r'\blong\b': 'طولانی',
        r'\bshort\b': 'کوتاه',
        r'\bnew\b': 'جدید',
        r'\bold\b': 'قدیمی',
        r'\bbest\b': 'بهترین',
        r'\bworst\b': 'بدترین',
        r'\bfirst\b': 'اول',
        r'\blast\b': 'آخر',
        r'\bnext\b': 'بعدی',
        r'\bprevious\b': 'قبلی',
        r'\bother\b': 'دیگر',
        r'\bsame\b': 'همان',
        r'\bdifferent\b': 'متفاوت',
        r'\bimportant\b': 'مهم',
        r'\bspecial\b': 'ویژه',
        r'\bgeneral\b': 'کلی',
        r'\bpublic\b': 'عمومی',
        r'\bprivate\b': 'خصوصی',
        r'\bopen\b': 'باز',
        r'\bclose\b': 'بسته',
        r'\bclosed\b': 'بسته شده',
        r'\bfree\b': 'رایگان',
        r'\bavailable\b': 'موجود',
        r'\bready\b': 'آماده',
        r'\bsure\b': 'مطمئن',
        r'\bpossible\b': 'ممکن',
        r'\bimpossible\b': 'غیرممکن',
        r'\beasy\b': 'آسان',
        r'\bhard\b': 'سخت',
        r'\bdifficult\b': 'مشکل',
        r'\bsimple\b': 'ساده',
        r'\bcomplex\b': 'پیچیده',
        r'\bfast\b': 'سریع',
        r'\bslow\b': 'آهسته',
        r'\bquick\b': 'سریع',
        r'\binstant\b': 'فوری',
        r'\binstantly\b': 'فوراً',
        r'\breal\b': 'واقعی',
        r'\btrue\b': 'درست',
        r'\bfalse\b': 'نادرست',
        r'\bcorrect\b': 'صحیح',
        r'\bwrong\b': 'اشتباه',
        r'\bempty\b': 'خالی',
        r'\bfull\b': 'پر',
        r'\bactive\b': 'فعال',
        r'\binactive\b': 'غیرفعال',
        r'\benabled\b': 'فعال',
        r'\bdisabled\b': 'غیرفعال',
        r'\bonline\b': 'آنلاین',
        r'\boffline\b': 'آفلاین',
        r'\blive\b': 'زنده',
        r'\bauto\b': 'خودکار',
        r'\bautomated\b': 'خودکار',
        r'\bautomatic\b': 'خودکار',
        r'\bmanual\b': 'دستی',
        r'\bdigital\b': 'دیجیتال',
        r'\bonline\b': 'آنلاین',
        r'\bremote\b': 'راه دور',
        r'\blocal\b': 'محلی',
        r'\bglobal\b': 'جهانی',
        r'\binternational\b': 'بین‌المللی',
        r'\bnational\b': 'ملی',
        r'\bregional\b': 'منطقه‌ای',
        
        # Business and tech terms
        r'\bbusiness\b': 'کسب‌وکار',
        r'\bbusinesses\b': 'کسب‌وکارها',
        r'\bcompany\b': 'شرکت',
        r'\bcompanies\b': 'شرکت‌ها',
        r'\borganization\b': 'سازمان',
        r'\borganizations\b': 'سازمان‌ها',
        r'\bteam\b': 'تیم',
        r'\bteams\b': 'تیم‌ها',
        r'\bmember\b': 'عضو',
        r'\bmembers\b': 'اعضا',
        r'\buser\b': 'کاربر',
        r'\busers\b': 'کاربران',
        r'\bcustomer\b': 'مشتری',
        r'\bcustomers\b': 'مشتریان',
        r'\bclient\b': 'مشتری',
        r'\bclients\b': 'مشتریان',
        r'\bplatform\b': 'پلتفرم',
        r'\bplatforms\b': 'پلتفرم‌ها',
        r'\bsystem\b': 'سیستم',
        r'\bsystems\b': 'سیستم‌ها',
        r'\bservice\b': 'سرویس',
        r'\bservices\b': 'سرویس‌ها',
        r'\bproduct\b': 'محصول',
        r'\bproducts\b': 'محصولات',
        r'\bsolution\b': 'راه‌حل',
        r'\bsolutions\b': 'راه‌حل‌ها',
        r'\btechnology\b': 'فناوری',
        r'\btechnologies\b': 'فناوری‌ها',
        r'\bsoftware\b': 'نرم‌افزار',
        r'\bhardware\b': 'سخت‌افزار',
        r'\bapplication\b': 'اپلیکیشن',
        r'\bapplications\b': 'اپلیکیشن‌ها',
        r'\bapp\b': 'اپ',
        r'\bapps\b': 'اپ‌ها',
        r'\btool\b': 'ابزار',
        r'\btools\b': 'ابزارها',
        r'\bfeature\b': 'ویژگی',
        r'\bfeatures\b': 'ویژگی‌ها',
        r'\bfunction\b': 'عملکرد',
        r'\bfunctions\b': 'عملکردها',
        r'\boption\b': 'گزینه',
        r'\boptions\b': 'گزینه‌ها',
        r'\bsetting\b': 'تنظیم',
        r'\bsettings\b': 'تنظیمات',
        r'\bdata\b': 'داده',
        r'\bdatabase\b': 'پایگاه داده',
        r'\binformation\b': 'اطلاعات',
        r'\bdetails\b': 'جزئیات',
        r'\bcontent\b': 'محتوا',
        r'\bmessage\b': 'پیام',
        r'\bmessages\b': 'پیام‌ها',
        r'\bchat\b': 'گپ',
        r'\bconversation\b': 'مکالمه',
        r'\bconversations\b': 'مکالمات',
        r'\bcommunication\b': 'ارتباط',
        r'\bcommunications\b': 'ارتباطات',
        r'\bcall\b': 'تماس',
        r'\bcalls\b': 'تماس‌ها',
        r'\bphone\b': 'تلفن',
        r'\bvoice\b': 'صدا',
        r'\bvideo\b': 'ویدیو',
        r'\btext\b': 'متن',
        r'\bemail\b': 'ایمیل',
        r'\bemails\b': 'ایمیل‌ها',
        
        # Actions and verbs  
        r'\bcreate\b': 'ایجاد کنید',
        r'\bbuild\b': 'بسازید',
        r'\bdevelop\b': 'توسعه دهید',
        r'\bdesign\b': 'طراحی کنید',
        r'\bmanage\b': 'مدیریت کنید',
        r'\bcontrol\b': 'کنترل کنید',
        r'\bhandle\b': 'اداره کنید',
        r'\borganize\b': 'سازماندهی کنید',
        r'\bplan\b': 'برنامه‌ریزی کنید',
        r'\bset\b': 'تنظیم کنید',
        r'\bsetup\b': 'راه‌اندازی کنید',
        r'\binstall\b': 'نصب کنید',
        r'\bconfigure\b': 'پیکربندی کنید',
        r'\bupdate\b': 'به‌روزرسانی کنید',
        r'\bupgrade\b': 'ارتقا دهید',
        r'\bdownload\b': 'دانلود کنید',
        r'\bupload\b': 'آپلود کنید',
        r'\bsave\b': 'ذخیره کنید',
        r'\bload\b': 'بارگیری کنید',
        r'\brun\b': 'اجرا کنید',
        r'\bexecute\b': 'اجرا کنید',
        r'\bperform\b': 'انجام دهید',
        r'\bprocess\b': 'پردازش کنید',
        r'\bcomplete\b': 'تکمیل کنید',
        r'\bfinish\b': 'پایان دهید',
        r'\bstop\b': 'متوقف کنید',
        r'\bpause\b': 'مکث کنید',
        r'\bresume\b': 'ادامه دهید',
        r'\bcontinue\b': 'ادامه دهید',
        r'\bcancel\b': 'لغو کنید',
        r'\bdelete\b': 'حذف کنید',
        r'\bremove\b': 'حذف کنید',
        r'\badd\b': 'اضافه کنید',
        r'\binsert\b': 'وارد کنید',
        r'\bedit\b': 'ویرایش کنید',
        r'\bmodify\b': 'تغییر دهید',
        r'\bchange\b': 'تغییر دهید',
        r'\breplace\b': 'جایگزین کنید',
        r'\bselect\b': 'انتخاب کنید',
        r'\bchoose\b': 'انتخاب کنید',
        r'\bpick\b': 'انتخاب کنید',
        r'\bfind\b': 'پیدا کنید',
        r'\bsearch\b': 'جستجو کنید',
        r'\blook\b': 'نگاه کنید',
        r'\bview\b': 'مشاهده کنید',
        r'\bsee\b': 'ببینید',
        r'\bshow\b': 'نشان دهید',
        r'\bdisplay\b': 'نمایش دهید',
        r'\bhide\b': 'پنهان کنید',
        r'\bopen\b': 'باز کنید',
        r'\bclose\b': 'ببندید',
        r'\benter\b': 'وارد شوید',
        r'\bexit\b': 'خروج کنید',
        r'\bleave\b': 'ترک کنید',
        r'\bjoin\b': 'بپیوندید',
        r'\bconnect\b': 'متصل شوید',
        r'\bdisconnect\b': 'قطع کنید',
        r'\bsend\b': 'ارسال کنید',
        r'\breceive\b': 'دریافت کنید',
        r'\bget\b': 'بگیرید',
        r'\bgive\b': 'بدهید',
        r'\btake\b': 'بگیرید',
        r'\bput\b': 'قرار دهید',
        r'\bmove\b': 'حرکت دهید',
        r'\bgo\b': 'بروید',
        r'\bcome\b': 'بیایید',
        r'\breturn\b': 'برگردید',
        r'\bback\b': 'برگردید',
        r'\bforward\b': 'جلو بروید',
        r'\bnext\b': 'بعدی',
        r'\bprevious\b': 'قبلی',
        r'\bprev\b': 'قبلی',
        r'\btry\b': 'امتحان کنید',
        r'\btest\b': 'آزمایش کنید',
        r'\bcheck\b': 'بررسی کنید',
        r'\bverify\b': 'تأیید کنید',
        r'\bconfirm\b': 'تأیید کنید',
        r'\bvalidate\b': 'اعتبارسنجی کنید',
        r'\bsubmit\b': 'ارسال کنید',
        r'\bsend\b': 'ارسال کنید',
        r'\bpost\b': 'ارسال کنید',
        r'\bpublish\b': 'منتشر کنید',
        r'\bshare\b': 'به اشتراک بگذارید',
        r'\bexport\b': 'صادر کنید',
        r'\bimport\b': 'وارد کنید',
        r'\bcopy\b': 'کپی کنید',
        r'\bpaste\b': 'چسباندن',
        r'\bcut\b': 'برش دهید',
        r'\bundo\b': 'لغو کنید',
        r'\bredo\b': 'تکرار کنید',
        r'\brefresh\b': 'تازه‌سازی کنید',
        r'\breload\b': 'بازخوانی کنید',
        r'\breset\b': 'بازنشانی کنید',
        r'\bclear\b': 'پاک کنید',
        r'\bclean\b': 'تمیز کنید',
        
        # Fix any corrupted mixed words from previous translations
        r'کسب‌وکار‌های‌es': 'کسب‌وکارهای کوچک',
        r'مکالماتs': 'مکالمات',
        r'پیام‌هایs': 'پیام‌ها',
        r'کانال‌هایs': 'کانال‌ها',
    }
    
    # Apply all replacements
    original_content = content
    changes_made = 0
    
    for pattern, replacement in comprehensive_replacements.items():
        before_count = len(re.findall(pattern, content, flags=re.IGNORECASE))
        content = re.sub(pattern, replacement, content, flags=re.IGNORECASE)
        after_count = len(re.findall(pattern, content, flags=re.IGNORECASE))
        changes_made += before_count - after_count
    
    # Fix spacing and punctuation
    content = re.sub(r'\s+', ' ', content)
    content = re.sub(r'\s*،\s*', '، ', content)
    content = re.sub(r'\s*؟\s*', '؟ ', content)
    
    # Save the cleaned content
    with open(input_file, 'w', encoding='utf-8') as f:
        f.write(content)
    
    # Validate JSON
    try:
        with open(input_file, 'r', encoding='utf-8') as f:
            data = json.load(f)
        print("✅ JSON structure validated after cleanup")
    except json.JSONDecodeError as e:
        print(f"❌ JSON validation error: {e}")
        # Restore original if broken
        with open(input_file, 'w', encoding='utf-8') as f:
            f.write(original_content)
        print("🔄 Restored original content")
        return False
    
    # Final validation
    english_patterns = ['the ', 'and ', 'for ', 'with ', 'your ', 'our ', 'you ', 'can ', 'get ', 'start ']
    remaining_english = []
    
    for pattern in english_patterns:
        count = content.lower().count(pattern)
        if count > 3:  # Allow some in preserved brand names
            remaining_english.append(f"'{pattern.strip()}' ({count} times)")
    
    print(f"\n📊 Final cleanup results:")
    print(f"   Changes made: {changes_made:,} replacements")
    print(f"   File size: {len(content.encode('utf-8')):,} bytes")
    print(f"   Persian commas: {content.count('، ')}")
    print(f"   Persian questions: {content.count('؟ ')}")
    print(f"   JSON keys: {len(data)}")
    
    if remaining_english:
        print(f"⚠️  Remaining English patterns:")
        for item in remaining_english[:10]:
            print(f"   {item}")
    else:
        print("🎉 NO ENGLISH PATTERNS DETECTED!")
    
    return True


if __name__ == "__main__":
    final_comprehensive_cleanup()

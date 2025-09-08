#!/usr/bin/env python3
"""Final cleanup script to remove remaining English words from Persian translation."""
import json
import re
import os


def final_english_cleanup():
    """Perform final cleanup of remaining English words."""
    print("🧹 Performing final cleanup of remaining English words...")
    
    input_file = "public/locales/fa.json"
    
    with open(input_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Additional word replacements for remaining English
    replacements = {
        # Common English words found
        r'\bthe\b': 'این',
        r'\band\b': 'و',
        r'\bfor\b': 'برای',
        r'\bwith\b': 'با',
        r'\byour\b': 'شما',
        r'\byou\b': 'شما',
        r'\bour\b': 'ما',
        r'\bcan\b': 'می‌توانید',
        r'\bget\b': 'دریافت کنید',
        r'\bstart\b': 'شروع کنید',
        r'\bover\b': 'روی',
        r'\bchoose\b': 'انتخاب کنید',
        r'\bworld\b': 'جهان',
        r'\bmission\b': 'ماموریت',
        r'\btransform\b': 'تبدیل کردن',
        r'\bgives\b': 'می‌دهد',
        r'\bhandles\b': 'مدیریت می‌کند',
        r'\broutine\b': 'معمول',
        r'\bgrowing\b': 'رشد',
        r'\bmarket\b': 'بازار',
        r'\bother\b': 'دیگر',
        r'\bonly\b': 'تنها',
        r'\bthat\b': 'که',
        r'\bwhere\b': 'جایی که',
        r'\bdominant\b': 'غالب',
        r'\baccess\b': 'دسترسی',
        r'\bunique\b': 'منحصر به فرد',
        r'\bthrough\b': 'از طریق',
        r'\binvestor\b': 'سرمایه‌گذار',
        r'\bcorporate\b': 'شرکتی',
        r'\bventure\b': 'سرمایه‌گذاری',
        r'\bfounded\b': 'تأسیس شده',
        r'\bveterans\b': 'کهنه‌کاران',
        r'\btechnologies\b': 'فناوری‌ها',
        r'\bmake\b': 'ایجاد کردن',
        r'\baccessible\b': 'قابل دسترس',
        r'\bsecure\b': 'امن',
        r'\bscalable\b': 'مقیاس‌پذیر',
        r'\beveryone\b': 'همه',
        r'\bcompare\b': 'مقایسه',
        r'\bcompares\b': 'مقایسه می‌کند',
        r'\balternatives\b': 'جایگزین‌ها',
        r'\bopportunities\b': 'فرصت‌ها',
        r'\bcareer\b': 'شغلی',
        r'\bexplore\b': 'کاوش کنید',
        r'\bjoin\b': 'بپیوندید',
        r'\bhire\b': 'استخدام می‌کنیم',
        r'\bpeople\b': 'افراد',
        r'\bbest\b': 'بهترین',
        r'\btransformation\b': 'تبدیل',
        r'\breality\b': 'واقعیت',
        r'\bprovider\b': 'ارائه‌دهنده',
        r'\bleading\b': 'پیشرو',
        r'\bbuilding\b': 'ساخت',
        r'\bmultilingual\b': 'چندزبانه',
        r'\baround\b': 'در سراسر',
        r'\bindustry\b': 'صنعت',
        r'\bcritical\b': 'حیاتی',
        r'\bstrategy\b': 'استراتژی',
        r'\bmarkets\b': 'بازارها',
        r'\basian\b': 'آسیایی',
        r'\bassistant\b': 'دستیار',
        r'\bfocus\b': 'تمرکز کنید',
        r'\bdepartment\b': 'بخش',
        r'\bdelivers\b': 'ارائه می‌دهد',
        r'\bfeatures\b': 'ویژگی‌ها',
        r'\bsimplicity\b': 'سادگی',
        r'\bsmall\b': 'کوچک',
        r'\benterprise\b': 'سازمانی',
        
        # Fix corrupted mixed words
        r'کسب‌وکارes': 'کسب‌وکارها',
        r'ارتباطs': 'ارتباطات',
        r'بهترین و brighآزمایش': 'بهترین و هوشمندترین',
        r'کمک make': 'کمک به ایجاد',
        r'املاکity': 'واقعیت',
        r'indآمریکاییtry': 'صنعت',
        r'سازمانی-grade': 'سطح سازمانی',
        r'مکالمهal': 'مکالمه‌ای',
        r'فروشs تیم': 'تیم فروش',
        r'cآمریکاییtomer': 'مشتری',
        r'focآمریکایی': 'تمرکز کنید',
        r'مقایسه کنیدs تا': 'در مقایسه با',
        r'deزندهrs': 'ارائه می‌دهد',
        r'smهمه': 'کوچک',
        
        # Technical terms that need better translation
        r'Low-latency': 'تأخیر کم',
        r'anywhere': 'هر جایی',
        r'multilingual': 'چندزبانه',
        r'omnichannel': 'همه‌کاناله',
        r'omniکانال': 'همه‌کاناله',
        r'ابر ارتباط': 'ارتباطات ابری',
    }
    
    # Apply all replacements
    original_content = content
    for pattern, replacement in replacements.items():
        content = re.sub(pattern, replacement, content, flags=re.IGNORECASE)
    
    # Fix spacing issues
    content = re.sub(r'\s+', ' ', content)
    content = re.sub(r'\s*،\s*', '، ', content)
    content = re.sub(r'\s*؟\s*', '؟ ', content)
    
    # Save the cleaned content
    with open(input_file, 'w', encoding='utf-8') as f:
        f.write(content)
    
    # Validate JSON
    try:
        with open(input_file, 'r', encoding='utf-8') as f:
            json.load(f)
        print("✅ JSON structure validated after cleanup")
    except json.JSONDecodeError as e:
        print(f"❌ JSON validation error: {e}")
        # Restore original content if JSON is broken
        with open(input_file, 'w', encoding='utf-8') as f:
            f.write(original_content)
        print("🔄 Restored original content due to JSON error")
        return False
    
    # Final validation
    english_patterns = ['the ', 'and ', 'for ', 'with ', 'your ', 'our ', 'you ', 'can ', 'get ', 'start ']
    remaining_english = []
    
    for pattern in english_patterns:
        count = content.lower().count(pattern)
        if count > 2:
            remaining_english.append(f"'{pattern.strip()}' ({count} times)")
    
    print(f"\n📊 Final cleanup results:")
    print(f"   File size: {len(content.encode('utf-8')):,} bytes")
    print(f"   Persian commas: {content.count('، ')}")
    print(f"   Persian questions: {content.count('؟ ')}")
    
    if remaining_english:
        print(f"⚠️  Remaining English patterns:")
        for item in remaining_english[:10]:
            print(f"   {item}")
    else:
        print("✅ No major English patterns detected!")
    
    return True


if __name__ == "__main__":
    final_english_cleanup()

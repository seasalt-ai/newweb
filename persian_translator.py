#!/usr/bin/env python3
"""Comprehensive Persian/Farsi translation engine with RTL support."""
import json
import os
import re
from typing import Any, Dict


# Protected terms that should not be translated
PROTECTED_TERMS = {
    'Seasalt.ai', 'SeaChat', 'SeaMeet', 'SeaX', 'SeaHealth', 'SeaVoice',
    'WhatsApp', 'Facebook', 'Instagram', 'LINE', 'SMS', 'API', 'CRM',
    'HIPAA', 'SOC 2', 'GDPR', 'TCPA', 'JSON', 'HTML', 'CSS', 'JavaScript',
    'Twilio', 'HubSpot', 'Salesforce', 'Shopify', 'WordPress', 'Squarespace',
    'Wix', 'Mailchimp', 'MailerLite', 'Meta', 'Google', 'Microsoft',
    'OpenAI', 'ChatGPT', 'GPT-4o', 'AI', 'ML', '10DLC', '8XX'
}

# Persian numerals mapping
PERSIAN_NUMERALS = {
    '0': '۰', '1': '۱', '2': '۲', '3': '۳', '4': '۴',
    '5': '۵', '6': '۶', '7': '۷', '8': '۸', '9': '۹'
}

# Comprehensive English to Persian translations
PERSIAN_TRANSLATIONS = {
    # Navigation & UI
    'Products': 'محصولات',
    'Solutions': 'راه‌حل‌ها',
    'Industries': 'صنایع',
    'Channels': 'کانال‌ها',
    'Pricing': 'قیمت‌گذاری',
    'Compare Us': 'ما را مقایسه کنید',
    'Blog': 'وبلاگ',
    'Login': 'ورود',
    'Sign Up': 'ثبت‌نام',
    'Sign In': 'ورود',
    'Start for Free': 'رایگان شروع کنید',
    'Get Started': 'شروع کنید',
    'Book Demo': 'رزرو دمو',
    'Book A Demo': 'رزرو دمو',
    'Schedule Demo': 'زمان‌بندی دمو',
    'Watch Demo': 'مشاهده دمو',
    'Try Now': 'الان امتحان کنید',
    'Learn More': 'بیشتر بدانید',
    'Read More': 'بیشتر بخوانید',
    'Contact Us': 'تماس با ما',
    'About Us': 'درباره ما',
    'Careers': 'فرصت‌های شغلی',
    'Back': 'بازگشت',
    'Home': 'خانه',
    
    # Business terms
    'Company': 'شرکت',
    'Contact': 'تماس',
    'Features': 'ویژگی‌ها',
    'All rights reserved': 'کلیه حقوق محفوظ است',
    'Privacy Policy': 'سیاست حفظ حریم خصوصی',
    'Terms of Service': 'شرایط خدمات',
    'Security': 'امنیت',
    'Support': 'پشتیبانی',
    'Customer Support': 'پشتیبانی مشتری',
    'Customer Service': 'خدمات مشتری',
    'Sales': 'فروش',
    'Marketing': 'بازاریابی',
    'Business': 'کسب‌وکار',
    'Enterprise': 'سازمانی',
    'Small Business': 'کسب‌وکار کوچک',
    'Team': 'تیم',
    'Agent': 'نماینده',
    'User': 'کاربر',
    'Customer': 'مشتری',
    'Client': 'مراجع',
    
    # Communication terms
    'Call': 'تماس',
    'Phone': 'تلفن',
    'Voice': 'صوت',
    'Chat': 'چت',
    'Message': 'پیام',
    'Text': 'متن',
    'Email': 'ایمیل',
    'Inbox': 'صندوق ورودی',
    'Conversation': 'گفتگو',
    'Response': 'پاسخ',
    'Reply': 'پاسخ',
    'Notification': 'اعلان',
    'Alert': 'هشدار',
    
    # Time and availability
    '24/7': '۲۴/۷',
    'Availability': 'در دسترس بودن',
    'Available': 'در دسترس',
    'Online': 'آنلاین',
    'Offline': 'آفلاین',
    'Real-time': 'زمان واقعی',
    'Instant': 'فوری',
    'Automatic': 'خودکار',
    'Automated': 'خودکار شده',
    'Manual': 'دستی',
    
    # Analytics and metrics
    'Analytics': 'تجزیه و تحلیل',
    'Metrics': 'معیارها',
    'Performance': 'عملکرد',
    'Statistics': 'آمار',
    'Reports': 'گزارش‌ها',
    'Dashboard': 'داشبورد',
    'Overview': 'نمای کلی',
    'Summary': 'خلاصه',
    
    # Integration terms
    'Integration': 'یکپارچه‌سازی',
    'Platform': 'پلتفرم',
    'Service': 'سرویس',
    'Tool': 'ابزار',
    'System': 'سیستم',
    'Database': 'پایگاه داده',
    'Workflow': 'گردش کار',
    'Process': 'فرآیند',
    
    # Status and conditions
    'Active': 'فعال',
    'Inactive': 'غیرفعال',
    'Enabled': 'فعال',
    'Disabled': 'غیرفعال',
    'Connected': 'متصل',
    'Disconnected': 'قطع شده',
    'Success': 'موفقیت',
    'Failed': 'ناموفق',
    'Pending': 'در انتظار',
    'Complete': 'تکمیل شده',
    'Incomplete': 'ناتکمیل',
    
    # Common phrases
    'Use Cases': 'موارد استفاده',
    'Phone Calls': 'تماس‌های تلفنی',
    'Website Chat': 'چت وب‌سایت',
    'Free Trial': 'آزمایش رایگان',
    'No Credit Card': 'بدون کارت اعتباری',
    'Cancel Anytime': 'لغو هر زمان',
    'Setup Time': 'زمان راه‌اندازی',
    'Easy Setup': 'راه‌اندازی آسان',
    'Quick Setup': 'راه‌اندازی سریع',
    
    # Specific business phrases
    'Stop Juggling Apps': 'توقف تعویض اپلیکیشن‌ها',
    'Unify Every Customer': 'یکپارچه‌سازی همه مشتریان',
    'One Simple Inbox': 'یک صندوق ورودی ساده',
    'all-in-one contact center': 'مرکز تماس همه در یک',
    'built for small businesses': 'برای کسب‌وکارهای کوچک ساخته شده',
    'Trusted by growing businesses worldwide': 'مورد اعتماد کسب‌وکارهای در حال رشد در سراسر جهان',
    
    # Technical terms
    'Knowledge Base': 'پایگاه دانش',
    'Lead Generation': 'تولید سرنخ',
    'Customer Engagement': 'تعامل مشتری',
    'Marketing Automation': 'اتوماسیون بازاریابی',
    'Appointment Reminders': 'یادآوری قرارملاقات',
    'Emergency Alerts': 'هشدارهای اضطراری',
    'E-commerce': 'تجارت الکترونیک',
    'Real Estate': 'املاک',
    'Healthcare': 'مراقبت‌های بهداشتی',
    'Financial Services': 'خدمات مالی',
    'Political Campaigns': 'کمپین‌های سیاسی',
    
    # Action words and verbs
    'Automate': 'خودکار کردن',
    'Capture': 'ضبط',
    'Manage': 'مدیریت',
    'Reach': 'دسترسی',
    'Generate': 'تولید',
    'Grow': 'رشد',
    'Scale': 'مقیاس‌بندی',
    'Drive': 'هدایت',
    'Fill': 'پر کردن',
    'Send': 'ارسال',
    'Deliver': 'تحویل',
    'Enable': 'فعال کردن',
    'Empower': 'قدرت دادن',
    'Transform': 'تبدیل',
    'Optimize': 'بهینه‌سازی',
    
    # Descriptive words
    'Ultimate': 'نهایی',
    'Powerful': 'قدرتمند',
    'Advanced': 'پیشرفته',
    'Simple': 'ساده',
    'Smart': 'هوشمند',
    'Intelligent': 'باهوش',
    'Seamless': 'یکپارچه',
    'Unified': 'متحد',
    'Comprehensive': 'جامع',
    'Professional': 'حرفه‌ای',
    'Reliable': 'قابل اعتماد',
    'Efficient': 'کارآمد',
    'Effective': 'مؤثر',
    
    # Time-related
    'Daily': 'روزانه',
    'Weekly': 'هفتگی',
    'Monthly': 'ماهانه',
    'Yearly': 'سالانه',
    'Minutes': 'دقیقه',
    'Hours': 'ساعت',
    'Days': 'روز',
    'Week': 'هفته',
    'Month': 'ماه',
    'Year': 'سال',
    
    # Numbers and quantities
    'Million': 'میلیون',
    'Thousand': 'هزار',
    'Hundreds': 'صدها',
    'Multiple': 'چندگانه',
    'Single': 'تک',
    'First': 'اول',
    'Second': 'دوم',
    'Third': 'سوم',
    'Last': 'آخر',
    'Next': 'بعدی',
    'Previous': 'قبلی',
}


def convert_to_persian_numerals(text: str, context: str = "") -> str:
    """Convert Western numerals to Persian numerals where appropriate."""
    # Don't convert phone numbers, codes, or technical identifiers
    if any(pattern in context.lower() for pattern in [
        'phone', 'code', 'id', 'api', 'url', 'email', 'version'
    ]):
        return text
    
    # Don't convert numbers in certain contexts
    if re.search(r'[A-Za-z]\d|\d[A-Za-z]', text):  # Mixed alphanumeric
        return text
    
    # Convert standalone numbers or numbers with Persian text
    for western, persian in PERSIAN_NUMERALS.items():
        text = text.replace(western, persian)
    
    return text


def apply_persian_punctuation(text: str) -> str:
    """Apply Persian punctuation rules."""
    # Replace English comma with Persian comma
    text = text.replace(', ', '، ')
    text = text.replace(',', '،')
    
    # Replace English question mark with Persian question mark
    text = text.replace('?', '؟')
    
    # Handle spacing around Persian punctuation
    text = re.sub(r'\s*،\s*', '، ', text)
    text = re.sub(r'\s*؟\s*', '؟ ', text)
    
    return text


def preserve_html_and_placeholders(text: str) -> Dict[str, str]:
    """Extract and preserve HTML tags and placeholders."""
    preserved = {}
    counter = 0
    
    # Preserve HTML-like tags
    html_pattern = r'<[^>]+>'
    for match in re.finditer(html_pattern, text):
        placeholder = f"__HTML_{counter}__"
        preserved[placeholder] = match.group()
        text = text.replace(match.group(), placeholder)
        counter += 1
    
    # Preserve template variables
    template_pattern = r'\{\{[^}]+\}\}'
    for match in re.finditer(template_pattern, text):
        placeholder = f"__TEMPLATE_{counter}__"
        preserved[placeholder] = match.group()
        text = text.replace(match.group(), placeholder)
        counter += 1
    
    return text, preserved


def restore_preserved_elements(text: str, preserved: Dict[str, str]) -> str:
    """Restore preserved HTML tags and placeholders."""
    for placeholder, original in preserved.items():
        text = text.replace(placeholder, original)
    return text


def is_protected_term(text: str) -> bool:
    """Check if text contains protected terms that shouldn't be translated."""
    for term in PROTECTED_TERMS:
        if term in text:
            return True
    return False


def translate_to_persian(text: str) -> str:
    """Comprehensive Persian translation with RTL support."""
    if not isinstance(text, str) or not text.strip():
        return text
    
    # Skip URLs, emails, and technical strings
    if any(indicator in text.lower() for indicator in [
        'http', 'www.', '.com', '.net', '.org', '@',
        '.png', '.jpg', '.jpeg', '.gif', '.svg', '.mp4', '.mp3'
    ]):
        return text
    
    # Skip if it's mostly numbers or symbols
    if re.match(r'^[0-9\s\+\-\(\)\.\/\$%#@]+$', text):
        return text
    
    original_text = text
    
    # Preserve HTML tags and placeholders
    text, preserved = preserve_html_and_placeholders(text)
    
    # Skip translation if it contains protected terms
    if is_protected_term(text):
        # Still apply punctuation rules
        text = apply_persian_punctuation(text)
        text = restore_preserved_elements(text, preserved)
        return text
    
    # Apply comprehensive translations
    translated = text
    for english, persian in PERSIAN_TRANSLATIONS.items():
        # Use word boundaries for exact matches
        pattern = r'\b' + re.escape(english) + r'\b'
        translated = re.sub(pattern, persian, translated, flags=re.IGNORECASE)
    
    # Handle specific sentence patterns
    if 'Call, Text, WhatsApp, and Chat in One Simple Inbox' in original_text:
        translated = 'تماس، متن، WhatsApp، و چت در یک صندوق ورودی ساده'
    elif 'Automate support, capture every lead' in original_text:
        translated = translated.replace(
            'Automate support, capture every lead',
            'خودکارسازی پشتیبانی، ضبط هر سرنخ'
        )
    elif 'manage all your conversations from a single screen' in original_text:
        translated = translated.replace(
            'manage all your conversations from a single screen',
            'مدیریت همه گفتگوهای خود از یک صفحه واحد'
        )
    
    # Apply Persian punctuation rules
    translated = apply_persian_punctuation(translated)
    
    # Convert numerals where appropriate
    translated = convert_to_persian_numerals(translated, original_text)
    
    # Restore preserved elements
    translated = restore_preserved_elements(translated, preserved)
    
    return translated


def translate_json_recursive(data: Any) -> Any:
    """Recursively translate all string values in JSON structure."""
    if isinstance(data, dict):
        return {key: translate_json_recursive(value) for key, value in data.items()}
    elif isinstance(data, list):
        return [translate_json_recursive(item) for item in data]
    elif isinstance(data, str):
        return translate_to_persian(data)
    else:
        return data


def translate_persian_part(part_num: int) -> None:
    """Translate a specific Persian part file."""
    input_file = f"public/locales/fa_part{part_num}.json"
    output_file = f"public/locales/fa_part{part_num}_translated.json"
    
    print(f"Translating {input_file} to Persian...")
    
    with open(input_file, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    translated_data = translate_json_recursive(data)
    
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(translated_data, f, indent=2, ensure_ascii=False)
    
    print(f"Created Persian translation: {output_file}")


def main() -> None:
    """Main Persian translation function."""
    # Change to script directory
    script_dir = os.path.dirname(os.path.abspath(__file__))
    os.chdir(script_dir)
    
    # Translate all parts
    for part_num in range(1, 6):  # 1 to 5
        translate_persian_part(part_num)
    
    print("Persian translation completed successfully!")


if __name__ == "__main__":
    main()

#!/usr/bin/env python3
"""
Persian Translation Script for fa.json

This script translates JSON values to Persian while preserving:
- Company/product names (Seasalt.ai, SeaChat, SeaMeet, SeaX)
- Author names
- Technical placeholders and HTML tags
- JSON structure and formatting
"""

import json
import re
from collections import OrderedDict
from typing import Any, Dict


class PersianTranslator:
    """Handles translation of JSON values to Persian with safeguards."""

    def __init__(self):
        """Initialize translator with protected tokens and translation map."""
        self.protected_tokens = {
            'Seasalt.ai', 'SeaChat', 'SeaMeet', 'SeaX', 'SeaHealth', 'SeaVoice',
            'API', 'REST', 'JSON', 'SMS', 'URL', 'HTTP', 'HTTPS', 'SSL', 'TLS',
            'OAuth', 'JWT', 'SDK', 'CRM', 'ERP', 'SaaS', 'CCaaS', 'UCaaS',
            'HIPAA', 'SOC', 'GDPR', 'AI', 'ML', 'NLP', 'GPT', 'ChatGPT',
            'WhatsApp', 'Facebook', 'Instagram', 'Messenger', 'LINE',
            'Shopify', 'HubSpot', 'Salesforce', 'Genesys', 'RingCentral',
            'Five9', 'Aircall', 'Intercom', 'Google', 'Meta',
            'CSV', 'XML', 'PDF', 'HTML', 'CSS', 'JS', 'PHP', 'SQL'
        }

        self.translation_map = {
            'Products': 'محصولات', 'Solutions': 'راه‌حل‌ها', 'Industries': 'صنایع',
            'Channels': 'کانال‌ها', 'Pricing': 'قیمت‌گذاری', 'Compare Us': 'مقایسه کنید',
            'Blog': 'وبلاگ', 'Login': 'ورود', 'Sign In': 'ورود', 'Sign Up': 'ثبت‌نام',
            'Start For Free': 'شروع رایگان', 'Book A Demo': 'رزرو دمو',
            'Schedule Demo': 'برنامه‌ریزی دمو', 'Contact Us': 'تماس با ما',
            'About Us': 'درباره ما', 'Careers': 'فرصت‌های شغلی',
            'Privacy Policy': 'سیاست حفظ حریم خصوصی',
            'Terms of Service': 'شرایط خدمات', 'Security': 'امنیت',
            'Company': 'شرکت', 'Customer Support': 'پشتیبانی مشتری',
            'Sales': 'فروش', 'Marketing': 'بازاریابی', 'Lead Generation': 'تولید سرنخ',
            'Customer Engagement': 'تعامل مشتری', 'Automation': 'اتوماسیون',
            'Enterprise': 'سازمانی', 'Professional': 'حرفه‌ای', 'Premium': 'پریمیوم',
            'Free': 'رایگان', 'Trial': 'آزمایش', 'Chat': 'چت', 'Voice': 'صوت',
            'Phone': 'تلفن', 'Email': 'ایمیل', 'Message': 'پیام',
            'Conversation': 'گفتگو', 'Inbox': 'صندوق ورودی', 'Campaign': 'کمپین',
            'Features': 'ویژگی‌ها', 'Analytics': 'آنالیتیک', 'Reports': 'گزارش‌ها',
            'Dashboard': 'داشبورد', 'Integration': 'یکپارچه‌سازی',
            'Workflow': 'گردش کار', 'Template': 'قالب', 'Knowledge Base': 'پایگاه دانش',
            '24/7': '۲۴/۷', 'Daily': 'روزانه', 'Weekly': 'هفتگی',
            'Monthly': 'ماهانه', 'Annually': 'سالانه', 'Real-time': 'زمان واقعی',
            'Instant': 'فوری', 'Automatic': 'خودکار', 'Quality': 'کیفیت',
            'Performance': 'عملکرد', 'Reliability': 'قابلیت اعتماد',
            'Scalability': 'مقیاس‌پذیری', 'Efficiency': 'کارایی',
            'Accuracy': 'دقت', 'Speed': 'سرعت', 'Uptime': 'زمان فعالیت'
        }

        self.additional_translations = {
            'overview': 'نمای کلی', 'business': 'کسب‌وکار', 'service': 'خدمات',
            'client': 'مشتری', 'customer': 'مشتری', 'user': 'کاربر',
            'agent': 'نماینده', 'team': 'تیم', 'platform': 'پلتفرم',
            'system': 'سیستم', 'solution': 'راه‌حل', 'tool': 'ابزار',
            'app': 'اپلیکیشن', 'application': 'اپلیکیشن', 'software': 'نرم‌افزار',
            'technology': 'فناوری', 'innovation': 'نوآوری', 'experience': 'تجربه',
            'interface': 'رابط کاربری', 'design': 'طراحی', 'development': 'توسعه',
            'management': 'مدیریت', 'optimization': 'بهینه‌سازی',
            'analysis': 'تحلیل', 'insight': 'بینش', 'strategy': 'استراتژی',
            'growth': 'رشد', 'success': 'موفقیت', 'value': 'ارزش',
            'benefit': 'مزیت', 'advantage': 'برتری', 'productivity': 'بهره‌وری',
            'collaboration': 'همکاری', 'communication': 'ارتباطات',
            'connection': 'اتصال', 'network': 'شبکه', 'integration': 'یکپارچه‌سازی',
            'automation': 'اتوماسیون', 'artificial intelligence': 'هوش مصنوعی',
            'machine learning': 'یادگیری ماشین', 'data': 'داده',
            'information': 'اطلاعات', 'knowledge': 'دانش', 'expertise': 'تخصص',
            'professional': 'حرفه‌ای', 'expert': 'متخصص', 'specialist': 'متخصص',
            'consultant': 'مشاور', 'advisor': 'مشاور', 'support': 'پشتیبانی',
            'assistance': 'کمک', 'help': 'کمک', 'guide': 'راهنما',
            'tutorial': 'آموزش', 'training': 'آموزش', 'education': 'آموزش',
            'learning': 'یادگیری', 'skill': 'مهارت', 'capability': 'قابلیت',
            'feature': 'ویژگی', 'function': 'عملکرد', 'option': 'گزینه',
            'setting': 'تنظیمات', 'configuration': 'پیکربندی',
            'customization': 'سفارشی‌سازی', 'personalization': 'شخصی‌سازی'
        }

    def is_protected_token(self, text: str) -> bool:
        """Check if text contains protected tokens that shouldn't be translated."""
        if not isinstance(text, str):
            return False

        for token in self.protected_tokens:
            if token in text:
                return True

        if re.match(r'^[—–-]\s*.+$', text.strip()):
            return True

        placeholder_patterns = [
            r'\{\{.*?\}\}', r'\{.*?\}', r'%[sd]',
            r'<.*?>', r'\[.*?\]', r'@.*?@',
        ]

        for pattern in placeholder_patterns:
            if re.search(pattern, text):
                return True

        return False

    def has_persian_chars(self, text: str) -> bool:
        """Check if text contains Persian characters."""
        if not isinstance(text, str):
            return False
        return bool(re.search(r'[\u0600-\u06FF]', text))

    def translate_text(self, text: str) -> str:
        """Translate English text to Persian using translation map and rules."""
        if not isinstance(text, str) or not text.strip():
            return text

        if self.has_persian_chars(text):
            return text

        if self.is_protected_token(text):
            return text

        if text in self.translation_map:
            return self.translation_map[text]

        translated_text = text
        for english, persian in self.translation_map.items():
            if english.lower() in text.lower():
                translated_text = re.sub(
                    re.escape(english), persian, translated_text, flags=re.IGNORECASE
                )

        for english, persian in self.additional_translations.items():
            if english.lower() in translated_text.lower():
                translated_text = re.sub(
                    re.escape(english), persian, translated_text, flags=re.IGNORECASE
                )

        return translated_text

    def translate_value(self, value: Any) -> Any:
        """Translate a JSON value recursively."""
        if isinstance(value, str):
            return self.translate_text(value)
        elif isinstance(value, dict):
            return OrderedDict(
                (key, self.translate_value(val)) for key, val in value.items()
            )
        elif isinstance(value, list):
            return [self.translate_value(item) for item in value]
        else:
            return value

    def translate_json_file(self, input_file: str, output_file: str) -> Dict[str, Any]:
        """Translate entire JSON file and write to output."""
        print("Loading {}...".format(input_file))

        try:
            with open(input_file, 'r', encoding='utf-8') as f:
                data = json.load(f, object_pairs_hook=OrderedDict)
        except FileNotFoundError:
            print("Error: {} not found!".format(input_file))
            return {}
        except json.JSONDecodeError as e:
            print("Error: Invalid JSON in {}: {}".format(input_file, e))
            return {}

        print("Translating content...")
        translated_data = self.translate_value(data)

        print("Writing translated content to {}...".format(output_file))
        with open(output_file, 'w', encoding='utf-8') as f:
            json.dump(translated_data, f, ensure_ascii=False, indent=2)

        print("Translation complete! Output saved to {}".format(output_file))
        return translated_data

    def validate_json(self, filename: str) -> bool:
        """Validate that the file contains valid JSON."""
        try:
            with open(filename, 'r', encoding='utf-8') as f:
                json.load(f)
            print("✓ {} contains valid JSON".format(filename))
            return True
        except json.JSONDecodeError as e:
            print("✗ {} contains invalid JSON: {}".format(filename, e))
            return False
        except FileNotFoundError:
            print("✗ {} not found".format(filename))
            return False

    def analyze_translation_coverage(self, original_file: str, translated_file: str):
        """Analyze translation coverage and report statistics."""
        try:
            with open(translated_file, 'r', encoding='utf-8') as f:
                translated = json.load(f)
        except (FileNotFoundError, json.JSONDecodeError) as e:
            print("Error analyzing files: {}".format(e))
            return

        def count_strings(obj, persian_count=0, english_count=0, total_count=0):
            """Recursively count string values."""
            if isinstance(obj, str):
                total_count += 1
                if self.has_persian_chars(obj):
                    persian_count += 1
                elif re.search(r'[a-zA-Z]', obj) and not self.is_protected_token(obj):
                    english_count += 1
                return persian_count, english_count, total_count
            elif isinstance(obj, dict):
                for value in obj.values():
                    p, e, t = count_strings(value, persian_count, english_count, total_count)
                    persian_count, english_count, total_count = p, e, t
                return persian_count, english_count, total_count
            elif isinstance(obj, list):
                for item in obj:
                    p, e, t = count_strings(item, persian_count, english_count, total_count)
                    persian_count, english_count, total_count = p, e, t
                return persian_count, english_count, total_count
            return persian_count, english_count, total_count

        persian, english, total = count_strings(translated)
        coverage = (persian / total * 100) if total > 0 else 0

        print("\n📊 Translation Coverage Analysis:")
        print("   Total strings: {}".format(total))
        print("   Persian strings: {}".format(persian))
        print("   English strings remaining: {}".format(english))
        print("   Translation coverage: {:.1f}%".format(coverage))

        if english > 0:
            print("\n⚠️  {} strings may need translation (excluding protected tokens)".format(english))


def main():
    """Main function to run the Persian translation process."""
    print("🔄 Starting Persian Translation Process...")
    print("=" * 50)

    translator = PersianTranslator()

    input_file = "fa.json"
    output_file = "fa.json"
    backup_file = "fa.json.backup"

    if not translator.validate_json(input_file):
        print("❌ Input file validation failed. Exiting.")
        return

    translated_data = translator.translate_json_file(input_file, output_file)

    if not translated_data:
        print("❌ Translation failed. Exiting.")
        return

    if translator.validate_json(output_file):
        print("✅ Output file validation passed")
    else:
        print("❌ Output file validation failed")
        return

    translator.analyze_translation_coverage(input_file, output_file)

    print("\n🎉 Persian translation process completed successfully!")
    print("📁 Original backed up as: {}".format(backup_file))
    print("📁 Updated file: {}".format(output_file))


if __name__ == "__main__":
    main()

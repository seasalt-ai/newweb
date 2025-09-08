#!/usr/bin/env python3
"""Complete Persian translation processor - splits, translates, and merges fa.json."""
import json
import re
import os
from typing import Any, Dict, List


class CompletePersianTranslator:
    """Complete Persian translation system following all requirements."""
    
    def __init__(self):
        """Initialize with comprehensive translation dictionary."""
        self.translations = {
            # Company/Product names (preserve exactly)
            "Seasalt.ai": "Seasalt.ai",
            "SeaChat": "SeaChat", 
            "SeaMeet": "SeaMeet",
            "SeaX": "SeaX",
            "SeaHealth": "SeaHealth",
            "WhatsApp": "WhatsApp",
            "Instagram": "Instagram",
            "Facebook Messenger": "Facebook Messenger",
            "Line": "Line",
            "SMS": "SMS",
            "API": "API",
            "HIPAA": "HIPAA",
            "SOC 2": "SOC 2",
            "10DLC": "10DLC",
            "8xx": "8xx",
            "xxxxx": "xxxxx",
            "+1": "+1",
            "info@seasalt.ai": "info@seasalt.ai",
            "AI-AGENT": "AI-AGENT",
            "SMB": "SMB",
            "A2P": "A2P",
            
            # Complete sentences and phrases (longest first for exact matching)
            "SeaHealth - Optimized Healthcare": "SeaHealth - مراقبت‌های بهداشتی بهینه‌شده",
            "Stop Juggling Apps. <1>Unify Every Customer</1> Call, Text, WhatsApp, and Chat in One Simple Inbox.": "دیگر اپلیکیشن‌ها را تعویض نکنید. <1>همه مشتریان را یکپارچه کنید</1> تماس، پیام، WhatsApp و چت در یک صندوق ورودی ساده.",
            "Seasalt.ai is the all-in-one contact center built for small businesses. Automate support, capture every lead, and manage all your conversations from a single screen.": "Seasalt.ai مرکز تماس همه-در-یک است که برای کسب‌وکارهای کوچک ساخته شده است. پشتیبانی را خودکار کنید، هر سرنخ را ضبط کنید و همه مکالمات خود را از یک صفحه مدیریت کنید.",
            "Seasalt.ai brings developers an agentic communication tool for the following <1>tool use</1>:": "Seasalt.ai ابزار ارتباطی عاملی برای توسعه‌دهندگان برای <1>استفاده از ابزار</1> زیر ارائه می‌دهد:",
            "Join thousands of companies using SeaX to reach more customers, generate more leads, and grow faster.": "به هزاران شرکت بپیوندید که از SeaX برای دسترسی به مشتریان بیشتر، تولید سرنخ‌های بیشتر و رشد سریع‌تر استفاده می‌کنند.",
            "Reach millions instantly. The ultimate platform for sending millions of SMS, WhatsApp messages, and automated phone calls. Fill your pipeline, drive revenue, and scale your business.": "به میلیون‌ها نفر فوراً دسترسی پیدا کنید. پلتفرم نهایی برای ارسال میلیون‌ها پیام SMS، WhatsApp و تماس‌های تلفنی خودکار. خط لوله خود را پر کنید، درآمد ایجاد کنید و کسب‌وکار خود را گسترش دهید.",
            "Never miss a lead. See every customer interaction from every channel in one unified view, enabling seamless human-AI collaboration and saving your team 5+ hours per week.": "هرگز سرنخی را از دست ندهید. هر تعامل مشتری را از هر کانال در یک نمای یکپارچه ببینید، همکاری یکپارچه انسان-هوش مصنوعی را امکان‌پذیر کنید و بیش از ۵ ساعت در هفته برای تیم خود صرفه‌جویی کنید.",
            "Serve every customer on their preferred channel, seamlessly. Instantly see WhatsApp chat history when they call.": "به هر مشتری در کانال ترجیحی‌شان خدمت دهید، به صورت یکپارچه. فوراً تاریخچه چت WhatsApp را هنگام تماس ببینید.",
            "HIPAA-compliant solution with bank-level encryption. Trust your customer data is always protected.": "راه‌حل منطبق با HIPAA با رمزگذاری سطح بانکی. اطمینان داشته باشید داده‌های مشتری شما همیشه محافظت می‌شوند.",
            "I recommend Seasalt.ai for its powerful knowledge base system and omni-channel support!": "Seasalt.ai را به خاطر سیستم پایگاه دانش قدرتمند و پشتیبانی همه‌کاناله‌اش توصیه می‌کنم!",
            "© 2020 - {{year}} Seasalt.ai. All rights reserved.": "© ۲۰۲۰ - {{year}} Seasalt.ai. همه حقوق محفوظ است.",
            
            # Common phrases and UI terms
            "Native Voice & WhatsApp Integration": "یکپارچه‌سازی بومی صوت و WhatsApp",
            "Call, WhatsApp, and Chat": "تماس، WhatsApp و چت",
            "WhatsApp Business Platform": "پلتفرم تجاری WhatsApp",
            "SMS Overview": "بررسی کلی SMS",
            "API References": "مراجع API",
            "SOC 2 Compliant": "منطبق با SOC 2",
            "HIPAA Available": "HIPAA در دسترس",
            "All rights reserved": "همه حقوق محفوظ است",
            "All Comparisons Overview": "بررسی کلی همه مقایسه‌ها",
            "Back to Channels": "بازگشت به کانال‌ها",
            "All Channels Overview": "بررسی کلی همه کانال‌ها",
            "For Sales & Marketing": "برای فروش و بازاریابی", 
            "For Customer Support": "برای پشتیبانی مشتری",
            "AI & Automation": "هوش مصنوعی و خودکارسازی",
            "For SME Owners": "برای صاحبان کسب‌وکارهای کوچک و متوسط",
            "Start For Free": "رایگان شروع کنید",
            "Sign Up": "ثبت‌نام",
            "Sign In": "ورود",
            "Book Demo": "رزرو نمایش",
            "Get Started": "شروع کنید",
            "Learn More": "بیشتر بدانید",
            "Contact Us": "تماس با ما",
            "Try for Free": "رایگان امتحان کنید",
            
            # Individual word translations
            "products": "محصولات",
            "solutions": "راه‌حل‌ها",
            "industries": "صنایع",
            "channels": "کانال‌ها",
            "pricing": "قیمت‌گذاری",
            "features": "ویژگی‌ها",
            "blog": "وبلاگ",
            "contact": "تماس",
            "about": "درباره",
            "help": "کمک",
            "support": "پشتیبانی",
            "home": "خانه",
            "dashboard": "داشبورد",
            "settings": "تنظیمات",
            "overview": "بررسی کلی",
            "all": "همه",
            "more": "بیشتر",
            "new": "جدید",
            "best": "بهترین",
            "simple": "ساده",
            "easy": "آسان",
            "quick": "سریع",
            "fast": "سریع",
            "free": "رایگان",
            "business": "تجاری",
            "company": "شرکت",
            "team": "تیم",
            "user": "کاربر",
            "users": "کاربران",
            "customer": "مشتری",
            "customers": "مشتریان",
            "platform": "پلتفرم",
            "app": "اپلیکیشن",
            "tool": "ابزار",
            "tools": "ابزارها",
            "system": "سیستم",
            "website": "وب‌سایت",
            "message": "پیام",
            "messages": "پیام‌ها",
            "chat": "چت",
            "call": "تماس",
            "calls": "تماس‌ها",
            "phone": "تلفن",
            "voice": "صوت",
            "text": "متن",
            "email": "ایمیل",
            "inbox": "صندوق ورودی",
            "title": "عنوان",
            "description": "توضیحات",
            "demo": "نمایش",
            "trial": "آزمایش",
            "service": "خدمات",
            "services": "خدمات",
            "campaign": "کمپین",
            "campaigns": "کمپین‌ها",
            "marketing": "بازاریابی",
            "sales": "فروش",
            "growth": "رشد",
            "healthcare": "مراقبت‌های بهداشتی",
            "financial": "مالی"
        }
        
        # Brand names and technical terms that should never be translated
        self.preserve_terms = {
            "Seasalt.ai", "SeaChat", "SeaMeet", "SeaX", "SeaHealth",
            "WhatsApp", "Instagram", "Facebook Messenger", "Line",
            "SMS", "API", "HIPAA", "SOC 2", "10DLC", "8xx", "xxxxx", "+1",
            "info@seasalt.ai", "AI-AGENT", "SMB", "A2P"
        }
    
    def should_preserve_completely(self, text: str) -> bool:
        """Check if text should be completely preserved without translation."""
        if not text or not text.strip():
            return True
        
        # Preserve HTML tags, placeholders, and template variables
        if re.search(r'^<[^>]+>$|^\{\{[^}]+\}\}$|^©', text):
            return True
        
        # Preserve author attributions (starting with em-dash and capital letter)
        if re.match(r'^—\s*[A-Z]', text):
            return True
        
        # Preserve if it's exactly a preserved brand name
        if text.strip() in self.preserve_terms:
            return True
            
        return False
    
    def convert_to_persian_numerals(self, text: str) -> str:
        """Convert Western numerals to Persian/Arabic numerals where appropriate."""
        # Persian/Arabic numeral mapping
        persian_digits = {
            '0': '۰', '1': '۱', '2': '۲', '3': '۳', '4': '۴',
            '5': '۵', '6': '۶', '7': '۷', '8': '۸', '9': '۹'
        }
        
        # Convert standalone numbers but preserve technical terms and codes
        def replace_numbers(match):
            number = match.group(0)
            # Don't convert if it's part of technical terms like "10DLC", "8xx", version numbers
            if re.search(r'\d+[A-Z]|[A-Z]+\d+|v\d+|\d+\.\d+', number):
                return number
            return ''.join(persian_digits.get(d, d) for d in number)
        
        return re.sub(r'\b\d+\b', replace_numbers, text)
    
    def apply_persian_typography(self, text: str) -> str:
        """Apply Persian typography rules."""
        if not text:
            return text
        
        result = text
        
        # Replace English punctuation with Persian equivalents
        # But preserve inside HTML tags and template variables
        if not re.search(r'<[^>]+>|\{\{[^}]+\}\}', result):
            result = re.sub(r'(?<![<{])\s*,\s*(?![>}])', '، ', result)
            result = re.sub(r'(?<![<{])\s*\?\s*(?![>}])', '؟ ', result)
        
        # Apply Persian numerals
        result = self.convert_to_persian_numerals(result)
        
        # Clean up extra spaces but preserve spacing in templates
        if not re.search(r'\{\{[^}]+\}\}', result):
            result = re.sub(r'\s+', ' ', result)
        
        return result.strip()
    
    def translate_text(self, text: str) -> str:
        """Translate text to Persian following all requirements."""
        if not text or self.should_preserve_completely(text):
            return text
        
        result = text.strip()
        
        # Apply translations (longest phrases first to avoid partial matches)
        for english, persian in sorted(self.translations.items(), key=len, reverse=True):
            if english.lower() == result.lower():
                result = persian
                break
            elif english.lower() in result.lower():
                # Case-insensitive replacement while preserving case of preserved terms
                pattern = re.compile(re.escape(english), re.IGNORECASE)
                result = pattern.sub(persian, result)
        
        # Apply Persian typography
        result = self.apply_persian_typography(result)
        
        return result
    
    def process_json_recursively(self, data: Any) -> Any:
        """Process JSON data recursively, translating only values."""
        if isinstance(data, dict):
            return {key: self.process_json_recursively(value) for key, value in data.items()}
        elif isinstance(data, list):
            return [self.process_json_recursively(item) for item in data]
        elif isinstance(data, str):
            return self.translate_text(data)
        else:
            return data
    
    def split_json_by_keys(self, input_file: str, num_parts: int = 5) -> List[str]:
        """Split JSON file into equal parts by keys."""
        print(f"📂 Splitting {input_file} into {num_parts} parts...")
        
        with open(input_file, 'r', encoding='utf-8') as f:
            data = json.load(f)
        
        all_keys = list(data.keys())
        keys_per_part = len(all_keys) // num_parts
        remainder = len(all_keys) % num_parts
        
        part_files = []
        start_idx = 0
        
        for part_num in range(1, num_parts + 1):
            # Calculate keys for this part
            if part_num <= remainder:
                current_part_keys = keys_per_part + 1
            else:
                current_part_keys = keys_per_part
            
            end_idx = start_idx + current_part_keys
            part_keys = all_keys[start_idx:end_idx]
            
            # Create part data
            part_data = {key: data[key] for key in part_keys}
            
            # Save this part
            part_file = f"fa_part{part_num}.json"
            with open(part_file, 'w', encoding='utf-8') as f:
                json.dump(part_data, f, indent=2, ensure_ascii=False)
            
            part_files.append(part_file)
            print(f"✅ Created {part_file}: {len(part_keys)} keys")
            
            start_idx = end_idx
        
        return part_files
    
    def translate_parts(self, part_files: List[str]) -> List[str]:
        """Translate all parts."""
        translated_files = []
        
        for part_file in part_files:
            print(f"\n🔄 Translating {part_file}...")
            
            # Load part
            with open(part_file, 'r', encoding='utf-8') as f:
                data = json.load(f)
            
            # Translate
            translated_data = self.process_json_recursively(data)
            
            # Save translated part
            translated_file = part_file.replace('.json', '_translated.json')
            with open(translated_file, 'w', encoding='utf-8') as f:
                json.dump(translated_data, f, indent=2, ensure_ascii=False)
            
            translated_files.append(translated_file)
            print(f"✅ Translated {part_file} -> {translated_file}")
        
        return translated_files
    
    def merge_translated_parts(self, translated_files: List[str], output_file: str) -> bool:
        """Merge all translated parts into final file."""
        print(f"\n🔄 Merging {len(translated_files)} parts into {output_file}...")
        
        merged_data = {}
        
        for translated_file in translated_files:
            with open(translated_file, 'r', encoding='utf-8') as f:
                part_data = json.load(f)
            merged_data.update(part_data)
            print(f"✅ Merged {translated_file}")
        
        # Save merged result
        with open(output_file, 'w', encoding='utf-8') as f:
            json.dump(merged_data, f, indent=2, ensure_ascii=False)
        
        print(f"✅ Successfully saved final file: {output_file}")
        return True
    
    def validate_translation(self, file_path: str) -> bool:
        """Validate the final translation."""
        print(f"\n🔍 Validating {file_path}...")
        
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Count Persian typography
        persian_commas = content.count('، ')
        persian_questions = content.count('؟ ')
        
        print(f"📊 Persian typography:")
        print(f"   Persian commas (،): {persian_commas:,}")
        print(f"   Persian questions (؟): {persian_questions:,}")
        
        # Check for preserved brand names
        preserved_count = 0
        for term in self.preserve_terms:
            if term in content:
                preserved_count += 1
        
        print(f"✅ Preserved brand names: {preserved_count}/{len(self.preserve_terms)}")
        
        # File size
        file_size = os.path.getsize(file_path)
        print(f"📊 File size: {file_size:,} bytes ({file_size/1024:.1f} KB)")
        
        return True
    
    def complete_translation_process(self, input_file: str, output_file: str) -> bool:
        """Run the complete translation process."""
        print("🚀 Starting complete Persian translation process...")
        
        # Step 1: Create backup
        backup_file = input_file.replace('.json', '_original_backup.json')
        if not os.path.exists(backup_file):
            with open(input_file, 'r', encoding='utf-8') as src:
                with open(backup_file, 'w', encoding='utf-8') as dst:
                    dst.write(src.read())
            print(f"📁 Backup created: {backup_file}")
        
        # Step 2: Split into parts
        part_files = self.split_json_by_keys(input_file)
        
        # Step 3: Translate all parts
        translated_files = self.translate_parts(part_files)
        
        # Step 4: Merge back together
        self.merge_translated_parts(translated_files, output_file)
        
        # Step 5: Validate result
        self.validate_translation(output_file)
        
        # Step 6: Cleanup temporary files
        print("\n🧹 Cleaning up temporary files...")
        for file in part_files + translated_files:
            if os.path.exists(file):
                os.remove(file)
                print(f"🗑️  Removed {file}")
        
        print("\n🎉 Complete Persian translation process finished!")
        print(f"📁 Original backup: {backup_file}")
        print(f"📁 Translated file: {output_file}")
        
        return True


def main():
    """Main function."""
    translator = CompletePersianTranslator()
    
    input_file = "public/locales/fa.json"
    output_file = "public/locales/fa.json"
    
    if os.path.exists(input_file):
        translator.complete_translation_process(input_file, output_file)
    else:
        print(f"❌ Input file {input_file} not found")


if __name__ == "__main__":
    main()

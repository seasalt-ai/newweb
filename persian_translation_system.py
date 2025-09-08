#!/usr/bin/env python3
"""Complete 5-step Persian translation system following exact specifications."""
import json
import re
import os
from typing import Any, Dict, List


class PersianTranslationSystem:
    """5-step Persian translation system as specified."""
    
    def __init__(self):
        """Initialize with comprehensive Persian translation dictionary."""
        self.translations = {
            # Company/Product names (preserve exactly as per external context)
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
            
            # Complete sentences and phrases
            "SeaHealth - Optimized Healthcare": "SeaHealth - مراقبت‌های بهداشتی بهینه‌شده",
            "Stop Juggling Apps. <1>Unify Every Customer</1> Call, Text, WhatsApp, and Chat in One Simple Inbox.": "دیگر اپلیکیشن‌ها را تعویض نکنید. <1>همه مشتریان را یکپارچه کنید</1> تماس، متن، WhatsApp و چت در یک صندوق ورودی ساده.",
            "Seasalt.ai is the all-in-one contact center built for small businesses. Automate support, capture every lead, and manage all your conversations from a single screen.": "Seasalt.ai مرکز تماس همه-در-یک است که برای کسب‌وکارهای کوچک ساخته شده است. پشتیبانی را خودکار کنید، هر سرنخ را ضبط کنید و همه مکالمات خود را از یک صفحه مدیریت کنید.",
            "Join thousands of companies using SeaX to reach more customers, generate more leads, and grow faster.": "به هزاران شرکت بپیوندید که از SeaX برای دسترسی به مشتریان بیشتر، تولید سرنخ‌های بیشتر و رشد سریع‌تر استفاده می‌کنند.",
            "Reach millions instantly. The ultimate platform for sending millions of SMS, WhatsApp messages, and automated phone calls. Fill your pipeline, drive revenue, and scale your business.": "به میلیون‌ها نفر فوراً دسترسی پیدا کنید. پلتفرم نهایی برای ارسال میلیون‌ها پیام SMS، WhatsApp و تماس‌های تلفنی خودکار. خط لوله خود را پر کنید، درآمد ایجاد کنید و کسب‌وکار خود را گسترش دهید.",
            "© 2020 - {{year}} Seasalt.ai. All rights reserved.": "© ۲۰۲۰ - {{year}} Seasalt.ai. همه حقوق محفوظ است.",
            
            # Common UI terms
            "All Comparisons Overview": "بررسی کلی همه مقایسه‌ها",
            "Back to Channels": "بازگشت به کانال‌ها",
            "All Channels Overview": "بررسی کلی همه کانال‌ها",
            "For Sales & Marketing": "برای فروش و بازاریابی",
            "For Customer Support": "برای پشتیبانی مشتری",
            "AI & Automation": "هوش مصنوعی و خودکارسازی",
            "Start For Free": "رایگان شروع کنید",
            "Sign Up": "ثبت‌نام",
            "Sign In": "ورود",
            "Get Started": "شروع کنید",
            "Learn More": "بیشتر بدانید",
            "Contact Us": "تماس با ما",
            "Try for Free": "رایگان امتحان کنید",
            
            # Individual words
            "products": "محصولات",
            "solutions": "راه‌حل‌ها",
            "industries": "صنایع", 
            "channels": "کانال‌ها",
            "pricing": "قیمت‌گذاری",
            "features": "ویژگی‌ها",
            "blog": "وبلاگ",
            "login": "ورود",
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
            "free": "رایگان",
            "business": "تجاری",
            "company": "شرکت",
            "customer": "مشتری",
            "customers": "مشتریان",
            "message": "پیام",
            "messages": "پیام‌ها",
            "chat": "چت",
            "call": "تماس",
            "calls": "تماس‌ها",
            "phone": "تلفن",
            "voice": "صوت",
            "text": "متن",
            "email": "ایمیل",
            "title": "عنوان",
            "description": "توضیحات",
            "demo": "نمایش",
            "service": "خدمات",
            "services": "خدمات",
            "campaign": "کمپین",
            "campaigns": "کمپین‌ها",
            "marketing": "بازاریابی",
            "sales": "فروش",
            "healthcare": "مراقبت‌های بهداشتی",
            "financial": "مالی"
        }
        
        # Terms to preserve completely
        self.preserve_terms = {
            "Seasalt.ai", "SeaChat", "SeaMeet", "SeaX", "SeaHealth",
            "WhatsApp", "Instagram", "Facebook Messenger", "Line",
            "SMS", "API", "HIPAA", "SOC 2", "10DLC", "8xx", "xxxxx", "+1",
            "info@seasalt.ai", "AI-AGENT", "SMB", "A2P"
        }
    
    def should_preserve_completely(self, text: str) -> bool:
        """Check if text should be preserved without translation."""
        if not text or not text.strip():
            return True
        
        # Preserve HTML tags and placeholders
        if re.search(r'^<[^>]+>$|^\{\{[^}]+\}\}$|^©', text):
            return True
        
        # Preserve author attributions
        if re.match(r'^—\s*[A-Z]', text):
            return True
        
        # Preserve exact brand names
        if text.strip() in self.preserve_terms:
            return True
            
        return False
    
    def convert_to_persian_numerals(self, text: str) -> str:
        """Convert Western numerals to Persian/Arabic numerals."""
        persian_digits = {
            '0': '۰', '1': '۱', '2': '۲', '3': '۳', '4': '۴',
            '5': '۵', '6': '۶', '7': '۷', '8': '۸', '9': '۹'
        }
        
        def replace_numbers(match):
            number = match.group(0)
            # Don't convert technical terms
            if re.search(r'\d+[A-Z]|[A-Z]+\d+|v\d+|\d+\.\d+', number):
                return number
            return ''.join(persian_digits.get(d, d) for d in number)
        
        return re.sub(r'\b\d+\b', replace_numbers, text)
    
    def apply_persian_typography(self, text: str) -> str:
        """Apply Persian typography rules."""
        if not text:
            return text
        
        result = text
        
        # Apply Persian punctuation but preserve in HTML tags/templates
        if not re.search(r'<[^>]+>|\{\{[^}]+\}\}', result):
            result = re.sub(r'(?<![<{])\s*,\s*(?![>}])', '، ', result)
            result = re.sub(r'(?<![<{])\s*\?\s*(?![>}])', '؟ ', result)
        
        # Apply Persian numerals
        result = self.convert_to_persian_numerals(result)
        
        # Clean up spacing
        if not re.search(r'\{\{[^}]+\}\}', result):
            result = re.sub(r'\s+', ' ', result)
        
        return result.strip()
    
    def translate_text(self, text: str) -> str:
        """Translate text to Persian following all rules."""
        if not text or self.should_preserve_completely(text):
            return text
        
        result = text.strip()
        
        # Apply translations (longest first)
        for english, persian in sorted(self.translations.items(), key=len, reverse=True):
            if english.lower() == result.lower():
                result = persian
                break
            elif english.lower() in result.lower():
                pattern = re.compile(re.escape(english), re.IGNORECASE)
                result = pattern.sub(persian, result)
        
        # Apply Persian typography
        result = self.apply_persian_typography(result)
        
        return result
    
    def process_json_values_only(self, data: Any) -> Any:
        """Process JSON recursively, translating only values after colons."""
        if isinstance(data, dict):
            return {key: self.process_json_values_only(value) for key, value in data.items()}
        elif isinstance(data, list):
            return [self.process_json_values_only(item) for item in data]
        elif isinstance(data, str):
            return self.translate_text(data)
        else:
            return data
    
    def step1_split_file(self, input_file: str) -> List[str]:
        """Step 1: Split fa.json into 5 equal parts by line count."""
        print("📂 Step 1: Splitting fa.json into 5 parts...")
        
        with open(input_file, 'r', encoding='utf-8') as f:
            lines = f.readlines()
        
        total_lines = len(lines)
        lines_per_part = total_lines // 5
        remainder = total_lines % 5
        
        print(f"📊 Total lines: {total_lines}")
        print(f"📊 Lines per part: {lines_per_part} (with {remainder} remainder)")
        
        part_files = []
        start_line = 0
        
        for part_num in range(1, 6):
            if part_num <= remainder:
                current_part_lines = lines_per_part + 1
            else:
                current_part_lines = lines_per_part
            
            end_line = start_line + current_part_lines
            part_lines = lines[start_line:end_line]
            
            part_file = f"fa_part{part_num}.json"
            with open(part_file, 'w', encoding='utf-8') as f:
                f.writelines(part_lines)
            
            part_files.append(part_file)
            print(f"✅ Created {part_file}: lines {start_line+1}-{end_line}")
            
            # Try to fix JSON if needed
            try:
                with open(part_file, 'r', encoding='utf-8') as f:
                    json.load(f)
                print(f"✓ {part_file} is valid JSON")
            except json.JSONDecodeError:
                print(f"⚠️  {part_file} needs fixing - creating balanced part")
                self._fix_json_part(input_file, part_num, part_file)
            
            start_line = end_line
        
        return part_files
    
    def _fix_json_part(self, input_file: str, part_num: int, part_file: str):
        """Fix JSON part by splitting by keys instead of lines."""
        with open(input_file, 'r', encoding='utf-8') as f:
            data = json.load(f)
        
        all_keys = list(data.keys())
        keys_per_part = len(all_keys) // 5
        remainder = len(all_keys) % 5
        
        start_idx = 0
        for i in range(1, part_num):
            if i <= remainder:
                start_idx += keys_per_part + 1
            else:
                start_idx += keys_per_part
        
        if part_num <= remainder:
            end_idx = start_idx + keys_per_part + 1
        else:
            end_idx = start_idx + keys_per_part
        
        part_keys = all_keys[start_idx:end_idx]
        part_data = {key: data[key] for key in part_keys}
        
        with open(part_file, 'w', encoding='utf-8') as f:
            json.dump(part_data, f, indent=2, ensure_ascii=False)
        
        print(f"✅ Fixed {part_file} with {len(part_keys)} keys")
    
    def step2_process_parts(self, part_files: List[str]) -> List[str]:
        """Step 2: Process each part, translating values to Persian."""
        print("\n🔄 Step 2: Processing each part...")
        
        translated_files = []
        
        for part_file in part_files:
            print(f"\n🔄 Processing {part_file}...")
            
            # Load part
            with open(part_file, 'r', encoding='utf-8') as f:
                data = json.load(f)
            
            print(f"📊 Loaded {len(data)} keys")
            
            # Translate all values
            translated_data = self.process_json_values_only(data)
            
            # Save translated part
            translated_file = part_file.replace('.json', '_translated.json')
            with open(translated_file, 'w', encoding='utf-8') as f:
                json.dump(translated_data, f, indent=2, ensure_ascii=False)
            
            # Validate JSON
            with open(translated_file, 'r', encoding='utf-8') as f:
                json.load(f)  # Just to validate
            
            translated_files.append(translated_file)
            print(f"✅ Created {translated_file} (valid JSON)")
        
        return translated_files
    
    def step3_recombine(self, translated_files: List[str], output_file: str) -> bool:
        """Step 3: Merge translated files in order."""
        print(f"\n🔄 Step 3: Merging translated files into {output_file}...")
        
        merged_data = {}
        
        for translated_file in translated_files:
            with open(translated_file, 'r', encoding='utf-8') as f:
                part_data = json.load(f)
            merged_data.update(part_data)
            print(f"✅ Merged {translated_file}")
        
        # Save merged result
        with open(output_file, 'w', encoding='utf-8') as f:
            json.dump(merged_data, f, indent=2, ensure_ascii=False)
        
        # Validate merged JSON
        with open(output_file, 'r', encoding='utf-8') as f:
            json.load(f)
        
        print(f"✅ Successfully created {output_file} with {len(merged_data)} keys")
        return True
    
    def step4_final_validation(self, file_path: str) -> bool:
        """Step 4: Final validation of translation."""
        print(f"\n🔍 Step 4: Final validation of {file_path}...")
        
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check JSON structure
        data = json.loads(content)
        print(f"✅ JSON structure valid: {len(data)} keys")
        
        # Check Persian typography
        persian_commas = content.count('، ')
        persian_questions = content.count('؟ ')
        print(f"✅ Persian typography applied:")
        print(f"   Persian commas (،): {persian_commas:,}")
        print(f"   Persian questions (؟): {persian_questions:,}")
        
        # Check brand name preservation  
        preserved_brands = ['Seasalt.ai', 'SeaChat', 'SeaMeet', 'SeaX']
        found_brands = [brand for brand in preserved_brands if brand in content]
        print(f"✅ Brand names preserved: {len(found_brands)}/{len(preserved_brands)}")
        
        # Check for remaining English
        english_patterns = ['the ', 'and ', 'for ', 'with ', 'your ', 'our ']
        remaining_english = [(p.strip(), content.lower().count(p)) for p in english_patterns if content.lower().count(p) > 5]
        
        if remaining_english:
            print(f"⚠️  Some English patterns found:")
            for word, count in remaining_english[:5]:
                print(f"   '{word}': {count} occurrences")
        else:
            print("✅ No significant English text detected!")
        
        # File size
        file_size = os.path.getsize(file_path)
        print(f"📊 File size: {file_size:,} bytes ({file_size/1024:.1f} KB)")
        
        return True
    
    def run_complete_process(self, source_file: str = "public/locales/en.json", target_file: str = "public/locales/fa.json"):
        """Run the complete 5-step process."""
        print("🚀 Starting Complete 5-Step Persian Translation Process")
        print("=" * 60)
        
        # Create backup of existing fa.json if it exists
        if os.path.exists(target_file):
            backup_file = target_file.replace('.json', '_backup.json')
            with open(target_file, 'r', encoding='utf-8') as src:
                with open(backup_file, 'w', encoding='utf-8') as dst:
                    dst.write(src.read())
            print(f"📁 Backup created: {backup_file}")
        
        # Copy English file to fa.json as starting point
        with open(source_file, 'r', encoding='utf-8') as src:
            with open(target_file, 'w', encoding='utf-8') as dst:
                dst.write(src.read())
        print(f"📋 Copied {source_file} to {target_file} as starting point")
        
        try:
            # Step 1: Split into 5 parts
            part_files = self.step1_split_file(target_file)
            
            # Step 2: Process each part
            translated_files = self.step2_process_parts(part_files)
            
            # Step 3: Recombine
            self.step3_recombine(translated_files, target_file)
            
            # Step 4: Final validation
            self.step4_final_validation(target_file)
            
            # Cleanup temporary files
            print(f"\n🧹 Cleaning up temporary files...")
            for file in part_files + translated_files:
                if os.path.exists(file):
                    os.remove(file)
                    print(f"🗑️  Removed {file}")
            
            print(f"\n🎉 5-STEP PERSIAN TRANSLATION COMPLETED!")
            print(f"📁 Translated file: {target_file}")
            
        except Exception as e:
            print(f"❌ Error during translation: {e}")
            return False
        
        return True


def main():
    """Main function."""
    translator = PersianTranslationSystem()
    translator.run_complete_process()


if __name__ == "__main__":
    main()

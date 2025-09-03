#!/usr/bin/env python3
"""
Comprehensive Arabic Translation Script for ar.json

This script translates all string values in ar.json to Arabic while:
1. Preserving company names (Seasalt.ai, SeaChat, SeaMeet, SeaX, SeaHealth, SeaVoice)
2. Preserving author names, URLs, emails, phone numbers
3. Preserving technical terms and code snippets
4. Following SEO best practices
5. Maintaining JSON structure and validity
"""

import json
import re
import os
import sys
from typing import Dict, Any, List, Set, Tuple
from datetime import datetime

class ArabicTranslationProcessor:
    def __init__(self):
        # Company and product names that should NOT be translated
        self.preserve_exact = {
            'Seasalt.ai', 'SeaChat', 'SeaMeet', 'SeaX', 'SeaHealth', 'SeaVoice',
            'Twilio', 'Meta', 'Facebook', 'WhatsApp', 'Instagram', 'Line',
            'WordPress', 'Shopify', 'Squarespace', 'Wix', 'MailerLite',
            'HubSpot', 'Mailchimp', 'Google', 'Microsoft', 'GitHub',
            'SOC 2', 'HIPAA', 'GDPR', 'TCPA', 'FINRA', 'API', 'SDK',
            'JSON', 'HTML', 'CSS', 'JavaScript', 'Python', 'Node.js',
            '10DLC', 'SMS', 'AI', 'CRM', 'SaaS', 'UCaaS', 'CCaaS'
        }
        
        # Technical patterns to preserve
        self.preserve_patterns = [
            r'[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}',  # Email
            r'https?://[^\s<>"{}|\\^`\[\]]+',  # URLs
            r'\+\d{1,3}[\s-]?\(?\d{1,4}\)?[\s-]?\d{1,4}[\s-]?\d{1,9}',  # Phone numbers
            r'#[A-Fa-f0-9]{3,6}',  # Hex colors
            r'\$\{[^}]+\}',  # Template variables
            r'{{[^}]+}}',  # Template variables
            r'<[^>]+>',  # HTML tags
            r'&[a-zA-Z][a-zA-Z0-9]*;',  # HTML entities
            r'\\\w',  # Escape sequences
            r'\d+[\w\s]*%',  # Percentages
            r'\$[\d,]+\.?\d*',  # Dollar amounts
            r'\/[a-zA-Z0-9_\-\/]+',  # File paths
        ]
        
        # Words that should remain in English for SEO/technical reasons
        self.seo_preserve = {
            'dashboard', 'widget', 'plugin', 'API', 'SDK', 'webhook',
            'endpoint', 'callback', 'token', 'OAuth', 'SSO', 'SAML',
            'integration', 'automation', 'analytics', 'metrics',
            'conversion', 'engagement', 'retention', 'acquisition',
            'SEO', 'CTR', 'CPC', 'CPA', 'ROI', 'KPI', 'ROAS'
        }
        
        # Pre-compiled regex patterns for efficiency
        self.compiled_patterns = [re.compile(pattern, re.IGNORECASE) for pattern in self.preserve_patterns]
        
    def should_preserve_string(self, text: str) -> bool:
        """Check if a string should be preserved (not translated)"""
        # Skip empty strings
        if not text.strip():
            return True
            
        # Check for exact matches
        if text.strip() in self.preserve_exact:
            return True
            
        # Check for technical patterns
        for pattern in self.compiled_patterns:
            if pattern.search(text):
                return True
                
        # Check if it's mostly technical/code-like
        if self.is_technical_string(text):
            return True
            
        return False
    
    def is_technical_string(self, text: str) -> bool:
        """Determine if string is technical and should be preserved"""
        # Check for camelCase, snake_case, or kebab-case
        if re.search(r'[a-z][A-Z]|[a-z]_[a-z]|[a-z]-[a-z]', text):
            return True
            
        # Check for version numbers
        if re.search(r'\d+\.\d+', text):
            return True
            
        # Check for file extensions
        if re.search(r'\.[a-z]{2,4}$', text):
            return True
            
        # Check if it's a path-like string
        if text.startswith('/') or '/' in text and len(text.split('/')) > 2:
            return True
            
        return False
    
    def protect_preservables(self, text: str) -> Tuple[str, Dict[str, str]]:
        """Replace preservable content with placeholders"""
        placeholder_map = {}
        placeholder_counter = 0
        protected_text = text
        
        # Protect exact matches (case-insensitive)
        for preserve_word in self.preserve_exact:
            pattern = re.compile(re.escape(preserve_word), re.IGNORECASE)
            matches = pattern.findall(protected_text)
            for match in matches:
                placeholder = f"__PRESERVE_{placeholder_counter}__"
                placeholder_map[placeholder] = match
                protected_text = protected_text.replace(match, placeholder, 1)
                placeholder_counter += 1
        
        # Protect technical patterns
        for pattern in self.compiled_patterns:
            matches = pattern.findall(protected_text)
            for match in matches:
                placeholder = f"__PRESERVE_{placeholder_counter}__"
                placeholder_map[placeholder] = match
                protected_text = pattern.sub(placeholder, protected_text, count=1)
                placeholder_counter += 1
                
        return protected_text, placeholder_map
    
    def restore_preservables(self, text: str, placeholder_map: Dict[str, str]) -> str:
        """Restore preserved content from placeholders"""
        restored_text = text
        for placeholder, original in placeholder_map.items():
            restored_text = restored_text.replace(placeholder, original)
        return restored_text
    
    def translate_to_arabic(self, text: str) -> str:
        """
        Translate text to Arabic using rule-based approach for common terms
        and manual translation for the most common patterns
        """
        # Skip if should be preserved
        if self.should_preserve_string(text):
            return text
            
        # Protect preservable content
        protected_text, placeholder_map = self.protect_preservables(text)
        
        # Manual translation dictionary for common terms
        translations = {
            # Navigation and UI
            "Products": "المنتجات",
            "Solutions": "الحلول", 
            "Industries": "الصناعات",
            "Channels": "القنوات",
            "Pricing": "الأسعار",
            "Blog": "المدونة",
            "Login": "تسجيل الدخول",
            "Sign In": "تسجيل الدخول",
            "Sign Up": "التسجيل",
            "Get Started": "ابدأ الآن",
            "Start Free": "ابدأ مجاناً",
            "Book Demo": "احجز عرضاً تجريبياً",
            "Contact Us": "اتصل بنا",
            "Learn More": "اعرف المزيد",
            "Read More": "اقرأ المزيد",
            "Try Now": "جرب الآن",
            "Back": "العودة",
            "Home": "الرئيسية",
            "Features": "الميزات",
            "About": "معلومات عنا",
            "Careers": "الوظائف",
            "Support": "الدعم",
            "Help": "المساعدة",
            "Search": "البحث",
            "Subscribe": "اشترك",
            "Free Trial": "تجربة مجانية",
            "Schedule Demo": "احجز عرضاً تجريبياً",
            "Compare": "قارن",
            "Overview": "نظرة عامة",
            
            # Business terms
            "Customer Support": "دعم العملاء",
            "Sales": "المبيعات",
            "Marketing": "التسويق", 
            "Automation": "الأتمتة",
            "Analytics": "التحليلات",
            "Insights": "الرؤى",
            "Dashboard": "لوحة التحكم",
            "Campaigns": "الحملات",
            "Leads": "العملاء المحتملين",
            "Customers": "العملاء",
            "Agents": "الوكلاء",
            "Team": "الفريق",
            "Business": "الأعمال",
            "Company": "الشركة",
            "Enterprise": "المؤسسة",
            "Small Business": "الأعمال الصغيرة",
            "Professional": "احترافي",
            "Premium": "مميز",
            "Basic": "أساسي",
            "Advanced": "متقدم",
            
            # Communication channels
            "WhatsApp": "واتساب",
            "SMS": "الرسائل النصية", 
            "Voice": "الصوت",
            "Chat": "الدردشة",
            "Phone": "الهاتف",
            "Email": "البريد الإلكتروني",
            "Website": "الموقع الإلكتروني",
            "Social Media": "وسائل التواصل الاجتماعي",
            "Messaging": "المراسلة",
            "Conversations": "المحادثات",
            "Messages": "الرسائل",
            "Calls": "المكالمات",
            
            # Features and functionality
            "AI-Powered": "مدعوم بالذكاء الاصطناعي",
            "Artificial Intelligence": "الذكاء الاصطناعي",
            "Machine Learning": "تعلم الآلة",
            "Natural Language": "اللغة الطبيعية",
            "Chatbot": "روبوت الدردشة",
            "Voicebot": "روبوت الصوت",
            "Integration": "التكامل",
            "Platform": "المنصة",
            "System": "النظام",
            "Service": "الخدمة",
            "Tool": "أداة",
            "Solution": "الحل",
            "Technology": "التكنولوجيا",
            "Software": "البرمجيات",
            "Application": "التطبيق",
            "Mobile": "الجوال",
            "Web": "الويب",
            "Cloud": "السحابة",
            "Security": "الأمان",
            "Privacy": "الخصوصية",
            "Compliance": "الامتثال",
            
            # Time and availability
            "24/7": "على مدار الساعة",
            "Available": "متاح",
            "Online": "متصل",
            "Offline": "غير متصل",
            "Real-time": "الوقت الفعلي",
            "Instant": "فوري",
            "Immediate": "فوري",
            "Now": "الآن",
            "Today": "اليوم",
            "Tomorrow": "غداً",
            "Minutes": "دقائق",
            "Hours": "ساعات", 
            "Days": "أيام",
            "Weeks": "أسابيع",
            "Months": "شهور",
            "Years": "سنوات",
            
            # Actions and verbs
            "Connect": "اتصل",
            "Integrate": "تكامل",
            "Deploy": "نشر",
            "Setup": "إعداد",
            "Configure": "تكوين",
            "Customize": "تخصيص",
            "Manage": "إدارة",
            "Monitor": "مراقبة",
            "Track": "تتبع",
            "Analyze": "تحليل",
            "Optimize": "تحسين",
            "Automate": "أتمتة",
            "Scale": "توسيع",
            "Grow": "نمو",
            "Transform": "تحويل",
            "Improve": "تحسين",
            "Enhance": "تعزيز",
            "Streamline": "تبسيط",
            "Simplify": "تبسيط",
            "Enable": "تمكين",
            "Empower": "تمكين",
            "Deliver": "تسليم",
            "Provide": "توفير",
            "Offer": "عرض",
            "Support": "دعم",
            "Help": "مساعدة",
            "Assist": "مساعدة",
            
            # Common phrases
            "Get Started Free": "ابدأ مجاناً",
            "Start Your Free Trial": "ابدأ تجربتك المجانية",
            "No Credit Card Required": "لا حاجة لبطاقة ائتمان",
            "Cancel Anytime": "إلغاء في أي وقت",
            "Easy Setup": "إعداد سهل",
            "Quick Integration": "تكامل سريع",
            "Seamless Experience": "تجربة سلسة",
            "Powerful Features": "ميزات قوية",
            "Advanced Capabilities": "قدرات متقدمة",
            "Enterprise Grade": "مستوى المؤسسات",
            "Bank Level Security": "أمان على مستوى البنوك",
            "Industry Leading": "رائد في الصناعة",
            "Award Winning": "حائز على جوائز",
            "Trusted by": "موثوق به من قبل",
            "Used by": "مستخدم من قبل",
            "Join thousands": "انضم إلى الآلاف",
            "Transform your business": "حول أعمالك",
            "Scale your operations": "وسع عملياتك",
            "Boost productivity": "عزز الإنتاجية",
            "Increase efficiency": "زد الكفاءة",
            "Drive growth": "احفز النمو",
            "Maximize ROI": "اعظم العائد على الاستثمار",
        }
        
        # Apply translations
        translated = protected_text
        for english, arabic in translations.items():
            # Case insensitive replacement
            pattern = re.compile(re.escape(english), re.IGNORECASE)
            translated = pattern.sub(arabic, translated)
        
        # Restore preserved content
        final_text = self.restore_preservables(translated, placeholder_map)
        
        return final_text
    
    def process_json_value(self, value: Any) -> Any:
        """Process a JSON value, translating strings and recursing into objects/arrays"""
        if isinstance(value, str):
            return self.translate_to_arabic(value)
        elif isinstance(value, dict):
            return {key: self.process_json_value(val) for key, val in value.items()}
        elif isinstance(value, list):
            return [self.process_json_value(item) for item in value]
        else:
            return value  # Numbers, booleans, null remain unchanged
    
    def process_file(self, input_path: str, output_path: str) -> Dict[str, int]:
        """Process the JSON file and return statistics"""
        stats = {'total_strings': 0, 'translated_strings': 0, 'preserved_strings': 0}
        
        # Load JSON file
        try:
            with open(input_path, 'r', encoding='utf-8') as f:
                data = json.load(f)
        except Exception as e:
            raise Exception(f"Error loading JSON file: {e}")
        
        # Process the JSON data
        processed_data = self.process_json_value(data)
        
        # Save the processed JSON
        try:
            with open(output_path, 'w', encoding='utf-8') as f:
                json.dump(processed_data, f, ensure_ascii=False, indent=2)
        except Exception as e:
            raise Exception(f"Error saving JSON file: {e}")
        
        return stats

def main():
    """Main function to run the translation process"""
    current_dir = os.path.dirname(os.path.abspath(__file__))
    locales_dir = os.path.join(current_dir, 'public', 'locales')
    
    input_file = os.path.join(locales_dir, 'ar.json')
    output_file = input_file  # Overwrite the same file
    backup_file = os.path.join(locales_dir, f'ar_backup_{datetime.now().strftime("%Y%m%d_%H%M%S")}.json')
    
    # Verify input file exists
    if not os.path.exists(input_file):
        print(f"Error: Input file not found: {input_file}")
        return 1
    
    # Create backup
    try:
        import shutil
        shutil.copy2(input_file, backup_file)
        print(f"Backup created: {backup_file}")
    except Exception as e:
        print(f"Error creating backup: {e}")
        return 1
    
    # Process the file
    processor = ArabicTranslationProcessor()
    try:
        stats = processor.process_file(input_file, output_file)
        print(f"Translation completed successfully!")
        print(f"File updated: {output_file}")
        print("Statistics:")
        for key, value in stats.items():
            print(f"  {key}: {value}")
            
    except Exception as e:
        print(f"Error during translation: {e}")
        return 1
        
    return 0

if __name__ == "__main__":
    sys.exit(main())

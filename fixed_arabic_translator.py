#!/usr/bin/env python3
"""
Fixed Arabic Translation Script for ar.json

Fixed the placeholder restoration bug to ensure proper preservation of company names,
technical terms, and other content that should not be translated.
"""

import json
import re
import os
import sys
from typing import Dict, Any, List, Tuple, Set
from datetime import datetime

class FixedArabicTranslator:
    def __init__(self):
        # Company and product names - NEVER translate these
        self.company_names = {
            'Seasalt.ai', 'SeaChat', 'SeaMeet', 'SeaX', 'SeaHealth', 'SeaVoice',
            'Twilio', 'Meta', 'Facebook', 'WhatsApp', 'Instagram', 'Line',
            'WordPress', 'Shopify', 'Squarespace', 'Wix', 'MailerLite',
            'HubSpot', 'Mailchimp', 'Google', 'Microsoft', 'GitHub',
            'Genesys', 'Aircall', 'RingCentral', 'Five9', 'Zendesk',
            'Salesforce', 'Slack', 'Discord', 'Telegram', 'LinkedIn',
            'Kustomer', 'Dialpad'
        }
        
        # Technical abbreviations and acronyms
        self.technical_terms = {
            'API', 'SDK', 'JSON', 'HTML', 'CSS', 'JavaScript', 'Python',
            'Node.js', 'REST', 'GraphQL', 'OAuth', 'SSO', 'SAML',
            'SOC 2', 'HIPAA', 'GDPR', 'TCPA', 'FINRA', 'PCI DSS',
            '10DLC', 'SMS', 'MMS', 'SIP', 'VoIP', 'WebRTC',
            'AI', 'ML', 'NLP', 'LLM', 'RAG', 'TTS', 'STT', 'ASR',
            'CRM', 'ERP', 'SaaS', 'PaaS', 'IaaS', 'UCaaS', 'CCaaS',
            'UI', 'UX', 'B2B', 'B2C', 'SEO', 'SEM', 'CTR', 'CPC',
            'CPA', 'ROI', 'KPI', 'ROAS', 'LTV', 'CAC', 'GDS'
        }
        
        # Comprehensive Arabic translations dictionary
        self.translations = {
            # Basic UI and navigation
            "Products": "المنتجات",
            "Solutions": "الحلول",
            "Industries": "الصناعات", 
            "Channels": "القنوات",
            "Pricing": "الأسعار",
            "Blog": "المدونة",
            "Support": "الدعم",
            "Help": "المساعدة",
            "Login": "تسجيل الدخول",
            "Sign In": "تسجيل الدخول",
            "Sign Up": "التسجيل",
            "Get Started": "ابدأ الآن",
            "Start Free": "ابدأ مجاناً",
            "Start Now": "ابدأ الآن",
            "Book Demo": "احجز عرضاً تجريبياً",
            "Schedule Demo": "احجز عرضاً تجريبياً",
            "See Demo": "شاهد العرض التجريبي",
            "Contact Us": "اتصل بنا",
            "Learn More": "اعرف المزيد",
            "Read More": "اقرأ المزيد",
            "Try Now": "جرب الآن",
            "Back": "العودة",
            "Home": "الرئيسية",
            "Features": "الميزات",
            "About": "معلومات عنا",
            "Careers": "الوظائف",
            
            # Business terms
            "Customer": "العميل",
            "Customers": "العملاء",
            "Business": "الأعمال",
            "Company": "الشركة",
            "Enterprise": "المؤسسة",
            "Team": "الفريق",
            "Agents": "الوكلاء",
            "Agent": "الوكيل",
            "Human Agent": "الوكيل البشري",
            "Live Agent": "الوكيل المباشر",
            "Support Agent": "وكيل الدعم",
            "Customer Support": "دعم العملاء",
            "Sales": "المبيعات",
            "Marketing": "التسويق",
            "Lead": "العميل المحتمل",
            "Leads": "العملاء المحتملون",
            
            # Communication channels
            "Chat": "الدردشة",
            "Voice": "الصوت",
            "Phone": "الهاتف",
            "Call": "المكالمة",
            "Calls": "المكالمات",
            "Message": "الرسالة",
            "Messages": "الرسائل",
            "Messaging": "المراسلة",
            "Conversation": "المحادثة",
            "Conversations": "المحادثات",
            "Email": "البريد الإلكتروني",
            "Website": "الموقع الإلكتروني",
            "Social Media": "وسائل التواصل الاجتماعي",
            
            # Technology terms
            "Platform": "المنصة",
            "System": "النظام",
            "Tool": "أداة",
            "Tools": "الأدوات",
            "Service": "الخدمة",
            "Services": "الخدمات",
            "Solution": "الحل",
            "Solutions": "الحلول",
            "Feature": "الميزة",
            "Features": "الميزات",
            "Integration": "التكامل",
            "Integrations": "التكاملات",
            "Automation": "الأتمتة",
            "Automated": "تلقائي",
            "Smart": "ذكي",
            "Intelligent": "ذكي",
            "Advanced": "متقدم",
            "AI-Powered": "مدعوم بالذكاء الاصطناعي",
            "Chatbot": "روبوت الدردشة",
            "Voicebot": "روبوت الصوت",
            
            # Actions
            "Connect": "اتصال",
            "Setup": "إعداد",
            "Configure": "تكوين",
            "Deploy": "نشر",
            "Launch": "إطلاق",
            "Start": "بداية",
            "Create": "إنشاء",
            "Build": "بناء",
            "Manage": "إدارة",
            "Monitor": "مراقبة",
            "Track": "تتبع",
            "Analyze": "تحليل",
            "Optimize": "تحسين",
            "Scale": "توسيع",
            "Transform": "تحويل",
            "Improve": "تحسين",
            "Enable": "تمكين",
            "Deliver": "تسليم",
            "Provide": "توفير",
            
            # Time and availability
            "Available": "متاح",
            "Online": "متصل",
            "Real-time": "الوقت الفعلي",
            "Instant": "فوري",
            "Now": "الآن",
            "Today": "اليوم",
            "24/7": "على مدار الساعة",
            "Minutes": "دقائق",
            "Hours": "ساعات",
            "Days": "أيام",
            "Months": "شهور",
            
            # Status and quality
            "Free": "متاح",
            "Premium": "مميز",
            "Professional": "احترافي",
            "Enterprise": "المؤسسة",
            "Basic": "أساسي",
            "Advanced": "متقدم",
            "High": "عالي",
            "Low": "منخفض",
            "Fast": "سريع",
            "Quick": "سريع",
            "Easy": "سهل",
            "Simple": "بسيط",
            "Powerful": "قوي",
            "Secure": "آمن",
            "Safe": "آمن",
            "Reliable": "موثوق",
            "Effective": "فعال",
            
            # Common phrases
            "Get Started Free": "ابدأ مجاناً",
            "Free Trial": "تجربة مجانية", 
            "No Credit Card Required": "لا حاجة لبطاقة ائتمان",
            "Easy Setup": "إعداد سهل",
            "Quick Integration": "تكامل سريع",
            "Trusted by": "موثوق به من قبل",
            "Used by": "مستخدم من قبل",
            "Join thousands": "انضم إلى الآلاف",
            "Hello": "مرحباً",
            "Welcome": "مرحباً",
            "Thank you": "شكراً لك",
            "Thanks": "شكراً",
            "Yes": "نعم",
            "No": "لا",
            "Good": "جيد",
            "Great": "رائع",
            "Excellent": "ممتاز",
            "Perfect": "مثالي",
            "Active": "نشط",
            "Total": "المجموع",
            "Order": "الطلب",
            "Cost": "التكلفة",
            "Price": "السعر",
            "Value": "القيمة",
            "Analytics": "التحليلات",
            "Dashboard": "لوحة التحكم",
            "Management": "الإدارة",
            "Operations": "العمليات",
            "Performance": "الأداء",
            "Quality": "الجودة",
            "Security": "الأمان",
            "Privacy": "الخصوصية",
            "Compliance": "الامتثال",
            "Report": "التقرير",
            "Reports": "التقارير",
            "Data": "البيانات",
            "Information": "المعلومات",
            "Content": "المحتوى",
            "Page": "الصفحة",
            "Section": "القسم",
            "Category": "الفئة",
            "Type": "النوع",
            "Status": "الحالة",
            "State": "الحالة",
            "Mode": "الوضع",
            "Level": "المستوى",
            "Rate": "المعدل",
            "Speed": "السرعة",
            "Time": "الوقت",
            "Date": "التاريخ"
        }
        
        # Statistics tracking
        self.stats = {
            'total_strings': 0,
            'translated_strings': 0,
            'preserved_strings': 0,
            'mixed_content_strings': 0,
            'empty_strings': 0
        }
        
        # Logging
        self.log_entries = []
        
    def log(self, message: str, level: str = "INFO"):
        """Add a log entry"""
        timestamp = datetime.now().strftime("%H:%M:%S")
        entry = f"[{timestamp}] {level}: {message}"
        self.log_entries.append(entry)
        print(entry)
    
    def should_preserve_entire_string(self, text: str) -> bool:
        """Check if entire string should be preserved"""
        if not text or not text.strip():
            return True
        
        text_strip = text.strip()
        
        # Preserve exact technical terms and company names
        if text_strip in self.company_names or text_strip in self.technical_terms:
            return True
        
        # Preserve URLs, emails, phone numbers
        patterns = [
            r'^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$',  # Email
            r'^https?://',  # URLs
            r'^\+\d{1,3}[\s-]?\(?\d{1,4}\)?[\s-]?\d{1,4}[\s-]?\d{1,9}$',  # Phone
            r'^#[A-Fa-f0-9]{3,6}$',  # Hex colors
            r'^\$[\d,]+\.?\d*$',  # Currency
            r'^\d+%$',  # Percentages
            r'^[A-Z]{2,}$',  # All caps (likely acronyms)
        ]
        
        for pattern in patterns:
            if re.match(pattern, text_strip, re.IGNORECASE):
                return True
        
        # Check if it's mostly symbols, numbers, or punctuation
        if re.match(r'^[^a-zA-Z]*$', text_strip):
            return True
            
        return False
    
    def protect_preservables_in_text(self, text: str) -> Tuple[str, Dict[str, str]]:
        """Replace preservable content with unique placeholders"""
        if self.should_preserve_entire_string(text):
            return text, {}
            
        placeholder_map = {}
        protected_text = text
        
        # Create unique placeholder counter for this text
        import uuid
        unique_id = str(uuid.uuid4())[:8]
        placeholder_counter = 0
        
        # Protect company and product names (case-insensitive, whole word)
        for name in sorted(self.company_names, key=len, reverse=True):
            pattern = re.compile(r'\b' + re.escape(name) + r'\b', re.IGNORECASE)
            while pattern.search(protected_text):
                match = pattern.search(protected_text)
                if match:
                    placeholder = f"__PRESERVE_{unique_id}_{placeholder_counter}__"
                    placeholder_map[placeholder] = match.group()
                    protected_text = protected_text[:match.start()] + placeholder + protected_text[match.end():]
                    placeholder_counter += 1
                else:
                    break
        
        # Protect technical terms (case-insensitive, whole word)
        for term in sorted(self.technical_terms, key=len, reverse=True):
            pattern = re.compile(r'\b' + re.escape(term) + r'\b', re.IGNORECASE)
            while pattern.search(protected_text):
                match = pattern.search(protected_text)
                if match:
                    placeholder = f"__PRESERVE_{unique_id}_{placeholder_counter}__"
                    placeholder_map[placeholder] = match.group()
                    protected_text = protected_text[:match.start()] + placeholder + protected_text[match.end():]
                    placeholder_counter += 1
                else:
                    break
        
        # Protect common technical patterns
        patterns = [
            r'[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}',  # Email
            r'https?://[^\s<>"{}|\\^`\[\]]+',  # URLs
            r'\+\d{1,3}[\s-]?\(?\d{1,4}\)?[\s-]?\d{1,4}[\s-]?\d{1,9}',  # Phone
            r'#[A-Fa-f0-9]{3,6}',  # Hex colors
            r'\$\{[^}]+\}',  # Template variables
            r'{{[^}]+}}',  # Template variables
            r'<[^>]+>',  # HTML tags
            r'&[a-zA-Z][a-zA-Z0-9]*;',  # HTML entities
            r'\\[nrtbf"\'\\]',  # Escape sequences
            r'\$[\d,]+\.?\d*',  # Currency
            r'\d+%',  # Percentages
        ]
        
        for pattern_str in patterns:
            pattern = re.compile(pattern_str, re.IGNORECASE)
            while pattern.search(protected_text):
                match = pattern.search(protected_text)
                if match:
                    placeholder = f"__PRESERVE_{unique_id}_{placeholder_counter}__"
                    placeholder_map[placeholder] = match.group()
                    protected_text = protected_text[:match.start()] + placeholder + protected_text[match.end():]
                    placeholder_counter += 1
                else:
                    break
                
        return protected_text, placeholder_map
    
    def restore_preservables_in_text(self, text: str, placeholder_map: Dict[str, str]) -> str:
        """Restore preserved content from placeholders"""
        restored_text = text
        # Sort by placeholder length (longer first) to avoid partial replacements
        for placeholder in sorted(placeholder_map.keys(), key=len, reverse=True):
            original = placeholder_map[placeholder]
            restored_text = restored_text.replace(placeholder, original)
        return restored_text
    
    def translate_text(self, text: str) -> str:
        """Translate text to Arabic with comprehensive rules"""
        if not text or not text.strip():
            self.stats['empty_strings'] += 1
            return text
        
        # Check if entire string should be preserved
        if self.should_preserve_entire_string(text):
            self.stats['preserved_strings'] += 1
            return text
        
        # Protect preservable content
        protected_text, placeholder_map = self.protect_preservables_in_text(text)
        
        # Apply translations
        translated = protected_text
        translation_applied = False
        
        # Sort translations by length (longest first) to avoid partial word replacements
        for english, arabic in sorted(self.translations.items(), key=lambda x: len(x[0]), reverse=True):
            # Use word boundaries for whole word replacement
            pattern = re.compile(r'\b' + re.escape(english) + r'\b', re.IGNORECASE)
            if pattern.search(translated):
                translated = pattern.sub(arabic, translated)
                translation_applied = True
        
        # Restore preserved content
        final_text = self.restore_preservables_in_text(translated, placeholder_map)
        
        # Update statistics
        if translation_applied:
            self.stats['translated_strings'] += 1
        else:
            # Check if it's mixed content (contains both Arabic and English)
            has_arabic = bool(re.search(r'[\u0600-\u06FF]', final_text))
            has_english = bool(re.search(r'[a-zA-Z]', final_text))
            if has_arabic and has_english:
                self.stats['mixed_content_strings'] += 1
            else:
                self.stats['preserved_strings'] += 1
        
        return final_text
    
    def process_json_value(self, value: Any, path: str = "") -> Any:
        """Process a JSON value recursively"""
        if isinstance(value, str):
            self.stats['total_strings'] += 1
            return self.translate_text(value)
        elif isinstance(value, dict):
            return {key: self.process_json_value(val, f"{path}.{key}" if path else key) 
                    for key, val in value.items()}
        elif isinstance(value, list):
            return [self.process_json_value(item, f"{path}[{i}]") 
                    for i, item in enumerate(value)]
        else:
            return value
    
    def process_file(self, input_path: str, output_path: str) -> Dict[str, int]:
        """Process the JSON file"""
        self.log(f"Starting translation process for {input_path}")
        
        # Load JSON file
        try:
            with open(input_path, 'r', encoding='utf-8') as f:
                data = json.load(f)
            self.log(f"Successfully loaded JSON file")
        except Exception as e:
            self.log(f"Error loading JSON file: {e}", "ERROR")
            raise
        
        # Process the data
        self.log("Processing JSON data...")
        processed_data = self.process_json_value(data)
        self.log("JSON processing completed")
        
        # Save the processed JSON
        try:
            with open(output_path, 'w', encoding='utf-8') as f:
                json.dump(processed_data, f, ensure_ascii=False, indent=2)
            self.log(f"Successfully saved translated JSON to {output_path}")
        except Exception as e:
            self.log(f"Error saving JSON file: {e}", "ERROR")
            raise
        
        return self.stats
    
    def save_log(self, log_path: str):
        """Save the log to a file"""
        try:
            with open(log_path, 'w', encoding='utf-8') as f:
                f.write("\n".join(self.log_entries))
        except Exception as e:
            print(f"Error saving log: {e}")

def main():
    """Main function"""
    current_dir = os.path.dirname(os.path.abspath(__file__))
    locales_dir = os.path.join(current_dir, 'public', 'locales')
    
    input_file = os.path.join(locales_dir, 'ar.json')
    backup_file = os.path.join(locales_dir, f'ar_backup_fixed_{datetime.now().strftime("%Y%m%d_%H%M%S")}.json')
    log_file = os.path.join(current_dir, f'translation_log_fixed_{datetime.now().strftime("%Y%m%d_%H%M%S")}.txt')
    
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
    translator = FixedArabicTranslator()
    
    try:
        stats = translator.process_file(input_file, input_file)
        
        translator.log("=== TRANSLATION COMPLETED ===")
        translator.log("Final Statistics:")
        for key, value in stats.items():
            translator.log(f"  {key}: {value:,}")
        
        # Calculate percentages
        total = stats['total_strings']
        if total > 0:
            translator.log(f"Translation Coverage:")
            translator.log(f"  Translated: {stats['translated_strings']/total*100:.1f}%")
            translator.log(f"  Preserved: {stats['preserved_strings']/total*100:.1f}%")
            translator.log(f"  Mixed Content: {stats['mixed_content_strings']/total*100:.1f}%")
            translator.log(f"  Empty: {stats['empty_strings']/total*100:.1f}%")
        
        # Save log
        translator.save_log(log_file)
        print(f"\nLog saved to: {log_file}")
        
        return 0
        
    except Exception as e:
        translator.log(f"Error during translation: {e}", "ERROR")
        translator.save_log(log_file)
        return 1

if __name__ == "__main__":
    sys.exit(main())

#!/usr/bin/env python3
"""
Final Arabic Translation Script - FIXED PLACEHOLDER SYSTEM

This version fixes the placeholder restoration bug and provides clean translations.
"""

import json
import re
import os
import sys
from typing import Dict, Any
from datetime import datetime

class FinalArabicTranslator:
    def __init__(self):
        # Company and product names that should NEVER be translated
        self.company_names = {
            'Seasalt.ai', 'SeaChat', 'SeaMeet', 'SeaX', 'SeaHealth', 'SeaVoice',
            'Twilio', 'Meta', 'Facebook', 'WhatsApp', 'Instagram', 'Line',
            'WordPress', 'Shopify', 'Squarespace', 'Wix', 'MailerLite',
            'HubSpot', 'Mailchimp', 'Google', 'Microsoft', 'GitHub',
            'Genesys', 'Aircall', 'RingCentral', 'Five9', 'Zendesk',
            'Salesforce', 'Slack', 'Discord', 'Telegram', 'LinkedIn',
            'Kustomer', 'Dialpad'
        }
        
        # Technical terms that should remain in English
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
        
        # Simple English to Arabic translations
        self.translations = {
            # Basic UI
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
            "Book Demo": "احجز عرضاً تجريبياً",
            "Schedule Demo": "احجز عرضاً تجريبياً",
            "See Demo": "شاهد العرض التجريبي",
            "Contact Us": "اتصل بنا",
            "Learn More": "اعرف المزيد",
            "Try Now": "جرب الآن",
            "Back": "العودة",
            "Home": "الرئيسية",
            "Features": "الميزات",
            "About": "معلومات عنا",
            "Careers": "الوظائف",
            "Free Trial": "تجربة مجانية",
            
            # Business terms
            "Customer": "العميل",
            "Customers": "العملاء",
            "Business": "الأعمال",
            "Company": "الشركة",
            "Enterprise": "المؤسسة",
            "Team": "الفريق",
            "Agent": "الوكيل",
            "Agents": "الوكلاء",
            "Sales": "المبيعات",
            "Marketing": "التسويق",
            "Lead": "العميل المحتمل",
            "Leads": "العملاء المحتملون",
            
            # Communication
            "Chat": "الدردشة",
            "Voice": "الصوت",
            "Phone": "الهاتف",
            "Call": "المكالمة",
            "Calls": "المكالمات",
            "Message": "الرسالة",
            "Messages": "الرسائل",
            "Email": "البريد الإلكتروني",
            "Website": "الموقع الإلكتروني",
            
            # Technology
            "Platform": "المنصة",
            "System": "النظام",
            "Tool": "أداة",
            "Tools": "الأدوات",
            "Service": "الخدمة",
            "Solution": "الحل",
            "Feature": "الميزة",
            "Features": "الميزات",
            "Integration": "التكامل",
            "Automation": "الأتمتة",
            "Smart": "ذكي",
            "Advanced": "متقدم",
            
            # Actions
            "Connect": "اتصال",
            "Setup": "إعداد",
            "Create": "إنشاء",
            "Build": "بناء",
            "Manage": "إدارة",
            "Start": "بداية",
            "Available": "متاح",
            "Online": "متصل",
            "Free": "مجاني",
            "Now": "الآن",
            "Today": "اليوم",
            
            # Status
            "Active": "نشط",
            "Total": "المجموع",
            "Cost": "التكلفة",
            "Price": "السعر",
            "Order": "الطلب",
            "Management": "الإدارة",
            "Analytics": "التحليلات",
            "Dashboard": "لوحة التحكم",
            "Security": "الأمان",
            "Privacy": "الخصوصية",
            
            # Common phrases
            "Hello": "مرحباً",
            "Welcome": "مرحباً",
            "Thank you": "شكراً لك",
            "Thanks": "شكراً",
            "Yes": "نعم",
            "No": "لا"
        }
        
    def should_preserve_string(self, text: str) -> bool:
        """Check if entire string should be preserved"""
        if not text or not text.strip():
            return True
        
        text_clean = text.strip()
        
        # Preserve company names
        if text_clean in self.company_names:
            return True
            
        # Preserve technical terms
        if text_clean in self.technical_terms:
            return True
            
        # Preserve URLs, emails, phone numbers
        patterns = [
            r'^https?://',  # URLs
            r'^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$',  # Email
            r'^\+\d{1,3}[\s-]?\(?\d{1,4}\)?[\s-]?\d{1,4}[\s-]?\d{1,9}$',  # Phone
            r'^\$[\d,]+\.?\d*$',  # Currency
            r'^\d+%$',  # Percentages
            r'^#[A-Fa-f0-9]{3,6}$',  # Hex colors
        ]
        
        for pattern in patterns:
            if re.match(pattern, text_clean, re.IGNORECASE):
                return True
        
        # Preserve if mostly non-letters (numbers, symbols)
        if re.match(r'^[^a-zA-Z]*$', text_clean):
            return True
            
        return False
    
    def translate_text(self, text: str) -> str:
        """Simple translation without complex placeholders"""
        if not text or not text.strip():
            return text
        
        # If entire string should be preserved, return as-is
        if self.should_preserve_string(text):
            return text
        
        # Start with original text
        result = text
        
        # Apply simple word-by-word translations
        for english, arabic in sorted(self.translations.items(), key=lambda x: len(x[0]), reverse=True):
            # Use word boundaries to avoid partial matches
            pattern = r'\b' + re.escape(english) + r'\b'
            result = re.sub(pattern, arabic, result, flags=re.IGNORECASE)
        
        return result
    
    def process_json_value(self, value: Any) -> Any:
        """Process JSON value recursively"""
        if isinstance(value, str):
            return self.translate_text(value)
        elif isinstance(value, dict):
            return {key: self.process_json_value(val) for key, val in value.items()}
        elif isinstance(value, list):
            return [self.process_json_value(item) for item in value]
        else:
            return value
    
    def process_file(self, input_path: str, output_path: str):
        """Process the JSON file"""
        print(f"Loading {input_path}...")
        
        # Load JSON
        with open(input_path, 'r', encoding='utf-8') as f:
            data = json.load(f)
        
        print("Translating content...")
        
        # Process data
        processed_data = self.process_json_value(data)
        
        print(f"Saving to {output_path}...")
        
        # Save result
        with open(output_path, 'w', encoding='utf-8') as f:
            json.dump(processed_data, f, ensure_ascii=False, indent=2)
        
        print("Translation completed!")

def main():
    """Main function"""
    current_dir = os.path.dirname(os.path.abspath(__file__))
    locales_dir = os.path.join(current_dir, 'public', 'locales')
    
    # Use backup file as source to start clean
    backup_file = os.path.join(locales_dir, 'ar_backup_20250903.json')
    output_file = os.path.join(locales_dir, 'ar.json')
    
    if not os.path.exists(backup_file):
        print(f"Error: Backup file not found: {backup_file}")
        print("Available backup files:")
        for f in os.listdir(locales_dir):
            if f.startswith('ar_backup'):
                print(f"  {f}")
        return 1
    
    translator = FinalArabicTranslator()
    translator.process_file(backup_file, output_file)
    
    return 0

if __name__ == "__main__":
    sys.exit(main())

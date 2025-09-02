#!/usr/bin/env python3
import json
import re
import sys

def should_not_translate(value):
    """
    Check if a value should not be translated based on the rules:
    - Company/product names (Seasalt.ai, SeaChat, SeaMeet, SeaX, SeaVoice, SeaHealth, etc.)
    - Author names (names in quotes or after dashes)
    - Technical terms that should remain unchanged
    - URLs, emails, phone numbers
    """
    if not isinstance(value, str):
        return True
    
    # Company and product names
    company_products = [
        "Seasalt.ai", "SeaChat", "SeaMeet", "SeaX", "SeaVoice", "SeaHealth",
        "WhatsApp", "Instagram", "Facebook", "LINE", "Gmail", "Outlook",
        "Shopify", "WordPress", "Squarespace", "Wix", "HubSpot", "Salesforce",
        "Mailchimp", "MailerLite", "Twilio", "Discord", "LinkedIn", "Twitter",
        "Google", "Microsoft", "Apple", "Amazon", "Meta", "Zoom", "Slack"
    ]
    
    for name in company_products:
        if name.lower() in value.lower():
            return True
    
    # URLs and emails
    if re.search(r'https?://|@|\.(com|ai|org|net)', value):
        return True
    
    # Phone numbers
    if re.search(r'\+\d|^\d+[-\s]\d+', value):
        return True
    
    # Technical codes and IDs
    if re.search(r'^[A-Z0-9]{2,}$|^\d+[A-Z]+$', value):
        return True
        
    return False

def translate_value(value):
    """
    Translate English values to Arabic following the specified rules
    """
    if should_not_translate(value):
        return value
    
    # Translation mappings - this is a simplified mapping
    # In a real implementation, you would use a translation service
    translations = {
        # Navigation and common UI
        "Products": "المنتجات",
        "Solutions": "الحلول", 
        "Industries": "الصناعات",
        "Channels": "القنوات",
        "Pricing": "التسعير",
        "Compare Us": "قارننا",
        "Blog": "المدونة",
        "Login": "تسجيل الدخول",
        "Sign Up": "سجل",
        "Sign In": "تسجيل الدخول",
        "Back to Channels": "العودة إلى القنوات",
        "All Channels Overview": "نظرة عامة على جميع القنوات",
        
        # Header sections
        "For Sales & Marketing": "للمبيعات والتسويق",
        "For Customer Support": "لدعم العملاء", 
        "AI & Automation": "الذكاء الاصطناعي والأتمتة",
        "For SME Owners": "لأصحاب الشركات الصغيرة والمتوسطة",
        
        # Channels
        "Phone Calls": "المكالمات الهاتفية",
        "SMS": "رسائل نصية قصيرة",
        "Website Chat": "الدردشة عبر الموقع",
        "Facebook Messenger": "ماسنجر فيسبوك",
        "Contact Forms": "نماذج الاتصال",
        "Website Widget": "أداة الموقع",
        
        # Footer
        "Company": "الشركة",
        "Contact Us": "اتصل بنا",
        "About Us": "من نحن", 
        "Careers": "وظائف",
        "Privacy Policy": "سياسة الخصوصية",
        "Terms of Service": "شروط الخدمة",
        "Security": "الأمان",
        
        # Features
        "Features": "الميزات",
        "Knowledge Base": "قاعدة المعرفة",
        "API References": "مراجع واجهة برمجة التطبيقات",
        
        # Common actions
        "Get Started": "ابدأ",
        "Book A Demo": "احجز عرض توضيحي",
        "Schedule Demo": "جدولة عرض توضيحي",
        "Start Free Trial": "ابدأ النسخة التجريبية المجانية",
        "Contact Sales": "اتصل بالمبيعات",
        "Learn More": "اعرف المزيد",
        "Read More": "اقرأ المزيد",
        "View All": "عرض الكل",
        "Try Now": "جرب الآن",
        
        # Business terms
        "Lead Generation": "توليد العملاء المحتملين",
        "Marketing Automation": "أتمتة التسويق",
        "Customer Engagement": "مشاركة العملاء",
        "Appointment Reminders": "تذكيرات المواعيد",
        "Emergency Alerts": "تنبيهات الطوارئ",
        
        # Industries
        "E-commerce & Retail": "التجارة الإلكترونية والتجزئة",
        "Real Estate": "العقارات",
        "Political Campaigns": "الحملات السياسية", 
        "Healthcare": "الرعاية الصحية",
        "Financial Services": "الخدمات المالية",
        "Education": "التعليم",
        
        # Time and numbers
        "Daily": "يوميًا",
        "Weekly": "أسبوعيًا", 
        "Monthly": "شهريًا",
        "Users": "المستخدمون",
        "Messages": "الرسائل",
        "Uptime": "وقت التشغيل",
        
        # Location
        "Seattle, WA": "سياتل، واشنطن",
        
        # Common phrases
        "Made with": "صُنع بـ",
        "in the city of": "في مدينة",
        "All rights reserved": "جميع الحقوق محفوظة",
    }
    
    # Check for exact matches first
    if value in translations:
        return translations[value]
    
    # Check for partial matches and replace
    result = value
    for english, arabic in translations.items():
        if english.lower() in result.lower():
            # Use case-insensitive replacement but preserve structure
            pattern = re.compile(re.escape(english), re.IGNORECASE)
            result = pattern.sub(arabic, result)
    
    # If no translation found, return original (this would be enhanced with a translation service)
    return result

def translate_json_values(obj):
    """
    Recursively translate JSON values while preserving structure
    """
    if isinstance(obj, dict):
        return {key: translate_json_values(value) for key, value in obj.items()}
    elif isinstance(obj, list):
        return [translate_json_values(item) for item in obj]
    elif isinstance(obj, str):
        return translate_value(obj)
    else:
        return obj

def main():
    if len(sys.argv) != 3:
        print("Usage: python translate_to_arabic.py input.json output.json")
        sys.exit(1)
    
    input_file = sys.argv[1]
    output_file = sys.argv[2]
    
    # Read the English JSON
    with open(input_file, 'r', encoding='utf-8') as f:
        english_data = json.load(f)
    
    # Translate the values
    arabic_data = translate_json_values(english_data)
    
    # Write the Arabic JSON
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(arabic_data, f, ensure_ascii=False, indent=2)
    
    print(f"Translation complete: {input_file} -> {output_file}")

if __name__ == "__main__":
    main()

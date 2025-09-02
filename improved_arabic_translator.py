#!/usr/bin/env python3
import json
import re
import sys

def should_not_translate(value):
    """
    Check if a value should not be translated based on the rules
    """
    if not isinstance(value, str):
        return True
    
    # Company and product names (case insensitive)
    company_products = [
        "seasalt.ai", "seachat", "seameet", "seax", "seavoice", "seahealth",
        "whatsapp", "instagram", "facebook", "line", "gmail", "outlook",
        "shopify", "wordpress", "squarespace", "wix", "hubspot", "salesforce",
        "mailchimp", "mailerlite", "twilio", "discord", "linkedin", "twitter",
        "google", "microsoft", "apple", "amazon", "meta", "zoom", "slack"
    ]
    
    for name in company_products:
        if name in value.lower():
            return True
    
    # URLs and emails  
    if re.search(r'https?://|@|\.(com|ai|org|net|io)', value):
        return True
    
    # Phone numbers
    if re.search(r'\+\d|^\d+[-\s]\d+|\(\d+\)', value):
        return True
    
    # Technical codes
    if re.search(r'^[A-Z0-9]{2,}$|10DLC|8XX|xxxxx|SOC 2|HIPAA|API', value):
        return True
    
    # Author names (after dash or in quotes)
    if re.search(r'^—|^-|^".*"$', value):
        return True
        
    return False

def get_translation_mappings():
    """
    Get translation mappings with better word boundary handling
    """
    return {
        # Exact phrase translations
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
        "Get Started": "ابدأ",
        "Book A Demo": "احجز عرض توضيحي",
        "Schedule Demo": "جدولة عرض توضيحي",
        "Contact Us": "اتصل بنا",
        "About Us": "من نحن",
        "Careers": "وظائف",
        "Features": "الميزات",
        "Knowledge Base": "قاعدة المعرفة",
        "Product Wiki": "ويكي المنتج",
        "Privacy Policy": "سياسة الخصوصية",
        "Terms of Service": "شروط الخدمة",
        "Security": "الأمان",
        "Company": "الشركة",
        "Use Cases": "حالات الاستخدام",
        "For Sales & Marketing": "للمبيعات والتسويق",
        "For Customer Support": "لدعم العملاء",
        "AI & Automation": "الذكاء الاصطناعي والأتمتة",
        "For SME Owners": "لأصحاب الشركات الصغيرة والمتوسطة",
        "Phone Calls": "المكالمات الهاتفية",
        "Website Chat": "الدردشة عبر الموقع",
        "Contact Forms": "نماذج الاتصال",
        "Website Widget": "أداة الموقع",
        "Back to Channels": "العودة إلى القنوات",
        "All Channels Overview": "نظرة عامة على جميع القنوات",
        "All Comparisons Overview": "نظرة عامة على جميع المقارنات",
        "Comparisons": "المقارنات",
        
        # Business terms
        "Lead Generation": "توليد العملاء المحتملين",
        "Marketing Automation": "أتمتة التسويق",
        "Customer Engagement": "مشاركة العملاء", 
        "Appointment Reminders": "تذكيرات المواعيد",
        "Emergency Alerts": "تنبيهات الطوارئ",
        "Customer Support": "دعم العملاء",
        
        # Industries
        "E-commerce & Retail": "التجارة الإلكترونية والتجزئة",
        "Real Estate": "العقارات",
        "Political Campaigns": "الحملات السياسية",
        "Healthcare": "الرعاية الصحية",
        "Financial Services": "الخدمات المالية",
        "Education": "التعليم",
        
        # Hero section  
        "Stop Juggling Apps": "توقف عن التنقل بين التطبيقات",
        "Unify Every Customer": "وحد كل عميل",
        "in One Simple Inbox": "في صندوق وارد واحد بسيط",
        "Trusted by growing businesses worldwide": "موثوق به من الشركات النامية حول العالم",
        
        # Features
        "The Omni-Channel Copiloted Contact Center for SMEs": "مركز الاتصال متعدد القنوات المدعوم بالذكاء الاصطناعي للشركات الصغيرة والمتوسطة",
        "Unified Omni-Channel Inbox": "صندوق وارد موحد متعدد القنوات",
        "AI Voicebot & Chatbot": "روبوت صوتي ومحادثة بالذكاء الاصطناعي",
        "Outbound Marketing Campaigns": "حملات التسويق الخارجية",
        "Enterprise-Grade Security": "أمان على مستوى المؤسسات",
        "Simple, Predictable Pricing": "تسعير بسيط ومتوقع",
        
        # Channel specific
        "Toll-Free Number": "رقم مجاني",
        "Short Code": "رمز قصير",
        "Phone Call Voice": "صوت المكالمات الهاتفية",
        
        # Stats
        "Messages Daily": "رسائل يومية",
        "Active Users": "مستخدمون نشطون",
        "99.9% Uptime": "وقت تشغيل 99.9%",
        "Daily": "يومية",
        "Users": "مستخدمون",
        
        # Location
        "Seattle, WA": "سياتل، واشنطن", 
        "Made with": "صُنع بـ",
        "in the city of": "في مدينة",
        
        # Common actions
        "Start Free Trial": "ابدأ النسخة التجريبية المجانية",
        "Sign Up Now": "سجل الآن",
        "Learn More": "اعرف المزيد",
        "Read More": "اقرأ المزيد",
        "Try Now": "جرب الآن",
        "See Demo": "شاهد عرض توضيحي",
        
        # Single word translations (more careful)
        "Chat": "دردشة",
        "Phone": "هاتف", 
        "Email": "بريد إلكتروني",
        "Support": "دعم",
        "Sales": "مبيعات",
        "Free": "مجاني",
        "Help": "مساعدة",
        "Contact": "اتصل",
        "Start": "ابدأ",
        "Messages": "رسائل",
        "Uptime": "وقت التشغيل"
    }

def translate_value(value, translations):
    """
    Translate English values to Arabic with precise matching
    """
    if should_not_translate(value):
        return value
    
    # Check for exact matches first
    if value in translations:
        return translations[value]
    
    # For longer phrases, check if the entire value matches a translation
    result = value
    translated = False
    
    # Sort by length (longest first) to avoid partial replacements
    sorted_translations = sorted(translations.items(), key=lambda x: len(x[0]), reverse=True)
    
    for english, arabic in sorted_translations:
        # Only translate if it's an exact match or word boundary match
        if value == english:
            return arabic
        elif len(english.split()) > 1:  # Multi-word phrases
            pattern = re.compile(r'\b' + re.escape(english) + r'\b', re.IGNORECASE)
            if pattern.search(result):
                result = pattern.sub(arabic, result)
                translated = True
    
    return result

def translate_json_values(obj, translations):
    """
    Recursively translate JSON values while preserving structure
    """
    if isinstance(obj, dict):
        return {key: translate_json_values(value, translations) for key, value in obj.items()}
    elif isinstance(obj, list):
        return [translate_json_values(item, translations) for item in obj]
    elif isinstance(obj, str):
        return translate_value(obj, translations)
    else:
        return obj

def main():
    if len(sys.argv) != 3:
        print("Usage: python improved_arabic_translator.py input.json output.json")
        sys.exit(1)
    
    input_file = sys.argv[1] 
    output_file = sys.argv[2]
    
    translations = get_translation_mappings()
    
    with open(input_file, 'r', encoding='utf-8') as f:
        english_data = json.load(f)
    
    arabic_data = translate_json_values(english_data, translations)
    
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(arabic_data, f, ensure_ascii=False, indent=2)
    
    print(f"Translation complete: {input_file} -> {output_file}")

if __name__ == "__main__":
    main()

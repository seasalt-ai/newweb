#!/usr/bin/env python3
import json
import re
import sys

def should_not_translate(value):
    """
    Check if a value should not be translated based on the rules:
    - Company/product names
    - Author names
    - Technical terms that should remain unchanged
    - URLs, emails, phone numbers
    """
    if not isinstance(value, str):
        return True
    
    # Company and product names (case insensitive)
    company_products = [
        "seasalt.ai", "seachat", "seameet", "seax", "seavoice", "seahealth",
        "whatsapp", "instagram", "facebook", "line", "gmail", "outlook",
        "shopify", "wordpress", "squarespace", "wix", "hubspot", "salesforce",
        "mailchimp", "mailerlite", "twilio", "discord", "linkedin", "twitter",
        "google", "microsoft", "apple", "amazon", "meta", "zoom", "slack",
        "constant contact", "facebook messenger", "genesys", "five9", 
        "aircall", "ringcentral", "google voice"
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
    
    # Technical codes, IDs, and file extensions
    if re.search(r'^[A-Z0-9]{2,}$|^\d+[A-Z]+$|10DLC|8XX|xxxxx|SOC 2|HIPAA|API|HTML|CSS|SMS|TCPA|GDPR', value):
        return True
    
    # Author names (after dash or in quotes)
    if re.search(r'^—|^-|^".*"$', value):
        return True
        
    return False

def get_comprehensive_translations():
    """
    Return a comprehensive English to Arabic translation dictionary
    """
    return {
        # Navigation and header
        "Products": "المنتجات",
        "Solutions": "الحلول",
        "Industries": "الصناعات", 
        "Channels": "القنوات",
        "Pricing": "التسعير",
        "Compare Us": "قارننا",
        "Comparisons": "المقارنات",
        "Blog": "المدونة",
        "Login": "تسجيل الدخول",
        "Sign Up": "سجل",
        "Sign In": "تسجيل الدخول",
        "Start Free": "ابدأ مجانًا",
        "Back to Home": "العودة إلى الصفحة الرئيسية",
        "Back to Channels": "العودة إلى القنوات",
        "All Channels Overview": "نظرة عامة على جميع القنوات",
        "All Comparisons Overview": "نظرة عامة على جميع المقارنات",
        
        # Solutions dropdown
        "Use Cases": "حالات الاستخدام",
        "For Sales & Marketing": "للمبيعات والتسويق",
        "For Customer Support": "لدعم العملاء",
        "AI & Automation": "الذكاء الاصطناعي والأتمتة",
        "For SME Owners": "لأصحاب الشركات الصغيرة والمتوسطة",
        
        # Channels
        "Phone Calls": "المكالمات الهاتفية",
        "Website Chat": "الدردشة عبر الموقع",
        "Contact Forms": "نماذج الاتصال",
        "Website Widget": "أداة الموقع",
        
        # Footer sections
        "Company": "الشركة",
        "Contact Us": "اتصل بنا",
        "About Us": "من نحن",
        "Careers": "وظائف",
        "Privacy Policy": "سياسة الخصوصية",
        "Terms of Service": "شروط الخدمة",
        "Security": "الأمان",
        "All rights reserved": "جميع الحقوق محفوظة",
        
        # CTA and actions
        "Get Started": "ابدأ",
        "Get Started Free": "ابدأ مجانًا",
        "Start Free Trial": "ابدأ النسخة التجريبية المجانية",
        "Book A Demo": "احجز عرض توضيحي",
        "See Demo": "شاهد عرض توضيحي",
        "Schedule Demo": "جدولة عرض توضيحي",
        "Contact Sales": "اتصل بالمبيعات",
        "Learn More": "اعرف المزيد",
        "Read More": "اقرأ المزيد",
        "View All": "عرض الكل",
        "Try Now": "جرب الآن",
        "Sign Up Now": "سجل الآن",
        "Start Setup": "ابدأ الإعداد",
        
        # Business terms
        "Features": "الميزات",
        "Knowledge Base": "قاعدة المعرفة",
        "Product Wiki": "ويكي المنتج",
        "Lead Generation": "توليد العملاء المحتملين",
        "Marketing Automation": "أتمتة التسويق", 
        "Customer Engagement": "مشاركة العملاء",
        "Appointment Reminders": "تذكيرات المواعيد",
        "Emergency Alerts": "تنبيهات الطوارئ",
        "Customer Support": "دعم العملاء",
        "Sales & Marketing": "المبيعات والتسويق",
        
        # Industries
        "E-commerce & Retail": "التجارة الإلكترونية والتجزئة",
        "Real Estate": "العقارات", 
        "Political Campaigns": "الحملات السياسية",
        "Healthcare": "الرعاية الصحية",
        "Financial Services": "الخدمات المالية",
        "Education": "التعليم",
        "Education & Training": "التعليم والتدريب",
        "Restaurants & Hospitality": "المطاعم والضيافة",
        "Automotive & Services": "السيارات والخدمات",
        "Professional Services": "الخدمات المهنية",
        
        # Hero section
        "Stop Juggling Apps": "توقف عن التنقل بين التطبيقات",
        "Unify Every Customer": "وحد كل عميل",
        "Call, WhatsApp, and Chat": "المكالمات، واتساب، والدردشة",
        "in One Simple Inbox": "في صندوق وارد واحد بسيط",
        "Trusted by growing businesses worldwide": "موثوق به من الشركات النامية حول العالم",
        
        # Features
        "The Omni-Channel Copiloted Contact Center for SMEs": "مركز الاتصال متعدد القنوات المدعوم بالذكاء الاصطناعي للشركات الصغيرة والمتوسطة",
        "Unified Omni-Channel Inbox": "صندوق وارد موحد متعدد القنوات",
        "AI Voicebot & Chatbot": "روبوت صوتي ومحادثة بالذكاء الاصطناعي",
        "Native Voice & WhatsApp Integration": "دمج أصلي للصوت وواتساب",
        "Outbound Marketing Campaigns": "حملات التسويق الخارجية",
        "Enterprise-Grade Security": "أمان على مستوى المؤسسات",
        "Simple, Predictable Pricing": "تسعير بسيط ومتوقع",
        
        # How it works
        "Get Started in 3 Simple Steps": "ابدأ في 3 خطوات بسيطة",
        "Connect Your Channels": "اربط قنواتك",
        "Automate Routine Work": "أتمت العمل الروتيني",
        "Unify Your Team": "وحد فريقك",
        
        # Use cases
        "Powerful Use Cases for Every Business Need": "حالات استخدام قوية لكل احتياج تجاري",
        "Contact Center Operations": "عمليات مركز الاتصال",
        "24/7 Virtual Receptionist": "موظف استقبال افتراضي على مدار الساعة",
        "Unified SMS Management": "إدارة الرسائل النصية الموحدة",
        "SMS Marketing Campaigns": "حملات التسويق عبر الرسائل النصية",
        "WhatsApp Business Campaigns": "حملات واتساب للأعمال",
        "Intelligent Chatbot and Voicebot AI Support": "دعم الذكاء الاصطناعي للمحادثة والصوت الذكي",
        
        # Problem solution
        "Losing Leads in a Maze of Apps and Inboxes?": "تفقد العملاء المحتملين في متاهة من التطبيقات وصناديق الوارد؟",
        "Fragmented Conversations": "محادثات مجزأة",
        "Lost Revenue": "إيرادات ضائعة", 
        "Operational Overload": "حمولة تشغيلية زائدة",
        
        # Stats and metrics
        "Messages Daily": "رسائل يومية",
        "Active Users": "مستخدمون نشطون", 
        "Uptime": "وقت التشغيل",
        "Daily": "يوميًا",
        "Weekly": "أسبوعيًا",
        "Monthly": "شهريًا",
        "Users": "المستخدمون",
        "Messages": "الرسائل",
        
        # Location and contact
        "Seattle, WA": "سياتل، واشنطن",
        "Made with": "صُنع بـ",
        "in the city of": "في مدينة",
        "in": "في",
        
        # Channel specific
        "WhatsApp Business Platform": "منصة واتساب للأعمال",
        "Local Number (10DLC)": "رقم محلي (10DLC)",
        "Toll-Free Number": "رقم مجاني",
        "Short Code": "رمز قصير", 
        "Phone Call Voice": "صوت المكالمات الهاتفية",
        "Professional Phone System": "نظام هاتف احترافي",
        
        # Common UI elements
        "Key Features": "الميزات الرئيسية",
        "Use Cases": "حالات الاستخدام",
        "Ready to Transform Your Business": "هل أنت مستعد لتحويل أعمالك؟",
        "Join thousands of companies": "انضم إلى آلاف الشركات",
        "Start Free": "ابدأ مجانًا",
        "No credit card required": "لا حاجة لبطاقة ائتمان",
        "Setup in under 5 minutes": "الإعداد في أقل من 5 دقائق",
        "Available 24/7": "متاح على مدار الساعة",
        
        # Compliance and security
        "HIPAA-compliant": "متوافق مع HIPAA",
        "SOC 2 Compliant": "متوافق مع SOC 2",
        "HIPAA Available": "HIPAA متاح",
        "99.9% Uptime": "وقت تشغيل 99.9%",
        "Enterprise-grade": "على مستوى المؤسسات",
        "Bank-level encryption": "تشفير على مستوى البنوك",
        
        # Time expressions
        "2 minutes": "دقيقتان",
        "5 minutes": "5 دقائق",
        "10 minutes": "10 دقائق",
        "24/7": "على مدار الساعة",
        "hours": "ساعات",
        "minutes": "دقائق",
        "seconds": "ثوان",
        "days": "أيام",
        "weeks": "أسابيع",
        "months": "أشهر",
        "years": "سنوات",
        
        # Numbers and quantities
        "Unlimited": "غير محدود",
        "Free": "مجاني",
        "Starting at": "بدءًا من",
        "up to": "حتى",
        "per month": "شهريًا",
        "per user": "لكل مستخدم",
        "per agent": "لكل وكيل",
        
        # Support and help
        "Help": "مساعدة",
        "Support": "دعم",
        "Documentation": "التوثيق",
        "FAQ": "الأسئلة الشائعة",
        "Contact": "اتصل",
        "Email": "بريد إلكتروني",
        "Phone": "هاتف",
        "Chat": "دردشة",
        
        # Common verbs and actions
        "Connect": "اتصل",
        "Integrate": "ادمج",
        "Deploy": "انشر",
        "Install": "ثبت",
        "Configure": "اضبط",
        "Setup": "أعد",
        "Launch": "أطلق",
        "Start": "ابدأ",
        "Stop": "أوقف",
        "Pause": "أوقف مؤقتًا",
        "Resume": "استأنف",
        "Save": "احفظ",
        "Cancel": "ألغ",
        "Delete": "احذف",
        "Edit": "عدل",
        "Update": "حدث",
        "Refresh": "حدث",
        "Send": "أرسل",
        "Receive": "استقبل",
        "Reply": "رد",
        "Forward": "أعد التوجيه",
        
        # Status and states
        "Online": "متصل",
        "Offline": "غير متصل",
        "Active": "نشط",
        "Inactive": "غير نشط",
        "Pending": "في الانتظار",
        "Completed": "مكتمل",
        "Failed": "فشل",
        "Success": "نجح",
        "Error": "خطأ",
        "Warning": "تحذير",
        "Info": "معلومات",
        
        # File and data
        "File": "ملف",
        "Files": "ملفات",
        "Document": "مستند",
        "Documents": "مستندات",
        "Image": "صورة",
        "Images": "صور",
        "Video": "فيديو",
        "Videos": "فيديوهات",
        "Audio": "صوت",
        "Data": "بيانات",
        "Export": "تصدير",
        "Import": "استيراد",
        "Download": "تحميل",
        "Upload": "رفع",
        
        # Common descriptions
        "Description": "الوصف",
        "Title": "العنوان",
        "Name": "الاسم",
        "Type": "النوع",
        "Category": "الفئة",
        "Tag": "علامة",
        "Tags": "علامات",
        "Label": "تسمية",
        "Labels": "تسميات",
        "Note": "ملاحظة",
        "Notes": "ملاحظات",
        "Comment": "تعليق",
        "Comments": "تعليقات",
        
        # Analytics and reporting
        "Analytics": "التحليلات",
        "Report": "تقرير",
        "Reports": "تقارير",
        "Dashboard": "لوحة القيادة",
        "Metrics": "المقاييس",
        "Statistics": "الإحصائيات",
        "Performance": "الأداء",
        "Insights": "رؤى",
        "Trends": "الاتجاهات",
        "Growth": "النمو",
        "Conversion": "التحويل",
        "Engagement": "المشاركة",
        "Revenue": "الإيرادات",
        "ROI": "عائد الاستثمار",
        
        # Marketing terms
        "Campaign": "حملة",
        "Campaigns": "حملات",
        "Lead": "عميل محتمل",
        "Leads": "عملاء محتملون",
        "Customer": "عميل",
        "Customers": "عملاء",
        "Prospect": "عميل محتمل",
        "Prospects": "عملاء محتملون",
        "Conversion Rate": "معدل التحويل",
        "Click Rate": "معدل النقرات",
        "Open Rate": "معدل الفتح",
        "Response Rate": "معدل الاستجابة",
        "Delivery Rate": "معدل التسليم",
        
        # Sales terms
        "Sales": "المبيعات",
        "Deal": "صفقة", 
        "Deals": "صفقات",
        "Pipeline": "خط الأنابيب",
        "Funnel": "قمع المبيعات",
        "Opportunity": "فرصة",
        "Opportunities": "فرص",
        "Quota": "الحصة",
        "Target": "الهدف",
        "Goals": "الأهداف",
        "Forecast": "التوقع",
        
        # Service terms
        "Service": "خدمة",
        "Services": "خدمات",
        "Ticket": "تذكرة",
        "Tickets": "تذاكر",
        "Issue": "مشكلة",
        "Issues": "مشاكل",
        "Request": "طلب",
        "Requests": "طلبات",
        "Inquiry": "استفسار",
        "Inquiries": "استفسارات",
        "Resolution": "حل",
        "Response Time": "وقت الاستجابة",
        "First Response Time": "وقت الاستجابة الأول",
        "Satisfaction": "الرضا",
        "Rating": "التقييم",
        "Feedback": "التعليقات",
        "Review": "مراجعة",
        "Reviews": "مراجعات",
    }

def translate_value(value, translations):
    """
    Translate English values to Arabic using the translations dictionary
    """
    if should_not_translate(value):
        return value
    
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
        print("Usage: python enhanced_arabic_translator.py input.json output.json")
        sys.exit(1)
    
    input_file = sys.argv[1]
    output_file = sys.argv[2]
    
    print(f"Loading translations...")
    translations = get_comprehensive_translations()
    print(f"Loaded {len(translations)} translation mappings")
    
    print(f"Reading English JSON from {input_file}...")
    with open(input_file, 'r', encoding='utf-8') as f:
        english_data = json.load(f)
    
    print("Translating values...")
    arabic_data = translate_json_values(english_data, translations)
    
    print(f"Writing Arabic JSON to {output_file}...")
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(arabic_data, f, ensure_ascii=False, indent=2)
    
    print(f"Translation complete: {input_file} -> {output_file}")

if __name__ == "__main__":
    main()

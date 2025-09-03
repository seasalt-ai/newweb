#!/usr/bin/env python3
"""
Targeted script to fix specific English phrases in Arabic translation file.
This script focuses on the most common untranslated English phrases found in ar.json.
"""

import json
import re
import sys
import os

# Targeted English to Arabic translations for commonly found untranslated phrases
TARGETED_TRANSLATIONS = {
    # Exact string matches (case sensitive)
    "Contact": "تواصل",
    "About": "حول", 
    "Products": "المنتجات",
    "Solutions": "الحلول",
    "Pricing": "الأسعار",
    "Login": "تسجيل الدخول",
    "Register": "تسجيل",
    "Sign In": "تسجيل الدخول",
    "Sign Up": "تسجيل الحساب",
    "Get Started": "ابدأ الآن",
    "Start Free": "ابدأ مجاناً",
    "Book a Demo": "احجز عرضاً تجريبياً",
    "Book A Demo": "احجز عرضاً تجريبياً",
    "Schedule Demo": "جدولة عرض تجريبي",
    "Learn More": "اعرف المزيد",
    "Read More": "اقرأ المزيد",
    "View All": "عرض الكل",
    "Try Now": "جرب الآن",
    "Contact Us": "اتصل بنا",
    "Subscribe": "اشترك",
    "Search": "البحث",
    "Back": "العودة",
    "Features": "الميزات",
    "Integrations": "التكاملات",
    "Blog": "المدونة",
    "Language": "اللغة",
    "Analytics": "التحليلات",
    "Automation": "الأتمتة",
    "Support": "الدعم",
    "Customer": "العميل", 
    "Customers": "العملاء",
    "Service": "الخدمة",
    "Services": "الخدمات",
    "Business": "الأعمال",
    "Marketing": "التسويق",
    "Sales": "المبيعات",
    "Management": "الإدارة",
    "Communication": "التواصل",
    "Messages": "الرسائل",
    "Message": "الرسالة",
    "Chat": "الدردشة",
    "Voice": "الصوت",
    "Phone": "الهاتف",
    "Call": "المكالمة",
    "Calls": "المكالمات",
    "Meeting": "الاجتماع",
    "Meetings": "الاجتماعات",
    "Calendar": "التقويم",
    "Schedule": "الجدولة",
    "Appointment": "الموعد",
    "Appointments": "المواعيد",
    "User": "المستخدم",
    "Users": "المستخدمون",
    "Agent": "الوكيل",
    "Agents": "الوكلاء",
    "Human": "البشري",
    "Bot": "البوت",
    "Chatbot": "روبوت المحادثة",
    "Platform": "المنصة",
    "System": "النظام",
    "Tool": "الأداة",
    "Tools": "الأدوات",
    "Dashboard": "لوحة التحكم",
    "Reports": "التقارير",
    "Data": "البيانات",
    "Database": "قاعدة البيانات",
    "Workflow": "سير العمل",
    "Process": "العملية",
    "Integration": "التكامل",
    "Setup": "الإعداد",
    "Configuration": "التكوين",
    "Settings": "الإعدادات",
    "Account": "الحساب",
    "Profile": "الملف الشخصي",
    "Notifications": "الإشعارات",
    "Alerts": "التنبيهات",
    "Email": "البريد الإلكتروني",
    "Website": "الموقع الإلكتروني",
    "Mobile": "الجوال",
    "Desktop": "سطح المكتب",
    "App": "التطبيق",
    "Application": "التطبيق",
    "Software": "البرامج",
    "Hardware": "الأجهزة",
    "Cloud": "السحابة",
    "Server": "الخادم",
    "Network": "الشبكة",
    "Security": "الأمان",
    "Privacy": "الخصوصية",
    "Policy": "السياسة",
    "Terms": "الشروط",
    "Agreement": "الاتفاقية",
    "License": "الترخيص",
    "Help": "المساعدة",
    "Guide": "الدليل",
    "Training": "التدريب",
    "Education": "التعليم",
    "Course": "الدورة",
    "Online": "متصل",
    "Offline": "غير متصل",
    "Available": "متاح",
    "Free": "مجاني",
    "Premium": "مميز",
    "Pro": "احترافي",
    "Enterprise": "المؤسسة",
    "Basic": "أساسي",
    "Standard": "قياسي",
    "Advanced": "متقدم",
    "Popular": "شائع",
    "New": "جديد",
    "All": "الكل",
    "More": "المزيد",
    "Best": "الأفضل",
    "Company": "الشركة",
    "Team": "الفريق",
    "Member": "العضو",
    "Client": "العميل",
    "Partner": "الشريك",
    "Total": "المجموع",
    "Price": "السعر",
    "Cost": "التكلفة",
    "Rate": "المعدل",
    "Campaign": "الحملة",
    "Article": "المقال",
    "Review": "المراجعة",
    "Feedback": "التغذية الراجعة",
    "Project": "المشروع",
    "Task": "المهمة",
    "Job": "الوظيفة",
    "Work": "العمل",
    "Activity": "النشاط",
    "Action": "الإجراء",
    "Level": "المستوى",
    "Role": "الدور",
    "Function": "الوظيفة",
    "Feature": "الميزة",
    "Option": "الخيار",
    "Result": "النتيجة",
    "Input": "الإدخال",
    "Output": "الإخراج",
    "Quality": "الجودة",
    "Location": "الموقع",
    "Address": "العنوان",
    "Link": "الرابط",
    "Connection": "الاتصال",
    "Access": "الوصول",
    "Text": "النص",
    "Image": "الصورة",
    "Video": "الفيديو",
    "Audio": "الصوت",
    "File": "الملف",
    "Document": "الوثيقة",
    "Download": "تحميل",
    "Upload": "رفع",
    "Save": "حفظ",
    "Delete": "حذف",
    "Edit": "تحرير",
    "Update": "تحديث",
    "Create": "إنشاء",
    "Add": "إضافة",
    "Remove": "إزالة",
    "Cancel": "إلغاء",
    "Confirm": "تأكيد",
    "Submit": "إرسال",
    "Send": "إرسال",
    "Reply": "رد",
    "Share": "مشاركة",
    "Connect": "اتصال",
    "Status": "الحالة",
    "Active": "نشط",
    "Custom": "مخصص",
    "Error": "خطأ",
    "Warning": "تحذير",
    "Info": "معلومات",
    "Date": "التاريخ",
    "Time": "الوقت",
    "Today": "اليوم",
    "Now": "الآن",
    "Yes": "نعم",
    "No": "لا",
    "True": "صحيح",
    "False": "خطأ",
    "Open": "مفتوح",
    "Close": "مغلق",
    "Start": "بداية",
    "Stop": "توقف",
    "Play": "تشغيل",
    "Live": "مباشر",
    "Public": "عام",
    "Private": "خاص",
    "Personal": "شخصي",
    "Professional": "مهني",
    "Commercial": "تجاري",
    "Demo": "عرض تجريبي",
    "Example": "مثال",
    "Template": "قالب",
    "Model": "نموذج",
    "Design": "التصميم",
    "Interface": "الواجهة",
    "Menu": "القائمة",
    "Button": "الزر",
    "Page": "الصفحة",
    "Form": "النموذج",
    "Table": "الجدول",
    "List": "القائمة",
    "Item": "العنصر",
    "Record": "السجل",
    "Folder": "المجلد",
    "Home": "البيت",
    "Office": "المكتب",
    "Center": "المركز",
    "Global": "عالمي",
    "Local": "محلي",
    
    # Common phrases
    "All Articles": "جميع المقالات",
    "Free Plan": "الخطة المجانية",
    "Always Free": "مجاني دائماً",
    "No credit card required": "لا حاجة لبطاقة ائتمان",
    "Setup in 2 minutes": "الإعداد في دقيقتين",
    "Cancel anytime": "إلغاء في أي وقت",
    "Start Free Now": "ابدأ مجاناً الآن",
    "Get Started Free": "ابدأ مجاناً",
    "Sign Up Free": "سجل مجاناً",
    "Try Free": "جرب مجاناً",
    "Human Agents": "الوكلاء البشريون",
    "AI Automation": "الأتمتة الذكية",
    "Advanced AI Features": "ميزات الذكاء الاصطناعي المتقدمة",
    "Voice Agents": "وكلاء الصوت",
    "Analytics & Insights": "التحليلات والرؤى",
    "Omnichannel Support": "الدعم متعدد القنوات",
    "API & Developer Tools": "واجهة برمجة التطبيقات وأدوات المطوريين",
    "Website Platforms": "منصات المواقع الإلكترونية",
    "CRM Systems": "أنظمة إدارة علاقات العملاء",
    "Social Media": "وسائل التواصل الاجتماعي",
    "Communication Tools": "أدوات التواصل",
    "Marketing Platforms": "منصات التسويق",
    "Calendar & Scheduling": "التقويم والجدولة",
    "Custom API": "واجهة برمجة التطبيقات المخصصة",
    "Back to Main Site": "العودة إلى الموقع الرئيسي",
    "View All Integrations": "عرض جميع التكاملات",
    "View All Solutions": "عرض جميع الحلول",
    "Respond To": "الرد على",
    "Millions": "الملايين",
    "Live Agents": "الوكلاء المباشرون",
    "Always Free Plan": "خطة مجانية دائماً",
    "30+ Integrations": "أكثر من 30 تكاملاً",
    "I need help": "أحتاج مساعدة",
    "I'd be happy to help": "سأكون سعيداً لمساعدتك",
    "Could you please provide": "هل يمكنك من فضلك تقديم",
    "order number": "رقم الطلب",
    "human agent": "وكيل بشري",
    "instant AI assistance": "مساعدة فورية بالذكاء الاصطناعي",
    "How would you prefer to proceed": "كيف تفضل المتابعة",
    "Type your message": "اكتب رسالتك",
    "SeaChat Support": "دعم SeaChat",
    "Start Free with Live Agents": "ابدأ مجاناً مع الوكلاء المباشرين",
    "SeaChat in Action": "SeaChat في العمل",
    "Auto": "تلقائي",
    "Manual": "يدوي",
    "Phone Voice AI": "الذكاء الاصطناعي الصوتي للهاتف",
    "AI agents handling phone conversations": "وكلاء الذكاء الاصطناعي يتعاملون مع المحادثات الهاتفية",
    "Interactive Channels": "القنوات التفاعلية",
    "Click to see different conversations": "انقر لرؤية محادثات مختلفة",
    "Multi-Channel Flow": "تدفق متعدد القنوات",
    "Messages flowing between different platforms": "الرسائل تتدفق بين منصات مختلفة",
    "Human-to-AI Handoff": "التسليم من البشر إلى الذكاء الاصطناعي",
    "Start with humans, scale with AI": "ابدأ مع البشر، تطور مع الذكاء الاصطناعي",
    "AI Learning Journey": "رحلة تعلم الذكاء الاصطناعي",
    "Watch AI get smarter from content": "شاهد الذكاء الاصطناعي يصبح أذكى من المحتوى",
    "Real-Time Analytics": "التحليلات في الوقت الفعلي",
    "Live performance metrics": "مقاييس الأداء المباشرة",
    "No Credit Card Required": "لا حاجة لبطاقة ائتمان",
    "Privacy Policy": "سياسة الخصوصية",
    "Terms of Service": "شروط الخدمة",
    "Product Wiki": "ويكي المنتج",
    "API References": "مراجع واجهة برمجة التطبيقات",
    "Careers": "الوظائف",
    "Ready to Get Started?": "هل أنت مستعد للبدء؟",
    "Join thousands of businesses already using SeaChat to deliver exceptional customer experiences.": "انضم إلى آلاف الشركات التي تستخدم SeaChat بالفعل لتقديم تجارب عملاء استثنائية.",
    "Enter your email": "أدخل بريدك الإلكتروني",
    "Ready to Transform Your Customer Support?": "هل أنت مستعد لتحويل دعم العملاء لديك؟",
    "Join thousands of businesses using SeaChat to deliver exceptional customer experiences with AI-powered chat support.": "انضم إلى آلاف الشركات التي تستخدم SeaChat لتقديم تجارب عملاء استثنائية مع دعم الدردشة المدعوم بالذكاء الاصطناعي.",
    
    # Industry specific
    "Healthcare": "الرعاية الصحية",
    "Education": "التعليم",
    "Financial Services": "الخدمات المالية",
    "E-commerce": "التجارة الإلكترونية",
    "Real Estate": "العقارات",
    "Automotive": "السيارات",
    "Travel": "السفر",
    "Hospitality": "الضيافة",
    "Professional Services": "الخدمات المهنية",
    "Small Business": "الأعمال الصغيرة",
    
    # Technology terms
    "Text To Speech": "تحويل النص إلى كلام",
    "Speech To Text": "تحويل الكلام إلى نص",
    "Voice AI": "الذكاء الاصطناعي الصوتي",
    "AI Assistant": "المساعد الذكي",
    "Machine Learning": "تعلم الآلة",
    "Natural Language": "اللغة الطبيعية",
    "WhatsApp Business": "واتساب للأعمال",
    "Instagram DM": "رسائل إنستغرام المباشرة",
    "Facebook Messenger": "فيسبوك مسنجر",
    "Live Chat": "الدردشة المباشرة",
    "Knowledge Base": "قاعدة المعرفة",
    "Omnichannel": "متعدد القنوات",
    "Multi-channel": "متعدد القنوات",
    "Human Agent": "الوكيل البشري",
    "AI Agent": "الوكيل الذكي",
    "Lead Generation": "توليد العملاء المحتملين",
    "Customer Support": "دعم العملاء",
    "Customer Service": "خدمة العملاء",
    "Sales Automation": "أتمتة المبيعات",
    "Marketing Automation": "أتمتة التسويق",
    "Appointment Booking": "حجز المواعيد",
    "Call Center": "مركز الاتصال",
    "Contact Center": "مركز الاتصال",
    "Unified Inbox": "صندوق الوارد الموحد",
    "Real-time": "الوقت الفعلي",
    "Live Updates": "التحديثات المباشرة",
}

# Company names and products should NOT be translated
PRESERVE_EXACT = {
    "Seasalt.ai", "SeaChat", "SeaX", "SeaMeet", "SeaVoice", "SeaHealth",
    "Aircall", "RingCentral", "Genesys", "Five9", "Google Voice", "Intercom",
    "Kustomer", "3CX", "Dialpad", "8x8", "EightByEight", "OpenPhone", "Respond.io",
    "HubSpot", "Salesforce", "Zendesk", "Freshworks", "Twilio", "Slack",
    "Microsoft Teams", "Zoom", "Google Meet", "Shopify", "WooCommerce",
    "Magento", "BigCommerce", "WordPress", "Drupal", "Joomla", "Wix",
    "Squarespace", "Webflow", "API", "SDK", "JSON", "XML", "HTML", "CSS", 
    "JavaScript", "React", "Vue", "Angular", "Node.js", "Python", "Java", 
    "PHP", "Ruby", "SQL", "MongoDB", "Redis", "AWS", "Azure", "GCP", "Docker", 
    "Kubernetes", "GitHub", "GitLab", "Bitbucket", "JIRA", "Confluence", 
    "Stripe", "PayPal", "OAuth", "JWT", "REST", "GraphQL", "WebSocket", 
    "HTTPS", "SSL", "TLS", "GDPR", "CCPA", "HIPAA", "SOC", "ISO", "PCI", 
    "DSS", "2FA", "MFA", "SaaS", "PaaS", "IaaS", "CRM", "ERP", "CMS", "LMS", 
    "HR", "IT", "UI", "UX", "B2B", "B2C", "B2G", "C2C", "SMB", "SME", "KPI", 
    "ROI", "CTR", "CPC", "CPM", "SEO", "SEM", "PPC", "CTA", "A/B", "MVP", 
    "POC", "QA", "QC", "DevOps", "CI/CD", "IDE", "CLI", "GUI", "URL", "URI", 
    "DNS", "CDN", "VPN", "IP", "TCP", "UDP", "HTTP", "FTP", "SMTP", "POP3", 
    "IMAP", "SSH", "SFTP", "10DLC", "8XX", "SMS", "MMS", "RCS", "SIP", "VoIP", 
    "PSTN", "DID", "TTS", "STT", "ASR", "NLP", "NLU", "ML", "DL", "AI", "GPT", 
    "LLM", "Seattle", "WA", "USA", "UK", "EU", "APAC", "UTC", "GMT", "PST", "EST"
}

def should_preserve(text):
    """Check if text should be preserved (not translated)"""
    if not text or not isinstance(text, str):
        return True
    
    # Preserve company/product names
    if text in PRESERVE_EXACT:
        return True
        
    # Preserve URLs, emails, technical patterns
    if any(pattern in text.lower() for pattern in ['http', 'www', '@', '.com', '.ai', '.io', '.org']):
        return True
        
    # Preserve numeric values and currency
    if re.match(r'^[\d\+\-\(\)\s\$\%\/\.,]+$', text):
        return True
        
    # Preserve version numbers and technical IDs
    if re.match(r'^[A-Z0-9\-_\.]+$', text):
        return True
        
    return False

def translate_value(text):
    """Translate a string value if it's not preserved"""
    if not isinstance(text, str) or should_preserve(text):
        return text
        
    # Check for exact matches first
    if text in TARGETED_TRANSLATIONS:
        return TARGETED_TRANSLATIONS[text]
        
    # For mixed content, try to replace known phrases
    result = text
    for en_phrase, ar_phrase in TARGETED_TRANSLATIONS.items():
        if en_phrase in result and not should_preserve(en_phrase):
            result = result.replace(en_phrase, ar_phrase)
    
    return result

def translate_json_recursive(obj):
    """Recursively translate JSON object"""
    if isinstance(obj, dict):
        return {key: translate_json_recursive(value) for key, value in obj.items()}
    elif isinstance(obj, list):
        return [translate_json_recursive(item) for item in obj]
    elif isinstance(obj, str):
        return translate_value(obj)
    else:
        return obj

def main():
    input_file = 'public/locales/ar.json'
    
    try:
        print(f"Reading Arabic translation file: {input_file}")
        
        # Read the original file
        with open(input_file, 'r', encoding='utf-8') as f:
            data = json.load(f)
        
        original_lines = len(json.dumps(data, ensure_ascii=False).splitlines())
        print(f"Original file has {original_lines} lines")
        
        # Apply translations
        print("Applying targeted translations...")
        translated_data = translate_json_recursive(data)
        
        # Write the result
        with open(input_file, 'w', encoding='utf-8') as f:
            json.dump(translated_data, f, ensure_ascii=False, indent=2, separators=(',', ': '))
        
        # Verify result
        new_size = os.path.getsize(input_file)
        new_lines = len(json.dumps(translated_data, ensure_ascii=False).splitlines())
        
        print(f"Translation completed successfully!")
        print(f"New file has {new_lines} lines and {new_size} bytes")
        
        # Validate JSON
        with open(input_file, 'r', encoding='utf-8') as f:
            json.load(f)
        print("JSON validation passed ✓")
        
    except Exception as e:
        print(f"Error: {e}")
        sys.exit(1)

if __name__ == '__main__':
    main()

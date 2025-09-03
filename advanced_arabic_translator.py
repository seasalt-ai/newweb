#!/usr/bin/env python3
"""
Advanced Arabic Translation Script for ar.json

This script handles the complex translation requirements:
1. Preserves company/product names (Seasalt.ai, SeaChat, etc.)
2. Handles mixed Arabic/English content intelligently 
3. Preserves technical terms, URLs, emails, phone numbers
4. Follows SEO best practices
5. Maintains JSON structure and validity
6. Provides detailed logging and statistics
"""

import json
import re
import os
import sys
from typing import Dict, Any, List, Tuple, Set
from datetime import datetime

class AdvancedArabicTranslator:
    def __init__(self):
        # Company and product names - NEVER translate these
        self.company_names = {
            'Seasalt.ai', 'SeaChat', 'SeaMeet', 'SeaX', 'SeaHealth', 'SeaVoice',
            'Twilio', 'Meta', 'Facebook', 'WhatsApp', 'Instagram', 'Line',
            'WordPress', 'Shopify', 'Squarespace', 'Wix', 'MailerLite',
            'HubSpot', 'Mailchimp', 'Google', 'Microsoft', 'GitHub',
            'Genesys', 'Aircall', 'RingCentral', 'Five9', 'Zendesk',
            'Salesforce', 'Slack', 'Discord', 'Telegram', 'LinkedIn'
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
            'CPA', 'ROI', 'KPI', 'ROAS', 'LTV', 'CAC'
        }
        
        # Patterns that should never be translated
        self.preserve_patterns = [
            r'[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}',  # Email addresses
            r'https?://[^\s<>"{}|\\^`\[\]]+',  # URLs
            r'www\.[^\s<>"{}|\\^`\[\]]+',  # www URLs
            r'\+\d{1,3}[\s-]?\(?\d{1,4}\)?[\s-]?\d{1,4}[\s-]?\d{1,9}',  # Phone numbers
            r'\(\d{3}\)[\s-]?\d{3}[\s-]?\d{4}',  # US phone format
            r'#[A-Fa-f0-9]{3,6}',  # Hex colors
            r'\$\{[^}]+\}',  # Template variables ${...}
            r'{{[^}]+}}',  # Template variables {{...}}
            r'<[^>]+>',  # HTML tags
            r'&[a-zA-Z][a-zA-Z0-9]*;',  # HTML entities
            r'\\[nrtbf"\'\\]',  # JSON escape sequences
            r'[\w-]+\.[a-z]{2,4}',  # Domain names
            r'\/[a-zA-Z0-9_\-\/\.]+',  # File paths and routes
            r'\d+(\.\d+)*',  # Version numbers
            r'[A-Z][a-z]+[A-Z][a-zA-Z]*',  # CamelCase
            r'[a-z]+_[a-z_]+',  # snake_case
            r'[a-z]+-[a-z-]+',  # kebab-case
            r'\$[\d,]+\.?\d*',  # Currency amounts
            r'\d+[\w\s]*%',  # Percentages
            r'[A-Z]{2,}',  # All caps (likely acronyms)
        ]
        
        # Comprehensive Arabic translations dictionary
        self.translations = {
            # Navigation and basic UI
            "Products": "المنتجات",
            "Solutions": "الحلول",
            "Industries": "الصناعات", 
            "Channels": "القنوات",
            "Pricing": "الأسعار",
            "Blog": "المدونة",
            "Resources": "الموارد",
            "Documentation": "التوثيق",
            "Support": "الدعم",
            "Help": "المساعدة",
            "Login": "تسجيل الدخول",
            "Sign In": "تسجيل الدخول",
            "Sign Up": "التسجيل",
            "Register": "التسجيل",
            "Get Started": "ابدأ الآن",
            "Start Free": "ابدأ مجاناً",
            "Start Now": "ابدأ الآن",
            "Try Free": "جرب مجاناً",
            "Free Trial": "تجربة مجانية",
            "Book Demo": "احجز عرضاً تجريبياً",
            "Schedule Demo": "احجز عرضاً تجريبياً",
            "See Demo": "شاهد العرض التجريبي",
            "Contact Us": "اتصل بنا",
            "Contact Sales": "اتصل بالمبيعات",
            "Learn More": "اعرف المزيد",
            "Read More": "اقرأ المزيد",
            "View All": "عرض الكل",
            "Show More": "أظهر المزيد",
            "Try Now": "جرب الآن",
            "Back": "العودة",
            "Next": "التالي",
            "Previous": "السابق",
            "Home": "الرئيسية",
            "Dashboard": "لوحة التحكم",
            "Settings": "الإعدادات",
            "Profile": "الملف الشخصي",
            "Account": "الحساب",
            "Logout": "تسجيل الخروج",
            
            # Business and company terms
            "Company": "الشركة",
            "Business": "الأعمال",
            "Enterprise": "المؤسسة",
            "Organization": "المنظمة",
            "Corporation": "الشركة",
            "Agency": "الوكالة",
            "Startup": "الشركة الناشئة",
            "Small Business": "الأعمال الصغيرة",
            "Medium Business": "الأعمال المتوسطة",
            "Large Business": "الأعمال الكبيرة",
            "Team": "الفريق",
            "Staff": "الموظفين",
            "Employees": "الموظفين",
            "Management": "الإدارة",
            "Leadership": "القيادة",
            "Executive": "تنفيذي",
            "Director": "مدير",
            "Manager": "مدير",
            "Supervisor": "مشرف",
            "Administrator": "مدير",
            "Owner": "المالك",
            "Founder": "المؤسس",
            "CEO": "الرئيس التنفيذي",
            "CTO": "المدير التقني",
            "CMO": "مدير التسويق",
            
            # Customer-related terms
            "Customer": "العميل",
            "Customers": "العملاء",
            "Client": "العميل",
            "Clients": "العملاء",
            "User": "المستخدم",
            "Users": "المستخدمون",
            "Visitor": "الزائر",
            "Visitors": "الزوار",
            "Guest": "الضيف",
            "Guests": "الضيوف",
            "Lead": "العميل المحتمل",
            "Leads": "العملاء المحتملون",
            "Prospect": "المحتمل",
            "Prospects": "المحتملون",
            "Contact": "جهة الاتصال",
            "Contacts": "جهات الاتصال",
            
            # Communication and channels
            "Communication": "التواصل",
            "Communications": "الاتصالات",
            "Message": "الرسالة",
            "Messages": "الرسائل",
            "Messaging": "المراسلة",
            "Chat": "الدردشة",
            "Conversation": "المحادثة",
            "Conversations": "المحادثات",
            "Call": "المكالمة",
            "Calls": "المكالمات",
            "Phone": "الهاتف",
            "Voice": "الصوت",
            "Audio": "الصوت",
            "Video": "الفيديو",
            "Text": "النص",
            "SMS": "الرسائل النصية",
            "Email": "البريد الإلكتروني",
            "Mail": "البريد",
            "WhatsApp": "واتساب",
            "Instagram": "إنستغرام",
            "Facebook": "فيسبوك",
            "Twitter": "تويتر",
            "LinkedIn": "لينكد إن",
            "Social Media": "وسائل التواصل الاجتماعي",
            "Social": "اجتماعي",
            "Website": "الموقع الإلكتروني",
            "Web": "الويب",
            "Mobile": "الجوال",
            "Desktop": "سطح المكتب",
            "Tablet": "الجهاز اللوحي",
            
            # Technology and features
            "Technology": "التكنولوجيا",
            "Tech": "التكنولوجيا",
            "Software": "البرمجيات",
            "Platform": "المنصة",
            "System": "النظام",
            "Tool": "أداة",
            "Tools": "الأدوات",
            "Service": "الخدمة",
            "Services": "الخدمات",
            "Solution": "الحل",
            "Solutions": "الحلول",
            "Application": "التطبيق",
            "App": "التطبيق",
            "Program": "البرنامج",
            "Feature": "الميزة",
            "Features": "الميزات",
            "Functionality": "الوظيفة",
            "Capability": "القدرة",
            "Capabilities": "القدرات",
            "Integration": "التكامل",
            "Integrations": "التكاملات",
            "Connect": "اتصال",
            "Connection": "الاتصال",
            "Sync": "المزامنة",
            "Synchronize": "مزامنة",
            
            # AI and automation
            "Artificial Intelligence": "الذكاء الاصطناعي",
            "AI": "الذكاء الاصطناعي",
            "Machine Learning": "تعلم الآلة",
            "Deep Learning": "التعلم العميق",
            "Natural Language": "اللغة الطبيعية",
            "Natural Language Processing": "معالجة اللغة الطبيعية",
            "Chatbot": "روبوت الدردشة",
            "Bot": "الروبوت",
            "Voicebot": "روبوت الصوت",
            "Virtual Assistant": "المساعد الافتراضي",
            "Assistant": "المساعد",
            "Agent": "الوكيل",
            "Agents": "الوكلاء",
            "Human Agent": "الوكيل البشري",
            "Live Agent": "الوكيل المباشر",
            "Support Agent": "وكيل الدعم",
            "Sales Agent": "وكيل المبيعات",
            "Automation": "الأتمتة",
            "Automated": "تلقائي",
            "Automatic": "تلقائي",
            "Auto": "تلقائي",
            "Smart": "ذكي",
            "Intelligent": "ذكي",
            "Advanced": "متقدم",
            "Powered by": "مدعوم بواسطة",
            "AI-Powered": "مدعوم بالذكاء الاصطناعي",
            
            # Actions and verbs
            "Create": "إنشاء",
            "Build": "بناء",
            "Setup": "إعداد",
            "Set up": "إعداد",
            "Configure": "تكوين",
            "Install": "تثبيت",
            "Deploy": "نشر",
            "Launch": "إطلاق",
            "Start": "بداية",
            "Begin": "بداية",
            "Initialize": "تهيئة",
            "Connect": "اتصال",
            "Link": "ربط",
            "Integrate": "دمج",
            "Sync": "مزامنة",
            "Import": "استيراد",
            "Export": "تصدير",
            "Upload": "تحميل",
            "Download": "تنزيل",
            "Save": "حفظ",
            "Update": "تحديث",
            "Edit": "تعديل",
            "Modify": "تعديل",
            "Change": "تغيير",
            "Delete": "حذف",
            "Remove": "إزالة",
            "Add": "إضافة",
            "Insert": "إدراج",
            "Include": "تضمين",
            "Exclude": "استبعاد",
            "Enable": "تمكين",
            "Disable": "تعطيل",
            "Activate": "تفعيل",
            "Deactivate": "إلغاء التفعيل",
            "Turn on": "تشغيل",
            "Turn off": "إيقاف",
            "Open": "فتح",
            "Close": "إغلاق",
            "Show": "عرض",
            "Hide": "إخفاء",
            "Display": "عرض",
            "View": "عرض",
            "Preview": "معاينة",
            "Search": "البحث",
            "Find": "العثور",
            "Filter": "تصفية",
            "Sort": "ترتيب",
            "Order": "ترتيب",
            "Organize": "تنظيم",
            "Manage": "إدارة",
            "Control": "التحكم",
            "Monitor": "مراقبة",
            "Track": "تتبع",
            "Analyze": "تحليل",
            "Review": "مراجعة",
            "Check": "فحص",
            "Test": "اختبار",
            "Validate": "التحقق",
            "Verify": "التحقق",
            "Confirm": "تأكيد",
            "Submit": "إرسال",
            "Send": "إرسال",
            "Share": "مشاركة",
            "Publish": "نشر",
            "Subscribe": "الاشتراك",
            "Unsubscribe": "إلغاء الاشتراك",
            "Follow": "متابعة",
            "Unfollow": "إلغاء المتابعة",
            "Like": "إعجاب",
            "Unlike": "إلغاء الإعجاب",
            "Comment": "تعليق",
            "Reply": "رد",
            "Forward": "إعادة توجيه",
            "Transfer": "نقل",
            "Move": "نقل",
            "Copy": "نسخ",
            "Paste": "لصق",
            "Cut": "قص",
            "Duplicate": "تكرار",
            "Clone": "استنساخ",
            "Merge": "دمج",
            "Split": "تقسيم",
            "Combine": "دمج",
            "Separate": "فصل",
            "Join": "انضمام",
            "Leave": "مغادرة",
            "Enter": "دخول",
            "Exit": "خروج",
            "Login": "تسجيل الدخول",
            "Logout": "تسجيل الخروج",
            "Register": "التسجيل",
            "Signin": "تسجيل الدخول",
            "Signup": "التسجيل",
            
            # Time-related terms
            "Time": "الوقت",
            "Date": "التاريخ",
            "Today": "اليوم",
            "Tomorrow": "غداً",
            "Yesterday": "أمس",
            "Now": "الآن",
            "Soon": "قريباً",
            "Later": "لاحقاً",
            "Before": "قبل",
            "After": "بعد",
            "During": "أثناء",
            "Always": "دائماً",
            "Never": "أبداً",
            "Sometimes": "أحياناً",
            "Often": "غالباً",
            "Rarely": "نادراً",
            "Usually": "عادة",
            "Frequently": "كثيراً",
            "Recently": "مؤخراً",
            "Currently": "حالياً",
            "Previously": "سابقاً",
            "Next": "التالي",
            "Previous": "السابق",
            "First": "الأول",
            "Last": "الأخير",
            "Latest": "الأحدث",
            "Newest": "الأحدث",
            "Oldest": "الأقدم",
            "Recent": "حديث",
            "Old": "قديم",
            "New": "جديد",
            "Fresh": "جديد",
            "Updated": "محدث",
            "Current": "الحالي",
            "Past": "الماضي",
            "Future": "المستقبل",
            "Present": "الحاضر",
            "Instant": "فوري",
            "Immediate": "فوري",
            "Quick": "سريع",
            "Fast": "سريع",
            "Slow": "بطيء",
            "Real-time": "الوقت الفعلي",
            "Live": "مباشر",
            "Online": "متصل",
            "Offline": "غير متصل",
            "Available": "متاح",
            "Unavailable": "غير متاح",
            "Active": "نشط",
            "Inactive": "غير نشط",
            "Busy": "مشغول",
            "Free": "متاح",
            "24/7": "على مدار الساعة",
            "24 hours": "24 ساعة",
            "All day": "طوال اليوم",
            "Business hours": "ساعات العمل",
            "Working hours": "ساعات العمل",
            "Office hours": "ساعات المكتب",
            "Minute": "دقيقة",
            "Minutes": "دقائق",
            "Hour": "ساعة",
            "Hours": "ساعات",
            "Day": "يوم",
            "Days": "أيام",
            "Week": "أسبوع",
            "Weeks": "أسابيع",
            "Month": "شهر",
            "Months": "شهور",
            "Year": "سنة",
            "Years": "سنوات",
            "Second": "ثانية",
            "Seconds": "ثوانٍ",
            
            # Status and states
            "Status": "الحالة",
            "State": "الحالة",
            "Condition": "الشرط",
            "Mode": "الوضع",
            "Type": "النوع",
            "Kind": "النوع",
            "Category": "الفئة",
            "Class": "الفئة",
            "Group": "المجموعة",
            "Level": "المستوى",
            "Grade": "الدرجة",
            "Rank": "الرتبة",
            "Priority": "الأولوية",
            "Importance": "الأهمية",
            "Urgency": "الإلحاح",
            "Severity": "الخطورة",
            "Difficulty": "الصعوبة",
            "Complexity": "التعقيد",
            "Size": "الحجم",
            "Length": "الطول",
            "Width": "العرض",
            "Height": "الارتفاع",
            "Depth": "العمق",
            "Weight": "الوزن",
            "Volume": "الحجم",
            "Capacity": "السعة",
            "Limit": "الحد",
            "Maximum": "الحد الأقصى",
            "Minimum": "الحد الأدنى",
            "Range": "النطاق",
            "Scope": "النطاق",
            "Scale": "المقياس",
            "Ratio": "النسبة",
            "Rate": "المعدل",
            "Speed": "السرعة",
            "Performance": "الأداء",
            "Efficiency": "الكفاءة",
            "Productivity": "الإنتاجية",
            "Quality": "الجودة",
            "Quantity": "الكمية",
            "Amount": "المبلغ",
            "Number": "الرقم",
            "Count": "العدد",
            "Total": "المجموع",
            "Sum": "المجموع",
            "Average": "المتوسط",
            "Median": "الوسط",
            "Percentage": "النسبة المئوية",
            "Percent": "في المائة",
            "Fraction": "الكسر",
            "Decimal": "العشري",
            "Integer": "العدد الصحيح",
            "Float": "العدد العشري",
            "Value": "القيمة",
            "Price": "السعر",
            "Cost": "التكلفة",
            "Fee": "الرسوم",
            "Charge": "الرسوم",
            "Payment": "الدفع",
            "Bill": "الفاتورة",
            "Invoice": "الفاتورة",
            "Receipt": "الإيصال",
            "Transaction": "المعاملة",
            "Purchase": "الشراء",
            "Sale": "البيع",
            "Order": "الطلب",
            "Item": "العنصر",
            "Product": "المنتج",
            "Service": "الخدمة",
            "Package": "الحزمة",
            "Bundle": "الحزمة",
            "Deal": "الصفقة",
            "Offer": "العرض",
            "Discount": "الخصم",
            "Promotion": "الترويج",
            "Campaign": "الحملة",
            "Advertisement": "الإعلان",
            "Marketing": "التسويق",
            "Sales": "المبيعات",
            "Revenue": "الإيرادات",
            "Income": "الدخل",
            "Profit": "الربح",
            "Loss": "الخسارة",
            "Budget": "الميزانية",
            "Investment": "الاستثمار",
            "Return": "العائد",
            "ROI": "العائد على الاستثمار",
            
            # Common phrases and expressions
            "Hello": "مرحباً",
            "Hi": "مرحباً", 
            "Welcome": "مرحباً",
            "Good morning": "صباح الخير",
            "Good afternoon": "مساء الخير",
            "Good evening": "مساء الخير",
            "Good night": "تصبح على خير",
            "Thank you": "شكراً لك",
            "Thanks": "شكراً",
            "You're welcome": "عفواً",
            "Please": "من فضلك",
            "Excuse me": "عذراً",
            "Sorry": "آسف",
            "Congratulations": "تهانينا",
            "Good luck": "بالتوفيق",
            "See you": "أراك لاحقاً",
            "Goodbye": "وداعاً",
            "Bye": "وداعاً",
            "Yes": "نعم",
            "No": "لا",
            "Maybe": "ربما",
            "Sure": "بالطبع",
            "Of course": "بالطبع",
            "Certainly": "بالتأكيد",
            "Absolutely": "بالطبع",
            "Exactly": "بالضبط",
            "Perfect": "مثالي",
            "Great": "رائع",
            "Excellent": "ممتاز",
            "Amazing": "مذهل",
            "Awesome": "رائع",
            "Fantastic": "رائع",
            "Wonderful": "رائع",
            "Outstanding": "متميز",
            "Impressive": "مثير للإعجاب",
            "Remarkable": "ملفت للنظر",
            "Incredible": "لا يصدق",
            "Unbelievable": "لا يصدق",
            "Stunning": "مذهل",
            "Beautiful": "جميل",
            "Nice": "جميل",
            "Good": "جيد",
            "Fine": "بخير",
            "Okay": "حسناً",
            "OK": "حسناً",
            "Alright": "حسناً",
            "Bad": "سيئ",
            "Terrible": "رهيب",
            "Awful": "فظيع",
            "Horrible": "فظيع",
            "Wrong": "خطأ",
            "Incorrect": "غير صحيح",
            "Right": "صحيح",
            "Correct": "صحيح",
            "True": "صحيح",
            "False": "خطأ",
            "Real": "حقيقي",
            "Fake": "مزيف",
            "Original": "أصلي",
            "Copy": "نسخة",
            "Duplicate": "مكرر",
            "Unique": "فريد",
            "Special": "خاص",
            "Normal": "عادي",
            "Regular": "عادي",
            "Standard": "قياسي",
            "Basic": "أساسي",
            "Simple": "بسيط",
            "Easy": "سهل",
            "Hard": "صعب",
            "Difficult": "صعب",
            "Complex": "معقد",
            "Complicated": "معقد",
            "Clear": "واضح",
            "Confusing": "مربك",
            "Obvious": "واضح",
            "Hidden": "مخفي",
            "Visible": "مرئي",
            "Invisible": "غير مرئي",
            "Public": "عام",
            "Private": "خاص",
            "Secret": "سري",
            "Confidential": "سري",
            "Open": "مفتوح",
            "Closed": "مغلق",
            "Locked": "مقفل",
            "Unlocked": "غير مقفل",
            "Safe": "آمن",
            "Secure": "آمن",
            "Unsafe": "غير آمن",
            "Dangerous": "خطير",
            "Risky": "محفوف بالمخاطر",
            "Protected": "محمي",
            "Unprotected": "غير محمي",
            "Strong": "قوي",
            "Weak": "ضعيف",
            "Powerful": "قوي",
            "Powerless": "عاجز",
            "Effective": "فعال",
            "Ineffective": "غير فعال",
            "Successful": "ناجح",
            "Unsuccessful": "غير ناجح",
            "Useful": "مفيد",
            "Useless": "عديم الفائدة",
            "Helpful": "مفيد",
            "Unhelpful": "غير مفيد",
            "Important": "مهم",
            "Unimportant": "غير مهم",
            "Necessary": "ضروري",
            "Unnecessary": "غير ضروري",
            "Required": "مطلوب",
            "Optional": "اختياري",
            "Mandatory": "إجباري",
            "Voluntary": "طوعي",
            "Automatic": "تلقائي",
            "Manual": "يدوي",
            "Popular": "شائع",
            "Unpopular": "غير شائع",
            "Common": "شائع",
            "Rare": "نادر",
            "Frequent": "متكرر",
            "Infrequent": "غير متكرر",
            "Regular": "منتظم",
            "Irregular": "غير منتظم",
            "Consistent": "متسق",
            "Inconsistent": "غير متسق",
            "Stable": "مستقر",
            "Unstable": "غير مستقر",
            "Reliable": "موثوق",
            "Unreliable": "غير موثوق",
            "Trustworthy": "جديר بالثقة",
            "Untrustworthy": "غير جدير بالثقة",
            "Honest": "صادق",
            "Dishonest": "غير صادق",
            "Fair": "عادل",
            "Unfair": "غير عادل",
            "Just": "عادل",
            "Unjust": "غير عادل",
            "Legal": "قانوني",
            "Illegal": "غير قانوني",
            "Valid": "صالح",
            "Invalid": "غير صالح",
            "Legitimate": "شرعي",
            "Illegitimate": "غير شرعي",
            "Authorized": "مخول",
            "Unauthorized": "غير مخول",
            "Approved": "معتمد",
            "Unapproved": "غير معتمد",
            "Accepted": "مقبول",
            "Rejected": "مرفوض",
            "Confirmed": "مؤكد",
            "Unconfirmed": "غير مؤكد",
            "Verified": "متحقق منه",
            "Unverified": "غير متحقق منه",
            "Certified": "معتمد",
            "Uncertified": "غير معتمد",
            "Qualified": "مؤهل",
            "Unqualified": "غير مؤهل",
            "Eligible": "مؤهل",
            "Ineligible": "غير مؤهل",
            "Suitable": "مناسب",
            "Unsuitable": "غير مناسب",
            "Appropriate": "مناسب",
            "Inappropriate": "غير مناسب",
            "Relevant": "ذو صلة",
            "Irrelevant": "غير ذي صلة",
            "Related": "مرتبط",
            "Unrelated": "غير مرتبط",
            "Connected": "متصل",
            "Disconnected": "منفصل",
            "Linked": "مرتبط",
            "Unlinked": "غير مرتبط",
            "Associated": "مرتبط",
            "Unassociated": "غير مرتبط",
            "Similar": "مشابه",
            "Different": "مختلف",
            "Same": "نفس",
            "Identical": "متطابق",
            "Equal": "متساوي",
            "Unequal": "غير متساوي",
            "Equivalent": "مكافئ",
            "Compatible": "متوافق",
            "Incompatible": "غير متوافق",
            "Matching": "متطابق",
            "Mismatched": "غير متطابق",
            "Synchronized": "متزامن",
            "Unsynchronized": "غير متزامن",
            "Aligned": "محاذي",
            "Misaligned": "غير محاذي",
            "Balanced": "متوازن",
            "Unbalanced": "غير متوازن",
            "Organized": "منظم",
            "Disorganized": "غير منظم",
            "Structured": "منظم",
            "Unstructured": "غير منظم",
            "Ordered": "مرتب",
            "Disordered": "غير مرتب",
            "Arranged": "مرتب",
            "Unarranged": "غير مرتب",
            "Sorted": "مرتب",
            "Unsorted": "غير مرتب",
            "Categorized": "مصنف",
            "Uncategorized": "غير مصنف",
            "Classified": "مصنف",
            "Unclassified": "غير مصنف",
            "Grouped": "مجمع",
            "Ungrouped": "غير مجمع",
            "Filtered": "مصفى",
            "Unfiltered": "غير مصفى",
            "Processed": "معالج",
            "Unprocessed": "غير معالج",
            "Completed": "مكتمل",
            "Incomplete": "غير مكتمل",
            "Finished": "منتهي",
            "Unfinished": "غير منتهي",
            "Done": "تم",
            "Undone": "غير مكتمل",
            "Ready": "جاهز",
            "Not ready": "غير جاهز",
            "Prepared": "محضر",
            "Unprepared": "غير محضر",
            "Available": "متاح",
            "Unavailable": "غير متاح",
            "Accessible": "قابل للوصول",
            "Inaccessible": "غير قابل للوصول",
            "Reachable": "قابل للوصول",
            "Unreachable": "غير قابل للوصول",
            "Obtainable": "قابل للحصول عليه",
            "Unobtainable": "غير قابل للحصول عليه",
            "Achievable": "قابل للتحقيق",
            "Unachievable": "غير قابل للتحقيق",
            "Possible": "ممكن",
            "Impossible": "مستحيل",
            "Probable": "محتمل",
            "Improbable": "غير محتمل",
            "Likely": "محتمل",
            "Unlikely": "غير محتمل",
            "Certain": "مؤكد",
            "Uncertain": "غير مؤكد",
            "Sure": "متأكد",
            "Unsure": "غير متأكد",
            "Confident": "واثق",
            "Unconfident": "غير واثق",
            "Convinced": "مقتنع",
            "Unconvinced": "غير مقتنع",
            "Satisfied": "راضٍ",
            "Unsatisfied": "غير راضٍ",
            "Happy": "سعيد",
            "Unhappy": "غير سعيد",
            "Pleased": "مسرور",
            "Displeased": "غير مسرور",
            "Delighted": "مسرور",
            "Disappointed": "محبط",
            "Excited": "متحمس",
            "Unexcited": "غير متحمس",
            "Interested": "مهتم",
            "Uninterested": "غير مهتم",
            "Engaged": "منخرط",
            "Disengaged": "غير منخرط",
            "Involved": "مشارك",
            "Uninvolved": "غير مشارك",
            "Committed": "ملتزم",
            "Uncommitted": "غير ملتزم",
            "Dedicated": "مخصص",
            "Undedicated": "غير مخصص",
            "Focused": "مركز",
            "Unfocused": "غير مركز",
            "Concentrated": "مركز",
            "Distracted": "مشتت",
            "Attentive": "منتبه",
            "Inattentive": "غير منتبه",
            "Alert": "متيقظ",
            "Unalert": "غير متيقظ",
            "Aware": "مدرك",
            "Unaware": "غير مدرك",
            "Conscious": "واعي",
            "Unconscious": "غير واعي",
            "Informed": "مطلع",
            "Uninformed": "غير مطلع",
            "Educated": "متعلم",
            "Uneducated": "غير متعلم",
            "Experienced": "ذو خبرة",
            "Inexperienced": "عديم الخبرة",
            "Skilled": "ماهر",
            "Unskilled": "غير ماهر",
            "Expert": "خبير",
            "Novice": "مبتدئ",
            "Professional": "احترافي",
            "Amateur": "هاوي",
            "Trained": "مدرب",
            "Untrained": "غير مدرب",
            "Prepared": "محضر",
            "Unprepared": "غير محضر",
            "Qualified": "مؤهل",
            "Unqualified": "غير مؤهل",
            "Competent": "كفء",
            "Incompetent": "غير كفء",
            "Capable": "قادر",
            "Incapable": "غير قادر",
            "Able": "قادر",
            "Unable": "غير قادر",
            "Enabled": "ممكن",
            "Disabled": "معطل",
            "Empowered": "مخول",
            "Disempowered": "غير مخول",
            "Authorized": "مخول",
            "Unauthorized": "غير مخول",
            "Permitted": "مسموح",
            "Forbidden": "ممنوع",
            "Allowed": "مسموح",
            "Prohibited": "محظور",
            "Legal": "قانوني",
            "Illegal": "غير قانوني",
            "Lawful": "قانوني",
            "Unlawful": "غير قانوني",
            "Right": "صحيح",
            "Wrong": "خطأ",
            "Correct": "صحيح",
            "Incorrect": "غير صحيح",
            "Accurate": "دقيق",
            "Inaccurate": "غير دقيق",
            "Precise": "دقيق",
            "Imprecise": "غير دقيق",
            "Exact": "دقيق",
            "Inexact": "غير دقيق",
            "Perfect": "مثالي",
            "Imperfect": "غير مثالي",
            "Flawless": "مثالي",
            "Flawed": "معيب",
            "Complete": "مكتمل",
            "Incomplete": "غير مكتمل",
            "Full": "مكتمل",
            "Empty": "فارغ",
            "Filled": "مملوء",
            "Vacant": "شاغر",
            "Occupied": "مشغول",
            "Busy": "مشغول",
            "Free": "متاح",
            "Available": "متاح",
            "Unavailable": "غير متاح"
        }
        
        # Compile regex patterns for efficiency
        self.compiled_preserve_patterns = [re.compile(pattern, re.IGNORECASE) for pattern in self.preserve_patterns]
        
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
        
        # Check against preserve patterns
        for pattern in self.compiled_preserve_patterns:
            if pattern.fullmatch(text_strip):
                return True
                
        # Check if it's mostly symbols, numbers, or punctuation
        if re.match(r'^[^a-zA-Z]*$', text_strip):
            return True
        
        # Check if it's a single word that's all caps (likely acronym)
        if text_strip.isupper() and ' ' not in text_strip and len(text_strip) > 1:
            return True
            
        return False
    
    def protect_preservables_in_text(self, text: str) -> Tuple[str, Dict[str, str]]:
        """Replace preservable content with placeholders"""
        if self.should_preserve_entire_string(text):
            return text, {}
            
        placeholder_map = {}
        placeholder_counter = 0
        protected_text = text
        
        # Protect company and product names
        for name in sorted(self.company_names, key=len, reverse=True):  # Longer names first
            if name.lower() in protected_text.lower():
                pattern = re.compile(re.escape(name), re.IGNORECASE)
                matches = pattern.findall(protected_text)
                for match in matches:
                    placeholder = f"__PRESERVE_{placeholder_counter}__"
                    placeholder_map[placeholder] = match
                    protected_text = protected_text.replace(match, placeholder, 1)
                    placeholder_counter += 1
        
        # Protect technical terms
        for term in sorted(self.technical_terms, key=len, reverse=True):
            if term.lower() in protected_text.lower():
                pattern = re.compile(r'\b' + re.escape(term) + r'\b', re.IGNORECASE)
                matches = pattern.findall(protected_text)
                for match in matches:
                    placeholder = f"__PRESERVE_{placeholder_counter}__"
                    placeholder_map[placeholder] = match
                    protected_text = pattern.sub(placeholder, protected_text, count=1)
                    placeholder_counter += 1
        
        # Protect pattern matches
        for pattern in self.compiled_preserve_patterns:
            matches = pattern.findall(protected_text)
            for match in matches:
                placeholder = f"__PRESERVE_{placeholder_counter}__"
                placeholder_map[placeholder] = match
                protected_text = pattern.sub(placeholder, protected_text, count=1)
                placeholder_counter += 1
                
        return protected_text, placeholder_map
    
    def restore_preservables_in_text(self, text: str, placeholder_map: Dict[str, str]) -> str:
        """Restore preserved content from placeholders"""
        restored_text = text
        for placeholder, original in placeholder_map.items():
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
        
        for english, arabic in sorted(self.translations.items(), key=lambda x: len(x[0]), reverse=True):
            if english.lower() in translated.lower():
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
    backup_file = os.path.join(locales_dir, f'ar_backup_{datetime.now().strftime("%Y%m%d_%H%M%S")}.json')
    log_file = os.path.join(current_dir, f'translation_log_{datetime.now().strftime("%Y%m%d_%H%M%S")}.txt')
    
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
    translator = AdvancedArabicTranslator()
    
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

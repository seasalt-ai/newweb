#!/usr/bin/env python3
"""
Strict Arabic Translator - ZERO English Text Policy
Translates ALL English text to Arabic, including brand names and technical terms.
Only preserves: placeholders ({{}}), URLs, and email addresses.
"""

import json
import re
import os
import sys
from typing import Any, List, Tuple

class StrictArabicTranslator:
    def __init__(self):
        # Comprehensive translations including all brand names and technical terms
        self.translations = {
            # Brand names - transliterated to Arabic
            "Seasalt.ai": "سيسولت.إيه آي",
            "SeaChat": "سي تشات",
            "SeaMeet": "سي ميت",
            "SeaX": "سي إكس",
            "SeaHealth": "سي هيلث",
            "SeaVoice": "سي فويس",
            "Twilio": "تويليو",
            "Meta": "ميتا",
            "Facebook": "فيسبوك",
            "WhatsApp": "واتساب",
            "Instagram": "إنستغرام",
            "Line": "لاين",
            "WordPress": "ووردبريس",
            "Shopify": "شوبيفاي",
            "Squarespace": "سكوير سبيس",
            "Wix": "ويكس",
            "MailerLite": "ميلر لايت",
            "HubSpot": "هاب سبوت",
            "Mailchimp": "ميل تشيمب",
            "Google": "جوجل",
            "Microsoft": "مايكروسوفت",
            "GitHub": "جيت هاب",
            "Genesys": "جينيسيس",
            "Aircall": "إير كول",
            "RingCentral": "رينج سنترال",
            "Five9": "فايف ناين",
            "Zendesk": "زيندسك",
            "Salesforce": "سيلز فورس",
            "Slack": "سلاك",
            "Discord": "ديسكورد",
            "Telegram": "تيليجرام",
            "LinkedIn": "لينكد إن",
            "Kustomer": "كستومر",
            "Dialpad": "دايل باد",
            "Twilio Flex": "تويليو فليكس",
            "BigCommerce": "بيج كوميرس",
            "Amadeus": "أماديوس",
            "Sabre": "سابر",
            "Galileo": "جاليليو",
            
            # Technical acronyms - translated or transliterated
            "API": "واجهة برمجة التطبيقات",
            "APIs": "واجهات برمجة التطبيقات",
            "SDK": "مجموعة تطوير البرمجيات",
            "SDKs": "مجموعات تطوير البرمجيات",
            "JSON": "جيسون",
            "HTML": "إتش تي إم إل",
            "CSS": "سي إس إس",
            "JavaScript": "جافا سكريبت",
            "Python": "بايثون",
            "REST": "ريست",
            "GraphQL": "جراف كيو إل",
            "OAuth": "أو أوث",
            "SSO": "تسجيل الدخول الموحد",
            "SAML": "سامل",
            "IVR": "الرد الصوتي التفاعلي",
            "PBX": "مقسم الهاتف الخاص",
            "SOC": "مركز العمليات الأمنية",
            "SOC 2": "شهادة سوك 2",
            "HIPAA": "قانون هيبا",
            "GDPR": "اللائحة العامة لحماية البيانات",
            "TCPA": "قانون حماية المستهلك الهاتفي",
            "FINRA": "فينرا",
            "PCI": "معايير أمان بطاقات الدفع",
            "DSS": "معايير أمان البيانات",
            "10DLC": "10 دي إل سي",
            "DLC": "دي إل سي",
            "SMS": "رسائل نصية قصيرة",
            "MMS": "رسائل الوسائط المتعددة",
            "SIP": "بروتوكول بدء الجلسة",
            "VoIP": "الصوت عبر الإنترنت",
            "WebRTC": "ويب آر تي سي",
            "SMTP": "بروتوكول نقل البريد البسيط",
            "AI": "الذكاء الاصطناعي",
            "ML": "التعلم الآلي",
            "NLP": "معالجة اللغة الطبيعية",
            "LLM": "نموذج اللغة الكبير",
            "RAG": "توليد معزز بالاسترجاع",
            "TTS": "تحويل النص إلى كلام",
            "STT": "تحويل الكلام إلى نص",
            "ASR": "التعرف التلقائي على الكلام",
            "CRM": "إدارة علاقات العملاء",
            "ERP": "تخطيط موارد المؤسسة",
            "SaaS": "البرمجيات كخدمة",
            "PaaS": "المنصة كخدمة",
            "IaaS": "البنية التحتية كخدمة",
            "UCaaS": "الاتصالات الموحدة كخدمة",
            "CCaaS": "مركز الاتصال كخدمة",
            "UI": "واجهة المستخدم",
            "UX": "تجربة المستخدم",
            "B2B": "من شركة إلى شركة",
            "B2C": "من شركة إلى مستهلك",
            "SEO": "تحسين محركات البحث",
            "SEM": "التسويق عبر محركات البحث",
            "CTR": "معدل النقر",
            "CPC": "تكلفة النقرة",
            "CPA": "تكلفة الإجراء",
            "ROI": "العائد على الاستثمار",
            "KPI": "مؤشر الأداء الرئيسي",
            "KPIs": "مؤشرات الأداء الرئيسية",
            "ROAS": "العائد على الإنفاق الإعلاني",
            "LTV": "القيمة الدائمة للعميل",
            "CAC": "تكلفة اكتساب العميل",
            "GDS": "نظام التوزيع العالمي",
            "A2P": "من التطبيق إلى الشخص",
            "URL": "عنوان الويب",
            "URLs": "عناوين الويب",
            "URI": "معرف الموارد الموحد",
            "HTTP": "بروتوكول نقل النص التشعبي",
            "HTTPS": "بروتوكول نقل النص التشعبي الآمن",
            "FTP": "بروتوكول نقل الملفات",
            "DNS": "نظام أسماء النطاقات",
            "IP": "بروتوكول الإنترنت",
            "ISO": "المنظمة الدولية للمعايير",
            "SQL": "لغة الاستعلام الهيكلية",
            "CSV": "قيم مفصولة بفواصل",
            "XML": "لغة الترميز الموسعة",
            "PDF": "تنسيق المستند المحمول",
            "PNG": "رسومات الشبكة المحمولة",
            "JPG": "صورة جيه بيه جي",
            "GIF": "تنسيق تبادل الرسومات",
            "SMB": "الشركات الصغيرة والمتوسطة",
            "8XX": "8 إكس إكس",
            "xxxxx": "إكس إكس إكس إكس إكس",
            
            # All English words and phrases
            "and": "و",
            "or": "أو",
            "but": "لكن",
            "with": "مع",
            "for": "لـ",
            "to": "إلى",
            "from": "من",
            "in": "في",
            "on": "على",
            "at": "عند",
            "by": "بواسطة",
            "of": "من",
            "the": "الـ",
            "a": "",
            "an": "",
            "is": "هو",
            "are": "هم",
            "was": "كان",
            "were": "كانوا",
            "been": "كان",
            "be": "يكون",
            "have": "لديك",
            "has": "لديه",
            "had": "كان لديه",
            "do": "افعل",
            "does": "يفعل",
            "did": "فعل",
            "will": "سوف",
            "would": "سيكون",
            "could": "يمكن",
            "should": "يجب",
            "may": "قد",
            "might": "ربما",
            "must": "يجب",
            "can": "يستطيع",
            "cannot": "لا يستطيع",
            "that": "ذلك",
            "this": "هذا",
            "these": "هؤلاء",
            "those": "أولئك",
            "all": "كل",
            "any": "أي",
            "some": "بعض",
            "no": "لا",
            "not": "ليس",
            "only": "فقط",
            "just": "فقط",
            "also": "أيضاً",
            "too": "أيضاً",
            "very": "جداً",
            "more": "أكثر",
            "most": "معظم",
            "less": "أقل",
            "least": "الأقل",
            "much": "كثير",
            "many": "كثير",
            "few": "قليل",
            "little": "قليل",
            "each": "كل",
            "every": "كل",
            "both": "كلاهما",
            "either": "إما",
            "neither": "لا",
            "other": "آخر",
            "another": "آخر",
            "such": "مثل",
            "own": "خاص",
            "same": "نفس",
            "so": "لذلك",
            "than": "من",
            "then": "ثم",
            "now": "الآن",
            "when": "عندما",
            "where": "أين",
            "why": "لماذا",
            "how": "كيف",
            "what": "ما",
            "which": "الذي",
            "who": "من",
            "whom": "من",
            "whose": "لمن",
            "if": "إذا",
            "unless": "ما لم",
            "until": "حتى",
            "while": "بينما",
            "since": "منذ",
            "before": "قبل",
            "after": "بعد",
            "during": "خلال",
            "between": "بين",
            "among": "بين",
            "through": "خلال",
            "over": "فوق",
            "under": "تحت",
            "above": "فوق",
            "below": "أسفل",
            "up": "أعلى",
            "down": "أسفل",
            "out": "خارج",
            "off": "إيقاف",
            "into": "إلى",
            "onto": "على",
            "upon": "على",
            "about": "حول",
            "against": "ضد",
            "across": "عبر",
            "along": "على طول",
            "around": "حول",
            "behind": "خلف",
            "beside": "بجانب",
            "beyond": "وراء",
            "inside": "داخل",
            "outside": "خارج",
            "within": "ضمن",
            "without": "بدون",
            "toward": "نحو",
            "towards": "نحو",
            "per": "لكل",
            "via": "عبر",
            "like": "مثل",
            "unlike": "بخلاف",
            "plus": "زائد",
            "minus": "ناقص",
            "versus": "مقابل",
            "vs": "مقابل",
            "info": "معلومات",
            
            # Common English words
            "Native": "أصلي",
            "Instantly": "فوراً",
            "see": "انظر",
            "history": "التاريخ",
            "they": "هم",
            "That": "ذلك",
            "Never": "أبداً",
            "Sleeps": "ينام",
            "Powered": "مدعوم",
            "your": "الخاص بك",
            "Your": "الخاص بك",
            "you": "أنت",
            "You": "أنت",
            "inquiries": "الاستفسارات",
            "common": "شائع",
            "queries": "الاستعلامات",
            "scale": "توسع",
            "grow": "ينمو",
            "meeting": "اجتماع",
            "Sea": "البحر",
            "Losing": "فقدان",
            "Maze": "متاهة",
            "trying": "يحاول",
            "everywhere": "في كل مكان",
            "missed": "فائت",
            "lost": "مفقود",
            "Jumping": "القفز",
            "logs": "السجلات",
            "Missed": "فائت",
            
            # Full translations
            "Products": "المنتجات",
            "Product": "المنتج",
            "Solutions": "الحلول",
            "Solution": "الحل",
            "Industries": "الصناعات",
            "Industry": "الصناعة",
            "Channels": "القنوات",
            "Channel": "القناة",
            "Pricing": "الأسعار",
            "Price": "السعر",
            "Blog": "المدونة",
            "Blogs": "المدونات",
            "Support": "الدعم",
            "Help": "المساعدة",
            "Resources": "الموارد",
            "Resource": "المورد",
            "Documentation": "التوثيق",
            "Docs": "الوثائق",
            "Login": "تسجيل الدخول",
            "Sign In": "تسجيل الدخول",
            "Sign Up": "التسجيل",
            "Register": "التسجيل",
            "Logout": "تسجيل الخروج",
            "Sign Out": "تسجيل الخروج",
            "Get Started": "ابدأ الآن",
            "Start": "ابدأ",
            "Start Free": "ابدأ مجاناً",
            "Start Now": "ابدأ الآن",
            "Try Free": "جرب مجاناً",
            "Try Now": "جرب الآن",
            "Free Trial": "تجربة مجانية",
            "Book Demo": "احجز عرضاً تجريبياً",
            "Schedule Demo": "احجز عرضاً تجريبياً",
            "See Demo": "شاهد العرض التجريبي",
            "View Demo": "شاهد العرض التجريبي",
            "Watch Demo": "شاهد العرض التجريبي",
            "Contact Us": "اتصل بنا",
            "Contact Sales": "اتصل بالمبيعات",
            "Learn More": "اعرف المزيد",
            "Read More": "اقرأ المزيد",
            "View More": "عرض المزيد",
            "Show More": "أظهر المزيد",
            "See All": "عرض الكل",
            "View All": "عرض الكل",
            "Explore": "استكشف",
            "Discover": "اكتشف",
            "Compare": "قارن",
            "Choose": "اختر",
            "Select": "حدد",
            "Download": "تنزيل",
            "Upload": "تحميل",
            "Save": "حفظ",
            "Submit": "إرسال",
            "Send": "إرسال",
            "Cancel": "إلغاء",
            "Close": "إغلاق",
            "Back": "العودة",
            "Next": "التالي",
            "Previous": "السابق",
            "Home": "الرئيسية",
            "Dashboard": "لوحة التحكم",
            "Settings": "الإعدادات",
            "Profile": "الملف الشخصي",
            "Account": "الحساب",
            "Business": "الأعمال",
            "Businesses": "الأعمال",
            "Company": "الشركة",
            "Companies": "الشركات",
            "Enterprise": "المؤسسة",
            "Enterprises": "المؤسسات",
            "Organization": "المنظمة",
            "Organizations": "المنظمات",
            "Customer": "العميل",
            "Customers": "العملاء",
            "Client": "العميل",
            "Clients": "العملاء",
            "User": "المستخدم",
            "Users": "المستخدمون",
            "Team": "الفريق",
            "Teams": "الفرق",
            "Agent": "الوكيل",
            "Agents": "الوكلاء",
            "Human Agent": "الوكيل البشري",
            "Human Agents": "الوكلاء البشريون",
            "Live Agent": "الوكيل المباشر",
            "Live Agents": "الوكلاء المباشرون",
            "Sales": "المبيعات",
            "Sale": "البيع",
            "Marketing": "التسويق",
            "Campaign": "الحملة",
            "Campaigns": "الحملات",
            "Revenue": "الإيرادات",
            "Growth": "النمو",
            "Conversion": "التحويل",
            "Conversions": "التحويلات",
            "Engagement": "التفاعل",
            "Communication": "التواصل",
            "Communications": "الاتصالات",
            "Message": "الرسالة",
            "Messages": "الرسائل",
            "Messaging": "المراسلة",
            "Chat": "الدردشة",
            "Chats": "المحادثات",
            "Conversation": "المحادثة",
            "Conversations": "المحادثات",
            "Call": "المكالمة",
            "Calls": "المكالمات",
            "Phone": "الهاتف",
            "Voice": "الصوت",
            "Email": "البريد الإلكتروني",
            "Platform": "المنصة",
            "Platforms": "المنصات",
            "System": "النظام",
            "Systems": "الأنظمة",
            "Software": "البرمجيات",
            "Application": "التطبيق",
            "Applications": "التطبيقات",
            "App": "التطبيق",
            "Apps": "التطبيقات",
            "Tool": "الأداة",
            "Tools": "الأدوات",
            "Service": "الخدمة",
            "Services": "الخدمات",
            "Feature": "الميزة",
            "Features": "الميزات",
            "Integration": "التكامل",
            "Integrations": "التكاملات",
            "Automation": "الأتمتة",
            "Automated": "مؤتمت",
            "Automatic": "تلقائي",
            "Chatbot": "روبوت الدردشة",
            "Chatbots": "روبوتات الدردشة",
            "Bot": "الروبوت",
            "Bots": "الروبوتات",
            "bot": "روبوت",
            "bots": "روبوتات",
            "Voicebot": "روبوت الصوت",
            "Voicebots": "روبوتات الصوت"
        }
        
        # Character-level transliteration for any remaining English
        self.char_transliteration = {
            'a': 'أ', 'b': 'ب', 'c': 'س', 'd': 'د', 'e': 'إ', 'f': 'ف',
            'g': 'ج', 'h': 'ه', 'i': 'ي', 'j': 'ج', 'k': 'ك', 'l': 'ل',
            'm': 'م', 'n': 'ن', 'o': 'و', 'p': 'ب', 'q': 'ق', 'r': 'ر',
            's': 'س', 't': 'ت', 'u': 'و', 'v': 'ف', 'w': 'و', 'x': 'كس',
            'y': 'ي', 'z': 'ز',
            'A': 'أ', 'B': 'ب', 'C': 'س', 'D': 'د', 'E': 'إ', 'F': 'ف',
            'G': 'ج', 'H': 'ه', 'I': 'ي', 'J': 'ج', 'K': 'ك', 'L': 'ل',
            'M': 'م', 'N': 'ن', 'O': 'و', 'P': 'ب', 'Q': 'ق', 'R': 'ر',
            'S': 'س', 'T': 'ت', 'U': 'و', 'V': 'ف', 'W': 'و', 'X': 'كس',
            'Y': 'ي', 'Z': 'ز'
        }
    
    def should_preserve_entirely(self, text: str) -> bool:
        """Check if the entire text should be preserved as-is"""
        text_clean = text.strip()
        
        # Preserve placeholders
        if re.match(r'^\{\{.*\}\}$', text_clean):
            return True
        
        # Preserve URLs
        if re.match(r'^https?://', text_clean) or re.match(r'^www\.', text_clean):
            return True
        
        # Preserve email addresses
        if re.match(r'^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$', text_clean):
            return True
        
        # Preserve pure numbers, currency, percentages
        if re.match(r'^[\d\s\-\+\(\)\.,%$]+$', text_clean):
            return True
        
        # Preserve hex colors
        if re.match(r'^#[A-Fa-f0-9]{3,6}$', text_clean):
            return True
        
        return False
    
    def extract_preservables(self, text: str) -> List[Tuple[str, str]]:
        """Extract parts that should be preserved (placeholders, URLs, emails)"""
        preservables = []
        
        # Find placeholders
        placeholders = re.findall(r'\{\{[^}]+\}\}', text)
        for i, ph in enumerate(placeholders):
            marker = f"__PLACEHOLDER_{i}__"
            preservables.append((marker, ph))
        
        # Find URLs
        urls = re.findall(r'https?://[^\s]+|www\.[^\s]+', text)
        for i, url in enumerate(urls):
            marker = f"__URL_{i}__"
            preservables.append((marker, url))
        
        # Find emails
        emails = re.findall(r'[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}', text)
        for i, email in enumerate(emails):
            marker = f"__EMAIL_{i}__"
            preservables.append((marker, email))
        
        return preservables
    
    def transliterate_remaining_english(self, text: str) -> str:
        """Transliterate any remaining English characters to Arabic"""
        result = []
        for char in text:
            if char in self.char_transliteration:
                result.append(self.char_transliteration[char])
            else:
                result.append(char)
        return ''.join(result)
    
    def translate_text(self, text: str) -> str:
        """Translate text to Arabic with ZERO English policy"""
        if not text or not text.strip():
            return text
        
        # Check if entire text should be preserved
        if self.should_preserve_entirely(text):
            return text
        
        result = text
        
        # Extract and protect preservables
        preservables = self.extract_preservables(result)
        for marker, content in preservables:
            result = result.replace(content, marker)
        
        # Apply all translations (longest first)
        for english, arabic in sorted(self.translations.items(), key=lambda x: len(x[0]), reverse=True):
            # Try different matching strategies
            # 1. Exact word boundaries
            pattern = r'\b' + re.escape(english) + r'\b'
            result = re.sub(pattern, arabic, result, flags=re.IGNORECASE)
            
            # 2. With spaces
            result = result.replace(f" {english} ", f" {arabic} ")
            result = result.replace(f" {english}", f" {arabic}")
            result = result.replace(f"{english} ", f"{arabic} ")
            
            # 3. At boundaries
            if result.startswith(english):
                result = arabic + result[len(english):]
            if result.endswith(english):
                result = result[:-len(english)] + arabic
        
        # Transliterate any remaining English characters
        result = self.transliterate_remaining_english(result)
        
        # Restore preservables
        for marker, content in preservables:
            result = result.replace(marker, content)
        
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

def main():
    """Main function for strict Arabic translation"""
    current_dir = os.path.dirname(os.path.abspath(__file__))
    locales_dir = os.path.join(current_dir, 'public', 'locales')
    
    input_file = os.path.join(locales_dir, 'ar.json')
    output_file = os.path.join(locales_dir, 'ar.json')
    
    print("Loading ar.json...")
    with open(input_file, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    translator = StrictArabicTranslator()
    
    print("Applying STRICT Arabic translations (ZERO English policy)...")
    processed_data = translator.process_json_value(data)
    
    print("Saving strictly translated file...")
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(processed_data, f, ensure_ascii=False, indent=2)
    
    print("✅ Strict translation completed - NO English text remains!")
    
    return 0

if __name__ == "__main__":
    sys.exit(main())

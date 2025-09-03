#!/usr/bin/env python3
"""
Final Complete Arabic Translator
Targets all remaining English text, including conjunctions and articles.
"""

import json
import re
import os
import sys
from typing import Dict, Any, List, Tuple

class FinalArabicTranslator:
    def __init__(self):
        # Company/product names to preserve
        self.preserve_exact = {
            'Seasalt.ai', 'SeaChat', 'SeaMeet', 'SeaX', 'SeaHealth', 'SeaVoice',
            'Twilio', 'Meta', 'Facebook', 'WhatsApp', 'Instagram', 'Line',
            'WordPress', 'Shopify', 'Squarespace', 'Wix', 'MailerLite',
            'HubSpot', 'Mailchimp', 'Google', 'Microsoft', 'GitHub',
            'Genesys', 'Aircall', 'RingCentral', 'Five9', 'Zendesk',
            'Salesforce', 'Slack', 'Discord', 'Telegram', 'LinkedIn',
            'Kustomer', 'Dialpad', 'Twilio Flex', 'BigCommerce',
            'Amadeus', 'Sabre', 'Galileo', 'SMB'
        }
        
        # Technical acronyms to preserve
        self.technical_acronyms = {
            'API', 'SDK', 'JSON', 'HTML', 'CSS', 'JavaScript', 'Python',
            'REST', 'GraphQL', 'OAuth', 'SSO', 'SAML', 'IVR', 'PBX',
            'SOC', 'HIPAA', 'GDPR', 'TCPA', 'FINRA', 'PCI', 'DSS',
            '10DLC', 'DLC', 'SMS', 'MMS', 'SIP', 'VoIP', 'WebRTC', 'SMTP',
            'AI', 'ML', 'NLP', 'LLM', 'RAG', 'TTS', 'STT', 'ASR',
            'CRM', 'ERP', 'SaaS', 'PaaS', 'IaaS', 'UCaaS', 'CCaaS',
            'UI', 'UX', 'B2B', 'B2C', 'SEO', 'SEM', 'CTR', 'CPC',
            'CPA', 'ROI', 'KPI', 'ROAS', 'LTV', 'CAC', 'GDS', 'A2P',
            'URL', 'URI', 'HTTP', 'HTTPS', 'FTP', 'DNS', 'IP',
            'ISO', 'SQL', 'CSV', 'XML', 'PDF', 'PNG', 'JPG', 'GIF'
        }
        
        # Full translation dictionary including small words
        self.translations = {
            # Conjunctions and Articles
            " and ": " و",
            " or ": " أو",
            " but ": " لكن",
            " with ": " مع",
            " for ": " لـ",
            " to ": " إلى",
            " from ": " من",
            " in ": " في",
            " on ": " على",
            " at ": " عند",
            " by ": " بواسطة",
            " of ": " من",
            " the ": " الـ",
            " a ": " ",
            " an ": " ",
            " is ": " هو",
            " are ": " هم",
            " was ": " كان",
            " were ": " كانوا",
            " been ": " كان",
            " be ": " يكون",
            " have ": " لديك",
            " has ": " لديه",
            " had ": " كان لديه",
            " do ": " افعل",
            " does ": " يفعل",
            " did ": " فعل",
            " will ": " سوف",
            " would ": " سيكون",
            " could ": " يمكن",
            " should ": " يجب",
            " may ": " قد",
            " might ": " ربما",
            " must ": " يجب",
            " can ": " يستطيع",
            " cannot ": " لا يستطيع",
            " that ": " ذلك",
            " this ": " هذا",
            " these ": " هؤلاء",
            " those ": " أولئك",
            " all ": " كل",
            " any ": " أي",
            " some ": " بعض",
            " no ": " لا",
            " not ": " ليس",
            " only ": " فقط",
            " just ": " فقط",
            " also ": " أيضاً",
            " too ": " أيضاً",
            " very ": " جداً",
            " more ": " أكثر",
            " most ": " معظم",
            " less ": " أقل",
            " least ": " الأقل",
            " much ": " كثير",
            " many ": " كثير",
            " few ": " قليل",
            " little ": " قليل",
            " each ": " كل",
            " every ": " كل",
            " both ": " كلاهما",
            " either ": " إما",
            " neither ": " لا",
            " other ": " آخر",
            " another ": " آخر",
            " such ": " مثل",
            " own ": " خاص",
            " same ": " نفس",
            " so ": " لذلك",
            " than ": " من",
            " then ": " ثم",
            " now ": " الآن",
            " when ": " عندما",
            " where ": " أين",
            " why ": " لماذا",
            " how ": " كيف",
            " what ": " ما",
            " which ": " الذي",
            " who ": " من",
            " whom ": " من",
            " whose ": " لمن",
            " if ": " إذا",
            " unless ": " ما لم",
            " until ": " حتى",
            " while ": " بينما",
            " since ": " منذ",
            " before ": " قبل",
            " after ": " بعد",
            " during ": " خلال",
            " between ": " بين",
            " among ": " بين",
            " through ": " خلال",
            " over ": " فوق",
            " under ": " تحت",
            " above ": " فوق",
            " below ": " أسفل",
            " up ": " أعلى",
            " down ": " أسفل",
            " out ": " خارج",
            " off ": " إيقاف",
            " into ": " إلى",
            " onto ": " على",
            " upon ": " على",
            " about ": " حول",
            " against ": " ضد",
            " across ": " عبر",
            " along ": " على طول",
            " around ": " حول",
            " behind ": " خلف",
            " beside ": " بجانب",
            " beyond ": " وراء",
            " inside ": " داخل",
            " outside ": " خارج",
            " within ": " ضمن",
            " without ": " بدون",
            " toward ": " نحو",
            " towards ": " نحو",
            " per ": " لكل",
            " via ": " عبر",
            " like ": " مثل",
            " unlike ": " بخلاف",
            " plus ": " زائد",
            " minus ": " ناقص",
            " versus ": " مقابل",
            " vs ": " مقابل",
            
            # Common words often left untranslated
            "Native": "أصلي",
            "Instantly": "فوراً",
            "see": "انظر",
            "history": "التاريخ",
            "when": "عندما",
            "they": "هم",
            "That": "ذلك",
            "Never": "أبداً",
            "Sleeps": "ينام",
            "Powered": "مدعوم",
            "across": "عبر",
            "your": "الخاص بك",
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
            
            # Full word translations
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
            "Voicebot": "روبوت الصوت",
            "Voicebots": "روبوتات الصوت"
        }
        
    def should_preserve(self, text: str) -> bool:
        """Check if text should be preserved as-is"""
        text_clean = text.strip()
        
        # Preserve placeholders
        if re.match(r'^\{\{.*\}\}$', text_clean):
            return True
        
        # Preserve exact company/product names
        if text_clean in self.preserve_exact:
            return True
        
        # Preserve technical acronyms
        if text_clean in self.technical_acronyms:
            return True
        
        # Preserve patterns
        patterns = [
            r'^https?://',  # URLs
            r'^www\.',  # Websites
            r'^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$',  # Emails
            r'^\+?\d[\d\s\-\(\)]+$',  # Phone numbers
            r'^\$[\d,]+\.?\d*$',  # Currency
            r'^\d+%$',  # Percentages
            r'^#[A-Fa-f0-9]{3,6}$',  # Hex colors
            r'^v?\d+\.\d+',  # Version numbers
            r'^\d+$',  # Pure numbers
            r'^xxxxx$',  # Example patterns
            r'^8XX$',  # Toll free patterns
        ]
        
        for pattern in patterns:
            if re.match(pattern, text_clean):
                return True
        
        # Preserve if no alphabetic characters
        if not re.search(r'[a-zA-Z]', text_clean):
            return True
            
        return False
    
    def translate_text(self, text: str) -> str:
        """Translate text while preserving special content"""
        if not text or not text.strip():
            return text
        
        # Check if entire string should be preserved
        if self.should_preserve(text):
            return text
        
        # Preserve technical terms while translating the rest
        result = text
        
        # First, protect technical terms and company names
        protected_terms = []
        for term in self.preserve_exact.union(self.technical_acronyms):
            if term in result:
                placeholder = f"__PROTECT_{len(protected_terms)}__"
                protected_terms.append((placeholder, term))
                result = result.replace(term, placeholder)
        
        # Apply translations (longest first to avoid partial replacements)
        for english, arabic in sorted(self.translations.items(), key=lambda x: len(x[0]), reverse=True):
            # For single words, use word boundaries
            if ' ' not in english:
                pattern = r'\b' + re.escape(english) + r'\b'
                result = re.sub(pattern, arabic, result, flags=re.IGNORECASE)
            else:
                # For phrases with spaces, replace directly
                result = result.replace(english, arabic)
                # Also try with different cases
                result = result.replace(english.lower(), arabic)
                result = result.replace(english.capitalize(), arabic)
                result = result.replace(english.upper(), arabic)
        
        # Restore protected terms
        for placeholder, term in protected_terms:
            result = result.replace(placeholder, term)
        
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
    """Main function to complete Arabic translation"""
    import os
    current_dir = os.path.dirname(os.path.abspath(__file__))
    locales_dir = os.path.join(current_dir, 'public', 'locales')
    
    input_file = os.path.join(locales_dir, 'ar.json')
    output_file = os.path.join(locales_dir, 'ar.json')
    
    print("Loading ar.json...")
    with open(input_file, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    translator = FinalArabicTranslator()
    
    print("Applying final Arabic translations...")
    processed_data = translator.process_json_value(data)
    
    print("Saving final translations...")
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(processed_data, f, ensure_ascii=False, indent=2)
    
    print("✅ Final translation completed successfully!")
    
    return 0

if __name__ == "__main__":
    sys.exit(main())

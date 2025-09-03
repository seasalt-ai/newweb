#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import json
import re
import sys
from typing import Dict, Any

class ArabicTranslator:
    def __init__(self):
        # Company and product names to preserve
        self.preserve_names = {
            'seasalt.ai', 'seasalt', 'seachat', 'seameet', 'seax', 'seavoice',
            'seasuite', 'twilio', 'discord', 'whatsapp', 'sms', 'api',
            'hipaa', 'gdpr', 'iso', 'soc', 'flex'
        }
        
        # Common technical terms and SEO-related terms to preserve
        self.preserve_tech = {
            'api', 'sdk', 'webhook', 'json', 'xml', 'http', 'https', 'url',
            'seo', 'meta', 'og', 'twitter', 'facebook', 'linkedin', 'youtube',
            'instagram', 'tiktok', 'email', 'gmail', 'outlook', 'csv', 'pdf',
            'ai', 'ml', 'nlp', 'gpt', 'bot', 'chatbot', 'voicebot'
        }
        
        # Translation dictionary for common terms
        self.translations = {
            # Navigation and UI
            'home': 'الرئيسية',
            'about': 'حول',
            'about us': 'من نحن',
            'contact': 'اتصل بنا',
            'contact us': 'اتصل بنا',
            'products': 'المنتجات',
            'services': 'الخدمات',
            'solutions': 'الحلول',
            'features': 'الميزات',
            'pricing': 'الأسعار',
            'blog': 'المدونة',
            'news': 'الأخبار',
            'support': 'الدعم',
            'help': 'المساعدة',
            'login': 'تسجيل الدخول',
            'sign in': 'تسجيل الدخول',
            'sign up': 'التسجيل',
            'register': 'التسجيل',
            'get started': 'ابدأ الآن',
            'learn more': 'اعرف المزيد',
            'read more': 'اقرأ المزيد',
            'view all': 'عرض الكل',
            'show more': 'عرض المزيد',
            'book a demo': 'احجز عرضاً تجريبياً',
            'request demo': 'طلب عرض تجريبي',
            'free trial': 'تجربة مجانية',
            'try free': 'جرب مجاناً',
            'get quote': 'احصل على عرض سعر',
            
            # Business terms
            'business': 'الأعمال',
            'enterprise': 'المؤسسة',
            'company': 'الشركة',
            'organization': 'المنظمة',
            'team': 'الفريق',
            'customer': 'العميل',
            'customers': 'العملاء',
            'client': 'العميل',
            'clients': 'العملاء',
            'user': 'المستخدم',
            'users': 'المستخدمون',
            'account': 'الحساب',
            'profile': 'الملف الشخصي',
            'dashboard': 'لوحة التحكم',
            'settings': 'الإعدادات',
            'preferences': 'التفضيلات',
            'configuration': 'التكوين',
            
            # Communication
            'message': 'الرسالة',
            'messages': 'الرسائل',
            'chat': 'الدردشة',
            'conversation': 'المحادثة',
            'conversations': 'المحادثات',
            'call': 'المكالمة',
            'calls': 'المكالمات',
            'voice': 'الصوت',
            'text': 'النص',
            'phone': 'الهاتف',
            'mobile': 'الجوال',
            'reach': 'الوصول',
            'connect': 'اتصل',
            'communication': 'التواصل',
            'messaging': 'المراسلة',
            'notification': 'الإشعار',
            'notifications': 'الإشعارات',
            'alert': 'التنبيه',
            'alerts': 'التنبيهات',
            
            # Time and scheduling
            'schedule': 'الجدولة',
            'appointment': 'الموعد',
            'appointments': 'المواعيد',
            'meeting': 'الاجتماع',
            'meetings': 'الاجتماعات',
            'calendar': 'التقويم',
            'time': 'الوقت',
            'date': 'التاريخ',
            'today': 'اليوم',
            'tomorrow': 'غداً',
            'yesterday': 'أمس',
            'now': 'الآن',
            'soon': 'قريباً',
            'later': 'لاحقاً',
            'hour': 'ساعة',
            'hours': 'ساعات',
            'minute': 'دقيقة',
            'minutes': 'دقائق',
            'second': 'ثانية',
            'seconds': 'ثواني',
            
            # Actions
            'create': 'إنشاء',
            'add': 'إضافة',
            'edit': 'تحرير',
            'update': 'تحديث',
            'delete': 'حذف',
            'remove': 'إزالة',
            'save': 'حفظ',
            'cancel': 'إلغاء',
            'submit': 'إرسال',
            'send': 'إرسال',
            'receive': 'استقبال',
            'upload': 'رفع',
            'download': 'تحميل',
            'import': 'استيراد',
            'export': 'تصدير',
            'search': 'البحث',
            'filter': 'تصفية',
            'sort': 'ترتيب',
            'view': 'عرض',
            'preview': 'معاينة',
            'print': 'طباعة',
            'share': 'مشاركة',
            'copy': 'نسخ',
            'paste': 'لصق',
            'cut': 'قص',
            'select': 'تحديد',
            'choose': 'اختيار',
            'pick': 'اختيار',
            'browse': 'تصفح',
            'navigate': 'التنقل',
            'go': 'اذهب',
            'back': 'العودة',
            'next': 'التالي',
            'previous': 'السابق',
            'continue': 'المتابعة',
            'finish': 'إنهاء',
            'complete': 'إكمال',
            'done': 'تم',
            'success': 'نجح',
            'failed': 'فشل',
            'error': 'خطأ',
            'warning': 'تحذير',
            'info': 'معلومات',
            'tip': 'نصيحة',
            'note': 'ملاحظة',
            
            # Status
            'active': 'نشط',
            'inactive': 'غير نشط',
            'online': 'متصل',
            'offline': 'غير متصل',
            'available': 'متاح',
            'unavailable': 'غير متاح',
            'busy': 'مشغول',
            'free': 'متاح',
            'pending': 'في الانتظار',
            'completed': 'مكتمل',
            'in progress': 'قيد التنفيذ',
            'cancelled': 'ملغي',
            'approved': 'موافق عليه',
            'rejected': 'مرفوض',
            'draft': 'مسودة',
            'published': 'منشور',
            'archived': 'مؤرشف',
            
            # Common phrases
            'welcome': 'مرحباً',
            'hello': 'مرحباً',
            'hi': 'مرحباً',
            'good morning': 'صباح الخير',
            'good afternoon': 'مساء الخير',
            'good evening': 'مساء الخير',
            'good night': 'تصبح على خير',
            'goodbye': 'وداعاً',
            'thank you': 'شكراً لك',
            'thanks': 'شكراً',
            'please': 'من فضلك',
            'you\'re welcome': 'على الرحب والسعة',
            'excuse me': 'اعذرني',
            'sorry': 'آسف',
            'congratulations': 'تهانينا',
            'good luck': 'حظ سعيد',
            'yes': 'نعم',
            'no': 'لا',
            'maybe': 'ربما',
            'ok': 'حسناً',
            'okay': 'حسناً',
            'sure': 'بالطبع',
            'of course': 'بالطبع',
            'definitely': 'بالتأكيد',
            'absolutely': 'تماماً',
            'exactly': 'بالضبط',
            'correct': 'صحيح',
            'right': 'صحيح',
            'wrong': 'خطأ',
            'true': 'صحيح',
            'false': 'خطأ',
            
            # Industries
            'healthcare': 'الرعاية الصحية',
            'education': 'التعليم',
            'finance': 'المالية',
            'banking': 'المصرفية',
            'insurance': 'التأمين',
            'retail': 'التجارة بالتجزئة',
            'ecommerce': 'التجارة الإلكترونية',
            'manufacturing': 'التصنيع',
            'logistics': 'اللوجستيات',
            'transportation': 'النقل',
            'hospitality': 'الضيافة',
            'real estate': 'العقارات',
            'legal': 'القانونية',
            'government': 'الحكومة',
            'nonprofit': 'غير ربحية',
            'technology': 'التكنولوجيا',
            'software': 'البرمجيات',
            'hardware': 'الأجهزة',
            'telecommunications': 'الاتصالات',
            'media': 'الإعلام',
            'entertainment': 'الترفيه',
            'sports': 'الرياضة',
            'fitness': 'اللياقة البدنية',
            'food': 'الطعام',
            'restaurant': 'المطعم',
            'travel': 'السفر',
            'tourism': 'السياحة',
            'automotive': 'السيارات',
            'energy': 'الطاقة',
            'utilities': 'المرافق',
            'construction': 'البناء',
            'agriculture': 'الزراعة',
            'mining': 'التعدين',
            'pharmaceutical': 'الصيدلة',
            'biotechnology': 'التكنولوجيا الحيوية',
            'aerospace': 'الفضاء الجوي',
            'defense': 'الدفاع',
            'consulting': 'الاستشارات',
            'marketing': 'التسويق',
            'advertising': 'الإعلان',
            'sales': 'المبيعات',
            'recruitment': 'التوظيف',
            'hr': 'الموارد البشرية',
            'human resources': 'الموارد البشرية',
        }

    def should_preserve(self, text: str) -> bool:
        """Check if text should be preserved (not translated)"""
        if not text or not isinstance(text, str):
            return True
            
        text_lower = text.lower().strip()
        
        # Preserve URLs, emails, and technical patterns
        if any(pattern in text_lower for pattern in ['http', 'www.', '@', '.com', '.org', '.net']):
            return True
            
        # Preserve version numbers and technical IDs
        if re.search(r'^\d+(\.\d+)*$|^v\d|^[a-f0-9]{8,}$|^[A-Z0-9_]{3,}$', text):
            return True
            
        # Check against preserve lists
        words = re.findall(r'\b\w+\b', text_lower)
        for word in words:
            if word in self.preserve_names or word in self.preserve_tech:
                return True
                
        return False

    def translate_text(self, text: str) -> str:
        """Translate text to Arabic with preservation rules"""
        if not text or not isinstance(text, str):
            return text
            
        # Check if should be preserved completely
        if self.should_preserve(text):
            return text
            
        # For mixed content, translate word by word
        words = text.split()
        translated_words = []
        
        for word in words:
            # Clean word for lookup
            clean_word = re.sub(r'[^\w\s]', '', word.lower())
            
            # Check if individual word should be preserved
            if clean_word in self.preserve_names or clean_word in self.preserve_tech:
                translated_words.append(word)
            elif clean_word in self.translations:
                # Preserve punctuation from original word
                if word.endswith(('.', '!', '?', ':')):
                    translated_words.append(self.translations[clean_word] + word[-1])
                else:
                    translated_words.append(self.translations[clean_word])
            else:
                # For unknown words, apply basic rules or leave as is for proper nouns
                if word[0].isupper() and len(word) > 2:  # Likely proper noun
                    translated_words.append(word)
                else:
                    # For now, leave as is - could be enhanced with translation API
                    translated_words.append(word)
        
        result = ' '.join(translated_words)
        return result

    def translate_value(self, value: Any) -> Any:
        """Recursively translate values in JSON structure"""
        if isinstance(value, str):
            return self.translate_text(value)
        elif isinstance(value, dict):
            return {key: self.translate_value(val) for key, val in value.items()}
        elif isinstance(value, list):
            return [self.translate_value(item) for item in value]
        else:
            return value

def main():
    input_file = 'public/locales/en.json'
    output_file = 'public/locales/ar.json'
    
    translator = ArabicTranslator()
    
    print("Loading English JSON file...")
    
    try:
        with open(input_file, 'r', encoding='utf-8') as f:
            json_data = json.load(f)
        
        print(f"Loaded JSON structure successfully")
        print("Starting translation process...")
        
        # Translate the entire structure
        translated_data = translator.translate_value(json_data)
        
        print("Translation completed. Writing to output file...")
        
        # Write the translated data
        with open(output_file, 'w', encoding='utf-8') as f:
            json.dump(translated_data, f, ensure_ascii=False, indent=2)
        
        print(f"Translation completed successfully!")
        print(f"Output written to {output_file}")
        
        # Validate the output
        with open(output_file, 'r', encoding='utf-8') as f:
            json.load(f)  # This will raise an exception if JSON is invalid
        
        print("Output JSON is valid!")
        
    except Exception as e:
        print(f"Error during translation: {e}")
        return 1
    
    return 0

if __name__ == "__main__":
    sys.exit(main())

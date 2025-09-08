#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Comprehensive Persian cleanup script to convert all mixed Persian/English entries 
to proper Persian while preserving brand names, HTML tags, and placeholders.
"""
import json
import re
import shutil
from collections import OrderedDict

# File paths
SRC_FILE = "public/locales/fa.json"
BACKUP_FILE = "fa_cleanup_backup.json"

# Persian numerals
PERSIAN_DIGITS = str.maketrans("0123456789", "۰۱۲۳۴۵۶۷۸۹")

# Terms to preserve (brand names, technical terms)
PRESERVE_TERMS = {
    "Seasalt.ai", "SeaChat", "SeaMeet", "SeaX", "SeaHealth", "SeaVoice",
    "WhatsApp", "Instagram", "Facebook", "Facebook Messenger", 
    "SMS", "API", "HTML", "CSS", "JavaScript", "GitHub", "LinkedIn",
    "Google", "Microsoft", "Line", "Telegram", "Twitter", "YouTube",
    "TikTok", "Shopify", "WordPress", "Mailchimp", "HubSpot", "MailerLite",
    "SOC", "HIPAA", "GDPR", "OAuth", "JWT", "REST", "GraphQL",
    "TCP", "HTTP", "HTTPS", "URL", "URI", "JSON", "XML", "CSV"
}

# Comprehensive English to Persian translation dictionary
COMPREHENSIVE_TRANSLATIONS = {
    # Common words that appear frequently
    "for": "برای",
    "the": "این", 
    "you": "شما",
    "your": "شما",
    "our": "ما",
    "we": "ما",
    "and": "و",
    "or": "یا",
    "with": "با",
    "to": "به",
    "of": "از",
    "in": "در",
    "on": "روی",
    "at": "در",
    "by": "توسط",
    "are": "هستند",
    "is": "است",
    "that": "که",
    "this": "این",
    "their": "آنها",
    "them": "آنها",
    "they": "آنها",
    "it": "آن",
    "its": "آن",
    "will": "خواهد",
    "can": "می‌تواند",
    "have": "دارند",
    "has": "دارد",
    "get": "دریافت کنید",
    "need": "نیاز دارید",
    
    # Action words
    "join": "بپیوندید",
    "Join": "بپیوندید",
    "start": "شروع",
    "Start": "شروع",
    "book": "رزرو کنید",
    "Book": "رزرو کنید",
    "schedule": "برنامه‌ریزی کنید",
    "Schedule": "برنامه‌ریزی کنید",
    "try": "امتحان کنید",
    "Try": "امتحان کنید",
    "explore": "کاوش کنید",
    "Explore": "کاوش کنید",
    "discover": "کشف کنید",
    "Discover": "کشف کنید",
    "learn": "یاد بگیرید",
    "Learn": "یاد بگیرید",
    "see": "ببینید",
    "See": "ببینید",
    "view": "مشاهده کنید",
    "View": "مشاهده کنید",
    "watch": "تماشا کنید",
    "Watch": "تماشا کنید",
    "read": "بخوانید",
    "Read": "بخوانید",
    "click": "کلیک کنید",
    "Click": "کلیک کنید",
    "contact": "تماس",
    "Contact": "تماس",
    "call": "تماس",
    "Call": "تماس",
    "email": "ایمیل",
    "Email": "ایمیل",
    "send": "ارسال",
    "Send": "ارسال",
    "receive": "دریافت",
    "Receive": "دریافت",
    "create": "ایجاد کنید",
    "Create": "ایجاد کنید",
    "build": "بسازید",
    "Build": "بسازید",
    "make": "بسازید",
    "Make": "بسازید",
    "manage": "مدیریت کنید",
    "Manage": "مدیریت کنید",
    "handle": "اداره کنید",
    "Handle": "اداره کنید",
    "solve": "حل کنید",
    "Solve": "حل کنید",
    "fix": "اصلاح کنید",
    "Fix": "اصلاح کنید",
    
    # Business terms
    "business": "کسب‌وکار",
    "Business": "کسب‌وکار",
    "company": "شرکت",
    "Company": "شرکت",
    "team": "تیم",
    "Team": "تیم",
    "customer": "مشتری",
    "Customer": "مشتری",
    "customers": "مشتریان",
    "Customers": "مشتریان",
    "client": "مشتری",
    "Client": "مشتری",
    "clients": "مشتریان",
    "Clients": "مشتریان",
    "user": "کاربر",
    "User": "کاربر",
    "users": "کاربران",
    "Users": "کاربران",
    "agent": "نماینده",
    "Agent": "نماینده",
    "agents": "نمایندگان",
    "Agents": "نمایندگان",
    "support": "پشتیبانی",
    "Support": "پشتیبانی",
    "service": "خدمات",
    "Service": "خدمات",
    "services": "خدمات",
    "Services": "خدمات",
    "product": "محصول",
    "Product": "محصول",
    "products": "محصولات",
    "Products": "محصولات",
    "solution": "راه‌حل",
    "Solution": "راه‌حل",
    "solutions": "راه‌حل‌ها",
    "Solutions": "راه‌حل‌ها",
    "platform": "پلتفرم",
    "Platform": "پلتفرم",
    "system": "سیستم",
    "System": "سیستم",
    "tool": "ابزار",
    "Tool": "ابزار",
    "tools": "ابزارها",
    "Tools": "ابزارها",
    
    # Technology terms
    "technology": "فناوری",
    "Technology": "فناوری",
    "software": "نرم‌افزار",
    "Software": "نرم‌افزار",
    "app": "اپلیکیشن",
    "App": "اپلیکیشن",
    "application": "اپلیکیشن",
    "Application": "اپلیکیشن",
    "web": "وب",
    "Web": "وب",
    "website": "وب‌سایت",
    "Website": "وب‌سایت",
    "online": "آنلاین",
    "Online": "آنلاین",
    "digital": "دیجیتال",
    "Digital": "دیجیتال",
    "mobile": "موبایل",
    "Mobile": "موبایل",
    "phone": "تلفن",
    "Phone": "تلفن",
    "call": "تماس",
    "Call": "تماس",
    "calls": "تماس‌ها",
    "Calls": "تماس‌ها",
    "chat": "گپ",
    "Chat": "گپ",
    "message": "پیام",
    "Message": "پیام",
    "messages": "پیام‌ها",
    "Messages": "پیام‌ها",
    "messaging": "پیام‌رسانی",
    "Messaging": "پیام‌رسانی",
    "voice": "صدا",
    "Voice": "صدا",
    "video": "ویدیو",
    "Video": "ویدیو",
    "audio": "صوتی",
    "Audio": "صوتی",
    "text": "متن",
    "Text": "متن",
    
    # Social media
    "social": "اجتماعی",
    "Social": "اجتماعی",
    "media": "رسانه",
    "Media": "رسانه",
    "channel": "کانال",
    "Channel": "کانال",
    "channels": "کانال‌ها",
    "Channels": "کانال‌ها",
    "network": "شبکه",
    "Network": "شبکه",
    "community": "جامعه",
    "Community": "جامعه",
    
    # Time and scheduling
    "time": "زمان",
    "Time": "زمان",
    "schedule": "برنامه",
    "Schedule": "برنامه",
    "appointment": "قرار ملاقات",
    "Appointment": "قرار ملاقات",
    "meeting": "جلسه",
    "Meeting": "جلسه",
    "demo": "نمایش",
    "Demo": "نمایش",
    "hour": "ساعت",
    "Hour": "ساعت",
    "hours": "ساعت",
    "Hours": "ساعت",
    "minute": "دقیقه",
    "Minute": "دقیقه",
    "minutes": "دقیقه",
    "Minutes": "دقیقه",
    "day": "روز",
    "Day": "روز",
    "days": "روز",
    "Days": "روز",
    "week": "هفته",
    "Week": "هفته",
    "weeks": "هفته",
    "Weeks": "هفته",
    "month": "ماه",
    "Month": "ماه",
    "months": "ماه",
    "Months": "ماه",
    "year": "سال",
    "Year": "سال",
    "years": "سال",
    "Years": "سال",
    
    # Quality and performance
    "quality": "کیفیت",
    "Quality": "کیفیت",
    "performance": "عملکرد",
    "Performance": "عملکرد",
    "speed": "سرعت",
    "Speed": "سرعت",
    "fast": "سریع",
    "Fast": "سریع",
    "quick": "سریع",
    "Quick": "سریع",
    "instant": "فوری",
    "Instant": "فوری",
    "real": "واقعی",
    "Real": "واقعی",
    "live": "زنده",
    "Live": "زنده",
    "automatic": "خودکار",
    "Automatic": "خودکار",
    "smart": "هوشمند",
    "Smart": "هوشمند",
    "intelligent": "هوشمند",
    "Intelligent": "هوشمند",
    
    # Common phrases
    "everywhere": "همه جا",
    "anywhere": "هر جا",
    "everything": "همه چیز",
    "anything": "هر چیز",
    "everyone": "همه",
    "anyone": "هر کسی",
    "something": "چیزی",
    "nothing": "هیچ چیز",
    "always": "همیشه",
    "never": "هرگز",
    "sometimes": "گاهی اوقات",
    "often": "اغلب",
    "usually": "معمولاً",
    "maybe": "شاید",
    "perhaps": "شاید",
    "definitely": "قطعاً",
    "certainly": "مطمئناً",
    "probably": "احتمالاً",
    "possible": "امکان",
    "impossible": "غیرممکن",
    "available": "در دسترس",
    "unavailable": "در دسترس نیست",
    "free": "رایگان",
    "paid": "پولی",
    "premium": "پریمیوم",
    "basic": "پایه",
    "advanced": "پیشرفته",
    "simple": "ساده",
    "complex": "پیچیده",
    "easy": "آسان",
    "difficult": "سخت",
    "hard": "سخت",
    "new": "جدید",
    "old": "قدیمی",
    "latest": "جدیدترین",
    "updated": "به‌روزرسانی شده",
    "modern": "مدرن",
    "traditional": "سنتی",
    "popular": "محبوب",
    "favorite": "مورد علاقه",
    "best": "بهترین",
    "better": "بهتر",
    "good": "خوب",
    "great": "عالی",
    "excellent": "فوق‌العاده",
    "perfect": "عالی",
    "amazing": "شگفت‌انگیز",
    "powerful": "قدرتمند",
    "effective": "مؤثر",
    "efficient": "کارآمد",
    "reliable": "قابل اعتماد",
    "secure": "امن",
    "safe": "ایمن",
    "trusted": "مورد اعتماد",
    "professional": "حرفه‌ای",
    "personal": "شخصی",
    "private": "خصوصی",
    "public": "عمومی",
    "global": "جهانی",
    "international": "بین‌المللی",
    "local": "محلی",
    "national": "ملی",
    "worldwide": "در سراسر جهان",
    
    # Actions and operations
    "create": "ایجاد کنید",
    "delete": "حذف کنید",
    "edit": "ویرایش کنید",
    "update": "به‌روزرسانی کنید",
    "save": "ذخیره کنید",
    "load": "بارگذاری کنید",
    "download": "دانلود کنید",
    "upload": "آپلود کنید",
    "install": "نصب کنید",
    "uninstall": "حذف کنید",
    "configure": "پیکربندی کنید",
    "setup": "راه‌اندازی کنید",
    "connect": "متصل شوید",
    "disconnect": "قطع کنید",
    "login": "ورود",
    "logout": "خروج",
    "signin": "ورود",
    "signup": "ثبت‌نام",
    "register": "ثبت‌نام",
    "subscribe": "عضویت",
    "unsubscribe": "لغو عضویت",
    "follow": "دنبال کنید",
    "unfollow": "دنبال نکنید",
    "share": "اشتراک‌گذاری",
    "like": "پسند",
    "dislike": "نپسند",
    "comment": "نظر",
    "reply": "پاسخ",
    "forward": "ارسال",
    "back": "بازگشت",
    "next": "بعدی",
    "previous": "قبلی",
    "first": "اول",
    "last": "آخر",
    "home": "خانه",
    "dashboard": "داشبورد",
    "settings": "تنظیمات",
    "profile": "پروفایل",
    "account": "حساب",
    "billing": "صورتحساب",
    "payment": "پرداخت",
    "invoice": "فاکتور",
    "order": "سفارش",
    "cart": "سبد خرید",
    "checkout": "تسویه حساب",
    
    # Specific problematic words from analysis
    "across": "در سراسر",
    "Across": "در سراسر",
    "between": "بین",
    "Between": "بین",
    "through": "از طریق",
    "Through": "از طریق",
    "within": "در",
    "Within": "در",
    "without": "بدون",
    "Without": "بدون",
    "during": "در طول",
    "During": "در طول",
    "before": "قبل از",
    "Before": "قبل از",
    "after": "بعد از",
    "After": "بعد از",
    "while": "در حالی که",
    "While": "در حالی که",
    "since": "از زمانی که",
    "Since": "از زمانی که",
    "until": "تا",
    "Until": "تا",
    "unless": "مگر اینکه",
    "Unless": "مگر اینکه",
    "although": "اگرچه",
    "Although": "اگرچه",
    "however": "با این حال",
    "However": "با این حال",
    "therefore": "بنابراین",
    "Therefore": "بنابراین",
    "because": "چون",
    "Because": "چون",
    "so": "پس",
    "So": "پس",
    "but": "اما",
    "But": "اما",
    "yet": "هنوز",
    "Yet": "هنوز",
    "still": "هنوز",
    "Still": "هنوز",
    "already": "قبلاً",
    "Already": "قبلاً",
    "just": "فقط",
    "Just": "فقط",
    "only": "فقط",
    "Only": "فقط",
    "also": "همچنین",
    "Also": "همچنین",
    "too": "نیز",
    "Too": "نیز",
    "even": "حتی",
    "Even": "حتی",
    "more": "بیشتر",
    "More": "بیشتر",
    "most": "بیشترین",
    "Most": "بیشترین",
    "less": "کمتر",
    "Less": "کمتر",
    "least": "کمترین",
    "Least": "کمترین",
    "much": "زیاد",
    "Much": "زیاد",
    "many": "زیاد",
    "Many": "زیاد",
    "few": "کم",
    "Few": "کم",
    "several": "چندین",
    "Several": "چندین",
    "some": "برخی",
    "Some": "برخی",
    "any": "هر",
    "Any": "هر",
    "all": "همه",
    "All": "همه",
    "each": "هر",
    "Each": "هر",
    "every": "هر",
    "Every": "هر",
    "both": "هر دو",
    "Both": "هر دو",
    "either": "یا",
    "Either": "یا",
    "neither": "نه",
    "Neither": "نه",
    "none": "هیچ",
    "None": "هیچ",
    
    # Common technical/business phrases
    "jumping": "جابجایی",
    "Jumping": "جابجایی",
    "creates": "ایجاد می‌کند",
    "Creates": "ایجاد می‌کند",
    "chaos": "بی‌نظمی",
    "Chaos": "بی‌نظمی",
    "wastes": "تلف می‌کند",
    "Wastes": "تلف می‌کند",
    "trying": "تلاش می‌کنند",
    "Trying": "تلاش می‌کنند",
    "reach": "دسترسی پیدا کنند",
    "Reach": "دسترسی پیدا کنند",
    "missed": "از دست رفته",
    "Missed": "از دست رفته",
    "brings": "می‌آورد",
    "Brings": "می‌آورد",
    "place": "مکان",
    "Place": "مکان",
    "miss": "از دست بدهید",
    "Miss": "از دست بدهید",
    "opportunity": "فرصت",
    "Opportunity": "فرصت",
    "question": "سؤال",
    "Question": "سؤال",
    "shipping": "حمل و نقل",
    "Shipping": "حمل و نقل",
    "sent": "ارسال شده",
    "Sent": "ارسال شده",
    "replies": "پاسخ‌ها",
    "Replies": "پاسخ‌ها",
    "logs": "گزارش‌ها",
    "Logs": "گزارش‌ها",
}

def create_backup():
    """Create backup of current file"""
    shutil.copy2(SRC_FILE, BACKUP_FILE)
    print(f"✅ Backup created: {BACKUP_FILE}")

def protect_content(text):
    """Protect brand names, HTML tags, and placeholders"""
    protected = []
    result = text
    
    # Protect URLs
    def protect_url(match):
        protected.append(match.group(0))
        return f"__URL_{len(protected)-1}__"
    
    # Protect HTML tags
    def protect_tag(match):
        protected.append(match.group(0))
        return f"__TAG_{len(protected)-1}__"
    
    # Protect placeholders
    def protect_placeholder(match):
        protected.append(match.group(0))
        return f"__PLACEHOLDER_{len(protected)-1}__"
    
    # Protect brand names
    def protect_brand(match):
        protected.append(match.group(0))
        return f"__BRAND_{len(protected)-1}__"
    
    # Apply protections
    result = re.sub(r'https?://[^\s<>"]+', protect_url, result)
    result = re.sub(r'<[^>]*>', protect_tag, result)
    result = re.sub(r'{{[^}]*}}', protect_placeholder, result)
    result = re.sub(r'@@[A-Z]+\d+@@', protect_placeholder, result)
    
    # Protect brand names (case insensitive)
    for brand in sorted(PRESERVE_TERMS, key=len, reverse=True):
        pattern = re.escape(brand)
        result = re.sub(f'\\b{pattern}\\b', protect_brand, result, flags=re.IGNORECASE)
    
    return result, protected

def restore_content(text, protected):
    """Restore protected content"""
    result = text
    for i in range(len(protected) - 1, -1, -1):
        result = result.replace(f"__BRAND_{i}__", protected[i])
        result = result.replace(f"__PLACEHOLDER_{i}__", protected[i])
        result = result.replace(f"__TAG_{i}__", protected[i])
        result = result.replace(f"__URL_{i}__", protected[i])
    return result

def clean_persian_text(text):
    """Clean and standardize Persian text"""
    if not text or not isinstance(text, str):
        return text
    
    # Protect content
    protected_text, protected_items = protect_content(text)
    
    # Apply comprehensive translations
    result = protected_text
    for english, persian in COMPREHENSIVE_TRANSLATIONS.items():
        # Use word boundaries for exact matches
        pattern = r'\b' + re.escape(english) + r'\b'
        result = re.sub(pattern, persian, result, flags=re.IGNORECASE)
    
    # Apply Persian punctuation
    result = result.replace(",", "،")  # Persian comma
    result = result.replace("?", "؟")  # Persian question mark
    
    # Fix spacing around punctuation
    result = re.sub(r'\s*،\s*', '، ', result)
    result = re.sub(r'\s*؟\s*', '؟ ', result)
    
    # Convert numbers to Persian (be careful not to convert protected content)
    if re.search(r'\d', result) and '__' not in result:
        result = result.translate(PERSIAN_DIGITS)
    
    # Clean extra spaces
    result = re.sub(r'\s+', ' ', result).strip()
    
    # Restore protected content
    result = restore_content(result, protected_items)
    
    return result

def process_json_recursively(obj):
    """Recursively process JSON object to clean all string values"""
    if isinstance(obj, dict):
        return {key: process_json_recursively(value) for key, value in obj.items()}
    elif isinstance(obj, list):
        return [process_json_recursively(item) for item in obj]
    elif isinstance(obj, str):
        return clean_persian_text(obj)
    else:
        return obj

def analyze_results(original_data, cleaned_data):
    """Analyze the cleaning results"""
    def count_english_words(obj):
        count = 0
        if isinstance(obj, dict):
            for v in obj.values():
                count += count_english_words(v)
        elif isinstance(obj, list):
            for item in obj:
                count += count_english_words(item)
        elif isinstance(obj, str):
            # Count English words excluding preserved terms
            words = re.findall(r'\b[a-zA-Z]{3,}\b', obj)
            for word in words:
                if word not in PRESERVE_TERMS:
                    count += 1
        return count
    
    original_english = count_english_words(original_data)
    cleaned_english = count_english_words(cleaned_data)
    
    original_str = json.dumps(original_data, ensure_ascii=False)
    cleaned_str = json.dumps(cleaned_data, ensure_ascii=False)
    
    return {
        'original_english_words': original_english,
        'cleaned_english_words': cleaned_english,
        'words_translated': original_english - cleaned_english,
        'original_size': len(original_str),
        'cleaned_size': len(cleaned_str),
        'persian_commas': cleaned_str.count('،'),
        'persian_questions': cleaned_str.count('؟')
    }

def main():
    print("🧹 Starting comprehensive Persian cleanup...")
    
    # Create backup
    create_backup()
    
    # Load current data
    with open(SRC_FILE, 'r', encoding='utf-8') as f:
        original_data = json.load(f, object_pairs_hook=OrderedDict)
    
    print(f"📄 Loaded fa.json with {len(original_data)} top-level keys")
    
    # Clean all content
    print("🔄 Processing all entries for comprehensive Persian cleanup...")
    cleaned_data = process_json_recursively(original_data)
    
    # Save cleaned data
    with open(SRC_FILE, 'w', encoding='utf-8') as f:
        json.dump(cleaned_data, f, ensure_ascii=False, indent=2)
    
    print(f"✅ Cleaned data saved to {SRC_FILE}")
    
    # Analyze results
    results = analyze_results(original_data, cleaned_data)
    
    print("\n📊 Cleanup Results:")
    print(f"   🔤 English words before: {results['original_english_words']:,}")
    print(f"   🔤 English words after: {results['cleaned_english_words']:,}")
    print(f"   ✅ Words translated: {results['words_translated']:,}")
    print(f"   📄 File size: {results['cleaned_size']:,} characters")
    print(f"   📍 Persian commas: {results['persian_commas']}")
    print(f"   ❓ Persian questions: {results['persian_questions']}")
    
    # Final validation
    try:
        with open(SRC_FILE, 'r', encoding='utf-8') as f:
            json.load(f)
        print("✅ JSON structure validated successfully")
    except json.JSONDecodeError as e:
        print(f"❌ JSON validation failed: {e}")
        return False
    
    # Check for remaining mixed entries
    def count_mixed_entries(obj):
        count = 0
        if isinstance(obj, dict):
            for v in obj.values():
                count += count_mixed_entries(v)
        elif isinstance(obj, list):
            for item in obj:
                count += count_mixed_entries(item)
        elif isinstance(obj, str):
            has_persian = bool(re.search(r'[\u0600-\u06FF]', obj))
            has_english = bool(re.search(r'\b[a-zA-Z]{3,}\b', obj))
            if has_persian and has_english:
                # Check if English words are only preserved terms
                english_words = re.findall(r'\b[a-zA-Z]+\b', obj)
                non_preserved = [w for w in english_words if w not in PRESERVE_TERMS and len(w) > 2]
                if non_preserved:
                    count += 1
        return count
    
    remaining_mixed = count_mixed_entries(cleaned_data)
    
    print(f"\n🎯 Quality Assessment:")
    if remaining_mixed == 0:
        print("🎉 Perfect! No mixed Persian/English entries remain.")
    elif remaining_mixed < 10:
        print(f"✅ Excellent! Only {remaining_mixed} mixed entries remain (likely edge cases).")
    elif remaining_mixed < 50:
        print(f"✅ Good! {remaining_mixed} mixed entries remain.")
    else:
        print(f"⚠️  {remaining_mixed} mixed entries still need attention.")
    
    print(f"\n✅ Comprehensive Persian cleanup completed!")
    print(f"   📁 Original backed up to: {BACKUP_FILE}")
    print(f"   🔄 {results['words_translated']} English words translated to Persian")
    print(f"   📍 Persian typography applied throughout")
    
    return True

if __name__ == "__main__":
    main()

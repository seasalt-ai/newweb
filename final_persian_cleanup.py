#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Final targeted Persian cleanup to convert remaining mixed Persian/English entries
"""
import json
import re
import shutil
from collections import OrderedDict

# File paths
SRC_FILE = "public/locales/fa.json"
BACKUP_FILE = "fa_final_cleanup_backup.json"

# Persian numerals
PERSIAN_DIGITS = str.maketrans("0123456789", "۰۱۲۳۴۵۶۷۸۹")

# Expanded preserve terms
PRESERVE_TERMS = {
    "Seasalt.ai", "SeaChat", "SeaMeet", "SeaX", "SeaHealth", "SeaVoice",
    "WhatsApp", "Instagram", "Facebook", "Facebook Messenger", 
    "SMS", "API", "HTML", "CSS", "JavaScript", "GitHub", "LinkedIn",
    "Google", "Microsoft", "Line", "Telegram", "Twitter", "YouTube",
    "TikTok", "Shopify", "WordPress", "Mailchimp", "HubSpot", "MailerLite",
    "SOC", "HIPAA", "GDPR", "OAuth", "JWT", "REST", "GraphQL",
    "TCP", "HTTP", "HTTPS", "URL", "URI", "JSON", "XML", "CSV",
    # Comparison brands
    "RingCentral", "Aircall", "Dialpad", "Five9", "Avaya", "3CX", 
    "Kustomer", "8x8", "Intercom", "Respond.io", "OpenPhone",
    "UCaaS", "CCaaS", "PBX", "RingCX", "MACs", "SSL", "CRM",
    "AI", "ZVC", "LINE", "PCI", "DSS"
}

# Final comprehensive translations for remaining words
FINAL_TRANSLATIONS = {
    # High priority words from analysis
    "millions": "میلیون‌ها",
    "Millions": "میلیون‌ها",
    "scale": "مقیاس",
    "Scale": "مقیاس",
    "via": "از طریق",
    "Via": "از طریق",
    "per": "در",
    "Per": "در",
    "drive": "محرک",
    "Drive": "محرک",
    "powered": "مجهز به",
    "Powered": "مجهز به",
    "rates": "نرخ‌ها",
    "Rates": "نرخ‌ها",
    "how": "چگونه",
    "How": "چگونه",
    "results": "نتایج",
    "Results": "نتایج",
    "add": "اضافه کنید",
    "Add": "اضافه کنید",
    "center": "مرکز",
    "Center": "مرکز",
    "handles": "اداره می‌کند",
    "Handles": "اداره می‌کند",
    "why": "چرا",
    "Why": "چرا",
    "comprehensive": "جامع",
    "Comprehensive": "جامع",
    "growing": "در حال رشد",
    "Growing": "در حال رشد",
    "choose": "انتخاب کنید",
    "Choose": "انتخاب کنید",
    "provide": "ارائه دهید",
    "Provide": "ارائه دهید",
    "grade": "درجه",
    "Grade": "درجه",
    "exceptional": "استثنایی",
    "Exceptional": "استثنایی",
    "count": "تعداد",
    "Count": "تعداد",
    "plan": "برنامه",
    "Plan": "برنامه",
    
    # Additional problematic words
    "open": "باز",
    "Open": "باز",
    "unique": "منحصر به فرد",
    "Unique": "منحصر به فرد",
    "model": "مدل",
    "Model": "مدل",
    "based": "مبتنی بر",
    "Based": "مبتنی بر",
    "not": "نه",
    "Not": "نه",
    "which": "که",
    "Which": "که",
    "comes": "می‌آید",
    "Comes": "می‌آید",
    "significant": "قابل توجه",
    "Significant": "قابل توجه",
    "hidden": "پنهان",
    "Hidden": "پنهان",
    "complexity": "پیچیدگی",
    "Complexity": "پیچیدگی",
    "responsible": "مسئول",
    "Responsible": "مسئول",
    "hosting": "میزبانی",
    "Hosting": "میزبانی",
    "certificates": "گواهی‌ها",
    "Certificates": "گواهی‌ها",
    "technical": "فنی",
    "Technical": "فنی",
    "starts": "شروع می‌شود",
    "Starts": "شروع می‌شود",
    "ticket": "تیکت",
    "Ticket": "تیکت",
    "native": "بومی",
    "Native": "بومی",
    "fully": "کاملاً",
    "Fully": "کاملاً",
    "managed": "مدیریت شده",
    "Managed": "مدیریت شده",
    "true": "واقعی",
    "True": "واقعی",
    "provides": "ارائه می‌دهد",
    "Provides": "ارائه می‌دهد",
    "journey": "سفر",
    "Journey": "سفر",
    "power": "قدرت",
    "Power": "قدرت",
    "seat": "صندلی",
    "Seat": "صندلی",
    "mandatory": "اجباری",
    "Mandatory": "اجباری",
    "minimum": "حداقل",
    "Minimum": "حداقل",
    "making": "ایجاد کردن",
    "Making": "ایجاد کردن",
    "inaccessible": "غیرقابل دسترس",
    "Inaccessible": "غیرقابل دسترس",
    "critical": "بحرانی",
    "Critical": "بحرانی",
    "capabilities": "قابلیت‌ها",
    "Capabilities": "قابلیت‌ها",
    "expensive": "گران",
    "Expensive": "گران",
    "ons": "اضافات",
    "Ons": "اضافات",
    "core": "هسته",
    "Core": "هسته",
    "functionality": "عملکرد",
    "Functionality": "عملکرد",
    "full": "کامل",
    "Full": "کامل",
    "suite": "مجموعه",
    "Suite": "مجموعه",
    "including": "از جمله",
    "Including": "از جمله",
    "routing": "مسیریابی",
    "Routing": "مسیریابی",
    "opaque": "مبهم",
    "Opaque": "مبهم",
    "quote": "قیمت",
    "Quote": "قیمت",
    "targeting": "هدف قرار دادن",
    "Targeting": "هدف قرار دادن",
    "larger": "بزرگتر",
    "Larger": "بزرگتر",
    "prohibitive": "ممنوع",
    "Prohibitive": "ممنوع",
    "key": "کلیدی",
    "Key": "کلیدی",
    "value": "ارزش",
    "Value": "ارزش",
    "strong": "قوی",
    "Strong": "قوی",
    "monthly": "ماهانه",
    "Monthly": "ماهانه",
    "become": "تبدیل شدن",
    "Become": "تبدیل شدن",
    "unpredictable": "غیرقابل پیش‌بینی",
    "Unpredictable": "غیرقابل پیش‌بینی",
    "crucial": "حیاتی",
    "Crucial": "حیاتی",
    "beta": "بتا",
    "Beta": "بتا",
    "fees": "هزینه‌ها",
    "Fees": "هزینه‌ها",
    "billed": "صورتحساب شده",
    "Billed": "صورتحساب شده",
    "separately": "جداگانه",
    "Separately": "جداگانه",
    "adding": "اضافه کردن",
    "Adding": "اضافه کردن",
    "another": "دیگری",
    "Another": "دیگری",
    "layer": "لایه",
    "Layer": "لایه",
    "truly": "واقعاً",
    "Truly": "واقعاً",
    "where": "جایی که",
    "Where": "جایی که",
    "feature": "ویژگی",
    "Feature": "ویژگی",
    
    # More technical terms
    "transcription": "رونویسی",
    "Transcription": "رونویسی",
    "summaries": "خلاصه‌ها",
    "Summaries": "خلاصه‌ها",
    "entry": "ورودی",
    "Entry": "ورودی",
    "require": "نیاز دارد",
    "Require": "نیاز دارد",
    "upgrading": "ارتقا دادن",
    "Upgrading": "ارتقا دادن",
    "plans": "برنامه‌ها",
    "Plans": "برنامه‌ها",
    "built": "ساخته شده",
    "Built": "ساخته شده",
    "ground": "زمین",
    "Ground": "زمین",
    "excels": "برتری دارد",
    "Excels": "برتری دارد",
    "class": "کلاس",
    "Class": "کلاس",
    "separate": "جداگانه",
    "Separate": "جداگانه",
    "charges": "هزینه‌ها",
    "Charges": "هزینه‌ها",
    "resolution": "وضوح",
    "Resolution": "وضوح",
    "pay": "پرداخت",
    "Pay": "پرداخت",
    "afterthoughts": "عقب‌افتادگی",
    "Afterthoughts": "عقب‌افتادگی",
    "primary": "اصلی",
    "Primary": "اصلی",
    
    # Interface and user experience
    "known": "شناخته شده",
    "Known": "شناخته شده",
    "friendly": "دوستانه",
    "Friendly": "دوستانه",
    "forces": "مجبور می‌کند",
    "Forces": "مجبور می‌کند",
    "corner": "گوشه",
    "Corner": "گوشه",
    "off": "خاموش",
    "Off": "خاموش",
    "behind": "پشت",
    "Behind": "پشت",
    "transparent": "شفاف",
    "Transparent": "شفاف",
    
    # Business improvement terms
    "improves": "بهبود می‌دهد",
    "Improves": "بهبود می‌دهد",
    "efficiency": "کارایی",
    "Efficiency": "کارایی",
    "enhances": "تقویت می‌کند",
    "Enhances": "تقویت می‌کند",
    "patient": "بیمار",
    "Patient": "بیمار",
    "satisfaction": "رضایت",
    "Satisfaction": "رضایت",
    "increases": "افزایش می‌دهد",
    "Increases": "افزایش می‌دهد",
    "revenue": "درآمد",
    "Revenue": "درآمد",
    "cheaper": "ارزان‌تر",
    "Cheaper": "ارزان‌تر",
    "empathetic": "همدل",
    "Empathetic": "همدل",
    "than": "از",
    "Than": "از",
    "outsourcing": "برون‌سپاری",
    "Outsourcing": "برون‌سپاری",
    "front": "جلو",
    "Front": "جلو",
    "desk": "میز",
    "Desk": "میز",
    "receptionist": "منشی",
    "Receptionist": "منشی",
    "work": "کار",
    "Work": "کار",
    
    # More business terms
    "solopreneurs": "کارآفرینان انفرادی",
    "Solopreneurs": "کارآفرینان انفرادی",
    "soon": "به زودی",
    "Soon": "به زودی",
    "hire": "استخدام کنید",
    "Hire": "استخدام کنید",
    "hit": "برخورد",
    "Hit": "برخورد",
    "lacks": "فاقد",
    "Lacks": "فاقد",
    "shared": "مشترک",
    "Shared": "مشترک",
    "queues": "صف‌ها",
    "Queues": "صف‌ها",
    "importantly": "مهم‌تر از همه",
    "Importantly": "مهم‌تر از همه",
    "meaning": "به این معنی",
    "Meaning": "به این معنی",
    "cannot": "نمی‌تواند",
    "Cannot": "نمی‌تواند",
    "integrate": "یکپارچه سازی",
    "Integrate": "یکپارچه سازی",
    "other": "دیگر",
    "Other": "دیگر",
    "essential": "ضروری",
    "Essential": "ضروری",
    
    # Company and business context
    "designed": "طراحی شده",
    "Designed": "طراحی شده",
    "large": "بزرگ",
    "Large": "بزرگ",
    "outbound": "خروجی",
    "Outbound": "خروجی",
    "heavy": "سنگین",
    "Heavy": "سنگین",
    "budgets": "بودجه‌ها",
    "Budgets": "بودجه‌ها",
    "starting": "شروع",
    "Starting": "شروع",
    "massive": "عظیم",
    "Massive": "عظیم",
    "overkill": "اضافی",
    "Overkill": "اضافی",
    "balanced": "متعادل",
    "Balanced": "متعادل",
    "inbound": "ورودی",
    "Inbound": "ورودی",
    "fraction": "کسری",
    "Fraction": "کسری",
    
    # Legacy and architecture
    "been": "بوده",
    "Been": "بوده",
    "giant": "غول",
    "Giant": "غول",
    "decades": "دهه‌ها",
    "Decades": "دهه‌ها",
    "legacy": "میراث",
    "Legacy": "میراث",
    "architecture": "معماری",
    "Architecture": "معماری",
    "poor": "ضعیف",
    "Poor": "ضعیف",
    "fit": "مناسب",
    "Fit": "مناسب",
    "transitioning": "انتقال",
    "Transitioning": "انتقال",
    "remains": "باقی می‌ماند",
    "Remains": "باقی می‌ماند",
    "licensing": "مجوز",
    "Licensing": "مجوز",
    "requirements": "الزامات",
    "Requirements": "الزامات",
    
    # Provider and service terms
    "leading": "پیشرو",
    "Leading": "پیشرو",
    "provider": "ارائه‌دهنده",
    "Provider": "ارائه‌دهنده",
    "building": "ساختن",
    "Building": "ساختن",
    "multilingual": "چندزبانه",
    "Multilingual": "چندزبانه",
    "around": "در اطراف",
    "Around": "در اطراف",
    "world": "جهان",
    "World": "جهان",
    "founded": "تأسیس شده",
    "Founded": "تأسیس شده",
    "veterans": "کهنه‌کارها",
    "Veterans": "کهنه‌کارها",
    "technologies": "فناوری‌ها",
    "Technologies": "فناوری‌ها",
    "mission": "مأموریت",
    "Mission": "مأموریت",
    "accessible": "قابل دسترس",
    "Accessible": "قابل دسترس",
    "scalable": "مقیاس‌پذیر",
    "Scalable": "مقیاس‌پذیر",
    
    # Platform and system terms
    "fragmented": "پراکنده",
    "Fragmented": "پراکنده",
    "main": "اصلی",
    "Main": "اصلی",
    "while": "در حالی که",
    "While": "در حالی که",
    "silos": "سیلوها",
    "Silos": "سیلوها",
    
    # More descriptive terms
    "affordable": "مقرون به صرفه",
    "Affordable": "مقرون به صرفه",
    "needing": "نیاز دارند",
    "Needing": "نیاز دارند",
    "limited": "محدود",
    "Limited": "محدود",
    "logical": "منطقی",
    "Logical": "منطقی",
    "step": "قدم",
    "Step": "قدم",
    "outgrown": "فراتر رفته",
    "Outgrown": "فراتر رفته",
    
    # Investment and access terms
    "investor": "سرمایه‌گذار",
    "Investor": "سرمایه‌گذار",
    "unique": "منحصر به فرد",
    "access": "دسترسی",
    "Access": "دسترسی",
    "strategy": "استراتژی",
    "Strategy": "استراتژی",
    "markets": "بازارها",
    "Markets": "بازارها",
    "dominant": "غالب",
    "Dominant": "غالب",
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

def final_persian_cleanup(text):
    """Final comprehensive Persian text cleanup"""
    if not text or not isinstance(text, str):
        return text
    
    # Protect content
    protected_text, protected_items = protect_content(text)
    
    # Apply final translations
    result = protected_text
    for english, persian in FINAL_TRANSLATIONS.items():
        # Use word boundaries for exact matches
        pattern = r'\b' + re.escape(english) + r'\b'
        result = re.sub(pattern, persian, result, flags=re.IGNORECASE)
    
    # Additional cleanup for common patterns
    # Fix spacing issues
    result = re.sub(r'\s+', ' ', result)
    result = result.strip()
    
    # Apply Persian punctuation improvements
    result = result.replace(",", "،")  # Persian comma
    result = result.replace("?", "؟")  # Persian question mark
    
    # Fix spacing around punctuation
    result = re.sub(r'\s*،\s*', '، ', result)
    result = re.sub(r'\s*؟\s*', '؟ ', result)
    
    # Convert numbers to Persian where appropriate
    if re.search(r'\d', result) and '__' not in result:
        result = result.translate(PERSIAN_DIGITS)
    
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
        return final_persian_cleanup(obj)
    else:
        return obj

def analyze_remaining_mixed(data):
    """Analyze remaining mixed entries"""
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
                english_words = re.findall(r'\b[a-zA-Z]+\b', obj)
                non_preserved = [w for w in english_words if w not in PRESERVE_TERMS and len(w) > 2]
                if non_preserved:
                    count += 1
        return count
    
    return count_mixed_entries(data)

def main():
    print("🎯 Starting final targeted Persian cleanup...")
    
    # Create backup
    create_backup()
    
    # Load current data
    with open(SRC_FILE, 'r', encoding='utf-8') as f:
        original_data = json.load(f, object_pairs_hook=OrderedDict)
    
    print(f"📄 Loaded fa.json with {len(original_data)} top-level keys")
    
    # Count initial mixed entries
    initial_mixed = analyze_remaining_mixed(original_data)
    print(f"🔍 Initial mixed Persian/English entries: {initial_mixed}")
    
    # Clean all content
    print("🔄 Applying final targeted cleanup...")
    cleaned_data = process_json_recursively(original_data)
    
    # Save cleaned data
    with open(SRC_FILE, 'w', encoding='utf-8') as f:
        json.dump(cleaned_data, f, ensure_ascii=False, indent=2)
    
    print(f"✅ Final cleanup applied to {SRC_FILE}")
    
    # Final analysis
    final_mixed = analyze_remaining_mixed(cleaned_data)
    
    # Count English words
    def count_english_words(obj):
        count = 0
        if isinstance(obj, dict):
            for v in obj.values():
                count += count_english_words(v)
        elif isinstance(obj, list):
            for item in obj:
                count += count_english_words(item)
        elif isinstance(obj, str):
            words = re.findall(r'\b[a-zA-Z]{3,}\b', obj)
            for word in words:
                if word not in PRESERVE_TERMS:
                    count += 1
        return count
    
    final_english_words = count_english_words(cleaned_data)
    
    # Final validation
    try:
        with open(SRC_FILE, 'r', encoding='utf-8') as f:
            json.load(f)
        print("✅ JSON structure validated successfully")
    except json.JSONDecodeError as e:
        print(f"❌ JSON validation failed: {e}")
        return False
    
    print("\n📊 Final Cleanup Results:")
    print(f"   🔄 Mixed entries before: {initial_mixed}")
    print(f"   🔄 Mixed entries after: {final_mixed}")
    print(f"   ✅ Mixed entries reduced by: {initial_mixed - final_mixed}")
    print(f"   🔤 Remaining non-preserved English words: {final_english_words}")
    
    # Get file stats
    content_str = json.dumps(cleaned_data, ensure_ascii=False)
    print(f"   📄 File size: {len(content_str):,} characters")
    print(f"   📍 Persian commas: {content_str.count('،')}")
    print(f"   ❓ Persian questions: {content_str.count('؟')}")
    
    print(f"\n🎯 Quality Assessment:")
    if final_mixed == 0:
        print("🎉 Perfect! No mixed Persian/English entries remain.")
    elif final_mixed < 50:
        print(f"🎉 Excellent! Only {final_mixed} mixed entries remain (likely only preserved brand names).")
    elif final_mixed < 200:
        print(f"✅ Very Good! {final_mixed} mixed entries remain.")
    else:
        print(f"✅ Good progress! {final_mixed} mixed entries remain.")
    
    print(f"\n✅ Final Persian cleanup completed!")
    print(f"   📁 Original backed up to: {BACKUP_FILE}")
    print(f"   🔄 Reduced mixed entries by {initial_mixed - final_mixed}")
    print(f"   📍 Persian typography fully applied")
    
    return True

if __name__ == "__main__":
    main()

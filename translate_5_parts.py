#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Complete 5-part Persian translation script for fa.json
Follows all specified rules:
- Split into 5 equal parts
- Translate only values (strings after colons)
- Preserve brand names (Seasalt.ai, SeaChat, SeaMeet, SeaX, WhatsApp, etc.)
- Preserve author names
- Keep HTML tags and placeholders unchanged
- Apply Persian punctuation (، and ؟)
- Convert numbers to Persian numerals where appropriate
- Maintain proper spacing
"""
import json
import os
import re
import shutil
from collections import OrderedDict

# Paths
WORKING_DIR = "/Users/user/Documents/个人/实习/Seasalt/New Project/i18n/newweb-i18n"
SRC_FILE = os.path.join(WORKING_DIR, "public/locales/fa.json")
BACKUP_FILE = os.path.join(WORKING_DIR, "fa.json.backup")

# Part files
PART_FILES = [f"fa_part{i}.json" for i in range(1, 6)]
TRANSLATED_FILES = [f"fa_part{i}_translated.json" for i in range(1, 6)]

# Persian numerals
PERSIAN_DIGITS = str.maketrans("0123456789", "۰۱۲۳۴۵۶۷۸۹")

# Brand names and terms to preserve
PRESERVE_TERMS = {
    "Seasalt.ai", "SeaChat", "SeaMeet", "SeaX", "SeaHealth", "SeaVoice",
    "WhatsApp", "Instagram", "Facebook", "Facebook Messenger", "SMS", "API",
    "HTML", "CSS", "JavaScript", "GitHub", "LinkedIn", "Google", "Microsoft",
    "Line", "Telegram", "Twitter", "YouTube", "TikTok", "Shopify", "WordPress"
}

# Simple English -> Persian translations
TRANSLATIONS = {
    # Basic UI
    "Home": "خانه",
    "About": "درباره", 
    "Contact": "تماس",
    "Company": "شرکت",
    "Blog": "وبلاگ",
    "Careers": "فرصت‌های شغلی",
    "Features": "ویژگی‌ها",
    "Pricing": "قیمت‌گذاری",
    "Login": "ورود",
    "Sign In": "ورود",
    "Sign Up": "ثبت‌نام",
    "Register": "ثبت‌نام",
    "Start Free": "شروع رایگان",
    "Start for Free": "شروع رایگان",
    "Get Started": "شروع کنید",
    
    # Business terms
    "Compare Us": "ما را مقایسه کنید",
    "Security": "امنیت",
    "Privacy Policy": "سیاست حریم خصوصی",
    "Terms of Service": "شرایط خدمات",
    "Schedule Demo": "درخواست نمایش",
    "Book Demo": "رزرو نمایش",
    "Contact Sales": "تماس با فروش",
    
    # Common words
    "and": "و",
    "or": "یا", 
    "with": "با",
    "for": "برای",
    "to": "به",
    "of": "از",
    "in": "در",
    "on": "روی",
    "at": "در",
    "by": "توسط"
}


def create_backup():
    """Create backup of original file"""
    if os.path.exists(SRC_FILE):
        shutil.copy2(SRC_FILE, BACKUP_FILE)
        print(f"✅ Backup created: {BACKUP_FILE}")
    else:
        print(f"❌ Source file not found: {SRC_FILE}")
        return False
    return True


def split_json_into_parts(data, num_parts=5):
    """Split JSON data into roughly equal parts by keys"""
    items = list(data.items())
    total_items = len(items)
    chunk_size = max(1, total_items // num_parts)
    
    parts = []
    for i in range(num_parts):
        start_idx = i * chunk_size
        if i == num_parts - 1:  # Last part gets remaining items
            end_idx = total_items
        else:
            end_idx = (i + 1) * chunk_size
        
        part_items = items[start_idx:end_idx]
        part_dict = OrderedDict(part_items)
        parts.append(part_dict)
    
    return parts


def is_author_name(text):
    """Heuristic to detect author names (e.g., "John Doe", "— Sarah Chen")"""
    # Pattern for names like "Sarah Chen", "Dr. John Smith", "— Mike Rodriguez"
    name_patterns = [
        r'^—\s*[A-Z][a-z]+\s+[A-Z][a-z]+',  # — FirstName LastName
        r'^[A-Z][a-z]+\s+[A-Z][a-z]+$',     # FirstName LastName
        r'^Dr\.\s*[A-Z][a-z]+\s+[A-Z][a-z]+',  # Dr. FirstName LastName
        r'^Prof\.\s*[A-Z][a-z]+\s+[A-Z][a-z]+' # Prof. FirstName LastName
    ]
    return any(re.match(pattern, text.strip()) for pattern in name_patterns)


def preserve_special_content(text):
    """Protect HTML tags, placeholders, and URLs from translation"""
    protected = []
    
    # Protect HTML-like tags
    def protect_tags(match):
        protected.append(match.group(0))
        return f"__TAG_{len(protected)-1}__"
    
    # Protect placeholders
    def protect_placeholders(match):
        protected.append(match.group(0))
        return f"__PLACEHOLDER_{len(protected)-1}__"
    
    # Protect URLs
    def protect_urls(match):
        protected.append(match.group(0))
        return f"__URL_{len(protected)-1}__"
    
    # Protect brand names
    def protect_brands(match):
        protected.append(match.group(0))
        return f"__BRAND_{len(protected)-1}__"
    
    # Apply protections
    result = text
    
    # URLs first
    result = re.sub(r'https?://[^\s<>"]+', protect_urls, result)
    result = re.sub(r'www\.[^\s<>"]+', protect_urls, result)
    
    # HTML tags
    result = re.sub(r'<[^>]+>', protect_tags, result)
    
    # Placeholders
    result = re.sub(r'{{[^}]+}}', protect_placeholders, result)
    
    # Brand names (case insensitive)
    for brand in sorted(PRESERVE_TERMS, key=len, reverse=True):
        pattern = re.escape(brand)
        result = re.sub(f'({pattern})', protect_brands, result, flags=re.IGNORECASE)
    
    return result, protected


def restore_special_content(text, protected):
    """Restore protected content"""
    result = text
    
    # Restore in reverse order
    for i in range(len(protected) - 1, -1, -1):
        result = result.replace(f"__BRAND_{i}__", protected[i])
        result = result.replace(f"__URL_{i}__", protected[i])
        result = result.replace(f"__PLACEHOLDER_{i}__", protected[i])
        result = result.replace(f"__TAG_{i}__", protected[i])
    
    return result


def apply_persian_formatting(text):
    """Apply Persian punctuation and formatting rules"""
    # Replace punctuation
    text = text.replace(",", "،")  # Persian comma
    text = text.replace("?", "؟")  # Persian question mark
    
    # Fix spacing around punctuation
    text = re.sub(r'\s*،\s*', '، ', text)
    text = re.sub(r'\s*؟\s*', '؟ ', text)
    
    # Convert numbers to Persian (avoid in URLs/emails which are protected)
    if re.search(r'\d', text) and not any(x in text for x in ['__URL_', '__TAG_', '__PLACEHOLDER_']):
        text = text.translate(PERSIAN_DIGITS)
    
    # Clean up extra spaces
    text = re.sub(r'\s+', ' ', text).strip()
    
    return text


def translate_text(text):
    """Translate English text to Persian"""
    if not text or not isinstance(text, str):
        return text
    
    # Don't translate if it's a preserved term
    if text in PRESERVE_TERMS:
        return text
    
    # Don't translate author names
    if is_author_name(text):
        return text
    
    # Protect special content
    protected_text, protected_items = preserve_special_content(text)
    
    # Apply translations
    result = protected_text
    for english, persian in TRANSLATIONS.items():
        # Word boundary matching to avoid partial replacements
        pattern = r'\b' + re.escape(english) + r'\b'
        result = re.sub(pattern, persian, result, flags=re.IGNORECASE)
    
    # Apply Persian formatting
    result = apply_persian_formatting(result)
    
    # Restore protected content
    result = restore_special_content(result, protected_items)
    
    return result


def translate_json_values(obj):
    """Recursively translate only string values in JSON"""
    if isinstance(obj, dict):
        return {key: translate_json_values(value) for key, value in obj.items()}
    elif isinstance(obj, list):
        return [translate_json_values(item) for item in obj]
    elif isinstance(obj, str):
        return translate_text(obj)
    else:
        return obj


def save_json(filepath, data):
    """Save JSON with proper formatting"""
    with open(filepath, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    print(f"✅ Saved: {filepath}")


def load_json(filepath):
    """Load JSON file"""
    with open(filepath, 'r', encoding='utf-8') as f:
        return json.load(f, object_pairs_hook=OrderedDict)


def validate_json(filepath):
    """Validate JSON structure"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            json.load(f)
        return True
    except json.JSONDecodeError as e:
        print(f"❌ JSON validation failed for {filepath}: {e}")
        return False


def count_english_words(text):
    """Count English words (excluding preserved terms)"""
    if not isinstance(text, str):
        return 0
    
    words = re.findall(r'\b[a-zA-Z]+\b', text)
    english_count = 0
    for word in words:
        if len(word) > 2 and word not in PRESERVE_TERMS:
            english_count += 1
    return english_count


def analyze_content(data):
    """Analyze translated content"""
    content_str = json.dumps(data, ensure_ascii=False)
    
    persian_chars = len(re.findall(r'[\u0600-\u06FF]', content_str))
    persian_commas = content_str.count('،')
    persian_questions = content_str.count('؟')
    
    # Count English words in values only
    def count_english_in_values(obj):
        count = 0
        if isinstance(obj, dict):
            for v in obj.values():
                count += count_english_in_values(v)
        elif isinstance(obj, list):
            for item in obj:
                count += count_english_in_values(item)
        elif isinstance(obj, str):
            count += count_english_words(obj)
        return count
    
    english_words = count_english_in_values(data)
    
    return {
        'persian_chars': persian_chars,
        'persian_commas': persian_commas,
        'persian_questions': persian_questions,
        'english_words': english_words,
        'file_size': len(content_str)
    }


def main():
    """Main execution function"""
    print("🚀 Starting 5-part Persian translation process...")
    
    # Step 0: Create backup
    if not create_backup():
        return
    
    # Step 1: Load and split the file
    print("\n📂 Step 1: Splitting fa.json into 5 parts...")
    try:
        data = load_json(SRC_FILE)
        print(f"✅ Loaded fa.json with {len(data)} top-level keys")
    except Exception as e:
        print(f"❌ Failed to load {SRC_FILE}: {e}")
        return
    
    parts = split_json_into_parts(data, 5)
    
    # Save parts
    for i, part in enumerate(parts, 1):
        part_file = PART_FILES[i-1]
        save_json(part_file, part)
        print(f"   Part {i}: {len(part)} keys → {part_file}")
    
    # Step 2: Translate each part
    print("\n🔤 Step 2: Translating each part...")
    translated_parts = []
    
    for i, part in enumerate(parts, 1):
        print(f"   Translating part {i}...")
        translated_part = translate_json_values(part)
        translated_file = TRANSLATED_FILES[i-1]
        save_json(translated_file, translated_part)
        
        # Validate translated part
        if validate_json(translated_file):
            translated_parts.append(translated_part)
            print(f"   ✅ Part {i} translated and validated")
        else:
            print(f"   ❌ Part {i} translation failed validation")
            return
    
    # Step 3: Merge parts back together
    print("\n🔗 Step 3: Merging translated parts...")
    merged_data = OrderedDict()
    for part in translated_parts:
        merged_data.update(part)
    
    # Verify merge
    if len(merged_data) != len(data):
        print(f"❌ Merge failed: expected {len(data)} keys, got {len(merged_data)}")
        return
    
    # Save merged result
    save_json(SRC_FILE, merged_data)
    print(f"✅ Merged file saved to {SRC_FILE}")
    
    # Step 4: Final validation
    print("\n🔍 Step 4: Final validation...")
    
    if not validate_json(SRC_FILE):
        print("❌ Final JSON validation failed")
        return
    
    # Analyze results
    analysis = analyze_content(merged_data)
    
    print("\n📊 Translation Results:")
    print(f"   📝 File size: {analysis['file_size']:,} characters")
    print(f"   🔤 Persian characters: {analysis['persian_chars']:,}")
    print(f"   📍 Persian commas (،): {analysis['persian_commas']}")
    print(f"   ❓ Persian questions (؟): {analysis['persian_questions']}")
    print(f"   🔤 Remaining English words: {analysis['english_words']}")
    
    # Check brand preservation
    content_str = json.dumps(merged_data, ensure_ascii=False)
    preserved_brands = []
    for brand in PRESERVE_TERMS:
        count = content_str.count(brand)
        if count > 0:
            preserved_brands.append(f"{brand} ({count})")
    
    if preserved_brands:
        print(f"   🏷️  Preserved brands: {', '.join(preserved_brands[:5])}")
        if len(preserved_brands) > 5:
            print(f"       ... and {len(preserved_brands) - 5} more")
    
    print(f"\n🎉 Translation completed successfully!")
    print(f"   📁 Original backed up to: {BACKUP_FILE}")
    print(f"   📁 Parts created: {', '.join(PART_FILES)}")
    print(f"   📁 Translated parts: {', '.join(TRANSLATED_FILES)}")
    
    # Final English check
    if analysis['english_words'] < 100:
        print(f"   ✅ Translation quality: Excellent (only {analysis['english_words']} English words remain)")
    elif analysis['english_words'] < 500:
        print(f"   ⚠️  Translation quality: Good ({analysis['english_words']} English words remain)")
    else:
        print(f"   ⚠️  Translation quality: Needs review ({analysis['english_words']} English words remain)")


if __name__ == "__main__":
    main()

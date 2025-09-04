#!/usr/bin/env python3
"""
Automated complete translation of de.json using deep-translator
This will translate ALL English text to German
"""

import json
import re
import time
from pathlib import Path
from deep_translator import GoogleTranslator

def is_translatable(text):
    """Check if text should be translated"""
    if not isinstance(text, str):
        return False
    
    # Skip short strings, URLs, emails, placeholders, etc.
    if len(text.strip()) < 3:
        return False
    if text.startswith(('http', 'www', '__', '@', '#', '/')):
        return False
    if '@' in text and '.' in text:  # Email
        return False
    if re.match(r'^[0-9\s\-\+\(\)]+$', text):  # Phone numbers
        return False
    if re.match(r'^[A-Z0-9_]+$', text):  # Constants
        return False
    
    return True

def contains_english(text):
    """Check if text contains English words"""
    if not isinstance(text, str):
        return False
    
    # Common English words that shouldn't appear in German text
    english_patterns = [
        r'\bthe\b', r'\band\b', r'\bor\b', r'\bis\b', r'\bare\b',
        r'\bwas\b', r'\bwere\b', r'\bhave\b', r'\bhas\b', r'\bhad\b',
        r'\bwill\b', r'\bwould\b', r'\bcan\b', r'\bwith\b', r'\bfor\b',
        r'\byour\b', r'\bour\b', r'\bthis\b', r'\bthat\b', r'\bget\b',
        r'\bsee\b', r'\bview\b', r'\blearn\b', r'\bmore\b', r'\bstart\b',
        r'\bfree\b', r'\btry\b', r'\bnow\b', r'\ball\b', r'\bnew\b'
    ]
    
    text_lower = text.lower()
    for pattern in english_patterns:
        if re.search(pattern, text_lower):
            return True
    return False

def fix_german_issues(text):
    """Fix common German translation issues"""
    if not isinstance(text, str):
        return text
    
    # Fix common mistranslations and formatting issues
    fixes = {
        # Fix broken words
        "Benzutzer": "Benutzer",
        "Fungionen": "Funktionen", 
        "Unterstein": "Unterstützung",
        "automatiSierung": "Automatisierung",
        "Neinw": "Jetzt",
        "NEIN": "Kein",
        "Vergichen": "Vergleichen",
        "Muttzungsbedingungen": "Nutzungsbedingungen",
        "Kariere": "Karriere",
        
        # Fix capitalization
        " MIT ": " mit ",
        " FÜR ": " für ",
        " VON ": " von ",
        " ZU ": " zu ",
        " UND ": " und ",
        " ODER ": " oder ",
        
        # Fix spacing
        "  ": " ",
        " ,": ",",
        " .": ".",
        " !": "!",
        " ?": "?",
        
        # Common phrase corrections
        "Registrieren für Kostenlos": "Kostenlos registrieren",
        "Loslegen Kostenlos": "Kostenlos starten",
        "Ansehen Demo": "Demo ansehen",
        "Buchen Sie eine Demo": "Demo buchen",
        "Planen Sie Demo": "Demo planen",
    }
    
    result = text
    for wrong, correct in fixes.items():
        result = result.replace(wrong, correct)
    
    # Remove extra spaces
    result = re.sub(r'\s+', ' ', result)
    result = result.strip()
    
    return result

def translate_text(text, translator):
    """Translate text from English to German"""
    if not is_translatable(text):
        return text
    
    # Check if it contains English
    if not contains_english(text):
        # Just fix German issues if present
        return fix_german_issues(text)
    
    try:
        # Preserve placeholders
        placeholders = re.findall(r'__[a-zA-Z0-9]+__', text)
        temp_text = text
        for i, ph in enumerate(placeholders):
            temp_text = temp_text.replace(ph, f'PLACEHOLDER{i}')
        
        # Translate
        translated = translator.translate(temp_text)
        
        # Restore placeholders
        for i, ph in enumerate(placeholders):
            translated = translated.replace(f'PLACEHOLDER{i}', ph)
        
        # Fix common issues
        translated = fix_german_issues(translated)
        
        return translated
    except Exception as e:
        print(f"Translation error: {e}")
        return fix_german_issues(text)  # At least fix German issues

def process_value(value, translator, path=""):
    """Recursively process and translate JSON values"""
    if isinstance(value, dict):
        result = {}
        for key, val in value.items():
            new_path = f"{path}.{key}" if path else key
            result[key] = process_value(val, translator, new_path)
        return result
    elif isinstance(value, list):
        return [process_value(item, translator, f"{path}[{i}]") for i, item in enumerate(value)]
    elif isinstance(value, str):
        if contains_english(value):
            translated = translate_text(value, translator)
            if value != translated:
                print(f"Translating: {value[:50]}... -> {translated[:50]}...")
            return translated
        else:
            # Just fix any German issues
            return fix_german_issues(value)
    else:
        return value

def main():
    json_path = Path('public/locales/de.json')
    
    print("Loading de.json...")
    with open(json_path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    print("Initializing translator...")
    translator = GoogleTranslator(source='en', target='de')
    
    print("Processing and translating content...")
    print("This may take a few minutes...")
    
    translated_data = process_value(data, translator)
    
    print("\nSaving translated file...")
    with open(json_path, 'w', encoding='utf-8') as f:
        json.dump(translated_data, f, ensure_ascii=False, indent=2, separators=(',', ': '))
    
    print("Translation complete!")
    
    # Verification
    print("\nVerifying translation...")
    with open(json_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Count English words
    english_words = len(re.findall(r'\b(the|and|or|is|are|with|for|your|our|this|that|have|has|will|can)\b', content, re.IGNORECASE))
    
    if english_words > 100:
        print(f"Warning: Still found {english_words} common English words.")
        print("You may need to run the script again or review manually.")
    elif english_words > 0:
        print(f"Found {english_words} English words remaining (might be in proper nouns or technical terms).")
    else:
        print("✓ No common English words found!")
    
    return 0

if __name__ == '__main__':
    exit(main())

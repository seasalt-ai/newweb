#!/usr/bin/env python3
import json
import re
from deep_translator import GoogleTranslator
import time
import sys

def should_preserve(text):
    """Check if text should be preserved (not translated)"""
    if not isinstance(text, str):
        return True
    
    if not text.strip():
        return True
    
    # Preserve specific exact matches
    preserve_exact = [
        'Seasalt.ai', 'SeaChat', 'SeaMeet', 'SeaX', 'SeaVoice', 'SeaSuite', 'SeaHealth',
        'WhatsApp', 'Instagram', 'Facebook', 'Messenger', 'LINE', 'Line',
        'SMS', 'API', 'CRM', 'HIPAA', 'GDPR', 'SOC 2', '10DLC', 'A2P',
        'Seattle', 'WA', 'USA', 'API References', 'Product Wiki', 'xxxxx', '8XX'
    ]
    
    if text.strip() in preserve_exact:
        return True
    
    # Preserve patterns
    if (re.match(r'^https?://', text) or 
        re.match(r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$', text) or
        re.match(r'^\{\{[^}]+\}\}$', text) or
        re.match(r'^#[A-Z0-9]+$', text) or
        re.match(r'^\+\d+[\s\-\(\)0-9A-Z]+$', text)):
        return True
    
    # Check for author names but translate common titles
    if re.match(r'^[A-Z][a-z]+ [A-Z][a-z]+(-[A-Z][a-z]+)?$', text.strip()):
        translate_these = [
            'Customer Support', 'Customer Service', 'Technical Support',
            'Customer Success', 'Solution Architect', 'Operations Director'
        ]
        if text not in translate_these:
            return True
    
    return False

def is_already_german(text):
    """Check if text contains German characters (already translated)"""
    if not isinstance(text, str):
        return False
    
    # Check for common German characters or words
    german_indicators = ['ä', 'ö', 'ü', 'ß', 'Ä', 'Ö', 'Ü']
    for char in german_indicators:
        if char in text:
            return True
    
    # Check for common German words
    german_words = ['und', 'der', 'die', 'das', 'ist', 'für', 'mit', 'von', 'zu', 'auf', 'ein', 'eine']
    words = text.lower().split()
    for word in german_words:
        if word in words:
            return True
    
    return False

def translate_safe(text, translator):
    """Safely translate text with error handling"""
    try:
        # Preserve special content
        preserved_items = {}
        modified_text = text
        
        # Preserve brand names
        preserve_names = ['Seasalt.ai', 'SeaChat', 'SeaMeet', 'SeaX', 'SeaVoice', 
                        'SeaSuite', 'SeaHealth', 'WhatsApp', 'Instagram', 
                        'Facebook', 'Messenger', 'LINE', 'SMS', 'API', 'HIPAA', 
                        'GDPR', 'SOC', '10DLC', 'A2P']
        
        for idx, name in enumerate(preserve_names):
            if name in modified_text:
                placeholder = f"__P{idx}__"
                preserved_items[placeholder] = name
                modified_text = modified_text.replace(name, placeholder)
        
        # Preserve HTML tags
        html_tags = re.findall(r'<[^>]+>', modified_text)
        for idx, tag in enumerate(html_tags):
            placeholder = f"__H{idx}__"
            preserved_items[placeholder] = tag
            modified_text = modified_text.replace(tag, placeholder)
        
        # Preserve template variables
        variables = re.findall(r'\{\{[^}]+\}\}', modified_text)
        for idx, var in enumerate(variables):
            placeholder = f"__V{idx}__"
            preserved_items[placeholder] = var
            modified_text = modified_text.replace(var, placeholder)
        
        # Translate
        if modified_text.strip():
            result = translator.translate(modified_text)
            if result:
                # Restore preserved items
                for placeholder, original in preserved_items.items():
                    result = result.replace(placeholder, original)
                return result
        
        return text
        
    except Exception as e:
        return text

def process_and_translate(data, translator):
    """Process the entire structure and translate only untranslated strings"""
    translated_count = 0
    skipped_count = 0
    error_count = 0
    
    def process_value(value):
        nonlocal translated_count, skipped_count, error_count
        
        if isinstance(value, str):
            # Skip if should preserve or already German
            if should_preserve(value):
                skipped_count += 1
                return value
            
            if is_already_german(value):
                skipped_count += 1
                return value
            
            # Translate
            translated = translate_safe(value, translator)
            if translated != value:
                translated_count += 1
                if translated_count % 10 == 0:
                    sys.stdout.write(f"\r  Progress: {translated_count} translated, {skipped_count} skipped")
                    sys.stdout.flush()
                    time.sleep(0.2)  # Small delay every 10 translations
            else:
                error_count += 1
            
            return translated
            
        elif isinstance(value, list):
            return [process_value(item) for item in value]
        elif isinstance(value, dict):
            return {k: process_value(v) for k, v in value.items()}
        else:
            return value
    
    result = process_value(data)
    sys.stdout.write(f"\r  Final: {translated_count} translated, {skipped_count} skipped, {error_count} errors\n")
    sys.stdout.flush()
    
    return result, translated_count

def main():
    print("=== Continue German Translation ===\n")
    print("This script will continue translating untranslated strings only.\n")
    
    # Initialize translator
    print("Initializing translator...")
    translator = GoogleTranslator(source='en', target='de')
    
    # Test
    try:
        test = translator.translate("Hello")
        print(f"Test successful: 'Hello' -> '{test}'\n")
    except Exception as e:
        print(f"Translator error: {e}")
        return
    
    # Load JSON
    print("Loading de.json...")
    with open('public/locales/de.json', 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    print("Processing and translating untranslated strings...")
    print("(This will skip already translated German text)\n")
    
    # Process and translate
    data, count = process_and_translate(data, translator)
    
    # Save
    print(f"\nSaving updated de.json...")
    with open('public/locales/de.json', 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    
    print(f"✅ Translation completed! {count} new strings translated.")
    
    # Validate
    with open('public/locales/de.json', 'r', encoding='utf-8') as f:
        json.load(f)
    print("✅ JSON is valid!")

if __name__ == "__main__":
    main()

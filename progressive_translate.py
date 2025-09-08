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

def translate_text(text, translator, retry=3):
    """Translate a single text with retry logic"""
    for attempt in range(retry):
        try:
            # Preserve special content within text
            preserved_items = {}
            modified_text = text
            
            # Preserve brand names within text
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
            if attempt < retry - 1:
                time.sleep(1)  # Wait before retry
                continue
            else:
                print(f"  Failed after {retry} attempts: {text[:30]}...")
                return text
    
    return text

def process_chunk(data, chunk_start, chunk_size, translator):
    """Process a chunk of the data"""
    count = 0
    translated_count = 0
    
    def process_value(value):
        nonlocal count, translated_count
        
        if isinstance(value, str):
            if count >= chunk_start and count < chunk_start + chunk_size:
                if not should_preserve(value):
                    translated = translate_text(value, translator)
                    translated_count += 1
                    if translated_count % 10 == 0:
                        sys.stdout.write(f"\r  Translated {translated_count} strings...")
                        sys.stdout.flush()
                    return translated
            count += 1
            return value
        elif isinstance(value, list):
            return [process_value(item) for item in value]
        elif isinstance(value, dict):
            return {k: process_value(v) for k, v in value.items()}
        else:
            return value
    
    result = process_value(data)
    sys.stdout.write(f"\r  Translated {translated_count} strings in this chunk\n")
    sys.stdout.flush()
    return result, translated_count

def count_strings(obj):
    """Count total number of strings in JSON"""
    count = 0
    if isinstance(obj, str):
        return 1
    elif isinstance(obj, list):
        for item in obj:
            count += count_strings(item)
    elif isinstance(obj, dict):
        for value in obj.values():
            count += count_strings(value)
    return count

def main():
    print("=== Progressive German Translation ===\n")
    
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
    
    # Count strings
    total_strings = count_strings(data)
    print(f"Total strings found: {total_strings}")
    
    # Process in chunks and save periodically
    chunk_size = 500  # Process 500 strings at a time
    chunk_start = 0
    total_translated = 0
    
    while chunk_start < total_strings:
        print(f"\nProcessing chunk starting at string {chunk_start}...")
        
        # Process chunk
        data, translated_in_chunk = process_chunk(data, chunk_start, chunk_size, translator)
        total_translated += translated_in_chunk
        
        # Save progress
        print(f"  Saving progress (total translated so far: {total_translated})...")
        with open('public/locales/de.json', 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
        
        chunk_start += chunk_size
        
        # Small delay between chunks
        if chunk_start < total_strings:
            time.sleep(2)
    
    print(f"\n✅ Translation completed! Total translated: {total_translated}")
    
    # Final validation
    with open('public/locales/de.json', 'r', encoding='utf-8') as f:
        json.load(f)
    print("✅ JSON is valid!")

if __name__ == "__main__":
    main()

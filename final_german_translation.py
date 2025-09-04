#!/usr/bin/env python3
import json
import re
from deep_translator import GoogleTranslator
import time

def should_preserve(text):
    """Check if text should be preserved (not translated)"""
    if not isinstance(text, str):
        return True
    
    # Preserve empty strings
    if not text.strip():
        return True
    
    # Preserve specific patterns
    preserve_patterns = [
        r'^https?://',  # URLs
        r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$',  # Email
        r'^\{\{[^}]+\}\}$',  # Template variables
        r'^#[A-Z0-9]+$',  # Hex codes
        r'^\+\d+[\s\-\(\)0-9A-Z]+$',  # Phone numbers
        r'^[0-9]+DLC$',  # 10DLC
        r'^xxxxx$',  # Technical placeholder
        r'^8XX$',  # Toll-free placeholder
    ]
    
    for pattern in preserve_patterns:
        if re.match(pattern, text.strip()):
            return True
    
    # Check if entire text is a company/product name
    preserve_exact = [
        'Seasalt.ai', 'SeaChat', 'SeaMeet', 'SeaX', 'SeaVoice', 'SeaSuite', 'SeaHealth',
        'WhatsApp', 'Instagram', 'Facebook', 'Messenger', 'LINE', 'Line',
        'SMS', 'API', 'CRM', 'HIPAA', 'GDPR', 'SOC 2', '10DLC', 'A2P',
        'Seattle', 'WA', 'USA', 'API References', 'Product Wiki'
    ]
    
    if text.strip() in preserve_exact:
        return True
    
    # Check if it's a person's name (First Last format)
    if re.match(r'^[A-Z][a-z]+ [A-Z][a-z]+(-[A-Z][a-z]+)?$', text.strip()):
        translate_these = [
            'Customer Support', 'Customer Service', 'Technical Support',
            'Customer Success', 'Solution Architect', 'Operations Director'
        ]
        if text not in translate_these:
            return True
    
    return False

def translate_with_preservation(text, translator):
    """Translate text while preserving special content"""
    if should_preserve(text):
        return text
    
    try:
        # Preserve special patterns within the text
        preserved_items = {}
        modified_text = text
        
        # Preserve company/product names
        preserve_names = [
            'Seasalt.ai', 'SeaChat', 'SeaMeet', 'SeaX', 'SeaVoice', 'SeaSuite', 'SeaHealth',
            'WhatsApp', 'Instagram', 'Facebook', 'Messenger', 'LINE', 'SMS', 'API',
            'HIPAA', 'GDPR', 'SOC', '10DLC', 'A2P', 'Twilio', 'Google', 'Salesforce',
            'HubSpot', 'Zendesk', 'Stripe', 'PayPal', 'Shopify', 'AWS', 'Azure'
        ]
        
        for i, name in enumerate(preserve_names):
            if name in modified_text:
                placeholder = f"__PRESERVE{i}__"
                preserved_items[placeholder] = name
                modified_text = modified_text.replace(name, placeholder)
        
        # Preserve HTML tags
        html_tags = re.findall(r'<[^>]+>', modified_text)
        for i, tag in enumerate(html_tags):
            placeholder = f"__HTML{i}__"
            preserved_items[placeholder] = tag
            modified_text = modified_text.replace(tag, placeholder)
        
        # Preserve template variables
        variables = re.findall(r'\{\{[^}]+\}\}', modified_text)
        for i, var in enumerate(variables):
            placeholder = f"__VAR{i}__"
            preserved_items[placeholder] = var
            modified_text = modified_text.replace(var, placeholder)
        
        # Translate the modified text
        if modified_text.strip():
            translated = translator.translate(modified_text)
            if not translated:
                translated = modified_text
        else:
            translated = modified_text
        
        # Restore preserved items
        for placeholder, original in preserved_items.items():
            translated = translated.replace(placeholder, original)
        
        return translated
        
    except Exception as e:
        print(f"Translation error for '{text[:50]}...': {e}")
        return text

def translate_json_value(value, translator, depth=0):
    """Recursively translate JSON values"""
    if isinstance(value, str):
        translated = translate_with_preservation(value, translator)
        if value != translated and len(value) > 1 and depth < 5:
            indent = "  " * depth
            if len(value) > 60:
                print(f"{indent}✓ Translated: {value[:60]}...")
            else:
                print(f"{indent}✓ Translated: {value}")
        return translated
    elif isinstance(value, list):
        return [translate_json_value(item, translator, depth) for item in value]
    elif isinstance(value, dict):
        result = {}
        for k, v in value.items():
            if depth < 2:
                print(f"{'  ' * depth}Processing: {k}")
            result[k] = translate_json_value(v, translator, depth + 1)
            # Small delay to avoid rate limiting
            if depth == 0:
                time.sleep(0.1)
        return result
    else:
        return value

def main():
    print("=== Final German Translation ===\n")
    
    # Initialize translator
    print("Initializing Google Translator (via deep-translator)...")
    translator = GoogleTranslator(source='en', target='de')
    
    # Test the translator
    try:
        test = translator.translate("Hello World")
        print(f"Translator test: 'Hello World' -> '{test}'")
    except Exception as e:
        print(f"Translator test failed: {e}")
        print("Please check your internet connection.")
        return
    
    # Load the JSON file
    print("\nLoading de.json...")
    with open('public/locales/de.json', 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    print(f"Loaded JSON with {len(data)} top-level keys\n")
    
    # Translate all values
    print("Translating content to German...")
    print("This may take a few minutes due to API rate limiting...\n")
    
    translated_data = translate_json_value(data, translator)
    
    # Save the translated JSON
    print("\n\nSaving fully translated de.json...")
    with open('public/locales/de.json', 'w', encoding='utf-8') as f:
        json.dump(translated_data, f, ensure_ascii=False, indent=2)
    
    print("✅ Translation completed successfully!")
    
    # Validate JSON
    print("\nValidating JSON structure...")
    with open('public/locales/de.json', 'r', encoding='utf-8') as f:
        json.load(f)
    print("✅ JSON validation successful!")
    
    # Show file statistics
    import os
    file_size = os.path.getsize('public/locales/de.json')
    with open('public/locales/de.json', 'r', encoding='utf-8') as f:
        line_count = sum(1 for _ in f)
    
    print(f"\nFile statistics:")
    print(f"  - Size: {file_size:,} bytes")
    print(f"  - Lines: {line_count:,}")
    print("\n✅ German translation complete!")

if __name__ == "__main__":
    main()

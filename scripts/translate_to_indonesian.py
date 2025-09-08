#!/usr/bin/env python3
"""
Indonesian Translation Script for Seasalt.ai I18n JSON Files

This script translates all English text values in a JSON file to Indonesian
while preserving:
- Company/product names (Seasalt.ai, SeaChat, SeaMeet, SeaX, SeaVoice, SeaHealth)
- Author and person names
- Placeholders like {{year}}, <1>...</1>, etc.
- HTML tags and structure
- JSON structure and keys

Requirements:
- Install: pip install deep-translator
"""

import json
import re
import sys
import traceback
from collections import OrderedDict
from pathlib import Path
from typing import Any, Dict, List, Union

from deep_translator import GoogleTranslator


class IndonesianTranslator:
    """Translates JSON text to Indonesian while preserving special elements"""
    
    def __init__(self):
        self.translator = GoogleTranslator(source='en', target='id')
        self.protected_terms = {
            # Company and product names (case-sensitive)
            'Seasalt.ai', 'SeaChat', 'SeaMeet', 'SeaX', 'SeaVoice', 'SeaHealth',
            'Twilio', 'WhatsApp', 'Facebook', 'Instagram', 'LINE', 'TikTok', 
            'Twitter', 'Google', 'Microsoft', 'Amazon', 'Apple', 'PayPal',
            'Shopify', 'WordPress', 'Salesforce', 'HubSpot', 'Mailchimp',
            # Common API/tech terms that should not be translated
            'API', 'SDK', 'REST', 'JSON', 'HTML', 'CSS', 'JavaScript', 'OAuth',
            'HIPAA', 'PCI DSS', 'GDPR', 'SOC 2', 'TCPA', 'FDCPA',
            # Measurement units and formats
            'SMS', 'WhatsApp Business', 'Facebook Messenger', 'Instagram Direct',
            # Common terms that should stay in English
            'AI-AGENT', 'Login', 'Sign Up', 'All rights reserved'
        }
        
        # Regex patterns for elements to preserve
        self.preserve_patterns = [
            r'\{\{[^}]*\}\}',           # {{variable}} placeholders
            r'<\d+>[^<]*</\d+>',       # <1>text</1> tags
            r'<[^>]+>',                # HTML tags
            r'\[[^\]]+\]',             # [text] in square brackets
            r'\b\d+[\w\s]*%?',         # Numbers with optional units/percentages
            r'[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}',  # Email addresses
            r'https?://[^\s<>"{}|\\^`\[\]]+',  # URLs
            r'\+\d+[\s\-\(\)0-9]+',    # Phone numbers
            r'\$\d+(?:\.\d{2})?',      # Currency amounts
            r'\b\d{1,2}:\d{2}(?:\s*[AP]M)?\b',  # Time formats
        ]
        
        self.pattern = '|'.join(f'({p})' for p in self.preserve_patterns)
        self.compiled_pattern = re.compile(self.pattern, re.IGNORECASE)
    
    def extract_preservable_elements(self, text: str) -> List[tuple]:
        """Extract elements that should not be translated"""
        if not isinstance(text, str):
            return []
        
        matches = []
        
        # Find all preservable patterns
        for match in self.compiled_pattern.finditer(text):
            matches.append((match.start(), match.end(), match.group()))
        
        # Find protected terms (case-insensitive)
        for term in self.protected_terms:
            pattern = re.compile(r'\b' + re.escape(term) + r'\b', re.IGNORECASE)
            for match in pattern.finditer(text):
                # Don't duplicate if already captured by other patterns
                if not any(m[0] <= match.start() < m[1] or m[0] < match.end() <= m[1] 
                          for m in matches):
                    matches.append((match.start(), match.end(), match.group()))
        
        # Sort by position
        matches.sort(key=lambda x: x[0])
        return matches
    
    def translate_text(self, text: str) -> str:
        """Translate text while preserving special elements"""
        if not isinstance(text, str) or not text.strip():
            return text
        
        try:
            # Extract preservable elements
            preservable = self.extract_preservable_elements(text)
            
            if not preservable:
                # No special elements, translate directly
                return self.translator.translate(text)
            
            # Split text into translatable and non-translatable parts
            parts = []
            last_end = 0
            
            for start, end, matched_text in preservable:
                # Add text before the match (if any) - this should be translated
                if start > last_end:
                    translatable_part = text[last_end:start]
                    if translatable_part.strip():
                        parts.append(('translate', translatable_part))
                
                # Add the preserved element
                parts.append(('preserve', matched_text))
                last_end = end
            
            # Add any remaining text
            if last_end < len(text):
                remaining = text[last_end:]
                if remaining.strip():
                    parts.append(('translate', remaining))
            
            # Translate parts and reassemble
            result_parts = []
            for part_type, part_text in parts:
                if part_type == 'translate':
                    # Skip if part is empty or whitespace only
                    if not part_text.strip():
                        result_parts.append(part_text)
                    else:
                        translated = self.translator.translate(part_text)
                        # Handle None response from translator
                        if translated is None:
                            result_parts.append(part_text)  # Use original if translation fails
                        else:
                            result_parts.append(translated)
                else:  # preserve
                    result_parts.append(part_text)
            
            return ''.join(result_parts)
            
        except Exception as e:
            print(f"Warning: Failed to translate '{text[:100]}...': {e}")
            return text  # Return original on error
    
    def translate_json_recursive(self, data: Any) -> Any:
        """Recursively translate JSON data structure"""
        if isinstance(data, dict):
            result = OrderedDict() if isinstance(data, OrderedDict) else {}
            for key, value in data.items():
                # Keys are never translated, only values
                result[key] = self.translate_json_recursive(value)
            return result
        elif isinstance(data, list):
            return [self.translate_json_recursive(item) for item in data]
        elif isinstance(data, str):
            return self.translate_text(data)
        else:
            # Numbers, booleans, null - return as is
            return data
    
    def validate_translation(self, original: Dict, translated: Dict) -> bool:
        """Validate that translation preserved structure and special elements"""
        def count_keys(obj, path=""):
            if isinstance(obj, dict):
                count = len(obj)
                for key, value in obj.items():
                    count += count_keys(value, f"{path}.{key}" if path else key)
                return count
            elif isinstance(obj, list):
                count = len(obj)
                for i, item in enumerate(obj):
                    count += count_keys(item, f"{path}[{i}]")
                return count
            return 0
        
        # Check that structure is preserved
        original_keys = count_keys(original)
        translated_keys = count_keys(translated)
        
        if original_keys != translated_keys:
            print(f"ERROR: Key count mismatch - Original: {original_keys}, Translated: {translated_keys}")
            return False
        
        # Validate specific patterns are preserved
        def extract_all_strings(obj):
            strings = []
            if isinstance(obj, dict):
                for value in obj.values():
                    strings.extend(extract_all_strings(value))
            elif isinstance(obj, list):
                for item in obj:
                    strings.extend(extract_all_strings(item))
            elif isinstance(obj, str):
                strings.append(obj)
            return strings
        
        original_strings = extract_all_strings(original)
        translated_strings = extract_all_strings(translated)
        
        # Count placeholders and other preserved elements
        def count_pattern_occurrences(strings, pattern):
            count = 0
            for s in strings:
                count += len(re.findall(pattern, s))
            return count
        
        for pattern in self.preserve_patterns:
            orig_count = count_pattern_occurrences(original_strings, pattern)
            trans_count = count_pattern_occurrences(translated_strings, pattern)
            
            if orig_count != trans_count:
                print(f"ERROR: Pattern '{pattern}' count mismatch - Original: {orig_count}, Translated: {trans_count}")
                return False
        
        print("✓ Translation validation passed")
        return True


def main():
    """Main function to handle file translation"""
    if len(sys.argv) > 1:
        input_file = Path(sys.argv[1])
    else:
        # Default path
        input_file = Path("/Users/user/Documents/个人/实习/Seasalt/New Project/i18n/newweb-i18n/public/locales/id.json")
    
    if not input_file.exists():
        print(f"ERROR: File not found: {input_file}")
        sys.exit(1)
    
    output_file = input_file.parent / "id.translated.json"
    
    print(f"📖 Loading JSON from: {input_file}")
    
    try:
        # Load original JSON with ordered dict to preserve order
        with open(input_file, 'r', encoding='utf-8') as f:
            original_data = json.load(f, object_pairs_hook=OrderedDict)
        
        print(f"✅ Loaded JSON with {len(json.dumps(original_data))} characters")
        
        # Initialize translator
        print("🌐 Initializing Indonesian translator...")
        translator = IndonesianTranslator()
        
        # Translate
        print("🔄 Starting translation process...")
        translated_data = translator.translate_json_recursive(original_data)
        
        print("✅ Translation completed")
        
        # Validate
        print("🔍 Validating translation...")
        if not translator.validate_translation(original_data, translated_data):
            print("❌ Validation failed!")
            sys.exit(1)
        
        # Save translated version
        print(f"💾 Saving translated file to: {output_file}")
        with open(output_file, 'w', encoding='utf-8') as f:
            json.dump(translated_data, f, ensure_ascii=False, indent=2, separators=(',', ': '))
            f.write('\n')  # Add trailing newline
        
        print("🎉 Indonesian translation completed successfully!")
        print(f"📂 Output saved to: {output_file}")
        
        # Also update the original file if requested
        if '--overwrite' in sys.argv:
            print("🔄 Overwriting original file...")
            with open(input_file, 'w', encoding='utf-8') as f:
                json.dump(translated_data, f, ensure_ascii=False, indent=2, separators=(',', ': '))
                f.write('\n')
            print("✅ Original file updated")
        
    except Exception as e:
        print(f"❌ Error during translation: {e}")
        traceback.print_exc()
        sys.exit(1)


if __name__ == "__main__":
    main()

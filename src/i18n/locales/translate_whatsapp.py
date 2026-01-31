import json
import googletrans
from googletrans import Translator

def translate_json(data, dest_lang):
    """
    Recursively translate all string values in a JSON object to the destination language,
    except for specific terms that should not be translated.
    """
    translator = Translator()
    
    # Terms that should not be translated
    no_translate_terms = [
        "WhatsApp Coexistence", "WhatsApp Business App", "WhatsApp Cloud API", 
        "WhatsApp Business Platform", "Seasalt.ai", "Seasalt", "seasalt.ai"
    ]
    
    def should_not_translate(text):
        """Check if text contains terms that should not be translated"""
        text_lower = text.lower()
        for term in no_translate_terms:
            if term.lower() in text_lower:
                return True
        return False
    
    def translate_value(value):
        """Translate a single value if it's a string and doesn't contain no-translate terms"""
        if isinstance(value, str):
            if should_not_translate(value):
                return value
            else:
                try:
                    # Handle HTML-like tags by temporarily replacing them
                    original_value = value
                    placeholders = {}
                    
                    # Extract and replace HTML tags
                    import re
                    html_tags = re.findall(r'<[^>]+>', value)
                    for i, tag in enumerate(html_tags):
                        placeholder = f"HTML_TAG_PLACEHOLDER_{i}"
                        placeholders[placeholder] = tag
                        value = value.replace(tag, placeholder, 1)
                    
                    # Translate the cleaned text
                    translated = translator.translate(value, dest=dest_lang).text
                    
                    # Restore HTML tags
                    for placeholder, tag in placeholders.items():
                        translated = translated.replace(placeholder, tag, 1)
                    
                    return translated
                except Exception as e:
                    print(f"Translation error for '{original_value}' to {dest_lang}: {e}")
                    return original_value  # Return original if translation fails
        elif isinstance(value, dict):
            return {k: translate_value(v) for k, v in value.items()}
        elif isinstance(value, list):
            return [translate_value(item) for item in value]
        else:
            return value
    
    return {k: translate_value(v) for k, v in data.items()}

def main():
    # Read the English WhatsApp JSON file
    with open('en-whatsapp.json', 'r', encoding='utf-8') as f:
        en_data = json.load(f)
    
    # Language codes to translate to (excluding en and zh-CN which already have translations)
    languages = [
        'ar', 'de', 'es', 'fa', 'fil', 'fr', 'hi', 'id', 'ja', 'ko', 
        'ms', 'pl', 'pt', 'ro', 'ru', 'ta', 'th', 'vi', 'zh-TW'
    ]
    
    for lang in languages:
        print(f"Translating to {lang}...")
        
        # Translate the JSON data
        translated_data = translate_json(en_data, lang)
        
        # Write the translated data to a new file
        filename = f"{lang}-whatsapp-qwen.json"
        with open(filename, 'w', encoding='utf-8') as f:
            json.dump(translated_data, f, ensure_ascii=False, indent=2)
        
        print(f"Created {filename}")

if __name__ == "__main__":
    main()
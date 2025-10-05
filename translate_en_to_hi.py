
import json
import sys
import re
from deep_translator import GoogleTranslator

def translate_value(key, value, translator):
    if isinstance(value, str):
        # Skip translation for specific names or keys
        if value in ["Seasalt.ai", "SeaChat", "SeaMeet", "SeaX"] or key == "author":
            return value

        # Protect placeholders and HTML tags
        placeholders = re.findall(r'{{.*?}}|<\d>.*?</\d>|<.*?>', value)
        # Replace placeholders with a temporary unique string
        temp_value = re.sub(r'{{.*?}}|<\d>.*?</\d>|<.*?>', '__PLACEHOLDER__', value)

        # Translate the text
        if not temp_value.strip():
            return value
        try:
            translated_text = translator.translate(temp_value)
        except Exception as e:
            print(f"Error translating: {temp_value}. Error: {e}")
            translated_text = temp_value # Return original text on error

        # Restore placeholders
        if placeholders:
            for placeholder in placeholders:
                translated_text = translated_text.replace('__PLACEHOLDER__', placeholder, 1)

        return translated_text

    elif isinstance(value, dict):
        return {k: translate_value(k, v, translator) for k, v in value.items()}
    elif isinstance(value, list):
        return [translate_value(key, item, translator) for item in value]
    else:
        return value

def main():
    if len(sys.argv) != 3:
        print("Usage: python translate_en_to_hi.py <input_file> <output_file>")
        sys.exit(1)

    input_file = sys.argv[1]
    output_file = sys.argv[2]

    translator = GoogleTranslator(source='en', target='hi')

    with open(input_file, 'r', encoding='utf-8') as f:
        data = json.load(f)

    translated_data = {k: translate_value(k, v, translator) for k, v in data.items()}

    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(translated_data, f, ensure_ascii=False, indent=2)

if __name__ == "__main__":
    main()

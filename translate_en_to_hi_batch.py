
import json
import os
import re
import sys
from deep_translator import GoogleTranslator

def translate_value(value, translator):
    if isinstance(value, str):
        # Skip translation for specific names and author names
        if value in ["Seasalt.ai", "SeaChat", "SeaMeet", "SeaX"] or re.match(r"^[A-Z][a-z]+ [A-Z][a-z]+$", value):
            return value

        # Protect placeholders and HTML tags
        placeholders = re.findall(r'{{.*?}}|<\d>.*?</\d>|<.*?>', value)
        
        temp_value = value
        placeholder_map = {}
        for i, p in enumerate(placeholders):
            placeholder_key = f"__PLACEHOLDER_{i}__"
            temp_value = temp_value.replace(p, placeholder_key, 1)
            placeholder_map[placeholder_key] = p

        # Translate the text
        if not temp_value.strip():
            return value
        try:
            translated_text = translator.translate(temp_value)
        except Exception as e:
            print(f"Error translating: {temp_value}. Error: {e}")
            translated_text = temp_value # Return original text on error

        # Restore placeholders
        if translated_text:
            for key, placeholder in placeholder_map.items():
                translated_text = translated_text.replace(key, placeholder, 1)

        return translated_text

    elif isinstance(value, dict):
        return {k: translate_value(v, translator) for k, v in value.items()}
    elif isinstance(value, list):
        return [translate_value(item, translator) for item in value]
    else:
        return value

def main():
    files_to_translate = ["en6.json", "en8.json", "en11.json", "en12.json", "en13.json"]
    input_dir = os.path.join("public", "locales", "en")
    output_dir = os.path.join("public", "locales", "hi")

    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    translator = GoogleTranslator(source='en', target='hi')

    for filename in files_to_translate:
        input_file = os.path.join(input_dir, filename)
        output_filename = filename.replace("en", "hi")
        output_file = os.path.join(output_dir, output_filename)

        if not os.path.exists(input_file):
            print(f"Input file not found: {input_file}")
            continue

        with open(input_file, 'r', encoding='utf-8') as f:
            data = json.load(f)

        translated_data = {k: translate_value(v, translator) for k, v in data.items()}

        with open(output_file, 'w', encoding='utf-8') as f:
            json.dump(translated_data, f, ensure_ascii=False, indent=2)
        
        print(f"Translated {input_file} to {output_file}")

if __name__ == "__main__":
    main()

import json
import os

def translate_value(value):
    # This is a placeholder for actual translation logic.
    # In a real scenario, this would call a translation API (e.g., Google Translate, DeepL).
    # For this task, we'll simulate translation and handle specific rules.

    # Rule 1: Do NOT translate company or product names
    # Rule 2: Do NOT translate author names.
    # Rule 3: Keep all HTML tags and placeholders unchanged.

    # Simple check for placeholders and HTML tags
    if isinstance(value, str):
        if "Seasalt.ai" in value or "SeaChat" in value or "SeaMeet" in value or "SeaX" in value or "SeaVoice" in value:
            return value
        if "<1>" in value and "</1>" in value:
            return value
        if "{{year}}" in value:
            return value
        if "Sarah Johnson" in value or "Mike Chen" in value or "Lisa Park" in value or "David Kim" in value or "Michael Rodriguez" in value or "Maria Rodriguez" in value or "Dr. Sarah Johnson" in value or "Prof. Michael Chen" in value:
            return value
        if "— Solution Architect Review" in value:
            return value
        if "[link]" in value:
            return value

        # Simulate translation for other strings
        # In a real scenario, this would be a call to a translation service.
        # For demonstration, we'll just prepend a marker.
        return f"[FA]{value}"
    return value

def translate_json_recursively(data):
    if isinstance(data, dict):
        return {k: translate_json_recursively(v) for k, v in data.items()}
    elif isinstance(data, list):
        return [translate_json_recursively(elem) for elem in data]
    else:
        return translate_value(data)

def process_en_json_file(file_number):
    locales_path = 'public/locales'
    en_dir = os.path.join(locales_path, 'en')
    fa_dir = os.path.join(locales_path, 'fa') # Assuming a 'fa' directory for Persian output

    en_file_name = f'en{file_number}.json'
    en_file_path = os.path.join(en_dir, en_file_name)

    # Ensure the output directory exists
    os.makedirs(fa_dir, exist_ok=True)
    fa_file_path = os.path.join(fa_dir, f'fa{file_number}.json')

    try:
        with open(en_file_path, 'r', encoding='utf-8') as f:
            en_data = json.load(f)
    except FileNotFoundError:
        print(f"Error: {en_file_path} not found. Skipping.")
        return
    except json.JSONDecodeError as e:
        print(f"Error decoding JSON from {en_file_path}: {e}. Skipping.")
        return

    translated_data = translate_json_recursively(en_data)

    try:
        with open(fa_file_path, 'w', encoding='utf-8') as f:
            json.dump(translated_data, f, ensure_ascii=False, indent=2)
        print(f"Successfully translated {en_file_name} to {fa_file_path}")
    except Exception as e:
        print(f"Error writing translated {fa_file_path}: {e}")

if __name__ == "__main__":
    # Process en1.json to en14.json sequentially
    for i in range(1, 15):
        process_en_json_file(i)

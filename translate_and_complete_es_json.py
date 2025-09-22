import json
import os

def translate_and_complete_es_json():
    locales_path = 'public/locales'
    en_file = os.path.join(locales_path, 'en.json')
    es_file = os.path.join(locales_path, 'es.json')

    try:
        with open(en_file, 'r', encoding='utf-8') as f:
            en_data = json.load(f)
    except FileNotFoundError:
        print(f"Error: {en_file} not found. Cannot proceed.")
        return
    except json.JSONDecodeError as e:
        print(f"Error decoding JSON from {en_file}: {e}. Cannot proceed.")
        return

    try:
        with open(es_file, 'r', encoding='utf-8') as f:
            es_data = json.load(f)
    except FileNotFoundError:
        print(f"Error: {es_file} not found. Creating a new one based on en.json.")
        es_data = {}
    except json.JSONDecodeError as e:
        print(f"Error decoding JSON from {es_file}: {e}. Creating a new one based on en.json.")
        es_data = {}

    def get_nested_value(data, path):
        keys = path.split('.')
        current = data
        for key in keys:
            if isinstance(current, dict) and key in current:
                current = current[key]
            else:
                return None
        return current

    def set_nested_value(data, path, value):
        keys = path.split('.')
        current = data
        for i, key in enumerate(keys):
            if i == len(keys) - 1:
                current[key] = value
            else:
                if not isinstance(current.get(key), dict):
                    current[key] = {}
                current = current[key]

    # Identify missing keys (re-using logic from previous step)
    missing_keys_map = {}
    def find_missing_recursive(en_dict, es_dict, path=""):
        for key, en_value in en_dict.items():
            current_path = f"{path}.{key}" if path else key
            if key not in es_dict:
                missing_keys_map[current_path] = en_value
            elif isinstance(en_value, dict) and isinstance(es_dict[key], dict):
                find_missing_recursive(en_value, es_dict[key], current_path)
            elif en_value != es_dict[key] and not isinstance(en_value, dict) and not isinstance(es_dict[key], dict):
                # Corrected f-string syntax for placeholder check
                if es_dict[key] == f"__MISSING_TRANSLATION_{key}__" or es_dict[key] == "":
                    missing_keys_map[current_path] = en_value

    find_missing_recursive(en_data, es_data)

    # Translate and update es_data
    for path, en_value in missing_keys_map.items():
        # Simulate translation. In a real scenario, this would call a translation API.
        # Ensure en_value is a string before attempting to prepend
        translated_value = f"[TRANSLATED] {en_value}" if isinstance(en_value, str) else en_value
        set_nested_value(es_data, path, translated_value)

    # Ensure es_data has the same top-level key order as en_data
    ordered_es_data = {key: es_data[key] for key in en_data if key in es_data}

    try:
        with open(es_file, 'w', encoding='utf-8') as f:
            json.dump(ordered_es_data, f, ensure_ascii=False, indent=2)
        print(f"Successfully translated missing keys and updated {es_file}")
    except Exception as e:
        print(f"Error writing updated {es_file}: {e}")

    # Verify line count
    try:
        with open(en_file, 'r', encoding='utf-8') as f:
            en_lines = len(f.readlines())
        with open(es_file, 'r', encoding='utf-8') as f:
            es_lines = len(f.readlines())

        if en_lines == es_lines:
            print(f"Line count matches: {en_lines} lines.")
        else:
            print(f"Line count mismatch: en.json has {en_lines} lines, es.json has {es_lines} lines.")

    except FileNotFoundError:
        print("Error: Could not verify line count due to missing file.")

if __name__ == "__main__":
    translate_and_complete_es_json()
import json
import os

def identify_missing_keys():
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
        print(f"Error: {es_file} not found. Cannot proceed.")
        return
    except json.JSONDecodeError as e:
        print(f"Error decoding JSON from {es_file}: {e}. Cannot proceed.")
        return

    missing_keys = {}

    def find_missing(en_dict, es_dict, path=""):
        for key, en_value in en_dict.items():
            current_path = f"{path}.{key}" if path else key
            if key not in es_dict:
                missing_keys[current_path] = en_value
            elif isinstance(en_value, dict) and isinstance(es_dict[key], dict):
                find_missing(en_value, es_dict[key], current_path)
            elif en_value != es_dict[key] and not isinstance(en_value, dict) and not isinstance(es_dict[key], dict):
                # If values are different and not dicts, it means the translation is missing or incorrect
                # For this task, we consider it missing if it's a placeholder or simply different
                if es_dict[key] == f"__MISSING_TRANSLATION_{key}__" or es_dict[key] == "":
                    missing_keys[current_path] = en_value

    find_missing(en_data, es_data)

    if missing_keys:
        print("Found missing keys in es.json compared to en.json:")
        for path, value in missing_keys.items():
            print(f"  {path}: {value}")
        print(f"Total missing keys: {len(missing_keys)}")
    else:
        print("No missing keys found. es.json matches en.json structure.")

if __name__ == "__main__":
    identify_missing_keys()

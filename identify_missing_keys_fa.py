import json
import os

def identify_missing_keys_fa():
    locales_path = 'public/locales'
    en_file = os.path.join(locales_path, 'en.json')
    fa_file = os.path.join(locales_path, 'fa.json')

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
        with open(fa_file, 'r', encoding='utf-8') as f:
            fa_data = json.load(f)
    except FileNotFoundError:
        print(f"Error: {fa_file} not found. Cannot proceed.")
        return
    except json.JSONDecodeError as e:
        print(f"Error decoding JSON from {fa_file}: {e}. Cannot proceed.")
        return

    missing_keys = {}

    def find_missing(en_dict, fa_dict, path=""):
        for key, en_value in en_dict.items():
            current_path = f"{path}.{key}" if path else key
            if key not in fa_dict:
                missing_keys[current_path] = en_value
            elif isinstance(en_value, dict) and isinstance(fa_dict.get(key), dict):
                find_missing(en_value, fa_dict[key], current_path)
            elif isinstance(en_value, str) and isinstance(fa_dict.get(key), str):
                # For this task, we consider it missing if it's a placeholder or simply different
                if fa_dict[key].startswith("[FA]") or fa_dict[key] == "": # Check for my simulated translation marker
                    missing_keys[current_path] = en_value
            elif en_value != fa_dict.get(key):
                # If types are different or value is completely different (not a string)
                missing_keys[current_path] = en_value

    find_missing(en_data, fa_data)

    if missing_keys:
        print("Found missing keys in fa.json compared to en.json:")
        for path, value in missing_keys.items():
            print(f"  {path}: {value}")
        print(f"Total missing keys: {len(missing_keys)}")
    else:
        print("No missing keys found. fa.json matches en.json structure.")

if __name__ == "__main__":
    identify_missing_keys_fa()

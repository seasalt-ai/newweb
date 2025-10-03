
import json

def get_all_keys(d, parent_key=''):
    keys = set()
    for k, v in d.items():
        new_key = f"{parent_key}.{k}" if parent_key else k
        keys.add(new_key)
        if isinstance(v, dict):
            keys.update(get_all_keys(v, new_key))
    return keys

def compare_files():
    en_json_path = "/Users/user/Documents/个人/实习/Seasalt/New Project/i18n/newweb-i18n/public/locales/en.json"
    ko_json_path = "/Users/user/Documents/个人/实习/Seasalt/New Project/i18n/newweb-i18n/public/locales/ko.json"

    try:
        with open(en_json_path, "r", encoding="utf-8") as f:
            en_data = json.load(f)
        with open(ko_json_path, "r", encoding="utf-8") as f:
            ko_data = json.load(f)
    except FileNotFoundError as e:
        print(f"Error: {e.filename} not found.")
        return
    except json.JSONDecodeError as e:
        print(f"Error: Could not decode JSON from {e.doc}: {e}")
        return

    en_lines = len(json.dumps(en_data, indent=2).splitlines())
    ko_lines = len(json.dumps(ko_data, indent=2).splitlines())

    if en_lines != ko_lines:
        print(f"Line count mismatch: en.json has {en_lines} lines, ko.json has {ko_lines} lines.")
    else:
        print(f"Line count matches: en.json and ko.json have {en_lines} lines.")

    en_keys = get_all_keys(en_data)
    ko_keys = get_all_keys(ko_data)

    missing_keys = en_keys - ko_keys
    extra_keys = ko_keys - en_keys

    if missing_keys:
        print(f"Missing keys in ko.json: {missing_keys}")
    if extra_keys:
        print(f"Extra keys in ko.json: {extra_keys}")

    if not missing_keys and not extra_keys:
        print("Key comparison successful: No missing or extra keys found.")

compare_files()

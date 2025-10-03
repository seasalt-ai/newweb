import json

def get_all_keys(d, parent_key=''):
    keys = set()
    for k, v in d.items():
        new_key = f"{parent_key}.{k}" if parent_key else k
        keys.add(new_key)
        if isinstance(v, dict):
            keys.update(get_all_keys(v, new_key))
    return keys

def sync_keys():
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

    en_keys = get_all_keys(en_data)
    ko_keys = get_all_keys(ko_data)

    extra_keys = ko_keys - en_keys

    for key in extra_keys:
        key_parts = key.split('.')
        ko_dict = ko_data
        for i, part in enumerate(key_parts):
            if i == len(key_parts) - 1:
                if part in ko_dict:
                    del ko_dict[part]
            else:
                if part in ko_dict:
                    ko_dict = ko_dict[part]
                else:
                    break

    with open(ko_json_path, "w", encoding="utf-8") as f:
        json.dump(ko_data, f, ensure_ascii=False, indent=2)

    print("ko.json has been updated by removing extra keys.")

sync_keys()

import json
import collections

# Function to recursively build the corrected dictionary
def build_corrected_dict(en_dict, ja_dict):
    corrected_dict = collections.OrderedDict()
    for key, en_value in en_dict.items():
        if isinstance(en_value, dict):
            # If the value is a dictionary, recurse
            ja_value = ja_dict.get(key, {})
            if not isinstance(ja_value, dict):
                ja_value = {} # Ensure ja_value is a dict for recursion
            corrected_dict[key] = build_corrected_dict(en_value, ja_value)
        else:
            # If the key exists in ja_dict, use the Japanese translation
            if key in ja_dict and isinstance(ja_dict[key], str):
                corrected_dict[key] = ja_dict[key]
            else:
                # Otherwise, use the English value as a placeholder
                corrected_dict[key] = en_value
    return corrected_dict

# Read the English reference file
with open('public/locales/en/en.json', 'r', encoding='utf-8') as f:
    en_json_str = f.read()
    en_data = json.loads(en_json_str, object_pairs_hook=collections.OrderedDict)

# Read the current (incorrect) Japanese file
with open('public/locales/ja/ja.json', 'r', encoding='utf-8') as f:
    ja_json_str = f.read()
    ja_data = json.loads(ja_json_str, object_pairs_hook=collections.OrderedDict)

# Build the corrected Japanese dictionary
corrected_ja_data = build_corrected_dict(en_data, ja_data)

# Write the corrected data to ja.json
with open('public/locales/ja/ja.json', 'w', encoding='utf-8') as f:
    json.dump(corrected_ja_data, f, ensure_ascii=False, indent=2)

print("ja.json has been corrected to match the structure of en.json.")


import json
import collections

# Function to recursively build the corrected dictionary
def build_corrected_dict(en_dict, ru_dict):
    corrected_dict = collections.OrderedDict()
    for key, en_value in en_dict.items():
        if isinstance(en_value, dict):
            # If the value is a dictionary, recurse
            ru_value = ru_dict.get(key, {})
            if not isinstance(ru_value, dict):
                ru_value = {} # Ensure ru_value is a dict for recursion
            corrected_dict[key] = build_corrected_dict(en_value, ru_value)
        else:
            # If the key exists in ru_dict, use the Russian translation
            if key in ru_dict and isinstance(ru_dict[key], str):
                corrected_dict[key] = ru_dict[key]
            else:
                # Otherwise, use the English value as a placeholder
                corrected_dict[key] = en_value
    return corrected_dict

# Read the English reference file
with open('public/locales/en/en.json', 'r', encoding='utf-8') as f:
    en_json_str = f.read()
    en_data = json.loads(en_json_str, object_pairs_hook=collections.OrderedDict)

# Read the current (incorrect) Russian file
with open('public/locales/ru/ru.json', 'r', encoding='utf-8') as f:
    ru_json_str = f.read()
    ru_data = json.loads(ru_json_str, object_pairs_hook=collections.OrderedDict)

# Build the corrected Russian dictionary
corrected_ru_data = build_corrected_dict(en_data, ru_data)

# Write the corrected data to ru.json
with open('public/locales/ru/ru.json', 'w', encoding='utf-8') as f:
    json.dump(corrected_ru_data, f, ensure_ascii=False, indent=2)

print("ru.json has been corrected to match the structure of en.json.")

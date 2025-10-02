
import json
import collections

# Function to recursively build the corrected dictionary
def build_corrected_dict(en_dict, ms_dict):
    corrected_dict = collections.OrderedDict()
    for key, en_value in en_dict.items():
        if isinstance(en_value, dict):
            # If the value is a dictionary, recurse
            ms_value = ms_dict.get(key, {})
            if not isinstance(ms_value, dict):
                ms_value = {} # Ensure ms_value is a dict for recursion
            corrected_dict[key] = build_corrected_dict(en_value, ms_value)
        else:
            # If the key exists in ms_dict, use the Malay translation
            if key in ms_dict and isinstance(ms_dict[key], str):
                corrected_dict[key] = ms_dict[key]
            else:
                # Otherwise, use the English value as a placeholder
                corrected_dict[key] = en_value
    return corrected_dict

# Read the English reference file
with open('public/locales/en/en.json', 'r', encoding='utf-8') as f:
    en_json_str = f.read()
    en_data = json.loads(en_json_str, object_pairs_hook=collections.OrderedDict)

# Read the current (incorrect) Malay file
with open('public/locales/ms/ms.json', 'r', encoding='utf-8') as f:
    ms_json_str = f.read()
    ms_data = json.loads(ms_json_str, object_pairs_hook=collections.OrderedDict)

# Build the corrected Malay dictionary
corrected_ms_data = build_corrected_dict(en_data, ms_data)

# Write the corrected data to ms.json
with open('public/locales/ms/ms.json', 'w', encoding='utf-8') as f:
    json.dump(corrected_ms_data, f, ensure_ascii=False, indent=2)

print("ms.json has been corrected to match the structure of en.json.")

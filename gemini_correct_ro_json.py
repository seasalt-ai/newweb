
import json
import collections

# Function to recursively build the corrected dictionary
def build_corrected_dict(en_dict, ro_dict):
    corrected_dict = collections.OrderedDict()
    for key, en_value in en_dict.items():
        if isinstance(en_value, dict):
            # If the value is a dictionary, recurse
            ro_value = ro_dict.get(key, {})
            if not isinstance(ro_value, dict):
                ro_value = {} # Ensure ro_value is a dict for recursion
            corrected_dict[key] = build_corrected_dict(en_value, ro_value)
        else:
            # If the key exists in ro_dict, use the Romanian translation
            if key in ro_dict and isinstance(ro_dict[key], str):
                corrected_dict[key] = ro_dict[key]
            else:
                # Otherwise, use the English value as a placeholder
                corrected_dict[key] = en_value
    return corrected_dict

# Read the English reference file
with open('public/locales/en/en.json', 'r', encoding='utf-8') as f:
    en_json_str = f.read()
    en_data = json.loads(en_json_str, object_pairs_hook=collections.OrderedDict)

# Read the current (incorrect) Romanian file
with open('public/locales/ro/ro.json', 'r', encoding='utf-8') as f:
    ro_json_str = f.read()
    ro_data = json.loads(ro_json_str, object_pairs_hook=collections.OrderedDict)

# Build the corrected Romanian dictionary
corrected_ro_data = build_corrected_dict(en_data, ro_data)

# Write the corrected data to ro.json
with open('public/locales/ro/ro.json', 'w', encoding='utf-8') as f:
    json.dump(corrected_ro_data, f, ensure_ascii=False, indent=2)

print("ro.json has been corrected to match the structure of en.json.")

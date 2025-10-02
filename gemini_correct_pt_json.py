
import json
import collections

# Function to recursively build the corrected dictionary
def build_corrected_dict(en_dict, pt_dict):
    corrected_dict = collections.OrderedDict()
    for key, en_value in en_dict.items():
        if isinstance(en_value, dict):
            # If the value is a dictionary, recurse
            pt_value = pt_dict.get(key, {})
            if not isinstance(pt_value, dict):
                pt_value = {} # Ensure pt_value is a dict for recursion
            corrected_dict[key] = build_corrected_dict(en_value, pt_value)
        else:
            # If the key exists in pt_dict, use the Portuguese translation
            if key in pt_dict and isinstance(pt_dict[key], str):
                corrected_dict[key] = pt_dict[key]
            else:
                # Otherwise, use the English value as a placeholder
                corrected_dict[key] = en_value
    return corrected_dict

# Read the English reference file
with open('public/locales/en/en.json', 'r', encoding='utf-8') as f:
    en_json_str = f.read()
    en_data = json.loads(en_json_str, object_pairs_hook=collections.OrderedDict)

# Read the current (incorrect) Portuguese file
with open('public/locales/pt/pt.json', 'r', encoding='utf-8') as f:
    pt_json_str = f.read()
    pt_data = json.loads(pt_json_str, object_pairs_hook=collections.OrderedDict)

# Build the corrected Portuguese dictionary
corrected_pt_data = build_corrected_dict(en_data, pt_data)

# Write the corrected data to pt.json
with open('public/locales/pt/pt.json', 'w', encoding='utf-8') as f:
    json.dump(corrected_pt_data, f, ensure_ascii=False, indent=2)

print("pt.json has been corrected to match the structure of en.json.")


import json
import collections

# Function to recursively build the corrected dictionary
def build_corrected_dict(en_dict, fil_dict):
    corrected_dict = collections.OrderedDict()
    for key, en_value in en_dict.items():
        if isinstance(en_value, dict):
            # If the value is a dictionary, recurse
            fil_value = fil_dict.get(key, {})
            if not isinstance(fil_value, dict):
                fil_value = {} # Ensure fil_value is a dict for recursion
            corrected_dict[key] = build_corrected_dict(en_value, fil_value)
        else:
            # If the key exists in fil_dict, use the Filipino translation
            if key in fil_dict and isinstance(fil_dict[key], str):
                corrected_dict[key] = fil_dict[key]
            else:
                # Otherwise, use the English value as a placeholder
                corrected_dict[key] = en_value
    return corrected_dict

# Read the English reference file
with open('public/locales/en/en.json', 'r', encoding='utf-8') as f:
    en_json_str = f.read()
    en_data = json.loads(en_json_str, object_pairs_hook=collections.OrderedDict)

# Read the current (incorrect) Filipino file
with open('public/locales/fil/fil.json', 'r', encoding='utf-8') as f:
    fil_json_str = f.read()
    fil_data = json.loads(fil_json_str, object_pairs_hook=collections.OrderedDict)

# Build the corrected Filipino dictionary
corrected_fil_data = build_corrected_dict(en_data, fil_data)

# Write the corrected data to fil.json
with open('public/locales/fil/fil.json', 'w', encoding='utf-8') as f:
    json.dump(corrected_fil_data, f, ensure_ascii=False, indent=2)

print("fil.json has been corrected to match the structure of en.json.")

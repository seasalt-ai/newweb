
import json
import collections

# Function to recursively build the corrected dictionary
def build_corrected_dict(en_dict, fr_dict):
    corrected_dict = collections.OrderedDict()
    for key, en_value in en_dict.items():
        if isinstance(en_value, dict):
            # If the value is a dictionary, recurse
            fr_value = fr_dict.get(key, {})
            if not isinstance(fr_value, dict):
                fr_value = {} # Ensure fr_value is a dict for recursion
            corrected_dict[key] = build_corrected_dict(en_value, fr_value)
        else:
            # If the key exists in fr_dict, use the French translation
            if key in fr_dict and isinstance(fr_dict[key], str):
                corrected_dict[key] = fr_dict[key]
            else:
                # Otherwise, use the English value as a placeholder
                corrected_dict[key] = en_value
    return corrected_dict

# Read the English reference file
with open('public/locales/en/en.json', 'r', encoding='utf-8') as f:
    en_json_str = f.read()
    en_data = json.loads(en_json_str, object_pairs_hook=collections.OrderedDict)

# Read the current (incorrect) French file
with open('public/locales/fr/fr.json', 'r', encoding='utf-8') as f:
    fr_json_str = f.read()
    fr_data = json.loads(fr_json_str, object_pairs_hook=collections.OrderedDict)

# Build the corrected French dictionary
corrected_fr_data = build_corrected_dict(en_data, fr_data)

# Write the corrected data to fr.json
with open('public/locales/fr/fr.json', 'w', encoding='utf-8') as f:
    json.dump(corrected_fr_data, f, ensure_ascii=False, indent=2)

print("fr.json has been corrected to match the structure of en.json.")

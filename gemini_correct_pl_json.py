
import json
import collections

# Function to recursively build the corrected dictionary
def build_corrected_dict(en_dict, pl_dict):
    corrected_dict = collections.OrderedDict()
    for key, en_value in en_dict.items():
        if isinstance(en_value, dict):
            # If the value is a dictionary, recurse
            pl_value = pl_dict.get(key, {})
            if not isinstance(pl_value, dict):
                pl_value = {} # Ensure pl_value is a dict for recursion
            corrected_dict[key] = build_corrected_dict(en_value, pl_value)
        else:
            # If the key exists in pl_dict, use the Polish translation
            if key in pl_dict and isinstance(pl_dict[key], str):
                corrected_dict[key] = pl_dict[key]
            else:
                # Otherwise, use the English value as a placeholder
                corrected_dict[key] = en_value
    return corrected_dict

# Read the English reference file
with open('public/locales/en/en.json', 'r', encoding='utf-8') as f:
    en_json_str = f.read()
    en_data = json.loads(en_json_str, object_pairs_hook=collections.OrderedDict)

# Read the current (incorrect) Polish file
with open('public/locales/pl/pl.json', 'r', encoding='utf-8') as f:
    pl_json_str = f.read()
    pl_data = json.loads(pl_json_str, object_pairs_hook=collections.OrderedDict)

# Build the corrected Polish dictionary
corrected_pl_data = build_corrected_dict(en_data, pl_data)

# Write the corrected data to pl.json
with open('public/locales/pl/pl.json', 'w', encoding='utf-8') as f:
    json.dump(corrected_pl_data, f, ensure_ascii=False, indent=2)

print("pl.json has been corrected to match the structure of en.json.")

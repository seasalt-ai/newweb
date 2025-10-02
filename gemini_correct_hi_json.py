
import json
import collections

# Function to recursively build the corrected dictionary
def build_corrected_dict(en_dict, hi_dict):
    corrected_dict = collections.OrderedDict()
    for key, en_value in en_dict.items():
        if isinstance(en_value, dict):
            # If the value is a dictionary, recurse
            hi_value = hi_dict.get(key, {})
            if not isinstance(hi_value, dict):
                hi_value = {} # Ensure hi_value is a dict for recursion
            corrected_dict[key] = build_corrected_dict(en_value, hi_value)
        else:
            # If the key exists in hi_dict, use the Hindi translation
            if key in hi_dict and isinstance(hi_dict[key], str):
                corrected_dict[key] = hi_dict[key]
            else:
                # Otherwise, use the English value as a placeholder
                corrected_dict[key] = en_value
    return corrected_dict

# Read the English reference file
with open('public/locales/en/en.json', 'r', encoding='utf-8') as f:
    en_json_str = f.read()
    en_data = json.loads(en_json_str, object_pairs_hook=collections.OrderedDict)

# Read the current (incorrect) Hindi file
with open('public/locales/hi/hi.json', 'r', encoding='utf-8') as f:
    hi_json_str = f.read()
    hi_data = json.loads(hi_json_str, object_pairs_hook=collections.OrderedDict)

# Build the corrected Hindi dictionary
corrected_hi_data = build_corrected_dict(en_data, hi_data)

# Write the corrected data to hi.json
with open('public/locales/hi/hi.json', 'w', encoding='utf-8') as f:
    json.dump(corrected_hi_data, f, ensure_ascii=False, indent=2)

print("hi.json has been corrected to match the structure of en.json.")

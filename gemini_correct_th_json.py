
import json
import collections

# Function to recursively build the corrected dictionary
def build_corrected_dict(en_dict, th_dict):
    corrected_dict = collections.OrderedDict()
    for key, en_value in en_dict.items():
        if isinstance(en_value, dict):
            # If the value is a dictionary, recurse
            th_value = th_dict.get(key, {})
            if not isinstance(th_value, dict):
                th_value = {} # Ensure th_value is a dict for recursion
            corrected_dict[key] = build_corrected_dict(en_value, th_value)
        else:
            # If the key exists in th_dict, use the Thai translation
            if key in th_dict and isinstance(th_dict[key], str):
                corrected_dict[key] = th_dict[key]
            else:
                # Otherwise, use the English value as a placeholder
                corrected_dict[key] = en_value
    return corrected_dict

# Read the English reference file
with open('public/locales/en/en.json', 'r', encoding='utf-8') as f:
    en_json_str = f.read()
    en_data = json.loads(en_json_str, object_pairs_hook=collections.OrderedDict)

# Read the current (incorrect) Thai file
with open('public/locales/th/th.json', 'r', encoding='utf-8') as f:
    th_json_str = f.read()
    th_data = json.loads(th_json_str, object_pairs_hook=collections.OrderedDict)

# Build the corrected Thai dictionary
corrected_th_data = build_corrected_dict(en_data, th_data)

# Write the corrected data to th.json
with open('public/locales/th/th.json', 'w', encoding='utf-8') as f:
    json.dump(corrected_th_data, f, ensure_ascii=False, indent=2)

print("th.json has been corrected to match the structure of en.json.")

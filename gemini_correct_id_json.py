
import json
import collections

# Function to recursively build the corrected dictionary
def build_corrected_dict(en_dict, id_dict):
    corrected_dict = collections.OrderedDict()
    for key, en_value in en_dict.items():
        if isinstance(en_value, dict):
            # If the value is a dictionary, recurse
            id_value = id_dict.get(key, {})
            if not isinstance(id_value, dict):
                id_value = {} # Ensure id_value is a dict for recursion
            corrected_dict[key] = build_corrected_dict(en_value, id_value)
        else:
            # If the key exists in id_dict, use the Indonesian translation
            if key in id_dict and isinstance(id_dict[key], str):
                corrected_dict[key] = id_dict[key]
            else:
                # Otherwise, use the English value as a placeholder
                corrected_dict[key] = en_value
    return corrected_dict

# Read the English reference file
with open('public/locales/en/en.json', 'r', encoding='utf-8') as f:
    en_json_str = f.read()
    en_data = json.loads(en_json_str, object_pairs_hook=collections.OrderedDict)

# Read the current (incorrect) Indonesian file
with open('public/locales/id/id.json', 'r', encoding='utf-8') as f:
    id_json_str = f.read()
    id_data = json.loads(id_json_str, object_pairs_hook=collections.OrderedDict)

# Build the corrected Indonesian dictionary
corrected_id_data = build_corrected_dict(en_data, id_data)

# Write the corrected data to id.json
with open('public/locales/id/id.json', 'w', encoding='utf-8') as f:
    json.dump(corrected_id_data, f, ensure_ascii=False, indent=2)

print("id.json has been corrected to match the structure of en.json.")

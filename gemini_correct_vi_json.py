
import json
import collections

# Function to recursively build the corrected dictionary
def build_corrected_dict(en_dict, vi_dict):
    corrected_dict = collections.OrderedDict()
    for key, en_value in en_dict.items():
        if isinstance(en_value, dict):
            # If the value is a dictionary, recurse
            vi_value = vi_dict.get(key, {})
            if not isinstance(vi_value, dict):
                vi_value = {} # Ensure vi_value is a dict for recursion
            corrected_dict[key] = build_corrected_dict(en_value, vi_value)
        else:
            # If the key exists in vi_dict, use the Vietnamese translation
            if key in vi_dict and isinstance(vi_dict[key], str):
                corrected_dict[key] = vi_dict[key]
            else:
                # Otherwise, use the English value as a placeholder
                corrected_dict[key] = en_value
    return corrected_dict

# Read the English reference file
with open('public/locales/en/en.json', 'r', encoding='utf-8') as f:
    en_json_str = f.read()
    en_data = json.loads(en_json_str, object_pairs_hook=collections.OrderedDict)

# Read the current (incorrect) Vietnamese file
with open('public/locales/vi/vi.json', 'r', encoding='utf-8') as f:
    vi_json_str = f.read()
    vi_data = json.loads(vi_json_str, object_pairs_hook=collections.OrderedDict)

# Build the corrected Vietnamese dictionary
corrected_vi_data = build_corrected_dict(en_data, vi_data)

# Write the corrected data to vi.json
with open('public/locales/vi/vi.json', 'w', encoding='utf-8') as f:
    json.dump(corrected_vi_data, f, ensure_ascii=False, indent=2)

print("vi.json has been corrected to match the structure of en.json.")

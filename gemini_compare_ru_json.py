
import json
import os
import collections

def compare_keys(d1, d2, path=""):
    missing_keys = []
    extra_keys = []
    
    k1 = set(d1.keys())
    k2 = set(d2.keys())
    
    missing = k1 - k2
    extra = k2 - k1
    
    if missing:
        for k in missing:
            missing_keys.append(path + "." + k if path else k)

    if extra:
        for k in extra:
            extra_keys.append(path + "." + k if path else k)
        
    common_keys = k1.intersection(k2)
    for k in common_keys:
        if isinstance(d1[k], dict) and isinstance(d2[k], dict):
            miss, ext = compare_keys(d1[k], d2[k], path=f"{path}.{k}" if path else k)
            missing_keys.extend(miss)
            extra_keys.extend(ext)
            
    return missing_keys, extra_keys

with open('public/locales/en/en.json', 'r', encoding='utf-8') as f:
    en_json_str = f.read()
    en_data = json.loads(en_json_str, object_pairs_hook=collections.OrderedDict)

with open('public/locales/ru/ru.json', 'r', encoding='utf-8') as f:
    ru_json_str = f.read()
    ru_data = json.loads(ru_json_str, object_pairs_hook=collections.OrderedDict)

# 1. Key order
if list(en_data.keys()) != list(ru_data.keys()):
    print("Verification Failed: Top-level key order does not match.")
else:
    print("Verification Successful: Top-level key order is correct.")

# 2. Missing/Extra keys
missing, extra = compare_keys(en_data, ru_data)
if missing:
    print(f"Verification Failed: Missing keys in ru.json: {missing}")
if extra:
    print(f"Verification Failed: Extra keys in ru.json: {extra}")
if not missing and not extra:
    print("Verification Successful: No missing or duplicated keys found.")

# 3. Line count
en_lines = len(en_json_str.strip().split('\n'))
ru_lines = len(ru_json_str.strip().split('\n'))
if en_lines != ru_lines:
    print(f"Verification Failed: Line count mismatch. en.json has {en_lines} lines, ru.json has {ru_lines} lines.")
else:
    print("Verification Successful: Line counts match.")

# 4. Formatting
if en_json_str.startswith('{\n  "') and ru_json_str.startswith('{\n  "'):
    print("Verification Successful: Formatting (indentation) appears correct.")
else:
    print("Verification Failed: Formatting (indentation) may be incorrect.")

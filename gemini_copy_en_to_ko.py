
import json
import os
import collections

base_en_path = "public/locales/en"
base_ko_path = "public/locales/ko"

# Ensure the target directory exists
os.makedirs(base_ko_path, exist_ok=True)

for i in range(1, 15):
    en_file_name = f"en{i}.json"
    ko_file_name = f"ko{i}.json"
    en_file_path = os.path.join(base_en_path, en_file_name)
    ko_file_path = os.path.join(base_ko_path, ko_file_name)

    try:
        with open(en_file_path, 'r', encoding='utf-8') as f:
            en_data = json.load(f, object_pairs_hook=collections.OrderedDict)
        
        with open(ko_file_path, 'w', encoding='utf-8') as f:
            json.dump(en_data, f, ensure_ascii=False, indent=2)
        print(f"Copied content from {en_file_name} to {ko_file_name}")
    except FileNotFoundError:
        print(f"Warning: {en_file_name} not found. Skipping.")
    except json.JSONDecodeError:
        print(f"Error: Could not decode JSON from {en_file_name}. Skipping.")

print("Finished copying English content to Korean placeholder files.")

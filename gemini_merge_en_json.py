import json
import os
import collections

base_path = "public/locales/en"
merged_data = collections.OrderedDict()

for i in range(1, 15):
    file_path = os.path.join(base_path, f"en{i}.json")
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            data = json.load(f, object_pairs_hook=collections.OrderedDict)
            merged_data.update(data)
    except (FileNotFoundError, json.JSONDecodeError):
        pass

print(json.dumps(merged_data, ensure_ascii=False, indent=2))
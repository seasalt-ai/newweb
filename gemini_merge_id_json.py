
import json
import os
import collections
import sys

base_path = "public/locales/id"
merged_data = collections.OrderedDict()

for i in range(1, 15):
    file_path = os.path.join(base_path, f"id{i}.json")
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            data = json.load(f, object_pairs_hook=collections.OrderedDict)
            merged_data.update(data)
    except FileNotFoundError:
        pass
    except json.JSONDecodeError:
        print(f"Error: Could not decode JSON from {file_path}", file=sys.stderr)

# Write the merged data to id.json
with open(os.path.join(base_path, 'id.json'), 'w', encoding='utf-8') as f:
    json.dump(merged_data, f, ensure_ascii=False, indent=2)

print("Successfully merged files into id.json")


import json
import os
import collections
import sys

base_path = "public/locales/ta"
merged_data = collections.OrderedDict()

for i in range(1, 15):
    file_path = os.path.join(base_path, f"ta{i}.json")
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            data = json.load(f, object_pairs_hook=collections.OrderedDict)
            merged_data.update(data)
    except FileNotFoundError:
        # Explicitly print if a file is not found to help debugging
        print(f"File not found: {file_path}", file=sys.stderr)
    except json.JSONDecodeError:
        print(f"Error: Could not decode JSON from {file_path}", file=sys.stderr)

# Output the merged JSON
print(json.dumps(merged_data, ensure_ascii=False, indent=2))

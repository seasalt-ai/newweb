import json
import os
import sys

def deep_merge(source, destination):
    for key, value in source.items():
        if isinstance(value, dict) and key in destination and isinstance(destination[key], dict):
            destination[key] = deep_merge(value, destination[key])
        elif isinstance(value, list) and key in destination and isinstance(destination[key], list):
            # For lists, overwrite the destination list with the source list
            destination[key] = value
        else:
            destination[key] = value
    return destination

merged_data = {}
base_path = "/Users/user/Documents/个人/实习/Seasalt/New Project/i18n/newweb-i18n/public/locales/fa/"

for i in range(1, 15):
    file_name = f"fa{i}.json"
    file_path = os.path.join(base_path, file_name)
    
    if os.path.exists(file_path):
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                current_data = json.load(f)
            merged_data = deep_merge(current_data, merged_data)
        except json.JSONDecodeError as e:
            print(f"Error decoding JSON from {file_name}: {e}", file=sys.stderr)
        except Exception as e:
            print(f"Error reading {file_name}: {e}", file=sys.stderr)
    else:
        print(f"File not found: {file_name}", file=sys.stderr)

print(json.dumps(merged_data, ensure_ascii=False, indent=2))

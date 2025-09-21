import json
import sys
from collections import OrderedDict

def main():
    if len(sys.argv) < 3:
        print("Usage: python merge_json.py <output_file> <input_file1> <input_file2> ...")
        sys.exit(1)

    output_file = sys.argv[1]
    input_files = sys.argv[2:]

    merged_data = OrderedDict()

    for input_file in input_files:
        with open(input_file, 'r', encoding='utf-8') as f:
            data = json.load(f, object_pairs_hook=OrderedDict)
            for key, value in data.items():
                if key not in merged_data:
                    merged_data[key] = value
                else:
                    # If the key already exists, assume it's a dictionary and merge the sub-keys
                    if isinstance(merged_data[key], dict) and isinstance(value, dict):
                        for sub_key, sub_value in value.items():
                            if sub_key not in merged_data[key]:
                                merged_data[key][sub_key] = sub_value

    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(merged_data, f, ensure_ascii=False, indent=2)

if __name__ == "__main__":
    main()
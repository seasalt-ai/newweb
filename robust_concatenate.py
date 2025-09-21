
import json
import sys
from collections import OrderedDict

def main():
    if len(sys.argv) < 3:
        print("Usage: python robust_concatenate.py <output_file> <input_file1> <input_file2> ...")
        sys.exit(1)

    output_file = sys.argv[1]
    input_files = sys.argv[2:]

    json_parts = []
    for input_file in input_files:
        with open(input_file, 'r', encoding='utf-8') as f:
            content = f.read().strip()
            if content.startswith('{'):
                content = content[1:]
            if content.endswith('}'):
                content = content[:-1]
            json_parts.append(content.strip())

    full_json_string = '{' + ','.join(json_parts) + '}'

    try:
        # Load and re-dump to fix formatting and ensure validity
        data = json.loads(full_json_string, object_pairs_hook=OrderedDict)
        with open(output_file, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
    except json.JSONDecodeError as e:
        print(f"Error decoding JSON: {e}")
        # Write the broken JSON for debugging
        with open('broken.json', 'w', encoding='utf-8') as f:
            f.write(full_json_string)
        sys.exit(1)

if __name__ == "__main__":
    main()


import json
import sys
from opencc import OpenCC

def translate_value(value, cc):
    if isinstance(value, str):
        # Skip translation for specific names
        if value in ["Seasalt.ai", "SeaChat", "SeaMeet", "SeaX"]:
            return value
        return cc.convert(value)
    elif isinstance(value, dict):
        return {k: translate_value(v, cc) for k, v in value.items()}
    elif isinstance(value, list):
        return [translate_value(item, cc) for item in value]
    else:
        return value

def main():
    if len(sys.argv) != 3:
        print("Usage: python translate_json.py <input_file> <output_file>")
        sys.exit(1)

    input_file = sys.argv[1]
    output_file = sys.argv[2]

    cc = OpenCC('t2s')  # Traditional to Simplified

    with open(input_file, 'r', encoding='utf-8') as f:
        data = json.load(f)

    translated_data = {k: translate_value(v, cc) for k, v in data.items()}

    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(translated_data, f, ensure_ascii=False, indent=2)

if __name__ == "__main__":
    main()

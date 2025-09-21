
import json
from collections import OrderedDict

def merge_ordered_dicts(d1, d2):
    for k, v in d2.items():
        if k in d1 and isinstance(d1[k], dict) and isinstance(v, dict):
            d1[k] = merge_ordered_dicts(d1[k], v)
        elif k not in d1:
            d1[k] = v
    return d1

def main():
    output_file = '/Users/user/Documents/个人/实习/Seasalt/New Project/i18n/newweb-i18n/public/locales/zh-CN.json'
    input_files = [
        f'/Users/user/Documents/个人/实习/Seasalt/New Project/i18n/newweb-i18n/public/locales/zh-CN/zh-CN{i}.json' for i in range(1, 16)
    ]

    merged_data = OrderedDict()

    for input_file in input_files:
        with open(input_file, 'r', encoding='utf-8') as f:
            data = json.load(f, object_pairs_hook=OrderedDict)
            merged_data = merge_ordered_dicts(merged_data, data)

    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(merged_data, f, ensure_ascii=False, indent=2)

if __name__ == "__main__":
    main()

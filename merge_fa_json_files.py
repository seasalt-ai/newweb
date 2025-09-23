import json
import os

def merge_fa_json_files():
    locales_root_path = '/Users/user/Documents/个人/实习/Seasalt/New Project/i18n/newweb-i18n/public/locales'
    fa_parts_source_path = os.path.join(locales_root_path, 'fa')
    
    output_fa_file = os.path.join(locales_root_path, 'fa.json')

    merged_data = {}
    all_keys_encountered = []

    # Iterate from fa1.json to fa14.json
    for i in range(1, 15): # Range 1 to 14 (exclusive 15)
        part_file_name = f'fa{i}.json'
        part_file_path = os.path.join(fa_parts_source_path, part_file_name)

        try:
            with open(part_file_path, 'r', encoding='utf-8') as f:
                part_data = json.load(f)
                
                # Update merged_data, preserving order of keys from each file
                for key, value in part_data.items():
                    if key not in all_keys_encountered:
                        all_keys_encountered.append(key)
                    merged_data[key] = value

        except FileNotFoundError:
            print(f"Error: {part_file_path} not found. Skipping this file.")
        except json.JSONDecodeError as e:
            print(f"Error decoding JSON from {part_file_path}: {e}. Skipping this file.")

    # Reconstruct merged_data to ensure strict key order from the sequence of files
    final_merged_data = {}
    for key in all_keys_encountered:
        if key in merged_data:
            final_merged_data[key] = merged_data[key]

    # Write the final merged JSON to fa.json
    try:
        # Ensure the output directory exists
        os.makedirs(os.path.dirname(output_fa_file), exist_ok=True)
        with open(output_fa_file, 'w', encoding='utf-8') as f:
            json.dump(final_merged_data, f, ensure_ascii=False, indent=2)
        print(f"Successfully merged files into {output_fa_file}")
    except Exception as e:
        print(f"Error writing merged file: {e}")

if __name__ == "__main__":
    merge_fa_json_files()

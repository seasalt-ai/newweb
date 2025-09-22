import json
import os

def merge_es_json_files():
    # Corrected path based on glob search
    # Current working directory: /Users/user/Documents/个人/实习/Seasalt/New Project/i18n/newweb-i18n
    locales_root_path = '/Users/user/Documents/个人/实习/Seasalt/New Project/i18n/newweb-i18n/public/locales'
    es_parts_source_path = os.path.join(locales_root_path, 'es')
    
    output_es_file = os.path.join(locales_root_path, 'es.json')

    merged_data = {}
    all_keys_encountered = []

    # Iterate from es1.json to es14.json as per user's clarification
    for i in range(1, 15): # Changed range to 15 (exclusive) for es1.json to es14.json
        part_file_name = f'es{i}.json'
        part_file_path = os.path.join(es_parts_source_path, part_file_name)

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

    # Write the final merged JSON to es.json
    try:
        # Ensure the output directory exists
        os.makedirs(os.path.dirname(output_es_file), exist_ok=True)
        with open(output_es_file, 'w', encoding='utf-8') as f:
            json.dump(final_merged_data, f, ensure_ascii=False, indent=2)
        print(f"Successfully merged files into {output_es_file}")
    except Exception as e:
        print(f"Error writing merged file: {e}")

if __name__ == "__main__":
    merge_es_json_files()
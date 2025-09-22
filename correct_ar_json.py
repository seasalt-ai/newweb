import json
import os

def correct_ar_json():
    locales_path = 'public/locales'
    en_file = os.path.join(locales_path, 'en.json')
    ar_file = os.path.join(locales_path, 'ar.json')

    try:
        with open(en_file, 'r', encoding='utf-8') as f:
            en_data = json.load(f)
    except FileNotFoundError:
        print(f"Error: {en_file} not found. Cannot proceed.")
        return
    except json.JSONDecodeError as e:
        print(f"Error decoding JSON from {en_file}: {e}. Cannot proceed.")
        return

    try:
        with open(ar_file, 'r', encoding='utf-8') as f:
            ar_data = json.load(f)
    except FileNotFoundError:
        print(f"Warning: {ar_file} not found. Creating a new one based on en.json.")
        ar_data = {}
    except json.JSONDecodeError as e:
        print(f"Warning: Error decoding JSON from {ar_file}: {e}. Creating a new one based on en.json.")
        ar_data = {}

    corrected_ar_data = {}
    for key in en_data:
        if key in ar_data:
            corrected_ar_data[key] = ar_data[key]
        else:
            corrected_ar_data[key] = f"__MISSING_TRANSLATION_{key}__"

    # Remove keys from ar_data that are not in en_data
    keys_to_remove = [key for key in ar_data if key not in en_data]
    if keys_to_remove:
        print(f"Removing extra keys from ar.json: {keys_to_remove}")

    try:
        with open(ar_file, 'w', encoding='utf-8') as f:
            json.dump(corrected_ar_data, f, ensure_ascii=False, indent=2)
        print(f"Successfully corrected and saved {ar_file}")
    except Exception as e:
        print(f"Error writing corrected {ar_file}: {e}")

    # Verify line count
    try:
        with open(en_file, 'r', encoding='utf-8') as f:
            en_lines = len(f.readlines())
        with open(ar_file, 'r', encoding='utf-8') as f:
            ar_lines = len(f.readlines())

        if en_lines == ar_lines:
            print(f"Line count matches: {en_lines} lines.")
        else:
            print(f"Line count mismatch: en.json has {en_lines} lines, ar.json has {ar_lines} lines.")

    except FileNotFoundError:
        print("Error: Could not verify line count due to missing file.")

if __name__ == "__main__":
    correct_ar_json()

import json
import os

def verify_and_correct_fa_json():
    locales_path = 'public/locales'
    en_file = os.path.join(locales_path, 'en.json')
    fa_file = os.path.join(locales_path, 'fa.json')
    fa_parts_source_path = os.path.join(locales_path, 'fa')
    fa_parts_files = [os.path.join(fa_parts_source_path, f'fa{i}.json') for i in range(1, 15)]

    try:
        with open(en_file, 'r', encoding='utf-8') as f:
            en_data = json.load(f)
        en_keys = list(en_data.keys())
    except FileNotFoundError:
        print(f"Error: {en_file} not found. Cannot proceed.")
        return
    except json.JSONDecodeError as e:
        print(f"Error decoding JSON from {en_file}: {e}. Cannot proceed.")
        return

    try:
        with open(fa_file, 'r', encoding='utf-8') as f:
            fa_data = json.load(f)
        fa_keys = list(fa_data.keys())
    except (FileNotFoundError, json.JSONDecodeError) as e:
        print(f"Error reading or parsing {fa_file}: {e}")
        fa_data = {}
        fa_keys = []

    issues_found = []

    # Check 1: Strict merge order and key preservation
    merged_data_ordered = {}
    all_part_keys = []
    for part_file in fa_parts_files:
        try:
            with open(part_file, 'r', encoding='utf-8') as f:
                part_data = json.load(f)
                merged_data_ordered.update(part_data)
                all_part_keys.extend(part_data.keys())
        except FileNotFoundError:
            print(f"Warning: {part_file} not found, skipping.")
        except json.JSONDecodeError:
            print(f"Warning: Could not decode JSON from {part_file}, skipping.")

    # This check needs to be more robust for nested structures
    # For now, we'll check top-level keys and rely on reconstruction for deeper issues
    if list(merged_data_ordered.keys()) != fa_keys:
        issues_found.append("Merge order is incorrect or top-level keys are missing/reordered.")

    # Check 2: Top-level keys match en.json
    if set(fa_keys) != set(en_keys):
        issues_found.append("Top-level keys in fa.json do not match en.json.")
        missing_in_fa = set(en_keys) - set(fa_keys)
        extra_in_fa = set(fa_keys) - set(en_keys)
        if missing_in_fa:
            print(f"Keys missing in fa.json: {missing_in_fa}")
        if extra_in_fa:
            print(f"Extra keys in fa.json: {extra_in_fa}")

    # Check 3: Line count of fa.json matches en.json
    try:
        with open(en_file, 'r', encoding='utf-8') as f:
            en_line_count = len(f.readlines())
        with open(fa_file, 'r', encoding='utf-8') as f:
            fa_line_count = len(f.readlines())
        if fa_line_count != en_line_count:
            issues_found.append(f"Line count mismatch: fa.json has {fa_line_count} lines, but en.json has {en_line_count} lines.")
    except FileNotFoundError:
        issues_found.append("Could not perform line count comparison due to a missing file.")

    # Check 4: Missing or duplicated keys (within fa.json itself)
    if len(fa_keys) != len(set(fa_keys)):
        issues_found.append("Duplicated keys found in fa.json.")
        seen = set()
        dupes = [k for k in fa_keys if k in seen or seen.add(k)]
        print(f"Duplicate keys in fa.json: {list(set(dupes))}")

    # Check for duplicate keys across source fa*.json files
    if len(all_part_keys) != len(set(all_part_keys)):
        issues_found.append("Duplicated keys found across the source fa*.json files.")
        seen = set()
        dupes = [k for k in all_part_keys if k in seen or seen.add(k)]
        print(f"Duplicate keys in source fa*.json files: {list(set(dupes))}")

    # --- Report and Correct ---
    if issues_found:
        print("\n--- ISSUES FOUND ---")
        for issue in issues_found:
            print(f"- {issue}")

        print("\n--- CORRECTING fa.json ---")
        # Reconstruct fa.json in the correct order of en.json keys
        corrected_fa_data = {}
        for key in en_keys:
            if key in merged_data_ordered:
                corrected_fa_data[key] = merged_data_ordered[key]
            else:
                # If a key from en.json is missing in the fa parts, add it with a placeholder
                # This assumes that the missing keys were not translated in the individual files
                # and need to be pulled from en_data and marked for translation.
                if key in en_data:
                    corrected_fa_data[key] = f"[MISSING_TRANSLATION]{en_data[key]}"
                else:
                    corrected_fa_data[key] = "__MISSING_KEY_IN_EN_JSON__"

        # Write the corrected file
        corrected_fa_file_path = os.path.join(locales_path, 'fa_corrected.json')
        try:
            with open(corrected_fa_file_path, 'w', encoding='utf-8') as f:
                json.dump(corrected_fa_data, f, ensure_ascii=False, indent=2)
            print(f"Successfully created corrected file: {corrected_fa_file_path}")
            # Rename to replace the old file
            os.rename(corrected_fa_file_path, fa_file)
            print(f"Replaced {fa_file} with the corrected version.")

        except Exception as e:
            print(f"Error writing corrected file: {e}")
    else:
        print("--- VERIFICATION PASSED ---")
        print("fa.json appears to be correctly merged and formatted.")

if __name__ == "__main__":
    verify_and_correct_fa_json()

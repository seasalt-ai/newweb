import json
import os

def verify_and_correct_merge():
    # Define file paths
    locales_path = 'public/locales'
    en_file = os.path.join(locales_path, 'en.json')
    es_file = os.path.join(locales_path, 'es.json')
    ar_file = os.path.join(locales_path, 'ar.json')
    
    # Corrected path for es_parts_files, iterating from es1.json to es14.json
    es_parts_source_path = os.path.join(locales_path, 'es')
    es_parts_files = [os.path.join(es_parts_source_path, f'es{i}.json') for i in range(1, 15)] # Changed range to 15 (exclusive)

    # 1. Read original ar.json line count
    try:
        with open(ar_file, 'r', encoding='utf-8') as f:
            ar_lines = len(f.readlines())
    except FileNotFoundError:
        print(f"Error: {ar_file} not found.")
        return

    # 2. Load en.json to get the canonical key order and structure
    try:
        with open(en_file, 'r', encoding='utf-8') as f:
            en_data = json.load(f)
        en_keys = list(en_data.keys())
    except FileNotFoundError:
        print(f"Error: {en_file} not found.")
        return

    # 3. Load the current es.json
    try:
        with open(es_file, 'r', encoding='utf-8') as f:
            es_data = json.load(f)
        es_keys = list(es_data.keys())
    except (FileNotFoundError, json.JSONDecodeError) as e:
        print(f"Error reading or parsing {es_file}: {e}")
        es_data = {}
        es_keys = []

    # 4. Verification checks
    issues_found = []

    # Check 1: Strict merge order and key preservation
    merged_data_ordered = {}
    all_part_keys = []
    for part_file in es_parts_files:
        try:
            with open(part_file, 'r', encoding='utf-8') as f:
                part_data = json.load(f)
                merged_data_ordered.update(part_data)
                all_part_keys.extend(part_data.keys())
        except FileNotFoundError:
            print(f"Warning: {part_file} not found, skipping.")
        except json.JSONDecodeError:
            print(f"Warning: Could not decode JSON from {part_file}, skipping.")


    if list(merged_data_ordered.keys()) != es_keys:
        issues_found.append("Merge order is incorrect or keys are missing/reordered.")

    # Check 2: Top-level keys match en.json
    if set(es_keys) != set(en_keys):
        issues_found.append("Top-level keys in es.json do not match en.json.")
        missing_in_es = set(en_keys) - set(es_keys)
        extra_in_es = set(es_keys) - set(en_keys)
        if missing_in_es:
            print(f"Keys missing in es.json: {missing_in_es}")
        if extra_in_es:
            print(f"Extra keys in es.json: {extra_in_es}")

    # Check 3: Line count of ar.json (This is a bit of a strange request, but we'll check it)
    # Re-reading the current ar.json to be sure.
    try:
        with open(ar_file, 'r', encoding='utf-8') as f:
            current_ar_lines = len(f.readlines())
        if current_ar_lines != ar_lines:
            issues_found.append(f"Line count of ar.json has changed. Original: {ar_lines}, Current: {current_ar_lines}")
    except FileNotFoundError:
        issues_found.append("ar.json not found for line count verification.")


    # Check 4: Missing or duplicated keys
    if len(es_keys) != len(set(es_keys)):
        issues_found.append("Duplicated keys found in es.json.")
        # Find duplicates
        seen = set()
        dupes = [k for k in es_keys if k in seen or seen.add(k)]
        print(f"Duplicate keys: {list(set(dupes))}")

    if len(all_part_keys) != len(set(all_part_keys)):
        issues_found.append("Duplicated keys found across the source es*.json files.")
        seen = set()
        dupes = [k for k in all_part_keys if k in seen or seen.add(k)]
        print(f"Duplicate keys in source files: {list(set(dupes))}")


    # Check 5: JSON structure and formatting (Implicitly handled by correction)
    # We can also check the line count of es.json vs en.json as a proxy
    try:
        with open(en_file, 'r', encoding='utf-8') as f:
            en_line_count = len(f.readlines())
        with open(es_file, 'r', encoding='utf-8') as f:
            es_line_count = len(f.readlines())
        if es_line_count != en_line_count:
            issues_found.append(f"Line count mismatch: es.json has {es_line_count} lines, but en.json has {en_line_count} lines.")
    except FileNotFoundError:
        issues_found.append("Could not perform line count comparison due to a missing file.")


    # --- Report and Correct ---
    if issues_found:
        print("\n--- ISSUES FOUND ---")
        for issue in issues_found:
            print(f"- {issue}")

        print("\n--- CORRECTING es.json ---")
        # Reconstruct es.json in the correct order of en.json keys
        corrected_es_data = {}
        for key in en_keys:
            if key in merged_data_ordered:
                corrected_es_data[key] = merged_data_ordered[key]
            else:
                # If a key from en.json is missing in the es parts, add it with a placeholder
                print(f"Warning: Key '{key}' from en.json is missing in all es*.json files. Adding with placeholder.")
                corrected_es_data[key] = f"__MISSING_TRANSLATION_{key}__"

        # Write the corrected file
        corrected_es_file_path = os.path.join(locales_path, 'es_corrected.json')
        try:
            with open(corrected_es_file_path, 'w', encoding='utf-8') as f:
                json.dump(corrected_es_data, f, ensure_ascii=False, indent=2)
            print(f"Successfully created corrected file: {corrected_es_file_path}")
            # Rename to replace the old file
            os.rename(corrected_es_file_path, es_file)
            print(f"Replaced {es_file} with the corrected version.")

        except Exception as e:
            print(f"Error writing corrected file: {e}")
    else:
        print("--- VERIFICATION PASSED ---")
        print("es.json appears to be correctly merged and formatted.")

if __name__ == "__main__":
    verify_and_correct_merge()

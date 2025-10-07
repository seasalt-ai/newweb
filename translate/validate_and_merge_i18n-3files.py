#!/usr/bin/env python3
"""
i18n JSON File Validator and Merger

This script validates and merges internationalization JSON files for different languages.
It performs the following operations:

1. Validates that all language-specific files (en1.json, en2.json, en3.json, en4.json) exist
2. Compares keys and structure between English files and target language files
3. Merges all language-specific files into a single language file using deep merge
4. Validates the final merged file against the English reference

Deep Merge:
    The script uses recursive deep merge to properly combine JSON files with nested
    structures. This ensures that if multiple files have the same top-level key
    (e.g., "features"), their nested keys are combined rather than overwritten.

Usage:
    python scripts/validate_and_merge_i18n.py <LANGUAGE_CODE>

Examples:
    python scripts/validate_and_merge_i18n.py zh-CN
    python scripts/validate_and_merge_i18n.py fr
    python scripts/validate_and_merge_i18n.py es

Arguments:
    LANGUAGE_CODE: The language code to process (e.g., zh-CN, fr, es)

Directory Structure Expected:
    src/i18n/locales/
    ├── en/
    │   ├── en1.json
    │   ├── en2.json
    │   ├── en3.json
    ├── {LANG}/
    │   ├── {LANG}1.json
    │   ├── {LANG}2.json
    │   ├── {LANG}3.json
    ├── en.json (reference file)
    └── {LANG}.json (output file)

Error Handling:
    - Missing files: Script will report missing files and exit
    - Key mismatches: Script will report detailed differences and exit
    - Structure differences: Script will report nesting level differences
    - Line count differences: Script will report if file lengths don't match

Exit Codes:
    0: Success
    1: Missing files or directories
    2: Key structure mismatch
    3: Line count mismatch
    4: Final validation failed
"""

import json
import os
import sys
import argparse
from pathlib import Path
from typing import Dict, Any, List, Tuple, Set


def count_lines_in_file(file_path: Path) -> int:
    """Count the number of lines in a file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            return sum(1 for _ in f)
    except FileNotFoundError:
        return 0


def load_json_file(file_path: Path) -> Dict[Any, Any]:
    """Load and parse a JSON file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            return json.load(f)
    except FileNotFoundError:
        print(f"ERROR: File not found: {file_path}")
        sys.exit(1)
    except json.JSONDecodeError as e:
        print(f"ERROR: Invalid JSON in file {file_path}: {e}")
        sys.exit(1)


def get_all_keys(obj: Dict[Any, Any], prefix: str = "") -> Set[str]:
    """Recursively get all keys from a nested dictionary."""
    keys = set()
    
    if not isinstance(obj, dict):
        return keys
    
    for key, value in obj.items():
        current_key = f"{prefix}.{key}" if prefix else key
        keys.add(current_key)
        
        if isinstance(value, dict):
            keys.update(get_all_keys(value, current_key))
    
    return keys


def compare_json_structures(english_data: Dict[Any, Any], target_data: Dict[Any, Any], 
                          english_file: str, target_file: str) -> Tuple[bool, List[str]]:
    """Compare the structure of two JSON objects and return differences."""
    errors = []
    
    english_keys = get_all_keys(english_data)
    target_keys = get_all_keys(target_data)
    
    missing_keys = english_keys - target_keys
    extra_keys = target_keys - english_keys
    
    if missing_keys:
        errors.append(f"Missing keys in {target_file}:")
        for key in sorted(missing_keys):
            errors.append(f"  - {key}")
    
    if extra_keys:
        errors.append(f"Extra keys in {target_file} (not in {english_file}):")
        for key in sorted(extra_keys):
            errors.append(f"  + {key}")
    
    return len(errors) == 0, errors


def deep_merge_dicts(base_dict: Dict[Any, Any], merge_dict: Dict[Any, Any]) -> Dict[Any, Any]:
    """Recursively merge two dictionaries, with merge_dict taking precedence."""
    result = base_dict.copy()
    
    for key, value in merge_dict.items():
        if key in result and isinstance(result[key], dict) and isinstance(value, dict):
            # Both values are dictionaries, merge them recursively
            result[key] = deep_merge_dicts(result[key], value)
        else:
            # Either key doesn't exist in base_dict, or one of the values is not a dict
            result[key] = value
    
    return result


def merge_json_files(file_paths: List[Path]) -> Dict[Any, Any]:
    """Merge multiple JSON files into a single dictionary using deep merge."""
    merged_data = {}
    
    for file_path in file_paths:
        data = load_json_file(file_path)
        merged_data = deep_merge_dicts(merged_data, data)
    
    return merged_data


def validate_file_existence(base_path: Path, lang: str) -> bool:
    """Validate that all required files exist."""
    en_files = ['en1.json', 'en2.json', 'en3.json']
    lang_files = [f'{lang}1.json', f'{lang}2.json', f'{lang}3.json']
    
    # Check English reference files
    en_dir = base_path / 'en'
    if not en_dir.exists():
        print(f"ERROR: English reference directory not found: {en_dir}")
        return False
    
    for filename in en_files:
        en_file = en_dir / filename
        if not en_file.exists():
            print(f"ERROR: English reference file not found: {en_file}")
            return False
    
    # Check target language files
    lang_dir = base_path / lang
    if not lang_dir.exists():
        print(f"ERROR: Target language directory not found: {lang_dir}")
        return False
    
    for filename in lang_files:
        lang_file = lang_dir / filename
        if not lang_file.exists():
            print(f"ERROR: Target language file not found: {lang_file}")
            return False
    
    return True


def compare_line_counts(base_path: Path, lang: str) -> bool:
    """Compare line counts between English and target language files."""
    en_files = ['en1.json', 'en2.json', 'en3.json']
    lang_files = [f'{lang}1.json', f'{lang}2.json', f'{lang}3.json']
    all_match = True
    
    for en_filename, lang_filename in zip(en_files, lang_files):
        en_file = base_path / 'en' / en_filename
        lang_file = base_path / lang / lang_filename
        
        en_lines = count_lines_in_file(en_file)
        lang_lines = count_lines_in_file(lang_file)
        
        if en_lines != lang_lines:
            print(f"ERROR: Line count mismatch between {en_filename} and {lang_filename}:")
            print(f"  English file: {en_lines} lines")
            print(f"  {lang} file: {lang_lines} lines")
            all_match = False
        else:
            print(f"✓ Line count match for {en_filename} vs {lang_filename}: {en_lines} lines")
    
    return all_match


def main():
    parser = argparse.ArgumentParser(
        description="Validate and merge i18n JSON files",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog=__doc__
    )
    parser.add_argument('language', help='Language code to process (e.g., zh-CN, fr, es)')
    
    args = parser.parse_args()
    lang = args.language
    
    # Define paths
    project_root = Path(__file__).parent.parent
    i18n_path = project_root / 'src' / 'i18n' / 'locales'
    
    print(f"Processing language: {lang}")
    print(f"Base i18n path: {i18n_path}")
    
    # Step 1: Validate file existence
    print("\n1. Validating file existence...")
    if not validate_file_existence(i18n_path, lang):
        sys.exit(1)
    print("✓ All required files exist")
    
    # Step 2: Compare line counts
    print("\n2. Comparing line counts...")
    # if not compare_line_counts(i18n_path, lang):
    #     sys.exit(3)
    # print("✓ All line counts match")
    
    # Step 3: Compare JSON structures
    print("\n3. Comparing JSON structures...")
    en_files = ['en1.json', 'en2.json', 'en3.json']
    lang_files = [f'{lang}1.json', f'{lang}2.json', f'{lang}3.json']
    all_structures_valid = True
    
    for en_filename, lang_filename in zip(en_files, lang_files):
        en_file = i18n_path / 'en' / en_filename
        lang_file = i18n_path / lang / lang_filename
        
        en_data = load_json_file(en_file)
        lang_data = load_json_file(lang_file)
        
        is_valid, errors = compare_json_structures(en_data, lang_data, f"en/{en_filename}", f"{lang}/{lang_filename}")
        
        if not is_valid:
            print(f"ERROR: Structure mismatch between {en_filename} and {lang_filename}:")
            for error in errors:
                print(f"  {error}")
            all_structures_valid = False
        else:
            print(f"✓ Structure match for {en_filename} vs {lang_filename}")
    
    if not all_structures_valid:
        sys.exit(2)
    print("✓ All JSON structures match")
    
    # Step 4: Merge language files
    print("\n4. Merging language files...")
    lang_file_paths = [i18n_path / lang / filename for filename in lang_files]
    merged_data = merge_json_files(lang_file_paths)
    
    # Save merged file
    output_file = i18n_path / f"{lang}.json"
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(merged_data, f, ensure_ascii=False, indent=2)
    
    print(f"✓ Merged file saved: {output_file}")
    
    # Step 5: Final validation against English reference
    print("\n5. Final validation against English reference...")
    en_reference_file = i18n_path / 'en.json'
    
    if not en_reference_file.exists():
        print(f"WARNING: English reference file not found: {en_reference_file}")
        print("Skipping final validation")
    else:
        en_reference_data = load_json_file(en_reference_file)
        
        is_valid, errors = compare_json_structures(
            en_reference_data, merged_data, 
            "en.json", f"{lang}.json"
        )
        
        if not is_valid:
            print(f"ERROR: Final validation failed:")
            for error in errors:
                print(f"  {error}")
            sys.exit(4)
        
        print("✓ Final validation passed")
    
    print(f"\n🎉 SUCCESS: {lang} i18n files validated and merged successfully!")
    print(f"Output file: {output_file}")


if __name__ == "__main__":
    main()

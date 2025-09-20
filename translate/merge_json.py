#!/usr/bin/env python3
"""
JSON File Merger for i18n Files

This script merges multiple smaller JSON files back into a single JSON file.
It uses deep merge to properly handle nested structures and validates that
the merged result contains exactly the same keys and structure as expected.

Usage:
    python merge_json.py <LANGUAGE_CODE> [OUTPUT_SUFFIX]

Examples:
    python merge_json.py en
    python merge_json.py ar
    python merge_json.py zh-CN _merged

Arguments:
    LANGUAGE_CODE: The language code to process (e.g., en, ar, zh-CN, fr)
    OUTPUT_SUFFIX: Suffix for output file (default: _merged)

The script will:
1. Read all {LANG}*.json files from ../public/locales/{LANG}/ directory
2. Merge them using deep merge (preserving nested structures)
3. Create ../public/locales/{LANG}{SUFFIX}.json as output
4. Validate that all keys are preserved and no data is lost
"""

import json
import os
import sys
import argparse
from pathlib import Path
from typing import Dict, Any, List, Set
import glob


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
    
    for file_path in file_paths:  # Already sorted by natural order
        print(f"Merging: {file_path.name}")
        data = load_json_file(file_path)
        merged_data = deep_merge_dicts(merged_data, data)
    
    return merged_data


def validate_merge_integrity(original_file: Path, merged_data: Dict[Any, Any]) -> bool:
    """Validate that the merged data contains all the same keys as the original."""
    if not original_file.exists():
        print(f"WARNING: Original file not found: {original_file}")
        print("Skipping integrity validation")
        return True
    
    original_data = load_json_file(original_file)
    
    original_keys = get_all_keys(original_data)
    merged_keys = get_all_keys(merged_data)
    
    missing_keys = original_keys - merged_keys
    extra_keys = merged_keys - original_keys
    
    if missing_keys:
        print(f"ERROR: Missing keys in merged data:")
        for key in sorted(missing_keys):
            print(f"  - {key}")
        return False
    
    if extra_keys:
        print(f"ERROR: Extra keys in merged data:")
        for key in sorted(extra_keys):
            print(f"  + {key}")
        return False
    
    return True


def main():
    parser = argparse.ArgumentParser(
        description="Merge split i18n JSON files back into a single file",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog=__doc__
    )
    parser.add_argument('language', help='Language code to process (e.g., en, ar, zh-CN, fr)')
    parser.add_argument('--output-suffix', default='_merged', 
                       help='Suffix for output file (default: _merged)')
    
    args = parser.parse_args()
    lang = args.language
    suffix = args.output_suffix
    
    # Define paths
    input_dir = Path(f"../public/locales/{lang}")
    output_file = Path(f"../public/locales/{lang}{suffix}.json")
    original_file = Path(f"../public/locales/{lang}.json")
    
    print(f"Processing language: {lang}")
    print(f"Merging JSON files from: {input_dir}")
    print(f"Output file: {output_file}")
    
    # Check if input directory exists
    if not input_dir.exists():
        print(f"ERROR: Input directory not found: {input_dir}")
        sys.exit(1)
    
    # Find all {lang}*.json files in the directory
    pattern = str(input_dir / f"{lang}*.json")
    json_files = [Path(f) for f in glob.glob(pattern)]
    
    # Sort files naturally (lang1, lang2, lang3, ..., lang10, lang11, etc.)
    def natural_sort_key(file_path):
        import re
        numbers = re.findall(r'\d+', file_path.stem)
        return int(numbers[0]) if numbers else 0
    
    json_files.sort(key=natural_sort_key)
    
    if not json_files:
        print(f"ERROR: No {lang}*.json files found in {input_dir}")
        sys.exit(1)
    
    print(f"Found {len(json_files)} files to merge:")
    for file_path in json_files:
        lines = count_lines_in_file(file_path)
        print(f"  - {file_path.name}: {lines} lines")
    
    # Merge all JSON files
    print(f"\nMerging files...")
    merged_data = merge_json_files(json_files)
    
    # Count total lines in merged data
    merged_json_str = json.dumps(merged_data, ensure_ascii=False, indent=2)
    merged_lines = len(merged_json_str.split('\n'))
    print(f"Merged data: {merged_lines} lines, {len(merged_data)} top-level keys")
    
    # Save merged file
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(merged_data, f, ensure_ascii=False, indent=2)
    
    print(f"✓ Merged file saved: {output_file}")
    
    # Validate integrity against original file
    print(f"\nValidating merge integrity...")
    if validate_merge_integrity(original_file, merged_data):
        print("✓ Merge integrity validation passed")
        
        # Compare line counts if original exists
        if original_file.exists():
            original_lines = count_lines_in_file(original_file)
            if original_lines == merged_lines:
                print(f"✓ Line count matches original: {original_lines} lines")
            else:
                print(f"WARNING: Line count differs from original:")
                print(f"  Original: {original_lines} lines")
                print(f"  Merged: {merged_lines} lines")
        
        print(f"\n🎉 SUCCESS: Merged {len(json_files)} files into {output_file}")
    else:
        print(f"\n❌ FAILED: Merge integrity validation failed")
        sys.exit(1)


if __name__ == "__main__":
    main()
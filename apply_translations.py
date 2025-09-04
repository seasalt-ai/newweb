#!/usr/bin/env python3
"""
Apply German translations to de.json file.

This script recursively walks through the JSON structure and replaces
English strings with German translations from the translations module.
"""

import json
import sys
import argparse
from pathlib import Path
from typing import Any, Dict
from translations import replacements


def apply_translations(data: Any, translations: Dict[str, str],
                       dry_run: bool = False) -> tuple[Any, int]:
    """
    Recursively apply translations to a data structure.
    
    Args:
        data: The data structure (dict, list, or primitive)
        translations: Dictionary of English to German translations
        dry_run: If True, count changes without modifying
        
    Returns:
        Tuple of (modified data, count of replacements made)
    """
    count = 0
    
    if isinstance(data, dict):
        result = {}
        for key, value in data.items():
            new_value, sub_count = apply_translations(
                value, translations, dry_run
            )
            result[key] = new_value
            count += sub_count
        return result, count
    
    elif isinstance(data, list):
        result = []
        for item in data:
            new_item, sub_count = apply_translations(
                item, translations, dry_run
            )
            result.append(new_item)
            count += sub_count
        return result, count
    
    elif isinstance(data, str):
        if data in translations:
            if dry_run:
                print(f"Would replace: '{data}' -> '{translations[data]}'")
            return translations[data], 1
        return data, 0
    
    else:
        # For numbers, booleans, None, etc.
        return data, 0


def main():
    """Main function to process de.json file."""
    parser = argparse.ArgumentParser(
        description='Apply German translations to de.json'
    )
    parser.add_argument(
        '--dry-run',
        action='store_true',
        help='Preview changes without writing to file'
    )
    parser.add_argument(
        '--file',
        type=str,
        default='public/locales/de.json',
        help='Path to de.json file (default: public/locales/de.json)'
    )
    
    args = parser.parse_args()
    
    # Resolve file path
    json_path = Path(args.file)
    if not json_path.is_absolute():
        json_path = Path.cwd() / json_path
    
    if not json_path.exists():
        print(f"Error: File not found: {json_path}")
        sys.exit(1)
    
    # Load JSON file
    try:
        with open(json_path, 'r', encoding='utf-8') as f:
            data = json.load(f)
    except json.JSONDecodeError as e:
        print(f"Error: Invalid JSON in {json_path}: {e}")
        sys.exit(1)
    except Exception as e:
        print(f"Error reading file {json_path}: {e}")
        sys.exit(1)
    
    # Apply translations
    print(f"Processing {json_path}...")
    print(f"Available translations: {len(replacements)}")
    
    modified_data, replacement_count = apply_translations(
        data, replacements, args.dry_run
    )
    
    print(f"\nReplacements made: {replacement_count}")
    
    if not args.dry_run and replacement_count > 0:
        # Write back to file
        try:
            with open(json_path, 'w', encoding='utf-8') as f:
                json.dump(modified_data, f, ensure_ascii=False,
                          indent=2, separators=(',', ': '))
            print(f"Successfully updated {json_path}")
        except Exception as e:
            print(f"Error writing file {json_path}: {e}")
            sys.exit(1)
    elif args.dry_run:
        print("\nDry run complete. No files were modified.")
        print("Run without --dry-run to apply changes.")
    else:
        print("No changes needed.")


if __name__ == '__main__':
    main()

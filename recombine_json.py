#!/usr/bin/env python3
"""Recombine translated JSON parts into final fil.json."""
import json
import os
from typing import Any, Dict


def merge_json_objects(target: Dict[str, Any], source: Dict[str, Any]) -> None:
    """Merge source JSON object into target, handling nested structures."""
    for key, value in source.items():
        if key in target:
            if isinstance(target[key], dict) and isinstance(value, dict):
                # Recursively merge nested dictionaries
                merge_json_objects(target[key], value)
            else:
                # Overwrite with source value
                target[key] = value
        else:
            # Add new key from source
            target[key] = value


def recombine_translations() -> None:
    """Recombine the five translated parts into one fil.json file."""
    # Change to script directory
    script_dir = os.path.dirname(os.path.abspath(__file__))
    os.chdir(script_dir)
    
    combined_data = {}
    
    # Load and merge all translated parts
    for part_num in range(1, 6):  # 1 to 5
        part_file = f"public/locales/fil_part{part_num}_translated.json"
        
        print(f"Loading {part_file}...")
        
        with open(part_file, 'r', encoding='utf-8') as f:
            part_data = json.load(f)
        
        # Merge this part into the combined data
        merge_json_objects(combined_data, part_data)
        
        print(f"  Merged {len(part_data)} top-level keys")
    
    # Write the combined data to fil.json
    output_file = "public/locales/fil.json"
    
    print(f"Writing combined translation to {output_file}...")
    
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(combined_data, f, indent=2, ensure_ascii=False)
    
    print(f"Successfully created {output_file}")
    print(f"Total top-level keys in combined file: {len(combined_data)}")


def validate_recombined_file() -> None:
    """Validate that the recombined file is properly structured."""
    try:
        with open("public/locales/fil.json", 'r', encoding='utf-8') as f:
            data = json.load(f)
        
        print("✓ Final fil.json is valid JSON")
        print(f"  Total top-level keys: {len(data)}")
        
        # Check some expected keys
        expected_keys = ['header', 'footer', 'hero', 'features']
        missing_keys = [key for key in expected_keys if key not in data]
        
        if missing_keys:
            print(f"⚠ Warning: Missing expected keys: {missing_keys}")
        else:
            print("✓ All expected top-level keys are present")
        
    except Exception as e:
        print(f"✗ Error validating fil.json: {e}")


def main() -> None:
    """Main recombination function."""
    recombine_translations()
    validate_recombined_file()
    print("Recombination completed successfully!")


if __name__ == "__main__":
    main()

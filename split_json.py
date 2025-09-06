#!/usr/bin/env python3
"""Split JSON file into five equal parts for translation processing."""
import json
import math
import os
from typing import Any, Dict

# Configuration
INPUT_FILE = "public/locales/en.json"
OUTPUT_PREFIX = "public/locales/fil_part"
TOTAL_PARTS = 5


def get_nested_items(data: Dict[str, Any], prefix: str = "") -> list:
    """Recursively get all key-value paths from nested dictionary."""
    items = []
    for key, value in data.items():
        current_path = f"{prefix}.{key}" if prefix else key
        
        if isinstance(value, dict):
            items.extend(get_nested_items(value, current_path))
        else:
            items.append((current_path, value))
    
    return items


def set_nested_value(data: Dict[str, Any], path: str, value: Any) -> None:
    """Set value in nested dictionary using dot notation path."""
    keys = path.split('.')
    current = data
    
    for key in keys[:-1]:
        if key not in current:
            current[key] = {}
        current = current[key]
    
    current[keys[-1]] = value


def split_json_file() -> None:
    """Split the English JSON into five equal parts."""
    # Load the English JSON file
    with open(INPUT_FILE, 'r', encoding='utf-8') as f:
        en_data = json.load(f)
    
    # Get all key-value pairs
    all_items = get_nested_items(en_data)
    total_items = len(all_items)
    items_per_part = math.ceil(total_items / TOTAL_PARTS)
    
    print(f"Total items: {total_items}")
    print(f"Items per part: {items_per_part}")
    
    # Split into parts
    for part_num in range(1, TOTAL_PARTS + 1):
        start_idx = (part_num - 1) * items_per_part
        end_idx = min(start_idx + items_per_part, total_items)
        
        # Create part data structure
        part_data = {}
        for i in range(start_idx, end_idx):
            path, value = all_items[i]
            set_nested_value(part_data, path, value)
        
        # Write to file
        output_file = f"{OUTPUT_PREFIX}{part_num}.json"
        with open(output_file, 'w', encoding='utf-8') as f:
            json.dump(part_data, f, indent=2, ensure_ascii=False)
        
        print(f"Created {output_file} with items {start_idx}-{end_idx-1} "
              f"({end_idx - start_idx} items)")


if __name__ == "__main__":
    # Change to script directory
    script_dir = os.path.dirname(os.path.abspath(__file__))
    os.chdir(script_dir)
    
    split_json_file()
    print("JSON splitting completed successfully!")

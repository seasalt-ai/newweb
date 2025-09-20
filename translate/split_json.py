#!/usr/bin/env python3
"""
JSON File Splitter for i18n Files

This script splits a large JSON file into smaller files with less than 2000 lines each.
The split is done intelligently to maintain JSON structure integrity by splitting at
top-level keys rather than arbitrary line breaks.

Usage:
    python split_json.py <LANGUAGE_CODE> [MAX_LINES]

Examples:
    python split_json.py en
    python split_json.py ar 1500
    python split_json.py zh-CN 2000

Arguments:
    LANGUAGE_CODE: The language code to process (e.g., en, ar, zh-CN, fr)
    MAX_LINES: Maximum lines per file (default: 2000)

The script will:
1. Read ../public/locales/{LANG}.json
2. Create ../public/locales/{LANG}/ directory if it doesn't exist
3. Split the JSON into smaller files ({LANG}1.json, {LANG}2.json, etc.)
4. Each file will have less than MAX_LINES lines
5. Maintain proper JSON structure in each file
"""

import json
import os
import sys
import argparse
from pathlib import Path
from typing import Dict, Any, List, Tuple


def count_json_lines(data: Dict[Any, Any]) -> int:
    """Count the number of lines that would be generated when formatting JSON with indent=2."""
    json_str = json.dumps(data, ensure_ascii=False, indent=2)
    return len(json_str.split('\n'))


def split_large_nested_object(key: str, value: Dict[Any, Any], max_lines: int) -> List[Dict[str, Any]]:
    """
    Split a large nested object into multiple chunks if it's too big.
    """
    if not isinstance(value, dict):
        return [{key: value}]
    
    # Check if the entire object fits in one chunk
    single_chunk = {key: value}
    if count_json_lines(single_chunk) < max_lines:
        return [single_chunk]
    
    # Split the nested object by its keys
    chunks = []
    current_nested = {}
    
    for nested_key, nested_value in value.items():
        temp_nested = current_nested.copy()
        temp_nested[nested_key] = nested_value
        temp_chunk = {key: temp_nested}
        
        if count_json_lines(temp_chunk) >= max_lines and current_nested:
            # Save current chunk and start new one
            chunks.append({key: current_nested})
            current_nested = {nested_key: nested_value}
        else:
            current_nested[nested_key] = nested_value
    
    # Add the last chunk if it has content
    if current_nested:
        chunks.append({key: current_nested})
    
    return chunks


def split_json_by_top_level_keys(data: Dict[Any, Any], max_lines: int = 2000) -> List[Dict[Any, Any]]:
    """
    Split JSON data by top-level keys, ensuring each chunk has less than max_lines.
    If a single top-level key is too large, it will be split further.
    """
    if not isinstance(data, dict):
        raise ValueError("Input data must be a dictionary")
    
    chunks = []
    current_chunk = {}
    
    for key, value in data.items():
        # First check if this single key would create a file that's too large
        single_key_chunk = {key: value}
        single_key_lines = count_json_lines(single_key_chunk)
        
        if single_key_lines >= max_lines:
            # This single key is too large, save current chunk and handle the large key separately
            if current_chunk:
                chunks.append(current_chunk)
                current_chunk = {}
            
            # Split the large key into multiple chunks
            large_key_chunks = split_large_nested_object(key, value, max_lines)
            chunks.extend(large_key_chunks)
        else:
            # Create a temporary chunk to test the line count
            temp_chunk = current_chunk.copy()
            temp_chunk[key] = value
            temp_lines = count_json_lines(temp_chunk)
            
            if temp_lines >= max_lines and current_chunk:
                # If adding this key would exceed max_lines and we have content, 
                # save current chunk and start new one
                chunks.append(current_chunk)
                current_chunk = {key: value}
            else:
                # Add the key to current chunk
                current_chunk[key] = value
    
    # Add the last chunk if it has content
    if current_chunk:
        chunks.append(current_chunk)
    
    return chunks


def main():
    parser = argparse.ArgumentParser(
        description="Split large i18n JSON files into smaller chunks",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog=__doc__
    )
    parser.add_argument('language', help='Language code to process (e.g., en, ar, zh-CN, fr)')
    parser.add_argument('--max-lines', type=int, default=2000, 
                       help='Maximum lines per file (default: 2000)')
    
    args = parser.parse_args()
    lang = args.language
    max_lines = args.max_lines - 1  # Use one less to be safe
    
    # Define paths
    script_dir = Path(__file__).resolve().parent
    input_file = script_dir / f"../public/locales/{lang}.json"
    output_dir = script_dir / f"../public/locales/{lang}"
    
    print(f"Processing language: {lang}")
    print(f"Splitting JSON file: {input_file}")
    print(f"Output directory: {output_dir}")
    print(f"Max lines per file: {args.max_lines}")
    
    # Check if input file exists
    if not input_file.exists():
        print(f"ERROR: Input file not found: {input_file}")
        sys.exit(1)
    
    # Create output directory if it doesn't exist
    output_dir.mkdir(parents=True, exist_ok=True)
    
    # Load the JSON file
    try:
        with open(input_file, 'r', encoding='utf-8') as f:
            data = json.load(f)
    except json.JSONDecodeError as e:
        print(f"ERROR: Invalid JSON in file {input_file}: {e}")
        sys.exit(1)
    except Exception as e:
        print(f"ERROR: Failed to read file {input_file}: {e}")
        sys.exit(1)
    
    print(f"Original file has {count_json_lines(data)} lines")
    
    # Split the JSON data
    chunks = split_json_by_top_level_keys(data, max_lines=max_lines)
    
    print(f"Split into {len(chunks)} chunks")
    
    # Save each chunk
    for i, chunk in enumerate(chunks, 1):
        output_file = output_dir / f"{lang}{i}.json"
        
        with open(output_file, 'w', encoding='utf-8') as f:
            json.dump(chunk, f, ensure_ascii=False, indent=2)
        
        lines = count_json_lines(chunk)
        keys = len(chunk)
        print(f"✓ Created {output_file.name}: {lines} lines, {keys} top-level keys")
    
    # Verify total keys match
    original_keys = set(data.keys())
    split_keys = set()
    for chunk in chunks:
        split_keys.update(chunk.keys())
    
    if original_keys == split_keys:
        print("✓ All keys preserved during split")
    else:
        missing = original_keys - split_keys
        extra = split_keys - original_keys
        if missing:
            print(f"ERROR: Missing keys after split: {missing}")
        if extra:
            print(f"ERROR: Extra keys after split: {extra}")
        sys.exit(1)
    
    print(f"\n🎉 SUCCESS: Split {input_file.name} into {len(chunks)} files in {output_dir}")


if __name__ == "__main__":
    main()
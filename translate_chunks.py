#!/usr/bin/env python3
"""
Traditional to Simplified Chinese Translation Script for JSON files.
Processes zh-TW.json in chunks and updates zh-CN.json progressively.
"""

import json
import os
import re
import sys
from typing import Dict, Any, List, Tuple
import opencc

# Configuration
CHUNK_SIZE = 3000
SOURCE_FILE = "public/locales/zh-TW.json"
TARGET_FILE = "public/locales/zh-CN.json"
TEMP_FILE = "public/locales/zh-CN.temp.json"

class ChineseTranslator:
    def __init__(self):
        """Initialize the OpenCC converter for Traditional to Simplified Chinese."""
        try:
            self.converter = opencc.OpenCC('t2s')
            print("✓ OpenCC Traditional to Simplified converter initialized")
        except Exception as e:
            print(f"✗ Failed to initialize OpenCC: {e}")
            sys.exit(1)
    
    def is_chinese_text(self, text: str) -> bool:
        """Check if text contains Chinese characters (not purely ASCII/English)."""
        if not text or len(text.strip()) == 0:
            return False
        # Check if there are any Chinese characters (CJK range)
        chinese_pattern = re.compile(r'[\u4e00-\u9fff]+')
        return bool(chinese_pattern.search(text))
    
    def should_translate(self, text: str) -> bool:
        """Determine if a text should be translated."""
        if not text or not isinstance(text, str):
            return False
        
        # Skip if it's purely ASCII/English
        try:
            text.encode('ascii')
            return False  # Pure ASCII, don't translate
        except UnicodeEncodeError:
            pass  # Contains non-ASCII characters, continue checking
        
        # Only translate if it contains Chinese characters
        return self.is_chinese_text(text)
    
    def translate_text(self, text: str) -> str:
        """Translate Traditional Chinese to Simplified Chinese, skip English."""
        if not self.should_translate(text):
            return text
        
        try:
            translated = self.converter.convert(text)
            return translated
        except Exception as e:
            print(f"Warning: Translation failed for '{text[:50]}...': {e}")
            return text  # Return original if translation fails
    
    def translate_json_values(self, obj: Any) -> Any:
        """Recursively translate JSON values, preserving structure."""
        if isinstance(obj, dict):
            return {key: self.translate_json_values(value) for key, value in obj.items()}
        elif isinstance(obj, list):
            return [self.translate_json_values(item) for item in obj]
        elif isinstance(obj, str):
            return self.translate_text(obj)
        else:
            return obj  # Numbers, booleans, null remain unchanged

def read_file_lines(file_path: str) -> List[str]:
    """Read all lines from a file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            return f.readlines()
    except FileNotFoundError:
        print(f"✗ File not found: {file_path}")
        sys.exit(1)
    except Exception as e:
        print(f"✗ Error reading file {file_path}: {e}")
        sys.exit(1)

def get_chunk_ranges(total_lines: int, chunk_size: int) -> List[Tuple[int, int]]:
    """Calculate chunk ranges for processing."""
    ranges = []
    start = 1
    while start <= total_lines:
        end = min(start + chunk_size - 1, total_lines)
        ranges.append((start, end))
        start = end + 1
    return ranges

def extract_json_chunk(lines: List[str], start_line: int, end_line: int) -> str:
    """Extract a chunk of lines and return as JSON-parseable string."""
    # Convert to 0-based indexing
    start_idx = start_line - 1
    end_idx = end_line - 1
    
    chunk_lines = lines[start_idx:end_idx + 1]
    return ''.join(chunk_lines)

def parse_partial_json(json_chunk: str) -> Dict[str, Any]:
    """Parse a partial JSON chunk by wrapping it properly."""
    # Remove leading/trailing whitespace
    json_chunk = json_chunk.strip()
    
    # Try to parse as-is first (might be complete JSON)
    try:
        return json.loads(json_chunk)
    except json.JSONDecodeError:
        pass
    
    # If chunk doesn't start with '{', wrap it
    if not json_chunk.startswith('{'):
        json_chunk = '{' + json_chunk
    
    # If chunk doesn't end with '}', wrap it  
    if not json_chunk.rstrip().endswith('}'):
        # Remove trailing comma if present
        json_chunk = json_chunk.rstrip().rstrip(',')
        json_chunk = json_chunk + '}'
    
    try:
        return json.loads(json_chunk)
    except json.JSONDecodeError as e:
        print(f"Warning: Could not parse JSON chunk: {e}")
        return {}

def merge_json_deep(target: Dict[str, Any], source: Dict[str, Any]) -> Dict[str, Any]:
    """Deep merge source JSON into target JSON."""
    result = target.copy()
    
    for key, value in source.items():
        if key in result and isinstance(result[key], dict) and isinstance(value, dict):
            result[key] = merge_json_deep(result[key], value)
        else:
            result[key] = value
    
    return result

def load_existing_json(file_path: str) -> Dict[str, Any]:
    """Load existing JSON file, return empty dict if not exists."""
    if not os.path.exists(file_path) or os.path.getsize(file_path) == 0:
        return {}
    
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            return json.load(f)
    except (json.JSONDecodeError, FileNotFoundError):
        return {}

def save_json_file(data: Dict[str, Any], file_path: str) -> None:
    """Save JSON data to file with proper formatting."""
    try:
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=2, separators=(',', ': '))
        print(f"✓ Saved {file_path}")
    except Exception as e:
        print(f"✗ Error saving {file_path}: {e}")
        sys.exit(1)

def validate_json_file(file_path: str) -> bool:
    """Validate if a file contains valid JSON."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            json.load(f)
        return True
    except (json.JSONDecodeError, FileNotFoundError) as e:
        print(f"✗ JSON validation failed for {file_path}: {e}")
        return False

def main():
    """Main translation process."""
    print("🚀 Starting Traditional to Simplified Chinese translation...")
    
    # Initialize translator
    translator = ChineseTranslator()
    
    # Check if source file exists
    if not os.path.exists(SOURCE_FILE):
        print(f"✗ Source file not found: {SOURCE_FILE}")
        sys.exit(1)
    
    # Load the complete JSON file
    print(f"📖 Loading complete source file: {SOURCE_FILE}")
    try:
        with open(SOURCE_FILE, 'r', encoding='utf-8') as f:
            source_data = json.load(f)
        print(f"✓ Successfully loaded JSON with {len(source_data)} top-level keys")
    except Exception as e:
        print(f"✗ Error loading source JSON: {e}")
        sys.exit(1)
    
    # Process the complete JSON (translate all values)
    print(f"🔄 Translating all JSON values from Traditional to Simplified Chinese...")
    translated_data = translator.translate_json_values(source_data)
    
    # Save the translated JSON
    print(f"💾 Saving translated data to {TARGET_FILE}...")
    save_json_file(translated_data, TARGET_FILE)
    
    # Validate the final JSON
    if not validate_json_file(TARGET_FILE):
        print(f"✗ Final JSON validation failed!")
        sys.exit(1)
    
    print(f"\n🎉 Translation completed successfully!")
    print(f"📊 Translated file saved to: {TARGET_FILE}")
    
    # Count total lines in output for verification
    with open(TARGET_FILE, 'r', encoding='utf-8') as f:
        output_lines = len(f.readlines())
    print(f"📏 Output file has {output_lines:,} lines")

if __name__ == "__main__":
    main()

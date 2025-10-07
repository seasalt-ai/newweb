#!/usr/bin/env python3
"""
Demo Script: Split and Merge JSON Files

This script demonstrates how to use the split_json.py and merge_json.py scripts
for different languages and configurations.

Usage:
    python demo_usage.py
"""

import subprocess
import sys
from pathlib import Path


def run_command(command):
    """Run a command and print its output."""
    print(f"\n{'='*60}")
    print(f"Running: {' '.join(command)}")
    print('='*60)
    
    result = subprocess.run(command, capture_output=True, text=True)
    
    if result.stdout:
        print(result.stdout)
    if result.stderr:
        print("STDERR:", result.stderr)
    
    return result.returncode == 0


def main():
    print("🚀 JSON Split/Merge Demo")
    print("This demo shows how to split and merge JSON files for different languages")
    
    demos = [
        {
            "name": "English with default settings (2000 lines)",
            "split_cmd": ["python3", "split_json.py", "en"],
            "merge_cmd": ["python3", "merge_json.py", "en"]
        },
        {
            "name": "Arabic with custom max lines (1500)",
            "split_cmd": ["python3", "split_json.py", "ar", "--max-lines", "1500"],
            "merge_cmd": ["python3", "merge_json.py", "ar", "--output-suffix", "_reconstructed"]
        }
    ]
    
    for i, demo in enumerate(demos, 1):
        print(f"\n\n📄 Demo {i}: {demo['name']}")
        
        # Split
        print(f"\n🔨 Step 1: Splitting...")
        if not run_command(demo['split_cmd']):
            print("❌ Split failed!")
            continue
            
        # Merge
        print(f"\n🔧 Step 2: Merging...")
        if not run_command(demo['merge_cmd']):
            print("❌ Merge failed!")
            continue
            
        print(f"\n✅ Demo {i} completed successfully!")
    
    print(f"\n\n🎉 All demos completed!")
    print("\nYou can now:")
    print("1. Check the split files in ../public/locales/{lang}/ directories")
    print("2. Verify merged files match originals using 'diff' command")
    print("3. Use these scripts for any language in your locales folder")


if __name__ == "__main__":
    main()
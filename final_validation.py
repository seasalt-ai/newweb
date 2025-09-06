#!/usr/bin/env python3
"""Final validation and comparison of translated fil.json."""
import json
import os
from typing import Any, Dict, Set


def count_keys_recursive(data: Any, prefix: str = "") -> int:
    """Recursively count all keys in nested JSON structure."""
    count = 0
    if isinstance(data, dict):
        for key, value in data.items():
            count += 1  # Count this key
            if isinstance(value, dict):
                # Recursively count nested keys
                count += count_keys_recursive(value, f"{prefix}.{key}" if prefix else key)
            elif isinstance(value, list):
                # Handle arrays that might contain objects
                for i, item in enumerate(value):
                    if isinstance(item, dict):
                        count += count_keys_recursive(item, f"{prefix}.{key}[{i}]" if prefix else f"{key}[{i}]")
    return count


def get_all_key_paths(data: Any, prefix: str = "") -> Set[str]:
    """Get all key paths in the JSON structure for detailed comparison."""
    paths = set()
    if isinstance(data, dict):
        for key, value in data.items():
            current_path = f"{prefix}.{key}" if prefix else key
            paths.add(current_path)
            
            if isinstance(value, dict):
                paths.update(get_all_key_paths(value, current_path))
            elif isinstance(value, list):
                for i, item in enumerate(value):
                    if isinstance(item, dict):
                        paths.update(get_all_key_paths(item, f"{current_path}[{i}]"))
    return paths


def validate_final_translation() -> None:
    """Perform comprehensive validation of the final translation."""
    print("🔍 Final Validation of fil.json")
    print("=" * 50)
    
    # Change to script directory
    script_dir = os.path.dirname(os.path.abspath(__file__))
    os.chdir(script_dir)
    
    # 1. Load both files
    try:
        with open("public/locales/en.json", 'r', encoding='utf-8') as f:
            en_data = json.load(f)
        print("✓ Successfully loaded en.json")
    except Exception as e:
        print(f"✗ Error loading en.json: {e}")
        return
    
    try:
        with open("public/locales/fil.json", 'r', encoding='utf-8') as f:
            fil_data = json.load(f)
        print("✓ Successfully loaded fil.json")
    except Exception as e:
        print(f"✗ Error loading fil.json: {e}")
        return
    
    # 2. Validate JSON structure
    print("\n📊 Structure Comparison:")
    print("-" * 30)
    
    en_keys = count_keys_recursive(en_data)
    fil_keys = count_keys_recursive(fil_data)
    
    print(f"English file total keys: {en_keys}")
    print(f"Filipino file total keys: {fil_keys}")
    
    if en_keys == fil_keys:
        print("✓ Key counts match perfectly")
    else:
        diff = abs(en_keys - fil_keys)
        print(f"⚠ Key count difference: {diff}")
    
    # 3. Detailed path comparison
    print("\n🔑 Key Path Analysis:")
    print("-" * 30)
    
    en_paths = get_all_key_paths(en_data)
    fil_paths = get_all_key_paths(fil_data)
    
    missing_in_fil = en_paths - fil_paths
    extra_in_fil = fil_paths - en_paths
    
    if not missing_in_fil and not extra_in_fil:
        print("✓ All key paths match perfectly")
    else:
        if missing_in_fil:
            print(f"⚠ Keys missing in Filipino: {len(missing_in_fil)}")
            for path in sorted(list(missing_in_fil)[:10]):  # Show first 10
                print(f"  - {path}")
            if len(missing_in_fil) > 10:
                print(f"  ... and {len(missing_in_fil) - 10} more")
        
        if extra_in_fil:
            print(f"⚠ Extra keys in Filipino: {len(extra_in_fil)}")
            for path in sorted(list(extra_in_fil)[:10]):  # Show first 10
                print(f"  + {path}")
            if len(extra_in_fil) > 10:
                print(f"  ... and {len(extra_in_fil) - 10} more")
    
    # 4. File size comparison
    print("\n📄 File Size Comparison:")
    print("-" * 30)
    
    en_size = os.path.getsize("public/locales/en.json")
    fil_size = os.path.getsize("public/locales/fil.json")
    
    print(f"English file size: {en_size:,} bytes")
    print(f"Filipino file size: {fil_size:,} bytes")
    print(f"Size difference: {fil_size - en_size:+,} bytes")
    
    # 5. Sample content validation
    print("\n📝 Sample Translation Quality:")
    print("-" * 30)
    
    sample_paths = [
        'header.products', 'header.login', 'footer.company.title', 
        'hero.title.line1', 'features.mainTitle'
    ]
    
    for path in sample_paths:
        try:
            en_val = get_nested_value(en_data, path)
            fil_val = get_nested_value(fil_data, path)
            print(f"{path}:")
            print(f"  EN: {en_val}")
            print(f"  FIL: {fil_val}")
            print()
        except:
            print(f"  ⚠ Could not find path: {path}")
    
    print("🎉 Final Validation Complete!")


def get_nested_value(data: Dict[str, Any], path: str) -> Any:
    """Get value from nested dictionary using dot notation."""
    keys = path.split('.')
    current = data
    for key in keys:
        current = current[key]
    return current


def run_flake8_checks() -> None:
    """Run flake8 checks on all Python scripts."""
    print("\n🔍 Running flake8 checks...")
    print("-" * 30)
    
    python_files = [
        "split_json.py",
        "translate_json.py", 
        "comprehensive_translate.py",
        "quality_check.py",
        "recombine_json.py",
        "final_validation.py"
    ]
    
    for file in python_files:
        if os.path.exists(file):
            result = os.system(f"flake8 --count --max-complexity=15 --max-line-length=127 --statistics --ignore=D,E203,E501,W503,W504 {file}")
            if result == 0:
                print(f"✓ {file} passed flake8")
            else:
                print(f"⚠ {file} has flake8 issues")
        else:
            print(f"⚠ {file} not found")


def main() -> None:
    """Main validation function."""
    validate_final_translation()
    run_flake8_checks()


if __name__ == "__main__":
    main()


import json
import sys

def main():
    if len(sys.argv) < 3:
        print("Usage: python verify_merge.py <merged_file> <input_file1> <input_file2> ...")
        sys.exit(1)

    merged_file = sys.argv[1]
    input_files = sys.argv[2:]

    # Key order verification
    original_keys_ordered = []
    for input_file in input_files:
        with open(input_file, 'r', encoding='utf-8') as f:
            data = json.load(f)
            original_keys_ordered.extend(data.keys())

    with open(merged_file, 'r', encoding='utf-8') as f:
        merged_data = json.load(f)
    
    merged_keys_ordered = list(merged_data.keys())

    if original_keys_ordered != merged_keys_ordered:
        print("Key order does not match!")
        # Find the first mismatch
        for i, (original_key, merged_key) in enumerate(zip(original_keys_ordered, merged_keys_ordered)):
            if original_key != merged_key:
                print(f"Mismatch at index {i}: expected {original_key}, got {merged_key}")
                break
        sys.exit(1)
    else:
        print("Key order is correct.")

    # Key preservation verification
    original_keys_set = set(original_keys_ordered)
    merged_keys_set = set(merged_keys_ordered)

    if len(original_keys_ordered) != len(original_keys_set):
        print("Duplicate keys found in source files!")

    if original_keys_set == merged_keys_set:
        print("All keys are preserved. No missing or extra keys.")
    else:
        missing_keys = original_keys_set - merged_keys_set
        extra_keys = merged_keys_set - original_keys_set
        if missing_keys:
            print(f"Missing keys: {missing_keys}")
        if extra_keys:
            print(f"Extra keys: {extra_keys}")
        sys.exit(1)

if __name__ == "__main__":
    main()

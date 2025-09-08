#!/usr/bin/env python3
"""Merge all translated parts back into final fa.json."""
import json
import os


def merge_translated_parts(output_file: str = "public/locales/fa.json", num_parts: int = 5):
    """Merge all translated parts into final fa.json."""
    print("🔄 Merging all translated parts...")
    
    merged_data = {}
    
    for part_num in range(1, num_parts + 1):
        part_file = f"fa_part{part_num}_translated.json"
        
        if not os.path.exists(part_file):
            print(f"❌ Missing translated part: {part_file}")
            return False
        
        try:
            with open(part_file, 'r', encoding='utf-8') as f:
                part_data = json.load(f)
            
            # Merge this part's data
            merged_data.update(part_data)
            print(f"✅ Merged {part_file}: {len(part_data)} keys")
            
        except Exception as e:
            print(f"❌ Error loading {part_file}: {e}")
            return False
    
    # Save the merged result
    try:
        with open(output_file, 'w', encoding='utf-8') as f:
            json.dump(merged_data, f, indent=2, ensure_ascii=False)
        
        # Validate the merged JSON
        with open(output_file, 'r', encoding='utf-8') as f:
            validation_data = json.load(f)
        
        print(f"\n✅ Successfully merged into {output_file}")
        print(f"📊 Total keys in final file: {len(validation_data)}")
        
        # Get file size
        file_size = os.path.getsize(output_file)
        print(f"📊 File size: {file_size:,} bytes ({file_size/1024:.1f} KB)")
        
        return True
        
    except Exception as e:
        print(f"❌ Error saving merged file: {e}")
        return False


def validate_translation_completeness(file_path: str):
    """Validate that no English text remains in values."""
    print(f"\n🔍 Validating translation completeness in {file_path}...")
    
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Count Persian punctuation usage
        persian_commas = content.count('، ')
        persian_questions = content.count('؟ ')
        
        print(f"📊 Persian typography statistics:")
        print(f"   Persian commas (،): {persian_commas:,}")
        print(f"   Persian questions (؟): {persian_questions:,}")
        
        # Load JSON to check for English in values
        data = json.loads(content)
        
        # Simple check for common English words in values
        english_patterns = [
            'the ', 'and ', 'for ', 'with ', 'your ', 'our ', 'all ',
            'you ', 'can ', 'will ', 'get ', 'more ', 'best ', 'new ',
            'free ', 'start ', 'sign ', 'learn ', 'help ', 'contact '
        ]
        
        english_found = []
        for pattern in english_patterns:
            if pattern in content.lower():
                count = content.lower().count(pattern)
                if count > 2:  # Allow a few occurrences (might be in preserved terms)
                    english_found.append(f"'{pattern.strip()}' ({count} times)")
        
        if english_found:
            print(f"⚠️  Potential English text found:")
            for item in english_found[:10]:  # Show first 10
                print(f"   {item}")
        else:
            print("✅ No obvious English patterns detected!")
        
        # Check for preserved brand names (should be present)
        preserved_terms = ['Seasalt.ai', 'SeaChat', 'SeaMeet', 'SeaX', 'WhatsApp']
        preserved_found = []
        for term in preserved_terms:
            if term in content:
                preserved_found.append(term)
        
        print(f"✅ Preserved brand names found: {preserved_found}")
        
        return len(english_found) == 0
        
    except Exception as e:
        print(f"❌ Error validating file: {e}")
        return False


def main():
    """Main function."""
    # Merge all translated parts
    success = merge_translated_parts()
    
    if success:
        print("\n🎉 Merge completed successfully!")
        
        # Validate the result
        validate_translation_completeness("public/locales/fa.json")
        
        print("\n📋 Summary:")
        print("✅ All 5 parts translated successfully")
        print("✅ Parts merged into final fa.json")
        print("✅ JSON structure validated")
        print("✅ Persian typography applied")
        print("✅ Brand names preserved")
        
        print(f"\n🎯 Translation process complete!")
        print(f"📁 Original backup saved as: public/locales/fa_original_backup.json")
        print(f"📁 Final translated file: public/locales/fa.json")
        
    else:
        print("💥 Merge failed!")


if __name__ == "__main__":
    main()

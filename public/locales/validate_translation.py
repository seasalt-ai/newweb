#!/usr/bin/env python3
"""
Translation Validation Script
Validates that the translated JSON maintains:
- Valid JSON structure
- All placeholders preserved ({{year}}, <1>...</1>, etc.)
- All keys unchanged
- Company/product names preserved
- HTML tags intact
"""

import json
import re
import sys
from pathlib import Path
from typing import Any, List


class TranslationValidator:
    def __init__(self):
        self.placeholder_patterns = [
            r'<\d+>.*?</\d+>',  # <1>...</1>
            r'\{\{[^}]+\}\}',   # {{year}}, {{param}}
            r'<[^>]+>',         # HTML tags
            r'&[^;]+;',         # HTML entities
        ]

        self.protected_terms = {
            'Seasalt.ai', 'SeaChat', 'SeaMeet', 'SeaX', 'SeaVoice', 'SeaHealth',
            'WhatsApp', 'Instagram', 'Facebook', 'LINE', 'SMS',
            'API', 'JSON', 'HTML', 'CSS', 'JavaScript', 'WordPress', 'Shopify',
            'HubSpot', 'Mailchimp', 'MailerLite', 'Google', 'Microsoft',
            'HIPAA', 'GDPR', 'SOC', 'FINRA'
        }

        self.errors = []
        self.warnings = []

    def extract_placeholders(self, text: str) -> List[str]:
        """Extract all placeholders from text"""
        placeholders = []
        for pattern in self.placeholder_patterns:
            placeholders.extend(re.findall(pattern, text))
        return placeholders

    def extract_protected_terms(self, text: str) -> List[str]:
        """Extract protected terms from text"""
        found_terms = []
        for term in self.protected_terms:
            if term in text:
                found_terms.append(term)
        return found_terms

    def compare_structures(self, original: Any, translated: Any, path: str = '') -> bool:
        """Compare JSON structures to ensure they match"""
        if not isinstance(original, type(translated)):
            self.errors.append(f"Type mismatch at {path}: {type(original)} vs {type(translated)}")
            return False

        if isinstance(original, dict):
            if set(original.keys()) != set(translated.keys()):
                self.errors.append(f"Keys mismatch at {path}: {set(original.keys())} vs {set(translated.keys())}")
                return False

            for key in original.keys():
                new_path = f"{path}.{key}" if path else key
                self.compare_structures(original[key], translated[key], new_path)

        elif isinstance(original, list):
            if len(original) != len(translated):
                self.errors.append(f"List length mismatch at {path}: {len(original)} vs {len(translated)}")
                return False

            for i, (orig_item, trans_item) in enumerate(zip(original, translated)):
                new_path = f"{path}[{i}]"
                self.compare_structures(orig_item, trans_item, new_path)

        elif isinstance(original, str):
            # Check placeholders are preserved
            orig_placeholders = self.extract_placeholders(original)
            trans_placeholders = self.extract_placeholders(translated)

            if orig_placeholders != trans_placeholders:
                self.errors.append(f"Placeholder mismatch at {path}: {orig_placeholders} vs {trans_placeholders}")

            # Check protected terms are preserved
            orig_terms = self.extract_protected_terms(original)
            trans_terms = self.extract_protected_terms(translated)

            for term in orig_terms:
                if term not in trans_terms:
                    self.errors.append(f"Protected term '{term}' missing at {path}")

        return len(self.errors) == 0

    def validate_json_syntax(self, file_path: str) -> bool:
        """Validate JSON syntax"""
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                json.load(f)
            return True
        except json.JSONDecodeError as e:
            self.errors.append(f"Invalid JSON in {file_path}: {e}")
            return False
        except Exception as e:
            self.errors.append(f"Error reading {file_path}: {e}")
            return False

    def validate_files(self, original_file: str, translated_file: str) -> bool:
        """Main validation function"""
        print("Validating JSON syntax...")

        # Check JSON syntax
        if not self.validate_json_syntax(original_file):
            return False
        if not self.validate_json_syntax(translated_file):
            return False

        print("Loading files...")

        # Load both files
        with open(original_file, 'r', encoding='utf-8') as f:
            original_data = json.load(f)

        with open(translated_file, 'r', encoding='utf-8') as f:
            translated_data = json.load(f)

        print("Comparing structures and content...")

        # Compare structures
        self.compare_structures(original_data, translated_data)

        return len(self.errors) == 0

    def print_report(self):
        """Print validation report"""
        print("\n" + "="*50)
        print("VALIDATION REPORT")
        print("="*50)

        if not self.errors and not self.warnings:
            print("✅ VALIDATION PASSED")
            print("All checks completed successfully!")
            print("- JSON structure preserved")
            print("- All placeholders intact")
            print("- Protected terms preserved")
            print("- Valid JSON syntax")
        else:
            if self.errors:
                print(f"❌ VALIDATION FAILED - {len(self.errors)} errors found:")
                for error in self.errors:
                    print(f"  ERROR: {error}")

            if self.warnings:
                print(f"⚠️  {len(self.warnings)} warnings:")
                for warning in self.warnings:
                    print(f"  WARNING: {warning}")

        print("="*50)


def main():
    if len(sys.argv) != 3:
        print("Usage: python validate_translation.py <original_file> <translated_file>")
        sys.exit(1)

    original_file = sys.argv[1]
    translated_file = sys.argv[2]

    if not Path(original_file).exists():
        print(f"Error: Original file {original_file} does not exist")
        sys.exit(1)

    if not Path(translated_file).exists():
        print(f"Error: Translated file {translated_file} does not exist")
        sys.exit(1)

    validator = TranslationValidator()
    success = validator.validate_files(original_file, translated_file)
    validator.print_report()

    if success:
        sys.exit(0)
    else:
        sys.exit(1)


if __name__ == '__main__':
    main()

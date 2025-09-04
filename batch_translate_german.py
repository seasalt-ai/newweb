#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import json
import re
import sys
import time
from typing import Tuple, Any
import logging

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# File paths
JSON_FILE = "public/locales/de.json"
OUTPUT_FILE = "public/locales/de.json"

# Key phrases that MUST be translated
MUST_TRANSLATE_PHRASES = {
    # Common UI text
    "Read More": "Weiterlesen",
    "Learn More": "Mehr erfahren", 
    "Sign Up": "Registrieren",
    "Sign In": "Anmelden",
    "Sign Out": "Abmelden",
    "Get Started": "Loslegen",
    "Try Now": "Jetzt testen",
    "Contact Us": "Kontaktieren",
    "Contact Sales": "Vertrieb kontaktieren",
    "Schedule Demo": "Demo planen",
    "Book Demo": "Demo buchen",
    "Book a Demo": "Eine Demo buchen",
    "Start Free": "Kostenlos starten",
    "Start Free Trial": "Kostenlose Testversion starten",
    "Start Now": "Jetzt starten",
    "Start Your": "Beginnen Sie Ihre",
    "Join Now": "Jetzt beitreten",
    "View All": "Alle anzeigen",
    "See All": "Alle ansehen",
    "Show More": "Mehr anzeigen",
    "Show Less": "Weniger anzeigen",
    "Watch Demo": "Demo ansehen",
    "See Demo": "Demo ansehen",
    "View Demo": "Demo anzeigen",
    
    # Status/States
    "Most Popular": "Am beliebtesten",
    "Best For": "Am besten für",
    "Starting Price": "Startpreis",
    "Starting at": "Ab",
    "Per Month": "Pro Monat",
    "Per User": "Pro Benutzer",
    "Per Year": "Pro Jahr",
    "Monthly": "Monatlich",
    "Yearly": "Jährlich",
    "Annually": "Jährlich",
    "Free Forever": "Für immer kostenlos",
    "No Credit Card Required": "Keine Kreditkarte erforderlich",
    
    # Features/Sections
    "Key Features": "Hauptfunktionen",
    "Key Benefits": "Hauptvorteile",
    "How It Works": "So funktioniert es",
    "Use Cases": "Anwendungsfälle",
    "Customer Support": "Kundensupport",
    "Customer Service": "Kundenservice",
    "Technical Support": "Technischer Support",
    "Live Support": "Live-Support",
    "Email Support": "E-Mail-Support",
    "Phone Support": "Telefonsupport",
    "24/7 Support": "24/7-Support",
    
    # Business Terms
    "Small Business": "Kleine Unternehmen",
    "Small Businesses": "Kleine Unternehmen",
    "Medium Business": "Mittlere Unternehmen",
    "Large Business": "Große Unternehmen",
    "Enterprise": "Unternehmen",
    "Enterprises": "Unternehmen",
    "Companies": "Unternehmen",
    "Businesses": "Unternehmen",
    "Organizations": "Organisationen",
}

def find_and_replace_english(data, path=""):
    """Find and replace English text with German translations."""
    count = 0
    
    if isinstance(data, dict):
        result = {}
        for key, value in data.items():
            new_path = f"{path}.{key}" if path else key
            result[key], sub_count = find_and_replace_english(value, new_path)
            count += sub_count
        return result, count
        
    elif isinstance(data, list):
        result = []
        for i, item in enumerate(data):
            new_path = f"{path}[{i}]"
            new_item, sub_count = find_and_replace_english(item, new_path)
            result.append(new_item)
            count += sub_count
        return result, count
        
    elif isinstance(data, str):
        original = data
        modified = data
        
        # Check each phrase and replace if found
        for eng, ger in MUST_TRANSLATE_PHRASES.items():
            # Case-insensitive replacement while preserving original case
            if eng.lower() in modified.lower():
                # Find all occurrences
                pattern = re.compile(re.escape(eng), re.IGNORECASE)
                matches = pattern.finditer(modified)
                
                for match in reversed(list(matches)):
                    original_text = match.group()
                    # Preserve case
                    if original_text.isupper():
                        replacement = ger.upper()
                    elif original_text[0].isupper():
                        replacement = ger[0].upper() + ger[1:]
                    else:
                        replacement = ger
                    
                    modified = modified[:match.start()] + replacement + modified[match.end():]
        
        if modified != original:
            logger.info(f"Replaced in {path}: '{original[:80]}...'")
            count += 1
            
        return modified, count
        
    else:
        return data, 0

def main():
    """Main entry point."""
    logger.info("Starting batch German translation...")
    
    # Load JSON
    logger.info(f"Loading {JSON_FILE}...")
    with open(JSON_FILE, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    # Process translations
    logger.info("Applying German translations...")
    start_time = time.time()
    
    translated_data, translation_count = find_and_replace_english(data)
    
    # Save output
    logger.info(f"Saving to {OUTPUT_FILE}...")
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        json.dump(translated_data, f, ensure_ascii=False, indent=2)
    
    elapsed = time.time() - start_time
    
    # Summary
    logger.info("=" * 50)
    logger.info("Batch Translation Complete!")
    logger.info(f"Total replacements: {translation_count}")
    logger.info(f"Time elapsed: {elapsed:.2f} seconds")
    logger.info(f"Output saved to: {OUTPUT_FILE}")
    
    # Validate
    logger.info("Validating JSON...")
    with open(OUTPUT_FILE, 'r', encoding='utf-8') as f:
        json.load(f)
    logger.info("✅ JSON is valid!")

if __name__ == "__main__":
    main()

#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import json
import re
import sys
from typing import Dict, Any, Set, List, Tuple
from deep_translator import GoogleTranslator
from langdetect import detect
import logging
from pathlib import Path
import time

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# File paths
JSON_FILE = "public/locales/de.json"
BACKUP_FILE = "public/locales/de.json.backup"
OUTPUT_FILE = "public/locales/de_translated.json"

# Specific terms that need translation with their German equivalents
TRANSLATION_DICT = {
    # Navigation & UI
    "Products": "Produkte",
    "Solutions": "Lösungen",
    "Pricing": "Preise",
    "Blog": "Blog",
    "Login": "Anmelden",
    "Sign Up": "Registrieren",
    "Start for Free": "Kostenlos starten",
    "Book a Demo": "Demo buchen",
    "Schedule Demo": "Demo planen",
    "Get Started": "Loslegen",
    "Learn More": "Mehr erfahren",
    "Try Now": "Jetzt testen",
    "Contact Us": "Kontaktieren",
    "Contact Sales": "Vertrieb kontaktieren",
    
    # Features
    "Features": "Funktionen",
    "Key Features": "Hauptfunktionen",
    "Advanced Features": "Erweiterte Funktionen",
    "Enterprise-Grade Security": "Unternehmenssicherheit",
    "Real-time": "Echtzeit",
    "Automated": "Automatisiert",
    "Integration": "Integration",
    "Integrations": "Integrationen",
    "Analytics": "Analysen",
    "Dashboard": "Dashboard",
    "Reports": "Berichte",
    
    # Support & Service
    "Customer Support": "Kundensupport",
    "Customer Service": "Kundenservice",
    "Support": "Unterstützung",
    "Help": "Hilfe",
    "24/7 Support": "24/7-Support",
    "Live Chat": "Live-Chat",
    "Phone Support": "Telefonsupport",
    "Email Support": "E-Mail-Support",
    
    # Business Terms
    "Small Business": "Kleine Unternehmen",
    "Enterprise": "Unternehmen",
    "Companies": "Unternehmen",
    "Businesses": "Unternehmen",
    "Organizations": "Organisationen",
    "Teams": "Teams",
    "Agents": "Agenten",
    "Users": "Benutzer",
    "Customers": "Kunden",
    "Clients": "Kunden",
    
    # Marketing & Sales
    "Marketing": "Marketing",
    "Sales": "Vertrieb",
    "Lead Generation": "Lead-Generierung",
    "Campaign": "Kampagne",
    "Campaigns": "Kampagnen",
    "Conversion": "Konversion",
    "Revenue": "Umsatz",
    "ROI": "ROI",
    "Growth": "Wachstum",
    
    # Communication
    "Messages": "Nachrichten",
    "Conversations": "Gespräche",
    "Chat": "Chat",
    "Voice": "Sprache",
    "Video": "Video",
    "Call": "Anruf",
    "Calls": "Anrufe",
    "Phone Calls": "Telefonanrufe",
    "Text": "Text",
    "Email": "E-Mail",
    
    # Time & Availability
    "Available": "Verfügbar",
    "Availability": "Verfügbarkeit",
    "Hours": "Stunden",
    "Minutes": "Minuten",
    "Seconds": "Sekunden",
    "Daily": "Täglich",
    "Weekly": "Wöchentlich",
    "Monthly": "Monatlich",
    "Yearly": "Jährlich",
    
    # Actions
    "Create": "Erstellen",
    "Edit": "Bearbeiten",
    "Delete": "Löschen",
    "Save": "Speichern",
    "Cancel": "Abbrechen",
    "Submit": "Senden",
    "Send": "Senden",
    "Upload": "Hochladen",
    "Download": "Herunterladen",
    "Export": "Exportieren",
    "Import": "Importieren",
    "Connect": "Verbinden",
    "Disconnect": "Trennen",
    "Enable": "Aktivieren",
    "Disable": "Deaktivieren",
    
    # Status & States
    "Active": "Aktiv",
    "Inactive": "Inaktiv",
    "Online": "Online",
    "Offline": "Offline",
    "Pending": "Ausstehend",
    "Completed": "Abgeschlossen",
    "Failed": "Fehlgeschlagen",
    "Success": "Erfolg",
    "Error": "Fehler",
    "Warning": "Warnung",
    
    # Pricing & Plans
    "Free": "Kostenlos",
    "Premium": "Premium",
    "Pro": "Pro",
    "Basic": "Basis",
    "Standard": "Standard",
    "Professional": "Professional",
    "Trial": "Testversion",
    "Pricing": "Preise",
    "Plan": "Plan",
    "Plans": "Pläne",
    "Subscription": "Abonnement",
    "Billing": "Abrechnung",
    "Payment": "Zahlung",
    "Invoice": "Rechnung",
    
    # Common Phrases
    "Get Started": "Loslegen",
    "Try for Free": "Kostenlos testen",
    "Start Free Trial": "Kostenlose Testversion starten",
    "No Credit Card Required": "Keine Kreditkarte erforderlich",
    "Cancel Anytime": "Jederzeit kündbar",
    "Money Back Guarantee": "Geld-zurück-Garantie",
    "Trusted by": "Vertraut von",
    "Used by": "Genutzt von",
    "Loved by": "Geliebt von",
    "Join": "Beitreten",
    "Sign In": "Anmelden",
    "Sign Out": "Abmelden",
    "Sign Up Now": "Jetzt registrieren",
    "Create Account": "Konto erstellen",
    "Forgot Password": "Passwort vergessen",
    "Reset Password": "Passwort zurücksetzen",
    
    # Sections
    "Overview": "Übersicht",
    "Benefits": "Vorteile",
    "How It Works": "So funktioniert's",
    "Use Cases": "Anwendungsfälle",
    "Industries": "Branchen",
    "Resources": "Ressourcen",
    "Documentation": "Dokumentation",
    "API Reference": "API-Referenz",
    "Knowledge Base": "Wissensdatenbank",
    "FAQ": "FAQ",
    "Terms of Service": "Nutzungsbedingungen",
    "Privacy Policy": "Datenschutzrichtlinie",
    "Security": "Sicherheit",
    "Compliance": "Compliance",
}

def should_translate(text: str) -> bool:
    """Check if text needs translation."""
    if not text or not isinstance(text, str):
        return False
    
    # Skip if too short
    if len(text.strip()) < 2:
        return False
    
    # Skip URLs, emails, phone numbers
    if re.match(r'^https?://', text) or '@' in text or re.match(r'^[\+\d\s\-\(\)]+$', text):
        return False
    
    # Skip placeholders
    if re.match(r'^__[a-zA-Z0-9]+__$', text) or re.match(r'^{\{.*\}\}$', text):
        return False
    
    # Skip if mostly numbers or special characters
    alnum_ratio = sum(c.isalnum() for c in text) / len(text) if text else 0
    if alnum_ratio < 0.3:
        return False
    
    # Check if it's English (simple heuristic)
    english_words = ['the', 'is', 'are', 'was', 'were', 'be', 'been', 'being', 
                     'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would',
                     'should', 'could', 'may', 'might', 'must', 'can', 'could',
                     'for', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'from',
                     'with', 'by', 'about', 'into', 'through', 'during', 'before',
                     'after', 'above', 'below', 'between', 'under', 'your', 'our',
                     'their', 'all', 'new', 'more', 'free', 'best', 'now', 'get',
                     'contact', 'support', 'service', 'business', 'email', 'phone']
    
    text_lower = text.lower()
    contains_english = any(word in text_lower for word in english_words)
    
    return contains_english

def translate_with_dict(text: str) -> str:
    """Translate using the predefined dictionary first, then fallback to API."""
    # First try exact match
    if text in TRANSLATION_DICT:
        return TRANSLATION_DICT[text]
    
    # Try case-insensitive match
    text_lower = text.lower()
    for eng, ger in TRANSLATION_DICT.items():
        if eng.lower() == text_lower:
            # Preserve original case pattern if possible
            if text.isupper():
                return ger.upper()
            elif text[0].isupper():
                return ger[0].upper() + ger[1:]
            return ger
    
    # Check for partial matches and replace
    result = text
    for eng, ger in sorted(TRANSLATION_DICT.items(), key=lambda x: len(x[0]), reverse=True):
        if eng in result:
            result = result.replace(eng, ger)
    
    return result

def process_json_value(value: Any, path: str = "") -> Tuple[Any, int]:
    """Process JSON value and return translated version with count of translations."""
    count = 0
    
    if isinstance(value, dict):
        result = {}
        for k, v in value.items():
            new_path = f"{path}.{k}" if path else k
            result[k], sub_count = process_json_value(v, new_path)
            count += sub_count
        return result, count
    
    elif isinstance(value, list):
        result = []
        for i, item in enumerate(value):
            new_path = f"{path}[{i}]"
            translated_item, sub_count = process_json_value(item, new_path)
            result.append(translated_item)
            count += sub_count
        return result, count
    
    elif isinstance(value, str):
        if should_translate(value):
            translated = translate_with_dict(value)
            if translated != value:
                logger.info(f"Translated {path}: '{value}' -> '{translated}'")
                count += 1
            return translated, count
        return value, 0
    
    else:
        return value, 0

def main():
    """Main entry point."""
    logger.info("Starting German translation optimization...")
    
    # Check backup
    if not Path(BACKUP_FILE).exists():
        logger.error(f"Backup file not found: {BACKUP_FILE}")
        return 1
    
    # Load JSON
    logger.info(f"Loading {JSON_FILE}...")
    with open(JSON_FILE, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    # Process translations
    logger.info("Processing translations...")
    start_time = time.time()
    
    translated_data, translation_count = process_json_value(data)
    
    elapsed = time.time() - start_time
    logger.info(f"Translated {translation_count} strings in {elapsed:.2f} seconds")
    
    # Save output
    logger.info(f"Saving to {OUTPUT_FILE}...")
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        json.dump(translated_data, f, ensure_ascii=False, indent=2)
    
    # Validate
    logger.info("Validating output JSON...")
    with open(OUTPUT_FILE, 'r', encoding='utf-8') as f:
        json.load(f)
    
    logger.info("✅ Translation optimization completed successfully!")
    logger.info(f"Output saved to: {OUTPUT_FILE}")
    logger.info(f"Total translations: {translation_count}")
    
    return 0

if __name__ == "__main__":
    sys.exit(main())

#!/usr/bin/env python3
import json
import re
from deep_translator import GoogleTranslator
import time
import sys

# Comprehensive offline dictionary for common terms
OFFLINE_DICT = {
    # Common UI terms
    "Home": "Startseite",
    "About": "Über uns",
    "Contact": "Kontakt",
    "Products": "Produkte",
    "Services": "Dienstleistungen",
    "Solutions": "Lösungen",
    "Features": "Funktionen",
    "Pricing": "Preise",
    "Plans": "Pläne",
    "Blog": "Blog",
    "News": "Nachrichten",
    "Support": "Support",
    "Help": "Hilfe",
    "Documentation": "Dokumentation",
    "Login": "Anmelden",
    "Sign Up": "Registrieren",
    "Sign In": "Anmelden",
    "Sign Out": "Abmelden",
    "Logout": "Abmelden",
    "Dashboard": "Dashboard",
    "Settings": "Einstellungen",
    "Profile": "Profil",
    "Account": "Konto",
    "Password": "Passwort",
    "Email": "E-Mail",
    "Phone": "Telefon",
    "Name": "Name",
    "Username": "Benutzername",
    "Search": "Suchen",
    "Save": "Speichern",
    "Cancel": "Abbrechen",
    "Delete": "Löschen",
    "Edit": "Bearbeiten",
    "Update": "Aktualisieren",
    "Submit": "Absenden",
    "Send": "Senden",
    "Back": "Zurück",
    "Next": "Weiter",
    "Previous": "Zurück",
    "Continue": "Fortfahren",
    "Finish": "Fertig",
    "Close": "Schließen",
    "Open": "Öffnen",
    "Download": "Herunterladen",
    "Upload": "Hochladen",
    "Share": "Teilen",
    "Copy": "Kopieren",
    "Paste": "Einfügen",
    "Cut": "Ausschneiden",
    "Select": "Auswählen",
    "All": "Alle",
    "None": "Keine",
    "Yes": "Ja",
    "No": "Nein",
    "OK": "OK",
    "Error": "Fehler",
    "Warning": "Warnung",
    "Info": "Info",
    "Success": "Erfolg",
    "Failed": "Fehlgeschlagen",
    "Loading": "Laden",
    "Please wait": "Bitte warten",
    
    # Business terms
    "Company": "Unternehmen",
    "Business": "Geschäft",
    "Enterprise": "Unternehmen",
    "Customer": "Kunde",
    "Client": "Kunde",
    "User": "Benutzer",
    "Team": "Team",
    "Employee": "Mitarbeiter",
    "Manager": "Manager",
    "Sales": "Vertrieb",
    "Marketing": "Marketing",
    "Support": "Support",
    "Service": "Service",
    "Product": "Produkt",
    "Solution": "Lösung",
    "Platform": "Plattform",
    "System": "System",
    "Software": "Software",
    "Application": "Anwendung",
    "Tool": "Werkzeug",
    "Feature": "Funktion",
    "Integration": "Integration",
    "Automation": "Automatisierung",
    "Analytics": "Analytik",
    "Report": "Bericht",
    "Data": "Daten",
    "Information": "Information",
    "Security": "Sicherheit",
    "Privacy": "Datenschutz",
    "Compliance": "Compliance",
    "Quality": "Qualität",
    "Performance": "Leistung",
    "Efficiency": "Effizienz",
    "Productivity": "Produktivität",
    
    # Actions
    "Learn More": "Mehr erfahren",
    "Get Started": "Loslegen",
    "Try Free": "Kostenlos testen",
    "Start Free Trial": "Kostenlose Testversion starten",
    "Request Demo": "Demo anfordern",
    "Contact Sales": "Vertrieb kontaktieren",
    "View All": "Alle anzeigen",
    "See More": "Mehr anzeigen",
    "Read More": "Weiterlesen",
    "Show Less": "Weniger anzeigen",
    "Learn how": "Erfahren Sie wie",
    
    # Time
    "Today": "Heute",
    "Yesterday": "Gestern",
    "Tomorrow": "Morgen",
    "Week": "Woche",
    "Month": "Monat",
    "Year": "Jahr",
    "Date": "Datum",
    "Time": "Zeit",
    "Hour": "Stunde",
    "Minute": "Minute",
    "Second": "Sekunde",
    
    # Status
    "Active": "Aktiv",
    "Inactive": "Inaktiv",
    "Pending": "Ausstehend",
    "Approved": "Genehmigt",
    "Rejected": "Abgelehnt",
    "Complete": "Vollständig",
    "Incomplete": "Unvollständig",
    "Available": "Verfügbar",
    "Unavailable": "Nicht verfügbar",
    "Online": "Online",
    "Offline": "Offline",
    "Connected": "Verbunden",
    "Disconnected": "Getrennt",
    
    # Common phrases
    "Welcome to": "Willkommen bei",
    "Thank you": "Vielen Dank",
    "You're welcome": "Gern geschehen",
    "Please": "Bitte",
    "Sorry": "Entschuldigung",
    "Excuse me": "Entschuldigung",
    "How can we help?": "Wie können wir helfen?",
    "Get in touch": "Kontaktieren Sie uns",
    "Stay updated": "Bleiben Sie auf dem Laufenden",
    "Join us": "Treten Sie uns bei",
    "Follow us": "Folgen Sie uns",
    "Subscribe": "Abonnieren",
    "Unsubscribe": "Abmelden"
}

def should_preserve(text):
    """Check if text should be preserved (not translated)"""
    if not isinstance(text, str):
        return True
    
    if not text.strip():
        return True
    
    # Preserve specific exact matches
    preserve_exact = [
        'Seasalt.ai', 'SeaChat', 'SeaMeet', 'SeaX', 'SeaVoice', 'SeaSuite', 'SeaHealth',
        'WhatsApp', 'Instagram', 'Facebook', 'Messenger', 'LINE', 'Line',
        'SMS', 'API', 'CRM', 'HIPAA', 'GDPR', 'SOC 2', '10DLC', 'A2P',
        'Seattle', 'WA', 'USA', 'API References', 'Product Wiki', 'xxxxx', '8XX'
    ]
    
    if text.strip() in preserve_exact:
        return True
    
    # Preserve patterns
    if (re.match(r'^https?://', text) or 
        re.match(r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$', text) or
        re.match(r'^\{\{[^}]+\}\}$', text) or
        re.match(r'^#[A-Z0-9]+$', text) or
        re.match(r'^\+\d+[\s\-\(\)0-9A-Z]+$', text)):
        return True
    
    return False

def is_already_german(text):
    """Check if text contains German characters (already translated)"""
    if not isinstance(text, str):
        return False
    
    # Check for common German characters or words
    german_indicators = ['ä', 'ö', 'ü', 'ß', 'Ä', 'Ö', 'Ü']
    for char in german_indicators:
        if char in text:
            return True
    
    # Check for common German words
    german_words = ['und', 'der', 'die', 'das', 'ist', 'für', 'mit', 'von', 'zu', 'auf']
    words = text.lower().split()
    for word in german_words:
        if word in words:
            return True
    
    return False

def try_offline_translation(text):
    """Try to translate using offline dictionary"""
    # Direct match
    if text in OFFLINE_DICT:
        return OFFLINE_DICT[text]
    
    # Case-insensitive match
    text_lower = text.lower()
    for key, value in OFFLINE_DICT.items():
        if key.lower() == text_lower:
            # Preserve original case pattern
            if text.isupper():
                return value.upper()
            elif text[0].isupper():
                return value[0].upper() + value[1:]
            return value
    
    return None

def translate_hybrid(text, translator=None):
    """Try offline first, then online if needed"""
    # First try offline
    offline_result = try_offline_translation(text)
    if offline_result:
        return offline_result
    
    # Fall back to online if translator available
    if translator:
        try:
            return translator.translate(text)
        except:
            pass
    
    return text

def process_file():
    """Process the file with hybrid translation"""
    print("=== Hybrid Translation (Offline + Online) ===\n")
    
    # Load JSON
    print("Loading de.json...")
    with open('public/locales/de.json', 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    # Try to initialize online translator
    translator = None
    try:
        print("Initializing online translator for fallback...")
        translator = GoogleTranslator(source='en', target='de')
        test = translator.translate("test")
        print("Online translator ready as fallback\n")
    except:
        print("Online translator not available, using offline only\n")
    
    translated_count = 0
    offline_count = 0
    online_count = 0
    skipped_count = 0
    
    def process_value(value):
        nonlocal translated_count, offline_count, online_count, skipped_count
        
        if isinstance(value, str):
            # Skip if should preserve or already German
            if should_preserve(value) or is_already_german(value):
                skipped_count += 1
                return value
            
            # Try offline first
            offline_result = try_offline_translation(value)
            if offline_result:
                offline_count += 1
                translated_count += 1
                if translated_count % 50 == 0:
                    print(f"Progress: {translated_count} translated ({offline_count} offline, {online_count} online)")
                return offline_result
            
            # Fall back to online
            if translator:
                try:
                    result = translator.translate(value)
                    if result and result != value:
                        online_count += 1
                        translated_count += 1
                        if translated_count % 50 == 0:
                            print(f"Progress: {translated_count} translated ({offline_count} offline, {online_count} online)")
                        time.sleep(0.1)  # Small delay for online translations
                        return result
                except:
                    pass
            
            return value
            
        elif isinstance(value, list):
            return [process_value(item) for item in value]
        elif isinstance(value, dict):
            return {k: process_value(v) for k, v in value.items()}
        else:
            return value
    
    print("Processing translations...")
    data = process_value(data)
    
    print(f"\nResults:")
    print(f"  Offline translations: {offline_count}")
    print(f"  Online translations: {online_count}")
    print(f"  Total translated: {translated_count}")
    print(f"  Skipped: {skipped_count}")
    
    # Save
    print("\nSaving updated de.json...")
    with open('public/locales/de.json', 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    
    print("✅ Translation completed!")
    
    # Validate
    with open('public/locales/de.json', 'r', encoding='utf-8') as f:
        json.load(f)
    print("✅ JSON is valid!")

if __name__ == "__main__":
    process_file()

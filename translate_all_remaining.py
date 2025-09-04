#!/usr/bin/env python3
"""
Comprehensive translation script to find and translate ALL remaining English text in de.json
"""

import json
import re
from pathlib import Path

# Comprehensive list of ALL remaining English phrases that need translation
translations = {
    # Fix mixed English-German phrases
    "Vergichen Sie uS": "Vergleichen Sie uns",
    "Alle Kanäle Überschicht": "Alle Kanäle Übersicht",
    "Alle Vergleiche über": "Alle Vergleiche Übersicht",
    "Registrieren Neinw": "Jetzt registrieren",
    "Kurzer Code": "Kurzcode",
    "Politische Kampagnen": "Politische Kampagnen",
    "Jeden Kunden Vereinen": "Jeden Kunden vereinen",
    "Rufen Sie an, __p7__ und chatten Sie": "Anrufen, __p7__ und chatten",
    "in einem einfachen Posteingang.": "in einem einfachen Posteingang.",
    "Buchen Sie eine Demo": "Demo buchen",
    
    # Main sections
    "Unified Inbox": "Einheitlicher Posteingang",
    "Native Sprache & WhatsApp Integration": "Native Sprach- & WhatsApp-Integration",
    "Contact Center Operations": "Contact-Center-Betrieb",
    "Key Funktionen": "Hauptfunktionen",
    
    # Fix broken German
    "Verbinden Sie Ihren Kanäle": "Verbinden Sie Ihre Kanäle",
    "Vereinigen Sie Ihr Team": "Vereinigen Sie Ihr Team",
    "Registrieren Neinw": "Jetzt registrieren",
    
    # Company/brand names (keep as is but fix formatting)
    "Facebook Messenger": "Facebook Messenger",
    "WhatsApp": "WhatsApp",
    "Instagram": "Instagram",
    "Microsoft Teams": "Microsoft Teams",
    
    # Feature descriptions
    "AI SpracheBot & Chatbot": "KI-Sprachbot & Chatbot",
    "Omni-Channel-Copiloted-Lösung": "Omni-Channel-Copilot-Lösung",
    
    # Pricing & plans
    "Truly Kostenlos": "Wirklich kostenlos",
    "Simple Per-User": "Einfach pro Benutzer",
    "Per-User + Add-Ons": "Pro Benutzer + Zusatzmodule",
    "Complex Tiers": "Komplexe Stufen",
    
    # Support & features
    "24/7 virtuelle Rezeptionistin": "24/7 Virtuelle Rezeptionistin",
    "Smart Auto Antworten": "Intelligente automatische Antworten",
    
    # Business categories
    "KMU-Inhaber": "KMU-Inhaber",
    "E-Commerce & Einzelhandel": "E-Commerce & Einzelhandel",
    
    # Actions & UI elements
    "Loslegen Kostenlos": "Kostenlos starten",
    "Starten Sie Kostenlos Neinw": "Jetzt kostenlos starten",
    "Ansehen Demo": "Demo ansehen",
    "Planen Sie Demo": "Demo planen",
    
    # Channels
    "TelefonanRufe": "Telefonanrufe",
    "Website-Chat": "Website-Chat",
    
    # More fixes for broken German
    "Vergichen Sie uS": "Vergleichen Sie uns",
    "Muttzungsbedingungen": "Nutzungsbedingungen",
    "Kariere": "Karriere",
    "Bist du bereit": "Bist du bereit",
    "Registrieren für Kostenlos": "Kostenlos registrieren",
    "Gemacht MIT": "Gemacht mit",
    "in derstadt": "in der Stadt",
    
    # All the "Key Features" type headings
    "Key Features": "Hauptfunktionen",
    "Key Functionality": "Hauptfunktionalität",
    
    # Fix all instances of broken negation
    "Neinw": "Jetzt",
    "NEIN-Komplex": "Keine komplexe",
    "NEIN-CODE": "Kein Code",
    "NEIN-CODIERUNG": "Keine Codierung",
    
    # Common English words that appear
    "Stay Updated": "Bleiben Sie auf dem Laufenden",
    "Learn More": "Mehr erfahren",
    "Get Started": "Loslegen",
    "Start Free": "Kostenlos starten",
    "View All": "Alle anzeigen",
    "See More": "Mehr sehen",
    "Contact Us": "Kontaktieren Sie uns",
    "Sign Up": "Registrieren",
    "Sign In": "Anmelden",
    "Learn More": "Mehr erfahren",
    
    # Fix more mixed language issues
    "Vertast & Marketing": "Vertrieb & Marketing",
    "kundensupport": "Kundensupport",
    "Ki & Automatisierung": "KI & Automatisierung",
    
    # Platform specific
    "Shopify": "Shopify",
    "WordPress": "WordPress",
    "Wix": "Wix",
    "HubSpot": "HubSpot",
    "Salesforce": "Salesforce",
    
    # More comprehensive fixes
    "Response Time": "Antwortzeit",
    "Customer Satisfaction": "Kundenzufriedenheit",
    "Cost Breakdown": "Kostenaufschlüsselung",
    "Performance": "Leistung",
    "Analytics": "Analysen",
    "Integrations": "Integrationen",
    "Features": "Funktionen",
    "Pricing": "Preise",
    "Solutions": "Lösungen",
    "Industries": "Branchen",
    "Channels": "Kanäle",
    "Support": "Support",
    "Documentation": "Dokumentation",
    "Resources": "Ressourcen",
    "About": "Über uns",
    "Blog": "Blog",
    "Contact": "Kontakt",
    "Terms": "Bedingungen",
    "Privacy": "Datenschutz",
    "Security": "Sicherheit",
    
    # Fix the "Simple" text I saw
    "Simple": "Einfach",
    "Modern": "Modern",
    "Enterprise": "Unternehmen",
    "Professional": "Professionell",
    "Advanced": "Erweitert",
    "Basic": "Basis",
    "Premium": "Premium",
    "Ultimate": "Ultimate",
    
    # Modal and dialog text
    "Close": "Schließen",
    "Cancel": "Abbrechen",
    "Save": "Speichern",
    "Delete": "Löschen",
    "Edit": "Bearbeiten",
    "Update": "Aktualisieren",
    "Submit": "Absenden",
    "Confirm": "Bestätigen",
    "Back": "Zurück",
    "Next": "Weiter",
    "Previous": "Zurück",
    "Finish": "Fertig",
    "Done": "Fertig",
    "OK": "OK",
    "Yes": "Ja",
    "No": "Nein",
    
    # Time related
    "Daily": "Täglich",
    "Weekly": "Wöchentlich",
    "Monthly": "Monatlich",
    "Yearly": "Jährlich",
    "Annually": "Jährlich",
    "Today": "Heute",
    "Yesterday": "Gestern",
    "Tomorrow": "Morgen",
    "Now": "Jetzt",
    
    # Status messages
    "Loading": "Lädt",
    "Saving": "Speichert",
    "Processing": "Verarbeitet",
    "Pending": "Ausstehend",
    "Complete": "Abgeschlossen",
    "Success": "Erfolg",
    "Error": "Fehler",
    "Warning": "Warnung",
    "Info": "Info",
    
    # More comprehensive list based on the patterns found
    "All-in-One-Contact Center": "All-in-One-Kontaktzentrum",
    "Omni-Channel Copiloted Contact Center": "Omni-Channel-Copilot-Kontaktzentrum",
    "Lead-Generierung": "Lead-Generierung",
    "Marketing-AutomatiSierung": "Marketing-Automatisierung",
    "TerminerNernerungen": "Terminerinnerungen",
    "NeIntfallwarnungen": "Notfallwarnungen",
    
    # Fix all the broken compound words
    "Fungionen": "Funktionen",
    "Muttzungsbedingungen": "Nutzungsbedingungen",
    "Kariere": "Karriere",
    "Vesundhenswesen": "Gesundheitswesen",
    "Gerundheitswesen": "Gesundheitswesen",
    "SeaGesundheit": "SeaHealth",
    
    # Common patterns
    "Wir Sind": "Wir sind",
    "Sie Können": "Sie können",
    "Es Ist": "Es ist",
    "Das Ist": "Das ist",
    
    # Fix broken verbs and conjugations
    "Vergichen": "Vergleichen",
    "Ersteellen": "Erstellen",
    "Bereitstellen": "Bereitstellen",
    "Verwalen": "Verwalten",
    "Erhöhen": "Erhöhen",
    "Reduzieren": "Reduzieren",
    
    # Fix weird capitalizations
    "KEINE": "Keine",
    "NEIN": "Kein",
    "JA": "Ja",
    "ODER": "Oder",
    "UND": "Und",
    "MIT": "Mit",
    "FÜR": "Für",
    "VON": "Von",
    "ZU": "Zu",
    "AUF": "Auf",
    "IN": "In",
    "BEI": "Bei",
    
    # Fix more specific phrases
    "Seasalt.ai bringt Entwicklern ein Agenten -Kommunikationsinstrument für das folgende <1>__Tool -Use</1>:": "Seasalt.ai bietet Entwicklern ein Agenten-Kommunikationswerkzeug für die folgende <1>Tool-Nutzung</1>:",
    "Servieren Sie jeden Kunden": "Bedienen Sie jeden Kunden",
    "Verwandeln Sie Ihre Kundenkommunikation in Minuten, nicht in Monaten.": "Transformieren Sie Ihre Kundenkommunikation in Minuten, nicht in Monaten.",
    "Richten Sie KI ein, um gemeinsame Fragen wie \"Wo ist meine Bestellung?\" und Buchtermine automatisch.": "Richten Sie KI ein, um häufige Fragen wie \"Wo ist meine Bestellung?\" automatisch zu beantworten und Termine zu buchen.",
    
    # Fix all instances of "__p" placeholders with surrounding text
    "__p7__": "WhatsApp",
    "__p12__": "SMS",
    "__p13__": "API",
    "__p14__": "HIPAA",
    "__p10__": "Messenger",
    "__p8__": "Instagram",
    "__p9__": "Facebook",
    "__p11__": "LINE",
    "__p16__": "SOC",
    "__p17__": "10DLC",
    "__p0__": "Seasalt.ai",
    "__p1__": "SeaChat",
    "__p3__": "SeaX",
    
    # Continue with comprehensive replacements...
    "Fungionalität": "Funktionalität",
    "Benzutzer": "Benutzer",
    "Benzutzerdefinierten": "Benutzerdefinierte",
    "automatiSierung": "Automatisierung",
    "AutomatiSierung": "Automatisierung",
    "optimierer": "optimiert",
    "Unterstein": "Unterstützung",
    "unterstüttzung": "Unterstützung",
    "Unterstüttzung": "Unterstützung",
    "geschäft": "Geschäft",
    "Verkauf": "Verkauf",
    "Vertrieb": "Vertrieb"
}

def clean_and_translate(text):
    """Clean up and translate text with all fixes"""
    if not isinstance(text, str):
        return text
    
    # Apply all direct translations
    for eng, ger in translations.items():
        text = text.replace(eng, ger)
    
    # Fix specific patterns
    # Fix "NEIN" when it should be "Kein/Keine"
    text = re.sub(r'\bNEIN\s+', 'Kein ', text)
    text = re.sub(r'\bNeinw\b', 'Jetzt', text)
    
    # Fix capitalization issues
    text = re.sub(r'\bVERWENDEN\b', 'verwenden', text)
    text = re.sub(r'\bUNTERSTÜTZUNG\b', 'Unterstützung', text)
    
    # Fix spacing around punctuation
    text = re.sub(r'\s+([,\.\!\?;:])', r'\1', text)
    text = re.sub(r'([,\.\!\?;:])\s*$', r'\1', text)
    
    # Fix common spelling errors
    text = text.replace('Benzutzer', 'Benutzer')
    text = text.replace('benzutzer', 'benutzer')
    text = text.replace('Fungionen', 'Funktionen')
    text = text.replace('fungionen', 'funktionen')
    text = text.replace('automatiSierung', 'Automatisierung')
    text = text.replace('AutomatiSierung', 'Automatisierung')
    text = text.replace('unterstein', 'unterstützen')
    text = text.replace('Unterstein', 'Unterstützung')
    text = text.replace('unterstüttzung', 'Unterstützung')
    text = text.replace('Unterstüttzung', 'Unterstützung')
    
    return text

def process_json_recursively(obj):
    """Recursively process JSON object to translate all strings"""
    if isinstance(obj, dict):
        return {k: process_json_recursively(v) for k, v in obj.items()}
    elif isinstance(obj, list):
        return [process_json_recursively(item) for item in obj]
    elif isinstance(obj, str):
        return clean_and_translate(obj)
    else:
        return obj

def main():
    # Load the JSON file
    json_path = Path('public/locales/de.json')
    
    with open(json_path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    # Process the entire JSON structure
    print("Processing de.json for comprehensive translation...")
    translated_data = process_json_recursively(data)
    
    # Save the updated JSON
    with open(json_path, 'w', encoding='utf-8') as f:
        json.dump(translated_data, f, ensure_ascii=False, indent=2, separators=(',', ': '))
    
    print("Translation complete!")
    
    # Verify by checking for common English words
    with open(json_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    english_patterns = [
        r'\bThe\b', r'\bThis\b', r'\bFor\b', r'\bAnd\b', r'\bWith\b',
        r'\bYour\b', r'\bFrom\b', r'\bHave\b', r'\bWill\b', r'\bCan\b'
    ]
    
    found_english = False
    for pattern in english_patterns:
        matches = re.findall(pattern, content, re.IGNORECASE)
        if matches:
            print(f"Warning: Found English pattern '{pattern}': {matches[:5]}")
            found_english = True
    
    if not found_english:
        print("✓ No obvious English patterns found!")
    
    return 0

if __name__ == '__main__':
    exit(main())

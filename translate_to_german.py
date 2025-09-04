#!/usr/bin/env python3
import json
import re

def should_preserve(text):
    """Check if text should be preserved (not translated)"""
    # Preserve company/product names
    preserve_names = [
        'Seasalt.ai', 'SeaChat', 'SeaMeet', 'SeaX', 'SeaVoice', 'SeaSuite',
        'Twilio', 'WhatsApp', 'Instagram', 'Facebook', 'Messenger', 'LINE',
        'Telegram', 'WeChat', 'Discord', 'Slack', 'Microsoft Teams',
        'Google', 'Aircall', 'RingCentral', 'Genesys', 'Five9',
        'HubSpot', 'Salesforce', 'Zendesk', 'Pipedrive', 'Monday.com',
        'ClickUp', 'Airtable', 'Notion', 'Asana', 'Trello'
    ]
    
    # Check for exact matches or contains
    for name in preserve_names:
        if name.lower() in text.lower():
            return True
    
    # Preserve URLs, emails, technical terms
    if re.match(r'^https?://', text) or '@' in text or '{{' in text:
        return True
    
    # Preserve single words that are likely technical terms or proper nouns
    if len(text.split()) == 1 and text[0].isupper() and len(text) > 2:
        # But translate common words
        common_words = ['Call', 'Chat', 'Voice', 'Text', 'Meet', 'Book', 'Demo', 'Free', 'Enterprise', 'Business', 'Support', 'Sales', 'Marketing']
        if text not in common_words:
            return True
    
    return False

def translate_to_german(text):
    """Translate English text to German"""
    if should_preserve(text):
        return text
    
    # Translation dictionary for common terms
    translations = {
        # Navigation & Actions
        'Home': 'Startseite',
        'Products': 'Produkte',
        'Solutions': 'Lösungen',
        'Pricing': 'Preise',
        'Resources': 'Ressourcen',
        'Company': 'Unternehmen',
        'Contact': 'Kontakt',
        'Book a Demo': 'Demo buchen',
        'Sign Up': 'Anmelden',
        'Log In': 'Einloggen',
        'Get Started': 'Jetzt starten',
        'Learn More': 'Mehr erfahren',
        'Try for Free': 'Kostenlos testen',
        'Start Free Trial': 'Kostenlose Testversion starten',
        
        # Features & Benefits
        'Features': 'Funktionen',
        'Benefits': 'Vorteile',
        'Integrations': 'Integrationen',
        'Security': 'Sicherheit',
        'Support': 'Support',
        'Customer Support': 'Kundensupport',
        'Technical Support': 'Technischer Support',
        '24/7 Support': '24/7 Support',
        
        # Business Terms
        'Enterprise': 'Unternehmen',
        'Business': 'Geschäft',
        'Small Business': 'Kleinunternehmen',
        'Medium Business': 'Mittelständische Unternehmen',
        'Large Enterprise': 'Großunternehmen',
        'Sales': 'Vertrieb',
        'Marketing': 'Marketing',
        'Customer Service': 'Kundenservice',
        'Customer Experience': 'Kundenerfahrung',
        
        # Communication
        'Chat': 'Chat',
        'Voice': 'Sprache',
        'Call': 'Anruf',
        'Message': 'Nachricht',
        'Email': 'E-Mail',
        'SMS': 'SMS',
        'Video': 'Video',
        'Meeting': 'Meeting',
        'Conference': 'Konferenz',
        
        # AI & Technology
        'AI': 'KI',
        'Artificial Intelligence': 'Künstliche Intelligenz',
        'Machine Learning': 'Maschinelles Lernen',
        'Automation': 'Automatisierung',
        'Analytics': 'Analytik',
        'Dashboard': 'Dashboard',
        'API': 'API',
        'Integration': 'Integration',
        
        # Common Phrases
        'Anyone, Anywhere': 'Jeder, Überall',
        'Natural, Personalized, and Actionable Conversations': 'Natürliche, personalisierte und umsetzbare Gespräche',
        'with Customers': 'mit Kunden',
        'Book a Meeting': 'Meeting buchen',
        'Respond to customers, 24/7': 'Kundenantworten, rund um die Uhr',
        'Insights/summary on calls': 'Einblicke/Zusammenfassung von Anrufen',
        'AI voice agents for calls': 'KI-Sprachagenten für Anrufe',
        'Text To Speech': 'Text zu Sprache',
        'Speech To Text': 'Sprache zu Text',
        
        # Industries
        'Healthcare': 'Gesundheitswesen',
        'Education': 'Bildung',
        'Finance': 'Finanzen',
        'Retail': 'Einzelhandel',
        'E-commerce': 'E-Commerce',
        'Real Estate': 'Immobilien',
        'Insurance': 'Versicherung',
        'Technology': 'Technologie',
        
        # Metrics & Results
        'Increase': 'Steigerung',
        'Decrease': 'Reduzierung',
        'Improve': 'Verbesserung',
        'Save': 'Sparen',
        'Reduce': 'Reduzieren',
        'Boost': 'Steigern',
        'Growth': 'Wachstum',
        'Performance': 'Leistung',
        
        # Time
        'Day': 'Tag',
        'Week': 'Woche',
        'Month': 'Monat',
        'Year': 'Jahr',
        'Hour': 'Stunde',
        'Minute': 'Minute',
        'Second': 'Sekunde',
        'Today': 'Heute',
        'Tomorrow': 'Morgen',
        'Yesterday': 'Gestern',
        
        # Pricing
        'Free': 'Kostenlos',
        'Premium': 'Premium',
        'Professional': 'Professional',
        'Starter': 'Starter',
        'Basic': 'Basis',
        'Advanced': 'Erweitert',
        'Custom': 'Individuell',
        'Price': 'Preis',
        'Cost': 'Kosten',
        'Billing': 'Abrechnung',
        'Monthly': 'Monatlich',
        'Annually': 'Jährlich',
        'Per User': 'Pro Benutzer',
        'Per Month': 'Pro Monat',
        'Per Year': 'Pro Jahr'
    }
    
    # Try exact match first
    if text in translations:
        return translations[text]
    
    # Try case-insensitive match
    for eng, ger in translations.items():
        if eng.lower() == text.lower():
            return ger
    
    # For longer texts, try to translate phrase by phrase
    result = text
    for eng, ger in sorted(translations.items(), key=lambda x: len(x[0]), reverse=True):
        result = result.replace(eng, ger)
    
    return result

def translate_json_value(value):
    """Recursively translate JSON values"""
    if isinstance(value, str):
        return translate_to_german(value)
    elif isinstance(value, list):
        return [translate_json_value(item) for item in value]
    elif isinstance(value, dict):
        return {k: translate_json_value(v) for k, v in value.items()}
    else:
        return value

# Load the JSON file
with open('public/locales/de.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

# Translate all values
translated_data = translate_json_value(data)

# Save the translated JSON
with open('public/locales/de.json', 'w', encoding='utf-8') as f:
    json.dump(translated_data, f, ensure_ascii=False, indent=2)

print("Translation completed successfully!")

#!/usr/bin/env python3
import json
import re

def should_preserve(text):
    """Check if text should be preserved (not translated)"""
    if not isinstance(text, str):
        return True
        
    # Preserve empty strings
    if not text.strip():
        return True
    
    # Preserve company/product names and technical terms
    preserve_patterns = [
        r'Seasalt\.ai', r'SeaChat', r'SeaMeet', r'SeaX', r'SeaVoice', r'SeaSuite', r'SeaHealth',
        r'WhatsApp', r'Instagram', r'Facebook', r'Messenger', r'LINE', r'Telegram', r'WeChat',
        r'Discord', r'Slack', r'Microsoft Teams', r'Twilio', r'Google', r'Aircall', r'RingCentral',
        r'Genesys', r'Five9', r'HubSpot', r'Salesforce', r'Zendesk', r'Pipedrive', r'Monday\.com',
        r'ClickUp', r'Airtable', r'Notion', r'Asana', r'Trello', r'Stripe', r'PayPal', r'Shopify',
        r'WooCommerce', r'BigCommerce', r'Magento', r'WordPress', r'Drupal', r'Joomla',
        r'AWS', r'Azure', r'GCP', r'GitHub', r'GitLab', r'Bitbucket', r'Jira', r'Confluence',
        r'10DLC', r'A2P', r'SMS', r'API', r'CRM', r'HIPAA', r'GDPR', r'SOC \d', r'ISO', 
        r'Seattle', r'Washington', r'USA', r'AI', r'ML', r'NLP', r'UI', r'UX'
    ]
    
    # Check if the entire text is a product/company name
    for pattern in preserve_patterns:
        if re.match(f'^{pattern}$', text.strip(), re.IGNORECASE):
            return True
    
    # Preserve URLs, emails, variables
    if (re.match(r'^https?://', text) or 
        '@' in text or 
        '{{' in text or 
        text.startswith('#') or
        text.startswith('$') or
        re.match(r'^[A-Z0-9_]+$', text) or  # Constants
        re.match(r'^\d+[%$€£¥]?$', text)):  # Numbers with currency
        return True
    
    # Preserve author names (First Last pattern)
    if re.match(r'^[A-Z][a-z]+ [A-Z][a-z]+(-[A-Z][a-z]+)?$', text.strip()):
        common_phrases = ['Customer Support', 'Customer Service', 'Technical Support', 
                         'Sales Marketing', 'Human Resources', 'Product Manager']
        if text not in common_phrases:
            return True
    
    return False

def translate_phrase(text):
    """Translate English text to German using comprehensive dictionary"""
    if should_preserve(text):
        return text
    
    # Comprehensive translation dictionary
    translations = {
        # Navigation & Actions
        'Home': 'Startseite',
        'Products': 'Produkte',
        'Product': 'Produkt',
        'Solutions': 'Lösungen',
        'Solution': 'Lösung',
        'Pricing': 'Preise',
        'Price': 'Preis',
        'Resources': 'Ressourcen',
        'Company': 'Unternehmen',
        'Contact': 'Kontakt',
        'About': 'Über uns',
        'About Us': 'Über uns',
        'Careers': 'Karriere',
        'Career': 'Karriere',
        'Blog': 'Blog',
        'Help': 'Hilfe',
        'Support': 'Support',
        'Documentation': 'Dokumentation',
        'FAQ': 'Häufige Fragen',
        'FAQs': 'Häufige Fragen',
        'Privacy': 'Datenschutz',
        'Privacy Policy': 'Datenschutzrichtlinie',
        'Terms': 'Bedingungen',
        'Terms of Service': 'Nutzungsbedingungen',
        'Legal': 'Rechtliches',
        'Security': 'Sicherheit',
        'Compliance': 'Compliance',
        
        # CTA Buttons
        'Book a Demo': 'Demo buchen',
        'Book Demo': 'Demo buchen',
        'Schedule Demo': 'Demo vereinbaren',
        'See Demo': 'Demo ansehen',
        'Watch Demo': 'Demo ansehen',
        'Sign Up': 'Registrieren',
        'Sign In': 'Anmelden',
        'Log In': 'Anmelden',
        'Log Out': 'Abmelden',
        'Register': 'Registrieren',
        'Get Started': 'Jetzt starten',
        'Start Now': 'Jetzt starten',
        'Learn More': 'Mehr erfahren',
        'Try for Free': 'Kostenlos testen',
        'Try Free': 'Kostenlos testen',
        'Start Free Trial': 'Kostenlose Testversion starten',
        'Start Trial': 'Testversion starten',
        'Start for Free': 'Kostenlos starten',
        'Sign Up Now': 'Jetzt registrieren',
        'Download': 'Herunterladen',
        'Upload': 'Hochladen',
        'Submit': 'Absenden',
        'Send': 'Senden',
        'Save': 'Speichern',
        'Cancel': 'Abbrechen',
        'Continue': 'Fortfahren',
        'Next': 'Weiter',
        'Previous': 'Zurück',
        'Back': 'Zurück',
        'Close': 'Schließen',
        'Edit': 'Bearbeiten',
        'Delete': 'Löschen',
        'Remove': 'Entfernen',
        'Add': 'Hinzufügen',
        'Create': 'Erstellen',
        'Update': 'Aktualisieren',
        'Refresh': 'Aktualisieren',
        'Search': 'Suchen',
        'Filter': 'Filtern',
        'Sort': 'Sortieren',
        'Export': 'Exportieren',
        'Import': 'Importieren',
        'Share': 'Teilen',
        
        # Business Terms
        'Enterprise': 'Unternehmen',
        'Business': 'Geschäft',
        'Small Business': 'Kleinunternehmen',
        'Small Businesses': 'Kleinunternehmen',
        'Medium Business': 'Mittelständisches Unternehmen',
        'Large Enterprise': 'Großunternehmen',
        'Customer': 'Kunde',
        'Customers': 'Kunden',
        'Client': 'Klient',
        'Clients': 'Klienten',
        'User': 'Benutzer',
        'Users': 'Benutzer',
        'Team': 'Team',
        'Teams': 'Teams',
        'Employee': 'Mitarbeiter',
        'Employees': 'Mitarbeiter',
        'Staff': 'Personal',
        'Manager': 'Manager',
        'Admin': 'Administrator',
        'Administrator': 'Administrator',
        'Owner': 'Inhaber',
        'Partner': 'Partner',
        'Partners': 'Partner',
        'Vendor': 'Anbieter',
        'Supplier': 'Lieferant',
        
        # Sales & Marketing
        'Sales': 'Vertrieb',
        'Marketing': 'Marketing',
        'Lead': 'Lead',
        'Leads': 'Leads',
        'Lead Generation': 'Lead-Generierung',
        'Prospect': 'Interessent',
        'Opportunity': 'Chance',
        'Deal': 'Geschäft',
        'Deals': 'Geschäfte',
        'Pipeline': 'Pipeline',
        'Funnel': 'Trichter',
        'Campaign': 'Kampagne',
        'Campaigns': 'Kampagnen',
        'Conversion': 'Konversion',
        'Revenue': 'Umsatz',
        'Growth': 'Wachstum',
        'Customer Service': 'Kundendienst',
        'Customer Support': 'Kundensupport',
        'Customer Experience': 'Kundenerfahrung',
        'Customer Success': 'Kundenerfolg',
        'Customer Engagement': 'Kundenbindung',
        'Customer Satisfaction': 'Kundenzufriedenheit',
        
        # Communication
        'Chat': 'Chat',
        'Chats': 'Chats',
        'Voice': 'Sprache',
        'Call': 'Anruf',
        'Calls': 'Anrufe',
        'Phone': 'Telefon',
        'Phone Call': 'Telefonanruf',
        'Phone Calls': 'Telefonanrufe',
        'Message': 'Nachricht',
        'Messages': 'Nachrichten',
        'Email': 'E-Mail',
        'Emails': 'E-Mails',
        'Text': 'Text',
        'Video': 'Video',
        'Meeting': 'Meeting',
        'Meetings': 'Meetings',
        'Conference': 'Konferenz',
        'Webinar': 'Webinar',
        'Conversation': 'Gespräch',
        'Conversations': 'Gespräche',
        'Communication': 'Kommunikation',
        'Communications': 'Kommunikation',
        'Notification': 'Benachrichtigung',
        'Notifications': 'Benachrichtigungen',
        'Alert': 'Warnung',
        'Alerts': 'Warnungen',
        
        # Features & Technology
        'Features': 'Funktionen',
        'Feature': 'Funktion',
        'Benefits': 'Vorteile',
        'Benefit': 'Vorteil',
        'Capabilities': 'Fähigkeiten',
        'Functionality': 'Funktionalität',
        'Integration': 'Integration',
        'Integrations': 'Integrationen',
        'Plugin': 'Plugin',
        'Extension': 'Erweiterung',
        'App': 'App',
        'Application': 'Anwendung',
        'Platform': 'Plattform',
        'System': 'System',
        'Software': 'Software',
        'Tool': 'Werkzeug',
        'Tools': 'Werkzeuge',
        'Service': 'Dienst',
        'Services': 'Dienste',
        'Dashboard': 'Dashboard',
        'Interface': 'Schnittstelle',
        'Workflow': 'Arbeitsablauf',
        'Process': 'Prozess',
        'Automation': 'Automatisierung',
        'Automate': 'Automatisieren',
        'Automated': 'Automatisiert',
        
        # AI Terms
        'Artificial Intelligence': 'Künstliche Intelligenz',
        'Machine Learning': 'Maschinelles Lernen',
        'Deep Learning': 'Deep Learning',
        'Natural Language Processing': 'Natürliche Sprachverarbeitung',
        'Bot': 'Bot',
        'Chatbot': 'Chatbot',
        'Voicebot': 'Sprachbot',
        'Virtual Assistant': 'Virtueller Assistent',
        'Digital Assistant': 'Digitaler Assistent',
        'Agent': 'Agent',
        'Agents': 'Agenten',
        'Human Agent': 'Menschlicher Agent',
        'Live Agent': 'Live-Agent',
        
        # Analytics & Data
        'Analytics': 'Analytik',
        'Analysis': 'Analyse',
        'Report': 'Bericht',
        'Reports': 'Berichte',
        'Reporting': 'Berichterstattung',
        'Metrics': 'Metriken',
        'Performance': 'Leistung',
        'Insights': 'Einblicke',
        'Data': 'Daten',
        'Database': 'Datenbank',
        'Statistics': 'Statistiken',
        'Tracking': 'Verfolgung',
        'Monitoring': 'Überwachung',
        
        # Time
        'Day': 'Tag',
        'Days': 'Tage',
        'Week': 'Woche',
        'Weeks': 'Wochen',
        'Month': 'Monat',
        'Months': 'Monate',
        'Year': 'Jahr',
        'Years': 'Jahre',
        'Hour': 'Stunde',
        'Hours': 'Stunden',
        'Minute': 'Minute',
        'Minutes': 'Minuten',
        'Second': 'Sekunde',
        'Seconds': 'Sekunden',
        'Today': 'Heute',
        'Tomorrow': 'Morgen',
        'Yesterday': 'Gestern',
        'Daily': 'Täglich',
        'Weekly': 'Wöchentlich',
        'Monthly': 'Monatlich',
        'Yearly': 'Jährlich',
        'Annual': 'Jährlich',
        'Annually': 'Jährlich',
        'Real-time': 'Echtzeit',
        'Real Time': 'Echtzeit',
        'Live': 'Live',
        
        # Pricing
        'Free': 'Kostenlos',
        'Premium': 'Premium',
        'Pro': 'Pro',
        'Professional': 'Professional',
        'Starter': 'Starter',
        'Basic': 'Basis',
        'Standard': 'Standard',
        'Advanced': 'Erweitert',
        'Custom': 'Individuell',
        'Customized': 'Angepasst',
        'Cost': 'Kosten',
        'Fee': 'Gebühr',
        'Fees': 'Gebühren',
        'Payment': 'Zahlung',
        'Billing': 'Abrechnung',
        'Invoice': 'Rechnung',
        'Subscription': 'Abonnement',
        'Plan': 'Plan',
        'Plans': 'Pläne',
        'Package': 'Paket',
        'Bundle': 'Bündel',
        'Discount': 'Rabatt',
        'Offer': 'Angebot',
        'Trial': 'Testversion',
        'Free Trial': 'Kostenlose Testversion',
        'Per User': 'Pro Benutzer',
        'Per Month': 'Pro Monat',
        'Per Year': 'Pro Jahr',
        'Unlimited': 'Unbegrenzt',
        
        # Industries
        'Healthcare': 'Gesundheitswesen',
        'Education': 'Bildung',
        'Finance': 'Finanzen',
        'Financial Services': 'Finanzdienstleistungen',
        'Banking': 'Bankwesen',
        'Insurance': 'Versicherung',
        'Retail': 'Einzelhandel',
        'E-commerce': 'E-Commerce',
        'Real Estate': 'Immobilien',
        'Manufacturing': 'Fertigung',
        'Technology': 'Technologie',
        'Telecommunications': 'Telekommunikation',
        'Transportation': 'Transport',
        'Logistics': 'Logistik',
        'Hospitality': 'Gastgewerbe',
        'Travel': 'Reisen',
        'Tourism': 'Tourismus',
        'Media': 'Medien',
        'Entertainment': 'Unterhaltung',
        'Government': 'Regierung',
        'Non-profit': 'Gemeinnützig',
        
        # Common Phrases
        'All rights reserved': 'Alle Rechte vorbehalten',
        'Made with': 'Gemacht mit',
        'Built with': 'Erstellt mit',
        'Powered by': 'Unterstützt von',
        'Coming Soon': 'Demnächst',
        'New': 'Neu',
        'Latest': 'Neueste',
        'Popular': 'Beliebt',
        'Featured': 'Empfohlen',
        'Recommended': 'Empfohlen',
        'Best': 'Beste',
        'Top': 'Top',
        'Exclusive': 'Exklusiv',
        'Limited': 'Begrenzt',
        'Special': 'Speziell',
        'Important': 'Wichtig',
        'Required': 'Erforderlich',
        'Optional': 'Optional',
        'Available': 'Verfügbar',
        'Version': 'Version',
        'Release': 'Veröffentlichung',
        'Upgrade': 'Upgrade',
        'Maintenance': 'Wartung',
        
        # Status
        'Active': 'Aktiv',
        'Inactive': 'Inaktiv',
        'Enabled': 'Aktiviert',
        'Disabled': 'Deaktiviert',
        'On': 'An',
        'Off': 'Aus',
        'Open': 'Offen',
        'Closed': 'Geschlossen',
        'Pending': 'Ausstehend',
        'Approved': 'Genehmigt',
        'Rejected': 'Abgelehnt',
        'Completed': 'Abgeschlossen',
        'In Progress': 'In Bearbeitung',
        'Draft': 'Entwurf',
        'Published': 'Veröffentlicht',
        'Success': 'Erfolg',
        'Successful': 'Erfolgreich',
        'Error': 'Fehler',
        'Warning': 'Warnung',
        'Info': 'Info',
        'Loading': 'Laden',
        'Processing': 'Verarbeitung',
        'Online': 'Online',
        'Offline': 'Offline',
        'Busy': 'Beschäftigt',
        
        # Specific phrases
        'Use Cases': 'Anwendungsfälle',
        'Use Case': 'Anwendungsfall',
        'Back to': 'Zurück zu',
        'All': 'Alle',
        'Overview': 'Übersicht',
        'Compare Us': 'Vergleichen Sie uns',
        'Comparisons': 'Vergleiche',
        'Industries': 'Branchen',
        'Industry': 'Branche',
        'Channels': 'Kanäle',
        'Channel': 'Kanal',
        'Knowledge Base': 'Wissensdatenbank',
        'Best Practices': 'Bewährte Methoden',
        'Getting Started': 'Erste Schritte',
        'Quick Start': 'Schnellstart',
        'Setup': 'Einrichtung',
        'Configuration': 'Konfiguration',
        'Settings': 'Einstellungen',
        'Preferences': 'Präferenzen',
        'Profile': 'Profil',
        'Account': 'Konto',
        'My Account': 'Mein Konto',
        'Logout': 'Abmelden',
        'Login': 'Anmelden'
    }
    
    return translations.get(text, text)

def smart_translate(text):
    """Smart translation that preserves brand names and handles complex phrases"""
    if should_preserve(text):
        return text
    
    # Preserve special patterns
    preserve_patterns = {
        r'(Seasalt\.ai|SeaChat|SeaMeet|SeaX|SeaVoice|SeaSuite|SeaHealth)': r'\1',
        r'(WhatsApp|Instagram|Facebook|Messenger|LINE|Telegram|Discord|Slack)': r'\1',
        r'(Twilio|Google|Salesforce|HubSpot|Zendesk|Stripe|PayPal)': r'\1',
        r'(SMS|API|CRM|HIPAA|GDPR|SOC \d|10DLC|A2P)': r'\1',
        r'(\{\{[^}]+\}\})': r'\1',  # Template variables
        r'(<[^>]+>)': r'\1',  # HTML tags
        r'(\d+[%$€£¥]?)': r'\1',  # Numbers with currency
        r'(https?://[^\s]+)': r'\1',  # URLs
        r'([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})': r'\1'  # Emails
    }
    
    # Try exact translation first
    translated = translate_phrase(text)
    if translated != text:
        return translated
    
    # For longer texts, try to translate word by word while preserving special content
    words = text.split()
    translated_words = []
    
    for word in words:
        # Check if word should be preserved
        preserved = False
        for pattern in preserve_patterns:
            if re.match(pattern, word):
                translated_words.append(word)
                preserved = True
                break
        
        if not preserved:
            # Try to translate the word
            translated_word = translate_phrase(word)
            translated_words.append(translated_word)
    
    result = ' '.join(translated_words)
    
    # Apply phrase translations on the result
    phrase_translations = {
        'Book a Demo': 'Demo buchen',
        'Get Started': 'Jetzt starten',
        'Sign Up': 'Registrieren',
        'Learn More': 'Mehr erfahren',
        'Try for Free': 'Kostenlos testen',
        'Contact Us': 'Kontaktieren Sie uns',
        'Customer Support': 'Kundensupport',
        'All rights reserved': 'Alle Rechte vorbehalten',
        'Terms of Service': 'Nutzungsbedingungen',
        'Privacy Policy': 'Datenschutzrichtlinie',
        'Use Cases': 'Anwendungsfälle',
        'Back to': 'Zurück zu',
        'Sign Up Now': 'Jetzt registrieren',
        'Schedule Demo': 'Demo vereinbaren',
        'Start Free Trial': 'Kostenlose Testversion starten'
    }
    
    for eng, ger in phrase_translations.items():
        if eng in result:
            result = result.replace(eng, ger)
    
    return result

def translate_json_value(value, path="", depth=0):
    """Recursively translate JSON values"""
    if isinstance(value, str):
        translated = smart_translate(value)
        if value != translated and len(value) > 1:
            indent = "  " * depth
            if len(value) > 60:
                print(f"{indent}✓ {value[:60]}...")
            else:
                print(f"{indent}✓ {value}")
        return translated
    elif isinstance(value, list):
        return [translate_json_value(item, f"{path}[{i}]", depth) for i, item in enumerate(value)]
    elif isinstance(value, dict):
        result = {}
        for k, v in value.items():
            if depth < 2:  # Only show top-level keys
                print(f"{'  ' * depth}Processing: {k}")
            result[k] = translate_json_value(v, f"{path}.{k}", depth + 1)
        return result
    else:
        return value

def main():
    print("=== German Translation Script ===\n")
    
    # Load the JSON file
    print("Loading de.json...")
    with open('public/locales/de.json', 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    print(f"Loaded JSON with {len(data)} top-level keys\n")
    
    # Translate all values
    print("Translating content to German...\n")
    translated_data = translate_json_value(data)
    
    # Save the translated JSON
    print("\nSaving translated de.json...")
    with open('public/locales/de.json', 'w', encoding='utf-8') as f:
        json.dump(translated_data, f, ensure_ascii=False, indent=2)
    
    print("✅ Translation completed successfully!")
    
    # Validate JSON
    print("\nValidating JSON structure...")
    with open('public/locales/de.json', 'r', encoding='utf-8') as f:
        json.load(f)
    print("✅ JSON validation successful!")
    
    # Show file info
    import os
    file_size = os.path.getsize('public/locales/de.json')
    with open('public/locales/de.json', 'r', encoding='utf-8') as f:
        line_count = sum(1 for _ in f)
    
    print(f"\nFile statistics:")
    print(f"  - Size: {file_size:,} bytes")
    print(f"  - Lines: {line_count:,}")

if __name__ == "__main__":
    main()

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
    
    # Preserve company/product names
    preserve_names = [
        'Seasalt.ai', 'SeaChat', 'SeaMeet', 'SeaX', 'SeaVoice', 'SeaSuite', 'SeaHealth',
        'Twilio', 'WhatsApp', 'Instagram', 'Facebook', 'Messenger', 'LINE',
        'Telegram', 'WeChat', 'Discord', 'Slack', 'Microsoft Teams',
        'Google', 'Aircall', 'RingCentral', 'Genesys', 'Five9',
        'HubSpot', 'Salesforce', 'Zendesk', 'Pipedrive', 'Monday.com',
        'ClickUp', 'Airtable', 'Notion', 'Asana', 'Trello', 'Stripe',
        'PayPal', 'Shopify', 'WooCommerce', 'BigCommerce', 'Magento',
        'WordPress', 'Drupal', 'Joomla', 'React', 'Angular', 'Vue',
        'Node.js', 'Python', 'Java', 'PHP', 'Ruby', 'AWS', 'Azure',
        'GCP', 'GitHub', 'GitLab', 'Bitbucket', 'Jira', 'Confluence'
    ]
    
    # Check for exact matches or contains (case-insensitive)
    text_lower = text.lower()
    for name in preserve_names:
        if name.lower() in text_lower:
            return True
    
    # Preserve URLs, emails, technical patterns
    if re.match(r'^https?://', text) or '@' in text or '{{' in text or '}}' in text:
        return True
    
    # Preserve technical IDs and codes
    if re.match(r'^[A-Z0-9_]+$', text):  # All caps with underscores
        return True
    
    # Preserve author names (commonly formatted names)
    if re.match(r'^[A-Z][a-z]+ [A-Z][a-z]+$', text):  # First Last
        return True
    
    return False

def translate_to_german(text):
    """Translate English text to German with comprehensive dictionary"""
    if should_preserve(text):
        return text
    
    # Comprehensive translation dictionary
    translations = {
        # Navigation & UI Elements
        'Home': 'Startseite',
        'Products': 'Produkte',
        'Solutions': 'Lösungen',
        'Pricing': 'Preise',
        'Resources': 'Ressourcen',
        'Company': 'Unternehmen',
        'Contact': 'Kontakt',
        'About': 'Über uns',
        'About Us': 'Über uns',
        'Careers': 'Karriere',
        'Blog': 'Blog',
        'Help': 'Hilfe',
        'Support': 'Support',
        'Documentation': 'Dokumentation',
        'FAQ': 'FAQ',
        'Privacy': 'Datenschutz',
        'Privacy Policy': 'Datenschutzrichtlinie',
        'Terms': 'Bedingungen',
        'Terms of Service': 'Nutzungsbedingungen',
        'Legal': 'Rechtliches',
        
        # Actions
        'Book a Demo': 'Demo buchen',
        'Book Demo': 'Demo buchen',
        'Schedule Demo': 'Demo planen',
        'Sign Up': 'Anmelden',
        'Sign In': 'Einloggen',
        'Log In': 'Einloggen',
        'Log Out': 'Ausloggen',
        'Register': 'Registrieren',
        'Get Started': 'Jetzt starten',
        'Start Now': 'Jetzt starten',
        'Learn More': 'Mehr erfahren',
        'Try for Free': 'Kostenlos testen',
        'Try Free': 'Kostenlos testen',
        'Start Free Trial': 'Kostenlose Testversion starten',
        'Start Trial': 'Testversion starten',
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
        'Copy': 'Kopieren',
        'Paste': 'Einfügen',
        
        # Business Terms
        'Enterprise': 'Unternehmen',
        'Business': 'Geschäft',
        'Small Business': 'Kleinunternehmen',
        'Medium Business': 'Mittelständische Unternehmen',
        'Large Enterprise': 'Großunternehmen',
        'SME': 'KMU',
        'SMEs': 'KMUs',
        'Startup': 'Startup',
        'Agency': 'Agentur',
        'Team': 'Team',
        'Department': 'Abteilung',
        'Organization': 'Organisation',
        'Customer': 'Kunde',
        'Customers': 'Kunden',
        'Client': 'Klient',
        'Clients': 'Klienten',
        'User': 'Benutzer',
        'Users': 'Benutzer',
        'Employee': 'Mitarbeiter',
        'Employees': 'Mitarbeiter',
        'Staff': 'Personal',
        'Manager': 'Manager',
        'Admin': 'Administrator',
        'Administrator': 'Administrator',
        'Owner': 'Inhaber',
        'Partner': 'Partner',
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
        'Pipeline': 'Pipeline',
        'Funnel': 'Trichter',
        'Campaign': 'Kampagne',
        'Campaigns': 'Kampagnen',
        'Conversion': 'Konversion',
        'Revenue': 'Umsatz',
        'Growth': 'Wachstum',
        'ROI': 'ROI',
        'Customer Service': 'Kundenservice',
        'Customer Support': 'Kundensupport',
        'Customer Experience': 'Kundenerfahrung',
        'Customer Success': 'Kundenerfolg',
        'Customer Engagement': 'Kundenbindung',
        'Customer Satisfaction': 'Kundenzufriedenheit',
        
        # Communication
        'Chat': 'Chat',
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
        'SMS': 'SMS',
        'Text': 'Text',
        'Video': 'Video',
        'Meeting': 'Meeting',
        'Meetings': 'Meetings',
        'Conference': 'Konferenz',
        'Webinar': 'Webinar',
        'Conversation': 'Gespräch',
        'Conversations': 'Gespräche',
        'Communication': 'Kommunikation',
        'Notification': 'Benachrichtigung',
        'Notifications': 'Benachrichtigungen',
        'Alert': 'Warnung',
        'Alerts': 'Warnungen',
        
        # Features & Technology
        'Features': 'Funktionen',
        'Feature': 'Funktion',
        'Benefits': 'Vorteile',
        'Benefit': 'Vorteil',
        'Advantages': 'Vorteile',
        'Capabilities': 'Fähigkeiten',
        'Functionality': 'Funktionalität',
        'Integration': 'Integration',
        'Integrations': 'Integrationen',
        'API': 'API',
        'APIs': 'APIs',
        'Webhook': 'Webhook',
        'Webhooks': 'Webhooks',
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
        'Solution': 'Lösung',
        'Product': 'Produkt',
        'Security': 'Sicherheit',
        'Encryption': 'Verschlüsselung',
        'Authentication': 'Authentifizierung',
        'Authorization': 'Autorisierung',
        'Compliance': 'Compliance',
        'GDPR': 'DSGVO',
        'HIPAA': 'HIPAA',
        
        # AI & Automation
        'AI': 'KI',
        'Artificial Intelligence': 'Künstliche Intelligenz',
        'Machine Learning': 'Maschinelles Lernen',
        'Deep Learning': 'Deep Learning',
        'Natural Language Processing': 'Natürliche Sprachverarbeitung',
        'NLP': 'NLP',
        'Automation': 'Automatisierung',
        'Automate': 'Automatisieren',
        'Automated': 'Automatisiert',
        'Bot': 'Bot',
        'Chatbot': 'Chatbot',
        'Voicebot': 'Sprachbot',
        'Virtual Assistant': 'Virtueller Assistent',
        'Digital Assistant': 'Digitaler Assistent',
        'Agent': 'Agent',
        'Agents': 'Agenten',
        
        # Analytics & Data
        'Analytics': 'Analytik',
        'Analysis': 'Analyse',
        'Dashboard': 'Dashboard',
        'Report': 'Bericht',
        'Reports': 'Berichte',
        'Reporting': 'Berichterstattung',
        'Metrics': 'Metriken',
        'KPI': 'KPI',
        'KPIs': 'KPIs',
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
        'Live': 'Live',
        
        # Pricing & Payment
        'Free': 'Kostenlos',
        'Premium': 'Premium',
        'Pro': 'Pro',
        'Professional': 'Professional',
        'Starter': 'Starter',
        'Basic': 'Basis',
        'Standard': 'Standard',
        'Advanced': 'Erweitert',
        'Custom': 'Individuell',
        'Price': 'Preis',
        'Prices': 'Preise',
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
        'Energy': 'Energie',
        'Utilities': 'Versorgung',
        
        # Common Phrases
        'All rights reserved': 'Alle Rechte vorbehalten',
        'Copyright': 'Urheberrecht',
        'Made with': 'Gemacht mit',
        'Built with': 'Erstellt mit',
        'Powered by': 'Betrieben von',
        'Coming Soon': 'Demnächst',
        'New': 'Neu',
        'Latest': 'Neueste',
        'Popular': 'Beliebt',
        'Featured': 'Empfohlen',
        'Recommended': 'Empfohlen',
        'Best': 'Beste',
        'Top': 'Top',
        'Premium': 'Premium',
        'Exclusive': 'Exklusiv',
        'Limited': 'Begrenzt',
        'Special': 'Speziell',
        'Important': 'Wichtig',
        'Required': 'Erforderlich',
        'Optional': 'Optional',
        'Available': 'Verfügbar',
        'Coming soon': 'Demnächst',
        'Under construction': 'Im Aufbau',
        'Beta': 'Beta',
        'Alpha': 'Alpha',
        'Version': 'Version',
        'Release': 'Veröffentlichung',
        'Update': 'Update',
        'Upgrade': 'Upgrade',
        'Maintenance': 'Wartung',
        
        # Status & States
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
        'Archived': 'Archiviert',
        'Deleted': 'Gelöscht',
        'Success': 'Erfolg',
        'Error': 'Fehler',
        'Warning': 'Warnung',
        'Info': 'Info',
        'Loading': 'Laden',
        'Processing': 'Verarbeitung',
        'Sending': 'Senden',
        'Receiving': 'Empfangen',
        'Connected': 'Verbunden',
        'Disconnected': 'Getrennt',
        'Online': 'Online',
        'Offline': 'Offline',
        'Available': 'Verfügbar',
        'Unavailable': 'Nicht verfügbar',
        'Busy': 'Beschäftigt',
        'Away': 'Abwesend'
    }
    
    # Try exact match first
    if text in translations:
        return translations[text]
    
    # Try case-insensitive match
    text_lower = text.lower()
    for eng, ger in translations.items():
        if eng.lower() == text_lower:
            # Preserve original casing pattern
            if text.isupper():
                return ger.upper()
            elif text[0].isupper():
                return ger[0].upper() + ger[1:] if len(ger) > 1 else ger.upper()
            return ger
    
    # For longer texts, try to translate phrase by phrase
    result = text
    # Sort by length to replace longer phrases first
    sorted_translations = sorted(translations.items(), key=lambda x: len(x[0]), reverse=True)
    
    for eng, ger in sorted_translations:
        # Case-sensitive replacement for exact matches
        if eng in result:
            result = result.replace(eng, ger)
        # Case-insensitive replacement
        pattern = re.compile(re.escape(eng), re.IGNORECASE)
        result = pattern.sub(ger, result)
    
    return result

def translate_json_value(value, path=""):
    """Recursively translate JSON values"""
    if isinstance(value, str):
        translated = translate_to_german(value)
        if value != translated and len(value) > 1:
            print(f"Translating: '{value}' -> '{translated}'")
        return translated
    elif isinstance(value, list):
        return [translate_json_value(item, f"{path}[{i}]") for i, item in enumerate(value)]
    elif isinstance(value, dict):
        return {k: translate_json_value(v, f"{path}.{k}") for k, v in value.items()}
    else:
        return value

# Load the JSON file
print("Loading de.json...")
with open('public/locales/de.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

# Translate all values
print("Translating content...")
translated_data = translate_json_value(data)

# Save the translated JSON
print("Saving translated de.json...")
with open('public/locales/de.json', 'w', encoding='utf-8') as f:
    json.dump(translated_data, f, ensure_ascii=False, indent=2)

print("Translation completed successfully!")

# Validate JSON
print("Validating JSON structure...")
with open('public/locales/de.json', 'r', encoding='utf-8') as f:
    json.load(f)
print("JSON validation successful!")

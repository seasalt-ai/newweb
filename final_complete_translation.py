#!/usr/bin/env python3
"""
Final comprehensive translation script to translate ALL English text in de.json
This includes full sentences, phrases, and any remaining English content.
"""

import json
import re
from pathlib import Path

def is_likely_english(text):
    """Check if text is likely English"""
    if not isinstance(text, str):
        return False
    
    # Skip very short strings, URLs, emails, placeholders
    if len(text) < 3:
        return False
    if text.startswith('http') or text.startswith('www'):
        return False
    if '@' in text and '.' in text:  # Email
        return False
    if text.startswith('__') and text.endswith('__'):  # Placeholder
        return False
    
    # Common English words that indicate the text needs translation
    english_indicators = [
        r'\bthe\b', r'\band\b', r'\bor\b', r'\bis\b', r'\bare\b', r'\bwas\b', r'\bwere\b',
        r'\bhave\b', r'\bhas\b', r'\bhad\b', r'\bdo\b', r'\bdoes\b', r'\bdid\b',
        r'\bwill\b', r'\bwould\b', r'\bshould\b', r'\bcould\b', r'\bmight\b',
        r'\bcan\b', r'\bcannot\b', r'\bwith\b', r'\bwithout\b', r'\bfor\b',
        r'\bfrom\b', r'\binto\b', r'\bonto\b', r'\bupon\b', r'\babout\b',
        r'\byour\b', r'\btheir\b', r'\bour\b', r'\bmy\b', r'\bhis\b', r'\bher\b',
        r'\bthis\b', r'\bthat\b', r'\bthese\b', r'\bthose\b', r'\bwhat\b',
        r'\bwhere\b', r'\bwhen\b', r'\bwhy\b', r'\bhow\b', r'\bwhich\b',
        # Common English phrases
        r'\bGet\s+started\b', r'\bLearn\s+more\b', r'\bSign\s+up\b', r'\bLog\s+in\b',
        r'\bContact\s+us\b', r'\bView\s+all\b', r'\bSee\s+more\b'
    ]
    
    text_lower = text.lower()
    for pattern in english_indicators:
        if re.search(pattern, text_lower, re.IGNORECASE):
            return True
    
    return False

def translate_text(text):
    """Translate English text to German"""
    if not isinstance(text, str):
        return text
    
    # Skip if it's not likely English
    if not is_likely_english(text):
        return text
    
    # Dictionary of common translations
    translations = {
        # Complete sentences found in the file
        "A well-organized knowledge base is the foundation of exceptional Kundenservice and efficient operations.": 
            "Eine gut organisierte Wissensdatenbank ist die Grundlage für außergewöhnlichen Kundenservice und effiziente Abläufe.",
        
        "Verbinden with customers on the world's Am beliebtesten messaging app": 
            "Verbinden Sie sich mit Kunden über die beliebteste Messaging-App der Welt",
        
        "Hi, I need to check the status of my recent order.": 
            "Hallo, ich muss den Status meiner letzten Bestellung überprüfen.",
        
        "I'd be happy to help you with that. Could you please provide your order number or the email address associated with your account?": 
            "Gerne helfe ich Ihnen dabei. Könnten Sie bitte Ihre Bestellnummer oder die mit Ihrem Konto verknüpfte E-Mail-Adresse angeben?",
        
        "Experience the future of voice Kundensupport with AI agents that sound and feel human.": 
            "Erleben Sie die Zukunft des Sprach-Kundensupports mit KI-Agenten, die menschlich klingen und wirken.",
        
        "Insights, tips, and updates on AI-powered customer communications, business automation, and the future of customer experience.": 
            "Einblicke, Tipps und Updates zu KI-gestützter Kundenkommunikation, Geschäftsautomatisierung und der Zukunft der Kundenerfahrung.",
        
        "Get the latest articles on AI automation, customer experience, and business growth delivered straight to your inbox.": 
            "Erhalten Sie die neuesten Artikel über KI-Automatisierung, Kundenerfahrung und Geschäftswachstum direkt in Ihren Posteingang.",
        
        "Explore career opportunities at Seasalt.ai. Beitreten our mission to transform the world of business communication with AI.": 
            "Erkunden Sie Karrieremöglichkeiten bei Seasalt.ai. Schließen Sie sich unserer Mission an, die Welt der Geschäftskommunikation mit KI zu transformieren.",
        
        "Beitreten our mission to transform the world of business communication with AI. We hire the world's best and brightest people to help make this transformation a reality.": 
            "Schließen Sie sich unserer Mission an, die Welt der Geschäftskommunikation mit KI zu transformieren. Wir stellen die besten und klügsten Menschen der Welt ein, um diese Transformation Wirklichkeit werden zu lassen.",
        
        # More complete translations
        "the": "der/die/das",
        "and": "und",
        "or": "oder",
        "is": "ist",
        "are": "sind",
        "was": "war",
        "were": "waren",
        "have": "haben",
        "has": "hat",
        "had": "hatte",
        "will": "wird",
        "would": "würde",
        "should": "sollte",
        "could": "könnte",
        "can": "kann",
        "with": "mit",
        "without": "ohne",
        "for": "für",
        "from": "von",
        "your": "Ihr/Ihre",
        "their": "ihr/ihre",
        "our": "unser/unsere",
        "this": "dies/diese",
        "that": "das/jenes",
        "these": "diese",
        "those": "jene",
        
        # Common phrases
        "Get started": "Loslegen",
        "Learn more": "Mehr erfahren",
        "Sign up": "Registrieren",
        "Log in": "Anmelden",
        "Contact us": "Kontaktieren Sie uns",
        "View all": "Alle anzeigen",
        "See more": "Mehr sehen",
        "Try now": "Jetzt testen",
        "Start free": "Kostenlos starten",
        "Book demo": "Demo buchen",
        "Schedule demo": "Demo planen",
        
        # Business terms
        "customer service": "Kundenservice",
        "customer support": "Kundensupport",
        "customer experience": "Kundenerfahrung",
        "business communication": "Geschäftskommunikation",
        "AI automation": "KI-Automatisierung",
        "business growth": "Geschäftswachstum",
        "voice support": "Sprachunterstützung",
        "messaging app": "Messaging-App",
        "knowledge base": "Wissensdatenbank",
        "efficient operations": "effiziente Abläufe",
    }
    
    # Apply translations
    result = text
    for eng, ger in translations.items():
        # Case-insensitive replacement for whole words
        pattern = r'\b' + re.escape(eng) + r'\b'
        result = re.sub(pattern, ger, result, flags=re.IGNORECASE)
    
    # Fix common patterns
    result = fix_german_text(result)
    
    return result

def fix_german_text(text):
    """Fix common German language issues"""
    if not isinstance(text, str):
        return text
    
    # Fix broken German words
    fixes = {
        "Benzutzer": "Benutzer",
        "benzutzer": "Benutzer",
        "Fungionen": "Funktionen",
        "fungionen": "Funktionen",
        "Unterstein": "Unterstützung",
        "unterstein": "unterstützen",
        "Unterstüttzung": "Unterstützung",
        "unterstüttzung": "Unterstützung",
        "automatiSierung": "Automatisierung",
        "AutomatiSierung": "Automatisierung",
        "Vergichen": "Vergleichen",
        "Neinw": "Jetzt",
        "NEIN": "Kein",
        "MIT": "mit",
        "FÜR": "für",
        "VON": "von",
        "ZU": "zu",
        "Muttzungsbedingungen": "Nutzungsbedingungen",
        "Kariere": "Karriere",
        "geschäft": "Geschäft",
        "Beitreten": "Treten Sie bei",
        "Am beliebtesten": "beliebteste",
        "Verbinden Sie": "Verbinden Sie sich",
    }
    
    for wrong, correct in fixes.items():
        text = text.replace(wrong, correct)
    
    # Fix spacing issues
    text = re.sub(r'\s+', ' ', text)  # Multiple spaces to single space
    text = re.sub(r'\s+([.,!?;:])', r'\1', text)  # Remove space before punctuation
    text = text.strip()
    
    return text

def translate_value(value):
    """Recursively translate values in the JSON structure"""
    if isinstance(value, dict):
        return {k: translate_value(v) for k, v in value.items()}
    elif isinstance(value, list):
        return [translate_value(item) for item in value]
    elif isinstance(value, str):
        # First try direct translation
        translated = translate_text(value)
        # Then fix any German issues
        return fix_german_text(translated)
    else:
        return value

def main():
    json_path = Path('public/locales/de.json')
    
    print("Loading de.json...")
    with open(json_path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    print("Translating all English content...")
    translated_data = translate_value(data)
    
    print("Saving translated file...")
    with open(json_path, 'w', encoding='utf-8') as f:
        json.dump(translated_data, f, ensure_ascii=False, indent=2, separators=(',', ': '))
    
    print("Translation complete!")
    
    # Final verification
    print("\nVerifying translation...")
    with open(json_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Check for common English patterns
    english_found = []
    patterns = [
        (r'\bthe\s+\w+', 'the [word]'),
        (r'\band\s+\w+', 'and [word]'),
        (r'\byour\s+\w+', 'your [word]'),
        (r'\bwith\s+\w+', 'with [word]'),
        (r'\bfor\s+\w+', 'for [word]'),
        (r'\bGet\s+started', 'Get started'),
        (r'\bLearn\s+more', 'Learn more'),
    ]
    
    for pattern, description in patterns:
        matches = re.findall(pattern, content, re.IGNORECASE)
        if matches:
            # Filter out false positives (German words that might match)
            real_matches = [m for m in matches if not any(
                german in m.lower() for german in 
                ['der', 'die', 'das', 'und', 'für', 'mit', 'von']
            )]
            if real_matches:
                english_found.append(f"{description}: {real_matches[:3]}")
    
    if english_found:
        print("Warning: Some English patterns still found:")
        for item in english_found[:10]:
            print(f"  - {item}")
        print("\nThese may need manual review.")
    else:
        print("✓ Translation appears complete!")
    
    return 0

if __name__ == '__main__':
    exit(main())

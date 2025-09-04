#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import json
import re
import sys
import os
from typing import Dict, Any, Set, List, Tuple
from deep_translator import GoogleTranslator
from langdetect import detect_langs, detect
import logging
from pathlib import Path

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# File paths
JSON_FILE = "public/locales/de.json"
BACKUP_FILE = "public/locales/de.json.backup"
OUTPUT_FILE = "public/locales/de.json"

# Brand names and product names that should NOT be translated
BRAND_NAMES = {
    'Seasalt.ai', 'SeaChat', 'SeaMeet', 'SeaX', 'SeaVoice', 'SeaHealth',
    'WhatsApp', 'Instagram', 'Facebook', 'Facebook Messenger', 'LINE', 'Messenger',
    'Shopify', 'WordPress', 'Wix', 'Squarespace', 'Mailerlite', 'MailChimp', 'HubSpot',
    'Salesforce', 'Twilio', 'Twilio Flex', 'OpenAI', 'ChatGPT', 'GPT', 'Mistral',
    'Google', 'Microsoft', 'Meta', 'Discord', 'Slack', 'Zoom', 'Teams',
    'SMB', 'USA', 'WA', 'Seattle', 'Constant Contact',
    'Sarah Johnson', 'Mike Chen', 'Lisa Park', 'David Kim',
    'Michael Rodriguez', 'Dr. Sarah Johnson', 'Prof. Michael Chen', 'Maria Rodriguez',
    'Sarah Chen', 'Lösungsarchitekten Review', 'Lincoln', 'State University'
}

# Technical terms that should remain in English or have special treatment
TECHNICAL_TERMS = {
    'API', 'CRM', 'SMS', 'SaaS', 'ROI', 'KPI', 'URL', 'HTML', 'CSV', 'PDF',
    'Excel', 'Word', 'JSON', 'XML', 'HTTP', 'HTTPS', 'REST', 'SDK',
    'HIPAA', 'GDPR', 'TCPA', 'SOC', 'IVR', 'AI', 'ML', 'NLP',
    '10DLC', 'A2P', 'B2B', 'B2C', 'FAQ', 'DIY', 'UI', 'UX',
    'Webhook', 'Callback', 'Token', 'OAuth', 'JWT', 'SSL', 'TLS',
    'SMTP', 'IMAP', 'POP3', 'FTP', 'SSH', 'VPN', 'IP', 'DNS',
    'Cloud', 'Docker', 'Kubernetes', 'AWS', 'Azure', 'GCP',
    'Login', 'Sign-up', 'Sign-in', 'Dashboard', 'Widget',
    'Chat', 'Chatbot', 'Voicebot', 'Bot', 'Agent',
    'Premium', 'Enterprise', 'Free', 'Trial', 'Demo',
    'Support', 'Analytics', 'Insights', 'Reports',
    'Workflow', 'Pipeline', 'Integration', 'Automation',
    'Lead', 'Contact', 'Customer', 'Client', 'User',
    'Campaign', 'Marketing', 'Sales', 'Revenue',
    'Inbox', 'Outbox', 'Queue', 'Thread', 'Message',
    'Platform', 'Framework', 'Library', 'Module',
    'Setup', 'Configuration', 'Settings', 'Preferences',
    'Upload', 'Download', 'Export', 'Import',
    'Real-time', 'Live', 'Online', 'Offline',
    'Mobile', 'Desktop', 'Tablet', 'Browser',
    'Email', 'Phone', 'Video', 'Voice', 'Text',
    'Feature', 'Function', 'Option', 'Tool',
    'Template', 'Theme', 'Style', 'Design',
    'Database', 'Query', 'Index', 'Cache',
    'Backup', 'Restore', 'Sync', 'Migration'
}

# Placeholder patterns to preserve
PLACEHOLDER_PATTERNS = [
    r'__p\d+__',  # __p0__, __p1__, etc.
    r'__v\d+__',  # __v0__, __v1__, etc.
    r'__[A-Za-z0-9]+__',  # General placeholder pattern
    r'\{\{[^}]+\}\}',  # {{variable}}
    r'<\d+>[^<]*</\d+>',  # <1>text</1>
    r'\$\d+',  # $20, $500, etc.
    r'\d+%',  # 80%, 100%, etc.
    r'\d+\+',  # 100+, 500+, etc.
    r'\d+[kKmM]\+?',  # 10k, 5M+, etc.
    r'USD|US\$',  # Currency
    r'\d+GB|MB|KB|TB',  # Storage units
    r'24/7',  # Always available
    r'B2B|B2C|A2P|P2P',  # Business acronyms
    r'\d+:\d+',  # Time format
    r'\d+-\d+-\d+',  # Date format
    r'v\d+\.\d+',  # Version numbers
]

class GermanTranslator:
    def __init__(self):
        self.translator = GoogleTranslator(source='en', target='de')
        self.placeholders_map = {}
        self.translation_cache = {}
        
    def is_german(self, text: str) -> bool:
        """Check if text is already in German."""
        if not text or len(text.strip()) < 3:
            return True
        
        # Skip detection for very short strings or numbers
        if len(text) < 10 or text.isdigit():
            return True
            
        try:
            # Detect language with confidence
            langs = detect_langs(text)
            for lang in langs:
                if lang.lang == 'de' and lang.prob > 0.7:
                    return True
            return False
        except:
            # If detection fails, assume it needs translation
            return False
    
    def should_skip_translation(self, text: str) -> bool:
        """Check if text should be skipped from translation."""
        if not text or not isinstance(text, str):
            return True
        
        text_stripped = text.strip()
        
        # Skip empty or very short strings
        if len(text_stripped) < 2:
            return True
        
        # Skip if it's just punctuation or numbers
        if text_stripped.replace(' ', '').replace('.', '').replace(',', '').replace('!', '').replace('?', '').isdigit():
            return True
        
        # Skip if it's a brand name or technical term
        if text_stripped in BRAND_NAMES or text_stripped in TECHNICAL_TERMS:
            return True
        
        # Skip if it's already German
        if self.is_german(text_stripped):
            return True
        
        # Skip pure placeholders
        for pattern in PLACEHOLDER_PATTERNS:
            if re.fullmatch(pattern, text_stripped):
                return True
        
        # Skip if it's a date or time format
        if re.match(r'^\d{4}-\d{2}-\d{2}$', text_stripped) or re.match(r'^\d{2}:\d{2}$', text_stripped):
            return True
            
        return False
    
    def preserve_placeholders(self, text: str) -> Tuple[str, Dict[str, str]]:
        """Replace placeholders with tokens to preserve them during translation."""
        preserved_text = text
        tokens = {}
        token_counter = 0
        
        # First preserve brand names (do this before placeholders to avoid double replacement)
        for brand in sorted(BRAND_NAMES, key=len, reverse=True):  # Sort by length to handle longer names first
            if brand in preserved_text:
                token = f"BRAND{token_counter}"
                tokens[token] = brand
                preserved_text = preserved_text.replace(brand, token)
                token_counter += 1
        
        # Preserve all placeholder patterns
        for pattern in PLACEHOLDER_PATTERNS:
            matches = re.findall(pattern, preserved_text)
            for match in matches:
                token = f"TOKEN{token_counter}"
                tokens[token] = match
                preserved_text = preserved_text.replace(match, token, 1)
                token_counter += 1
        
        return preserved_text, tokens
    
    def restore_placeholders(self, text: str, tokens: Dict[str, str]) -> str:
        """Restore placeholders after translation."""
        restored_text = text
        for token, original in tokens.items():
            restored_text = restored_text.replace(token, original)
        return restored_text
    
    def translate_text(self, text: str) -> str:
        """Translate English text to German."""
        if self.should_skip_translation(text):
            return text
        
        # Check cache
        if text in self.translation_cache:
            return self.translation_cache[text]
        
        try:
            # Preserve placeholders and special content
            preserved_text, tokens = self.preserve_placeholders(text)
            
            # Skip if nothing left to translate
            if not preserved_text.strip() or preserved_text.strip() in tokens.values():
                return text
            
            # Translate
            translated = self.translator.translate(preserved_text)
            
            # Restore placeholders
            final_text = self.restore_placeholders(translated, tokens)
            
            # Cache the result
            self.translation_cache[text] = final_text
            
            return final_text
            
        except Exception as e:
            logger.warning(f"Translation failed for '{text}': {e}")
            return text
    
    def translate_json_value(self, value: Any, key_path: str = "") -> Any:
        """Recursively translate JSON values."""
        if isinstance(value, dict):
            return {k: self.translate_json_value(v, f"{key_path}.{k}" if key_path else k) 
                    for k, v in value.items()}
        elif isinstance(value, list):
            return [self.translate_json_value(item, f"{key_path}[{i}]") 
                    for i, item in enumerate(value)]
        elif isinstance(value, str):
            translated = self.translate_text(value)
            if translated != value:
                logger.info(f"Translated {key_path}: '{value}' -> '{translated}'")
            return translated
        else:
            return value
    
    def process_file(self):
        """Main processing function."""
        logger.info(f"Loading JSON file: {JSON_FILE}")
        
        # Load the JSON file
        with open(JSON_FILE, 'r', encoding='utf-8') as f:
            data = json.load(f)
        
        logger.info("Starting translation process...")
        
        # Translate the data
        translated_data = self.translate_json_value(data)
        
        # Save the translated data
        logger.info(f"Saving translated data to: {OUTPUT_FILE}")
        with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
            json.dump(translated_data, f, ensure_ascii=False, indent=2)
        
        logger.info("Translation completed successfully!")
        logger.info(f"Total translations cached: {len(self.translation_cache)}")
        
        return translated_data

def main():
    """Main entry point."""
    translator = GermanTranslator()
    
    # Check if backup exists
    if not Path(BACKUP_FILE).exists():
        logger.error(f"Backup file not found: {BACKUP_FILE}")
        logger.info("Creating backup now...")
        import shutil
        shutil.copy2(JSON_FILE, BACKUP_FILE)
    
    # Process the file
    try:
        translator.process_file()
        
        # Validate the output
        logger.info("Validating output JSON...")
        with open(OUTPUT_FILE, 'r', encoding='utf-8') as f:
            json.load(f)
        logger.info("JSON validation successful!")
        
    except json.JSONDecodeError as e:
        logger.error(f"JSON parsing error: {e}")
        sys.exit(1)
    except Exception as e:
        logger.error(f"Translation failed: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()

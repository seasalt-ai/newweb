#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import json
import re
import sys
import time
from typing import Dict, Any, List, Tuple
from deep_translator import GoogleTranslator
from pathlib import Path
import logging

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# File paths
JSON_FILE = "public/locales/de.json"
OUTPUT_FILE = "public/locales/de_complete.json"
PROGRESS_FILE = "translation_progress.json"

# Brand names and terms that should NOT be translated
PRESERVE_TERMS = {
    # Company/Product names
    'Seasalt.ai', 'SeaChat', 'SeaMeet', 'SeaX', 'SeaVoice', 'SeaHealth',
    'WhatsApp', 'Instagram', 'Facebook', 'Facebook Messenger', 'LINE', 'Messenger',
    'Shopify', 'WordPress', 'Wix', 'Squarespace', 'Mailerlite', 'MailChimp', 'HubSpot',
    'Salesforce', 'Twilio', 'Twilio Flex', 'OpenAI', 'ChatGPT', 'GPT-3.5', 'GPT-4', 
    'ChatGPT-3.5-turbo', 'ChatGPT-4o', 'ChatGPT-4o mini', 'Mistral',
    'Google', 'Microsoft', 'Meta', 'Discord', 'Slack', 'Zoom', 'Teams',
    'Aircall', 'RingCentral', 'Genesys', 'Five9', 'Avaya', 'Kustomer', '3CX', 'Dialpad', '8x8', 'OpenPhone',
    'Intercom', 'Fin', 'respond.io', 
    'Azure', 'AWS', 'GCP', 'Kubernetes', 'Docker',
    'HubSpot', 'ActiveCampaign', 'EngageBay', 'Dynamics 365',
    'Magento', 'BigCommerce', 'WooCommerce', 'Webflow',
    'Calendly', 'Google Calendar', 'Outlook', 'Microsoft Teams',
    'Telegram', 'Google Chat',
    'USA', 'US', 'WA', 'Seattle', 'Asia', 'Japan', 'Taiwan', 'Thailand', 'South Korea',
    'SMB', 'SMEs', 'KMU', 'AI', 'ML', 'NLP',
    # Names
    'Sarah Johnson', 'Mike Chen', 'Lisa Park', 'David Kim', 'Sarah Chen',
    'Michael Rodriguez', 'Dr. Sarah Johnson', 'Prof. Michael Chen', 'Maria Rodriguez',
    'Lincoln', 'State University', 'Community College District',
    'Black Friday', 'Constant Contact',
    # Technical terms that stay in English
    'API', 'APIs', 'CRM', 'SMS', 'MMS', 'SaaS', 'PaaS', 'IaaS', 'ROI', 'KPI', 'KPIs',
    'URL', 'URLs', 'HTML', 'CSS', 'XML', 'JSON', 'CSV', 'PDF', 'Excel', 'Word',
    'HTTP', 'HTTPS', 'REST', 'RESTful', 'SDK', 'SDKs', 'CLI', 'GUI',
    'HIPAA', 'GDPR', 'TCPA', 'SOC', 'SOC 2', 'FINRA', 'IVR', 'PBX', 'VoIP', 'SIP',
    '10DLC', 'A2P', 'P2P', 'B2B', 'B2C', 'FAQ', 'FAQs', 'DIY', 'UI', 'UX', 'UI/UX',
    'Webhook', 'Webhooks', 'OAuth', 'JWT', 'SSL', 'TLS', 'VPN', 'IP', 'DNS',
    'SMTP', 'IMAP', 'POP3', 'FTP', 'SFTP', 'SSH',
    'MACs', 'MAC', 'UCaaS', 'CCaaS', 'Contact Center',
    'QR', 'QR Code', 'NFC',
    'SEO', 'SEM', 'PPC', 'CTR', 'CPC', 'CPM', 'CPA',
    'USD', 'US$', '$',
    'GB', 'MB', 'KB', 'TB', 'ms', 'sec',
    '24/7', '24x7', '99.9%', '99.95%', '99.5%',
    # Email addresses and domains
    'info@seasalt.ai', 'sarah@email.com',
    'make.com'
}

# Common English words that definitely need translation
MUST_TRANSLATE = {
    'the', 'a', 'an', 'is', 'are', 'was', 'were', 'been', 'be', 'being',
    'have', 'has', 'had', 'do', 'does', 'did', 'done', 'doing',
    'will', 'would', 'should', 'could', 'may', 'might', 'must', 'can', 'could',
    'for', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'from', 'of', 'off',
    'with', 'without', 'by', 'about', 'into', 'onto', 'through', 'during', 
    'before', 'after', 'above', 'below', 'between', 'under', 'over',
    'this', 'that', 'these', 'those', 'their', 'your', 'our', 'its',
    'all', 'any', 'some', 'many', 'much', 'more', 'most', 'less', 'least',
    'new', 'old', 'good', 'bad', 'great', 'best', 'worst', 'better', 'worse',
    'get', 'got', 'getting', 'make', 'made', 'making', 'take', 'took', 'taking',
    'see', 'saw', 'seen', 'seeing', 'look', 'looked', 'looking',
    'want', 'wanted', 'wanting', 'need', 'needed', 'needing',
    'use', 'used', 'using', 'help', 'helped', 'helping',
    'start', 'started', 'starting', 'stop', 'stopped', 'stopping'
}

class ComprehensiveGermanTranslator:
    def __init__(self):
        self.translator = GoogleTranslator(source='en', target='de')
        self.translation_cache = {}
        self.total_translations = 0
        self.skipped_count = 0
        self.error_count = 0
        self.progress = self.load_progress()
        
    def load_progress(self):
        """Load previous translation progress if exists."""
        if Path(PROGRESS_FILE).exists():
            with open(PROGRESS_FILE, 'r') as f:
                return json.load(f)
        return {}
    
    def save_progress(self):
        """Save translation progress."""
        with open(PROGRESS_FILE, 'w') as f:
            json.dump(self.progress, f, indent=2)
    
    def is_english(self, text: str) -> bool:
        """Detect if text contains English that needs translation."""
        if not text or not isinstance(text, str):
            return False
        
        text = text.strip()
        
        # Skip empty or very short strings
        if len(text) < 2:
            return False
        
        # Skip URLs, emails, phone numbers, file paths
        if any(pattern in text for pattern in ['http://', 'https://', '@', '.com', '.ai', '.io', '/', '\\']):
            if not any(word in text.lower() for word in ['your', 'with', 'for', 'and', 'the', 'our']):
                return False
        
        # Skip pure numbers, dates, times
        if re.match(r'^[\d\s\-\+\(\)\.,:/%]+$', text):
            return False
        
        # Skip placeholders
        if re.match(r'^__[a-zA-Z0-9]+__$', text) or re.match(r'^\{\{.*\}\}$', text):
            return False
        
        # Check for obvious German words
        german_indicators = [
            'der', 'die', 'das', 'den', 'dem', 'des', 
            'ein', 'eine', 'einen', 'einem', 'eines',
            'und', 'oder', 'aber', 'doch', 'sondern',
            'ich', 'du', 'er', 'sie', 'es', 'wir', 'ihr',
            'mein', 'dein', 'sein', 'ihr', 'unser', 'euer',
            'haben', 'sein', 'werden', 'können', 'müssen',
            'nicht', 'kein', 'keine', 'keinen',
            'für', 'über', 'unter', 'zwischen', 'durch',
            'ä', 'ö', 'ü', 'Ä', 'Ö', 'Ü', 'ß'
        ]
        
        text_lower = text.lower()
        
        # If it has German special characters, likely German
        if any(char in text for char in ['ä', 'ö', 'ü', 'Ä', 'Ö', 'Ü', 'ß']):
            # But check if it still has English words mixed in
            if not any(word in text_lower.split() for word in MUST_TRANSLATE):
                return False
        
        # Check for German words
        words = text_lower.split()
        german_word_count = sum(1 for word in words if word in german_indicators)
        if len(words) > 0 and german_word_count / len(words) > 0.3:
            return False
        
        # Check for must-translate English words
        contains_english = any(word in text_lower.split() for word in MUST_TRANSLATE)
        
        # Additional patterns that indicate English
        english_patterns = [
            r'\b(the|a|an|is|are|was|were|have|has|had)\b',
            r'\b(will|would|should|could|may|might|must|can)\b',
            r'\b(your|our|their|his|her|its)\b',
            r'\b(this|that|these|those)\b',
            r'\b(with|without|from|into|onto)\b',
            r'\b(get|make|take|see|look|want|need|use|help)\b'
        ]
        
        for pattern in english_patterns:
            if re.search(pattern, text_lower):
                contains_english = True
                break
        
        return contains_english
    
    def preserve_special_content(self, text: str) -> Tuple[str, Dict[str, str]]:
        """Preserve placeholders, URLs, and special content."""
        preserved = text
        tokens = {}
        counter = 0
        
        # Preserve brand names first
        for term in sorted(PRESERVE_TERMS, key=len, reverse=True):
            if term in preserved:
                # Use word boundaries for better matching
                pattern = r'\b' + re.escape(term) + r'\b'
                matches = re.finditer(pattern, preserved)
                for match in matches:
                    token = f"__PRESERVE_{counter}__"
                    tokens[token] = match.group()
                    preserved = preserved[:match.start()] + token + preserved[match.end():]
                    counter += 1
        
        # Preserve placeholders like __p0__, __v0__
        placeholder_pattern = r'__[a-zA-Z0-9]+__'
        for match in re.finditer(placeholder_pattern, preserved):
            token = f"__PLACEHOLDER_{counter}__"
            tokens[token] = match.group()
            preserved = preserved.replace(match.group(), token, 1)
            counter += 1
        
        # Preserve {{variables}}
        variable_pattern = r'\{\{[^}]+\}\}'
        for match in re.finditer(variable_pattern, preserved):
            token = f"__VARIABLE_{counter}__"
            tokens[token] = match.group()
            preserved = preserved.replace(match.group(), token, 1)
            counter += 1
        
        # Preserve HTML-like tags <1>text</1>
        tag_pattern = r'<\d+>[^<]*</\d+>'
        for match in re.finditer(tag_pattern, preserved):
            token = f"__TAG_{counter}__"
            tokens[token] = match.group()
            preserved = preserved.replace(match.group(), token, 1)
            counter += 1
        
        # Preserve currency amounts
        currency_pattern = r'\$[\d,]+(?:\.\d{2})?|\d+\s*USD'
        for match in re.finditer(currency_pattern, preserved):
            token = f"__CURRENCY_{counter}__"
            tokens[token] = match.group()
            preserved = preserved.replace(match.group(), token, 1)
            counter += 1
        
        # Preserve percentages
        percent_pattern = r'\d+(?:\.\d+)?%'
        for match in re.finditer(percent_pattern, preserved):
            token = f"__PERCENT_{counter}__"
            tokens[token] = match.group()
            preserved = preserved.replace(match.group(), token, 1)
            counter += 1
        
        # Preserve numbers with units
        unit_pattern = r'\d+(?:\.\d+)?\s*(?:GB|MB|KB|TB|ms|sec|min|hours?|days?|weeks?|months?|years?)\b'
        for match in re.finditer(unit_pattern, preserved, re.IGNORECASE):
            token = f"__UNIT_{counter}__"
            tokens[token] = match.group()
            preserved = preserved.replace(match.group(), token, 1)
            counter += 1
        
        return preserved, tokens
    
    def restore_special_content(self, text: str, tokens: Dict[str, str]) -> str:
        """Restore preserved content."""
        restored = text
        for token, original in tokens.items():
            restored = restored.replace(token, original)
        return restored
    
    def translate_text(self, text: str, key_path: str = "") -> str:
        """Translate English text to German."""
        # Skip if not English or too short
        if not self.is_english(text):
            self.skipped_count += 1
            return text
        
        # Check cache
        if text in self.translation_cache:
            return self.translation_cache[text]
        
        # Check progress cache
        if text in self.progress:
            return self.progress[text]
        
        try:
            # Preserve special content
            preserved_text, tokens = self.preserve_special_content(text)
            
            # Skip if nothing left to translate
            if not preserved_text.strip() or preserved_text.strip() in tokens.values():
                self.skipped_count += 1
                return text
            
            # Translate using Google Translate
            translated = self.translator.translate(preserved_text)
            
            # Restore special content
            final_text = self.restore_special_content(translated, tokens)
            
            # Cache the result
            self.translation_cache[text] = final_text
            self.progress[text] = final_text
            self.total_translations += 1
            
            # Log progress every 10 translations
            if self.total_translations % 10 == 0:
                logger.info(f"Progress: {self.total_translations} translations completed")
                self.save_progress()
            
            # Small delay to avoid rate limiting
            time.sleep(0.1)
            
            return final_text
            
        except Exception as e:
            logger.warning(f"Translation failed for '{text[:50]}...': {e}")
            self.error_count += 1
            # Return original on error
            return text
    
    def process_json_value(self, value: Any, key_path: str = "") -> Any:
        """Recursively process JSON values."""
        if isinstance(value, dict):
            result = {}
            for k, v in value.items():
                new_path = f"{key_path}.{k}" if key_path else k
                result[k] = self.process_json_value(v, new_path)
            return result
        
        elif isinstance(value, list):
            result = []
            for i, item in enumerate(value):
                new_path = f"{key_path}[{i}]"
                result.append(self.process_json_value(item, new_path))
            return result
        
        elif isinstance(value, str):
            original = value
            translated = self.translate_text(value, key_path)
            if translated != original:
                logger.info(f"Translated {key_path}: '{original[:50]}...' -> '{translated[:50]}...'")
            return translated
        
        else:
            return value
    
    def process_file(self):
        """Main processing function."""
        logger.info(f"Loading {JSON_FILE}...")
        
        # Load JSON
        with open(JSON_FILE, 'r', encoding='utf-8') as f:
            data = json.load(f)
        
        logger.info("Starting comprehensive German translation...")
        logger.info("This will translate ALL English text to German.")
        logger.info("Processing may take several minutes...")
        
        # Process the entire JSON
        start_time = time.time()
        translated_data = self.process_json_value(data)
        
        # Save final progress
        self.save_progress()
        
        # Save output
        logger.info(f"Saving to {OUTPUT_FILE}...")
        with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
            json.dump(translated_data, f, ensure_ascii=False, indent=2)
        
        elapsed = time.time() - start_time
        
        # Summary
        logger.info("=" * 50)
        logger.info("Translation Complete!")
        logger.info(f"Total translations: {self.total_translations}")
        logger.info(f"Skipped (already German or non-text): {self.skipped_count}")
        logger.info(f"Errors: {self.error_count}")
        logger.info(f"Time elapsed: {elapsed:.2f} seconds")
        logger.info(f"Output saved to: {OUTPUT_FILE}")
        
        return translated_data

def main():
    """Main entry point."""
    translator = ComprehensiveGermanTranslator()
    
    try:
        translator.process_file()
        
        # Validate output
        logger.info("Validating output JSON...")
        with open(OUTPUT_FILE, 'r', encoding='utf-8') as f:
            json.load(f)
        logger.info("✅ JSON validation successful!")
        
    except json.JSONDecodeError as e:
        logger.error(f"JSON error: {e}")
        sys.exit(1)
    except KeyboardInterrupt:
        logger.info("\nTranslation interrupted. Progress saved.")
        translator.save_progress()
        sys.exit(0)
    except Exception as e:
        logger.error(f"Error: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()

#!/usr/bin/env python3
import json
import re
from googletrans import Translator

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
        'Twilio', 'WhatsApp', 'Instagram', 'Facebook', 'Messenger', 'LINE', 'Line',
        'Telegram', 'WeChat', 'Discord', 'Slack', 'Microsoft Teams', 
        'Google', 'Aircall', 'RingCentral', 'Genesys', 'Five9',
        'HubSpot', 'Salesforce', 'Zendesk', 'Pipedrive', 'Monday.com',
        'ClickUp', 'Airtable', 'Notion', 'Asana', 'Trello', 'Stripe',
        'PayPal', 'Shopify', 'WooCommerce', 'BigCommerce', 'Magento',
        'WordPress', 'Drupal', 'Joomla', 'React', 'Angular', 'Vue',
        'Node.js', 'Python', 'Java', 'PHP', 'Ruby', 'AWS', 'Azure',
        'GCP', 'GitHub', 'GitLab', 'Bitbucket', 'Jira', 'Confluence',
        'OpenAI', 'GPT', 'Claude', 'Gemini', 'SMS', 'API', 'CRM', 'ERP',
        'HIPAA', 'GDPR', 'SOC', 'ISO', 'Seattle', 'Washington', 'USA'
    ]
    
    # Check if text contains only a preserved name
    for name in preserve_names:
        if text.strip() == name:
            return True
    
    # Preserve URLs, emails, technical patterns, and variables
    if (re.match(r'^https?://', text) or 
        '@' in text or 
        '{{' in text or 
        '}}' in text or
        text.startswith('$') or
        text.startswith('#') or
        re.match(r'^[A-Z0-9_]+$', text) or  # All caps constants
        re.match(r'^\d+$', text) or  # Pure numbers
        re.match(r'^[a-zA-Z0-9\-\_\.]+\.(jpg|png|gif|svg|pdf|doc|docx|json|js|ts|jsx|tsx|css|html)$', text, re.I)):  # File names
        return True
    
    # Preserve technical IDs, codes, and placeholders
    if re.match(r'^(10DLC|A2P|P2P|B2B|B2C|CEO|CTO|CFO|COO|FAQ|AI|ML|NLP|LLM|UI|UX|IT|HR|PR|ROI|KPI|API|SDK|CSV|XML|JSON|HTML|CSS|JS|TS|SQL|NoSQL)$', text, re.I):
        return True
    
    # Preserve common technical/brand abbreviations
    if text in ['SMS', 'MMS', 'IVR', 'VoIP', 'SaaS', 'PaaS', 'IaaS', 'REST', 'GraphQL', 'OAuth', 'JWT', 'SSL', 'TLS', 'DNS', 'CDN', 'CI/CD', 'DevOps', 'QA']:
        return True
    
    # Check for author names - common first+last name pattern
    if re.match(r'^[A-Z][a-z]+ [A-Z][a-z]+$', text.strip()):
        # But translate if it's a common phrase
        common_phrases = ['Customer Support', 'Customer Service', 'Technical Support', 'Sales Marketing', 'Human Resources']
        if text not in common_phrases:
            return True
    
    return False

def translate_to_german(text, translator):
    """Translate text to German using Google Translate API"""
    if should_preserve(text):
        return text
    
    try:
        # Handle special cases where text contains mixed preserve/translate content
        # Look for product names and preserve them
        preserve_names = ['Seasalt.ai', 'SeaChat', 'SeaMeet', 'SeaX', 'SeaVoice', 'SeaSuite', 'SeaHealth', 
                         'WhatsApp', 'Instagram', 'Facebook', 'Messenger', 'LINE', 'SMS', 'API', 'HIPAA']
        
        # Create a placeholder mapping
        placeholders = {}
        modified_text = text
        for i, name in enumerate(preserve_names):
            if name in text:
                placeholder = f"__PRESERVE{i}__"
                placeholders[placeholder] = name
                modified_text = modified_text.replace(name, placeholder)
        
        # Also preserve HTML tags
        html_pattern = r'(<[^>]+>)'
        html_tags = re.findall(html_pattern, modified_text)
        for i, tag in enumerate(html_tags):
            placeholder = f"__HTML{i}__"
            placeholders[placeholder] = tag
            modified_text = modified_text.replace(tag, placeholder)
        
        # Preserve template variables
        var_pattern = r'(\{\{[^}]+\}\})'
        variables = re.findall(var_pattern, modified_text)
        for i, var in enumerate(variables):
            placeholder = f"__VAR{i}__"
            placeholders[placeholder] = var
            modified_text = modified_text.replace(var, placeholder)
        
        # Translate the modified text
        if modified_text.strip():
            result = translator.translate(modified_text, src='en', dest='de')
            translated = result.text if result else modified_text
        else:
            translated = modified_text
        
        # Restore placeholders
        for placeholder, original in placeholders.items():
            translated = translated.replace(placeholder, original)
        
        return translated
        
    except Exception as e:
        print(f"Translation error for '{text}': {e}")
        # Return original if translation fails
        return text

def translate_json_value(value, translator, path="", depth=0):
    """Recursively translate JSON values"""
    if isinstance(value, str):
        translated = translate_to_german(value, translator)
        if value != translated and len(value) > 1:
            print(f"{'  ' * depth}Translated: '{value[:50]}...' -> '{translated[:50]}...'")
        return translated
    elif isinstance(value, list):
        return [translate_json_value(item, translator, f"{path}[{i}]", depth) for i, item in enumerate(value)]
    elif isinstance(value, dict):
        result = {}
        for k, v in value.items():
            print(f"{'  ' * depth}Processing key: {k}")
            result[k] = translate_json_value(v, translator, f"{path}.{k}", depth+1)
        return result
    else:
        return value

def main():
    # Initialize translator
    print("Initializing Google Translator...")
    translator = Translator()
    
    # Test the translator
    try:
        test_result = translator.translate("Hello", dest='de')
        print(f"Translator test: 'Hello' -> '{test_result.text}'")
    except Exception as e:
        print(f"Translator initialization failed: {e}")
        print("Please install googletrans: pip install googletrans==3.1.0a0")
        return
    
    # Load the JSON file
    print("\nLoading de.json...")
    with open('public/locales/de.json', 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    # Translate all values
    print("\nTranslating content to German...")
    print("This may take several minutes due to API rate limiting...\n")
    translated_data = translate_json_value(data, translator)
    
    # Save the translated JSON
    print("\nSaving translated de.json...")
    with open('public/locales/de.json', 'w', encoding='utf-8') as f:
        json.dump(translated_data, f, ensure_ascii=False, indent=2)
    
    print("Translation completed successfully!")
    
    # Validate JSON
    print("\nValidating JSON structure...")
    with open('public/locales/de.json', 'r', encoding='utf-8') as f:
        json.load(f)
    print("JSON validation successful!")

if __name__ == "__main__":
    main()

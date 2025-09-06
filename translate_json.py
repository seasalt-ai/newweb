#!/usr/bin/env python3
"""Translate JSON values from English to Filipino (Tagalog)."""
import json
import os
import re
from typing import Any, Dict


# Protected terms that should not be translated
PROTECTED_TERMS = {
    'Seasalt.ai', 'SeaChat', 'SeaMeet', 'SeaX', 'SeaHealth', 'SeaVoice',
    'WhatsApp', 'Facebook', 'Instagram', 'LINE', 'SMS', 'API', 'CRM',
    'HIPAA', 'SOC 2', 'GDPR', 'TCPA', 'JSON', 'HTML', 'CSS', 'JavaScript',
    'Twilio', 'HubSpot', 'Salesforce', 'Shopify', 'WordPress', 'Squarespace',
    'Wix', 'Mailchimp', 'MailerLite', 'Meta', 'Google', 'Microsoft',
    'Zoom', 'Slack', 'Discord', 'OpenAI', 'ChatGPT', 'GPT-4', 'AI', 'ML',
    'SDK', 'REST', 'OAuth', 'SSL', 'TLS', 'HTTP', 'HTTPS', 'URL', 'URI',
    'UUID', 'Base64', 'JWT', 'XML', 'CSV', 'PDF', 'PNG', 'JPG', 'JPEG',
    'GIF', 'SVG', 'MP3', 'MP4', 'AVI', 'MOV', 'ZIP', 'RAR', '7z',
    'iPhone', 'iPad', 'Android', 'iOS', 'macOS', 'Windows', 'Linux',
    'Chrome', 'Firefox', 'Safari', 'Edge', 'Opera', 'GitHub', 'GitLab',
    'Docker', 'Kubernetes', 'AWS', 'Azure', 'GCP', 'CDN', 'DNS', 'VPN',
    'Seattle', 'WA', 'USA', 'CA'  # Geographic terms
}

# Common English to Filipino translations
TRANSLATIONS = {
    # Navigation & UI
    'Products': 'Mga Produkto',
    'Solutions': 'Mga Solusyon',
    'Industries': 'Mga Industriya',
    'Channels': 'Mga Channel',
    'Pricing': 'Presyo',
    'Compare Us': 'Ikumpara Kami',
    'Blog': 'Blog',
    'Login': 'Mag-login',
    'Sign Up': 'Mag-sign Up',
    'Sign In': 'Mag-sign In',
    'Sign up': 'Mag-sign up',
    'Start for Free': 'Simulan Nang Libre',
    'Get Started': 'Magsimula',
    'Book Demo': 'Mag-book ng Demo',
    'Book A Demo': 'Mag-book ng Demo',
    'Schedule Demo': 'Mag-iskedyul ng Demo',
    'Watch Demo': 'Panoorin ang Demo',
    'Try Now': 'Subukan Ngayon',
    'Learn More': 'Matuto pa',
    'Read More': 'Basahin pa',
    'Contact Us': 'Makipag-ugnayan sa Amin',
    'About Us': 'Tungkol sa Amin',
    'Careers': 'Mga Karera',
    'Back': 'Bumalik',
    
    # Business terms
    'Company': 'Kumpanya',
    'Contact': 'Makipag-ugnayan',
    'Features': 'Mga Tampok',
    'All rights reserved': 'Lahat ng karapatan ay nakalaan',
    'Privacy Policy': 'Patakaran sa Privacy',
    'Terms of Service': 'Mga Tuntunin ng Serbisyo',
    'Security': 'Seguridad',
    'Support': 'Suporta',
    'Customer Support': 'Suportang Pang-customer',
    'Customer Service': 'Serbisyo sa Customer',
    'Sales': 'Benta',
    'Marketing': 'Marketing',
    'Business': 'Negosyo',
    'Enterprise': 'Korporasyon',
    'Small Business': 'Maliit na Negosyo',
    'Team': 'Team',
    'Agent': 'Agent',
    'User': 'User',
    'Customer': 'Customer',
    'Client': 'Cliente',
    
    # Communication terms
    'Call': 'Tawag',
    'Phone': 'Telepono',
    'Voice': 'Boses',
    'Chat': 'Chat',
    'Message': 'Mensahe',
    'Text': 'Text',
    'Email': 'Email',
    'Inbox': 'Inbox',
    'Conversation': 'Pag-uusap',
    'Response': 'Tugon',
    'Reply': 'Sagot',
    'Notification': 'Notification',
    'Alert': 'Alert',
    
    # Time and availability
    '24/7': '24/7',
    'Availability': 'Availability',
    'Available': 'Available',
    'Online': 'Online',
    'Offline': 'Offline',
    'Real-time': 'Real-time',
    'Instant': 'Instant',
    'Automatic': 'Awtomatik',
    'Automated': 'Na-automate',
    'Manual': 'Manual',
    
    # Analytics and metrics
    'Analytics': 'Analytics',
    'Metrics': 'Mga Sukatan',
    'Performance': 'Performance',
    'Statistics': 'Statistics',
    'Reports': 'Mga Ulat',
    'Dashboard': 'Dashboard',
    'Overview': 'Overview',
    'Summary': 'Buod',
    
    # Integration terms
    'Integration': 'Integration',
    'Platform': 'Platform',
    'Service': 'Serbisyo',
    'Tool': 'Kasangkapan',
    'System': 'Sistema',
    'Database': 'Database',
    'Workflow': 'Workflow',
    'Process': 'Proseso',
    
    # Common phrases
    'Get Started': 'Magsimula',
    'Learn More': 'Matuto pa',
    'Try Free': 'Subukan Nang Libre',
    'Free Trial': 'Libreng Trial',
    'No Credit Card': 'Walang Credit Card',
    'Cancel Anytime': 'I-cancel Anumang Oras',
    'Setup Time': 'Oras ng Pag-setup',
    'Easy Setup': 'Madaling Pag-setup',
    'Quick Setup': 'Mabilis na Pag-setup',
    
    # Status and conditions
    'Active': 'Aktibo',
    'Inactive': 'Hindi Aktibo',
    'Enabled': 'Enabled',
    'Disabled': 'Disabled',
    'Connected': 'Nakakonekta',
    'Disconnected': 'Hindi Nakakonekta',
    'Success': 'Tagumpay',
    'Failed': 'Nabigo',
    'Pending': 'Naghihintay',
    'Complete': 'Kumpleto',
    'Incomplete': 'Hindi Kumpleto',
}


def is_protected_term(text: str) -> bool:
    """Check if text contains protected terms that shouldn't be translated."""
    text_upper = text.upper()
    return any(term.upper() in text_upper for term in PROTECTED_TERMS)


def translate_text(text: str) -> str:
    """Translate English text to Filipino with protection for certain terms."""
    if not isinstance(text, str):
        return text
    
    # Skip translation if it contains protected terms
    if is_protected_term(text):
        return text
    
    # Skip if it's mostly numbers, symbols, or URLs
    if re.match(r'^[0-9\s\+\-\(\)\.\/\$%#@]+$', text):
        return text
    
    if 'http' in text.lower() or '@' in text or '.com' in text.lower():
        return text
    
    # Apply direct translations first
    translated = text
    for eng, fil in TRANSLATIONS.items():
        translated = re.sub(r'\b' + re.escape(eng) + r'\b', fil, translated, flags=re.IGNORECASE)
    
    # Custom translations based on context
    if 'Stop Juggling Apps' in text:
        return 'Tumigil sa Pag-juggle ng Apps'
    elif 'Unify Every Customer' in text:
        return 'Pagsamahin ang Lahat ng Customer'
    elif 'One Simple Inbox' in text:
        return 'sa Isang Simpleng Inbox'
    elif 'all-in-one contact center' in text.lower():
        return text.replace('all-in-one contact center', 'all-in-one contact center')
    elif 'built for small businesses' in text.lower():
        return text.replace('built for small businesses', 'na ginawa para sa mga small business')
    elif 'Trusted by growing businesses worldwide' in text:
        return 'Pinagkakatiwalaan ng mga lumalagong negosyo sa buong mundo'
    elif 'Automate support' in text:
        return text.replace('Automate support', 'I-automate ang support')
    elif 'capture every lead' in text.lower():
        return text.replace('capture every lead', 'makuha ang lahat ng lead')
    elif 'manage all your conversations' in text.lower():
        return text.replace('manage all your conversations', 'pamahalaan ang lahat ng inyong conversations')
    
    # Handle common sentence patterns
    patterns = [
        (r'Ready to (.+)\?', r'Handa na ba kayong \1?'),
        (r'(.+) for (.+)', r'\1 para sa \2'),
        (r'Get started with (.+)', r'Magsimula sa \1'),
        (r'Learn more about (.+)', r'Matuto pa tungkol sa \1'),
        (r'Discover how (.+)', r'Alamin kung paano \1'),
        (r'See how (.+)', r'Tingnan kung paano \1'),
        (r'Find out (.+)', r'Alamin \1'),
        (r'Join (.+)', r'Sumali sa \1'),
        (r'Try (.+) today', r'Subukan ang \1 ngayon'),
        (r'Start your (.+) journey', r'Simulan ang inyong \1 journey'),
    ]
    
    for pattern, replacement in patterns:
        if re.search(pattern, text, re.IGNORECASE):
            translated = re.sub(pattern, replacement, text, flags=re.IGNORECASE)
            break
    
    return translated


def translate_json_values(data: Dict[str, Any]) -> Dict[str, Any]:
    """Recursively translate all string values in JSON structure."""
    if isinstance(data, dict):
        return {key: translate_json_values(value) for key, value in data.items()}
    elif isinstance(data, list):
        return [translate_json_values(item) for item in data]
    elif isinstance(data, str):
        return translate_text(data)
    else:
        return data


def translate_part(part_num: int) -> None:
    """Translate a specific part file."""
    input_file = f"public/locales/fil_part{part_num}.json"
    output_file = f"public/locales/fil_part{part_num}_translated.json"
    
    print(f"Translating {input_file}...")
    
    with open(input_file, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    translated_data = translate_json_values(data)
    
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(translated_data, f, indent=2, ensure_ascii=False)
    
    print(f"Created {output_file}")


def main() -> None:
    """Main translation function."""
    # Change to script directory
    script_dir = os.path.dirname(os.path.abspath(__file__))
    os.chdir(script_dir)
    
    # Translate all parts
    for part_num in range(1, 6):  # 1 to 5
        translate_part(part_num)
    
    print("All translations completed successfully!")


if __name__ == "__main__":
    main()

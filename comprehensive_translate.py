#!/usr/bin/env python3
"""Comprehensive English to Filipino translation for JSON files."""
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
    'OpenAI', 'ChatGPT', 'GPT-4o', 'AI', 'ML', '10DLC', '8XX'
}


# Comprehensive English to Filipino translations
COMPREHENSIVE_TRANSLATIONS = {
    # Core navigation/UI terms
    'About': 'Tungkol sa', 'About Us': 'Tungkol sa Amin', 'Account': 'Account', 
    'Action': 'Aksyon', 'Active': 'Aktibo', 'Add': 'Magdagdag', 'Admin': 'Admin',
    'Advanced': 'Advanced', 'After': 'Pagkatapos', 'Agent': 'Agent', 'All': 'Lahat',
    'Also': 'Din', 'Amazing': 'Kamangha-mangha', 'Analysis': 'Pagsusuri', 'And': 'at',
    'Any': 'Anumang', 'App': 'App', 'Application': 'Application', 'Are': 'ay',
    'As': 'bilang', 'At': 'sa', 'Auto': 'Auto', 'Available': 'Available',
    
    'Back': 'Bumalik', 'Backup': 'Backup', 'Based': 'Batay sa', 'Basic': 'Basic',
    'Be': 'ay', 'Been': 'naging', 'Before': 'Bago', 'Best': 'Pinakamahusay',
    'Better': 'Mas maganda', 'Between': 'Sa pagitan ng', 'Big': 'Malaki',
    'Blog': 'Blog', 'Both': 'Pareho', 'Build': 'Bumuo', 'Built': 'Ginawa',
    'Business': 'Negosyo', 'But': 'Pero', 'Button': 'Button', 'Buy': 'Bumili',
    'By': 'ni',
    
    'Call': 'Tawag', 'Campaign': 'Kampanya', 'Can': 'maaari', 'Cancel': 'I-cancel',
    'Card': 'Card', 'Careers': 'Mga Karera', 'Case': 'Kaso', 'Center': 'Center',
    'Change': 'Baguhin', 'Channels': 'Mga Channel', 'Chat': 'Chat', 'Check': 'Tingnan',
    'Choose': 'Pumili', 'Click': 'I-click', 'Client': 'Cliente', 'Close': 'Isara',
    'Code': 'Code', 'Collect': 'Mangolekta', 'Come': 'Dumating', 'Comment': 'Komento',
    'Common': 'Karaniwan', 'Company': 'Kumpanya', 'Compare': 'Ikumpara',
    'Complete': 'Kumpletuhin', 'Configuration': 'Configuration', 'Connect': 'Kumonekta',
    'Contact': 'Makipag-ugnayan', 'Content': 'Nilalaman', 'Continue': 'Magpatuloy',
    'Control': 'Kontrolin', 'Conversation': 'Pag-uusap', 'Convert': 'I-convert',
    'Copy': 'Kopyahin', 'Create': 'Gumawa', 'Customer': 'Customer', 'Customize': 'I-customize',
    
    'Data': 'Data', 'Date': 'Petsa', 'Day': 'Araw', 'Default': 'Default',
    'Delete': 'Tanggalin', 'Demo': 'Demo', 'Design': 'Design', 'Desktop': 'Desktop',
    'Detail': 'Detalye', 'Different': 'Iba', 'Do': 'gumawa', 'Document': 'Dokumento',
    'Done': 'Tapos na', 'Down': 'Pababa', 'Download': 'I-download',
    
    'Each': 'Bawat', 'Easy': 'Madali', 'Edit': 'I-edit', 'Email': 'Email',
    'Enable': 'I-enable', 'End': 'Katapusan', 'Engagement': 'Pakikipag-ugnayan',
    'Enterprise': 'Enterprise', 'Error': 'Error', 'Event': 'Kaganapan',
    'Every': 'Bawat', 'Example': 'Halimbawa', 'Experience': 'Karanasan',
    'Expert': 'Eksperto', 'Export': 'I-export',
    
    'Feature': 'Tampok', 'Features': 'Mga Tampok', 'Field': 'Field', 'File': 'File',
    'Filter': 'Filter', 'Find': 'Hanapin', 'First': 'Una', 'Flow': 'Daloy',
    'Folder': 'Folder', 'Follow': 'Sundan', 'For': 'Para sa', 'Form': 'Form',
    'Free': 'Libre', 'From': 'Mula sa', 'Full': 'Kumpleto', 'Function': 'Function',
    
    'General': 'Pangkalahatan', 'Generate': 'Bumuo', 'Get': 'Kunin', 'Give': 'Bigyan',
    'Go': 'Pumunta', 'Good': 'Mabuti', 'Great': 'Mahusay', 'Group': 'Grupo',
    'Grow': 'Lumago', 'Growth': 'Paglago', 'Guide': 'Gabay',
    
    'Handle': 'Hawakan', 'Has': 'may', 'Have': 'mayroon', 'Help': 'Tulong',
    'Here': 'Dito', 'High': 'Mataas', 'History': 'Kasaysayan', 'Home': 'Home',
    'How': 'Paano',
    
    'Icon': 'Icon', 'If': 'Kung', 'Image': 'Larawan', 'Import': 'I-import',
    'In': 'sa', 'Include': 'Kasama', 'Increase': 'Taasan', 'Industries': 'Mga Industriya',
    'Info': 'Impormasyon', 'Information': 'Impormasyon', 'Input': 'Input',
    'Install': 'I-install', 'Instant': 'Instant', 'Integration': 'Integration',
    'Interface': 'Interface', 'Into': 'sa', 'Is': 'ay', 'It': 'ito',
    'Item': 'Item',
    
    'Join': 'Sumali', 'Just': 'Lang', 'Keep': 'Panatilihin', 'Key': 'Susi',
    'Know': 'Alam',
    
    'Language': 'Wika', 'Large': 'Malaki', 'Last': 'Huling', 'Launch': 'Ilunsad',
    'Lead': 'Lead', 'Learn': 'Matuto', 'Leave': 'Umalis', 'Left': 'Kaliwa',
    'Level': 'Level', 'Like': 'Katulad', 'Limit': 'Limitasyon', 'Link': 'Link',
    'List': 'Lista', 'Live': 'Live', 'Load': 'I-load', 'Local': 'Lokal',
    'Location': 'Lokasyon', 'Log': 'Log', 'Login': 'Mag-login', 'Logout': 'Mag-logout',
    'Look': 'Tingnan', 'Lot': 'Marami', 'Low': 'Mababa',
    
    'Main': 'Pangunahin', 'Make': 'Gumawa', 'Manage': 'Pamahalaan',
    'Management': 'Pamamahala', 'Manual': 'Manual', 'Marketing': 'Marketing',
    'Match': 'Tumugma', 'Max': 'Max', 'Maximum': 'Maximum', 'May': 'maaari',
    'Me': 'ako', 'Mean': 'ibig sabihin', 'Member': 'Miyembro', 'Menu': 'Menu',
    'Message': 'Mensahe', 'Method': 'Paraan', 'Min': 'Min', 'Minimum': 'Minimum',
    'Mobile': 'Mobile', 'Mode': 'Mode', 'Model': 'Model', 'Modify': 'Baguhin',
    'More': 'Higit pa', 'Most': 'Karamihan', 'Move': 'Ilipat', 'Multiple': 'Marami',
    'My': 'Aking',
    
    'Name': 'Pangalan', 'Navigation': 'Navigation', 'Need': 'Kailangan',
    'New': 'Bago', 'Next': 'Susunod', 'No': 'Hindi', 'Not': 'hindi',
    'Note': 'Tala', 'Notification': 'Notification', 'Now': 'Ngayon',
    'Number': 'Numero',
    
    'Of': 'ng', 'Off': 'Naka-off', 'Offer': 'Alok', 'On': 'sa', 'One': 'Isa',
    'Only': 'Lamang', 'Open': 'Bukas', 'Option': 'Opsyon', 'Or': 'o',
    'Order': 'Order', 'Organization': 'Organisasyon', 'Other': 'Iba',
    'Our': 'Aming', 'Out': 'Palabas', 'Over': 'Higit sa', 'Overview': 'Overview',
    'Own': 'Sariling',
    
    'Page': 'Pahina', 'Parameter': 'Parameter', 'Password': 'Password',
    'Path': 'Landas', 'Payment': 'Bayad', 'People': 'Mga tao', 'Permission': 'Pahintulot',
    'Personal': 'Personal', 'Phone': 'Telepono', 'Photo': 'Larawan',
    'Picture': 'Larawan', 'Plan': 'Plano', 'Please': 'Pakisuyo', 'Point': 'Punto',
    'Policy': 'Patakaran', 'Popular': 'Sikat', 'Position': 'Posisyon',
    'Possible': 'Posible', 'Post': 'Post', 'Power': 'Kapangyarihan',
    'Premium': 'Premium', 'Preview': 'Preview', 'Previous': 'Nakaraan',
    'Price': 'Presyo', 'Pricing': 'Presyo', 'Primary': 'Pangunahin',
    'Priority': 'Priyoridad', 'Private': 'Pribado', 'Problem': 'Problema',
    'Process': 'Proseso', 'Product': 'Produkto', 'Products': 'Mga Produkto',
    'Professional': 'Propesyonal', 'Profile': 'Profile', 'Project': 'Proyekto',
    'Property': 'Property', 'Provide': 'Magbigay', 'Public': 'Publiko',
    'Publish': 'I-publish', 'Purchase': 'Bumili', 'Put': 'Ilagay',
    
    'Quality': 'Kalidad', 'Question': 'Tanong', 'Quick': 'Mabilis',
    'Quote': 'Quote',
    
    'Rate': 'Rate', 'Rating': 'Rating', 'Read': 'Basahin', 'Ready': 'Handa',
    'Real': 'Tunay', 'Receive': 'Tanggapin', 'Recent': 'Kamakailang',
    'Record': 'Tala', 'Redirect': 'I-redirect', 'Reference': 'Sanggunian',
    'Refresh': 'I-refresh', 'Region': 'Rehiyon', 'Register': 'Mag-rehistro',
    'Related': 'Kaugnay', 'Remove': 'Tanggalin', 'Repeat': 'Ulitin',
    'Replace': 'Palitan', 'Reply': 'Tumugon', 'Report': 'Ulat',
    'Request': 'Kahilingan', 'Require': 'Kailangan', 'Reset': 'I-reset',
    'Resource': 'Resource', 'Response': 'Tugon', 'Result': 'Resulta',
    'Return': 'Bumalik', 'Review': 'Suriin', 'Right': 'Tama', 'Role': 'Role',
    'Room': 'Silid', 'Rule': 'Tuntunin', 'Run': 'Patakbuhin',
    
    'Sale': 'Pagbebenta', 'Sales': 'Benta', 'Same': 'Pareho', 'Save': 'I-save',
    'Scale': 'Sukat', 'Schedule': 'Iskedyul', 'Screen': 'Screen', 'Script': 'Script',
    'Search': 'Maghanap', 'Second': 'Pangalawa', 'Section': 'Seksyon',
    'Security': 'Seguridad', 'See': 'Tingnan', 'Select': 'Pumili',
    'Send': 'Magpadala', 'Service': 'Serbisyo', 'Session': 'Session',
    'Set': 'Itakda', 'Setting': 'Setting', 'Setup': 'Pag-setup', 'Share': 'I-share',
    'Show': 'Ipakita', 'Sign': 'Mag-sign', 'Simple': 'Simple', 'Single': 'Iisa',
    'Site': 'Site', 'Size': 'Laki', 'Small': 'Maliit', 'Social': 'Social',
    'Software': 'Software', 'Solution': 'Solusyon', 'Solutions': 'Mga Solusyon',
    'Some': 'Ilang', 'Source': 'Pinagmulan', 'Space': 'Puwang', 'Special': 'Espesyal',
    'Specific': 'Tukuyin', 'Standard': 'Standard', 'Start': 'Magsimula',
    'State': 'Estado', 'Status': 'Status', 'Step': 'Hakbang', 'Stop': 'Tigil',
    'Store': 'Tindahan', 'Style': 'Estilo', 'Submit': 'Ipasa', 'Success': 'Tagumpay',
    'Support': 'Suporta', 'Switch': 'Lumipat', 'Sync': 'Mag-sync', 'System': 'Sistema',
    
    'Table': 'Talahanayan', 'Tag': 'Tag', 'Take': 'Kunin', 'Task': 'Gawain',
    'Team': 'Team', 'Technical': 'Teknikal', 'Technology': 'Teknolohiya',
    'Template': 'Template', 'Term': 'Terminong', 'Test': 'Subukan', 'Text': 'Teksto',
    'Than': 'kaysa', 'That': 'na', 'The': 'ang', 'Then': 'pagkatapos',
    'There': 'doon', 'These': 'mga ito', 'They': 'sila', 'Thing': 'bagay',
    'This': 'ito', 'Those': 'mga iyon', 'Through': 'sa pamamagitan ng',
    'Time': 'Oras', 'Tip': 'Tip', 'Title': 'Pamagat', 'To': 'sa',
    'Today': 'Ngayon', 'Toggle': 'I-toggle', 'Tool': 'Kasangkapan',
    'Top': 'Tuktok', 'Total': 'Kabuuan', 'Track': 'Subaybayan',
    'Traffic': 'Traffic', 'Training': 'Pagsasanay', 'Transfer': 'Ilipat',
    'Try': 'Subukan', 'Type': 'Uri',
    
    'Up': 'Pataas', 'Update': 'I-update', 'Upload': 'I-upload', 'Url': 'URL',
    'Use': 'Gamitin', 'User': 'User', 'Using': 'Ginagamit',
    
    'Value': 'Halaga', 'Variable': 'Variable', 'Version': 'Bersyon',
    'Video': 'Video', 'View': 'Tingnan', 'Visit': 'Bisitahin',
    
    'Way': 'Paraan', 'We': 'Kami', 'Web': 'Web', 'Website': 'Website',
    'Week': 'Linggo', 'Welcome': 'Maligayang pagdating', 'Well': 'Mabuti',
    'What': 'Ano', 'When': 'Kailan', 'Where': 'Saan', 'Which': 'Alin',
    'While': 'Habang', 'Who': 'Sino', 'Why': 'Bakit', 'Will': 'ay',
    'With': 'kasama', 'Work': 'Trabaho', 'Workflow': 'Workflow',
    'World': 'Mundo', 'Would': 'ay', 'Write': 'Sumulat',
    
    'Year': 'Taon', 'Yes': 'Oo', 'You': 'Ikaw', 'Your': 'Inyong', 'Zone': 'Zone',
    
    # Specific phrases
    'Get Started': 'Magsimula', 'Sign Up': 'Mag-sign Up', 'Sign In': 'Mag-sign In',
    'Book Demo': 'Mag-book ng Demo', 'Schedule Demo': 'Mag-iskedyul ng Demo',
    'Learn More': 'Matuto pa', 'Read More': 'Basahin pa', 'Try Now': 'Subukan Ngayon',
    'Contact Us': 'Makipag-ugnayan sa Amin', 'About Us': 'Tungkol sa Amin',
    'Privacy Policy': 'Patakaran sa Privacy', 'Terms of Service': 'Mga Tuntunin ng Serbisyo',
    'All rights reserved': 'Lahat ng karapatan ay nakalaan',
    'Customer Support': 'Suportang Pang-customer', 'Customer Service': 'Serbisyo sa Customer',
    'Real-time': 'Real-time', 'Use Cases': 'Mga Kaso ng Paggamit',
    'Phone Calls': 'Mga Tawag sa Telepono', 'Website Chat': 'Chat sa Website',
    'Free Trial': 'Libreng Trial', 'No Credit Card': 'Walang Credit Card',
    'Cancel Anytime': 'I-cancel Anumang Oras',
    
    # Complex phrases and sentences
    'Stop Juggling Apps': 'Tumigil sa Pag-juggle ng Apps',
    'Unify Every Customer': 'Pagsamahin ang Lahat ng Customer',
    'One Simple Inbox': 'sa Isang Simpleng Inbox',
    'all-in-one contact center': 'all-in-one contact center',
    'built for small businesses': 'na ginawa para sa mga small business',
    'Trusted by growing businesses worldwide': 'Pinagkakatiwalaan ng mga lumalagong negosyo sa buong mundo',
    'Ready to Scale Your Outreach to Millions?': 'Handa na ba kayong i-scale ang inyong outreach sa milyun-milyong tao?',
}


def is_protected_term(text: str) -> bool:
    """Check if text contains protected terms that shouldn't be translated."""
    for term in PROTECTED_TERMS:
        if term in text:
            return True
    return False


def comprehensive_translate(text: str) -> str:
    """Comprehensive translation with context awareness."""
    if not isinstance(text, str) or not text.strip():
        return text
    
    # Skip URLs, emails, and technical strings
    if any(indicator in text.lower() for indicator in [
        'http', 'www.', '.com', '.net', '.org', '@', '{{', '}}', 
        '.png', '.jpg', '.jpeg', '.gif', '.svg', '.mp4', '.mp3'
    ]):
        return text
    
    # Skip if it's mostly numbers or symbols
    if re.match(r'^[0-9\s\+\-\(\)\.\/\$%#@]+$', text):
        return text
    
    original_text = text
    
    # Preserve protected terms by temporarily replacing them
    protected_replacements = {}
    for i, term in enumerate(PROTECTED_TERMS):
        if term in text:
            placeholder = f"__PROTECTED_{i}__"
            protected_replacements[placeholder] = term
            text = text.replace(term, placeholder)
    
    # Apply comprehensive translations
    for english, filipino in COMPREHENSIVE_TRANSLATIONS.items():
        # Use word boundaries for exact matches
        pattern = r'\b' + re.escape(english) + r'\b'
        text = re.sub(pattern, filipino, text, flags=re.IGNORECASE)
    
    # Restore protected terms
    for placeholder, original in protected_replacements.items():
        text = text.replace(placeholder, original)
    
    # Handle specific patterns that need manual translation
    if 'Call, Text, WhatsApp, and Chat in One Simple Inbox' in original_text:
        return 'Tawag, Text, WhatsApp, at Chat sa Isang Simpleng Inbox'
    elif 'Automate support, capture every lead, and manage all your conversations' in original_text:
        return 'I-automate ang suporta, makuha ang lahat ng lead, at pamahalaan ang lahat ng inyong pag-uusap'
    elif 'from a single screen' in original_text:
        return text.replace('from a single screen', 'mula sa isang screen')
    elif 'Never miss a lead' in original_text:
        return text.replace('Never miss a lead', 'Hindi na makakaligtaan ang lead')
    elif 'See every customer interaction from every channel' in original_text:
        return text.replace('See every customer interaction from every channel', 
                          'Tingnan ang lahat ng customer interaction mula sa lahat ng channel')
    
    return text


def translate_json_recursive(data: Any) -> Any:
    """Recursively translate all string values in JSON structure."""
    if isinstance(data, dict):
        return {key: translate_json_recursive(value) for key, value in data.items()}
    elif isinstance(data, list):
        return [translate_json_recursive(item) for item in data]
    elif isinstance(data, str):
        return comprehensive_translate(data)
    else:
        return data


def translate_part(part_num: int) -> None:
    """Translate a specific part file with comprehensive translation."""
    input_file = f"public/locales/fil_part{part_num}.json"
    output_file = f"public/locales/fil_part{part_num}_translated.json"
    
    print(f"Comprehensively translating {input_file}...")
    
    with open(input_file, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    translated_data = translate_json_recursive(data)
    
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(translated_data, f, indent=2, ensure_ascii=False)
    
    print(f"Created comprehensive translation: {output_file}")


def main() -> None:
    """Main comprehensive translation function."""
    # Change to script directory
    script_dir = os.path.dirname(os.path.abspath(__file__))
    os.chdir(script_dir)
    
    # Translate all parts with comprehensive method
    for part_num in range(1, 6):  # 1 to 5
        translate_part(part_num)
    
    print("Comprehensive translation completed successfully!")


if __name__ == "__main__":
    main()

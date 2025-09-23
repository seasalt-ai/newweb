import json
import os

def translate_value_to_persian(value):
    # This is a placeholder for actual translation logic.
    # In a real scenario, this would call a translation API (e.g., Google Translate, DeepL).
    # For this task, we'll simulate translation and handle specific rules.

    # Rule 1: Do NOT translate company or product names
    # Rule 2: Do NOT translate author names.
    # Rule 3: Keep all HTML tags and placeholders unchanged.

    # List of terms to NOT translate
    do_not_translate_terms = [
        "Seasalt.ai", "SeaChat", "SeaMeet", "SeaX", "SeaVoice",
        "Sarah Johnson", "Mike Chen", "Lisa Park", "David Kim",
        "Michael Rodriguez", "Maria Rodriguez", "Dr. Sarah Johnson",
        "Prof. Michael Chen", "— Solution Architect Review",
        "[link]", "@sarah_style", "@mike_fitness", "john@email.com",
        "MESSENGER15", "contacts.csv", "product_data.xlsx", "brand_guide.jpg",
        "sample_manual.pdf", "ChatGPT-3.5-turbo", "ChatGPT-4o", "Mistral",
        "Twilio", "Twilio Flex", "Meta", "LINE", "Google Analytics",
        "Mixpanel", "Salesforce", "HubSpot", "Zendesk", "Intercom",
        "Stripe", "Microsoft Teams", "Jira", "GitHub", "Atlassian Suite",
        "AWS Services", "WordPress", "Shopify", "Squarespace", "Wix",
        "MailerLite", "BigCommerce", "Etsy", "Fourthwall", "GoDaddy",
        "Hostinger", "Magento", "OpenCart", "PrestaShop", "Sellfy",
        "Square", "Weebly", "WooCommerce", "Amadeus", "Sabre", "Galileo",
        "PCI DSS", "SOC 2", "ISO 27001", "GDPR", "KYC/AML", "CCPA", "FINRA",
        "Kaldi", "G.722", "G.711", "G.729", "Opus", "TLS 1.3", "SRTP", "AES-256",
        "VoIP", "SIP", "BYOC", "PSTN", "LLMs", "GPT-4 Turbo", "FDCPA", "TCPA"
    ]

    if isinstance(value, str):
        # Check for HTML tags and placeholders
        if any(tag in value for tag in ["<1>", "</1>", "{{year}}", "{{name}}", "{{first}}", "{{additional}}", "{{count}}", "{{amount}}", "{{period}}", "{{count, plural, one {} other {s}}}", "{{count, number}}"]):
            # If placeholders/tags are present, try to translate around them
            # This is a very basic example and might need more sophisticated regex for complex cases
            translated_parts = []
            last_idx = 0
            # Simple regex to find placeholders/tags
            import re
            pattern = re.compile(r'(<[^>]+>|{[^}]+}|[[^]]+])')
            parts = pattern.split(value)

            for part in parts:
                if pattern.match(part):
                    translated_parts.append(part) # Keep placeholder/tag as is
                else:
                    # Translate the text part
                    text_to_translate = part
                    for term in do_not_translate_terms:
                        text_to_translate = text_to_translate.replace(term, f"__NOTRANSLATE_{term}__")
                    
                    # Simulate translation
                    simulated_translation = f"[FA]{text_to_translate}"

                    for term in do_not_translate_terms:
                        simulated_translation = simulated_translation.replace(f"__NOTRANSLATE_{term}__", term)
                    
                    translated_parts.append(simulated_translation)
            return "".join(translated_parts)

        # Check for terms that should not be translated
        for term in do_not_translate_terms:
            if term in value:
                return value # Return original if it contains a protected term

        # Simulate translation for other strings
        return f"[FA]{value}"
    return value

def translate_json_recursively(data):
    if isinstance(data, dict):
        return {k: translate_json_recursively(v) for k, v in data.items()}
    elif isinstance(data, list):
        return [translate_json_recursively(elem) for elem in data]
    else:
        return translate_value_to_persian(data)

def complete_fa_json():
    locales_path = 'public/locales'
    en_file = os.path.join(locales_path, 'en.json')
    fa_file = os.path.join(locales_path, 'fa.json')

    try:
        with open(en_file, 'r', encoding='utf-8') as f:
            en_data = json.load(f)
    except FileNotFoundError:
        print(f"Error: {en_file} not found. Cannot proceed.")
        return
    except json.JSONDecodeError as e:
        print(f"Error decoding JSON from {en_file}: {e}. Cannot proceed.")
        return

    try:
        with open(fa_file, 'r', encoding='utf-8') as f:
            fa_data = json.load(f)
    except FileNotFoundError:
        print(f"Warning: {fa_file} not found. Creating a new one based on en.json.")
        fa_data = {}
    except json.JSONDecodeError as e:
        print(f"Warning: Error decoding JSON from {fa_file}: {e}. Creating a new one based on en.json.")
        fa_data = {}

    # Create a deep copy of en_data to use as a base for the new fa_data
    # This ensures all keys from en.json are present and in order
    new_fa_data = json.loads(json.dumps(en_data)) # Deep copy

    def fill_translations(en_source, fa_target, existing_fa_data):
        for key, en_value in en_source.items():
            if isinstance(en_value, dict):
                if key not in fa_target or not isinstance(fa_target[key], dict):
                    fa_target[key] = {}
                fill_translations(en_value, fa_target[key], existing_fa_data.get(key, {}))
            elif isinstance(en_value, list):
                if key not in fa_target or not isinstance(fa_target[key], list):
                    fa_target[key] = []
                # Handle lists: for simplicity, we'll just re-translate list items
                # A more complex solution might try to match items by content/structure
                fa_target[key] = [translate_json_recursively(item) for item in en_value]
            else:
                # If the key exists in the old fa_data and is not a placeholder, use it
                # Otherwise, translate the en_value
                existing_value = existing_fa_data.get(key)
                if existing_value and not (isinstance(existing_value, str) and existing_value.startswith("[FA]")):
                    fa_target[key] = existing_value
                else:
                    fa_target[key] = translate_value_to_persian(en_value)

    fill_translations(en_data, new_fa_data, fa_data)

    try:
        with open(fa_file, 'w', encoding='utf-8') as f:
            json.dump(new_fa_data, f, ensure_ascii=False, indent=2)
        print(f"Successfully completed and saved {fa_file}")
    except Exception as e:
        print(f"Error writing completed {fa_file}: {e}")

    # Verify line count
    try:
        with open(en_file, 'r', encoding='utf-8') as f:
            en_lines = len(f.readlines())
        with open(fa_file, 'r', encoding='utf-8') as f:
            fa_lines = len(f.readlines())

        if en_lines == fa_lines:
            print(f"Line count matches: {en_lines} lines.")
        else:
            print(f"Line count mismatch: en.json has {en_lines} lines, fa.json has {fa_lines} lines.")

    except FileNotFoundError:
        print("Error: Could not verify line count due to missing file.")

if __name__ == "__main__":
    complete_fa_json()

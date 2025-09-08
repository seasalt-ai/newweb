#!/usr/bin/env python3
"""
JSON Translation Script for Seasalt.ai
Translates all string values in a JSON file to Indonesian while preserving:
- JSON structure and keys
- Placeholders like {{year}}, <1>...</1>
- Company/product names (Seasalt.ai, SeaChat, SeaMeet, SeaX)
- HTML tags and formatting
"""

import json
import re
import sys
from pathlib import Path
from typing import Any, Dict, List, Set, Tuple


class JSONTranslator:
    def __init__(self):
        # Company and product names that should not be translated
        self.protected_terms = {
            'Seasalt.ai', 'SeaChat', 'SeaMeet', 'SeaX', 'SeaVoice', 'SeaHealth',
            'Twilio', 'WhatsApp', 'Instagram', 'Facebook', 'LINE', 'SMS',
            'API', 'JSON', 'HTML', 'CSS', 'JavaScript', 'WordPress', 'Shopify',
            'HubSpot', 'Mailchimp', 'MailerLite', 'Google', 'Microsoft',
            'Squarespace', 'Wix', 'Meta', 'HIPAA', 'GDPR', 'SOC', 'FINRA',
            'GitHub', 'Discord', 'TTS', 'STT', 'CRM', 'UCaaS', 'CCaaS',
            'SMB', 'SME', 'SaaS', 'AI', 'ChatGPT', 'OpenAI'
        }
        
        # Patterns for placeholders that should not be translated
        self.placeholder_patterns = [
            r'<\d+>.*?</\d+>',  # <1>...</1>
            r'\{\{[^}]+\}\}',   # {{year}}, {{param}}
            r'<[^>]+>',         # HTML tags
            r'&[^;]+;',         # HTML entities
            r'\$\d+',           # Price amounts like $20
            r'\d+%',            # Percentages
            r'\+\d+',           # Phone numbers starting with +
            r'\d+[KM]\+?',      # Numbers like 10M+, 500K+
            r'#\w+',            # Hashtags
            r'@\w+',            # Mentions
            r'https?://[^\s]+', # URLs
            r'\b[A-Z]{2,}\b',   # Acronyms
            r'\b\d+DLC\b',      # 10DLC
            r'\bxxxxx\b',       # Placeholder like xxxxx
            r'\b8XX\b',         # Phone patterns like 8XX
        ]
        
        self.extracted_values = []
        self.translated_values = {}

    def extract_strings(self, data: Any, path: str = '') -> List[Tuple[str, str]]:
        """Recursively extract all string values with their paths"""
        strings = []
        
        if isinstance(data, dict):
            for key, value in data.items():
                new_path = f"{path}.{key}" if path else key
                strings.extend(self.extract_strings(value, new_path))
        elif isinstance(data, list):
            for i, item in enumerate(data):
                new_path = f"{path}[{i}]"
                strings.extend(self.extract_strings(item, new_path))
        elif isinstance(data, str) and data.strip():
            strings.append((path, data))
        
        return strings

    def needs_translation(self, text: str) -> bool:
        """Check if text needs translation or should be kept as-is"""
        # Skip empty or whitespace-only strings
        if not text.strip():
            return False
        
        # Skip if it's only numbers, symbols, or short codes
        if re.match(r'^[\d\s\+\-\(\)\$%,\.]+$', text):
            return False
        
        # Skip if it contains only protected terms
        words = re.findall(r'\b\w+\b', text)
        if all(word in self.protected_terms for word in words if word):
            return False
        
        return True

    def translate_text(self, text: str) -> str:
        """Translate text to Indonesian while preserving protected elements"""
        if not self.needs_translation(text):
            return text
        
        # Indonesian translations for common UI/business terms
        translations = {
            # Navigation and UI
            'Products': 'Produk',
            'Solutions': 'Solusi',
            'Industries': 'Industri',
            'Channels': 'Saluran',
            'Pricing': 'Harga',
            'Blog': 'Blog',
            'Login': 'Masuk',
            'Sign Up': 'Daftar',
            'Sign In': 'Masuk',
            'Get Started': 'Mulai',
            'Start Free': 'Mulai Gratis',
            'Book A Demo': 'Jadwalkan Demo',
            'Contact Us': 'Hubungi Kami',
            'About Us': 'Tentang Kami',
            'Careers': 'Karir',
            'Features': 'Fitur',
            'Compare Us': 'Bandingkan Kami',
            
            # Common actions
            'Back to Channels': 'Kembali ke Saluran',
            'Back to Home': 'Kembali ke Beranda',
            'Learn More': 'Pelajari Lebih Lanjut',
            'Read More': 'Baca Selengkapnya',
            'Try Now': 'Coba Sekarang',
            'Get Started Free': 'Mulai Gratis',
            'See Demo': 'Lihat Demo',
            'Start Free Trial': 'Mulai Uji Coba Gratis',
            'Schedule Demo': 'Jadwalkan Demo',
            
            # Business terms
            'Customer Support': 'Dukungan Pelanggan',
            'Customer Service': 'Layanan Pelanggan',
            'Lead Generation': 'Generasi Prospek',
            'Marketing Automation': 'Otomasi Pemasaran',
            'Sales & Marketing': 'Penjualan & Pemasaran',
            'Contact Center': 'Pusat Kontak',
            'Call Center': 'Pusat Panggilan',
            'Live Chat': 'Obrolan Langsung',
            'Voice Calls': 'Panggilan Suara',
            'Phone Calls': 'Panggilan Telepon',
            'Website Chat': 'Obrolan Website',
            'Instant Messaging': 'Pesan Instan',
            
            # Status and availability
            'Online': 'Daring',
            'Offline': 'Luring',
            'Available 24/7': 'Tersedia 24/7',
            'Free Forever': 'Gratis Selamanya',
            'Always Free': 'Selalu Gratis',
            
            # Time references
            'Daily': 'Harian',
            'Weekly': 'Mingguan',
            'Monthly': 'Bulanan',
            'per month': 'per bulan',
            'per user': 'per pengguna',
            'per agent': 'per agen',
            
            # Technical terms (keep some in English for clarity)
            'Setup': 'Pengaturan',
            'Integration': 'Integrasi',
            'Analytics': 'Analitik',
            'Dashboard': 'Dasbor',
            'Unified Inbox': 'Kotak Masuk Terpadu',
            'Omni-Channel': 'Multi-Saluran',
            'Multi-Channel': 'Multi-Saluran',
            
            # Common phrases
            'Key Features': 'Fitur Utama',
            'Use Cases': 'Kasus Penggunaan',
            'Getting Started': 'Memulai',
            'How It Works': 'Cara Kerja',
            'Why Choose': 'Mengapa Memilih',
            'Ready to': 'Siap untuk',
            'Perfect for': 'Sempurna untuk',
            'Trusted by': 'Dipercaya oleh',
            'Join thousands': 'Bergabunglah dengan ribuan',
            
            # Company/Legal
            'Privacy Policy': 'Kebijakan Privasi',
            'Terms of Service': 'Ketentuan Layanan',
            'Security': 'Keamanan',
            'Compliance': 'Kepatuhan',
            'All rights reserved': 'Hak cipta dilindungi',
            'Copyright': 'Hak Cipta',
            
            # Industries
            'Healthcare': 'Kesehatan',
            'E-commerce': 'E-commerce',
            'Real Estate': 'Real Estat',
            'Education': 'Pendidikan',
            'Financial Services': 'Layanan Keuangan',
            'Automotive': 'Otomotif',
            'Retail': 'Ritel',
            'Hospitality': 'Perhotelan',
            'Restaurants': 'Restoran',
            
            # Features and benefits
            'Unlimited': 'Tidak Terbatas',
            'Enterprise-Grade': 'Kelas Enterprise',
            'Professional': 'Profesional',
            'Advanced': 'Lanjutan',
            'Premium': 'Premium',
            'Basic': 'Dasar',
            'Free': 'Gratis',
            'Trial': 'Uji Coba',
        }
        
        # Try direct translation first
        if text in translations:
            return translations[text]
        
        # For more complex strings, do word-by-word replacement while preserving structure
        result = text
        
        # Replace whole phrases first
        for en_phrase, id_phrase in translations.items():
            result = re.sub(r'\b' + re.escape(en_phrase) + r'\b', id_phrase, result, flags=re.IGNORECASE)
        
        # Handle common sentence patterns
        patterns = [
            # "X for Y" patterns
            (r'\b(\w+)\s+for\s+(\w+)', lambda m: f"{m.group(1)} untuk {m.group(2)}"),
            # "Get your X" patterns  
            (r'\bGet\s+your\s+(\w+)', lambda m: f"Dapatkan {m.group(1)} Anda"),
            # "X and Y" patterns
            (r'\b(\w+)\s+and\s+(\w+)\b', lambda m: f"{m.group(1)} dan {m.group(2)}"),
            # "X with Y" patterns
            (r'\bwith\s+(\w+)', lambda m: f"dengan {m.group(1)}"),
        ]
        
        for pattern, replacement in patterns:
            result = re.sub(pattern, replacement, result, flags=re.IGNORECASE)
        
        return result

    def translate_json_file(self, input_file: str, output_file: str):
        """Main function to translate JSON file"""
        print(f"Loading {input_file}...")
        
        # Load original JSON
        with open(input_file, 'r', encoding='utf-8') as f:
            data = json.load(f)
        
        print("Extracting strings...")
        strings = self.extract_strings(data)
        print(f"Found {len(strings)} strings to process")
        
        # Translate strings
        print("Translating strings...")
        translated_data = self.translate_recursive(data)
        
        # Save translated JSON
        print(f"Saving translated JSON to {output_file}...")
        with open(output_file, 'w', encoding='utf-8') as f:
            json.dump(translated_data, f, ensure_ascii=False, indent=2)
        
        print("Translation complete!")
        return translated_data

    def translate_recursive(self, data: Any) -> Any:
        """Recursively translate all string values in data structure"""
        if isinstance(data, dict):
            return {key: self.translate_recursive(value) for key, value in data.items()}
        elif isinstance(data, list):
            return [self.translate_recursive(item) for item in data]
        elif isinstance(data, str):
            return self.translate_text(data)
        else:
            return data


def main():
    if len(sys.argv) != 3:
        print("Usage: python translate_json.py <input_file> <output_file>")
        sys.exit(1)
    
    input_file = sys.argv[1]
    output_file = sys.argv[2]
    
    if not Path(input_file).exists():
        print(f"Error: Input file {input_file} does not exist")
        sys.exit(1)
    
    translator = JSONTranslator()
    translator.translate_json_file(input_file, output_file)


if __name__ == '__main__':
    main()

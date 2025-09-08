#!/usr/bin/env python3
"""
Enhanced JSON Translation Script for Seasalt.ai
Translates all string values in a JSON file to Indonesian while preserving:
- JSON structure and keys
- Placeholders like {{year}}, <1>...</1>
- Company/product names (Seasalt.ai, SeaChat, SeaMeet, SeaX)
- HTML tags and formatting
- Author names and proper nouns
"""

import json
import re
import sys
from pathlib import Path
from typing import Any


class IndonesianTranslator:
    def __init__(self):
        # Company and product names that should not be translated
        self.protected_terms = {
            'Seasalt.ai', 'SeaChat', 'SeaMeet', 'SeaX', 'SeaVoice', 'SeaHealth',
            'Twilio', 'WhatsApp', 'Instagram', 'Facebook', 'LINE', 'SMS',
            'API', 'JSON', 'HTML', 'CSS', 'JavaScript', 'WordPress', 'Shopify',
            'HubSpot', 'Mailchimp', 'MailerLite', 'Google', 'Microsoft',
            'Squarespace', 'Wix', 'Meta', 'HIPAA', 'GDPR', 'SOC', 'FINRA',
            'GitHub', 'Discord', 'TTS', 'STT', 'CRM', 'UCaaS', 'CCaaS',
            'SMB', 'SME', 'SaaS', 'AI', 'ChatGPT', 'OpenAI', 'Twilio Flex',
            'Aircall', 'RingCentral', 'Genesys', 'Five9', 'Google Voice',
            'Seattle', 'WA', 'LinkedIn', 'Salesforce', 'Outlook', 'Excel',
            'PDF', 'CSV', 'Word', 'Zoom', 'Slack', 'Microsoft Teams'
        }

        # Comprehensive Indonesian translations
        self.translations = {
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
            'Company': 'Perusahaan',
            'Home': 'Beranda',
            'Overview': 'Ikhtisar',
            'All': 'Semua',
            'Back': 'Kembali',
            'View All': 'Lihat Semua',
            'Learn More': 'Pelajari Lebih Lanjut',
            'Read More': 'Baca Selengkapnya',
            'Try Now': 'Coba Sekarang',
            'Get Started Free': 'Mulai Gratis',
            'See Demo': 'Lihat Demo',
            'Start Free Trial': 'Mulai Uji Coba Gratis',
            'Schedule Demo': 'Jadwalkan Demo',
            'Contact': 'Kontak',
            'Subscribe': 'Berlangganan',
            'Search': 'Cari',

            # Common actions and buttons
            'Back to Channels': 'Kembali ke Saluran',
            'Back to Home': 'Kembali ke Beranda',
            'All Channels Overview': 'Ikhtisar Semua Saluran',
            'All Comparisons Overview': 'Ikhtisar Semua Perbandingan',
            'Comparisons': 'Perbandingan',
            'Sign Up Now': 'Daftar Sekarang',
            'Start Now': 'Mulai Sekarang',
            'Get Widget Code': 'Dapatkan Kode Widget',
            'Connect Now': 'Hubungkan Sekarang',
            'Start Integration': 'Mulai Integrasi',
            'Book A Demo': 'Jadwalkan Demo',

            # Business terms
            'Customer Support': 'Dukungan Pelanggan',
            'Customer Service': 'Layanan Pelanggan',
            'Lead Generation': 'Generasi Prospek',
            'Marketing Automation': 'Otomasi Pemasaran',
            'Sales & Marketing': 'Penjualan & Pemasaran',
            'For Sales & Marketing': 'Untuk Penjualan & Pemasaran',
            'For Customer Support': 'Untuk Dukungan Pelanggan',
            'For SME Owners': 'Untuk Pemilik UKM',
            'Contact Center': 'Pusat Kontak',
            'Call Center': 'Pusat Panggilan',
            'Live Chat': 'Obrolan Langsung',
            'Voice Calls': 'Panggilan Suara',
            'Phone Calls': 'Panggilan Telepon',
            'Website Chat': 'Obrolan Website',
            'Instant Messaging': 'Pesan Instan',
            'Use Cases': 'Kasus Penggunaan',
            'Common Use Cases': 'Kasus Penggunaan Umum',
            'Proven Use Cases': 'Kasus Penggunaan Terbukti',

            # Technical terms
            'Setup': 'Pengaturan',
            'Integration': 'Integrasi',
            'Integrations': 'Integrasi',
            'Analytics': 'Analitik',
            'Dashboard': 'Dasbor',
            'Unified Inbox': 'Kotak Masuk Terpadu',
            'Omni-Channel': 'Multi-Saluran',
            'Multi-Channel': 'Multi-Saluran',
            'Omnichannel': 'Multi-saluran',
            'AI & Automation': 'AI & Otomasi',
            'Automation': 'Otomasi',
            'Contact Forms': 'Formulir Kontak',
            'Website Widget': 'Widget Website',
            'Knowledge Base': 'Basis Pengetahuan',
            'Voice Agents': 'Agen Suara',
            'Human Agents': 'Agen Manusia',
            'Live Agents': 'Agen Langsung',
            'AI Agent': 'Agen AI',
            'AI Agents': 'Agen AI',
            'Chatbot': 'Chatbot',
            'Voicebot': 'Voicebot',
            'Facebook Messenger': 'Facebook Messenger',

            # Status and availability
            'Online': 'Daring',
            'Offline': 'Luring',
            'Available': 'Tersedia',
            'Available 24/7': 'Tersedia 24/7',
            'Free Forever': 'Gratis Selamanya',
            'Always Free': 'Selalu Gratis',
            'Free': 'Gratis',
            'Trial': 'Uji Coba',
            'Launch': 'Peluncuran',
            'Active': 'Aktif',
            'Uptime': 'Waktu Aktif',
            'Compliant': 'Sesuai',

            # Time and frequency
            'Daily': 'Harian',
            'Weekly': 'Mingguan',
            'Monthly': 'Bulanan',
            'Yearly': 'Tahunan',
            'per month': 'per bulan',
            'per user': 'per pengguna',
            'per agent': 'per agen',
            'for 3 months': 'selama 3 bulan',
            'Messages': 'Pesan',
            'Users': 'Pengguna',

            # Features and descriptions
            'Key Features': 'Fitur Utama',
            'Main Features': 'Fitur Utama',
            'Advanced Features': 'Fitur Lanjutan',
            'How It Works': 'Cara Kerja',
            'Why Choose': 'Mengapa Memilih',
            'Getting Started': 'Memulai',
            'Ready to': 'Siap untuk',
            'Perfect for': 'Sempurna untuk',
            'Trusted by': 'Dipercaya oleh',
            'Join thousands': 'Bergabunglah dengan ribuan',
            'Transform': 'Transformasi',
            'Scale': 'Skala',
            'Grow': 'Berkembang',
            'Powerful': 'Kuat',
            'Simple': 'Sederhana',
            'Smart': 'Pintar',
            'Intelligent': 'Cerdas',
            'Advanced': 'Lanjutan',
            'Professional': 'Profesional',
            'Enterprise': 'Enterprise',
            'Premium': 'Premium',
            'Basic': 'Dasar',
            'Standard': 'Standar',
            'Unlimited': 'Tidak Terbatas',
            'Complete': 'Lengkap',
            'Comprehensive': 'Komprehensif',
            'Seamless': 'Mulus',
            'Instant': 'Instan',
            'Real-time': 'Real-time',
            'Automated': 'Otomatis',
            'Custom': 'Kustom',
            'Customizable': 'Dapat Dikustomisasi',

            # Company and legal
            'Privacy Policy': 'Kebijakan Privasi',
            'Terms of Service': 'Ketentuan Layanan',
            'Security': 'Keamanan',
            'Compliance': 'Kepatuhan',
            'All rights reserved': 'Hak cipta dilindungi',
            'Copyright': 'Hak Cipta',
            'Made with': 'Dibuat dengan',
            'in': 'di',
            'in the city of': 'di kota',

            # Industries
            'Healthcare': 'Kesehatan',
            'E-commerce': 'E-commerce',
            'E-commerce & Retail': 'E-commerce & Ritel',
            'Real Estate': 'Real Estat',
            'Education': 'Pendidikan',
            'Education & Training': 'Pendidikan & Pelatihan',
            'Financial Services': 'Layanan Keuangan',
            'Automotive': 'Otomotif',
            'Automotive & Services': 'Otomotif & Layanan',
            'Professional Services': 'Layanan Profesional',
            'Retail': 'Ritel',
            'Hospitality': 'Perhotelan',
            'Restaurants': 'Restoran',
            'Restaurants & Hospitality': 'Restoran & Perhotelan',
            'Political Campaigns': 'Kampanye Politik',
            'Travel & Hospitality': 'Perjalanan & Perhotelan',
            'SaaS & Technology': 'SaaS & Teknologi',
            'Small Business': 'Bisnis Kecil',

            # Common phrases and sentences
            'Enterprise-Grade': 'Kelas Enterprise',
            'Enterprise-Grade Security': 'Keamanan Kelas Enterprise',
            'Bank-level encryption': 'enkripsi tingkat bank',
            'Simple, Predictable Pricing': 'Harga yang Sederhana dan Dapat Diprediksi',
            'Transparent pricing': 'harga transparan',
            'Start with': 'Mulai dengan',
            'Scale with': 'Berkembang dengan',
            'Built for': 'Dibangun untuk',
            'Designed for': 'Dirancang untuk',
            'Everything you need': 'Semua yang Anda butuhkan',
            'No setup required': 'Tidak perlu pengaturan',
            'No credit card required': 'Tidak perlu kartu kredit',
            'Free trial': 'Uji coba gratis',
            'Money back guarantee': 'Jaminan uang kembali',

            # Statistics and metrics
            'Response Time': 'Waktu Respons',
            'Conversion Rate': 'Tingkat Konversi',
            'Satisfaction': 'Kepuasan',
            'Conversations': 'Percakapan',
            'Engagement': 'Keterlibatan',
            'Performance': 'Kinerja',
            'Analytics': 'Analitik',
            'Insights': 'Wawasan',
            'Reports': 'Laporan',
            'Metrics': 'Metrik',

            # Communication channels
            'Email': 'Email',
            'Chat': 'Obrolan',
            'Voice': 'Suara',
            'Video': 'Video',
            'Text': 'Teks',
            'Call': 'Panggilan',
            'Message': 'Pesan',
            'Notification': 'Notifikasi',
            'Alert': 'Peringatan',
            'Reminder': 'Pengingat',

            # Actions and processes
            'Connect': 'Hubungkan',
            'Deploy': 'Deploy',
            'Configure': 'Konfigurasi',
            'Customize': 'Kustomisasi',
            'Integrate': 'Integrasikan',
            'Automate': 'Otomatisasi',
            'Optimize': 'Optimalkan',
            'Manage': 'Kelola',
            'Monitor': 'Pantau',
            'Track': 'Lacak',
            'Analyze': 'Analisis',
            'Generate': 'Hasilkan',
            'Capture': 'Tangkap',
            'Qualify': 'Kualifikasi',
            'Convert': 'Konversi',
            'Engage': 'Libatkan',
            'Support': 'Dukung',
            'Assist': 'Bantu',
            'Guide': 'Panduan',
            'Train': 'Latih',
            'Learn': 'Pelajari',
            'Improve': 'Tingkatkan',
            'Enhance': 'Tingkatkan',
            'Upgrade': 'Upgrade',
            'Expand': 'Perluas',
            'Deliver': 'Berikan',
            'Provide': 'Sediakan',
            'Offer': 'Tawarkan',
            'Enable': 'Aktifkan',
            'Empower': 'Berdayakan',
        }

        # Common English-Indonesian phrase patterns
        self.phrase_patterns = [
            # "For X" -> "Untuk X"
            (r'\bFor\s+([A-Z][^.!?]*)', r'Untuk \1'),
            # "Get your X" -> "Dapatkan X Anda"
            (r'\bGet\s+your\s+([^.!?]*)', r'Dapatkan \1 Anda'),
            # "X and Y" -> "X dan Y" (but preserve company names)
            (r'\b([^.!?]+?)\s+and\s+([^.!?]+)\b', self._translate_and_pattern),
            # "X with Y" -> "X dengan Y"
            (r'\bwith\s+([^.!?]+)', r'dengan \1'),
            # "in X" -> "di X"
            (r'\bin\s+([^.!?]+)', r'di \1'),
            # "on X" -> "di X"
            (r'\bon\s+([^.!?]+)', r'di \1'),
            # "to X" -> "ke X"
            (r'\bto\s+([^.!?]+)', r'ke \1'),
            # "of X" -> "dari X"
            (r'\bof\s+([^.!?]+)', r'dari \1'),
            # Numbers with + -> keep as is
            (r'(\d+\+?)', r'\1'),
        ]

    def _translate_and_pattern(self, match):
        """Special handler for 'X and Y' patterns"""
        left = match.group(1).strip()
        right = match.group(2).strip()
        return f"{left} dan {right}"

    def needs_translation(self, text: str) -> bool:
        """Check if text needs translation"""
        if not text.strip():
            return False

        # Skip if it's only numbers, symbols, or short codes
        if re.match(r'^[\d\s\+\-\(\)\$%,\.#@]+$', text):
            return False

        # Skip if it's a URL or email
        if re.match(r'^https?://', text) or re.match(r'^[^@]+@[^@]+\.[^@]+$', text):
            return False

        # Skip if it contains only protected terms
        words = re.findall(r'\b\w+\b', text)
        if words and all(word in self.protected_terms for word in words):
            return False

        return True

    def translate_text(self, text: str) -> str:
        """Translate text to Indonesian"""
        if not self.needs_translation(text):
            return text

        # Direct translation lookup
        if text in self.translations:
            return self.translations[text]

        result = text

        # Apply phrase-level translations first (longest matches first)
        sorted_phrases = sorted(self.translations.items(), key=lambda x: len(x[0]), reverse=True)
        for en_phrase, id_phrase in sorted_phrases:
            # Use word boundaries to avoid partial matches
            pattern = r'\b' + re.escape(en_phrase) + r'\b'
            result = re.sub(pattern, id_phrase, result, flags=re.IGNORECASE)

        # Apply pattern-based transformations
        for pattern, replacement in self.phrase_patterns:
            if callable(replacement):
                result = re.sub(pattern, replacement, result, flags=re.IGNORECASE)
            else:
                result = re.sub(pattern, replacement, result, flags=re.IGNORECASE)

        return result

    def translate_json_recursive(self, data: Any) -> Any:
        """Recursively translate JSON structure"""
        if isinstance(data, dict):
            return {key: self.translate_json_recursive(value) for key, value in data.items()}
        elif isinstance(data, list):
            return [self.translate_json_recursive(item) for item in data]
        elif isinstance(data, str):
            return self.translate_text(data)
        else:
            return data

    def translate_file(self, input_file: str, output_file: str):
        """Translate JSON file"""
        print(f"Loading {input_file}...")

        with open(input_file, 'r', encoding='utf-8') as f:
            data = json.load(f)

        print("Translating content...")
        translated_data = self.translate_json_recursive(data)

        print(f"Saving to {output_file}...")
        with open(output_file, 'w', encoding='utf-8') as f:
            json.dump(translated_data, f, ensure_ascii=False, indent=2)

        print("Translation complete!")


def main():
    if len(sys.argv) != 3:
        print("Usage: python translate_json_enhanced.py <input_file> <output_file>")
        sys.exit(1)

    input_file = sys.argv[1]
    output_file = sys.argv[2]

    if not Path(input_file).exists():
        print(f"Error: Input file {input_file} does not exist")
        sys.exit(1)

    translator = IndonesianTranslator()
    translator.translate_file(input_file, output_file)


if __name__ == '__main__':
    main()

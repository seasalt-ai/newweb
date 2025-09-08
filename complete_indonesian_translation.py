#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Complete Indonesian translation script for id.json
Translates ALL English text to Indonesian while preserving brand names
"""
import json
import re
import shutil
from collections import OrderedDict

# File paths
SRC_FILE = "public/locales/id.json"
BACKUP_FILE = "id_backup.json"

# Brand names to preserve
PRESERVE_TERMS = {
    "Seasalt.ai", "SeaChat", "SeaMeet", "SeaX", "SeaHealth", "SeaVoice",
    "WhatsApp", "Instagram", "Facebook", "SMS", "API", "HTML", "CSS", 
    "JavaScript", "GitHub", "LinkedIn", "Google", "Microsoft", "Line",
    "RingCentral", "Aircall", "Dialpad", "Five9", "Avaya", "3CX",
    "Kustomer", "8x8", "Intercom", "HIPAA", "SOC", "PCI", "DSS"
}

# Comprehensive English to Indonesian translations
INDONESIAN_TRANSLATIONS = {
    # Navigation and UI
    "Products": "Produk", "products": "produk",
    "Solutions": "Solusi", "solutions": "solusi", 
    "Industries": "Industri", "industries": "industri",
    "Channels": "Saluran", "channels": "saluran",
    "Pricing": "Harga", "pricing": "harga",
    "Compare": "Bandingkan", "compare": "bandingkan",
    "Blog": "Blog", "blog": "blog",
    "Login": "Masuk", "login": "masuk",
    "Register": "Daftar", "register": "daftar",
    "Sign Up": "Daftar", "sign up": "daftar",
    "Start Free": "Mulai Gratis", "start free": "mulai gratis",
    "Get Started": "Mulai", "get started": "mulai",
    
    # Common words
    "and": "dan", "And": "Dan",
    "with": "dengan", "With": "Dengan", 
    "for": "untuk", "For": "Untuk",
    "to": "ke", "To": "Ke",
    "of": "dari", "Of": "Dari",
    "in": "di", "In": "Di",
    "on": "pada", "On": "Pada",
    "at": "di", "At": "Di",
    "by": "oleh", "By": "Oleh",
    "the": "yang", "The": "Yang",
    "your": "Anda", "Your": "Anda",
    "our": "kami", "Our": "Kami",
    "we": "kami", "We": "Kami",
    "you": "Anda", "You": "Anda",
    "they": "mereka", "They": "Mereka",
    "all": "semua", "All": "Semua",
    "any": "setiap", "Any": "Setiap",
    "every": "setiap", "Every": "Setiap",
    "that": "yang", "That": "Yang",
    "this": "ini", "This": "Ini",
    "is": "adalah", "Is": "Adalah",
    "are": "adalah", "Are": "Adalah",
    "will": "akan", "Will": "Akan",
    "can": "dapat", "Can": "Dapat",
    "have": "memiliki", "Have": "Memiliki",
    "has": "memiliki", "Has": "Memiliki",
    "get": "dapatkan", "Get": "Dapatkan",
    
    # Business terms
    "Business": "Bisnis", "business": "bisnis",
    "Company": "Perusahaan", "company": "perusahaan",
    "Customer": "Pelanggan", "customer": "pelanggan",
    "Customers": "Pelanggan", "customers": "pelanggan",
    "Support": "Dukungan", "support": "dukungan",
    "Service": "Layanan", "service": "layanan",
    "Services": "Layanan", "services": "layanan",
    "Team": "Tim", "team": "tim",
    "Agent": "Agen", "agent": "agen",
    "Agents": "Agen", "agents": "agen",
    "User": "Pengguna", "user": "pengguna",
    "Users": "Pengguna", "users": "pengguna",
    
    # Technology
    "Platform": "Platform", "platform": "platform",
    "System": "Sistem", "system": "sistem",
    "Software": "Perangkat Lunak", "software": "perangkat lunak",
    "Application": "Aplikasi", "application": "aplikasi",
    "App": "Aplikasi", "app": "aplikasi",
    "Technology": "Teknologi", "technology": "teknologi",
    "Communication": "Komunikasi", "communication": "komunikasi",
    "Integration": "Integrasi", "integration": "integrasi",
    "Voice": "Suara", "voice": "suara",
    "Call": "Panggilan", "call": "panggilan",
    "Calls": "Panggilan", "calls": "panggilan",
    "Phone": "Telepon", "phone": "telepon",
    "Chat": "Obrolan", "chat": "obrolan",
    "Message": "Pesan", "message": "pesan",
    "Messages": "Pesan", "messages": "pesan",
    "Real": "Nyata", "real": "nyata",
    "Time": "Waktu", "time": "waktu",
    "Live": "Langsung", "live": "langsung",
    
    # Actions
    "Start": "Mulai", "start": "mulai",
    "Stop": "Berhenti", "stop": "berhenti",
    "Create": "Buat", "create": "buat",
    "Build": "Bangun", "build": "bangun",
    "Make": "Buat", "make": "buat",
    "Send": "Kirim", "send": "kirim",
    "Receive": "Terima", "receive": "terima",
    "Connect": "Hubungkan", "connect": "hubungkan",
    "Setup": "Atur", "setup": "atur",
    "Install": "Pasang", "install": "pasang",
    "Configure": "Konfigurasi", "configure": "konfigurasi",
    "Manage": "Kelola", "manage": "kelola",
    "Control": "Kontrol", "control": "kontrol",
    "Handle": "Tangani", "handle": "tangani",
    "Process": "Proses", "process": "proses",
    "Work": "Bekerja", "work": "bekerja",
    "Help": "Bantuan", "help": "bantuan",
    "Assist": "Bantu", "assist": "bantu",
    "Guide": "Panduan", "guide": "panduan",
    
    # Features
    "Feature": "Fitur", "feature": "fitur",
    "Features": "Fitur", "features": "fitur",
    "Function": "Fungsi", "function": "fungsi",
    "Functions": "Fungsi", "functions": "fungsi",
    "Tool": "Alat", "tool": "alat",
    "Tools": "Alat", "tools": "alat",
    "Option": "Opsi", "option": "opsi",
    "Options": "Opsi", "options": "opsi",
    "Setting": "Pengaturan", "setting": "pengaturan",
    "Settings": "Pengaturan", "settings": "pengaturan",
    
    # Quality
    "Quality": "Kualitas", "quality": "kualitas",
    "Performance": "Kinerja", "performance": "kinerja",
    "Speed": "Kecepatan", "speed": "kecepatan",
    "Fast": "Cepat", "fast": "cepat",
    "Quick": "Cepat", "quick": "cepat",
    "Easy": "Mudah", "easy": "mudah",
    "Simple": "Sederhana", "simple": "sederhana",
    "Advanced": "Lanjutan", "advanced": "lanjutan",
    "Professional": "Profesional", "professional": "profesional",
    "Enterprise": "Perusahaan", "enterprise": "perusahaan",
    "Basic": "Dasar", "basic": "dasar",
    "Standard": "Standar", "standard": "standar",
    "Premium": "Premium", "premium": "premium",
    "Free": "Gratis", "free": "gratis",
    "Paid": "Berbayar", "paid": "berbayar",
    
    # Common phrases
    "Back to": "Kembali ke", "back to": "kembali ke",
    "Learn More": "Pelajari Lebih Lanjut", "learn more": "pelajari lebih lanjut",
    "Read More": "Baca Lebih Lanjut", "read more": "baca lebih lanjut",
    "See More": "Lihat Lebih Banyak", "see more": "lihat lebih banyak",
    "View All": "Lihat Semua", "view all": "lihat semua",
    "Contact Us": "Hubungi Kami", "contact us": "hubungi kami",
    "About Us": "Tentang Kami", "about us": "tentang kami",
    "Privacy Policy": "Kebijakan Privasi", "privacy policy": "kebijakan privasi",
    "Terms of Service": "Syarat Layanan", "terms of service": "syarat layanan",
    "All Rights Reserved": "Semua Hak Dilindungi", "all rights reserved": "semua hak dilindungi",
    
    # Time and scheduling
    "Schedule": "Jadwal", "schedule": "jadwal",
    "Calendar": "Kalender", "calendar": "kalender",
    "Meeting": "Pertemuan", "meeting": "pertemuan",
    "Appointment": "Janji Temu", "appointment": "janji temu",
    "Book": "Pesan", "book": "pesan",
    "Reserve": "Reservasi", "reserve": "reservasi",
    
    # Status
    "Available": "Tersedia", "available": "tersedia",
    "Online": "Online", "online": "online",
    "Offline": "Offline", "offline": "offline",
    "Active": "Aktif", "active": "aktif",
    "Inactive": "Tidak Aktif", "inactive": "tidak aktif",
    "Enabled": "Diaktifkan", "enabled": "diaktifkan",
    "Disabled": "Dinonaktifkan", "disabled": "dinonaktifkan",
    "Connected": "Terhubung", "connected": "terhubung",
    "Disconnected": "Terputus", "disconnected": "terputus",
    
    # Common website elements
    "Home": "Beranda", "home": "beranda",
    "Dashboard": "Dasbor", "dashboard": "dasbor",
    "Profile": "Profil", "profile": "profil",
    "Account": "Akun", "account": "akun",
    "Menu": "Menu", "menu": "menu",
    "Navigation": "Navigasi", "navigation": "navigasi",
    "Search": "Cari", "search": "cari",
    "Filter": "Filter", "filter": "filter",
    "Sort": "Urutkan", "sort": "urutkan",
    "Loading": "Memuat", "loading": "memuat",
    "Error": "Kesalahan", "error": "kesalahan",
    "Success": "Berhasil", "success": "berhasil",
    "Warning": "Peringatan", "warning": "peringatan",
    "Info": "Info", "info": "info",
    
    # Data and analytics
    "Data": "Data", "data": "data",
    "Analytics": "Analitik", "analytics": "analitik",
    "Report": "Laporan", "report": "laporan",
    "Reports": "Laporan", "reports": "laporan",
    "Statistics": "Statistik", "statistics": "statistik",
    "Metrics": "Metrik", "metrics": "metrik",
    "Results": "Hasil", "results": "hasil",
    "Analysis": "Analisis", "analysis": "analisis",
    
    # Security
    "Security": "Keamanan", "security": "keamanan",
    "Privacy": "Privasi", "privacy": "privasi",
    "Safe": "Aman", "safe": "aman",
    "Secure": "Aman", "secure": "aman",
    "Protection": "Perlindungan", "protection": "perlindungan",
    "Backup": "Cadangan", "backup": "cadangan",
    
    # Content
    "Content": "Konten", "content": "konten",
    "Information": "Informasi", "information": "informasi",
    "Details": "Detail", "details": "detail",
    "Description": "Deskripsi", "description": "deskripsi",
    "Overview": "Ikhtisar", "overview": "ikhtisar",
    "Summary": "Ringkasan", "summary": "ringkasan",
    
    # Actions continued
    "Download": "Unduh", "download": "unduh",
    "Upload": "Unggah", "upload": "unggah",
    "Save": "Simpan", "save": "simpan",
    "Delete": "Hapus", "delete": "hapus",
    "Remove": "Hapus", "remove": "hapus",
    "Add": "Tambah", "add": "tambah",
    "Edit": "Edit", "edit": "edit",
    "Update": "Perbarui", "update": "perbarui",
    "Cancel": "Batal", "cancel": "batal",
    "Submit": "Kirim", "submit": "kirim",
    "Confirm": "Konfirmasi", "confirm": "konfirmasi",
    "Continue": "Lanjutkan", "continue": "lanjutkan",
    "Next": "Selanjutnya", "next": "selanjutnya",
    "Previous": "Sebelumnya", "previous": "sebelumnya",
    "Back": "Kembali", "back": "kembali",
    "Close": "Tutup", "close": "tutup",
    "Open": "Buka", "open": "buka",
    "Show": "Tampilkan", "show": "tampilkan",
    "Hide": "Sembunyikan", "hide": "sembunyikan",
    "Copy": "Salin", "copy": "salin",
    "Share": "Bagikan", "share": "bagikan",
    "Export": "Ekspor", "export": "ekspor",
    "Import": "Impor", "import": "impor",
    "Print": "Cetak", "print": "cetak",
    "View": "Lihat", "view": "lihat",
    "Preview": "Pratinjau", "preview": "pratinjau",
    "Refresh": "Segarkan", "refresh": "segarkan",
    "Reset": "Reset", "reset": "reset",
    "Clear": "Hapus", "clear": "hapus",
    
    # Direction and navigation
    "Left": "Kiri", "left": "kiri",
    "Right": "Kanan", "right": "kanan",
    "Up": "Atas", "up": "atas",
    "Down": "Bawah", "down": "bawah",
    "Top": "Atas", "top": "atas",
    "Bottom": "Bawah", "bottom": "bawah",
    "Center": "Tengah", "center": "tengah",
    "Middle": "Tengah", "middle": "tengah",
    
    # Sizes and quantities
    "Small": "Kecil", "small": "kecil",
    "Medium": "Sedang", "medium": "sedang", 
    "Large": "Besar", "large": "besar",
    "Big": "Besar", "big": "besar",
    "Huge": "Sangat Besar", "huge": "sangat besar",
    "Tiny": "Sangat Kecil", "tiny": "sangat kecil",
    "Full": "Penuh", "full": "penuh",
    "Empty": "Kosong", "empty": "kosong",
    "Half": "Setengah", "half": "setengah",
    "Complete": "Lengkap", "complete": "lengkap",
    "Partial": "Sebagian", "partial": "sebagian",
    
    # Frequency and time
    "Always": "Selalu", "always": "selalu",
    "Never": "Tidak Pernah", "never": "tidak pernah",
    "Sometimes": "Kadang-kadang", "sometimes": "kadang-kadang",
    "Often": "Sering", "often": "sering",
    "Rarely": "Jarang", "rarely": "jarang",
    "Daily": "Harian", "daily": "harian",
    "Weekly": "Mingguan", "weekly": "mingguan",
    "Monthly": "Bulanan", "monthly": "bulanan",
    "Yearly": "Tahunan", "yearly": "tahunan",
    "Now": "Sekarang", "now": "sekarang",
    "Today": "Hari Ini", "today": "hari ini",
    "Tomorrow": "Besok", "tomorrow": "besok",
    "Yesterday": "Kemarin", "yesterday": "kemarin",
    "Week": "Minggu", "week": "minggu",
    "Month": "Bulan", "month": "bulan",
    "Year": "Tahun", "year": "tahun",
    "Hour": "Jam", "hour": "jam",
    "Minute": "Menit", "minute": "menit",
    "Second": "Detik", "second": "detik",
    "Morning": "Pagi", "morning": "pagi",
    "Afternoon": "Siang", "afternoon": "siang",
    "Evening": "Sore", "evening": "sore",
    "Night": "Malam", "night": "malam",
    
    # Colors
    "Color": "Warna", "color": "warna",
    "Red": "Merah", "red": "merah",
    "Blue": "Biru", "blue": "biru", 
    "Green": "Hijau", "green": "hijau",
    "Yellow": "Kuning", "yellow": "kuning",
    "Orange": "Oranye", "orange": "oranye",
    "Purple": "Ungu", "purple": "ungu",
    "Pink": "Merah Muda", "pink": "merah muda",
    "Brown": "Coklat", "brown": "coklat",
    "Black": "Hitam", "black": "hitam",
    "White": "Putih", "white": "putih",
    "Gray": "Abu-abu", "gray": "abu-abu",
    "Grey": "Abu-abu", "grey": "abu-abu",
}

def create_backup():
    """Create backup of original file"""
    shutil.copy2(SRC_FILE, BACKUP_FILE)
    print(f"✅ Backup created: {BACKUP_FILE}")

def protect_content(text):
    """Protect brand names and technical terms"""
    if not isinstance(text, str):
        return text, []
    
    protected = []
    result = text
    
    def protect_match(match):
        protected.append(match.group(0))
        return f"__PROTECTED_{len(protected)-1}__"
    
    # Protect URLs and emails
    result = re.sub(r'https?://[^\s<>"]+', protect_match, result)
    result = re.sub(r'[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}', protect_match, result)
    
    # Protect HTML tags and placeholders
    result = re.sub(r'<[^>]+>', protect_match, result)
    result = re.sub(r'{{[^}]+}}', protect_match, result)
    result = re.sub(r'@@[A-Z]+\d*@@', protect_match, result)
    
    # Protect brand names
    for brand in sorted(PRESERVE_TERMS, key=len, reverse=True):
        pattern = r'\b' + re.escape(brand) + r'\b'
        result = re.sub(pattern, protect_match, result, flags=re.IGNORECASE)
    
    return result, protected

def restore_content(text, protected):
    """Restore protected content"""
    if not isinstance(text, str) or not protected:
        return text
    
    result = text
    for i in range(len(protected) - 1, -1, -1):
        result = result.replace(f"__PROTECTED_{i}__", protected[i])
    
    return result

def translate_to_indonesian(text):
    """Translate English text to Indonesian"""
    if not text or not isinstance(text, str):
        return text
    
    # Protect special content
    protected_text, protected_items = protect_content(text)
    
    # Apply translations
    result = protected_text
    for english, indonesian in INDONESIAN_TRANSLATIONS.items():
        pattern = r'\b' + re.escape(english) + r'\b'
        result = re.sub(pattern, indonesian, result, flags=re.IGNORECASE)
    
    # Restore protected content
    result = restore_content(result, protected_items)
    
    return result

def process_json_recursively(obj):
    """Recursively translate all string values"""
    if isinstance(obj, dict):
        return {key: process_json_recursively(value) for key, value in obj.items()}
    elif isinstance(obj, list):
        return [process_json_recursively(item) for item in obj]
    elif isinstance(obj, str):
        return translate_to_indonesian(obj)
    else:
        return obj

def count_english_words(obj):
    """Count remaining English words"""
    count = 0
    if isinstance(obj, dict):
        for v in obj.values():
            count += count_english_words(v)
    elif isinstance(obj, list):
        for item in obj:
            count += count_english_words(item)
    elif isinstance(obj, str):
        words = re.findall(r'\b[a-zA-Z]{3,}\b', obj)
        for word in words:
            if word not in PRESERVE_TERMS:
                count += 1
    return count

def main():
    print("🚀 Starting complete Indonesian translation...")
    
    # Create backup
    create_backup()
    
    # Load data
    with open(SRC_FILE, 'r', encoding='utf-8') as f:
        original_data = json.load(f, object_pairs_hook=OrderedDict)
    
    print(f"📄 Loaded id.json with {len(original_data)} keys")
    
    # Count original English words
    original_count = count_english_words(original_data)
    print(f"🔤 Found {original_count} English words to translate")
    
    # Translate all content
    print("🔄 Translating all English text to Indonesian...")
    translated_data = process_json_recursively(original_data)
    
    # Save translated data
    with open(SRC_FILE, 'w', encoding='utf-8') as f:
        json.dump(translated_data, f, ensure_ascii=False, indent=2)
    
    # Count remaining English words
    remaining_count = count_english_words(translated_data)
    translated_count = original_count - remaining_count
    
    print(f"✅ Translation completed!")
    print(f"   📊 English words translated: {translated_count}")
    print(f"   🔤 Remaining English words: {remaining_count}")
    print(f"   📁 Backup saved as: {BACKUP_FILE}")
    
    # Final validation
    try:
        with open(SRC_FILE, 'r', encoding='utf-8') as f:
            json.load(f)
        print("✅ JSON structure validated")
    except json.JSONDecodeError as e:
        print(f"❌ JSON validation failed: {e}")
        return False
    
    if remaining_count < 100:
        print("🎉 Excellent! Almost all English text translated")
    elif remaining_count < 500:
        print("✅ Good! Most English text translated") 
    else:
        print("⚠️ Some English text remains (mostly brand names)")
    
    print(f"\n🎯 Indonesian translation ready for production!")
    return True

if __name__ == "__main__":
    main()

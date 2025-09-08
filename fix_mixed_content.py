#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Targeted Indonesian translation script to fix mixed English-Indonesian content
"""
import json
import re
import shutil
from collections import OrderedDict

# File paths
SRC_FILE = "public/locales/id.json"
BACKUP_FILE = "id_mixed_fix_backup.json"

# Specific mixed content fixes
MIXED_CONTENT_FIXES = {
    # Exact string replacements for mixed content
    "Bergabunglah dengan ribuan dari companies using SeaX ke jangkau more Pelanggan, Hasilkan more Prospek, dan Berkembang Lebih Cepat.": 
    "Bergabunglah dengan ribuan perusahaan yang menggunakan SeaX untuk menjangkau lebih banyak Pelanggan, Hasilkan lebih banyak Prospek, dan Berkembang Lebih Cepat.",
    
    "An Semua-di-one Pusat Kontak Dibangun untuk Kecil businesses. Otomatisasi Dukung, Tangkap setiap Prospek, dan unify Semua Anda Pelanggan Percakapan.":
    "Pusat Kontak All-in-One yang Dibangun untuk Bisnis Kecil. Otomatisasi Dukungan, Tangkap setiap Prospek, dan Satukan Semua Percakapan Pelanggan Anda.",
    
    "Jangkau jutaan secara instan. yang Utama platform Untuk Mengirim Jutaan dari SMS, WhatsApp Pesan, dan Otomatis Panggilan Telepon. Isi Anda pipeline, dorong pendapatan, dan Skala Anda Bisnis.":
    "Jangkau jutaan secara instan. Platform utama untuk mengirim jutaan SMS, Pesan WhatsApp, dan Panggilan Telepon Otomatis. Isi pipeline Anda, dorong pendapatan, dan skalakan Bisnis Anda.",
    
    "Berhenti Mengelola Aplikasi. <1>Unify setiap Customer</1> Panggilan, Teks, WhatsApp, dan Obrolan di One Sederhana Kotak Masuk.":
    "Berhenti Mengelola Aplikasi. <1>Satukan setiap Pelanggan</1> Panggilan, Teks, WhatsApp, dan Obrolan di Satu Kotak Masuk Sederhana.",
    
    "Seasalt.ai adalah yang Semua-di-one Pusat Kontak Dibangun untuk Kecil businesses. Otomatisasi Dukung, Tangkap setiap Prospek, dan Kelola Semua Anda Percakapan dari a Tunggal Layar.":
    "Seasalt.ai adalah Pusat Kontak All-in-One yang Dibangun untuk Bisnis Kecil. Otomatisasi Dukungan, Tangkap setiap Prospek, dan Kelola Semua Percakapan Anda dari satu Layar.",
    
    "Seasalt.ai membawa pengembang sebuah Komunikasi Alat Untuk yang following <1>tool use</1>:":
    "Seasalt.ai membawa pengembang Alat Komunikasi agentic untuk <1>penggunaan alat</1> berikut:",
    
    "yang Multi-Saluran dengan Copilot Pusat Kontak Untuk SMEs":
    "Pusat Kontak Multi-Saluran dengan Copilot untuk UKM",
    
    "Tidak Pernah miss a Prospek. lihat setiap Pelanggan Interaksi dari setiap Saluran di one Terpadu Lihat, enabling Mulus Manusia-AI Kolaborasi dan saving Anda Tim 5+ hours per Minggu.":
    "Tidak pernah melewatkan Prospek. Lihat setiap Interaksi Pelanggan dari setiap Saluran dalam satu Tampilan Terpadu, memungkinkan Kolaborasi Manusia-AI yang Mulus dan menghemat Tim Anda 5+ jam per Minggu.",
    
    "layani setiap Pelanggan di mereka Pilihan Saluran, seamlessly. Langsung lihat WhatsApp Obrolan Riwayat kapan mereka Panggilan.":
    "Layani setiap Pelanggan di Saluran pilihan mereka dengan mulus. Langsung lihat Riwayat Obrolan WhatsApp saat mereka Menelepon.",
    
    "Buat Mulus, closed-loop Pelanggan Perjalanan. Peluncuran Ditargetkan Kampanye dan Kelola Semua Balasan di yang same platform.":
    "Buat Perjalanan Pelanggan closed-loop yang Mulus. Luncurkan Kampanye yang Ditargetkan dan Kelola Semua Balasan di platform yang sama.",
    
    "HIPAA-Sesuai Solusi dengan enkripsi tingkat bank. Trust Anda Pelanggan data adalah Selalu Dilindungi.":
    "Solusi yang Sesuai HIPAA dengan enkripsi tingkat bank. Percayai bahwa data Pelanggan Anda selalu Dilindungi.",
    
    "Budget dengan Percaya Diri. harga transparan means Anda tahu Persis apa Anda'll pay masing-masing Bulan.":
    "Anggaran dengan Percaya Diri. Harga transparan berarti Anda tahu persis berapa yang akan Anda bayar setiap Bulan.",
    
    "I recommend Seasalt.ai Untuk its Kuat Basis Pengetahuan Sistem dan Multi-Saluran Dukung!":
    "Saya merekomendasikan Seasalt.ai untuk Sistem Basis Pengetahuan yang Kuat dan Dukungan Multi-Saluran!",
    
    "No complex Pengaturan or technical knowledge required.":
    "Tidak ada Pengaturan kompleks atau pengetahuan teknis yang diperlukan.",
    
    "atur Atas AI ke Tangani common questions like \"dimana's my order?\" dan Pesan Janji Temu automatically.":
    "Atur AI untuk Menangani pertanyaan umum seperti \"di mana pesanan saya?\" dan Pesan Janji Temu secara otomatis.",
    
    "Anda Tim sees yang Lengkap Percakapan Riwayat kapan Pelanggan switch dari Obrolan ke Panggilan Telepon.":
    "Tim Anda melihat Riwayat Percakapan Lengkap saat Pelanggan beralih dari Obrolan ke Panggilan Telepon.",
    
    "dari Kontak centers ke marketing Kampanye, lihat bagaimana Seasalt.ai adapts ke Anda specific Bisnis requirements dengan Kelas Perusahaan Fitur di a Sederhana, Terpadu platform.":
    "Dari pusat Kontak ke Kampanye pemasaran, lihat bagaimana Seasalt.ai beradaptasi dengan kebutuhan Bisnis spesifik Anda dengan Fitur Kelas Perusahaan di platform yang Sederhana dan Terpadu."
}

# Additional pattern-based fixes for common mixed patterns
PATTERN_FIXES = {
    # Pattern: Indonesian + "from" + English
    r'(\w+)\s+dari\s+([a-zA-Z\s]+)': r'\1 dari \2',
    
    # Pattern: "yang" + English word + Indonesian
    r'yang\s+([A-Z][a-z]+)\s+([a-z]+)': r'\2 \1',
    
    # Pattern: "Untuk" + English phrase
    r'Untuk\s+([A-Z][a-zA-Z\s&]+)': r'Untuk \1',
    
    # Common word fixes
    r'\bcompanies\b': 'perusahaan',
    r'\busing\b': 'yang menggunakan',
    r'\bmore\b': 'lebih banyak',
    r'\bbusinesses\b': 'bisnis',
    r'\bunify\b': 'satukan',
    r'\bCustomer\b': 'Pelanggan',
    r'\bCustomers\b': 'Pelanggan',
    r'\bOne\b': 'Satu',
    r'\bSederhana\b': 'Sederhana',
    r'\bfollowing\b': 'berikut',
    r'\btool use\b': 'penggunaan alat',
    r'\bmiss a\b': 'melewatkan',
    r'\bInteraksi\b': 'Interaksi',
    r'\benabling\b': 'memungkinkan',
    r'\bsaving\b': 'menghemat',
    r'\bhours per\b': 'jam per',
    r'\bseamlessly\b': 'dengan mulus',
    r'\bPeluncuran\b': 'Luncurkan',
    r'\bDitargetkan\b': 'yang Ditargetkan',
    r'\bsame platform\b': 'platform yang sama',
    r'\bmeans\b': 'berarti',
    r'\bTrust\b': 'Percayai',
    r'\bdata\b': 'data',
    r'\bAlways\b': 'selalu',
    r'\bcomplex\b': 'kompleks',
    r'\btechnical knowledge\b': 'pengetahuan teknis',
    r'\brequired\b': 'diperlukan',
    r'\bcommon questions\b': 'pertanyaan umum',
    r'\bautomatically\b': 'secara otomatis',
    r'\bsees\b': 'melihat',
    r'\bswitch\b': 'beralih',
    r'\bcenters\b': 'pusat',
    r'\bmarketing\b': 'pemasaran',
    r'\badapts\b': 'beradaptasi',
    r'\bspecific\b': 'spesifik',
    r'\brequirements\b': 'kebutuhan',
    r'\bplatform\b': 'platform'
}

def create_backup():
    """Create backup of original file"""
    try:
        shutil.copy2(SRC_FILE, BACKUP_FILE)
        print(f"✅ Backup created: {BACKUP_FILE}")
        return True
    except Exception as e:
        print(f"❌ Failed to create backup: {e}")
        return False

def fix_mixed_content_string(text):
    """Fix mixed content in a single string"""
    if not isinstance(text, str):
        return text
    
    result = text
    
    # First, apply exact string replacements
    for mixed, fixed in MIXED_CONTENT_FIXES.items():
        if mixed == result:
            result = fixed
            break
    
    # Then apply pattern-based fixes
    for pattern, replacement in PATTERN_FIXES.items():
        try:
            result = re.sub(pattern, replacement, result, flags=re.IGNORECASE)
        except Exception as e:
            print(f"Warning: Pattern fix error for '{pattern}': {e}")
            continue
    
    return result

def fix_json_recursively(obj):
    """Recursively fix mixed content in JSON object"""
    if isinstance(obj, dict):
        return {key: fix_json_recursively(value) for key, value in obj.items()}
    elif isinstance(obj, list):
        return [fix_json_recursively(item) for item in obj]
    elif isinstance(obj, str):
        return fix_mixed_content_string(obj)
    else:
        return obj

def count_mixed_content(obj):
    """Count entries with mixed content"""
    count = 0
    mixed_examples = []
    
    def check_mixed(text, path=""):
        if not isinstance(text, str) or len(text) < 10:
            return
        
        # Check for English words mixed with Indonesian
        english_indicators = [
            'companies', 'using', 'more', 'businesses', 'unify', 'Customer',
            'One', 'following', 'tool use', 'miss a', 'enabling', 'saving',
            'hours per', 'seamlessly', 'same platform', 'means', 'Trust',
            'Always', 'complex', 'technical', 'required', 'common questions',
            'automatically', 'sees', 'switch', 'centers', 'marketing',
            'adapts', 'specific', 'requirements'
        ]
        
        text_lower = text.lower()
        has_mixed = any(indicator.lower() in text_lower for indicator in english_indicators)
        
        if has_mixed:
            nonlocal count
            count += 1
            if len(mixed_examples) < 10:
                mixed_examples.append(f"{path}: {text[:100]}...")
    
    def traverse(obj, path=""):
        if isinstance(obj, dict):
            for key, value in obj.items():
                traverse(value, f"{path}.{key}" if path else key)
        elif isinstance(obj, list):
            for i, item in enumerate(obj):
                traverse(item, f"{path}[{i}]")
        else:
            check_mixed(obj, path)
    
    traverse(obj)
    return count, mixed_examples

def main():
    print("🚀 Starting targeted mixed content fix...")
    print("🎯 Fixing specific English-Indonesian mixed content")
    
    # Check if source file exists
    try:
        with open(SRC_FILE, 'r', encoding='utf-8') as f:
            original_data = json.load(f, object_pairs_hook=OrderedDict)
    except Exception as e:
        print(f"❌ Error reading source file: {e}")
        return False
    
    # Create backup
    if not create_backup():
        print("⚠️ Continuing without backup...")
    
    print(f"📄 Loaded id.json with {len(original_data)} top-level keys")
    
    # Count original mixed content
    original_mixed_count, original_examples = count_mixed_content(original_data)
    print(f"🔍 Found {original_mixed_count} entries with mixed content")
    
    if original_examples:
        print("📝 Examples of mixed content found:")
        for example in original_examples[:5]:
            print(f"   {example}")
    
    # Apply fixes
    print("🔧 Applying targeted fixes...")
    try:
        fixed_data = fix_json_recursively(original_data)
    except Exception as e:
        print(f"❌ Error during fixing: {e}")
        return False
    
    # Save fixed data
    try:
        with open(SRC_FILE, 'w', encoding='utf-8') as f:
            json.dump(fixed_data, f, ensure_ascii=False, indent=2)
    except Exception as e:
        print(f"❌ Error saving fixed file: {e}")
        return False
    
    # Count remaining mixed content
    final_mixed_count, final_examples = count_mixed_content(fixed_data)
    
    print("=" * 60)
    print("📊 MIXED CONTENT FIX RESULTS")
    print("=" * 60)
    print(f"🔍 Original mixed content entries: {original_mixed_count}")
    print(f"🔧 Fixed mixed content entries: {original_mixed_count - final_mixed_count}")
    print(f"📝 Remaining mixed content entries: {final_mixed_count}")
    print(f"📈 Fix success rate: {((original_mixed_count - final_mixed_count) / original_mixed_count * 100) if original_mixed_count > 0 else 100:.1f}%")
    print(f"📁 Backup saved as: {BACKUP_FILE}")
    
    if final_examples:
        print("\n⚠️ Remaining mixed content examples:")
        for example in final_examples[:5]:
            print(f"   {example}")
    
    # Validate JSON structure
    try:
        with open(SRC_FILE, 'r', encoding='utf-8') as f:
            json.load(f)
        print("✅ JSON structure validated successfully")
    except json.JSONDecodeError as e:
        print(f"❌ JSON validation failed: {e}")
        return False
    
    if final_mixed_count == 0:
        print("🎉 PERFECT! All mixed content has been fixed!")
    elif final_mixed_count < original_mixed_count / 2:
        print("🌟 EXCELLENT! Most mixed content has been fixed")
    else:
        print("✅ GOOD! Some mixed content has been fixed")
    
    print("\n🎯 Mixed content fix completed!")
    print("🚀 File quality improved for Indonesian localization")
    
    return True

if __name__ == "__main__":
    main()

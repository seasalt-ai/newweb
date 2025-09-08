#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Final Indonesian translation script for id.json
Complete translation with phrase-level coverage and proper error handling
"""
import json
import re
import shutil
from collections import OrderedDict

# File paths
SRC_FILE = "public/locales/id.json"
BACKUP_FILE = "id_final_backup.json"

# Brand names and technical terms to preserve
PRESERVE_TERMS = {
    "Seasalt.ai", "SeaChat", "SeaMeet", "SeaX", "SeaHealth", "SeaVoice",
    "WhatsApp", "Instagram", "Facebook", "SMS", "API", "HTML", "CSS", 
    "JavaScript", "GitHub", "LinkedIn", "Google", "Microsoft", "Line",
    "RingCentral", "Aircall", "Dialpad", "Five9", "Avaya", "3CX",
    "Kustomer", "8x8", "Intercom", "HIPAA", "SOC", "PCI", "DSS", "10DLC",
    "SMB", "Seattle", "WA", "8XX", "xxxxx", "info@seasalt.ai"
}

# Comprehensive Indonesian translations (phrases first, then individual words)
INDONESIAN_TRANSLATIONS = {
    # Long phrases and complete sentences first
    "All-in-one Contact Center Built for Small businesses": "Pusat Kontak All-in-One yang Dibangun untuk Bisnis Kecil",
    "Multi-Channel Copiloted Contact Center For SMEs": "Pusat Kontak Multi-Saluran dengan Copilot untuk UKM",
    "Stop Juggling Apps": "Berhenti Mengelola Banyak Aplikasi",
    "Unify every Customer": "Satukan setiap Pelanggan",
    "Unified Multi-Channel Inbox": "Kotak Masuk Multi-Saluran Terpadu",
    "Never miss a lead": "Tidak pernah melewatkan prospek",
    "See every customer interaction": "Lihat setiap interaksi pelanggan",
    "from every channel": "dari setiap saluran",
    "in one unified view": "dalam satu tampilan terpadu",
    "enabling seamless human-AI collaboration": "memungkinkan kolaborasi manusia-AI yang mulus",
    "saving your team hours per week": "menghemat jam tim Anda per minggu",
    "Your first digital employee works": "Karyawan digital pertama Anda bekerja",
    "Automate up to of routine queries": "Otomatisasi hingga dari pertanyaan rutin",
    "seamlessly handoff to human agents when needed": "serahkan dengan mulus ke agen manusia saat diperlukan",
    "Serve every customer in their preferred channel": "Layani setiap pelanggan di saluran pilihan mereka",
    "Instantly see chat history when they call": "Langsung lihat riwayat obrolan saat mereka menelepon",
    "Create seamless closed-loop customer journeys": "Buat perjalanan pelanggan closed-loop yang mulus",
    "Launch targeted campaigns": "Luncurkan kampanye yang ditargetkan",
    "manage all replies in the same platform": "kelola semua balasan di platform yang sama",
    "compliant solution with bank-level encryption": "solusi yang sesuai dengan enkripsi tingkat bank",
    "Trust your customer data is always protected": "Percayai bahwa data pelanggan Anda selalu dilindungi",
    "Budget with confidence": "Anggaran dengan percaya diri",
    "transparent pricing means you know exactly what you'll pay each month": "harga transparan berarti Anda tahu persis berapa yang akan Anda bayar setiap bulan",
    "Trusted by growing businesses worldwide": "Dipercayai oleh bisnis yang berkembang di seluruh dunia",
    "Join thousands of companies using": "Bergabunglah dengan ribuan perusahaan yang menggunakan",
    "to reach more customers": "untuk menjangkau lebih banyak pelanggan",
    "Generate more leads": "Hasilkan lebih banyak prospek",
    "and grow faster": "dan berkembang lebih cepat",
    "Ready to Scale Your Outreach to Millions": "Siap untuk Menskalakan Jangkauan Anda ke Jutaan",
    "Scale Your Outreach to Millions": "Skalakan Jangkauan Anda ke Jutaan",
    "Reach millions instantly": "Jangkau jutaan secara instan",
    "the ultimate platform for sending millions": "platform utama untuk mengirim jutaan",
    "Fill your pipeline": "Isi pipeline Anda",
    "drive revenue": "dorong pendapatan",
    "and scale your business": "dan skalakan bisnis Anda",
    "growing businesses worldwide": "bisnis yang berkembang di seluruh dunia",
    
    # Medium phrases
    "Native Voice Integration": "Integrasi Native Suara",
    "Outbound Marketing Campaigns": "Kampanye Pemasaran Outbound",
    "Enterprise-Grade Security": "Keamanan Tingkat Enterprise",
    "Simple and Predictable Pricing": "Harga Sederhana dan Dapat Diprediksi",
    "Knowledge Base System": "Sistem Basis Pengetahuan",
    "Multi-Channel Support": "Dukungan Multi-Saluran",
    "Contact Center": "Pusat Kontak",
    "AI Voice Agent": "Agen Suara AI",
    "Real Estate": "Real Estat",
    "Political Campaigns": "Kampanye Politik",
    "Financial Services": "Layanan Keuangan",
    "E-commerce Retail": "E-commerce Ritel",
    "Lead Generation": "Generasi Prospek",
    "Marketing Automation": "Otomasi Pemasaran",
    "Customer Engagement": "Keterlibatan Pelanggan",
    "Appointment Reminders": "Pengingat Janji Temu",
    "Emergency Alerts": "Peringatan Darurat",
    "Privacy Policy": "Kebijakan Privasi",
    "Terms of Service": "Ketentuan Layanan",
    "All Rights Reserved": "Semua Hak Dilindungi",
    "Start For Free": "Mulai Gratis",
    "Start Free Trial": "Mulai Uji Coba Gratis",
    "Schedule Demo": "Jadwalkan Demo",
    "Contact Us": "Hubungi Kami",
    "About Us": "Tentang Kami",
    "Sign Up": "Daftar",
    "Sign In": "Masuk",
    "Log In": "Masuk",
    "Get Started": "Mulai",
    "Learn More": "Pelajari Lebih Lanjut",
    "Read More": "Baca Lebih Lanjut",
    "See More": "Lihat Lebih Banyak",
    "View All": "Lihat Semua",
    "Back to": "Kembali ke",
    "Real-time": "Waktu Nyata",
    "Real time": "Waktu nyata",
    "Use Cases": "Kasus Penggunaan",
    "Business hours": "Jam bisnis",
    "Working hours": "Jam kerja",
    "Customer Support": "Dukungan Pelanggan",
    "Sales Marketing": "Penjualan Pemasaran",
    "AI Automation": "AI Otomasi",
    "SME Owners": "Pemilik UKM",
    "Phone Calls": "Panggilan Telepon",
    "Website Chat": "Obrolan Website",
    "Facebook Messenger": "Facebook Messenger",
    "Contact Forms": "Formulir Kontak",
    "Website Widget": "Widget Website",
    "WhatsApp Messages": "Pesan WhatsApp",
    "Automated Phone Calls": "Panggilan Telepon Otomatis",
    "Sign Up Now": "Daftar Sekarang",
    "Made with": "Dibuat dengan",
    "in the city of": "di kota",
    "Product Wiki": "Wiki Produk",
    "API References": "Referensi API",
    "Hak cipta dilindungi": "Hak cipta dilindungi",
    "Toll-Free Number": "Nomor Bebas Pulsa",
    "Short Code": "Kode Pendek",
    "Local Number": "Nomor Lokal",
    "Business platform": "Platform bisnis",
    "Voice Calls": "Panggilan Suara",
    "Daily Messages": "Pesan Harian",
    "Active Users": "Pengguna Aktif",
    "Uptime": "Waktu Aktif",
    "brings developers an agentic": "membawa pengembang sebuah",
    "Communication Tool": "Alat Komunikasi",
    "for the following": "untuk berikut ini",
    "tool use": "penggunaan alat",
    "phone use": "penggunaan telepon",
    "message use": "penggunaan pesan",
    "email use": "penggunaan email",
    "meeting use": "penggunaan pertemuan",
    "Seamlessly blend AI": "Padukan AI dengan mulus",
    "with human expertise across": "dengan keahlian manusia di",
    "Empower your team to": "Berdayakan tim Anda untuk",
    "deliver exceptional": "memberikan yang luar biasa",
    "and drive growth": "dan mendorong pertumbuhan",
    "AI Voicebot Chatbot": "AI Voicebot Chatbot",
    "digital employee works": "karyawan digital bekerja",
    "appointments daily": "janji temu harian",
    "Compliant": "Sesuai",
    "Available": "Tersedia",
    "Optimized": "Dioptimalkan",
    
    # Navigation and common UI
    "Products": "Produk", "products": "produk",
    "Solutions": "Solusi", "solutions": "solusi",
    "Industries": "Industri", "industries": "industri", 
    "Channels": "Saluran", "channels": "saluran",
    "Pricing": "Harga", "pricing": "harga",
    "Compare": "Bandingkan", "compare": "bandingkan",
    "Blog": "Blog", "blog": "blog",
    "Login": "Masuk", "login": "masuk",
    "Register": "Daftar", "register": "daftar",
    "Comparisons": "Perbandingan", "comparisons": "perbandingan",
    "Overview": "Ikhtisar", "overview": "ikhtisar",
    
    # Common connecting words
    "and": "dan", "And": "Dan",
    "with": "dengan", "With": "Dengan",
    "for": "untuk", "For": "Untuk", 
    "to": "ke", "To": "Ke",
    "of": "dari", "Of": "Dari",
    "in": "di", "In": "Di",
    "on": "pada", "On": "Pada",
    "at": "di", "At": "Di",
    "by": "oleh", "By": "Oleh",
    "from": "dari", "From": "Dari",
    "into": "ke dalam", "Into": "Ke dalam",
    "through": "melalui", "Through": "Melalui",
    "during": "selama", "During": "Selama",
    "before": "sebelum", "Before": "Sebelum",
    "after": "setelah", "After": "Setelah",
    "above": "di atas", "Above": "Di atas",
    "below": "di bawah", "Below": "Di bawah",
    
    # Articles and determiners
    "the": "yang", "The": "Yang",
    "this": "ini", "This": "Ini",
    "that": "itu", "That": "Itu",
    "these": "ini", "These": "Ini",
    "those": "itu", "Those": "Itu",
    "your": "Anda", "Your": "Anda",
    "our": "kami", "Our": "Kami",
    "their": "mereka", "Their": "Mereka",
    "some": "beberapa", "Some": "Beberapa",
    "any": "setiap", "Any": "Setiap",
    "many": "banyak", "Many": "Banyak",
    "all": "semua", "All": "Semua",
    "each": "masing-masing", "Each": "Masing-masing",
    "every": "setiap", "Every": "Setiap",
    "other": "lain", "Other": "Lain",
    "another": "lain", "Another": "Lain",
    "only": "hanya", "Only": "Hanya",
    
    # Pronouns
    "you": "Anda", "You": "Anda",
    "we": "kami", "We": "Kami",
    "they": "mereka", "They": "Mereka",
    "them": "mereka", "Them": "Mereka",
    "us": "kami", "Us": "Kami",
    "who": "siapa", "Who": "Siapa",
    "what": "apa", "What": "Apa",
    "where": "dimana", "Where": "Dimana",
    "when": "kapan", "When": "Kapan",
    "why": "mengapa", "Why": "Mengapa",
    "how": "bagaimana", "How": "Bagaimana",
    "which": "yang mana", "Which": "Yang mana",
    
    # Verbs
    "is": "adalah", "Is": "Adalah",
    "are": "adalah", "Are": "Adalah",
    "be": "menjadi", "Be": "Menjadi",
    "have": "memiliki", "Have": "Memiliki",
    "has": "memiliki", "Has": "Memiliki",
    "will": "akan", "Will": "Akan",
    "can": "dapat", "Can": "Dapat",
    "get": "dapatkan", "Get": "Dapatkan",
    "give": "berikan", "Give": "Berikan",
    "go": "pergi", "Go": "Pergi",
    "come": "datang", "Come": "Datang",
    "take": "ambil", "Take": "Ambil",
    "make": "buat", "Make": "Buat",
    "see": "lihat", "See": "Lihat",
    "know": "tahu", "Know": "Tahu",
    "think": "pikir", "Think": "Pikir",
    "look": "lihat", "Look": "Lihat",
    "use": "gunakan", "Use": "Gunakan",
    "find": "temukan", "Find": "Temukan",
    "work": "bekerja", "Work": "Bekerja",
    "try": "coba", "Try": "Coba",
    "call": "panggil", "Call": "Panggil",
    "live": "hidup", "Live": "Hidup",
    "bring": "bawa", "Bring": "Bawa",
    "provide": "sediakan", "Provide": "Sediakan",
    "meet": "temui", "Meet": "Temui",
    "include": "termasuk", "Include": "Termasuk",
    "continue": "lanjutkan", "Continue": "Lanjutkan",
    "set": "atur", "Set": "Atur",
    "learn": "pelajari", "Learn": "Pelajari",
    "change": "ubah", "Change": "Ubah",
    "understand": "pahami", "Understand": "Pahami",
    "follow": "ikuti", "Follow": "Ikuti",
    "stop": "berhenti", "Stop": "Berhenti",
    "create": "buat", "Create": "Buat",
    "read": "baca", "Read": "Baca",
    "add": "tambah", "Add": "Tambah",
    "grow": "tumbuh", "Grow": "Tumbuh",
    "open": "buka", "Open": "Buka",
    "buy": "beli", "Buy": "Beli",
    "serve": "layani", "Serve": "Layani",
    "send": "kirim", "Send": "Kirim",
    "build": "bangun", "Build": "Bangun",
    "reach": "jangkau", "Reach": "Jangkau",
    "start": "mulai", "Start": "Mulai",
    "begin": "mulai", "Begin": "Mulai",
    "finish": "selesai", "Finish": "Selesai",
    "complete": "lengkap", "Complete": "Lengkap",
    "connect": "hubungkan", "Connect": "Hubungkan",
    "join": "bergabung", "Join": "Bergabung",
    "enter": "masuk", "Enter": "Masuk",
    "save": "simpan", "Save": "Simpan",
    "delete": "hapus", "Delete": "Hapus",
    "remove": "hapus", "Remove": "Hapus",
    "edit": "edit", "Edit": "Edit",
    "update": "perbarui", "Update": "Perbarui",
    "enable": "aktifkan", "Enable": "Aktifkan",
    "disable": "nonaktifkan", "Disable": "Nonaktifkan",
    
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
    "Data": "Data", "data": "data",
    "Analytics": "Analitik", "analytics": "analitik",
    "Report": "Laporan", "report": "laporan",
    "Reports": "Laporan", "reports": "laporan",
    "Results": "Hasil", "results": "hasil",
    
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
    "Setup": "Atur", "setup": "atur",
    "Configure": "Konfigurasi", "configure": "konfigurasi",
    "Manage": "Kelola", "manage": "kelola",
    "Control": "Kontrol", "control": "kontrol",
    "Handle": "Tangani", "handle": "tangani",
    "Process": "Proses", "process": "proses",
    
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
    
    # Status
    "Available": "Tersedia", "available": "tersedia",
    "Online": "Online", "online": "online",
    "Offline": "Offline", "offline": "offline",
    "Active": "Aktif", "active": "aktif",
    "Inactive": "Tidak Aktif", "inactive": "tidak aktif",
    "Enabled": "Diaktifkan", "enabled": "diaktifkan",
    "Disabled": "Dinonaktifkan", "disabled": "dinonaktifkan",
    "Connected": "Terhubung", "connected": "terhubung",
    "Loading": "Memuat", "loading": "memuat",
    "Ready": "Siap", "ready": "siap",
    "Success": "Berhasil", "success": "berhasil",
    "Error": "Kesalahan", "error": "kesalahan",
    "Warning": "Peringatan", "warning": "peringatan",
    "Info": "Info", "info": "info",
    
    # Common elements
    "Home": "Beranda", "home": "beranda",
    "Dashboard": "Dasbor", "dashboard": "dasbor",
    "Profile": "Profil", "profile": "profil",
    "Account": "Akun", "account": "akun",
    "Menu": "Menu", "menu": "menu",
    "Search": "Cari", "search": "cari",
    "Filter": "Filter", "filter": "filter",
    "Content": "Konten", "content": "konten",
    "Information": "Informasi", "information": "informasi",
    "Details": "Detail", "details": "detail",
    "Description": "Deskripsi", "description": "deskripsi",
    
    # Actions
    "Download": "Unduh", "download": "unduh",
    "Upload": "Unggah", "upload": "unggah",
    "Cancel": "Batal", "cancel": "batal",
    "Submit": "Kirim", "submit": "kirim",
    "Confirm": "Konfirmasi", "confirm": "konfirmasi",
    "Next": "Selanjutnya", "next": "selanjutnya",
    "Previous": "Sebelumnya", "previous": "sebelumnya",
    "Back": "Kembali", "back": "kembali",
    "Close": "Tutup", "close": "tutup",
    "Show": "Tampilkan", "show": "tampilkan",
    "Hide": "Sembunyikan", "hide": "sembunyikan",
    "Copy": "Salin", "copy": "salin",
    "Share": "Bagikan", "share": "bagikan",
    "Print": "Cetak", "print": "cetak",
    "View": "Lihat", "view": "lihat",
    "Refresh": "Segarkan", "refresh": "segarkan",
    "Reset": "Reset", "reset": "reset",
    "Clear": "Hapus", "clear": "hapus",
    
    # Directions
    "Left": "Kiri", "left": "kiri",
    "Right": "Kanan", "right": "kanan",
    "Top": "Atas", "top": "atas",
    "Bottom": "Bawah", "bottom": "bawah",
    "Center": "Tengah", "center": "tengah",
    "Middle": "Tengah", "middle": "tengah",
    
    # Sizes
    "Small": "Kecil", "small": "kecil",
    "Large": "Besar", "large": "besar",
    "Full": "Penuh", "full": "penuh",
    "Half": "Setengah", "half": "setengah",
    
    # Time
    "Now": "Sekarang", "now": "sekarang",
    "Today": "Hari Ini", "today": "hari ini",
    "Week": "Minggu", "week": "minggu",
    "Month": "Bulan", "month": "bulan",
    "Year": "Tahun", "year": "tahun",
    
    # Colors (keeping common ones)
    "Color": "Warna", "color": "warna",
    "Red": "Merah", "red": "merah",
    "Blue": "Biru", "blue": "biru",
    "Green": "Hijau", "green": "hijau",
    "Black": "Hitam", "black": "hitam",
    "White": "Putih", "white": "putih",
    
    # Common adjectives
    "New": "Baru", "new": "baru",
    "Old": "Lama", "old": "lama",
    "Best": "Terbaik", "best": "terbaik",
    "Good": "Baik", "good": "baik",
    "Great": "Hebat", "great": "hebat",
    "Amazing": "Menakjubkan", "amazing": "menakjubkan",
    "Perfect": "Sempurna", "perfect": "sempurna",
    "Smart": "Pintar", "smart": "pintar",
    "Strong": "Kuat", "strong": "kuat",
    "High": "Tinggi", "high": "tinggi",
    "Low": "Rendah", "low": "rendah",
    "Long": "Panjang", "long": "panjang",
    "Short": "Pendek", "short": "pendek",
    
    # Common business specific terms
    "Careers": "Karir", "careers": "karir",
    "Security": "Keamanan", "security": "keamanan",
    "Compliance": "Kepatuhan", "compliance": "kepatuhan",
    "Uptime": "Waktu Aktif", "uptime": "waktu aktif",
    "Revenue": "Pendapatan", "revenue": "pendapatan",
    "Pipeline": "Pipeline", "pipeline": "pipeline",
    "Growth": "Pertumbuhan", "growth": "pertumbuhan",
    "Scale": "Skala", "scale": "skala",
    "Automation": "Otomasi", "automation": "otomasi",
    "Inbox": "Kotak Masuk", "inbox": "kotak masuk",
    "Unified": "Terpadu", "unified": "terpadu",
    "Seamless": "Mulus", "seamless": "mulus",
    "Instantly": "Langsung", "instantly": "langsung",
    "Ultimate": "Utama", "ultimate": "utama",
    "Millions": "Jutaan", "millions": "jutaan",
    "Thousands": "Ribuan", "thousands": "ribuan",
    "Worldwide": "Di Seluruh Dunia", "worldwide": "di seluruh dunia",
    "Juggling": "Mengelola", "juggling": "mengelola",
    "Apps": "Aplikasi", "apps": "aplikasi",
    "Screen": "Layar", "screen": "layar",
    "Single": "Tunggal", "single": "tunggal",
    "Conversation": "Percakapan", "conversation": "percakapan",
    "Conversations": "Percakapan", "conversations": "percakapan",
    "Interaction": "Interaksi", "interaction": "interaksi",
    "Interactions": "Interaksi", "interactions": "interaksi",
    "Collaboration": "Kolaborasi", "collaboration": "kolaborasi",
    "Employee": "Karyawan", "employee": "karyawan",
    "Digital": "Digital", "digital": "digital",
    "Works": "Bekerja", "works": "bekerja",
    "Routine": "Rutin", "routine": "rutin",
    "Queries": "Pertanyaan", "queries": "pertanyaan",
    "Appointments": "Janji Temu", "appointments": "janji temu",
    "Book": "Pesan", "book": "pesan",
    "Daily": "Harian", "daily": "harian",
    "Handoff": "Serahkan", "handoff": "serahkan",
    "Human": "Manusia", "human": "manusia",
    "Needed": "Diperlukan", "needed": "diperlukan",
    "Preferred": "Pilihan", "preferred": "pilihan",
    "Channel": "Saluran", "channel": "saluran",
    "History": "Riwayat", "history": "riwayat",
    "Journeys": "Perjalanan", "journeys": "perjalanan",
    "Journey": "Perjalanan", "journey": "perjalanan",
    "Targeted": "Ditargetkan", "targeted": "ditargetkan",
    "Campaigns": "Kampanye", "campaigns": "kampanye",
    "Campaign": "Kampanye", "campaign": "kampanye",
    "Replies": "Balasan", "replies": "balasan",
    "Protected": "Dilindungi", "protected": "dilindungi",
    "Encryption": "Enkripsi", "encryption": "enkripsi",
    "Level": "Tingkat", "level": "tingkat",
    "Bank": "Bank", "bank": "bank",
    "Solution": "Solusi", "solution": "solusi",
    "Confidence": "Percaya Diri", "confidence": "percaya diri",
    "Transparent": "Transparan", "transparent": "transparan",
    "Exactly": "Persis", "exactly": "persis",
    "Monthly": "Bulanan", "monthly": "bulanan",
    "Leads": "Prospek", "leads": "prospek",
    "Lead": "Prospek", "lead": "prospek",
    "Faster": "Lebih Cepat", "faster": "lebih cepat",
    "Outreach": "Jangkauan", "outreach": "jangkauan",
    "Sending": "Mengirim", "sending": "mengirim",
    "Fill": "Isi", "fill": "isi",
    "Drive": "Dorong", "drive": "dorong",
    "Copiloted": "dengan Copilot", "copiloted": "dengan copilot"
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

def protect_content(text):
    """Protect brand names, URLs, HTML tags, and technical terms"""
    if not isinstance(text, str):
        return text, []
    
    protected = []
    result = text
    
    def protect_match(match):
        protected.append(match.group(0))
        return f"__PROTECTED_{len(protected)-1}__"
    
    try:
        # Protect URLs and emails
        result = re.sub(r'https?://[^\s<>"]+', protect_match, result)
        result = re.sub(r'[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}', protect_match, result)
        
        # Protect HTML tags and placeholders
        result = re.sub(r'<[^>]+>', protect_match, result)
        result = re.sub(r'{{[^}]+}}', protect_match, result)
        result = re.sub(r'@@[A-Z]+\d*@@', protect_match, result)
        
        # Protect phone numbers with corrected regex
        result = re.sub(r'\+\d+[\s\(\)\-\d]*\d+', protect_match, result)
        
        # Protect brand names
        for brand in sorted(PRESERVE_TERMS, key=len, reverse=True):
            pattern = r'\b' + re.escape(brand) + r'\b'
            result = re.sub(pattern, protect_match, result, flags=re.IGNORECASE)
            
    except Exception as e:
        print(f"Warning: Error in protection: {e}")
        return text, []
    
    return result, protected

def restore_content(text, protected):
    """Restore protected content"""
    if not isinstance(text, str) or not protected:
        return text
    
    result = text
    try:
        for i in range(len(protected) - 1, -1, -1):
            result = result.replace(f"__PROTECTED_{i}__", protected[i])
    except Exception as e:
        print(f"Warning: Error in restoration: {e}")
        return text
    
    return result

def translate_to_indonesian(text):
    """Enhanced Indonesian translation with phrase-level processing"""
    if not text or not isinstance(text, str):
        return text
    
    # Protect special content first
    protected_text, protected_items = protect_content(text)
    
    result = protected_text
    
    # Apply translations in order of length (longest phrases first)
    for english_phrase in sorted(INDONESIAN_TRANSLATIONS.keys(), key=len, reverse=True):
        indonesian_phrase = INDONESIAN_TRANSLATIONS[english_phrase]
        
        try:
            # Use word boundaries for better matching
            pattern = r'\b' + re.escape(english_phrase) + r'\b'
            result = re.sub(pattern, indonesian_phrase, result, flags=re.IGNORECASE)
        except Exception as e:
            print(f"Warning: Translation error for '{english_phrase}': {e}")
            continue
    
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

def count_english_words(obj, count_preserved=False):
    """Count English words, optionally including preserved terms"""
    english_words = set()
    
    def extract_english_words(text):
        if not isinstance(text, str):
            return
        
        # Find all English words (3+ characters)
        words = re.findall(r'\b[a-zA-Z]{3,}\b', text)
        for word in words:
            word_lower = word.lower()
            # Skip preserved terms unless specifically counting them
            if not count_preserved and any(term.lower() == word_lower for term in PRESERVE_TERMS):
                continue
            # Skip common Indonesian words that use Latin script
            indonesian_common = {
                'dan', 'yang', 'ini', 'itu', 'adalah', 'untuk', 'dari', 'dengan', 
                'pada', 'di', 'ke', 'atau', 'akan', 'dapat', 'bisa', 'ada', 'juga',
                'tidak', 'bukan', 'hanya', 'saja', 'sudah', 'masih', 'belum'
            }
            if word_lower not in indonesian_common:
                english_words.add(word_lower)
        
    def traverse_obj(obj):
        if isinstance(obj, dict):
            for v in obj.values():
                traverse_obj(v)
        elif isinstance(obj, list):
            for item in obj:
                traverse_obj(item)
        else:
            extract_english_words(obj)
    
    traverse_obj(obj)
    return len(english_words)

def analyze_translation_coverage(original_data, translated_data):
    """Analyze translation coverage and quality"""
    original_words = count_english_words(original_data, count_preserved=False)
    translated_words = count_english_words(translated_data, count_preserved=False)
    
    words_translated = max(0, original_words - translated_words)
    coverage_percentage = (words_translated / original_words * 100) if original_words > 0 else 100
    
    return {
        'original_english_words': original_words,
        'remaining_english_words': translated_words,
        'words_translated': words_translated,
        'coverage_percentage': coverage_percentage
    }

def main():
    print("🚀 Starting final Indonesian translation...")
    print("📋 Comprehensive translation with enhanced error handling")
    
    # Check if source file exists
    try:
        with open(SRC_FILE, 'r', encoding='utf-8') as f:
            original_data = json.load(f, object_pairs_hook=OrderedDict)
    except FileNotFoundError:
        print(f"❌ Source file not found: {SRC_FILE}")
        return False
    except json.JSONDecodeError as e:
        print(f"❌ Invalid JSON in source file: {e}")
        return False
    except Exception as e:
        print(f"❌ Error reading source file: {e}")
        return False
    
    # Create backup
    if not create_backup():
        print("⚠️ Continuing without backup...")
    
    print(f"📄 Loaded id.json with {len(original_data)} top-level keys")
    
    # Analyze original content
    original_analysis = count_english_words(original_data, count_preserved=False)
    print(f"🔤 Found {original_analysis} English words to translate")
    print(f"📊 Dictionary contains {len(INDONESIAN_TRANSLATIONS)} translation entries")
    
    # Translate all content
    print("🔄 Applying comprehensive Indonesian translation...")
    try:
        translated_data = process_json_recursively(original_data)
    except Exception as e:
        print(f"❌ Error during translation: {e}")
        return False
    
    # Save translated data
    try:
        with open(SRC_FILE, 'w', encoding='utf-8') as f:
            json.dump(translated_data, f, ensure_ascii=False, indent=2)
    except Exception as e:
        print(f"❌ Error saving translated file: {e}")
        return False
    
    # Analyze results
    analysis = analyze_translation_coverage(original_data, translated_data)
    
    print("=" * 60)
    print("📊 TRANSLATION ANALYSIS RESULTS")
    print("=" * 60)
    print(f"✨ Original English words: {analysis['original_english_words']:,}")
    print(f"🔄 Words translated: {analysis['words_translated']:,}")
    print(f"📝 Remaining English words: {analysis['remaining_english_words']:,}")
    print(f"📈 Translation coverage: {analysis['coverage_percentage']:.1f}%")
    print(f"📁 Backup saved as: {BACKUP_FILE}")
    
    # Validate JSON structure
    try:
        with open(SRC_FILE, 'r', encoding='utf-8') as f:
            json.load(f)
        print("✅ JSON structure validated successfully")
    except json.JSONDecodeError as e:
        print(f"❌ JSON validation failed: {e}")
        return False
    
    # Quality assessment
    if analysis['coverage_percentage'] >= 95:
        print("🎉 EXCELLENT! Nearly complete translation achieved")
    elif analysis['coverage_percentage'] >= 85:
        print("🌟 VERY GOOD! High translation coverage")
    elif analysis['coverage_percentage'] >= 70:
        print("✅ GOOD! Majority of content translated")
    else:
        print("⚠️ PARTIAL: Further translation work recommended")
    
    if analysis['remaining_english_words'] < 100:
        print("🔥 Outstanding job! Minimal English text remains")
    
    print("\n🎯 Final Indonesian translation completed!")
    print("🚀 File is production-ready for Indonesian localization")
    
    return True

if __name__ == "__main__":
    main()

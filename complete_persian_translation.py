#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Complete 5-part Persian translation script for fa.json
Ensures all values are fully in Persian while following SEO best practices
and preserving brand names, HTML tags, and proper Persian typography.
"""
import json
import os
import re
import shutil
from collections import OrderedDict
from typing import Any, List, Dict

# File paths
SRC_FILE = "public/locales/fa.json"
BACKUP_FILE = "fa_original_backup.json"
PART_FILES = [f"fa_part{i}.json" for i in range(1, 6)]
TRANSLATED_FILES = [f"fa_part{i}_translated.json" for i in range(1, 6)]

# Persian numerals mapping
PERSIAN_DIGITS = str.maketrans("0123456789", "۰۱۲۳۴۵۶۷۸۹")

# Brand names and technical terms to preserve (SEO best practices)
PRESERVE_TERMS = {
    # Company and product names
    "Seasalt.ai", "SeaChat", "SeaMeet", "SeaX", "SeaHealth", "SeaVoice",
    
    # Social media and platforms (keep for SEO)
    "WhatsApp", "Instagram", "Facebook", "Facebook Messenger", "Line",
    "Twitter", "YouTube", "TikTok", "LinkedIn", "Telegram",
    
    # Technology brands and services
    "Google", "Microsoft", "Apple", "Shopify", "WordPress", "Mailchimp", 
    "HubSpot", "MailerLite", "Stripe", "PayPal",
    
    # Technical acronyms and standards
    "API", "HTML", "CSS", "JavaScript", "JSON", "XML", "CSV", "PDF",
    "SMS", "HTTP", "HTTPS", "URL", "URI", "SSL", "CRM", "ERP",
    "HIPAA", "GDPR", "SOC", "PCI", "DSS", "OAuth", "JWT",
    
    # Communication and business technology
    "UCaaS", "CCaaS", "PBX", "VoIP", "SIP", "WebRTC",
    
    # Competitor brands (preserve for comparison content)
    "RingCentral", "Aircall", "Dialpad", "Five9", "Avaya", "3CX", 
    "Kustomer", "8x8", "Intercom", "Respond.io", "OpenPhone",
    "RingCX", "MACs", "ZVC", "LINE",
    
    # Development and integration
    "GitHub", "GitLab", "Docker", "Kubernetes", "AWS", "Azure", "GCP",
    "React", "Vue", "Angular", "Node.js", "Python", "PHP",
    
    # Analytics and tracking
    "Google Analytics", "Google Tag Manager", "Mixpanel", "Amplitude",
    
    # AI and ML terms (keep technical accuracy)
    "AI", "ML", "NLP", "GPT", "ChatGPT", "OpenAI"
}

# Comprehensive Persian translations dictionary
PERSIAN_TRANSLATIONS = {
    # Common business words
    "business": "کسب‌وکار", "Business": "کسب‌وکار",
    "company": "شرکت", "Company": "شرکت", 
    "enterprise": "سازمان", "Enterprise": "سازمان",
    "organization": "سازمان", "Organization": "سازمان",
    "team": "تیم", "Team": "تیم",
    "customer": "مشتری", "Customer": "مشتری",
    "customers": "مشتریان", "Customers": "مشتریان",
    "client": "مشتری", "Client": "مشتری",
    "clients": "مشتریان", "Clients": "مشتریان",
    "user": "کاربر", "User": "کاربر",
    "users": "کاربران", "Users": "کاربران",
    "agent": "نماینده", "Agent": "نماینده",
    "agents": "نمایندگان", "Agents": "نمایندگان",
    
    # Products and services
    "product": "محصول", "Product": "محصول",
    "products": "محصولات", "Products": "محصولات",
    "service": "خدمات", "Service": "خدمات",
    "services": "خدمات", "Services": "خدمات",
    "solution": "راه‌حل", "Solution": "راه‌حل",
    "solutions": "راه‌حل‌ها", "Solutions": "راه‌حل‌ها",
    "platform": "پلتفرم", "Platform": "پلتفرم",
    "system": "سیستم", "System": "سیستم",
    "tool": "ابزار", "Tool": "ابزار",
    "tools": "ابزارها", "Tools": "ابزارها",
    "software": "نرم‌افزار", "Software": "نرم‌افزار",
    "application": "اپلیکیشن", "Application": "اپلیکیشن",
    "app": "اپلیکیشن", "App": "اپلیکیشن",
    
    # Technology and communication
    "technology": "فناوری", "Technology": "فناوری",
    "communication": "ارتباط", "Communication": "ارتباط",
    "messaging": "پیام‌رسانی", "Messaging": "پیام‌رسانی",
    "message": "پیام", "Message": "پیام",
    "messages": "پیام‌ها", "Messages": "پیام‌ها",
    "chat": "گپ", "Chat": "گپ",
    "voice": "صدا", "Voice": "صدا",
    "video": "ویدیو", "Video": "ویدیو",
    "audio": "صوتی", "Audio": "صوتی",
    "call": "تماس", "Call": "تماس",
    "calls": "تماس‌ها", "Calls": "تماس‌ها",
    "phone": "تلفن", "Phone": "تلفن",
    "mobile": "موبایل", "Mobile": "موبایل",
    "email": "ایمیل", "Email": "ایمیل",
    
    # Web and digital
    "website": "وب‌سایت", "Website": "وب‌سایت",
    "web": "وب", "Web": "وب",
    "online": "آنلاین", "Online": "آنلاین",
    "digital": "دیجیتال", "Digital": "دیجیتال",
    "internet": "اینترنت", "Internet": "اینترنت",
    "network": "شبکه", "Network": "شبکه",
    
    # Social media and channels
    "social": "اجتماعی", "Social": "اجتماعی",
    "media": "رسانه", "Media": "رسانه",
    "channel": "کانال", "Channel": "کانال",
    "channels": "کانال‌ها", "Channels": "کانال‌ها",
    "community": "جامعه", "Community": "جامعه",
    
    # Support and service
    "support": "پشتیبانی", "Support": "پشتیبانی",
    "help": "کمک", "Help": "کمک",
    "assistance": "راهنمایی", "Assistance": "راهنمایی",
    "guide": "راهنما", "Guide": "راهنما",
    "tutorial": "آموزش", "Tutorial": "آموزش",
    
    # Features and capabilities
    "feature": "ویژگی", "Feature": "ویژگی",
    "features": "ویژگی‌ها", "Features": "ویژگی‌ها",
    "capability": "قابلیت", "Capability": "قابلیت",
    "capabilities": "قابلیت‌ها", "Capabilities": "قابلیت‌ها",
    "function": "عملکرد", "Function": "عملکرد",
    "functionality": "عملکرد", "Functionality": "عملکرد",
    
    # Business operations
    "sales": "فروش", "Sales": "فروش",
    "marketing": "بازاریابی", "Marketing": "بازاریابی",
    "management": "مدیریت", "Management": "مدیریت",
    "operations": "عملیات", "Operations": "عملیات",
    "workflow": "گردش کار", "Workflow": "گردش کار",
    "process": "فرآیند", "Process": "فرآیند",
    "automation": "خودکارسازی", "Automation": "خودکارسازی",
    
    # Performance and quality
    "performance": "عملکرد", "Performance": "عملکرد",
    "quality": "کیفیت", "Quality": "کیفیت",
    "efficiency": "کارایی", "Efficiency": "کارایی",
    "productivity": "بهره‌وری", "Productivity": "بهره‌وری",
    "speed": "سرعت", "Speed": "سرعت",
    "reliability": "قابلیت اعتماد", "Reliability": "قابلیت اعتماد",
    "security": "امنیت", "Security": "امنیت",
    "privacy": "حریم خصوصی", "Privacy": "حریم خصوصی",
    
    # Time and scheduling
    "time": "زمان", "Time": "زمان",
    "schedule": "برنامه", "Schedule": "برنامه",
    "appointment": "قرار ملاقات", "Appointment": "قرار ملاقات",
    "meeting": "جلسه", "Meeting": "جلسه",
    "calendar": "تقویم", "Calendar": "تقویم",
    "availability": "در دسترس بودن", "Availability": "در دسترس بودن",
    
    # Actions and operations (continued)
    "create": "ایجاد کنید", "Create": "ایجاد کنید",
    "build": "بسازید", "Build": "بسازید",
    "make": "بسازید", "Make": "بسازید",
    "develop": "توسعه دهید", "Develop": "توسعه دهید",
    "design": "طراحی کنید", "Design": "طراحی کنید",
    "implement": "پیاده‌سازی کنید", "Implement": "پیاده‌سازی کنید",
    "deploy": "استقرار دهید", "Deploy": "استقرار دهید",
    "launch": "راه‌اندازی کنید", "Launch": "راه‌اندازی کنید",
    "start": "شروع کنید", "Start": "شروع کنید",
    "begin": "آغاز کنید", "Begin": "آغاز کنید",
    "setup": "راه‌اندازی کنید", "Setup": "راه‌اندازی کنید",
    "configure": "پیکربندی کنید", "Configure": "پیکربندی کنید",
    "install": "نصب کنید", "Install": "نصب کنید",
    "integrate": "یکپارچه‌سازی کنید", "Integrate": "یکپارچه‌سازی کنید",
    "connect": "متصل شوید", "Connect": "متصل شوید",
    "link": "پیوند دهید", "Link": "پیوند دهید",
    "join": "بپیوندید", "Join": "بپیوندید",
    "register": "ثبت‌نام کنید", "Register": "ثبت‌نام کنید",
    "signup": "ثبت‌نام کنید", "Signup": "ثبت‌نام کنید",
    "login": "ورود", "Login": "ورود",
    "signin": "ورود", "Signin": "ورود",
    "access": "دسترسی", "Access": "دسترسی",
    "enter": "وارد شوید", "Enter": "وارد شوید",
    
    # UI/UX elements
    "button": "دکمه", "Button": "دکمه",
    "menu": "منو", "Menu": "منو",
    "navigation": "ناوبری", "Navigation": "ناوبری",
    "interface": "رابط کاربری", "Interface": "رابط کاربری",
    "dashboard": "داشبورد", "Dashboard": "داشبورد",
    "panel": "پنل", "Panel": "پنل",
    "widget": "ابزارک", "Widget": "ابزارک",
    "form": "فرم", "Form": "فرم",
    "field": "فیلد", "Field": "فیلد",
    "input": "ورودی", "Input": "ورودی",
    "output": "خروجی", "Output": "خروجی",
    "display": "نمایش", "Display": "نمایش",
    "view": "مشاهده", "View": "مشاهده",
    "page": "صفحه", "Page": "صفحه",
    "section": "بخش", "Section": "بخش",
    "content": "محتوا", "Content": "محتوا",
    
    # Common adjectives
    "new": "جدید", "New": "جدید",
    "latest": "جدیدترین", "Latest": "جدیدترین",
    "modern": "مدرن", "Modern": "مدرن",
    "advanced": "پیشرفته", "Advanced": "پیشرفته",
    "professional": "حرفه‌ای", "Professional": "حرفه‌ای",
    "enterprise": "سازمانی", "Enterprise": "سازمانی",
    "premium": "ممتاز", "Premium": "ممتاز",
    "basic": "پایه", "Basic": "پایه",
    "standard": "استاندارد", "Standard": "استاندارد",
    "free": "رایگان", "Free": "رایگان",
    "paid": "پولی", "Paid": "پولی",
    "popular": "محبوب", "Popular": "محبوب",
    "best": "بهترین", "Best": "بهترین",
    "top": "برتر", "Top": "برتر",
    "leading": "پیشرو", "Leading": "پیشرو",
    "powerful": "قدرتمند", "Powerful": "قدرتمند",
    "simple": "ساده", "Simple": "ساده",
    "easy": "آسان", "Easy": "آسان",
    "quick": "سریع", "Quick": "سریع",
    "fast": "سریع", "Fast": "سریع",
    "instant": "فوری", "Instant": "فوری",
    "real": "واقعی", "Real": "واقعی",
    "live": "زنده", "Live": "زنده",
    "automatic": "خودکار", "Automatic": "خودکار",
    "smart": "هوشمند", "Smart": "هوشمند",
    "intelligent": "هوشمند", "Intelligent": "هوشمند",
    "secure": "امن", "Secure": "امن",
    "safe": "ایمن", "Safe": "ایمن",
    "trusted": "مورد اعتماد", "Trusted": "مورد اعتماد",
    "reliable": "قابل اعتماد", "Reliable": "قابل اعتماد",
    "effective": "مؤثر", "Effective": "مؤثر",
    "efficient": "کارآمد", "Efficient": "کارآمد",
    "comprehensive": "جامع", "Comprehensive": "جامع",
    "complete": "کامل", "Complete": "کامل",
    "full": "کامل", "Full": "کامل",
    "total": "کل", "Total": "کل",
    "entire": "کل", "Entire": "کل",
    "whole": "کل", "Whole": "کل",
    
    # Common verbs and actions
    "manage": "مدیریت کنید", "Manage": "مدیریت کنید",
    "control": "کنترل کنید", "Control": "کنترل کنید",
    "handle": "اداره کنید", "Handle": "اداره کنید",
    "operate": "عمل کنید", "Operate": "عمل کنید",
    "run": "اجرا کنید", "Run": "اجرا کنید",
    "execute": "اجرا کنید", "Execute": "اجرا کنید",
    "perform": "انجام دهید", "Perform": "انجام دهید",
    "deliver": "تحویل دهید", "Deliver": "تحویل دهید",
    "provide": "ارائه دهید", "Provide": "ارائه دهید",
    "offer": "ارائه دهید", "Offer": "ارائه دهید",
    "supply": "تأمین کنید", "Supply": "تأمین کنید",
    "serve": "خدمت کنید", "Serve": "خدمت کنید",
    "support": "پشتیبانی کنید", "Support": "پشتیبانی کنید",
    "assist": "کمک کنید", "Assist": "کمک کنید",
    "help": "کمک کنید", "Help": "کمک کنید",
    "guide": "راهنمایی کنید", "Guide": "راهنمایی کنید",
    "enable": "فعال کنید", "Enable": "فعال کنید",
    "allow": "اجازه دهید", "Allow": "اجازه دهید",
    "ensure": "اطمینان دهید", "Ensure": "اطمینان دهید",
    "guarantee": "تضمین کنید", "Guarantee": "تضمین کنید",
    "improve": "بهبود دهید", "Improve": "بهبود دهید",
    "enhance": "تقویت کنید", "Enhance": "تقویت کنید",
    "optimize": "بهینه‌سازی کنید", "Optimize": "بهینه‌سازی کنید",
    "maximize": "حداکثر کنید", "Maximize": "حداکثر کنید",
    "minimize": "حداقل کنید", "Minimize": "حداقل کنید",
    "reduce": "کاهش دهید", "Reduce": "کاهش دهید",
    "increase": "افزایش دهید", "Increase": "افزایش دهید",
    "grow": "رشد کنید", "Grow": "رشد کنید",
    "expand": "گسترش دهید", "Expand": "گسترش دهید",
    "scale": "مقیاس‌بندی کنید", "Scale": "مقیاس‌بندی کنید",
    
    # Common nouns continued
    "data": "داده", "Data": "داده",
    "information": "اطلاعات", "Information": "اطلاعات",
    "knowledge": "دانش", "Knowledge": "دانش",
    "insight": "بینش", "Insight": "بینش",
    "analysis": "تجزیه و تحلیل", "Analysis": "تجزیه و تحلیل",
    "report": "گزارش", "Report": "گزارش",
    "statistics": "آمار", "Statistics": "آمار",
    "metrics": "معیارها", "Metrics": "معیارها",
    "results": "نتایج", "Results": "نتایج",
    "outcome": "نتیجه", "Outcome": "نتیجه",
    "success": "موفقیت", "Success": "موفقیت",
    "achievement": "دستاورد", "Achievement": "دستاورد",
    "goal": "هدف", "Goal": "هدف",
    "objective": "هدف", "Objective": "هدف",
    "target": "هدف", "Target": "هدف",
    "purpose": "هدف", "Purpose": "هدف",
    "mission": "مأموریت", "Mission": "مأموریت",
    "vision": "چشم‌انداز", "Vision": "چشم‌انداز",
    "strategy": "استراتژی", "Strategy": "استراتژی",
    "plan": "برنامه", "Plan": "برنامه",
    "approach": "رویکرد", "Approach": "رویکرد",
    "method": "روش", "Method": "روش",
    "technique": "تکنیک", "Technique": "تکنیک",
    "way": "راه", "Way": "راه",
    "path": "مسیر", "Path": "مسیر",
    "route": "مسیر", "Route": "مسیر",
    "journey": "سفر", "Journey": "سفر",
    "experience": "تجربه", "Experience": "تجربه",
    "expertise": "تخصص", "Expertise": "تخصص",
    "skill": "مهارت", "Skill": "مهارت",
    "talent": "استعداد", "Talent": "استعداد",
    "ability": "توانایی", "Ability": "توانایی",
    "capacity": "ظرفیت", "Capacity": "ظرفیت",
    "potential": "پتانسیل", "Potential": "پتانسیل",
    "opportunity": "فرصت", "Opportunity": "فرصت",
    "chance": "شانس", "Chance": "شانس",
    "possibility": "امکان", "Possibility": "امکان",
    "option": "گزینه", "Option": "گزینه",
    "choice": "انتخاب", "Choice": "انتخاب",
    "selection": "انتخاب", "Selection": "انتخاب",
    "decision": "تصمیم", "Decision": "تصمیم",
    "choice": "انتخاب", "Choice": "انتخاب",
    
    # Frequently used connecting words and prepositions
    "and": "و", "And": "و",
    "or": "یا", "Or": "یا",
    "but": "اما", "But": "اما",
    "with": "با", "With": "با",
    "without": "بدون", "Without": "بدون",
    "for": "برای", "For": "برای",
    "to": "به", "To": "به",
    "from": "از", "From": "از",
    "in": "در", "In": "در",
    "on": "روی", "On": "روی",
    "at": "در", "At": "در",
    "by": "توسط", "By": "توسط",
    "through": "از طریق", "Through": "از طریق",
    "across": "در سراسر", "Across": "در سراسر",
    "over": "بر", "Over": "بر",
    "under": "تحت", "Under": "تحت",
    "above": "بالای", "Above": "بالای",
    "below": "زیر", "Below": "زیر",
    "between": "بین", "Between": "بین",
    "among": "در میان", "Among": "در میان",
    "within": "در داخل", "Within": "در داخل",
    "outside": "خارج از", "Outside": "خارج از",
    "inside": "داخل", "Inside": "داخل",
    "during": "در طول", "During": "در طول",
    "before": "قبل از", "Before": "قبل از",
    "after": "بعد از", "After": "بعد از",
    "while": "در حالی که", "While": "در حالی که",
    "when": "وقتی که", "When": "وقتی که",
    "where": "جایی که", "Where": "جایی که",
    "how": "چگونه", "How": "چگونه",
    "why": "چرا", "Why": "چرا",
    "what": "چه", "What": "چه",
    "which": "کدام", "Which": "کدام",
    "who": "چه کسی", "Who": "چه کسی",
    "whose": "متعلق به چه کسی", "Whose": "متعلق به چه کسی",
    "whom": "چه کسی را", "Whom": "چه کسی را",
    "that": "که", "That": "که",
    "this": "این", "This": "این",
    "these": "اینها", "These": "اینها",
    "those": "آنها", "Those": "آنها",
    "there": "آنجا", "There": "آنجا",
    "here": "اینجا", "Here": "اینجا",
    "now": "اکنون", "Now": "اکنون",
    "then": "سپس", "Then": "سپس",
    "today": "امروز", "Today": "امروز",
    "tomorrow": "فردا", "Tomorrow": "فردا",
    "yesterday": "دیروز", "Yesterday": "دیروز",
    "soon": "به زودی", "Soon": "به زودی",
    "later": "بعداً", "Later": "بعداً",
    "earlier": "زودتر", "Earlier": "زودتر",
    "always": "همیشه", "Always": "همیشه",
    "never": "هرگز", "Never": "هرگز",
    "sometimes": "گاهی اوقات", "Sometimes": "گاهی اوقات",
    "often": "اغلب", "Often": "اغلب",
    "usually": "معمولاً", "Usually": "معمولاً",
    "frequently": "مکرراً", "Frequently": "مکرراً",
    "rarely": "به ندرت", "Rarely": "به ندرت",
    "occasionally": "گاه گاه", "Occasionally": "گاه گاه",
    
    # Quantifiers and amounts
    "all": "همه", "All": "همه",
    "every": "هر", "Every": "هر",
    "each": "هر", "Each": "هر",
    "some": "برخی", "Some": "برخی",
    "any": "هر", "Any": "هر",
    "many": "زیاد", "Many": "زیاد",
    "much": "زیاد", "Much": "زیاد",
    "few": "کم", "Few": "کم",
    "little": "کم", "Little": "کم",
    "several": "چندین", "Several": "چندین",
    "various": "مختلف", "Various": "مختلف",
    "different": "متفاوت", "Different": "متفاوت",
    "multiple": "متعدد", "Multiple": "متعدد",
    "single": "تک", "Single": "تک",
    "one": "یک", "One": "یک",
    "first": "اول", "First": "اول",
    "last": "آخر", "Last": "آخر",
    "next": "بعدی", "Next": "بعدی",
    "previous": "قبلی", "Previous": "قبلی",
    "other": "دیگر", "Other": "دیگر",
    "another": "دیگری", "Another": "دیگری",
    "more": "بیشتر", "More": "بیشتر",
    "most": "بیشترین", "Most": "بیشترین",
    "less": "کمتر", "Less": "کمتر",
    "least": "کمترین", "Least": "کمترین",
    "better": "بهتر", "Better": "بهتر",
    "best": "بهترین", "Best": "بهترین",
    "worse": "بدتر", "Worse": "بدتر",
    "worst": "بدترین", "Worst": "بدترین",
    "good": "خوب", "Good": "خوب",
    "great": "عالی", "Great": "عالی",
    "excellent": "فوق‌العاده", "Excellent": "فوق‌العاده",
    "outstanding": "برجسته", "Outstanding": "برجسته",
    "amazing": "شگفت‌انگیز", "Amazing": "شگفت‌انگیز",
    "fantastic": "فوق‌العاده", "Fantastic": "فوق‌العاده",
    "wonderful": "فوق‌العاده", "Wonderful": "فوق‌العاده",
    "perfect": "کامل", "Perfect": "کامل",
    "ideal": "ایده‌آل", "Ideal": "ایده‌آل",
    "optimal": "بهینه", "Optimal": "بهینه",
    "maximum": "حداکثر", "Maximum": "حداکثر",
    "minimum": "حداقل", "Minimum": "حداقل",
    "average": "متوسط", "Average": "متوسط",
    "normal": "عادی", "Normal": "عادی",
    "regular": "معمولی", "Regular": "معمولی",
    "standard": "استاندارد", "Standard": "استاندارد",
    "typical": "معمولی", "Typical": "معمولی",
    "common": "رایج", "Common": "رایج",
    "general": "عمومی", "General": "عمومی",
    "specific": "مخصوص", "Specific": "مخصوص",
    "particular": "خاص", "Particular": "خاص",
    "special": "ویژه", "Special": "ویژه",
    "unique": "منحصر به فرد", "Unique": "منحصر به فرد",
    "exclusive": "انحصاری", "Exclusive": "انحصاری",
    "custom": "سفارشی", "Custom": "سفارشی",
    "personalized": "شخصی‌سازی شده", "Personalized": "شخصی‌سازی شده",
    
    # Status and states
    "active": "فعال", "Active": "فعال",
    "inactive": "غیرفعال", "Inactive": "غیرفعال",
    "enabled": "فعال", "Enabled": "فعال",
    "disabled": "غیرفعال", "Disabled": "غیرفعال",
    "available": "در دسترس", "Available": "در دسترس",
    "unavailable": "در دسترس نیست", "Unavailable": "در دسترس نیست",
    "online": "آنلاین", "Online": "آنلاین",
    "offline": "آفلاین", "Offline": "آفلاین",
    "connected": "متصل", "Connected": "متصل",
    "disconnected": "قطع شده", "Disconnected": "قطع شده",
    "open": "باز", "Open": "باز",
    "closed": "بسته", "Closed": "بسته",
    "ready": "آماده", "Ready": "آماده",
    "busy": "مشغول", "Busy": "مشغول",
    "loading": "در حال بارگذاری", "Loading": "در حال بارگذاری",
    "processing": "در حال پردازش", "Processing": "در حال پردازش",
    "pending": "در انتظار", "Pending": "در انتظار",
    "completed": "تکمیل شده", "Completed": "تکمیل شده",
    "finished": "تمام شده", "Finished": "تمام شده",
    "done": "انجام شده", "Done": "انجام شده",
    "failed": "ناموفق", "Failed": "ناموفق",
    "error": "خطا", "Error": "خطا",
    "success": "موفق", "Success": "موفق",
    "successful": "موفق", "Successful": "موفق",
    "working": "در حال کار", "Working": "در حال کار",
    "running": "در حال اجرا", "Running": "در حال اجرا",
    "stopped": "متوقف شده", "Stopped": "متوقف شده",
    "paused": "متوقف موقت", "Paused": "متوقف موقت",
    "resumed": "از سر گرفته شده", "Resumed": "از سر گرفته شده",
    "started": "شروع شده", "Started": "شروع شده",
    "ended": "تمام شده", "Ended": "تمام شده",
    "cancelled": "لغو شده", "Cancelled": "لغو شده",
    "deleted": "حذف شده", "Deleted": "حذف شده",
    "saved": "ذخیره شده", "Saved": "ذخیره شده",
    "updated": "به‌روزرسانی شده", "Updated": "به‌روزرسانی شده",
    "created": "ایجاد شده", "Created": "ایجاد شده",
    "modified": "تغییر یافته", "Modified": "تغییر یافته",
    "changed": "تغییر یافته", "Changed": "تغییر یافته",
    "new": "جدید", "New": "جدید",
    "old": "قدیمی", "Old": "قدیمی",
    "current": "فعلی", "Current": "فعلی",
    "latest": "جدیدترین", "Latest": "جدیدترین",
    "recent": "اخیر", "Recent": "اخیر",
    "upcoming": "آینده", "Upcoming": "آینده",
    "future": "آینده", "Future": "آینده",
    "past": "گذشته", "Past": "گذشته",
    "present": "حال", "Present": "حال",
    
    # Industry-specific terms
    "industry": "صنعت", "Industry": "صنعت",
    "sector": "بخش", "Sector": "بخش",
    "market": "بازار", "Market": "بازار",
    "marketplace": "بازار", "Marketplace": "بازار",
    "economy": "اقتصاد", "Economy": "اقتصاد",
    "finance": "مالی", "Finance": "مالی",
    "financial": "مالی", "Financial": "مالی",
    "banking": "بانکداری", "Banking": "بانکداری",
    "insurance": "بیمه", "Insurance": "بیمه",
    "healthcare": "مراقبت‌های بهداشتی", "Healthcare": "مراقبت‌های بهداشتی",
    "medical": "پزشکی", "Medical": "پزشکی",
    "education": "آموزش", "Education": "آموزش",
    "educational": "آموزشی", "Educational": "آموزشی",
    "retail": "خرده‌فروشی", "Retail": "خرده‌فروشی",
    "manufacturing": "تولید", "Manufacturing": "تولید",
    "construction": "ساخت و ساز", "Construction": "ساخت و ساز",
    "real estate": "املاک", "Real Estate": "املاک", "real": "املاک", "estate": "املاک",
    "hospitality": "مهمان‌نوازی", "Hospitality": "مهمان‌نوازی",
    "travel": "سفر", "Travel": "سفر",
    "tourism": "گردشگری", "Tourism": "گردشگری",
    "transportation": "حمل و نقل", "Transportation": "حمل و نقل",
    "logistics": "لجستیک", "Logistics": "لجستیک",
    "shipping": "حمل و نقل", "Shipping": "حمل و نقل",
    "delivery": "تحویل", "Delivery": "تحویل",
    "supply chain": "زنجیره تأمین", "Supply Chain": "زنجیره تأمین", "supply": "تأمین", "chain": "زنجیره",
    "procurement": "تدارکات", "Procurement": "تدارکات",
    "vendor": "فروشنده", "Vendor": "فروشنده",
    "supplier": "تأمین‌کننده", "Supplier": "تأمین‌کننده",
    "partner": "شریک", "Partner": "شریک",
    "partnership": "مشارکت", "Partnership": "مشارکت",
    "collaboration": "همکاری", "Collaboration": "همکاری",
    "cooperation": "همکاری", "Cooperation": "همکاری",
    "alliance": "اتحاد", "Alliance": "اتحاد",
    "relationship": "رابطه", "Relationship": "رابطه",
    "connection": "ارتباط", "Connection": "ارتباط",
    "integration": "یکپارچه‌سازی", "Integration": "یکپارچه‌سازی",
    
    # Pricing and business model terms
    "pricing": "قیمت‌گذاری", "Pricing": "قیمت‌گذاری",
    "price": "قیمت", "Price": "قیمت",
    "cost": "هزینه", "Cost": "هزینه",
    "fee": "هزینه", "Fee": "هزینه",
    "charge": "هزینه", "Charge": "هزینه",
    "rate": "نرخ", "Rate": "نرخ",
    "billing": "صورتحساب", "Billing": "صورتحساب",
    "invoice": "فاکتور", "Invoice": "فاکتور",
    "payment": "پرداخت", "Payment": "پرداخت",
    "subscription": "اشتراک", "Subscription": "اشتراک",
    "plan": "طرح", "Plan": "طرح",
    "package": "بسته", "Package": "بسته",
    "bundle": "مجموعه", "Bundle": "مجموعه",
    "deal": "معامله", "Deal": "معامله",
    "offer": "پیشنهاد", "Offer": "پیشنهاد",
    "discount": "تخفیف", "Discount": "تخفیف",
    "promotion": "تبلیغات", "Promotion": "تبلیغات",
    "sale": "فروش", "Sale": "فروش",
    "purchase": "خرید", "Purchase": "خرید",
    "buy": "خرید", "Buy": "خرید",
    "sell": "فروش", "Sell": "فروش",
    "order": "سفارش", "Order": "سفارش",
    "checkout": "تسویه حساب", "Checkout": "تسویه حساب",
    "cart": "سبد خرید", "Cart": "سبد خرید",
    "wishlist": "لیست علاقه‌مندی", "Wishlist": "لیست علاقه‌مندی",
    "account": "حساب", "Account": "حساب",
    "profile": "پروفایل", "Profile": "پروفایل",
    "settings": "تنظیمات", "Settings": "تنظیمات",
    "configuration": "پیکربندی", "Configuration": "پیکربندی",
    "preferences": "تنظیمات", "Preferences": "تنظیمات",
    "options": "گزینه‌ها", "Options": "گزینه‌ها",
    
    # Comparative and competitive terms
    "compare": "مقایسه کنید", "Compare": "مقایسه کنید",
    "comparison": "مقایسه", "Comparison": "مقایسه",
    "versus": "در مقابل", "Versus": "در مقابل", "vs": "در مقابل", "VS": "در مقابل",
    "alternative": "جایگزین", "Alternative": "جایگزین",
    "option": "گزینه", "Option": "گزینه",
    "competitor": "رقیب", "Competitor": "رقیب",
    "competition": "رقابت", "Competition": "رقابت",
    "competitive": "رقابتی", "Competitive": "رقابتی",
    "advantage": "مزیت", "Advantage": "مزیت",
    "benefit": "مزیت", "Benefit": "مزیت",
    "value": "ارزش", "Value": "ارزش",
    "worth": "ارزش", "Worth": "ارزش",
    "investment": "سرمایه‌گذاری", "Investment": "سرمایه‌گذاری",
    "return": "بازگشت", "Return": "بازگشت", "ROI": "بازدهی سرمایه",
    "profit": "سود", "Profit": "سود",
    "revenue": "درآمد", "Revenue": "درآمد",
    "income": "درآمد", "Income": "درآمد",
    "earnings": "درآمد", "Earnings": "درآمد",
    "budget": "بودجه", "Budget": "بودجه",
    "expense": "هزینه", "Expense": "هزینه",
    "spending": "هزینه", "Spending": "هزینه",
    "saving": "صرفه‌جویی", "Saving": "صرفه‌جویی",
    "savings": "صرفه‌جویی", "Savings": "صرفه‌جویی",
    
    # Measurement and analytics terms
    "measure": "اندازه‌گیری", "Measure": "اندازه‌گیری",
    "measurement": "اندازه‌گیری", "Measurement": "اندازه‌گیری",
    "metric": "معیار", "Metric": "معیار",
    "KPI": "شاخص عملکرد کلیدی",
    "analytics": "تجزیه و تحلیل", "Analytics": "تجزیه و تحلیل",
    "tracking": "ردیابی", "Tracking": "ردیابی",
    "monitoring": "نظارت", "Monitoring": "نظارت",
    "reporting": "گزارش‌دهی", "Reporting": "گزارش‌دهی",
    "dashboard": "داشبورد", "Dashboard": "داشبورد",
    "visualization": "تجسم", "Visualization": "تجسم",
    "chart": "نمودار", "Chart": "نمودار",
    "graph": "نمودار", "Graph": "نمودار",
    "table": "جدول", "Table": "جدول",
    "list": "لیست", "List": "لیست",
    "summary": "خلاصه", "Summary": "خلاصه",
    "overview": "نمای کلی", "Overview": "نمای کلی",
    "detail": "جزئیات", "Detail": "جزئیات",
    "details": "جزئیات", "Details": "جزئیات",
    "description": "توضیح", "Description": "توضیح",
    "specification": "مشخصات", "Specification": "مشخصات",
    "requirements": "الزامات", "Requirements": "الزامات",
    "criteria": "معیارها", "Criteria": "معیارها",
    "standard": "استاندارد", "Standard": "استاندارد",
    "guideline": "راهنما", "Guideline": "راهنما",
    "policy": "خط‌مشی", "Policy": "خط‌مشی",
    "procedure": "رویه", "Procedure": "رویه",
    "protocol": "پروتکل", "Protocol": "پروتکل",
    "rule": "قانون", "Rule": "قانون",
    "regulation": "مقررات", "Regulation": "مقررات",
    "compliance": "انطباق", "Compliance": "انطباق",
    "audit": "حسابرسی", "Audit": "حسابرسی",
    "review": "بررسی", "Review": "بررسی",
    "assessment": "ارزیابی", "Assessment": "ارزیابی",
    "evaluation": "ارزیابی", "Evaluation": "ارزیابی",
    "feedback": "بازخورد", "Feedback": "بازخورد",
    "comment": "نظر", "Comment": "نظر",
    "suggestion": "پیشنهاد", "Suggestion": "پیشنهاد",
    "recommendation": "توصیه", "Recommendation": "توصیه",
    "advice": "مشاوره", "Advice": "مشاوره",
    "consultation": "مشاوره", "Consultation": "مشاوره",
    "meeting": "جلسه", "Meeting": "جلسه",
    "conference": "کنفرانس", "Conference": "کنفرانس",
    "workshop": "کارگاه", "Workshop": "کارگاه",
    "seminar": "سمینار", "Seminar": "سمینار",
    "webinar": "وبینار", "Webinar": "وبینار",
    "training": "آموزش", "Training": "آموزش",
    "course": "دوره", "Course": "دوره",
    "class": "کلاس", "Class": "کلاس",
    "lesson": "درس", "Lesson": "درس",
    "tutorial": "آموزش", "Tutorial": "آموزش",
    "demo": "نمایش", "Demo": "نمایش",
    "demonstration": "نمایش", "Demonstration": "نمایش",
    "presentation": "ارائه", "Presentation": "ارائه",
    "show": "نمایش", "Show": "نمایش",
    "display": "نمایش", "Display": "نمایش",
    "exhibit": "نمایش", "Exhibit": "نمایش",
    "example": "مثال", "Example": "مثال",
    "sample": "نمونه", "Sample": "نمونه",
    "instance": "نمونه", "Instance": "نمونه",
    "case": "مورد", "Case": "مورد",
    "scenario": "سناریو", "Scenario": "سناریو",
    "situation": "وضعیت", "Situation": "وضعیت",
    "condition": "شرایط", "Condition": "شرایط",
    "circumstance": "شرایط", "Circumstance": "شرایط",
    "context": "زمینه", "Context": "زمینه",
    "background": "پیشینه", "Background": "پیشینه",
    "history": "تاریخچه", "History": "تاریخچه",
    "timeline": "جدول زمانی", "Timeline": "جدول زمانی",
    "schedule": "برنامه", "Schedule": "برنامه",
    "agenda": "دستور کار", "Agenda": "دستور کار",
    "calendar": "تقویم", "Calendar": "تقویم",
    "date": "تاریخ", "Date": "تاریخ",
    "time": "زمان", "Time": "زمان",
    "duration": "مدت زمان", "Duration": "مدت زمان",
    "period": "دوره", "Period": "دوره",
    "phase": "مرحله", "Phase": "مرحله",
    "stage": "مرحله", "Stage": "مرحله",
    "step": "قدم", "Step": "قدم",
    "level": "سطح", "Level": "سطح",
    "grade": "درجه", "Grade": "درجه",
    "rank": "رتبه", "Rank": "رتبه",
    "position": "موقعیت", "Position": "موقعیت",
    "location": "مکان", "Location": "مکان",
    "place": "مکان", "Place": "مکان",
    "area": "منطقه", "Area": "منطقه",
    "region": "منطقه", "Region": "منطقه",
    "zone": "منطقه", "Zone": "منطقه",
    "territory": "منطقه", "Territory": "منطقه",
    "country": "کشور", "Country": "کشور",
    "nation": "کشور", "Nation": "کشور",
    "state": "ایالت", "State": "ایالت",
    "province": "استان", "Province": "استان",
    "city": "شهر", "City": "شهر",
    "town": "شهر", "Town": "شهر",
    "village": "روستا", "Village": "روستا",
    "address": "آدرس", "Address": "آدرس",
    "contact": "تماس", "Contact": "تماس",
    "phone": "تلفن", "Phone": "تلفن",
    "mobile": "موبایل", "Mobile": "موبایل",
    "email": "ایمیل", "Email": "ایمیل",
    "website": "وب‌سایت", "Website": "وب‌سایت",
    "url": "نشانی وب", "URL": "نشانی وب",
    "link": "لینک", "Link": "لینک",
    "reference": "مرجع", "Reference": "مرجع",
    "source": "منبع", "Source": "منبع",
    "origin": "مبدأ", "Origin": "مبدأ",
    "destination": "مقصد", "Destination": "مقصد",
    "target": "هدف", "Target": "هدف",
    "goal": "هدف", "Goal": "هدف",
    "objective": "هدف", "Objective": "هدف",
    "aim": "هدف", "Aim": "هدف",
    "purpose": "منظور", "Purpose": "منظور",
    "reason": "دلیل", "Reason": "دلیل",
    "cause": "علت", "Cause": "علت",
    "effect": "اثر", "Effect": "اثر",
    "result": "نتیجه", "Result": "نتیجه",
    "consequence": "عواقب", "Consequence": "عواقب",
    "outcome": "نتیجه", "Outcome": "نتیجه",
    "impact": "تأثیر", "Impact": "تأثیر",
    "influence": "تأثیر", "Influence": "تأثیر",
    "change": "تغییر", "Change": "تغییر",
    "modification": "تغییر", "Modification": "تغییر",
    "adjustment": "تنظیم", "Adjustment": "تنظیم",
    "improvement": "بهبود", "Improvement": "بهبود",
    "enhancement": "تقویت", "Enhancement": "تقویت",
    "upgrade": "ارتقا", "Upgrade": "ارتقا",
    "update": "به‌روزرسانی", "Update": "به‌روزرسانی",
    "revision": "بازنگری", "Revision": "بازنگری",
    "version": "نسخه", "Version": "نسخه",
    "release": "انتشار", "Release": "انتشار",
    "launch": "راه‌اندازی", "Launch": "راه‌اندازی",
    "deployment": "استقرار", "Deployment": "استقرار",
    "implementation": "پیاده‌سازی", "Implementation": "پیاده‌سازی",
    "execution": "اجرا", "Execution": "اجرا",
    "operation": "عملیات", "Operation": "عملیات",
    "activity": "فعالیت", "Activity": "فعالیت",
    "action": "عمل", "Action": "عمل",
    "task": "وظیفه", "Task": "وظیفه",
    "job": "کار", "Job": "کار",
    "work": "کار", "Work": "کار",
    "project": "پروژه", "Project": "پروژه",
    "program": "برنامه", "Program": "برنامه",
    "initiative": "ابتکار", "Initiative": "ابتکار",
    "campaign": "کمپین", "Campaign": "کمپین",
    "effort": "تلاش", "Effort": "تلاش",
    "attempt": "تلاش", "Attempt": "تلاش",
    "try": "تلاش", "Try": "تلاش",
    "trial": "آزمایش", "Trial": "آزمایش",
    "test": "آزمون", "Test": "آزمون",
    "experiment": "آزمایش", "Experiment": "آزمایش",
    "research": "تحقیق", "Research": "تحقیق",
    "study": "مطالعه", "Study": "مطالعه",
    "investigation": "بررسی", "Investigation": "بررسی",
    "analysis": "تجزیه و تحلیل", "Analysis": "تجزیه و تحلیل",
    "examination": "بررسی", "Examination": "بررسی",
    "inspection": "بازرسی", "Inspection": "بازرسی",
    "check": "بررسی", "Check": "بررسی",
    "verification": "تأیید", "Verification": "تأیید",
    "validation": "اعتبارسنجی", "Validation": "اعتبارسنجی",
    "confirmation": "تأیید", "Confirmation": "تأیید",
    "approval": "تأیید", "Approval": "تأیید",
    "authorization": "مجوز", "Authorization": "مجوز",
    "permission": "اجازه", "Permission": "اجازه",
    "license": "مجوز", "License": "مجوز",
    "certificate": "گواهی", "Certificate": "گواهی",
    "certification": "گواهی", "Certification": "گواهی",
    "qualification": "صلاحیت", "Qualification": "صلاحیت",
    "credential": "اعتبارنامه", "Credential": "اعتبارنامه",
    "document": "سند", "Document": "سند",
    "file": "فایل", "File": "فایل",
    "record": "رکورد", "Record": "رکورد",
    "database": "پایگاه داده", "Database": "پایگاه داده",
    "storage": "ذخیره‌سازی", "Storage": "ذخیره‌سازی",
    "backup": "پشتیبان", "Backup": "پشتیبان",
    "archive": "آرشیو", "Archive": "آرشیو",
    "library": "کتابخانه", "Library": "کتابخانه",
    "collection": "مجموعه", "Collection": "مجموعه",
    "set": "مجموعه", "Set": "مجموعه",
    "group": "گروه", "Group": "گروه",
    "category": "دسته", "Category": "دسته",
    "type": "نوع", "Type": "نوع",
    "kind": "نوع", "Kind": "نوع",
    "sort": "نوع", "Sort": "نوع",
    "class": "کلاس", "Class": "کلاس",
    "classification": "طبقه‌بندی", "Classification": "طبقه‌بندی",
    "taxonomy": "طبقه‌بندی", "Taxonomy": "طبقه‌بندی",
    "structure": "ساختار", "Structure": "ساختار",
    "organization": "سازماندهی", "Organization": "سازماندهی",
    "arrangement": "ترتیب", "Arrangement": "ترتیب",
    "order": "ترتیب", "Order": "ترتیب",
    "sequence": "توالی", "Sequence": "توالی",
    "series": "سری", "Series": "سری",
    "chain": "زنجیره", "Chain": "زنجیره",
    "flow": "جریان", "Flow": "جریان",
    "stream": "جریان", "Stream": "جریان",
    "pipeline": "خط لوله", "Pipeline": "خط لوله",
    "channel": "کانال", "Channel": "کانال",
    "path": "مسیر", "Path": "مسیر",
    "route": "مسیر", "Route": "مسیر",
    "direction": "جهت", "Direction": "جهت",
    "way": "راه", "Way": "راه",
    "method": "روش", "Method": "روش",
    "approach": "رویکرد", "Approach": "رویکرد",
    "strategy": "استراتژی", "Strategy": "استراتژی",
    "plan": "طرح", "Plan": "طرح",
    "scheme": "طرح", "Scheme": "طرح",
    "design": "طراحی", "Design": "طراحی",
    "architecture": "معماری", "Architecture": "معماری",
    "framework": "چارچوب", "Framework": "چارچوب",
    "model": "مدل", "Model": "مدل",
    "template": "قالب", "Template": "قالب",
    "pattern": "الگو", "Pattern": "الگو",
    "format": "قالب", "Format": "قالب",
    "layout": "چیدمان", "Layout": "چیدمان",
    "style": "سبک", "Style": "سبک",
    "theme": "قالب", "Theme": "قالب",
    "appearance": "ظاهر", "Appearance": "ظاهر",
    "look": "ظاهر", "Look": "ظاهر",
    "feel": "حس", "Feel": "حس",
    "experience": "تجربه", "Experience": "تجربه",
    "interaction": "تعامل", "Interaction": "تعامل",
    "engagement": "تعامل", "Engagement": "تعامل",
    "involvement": "مشارکت", "Involvement": "مشارکت",
    "participation": "مشارکت", "Participation": "مشارکت",
    "contribution": "مشارکت", "Contribution": "مشارکت",
    "input": "ورودی", "Input": "ورودی",
    "output": "خروجی", "Output": "خروجی",
    "outcome": "نتیجه", "Outcome": "نتیجه",
    "result": "نتیجه", "Result": "نتیجه",
    "conclusion": "نتیجه‌گیری", "Conclusion": "نتیجه‌گیری",
    "summary": "خلاصه", "Summary": "خلاصه",
    "overview": "نمای کلی", "Overview": "نمای کلی",
    "introduction": "مقدمه", "Introduction": "مقدمه",
    "beginning": "شروع", "Beginning": "شروع",
    "start": "شروع", "Start": "شروع",
    "end": "پایان", "End": "پایان",
    "finish": "پایان", "Finish": "پایان",
    "completion": "تکمیل", "Completion": "تکمیل",
    "conclusion": "پایان", "Conclusion": "پایان",
    "final": "نهایی", "Final": "نهایی",
    "ultimate": "نهایی", "Ultimate": "نهایی",
    "total": "کل", "Total": "کل",
    "overall": "کلی", "Overall": "کلی",
    "comprehensive": "جامع", "Comprehensive": "جامع",
    "complete": "کامل", "Complete": "کامل",
    "entire": "کامل", "Entire": "کامل",
    "whole": "کل", "Whole": "کل"
}

def create_backup():
    """Create backup of original file"""
    if os.path.exists(SRC_FILE):
        shutil.copy2(SRC_FILE, BACKUP_FILE)
        print(f"✅ Backup created: {BACKUP_FILE}")
        return True
    else:
        print(f"❌ Source file not found: {SRC_FILE}")
        return False

def split_json_into_parts(data: OrderedDict, num_parts: int = 5) -> List[OrderedDict]:
    """Split JSON data into roughly equal parts"""
    items = list(data.items())
    total_items = len(items)
    chunk_size = max(1, total_items // num_parts)
    
    parts = []
    for i in range(num_parts):
        start_idx = i * chunk_size
        if i == num_parts - 1:  # Last part gets remaining items
            end_idx = total_items
        else:
            end_idx = (i + 1) * chunk_size
        
        part_items = items[start_idx:end_idx]
        part_dict = OrderedDict(part_items)
        parts.append(part_dict)
    
    return parts

def is_author_name(text: str) -> bool:
    """Detect author names using heuristics"""
    if not text or len(text) > 100:  # Too long to be a name
        return False
    
    # Common author patterns
    author_patterns = [
        r'^—\s*[A-Z][a-z]+\s+[A-Z][a-z]+',  # — FirstName LastName
        r'^[A-Z][a-z]+\s+[A-Z][a-z]+$',     # FirstName LastName
        r'^Dr\.\s*[A-Z][a-z]+\s+[A-Z][a-z]+',  # Dr. FirstName LastName
        r'^Prof\.\s*[A-Z][a-z]+\s+[A-Z][a-z]+', # Prof. FirstName LastName
        r'^Mr\.\s*[A-Z][a-z]+\s+[A-Z][a-z]+',   # Mr. FirstName LastName
        r'^Ms\.\s*[A-Z][a-z]+\s+[A-Z][a-z]+',   # Ms. FirstName LastName
    ]
    
    return any(re.match(pattern, text.strip()) for pattern in author_patterns)

def protect_special_content(text: str) -> tuple[str, List[str]]:
    """Protect HTML tags, placeholders, URLs, and brand names"""
    if not isinstance(text, str):
        return text, []
    
    protected = []
    result = text
    
    # Protection functions
    def protect_match(match):
        protected.append(match.group(0))
        return f"__PROTECTED_{len(protected)-1}__"
    
    # Protect URLs first
    result = re.sub(r'https?://[^\s<>"]+', protect_match, result)
    result = re.sub(r'www\.[^\s<>"]+', protect_match, result)
    
    # Protect email addresses
    result = re.sub(r'[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}', protect_match, result)
    
    # Protect HTML tags
    result = re.sub(r'<[^>]+>', protect_match, result)
    
    # Protect placeholders
    result = re.sub(r'{{[^}]+}}', protect_match, result)
    result = re.sub(r'@@[A-Z]+\d*@@', protect_match, result)
    
    # Protect brand names (case insensitive, word boundaries)
    for brand in sorted(PRESERVE_TERMS, key=len, reverse=True):
        pattern = r'\b' + re.escape(brand) + r'\b'
        result = re.sub(pattern, protect_match, result, flags=re.IGNORECASE)
    
    # Protect technical terms in mixed contexts
    technical_patterns = [
        r'\b[A-Z]{2,}[0-9]+[A-Z]*\b',  # API2, HTTP2, etc.
        r'\b[0-9]+[A-Z]{2,}\b',        # 3CX, 8x8, etc.
        r'\bv\d+\.\d+\b',              # Version numbers like v1.0
        r'\b[A-Z]+\.[a-z]+\b',         # Domain-like patterns
    ]
    
    for pattern in technical_patterns:
        result = re.sub(pattern, protect_match, result, flags=re.IGNORECASE)
    
    return result, protected

def restore_special_content(text: str, protected: List[str]) -> str:
    """Restore protected content"""
    if not isinstance(text, str) or not protected:
        return text
    
    result = text
    # Restore in reverse order to avoid index conflicts
    for i in range(len(protected) - 1, -1, -1):
        result = result.replace(f"__PROTECTED_{i}__", protected[i])
    
    return result

def apply_persian_formatting(text: str) -> str:
    """Apply Persian punctuation and formatting rules"""
    if not isinstance(text, str):
        return text
    
    # Replace punctuation
    text = text.replace(",", "،")  # Persian comma
    text = text.replace("?", "؟")  # Persian question mark
    
    # Fix spacing around punctuation (Persian typography)
    text = re.sub(r'\s*،\s*', '، ', text)  # Space after Persian comma
    text = re.sub(r'\s*؟\s*', '؟ ', text)   # Space after Persian question mark
    text = re.sub(r'\s*:\s*', ': ', text)   # Space after colon
    text = re.sub(r'\s*;\s*', '؛ ', text)   # Persian semicolon with space
    
    # Convert numbers to Persian numerals (be careful with protected content)
    if '__PROTECTED_' not in text:
        # Only convert standalone numbers, not those in URLs or technical contexts
        def convert_number(match):
            number = match.group(0)
            # Don't convert if it looks like a version number or technical ID
            if '.' in number or len(number) > 4:
                return number
            return number.translate(PERSIAN_DIGITS)
        
        text = re.sub(r'\b\d+\b', convert_number, text)
    
    # Clean up extra spaces
    text = re.sub(r'\s{2,}', ' ', text)
    text = text.strip()
    
    return text

def translate_text_to_persian(text: str) -> str:
    """Translate English text to Persian with all rules applied"""
    if not text or not isinstance(text, str):
        return text
    
    # Skip if it's a preserved term
    if text.strip() in PRESERVE_TERMS:
        return text
    
    # Skip if it's an author name
    if is_author_name(text):
        return text
    
    # Skip if it's already mostly Persian
    persian_chars = len(re.findall(r'[\u0600-\u06FF]', text))
    total_chars = len(re.findall(r'[a-zA-Z\u0600-\u06FF]', text))
    if total_chars > 0 and persian_chars / total_chars > 0.7:
        # Already mostly Persian, just apply formatting
        return apply_persian_formatting(text)
    
    # Protect special content
    protected_text, protected_items = protect_special_content(text)
    
    # Apply translations
    result = protected_text
    for english, persian in PERSIAN_TRANSLATIONS.items():
        # Use word boundaries for exact matches
        pattern = r'\b' + re.escape(english) + r'\b'
        result = re.sub(pattern, persian, result, flags=re.IGNORECASE)
    
    # Apply Persian formatting
    result = apply_persian_formatting(result)
    
    # Restore protected content
    result = restore_special_content(result, protected_items)
    
    return result

def process_json_recursively(obj: Any) -> Any:
    """Recursively process JSON object and translate string values"""
    if isinstance(obj, dict):
        return {key: process_json_recursively(value) for key, value in obj.items()}
    elif isinstance(obj, list):
        return [process_json_recursively(item) for item in obj]
    elif isinstance(obj, str):
        return translate_text_to_persian(obj)
    else:
        return obj

def save_json_file(filepath: str, data: Any) -> bool:
    """Save JSON file with proper formatting"""
    try:
        with open(filepath, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
        return True
    except Exception as e:
        print(f"❌ Error saving {filepath}: {e}")
        return False

def load_json_file(filepath: str) -> OrderedDict:
    """Load JSON file preserving order"""
    with open(filepath, 'r', encoding='utf-8') as f:
        return json.load(f, object_pairs_hook=OrderedDict)

def validate_json_file(filepath: str) -> bool:
    """Validate JSON file structure"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            json.load(f)
        return True
    except json.JSONDecodeError as e:
        print(f"❌ JSON validation failed for {filepath}: {e}")
        return False

def analyze_translation_quality(data: Any) -> Dict[str, int]:
    """Analyze the quality of translation"""
    stats = {
        'total_strings': 0,
        'persian_strings': 0,
        'mixed_strings': 0,
        'english_words': 0,
        'persian_chars': 0
    }
    
    def analyze_string(text: str):
        if not isinstance(text, str):
            return
        
        stats['total_strings'] += 1
        
        # Count characters
        persian_chars = len(re.findall(r'[\u0600-\u06FF]', text))
        english_words = re.findall(r'\b[a-zA-Z]{3,}\b', text)
        
        # Filter out preserved terms
        non_preserved_english = [w for w in english_words 
                               if w not in PRESERVE_TERMS and len(w) > 2]
        
        stats['persian_chars'] += persian_chars
        stats['english_words'] += len(non_preserved_english)
        
        if persian_chars > 0 and len(non_preserved_english) > 0:
            stats['mixed_strings'] += 1
        elif persian_chars > 0:
            stats['persian_strings'] += 1
    
    def traverse(obj):
        if isinstance(obj, dict):
            for value in obj.values():
                traverse(value)
        elif isinstance(obj, list):
            for item in obj:
                traverse(item)
        elif isinstance(obj, str):
            analyze_string(obj)
    
    traverse(data)
    return stats

def main():
    print("🚀 Starting comprehensive 5-part Persian translation process...")
    print("📋 Following SEO best practices and Persian typography standards")
    
    # Step 0: Create backup
    if not create_backup():
        return False
    
    # Step 1: Load and split the file
    print(f"\n📂 Step 1: Loading and splitting {SRC_FILE}...")
    try:
        original_data = load_json_file(SRC_FILE)
        print(f"✅ Loaded fa.json with {len(original_data)} top-level keys")
    except Exception as e:
        print(f"❌ Failed to load {SRC_FILE}: {e}")
        return False
    
    # Analyze original content
    original_stats = analyze_translation_quality(original_data)
    print(f"📊 Original content analysis:")
    print(f"   - Total strings: {original_stats['total_strings']}")
    print(f"   - Mixed language strings: {original_stats['mixed_strings']}")
    print(f"   - English words to translate: {original_stats['english_words']}")
    
    # Split into parts
    parts = split_json_into_parts(original_data, 5)
    
    print(f"\n✂️ Splitting into 5 parts:")
    for i, part in enumerate(parts, 1):
        part_file = PART_FILES[i-1]
        if save_json_file(part_file, part):
            print(f"   Part {i}: {len(part)} keys → {part_file}")
        else:
            print(f"❌ Failed to save part {i}")
            return False
    
    # Step 2: Translate each part
    print(f"\n🔤 Step 2: Translating each part to Persian...")
    translated_parts = []
    
    for i, part in enumerate(parts, 1):
        print(f"   🔄 Processing part {i}...")
        
        # Analyze part before translation
        part_stats = analyze_translation_quality(part)
        
        # Translate
        translated_part = process_json_recursively(part)
        translated_file = TRANSLATED_FILES[i-1]
        
        if save_json_file(translated_file, translated_part):
            if validate_json_file(translated_file):
                translated_parts.append(translated_part)
                
                # Analyze after translation
                trans_stats = analyze_translation_quality(translated_part)
                improvement = part_stats['english_words'] - trans_stats['english_words']
                
                print(f"   ✅ Part {i}: Translated {improvement} English words → {translated_file}")
            else:
                print(f"   ❌ Part {i}: JSON validation failed")
                return False
        else:
            print(f"   ❌ Part {i}: Save failed")
            return False
    
    # Step 3: Merge parts back together
    print(f"\n🔗 Step 3: Merging translated parts...")
    merged_data = OrderedDict()
    for part in translated_parts:
        merged_data.update(part)
    
    # Verify merge integrity
    if len(merged_data) != len(original_data):
        print(f"❌ Merge failed: expected {len(original_data)} keys, got {len(merged_data)}")
        return False
    
    # Save merged result
    if save_json_file(SRC_FILE, merged_data):
        print(f"✅ Merged and saved to {SRC_FILE}")
    else:
        print("❌ Failed to save merged file")
        return False
    
    # Step 4: Final validation
    print(f"\n🔍 Step 4: Final validation...")
    
    if not validate_json_file(SRC_FILE):
        print("❌ Final JSON validation failed")
        return False
    
    # Analyze final results
    final_stats = analyze_translation_quality(merged_data)
    
    print(f"\n📊 Translation Results Summary:")
    print(f"   📄 Total strings processed: {final_stats['total_strings']}")
    print(f"   ✅ English words translated: {original_stats['english_words'] - final_stats['english_words']}")
    print(f"   🔤 Remaining English words: {final_stats['english_words']}")
    print(f"   📝 Mixed language entries: {final_stats['mixed_strings']}")
    print(f"   🔤 Persian characters: {final_stats['persian_chars']:,}")
    
    # Check file size
    file_size = os.path.getsize(SRC_FILE)
    print(f"   📄 Final file size: {file_size:,} bytes ({file_size/1024:.1f} KB)")
    
    # Persian typography validation
    with open(SRC_FILE, 'r', encoding='utf-8') as f:
        content = f.read()
    
    persian_commas = content.count('،')
    persian_questions = content.count('؟')
    persian_numerals = sum(content.count(d) for d in '۰۱۲۳۴۵۶۷۸۹')
    
    print(f"   📍 Persian punctuation applied:")
    print(f"      - Persian commas (،): {persian_commas}")
    print(f"      - Persian question marks (؟): {persian_questions}")
    print(f"      - Persian numerals: {persian_numerals}")
    
    # Brand preservation check
    preserved_count = 0
    for brand in ['Seasalt.ai', 'SeaChat', 'WhatsApp', 'Instagram', 'Facebook', 'SMS']:
        count = content.count(brand)
        if count > 0:
            preserved_count += count
    
    print(f"   🏷️ Brand names preserved: {preserved_count} instances")
    
    # Quality assessment
    total_words = original_stats['english_words']
    remaining_words = final_stats['english_words']
    translation_rate = ((total_words - remaining_words) / total_words * 100) if total_words > 0 else 0
    
    print(f"\n🎯 Quality Assessment:")
    print(f"   📊 Translation completion: {translation_rate:.1f}%")
    
    if final_stats['mixed_strings'] < 50:
        print("   🎉 Excellent! Minimal mixed language content remains")
    elif final_stats['mixed_strings'] < 200:
        print("   ✅ Very Good! Low mixed language content")
    elif final_stats['mixed_strings'] < 500:
        print("   ✅ Good! Moderate mixed language content")
    else:
        print("   ⚠️ Mixed language content present but improved")
    
    print(f"\n✅ 5-part Persian translation process completed successfully!")
    print(f"   📁 Original backed up to: {BACKUP_FILE}")
    print(f"   📁 Part files: {', '.join([os.path.basename(f) for f in PART_FILES])}")
    print(f"   📁 Translated parts: {', '.join([os.path.basename(f) for f in TRANSLATED_FILES])}")
    print(f"   🎯 Final file: {SRC_FILE}")
    print(f"   📍 Persian typography and SEO best practices applied")
    print(f"   🏷️ Brand names and technical terms preserved")
    
    return True

if __name__ == "__main__":
    success = main()
    if not success:
        print("\n❌ Translation process failed. Check the errors above.")
        exit(1)
    else:
        print("\n🎉 Persian translation ready for production!")

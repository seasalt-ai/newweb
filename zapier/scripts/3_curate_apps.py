#!/usr/bin/env python3
"""
Curate apps for Agentic Send integration pages.

This script filters and selects the most relevant apps from the fetched
data based on popularity, category relevance, and compatibility with
Agentic Send use cases.

Usage:
    python 3_curate_apps.py

Input:
    ../data/zapier-apps.json - All apps from step 2

Output:
    ../data/curated-apps.json - Final curated list of apps for integration pages
"""

import json
import sys
import os
import re
from pathlib import Path
from typing import List, Dict, Set
from collections import defaultdict

# Configuration
INPUT_FILE = Path(__file__).parent.parent / "data" / "zapier-apps.json"
OUTPUT_FILE = Path(__file__).parent.parent / "data" / "curated-apps.json"
IMAGE_DIR = Path(__file__).parent.parent / "data" / "app_images"

# Priority apps that should definitely be included
PRIORITY_APPS = {
    # Calendar
    "google-calendar", "microsoft-outlook", "calendly", "apple-calendar",
    # Forms
    "typeform", "jotform", "google-forms", "microsoft-forms",
    # CRM
    "hubspot", "salesforce", "pipedrive", "zoho-crm",
    # Spreadsheets
    "google-sheets", "airtable", "microsoft-excel",
    # E-commerce
    "shopify", "stripe", "woocommerce", "square",
    # Project Management
    "trello", "asana", "monday", "clickup",
    # Communication
    "slack", "microsoft-teams", "discord", "zoom",
    # Email
    "gmail", "mailchimp", "sendgrid",
    # Other
    "twilio", "webhooks"
}

# Keywords that indicate good fit for Agentic Send
RELEVANT_KEYWORDS = [
    "calendar", "schedule", "appointment", "meeting", "event",
    "form", "survey", "response", "submission",
    "crm", "contact", "lead", "customer", "deal",
    "spreadsheet", "database", "table", "record",
    "ecommerce", "order", "payment", "checkout", "cart",
    "task", "project", "ticket", "issue",
    "message", "chat", "notification", "email"
]

def load_apps() -> List[Dict]:
    """
    Load apps from consolidated file.
    
    Returns:
        list: All fetched apps
    """
    if not INPUT_FILE.exists():
        print(f"Error: Apps file not found: {INPUT_FILE}")
        print("Please run 2_fetch_apps_by_category.py first.")
        sys.exit(1)
    
    with open(INPUT_FILE, "r", encoding="utf-8") as f:
        data = json.load(f)
    
    return data.get("apps", [])

def calculate_relevance_score(app: Dict) -> float:
    """
    Calculate relevance score for an app.
    
    Args:
        app: App object
        
    Returns:
        float: Relevance score (0-100)
    """
    score = 0.0
    
    title = app.get("title", "").lower()
    description = app.get("description", "").lower()
    categories = app.get("categories", [])
    category_slugs = [c.get("slug", "") for c in categories]
    
    # Priority app boost
    if any(slug in title.lower().replace(" ", "-") for slug in PRIORITY_APPS):
        score += 50
    
    # Category relevance
    relevant_cat_count = sum(1 for cat in category_slugs 
                            if any(rel in cat for rel in ["crm", "calendar", "form", "sheet", "ecommerce"]))
    score += relevant_cat_count * 10
    
    # Keyword matching
    text = f"{title} {description}"
    keyword_matches = sum(1 for keyword in RELEVANT_KEYWORDS if keyword in text)
    score += min(keyword_matches * 2, 20)
    
    # Has triggers (action_types includes "READ")
    action_types = app.get("action_types", [])
    if "READ" in action_types or "SEARCH" in action_types:
        score += 15
    
    return score

def has_manual_triggers(app: Dict) -> bool:
    """
    Check if app likely has trigger capabilities.
    
    Args:
        app: App object
        
    Returns:
        bool: True if app has triggers
    """
    # Apps with READ action type typically have triggers
    action_types = app.get("action_types", [])
    return "READ" in action_types or "SEARCH" in action_types

def generate_slug(app_name: str) -> str:
    """
    Generate URL-friendly slug from app name.
    
    Args:
        app_name: App name
        
    Returns:
        str: URL slug
    """
    return app_name.lower().replace(" ", "-").replace(".", "").replace("'", "")

def sanitize_filename(title: str) -> str:
    """
    Convert app title to a safe filename (same logic as 4_download_app_images.py).
    
    Args:
        title: App title (e.g., "Amazon S3")
        
    Returns:
        str: Safe filename (e.g., "Amazon-S3")
    """
    # Replace whitespace with hyphens
    filename = title.strip()
    filename = re.sub(r'\s+', '-', filename)
    
    # Remove or replace unsafe characters
    filename = re.sub(r'[<>:"/\\|?*]', '', filename)
    
    # Remove leading/trailing hyphens
    filename = filename.strip('-')
    
    return filename

def get_image_path(app_name: str, image_url: str = None) -> str:
    """
    Get relative path to app image file.
    
    Args:
        app_name: App name
        image_url: Original image URL (to determine extension)
        
    Returns:
        str: Relative path to image file (e.g., "./app_images/Amazon-S3.png")
    """
    safe_name = sanitize_filename(app_name)
    
    # Try to find the file with common extensions
    extensions = ['.png', '.jpg', '.jpeg', '.gif', '.svg']
    
    # If we have the URL, try to get the extension from it
    if image_url:
        from urllib.parse import urlparse
        parsed = urlparse(image_url)
        _, ext = os.path.splitext(parsed.path)
        if ext.lower() in extensions:
            extensions.insert(0, ext.lower())  # Try this extension first
    
    # Check which file exists
    for ext in extensions:
        filepath = IMAGE_DIR / f"{safe_name}{ext}"
        if filepath.exists():
            # Return relative path from curated-apps.json location
            return f"./app_images/{safe_name}{ext}"
    
    # If no file found, return expected path with .png
    return f"./app_images/{safe_name}.png"

def create_curated_app(app: Dict) -> Dict:
    """
    Create curated app object with required fields.
    
    Args:
        app: Original app object from API
        
    Returns:
        dict: Curated app object
    """
    name = app.get("title", "Unknown")
    description = app.get("description", "")
    categories = app.get("categories", [])
    primary_category = categories[0].get("slug", "other") if categories else "other"
    
    # Generate use cases based on category
    use_cases = generate_use_cases(name, primary_category)
    trigger_examples = generate_trigger_examples(name, primary_category)
    
    # Get local image path
    image_url = app.get("image")
    local_image_path = get_image_path(name, image_url)
    
    return {
        "name": name,
        "slug": generate_slug(name),
        "category": primary_category.replace("-", " ").title(),
        "description": description[:200],  # Truncate long descriptions
        "useCases": use_cases,
        "triggerExamples": trigger_examples,
        "images": app.get("images", {}),
        "image": local_image_path,  # Add local image path
        "hex_color": app.get("hex_color", "000000"),
        "api_id": app.get("id"),
        "relevance_score": calculate_relevance_score(app)
    }

def generate_use_cases(app_name: str, category: str) -> List[str]:
    """
    Generate use cases based on app category.
    
    Args:
        app_name: Name of the app
        category: App category
        
    Returns:
        list: Use case descriptions
    """
    use_case_templates = {
        # Core Communication
        "calendar": [f"Meeting reminders 15 minutes before {app_name} events", "Event confirmations to attendees", "Schedule change notifications"],
        "email": [f"Auto-reply to {app_name} emails", "Email digest notifications", "Follow-up message campaigns"],
        "team-chat": [f"Channel notifications from {app_name}", "Team update broadcasts", "Mention and reply alerts"],
        "phone": [f"SMS alerts from {app_name} events", "Call follow-up messages", "Text message campaigns"],
        "video-calls": [f"Meeting reminder notifications from {app_name}", "Recording ready alerts", "Attendance confirmations"],
        "communication": [f"Message notifications from {app_name}", "Communication updates", "Team alerts"],
        
        # Data & Forms
        "forms": ["Instant lead response after form submission", "Survey completion confirmations", "Registration confirmations"],
        "spreadsheets": ["Row update notifications", "Data entry confirmations", "Spreadsheet change alerts"],
        "databases": [f"New record notifications from {app_name}", "Database update alerts", "Query result notifications"],
        
        # Sales & CRM
        "crm": ["New lead notifications", "Deal stage change alerts", "Contact engagement campaigns"],
        "sales-crm": ["Sales opportunity alerts", "Pipeline updates", "Deal closure notifications"],
        "marketing-automation": [f"Campaign trigger notifications from {app_name}", "Lead score alerts", "Marketing qualified lead notices"],
        "marketing": [f"Campaign performance from {app_name}", "Marketing event notifications", "Lead nurturing messages"],
        "contacts": [f"Contact updates from {app_name}", "New contact notifications", "Contact engagement alerts"],
        
        # E-commerce & Financial
        "ecommerce": ["Order confirmations", "Shipping updates", "Abandoned cart reminders"],
        "commerce": ["Transaction confirmations", "Order status updates", "Customer purchase notifications"],
        "payment-processing": [f"Payment confirmation from {app_name}", "Failed payment alerts", "Refund notifications"],
        "accounting": [f"Invoice notifications from {app_name}", "Payment received confirmations", "Expense approval alerts"],
        "invoices": [f"Invoice sent from {app_name}", "Payment reminders", "Invoice approval notifications"],
        "tax": [f"Tax document alerts from {app_name}", "Filing reminders", "Tax calculation notifications"],
        
        # Project Management & Productivity
        "project-management": ["Task assignment notifications", "Deadline reminders", "Project update alerts"],
        "todo-lists": [f"Task completion notifications from {app_name}", "Priority task alerts", "Task assignment messages"],
        "time-tracking": [f"Time entry reminders from {app_name}", "Timesheet approval notifications", "Time tracking alerts"],
        "scheduling": [f"Appointment confirmation from {app_name}", "Booking reminders", "Schedule availability alerts"],
        "productivity": [f"Productivity alerts from {app_name}", "Goal reminders", "Progress notifications"],
        "team-collaboration": [f"Collaboration updates from {app_name}", "Team activity notifications", "Shared resource alerts"],
        "product-management": [f"Product updates from {app_name}", "Feature release notifications", "Roadmap change alerts"],
        
        # Development & IT
        "developer-tools": [f"Deployment notifications from {app_name}", "Code review alerts", "CI/CD pipeline updates"],
        "it-operations": [f"System alerts from {app_name}", "Infrastructure updates", "Incident notifications"],
        "server-monitoring": [f"Server status from {app_name}", "Downtime alerts", "Performance warnings"],
        "security-identity": [f"Security alerts from {app_name}", "Access requests", "Threat notifications"],
        
        # Content & Social
        "social": [f"New post notifications from {app_name}", "Engagement alerts", "Social media mentions"],
        "social-marketing": [f"Campaign updates from {app_name}", "Social engagement notifications", "Post performance alerts"],
        "cms": [f"Content publication alerts from {app_name}", "Site update notifications", "Page change alerts"],
        "website-app-building": [f"Site updates from {app_name}", "Build notifications", "Deployment alerts"],
        "documents": [f"Document sharing notifications from {app_name}", "File update alerts", "Document approval requests"],
        "files": [f"File upload notifications from {app_name}", "Storage limit alerts", "File sharing confirmations"],
        "content-files": [f"Content updates from {app_name}", "File activity notifications", "Storage alerts"],
        "images": [f"Image upload from {app_name}", "Design approval notifications", "Asset sharing alerts"],
        "video": [f"Video upload from {app_name}", "Recording notifications", "Media processing alerts"],
        "notes": [f"Note updates from {app_name}", "Shared note notifications", "Note reminder alerts"],
        
        # Support & Service
        "customer-support": [f"New ticket notifications from {app_name}", "Support ticket updates", "Customer inquiry alerts"],
        "support": [f"Support request from {app_name}", "Ticket updates", "Resolution notifications"],
        "reviews": [f"New review from {app_name}", "Review response notifications", "Rating alerts"],
        "customer-appreciation": [f"Customer milestone from {app_name}", "Thank you messages", "Loyalty notifications"],
        
        # HR & Education
        "hr": [f"New employee onboarding from {app_name}", "Time-off approval notifications", "HR document reminders"],
        "human-resources": [f"HR updates from {app_name}", "Employee notifications", "HR process alerts"],
        "education": [f"Assignment notifications from {app_name}", "Course enrollment confirmations", "Grade update alerts"],
        "it-operations-education": [f"Course updates from {app_name}", "Lesson completion notifications", "Training reminders"],
        
        # Analytics & Reporting
        "analytics": [f"Report generation alerts from {app_name}", "Metric threshold notifications", "Dashboard update reminders"],
        "business-intelligence": [f"BI report from {app_name}", "Data insights notifications", "KPI alerts"],
        "dashboards": [f"Dashboard updates from {app_name}", "Metric changes", "Visualization alerts"],
        
        # AI & Automation
        "artificial-intelligence": [f"AI insights from {app_name}", "Model predictions", "AI processing notifications"],
        "ai-agents": [f"Agent actions from {app_name}", "Agent completion notifications", "Agent task alerts"],
        "ai-assistants": [f"Assistant responses from {app_name}", "AI help notifications", "Assistant task updates"],
        "ai-chatbots": [f"Chatbot interactions from {app_name}", "Chat notifications", "Bot conversation alerts"],
        "ai-content-generation": [f"Content generated from {app_name}", "AI writing notifications", "Generation completion alerts"],
        "ai-document-extraction": [f"Document processed from {app_name}", "Extraction complete", "Data extraction alerts"],
        "ai-meeting-assistants": [f"Meeting insights from {app_name}", "AI summary notifications", "Action item alerts"],
        "ai-models": [f"Model updates from {app_name}", "Inference notifications", "Model training alerts"],
        "ai-safety": [f"Safety alerts from {app_name}", "Compliance notifications", "Detection warnings"],
        "ai-sales-tools": [f"AI sales insights from {app_name}", "Opportunity scoring", "Sales prediction alerts"],
        "ai-web-scraping": [f"Scraping complete from {app_name}", "Data extraction notifications", "Scraper alerts"],
        "ai-mcp": [f"MCP notifications from {app_name}", "Model context updates", "Protocol alerts"],
        
        # Events & Webinars
        "event-management": [f"Event registration confirmations from {app_name}", "Attendee check-in notifications", "Event reminder messages"],
        "webinars": [f"Webinar registration from {app_name}", "Session start reminders", "Recording availability alerts"],
        
        # Specialized Business
        "fundraising": [f"Donation confirmations from {app_name}", "Campaign milestone alerts", "Donor thank-you messages"],
        "fitness": [f"Workout reminders from {app_name}", "Goal achievement celebrations", "Class booking confirmations"],
        "gaming": [f"Game updates from {app_name}", "Achievement notifications", "Match alerts"],
        
        # Platform-Specific
        "google": [f"Google service updates from {app_name}", "Integration notifications", "Sync alerts"],
        "microsoft": [f"Microsoft service updates from {app_name}", "Integration notifications", "Sync alerts"],
        "facebook": [f"Facebook updates from {app_name}", "Social notifications", "Engagement alerts"],
        "aws": [f"AWS service alerts from {app_name}", "Infrastructure notifications", "Resource updates"],
        "wordpress": [f"WordPress updates from {app_name}", "Post notifications", "Plugin alerts"],
        "zoho": [f"Zoho service updates from {app_name}", "Integration notifications", "Sync alerts"],
        
        # Communication Tools
        "notifications": [f"Alert notifications from {app_name}", "System messages", "Update broadcasts"],
        "transactional-email": [f"Transaction confirmations from {app_name}", "Email receipts", "Account notifications"],
        "email-newsletters": [f"Newsletter notifications from {app_name}", "Subscription confirmations", "Campaign updates"],
        "drip-emails": [f"Drip campaign from {app_name}", "Sequence notifications", "Email automation alerts"],
        
        # Special Categories
        "app-builder": [f"App deployment from {app_name}", "Build notifications", "App update alerts"],
        "app-families": [f"App updates from {app_name}", "Integration notifications", "Service alerts"],
        "bookmarks": [f"Bookmark notifications from {app_name}", "Saved item alerts", "Collection updates"],
        "call-tracking": [f"Call analytics from {app_name}", "Call recording notifications", "Tracking alerts"],
        "devices": [f"Device notifications from {app_name}", "IoT alerts", "Device status updates"],
        "internet-of-things": [f"IoT device alerts from {app_name}", "Sensor notifications", "Device status updates"],
        "fax": [f"Fax notifications from {app_name}", "Document received alerts", "Fax status updates"],
        "filters": [f"Filter notifications from {app_name}", "Filtered item alerts", "Rule execution updates"],
        "lifestyle-entertainment": [f"Entertainment updates from {app_name}", "Activity notifications", "Lifestyle alerts"],
        "news": [f"News alerts from {app_name}", "Article notifications", "Breaking news updates"],
        "printing": [f"Print job from {app_name}", "Printer status", "Print completion alerts"],
        "signatures": [f"Signature request from {app_name}", "Document signed", "Signature reminders"],
        "transcription": [f"Transcription complete from {app_name}", "Audio processed", "Transcript notifications"],
        "url-shorten": [f"Short link created from {app_name}", "Link analytics", "URL notifications"],
        
        # Status Categories
        "ads-conversion": [f"Ad conversion from {app_name}", "Campaign performance", "Conversion notifications"],
        "new": [f"New features from {app_name}", "Latest updates", "New service notifications"],
        "beta": [f"Beta feature updates from {app_name}", "Early access notifications", "Beta feedback requests"],
        "premium": [f"Premium updates from {app_name}", "Exclusive notifications", "Premium feature alerts"],
        "upcoming": [f"Coming soon from {app_name}", "Future feature alerts", "Preview notifications"],
        
        # Zapier-Specific
        "zapier-products": [f"Zapier updates from {app_name}", "Product notifications", "Feature releases"],
        "zapier-tools": [f"Zapier tool updates", "Integration notifications", "Automation alerts"],
        "all": [f"General notifications from {app_name}", "Activity updates", "System alerts"]
    }
    
    # Find matching template (check if any key is in category)
    for key, templates in use_case_templates.items():
        if key in category.lower():
            return templates
    
    # Default use cases
    return [
        f"Automated notifications from {app_name}",
        "Event-triggered messages",
        "Customer engagement campaigns"
    ]

def generate_trigger_examples(app_name: str, category: str) -> List[str]:
    """
    Generate trigger examples based on app category.
    
    Args:
        app_name: Name of the app
        category: App category
        
    Returns:
        list: Trigger example descriptions
    """
    trigger_templates = {
        # Core Communication
        "calendar": ["Event starts", "New event created", "Event updated"],
        "email": ["New email received", "Email sent", "Email starred"],
        "team-chat": ["New message posted", "Channel created", "User mentioned"],
        "phone": ["New SMS received", "Call received", "Voicemail received"],
        "video-calls": ["Meeting started", "Recording completed", "Participant joined"],
        "communication": ["Message received", "Channel updated", "User activity"],
        
        # Data & Forms
        "forms": ["New submission", "Form completed", "Response received"],
        "spreadsheets": ["New row", "Row updated", "Spreadsheet modified"],
        "databases": ["New record created", "Record updated", "Query result changed"],
        
        # Sales & CRM
        "crm": ["New contact", "Deal updated", "Lead created"],
        "sales-crm": ["New opportunity", "Quote sent", "Deal closed"],
        "marketing-automation": ["Campaign triggered", "Lead score changed", "Email opened"],
        "marketing": ["Campaign launched", "Lead generated", "Email clicked"],
        "contacts": ["Contact created", "Contact updated", "Tag added"],
        
        # E-commerce & Financial
        "ecommerce": ["New order", "Order fulfilled", "Payment received"],
        "commerce": ["Transaction completed", "Product sold", "Cart updated"],
        "payment-processing": ["Payment completed", "Payment failed", "Refund issued"],
        "accounting": ["Invoice created", "Payment received", "Expense submitted"],
        "invoices": ["Invoice sent", "Invoice paid", "Payment overdue"],
        "tax": ["Tax filed", "Document uploaded", "Calculation completed"],
        
        # Project Management & Productivity
        "project-management": ["Task created", "Task completed", "Status changed"],
        "todo-lists": ["New task", "Task assigned", "Due date approaching"],
        "time-tracking": ["Time entry added", "Timesheet submitted", "Timer started"],
        "scheduling": ["Appointment booked", "Booking cancelled", "Reminder sent"],
        "productivity": ["Goal set", "Milestone reached", "Task completed"],
        "team-collaboration": ["Document shared", "Comment added", "Member joined"],
        "product-management": ["Feature created", "Release scheduled", "Feedback received"],
        
        # Development & IT
        "developer-tools": ["Deployment completed", "Build finished", "Test failed"],
        "it-operations": ["Incident created", "System alert", "Maintenance scheduled"],
        "server-monitoring": ["Alert triggered", "Threshold exceeded", "Service down"],
        "security-identity": ["Access request", "Threat detected", "Login attempt"],
        
        # Content & Social
        "social": ["New post published", "Comment received", "Mention detected"],
        "social-marketing": ["Post scheduled", "Engagement received", "Campaign started"],
        "cms": ["Content published", "Page updated", "Review requested"],
        "website-app-building": ["Site deployed", "Build completed", "Domain updated"],
        "documents": ["Document created", "File shared", "Comment added"],
        "files": ["File uploaded", "File updated", "File shared"],
        "content-files": ["Content added", "File modified", "Folder created"],
        "images": ["Image uploaded", "Image edited", "Album created"],
        "video": ["Video uploaded", "Video published", "Stream started"],
        "notes": ["Note created", "Note updated", "Note shared"],
        
        # Support & Service
        "customer-support": ["New ticket created", "Ticket updated", "Response received"],
        "support": ["Ticket assigned", "Issue resolved", "Feedback received"],
        "reviews": ["Review posted", "Rating received", "Response needed"],
        "customer-appreciation": ["Milestone reached", "Loyalty earned", "Reward given"],
        
        # HR & Education
        "hr": ["Employee hired", "Leave requested", "Document signed"],
        "human-resources": ["Application received", "Onboarding started", "Review scheduled"],
        "education": ["Assignment submitted", "Course enrolled", "Grade posted"],
        "it-operations-education": ["Course completed", "Certificate earned", "Lesson started"],
        
        # Analytics & Reporting
        "analytics": ["Report generated", "Metric threshold reached", "Dashboard updated"],
        "business-intelligence": ["Data refreshed", "Insight generated", "Query completed"],
        "dashboards": ["Dashboard updated", "Alert triggered", "Data synced"],
        
        # AI & Automation
        "artificial-intelligence": ["Model trained", "Prediction generated", "Analysis completed"],
        "ai-agents": ["Agent task completed", "Agent started", "Agent error"],
        "ai-assistants": ["Question answered", "Task automated", "Suggestion made"],
        "ai-chatbots": ["Message received", "Conversation started", "Intent detected"],
        "ai-content-generation": ["Content generated", "Draft created", "Text completed"],
        "ai-document-extraction": ["Document processed", "Data extracted", "Fields identified"],
        "ai-meeting-assistants": ["Meeting transcribed", "Summary generated", "Action items created"],
        "ai-models": ["Model deployed", "Inference completed", "Training finished"],
        "ai-safety": ["Threat detected", "Compliance checked", "Content filtered"],
        "ai-sales-tools": ["Lead scored", "Opportunity predicted", "Email generated"],
        "ai-web-scraping": ["Data scraped", "Page crawled", "Content extracted"],
        "ai-mcp": ["Context updated", "Model called", "Protocol executed"],
        
        # Events & Webinars
        "event-management": ["Event created", "Registration received", "Check-in completed"],
        "webinars": ["Registration completed", "Webinar started", "Recording available"],
        
        # Specialized Business
        "fundraising": ["Donation received", "Campaign milestone", "Goal reached"],
        "fitness": ["Workout logged", "Goal achieved", "Class booked"],
        "gaming": ["Achievement unlocked", "Score updated", "Match completed"],
        
        # Platform-Specific
        "google": ["File synced", "Event created", "Email received"],
        "microsoft": ["Document saved", "Meeting scheduled", "Task assigned"],
        "facebook": ["Post published", "Comment received", "Page liked"],
        "aws": ["Instance started", "Lambda executed", "Bucket updated"],
        "wordpress": ["Post published", "Comment received", "Plugin updated"],
        "zoho": ["Record created", "Form submitted", "Report generated"],
        
        # Communication Tools
        "notifications": ["Alert sent", "Message delivered", "Reminder triggered"],
        "transactional-email": ["Email sent", "Email opened", "Link clicked"],
        "email-newsletters": ["Newsletter sent", "Subscriber added", "Campaign completed"],
        "drip-emails": ["Email sent", "Sequence started", "Subscriber tagged"],
        
        # Special Categories
        "app-builder": ["App deployed", "Build completed", "Version published"],
        "app-families": ["App installed", "Update available", "Service connected"],
        "bookmarks": ["Bookmark added", "Bookmark updated", "Collection created"],
        "call-tracking": ["Call received", "Call completed", "Call recorded"],
        "devices": ["Device connected", "Device triggered", "Status changed"],
        "internet-of-things": ["Sensor triggered", "Device online", "Data received"],
        "fax": ["Fax received", "Fax sent", "Fax failed"],
        "filters": ["Filter matched", "Item filtered", "Rule applied"],
        "lifestyle-entertainment": ["Event added", "Activity logged", "Update posted"],
        "news": ["Article published", "Alert triggered", "Story updated"],
        "printing": ["Print job started", "Print completed", "Printer status"],
        "signatures": ["Document signed", "Signature requested", "Signing completed"],
        "transcription": ["Audio transcribed", "File processed", "Transcript ready"],
        "url-shorten": ["URL shortened", "Link clicked", "Stats updated"],
        
        # Status Categories
        "ads-conversion": ["Ad clicked", "Conversion tracked", "Campaign updated"],
        "new": ["Feature added", "App launched", "Update released"],
        "beta": ["Beta access granted", "Feature tested", "Feedback submitted"],
        "premium": ["Subscription upgraded", "Feature unlocked", "Plan changed"],
        "upcoming": ["Feature announced", "Preview available", "Launch scheduled"],
        
        # Zapier-Specific
        "zapier-products": ["Zap triggered", "Task completed", "Connection updated"],
        "zapier-tools": ["Automation triggered", "Integration updated", "Error occurred"],
        "all": ["New item", "Item updated", "Status changed"]
    }
    
    # Find matching template (check if any key is in category)
    for key, templates in trigger_templates.items():
        if key in category.lower():
            return templates
    
    # Default triggers
    return ["New item", "Item updated", "Status changed"]

def curate_apps(apps: List[Dict]) -> List[Dict]:
    """
    Curate all apps with relevance scores.
    
    Args:
        apps: All apps
        
    Returns:
        list: Curated apps with relevance scores
    """
    # Process all apps (no filtering)
    curated = []
    for app in apps:
        curated_app = create_curated_app(app)
        curated.append(curated_app)
    
    # Sort by relevance score (highest first), then by name
    curated.sort(key=lambda x: (-x["relevance_score"], x["name"]))
    
    print(f"Curated {len(curated)} apps")
    
    return curated

def save_curated_apps(apps: List[Dict]):
    """
    Save curated apps to JSON file.
    
    Args:
        apps: Curated app objects
    """
    data = {
        "apps": apps
    }
    
    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
    
    print(f"\nSaved {len(apps)} curated apps to {OUTPUT_FILE}")

def print_summary(apps: List[Dict]):
    """
    Print summary of curated apps.
    
    Args:
        apps: Curated app objects
    """
    print("\n" + "="*80)
    print("CURATED APPS SUMMARY")
    print("="*80)
    
    # Group by category
    by_category = defaultdict(list)
    for app in apps:
        by_category[app["category"]].append(app["name"])
    
    print(f"\nTotal curated apps: {len(apps)}")
    print(f"Categories represented: {len(by_category)}\n")
    
    for category, app_names in sorted(by_category.items()):
        print(f"{category} ({len(app_names)}):")
        for name in sorted(app_names):
            print(f"  - {name}")
        print()
    
    print("="*80)
    print("\nPage generation estimate:")
    print(f"  - Hub pages: {len(apps)} (one per app)")
    print(f"  - Spoke pages: {len(apps) * 3} (3 actions per app)")
    print(f"  - Total per language: {len(apps) * 4}")
    print(f"  - Total across 20 languages: {len(apps) * 4 * 20}")
    print("="*80)

def main():
    """Main execution function."""
    print("="*80)
    print("ZAPIER APP CURATION")
    print("="*80)
    print()
    
    # Load apps
    apps = load_apps()
    print(f"Loaded {len(apps)} apps from {INPUT_FILE}\n")
    
    # Curate apps
    print("Curating all apps...")
    curated = curate_apps(apps)
    
    # Save curated apps
    save_curated_apps(curated)
    
    # Print summary
    print_summary(curated)
    
    print("\n✓ Curation complete!")
    print(f"  Next steps:")
    print(f"    1. Review {OUTPUT_FILE}")
    print(f"    2. Manually adjust if needed")
    print(f"    3. Build Astro pages using this data")

if __name__ == "__main__":
    main()

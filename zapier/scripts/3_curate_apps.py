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
        "calendar": [
            f"Meeting reminders 15 minutes before {app_name} events",
            "Event confirmations to attendees",
            "Schedule change notifications"
        ],
        "forms": [
            "Instant lead response after form submission",
            "Survey completion confirmations",
            "Registration confirmations"
        ],
        "crm": [
            "New lead notifications",
            "Deal stage change alerts",
            "Contact engagement campaigns"
        ],
        "spreadsheets": [
            "Order confirmation messages",
            "Lead follow-up notifications",
            "Inventory alerts"
        ],
        "ecommerce": [
            "Order confirmations",
            "Shipping updates",
            "Abandoned cart reminders"
        ],
        "project-management": [
            "Task assignment notifications",
            "Deadline reminders",
            "Project update alerts"
        ]
    }
    
    # Find matching template
    for key, templates in use_case_templates.items():
        if key in category:
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
        "calendar": ["Event starts", "New event created", "Event updated"],
        "forms": ["New submission", "Form completed"],
        "crm": ["New contact", "Deal updated", "Lead created"],
        "spreadsheets": ["New row", "Row updated", "Spreadsheet modified"],
        "ecommerce": ["New order", "Order fulfilled", "Payment received"],
        "project-management": ["Task created", "Task completed", "Status changed"]
    }
    
    for key, templates in trigger_templates.items():
        if key in category:
            return templates
    
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

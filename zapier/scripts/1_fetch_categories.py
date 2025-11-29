#!/usr/bin/env python3
"""
Fetch all Zapier categories from the API.

This script retrieves all available categories from Zapier's public API
and saves them to disk for further processing.

Usage:
    python 1_fetch_categories.py

Output:
    ../data/raw/categories.json - Full raw API response with all categories
"""

import json
import os
import sys
import time
from pathlib import Path

import requests
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Configuration
BASE_URL = "https://api.zapier.com"
CATEGORIES_ENDPOINT = "/v1/categories"
OUTPUT_DIR = Path(__file__).parent.parent / "data" / "raw"
OUTPUT_FILE = OUTPUT_DIR / "categories.json"
REQUEST_DELAY = float(os.getenv("REQUEST_DELAY", "1.0"))

def fetch_categories(limit=100, offset=0):
    """
    Fetch categories from Zapier API with pagination.
    
    Args:
        limit: Number of categories per page (max 100)
        offset: Offset for pagination
        
    Returns:
        dict: API response with categories data
    """
    url = f"{BASE_URL}{CATEGORIES_ENDPOINT}"
    params = {
        "limit": limit,
        "offset": offset
    }
    
    # No authentication required for categories endpoint
    headers = {
        "Accept": "application/json",
        "User-Agent": "Seasalt.ai-Integration-Scraper/1.0"
    }
    
    try:
        print(f"Fetching categories (limit={limit}, offset={offset})...")
        response = requests.get(url, params=params, headers=headers, timeout=30)
        response.raise_for_status()
        return response.json()
    except requests.exceptions.RequestException as e:
        print(f"Error fetching categories: {e}")
        if hasattr(e, 'response') and e.response is not None:
            print(f"Response status: {e.response.status_code}")
            print(f"Response body: {e.response.text}")
        sys.exit(1)

def fetch_all_categories():
    """
    Fetch all categories using pagination.
    
    Returns:
        list: All categories from the API
    """
    all_categories = []
    offset = 0
    limit = 100
    
    while True:
        response = fetch_categories(limit=limit, offset=offset)
        
        categories = response.get("objects", [])
        all_categories.extend(categories)
        
        count = response.get("count", 0)
        next_url = response.get("next")
        
        print(f"Fetched {len(categories)} categories (total so far: {len(all_categories)}/{count})")
        
        # Check if there are more pages
        if not next_url or len(all_categories) >= count:
            break
            
        offset += limit
        
        # Respect rate limits
        time.sleep(REQUEST_DELAY)
    
    return all_categories

def save_categories(categories):
    """
    Save categories to JSON file.
    
    Args:
        categories: List of category objects
    """
    # Create output directory if it doesn't exist
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    
    # Prepare data structure
    data = {
        "metadata": {
            "total_count": len(categories),
            "fetched_at": time.strftime("%Y-%m-%d %H:%M:%S UTC", time.gmtime()),
            "source": "Zapier API v1/categories"
        },
        "categories": categories
    }
    
    # Save to file
    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
    
    print(f"\nSaved {len(categories)} categories to {OUTPUT_FILE}")

def print_category_summary(categories):
    """
    Print a summary of fetched categories.
    
    Args:
        categories: List of category objects
    """
    print("\n" + "="*80)
    print("CATEGORY SUMMARY")
    print("="*80)
    
    # Count by role
    parent_categories = [c for c in categories if c.get("role") == "parent"]
    child_categories = [c for c in categories if c.get("role") == "child"]
    
    print(f"\nTotal categories: {len(categories)}")
    print(f"  - Parent categories: {len(parent_categories)}")
    print(f"  - Child categories: {len(child_categories)}")
    
    # List some key categories
    print("\nKey categories relevant to Agentic Send:")
    relevant_slugs = [
        "crm", "calendar", "forms", "spreadsheets", "ecommerce", 
        "project-management", "team-chat", "email", "marketing-automation",
        "scheduling", "databases", "payment-processing"
    ]
    
    for cat in categories:
        if cat.get("slug") in relevant_slugs:
            print(f"  - {cat['title']:30} (slug: {cat['slug']})")
    
    print("\n" + "="*80)

def main():
    """Main execution function."""
    print("="*80)
    print("ZAPIER CATEGORY FETCHER")
    print("="*80)
    print()
    
    # Fetch all categories
    categories = fetch_all_categories()
    
    # Save to disk
    save_categories(categories)
    
    # Print summary
    print_category_summary(categories)
    
    print("\n✓ Categories fetched successfully!")
    print(f"  Next step: Run 2_fetch_apps_by_category.py")

if __name__ == "__main__":
    main()

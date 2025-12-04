#!/usr/bin/env python3
"""
Fetch apps from Zapier API for each relevant category.

This script reads the categories from step 1 and fetches the top apps
for each category relevant to Agentic Send. All raw API responses are
saved to disk for future reference and additional processing.

Supports both Zapier API v1 and v2:
- v1: Uses page-based pagination with 'objects' response format
- v2: Uses offset-based pagination with 'data' response format

Usage:
    python 2_fetch_apps_by_category.py
    
Environment Variables:
    ZAPIER_CLIENT_ID: Your Zapier Partner API client ID (required)
    ZAPIER_OAUTH_TOKEN: OAuth token (optional, for authenticated requests)
    ZAPIER_API_VERSION: API version to use - 'v1' or 'v2' (default: v2)
    REQUEST_DELAY: Delay between requests in seconds (default: 1.5)

Input:
    ../data/raw/categories.json - Categories from step 1

Output:
    ../data/raw/apps_by_category/{category_slug}.json - Raw app data per category
    ../data/zapier-apps.json - Consolidated app data
"""

import argparse
import json
import os
import sys
import time
from pathlib import Path
from typing import List, Dict, Optional

import requests
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Configuration
BASE_URL = "https://api.zapier.com"
API_VERSION = os.getenv("ZAPIER_API_VERSION", "v2")  # Default to v2, can be v1 or v2
APPS_ENDPOINT = f"/{API_VERSION}/apps"
INPUT_FILE = Path(__file__).parent.parent / "data" / "raw" / "categories.json"
OUTPUT_DIR = Path(__file__).parent.parent / "data" / "raw" / "apps_by_category"
CONSOLIDATED_OUTPUT = Path(__file__).parent.parent / "data" / "zapier-apps.json"
REQUEST_DELAY = float(os.getenv("REQUEST_DELAY", "1.5"))

# API Authentication
CLIENT_ID = os.getenv("ZAPIER_CLIENT_ID")
OAUTH_TOKEN = os.getenv("ZAPIER_OAUTH_TOKEN")

# Max apps to fetch per category
MAX_APPS_PER_CATEGORY = 20

def get_auth_headers() -> Dict[str, str]:
    """
    Get authentication headers for API requests.
    
    Returns:
        dict: Headers with authentication
    """
    headers = {
        "Accept": "application/json",
        "User-Agent": "Seasalt.ai-Integration-Scraper/1.0"
    }
    
    if OAUTH_TOKEN:
        headers["Authorization"] = f"Bearer {OAUTH_TOKEN}"
    
    return headers

def get_auth_params() -> Dict[str, str]:
    """
    Get authentication parameters for API requests.
    
    For v1 API, client_id is required in query parameters.
    For v2 API with OAuth, use Authorization header instead.
    
    Returns:
        dict: Query parameters with authentication
    """
    params = {}
    
    # For both v1 and v2, if we don't have OAuth token, use client_id
    if CLIENT_ID and not OAUTH_TOKEN:
        params["client_id"] = CLIENT_ID
    # v1 API requires client_id even with OAuth token
    elif CLIENT_ID and API_VERSION == "v1":
        params["client_id"] = CLIENT_ID
    
    return params

def fetch_apps_for_category(category_slug: str, limit: int = 20, offset: int = 0, page: int = 1) -> Dict:
    """
    Fetch apps for a specific category.
    
    Args:
        category_slug: Category slug to fetch apps for
        limit: Number of apps per page (v2) or per_page (v1)
        offset: Offset for pagination (v2 only)
        page: Page number for pagination (v1 only)
        
    Returns:
        dict: API response with apps data
    """
    url = f"{BASE_URL}{APPS_ENDPOINT}"
    
    # Different parameters for v1 and v2
    if API_VERSION == "v1":
        params = {
            "category": category_slug,
            "per_page": limit,
            "page": page
        }
    else:  # v2
        params = {
            "category": category_slug,
            "limit": limit,
            "offset": offset
        }
    
    params.update(get_auth_params())
    headers = get_auth_headers()
    
    try:
        print(f"  Fetching apps (API={API_VERSION}, category={category_slug}, limit={limit}, offset/page={offset if API_VERSION == 'v2' else page})...")
        response = requests.get(url, params=params, headers=headers, timeout=30)
        response.raise_for_status()
        return response.json()
    except requests.exceptions.RequestException as e:
        print(f"  Error fetching apps for category '{category_slug}': {e}")
        if hasattr(e, 'response') and e.response is not None:
            print(f"  Response status: {e.response.status_code}")
            print(f"  Response body: {e.response.text[:500]}")
        return None

def fetch_all_apps_for_category(category_slug: str, max_apps: int = 100) -> List[Dict]:
    """
    Fetch all apps for a category (up to max_apps).
    
    Args:
        category_slug: Category slug
        max_apps: Maximum number of apps to fetch
        
    Returns:
        list: All apps for the category
    """
    all_apps = []
    limit = 20
    
    if API_VERSION == "v1":
        # v1 uses page-based pagination
        page = 1
        while len(all_apps) < max_apps:
            response = fetch_apps_for_category(category_slug, limit=limit, page=page)
            
            if not response:
                break
            
            # v1 response format: dict with 'objects' key containing apps list
            apps = response.get("objects", [])
            if not apps:
                break
            
            all_apps.extend(apps)
            
            print(f"  Fetched {len(apps)} apps (total: {len(all_apps)})")
            
            # Check if there's a next page
            if not response.get("next_url"):
                break
            
            page += 1
            
            # Respect rate limits
            time.sleep(REQUEST_DELAY)
    else:
        # v2 uses offset-based pagination
        offset = 0
        while len(all_apps) < max_apps:
            response = fetch_apps_for_category(category_slug, limit=limit, offset=offset)
            
            if not response:
                break
            
            apps = response.get("data", [])
            if not apps:
                break
            
            all_apps.extend(apps)
            
            print(f"  Fetched {len(apps)} apps (total: {len(all_apps)})")
            
            # Check if there are more pages
            links = response.get("links", {})
            if not links.get("next"):
                break
            
            offset += limit
            
            # Respect rate limits
            time.sleep(REQUEST_DELAY)
    
    return all_apps[:max_apps]

def save_category_apps(category_slug: str, apps: List[Dict]):
    """
    Save apps for a category to JSON file.
    
    Args:
        category_slug: Category slug
        apps: List of app objects
    """
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    
    output_file = OUTPUT_DIR / f"{category_slug}.json"
    
    data = {
        "metadata": {
            "category": category_slug,
            "app_count": len(apps),
            "fetched_at": time.strftime("%Y-%m-%d %H:%M:%S UTC", time.gmtime()),
            "source": f"Zapier API v2/apps?category={category_slug}"
        },
        "apps": apps
    }
    
    with open(output_file, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
    
    print(f"  Saved to {output_file}")

def load_categories() -> List[Dict]:
    """
    Load categories from step 1.
    
    Returns:
        list: Category objects
    """
    if not INPUT_FILE.exists():
        print(f"Error: Categories file not found: {INPUT_FILE}")
        print("Please run 1_fetch_categories.py first.")
        sys.exit(1)
    
    with open(INPUT_FILE, "r", encoding="utf-8") as f:
        data = json.load(f)
    
    return data.get("categories", [])

def consolidate_apps():
    """
    Consolidate all apps from category files into a single file.
    """
    all_apps = {}
    app_categories = {}
    
    for category_file in OUTPUT_DIR.glob("*.json"):
        with open(category_file, "r", encoding="utf-8") as f:
            data = json.load(f)
        
        category = data["metadata"]["category"]
        apps = data.get("apps", [])
        
        for app in apps:
            # v1 API uses "uuid", v2 API uses "id"
            app_id = app.get("uuid") or app.get("id")
            if app_id:
                if app_id not in all_apps:
                    all_apps[app_id] = app
                    app_categories[app_id] = []
                app_categories[app_id].append(category)
    
    # Add categories list to each app
    for app_id, app in all_apps.items():
        app["fetched_categories"] = app_categories[app_id]
    
    # Convert to list and sort by title
    apps_list = sorted(all_apps.values(), key=lambda x: x.get("title", ""))
    
    # Save consolidated file
    data = {
        "metadata": {
            "total_apps": len(apps_list),
            "fetched_at": time.strftime("%Y-%m-%d %H:%M:%S UTC", time.gmtime()),
            "source": "Consolidated from all category fetches",
            "api_version": API_VERSION
        },
        "apps": apps_list
    }
    
    with open(CONSOLIDATED_OUTPUT, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
    
    print(f"\n✓ Consolidated {len(apps_list)} unique apps to {CONSOLIDATED_OUTPUT}")

def main():
    """Main execution function."""
    # Parse command line arguments
    parser = argparse.ArgumentParser(
        description="Fetch apps from Zapier API by category or consolidate existing files"
    )
    parser.add_argument(
        "--consolidate-only",
        action="store_true",
        help="Only consolidate existing JSON files without fetching new data"
    )
    args = parser.parse_args()
    
    print("="*80)
    print("ZAPIER APP FETCHER BY CATEGORY")
    print("="*80)
    print()
    
    if args.consolidate_only:
        # Only consolidate existing files
        print("Mode: Consolidate existing files only\n")
        
        if not OUTPUT_DIR.exists() or not list(OUTPUT_DIR.glob("*.json")):
            print(f"Error: No category JSON files found in {OUTPUT_DIR}")
            print("Please run the script without --consolidate-only first to fetch data.")
            sys.exit(1)
        
        print("=" * 80)
        print("CONSOLIDATING APPS")
        print("=" * 80)
        consolidate_apps()
        
        print("\n✓ Consolidation complete!")
        print(f"  Next step: Run 3_curate_apps.py")
        return
    
    # Normal mode: Fetch and consolidate
    # Check authentication
    if not CLIENT_ID and not OAUTH_TOKEN:
        print("WARNING: No authentication configured!")
        print("Set ZAPIER_CLIENT_ID or ZAPIER_OAUTH_TOKEN in .env file")
        print("Some features may not work without authentication.\n")
    
    # Load categories
    categories = load_categories()
    print(f"Loaded {len(categories)} categories from {INPUT_FILE}\n")
    
    # Use all categories from input file
    print(f"Fetching top {MAX_APPS_PER_CATEGORY} apps for all {len(categories)} categories:")
    for cat in categories[:10]:  # Show first 10
        print(f"  - {cat.get('title', 'Unknown')} ({cat.get('slug', 'unknown')})")
    if len(categories) > 10:
        print(f"  ... and {len(categories) - 10} more")
    print()
    
    # Fetch apps for each category
    for i, category in enumerate(categories, 1):
        category_slug = category.get("slug")
        category_title = category.get("title", "Unknown")
        
        print(f"\n[{i}/{len(categories)}] Fetching apps for: {category_title} ({category_slug})")
        print("-" * 80)
        
        apps = fetch_all_apps_for_category(category_slug, max_apps=MAX_APPS_PER_CATEGORY)
        
        if apps:
            save_category_apps(category_slug, apps)
            print(f"  ✓ Fetched {len(apps)} apps")
        else:
            print(f"  ✗ No apps fetched")
        
        # Respect rate limits between categories
        if i < len(categories):
            time.sleep(REQUEST_DELAY)
    
    # Consolidate all apps
    print("\n" + "="*80)
    print("CONSOLIDATING APPS")
    print("="*80)
    consolidate_apps()
    
    print("\n✓ Apps fetched successfully!")
    print(f"  Next step: Run 3_curate_apps.py")

if __name__ == "__main__":
    main()

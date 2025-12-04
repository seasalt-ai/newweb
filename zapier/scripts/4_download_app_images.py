#!/usr/bin/env python3
"""
Download App Images

This script downloads images for all Zapier apps from the consolidated
zapier-apps.json file.

Images are saved with filenames based on the app title (e.g., "Amazon S3" -> "Amazon-S3.png")

Input:
    - ../data/zapier-apps.json

Output:
    - ../data/app_images/*.png (or .jpg, etc.)

Usage:
    python 4_download_app_images.py
"""

import os
import sys
import json
import time
import re
import requests
from pathlib import Path
from urllib.parse import urlparse
from dotenv import load_dotenv
from concurrent.futures import ThreadPoolExecutor, as_completed
from threading import Lock

# Load environment variables
load_dotenv()

# Configuration
INPUT_FILE = Path(__file__).parent.parent / "data" / "zapier-apps.json"
OUTPUT_DIR = Path(__file__).parent.parent / "data" / "app_images"
MAX_WORKERS = 10  # Number of parallel download threads

# Request headers
HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
    "Accept": "image/webp,image/apng,image/*,*/*;q=0.8"
}


def sanitize_filename(title: str) -> str:
    """
    Convert app title to a safe filename.
    
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


def get_file_extension(url: str) -> str:
    """
    Extract file extension from URL.
    
    Args:
        url: Image URL
        
    Returns:
        str: File extension (e.g., ".png")
    """
    # Parse URL
    parsed = urlparse(url)
    path = parsed.path
    
    # Get extension from path
    _, ext = os.path.splitext(path)
    
    # Default to .png if no extension found
    if not ext:
        ext = ".png"
    
    return ext.lower()


def download_image(url: str, output_path: str) -> bool:
    """
    Download image from URL and save to file.
    
    Args:
        url: Image URL
        output_path: Path to save the image
        
    Returns:
        bool: True if successful, False otherwise
    """
    try:
        response = requests.get(url, headers=HEADERS, timeout=30, stream=True)
        response.raise_for_status()
        
        # Write image to file
        with open(output_path, 'wb') as f:
            for chunk in response.iter_content(chunk_size=8192):
                f.write(chunk)
        
        return True
        
    except requests.exceptions.RequestException as e:
        print(f"    ✗ Error downloading: {e}")
        return False
    except IOError as e:
        print(f"    ✗ Error saving file: {e}")
        return False


def load_apps() -> list:
    """
    Load apps from consolidated JSON file.
    
    Returns:
        list: List of app dictionaries
    """
    if not INPUT_FILE.exists():
        print(f"Error: Input file not found: {INPUT_FILE}")
        sys.exit(1)
    
    with open(INPUT_FILE, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    return data.get("apps", [])


def download_app_image(app: dict, output_dir: Path, stats: dict, stats_lock: Lock, index: int, total: int) -> tuple:
    """
    Download image for a single app.
    
    Args:
        app: App dictionary
        output_dir: Directory to save images
        stats: Statistics dictionary
        stats_lock: Lock for thread-safe stats updates
        index: Current app index
        total: Total number of apps
        
    Returns:
        tuple: (status, message)
    """
    app_title = app.get("title", "Unknown")
    image_url = app.get("image")
    
    # Skip if no image URL
    if not image_url:
        with stats_lock:
            stats["skipped"] += 1
        return ("skipped", f"[{index}/{total}] {app_title} - No image URL")
    
    # Generate filename
    safe_title = sanitize_filename(app_title)
    file_ext = get_file_extension(image_url)
    filename = f"{safe_title}{file_ext}"
    output_path = output_dir / filename
    
    # Check if image already exists with any common extension
    common_extensions = ['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp']
    for ext in common_extensions:
        check_path = output_dir / f"{safe_title}{ext}"
        if check_path.exists():
            with stats_lock:
                stats["skipped"] += 1
            return ("skipped", f"[{index}/{total}] {app_title} - Already exists ({ext})")
    
    # Skip if exact file already downloaded
    if output_path.exists():
        with stats_lock:
            stats["skipped"] += 1
        return ("skipped", f"[{index}/{total}] {app_title} - Already exists")
    
    # Download image
    success = download_image(image_url, output_path)
    
    if success:
        file_size = os.path.getsize(output_path)
        with stats_lock:
            stats["downloaded"] += 1
        return ("success", f"[{index}/{total}] {app_title} - Downloaded ({file_size:,} bytes)")
    else:
        with stats_lock:
            stats["failed"] += 1
        return ("failed", f"[{index}/{total}] {app_title} - Failed to download")


def main():
    """Main function."""
    print("=" * 80)
    print("ZAPIER APP IMAGE DOWNLOADER (PARALLEL)")
    print("=" * 80)
    print()
    
    # Create output directory
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    print(f"Output directory: {OUTPUT_DIR}")
    print(f"Max parallel workers: {MAX_WORKERS}")
    print()
    
    # Load apps
    apps = load_apps()
    print(f"Loaded {len(apps)} apps from {INPUT_FILE}\n")
    
    # Statistics
    stats = {
        "total": len(apps),
        "downloaded": 0,
        "skipped": 0,
        "failed": 0
    }
    stats_lock = Lock()
    
    print("Starting parallel downloads...\n")
    start_time = time.time()
    
    # Download images in parallel
    with ThreadPoolExecutor(max_workers=MAX_WORKERS) as executor:
        # Submit all download tasks
        futures = {}
        for i, app in enumerate(apps, 1):
            future = executor.submit(download_app_image, app, OUTPUT_DIR, stats, stats_lock, i, len(apps))
            futures[future] = i
        
        # Process completed tasks
        for future in as_completed(futures):
            status, message = future.result()
            
            # Print status based on result
            if status == "success":
                print(f"✓ {message}")
            elif status == "skipped":
                print(f"⊘ {message}")
            elif status == "failed":
                print(f"✗ {message}")
    
    elapsed_time = time.time() - start_time
    
    # Print summary
    print("\n" + "=" * 80)
    print("DOWNLOAD SUMMARY")
    print("=" * 80)
    print(f"Total apps:       {stats['total']}")
    print(f"Downloaded:       {stats['downloaded']}")
    print(f"Skipped:          {stats['skipped']}")
    print(f"Failed:           {stats['failed']}")
    print(f"Time elapsed:     {elapsed_time:.1f} seconds")
    if stats['downloaded'] > 0:
        print(f"Average speed:    {stats['downloaded'] / elapsed_time:.1f} images/second")
    print()
    print(f"Images saved to: {OUTPUT_DIR}")
    print()


if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print("\n\nInterrupted by user.")
        sys.exit(0)
    except Exception as e:
        print(f"\nError: {e}")
        import traceback
        traceback.print_exc()
        sys.exit(1)

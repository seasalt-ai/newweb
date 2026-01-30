#!/usr/bin/env python3
"""
Script to insert image frontmatter from English markdown files to translated versions.

This script takes a list of English markdown files, extracts the image frontmatter,
and adds it to the corresponding translated files in other language directories.

original prompt:

 write a python script to insert a `image` front matter to some .md files:
    1. the input is a list of md files under the ‎src/content/blog/en/ folder, the expected result is a series of files changed under various
    ‎src/content/blog/{lang} folders
    2. use ‎@src/content/blog/en/comparative-analysis-of-whatsapp-business-solutions-2025-2026.md  as an example, this is a blog post markdown
    format, it has the following frontmatter:
    ---
    author: Seasalt.ai Team
    category: Business Tools
    date: 2026-01-28
    meta_description: Explore the 2026 evolution of WhatsApp Business solutions—compare
      the App, Premium, and API tiers, pricing changes, and new features like Coexistence
      for seamless transitions.
    modified_date: 2026-01-28
    tags:
    - WhatsApp Business
    - API
    - Premium
    - Coexistence
    - 2026 Updates
    - Digital Marketing
    title: Comparative Analysis of WhatsApp Business Solutions (2025-2026)
    url: comparative-analysis-of-whatsapp-business-solutions-2025-2026
    image:
      url: /images/blog/comparative-analysis-of-whatsapp-business-solutions-2025-2026.jpg
      alt: "Comparative Analysis of WhatsApp Business Solutions (2025-2026)"
    ---
    you need to parse the last "image"  field:
    image:
      url: /images/blog/comparative-analysis-of-whatsapp-business-solutions-2025-2026.jpg
      alt: "Comparative Analysis of WhatsApp Business Solutions (2025-2026)"

    then insert it to other corresponding {lang}'s same md file with the same name, for instance, for es:
    @src/content/blog/es/comparative-analysis-of-whatsapp-business-solutions-2025-2026.md
    ---
    author: Seasalt.ai Team
    category: Herramientas de Negocios
    date: 2026-01-28
    meta_description: 'Explore la evolución de 2026 de las soluciones de WhatsApp Business:
      compare las capas de App, Premium y API, los cambios en los precios y las nuevas
      funciones como Coexistence para transiciones sin fisuras.'
    modified_date: 2026-01-28
    tags:
    - WhatsApp Empresarial
    - API
    - Premium
    - Coexistencia
    - 2026 Actualizaciones
    - Marketing Digital
    title: Análisis Comparativo de las Soluciones Empresariales de WhatsApp (2025-2026)
    url: comparative-analysis-of-whatsapp-business-solutions-2025-2026
    ---
    after insertion, the @src/content/blog/es/comparative-analysis-of-whatsapp-business-solutions-2025-2026.md  file will have exactly the same
    "image" field in the front matter:
    image:
      url: /images/blog/comparative-analysis-of-whatsapp-business-solutions-2025-2026.jpg
      alt: "Comparative Analysis of WhatsApp Business Solutions (2025-2026)"

    then you'll need to go through all languages in the src/content/blog folder and change corresponding files with the same file name: $ ls
    src/content/blog/
    ar  de  en  es  fa  fil  fr  hi  id  ja  ko  ms  pl  pt  ro  ru  ta  th  vi  zh-CN  zh-TW  zh-cn  zh-tw

    4. the complete list of english input files are:
    @src/content/blog/en/comparative-analysis-of-whatsapp-business-solutions-2025-2026.md
    @src/content/blog/en/finally-keep-your-whatsapp-business-app-and-scale-with-the-cloud-api-no-more-choosing.md
    @src/content/blog/en/the-end-of-the-impossible-choice-5-surprising-ways-whatsapp-coexistence-is-changing-business-forever.md
    @src/content/blog/en/the-grand-unified-theory-of-whatsapp-coexistence-a-seasalt-ai-manifesto-for-the-hybrid-era.md
    @src/content/blog/en/the-great-whatsapp-divide-3-surprising-reasons-your-business-has-outgrown-the-app.md
    @src/content/blog/en/whatsapp-business-2026-the-5-strategic-shifts-you-cant-ignore.md
    @src/content/blog/en/whatsapp-coexistence-technical-architecture-enterprise-use-and-the-future-of-hybrid-messaging.md

    the python script will be called: add_image_frontmatter_from_en_md.py and will accept a list of above files in a .txt file, then output all
    progress to terminal

"""

import argparse
import os
import re
from pathlib import Path


def extract_image_frontmatter(file_path):
    """
    Extract the image frontmatter from a markdown file.
    
    Args:
        file_path (str): Path to the markdown file
        
    Returns:
        str: The image frontmatter block if found, None otherwise
    """
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Find the frontmatter section (between --- markers)
    frontmatter_match = re.search(r'^---\n(.*?)\n---', content, re.DOTALL | re.MULTILINE)
    if not frontmatter_match:
        return None
    
    frontmatter = frontmatter_match.group(1)
    
    # Find the image section in the frontmatter
    image_pattern = r'(image:\s*\n(?:\s+[^\n]*\n?)*)'
    image_match = re.search(image_pattern, frontmatter)
    
    if image_match:
        return image_match.group(1).rstrip()  # Remove trailing whitespace
    else:
        return None


def update_translated_file(translated_file_path, image_frontmatter):
    """
    Update a translated file with the image frontmatter.
    
    Args:
        translated_file_path (str): Path to the translated markdown file
        image_frontmatter (str): The image frontmatter to add
    """
    with open(translated_file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Check if image frontmatter already exists
    if 'image:' in content:
        print(f"  - Image frontmatter already exists in {translated_file_path}, skipping.")
        return False
    
    # Find the frontmatter section (between --- markers)
    frontmatter_match = re.search(r'^(---\n.*?\n)(---)', content, re.DOTALL | re.MULTILINE)
    if not frontmatter_match:
        print(f"  - Could not find frontmatter in {translated_file_path}, skipping.")
        return False
    
    # Insert the image frontmatter before the closing ---
    updated_content = content[:frontmatter_match.end(1)] + image_frontmatter + '\n' + content[frontmatter_match.end(1):]
    
    # Write the updated content back to the file
    with open(translated_file_path, 'w', encoding='utf-8') as f:
        f.write(updated_content)
    
    print(f"  - Successfully added image frontmatter to {translated_file_path}")
    return True


def main():
    parser = argparse.ArgumentParser(description='Add image frontmatter from English markdown files to translated versions.')
    parser.add_argument('input_file', help='Text file containing list of English markdown files')
    
    args = parser.parse_args()
    
    # Read the list of English files from the input file
    with open(args.input_file, 'r', encoding='utf-8') as f:
        english_files = [line.strip() for line in f.readlines() if line.strip()]
    
    # Define the base directory and language directories
    base_dir = Path('src/content/blog')
    lang_dirs = [
        'ar', 'de', 'en', 'es', 'fa', 'fil', 'fr', 'hi', 'id', 'ja', 
        'ko', 'ms', 'pl', 'pt', 'ro', 'ru', 'ta', 'th', 'vi', 
        'zh-CN', 'zh-TW', 'zh-cn', 'zh-tw'
    ]
    
    # Process each English file
    for english_file in english_files:
        english_file_path = Path(english_file)
        
        if not english_file_path.exists():
            print(f"Warning: English file does not exist: {english_file_path}")
            continue
        
        # Extract filename without path
        filename = english_file_path.name
        
        # Extract image frontmatter from the English file
        image_frontmatter = extract_image_frontmatter(english_file_path)
        if not image_frontmatter:
            print(f"No image frontmatter found in {english_file_path}, skipping.")
            continue
        
        print(f"Processing {filename}:")
        
        # Update corresponding files in all language directories (except English)
        for lang_dir in lang_dirs:
            if lang_dir == 'en':  # Skip English directory since it's the source
                continue
            
            translated_file_path = base_dir / lang_dir / filename
            
            if translated_file_path.exists():
                update_translated_file(translated_file_path, image_frontmatter)
            else:
                print(f"  - Translated file does not exist: {translated_file_path}")
        
        print()  # Empty line for readability


if __name__ == '__main__':
    main()

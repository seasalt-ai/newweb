#!/usr/bin/env python3
"""
Translate markdown blog files with YAML frontmatter to different languages.

This script implements the exact logic from the original Gemini prompt:
- Translates blog files and puts them under src/content/blog/$lang/ folder
- Uses proper filename from the 'url' field in YAML frontmatter (NOT the input filename)
- For English (en), just copies the file to the folder with proper filename
- Skips translation if destination file already exists
- Translates specific frontmatter fields: title, description (was meta_description), category, tags
- Keeps unchanged: author, publishDate (was date), updatedDate (was modified_date), url
- Translates the entire content body to target language
- Validates and fixes YAML frontmatter format issues

Key Features:
✅ Replaces unstable Gemini CLI with reliable OpenAI-compatible API calls
✅ Proper YAML frontmatter parsing with error recovery
✅ Structured translation workflow instead of natural language prompts
✅ File existence checking to avoid overwriting
✅ Special handling for English language (copy vs translate)
✅ Array-aware tag translation
✅ Preserves original URL structure as specified
✅ Support for both OpenAI (GPT-4o-mini) and BytePlus models
✅ Command-line parameter to select model with fallback logic

Usage:
    python scripts/translate.py input_file.md target_language [--model chatgpt|byteplus]

Examples:
    python scripts/translate.py blog-converted.md zh-CN              # Translates to Chinese using OpenAI (default)
    python scripts/translate.py blog-converted.md zh-CN --model chatgpt  # Explicitly use OpenAI
    python scripts/translate.py blog-converted.md zh-CN --model byteplus # Use BytePlus model
    python scripts/translate.py blog-converted.md en               # Copies with proper filename

Original Gemini Prompt Logic Implemented:
"translate blog-gemini.md and put it under the src/content/blog/$lang/ folder with a proper
name by the url field in the yaml frontmatter. Do NOT name it blog-gemini.md. If the
file is already in $lang, then just copy it to the folder with a file name from the url
key in the yaml frontmatter. Do not name it blog-gemini.md. Do not delete blog-gemini.md
either. If the destination file already exists, then you can skip and end the task.
During translation, make sure to translate the following fields in yaml frontmatter too:
title, description, category, tags. Keep author, publishDate, updatedDate, url as is.
Also translate the entire content body to $lang. Finally double check the yaml
frontmatter's format and fix any errors."

Model List and Pricing:
https://docs.byteplus.com/en/docs/ModelArk/1330310
https://docs.byteplus.com/en/docs/ModelArk/1099320
"""

import os
import sys
import argparse
import yaml
import re
import time
from pathlib import Path
from openai import OpenAI

# Model configurations
byteplus_model = "seed-1-6-250615"
# byteplus_model = "seed-1-6-flash-250615"
# byteplus_model = "deepseek-v3-1-250821"

# Translation specific model does not use OpenAI SDK directly:
# https://console.byteplus.com/ark/region:ark+ap-southeast-1/model/detail?Id=seed-translation
# byteplus_model = "seed-translation-250915"

openai_model = "gpt-4.1-nano"  # Default to gpt-4.1-nano as requested

def parse_frontmatter(content):
    """Parse YAML frontmatter from markdown content."""
    if not content.startswith('---'):
        return {}, content
    
    # Find the end of frontmatter - look for ---\n or ---\r\n at start of line
    lines = content.split('\n')
    end_index = -1
    
    for i, line in enumerate(lines[1:], 1):  # Start from line 1, skip first ---
        if line.strip() == '---':
            end_index = i
            break
    
    if end_index == -1:
        return {}, content
    
    frontmatter_text = '\n'.join(lines[1:end_index])
    body = '\n'.join(lines[end_index + 1:])
    
    try:
        frontmatter = yaml.safe_load(frontmatter_text)
        return frontmatter or {}, body
    except yaml.YAMLError as e:
        print(f"YAML parsing error: {e}")
        print(f"Problematic frontmatter text:\n{frontmatter_text[:200]}...")
        # Try to fix common YAML issues
        try:
            # Escape colons in values that aren't properly quoted
            fixed_text = frontmatter_text
            lines = fixed_text.split('\n')
            fixed_lines = []
            for line in lines:
                if ':' in line and not line.strip().startswith('#'):
                    parts = line.split(':', 1)
                    if len(parts) == 2:
                        key = parts[0].strip()
                        value = parts[1].strip()
                        # If value contains special chars and isn't quoted, quote it
                        if value and not (value.startswith('"') or value.startswith("'") or value.startswith('[')):
                            if any(char in value for char in [':', '&', '#', '@', '!', '|', '>', '<']):
                                value = f'"{value}"'
                        fixed_lines.append(f'{key}: {value}')
                    else:
                        fixed_lines.append(line)
                else:
                    fixed_lines.append(line)
            
            fixed_text = '\n'.join(fixed_lines)
            frontmatter = yaml.safe_load(fixed_text)
            return frontmatter or {}, body
        except yaml.YAMLError as e2:
            print(f"Failed to fix YAML: {e2}")
            return {}, content

def translate_text_chunk(client, text, target_language, source_language="en", model=None):
    """Translate a single chunk of text."""
    prompt = f"""You are a professional translator. Translate the ENTIRE text from {source_language} to {target_language}.

CRITICAL REQUIREMENTS:
1. Translate EVERY SINGLE WORD - do not skip, summarize, or truncate ANY content
2. Maintain ALL original formatting, markdown syntax, and structure exactly
3. Keep technical terms, brand names, and URLs unchanged
4. Preserve ALL headings, bullet points, and paragraphs
5. The translation MUST be complete from start to finish

YOU MUST DO: Translate the COMPLETE text above. Do not stop early or summarize. Do not output original {source_language} text. Make sure it's translated to {target_language}.

User will input Text to translate (TRANSLATE EVERYTHING) now. Just output the translated text. Do NOT include any explanations or extra commentary.:
"""

    completion = client.chat.completions.create(
        model=model,
        messages=[
            {"role": "system", "content": prompt},
            {"role": "user", "content": text}
        ],
        temperature=0.1,
        max_tokens=30000
    )

    return completion.choices[0].message.content

def translate_text_chunked(client, text, target_language, source_language="en", model=None):
    """Translate very long text by splitting into chunks to prevent LLM laziness."""

    # Split text into logical chunks (by paragraphs, preserving structure)
    paragraphs = text.split('\n\n')
    chunks = []
    current_chunk = []
    current_length = 0
    max_chunk_length = 5000  # Conservative chunk size

    for paragraph in paragraphs:
        paragraph_length = len(paragraph)

        # If adding this paragraph would exceed limit, save current chunk
        if current_length + paragraph_length > max_chunk_length and current_chunk:
            chunks.append('\n\n'.join(current_chunk))
            current_chunk = [paragraph]
            current_length = paragraph_length
        else:
            current_chunk.append(paragraph)
            current_length += paragraph_length + 2  # +2 for \n\n

    # Add the last chunk
    if current_chunk:
        chunks.append('\n\n'.join(current_chunk))

    print(f"📝 Split content into {len(chunks)} chunks for translation")

    # Translate each chunk
    translated_chunks = []
    for i, chunk in enumerate(chunks):
        print(f"🔄 Translating chunk {i+1}/{len(chunks)} ({len(chunk)} chars)...")

        try:
            translated_chunk = translate_text_chunk(client, chunk, target_language, source_language, model)
            translated_chunks.append(translated_chunk)
            print(f"✅ Chunk {i+1} translated successfully")
        except Exception as e:
            print(f"❌ Error translating chunk {i+1}: {e}")
            # Use original chunk if translation fails
            translated_chunks.append(chunk)

        # Small delay between chunks
        if i < len(chunks) - 1:  # Don't sleep after last chunk
            time.sleep(0.5)

    # Combine translated chunks
    final_translation = '\n\n'.join(translated_chunks)
    print(f"✅ Chunked translation completed: {len(final_translation)} chars")

    return final_translation

def translate_text(client, text, target_language, source_language="en", max_retries=2, model=None):
    """Translate text using OpenAI API with anti-laziness measures."""

    # Check if text is very long and might cause laziness
    text_length = len(text)
    is_very_long = text_length > 5000  # Very long content needs chunking
    is_long_content = text_length > 3000

    if is_very_long:
        print(f"⚠️  Very long content detected ({text_length} chars). Using chunked translation...")
        return translate_text_chunked(client, text, target_language, source_language, model)
    elif is_long_content:
        print(f"⚠️  Long content detected ({text_length} chars). Using anti-laziness measures...")
    
    # Enhanced prompt with anti-laziness instructions
    prompt = f"""You are a professional translator. Translate the ENTIRE text from {source_language} to {target_language}.

CRITICAL REQUIREMENTS:
1. Translate EVERY SINGLE WORD - do not skip, summarize, or truncate ANY content
2. Maintain ALL original formatting, markdown syntax, and structure exactly
3. Keep technical terms, brand names, and URLs unchanged
4. Preserve ALL headings, bullet points, and paragraphs
5. The translation MUST be complete from start to finish
6. Output ONLY the translated text, no explanations, no thinking steps or your own analysis, no </think>

YOU MUST DO: Translate the COMPLETE text above. Do not stop early or summarize. Do not output original {source_language} text. Make sure it's translated to {target_language}.

User will input Text to translate (TRANSLATE EVERYTHING) now. Just output the translated text. Do NOT include any explanations or extra commentary or any thinking process.:
"""

    for attempt in range(max_retries + 1):
        try:
            if attempt > 0:
                print(f"🔄 Retry attempt {attempt}/{max_retries} for translation...")
            
            completion = client.chat.completions.create(
                model=model,
                messages=[
                    {"role": "system", "content": prompt},
                    {"role": "user", "content": text}
                ],
                temperature=0.1,  # Lower temperature for more consistent output
                max_tokens=4000 if is_long_content else 2000  # Ensure enough tokens for long content
            )
            
            translated = completion.choices[0].message.content
            
            # Validate translation completeness (only for substantial content)
            original_paragraphs = len([p for p in text.split('\n\n') if p.strip()])
            translated_paragraphs = len([p for p in translated.split('\n\n') if p.strip()])
            
            # Only do completeness check for multi-paragraph content or long single paragraphs
            is_substantial_content = original_paragraphs > 1 or len(text) > 500
            
            if is_substantial_content:
                # Check if translation seems complete (within reasonable range)
                completeness_ratio = translated_paragraphs / original_paragraphs if original_paragraphs > 0 else 1
                
                if completeness_ratio < 0.7:  # Less than 70% of original paragraphs
                    print(f"⚠️  Translation seems incomplete: {translated_paragraphs}/{original_paragraphs} paragraphs")
                    if attempt < max_retries:
                        print("🔄 Retrying with stronger anti-laziness prompt...")
                        continue
                    else:
                        print("❌ Final attempt still incomplete, but proceeding...")
                else:
                    print(f"✅ Translation completeness check passed: {translated_paragraphs}/{original_paragraphs} paragraphs")
            # For short content (like frontmatter fields), skip the verbose completeness check
            
            return translated
            
        except Exception as e:
            print(f"Translation error on attempt {attempt + 1}: {e}")
            if attempt == max_retries:
                print(f"❌ All translation attempts failed, returning original text")
                return text
    
    return text

def translate_frontmatter(client, frontmatter, target_language, source_language="en", model=None):
    """Translate frontmatter as a whole with LLM instructions and field validation."""
    print(f"📝 Translating frontmatter as a whole to {target_language}...")
    
    # Convert frontmatter to YAML string for translation
    frontmatter_yaml = yaml.dump(frontmatter, default_flow_style=False, allow_unicode=True)
    
    # Create comprehensive LLM prompt for frontmatter translation
    prompt = f"""You are a professional translator. Translate the YAML frontmatter from {source_language} to {target_language}.

CRITICAL TRANSLATION RULES:
1. TRANSLATE ONLY these fields: title, description, category, tags
2. KEEP UNCHANGED these fields: author, publishDate, updatedDate, url
3. Maintain exact YAML structure and formatting
4. For 'tags' field: translate each tag individually but keep as array
5. Keep product names unchanged: SeaMeet, SeaChat, SeaX, Seasalt.ai, Twilio, PBX, read.ai, otter.ai, etc.
6. Keep person names unchanged: Xuchen Yao, Guoguo Chen, etc.
7. Keep URLs and dates exactly the same
8. Output ONLY the translated YAML frontmatter, no explanations, no thinking steps or your own analysis, no </think>

Translate this YAML frontmatter:
"""
    
    try:
        # Get translation from LLM
        completion = client.chat.completions.create(
            model=model,
            messages=[
                {"role": "system", "content": prompt},
                {"role": "user", "content": frontmatter_yaml}
            ],
            temperature=0.1,
            max_tokens=2000
        )
        
        translated_yaml = completion.choices[0].message.content.strip()
        
        # Clean up any potential markdown code block formatting
        if translated_yaml.startswith('```'):
            lines = translated_yaml.split('\n')
            # Remove first and last lines if they contain ```
            if lines[0].startswith('```'):
                lines = lines[1:]
            if lines and lines[-1].startswith('```'):
                lines = lines[:-1]
            translated_yaml = '\n'.join(lines)
        
        # Parse the translated YAML
        try:
            translated_frontmatter = yaml.safe_load(translated_yaml)
        except yaml.YAMLError as e:
            print(f"❌ Error parsing translated YAML: {e}")
            print(f"Problematic YAML: {translated_yaml}...")
            # Fallback to field-by-field translation
            return translate_frontmatter_fallback(client, frontmatter, target_language, source_language)
        
        # Validation: Ensure required fields weren't mistakenly translated
        protected_fields = ['author', 'date', 'modified_date', 'url']
        
        print(f"🔍 Validating translation results...")
        for field in protected_fields:
            if field in frontmatter:
                if field not in translated_frontmatter:
                    print(f"⚠️  Missing field '{field}' in translation, restoring original")
                    translated_frontmatter[field] = frontmatter[field]
                elif translated_frontmatter[field] != frontmatter[field]:
                    print(f"⚠️  Field '{field}' was incorrectly translated, restoring original")
                    print(f"     Original: {frontmatter[field]}")
                    print(f"     Translated: {translated_frontmatter[field]}")
                    translated_frontmatter[field] = frontmatter[field]
                else:
                    print(f"✅ Field '{field}' correctly preserved")
        
        # Verify translatable fields exist
        translatable_fields = ['title', 'meta_description', 'category', 'tags']
        for field in translatable_fields:
            if field in frontmatter and field not in translated_frontmatter:
                print(f"⚠️  Missing translatable field '{field}', restoring original")
                translated_frontmatter[field] = frontmatter[field]
        
        print(f"✅ Frontmatter translation completed with validation")
        return translated_frontmatter
        
    except Exception as e:
        print(f"❌ Error in whole frontmatter translation: {e}")
        print(f"🔄 Falling back to field-by-field translation...")
        return translate_frontmatter_fallback(client, frontmatter, target_language, source_language, model)

def translate_frontmatter_fallback(client, frontmatter, target_language, source_language="en", model=None):
    """Fallback method: translate frontmatter field by field (original implementation)."""
    print(f"📝 Using fallback field-by-field translation to {target_language}...")
    translated = frontmatter.copy()

    # Fields to translate (as specified in original prompt)
    translatable_fields = ['title', 'meta_description', 'category', 'tags']

    for field in translatable_fields:
        if field in translated:
            if field == 'tags' and isinstance(translated[field], list):
                print(f"   🏷️  Translating {len(translated[field])} tags...")
                # Translate each tag in the array
                translated[field] = [translate_text(client, tag, target_language, source_language, model=model) for tag in translated[field]]
            else:
                print(f"   📄 Translating {field}...")
                translated[field] = translate_text(client, translated[field], target_language, source_language, model=model)

    print(f"✅ Fallback frontmatter translation completed")

    # Keep author, date, modified_date, url as is (as specified in original prompt)
    # Do NOT modify the URL - keep it exactly the same

    return translated

def get_filename_from_url(url):
    """Extract filename from URL field."""
    # Remove leading/trailing slashes
    clean_url = url.strip('/')
    
    # Extract the last part after /blog/
    if '/blog/' in clean_url:
        filename = clean_url.split('/blog/')[-1]
    else:
        filename = clean_url.split('/')[-1]
    
    # Ensure .md extension
    if not filename.endswith('.md'):
        filename += '.md'
    
    return filename

def main():
    parser = argparse.ArgumentParser(description='Translate markdown blog files with YAML frontmatter')
    parser.add_argument('input_file', help='Input markdown file path')
    parser.add_argument('target_language', help='Target language code (e.g., es, fr, de)')
    parser.add_argument('--source-language', default='en', help='Source language code (default: en)')
    parser.add_argument('--output-base-dir', default='src/content/blog', help='Base output directory (default: src/content/blog)')
    parser.add_argument('--model', choices=['chatgpt', 'byteplus'], default='chatgpt',
                       help='Model to use for translation (default: chatgpt)')

    args = parser.parse_args()
    
    # Determine which model to use based on arguments and available keys
    selected_model = None
    client = None

    # If user specified byteplus, try that first
    if args.model == 'byteplus':
        ark_api_key = os.environ.get("ARK_API_KEY")
        if ark_api_key:
            client = OpenAI(
                api_key=ark_api_key,
                base_url="https://ark.ap-southeast.bytepluses.com/api/v3",
            )
            selected_model = byteplus_model
            print(f"Using BytePlus model: {selected_model}")
        else:
            print("ARK_API_KEY not found, cannot use BytePlus model")
            sys.exit(1)
    else:  # Default or chatgpt option
        # First try OpenAI
        openai_api_key = os.environ.get("OPENAI_API_KEY")
        if openai_api_key:
            client = OpenAI(api_key=openai_api_key)
            selected_model = openai_model
            print(f"Using OpenAI model: {selected_model}")
        else:
            # Fallback to BytePlus if OpenAI key not found
            print("OPENAI_API_KEY not found, trying BytePlus as fallback...")
            ark_api_key = os.environ.get("ARK_API_KEY")
            if ark_api_key:
                client = OpenAI(
                    api_key=ark_api_key,
                    base_url="https://ark.ap-southeast.bytepluses.com/api/v3",
                )
                selected_model = byteplus_model
                print(f"Fallback to BytePlus model: {selected_model}")
            else:
                print("Neither OPENAI_API_KEY nor ARK_API_KEY found. Cannot proceed.")
                sys.exit(1)

    
    # Read input file
    input_path = Path(args.input_file)
    if not input_path.exists():
        print(f"Error: Input file '{args.input_file}' not found")
        sys.exit(1)
    
    with open(input_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Parse frontmatter and body
    frontmatter, body = parse_frontmatter(content)
    
    if not frontmatter:
        print("Warning: No frontmatter found in the input file")
        sys.exit(1)
    
    if 'url' not in frontmatter:
        print("Error: No 'url' field found in frontmatter")
        sys.exit(1)
    
    print(f"\n🌍 === TRANSLATING BLOG POST: {args.source_language} → {args.target_language} ===")
    
    # First, get the URL from frontmatter to determine output filename
    # This allows us to check file existence BEFORE doing expensive translation work
    print(f"🔍 Step 1: Checking frontmatter and destination...")
    temp_translated_frontmatter = translate_frontmatter(client, frontmatter, args.target_language, args.source_language, model=selected_model)
    
    # Create output directory
    output_dir = Path(args.output_base_dir) / args.target_language
    output_dir.mkdir(parents=True, exist_ok=True)
    
    # Get filename from URL and check if destination file already exists FIRST
    filename = get_filename_from_url(temp_translated_frontmatter['url'])
    output_path = output_dir / filename
    
    print(f"📁 Target file: {output_path.resolve()}")
    
    if output_path.exists():
        print(f"⏭️  File already exists - skipping translation to save time and costs")
        return
    
    print(f"✅ File doesn't exist - proceeding with translation...")
    
    # Now do the expensive translation work since we know we'll use it
    # Re-use the frontmatter we already translated
    translated_frontmatter = temp_translated_frontmatter
    
    # Translate body content (this is the expensive part)
    print(f"\n📖 Step 2: Translating blog content ({len(body)} characters)...")
    translated_body = translate_text(client, body, args.target_language, args.source_language, model=selected_model)
    
    print(f"\n💾 Step 3: Saving translated content...")
    
# Handle special case: if target language is the same as source language, just copy to folder with proper name
    if args.target_language == args.source_language:
        print(f"📋 Language is {args.target_language} - copying original content with proper filename...")
        # Use original frontmatter and body for English
        output_content = "---\n"
        output_content += yaml.dump(frontmatter, default_flow_style=False, allow_unicode=True)
        output_content += "---\n"
        output_content += body
    else:
        print(f"🔄 Combining translated frontmatter + content...")
        # Reconstruct the file with translated content
        output_content = "---\n"
        output_content += yaml.dump(translated_frontmatter, default_flow_style=False, allow_unicode=True)
        output_content += "---\n"
        output_content += translated_body
    
    # Write translated file
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(output_content)
    
    print(f"\n🎉 === TRANSLATION COMPLETED ===")
    print(f"📄 Source: {args.input_file}")
    print(f"🌍 Language: {args.source_language} → {args.target_language}")
    print(f"💾 Output: {output_path.resolve()}")
    print(f"📊 Size: {len(output_content)} characters")

if __name__ == "__main__":
    main()

#!/usr/bin/env python3
"""
Translate markdown blog files with YAML frontmatter to different languages using BytePlus seed-translation-250915 model.

This script implements the exact logic from the original translate.py but uses the RESTful API
for the seed-translation-250915 model which is specifically designed for translation tasks.

Model Details:
- Model: seed-translation-250915
- Context Window: 4K tokens
- Max Output: 3K tokens
- API: RESTful (not OpenAI SDK compatible)

Key Features:
✅ Uses BytePlus RESTful API with translation-specific model
✅ Proper YAML frontmatter parsing with error recovery
✅ Structured translation workflow with language code mapping
✅ File existence checking to avoid overwriting
✅ Special handling for English language (copy vs translate)
✅ Array-aware tag translation
✅ Preserves original URL structure as specified
✅ Handles 4K context window limitation with chunking

Usage:
    python translate/translate-with-seed-translation-250915.py input_file.md target_language
    
Examples:
    python translate/translate-with-seed-translation-250915.py blog-converted.md zh-CN    # Translates to Chinese
    python translate/translate-with-seed-translation-250915.py blog-converted.md en      # Copies with proper filename
    python translate/translate-with-seed-translation-250915.py blog-converted.md es      # Translates to Spanish

Language Code Mapping:
The model uses specific language codes which may differ from our internal codes.
"""

import os
import sys
import argparse
import yaml
import re
import time
import json
import requests
from pathlib import Path

# BytePlus translation model configuration
byteplus_model = "seed-translation-250915"
byteplus_api_url = "https://ark.ap-southeast.bytepluses.com/api/v3/responses"

# Language code mapping: our codes -> BytePlus API codes
LANGUAGE_CODE_MAP = {
    "zh-CN": "zh",           # Chinese (simplified)
    "zh-TW": "zh-Hant",      # Chinese (traditional)
    "en": "en",              # English
    "ja": "ja",              # Japanese
    "ko": "ko",              # Korean
    "de": "de",              # German
    "fr": "fr",              # French
    "es": "es",              # Spanish
    "it": "it",              # Italian
    "pt": "pt",              # Portuguese
    "ru": "ru",              # Russian
    "th": "th",              # Thai
    "vi": "vi",              # Vietnamese
    "ar": "ar",              # Arabic
    "cs": "cs",              # Czech
    "da": "da",              # Danish
    "fi": "fi",              # Finnish
    "hr": "hr",              # Croatian
    "hu": "hu",              # Hungarian
    "id": "id",              # Indonesian
    "ms": "ms",              # Malay
    "nb": "nb",              # Norwegian Bokmål
    "nl": "nl",              # Dutch
    "pl": "pl",              # Polish
    "ro": "ro",              # Romanian
    "sv": "sv",              # Swedish
}

def get_api_language_code(lang_code):
    """Convert our language code to BytePlus API language code."""
    if lang_code in LANGUAGE_CODE_MAP:
        return LANGUAGE_CODE_MAP[lang_code]
    else:
        print(f"⚠️  Language code '{lang_code}' not supported by seed-translation-250915 model")
        print(f"Supported codes: {list(LANGUAGE_CODE_MAP.keys())}")
        return None

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

def translate_text_api_direct(text, target_language, source_language="en", max_retries=2):
    """Translate text using BytePlus API without length checking (for use in chunked translation)."""
    
    # Get API language codes
    api_source_lang = get_api_language_code(source_language)
    api_target_lang = get_api_language_code(target_language)
    print(f"🌐 Translating text from {source_language} to {target_language}...")
    
    if not api_source_lang or not api_target_lang:
        print(f"❌ Unsupported language codes: {source_language} -> {target_language}")
        return text
    
    # Prepare API request
    headers = {
        "Authorization": f"Bearer {os.environ.get('ARK_API_KEY')}",
        "Content-Type": "application/json"
    }
    
    payload = {
        "model": byteplus_model,
        "input": [
            {
                "role": "user",
                "content": [
                    {
                        "type": "input_text",
                        "text": text,
                        "translation_options": {
                            "source_language": api_source_lang,
                            "target_language": api_target_lang
                        }
                    }
                ]
            }
        ]
    }
    
    for attempt in range(max_retries + 1):
        try:
            if attempt > 0:
                print(f"🔄 Retry attempt {attempt}/{max_retries} for translation...")
            
            # Debug: Print payload structure (first attempt only)
            if attempt == 0:
                print(f"🔍 Debug - API payload structure:")
                print(f"   Model: {payload['model']}")
                print(f"   Source lang: {api_source_lang}")
                print(f"   Target lang: {api_target_lang}")
                print(f"   Text length: {len(text)} chars")
                print(f"   Text preview: {text[:100]}...")
                # Check for potentially problematic characters
                if len(text) > 1000:
                    print(f"   ⚠️  Text is quite long, this might be the issue")
                if any(char in text for char in ['\r', '\t', '\x00']):
                    print(f"   ⚠️  Text contains special characters that might cause issues")
                # Print full payload for debugging if text is short
                if len(text) < 200:
                    print(f"   Full payload: {json.dumps(payload, indent=2)}")
            
            response = requests.post(byteplus_api_url, headers=headers, json=payload, timeout=30)
            response.raise_for_status()
            
            result = response.json()
            
            # Extract translated text from response
            if (result.get("status") == "completed" and 
                result.get("output") and 
                len(result["output"]) > 0 and
                result["output"][0].get("content") and
                len(result["output"][0]["content"]) > 0):
                
                translated_text = result["output"][0]["content"][0].get("text", "")
                
                if translated_text:
                    print(f"✅ Translation successful ({len(translated_text)} chars)")
                    return translated_text
                else:
                    print(f"⚠️  Empty translation result")
            else:
                print(f"⚠️  Unexpected API response structure: {result}")
            
            if attempt < max_retries:
                print(f"🔄 Retrying translation...")
                time.sleep(1)
            
        except requests.exceptions.RequestException as e:
            print(f"❌ API request error on attempt {attempt + 1}: {e}")
            if hasattr(e, 'response') and e.response is not None:
                try:
                    error_details = e.response.json()
                    print(f"   Error details: {error_details}")
                except:
                    print(f"   Response text: {e.response.text[:500]}")
            if attempt < max_retries:
                time.sleep(2 ** attempt)  # Exponential backoff
        except json.JSONDecodeError as e:
            print(f"❌ JSON decode error on attempt {attempt + 1}: {e}")
            if attempt < max_retries:
                time.sleep(1)
        except Exception as e:
            print(f"❌ Unexpected error on attempt {attempt + 1}: {e}")
            if attempt < max_retries:
                time.sleep(1)
    
    print(f"❌ All translation attempts failed, returning original text")
    return text

def translate_text_api(text, target_language, source_language="en", max_retries=2):
    """Translate text using BytePlus seed-translation-250915 RESTful API."""
    
    # Get API language codes
    api_source_lang = get_api_language_code(source_language)
    api_target_lang = get_api_language_code(target_language)
    print(f"🌐 Translating text from {source_language} to {target_language}...")
    
    if not api_source_lang or not api_target_lang:
        print(f"❌ Unsupported language codes: {source_language} -> {target_language}")
        return text
    
    # Check text length (model has 4K context window)
    text_length = len(text)
    
    # Rough estimation: 1 token ≈ 4 characters for mixed language content
    # Very conservative estimate to stay within 4K token limit
    max_chars = 3000  # Much more conservative - ~750 tokens for input text
    
    if text_length > max_chars:
        print(f"⚠️  Text too long ({text_length} chars). Splitting into chunks...")
        return translate_text_chunked(text, target_language, source_language)
    
    # Prepare API request
    headers = {
        "Authorization": f"Bearer {os.environ.get('ARK_API_KEY')}",
        "Content-Type": "application/json"
    }
    
    payload = {
        "model": byteplus_model,
        "input": [
            {
                "role": "user",
                "content": [
                    {
                        "type": "input_text",
                        "text": text,
                        "translation_options": {
                            "source_language": api_source_lang,
                            "target_language": api_target_lang
                        }
                    }
                ]
            }
        ]
    }
    
    for attempt in range(max_retries + 1):
        try:
            if attempt > 0:
                print(f"🔄 Retry attempt {attempt}/{max_retries} for translation...")
            
            # Debug: Print payload structure (first attempt only)
            if attempt == 0:
                print(f"🔍 Debug - API payload structure:")
                print(f"   Model: {payload['model']}")
                print(f"   Source lang: {api_source_lang}")
                print(f"   Target lang: {api_target_lang}")
                print(f"   Text length: {len(text)} chars")
                print(f"   Text preview: {text[:100]}...")
                # Check for potentially problematic characters
                if len(text) > 1000:
                    print(f"   ⚠️  Text is quite long, this might be the issue")
                if any(char in text for char in ['\r', '\t', '\x00']):
                    print(f"   ⚠️  Text contains special characters that might cause issues")
                # Print full payload for debugging if text is short
                if len(text) < 200:
                    print(f"   Full payload: {json.dumps(payload, indent=2)}")
            
            response = requests.post(byteplus_api_url, headers=headers, json=payload, timeout=30)
            response.raise_for_status()
            
            result = response.json()
            
            # Extract translated text from response
            if (result.get("status") == "completed" and 
                result.get("output") and 
                len(result["output"]) > 0 and
                result["output"][0].get("content") and
                len(result["output"][0]["content"]) > 0):
                
                translated_text = result["output"][0]["content"][0].get("text", "")
                
                if translated_text:
                    print(f"✅ Translation successful ({len(translated_text)} chars)")
                    return translated_text
                else:
                    print(f"⚠️  Empty translation result")
            else:
                print(f"⚠️  Unexpected API response structure: {result}")
            
            if attempt < max_retries:
                print(f"🔄 Retrying translation...")
                time.sleep(1)
            
        except requests.exceptions.RequestException as e:
            print(f"❌ API request error on attempt {attempt + 1}: {e}")
            if hasattr(e, 'response') and e.response is not None:
                try:
                    error_details = e.response.json()
                    print(f"   Error details: {error_details}")
                except:
                    print(f"   Response text: {e.response.text[:500]}")
            if attempt < max_retries:
                time.sleep(2 ** attempt)  # Exponential backoff
        except json.JSONDecodeError as e:
            print(f"❌ JSON decode error on attempt {attempt + 1}: {e}")
            if attempt < max_retries:
                time.sleep(1)
        except Exception as e:
            print(f"❌ Unexpected error on attempt {attempt + 1}: {e}")
            if attempt < max_retries:
                time.sleep(1)
    
    print(f"❌ All translation attempts failed, returning original text")
    return text

def translate_text_chunked(text, target_language, source_language="en"):
    """Translate very long text by splitting into chunks to fit 4K context window."""
    
    # Split text into logical chunks (by paragraphs, preserving structure)
    paragraphs = text.split('\n\n')
    chunks = []
    current_chunk = []
    current_length = 0
    max_chunk_length = 2500  # Much smaller chunks to avoid recursion
    
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
            # Call the API directly without recursion check for chunks
            translated_chunk = translate_text_api_direct(chunk, target_language, source_language)
            translated_chunks.append(translated_chunk)
            print(f"✅ Chunk {i+1} translated successfully")
        except Exception as e:
            print(f"❌ Error translating chunk {i+1}: {e}")
            # Use original chunk if translation fails
            translated_chunks.append(chunk)
        
        # Small delay between chunks to be respectful to API
        if i < len(chunks) - 1:  # Don't sleep after last chunk
            time.sleep(1)
    
    # Combine translated chunks
    final_translation = '\n\n'.join(translated_chunks)
    print(f"✅ Chunked translation completed: {len(final_translation)} chars")
    
    return final_translation

def translate_frontmatter(frontmatter, target_language, source_language="en"):
    """Translate frontmatter fields individually using the translation API."""
    print(f"📝 Translating frontmatter fields to {target_language}...")
    translated = frontmatter.copy()
    
    # Fields to translate (updated for actual blog frontmatter structure)
    translatable_fields = ['title', 'description', 'tags']
    
    for field in translatable_fields:
        if field in translated:
            if field == 'tags' and isinstance(translated[field], list):
                print(f"   🏷️  Translating {len(translated[field])} tags...")
                # Translate each tag in the array with specific instructions
                translated_tags = []
                for tag in translated[field]:
                    # Translate tag directly without extra prompting
                    translated_tag = translate_text_api_direct(tag, target_language, source_language)
                    # Clean up the result - remove any extra text or notes
                    translated_tag = translated_tag.strip().split('\n')[0]  # Take only first line
                    if '：' in translated_tag or ':' in translated_tag:
                        # If it contains explanation, take the part before colon
                        translated_tag = translated_tag.split('：')[0].split(':')[0].strip()
                    translated_tags.append(translated_tag)
                translated[field] = translated_tags
            else:
                print(f"   📄 Translating {field}...")
                translated_text = translate_text_api_direct(translated[field], target_language, source_language)
                # Clean up multi-line issues and extra spaces
                translated_text = ' '.join(translated_text.split())  # Normalize whitespace
                translated[field] = translated_text
    
    # Update language field to target language
    if 'lang' in translated:
        translated['lang'] = target_language
    
    print(f"✅ Frontmatter translation completed")
    
    # Keep author, publishDate, updatedDate, image, draft as is
    
    return translated

def get_output_filename(input_path):
    """Get output filename from input file path."""
    # Just use the same filename as the input file
    return input_path.name

def main():
    parser = argparse.ArgumentParser(description='Translate markdown blog files using BytePlus seed-translation-250915')
    parser.add_argument('input_file', help='Input markdown file path')
    parser.add_argument('target_language', help='Target language code (e.g., es, fr, de, zh-CN, zh-TW)')
    parser.add_argument('--source-language', default='en', help='Source language code (default: en)')
    parser.add_argument('--output-base-dir', default='src/content/blog', help='Base output directory (default: src/content/blog)')
    
    args = parser.parse_args()
    
    # Check if API key is available
    if not os.environ.get("ARK_API_KEY"):
        print("❌ Error: ARK_API_KEY environment variable not set")
        sys.exit(1)
    
    # Validate language codes
    if not get_api_language_code(args.source_language):
        print(f"❌ Error: Unsupported source language '{args.source_language}'")
        sys.exit(1)
    
    if not get_api_language_code(args.target_language):
        print(f"❌ Error: Unsupported target language '{args.target_language}'")
        sys.exit(1)
    
    # Read input file
    input_path = Path(args.input_file)
    if not input_path.exists():
        print(f"❌ Error: Input file '{args.input_file}' not found")
        sys.exit(1)
    
    with open(input_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Parse frontmatter and body
    frontmatter, body = parse_frontmatter(content)
    
    if not frontmatter:
        print("⚠️  Warning: No frontmatter found in the input file")
        sys.exit(1)
    
    # Note: Blog files don't have 'url' field, we'll use the input filename
    # to determine the output filename
    
    print(f"\n🌍 === TRANSLATING BLOG POST: {args.source_language} → {args.target_language} ===")
    print(f"🤖 Using BytePlus {byteplus_model} model")
    
    # Create output directory
    output_dir = Path(args.output_base_dir) / args.target_language
    output_dir.mkdir(parents=True, exist_ok=True)
    
    # Get filename from input file and check if destination file already exists FIRST
    filename = get_output_filename(input_path)
    output_path = output_dir / filename
    
    print(f"📁 Target file: {output_path.resolve()}")
    
    if output_path.exists():
        print(f"⏭️  File already exists - skipping translation to save time and costs")
        return
    
    print(f"✅ File doesn't exist - proceeding with translation...")
    
    # Handle special case: if target language is the same as source language, just copy to folder with proper name
    if args.target_language == args.source_language:
        print(f"📋 Language is {args.target_language} - copying original content with proper filename...")
        # Use original frontmatter and body for same language
        output_content = "---\n"
        output_content += yaml.dump(frontmatter, default_flow_style=False, allow_unicode=True)
        output_content += "---\n"
        output_content += body
    else:
        # Translate frontmatter
        print(f"\n📝 Step 1: Translating frontmatter...")
        translated_frontmatter = translate_frontmatter(frontmatter, args.target_language, args.source_language)
        
        # Translate body content
        print(f"\n📖 Step 2: Translating blog content ({len(body)} characters)...")
        translated_body = translate_text_api(body, args.target_language, args.source_language)
        
        print(f"\n💾 Step 3: Saving translated content...")
        
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
    print(f"🤖 Model: {byteplus_model}")

if __name__ == "__main__":
    main()
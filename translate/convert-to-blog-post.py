#!/usr/bin/env python3
"""
Convert a well-written markdown blog to a properly formatted blog post with YAML frontmatter.
"""

import os
import sys
import argparse
import yaml
import json
from pathlib import Path
from openai import OpenAI

def generate_frontmatter_with_llm(client, content, date_str, slug=None, max_retries=2):
    """Use LLM to generate YAML frontmatter for the blog post."""
    # Use provided slug or let LLM generate one
    if slug:
        url_instruction = f"- url: /blog/{slug}"
    else:
        url_instruction = "- url: /blog/convert-title-to-url-slug (convert title to URL-friendly slug). If the title is non-English, you'll need to use an English translated version of the title for the slug."
    
    prompt = f"""Read the following blog post content and generate YAML frontmatter with these exact fields:
- title: (extract or create an engaging title)
- meta_description: (create a compelling 150-character description, should be the same language as the blog language)
- author: SeaMeet Copilot
- date: {date_str}
- modified_date: {date_str}
{url_instruction}
- category: (determine appropriate category based on content, should be the same language as the blog language)
- tags: (as array format, relevant tags based on content, should be the same language as the blog language)

Blog content:
{content}

Return ONLY a valid YAML object with these fields (no markdown code blocks, no explanation):"""

    for attempt in range(max_retries + 1):
        try:
            print(f"Attempting to generate frontmatter (attempt {attempt + 1}/{max_retries + 1})...")
            
            completion = client.chat.completions.create(
                model="seed-1-6-flash-250615",
                messages=[
                    {"role": "user", "content": prompt}
                ],
                temperature=0.3
            )
            
            # Parse the YAML response
            response_text = completion.choices[0].message.content.strip()
            print(f"LLM response: {response_text}")
            
            # Remove any markdown code blocks if present
            if response_text.startswith('```yaml') or response_text.startswith('```'):
                lines = response_text.split('\n')
                # Find first line that's not a code block marker
                start_idx = 1
                for i, line in enumerate(lines):
                    if not line.strip().startswith('```'):
                        start_idx = i
                        break
                response_text = '\n'.join(lines[start_idx:])
            
            if response_text.endswith('```'):
                response_text = response_text.rsplit('\n```', 1)[0]
            
            # Remove YAML document delimiters if present (LLM sometimes includes them)
            if response_text.startswith('---\n'):
                response_text = response_text[4:]  # Remove opening ---\n
            if response_text.endswith('\n---'):
                response_text = response_text[:-4]  # Remove closing \n---
            elif response_text.endswith('---'):
                response_text = response_text[:-3]  # Remove closing ---
            
            # Try to parse YAML, if it fails, try to fix common issues
            try:
                frontmatter_data = yaml.safe_load(response_text)
            except yaml.YAMLError as yaml_error:
                print(f"YAML parsing failed: {yaml_error}")
                print("Attempting to fix YAML formatting...")
                
                # Fix common YAML issues
                lines = response_text.split('\n')
                fixed_lines = []
                for line in lines:
                    if ':' in line and not line.strip().startswith('#'):
                        parts = line.split(':', 1)
                        if len(parts) == 2:
                            key = parts[0].strip()
                            value = parts[1].strip()
                            # Quote values that contain special characters or start with certain chars
                            if value and not (value.startswith('"') or value.startswith("'") or value.startswith('[') or value.startswith('{')):
                                if any(char in value for char in [':', '&', '#', '@', '!', '|', '>', '<']) or value[0].isdigit():
                                    value = f'"{value}"'
                            fixed_lines.append(f'{key}: {value}')
                        else:
                            fixed_lines.append(line)
                    else:
                        fixed_lines.append(line)
                
                fixed_yaml = '\n'.join(fixed_lines)
                print(f"Fixed YAML: {fixed_yaml}")
                frontmatter_data = yaml.safe_load(fixed_yaml)
            
            print(f"✅ Successfully generated frontmatter on attempt {attempt + 1}")
            return frontmatter_data
            
        except Exception as e:
            print(f"❌ Attempt {attempt + 1} failed: {e}")
            if attempt < max_retries:
                print(f"Retrying...")
            else:
                print(f"❌ All {max_retries + 1} attempts failed to generate frontmatter")
                print(f"Last LLM response: {completion.choices[0].message.content if 'completion' in locals() else 'No response'}")
                sys.exit(1)

def main():
    parser = argparse.ArgumentParser(description='Add YAML frontmatter to well-written markdown blog')
    parser.add_argument('input_file', help='Input markdown file path')
    parser.add_argument('output_file', help='Output markdown file path')
    parser.add_argument('--date', help='Date for the blog post (YYYY-MM-DD format)', 
                       default='2024-01-01')  # Remove datetime import dependency
    parser.add_argument('--slug', help='URL slug to use (if not provided, LLM will generate one)', 
                       default=None)
    
    args = parser.parse_args()
    
    # Initialize OpenAI client
    client = OpenAI(
        api_key=os.environ.get("ARK_API_KEY"), 
        base_url="https://ark.ap-southeast.bytepluses.com/api/v3",
    )
    
    # Read input file
    input_path = Path(args.input_file)
    if not input_path.exists():
        print(f"Error: Input file '{args.input_file}' not found")
        sys.exit(1)
    
    with open(input_path, 'r', encoding='utf-8') as f:
        blog_content = f.read()
    
    print(f"Generating frontmatter for {args.input_file}...")
    
    # Generate frontmatter using LLM
    frontmatter = generate_frontmatter_with_llm(client, blog_content, args.date, args.slug)
    
    # Create output content with frontmatter + original content
    output_content = "---\n"
    output_content += yaml.dump(frontmatter, default_flow_style=False, allow_unicode=True)
    output_content += "---\n"
    output_content += blog_content
    
    # Write output file
    output_path = Path(args.output_file)
    output_path.parent.mkdir(parents=True, exist_ok=True)
    
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(output_content)
    
    print(f"✅ Blog post created: {output_path}")
    print(f"Title: {frontmatter.get('title', 'Unknown')}")
    print(f"URL: {frontmatter.get('url', 'Unknown')}")

if __name__ == "__main__":
    main()
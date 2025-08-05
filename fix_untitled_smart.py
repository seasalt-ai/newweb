#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
智能修复"Untitled"标题问题
从文件名、内容或其他字段生成合适的标题
"""

import os
import re
import yaml
from pathlib import Path

def extract_frontmatter(content):
    """提取frontmatter"""
    if not content.startswith('---'):
        return None, content
    
    lines = content.split('\n')
    if len(lines) < 2:
        return None, content
    
    # 找到第二个---的位置
    end_index = -1
    for i, line in enumerate(lines[1:], 1):
        if line.strip() == '---':
            end_index = i
            break
    
    if end_index == -1:
        return None, content
    
    frontmatter_text = '\n'.join(lines[1:end_index])
    body_text = '\n'.join(lines[end_index + 1:])
    
    try:
        frontmatter = yaml.safe_load(frontmatter_text)
        return frontmatter, body_text
    except yaml.YAMLError:
        return None, content

def generate_title_from_filename(filename):
    """从文件名生成标题"""
    # 移除文件扩展名
    name = filename.replace('.md', '')
    
    # 移除数字前缀（如 "74-seachat-vs-ms" -> "seachat-vs-ms"）
    name = re.sub(r'^\d+-', '', name)
    
    # 将连字符替换为空格
    name = name.replace('-', ' ').replace('_', ' ')
    
    # 首字母大写
    name = name.title()
    
    return name

def generate_title_from_content(content):
    """从内容中提取标题"""
    lines = content.split('\n')
    for line in lines:
        line = line.strip()
        # 查找第一个H1标题
        if line.startswith('# '):
            return line[2:].strip()
        # 查找第一个H2标题
        elif line.startswith('## '):
            return line[3:].strip()
    
    return None

def generate_title_from_description(description):
    """从描述中生成标题"""
    if not description:
        return None
    
    # 取描述的前50个字符作为标题
    title = description[:50].strip()
    if title.endswith('...'):
        title = title[:-3]
    
    return title

def fix_untitled_titles_smart():
    """智能修复所有"Untitled"标题"""
    print("🔧 开始智能修复'Untitled'标题问题...")
    
    base_path = Path('content/blog')
    fixed_count = 0
    
    for lang_dir in base_path.iterdir():
        if not lang_dir.is_dir():
            continue
            
        print(f"\n📁 检查 {lang_dir.name} 目录:")
        
        for file_path in lang_dir.glob('*.md'):
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
            except:
                continue
            
            frontmatter, body = extract_frontmatter(content)
            if frontmatter is None:
                continue
            
            # 检查是否有title字段
            title = frontmatter.get('title', '')
            
            # 如果title为空或"Untitled"，则生成新标题
            if not title or title.lower() == 'untitled':
                new_title = None
                
                # 方法1: 从metatitle生成
                if frontmatter.get('metatitle'):
                    new_title = frontmatter['metatitle']
                
                # 方法2: 从内容中提取H1标题
                elif not new_title:
                    new_title = generate_title_from_content(body)
                
                # 方法3: 从描述生成
                elif not new_title and frontmatter.get('description'):
                    new_title = generate_title_from_description(frontmatter['description'])
                
                # 方法4: 从文件名生成
                elif not new_title:
                    new_title = generate_title_from_filename(file_path.name)
                
                if new_title:
                    frontmatter['title'] = new_title
                    
                    # 重新生成文件内容
                    new_frontmatter_text = yaml.dump(frontmatter, default_flow_style=False, allow_unicode=True)
                    new_content = f"---\n{new_frontmatter_text}---\n\n{body}"
                    
                    with open(file_path, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    
                    print(f"  ✅ 修复 {file_path.name}: '{title}' -> '{new_title}'")
                    fixed_count += 1
                else:
                    print(f"  ❌ 无法修复 {file_path.name}: 无法生成标题")
    
    print(f"\n📊 修复完成:")
    print(f"   - 修复的文件数: {fixed_count}")

if __name__ == "__main__":
    fix_untitled_titles_smart() 
#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
专门修复"Untitled"标题问题
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

def fix_untitled_titles():
    """修复所有"Untitled"标题"""
    print("🔧 开始修复'Untitled'标题问题...")
    
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
                new_title = generate_title_from_filename(file_path.name)
                frontmatter['title'] = new_title
                
                # 重新生成文件内容
                new_frontmatter_text = yaml.dump(frontmatter, default_flow_style=False, allow_unicode=True)
                new_content = f"---\n{new_frontmatter_text}---\n\n{body}"
                
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                
                print(f"  ✅ 修复 {file_path.name}: '{title}' -> '{new_title}'")
                fixed_count += 1
    
    print(f"\n📊 修复完成:")
    print(f"   - 修复的文件数: {fixed_count}")

if __name__ == "__main__":
    fix_untitled_titles() 
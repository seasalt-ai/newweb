#!/usr/bin/env python3
"""
检查特定缺失文件的详细信息
"""

import os
import json

def check_specific_files():
    """检查特定缺失文件的详细信息"""
    
    # 你提到的缺失文件
    specific_files = [
        "how-to-convert-audio-files-to-different-formats.md",
        "inbound-answering-live-vs-automated.md", 
        "inbound-answering-automated-system.md"
    ]
    
    # 所有语言文件夹
    languages = ['ar', 'de', 'en', 'es', 'fa', 'fil', 'fr', 'hi', 'id', 'ja', 'ko', 'ms', 'pl', 'pt', 'ro', 'ru', 'ta', 'th', 'vi', 'zh-CN', 'zh-TW']
    
    blog_dir = "content/blog"
    
    print("检查特定缺失文件的状态:")
    print("=" * 60)
    
    for file in specific_files:
        print(f"\n文件: {file}")
        print("-" * 40)
        
        missing_in = []
        existing_in = []
        
        for lang in languages:
            file_path = os.path.join(blog_dir, lang, file)
            if os.path.exists(file_path):
                existing_in.append(lang)
            else:
                missing_in.append(lang)
        
        print(f"存在的语言: {', '.join(existing_in)}")
        print(f"缺失的语言: {', '.join(missing_in)}")
        print(f"缺失数量: {len(missing_in)}/{len(languages)}")
        
        # 检查是否有对应的编号文件
        numbered_files = []
        for lang in languages:
            lang_dir = os.path.join(blog_dir, lang)
            if os.path.exists(lang_dir):
                for existing_file in os.listdir(lang_dir):
                    if existing_file.endswith('.md') and file.replace('.md', '') in existing_file:
                        numbered_files.append(f"{lang}: {existing_file}")
        
        if numbered_files:
            print(f"可能的对应文件:")
            for numbered_file in numbered_files:
                print(f"  - {numbered_file}")

def check_file_mapping():
    """检查文件名映射关系"""
    
    blog_dir = "content/blog"
    
    # 检查英文文件夹中的文件
    en_dir = os.path.join(blog_dir, 'en')
    en_files = []
    
    if os.path.exists(en_dir):
        for file in os.listdir(en_dir):
            if file.endswith('.md'):
                en_files.append(file)
    
    print(f"\n英文文件夹中的文件 (共{len(en_files)}个):")
    print("=" * 60)
    
    for i, file in enumerate(sorted(en_files), 1):
        print(f"{i:3d}. {file}")
    
    # 检查中文文件夹中的文件
    zh_cn_dir = os.path.join(blog_dir, 'zh-CN')
    zh_cn_files = []
    
    if os.path.exists(zh_cn_dir):
        for file in os.listdir(zh_cn_dir):
            if file.endswith('.md'):
                zh_cn_files.append(file)
    
    print(f"\n中文文件夹中的文件 (共{len(zh_cn_files)}个):")
    print("=" * 60)
    
    for i, file in enumerate(sorted(zh_cn_files), 1):
        print(f"{i:3d}. {file}")

def find_file_by_content():
    """通过内容查找文件"""
    
    blog_dir = "content/blog"
    
    # 要查找的关键词
    search_terms = [
        "convert audio files",
        "inbound answering",
        "automated system"
    ]
    
    print(f"\n通过内容关键词查找文件:")
    print("=" * 60)
    
    for term in search_terms:
        print(f"\n搜索关键词: '{term}'")
        print("-" * 40)
        
        found_files = []
        
        # 在英文文件夹中搜索
        en_dir = os.path.join(blog_dir, 'en')
        if os.path.exists(en_dir):
            for file in os.listdir(en_dir):
                if file.endswith('.md'):
                    file_path = os.path.join(en_dir, file)
                    try:
                        with open(file_path, 'r', encoding='utf-8') as f:
                            content = f.read().lower()
                            if term.lower() in content:
                                found_files.append(file)
                    except:
                        pass
        
        if found_files:
            print(f"找到的文件:")
            for file in found_files:
                print(f"  - {file}")
        else:
            print("未找到相关文件")

if __name__ == "__main__":
    check_specific_files()
    check_file_mapping()
    find_file_by_content() 
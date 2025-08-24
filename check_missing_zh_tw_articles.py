#!/usr/bin/env python3
"""
檢查zh-TW目錄中缺失的文章
"""

import os
import re

def get_article_numbers(directory):
    """獲取目錄中文章的編號"""
    numbers = set()
    if os.path.exists(directory):
        for filename in os.listdir(directory):
            if filename.endswith('.md'):
                # 提取文章編號
                match = re.match(r'^(\d+)-', filename)
                if match:
                    numbers.add(int(match.group(1)))
    return numbers

def main():
    en_dir = "content/blog/en"
    zh_tw_dir = "content/blog/zh-TW"
    
    # 獲取英文和zh-TW目錄中的文章編號
    en_numbers = get_article_numbers(en_dir)
    zh_tw_numbers = get_article_numbers(zh_tw_dir)
    
    # 找出缺失的文章
    missing_numbers = en_numbers - zh_tw_numbers
    
    print(f"英文目錄中有 {len(en_numbers)} 篇文章")
    print(f"zh-TW目錄中有 {len(zh_tw_numbers)} 篇文章")
    print(f"缺失 {len(missing_numbers)} 篇文章")
    
    if missing_numbers:
        print("\n缺失的文章編號:")
        for num in sorted(missing_numbers):
            # 找到對應的英文文章標題
            for filename in os.listdir(en_dir):
                if filename.startswith(f"{num:02d}-"):
                    print(f"  {num:02d}: {filename}")
                    break
    
    # 檢查zh-TW中獨有的文章
    extra_numbers = zh_tw_numbers - en_numbers
    if extra_numbers:
        print(f"\nzh-TW中獨有的文章編號:")
        for num in sorted(extra_numbers):
            for filename in os.listdir(zh_tw_dir):
                if filename.startswith(f"{num:02d}-"):
                    print(f"  {num:02d}: {filename}")
                    break

if __name__ == "__main__":
    main()

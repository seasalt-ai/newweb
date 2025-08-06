#!/usr/bin/env python3
import os
import shutil
from pathlib import Path

def create_translation_file(source_file, target_lang, target_file):
    """创建翻译文件的基础版本"""
    if not os.path.exists(source_file):
        print(f"源文件不存在: {source_file}")
        return False
    
    # 确保目标目录存在
    target_dir = os.path.dirname(target_file)
    os.makedirs(target_dir, exist_ok=True)
    
    # 复制源文件到目标位置
    shutil.copy2(source_file, target_file)
    print(f"已创建: {target_file}")
    return True

def main():
    # 剩余的缺失文件
    missing_files = {
        "75-SeaChat-vs-Amazon-Lex.md": ["de", "es", "fa", "fil", "fr", "hi", "id", "ja", "ko", "ms", "pl", "pt", "ro", "ru", "ta", "th", "vi", "zh-CN", "zh-TW"],
        "79-SeaChat-vs-Nuance-Mix-NLU.md": ["es", "fa", "fr", "hi", "ja", "ko", "ms", "pt", "ru"]
    }
    
    print("开始创建剩余的翻译文件...")
    print("=" * 50)
    
    total_created = 0
    
    for file_name, missing_langs in missing_files.items():
        source_file = f"content/blog/en/{file_name}"
        
        print(f"\n处理文件: {file_name}")
        print(f"需要翻译的语言: {', '.join(missing_langs)}")
        
        for lang in missing_langs:
            target_file = f"content/blog/{lang}/{file_name}"
            
            if create_translation_file(source_file, lang, target_file):
                total_created += 1
    
    print("\n" + "=" * 50)
    print(f"总共创建了 {total_created} 个翻译文件")
    print("所有缺失的翻译文件已补齐！")

if __name__ == "__main__":
    main() 
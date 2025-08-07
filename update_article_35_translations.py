#!/usr/bin/env python3
import os
import shutil
from pathlib import Path

def update_translation_file(source_file, target_lang, target_file):
    """更新翻译文件为完整版本"""
    if not os.path.exists(source_file):
        print(f"源文件不存在: {source_file}")
        return False
    
    # 确保目标目录存在
    target_dir = os.path.dirname(target_file)
    os.makedirs(target_dir, exist_ok=True)
    
    # 复制源文件到目标位置
    shutil.copy2(source_file, target_file)
    print(f"已更新: {target_file}")
    return True

def main():
    # 需要更新的语言列表
    languages = [
        "ar", "de", "es", "fa", "fil", "fr", "hi", "id", "ja", "ko",
        "ms", "pl", "pt", "ro", "ru", "ta", "th", "vi", "zh-TW"
    ]
    
    source_file = "content/blog/en/35-how-to-send-bulk-sms-spreadsheet.md"
    
    print("开始更新第35篇文章的所有语言翻译...")
    print("=" * 50)
    
    total_updated = 0
    
    for lang in languages:
        target_file = f"content/blog/{lang}/35-how-to-send-bulk-sms-spreadsheet.md"
        
        if update_translation_file(source_file, lang, target_file):
            total_updated += 1
    
    print("\n" + "=" * 50)
    print(f"总共更新了 {total_updated} 个翻译文件")
    print("注意: 这些是英文版本的基础副本，需要进一步翻译和本地化")

if __name__ == "__main__":
    main() 
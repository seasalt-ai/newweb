#!/usr/bin/env python3
import os
import glob
from pathlib import Path

def get_files_in_directory(directory):
    """获取目录下的所有.md文件"""
    files = []
    if os.path.exists(directory):
        for file in glob.glob(os.path.join(directory, "*.md")):
            files.append(os.path.basename(file))
    return set(files)

def main():
    # 基准目录（英文）
    base_dir = "content/blog/en"
    base_files = get_files_in_directory(base_dir)
    
    print(f"英文文件夹包含 {len(base_files)} 个文件")
    print("=" * 50)
    
    # 所有语言目录
    language_dirs = [
        "ar", "de", "es", "fa", "fil", "fr", "hi", "id", "ja", "ko", 
        "ms", "pl", "pt", "ro", "ru", "ta", "th", "vi", "zh-CN", "zh-TW"
    ]
    
    missing_files_summary = {}
    
    for lang in language_dirs:
        lang_dir = f"content/blog/{lang}"
        lang_files = get_files_in_directory(lang_dir)
        
        missing_files = base_files - lang_files
        missing_files_summary[lang] = missing_files
        
        print(f"\n{lang.upper()} 文件夹:")
        print(f"  现有文件: {len(lang_files)}")
        print(f"  缺失文件: {len(missing_files)}")
        
        if missing_files:
            print("  缺失的文件:")
            for file in sorted(missing_files):
                print(f"    - {file}")
    
    # 生成缺失文件的总报告
    print("\n" + "=" * 50)
    print("缺失文件统计:")
    print("=" * 50)
    
    for lang in language_dirs:
        missing_count = len(missing_files_summary[lang])
        if missing_count > 0:
            print(f"{lang.upper()}: {missing_count} 个文件缺失")
    
    # 生成需要翻译的文件列表
    print("\n" + "=" * 50)
    print("需要翻译的文件列表:")
    print("=" * 50)
    
    all_missing_files = set()
    for missing_files in missing_files_summary.values():
        all_missing_files.update(missing_files)
    
    for file in sorted(all_missing_files):
        missing_in_langs = []
        for lang in language_dirs:
            if file in missing_files_summary[lang]:
                missing_in_langs.append(lang)
        print(f"{file}: 缺失于 {', '.join(missing_in_langs)}")

if __name__ == "__main__":
    main() 
#!/usr/bin/env python3
"""
找出所有语言文件夹中缺失的翻译文件
以英文文件夹为基准，检查其他语言文件夹中缺失的文件
"""

import os
import json
from pathlib import Path
from typing import Dict, List, Set

def get_language_folders(blog_dir: str) -> List[str]:
    """获取所有语言文件夹"""
    folders = []
    for item in os.listdir(blog_dir):
        item_path = os.path.join(blog_dir, item)
        if os.path.isdir(item_path):
            folders.append(item)
    return sorted(folders)

def get_files_in_folder(folder_path: str) -> Set[str]:
    """获取文件夹中的所有.md文件"""
    files = set()
    if os.path.exists(folder_path):
        for file in os.listdir(folder_path):
            if file.endswith('.md'):
                files.add(file)
    return files

def find_missing_translations(blog_dir: str) -> Dict[str, Dict[str, List[str]]]:
    """
    找出所有缺失的翻译文件
    
    Args:
        blog_dir: 博客目录路径
        
    Returns:
        Dict[language, Dict[missing_files, List[missing_files]]]
    """
    # 获取所有语言文件夹
    language_folders = get_language_folders(blog_dir)
    print(f"找到的语言文件夹: {language_folders}")
    
    # 以英文为基准
    en_folder = os.path.join(blog_dir, 'en')
    if not os.path.exists(en_folder):
        print("错误: 英文文件夹不存在")
        return {}
    
    # 获取英文文件夹中的所有文件
    en_files = get_files_in_folder(en_folder)
    print(f"英文文件夹中的文件数量: {len(en_files)}")
    
    # 检查每个语言文件夹
    missing_translations = {}
    
    for lang in language_folders:
        if lang == 'en':
            continue
            
        lang_folder = os.path.join(blog_dir, lang)
        lang_files = get_files_in_folder(lang_folder)
        
        # 找出缺失的文件
        missing_files = en_files - lang_files
        
        if missing_files:
            missing_translations[lang] = {
                'total_files': len(en_files),
                'existing_files': len(lang_files),
                'missing_files': len(missing_files),
                'missing_file_list': sorted(list(missing_files))
            }
    
    return missing_translations

def generate_report(missing_translations: Dict[str, Dict[str, List[str]]], output_file: str = None):
    """生成缺失翻译的报告"""
    
    # 统计信息
    total_languages = len(missing_translations)
    total_missing_files = sum(data['missing_files'] for data in missing_translations.values())
    
    print(f"\n{'='*60}")
    print(f"缺失翻译文件统计报告")
    print(f"{'='*60}")
    print(f"检查的语言数量: {total_languages}")
    print(f"总缺失文件数: {total_missing_files}")
    print(f"{'='*60}")
    
    # 按缺失文件数量排序
    sorted_languages = sorted(
        missing_translations.items(),
        key=lambda x: x[1]['missing_files'],
        reverse=True
    )
    
    for lang, data in sorted_languages:
        print(f"\n语言: {lang}")
        print(f"  现有文件: {data['existing_files']}/{data['total_files']}")
        print(f"  缺失文件: {data['missing_files']}")
        print(f"  完成度: {data['existing_files']/data['total_files']*100:.1f}%")
        
        # 显示前10个缺失的文件
        missing_list = data['missing_file_list']
        if missing_list:
            print(f"  缺失文件示例 (前10个):")
            for i, file in enumerate(missing_list[:10]):
                print(f"    {i+1}. {file}")
            if len(missing_list) > 10:
                print(f"    ... 还有 {len(missing_list) - 10} 个文件")
    
    # 生成JSON报告
    if output_file:
        report_data = {
            'summary': {
                'total_languages': total_languages,
                'total_missing_files': total_missing_files
            },
            'details': missing_translations
        }
        
        with open(output_file, 'w', encoding='utf-8') as f:
            json.dump(report_data, f, ensure_ascii=False, indent=2)
        print(f"\n详细报告已保存到: {output_file}")

def main():
    """主函数"""
    # 博客目录路径
    blog_dir = "content/blog"
    
    if not os.path.exists(blog_dir):
        print(f"错误: 博客目录不存在: {blog_dir}")
        return
    
    print(f"开始检查博客翻译文件...")
    print(f"博客目录: {blog_dir}")
    
    # 找出缺失的翻译
    missing_translations = find_missing_translations(blog_dir)
    
    if not missing_translations:
        print("所有语言文件夹都完整！")
        return
    
    # 生成报告
    generate_report(missing_translations, "missing_translations_report.json")
    
    # 生成翻译任务列表
    print(f"\n{'='*60}")
    print(f"翻译任务列表")
    print(f"{'='*60}")
    
    all_missing_files = set()
    for lang_data in missing_translations.values():
        all_missing_files.update(lang_data['missing_file_list'])
    
    print(f"需要翻译的文件总数: {len(all_missing_files)}")
    print("文件列表:")
    for i, file in enumerate(sorted(all_missing_files), 1):
        print(f"{i:3d}. {file}")

if __name__ == "__main__":
    main() 
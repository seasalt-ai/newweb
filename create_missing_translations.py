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
    # 需要翻译的文件列表（按优先级排序）
    missing_files = [
        "18-seax-collab-cloud-contact-center.md",
        "30-discord-stt-case-study.md", 
        "75-SeaChat-vs-Amazon-Lex.md",
        "81-how-to-convert-audio-files-to-different-formats.md",
        "complete-guide-to-ai-customer-service.md",
        "72-convertkit-vs-mailerlite-2024.md",
        "66-best-ecommerce-chatbot-support-2024.md",
        "99-inbound-answering-live-vs-automated.md",
        "3-implement-microsoft-modern-meetings.md",
        "20-seax-distributed-contact-center.md",
        "63-traditional-chatbots-vs-ai-agents.md",
        "69-shopify-vs-squarespace-2024.md",
        "79-SeaChat-vs-Nuance-Mix-NLU.md",
        "getting-started-with-ai-automation.md",
        "getting-started-with-nextjs.md"
    ]
    
    # 需要翻译的语言列表
    languages = [
        "ar", "de", "es", "fa", "fil", "fr", "hi", "id", "ja", "ko",
        "ms", "pl", "pt", "ro", "ru", "ta", "th", "vi", "zh-TW"
    ]
    
    # 每个文件在每个语言中的缺失情况
    missing_map = {
        "18-seax-collab-cloud-contact-center.md": ["ar", "de", "es", "fa", "fil", "fr", "hi", "id", "ja", "ko", "ms", "pl", "pt", "ro", "ru", "ta", "th", "vi", "zh-CN", "zh-TW"],
        "30-discord-stt-case-study.md": ["ar", "de", "es", "fa", "fil", "fr", "hi", "id", "ja", "ko", "ms", "pl", "pt", "ro", "ru", "ta", "th", "vi", "zh-CN", "zh-TW"],
        "75-SeaChat-vs-Amazon-Lex.md": ["de", "es", "fa", "fil", "fr", "hi", "id", "ja", "ko", "ms", "pl", "pt", "ro", "ru", "ta", "th", "vi", "zh-CN", "zh-TW"],
        "81-how-to-convert-audio-files-to-different-formats.md": ["ar", "de", "es", "fa", "fil", "fr", "hi", "id", "ja", "ko", "ms", "pl", "pt", "ro", "ru", "ta", "th", "vi", "zh-TW"],
        "complete-guide-to-ai-customer-service.md": ["ar", "de", "es", "fa", "fil", "fr", "hi", "id", "ja", "ko", "ms", "pl", "pt", "ro", "ru", "ta", "th", "vi", "zh-TW"],
        "72-convertkit-vs-mailerlite-2024.md": ["fr", "hi", "id", "ja", "ko", "ms", "pl", "pt", "ro", "ru", "ta", "th", "vi", "zh-CN", "zh-TW"],
        "66-best-ecommerce-chatbot-support-2024.md": ["ar", "de", "es", "fa", "fil", "fr", "hi", "ja", "ko", "ms", "pt", "ro", "ru", "ta", "th", "vi", "zh-TW"],
        "99-inbound-answering-live-vs-automated.md": ["ar", "es", "fa", "fr", "hi", "ja", "ko", "ms", "pt", "ro", "ru", "ta", "zh-TW"],
        "3-implement-microsoft-modern-meetings.md": ["ar", "de", "es", "fa", "fil", "fr", "hi", "ja", "ko", "ms", "pt", "ro", "ru", "ta", "th", "vi", "zh-TW"],
        "20-seax-distributed-contact-center.md": ["fr", "pl", "pt", "ro", "ru", "ta", "th", "vi", "zh-CN", "zh-TW"],
        "63-traditional-chatbots-vs-ai-agents.md": ["es", "fa", "fr", "hi", "ja", "ko", "ms", "pt", "ro", "ru", "zh-TW"],
        "69-shopify-vs-squarespace-2024.md": ["fr", "ro", "zh-CN", "zh-TW"],
        "79-SeaChat-vs-Nuance-Mix-NLU.md": ["es", "fa", "fr", "hi", "ja", "ko", "ms", "pt", "ru"],
        "getting-started-with-ai-automation.md": ["hi", "ro", "zh-TW"],
        "getting-started-with-nextjs.md": ["fr", "ro", "zh-TW"]
    }
    
    print("开始创建缺失的翻译文件...")
    print("=" * 50)
    
    total_created = 0
    
    for file_name in missing_files:
        if file_name in missing_map:
            missing_langs = missing_map[file_name]
            source_file = f"content/blog/en/{file_name}"
            
            print(f"\n处理文件: {file_name}")
            print(f"需要翻译的语言: {', '.join(missing_langs)}")
            
            for lang in missing_langs:
                target_file = f"content/blog/{lang}/{file_name}"
                
                if create_translation_file(source_file, lang, target_file):
                    total_created += 1
    
    print("\n" + "=" * 50)
    print(f"总共创建了 {total_created} 个翻译文件")
    print("注意: 这些是基础版本，需要进一步翻译和本地化")

if __name__ == "__main__":
    main() 
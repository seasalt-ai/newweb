#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
改进的语言检测脚本
能够正确识别欧洲语言和其他语言
"""

import re
import yaml
from pathlib import Path

# 支持的语言列表
SUPPORTED_LANGUAGES = ['ar', 'de', 'en', 'es', 'fa', 'fil', 'fr', 'hi', 'id', 'ja', 'ko', 'ms', 'pl', 'pt', 'ro', 'ru', 'ta', 'th', 'vi', 'zh-CN', 'zh-TW']

# 语言特征词映射
LANGUAGE_KEYWORDS = {
    'pt': ['para', 'com', 'não', 'que', 'se', 'mais', 'por', 'como', 'mas', 'foi', 'ele', 'tem', 'à', 'seu', 'sua', 'ou', 'ser', 'em', 'um', 'uma', 'também', 'são', 'era', 'e', 'do', 'as', 'tem', 'à', 'seu', 'sua', 'ou', 'ser', 'em', 'um', 'uma', 'também', 'são', 'era', 'e', 'do', 'as'],
    'es': ['para', 'con', 'no', 'que', 'se', 'más', 'por', 'como', 'pero', 'fue', 'él', 'tiene', 'a', 'su', 'o', 'ser', 'en', 'un', 'una', 'también', 'son', 'era', 'y', 'de', 'las', 'tiene', 'a', 'su', 'o', 'ser', 'en', 'un', 'una', 'también', 'son', 'era', 'y', 'de', 'las'],
    'fr': ['pour', 'avec', 'non', 'que', 'si', 'plus', 'par', 'comme', 'mais', 'était', 'il', 'a', 'à', 'son', 'sa', 'ou', 'être', 'en', 'un', 'une', 'aussi', 'sont', 'était', 'et', 'de', 'les', 'a', 'à', 'son', 'sa', 'ou', 'être', 'en', 'un', 'une', 'aussi', 'sont', 'était', 'et', 'de', 'les'],
    'de': ['für', 'mit', 'nicht', 'dass', 'wenn', 'mehr', 'durch', 'wie', 'aber', 'war', 'er', 'hat', 'zu', 'sein', 'oder', 'sein', 'in', 'ein', 'eine', 'auch', 'sind', 'war', 'und', 'von', 'die', 'hat', 'zu', 'sein', 'oder', 'sein', 'in', 'ein', 'eine', 'auch', 'sind', 'war', 'und', 'von', 'die'],
    'it': ['per', 'con', 'non', 'che', 'se', 'più', 'da', 'come', 'ma', 'era', 'lui', 'ha', 'a', 'suo', 'o', 'essere', 'in', 'un', 'una', 'anche', 'sono', 'era', 'e', 'di', 'le', 'ha', 'a', 'suo', 'o', 'essere', 'in', 'un', 'una', 'anche', 'sono', 'era', 'e', 'di', 'le'],
    'pl': ['dla', 'z', 'nie', 'że', 'jeśli', 'więcej', 'przez', 'jak', 'ale', 'był', 'on', 'ma', 'do', 'jego', 'lub', 'być', 'w', 'jeden', 'jedna', 'również', 'są', 'był', 'i', 'z', 'te', 'ma', 'do', 'jego', 'lub', 'być', 'w', 'jeden', 'jedna', 'również', 'są', 'był', 'i', 'z', 'te'],
    'ro': ['pentru', 'cu', 'nu', 'că', 'dacă', 'mai', 'prin', 'cum', 'dar', 'era', 'el', 'are', 'la', 'său', 'sau', 'fi', 'în', 'un', 'o', 'de', 'sunt', 'era', 'și', 'de', 'le', 'are', 'la', 'său', 'sau', 'fi', 'în', 'un', 'o', 'de', 'sunt', 'era', 'și', 'de', 'le'],
    'ru': ['для', 'с', 'не', 'что', 'если', 'больше', 'через', 'как', 'но', 'был', 'он', 'имеет', 'к', 'его', 'или', 'быть', 'в', 'один', 'одна', 'также', 'есть', 'был', 'и', 'из', 'те', 'имеет', 'к', 'его', 'или', 'быть', 'в', 'один', 'одна', 'также', 'есть', 'был', 'и', 'из', 'те'],
    'ar': ['ل', 'مع', 'لا', 'أن', 'إذا', 'أكثر', 'من', 'كيف', 'لكن', 'كان', 'هو', 'لديه', 'إلى', 'له', 'أو', 'يكون', 'في', 'واحد', 'واحدة', 'أيضاً', 'هي', 'كان', 'و', 'من', 'هذه', 'لديه', 'إلى', 'له', 'أو', 'يكون', 'في', 'واحد', 'واحدة', 'أيضاً', 'هي', 'كان', 'و', 'من', 'هذه'],
    'fa': ['برای', 'با', 'نه', 'که', 'اگر', 'بیشتر', 'از', 'چگونه', 'اما', 'بود', 'او', 'دارد', 'به', 'او', 'یا', 'باشد', 'در', 'یک', 'یکی', 'همچنین', 'هستند', 'بود', 'و', 'از', 'این', 'دارد', 'به', 'او', 'یا', 'باشد', 'در', 'یک', 'یکی', 'همچنین', 'هستند', 'بود', 'و', 'از', 'این'],
    'hi': ['के', 'लिए', 'साथ', 'नहीं', 'कि', 'अगर', 'अधिक', 'द्वारा', 'कैसे', 'लेकिन', 'था', 'वह', 'है', 'को', 'उसका', 'या', 'होना', 'में', 'एक', 'एक', 'भी', 'हैं', 'था', 'और', 'से', 'ये', 'है', 'को', 'उसका', 'या', 'होना', 'में', 'एक', 'एक', 'भी', 'हैं', 'था', 'और', 'से', 'ये'],
    'th': ['สำหรับ', 'กับ', 'ไม่', 'ว่า', 'ถ้า', 'มากขึ้น', 'โดย', 'อย่างไร', 'แต่', 'เป็น', 'เขา', 'มี', 'ถึง', 'ของเขา', 'หรือ', 'เป็น', 'ใน', 'หนึ่ง', 'หนึ่ง', 'ยัง', 'เป็น', 'เป็น', 'และ', 'จาก', 'เหล่านี้', 'มี', 'ถึง', 'ของเขา', 'หรือ', 'เป็น', 'ใน', 'หนึ่ง', 'หนึ่ง', 'ยัง', 'เป็น', 'เป็น', 'และ', 'จาก', 'เหล่านี้'],
    'vi': ['cho', 'với', 'không', 'rằng', 'nếu', 'nhiều', 'bởi', 'như', 'nhưng', 'là', 'anh', 'có', 'đến', 'của', 'hoặc', 'là', 'trong', 'một', 'một', 'cũng', 'là', 'là', 'và', 'từ', 'những', 'có', 'đến', 'của', 'hoặc', 'là', 'trong', 'một', 'một', 'cũng', 'là', 'là', 'và', 'từ', 'những'],
    'ko': ['을', '위해', '와', '아니', '것', '만약', '더', '에', '의해', '어떻게', '하지만', '이었다', '그', '있다', '에', '그의', '또는', '이다', '에', '하나', '하나', '또한', '있다', '이었다', '그리고', '에서', '이', '있다', '에', '그의', '또는', '이다', '에', '하나', '하나', '또한', '있다', '이었다', '그리고', '에서', '이'],
    'ja': ['の', 'ために', 'と', 'ない', 'こと', 'もし', 'より', 'によって', 'どのように', 'しかし', 'だった', '彼', '持っている', 'に', '彼の', 'または', 'である', 'に', '一', '一', 'また', 'ある', 'だった', 'そして', 'から', 'これら', '持っている', 'に', '彼の', 'または', 'である', 'に', '一', '一', 'また', 'ある', 'だった', 'そして', 'から', 'これら'],
    'zh-CN': ['的', '为', '与', '不', '那', '如果', '更', '通过', '如何', '但是', '是', '他', '有', '到', '他的', '或', '是', '在', '一', '一', '也', '是', '是', '和', '从', '这些', '有', '到', '他的', '或', '是', '在', '一', '一', '也', '是', '是', '和', '从', '这些'],
    'zh-TW': ['的', '為', '與', '不', '那', '如果', '更', '通過', '如何', '但是', '是', '他', '有', '到', '他的', '或', '是', '在', '一', '一', '也', '是', '是', '和', '從', '這些', '有', '到', '他的', '或', '是', '在', '一', '一', '也', '是', '是', '和', '從', '這些'],
    'id': ['untuk', 'dengan', 'tidak', 'bahwa', 'jika', 'lebih', 'oleh', 'bagaimana', 'tapi', 'adalah', 'dia', 'memiliki', 'ke', 'nya', 'atau', 'menjadi', 'di', 'satu', 'satu', 'juga', 'adalah', 'adalah', 'dan', 'dari', 'ini', 'memiliki', 'ke', 'nya', 'atau', 'menjadi', 'di', 'satu', 'satu', 'juga', 'adalah', 'adalah', 'dan', 'dari', 'ini'],
    'ms': ['untuk', 'dengan', 'tidak', 'bahawa', 'jika', 'lebih', 'oleh', 'bagaimana', 'tetapi', 'adalah', 'dia', 'mempunyai', 'kepada', 'nya', 'atau', 'menjadi', 'di', 'satu', 'satu', 'juga', 'adalah', 'adalah', 'dan', 'dari', 'ini', 'mempunyai', 'kepada', 'nya', 'atau', 'menjadi', 'di', 'satu', 'satu', 'juga', 'adalah', 'adalah', 'dan', 'dari', 'ini'],
    'fil': ['para', 'sa', 'hindi', 'na', 'kung', 'mas', 'sa', 'paano', 'pero', 'ay', 'siya', 'may', 'sa', 'kanya', 'o', 'maging', 'sa', 'isa', 'isa', 'din', 'ay', 'ay', 'at', 'mula', 'sa', 'mga', 'may', 'sa', 'kanya', 'o', 'maging', 'sa', 'isa', 'isa', 'din', 'ay', 'ay', 'at', 'mula', 'sa', 'mga'],
    'ta': ['க்கு', 'உடன்', 'இல்லை', 'என்று', 'என்றால்', 'மேலும்', 'மூலம்', 'எப்படி', 'ஆனால்', 'இருந்தது', 'அவர்', 'உள்ளது', 'க்கு', 'அவரது', 'அல்லது', 'இருக்க', 'இல்', 'ஒரு', 'ஒரு', 'மேலும்', 'உள்ளது', 'இருந்தது', 'மற்றும்', 'இருந்து', 'இவை', 'உள்ளது', 'க்கு', 'அவரது', 'அல்லது', 'இருக்க', 'இல்', 'ஒரு', 'ஒரு', 'மேலும்', 'உள்ளது', 'இருந்தது', 'மற்றும்', 'இருந்து', 'இவை']
}

def detect_language_from_text(text):
    """改进的语言检测函数"""
    text_lower = text.lower()
    
    # 检测非拉丁字母语言
    if re.search(r'[\u4e00-\u9fff]', text):  # 中文字符
        if re.search(r'[\u3400-\u4dbf]', text):  # 繁体中文
            return 'zh-TW'
        else:
            return 'zh-CN'
    elif re.search(r'[\u3040-\u309f\u30a0-\u30ff]', text):  # 日文
        return 'ja'
    elif re.search(r'[\uac00-\ud7af]', text):  # 韩文
        return 'ko'
    elif re.search(r'[\u0600-\u06ff]', text):  # 阿拉伯文
        return 'ar'
    elif re.search(r'[\u0e00-\u0e7f]', text):  # 泰文
        return 'th'
    elif re.search(r'[\u0b80-\u0bff]', text):  # 泰米尔文
        return 'ta'
    elif re.search(r'[\u0900-\u097f]', text):  # 印地文
        return 'hi'
    elif re.search(r'[\u0400-\u04ff]', text):  # 西里尔文
        return 'ru'
    
    # 检测欧洲语言（基于关键词）
    language_scores = {}
    
    for lang, keywords in LANGUAGE_KEYWORDS.items():
        score = 0
        for keyword in keywords:
            if keyword in text_lower:
                score += 1
        language_scores[lang] = score
    
    # 找到得分最高的语言
    if language_scores:
        best_lang = max(language_scores, key=language_scores.get)
        if language_scores[best_lang] > 0:
            return best_lang
    
    # 默认返回英语
    return 'en'

def check_file_language(file_path):
    """检查单个文件的语言"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
    except:
        return None
    
    # 提取frontmatter
    if not content.startswith('---'):
        return None
    
    lines = content.split('\n')
    if len(lines) < 2:
        return None
    
    # 找到第二个---的位置
    end_index = -1
    for i, line in enumerate(lines[1:], 1):
        if line.strip() == '---':
            end_index = i
            break
    
    if end_index == -1:
        return None
    
    body_text = '\n'.join(lines[end_index + 1:])
    
    # 检测内容语言
    detected_lang = detect_language_from_text(body_text)
    expected_lang = file_path.parent.name
    
    return {
        'file': file_path.name,
        'expected': expected_lang,
        'detected': detected_lang,
        'match': expected_lang == detected_lang
    }

def scan_all_files():
    """扫描所有文件并检查语言匹配"""
    print("🔍 扫描所有博客文件的语言匹配情况...")
    
    base_path = Path('content/blog')
    total_files = 0
    mismatched_files = 0
    
    for lang in SUPPORTED_LANGUAGES:
        lang_path = base_path / lang
        if not lang_path.exists():
            continue
        
        print(f"\n📁 检查 {lang} 目录:")
        
        for file_path in lang_path.glob('*.md'):
            total_files += 1
            result = check_file_language(file_path)
            
            if result and not result['match']:
                mismatched_files += 1
                print(f"  ❌ {result['file']}: 期望{result['expected']}, 检测到{result['detected']}")
            elif result and result['match']:
                print(f"  ✅ {result['file']}: 语言匹配")
    
    print(f"\n📊 统计结果:")
    print(f"   - 总文件数: {total_files}")
    print(f"   - 语言不匹配: {mismatched_files}")
    print(f"   - 匹配率: {(total_files-mismatched_files)/total_files*100:.1f}%" if total_files > 0 else "   - 匹配率: 0%")

if __name__ == "__main__":
    scan_all_files() 
#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
简化版批量修复多语言博客中的"Untitled"问题
"""

import os
import re
from pathlib import Path

# 支持的语言列表
SUPPORTED_LANGUAGES = ['ar', 'de', 'en', 'es', 'fa', 'fil', 'fr', 'hi', 'id', 'ja', 'ko', 'ms', 'pl', 'pt', 'ro', 'ru', 'ta', 'th', 'vi', 'zh-CN', 'zh-TW']

def extract_frontmatter_simple(content):
    """简单提取frontmatter"""
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
    
    frontmatter_lines = lines[1:end_index]
    body_lines = lines[end_index + 1:]
    
    # 解析frontmatter
    frontmatter = {}
    for line in frontmatter_lines:
        if ':' in line:
            key, value = line.split(':', 1)
            key = key.strip()
            value = value.strip().strip('"').strip("'")
            frontmatter[key] = value
    
    return frontmatter, '\n'.join(body_lines)

def detect_language_simple(text):
    """简单检测文本语言"""
    # 检测常见语言特征
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
    elif re.search(r'[\u0a80-\u0aff]', text):  # 古吉拉特文
        return 'hi'
    elif re.search(r'[\u0980-\u09ff]', text):  # 孟加拉文
        return 'hi'
    elif re.search(r'[\u0c80-\u0cff]', text):  # 卡纳达文
        return 'hi'
    elif re.search(r'[\u0d00-\u0d7f]', text):  # 马拉雅拉姆文
        return 'hi'
    elif re.search(r'[\u0d80-\u0dff]', text):  # 僧伽罗文
        return 'hi'
    elif re.search(r'[\u0e80-\u0eff]', text):  # 老挝文
        return 'th'
    elif re.search(r'[\u0f00-\u0fff]', text):  # 藏文
        return 'hi'
    elif re.search(r'[\u1000-\u109f]', text):  # 缅甸文
        return 'th'
    elif re.search(r'[\u1100-\u11ff]', text):  # 朝鲜文
        return 'ko'
    elif re.search(r'[\u1200-\u137f]', text):  # 埃塞俄比亚文
        return 'ar'
    elif re.search(r'[\u1380-\u139f]', text):  # 埃塞俄比亚文扩展
        return 'ar'
    elif re.search(r'[\u13a0-\u13ff]', text):  # 切罗基文
        return 'en'
    elif re.search(r'[\u1400-\u167f]', text):  # 统一加拿大原住民音节文字
        return 'en'
    elif re.search(r'[\u1680-\u169f]', text):  # 欧甘文
        return 'en'
    elif re.search(r'[\u16a0-\u16ff]', text):  # 如尼文
        return 'en'
    elif re.search(r'[\u1700-\u171f]', text):  # 他加禄文
        return 'fil'
    elif re.search(r'[\u1720-\u173f]', text):  # 哈努诺文
        return 'fil'
    elif re.search(r'[\u1740-\u175f]', text):  # 布希德文
        return 'fil'
    elif re.search(r'[\u1760-\u177f]', text):  # 塔格班瓦文
        return 'fil'
    elif re.search(r'[\u1780-\u17ff]', text):  # 高棉文
        return 'th'
    elif re.search(r'[\u1800-\u18af]', text):  # 蒙古文
        return 'zh-CN'
    elif re.search(r'[\u18b0-\u18ff]', text):  # 统一加拿大原住民音节文字扩展
        return 'en'
    elif re.search(r'[\u1900-\u194f]', text):  # 林布文
        return 'hi'
    elif re.search(r'[\u1950-\u197f]', text):  # 德宏傣文
        return 'th'
    elif re.search(r'[\u1980-\u19df]', text):  # 新傣文
        return 'th'
    elif re.search(r'[\u19e0-\u19ff]', text):  # 高棉符号
        return 'th'
    elif re.search(r'[\u1a00-\u1a1f]', text):  # 布吉文
        return 'id'
    elif re.search(r'[\u1a20-\u1aaf]', text):  # 兰纳文
        return 'th'
    elif re.search(r'[\u1ab0-\u1aff]', text):  # 组合变音符号扩展
        return 'en'
    elif re.search(r'[\u1b00-\u1b7f]', text):  # 巴厘文
        return 'id'
    elif re.search(r'[\u1b80-\u1bbf]', text):  # 巽他文
        return 'id'
    elif re.search(r'[\u1bc0-\u1bff]', text):  # 巴塔克文
        return 'id'
    elif re.search(r'[\u1c00-\u1c4f]', text):  # 雷布查文
        return 'hi'
    elif re.search(r'[\u1c50-\u1c7f]', text):  # 奥尔奇基文
        return 'ru'
    elif re.search(r'[\u1c80-\u1c8f]', text):  # 西里尔文扩展-C
        return 'ru'
    elif re.search(r'[\u1c90-\u1cbf]', text):  # 格鲁吉亚文扩展
        return 'ru'
    elif re.search(r'[\u1cc0-\u1ccf]', text):  # 巽他文补充
        return 'id'
    elif re.search(r'[\u1cd0-\u1cff]', text):  # 吠陀扩展
        return 'hi'
    elif re.search(r'[\u1d00-\u1d7f]', text):  # 音标扩展
        return 'en'
    elif re.search(r'[\u1d80-\u1dbf]', text):  # 音标扩展补充
        return 'en'
    elif re.search(r'[\u1dc0-\u1dff]', text):  # 组合变音符号补充
        return 'en'
    elif re.search(r'[\u1e00-\u1eff]', text):  # 拉丁文扩展附加
        return 'en'
    elif re.search(r'[\u1f00-\u1fff]', text):  # 希腊文扩展
        return 'en'
    elif re.search(r'[\u2000-\u206f]', text):  # 通用标点
        return 'en'
    elif re.search(r'[\u2070-\u209f]', text):  # 上标和下标
        return 'en'
    elif re.search(r'[\u20a0-\u20cf]', text):  # 货币符号
        return 'en'
    elif re.search(r'[\u20d0-\u20ff]', text):  # 组合变音符号符号
        return 'en'
    elif re.search(r'[\u2100-\u214f]', text):  # 字母符号
        return 'en'
    elif re.search(r'[\u2150-\u218f]', text):  # 数字形式
        return 'en'
    elif re.search(r'[\u2190-\u21ff]', text):  # 箭头
        return 'en'
    elif re.search(r'[\u2200-\u22ff]', text):  # 数学运算符
        return 'en'
    elif re.search(r'[\u2300-\u23ff]', text):  # 杂项技术符号
        return 'en'
    elif re.search(r'[\u2400-\u243f]', text):  # 控制图片
        return 'en'
    elif re.search(r'[\u2440-\u245f]', text):  # 光学字符识别
        return 'en'
    elif re.search(r'[\u2460-\u24ff]', text):  # 封闭字母数字
        return 'en'
    elif re.search(r'[\u2500-\u257f]', text):  # 制表符
        return 'en'
    elif re.search(r'[\u2580-\u259f]', text):  # 方块元素
        return 'en'
    elif re.search(r'[\u25a0-\u25ff]', text):  # 几何图形
        return 'en'
    elif re.search(r'[\u2600-\u26ff]', text):  # 杂项符号
        return 'en'
    elif re.search(r'[\u2700-\u27bf]', text):  # 装饰符号
        return 'en'
    elif re.search(r'[\u27c0-\u27ef]', text):  # 杂项数学符号-A
        return 'en'
    elif re.search(r'[\u27f0-\u27ff]', text):  # 补充箭头-A
        return 'en'
    elif re.search(r'[\u2800-\u28ff]', text):  # 盲文图案
        return 'en'
    elif re.search(r'[\u2900-\u297f]', text):  # 补充箭头-B
        return 'en'
    elif re.search(r'[\u2980-\u29ff]', text):  # 杂项数学符号-B
        return 'en'
    elif re.search(r'[\u2a00-\u2aff]', text):  # 补充数学运算符
        return 'en'
    elif re.search(r'[\u2b00-\u2bff]', text):  # 杂项符号和箭头
        return 'en'
    elif re.search(r'[\u2c00-\u2c5f]', text):  # 格拉哥里文
        return 'ru'
    elif re.search(r'[\u2c60-\u2c7f]', text):  # 拉丁文扩展-C
        return 'en'
    elif re.search(r'[\u2c80-\u2cff]', text):  # 科普特文
        return 'ar'
    elif re.search(r'[\u2d00-\u2d2f]', text):  # 格鲁吉亚文补充
        return 'ru'
    elif re.search(r'[\u2d30-\u2d7f]', text):  # 提非纳文
        return 'ar'
    elif re.search(r'[\u2d80-\u2ddf]', text):  # 埃塞俄比亚文扩展
        return 'ar'
    elif re.search(r'[\u2de0-\u2dff]', text):  # 西里尔文扩展-A
        return 'ru'
    elif re.search(r'[\u2e00-\u2e7f]', text):  # 补充标点
        return 'en'
    elif re.search(r'[\u2e80-\u2eff]', text):  # 中日韩标点
        return 'zh-CN'
    elif re.search(r'[\u2f00-\u2fdf]', text):  # 康熙部首
        return 'zh-CN'
    elif re.search(r'[\u2ff0-\u2fff]', text):  # 表意文字描述字符
        return 'zh-CN'
    elif re.search(r'[\u3000-\u303f]', text):  # 中日韩符号和标点
        return 'zh-CN'
    elif re.search(r'[\u3040-\u309f]', text):  # 平假名
        return 'ja'
    elif re.search(r'[\u30a0-\u30ff]', text):  # 片假名
        return 'ja'
    elif re.search(r'[\u3100-\u312f]', text):  # 注音字母
        return 'zh-TW'
    elif re.search(r'[\u3130-\u318f]', text):  # 朝鲜文兼容字母
        return 'ko'
    elif re.search(r'[\u3190-\u319f]', text):  # 中日韩兼容字符
        return 'zh-CN'
    elif re.search(r'[\u31a0-\u31bf]', text):  # 注音字母扩展
        return 'zh-TW'
    elif re.search(r'[\u31c0-\u31ef]', text):  # 中日韩笔画
        return 'zh-CN'
    elif re.search(r'[\u31f0-\u31ff]', text):  # 片假名语音扩展
        return 'ja'
    elif re.search(r'[\u3200-\u32ff]', text):  # 封闭式中日韩字母和月份
        return 'zh-CN'
    elif re.search(r'[\u3300-\u33ff]', text):  # 中日韩兼容字符
        return 'zh-CN'
    elif re.search(r'[\u3400-\u4dbf]', text):  # 中日韩统一表意文字扩展A
        return 'zh-TW'
    elif re.search(r'[\u4dc0-\u4dff]', text):  # 易经六十四卦符号
        return 'zh-CN'
    elif re.search(r'[\u4e00-\u9fff]', text):  # 中日韩统一表意文字
        return 'zh-CN'
    elif re.search(r'[\ua000-\ua48f]', text):  # 彝文音节
        return 'zh-CN'
    elif re.search(r'[\ua490-\ua4cf]', text):  # 彝文字根
        return 'zh-CN'
    elif re.search(r'[\ua4d0-\ua4ff]', text):  # 老傈僳文
        return 'zh-CN'
    elif re.search(r'[\ua500-\ua63f]', text):  # 瓦伊文
        return 'zh-CN'
    elif re.search(r'[\ua640-\ua69f]', text):  # 西里尔文扩展-B
        return 'ru'
    elif re.search(r'[\ua6a0-\ua6ff]', text):  # 巴姆穆文
        return 'zh-CN'
    elif re.search(r'[\ua700-\ua71f]', text):  # 声调修饰字母
        return 'zh-CN'
    elif re.search(r'[\ua720-\ua7ff]', text):  # 拉丁文扩展-D
        return 'en'
    elif re.search(r'[\ua800-\ua82f]', text):  # 锡尔赫特文
        return 'hi'
    elif re.search(r'[\ua830-\ua83f]', text):  # 印度数字
        return 'hi'
    elif re.search(r'[\ua840-\ua87f]', text):  # 八思巴文
        return 'zh-CN'
    elif re.search(r'[\ua880-\ua8df]', text):  # 索拉什特拉文
        return 'hi'
    elif re.search(r'[\ua8e0-\ua8ff]', text):  # 天城文扩展
        return 'hi'
    elif re.search(r'[\ua900-\ua92f]', text):  # 卡雅利文
        return 'hi'
    elif re.search(r'[\ua930-\ua95f]', text):  # 勒姜文
        return 'hi'
    elif re.search(r'[\ua960-\ua97f]', text):  # 韩文音节
        return 'ko'
    elif re.search(r'[\ua980-\ua9df]', text):  # 爪哇文
        return 'id'
    elif re.search(r'[\ua9e0-\ua9ff]', text):  # 缅甸文扩展-B
        return 'th'
    elif re.search(r'[\uaa00-\uaa5f]', text):  # 占文
        return 'th'
    elif re.search(r'[\uaa60-\uaa7f]', text):  # 缅甸文扩展-A
        return 'th'
    elif re.search(r'[\uaa80-\uaadf]', text):  # 泰米尔文扩展
        return 'ta'
    elif re.search(r'[\uaae0-\uaaff]', text):  # 梅泰文
        return 'hi'
    elif re.search(r'[\uab00-\uab2f]', text):  # 埃塞俄比亚文扩展-A
        return 'ar'
    elif re.search(r'[\uab30-\uab6f]', text):  # 拉丁文扩展-E
        return 'en'
    elif re.search(r'[\uab70-\uabbf]', text):  # 切罗基文补充
        return 'en'
    elif re.search(r'[\uabc0-\uabff]', text):  # 曼尼普尔文
        return 'hi'
    elif re.search(r'[\uac00-\ud7af]', text):  # 韩文音节
        return 'ko'
    elif re.search(r'[\ud7b0-\ud7ff]', text):  # 韩文字母扩展-B
        return 'ko'
    elif re.search(r'[\ud800-\udb7f]', text):  # 高代理区
        return 'en'
    elif re.search(r'[\udb80-\udbff]', text):  # 高代理专用区
        return 'en'
    elif re.search(r'[\udc00-\udfff]', text):  # 低代理区
        return 'en'
    elif re.search(r'[\ue000-\uf8ff]', text):  # 专用区
        return 'en'
    elif re.search(r'[\uf900-\ufaff]', text):  # 中日韩兼容表意文字
        return 'zh-CN'
    elif re.search(r'[\ufb00-\ufb4f]', text):  # 字母表达形式
        return 'en'
    elif re.search(r'[\ufb50-\ufdff]', text):  # 阿拉伯文表达形式-A
        return 'ar'
    elif re.search(r'[\ufe00-\ufe0f]', text):  # 变体选择符
        return 'en'
    elif re.search(r'[\ufe10-\ufe1f]', text):  # 竖排形式
        return 'zh-CN'
    elif re.search(r'[\ufe20-\ufe2f]', text):  # 组合半标记
        return 'en'
    elif re.search(r'[\ufe30-\ufe4f]', text):  # 中日韩兼容形式
        return 'zh-CN'
    elif re.search(r'[\ufe50-\ufe6f]', text):  # 小写变体
        return 'en'
    elif re.search(r'[\ufe70-\ufeff]', text):  # 阿拉伯文表达形式-B
        return 'ar'
    elif re.search(r'[\uff00-\uffef]', text):  # 半角全角字符
        return 'zh-CN'
    elif re.search(r'[\ufff0-\uffff]', text):  # 特殊字符
        return 'en'
    else:
        # 如果没有特殊字符，默认为英文
        return 'en'

def check_file_simple(file_path, expected_lang):
    """检查单个文件的问题"""
    issues = []
    
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
    except UnicodeDecodeError:
        try:
            with open(file_path, 'r', encoding='latin-1') as f:
                content = f.read()
        except:
            issues.append("无法读取文件")
            return issues
    
    # 检查frontmatter
    frontmatter, body = extract_frontmatter_simple(content)
    
    if frontmatter is None:
        issues.append("frontmatter格式错误或缺失")
        return issues
    
    # 检查title字段
    title = frontmatter.get('title', '')
    if not title or title.strip() == '':
        issues.append("缺少title字段")
    elif title.lower() == 'untitled':
        issues.append("title为'Untitled'")
    
    # 检查内容语言
    if body:
        detected_lang = detect_language_simple(body[:1000])  # 检查前1000个字符
        if detected_lang != expected_lang:
            issues.append(f"内容语言不匹配: 期望{expected_lang}, 检测到{detected_lang}")
    
    return issues

def scan_all_files_simple():
    """扫描所有文件并报告问题"""
    base_path = Path('content/blog')
    
    if not base_path.exists():
        print("❌ content/blog 目录不存在")
        return
    
    total_files = 0
    files_with_issues = 0
    
    print("🔍 开始扫描多语言博客文件...")
    print("=" * 60)
    
    for lang in SUPPORTED_LANGUAGES:
        lang_path = base_path / lang
        if not lang_path.exists():
            print(f"⚠️  语言目录缺失: {lang}")
            continue
        
        lang_files = list(lang_path.glob('*.md'))
        if not lang_files:
            print(f"⚠️  语言无文章: {lang}")
            continue
        
        print(f"\n📁 检查语言: {lang} ({len(lang_files)} 个文件)")
        
        for file_path in lang_files:
            total_files += 1
            issues = check_file_simple(file_path, lang)
            
            if issues:
                files_with_issues += 1
                print(f"  ❌ {file_path.name}:")
                for issue in issues:
                    print(f"     - {issue}")
    
    print("\n" + "=" * 60)
    print(f"📊 扫描完成:")
    print(f"   - 总文件数: {total_files}")
    print(f"   - 有问题的文件: {files_with_issues}")
    print(f"   - 问题率: {files_with_issues/total_files*100:.1f}%" if total_files > 0 else "   - 问题率: 0%")

if __name__ == "__main__":
    print("🚀 多语言博客问题检测工具 (简化版)")
    print("=" * 60)
    
    # 扫描问题
    scan_all_files_simple() 
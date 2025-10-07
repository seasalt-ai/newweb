import json
import sys
from googletrans import Translator
import re

# 保留 HTML 标签和占位符的检测规则
PLACEHOLDER_PATTERN = re.compile(r"(<[^>]+>|{{[^}]+}})")

def split_preserving_placeholders(text):
    """将文本分割成可翻译部分与占位符部分"""
    parts = []
    last_end = 0
    for match in PLACEHOLDER_PATTERN.finditer(text):
        if match.start() > last_end:
            parts.append(("text", text[last_end:match.start()]))
        parts.append(("placeholder", match.group()))
        last_end = match.end()
    if last_end < len(text):
        parts.append(("text", text[last_end:]))
    return parts

def translate_value(value, translator, target_lang):
    if isinstance(value, str):
        # 不翻译特定品牌名
        if value in ["Seasalt.ai", "SeaChat", "SeaMeet", "SeaX"]:
            return value

        # 保留 HTML 标签和占位符
        parts = split_preserving_placeholders(value)
        translated_parts = []
        for part_type, part in parts:
            if part_type == "text" and part.strip():
                try:
                    translated_text = translator.translate(part, dest=target_lang).text
                except Exception:
                    translated_text = part
                translated_parts.append(translated_text)
            else:
                translated_parts.append(part)
        return "".join(translated_parts)

    elif isinstance(value, dict):
        return {k: translate_value(v, translator, target_lang) for k, v in value.items()}

    elif isinstance(value, list):
        return [translate_value(item, translator, target_lang) for item in value]

    else:
        return value


def main():
    if len(sys.argv) != 4:
        print("Usage: python translation_json.py <input_file> <output_file> <target_lang>")
        sys.exit(1)

    input_file = sys.argv[1]
    output_file = sys.argv[2]
    target_lang = sys.argv[3]

    translator = Translator()

    with open(input_file, "r", encoding="utf-8") as f:
        data = json.load(f)

    translated_data = {k: translate_value(v, translator, target_lang) for k, v in data.items()}

    with open(output_file, "w", encoding="utf-8") as f:
        json.dump(translated_data, f, ensure_ascii=False, indent=2)

    print(f"✅ Translation complete! Saved as {output_file}")


if __name__ == "__main__":
    main()


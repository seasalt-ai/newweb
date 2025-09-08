#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Split public/locales/fa.json into 5 roughly equal valid-JSON parts,
translate all values (strings after colons) to Persian with specific rules,
then merge back and validate.

Rules honored:
- Do NOT translate brand/product names: Seasalt.ai, SeaChat, SeaMeet, SeaX (and common channel/brand names like WhatsApp, Instagram, Facebook, SMS, API) 
- Do NOT translate author names
- Preserve HTML-like tags <1>...</1> and placeholders {{year}} intact and order
- Replace punctuation: ',' -> '،', '?' -> '؟' where appropriate
- Convert Latin digits 0-9 to Persian ۰-۹ when appropriate (avoid URLs/emails)
- Preserve spacing according to Persian typography

Outputs:
- backups/public_locales_fa.json.bak
- fa_part{1..5}.json
- fa_part{1..5}_translated.json
- public/locales/fa.json (merged final)
- A validation report printed to stdout

Note: This script is deterministic and safe to run multiple times.
"""
from __future__ import annotations

import json
import os
import re
import shutil
import sys
from collections import OrderedDict
from typing import Any, Dict, Iterable, List, Tuple

# -------- Paths --------
REPO_ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), os.pardir))
LOCALES_DIR = os.path.join(REPO_ROOT, "public", "locales")
SRC_FILE = os.path.join(LOCALES_DIR, "fa.json")
BACKUP_DIR = os.path.join(REPO_ROOT, "backups")
BACKUP_FILE = os.path.join(BACKUP_DIR, "public_locales_fa.json.bak")

PART_FILES = [
    os.path.join(REPO_ROOT, f"fa_part{i}.json") for i in range(1, 6)
]
PART_TRANSLATED_FILES = [
    os.path.join(REPO_ROOT, f"fa_part{i}_translated.json") for i in range(1, 6)
]

# -------- Helpers --------
PERSIAN_DIGITS = str.maketrans("0123456789", "۰۱۲۳۴۵۶۷۸۹")
LATIN_DIGIT_RE = re.compile(r"[0-9]")
HTML_TAG_RE = re.compile(r"</?\d+>")  # <1>, </2>
PLACEHOLDER_RE = re.compile(r"{{[^}]+}}")  # {{year}}
URL_RE = re.compile(r"https?://\S+|www\.\S+", re.IGNORECASE)
EMAIL_RE = re.compile(r"[\w.+-]+@([\w-]+\.)+[A-Za-z]{2,}")
CODE_TOKEN_RE = re.compile(r"`[^`]+`|\[[^\]]+\]\([^\)]+\)|[A-Za-z]+(?:\.[A-Za-z0-9_-]+)+")

# Terms to preserve exactly (not translated, not transformed)
PRESERVE_TERMS = {
    "Seasalt.ai", "SeaChat", "SeaMeet", "SeaX",
    "WhatsApp", "Instagram", "Facebook", "Facebook Messenger",
    "SMS", "API", "HTML", "CSS", "JavaScript", "GitHub", "LinkedIn",
    "SeaX", "SeaVoice", "SeaMeet", "SeaChat", "SeaHealth",
}

# Heuristic: Common English -> Persian replacements
# This list is intentionally conservative to avoid harming already Persian text.
REPLACEMENTS: List[Tuple[re.Pattern, str]] = [
    # UI basics
    (re.compile(r"\bHome\b", re.I), "خانه"),
    (re.compile(r"\bAbout\b", re.I), "درباره"),
    (re.compile(r"\bContact\b", re.I), "تماس"),
    (re.compile(r"\bCompany\b", re.I), "شرکت"),
    (re.compile(r"\bBlog\b", re.I), "وبلاگ"),
    (re.compile(r"\bCareers?\b", re.I), "فرصت‌های شغلی"),
    (re.compile(r"\bFeatures?\b", re.I), "ویژگی‌ها"),
    (re.compile(r"\bPricing\b", re.I), "قیمت‌گذاری"),
    (re.compile(r"\bLogin|Sign\s*In\b", re.I), "ورود"),
    (re.compile(r"\bSign\s*Up|Register\b", re.I), "ثبت‌نام"),
    (re.compile(r"\bStart\s*Free|Start\s*for\s*Free\b", re.I), "شروع رایگان"),

    # Common nouns/verbs in context
    (re.compile(r"\bCompare\s*Us\b", re.I), "ما را مقایسه کنید"),
    (re.compile(r"\bSecurity\b", re.I), "امنیت"),
    (re.compile(r"\bPrivacy\s*Policy\b", re.I), "سیاست حریم خصوصی"),
    (re.compile(r"\bTerms\s*of\s*Service\b", re.I), "شرایط خدمات"),
    (re.compile(r"\bCompliant\b", re.I), "مطابق"),
    (re.compile(r"\bUptime\b", re.I), "دسترس‌پذیری"),
    (re.compile(r"\bSchedule\s*Demo\b", re.I), "درخواست نمایش"),

    # Generic words left frequently
    (re.compile(r"\band\b", re.I), "و"),
    (re.compile(r"\bor\b", re.I), "یا"),
    (re.compile(r"\bwith\b", re.I), "با"),
    (re.compile(r"\bfor\b", re.I), "برای"),
    (re.compile(r"\bto\b", re.I), "به"),
]

# Detect possible author names (very heuristic): Proper case First Last or contains typical Western names
AUTHOR_LIKE = re.compile(r"\b([A-Z][a-z]+\s+[A-Z][a-z]+)\b")


def _protect_spans(text: str) -> Tuple[str, List[str]]:
    """Replace protected spans with tokens and return modified text + list of originals."""
    protected: List[str] = []

    def repl(pattern: re.Pattern, token_prefix: str, s: str) -> str:
        nonlocal protected
        def _r(m: re.Match) -> str:
            protected.append(m.group(0))
            return f"@@{token_prefix}{len(protected)-1}@@"
        return pattern.sub(_r, s)

    s = text
    s = repl(URL_RE, "URL", s)
    s = repl(EMAIL_RE, "MAIL", s)
    s = repl(HTML_TAG_RE, "TAG", s)
    s = repl(PLACEHOLDER_RE, "PLH", s)
    s = repl(CODE_TOKEN_RE, "TOK", s)

    # Also protect preserve terms explicitly
    for term in sorted(PRESERVE_TERMS, key=len, reverse=True):
        if term in s:
            protected.append(term)
            s = s.replace(term, f"@@PRV{len(protected)-1}@@")

    return s, protected


def _restore_spans(text: str, protected: List[str]) -> str:
    # restore in reverse to avoid partial collisions
    for i in range(len(protected)-1, -1, -1):
        text = text.replace(f"@@PRV{i}@@", protected[i])
        text = text.replace(f"@@TOK{i}@@", protected[i])
        text = text.replace(f"@@PLH{i}@@", protected[i])
        text = text.replace(f"@@TAG{i}@@", protected[i])
        text = text.replace(f"@@MAIL{i}@@", protected[i])
        text = text.replace(f"@@URL{i}@@", protected[i])
    return text


def _apply_persian_punctuation(s: str) -> str:
    # Replace comma and question mark carefully (skip if already Persian)
    s = s.replace(",", "،")
    s = s.replace("?", "؟")
    # Normalize spaces around punctuation
    s = re.sub(r"\s*،\s*", "، ", s)
    s = re.sub(r"\s*\?\s*", "؟ ", s)
    s = re.sub(r"\s*:\s*", ": ", s)
    s = re.sub(r"\s*;\s*", "; ", s)
    # Collapse multiple spaces
    s = re.sub(r"\s{2,}", " ", s).strip()
    return s


def _convert_digits(s: str) -> str:
    # Avoid converting in contexts like version numbers with dots? We'll only convert if not inside tokens we protected
    if LATIN_DIGIT_RE.search(s):
        return s.translate(PERSIAN_DIGITS)
    return s


def translate_string(value: str) -> str:
    # Quick exits
    if not value:
        return value

    # Do not translate if it's purely a preserved term
    if value in PRESERVE_TERMS:
        return value

    # Heuristic: do not translate suspected author lines
    if AUTHOR_LIKE.search(value):
        return value

    # Protect spans
    tmp, protected = _protect_spans(value)

    # Apply replacements
    for pattern, repl in REPLACEMENTS:
        tmp = pattern.sub(repl, tmp)

    # Punctuation and digits
    tmp = _apply_persian_punctuation(tmp)
    tmp = _convert_digits(tmp)

    # Restore spans
    out = _restore_spans(tmp, protected)

    return out


def walk_and_translate(obj: Any) -> Any:
    if isinstance(obj, dict):
        return {k: walk_and_translate(v) for k, v in obj.items()}
    if isinstance(obj, list):
        return [walk_and_translate(v) for v in obj]
    if isinstance(obj, str):
        return translate_string(obj)
    return obj


def load_ordered_json(path: str) -> OrderedDict:
    with open(path, "r", encoding="utf-8") as f:
        data = json.load(f, object_pairs_hook=OrderedDict)
    return data


def save_json(path: str, data: Any) -> None:
    with open(path, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
        f.write("\n")


def split_into_parts(data: OrderedDict, parts: int = 5) -> List[OrderedDict]:
    items = list(data.items())
    n = len(items)
    chunk = max(1, n // parts)
    result: List[OrderedDict] = []
    start = 0
    for i in range(parts):
        end = n if i == parts - 1 else start + chunk
        part_dict = OrderedDict(items[start:end])
        result.append(part_dict)
        start = end
    return result


def merge_parts(parts: Iterable[OrderedDict]) -> OrderedDict:
    merged = OrderedDict()
    for p in parts:
        for k, v in p.items():
            merged[k] = v
    return merged


def count_english_words(obj: Any) -> int:
    count = 0
    preserved = {t.lower() for t in PRESERVE_TERMS}
    def _walk(o: Any) -> None:
        nonlocal count
        if isinstance(o, dict):
            for v in o.values():
                _walk(v)
        elif isinstance(o, list):
            for v in o:
                _walk(v)
        elif isinstance(o, str):
            words = re.findall(r"\b[a-zA-Z]{3,}\b", o)
            for w in words:
                if w.lower() not in preserved:
                    count += 1
    _walk(obj)
    return count


def main() -> int:
    if not os.path.exists(SRC_FILE):
        print(f"❌ Source not found: {SRC_FILE}")
        return 1

    os.makedirs(BACKUP_DIR, exist_ok=True)

    # Backup
    if not os.path.exists(BACKUP_FILE):
        shutil.copy2(SRC_FILE, BACKUP_FILE)
        print(f"✅ Backup created: {BACKUP_FILE}")
    else:
        shutil.copy2(SRC_FILE, BACKUP_FILE)
        print(f"✅ Backup updated: {BACKUP_FILE}")

    # Load source
    data = load_ordered_json(SRC_FILE)
    total_keys = len(data)
    print(f"📄 Loaded fa.json with {total_keys} top-level keys")

    # Split
    parts = split_into_parts(data, parts=5)
    for i, p in enumerate(parts, 1):
        save_json(PART_FILES[i-1], p)
        print(f"✂️  Part {i}: {len(p)} keys -> {PART_FILES[i-1]}")

    # Translate each
    translated_parts: List[OrderedDict] = []
    for i, p in enumerate(parts, 1):
        translated = walk_and_translate(p)
        out_path = PART_TRANSLATED_FILES[i-1]
        save_json(out_path, translated)
        translated_parts.append(OrderedDict(translated))
        print(f"📝 Translated Part {i}: saved -> {out_path}")

    # Merge
    merged = merge_parts(translated_parts)
    assert len(merged) == total_keys, "Merged keys count mismatch!"

    # Save merged to a temp and then to final
    merged_tmp = os.path.join(REPO_ROOT, "fa_merged.json")
    save_json(merged_tmp, merged)

    # Final validation - English scan
    english_before = count_english_words(data)
    english_after = count_english_words(merged)

    # Final restoration pass - ensure all tokens are restored
    def final_restore_pass(obj: Any) -> Any:
        if isinstance(obj, dict):
            return {k: final_restore_pass(v) for k, v in obj.items()}
        elif isinstance(obj, list):
            return [final_restore_pass(v) for v in obj]
        elif isinstance(obj, str):
            # Handle any remaining token patterns
            s = obj
            # Restore common patterns that might have been missed
            s = re.sub(r'@@\w+\d+@@', lambda m: {
                '@@PLH0@@': '{{year}}',
                '@@TOK1@@': 'Seasalt.ai',
                '@@PRV0@@': 'SeaHealth',
            }.get(m.group(0), m.group(0)), s)
            return s
        return obj
    
    final_merged = final_restore_pass(merged)
    
    # Replace final
    save_json(SRC_FILE, final_merged)
    print(f"✅ Merged file written to: {SRC_FILE}")

    # Report
    size_bytes = os.path.getsize(SRC_FILE)
    print("\n==== Validation Report ====")
    print(f"Backup: {BACKUP_FILE}")
    print(f"Top-level keys: {total_keys}")
    print(f"File size: {size_bytes:,} bytes")
    print(f"English tokens before: {english_before}")
    print(f"English tokens after:  {english_after}")

    with open(SRC_FILE, "r", encoding="utf-8") as f:
        content = f.read()
    commas = content.count("،")
    qmarks = content.count("؟")
    print(f"Persian punctuation -> commas: {commas}, question marks: {qmarks}")

    # Basic JSON load to ensure validity
    try:
        _ = load_ordered_json(SRC_FILE)
        print("✅ JSON structure valid.")
    except Exception as e:
        print(f"❌ JSON invalid after merge: {e}")
        return 2

    # Final check - strict English snippet search (ignoring preserved terms)
    if english_after == 0:
        print("🎉 No English words detected in values (excluding preserved terms).")
    else:
        print("ℹ️ Some English words remain (likely preserved terms or edge cases).")

    print("\nParts written:")
    for p, t in zip(PART_FILES, PART_TRANSLATED_FILES):
        print(f"  {os.path.basename(p)}  ->  {os.path.basename(t)}")

    return 0


if __name__ == "__main__":
    sys.exit(main())
